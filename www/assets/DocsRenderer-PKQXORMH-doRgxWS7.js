const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BSj771as.js","./index-B-o1Wr-g.js","./_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./iframe-QkWf5TCH.js";import{R as o,r as m}from"./index-B-o1Wr-g.js";import{al as h,am as E,an as R,ao as x,ap as y}from"./index-BflnM3zI.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DGdNYaqV.js";import"./index-DrFu-skq.js";var i={},u=h;i.createRoot=u.createRoot,i.hydrateRoot=u.hydrateRoot;var n=new Map,v=({callback:e,children:r})=>{let t=m.useRef();return m.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r},w=async(e,r,t)=>{let a=await _(r,t);return new Promise(s=>{a.render(o.createElement(v,{callback:()=>s(null)},e))})},D=(e,r)=>{let t=n.get(e);t&&(t.unmount(),n.delete(e))},_=async(e,r)=>{let t=n.get(e);return t||(t=i.createRoot(e,r),n.set(e,t)),t},f={code:E,a:R,...x},g=class extends m.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:o.createElement(o.Fragment,null,r)}},T=class{constructor(){this.render=async(e,r,t)=>{let a={...f,...r?.components},s=y;return new Promise((p,d)=>{l(async()=>{const{MDXProvider:c}=await import("./index-BSj771as.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:c})=>w(o.createElement(g,{showException:d,key:Math.random()},o.createElement(c,{components:a},o.createElement(s,{context:e,docsParameter:r}))),t)).then(()=>p())})},this.unmount=e=>{D(e)}}};export{T as DocsRenderer,f as defaultComponents};
