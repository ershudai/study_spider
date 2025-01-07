
var crypto = require('crypto-js')



function get_md5(data) {
    return crypto.MD5(data).toString()
}


function get_time() {
        return Math.round((new Date).getTime() / 1e3)
    }




function get_headers() {

    var n = get_time().toString()
    // var n = '1728304793'
    var a = get_md5(n)
    var u = "request_url=client/search/house&content=" + n + "&request_method=get&timestamp=" + n + "&secret=" + a

    var l = get_md5(u)
    // console.log(a)

    return "timestamp=".concat(n, ";oauth2=").concat(a, ";signature=").concat(l, ";secret=").concat(a)
}

console.log(get_headers());


// "request_url=client/search/house&content=1728304793&request_method=get&timestamp=1728304793&secret=7226dd58c522caaf9658f3fdf2f21fd4"
// "request_url=client/search/house&content=1728305517&request_method=get&timestamp=1728305517&secret=b45e5345772c372b2667a8105980ce78"

