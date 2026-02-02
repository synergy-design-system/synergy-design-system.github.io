import{q as p,w as lt,x as _,F as ct,y as V,u as dt}from"./iframe-CW_KonjK.js";import{n as c}from"./synergy-element-BoJA4F0K.js";import{e as C}from"./class-map-Bo2NiYIQ.js";import{r as $}from"./icon.component-9N7Azsi9.js";import{t as ht}from"./event-options-3qAdqXoU.js";import{a as z}from"./query-D0jTsbLw.js";import{o as J}from"./query-assigned-elements-CblsR2sJ.js";import{o as f}from"./if-defined-qefA8dKN.js";import{r as Z,L as ut}from"./index-DihgwUfS.js";var tt=Object.defineProperty,bt=Object.defineProperties,pt=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,rt=t=>{throw TypeError(t)},N=(t,e,o)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,A=(t,e)=>{for(var o in e||(e={}))et.call(e,o)&&N(t,o,e[o]);if(I)for(var o of I(e))ot.call(e,o)&&N(t,o,e[o]);return t},ee=(t,e)=>bt(t,vt(e)),oe=(t,e)=>{var o={};for(var r in t)et.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&I)for(var r of I(t))e.indexOf(r)<0&&ot.call(t,r)&&(o[r]=t[r]);return o},i=(t,e,o,r)=>{for(var a=r>1?void 0:r?pt(e,o):e,s=t.length-1,l;s>=0;s--)(l=t[s])&&(a=(r?l(e,o,a):l(a))||a);return r&&a&&tt(e,o,a),a},F=(t,e,o)=>e.has(t)||rt("Cannot "+o),v=(t,e,o)=>(F(t,e,"read from private field"),e.get(t)),B=(t,e,o)=>e.has(t)?rt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),P=(t,e,o,r)=>(F(t,e,"write to private field"),e.set(t,o),o),re=(t,e,o)=>(F(t,e,"access private method"),o);function S(t,e){const o=A({waitUntilFirstUpdate:!1},e);return(r,a)=>{const{update:s}=r,l=Array.isArray(t)?t:[t];r.update=function(n){l.forEach(u=>{const b=u;if(n.has(b)){const m=n.get(b),T=this[b];m!==T&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[a](m,T)}}),s.call(this,n)}}}var k=p`
	/* stylelint-disable */
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,L,y=class extends lt{constructor(){super(),B(this,L,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,A({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const r=customElements.get(t);if(!r){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let a=" (unknown version)",s=a;"version"in e&&e.version&&(a=" v"+e.version),"version"in r&&r.version&&(s=" v"+r.version),!(a&&s&&a===s)&&console.warn(`Attempted to register <${t}>${a}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,o){v(this,L)||(this.constructor.elementProperties.forEach((r,a)=>{r.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),P(this,L,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};L=new WeakMap;y.version="3.1.0";y.dependencies={};i([c()],y.prototype,"dir",2);i([c()],y.prototype,"lang",2);var H="";function W(t){H=t}function gt(t=""){if(!H){const e=[...document.getElementsByTagName("script")],o=e.find(r=>r.hasAttribute("data-synergy"));if(o)W(o.getAttribute("data-synergy"));else{const r=e.find(s=>/synergy(\.min)?\.js($|\?)/.test(s.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(s.src));let a="";r&&(a=r.getAttribute("src")),W(a.split("/").slice(0,-1).join("/"))}}return H.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ft={name:"default",resolver:t=>gt(`assets/icons/${t}.svg`)},yt=ft,mt={add:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.55 17.654-5.334-5.335 1.069-1.069 4.265 4.265 9.166-9.165 1.069 1.07z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 15.039 6.346 9.384 7.4 8.331l4.6 4.6 4.6-4.6 1.054 1.053z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,"details-close":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"details-open":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12.002 15.577q1.7 0 2.888-1.19t1.187-2.89-1.19-2.886-2.89-1.188-2.886 1.19-1.188 2.89 1.19 2.887 2.89 1.187M12 14.2q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.788-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.913.787.787.788.787 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m.001 4.3q-3.45 0-6.285-1.903-2.837-1.904-4.177-5.097 1.34-3.194 4.175-5.097T12 4.5t6.286 1.903q2.836 1.904 4.177 5.097-1.341 3.195-4.176 5.097T12.001 18.5"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m19.762 21.87-4.046-4.016q-.77.285-1.705.465-.936.18-2.01.181-3.525 0-6.341-1.939-2.815-1.938-4.121-5.061.554-1.325 1.43-2.472A11.4 11.4 0 0 1 4.9 7.038l-2.77-2.8 1.055-1.053 17.63 17.63zM12 15.576q.314 0 .642-.054.33-.053.585-.158l-5.092-5.092q-.104.275-.158.599a4 4 0 0 0-.054.628q0 1.702 1.188 2.89 1.186 1.187 2.89 1.187m6.954.507-3.137-3.111q.118-.32.189-.684.07-.366.071-.789 0-1.702-1.187-2.89Q13.702 7.424 12 7.424q-.422 0-.779.076-.355.076-.684.228L8.035 5.235a10 10 0 0 1 1.936-.556q.99-.18 2.03-.179 3.514 0 6.34 1.939 2.824 1.938 4.12 5.061-.555 1.34-1.435 2.502a11 11 0 0 1-2.072 2.082m-4.27-4.234-3.009-3q.661-.124 1.25.098.586.223 1.012.663.435.44.636 1.033.202.593.112 1.206"/></svg>`,indeterminate:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"logo-color":`<svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill='currentColor'><g clip-path="url(#a)"><path d="M166.39 0c17.638 0 32.976 9.895 40.876 24.493L188.19 34.788c-4.268-7.865-12.516-13.108-21.8-13.108-13.545 0-24.876 11.14-24.876 25.32s11.331 25.32 24.876 25.32c9.476 0 17.925-5.452 22.106-13.596l19.058 10.347C199.723 83.905 184.202 94 166.39 94c-25.713 0-46.556-21.044-46.556-47S140.677 0 166.39 0M56.85 1.673c12.543 0 21.498 9.389 21.498 21.296H26.436c-6.977.993-7.421 11.697 0 12.908H54.08c15.164.41 27.263 12.481 27.263 27.768 0 14.084-11.95 28.238-27.194 28.238H25.643c-12.134 0-25.495-6.55-25.495-21.758.151 0 46.601 0 54.011.009 7.9-1.577 7.02-11.541 0-12.917H26.436C11.68 57.217 0 44.622 0 29.614 0 15.182 10.792 1.673 26.436 1.673zm53.803 90.21H89.349V1.664h21.304zm126.48-90.219v36.182h8.292l22.402-36.182h26.497L263.795 47.35l30.085 44.534h-26.505L244.702 56.93h-7.569v34.953h-21.549V1.664z"/></g><defs><clipPath id="a"><path d="M0 0h295v94H0z"/></clipPath></defs></svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 17.635v-1.5h17v1.5zm0-4.885v-1.5h17v1.5zm0-4.885v-1.5h17v1.5z"/></svg>`,more:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.23 13.5q-.618 0-1.059-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.441-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.62 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.058.44.441.442.441 1.06t-.44 1.06q-.44.44-1.06.44"/></svg>`,"more-vert":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 19.27q-.619 0-1.06-.442a1.44 1.44 0 0 1-.44-1.059q0-.618.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06 0 .62-.44 1.06-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44q.44.441.44 1.06t-.44 1.06-1.06.44m0-5.77q-.619 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.618.44-1.059.442-.44 1.06-.44t1.06.44q.44.44.44 1.06 0 .618-.44 1.06-.442.44-1.06.44"/></svg>`,placeholder:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 20.5V13H5v6h6v1.5zm9.5 0V19h6v-6h1.5v7.5zm-6.25-3.75 2.48-3.289 2 2.558 2.809-3.653 3.288 4.384zM3.5 11V3.5H11V5H5v6zM19 11V5h-6V3.5h7.5V11zm-3.594-1.096q-.566 0-.938-.37a1.26 1.26 0 0 1-.372-.936q0-.566.37-.938t.936-.372.938.37q.371.37.372.936 0 .566-.37.938a1.26 1.26 0 0 1-.936.372"/></svg>`,radio:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill='currentColor'><path d="M6 10.75a4.6 4.6 0 0 1-1.852-.374A4.8 4.8 0 0 1 2.64 9.361a4.8 4.8 0 0 1-1.016-1.508 4.6 4.6 0 0 1-.374-1.852q0-.986.374-1.853.375-.866 1.015-1.508.641-.641 1.508-1.016a4.6 4.6 0 0 1 1.852-.374q.986 0 1.853.374.867.375 1.508 1.015.642.641 1.016 1.508t.374 1.852-.374 1.853A4.8 4.8 0 0 1 9.361 9.36q-.642.642-1.508 1.016a4.6 4.6 0 0 1-1.852.374"/></svg>`,"status-error":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 16.712q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575a.78.78 0 0 0 .576.233m-.75-3.481h1.5V7.192h-1.5zM8.461 20.5 3.5 15.543V8.462L8.457 3.5h7.082L20.5 8.457v7.082L15.543 20.5zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8z"/></svg>`,"status-informative":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 16.75h1.5V11h-1.5zM12 9.289q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575A.78.78 0 0 0 12 9.29m.002 12.211a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-neutral":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.692 21.5-.38-3.046a5.3 5.3 0 0 1-1.579-.896L4.912 18.75l-2.308-4 2.44-1.844a5 5 0 0 1-.049-.448 7 7 0 0 1 0-.882q.014-.22.05-.482L2.603 9.25l2.308-3.98 2.811 1.182a6.4 6.4 0 0 1 .772-.524 5 5 0 0 1 .807-.382l.39-3.046h4.616l.38 3.056q.45.163.815.381t.735.515l2.85-1.183 2.308 3.981-2.479 1.873q.054.243.059.453t.005.424q0 .204-.01.415-.01.21-.069.481l2.46 1.854-2.308 4-2.815-1.202q-.372.296-.758.524a4.6 4.6 0 0 1-.793.372l-.38 3.056zM11 20h1.966l.359-2.679q.765-.2 1.399-.568.634-.369 1.222-.947l2.485 1.044.985-1.7-2.17-1.635q.125-.387.17-.761a6.3 6.3 0 0 0 0-1.508 4 4 0 0 0-.17-.742l2.189-1.654-.985-1.7-2.513 1.06a5.3 5.3 0 0 0-1.203-.949 5.2 5.2 0 0 0-1.418-.582L13 4h-1.985l-.33 2.67a5.2 5.2 0 0 0-1.414.553q-.648.374-1.237.962L5.55 7.15l-.984 1.7 2.159 1.61a3.7 3.7 0 0 0-.175.74 6.3 6.3 0 0 0 0 1.575q.05.375.165.74l-2.15 1.635.985 1.7 2.475-1.05q.57.585 1.217.958t1.433.573zm1.011-5q1.249 0 2.125-.876A2.9 2.9 0 0 0 15.012 12q0-1.248-.876-2.124A2.9 2.9 0 0 0 12.012 9q-1.264 0-2.132.876A2.9 2.9 0 0 0 9.01 12q0 1.248.869 2.124T12.01 15"/></svg>`,"status-success":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m10.58 16.254 6.724-6.723-1.054-1.054-5.67 5.67-2.85-2.85-1.053 1.053zm1.422 5.246a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-warning":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M1.865 20.5 12 3l10.135 17.5zM4.45 19h15.1L12 6zM12 17.808q.343 0 .575-.232a.78.78 0 0 0 .233-.576.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.576a.78.78 0 0 0 .576.232m-.75-2.616h1.5v-5h-1.5z"/></svg>`,sticky_sidebar:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M9.5 19H19V5H9.5zm-6 1.5v-17h17v17z"/></svg>`,"tabs-left":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m7.373 12.75 5.696 5.696L12 19.5 4.5 12 12 4.5l1.07 1.054-5.697 5.696H19.5v1.5z"/></svg>`,"tabs-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M16.627 12.75H4.5v-1.5h12.127l-5.696-5.696L12 4.5l7.5 7.5-7.5 7.5-1.07-1.054z"/></svg>`,"upload-file":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 18.385h1.5V13.95l1.85 1.85 1.054-1.07L12 11.078l-3.654 3.654 1.07 1.053 1.834-1.834zM4.5 21.5v-19h9.75l5.25 5.25V21.5zm9-13V4H6v16h12V8.5z"/></svg>`,"x-circle-fill":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m8.4 16.654 3.6-3.6 3.6 3.6 1.054-1.054-3.6-3.6 3.6-3.6L15.6 7.346l-3.6 3.6-3.6-3.6L7.346 8.4l3.6 3.6-3.6 3.6zm3.602 4.846a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749"/></svg>`,"x-lg":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.4 18.654 5.346 17.6l5.6-5.6-5.6-5.6L6.4 5.346l5.6 5.6 5.6-5.6L18.654 6.4l-5.6 5.6 5.6 5.6-1.054 1.054-5.6-5.6z"/></svg>`},U=mt,wt={name:"system",resolver:t=>t in U?U[t]:""},_t=wt,St=[yt,_t],D=[];function xt(t){D.push(t)}function Ct(t){D=D.filter(e=>e!==t)}function G(t){return St.find(e=>e.name===t)}var zt=p`
  /* Write custom CSS here */
`,kt=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,x=Symbol(),E=Symbol(),O,R=new Map,w=class extends y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let r;if(e?.spriteSheet)return this.svg=_`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library==="system"){if(!t)return x;r=new Response(t,{status:200})}else try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?x:E}catch{return E}try{const a=document.createElement("div");a.innerHTML=await r.text();const s=a.firstElementChild;if(((o=s?.tagName)==null?void 0:o.toLowerCase())!=="svg")return x;O||(O=new DOMParser);const n=O.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):x}catch{return x}}connectedCallback(){super.connectedCallback(),xt(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ct(this)}getIconSource(){const t=G(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),r=o?G(this.library):void 0;if(!e){this.svg=null;return}let a=R.get(e);if(a||(a=this.resolveIcon(e,r),R.set(e,a)),!this.initialRender)return;const s=await a;if(s===E&&R.delete(e),e===this.getIconSource().url){if(ct(s)){if(this.svg=s,r){await this.updateComplete;const l=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&l&&r.mutator(l)}return}switch(s){case E:case x:this.svg=null,this.emit("syn-error");break;default:this.svg=s.cloneNode(!0),(t=r?.mutator)==null||t.call(r,this.svg),this.emit("syn-load")}}}render(){return this.svg}};w.styles=[k,kt,zt];i([$()],w.prototype,"svg",2);i([c({reflect:!0})],w.prototype,"name",2);i([c()],w.prototype,"src",2);i([c()],w.prototype,"label",2);i([c({reflect:!0})],w.prototype,"library",2);i([S("label")],w.prototype,"handleLabelChange",1);i([S(["name","src","library"])],w.prototype,"setIcon",1);var at={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Choose file",fileButtonTextMultiple:"Choose files",fileDragDrop:"Drop or choose file",folderButtonText:"Choose folder",folderDragDrop:"Drop or choose folder",menu:"Menu",noResults:"No results found",notification:"Notification",numFilesSelected:(t,e)=>t===0?`No ${e?"folder":"files"} chosen`:`${t} files`,openMenu:"Open menu",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Side navigation",sideNavHide:"Hide navigation",sideNavShow:"Show navigation",success:"Success",warning:"Warning"};Z(at);var Tt=at,st=class extends ut{};Z(Tt);var Bt={autoClamp:!1,noStepAlign:!1,noStepValidation:!1},it={autoClamp:!0,noStepAlign:!0,noStepValidation:!0},ae=(t={})=>A(A({},Bt),t),At={delimiter:{SynSelect:" "},numericStrategy:{SynInput:it},size:{SynAccordion:"medium",SynAlert:"medium",SynButton:"medium",SynButtonGroup:"medium",SynCheckbox:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynButtonGroup:"outline",SynSideNav:"default",SynValidate:"native"}},$t={delimiter:{SynSelect:" "},numericStrategy:{SynInput:it},size:{SynAccordion:"medium",SynAlert:"medium",SynButton:"medium",SynButtonGroup:"medium",SynCheckbox:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynButtonGroup:"outline",SynSideNav:"default",SynValidate:"native"}},j=new Map,Y=new Set,qt=t=>{Y.has(t)&&Y.delete(t)},K=(t,e="default")=>{const o=e==="default"?At:$t;if(e==="default"){const a=j.get(t);if(typeof a<"u")return a}const r=Object.entries(o).reduce((a,[s,l])=>{const n=l[t];return n&&(a[s]=n),a},{});return e==="default"&&j.set(t,r),r};function Et(t){return e=>{var o,r,a,s,l;return l=class extends e{constructor(...n){super(...n),B(this,o,!1),B(this,r,new Map),B(this,a,[]),B(this,s),this._isInitialized=!1,this._isInitialized=!0,P(this,s,K(t,"initial"))}get __originalDecoratedClassName(){return t}overrideGlobalSettings(n){n.forEach(u=>{v(this,r).has(u.attribute)&&(this[u.attribute]=u.newValue)})}disconnectedCallback(){super.disconnectedCallback(),qt(this)}requestUpdate(n,u,b){var m;super.requestUpdate(n,u,b),!(!this._isInitialized||v(this,o)||!n||!(n in v(this,s))||(m=v(this,a))!=null&&m.includes(n))&&v(this,a).push(n)}willUpdate(n){if(super.willUpdate(n),v(this,o))return;P(this,o,!0);const u=K(t);Object.entries(u).forEach(([b,m])=>{const T=this[b],nt=v(this,s)[b];T===nt&&!v(this,a).includes(b)&&(v(this,r).set(b,T),this[b]=m)}),v(this,r).size>0}},o=new WeakMap,r=new WeakMap,a=new WeakMap,s=new WeakMap,l}}var Lt=p`
  /* stylelint-disable no-descending-specificity */
  /* Write custom CSS here */
  :host {
    --track-width: var(--syn-border-width-small);
    --track-color: var(--syn-panel-border-color);
    --indicator-width: var(--syn-border-width-x-large);
    --indicator-color: var(--syn-interactive-emphasis-color);
  }

  /* we need to augment the size of the height of the tab-group__nav to make the focus outline and the hiding white border visible of the tab because of overflow-x value  */
  .tab-group--top .tab-group__body {
    position: relative;
    top: calc(-1 * var(--syn-panel-border-width));
  }

  .tab-group--top .tab-group__nav {
    padding: 0 0 var(--syn-panel-border-width) 0;
  }

  /**
   * Indicator
   */
  .tab-group--top .tab-group__indicator {
    border-bottom: solid var(--indicator-width) var(--indicator-color);
  }

  .tab-group--start .tab-group__indicator {
    border-right: solid var(--indicator-width) var(--indicator-color);
  }

  .tab-group--end .tab-group__indicator {
    border-inline-start: solid var(--indicator-width) var(--indicator-color);
  }

  /**
   * Panel
   */
  .tab-group--top ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-large) 0;
  }

  .tab-group--start ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-large);
  }

  .tab-group--end ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-large);
  }

  /**
   * Contained styling
   */ 
  .tab-group--contained .tab-group__tabs {
    border: none;
  }

  .tab-group--contained ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-large);

    background-color: var(--syn-panel-background-color);
    border: var(--syn-panel-border-width) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
  }

  /* Stretch the tab panel container for non-top placements, otherwise the borders are not drawn correctly */
  .tab-group--contained:not(.tab-group--top) ::slotted(syn-tab-panel) {
    height: 100%;
  }

  /* Draw the correct border radii of the panel depending on the placement and direction */
  .tab-group--top.tab-group--contained:not(.tab-group--sharp):not(.tab-group--has-scroll-controls) ::slotted(syn-tab-panel:first-of-type),
  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:first-of-type) {
    border-start-start-radius: var(--syn-border-radius-none);
  }

  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:last-of-type) {
    border-end-start-radius: var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:last-of-type) {
    border-end-end-radius: var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:first-of-type) {
    border-start-end-radius: var(--syn-border-radius-none);
  }

  .tab-group--contained .tab-group__indicator {
    /* Remove the animation of the indicator */
    transition: none;
    
    /* Needed, otherwise the indicator is hidden under the background of the tab */
    z-index: 2;
  }

  /* Contained styling for tabs */
  .tab-group--contained ::slotted(syn-tab) {
    --background-color: var(--syn-panel-background-color);
    --border-width: var(--syn-panel-border-width);

    position: relative;
    z-index: 1;
  }

  /* Top */
  .tab-group--top.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-medium) var(--syn-border-radius-medium) var(--syn-border-radius-none) var(--syn-border-radius-none);
  }

  .tab-group--top.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-background-color);

    /* We need to move the tab down, so the bottom border, hides parts of the border of the tab-group */
    top: var(--syn-panel-border-width);
  }

  .tab-group--top.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move down the non-active tabs also, so we don't get jumping of the tab text content */
    top: var(--syn-panel-border-width);
  }

  /* Start & End with rtl */
  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab),
  .tab-group--end.tab-group--rtl.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-medium) var(--syn-border-radius-none) var(--syn-border-radius-none) var(--syn-border-radius-medium);
  }

  .tab-group--start.tab-group--contained ::slotted(syn-tab[active]),
  .tab-group--end.tab-group--rtl.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-background-color) var(--syn-panel-border-color)  var(--syn-panel-border-color) ;

    /* We need to move the tab right, so the right border, hides parts of the border of the tab-group */
    left: var(--syn-panel-border-width);
    right: unset;
  }

  .tab-group--start.tab-group--contained ::slotted(syn-tab:not([active])),
  .tab-group--end.tab-group--rtl.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move right the non-active tabs also, so we don't get jumping of the tab text content */
    left: var(--syn-panel-border-width);
    right: unset;
  }

  /* End & Start with rtl */
  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab),
  .tab-group--start.tab-group--rtl.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-none) var(--syn-border-radius-medium) var(--syn-border-radius-medium) var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained ::slotted(syn-tab[active]),
  .tab-group--start.tab-group--rtl.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-background-color);

    /* We need to move the tab left, so the left border, hides parts of the border of the tab-group */
    left: unset;
    right: var(--syn-panel-border-width);
  }

  .tab-group--end.tab-group--contained ::slotted(syn-tab:not([active])),
  .tab-group--start.tab-group--rtl.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move left the non-active tabs also, so we don't get jumping of the tab text content */
    left: unset;
    right: var(--syn-panel-border-width);
  }


  /**
   * Sharp styling
   */
  .tab-group--sharp ::slotted(syn-tab-panel) {
    border-radius: var(--syn-border-radius-none);
  }


  /**
   * Scroll buttons
   */
  .tab-group--has-scroll-controls .tab-group__nav-container {
    padding: 0 calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button {
    /* we need to move the scroll buttons to the top, to align the borders with the border of the tab-group--nav  */
    bottom: var(--syn-panel-border-width);
    color: var(--syn-interactive-quiet-color);
    font-size: var(--syn-font-size-medium);
    width: calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button::part(base) {
    padding: calc(var(--syn-spacing-small) - var(--syn-spacing-3x-small));
  }

  .tab-group--has-scroll-controls:not(.tab-group--contained) .tab-group__scroll-button {
    border-bottom: solid var(--track-width) var(--track-color);
  }

  /**
   * Shoelace 2.17 introduced a new attribute "fixed-scroll-controls".
   * Per default, tab-groups now hide the scroll buttons when they are not needed.
   * "fixed-scroll-controls" will keep the scroll buttons visible at all times,
   * which is the default behavior of Synergy.
   * For this reason, we make the buttons visible by default, but show them in a "disabled" state when they are not needed.
   */
  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: visible;
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden::part(base),
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden::part(base) {
    opacity: var(--syn-input-disabled-opacity);
    pointer-events: none;
  }
`,It=p`
	/* stylelint-disable */
  :host {
    --indicator-color: var(--syn-color-primary-600);
    --track-color: var(--syn-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--syn-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--syn-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-medium);
  }
`,Mt=p`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`,M=class extends y{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("syn-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(o=>this.resizeObserver.unobserve(o)),this.observedElements=[],e.forEach(o=>{this.resizeObserver.observe(o),this.observedElements.push(o)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return _` <slot @slotchange=${this.handleSlotChange}></slot> `}};M.styles=[k,Mt];i([c({type:Boolean,reflect:!0})],M.prototype,"disabled",2);i([S("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);function Ot(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function X(t,e,o="vertical",r="smooth"){const a=Ot(t,e),s=a.top+e.scrollTop,l=a.left+e.scrollLeft,n=e.scrollLeft,u=e.scrollLeft+e.offsetWidth,b=e.scrollTop,m=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(l<n?e.scrollTo({left:l,behavior:r}):l+t.clientWidth>u&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:r})),(o==="vertical"||o==="both")&&(s<b?e.scrollTo({top:s,behavior:r}):s+t.clientHeight>m&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:r}))}var Rt=p`
  .icon-button {
    border-radius: 0;
    color: currentColor;
    font-size: inherit;
  }

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);

    /** #429: Use token for opacity */
    opacity: var(--syn-input-disabled-opacity);
  }

  /* Remove round borders */
  .icon-button:focus-visible {
    border-radius: var(--syn-icon-button-focus-ring-border-radius);
  }

  /* Colors */
  :host([color="currentColor"]) {
    color: currentColor;
  }

  :host([color="primary"]),
  :host([color="primary"]) .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color);
  }

  :host([color="primary"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color-hover);
  }

  :host([color="primary"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color-active);
  }

  :host([color="neutral"]) {
    color: var(--syn-interactive-quiet-color);
  }

  :host([color="neutral"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-interactive-quiet-color-hover);
  }

  :host([color="neutral"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-interactive-quiet-color-active);
  }

  :host([color="neutral"]) .icon-button:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-interactive-quiet-color);
  }

  /* Sizes */
  .icon-button--small {
    font-size: var(--syn-font-size-medium);
  }

  .icon-button--medium {
    font-size: var(--syn-font-size-x-large);
  }

  .icon-button--large {
    font-size: var(--syn-font-size-2x-large);
  }

  /* Force user to set "label" prop */
  .icon-button[aria-label=""] {
    border: var(--syn-border-width-large) var(--syn-color-error-600) solid;
  }

  .icon-button[aria-label=""]::after {
    content: "Set label prop for a11y to get rid of this text and border!";
    font-size: var(--syn-font-size-2x-small);
    margin-left: var(--syn-spacing-2x-small);
  }
`,Pt=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
    color: var(--syn-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--syn-spacing-x-small);
    cursor: pointer;
    transition: var(--syn-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,h=class extends y{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?V`a`:V`button`;return dt`
      <${e}
        part="base"
        class=${C({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large"})}
        ?disabled=${f(t?void 0:this.disabled)}
        type=${f(t?void 0:"button")}
        href=${f(t?this.href:void 0)}
        target=${f(t?this.target:void 0)}
        download=${f(t?this.download:void 0)}
        rel=${f(t&&this.target?"noreferrer noopener":void 0)}
        role=${f(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${f(this.name)}
          library=${f(this.library)}
          src=${f(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${e}>
    `}};h.styles=[k,Pt,Rt];h.dependencies={"syn-icon":w};i([z(".icon-button")],h.prototype,"button",2);i([$()],h.prototype,"hasFocus",2);i([c()],h.prototype,"name",2);i([c()],h.prototype,"library",2);i([c()],h.prototype,"src",2);i([c()],h.prototype,"href",2);i([c()],h.prototype,"target",2);i([c()],h.prototype,"download",2);i([c()],h.prototype,"label",2);i([c({reflect:!0})],h.prototype,"size",2);i([c({reflect:!0})],h.prototype,"color",2);i([c({type:Boolean,reflect:!0})],h.prototype,"disabled",2);h=i([Et("SynIconButton")],h);var Ht=(t,e)=>{let o=0;return function(...r){window.clearTimeout(o),o=window.setTimeout(()=>{t.call(this,...r)},e)}},Q=(t,e,o)=>{const r=t[e];t[e]=function(...a){r.call(this,...a),o.call(this,r,...a)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,o=new WeakMap,r=s=>{for(const l of s.changedTouches)e.add(l.identifier)},a=s=>{for(const l of s.changedTouches)e.delete(l.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",a,!0),document.addEventListener("touchcancel",a,!0),Q(EventTarget.prototype,"addEventListener",function(s,l){if(l!=="scrollend")return;const n=Ht(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",n,{passive:!0}),o.set(this,n)}),Q(EventTarget.prototype,"removeEventListener",function(s,l){if(l!=="scrollend")return;const n=o.get(this);n&&s.call(this,"scroll",n,{passive:!0})})}})();var d=class extends y{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new st(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const o=e.filter(({target:r})=>{if(r===this)return!0;if(r.closest("syn-tab-group")!==this)return!1;const a=r.tagName.toLowerCase();return a==="syn-tab"||a==="syn-tab-panel"});if(o.length!==0){if(o.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),o.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(o.some(r=>r.attributeName==="active")){const a=o.filter(s=>s.attributeName==="active"&&s.target.tagName.toLowerCase()==="syn-tab").map(s=>s.target).find(s=>s.active);a&&this.setActiveTab(a)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,r)=>{var a;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((a=this.getActiveTab())!=null?a:this.tabs[0],{emitEvents:!1}),r.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const o=t.target.closest("syn-tab");o?.closest("syn-tab-group")===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){const o=t.target.closest("syn-tab");if(o?.closest("syn-tab-group")===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const a=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";let l=null;if(a?.tagName.toLowerCase()==="syn-tab"){if(t.key==="Home")l=this.focusableTabs[0];else if(t.key==="End")l=this.focusableTabs[this.focusableTabs.length-1];else if(["top"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const n=this.tabs.findIndex(u=>u===a);l=this.findNextFocusableTab(n,"backward")}else if(["top"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const n=this.tabs.findIndex(u=>u===a);l=this.findNextFocusableTab(n,"forward")}if(!l)return;l.tabIndex=0,l.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(l,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===l?0:-1}),["top"].includes(this.placement)&&X(l,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=A({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var a;return r.active=r.name===((a=this.activeTab)==null?void 0:a.panel)}),this.syncIndicator(),["top"].includes(this.placement)&&X(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("syn-tab-hide",{detail:{name:o.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,r=this.localize.dir()==="rtl",s=this.tabs.slice(0,this.tabs.indexOf(t)).reduce((l,n)=>({left:l.left+n.clientWidth,top:l.top+n.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${e}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${r?"-":""}1 * (${s.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${o}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${s.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let o=null;const r=e==="forward"?1:-1;let a=t+r;for(;t<this.tabs.length;){if(o=this.tabs[a]||null,o===null){e==="forward"?o=this.focusableTabs[0]:o=this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;a+=r}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(o=>o.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}preventFocus(t){t.preventDefault()}render(){const t=this.localize.dir()==="rtl";return _`
      <div
        part="base"
        class=${C({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?_`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${C({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"tabs-right":"tabs-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToStart}
                ></syn-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <syn-resize-observer @syn-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </syn-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?_`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${C({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"tabs-left":"tabs-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToEnd}
                ></syn-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};d.styles=[k,It,Lt];d.dependencies={"syn-icon-button":h,"syn-resize-observer":M};i([J({slot:"nav",selector:"syn-tab"})],d.prototype,"tabs",2);i([J({selector:"syn-tab-panel"})],d.prototype,"panels",2);i([z(".tab-group")],d.prototype,"tabGroup",2);i([z(".tab-group__body")],d.prototype,"body",2);i([z(".tab-group__nav")],d.prototype,"nav",2);i([z(".tab-group__indicator")],d.prototype,"indicator",2);i([$()],d.prototype,"hasScrollControls",2);i([$()],d.prototype,"shouldHideScrollStartButton",2);i([$()],d.prototype,"shouldHideScrollEndButton",2);i([c()],d.prototype,"placement",2);i([c()],d.prototype,"activation",2);i([c({attribute:"no-scroll-controls",type:Boolean})],d.prototype,"noScrollControls",2);i([c({type:Boolean})],d.prototype,"contained",2);i([c({type:Boolean})],d.prototype,"sharp",2);i([c({attribute:"fixed-scroll-controls",type:Boolean})],d.prototype,"fixedScrollControls",2);i([ht({passive:!0})],d.prototype,"updateScrollButtons",1);i([S("noScrollControls",{waitUntilFirstUpdate:!0})],d.prototype,"updateScrollControls",1);i([S("placement",{waitUntilFirstUpdate:!0})],d.prototype,"syncIndicator",1);d.define("syn-tab-group");var Dt=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    border-radius: var(--syn-border-radius-medium);
    color: var(--syn-color-neutral-600);
    padding: var(--syn-spacing-medium) var(--syn-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: calc(-1 * var(--syn-focus-ring-width) - var(--syn-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--syn-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--syn-font-size-small);
    margin-inline-start: var(--syn-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ft=p`
  :host {
    --background-color: none;
    --border-width: var(--syn-border-width-none);
    --border-color: none;
    --border-radius: var(--syn-border-radius-none);
  }

  .tab {
    border-color: transparent;
    border-radius: var(--border-radius);
    border-style: solid;
    border-width: var(--border-width);
    color: var(--syn-typography-color-text);
    font: var(--syn-body-small-bold);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);

    /* Stretch the tabs so they are aligned to each other vertically and the focus width stays the same  */
    width: 100%;
  }


  /** #429: Use token for opacity */
  .tab.tab--disabled {
    opacity: var(--syn-opacity-50);
  }

  /**
   * Focus
   */
  :host(:focus-visible) {
    outline-offset: calc(var(--syn-focus-ring-offset) * -1);
  }

  :host(:focus-visible:not(.tab--disabled)) {
    color: var(--syn-typography-color-text);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline-offset: calc(var(--syn-focus-ring-offset) * -1);
    }
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-interactive-emphasis-color);
  }

  .tab.tab--active:not(:hover):not(.tab--disabled) {
    color: var(--syn-typography-color-text);
  }

  /**
   * Closable
   */
  .tab.tab--closable {
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-large);
  }

  .tab__close-button {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-x-small);
  }

  .tab__close-button::part(base):hover {
    color: var(--syn-input-icon-icon-clearable-color-hover);
  }

  .tab--active {
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-style: solid;
    border-width: var(--border-width);
  }

  /* Slotted icon style */
  .tab ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /* #969: Prevent interactive color when close button is hovered */
  .tab.tab--closable:hover:has(.tab__close-button:hover) {
    color: var(--syn-typography-color-text);
  }
`,Vt=0,g=class extends y{constructor(){super(...arguments),this.localize=new st(this),this.attrId=++Vt,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,_`
      <div
        part="base"
        class=${C({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?_`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></syn-icon-button>
            `:""}
      </div>
    `}};g.styles=[k,Dt,Ft];g.dependencies={"syn-icon-button":h};i([z(".tab")],g.prototype,"tab",2);i([c({reflect:!0})],g.prototype,"panel",2);i([c({type:Boolean,reflect:!0})],g.prototype,"active",2);i([c({type:Boolean,reflect:!0})],g.prototype,"closable",2);i([c({type:Boolean,reflect:!0})],g.prototype,"disabled",2);i([c({type:Number,reflect:!0})],g.prototype,"tabIndex",2);i([S("active")],g.prototype,"handleActiveChange",1);i([S("disabled")],g.prototype,"handleDisabledChange",1);g.define("syn-tab");var Nt=p`
	/* stylelint-disable */
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Wt=p`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`,Ut=0,q=class extends y{constructor(){super(...arguments),this.attrId=++Ut,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return _`
      <slot
        part="base"
        class=${C({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};q.styles=[k,Nt,Wt];i([c({reflect:!0})],q.prototype,"name",2);i([c({type:Boolean,reflect:!0})],q.prototype,"active",2);i([S("active")],q.prototype,"handleActiveChange",1);q.define("syn-tab-panel");export{st as L,y as S,oe as _,A as a,i as b,k as c,ee as d,w as e,Et as f,B as g,P as h,ae as i,v as j,re as k,it as m,Bt as n,S as w};
