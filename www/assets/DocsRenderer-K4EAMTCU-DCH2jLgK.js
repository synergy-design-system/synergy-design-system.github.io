function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-COxJNofV.js","./index-DH5ua8nC.js","./_commonjsHelpers-Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as l}from"./iframe-cutbtrfc.js";import{R as o,r as a}from"./index-DH5ua8nC.js";import{r as h,C as E,A as R,H as x,g as y}from"./index-BB3tlaq-.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DSk3xmNA.js";import"./index-DrFu-skq.js";var c={},m=h;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,_=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},f=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(_,{callback:()=>s(null)},e))})},g=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},D=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t?.components},i=y;return new Promise((u,p)=>{l(()=>import("./index-COxJNofV.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:d})=>f(o.createElement(D,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{g(e)}}};export{S as DocsRenderer,w as defaultComponents};
