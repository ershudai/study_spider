import feapder
from feapder.utils.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class SpiderProject(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://young.yingjiesheng.com/pc/search?jobarea=220200&keyword=Python", render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser
        wait = WebDriverWait(browser, 10)
        wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="list"]/div[1]/div[1]/div/div[1]/div[1]/div/div[1]')))
        data = browser.xhr_json('open/noauth/job/search')
        # print(data['resultbody']['searchData']['joblist'])
        for da in data['resultbody']['searchData']['joblist']['items']:
            item = {}
            item['jobname'] = da['jobname']
            item['coname'] = da['coname']
            item['jobarea'] = da['jobarea']
            item['issuedate'] = da['issuedate']
            item['jobtag'] = da['jobtag']
            item['providesalary'] = da['providesalary']
            print(item)



if __name__ == "__main__":
    SpiderProject().start()