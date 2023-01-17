"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[7248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6981:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Free Path",sidebar_label:"Free Path",id:"Free_Path"},i=void 0,l={unversionedId:"TryHackMe/Free-Path/Free_Path",id:"TryHackMe/Free-Path/Free_Path",title:"Free Path",description:"",source:"@site/docs/02-TryHackMe/Free-Path/free-path-note.mdx",sourceDirName:"02-TryHackMe/Free-Path",slug:"/TryHackMe/Free-Path/Free_Path",permalink:"/Insights-N-Notes/docs/TryHackMe/Free-Path/Free_Path",draft:!1,tags:[],version:"current",frontMatter:{title:"Free Path",sidebar_label:"Free Path",id:"Free_Path"},sidebar:"mySideBar",previous:{title:"Day 14",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 14"}},s={},c=[{value:"Important Details Before Starting TryHackMe Rooms!",id:"important-details-before-starting-tryhackme-rooms",level:2},{value:"Additional Notice",id:"additional-notice",level:2}],p=e=>{let{children:t,color:r}=e;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:c,Highlight:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"important-details-before-starting-tryhackme-rooms"},"Important Details Before Starting TryHackMe Rooms!"),(0,a.kt)("admonition",{title:"Follow the Free Path Yourself!",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Here is a direct ",(0,a.kt)("a",{parentName:"p",href:"https://tryhackme.com/resources/blog/free_path"},(0,a.kt)("strong",{parentName:"a"},"link"))," to the free path guide by Bee that I am using.",(0,a.kt)("br",{parentName:"p"}),"\n","As suggested by the creator of the guide, eventually you may want to consider subscribing (and/or utilize other great resources as well like hackthebox!)")),(0,a.kt)("admonition",{title:"General Rules",type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"*.tryhackme.com and the OpenVPN server is off-limits to probing, scanning, or exploiting."),(0,a.kt)("li",{parentName:"ul"},"Users are only authorized to hack machines that have been deployed in the rooms they have access to."),(0,a.kt)("li",{parentName:"ul"},"Users are not to target or attack other users"),(0,a.kt)("li",{parentName:"ul"},"Users should only enter the event once, using one account."))),(0,a.kt)("h2",{id:"additional-notice"},"Additional Notice"),(0,a.kt)("p",null,'As the guide by Bee mentions, the rooms are separated into "Walkthrough" rooms or "CTF" rooms. That is, walkthrough rooms, guide you through the process (much like Advent does) while CTF\'s are largely done on your own.'),(0,a.kt)("p",null,"I plan to separate the rooms based on the levels that Bee has defined in their blogpost. Any additional plans/ideas will be listed on the ",(0,a.kt)("a",{href:"../../toDoList",target:"_blank"}," ideas"),"\npage."),(0,a.kt)("p",null,"Currently, this is just a placeholder on the sidebar until I start posting the rooms on here."))}h.isMDXComponent=!0}}]);