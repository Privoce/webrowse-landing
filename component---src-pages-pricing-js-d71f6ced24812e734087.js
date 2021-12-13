"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[401],{1046:function(e,t,a){a.d(t,{w_:function(){return c}});var n=a(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(i),r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,r({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(m,r({attr:r({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var a,i=e.attr,l=e.size,s=e.title,c=o(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:a,style:r(r({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(i)}},9409:function(e,t,a){var n=a(7294),i=a(5414),l=a(9499),r=a(5444),o=function(e){var t=e.title,a=e.description,o=e.lang,c=e.image,m=e.article,p=(0,l.useLocation)().pathname,d=(0,r.K2)(s).site.siteMetadata,g=d.defaultTitle,h=d.titleTemplate,u=d.defaultDescription,x=d.authorSite,f=d.defaultImage,b=d.twitterUsername,E={title:t||g,description:a||u,image:""+x+(c||f),url:""+x+p};return n.createElement(i.q,{htmlAttributes:{lang:o},title:E.title,titleTemplate:h},n.createElement("meta",{name:"description",content:E.description}),n.createElement("meta",{name:"image",content:E.image}),E.url&&n.createElement("meta",{property:"og:url",content:E.url}),!m?null:n.createElement("meta",{property:"og:type",content:"article"}),E.title&&n.createElement("meta",{property:"og:title",content:E.title}),E.description&&n.createElement("meta",{property:"og:description",content:E.description}),E.image&&n.createElement("meta",{property:"og:image",content:E.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),b&&n.createElement("meta",{name:"twitter:creator",content:b}),E.title&&n.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&n.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&n.createElement("meta",{name:"twitter:image",content:E.image}))};t.Z=o,o.defaultProps={title:null,description:null,image:null,lang:"en",article:!1};var s="3896500540"},7245:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),i=a(9),l=a(3201),r=i.default.footer.withConfig({displayName:"WebrowseFooter__StyledFooter",componentId:"sc-11amfp2-0"})(["background-color:#19181D;padding:0 112px;margin-top:100px;@media screen and (max-width:414px){padding:0 20px;}.wrapper{padding:32px 0;border-top:1px solid #333;display:flex;justify-content:space-between;.copyright{color:#787878;}.socials{display:flex;gap:10px;align-items:center;}}"]),o=i.default.section.withConfig({displayName:"WebrowseFooter__StyledNewsletter",componentId:"sc-11amfp2-1"})(["width:100%;padding:48px 112px;background:#212026;@media screen and (max-width:414px){padding:48px 20px;}.wrapper{display:flex;justify-content:space-between;width:100%;margin:0 auto;@media screen and (max-width:414px){flex-direction:column;gap:20px;}.info{display:flex;flex-direction:column;align-items:flex-start;gap:16px;.title{color:#fff;font-weight:600;font-size:30px;line-height:38px;}.desc{color:rgba(228,231,236,0.7);font-weight:normal;font-size:20px;line-height:30px;}}.subscribe{display:flex;flex-direction:column;align-items:flex-start;gap:6px;.submit{display:flex;align-items:center;gap:16px;@media screen and (max-width:414px){flex-direction:column;align-items:flex-start;}input{outline:none;padding:10px 14px;font-size:16px;line-height:24px;width:280px;border:none;background:#FFFFFF;border:1px solid #D0D5DD;box-shadow:0px 1px 2px rgba(16,24,40,0.05);border-radius:8px;}.btn{cursor:pointer;width:fit-content;border:none;padding:10px 18px;font-weight:500;font-size:16px;line-height:24px;color:#19181D;background:#1FE1F9;box-shadow:0px 1px 2px rgba(16,24,40,0.05);border-radius:8px;}}.tip{font-weight:normal;font-size:14px;line-height:20px;color:#667085;}}}"]);function s(){return n.createElement(n.Fragment,null,n.createElement(o,{className:"newsletter"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"info"},n.createElement("h3",{className:"title"},"Get notified"),n.createElement("p",{className:"desc"},"Stay up to date with the latest news, announcements, and articles.")),n.createElement("div",{className:"subscribe"},n.createElement("form",{action:"https://www.getrevue.co/profile/privoce/add_subscriber",method:"post",id:"revue-form",name:"revue-form",target:"_blank"},n.createElement("div",{className:"submit"},n.createElement("input",{required:!0,type:"email",name:"member[email]",id:"member_email",placeholder:"Enter your email"}),n.createElement("input",{className:"btn",type:"submit",value:"Subscribe",name:"member[subscribe]",id:"member_submit"}))),n.createElement("span",{className:"tip"},"No Spam. Ever.")))),n.createElement(r,null,n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"copyright"},"© 2021  Privoce. All rights reserved."),n.createElement("ul",{className:"socials"},n.createElement("li",{className:"social"},n.createElement("a",{href:"https://github.com/Privoce/webrowse",target:"_blank",rel:"noopener noreferrer"},n.createElement(l.hJX,{size:24,color:"#787878"})))))))}},7680:function(e,t,a){a.r(t);var n=a(1504),i=a(7294),l=a(9),r=a(6199),o=a(3750),s=a(9409),c=a(7245),m=i.lazy((function(){return Promise.all([a.e(532),a.e(623),a.e(305),a.e(181),a.e(617)]).then(a.bind(a,5617))})),p=i.lazy((function(){return Promise.all([a.e(532),a.e(623),a.e(305),a.e(181),a.e(347)]).then(a.bind(a,3347))})),d=(0,l.keyframes)(["from{opacity:0.4;}to{opacity:0.1;}"]),g=l.default.section.withConfig({displayName:"pricing__StyledContainer",componentId:"sc-1jz9ak3-0"})(["font-family:Arial,Helvetica,sans-serif;position:relative;padding-top:156px;padding-bottom:80px;background:#19181D;.bg{position:absolute;pointer-events:none;&.blob{&.left{left:0;top:25%;height:800px;}&.right{right:0;top:0;height:789px;}}&.dots{animation:",' 2s ease infinite;animation-direction:alternate;opacity:.4;&.left{animation-delay:.5s;left:0;top:25%;width:360px;@media screen and (max-width:414px){width:180px;}}&.right{right:0;top:0;width:250px;@media screen and (max-width:414px){width:150px;}}}}.wrapper{position:relative;max-width:1300px;margin:0 auto;.pricing,.plans{color:#fff;display:flex;flex-direction:column;align-items:center;>.title{font-weight:800;font-size:56px;line-height:70px;}}.pricing{.select_plan{display:flex;align-items:center;gap:10px;margin-bottom:78px;.txt{font-weight:bold;font-size:24px;line-height:30px;}.toggle{cursor:pointer;padding:0 4px;display:flex;align-items:center;width:40px;height:28px;background-color:#fff;border-radius:20px;.circle{width:18px;height:18px;border-radius:50%;background-color:#19181d;transition:all .2s ease-in-out;}}&.ann .toggle .circle{transform:translateX(14px);}}>.desc{font-weight:600;font-size:24px;line-height:30px;text-align:center;color:rgba(255,255,255,0.5);margin-bottom:44px;}.cols{display:flex;list-style:none;gap:72px;@media screen and (max-width:414px){flex-direction:column;}.col{display:flex;flex-direction:column;align-items:flex-start;background:rgba(40,40,40,0.8);border:2px solid #FFFFFF;border-radius:20px;padding:20px;padding-bottom:80px;width:326px;.head{font-weight:800;font-size:48px;line-height:60px;margin-bottom:16px;}>.desc{font-size:18px;line-height:23px;color:#FFFFFF;margin-bottom:16px;}.price{margin-bottom:19px;font-size:24px;em{font-size:200%;}}.btn{cursor:pointer;border:none;color:#222;text-decoration:none;padding:12px 24px;background:#FFFFFF;border-radius:50px;margin-bottom:44px;}.feats{display:flex;flex-direction:column;justify-content:flex-start;.title{font-weight:bold;font-size:24px;line-height:30px;margin-bottom:16px;}.list{display:flex;flex-direction:column;list-style:none;gap:16.5px;.item{position:relative;margin-left:24px;&:before{content:"ヘ";transform:rotateX(180deg);position:absolute;left:-22px;top:0;}}}}&.pro{position:relative;border-width:6px;border-color:transparent;background:linear-gradient(rgba(40,40,40),rgba(40,40,40)) padding-box,linear-gradient(153.06deg,#3C8CE7 4.31%,#63EDE6 56.27%) border-box;.btn{color:#000;background:#52EDFF;}&.ann:after{content:"Save 33%";position:absolute;top:0;right:0;font-weight:800;font-size:24px;line-height:30px;padding:4px 20px;padding-left:25px;background:linear-gradient(90deg,#5695e4 10%,#61ade4 70%);border-bottom-left-radius:20px;border-top-right-radius:10px;}}}}}.plans{margin-top:220px;padding-bottom:84px;@media screen and (max-width:414px){display:none;}>.title{font-size:36px;line-height:45px;margin-bottom:56px;}>.desc{display:flex;margin-bottom:40px;width:100%;justify-content:space-between;align-items:center;padding:0 15px;.left{width:290px;margin-right:99px;.head{font-weight:bold;font-size:36px;line-height:45px;}.intro{font-weight:normal;font-size:26px;line-height:33px;color:rgba(255,255,255,0.5);}}.right{display:flex;justify-content:space-between;gap:52px;list-style:none;.box{width:210px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;background:rgba(40,40,40,0.8);border:2px solid #FFFFFF;border-radius:20px;padding:10px 42px 26px 42px;.head{font-weight:800;font-size:32px;line-height:40px;}.price{font-size:24px;line-height:60px;margin-bottom:7px;em{font-size:200%;}}.btn{white-space:nowrap;color:#19181D;padding:11px 24px;border:none;background:#FFFFFF;border-radius:50px;font-size:14px;line-height:14px;}&.pro{border-width:5px;border-color:transparent;background:linear-gradient(rgba(40,40,40),rgba(40,40,40)) padding-box,linear-gradient(153.06deg,#3C8CE7 4.31%,#63EDE6 56.27%) border-box;.btn{background:#52EDFF;}}}}}.table{width:100%;position:relative;padding:20px 30px;width:100%;background:rgba(40,40,40,0.8);border-radius:20px;table{width:100%;.header{font-weight:bold;font-size:36px;line-height:45px;margin-bottom:10px;}.row{display:flex;justify-content:space-between;font-weight:normal;font-size:24px;line-height:30px;padding:25px 0;&:not(:last-child){border-bottom:1px solid #828282;}.feat{width:500px;}.val{width:230px;text-align:center;}}}}}}'],d),h=l.default.section.withConfig({displayName:"pricing__StyledFAQ",componentId:"sc-1jz9ak3-1"})(["background-color:#19181D;color:#fff;display:flex;flex-direction:column;align-items:center;padding:140px 0;.header{font-weight:600;font-size:36px;line-height:44px;margin-bottom:20px;}.desc{font-weight:normal;font-size:20px;line-height:30px;margin-bottom:64px;}@media screen and (max-width:414px){.header,.desc{width:90%;}}.list{display:flex;flex-direction:column;width:768px;@media screen and (max-width:414px){width:90%;}.ask{border-top:1px solid #E4E7EC;padding-top:24px;padding-bottom:24px;font-weight:500;font-size:18px;line-height:28px;display:flex;align-items:center;justify-content:space-between;.toggle{cursor:pointer;&.collapse{display:none;}&.expand{display:block;}}&.expand{padding-bottom:0;.expand{display:none;}.collapse{display:block;}}&.expand + .ans{display:block;}}.ans{display:none;color:#667085;font-weight:normal;font-size:16px;line-height:24px;padding-bottom:32px;}}"]),u={mon:{count:12,pid:"price_1K4mfvGGoUDRyc3jLnmNgDzv"},ann:{count:8,pid:"price_1K4mgaGGoUDRyc3jzDsPn8pN"}},x=[{ask:"Is there a free trial available?",ans:"Yes, you can try our Pro plan for for free for 14 days. If you'd like, we can also provide a free, personalized 30-minute onboarding call to get you up and running."},{ask:"What is included in my free trial?",ans:"The 14 day free trial includes access to all features in the Pro plan."},{ask:"What happens after my free trial ends?",ans:"After the 14 day trial, you will be automatically be charged for the plan you have selected. You can always cancel before the end of your trial period for no charge. We will notify you of the end of your trial ending as that date is approaching."},{ask:"Can I change my subscription plan later?",ans:"Yes. You can change your subscription plan at any time. Any upgrade to a higher subscription will take place immediately. Any downgrade to a lower subscription will take place at the next billing date. If you purchased an annual subscription, please get in contact with us to change your plan."},{ask:"How does billing work?",ans:"You can either be billed monthly or annually. We have a discount on annual billing! Our accepted payment method is credit card, debit card, and G Pay."},{ask:"What is the difference between an initiator, host, and participant?",ans:"An initiator has the ability to start the cobrowsing session. Participants refer to any user in the cobrowsing session. The host is the primary user whose windows and tabs the participants follow. Typically the initiator is the host by default, however host privileges can be transferred between participants."}];t.default=function(){var e=(0,i.useRef)(null),t=(0,i.useState)(null),a=t[0],l=t[1],d=(0,i.useState)("ann"),f=d[0],b=d[1],E=function(t){var a=t.currentTarget;(0,n.Z)(e.current.querySelectorAll(".ask")).forEach((function(e){e.classList.remove("expand")})),console.log({currentTarget:a}),a.parentElement.classList.toggle("expand")};return i.createElement(i.Suspense,{fallback:"loading"},i.createElement(s.Z,null),i.createElement(g,{className:"viewport",id:"pricing"},i.createElement("img",{className:"bg blob left",src:"https://static.nicegoodthings.com/project/ext/wb.left-middle-blob.png",alt:"blob"}),i.createElement("img",{className:"bg blob right",src:"https://static.nicegoodthings.com/project/ext/wb.right-top-blob.png",alt:"blob"}),i.createElement("img",{className:"bg dots left",src:"https://static.nicegoodthings.com/project/ext/wb.dots.left.btm.png",alt:"dots"}),i.createElement("img",{className:"bg dots right",src:"https://static.nicegoodthings.com/project/ext/wb.dots.right.top.png",alt:"dots"}),i.createElement(m,{curr:"pricing",updateUser:l}),i.createElement("section",{className:"wrapper"},i.createElement("div",{className:"pricing"},i.createElement("h2",{className:"title"},"Pricing"),i.createElement("p",{className:"desc"},"Pick the perfect plan for your team"),i.createElement("div",{className:"select_plan "+f},i.createElement("span",{className:"txt"},"Monthly"),i.createElement("div",{className:"toggle",onClick:function(){b((function(e){return"mon"==e?"ann":"mon"}))}},i.createElement("div",{className:"circle"})),i.createElement("span",{className:"txt"},"Annual")),i.createElement("ul",{className:"cols"},i.createElement("li",{className:"col free"},i.createElement("h4",{className:"head"},"Free"),i.createElement("p",{className:"desc"},"Fast and easy way to get started cobrowing with your team"),i.createElement("span",{className:"price"},i.createElement("em",null,"$0"),"/mo"),i.createElement("a",{href:"https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn",target:"_blank",className:"btn"},"Add to Chrome"),i.createElement("div",{className:"feats"},i.createElement("h5",{className:"title"},"Key Features"),i.createElement("ul",{className:"list"},i.createElement("li",{className:"item"},"Up to 10 participants"),i.createElement("li",{className:"item"},"Up to 5 tabs")))),i.createElement("li",{className:"col pro "+f},i.createElement("h4",{className:"head"},"Pro"),i.createElement("p",{className:"desc"},"Advanced cobrowsing for professional teams"),i.createElement("span",{className:"price"},i.createElement("em",null,"$",u[f].count),"/mo"),i.createElement(p,{priceId:u[f].pid,user:a}),i.createElement("div",{className:"feats"},i.createElement("h5",{className:"title"},"Key Features"),i.createElement("ul",{className:"list"},i.createElement("li",{className:"item"},"Unlimited Participants"),i.createElement("li",{className:"item"},"Unlimited Participants Tabs"),i.createElement("li",{className:"item"},"Voice Channel")))),i.createElement("li",{className:"col enterprise"},i.createElement("h4",{className:"head"},"Enterprise"),i.createElement("p",{className:"desc"},"Fast and easy way to get started cobrowing with your team"),i.createElement("span",{className:"price"},i.createElement("em",null,"Let's Talk")),i.createElement("a",{className:"btn"},"Contact Us"),i.createElement("div",{className:"feats"},i.createElement("h5",{className:"title"},"Key Features"),i.createElement("ul",{className:"list"},i.createElement("li",{className:"item"},"Unlimited Participants"),i.createElement("li",{className:"item"},"Unlimited Participants Tabs"),i.createElement("li",{className:"item"},"Unlimited Saved Windows"),i.createElement("li",{className:"item"},"Unlimited Initiators")))))),i.createElement("div",{className:"plans"},i.createElement("h2",{className:"title"},"Compare Plans"),i.createElement("div",{className:"desc"},i.createElement("div",{className:"left"},i.createElement("h4",{className:"head"},"Features by plan"),i.createElement("p",{className:"intro"},"Compare plans to find the subscription that best fits for your team.")),i.createElement("ul",{className:"right"},i.createElement("li",{className:"box"},i.createElement("h5",{className:"head"},"Free"),i.createElement("span",{className:"price"},i.createElement("em",null,"$0"),"/mo"),i.createElement("button",{className:"btn"},"Get Started")),i.createElement("li",{className:"box pro"},i.createElement("h5",{className:"head"},"Pro"),i.createElement("span",{className:"price"},i.createElement("em",null,"$",u[f].count),"/mo"),i.createElement(p,{priceId:u[f].pid,user:a,txt:"Start Free Trial"})),i.createElement("li",{className:"box"},i.createElement("h5",{className:"head"},"Enterprise"),i.createElement("span",{className:"price"},"-"),i.createElement("button",{className:"btn"},"Contact Us")))),i.createElement("div",{className:"table"},i.createElement("table",null,i.createElement("thead",{className:"header"},"Key Features"),i.createElement("tbody",null,i.createElement("tr",{className:"row"},i.createElement("td",{className:"feat"},"Number of Participants"),i.createElement("td",{className:"val"},"10"),i.createElement("td",{className:"val"},"Unlimited"),i.createElement("td",{className:"val"},"Unlimited")),i.createElement("tr",{className:"row"},i.createElement("td",{className:"feat"},"Number of Tabs"),i.createElement("td",{className:"val"},"5"),i.createElement("td",{className:"val"},"Unlimited"),i.createElement("td",{className:"val"},"Unlimited")),i.createElement("tr",{className:"row"},i.createElement("td",{className:"feat"},"Number of Initiators"),i.createElement("td",{className:"val"},"1"),i.createElement("td",{className:"val"},"1"),i.createElement("td",{className:"val"},"Unlimited")),i.createElement("tr",{className:"row"},i.createElement("td",{className:"feat"},"Voice Channel"),i.createElement("td",{className:"val"},"10"),i.createElement("td",{className:"val"},"Unlimited"),i.createElement("td",{className:"val"},"Unlimited"))))))),i.createElement(h,null,i.createElement("h3",{className:"header"},"Frequently asked questions"),i.createElement("p",{className:"desc"},"Everything you need to know about the product and billing."),i.createElement("div",{className:"list"},x.map((function(t,a){var n=t.ask,l=t.ans;return i.createElement("dl",{key:n,className:"list",ref:e},i.createElement("dt",{className:"ask "+(0==a?"expand":"")},n," ",i.createElement(o.FS3,{onClick:E,className:"collapse toggle",color:"#98A2B3"}),"  ",i.createElement(r.RWZ,{onClick:E,className:"expand toggle",color:"#1FE1F9"})),i.createElement("dd",{className:"ans"},l))}))))),i.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-pricing-js-d71f6ced24812e734087.js.map