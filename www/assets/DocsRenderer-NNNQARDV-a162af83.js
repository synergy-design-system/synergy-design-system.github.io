import{_ as l}from"./iframe-db664beb.js";import{e as h,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-b4db77d5.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-5662c94f.js";import"./index-356e4a49.js";var c={},m=h;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},f={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},O=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t?.components},u=y;return new Promise((i,p)=>{l(()=>import("./index-044fcbae.js"),["./index-044fcbae.js","./index-0bc4759d.js","./index-b4db77d5.js","./iframe-db664beb.js","./_commonjsHelpers-de833af9.js","./index-d37d4223.js","./index-5662c94f.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(u,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{v(e)}}};export{O as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-NNNQARDV-a162af83.js.map