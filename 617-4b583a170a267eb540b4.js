"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[617],{5617:function(e,n,t){t.r(n),t.d(n,{NavStyles:function(){return p}});var r=t(8634),a=t(2656),o=t.n(a),i=t(7294),s=t(9),l=t(5566),c=t(3941),p=s.default.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-18s8wx4-0"})(["position:absolute;left:0;top:0;width:100%;display:flex;align-items:center;justify-content:space-between;background:transparent;padding:15px 110px;@media screen and (max-width:414px){padding:15px 20px;}.left{display:flex;align-items:center;.logo{width:32px;height:32px;margin-right:8px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#fff;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#787878;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#056CF2;}&.curr{border-bottom:1px solid #787877;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{cursor:pointer;text-decoration:none;border-radius:50px;background:#52EDFF;border:none;font-size:14px;font-weight:bold;padding:12px 24px;color:#000;display:flex;align-items:center;&.login{background:none;color:#52EDFF;border:2px solid #52EDFF}}}"]);n.default=function(e){var n=e.curr,t=void 0===n?"home":n,a=e.updateUser,s=void 0===a?null:a,d=(0,i.useState)(null),u=d[0],m=d[1],g=(0,i.useState)(!1),f=g[0],h=g[1];(0,i.useEffect)((function(){s&&s(u)}),[u]);var x=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getCurrentUser();case 2:t=e.sent,console.log({currUser:t}),t&&(h(!1),m(t));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("login",{user:n}),m(n),h(!1);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.createElement(i.Fragment,null,i.createElement(l.AuthingGuard,{visible:f,onRegisterInfoCompleted:function(e){m(e),h(!1)},onClose:function(){h(!1)},onLogin:b,onLoad:x,appId:c.Jf,config:c.ZP}),i.createElement(p,{className:"navbar"},i.createElement("div",{className:"left"},i.createElement("img",{src:"https://static.nicegoodthings.com/project/ext/wb.logo.png",className:"logo",alt:"webrowse logo"}),i.createElement("h2",{className:"title"},"webrowse")),i.createElement("div",{className:"middle"},i.createElement("a",{className:"link "+("home"==t?"curr":""),href:"/#home"},"Home"),i.createElement("a",{className:"link "+("pricing"==t?"curr":""),href:"/pricing"},"Pricing"),i.createElement("a",{className:"link",href:"https://discord.gg/9SrEhwXz",target:"_blank"},"Discord")),i.createElement("div",{className:"right"},u?i.createElement("a",{className:"btn login",href:"#"},u.username):i.createElement("button",{className:"btn login",onClick:function(){h(!0)}},"Log In"),i.createElement("a",{href:"https://cron.com/han/bs4y4zus",target:"_blank",className:"btn typeform"},"Make Appointment"))))}}}]);
//# sourceMappingURL=617-4b583a170a267eb540b4.js.map