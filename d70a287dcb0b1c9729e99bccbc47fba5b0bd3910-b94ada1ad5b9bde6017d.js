(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[9912],{9483:function(t,r,n){var e=n(7854),o=n(4411),i=n(6330),c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a constructor")}},1223:function(t,r,n){var e=n(5112),o=n(30),i=n(3070).f,c=e("unscopables"),u=Array.prototype;null==u[c]&&i(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},7475:function(t,r,n){var e=n(7854),o=n(3157),i=n(4411),c=n(111),u=n(5112)("species"),a=e.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===a||o(r.prototype))||c(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?a:r}},5417:function(t,r,n){var e=n(7475);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},648:function(t,r,n){var e=n(7854),o=n(1694),i=n(614),c=n(4326),u=n(5112)("toStringTag"),a=e.Object,f="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(n){}}(r=a(t),u))?n:f?c(r):"Object"==(e=c(r))&&i(r.callee)?"Arguments":e}},6790:function(t,r,n){"use strict";var e=n(7854),o=n(3157),i=n(6244),c=n(9974),u=e.TypeError,a=function(t,r,n,e,f,s,l,p){for(var v,d,g=f,h=0,m=!!l&&c(l,p);h<e;){if(h in n){if(v=m?m(n[h],h,r):n[h],s>0&&o(v))d=i(v),g=a(t,r,v,d,g,s-1)-1;else{if(g>=9007199254740991)throw u("Exceed the acceptable array length");t[g]=v}g++}h++}return g};t.exports=a},9974:function(t,r,n){var e=n(1702),o=n(9662),i=n(4374),c=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?c(t,r):function(){return t.apply(r,arguments)}}},647:function(t,r,n){var e=n(1702),o=n(7908),i=Math.floor,c=e("".charAt),u=e("".replace),a=e("".slice),f=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,n,e,l,p){var v=n+t.length,d=e.length,g=s;return void 0!==l&&(l=o(l),g=f),u(p,g,(function(o,u){var f;switch(c(u,0)){case"$":return"$";case"&":return t;case"`":return a(r,0,n);case"'":return a(r,v);case"<":f=l[a(u,1,-1)];break;default:var s=+u;if(0===s)return o;if(s>d){var p=i(s/10);return 0===p?o:p<=d?void 0===e[p-1]?c(u,1):e[p-1]+c(u,1):o}f=e[s-1]}return void 0===f?"":f}))}},490:function(t,r,n){var e=n(5005);t.exports=e("document","documentElement")},3157:function(t,r,n){var e=n(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},4411:function(t,r,n){var e=n(1702),o=n(7293),i=n(614),c=n(648),u=n(5005),a=n(2788),f=function(){},s=[],l=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=e(p.exec),d=!p.exec(f),g=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(r){return!1}},h=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,a(t))}catch(r){return!0}};h.sham=!0,t.exports=!l||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?h:g},7850:function(t,r,n){var e=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var r;return e(t)&&(void 0!==(r=t[i])?!!r:"RegExp"==o(t))}},8523:function(t,r,n){"use strict";var e=n(9662),o=function(t){var r,n;this.promise=new t((function(t,e){if(void 0!==r||void 0!==n)throw TypeError("Bad Promise constructor");r=t,n=e})),this.resolve=e(r),this.reject=e(n)};t.exports.f=function(t){return new o(t)}},30:function(t,r,n){var e,o=n(9670),i=n(6048),c=n(748),u=n(3501),a=n(490),f=n(317),s=n(6200),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r},g=function(){try{e=new ActiveXObject("htmlfile")}catch(o){}var t,r;g="undefined"!=typeof document?document.domain&&e?d(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):d(e);for(var n=c.length;n--;)delete g.prototype[c[n]];return g()};u[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=g(),void 0===r?n:i.f(n,r)}},6048:function(t,r,n){var e=n(9781),o=n(3353),i=n(3070),c=n(9670),u=n(5656),a=n(1956);r.f=e&&!o?Object.defineProperties:function(t,r){c(t);for(var n,e=u(r),o=a(r),f=o.length,s=0;f>s;)i.f(t,n=o[s++],e[n]);return t}},1956:function(t,r,n){var e=n(6324),o=n(748);t.exports=Object.keys||function(t){return e(t,o)}},2492:function(t,r,n){var e=n(7854);t.exports=e.Promise},9478:function(t,r,n){var e=n(9670),o=n(111),i=n(8523);t.exports=function(t,r){if(e(t),o(r)&&r.constructor===t)return r;var n=i.f(t);return(0,n.resolve)(r),n.promise}},7066:function(t,r,n){"use strict";var e=n(9670);t.exports=function(){var t=e(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},4706:function(t,r,n){var e=n(6916),o=n(2597),i=n(7976),c=n(7066),u=RegExp.prototype;t.exports=function(t){var r=t.flags;return void 0!==r||"flags"in u||o(t,"flags")||!i(u,t)?r:e(c,t)}},6707:function(t,r,n){var e=n(9670),o=n(9483),i=n(5112)("species");t.exports=function(t,r){var n,c=e(t).constructor;return void 0===c||null==(n=e(c)[i])?r:o(n)}},365:function(t,r,n){"use strict";var e=n(3111).end,o=n(6091);t.exports=o("trimEnd")?function(){return e(this)}:"".trimEnd},6091:function(t,r,n){var e=n(6530).PROPER,o=n(7293),i=n(1361);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||e&&i[t].name!==t}))}},3217:function(t,r,n){"use strict";var e=n(3111).start,o=n(6091);t.exports=o("trimStart")?function(){return e(this)}:"".trimStart},3111:function(t,r,n){var e=n(1702),o=n(4488),i=n(1340),c=n(1361),u=e("".replace),a="["+c+"]",f=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),l=function(t){return function(r){var n=i(o(r));return 1&t&&(n=u(n,f,"")),2&t&&(n=u(n,s,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},1694:function(t,r,n){var e={};e[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},1340:function(t,r,n){var e=n(7854),o=n(648),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6535:function(t,r,n){"use strict";var e=n(2109),o=n(6790),i=n(9662),c=n(7908),u=n(6244),a=n(5417);e({target:"Array",proto:!0},{flatMap:function(t){var r,n=c(this),e=u(n);return i(t),(r=a(n,0)).length=o(r,n,n,e,0,1,t,arguments.length>1?arguments[1]:void 0),r}})},9244:function(t,r,n){n(1223)("flatMap")},5438:function(t,r,n){var e=n(2109),o=Math.hypot,i=Math.abs,c=Math.sqrt;e({target:"Math",stat:!0,arity:2,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,r){for(var n,e,o=0,u=0,a=arguments.length,f=0;u<a;)f<(n=i(arguments[u++]))?(o=o*(e=f/n)*e+1,f=n):o+=n>0?(e=n/f)*e:n;return f===1/0?1/0:f*c(o)}})},7727:function(t,r,n){"use strict";var e=n(2109),o=n(1913),i=n(2492),c=n(7293),u=n(5005),a=n(614),f=n(6707),s=n(9478),l=n(8052),p=i&&i.prototype;if(e({target:"Promise",proto:!0,real:!0,forced:!!i&&c((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var r=f(this,u("Promise")),n=a(t);return this.then(n?function(n){return s(r,t()).then((function(){return n}))}:t,n?function(n){return s(r,t()).then((function(){throw n}))}:t)}}),!o&&a(i)){var v=u("Promise").prototype.finally;p.finally!==v&&l(p,"finally",v,{unsafe:!0})}},8757:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(6916),c=n(1702),u=n(4488),a=n(614),f=n(7850),s=n(1340),l=n(8173),p=n(4706),v=n(647),d=n(5112),g=n(1913),h=d("replace"),m=o.TypeError,y=c("".indexOf),x=c("".replace),b=c("".slice),w=Math.max,E=function(t,r,n){return n>t.length?-1:""===r?n:y(t,r,n)};e({target:"String",proto:!0},{replaceAll:function(t,r){var n,e,o,c,d,S,A,j,O,M=u(this),P=0,R=0,T="";if(null!=t){if((n=f(t))&&(e=s(u(p(t))),!~y(e,"g")))throw m("`.replaceAll` does not allow non-global regexes");if(o=l(t,h))return i(o,t,M,r);if(g&&n)return x(s(M),t,r)}for(c=s(M),d=s(t),(S=a(r))||(r=s(r)),A=d.length,j=w(1,A),P=E(c,d,0);-1!==P;)O=S?s(r(d,P,c)):v(d,c,P,[],void 0,r),T+=b(c,R,P)+O,R=P+A,P=E(c,d,P+j);return R<c.length&&(T+=b(c,R)),T}})},8702:function(t,r,n){n(3462);var e=n(2109),o=n(365);e({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==o},{trimEnd:o})},9967:function(t,r,n){var e=n(2109),o=n(3217);e({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==o},{trimLeft:o})},3462:function(t,r,n){var e=n(2109),o=n(365);e({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==o},{trimRight:o})},5674:function(t,r,n){n(9967);var e=n(2109),o=n(3217);e({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==o},{trimStart:o})},7207:function(t,r,n){n(8757)},7425:function(t,r,n){"use strict";n.d(r,{Jf:function(){return o},Vp:function(){return e}});var e={registerMethods:["email"],loginMethods:["password"],mode:"modal",logo:"https://static.nicegoodthings.com/project/ext/wb.logo.png",title:"Webrowse",socialConnections:["github","google"],appHost:"https://portal-lite-china.authing.cn",lang:"en-US"},o="6034a70af621af721e5320b9";r.ZP=e}}]);
//# sourceMappingURL=d70a287dcb0b1c9729e99bccbc47fba5b0bd3910-b94ada1ad5b9bde6017d.js.map