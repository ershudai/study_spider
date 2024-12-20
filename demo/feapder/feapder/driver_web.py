# -*- coding: utf-8 -*-
"""
Created on 2024-12-17 17:47:52
---------
@summary:
---------
@author: Administrator
"""

import feapder
import time

import feapder
from feapder.utils.webdriver import WebDriver
from selenium.webdriver.common.by import By

class DriverWeb(feapder.AirSpider):
    xhr_url_regexes = [
        r"https://example\.com/api/data",  # 拦截 example.com 下的 /api/data 接口
        r"https://another\.site\.com/json" # 拦截 another.site.com 下的 /json 接口
    ]
    def start_requests(self):
        yield feapder.Request("http://www.baidu.com", render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser
        browser.find_element(By.ID, "kw").send_keys("feapder")
        browser.find_element(By.ID, "su").click()
        print(browser.page_source)


if __name__ == "__main__":
    DriverWeb().start()