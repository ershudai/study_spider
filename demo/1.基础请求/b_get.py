import csv
import requests

with open('湘江.csv', 'a', encoding='utf-8', newline='')as f:
    fieldnames = ['author', 'basicTitle', 'basicDatetime']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for i in range(1, 3):
        url = 'http://changs.ccgp-hunan.gov.cn/gp/gpcategory/getNotice'
        headers = {
            # 'Host':'changs.ccgp-hunan.gov.cn',
            # 'Cookie':'JSESSIONID=45823044-a192-4910-a217-62f1e148c34c',
            # 'origin': 'http://changs.ccgp-hunan.gov.cn',
            # 'Referer':'http://changs.ccgp-hunan.gov.cn/gp/noticeSerach.html?articleType=2&basicArea=gaoxin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
        data = {
            "page": str(i),
            "limit": "10",
            "sidx": "",
            "order": "",
            "categoryId": "184",
            "articleType": "2",
            "projid": "",
            "name": "",
            "cgType": "0",
            "buyerNm": "",
            "buyerOrgNm": "",
            "supplyNm": "",
            "basicType": "1",
            "basicDatetime": "2024-01-01",
            "basicDatetimes": "2024-07-04",
            "type": "0",
            "basicArea": "gaoxin",
            "categoryType": "0"
        }
        response = requests.post(url, headers=headers, data=data)
        print(response.text)
        # print(response.json())

        for res in response.json()['list']['list']:
            item = {}
            item['author'] = res['author']
            item['basicTitle'] = res['basicTitle']
            item['basicDatetime'] = res['basicDatetime']
            writer.writerow(item)