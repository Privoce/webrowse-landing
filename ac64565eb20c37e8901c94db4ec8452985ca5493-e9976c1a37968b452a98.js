(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[1514,6018,3093,4293,3615,3754,299],{8926:function(e){function t(e,t,n,r,o,u,i){try{var a=e[u](i),c=a.value}catch(s){return void n(s)}a.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,u){var i=e.apply(n,r);function a(e){t(i,o,u,a,c,"next",e)}function c(e){t(i,o,u,a,c,"throw",e)}a(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,n){var r=n(9489),o=n(7067);function u(t,n,i){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,n){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return n&&r(u,n.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},6525:function(e,t,n){var r=n(8331);function o(){return"undefined"!=typeof Reflect&&Reflect.get?(e.exports=o=Reflect.get,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,n){var o=r(e,t);if(o){var u=Object.getOwnPropertyDescriptor(o,t);return u.get?u.get.call(arguments.length<3?e:n):u.value}},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(this,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},430:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},8585:function(e,t,n){var r=n(8).default,o=n(1506);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8331:function(e,t,n){var r=n(9754);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5957:function(e,t,n){var r=n(9754),o=n(9489),u=n(430),i=n(9100);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!u(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return i(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,a(t)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9483:function(e,t,n){var r=n(7854),o=n(4411),u=n(6330),i=r.TypeError;e.exports=function(e){if(o(e))return e;throw i(u(e)+" is not a constructor")}},648:function(e,t,n){var r=n(7854),o=n(1694),u=n(614),i=n(4326),a=n(5112)("toStringTag"),c=r.Object,s="Arguments"==i(function(){return arguments}());e.exports=o?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),a))?n:s?i(t):"Object"==(r=i(t))&&u(t.callee)?"Arguments":r}},4411:function(e,t,n){var r=n(1702),o=n(7293),u=n(614),i=n(648),a=n(5005),c=n(2788),s=function(){},l=[],f=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=r(p.exec),v=!p.exec(s),x=function(e){if(!u(e))return!1;try{return f(s,l,e),!0}catch(t){return!1}},m=function(e){if(!u(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!d(p,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!f||o((function(){var e;return x(x.call)||!x(Object)||!x((function(){e=!0}))||e}))?m:x},8523:function(e,t,n){"use strict";var r=n(9662),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},2492:function(e,t,n){var r=n(7854);e.exports=r.Promise},9478:function(e,t,n){var r=n(9670),o=n(111),u=n(8523);e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=u.f(e);return(0,n.resolve)(t),n.promise}},6707:function(e,t,n){var r=n(9670),o=n(9483),u=n(5112)("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||null==(n=r(i)[u])?t:o(n)}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},7727:function(e,t,n){"use strict";var r=n(2109),o=n(1913),u=n(2492),i=n(7293),a=n(5005),c=n(614),s=n(6707),l=n(9478),f=n(8052),p=u&&u.prototype;if(r({target:"Promise",proto:!0,real:!0,forced:!!u&&i((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=s(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!o&&c(u)){var d=a("Promise").prototype.finally;p.finally!==d&&f(p,"finally",d,{unsafe:!0})}},7289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5861),o=n(7757),u=n.n(o),i=n(7294),a=n(6963),c=n.n(a),s="733ebd8906c84f8baafcbf548dcfe7da";var l,f=n(8278),p=n(8570),d=n(1367),v=n(77),x=n(9390),m=n(1720),h=null===c()||void 0===c()||null===(l=c().createClient)||void 0===l?void 0:l.call(c(),{codec:"h264",mode:"rtc"}),y=function(){var e=(0,i.useContext)(v.VoiceContext),t=e.dispatch,n=e.state,o=n||{},a=o.status,l=o.cameraId,y=o.microphoneId,g=o.currentUser,b=o.users,w=new URLSearchParams("undefined"!=typeof window?window.location.search:""),_=(null==g?void 0:g.intUid)||function(){for(var e="123456789",t=e.length,n=[],r=0;r<9;r++)n[r]=e.charAt(Math.random()*t);return+n.join("")}()||+w.get("uid")||1,E=w.get("cid")||"test",k=function(e){var t=(0,i.useState)(void 0),n=t[0],o=t[1],a=(0,i.useState)(void 0),l=a[0],f=a[1],p=(0,i.useState)([]),d=p[0],v=p[1],x=(0,i.useState)(""),m=x[0],h=x[1],y=(0,i.useState)(null),g=y[0],b=y[1],w=(0,i.useState)(!1),_=w[0],E=w[1],k=(0,i.useState)([]),T=k[0],j=k[1],S=(0,i.useState)([]),A=S[0],U=S[1],M=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wechat.okeydemo.com/api/agora/get_token?uid="+t+"&channel="+n);case 2:return r=e.sent,e.next=5,r.text();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function N(e,t){return O.apply(this,arguments)}function O(){return(O=(0,r.Z)(u().mark((function e(t,n){var r,i,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().createMicrophoneAndCameraTracks(t,n);case 2:return r=e.sent,i=r[0],a=r[1],f(i),o(a),e.abrupt("return",[i,a]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){e&&(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().getDevices();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))()}),[e]);var P=(0,i.useCallback)(function(){var t=(0,r.Z)(u().mark((function t(n,r,o,i){var a,c,l,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&r){t.next=2;break}return t.abrupt("return");case 2:return e.enableAudioVolumeIndicator(),b(r),h(n),t.next=7,M(r,n);case 7:return a=t.sent,t.next=10,N(o,i);case 10:return c=t.sent,l=c[0],f=c[1],t.next=15,e.join(s,n,a||null,+r);case 15:return t.next=17,e.publish([l,f]);case 17:window.client=e,window.videoTrack=f,E(!0);case 20:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}(),[]);function C(){return(C=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l&&(l.stop(),l.close()),n&&(n.stop(),n.close()),j([]),E(!1),t.next=6,null==e?void 0:e.leave();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,i.useEffect)((function(){if(e){j(e.remoteUsers);var t=function(){var t=(0,r.Z)(u().mark((function t(n,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.subscribe(n,r);case 2:j((function(t){return Array.from(e.remoteUsers)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),n=function(t){j((function(t){return Array.from(e.remoteUsers)}))},o=function(t){j((function(t){return Array.from(e.remoteUsers)}))},i=function(t){j((function(t){return Array.from(e.remoteUsers)}))};return e.on("user-published",t),e.on("user-unpublished",n),e.on("user-joined",o),e.on("user-left",i),function(){e.off("user-published",t),e.off("user-unpublished",n),e.off("user-joined",o),e.off("user-left",i)}}}),[e]),(0,i.useEffect)((function(){if(e&&m&&g){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("WillExpire"),t.next=3,M(g,m);case 3:return n=t.sent,t.next=6,e.renewToken(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Fetching the new Token"),t.next=3,M(g,m);case 3:return n=t.sent,console.log("Rejoining the channel with new Token"),t.next=7,e.join(s,m,n,g);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(e){U(e),e.forEach((function(e,t){console.log(t+" UID "+e.uid+" Level "+e.level)}))};return e.on("token-privilege-will-expire",t),e.on("token-privilege-did-expire",n),e.on("volume-indicator",o),function(){e.off("token-privilege-will-expire",t),e.off("token-privilege-did-expire",n),e.off("volume-indicator",o)}}}),[e,m,g]),{localAudioTrack:l,localVideoTrack:n,joinState:_,leave:function(){return C.apply(this,arguments)},join:P,remoteUsers:T,devices:d,volumes:A}}(h),T=k.localAudioTrack,j=k.localVideoTrack,S=k.join,A=k.joinState,U=k.remoteUsers;(0,i.useEffect)((function(){t({type:v.UPDATE_CLIENT,payload:h})}),[]),(0,i.useEffect)((function(){}),[_,E]),(0,i.useEffect)((function(){j&&T&&(t({type:v.UPDATE_LOCAL_VIDEO_TRACK,payload:j}),t({type:v.UPDATE_LOCAL_AUDIO_TRACK,payload:T}))}),[j,T]),(0,i.useEffect)((function(){t({type:v.UPDATE_JOIN_STATE,payload:A})}),[A]),(0,i.useEffect)((function(){var e,t={source:"webrow.se/voice",payload:{status:null==n?void 0:n.status},event:"connect"};null===(e=window)||void 0===e||e.postMessage(t,"*")}),[null==n?void 0:n.status]),(0,i.useEffect)((function(){(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("will-join"!==(null==n?void 0:n.status)){e.next=3;break}return e.next=3,M({microphoneId:y},{cameraId:l});case 3:case"end":return e.stop()}}),e)})))()}),[null==n?void 0:n.status,l,y]),(0,i.useEffect)((function(){t({type:v.UPDATE_USERS,payload:U})}),[U]),(0,i.useEffect)((function(){var e,t=b.map((function(e){return{uid:e.uid,hasVideo:e.hasVideo,hasAudio:e.hasAudio,current:!1}}));null!=n&&n.joinState&&t.unshift({uid:null==g?void 0:g.intUid,hasVideo:null==n?void 0:n.videoEnabled,hasAudio:null==n?void 0:n.audioEnabled,current:!0});var r={source:"webrow.se/voice",payload:{remoteUsers:t},event:"remote_users"};null===(e=window)||void 0===e||e.postMessage(r,"*")}),[b,null==g?void 0:g.intUid,null==n?void 0:n.joinState,null==n?void 0:n.videoEnabled,null==n?void 0:n.audioEnabled]);var M=function(){var e=(0,r.Z)(u().mark((function e(n,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v.UPDATE_STATUS,payload:"connecting"}),e.next=3,S(E,_,n,r);case 3:t({type:v.UPDATE_JOIN_STATE,payload:!0}),t({type:v.UPDATE_STATUS,payload:"connected"});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return i.createElement(p.default,null,i.createElement("header",{className:"header"},i.createElement("h1",{className:"title"},i.createElement("img",{className:"logo",src:m.Z,alt:""})),i.createElement("h2",{className:"sub_title"},"Sync tabs with your teammates!")),null!=n&&n.joinState?i.createElement(i.Fragment,null,i.createElement(d.default,null),i.createElement(f.default,null)):i.createElement("div",{className:"joinWrap"},i.createElement("button",{disabled:"connecting"===a,className:"button",onClick:function(){return M({microphoneId:y},{cameraId:l})}},i.createElement("div",{className:"inner"},i.createElement(x.JoinRoom,null)),"connecting"===a?"connecting":"Join")))}},881:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(1265);t.default=function(e){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){var n;if(t.current)return null===(n=e.videoTrack)||void 0===n||n.play(t.current),function(){var t;null===(t=e.videoTrack)||void 0===t||t.stop()}}),[t,e.videoTrack]),(0,r.useEffect)((function(){var t;e.audioTrack&&(null===(t=e.audioTrack)||void 0===t||t.play());return function(){var t;null===(t=e.audioTrack)||void 0===t||t.stop()}}),[e.audioTrack]),r.createElement(o.default,null,r.createElement("div",{ref:t,className:"player"}))}},1265:function(e,t,n){"use strict";n.r(t);var r=n(6220).default.div.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-1td5f2d-0"})([".player{width:640px;height:480px;background-color:#000;}"]);t.default=r},8278:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(8599),u=n(7112);t.default=function(){return r.createElement(o.default,null,r.createElement(u.default,null))}},8599:function(e,t,n){"use strict";n.r(t);var r=n(6220).default.footer.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-19oqb2v-0"})(["display:flex;align-items:center;justify-content:center;margin-bottom:10px;"]);t.default=r},1367:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(9965),u=n(881),i=n(77);t.default=function(){var e=(0,r.useContext)(i.VoiceContext).state,t=void 0===e?{}:e,n=t.localVideoTrack,a=t.users,c=t.currentUser,s=t.extUsers;return r.createElement(o.default,null,r.createElement("ul",{className:"users "+((null==a?void 0:a.length)>1?"usersMore":"")},r.createElement("li",{className:"user"},r.createElement(u.default,{videoTrack:n,audioTrack:void 0}),(null==n?void 0:n.muted)&&r.createElement("div",{className:"info"},null!=c&&c.photo?r.createElement("div",{className:"avatar"},r.createElement("img",{src:null==c?void 0:c.photo,className:"pic",alt:""})):r.createElement("div",{className:"name"},null==c?void 0:c.username))),null==a?void 0:a.map((function(e){var t,n,o;return r.createElement("li",{key:e.uid,className:"user"},r.createElement(u.default,{videoTrack:e.videoTrack,audioTrack:e.audioTrack}),!e.hasVideo&&r.createElement("div",{className:"info"},null!==(t=s.find((function(t){return t.intUid===e.uid})))&&void 0!==t&&t.photo?r.createElement("div",{className:"avatar"},r.createElement("img",{src:null===(n=s.find((function(t){return t.intUid===e.uid})))||void 0===n?void 0:n.photo,className:"pic",alt:""})):r.createElement("div",{className:"name"},null===(o=s.find((function(t){return t.intUid===e.uid})))||void 0===o?void 0:o.username)))}))))}},9965:function(e,t,n){"use strict";n.r(t);var r=n(6220).default.div.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-12nkcj5-0"})(["display:flex;height:100%;align-items:center;justify-content:center;.users{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;margin-bottom:0;width:100%;&More{.player{width:320px;height:240px;}}}.user{position:relative;}.info{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}.avatar{width:160px;height:160px;background-color:#333;overflow:hidden;.pic{width:100%;height:100%;}}.name{color:#fff;text-align:center;font-size:24px;}"]);t.default=r},8570:function(e,t,n){"use strict";n.r(t);var r=n(6220).default.section.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-jyr8gf-0"})(["display:flex;width:100%;height:100vh;flex-direction:column;justify-content:space-between;background-color:#19181D;.header{display:flex;align-items:center;padding:15px;justify-content:center;.title{color:#056CF2;font-style:normal;font-weight:800;font-size:36px;line-height:139.8%;background-size:contain;background-repeat:no-repeat;margin-bottom:0;}.logo{width:203px;height:36px;vertical-align:middle;}.sub_title{display:none;color:#606368;font-weight:normal;font-size:24px;line-height:139.8%;margin-bottom:0;margin-left:10px;}}.joinWrap{position:absolute;z-index:1;width:100vw;height:100vh;background-color:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;color:#fff;.button{display:flex;align-items:center;cursor:pointer;border:none;background-color:#f26b4d;padding:4px 20px;border-radius:12px;gap:10px;font-size:16px;&:hover{background-color:#c35037;}}.inner{}}"]);t.default=r},1720:function(e,t,n){"use strict";t.Z=n.p+"static/logo-3b78150b3a1e9627ff334233aae997b5.png"}}]);
//# sourceMappingURL=ac64565eb20c37e8901c94db4ec8452985ca5493-e9976c1a37968b452a98.js.map