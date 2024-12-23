// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function MD5Test() {
    var text = "123123"
    return CryptoJS.MD5(text).toString()
}


console.log(MD5Test()) 
console.log("4297f44b13955235245b2497399d7a93") 