const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DjKt9u9V.js","./index-CleY8y_P.js","./_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{_ as d}from"./iframe-Bc7jEGYD.js";import{r as s,R as n}from"./index-CleY8y_P.js";import{as as h,at as E,au as v,av as R,aw as w}from"./index-DOZwdX_p.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";var l,u=h;l=u.createRoot,u.hydrateRoot;var a=new Map;function _(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:r})=>{let t=s.useRef();return s.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,r=null;return{promise:new Promise((t,o)=>{e=t,r=o}),resolve:e,reject:r}});var x=async(e,r,t)=>{let o=await g(r,t);if(_()){o.render(e);return}let{promise:i,resolve:m}=Promise.withResolvers();return o.render(s.createElement(f,{callback:m},e)),i},y=(e,r)=>{let t=a.get(e);t&&(t.unmount(),a.delete(e))},g=async(e,r)=>{let t=a.get(e);return t||(t=l(e,r),a.set(e,t)),t},D={code:E,a:v,...R},C=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:n.createElement(n.Fragment,null,r)}},F=class{constructor(){this.render=async(e,r,t)=>{let o={...D,...r?.components},i=w;return new Promise((m,p)=>{d(async()=>{const{MDXProvider:c}=await import("./index-DjKt9u9V.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:c})=>x(n.createElement(C,{showException:p,key:Math.random()},n.createElement(c,{components:o},n.createElement(i,{context:e,docsParameter:r}))),t)).then(()=>m())})},this.unmount=e=>{y(e)}}};export{F as DocsRenderer,D as defaultComponents};
