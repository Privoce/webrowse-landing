"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[6722,5260,7248],{1792:function(e,t,n){n.r(t);var a=n(8634),o=n(2656),l=n.n(o),i=n(7294),r=n(9287),c=n(9417),u=n(7539),s=n(6963),d=n.n(s),p=n(5414);t.default=function(){var e=(0,i.useContext)(r.VoiceContext),t=e.state,n=e.dispatch,o=(0,i.useState)(void 0),s=o[0],m=o[1],v=(0,i.useState)([]),f=v[0],b=v[1],g=(0,i.useRef)(null),E=function(){d().getDevices().then((function(e){b(e),m("allow")})).catch((function(e){var t="denied";switch(!0){case e.toString().indexOf("Permission dismissed")>-1:t="dismissed";break;case e.toString().indexOf("Permission denied")>-1:t="denied"}m(t)}))};(0,i.useEffect)((function(){E()}),[]),(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(l().mark((function e(a){var o,i,c,u,s,d,p;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.data||{},c=i.source,u=i.event,s=i.payload,console.log("user message",a.data),"webrowse.ext"===c){e.next=4;break}return e.abrupt("return");case 4:e.t0=u,e.next="webrows_users"===e.t0?7:"leave"===e.t0?12:"join"===e.t0?14:16;break;case 7:return d=(null==s?void 0:s.users)||[],p=(null==s?void 0:s.currentUser)||{},n({type:r.UPDATE_CURRENT_USR,payload:p}),n({type:r.UPDATE_EXT_USERS,payload:d}),e.abrupt("break",17);case 12:return n({type:r.LEAVE}),e.abrupt("break",17);case 14:return"complete"===(null==t?void 0:t.permissionState)?n({type:r.UPDATE_STATUS,payload:"will-join"}):null==g||null===(o=g.current)||void 0===o||o.join(),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}}),[null==t?void 0:t.permissionState]),(0,i.useEffect)((function(){void 0!==s&&(null==n||n({type:r.UPDATE_PERMISSION_STATE,payload:s}))}),[s]);var h=(t||{}).permissionState;return console.log(h,"permissionState"),void 0===h?null:i.createElement(i.Fragment,null,i.createElement(p.q,{bodyAttributes:{class:"view-voice"}}),"complete"===h?i.createElement(c.default,null):i.createElement(u.default,{ref:g,devices:f,access:E}))}},6768:function(e,t,n){n.r(t);var a=n(7294),o=n(9),l=n(3003),i=o.default.div.withConfig({displayName:"Selector__StyledSelector",componentId:"sc-8ljg19-0"})([".selector{width:380px;padding:0 12px;box-sizing:border-box;border:1px solid rgba(208,213,221,1);border-radius:8px;display:flex;align-items:center;}.icon{}.selectMain{position:relative;width:100%;flex:1;margin:0 6px;}.select{width:100%;height:44px;opacity:0;cursor:pointer;}.value{position:absolute;line-height:44px;font-size:16px;color:rgba(52,64,84,1);}"]);t.default=function(e){var t,n=e.icon,o=void 0===n?null:n,r=e.data,c=void 0===r?[]:r,u=e.value,s=void 0===u?"default":u,d=e.onChange,p=void 0===d?function(){}:d;return a.createElement(i,null,a.createElement("div",{className:"selector"},o,a.createElement("div",{className:"selectMain"},a.createElement("div",{className:"value"},a.createElement("span",{className:"textLineClamp-1"},null===(t=c.find((function(e){return e.deviceId===s})))||void 0===t?void 0:t.label)),a.createElement("select",{className:"select",onChange:function(e){console.log(e.target.value,"ev"),p(e.target.value)}},null==c?void 0:c.map((function(e){return a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),a.createElement(l.DropDown,null)))}},7539:function(e,t,n){n.r(t);var a=n(8634),o=n(2656),l=n.n(o),i=n(7294),r=n(5478),c=n(6768),u=n(3003),s=n(9287),d=n(5728),p=n(6963),m=n.n(p),v=n(5473),f=function(e,t){var n=e.devices,o=void 0===n?[]:n,p=e.access,f=void 0===p?function(){}:p,b=(0,i.useRef)(null),g=(0,i.useContext)(s.VoiceContext),E=g.state,h=g.dispatch,x=(0,i.useState)(""),y=x[0],w=x[1],k=(0,i.useState)(""),S=k[0],C=k[1],I=(0,i.useState)(""),N=I[0],T=I[1],_=(0,i.useState)(null),D=_[0],A=_[1],U=(0,i.useState)(null),P=U[0],M=U[1],V=(0,i.useState)(0),R=V[0],j=V[1],L=null==E?void 0:E.permissionState,z=E||{},B=z.videoEnabled,O=z.audioEnabled;(0,i.useEffect)((function(){var e,t,n,a=null===(e=o.find((function(e){return"audioinput"===e.kind})))||void 0===e?void 0:e.deviceId;w(a);var l=null===(t=o.find((function(e){return"audioinput"===e.kind})))||void 0===t?void 0:t.deviceId;C(l);var i=null===(n=o.find((function(e){return"videoinput"===e.kind})))||void 0===n?void 0:n.deviceId;T(i)}),[o]),(0,i.useEffect)((function(){var e,t;if(y&&N)return(0,a.Z)(l().mark((function n(){var a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m().createMicrophoneAndCameraTracks({microphoneId:y},{cameraId:N});case 2:a=n.sent,e=a[0],t=a[1],A(e),M(t),b=setInterval((function(){var t,n=null===(t=e)||void 0===t?void 0:t.getVolumeLevel();console.log("local stream audio level",n),j(n)}),200);case 8:case"end":return n.stop()}}),n)})))(),h({type:s.UPDATE_DEVICES_ID,payload:{type:"camera",id:N}}),h({type:s.UPDATE_DEVICES_ID,payload:{type:"microphone",id:y}}),function(){e=null,t=null,clearInterval(b),null==D||D.close(),null==P||P.close()}}),[y,N]);var W=function(){h({type:s.UPDATE_PERMISSION_STATE,payload:"complete"}),h({type:s.UPDATE_STATUS,payload:"will-join"}),null==D||D.close(),null==P||P.close()};console.log(L,"permissionStatus"),(0,i.useImperativeHandle)(t,(function(){return{join:function(){W()}}}));return i.createElement(r.default,null,i.createElement("div",{className:"modal"},i.createElement("div",null,i.createElement("h3",{className:"title"},"Privoce Daily Meeting"),"allow"===L&&i.createElement("div",{className:"playerWrap"},i.createElement(d.default,{videoTrack:P,audioTrack:null}),i.createElement("div",{className:"buttons"},i.createElement(v.default,{onClick:function(){return h({type:s.UPDATE_DEVICES_ENABLED,payload:{devices:"video",enabled:!B}})},type:"cam",label:null,disabled:!B}),i.createElement(v.default,{onClick:function(){return h({type:s.UPDATE_DEVICES_ENABLED,payload:{devices:"audio",enabled:!O}})},label:null,volumeLevel:R,disabled:!O}))),function(e){return void 0===e&&(e=[]),e.length?i.createElement(i.Fragment,null,i.createElement(c.default,{value:N,icon:i.createElement(u.Camera,null),data:e.filter((function(e){return"videoinput"===e.kind})),onChange:function(e){T(e)}}),i.createElement("div",{className:"space"}),i.createElement(c.default,{value:y,icon:i.createElement(u.Mic,null),data:e.filter((function(e){return"audioinput"===e.kind})),onChange:function(e){w(e)}}),i.createElement("div",{className:"space"}),i.createElement(c.default,{value:S,icon:i.createElement(u.Speaker,null),data:e.filter((function(e){return"audiooutput"===e.kind})),onChange:function(e){C(e)}})):null}(o),i.createElement("div",{className:"statusText"},"allow"===L?"In order for others to hear you, your browser will request microphone access.":"We don’t have access to your Microphone and Mic."),i.createElement("div",{className:"descText"},"Warning: Voice only works in one tab, Make sure do not close the tab you started Voice with, once you close the tab, you have to restart again.")),i.createElement("div",null,"allow"===L?i.createElement("button",{className:"button",onClick:W},"Join Meeting"):i.createElement("button",{className:"button",onClick:f},"Request access"))))};t.default=(0,i.forwardRef)(f)},5478:function(e,t,n){n.r(t);var a=n(9).default.section.withConfig({displayName:"styles__StyledDevices",componentId:"sc-tn8d7h-0"})(["width:100vw;height:100vh;background:#fff;display:flex;align-items:center;justify-content:center;.modal{display:flex;flex-direction:column;justify-content:space-between;padding:32px 16px;box-sizing:border-box;width:412px;min-height:462px;box-shadow:0px 4px 14px 2px rgba(0,0,0,0.16);border-radius:8px;}.title{font-size:20px;color:rgba(68,73,79,1);line-height:30px;text-align:center;margin-bottom:32px;}.space{height:8px;}.statusText{margin:32px 0 8px;text-align:center;word-break:break-all;font-size:16px;color:rgba(68,73,79,1);line-height:24px;}.descText{text-align:center;word-break:break-all;font-size:12px;color:rgba(92,96,101,1);line-height:18px;}.button{display:block;width:150px;height:32px;border:none;background-color:rgba(82,237,255,1);color:rgba(25,24,29,1);margin:32px auto 0;border-radius:50px;cursor:pointer;}.playerWrap{position:relative;height:240px;margin:0 -16px;background-color:rgba(25,24,29,1);margin-bottom:16px;.player{width:100%;height:240px;}.buttons{position:absolute;left:50%;transform:translateX(-50%);bottom:16px;display:flex;}}"]);t.default=a},5473:function(e,t,n){n.r(t);var a=n(3003),o=n(7294),l=n(9).default.div.withConfig({displayName:"Button__StyledButton",componentId:"sc-152vati-0"})([".button{border:none;background:none !important;cursor:pointer;margin:0 !important;width:auto !important;height:auto !important;&:disabled{opacity:0.3;}&Icon{position:relative;width:48px;height:48px;background-color:#f26b4d;border-radius:12px;display:flex;align-items:center;justify-content:center;overflow:hidden;&:hover{background-color:#c35037;}}.text{color:#fff;font-size:14px;margin-top:10px;text-align:center;}&Inner{}.level{transition:height 0.3s;position:absolute;left:0;bottom:0;width:100%;height:0;background-color:rgba(0,0,0,.35);}}"]),i=new Map([["mic",[o.createElement(a.Audio,null),o.createElement(a.AudioClose,null)]],["cam",[o.createElement(a.Video,null),o.createElement(a.VideoClose,null)]]]);new Map([["mic","Mic"],["cam","Cam"]]);t.default=function(e){var t,n=e.onClick,a=void 0===n?function(){}:n,r=e.label,c=void 0===r||r,u=e.disabled,s=void 0!==u&&u,d=e.volumeLevel,p=void 0===d?0:d,m=e.type,v=void 0===m?"mic":m;return o.createElement(l,null,o.createElement("button",{onClick:a,className:"button"},o.createElement("div",{className:"buttonInner"},o.createElement("div",{className:"buttonIcon"},null===(t=i.get(v))||void 0===t?void 0:t[s?1:0],o.createElement("span",{style:{height:100*p+"px"},className:"level"})),c&&o.createElement("div",{className:"text"},v.replace(v[0],v[0].toUpperCase())))))}}}]);
//# sourceMappingURL=component---src-pages-voice-main-js-66f9c06878c883831f23.js.map