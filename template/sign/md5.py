import hashlib

def md5_test2():
    md5 = hashlib.md5()
    md5.update('python'.encode('utf-8'))
    print(md5.hexdigest())

if __name__ == '__main__':
    md5_test2() 