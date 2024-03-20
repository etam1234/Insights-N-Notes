"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[4090],{9406:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=s(5893),a=s(1151);const i={slug:"AD",title:"Active Directory Lab",authors:["ET"],tags:["lab"]},o=void 0,d={permalink:"/Insights-N-Notes/blog/AD",source:"@site/blog/IT Stuff/Active Directory VM Lab.md",title:"Active Directory Lab",description:"In this lab I set up a Windows Server 2022 Machine, and utilized several Windows 10 VMs. The goal of this lab is to learn more about the tools Windows Server provides and to mimic that of a real network.",date:"2024-03-20T14:31:27.282Z",formattedDate:"March 20, 2024",tags:[{label:"lab",permalink:"/Insights-N-Notes/blog/tags/lab"}],readingTime:2.7,hasTruncateMarker:!1,authors:[{name:"Ethan Tam",title:"Cybersecurity Enthusiast!",url:"https://etam1234.github.io/Insights-N-Notes",imageURL:"https://github.com/etam1234.png",key:"ET"}],frontMatter:{slug:"AD",title:"Active Directory Lab",authors:["ET"],tags:["lab"]},unlisted:!1,nextItem:{title:"Update May 2023",permalink:"/Insights-N-Notes/blog/update"}},r={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In this lab I set up a Windows Server 2022 Machine, and utilized several Windows 10 VMs. The goal of this lab is to learn more about the tools Windows Server provides and to mimic that of a real network."}),"\n",(0,n.jsx)(t.p,{children:"For the setup, I used VirtualBox as this was the most convenient!"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Microsoft has their own ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-gb/training/modules/introduction-to-ad-ds/1-introduction",children:(0,n.jsx)(t.strong,{children:"Free Module"})})," on the fundamentals to AD DS"]})}),"\n",(0,n.jsxs)(t.p,{children:["Firstly, I downloaded the windows server 2022 .iso ",(0,n.jsx)(t.a,{href:"https://www.microsoft.com/en-us/evalcenter/download-windows-server-2022",children:"files"})," and the windows 10 .iso ",(0,n.jsx)(t.a,{href:"https://www.microsoft.com/en-us/evalcenter/download-windows-10-enterprise",children:"files"})," via Microsoft."]}),"\n",(0,n.jsxs)(t.p,{children:["(Always make sure to verify the .iso files when possible using tools like certutil to match the Hash!)\n",(0,n.jsx)(t.img,{alt:"3df411e48306dcafd1885d6ed480d817.png",src:s(2851).Z+"",width:"976",height:"212"}),"\n",(0,n.jsx)(t.img,{alt:"d91fa9f9111aeaa47976eacdf2b52313.png",src:s(6260).Z+"",width:"1738",height:"549"}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)(t.em,{children:"Matching hashes from adguard.net"})})]}),"\n",(0,n.jsx)(t.p,{children:"After downloading the ISOs, I set up the virtual machines (both setup processes are very similar)"}),"\n",(0,n.jsxs)(t.p,{children:["Simply give it a name and attach the respective .iso for the machine you are creating.\n",(0,n.jsx)(t.img,{alt:"0bd924ad0672269dc603244762d0d04e.png",src:s(4687).Z+"",width:"926",height:"589"}),"\n",(0,n.jsxs)("center",{children:[(0,n.jsx)(t.em,{children:"Setup for a Windows 10 Machine"})," (If the setup looks slightly different it may be because you are in Guided Mode)"]})]}),"\n",(0,n.jsx)(t.p,{children:"Then I proceeded to launch the VMs, and finish the Windows setup as described in the writeup."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Note that you CAN launch multiple VMs at a time, but depending on the host computer may run slower!"}),(0,n.jsx)(t.p,{children:"I also found that sometimes my vm instances would abort when running multiple VMs."})]}),"\n",(0,n.jsxs)(t.p,{children:["Next, I configured the network on VirtualBox, in order to create a simulated network between the AD VM with the other Win 10 VMs.\n",(0,n.jsx)(t.img,{alt:"f7a4b7b0c843619cadbebd1cc0b338a3.png",src:s(3281).Z+"",width:"1248",height:"717"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"0bf7ddcfe069f9407091e55faa6f33ad.png",src:s(3801).Z+"",width:"631",height:"469"}),'\nNext, when we launch our Win 10 machines again and proceed with setup, we can "Domain Join Instead" and proceed with setup as normally.']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"a41996da3fd38be5045fbbc8e2713d8b.png",src:s(626).Z+"",width:"1024",height:"755"})}),"\n",(0,n.jsx)(t.p,{children:"I then configured the network for the Win 10 VM with the Server, by getting the IP address of my Server:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"6057bb65a07af99f8a791ad9cb67b251.png",src:s(3649).Z+"",width:"1023",height:"539"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"89876d537663a11328319b66b40d17fd.png",src:s(8656).Z+"",width:"1020",height:"722"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"ab403765efb3aa074076bddbb843d28f.png",src:s(3089).Z+"",width:"773",height:"549"}),"\nHere, we can choose the features to add within the server."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"dc144395abb2d9c2b6fa6b7929a109b4.png",src:s(457).Z+"",width:"976",height:"694"}),"\nI let the process complete so that Acive Directory would be installed. (The server will restart)"]}),"\n",(0,n.jsxs)(t.p,{children:["In the below screenshots, I then created a user:\n",(0,n.jsx)(t.img,{alt:"cfa6fa3d0fad6a8d214e5a0ded8f7470.png",src:s(2378).Z+"",width:"1018",height:"622"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"3fe0b66b2341e96f0efdcb84cd9f5d96.png",src:s(9981).Z+"",width:"1015",height:"709"})}),"\n",(0,n.jsx)(t.p,{children:"In this environment, I set the password to never expire, though you can opt for different settings."}),"\n",(0,n.jsx)(t.p,{children:"When it comes to password expiries, NIST notes:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Users tend to choose weaker memorized secrets when they know that they will have to change them in the near future. When those changes do occur, they often select a secret that is similar to their old memorized secret by applying a set of common transformations such as increasing a number in the password.\n",(0,n.jsx)(t.a,{href:"https://pages.nist.gov/800-63-FAQ/#q-b05",children:"Source"})," (q-b05)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As a result, enforcing password expiries may actually bring more harm than improve security. Such tools like MFA can bring more benefits than using password expiries."}),"\n",(0,n.jsxs)(t.p,{children:["Logging into our Win 10 VM again, we will connect to the Domain\n",(0,n.jsx)(t.img,{alt:"4c66fe1de24d10792e1e3abea22960a3.png",src:s(6388).Z+"",width:"1920",height:"646"}),"\n",(0,n.jsxs)("center",{children:[(0,n.jsx)(t.em,{children:"Make sure that the Server VM is running, otherwise the domain won't be recognized."})," Also note that the login (username) will be based on the user logon name you provided!"]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"6b0e9d45aa5af848636dff35f5326584.png",src:s(5168).Z+"",width:"829",height:"510"}),"\nNow, the VM will restart and you can sign on! (on the other user)"]}),"\n",(0,n.jsx)(t.p,{children:"At this point, I will play around with the settings to understand some of the tools provided by Windows Server."}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["Big thanks to Joshua Green for his tutorial on setting up a [home lab]!(",(0,n.jsx)(t.a,{href:"https://drive.google.com/file/d/1YgtiSxaitgIpNsu5HuIYzOV49pnv4iw8/view?pli=1",children:"https://drive.google.com/file/d/1YgtiSxaitgIpNsu5HuIYzOV49pnv4iw8/view?pli=1"}),")"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This post is mostly to show what I learned and noted!"})})]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4687:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/0bd924ad0672269dc603244762d0d04e-00755d656866f3984215a32fea8e5611.png"},3801:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/0bf7ddcfe069f9407091e55faa6f33ad-d47ff5e741aa4e9b724a9dab7b19bfc7.png"},2851:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/3df411e48306dcafd1885d6ed480d817-8f45f5e958e803a13e05e0646492db29.png"},9981:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/3fe0b66b2341e96f0efdcb84cd9f5d96-c1e7904758f8720e0c1ce373c1120600.png"},6388:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/4c66fe1de24d10792e1e3abea22960a3-a12f868a25de5755bb53c7d74f27e153.png"},3649:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/6057bb65a07af99f8a791ad9cb67b251-3781f713c190938de764b614549bfa92.png"},5168:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/6b0e9d45aa5af848636dff35f5326584-a450c9bf36124425e20159b1ce19076a.png"},8656:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/89876d537663a11328319b66b40d17fd-14ddd0b488174964bc697785292319b8.png"},626:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/a41996da3fd38be5045fbbc8e2713d8b-c7b68f1cb00102372f1f6fa6be63a2bd.png"},3089:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/ab403765efb3aa074076bddbb843d28f-848a9baa89708d3a46c92a44430e4346.png"},2378:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cfa6fa3d0fad6a8d214e5a0ded8f7470-d4f89e69bb4a3b6d0abb62d42efe0863.png"},6260:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/d91fa9f9111aeaa47976eacdf2b52313-08b3768b830bce9cc17dacbe9246a516.png"},457:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dc144395abb2d9c2b6fa6b7929a109b4-6977bb1f6155ed0764d153eda61771c2.png"},3281:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/f7a4b7b0c843619cadbebd1cc0b338a3-5a26be6a7210b1f7a6bf8c08fc5078d7.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>o});var n=s(7294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);