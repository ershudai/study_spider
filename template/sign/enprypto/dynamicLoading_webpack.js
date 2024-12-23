//一个md5的签名函数，这里的webpack使用了动态加载的技术，通过将各文件的模块写入到e变量中，然后调用。这里微改了一点。
//学习网址https://www.mytokencap.com/
let window = global;
let document = {};

let arithmetic;
var bc;

!function(e) {
    "use strict";
    var e = e
      , f = {};
    function t(c) {
        var a = f[c];
        if (void 0 !== a)
            return a.exports;
        var n = f[c] = {
            id: c,
            loaded: !1,
            exports: {}
        }
          , r = !0;
        try {
            e[c].call(n.exports, n, n.exports, t),
            r = !1
        }catch{
            console.log("异常模块--->" + c)
        }
         finally {
            r && delete f[c]
        }
        return n.loaded = !0,
        n.exports
    }
    t.m = e,
    t.amdO = {},
    function() {
        var e = [];
        t.O = function(f, c, a, n) {
            if (!c) {
                var r = 1 / 0;
                for (i = 0; i < e.length; i++) {
                    c = e[i][0],
                    a = e[i][1],
                    n = e[i][2];
                    for (var d = !0, o = 0; o < c.length; o++)
                        (!1 & n || r >= n) && Object.keys(t.O).every((function(e) {
                            return t.O[e](c[o])
                        }
                        )) ? c.splice(o--, 1) : (d = !1,
                        n < r && (r = n));
                    if (d) {
                        e.splice(i--, 1);
                        var u = a();
                        void 0 !== u && (f = u)
                    }
                }
                return f
            }
            n = n || 0;
            for (var i = e.length; i > 0 && e[i - 1][2] > n; i--)
                e[i] = e[i - 1];
            e[i] = [c, a, n]
        }
    }(),
    t.n = function(e) {
        var f = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(f, {
            a: f
        }),
        f
    }
    ,
    function() {
        var e, f = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        }
        : function(e) {
            return e.__proto__
        }
        ;
        t.t = function(c, a) {
            if (1 & a && (c = this(c)),
            8 & a)
                return c;
            if ("object" === typeof c && c) {
                if (4 & a && c.__esModule)
                    return c;
                if (16 & a && "function" === typeof c.then)
                    return c
            }
            var n = Object.create(null);
            t.r(n);
            var r = {};
            e = e || [null, f({}), f([]), f(f)];
            for (var d = 2 & a && c; "object" == typeof d && !~e.indexOf(d); d = f(d))
                Object.getOwnPropertyNames(d).forEach((function(e) {
                    r[e] = function() {
                        return c[e]
                    }
                }
                ));
            return r.default = function() {
                return c
            }
            ,
            t.d(n, r),
            n
        }
    }(),
    t.d = function(e, f) {
        for (var c in f)
            t.o(f, c) && !t.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: f[c]
            })
    }
    ,
    t.f = {},
    t.e = function(e) {
        return Promise.all(Object.keys(t.f).reduce((function(f, c) {
            return t.f[c](e, f),
            f
        }
        ), []))
    }
    ,
    t.u = function(e) {
        return 9939 === e ? "static/chunks/9939-6d14abf0849e4b43.js" : 6994 === e ? "static/chunks/6994-9d03d3ccf49358e1.js" : 7072 === e ? "static/chunks/7072-934c9895ed3982d0.js" : 6743 === e ? "static/chunks/6743-4b863d8cc89823e7.js" : 6108 === e ? "static/chunks/6108-e79a0c607ca53105.js" : 7409 === e ? "static/chunks/ee9ce975-3f75e2a131ae8e35.js" : 706 === e ? "static/chunks/706-b31719021d2ae27f.js" : 959 === e ? "static/chunks/959-ee79a7a728d72625.js" : 6133 === e ? "static/chunks/6133-3e255fa8c242838a.js" : 4885 === e ? "static/chunks/75fc9c18-55217e80064ded2b.js" : 2079 === e ? "static/chunks/2079-5bd92f3709f6fd52.js" : "static/chunks/" + (9030 === e ? "23b2023c" : e) + "." + {
            81: "2d9b9655d6d065f6",
            1583: "ba7427ee73cc1bf6",
            2366: "9736f828fe976390",
            2831: "35da802444ff934b",
            3183: "c075e9a09212f45b",
            3286: "f79b7fdc3de2e014",
            4726: "72eea7982078f3c3",
            5032: "072260641ec4e021",
            5715: "60f8d6e5c6dc2612",
            6540: "31ccf9a24b8086e9",
            8189: "9e4fa9369e9b3ad7",
            9030: "08b29e1c1e6202b2",
            9421: "dedf10bceb12f588",
            9689: "14d089bd51f0687f",
            9722: "02961369129a330a"
        }[e] + ".js"
    }
    ,
    t.miniCssF = function(e) {
        return "static/css/" + {
            64: "bd50f298535d11f4",
            94: "7b416200480e8271",
            326: "d6f4baf45cb22a86",
            447: "59174d4b6579e234",
            685: "80fd2c537ebe2cab",
            693: "86cb3f69fec8cd7d",
            818: "86cb3f69fec8cd7d",
            827: "2cb36963a4520e9f",
            855: "2ec3e607e1f13fc1",
            1e3: "2a1c4d282378207f",
            1178: "01e8aef445177140",
            1495: "c14bf00b924bc758",
            1567: "504249072898fe84",
            1768: "881f14f7fada6fe1",
            1902: "af2b546a391fde77",
            1910: "f528c85990fa7782",
            2028: "7b416200480e8271",
            2080: "7b416200480e8271",
            2139: "5605c5c1caf514ea",
            2232: "97d476dd2c853041",
            2277: "bd5fe539f172f73b",
            2358: "00912d8a949487f6",
            2500: "7b416200480e8271",
            2663: "4cff4cb7f1803327",
            2870: "86cb3f69fec8cd7d",
            2888: "84c0d6e9ad8ad7d2",
            3208: "58c97577642736d4",
            3313: "4962bf977508860e",
            3347: "97d476dd2c853041",
            3547: "e0752d8a3b5df466",
            3795: "32803032e58e4528",
            3853: "af2b546a391fde77",
            3918: "7b416200480e8271",
            3921: "40e0a87bee041fb6",
            3955: "aa654ebae54e347b",
            4122: "7a11bdfe8d657718",
            4139: "01e8aef445177140",
            4209: "ea055385099300d6",
            4362: "86cb3f69fec8cd7d",
            4393: "7b416200480e8271",
            4674: "32f06188e8b766cb",
            4856: "7b416200480e8271",
            4892: "1dc8c13368e9042c",
            5125: "ee5f301b93bd0c97",
            5176: "7b416200480e8271",
            5203: "97d476dd2c853041",
            5276: "db18c7eeeeb9d5ff",
            5297: "7c4d14d5b569c5c2",
            5378: "41b9f4f8eee24c66",
            5728: "882095590500ac08",
            5802: "cafb43a4b960d398",
            6195: "386105b15ebf0fed",
            6366: "976949a673339a2b",
            6455: "7b416200480e8271",
            6804: "42358c3f79f21c0e",
            6909: "956de9bd95b640a3",
            6956: "6fb5d1fac6596be8",
            7104: "6322395caefc339b",
            7178: "fe2b1ec216ef7218",
            7371: "4aca9d7c1934730a",
            7401: "beff569f77d8439a",
            7416: "7b416200480e8271",
            7672: "af2b546a391fde77",
            7855: "9189c979be695f31",
            7971: "7b416200480e8271",
            8080: "7b416200480e8271",
            8336: "7b416200480e8271",
            8361: "cafb43a4b960d398",
            8479: "7b416200480e8271",
            8534: "7b416200480e8271",
            8554: "95e5c6e387fc885e",
            8623: "7b416200480e8271",
            8663: "bb783a394f456d35",
            8732: "7b416200480e8271",
            8887: "e9f61918904ec02a",
            8900: "551fc001b21322ff",
            8915: "7b416200480e8271",
            8963: "25d89d04a548db43",
            9017: "98b02cfcb3ca93c2",
            9175: "38bbceaa4f5882da",
            9603: "c5dcd81800024884",
            9610: "d447d81efe318eea",
            9889: "af2b546a391fde77",
            9945: "7b416200480e8271"
        }[e] + ".css"
    }
    ,
    t.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    t.o = function(e, f) {
        return Object.prototype.hasOwnProperty.call(e, f)
    }
    ,
    function() {
        var e = {}
          , f = "_N_E:";
        t.l = function(c, a, n, r) {
            if (e[c])
                e[c].push(a);
            else {
                var d, o;
                if (void 0 !== n)
                    for (var u = document.getElementsByTagName("script"), i = 0; i < u.length; i++) {
                        var b = u[i];
                        if (b.getAttribute("src") == c || b.getAttribute("data-webpack") == f + n) {
                            d = b;
                            break
                        }
                    }
                d || (o = !0,
                (d = document.createElement("script")).charset = "utf-8",
                d.timeout = 120,
                t.nc && d.setAttribute("nonce", t.nc),
                d.setAttribute("data-webpack", f + n),
                d.src = t.tu(c)),
                e[c] = [a];
                var s = function(f, t) {
                    d.onerror = d.onload = null,
                    clearTimeout(l);
                    var a = e[c];
                    if (delete e[c],
                    d.parentNode && d.parentNode.removeChild(d),
                    a && a.forEach((function(e) {
                        return e(t)
                    }
                    )),
                    f)
                        return f(t)
                }
                  , l = setTimeout(s.bind(null, void 0, {
                    type: "timeout",
                    target: d
                }), 12e4);
                d.onerror = s.bind(null, d.onerror),
                d.onload = s.bind(null, d.onload),
                o && document.head.appendChild(d)
            }
        }
    }(),
    t.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    // function() {
    //     var e;
    //     t.tt = function() {
    //         return void 0 === e && (e = {
    //             createScriptURL: function(e) {
    //                 return e
    //             }
    //         },
    //         "undefined" !== typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))),
    //         e
    //     }
    // }(),
    t.tu = function(e) {
        return t.tt().createScriptURL(e)
    }
    ,
    t.p = "https://cdn.mytoken.org/_next/",
    // function() {
    //     var e = {
    //         2272: 0,
    //         6956: 0
    //     };
    //     t.f.j = function(f, c) {
    //         var a = t.o(e, f) ? e[f] : void 0;
    //         if (0 !== a)
    //             if (a)
    //                 c.push(a[2]);
    //             else if (/^(2272|6956)$/.test(f))
    //                 e[f] = 0;
    //             else {
    //                 var n = new Promise((function(t, c) {
    //                     a = e[f] = [t, c]
    //                 }
    //                 ));
    //                 c.push(a[2] = n);
    //                 var r = t.p + t.u(f)
    //                   , d = new Error;
    //                 t.l(r, (function(c) {
    //                     if (t.o(e, f) && (0 !== (a = e[f]) && (e[f] = void 0),
    //                     a)) {
    //                         var n = c && ("load" === c.type ? "missing" : c.type)
    //                           , r = c && c.target && c.target.src;
    //                         d.message = "Loading chunk " + f + " failed.\n(" + n + ": " + r + ")",
    //                         d.name = "ChunkLoadError",
    //                         d.type = n,
    //                         d.request = r,
    //                         a[1](d)
    //                     }
    //                 }
    //                 ), "chunk-" + f, f)
    //             }
    //     }
    //     ,
    //     t.O.j = function(f) {
    //         return 0 === e[f]
    //     }
    //     ;
    //     var f = function(f, c) {
    //         var a, n, r = c[0], d = c[1], o = c[2], u = 0;
    //         if (r.some((function(f) {
    //             return 0 !== e[f]
    //         }
    //         ))) {
    //             for (a in d)
    //                 t.o(d, a) && (t.m[a] = d[a]);
    //             if (o)
    //                 var i = o(t)
    //         }
    //         for (f && f(c); u < r.length; u++)
    //             n = r[u],
    //             t.o(e, n) && e[n] && e[n][0](),
    //             e[n] = 0;
    //         return t.O(i)
    //     }
    //       , c = window.webpackChunk_N_E = window.webpackChunk_N_E || [];
    //     c.forEach(f.bind(null, 0)),
    //     c.push = f.bind(null, c.push.bind(c))
    // }(),
    t.nc = void 0

    bc = t
}({
    2568: function(t, e, n) {
        !function() {
            var e = n(71012)
              , r = n(40487).utf8
              , i = n(48738)
              , o = n(40487).bin
              , s = function(t, n) {
                t.constructor == String ? t = n && "binary" === n.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
                for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, p = 0; p < a.length; p++)
                    a[p] = 16711935 & (a[p] << 8 | a[p] >>> 24) | 4278255360 & (a[p] << 24 | a[p] >>> 8);
                a[u >>> 5] |= 128 << u % 32,
                a[14 + (u + 64 >>> 9 << 4)] = u;
                var d = s._ff
                  , g = s._gg
                  , y = s._hh
                  , v = s._ii;
                for (p = 0; p < a.length; p += 16) {
                    var m = c
                      , b = l
                      , w = f
                      , O = h;
                    c = d(c, l, f, h, a[p + 0], 7, -680876936),
                    h = d(h, c, l, f, a[p + 1], 12, -389564586),
                    f = d(f, h, c, l, a[p + 2], 17, 606105819),
                    l = d(l, f, h, c, a[p + 3], 22, -1044525330),
                    c = d(c, l, f, h, a[p + 4], 7, -176418897),
                    h = d(h, c, l, f, a[p + 5], 12, 1200080426),
                    f = d(f, h, c, l, a[p + 6], 17, -1473231341),
                    l = d(l, f, h, c, a[p + 7], 22, -45705983),
                    c = d(c, l, f, h, a[p + 8], 7, 1770035416),
                    h = d(h, c, l, f, a[p + 9], 12, -1958414417),
                    f = d(f, h, c, l, a[p + 10], 17, -42063),
                    l = d(l, f, h, c, a[p + 11], 22, -1990404162),
                    c = d(c, l, f, h, a[p + 12], 7, 1804603682),
                    h = d(h, c, l, f, a[p + 13], 12, -40341101),
                    f = d(f, h, c, l, a[p + 14], 17, -1502002290),
                    c = g(c, l = d(l, f, h, c, a[p + 15], 22, 1236535329), f, h, a[p + 1], 5, -165796510),
                    h = g(h, c, l, f, a[p + 6], 9, -1069501632),
                    f = g(f, h, c, l, a[p + 11], 14, 643717713),
                    l = g(l, f, h, c, a[p + 0], 20, -373897302),
                    c = g(c, l, f, h, a[p + 5], 5, -701558691),
                    h = g(h, c, l, f, a[p + 10], 9, 38016083),
                    f = g(f, h, c, l, a[p + 15], 14, -660478335),
                    l = g(l, f, h, c, a[p + 4], 20, -405537848),
                    c = g(c, l, f, h, a[p + 9], 5, 568446438),
                    h = g(h, c, l, f, a[p + 14], 9, -1019803690),
                    f = g(f, h, c, l, a[p + 3], 14, -187363961),
                    l = g(l, f, h, c, a[p + 8], 20, 1163531501),
                    c = g(c, l, f, h, a[p + 13], 5, -1444681467),
                    h = g(h, c, l, f, a[p + 2], 9, -51403784),
                    f = g(f, h, c, l, a[p + 7], 14, 1735328473),
                    c = y(c, l = g(l, f, h, c, a[p + 12], 20, -1926607734), f, h, a[p + 5], 4, -378558),
                    h = y(h, c, l, f, a[p + 8], 11, -2022574463),
                    f = y(f, h, c, l, a[p + 11], 16, 1839030562),
                    l = y(l, f, h, c, a[p + 14], 23, -35309556),
                    c = y(c, l, f, h, a[p + 1], 4, -1530992060),
                    h = y(h, c, l, f, a[p + 4], 11, 1272893353),
                    f = y(f, h, c, l, a[p + 7], 16, -155497632),
                    l = y(l, f, h, c, a[p + 10], 23, -1094730640),
                    c = y(c, l, f, h, a[p + 13], 4, 681279174),
                    h = y(h, c, l, f, a[p + 0], 11, -358537222),
                    f = y(f, h, c, l, a[p + 3], 16, -722521979),
                    l = y(l, f, h, c, a[p + 6], 23, 76029189),
                    c = y(c, l, f, h, a[p + 9], 4, -640364487),
                    h = y(h, c, l, f, a[p + 12], 11, -421815835),
                    f = y(f, h, c, l, a[p + 15], 16, 530742520),
                    c = v(c, l = y(l, f, h, c, a[p + 2], 23, -995338651), f, h, a[p + 0], 6, -198630844),
                    h = v(h, c, l, f, a[p + 7], 10, 1126891415),
                    f = v(f, h, c, l, a[p + 14], 15, -1416354905),
                    l = v(l, f, h, c, a[p + 5], 21, -57434055),
                    c = v(c, l, f, h, a[p + 12], 6, 1700485571),
                    h = v(h, c, l, f, a[p + 3], 10, -1894986606),
                    f = v(f, h, c, l, a[p + 10], 15, -1051523),
                    l = v(l, f, h, c, a[p + 1], 21, -2054922799),
                    c = v(c, l, f, h, a[p + 8], 6, 1873313359),
                    h = v(h, c, l, f, a[p + 15], 10, -30611744),
                    f = v(f, h, c, l, a[p + 6], 15, -1560198380),
                    l = v(l, f, h, c, a[p + 13], 21, 1309151649),
                    c = v(c, l, f, h, a[p + 4], 6, -145523070),
                    h = v(h, c, l, f, a[p + 11], 10, -1120210379),
                    f = v(f, h, c, l, a[p + 2], 15, 718787259),
                    l = v(l, f, h, c, a[p + 9], 21, -343485551),
                    c = c + m >>> 0,
                    l = l + b >>> 0,
                    f = f + w >>> 0,
                    h = h + O >>> 0
                }
                return e.endian([c, l, f, h])
            };
            s._ff = function(t, e, n, r, i, o, s) {
                var a = t + (e & n | ~e & r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }
            ,
            s._gg = function(t, e, n, r, i, o, s) {
                var a = t + (e & r | n & ~r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }
            ,
            s._hh = function(t, e, n, r, i, o, s) {
                var a = t + (e ^ n ^ r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }
            ,
            s._ii = function(t, e, n, r, i, o, s) {
                var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }
            ,
            s._blocksize = 16,
            s._digestsize = 16,
            t.exports = function(t, n) {
                if (void 0 === t || null === t)
                    throw new Error("Illegal argument " + t);
                var r = e.wordsToBytes(s(t, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r)
            }
        }()
    },
    71012: function(t) {
        !function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , n = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function(t) {
                    if (t.constructor == Number)
                        return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++)
                        t[e] = n.endian(t[e]);
                    return t
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--)
                        e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function(t) {
                    for (var e = [], n = 0, r = 0; n < t.length; n++,
                    r += 8)
                        e[r >>> 5] |= t[n] << 24 - r % 32;
                    return e
                },
                wordsToBytes: function(t) {
                    for (var e = [], n = 0; n < 32 * t.length; n += 8)
                        e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], n = 0; n < t.length; n++)
                        e.push((t[n] >>> 4).toString(16)),
                        e.push((15 & t[n]).toString(16));
                    return e.join("")
                },
                hexToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n += 2)
                        e.push(parseInt(t.substr(n, 2), 16));
                    return e
                },
                bytesToBase64: function(t) {
                    for (var n = [], r = 0; r < t.length; r += 3)
                        for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++)
                            8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4)
                        0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                    return n
                }
            };
            t.exports = n
        }()
    },
    40487: function(t) {
        var e = {
            utf8: {
                stringToBytes: function(t) {
                    return e.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(e.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n++)
                        e.push(255 & t.charCodeAt(n));
                    return e
                },
                bytesToString: function(t) {
                    for (var e = [], n = 0; n < t.length; n++)
                        e.push(String.fromCharCode(t[n]));
                    return e.join("")
                }
            }
        };
        t.exports = e
    },
    48738: function(t) {
        function e(t) {
            return !!t.constructor && "function" === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        t.exports = function(t) {
            return null != t && (e(t) || function(t) {
                return "function" === typeof t.readFloatLE && "function" === typeof t.slice && e(t.slice(0, 0))
            }(t) || !!t._isBuffer)
        }
    },
});



let t1 = bc(2568);

console.log(t1("123123"))
