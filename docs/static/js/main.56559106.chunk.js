(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),i=n.n(r),c=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setCategorias,n=Object(a.useState)(""),r=Object(c.a)(n,2),i=r[0],u=r[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}})})};d.protoTypes={setCategorias:o.a.func.isRequired};var m=n(6),l=n.n(m),p=n(9),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("entra"),n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(t),"&api_key=LgVyn89xTyq56Ix9pmm96u4JSjN6bHld"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,i=r.data,c=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return Object(j.jsxs)("div",{className:"card animate__animated animate__backInLeft",children:[Object(j.jsx)("img",{src:e.img.url,alt:e.img.title}),Object(j.jsx)("p",{children:e.img.title})]})},g=function(e){var t=e.categoria,n=function(e){var t=Object(a.useState)({images:[],loading:!0}),n=Object(c.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){return i({images:e,loading:!1})}))}),[e]),r}(t),r=n.images,i=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:t}),i&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(j.jsx)("div",{className:"card-grid animate__animated animate__backInLeft",children:r.map((function(e){return Object(j.jsx)(f,{img:e},e.id)}))})]})},h=function(){var e=Object(a.useState)(["one punch"]),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategorias:r}),Object(j.jsx)("hr",{}),n.map((function(e,t){return Object(j.jsx)(g,{categoria:e},e)}))]})})};n(19);i.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.56559106.chunk.js.map