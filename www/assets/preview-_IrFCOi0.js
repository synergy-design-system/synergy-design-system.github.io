const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-BtLmHl5l.js","./iframe-BI6v4uk_.js","./index-B3ehnkiM.js","./_commonjsHelpers-Cpj98o6Y.js","./index-tI_N1BqD.js","./index-DXimoRZY.js","./index-B2MLhnBa.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./iframe-BI6v4uk_.js";import"../sb-preview/runtime.js";const{global:a}=__STORYBOOK_MODULE_GLOBAL__;var i=Object.entries(a.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BtLmHl5l.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{let r=e.tags||[];return r.includes("autodocs")&&r.filter(t=>i[t]).length===0&&!e.parameters.docs?.disable}}}};export{d as parameters};
