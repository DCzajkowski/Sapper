import{n as E,i as le,f as oe,h as B,j as ae,s as U,r as ce,c as ie}from"../chunks/scheduler.3b48bc77.js";import{p as ue,t as I,b as pe,d as z,S as q,i as V,g as y,s as C,m as L,h as k,j as M,y as D,c as S,n as H,f as _,k as x,l as j,a as T,A as h,B as K,o as W,e as J,r as Q,D as de,u as X,v as Y,w as Z}from"../chunks/index.e543c91d.js";import{w as he}from"../chunks/index.9991ffd9.js";const se=typeof window<"u";let ee=se?()=>window.performance.now():()=>Date.now(),ne=se?t=>requestAnimationFrame(t):E;const P=new Set;function re(t){P.forEach(e=>{e.c(t)||(P.delete(e),e.f())}),P.size!==0&&ne(re)}function me(t){let e;return P.size===0&&ne(re),{promise:new Promise(s=>{P.add(e={c:t,f:s})}),abort(){P.delete(e)}}}function fe(t,e){const s=e.token={};function n(r,l,o,a){if(e.token!==s)return;e.resolved=a;let d=e.ctx;o!==void 0&&(d=d.slice(),d[o]=a);const i=r&&(e.current=r)(d);let c=!1;e.block&&(e.blocks?e.blocks.forEach((u,p)=>{p!==l&&u&&(ue(),I(u,1,1,()=>{e.blocks[p]===u&&(e.blocks[p]=null)}),pe())}):e.block.d(1),i.c(),z(i,1),i.m(e.mount(),e.anchor),c=!0),e.block=i,e.blocks&&(e.blocks[l]=i),c&&ae()}if(le(t)){const r=oe();if(t.then(l=>{B(r),n(e.then,1,e.value,l),B(null)},l=>{if(B(r),n(e.catch,2,e.error,l),B(null),!e.hasCatch)throw l}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function _e(t,e,s){const n=e.slice(),{resolved:r}=t;t.current===t.then&&(n[t.value]=r),t.current===t.catch&&(n[t.error]=r),t.block.p(n,s)}const be=!0,Oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:be},Symbol.toStringTag,{value:"Module"}));function te(t){return Object.prototype.toString.call(t)==="[object Date]"}function R(t,e,s,n){if(typeof s=="number"||te(s)){const r=n-s,l=(s-e)/(t.dt||1/60),o=t.opts.stiffness*r,a=t.opts.damping*l,d=(o-a)*t.inv_mass,i=(l+d)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(r)<t.opts.precision?n:(t.settled=!1,te(s)?new Date(s.getTime()+i):s+i)}else{if(Array.isArray(s))return s.map((r,l)=>R(t,e[l],s[l],n[l]));if(typeof s=="object"){const r={};for(const l in s)r[l]=R(t,e[l],s[l],n[l]);return r}else throw new Error(`Cannot spring ${typeof s} values`)}}function ve(t,e={}){const s=he(t),{stiffness:n=.15,damping:r=.8,precision:l=.01}=e;let o,a,d,i=t,c=t,u=1,p=0,w=!1;function m(b,$={}){c=b;const O=d={};return t==null||$.hard||f.stiffness>=1&&f.damping>=1?(w=!0,o=ee(),i=b,s.set(t=c),Promise.resolve()):($.soft&&(p=1/(($.soft===!0?.5:+$.soft)*60),u=0),a||(o=ee(),w=!1,a=me(g=>{if(w)return w=!1,a=null,!1;u=Math.min(u+p,1);const v={inv_mass:u,opts:f,settled:!0,dt:(g-o)*60/1e3},N=R(v,i,t,c);return o=g,i=t,s.set(t=N),v.settled&&(a=null),!v.settled})),new Promise(g=>{a.promise.then(()=>{O===d&&g()})}))}const f={set:m,update:(b,$)=>m(b(c,t),$),subscribe:s.subscribe,stiffness:n,damping:r,precision:l};return f}function ge(t){let e,s,n='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',r,l,o,a,d=Math.floor(t[1]+1)+"",i,c,u,p=Math.floor(t[1])+"",w,m,f,b='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',$,O;return{c(){e=y("div"),s=y("button"),s.innerHTML=n,r=C(),l=y("div"),o=y("div"),a=y("strong"),i=L(d),c=C(),u=y("strong"),w=L(p),m=C(),f=y("button"),f.innerHTML=b,this.h()},l(g){e=k(g,"DIV",{class:!0});var v=M(e);s=k(v,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),D(s)!=="svelte-97ppyc"&&(s.innerHTML=n),r=S(v),l=k(v,"DIV",{class:!0});var N=M(l);o=k(N,"DIV",{class:!0,style:!0});var A=M(o);a=k(A,"STRONG",{class:!0,"aria-hidden":!0});var G=M(a);i=H(G,d),G.forEach(_),c=S(A),u=k(A,"STRONG",{class:!0});var F=M(u);w=H(F,p),F.forEach(_),A.forEach(_),N.forEach(_),m=S(v),f=k(v,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),D(f)!=="svelte-irev0c"&&(f.innerHTML=b),v.forEach(_),this.h()},h(){x(s,"aria-label","Decrease the counter by one"),x(s,"class","svelte-y96mxt"),x(a,"class","hidden svelte-y96mxt"),x(a,"aria-hidden","true"),x(u,"class","svelte-y96mxt"),x(o,"class","counter-digits svelte-y96mxt"),j(o,"transform","translate(0, "+100*t[2]+"%)"),x(l,"class","counter-viewport svelte-y96mxt"),x(f,"aria-label","Increase the counter by one"),x(f,"class","svelte-y96mxt"),x(e,"class","counter svelte-y96mxt")},m(g,v){T(g,e,v),h(e,s),h(e,r),h(e,l),h(l,o),h(o,a),h(a,i),h(o,c),h(o,u),h(u,w),h(e,m),h(e,f),$||(O=[K(s,"click",t[4]),K(f,"click",t[5])],$=!0)},p(g,[v]){v&2&&d!==(d=Math.floor(g[1]+1)+"")&&W(i,d),v&2&&p!==(p=Math.floor(g[1])+"")&&W(w,p),v&4&&j(o,"transform","translate(0, "+100*g[2]+"%)")},i:E,o:E,d(g){g&&_(e),$=!1,ce(O)}}}function ye(t,e){return(t%e+e)%e}function ke(t,e,s){let n,r,l=0;const o=ve();ie(t,o,i=>s(1,r=i));const a=()=>s(0,l-=1),d=()=>s(0,l+=1);return t.$$.update=()=>{t.$$.dirty&1&&o.set(l),t.$$.dirty&2&&s(2,n=ye(r,1))},[l,r,n,o,a,d]}class we extends q{constructor(e){super(),V(this,e,ke,ge,U,{})}}function xe(t){let e,s,n=t[2]+"",r;return{c(){e=y("p"),s=L("Error: "),r=L(n),this.h()},l(l){e=k(l,"P",{style:!0});var o=M(e);s=H(o,"Error: "),r=H(o,n),o.forEach(_),this.h()},h(){j(e,"color","red")},m(l,o){T(l,e,o),h(e,s),h(e,r)},p:E,d(l){l&&_(e)}}}function $e(t){let e,s,n=t[1].response+"",r,l,o,a,d=t[1].timing+"",i;return{c(){e=y("p"),s=L("Status: "),r=L(n),l=C(),o=y("p"),a=L("Time: "),i=L(d),this.h()},l(c){e=k(c,"P",{style:!0});var u=M(e);s=H(u,"Status: "),r=H(u,n),u.forEach(_),l=S(c),o=k(c,"P",{style:!0});var p=M(o);a=H(p,"Time: "),i=H(p,d),p.forEach(_),this.h()},h(){j(e,"color","purple"),j(e,"font-weight","bold"),j(o,"color","purple")},m(c,u){T(c,e,u),h(e,s),h(e,r),T(c,l,u),T(c,o,u),h(o,a),h(o,i)},p:E,d(c){c&&(_(e),_(l),_(o))}}}function Me(t){let e,s="loading...";return{c(){e=y("p"),e.textContent=s,this.h()},l(n){e=k(n,"P",{style:!0,"data-svelte-h":!0}),D(e)!=="svelte-3wb8qk"&&(e.textContent=s),this.h()},h(){j(e,"color","purple"),j(e,"font-weight","bold")},m(n,r){T(n,e,r)},p:E,d(n){n&&_(e)}}}function Te(t){let e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:Me,then:$e,catch:xe,value:1,error:2};return fe(t[0],s),{c(){e=J(),s.block.c()},l(n){e=J(),s.block.l(n)},m(n,r){T(n,e,r),s.block.m(n,s.anchor=r),s.mount=()=>e.parentNode,s.anchor=e},p(n,[r]){t=n,_e(s,t,r)},i:E,o:E,d(n){n&&_(e),s.block.d(n),s.token=null,s=null}}}function Ee(t){return[fetch("https://sapperapi.malpkakefirek.repl.co/health").then(s=>s.json())]}class Ce extends q{constructor(e){super(),V(this,e,Ee,Te,U,{})}}const Le=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,Se=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;function He(t){let e,s,n,r,l=`<span class="welcome svelte-19xx0bt"><picture><source srcset="${Le}" type="image/webp"/> <img src="${Se}" alt="Welcome" class="svelte-19xx0bt"/></picture></span>

		to your new<br/>SvelteKit app`,o,a,d="try editing <strong>src/routes/+page.svelte</strong>",i,c,u,p,w;return c=new we({}),p=new Ce({}),{c(){e=y("meta"),s=C(),n=y("section"),r=y("h1"),r.innerHTML=l,o=C(),a=y("h2"),a.innerHTML=d,i=C(),Q(c.$$.fragment),u=C(),Q(p.$$.fragment),this.h()},l(m){const f=de("svelte-t32ptj",document.head);e=k(f,"META",{name:!0,content:!0}),f.forEach(_),s=S(m),n=k(m,"SECTION",{class:!0});var b=M(n);r=k(b,"H1",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-11s73ib"&&(r.innerHTML=l),o=S(b),a=k(b,"H2",{"data-svelte-h":!0}),D(a)!=="svelte-1e36z0s"&&(a.innerHTML=d),i=S(b),X(c.$$.fragment,b),u=S(b),X(p.$$.fragment,b),b.forEach(_),this.h()},h(){document.title="Home",x(e,"name","description"),x(e,"content","Svelte demo app"),x(r,"class","svelte-19xx0bt"),x(n,"class","svelte-19xx0bt")},m(m,f){h(document.head,e),T(m,s,f),T(m,n,f),h(n,r),h(n,o),h(n,a),h(n,i),Y(c,n,null),h(n,u),Y(p,n,null),w=!0},p:E,i(m){w||(z(c.$$.fragment,m),z(p.$$.fragment,m),w=!0)},o(m){I(c.$$.fragment,m),I(p.$$.fragment,m),w=!1},d(m){m&&(_(s),_(n)),_(e),Z(c),Z(p)}}}class Ne extends q{constructor(e){super(),V(this,e,null,He,U,{})}}export{Ne as component,Oe as universal};
