# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import csv


class DdFilePipeline:
    def open_spider(self, spider):
        if spider.name == 'dd_spider':
            self.file = open('dangdang.csv', 'a', newline='', encoding='utf-8')
            self.writer = csv.writer(self.file)
            # 检查文件是否为空，只有在为空时才写入表头
            if self.file.tell() == 0:
                self.writer.writerow(['id', 'title', 'price', 'author', 'date_data', 'detail', 'producer'])
                print("CSV文件已打开并写入表头.")
    
    def process_item(self, item, spider):
        if spider.name == 'dd_spider':
            row = [
                0,  # id 字段可以由数据库自增，这里设置为0
                item.get('title', ''),
                item.get('price', ''),
                item.get('author', ''),
                item.get('date_data', ''),
                item.get('detail', ''),
                item.get('producer', '')
            ]
            try:
                self.writer.writerow(row)
                self.file.flush()  # 立即刷新缓冲区，确保数据写入磁盘
                print('数据已成功写入CSV文件...')
            except Exception as e:
                print(f'写入CSV文件时发生错误: {e}')
        return item

    def close_spider(self, spider):
        # 在爬虫关闭的时候仅执行一次
        if spider.name == 'dd_spider':
            # 关闭文件
            self.file.close()
            print("CSV文件已关闭.")