(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        Y3fP: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, "default", (function() {
                return h
            }));
            var n = t("1OyB"),
                s = t("vuIU"),
                o = t("JX7q"),
                r = t("Ji7U"),
                l = t("md7G"),
                m = t("foSv"),
                c = t("rePB"),
                i = t("q1tI"),
                d = t.n(i),
                u = t("R9S9"),
                p = d.a.createElement;

            function f(e) {
                var a = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, n = Object(m.a)(e);
                    if (a) {
                        var s = Object(m.a)(this).constructor;
                        t = Reflect.construct(n, arguments, s)
                    } else t = n.apply(this, arguments);
                    return Object(l.a)(this, t)
                }
            }
            var h = function(e) {
                Object(r.a)(t, e);
                var a = f(t);

                function t() {
                    var e;
                    Object(n.a)(this, t);
                    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++) r[l] = arguments[l];
                    return e = a.call.apply(a, [this].concat(r)), Object(c.a)(Object(o.a)(e), "state", {
                        isContactSubmitted: !1,
                        FirstName: "",
                        LastName: "",
                        EmailAddress: "",
                        Company: "",
                        Message: "",
                        error: {
                            FirstNameError: "",
                            LastNameError: "",
                            EmailAddressError: "",
                            CompanyError: "",
                            MessageError: ""
                        }
                    }), Object(c.a)(Object(o.a)(e), "onContactSubmit", (function() {
                        e.validContact() && e.SendContactInfo()
                    })), Object(c.a)(Object(o.a)(e), "validContact", (function() {
                        var a = !1;
                        if (e.state.FirstName || (e.setState({
                                FirstNameError: "*Please enter your First Name"
                            }), a = !0), e.state.LastName || (e.setState({
                                LastNameError: "*Please enter your Last Name"
                            }), a = !0), e.state.EmailAddress) {
                            /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim.test(e.state.EmailAddress) || (e.setState({
                                EmailAddressError: "*Please enter a valid email address"
                            }), a = !0)
                        } else e.setState({
                            EmailAddressError: "*Please enter a valid email address"
                        }), a = !0;
                        return e.state.Company || (e.setState({
                            CompanyError: "*Please enter your company name"
                        }), a = !0), !a
                    })), Object(c.a)(Object(o.a)(e), "renderSuccessMessage", (function() {
                        if (e.state.isContactSubmitted) return p(d.a.Fragment, null, p("div", {
                            className: "small-12 columns nopad contact-form-success"
                        }, p("div", {
                            className: "small-12 columns nopad title-lg"
                        }, "Thanks for filling out our form!"), p("div", {
                            className: "small-12 columns nopad success-text"
                        }, "We appreciate you contacting us. One of our colleagues will get back in touch with you soon!")))
                    })), Object(c.a)(Object(o.a)(e), "renderForm", (function() {
                        if (!e.state.isContactSubmitted) return p(d.a.Fragment, null, p("div", {
                            className: "small-12 columns nopad contact-form-hold"
                        }, p("div", {
                            className: "small-12 columns nopad form-element animation-element fade-up"
                        }, p("input", {
                            type: "text",
                            placeholder: "First name*",
                            name: "FirstName",
                            onChange: e.handleOnChange
                        }), p("div", {
                            style: {
                                color: "red"
                            }
                        }, e.state.FirstNameError)), p("div", {
                            className: "small-12 columns nopad form-element animation-element fade-up"
                        }, p("input", {
                            type: "text",
                            placeholder: "Last name*",
                            name: "LastName",
                            onChange: e.handleOnChange
                        }), p("div", {
                            style: {
                                color: "red"
                            }
                        }, e.state.LastNameError)), p("div", {
                            className: "small-12 columns nopad form-element has-error animation-element fade-up"
                        }, p("input", {
                            type: "text",
                            placeholder: "Email*",
                            name: "EmailAddress",
                            onChange: e.handleOnChange
                        }), p("div", {
                            style: {
                                color: "red"
                            }
                        }, e.state.EmailAddressError)), p("div", {
                            className: "small-12 columns nopad form-element animation-element fade-up"
                        }, p("input", {
                            type: "text",
                            placeholder: "Company*",
                            name: "Company",
                            onChange: e.handleOnChange
                        }), p("div", {
                            style: {
                                color: "red"
                            }
                        }, e.state.CompanyError)), p("div", {
                            className: "small-12 columns nopad form-element animation-element fade-up"
                        }, p("textarea", {
                            placeholder: "Message",
                            name: "Message",
                            onChange: e.handleOnChange
                        })), p("div", {
                            className: "small-12 columns nopad form-submit animation-element fade-up"
                        }, p("button", {
                            type: "submit",
                            onClick: e.onContactSubmit,
                            className: "btn-arrow-three"
                        }, p("span", null, "Contact me")))))
                    })), Object(c.a)(Object(o.a)(e), "handleOnChange", (function(a) {
                        a.preventDefault(), e.setState(Object(c.a)({}, a.target.name, a.target.value)), e.setState(Object(c.a)({}, a.target.name + "Error", ""))
                    })), e
                }
                return Object(s.a)(t, [{
                    key: "SendContactInfo",
                    value: function() {
                        var e = {
                            contactUs: {
                                userName: this.state.FirstName + " " + this.state.LastName,
                                email: this.state.EmailAddress,
                                companyName: this.state.Company,
                                product: "www.optimaldynamics.com",
                                tmsName: this.state.Message
                            }
                        };
                        fetch("https://api.smart-tl.com/v1/users/contact-us", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }).then((function(e) {
                            return e.json()
                        })).then((function() {
                            console.log("Success:")
                        })).catch((function(e) {
                            console.error("Error:", e)
                        })), this.setState({
                            isContactSubmitted: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return p(u.a, null, p("div", {
                            className: "header-padd"
                        }, p("div", {
                            className: "intro-middle-wrapper"
                        }, p("div", {
                            className: "intro-reg-img image-effect image-effect-right animation-element",
                            style: {
                                background: "url(img/Contact_Hero.jpg) no-repeat center center"
                            }
                        }), p("div", {
                            className: "row"
                        }, p("div", {
                            className: "small-12 medium-9 large-7 columns nopad intro-middle-content "
                        }, p("div", {
                            className: "small-12 columns nopad intro-reg-title animation-element fade-up"
                        }, "Contact"), p("div", {
                            className: "small-12 columns nopad intro-reg-text animation-element fade-up"
                        }, "We are looking forward to bringing you along with the future of logistics. Contact us and learn more!")))), p("div", {
                            className: "contact-wrapper"
                        }, p("div", {
                            className: "row row-md"
                        }, p("div", {
                            className: "small-12 colums nopad contact-content"
                        }, p("div", {
                            className: "small-12 large-7 columns nopad contact-left"
                        }, this.renderForm(), this.renderSuccessMessage()), p("div", {
                            className: "small-12 large-5 columns nopad contact-right"
                        }, p("div", {
                            className: "small-12 columns nopad title-sm title-halogen animation-element fade-up"
                        }, "Support questions?"), p("div", {
                            className: "small-12 columns nopad contact-info animation-element fade-up"
                        }, p("p", null, "Contact our support at"), p("p", null, p("a", {
                            href: "mailto:support@optimaldynamics.com"
                        }, "support@optimaldynamics.com"))), p("div", {
                            className: "small-12 columns nopad contacts-separator"
                        }, p("span", {
                            className: "animation-element line-grow"
                        })), p("div", {
                            className: "small-12 columns nopad title-sm title-halogen animation-element fade-up"
                        }, "Office"), p("div", {
                            className: "small-12 columns nopad contact-info animation-element fade-up"
                        }, p("p", null, "28-07 Jackson Ave Floor 5, Queens, NY 11101"))))))))
                    }
                }]), t
            }(d.a.Component)
        },
        fUXl: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return t("Y3fP")
            }])
        }
    },
    [
        ["fUXl", 0, 2, 1, 3]
    ]
]);