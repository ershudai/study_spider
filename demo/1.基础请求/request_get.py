import requests 

url = 'http://www.baidu.com' 
response = requests.get(url)
print(response.text)

r_text=response.text
r_content=response.content
r_status_code=response.status_code
r_request_headers=response.request.headers
r_headers=response.headers
r_cookies=response.cookies

# - `response.text`
#   - 类型：str
#   - 解码类型： requests模块自动根据HTTP 头部对响应的编码作出有根据的推测，推测的文本编码
#   - 如何修改编码方式：`response.encoding=”gbk”`

# - `response.content`
#   - 类型：bytes
#   - 解码类型： 没有指定
#   - 如何修改编码方式：`response.content.deocde(“utf8”)`

print(f"Response Text: {r_text}")
print(f"Response Content: {r_content}")

print(f"Response Status Code: {r_status_code}")
print(f"Request Headers: {r_request_headers}")
print(f"Response Headers: {r_headers}")
print(f"Cookies: {r_cookies}")


# 获取网页源码的通用方式：

# 1. `response.content.decode()`
# 2. `response.content.decode("GBK")`
# 3. `response.text`