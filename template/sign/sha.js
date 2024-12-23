// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function SHA1Encrypt() {
    var text = "I love python!"
    return CryptoJS.SHA1(text).toString();
}

console.log(SHA1Encrypt()) 