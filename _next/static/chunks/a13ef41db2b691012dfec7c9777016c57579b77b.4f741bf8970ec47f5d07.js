(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        "1OyB": function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        JX7q: function(t, e, n) {
            "use strict";

            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        Ji7U: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return (r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function a(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && r(t, e)
            }
            n.d(e, "a", (function() {
                return a
            }))
        },
        R9S9: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return P
            }));
            var r = n("1OyB"),
                a = n("vuIU"),
                o = n("Ji7U"),
                c = n("md7G"),
                l = n("foSv"),
                u = n("q1tI"),
                i = n.n(u);

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var f = n("nOHt"),
                p = n("YFqc"),
                h = n.n(p),
                m = i.a.createElement,
                d = Object(f.withRouter)((function(t) {
                    var e = t.router,
                        n = t.children,
                        r = s(t, ["router", "children"]),
                        a = u.Children.only(n),
                        o = a.props.className || null;
                    return e.pathname === r.href && r.activeClassName && (o = "".concat(null !== o ? o : "", " ").concat(r.activeClassName).trim()), delete r.activeClassName, m(h.a, r, i.a.cloneElement(a, {
                        className: o
                    }))
                })),
                v = i.a.createElement;

            function y(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var a = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var b = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return Object(a.a)(n, [{
                        key: "render",
                        value: function() {
                            return v("div", null, v("div", {
                                className: "mob-nav-hold"
                            }, v("div", {
                                className: "row"
                            }, v("div", {
                                className: "small-12 columns nopad mob-nav"
                            }, v("ul", null, v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/product"
                            }, v("a", null, "Services"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/about"
                            }, v("a", null, "About"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/careers"
                            }, v("a", null, "Careers"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/contact"
                            }, v("a", null, "Contact"))))), v("div", {
                                className: "mob-nav-button"
                            }, v("a", {
                                href: "/product",
                                className: "btn-gradient btn-full"
                            }, )))), v("div", {
                                className: "header"
                            }, v("div", {
                                className: "row"
                            }, v("div", {
                                className: "small-8 large-4 columns nopad logo"
                            }, v(d, {
                                href: "/"
                            }, v("a", null, v("img", {
                                src: "img/logo.png"
                            })))), v("div", {
                                className: "small-6 large-8 columns nopad header-right-hold show-for-large"
                            }, v("div", {
                                className: "header-right"
                            }, v("div", {
                                className: "nav"
                            }, v("ul", null, v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/product"
                            }, v("a", null, "Best Practices"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/product"
                            }, v("a", null, "Starter Kit"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/product"
                            }, v("a", null, "Training"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/about"
                            }, v("a", null, "Solution"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/careers"
                            }, v("a", null, "Services"))), v("li", null, v(d, {
                                activeClassName: "current",
                                href: "/contact"
                            }, v("a", null, "Contact"))))))), v("div", {
                                className: "small-4 columns nopad nav-trigger hide-for-large"
                            }, v("div", {
                                className: "hamburger hamburger--squeeze js-hamburger"
                            }, v("div", {
                                className: "hamburger-box"
                            }, v("div", {
                                className: "hamburger-inner"
                            })))))))
                        }
                    }]), n
                }(i.a.Component),
                g = n("JX7q"),
                N = n("rePB"),
                O = i.a.createElement;

            function w(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var a = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var j = function(t) {
                    Object(o.a)(n, t);
                    var e = w(n);

                    function n() {
                        var t;
                        Object(r.a)(this, n);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(o)), Object(N.a)(Object(g.a)(t), "componentDidMount", (function() {
                            window.init_site_js(), window.initAnimations()
                        })), t
                    }
                    return Object(a.a)(n, [{
                        key: "render",
                        value: function() {
                            return O("div", {
                                className: "footer"
                            }, O("div", {
                                className: "row"
                            }, O("div", {
                                className: "small-12 columns nopad footer-hold"
                            }, O("div", {
                                className: "small-12 large-6 columns nopad footer-left"
                            }, O("div", {
                                className: "small-12 columns nopad footer-nav-grid"
                            }, O("ul", null, O("li", null, O("div", {
                                className: "small-12 columns nopad footer-nav"
                            }, O("ul", null, O("li", null, O(d, {
                                activeClassName: "current",
                                href: "/product"
                            }, O("a", null, "Product"))), O("li", null, O(d, {
                                activeClassName: "current",
                                href: "/about"
                            }, O("a", null, "About"))), O("li", null, O(d, {
                                activeClassName: "current",
                                href: "/contact"
                            }, O("a", null, "Contact")))))), O("li", null, O("div", {
                                className: "small-12 columns nopad footer-nav"
                            }, O("ul", null, O("li", null, O(d, {
                                activeClassName: "current",
                                href: "/careers"
                            }, O("a", null, "Careers"))), O("li", null, O(d, {
                                activeClassName: "current",
                                href: "//www.linkedin.com/company/optimal-dynamics"
                            }, O("a", null, "LinkedIn"))), O("li", null, O(d, {
                                activeClassName: "current",
                                href: "/legal"
                            }, O("a", null, "Legal")))))), O("li", null, O("div", {
                                className: "small-12 columns nopad footer-nav"
                            }))))), O("div", {
                                className: "small-12 large-6 columns nopad footer-right"
                            }, O("div", {
                                className: "small-12 columns nopad footer-logo text-right"
                            }, O("img", {
                                src: "img/logo-footer.png"
                            })), O("div", {
                                className: "small-12 columns nopad footer-line text-right"
                            }, O("span", null)), O("div", {
                                className: "small-12 columns nopad copyrights text-right"
                            }, "\xa92020 Optimal Dynamics, Inc. \u2022 All Rights Reserved")))))
                        }
                    }]), n
                }(i.a.Component),
                C = i.a.createElement;

            function R(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var a = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var P = function(t) {
                Object(o.a)(n, t);
                var e = R(n);

                function n() {
                    return Object(r.a)(this, n), e.apply(this, arguments)
                }
                return Object(a.a)(n, [{
                    key: "render",
                    value: function() {
                        return C(i.a.Fragment, null, C(b, null), this.props.children, C(j, null))
                    }
                }]), n
            }(i.a.Component)
        },
        YFqc: function(t, e, n) {
            t.exports = n("cTJO")
        },
        cTJO: function(t, e, n) {
            "use strict";
            var r = n("lwsE"),
                a = n("W8MJ"),
                o = n("7W2i"),
                c = n("a1gu"),
                l = n("Nsbk");

            function u(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(t);
                    if (e) {
                        var a = l(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var i = n("TqRt"),
                s = n("284h");
            e.__esModule = !0, e.default = void 0;
            var f, p = s(n("q1tI")),
                h = n("QmWs"),
                m = n("g/15"),
                d = i(n("nOHt")),
                v = n("elyg");

            function y(t) {
                return t && "object" === typeof t ? (0, m.formatWithValidation)(t) : t
            }
            var b = new Map,
                g = window.IntersectionObserver,
                N = {};

            function O() {
                return f || (g ? f = new g((function(t) {
                    t.forEach((function(t) {
                        if (b.has(t.target)) {
                            var e = b.get(t.target);
                            (t.isIntersecting || t.intersectionRatio > 0) && (f.unobserve(t.target), b.delete(t.target), e())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0)
            }
            var w = function(t) {
                o(n, t);
                var e = u(n);

                function n(t) {
                    var a;
                    return r(this, n), (a = e.call(this, t)).p = void 0, a.cleanUpListeners = function() {}, a.formatUrls = function(t) {
                        var e = null,
                            n = null,
                            r = null;
                        return function(a, o) {
                            if (r && a === e && o === n) return r;
                            var c = t(a, o);
                            return e = a, n = o, r = c, c
                        }
                    }((function(t, e) {
                        return {
                            href: (0, v.addBasePath)(y(t)),
                            as: e ? (0, v.addBasePath)(y(e)) : e
                        }
                    })), a.linkClicked = function(t) {
                        var e = t.currentTarget,
                            n = e.nodeName,
                            r = e.target;
                        if ("A" !== n || !(r && "_self" !== r || t.metaKey || t.ctrlKey || t.shiftKey || t.nativeEvent && 2 === t.nativeEvent.which)) {
                            var o = a.formatUrls(a.props.href, a.props.as),
                                c = o.href,
                                l = o.as;
                            if (function(t) {
                                    var e = (0, h.parse)(t, !1, !0),
                                        n = (0, h.parse)((0, m.getLocationOrigin)(), !1, !0);
                                    return !e.host || e.protocol === n.protocol && e.host === n.host
                                }(c)) {
                                var u = window.location.pathname;
                                c = (0, h.resolve)(u, c), l = l ? (0, h.resolve)(u, l) : c, t.preventDefault();
                                var i = a.props.scroll;
                                null == i && (i = l.indexOf("#") < 0), d.default[a.props.replace ? "replace" : "push"](c, l, {
                                    shallow: a.props.shallow
                                }).then((function(t) {
                                    t && i && (window.scrollTo(0, 0), document.body.focus())
                                }))
                            }
                        }
                    }, a.p = !1 !== t.prefetch, a
                }
                return a(n, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.cleanUpListeners()
                    }
                }, {
                    key: "getPaths",
                    value: function() {
                        var t = window.location.pathname,
                            e = this.formatUrls(this.props.href, this.props.as),
                            n = e.href,
                            r = e.as,
                            a = (0, h.resolve)(t, n);
                        return [a, r ? (0, h.resolve)(t, r) : a]
                    }
                }, {
                    key: "handleRef",
                    value: function(t) {
                        var e = this;
                        this.p && g && t && t.tagName && (this.cleanUpListeners(), N[this.getPaths().join("%")] || (this.cleanUpListeners = function(t, e) {
                            var n = O();
                            return n ? (n.observe(t), b.set(t, e), function() {
                                try {
                                    n.unobserve(t)
                                } catch (e) {
                                    console.error(e)
                                }
                                b.delete(t)
                            }) : function() {}
                        }(t, (function() {
                            e.prefetch()
                        }))))
                    }
                }, {
                    key: "prefetch",
                    value: function(t) {
                        if (this.p) {
                            var e = this.getPaths();
                            d.default.prefetch(e[0], e[1], t).catch((function(t) {
                                0
                            })), N[e.join("%")] = !0
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.children,
                            n = this.formatUrls(this.props.href, this.props.as),
                            r = n.href,
                            a = n.as;
                        "string" === typeof e && (e = p.default.createElement("a", null, e));
                        var o = p.Children.only(e),
                            c = {
                                ref: function(e) {
                                    t.handleRef(e), o && "object" === typeof o && o.ref && ("function" === typeof o.ref ? o.ref(e) : "object" === typeof o.ref && (o.ref.current = e))
                                },
                                onMouseEnter: function(e) {
                                    o.props && "function" === typeof o.props.onMouseEnter && o.props.onMouseEnter(e), t.prefetch({
                                        priority: !0
                                    })
                                },
                                onClick: function(e) {
                                    o.props && "function" === typeof o.props.onClick && o.props.onClick(e), e.defaultPrevented || t.linkClicked(e)
                                }
                            };
                        return !this.props.passHref && ("a" !== o.type || "href" in o.props) || (c.href = a || r), p.default.cloneElement(o, c)
                    }
                }]), n
            }(p.Component);
            e.default = w
        },
        foSv: function(t, e, n) {
            "use strict";

            function r(t) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        md7G: function(t, e, n) {
            "use strict";

            function r(t) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            n.d(e, "a", (function() {
                return o
            }));
            var a = n("JX7q");

            function o(t, e) {
                return !e || "object" !== r(e) && "function" !== typeof e ? Object(a.a)(t) : e
            }
        },
        rePB: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        vuIU: function(t, e, n) {
            "use strict";

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function a(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            }
            n.d(e, "a", (function() {
                return a
            }))
        }
    }
]);