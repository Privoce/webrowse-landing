"use strict";(self.webpackChunkwebrowse_landing=self.webpackChunkwebrowse_landing||[]).push([[8553],{77:function(e,n,t){t.r(n),t.d(n,{LEAVE:function(){return l},UPDATE_CLIENT:function(){return T},UPDATE_CURRENT_USR:function(){return p},UPDATE_DEVICES:function(){return U},UPDATE_DEVICES_ENABLED:function(){return D},UPDATE_DEVICES_ID:function(){return S},UPDATE_EXT_USERS:function(){return P},UPDATE_JOIN_STATE:function(){return d},UPDATE_LOCAL_AUDIO_TRACK:function(){return E},UPDATE_LOCAL_VIDEO_TRACK:function(){return o},UPDATE_PERMISSION_STATE:function(){return _},UPDATE_STATUS:function(){return A},UPDATE_USERS:function(){return i},VoiceContext:function(){return O}});var r=t(5861),a=t(7757),c=t.n(a),s=t(7294),u={users:[],joinState:!1,localVideoTrack:null,localAudioTrack:null,client:null,status:"disconnected",devices:[],permissionState:void 0,videoEnabled:!0,audioEnabled:!0,cameraId:void 0,microphoneId:void 0,currentUser:{},extUsers:[]},i="UPDATE_USERS",o="UPDATE_LOCAL_VIDEO_TRACK",E="UPDATE_LOCAL_AUDIO_TRACK",d="UPDATE_JOIN_STATE",l="LEAVE",T="UPDATE_CLIENT",A="UPDATE_STATUS",_="UPDATE_PERMISSION_STATE",U="UPDATE_DEVICES",D="UPDATE_DEVICES_ENABLED",S="UPDATE_DEVICES_ID",p="UPDATE_CURRENT_USR",P="UPDATE_EXT_USERS",f=function(e,n){var t,a,s,u=e.localAudioTrack,f=e.localVideoTrack,O=e.client;switch(n.type){case i:return Object.assign({},e,{users:n.payload});case o:return Object.assign({},e,{localVideoTrack:n.payload});case E:return Object.assign({},e,{localAudioTrack:n.payload});case d:return Object.assign({},e,{joinState:n.payload});case l:return(s=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u&&(u.stop(),u.close()),f&&(f.stop(),f.close()),e.next=4,null==O?void 0:O.leave();case 4:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})(),Object.assign({},e,{users:[],joinState:!1,status:"leave"});case T:return Object.assign({},e,{client:n.payload});case A:return Object.assign({},e,{status:n.payload});case _:return Object.assign({},e,{permissionState:n.payload});case U:return Object.assign({},e,{devices:n.payload});case D:var v=n.payload,I=v.devices,C=void 0===I?"":I,b=v.enabled,R=void 0===b?void 0:b;return Object.assign({},e,((t={})[C+"Enabled"]=R,t));case S:var j=n.payload,g=j.type,y=void 0===g?"":g,L=j.id,V=void 0===L?void 0:L;return Object.assign({},e,((a={})[y+"Id"]=V,a));case p:return Object.assign({},e,{currentUser:n.payload});case P:return Object.assign({},e,{extUsers:n.payload});default:return e}},O=(0,s.createContext)(u);n.default=function(e){var n=(0,s.useReducer)(f,u,(function(e){return e})),t=n[0],r=n[1];return s.createElement(O.Provider,{value:{state:t,dispatch:r}},e.children)}}}]);
//# sourceMappingURL=component---src-pages-voice-reducer-js-82bc667abc07c6fce6fb.js.map