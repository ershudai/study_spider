// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function HMACEncrypt() {
    var text = "I love python!"
    var key = "secret"   // 密钥文件
    return CryptoJS.HmacMD5(text, key).toString();
    // return CryptoJS.HmacSHA1(text, key).toString();
    // return CryptoJS.HmacSHA256(text, key).toString();
}
console.log(HMACEncrypt())