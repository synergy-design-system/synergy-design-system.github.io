const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-Dm6O2bBN.js","./iframe-24lAnnBE.js","./index-B3ehnkiM.js","./_commonjsHelpers-Cpj98o6Y.js","./index-DZ0CXdb5.js","./index-DXimoRZY.js","./index-B2MLhnBa.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-24lAnnBE.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-Dm6O2bBN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{d as parameters};