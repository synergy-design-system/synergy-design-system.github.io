const __vite__fileDeps=["./index-rbP-kYFP.js","./index-B3ehnkiM.js","./_commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l}from"./iframe-24lAnnBE.js";import{R as o,r as c}from"./index-B3ehnkiM.js";import{r as h,C as E,A as R,H as x,h as y}from"./index-DZ0CXdb5.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";var m={},i=h;m.createRoot=i.createRoot,m.hydrateRoot=i.hydrateRoot;var n=new Map,_=({callback:e,children:r})=>{let t=c.useRef();return c.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r},f=async(e,r,t)=>{let s=await w(r,t);return new Promise(a=>{s.render(o.createElement(_,{callback:()=>a(null)},e))})},v=(e,r)=>{let t=n.get(e);t&&(t.unmount(),n.delete(e))},w=async(e,r)=>{let t=n.get(e);return t||(t=m.createRoot(e,r),n.set(e,t)),t},D={code:E,a:R,...x},g=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:o.createElement(o.Fragment,null,r)}},S=class{constructor(){this.render=async(e,r,t)=>{let s={...D,...r?.components},a=y;return new Promise((u,p)=>{l(()=>import("./index-rbP-kYFP.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:d})=>f(o.createElement(g,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(a,{context:e,docsParameter:r}))),t)).then(()=>u())})},this.unmount=e=>{v(e)}}};export{S as DocsRenderer,D as defaultComponents};
