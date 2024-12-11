# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import json

class MyspiderPipeline:
    # 爬虫开启时打开一个文件，用于存储爬取到的数据。（爬虫开启时，就会运行该函数）
    def open_spider(self, spider):
        self.file = open('items.json', 'a',encoding="utf-8")
    
    # 关闭爬虫时关闭文件。（爬虫关闭时，就会运行该函数）
    def close_spider(self, spider):
        self.file.close()
    
    # @classmethod
    # def from_crawler(cls, crawler):
    #     settings = crawler.settings
    #     return cls(settings)

    # 爬虫文件中提取数据的方法每yield一次item，就会运行一次
    # 该方法为固定名称函数
    # item：抓取到的项目，通常是一个 Python 字典或自定义的 Item 对象。
    # spider：发送该项目的爬虫对象，可以通过它访问爬虫的属性和方法。
    # 返回值：
		# 返回处理后的项目，以便传递给下一个管道（如果有）。
		# 如果你不想将项目传递给下一个管道，可以直接返回 None。
		# 如果你想丢弃该项目，可以抛出 DropItem 异常。
    def process_item(self, item, spider):
        # 这里自定义的存储到文件，也可以自定义其他存储
        line = json.dumps(dict(item), ensure_ascii=False) + "\n"
        self.file.write(line)
        # 这里将数据返回，有scrapy自带的存储到文件的方法。下面有使用
        return item