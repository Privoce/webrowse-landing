(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[411],{4836:function(e){e.exports=function(){"use strict";var e={27:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.FORM_BASE_URL=t.POPUP_SIZE=t.SLIDER_WIDTH=t.SLIDER_POSITION=t.SIDETAB_ATTRIBUTE=t.WIDGET_ATTRIBUTE=t.SLIDER_ATTRIBUTE=t.POPUP_ATTRIBUTE=t.POPOVER_ATTRIBUTE=void 0,t.POPOVER_ATTRIBUTE="data-tf-popover",t.POPUP_ATTRIBUTE="data-tf-popup",t.SLIDER_ATTRIBUTE="data-tf-slider",t.WIDGET_ATTRIBUTE="data-tf-widget",t.SIDETAB_ATTRIBUTE="data-tf-sidetab",t.SLIDER_POSITION="right",t.SLIDER_WIDTH=800,t.POPUP_SIZE=100,t.FORM_BASE_URL="https://form.typeform.com"},528:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createPopover=void 0;var r=n(747),i=n(320),a=function(e){return!!e.parentNode},c=function(e,t){var n=e.parentNode;n&&(n.removeChild(e),n.appendChild(t))},u=function(e,t){void 0===e&&(e="div"),void 0===t&&(t="typeform-popover-button-icon");var n=document.createElement(e);return n.className=t,n.innerHTML="&times;",n.dataset.testid=t,n},s={buttonColor:"#3a7685"};t.createPopover=function(e,t){void 0===t&&(t={});var n,d,l,f,p,m,v=o(o({},s),t),y=r.createIframe(e,"popover",v),h=y.iframe,b=y.embedId,g=function(e,t){var n=document.createElement("div");return n.className="typeform-popover",n.dataset.testid="typeform-popover",r.setElementSize(n,{width:e,height:t})}(v.width,v.height),w=function(){var e=document.createElement("div");return e.className="typeform-popover-wrapper",e.dataset.testid="typeform-popover-wrapper",e}(),O=(n=v.customIcon,d=v.buttonColor||s.buttonColor,l=r.getTextColor(d),(f=document.createElement("div")).className="typeform-popover-button-icon",f.innerHTML=n?"<img alt='popover trigger icon button' src='"+n+"'/>":'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n    xmlns="http://www.w3.org/2000/svg">\n      <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="'+l+'"></path>\n    </svg>',f.dataset.testid="default-icon",f),_=function(){var e=document.createElement("div");e.className="typeform-spinner";var t=document.createElement("div");return t.className="typeform-popover-button-icon",t.dataset.testid="spinner-icon",t.append(e),t}(),E=u(),P=u("a","typeform-popover-close"),C=function(e){var t=r.getTextColor(e),n=document.createElement("button");return n.className="typeform-popover-button",n.dataset.testid="typeform-popover-button",n.style.backgroundColor=e,n.style.color=t,n}(v.buttonColor||s.buttonColor);(v.container||document.body).append(g),w.append(h),g.append(C),g.append(P),C.append(O);var j=function(){p&&p.parentNode&&(p.classList.add("closing"),setTimeout((function(){r.unmountElement(p)}),250))};v.tooltip&&v.tooltip.length>0&&(p=function(e,t){var n=document.createElement("span");n.className="typeform-popover-tooltip-close",n.dataset.testid="typeform-popover-tooltip-close",n.innerHTML="&times;",n.onclick=t;var o=document.createElement("div");o.className="typeform-popover-tooltip-text",o.innerHTML=e;var r=document.createElement("div");return r.className="typeform-popover-tooltip",r.dataset.testid="typeform-popover-tooltip",r.appendChild(o),r.appendChild(n),r}(v.tooltip,j),g.append(p)),v.notificationDays&&(v.enableSandbox||i.canBuildNotificationDot(e))&&(m=i.buildNotificationDot(),C.append(m)),h.onload=function(){g.classList.add("open"),w.style.opacity="1",P.style.opacity="1",c(_,E),r.addCustomKeyboardListener(M)};var T=function(){a(w)||(j(),m&&(m.classList.add("closing"),v.notificationDays&&!v.enableSandbox&&i.saveNotificationDotHideUntilTime(e,v.notificationDays),setTimeout((function(){r.unmountElement(m)}),250)),setTimeout((function(){g.append(w),w.style.opacity="0",P.style.opacity="0",c(O,_)})))},M=function(){var e;a(g)&&(null===(e=t.onClose)||void 0===e||e.call(t),setTimeout((function(){r.unmountElement(w),g.classList.remove("open"),c(E,O)}),250))};r.setAutoClose(b,v.autoClose,M);var I=function(){a(w)?M():T()};return C.onclick=I,P.onclick=M,v.open&&!a(w)&&r.handleCustomOpen(T,v.open,v.openValue),{open:T,close:M,toggle:I,refresh:function(){var e;null===(e=h.contentWindow)||void 0===e||e.location.reload()},unmount:function(){r.unmountElement(g)}}}},797:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(528),t),r(n(100),t)},320:function(e,t){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildNotificationDot=t.canBuildNotificationDot=t.saveNotificationDotHideUntilTime=void 0;var o="tfNotificationData",r=function(){var e=localStorage.getItem(o);return e?JSON.parse(e):{}},i=function(e){e&&localStorage.setItem(o,JSON.stringify(e))};t.saveNotificationDotHideUntilTime=function(e,t){var o,a=new Date;a.setDate(a.getDate()+t),i(n(n({},r()),((o={})[e]={hideUntilTime:a.getTime()},o)))},t.canBuildNotificationDot=function(e){var t=function(e){var t;return(null===(t=r()[e])||void 0===t?void 0:t.hideUntilTime)||0}(e);return(new Date).getTime()>t&&(t&&function(e){var t=r();delete t[e],i(t)}(e),!0)},t.buildNotificationDot=function(){var e=document.createElement("span");return e.className="typeform-popover-unread-dot",e.dataset.testid="typeform-popover-unread-dot",e}},100:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},630:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.createPopup=void 0;var r=n(747),i=n(27),a=function(e){return!!e.parentNode};t.createPopup=function(e,t){if(void 0===t&&(t={}),!r.hasDom())return{open:function(){},close:function(){},toggle:function(){},refresh:function(){},unmount:function(){}};var n=t.width,c=t.height,u=t.size,s=void 0===u?i.POPUP_SIZE:u,d=t.onClose,l=o(t,["width","height","size","onClose"]),f=r.createIframe(e,"popup",l),p=f.iframe,m=f.embedId,v=document.body.style.overflow,y=function(){var e=document.createElement("div");return e.className="typeform-popup",e.style.opacity="0",e}(),h=function(){var e=document.createElement("div");return e.className="typeform-spinner",e}(),b=function(e,t,n){var o=document.createElement("div");return o.className="typeform-iframe-wrapper",o.style.opacity="0",r.isDefined(e)&&r.isDefined(t)?r.setElementSize(o,{width:e,height:t}):(o.style.width="calc("+n+"% - 80px)",o.style.height="calc("+n+"% - 80px)",o)}(n,c,s);b.append(p),y.append(h),y.append(b);var g=l.container||document.body;p.onload=function(){b.style.opacity="1",setTimeout((function(){h.style.display="none"}),250),r.addCustomKeyboardListener(O)};var w=function(){a(y)||(g.append(y),document.body.style.overflow="hidden",setTimeout((function(){y.style.opacity="1"})))},O=function(){a(y)&&(null==d||d(),y.style.opacity="0",b.style.opacity="0",document.body.style.overflow=v,setTimeout((function(){_(),h.style.display="block"}),250))};b.append(function(e){var t=document.createElement("a");return t.className="typeform-close",t.innerHTML="&times;",t.onclick=e,t}(O)),r.setAutoClose(m,l.autoClose,O);var _=function(){r.unmountElement(y)};return l.open&&!a(y)&&r.handleCustomOpen(w,l.open,l.openValue),{open:w,close:O,toggle:function(){a(y)?O():w()},refresh:function(){var e;null===(e=p.contentWindow)||void 0===e||e.location.reload()},unmount:_}}},970:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(630),t),r(n(394),t)},394:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},382:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createSidetab=void 0;var r=n(747),i={buttonColor:"#3a7685",buttonText:"Launch me"},a=function(e){return!!e.parentNode},c=function(e,t){void 0===e&&(e="div"),void 0===t&&(t="typeform-sidetab-button-icon");var n=document.createElement(e);return n.className=t,n.innerHTML="&times;",n.dataset.testid=t,n},u=function(e,t){var n=e.parentNode;n&&(n.removeChild(e),n.appendChild(t))};t.createSidetab=function(e,t){void 0===t&&(t={});var n,s,d,l,f,p,m,v=o(o({},i),t),y=r.createIframe(e,"side-tab",v),h=y.iframe,b=y.embedId,g=(n=v.width,s=v.height,(d=document.createElement("div")).className="typeform-sidetab",d.dataset.testid="typeform-sidetab",r.setElementSize(d,{width:n,height:s})),w=function(){var e=document.createElement("div");return e.className="typeform-sidetab-wrapper",e.dataset.testid="typeform-sidetab-wrapper",e}(),O=function(){var e=document.createElement("div");e.className="typeform-spinner";var t=document.createElement("div");return t.className="typeform-sidetab-button-icon",t.dataset.testid="spinner-icon",t.append(e),t}(),_=function(e){var t=r.getTextColor(e),n=document.createElement("button");return n.className="typeform-sidetab-button",n.style.backgroundColor=e,n.style.color=t,n}(v.buttonColor||i.buttonColor),E=function(e){var t=document.createElement("span");return t.className="typeform-sidetab-button-text",t.innerHTML=e,t}(v.buttonText||i.buttonText),P=(l=v.customIcon,f=v.buttonColor||i.buttonColor,p=r.getTextColor(f),(m=document.createElement("div")).className="typeform-sidetab-button-icon",m.innerHTML=l?"<img alt='sidetab trigger icon button' src='"+l+'\' style="max-width: 100%; max-height: 100%" />':'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="'+p+'"></path>\n</svg>',m.dataset.testid="default-icon",m),C=c(),j=c("a","typeform-sidetab-close");document.body.append(g),w.append(h),g.append(_),g.append(j),_.append(P),_.append(E),setTimeout((function(){g.classList.add("ready")}),250),h.onload=function(){g.classList.add("open"),u(O,C),r.addCustomKeyboardListener(M)};var T=function(){a(w)||(g.append(w),u(P,O))},M=function(){var e;a(w)&&(null===(e=v.onClose)||void 0===e||e.call(v),g.classList.remove("open"),setTimeout((function(){r.unmountElement(w),u(C,P)}),250))};r.setAutoClose(b,v.autoClose,M);var I=function(){a(w)?M():T()};return _.onclick=I,j.onclick=M,v.open&&!a(w)&&r.handleCustomOpen(T,v.open,v.openValue),{open:T,close:M,toggle:I,refresh:function(){var e;null===(e=h.contentWindow)||void 0===e||e.location.reload()},unmount:function(){r.unmountElement(g)}}}},434:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(382),t),r(n(668),t)},668:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},603:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.createSlider=void 0;var r=n(747),i=n(27),a=function(e){return!!e.parentNode};t.createSlider=function(e,t){if(void 0===t&&(t={}),!r.hasDom())return{open:function(){},close:function(){},toggle:function(){},refresh:function(){},unmount:function(){}};var n=t.position,c=void 0===n?i.SLIDER_POSITION:n,u=t.width,s=void 0===u?i.SLIDER_WIDTH:u,d=t.onClose,l=o(t,["position","width","onClose"]),f=r.createIframe(e,"slider",l),p=f.iframe,m=f.embedId,v=document.body.style.overflow,y=function(e){var t=document.createElement("div");return t.className="typeform-slider "+e,t.style.opacity="0",t}(c),h=function(){var e=document.createElement("div");return e.className="typeform-spinner",e}(),b=function(e,t){var n=document.createElement("div");return n.className="typeform-iframe-wrapper",n.style[e]="-100%",r.setElementSize(n,{width:t})}(c,s);b.append(p),y.append(h),y.append(b);var g=l.container||document.body;p.onload=function(){b.style[c]="0",setTimeout((function(){h.style.display="none"}),500),r.addCustomKeyboardListener(O)};var w=function(){a(y)||(g.append(y),document.body.style.overflow="hidden",setTimeout((function(){y.style.opacity="1"})))},O=function(){a(y)&&(null==d||d(),y.style.opacity="0",b.style[c]="-100%",document.body.style.overflow=v,setTimeout((function(){y.parentNode.removeChild(y),h.style.display="block"}),500))};return r.setAutoClose(m,l.autoClose,O),b.append(function(e){var t=document.createElement("a");return t.className="typeform-close",t.innerHTML="&times;",t.onclick=e,t}(O)),l.open&&!a(y)&&r.handleCustomOpen(w,l.open,l.openValue),{open:w,close:O,toggle:function(){a(y)?O():w()},refresh:function(){var e;null===(e=p.contentWindow)||void 0===e||e.location.reload()},unmount:function(){r.unmountElement(y)}}}},331:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(603),t),r(n(162),t)},162:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},718:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createWidget=void 0;var o=n(747),r=n(554),i=n(313);t.createWidget=function(e,t){if(!o.hasDom())return{refresh:function(){},unmount:function(){}};var n=t;t.inlineOnMobile||!t.forceTouch&&!o.isFullscreen()||(n.enableFullscreen=!0,n.forceTouch=!0);var a,c=o.createIframe(e,"widget",n),u=c.embedId,s=c.iframe,d=i.buildWidget(s,t.width,t.height);if(t.container.innerHTML="",t.container.append(d),n.enableFullscreen){var l=t.container;window.addEventListener("message",r.getWelcomeScreenHiddenHandler(u,l));var f=((a=document.createElement("a")).className="typeform-widget-close",a.innerHTML="&times;",a);f.onclick=function(){var e;null===(e=t.onClose)||void 0===e||e.call(t),l.classList.remove("typeform-widget-fullscreen"),t.container.innerHTML="",t.container.append(d),l.append(f)},l.append(f)}return{refresh:function(){var e;return null===(e=s.contentWindow)||void 0===e?void 0:e.location.reload()},unmount:function(){return o.unmountElement(d)}}}},419:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.buildWidget=void 0;var o=n(747);t.buildWidget=function(e,t,n){var r=document.createElement("div");return r.className="typeform-widget",r.append(e),o.setElementSize(r,{width:t,height:n})}},313:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(419),t)},321:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(718),t),r(n(58),t)},58:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},920:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(797),t),r(n(970),t),r(n(331),t),r(n(321),t),r(n(434),t)},626:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildIframeSrc=void 0;var r=n(27),i=n(527),a=n(346),c=n(698),u={widget:"embed-widget",popup:"popup-blank",slider:"popup-drawer",popover:"popup-popover","side-tab":"popup-side-panel"};t.buildIframeSrc=function(e){var t=e.formId,n=e.type,s=e.embedId,d=e.options,l=function(e,t,n){var r=n.transitiveSearchParams,i=n.source,a=n.medium,s=n.mediumVersion,d=n.hideFooter,l=n.hideHeaders,f=n.opacity,p=n.disableTracking,m=n.enableSandbox,v=n.disableAutoFocus,y=n.shareGaInstance,h=n.forceTouch,b=n.enableFullscreen,g=n.tracking,w=c.getTransitiveSearchParams(r);return o(o(o({},{"typeform-embed-id":t,"typeform-embed":u[e],"typeform-source":i,"typeform-medium":a,"typeform-medium-version":s,"embed-hide-footer":d?"true":void 0,"embed-hide-headers":l?"true":void 0,"embed-opacity":f,"disable-tracking":p||m?"true":void 0,"disable-auto-focus":v?"true":void 0,"__dangerous-disable-submissions":m?"true":void 0,"share-ga-instance":y?"true":void 0,"force-touch":h?"true":void 0,"add-placeholder-ws":"widget"===e&&b?"true":void 0}),w),g)}(n,s,function(e){return o(o({},{source:null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.hostname.replace(/^www\./,""),medium:"embed-sdk",mediumVersion:"next"}),i.removeUndefinedKeys(e));var t}(d)),f=function(e,t){void 0===t&&(t=!1);var n=t?"c":"to";return new URL(r.FORM_BASE_URL+"/"+n+"/"+e)}(t,d.chat);if(Object.entries(l).filter((function(e){var t=e[1];return a.isDefined(t)})).forEach((function(e){var t=e[0],n=e[1];f.searchParams.set(t,n)})),d.hidden){var p=new URL(r.FORM_BASE_URL);Object.entries(d.hidden).filter((function(e){var t=e[1];return a.isDefined(t)})).forEach((function(e){var t=e[0],n=e[1];p.searchParams.set(t,n)}));var m=p.searchParams.toString();m&&(f.hash=m)}return f.href}},972:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.handleCustomOpen=void 0,t.handleCustomOpen=function(e,t,n){switch(t){case"load":e();break;case"exit":n&&function(e,t){var n=0,o=function o(r){r.clientY<e&&r.clientY<n?(document.removeEventListener("mousemove",o),t()):n=r.clientY};document.addEventListener("mousemove",o)}(n,e);break;case"time":setTimeout((function(){e()}),n);break;case"scroll":n&&function(e,t){var n=function n(){var o=window.pageYOffset||document.documentElement.scrollTop,r=document.documentElement.clientTop||0,i=document.documentElement.scrollHeight,a=o-r,c=a/i*100,u=a+window.innerHeight>=i;(c>=e||u)&&(t(),document.removeEventListener("scroll",n))};document.addEventListener("scroll",n)}(n,e)}}},553:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createIframe=void 0;var o=n(626),r=n(747),i=n(866),a=n(554),c=n(256),u=n(144);t.createIframe=function(e,t,n){var s=i.generateEmbedId(),d=n.iframeProps,l=void 0===d?{}:d,f=n.onReady,p=n.onQuestionChanged,m=n.onSubmit,v=n.shareGaInstance,y=o.buildIframeSrc({formId:e,embedId:s,type:t,options:n}),h=document.createElement("iframe");return h.src=y,h.dataset.testid="iframe",Object.keys(l).forEach((function(e){h.setAttribute(e,l[e])})),h.addEventListener("load",c.triggerIframeRedraw,{once:!0}),window.addEventListener("message",a.getFormReadyHandler(s,f)),window.addEventListener("message",a.getFormQuestionChangedHandler(s,p)),window.addEventListener("message",a.getFormSubmitHandler(s,m)),"widget"!==t&&window.addEventListener("message",u.dispatchCustomKeyEventFromIframe),v&&window.addEventListener("message",a.getFormReadyHandler(s,(function(){r.setupGaInstance(h,s,v)}))),{iframe:h,embedId:s}}},866:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.generateEmbedId=void 0,t.generateEmbedId=function(){var e=Math.random();return String(e).split(".")[1]}},554:function(e,t){var n=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function o(e,t,o){return function(r){var i=r.data,a=i.type,c=i.embedId,u=n(i,["type","embedId"]);a===e&&c===t&&(null==o||o(u))}}Object.defineProperty(t,"__esModule",{value:!0}),t.getFormEventHandler=t.getWelcomeScreenHiddenHandler=t.getFormSubmitHandler=t.getFormQuestionChangedHandler=t.getFormReadyHandler=void 0,t.getFormReadyHandler=function(e,t){return o("form-ready",e,t)},t.getFormQuestionChangedHandler=function(e,t){return o("form-screen-changed",e,t)},t.getFormSubmitHandler=function(e,t){return o("form-submit",e,t)},t.getWelcomeScreenHiddenHandler=function(e,t){return o("welcome-screen-hidden",e,(function(){t.classList.add("typeform-widget-fullscreen")}))},t.getFormEventHandler=o},339:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(553),t),r(n(144),t)},144:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((o=o.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchCustomKeyEventFromIframe=t.removeCustomKeyboardListener=t.addCustomKeyboardListener=void 0;var r="Escape",i=function(e,i){return n(void 0,void 0,void 0,(function(){return o(this,(function(n){return e.code===r&&"function"==typeof i&&(i(),t.removeCustomKeyboardListener()),[2]}))}))};t.addCustomKeyboardListener=function(e){return window.document.addEventListener("keydown",(function(t){return i(t,e)}))},t.removeCustomKeyboardListener=function(){return window.document.removeEventListener("keydown",i)},t.dispatchCustomKeyEventFromIframe=function(e){"form-close"===e.data.type&&window.document.dispatchEvent(new KeyboardEvent("keydown",{code:r}))}},256:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.triggerIframeRedraw=void 0,t.triggerIframeRedraw=function(){this.style.transform="translateZ(0)"}},939:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getTextColor=void 0;var o=n(938);t.getTextColor=function(e){if(!e)return"#FFFFFF";var t=e.startsWith("#")?o.hexRgb(e):function(e){var t={red:0,green:0,blue:0},n=e.match(/\d+/g);return n&&(t.red=parseInt(n[0],10),t.green=parseInt(n[0],10),t.blue=parseInt(n[0],10)),t}(e),n=t.red,r=t.green,i=t.blue;return Math.round((299*n+587*r+114*i)/1e3)>125?"#000000":"#FFFFFF"}},698:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTransitiveSearchParams=void 0,t.getTransitiveSearchParams=function(e){var t=new URL(window.location.href),n={};return e&&e.length>0&&e.forEach((function(e){t.searchParams.has(e)&&(n[e]=t.searchParams.get(e))})),n}},252:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hasDom=void 0,t.hasDom=function(){return"undefined"!=typeof document&&"undefined"!=typeof window}},938:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hexRgb=void 0;var n=new RegExp("[^#a-f\\d]","gi"),o=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i");t.hexRgb=function(e){if("string"!=typeof e||n.test(e)||!o.test(e))throw new TypeError("Expected a valid hex string");8===(e=e.replace(/^#/,"")).length&&(e=e.slice(0,6)),4===e.length&&(e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=Number.parseInt(e,16);return{red:t>>16,green:t>>8&255,blue:255&t}}},71:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.includeCss=void 0,t.includeCss=function(e){var t=function(e){return"https://embed.typeform.com/next/css/"+e}(e);if(!document.querySelector('link[href="'+t+'"]')){var n=document.createElement("link");n.rel="stylesheet",n.href=t,document.head.append(n)}}},747:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(626),t),r(n(339),t),r(n(252),t),r(n(71),t),r(n(346),t),r(n(377),t),r(n(563),t),r(n(527),t),r(n(533),t),r(n(451),t),r(n(972),t),r(n(748),t),r(n(392),t),r(n(939),t)},346:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isDefined=void 0,t.isDefined=function(e){return null!=e}},377:function(e,t){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.loadOptionsFromAttributes=t.transformAttributeValue=t.camelCaseToKebabCase=void 0,t.camelCaseToKebabCase=function(e){return e.split("").map((function(e,t){return e.toUpperCase()===e?(0!==t?"-":"")+e.toLowerCase():e})).join("")};var o=function(e){return e||void 0},r=function(e){return""===e||"yes"===e||"true"===e},i=function(e){var t=e?parseInt(e,10):NaN;return isNaN(t)?void 0:t},a="%ESCAPED_COMMA%";t.transformAttributeValue=function(e,t){var c,u;switch(t){case"string":return o(e);case"boolean":return r(e);case"integer":return i(e);case"function":return function(e){var t=e&&e in window?window[e]:void 0;return"function"==typeof t?t:void 0}(e);case"array":return function(e){if(e)return e.replace(/\s/g,"").replace(/\\,/g,a).split(",").filter((function(e){return!!e})).map((function(e){return e.replace(a,",")}))}(e);case"record":return function(e){if(e)return e.replace(/\\,/g,a).split(",").filter((function(e){return!!e})).map((function(e){return e.replace(a,",")})).reduce((function(e,t){var o,r=t.match(/^([^=]+)=(.*)$/);if(r){var i=r[1],a=r[2];return n(n({},e),((o={})[i.trim()]=a,o))}return e}),{})}(e);case"integerOrBoolean":return null!==(c=i(e))&&void 0!==c?c:r(e);case"stringOrBoolean":return null!==(u=o(e))&&void 0!==u?u:r(e);default:throw new Error("Invalid attribute transformation "+t)}},t.loadOptionsFromAttributes=function(e,o){return Object.keys(o).reduce((function(r,i){var a;return n(n({},r),((a={})[i]=t.transformAttributeValue(e.getAttribute("data-tf-"+t.camelCaseToKebabCase(i)),o[i]),a))}),{})}},563:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isFullscreen=t.isMobile=t.isBigScreen=void 0,t.isBigScreen=function(){return window.screen.width>=1024&&window.screen.height>=768},t.isMobile=function(){return/mobile|tablet|android/i.test(navigator.userAgent.toLowerCase())},t.isFullscreen=function(){return t.isMobile()&&!t.isBigScreen()}},527:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.removeUndefinedKeys=void 0;var r=n(346);t.removeUndefinedKeys=function(e){return Object.entries(e).filter((function(e){var t=e[1];return r.isDefined(t)})).reduce((function(e,t){var n,r=t[0],i=t[1];return o(o({},e),((n={})[r]=i,n))}),{})}},748:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.setAutoClose=void 0;var o=n(554);t.setAutoClose=function(e,t,n){if(t&&n){var r="number"==typeof t?t:0;window.addEventListener("message",o.getFormSubmitHandler(e,(function(){return setTimeout(n,r)})))}}},533:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.setElementSize=void 0,t.setElementSize=function(e,t){var n=t.width,o=t.height;return n&&(e.style.width=n+"px"),o&&(e.style.height=o+"px"),e}},392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.setupGaInstance=t.sendGaIdMessage=void 0,t.sendGaIdMessage=function(e,t,n){var o={embedId:e,gaClientId:t};setTimeout((function(){n&&n.contentWindow&&n.contentWindow.postMessage({type:"ga-client-id",data:o},"*")}),0)};var n=function(e){console.error(e)};t.setupGaInstance=function(e,o,r){try{var i=window[window.GoogleAnalyticsObject],a="string"==typeof r?r:void 0,c=function(e,t){return t?e.find((function(e){return e.get("trackingId")===t})):e[0]}(i.getAll(),a);c?t.sendGaIdMessage(o,c.get("clientId"),e):n("Whoops! You enabled the shareGaInstance feature in your typeform embed but the tracker with ID "+a+" was not found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID. ")}catch(e){n("Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. "),n(e)}}},451:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.unmountElement=void 0,t.unmountElement=function(e){var t;null===(t=e.parentNode)||void 0===t||t.removeChild(e)}}},t={};return function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(920)}()},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var o=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.createContext&&o.createContext(r),a=function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function u(e){return e&&e.map((function(e,t){return o.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return o.createElement(d,a({attr:a({},e.attr)},t),u(e.child))}}function d(e){var t=function(t){var n,r=e.attr,i=e.size,u=e.title,s=c(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&o.createElement("title",null,u),e.children)};return void 0!==i?o.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},4992:function(e,t,n){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}var a=function(e){var t=e.className,n=void 0===t?"active":t,o=e.offsetTop,i=void 0===o?0:o,a=e.offsetLeft,c=void 0===a?0:a,u=e.duration,s=void 0===u?1e3:u,d=e.children;return(0,r.useEffect)((function(){var e,t=[],o=[],r=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=Date.now();return function(r){clearTimeout(t),o+n-Date.now()<0?(e(r),o=Date.now()):t=setTimeout(e,n/5)}}((function(){var e=document.scrollingElement||document.documentElement,r=e.scrollLeft+window.innerWidth/2,i=e.scrollTop+window.innerHeight/2;t.map((function(e,t){var a=o[t],c=a.offsetLeft>=0&&r>=a.offsetLeft&&r<a.offsetLeft+a.offsetWidth;return a.offsetTop>=0&&i>=a.offsetTop&&i<a.offsetTop+a.offsetHeight&&c?e.classList.add(n):e.classList.remove(n),!0}))}));if(d.map((function(n){var r=n.props&&n.props.href,a=n.ref&&n.ref.current;if(!a||!r||"#"!==r.charAt(0))return!1;var u="#"===r?document.body:document.querySelector(r);return u&&(a.onclick=function(t){return function(t,n,o,r){if(t.preventDefault(),e)return!0;e=!0;var i=document.scrollingElement||document.documentElement,a={x:Math.max(0,i.scrollWidth-window.innerWidth),y:Math.max(0,i.scrollHeight-window.innerHeight)},c={x:Math.min(Math.max(0,o),a.x),y:Math.min(Math.max(0,n),a.y)},u=Math.round(c.x-i.scrollLeft),s=Math.round(c.y-i.scrollTop),d={x:Math.round(u/Math.abs(r)*1e3/16),y:Math.round(s/Math.abs(r)*1e3/16)};return function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r={x:Math.round(c.x-i.scrollLeft),y:Math.round(c.y-i.scrollTop)};return 0===r.x&&0===r.y?(e=!1,!0):(Math.abs(r.x)>0&&(i.scrollLeft+=Math.abs(d.x)<Math.abs(r.x)?d.x:r.x),Math.abs(r.y)>0&&(i.scrollTop+=Math.abs(d.y)<Math.abs(r.y)?d.y:r.y),requestAnimationFrame((function(){return t(n,o)})))}(c)}(t,u.offsetTop-i,u.offsetLeft-c,s)},o.push(u),t.push(a)),!0})),o.length){var a=new Event("scroll");window.addEventListener("scroll",r,{passive:!0}),window.dispatchEvent(a)}return function(){window.removeEventListener("scroll",r)}}),[d,n,s,i,c]),r.default.createElement(r.default.Fragment,null,d)};t.default=a},4604:function(e,t,n){"use strict";e.exports=n(4992)},3701:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(7294),r=n(4836),i=n(1424),a=n(9),c=(0,a.keyframes)(["from,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);}0%{opacity:0;transform:scale3d(0.3,0.3,0.3);}20%{transform:scale3d(1.1,1.1,1.1);}40%{transform:scale3d(0.9,0.9,0.9);}60%{opacity:1;transform:scale3d(1.03,1.03,1.03);}80%{transform:scale3d(0.97,0.97,0.97);}to{opacity:1;transform:scale3d(1,1,1);}"]),u=a.default.aside.withConfig({displayName:"TypeForm__StyledWrapper",componentId:"sc-1iug6ef-0"})(["z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:15px;background:rgba(2,2,2,.3);.typeform{width:600px;height:600px;}.close{display:none;cursor:pointer;user-select:none;}.tip{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);font-weight:bold;text-transform:uppercase;font-size:22px;padding:15px 25px;background:#000;color:#fff;}&.loaded{.close{display:block;}.typeform{animation:"," 1s both;}}"],c);function s(e){var t=e.closeModal,n=(0,o.useRef)(null),a=(0,o.useState)(!1),c=a[0],s=a[1];return(0,o.useEffect)((function(){(0,r.createWidget)("KeZQmkfZ",{container:n.current.querySelector(".typeform"),onReady:function(){s(!0)}})}),[]),o.createElement(u,{ref:n,className:c?"loaded":""},o.createElement("div",{className:"typeform"}),o.createElement("div",{className:"close",onClick:t},o.createElement(i.mzH,{size:50,color:"#fff"})),!c&&o.createElement("div",{className:"tip"},"loading..."))}}}]);
//# sourceMappingURL=1b14a3beda40d1a132e39f920906dd91a57f5564-1f9b85c923e34a79768d.js.map