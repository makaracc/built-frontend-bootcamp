(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{190:function(t,e,n){},196:function(t,e){},246:function(t,e,n){var a={"./amplify-amazon-button_5.entry.js":[277,16],"./amplify-auth-container.entry.js":[278,17],"./amplify-auth-fields_9.entry.js":[279,18],"./amplify-authenticator.entry.js":[280,5],"./amplify-button_3.entry.js":[281,19],"./amplify-chatbot.entry.js":[282,4],"./amplify-checkbox.entry.js":[283,20],"./amplify-confirm-sign-in_7.entry.js":[284,6],"./amplify-container.entry.js":[285,21],"./amplify-federated-buttons_2.entry.js":[286,22],"./amplify-federated-sign-in.entry.js":[287,23],"./amplify-form-field_4.entry.js":[288,24],"./amplify-greetings.entry.js":[289,25],"./amplify-icon-button.entry.js":[290,26],"./amplify-icon.entry.js":[291,7],"./amplify-link.entry.js":[292,27],"./amplify-nav_2.entry.js":[293,28],"./amplify-photo-picker.entry.js":[294,29],"./amplify-picker.entry.js":[295,30],"./amplify-radio-button_3.entry.js":[296,8],"./amplify-s3-album.entry.js":[297,9],"./amplify-s3-image-picker.entry.js":[298,10],"./amplify-s3-image.entry.js":[299,11],"./amplify-s3-text-picker.entry.js":[300,12],"./amplify-s3-text.entry.js":[301,13],"./amplify-select-mfa-type.entry.js":[302,31],"./amplify-sign-in-button.entry.js":[303,14],"./amplify-tooltip.entry.js":[304,32]};function c(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],c=e[0];return n.e(e[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=246,t.exports=c},272:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(58),o=n.n(s),r=(n(190),n(41)),i=n.n(r),u=n(59),l=n(77),j=n(371),f=n(373),p=n(370),b=n(374),d=n(367),h=n(18),y=n(4),O=localStorage.getItem("accessToken"),g=!0===localStorage.getItem("loginStatus")||void 0,m=(localStorage.getItem("devMode"),Object(a.createContext)()),x=function(t){var e=t.children,n=Object(a.useState)(g),c=Object(h.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(O),l=Object(h.a)(r,2),j=l[0],f=l[1],p=function(t){window.localStorage.setItem("loginStatus",t),g=t,o(t)},b=function(){var t=Object(u.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.clear(),g=e,o(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){b(!1)}),[]);var d=Object(a.useCallback)((function(t){O=t,window.localStorage.setItem("accessToken",t),f(t)}),[f]);return Object(a.useEffect)((function(){void 0!==j&&null!==j&&(j?(p(!0),d(j)):p(!1))}),[j,d]),Object(a.useEffect)((function(){void 0!==s&&null!==s&&(s||d(""))}),[s,d]),Object(a.useEffect)((function(){j||p(!1)}),[j]),Object(y.jsx)(m.Provider,{value:{loginStatus:s,accessToken:j,setAccessToken:d,setLoginStatus:p},children:e})},_=function(t){var e=t.children;return Object(y.jsx)(x,{children:e})},v=n(79),w=function(){var t=Object(a.useContext)(m).setLoginStatus,e=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.signOut({global:!0});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("error signing out: ",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return Object(y.jsx)(j.a,{position:"static",children:Object(y.jsx)(f.a,{children:Object(y.jsxs)(p.a,{container:!0,justifyContent:"space-between",children:[Object(y.jsx)(p.a,{item:!0,children:Object(y.jsx)(b.a,{variant:"h6",children:"My App"})}),Object(y.jsxs)(p.a,{item:!0,children:[Object(y.jsxs)(l.b,{to:"/posts",style:{textDecoration:"none"},children:[" ",Object(y.jsx)(d.a,{style:{color:"white"},children:" Posts "})," "]}),Object(y.jsx)(d.a,{style:{color:"white"},onClick:function(){window.localStorage.clear(),t(!1),e()},children:" Logout "})]})]})})})},S=n(24),k=n(375),E=n(365),C=n(376),I=n(377),R=n(120),L=n.n(R),M="http://localhost:8000/posts",T=function(){var t=Object(a.useContext)(m).accessToken,e=Object(a.useState)([]),n=Object(h.a)(e,2),c=n[0],s=n[1],o=Object(a.useState)(""),r=Object(h.a)(o,2),l=r[0],j=r[1],f=Object(a.useCallback)(Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()({method:"get",url:M,headers:{authorization:t}});case 3:200===(n=e.sent).status?s(n.data.data):console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]),O=function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()({method:"post",url:"".concat(M,"/create"),headers:{authorization:t},data:{content:l}});case 3:200===(n=e.sent).status?alert("Post created successfully"):(alert(n),console.log(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[f]),Object(y.jsxs)(k.a,{children:[Object(y.jsxs)(p.a,{container:!0,spacing:2,children:[Object(y.jsx)(p.a,{item:!0,xs:8,children:Object(y.jsx)(E.a,{id:"postContent",placeholder:"What are you thinking?",onChange:function(t){return j(t.target.value)}})}),Object(y.jsx)(p.a,{item:!0,xs:2,children:Object(y.jsx)(d.a,{onClick:O,children:" Create Post "})})]}),c.map((function(t){return Object(y.jsx)(C.a,{style:{marginTop:5},children:Object(y.jsxs)(I.a,{children:[Object(y.jsx)(b.a,{style:{fontSize:14},gutterBottom:!0,children:t.userId}),Object(y.jsx)(b.a,{variant:"h5",children:t.content}),Object(y.jsx)(b.a,{variant:"body2",children:t.time})]})},Math.random())}))]})},P=n(368),A=n(122),U=function(){var t=Object(a.useContext)(m),e=t.setLoginStatus,n=t.setAccessToken;return Object(a.useEffect)((function(){return Object(A.b)((function(t,a){console.log(a),t===A.a.SignedIn?(e(!0),n(a.signInUserSession.idToken.jwtToken)):(e(!1),n(null))}))}),[e,n]),Object(y.jsx)(P.a,{})},F=function(t){var e=Object(a.useContext)(m).loginStatus;return Object(a.useEffect)((function(){console.log("AppRoutes: ",e)}),[e]),Object(y.jsxs)(S.d,{children:[Object(y.jsx)(S.b,{exact:!0,path:"/",render:function(){return e?Object(y.jsx)(S.a,{to:{pathname:"/posts"}}):Object(y.jsx)(S.a,{to:{pathname:"/login"}})}}),Object(y.jsx)(S.b,{exact:!0,path:"/login",render:function(){return e?Object(y.jsx)(S.a,{to:{pathname:"/posts"}}):Object(y.jsx)(U,{})}}),Object(y.jsx)(S.b,{exact:!0,path:"/posts",render:function(){return e?Object(y.jsx)(T,{}):Object(y.jsx)(S.a,{to:{pathname:"/login"}})}})]})},z=function(){return Object(y.jsxs)(_,{children:[Object(y.jsx)(w,{}),Object(y.jsx)(F,{})]})},B=function(t){t&&t instanceof Function&&n.e(35).then(n.bind(null,390)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),s(t),o(t)}))},D={aws_project_region:"ap-southeast-2",aws_cognito_identity_pool_id:"ap-southeast-2:8037376d-2c3d-4a5b-a892-76880fdb7ef3",aws_cognito_region:"ap-southeast-2",aws_user_pools_id:"ap-southeast-2_iDRlzWWRj",aws_user_pools_web_client_id:"1b8jv3u7avgq3dg9cqr9a1jcr",oauth:{},aws_cognito_login_mechanisms:["EMAIL"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:["REQUIRES_LOWERCASE","REQUIRES_NUMBERS","REQUIRES_SYMBOLS","REQUIRES_UPPERCASE"]},aws_cognito_verification_mechanisms:["EMAIL"]};n(116).default.configure(D),o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(l.a,{children:Object(y.jsx)(z,{})})}),document.getElementById("root")),B()}},[[272,2,3]]]);
//# sourceMappingURL=main.8ef06d32.chunk.js.map