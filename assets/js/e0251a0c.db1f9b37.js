"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[7311],{1604:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=n(5893),i=n(1151);const s={id:"Advent of Cyber 2021 Day 24",title:"Day 24",sidebar_label:"Day 24 ~ Post Exploitation ~ Learning From The Grinch",description:"\u200b[Day 24] ~ Post Exploitation ~ Learning From The Grinch"},o=void 0,r={id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 24",title:"Day 24",description:"\u200b[Day 24] ~ Post Exploitation ~ Learning From The Grinch",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/Day 24.mdx",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 24",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Advent of Cyber 2021 Day 24",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 24",title:"Day 24",sidebar_label:"Day 24 ~ Post Exploitation ~ Learning From The Grinch",description:"\u200b[Day 24] ~ Post Exploitation ~ Learning From The Grinch"},sidebar:"mySideBar",previous:{title:"Day 23 ~ PowershELlF Magic",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 19-24 ~ Blue Teaming/Advent of Cyber 2021 Day 23"},next:{title:"Free Path",permalink:"/Insights-N-Notes/docs/TryHackMe/Free-Path/Free_Path"}},d={},h=[{value:"[Day 24] <Highlight><span>Post Exploitation</span></Highlight> Learning From The Grinch",id:"day-24-post-exploitation-learning-from-the-grinch",level:2},{value:"Post Exploitation",id:"post-exploitation",level:3},{value:"Password Hashing",id:"password-hashing",level:3},{value:"Authentication and Hashing",id:"authentication-and-hashing",level:3},{value:"Final day complete!!!",id:"final-day-complete",level:3}],c=({children:e,color:t})=>{const n={span:"span",...(0,i.a)()};return(0,a.jsx)(n.span,{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})};function l(e){const t={admonition:"admonition",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h2,{id:"day-24-post-exploitation-learning-from-the-grinch",children:["[Day 24] ",(0,a.jsx)(c,{color:"#6595C4",children:(0,a.jsx)("span",{children:"Post Exploitation"})})," Learning From The Grinch"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"McSkidy has learned a lot about how Grinch Enterprises operates and wants to prepare for any future attacks from anyone who hates Christmas. From a forensics analysis they did, she noticed that the Grinch Enterprises performed some malicious activities. She wants to perform these on the same machine they compromised to understand her adversaries a little better. Can you follow along and help her prepare for any other attacks?"}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.h3,{id:"post-exploitation",children:"Post Exploitation"}),(0,a.jsx)(t.p,{children:"Post-Exploitation, an attacker will attempt to either escalate their privileges or main persistence and stay there are long as possible."})]}),"\n",(0,a.jsx)(t.h3,{id:"password-hashing",children:"Password Hashing"}),"\n",(0,a.jsx)(t.p,{children:"password123 \u2192 MD5 \u2192 7576f3a00f6de47b0c72c5baf2d505b0"}),"\n",(0,a.jsx)(t.p,{children:"(INPUT \u2192 FUNCTION \u2192 OUTPUT)"}),"\n",(0,a.jsx)(t.h3,{id:"authentication-and-hashing",children:"Authentication and Hashing"}),"\n",(0,a.jsx)(t.p,{children:"Windows stores crednetials int he Security Accounts Manage (SAM) db"}),"\n",(0,a.jsx)(t.p,{children:"SAM will have 2 kinds of hashes:"}),"\n",(0,a.jsx)(t.p,{children:"LAN Manager (LM) - the old password hash storage for legacy systems"}),"\n",(0,a.jsx)(t.p,{children:"NT Lan manager (NTLM) - the modern windows hashing algo."}),"\n",(0,a.jsx)(t.p,{children:"Under the Local Security Authority Subsystem Service (LSASS) process, it will match the user credentials with that in the SAM db and compare the hash of the user pw. It's stored for convenience to avoid needing credentials repeatedly."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"escalation.png",src:n(596).Z+"",width:"961",height:"744"})}),"\n",(0,a.jsxs)(t.p,{children:['And finally the wordlist matched a hashed password that is commonly used "1234567890"\r\n',(0,a.jsx)(t.img,{alt:"matched-hash.png",src:n(4736).Z+"",width:"668",height:"121"})]}),"\n",(0,a.jsx)(t.h3,{id:"final-day-complete",children:"Final day complete!!!"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://media.tenor.com/YQOENmm9RDUAAAAC/duck-dancing.gif",alt:"duck dance"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/escalation-8859a89b2cf59029d349a0bb1c44b216.png"},4736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matched-hash-da33fd391d0ccccd235684a61284cea9.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);