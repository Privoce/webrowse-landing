(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[6091],{9483:function(e,t,n){var r=n(7854),o=n(4411),i=n(6330),a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not a constructor")}},648:function(e,t,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),c=n(5112)("toStringTag"),s=r.Object,l="Arguments"==a(function(){return arguments}());e.exports=o?a:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=s(e),c))?n:l?a(t):"Object"==(r=a(t))&&i(t.callee)?"Arguments":r}},647:function(e,t,n){var r=n(1702),o=n(7908),i=Math.floor,a=r("".charAt),c=r("".replace),s=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,p){var d=n+e.length,g=r.length,m=u;return void 0!==f&&(f=o(f),m=l),c(p,m,(function(o,c){var l;switch(a(c,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,d);case"<":l=f[s(c,1,-1)];break;default:var u=+c;if(0===u)return o;if(u>g){var p=i(u/10);return 0===p?o:p<=g?void 0===r[p-1]?a(c,1):r[p-1]+a(c,1):o}l=r[u-1]}return void 0===l?"":l}))}},4411:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),c=n(5005),s=n(2788),l=function(){},u=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=r(p.exec),g=!p.exec(l),m=function(e){if(!i(e))return!1;try{return f(l,u,e),!0}catch(t){return!1}},h=function(e){if(!i(e))return!1;switch(a(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return g||!!d(p,s(e))}catch(t){return!0}};h.sham=!0,e.exports=!f||o((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?h:m},7850:function(e,t,n){var r=n(111),o=n(4326),i=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},8523:function(e,t,n){"use strict";var r=n(9662),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},2492:function(e,t,n){var r=n(7854);e.exports=r.Promise},9478:function(e,t,n){var r=n(9670),o=n(111),i=n(8523);e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},4706:function(e,t,n){var r=n(6916),o=n(2597),i=n(7976),a=n(7066),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||o(e,"flags")||!i(c,e)?t:r(a,e)}},6707:function(e,t,n){var r=n(9670),o=n(9483),i=n(5112)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[i])?t:o(n)}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,n){var r=n(7854),o=n(648),i=r.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},7727:function(e,t,n){"use strict";var r=n(2109),o=n(1913),i=n(2492),a=n(7293),c=n(5005),s=n(614),l=n(6707),u=n(9478),f=n(8052),p=i&&i.prototype;if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=l(this,c("Promise")),n=s(e);return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!o&&s(i)){var d=c("Promise").prototype.finally;p.finally!==d&&f(p,"finally",d,{unsafe:!0})}},8757:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(6916),a=n(1702),c=n(4488),s=n(614),l=n(7850),u=n(1340),f=n(8173),p=n(4706),d=n(647),g=n(5112),m=n(1913),h=g("replace"),x=o.TypeError,v=a("".indexOf),b=a("".replace),y=a("".slice),w=Math.max,E=function(e,t,n){return n>e.length?-1:""===t?n:v(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,o,a,g,k,N,C,S,P=c(this),z=0,j=0,A="";if(null!=e){if((n=l(e))&&(r=u(c(p(e))),!~v(r,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(o=f(e,h))return i(o,e,P,t);if(m&&n)return b(u(P),e,t)}for(a=u(P),g=u(e),(k=s(t))||(t=u(t)),N=g.length,C=w(1,N),z=E(a,g,0);-1!==z;)S=k?u(t(g,z,a)):d(g,a,z,[],void 0,t),A+=y(a,j,z)+S,j=z+N,z=E(a,g,z+C);return j<a.length&&(A+=y(a,j)),A}})},7207:function(e,t,n){n(8757)},8161:function(e,t,n){"use strict";var r=n(5861),o=n(7757),i=n.n(o),a=n(7294),c=n(6220),s=n(5566),l=n(7425),u=n(1720),f=c.default.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-18s8wx4-0"})(["position:absolute;left:0;top:0;width:100%;.coupon{background:#212026;padding:16px 110px;display:none;justify-content:space-between;align-items:center;gap:35px;@media screen and (max-width:1100px){padding:16px 20px;}.intro{justify-content:space-between;display:flex;width:100%;color:#fff;font-style:normal;font-weight:600;font-size:24px;line-height:38px;}.btn{cursor:pointer;white-space:nowrap;background:none;font-weight:500;font-size:22px;line-height:31px;color:#18bfff;padding:4px 8px;border-radius:8px;border:3px solid #18bfff;}}.head{display:flex;align-items:center;justify-content:space-between;background:transparent;padding:15px 110px;.left{display:flex;align-items:center;.logo{width:203px;height:36px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#fff;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#787878;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#056cf2;}&.curr{border-bottom:1px solid #787877;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{cursor:pointer;text-decoration:none;border-radius:50px;background:#52edff;border:none;font-size:14px;font-weight:bold;padding:12px 24px;color:#000;display:flex;align-items:center;&.login{background:none;color:#52edff;border:2px solid #52edff;}}}@media screen and (max-width:414px){padding:15px 10px;.left{.logo{width:160px;height:auto;}}}}"]);t.Z=function(e){var t=e.curr,n=void 0===t?"home":t,o=e.updateUser,c=void 0===o?null:o,p=(0,a.useState)(void 0),d=p[0],g=p[1],m=(0,a.useState)(!1),h=m[0],x=m[1];(0,a.useEffect)((function(){c&&c(d)}),[d]);var v=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrentUser();case 2:n=e.sent,console.log({currUser:n}),n&&(x(!1),g(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("login",{user:t}),g(t),x(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement(s.AuthingGuard,{visible:h,onRegisterInfoCompleted:function(e){g(e),x(!1)},onClose:function(){x(!1)},onLogin:b,onLoad:v,appId:l.Jf,config:l.ZP}),a.createElement(f,{className:"navbar"},a.createElement("div",{className:"coupon"},a.createElement("div",{className:"intro"},a.createElement("span",null,"Get 3 months of Webrowse Pro on us."),a.createElement("span",null,"Promo Code: PRO2022")),a.createElement("button",{className:"btn"},"Get Started")),a.createElement("div",{className:"head"},a.createElement("div",{className:"left"},a.createElement("img",{src:u.Z,className:"logo",alt:"webrowse logo"})),a.createElement("div",{className:"middle"},a.createElement("a",{className:"link "+("home"==n?"curr":""),href:"/#home"},"Home"),a.createElement("a",{className:"link "+("pricing"==n?"curr":""),href:"/pricing"},"Pricing"),a.createElement("a",{className:"link",onClick:function(e){d||(e.preventDefault(),alert("Please Login First"))},href:"/oauth?uid="+(null==d?void 0:d.id)+"&uname="+(null==d?void 0:d.username),target:"_blank"},"Community"),a.createElement("a",{className:"link",href:"/blog/",target:"_blank"},"Blog")),a.createElement("div",{className:"right"},d?a.createElement("a",{className:"btn login",href:"/passport"},d.username):a.createElement("button",{className:"btn login",onClick:function(){x(!0)}},"Log In"),a.createElement("a",{href:"https://calendly.com/hansu/han-meeting",target:"_blank",className:"btn typeform"},"Request Demo")))))}},7425:function(e,t,n){"use strict";n.d(t,{Jf:function(){return o},Vp:function(){return r}});var r={registerMethods:["email"],loginMethods:["password"],mode:"modal",logo:"https://static.nicegoodthings.com/project/ext/wb.logo.png",title:"Webrowse",socialConnections:["github","google"],appHost:"https://portal-lite-china.authing.cn",lang:"en-US"},o="6034a70af621af721e5320b9";t.ZP=r},3111:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),o=n(6220),i=n(8161),a=o.default.section.withConfig({displayName:"uninstall__StyledWrapper",componentId:"sc-11x4zd7-0"})(["font-size:24px;color:#000;font-weight:800;height:100vh;display:flex;align-items:center;justify-content:center;"]);function c(){return r.createElement(r.Fragment,null,r.createElement(i.Z,null),r.createElement(a,null,"Uninstalled Successfully"))}},1720:function(e,t,n){"use strict";t.Z=n.p+"static/logo-3b78150b3a1e9627ff334233aae997b5.png"}}]);
//# sourceMappingURL=component---src-pages-uninstall-js-b0cd3372bb36ba0ee056.js.map