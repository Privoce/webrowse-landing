"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[91],{4992:function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}var i=function(e){var t=e.className,n=void 0===t?"active":t,o=e.offsetTop,a=void 0===o?0:o,i=e.offsetLeft,l=void 0===i?0:i,c=e.duration,s=void 0===c?1e3:c,f=e.children;return(0,r.useEffect)((function(){var e,t=[],o=[],r=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=Date.now();return function(r){clearTimeout(t),o+n-Date.now()<0?(e(r),o=Date.now()):t=setTimeout(e,n/5)}}((function(){var e=document.scrollingElement||document.documentElement,r=e.scrollLeft+window.innerWidth/2,a=e.scrollTop+window.innerHeight/2;t.map((function(e,t){var i=o[t],l=i.offsetLeft>=0&&r>=i.offsetLeft&&r<i.offsetLeft+i.offsetWidth;return i.offsetTop>=0&&a>=i.offsetTop&&a<i.offsetTop+i.offsetHeight&&l?e.classList.add(n):e.classList.remove(n),!0}))}));if(f.map((function(n){var r=n.props&&n.props.href,i=n.ref&&n.ref.current;if(!i||!r||"#"!==r.charAt(0))return!1;var c="#"===r?document.body:document.querySelector(r);return c&&(i.onclick=function(t){return function(t,n,o,r){if(t.preventDefault(),e)return!0;e=!0;var a=document.scrollingElement||document.documentElement,i={x:Math.max(0,a.scrollWidth-window.innerWidth),y:Math.max(0,a.scrollHeight-window.innerHeight)},l={x:Math.min(Math.max(0,o),i.x),y:Math.min(Math.max(0,n),i.y)},c=Math.round(l.x-a.scrollLeft),s=Math.round(l.y-a.scrollTop),f={x:Math.round(c/Math.abs(r)*1e3/16),y:Math.round(s/Math.abs(r)*1e3/16)};return function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r={x:Math.round(l.x-a.scrollLeft),y:Math.round(l.y-a.scrollTop)};return 0===r.x&&0===r.y?(e=!1,!0):(Math.abs(r.x)>0&&(a.scrollLeft+=Math.abs(f.x)<Math.abs(r.x)?f.x:r.x),Math.abs(r.y)>0&&(a.scrollTop+=Math.abs(f.y)<Math.abs(r.y)?f.y:r.y),requestAnimationFrame((function(){return t(n,o)})))}(l)}(t,c.offsetTop-a,c.offsetLeft-l,s)},o.push(c),t.push(i)),!0})),o.length){var i=new Event("scroll");window.addEventListener("scroll",r,{passive:!0}),window.dispatchEvent(i)}return function(){window.removeEventListener("scroll",r)}}),[f,n,s,a,l]),r.default.createElement(r.default.Fragment,null,f)};t.default=i},4604:function(e,t,n){e.exports=n(4992)},5617:function(e,t,n){var o=n(7294),r=n(9),a=n(4604),i=r.ZP.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-18s8wx4-0"})(["position:fixed;z-index:10;top:0;width:100%;left:0;right:0;display:flex;align-items:center;justify-content:space-between;background:#FFFFFF;box-shadow:0px 4px 12px rgba(185,185,185,0.25);padding:15px 28px;.left{display:flex;align-items:center;.logo{width:32px;height:32px;margin-right:5px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#056CF2;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#616161;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#056CF2;}&.curr{color:#000;border-bottom:1px solid #000;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{text-decoration:none;border-radius:5px;background:#056CF2;border:none;font-weight:bold;padding:12px 16px;color:#fff;display:flex;align-items:center;&.login{background:none;color:#056CF2;border:2px solid #056CF2}}}"]);t.Z=function(){return o.createElement(i,{className:"navbar"},o.createElement("div",{className:"left"},o.createElement("img",{src:"https://static.nicegoodthings.com/works/vera/wb-logo.png",className:"logo",alt:"webrowse logo"}),o.createElement("h2",{className:"title"},"webrowse")),o.createElement("div",{className:"middle"},o.createElement(a.default,{className:"curr"},o.createElement("a",{className:"link",href:"#home",ref:o.createRef()},"Home"),o.createElement("a",{className:"link",href:"#howto",ref:o.createRef()},"How It Works"))),o.createElement("div",{className:"right"},o.createElement("a",{className:"btn login",href:"#"},"Log In"),o.createElement("a",{className:"btn add",target:"_blank",href:"https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related"},"Add to Chrome")))}},3585:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=n(7294),r=n(9),a=n(5617),i=r.ZP.section.withConfig({displayName:"uninstall__StyledWrapper",componentId:"sc-11x4zd7-0"})(["font-size:24px;color:#000;font-weight:800;height:100vh;display:flex;align-items:center;justify-content:center;"]);function l(){return o.createElement(o.Fragment,null,o.createElement(a.Z,null),o.createElement(i,null,"Uninstalled Successfully"))}}}]);
//# sourceMappingURL=component---src-pages-uninstall-js-ee72fde1dfe45ee087ac.js.map