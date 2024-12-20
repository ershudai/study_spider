import feapder
from items import DoubanItem

class Douban(feapder.AirSpider):
    __custom_setting__ = dict(
        REQUEST_FILTER_ENABLE=True,  # request 去重
        REQUEST_FILTER_SETTING=dict(
            filter_type=4,  # 永久去重（BloomFilter） = 1 、内存去重（MemoryFilter） = 2、 临时去重（ExpireFilter）= 3、 轻量去重（LiteFilter）= 4
        ),
    )


    def start_requests(self):
        for i in range(1):
            yield feapder.Request(f"https://movie.douban.com/top250?start={i * 25}&filter=", 
            download_midware=self.download_midware)

    def download_midware(self, request):
        # 请求头设置
        request.headers = {
            'aa': 'baichuan'
        }

        # 代理设置
        # request.proxies = {
        #     "http": "http://xxx.xxx.xxx.xxx:xxxx"
        # }
        return request

    # def start_requests(self):
    #     for i in range(11):
    #         yield feapder.Request(f"https://movie.douban.com/top250?start={i*25}&filter=")

    def parse(self, request, response):
        li_list = response.xpath('//ol/li/div[@class="item"]')
        # print(response.text)

        for li in li_list:
            item = DoubanItem()
            item['title'] = li.xpath('./div[@class="info"]/div/a/span[1]/text()').extract_first()
            item['detail_url'] = li.xpath('./div[@class="info"]/div/a/@href').extract_first()
            item['score'] = li.xpath('.//div[@class="star"]/span[2]/text()').extract_first()
            yield feapder.Request(item['detail_url'], callback=self.parser_detail, item=item)

    def parser_detail(self, request, response):
        item = request.item
        if response.xpath('//div[@class="indent"]/span[@class="all hidden"]//text()'):
            item['detail_text'] = response.xpath('//div[@class="indent"]/span[@class="all hidden"]//text()').extract_first().strip()
        else:
            item['detail_text'] = response.xpath('//div[@class="indent"]/span[1]//text()').extract_first().strip()
        yield item

    # 响应response的校验
    def validate(self, request, response):
        print(response.status_code)
        if response.status_code != 200:
            raise Exception("response code not 200")

    

if __name__ == "__main__":
    Douban(thread_count=5).start()