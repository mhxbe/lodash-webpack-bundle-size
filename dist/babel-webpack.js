!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=3)}([function(n,r){n.exports=function(n,r){for(var t=-1,e=null==n?0:n.length,o=Array(e);++t<e;)o[t]=r(n[t],t,n);return o}},function(n,r,t){var e=t(2);n.exports=function(n,r,t){var o=null==n?void 0:e(n,r);return void 0===o?t:o}},function(n,r){n.exports=function(n,r){return null==n?void 0:n[r]}},function(n,r,t){"use strict";t.r(r);var e=function(n,r){for(var t,e=-1,o=n.length;++e<o;){var u=r(n[e]);void 0!==u&&(t=void 0===t?u:t+u)}return t};var o=function(n){return n};var u=function(n){return n&&n.length?e(n,o):0};var i=function(n){return n};var f=function(n){return n};var l=function(n,r){return function(t,e){var o;if(void 0===t&&void 0===e)return r;if(void 0!==t&&(o=t),void 0!==e){if(void 0===o)return e;"string"==typeof t||"string"==typeof e?(t=f(t),e=f(e)):(t=i(t),e=i(e)),o=n(t,e)}return o}}(function(n,r){return n-r},0),c=t(0),a=t.n(c),v=t(1),s=t.n(v);console.log("Map (multiply by 2)",a()([1,2,3],function(n){return 2*n}));console.log("get:",s()({names:{first:"John",last:"Doe"}},"names.first","Anon")),console.log("Subtract (100 - 20)",l(100,20)),console.log("Sum (10 + 3)",u([10,3]))}]);