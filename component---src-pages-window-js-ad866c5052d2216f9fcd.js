"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[4076],{9032:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d},default:function(){return c}});var o=n(5785),i=n(7294),a=n(3494);const r=(0,a.keyframes)(["0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}"]),l=a.default.section.withConfig({displayName:"window__StyledTip",componentId:"sc-142oi36-0"})(["width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);background-size:400% 400%;animation:"," 15s ease infinite;.content{user-select:none;color:#fff;width:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center;.title{font-size:60px;font-weight:800;margin-bottom:60px;}.tabs{max-height:52vh;overflow:scroll;font-size:30px;display:flex;flex-direction:column;align-items:flex-start;list-style:none;gap:10px;.tab{font-size:24px;padding:12px 0px 12px 25px;border-radius:10px;border:1px solid #eee;transition:all .4s ease-in;width:600px;.link{padding:0 25px 0 35px;display:block;line-height:2;color:#fff;text-decoration:none;background-repeat:no-repeat;background-size:25px;background-position-x:left;background-position-y:center;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}&:hover{background:#eee;.link{color:#333}}}}.btn{cursor:pointer;font-size:30px;padding:12px 10px;border-radius:10px;border:1px solid #eee;text-transform:uppercase;background:none;color:#fff;margin-top:30px;transition:all .4s ease-in;&:hover{background:#eee;color:#555;}}}"],r),s={l:"http://localhost:4000",s:"https://stage.vera.nicegoodthings.com",o:"https://vera.nicegoodthings.com"};function c(){const e=(0,i.useRef)(null),{0:t,1:n}=(0,i.useState)(null),{0:a,1:r}=(0,i.useState)(null);(0,i.useEffect)((()=>{(async()=>{try{const e=new URLSearchParams(location.search),t=e.get("env")||"o",n=e.get("wid");if(console.log(n),!n)return;const o=await fetch(s[t]+"/webrowse/window/"+n);let i=await o.json();console.log({obj:i});const[a]=i.window||[];r(a)}catch(t){console.log({error:t}),n(t.message)}})()}),[]);if(t)return t;if(!a)return"loading";const{title:c,tabs:d}=a;return i.createElement(l,null,i.createElement("div",{className:"content"},i.createElement("h1",{className:"title"},c),i.createElement("ul",{className:"tabs",ref:e},d.map((e=>{let{id:t,title:n,icon:o,url:a}=e;return i.createElement("li",{className:"tab",key:t,title:n},i.createElement("a",{className:"link",href:a,target:"_blank",style:{backgroundImage:"url("+o+")"}},n))}))),i.createElement("button",{className:"btn",onClick:()=>{(0,o.Z)(e.current.querySelectorAll(".link")).forEach((e=>{e.click()}))}},"open all")))}function d(){return i.createElement("title",null,"workspace window landing page")}}}]);
//# sourceMappingURL=component---src-pages-window-js-ad866c5052d2216f9fcd.js.map