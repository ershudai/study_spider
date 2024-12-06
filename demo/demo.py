

import hashlib

class BloomFilter:
    def __init__(self, size, num_hashes):
        self.size = size
        self.num_hashes = num_hashes
        self.bit_array = [0] * size

    def add(self, element):
        for i in range(self.num_hashes):
            # print(int(hashlib.md5(f"{element}{i}".encode()).hexdigest(), 16))
            hash_value = int(hashlib.md5(f"{element}{i}".encode()).hexdigest(), 16) % self.size
            self.bit_array[hash_value] = 1
            # print(self.bit_array)

    def contains(self, element):
        for i in range(self.num_hashes):
            hash_value = int(hashlib.md5(f"{element}{i}".encode()).hexdigest(), 16) % self.size
            if self.bit_array[hash_value] == 0:
                return False
        return True

if __name__ == '__main__':

    aa = BloomFilter(5, 2)
    aa.add('567')

    print(aa.contains('456'))
    # print(aa.bit_array)


