"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[6962],{9943:function(e,t,n){n.r(t);var r=n(5861),a=n(7757),c=n.n(a),o=n(7294),s=n(6220).default.section.withConfig({displayName:"oauth__StyledContainer",componentId:"sc-1mirajd-0"})(["width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;gap:15px;font-size:22px;font-weight:bold;color:#fff;.err{color:red;}"]);t.default=function(){var e=(0,o.useState)(null),t=e[0],n=e[1],a=(0,o.useState)(null),i=a[0],u=a[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,r,a,o,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(location.search),r=t.get("uid"),a=t.get("uname"),e.prev=3,e.next=6,fetch("https://vera.nicegoodthings.com/voce/oauth/"+r+"/"+a);case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,n(s.link),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),u("something error");case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){t&&(location.href=t)}),[t]),o.createElement(s,null,"Logining to Webrowse VoceChat",o.createElement("div",{className:"err"},i))}}}]);
//# sourceMappingURL=component---src-pages-oauth-js-2dd3aae7cfdbfceeaa6f.js.map