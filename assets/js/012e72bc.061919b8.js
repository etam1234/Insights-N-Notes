"use strict";(self.webpackChunkinsights=self.webpackChunkinsights||[]).push([[6442],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>R});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(i),u=a,R=p["".concat(l,".").concat(u)]||p[u]||E[u]||o;return i?n.createElement(R,s(s({ref:t},c),{},{components:i})):n.createElement(R,s({ref:t},c))}));function R(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8852:(e,t,i)=>{i.r(t),i.d(t,{Highlight:()=>c,assets:()=>l,contentTitle:()=>s,default:()=>E,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const o={id:"Advent of Cyber 2021 Day 5",title:"Day 5"},s=void 0,r={unversionedId:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 5",id:"TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 5",title:"Day 5",description:"[Day 5] Web Exploitation Pesky Elf Forum",source:"@site/docs/02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation/Day 5.md",sourceDirName:"02-TryHackMe/Advent-Of-Cyber-2021/Modules/01-Days 1-7 ~ Web Exploitation",slug:"/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 5",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 5",draft:!1,tags:[],version:"current",frontMatter:{id:"Advent of Cyber 2021 Day 5",title:"Day 5"},sidebar:"mySideBar",previous:{title:"Day 4",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 4"},next:{title:"Day 6",permalink:"/Insights-N-Notes/docs/TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 6"}},l={},d=[{value:'Day 5 <Highlight color="#621d27">Web Exploitation</Highlight> Pesky Elf Forum',id:"day-5-web-exploitation-pesky-elf-forum",level:2}],c=e=>{let{children:t,color:i}=e;return(0,a.kt)("span",{style:{backgroundColor:i,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:d,Highlight:c};function E(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"day-5-web-exploitation-pesky-elf-forum"},"[Day 5]"," ",(0,a.kt)(c,{color:"#621d27",mdxType:"Highlight"},"Web Exploitation")," Pesky Elf Forum"),(0,a.kt)("p",null,"XSS - Cross-site scripting"),(0,a.kt)("p",null,"DOM:"),(0,a.kt)("p",null,"DOM stands for Document Object Model and is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style and content. A web page is a document, and this document can be either displayed in the browser window or as the HTML source.\nAn example of this could be a website's JavaScript code getting the contents from the window.location.hash parameter and then write that onto the page in the currently being viewed section. "),(0,a.kt)("p",null,"Reflected:"),(0,a.kt)("p",null,"Reflected XSS happens when user-supplied data in an HTTP request is included in the webpage source without any validation. An example of this could be an error message which is in a query string of an URL that is reflected onto the webpage. The URL could look something like the following:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://website.thm/login?error=Username%20Is%20Incorrect"},"https://website.thm/login?error=Username%20Is%20Incorrect")),(0,a.kt)("p",null,"The error message could be replaced with JavaScript code which gets executed when a user visits the page."),(0,a.kt)("p",null,"Stored:"),(0,a.kt)("p",null,"As the name infers, the XSS payload is stored on the web application (in a database, for example) and then gets run when other users visit the site or web page. This type of XSS can be particularly damaging due to the number of victims that may be affected. An example of this could be a blog that allows visitors to leave comments. If a visitor's message is not properly validated and checked for XSS payloads, then every subsequent visit to the blog page would run the malicious JavaScript code."),(0,a.kt)("p",null,"Blind:"),(0,a.kt)("p",null,"Blind XSS is similar to a stored XSS in that your payload gets stored on the website for another user to view, but in this instance, you can't see the payload working or be able to test it against yourself first. An example of this could be a contact form. In the contact form, your message could contain an XSS payload, which when a member of staff views the message it gets executed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"xssdemo.png",src:i(7056).Z,width:"1061",height:"360"}),"\nThe idea here is to provide a reflected attack and get the password for Grinch switched to a password of our choosing. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"morexss.png",src:i(7974).Z,width:"747",height:"141"})),(0,a.kt)("p",null,"No stripping means that we can apply an XSS attack in the comment section that will cause our code to deploy for Grinch."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inspectelement.png",src:i(5542).Z,width:"614",height:"80"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag tells the browser we want to run some JavaScript, and the fetch command makes a network request to the specified URL."),(0,a.kt)("p",null,"Disguised XSS attack - looks like nothing is happening.\n",(0,a.kt)("img",{alt:"disguisedxss.png",src:i(2712).Z,width:"788",height:"115"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"complete.png",src:i(2241).Z,width:"846",height:"477"})),(0,a.kt)("p",null,"And now that we successfully launched our xss against the grinch to log on, we can disable the plugin."))}E.isMDXComponent=!0},2241:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/complete-4c428d2bac04b82335acd0255cb89f75.png"},2712:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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6+ujP5wCb83q5U7yeMstpqH7EsGxXnr7h+kJ9xCPJ8Hlxu0x8df6med+9zuJiIg8fhQoft/N2wyeD+F4TCqam9OlE6soLy9f/eAG8k5HFb0jNm7TT31zNYXcvrZ33nlnfTsnnzG5FJY10KpvmRYREcmaSp5ERERERDaw9S552nibskVERERE5DNDgUJERERERLKmQCEiIiIiIllToBARERERkawpUIiIiIiISNYUKEREREREJGsKFCIiIiIikjUFChERERERyZoChYiIiIiIZE2BQkREREREsqZAISIiIiIiWVOgEBERERGRrClQiIiIiIhI1jY/6gbj8fijblJERERERB6SRx4oXnrppUfdpIiIiIjI76333ntvXdtXyZOIiIiIiGRNgUJERERERLKmQCEiIiIiIllToBARERERkawpUIiIiIiISNYUKEREREREJGsKFCIiIiIikjUFChERERERyZoChYiIiIiIZE2BQkREREREsqZAISIiIiIiWVOgEBERERGRrClQiIiIiIhI1hQoREREREQka5vXuwP36+NrN/nZ1d/wyY0bXLu53r0REREREbl/mzfBU088wVe2Ps2WzZvWuzufyoYKFB9fu8n47K/5XM6TfCFnMzkb+7UXERERkcfU9ZuQvHGd8dlfU5r/uQ0dKjZUydPPrv6Gz+U8Sd4TTyhMiIiIiMiGlbMJnsnJwfXEZn529Tfr3Z1PZUMFio+vX+fpJ3LWuxsiIiIiIg+E64kcPrlxY7278alsqEBxg008gTZOiIiIiMjvh5xNbPh9wRsqUIiIiIiIyGeLAoWIiIiIiGRNgUJERERERLKmQCEiIiIiIllToBARERERkawpUIiIiIiISNYUKEREREREJGsKFCIiIiIikjUFChERERERyZoChYiIiIiIZE2BQkREREREsqZAISIiIiIiWVOgEBERERGRrG1e7w6si08+5EejP+bKzz/ig2SKLa6tvPgli51/XkyRa/WnTV3+H7TzTc6+/MKnav790T6+d7WMc//Gu8oj/pET3x+nqPE71Gz9VE2JiIiIiDxUj1+guPYBr//NED/a/CX+ovIbFOVv4XdXP+BH74zzvbP/zH/+7jfwPbXyU58rLmHntbxH218RERERkc+wxyxQzBMdfIu3nyql87USvnjr6j3PYpnP8+RfX+Jv3/Xhq/z8Hc9MXYOtL36V7Y+2wyIiIiIin2mPV6C49guGY7Btz6Iwccvm5/mLXdVMX8vNPNamvf3/8qf/3iQ69C4fFNfy75L/i/ZrmZKn93/Inh/8AU3Fs/ztux9w9ZrBC+afsP9bxby4GeAa7//9D3n93V8w/UkuL7xo8ZfVJVgLqx+/JTZ6mdd/8gG/vJaH9bVymipf4OlH9mKIiIiIiHx6j9em7PiHvM+zWH+48uGnn30By7Nl0W8+YuDKP1JUUc3Br61Q6vRhlNen/4im79bx33d9laftMV7/+48BuPqTK3xv9Lf8q+2v8F93/SlWcoK/Ov9Trmae+rvYuwzwFVq++x2+/6/z+eDvfsjgRw/0akVEREREHrrHa4XiV3P8KmcLWxdf9T+8xXf6f377z7kW3/+P5RQB8FteKP0G2830qsVVlvsCO6u/mt7IvbWE4Jd/zOtX54B5rrz7AUWV/5Yacwvwef6y+mN++YM5PgC2ADxjsa/Sy3PAc39cwp+MXuJXV4FnAXJ4khyefLzeHRERERHZgB6vKeszeTxz/UP+6RNulx6Zf0ZX49fTP//T/+E/XV78hDwKn89d/Xy5n+eLiz4V6umncjI/XeWD2TzMLy5a7Xi2mIO70j++D+B5ni8uHFweHraw9ektbF1lc7iIiIiIyGfF41Xy9OyzfJFZfvLz+du/27yF57bm8dzWPLZ88ls+XvIEY+lqxnKbc3hyxQPX+d0aXXkyJ+cuR3PZ+uyWu7ctIiIiIvIZ8HgFiqe+xM6vGvx49MdMXVt27NpHDLz7wQNqaCsvPDOH/eGi4PLRT/kvp97i7z65l+f/AdbXXuTTfduFiIiIiMjD93gFCjZjVX6DPyfGX/3NWwxOOkzFPyL2Dz/l9NnLxDwv8MwDaedZtv/ZF4iNvs2V9/8fv4w7nL/yY6ZdLyz6lKe7+S2/Sab45T2FDxERERGR9fP4FdW4vOz/D69g/u9xfvSjHzJwFV74w+f54/Jv8d/+xccMXvyILWufZU3Pfe1lvv/JD3l96BL/M5nDcy9aNH+rmK2stLl7uY94+wcTFH35yxRpH4WIiIiIfIZtunnz5s1H0dD169eZnp7mpZdeyvocox/+mj960niAvRIRERERWV+/+F2Kyuc/l/Xz33vvPQoLC8m56x7dh+cxK3kSEREREZEHSYFCRERERESypkAhIiIiIiJZU6AQEREREZGsKVCIiIiIiEjWFChERERERCRrChQiIiIiIpI1BQoREREREcmaAoWIiIiIiGRNgUJERERERLKmQCEiIiIiIllToBARERERkawpUIiIiIiISNYUKEREREREJGsKFCIiIiIikjUFChERERERyZoChYiIiIiIZE2BQkREREREsrahAsUmbnKDTevdDRERERGRB+L6Tdi83p34lDZUoHg6J4e569fWuxsiIiIiIg9E8sZ1nsrZUFPyO2yo3v/LZ55m7sY1fn3jOtdvrndvRERERESyc/0m/PrGdeZuXOMrW59e7+58KhtqheXpJzfx9fzP8dOrv+Gfr6XQWoWIiIiIbESbgdycJ/h6/ufYsnljl/RvqEABsGXzJr7+rGu9uyEiIiIiImywkicREREREflsUaAQEREREZGsKVCIiIiIiEjWFChERERERCRrChQiIiIiIpI1BQoREREREcmaAoWIiIiIiGRNgUJERERERLKmQCEiIiIiIllToBARERERkaz9f9/YNVosVRL8AAAAAElFTkSuQmCC"},5542:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/inspectelement-8512c29a6c2d3686ba61e42eed565282.png"},7974:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/morexss-6fa76d1ffda385e2206ea624133a6c80.png"},7056:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/xssdemo-f85a3a9ea41937fdaadda9f58c31a17b.png"}}]);