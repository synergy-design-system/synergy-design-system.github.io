const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-Bh4eGwEw.js","./iframe-C2k1Q-9v.js","./index-B-o1Wr-g.js","./_commonjsHelpers-Cpj98o6Y.js","./index-p7H9AOUY.js","./index-Df9so8jS.js","./index-DGdNYaqV.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-C2k1Q-9v.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-Bh4eGwEw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{d as parameters};
