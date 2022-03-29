"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[6092,6018,3093,3754,8553],{5728:function(e,t,n){n.r(t);var a=n(7294),r=n(806);t.default=function(e){var t=(0,a.useRef)(null);return(0,a.useEffect)((function(){var n;if(t.current)return null===(n=e.videoTrack)||void 0===n||n.play(t.current),function(){var t;null===(t=e.videoTrack)||void 0===t||t.stop()}}),[t,e.videoTrack]),(0,a.useEffect)((function(){var t;e.audioTrack&&(null===(t=e.audioTrack)||void 0===t||t.play());return function(){var t;null===(t=e.audioTrack)||void 0===t||t.stop()}}),[e.audioTrack]),a.createElement(r.default,null,a.createElement("div",{ref:t,className:"player"}))}},806:function(e,t,n){n.r(t);var a=n(9).default.div.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-1td5f2d-0"})([".player{width:640px;height:480px;background-color:#000;}"]);t.default=a},9881:function(e,t,n){n.r(t);var a=n(7294),r=n(1527),i=n(5728),c=n(9287);t.default=function(){var e=(0,a.useContext)(c.VoiceContext).state,t=void 0===e?{}:e,n=t.localVideoTrack,o=t.users,u=t.currentUser,l=t.extUsers;return a.createElement(r.default,null,a.createElement("ul",{className:"users "+((null==o?void 0:o.length)>1?"usersMore":"")},a.createElement("li",{className:"user"},a.createElement(i.default,{videoTrack:n,audioTrack:void 0}),(null==n?void 0:n.muted)&&a.createElement("div",{className:"info"},null!=u&&u.photo?a.createElement("div",{className:"avatar"},a.createElement("img",{src:null==u?void 0:u.photo,className:"pic",alt:""})):a.createElement("div",{className:"name"},null==u?void 0:u.username))),null==o?void 0:o.map((function(e){var t,n;return a.createElement("li",{key:e.uid,className:"user"},a.createElement(i.default,{videoTrack:e.videoTrack,audioTrack:e.audioTrack}),!e.hasVideo&&a.createElement("div",{className:"info"},null!==(t=l.find((function(t){return t.intUid===e.uid})))&&void 0!==t&&t.photo?a.createElement("div",{className:"avatar"},a.createElement("img",{src:null===(n=l.find((function(t){return t.intUid===e.uid})))||void 0===n?void 0:n.photo,className:"pic",alt:""})):a.createElement("div",{className:"name"},null==e?void 0:e.username)))}))))}},1527:function(e,t,n){n.r(t);var a=n(9).default.div.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-12nkcj5-0"})(["display:flex;height:100%;align-items:center;justify-content:center;.users{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;margin-bottom:0;width:100%;&More{.player{width:320px;height:240px;}}}.user{position:relative;}.info{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}.avatar{width:160px;height:160px;background-color:#333;overflow:hidden;.pic{width:100%;height:100%;}}.name{color:#fff;text-align:center;font-size:24px;}"]);t.default=a},9287:function(e,t,n){n.r(t),n.d(t,{VoiceContext:function(){return S},UPDATE_USERS:function(){return u},UPDATE_LOCAL_VIDEO_TRACK:function(){return l},UPDATE_LOCAL_AUDIO_TRACK:function(){return s},UPDATE_JOIN_STATE:function(){return d},LEAVE:function(){return E},UPDATE_CLIENT:function(){return f},UPDATE_STATUS:function(){return v},UPDATE_PERMISSION_STATE:function(){return p},UPDATE_DEVICES:function(){return T},UPDATE_DEVICES_ENABLED:function(){return m},UPDATE_DEVICES_ID:function(){return _},UPDATE_CURRENT_USR:function(){return A},UPDATE_EXT_USERS:function(){return U}});var a=n(8634),r=n(2656),i=n.n(r),c=n(7294),o={users:[],joinState:!1,localVideoTrack:null,localAudioTrack:null,client:null,status:"disconnected",devices:[],permissionState:void 0,videoEnabled:!0,audioEnabled:!0,cameraId:void 0,microphoneId:void 0,currentUser:{},extUsers:[]},u="UPDATE_USERS",l="UPDATE_LOCAL_VIDEO_TRACK",s="UPDATE_LOCAL_AUDIO_TRACK",d="UPDATE_JOIN_STATE",E="LEAVE",f="UPDATE_CLIENT",v="UPDATE_STATUS",p="UPDATE_PERMISSION_STATE",T="UPDATE_DEVICES",m="UPDATE_DEVICES_ENABLED",_="UPDATE_DEVICES_ID",A="UPDATE_CURRENT_USR",U="UPDATE_EXT_USERS",D=function(e,t){var n,r,c,o=e.localAudioTrack,D=e.localVideoTrack,S=e.client;switch(t.type){case u:return Object.assign({},e,{users:t.payload});case l:return Object.assign({},e,{localVideoTrack:t.payload});case s:return Object.assign({},e,{localAudioTrack:t.payload});case d:return Object.assign({},e,{joinState:t.payload});case E:return(c=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o&&(o.stop(),o.close()),D&&(D.stop(),D.close()),e.next=4,null==S?void 0:S.leave();case 4:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})(),Object.assign({},e,{users:[],joinState:!1,status:"leave"});case f:return Object.assign({},e,{client:t.payload});case v:return Object.assign({},e,{status:t.payload});case p:return Object.assign({},e,{permissionState:t.payload});case T:return Object.assign({},e,{devices:t.payload});case m:var h=t.payload,g=h.devices,y=void 0===g?"":g,k=h.enabled,P=void 0===k?void 0:k;return Object.assign({},e,((n={})[y+"Enabled"]=P,n));case _:var C=t.payload,b=C.type,I=void 0===b?"":b,O=C.id,N=void 0===O?void 0:O;return Object.assign({},e,((r={})[I+"Id"]=N,r));case A:return Object.assign({},e,{currentUser:t.payload});case U:return Object.assign({},e,{extUsers:t.payload});default:return e}},S=(0,c.createContext)(o);t.default=function(e){var t=(0,c.useReducer)(D,o,(function(e){return e})),n=t[0],a=t[1];return c.createElement(S.Provider,{value:{state:n,dispatch:a}},e.children)}}}]);
//# sourceMappingURL=component---src-pages-voice-components-users-index-js-99f6c168eb6e2a03d8ce.js.map