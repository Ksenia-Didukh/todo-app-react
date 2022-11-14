(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);c(23),c(24),c(25);var n=c(0),o=c.n(n),r=c(8),s=c(2),a=c(22),l=c.n(a),i=c(3),d=function(){return Object(i.jsx)(s.a,{})},j=c(4),u=c(7);var b=o.a.createContext({todos:[{id:1,title:"aboba",completed:!1}],setTodos:function(){}}),O=function(e){var t=e.children,c=function(e,t){var c=Object(n.useState)((function(){try{return JSON.parse(localStorage.getItem(e)||"")||t}catch(c){return t}})),o=Object(j.a)(c,2),r=o[0],s=o[1];return[r,function(t){s(t),localStorage.setItem(e,JSON.stringify(t))}]}("todos",[]),o=Object(j.a)(c,2),r=o[0],s=o[1],a=Object(n.useMemo)((function(){return{todos:r,setTodos:s}}),[r]);return Object(i.jsx)(b.Provider,{value:a,children:t})},m=function(e){var t=e.setHasError,c=e.setErrorMessage,o=Object(n.useContext)(b),r=o.todos,s=o.setTodos,a=Object(n.useState)(""),l=Object(j.a)(a,2),d=l[0],O=l[1];return Object(i.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""===d.trim())return t(!0),c("You can't add empty todo"),void setTimeout((function(){return t(!1)}),3e3);var n={id:+new Date,title:d,completed:!1};s([].concat(Object(u.a)(r),[n])),O("")},children:Object(i.jsx)("input",{type:"text","data-cy":"createTodo",className:"new-todo",placeholder:"What needs to be done?",value:d,onChange:function(e){O(e.currentTarget.value)}})})},f=c(11),h=c(14),p=c.n(h),x=function(e){var t=e.errorMessage,c=e.removeError;return Object(i.jsxs)("div",{"data-cy":"ErrorNotification",className:"notification is-danger is-light has-text-weight-normal",children:[Object(i.jsx)("button",{"data-cy":"HideErrorButton",type:"button",className:"delete",onClick:function(){c()}}),t]})},g=function(){var e=Object(n.useContext)(b),t=e.todos,c=e.setTodos,o=Object(s.o)().filter,a=t.filter((function(e){return!e.completed})),l=t.filter((function(e){return e.completed}));return Object(i.jsxs)("footer",{className:"footer",children:[Object(i.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(a.length," items left")}),Object(i.jsxs)("ul",{className:"filters",children:[Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"../",className:p()("completed",{selected:!o}),children:"All"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"../active",className:p()("completed",{selected:"active"===o}),children:"Active"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"../completed",className:p()("completed",{selected:"completed"===o}),children:"Completed"})})]}),l.length>0&&Object(i.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){c(a)},children:"Clear completed"})]})},v=o.a.memo((function(e){var t=e.hasError,c=e.errorMessage,o=e.setHasError,r=Object(n.useContext)(b),a=r.todos,l=r.setTodos,d=Object(n.useState)(-1),O=Object(j.a)(d,2),m=O[0],h=O[1],v=Object(n.useState)(""),N=Object(j.a)(v,2),y=N[0],k=N[1],C=Object(s.o)().filter,E=a.sort((function(e,t){return e.id-t.id}));if(C)switch(C){case"active":E=a.filter((function(e){return!e.completed}));break;case"completed":E=a.filter((function(e){return e.completed}))}var S=Object(n.useCallback)((function(e){var t=a.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{completed:e.target.checked})}));l(t.sort((function(e,t){return e.id-t.id})))}),[a]),T=function(e){var t=a.filter((function(t){return t.id!==e}));l(t)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"main",children:[Object(i.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all","data-cy":"toggleAll",checked:a.every((function(e){return e.completed})),onChange:S}),Object(i.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(i.jsx)("ul",{className:"todo-list","data-cy":"todoList",children:E.map((function(e){return m===e.id?Object(i.jsx)("form",{onSubmit:function(t){!function(e,t){if(e.preventDefault(),""!==y.trim()){var c=Object(f.a)(Object(f.a)({},t),{},{title:y}),n=a.filter((function(e){return e.id!==t.id}));l([].concat(Object(u.a)(n),[c])),h(-1)}else T(t.id)}(t,e)},children:Object(i.jsx)("input",{className:"edit",defaultValue:e.title,placeholder:"Empty TODO will be deleted",onChange:function(e){k(e.currentTarget.value)},onBlur:function(){h(-1)},onKeyUp:function(e){"Escape"===e.key&&h(-1)}})}):Object(i.jsxs)("li",{className:p()({completed:e.completed}),onDoubleClick:function(){h(e.id)},children:[Object(i.jsxs)("div",{className:"view",children:[Object(i.jsx)("input",{type:"checkbox",className:"toggle",id:"toggle-completed",checked:e.completed||void 0,onClick:function(t){!function(e,t){var c=Object(f.a)(Object(f.a)({},t),{},{completed:e.currentTarget.checked}),n=a.filter((function(e){return e.id!==t.id}));l([]),l([].concat(Object(u.a)(n),[c]))}(t,e)}}),Object(i.jsx)("label",{htmlFor:"toggleview",children:e.title}),Object(i.jsx)("button",{type:"button",className:"destroy","data-cy":"deleteTodo",onClick:function(){T(e.id)}})]}),Object(i.jsx)("input",{type:"text",className:"edit"})]},e.id)}))})]}),Object(i.jsx)(g,{}),t&&Object(i.jsx)(x,{errorMessage:c,removeError:function(){o(!1)}})]})})),N=o.a.memo((function(){var e=Object(n.useContext)(b).todos,t=Object(n.useState)(!1),c=Object(j.a)(t,2),o=c[0],r=c[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),l=a[0],d=a[1];return Object(i.jsxs)("div",{className:"todoapp",children:[Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:"todos"}),Object(i.jsx)(m,{setHasError:r,setErrorMessage:d})]}),e.length>0&&Object(i.jsx)(v,{hasError:o,errorMessage:l,setHasError:r})]})}));l.a.render(Object(i.jsx)(O,{children:Object(i.jsx)(r.a,{children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),Object(i.jsxs)(s.b,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(N,{})}),Object(i.jsx)(s.b,{path:":filter",element:Object(i.jsx)(N,{})})]})]})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9a01c7b7.chunk.js.map