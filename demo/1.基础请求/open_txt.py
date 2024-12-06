import os

# 假设 example.txt 已经存在并且包含一些内容
with open("example.txt", "r+") as file:
    # 读取文件内容
    content = file.read()
    print("Original content:", content)

    # 移动文件指针到文件开头
    file.seek(0)

    # 写入新内容，覆盖原有内容
    file.write("New content at the beginning\n")

with open("example.txt", "r+") as file:
    # 移动文件指针到文件末尾
    # file.seek(0, os.SEEK_END)

    # 追加更多内容
    file.write("Additional content at the end\n")

    # 重新读取整个文件
    file.seek(0)
    updated_content = file.read()
    print("Updated content:\n", updated_content)