const __vite__fileDeps=["./index-COxJNofV.js","./index-DH5ua8nC.js","./_commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l}from"./iframe-D0txjnDd.js";import{R as o,r as a}from"./index-DH5ua8nC.js";import{r as h,C as E,A as R,H as x,h as y}from"./index-2baN0hCG.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-COebWTXQ.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";var c={},m=h;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,_=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},f=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(_,{callback:()=>s(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},D={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...D,...t?.components},i=y;return new Promise((u,p)=>{l(()=>import("./index-COxJNofV.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:d})=>f(o.createElement(g,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{v(e)}}};export{S as DocsRenderer,D as defaultComponents};
