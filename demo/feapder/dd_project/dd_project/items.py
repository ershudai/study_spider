# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

# 项目自带案例
# class DdProjectItem(scrapy.Item):
#     # define the fields for your item here like:
#     # name = scrapy.Field()
#     pass

# 本项目所使用的案例
class DdItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    price = scrapy.Field()
    author = scrapy.Field()
    date_data = scrapy.Field()
    detail = scrapy.Field()
    producer = scrapy.Field()