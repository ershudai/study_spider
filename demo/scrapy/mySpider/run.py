# scrapy封装的命令执行
from scrapy import cmdline

if __name__ == '__main__':
    # 解析的是一个列表对象
    # 获取的json文件会乱码 需要修改配置 FEED_EXPORT_ENCODING = 'utf-8'
    cmdline.execute('scrapy crawl douban -o douban1.json -s FEED_EXPORT_ENCODING="utf-8"'.split())