const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-CU5_fBdu.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./iframe-I9NLeLMH.js";import{e as p}from"./index-CSCA1apM.js";const{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,{global:L}=__STORYBOOK_MODULE_GLOBAL__;var i="storybook/a11y",S=`${i}/result`,b=`${i}/request`,x=`${i}/running`,A=`${i}/error`,V=`${i}/manual`,c={RESULT:S,REQUEST:b,RUNNING:x,ERROR:A,MANUAL:V},{document:R}=L,m=w.getChannel(),O={config:{},options:{}},D=["region"],_=[],y=!1,g=async()=>{if(_.length===0){y=!1;return}y=!0;let a=_.shift();a&&await a(),g()},N=async(a=O)=>{let{default:r}=await v(async()=>{const{default:e}=await import("./axe-CU5_fBdu.js").then(s=>s.a);return{default:e}},__vite__mapDeps([0,1]),import.meta.url),{element:n="body",config:t={},options:d={}}=a,l=R.querySelector(n)??R.body;if(!l)return;r.reset();let u={...t,rules:[...D.map(e=>({id:e,enabled:!1})),...t?.rules??[]]};return r.configure(u),new Promise((e,s)=>{let f=async()=>{try{let o=await r.run(l,d);e(o)}catch(o){s(o)}};_.push(f),y||g()})};m.on(c.MANUAL,async(a,r=O)=>{try{let n=await N(r),t=JSON.parse(JSON.stringify(n));m.emit(c.RESULT,t,a)}catch(n){m.emit(c.ERROR,n)}});function E(){try{return!1}catch{return!1}}var h=!1,T=async({reporting:a,parameters:r,globals:n})=>{let t=r.a11y,d=n.a11y,l=t?.manual!==!0&&t?.disable!==!0&&t?.test!=="off"&&d?.manual!==!0,u=()=>{switch(t?.test){case"todo":return"warning";case"error":default:return"failed"}};if(l)try{let e=await N(t);if(e){let s=(e?.violations.length??0)>0;if(a.addReport({type:"a11y",version:1,result:e,status:s?u():"passed"}),E()&&s&&u()==="failed"){if(!h){let{toHaveNoViolations:f}=await v(async()=>{const{toHaveNoViolations:o}=await import("./matchers-7Z3WT2CE-CcSi9QFY.js");return{toHaveNoViolations:o}},[],import.meta.url);p.extend({toHaveNoViolations:f}),h=!0}p(e).toHaveNoViolations()}}}catch(e){if(a.addReport({type:"a11y",version:1,result:{error:e},status:"failed"}),E())throw e}},U={a11y:{manual:!1}},M={a11y:{test:"todo"}};export{T as experimental_afterEach,U as initialGlobals,M as parameters};
