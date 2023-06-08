! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 258)
}({
    258: function(e, t) {
        window.addEventListener("message", (function(e) {
            var t = e.data;
            try {
                "InjectSendDmReq" === t.type ? (__mqtt && (t.debug_mode ? console.log("DEBUG mode msg will not be sent: " + t.username + " :" + t.text) : __mqtt.sendTextMessage(t.thread_id, t.text, t.uuid).then((function(e) {
                    console.log("LIVE mode msg sent:" + t.username + " :" + t.text)
                }))), t.ret = __mqtt ? 0 : -1, t.type = "InjectSendDmRsp", window.postMessage(t)) : "InjectGetSharedReq" === t.type && (t.type = "InjectGetSharedRsp", console.log(window._sharedData), window._sharedData && window._sharedData.config && (t.csrf_token = window._sharedData.config.csrf_token), window.postMessage(t))
            } catch (e) {
                console.log("inject error:" + e.message)
            }
        }))
    }
});