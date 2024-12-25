import requests
import execjs

headers = {
    "referer": "https://www.aigei.com/sound/class/role?page=11",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
}
url = "https://www.aigei.com/gei-common/jsonComp/f/awd/log.json"
params = {
    "t": '5757651,5634335,5739749,5634319,31854576,5657618,5655610,5658078,5635730,5636124,5634306,30392499,5635683,30392510,5636099,30392498,31854584,5635575,5634806,5636275',
    "w": "rowPc",
    "f": "false"
}
response = requests.get(url, headers=headers, params=params)
with open('20241224.js', 'r', encoding='utf-8')as f:
    js_code = f.read()
js = execjs.compile(js_code)
res = js.call('aa', response.json())
print(res)