(this["webpackJsonptest-koji"]=this["webpackJsonptest-koji"]||[]).push([[0],{54:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(28),r=c.n(s),i=c(9),j=c(11),l=c.n(j),o=c(13),u=c(8),b=c(29),h=c.n(b).a.create({baseURL:"https://jsonplaceholder.typicode.com/",withCredentials:!0});function O(e){if(e.response)throw e.response.data;throw e}var d=function(e){return h.get(e).then((function(e){return e.data})).catch(O)},p=function(e){return h.get(e).then((function(e){return e.data})).catch(O)},x=c(14),f=(c(54),c(1)),m=function(e){var t=e.title,c=(e.body,e.id);e.userId;return Object(f.jsxs)("li",{className:"article-item",children:[Object(f.jsx)("h2",{className:"article-item_title",children:t}),Object(f.jsxs)(i.b,{to:"article/".concat(c),className:"article-item_link",children:[Object(f.jsx)("i",{className:"fas fa-chevron-right"}),Object(f.jsx)("span",{children:"More"})]})]})},v=(c(61),function(e){var t=e.articles;return Object(f.jsx)("ul",{className:"list-articles",children:t.map((function(e,t){return Object(f.jsx)(m,Object(x.a)({},e),t)}))})}),g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(u.a)(s,2),i=r[0],j=r[1],b=Object(a.useState)(!1),h=Object(u.a)(b,2),O=h[0],p=h[1],x=Object(a.useState)({}),m=Object(u.a)(x,2),g=m[0],N=m[1],k=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/posts");case 3:(t=e.sent)&&(n(t),j(!1)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),p(!0),N({msg:"Sorry, something wrong, please try it again later",data:e.t0.data}),j(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k()}),[]),Object(f.jsx)("div",{className:"page home",children:i?Object(f.jsx)("p",{children:"Loading..."}):Object(f.jsx)(f.Fragment,{children:O?Object(f.jsx)("p",{children:g.msg}):Object(f.jsx)(v,{articles:c})})})},N=(c(62),function(e){var t=e.title,c=e.body,a=(e.id,e.userId);return Object(f.jsxs)("div",{className:"article",children:[Object(f.jsx)("h1",{className:"article_title",children:t}),Object(f.jsx)("p",{className:"article_content",children:c}),Object(f.jsxs)("p",{className:"article_author",children:["Author: user",a]})]})}),k=function(e){var t=e.match.params.id,c=Object(a.useState)({}),n=Object(u.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)(!0),b=Object(u.a)(j,2),h=b[0],O=b[1],d=Object(a.useState)(!1),m=Object(u.a)(d,2),v=m[0],g=m[1],k=Object(a.useState)({}),w=Object(u.a)(k,2),S=w[0],y=w[1],_=function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("/posts/".concat(t));case 3:(c=e.sent)&&(console.log(c),r(c),g(!1),O(!1)),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),y({msg:"Sorry, something wrong, please try it again later",data:e.t0.data}),g(!0),O(!1);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){_()}),[]),console.log(t),Object(f.jsx)("div",{className:"page single-article",children:h?Object(f.jsx)("p",{children:"Loading..."}):Object(f.jsxs)(f.Fragment,{children:[v?Object(f.jsx)("p",{children:S.msg}):Object(f.jsx)(N,Object(x.a)({},s)),Object(f.jsxs)(i.b,{to:"/",className:"back-link",children:[Object(f.jsx)("i",{className:"fas fa-chevron-right"}),Object(f.jsx)("span",{children:"Back"})]})]})})},w=(c(63),function(){return Object(f.jsx)("nav",{className:"navbar",children:Object(f.jsx)(i.b,{to:"/",className:"nav-link",children:Object(f.jsx)("i",{className:"fas fa-home"})})})}),S=c(2);c(64);var y=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(w,{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(S.c,{children:[Object(f.jsx)(S.a,{exact:!0,path:"/",component:g}),Object(f.jsx)(S.a,{exact:!0,path:"/article/:id",component:k})]})})]})};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(y,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c524c4c2.chunk.js.map