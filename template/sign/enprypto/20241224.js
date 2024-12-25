//https://www.aigei.com/sound/class/role?page=7  爱给音效库

_utf8_decode = function(a) {
    var b = ""
      , c = 0;
    for (c1 = c2 = 0; c < a.length; ) {
        var d = a.charCodeAt(c);
        128 > d ? (b += String.fromCharCode(d),
        c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1),
        b += String.fromCharCode((d & 31) << 6 | c2 & 63),
        c += 2) : (c2 = a.charCodeAt(c + 1),
        c3 = a.charCodeAt(c + 2),
        b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63),
        c += 3)
    }
    return b
}
var GeiJS = GeiJS || function (a, b) {
    var c = {}
        , e = c.lib = {}
        , g = function () {
    }
        , k = e.Base = {
        extend: function (f) {
            g.prototype = this;
            var l = new g;
            f && l.mixIn(f);
            l.hasOwnProperty("init") || (l.init = function () {
                    l.$super.init.apply(this, arguments)
                }
            );
            l.init.prototype = l;
            l.$super = this;
            return l
        },
        create: function () {
            var f = this.extend();
            f.init.apply(f, arguments);
            return f
        },
        init: function () {
        },
        mixIn: function (f) {
            for (var l in f)
                f.hasOwnProperty(l) && (this[l] = f[l]);
            f.hasOwnProperty("toString") && (this.toString = f.toString)
        },
        clone: function () {
            return this.init.prototype.extend(this)
        }
    }
        , q = e.WordArray = k.extend({
        init: function (f, l) {
            f = this.words = f || [];
            this.sigBytes = l != b ? l : 4 * f.length
        },
        toString: function (f) {
            return (f || t).stringify(this)
        },
        concat: function (f) {
            var l = this.words
                , d = f.words
                , n = this.sigBytes;
            f = f.sigBytes;
            this.clamp();
            if (n % 4)
                for (var w = 0; w < f; w++)
                    l[n + w >>> 2] |= (d[w >>> 2] >>> 24 - w % 4 * 8 & 255) << 24 - (n + w) % 4 * 8;
            else if (65535 < d.length)
                for (w = 0; w < f; w += 4)
                    l[n + w >>> 2] = d[w >>> 2];
            else
                l.push.apply(l, d);
            this.sigBytes += f;
            return this
        },
        clamp: function () {
            var f = this.words
                , l = this.sigBytes;
            f[l >>> 2] &= 4294967295 << 32 - l % 4 * 8;
            f.length = a.ceil(l / 4)
        },
        clone: function () {
            var f = k.clone.call(this);
            f.words = this.words.slice(0);
            return f
        },
        random: function (f) {
            for (var l = [], d = 0; d < f; d += 4)
                l.push(4294967296 * a.random() | 0);
            return new q.init(l, f)
        }
    })
        , v = c.enc = {}
        , t = v.Hex = {
        stringify: function (f) {
            var l = f.words;
            f = f.sigBytes;
            for (var d = [], n = 0; n < f; n++) {
                var w = l[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                d.push((w >>> 4).toString(16));
                d.push((w & 15).toString(16))
            }
            return d.join("")
        },
        parse: function (f) {
            for (var l = f.length, d = [], n = 0; n < l; n += 2)
                d[n >>> 3] |= parseInt(f.substr(n, 2), 16) << 24 - n % 8 * 4;
            return new q.init(d, l / 2)
        }
    }
        , r = v.Latin1 = {
        stringify: function (f) {
            var l = f.words;
            f = f.sigBytes;
            for (var d = [], n = 0; n < f; n++)
                d.push(String.fromCharCode(l[n >>> 2] >>> 24 - n % 4 * 8 & 255));
            return d.join("")
        },
        parse: function (f) {
            for (var l = f.length, d = [], n = 0; n < l; n++)
                d[n >>> 2] |= (f.charCodeAt(n) & 255) << 24 - n % 4 * 8;
            return new q.init(d, l)
        }
    }
        , m = v.Utf8 = {
        stringify: function (f) {
            try {
                return decodeURIComponent(escape(r.stringify(f)))
            } catch (l) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function (f) {
            return r.parse(unescape(encodeURIComponent(f)))
        }
    }
        , u = e.BufferedBlockAlgorithm = k.extend({
        reset: function () {
            this._data = new q.init;
            this._nDataBytes = 0
        },
        _append: function (f) {
            "string" == typeof f && (f = m.parse(f));
            this._data.concat(f);
            this._nDataBytes += f.sigBytes
        },
        _process: function (f) {
            var l = this._data
                , d = l.words
                , n = l.sigBytes
                , w = this.blockSize
                , y = n / (4 * w);
            y = f ? a.ceil(y) : a.max((y | 0) - this._minBufferSize, 0);
            f = y * w;
            n = a.min(4 * f, n);
            if (f) {
                for (var z = 0; z < f; z += w)
                    this._doProcessBlock(d, z);
                z = d.splice(0, f);
                l.sigBytes -= n
            }
            return new q.init(z, n)
        },
        clone: function () {
            var f = k.clone.call(this);
            f._data = this._data.clone();
            return f
        },
        _minBufferSize: 0
    });
    e.Hasher = u.extend({
        cfg: k.extend(),
        init: function (f) {
            this.cfg = this.cfg.extend(f);
            this.reset()
        },
        reset: function () {
            u.reset.call(this);
            this._doReset()
        },
        update: function (f) {
            this._append(f);
            this._process();
            return this
        },
        finalize: function (f) {
            f && this._append(f);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (f) {
            return function (l, d) {
                return (new f.init(d)).finalize(l)
            }
        },
        _createHmacHelper: function (f) {
            return function (l, d) {
                return (new h.HMAC.init(f, d)).finalize(l)
            }
        }
    });
    var h = c.algo = {};
    return c
}(Math);

function ili11liii(a, b) {
    b = GeiJS.enc.Utf8.parse(b);
    return GeiJS.OBJFJKET.decrypt({
        ciphertext: GeiJS.enc.Base64.parse(a)
    }, b, {
        mode: GeiJS.mode.FENCTIOP,
        padding: GeiJS.pad.GFACDE
    }).toString(GeiJS.enc.Utf8)
}

ilil111lii = function (a) {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var b = ""
        , c = 0;
    for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); c < a.length;) {
        var e = _keyStr.indexOf(a.charAt(c++));
        var g = _keyStr.indexOf(a.charAt(c++));
        var k = _keyStr.indexOf(a.charAt(c++));
        var q = _keyStr.indexOf(a.charAt(c++));
        e = e << 2 | g >> 4;
        g = (g & 15) << 4 | k >> 2;
        var v = (k & 3) << 6 | q;
        b += String.fromCharCode(e);
        64 != k && (b += String.fromCharCode(g));
        64 != q && (b += String.fromCharCode(v))
    }
    return b = _utf8_decode(b)
}

function aa(r) {
    var c = '';
    var E = r.b.split("|");
    for (G = 0; G < E.length; G++) {
        u = E[G];
        u = ilil111lii(u),
            u = ili11liii(u, "il1looOo"),
            u = u.split(",")
        c += u;

    }
    return c
}

var r = {
    "p": 200,
    "b": ""}
    aa(r)