!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o,r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=d||l||Function("return this")(),v=Object.prototype.toString,b=Math.max,y=Math.min,p=function(){return s.Date.now()};function m(t,e,n){var o,i,u,f,a,c,d=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(r);function m(e){var n=o,r=i;return o=i=void 0,d=e,f=t.apply(r,n)}function h(t){return d=t,a=setTimeout(S,e),l?m(t):f}function O(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-d>=u}function S(){var t=p();if(O(t))return T(t);a=setTimeout(S,function(t){var n=e-(t-c);return s?y(n,u-(t-d)):n}(t))}function T(t){return a=void 0,v&&o?m(t):(o=i=void 0,f)}function w(){var t=p(),n=O(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return h(c);if(s)return a=setTimeout(S,e),m(c)}return void 0===a&&(a=setTimeout(S,e)),f}return e=j(e)||0,g(n)&&(l=!!n.leading,u=(s="maxWait"in n)?b(j(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),d=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?f:T(p())},w}function g(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=g(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}var h=document.querySelector("[data-start]"),O=document.querySelector("[data-stop]"),S=document.querySelector("body");h.addEventListener("click",(function(){o=setInterval((function(){S.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),h.disabled=!0,O.disabled=!1}),1e3)})),O.addEventListener("click",(function(){clearInterval(o),h.disabled=!1,O.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.8a61c921.js.map