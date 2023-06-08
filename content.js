! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 256)
}({
    0: function(t, e) {
        var n = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof window && window) || Function("return this")()
    },
    10: function(t, e, n) {
        var r = n(9),
            o = n(48),
            i = n(5),
            u = n(28),
            c = Object.defineProperty;
        e.f = r ? c : function(t, e, n) {
            if (i(t), e = u(e, !0), i(n), o) try {
                return c(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t
        }
    },
    11: function(t, e, n) {
        var r = n(9),
            o = n(10),
            i = n(25);
        t.exports = r ? function(t, e, n) {
            return o.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    },
    12: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    13: function(t, e, n) {
        var r = n(20),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    },
    14: function(t, e, n) {
        var r = n(0),
            o = n(11),
            i = n(7),
            u = n(29),
            c = n(34),
            f = n(30),
            a = f.get,
            s = f.enforce,
            l = String(String).split("String");
        (t.exports = function(t, e, n, c) {
            var f = !!c && !!c.unsafe,
                a = !!c && !!c.enumerable,
                p = !!c && !!c.noTargetGet;
            "function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e), s(n).source = l.join("string" == typeof e ? e : "")), t !== r ? (f ? !p && t[e] && (a = !0) : delete t[e], a ? t[e] = n : o(t, e, n)) : a ? t[e] = n : u(e, n)
        })(Function.prototype, "toString", (function() {
            return "function" == typeof this && a(this).source || c(this)
        }))
    },
    147: function(t, e, n) {
        var r = n(53);
        t.exports = function(t) {
            if (r(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    },
    148: function(t, e, n) {
        var r = n(2)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[r] = !1, "/./" [t](e)
                } catch (t) {}
            }
            return !1
        }
    },
    15: function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }
    },
    17: function(t, e, n) {
        var r = n(56),
            o = n(15);
        t.exports = function(t) {
            return r(o(t))
        }
    },
    19: function(t, e, n) {
        var r = n(69),
            o = n(0),
            i = function(t) {
                return "function" == typeof t ? t : void 0
            };
        t.exports = function(t, e) {
            return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
        }
    },
    2: function(t, e, n) {
        var r = n(0),
            o = n(38),
            i = n(7),
            u = n(39),
            c = n(44),
            f = n(71),
            a = o("wks"),
            s = r.Symbol,
            l = f ? s : s && s.withoutSetter || u;
        t.exports = function(t) {
            return i(a, t) || (c && i(s, t) ? a[t] = s[t] : a[t] = l("Symbol." + t)), a[t]
        }
    },
    20: function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    21: function(t, e, n) {
        var r = n(9),
            o = n(3),
            i = n(7),
            u = Object.defineProperty,
            c = {},
            f = function(t) {
                throw t
            };
        t.exports = function(t, e) {
            if (i(c, t)) return c[t];
            e || (e = {});
            var n = [][t],
                a = !!i(e, "ACCESSORS") && e.ACCESSORS,
                s = i(e, 0) ? e[0] : f,
                l = i(e, 1) ? e[1] : void 0;
            return c[t] = !!n && !o((function() {
                if (a && !r) return !0;
                var t = {
                    length: -1
                };
                a ? u(t, 1, {
                    enumerable: !0,
                    get: f
                }) : t[1] = 1, n.call(t, s, l)
            }))
        }
    },
    24: function(t, e, n) {
        var r = n(9),
            o = n(67),
            i = n(25),
            u = n(17),
            c = n(28),
            f = n(7),
            a = n(48),
            s = Object.getOwnPropertyDescriptor;
        e.f = r ? s : function(t, e) {
            if (t = u(t), e = c(e, !0), a) try {
                return s(t, e)
            } catch (t) {}
            if (f(t, e)) return i(!o.f.call(t, e), t[e])
        }
    },
    25: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    256: function(t, e, n) {
        "use strict";
        n.r(e);
        n(89), n(257);
        console.log("content.js starts...");
        var r, o, i = null,
            u = 0,
            c = "";

        function f(t, e, n) {
            var r = t.indexOf(e),
                o = t.indexOf(n, r + e.length);
            return r > 0 && o >= 0 ? (console.log(t.substr(r + e.length, o - r - e.length)), t.substr(r + e.length, o - r - e.length)) : ""
        }
        chrome.runtime.onConnect.addListener((function(t) {
            t.onMessage.addListener((function(e) {
                if ("GetIgStatusReq" == e.type) {
                    var n = !document.querySelector(".not-logged-in"),
                        r = "",
                        o = "",
                        a = "";
                    if (n)
                        for (var s = document.querySelectorAll("script"), l = 0; l < s.length; l++) {
                            if (s[l].text.startsWith("window._sharedData = ")) {
                                u = 1;
                                var p = "window._sharedData = ".length,
                                    v = JSON.parse(s[l].text.substr(p, s[l].text.length - 1 - "window._sharedData = ".length));
                                r = v.config.viewer.username, o = v.config.viewer.profile_pic_url;
                                break
                            }
                            if (s[l].text.startsWith("XIGSharedData") >= 0) {
                                u = 2;
                                var y = f(s[l].text, '\\"username\\":\\"', '\\",');
                                y && (r = y), c ? a = c : (y = f(s[l].text, ',"config":{"csrf_token":"', '","viewerId"')) && (a = y)
                            }
                        }
                    t.postMessage({
                        type: "GetIgStatusRsp",
                        is_login: n,
                        username: r,
                        avatar: o,
                        csrf_token: a,
                        v: u
                    })
                } else "SendDmReq" === e.type ? (i = t, e.type = "InjectSendDmReq", window.postMessage(e, "*")) : "ShowOverlayReq" === e.type && function() {
                    if (document.querySelector("#mask_bg")) return;
                    var t = document.createElement("div");
                    t.id = "mask_bg", t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.width = "100%", t.style.height = "100%", t.style.backgroundColor = "#777", t.style.opacity = .9, t.style.zIndex = 10001, document.body.appendChild(t);
                    var e = document.createElement("div");
                    e.style.position = "absolute", e.style.top = "15%", e.style.left = "10%", e.style.backgroundColor = "black", e.style.textAlign = "center", e.style.fontSize = "45px", e.style.color = "#B71C1C", e.style.fontWeight = "bold", e.style.padding = "0.5em 3em 0.5em 3em", e.style.zIndex = 10002, e.innerText = "EL BOT ESTÁ EN MARCHA, MANTÉN ESTA VENTANA ABIERTA.", t.appendChild(e)
                }()
            }))
        })), window.addEventListener("message", (function(t) {
            var e = t.data;
            try {
                "InjectSendDmRsp" === e.type ? i && (e.type = "SendDmRsp", i.postMessage(e)) : "InjectGetSharedRsp" == e.type && (c = e.csrf_token)
            } catch (t) {
                console.log("inject error:" + t.message)
            }
        })), c || setTimeout((function() {
            window.postMessage({
                type: "InjectGetSharedReq"
            })
        }), 10), r = "inject.js", (o = document.createElement("script")).setAttribute("type", "text/javascript"), o.src = chrome.extension.getURL(r), o.onload = function() {}, document.head.appendChild(o)
    },
    257: function(t, e, n) {
        "use strict";
        var r, o = n(8),
            i = n(24).f,
            u = n(13),
            c = n(147),
            f = n(15),
            a = n(148),
            s = n(31),
            l = "".startsWith,
            p = Math.min,
            v = a("startsWith");
        o({
            target: "String",
            proto: !0,
            forced: !!(s || v || (r = i(String.prototype, "startsWith"), !r || r.writable)) && !v
        }, {
            startsWith: function(t) {
                var e = String(f(this));
                c(t);
                var n = u(p(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                    r = String(t);
                return l ? l.call(e, r, n) : e.slice(n, n + r.length) === r
            }
        })
    },
    28: function(t, e, n) {
        var r = n(6);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    29: function(t, e, n) {
        var r = n(0),
            o = n(11);
        t.exports = function(t, e) {
            try {
                o(r, t, e)
            } catch (n) {
                r[t] = e
            }
            return e
        }
    },
    3: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    30: function(t, e, n) {
        var r, o, i, u = n(83),
            c = n(0),
            f = n(6),
            a = n(11),
            s = n(7),
            l = n(37),
            p = n(32),
            v = c.WeakMap;
        if (u) {
            var y = new v,
                d = y.get,
                g = y.has,
                h = y.set;
            r = function(t, e) {
                return h.call(y, t, e), e
            }, o = function(t) {
                return d.call(y, t) || {}
            }, i = function(t) {
                return g.call(y, t)
            }
        } else {
            var x = l("state");
            p[x] = !0, r = function(t, e) {
                return a(t, x, e), e
            }, o = function(t) {
                return s(t, x) ? t[x] : {}
            }, i = function(t) {
                return s(t, x)
            }
        }
        t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!f(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }
    },
    31: function(t, e) {
        t.exports = !1
    },
    32: function(t, e) {
        t.exports = {}
    },
    34: function(t, e, n) {
        var r = n(49),
            o = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
            return o.call(t)
        }), t.exports = r.inspectSource
    },
    36: function(t, e, n) {
        var r = n(0),
            o = n(6),
            i = r.document,
            u = o(i) && o(i.createElement);
        t.exports = function(t) {
            return u ? i.createElement(t) : {}
        }
    },
    37: function(t, e, n) {
        var r = n(38),
            o = n(39),
            i = r("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    },
    38: function(t, e, n) {
        var r = n(31),
            o = n(49);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: "3.6.5",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    39: function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
        }
    },
    40: function(t, e, n) {
        var r = n(57),
            o = n(42).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    },
    41: function(t, e, n) {
        var r = n(17),
            o = n(13),
            i = n(50),
            u = function(t) {
                return function(e, n, u) {
                    var c, f = r(e),
                        a = o(f.length),
                        s = i(u, a);
                    if (t && n != n) {
                        for (; a > s;)
                            if ((c = f[s++]) != c) return !0
                    } else
                        for (; a > s; s++)
                            if ((t || s in f) && f[s] === n) return t || s || 0;
                    return !t && -1
                }
            };
        t.exports = {
            includes: u(!0),
            indexOf: u(!1)
        }
    },
    42: function(t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    43: function(t, e, n) {
        var r = n(3),
            o = /#|\.prototype\./,
            i = function(t, e) {
                var n = c[u(t)];
                return n == a || n != f && ("function" == typeof e ? r(e) : !!e)
            },
            u = i.normalize = function(t) {
                return String(t).replace(o, ".").toLowerCase()
            },
            c = i.data = {},
            f = i.NATIVE = "N",
            a = i.POLYFILL = "P";
        t.exports = i
    },
    44: function(t, e, n) {
        var r = n(3);
        t.exports = !!Object.getOwnPropertySymbols && !r((function() {
            return !String(Symbol())
        }))
    },
    48: function(t, e, n) {
        var r = n(9),
            o = n(3),
            i = n(36);
        t.exports = !r && !o((function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    49: function(t, e, n) {
        var r = n(0),
            o = n(29),
            i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = i
    },
    5: function(t, e, n) {
        var r = n(6);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t
        }
    },
    50: function(t, e, n) {
        var r = n(20),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e)
        }
    },
    53: function(t, e, n) {
        var r = n(6),
            o = n(12),
            i = n(2)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    },
    56: function(t, e, n) {
        var r = n(3),
            o = n(12),
            i = "".split;
        t.exports = r((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        } : Object
    },
    57: function(t, e, n) {
        var r = n(7),
            o = n(17),
            i = n(41).indexOf,
            u = n(32);
        t.exports = function(t, e) {
            var n, c = o(t),
                f = 0,
                a = [];
            for (n in c) !r(u, n) && r(c, n) && a.push(n);
            for (; e.length > f;) r(c, n = e[f++]) && (~i(a, n) || a.push(n));
            return a
        }
    },
    58: function(t, e, n) {
        "use strict";
        var r = n(3);
        t.exports = function(t, e) {
            var n = [][t];
            return !!n && r((function() {
                n.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        }
    },
    6: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    67: function(t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({
                1: 2
            }, 1);
        e.f = i ? function(t) {
            var e = o(this, t);
            return !!e && e.enumerable
        } : r
    },
    68: function(t, e, n) {
        var r = n(7),
            o = n(84),
            i = n(24),
            u = n(10);
        t.exports = function(t, e) {
            for (var n = o(e), c = u.f, f = i.f, a = 0; a < n.length; a++) {
                var s = n[a];
                r(t, s) || c(t, s, f(e, s))
            }
        }
    },
    69: function(t, e, n) {
        var r = n(0);
        t.exports = r
    },
    7: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    70: function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    71: function(t, e, n) {
        var r = n(44);
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    8: function(t, e, n) {
        var r = n(0),
            o = n(24).f,
            i = n(11),
            u = n(14),
            c = n(29),
            f = n(68),
            a = n(43);
        t.exports = function(t, e) {
            var n, s, l, p, v, y = t.target,
                d = t.global,
                g = t.stat;
            if (n = d ? r : g ? r[y] || c(y, {}) : (r[y] || {}).prototype)
                for (s in e) {
                    if (p = e[s], l = t.noTargetGet ? (v = o(n, s)) && v.value : n[s], !a(d ? s : y + (g ? "." : "#") + s, t.forced) && void 0 !== l) {
                        if (typeof p == typeof l) continue;
                        f(p, l)
                    }(t.sham || l && l.sham) && i(p, "sham", !0), u(n, s, p, t)
                }
        }
    },
    83: function(t, e, n) {
        var r = n(0),
            o = n(34),
            i = r.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o(i))
    },
    84: function(t, e, n) {
        var r = n(19),
            o = n(40),
            i = n(70),
            u = n(5);
        t.exports = r("Reflect", "ownKeys") || function(t) {
            var e = o.f(u(t)),
                n = i.f;
            return n ? e.concat(n(t)) : e
        }
    },
    89: function(t, e, n) {
        "use strict";
        var r = n(8),
            o = n(41).indexOf,
            i = n(58),
            u = n(21),
            c = [].indexOf,
            f = !!c && 1 / [1].indexOf(1, -0) < 0,
            a = i("indexOf"),
            s = u("indexOf", {
                ACCESSORS: !0,
                1: 0
            });
        r({
            target: "Array",
            proto: !0,
            forced: f || !a || !s
        }, {
            indexOf: function(t) {
                return f ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    9: function(t, e, n) {
        var r = n(3);
        t.exports = !r((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }))
    }
});