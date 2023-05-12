"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[5383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,y=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(y,i(i({ref:t},h),{},{components:n})):r.createElement(y,i({ref:t},h))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2331:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>h,assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"Advent of Cyber 2021 Day 1",title:"Day 1"},i=void 0,s={unversionedId:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 1",id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 1",title:"Day 1",description:"Day 1 [Web Exploitation] Save the Gifts",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation/Day 1.md",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 1",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 1",draft:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 1",title:"Day 1"},sidebar:"mySideBar",previous:{title:"Days 1-7 ~ Web Exploitation",permalink:"/Insights-N-Notes/docs/category/days-1-7--web-exploitation"},next:{title:"Day 2",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 2"}},l={},c=[{value:'Day 1 <Highlight color="#621d27">Web Exploitation</Highlight> Save the Gifts',id:"day-1-web-exploitation-save-the-gifts",level:2},{value:"<strong>Learning Objectives</strong>",id:"learning-objectives",level:3}],h=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:c,Highlight:h};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"day-1-web-exploitation-save-the-gifts"},"Day 1 ",(0,a.kt)(h,{color:"#621d27",mdxType:"Highlight"},"[Web Exploitation]")," Save the Gifts"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Story")),(0,a.kt)("p",{parentName:"blockquote"},"The inventory management systems used to create the gifts have been tampered with to frustrate the elves. It's a night shift, and McStocker comes to McSkidy panicking about the gifts all being built wrong. With no managers around to fix the issue, McSkidy needs to somehow get access and fix the system and keep everything on track to be ready for Christmas!")),(0,a.kt)("h3",{id:"learning-objectives"},(0,a.kt)("strong",{parentName:"h3"},"Learning Objectives")),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"What is an IDOR vulnerability?"),(0,a.kt)("li",{parentName:"ol"},"How do I find and exploit IDOR vulnerabilities?"),(0,a.kt)("li",{parentName:"ol"},"Challenge Walkthrough."))),(0,a.kt)("p",null,"IDOR = Indirect Object Reference, an access control vuln."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"idor.png",src:n(657).Z,width:"340",height:"40"})),(0,a.kt)("p",null,"For example, what if a website casually showed the id values? Then we could try and access other ids, like id=1 perhaps."),(0,a.kt)("p",null,"Or, what if they left values in display in the form?\nWhat if cookies were not properly named such that a hacker could easily see whats going on?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"grinch.png",src:n(9823).Z,width:"789",height:"558"}),(0,a.kt)("br",null),"\nThe advent's demonstration of IDOR where the user_id is exposed"),(0,a.kt)("p",null,"Then we revert the actions by the grinch: ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"fixed.png",src:n(163).Z,width:"603",height:"588"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"answers.png",src:n(8976).Z,width:"897",height:"611"})))}p.isMDXComponent=!0},8976:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/answers-e571332937bcb299357fb6aa19f12f17.png"},163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fixed-c4579391f1d0ce996ab1669ce9160266.png"},9823:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grinch-75aedcfa0bfa52bef3e6c5dbf3be2515.png"},657:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);