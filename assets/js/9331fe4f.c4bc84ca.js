"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[4503],{7196:(e,o,t)=>{t.r(o),t.d(o,{Highlight:()=>l,assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(5893),a=t(1151);const s={id:"Advent of Cyber Day 8",title:"Day 8",sidebar_label:"Day 8 ~ Special by John Hammond"},i=void 0,r={id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",title:"Day 8",description:"[Day 8] Special by John Hammond Santa's Bag of Toys",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/02-Day 8 ~ Special By Joyn Hammond/Day 8.md",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/02-Day 8 ~ Special By Joyn Hammond",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber Day 8",title:"Day 8",sidebar_label:"Day 8 ~ Special by John Hammond"},sidebar:"mySideBar",previous:{title:"Day 7",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 7"},next:{title:"Days 9-14 ~ Networking",permalink:"/Insights-N-Notes/docs/category/days-9-14--networking"}},c={},d=[{value:"[Day 8] <Highlight>Special</Highlight> by John Hammond Santa&#39;s Bag of Toys",id:"day-8-special-by-john-hammond-santas-bag-of-toys",level:2}],l=({children:e,color:o})=>{const t={span:"span",...(0,a.a)()};return(0,n.jsx)(t.span,{style:{backgroundColor:o,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})};function h(e){const o={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.h2,{id:"day-8-special-by-john-hammond-santas-bag-of-toys",children:["[Day 8] ",(0,n.jsx)(l,{color:"#32a893",children:"Special"})," by John Hammond Santa's Bag of Toys"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"McSkidy was notified of some terrible news! Santa's laptop, which he uses to prepare his bag of toys for Christmas, is missing! We believe a minion at the Grinch Enterprise stole it, but we need to find out for sure. It is up to us to determine what actor compromised the laptop and recover Santa's bag of toys!"}),"\n",(0,n.jsx)(o.p,{children:"Unfortunately, The Best Festival Company had minimal monitoring tools on Santa's laptop (he is the boss, after all)! All we have to work with are some PowerShell Transcription Logs we were able to remotely recover just after it went missing. You can find the transcription logs within the SantasLaptopLogs folder on the Desktop of the attached Windows virtual machine."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"While you do not have to use these commands for this task, these will turn on PowerShell Transcription Logging for a local host if entered in an Administrator command prompt:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"reg add HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription /v EnableTranscripting /t REG_DWORD /d 0x1 /f\nreg add HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription /v OutputDirectory /t REG_SZ /d C:/ /f\nreg add HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription /v EnableInvocationHeader /t REG\n"})}),"\n",(0,n.jsx)(o.p,{children:"Useful registry to add for powershell transcription logging for a localhost."}),"\n",(0,n.jsxs)(o.p,{children:["Looking at logs -\n",(0,n.jsx)(o.img,{alt:"logs.png",src:t(1251).Z+"",width:"627",height:"249"})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"github.png",src:t(4859).Z+"",width:"866",height:"303"})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsx)(o.p,{children:"Note how on github, the pw is visible for all users to see and observe. This is the case for many (public) repos that do not omit keys or secrets like the Grinch did here"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.img,{alt:"UHARC.png",src:t(6446).Z+"",width:"1251",height:"989"}),"\nHere we extract an existing archive to view contents of the archive."]})]})}function p(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6446:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/UHARC-dd8bae99cfb4c13f6cfb2f93c170fe03.png"},4859:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/github-f59afeea15d4773f173aa0e261740105.png"},1251:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/logs-95bf4cd89fbc7f744ec8c195616abea9.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>i});var n=t(7294);const a={},s=n.createContext(a);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);