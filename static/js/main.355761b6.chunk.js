(this.webpackJsonptask_app=this.webpackJsonptask_app||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(11),i=n.n(a),s=(n(17),n(18),n(10)),o=n(7),u=n(12),l=n(8),j=n(0),d=function(e){var t=e.data,n=Object(c.useState)(t),r=Object(l.a)(n,2),a=r[0],i=r[1],d=Object(c.useState)(""),m=Object(l.a)(d,2),b=m[0],O=m[1],f=Object(c.useState)(!1),h=Object(l.a)(f,2),g=h[0],p=h[1],v=Object(c.useRef)(),I=Object(c.useRef)(),x=function(e,t){var n=v.current;e.target!==I.current&&i((function(e){var c=JSON.parse(JSON.stringify(e));return c[t.colI].items.splice(t.itemI,0,c[n.colI].items.splice(n.itemI,1)[0]),v.current=t,c}))},N=function e(){p(!1),I.current.removeEventListener("dragend",e),v.current=null,I.current=null},S=function(e){var t=v.current;return t.colI===e.colI&&t.itemI===e.itemI?"current item":"item"};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"page-hero",children:[Object(j.jsx)("h1",{children:"TASK APP"}),Object(j.jsxs)("div",{className:"add-item",children:[Object(j.jsx)("input",{type:"text",value:b,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{className:"btn",onClick:function(){b&&(i((function(e){var t,n=Object(u.a)(e),c=n[0],r=n.slice(1);return(t=console).log.apply(t,["rest"].concat(Object(o.a)(r))),console.log("todoData",c),[Object(s.a)(Object(s.a)({},c),{},{items:[b].concat(Object(o.a)(c.items))})].concat(Object(o.a)(r))})),O(""))},children:"ADD TASK"})]})]}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"column",children:a.map((function(e,t){var n=e.title,c=e.items;return Object(j.jsxs)("div",{className:"card",onDragEnter:g&&!c.length?function(e){return x(e,{colI:t,itemI:0})}:null,children:[Object(j.jsx)("h3",{children:n}),c.map((function(e,n){return Object(j.jsx)("div",{draggable:!0,onDragStart:function(e){return function(e,t){v.current=t,I.current=e.target,I.current.addEventListener("dragend",N),setTimeout((function(){p(!0)}),0)}(e,{colI:t,itemI:n})},onDragEnter:g?function(e){return x(e,{colI:t,itemI:n})}:null,className:g?S({colI:t,itemI:n}):"item",children:e},n)}))]},t)}))})})]})},m=[{title:"Todo",items:[]},{title:"In-Progress",items:[]},{title:"Completed",items:[]}];var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(d,{data:m})})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.355761b6.chunk.js.map