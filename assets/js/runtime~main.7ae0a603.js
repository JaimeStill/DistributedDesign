(()=>{"use strict";var e,t,r,o,n,a={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e].call(r.exports,r,r.exports,d),r.exports}d.m=a,e=[],d.O=(t,r,o,n)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],n=e[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&n||a>=n)&&Object.keys(d.O).every((e=>d.O[e](r[u])))?r.splice(u--,1):(i=!1,n<a&&(a=n));if(i){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(n,a),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",162:"d589d3a7",438:"dc2c3adb",514:"1be78505",554:"60875e34",720:"a3713279",918:"17896441",971:"c377a04b",988:"cfd71120"}[e]||e)+"."+{53:"baf3e345",162:"152b090e",438:"1a5503e0",514:"fff8dfb6",554:"447e3459",720:"cf1ffceb",918:"4870d92b",971:"7cac3e83",972:"d5cc17b1",988:"23fb14c9"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="docs:",d.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,u;if(void 0!==r)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/distributed-design/",d.gca=function(e){return e={17896441:"918","935f2afb":"53",d589d3a7:"162",dc2c3adb:"438","1be78505":"514","60875e34":"554",a3713279:"720",c377a04b:"971",cfd71120:"988"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],i=r[1],u=r[2],f=0;if(a.some((t=>0!==e[t]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);if(u)var c=u(d)}for(t&&t(r);f<a.length;f++)n=a[f],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(c)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();