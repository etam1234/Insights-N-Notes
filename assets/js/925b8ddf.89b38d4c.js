"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[2345],{6173:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>l,assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(5893),i=n(1151);const s={id:"Advent of Cyber 2021 Day 7",title:"Day 7",description:"\u200b[Day 7] Web Exploitation - Migration Without Security"},a=void 0,r={id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 7",title:"Day 7",description:"\u200b[Day 7] Web Exploitation - Migration Without Security",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation/Day 7.mdx",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 7",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 7",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 7",title:"Day 7",description:"\u200b[Day 7] Web Exploitation - Migration Without Security"},sidebar:"mySideBar",previous:{title:"Day 6",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 6"},next:{title:"Day 8 ~ Special by John Hammond",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Day 8 ~ Special By Joyn Hammond/Advent of Cyber Day 8"}},d={},c=[{value:"[Day 7] <Highlight>Web Exploitation</Highlight> Migration Without Security",id:"day-7-web-exploitation-migration-without-security",level:2},{value:"Understanding NoSQL",id:"understanding-nosql",level:3}],l=({children:e,color:t})=>{const n={span:"span",...(0,i.a)()};return(0,o.jsx)(n.span,{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})};function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"day-7-web-exploitation-migration-without-security",children:["[Day 7] ",(0,o.jsx)(l,{color:"#621d27",children:"Web Exploitation"})," Migration Without Security"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The development team that handles gift requests from Children migrated over to a new technology stack. In doing so, they left their application vulnerable, and Grinch Enterprises now controls access to the system. Fortunately, Grinch enterprises forgot to patch the system so you can use the same vulnerability to retrieve the gift requests for the students."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"NoSql is a non-relational db (NonSQL or Not only SQL) which stores or retrieves data. Usually used for IoT or big Data for its ease of use, scalability, and the flexible nature of the data."})}),"\n",(0,o.jsx)(t.h3,{id:"understanding-nosql",children:"Understanding NoSQL"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"nosql.png",src:n(6523).Z+"",width:"1139",height:"510"})}),"\n",(0,o.jsx)(t.p,{children:"Some common opperators in MySQL for NoSQL:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"$and equivalent to AND in MySQL"}),"\n",(0,o.jsx)(t.li,{children:"$or equivalent to OR in MySQL"}),"\n",(0,o.jsx)(t.li,{children:"$eq equivalent to = in MySQL"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["mongo to enter the database and start doing mongo commands...\r\nshow databases:\r\n",(0,o.jsx)(t.img,{alt:"showingdb.png",src:n(5634).Z+"",width:"505",height:"171"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"modifyingdb.png",src:n(3944).Z+"",width:"564",height:"225"}),"\r\nHere they are creating a new db and adding new formats to it."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"flag.png",src:n(1544).Z+"",width:"717",height:"301"}),"\r\nSeeing the value in the flagdb database."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"mongodboperator.png",src:n(2933).Z+"",width:"1032",height:"224"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"nosqlinjection.png",src:n(9276).Z+"",width:"894",height:"532"}),(0,o.jsx)("br",{}),"\r\nHere we apply the nosql injection. It tells us it's sucessful and so we can check the website for real"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"loggedin.png",src:n(5876).Z+"",width:"752",height:"778"}),(0,o.jsx)("br",{}),"\r\n",(0,o.jsx)(t.strong,{children:"See now, we are logged in!"})," ",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"moreinjection.png",src:n(9085).Z+"",width:"918",height:"713"}),"\r\nIgnore selection of the username we put ",(0,o.jsx)(t.code,{children:"weewoo"})," (to return any other member) and also specify the role to be ",(0,o.jsx)(t.code,{children:"guest"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"evenmoreinjection.png",src:n(34).Z+"",width:"1134",height:"759"}),"\r\nIn this statement, we are trying to return every row in the table to look for one that has the entry ",(0,o.jsx)(t.code,{children:"McSkidy"})," and the role can be whatever so we use ",(0,o.jsx)(t.code,{children:"[$ne]"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},34:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evenmoreinjection-0b160b64fb6beb112ed1228835088d7f.png"},1544:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flag-a29e39c296364701189ed248f23ea907.png"},5876:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loggedin-9311ad2e96bab57657eff8a04f5cd873.png"},3944:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/modifydb-ce3ab34bd3c222ff0791a5790e2ad9a9.png"},2933:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mongodboperator-25ec51035efd772a0f4f2c402589a59d.png"},9085:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/moreinjection-e40ffe498ae59e04766c0b91dbed3d18.png"},6523:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/nosql-bf80fbca3caacc90bf9c70b9dae727c9.png"},9276:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/nosqlinjection-bd271aeb683aac3e3119a2da8c96d679.png"},5634:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/showdb-d1ab4d6337654e010eeaa596ee0a5f4c.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);