import{s as k,n as y,e as A}from"../chunks/scheduler.e108d1fd.js";import{S as I,i as V,g as d,s as E,m as j,h as g,j as f,x as $,c as S,n as q,f as _,k as p,a as D,y as o,o as H}from"../chunks/index.5ae4157e.js";import{d as M}from"../chunks/singletons.41f3bcc1.js";const N=()=>{const s=M;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},O={subscribe(s){return N().page.subscribe(s)}};function P(s){let t,e,a,m="Oops, algo se rompió 😥",b,l,u=s[0].error.message+"",v,h,r,x="Volver a la página de inicio";return{c(){t=d("main"),e=d("div"),a=d("h1"),a.textContent=m,b=E(),l=d("p"),v=j(u),h=E(),r=d("a"),r.textContent=x,this.h()},l(n){t=g(n,"MAIN",{class:!0});var i=f(t);e=g(i,"DIV",{class:!0});var c=f(e);a=g(c,"H1",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-rdxg3u"&&(a.textContent=m),b=S(c),l=g(c,"P",{class:!0});var C=f(l);v=q(C,u),C.forEach(_),h=S(c),r=g(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),$(r)!=="svelte-15kbp8b"&&(r.textContent=x),c.forEach(_),i.forEach(_),this.h()},h(){p(a,"class","svelte-bgn2pu"),p(l,"class","svelte-bgn2pu"),p(r,"href","/"),p(r,"class","svelte-bgn2pu"),p(e,"class","error-container svelte-bgn2pu"),p(t,"class","svelte-bgn2pu")},m(n,i){D(n,t,i),o(t,e),o(e,a),o(e,b),o(e,l),o(l,v),o(e,h),o(e,r)},p(n,[i]){i&1&&u!==(u=n[0].error.message+"")&&H(v,u)},i:y,o:y,d(n){n&&_(t)}}}function w(s,t,e){let a;return A(s,O,m=>e(0,a=m)),[a]}let G=class extends I{constructor(t){super(),V(this,t,w,P,k,{})}};export{G as component};
