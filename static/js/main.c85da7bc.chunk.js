(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){"use strict";t.r(i);var n=t(2),a=t.n(n),c=t(5),r=t.n(c),s=(t(10),t.p+"static/media/Naruto title.d775c337.png"),d=t.p+"static/media/Sharingan.c1041f01.png",m=(t(11),t(12),t(0));var o=function(e){return Object(m.jsx)("h1",{children:Object(m.jsx)("img",{src:e.imgURL,alt:e.alternateName})})};t(14);var u=function(e){return Object(m.jsx)("div",{id:"header-division",children:Object(m.jsx)("div",{id:"header-division-image-div",children:Object(m.jsx)("img",{src:e.imgURL,alt:e.alternateName})})})},j=t(3);t(15),t(16);var b=function(e){return Object(m.jsx)("div",{className:"card",onClick:function(){e.handleClick(e.info.id)},children:Object(m.jsxs)("figure",{children:[Object(m.jsx)("img",{src:e.info.imgURL,alt:e.info.name}),Object(m.jsx)("figcaption",{children:e.info.name})]})})},g=t(1),l=t.n(g),f=t.p+"static/media/curse-mark.1bde1cef.png",p=t.p+"static/media/hyuga-mark.e24226d9.png",h=t.p+"static/media/konohagakure-symbol.74962ebb.png",O=t.p+"static/media/iwagakure-symbol.0a8291dd.png",k=t.p+"static/media/kirigakure-symbol.5ea35f6b.png",v=t.p+"static/media/komogakure-symbol.c70f957d.png",x=t.p+"static/media/sunagakure-symbol.ef8e96b4.png",y=t.p+"static/media/love-kanji.62350d38.png",L=t.p+"static/media/myobokozan.002a3a71.png",U=t.p+"static/media/nine-tails-seal.958ed406.png",R=t.p+"static/media/uchiha-crest.faf2e41f.png",S=t.p+"static/media/uzumaki-crest.d5c1fe4d.png";var N=function(){return[{id:l()(),name:"Orochimaru curse mark",imgURL:f},{id:l()(),name:"Hyuga curse mark",imgURL:p},{id:l()(),name:"Konoha symbol",imgURL:h},{id:l()(),name:"Iwagakure symbol",imgURL:O},{id:l()(),name:"Sunagakure symbol",imgURL:x},{id:l()(),name:"Kirigakure symbol",imgURL:k},{id:l()(),name:"Komogakure symbol",imgURL:v},{id:l()(),name:"Love (kanji)",imgURL:y},{id:l()(),name:"Myobokuzan symbol",imgURL:L},{id:l()(),name:"Nine tails seal",imgURL:U},{id:l()(),name:"Uchiha crest",imgURL:R},{id:l()(),name:"Uzumaki crest",imgURL:S}]};t(18);var C=function(e){return Object(m.jsxs)("div",{id:"scorecard",children:[Object(m.jsx)("div",{id:"current-score",children:Object(m.jsxs)("span",{children:["Current score: ",e.currentScore]})}),Object(m.jsx)("div",{id:"best-score",children:Object(m.jsxs)("span",{children:["Best score: ",e.bestScore]})})]})};var w=function(e){var i=Object(n.useState)([]),t=Object(j.a)(i,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(j.a)(r,2),d=s[0],o=s[1],u=Object(n.useState)(0),g=Object(j.a)(u,2),l=g[0],f=g[1],p=Object(n.useState)([]),h=Object(j.a)(p,2),O=h[0],k=h[1];function v(){c(Array.from(a).sort((function(){return Math.random()-.5})))}function x(e){if(O.includes(e))l<d&&f(d),o(0),k([]);else{var i=Array.from(O);i.push(e),k(i),o(d+1)}v()}return Object(n.useEffect)((function(){c(N())}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{bestScore:l,currentScore:d}),Object(m.jsx)("div",{id:"board",children:a.map((function(e){return Object(m.jsx)(b,{info:e,handleClick:x},e.id)}))})]})};var z=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(o,{imgURL:s,alternateName:"Heading, Naruto Memory"}),Object(m.jsx)(u,{imgURL:d,alternateName:"Header division image"})]})}),Object(m.jsx)(w,{})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(i){var t=i.getCLS,n=i.getFID,a=i.getFCP,c=i.getLCP,r=i.getTTFB;t(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),F()}],[[19,1,2]]]);
//# sourceMappingURL=main.c85da7bc.chunk.js.map