import{j as e}from"./app-CeuI7o1v.js";import{P as n}from"./PageNav-DxT5GKtL.js";function j({paginated:s,margin:r="mt-3",tableStyle:l,headerStyle:a="card-header",headers:t,headersCount:c,body:i}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`table-responsive ${r}`,children:e.jsxs("table",{className:`datatable-table text-center ${l}`,children:[e.jsx("thead",{children:e.jsx("tr",{className:a,children:t})}),e.jsx("tbody",{children:s.data==""?e.jsx("tr",{children:e.jsx("td",{colSpan:c,children:"Empty"})}):i})]})}),e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsxs("div",{children:["Page: ",s.current_page]}),e.jsx("div",{className:"flex flex-row",children:e.jsx(n,{links:s.links})})]})]})}export{j as T};