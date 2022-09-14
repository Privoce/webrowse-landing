"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[6848],{4992:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}var i=function(e){var t=e.className,n=void 0===t?"active":t,a=e.offsetTop,r=void 0===a?0:a,i=e.offsetLeft,l=void 0===i?0:i,c=e.duration,s=void 0===c?1e3:c,p=e.children;return(0,o.useEffect)((function(){var e,t=[],a=[],o=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Date.now();return function(o){clearTimeout(t),a+n-Date.now()<0?(e(o),a=Date.now()):t=setTimeout(e,n/5)}}((function(){var e=document.scrollingElement||document.documentElement,o=e.scrollLeft+window.innerWidth/2,r=e.scrollTop+window.innerHeight/2;t.map((function(e,t){var i=a[t],l=i.offsetLeft>=0&&o>=i.offsetLeft&&o<i.offsetLeft+i.offsetWidth;return i.offsetTop>=0&&r>=i.offsetTop&&r<i.offsetTop+i.offsetHeight&&l?e.classList.add(n):e.classList.remove(n),!0}))}));if(p.map((function(n){var o=n.props&&n.props.href,i=n.ref&&n.ref.current;if(!i||!o||"#"!==o.charAt(0))return!1;var c="#"===o?document.body:document.querySelector(o);return c&&(i.onclick=function(t){return function(t,n,a,o){if(t.preventDefault(),e)return!0;e=!0;var r=document.scrollingElement||document.documentElement,i={x:Math.max(0,r.scrollWidth-window.innerWidth),y:Math.max(0,r.scrollHeight-window.innerHeight)},l={x:Math.min(Math.max(0,a),i.x),y:Math.min(Math.max(0,n),i.y)},c=Math.round(l.x-r.scrollLeft),s=Math.round(l.y-r.scrollTop),p={x:Math.round(c/Math.abs(o)*1e3/16),y:Math.round(s/Math.abs(o)*1e3/16)};return function t(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={x:Math.round(l.x-r.scrollLeft),y:Math.round(l.y-r.scrollTop)};return 0===o.x&&0===o.y?(e=!1,!0):(Math.abs(o.x)>0&&(r.scrollLeft+=Math.abs(p.x)<Math.abs(o.x)?p.x:o.x),Math.abs(o.y)>0&&(r.scrollTop+=Math.abs(p.y)<Math.abs(o.y)?p.y:o.y),requestAnimationFrame((function(){return t(n,a)})))}(l)}(t,c.offsetTop-r,c.offsetLeft-l,s)},a.push(c),t.push(i)),!0})),a.length){var i=new Event("scroll");window.addEventListener("scroll",o,{passive:!0}),window.dispatchEvent(i)}return function(){window.removeEventListener("scroll",o)}}),[p,n,s,r,l]),o.default.createElement(o.default.Fragment,null,p)};t.default=i},4604:function(e,t,n){e.exports=n(4992)},433:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(7294),o=n(535),r=n(4604),i="https://chrome.google.com/webstore/detail/vera-cobrowse-doc-figma-p/ccegbnlnelhgaefimiaklaindffpfcmh?hl=en",l=o.default.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-15cqhr5-0"})(["position:fixed;z-index:10;top:0;width:100%;left:0;right:0;display:flex;align-items:center;justify-content:space-between;background:#FFFFFF;box-shadow:0px 4px 12px rgba(185,185,185,0.25);padding:15px 28px;.left{display:flex;align-items:center;.logo{width:34px;height:32px;margin-right:5px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#A700C5;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#606368;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#A700C5;}&.curr{color:#000;border-bottom:1px solid #000;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{text-decoration:none;border-radius:5px;background:#A700C5;border:none;font-weight:bold;padding:12px 16px;color:#fff;display:flex;align-items:center;&.login{background:none;color:#A700C5;border:2px solid #A700C5}}}"]),c=function(){return a.createElement(l,{className:"navbar"},a.createElement("div",{className:"left"},a.createElement("img",{src:"https://static.nicegoodthings.com/works/vera/popup.vera.logo.png",className:"logo",alt:"webrowse logo"}),a.createElement("h2",{className:"title"},"vera")),a.createElement("div",{className:"middle"},a.createElement(r.default,{className:"curr"},a.createElement("a",{className:"link",href:"#home",ref:a.createRef()},"Home"),a.createElement("a",{className:"link",href:"#howto",ref:a.createRef()},"How It Works"))),a.createElement("div",{className:"right"},a.createElement("a",{className:"btn login",href:"#"},"Log In"),a.createElement("a",{className:"btn add",target:"_blank",href:i},"Add to Chrome")))},s=n(5414),p=n(9499),d="@privoce1",m=function(e){var t=e.title,n=void 0===t?"":t,o=e.description,r=void 0===o?"":o,i=e.lang,l=void 0===i?"en":i,c=e.image,m=void 0===c?"":c,g=e.article,u=void 0!==g&&g,h=((0,p.useLocation)().pathname,{title:n||"Vera - Watch videos together with your friends",description:r||"Vera synchronizes video playback and adds live chat to your favorites video websites such as Youtube",image:m||"https://static.nicegoodthings.com/works/vera/popup.vera.logo.png",url:"https://webrow.se/vera"});return a.createElement(s.q,{htmlAttributes:{lang:l},title:h.title,titleTemplate:"%s | Vera Landing Page"},a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{name:"image",content:h.image}),a.createElement("link",{rel:"icon",type:"image/png",href:"https://static.nicegoodthings.com/works/vera/popup.vera.logo.png"}),h.url&&a.createElement("meta",{property:"og:url",content:h.url}),u&&a.createElement("meta",{property:"og:type",content:"article"}),h.title&&a.createElement("meta",{property:"og:title",content:h.title}),h.description&&a.createElement("meta",{property:"og:description",content:h.description}),h.image&&a.createElement("meta",{property:"og:image",content:h.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:d}),h.title&&a.createElement("meta",{name:"twitter:title",content:h.title}),h.description&&a.createElement("meta",{name:"twitter:description",content:h.description}),h.image&&a.createElement("meta",{name:"twitter:image",content:h.image}))},g=m;m.defaultProps={title:null,description:null,image:null,lang:"en",article:!1};var u=o.default.section.withConfig({displayName:"vera__StyledContainer",componentId:"sc-1ml1rcl-0"})(["height:100vh;padding-top:72px;display:flex;flex-direction:column;align-items:center;margin:0 auto;background-repeat:no-repeat;background-image:url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pie.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pie.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pink.dots.left.top.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pink.dots.right.btm.png');background-size:270px auto,270px auto,180px auto,250px auto,138px auto,220px auto;background-position:100% -160px,0 30vh,50px 34vh,105% -30px,0 24vh,right bottom;@media screen and (max-width:414px){padding-top:0;background-image:url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');background-size:120px auto,180px auto;background-position:0 150px,right bottom;}>.header{margin-top:200px;margin-bottom:32px;font-weight:800;font-size:72px;line-height:90px;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:414px){font-size:28px;}.line{position:relative;color:#fff;&:last-child:after{content:\"\";position:absolute;bottom:20px;right:-20px;width:16px;height:16px;border-radius:50%;background:#A700C5;@media screen and (max-width:414px){bottom:30px;right:-12px;width:10px;height:10px;}}}}.desc{font-weight:400;font-size:28px;line-height:35px;color:#757575;max-width:740px;text-align:center;margin-bottom:64px;}.btn{text-decoration:none;color:#fff;font-weight:800;font-size:28px;line-height:35px;padding:24px 48px;background:linear-gradient(94.32deg,#74D6D7 0%,#A700C5 100%);border-radius:15px;}"]),h=o.default.section.withConfig({displayName:"vera__StyledHowTo",componentId:"sc-1ml1rcl-1"})(["padding:72px 64px 64px 64px;display:flex;flex-direction:column;align-items:flex-start;max-width:1800px;margin:0 auto;@media screen and (max-width:414px){padding:50px 20px 50px 20px;}>.title{color:#A700C5;font-weight:800;font-size:28px;line-height:35px;padding:42px 0;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:414px){text-align:center;padding:50px 10px;}}.content{width:100%;display:flex;justify-content:space-between;gap:60px;@media screen and (max-width:414px){flex-direction:column;gap:20px;}.steps{display:flex;flex-direction:column;gap:24px;flex:1;.step{max-width:600px;.title{user-select:none;cursor:pointer;font-weight:normal;font-weight:600;font-size:20px;line-height:25px;padding:12px 16px;background:#F5F6F8;box-shadow:0px 2px 10px rgba(0,0,0,0.1);border-radius:10px;}.detail{display:none;flex-direction:column;gap:30px;border-left:2px solid #C4C4C4;margin-top:15px;margin-left:20px;p{font-weight:normal;font-size:20px;line-height:25px;padding-left:20px;white-space:pre-wrap;color:#fff;a,strong{color:#A700C5;}}}&.selected{.title{color:#fff;background:#A700C5;}.detail{display:flex;}}}}.pic{flex:2;max-width:1000px;img{width:100%;}}}"]),f=function(){var e=(0,a.useRef)(null),t=function(t){var n=t.target;e.current.querySelector(".selected").classList.remove("selected"),n.parentElement.classList.add("selected")};return a.createElement(a.Fragment,null,a.createElement(g,null),a.createElement(c,null),a.createElement(u,{className:"viewport",id:"home"},a.createElement("h2",{className:"header"},a.createElement("span",{className:"line"},"Watch videos together"),a.createElement("span",{className:"line"},"with your friends")),a.createElement("p",{className:"desc"},"Vera synchronizes video playback and adds live chat to your favorites video websites such as Youtube. "),a.createElement("a",{className:"btn add",target:"_blank",href:i},"Add to Chrome")),a.createElement(h,{id:"howto"},a.createElement("h2",{className:"title"},"How it works."),a.createElement("div",{className:"content"},a.createElement("ul",{className:"steps",ref:e},a.createElement("li",{className:"step selected"},a.createElement("h3",{className:"title",onClick:t},"1. Install Vera"),a.createElement("div",{className:"detail"},a.createElement("p",null,"Install Vera ",a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"here")," in Chrome Web Store."),a.createElement("p",null,"Remember to pin it to the Chrome tool bar for quicker access!"))),a.createElement("li",{className:"step"},a.createElement("h3",{className:"title",onClick:t},"2. Open a Video"),a.createElement("div",{className:"detail"},a.createElement("p",null,"Go to a video site and open a video that you would like to watch with your friends."),a.createElement("p",null,"Now supporting: Youtube"))),a.createElement("li",{className:"step"},a.createElement("h3",{className:"title",onClick:t},"3. Start a Co-Watching Session"),a.createElement("div",{className:"detail"},a.createElement("p",null,"Open the Vera extension on the video page. "),a.createElement("p",null,"Once you are logged in, click ",a.createElement("strong",null,"“Start a co-watching session”")," to get the party started!"),a.createElement("p",null,"After you started a session, you can invite your friends by sharing the link."))),a.createElement("li",{className:"step"},a.createElement("h3",{className:"title",onClick:t},"4. Join a Co-Watching Session"),a.createElement("div",{className:"detail"},a.createElement("p",null,"After you have installed Vera, clicking on any invitation link will automatically take you to the video site that is being shared.")))),a.createElement("div",{className:"pic"},a.createElement("img",{src:"https://g-store.oss-cn-beijing.aliyuncs.com/works/vera.demo.png",alt:"demo pic"})))))}}}]);
//# sourceMappingURL=component---src-pages-vera-index-js-f498027db1455023eaa6.js.map