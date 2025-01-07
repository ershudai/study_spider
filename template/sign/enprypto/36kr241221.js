
window = global

navigator = {}


var bc;

!function(e) {
    function t(t) {
        for (var c, r, n = t[0], s = t[1], l = t[2], d = 0, u = []; d < n.length; d++)
            r = n[d],
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]),
            o[r] = 0;
        for (c in s)
            Object.prototype.hasOwnProperty.call(s, c) && (e[c] = s[c]);
        for (f && f(t); u.length; )
            u.shift()();
        return i.push.apply(i, l || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], c = !0, r = 1; r < a.length; r++) {
                var s = a[r];
                0 !== o[s] && (c = !1)
            }
            c && (i.splice(t--, 1),
            e = n(n.s = a[0]))
        }
        return e
    }
    var c = {}
      , r = {
        83: 0
    }
      , o = {
        83: 0
    }
      , i = [];
    function n(t) {
        if (c[t])
            return c[t].exports;
        var a = c[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        // console.log('缺失的模块:', t)
        return e[t].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    n.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            21: 1,
            22: 1,
            24: 1,
            25: 1,
            27: 1,
            28: 1,
            29: 1,
            30: 1,
            31: 1,
            32: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            41: 1,
            42: 1,
            43: 1,
            44: 1,
            45: 1,
            46: 1,
            47: 1,
            48: 1,
            49: 1,
            50: 1,
            51: 1,
            52: 1,
            53: 1,
            54: 1,
            55: 1,
            56: 1,
            57: 1,
            58: 1,
            59: 1,
            60: 1,
            61: 1,
            62: 1,
            63: 1,
            64: 1,
            65: 1,
            66: 1,
            67: 1,
            68: 1,
            69: 1,
            70: 1,
            71: 1,
            73: 1,
            74: 1,
            75: 1,
            76: 1,
            77: 1,
            79: 1,
            81: 1,
            82: 1,
            84: 1,
            85: 1,
            86: 1,
            87: 1,
            88: 1,
            89: 1,
            90: 1,
            91: 1,
            92: 1,
            93: 1,
            94: 1,
            95: 1,
            96: 1,
            97: 1,
            98: 1,
            99: 1,
            100: 1,
            101: 1,
            102: 1,
            103: 1,
            104: 1,
            105: 1,
            106: 1
        }[e] && t.push(r[e] = new Promise((function(t, a) {
            for (var c = "static/" + ({
                2: "vendors~academe~acvitity~email-unsubscribe~hp-2020~motif-catalog~project-settled-welcome~special-top~0049f470",
                3: "chronicle~home~hot-list-catalog~local-station~motif-detail~policy-detail~search-list-Detail~tags-Detail",
                4: "newsflash-catalog",
                5: "vendors~wise-2019~wise-2019-nov~wise-2019-nov-dec",
                6: "home~motif-detail",
                7: "invite-record-entry",
                8: "live-channel~live-column",
                9: "nftags",
                10: "project-form-claim",
                11: "project-seek-report-36kr",
                12: "project-settled-welcome",
                13: "search-list",
                14: "tags",
                15: "video-detail",
                17: "LPlan",
                18: "VClub",
                19: "about",
                20: "about-us-en",
                21: "academe",
                22: "acvitity",
                24: "application-authority",
                25: "article",
                26: "audit-investor",
                27: "author",
                28: "baidu-ai",
                29: "chronicle",
                30: "defaultReport",
                31: "defaultReport2021",
                32: "dell2021FormSuccess",
                33: "demo",
                34: "download",
                35: "email-unsubscribe",
                36: "enterprise-catalog",
                37: "enterprise-detail",
                38: "enterprisesList",
                39: "entrepreneurship-competition",
                40: "entrepreneurship-project-list",
                41: "external-author-apply",
                42: "facebookFormSuccess",
                43: "gclub-catalog",
                44: "home",
                45: "hot-list-catalog",
                46: "hot-list-detail",
                47: "hp-2020",
                48: "hp-club",
                49: "iframe-login",
                50: "info-share-list",
                51: "information",
                52: "innovate",
                53: "invite-record-success",
                54: "live-channel",
                55: "live-column",
                56: "live-detail",
                57: "live-home",
                58: "local-station",
                59: "mform",
                60: "motif-catalog",
                61: "motif-detail",
                62: "newsflash-detail",
                63: "nftags-Detail",
                64: "organization-catalog",
                65: "organization-detail",
                66: "other-protocols",
                67: "overseas",
                68: "policy-detail",
                69: "privacy-terms",
                70: "project-claim-settled-rights",
                71: "project-claim-settled-success",
                72: "project-detail",
                73: "project-info-mod",
                74: "project-info-mod-success",
                75: "project-library-report",
                76: "project-seek-report-new-36kr",
                77: "project-seek-report-success",
                78: "project-topic-detail",
                79: "project-unclaimed",
                80: "projects-catalog",
                81: "refute-rumor-notice",
                82: "rss-center",
                84: "s2city-project-list",
                85: "s2l-project-list",
                86: "search-list-Detail",
                87: "search-result",
                88: "service-agreement",
                89: "sign-up-acvitity",
                90: "sign-up-acvitity-form",
                91: "sign-up-claim-activity-form-success",
                92: "special-topic-catalog",
                93: "special-topic-detail",
                94: "star-2020-city",
                95: "star-2020-yl",
                96: "station-business",
                97: "tags-Detail",
                98: "unsubscribe",
                99: "usercenter",
                100: "vendors~LPlan",
                101: "video-catalog",
                102: "wise-2019",
                103: "wise-2019-nov",
                104: "wise-2019-nov-dec",
                105: "wise-2020-efficiency"
            }[e] || e) + "." + {
                0: "31d6cfe0",
                1: "31d6cfe0",
                2: "31d6cfe0",
                3: "26d3d0c2",
                4: "bbbfeff4",
                5: "cbdba712",
                6: "49c4bc43",
                7: "d70f0573",
                8: "5b198e53",
                9: "4201c8be",
                10: "716f3e43",
                11: "85013a10",
                12: "709399e8",
                13: "855c18a5",
                14: "4201c8be",
                15: "eed6fc7a",
                16: "a113e4d2",
                17: "e7af550f",
                18: "68f72a74",
                19: "545152db",
                20: "0565ab62",
                21: "8cdfbf35",
                22: "a7fa0e64",
                24: "7c9ee757",
                25: "3d8cd556",
                26: "31d6cfe0",
                27: "bb2e9b95",
                28: "f8ab52ca",
                29: "9cce3f8f",
                30: "e8ca8ee1",
                31: "fccf39f2",
                32: "e429abf5",
                33: "31d6cfe0",
                34: "8e6a4325",
                35: "18ab7052",
                36: "d1efb300",
                37: "8e15525e",
                38: "6fb30519",
                39: "2e85e01c",
                40: "83d44b8f",
                41: "9fdfe18d",
                42: "0e06597e",
                43: "67590a6c",
                44: "3161440d",
                45: "17328b36",
                46: "2a369bf7",
                47: "e314bb91",
                48: "f5f1fe1e",
                49: "84b7b4c6",
                50: "26a313b6",
                51: "9b4730f9",
                52: "52f78348",
                53: "dd0867ab",
                54: "0779372b",
                55: "dc501ece",
                56: "ed812e6c",
                57: "71aafbf5",
                58: "dd2e23ab",
                59: "4d6b8861",
                60: "23d2891d",
                61: "edce7a2c",
                62: "32ec4d05",
                63: "2a0c20c2",
                64: "b97d8097",
                65: "c654d3ad",
                66: "da1bcfba",
                67: "175d7053",
                68: "e0074bb3",
                69: "1f4e9cd8",
                70: "088336ec",
                71: "0d63ddb5",
                72: "31d6cfe0",
                73: "3f8c89c3",
                74: "57e76863",
                75: "1f2e5d30",
                76: "c3a1aed2",
                77: "17cbd9b4",
                78: "31d6cfe0",
                79: "0ec88e27",
                80: "31d6cfe0",
                81: "d49e4a80",
                82: "5f82defe",
                84: "ddec0e13",
                85: "7a66d708",
                86: "147ec8ad",
                87: "c4ba2183",
                88: "49c3acd0",
                89: "df311389",
                90: "73ec7bb3",
                91: "51f0d678",
                92: "ea9b55d1",
                93: "d34c397e",
                94: "40c90b21",
                95: "265801c0",
                96: "6d2196a6",
                97: "938cac41",
                98: "4a0de17b",
                99: "62360058",
                100: "c412edf5",
                101: "7f16fe7e",
                102: "2f2cd22c",
                103: "4b5110e3",
                104: "c6cea6b8",
                105: "f292465d",
                106: "2e7f48dc"
            }[e] + ".css", o = n.p + c, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var l = (f = i[s]).getAttribute("data-href") || f.getAttribute("href");
                if ("stylesheet" === f.rel && (l === c || l === o))
                    return t()
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
                var f;
                if ((l = (f = d[s]).getAttribute("data-href")) === c || l === o)
                    return t()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet",
            u.type = "text/css",
            u.onload = t,
            u.onerror = function(t) {
                var c = t && t.target && t.target.src || o
                  , i = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED",
                i.request = c,
                delete r[e],
                u.parentNode.removeChild(u),
                a(i)
            }
            ,
            u.href = o,
            document.getElementsByTagName("head")[0].appendChild(u)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var a = o[e];
        if (0 !== a)
            if (a)
                t.push(a[2]);
            else {
                var c = new Promise((function(t, c) {
                    a = o[e] = [t, c]
                }
                ));
                t.push(a[2] = c);
                var i, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                n.nc && s.setAttribute("nonce", n.nc),
                s.src = function(e) {
                    return n.p + "static/" + ({
                        2: "vendors~academe~acvitity~email-unsubscribe~hp-2020~motif-catalog~project-settled-welcome~special-top~0049f470",
                        3: "chronicle~home~hot-list-catalog~local-station~motif-detail~policy-detail~search-list-Detail~tags-Detail",
                        4: "newsflash-catalog",
                        5: "vendors~wise-2019~wise-2019-nov~wise-2019-nov-dec",
                        6: "home~motif-detail",
                        7: "invite-record-entry",
                        8: "live-channel~live-column",
                        9: "nftags",
                        10: "project-form-claim",
                        11: "project-seek-report-36kr",
                        12: "project-settled-welcome",
                        13: "search-list",
                        14: "tags",
                        15: "video-detail",
                        17: "LPlan",
                        18: "VClub",
                        19: "about",
                        20: "about-us-en",
                        21: "academe",
                        22: "acvitity",
                        24: "application-authority",
                        25: "article",
                        26: "audit-investor",
                        27: "author",
                        28: "baidu-ai",
                        29: "chronicle",
                        30: "defaultReport",
                        31: "defaultReport2021",
                        32: "dell2021FormSuccess",
                        33: "demo",
                        34: "download",
                        35: "email-unsubscribe",
                        36: "enterprise-catalog",
                        37: "enterprise-detail",
                        38: "enterprisesList",
                        39: "entrepreneurship-competition",
                        40: "entrepreneurship-project-list",
                        41: "external-author-apply",
                        42: "facebookFormSuccess",
                        43: "gclub-catalog",
                        44: "home",
                        45: "hot-list-catalog",
                        46: "hot-list-detail",
                        47: "hp-2020",
                        48: "hp-club",
                        49: "iframe-login",
                        50: "info-share-list",
                        51: "information",
                        52: "innovate",
                        53: "invite-record-success",
                        54: "live-channel",
                        55: "live-column",
                        56: "live-detail",
                        57: "live-home",
                        58: "local-station",
                        59: "mform",
                        60: "motif-catalog",
                        61: "motif-detail",
                        62: "newsflash-detail",
                        63: "nftags-Detail",
                        64: "organization-catalog",
                        65: "organization-detail",
                        66: "other-protocols",
                        67: "overseas",
                        68: "policy-detail",
                        69: "privacy-terms",
                        70: "project-claim-settled-rights",
                        71: "project-claim-settled-success",
                        72: "project-detail",
                        73: "project-info-mod",
                        74: "project-info-mod-success",
                        75: "project-library-report",
                        76: "project-seek-report-new-36kr",
                        77: "project-seek-report-success",
                        78: "project-topic-detail",
                        79: "project-unclaimed",
                        80: "projects-catalog",
                        81: "refute-rumor-notice",
                        82: "rss-center",
                        84: "s2city-project-list",
                        85: "s2l-project-list",
                        86: "search-list-Detail",
                        87: "search-result",
                        88: "service-agreement",
                        89: "sign-up-acvitity",
                        90: "sign-up-acvitity-form",
                        91: "sign-up-claim-activity-form-success",
                        92: "special-topic-catalog",
                        93: "special-topic-detail",
                        94: "star-2020-city",
                        95: "star-2020-yl",
                        96: "station-business",
                        97: "tags-Detail",
                        98: "unsubscribe",
                        99: "usercenter",
                        100: "vendors~LPlan",
                        101: "video-catalog",
                        102: "wise-2019",
                        103: "wise-2019-nov",
                        104: "wise-2019-nov-dec",
                        105: "wise-2020-efficiency"
                    }[e] || e) + "." + {
                        0: "cad80c27",
                        1: "75f76885",
                        2: "076a37e0",
                        3: "e0527436",
                        4: "daf58505",
                        5: "f2d3a084",
                        6: "e08f61a4",
                        7: "b333ca69",
                        8: "6011d941",
                        9: "4cd16200",
                        10: "6ec5ae92",
                        11: "186607ee",
                        12: "e2996b42",
                        13: "74dfbbae",
                        14: "02ca8559",
                        15: "b8e74b05",
                        16: "f2e06785",
                        17: "850aff1a",
                        18: "33f65571",
                        19: "a3935eab",
                        20: "aae4b148",
                        21: "ade7dee9",
                        22: "d69356c2",
                        24: "7ef636b9",
                        25: "4907d623",
                        26: "2f755dd2",
                        27: "2c9548f9",
                        28: "ada9d1d1",
                        29: "ca89744e",
                        30: "5ece178d",
                        31: "8d5aa038",
                        32: "963881be",
                        33: "9717d28d",
                        34: "dd641c68",
                        35: "8ccc3850",
                        36: "05cdb50a",
                        37: "c20a4c9b",
                        38: "ed62f099",
                        39: "504f4c07",
                        40: "7af0c337",
                        41: "e9e58896",
                        42: "f7f8ae46",
                        43: "e7c2109f",
                        44: "37d54bb0",
                        45: "f70213d9",
                        46: "a0865bd5",
                        47: "51111590",
                        48: "3e4c5c20",
                        49: "97ec9512",
                        50: "5d69840d",
                        51: "d1702a4b",
                        52: "a77c904a",
                        53: "702eaa58",
                        54: "2d015e57",
                        55: "5c554e51",
                        56: "90b4075f",
                        57: "7f7a7e31",
                        58: "32f55459",
                        59: "8d867da1",
                        60: "0218d26d",
                        61: "7e279e88",
                        62: "65b6ae91",
                        63: "da6efa16",
                        64: "a03f451c",
                        65: "d754aeca",
                        66: "afbef4ee",
                        67: "6f7d77cf",
                        68: "c0e97184",
                        69: "886f0498",
                        70: "7a7ac6a0",
                        71: "475a056a",
                        72: "64ca1778",
                        73: "c0ddaff5",
                        74: "7996aa15",
                        75: "b9a46776",
                        76: "992eb2e9",
                        77: "b7d32e56",
                        78: "9a1d817c",
                        79: "1979bc2b",
                        80: "24ed055e",
                        81: "17eb4cb3",
                        82: "a23a4178",
                        84: "7ce7c51d",
                        85: "ffdaf3d2",
                        86: "b4c9f332",
                        87: "9159e2b8",
                        88: "921a5271",
                        89: "a95560e2",
                        90: "0f493907",
                        91: "a4e8ea46",
                        92: "9c3da531",
                        93: "a8464f93",
                        94: "5174c432",
                        95: "ab2c8128",
                        96: "df598805",
                        97: "25a99876",
                        98: "625d2fa7",
                        99: "44a54478",
                        100: "f8f3efb6",
                        101: "d7ce2b85",
                        102: "3264b8b4",
                        103: "a8d125e5",
                        104: "eaec9e9b",
                        105: "eea66b4c",
                        106: "d046c8b8"
                    }[e] + ".js"
                }(e);
                var l = new Error;
                i = function(t) {
                    s.onerror = s.onload = null,
                    clearTimeout(d);
                    var a = o[e];
                    if (0 !== a) {
                        if (a) {
                            var c = t && ("load" === t.type ? "missing" : t.type)
                              , r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + c + ": " + r + ")",
                            l.name = "ChunkLoadError",
                            l.type = c,
                            l.request = r,
                            a[1](l)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: s
                    })
                }
                ), 12e4);
                s.onerror = s.onload = i,
                document.head.appendChild(s)
            }
        return Promise.all(t)
    }
    ,
    n.m = e,
    n.c = c,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var c in e)
                n.d(a, c, function(t) {
                    return e[t]
                }
                .bind(null, c));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "//static.36krcdn.com/36kr-web/",
    n.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var s = window.webpackJsonp = window.webpackJsonp || []
      , l = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var d = 0; d < s.length; d++)
        t(s[d]);
    var f = l;
    //  注释网页上 触发的第一个加载器
    // a()
    bc = n
}({
    "774": function(e, t, n) {
        var r, o, i;
        o = [t],
        void 0 === (i = "function" == typeof (r = function (e) {
                var t;

                function n(e, t, n) {
                    null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
                }

                function r() {
                    return new n(null)
                }

                "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = function (e, t, n, r, o, i) {
                    for (var a = 32767 & t, s = t >> 15; --i >= 0;) {
                        var u = 32767 & this[e]
                            , c = this[e++] >> 15
                            , l = s * u + c * a;
                        o = ((u = a * u + ((32767 & l) << 15) + n[r] + (1073741823 & o)) >>> 30) + (l >>> 15) + s * c + (o >>> 30),
                            n[r++] = 1073741823 & u
                    }
                    return o
                }
                    ,
                    t = 30) : "Netscape" != navigator.appName ? (n.prototype.am = function (e, t, n, r, o, i) {
                    for (; --i >= 0;) {
                        var a = t * this[e++] + n[r] + o;
                        o = Math.floor(a / 67108864),
                            n[r++] = 67108863 & a
                    }
                    return o
                }
                    ,
                    t = 26) : (n.prototype.am = function (e, t, n, r, o, i) {
                    for (var a = 16383 & t, s = t >> 14; --i >= 0;) {
                        var u = 16383 & this[e]
                            , c = this[e++] >> 14
                            , l = s * u + c * a;
                        o = ((u = a * u + ((16383 & l) << 14) + n[r] + o) >> 28) + (l >> 14) + s * c,
                            n[r++] = 268435455 & u
                    }
                    return o
                }
                    ,
                    t = 28),
                    n.prototype.DB = t,
                    n.prototype.DM = (1 << t) - 1,
                    n.prototype.DV = 1 << t,
                    n.prototype.FV = Math.pow(2, 52),
                    n.prototype.F1 = 52 - t,
                    n.prototype.F2 = 2 * t - 52;
                var o, i, a = new Array;
                for (o = "0".charCodeAt(0),
                         i = 0; i <= 9; ++i)
                    a[o++] = i;
                for (o = "a".charCodeAt(0),
                         i = 10; i < 36; ++i)
                    a[o++] = i;
                for (o = "A".charCodeAt(0),
                         i = 10; i < 36; ++i)
                    a[o++] = i;

                function s(e) {
                    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
                }

                function u(e, t) {
                    var n = a[e.charCodeAt(t)];
                    return null == n ? -1 : n
                }

                function c(e) {
                    var t = r();
                    return t.fromInt(e),
                        t
                }

                function l(e) {
                    var t, n = 1;
                    return 0 != (t = e >>> 16) && (e = t,
                        n += 16),
                    0 != (t = e >> 8) && (e = t,
                        n += 8),
                    0 != (t = e >> 4) && (e = t,
                        n += 4),
                    0 != (t = e >> 2) && (e = t,
                        n += 2),
                    0 != (t = e >> 1) && (e = t,
                        n += 1),
                        n
                }

                function f(e) {
                    this.m = e
                }

                function d(e) {
                    this.m = e,
                        this.mp = e.invDigit(),
                        this.mpl = 32767 & this.mp,
                        this.mph = this.mp >> 15,
                        this.um = (1 << e.DB - 15) - 1,
                        this.mt2 = 2 * e.t
                }

                function p(e, t) {
                    return e & t
                }

                function h(e, t) {
                    return e | t
                }

                function m(e, t) {
                    return e ^ t
                }

                function _(e, t) {
                    return e & ~t
                }

                function y(e) {
                    if (0 == e)
                        return -1;
                    var t = 0;
                    return 0 == (65535 & e) && (e >>= 16,
                        t += 16),
                    0 == (255 & e) && (e >>= 8,
                        t += 8),
                    0 == (15 & e) && (e >>= 4,
                        t += 4),
                    0 == (3 & e) && (e >>= 2,
                        t += 2),
                    0 == (1 & e) && ++t,
                        t
                }

                function g(e) {
                    for (var t = 0; 0 != e;)
                        e &= e - 1,
                            ++t;
                    return t
                }

                function b() {
                }

                function T(e) {
                    return e
                }

                function E(e) {
                    this.r2 = r(),
                        this.q3 = r(),
                        n.ONE.dlShiftTo(2 * e.t, this.r2),
                        this.mu = this.r2.divide(e),
                        this.m = e
                }

                f.prototype.convert = function (e) {
                    return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
                }
                    ,
                    f.prototype.revert = function (e) {
                        return e
                    }
                    ,
                    f.prototype.reduce = function (e) {
                        e.divRemTo(this.m, null, e)
                    }
                    ,
                    f.prototype.mulTo = function (e, t, n) {
                        e.multiplyTo(t, n),
                            this.reduce(n)
                    }
                    ,
                    f.prototype.sqrTo = function (e, t) {
                        e.squareTo(t),
                            this.reduce(t)
                    }
                    ,
                    d.prototype.convert = function (e) {
                        var t = r();
                        return e.abs().dlShiftTo(this.m.t, t),
                            t.divRemTo(this.m, null, t),
                        e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t),
                            t
                    }
                    ,
                    d.prototype.revert = function (e) {
                        var t = r();
                        return e.copyTo(t),
                            this.reduce(t),
                            t
                    }
                    ,
                    d.prototype.reduce = function (e) {
                        for (; e.t <= this.mt2;)
                            e[e.t++] = 0;
                        for (var t = 0; t < this.m.t; ++t) {
                            var n = 32767 & e[t]
                                , r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                            for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;)
                                e[n] -= e.DV,
                                    e[++n]++
                        }
                        e.clamp(),
                            e.drShiftTo(this.m.t, e),
                        e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
                    }
                    ,
                    d.prototype.mulTo = function (e, t, n) {
                        e.multiplyTo(t, n),
                            this.reduce(n)
                    }
                    ,
                    d.prototype.sqrTo = function (e, t) {
                        e.squareTo(t),
                            this.reduce(t)
                    }
                    ,
                    n.prototype.copyTo = function (e) {
                        for (var t = this.t - 1; t >= 0; --t)
                            e[t] = this[t];
                        e.t = this.t,
                            e.s = this.s
                    }
                    ,
                    n.prototype.fromInt = function (e) {
                        this.t = 1,
                            this.s = e < 0 ? -1 : 0,
                            e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
                    }
                    ,
                    n.prototype.fromString = function (e, t) {
                        var r;
                        if (16 == t)
                            r = 4;
                        else if (8 == t)
                            r = 3;
                        else if (256 == t)
                            r = 8;
                        else if (2 == t)
                            r = 1;
                        else if (32 == t)
                            r = 5;
                        else {
                            if (4 != t)
                                return void this.fromRadix(e, t);
                            r = 2
                        }
                        this.t = 0,
                            this.s = 0;
                        for (var o = e.length, i = !1, a = 0; --o >= 0;) {
                            var s = 8 == r ? 255 & e[o] : u(e, o);
                            s < 0 ? "-" == e.charAt(o) && (i = !0) : (i = !1,
                                0 == a ? this[this.t++] = s : a + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - a) - 1) << a,
                                    this[this.t++] = s >> this.DB - a) : this[this.t - 1] |= s << a,
                            (a += r) >= this.DB && (a -= this.DB))
                        }
                        8 == r && 0 != (128 & e[0]) && (this.s = -1,
                        a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
                            this.clamp(),
                        i && n.ZERO.subTo(this, this)
                    }
                    ,
                    n.prototype.clamp = function () {
                        for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;)
                            --this.t
                    }
                    ,
                    n.prototype.dlShiftTo = function (e, t) {
                        var n;
                        for (n = this.t - 1; n >= 0; --n)
                            t[n + e] = this[n];
                        for (n = e - 1; n >= 0; --n)
                            t[n] = 0;
                        t.t = this.t + e,
                            t.s = this.s
                    }
                    ,
                    n.prototype.drShiftTo = function (e, t) {
                        for (var n = e; n < this.t; ++n)
                            t[n - e] = this[n];
                        t.t = Math.max(this.t - e, 0),
                            t.s = this.s
                    }
                    ,
                    n.prototype.lShiftTo = function (e, t) {
                        var n, r = e % this.DB, o = this.DB - r, i = (1 << o) - 1, a = Math.floor(e / this.DB),
                            s = this.s << r & this.DM;
                        for (n = this.t - 1; n >= 0; --n)
                            t[n + a + 1] = this[n] >> o | s,
                                s = (this[n] & i) << r;
                        for (n = a - 1; n >= 0; --n)
                            t[n] = 0;
                        t[a] = s,
                            t.t = this.t + a + 1,
                            t.s = this.s,
                            t.clamp()
                    }
                    ,
                    n.prototype.rShiftTo = function (e, t) {
                        t.s = this.s;
                        var n = Math.floor(e / this.DB);
                        if (n >= this.t)
                            t.t = 0;
                        else {
                            var r = e % this.DB
                                , o = this.DB - r
                                , i = (1 << r) - 1;
                            t[0] = this[n] >> r;
                            for (var a = n + 1; a < this.t; ++a)
                                t[a - n - 1] |= (this[a] & i) << o,
                                    t[a - n] = this[a] >> r;
                            r > 0 && (t[this.t - n - 1] |= (this.s & i) << o),
                                t.t = this.t - n,
                                t.clamp()
                        }
                    }
                    ,
                    n.prototype.subTo = function (e, t) {
                        for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o;)
                            r += this[n] - e[n],
                                t[n++] = r & this.DM,
                                r >>= this.DB;
                        if (e.t < this.t) {
                            for (r -= e.s; n < this.t;)
                                r += this[n],
                                    t[n++] = r & this.DM,
                                    r >>= this.DB;
                            r += this.s
                        } else {
                            for (r += this.s; n < e.t;)
                                r -= e[n],
                                    t[n++] = r & this.DM,
                                    r >>= this.DB;
                            r -= e.s
                        }
                        t.s = r < 0 ? -1 : 0,
                            r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r),
                            t.t = n,
                            t.clamp()
                    }
                    ,
                    n.prototype.multiplyTo = function (e, t) {
                        var r = this.abs()
                            , o = e.abs()
                            , i = r.t;
                        for (t.t = i + o.t; --i >= 0;)
                            t[i] = 0;
                        for (i = 0; i < o.t; ++i)
                            t[i + r.t] = r.am(0, o[i], t, i, 0, r.t);
                        t.s = 0,
                            t.clamp(),
                        this.s != e.s && n.ZERO.subTo(t, t)
                    }
                    ,
                    n.prototype.squareTo = function (e) {
                        for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;)
                            e[n] = 0;
                        for (n = 0; n < t.t - 1; ++n) {
                            var r = t.am(n, t[n], e, 2 * n, 0, 1);
                            (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV,
                                e[n + t.t + 1] = 1)
                        }
                        e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
                            e.s = 0,
                            e.clamp()
                    }
                    ,
                    n.prototype.divRemTo = function (e, t, o) {
                        var i = e.abs();
                        if (!(i.t <= 0)) {
                            var a = this.abs();
                            if (a.t < i.t)
                                return null != t && t.fromInt(0),
                                    void (null != o && this.copyTo(o));
                            null == o && (o = r());
                            var s = r()
                                , u = this.s
                                , c = e.s
                                , f = this.DB - l(i[i.t - 1]);
                            f > 0 ? (i.lShiftTo(f, s),
                                a.lShiftTo(f, o)) : (i.copyTo(s),
                                a.copyTo(o));
                            var d = s.t
                                , p = s[d - 1];
                            if (0 != p) {
                                var h = p * (1 << this.F1) + (d > 1 ? s[d - 2] >> this.F2 : 0)
                                    , m = this.FV / h
                                    , _ = (1 << this.F1) / h
                                    , y = 1 << this.F2
                                    , g = o.t
                                    , v = g - d
                                    , b = null == t ? r() : t;
                                for (s.dlShiftTo(v, b),
                                     o.compareTo(b) >= 0 && (o[o.t++] = 1,
                                         o.subTo(b, o)),
                                         n.ONE.dlShiftTo(d, b),
                                         b.subTo(s, s); s.t < d;)
                                    s[s.t++] = 0;
                                for (; --v >= 0;) {
                                    var T = o[--g] == p ? this.DM : Math.floor(o[g] * m + (o[g - 1] + y) * _);
                                    if ((o[g] += s.am(0, T, o, v, 0, d)) < T)
                                        for (s.dlShiftTo(v, b),
                                                 o.subTo(b, o); o[g] < --T;)
                                            o.subTo(b, o)
                                }
                                null != t && (o.drShiftTo(d, t),
                                u != c && n.ZERO.subTo(t, t)),
                                    o.t = d,
                                    o.clamp(),
                                f > 0 && o.rShiftTo(f, o),
                                u < 0 && n.ZERO.subTo(o, o)
                            }
                        }
                    }
                    ,
                    n.prototype.invDigit = function () {
                        if (this.t < 1)
                            return 0;
                        var e = this[0];
                        if (0 == (1 & e))
                            return 0;
                        var t = 3 & e;
                        return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
                    }
                    ,
                    n.prototype.isEven = function () {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                    }
                    ,
                    n.prototype.exp = function (e, t) {
                        if (e > 4294967295 || e < 1)
                            return n.ONE;
                        var o = r()
                            , i = r()
                            , a = t.convert(this)
                            , s = l(e) - 1;
                        for (a.copyTo(o); --s >= 0;)
                            if (t.sqrTo(o, i),
                            (e & 1 << s) > 0)
                                t.mulTo(i, a, o);
                            else {
                                var u = o;
                                o = i,
                                    i = u
                            }
                        return t.revert(o)
                    }
                    ,
                    n.prototype.toString = function (e) {
                        if (this.s < 0)
                            return "-" + this.negate().toString(e);
                        var t;
                        if (16 == e)
                            t = 4;
                        else if (8 == e)
                            t = 3;
                        else if (2 == e)
                            t = 1;
                        else if (32 == e)
                            t = 5;
                        else {
                            if (4 != e)
                                return this.toRadix(e);
                            t = 2
                        }
                        var n, r = (1 << t) - 1, o = !1, i = "", a = this.t, u = this.DB - a * this.DB % t;
                        if (a-- > 0)
                            for (u < this.DB && (n = this[a] >> u) > 0 && (o = !0,
                                i = s(n)); a >= 0;)
                                u < t ? (n = (this[a] & (1 << u) - 1) << t - u,
                                    n |= this[--a] >> (u += this.DB - t)) : (n = this[a] >> (u -= t) & r,
                                u <= 0 && (u += this.DB,
                                    --a)),
                                n > 0 && (o = !0),
                                o && (i += s(n));
                        return o ? i : "0"
                    }
                    ,
                    n.prototype.negate = function () {
                        var e = r();
                        return n.ZERO.subTo(this, e),
                            e
                    }
                    ,
                    n.prototype.abs = function () {
                        return this.s < 0 ? this.negate() : this
                    }
                    ,
                    n.prototype.compareTo = function (e) {
                        var t = this.s - e.s;
                        if (0 != t)
                            return t;
                        var n = this.t;
                        if (0 != (t = n - e.t))
                            return this.s < 0 ? -t : t;
                        for (; --n >= 0;)
                            if (0 != (t = this[n] - e[n]))
                                return t;
                        return 0
                    }
                    ,
                    n.prototype.bitLength = function () {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
                    }
                    ,
                    n.prototype.mod = function (e) {
                        var t = r();
                        return this.abs().divRemTo(e, null, t),
                        this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t),
                            t
                    }
                    ,
                    n.prototype.modPowInt = function (e, t) {
                        var n;
                        return n = e < 256 || t.isEven() ? new f(t) : new d(t),
                            this.exp(e, n)
                    }
                    ,
                    n.ZERO = c(0),
                    n.ONE = c(1),
                    b.prototype.convert = T,
                    b.prototype.revert = T,
                    b.prototype.mulTo = function (e, t, n) {
                        e.multiplyTo(t, n)
                    }
                    ,
                    b.prototype.sqrTo = function (e, t) {
                        e.squareTo(t)
                    }
                    ,
                    E.prototype.convert = function (e) {
                        if (e.s < 0 || e.t > 2 * this.m.t)
                            return e.mod(this.m);
                        if (e.compareTo(this.m) < 0)
                            return e;
                        var t = r();
                        return e.copyTo(t),
                            this.reduce(t),
                            t
                    }
                    ,
                    E.prototype.revert = function (e) {
                        return e
                    }
                    ,
                    E.prototype.reduce = function (e) {
                        for (e.drShiftTo(this.m.t - 1, this.r2),
                             e.t > this.m.t + 1 && (e.t = this.m.t + 1,
                                 e.clamp()),
                                 this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                                 this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;)
                            e.dAddOffset(1, this.m.t + 1);
                        for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;)
                            e.subTo(this.m, e)
                    }
                    ,
                    E.prototype.mulTo = function (e, t, n) {
                        e.multiplyTo(t, n),
                            this.reduce(n)
                    }
                    ,
                    E.prototype.sqrTo = function (e, t) {
                        e.squareTo(t),
                            this.reduce(t)
                    }
                ;
                var w, S, M,
                    k = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                    O = (1 << 26) / k[k.length - 1];

                function L() {
                    this.i = 0,
                        this.j = 0,
                        this.S = new Array
                }

                if (n.prototype.chunkSize = function (e) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(e))
                }
                    ,
                    n.prototype.toRadix = function (e) {
                        if (null == e && (e = 10),
                        0 == this.signum() || e < 2 || e > 36)
                            return "0";
                        var t = this.chunkSize(e)
                            , n = Math.pow(e, t)
                            , o = c(n)
                            , i = r()
                            , a = r()
                            , s = "";
                        for (this.divRemTo(o, i, a); i.signum() > 0;)
                            s = (n + a.intValue()).toString(e).substr(1) + s,
                                i.divRemTo(o, i, a);
                        return a.intValue().toString(e) + s
                    }
                    ,
                    n.prototype.fromRadix = function (e, t) {
                        this.fromInt(0),
                        null == t && (t = 10);
                        for (var r = this.chunkSize(t), o = Math.pow(t, r), i = !1, a = 0, s = 0, c = 0; c < e.length; ++c) {
                            var l = u(e, c);
                            l < 0 ? "-" == e.charAt(c) && 0 == this.signum() && (i = !0) : (s = t * s + l,
                            ++a >= r && (this.dMultiply(o),
                                this.dAddOffset(s, 0),
                                a = 0,
                                s = 0))
                        }
                        a > 0 && (this.dMultiply(Math.pow(t, a)),
                            this.dAddOffset(s, 0)),
                        i && n.ZERO.subTo(this, this)
                    }
                    ,
                    n.prototype.fromNumber = function (e, t, r) {
                        if ("number" == typeof t)
                            if (e < 2)
                                this.fromInt(1);
                            else
                                for (this.fromNumber(e, r),
                                     this.testBit(e - 1) || this.bitwiseTo(n.ONE.shiftLeft(e - 1), h, this),
                                     this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t);)
                                    this.dAddOffset(2, 0),
                                    this.bitLength() > e && this.subTo(n.ONE.shiftLeft(e - 1), this);
                        else {
                            var o = new Array
                                , i = 7 & e;
                            o.length = 1 + (e >> 3),
                                t.nextBytes(o),
                                i > 0 ? o[0] &= (1 << i) - 1 : o[0] = 0,
                                this.fromString(o, 256)
                        }
                    }
                    ,
                    n.prototype.bitwiseTo = function (e, t, n) {
                        var r, o, i = Math.min(e.t, this.t);
                        for (r = 0; r < i; ++r)
                            n[r] = t(this[r], e[r]);
                        if (e.t < this.t) {
                            for (o = e.s & this.DM,
                                     r = i; r < this.t; ++r)
                                n[r] = t(this[r], o);
                            n.t = this.t
                        } else {
                            for (o = this.s & this.DM,
                                     r = i; r < e.t; ++r)
                                n[r] = t(o, e[r]);
                            n.t = e.t
                        }
                        n.s = t(this.s, e.s),
                            n.clamp()
                    }
                    ,
                    n.prototype.changeBit = function (e, t) {
                        var r = n.ONE.shiftLeft(e);
                        return this.bitwiseTo(r, t, r),
                            r
                    }
                    ,
                    n.prototype.addTo = function (e, t) {
                        for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o;)
                            r += this[n] + e[n],
                                t[n++] = r & this.DM,
                                r >>= this.DB;
                        if (e.t < this.t) {
                            for (r += e.s; n < this.t;)
                                r += this[n],
                                    t[n++] = r & this.DM,
                                    r >>= this.DB;
                            r += this.s
                        } else {
                            for (r += this.s; n < e.t;)
                                r += e[n],
                                    t[n++] = r & this.DM,
                                    r >>= this.DB;
                            r += e.s
                        }
                        t.s = r < 0 ? -1 : 0,
                            r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r),
                            t.t = n,
                            t.clamp()
                    }
                    ,
                    n.prototype.dMultiply = function (e) {
                        this[this.t] = this.am(0, e - 1, this, 0, 0, this.t),
                            ++this.t,
                            this.clamp()
                    }
                    ,
                    n.prototype.dAddOffset = function (e, t) {
                        if (0 != e) {
                            for (; this.t <= t;)
                                this[this.t++] = 0;
                            for (this[t] += e; this[t] >= this.DV;)
                                this[t] -= this.DV,
                                ++t >= this.t && (this[this.t++] = 0),
                                    ++this[t]
                        }
                    }
                    ,
                    n.prototype.multiplyLowerTo = function (e, t, n) {
                        var r, o = Math.min(this.t + e.t, t);
                        for (n.s = 0,
                                 n.t = o; o > 0;)
                            n[--o] = 0;
                        for (r = n.t - this.t; o < r; ++o)
                            n[o + this.t] = this.am(0, e[o], n, o, 0, this.t);
                        for (r = Math.min(e.t, t); o < r; ++o)
                            this.am(0, e[o], n, o, 0, t - o);
                        n.clamp()
                    }
                    ,
                    n.prototype.multiplyUpperTo = function (e, t, n) {
                        --t;
                        var r = n.t = this.t + e.t - t;
                        for (n.s = 0; --r >= 0;)
                            n[r] = 0;
                        for (r = Math.max(t - this.t, 0); r < e.t; ++r)
                            n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
                        n.clamp(),
                            n.drShiftTo(1, n)
                    }
                    ,
                    n.prototype.modInt = function (e) {
                        if (e <= 0)
                            return 0;
                        var t = this.DV % e
                            , n = this.s < 0 ? e - 1 : 0;
                        if (this.t > 0)
                            if (0 == t)
                                n = this[0] % e;
                            else
                                for (var r = this.t - 1; r >= 0; --r)
                                    n = (t * n + this[r]) % e;
                        return n
                    }
                    ,
                    n.prototype.millerRabin = function (e) {
                        var t = this.subtract(n.ONE)
                            , o = t.getLowestSetBit();
                        if (o <= 0)
                            return !1;
                        var i = t.shiftRight(o);
                        (e = e + 1 >> 1) > k.length && (e = k.length);
                        for (var a = r(), s = 0; s < e; ++s) {
                            a.fromInt(k[Math.floor(Math.random() * k.length)]);
                            var u = a.modPow(i, this);
                            if (0 != u.compareTo(n.ONE) && 0 != u.compareTo(t)) {
                                for (var c = 1; c++ < o && 0 != u.compareTo(t);)
                                    if (0 == (u = u.modPowInt(2, this)).compareTo(n.ONE))
                                        return !1;
                                if (0 != u.compareTo(t))
                                    return !1
                            }
                        }
                        return !0
                    }
                    ,
                    n.prototype.clone = function () {
                        var e = r();
                        return this.copyTo(e),
                            e
                    }
                    ,
                    n.prototype.intValue = function () {
                        if (this.s < 0) {
                            if (1 == this.t)
                                return this[0] - this.DV;
                            if (0 == this.t)
                                return -1
                        } else {
                            if (1 == this.t)
                                return this[0];
                            if (0 == this.t)
                                return 0
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    }
                    ,
                    n.prototype.byteValue = function () {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    }
                    ,
                    n.prototype.shortValue = function () {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    }
                    ,
                    n.prototype.signum = function () {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    }
                    ,
                    n.prototype.toByteArray = function () {
                        var e = this.t
                            , t = new Array;
                        t[0] = this.s;
                        var n, r = this.DB - e * this.DB % 8, o = 0;
                        if (e-- > 0)
                            for (r < this.DB && (n = this[e] >> r) != (this.s & this.DM) >> r && (t[o++] = n | this.s << this.DB - r); e >= 0;)
                                r < 8 ? (n = (this[e] & (1 << r) - 1) << 8 - r,
                                    n |= this[--e] >> (r += this.DB - 8)) : (n = this[e] >> (r -= 8) & 255,
                                r <= 0 && (r += this.DB,
                                    --e)),
                                0 != (128 & n) && (n |= -256),
                                0 == o && (128 & this.s) != (128 & n) && ++o,
                                (o > 0 || n != this.s) && (t[o++] = n);
                        return t
                    }
                    ,
                    n.prototype.equals = function (e) {
                        return 0 == this.compareTo(e)
                    }
                    ,
                    n.prototype.min = function (e) {
                        return this.compareTo(e) < 0 ? this : e
                    }
                    ,
                    n.prototype.max = function (e) {
                        return this.compareTo(e) > 0 ? this : e
                    }
                    ,
                    n.prototype.and = function (e) {
                        var t = r();
                        return this.bitwiseTo(e, p, t),
                            t
                    }
                    ,
                    n.prototype.or = function (e) {
                        var t = r();
                        return this.bitwiseTo(e, h, t),
                            t
                    }
                    ,
                    n.prototype.xor = function (e) {
                        var t = r();
                        return this.bitwiseTo(e, m, t),
                            t
                    }
                    ,
                    n.prototype.andNot = function (e) {
                        var t = r();
                        return this.bitwiseTo(e, _, t),
                            t
                    }
                    ,
                    n.prototype.not = function () {
                        for (var e = r(), t = 0; t < this.t; ++t)
                            e[t] = this.DM & ~this[t];
                        return e.t = this.t,
                            e.s = ~this.s,
                            e
                    }
                    ,
                    n.prototype.shiftLeft = function (e) {
                        var t = r();
                        return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t),
                            t
                    }
                    ,
                    n.prototype.shiftRight = function (e) {
                        var t = r();
                        return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t),
                            t
                    }
                    ,
                    n.prototype.getLowestSetBit = function () {
                        for (var e = 0; e < this.t; ++e)
                            if (0 != this[e])
                                return e * this.DB + y(this[e]);
                        return this.s < 0 ? this.t * this.DB : -1
                    }
                    ,
                    n.prototype.bitCount = function () {
                        for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
                            e += g(this[n] ^ t);
                        return e
                    }
                    ,
                    n.prototype.testBit = function (e) {
                        var t = Math.floor(e / this.DB);
                        return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
                    }
                    ,
                    n.prototype.setBit = function (e) {
                        return this.changeBit(e, h)
                    }
                    ,
                    n.prototype.clearBit = function (e) {
                        return this.changeBit(e, _)
                    }
                    ,
                    n.prototype.flipBit = function (e) {
                        return this.changeBit(e, m)
                    }
                    ,
                    n.prototype.add = function (e) {
                        var t = r();
                        return this.addTo(e, t),
                            t
                    }
                    ,
                    n.prototype.subtract = function (e) {
                        var t = r();
                        return this.subTo(e, t),
                            t
                    }
                    ,
                    n.prototype.multiply = function (e) {
                        var t = r();
                        return this.multiplyTo(e, t),
                            t
                    }
                    ,
                    n.prototype.divide = function (e) {
                        var t = r();
                        return this.divRemTo(e, t, null),
                            t
                    }
                    ,
                    n.prototype.remainder = function (e) {
                        var t = r();
                        return this.divRemTo(e, null, t),
                            t
                    }
                    ,
                    n.prototype.divideAndRemainder = function (e) {
                        var t = r()
                            , n = r();
                        return this.divRemTo(e, t, n),
                            new Array(t, n)
                    }
                    ,
                    n.prototype.modPow = function (e, t) {
                        var n, o, i = e.bitLength(), a = c(1);
                        if (i <= 0)
                            return a;
                        n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
                            o = i < 8 ? new f(t) : t.isEven() ? new E(t) : new d(t);
                        var s = new Array
                            , u = 3
                            , p = n - 1
                            , h = (1 << n) - 1;
                        if (s[1] = o.convert(this),
                        n > 1) {
                            var m = r();
                            for (o.sqrTo(s[1], m); u <= h;)
                                s[u] = r(),
                                    o.mulTo(m, s[u - 2], s[u]),
                                    u += 2
                        }
                        var _, y, g = e.t - 1, v = !0, b = r();
                        for (i = l(e[g]) - 1; g >= 0;) {
                            for (i >= p ? _ = e[g] >> i - p & h : (_ = (e[g] & (1 << i + 1) - 1) << p - i,
                            g > 0 && (_ |= e[g - 1] >> this.DB + i - p)),
                                     u = n; 0 == (1 & _);)
                                _ >>= 1,
                                    --u;
                            if ((i -= u) < 0 && (i += this.DB,
                                --g),
                                v)
                                s[_].copyTo(a),
                                    v = !1;
                            else {
                                for (; u > 1;)
                                    o.sqrTo(a, b),
                                        o.sqrTo(b, a),
                                        u -= 2;
                                u > 0 ? o.sqrTo(a, b) : (y = a,
                                    a = b,
                                    b = y),
                                    o.mulTo(b, s[_], a)
                            }
                            for (; g >= 0 && 0 == (e[g] & 1 << i);)
                                o.sqrTo(a, b),
                                    y = a,
                                    a = b,
                                    b = y,
                                --i < 0 && (i = this.DB - 1,
                                    --g)
                        }
                        return o.revert(a)
                    }
                    ,
                    n.prototype.modInverse = function (e) {
                        var t = e.isEven();
                        if (this.isEven() && t || 0 == e.signum())
                            return n.ZERO;
                        for (var r = e.clone(), o = this.clone(), i = c(1), a = c(0), s = c(0), u = c(1); 0 != r.signum();) {
                            for (; r.isEven();)
                                r.rShiftTo(1, r),
                                    t ? (i.isEven() && a.isEven() || (i.addTo(this, i),
                                        a.subTo(e, a)),
                                        i.rShiftTo(1, i)) : a.isEven() || a.subTo(e, a),
                                    a.rShiftTo(1, a);
                            for (; o.isEven();)
                                o.rShiftTo(1, o),
                                    t ? (s.isEven() && u.isEven() || (s.addTo(this, s),
                                        u.subTo(e, u)),
                                        s.rShiftTo(1, s)) : u.isEven() || u.subTo(e, u),
                                    u.rShiftTo(1, u);
                            r.compareTo(o) >= 0 ? (r.subTo(o, r),
                            t && i.subTo(s, i),
                                a.subTo(u, a)) : (o.subTo(r, o),
                            t && s.subTo(i, s),
                                u.subTo(a, u))
                        }
                        return 0 != o.compareTo(n.ONE) ? n.ZERO : u.compareTo(e) >= 0 ? u.subtract(e) : u.signum() < 0 ? (u.addTo(e, u),
                            u.signum() < 0 ? u.add(e) : u) : u
                    }
                    ,
                    n.prototype.pow = function (e) {
                        return this.exp(e, new b)
                    }
                    ,
                    n.prototype.gcd = function (e) {
                        var t = this.s < 0 ? this.negate() : this.clone()
                            , n = e.s < 0 ? e.negate() : e.clone();
                        if (t.compareTo(n) < 0) {
                            var r = t;
                            t = n,
                                n = r
                        }
                        var o = t.getLowestSetBit()
                            , i = n.getLowestSetBit();
                        if (i < 0)
                            return t;
                        for (o < i && (i = o),
                             i > 0 && (t.rShiftTo(i, t),
                                 n.rShiftTo(i, n)); t.signum() > 0;)
                            (o = t.getLowestSetBit()) > 0 && t.rShiftTo(o, t),
                            (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                                t.compareTo(n) >= 0 ? (t.subTo(n, t),
                                    t.rShiftTo(1, t)) : (n.subTo(t, n),
                                    n.rShiftTo(1, n));
                        return i > 0 && n.lShiftTo(i, n),
                            n
                    }
                    ,
                    n.prototype.isProbablePrime = function (e) {
                        var t, n = this.abs();
                        if (1 == n.t && n[0] <= k[k.length - 1]) {
                            for (t = 0; t < k.length; ++t)
                                if (n[0] == k[t])
                                    return !0;
                            return !1
                        }
                        if (n.isEven())
                            return !1;
                        for (t = 1; t < k.length;) {
                            for (var r = k[t], o = t + 1; o < k.length && r < O;)
                                r *= k[o++];
                            for (r = n.modInt(r); t < o;)
                                if (r % k[t++] == 0)
                                    return !1
                        }
                        return n.millerRabin(e)
                    }
                    ,
                    n.prototype.square = function () {
                        var e = r();
                        return this.squareTo(e),
                            e
                    }
                    ,
                    L.prototype.init = function (e) {
                        var t, n, r;
                        for (t = 0; t < 256; ++t)
                            this.S[t] = t;
                        for (n = 0,
                                 t = 0; t < 256; ++t)
                            n = n + this.S[t] + e[t % e.length] & 255,
                                r = this.S[t],
                                this.S[t] = this.S[n],
                                this.S[n] = r;
                        this.i = 0,
                            this.j = 0
                    }
                    ,
                    L.prototype.next = function () {
                        var e;
                        return this.i = this.i + 1 & 255,
                            this.j = this.j + this.S[this.i] & 255,
                            e = this.S[this.i],
                            this.S[this.i] = this.S[this.j],
                            this.S[this.j] = e,
                            this.S[e + this.S[this.i] & 255]
                    }
                    ,
                null == S) {
                    var A;
                    if (S = new Array,
                        M = 0,
                    window.crypto && window.crypto.getRandomValues) {
                        var D = new Uint32Array(256);
                        for (window.crypto.getRandomValues(D),
                                 A = 0; A < D.length; ++A)
                            S[M++] = 255 & D[A]
                    }
                    var x = function (e) {
                        if (this.count = this.count || 0,
                        this.count >= 256 || M >= 256)
                            window.removeEventListener ? window.removeEventListener("mousemove", x, !1) : window.detachEvent && window.detachEvent("onmousemove", x);
                        else
                            try {
                                var t = e.x + e.y;
                                S[M++] = 255 & t,
                                    this.count += 1
                            } catch (e) {
                            }
                    };
                    window.addEventListener ? window.addEventListener("mousemove", x, !1) : window.attachEvent && window.attachEvent("onmousemove", x)
                }

                function C() {
                    if (null == w) {
                        for (w = new L; M < 256;) {
                            var e = Math.floor(65536 * Math.random());
                            S[M++] = 255 & e
                        }
                        for (w.init(S),
                                 M = 0; M < S.length; ++M)
                            S[M] = 0;
                        M = 0
                    }
                    return w.next()
                }

                function N() {
                }

                function P(e, t) {
                    return new n(e, t)
                }

                function R() {
                    this.n = null,
                        this.e = 0,
                        this.d = null,
                        this.p = null,
                        this.q = null,
                        this.dmp1 = null,
                        this.dmq1 = null,
                        this.coeff = null
                }

                N.prototype.nextBytes = function (e) {
                    var t;
                    for (t = 0; t < e.length; ++t)
                        e[t] = C()
                }
                    ,
                    R.prototype.doPublic = function (e) {
                        return e.modPowInt(this.e, this.n)
                    }
                    ,
                    R.prototype.setPublic = function (e, t) {
                        null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = P(e, 16),
                            this.e = parseInt(t, 16)) : console.error("Invalid RSA public key")
                    }
                    ,
                    R.prototype.encrypt = function (e) {
                        var t = function (e, t) {
                            if (t < e.length + 11)
                                return console.error("Message too long for RSA"),
                                    null;
                            for (var r = new Array, o = e.length - 1; o >= 0 && t > 0;) {
                                var i = e.charCodeAt(o--);
                                i < 128 ? r[--t] = i : i > 127 && i < 2048 ? (r[--t] = 63 & i | 128,
                                    r[--t] = i >> 6 | 192) : (r[--t] = 63 & i | 128,
                                    r[--t] = i >> 6 & 63 | 128,
                                    r[--t] = i >> 12 | 224)
                            }
                            r[--t] = 0;
                            for (var a = new N, s = new Array; t > 2;) {
                                for (s[0] = 0; 0 == s[0];)
                                    a.nextBytes(s);
                                r[--t] = s[0]
                            }
                            return r[--t] = 2,
                                r[--t] = 0,
                                new n(r)
                        }(e, this.n.bitLength() + 7 >> 3);
                        if (null == t)
                            return null;
                        var r = this.doPublic(t);
                        if (null == r)
                            return null;
                        var o = r.toString(16);
                        return 0 == (1 & o.length) ? o : "0" + o
                    }
                    ,
                    R.prototype.doPrivate = function (e) {
                        if (null == this.p || null == this.q)
                            return e.modPow(this.d, this.n);
                        for (var t = e.mod(this.p).modPow(this.dmp1, this.p), n = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(n) < 0;)
                            t = t.add(this.p);
                        return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
                    }
                    ,
                    R.prototype.setPrivate = function (e, t, n) {
                        null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = P(e, 16),
                            this.e = parseInt(t, 16),
                            this.d = P(n, 16)) : console.error("Invalid RSA private key")
                    }
                    ,
                    R.prototype.setPrivateEx = function (e, t, n, r, o, i, a, s) {
                        null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = P(e, 16),
                            this.e = parseInt(t, 16),
                            this.d = P(n, 16),
                            this.p = P(r, 16),
                            this.q = P(o, 16),
                            this.dmp1 = P(i, 16),
                            this.dmq1 = P(a, 16),
                            this.coeff = P(s, 16)) : console.error("Invalid RSA private key")
                    }
                    ,
                    R.prototype.generate = function (e, t) {
                        var r = new N
                            , o = e >> 1;
                        this.e = parseInt(t, 16);
                        for (var i = new n(t, 16); ;) {
                            for (; this.p = new n(e - o, 1, r),
                                   0 != this.p.subtract(n.ONE).gcd(i).compareTo(n.ONE) || !this.p.isProbablePrime(10);)
                                ;
                            for (; this.q = new n(o, 1, r),
                                   0 != this.q.subtract(n.ONE).gcd(i).compareTo(n.ONE) || !this.q.isProbablePrime(10);)
                                ;
                            if (this.p.compareTo(this.q) <= 0) {
                                var a = this.p;
                                this.p = this.q,
                                    this.q = a
                            }
                            var s = this.p.subtract(n.ONE)
                                , u = this.q.subtract(n.ONE)
                                , c = s.multiply(u);
                            if (0 == c.gcd(i).compareTo(n.ONE)) {
                                this.n = this.p.multiply(this.q),
                                    this.d = i.modInverse(c),
                                    this.dmp1 = this.d.mod(s),
                                    this.dmq1 = this.d.mod(u),
                                    this.coeff = this.q.modInverse(this.p);
                                break
                            }
                        }
                    }
                    ,
                    R.prototype.decrypt = function (e) {
                        var t = P(e, 16)
                            , n = this.doPrivate(t);
                        return null == n ? null : function (e, t) {
                            for (var n = e.toByteArray(), r = 0; r < n.length && 0 == n[r];)
                                ++r;
                            if (n.length - r != t - 1 || 2 != n[r])
                                return null;
                            for (++r; 0 != n[r];)
                                if (++r >= n.length)
                                    return null;
                            for (var o = ""; ++r < n.length;) {
                                var i = 255 & n[r];
                                i < 128 ? o += String.fromCharCode(i) : i > 191 && i < 224 ? (o += String.fromCharCode((31 & i) << 6 | 63 & n[r + 1]),
                                    ++r) : (o += String.fromCharCode((15 & i) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]),
                                    r += 2)
                            }
                            return o
                        }(n, this.n.bitLength() + 7 >> 3)
                    }
                    ,
                    R.prototype.generateAsync = function (e, t, o) {
                        var i = new N
                            , a = e >> 1;
                        this.e = parseInt(t, 16);
                        var s = new n(t, 16)
                            , u = this
                            , c = function () {
                            var t = function () {
                                if (u.p.compareTo(u.q) <= 0) {
                                    var e = u.p;
                                    u.p = u.q,
                                        u.q = e
                                }
                                var t = u.p.subtract(n.ONE)
                                    , r = u.q.subtract(n.ONE)
                                    , i = t.multiply(r);
                                0 == i.gcd(s).compareTo(n.ONE) ? (u.n = u.p.multiply(u.q),
                                    u.d = s.modInverse(i),
                                    u.dmp1 = u.d.mod(t),
                                    u.dmq1 = u.d.mod(r),
                                    u.coeff = u.q.modInverse(u.p),
                                    setTimeout((function () {
                                            o()
                                        }
                                    ), 0)) : setTimeout(c, 0)
                            }
                                , l = function () {
                                u.q = r(),
                                    u.q.fromNumberAsync(a, 1, i, (function () {
                                            u.q.subtract(n.ONE).gcda(s, (function (e) {
                                                    0 == e.compareTo(n.ONE) && u.q.isProbablePrime(10) ? setTimeout(t, 0) : setTimeout(l, 0)
                                                }
                                            ))
                                        }
                                    ))
                            }
                                , f = function () {
                                u.p = r(),
                                    u.p.fromNumberAsync(e - a, 1, i, (function () {
                                            u.p.subtract(n.ONE).gcda(s, (function (e) {
                                                    0 == e.compareTo(n.ONE) && u.p.isProbablePrime(10) ? setTimeout(l, 0) : setTimeout(f, 0)
                                                }
                                            ))
                                        }
                                    ))
                            };
                            setTimeout(f, 0)
                        };
                        setTimeout(c, 0)
                    }
                    ,
                    n.prototype.gcda = function (e, t) {
                        var n = this.s < 0 ? this.negate() : this.clone()
                            , r = e.s < 0 ? e.negate() : e.clone();
                        if (n.compareTo(r) < 0) {
                            var o = n;
                            n = r,
                                r = o
                        }
                        var i = n.getLowestSetBit()
                            , a = r.getLowestSetBit();
                        if (a < 0)
                            t(n);
                        else {
                            i < a && (a = i),
                            a > 0 && (n.rShiftTo(a, n),
                                r.rShiftTo(a, r));
                            var s = function () {
                                (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
                                (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
                                    n.compareTo(r) >= 0 ? (n.subTo(r, n),
                                        n.rShiftTo(1, n)) : (r.subTo(n, r),
                                        r.rShiftTo(1, r)),
                                    n.signum() > 0 ? setTimeout(s, 0) : (a > 0 && r.lShiftTo(a, r),
                                        setTimeout((function () {
                                                t(r)
                                            }
                                        ), 0))
                            };
                            setTimeout(s, 10)
                        }
                    }
                    ,
                    n.prototype.fromNumberAsync = function (e, t, r, o) {
                        if ("number" == typeof t)
                            if (e < 2)
                                this.fromInt(1);
                            else {
                                this.fromNumber(e, r),
                                this.testBit(e - 1) || this.bitwiseTo(n.ONE.shiftLeft(e - 1), h, this),
                                this.isEven() && this.dAddOffset(1, 0);
                                var i = this
                                    , a = function () {
                                    i.dAddOffset(2, 0),
                                    i.bitLength() > e && i.subTo(n.ONE.shiftLeft(e - 1), i),
                                        i.isProbablePrime(t) ? setTimeout((function () {
                                                o()
                                            }
                                        ), 0) : setTimeout(a, 0)
                                };
                                setTimeout(a, 0)
                            }
                        else {
                            var s = new Array
                                , u = 7 & e;
                            s.length = 1 + (e >> 3),
                                t.nextBytes(s),
                                u > 0 ? s[0] &= (1 << u) - 1 : s[0] = 0,
                                this.fromString(s, 256)
                        }
                    }
                ;
                var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

                function I(e) {
                    var t, n, r = "";
                    for (t = 0; t + 3 <= e.length; t += 3)
                        n = parseInt(e.substring(t, t + 3), 16),
                            r += j.charAt(n >> 6) + j.charAt(63 & n);
                    for (t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16),
                        r += j.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16),
                        r += j.charAt(n >> 2) + j.charAt((3 & n) << 4)); (3 & r.length) > 0;)
                        r += "=";
                    return r
                }

                function Y(e) {
                    var t, n, r = "", o = 0;
                    for (t = 0; t < e.length && "=" != e.charAt(t); ++t)
                        v = j.indexOf(e.charAt(t)),
                        v < 0 || (0 == o ? (r += s(v >> 2),
                            n = 3 & v,
                            o = 1) : 1 == o ? (r += s(n << 2 | v >> 4),
                            n = 15 & v,
                            o = 2) : 2 == o ? (r += s(n),
                            r += s(v >> 2),
                            n = 3 & v,
                            o = 3) : (r += s(n << 2 | v >> 4),
                            r += s(15 & v),
                            o = 0));
                    return 1 == o && (r += s(n << 2)),
                        r
                }

                var H = H || {};
                H.env = H.env || {};
                var F = H
                    , B = Object.prototype
                    , U = ["toString", "valueOf"];
                H.env.parseUA = function (e) {
                    var t, n = function (e) {
                        var t = 0;
                        return parseFloat(e.replace(/\./g, (function () {
                                return 1 == t++ ? "" : "."
                            }
                        )))
                    }, r = navigator, o = {
                        ie: 0,
                        opera: 0,
                        gecko: 0,
                        webkit: 0,
                        chrome: 0,
                        mobile: null,
                        air: 0,
                        ipad: 0,
                        iphone: 0,
                        ipod: 0,
                        ios: null,
                        android: 0,
                        webos: 0,
                        caja: r && r.cajaVersion,
                        secure: !1,
                        os: null
                    }, i = e || navigator && navigator.userAgent, a = window && window.location, s = a && a.href;
                    return o.secure = s && 0 === s.toLowerCase().indexOf("https"),
                    i && (/windows|win32/i.test(i) ? o.os = "windows" : /macintosh/i.test(i) ? o.os = "macintosh" : /rhino/i.test(i) && (o.os = "rhino"),
                    /KHTML/.test(i) && (o.webkit = 1),
                    (t = i.match(/AppleWebKit\/([^\s]*)/)) && t[1] && (o.webkit = n(t[1]),
                        / Mobile\//.test(i) ? (o.mobile = "Apple",
                        (t = i.match(/OS ([^\s]*)/)) && t[1] && (t = n(t[1].replace("_", "."))),
                            o.ios = t,
                            o.ipad = o.ipod = o.iphone = 0,
                        (t = i.match(/iPad|iPod|iPhone/)) && t[0] && (o[t[0].toLowerCase()] = o.ios)) : ((t = i.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (o.mobile = t[0]),
                        /webOS/.test(i) && (o.mobile = "WebOS",
                        (t = i.match(/webOS\/([^\s]*);/)) && t[1] && (o.webos = n(t[1]))),
                        / Android/.test(i) && (o.mobile = "Android",
                        (t = i.match(/Android ([^\s]*);/)) && t[1] && (o.android = n(t[1])))),
                        (t = i.match(/Chrome\/([^\s]*)/)) && t[1] ? o.chrome = n(t[1]) : (t = i.match(/AdobeAIR\/([^\s]*)/)) && (o.air = t[0])),
                    o.webkit || ((t = i.match(/Opera[\s\/]([^\s]*)/)) && t[1] ? (o.opera = n(t[1]),
                    (t = i.match(/Version\/([^\s]*)/)) && t[1] && (o.opera = n(t[1])),
                    (t = i.match(/Opera Mini[^;]*/)) && (o.mobile = t[0])) : (t = i.match(/MSIE\s([^;]*)/)) && t[1] ? o.ie = n(t[1]) : (t = i.match(/Gecko\/([^\s]*)/)) && (o.gecko = 1,
                    (t = i.match(/rv:([^\s\)]*)/)) && t[1] && (o.gecko = n(t[1]))))),
                        o
                }
                    ,
                    H.env.ua = H.env.parseUA(),
                    H.isFunction = function (e) {
                        return "function" == typeof e || "[object Function]" === B.toString.apply(e)
                    }
                    ,
                    H._IEEnumFix = H.env.ua.ie ? function (e, t) {
                            var n, r, o;
                            for (n = 0; n < U.length; n += 1)
                                o = t[r = U[n]],
                                F.isFunction(o) && o != B[r] && (e[r] = o)
                        }
                        : function () {
                        }
                    ,
                    H.extend = function (e, t, n) {
                        if (!t || !e)
                            throw new Error("extend failed, please check that all dependencies are included.");
                        var r, o = function () {
                        };
                        if (o.prototype = t.prototype,
                            e.prototype = new o,
                            e.prototype.constructor = e,
                            e.superclass = t.prototype,
                        t.prototype.constructor == B.constructor && (t.prototype.constructor = t),
                            n) {
                            for (r in n)
                                F.hasOwnProperty(n, r) && (e.prototype[r] = n[r]);
                            F._IEEnumFix(e.prototype, n)
                        }
                    }
                    ,
                "undefined" != typeof KJUR && KJUR || (KJUR = {}),
                void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
                    KJUR.asn1.ASN1Util = new function () {
                        this.integerToByteHex = function (e) {
                            var t = e.toString(16);
                            return t.length % 2 == 1 && (t = "0" + t),
                                t
                        }
                            ,
                            this.bigIntToMinTwosComplementsHex = function (e) {
                                var t = e.toString(16);
                                if ("-" != t.substr(0, 1))
                                    t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
                                else {
                                    var r = t.substr(1).length;
                                    r % 2 == 1 ? r += 1 : t.match(/^[0-7]/) || (r += 2);
                                    for (var o = "", i = 0; i < r; i++)
                                        o += "f";
                                    t = new n(o, 16).xor(e).add(n.ONE).toString(16).replace(/^-/, "")
                                }
                                return t
                            }
                            ,
                            this.getPEMStringFromHex = function (e, t) {
                                var n = CryptoJS.enc.Hex.parse(e)
                                    , r = CryptoJS.enc.Base64.stringify(n).replace(/(.{64})/g, "$1\r\n");
                                return "-----BEGIN " + t + "-----\r\n" + (r = r.replace(/\r\n$/, "")) + "\r\n-----END " + t + "-----\r\n"
                            }
                    }
                    ,
                    KJUR.asn1.ASN1Object = function () {
                        this.getLengthHexFromValue = function () {
                            if (void 0 === this.hV || null == this.hV)
                                throw "this.hV is null or undefined.";
                            if (this.hV.length % 2 == 1)
                                throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                            var e = this.hV.length / 2
                                , t = e.toString(16);
                            if (t.length % 2 == 1 && (t = "0" + t),
                            e < 128)
                                return t;
                            var n = t.length / 2;
                            if (n > 15)
                                throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                            return (128 + n).toString(16) + t
                        }
                            ,
                            this.getEncodedHex = function () {
                                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                                    this.hL = this.getLengthHexFromValue(),
                                    this.hTLV = this.hT + this.hL + this.hV,
                                    this.isModified = !1),
                                    this.hTLV
                            }
                            ,
                            this.getValueHex = function () {
                                return this.getEncodedHex(),
                                    this.hV
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return ""
                            }
                    }
                    ,
                    KJUR.asn1.DERAbstractString = function (e) {
                        KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
                            this.getString = function () {
                                return this.s
                            }
                            ,
                            this.setString = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.s = e,
                                    this.hV = stohex(this.s)
                            }
                            ,
                            this.setStringHex = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.s = null,
                                    this.hV = e
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return this.hV
                            }
                            ,
                        void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex && this.setStringHex(e.hex))
                    }
                    ,
                    H.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERAbstractTime = function (e) {
                        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this),
                            this.localDateToUTC = function (e) {
                                return utc = e.getTime() + 6e4 * e.getTimezoneOffset(),
                                    new Date(utc)
                            }
                            ,
                            this.formatDate = function (e, t) {
                                var n = this.zeroPadding
                                    , r = this.localDateToUTC(e)
                                    , o = String(r.getFullYear());
                                return "utc" == t && (o = o.substr(2, 2)),
                                o + n(String(r.getMonth() + 1), 2) + n(String(r.getDate()), 2) + n(String(r.getHours()), 2) + n(String(r.getMinutes()), 2) + n(String(r.getSeconds()), 2) + "Z"
                            }
                            ,
                            this.zeroPadding = function (e, t) {
                                return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
                            }
                            ,
                            this.getString = function () {
                                return this.s
                            }
                            ,
                            this.setString = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.s = e,
                                    this.hV = stohex(this.s)
                            }
                            ,
                            this.setByDateValue = function (e, t, n, r, o, i) {
                                var a = new Date(Date.UTC(e, t - 1, n, r, o, i, 0));
                                this.setByDate(a)
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return this.hV
                            }
                    }
                    ,
                    H.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERAbstractStructured = function (e) {
                        KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
                            this.setByASN1ObjectArray = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.asn1Array = e
                            }
                            ,
                            this.appendASN1Object = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.asn1Array.push(e)
                            }
                            ,
                            this.asn1Array = new Array,
                        void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array)
                    }
                    ,
                    H.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERBoolean = function () {
                        KJUR.asn1.DERBoolean.superclass.constructor.call(this),
                            this.hT = "01",
                            this.hTLV = "0101ff"
                    }
                    ,
                    H.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERInteger = function (e) {
                        KJUR.asn1.DERInteger.superclass.constructor.call(this),
                            this.hT = "02",
                            this.setByBigInteger = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
                            }
                            ,
                            this.setByInteger = function (e) {
                                var t = new n(String(e), 10);
                                this.setByBigInteger(t)
                            }
                            ,
                            this.setValueHex = function (e) {
                                this.hV = e
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return this.hV
                            }
                            ,
                        void 0 !== e && (void 0 !== e.bigint ? this.setByBigInteger(e.bigint) : void 0 !== e.int ? this.setByInteger(e.int) : void 0 !== e.hex && this.setValueHex(e.hex))
                    }
                    ,
                    H.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERBitString = function (e) {
                        KJUR.asn1.DERBitString.superclass.constructor.call(this),
                            this.hT = "03",
                            this.setHexValueIncludingUnusedBits = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.hV = e
                            }
                            ,
                            this.setUnusedBitsAndHexValue = function (e, t) {
                                if (e < 0 || 7 < e)
                                    throw "unused bits shall be from 0 to 7: u = " + e;
                                var n = "0" + e;
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.hV = n + t
                            }
                            ,
                            this.setByBinaryString = function (e) {
                                var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
                                8 == t && (t = 0);
                                for (var n = 0; n <= t; n++)
                                    e += "0";
                                var r = "";
                                for (n = 0; n < e.length - 1; n += 8) {
                                    var o = e.substr(n, 8)
                                        , i = parseInt(o, 2).toString(16);
                                    1 == i.length && (i = "0" + i),
                                        r += i
                                }
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.hV = "0" + t + r
                            }
                            ,
                            this.setByBooleanArray = function (e) {
                                for (var t = "", n = 0; n < e.length; n++)
                                    1 == e[n] ? t += "1" : t += "0";
                                this.setByBinaryString(t)
                            }
                            ,
                            this.newFalseArray = function (e) {
                                for (var t = new Array(e), n = 0; n < e; n++)
                                    t[n] = !1;
                                return t
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return this.hV
                            }
                            ,
                        void 0 !== e && (void 0 !== e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : void 0 !== e.bin ? this.setByBinaryString(e.bin) : void 0 !== e.array && this.setByBooleanArray(e.array))
                    }
                    ,
                    H.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DEROctetString = function (e) {
                        KJUR.asn1.DEROctetString.superclass.constructor.call(this, e),
                            this.hT = "04"
                    }
                    ,
                    H.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
                    KJUR.asn1.DERNull = function () {
                        KJUR.asn1.DERNull.superclass.constructor.call(this),
                            this.hT = "05",
                            this.hTLV = "0500"
                    }
                    ,
                    H.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERObjectIdentifier = function (e) {
                        var t = function (e) {
                            var t = e.toString(16);
                            return 1 == t.length && (t = "0" + t),
                                t
                        }
                            , r = function (e) {
                            var r = ""
                                , o = new n(e, 10).toString(2)
                                , i = 7 - o.length % 7;
                            7 == i && (i = 0);
                            for (var a = "", s = 0; s < i; s++)
                                a += "0";
                            for (o = a + o,
                                     s = 0; s < o.length - 1; s += 7) {
                                var u = o.substr(s, 7);
                                s != o.length - 7 && (u = "1" + u),
                                    r += t(parseInt(u, 2))
                            }
                            return r
                        };
                        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                            this.hT = "06",
                            this.setValueHex = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.s = null,
                                    this.hV = e
                            }
                            ,
                            this.setValueOidString = function (e) {
                                if (!e.match(/^[0-9.]+$/))
                                    throw "malformed oid string: " + e;
                                var n = ""
                                    , o = e.split(".")
                                    , i = 40 * parseInt(o[0]) + parseInt(o[1]);
                                n += t(i),
                                    o.splice(0, 2);
                                for (var a = 0; a < o.length; a++)
                                    n += r(o[a]);
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.s = null,
                                    this.hV = n
                            }
                            ,
                            this.setValueName = function (e) {
                                if (void 0 === KJUR.asn1.x509.OID.name2oidList[e])
                                    throw "DERObjectIdentifier oidName undefined: " + e;
                                var t = KJUR.asn1.x509.OID.name2oidList[e];
                                this.setValueOidString(t)
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return this.hV
                            }
                            ,
                        void 0 !== e && (void 0 !== e.oid ? this.setValueOidString(e.oid) : void 0 !== e.hex ? this.setValueHex(e.hex) : void 0 !== e.name && this.setValueName(e.name))
                    }
                    ,
                    H.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
                    KJUR.asn1.DERUTF8String = function (e) {
                        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, e),
                            this.hT = "0c"
                    }
                    ,
                    H.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
                    KJUR.asn1.DERNumericString = function (e) {
                        KJUR.asn1.DERNumericString.superclass.constructor.call(this, e),
                            this.hT = "12"
                    }
                    ,
                    H.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
                    KJUR.asn1.DERPrintableString = function (e) {
                        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, e),
                            this.hT = "13"
                    }
                    ,
                    H.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
                    KJUR.asn1.DERTeletexString = function (e) {
                        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, e),
                            this.hT = "14"
                    }
                    ,
                    H.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
                    KJUR.asn1.DERIA5String = function (e) {
                        KJUR.asn1.DERIA5String.superclass.constructor.call(this, e),
                            this.hT = "16"
                    }
                    ,
                    H.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
                    KJUR.asn1.DERUTCTime = function (e) {
                        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, e),
                            this.hT = "17",
                            this.setByDate = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.date = e,
                                    this.s = this.formatDate(this.date, "utc"),
                                    this.hV = stohex(this.s)
                            }
                            ,
                        void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date))
                    }
                    ,
                    H.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
                    KJUR.asn1.DERGeneralizedTime = function (e) {
                        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, e),
                            this.hT = "18",
                            this.setByDate = function (e) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.date = e,
                                    this.s = this.formatDate(this.date, "gen"),
                                    this.hV = stohex(this.s)
                            }
                            ,
                        void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date))
                    }
                    ,
                    H.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
                    KJUR.asn1.DERSequence = function (e) {
                        KJUR.asn1.DERSequence.superclass.constructor.call(this, e),
                            this.hT = "30",
                            this.getFreshValueHex = function () {
                                for (var e = "", t = 0; t < this.asn1Array.length; t++)
                                    e += this.asn1Array[t].getEncodedHex();
                                return this.hV = e,
                                    this.hV
                            }
                    }
                    ,
                    H.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
                    KJUR.asn1.DERSet = function (e) {
                        KJUR.asn1.DERSet.superclass.constructor.call(this, e),
                            this.hT = "31",
                            this.getFreshValueHex = function () {
                                for (var e = new Array, t = 0; t < this.asn1Array.length; t++) {
                                    var n = this.asn1Array[t];
                                    e.push(n.getEncodedHex())
                                }
                                return e.sort(),
                                    this.hV = e.join(""),
                                    this.hV
                            }
                    }
                    ,
                    H.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
                    KJUR.asn1.DERTaggedObject = function (e) {
                        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
                            this.hT = "a0",
                            this.hV = "",
                            this.isExplicit = !0,
                            this.asn1Object = null,
                            this.setASN1Object = function (e, t, n) {
                                this.hT = t,
                                    this.isExplicit = e,
                                    this.asn1Object = n,
                                    this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                                        this.hTLV = null,
                                        this.isModified = !0) : (this.hV = null,
                                        this.hTLV = n.getEncodedHex(),
                                        this.hTLV = this.hTLV.replace(/^../, t),
                                        this.isModified = !1)
                            }
                            ,
                            this.getFreshValueHex = function () {
                                return this.hV
                            }
                            ,
                        void 0 !== e && (void 0 !== e.tag && (this.hT = e.tag),
                        void 0 !== e.explicit && (this.isExplicit = e.explicit),
                        void 0 !== e.obj && (this.asn1Object = e.obj,
                            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                    }
                    ,
                    H.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
                    function (e) {
                        "use strict";
                        var t, n = {
                            decode: function (e) {
                                var n;
                                if (void 0 === t) {
                                    var r = "0123456789ABCDEF";
                                    for (t = [],
                                             n = 0; n < 16; ++n)
                                        t[r.charAt(n)] = n;
                                    for (r = r.toLowerCase(),
                                             n = 10; n < 16; ++n)
                                        t[r.charAt(n)] = n;
                                    for (n = 0; n < " \f\n\r\t \u2028\u2029".length; ++n)
                                        t[" \f\n\r\t \u2028\u2029".charAt(n)] = -1
                                }
                                var o = []
                                    , i = 0
                                    , a = 0;
                                for (n = 0; n < e.length; ++n) {
                                    var s = e.charAt(n);
                                    if ("=" == s)
                                        break;
                                    if (-1 != (s = t[s])) {
                                        if (void 0 === s)
                                            throw "Illegal character at offset " + n;
                                        i |= s,
                                            ++a >= 2 ? (o[o.length] = i,
                                                i = 0,
                                                a = 0) : i <<= 4
                                    }
                                }
                                if (a)
                                    throw "Hex encoding incomplete: 4 bits missing";
                                return o
                            }
                        };
                        window.Hex = n
                    }(),
                    function (e) {
                        "use strict";
                        var t, n = {
                            decode: function (e) {
                                var n;
                                if (void 0 === t) {
                                    for (t = [],
                                             n = 0; n < 64; ++n)
                                        t["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n)] = n;
                                    for (n = 0; n < "= \f\n\r\t \u2028\u2029".length; ++n)
                                        t["= \f\n\r\t \u2028\u2029".charAt(n)] = -1
                                }
                                var r = []
                                    , o = 0
                                    , i = 0;
                                for (n = 0; n < e.length; ++n) {
                                    var a = e.charAt(n);
                                    if ("=" == a)
                                        break;
                                    if (-1 != (a = t[a])) {
                                        if (void 0 === a)
                                            throw "Illegal character at offset " + n;
                                        o |= a,
                                            ++i >= 4 ? (r[r.length] = o >> 16,
                                                r[r.length] = o >> 8 & 255,
                                                r[r.length] = 255 & o,
                                                o = 0,
                                                i = 0) : o <<= 6
                                    }
                                }
                                switch (i) {
                                    case 1:
                                        throw "Base64 encoding incomplete: at least 2 bits missing";
                                    case 2:
                                        r[r.length] = o >> 10;
                                        break;
                                    case 3:
                                        r[r.length] = o >> 16,
                                            r[r.length] = o >> 8 & 255
                                }
                                return r
                            },
                            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                            unarmor: function (e) {
                                var t = n.re.exec(e);
                                if (t)
                                    if (t[1])
                                        e = t[1];
                                    else {
                                        if (!t[2])
                                            throw "RegExp out of sync";
                                        e = t[2]
                                    }
                                return n.decode(e)
                            }
                        };
                        window.Base64 = n
                    }(),
                    function (e) {
                        "use strict";
                        var t = function (e, t) {
                            var n = document.createElement(e);
                            return n.className = t,
                                n
                        }
                            , n = function (e) {
                            return document.createTextNode(e)
                        };

                        function r(e, t) {
                            e instanceof r ? (this.enc = e.enc,
                                this.pos = e.pos) : (this.enc = e,
                                this.pos = t)
                        }

                        function o(e, t, n, r, o) {
                            this.stream = e,
                                this.header = t,
                                this.length = n,
                                this.tag = r,
                                this.sub = o
                        }

                        r.prototype.get = function (e) {
                            if (void 0 === e && (e = this.pos++),
                            e >= this.enc.length)
                                throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
                            return this.enc[e]
                        }
                            ,
                            r.prototype.hexDigits = "0123456789ABCDEF",
                            r.prototype.hexByte = function (e) {
                                return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e)
                            }
                            ,
                            r.prototype.hexDump = function (e, t, n) {
                                for (var r = "", o = e; o < t; ++o)
                                    if (r += this.hexByte(this.get(o)),
                                    !0 !== n)
                                        switch (15 & o) {
                                            case 7:
                                                r += "  ";
                                                break;
                                            case 15:
                                                r += "\n";
                                                break;
                                            default:
                                                r += " "
                                        }
                                return r
                            }
                            ,
                            r.prototype.parseStringISO = function (e, t) {
                                for (var n = "", r = e; r < t; ++r)
                                    n += String.fromCharCode(this.get(r));
                                return n
                            }
                            ,
                            r.prototype.parseStringUTF = function (e, t) {
                                for (var n = "", r = e; r < t;) {
                                    var o = this.get(r++);
                                    n += o < 128 ? String.fromCharCode(o) : o > 191 && o < 224 ? String.fromCharCode((31 & o) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & o) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                                }
                                return n
                            }
                            ,
                            r.prototype.parseStringBMP = function (e, t) {
                                for (var n = "", r = e; r < t; r += 2) {
                                    var o = this.get(r)
                                        , i = this.get(r + 1);
                                    n += String.fromCharCode((o << 8) + i)
                                }
                                return n
                            }
                            ,
                            r.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                            r.prototype.parseTime = function (e, t) {
                                var n = this.parseStringISO(e, t)
                                    , r = this.reTime.exec(n);
                                return r ? (n = r[1] + "-" + r[2] + "-" + r[3] + " " + r[4],
                                r[5] && (n += ":" + r[5],
                                r[6] && (n += ":" + r[6],
                                r[7] && (n += "." + r[7]))),
                                r[8] && (n += " UTC",
                                "Z" != r[8] && (n += r[8],
                                r[9] && (n += ":" + r[9]))),
                                    n) : "Unrecognized time: " + n
                            }
                            ,
                            r.prototype.parseInteger = function (e, t) {
                                var n = t - e;
                                if (n > 4) {
                                    n <<= 3;
                                    var r = this.get(e);
                                    if (0 === r)
                                        n -= 8;
                                    else
                                        for (; r < 128;)
                                            r <<= 1,
                                                --n;
                                    return "(" + n + " bit)"
                                }
                                for (var o = 0, i = e; i < t; ++i)
                                    o = o << 8 | this.get(i);
                                return o
                            }
                            ,
                            r.prototype.parseBitString = function (e, t) {
                                var n = this.get(e)
                                    , r = (t - e - 1 << 3) - n
                                    , o = "(" + r + " bit)";
                                if (r <= 20) {
                                    var i = n;
                                    o += " ";
                                    for (var a = t - 1; a > e; --a) {
                                        for (var s = this.get(a), u = i; u < 8; ++u)
                                            o += s >> u & 1 ? "1" : "0";
                                        i = 0
                                    }
                                }
                                return o
                            }
                            ,
                            r.prototype.parseOctetString = function (e, t) {
                                var n = t - e
                                    , r = "(" + n + " byte) ";
                                n > 100 && (t = e + 100);
                                for (var o = e; o < t; ++o)
                                    r += this.hexByte(this.get(o));
                                return n > 100 && (r += "…"),
                                    r
                            }
                            ,
                            r.prototype.parseOID = function (e, t) {
                                for (var n = "", r = 0, o = 0, i = e; i < t; ++i) {
                                    var a = this.get(i);
                                    if (r = r << 7 | 127 & a,
                                        o += 7,
                                        !(128 & a)) {
                                        if ("" === n) {
                                            var s = r < 80 ? r < 40 ? 0 : 1 : 2;
                                            n = s + "." + (r - 40 * s)
                                        } else
                                            n += "." + (o >= 31 ? "bigint" : r);
                                        r = o = 0
                                    }
                                }
                                return n
                            }
                            ,
                            o.prototype.typeName = function () {
                                if (void 0 === this.tag)
                                    return "unknown";
                                var e = this.tag >> 6
                                    , t = (this.tag,
                                31 & this.tag);
                                switch (e) {
                                    case 0:
                                        switch (t) {
                                            case 0:
                                                return "EOC";
                                            case 1:
                                                return "BOOLEAN";
                                            case 2:
                                                return "INTEGER";
                                            case 3:
                                                return "BIT_STRING";
                                            case 4:
                                                return "OCTET_STRING";
                                            case 5:
                                                return "NULL";
                                            case 6:
                                                return "OBJECT_IDENTIFIER";
                                            case 7:
                                                return "ObjectDescriptor";
                                            case 8:
                                                return "EXTERNAL";
                                            case 9:
                                                return "REAL";
                                            case 10:
                                                return "ENUMERATED";
                                            case 11:
                                                return "EMBEDDED_PDV";
                                            case 12:
                                                return "UTF8String";
                                            case 16:
                                                return "SEQUENCE";
                                            case 17:
                                                return "SET";
                                            case 18:
                                                return "NumericString";
                                            case 19:
                                                return "PrintableString";
                                            case 20:
                                                return "TeletexString";
                                            case 21:
                                                return "VideotexString";
                                            case 22:
                                                return "IA5String";
                                            case 23:
                                                return "UTCTime";
                                            case 24:
                                                return "GeneralizedTime";
                                            case 25:
                                                return "GraphicString";
                                            case 26:
                                                return "VisibleString";
                                            case 27:
                                                return "GeneralString";
                                            case 28:
                                                return "UniversalString";
                                            case 30:
                                                return "BMPString";
                                            default:
                                                return "Universal_" + t.toString(16)
                                        }
                                    case 1:
                                        return "Application_" + t.toString(16);
                                    case 2:
                                        return "[" + t + "]";
                                    case 3:
                                        return "Private_" + t.toString(16)
                                }
                            }
                            ,
                            o.prototype.reSeemsASCII = /^[ -~]+$/,
                            o.prototype.content = function () {
                                if (void 0 === this.tag)
                                    return null;
                                var e = this.tag >> 6
                                    , t = 31 & this.tag
                                    , n = this.posContent()
                                    , r = Math.abs(this.length);
                                if (0 !== e) {
                                    if (null !== this.sub)
                                        return "(" + this.sub.length + " elem)";
                                    var o = this.stream.parseStringISO(n, n + Math.min(r, 100));
                                    return this.reSeemsASCII.test(o) ? o.substring(0, 200) + (o.length > 200 ? "…" : "") : this.stream.parseOctetString(n, n + r)
                                }
                                switch (t) {
                                    case 1:
                                        return 0 === this.stream.get(n) ? "false" : "true";
                                    case 2:
                                        return this.stream.parseInteger(n, n + r);
                                    case 3:
                                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(n, n + r);
                                    case 4:
                                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + r);
                                    case 6:
                                        return this.stream.parseOID(n, n + r);
                                    case 16:
                                    case 17:
                                        return "(" + this.sub.length + " elem)";
                                    case 12:
                                        return this.stream.parseStringUTF(n, n + r);
                                    case 18:
                                    case 19:
                                    case 20:
                                    case 21:
                                    case 22:
                                    case 26:
                                        return this.stream.parseStringISO(n, n + r);
                                    case 30:
                                        return this.stream.parseStringBMP(n, n + r);
                                    case 23:
                                    case 24:
                                        return this.stream.parseTime(n, n + r)
                                }
                                return null
                            }
                            ,
                            o.prototype.toString = function () {
                                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                            }
                            ,
                            o.prototype.print = function (e) {
                                if (void 0 === e && (e = ""),
                                    document.writeln(e + this),
                                null !== this.sub) {
                                    e += "  ";
                                    for (var t = 0, n = this.sub.length; t < n; ++t)
                                        this.sub[t].print(e)
                                }
                            }
                            ,
                            o.prototype.toPrettyString = function (e) {
                                void 0 === e && (e = "");
                                var t = e + this.typeName() + " @" + this.stream.pos;
                                if (this.length >= 0 && (t += "+"),
                                    t += this.length,
                                    32 & this.tag ? t += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (t += " (encapsulates)"),
                                    t += "\n",
                                null !== this.sub) {
                                    e += "  ";
                                    for (var n = 0, r = this.sub.length; n < r; ++n)
                                        t += this.sub[n].toPrettyString(e)
                                }
                                return t
                            }
                            ,
                            o.prototype.toDOM = function () {
                                var e = t("div", "node");
                                e.asn1 = this;
                                var r = t("div", "head")
                                    , o = this.typeName().replace(/_/g, " ");
                                r.innerHTML = o;
                                var i = this.content();
                                if (null !== i) {
                                    i = String(i).replace(/</g, "&lt;");
                                    var a = t("span", "preview");
                                    a.appendChild(n(i)),
                                        r.appendChild(a)
                                }
                                e.appendChild(r),
                                    this.node = e,
                                    this.head = r;
                                var s = t("div", "value");
                                if (o = "Offset: " + this.stream.pos + "<br/>",
                                    o += "Length: " + this.header + "+",
                                    this.length >= 0 ? o += this.length : o += -this.length + " (undefined)",
                                    32 & this.tag ? o += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (o += "<br/>(encapsulates)"),
                                null !== i && (o += "<br/>Value:<br/><b>" + i + "</b>",
                                "object" == typeof oids && 6 == this.tag)) {
                                    var u = oids[i];
                                    u && (u.d && (o += "<br/>" + u.d),
                                    u.c && (o += "<br/>" + u.c),
                                    u.w && (o += "<br/>(warning!)"))
                                }
                                s.innerHTML = o,
                                    e.appendChild(s);
                                var c = t("div", "sub");
                                if (null !== this.sub)
                                    for (var l = 0, f = this.sub.length; l < f; ++l)
                                        c.appendChild(this.sub[l].toDOM());
                                return e.appendChild(c),
                                    r.onclick = function () {
                                        e.className = "node collapsed" == e.className ? "node" : "node collapsed"
                                    }
                                    ,
                                    e
                            }
                            ,
                            o.prototype.posStart = function () {
                                return this.stream.pos
                            }
                            ,
                            o.prototype.posContent = function () {
                                return this.stream.pos + this.header
                            }
                            ,
                            o.prototype.posEnd = function () {
                                return this.stream.pos + this.header + Math.abs(this.length)
                            }
                            ,
                            o.prototype.fakeHover = function (e) {
                                this.node.className += " hover",
                                e && (this.head.className += " hover")
                            }
                            ,
                            o.prototype.fakeOut = function (e) {
                                var t = / ?hover/;
                                this.node.className = this.node.className.replace(t, ""),
                                e && (this.head.className = this.head.className.replace(t, ""))
                            }
                            ,
                            o.prototype.toHexDOM_sub = function (e, r, o, i, a) {
                                if (!(i >= a)) {
                                    var s = t("span", r);
                                    s.appendChild(n(o.hexDump(i, a))),
                                        e.appendChild(s)
                                }
                            }
                            ,
                            o.prototype.toHexDOM = function (e) {
                                var r = t("span", "hex");
                                if (void 0 === e && (e = r),
                                    this.head.hexNode = r,
                                    this.head.onmouseover = function () {
                                        this.hexNode.className = "hexCurrent"
                                    }
                                    ,
                                    this.head.onmouseout = function () {
                                        this.hexNode.className = "hex"
                                    }
                                    ,
                                    r.asn1 = this,
                                    r.onmouseover = function () {
                                        var t = !e.selected;
                                        t && (e.selected = this.asn1,
                                            this.className = "hexCurrent"),
                                            this.asn1.fakeHover(t)
                                    }
                                    ,
                                    r.onmouseout = function () {
                                        var t = e.selected == this.asn1;
                                        this.asn1.fakeOut(t),
                                        t && (e.selected = null,
                                            this.className = "hex")
                                    }
                                    ,
                                    this.toHexDOM_sub(r, "tag", this.stream, this.posStart(), this.posStart() + 1),
                                    this.toHexDOM_sub(r, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                                null === this.sub)
                                    r.appendChild(n(this.stream.hexDump(this.posContent(), this.posEnd())));
                                else if (this.sub.length > 0) {
                                    var o = this.sub[0]
                                        , i = this.sub[this.sub.length - 1];
                                    this.toHexDOM_sub(r, "intro", this.stream, this.posContent(), o.posStart());
                                    for (var a = 0, s = this.sub.length; a < s; ++a)
                                        r.appendChild(this.sub[a].toHexDOM(e));
                                    this.toHexDOM_sub(r, "outro", this.stream, i.posEnd(), this.posEnd())
                                }
                                return r
                            }
                            ,
                            o.prototype.toHexString = function (e) {
                                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                            }
                            ,
                            o.decodeLength = function (e) {
                                var t = e.get()
                                    , n = 127 & t;
                                if (n == t)
                                    return n;
                                if (n > 3)
                                    throw "Length over 24 bits not supported at position " + (e.pos - 1);
                                if (0 === n)
                                    return -1;
                                t = 0;
                                for (var r = 0; r < n; ++r)
                                    t = t << 8 | e.get();
                                return t
                            }
                            ,
                            o.hasContent = function (e, t, n) {
                                if (32 & e)
                                    return !0;
                                if (e < 3 || e > 4)
                                    return !1;
                                var i = new r(n);
                                if (3 == e && i.get(),
                                i.get() >> 6 & 1)
                                    return !1;
                                try {
                                    var a = o.decodeLength(i);
                                    return i.pos - n.pos + a == t
                                } catch (e) {
                                    return !1
                                }
                            }
                            ,
                            o.decode = function (e) {
                                e instanceof r || (e = new r(e, 0));
                                var t = new r(e)
                                    , n = e.get()
                                    , i = o.decodeLength(e)
                                    , a = e.pos - t.pos
                                    , s = null;
                                if (o.hasContent(n, i, e)) {
                                    var u = e.pos;
                                    if (3 == n && e.get(),
                                        s = [],
                                    i >= 0) {
                                        for (var c = u + i; e.pos < c;)
                                            s[s.length] = o.decode(e);
                                        if (e.pos != c)
                                            throw "Content size is not correct for container starting at offset " + u
                                    } else
                                        try {
                                            for (; ;) {
                                                var l = o.decode(e);
                                                if (0 === l.tag)
                                                    break;
                                                s[s.length] = l
                                            }
                                            i = u - e.pos
                                        } catch (e) {
                                            throw "Exception while decoding undefined length content: " + e
                                        }
                                } else
                                    e.pos += i;
                                return new o(t, a, i, n, s)
                            }
                            ,
                            o.test = function () {
                                for (var e = [{
                                    value: [39],
                                    expected: 39
                                }, {
                                    value: [129, 201],
                                    expected: 201
                                }, {
                                    value: [131, 254, 220, 186],
                                    expected: 16702650
                                }], t = 0, n = e.length; t < n; ++t) {
                                    var i = new r(e[t].value, 0)
                                        , a = o.decodeLength(i);
                                    a != e[t].expected && document.write("In test[" + t + "] expected " + e[t].expected + " got " + a + "\n")
                                }
                            }
                            ,
                            window.ASN1 = o
                    }(),
                    ASN1.prototype.getHexStringValue = function () {
                        var e = this.toHexString()
                            , t = 2 * this.header
                            , n = 2 * this.length;
                        return e.substr(t, n)
                    }
                    ,
                    R.prototype.parseKey = function (e) {
                        try {
                            var t = 0
                                , n = 0
                                , r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e) ? Hex.decode(e) : Base64.unarmor(e)
                                , o = ASN1.decode(r);
                            if (3 === o.sub.length && (o = o.sub[2].sub[0]),
                            9 === o.sub.length) {
                                t = o.sub[1].getHexStringValue(),
                                    this.n = P(t, 16),
                                    n = o.sub[2].getHexStringValue(),
                                    this.e = parseInt(n, 16);
                                var i = o.sub[3].getHexStringValue();
                                this.d = P(i, 16);
                                var a = o.sub[4].getHexStringValue();
                                this.p = P(a, 16);
                                var s = o.sub[5].getHexStringValue();
                                this.q = P(s, 16);
                                var u = o.sub[6].getHexStringValue();
                                this.dmp1 = P(u, 16);
                                var c = o.sub[7].getHexStringValue();
                                this.dmq1 = P(c, 16);
                                var l = o.sub[8].getHexStringValue();
                                this.coeff = P(l, 16)
                            } else {
                                if (2 !== o.sub.length)
                                    return !1;
                                var f = o.sub[1].sub[0];
                                t = f.sub[0].getHexStringValue(),
                                    this.n = P(t, 16),
                                    n = f.sub[1].getHexStringValue(),
                                    this.e = parseInt(n, 16)
                            }
                            return !0
                        } catch (e) {
                            return !1
                        }
                    }
                    ,
                    R.prototype.getPrivateBaseKey = function () {
                        var e = {
                            array: [new KJUR.asn1.DERInteger({
                                int: 0
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.n
                            }), new KJUR.asn1.DERInteger({
                                int: this.e
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.d
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.p
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.q
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.dmp1
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.dmq1
                            }), new KJUR.asn1.DERInteger({
                                bigint: this.coeff
                            })]
                        };
                        return new KJUR.asn1.DERSequence(e).getEncodedHex()
                    }
                    ,
                    R.prototype.getPrivateBaseKeyB64 = function () {
                        return I(this.getPrivateBaseKey())
                    }
                    ,
                    R.prototype.getPublicBaseKey = function () {
                        var e = {
                            array: [new KJUR.asn1.DERObjectIdentifier({
                                oid: "1.2.840.113549.1.1.1"
                            }), new KJUR.asn1.DERNull]
                        }
                            , t = new KJUR.asn1.DERSequence(e);
                        return e = {
                            array: [new KJUR.asn1.DERInteger({
                                bigint: this.n
                            }), new KJUR.asn1.DERInteger({
                                int: this.e
                            })]
                        },
                            e = {
                                hex: "00" + new KJUR.asn1.DERSequence(e).getEncodedHex()
                            },
                            e = {
                                array: [t, new KJUR.asn1.DERBitString(e)]
                            },
                            new KJUR.asn1.DERSequence(e).getEncodedHex()
                    }
                    ,
                    R.prototype.getPublicBaseKeyB64 = function () {
                        return I(this.getPublicBaseKey())
                    }
                    ,
                    R.prototype.wordwrap = function (e, t) {
                        if (!e)
                            return e;
                        var n = "(.{1," + (t = t || 64) + "})( +|$\n?)|(.{1," + t + "})";
                        return e.match(RegExp(n, "g")).join("\n")
                    }
                    ,
                    R.prototype.getPrivateKey = function () {
                        var e = "-----BEGIN RSA PRIVATE KEY-----\n";
                        return e += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                            e += "-----END RSA PRIVATE KEY-----"
                    }
                    ,
                    R.prototype.getPublicKey = function () {
                        var e = "-----BEGIN PUBLIC KEY-----\n";
                        return e += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                            e += "-----END PUBLIC KEY-----"
                    }
                    ,
                    R.prototype.hasPublicKeyProperty = function (e) {
                        return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e")
                    }
                    ,
                    R.prototype.hasPrivateKeyProperty = function (e) {
                        return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff")
                    }
                    ,
                    R.prototype.parsePropertiesFrom = function (e) {
                        this.n = e.n,
                            this.e = e.e,
                        e.hasOwnProperty("d") && (this.d = e.d,
                            this.p = e.p,
                            this.q = e.q,
                            this.dmp1 = e.dmp1,
                            this.dmq1 = e.dmq1,
                            this.coeff = e.coeff)
                    }
                ;
                var W = function (e) {
                    R.call(this),
                    e && ("string" == typeof e ? this.parseKey(e) : (this.hasPrivateKeyProperty(e) || this.hasPublicKeyProperty(e)) && this.parsePropertiesFrom(e))
                };
                (W.prototype = new R).constructor = W;
                var G = function (e) {
                    e = e || {},
                        this.default_key_size = parseInt(e.default_key_size) || 1024,
                        this.default_public_exponent = e.default_public_exponent || "010001",
                        this.log = e.log || !1,
                        this.key = null
                };
                G.prototype.setKey = function (e) {
                    this.log && this.key && console.warn("A key was already set, overriding existing."),
                        this.key = new W(e)
                }
                    ,
                    G.prototype.setPrivateKey = function (e) {
                        this.setKey(e)
                    }
                    ,
                    G.prototype.setPublicKey = function (e) {
                        this.setKey(e)
                    }
                    ,
                    G.prototype.decrypt = function (e) {
                        try {
                            return this.getKey().decrypt(Y(e))
                        } catch (e) {
                            return !1
                        }
                    }
                    ,
                    G.prototype.encrypt = function (e) {
                        try {
                            return I(this.getKey().encrypt(e))
                        } catch (e) {
                            return !1
                        }
                    }
                    ,
                    G.prototype.getKey = function (e) {
                        if (!this.key) {
                            if (this.key = new W,
                            e && "[object Function]" === {}.toString.call(e))
                                return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                            this.key.generate(this.default_key_size, this.default_public_exponent)
                        }
                        return this.key
                    }
                    ,
                    G.prototype.getPrivateKey = function () {
                        return this.getKey().getPrivateKey()
                    }
                    ,
                    G.prototype.getPrivateKeyB64 = function () {
                        return this.getKey().getPrivateBaseKeyB64()
                    }
                    ,
                    G.prototype.getPublicKey = function () {
                        return this.getKey().getPublicKey()
                    }
                    ,
                    G.prototype.getPublicKeyB64 = function () {
                        return this.getKey().getPublicBaseKeyB64()
                    }
                    ,
                    G.version = "2.3.1",
                    e.JSEncrypt = G
            }
        ) ? r.apply(t, o) : r) || (e.exports = i)

    }
});

i = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeiLxP4ZavN8qhI+x+whAiFpGWpY9y1AHSQC86qEMBVnmqC8vdZAfxxuQWeQaeMWG07lXhXegTjZ5wn9pHnjg15wbjRGSTfwuZxSFW6sS3GYlrg40ckqAagzIjkE+5OLPsdjVYQyhLfKxj/79oOfjl/lV3rQnk/SSczHW0PEyUbQIDAQAB"
var t = bc(774)
r = new t.JSEncrypt;
r.setPublicKey(i);
var a = r.encrypt('12345');
console.log(a)
