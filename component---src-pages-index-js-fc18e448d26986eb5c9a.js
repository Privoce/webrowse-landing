"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[678],{4992:function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}var r=function(e){var t=e.className,n=void 0===t?"active":t,o=e.offsetTop,i=void 0===o?0:o,r=e.offsetLeft,s=void 0===r?0:r,l=e.duration,c=void 0===l?1e3:l,d=e.children;return(0,a.useEffect)((function(){var e,t=[],o=[],a=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=Date.now();return function(a){clearTimeout(t),o+n-Date.now()<0?(e(a),o=Date.now()):t=setTimeout(e,n/5)}}((function(){var e=document.scrollingElement||document.documentElement,a=e.scrollLeft+window.innerWidth/2,i=e.scrollTop+window.innerHeight/2;t.map((function(e,t){var r=o[t],s=r.offsetLeft>=0&&a>=r.offsetLeft&&a<r.offsetLeft+r.offsetWidth;return r.offsetTop>=0&&i>=r.offsetTop&&i<r.offsetTop+r.offsetHeight&&s?e.classList.add(n):e.classList.remove(n),!0}))}));if(d.map((function(n){var a=n.props&&n.props.href,r=n.ref&&n.ref.current;if(!r||!a||"#"!==a.charAt(0))return!1;var l="#"===a?document.body:document.querySelector(a);return l&&(r.onclick=function(t){return function(t,n,o,a){if(t.preventDefault(),e)return!0;e=!0;var i=document.scrollingElement||document.documentElement,r={x:Math.max(0,i.scrollWidth-window.innerWidth),y:Math.max(0,i.scrollHeight-window.innerHeight)},s={x:Math.min(Math.max(0,o),r.x),y:Math.min(Math.max(0,n),r.y)},l=Math.round(s.x-i.scrollLeft),c=Math.round(s.y-i.scrollTop),d={x:Math.round(l/Math.abs(a)*1e3/16),y:Math.round(c/Math.abs(a)*1e3/16)};return function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={x:Math.round(s.x-i.scrollLeft),y:Math.round(s.y-i.scrollTop)};return 0===a.x&&0===a.y?(e=!1,!0):(Math.abs(a.x)>0&&(i.scrollLeft+=Math.abs(d.x)<Math.abs(a.x)?d.x:a.x),Math.abs(a.y)>0&&(i.scrollTop+=Math.abs(d.y)<Math.abs(a.y)?d.y:a.y),requestAnimationFrame((function(){return t(n,o)})))}(s)}(t,l.offsetTop-i,l.offsetLeft-s,c)},o.push(l),t.push(r)),!0})),o.length){var r=new Event("scroll");window.addEventListener("scroll",a,{passive:!0}),window.dispatchEvent(r)}return function(){window.removeEventListener("scroll",a)}}),[d,n,c,i,s]),a.default.createElement(a.default.Fragment,null,d)};t.default=r},4604:function(e,t,n){e.exports=n(4992)},5617:function(e,t,n){var o=n(7294),a=n(9),i=n(4604),r=a.ZP.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-18s8wx4-0"})(["position:fixed;z-index:10;top:0;width:100%;left:0;right:0;display:flex;align-items:center;justify-content:space-between;background:#FFFFFF;box-shadow:0px 4px 12px rgba(185,185,185,0.25);padding:15px 28px;.left{display:flex;align-items:center;.logo{width:32px;height:32px;margin-right:5px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#056CF2;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#616161;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#056CF2;}&.curr{color:#000;border-bottom:1px solid #000;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{text-decoration:none;border-radius:5px;background:#056CF2;border:none;font-weight:bold;padding:12px 16px;color:#fff;display:flex;align-items:center;&.login{background:none;color:#056CF2;border:2px solid #056CF2}}}"]);t.Z=function(){return o.createElement(r,null,o.createElement("div",{className:"left"},o.createElement("img",{src:"https://static.nicegoodthings.com/works/vera/wb-logo.png",className:"logo",alt:"webrowse logo"}),o.createElement("h2",{className:"title"},"webrowse")),o.createElement("div",{className:"middle"},o.createElement(i.default,{className:"curr"},o.createElement("a",{className:"link",href:"#home",ref:o.createRef()},"Home"),o.createElement("a",{className:"link",href:"#howto",ref:o.createRef()},"How It Works"))),o.createElement("div",{className:"right"},o.createElement("button",{className:"btn login"},"Log In"),o.createElement("a",{className:"btn add",target:"_blank",href:"https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related"},"Add to Chrome")))}},7128:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),a=n(9).ZP.div.withConfig({displayName:"Step__StyledWrapper",componentId:"sc-7asc7p-0"})(["display:flex;justify-content:space-between;align-items:flex-start;padding:64px 0;@media screen and (max-width:414px){flex-direction:column;padding:50px 10px;}.intro{position:relative;flex:1;padding-top:10px;display:flex;flex-direction:column;&:before{z-index:-1;content:attr(data-seq);position:absolute;top:-38px;left:-5px;font-weight:900;font-size:100px;line-height:117px;color:rgba(230,233,239,0.5);}.title{font-weight:800;font-size:30px;line-height:38px;color:#9B51E0;}.desc{font-size:20px;line-height:32px;}}.pic{flex:1;display:flex;justify-content:flex-end;img{max-width:100%;}}"]);function i(e){var t=e.seq,n=void 0===t?"01":t,i=e.title,r=void 0===i?"Invite your teammates via link":i,s=e.desc,l=void 0===s?"After starting a cobrowse window, click on “copy link” in the left bottom corner and send it to your teammates.":s,c=e.pic,d=void 0===c?"https://static.nicegoodthings.com/works/vera/LnV15n.jpg":c,p="string"==typeof l?[l]:l;return o.createElement(a,{className:"step"},o.createElement("div",{className:"intro","data-seq":n},o.createElement("h3",{className:"title"},r),o.createElement("div",{className:"desc"},p.map((function(e){return o.createElement("p",{key:e,className:"p"},e)})))),o.createElement("div",{className:"pic"},o.createElement("img",{src:d,alt:"step picture"})))}},7704:function(e,t,n){n.r(t);var o=n(7294),a=n(9),i=n(7128),r=n(5617),s=a.ZP.section.withConfig({displayName:"pages__StyledContainer",componentId:"sc-s07o6j-0"})(["height:100vh;padding-top:72px;display:flex;flex-direction:column;align-items:center;margin:0 auto;background-repeat:no-repeat;background-image:url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');background-size:270px auto,270px auto,120px auto,180px auto;background-position:100% -160px,0 30vh,0 150px,right bottom;@media screen and (max-width:414px){padding-top:0;background-image:url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');background-size:120px auto,180px auto;background-position:0 150px,right bottom;}>.header{margin-top:180px;font-weight:800;font-size:72px;line-height:90px;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:414px){font-size:28px;}.line{position:relative;&:last-child:after{content:\"\";position:absolute;bottom:20px;right:-20px;width:16px;height:16px;border-radius:50%;background:#056CF2;@media screen and (max-width:414px){bottom:30px;right:-12px;width:10px;height:10px;}}}}.desc{font-weight:400;font-size:28px;line-height:35px;color:#757575;max-width:740px;text-align:center;margin-bottom:64px;}.btn{text-decoration:none;color:#fff;font-weight:800;font-size:28px;line-height:35px;padding:24px 48px;background:linear-gradient(94.32deg,#74D6D7 0%,#056CF2 100%);border-radius:15px;}"]),l=a.ZP.section.withConfig({displayName:"pages__StyledHowTo",componentId:"sc-s07o6j-1"})(["padding-top:72px;display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;>.title{font-size:36px;line-height:45px;padding:72px 0;font-weight:800;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:414px){text-align:center;padding:50px 10px;}}"]);t.default=function(){return o.createElement(o.Fragment,null,o.createElement(r.Z,null),o.createElement(s,{id:"home"},o.createElement("h2",{className:"header"},o.createElement("span",{className:"line"},"Browse websites together"),o.createElement("span",{className:"line"},"with your teammates")),o.createElement("p",{className:"desc"},"Webrowse helps your team easily collaborate via a shared browsing window during your online meetings. "),o.createElement("a",{className:"btn",target:"_blank",href:"https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related"},"Add to Chrome")),o.createElement(l,{id:"howto"},o.createElement("div",{className:"title"},o.createElement("span",null,"Learn how to cobrowse with your teammates"),o.createElement("span",null,"in 4 Simple Steps")),o.createElement(i.Z,null),o.createElement(i.Z,{seq:"02",title:"See which tab your teammates are viewing",desc:["Click on “tab status” to view tabs and which tab your teammates are at.","Clicking on any tab takes you to the tab you want to view."],pic:"https://static.nicegoodthings.com/works/vera/hucv5k.jpg"}),o.createElement(i.Z,{seq:"03",title:"Enable Follow Mode to View Tabs Together",desc:["Follow mode allows other users to sync tabs in real time with the host.","When there is a host, enabling follow mode will automatically take you to the tab that the host is on."],pic:"https://static.nicegoodthings.com/works/vera/clhruI.jpg"}),o.createElement(i.Z,{seq:"04",title:"Chat with your teammates when cobrowsing",desc:"Turn on voice channel to chat with your teammates",pic:"https://static.nicegoodthings.com/works/vera/09LlYp.jpg"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fc18e448d26986eb5c9a.js.map