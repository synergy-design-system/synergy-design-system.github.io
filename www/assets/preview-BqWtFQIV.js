function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./axe-Bmtiezxu.js","./_commonjsHelpers-Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as S}from"./iframe-1MOLQhCt.js";import"../sb-preview/runtime.js";const{global:f}=__STORYBOOK_MODULE_GLOBAL__,{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;var a="storybook/a11y",y=`${a}/result`,L=`${a}/request`,d=`${a}/running`,A=`${a}/error`,T=`${a}/manual`,t={RESULT:y,REQUEST:L,RUNNING:d,ERROR:A,MANUAL:T},{document:g}=f,r=U.getChannel(),i=!1,l,E={config:{},options:{}},v=async(o,n=E)=>{n?.manual||await _(o,n)},_=async(o,n=E)=>{l=o;try{if(!i){i=!0,r.emit(t.RUNNING);let e=(await S(()=>import("./axe-Bmtiezxu.js").then(N=>N.a),__vite__mapDeps([0,1]),import.meta.url)).default,{element:R="#storybook-root",config:s,options:m={}}=n,u=g.querySelector(R);if(!u)return;e.reset(),s&&e.configure(s);let O=await e.run(u,m),c=JSON.parse(JSON.stringify(O));l===o?r.emit(t.RESULT,c):(i=!1,_(l))}}catch(e){r.emit(t.ERROR,e)}finally{i=!1}};r.on(t.REQUEST,v);r.on(t.MANUAL,_);
