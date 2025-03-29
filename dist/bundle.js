/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      56: (t, e, r) => {
        "use strict";
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function r(t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n;
              break;
            }
          return r;
        }
        function n(t, n) {
          for (var o = {}, a = [], s = 0; s < t.length; s++) {
            var u = t[s],
              c = n.base ? u[0] + n.base : u[0],
              l = o[c] || 0,
              f = "".concat(c, " ").concat(l);
            o[c] = l + 1;
            var h = r(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(p);
            else {
              var d = i(p, n);
              (n.byIndex = s),
                e.splice(s, 0, { identifier: f, updater: d, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function i(t, e) {
          var r = e.domAPI(e);
          return (
            r.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                r.update((t = e));
              } else r.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var o = n((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < o.length; a++) {
              var s = r(o[a]);
              e[s].references--;
            }
            for (var u = n(t, i), c = 0; c < o.length; c++) {
              var l = r(o[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            o = u;
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      234: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, s(n.key), n);
          }
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return (function (t, e, r) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return r && i(a, r.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(r, t)
              );
            }),
            r(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        function a(t, e, r) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function s(e) {
          var r = (function (e) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(r) ? r : r + "";
        }
        var u = (function (r) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (e = (function (e, r, i) {
                  return (
                    (r = o(r)),
                    (function (e, r) {
                      if (r && ("object" == t(r) || "function" == typeof r))
                        return r;
                      if (void 0 !== r)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      n()
                        ? Reflect.construct(r, i || [], o(e).constructor)
                        : r.apply(e, i),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(s, r),
            (u = s),
            (c = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n            :host {\n              display: block;\n              width: 100%;\n              color: #FF6500;\n            }\n            div {\n              padding: 24px 20px;\n              text-align: center;\n            }\n            .brand-name {\n              margin: 0;\n              font-size: 1.7em;\n            }\n          ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style);
                  var t = document.createElement("div");
                  (t.innerHTML = '<h3 class="brand-name">Archived Notes</h3>'),
                    this._shadowRoot.appendChild(t);
                },
              },
            ]) && e(u.prototype, c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, c;
        })(r(HTMLElement));
        customElements.define("archive-title", u);
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (r += t(e)),
                  n && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, n, i, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (n)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0];
                  null != u && (a[u] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c]);
                (n && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      331: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, r(i.key), i);
          }
        }
        function r(e) {
          var r = (function (e) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(r) ? r : r + "";
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return (function (t, e, r) {
                  if (i()) return Reflect.construct.apply(null, arguments);
                  var n = [null];
                  n.push.apply(n, e);
                  var a = new (t.bind.apply(t, n))();
                  return r && o(a, r.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(r, t)
              );
            }),
            n(t)
          );
        }
        function i() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (i = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var s = (function (r) {
          function n() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (e = (function (e, r, n) {
                return (
                  (r = a(r)),
                  (function (e, r) {
                    if (r && ("object" == t(r) || "function" == typeof r))
                      return r;
                    if (void 0 !== r)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    i()
                      ? Reflect.construct(r, n || [], a(e).constructor)
                      : r.apply(e, n),
                  )
                );
              })(this, n)).attachShadow({ mode: "open" }),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(n, r),
            (s = n),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this.shadowRoot.innerHTML =
                    '\n        <style>\n          :host {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n            justify-content: center;\n            align-items: center;\n            z-index: 9999;\n          }\n  \n          .spinner {\n            width: 50px;\n            height: 50px;\n            border: 5px solid rgba(255, 255, 255, 0.3);\n            border-radius: 50%;\n            border-top-color: white;\n            animation: spin 1s linear infinite;\n          }\n  \n          @keyframes spin {\n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n          }\n        </style>\n  \n        <div class="spinner"></div>\n      ';
                },
              },
              {
                key: "show",
                value: function () {
                  this.style.display = "flex";
                },
              },
              {
                key: "hide",
                value: function () {
                  this.style.display = "none";
                },
              },
            ]) && e(s.prototype, u),
            Object.defineProperty(s, "prototype", { writable: !1 }),
            s
          );
          var s, u;
        })(n(HTMLElement));
        customElements.define("loading-indicator", s);
      },
      365: (t, e, r) => {
        "use strict";
        r.d(e, { A: () => s });
        var n = r(601),
          i = r.n(n),
          o = r(314),
          a = r.n(o)()(i());
        a.push([
          t.id,
          "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: black;\n}\n\n.list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  max-width: 60em;\n  margin: 0 auto;\n  justify-content: center;\n  color: white;\n  margin-top: 10px;\n}\n\n.list > * {\n  padding: 10px;\n  border: 1px solid #333;\n  text-align: center;\n  background-color: #0b192c;\n  border-radius: 2em;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.archive-button,\n.unarchive-button {\n  background-color: #578fca;\n  border: none;\n  color: white;\n  padding: 8px 16px;\n  text-align: center;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n.delete-button {\n  background-color: #ff0000;\n  border: none;\n  color: white;\n  padding: 8px 16px;\n  text-align: center;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n@media (max-width: 1024px) {\n  .list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media (max-width: 768px) {\n  .list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  #noteForm {\n    width: 90%;\n  }\n}\n",
          "",
        ]);
        const s = a;
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          n.appendChild(r);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (r) {
              !(function (t, e, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var i = void 0 !== r.layer;
                i &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {",
                  )),
                  (n += r.css),
                  i && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var o = r.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, r);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      980: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, s(n.key), n);
          }
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return (function (t, e, r) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return r && i(a, r.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(r, t)
              );
            }),
            r(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        function a(t, e, r) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function s(e) {
          var r = (function (e) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(r) ? r : r + "";
        }
        var u = (function (r) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (e = (function (e, r, i) {
                  return (
                    (r = o(r)),
                    (function (e, r) {
                      if (r && ("object" == t(r) || "function" == typeof r))
                        return r;
                      if (void 0 !== r)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      n()
                        ? Reflect.construct(r, i || [], o(e).constructor)
                        : r.apply(e, i),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(s, r),
            (u = s),
            (c = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n          :host {\n            display: block;\n          }\n     \n          div {\n            padding: 24px 20px;\n            text-align: center;\n            color :  #FF6500;\n            font-weight: bold;\n          }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      "      \n          <div>\n            Faid &copy; 2025\n          </div>\n        ");
                },
              },
            ]) && e(u.prototype, c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, c;
        })(r(HTMLElement));
        customElements.define("footer-bar", u);
      },
      988: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, s(n.key), n);
          }
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return (function (t, e, r) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return r && i(a, r.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(r, t)
              );
            }),
            r(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        function a(t, e, r) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function s(e) {
          var r = (function (e) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(r) ? r : r + "";
        }
        var u = (function (r) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (e = (function (e, r, i) {
                  return (
                    (r = o(r)),
                    (function (e, r) {
                      if (r && ("object" == t(r) || "function" == typeof r))
                        return r;
                      if (void 0 !== r)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      n()
                        ? Reflect.construct(r, i || [], o(e).constructor)
                        : r.apply(e, i),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(s, r),
            (u = s),
            (c = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n          :host {\n            display: block;\n            width: 100%;\n            color: #FF6500;\n          }\n          div {\n            padding: 24px 20px;\n          }\n          .brand-name {\n            margin: 0;\n            font-size: 1.7em;\n          }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style);
                  var t = document.createElement("div");
                  (t.innerHTML =
                    '<h1 class="brand-name">Notes Application</h1>'),
                    this._shadowRoot.appendChild(t);
                },
              },
            ]) && e(u.prototype, c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, c;
        })(r(HTMLElement));
        customElements.define("app-bar", u);
      },
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = (e[n] = { id: n, exports: {} });
    return t[n](o, o.exports, r), o.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.nc = void 0);
  var n = {};
  (() => {
    "use strict";
    r.d(n, { oI: () => Ui, Gx: () => Yi, os: () => Fi });
    var t = r(72),
      e = r.n(t),
      i = r(825),
      o = r.n(i),
      a = r(659),
      s = r.n(a),
      u = r(56),
      c = r.n(u),
      l = r(540),
      f = r.n(l),
      h = r(113),
      p = r.n(h),
      d = r(365),
      y = {};
    (y.styleTagTransform = p()),
      (y.setAttributes = c()),
      (y.insert = s().bind(null, "head")),
      (y.domAPI = o()),
      (y.insertStyleElement = f()),
      e()(d.A, y),
      d.A && d.A.locals && d.A.locals,
      r(331),
      r(988);
    var v = function (t) {
        t.target.setCustomValidity(""),
          t.target.validity.valueMissing
            ? t.target.setCustomValidity("Judul tidak boleh kosong.")
            : t.target.validity.tooShort &&
              t.target.setCustomValidity("Judul minimal harus 3 karakter."),
          g(t);
      },
      m = function (t) {
        t.target.setCustomValidity(""),
          t.target.validity.valueMissing
            ? t.target.setCustomValidity("Isi note tidak boleh kosong.")
            : t.target.validity.tooShort &&
              t.target.setCustomValidity("Isi note minimal harus 5 karakter."),
          g(t);
      },
      g = function (t) {
        var e = t.target
          .getRootNode()
          .getElementById(t.target.getAttribute("aria-describedby"));
        e && (e.textContent = t.target.validationMessage);
      };
    function _(t) {
      return (
        (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        _(t)
      );
    }
    function b() {
      b = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        i =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function l(t, e, r, n) {
        var o = e && e.prototype instanceof m ? e : m,
          a = Object.create(o.prototype),
          s = new C(n || []);
        return i(a, "_invoke", { value: L(t, r, s) }), a;
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = l;
      var h = "suspendedStart",
        p = "suspendedYield",
        d = "executing",
        y = "completed",
        v = {};
      function m() {}
      function g() {}
      function w() {}
      var x = {};
      c(x, a, function () {
        return this;
      });
      var T = Object.getPrototypeOf,
        O = T && T(T(A([])));
      O && O !== r && n.call(O, a) && (x = O);
      var E = (w.prototype = m.prototype = Object.create(x));
      function k(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function S(t, e) {
        function r(i, o, a, s) {
          var u = f(t[i], t, o);
          if ("throw" !== u.type) {
            var c = u.arg,
              l = c.value;
            return l && "object" == _(l) && n.call(l, "__await")
              ? e.resolve(l.__await).then(
                  function (t) {
                    r("next", t, a, s);
                  },
                  function (t) {
                    r("throw", t, a, s);
                  },
                )
              : e.resolve(l).then(
                  function (t) {
                    (c.value = t), a(c);
                  },
                  function (t) {
                    return r("throw", t, a, s);
                  },
                );
          }
          s(u.arg);
        }
        var o;
        i(this, "_invoke", {
          value: function (t, n) {
            function i() {
              return new e(function (e, i) {
                r(t, n, e, i);
              });
            }
            return (o = o ? o.then(i, i) : i());
          },
        });
      }
      function L(e, r, n) {
        var i = h;
        return function (o, a) {
          if (i === d) throw Error("Generator is already running");
          if (i === y) {
            if ("throw" === o) throw a;
            return { value: t, done: !0 };
          }
          for (n.method = o, n.arg = a; ; ) {
            var s = n.delegate;
            if (s) {
              var u = P(s, n);
              if (u) {
                if (u === v) continue;
                return u;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (i === h) throw ((i = y), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = d;
            var c = f(e, r, n);
            if ("normal" === c.type) {
              if (((i = n.done ? y : p), c.arg === v)) continue;
              return { value: c.arg, done: n.done };
            }
            "throw" === c.type &&
              ((i = y), (n.method = "throw"), (n.arg = c.arg));
          }
        };
      }
      function P(e, r) {
        var n = r.method,
          i = e.iterator[n];
        if (i === t)
          return (
            (r.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              P(e, r),
              "throw" === r.method)) ||
              ("return" !== n &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method",
                )))),
            v
          );
        var o = f(i, e.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), v;
        var a = o.arg;
        return a
          ? a.done
            ? ((r[e.resultName] = a.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              v)
            : a
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            v);
      }
      function j(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function M(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function C(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(j, this),
          this.reset(!0);
      }
      function A(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              o = function r() {
                for (; ++i < e.length; )
                  if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        throw new TypeError(_(e) + " is not iterable");
      }
      return (
        (g.prototype = w),
        i(E, "constructor", { value: w, configurable: !0 }),
        i(w, "constructor", { value: g, configurable: !0 }),
        (g.displayName = c(w, u, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, w)
              : ((t.__proto__ = w), c(t, u, "GeneratorFunction")),
            (t.prototype = Object.create(E)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        k(S.prototype),
        c(S.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = S),
        (e.async = function (t, r, n, i, o) {
          void 0 === o && (o = Promise);
          var a = new S(l(t, r, n, i), o);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        k(E),
        c(E, u, "Generator"),
        c(E, a, function () {
          return this;
        }),
        c(E, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = A),
        (C.prototype = {
          constructor: C,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(M),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function i(n, i) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (r.next = n),
                i && ((r.method = "next"), (r.arg = t)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ("root" === a.tryLoc) return i("end");
              if (a.tryLoc <= this.prev) {
                var u = n.call(a, "catchLoc"),
                  c = n.call(a, "finallyLoc");
                if (u && c) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!c) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
              v
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), M(r), v;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  M(r);
                }
                return i;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              v
            );
          },
        }),
        e
      );
    }
    function w(t, e, r, n, i, o, a) {
      try {
        var s = t[o](a),
          u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, i);
    }
    function x(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, T(n.key), n);
      }
    }
    function T(t) {
      var e = (function (t) {
        if ("object" != _(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var r = e.call(t, "string");
          if ("object" != _(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == _(e) ? e : e + "";
    }
    function O(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (
        (O = function (t) {
          if (
            null === t ||
            !(function (t) {
              try {
                return (
                  -1 !== Function.toString.call(t).indexOf("[native code]")
                );
              } catch (e) {
                return "function" == typeof t;
              }
            })(t)
          )
            return t;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return (function (t, e, r) {
              if (E()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, e);
              var i = new (t.bind.apply(t, n))();
              return r && k(i, r.prototype), i;
            })(t, arguments, S(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            k(r, t)
          );
        }),
        O(t)
      );
    }
    function E() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (E = function () {
        return !!t;
      })();
    }
    function k(t, e) {
      return (
        (k = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        k(t, e)
      );
    }
    function S(t) {
      return (
        (S = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        S(t)
      );
    }
    var L = (function (t) {
      function e() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (t = (function (t, e, r) {
            return (
              (e = S(e)),
              (function (t, e) {
                if (e && ("object" == _(e) || "function" == typeof e)) return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(
                t,
                E()
                  ? Reflect.construct(e, r || [], S(t).constructor)
                  : e.apply(t, r),
              )
            );
          })(this, e)).attachShadow({ mode: "open" }),
          t
        );
      }
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && k(t, e);
        })(e, t),
        (r = e),
        (n = [
          {
            key: "connectedCallback",
            value: function () {
              this.render(), this.attachEvents(), this.loadExternalStyles();
            },
          },
          {
            key: "loadExternalStyles",
            value: function () {
              var t = document.createElement("link");
              (t.rel = "stylesheet"),
                (t.href = "styles.css"),
                this.shadowRoot.appendChild(t);
            },
          },
          {
            key: "render",
            value: function () {
              this.shadowRoot.innerHTML =
                '\n      <style> \n        :host {\n          display: block;\n          width: 100%;\n        }\n\n        #noteForm {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          width: 90%;\n          max-width: 850px;\n          margin: 0 auto;\n          padding: 50px;\n          border-radius: 8px;\n          background-color: #0b192c;\n          margin-bottom: 10px;\n        }\n\n        #noteForm input,\n        #noteForm textarea {\n          width: 100%;\n          padding: 8px;\n          margin-bottom: 10px;\n          border: 1px solid #ccc;\n          border-radius: 5px;\n        }\n\n        #noteForm button {\n          width: 100%;\n          padding: 10px;\n          background-color: #007bff;\n          color: white;\n          border: none;\n          border-radius: 5px;\n          cursor: pointer;\n        }\n\n        #noteForm button:hover {\n          background-color: #0056b3;\n        }\n\n        .validation-message {\n          color: red;\n          font-size: 0.85em;\n          margin-top: 4px;\n        }\n\n        input:user-invalid,\n        textarea:user-invalid {\n          border: 2px solid red;\n        }\n\n        input:user-valid,\n        textarea:user-valid {\n          border: 2px solid green;\n        }\n      </style>\n      <form id="noteForm">\n        <input type="text" id="title" placeholder="Judul Note" minlength="3" aria-describedby="titlevalidation" required>\n        <p id="titlevalidation" class="validation-message"></p>\n\n        <textarea id="body" placeholder="Isi Note" minlength="5" aria-describedby="bodyvalidation" required></textarea>\n        <p id="bodyvalidation" class="validation-message"></p>\n\n        <button type="submit">Tambah Note</button>\n      </form>\n    ';
            },
          },
          {
            key: "attachEvents",
            value: function () {
              var t = this,
                e = this.shadowRoot.querySelector("#noteForm"),
                r = this.shadowRoot.querySelector("#title"),
                n = this.shadowRoot.querySelector("#body");
              r &&
                n &&
                (r.addEventListener("input", v),
                r.addEventListener("blur", v),
                n.addEventListener("input", m),
                n.addEventListener("blur", m)),
                e.addEventListener(
                  "submit",
                  (function () {
                    var e,
                      i =
                        ((e = b().mark(function e(i) {
                          var o, a, s, u;
                          return b().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      i.preventDefault(),
                                      (o = { title: r.value, body: n.value }),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      fetch(
                                        "https://notes-api.dicoding.dev/v2/notes",
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify(o),
                                        },
                                      )
                                    );
                                  case 5:
                                    if ((a = e.sent).ok) {
                                      e.next = 11;
                                      break;
                                    }
                                    return (e.next = 9), a.json();
                                  case 9:
                                    throw (
                                      ((s = e.sent),
                                      new Error(
                                        s.message ||
                                          "Gagal menambahkan catatan",
                                      ))
                                    );
                                  case 11:
                                    return (e.next = 13), a.json();
                                  case 13:
                                    (u = e.sent),
                                      console.log("Note berhasil disimpan:", u),
                                      t.dispatchEvent(
                                        new CustomEvent("add-note", {
                                          detail: u.data,
                                        }),
                                      ),
                                      (r.value = ""),
                                      (n.value = ""),
                                      (e.next = 24);
                                    break;
                                  case 20:
                                    (e.prev = 20),
                                      (e.t0 = e.catch(2)),
                                      console.error("Terjadi kesalahan:", e.t0),
                                      alert(
                                        "Gagal menambahkan catatan: ".concat(
                                          e.t0.message,
                                        ),
                                      );
                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[2, 20]],
                          );
                        })),
                        function () {
                          var t = this,
                            r = arguments;
                          return new Promise(function (n, i) {
                            var o = e.apply(t, r);
                            function a(t) {
                              w(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                              w(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                          });
                        });
                    return function (t) {
                      return i.apply(this, arguments);
                    };
                  })(),
                );
            },
          },
        ]),
        n && x(r.prototype, n),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
      var r, n;
    })(O(HTMLElement));
    function P(t) {
      return (
        (P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        P(t)
      );
    }
    function j() {
      j = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        i =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function l(t, e, r, n) {
        var o = e && e.prototype instanceof m ? e : m,
          a = Object.create(o.prototype),
          s = new C(n || []);
        return i(a, "_invoke", { value: k(t, r, s) }), a;
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = l;
      var h = "suspendedStart",
        p = "suspendedYield",
        d = "executing",
        y = "completed",
        v = {};
      function m() {}
      function g() {}
      function _() {}
      var b = {};
      c(b, a, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        x = w && w(w(A([])));
      x && x !== r && n.call(x, a) && (b = x);
      var T = (_.prototype = m.prototype = Object.create(b));
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function E(t, e) {
        function r(i, o, a, s) {
          var u = f(t[i], t, o);
          if ("throw" !== u.type) {
            var c = u.arg,
              l = c.value;
            return l && "object" == P(l) && n.call(l, "__await")
              ? e.resolve(l.__await).then(
                  function (t) {
                    r("next", t, a, s);
                  },
                  function (t) {
                    r("throw", t, a, s);
                  },
                )
              : e.resolve(l).then(
                  function (t) {
                    (c.value = t), a(c);
                  },
                  function (t) {
                    return r("throw", t, a, s);
                  },
                );
          }
          s(u.arg);
        }
        var o;
        i(this, "_invoke", {
          value: function (t, n) {
            function i() {
              return new e(function (e, i) {
                r(t, n, e, i);
              });
            }
            return (o = o ? o.then(i, i) : i());
          },
        });
      }
      function k(e, r, n) {
        var i = h;
        return function (o, a) {
          if (i === d) throw Error("Generator is already running");
          if (i === y) {
            if ("throw" === o) throw a;
            return { value: t, done: !0 };
          }
          for (n.method = o, n.arg = a; ; ) {
            var s = n.delegate;
            if (s) {
              var u = S(s, n);
              if (u) {
                if (u === v) continue;
                return u;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (i === h) throw ((i = y), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = d;
            var c = f(e, r, n);
            if ("normal" === c.type) {
              if (((i = n.done ? y : p), c.arg === v)) continue;
              return { value: c.arg, done: n.done };
            }
            "throw" === c.type &&
              ((i = y), (n.method = "throw"), (n.arg = c.arg));
          }
        };
      }
      function S(e, r) {
        var n = r.method,
          i = e.iterator[n];
        if (i === t)
          return (
            (r.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              S(e, r),
              "throw" === r.method)) ||
              ("return" !== n &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method",
                )))),
            v
          );
        var o = f(i, e.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), v;
        var a = o.arg;
        return a
          ? a.done
            ? ((r[e.resultName] = a.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              v)
            : a
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            v);
      }
      function L(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function M(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function C(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(L, this),
          this.reset(!0);
      }
      function A(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              o = function r() {
                for (; ++i < e.length; )
                  if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        throw new TypeError(P(e) + " is not iterable");
      }
      return (
        (g.prototype = _),
        i(T, "constructor", { value: _, configurable: !0 }),
        i(_, "constructor", { value: g, configurable: !0 }),
        (g.displayName = c(_, u, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, _)
              : ((t.__proto__ = _), c(t, u, "GeneratorFunction")),
            (t.prototype = Object.create(T)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        O(E.prototype),
        c(E.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = E),
        (e.async = function (t, r, n, i, o) {
          void 0 === o && (o = Promise);
          var a = new E(l(t, r, n, i), o);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        O(T),
        c(T, u, "Generator"),
        c(T, a, function () {
          return this;
        }),
        c(T, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = A),
        (C.prototype = {
          constructor: C,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(M),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function i(n, i) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (r.next = n),
                i && ((r.method = "next"), (r.arg = t)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ("root" === a.tryLoc) return i("end");
              if (a.tryLoc <= this.prev) {
                var u = n.call(a, "catchLoc"),
                  c = n.call(a, "finallyLoc");
                if (u && c) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!c) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
              v
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), M(r), v;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  M(r);
                }
                return i;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              v
            );
          },
        }),
        e
      );
    }
    function M(t, e, r, n, i, o, a) {
      try {
        var s = t[o](a),
          u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, i);
    }
    function C(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, i) {
          var o = t.apply(e, r);
          function a(t) {
            M(o, n, i, a, s, "next", t);
          }
          function s(t) {
            M(o, n, i, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    customElements.define("form-add", L), r(234), r(980);
    var A = "https://notes-api.dicoding.dev/v2/notes/",
      R = (function () {
        var t = C(
          j().mark(function t(e) {
            var r, n, i, o;
            return j().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        fetch("".concat(A).concat(e, "/archive"), {
                          method: "POST",
                        })
                      );
                    case 3:
                      return (r = t.sent), (t.next = 6), r.json();
                    case 6:
                      if (((n = t.sent), !r.ok)) {
                        t.next = 16;
                        break;
                      }
                      console.log(n.message),
                        (i = document.querySelector(
                          '[data-noteid="'.concat(e, '"]'),
                        )) && i.remove(),
                        (o = document.querySelector("#archivedNotes")) &&
                          ((o.innerHTML += '\n          <div data-noteid="'
                            .concat(e, '">\n            <h3>')
                            .concat(
                              i.querySelector("h3").textContent,
                              "</h3>\n            <p>",
                            )
                            .concat(
                              i.querySelector("p").textContent,
                              '</p>\n            <button class="unarchive-button" data-noteid="',
                            )
                            .concat(
                              e,
                              '">Unarchive</button>\n          </div>\n        ',
                            )),
                          Ui(
                            o.querySelector('[data-noteid="'.concat(e, '"]')),
                          )),
                        z(),
                        (t.next = 17);
                      break;
                    case 16:
                      throw new Error(n.message);
                    case 17:
                      t.next = 23;
                      break;
                    case 19:
                      (t.prev = 19),
                        (t.t0 = t.catch(0)),
                        console.error("Gagal mengarsipkan catatan:", t.t0),
                        alert("Gagal mengarsipkan catatan.");
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 19]],
            );
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      F = function () {
        document.querySelectorAll(".archive-button").forEach(function (t) {
          t.addEventListener(
            "click",
            (function () {
              var t = C(
                j().mark(function t(e) {
                  var r;
                  return j().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = e.target.getAttribute("data-noteid")),
                            (t.next = 3),
                            R(r)
                          );
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        });
      },
      D = (function () {
        var t = C(
          j().mark(function t(e) {
            var r, n, i, o, a, s;
            return j().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        fetch("".concat(A).concat(e, "/unarchive"), {
                          method: "POST",
                        })
                      );
                    case 3:
                      return (r = t.sent), (t.next = 6), r.json();
                    case 6:
                      if (((n = t.sent), !r.ok)) {
                        t.next = 21;
                        break;
                      }
                      if (
                        (console.log(n.message),
                        (i = document.querySelector(
                          '[data-noteid="'.concat(e, '"]'),
                        )))
                      ) {
                        t.next = 12;
                        break;
                      }
                      return t.abrupt("return");
                    case 12:
                      (o = i.querySelector("h3").textContent),
                        (a = i.querySelector("p").textContent),
                        Fi.to(i, {
                          opacity: 0,
                          y: -20,
                          duration: 0.3,
                          onComplete: function () {
                            return i.remove();
                          },
                        }),
                        i.remove(),
                        (s = document.querySelector("#notesList")) &&
                          ((s.innerHTML += Yi({ id: e, title: o, body: a })),
                          Ui(
                            s.querySelector('[data-noteid="'.concat(e, '"]')),
                          )),
                        F(),
                        (t.next = 22);
                      break;
                    case 21:
                      throw new Error(n.message);
                    case 22:
                      t.next = 28;
                      break;
                    case 24:
                      (t.prev = 24),
                        (t.t0 = t.catch(0)),
                        console.error("Gagal membatalkan arsip catatan:", t.t0),
                        alert("Gagal membatalkan arsip catatan.");
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 24]],
            );
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      z = function () {
        document.querySelectorAll(".unarchive-button").forEach(function (t) {
          t.addEventListener(
            "click",
            (function () {
              var t = C(
                j().mark(function t(e) {
                  var r;
                  return j().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = e.target.getAttribute("data-noteid")),
                            (t.next = 3),
                            D(r)
                          );
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        });
      };
    function N(t) {
      return (
        (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        N(t)
      );
    }
    function I() {
      I = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        i =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function l(t, e, r, n) {
        var o = e && e.prototype instanceof m ? e : m,
          a = Object.create(o.prototype),
          s = new j(n || []);
        return i(a, "_invoke", { value: k(t, r, s) }), a;
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = l;
      var h = "suspendedStart",
        p = "suspendedYield",
        d = "executing",
        y = "completed",
        v = {};
      function m() {}
      function g() {}
      function _() {}
      var b = {};
      c(b, a, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        x = w && w(w(M([])));
      x && x !== r && n.call(x, a) && (b = x);
      var T = (_.prototype = m.prototype = Object.create(b));
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function E(t, e) {
        function r(i, o, a, s) {
          var u = f(t[i], t, o);
          if ("throw" !== u.type) {
            var c = u.arg,
              l = c.value;
            return l && "object" == N(l) && n.call(l, "__await")
              ? e.resolve(l.__await).then(
                  function (t) {
                    r("next", t, a, s);
                  },
                  function (t) {
                    r("throw", t, a, s);
                  },
                )
              : e.resolve(l).then(
                  function (t) {
                    (c.value = t), a(c);
                  },
                  function (t) {
                    return r("throw", t, a, s);
                  },
                );
          }
          s(u.arg);
        }
        var o;
        i(this, "_invoke", {
          value: function (t, n) {
            function i() {
              return new e(function (e, i) {
                r(t, n, e, i);
              });
            }
            return (o = o ? o.then(i, i) : i());
          },
        });
      }
      function k(e, r, n) {
        var i = h;
        return function (o, a) {
          if (i === d) throw Error("Generator is already running");
          if (i === y) {
            if ("throw" === o) throw a;
            return { value: t, done: !0 };
          }
          for (n.method = o, n.arg = a; ; ) {
            var s = n.delegate;
            if (s) {
              var u = S(s, n);
              if (u) {
                if (u === v) continue;
                return u;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (i === h) throw ((i = y), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = d;
            var c = f(e, r, n);
            if ("normal" === c.type) {
              if (((i = n.done ? y : p), c.arg === v)) continue;
              return { value: c.arg, done: n.done };
            }
            "throw" === c.type &&
              ((i = y), (n.method = "throw"), (n.arg = c.arg));
          }
        };
      }
      function S(e, r) {
        var n = r.method,
          i = e.iterator[n];
        if (i === t)
          return (
            (r.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              S(e, r),
              "throw" === r.method)) ||
              ("return" !== n &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method",
                )))),
            v
          );
        var o = f(i, e.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), v;
        var a = o.arg;
        return a
          ? a.done
            ? ((r[e.resultName] = a.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              v)
            : a
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            v);
      }
      function L(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function j(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(L, this),
          this.reset(!0);
      }
      function M(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              o = function r() {
                for (; ++i < e.length; )
                  if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        throw new TypeError(N(e) + " is not iterable");
      }
      return (
        (g.prototype = _),
        i(T, "constructor", { value: _, configurable: !0 }),
        i(_, "constructor", { value: g, configurable: !0 }),
        (g.displayName = c(_, u, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, _)
              : ((t.__proto__ = _), c(t, u, "GeneratorFunction")),
            (t.prototype = Object.create(T)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        O(E.prototype),
        c(E.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = E),
        (e.async = function (t, r, n, i, o) {
          void 0 === o && (o = Promise);
          var a = new E(l(t, r, n, i), o);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        O(T),
        c(T, u, "Generator"),
        c(T, a, function () {
          return this;
        }),
        c(T, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = M),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(P),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function i(n, i) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (r.next = n),
                i && ((r.method = "next"), (r.arg = t)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ("root" === a.tryLoc) return i("end");
              if (a.tryLoc <= this.prev) {
                var u = n.call(a, "catchLoc"),
                  c = n.call(a, "finallyLoc");
                if (u && c) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!c) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
              v
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), P(r), v;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  P(r);
                }
                return i;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: M(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              v
            );
          },
        }),
        e
      );
    }
    function G(t, e, r, n, i, o, a) {
      try {
        var s = t[o](a),
          u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, i);
    }
    function q(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, i) {
          var o = t.apply(e, r);
          function a(t) {
            G(o, n, i, a, s, "next", t);
          }
          function s(t) {
            G(o, n, i, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var B = (function () {
        var t = q(
          I().mark(function t(e) {
            return I().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        fetch(
                          ""
                            .concat("https://notes-api.dicoding.dev/v2/notes/")
                            .concat(e),
                          { method: "DELETE" },
                        )
                      );
                    case 3:
                      t.sent, (t.next = 10);
                      break;
                    case 6:
                      (t.prev = 6),
                        (t.t0 = t.catch(0)),
                        console.log(t.t0),
                        alert("Gagal menghapus catatan");
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 6]],
            );
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      Y = function () {
        document.querySelector("#notesList").addEventListener(
          "click",
          (function () {
            var t = q(
              I().mark(function t(e) {
                var r;
                return I().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.target.classList.contains("delete-button")) {
                          t.next = 6;
                          break;
                        }
                        return (
                          e.preventDefault(),
                          (r = e.target.getAttribute("data-noteid")),
                          console.log("Menghapus note dengan ID:", r),
                          (t.next = 6),
                          B(r)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
      };
    function H(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function U(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    var X,
      V,
      W,
      Q,
      J,
      Z,
      $,
      K,
      tt,
      et,
      rt,
      nt,
      it,
      ot,
      at,
      st,
      ut,
      ct = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      lt = { duration: 0.5, overwrite: !1, delay: 0 },
      ft = 1e8,
      ht = 1e-8,
      pt = 2 * Math.PI,
      dt = pt / 4,
      yt = 0,
      vt = Math.sqrt,
      mt = Math.cos,
      gt = Math.sin,
      _t = function (t) {
        return "string" == typeof t;
      },
      bt = function (t) {
        return "function" == typeof t;
      },
      wt = function (t) {
        return "number" == typeof t;
      },
      xt = function (t) {
        return void 0 === t;
      },
      Tt = function (t) {
        return "object" == typeof t;
      },
      Ot = function (t) {
        return !1 !== t;
      },
      Et = function () {
        return "undefined" != typeof window;
      },
      kt = function (t) {
        return bt(t) || _t(t);
      },
      St =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      Lt = Array.isArray,
      Pt = /(?:-?\.?\d|\.)+/gi,
      jt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      Mt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Ct = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      At = /[+-]=-?[.\d]+/,
      Rt = /[^,'"\[\]\s]+/gi,
      Ft = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      Dt = {},
      zt = {},
      Nt = function (t) {
        return (zt = pe(t, Dt)) && dn;
      },
      It = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      Gt = function (t, e) {
        return !e && console.warn(t);
      },
      qt = function (t, e) {
        return (t && (Dt[t] = e) && zt && (zt[t] = e)) || Dt;
      },
      Bt = function () {
        return 0;
      },
      Yt = { suppressEvents: !0, isStart: !0, kill: !1 },
      Ht = { suppressEvents: !0, kill: !1 },
      Ut = { suppressEvents: !0 },
      Xt = {},
      Vt = [],
      Wt = {},
      Qt = {},
      Jt = {},
      Zt = 30,
      $t = [],
      Kt = "",
      te = function (t) {
        var e,
          r,
          n = t[0];
        if ((Tt(n) || bt(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = $t.length; r-- && !$t[r].targetTest(n); );
          e = $t[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new Sr(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      ee = function (t) {
        return t._gsap || te(He(t))[0]._gsap;
      },
      re = function (t, e, r) {
        return (r = t[e]) && bt(r)
          ? t[e]()
          : (xt(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      ne = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      ie = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      oe = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      ae = function (t, e) {
        var r = e.charAt(0),
          n = parseFloat(e.substr(2));
        return (
          (t = parseFloat(t)),
          "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
        );
      },
      se = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      },
      ue = function () {
        var t,
          e,
          r = Vt.length,
          n = Vt.slice(0);
        for (Wt = {}, Vt.length = 0, t = 0; t < r; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      ce = function (t, e, r, n) {
        Vt.length && !V && ue(),
          t.render(e, r, n || (V && e < 0 && (t._initted || t._startAt))),
          Vt.length && !V && ue();
      },
      le = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Rt).length < 2
          ? e
          : _t(t)
            ? t.trim()
            : t;
      },
      fe = function (t) {
        return t;
      },
      he = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      pe = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      de = function t(e, r) {
        for (var n in r)
          "__proto__" !== n &&
            "constructor" !== n &&
            "prototype" !== n &&
            (e[n] = Tt(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e;
      },
      ye = function (t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      },
      ve = function (t) {
        var e,
          r = t.parent || Q,
          n = t.keyframes
            ? ((e = Lt(t.keyframes)),
              function (t, r) {
                for (var n in r)
                  n in t ||
                    ("duration" === n && e) ||
                    "ease" === n ||
                    (t[n] = r[n]);
              })
            : he;
        if (Ot(t.inherit))
          for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
        return t;
      },
      me = function (t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var o,
          a = t[n];
        if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
        return (
          a
            ? ((e._next = a._next), (a._next = e))
            : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = a),
          (e.parent = e._dp = t),
          e
        );
      },
      ge = function (t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
          o = e._next;
        i ? (i._next = o) : t[r] === e && (t[r] = o),
          o ? (o._prev = i) : t[n] === e && (t[n] = i),
          (e._next = e._prev = e.parent = null);
      },
      _e = function (t, e) {
        t.parent &&
          (!e || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0);
      },
      be = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
        return t;
      },
      we = function (t, e, r, n) {
        return (
          t._startAt &&
          (V
            ? t._startAt.revert(Ht)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
              t._startAt.render(e, !0, n))
        );
      },
      xe = function t(e) {
        return !e || (e._ts && t(e.parent));
      },
      Te = function (t) {
        return t._repeat ? Oe(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Oe = function (t, e) {
        var r = Math.floor((t = oe(t / e)));
        return t && r === t ? r - 1 : r;
      },
      Ee = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      ke = function (t) {
        return (t._end = oe(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || ht) || 0),
        ));
      },
      Se = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = oe(
              r._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
            )),
            ke(t),
            r._dirty || be(r, t)),
          t
        );
      },
      Le = function (t, e) {
        var r;
        if (
          ((e._time ||
            (!e._dur && e._initted) ||
            (e._start < t._time && (e._dur || !e.add))) &&
            ((r = Ee(t.rawTime(), e)),
            (!e._dur || Ge(0, e.totalDuration(), r) - e._tTime > ht) &&
              e.render(r, !0)),
          be(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -1e-8;
        }
      },
      Pe = function (t, e, r, n) {
        return (
          e.parent && _e(e),
          (e._start = oe(
            (wt(r) ? r : r || t !== Q ? ze(t, r, e) : t._time) + e._delay,
          )),
          (e._end = oe(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
          )),
          me(t, e, "_first", "_last", t._sort ? "_start" : 0),
          Ae(e) || (t._recent = e),
          n || Le(t, e),
          t._ts < 0 && Se(t, t._tTime),
          t
        );
      },
      je = function (t, e) {
        return (
          (Dt.ScrollTrigger || It("scrollTrigger", e)) &&
          Dt.ScrollTrigger.create(e, t)
        );
      },
      Me = function (t, e, r, n, i) {
        return (
          Fr(t, e, i),
          t._initted
            ? !r &&
              t._pt &&
              !V &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              tt !== dr.frame
              ? (Vt.push(t), (t._lazy = [i, n]), 1)
              : void 0
            : 1
        );
      },
      Ce = function t(e) {
        var r = e.parent;
        return (
          r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        );
      },
      Ae = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      Re = function (t, e, r, n) {
        var i = t._repeat,
          o = oe(e) || 0,
          a = t._tTime / t._tDur;
        return (
          a && !n && (t._time *= o / t._dur),
          (t._dur = o),
          (t._tDur = i ? (i < 0 ? 1e10 : oe(o * (i + 1) + t._rDelay * i)) : o),
          a > 0 && !n && Se(t, (t._tTime = t._tDur * a)),
          t.parent && ke(t),
          r || be(t.parent, t),
          t
        );
      },
      Fe = function (t) {
        return t instanceof Pr ? be(t) : Re(t, t._dur);
      },
      De = { _start: 0, endTime: Bt, totalDuration: Bt },
      ze = function t(e, r, n) {
        var i,
          o,
          a,
          s = e.labels,
          u = e._recent || De,
          c = e.duration() >= ft ? u.endTime(!1) : e._dur;
        return _t(r) && (isNaN(r) || r in s)
          ? ((o = r.charAt(0)),
            (a = "%" === r.substr(-1)),
            (i = r.indexOf("=")),
            "<" === o || ">" === o
              ? (i >= 0 && (r = r.replace(/=/, "")),
                ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (a ? (i < 0 ? u : n).totalDuration() / 100 : 1))
              : i < 0
                ? (r in s || (s[r] = c), s[r])
                : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                  a &&
                    n &&
                    (o = (o / 100) * (Lt(n) ? n[0] : n).totalDuration()),
                  i > 1 ? t(e, r.substr(0, i - 1), n) + o : c + o))
          : null == r
            ? c
            : +r;
      },
      Ne = function (t, e, r) {
        var n,
          i,
          o = wt(e[1]),
          a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
          s = e[a];
        if ((o && (s.duration = e[1]), (s.parent = r), t)) {
          for (n = s, i = r; i && !("immediateRender" in n); )
            (n = i.vars.defaults || {}), (i = Ot(i.vars.inherit) && i.parent);
          (s.immediateRender = Ot(n.immediateRender)),
            t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
        }
        return new Gr(e[0], s, e[a + 1]);
      },
      Ie = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      Ge = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      qe = function (t, e) {
        return _t(t) && (e = Ft.exec(t)) ? e[1] : "";
      },
      Be = [].slice,
      Ye = function (t, e) {
        return (
          t &&
          Tt(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && Tt(t[0]))) &&
          !t.nodeType &&
          t !== J
        );
      },
      He = function (t, e, r) {
        return W && !e && W.selector
          ? W.selector(t)
          : !_t(t) || r || (!Z && yr())
            ? Lt(t)
              ? (function (t, e, r) {
                  return (
                    void 0 === r && (r = []),
                    t.forEach(function (t) {
                      var n;
                      return (_t(t) && !e) || Ye(t, 1)
                        ? (n = r).push.apply(n, He(t))
                        : r.push(t);
                    }) || r
                  );
                })(t, r)
              : Ye(t)
                ? Be.call(t, 0)
                : t
                  ? [t]
                  : []
            : Be.call((e || $).querySelectorAll(t), 0);
      },
      Ue = function (t) {
        return (
          (t = He(t)[0] || Gt("Invalid scope") || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return He(
              e,
              r.querySelectorAll
                ? r
                : r === t
                  ? Gt("Invalid scope") || $.createElement("div")
                  : t,
            );
          }
        );
      },
      Xe = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Ve = function (t) {
        if (bt(t)) return t;
        var e = Tt(t) ? t : { each: t },
          r = xr(e.ease),
          n = e.from || 0,
          i = parseFloat(e.base) || 0,
          o = {},
          a = n > 0 && n < 1,
          s = isNaN(n) || a,
          u = e.axis,
          c = n,
          l = n;
        return (
          _t(n)
            ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !a && s && ((c = n[0]), (l = n[1])),
          function (t, a, f) {
            var h,
              p,
              d,
              y,
              v,
              m,
              g,
              _,
              b,
              w = (f || e).length,
              x = o[w];
            if (!x) {
              if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, ft])[1])) {
                for (
                  g = -ft;
                  g < (g = f[b++].getBoundingClientRect().left) && b < w;

                );
                b < w && b--;
              }
              for (
                x = o[w] = [],
                  h = s ? Math.min(b, w) * c - 0.5 : n % b,
                  p = b === ft ? 0 : s ? (w * l) / b - 0.5 : (n / b) | 0,
                  g = 0,
                  _ = ft,
                  m = 0;
                m < w;
                m++
              )
                (d = (m % b) - h),
                  (y = p - ((m / b) | 0)),
                  (x[m] = v =
                    u ? Math.abs("y" === u ? y : d) : vt(d * d + y * y)),
                  v > g && (g = v),
                  v < _ && (_ = v);
              "random" === n && Xe(x),
                (x.max = g - _),
                (x.min = _),
                (x.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (b > w
                        ? w - 1
                        : u
                          ? "y" === u
                            ? w / b
                            : b
                          : Math.max(b, w / b)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (x.b = w < 0 ? i - w : i),
                (x.u = qe(e.amount || e.each) || 0),
                (r = r && w < 0 ? br(r) : r);
            }
            return (
              (w = (x[t] - x.min) / x.max || 0),
              oe(x.b + (r ? r(w) : w) * x.v) + x.u
            );
          }
        );
      },
      We = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (r) {
          var n = oe(Math.round(parseFloat(r) / t) * t * e);
          return (n - (n % 1)) / e + (wt(r) ? 0 : qe(r));
        };
      },
      Qe = function (t, e) {
        var r,
          n,
          i = Lt(t);
        return (
          !i &&
            Tt(t) &&
            ((r = i = t.radius || ft),
            t.values
              ? ((t = He(t.values)), (n = !wt(t[0])) && (r *= r))
              : (t = We(t.increment))),
          Ie(
            e,
            i
              ? bt(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (
                      var i,
                        o,
                        a = parseFloat(n ? e.x : e),
                        s = parseFloat(n ? e.y : 0),
                        u = ft,
                        c = 0,
                        l = t.length;
                      l--;

                    )
                      (i = n
                        ? (i = t[l].x - a) * i + (o = t[l].y - s) * o
                        : Math.abs(t[l] - a)) < u && ((u = i), (c = l));
                    return (
                      (c = !r || u <= r ? t[c] : e),
                      n || c === e || wt(e) ? c : c + qe(e)
                    );
                  }
              : We(t),
          )
        );
      },
      Je = function (t, e, r, n) {
        return Ie(Lt(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return Lt(t)
            ? t[~~(Math.random() * t.length)]
            : (r = r || 1e-5) &&
                (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r,
                  ) *
                    r *
                    n,
                ) / n;
        });
      },
      Ze = function (t, e, r) {
        return Ie(r, function (r) {
          return t[~~e(r)];
        });
      },
      $e = function (t) {
        for (var e, r, n, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
          (n = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (r = t.substr(e + 7, n - e - 7).match(i ? Rt : Pt)),
            (a +=
              t.substr(o, e - o) +
              Je(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
            (o = n + 1);
        return a + t.substr(o, t.length - o);
      },
      Ke = function (t, e, r, n, i) {
        var o = e - t,
          a = n - r;
        return Ie(i, function (e) {
          return r + (((e - t) / o) * a || 0);
        });
      },
      tr = function (t, e, r) {
        var n,
          i,
          o,
          a = t.labels,
          s = ft;
        for (n in a)
          (i = a[n] - e) < 0 == !!r &&
            i &&
            s > (i = Math.abs(i)) &&
            ((o = n), (s = i));
        return o;
      },
      er = function (t, e, r) {
        var n,
          i,
          o,
          a = t.vars,
          s = a[e],
          u = W,
          c = t._ctx;
        if (s)
          return (
            (n = a[e + "Params"]),
            (i = a.callbackScope || t),
            r && Vt.length && ue(),
            c && (W = c),
            (o = n ? s.apply(i, n) : s.call(i)),
            (W = u),
            o
          );
      },
      rr = function (t) {
        return (
          _e(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!V),
          t.progress() < 1 && er(t, "onInterrupt"),
          t
        );
      },
      nr = [],
      ir = function (t) {
        if (t)
          if (((t = (!t.name && t.default) || t), Et() || t.headless)) {
            var e = t.name,
              r = bt(t),
              n =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              i = {
                init: Bt,
                render: Qr,
                add: Ar,
                kill: Zr,
                modifier: Jr,
                rawVars: 0,
              },
              o = {
                targetTest: 0,
                get: 0,
                getSetter: Ur,
                aliases: {},
                register: 0,
              };
            if ((yr(), t !== n)) {
              if (Qt[e]) return;
              he(n, he(ye(t, i), o)),
                pe(n.prototype, pe(i, ye(t, o))),
                (Qt[(n.prop = e)] = n),
                t.targetTest && ($t.push(n), (Xt[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            qt(e, n), t.register && t.register(dn, n, tn);
          } else nr.push(t);
      },
      or = 255,
      ar = {
        aqua: [0, or, or],
        lime: [0, or, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, or],
        navy: [0, 0, 128],
        white: [or, or, or],
        olive: [128, 128, 0],
        yellow: [or, or, 0],
        orange: [or, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [or, 0, 0],
        pink: [or, 192, 203],
        cyan: [0, or, or],
        transparent: [or, or, or, 0],
      },
      sr = function (t, e, r) {
        return (
          ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
            ? e + (r - e) * t * 6
            : t < 0.5
              ? r
              : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
            or +
            0.5) |
          0
        );
      },
      ur = function (t, e, r) {
        var n,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          h,
          p = t ? (wt(t) ? [t >> 16, (t >> 8) & or, t & or] : 0) : ar.black;
        if (!p) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ar[t]))
            p = ar[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((n = t.charAt(1)),
                (i = t.charAt(2)),
                (o = t.charAt(3)),
                (t =
                  "#" +
                  n +
                  n +
                  i +
                  i +
                  o +
                  o +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (p = parseInt(t.substr(1, 6), 16)) >> 16,
                (p >> 8) & or,
                p & or,
                parseInt(t.substr(7), 16) / 255,
              ];
            p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & or, t & or];
          } else if ("hsl" === t.substr(0, 3))
            if (((p = h = t.match(Pt)), e)) {
              if (~t.indexOf("="))
                return (p = t.match(jt)), r && p.length < 4 && (p[3] = 1), p;
            } else
              (a = (+p[0] % 360) / 360),
                (s = +p[1] / 100),
                (n =
                  2 * (u = +p[2] / 100) -
                  (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = sr(a + 1 / 3, n, i)),
                (p[1] = sr(a, n, i)),
                (p[2] = sr(a - 1 / 3, n, i));
          else p = t.match(Pt) || ar.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !h &&
            ((n = p[0] / or),
            (i = p[1] / or),
            (o = p[2] / or),
            (u = ((c = Math.max(n, i, o)) + (l = Math.min(n, i, o))) / 2),
            c === l
              ? (a = s = 0)
              : ((f = c - l),
                (s = u > 0.5 ? f / (2 - c - l) : f / (c + l)),
                (a =
                  c === n
                    ? (i - o) / f + (i < o ? 6 : 0)
                    : c === i
                      ? (o - n) / f + 2
                      : (n - i) / f + 4),
                (a *= 60)),
            (p[0] = ~~(a + 0.5)),
            (p[1] = ~~(100 * s + 0.5)),
            (p[2] = ~~(100 * u + 0.5))),
          r && p.length < 4 && (p[3] = 1),
          p
        );
      },
      cr = function (t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(fr).forEach(function (t) {
            var i = t.match(Mt) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      },
      lr = function (t, e, r) {
        var n,
          i,
          o,
          a,
          s = "",
          u = (t + s).match(fr),
          c = e ? "hsla(" : "rgba(",
          l = 0;
        if (!u) return t;
        if (
          ((u = u.map(function (t) {
            return (
              (t = ur(t, e, 1)) &&
              c +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((o = cr(t)), (n = r.c).join(s) !== o.c.join(s)))
        )
          for (a = (i = t.replace(fr, "1").split(Mt)).length - 1; l < a; l++)
            s +=
              i[l] +
              (~n.indexOf(l)
                ? u.shift() || c + "0,0,0,0)"
                : (o.length ? o : u.length ? u : r).shift());
        if (!i)
          for (a = (i = t.split(fr)).length - 1; l < a; l++) s += i[l] + u[l];
        return s + i[a];
      },
      fr = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ar) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      hr = /hsl[a]?\(/,
      pr = function (t) {
        var e,
          r = t.join(" ");
        if (((fr.lastIndex = 0), fr.test(r)))
          return (
            (e = hr.test(r)),
            (t[1] = lr(t[1], e)),
            (t[0] = lr(t[0], e, cr(t[1]))),
            !0
          );
      },
      dr = (function () {
        var t,
          e,
          r,
          n,
          i,
          o,
          a = Date.now,
          s = 500,
          u = 33,
          c = a(),
          l = c,
          f = 1e3 / 240,
          h = f,
          p = [],
          d = function r(d) {
            var y,
              v,
              m,
              g,
              _ = a() - l,
              b = !0 === d;
            if (
              ((_ > s || _ < 0) && (c += _ - u),
              ((y = (m = (l += _) - c) - h) > 0 || b) &&
                ((g = ++n.frame),
                (i = m - 1e3 * n.time),
                (n.time = m /= 1e3),
                (h += y + (y >= f ? 4 : f - y)),
                (v = 1)),
              b || (t = e(r)),
              v)
            )
              for (o = 0; o < p.length; o++) p[o](m, i, g, d);
          };
        return (n = {
          time: 0,
          frame: 0,
          tick: function () {
            d(!0);
          },
          deltaRatio: function (t) {
            return i / (1e3 / (t || 60));
          },
          wake: function () {
            K &&
              (!Z &&
                Et() &&
                ((J = Z = window),
                ($ = J.document || {}),
                (Dt.gsap = dn),
                (J.gsapVersions || (J.gsapVersions = [])).push(dn.version),
                Nt(zt || J.GreenSockGlobals || (!J.gsap && J) || {}),
                nr.forEach(ir)),
              (r =
                "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame),
              t && n.sleep(),
              (e =
                r ||
                function (t) {
                  return setTimeout(t, (h - 1e3 * n.time + 1) | 0);
                }),
              (rt = 1),
              d(2));
          },
          sleep: function () {
            (r ? cancelAnimationFrame : clearTimeout)(t), (rt = 0), (e = Bt);
          },
          lagSmoothing: function (t, e) {
            (s = t || 1 / 0), (u = Math.min(e || 33, s));
          },
          fps: function (t) {
            (f = 1e3 / (t || 240)), (h = 1e3 * n.time + f);
          },
          add: function (t, e, r) {
            var i = e
              ? function (e, r, o, a) {
                  t(e, r, o, a), n.remove(i);
                }
              : t;
            return n.remove(t), p[r ? "unshift" : "push"](i), yr(), i;
          },
          remove: function (t, e) {
            ~(e = p.indexOf(t)) && p.splice(e, 1) && o >= e && o--;
          },
          _listeners: p,
        });
      })(),
      yr = function () {
        return !rt && dr.wake();
      },
      vr = {},
      mr = /^[\d.\-M][\d.\-,\s]/,
      gr = /["']/g,
      _r = function (t) {
        for (
          var e,
            r,
            n,
            i = {},
            o = t.substr(1, t.length - 3).split(":"),
            a = o[0],
            s = 1,
            u = o.length;
          s < u;
          s++
        )
          (r = o[s]),
            (e = s !== u - 1 ? r.lastIndexOf(",") : r.length),
            (n = r.substr(0, e)),
            (i[a] = isNaN(n) ? n.replace(gr, "").trim() : +n),
            (a = r.substr(e + 1).trim());
        return i;
      },
      br = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      wr = function t(e, r) {
        for (var n, i = e._first; i; )
          i instanceof Pr
            ? t(i, r)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === r ||
              (i.timeline
                ? t(i.timeline, r)
                : ((n = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = n),
                  (i._yoyo = r))),
            (i = i._next);
      },
      xr = function (t, e) {
        return (
          (t &&
            (bt(t)
              ? t
              : vr[t] ||
                (function (t) {
                  var e,
                    r,
                    n,
                    i,
                    o = (t + "").split("("),
                    a = vr[o[0]];
                  return a && o.length > 1 && a.config
                    ? a.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [_r(o[1])]
                          : ((e = t),
                            (r = e.indexOf("(") + 1),
                            (n = e.indexOf(")")),
                            (i = e.indexOf("(", r)),
                            e.substring(
                              r,
                              ~i && i < n ? e.indexOf(")", n + 1) : n,
                            ))
                              .split(",")
                              .map(le),
                      )
                    : vr._CE && mr.test(t)
                      ? vr._CE("", t)
                      : a;
                })(t))) ||
          e
        );
      },
      Tr = function (t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          o = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          ne(t, function (t) {
            for (var e in ((vr[t] = Dt[t] = o),
            (vr[(i = t.toLowerCase())] = r),
            o))
              vr[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = vr[t + "." + e] = o[e];
          }),
          o
        );
      },
      Or = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Er = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
          o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          a = (o / pt) * (Math.asin(1 / i) || 0),
          s = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * gt((t - a) * o) + 1;
          },
          u =
            "out" === e
              ? s
              : "in" === e
                ? function (t) {
                    return 1 - s(1 - t);
                  }
                : Or(s);
        return (
          (o = pt / o),
          (u.config = function (r, n) {
            return t(e, r, n);
          }),
          u
        );
      },
      kr = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          i =
            "out" === e
              ? n
              : "in" === e
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : Or(n);
        return (
          (i.config = function (r) {
            return t(e, r);
          }),
          i
        );
      };
    ne("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      Tr(
        t + ",Power" + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow(2 * (1 - t), r) / 2;
        },
      );
    }),
      (vr.Linear.easeNone = vr.none = vr.Linear.easeIn),
      Tr("Elastic", Er("in"), Er("out"), Er()),
      (nt = 7.5625),
      (at = 2 * (ot = 1 / (it = 2.75))),
      (st = 2.5 * ot),
      Tr(
        "Bounce",
        function (t) {
          return 1 - ut(1 - t);
        },
        (ut = function (t) {
          return t < ot
            ? nt * t * t
            : t < at
              ? nt * Math.pow(t - 1.5 / it, 2) + 0.75
              : t < st
                ? nt * (t -= 2.25 / it) * t + 0.9375
                : nt * Math.pow(t - 2.625 / it, 2) + 0.984375;
        }),
      ),
      Tr("Expo", function (t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
      }),
      Tr("Circ", function (t) {
        return -(vt(1 - t * t) - 1);
      }),
      Tr("Sine", function (t) {
        return 1 === t ? 1 : 1 - mt(t * dt);
      }),
      Tr("Back", kr("in"), kr("out"), kr()),
      (vr.SteppedEase =
        vr.steps =
        Dt.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((n * Ge(0, 0.99999999, t)) | 0) + i) * r;
              };
            },
          }),
      (lt.ease = vr["quad.out"]),
      ne(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (Kt += t + "," + t + "Params,");
        },
      );
    var Sr = function (t, e) {
        (this.id = yt++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : re),
          (this.set = e ? e.getSetter : Ur);
      },
      Lr = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Re(this, +t.duration, 1, 1),
            (this.data = t.data),
            W && ((this._ctx = W), W.data.push(this)),
            rt || dr.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Re(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((yr(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (
                Se(this, t), !r._dp || r.parent || Le(r, this);
                r && r.parent;

              )
                r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : (r.totalDuration() - r._tTime) / -r._ts) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Pe(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && Math.abs(this._zTime) === ht) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), ce(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + Te(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e,
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                  ? 1
                  : 0;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    Te(this),
                  e,
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                  ? 1
                  : 0;
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
                ? Oe(this._tTime, r) + 1
                : 1;
          }),
          (e.timeScale = function (t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r =
              this.parent && this._ts
                ? Ee(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(
                Ge(-Math.abs(this._delay), this._tDur, r),
                !1 !== e,
              ),
              ke(this),
              (function (t) {
                for (var e = t.parent; e && e.parent; )
                  (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
              })(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (yr(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          Math.abs(this._zTime) !== ht &&
                          (this._tTime -= ht),
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Pe(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (Ot(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? Ee(e.rawTime(t), this)
                  : this._tTime
              : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = Ut);
            var e = V;
            return (
              (V = t),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(t),
                this.totalTime(-0.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              (V = e),
              this
            );
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
            return !this.parent && this._sat ? this._sat.globalTime(t) : r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), Fe(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), Fe(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(ze(this, t), Ot(e));
          }),
          (e.restart = function (t, e) {
            return (
              this.play().totalTime(t ? -this._delay : 0, Ot(e)),
              this._dur || (this._zTime = -1e-8),
              this
            );
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - ht
              )
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((n[t] = e),
                    r && (n[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete n[t],
                this)
              : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              var n = bt(t) ? t : fe,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    bt(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            rr(this);
          }),
          t
        );
      })();
    he(Lr.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Pr = (function (t) {
      function e(e, r) {
        var n;
        return (
          void 0 === e && (e = {}),
          ((n = t.call(this, e) || this).labels = {}),
          (n.smoothChildTiming = !!e.smoothChildTiming),
          (n.autoRemoveChildren = !!e.autoRemoveChildren),
          (n._sort = Ot(e.sortChildren)),
          Q && Pe(e.parent || Q, H(n), r),
          e.reversed && n.reverse(),
          e.paused && n.paused(!0),
          e.scrollTrigger && je(H(n), e.scrollTrigger),
          n
        );
      }
      U(e, t);
      var r = e.prototype;
      return (
        (r.to = function (t, e, r) {
          return Ne(0, arguments, this), this;
        }),
        (r.from = function (t, e, r) {
          return Ne(1, arguments, this), this;
        }),
        (r.fromTo = function (t, e, r, n) {
          return Ne(2, arguments, this), this;
        }),
        (r.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            ve(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Gr(t, e, ze(this, r), 1),
            this
          );
        }),
        (r.call = function (t, e, r) {
          return Pe(this, Gr.delayedCall(0, t, e), r);
        }),
        (r.staggerTo = function (t, e, r, n, i, o, a) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || n),
            (r.onComplete = o),
            (r.onCompleteParams = a),
            (r.parent = this),
            new Gr(t, r, ze(this, i)),
            this
          );
        }),
        (r.staggerFrom = function (t, e, r, n, i, o, a) {
          return (
            (r.runBackwards = 1),
            (ve(r).immediateRender = Ot(r.immediateRender)),
            this.staggerTo(t, e, r, n, i, o, a)
          );
        }),
        (r.staggerFromTo = function (t, e, r, n, i, o, a, s) {
          return (
            (n.startAt = r),
            (ve(n).immediateRender = Ot(n.immediateRender)),
            this.staggerTo(t, e, n, i, o, a, s)
          );
        }),
        (r.render = function (t, e, r) {
          var n,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            h,
            p,
            d,
            y = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            m = this._dur,
            g = t <= 0 ? 0 : oe(t),
            _ = this._zTime < 0 != t < 0 && (this._initted || !m);
          if (
            (this !== Q && g > v && t >= 0 && (g = v),
            g !== this._tTime || r || _)
          ) {
            if (
              (y !== this._time &&
                m &&
                ((g += this._time - y), (t += this._time - y)),
              (n = g),
              (f = this._start),
              (u = !(l = this._ts)),
              _ && (m || (y = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((p = this._yoyo),
                (s = m + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * s + t, e, r);
              if (
                ((n = oe(g % s)),
                g === v
                  ? ((a = this._repeat), (n = m))
                  : ((a = ~~(h = oe(g / s))) && a === h && ((n = m), a--),
                    n > m && (n = m)),
                (h = Oe(this._tTime, s)),
                !y &&
                  this._tTime &&
                  h !== a &&
                  this._tTime - h * s - this._dur <= 0 &&
                  (h = a),
                p && 1 & a && ((n = m - n), (d = 1)),
                a !== h && !this._lock)
              ) {
                var b = p && 1 & h,
                  w = b === (p && 1 & a);
                if (
                  (a < h && (b = !b),
                  (y = b ? 0 : g % m ? m : g),
                  (this._lock = 1),
                  (this.render(y || (d ? 0 : oe(a * s)), e, !m)._lock = 0),
                  (this._tTime = g),
                  !e && this.parent && er(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !d &&
                    (this.invalidate()._lock = 1),
                  (y && y !== this._time) ||
                    u !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((m = this._dur),
                  (v = this._tDur),
                  w &&
                    ((this._lock = 2),
                    (y = b ? m : -1e-4),
                    this.render(y, !0),
                    this.vars.repeatRefresh && !d && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !u)
                )
                  return this;
                wr(this, d);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((c = (function (t, e, r) {
                  var n;
                  if (r > e)
                    for (n = t._first; n && n._start <= r; ) {
                      if ("isPause" === n.data && n._start > e) return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= r; ) {
                      if ("isPause" === n.data && n._start < e) return n;
                      n = n._prev;
                    }
                })(this, oe(y), oe(n))),
                c && (g -= n - (n = c._start))),
              (this._tTime = g),
              (this._time = n),
              (this._act = !l),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (y = 0)),
              !y && n && !e && !a && (er(this, "onStart"), this._tTime !== g))
            )
              return this;
            if (n >= y && t >= 0)
              for (i = this._first; i; ) {
                if (
                  ((o = i._next), (i._act || n >= i._start) && i._ts && c !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (n - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (n - i._start) * i._ts,
                      e,
                      r,
                    ),
                    n !== this._time || (!this._ts && !u))
                  ) {
                    (c = 0), o && (g += this._zTime = -1e-8);
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var x = t < 0 ? t : n; i; ) {
                if (
                  ((o = i._prev), (i._act || x <= i._end) && i._ts && c !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (x - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (x - i._start) * i._ts,
                      e,
                      r || (V && (i._initted || i._startAt)),
                    ),
                    n !== this._time || (!this._ts && !u))
                  ) {
                    (c = 0), o && (g += this._zTime = x ? -1e-8 : ht);
                    break;
                  }
                }
                i = o;
              }
            }
            if (
              c &&
              !e &&
              (this.pause(),
              (c.render(n >= y ? 0 : -1e-8)._zTime = n >= y ? 1 : -1),
              this._ts)
            )
              return (this._start = f), ke(this), this.render(t, e, r);
            this._onUpdate && !e && er(this, "onUpdate", !0),
              ((g === v && this._tTime >= this.totalDuration()) || (!g && y)) &&
                ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !m) &&
                    ((g === v && this._ts > 0) || (!g && this._ts < 0)) &&
                    _e(this, 1),
                  e ||
                    (t < 0 && !y) ||
                    (!g && !y && v) ||
                    (er(
                      this,
                      g === v && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0,
                    ),
                    this._prom &&
                      !(g < v && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (r.add = function (t, e) {
          var r = this;
          if ((wt(e) || (e = ze(this, e, t)), !(t instanceof Lr))) {
            if (Lt(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (_t(t)) return this.addLabel(t, e);
            if (!bt(t)) return this;
            t = Gr.delayedCall(0, t);
          }
          return this !== t ? Pe(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -ft);
          for (var i = [], o = this._first; o; )
            o._start >= n &&
              (o instanceof Gr
                ? e && i.push(o)
                : (r && i.push(o),
                  t && i.push.apply(i, o.getChildren(!0, e, r)))),
              (o = o._next);
          return i;
        }),
        (r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
          return _t(t)
            ? this.removeLabel(t)
            : bt(t)
              ? this.killTweensOf(t)
              : (t.parent === this && ge(this, t),
                t === this._recent && (this._recent = this._last),
                be(this));
        }),
        (r.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = oe(
                  dr.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts),
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (r.addLabel = function (t, e) {
          return (this.labels[t] = ze(this, e)), this;
        }),
        (r.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (r.addPause = function (t, e, r) {
          var n = Gr.delayedCall(0, e || Bt, r);
          return (
            (n.data = "isPause"), (this._hasPause = 1), Pe(this, n, ze(this, t))
          );
        }),
        (r.removePause = function (t) {
          var e = this._first;
          for (t = ze(this, t); e; )
            e._start === t && "isPause" === e.data && _e(e), (e = e._next);
        }),
        (r.killTweensOf = function (t, e, r) {
          for (var n = this.getTweensOf(t, r), i = n.length; i--; )
            jr !== n[i] && n[i].kill(t, e);
          return this;
        }),
        (r.getTweensOf = function (t, e) {
          for (var r, n = [], i = He(t), o = this._first, a = wt(e); o; )
            o instanceof Gr
              ? se(o._targets, i) &&
                (a
                  ? (!jr || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                  : !e || o.isActive()) &&
                n.push(o)
              : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
              (o = o._next);
          return n;
        }),
        (r.tweenTo = function (t, e) {
          e = e || {};
          var r,
            n = this,
            i = ze(n, t),
            o = e,
            a = o.startAt,
            s = o.onStart,
            u = o.onStartParams,
            c = o.immediateRender,
            l = Gr.to(
              n,
              he(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (i - (a && "time" in a ? a.time : n._time)) /
                        n.timeScale(),
                    ) ||
                    ht,
                  onStart: function () {
                    if ((n.pause(), !r)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (i - (a && "time" in a ? a.time : n._time)) /
                            n.timeScale(),
                        );
                      l._dur !== t && Re(l, t, 0, 1).render(l._time, !0, !0),
                        (r = 1);
                    }
                    s && s.apply(l, u || []);
                  },
                },
                e,
              ),
            );
          return c ? l.render(0) : l;
        }),
        (r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, he({ startAt: { time: ze(this, t) } }, r));
        }),
        (r.recent = function () {
          return this._recent;
        }),
        (r.nextLabel = function (t) {
          return void 0 === t && (t = this._time), tr(this, ze(this, t));
        }),
        (r.previousLabel = function (t) {
          return void 0 === t && (t = this._time), tr(this, ze(this, t), 1);
        }),
        (r.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + ht);
        }),
        (r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var n, i = this._first, o = this.labels; i; )
            i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (n in o) o[n] >= r && (o[n] += t);
          return be(this);
        }),
        (r.invalidate = function (e) {
          var r = this._first;
          for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
          return t.prototype.invalidate.call(this, e);
        }),
        (r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            (e = r._next), this.remove(r), (r = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            be(this)
          );
        }),
        (r.totalDuration = function (t) {
          var e,
            r,
            n,
            i = 0,
            o = this,
            a = o._last,
            s = ft;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t),
            );
          if (o._dirty) {
            for (n = o.parent; a; )
              (e = a._prev),
                a._dirty && a.totalDuration(),
                (r = a._start) > s && o._sort && a._ts && !o._lock
                  ? ((o._lock = 1), (Pe(o, a, r - a._delay, 1)._lock = 0))
                  : (s = r),
                r < 0 &&
                  a._ts &&
                  ((i -= r),
                  ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                    ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
                  o.shiftChildren(-r, !1, -Infinity),
                  (s = 0)),
                a._end > i && a._ts && (i = a._end),
                (a = e);
            Re(o, o === Q && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((Q._ts && (ce(Q, Ee(t, Q)), (tt = dr.frame)), dr.frame >= Zt)) {
            Zt += ct.autoSleep || 120;
            var e = Q._first;
            if ((!e || !e._ts) && ct.autoSleep && dr._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || dr.sleep();
            }
          }
        }),
        e
      );
    })(Lr);
    he(Pr.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var jr,
      Mr,
      Cr = function (t, e, r, n, i, o, a) {
        var s,
          u,
          c,
          l,
          f,
          h,
          p,
          d,
          y = new tn(this._pt, t, e, 0, 1, Wr, null, i),
          v = 0,
          m = 0;
        for (
          y.b = r,
            y.e = n,
            r += "",
            (p = ~(n += "").indexOf("random(")) && (n = $e(n)),
            o && (o((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
            u = r.match(Ct) || [];
          (s = Ct.exec(n));

        )
          (l = s[0]),
            (f = n.substring(v, s.index)),
            c ? (c = (c + 1) % 5) : "rgba(" === f.substr(-5) && (c = 1),
            l !== u[m++] &&
              ((h = parseFloat(u[m - 1]) || 0),
              (y._pt = {
                _next: y._pt,
                p: f || 1 === m ? f : ",",
                s: h,
                c: "=" === l.charAt(1) ? ae(h, l) - h : parseFloat(l) - h,
                m: c && c < 4 ? Math.round : 0,
              }),
              (v = Ct.lastIndex));
        return (
          (y.c = v < n.length ? n.substring(v, n.length) : ""),
          (y.fp = a),
          (At.test(n) || p) && (y.e = 0),
          (this._pt = y),
          y
        );
      },
      Ar = function (t, e, r, n, i, o, a, s, u, c) {
        bt(n) && (n = n(i || 0, t, o));
        var l,
          f = t[e],
          h =
            "get" !== r
              ? r
              : bt(f)
                ? u
                  ? t[
                      e.indexOf("set") || !bt(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : f,
          p = bt(f) ? (u ? Yr : Br) : qr;
        if (
          (_t(n) &&
            (~n.indexOf("random(") && (n = $e(n)),
            "=" === n.charAt(1) &&
              ((l = ae(h, n) + (qe(h) || 0)) || 0 === l) &&
              (n = l)),
          !c || h !== n || Mr)
        )
          return isNaN(h * n) || "" === n
            ? (!f && !(e in t) && It(e, n),
              Cr.call(this, t, e, h, n, p, s || ct.stringFilter, u))
            : ((l = new tn(
                this._pt,
                t,
                e,
                +h || 0,
                n - (h || 0),
                "boolean" == typeof f ? Vr : Xr,
                0,
                p,
              )),
              u && (l.fp = u),
              a && l.modifier(a, this, t),
              (this._pt = l));
      },
      Rr = function (t, e, r, n, i, o) {
        var a, s, u, c;
        if (
          Qt[t] &&
          !1 !==
            (a = new Qt[t]()).init(
              i,
              a.rawVars
                ? e[t]
                : (function (t, e, r, n, i) {
                    if (
                      (bt(t) && (t = zr(t, i, e, r, n)),
                      !Tt(t) || (t.style && t.nodeType) || Lt(t) || St(t))
                    )
                      return _t(t) ? zr(t, i, e, r, n) : t;
                    var o,
                      a = {};
                    for (o in t) a[o] = zr(t[o], i, e, r, n);
                    return a;
                  })(e[t], n, i, o, r),
              r,
              n,
              o,
            ) &&
          ((r._pt = s = new tn(r._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
          r !== et)
        )
          for (
            u = r._ptLookup[r._targets.indexOf(i)], c = a._props.length;
            c--;

          )
            u[a._props[c]] = s;
        return a;
      },
      Fr = function t(e, r, n) {
        var i,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          h,
          p,
          d,
          y,
          v,
          m = e.vars,
          g = m.ease,
          _ = m.startAt,
          b = m.immediateRender,
          w = m.lazy,
          x = m.onUpdate,
          T = m.runBackwards,
          O = m.yoyoEase,
          E = m.keyframes,
          k = m.autoRevert,
          S = e._dur,
          L = e._startAt,
          P = e._targets,
          j = e.parent,
          M = j && "nested" === j.data ? j.vars.targets : P,
          C = "auto" === e._overwrite && !X,
          A = e.timeline;
        if (
          (A && (!E || !g) && (g = "none"),
          (e._ease = xr(g, lt.ease)),
          (e._yEase = O ? br(xr(!0 === O ? g : O, lt.ease)) : 0),
          O &&
            e._yoyo &&
            !e._repeat &&
            ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
          (e._from = !A && !!m.runBackwards),
          !A || (E && !m.stagger))
        ) {
          if (
            ((y = (f = P[0] ? ee(P[0]).harness : 0) && m[f.prop]),
            (i = ye(m, Xt)),
            L &&
              (L._zTime < 0 && L.progress(1),
              r < 0 && T && b && !k
                ? L.render(-1, !0)
                : L.revert(T && S ? Ht : Yt),
              (L._lazy = 0)),
            _)
          ) {
            if (
              (_e(
                (e._startAt = Gr.set(
                  P,
                  he(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: j,
                      immediateRender: !0,
                      lazy: !L && Ot(w),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        x &&
                        function () {
                          return er(e, "onUpdate");
                        },
                      stagger: 0,
                    },
                    _,
                  ),
                )),
              ),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (V || (!b && !k)) && e._startAt.revert(Ht),
              b && S && r <= 0 && n <= 0)
            )
              return void (r && (e._zTime = r));
          } else if (T && S && !L)
            if (
              (r && (b = !1),
              (a = he(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && !L && Ot(w),
                  immediateRender: b,
                  stagger: 0,
                  parent: j,
                },
                i,
              )),
              y && (a[f.prop] = y),
              _e((e._startAt = Gr.set(P, a))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (V ? e._startAt.revert(Ht) : e._startAt.render(-1, !0)),
              (e._zTime = r),
              b)
            ) {
              if (!r) return;
            } else t(e._startAt, ht, ht);
          for (
            e._pt = e._ptCache = 0, w = (S && Ot(w)) || (w && !S), o = 0;
            o < P.length;
            o++
          ) {
            if (
              ((l = (u = P[o])._gsap || te(P)[o]._gsap),
              (e._ptLookup[o] = p = {}),
              Wt[l.id] && Vt.length && ue(),
              (d = M === P ? o : M.indexOf(u)),
              f &&
                !1 !== (h = new f()).init(u, y || i, e, d, M) &&
                ((e._pt = s =
                  new tn(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority)),
                h._props.forEach(function (t) {
                  p[t] = s;
                }),
                h.priority && (c = 1)),
              !f || y)
            )
              for (a in i)
                Qt[a] && (h = Rr(a, i, e, d, u, M))
                  ? h.priority && (c = 1)
                  : (p[a] = s =
                      Ar.call(e, u, a, "get", i[a], d, M, 0, m.stringFilter));
            e._op && e._op[o] && e.kill(u, e._op[o]),
              C &&
                e._pt &&
                ((jr = e),
                Q.killTweensOf(u, p, e.globalTime(r)),
                (v = !e.parent),
                (jr = 0)),
              e._pt && w && (Wt[l.id] = 1);
          }
          c && Kr(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = x),
          (e._initted = (!e._op || e._pt) && !v),
          E && r <= 0 && A.render(ft, !0, !0);
      },
      Dr = function (t, e, r, n) {
        var i,
          o,
          a = e.ease || n || "power1.inOut";
        if (Lt(e))
          (o = r[t] || (r[t] = [])),
            e.forEach(function (t, r) {
              return o.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
            });
        else
          for (i in e)
            (o = r[i] || (r[i] = [])),
              "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: a });
      },
      zr = function (t, e, r, n, i) {
        return bt(t)
          ? t.call(e, r, n, i)
          : _t(t) && ~t.indexOf("random(")
            ? $e(t)
            : t;
      },
      Nr = Kt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Ir = {};
    ne(Nr + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (Ir[t] = 1);
    });
    var Gr = (function (t) {
      function e(e, r, n, i) {
        var o;
        "number" == typeof r && ((n.duration = r), (r = n), (n = null));
        var a,
          s,
          u,
          c,
          l,
          f,
          h,
          p,
          d = (o = t.call(this, i ? r : ve(r)) || this).vars,
          y = d.duration,
          v = d.delay,
          m = d.immediateRender,
          g = d.stagger,
          _ = d.overwrite,
          b = d.keyframes,
          w = d.defaults,
          x = d.scrollTrigger,
          T = d.yoyoEase,
          O = r.parent || Q,
          E = (Lt(e) || St(e) ? wt(e[0]) : "length" in r) ? [e] : He(e);
        if (
          ((o._targets = E.length
            ? te(E)
            : Gt(
                "GSAP target " + e + " not found. https://gsap.com",
                !ct.nullTargetWarn,
              ) || []),
          (o._ptLookup = []),
          (o._overwrite = _),
          b || g || kt(y) || kt(v))
        ) {
          if (
            ((r = o.vars),
            (a = o.timeline =
              new Pr({
                data: "nested",
                defaults: w || {},
                targets: O && "nested" === O.data ? O.vars.targets : E,
              })).kill(),
            (a.parent = a._dp = H(o)),
            (a._start = 0),
            g || kt(y) || kt(v))
          ) {
            if (((c = E.length), (h = g && Ve(g)), Tt(g)))
              for (l in g) ~Nr.indexOf(l) && (p || (p = {}), (p[l] = g[l]));
            for (s = 0; s < c; s++)
              ((u = ye(r, Ir)).stagger = 0),
                T && (u.yoyoEase = T),
                p && pe(u, p),
                (f = E[s]),
                (u.duration = +zr(y, H(o), s, f, E)),
                (u.delay = (+zr(v, H(o), s, f, E) || 0) - o._delay),
                !g &&
                  1 === c &&
                  u.delay &&
                  ((o._delay = v = u.delay), (o._start += v), (u.delay = 0)),
                a.to(f, u, h ? h(s, f, E) : 0),
                (a._ease = vr.none);
            a.duration() ? (y = v = 0) : (o.timeline = 0);
          } else if (b) {
            ve(he(a.vars.defaults, { ease: "none" })),
              (a._ease = xr(b.ease || r.ease || "none"));
            var k,
              S,
              L,
              P = 0;
            if (Lt(b))
              b.forEach(function (t) {
                return a.to(E, t, ">");
              }),
                a.duration();
            else {
              for (l in ((u = {}), b))
                "ease" === l || "easeEach" === l || Dr(l, b[l], u, b.easeEach);
              for (l in u)
                for (
                  k = u[l].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                    P = 0,
                    s = 0;
                  s < k.length;
                  s++
                )
                  ((L = {
                    ease: (S = k[s]).e,
                    duration: ((S.t - (s ? k[s - 1].t : 0)) / 100) * y,
                  })[l] = S.v),
                    a.to(E, L, P),
                    (P += L.duration);
              a.duration() < y && a.to({}, { duration: y - a.duration() });
            }
          }
          y || o.duration((y = a.duration()));
        } else o.timeline = 0;
        return (
          !0 !== _ || X || ((jr = H(o)), Q.killTweensOf(E), (jr = 0)),
          Pe(O, H(o), n),
          r.reversed && o.reverse(),
          r.paused && o.paused(!0),
          (m ||
            (!y &&
              !b &&
              o._start === oe(O._time) &&
              Ot(m) &&
              xe(H(o)) &&
              "nested" !== O.data)) &&
            ((o._tTime = -1e-8), o.render(Math.max(0, -v) || 0)),
          x && je(H(o), x),
          o
        );
      }
      U(e, t);
      var r = e.prototype;
      return (
        (r.render = function (t, e, r) {
          var n,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            h = this._time,
            p = this._tDur,
            d = this._dur,
            y = t < 0,
            v = t > p - ht && !y ? p : t < ht ? 0 : t;
          if (d) {
            if (
              v !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== y) ||
              this._lazy
            ) {
              if (((n = v), (l = this.timeline), this._repeat)) {
                if (((a = d + this._rDelay), this._repeat < -1 && y))
                  return this.totalTime(100 * a + t, e, r);
                if (
                  ((n = oe(v % a)),
                  v === p
                    ? ((o = this._repeat), (n = d))
                    : (o = ~~(s = oe(v / a))) && o === s
                      ? ((n = d), o--)
                      : n > d && (n = d),
                  (u = this._yoyo && 1 & o) && ((f = this._yEase), (n = d - n)),
                  (s = Oe(this._tTime, a)),
                  n === h && !r && this._initted && o === s)
                )
                  return (this._tTime = v), this;
                o !== s &&
                  (l && this._yEase && wr(l, u),
                  this.vars.repeatRefresh &&
                    !u &&
                    !this._lock &&
                    n !== a &&
                    this._initted &&
                    ((this._lock = r = 1),
                    (this.render(oe(a * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Me(this, y ? t : n, r, e, v))
                  return (this._tTime = 0), this;
                if (
                  !(
                    h === this._time ||
                    (r && this.vars.repeatRefresh && o !== s)
                  )
                )
                  return this;
                if (d !== this._dur) return this.render(t, e, r);
              }
              if (
                ((this._tTime = v),
                (this._time = n),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = c = (f || this._ease)(n / d)),
                this._from && (this.ratio = c = 1 - c),
                n && !h && !e && !o && (er(this, "onStart"), this._tTime !== v))
              )
                return this;
              for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
              (l &&
                l.render(t < 0 ? t : l._dur * l._ease(n / this._dur), e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (y && we(this, t, 0, r), er(this, "onUpdate")),
                this._repeat &&
                  o !== s &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  er(this, "onRepeat"),
                (v !== this._tDur && v) ||
                  this._tTime !== v ||
                  (y && !this._onUpdate && we(this, t, 0, !0),
                  (t || !d) &&
                    ((v === this._tDur && this._ts > 0) ||
                      (!v && this._ts < 0)) &&
                    _e(this, 1),
                  e ||
                    (y && !h) ||
                    !(v || h || u) ||
                    (er(this, v === p ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(v < p && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, r, n) {
              var i,
                o,
                a,
                s = t.ratio,
                u =
                  e < 0 ||
                  (!e &&
                    ((!t._start && Ce(t) && (t._initted || !Ae(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !Ae(t))))
                    ? 0
                    : 1,
                c = t._rDelay,
                l = 0;
              if (
                (c &&
                  t._repeat &&
                  ((l = Ge(0, t._tDur, e)),
                  (o = Oe(l, c)),
                  t._yoyo && 1 & o && (u = 1 - u),
                  o !== Oe(t._tTime, c) &&
                    ((s = 1 - u),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                u !== s || V || n || t._zTime === ht || (!e && t._zTime))
              ) {
                if (!t._initted && Me(t, e, n, r, l)) return;
                for (
                  a = t._zTime,
                    t._zTime = e || (r ? ht : 0),
                    r || (r = e && !a),
                    t.ratio = u,
                    t._from && (u = 1 - u),
                    t._time = 0,
                    t._tTime = l,
                    i = t._pt;
                  i;

                )
                  i.r(u, i.d), (i = i._next);
                e < 0 && we(t, e, 0, !0),
                  t._onUpdate && !r && er(t, "onUpdate"),
                  l && t._repeat && !r && t.parent && er(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === u &&
                    (u && _e(t, 1),
                    r ||
                      V ||
                      (er(t, u ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (r.targets = function () {
          return this._targets;
        }),
        (r.invalidate = function (e) {
          return (
            (!e || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (r.resetTo = function (t, e, r, n, i) {
          rt || dr.wake(), this._ts || this.play();
          var o = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts,
          );
          return (
            this._initted || Fr(this, o),
            (function (t, e, r, n, i, o, a, s) {
              var u,
                c,
                l,
                f,
                h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
              if (!h)
                for (
                  h = t._ptCache[e] = [],
                    l = t._ptLookup,
                    f = t._targets.length;
                  f--;

                ) {
                  if ((u = l[f][e]) && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                      u = u._next;
                  if (!u)
                    return (
                      (Mr = 1),
                      (t.vars[e] = "+=0"),
                      Fr(t, a),
                      (Mr = 0),
                      s ? Gt(e + " not eligible for reset") : 1
                    );
                  h.push(u);
                }
              for (f = h.length; f--; )
                ((u = (c = h[f])._pt || c).s =
                  (!n && 0 !== n) || i ? u.s + (n || 0) + o * u.c : n),
                  (u.c = r - u.s),
                  c.e && (c.e = ie(r) + qe(c.e)),
                  c.b && (c.b = u.s + qe(c.b));
            })(this, t, e, r, n, this._ease(o / this._dur), o, i)
              ? this.resetTo(t, e, r, n, 1)
              : (Se(this, 0),
                this.parent ||
                  me(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0,
                  ),
                this.render(0))
          );
        }),
        (r.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (
              (this._lazy = this._pt = 0),
              this.parent
                ? rr(this)
                : this.scrollTrigger && this.scrollTrigger.kill(!!V),
              this
            );
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, jr && !0 !== jr.vars.overwrite)
                ._first || rr(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                Re(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var n,
            i,
            o,
            a,
            s,
            u,
            c,
            l = this._targets,
            f = t ? He(t) : l,
            h = this._ptLookup,
            p = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var r = t.length, n = r === e.length;
                n && r-- && t[r] === e[r];

              );
              return r < 0;
            })(l, f)
          )
            return "all" === e && (this._pt = 0), rr(this);
          for (
            n = this._op = this._op || [],
              "all" !== e &&
                (_t(e) &&
                  ((s = {}),
                  ne(e, function (t) {
                    return (s[t] = 1);
                  }),
                  (e = s)),
                (e = (function (t, e) {
                  var r,
                    n,
                    i,
                    o,
                    a = t[0] ? ee(t[0]).harness : 0,
                    s = a && a.aliases;
                  if (!s) return e;
                  for (n in ((r = pe({}, e)), s))
                    if ((n in r))
                      for (i = (o = s[n].split(",")).length; i--; )
                        r[o[i]] = r[n];
                  return r;
                })(l, e))),
              c = l.length;
            c--;

          )
            if (~f.indexOf(l[c]))
              for (s in ((i = h[c]),
              "all" === e
                ? ((n[c] = e), (a = i), (o = {}))
                : ((o = n[c] = n[c] || {}), (a = e)),
              a))
                (u = i && i[s]) &&
                  (("kill" in u.d && !0 !== u.d.kill(s)) || ge(this, u, "_pt"),
                  delete i[s]),
                  "all" !== o && (o[s] = 1);
          return this._initted && !this._pt && p && rr(this), this;
        }),
        (e.to = function (t, r) {
          return new e(t, r, arguments[2]);
        }),
        (e.from = function (t, e) {
          return Ne(1, arguments);
        }),
        (e.delayedCall = function (t, r, n, i) {
          return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: i,
          });
        }),
        (e.fromTo = function (t, e, r) {
          return Ne(2, arguments);
        }),
        (e.set = function (t, r) {
          return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r);
        }),
        (e.killTweensOf = function (t, e, r) {
          return Q.killTweensOf(t, e, r);
        }),
        e
      );
    })(Lr);
    he(Gr.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      ne("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Gr[t] = function () {
          var e = new Pr(),
            r = Be.call(arguments, 0);
          return (
            r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
          );
        };
      });
    var qr = function (t, e, r) {
        return (t[e] = r);
      },
      Br = function (t, e, r) {
        return t[e](r);
      },
      Yr = function (t, e, r, n) {
        return t[e](n.fp, r);
      },
      Hr = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      Ur = function (t, e) {
        return bt(t[e]) ? Br : xt(t[e]) && t.setAttribute ? Hr : qr;
      },
      Xr = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      Vr = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      Wr = function (t, e) {
        var r = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; r; )
            (n =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
              n),
              (r = r._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      Qr = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      },
      Jr = function (t, e, r, n) {
        for (var i, o = this._pt; o; )
          (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
      },
      Zr = function (t) {
        for (var e, r, n = this._pt; n; )
          (r = n._next),
            (n.p === t && !n.op) || n.op === t
              ? ge(this, n, "_pt")
              : n.dep || (e = 1),
            (n = r);
        return !e;
      },
      $r = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      },
      Kr = function (t) {
        for (var e, r, n, i, o = t._pt; o; ) {
          for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
          (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
            (o._next = r) ? (r._prev = o) : (i = o),
            (o = e);
        }
        t._pt = n;
      },
      tn = (function () {
        function t(t, e, r, n, i, o, a, s, u) {
          (this.t = e),
            (this.s = n),
            (this.c = i),
            (this.p = r),
            (this.r = o || Xr),
            (this.d = a || this),
            (this.set = s || qr),
            (this.pr = u || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set),
              (this.set = $r),
              (this.m = t),
              (this.mt = r),
              (this.tween = e);
          }),
          t
        );
      })();
    ne(
      Kt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (Xt[t] = 1);
      },
    ),
      (Dt.TweenMax = Dt.TweenLite = Gr),
      (Dt.TimelineLite = Dt.TimelineMax = Pr),
      (Q = new Pr({
        sortChildren: !1,
        defaults: lt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (ct.stringFilter = pr);
    var en = [],
      rn = {},
      nn = [],
      on = 0,
      an = 0,
      sn = function (t) {
        return (rn[t] || nn).map(function (t) {
          return t();
        });
      },
      un = function () {
        var t = Date.now(),
          e = [];
        t - on > 2 &&
          (sn("matchMediaInit"),
          en.forEach(function (t) {
            var r,
              n,
              i,
              o,
              a = t.queries,
              s = t.conditions;
            for (n in a)
              (r = J.matchMedia(a[n]).matches) && (i = 1),
                r !== s[n] && ((s[n] = r), (o = 1));
            o && (t.revert(), i && e.push(t));
          }),
          sn("matchMediaRevert"),
          e.forEach(function (t) {
            return t.onMatch(t, function (e) {
              return t.add(null, e);
            });
          }),
          (on = t),
          sn("matchMedia"));
      },
      cn = (function () {
        function t(t, e) {
          (this.selector = e && Ue(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = an++),
            t && this.add(t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            bt(t) && ((r = e), (e = t), (t = bt));
            var n = this,
              i = function () {
                var t,
                  i = W,
                  o = n.selector;
                return (
                  i && i !== n && i.data.push(n),
                  r && (n.selector = Ue(r)),
                  (W = n),
                  (t = e.apply(n, arguments)),
                  bt(t) && n._r.push(t),
                  (W = i),
                  (n.selector = o),
                  (n.isReverted = !1),
                  t
                );
              };
            return (
              (n.last = i),
              t === bt
                ? i(n, function (t) {
                    return n.add(null, t);
                  })
                : t
                  ? (n[t] = i)
                  : i
            );
          }),
          (e.ignore = function (t) {
            var e = W;
            (W = null), t(this), (W = e);
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (r) {
                return r instanceof t
                  ? e.push.apply(e, r.getTweens())
                  : r instanceof Gr &&
                      !(r.parent && "nested" === r.parent.data) &&
                      e.push(r);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var r = this;
            if (
              (t
                ? (function () {
                    for (var e, n = r.getTweens(), i = r.data.length; i--; )
                      "isFlip" === (e = r.data[i]).data &&
                        (e.revert(),
                        e.getChildren(!0, !0, !1).forEach(function (t) {
                          return n.splice(n.indexOf(t), 1);
                        }));
                    for (
                      n
                        .map(function (t) {
                          return {
                            g:
                              t._dur ||
                              t._delay ||
                              (t._sat && !t._sat.vars.immediateRender)
                                ? t.globalTime(0)
                                : -1 / 0,
                            t,
                          };
                        })
                        .sort(function (t, e) {
                          return e.g - t.g || -1 / 0;
                        })
                        .forEach(function (e) {
                          return e.t.revert(t);
                        }),
                        i = r.data.length;
                      i--;

                    )
                      (e = r.data[i]) instanceof Pr
                        ? "nested" !== e.data &&
                          (e.scrollTrigger && e.scrollTrigger.revert(),
                          e.kill())
                        : !(e instanceof Gr) && e.revert && e.revert(t);
                    r._r.forEach(function (e) {
                      return e(t, r);
                    }),
                      (r.isReverted = !0);
                  })()
                : this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  }),
              this.clear(),
              e)
            )
              for (var n = en.length; n--; )
                en[n].id === this.id && en.splice(n, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      ln = (function () {
        function t(t) {
          (this.contexts = []), (this.scope = t), W && W.data.push(this);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            Tt(t) || (t = { matches: t });
            var n,
              i,
              o,
              a = new cn(0, r || this.scope),
              s = (a.conditions = {});
            for (i in (W && !a.selector && (a.selector = W.selector),
            this.contexts.push(a),
            (e = a.add("onMatch", e)),
            (a.queries = t),
            t))
              "all" === i
                ? (o = 1)
                : (n = J.matchMedia(t[i])) &&
                  (en.indexOf(a) < 0 && en.push(a),
                  (s[i] = n.matches) && (o = 1),
                  n.addListener
                    ? n.addListener(un)
                    : n.addEventListener("change", un));
            return (
              o &&
                e(a, function (t) {
                  return a.add(null, t);
                }),
              this
            );
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      fn = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return ir(t);
          });
        },
        timeline: function (t) {
          return new Pr(t);
        },
        getTweensOf: function (t, e) {
          return Q.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, n) {
          _t(t) && (t = He(t)[0]);
          var i = ee(t || {}).get,
            o = r ? fe : le;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? o(((Qt[e] && Qt[e].get) || i)(t, e, r, n))
                : function (e, r, n) {
                    return o(((Qt[e] && Qt[e].get) || i)(t, e, r, n));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = He(t)).length > 1) {
            var n = t.map(function (t) {
                return dn.quickSetter(t, e, r);
              }),
              i = n.length;
            return function (t) {
              for (var e = i; e--; ) n[e](t);
            };
          }
          t = t[0] || {};
          var o = Qt[e],
            a = ee(t),
            s = (a.harness && (a.harness.aliases || {})[e]) || e,
            u = o
              ? function (e) {
                  var n = new o();
                  (et._pt = 0),
                    n.init(t, r ? e + r : e, et, 0, [t]),
                    n.render(1, n),
                    et._pt && Qr(1, et);
                }
              : a.set(t, s);
          return o
            ? u
            : function (e) {
                return u(t, s, r ? e + r : e, a, 1);
              };
        },
        quickTo: function (t, e, r) {
          var n,
            i = dn.to(
              t,
              he(
                (((n = {})[e] = "+=0.1"), (n.paused = !0), (n.stagger = 0), n),
                r || {},
              ),
            ),
            o = function (t, r, n) {
              return i.resetTo(e, t, r, n);
            };
          return (o.tween = i), o;
        },
        isTweening: function (t) {
          return Q.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = xr(t.ease, lt.ease)), de(lt, t || {});
        },
        config: function (t) {
          return de(ct, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            n = t.plugins,
            i = t.defaults,
            o = t.extendTimeline;
          (n || "").split(",").forEach(function (t) {
            return (
              t &&
              !Qt[t] &&
              !Dt[t] &&
              Gt(e + " effect requires " + t + " plugin.")
            );
          }),
            (Jt[e] = function (t, e, n) {
              return r(He(t), he(e || {}, i), n);
            }),
            o &&
              (Pr.prototype[e] = function (t, r, n) {
                return this.add(Jt[e](t, Tt(r) ? r : (n = r) && {}, this), n);
              });
        },
        registerEase: function (t, e) {
          vr[t] = xr(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? xr(t, e) : vr;
        },
        getById: function (t) {
          return Q.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            n,
            i = new Pr(t);
          for (
            i.smoothChildTiming = Ot(t.smoothChildTiming),
              Q.remove(i),
              i._dp = 0,
              i._time = i._tTime = Q._time,
              r = Q._first;
            r;

          )
            (n = r._next),
              (!e &&
                !r._dur &&
                r instanceof Gr &&
                r.vars.onComplete === r._targets[0]) ||
                Pe(i, r, r._start - r._delay),
              (r = n);
          return Pe(Q, i, 0), i;
        },
        context: function (t, e) {
          return t ? new cn(t, e) : W;
        },
        matchMedia: function (t) {
          return new ln(t);
        },
        matchMediaRefresh: function () {
          return (
            en.forEach(function (t) {
              var e,
                r,
                n = t.conditions;
              for (r in n) n[r] && ((n[r] = !1), (e = 1));
              e && t.revert();
            }) || un()
          );
        },
        addEventListener: function (t, e) {
          var r = rn[t] || (rn[t] = []);
          ~r.indexOf(e) || r.push(e);
        },
        removeEventListener: function (t, e) {
          var r = rn[t],
            n = r && r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        },
        utils: {
          wrap: function t(e, r, n) {
            var i = r - e;
            return Lt(e)
              ? Ze(e, t(0, e.length), r)
              : Ie(n, function (t) {
                  return ((i + ((t - e) % i)) % i) + e;
                });
          },
          wrapYoyo: function t(e, r, n) {
            var i = r - e,
              o = 2 * i;
            return Lt(e)
              ? Ze(e, t(0, e.length - 1), r)
              : Ie(n, function (t) {
                  return (
                    e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                  );
                });
          },
          distribute: Ve,
          random: Je,
          snap: Qe,
          normalize: function (t, e, r) {
            return Ke(t, e, 0, 1, r);
          },
          getUnit: qe,
          clamp: function (t, e, r) {
            return Ie(r, function (r) {
              return Ge(t, e, r);
            });
          },
          splitColor: ur,
          toArray: He,
          selector: Ue,
          mapRange: Ke,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || qe(r));
            };
          },
          interpolate: function t(e, r, n, i) {
            var o = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!o) {
              var a,
                s,
                u,
                c,
                l,
                f = _t(e),
                h = {};
              if ((!0 === n && (i = 1) && (n = null), f))
                (e = { p: e }), (r = { p: r });
              else if (Lt(e) && !Lt(r)) {
                for (u = [], c = e.length, l = c - 2, s = 1; s < c; s++)
                  u.push(t(e[s - 1], e[s]));
                c--,
                  (o = function (t) {
                    t *= c;
                    var e = Math.min(l, ~~t);
                    return u[e](t - e);
                  }),
                  (n = r);
              } else i || (e = pe(Lt(e) ? [] : {}, e));
              if (!u) {
                for (a in r) Ar.call(h, e, a, "get", r[a]);
                o = function (t) {
                  return Qr(t, h) || (f ? e.p : e);
                };
              }
            }
            return Ie(n, o);
          },
          shuffle: Xe,
        },
        install: Nt,
        effects: Jt,
        ticker: dr,
        updateRoot: Pr.updateRoot,
        plugins: Qt,
        globalTimeline: Q,
        core: {
          PropTween: tn,
          globals: qt,
          Tween: Gr,
          Timeline: Pr,
          Animation: Lr,
          getCache: ee,
          _removeLinkedListItem: ge,
          reverting: function () {
            return V;
          },
          context: function (t) {
            return t && W && (W.data.push(t), (t._ctx = W)), W;
          },
          suppressOverwrites: function (t) {
            return (X = t);
          },
        },
      };
    ne("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (fn[t] = Gr[t]);
    }),
      dr.add(Pr.updateRoot),
      (et = fn.to({}, { duration: 0 }));
    var hn = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      pn = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, n) {
            n._onInit = function (t) {
              var n, i;
              if (
                (_t(r) &&
                  ((n = {}),
                  ne(r, function (t) {
                    return (n[t] = 1);
                  }),
                  (r = n)),
                e)
              ) {
                for (i in ((n = {}), r)) n[i] = e(r[i]);
                r = n;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  o = t._targets;
                for (r in e)
                  for (n = o.length; n--; )
                    (i = t._ptLookup[n][r]) &&
                      (i = i.d) &&
                      (i._pt && (i = hn(i, r)),
                      i && i.modifier && i.modifier(e[r], t, o[n], r));
              })(t, r);
            };
          },
        };
      },
      dn =
        fn.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, n, i) {
              var o, a, s;
              for (o in ((this.tween = r), e))
                (s = t.getAttribute(o) || ""),
                  ((a = this.add(
                    t,
                    "setAttribute",
                    (s || 0) + "",
                    e[o],
                    n,
                    i,
                    0,
                    0,
                    o,
                  )).op = o),
                  (a.b = s),
                  this._props.push(o);
            },
            render: function (t, e) {
              for (var r = e._pt; r; )
                V ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
            },
          },
          pn("roundProps", We),
          pn("modifiers"),
          pn("snap", Qe),
        ) || fn;
    (Gr.version = Pr.version = dn.version = "3.12.7"),
      (K = 1),
      Et() && yr(),
      vr.Power0,
      vr.Power1,
      vr.Power2,
      vr.Power3,
      vr.Power4,
      vr.Linear,
      vr.Quad,
      vr.Cubic,
      vr.Quart,
      vr.Quint,
      vr.Strong,
      vr.Elastic,
      vr.Back,
      vr.SteppedEase,
      vr.Bounce,
      vr.Sine,
      vr.Expo,
      vr.Circ;
    var yn,
      vn,
      mn,
      gn,
      _n,
      bn,
      wn,
      xn,
      Tn = {},
      On = 180 / Math.PI,
      En = Math.PI / 180,
      kn = Math.atan2,
      Sn = /([A-Z])/g,
      Ln = /(left|right|width|margin|padding|x)/i,
      Pn = /[\s,\(]\S/,
      jn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Mn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      Cn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      An = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e,
        );
      },
      Rn = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Fn = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Dn = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      zn = function (t, e, r) {
        return (t.style[e] = r);
      },
      Nn = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      In = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      Gn = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      qn = function (t, e, r, n, i) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
      },
      Bn = function (t, e, r, n, i) {
        var o = t._gsap;
        (o[e] = r), o.renderTransform(i, o);
      },
      Yn = "transform",
      Hn = Yn + "Origin",
      Un = function t(e, r) {
        var n = this,
          i = this.target,
          o = i.style,
          a = i._gsap;
        if (e in Tn && o) {
          if (((this.tfm = this.tfm || {}), "transform" === e))
            return jn.transform.split(",").forEach(function (e) {
              return t.call(n, e, r);
            });
          if (
            (~(e = jn[e] || e).indexOf(",")
              ? e.split(",").forEach(function (t) {
                  return (n.tfm[t] = ci(i, t));
                })
              : (this.tfm[e] = a.x ? a[e] : ci(i, e)),
            e === Hn && (this.tfm.zOrigin = a.zOrigin),
            this.props.indexOf(Yn) >= 0)
          )
            return;
          a.svg &&
            ((this.svgo = i.getAttribute("data-svg-origin")),
            this.props.push(Hn, r, "")),
            (e = Yn);
        }
        (o || r) && this.props.push(e, r, o[e]);
      },
      Xn = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
      },
      Vn = function () {
        var t,
          e,
          r = this.props,
          n = this.target,
          i = n.style,
          o = n._gsap;
        for (t = 0; t < r.length; t += 3)
          r[t + 1]
            ? 2 === r[t + 1]
              ? n[r[t]](r[t + 2])
              : (n[r[t]] = r[t + 2])
            : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(Sn, "-$1").toLowerCase(),
                );
        if (this.tfm) {
          for (e in this.tfm) o[e] = this.tfm[e];
          o.svg &&
            (o.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            ((t = wn()) && t.isStart) ||
              i[Yn] ||
              (Xn(i),
              o.zOrigin &&
                i[Hn] &&
                ((i[Hn] += " " + o.zOrigin + "px"),
                (o.zOrigin = 0),
                o.renderTransform()),
              (o.uncache = 1));
        }
      },
      Wn = function (t, e) {
        var r = { target: t, props: [], revert: Vn, save: Un };
        return (
          t._gsap || dn.core.getCache(t),
          e &&
            t.style &&
            t.nodeType &&
            e.split(",").forEach(function (t) {
              return r.save(t);
            }),
          r
        );
      },
      Qn = function (t, e) {
        var r = vn.createElementNS
          ? vn.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t,
            )
          : vn.createElement(t);
        return r && r.style ? r : vn.createElement(t);
      },
      Jn = function t(e, r, n) {
        var i = getComputedStyle(e);
        return (
          i[r] ||
          i.getPropertyValue(r.replace(Sn, "-$1").toLowerCase()) ||
          i.getPropertyValue(r) ||
          (!n && t(e, $n(r) || r, 1)) ||
          ""
        );
      },
      Zn = "O,Moz,ms,Ms,Webkit".split(","),
      $n = function (t, e, r) {
        var n = (e || _n).style,
          i = 5;
        if (t in n && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(Zn[i] + t in n);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Zn[i] : "") + t;
      },
      Kn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((yn = window),
          (vn = yn.document),
          (mn = vn.documentElement),
          (_n = Qn("div") || { style: {} }),
          Qn("div"),
          (Yn = $n(Yn)),
          (Hn = Yn + "Origin"),
          (_n.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (xn = !!$n("perspective")),
          (wn = dn.core.reverting),
          (gn = 1));
      },
      ti = function (t) {
        var e,
          r = t.ownerSVGElement,
          n = Qn(
            "svg",
            (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
          ),
          i = t.cloneNode(!0);
        (i.style.display = "block"), n.appendChild(i), mn.appendChild(n);
        try {
          e = i.getBBox();
        } catch (t) {}
        return n.removeChild(i), mn.removeChild(n), e;
      },
      ei = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      ri = function (t) {
        var e, r;
        try {
          e = t.getBBox();
        } catch (n) {
          (e = ti(t)), (r = 1);
        }
        return (
          (e && (e.width || e.height)) || r || (e = ti(t)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +ei(t, ["x", "cx", "x1"]) || 0,
                y: +ei(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      ni = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ri(t));
      },
      ii = function (t, e) {
        if (e) {
          var r,
            n = t.style;
          e in Tn && e !== Hn && (e = Yn),
            n.removeProperty
              ? (("ms" !== (r = e.substr(0, 2)) &&
                  "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                n.removeProperty(
                  "--" === r ? e : e.replace(Sn, "-$1").toLowerCase(),
                ))
              : n.removeAttribute(e);
        }
      },
      oi = function (t, e, r, n, i, o) {
        var a = new tn(t._pt, e, r, 0, 1, o ? Dn : Fn);
        return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
      },
      ai = { deg: 1, rad: 1, turn: 1 },
      si = { grid: 1, flex: 1 },
      ui = function t(e, r, n, i) {
        var o,
          a,
          s,
          u,
          c = parseFloat(n) || 0,
          l = (n + "").trim().substr((c + "").length) || "px",
          f = _n.style,
          h = Ln.test(r),
          p = "svg" === e.tagName.toLowerCase(),
          d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
          y = 100,
          v = "px" === i,
          m = "%" === i;
        if (i === l || !c || ai[i] || ai[l]) return c;
        if (
          ("px" !== l && !v && (c = t(e, r, n, "px")),
          (u = e.getCTM && ni(e)),
          (m || "%" === l) && (Tn[r] || ~r.indexOf("adius")))
        )
          return (
            (o = u ? e.getBBox()[h ? "width" : "height"] : e[d]),
            ie(m ? (c / o) * y : (c / 100) * o)
          );
        if (
          ((f[h ? "width" : "height"] = y + (v ? l : i)),
          (a =
            ("rem" !== i && ~r.indexOf("adius")) ||
            ("em" === i && e.appendChild && !p)
              ? e
              : e.parentNode),
          u && (a = (e.ownerSVGElement || {}).parentNode),
          (a && a !== vn && a.appendChild) || (a = vn.body),
          (s = a._gsap) &&
            m &&
            s.width &&
            h &&
            s.time === dr.time &&
            !s.uncache)
        )
          return ie((c / s.width) * y);
        if (!m || ("height" !== r && "width" !== r))
          (m || "%" === l) &&
            !si[Jn(a, "display")] &&
            (f.position = Jn(e, "position")),
            a === e && (f.position = "static"),
            a.appendChild(_n),
            (o = _n[d]),
            a.removeChild(_n),
            (f.position = "absolute");
        else {
          var g = e.style[r];
          (e.style[r] = y + i), (o = e[d]), g ? (e.style[r] = g) : ii(e, r);
        }
        return (
          h && m && (((s = ee(a)).time = dr.time), (s.width = a[d])),
          ie(v ? (o * c) / y : o && c ? (y / o) * c : 0)
        );
      },
      ci = function (t, e, r, n) {
        var i;
        return (
          gn || Kn(),
          e in jn &&
            "transform" !== e &&
            ~(e = jn[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          Tn[e] && "transform" !== e
            ? ((i = bi(t, n)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : i.svg
                    ? i.origin
                    : wi(Jn(t, Hn)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                n ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (pi[e] && pi[e](t, e, r)) ||
                Jn(t, e) ||
                re(t, e) ||
                ("opacity" === e ? 1 : 0)),
          r && !~(i + "").trim().indexOf(" ") ? ui(t, e, i, r) + r : i
        );
      },
      li = function (t, e, r, n) {
        if (!r || "none" === r) {
          var i = $n(e, t, 1),
            o = i && Jn(t, i, 1);
          o && o !== r
            ? ((e = i), (r = o))
            : "borderColor" === e && (r = Jn(t, "borderTopColor"));
        }
        var a,
          s,
          u,
          c,
          l,
          f,
          h,
          p,
          d,
          y,
          v,
          m = new tn(this._pt, t.style, e, 0, 1, Wr),
          g = 0,
          _ = 0;
        if (
          ((m.b = r),
          (m.e = n),
          (r += ""),
          "auto" == (n += "") &&
            ((f = t.style[e]),
            (t.style[e] = n),
            (n = Jn(t, e) || n),
            f ? (t.style[e] = f) : ii(t, e)),
          pr((a = [r, n])),
          (n = a[1]),
          (u = (r = a[0]).match(Mt) || []),
          (n.match(Mt) || []).length)
        ) {
          for (; (s = Mt.exec(n)); )
            (h = s[0]),
              (d = n.substring(g, s.index)),
              l
                ? (l = (l + 1) % 5)
                : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                  (l = 1),
              h !== (f = u[_++] || "") &&
                ((c = parseFloat(f) || 0),
                (v = f.substr((c + "").length)),
                "=" === h.charAt(1) && (h = ae(c, h) + v),
                (p = parseFloat(h)),
                (y = h.substr((p + "").length)),
                (g = Mt.lastIndex - y.length),
                y ||
                  ((y = y || ct.units[e] || v),
                  g === n.length && ((n += y), (m.e += y))),
                v !== y && (c = ui(t, e, f, y) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: d || 1 === _ ? d : ",",
                  s: c,
                  c: p - c,
                  m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
                }));
          m.c = g < n.length ? n.substring(g, n.length) : "";
        } else m.r = "display" === e && "none" === n ? Dn : Fn;
        return At.test(n) && (m.e = 0), (this._pt = m), m;
      },
      fi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      hi = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            o = e.t,
            a = o.style,
            s = e.u,
            u = o._gsap;
          if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
          else
            for (i = (s = s.split(",")).length; --i > -1; )
              (r = s[i]),
                Tn[r] && ((n = 1), (r = "transformOrigin" === r ? Hn : Yn)),
                ii(o, r);
          n &&
            (ii(o, Yn),
            u &&
              (u.svg && o.removeAttribute("transform"),
              (a.scale = a.rotate = a.translate = "none"),
              bi(o, 1),
              (u.uncache = 1),
              Xn(a)));
        }
      },
      pi = {
        clearProps: function (t, e, r, n, i) {
          if ("isFromStart" !== i.data) {
            var o = (t._pt = new tn(t._pt, e, r, 0, 0, hi));
            return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
          }
        },
      },
      di = [1, 0, 0, 1, 0, 0],
      yi = {},
      vi = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      mi = function (t) {
        var e = Jn(t, Yn);
        return vi(e) ? di : e.substr(7).match(jt).map(ie);
      },
      gi = function (t, e) {
        var r,
          n,
          i,
          o,
          a = t._gsap || ee(t),
          s = t.style,
          u = mi(t);
        return a.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (u = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? di
            : u
          : (u !== di ||
              t.offsetParent ||
              t === mn ||
              a.svg ||
              ((i = s.display),
              (s.display = "block"),
              ((r = t.parentNode) &&
                (t.offsetParent || t.getBoundingClientRect().width)) ||
                ((o = 1), (n = t.nextElementSibling), mn.appendChild(t)),
              (u = mi(t)),
              i ? (s.display = i) : ii(t, "display"),
              o &&
                (n
                  ? r.insertBefore(t, n)
                  : r
                    ? r.appendChild(t)
                    : mn.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      },
      _i = function (t, e, r, n, i, o) {
        var a,
          s,
          u,
          c = t._gsap,
          l = i || gi(t, !0),
          f = c.xOrigin || 0,
          h = c.yOrigin || 0,
          p = c.xOffset || 0,
          d = c.yOffset || 0,
          y = l[0],
          v = l[1],
          m = l[2],
          g = l[3],
          _ = l[4],
          b = l[5],
          w = e.split(" "),
          x = parseFloat(w[0]) || 0,
          T = parseFloat(w[1]) || 0;
        r
          ? l !== di &&
            (s = y * g - v * m) &&
            ((u = x * (-v / s) + T * (y / s) - (y * b - v * _) / s),
            (x = x * (g / s) + T * (-m / s) + (m * b - g * _) / s),
            (T = u))
          : ((x =
              (a = ri(t)).x + (~w[0].indexOf("%") ? (x / 100) * a.width : x)),
            (T =
              a.y + (~(w[1] || w[0]).indexOf("%") ? (T / 100) * a.height : T))),
          n || (!1 !== n && c.smooth)
            ? ((_ = x - f),
              (b = T - h),
              (c.xOffset = p + (_ * y + b * m) - _),
              (c.yOffset = d + (_ * v + b * g) - b))
            : (c.xOffset = c.yOffset = 0),
          (c.xOrigin = x),
          (c.yOrigin = T),
          (c.smooth = !!n),
          (c.origin = e),
          (c.originIsAbsolute = !!r),
          (t.style[Hn] = "0px 0px"),
          o &&
            (oi(o, c, "xOrigin", f, x),
            oi(o, c, "yOrigin", h, T),
            oi(o, c, "xOffset", p, c.xOffset),
            oi(o, c, "yOffset", d, c.yOffset)),
          t.setAttribute("data-svg-origin", x + " " + T);
      },
      bi = function (t, e) {
        var r = t._gsap || new Sr(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          h,
          p,
          d,
          y,
          v,
          m,
          g,
          _,
          b,
          w,
          x,
          T,
          O,
          E,
          k,
          S,
          L,
          P,
          j,
          M,
          C,
          A,
          R,
          F = t.style,
          D = r.scaleX < 0,
          z = "px",
          N = "deg",
          I = getComputedStyle(t),
          G = Jn(t, Hn) || "0";
        return (
          (n = i = o = u = c = l = f = h = p = 0),
          (a = s = 1),
          (r.svg = !(!t.getCTM || !ni(t))),
          I.translate &&
            (("none" === I.translate &&
              "none" === I.scale &&
              "none" === I.rotate) ||
              (F[Yn] =
                ("none" !== I.translate
                  ? "translate3d(" +
                    (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") +
                ("none" !== I.scale
                  ? "scale(" + I.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== I[Yn] ? I[Yn] : "")),
            (F.scale = F.rotate = F.translate = "none")),
          (v = gi(t, r.svg)),
          r.svg &&
            (r.uncache
              ? ((S = t.getBBox()),
                (G = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px"),
                (k = ""))
              : (k = !e && t.getAttribute("data-svg-origin")),
            _i(t, k || G, !!k || r.originIsAbsolute, !1 !== r.smooth, v)),
          (d = r.xOrigin || 0),
          (y = r.yOrigin || 0),
          v !== di &&
            ((b = v[0]),
            (w = v[1]),
            (x = v[2]),
            (T = v[3]),
            (n = O = v[4]),
            (i = E = v[5]),
            6 === v.length
              ? ((a = Math.sqrt(b * b + w * w)),
                (s = Math.sqrt(T * T + x * x)),
                (u = b || w ? kn(w, b) * On : 0),
                (f = x || T ? kn(x, T) * On + u : 0) &&
                  (s *= Math.abs(Math.cos(f * En))),
                r.svg &&
                  ((n -= d - (d * b + y * x)), (i -= y - (d * w + y * T))))
              : ((R = v[6]),
                (C = v[7]),
                (P = v[8]),
                (j = v[9]),
                (M = v[10]),
                (A = v[11]),
                (n = v[12]),
                (i = v[13]),
                (o = v[14]),
                (c = (m = kn(R, M)) * On),
                m &&
                  ((k = O * (g = Math.cos(-m)) + P * (_ = Math.sin(-m))),
                  (S = E * g + j * _),
                  (L = R * g + M * _),
                  (P = O * -_ + P * g),
                  (j = E * -_ + j * g),
                  (M = R * -_ + M * g),
                  (A = C * -_ + A * g),
                  (O = k),
                  (E = S),
                  (R = L)),
                (l = (m = kn(-x, M)) * On),
                m &&
                  ((g = Math.cos(-m)),
                  (A = T * (_ = Math.sin(-m)) + A * g),
                  (b = k = b * g - P * _),
                  (w = S = w * g - j * _),
                  (x = L = x * g - M * _)),
                (u = (m = kn(w, b)) * On),
                m &&
                  ((k = b * (g = Math.cos(m)) + w * (_ = Math.sin(m))),
                  (S = O * g + E * _),
                  (w = w * g - b * _),
                  (E = E * g - O * _),
                  (b = k),
                  (O = S)),
                c &&
                  Math.abs(c) + Math.abs(u) > 359.9 &&
                  ((c = u = 0), (l = 180 - l)),
                (a = ie(Math.sqrt(b * b + w * w + x * x))),
                (s = ie(Math.sqrt(E * E + R * R))),
                (m = kn(O, E)),
                (f = Math.abs(m) > 2e-4 ? m * On : 0),
                (p = A ? 1 / (A < 0 ? -A : A) : 0)),
            r.svg &&
              ((k = t.getAttribute("transform")),
              (r.forceCSS = t.setAttribute("transform", "") || !vi(Jn(t, Yn))),
              k && t.setAttribute("transform", k))),
          Math.abs(f) > 90 &&
            Math.abs(f) < 270 &&
            (D
              ? ((a *= -1),
                (f += u <= 0 ? 180 : -180),
                (u += u <= 0 ? 180 : -180))
              : ((s *= -1), (f += f <= 0 ? 180 : -180))),
          (e = e || r.uncache),
          (r.x =
            n -
            ((r.xPercent =
              n &&
              ((!e && r.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
              ? (t.offsetWidth * r.xPercent) / 100
              : 0) +
            z),
          (r.y =
            i -
            ((r.yPercent =
              i &&
              ((!e && r.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetHeight * r.yPercent) / 100
              : 0) +
            z),
          (r.z = o + z),
          (r.scaleX = ie(a)),
          (r.scaleY = ie(s)),
          (r.rotation = ie(u) + N),
          (r.rotationX = ie(c) + N),
          (r.rotationY = ie(l) + N),
          (r.skewX = f + N),
          (r.skewY = h + N),
          (r.transformPerspective = p + z),
          (r.zOrigin = parseFloat(G.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
            (F[Hn] = wi(G)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = ct.force3D),
          (r.renderTransform = r.svg ? Li : xn ? Si : Ti),
          (r.uncache = 0),
          r
        );
      },
      wi = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      xi = function (t, e, r) {
        var n = qe(e);
        return ie(parseFloat(e) + parseFloat(ui(t, "x", r + "px", n))) + n;
      },
      Ti = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          Si(t, e);
      },
      Oi = "0deg",
      Ei = "0px",
      ki = ") ",
      Si = function (t, e) {
        var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          o = r.x,
          a = r.y,
          s = r.z,
          u = r.rotation,
          c = r.rotationY,
          l = r.rotationX,
          f = r.skewX,
          h = r.skewY,
          p = r.scaleX,
          d = r.scaleY,
          y = r.transformPerspective,
          v = r.force3D,
          m = r.target,
          g = r.zOrigin,
          _ = "",
          b = ("auto" === v && t && 1 !== t) || !0 === v;
        if (g && (l !== Oi || c !== Oi)) {
          var w,
            x = parseFloat(c) * En,
            T = Math.sin(x),
            O = Math.cos(x);
          (x = parseFloat(l) * En),
            (w = Math.cos(x)),
            (o = xi(m, o, T * w * -g)),
            (a = xi(m, a, -Math.sin(x) * -g)),
            (s = xi(m, s, O * w * -g + g));
        }
        y !== Ei && (_ += "perspective(" + y + ki),
          (n || i) && (_ += "translate(" + n + "%, " + i + "%) "),
          (b || o !== Ei || a !== Ei || s !== Ei) &&
            (_ +=
              s !== Ei || b
                ? "translate3d(" + o + ", " + a + ", " + s + ") "
                : "translate(" + o + ", " + a + ki),
          u !== Oi && (_ += "rotate(" + u + ki),
          c !== Oi && (_ += "rotateY(" + c + ki),
          l !== Oi && (_ += "rotateX(" + l + ki),
          (f === Oi && h === Oi) || (_ += "skew(" + f + ", " + h + ki),
          (1 === p && 1 === d) || (_ += "scale(" + p + ", " + d + ki),
          (m.style[Yn] = _ || "translate(0, 0)");
      },
      Li = function (t, e) {
        var r,
          n,
          i,
          o,
          a,
          s = e || this,
          u = s.xPercent,
          c = s.yPercent,
          l = s.x,
          f = s.y,
          h = s.rotation,
          p = s.skewX,
          d = s.skewY,
          y = s.scaleX,
          v = s.scaleY,
          m = s.target,
          g = s.xOrigin,
          _ = s.yOrigin,
          b = s.xOffset,
          w = s.yOffset,
          x = s.forceCSS,
          T = parseFloat(l),
          O = parseFloat(f);
        (h = parseFloat(h)),
          (p = parseFloat(p)),
          (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
          h || p
            ? ((h *= En),
              (p *= En),
              (r = Math.cos(h) * y),
              (n = Math.sin(h) * y),
              (i = Math.sin(h - p) * -v),
              (o = Math.cos(h - p) * v),
              p &&
                ((d *= En),
                (a = Math.tan(p - d)),
                (i *= a = Math.sqrt(1 + a * a)),
                (o *= a),
                d &&
                  ((a = Math.tan(d)),
                  (r *= a = Math.sqrt(1 + a * a)),
                  (n *= a))),
              (r = ie(r)),
              (n = ie(n)),
              (i = ie(i)),
              (o = ie(o)))
            : ((r = y), (o = v), (n = i = 0)),
          ((T && !~(l + "").indexOf("px")) ||
            (O && !~(f + "").indexOf("px"))) &&
            ((T = ui(m, "x", l, "px")), (O = ui(m, "y", f, "px"))),
          (g || _ || b || w) &&
            ((T = ie(T + g - (g * r + _ * i) + b)),
            (O = ie(O + _ - (g * n + _ * o) + w))),
          (u || c) &&
            ((a = m.getBBox()),
            (T = ie(T + (u / 100) * a.width)),
            (O = ie(O + (c / 100) * a.height))),
          (a =
            "matrix(" +
            r +
            "," +
            n +
            "," +
            i +
            "," +
            o +
            "," +
            T +
            "," +
            O +
            ")"),
          m.setAttribute("transform", a),
          x && (m.style[Yn] = a);
      },
      Pi = function (t, e, r, n, i) {
        var o,
          a,
          s = 360,
          u = _t(i),
          c = parseFloat(i) * (u && ~i.indexOf("rad") ? On : 1) - n,
          l = n + c + "deg";
        return (
          u &&
            ("short" === (o = i.split("_")[1]) &&
              (c %= s) != c % 180 &&
              (c += c < 0 ? s : -360),
            "cw" === o && c < 0
              ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
              : "ccw" === o && c > 0 && (c = ((c - 36e9) % s) - ~~(c / s) * s)),
          (t._pt = a = new tn(t._pt, e, r, n, c, Cn)),
          (a.e = l),
          (a.u = "deg"),
          t._props.push(r),
          a
        );
      },
      ji = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      Mi = function (t, e, r) {
        var n,
          i,
          o,
          a,
          s,
          u,
          c,
          l = ji({}, r._gsap),
          f = r.style;
        for (i in (l.svg
          ? ((o = r.getAttribute("transform")),
            r.setAttribute("transform", ""),
            (f[Yn] = e),
            (n = bi(r, 1)),
            ii(r, Yn),
            r.setAttribute("transform", o))
          : ((o = getComputedStyle(r)[Yn]),
            (f[Yn] = e),
            (n = bi(r, 1)),
            (f[Yn] = o)),
        Tn))
          (o = l[i]) !== (a = n[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((s = qe(o) !== (c = qe(a)) ? ui(r, i, o, c) : parseFloat(o)),
            (u = parseFloat(a)),
            (t._pt = new tn(t._pt, n, i, s, u - s, Mn)),
            (t._pt.u = c || 0),
            t._props.push(i));
        ji(n, l);
      };
    ne("padding,margin,Width,Radius", function (t, e) {
      var r = "Top",
        n = "Right",
        i = "Bottom",
        o = "Left",
        a = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(
          function (r) {
            return e < 2 ? t + r : "border" + r + t;
          },
        );
      pi[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
        var o, s;
        if (arguments.length < 4)
          return (
            (o = a.map(function (e) {
              return ci(t, e, r);
            })),
            5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
          );
        (o = (n + "").split(" ")),
          (s = {}),
          a.forEach(function (t, e) {
            return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, s, i);
      };
    });
    var Ci,
      Ai,
      Ri = {
        name: "css",
        register: Kn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            f,
            h,
            p,
            d,
            y,
            v,
            m,
            g,
            _,
            b,
            w,
            x,
            T,
            O,
            E = this._props,
            k = t.style,
            S = r.vars.startAt;
          for (f in (gn || Kn(),
          (this.styles = this.styles || Wn(t)),
          (b = this.styles.props),
          (this.tween = r),
          e))
            if (
              "autoRound" !== f &&
              ((a = e[f]), !Qt[f] || !Rr(f, e, r, n, t, i))
            )
              if (
                ((c = typeof a),
                (l = pi[f]),
                "function" === c && (c = typeof (a = a.call(r, n, t, i))),
                "string" === c && ~a.indexOf("random(") && (a = $e(a)),
                l)
              )
                l(this, t, f, a, r) && (_ = 1);
              else if ("--" === f.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
                  (a += ""),
                  (fr.lastIndex = 0),
                  fr.test(o) || ((h = qe(o)), (p = qe(a))),
                  p ? h !== p && (o = ui(t, f, o, p) + p) : h && (a += h),
                  this.add(k, "setProperty", o, a, n, i, 0, 0, f),
                  E.push(f),
                  b.push(f, 0, k[f]);
              else if ("undefined" !== c) {
                if (
                  (S && f in S
                    ? ((o =
                        "function" == typeof S[f]
                          ? S[f].call(r, n, t, i)
                          : S[f]),
                      _t(o) && ~o.indexOf("random(") && (o = $e(o)),
                      qe(o + "") ||
                        "auto" === o ||
                        (o += ct.units[f] || qe(ci(t, f)) || ""),
                      "=" === (o + "").charAt(1) && (o = ci(t, f)))
                    : (o = ci(t, f)),
                  (u = parseFloat(o)),
                  (d =
                    "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (s = parseFloat(a)),
                  f in jn &&
                    ("autoAlpha" === f &&
                      (1 === u &&
                        "hidden" === ci(t, "visibility") &&
                        s &&
                        (u = 0),
                      b.push("visibility", 0, k.visibility),
                      oi(
                        this,
                        k,
                        "visibility",
                        u ? "inherit" : "hidden",
                        s ? "inherit" : "hidden",
                        !s,
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = jn[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (y = f in Tn))
                )
                  if (
                    (this.styles.save(f),
                    v ||
                      (((m = t._gsap).renderTransform && !e.parseTransform) ||
                        bi(t, e.parseTransform),
                      (g = !1 !== e.smoothOrigin && m.smooth),
                      ((v = this._pt =
                        new tn(
                          this._pt,
                          k,
                          Yn,
                          0,
                          1,
                          m.renderTransform,
                          m,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new tn(
                      this._pt,
                      m,
                      "scaleY",
                      m.scaleY,
                      (d ? ae(m.scaleY, d + s) : s) - m.scaleY || 0,
                      Mn,
                    )),
                      (this._pt.u = 0),
                      E.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      b.push(Hn, 0, k[Hn]),
                        (x = void 0),
                        (T = void 0),
                        (O = void 0),
                        (T = (x = (w = a).split(" "))[0]),
                        (O = x[1] || "50%"),
                        ("top" !== T &&
                          "bottom" !== T &&
                          "left" !== O &&
                          "right" !== O) ||
                          ((w = T), (T = O), (O = w)),
                        (x[0] = fi[T] || T),
                        (x[1] = fi[O] || O),
                        (a = x.join(" ")),
                        m.svg
                          ? _i(t, a, 0, g, 0, this)
                          : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                              m.zOrigin && oi(this, m, "zOrigin", m.zOrigin, p),
                            oi(this, k, f, wi(o), wi(a)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      _i(t, a, 1, g, 0, this);
                      continue;
                    }
                    if (f in yi) {
                      Pi(this, m, f, u, d ? ae(u, d + a) : a);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      oi(this, m, "smooth", m.smooth, a);
                      continue;
                    }
                    if ("force3D" === f) {
                      m[f] = a;
                      continue;
                    }
                    if ("transform" === f) {
                      Mi(this, a, t);
                      continue;
                    }
                  }
                else f in k || (f = $n(f) || f);
                if (
                  y ||
                  ((s || 0 === s) && (u || 0 === u) && !Pn.test(a) && f in k)
                )
                  s || (s = 0),
                    (h = (o + "").substr((u + "").length)) !==
                      (p = qe(a) || (f in ct.units ? ct.units[f] : h)) &&
                      (u = ui(t, f, o, p)),
                    (this._pt = new tn(
                      this._pt,
                      y ? m : k,
                      f,
                      u,
                      (d ? ae(u, d + s) : s) - u,
                      y || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                        ? Mn
                        : Rn,
                    )),
                    (this._pt.u = p || 0),
                    h !== p &&
                      "%" !== p &&
                      ((this._pt.b = o), (this._pt.r = An));
                else if (f in k) li.call(this, t, f, o, d ? d + a : a);
                else if (f in t) this.add(t, f, o || t[f], d ? d + a : a, n, i);
                else if ("parseTransform" !== f) {
                  It(f, a);
                  continue;
                }
                y ||
                  (f in k
                    ? b.push(f, 0, k[f])
                    : "function" == typeof t[f]
                      ? b.push(f, 2, t[f]())
                      : b.push(f, 1, o || t[f])),
                  E.push(f);
              }
          _ && Kr(this);
        },
        render: function (t, e) {
          if (e.tween._time || !wn())
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          else e.styles.revert();
        },
        get: ci,
        aliases: jn,
        getSetter: function (t, e, r) {
          var n = jn[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in Tn && e !== Hn && (t._gsap.x || ci(t, "x"))
              ? r && bn === r
                ? "scale" === e
                  ? Gn
                  : In
                : (bn = r || {}) && ("scale" === e ? qn : Bn)
              : t.style && !xt(t.style[e])
                ? zn
                : ~e.indexOf("-")
                  ? Nn
                  : Ur(t, e)
          );
        },
        core: { _removeProperty: ii, _getMatrix: gi },
      };
    (dn.utils.checkPrefix = $n),
      (dn.core.getStyleSaver = Wn),
      (Ai = ne(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
          "," +
          (Ci = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Tn[t] = 1;
        },
      )),
      ne(Ci, function (t) {
        (ct.units[t] = "deg"), (yi[t] = 1);
      }),
      (jn[Ai[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ci),
      ne(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          jn[e[1]] = Ai[e[0]];
        },
      ),
      ne(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          ct.units[t] = "px";
        },
      ),
      dn.registerPlugin(Ri);
    var Fi = dn.registerPlugin(Ri) || dn;
    function Di(t) {
      return (
        (Di =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        Di(t)
      );
    }
    function zi() {
      zi = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        i =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function l(t, e, r, n) {
        var o = e && e.prototype instanceof m ? e : m,
          a = Object.create(o.prototype),
          s = new j(n || []);
        return i(a, "_invoke", { value: k(t, r, s) }), a;
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = l;
      var h = "suspendedStart",
        p = "suspendedYield",
        d = "executing",
        y = "completed",
        v = {};
      function m() {}
      function g() {}
      function _() {}
      var b = {};
      c(b, a, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        x = w && w(w(M([])));
      x && x !== r && n.call(x, a) && (b = x);
      var T = (_.prototype = m.prototype = Object.create(b));
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function E(t, e) {
        function r(i, o, a, s) {
          var u = f(t[i], t, o);
          if ("throw" !== u.type) {
            var c = u.arg,
              l = c.value;
            return l && "object" == Di(l) && n.call(l, "__await")
              ? e.resolve(l.__await).then(
                  function (t) {
                    r("next", t, a, s);
                  },
                  function (t) {
                    r("throw", t, a, s);
                  },
                )
              : e.resolve(l).then(
                  function (t) {
                    (c.value = t), a(c);
                  },
                  function (t) {
                    return r("throw", t, a, s);
                  },
                );
          }
          s(u.arg);
        }
        var o;
        i(this, "_invoke", {
          value: function (t, n) {
            function i() {
              return new e(function (e, i) {
                r(t, n, e, i);
              });
            }
            return (o = o ? o.then(i, i) : i());
          },
        });
      }
      function k(e, r, n) {
        var i = h;
        return function (o, a) {
          if (i === d) throw Error("Generator is already running");
          if (i === y) {
            if ("throw" === o) throw a;
            return { value: t, done: !0 };
          }
          for (n.method = o, n.arg = a; ; ) {
            var s = n.delegate;
            if (s) {
              var u = S(s, n);
              if (u) {
                if (u === v) continue;
                return u;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (i === h) throw ((i = y), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = d;
            var c = f(e, r, n);
            if ("normal" === c.type) {
              if (((i = n.done ? y : p), c.arg === v)) continue;
              return { value: c.arg, done: n.done };
            }
            "throw" === c.type &&
              ((i = y), (n.method = "throw"), (n.arg = c.arg));
          }
        };
      }
      function S(e, r) {
        var n = r.method,
          i = e.iterator[n];
        if (i === t)
          return (
            (r.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              S(e, r),
              "throw" === r.method)) ||
              ("return" !== n &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method",
                )))),
            v
          );
        var o = f(i, e.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), v;
        var a = o.arg;
        return a
          ? a.done
            ? ((r[e.resultName] = a.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              v)
            : a
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            v);
      }
      function L(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function j(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(L, this),
          this.reset(!0);
      }
      function M(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              o = function r() {
                for (; ++i < e.length; )
                  if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        throw new TypeError(Di(e) + " is not iterable");
      }
      return (
        (g.prototype = _),
        i(T, "constructor", { value: _, configurable: !0 }),
        i(_, "constructor", { value: g, configurable: !0 }),
        (g.displayName = c(_, u, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, _)
              : ((t.__proto__ = _), c(t, u, "GeneratorFunction")),
            (t.prototype = Object.create(T)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        O(E.prototype),
        c(E.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = E),
        (e.async = function (t, r, n, i, o) {
          void 0 === o && (o = Promise);
          var a = new E(l(t, r, n, i), o);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        O(T),
        c(T, u, "Generator"),
        c(T, a, function () {
          return this;
        }),
        c(T, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = M),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(P),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function i(n, i) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (r.next = n),
                i && ((r.method = "next"), (r.arg = t)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ("root" === a.tryLoc) return i("end");
              if (a.tryLoc <= this.prev) {
                var u = n.call(a, "catchLoc"),
                  c = n.call(a, "finallyLoc");
                if (u && c) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!c) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
              v
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), P(r), v;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  P(r);
                }
                return i;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: M(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              v
            );
          },
        }),
        e
      );
    }
    function Ni(t, e, r, n, i, o, a) {
      try {
        var s = t[o](a),
          u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, i);
    }
    function Ii(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, i) {
          var o = t.apply(e, r);
          function a(t) {
            Ni(o, n, i, a, s, "next", t);
          }
          function s(t) {
            Ni(o, n, i, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    Fi.core.Tween;
    var Gi = "https://notes-api.dicoding.dev/v2/notes",
      qi = document.querySelector("#notesList"),
      Bi = document.querySelector("form-add");
    function Yi(t) {
      var e = t.id,
        r = t.title,
        n = t.body;
      return '\n    <div data-noteid="'
        .concat(e, '" class="note-item">\n      <h3>')
        .concat(r, "</h3>\n      <p>")
        .concat(n, '</p>\n      <button class="archive-button" data-noteid="')
        .concat(
          e,
          '">Archive</button>\n      <button class="delete-button" data-noteid="',
        )
        .concat(e, '">Delete</button>\n    </div>\n  ');
    }
    var Hi = (function () {
      var t = Ii(
        zi().mark(function t() {
          var e, r, n, i, o;
          return zi().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.prev = 0), (t.next = 3), fetch(Gi);
                  case 3:
                    return (e = t.sent), (t.next = 6), e.json();
                  case 6:
                    return (
                      (r = t.sent).error
                        ? console.error(r.error)
                        : ((qi.innerHTML = r.data
                            .filter(function (t) {
                              return !t.archived;
                            })
                            .map(function (t) {
                              return Yi(t);
                            })
                            .join("")),
                          F(),
                          Y()),
                      (t.next = 10),
                      fetch("".concat(Gi, "/archived"))
                    );
                  case 10:
                    return (n = t.sent), (t.next = 13), n.json();
                  case 13:
                    if (!(i = t.sent).error) {
                      t.next = 18;
                      break;
                    }
                    console.error(i.error), (t.next = 24);
                    break;
                  case 18:
                    if ((o = document.querySelector("#archivedNotes"))) {
                      t.next = 22;
                      break;
                    }
                    return (
                      console.error("Elemen #archivedNotes tidak ditemukan!"),
                      t.abrupt("return")
                    );
                  case 22:
                    (o.innerHTML = i.data
                      .map(function (t) {
                        return '\n          <div data-noteid="'
                          .concat(t.id, '">\n            <h3>')
                          .concat(t.title, "</h3>\n            <p>")
                          .concat(
                            t.body,
                            '</p>\n            <button class="unarchive-button" data-noteid="',
                          )
                          .concat(
                            t.id,
                            '">Unarchive</button>\n          </div>\n        ',
                          );
                      })
                      .join("")),
                      z();
                  case 24:
                    t.next = 29;
                    break;
                  case 26:
                    (t.prev = 26),
                      (t.t0 = t.catch(0)),
                      console.error("Gagal mengambil catatan:", t.t0);
                  case 29:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 26]],
          );
        }),
      );
      return function () {
        return t.apply(this, arguments);
      };
    })();
    function Ui(t) {
      Fi.from(t, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" });
    }
    Hi(),
      Bi.addEventListener("add-note", function (t) {
        var e = t.detail;
        qi.insertAdjacentHTML("afterbegin", Yi(e)),
          Ui(
            document.querySelector(
              '[data-noteid="'.concat(CSS.escape(e.id), '"]'),
            ),
          ),
          F(),
          Y();
      }),
      qi.addEventListener(
        "click",
        (function () {
          var t = Ii(
            zi().mark(function t(e) {
              var r, n;
              return zi().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!e.target.classList.contains("delete-button")) {
                        t.next = 8;
                        break;
                      }
                      return (
                        e.preventDefault(),
                        (r = e.target.getAttribute("data-noteid")),
                        console.log("Menghapus note dengan ID:", r),
                        (t.next = 6),
                        B(r)
                      );
                    case 6:
                      (n = document.querySelector(
                        '[data-noteid="'.concat(CSS.escape(r), '"]'),
                      )),
                        Fi.to(n, {
                          opacity: 0,
                          y: -20,
                          duration: 0.3,
                          onComplete: function () {
                            return n.remove();
                          },
                        });
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      ),
      setInterval(function () {
        console.log("Mengambil note terbaru..."), Hi();
      }, 5e3);
  })();
})();
