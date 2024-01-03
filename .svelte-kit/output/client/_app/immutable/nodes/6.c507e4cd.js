import{d as X}from"../chunks/environment.9aa685ef.js";import{s as Y,m as B,r as Z,c as ee}from"../chunks/scheduler.3b48bc77.js";import{S as te,i as ae,g,s as y,r as L,m as A,D as se,h as v,f as u,c as b,j as I,y as ne,u as O,n as D,k as $,l as J,A as f,a as w,v as j,B as oe,C as re,d as x,t as z,w as H}from"../chunks/index.e543c91d.js";import{H as le,a as G,v as K,r as Q,e as ie,u as ue,d as ce,b as me}from"../chunks/validators.09245258.js";import{g as fe}from"../chunks/navigation.a73baae4.js";const pe=X,de=!1,Pe=Object.freeze(Object.defineProperty({__proto__:null,csr:pe,prerender:de},Symbol.toStringTag,{value:"Module"}));function $e(l){let e;return{c(){e=A("This is a mandatory field")},l(a){e=D(a,"This is a mandatory field")},m(a,t){w(a,e,t)},d(a){a&&u(e)}}}function _e(l){let e;return{c(){e=A("Email is not valid")},l(a){e=D(a,"Email is not valid")},m(a,t){w(a,e,t)},d(a){a&&u(e)}}}function he(l){let e,a,t,i;return e=new G({props:{on:"required",$$slots:{default:[$e]},$$scope:{ctx:l}}}),t=new G({props:{on:"email",hideWhenRequired:!0,$$slots:{default:[_e]},$$scope:{ctx:l}}}),{c(){L(e.$$.fragment),a=y(),L(t.$$.fragment)},l(s){O(e.$$.fragment,s),a=b(s),O(t.$$.fragment,s)},m(s,r){j(e,s,r),w(s,a,r),j(t,s,r),i=!0},p(s,r){const n={};r&8&&(n.$$scope={dirty:r,ctx:s}),e.$set(n);const p={};r&8&&(p.$$scope={dirty:r,ctx:s}),t.$set(p)},i(s){i||(x(e.$$.fragment,s),x(t.$$.fragment,s),i=!0)},o(s){z(e.$$.fragment,s),z(t.$$.fragment,s),i=!1},d(s){s&&u(a),H(e,s),H(t,s)}}}function ge(l){let e;return{c(){e=A("This is a mandatory field")},l(a){e=D(a,"This is a mandatory field")},m(a,t){w(a,e,t)},d(a){a&&u(e)}}}function ve(l){let e,a,t,i,s="Login",r,n,p,d,_,F,S,M,h,N,T,R,q,C,P,k,U,V;return _=new le({props:{for:"email",$$slots:{default:[he]},$$scope:{ctx:l}}}),h=new G({props:{for:"password",on:"required",$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){e=g("meta"),a=y(),t=g("form"),i=g("h1"),i.textContent=s,r=y(),n=g("div"),p=g("input"),d=y(),L(_.$$.fragment),F=y(),S=g("input"),M=y(),L(h.$$.fragment),N=y(),T=g("button"),R=A("Login"),C=y(),P=g("pre"),this.h()},l(o){const c=se("svelte-sn1vrk",document.head);e=v(c,"META",{name:!0,content:!0}),c.forEach(u),a=b(o),t=v(o,"FORM",{method:!0,action:!0,class:!0});var E=I(t);i=v(E,"H1",{"data-svelte-h":!0}),ne(i)!=="svelte-1wsy7a9"&&(i.textContent=s),r=b(E),n=v(E,"DIV",{style:!0,class:!0});var m=I(n);p=v(m,"INPUT",{type:!0,name:!0}),d=b(m),O(_.$$.fragment,m),F=b(m),S=v(m,"INPUT",{type:!0,name:!0}),M=b(m),O(h.$$.fragment,m),N=b(m),T=v(m,"BUTTON",{});var W=I(T);R=D(W,"Login"),W.forEach(u),m.forEach(u),E.forEach(u),C=b(o),P=v(o,"PRE",{}),I(P).forEach(u),this.h()},h(){document.title="Login",$(e,"name","description"),$(e,"content","Login to the app"),$(p,"type","email"),$(p,"name","email"),$(S,"type","password"),$(S,"name","password"),T.disabled=q=!l[0].valid,J(n,"display","flex"),J(n,"justify-content","center"),$(n,"class","svelte-17o38z0"),$(t,"method","post"),$(t,"action","https://sapperapi.malpkakefirek.repl.co/login"),$(t,"class","svelte-17o38z0")},m(o,c){f(document.head,e),w(o,a,c),w(o,t,c),f(t,i),f(t,r),f(t,n),f(n,p),f(n,d),j(_,n,null),f(n,F),f(n,S),f(n,M),j(h,n,null),f(n,N),f(n,T),f(T,R),w(o,C,c),w(o,P,c),k=!0,U||(V=[B(K.call(null,p,[Q,ie])),B(K.call(null,S,[Q])),oe(t,"submit",re(l[2])),B(l[1].call(null,t))],U=!0)},p(o,[c]){const E={};c&8&&(E.$$scope={dirty:c,ctx:o}),_.$set(E);const m={};c&8&&(m.$$scope={dirty:c,ctx:o}),h.$set(m),(!k||c&1&&q!==(q=!o[0].valid))&&(T.disabled=q)},i(o){k||(x(_.$$.fragment,o),x(h.$$.fragment,o),k=!0)},o(o){z(_.$$.fragment,o),z(h.$$.fragment,o),k=!1},d(o){o&&(u(a),u(t),u(C),u(P)),u(e),H(_),H(h),U=!1,Z(V)}}}function ye(l,e,a){let t;const i=ue();ee(l,i,r=>a(0,t=r));async function s(r){const n=new FormData(r.currentTarget),p=await fetch(r.currentTarget.action,{method:"POST",body:n}),d=ce(await p.text());console.log(d),d.type==="success"&&(d.session_id&&d.username&&(localStorage.setItem("session_id",d.session_id),localStorage.setItem("username",d.username)),await fe("/"),location.reload()),me(d)}return[t,i,s]}class ke extends te{constructor(e){super(),ae(this,e,ye,ve,Y,{})}}export{ke as component,Pe as universal};
