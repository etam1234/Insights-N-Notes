"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[3967],{3905:(A,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>b});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var l=n.createContext({}),d=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},i=function(A){var e=d(A.components);return n.createElement(l.Provider,{value:e},A.children)},u="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,l=A.parentName,i=s(A,["components","mdxType","originalType","parentName"]),u=d(t),p=r,b=u["".concat(l,".").concat(p)]||u[p]||c[p]||a;return t?n.createElement(b,o(o({ref:e},i),{},{components:t})):n.createElement(b,o({ref:e},i))}));function b(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=A,s[u]="string"==typeof A?A:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},764:(A,e,t)=>{t.r(e),t.d(e,{Highlight:()=>i,assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const a={id:"Advent of Cyber 2021 Day 2",title:"Day 2"},o=void 0,s={unversionedId:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 2",id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 2",title:"Day 2",description:"Day 2 [Web Exploitation] Elf HR Problems",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation/Day 2.md",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 2",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 2",draft:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 2",title:"Day 2"},sidebar:"mySideBar",previous:{title:"Day 1",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 1"},next:{title:"Day 3",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 3"}},l={},d=[{value:'Day 2 <Highlight color="#621d27">Web Exploitation</Highlight> Elf HR Problems',id:"day-2-web-exploitation-elf-hr-problems",level:2},{value:"Cookies",id:"cookies",level:3}],i=A=>{let{children:e,color:t}=A;return(0,r.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},u={toc:d,Highlight:i};function c(A){let{components:e,...a}=A;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"day-2-web-exploitation-elf-hr-problems"},"Day 2 ",(0,r.kt)(i,{color:"#621d27",mdxType:"Highlight"},"[Web Exploitation]")," Elf HR Problems"),(0,r.kt)("p",null,"When an HTTP request is crafted, the method and target header will always be included. The target header will specify what to retrieve from the server, and the method header will specify how."),(0,r.kt)("p",null,"It's common to use get to retrieve info (like loading a picture) and post to send info like (login info) to a server.\n",(0,r.kt)("img",{alt:"loginInfo.png",src:t(1948).Z,width:"1190",height:"234"}),"\nStatus 200 lets you know it went through successfully."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"25b45dec331f93381b341692c86240fe.png",src:t(9127).Z,width:"1178",height:"429"}),"\nHere we can see the request is successful "),(0,r.kt)("h3",{id:"cookies"},"Cookies"),(0,r.kt)("p",null,"Cookies are designed to help the server communicate with the client.\nIn TryHackMe, we will look at authentication cookies (session cookies)\n",(0,r.kt)("img",{alt:"cookies.png",src:t(9444).Z,width:"1193",height:"703"})),(0,r.kt)("p",null,'Most of these components are handled by the server, so the main and interesting values are "Name" and "Value." Cookies are prepared in pairs. In our case we use Name and Value. '),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly")),(0,r.kt)("p",null,"In the developer tools, we can manipulate cookie values. Some cookies may be encoded, but may also be decoded to understand the cookies. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtain a cookie value from registering or signing up for an account."),(0,r.kt)("li",{parentName:"ol"},"Decode the cookie value."),(0,r.kt)("li",{parentName:"ol"},"Identify the object notation or structure of the cookie."),(0,r.kt)("li",{parentName:"ol"},"Change the parameters inside the object to a different parameter with a higher privilege level, such as admin or administrator."),(0,r.kt)("li",{parentName:"ol"},"Re-encode the cookie and insert the cookie into the value space; this can be done by double-clicking the value box."),(0,r.kt)("li",{parentName:"ol"},"Action the cookie; this can be done by refreshing the page or logging in.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"userauth.png",src:t(2760).Z,width:"1918",height:"801"}),"\nHere when we submit a register form, we can see a cookie made. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"decodedString.png",src:t(3117).Z,width:"1075",height:"198"}),"\nWe notice that we can decode as ASCII Hex"),(0,r.kt)("p",null,'When we change username = admin and change our session cookie as such, we finally login, bypassing the need to be a "valid" admin\n(as seen below)\n',(0,r.kt)("img",{alt:"dashboard.png",src:t(3457).Z,width:"1885",height:"630"})),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center",fontWeight:"bold"}},"Answers"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"answersDay2.png",src:t(1337).Z,width:"1082",height:"803"})))}c.isMDXComponent=!0},1948:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/0ed6cb98d9074586b294793284840333-b39a54d37bece3883ef4569882aeae5f.png"},1337:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/answers-dbb031c1613cb67b9b80f50b5d950e7c.png"},9127:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/cd756e9c4fbc4af7b03365134137eca3-3922cd9516bec086689576fc62a22e01.png"},9444:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/cookies-0358f1197d0a1567ea96cc08823a8c9b.png"},3457:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/dashboard-ea9ce31fc4b41d71111b5ab578c72dad.png"},3117:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},2760:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/userauth-17ac686cd37c44ea223f0f3b320744e8.png"}}]);