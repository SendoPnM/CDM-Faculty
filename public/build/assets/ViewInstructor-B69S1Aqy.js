import{r,j as e,Y as p,a as g}from"./app-CeuI7o1v.js";import{C as y}from"./CompactHeader-BU2EBQ79.js";import{S as s}from"./SingleCardWithHeader-BMhZjqrZ.js";import{T as o}from"./Table-I2q6XCTQ.js";import{L as b}from"./Layout-DdaQygP1.js";import"./PageNav-DxT5GKtL.js";import"./Dropdown-D43rT-fp.js";import"./transition-lxKP8sxk.js";import"./PageHeader-e0GRXsHZ.js";import"./MegaphoneIcon-BRvYTP08.js";import"./close-provider-Chx4oZVL.js";import"./ChevronDownIcon-Bsu68qhy.js";function f({title:n,titleId:d,...a},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":d},a),n?r.createElement("title",{id:d},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"}))}const k=r.forwardRef(f);function v({title:n,titleId:d,...a},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":d},a),n?r.createElement("title",{id:d},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const C=r.forwardRef(v);function V({auth:n,instructor:d,reports:a,subjects:i,files:l}){return e.jsxs(b,{user:n.user,isAdmin:n.isAdmin,children:[e.jsx(p,{title:d.lastname}),e.jsxs(y,{title:`${d.firstname} ${d.lastname}`,icon:e.jsx(C,{className:"w-6 h-6"}),children:[e.jsx(s,{header:"Accomplishment Reports",body:e.jsx(o,{paginated:a,headersCount:8,headerStyle:"border-b-2",headers:e.jsxs(e.Fragment,{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Start"}),e.jsx("th",{children:"End"}),e.jsx("th",{children:"Activity"}),e.jsx("th",{children:"Designation"}),e.jsx("th",{children:"Venue"}),e.jsx("th",{children:"Time Spent"}),e.jsx("th",{children:"Report"})]}),body:a.data.map(t=>{let h=new Date(`${t.date} ${t.start}`),c=new Date(`${t.date} ${t.end}`),m=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",weekday:"short",hour:"2-digit",minute:"2-digit"}).format(h),x=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",weekday:"short",hour:"2-digit",minute:"2-digit"}).format(c),[j,u,w]=m.split(", ");return x.split(", "),console.log(j),console.log(u),console.log(w),e.jsxs("tr",{children:[e.jsx("td",{children:t.date}),e.jsx("td",{children:t.start}),e.jsx("td",{children:t.end}),e.jsx("td",{children:t.activity}),e.jsx("td",{children:t.designation}),e.jsx("td",{children:t.venue}),e.jsx("td",{children:t.timespent}),e.jsx("td",{children:t.report})]},t.user_id)})})}),e.jsx(s,{header:"Subjects",body:e.jsx(o,{paginated:i,headersCount:1,headerStyle:"border-b-2",headers:e.jsx("th",{children:"CODE"}),body:i.data.map(t=>e.jsx("tr",{children:e.jsx("td",{className:"!p-0",children:e.jsx(g,{className:"nav-link w-full h-full p-3",href:route("schedules.view",t.id),children:t.code})})},t.id))})}),e.jsx(s,{header:"Files",body:e.jsx(o,{paginated:l,headersCount:4,headerStyle:"border-b-2",headers:e.jsxs(e.Fragment,{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Size"}),e.jsx("th",{children:"Uploaded"})]}),body:l.data.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.name}),e.jsx("td",{children:t.type}),e.jsx("td",{children:t.size}),e.jsx("td",{children:t.created_at}),e.jsx("button",{onClick:()=>window.open(route("admin.download",t.id)),as:"button",children:e.jsx(k,{className:"w-4 h-4"})})]},t.id))})})]})]})}export{V as default};