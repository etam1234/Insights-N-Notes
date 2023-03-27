"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[1346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),A=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):f(f({},t),e)),n},i=function(e){var t=A(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=A(n),c=r,m=s["".concat(l,".").concat(c)]||s[c]||d[c]||o;return n?a.createElement(m,f(f({ref:t},i),{},{components:n})):a.createElement(m,f({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,f=new Array(o);f[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,f[1]=p;for(var A=2;A<o;A++)f[A]=n[A];return a.createElement.apply(null,f)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7526:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>i,assets:()=>l,contentTitle:()=>f,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>A});var a=n(7462),r=(n(7294),n(3905));const o={id:"Advent of Cyber 2021 Day 16",title:"Day 16",sidebar_label:"Day 16 ~ OSINT Ransomware Madness",description:"\u200b[Day 16] OSINT Ransomware Madness"},f=void 0,p={unversionedId:"TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 16",id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 16",title:"Day 16",description:"\u200b[Day 16] OSINT Ransomware Madness",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/Day 16.mdx",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 16",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 16",draft:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 16",title:"Day 16",sidebar_label:"Day 16 ~ OSINT Ransomware Madness",description:"\u200b[Day 16] OSINT Ransomware Madness"},sidebar:"mySideBar",previous:{title:"Day 14",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 14"},next:{title:"Days 17-18 ~ Cloud",permalink:"/Insights-N-Notes/docs/category/days-17-18--cloud"}},l={},A=[{value:"Day 16 <Highlight color=\"gray\"><span color = '#b5b7bd'>OSINT</span></Highlight> Ransomware Madness",id:"day-16-osint-ransomware-madness",level:2},{value:"OSINT Process Cycle",id:"osint-process-cycle",level:3},{value:"OSINT &amp; The Blockchain",id:"osint--the-blockchain",level:3}],i=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:A,Highlight:i};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"day-16-osint-ransomware-madness"},"[Day 16]"," ",(0,r.kt)(i,{color:"gray",mdxType:"Highlight"},(0,r.kt)("span",{color:"#b5b7bd"},"OSINT"))," Ransomware Madness"),(0,r.kt)("p",null,"Woo."),(0,r.kt)("h3",{id:"osint-process-cycle"},"OSINT Process Cycle"),(0,r.kt)("p",null,"Each individual and team will have a methodology in their approach."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"osint-process.png",src:n(1284).Z,width:"761",height:"231"}),(0,r.kt)("br",{parentName:"p"}),"\n","A general idea of the methodology shared on TryHackMe*"),(0,r.kt)("p",null," An the example of the processes in the cycle:",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("img",{alt:"example-process.png",src:n(7464).Z,width:"681",height:"281"})),(0,r.kt)("p",null," And another example, detailing an example process when performing OSINT:",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("img",{alt:"step-example.png",src:n(1049).Z,width:"1920",height:"804"})),(0,r.kt)("h3",{id:"osint--the-blockchain"},"OSINT & The Blockchain"),(0,r.kt)("p",null," There are many readily available tools to help follow a blockchain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'You are the responding intelligence officer on the hunt for more information about the infamous "Grinch Enterprises" ransomware gang.\nAs a response to the recent ransomware activity from Grinch Enterprises, your team has managed to collect a sample ransomware note (below). ')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rans-note.png",src:n(211).Z,width:"1732",height:"422"})),(0,r.kt)("p",null,"Since it's in another language, lets try translating it. I will use Deepl to do so.\n",(0,r.kt)("img",{alt:"translate-note.png",src:n(2496).Z,width:"1507",height:"692"}),(0,r.kt)("br",{parentName:"p"}),"\n","Translated message."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grinch-twitter.png",src:n(6593).Z,width:"1335",height:"740"}),"\nHere is the Grinch on twitter"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It becomes easier the more the Grinch is investigated as google will SEO those search results.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deets.png",src:n(3454).Z,width:"1598",height:"922"}),"\nAnd lastly as we dig deeper, we find their github, where they forgot to hide their commit with their email and name."),(0,r.kt)("admonition",{title:"Personal Thoughts",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I personally enjoyed the OSINT lab the most! I'd love to go deeper into the concept of OSINT later on \ud83d\ude03.")))}d.isMDXComponent=!0},3454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deets-e77bdd8856b3de9d02cfdc92c7e4a27e.png"},7464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-process-da7526d098db1191f3cf41859e2bc649.png"},6593:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grinch-twitter-d6dfb32607826d5eda973bad165f4fe2.png"},1284:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},211:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rans-note-5596dcd7581b401b90e6df4d827e5af6.png"},1049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step-example-042efad487842866092209bee9d7d817.png"},2496:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/translate-note-a34682422aa81bfb7ceef1e7ecb027c8.png"}}]);