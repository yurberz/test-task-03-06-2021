(this["webpackJsonpcovid-statistic"]=this["webpackJsonpcovid-statistic"]||[]).push([[0],{55:function(n,t,e){},56:function(n,t,e){"use strict";e.r(t);var i=e(21),r=e.n(i),o=e(7),a=e.n(o),s=e(22),d=e(3),l=e(1),c=e(8),p=e.n(c);p.a.defaults.baseURL="https://api.covid19api.com";var x,h=e.p+"static/media/logo.72607632.png",b=e(0),f=function(n){var t=n.title;return Object(b.jsxs)("div",{className:"logoWrapper",children:[Object(b.jsx)("img",{src:h,width:200,height:200,alt:"logo"}),Object(b.jsx)("h1",{className:"title",children:t})]})},u=e.p+"static/media/sprite.9d461f4b.svg",m=function(n){var t=n.value,e=n.onChange;return Object(b.jsxs)("div",{className:"inputContainer",children:[Object(b.jsx)("input",{className:"input",type:"text",placeholder:"Search country...",value:t,onChange:e}),Object(b.jsx)("svg",{className:"svg search",children:Object(b.jsx)("use",{href:u+"#search"})})]})},g=e(28),j={key:"",direction:""},O=function(n){var t=Object(l.useState)(j),e=Object(d.a)(t,2),i=e[0],r=e[1];return{newArr:Object(l.useMemo)((function(){var t=Object(g.a)(n);return null!==i&&t.sort((function(n,t){return n[i.key]<t[i.key]?"ascending"===i.direction?-1:1:n[i.key]>t[i.key]?"ascending"===i.direction?1:-1:0})),t}),[n,i]),sortConfig:i,requestSort:function(n){var t="ascending";i&&i.key===n&&"ascending"===i.direction&&(t="descending"),r({key:n,direction:t})}}},v=function(n){var t=n.className,e=void 0===t?"":t,i=n.title,r=void 0===i?"":i,o=n.onClick;return Object(b.jsx)("button",{className:e?"btn "+e:"btn",onClick:o,type:"button",children:r})},w=function(n){var t=n.children,e=n.closeModal,i=function(n){"Escape"===n.code&&e()};return Object(l.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]),Object(b.jsx)("div",{className:"modalContainer",onClick:function(n){"wrapper"===n.target.dataset.name&&e()},"data-name":"wrapper",children:Object(b.jsx)("div",{className:"modal",children:t})})},y=function(n){var t=n.data,e=n.closeModal,i=t.Country,r=t.TotalConfirmed,o=t.TotalDeaths,a=t.TotalRecovered;return Object(b.jsxs)("div",{className:"contentContainer",children:[Object(b.jsx)("p",{className:"title",children:i}),Object(b.jsxs)("ul",{className:"list",children:[Object(b.jsxs)("li",{className:"list-item",children:[Object(b.jsx)("svg",{className:"svg heart list-item__flex",children:Object(b.jsx)("use",{href:u+"#heart"})}),Object(b.jsx)("p",{className:"text list-item__flex",children:"Total Confirmed"}),Object(b.jsx)("p",{className:"text list-item__flex",children:r})]}),Object(b.jsxs)("li",{className:"list-item",children:[Object(b.jsx)("svg",{className:"svg skull list-item__flex",children:Object(b.jsx)("use",{href:u+"#skull"})}),Object(b.jsx)("p",{className:"text list-item__flex",children:"Total Deaths"}),Object(b.jsx)("p",{className:"text list-item__flex",children:o})]}),Object(b.jsxs)("li",{className:"list-item",children:[Object(b.jsx)("svg",{className:"svg health list-item__flex",children:Object(b.jsx)("use",{href:u+"#health"})}),Object(b.jsx)("p",{className:"text list-item__flex",children:"Total Recovered"}),Object(b.jsx)("p",{className:"text list-item__flex",children:a})]})]}),Object(b.jsx)(v,{className:"modalBtn",title:"OK",onClick:e})]})},C={ID:"",Country:"",TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0},k=function(n){var t=n.data,e=Object(l.useState)(!1),i=Object(d.a)(e,2),r=i[0],o=i[1],a=Object(l.useState)(C),s=Object(d.a)(a,2),c=s[0],p=s[1],x=O(t),h=x.newArr,f=x.sortConfig,u=x.requestSort,m=function(n){if(f)return f.key===n?f.direction:""},g=function(n){var t=n.currentTarget.id;p(h.find((function(n){return n.ID===t}))),o(!0)},j=function(){o(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"countries-table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u2116"}),Object(b.jsx)("th",{children:Object(b.jsx)(v,{className:m("Country"),title:"Country",onClick:function(){return u("Country")}})}),Object(b.jsx)("th",{children:Object(b.jsx)(v,{className:m("TotalConfirmed"),title:"Total Confirmed",onClick:function(){return u("TotalConfirmed")}})})]})}),Object(b.jsx)("tbody",{children:null===h||void 0===h?void 0:h.map((function(n,t){return Object(b.jsxs)("tr",{id:n.ID,onClick:g,children:[Object(b.jsx)("td",{children:t+1}),Object(b.jsx)("td",{children:null===n||void 0===n?void 0:n.Country}),Object(b.jsx)("td",{children:null===n||void 0===n?void 0:n.TotalConfirmed})]},n.ID)}))})]}),r&&Object(b.jsx)(w,{closeModal:j,children:Object(b.jsx)(y,{data:c,closeModal:j})})]})},N=function(){var n=Object(l.useState)([]),t=Object(d.a)(n,2),e=t[0],i=t[1],r=Object(l.useState)(""),o=Object(d.a)(r,2),c=o[0],x=o[1],h=function(){var n=Object(s.a)(a.a.mark((function n(){var t,e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.get("/summary").then((function(n){return null===n||void 0===n?void 0:n.data})).catch((function(n){throw new Error(n)}));case 3:t=n.sent,e=t.Countries,i(e),n.next=12;break;case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),u=Object(l.useMemo)((function(){var n=c.toLowerCase();return e.filter((function(t){return t.Country.toLowerCase().includes(n)}))}),[e,c]);return Object(l.useEffect)((function(){h()}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(f,{title:"statistic"}),Object(b.jsx)(m,{onChange:function(n){x(n.target.value)},value:c})]}),Object(b.jsx)("main",{children:Object(b.jsx)(k,{data:u})})]})},_=e(23),z=e(24),B=Object(z.a)(x||(x=Object(_.a)(["\n@media screen and (min-width: 768px) {\n    .container {\n        width: 768px;\n        padding-left: 45px;\n        padding-right: 45px;\n        margin-left: auto;\n        margin-right: auto;\n\n    .svg {\n    width: 20px;\n    height: 20px;\n    }\n\n    .btn {\n    border: transparent;\n    font-family: Lato-Bold;\n    font-size: 20px;\n    color: #ffffff;\n    }\n\n    .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    .logoWrapper {\n    display: flex;\n    align-items: center;\n\n    .title {\n    font-family: Lato-Bold;\n    font-size: 42px;\n    text-transform: uppercase;\n    }\n  }\n\n  .inputContainer {\n    position: relative;\n\n    .input {\n    width: 250px;\n    height: 50px;\n    padding: 12px;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n\n    font-family: Lato-Regular;\n    font-size: 18px;\n    color: #B2B2B2;\n    }\n\n     .search {\n     position: absolute;\n     top: 15px;\n     right: 20px;\n    }\n  }\n}\n\n.countries-table {\n  width: 100%;\n  border-spacing: 1px 20px;\n  border-collapse: separate;\n\n  font-family: Lato-Bold;\n  font-size: 24px;\n\nth,\ntd {\n  padding: 20px;\n }\n\n th:not(:first-child) {\n  text-align: start;\n }\n td:first-child {\n  text-align: center;\n }\n\n th:nth-child(1) {\n  width: 5%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n }\n th:nth-child(2) {\n  width: 65%;\n }\n th:nth-child(3) {\n  width: 30%;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n }\n\n td:nth-child(1) {\n  border-right: 1px solid #b2b2b2;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n }\n td:nth-child(3) {\n  border-left: 1px solid #b2b2b2;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n }\n\n thead tr {\n  background: #2196f3;\n  border-radius: 20px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n }\n tbody tr {\n  border-radius: 20px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n\n  cursor: pointer;\n }\n tbody tr:hover {\n   background-color: rgba(0, 0, 0, 0.25);\n }\n\n button {\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #30a0f9;\n  border-radius: 4px;\n }\n button.ascending::after {\n  content: '\u2b06\ufe0f';\n  display: inline-block;\n  margin-left: 10px;\n }\n button.descending::after {\n  content: '\u2b07\ufe0f';\n  display: inline-block;\n  margin-left: 10px;\n }\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1200;\n\n  .modal {\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     transform: translate(-50%, -50%);\n     display: flex;\n     justify-content: center;\n     align-items: center;\n     border-radius: 20px;\n     box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);\n     background-color: #ffffff;\n  }\n}\n\n.contentContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n\n  .title {\n    margin-bottom: 30px;\n    font-family: Lato-Bold;\n    font-size: 38px;\n  }\n\n  .modalBtn {\n    padding: 10px 50px;\n    background: #2196F3;\n    border-radius: 20px;\n  }\n\n  .list-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    .list-item__flex:nth-child(1) {\n    margin-right: 20px;\n    }\n    .list-item__flex:nth-child(2) {\n    flex: 2;\n    margin-right: 100px;\n    }\n\n    .text {\n    font-size: 20px;\n    color: #666666;\n    }\n  }\n\n  .list-item:not(:last-child){\n    margin-bottom: 30px;\n  }\n  .list-item:last-child {\n    margin-bottom: 20px;\n   }\n  }\n }\n}\n@media screen and (min-width: 1280px) {\n.container {\n        width: 1280px;\n        padding-left: 60px;\n        padding-right: 60px;\n\n    .svg {\n    width: 30px;\n    height: 30px;\n  }\n\n  .btn {\n  font-size: 24px;\n  }\n\n    .header {\n      .logoWrapper {\n         .title {\n        font-size: 72px;\n      }\n    }\n \n  .inputContainer {\n    .input {\n    width: 600px;\n    height: 80px;\n    padding: 32px;\n    \n    font-size: 48px;\n    }\n\n     .search {\n     position: absolute;\n     top: 30px;\n     right: 20px;\n    }\n  }\n}\n\n.contentContainer {\n  .title {\n    margin-bottom: 40px;\n    font-size: 48px;\n  }\n\n  .modalBtn {\n    padding: 10px 70px;\n  }\n\n  .list-item {\n    .list-item__flex:nth-child(1) {\n    margin-right: 30px;\n    }\n    .list-item__flex:nth-child(2) {\n    flex: 2;\n    margin-right: 250px;\n    }\n\n    .text {\n    font-size: 24px;\n    }\n  }\n\n  .list-item:not(:last-child){\n    margin-bottom: 50px;\n  }\n  .list-item:last-child {\n    margin-bottom: 40px;\n  }\n }\n}\n}\n@media screen and (min-width: 1300px) {\n    .container {\n        width: 100%;\n    }\n}\n@media screen and (max-width: 767px) {\n  .container {\n    overflow: hidden;\n    width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n\n  .svg {\n    width: 15px;\n    height: 15px;\n  }\n\n  .btn {\n  border: transparent;\n  font-family: Lato-Bold;\n  font-size: 15px;\n  color: #ffffff;\n  }\n\n  .header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .logoWrapper {\n       display: flex;\n       flex-direction: column;\n       align-items: center;\n\n       .title {\n         margin-bottom: 15px;\n         font-family: Lato-Bold;\n         font-size: 42px;\n         text-transform: uppercase;\n    }\n  }\n\n  .inputContainer {\n    position: relative;\n    width: 100%;\n\n    .input {\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n\n    font-family: Lato-Regular;\n    font-size: 16px;\n    color: #B2B2B2;\n    }\n\n     .search {\n     position: absolute;\n     top: 15px;\n     right: 20px;\n    }\n  }\n}\n\n.countries-table {\n  width: 100%;\n  border-spacing: 1px 10px;\n  border-collapse: separate;\n\n  font-family: Lato-Bold;\n  font-size: 14px;\n\nth,\ntd {\n  padding: 10px;\n  text-align: center;\n }\n\n th:nth-child(1) {\n  width: 5%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n }\n th:nth-child(2) {\n  width: 65%;\n }\n th:nth-child(3) {\n  width: 30%;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n }\n\n td:nth-child(1) {\n  border-right: 1px solid #b2b2b2;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n }\n td:nth-child(3) {\n  border-left: 1px solid #b2b2b2;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n }\n\n thead tr {\n  background: #2196f3;\n  border-radius: 20px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n }\n tbody tr {\n  border-radius: 20px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n\n  cursor: pointer;\n }\n tbody tr:hover {\n   background-color: rgba(0, 0, 0, 0.25);\n }\n\n button {\n  padding-left: 5px;\n  padding-right: 5px;\n  background: #30a0f9;\n  border-radius: 4px;\n }\n button.ascending::after {\n  content: '\u2b06\ufe0f';\n  display: inline-block;\n  margin-left: 5px;\n }\n button.descending::after {\n  content: '\u2b07\ufe0f';\n  display: inline-block;\n }\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1200;\n\n  .modal {\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     transform: translate(-50%, -50%);\n     display: flex;\n     justify-content: center;\n     align-items: center;\n     border-radius: 20px;\n     box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);\n     background-color: #ffffff;\n  }\n}\n\n.contentContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n\n  .title {\n    margin-bottom: 20px;\n    font-family: Lato-Bold;\n    font-size: 28px;\n  }\n\n  .modalBtn {\n    padding: 5px 35px;\n    background: #2196F3;\n    border-radius: 20px;\n  }\n\n  .list-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    .list-item__flex:nth-child(1) {\n    margin-right: 10px;\n    }\n    .list-item__flex:nth-child(2) {\n    flex: 2;\n    margin-right: 90px;\n    }\n\n    .text {\n    font-size: 16px;\n    color: #666666;\n    }\n  }\n\n  .list-item:not(:last-child){\n    margin-bottom: 20px;\n  }\n  .list-item:last-child {\n    margin-bottom: 10px;\n  }\n  }\n }\n}\n"]))),L=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B,{}),Object(b.jsx)(N,{})]})};e(55);r.a.render(Object(b.jsx)(L,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4fe9c0a6.chunk.js.map