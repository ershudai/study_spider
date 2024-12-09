import threading
from concurrent.futures import ThreadPoolExecutor

def worker(num,w):

    for i in  range(num):
        print(f"当前的线程是：{threading.current_thread().name} 输出是：{i},{w}")


def main():

   data=[(100,2),(100,3),(1000,3)]

   with ThreadPoolExecutor(max_workers=2) as executor:
       executor_map = executor.map(worker, *zip(*data))

       print(executor_map)


if __name__ == '__main__':
    main()