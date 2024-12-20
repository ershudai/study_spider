import scrapy
from scrapy_redis.spiders import RedisSpider
from dd_project.items import DdItem


class DdSpiderSpider(RedisSpider):
    name = 'dd_spider'
    # allowed_domains = ['search.dangdang.com/']
    # start_urls = ['http://search.dangdang.com//']
    redis_key = 'dd:start'

    def parse(self, response, **kwargs):
        li_list = response.xpath('//ul[@class="bigimg"]/li')
        for li in li_list:
            item = DdItem()
            item['title'] = li.xpath('./a/@title').extract_first()
            item['price'] = li.xpath('./p[@class="price"]/span[1]/text()').extract_first()
            item['author'] = li.xpath('./p[@class="search_book_author"]/span[1]/a[1]/@title').extract_first()
            item['date_data'] = li.xpath('./p[@class="search_book_author"]/span[last()-1]/text()').extract_first()
            item['detail'] = li.xpath('./p[@class="detail"]/text()').extract_first() if li.xpath(
                './p[@class="detail"]/text()') else '空'
            item['producer'] = li.xpath(
                './p[@class="search_book_author"]/span[last()]/a/text()').extract_first() if li.xpath(
                './p[@class="search_book_author"]/span[last()]/a/text()') else '空'
            print(item)
            yield item

        # if response.xpath('//ul[@name="Fy"]/li[@class="next"]/a/@href').extract_first() != None:
        #     next_url = response.urljoin(response.xpath('//ul[@name="Fy"]/li[@class="next"]/a/@href').extract_first())
        #     yield scrapy.Request(url=next_url, callback=self.parse)


if __name__ == '__main__':
    from scrapy import cmdline

    cmdline.execute('scrapy crawl dangdang'.split())
