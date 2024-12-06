import time

import requests

import pymysql
from concurrent.futures import ThreadPoolExecutor


class BaiDu():
    def __init__(self):
        self.url = 'https://talent.baidu.com/httservice/getPostListNew'
        self.headers = {
            # "Accept": "application/json, text/plain, */*",
            # "Accept-Language": "zh-CN,zh;q=0.9",
            # "Cache-Control": "no-cache",
            # "Connection": "keep-alive",
            # "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            # "^Cookie": "PSTM=1719580055; BAIDUID=196F00D2D56D5CA0776A37DFB4B6A2F2:FG=1; BIDUPSID=5A36F0FBE51F1EA1E7B7AC67A754B3AD; BAIDUID_BFESS=196F00D2D56D5CA0776A37DFB4B6A2F2:FG=1; ZFY=fX:B5JuBhr:B:AhOAlQMKh1YJ2lVJ2F2LeVVQwyzWdEm:BE:C; H_PS_PSSID=60367_60363_60360_60443; H_WISE_SIDS=60367_60363_60360_60443; BA_HECTOR=24800la404al8105800ga10h0lmjbr1j8nqg41v; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_WISE_SIDS_BFESS=60367_60363_60360_60443; Hm_lvt_50e85ccdd6c1e538eb1290bc92327926=1718713174,1719149951,1720509270,1720531389; Hm_lpvt_50e85ccdd6c1e538eb1290bc92327926=1720531389; HMACCOUNT=C88D67D902937E69; RT=^\\^z=1&dm=baidu.com&si=432aac20-83fb-410c-8d81-b08978f91762&ss=lyefyr2k&sl=7&tt=1tb&bcn=https^%^3A^%^2F^%^2Ffclog.baidu.com^%^2Flog^%^2Fweirwood^%^3Ftype^%^3Dperf&ld=1f4q^^^",
            # "Origin": "https://talent.baidu.com",
            # "Pragma": "no-cache",
            "Referer": "https://talent.baidu.com/jobs/social-list?search=pytho",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",

        }
        # self.db = pymysql.connect(host='127.0.0.1', user='root', passwd='root', db='spiders16')
        # self.cursor = self.db.cursor()

    def create_table(self):
        # 使用预处理语句创建表
        sql = '''
                    CREATE TABLE IF NOT EXISTS baidu(
                        id int primary key auto_increment not null,
                        education VARCHAR(255) NOT NULL, 
                        name VARCHAR(255) NOT NULL, 
                        serviceCondition TEXT)
                    '''
        try:
            self.cursor.execute(sql)
            print("CREATE TABLE SUCCESS.")
        except Exception as ex:
            print(f"CREATE TABLE FAILED,CASE:{ex}")

    def get_data(self, page):
        data = {
            'recruitType': 'SOCIAL',
            'pageSize': '10',
            'keyWord': 'python',
            'curPage': page,
            'projectType': ''
        }
        print(data)
        response = requests.post(url=self.url, headers=self.headers, data=data)
        return  response.json()

    def parse_data(self, res):
        data = res['data']['list']
        for i in data:
            education = i['education']
            name = i['name']
            serviceCondition = i['serviceCondition']
            # print(education, name, serviceCondition)
            self.save_data(education, name, serviceCondition)


    def save_data(self, education, name, serviceCondition):
        sql = 'INSERT INTO baidu(id, education, name, serviceCondition) values(%s, %s, %s, %s)'
        print(sql, (0, education, name, serviceCondition))


    def main(self):
        self.create_table()
        with ThreadPoolExecutor(5)as pool:
            for i in range(1, 10):
                res = pool.submit(self.get_data, i)
                self.parse_data(res.result())


if __name__ == '__main__':
    bd = BaiDu()
    bd.main()
