"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[4503],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=r,m=d["".concat(l,".").concat(f)]||d[f]||y[f]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1594:(e,t,o)=>{o.r(t),o.d(t,{Highlight:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={id:"Advent of Cyber Day 8",title:"Day 8",sidebar_label:"Day 8 ~ Special by John Hammond"},i=void 0,s={unversionedId:"TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",title:"Day 8",description:"[Day 8] Special by John Hammond Santa's Bag of Toys",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/02-Day 8 ~ Special By Joyn Hammond/Day 8.md",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/02-Day 8 ~ Special By Joyn Hammond",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",draft:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber Day 8",title:"Day 8",sidebar_label:"Day 8 ~ Special by John Hammond"},sidebar:"mySideBar",previous:{title:"Day 7",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 7"}},l={},c=[{value:'Day 8 <Highlight color="#32a893">Special</Highlight> by John Hammond Santa&#39;s Bag of Toys',id:"day-8-special-by-john-hammond-santas-bag-of-toys",level:2}],p=e=>{let{children:t,color:o}=e;return(0,r.kt)("span",{style:{backgroundColor:o,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:c,Highlight:p};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"day-8-special-by-john-hammond-santas-bag-of-toys"},"[Day 8]"," ",(0,r.kt)(p,{color:"#32a893",mdxType:"Highlight"},"Special")," by John Hammond Santa's Bag of Toys"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"McSkidy was notified of some terrible news! Santa's laptop, which he uses to prepare his bag of toys for Christmas, is missing! We believe a minion at the Grinch Enterprise stole it, but we need to find out for sure. It is up to us to determine what actor compromised the laptop and recover Santa's bag of toys!"),(0,r.kt)("p",{parentName:"blockquote"},"Unfortunately, The Best Festival Company had minimal monitoring tools on Santa's laptop (he is the boss, after all)! All we have to work with are some PowerShell Transcription Logs we were able to remotely recover just after it went missing. You can find the transcription logs within the SantasLaptopLogs folder on the Desktop of the attached Windows virtual machine.")),(0,r.kt)("p",null,"While you do not have to use these commands for this task, these will turn on PowerShell Transcription Logging for a local host if entered in an Administrator command prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"reg add HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription /v EnableTranscripting /t REG_DWORD /d 0x1 /f\nreg add HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription /v OutputDirectory /t REG_SZ /d C:/ /f\nreg add HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription /v EnableInvocationHeader /t REG\n")),(0,r.kt)("p",null,"Useful registry to add for powershell transcription logging for a localhost. "),(0,r.kt)("p",null,"Looking at logs -\n",(0,r.kt)("img",{alt:"logs.png",src:o(1251).Z,width:"627",height:"249"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github.png",src:o(4859).Z,width:"866",height:"303"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note how on github, the pw is visible for all users to see and observe. This is the case for many (public) repos that do not omit keys or secrets like the Grinch did here")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UHARC.png",src:o(6446).Z,width:"1251",height:"989"}),"\nHere we extract an existing archive to view contents of the archive."))}y.isMDXComponent=!0},6446:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/UHARC-dd8bae99cfb4c13f6cfb2f93c170fe03.png"},4859:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-f59afeea15d4773f173aa0e261740105.png"},1251:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/logs-95bf4cd89fbc7f744ec8c195616abea9.png"}}]);