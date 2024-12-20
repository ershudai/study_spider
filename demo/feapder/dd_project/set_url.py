import redis
import json

def push_urls(redis_client, key, urls):
    """Push multiple URLs into a Redis list."""
    if not isinstance(urls, (list, tuple)):
        urls = [urls]
    redis_client.lpush(key, *urls)

def fetch_and_parse_items(redis_client, key, batch_size=100):
    """Fetch and parse items from a Redis list in batches."""
    offset = 0
    while True:
        items = redis_client.lrange(key, offset, offset + batch_size - 1)
        if not items:
            break
        for item in items:
            try:
                decoded_item = item.decode('utf-8')
                data = json.loads(decoded_item)
                yield data
            except (UnicodeDecodeError, json.JSONDecodeError) as e:
                print(f"Failed to decode or parse item: {e}")
        offset += batch_size

# 创建Redis客户端实例
res = redis.Redis(
    host='114.132.65.58',       # Redis服务器地址
    port=6380,             # Redis服务器端口号
    db=0,                  # 数据库索引，默认是0
    password='jiang2001.',  # Redis服务的密码
    decode_responses=True  # 自动将从Redis获取的数据解码为字符串
) # 设置decode_responses=True自动解码

# 推送URLs
urls = [
    'http://search.dangdang.com/?key=python&act=input&page_index=1',
    'http://search.dangdang.com/?key=java&act=input&page_index=1',
    'http://search.dangdang.com/?key=go&act=input&page_index=1'
]
push_urls(res, 'dd:start', urls)

# 读取并解析items
for item in fetch_and_parse_items(res, 'dangdang:items'):
    print(item)