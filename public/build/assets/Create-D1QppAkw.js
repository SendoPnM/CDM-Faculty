import{W as h,q as j,j as e}from"./app-CeuI7o1v.js";import{S as u}from"./SingleCardWithHeader-BMhZjqrZ.js";import{D as i}from"./Dropdown-D43rT-fp.js";import{I as o}from"./InputError-D2vGAu5u.js";import{I as n}from"./InputLabel-CHSAiamn.js";import{P as v}from"./PrimaryButton-CfgySyiK.js";import{T as l}from"./TextInput-ieMSKvMS.js";import{F as g}from"./ChevronDownIcon-Bsu68qhy.js";import"./transition-lxKP8sxk.js";function D(){const{data:a,setData:s,post:d,patch:p,errors:t,processing:c,reset:m}=h({subject:j().props.subject,start:"",end:"",day:"Mon",room:"204",yrsec:"1A",type:"Lec"}),x=r=>{r.preventDefault(),d(route("schedules.store"),{onSuccess:()=>m()}),console.log(t)};return e.jsx(u,{header:"Create Schedule",body:e.jsx("div",{className:"mt-3",children:e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-row gap-3",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{value:"Day"}),e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsxs("div",{className:"form-control !flex !flex-row !justify-between items-center gap-3 !pr-2",children:[e.jsx("div",{className:"",children:a.day}),e.jsx(g,{className:"w-5 h-5"})]})}),e.jsxs(i.Content,{contentClasses:"flex flex-col gap-1 text-center cursor-pointer",margin:"mt-0",width:"w-full",children:[e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Mon")},children:" Mon"}),e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Tue")},children:" Tue"}),e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Wed")},children:" Wed"}),e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Thu")},children:" Thu"}),e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Fri")},children:" Fri"}),e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Sat")},children:" Sat"}),e.jsx("div",{className:"hover:bg-green-50",onClick:()=>{s("day","Sun")},children:" Sun"})]})]})]}),e.jsxs("div",{children:[e.jsx(n,{value:"Year and Setion"}),e.jsx(l,{id:"yrsec",type:"text",name:"yrsec",value:a.yrsec,placeholder:"1A",onChange:r=>{s("yrsec",r.target.value)}}),e.jsx(o,{message:t.yrsec})]}),e.jsxs("div",{children:[e.jsx(n,{value:"Room"}),e.jsx(l,{id:"room",type:"text",name:"room",value:a.room,placeholder:"1A",onChange:r=>{s("room",r.target.value)}}),e.jsx(o,{message:t.room})]})]}),e.jsxs("div",{className:"flex flex-row gap-3",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{value:"Start"}),e.jsx(l,{id:"start",type:"time",name:"start",value:a.start,onChange:r=>{s("start",r.target.value)}}),e.jsx(o,{message:t.start})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{value:"End"}),e.jsx(l,{id:"end",type:"time",name:"end",value:a.end,onChange:r=>{s("end",r.target.value)}}),e.jsx(o,{message:t.end})]})]})]}),e.jsx(v,{disabled:c,children:"Create"})]})})})}export{D as default};