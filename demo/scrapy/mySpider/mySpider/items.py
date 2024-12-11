# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class MyspiderItem(scrapy.Item):
    title = scrapy.Field()  # 标题
    rating = scrapy.Field()  # 评估
    quote = scrapy.Field()  # 概述
