_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{DPtJ:function(e,r,t){"use strict";t.r(r);var o=t("nKUr"),n=t("U5My"),i=t("q1tI"),c=t("h1kF"),a=t("RW2Z"),s=t("X13+"),d=t("33Fu"),l=t("rePB"),p=t("Ff2n"),b=t("Lnxd");function x(e){return Object(b.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}var j=t("nkKJ"),u=t("vOnD"),h=u.c.div.withConfig({displayName:"styles__Container",componentId:"sc-30j8md-0"})(["position:relative;span{width:160px;background:#ff9000;padding:8px;border-radius:4px;font-size:14px;font-weight:500;opacity:0;transition:opacity 0.4s;visibility:hidden;position:absolute;bottom:calc(100% + 12px);left:50%;transform:translateX(-50%);color:#312e38;&::before{content:'';border-style:solid;border-color:#ff9000 transparent;border-width:6px 6px 0 6px;bottom:20px;top:100%;position:absolute;left:50%;transform:translateX(-50%);}}&:hover span{opacity:1;visibility:visible;}"]),m=function(e){var r=e.title,t=e.className,n=e.children;return Object(o.jsxs)(h,{className:t,children:[n,Object(o.jsx)("span",{children:r})]})},f=u.c.div.withConfig({displayName:"styles__Container",componentId:"sc-1f97oj9-0"})(["background:#fff;width:100%;display:flex;align-items:center;border-radius:15px;padding:2px;border:2px solid var(--color-text-complement);color:var(--color-text-complement);& + div{margin-top:8px;}"," "," "," input{flex:1;background:transparent;border:0;color:#000;&::placeholder{color:var(--color-text-complement);}& + input{margin-top:8px;}}svg{margin-right:16px;width:20px;}"],(function(e){return e.isErrored&&Object(u.b)(["border-color:var(--color-red);"])}),(function(e){return e.isFocused&&Object(u.b)(["color:var(--color-primary);border-color:var(--color-primary);"])}),(function(e){return e.isField&&Object(u.b)([""])})),O=Object(u.c)(m).withConfig({displayName:"styles__Error",componentId:"sc-1f97oj9-1"})(["height:20px;margin-left:16px;svg{margin:0;}span{background:var(--color-red);color:var(--color-text-in-primary);&::before{border-color:var(--color-red) transparent;}}"]);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){Object(l.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y,w=function(e){var r=e.name,t=e.icon,n=Object(p.a)(e,["name","icon"]),c=Object(i.useRef)(null),a=Object(i.useState)(!1),s=a[0],d=a[1],l=Object(i.useState)(!1),b=l[0],u=l[1],h=Object(j.c)(r),m=h.fieldName,g=h.defaultValue,y=h.error,w=h.registerField,_=Object(i.useCallback)((function(){d(!0)}),[]),C=Object(i.useCallback)((function(){var e;d(!1),u(!(null===(e=c.current)||void 0===e||!e.value))}),[]);return Object(i.useEffect)((function(){w({name:m,ref:c.current,path:"value"})}),[m,w]),Object(o.jsxs)(f,{isErrored:!!y,isFocused:s,isField:b,"data-testid":"input-container",children:[t&&Object(o.jsx)(t,{size:28}),Object(o.jsx)("input",v({onFocus:_,onBlur:C,defaultValue:g,ref:c},n)),y&&Object(o.jsx)(O,{title:y,children:Object(o.jsx)(x,{color:"#c53030",size:20})})]})},_=t("iwHr"),C=t("ZgUW"),k=u.c.header.withConfig({displayName:"styles__Container",componentId:"sc-5ws0aa-0"})(["display:flex;justify-content:space-between;max-width:1080px;border-bottom:1.5px solid var(--color-text-complement);padding:8px 32px;margin:0 auto 10px auto;form{width:350px;}> div{display:flex;justify-content:space-between;}"]),I=u.c.header.withConfig({displayName:"styles__ContainerMobile",componentId:"sc-5ws0aa-1"})(["display:flex;justify-content:space-between;max-width:1080px;width:100%;height:60px;position:fixed;bottom:0;background-color:var(--color-background);padding:8px 32px;button{svg{width:35px;height:35px;}}"]),T=function(){var e=Object(i.useRef)(null);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(k,{children:[Object(o.jsx)(C.a,{}),Object(o.jsx)(n.a,{onSubmit:function(){console.log("TEste")},ref:e,children:Object(o.jsx)(w,{id:"search",type:"text",name:"search",placeholder:"PESQUISAR",icon:a.c})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(_.a,{icon:c.a}),Object(o.jsx)(_.a,{icon:a.b}),Object(o.jsx)(_.a,{icon:s.b}),Object(o.jsx)(_.a,{icon:s.a})]})]}),Object(o.jsxs)(I,{children:[Object(o.jsx)(_.a,{icon:d.a}),Object(o.jsx)(_.a,{icon:a.a}),Object(o.jsx)(_.a,{icon:d.b}),Object(o.jsx)(_.a,{icon:a.b}),Object(o.jsx)(_.a,{icon:s.b})]})]})},N=t("KCSK"),E=u.c.section.withConfig({displayName:"styles__Container",componentId:"sc-3nrepa-0"})(["background:transparent;border:2px solid var(--color-primary-light);border-radius:15px;margin:0 5px;"]),F=function(e){var r=e.children;return Object(o.jsx)(E,{children:r})},A=u.c.section.withConfig({displayName:"styles__Container",componentId:"sc-1oczogb-0"})(["background:var(--color-background);border-radius:12px;margin:-8px;padding:8px;> div{display:flex;align-items:center;> div{width:38px;height:38px;background-color:#edb12a;border-radius:50%;margin-right:5px;}label{color:var(--color-text);font-size:24px;font-weight:700;}}textarea{width:100%;margin-top:8px;border:2px solid var(--color-text-complement);border-radius:15px;resize:none;}"]),P=function(){return Object(o.jsxs)(A,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{}),Object(o.jsx)("label",{htmlFor:"question",children:"QUAL SUA D\xdaVIDA?"})]}),Object(o.jsx)("textarea",{name:"question",id:"question",cols:30,rows:5})]})},S=t("ma3e"),B=u.c.div.withConfig({displayName:"styles__Container",componentId:"sc-13cg5u7-0"})(["background:var(--color-background);border-radius:12px;margin:8px 8px 28px 8px;box-shadow:0px 13px 81px -7px rgba(0,0,0,0.15);> div:nth-child(1){background:linear-gradient(to right,var(--color-primary),#9a84b8 112%);margin:0;padding:10px;border-radius:12px 12px 0 0;color:var(--color-text-in-primary);font-weight:700;}"]),D=u.c.div.withConfig({displayName:"styles__Content",componentId:"sc-13cg5u7-1"})(["padding:15px 15px 10px 15px;> div:last-child{display:flex;justify-content:space-between;margin-top:16px;border-top:1px solid var(--color-primary-light);padding-top:10px;div{display:flex;align-items:center;color:var(--color-text-complement);svg{width:20px;height:20px;}span{margin-left:3px;}}button{background:transparent;padding:5px 20px;border-radius:15px;border:1px solid var(--color-primary);color:var(--color-primary);transition:background-color 0.2s linear;}button:hover{background:var(--color-primary);color:var(--color-text-in-primary);}}"]),R=u.c.div.withConfig({displayName:"styles__Header",componentId:"sc-13cg5u7-2"})(["display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;> div{display:flex;align-items:center;> div{display:flex;flex-direction:column;margin-left:15px;span:nth-child(1){font-weight:700;font-size:18px;}span:nth-child(2){color:var(--color-text-complement);font-size:14px;}}}img{width:45px;height:45px;background-color:#af579d;border-radius:50%;border:none;}> span{color:var(--color-text-complement);}"]),U=function(){return Object(o.jsxs)(B,{children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{children:"# AREA INTERESSE + #HIST\xd3RIA"})}),Object(o.jsxs)(D,{children:[Object(o.jsxs)(R,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"",alt:""}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Arielle Tsunoda"}),Object(o.jsx)("span",{children:"@arielleft"})]})]}),Object(o.jsx)("span",{children:"h\xe1 5 minutos"})]}),Object(o.jsx)("span",{children:"O que \xe9 o 'genoc\xeddio branco' que a Stormfront fala no \xfaltimo ep de The Boys?"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(S.a,{}),Object(o.jsx)("span",{children:"2"})]}),Object(o.jsx)("button",{type:"button",children:"Responder"})]})]})]})},L=u.c.section.withConfig({displayName:"styles__Container",componentId:"sc-59cf0j-0"})(["background:transparent;border:24px solid var(--color-primary-light);",""],(function(e){switch(e.border){case y.TOP:return Object(u.b)(["border-radius:15px 15px 0 0;"]);case y.BOTTOM:return Object(u.b)(["border-radius:0 0 15px 15px;"]);case y.FULL:return Object(u.b)(["border-radius:15px;"]);default:return Object(u.b)(["border-radius:0;"])}}));!function(e){e[e.TOP=0]="TOP",e[e.BOTTOM=1]="BOTTOM",e[e.FULL=2]="FULL"}(y||(y={}));var z=function(e){var r=e.border,t=e.children;return Object(o.jsx)(L,{border:r,children:t})},M=u.c.main.withConfig({displayName:"feed__Container",componentId:"pzxzn2-0"})(["max-width:1080px;margin:0 auto;> div{display:flex;justify-content:space-evenly;> div:nth-child(1){width:75%;}> div:nth-child(2){width:20%;}}"]),q=[{name:"HIST\xd3RIA",color:"#9B80BA"},{name:"INGL\xcaS",color:"#EA524F"},{name:"QU\xcdMICA",color:"#588BB4"},{name:"GEOGRAFIA",color:"#B3843D"},{name:"MATEM\xc1TICA",color:"#5F559F"},{name:"PORTUGU\xcaS",color:"#B8D423"},{name:"CI\xcaNCIAS",color:"#B3413D"},{name:"F\xcdSICA",color:"#333333"},{name:"ARTES",color:"#DB7D29"}];r.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(T,{}),Object(o.jsx)(M,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(z,{border:y.TOP,children:Object(o.jsx)(P,{})}),Object(o.jsx)(N.a,{data:q}),Object(o.jsxs)(z,{border:y.BOTTOM,children:[Object(o.jsx)(U,{}),Object(o.jsx)(U,{}),Object(o.jsx)(U,{})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{children:Object(o.jsx)("h1",{children:"Teste"})})})]})})]})}},Vbef:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feed",function(){return t("DPtJ")}])}},[["Vbef",0,1,4,3,10,7,9,8,2,6]]]);