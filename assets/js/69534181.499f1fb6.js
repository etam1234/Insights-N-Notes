"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[8225],{7951:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>h,assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(5893),i=s(1151);const r={id:"Advent of Cyber 2021 Day 11",title:"Day 11",description:"\u200b[Day 11] Networking - Where Are The Reindeers?"},o=void 0,a={id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 11",title:"Day 11",description:"\u200b[Day 11] Networking - Where Are The Reindeers?",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/03-Days 9-14 ~ Networking/Day 11.mdx",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/03-Days 9-14 ~ Networking",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 11",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 11",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 11",title:"Day 11",description:"\u200b[Day 11] Networking - Where Are The Reindeers?"},sidebar:"mySideBar",previous:{title:"Day 10",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 10"},next:{title:"Day 12",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 9-14 ~ Networking/Advent of Cyber 2021 Day 12"}},d={},c=[{value:"[Day 11] <Highlight>Networking</Highlight> Where Are The Reindeers?",id:"day-11-networking-where-are-the-reindeers",level:2}],h=({children:e,color:n})=>{const s={span:"span",...(0,i.a)()};return(0,t.jsx)(s.span,{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})};function l(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"day-11-networking-where-are-the-reindeers",children:["[Day 11] ",(0,t.jsx)(h,{color:"#FFD580",children:"Networking"})," Where Are The Reindeers?"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"McDatabaseAdmin came rushing into the room and cried to McSkidy, \u201cWe\u2019ve been locked out of the reindeer schedule - how will Santa\u2019s transportation work for Christmas?\u201d The grinch has locked McDatabaseAdmin of his system. You need to probe the external surface of the server to see if you get him his access back."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"nmap_scan.png",src:s(6840).Z+"",width:"579",height:"95"}),"nmap_scan\r\nIf a service is blocking ping probes from NMap, try ",(0,t.jsx)(n.code,{children:"-Pn"})," to see if it will scan."]}),"\n",(0,t.jsxs)(n.p,{children:["We can see that the MS SQL server is indeed running.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"sqsh -S 10.10.97.31 -U sa -P t7uLKzddQzVjVFJp"})," is the full command where, after ",(0,t.jsx)(n.code,{children:"-S"})," is the server, ",(0,t.jsx)(n.code,{children:"-U"})," is the username and ",(0,t.jsx)(n.code,{children:"-P"})," is the password to try and see if our login works."]}),"\n",(0,t.jsxs)(n.p,{children:["It's worked:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"sql_login.png",src:s(9301).Z+"",width:"579",height:"95"})]}),"\n",(0,t.jsxs)(n.p,{children:["Here, we are selecting info on the databases which reveals the contents of the table\r\n",(0,t.jsx)(n.img,{alt:"sql_select.png",src:s(2264).Z+"",width:"644",height:"264"})]}),"\n",(0,t.jsx)(n.admonition,{title:"Next Steps",type:"note",children:(0,t.jsx)(n.p,{children:"You have done fantastic work! You have helped McDatabaseAdmin retrieve the schedule! Now, let\u2019s see if we can run MS Windows commands while interacting with the database. Some MS SQL Servers have xp_cmdshell enabled. If this is the case, we might have access to something similar to a command prompt."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"note.png",src:s(4254).Z+"",width:"1064",height:"576"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"dir.png",src:s(5937).Z+"",width:"709",height:"429"}),(0,t.jsx)(n.br,{}),"\n","A good start, but we need to dig deeper to find flag. Once, we do, we will find an interesting file in the ",(0,t.jsx)(n.code,{children:"grinch"})," user's home dir."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, we look inside the file and its contents",(0,t.jsx)(n.img,{alt:"dirFlag.png",src:s(1851).Z+"",width:"792",height:"410"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'Btw note the backslash is "" cuz "/" won\'t be recognized.'})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5937:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/dir-ea81741cb6b2be68e6d30ac6aa0e257d.png"},1851:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/dirFlag-427fdc5c04411f2a939884343b3d0c0b.png"},6840:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/nmap_scan-7c9ec254c4e4efd0fd8d92c25303d2cc.png"},4254:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/note-d43332d8eaf48f89e0ef21a905db4c16.png"},9301:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sql_login-7c9ec254c4e4efd0fd8d92c25303d2cc.png"},2264:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sql_select-fc69b7eec9d27fa0021cffef106df28d.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);