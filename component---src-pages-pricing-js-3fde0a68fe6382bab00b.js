"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[401],{1046:function(e,t,a){a.d(t,{w_:function(){return c}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(m,l({attr:l({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var a,r=e.attr,i=e.size,s=e.title,c=o(e,["attr","size","title"]),m=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},5617:function(e,t,a){var n=a(8634),r=a(2656),i=a.n(r),l=a(7294),o=a(9),s=a(5566),c=a(3941),m=o.default.nav.withConfig({displayName:"Navbar__NavStyles",componentId:"sc-18s8wx4-0"})(["position:absolute;left:0;top:0;width:100%;display:flex;align-items:center;justify-content:space-between;background:transparent;padding:15px 110px;@media screen and (max-width:414px){padding:15px 20px;}.left{display:flex;align-items:center;.logo{width:32px;height:32px;margin-right:8px;}.title{text-transform:capitalize;font-size:20px;line-height:25px;color:#fff;margin-right:32px;}}.middle{display:flex;gap:20px;.link{color:#787878;font-size:14px;line-height:18px;text-decoration:none;&:hover{color:#056CF2;}&.curr{border-bottom:1px solid #787877;}}}.right{display:flex;gap:16px;font-size:16px;@media screen and (max-width:414px){display:none;}.btn{cursor:pointer;text-decoration:none;border-radius:50px;background:#52EDFF;border:none;font-size:14px;font-weight:bold;padding:12px 24px;color:#000;display:flex;align-items:center;&.login{background:none;color:#52EDFF;border:2px solid #52EDFF}}}"]);t.Z=function(e){var t=e.curr,a=void 0===t?"home":t,r=e.updateUser,o=void 0===r?null:r,p=(0,l.useState)(null),d=p[0],u=p[1],g=(0,l.useState)(!1),f=g[0],h=g[1];(0,l.useEffect)((function(){o&&o(d)}),[d]);var x=function(){var e=(0,n.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrentUser();case 2:a=e.sent,console.log({currUser:a}),a&&(h(!1),u(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("login",{user:t}),u(t),h(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.createElement(l.Fragment,null,l.createElement(s.AuthingGuard,{visible:f,onRegisterInfoCompleted:function(e){u(e),h(!1)},onClose:function(){h(!1)},onLogin:b,onLoad:x,appId:c.Jf,config:c.ZP}),l.createElement(m,{className:"navbar"},l.createElement("div",{className:"left"},l.createElement("img",{src:"https://static.nicegoodthings.com/project/ext/wb.logo.png",className:"logo",alt:"webrowse logo"}),l.createElement("h2",{className:"title"},"webrowse")),l.createElement("div",{className:"middle"},l.createElement("a",{className:"link "+("home"==a?"curr":""),href:"/#home"},"Home"),l.createElement("a",{className:"link "+("pricing"==a?"curr":""),href:"/pricing"},"Pricing"),l.createElement("a",{className:"link",href:"https://discord.gg/9SrEhwXz",target:"_blank"},"Discord")),l.createElement("div",{className:"right"},d?l.createElement("a",{className:"btn login",href:"#"},d.username):l.createElement("button",{className:"btn login",onClick:function(){h(!0)}},"Log In"),l.createElement("a",{href:"https://cron.com/han/bs4y4zus",target:"_blank",className:"btn typeform"},"Request Demo"))))}},9409:function(e,t,a){var n=a(7294),r=a(5414),i=a(9499),l=a(5444),o=function(e){var t=e.title,a=e.description,o=e.lang,c=e.image,m=e.article,p=(0,i.useLocation)().pathname,d=(0,l.K2)(s).site.siteMetadata,u=d.defaultTitle,g=d.titleTemplate,f=d.defaultDescription,h=d.authorSite,x=d.defaultImage,b=d.twitterUsername,E={title:t||u,description:a||f,image:""+h+(c||x),url:""+h+p};return n.createElement(r.q,{htmlAttributes:{lang:o},title:E.title,titleTemplate:g},n.createElement("meta",{name:"description",content:E.description}),n.createElement("meta",{name:"image",content:E.image}),E.url&&n.createElement("meta",{property:"og:url",content:E.url}),!m?null:n.createElement("meta",{property:"og:type",content:"article"}),E.title&&n.createElement("meta",{property:"og:title",content:E.title}),E.description&&n.createElement("meta",{property:"og:description",content:E.description}),E.image&&n.createElement("meta",{property:"og:image",content:E.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),b&&n.createElement("meta",{name:"twitter:creator",content:b}),E.title&&n.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&n.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&n.createElement("meta",{name:"twitter:image",content:E.image}))};t.Z=o,o.defaultProps={title:null,description:null,image:null,lang:"en",article:!1};var s="3896500540"},7245:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(9),i=a(3201),l=r.default.footer.withConfig({displayName:"WebrowseFooter__StyledFooter",componentId:"sc-11amfp2-0"})(["background-color:#19181D;padding:0 112px;margin-top:100px;@media screen and (max-width:414px){padding:0 20px;}.wrapper{padding:32px 0;border-top:1px solid #333;display:flex;justify-content:space-between;.copyright{color:#787878;}.socials{display:flex;gap:10px;align-items:center;}}"]),o=r.default.section.withConfig({displayName:"WebrowseFooter__StyledNewsletter",componentId:"sc-11amfp2-1"})(["width:100%;padding:48px 112px;background:#212026;@media screen and (max-width:414px){padding:48px 20px;}.wrapper{display:flex;justify-content:space-between;width:100%;margin:0 auto;@media screen and (max-width:414px){flex-direction:column;gap:20px;}.info{display:flex;flex-direction:column;align-items:flex-start;gap:16px;.title{color:#fff;font-weight:600;font-size:30px;line-height:38px;}.desc{color:rgba(228,231,236,0.7);font-weight:normal;font-size:20px;line-height:30px;}}.subscribe{display:flex;flex-direction:column;align-items:flex-start;gap:6px;.submit{display:flex;align-items:center;gap:16px;@media screen and (max-width:414px){flex-direction:column;align-items:flex-start;}input{outline:none;padding:10px 14px;font-size:16px;line-height:24px;width:280px;border:none;background:#FFFFFF;border:1px solid #D0D5DD;box-shadow:0px 1px 2px rgba(16,24,40,0.05);border-radius:8px;}.btn{cursor:pointer;width:fit-content;border:none;padding:10px 18px;font-weight:500;font-size:16px;line-height:24px;color:#19181D;background:#1FE1F9;box-shadow:0px 1px 2px rgba(16,24,40,0.05);border-radius:8px;}}.tip{font-weight:normal;font-size:14px;line-height:20px;color:#667085;}}}"]);function s(){return n.createElement(n.Fragment,null,n.createElement(o,{className:"newsletter"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"info"},n.createElement("h3",{className:"title"},"Get notified"),n.createElement("p",{className:"desc"},"Stay up to date with the latest news, announcements, and articles.")),n.createElement("div",{className:"subscribe"},n.createElement("form",{action:"https://www.getrevue.co/profile/privoce/add_subscriber",method:"post",id:"revue-form",name:"revue-form",target:"_blank"},n.createElement("div",{className:"submit"},n.createElement("input",{required:!0,type:"email",name:"member[email]",id:"member_email",placeholder:"Enter your email"}),n.createElement("input",{className:"btn",type:"submit",value:"Subscribe",name:"member[subscribe]",id:"member_submit"}))),n.createElement("span",{className:"tip"},"No Spam. Ever.")))),n.createElement(l,null,n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"copyright"},"© 2021  Privoce. All rights reserved."),n.createElement("ul",{className:"socials"},n.createElement("li",{className:"social"},n.createElement("a",{href:"https://github.com/Privoce/webrowse",target:"_blank",rel:"noopener noreferrer"},n.createElement(i.hJX,{size:24,color:"#787878"})))))))}},8019:function(e,t,a){a.d(t,{b:function(){return n},D:function(){return r}});var n="https://vera.nicegoodthings.com/subscription/create",r="https://vera.nicegoodthings.com/invite/"},5200:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(1504),r=a(7294),i=a(9),l=a(6199),o=a(3750),s=a(9409),c=a(5617),m=a(8634),p=a(2656),d=a.n(p),u=a(5566),g=a(3941),f=a(8019);function h(e){var t=e.priceId,a=void 0===t?null:t,n=e.user,i=e.txt,l=void 0===i?"Start 14-day free trial":i,o=(0,r.useState)(!1),s=o[0],c=o[1],p=(0,r.useState)(null),h=p[0],x=p[1],b=(0,r.useState)(!1),E=b[0],w=b[1];(0,r.useEffect)((function(){x(n)}),[n]);var y=function(){var e=(0,m.Z)(d().mark((function e(t){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrentUser();case 2:a=e.sent,console.log({currUser:a}),a&&(w(!1),x(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=(0,m.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("login",{user:t}),x(t),w(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,m.Z)(d().mark((function e(){var t,n,r,i,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return w(!0),e.abrupt("return");case 3:if(a&&!s){e.next=5;break}return e.abrupt("return");case 5:return console.log(a),t=h.id,n=h.username,r=h.email,c(!0),e.next=10,fetch(f.b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({priceId:a,user:{id:t,username:n,email:r}})});case 10:return i=e.sent,e.next=13,i.json();case 13:(l=e.sent)&&l.session_url&&(location.href=l.session_url),c(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement(u.AuthingGuard,{visible:E,onRegisterInfoCompleted:function(e){x(e),w(!1)},onClose:function(){w(!1)},onLogin:N,onLoad:y,appId:g.Jf,config:g.ZP}),r.createElement("button",{disabled:s,className:"btn",onClick:v},s?"Initialing":l))}var x=a(7245),b=(0,i.keyframes)(["from{opacity:0.4;}to{opacity:0.1;}"]),E=i.default.section.withConfig({displayName:"pricing__StyledContainer",componentId:"sc-1jz9ak3-0"})(["font-family:Arial,Helvetica,sans-serif;position:relative;padding-top:156px;padding-bottom:80px;background:#19181D;.bg{position:absolute;pointer-events:none;&.blob{&.left{left:0;top:25%;height:800px;}&.right{right:0;top:0;height:789px;}}&.dots{animation:",' 2s ease infinite;animation-direction:alternate;opacity:.4;&.left{animation-delay:.5s;left:0;top:25%;width:360px;@media screen and (max-width:414px){width:180px;}}&.right{right:0;top:0;width:250px;@media screen and (max-width:414px){width:150px;}}}}.wrapper{position:relative;max-width:1300px;margin:0 auto;.pricing,.plans{color:#fff;display:flex;flex-direction:column;align-items:center;>.title{font-weight:800;font-size:56px;line-height:70px;}}.pricing{.select_plan{display:flex;align-items:center;gap:10px;margin-bottom:78px;.txt{font-weight:bold;font-size:24px;line-height:30px;}.toggle{cursor:pointer;padding:0 4px;display:flex;align-items:center;width:40px;height:28px;background-color:#fff;border-radius:20px;.circle{width:18px;height:18px;border-radius:50%;background-color:#19181d;transition:all .2s ease-in-out;}}&.ann .toggle .circle{transform:translateX(14px);}}>.desc{font-weight:600;font-size:24px;line-height:30px;text-align:center;color:rgba(255,255,255,0.5);margin-bottom:44px;}.cols{display:flex;list-style:none;gap:72px;@media screen and (max-width:414px){flex-direction:column;}.col{display:flex;flex-direction:column;align-items:flex-start;background:rgba(40,40,40,0.8);border:2px solid #FFFFFF;border-radius:20px;padding:20px;padding-bottom:80px;width:326px;.head{font-weight:800;font-size:48px;line-height:60px;margin-bottom:16px;}>.desc{font-size:18px;line-height:23px;color:#FFFFFF;margin-bottom:16px;}.price{margin-bottom:19px;font-size:24px;em{font-size:200%;}}.btn{cursor:pointer;border:none;color:#222;text-decoration:none;padding:12px 24px;background:#FFFFFF;border-radius:50px;margin-bottom:44px;}.feats{display:flex;flex-direction:column;justify-content:flex-start;.title{font-weight:bold;font-size:24px;line-height:30px;margin-bottom:16px;}.list{display:flex;flex-direction:column;list-style:none;gap:16.5px;.item{position:relative;margin-left:24px;&:before{content:"ヘ";transform:rotateX(180deg);position:absolute;left:-22px;top:0;}}}}&.pro{position:relative;border-width:6px;border-color:transparent;background:linear-gradient(rgba(40,40,40),rgba(40,40,40)) padding-box,linear-gradient(153.06deg,#3C8CE7 4.31%,#63EDE6 56.27%) border-box;.btn{color:#000;background:#52EDFF;}&.ann:after{content:"Save 33%";position:absolute;top:0;right:0;font-weight:800;font-size:24px;line-height:30px;padding:4px 20px;padding-left:25px;background:linear-gradient(90deg,#5695e4 10%,#61ade4 70%);border-bottom-left-radius:20px;border-top-right-radius:10px;}}}}}.plans{margin-top:220px;padding-bottom:84px;@media screen and (max-width:414px){display:none;}>.title{font-size:36px;line-height:45px;margin-bottom:56px;}>.desc{display:flex;margin-bottom:40px;width:100%;justify-content:space-between;align-items:center;padding:0 15px;.left{width:290px;margin-right:99px;.head{font-weight:bold;font-size:36px;line-height:45px;}.intro{font-weight:normal;font-size:26px;line-height:33px;color:rgba(255,255,255,0.5);}}.right{display:flex;justify-content:space-between;gap:52px;list-style:none;.box{width:210px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;background:rgba(40,40,40,0.8);border:2px solid #FFFFFF;border-radius:20px;padding:10px 42px 26px 42px;.head{font-weight:800;font-size:32px;line-height:40px;}.price{font-size:24px;line-height:60px;margin-bottom:7px;em{font-size:200%;}}.btn{white-space:nowrap;color:#19181D;padding:11px 24px;border:none;background:#FFFFFF;border-radius:50px;font-size:14px;line-height:14px;}&.pro{border-width:5px;border-color:transparent;background:linear-gradient(rgba(40,40,40),rgba(40,40,40)) padding-box,linear-gradient(153.06deg,#3C8CE7 4.31%,#63EDE6 56.27%) border-box;.btn{background:#52EDFF;}}}}}.table{width:100%;position:relative;padding:20px 30px;width:100%;background:rgba(40,40,40,0.8);border-radius:20px;table{width:100%;.header{font-weight:bold;font-size:36px;line-height:45px;margin-bottom:10px;}.row{display:flex;justify-content:space-between;font-weight:normal;font-size:24px;line-height:30px;padding:25px 0;&:not(:last-child){border-bottom:1px solid #828282;}.feat{width:500px;}.val{width:230px;text-align:center;}}}}}}'],b),w=i.default.section.withConfig({displayName:"pricing__StyledFAQ",componentId:"sc-1jz9ak3-1"})(["background-color:#19181D;color:#fff;display:flex;flex-direction:column;align-items:center;padding:140px 0;.header{font-weight:600;font-size:36px;line-height:44px;margin-bottom:20px;}.desc{font-weight:normal;font-size:20px;line-height:30px;margin-bottom:64px;}@media screen and (max-width:414px){.header,.desc{width:90%;}}.list{display:flex;flex-direction:column;width:768px;@media screen and (max-width:414px){width:90%;}.ask{border-top:1px solid #E4E7EC;padding-top:24px;padding-bottom:24px;font-weight:500;font-size:18px;line-height:28px;display:flex;align-items:center;justify-content:space-between;.toggle{cursor:pointer;&.collapse{display:none;}&.expand{display:block;}}&.expand{padding-bottom:0;.expand{display:none;}.collapse{display:block;}}&.expand + .ans{display:block;}}.ans{display:none;color:#667085;font-weight:normal;font-size:16px;line-height:24px;padding-bottom:32px;}}"]),y={mon:{count:12,pid:"price_1K6tQBGGoUDRyc3jJrnb7WfJ"},ann:{count:8,pid:"price_1JzO1gGGoUDRyc3jXCY8WMmH"}},N=[{ask:"Is there a free trial available?",ans:"Yes, you can try our Pro plan for for free for 14 days. If you'd like, we can also provide a free, personalized 30-minute onboarding call to get you up and running."},{ask:"What is included in my free trial?",ans:"The 14 day free trial includes access to all features in the Pro plan."},{ask:"What happens after my free trial ends?",ans:"After the 14 day trial, you will be automatically be charged for the plan you have selected. You can always cancel before the end of your trial period for no charge. We will notify you of the end of your trial ending as that date is approaching."},{ask:"Can I change my subscription plan later?",ans:"Yes. You can change your subscription plan at any time. Any upgrade to a higher subscription will take place immediately. Any downgrade to a lower subscription will take place at the next billing date. If you purchased an annual subscription, please get in contact with us to change your plan."},{ask:"How does billing work?",ans:"You can either be billed monthly or annually. We have a discount on annual billing! Our accepted payment method is credit card, debit card, and G Pay."},{ask:"What is the difference between an initiator, host, and participant?",ans:"An initiator has the ability to start the cobrowsing session. Participants refer to any user in the cobrowsing session. The host is the primary user whose windows and tabs the participants follow. Typically the initiator is the host by default, however host privileges can be transferred between participants."}],v=function(){var e=(0,r.useRef)(null),t=(0,r.useState)(null),a=t[0],i=t[1],m=(0,r.useState)("ann"),p=m[0],d=m[1],u=function(t){var a=t.currentTarget;(0,n.Z)(e.current.querySelectorAll(".ask")).forEach((function(e){e.classList.remove("expand")})),console.log({currentTarget:a}),a.parentElement.classList.toggle("expand")};return r.createElement(r.Fragment,null,r.createElement(s.Z,null),r.createElement(E,{className:"viewport",id:"pricing"},r.createElement("img",{className:"bg blob left",src:"https://static.nicegoodthings.com/project/ext/wb.left-middle-blob.png",alt:"blob"}),r.createElement("img",{className:"bg blob right",src:"https://static.nicegoodthings.com/project/ext/wb.right-top-blob.png",alt:"blob"}),r.createElement("img",{className:"bg dots left",src:"https://static.nicegoodthings.com/project/ext/wb.dots.left.btm.png",alt:"dots"}),r.createElement("img",{className:"bg dots right",src:"https://static.nicegoodthings.com/project/ext/wb.dots.right.top.png",alt:"dots"}),r.createElement(c.Z,{curr:"pricing",updateUser:i}),r.createElement("section",{className:"wrapper"},r.createElement("div",{className:"pricing"},r.createElement("h2",{className:"title"},"Pricing"),r.createElement("p",{className:"desc"},"Pick the perfect plan for your team"),r.createElement("div",{className:"select_plan "+p},r.createElement("span",{className:"txt"},"Monthly"),r.createElement("div",{className:"toggle",onClick:function(){d((function(e){return"mon"==e?"ann":"mon"}))}},r.createElement("div",{className:"circle"})),r.createElement("span",{className:"txt"},"Annual")),r.createElement("ul",{className:"cols"},r.createElement("li",{className:"col free"},r.createElement("h4",{className:"head"},"Free"),r.createElement("p",{className:"desc"},"Fast and easy way to get started cobrowing with your team"),r.createElement("span",{className:"price"},r.createElement("em",null,"$0"),"/mo"),r.createElement("a",{href:"https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn",target:"_blank",className:"btn"},"Add to Chrome"),r.createElement("div",{className:"feats"},r.createElement("h5",{className:"title"},"Key Features"),r.createElement("ul",{className:"list"},r.createElement("li",{className:"item"},"Up to 10 participants"),r.createElement("li",{className:"item"},"Up to 5 tabs")))),r.createElement("li",{className:"col pro "+p},r.createElement("h4",{className:"head"},"Pro"),r.createElement("p",{className:"desc"},"Advanced cobrowsing for professional teams"),r.createElement("span",{className:"price"},r.createElement("em",null,"$",y[p].count),"/mo"),r.createElement(h,{priceId:y[p].pid,user:a}),r.createElement("div",{className:"feats"},r.createElement("h5",{className:"title"},"Key Features"),r.createElement("ul",{className:"list"},r.createElement("li",{className:"item"},"Unlimited Participants"),r.createElement("li",{className:"item"},"Unlimited Participants Tabs"),r.createElement("li",{className:"item"},"Voice Channel")))),r.createElement("li",{className:"col enterprise"},r.createElement("h4",{className:"head"},"Enterprise"),r.createElement("p",{className:"desc"},"Fast and easy way to get started cobrowing with your team"),r.createElement("span",{className:"price"},r.createElement("em",null,"Let's Talk")),r.createElement("a",{className:"btn"},"Contact Us"),r.createElement("div",{className:"feats"},r.createElement("h5",{className:"title"},"Key Features"),r.createElement("ul",{className:"list"},r.createElement("li",{className:"item"},"Unlimited Participants"),r.createElement("li",{className:"item"},"Unlimited Participants Tabs"),r.createElement("li",{className:"item"},"Unlimited Saved Windows"),r.createElement("li",{className:"item"},"Unlimited Initiators")))))),r.createElement("div",{className:"plans"},r.createElement("h2",{className:"title"},"Compare Plans"),r.createElement("div",{className:"desc"},r.createElement("div",{className:"left"},r.createElement("h4",{className:"head"},"Features by plan"),r.createElement("p",{className:"intro"},"Compare plans to find the subscription that best fits for your team.")),r.createElement("ul",{className:"right"},r.createElement("li",{className:"box"},r.createElement("h5",{className:"head"},"Free"),r.createElement("span",{className:"price"},r.createElement("em",null,"$0"),"/mo"),r.createElement("button",{className:"btn"},"Get Started")),r.createElement("li",{className:"box pro"},r.createElement("h5",{className:"head"},"Pro"),r.createElement("span",{className:"price"},r.createElement("em",null,"$",y[p].count),"/mo"),r.createElement(h,{priceId:y[p].pid,user:a,txt:"Start Free Trial"})),r.createElement("li",{className:"box"},r.createElement("h5",{className:"head"},"Enterprise"),r.createElement("span",{className:"price"},"-"),r.createElement("button",{className:"btn"},"Contact Us")))),r.createElement("div",{className:"table"},r.createElement("table",null,r.createElement("thead",{className:"header"},"Key Features"),r.createElement("tbody",null,r.createElement("tr",{className:"row"},r.createElement("td",{className:"feat"},"Number of Participants"),r.createElement("td",{className:"val"},"10"),r.createElement("td",{className:"val"},"Unlimited"),r.createElement("td",{className:"val"},"Unlimited")),r.createElement("tr",{className:"row"},r.createElement("td",{className:"feat"},"Number of Tabs"),r.createElement("td",{className:"val"},"5"),r.createElement("td",{className:"val"},"Unlimited"),r.createElement("td",{className:"val"},"Unlimited")),r.createElement("tr",{className:"row"},r.createElement("td",{className:"feat"},"Number of Initiators"),r.createElement("td",{className:"val"},"1"),r.createElement("td",{className:"val"},"1"),r.createElement("td",{className:"val"},"Unlimited")),r.createElement("tr",{className:"row"},r.createElement("td",{className:"feat"},"Voice Channel"),r.createElement("td",{className:"val"},"10"),r.createElement("td",{className:"val"},"Unlimited"),r.createElement("td",{className:"val"},"Unlimited"))))))),r.createElement(w,null,r.createElement("h3",{className:"header"},"Frequently asked questions"),r.createElement("p",{className:"desc"},"Everything you need to know about the product and billing."),r.createElement("div",{className:"list"},N.map((function(t,a){var n=t.ask,i=t.ans;return r.createElement("dl",{key:n,className:"list",ref:e},r.createElement("dt",{className:"ask "+(0==a?"expand":"")},n," ",r.createElement(o.FS3,{onClick:u,className:"collapse toggle",color:"#98A2B3"}),"  ",r.createElement(l.RWZ,{onClick:u,className:"expand toggle",color:"#1FE1F9"})),r.createElement("dd",{className:"ans"},i))}))))),r.createElement(x.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-pricing-js-3fde0a68fe6382bab00b.js.map