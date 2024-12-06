import requests

# 图片的url
url = 'https://www.baidu.com/img/bd_logo1.png' 

# 响应本身就是一个图片,并且是二进制类型
response = requests.get(url=url) 

# print(response.content)

# 以二进制+写入的方式打开文件
with open('1.基础请求/baidu.png', 'wb') as f: 
    # 写入response.content bytes二进制类型
    f.write(response.content)