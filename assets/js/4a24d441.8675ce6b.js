"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[6683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1964:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"Advent of Cyber 2021 Day 18",title:"Day 18",sidebar_label:"Day 18 ~ Playing With Containers",description:"\u200b[Day 18] ~ Playing With Containers"},i=void 0,s={unversionedId:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud/Advent of Cyber 2021 Day 18",id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud/Advent of Cyber 2021 Day 18",title:"Day 18",description:"\u200b[Day 18] ~ Playing With Containers",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud/Day 18.mdx",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud/Advent of Cyber 2021 Day 18",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud/Advent of Cyber 2021 Day 18",draft:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 18",title:"Day 18",sidebar_label:"Day 18 ~ Playing With Containers",description:"\u200b[Day 18] ~ Playing With Containers"},sidebar:"mySideBar",previous:{title:"Day 17 ~ Elf Leaks",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 17-18 ~ Cloud/Advent of Cyber 2021 Day 17"},next:{title:"Days 19-23 ~ Blue Teaming",permalink:"/Insights-N-Notes/docs/category/days-19-23--blue-teaming"}},l={},c=[{value:'Day 18 <Highlight color="#c3b4ef"><span>Cloud</span></Highlight>',id:"day-18-cloud",level:2}],d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:c,Highlight:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"day-18-cloud"},"[Day 18]"," ",(0,a.kt)(d,{color:"#c3b4ef",mdxType:"Highlight"},(0,a.kt)("span",null,"Cloud"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Grinch Enterprises has been gloating about their attack on an underground forum. We know they were specifically targeting organizations in a campaign they've themed \"Advent of Cyber\" (AOC) - what a frustrating coincidence. Tracing the user back over time - we also encountered a reference to using AWS Elastic Container Registry (ECR) to store container images they use as infrastructure in their attacks. Let's see if we can find out more about the attack tooling Grinch Enterprises is using.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In a cloud-native computing environment, containers are a first-choice solution for deploying infrastructure. Similar to virtual machines, containers serve as the compute fabric for many running applications and hosted processes in the cloud.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"docker.png",src:n(3777).Z,width:"1044",height:"555"}),"\nWe are pulling this container to investigate."),(0,a.kt)("p",null,"Next we use ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -la")," which shows there are no regular files or subdirectories in the present working directory."),(0,a.kt)("p",null,"So we try ",(0,a.kt)("inlineCode",{parentName:"p"},"printenv")," to learn more about the environment configurations where we see:\n",(0,a.kt)("img",{alt:"printenv.png",src:n(6441).Z,width:"639",height:"114"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"printenv")," lists the values of environmental variables")),(0,a.kt)("p",null,"An api key that they forgot to remove from the environment configs.\n",(0,a.kt)("img",{alt:"exposedkey.png",src:n(5394).Z,width:"714",height:"291"})))}p.isMDXComponent=!0},3777:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docker-b97e2451005e97bb04895558f176c7c3.png"},5394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/exposedkey-865d1e0d87a3578b9a182bf9547036e4.png"},6441:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/printenv-253adda4f58a2789709d0cddfce90475.png"}}]);