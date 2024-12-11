import scrapy
from mySpider.items import MyspiderItem

class DoubanSpider(scrapy.Spider):
    # 爬虫名称
    name = "douban"
    # 允许的域名, 用于过滤爬取的url
    allowed_domains = ["douban.com"]
    # 起始的url
    start_urls = ["https://movie.douban.com/top250"]

    # 重写爬虫类的start_requests方法，实现爬取多页
    def start_requests(self):
        for i in range(0, 10):
            url = 'https://movie.douban.com/top250?start={}&filter='.format(i * 25)
            yield scrapy.Request(url)

    def parse(self, response, **kwargs):
        # 输出response对象下的url、status body、text、headers等信息
        # print("=================================================")
        # print(response.url)
        # print(response.status)
        # print(response.body)
        # print(response.text)
        # print(response.headers)
        # print("=================================================")

        # scrapy的response对象可以直接进行xpath
        ol_list=response.xpath("//ol[@class='grid_view']/li")

        for ol in ol_list:
            # 使用items的规定格式
            item=MyspiderItem()
            # item={}

            # # 取豆瓣信息ban中电影标题、评分、短评
            item['title']=ol.xpath(".//div[@class='hd']/a/span[1]/text()").extract_first()
            item['rating']=ol.xpath(".//div[@class='bd']/div/span[2]/text()").extract_first()
            item['quote']=ol.xpath(".//div[@class='bd']//p[@class='quote']/span/text()").extract_first()
            # item["xinxi"]="信息"
            yield item

        # 检查当前页面是否有下一页，如果有则继续翻页
        # next_page = response.xpath("//span[@class='next']/a/@href").extract_first()
        # if next_page is not None:
        #     next_page = response.urljoin(next_page)
        #     yield scrapy.Request(next_page, callback=self.parse)
        
