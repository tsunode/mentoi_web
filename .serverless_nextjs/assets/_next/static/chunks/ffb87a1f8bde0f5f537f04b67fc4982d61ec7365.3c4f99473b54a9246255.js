(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Ff2n:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}r.d(e,"a",(function(){return n}))},KCSK:function(t,e,r){"use strict";var n=r("nKUr");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r("q1tI"),c=r("IdFE"),u=r("iwHr"),l=r("vOnD"),s=l.c.div.withConfig({displayName:"styles__Container",componentId:"sc-1ulnsdr-0"})(["display:flex;width:100%;margin:10px 0;justify-content:space-between;div{display:flex;width:100%;overflow:hidden;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scroll-behavior:smooth;@media (hover:none),(max-width:500px){overflow-x:scroll;&::-webkit-scrollbar{display:none;}}}"]),f=l.c.button.withConfig({displayName:"styles__ButtonOption",componentId:"sc-1ulnsdr-1"})(["background-color:transparent;width:140px;min-width:140px;padding:5px 10px;margin:0 5px;border:2px solid var(--color-primary);color:var(--color-primary);font-weight:700;&:hover{background:var(--color-primary);color:var(--color-text-in-primary);}"," "," border-radius:10px;white-space:nowrap;scroll-snap-align:start;text-align:center;text-overflow:ellipsis;overflow:hidden;&:nth-child(1){width:160px;min-width:160px;}"],(function(t){var e=t.color;return e&&Object(l.b)(["border-color:",";color:",";&:hover{background:",";}"],e,e,e)}),(function(t){var e=t.color;return t.selected&&Object(l.b)(["border-color:",";background-color:",";color:var(--color-text-in-primary);"],e||Object(l.b)(["var(--color-primary)"]),e||Object(l.b)(["var(--color-primary)"]))}));e.a=function(t){var e=t.data,r=t.arrowVisible,a=void 0===r||r,l=t.children,p=i.Children.count(l),d=Object(i.useRef)(),h=Object(i.useState)([]),b=h[0],y=h[1],v=Object(i.useState)(p),m=v[0],O=v[1],g=Object(i.useState)(!1),j=g[0],w=g[1];function E(t){var e=d.current,r=e.scrollWidth/e.childNodes.length,n="previous"===t?-r:r;d.current.scrollBy(n,0)}function k(t){var e=b.map((function(e,r){return r===t}));y(e)}return Object(i.useEffect)((function(){if(e){var t=e.map((function(){return!1}));y([].concat(o(t),[!0])),O(e.length)}}),[e]),Object(i.useEffect)((function(){var t=d.current;t.scrollWidth>t.offsetWidth&&w(!0)}),[]),Object(n.jsxs)(s,{children:[a&&Object(n.jsx)(u.a,{type:"button",onClick:function(){return E("previous")},icon:c.a,visible:j}),Object(n.jsxs)("div",{ref:d,children:[e&&Object(n.jsx)(f,{selected:b[m],onClick:function(){return k(m)},children:"AREA INTERESSE"}),null===e||void 0===e?void 0:e.map((function(t,e){return Object(n.jsx)(f,{color:t.color,selected:b[e],onClick:function(){return k(e)},children:t.name},t.name)})),!e&&l]}),a&&Object(n.jsx)(u.a,{type:"button",onClick:function(){return E("next")},icon:c.b,visible:j})]})}},Lnxd:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("q1tI"),a=r.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.a.createContext&&a.a.createContext(o),c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function l(t){return t&&t.map((function(t,e){return a.a.createElement(t.tag,c({key:e},t.attr),l(t.child))}))}function s(t){return function(e){return a.a.createElement(f,c({attr:c({},t.attr)},e),l(t.child))}}function f(t){var e=function(e){var r,n=t.attr,o=t.size,i=t.title,l=u(t,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),a.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,l,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&a.a.createElement("title",null,i),t.children)};return void 0!==i?a.a.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},U5My:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("q1tI"),a=r.n(n),o=r("nkKJ"),i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},c=Object(n.forwardRef)((function(t,e){var r=t.initialData,n=void 0===r?{}:r,c=t.children,u=t.onSubmit,l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r}(t,["initialData","children","onSubmit"]);return a.a.createElement(o.b,{ref:e,initialData:n,onSubmit:u},a.a.createElement(o.a.Consumer,null,(function(t){var e=t.handleSubmit;return a.a.createElement("form",i({onSubmit:e},l),c)})))}))},ZgUW:function(t,e,r){"use strict";var n=r("q1tI");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o=n.createElement("g",{"data-name":"Grupo 27"},n.createElement("g",{"data-name":"Grupo 16"},n.createElement("g",{"data-name":"Grupo 15"},n.createElement("path",{"data-name":"Caminho 9",d:"M42.24 24a.555.555 0 01-.55-.55v-6.97c0-1.85-.97-3.53-2.88-3.53-1.88 0-2.99 1.68-2.99 3.53v6.97a.555.555 0 01-.55.55h-2.38a.555.555 0 01-.55-.55V10.47a.555.555 0 01.55-.55h2.2a.548.548 0 01.54.47.548.548 0 00.91.32 4.591 4.591 0 012.98-1.02 4.286 4.286 0 013.77 1.87.549.549 0 00.89.06 5.042 5.042 0 014.2-1.87c3.99 0 5.95 2.45 5.95 6.67v7.03a.555.555 0 01-.55.55H51.4a.555.555 0 01-.55-.55v-7.03c0-1.85-.77-3.42-2.65-3.42a3.2 3.2 0 00-3.05 3.48v6.97a.555.555 0 01-.55.55z",fill:"#3d3d3d"}))),n.createElement("g",{"data-name":"Grupo 18"},n.createElement("g",{"data-name":"Grupo 17"},n.createElement("path",{"data-name":"Caminho 10",d:"M59.71 18.22a.5.5 0 00-.47.66c.49 1.39 1.9 2.33 4.03 2.33a6.277 6.277 0 003.43-1.02.514.514 0 01.66.03l1.53 1.51a.494.494 0 01-.02.73 8.9 8.9 0 01-5.65 1.91c-4.84 0-7.72-2.99-7.72-7.49a7.031 7.031 0 017.46-7.35c4.57 0 7.48 2.75 7.13 8.23a.5.5 0 01-.5.46zm6.39-2.88a.492.492 0 00.47-.65c-.46-1.39-1.76-2.08-3.5-2.08a3.869 3.869 0 00-3.65 2.01.5.5 0 00.45.72z",fill:"#3d3d3d"}))),n.createElement("g",{"data-name":"Grupo 20"},n.createElement("g",{"data-name":"Grupo 19"},n.createElement("path",{"data-name":"Caminho 11",d:"M82.34 24a.691.691 0 01-.69-.69v-6.66c0-1.89-.91-3.37-2.66-3.7a3.727 3.727 0 00-4.32 3.72v6.63a.691.691 0 01-.69.69h-2.06a.691.691 0 01-.69-.69V10.62a.691.691 0 01.69-.69h1.8a.692.692 0 01.69.61.692.692 0 001.1.48 5.846 5.846 0 013.67-1.29c3.3 0 5.95 2.48 5.95 6.89v6.68a.691.691 0 01-.69.69h-2.1z",fill:"#3d3d3d"}))),n.createElement("g",{"data-name":"Grupo 22"},n.createElement("g",{"data-name":"Grupo 21"},n.createElement("path",{"data-name":"Caminho 12",d:"M90.99 6.52v2.99a.469.469 0 00.47.47h2.93a.469.469 0 01.47.47v2.05a.469.469 0 01-.47.47h-2.96a.469.469 0 00-.47.47v5.59a1.739 1.739 0 001.82 1.99 3.809 3.809 0 001.22-.23.478.478 0 01.62.29l.67 2.04a.478.478 0 01-.3.6 7.581 7.581 0 01-2.44.43c-3.05.11-5.04-1.62-5.04-5.13v-5.57a.469.469 0 00-.47-.47h-1.68a.469.469 0 01-.47-.47v-2.05a.469.469 0 01.47-.47h1.68a.469.469 0 00.47-.47V6.8a.475.475 0 01.42-.47l2.53-.27a.461.461 0 01.53.46z",fill:"#3d3d3d"}))),n.createElement("g",{"data-name":"Grupo 24"},n.createElement("g",{"data-name":"Grupo 23"},n.createElement("path",{"data-name":"Caminho 13",d:"M109.99 16.99a7.305 7.305 0 11-14.61 0 7.025 7.025 0 017.26-7.32 7.1 7.1 0 017.35 7.32zm-11.14 0c0 2.14 1.28 4.13 3.82 4.13s3.82-1.99 3.82-4.13a3.965 3.965 0 00-3.82-4.16 3.859 3.859 0 00-3.82 4.16z",fill:"#3d3d3d"}))),n.createElement("g",{"data-name":"Grupo 26"},n.createElement("g",{"data-name":"Grupo 25"},n.createElement("path",{"data-name":"Caminho 14",d:"M114.75 6a2.05 2.05 0 01-4.1 0 2.05 2.05 0 014.1 0zm-3.79 4.44v13.02a.538.538 0 00.54.54h2.39a.538.538 0 00.54-.54V10.44a.538.538 0 00-.54-.54h-2.39a.538.538 0 00-.54.54z",fill:"#64b447"})))),i=n.createElement("g",{"data-name":"Grupo 29"},n.createElement("g",{"data-name":"Grupo 28"},n.createElement("path",{"data-name":"Caminho 15",d:"M14.13 0a14.015 14.015 0 00-5.86 1.27A14.1 14.1 0 000 14.12a14.038 14.038 0 003.68 9.5 13.907 13.907 0 01-1.05 2.69c-.07.13-.13.25-.2.37a1.344 1.344 0 00-.07.4 1.267 1.267 0 00.95 1.23c.07.01.14.01.22.02.17-.01.33-.02.5-.04a14.255 14.255 0 004.51-1.2A14.122 14.122 0 1014.13 0zm7.66 22.26c.04.09.09.17.13.25a.766.766 0 01.04.27.831.831 0 01-.7.83l-.4-.03a9.44 9.44 0 01-3-.8 9.424 9.424 0 113.23-2.31 9.5 9.5 0 00.7 1.79z",fill:"#64b447"})));e.a=function(t){return n.createElement("svg",a({"data-name":"Componente 1 \\u2013 1",xmlns:"http://www.w3.org/2000/svg",width:114.75,height:28.33},t),o,i)}},hLX6:function(t,e,r){"use strict";function n(t,e){var r,n;if("function"===typeof e)void 0!==(n=e(t))&&(t=n);else if(Array.isArray(e))for(r=0;r<e.length;r++)void 0!==(n=e[r](t))&&(t=n);return t}function a(t,e){return"-"===t[0]&&Array.isArray(e)&&/^-\d+$/.test(t)?e.length+parseInt(t,10):t}function o(t){return"[object Object]"===Object.prototype.toString.call(t)}function i(t){return Object(t)===t}function c(t){return 0===Object.keys(t).length}var u=["__proto__","prototype","constructor"],l=function(t){return-1===u.indexOf(t)};function s(t,e){t.indexOf("[")>=0&&(t=t.replace(/\[/g,e).replace(/]/g,""));var r=t.split(e);if(r.filter(l).length!==r.length)throw Error("Refusing to update blacklisted property "+t);return r}var f=Object.prototype.hasOwnProperty;function p(t,e,r,n){if(!(this instanceof p))return new p(t,e,r,n);"undefined"===typeof e&&(e=!1),"undefined"===typeof r&&(r=!0),"undefined"===typeof n&&(n=!0),this.separator=t||".",this.override=e,this.useArray=r,this.useBrackets=n,this.keepArray=!1,this.cleanup=[]}var d=new p(".",!1,!0,!0);function h(t){return function(){return d[t].apply(d,arguments)}}p.prototype._fill=function(t,e,r,a){var o=t.shift();if(t.length>0){if(e[o]=e[o]||(this.useArray&&function(t){return/^\d+$/.test(t)}(t[0])?[]:{}),!i(e[o])){if(!this.override){if(!i(r)||!c(r))throw new Error("Trying to redefine `"+o+"` which is a "+typeof e[o]);return}e[o]={}}this._fill(t,e[o],r,a)}else{if(!this.override&&i(e[o])&&!c(e[o])){if(!i(r)||!c(r))throw new Error("Trying to redefine non-empty obj['"+o+"']");return}e[o]=n(r,a)}},p.prototype.object=function(t,e){var r=this;return Object.keys(t).forEach((function(a){var o=void 0===e?null:e[a],i=s(a,r.separator).join(r.separator);-1!==i.indexOf(r.separator)?(r._fill(i.split(r.separator),t,t[a],o),delete t[a]):t[a]=n(t[a],o)})),t},p.prototype.str=function(t,e,r,a){var o=s(t,this.separator).join(this.separator);return-1!==t.indexOf(this.separator)?this._fill(o.split(this.separator),r,e,a):r[t]=n(e,a),r},p.prototype.pick=function(t,e,r,n){var o,i,c,u,l;for(i=s(t,this.separator),o=0;o<i.length;o++){if(u=a(i[o],e),!e||"object"!==typeof e||!(u in e))return;if(o===i.length-1)return r?(c=e[u],n&&Array.isArray(e)?e.splice(u,1):delete e[u],Array.isArray(e)&&(l=i.slice(0,-1).join("."),-1===this.cleanup.indexOf(l)&&this.cleanup.push(l)),c):e[u];e=e[u]}return r&&Array.isArray(e)&&(e=e.filter((function(t){return void 0!==t}))),e},p.prototype.delete=function(t,e){return this.remove(t,e,!0)},p.prototype.remove=function(t,e,r){var n;if(this.cleanup=[],Array.isArray(t)){for(n=0;n<t.length;n++)this.pick(t[n],e,!0,r);return r||this._cleanup(e),e}return this.pick(t,e,!0,r)},p.prototype._cleanup=function(t){var e,r,n,a;if(this.cleanup.length){for(r=0;r<this.cleanup.length;r++)e=(e=(a=(n=this.cleanup[r].split(".")).splice(0,-1).join("."))?this.pick(a,t):t)[n[0]].filter((function(t){return void 0!==t})),this.set(this.cleanup[r],e,t);this.cleanup=[]}},p.prototype.del=p.prototype.remove,p.prototype.move=function(t,e,r,a,o){return"function"===typeof a||Array.isArray(a)?this.set(e,n(this.pick(t,r,!0),a),r,o):(o=a,this.set(e,this.pick(t,r,!0),r,o)),r},p.prototype.transfer=function(t,e,r,a,o,i){return"function"===typeof o||Array.isArray(o)?this.set(e,n(this.pick(t,r,!0),o),a,i):(i=o,this.set(e,this.pick(t,r,!0),a,i)),a},p.prototype.copy=function(t,e,r,a,o,i){return"function"===typeof o||Array.isArray(o)?this.set(e,n(JSON.parse(JSON.stringify(this.pick(t,r,!1))),o),a,i):(i=o,this.set(e,this.pick(t,r,!1),a,i)),a},p.prototype.set=function(t,e,r,n){var a,i,c,u;if("undefined"===typeof e)return r;for(c=s(t,this.separator),a=0;a<c.length;a++){if(u=c[a],a===c.length-1)if(n&&o(e)&&o(r[u]))for(i in e)f.call(e,i)&&(r[u][i]=e[i]);else if(n&&Array.isArray(r[u])&&Array.isArray(e))for(var l=0;l<e.length;l++)r[c[a]].push(e[l]);else r[u]=e;else f.call(r,u)&&(o(r[u])||Array.isArray(r[u]))||(/^\d+$/.test(c[a+1])?r[u]=[]:r[u]={});r=r[u]}return r},p.prototype.transform=function(t,e,r){return e=e||{},r=r||{},Object.keys(t).forEach(function(n){this.set(t[n],this.pick(n,e),r)}.bind(this)),r},p.prototype.dot=function(t,e,r){e=e||{},r=r||[];var n=Array.isArray(t);return Object.keys(t).forEach(function(a){var u=n&&this.useBrackets?"["+a+"]":a;if(i(t[a])&&(o(t[a])&&!c(t[a])||Array.isArray(t[a])&&!this.keepArray&&0!==t[a].length)){if(n&&this.useBrackets){var l=r[r.length-1]||"";return this.dot(t[a],e,r.slice(0,-1).concat(l+u))}return this.dot(t[a],e,r.concat(u))}n&&this.useBrackets?e[r.join(this.separator).concat("["+a+"]")]=t[a]:e[r.concat(u).join(this.separator)]=t[a]}.bind(this)),e},p.pick=h("pick"),p.move=h("move"),p.transfer=h("transfer"),p.transform=h("transform"),p.copy=h("copy"),p.object=h("object"),p.str=h("str"),p.set=h("set"),p.delete=h("delete"),p.del=p.remove=h("remove"),p.dot=h("dot"),["override","overwrite"].forEach((function(t){Object.defineProperty(p,t,{get:function(){return d.override},set:function(t){d.override=!!t}})})),["useArray","keepArray","useBrackets"].forEach((function(t){Object.defineProperty(p,t,{get:function(){return d[t]},set:function(e){d[t]=e}})})),p._process=n,t.exports=p},iwHr:function(t,e,r){"use strict";var n=r("rePB"),a=r("nKUr"),o=r("Ff2n"),i=r("vOnD"),c=i.c.button.withConfig({displayName:"styles__Container",componentId:"zyvsky-0"})(["background:transparent;display:flex;align-items:center;border:0;"," > svg{color:var(--color-text);width:36px;height:22px;}"],(function(t){var e=t.visible;return!e&&void 0!==e&&Object(i.b)(["display:none;"])}));function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.icon,r=t.visible,n=Object(o.a)(t,["icon","visible"]);return Object(a.jsx)(c,l(l({type:"button"},n),{},{visible:r,children:Object(a.jsx)(e,{})}))}},nkKJ:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return u}));var n=r("q1tI"),a=r.n(n),o=r("hLX6"),i=r.n(o),c=Object(n.createContext)({});function u(t){var e=Object(n.useContext)(c),r=e.initialData,a=e.errors,o=e.scopePath,u=e.unregisterField,l=e.registerField,s=e.clearFieldError;if(!t)throw new Error('You need to provide the "name" prop.');var f=Object(n.useMemo)((function(){return o?o+"."+t:t}),[t,o]),p=Object(n.useMemo)((function(){return i.a.pick(f,r)}),[f,r]),d=Object(n.useMemo)((function(){return a[f]}),[a,f]),h=Object(n.useCallback)((function(){s(f)}),[s,f]);return Object(n.useEffect)((function(){return function(){return u(f)}}),[f,u]),{fieldName:f,registerField:l,defaultValue:p,clearError:h,error:d}}var l=function(){return(l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};var s=Object(n.forwardRef)((function(t,e){var r=t.initialData,o=void 0===r?{}:r,u=t.children,s=t.onSubmit,f=Object(n.useState)({}),p=f[0],d=f[1],h=Object(n.useRef)([]),b=Object(n.useCallback)((function(t){return h.current.find((function(e){return e.name===t}))}),[]),y=Object(n.useCallback)((function(t){var e=t.ref,r=t.getValue,n=t.path;return r?r(e):n&&i.a.pick(n,e)}),[]),v=Object(n.useCallback)((function(t,e){var r=t.path,n=t.ref,a=t.setValue;return a?a(n,e):!!r&&i.a.set(r,e,n)}),[]),m=Object(n.useCallback)((function(t){var e=t.clearValue,r=t.ref,n=t.path;return e?e(r,""):n&&i.a.set(n,"",r)}),[]),O=Object(n.useCallback)((function(t){void 0===t&&(t={}),h.current.forEach((function(e){var r=e.name,n=e.ref,a=e.path,o=e.clearValue;return o?o(n,t[r]):a&&i.a.set(a,t[r]?t[r]:"",n)}))}),[]),g=Object(n.useCallback)((function(t){var e={};h.current.forEach((function(r){e[r.name]=i.a.pick(r.name,t)})),Object.entries(e).forEach((function(t){var e=t[0],r=t[1],n=b(e);n&&v(n,r)}))}),[b,v]),j=Object(n.useCallback)((function(t){var e=i.a.dot(t);d(e)}),[]),w=Object(n.useCallback)((function(){var t={};return h.current.forEach((function(e){t[e.name]=y(e)})),i.a.object(t),t}),[y]),E=Object(n.useCallback)((function(t){return void 0,void 0,r=function(){var e;return function(t,e){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(r){return t&&t.preventDefault(),e=w(),s(e,{reset:O},t),[2]}))},new((e=void 0)||(e=Promise))((function(t,n){function a(t){try{i(r.next(t))}catch(t){n(t)}}function o(t){try{i(r.throw(t))}catch(t){n(t)}}function i(r){r.done?t(r.value):new e((function(t){t(r.value)})).then(a,o)}i((r=r.apply(undefined,[])).next())}));var e,r}),[s,w,O]),k=Object(n.useCallback)((function(t){h.current.push(t)}),[]),x=Object(n.useCallback)((function(t){var e=h.current.findIndex((function(e){return e.name===t}));e>-1&&h.current.splice(e,1)}),[]),A=Object(n.useCallback)((function(t){d((function(e){var r;return l(l({},e),((r={})[t]=void 0,r))}))}),[]);return Object(n.useImperativeHandle)(e,(function(){return{getFieldValue:function(t){var e=b(t);return!!e&&y(e)},setFieldValue:function(t,e){var r=b(t);return!!r&&v(r,e)},getFieldError:function(t){return p[t]},setFieldError:function(t,e){d((function(r){var n;return l(l({},r),((n={})[t]=e,n))}))},clearField:function(t){var e=b(t);e&&m(e)},getErrors:function(){return p},setErrors:function(t){return j(t)},getData:function(){return w()},getFieldRef:function(t){var e=b(t);return!!e&&e.ref},setData:function(t){return g(t)},reset:function(t){return O(t)},submitForm:function(){E()}}})),a.a.createElement(c.Provider,{value:{initialData:o,errors:p,scopePath:"",registerField:k,unregisterField:x,clearFieldError:A,handleSubmit:E}},u)}))}}]);