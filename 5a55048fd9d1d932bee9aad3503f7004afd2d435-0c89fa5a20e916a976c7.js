(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[364],{9662:function(t,n,r){var e=r(614),o=r(6330);t.exports=function(t){if(e(t))return t;throw TypeError(o(t)+" is not a function")}},9483:function(t,n,r){var e=r(4411),o=r(6330);t.exports=function(t){if(e(t))return t;throw TypeError(o(t)+" is not a constructor")}},1223:function(t,n,r){var e=r(5112),o=r(30),i=r(3070),c=e("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},9670:function(t,n,r){var e=r(111);t.exports=function(t){if(e(t))return t;throw TypeError(String(t)+" is not an object")}},1318:function(t,n,r){var e=r(5656),o=r(7466),i=r(1400),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},7475:function(t,n,r){var e=r(3157),o=r(4411),i=r(111),c=r(5112)("species");t.exports=function(t){var n;return e(t)&&(n=t.constructor,(o(n)&&(n===Array||e(n.prototype))||i(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?Array:n}},5417:function(t,n,r){var e=r(7475);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,r){var e=r(1694),o=r(614),i=r(4326),c=r(5112)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=e?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),c))?r:u?i(n):"Object"==(e=i(n))&&o(n.callee)?"Arguments":e}},9920:function(t,n,r){var e=r(6656),o=r(3887),i=r(1236),c=r(3070);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),c=r(8113),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s?o=(e=s.split("."))[0]<4?1:e[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,r){var e=r(7854),o=r(1236).f,i=r(8880),c=r(1320),u=r(3505),a=r(9920),f=r(4705);t.exports=function(t,n){var r,s,l,p,v,g=t.target,m=t.global,d=t.stat;if(r=m?e:d?e[g]||u(g,{}):(e[g]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(m?s:g+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},6790:function(t,n,r){"use strict";var e=r(3157),o=r(7466),i=r(9974),c=function(t,n,r,u,a,f,s,l){for(var p,v=a,g=0,m=!!s&&i(s,l,3);g<u;){if(g in r){if(p=m?m(r[g],g,n):r[g],f>0&&e(p))v=c(t,n,p,o(p.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=p}v++}g++}return v};t.exports=c},9974:function(t,n,r){var e=r(9662);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},6530:function(t,n,r){var e=r(9781),o=r(6656),i=Function.prototype,c=e&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!e||e&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,n,r){var e=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(e(t),n)}},3501:function(t){t.exports={}},490:function(t,n,r){var e=r(5005);t.exports=e("document","documentElement")},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7293),o=r(4326),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,r){var e=r(614),o=r(5465),i=Function.toString;e(o.inspectSource)||(o.inspectSource=function(t){return i.call(t)}),t.exports=o.inspectSource},9909:function(t,n,r){var e,o,i,c=r(8536),u=r(7854),a=r(111),f=r(8880),s=r(6656),l=r(5465),p=r(6200),v=r(3501),g="Object already initialized",m=u.WeakMap;if(c||l.state){var d=l.state||(l.state=new m),h=d.get,x=d.has,y=d.set;e=function(t,n){if(x.call(d,t))throw new TypeError(g);return n.facade=t,y.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return x.call(d,t)}}else{var b=p("state");v[b]=!0,e=function(t,n){if(s(t,b))throw new TypeError(g);return n.facade=t,f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,n,r){var e=r(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,r){var e=r(7293),o=r(614),i=r(648),c=r(5005),u=r(2788),a=[],f=c("Reflect","construct"),s=/^\s*(?:class|function)\b/,l=s.exec,p=!s.exec((function(){})),v=function(t){if(!o(t))return!1;try{return f(Object,a,t),!0}catch(n){return!1}};t.exports=!f||e((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!l.call(s,u(t))}:v},4705:function(t,n,r){var e=r(7293),o=r(614),i=/#|\.prototype\./,c=function(t,n){var r=a[u(t)];return r==s||r!=f&&(o(n)?e(n):!!n)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},111:function(t,n,r){var e=r(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(614),o=r(5005),i=r(3307);t.exports=i?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return e(n)&&Object(t)instanceof n}},3366:function(t,n,r){var e=r(7854);t.exports=e.Promise},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(614),i=r(2788),c=e.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},8523:function(t,n,r){"use strict";var e=r(9662),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},30:function(t,n,r){var e,o=r(9670),i=r(6048),c=r(748),u=r(3501),a=r(490),f=r(317),s=r(6200),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},g=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},m=function(){try{e=new ActiveXObject("htmlfile")}catch(o){}var t,n;m="undefined"!=typeof document?document.domain&&e?g(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):g(e);for(var r=c.length;r--;)delete m.prototype[c[r]];return m()};u[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=m(),void 0===n?r:i(r,n)}},6048:function(t,n,r){var e=r(9781),o=r(3070),i=r(9670),c=r(1956);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},3070:function(t,n,r){var e=r(9781),o=r(4664),i=r(9670),c=r(4948),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n),i(r),o)try{return u(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(5296),i=r(9114),c=r(5656),u=r(4948),a=r(6656),f=r(4664),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n),f)try{return s(t,n)}catch(r){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,r){var e=r(6656),o=r(5656),i=r(1318).indexOf,c=r(3501);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},1956:function(t,n,r){var e=r(6324),o=r(748);t.exports=Object.keys||function(t){return e(t,o)}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},2140:function(t,n,r){var e=r(614),o=r(111);t.exports=function(t,n){var r,i;if("string"===n&&e(r=t.toString)&&!o(i=r.call(t)))return i;if(e(r=t.valueOf)&&!o(i=r.call(t)))return i;if("string"!==n&&e(r=t.toString)&&!o(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},3887:function(t,n,r){var e=r(5005),o=r(8006),i=r(5181),c=r(9670);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},9478:function(t,n,r){var e=r(9670),o=r(111),i=r(8523);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},1320:function(t,n,r){var e=r(7854),o=r(614),i=r(6656),c=r(8880),u=r(3505),a=r(2788),f=r(9909),s=r(6530).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,n,r,a){var f,l=!!a&&!!a.unsafe,g=!!a&&!!a.enumerable,m=!!a&&!!a.noTargetGet,d=a&&void 0!==a.name?a.name:n;o(r)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==d)&&c(r,"name",d),(f=p(r)).source||(f.source=v.join("string"==typeof d?d:""))),t!==e?(l?!m&&t[n]&&(g=!0):delete t[n],g?t[n]=r:c(t,n,r)):g?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||a(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854);t.exports=function(t,n){try{Object.defineProperty(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.18.0",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,n,r){var e=r(9670),o=r(9483),i=r(5112)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},6091:function(t,n,r){var e=r(6530).PROPER,o=r(7293),i=r(1361);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||e&&i[t].name!==t}))}},3111:function(t,n,r){var e=r(4488),o=r(1340),i="["+r(1361)+"]",c=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),a=function(t){return function(n){var r=o(e(n));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(u,"")),r}};t.exports={start:a(1),end:a(2),trim:a(3)}},1400:function(t,n,r){var e=r(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9958:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},7466:function(t,n,r){var e=r(9958),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(4488);t.exports=function(t){return Object(e(t))}},7593:function(t,n,r){var e=r(111),o=r(2190),i=r(8173),c=r(2140),u=r(5112)("toPrimitive");t.exports=function(t,n){if(!e(t)||o(t))return t;var r,a=i(t,u);if(a){if(void 0===n&&(n="default"),r=a.call(t,n),!e(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:String(n)}},1694:function(t,n,r){var e={};e[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},1340:function(t,n,r){var e=r(648);t.exports=function(t){if("Symbol"===e(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},6330:function(t){t.exports=function(t){try{return String(t)}catch(n){return"Object"}}},9711:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(6656),c=r(9711),u=r(133),a=r(3307),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6535:function(t,n,r){"use strict";var e=r(2109),o=r(6790),i=r(9662),c=r(7908),u=r(7466),a=r(5417);e({target:"Array",proto:!0},{flatMap:function(t){var n,r=c(this),e=u(r.length);return i(t),(n=a(r,0)).length=o(n,r,r,e,0,1,t,arguments.length>1?arguments[1]:void 0),n}})},9244:function(t,n,r){r(1223)("flatMap")},7727:function(t,n,r){"use strict";var e=r(2109),o=r(1913),i=r(3366),c=r(7293),u=r(5005),a=r(614),f=r(6707),s=r(9478),l=r(1320);if(e({target:"Promise",proto:!0,real:!0,forced:!!i&&c((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=f(this,u("Promise")),r=a(t);return this.then(r?function(r){return s(n,t()).then((function(){return r}))}:t,r?function(r){return s(n,t()).then((function(){throw r}))}:t)}}),!o&&a(i)){var p=u("Promise").prototype.finally;i.prototype.finally!==p&&l(i.prototype,"finally",p,{unsafe:!0})}},8702:function(t,n,r){"use strict";var e=r(2109),o=r(3111).end,i=r(6091)("trimEnd"),c=i?function(){return o(this)}:"".trimEnd;e({target:"String",proto:!0,name:"trimEnd",forced:i},{trimEnd:c,trimRight:c})},5674:function(t,n,r){"use strict";var e=r(2109),o=r(3111).start,i=r(6091)("trimStart"),c=i?function(){return o(this)}:"".trimStart;e({target:"String",proto:!0,name:"trimStart",forced:i},{trimStart:c,trimLeft:c})},5617:function(t,n,r){"use strict";var e=r(8634),o=r(2656),i=r.n(o),c=r(7294),u=r(9),a=r(5566),f=r(3941),s=u.default.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-18s8wx4-0"})(["position:absolute;left:0;top:0;width:100%;display:flex;align-items:center;justify-content:space-between;background:transparent;padding:15px 110px;@media screen and (max-width:414px){padding:15px 20px;}.left{display:flex;align-items:center;.logo{width:32px;height:32px;margin-right:8px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#fff;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#787878;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#056CF2;}&.curr{border-bottom:1px solid #787877;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{cursor:pointer;text-decoration:none;border-radius:50px;background:#52EDFF;border:none;font-size:14px;font-weight:bold;padding:12px 24px;color:#000;display:flex;align-items:center;&.login{background:none;color:#52EDFF;border:2px solid #52EDFF}}}"]);n.Z=function(t){var n=t.curr,r=void 0===n?"home":n,o=t.updateUser,u=void 0===o?null:o,l=(0,c.useState)(null),p=l[0],v=l[1],g=(0,c.useState)(!1),m=g[0],d=g[1];(0,c.useEffect)((function(){u&&u(p)}),[p]);var h=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getCurrentUser();case 2:r=t.sent,console.log({currUser:r}),r&&(d(!1),v(r));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),x=function(){var t=(0,e.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("login",{user:n}),v(n),d(!1);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return c.createElement(c.Fragment,null,c.createElement(a.AuthingGuard,{visible:m,onRegisterInfoCompleted:function(t){v(t),d(!1)},onClose:function(){d(!1)},onLogin:x,onLoad:h,appId:f.Jf,config:f.ZP}),c.createElement(s,{className:"navbar"},c.createElement("div",{className:"left"},c.createElement("img",{src:"https://static.nicegoodthings.com/project/ext/wb.logo.png",className:"logo",alt:"webrowse logo"}),c.createElement("h2",{className:"title"},"webrowse")),c.createElement("div",{className:"middle"},c.createElement("a",{className:"link "+("home"==r?"curr":""),href:"/#home"},"Home"),c.createElement("a",{className:"link "+("pricing"==r?"curr":""),href:"/pricing"},"Pricing"),c.createElement("a",{className:"link",href:"https://discord.gg/9SrEhwXz",target:"_blank"},"Discord")),c.createElement("div",{className:"right"},p?c.createElement("a",{className:"btn login",href:"#"},p.username):c.createElement("button",{className:"btn login",onClick:function(){d(!0)}},"Log In"),c.createElement("a",{href:"https://cron.com/han/bs4y4zus",target:"_blank",className:"btn typeform"},"Make Appointment"))))}},3941:function(t,n,r){"use strict";r.d(n,{Jf:function(){return e}});var e="6034a70af621af721e5320b9";n.ZP={mode:"modal",logo:"https://static.nicegoodthings.com/project/ext/wb.logo.png",title:"Webrowse",socialConnections:["github","google"],appHost:"https://portal-lite-china.authing.cn",lang:"en-US"}}}]);
//# sourceMappingURL=5a55048fd9d1d932bee9aad3503f7004afd2d435-0c89fa5a20e916a976c7.js.map