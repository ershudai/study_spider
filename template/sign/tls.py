import requests
from curl_cffi import requests

print("edge99:", requests.get("https://tls.browserleaks.com/json", impersonate="edge99").json())
print("chrome110:", requests.get("https://tls.browserleaks.com/json", impersonate="chrome110").json())
print("safari15_3:", requests.get("https://tls.browserleaks.com/json", impersonate="safari15_3").json())