import{_ as l}from"./iframe-siiDmtJH.js";import{R as o,r as a}from"./index-4g5l5LRQ.js";import{r as h,C as E,A as R,H as x,D as y}from"./index-9XlKO1V4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-ogXoivrg.js";import"./index-nb0QhqUB.js";import"./index-PPLHz8o0.js";var c={},m=h;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},e))})},f=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t?.components},i=y;return new Promise((u,p)=>{l(()=>import("./index-_VGcpBFS.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:d})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{f(e)}}};export{S as DocsRenderer,w as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-_VGcpBFS.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
