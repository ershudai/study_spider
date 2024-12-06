from bs4 import BeautifulSoup

html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="story">Some links:
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>
"""

# 创建 BeautifulSoup 对象
soup = BeautifulSoup(html_doc, 'lxml')

# 查找所有 <a> 标签并打印 href 属性
for link in soup.find_all('a'):
    print(link.get('href'))

# 查找第一个 <a> 标签并打印 href 属性   .find()查询首个 .find_all()查询所有
a_s=soup.find('a')
print(a_s.title)
print(a_s['href'])
print(a_s)