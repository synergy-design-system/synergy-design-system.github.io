import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,n as r,t as i}from"./lit-BfcklOOD.js";import{C as a,f as o,g as ee,p as te,x as ne}from"./library-Di7sLxEc.js";import{_ as s,f as c,h as re,l as ie,s as l,y as u}from"./synergy-element-B1XRUXNb.js";import{r as d,t as ae}from"./if-defined-gcdQCgEY.js";import{n as f,t as p}from"./class-map-ivi47HnP.js";function m(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var h=e((()=>{})),g,_=e((()=>{i(),g=n`
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
`})),oe,se,ce,v,y,b,x,S,le,C=e((()=>{oe=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ce=e=>{throw TypeError(e)},v=(e,t,n,r)=>{for(var i=r>1?void 0:r?se(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&oe(t,n,i),i},y=(e,t,n)=>t.has(e)||ce(`Cannot `+n),b=(e,t,n)=>(y(e,t,`read from private field`),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?ce(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),S=(e,t,n,r)=>(y(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),le=(e,t,n)=>(y(e,t,`access private method`),n)})),w,T,E=e((()=>{C(),i(),l(),T=class extends r{constructor(){super(),x(this,w,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){b(this,w)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),S(this,w,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}},w=new WeakMap,T.version=`3.21.0`,T.dependencies={},v([u()],T.prototype,`dir`,2),v([u()],T.prototype,`lang`,2)})),ue,D=e((()=>{i(),ue=n`
  /* Write custom CSS here */
`})),de,O=e((()=>{i(),de=n`
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
`}));function fe(e){k=e}function pe(e=``){if(!k){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-synergy`));if(t)fe(t.getAttribute(`data-synergy`));else{let t=e.find(e=>/synergy(\.min)?\.js($|\?)/.test(e.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),fe(n.split(`/`).slice(0,-1).join(`/`))}}return k.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var k,me=e((()=>{k=``})),he,ge=e((()=>{me(),he={name:`default`,resolver:e=>pe(`assets/icons/${e}.svg`)}})),_e,ve=e((()=>{_e={add:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.55 17.654-5.334-5.335 1.069-1.069 4.265 4.265 9.166-9.165 1.069 1.07z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 15.039 6.346 9.384 7.4 8.331l4.6 4.6 4.6-4.6 1.054 1.053z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,"details-close":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"details-open":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12.002 15.577q1.7 0 2.888-1.19t1.187-2.89-1.19-2.886-2.89-1.188-2.886 1.19-1.188 2.89 1.19 2.887 2.89 1.187M12 14.2q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.788-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.913.787.787.788.787 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m.001 4.3q-3.45 0-6.285-1.903-2.837-1.904-4.177-5.097 1.34-3.194 4.175-5.097T12 4.5t6.286 1.903q2.836 1.904 4.177 5.097-1.341 3.195-4.176 5.097T12.001 18.5"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m19.762 21.87-4.046-4.016q-.77.285-1.705.465-.936.18-2.01.181-3.525 0-6.341-1.939-2.815-1.938-4.121-5.061.554-1.325 1.43-2.472A11.4 11.4 0 0 1 4.9 7.038l-2.77-2.8 1.055-1.053 17.63 17.63zM12 15.576q.314 0 .642-.054.33-.053.585-.158l-5.092-5.092q-.104.275-.158.599a4 4 0 0 0-.054.628q0 1.702 1.188 2.89 1.186 1.187 2.89 1.187m6.954.507-3.137-3.111q.118-.32.189-.684.07-.366.071-.789 0-1.702-1.187-2.89Q13.702 7.424 12 7.424q-.422 0-.779.076-.355.076-.684.228L8.035 5.235a10 10 0 0 1 1.936-.556q.99-.18 2.03-.179 3.514 0 6.34 1.939 2.824 1.938 4.12 5.061-.555 1.34-1.435 2.502a11 11 0 0 1-2.072 2.082m-4.27-4.234-3.009-3q.661-.124 1.25.098.586.223 1.012.663.435.44.636 1.033.202.593.112 1.206"/></svg>`,"first-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.25 17.75V6.25h1.5v11.5zM17 17.654 11.346 12 17 6.346 18.054 7.4l-4.6 4.6 4.6 4.6z"/></svg>`,indeterminate:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"last-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M7 17.654 5.946 16.6l4.6-4.6-4.6-4.6L7 6.346 12.654 12zm9.25.096V6.25h1.5v11.5z"/></svg>`,"logo-color":`<svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill='currentColor'><g clip-path="url(#a)"><path d="M166.39 0c17.638 0 32.976 9.895 40.876 24.493L188.19 34.788c-4.268-7.865-12.516-13.108-21.8-13.108-13.545 0-24.876 11.14-24.876 25.32s11.331 25.32 24.876 25.32c9.476 0 17.925-5.452 22.106-13.596l19.058 10.347C199.723 83.905 184.202 94 166.39 94c-25.713 0-46.556-21.044-46.556-47S140.677 0 166.39 0M56.85 1.673c12.543 0 21.498 9.389 21.498 21.296H26.436c-6.977.993-7.421 11.697 0 12.908H54.08c15.164.41 27.263 12.481 27.263 27.768 0 14.084-11.95 28.238-27.194 28.238H25.643c-12.134 0-25.495-6.55-25.495-21.758.151 0 46.601 0 54.011.009 7.9-1.577 7.02-11.541 0-12.917H26.436C11.68 57.217 0 44.622 0 29.614 0 15.182 10.792 1.673 26.436 1.673zm53.803 90.21H89.349V1.664h21.304zm126.48-90.219v36.182h8.292l22.402-36.182h26.497L263.795 47.35l30.085 44.534h-26.505L244.702 56.93h-7.569v34.953h-21.549V1.664z"/></g><defs><clipPath id="a"><path d="M0 0h295v94H0z"/></clipPath></defs></svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 17.635v-1.5h17v1.5zm0-4.885v-1.5h17v1.5zm0-4.885v-1.5h17v1.5z"/></svg>`,more:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.23 13.5q-.618 0-1.059-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.441-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.62 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.058.44.441.442.441 1.06t-.44 1.06q-.44.44-1.06.44"/></svg>`,"more-vert":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 19.27q-.619 0-1.06-.442a1.44 1.44 0 0 1-.44-1.059q0-.618.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06 0 .62-.44 1.06-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.618.44-1.058.442-.441 1.06-.441t1.06.44q.44.44.44 1.06 0 .618-.44 1.06-.442.44-1.06.44"/></svg>`,"next-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,placeholder:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 20.5V13H5v6h6v1.5zm9.5 0V19h6v-6h1.5v7.5zm-6.25-3.75 2.48-3.289 2 2.558 2.809-3.653 3.288 4.384zM3.5 11V3.5H11V5H5v6zM19 11V5h-6V3.5h7.5V11zm-3.594-1.096q-.566 0-.938-.37a1.26 1.26 0 0 1-.372-.936q0-.566.37-.938t.936-.372.938.37q.371.37.372.936 0 .566-.37.938a1.26 1.26 0 0 1-.936.372"/></svg>`,"previous-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M14 17.654 8.346 12 14 6.346 15.054 7.4l-4.6 4.6 4.6 4.6z"/></svg>`,radio:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill='currentColor'><path d="M6 10.75a4.6 4.6 0 0 1-1.852-.374A4.8 4.8 0 0 1 2.64 9.361a4.8 4.8 0 0 1-1.016-1.508 4.6 4.6 0 0 1-.374-1.852q0-.986.374-1.853.375-.866 1.015-1.508.641-.641 1.508-1.016a4.6 4.6 0 0 1 1.852-.374q.986 0 1.853.374.867.375 1.508 1.015.642.641 1.016 1.508t.374 1.852-.374 1.853A4.8 4.8 0 0 1 9.361 9.36q-.642.642-1.508 1.016a4.6 4.6 0 0 1-1.852.374"/></svg>`,"status-critical":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 13.317h1.5V7.241h-1.5zm.75 2.385q.343 0 .576-.232a.78.78 0 0 0 .232-.576.78.78 0 0 0-.232-.575.78.78 0 0 0-.576-.233.78.78 0 0 0-.575.233.78.78 0 0 0-.233.575q0 .344.233.576a.78.78 0 0 0 .575.232m0 6.387L1.912 12 12 1.912 22.09 12zM12 20l8-8-8-8-8 8z"/></svg>`,"status-error":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 16.712q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575a.78.78 0 0 0 .576.233m-.75-3.481h1.5V7.192h-1.5zM8.461 20.5 3.5 15.543V8.462L8.457 3.5h7.082L20.5 8.457v7.082L15.543 20.5zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8z"/></svg>`,"status-informative":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 16.75h1.5V11h-1.5zM12 9.289q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575A.78.78 0 0 0 12 9.29m.002 12.211a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-neutral":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.692 21.5-.38-3.046a5.3 5.3 0 0 1-1.579-.896L4.912 18.75l-2.308-4 2.44-1.844a5 5 0 0 1-.049-.448 7 7 0 0 1 0-.882q.014-.22.05-.482L2.603 9.25l2.308-3.98 2.811 1.182a6.4 6.4 0 0 1 .772-.524 5 5 0 0 1 .807-.382l.39-3.046h4.616l.38 3.056q.45.163.815.381t.735.515l2.85-1.183 2.308 3.981-2.479 1.873q.054.243.059.453t.005.424q0 .204-.01.415-.01.21-.069.481l2.46 1.854-2.308 4-2.815-1.202q-.372.296-.758.524a4.6 4.6 0 0 1-.793.372l-.38 3.056zM11 20h1.966l.359-2.679q.765-.2 1.399-.568.634-.369 1.222-.947l2.485 1.044.985-1.7-2.17-1.635q.125-.387.17-.761a6.3 6.3 0 0 0 0-1.508 4 4 0 0 0-.17-.742l2.189-1.654-.985-1.7-2.513 1.06a5.3 5.3 0 0 0-1.203-.949 5.2 5.2 0 0 0-1.418-.582L13 4h-1.985l-.33 2.67a5.2 5.2 0 0 0-1.414.553q-.648.374-1.237.962L5.55 7.15l-.984 1.7 2.159 1.61a3.7 3.7 0 0 0-.175.74 6.3 6.3 0 0 0 0 1.575q.05.375.165.74l-2.15 1.635.985 1.7 2.475-1.05q.57.585 1.217.958t1.433.573zm1.011-5q1.249 0 2.125-.876A2.9 2.9 0 0 0 15.012 12q0-1.248-.876-2.124A2.9 2.9 0 0 0 12.012 9q-1.264 0-2.132.876A2.9 2.9 0 0 0 9.01 12q0 1.248.869 2.124T12.01 15"/></svg>`,"status-success":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m10.58 16.254 6.724-6.723-1.054-1.054-5.67 5.67-2.85-2.85-1.053 1.053zm1.422 5.246a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-warning":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M1.865 20.5 12 3l10.135 17.5zM4.45 19h15.1L12 6zM12 17.808q.343 0 .575-.232a.78.78 0 0 0 .233-.576.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.576a.78.78 0 0 0 .576.232m-.75-2.616h1.5v-5h-1.5z"/></svg>`,sticky_sidebar:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M9.5 19H19V5H9.5zm-6 1.5v-17h17v17z"/></svg>`,"tabs-left":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m7.373 12.75 5.696 5.696L12 19.5 4.5 12 12 4.5l1.07 1.054-5.697 5.696H19.5v1.5z"/></svg>`,"tabs-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M16.627 12.75H4.5v-1.5h12.127l-5.696-5.696L12 4.5l7.5 7.5-7.5 7.5-1.07-1.054z"/></svg>`,"upload-file":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 18.385h1.5V13.95l1.85 1.85 1.054-1.07L12 11.078l-3.654 3.654 1.07 1.053 1.834-1.834zM4.5 21.5v-19h9.75l5.25 5.25V21.5zm9-13V4H6v16h12V8.5z"/></svg>`,"x-circle-fill":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m8.4 16.654 3.6-3.6 3.6 3.6 1.054-1.054-3.6-3.6 3.6-3.6L15.6 7.346l-3.6 3.6-3.6-3.6L7.346 8.4l3.6 3.6-3.6 3.6zm3.602 4.846a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749"/></svg>`,"x-lg":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.4 18.654 5.346 17.6l5.6-5.6-5.6-5.6L6.4 5.346l5.6 5.6 5.6-5.6L18.654 6.4l-5.6 5.6 5.6 5.6-1.054 1.054-5.6-5.6z"/></svg>`}})),ye,be,xe=e((()=>{ve(),ye=_e,be={name:`system`,resolver:e=>e in ye?ye[e]:``}}));function Se(e){A.push(e)}function Ce(e){A=A.filter(t=>t!==e)}function we(e){return Te.find(t=>t.name===e)}var Te,A,Ee=e((()=>{ge(),xe(),Te=[he,be],A=[]})),j,M,De,N,P,F=e((()=>{D(),O(),Ee(),h(),_(),E(),C(),i(),ne(),l(),j=Symbol(),M=Symbol(),N=new Map,P=class extends T{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,n){let r;if(n?.spriteSheet)return this.svg=t`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return j;r=new Response(e,{status:200})}else try{if(r=await fetch(e,{mode:`cors`}),!r.ok)return r.status===410?j:M}catch{return M}try{let e=document.createElement(`div`);e.innerHTML=await r.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return j;De||=new DOMParser;let n=De.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return n?(n.part.add(`svg`),document.adoptNode(n)):j}catch{return j}}connectedCallback(){super.connectedCallback(),Se(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ce(this)}getIconSource(){let e=we(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?we(this.library):void 0;if(!e){this.svg=null;return}let r=N.get(e);if(r||(r=this.resolveIcon(e,n),N.set(e,r)),!this.initialRender)return;let i=await r;if(i===M&&N.delete(e),e===this.getIconSource().url){if(a(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case M:case j:this.svg=null,this.emit(`syn-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}},P.styles=[g,de,ue],v([s()],P.prototype,`svg`,2),v([u({reflect:!0})],P.prototype,`name`,2),v([u()],P.prototype,`src`,2),v([u()],P.prototype,`label`,2),v([u({reflect:!0})],P.prototype,`library`,2),v([m(`label`)],P.prototype,`handleLabelChange`,1),v([m([`name`,`src`,`library`])],P.prototype,`setIcon`,1)})),I,L,Oe,ke=e((()=>{I={autoClamp:!1,noStepAlign:!1,noStepValidation:!1},L={autoClamp:!0,noStepAlign:!0,noStepValidation:!0},Oe=(e={})=>({...I,...e})})),Ae,je,Me=e((()=>{ke(),Ae={delimiter:{SynCombobox:` `,SynOption:` `,SynSelect:` `},numericStrategy:{SynInput:L},size:{SynAccordion:`medium`,SynAlert:`medium`,SynButton:`medium`,SynButtonGroup:`medium`,SynCheckbox:`medium`,SynCheckboxGroup:`medium`,SynCombobox:`medium`,SynDetails:`medium`,SynFile:`medium`,SynIconButton:`inherit`,SynInput:`medium`,SynPagination:`medium`,SynRadio:`medium`,SynRadioButton:`medium`,SynRadioGroup:`medium`,SynRange:`medium`,SynSelect:`medium`,SynSwitch:`medium`,SynTag:`medium`,SynTagGroup:`medium`,SynTextarea:`medium`},variant:{SynAlert:`primary`,SynBadge:`primary`,SynButton:`outline`,SynButtonGroup:`outline`,SynPagination:`full`,SynSideNav:`default`,SynValidate:`native`}},je={delimiter:{SynCombobox:` `,SynOption:` `,SynSelect:` `},numericStrategy:{SynInput:L},size:{SynAccordion:`medium`,SynAlert:`medium`,SynButton:`medium`,SynButtonGroup:`medium`,SynCheckbox:`medium`,SynCheckboxGroup:`medium`,SynCombobox:`medium`,SynDetails:`medium`,SynFile:`medium`,SynIconButton:`inherit`,SynInput:`medium`,SynPagination:`medium`,SynRadio:`medium`,SynRadioButton:`medium`,SynRadioGroup:`medium`,SynRange:`medium`,SynSelect:`medium`,SynSwitch:`medium`,SynTag:`medium`,SynTagGroup:`medium`,SynTextarea:`medium`},variant:{SynAlert:`primary`,SynBadge:`primary`,SynButton:`outline`,SynButtonGroup:`outline`,SynPagination:`full`,SynSideNav:`default`,SynValidate:`native`}}})),Ne,Pe,R,Fe,Ie,Le,Re=e((()=>{Me(),Ne=!1,Pe=new Map,R=new Set,Fe=e=>{Ne&&!R.has(e)&&R.add(e)},Ie=e=>{R.has(e)&&R.delete(e)},Le=(e,t=`default`)=>{let n=t==="default"?Ae:je;if(t==="default"){let t=Pe.get(e);if(t!==void 0)return t}let r=Object.entries(n).reduce((t,[n,r])=>{let i=r[e];return i&&(t[n]=i),t},{});return t==="default"&&Pe.set(e,r),r}}));function ze(e){return t=>{var n,r,i,a,o;return o=class extends t{constructor(...t){super(...t),x(this,n,!1),x(this,r,new Map),x(this,i,[]),x(this,a),this._isInitialized=!1,this._isInitialized=!0,S(this,a,Le(e,`initial`))}get __originalDecoratedClassName(){return e}overrideGlobalSettings(e){e.forEach(e=>{b(this,r).has(e.attribute)&&(this[e.attribute]=e.newValue)})}disconnectedCallback(){super.disconnectedCallback(),Ie(this)}requestUpdate(e,t,r){super.requestUpdate(e,t,r),!(!this._isInitialized||b(this,n)||!e||!(e in b(this,a))||b(this,i)?.includes(e))&&b(this,i).push(e)}willUpdate(t){if(super.willUpdate(t),b(this,n))return;S(this,n,!0);let o=Le(e);Object.entries(o).forEach(([e,t])=>{let n=this[e];n===b(this,a)[e]&&!b(this,i).includes(e)&&(b(this,r).set(e,n),this[e]=t)}),b(this,r).size>0&&Fe(this)}},n=new WeakMap,r=new WeakMap,i=new WeakMap,a=new WeakMap,o}}var Be=e((()=>{Re(),C()}));function Ve(){Ue&&(H=document.documentElement.dir||`ltr`,U=document.documentElement.lang||navigator.language),[...z.keys()].forEach(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}function He(...e){e.forEach(e=>{let t=e.$code.toLowerCase();B.has(t)?B.set(t,{...B.get(t),...e}):B.set(t,e),V||=e}),Ve()}var z,B,V,H,U,Ue,We,W=e((()=>{if(z=new Set,B=new Map,H=`ltr`,U=`en`,Ue=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0,Ue){let e=new MutationObserver(Ve);H=document.documentElement.dir||`ltr`,U=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributeFilter:[`dir`,`lang`],attributes:!0})}We=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){z.add(this.host)}hostDisconnected(){z.delete(this.host)}dir(){return`${this.host.dir||H}`.toLowerCase()}lang(){return`${this.host.lang||U}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=t?.region?.toLowerCase()??``;return{language:n,locale:t,primary:B.get(`${n}-${r}`),region:r,secondary:B.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang()),i={ignoreFallback:!1,...t};return!!(n&&n[e]||r&&r[e]||i.includeFallback&&V&&V[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(V&&V[e])i=V[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){let n=new Date(e);return new Intl.DateTimeFormat(this.lang(),t).format(n)}number(e,t){let n=Number(e);return isNaN(n)?``:new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}})),Ge,Ke,G=e((()=>{W(),Ge={$code:`en`,$name:`English`,$dir:`ltr`,clearEntry:`Clear entry`,close:`Close`,hidePassword:`Hide password`,loading:`Loading`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,progress:`Progress`,remove:`Remove`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,showPassword:`Show password`,closeMenu:`Close menu`,critical:`Critical`,danger:`Danger`,error:`Error`,fileButtonText:`Select file`,fileButtonTextMultiple:`Select files`,fileDragDrop:`Drop or select file`,folderButtonText:`Select folder`,folderDragDrop:`Drop or select folder`,menu:`Menu`,noResults:`No results found`,notification:`Notification`,numFilesSelected:(e,t)=>e===0?`No ${t?`folders`:`files`} chosen`:`${e} ${t?`folders`:`files`} chosen`,openMenu:`Open menu`,paginationFirstPage:`First page`,paginationInputLabel:`Select page`,paginationItemsPerPage:`Items per page`,paginationItemSummary:(e,t,n)=>`${e}-${t} of ${n} items`,paginationLastPage:`Last page`,paginationNextPage:`Next page`,paginationOfTotalPages:e=>`of ${e}`,paginationPreviousPage:`Previous page`,rangeMax:`Maximum`,rangeMin:`Minimum`,sideNav:`Page navigation`,sideNavHide:`Hide navigation`,sideNavShow:`Show navigation`,success:`Success`,warning:`Warning`},He(Ge),Ke=Ge})),K,q=e((()=>{G(),W(),K=class extends We{},He(Ke)})),qe,Je=e((()=>{i(),qe=n`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`})),J,Ye=e((()=>{Je(),h(),_(),E(),C(),i(),l(),J=class extends T{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit(`syn-resize`,{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector(`slot`);if(e!==null){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return t` <slot @slotchange=${this.handleSlotChange}></slot> `}},J.styles=[g,qe],v([u({type:Boolean,reflect:!0})],J.prototype,`disabled`,2),v([m(`disabled`,{waitUntilFirstUpdate:!0})],J.prototype,`handleDisabledChange`,1)}));function Xe(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function Ze(e,t,n=`vertical`,r=`smooth`){let i=Xe(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,ee=t.scrollLeft,te=t.scrollLeft+t.offsetWidth,ne=t.scrollTop,s=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<ee?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>te&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<ne?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>s&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Qe=e((()=>{})),$e,et=e((()=>{i(),$e=n`
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
`})),tt,nt=e((()=>{i(),tt=n`
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
`})),rt,it=e((()=>{i(),rt=n`
  :host {
    color: var(--syn-color-neutral-600);
    display: inline-block;
  }

  .icon-button {
    align-items: center;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    border-radius: 0;
    color: currentColor;
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    font-size: inherit;
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button:focus-visible {
    border-radius: var(--syn-icon-button-focus-ring-border-radius); /* Remove round borders */
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
  }

  .icon-button__icon {
    pointer-events: none;
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
`})),Y,X=e((()=>{it(),F(),Be(),_(),E(),C(),p(),o(),ae(),l(),Y=class extends T{constructor(){super(...arguments),this.hasFocus=!1,this.label=``,this.size=`inherit`,this.color=`currentColor`,this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?te`a`:te`button`;return ee`
      <${t}
        part="base"
        class=${f({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--large":this.size===`large`,"icon-button--medium":this.size===`medium`,"icon-button--small":this.size===`small`})}
        ?disabled=${d(e?void 0:this.disabled)}
        type=${d(e?void 0:`button`)}
        href=${d(e?this.href:void 0)}
        target=${d(e?this.target:void 0)}
        download=${d(e?this.download:void 0)}
        rel=${d(e&&this.target?`noreferrer noopener`:void 0)}
        role=${d(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${d(this.name)}
          library=${d(this.library)}
          src=${d(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${t}>
    `}},Y.styles=[g,rt],Y.dependencies={"syn-icon":P},v([c(`.icon-button`)],Y.prototype,`button`,2),v([s()],Y.prototype,`hasFocus`,2),v([u()],Y.prototype,`name`,2),v([u()],Y.prototype,`library`,2),v([u()],Y.prototype,`src`,2),v([u()],Y.prototype,`href`,2),v([u()],Y.prototype,`target`,2),v([u()],Y.prototype,`download`,2),v([u()],Y.prototype,`label`,2),v([u({reflect:!0})],Y.prototype,`size`,2),v([u({reflect:!0})],Y.prototype,`color`,2),v([u({reflect:!0,type:Boolean})],Y.prototype,`disabled`,2),Y=v([ze(`SynIconButton`)],Y)})),at,ot,Z,st=e((()=>{Ye(),Qe(),et(),nt(),X(),q(),h(),_(),E(),C(),p(),l(),i(),at=(e,t)=>{let n=0;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...r)},t)}},ot=(e,t,n)=>{let r=e[t];e[t]=function(...e){r.call(this,...e),n.call(this,r,...e)}},(()=>{if(!(typeof window>`u`)&&!(`onscrollend`in window)){let e=new Set,t=new WeakMap,n=t=>{for(let n of t.changedTouches)e.add(n.identifier)},r=t=>{for(let n of t.changedTouches)e.delete(n.identifier)};document.addEventListener(`touchstart`,n,!0),document.addEventListener(`touchend`,r,!0),document.addEventListener(`touchcancel`,r,!0),ot(EventTarget.prototype,`addEventListener`,function(n,r){if(r!==`scrollend`)return;let i=at(()=>{e.size?i():this.dispatchEvent(new Event(`scrollend`))},100);n.call(this,`scroll`,i,{passive:!0}),t.set(this,i)}),ot(EventTarget.prototype,`removeEventListener`,function(e,n){if(n!==`scrollend`)return;let r=t.get(this);r&&e.call(this,`scroll`,r,{passive:!0})})}})(),Z=class extends T{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new K(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement=`top`,this.activation=`auto`,this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let e=Promise.all([customElements.whenDefined(`syn-tab`),customElements.whenDefined(`syn-tab-panel`)]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest(`syn-tab-group`)!==this)return!1;let t=e.tagName.toLowerCase();return t===`syn-tab`||t===`syn-tab-panel`});if(t.length!==0){if(t.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`syn-tab`).map(e=>e.target).find(e=>e.active);e&&this.setActiveTab(e)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:[`active`,`disabled`,`name`,`panel`],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`syn-tab`);t?.closest(`syn-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`syn-tab`);if(t?.closest(`syn-tab-group`)===this&&([`Enter`,` `].includes(e.key)&&t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault()),[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`syn-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`].includes(this.placement)&&Ze(r,this.nav,`horizontal`),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:`auto`,...t},e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),this.syncIndicator(),[`top`].includes(this.placement)&&Ze(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.emit(`syn-tab-hide`,{detail:{name:n.panel}}),this.emit(`syn-tab-show`,{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}repositionIndicator(){let e=this.getActiveTab();if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=this.localize.dir()===`rtl`,i=this.tabs.slice(0,this.tabs.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case`top`:this.indicator.style.width=`calc(${t}px - ${this.contained||this.sharp?`2 * var(--syn-spacing-large)`:`0px`})`,this.indicator.style.height=`auto`,this.indicator.style.translate=`calc(${r?`-`:``}1 * (${i.left}px + ${this.contained||this.sharp?`var(--syn-spacing-large)`:`0px`}))`;break;case`start`:case`end`:this.indicator.style.width=`auto`,this.indicator.style.height=`calc(${n}px - ${this.contained||this.sharp?`2 * var(--syn-spacing-small)`:`0px`})`,this.indicator.style.translate=`0 calc(${i.top}px + ${this.contained||this.sharp?`var(--syn-spacing-small)`:`0px`})`;break}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()===`rtl`?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=[`top`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display=`block`,this.repositionIndicator()):this.indicator.style.display=`none`}show(e){let t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:`smooth`})}preventFocus(e){e.preventDefault()}render(){let e=this.localize.dir()===`rtl`;return t`
      <div
        part="base"
        class=${f({"tab-group":!0,"tab-group--top":this.placement===`top`,"tab-group--start":this.placement===`start`,"tab-group--end":this.placement===`end`,"tab-group--rtl":this.localize.dir()===`rtl`,"tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?t`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${f({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?`tabs-right`:`tabs-left`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToStart`)}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToStart}
                ></syn-icon-button>
              `:``}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <syn-resize-observer @syn-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </syn-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?t`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${f({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?`tabs-left`:`tabs-right`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToEnd`)}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToEnd}
                ></syn-icon-button>
              `:``}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}},Z.styles=[g,tt,$e],Z.dependencies={"syn-icon-button":Y,"syn-resize-observer":J},v([ie({slot:`nav`,selector:`syn-tab`})],Z.prototype,`tabs`,2),v([ie({selector:`syn-tab-panel`})],Z.prototype,`panels`,2),v([c(`.tab-group`)],Z.prototype,`tabGroup`,2),v([c(`.tab-group__body`)],Z.prototype,`body`,2),v([c(`.tab-group__nav`)],Z.prototype,`nav`,2),v([c(`.tab-group__indicator`)],Z.prototype,`indicator`,2),v([s()],Z.prototype,`hasScrollControls`,2),v([s()],Z.prototype,`shouldHideScrollStartButton`,2),v([s()],Z.prototype,`shouldHideScrollEndButton`,2),v([u()],Z.prototype,`placement`,2),v([u()],Z.prototype,`activation`,2),v([u({attribute:`no-scroll-controls`,type:Boolean})],Z.prototype,`noScrollControls`,2),v([u({type:Boolean})],Z.prototype,`contained`,2),v([u({type:Boolean})],Z.prototype,`sharp`,2),v([u({attribute:`fixed-scroll-controls`,type:Boolean})],Z.prototype,`fixedScrollControls`,2),v([re({passive:!0})],Z.prototype,`updateScrollButtons`,1),v([m(`noScrollControls`,{waitUntilFirstUpdate:!0})],Z.prototype,`updateScrollControls`,1),v([m(`placement`,{waitUntilFirstUpdate:!0})],Z.prototype,`syncIndicator`,1)})),ct=e((()=>{st(),Z.define(`syn-tab-group`)})),lt=e((()=>{ct(),st(),Ye(),Je(),et(),nt(),X(),it(),F(),D(),O(),q(),G(),W(),_(),E()})),ut,dt=e((()=>{i(),ut=n`
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
`})),ft,pt=e((()=>{i(),ft=n`
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
`})),mt,Q,ht=e((()=>{dt(),pt(),X(),q(),h(),_(),E(),C(),p(),i(),l(),mt=0,Q=class extends T{constructor(){super(...arguments),this.localize=new K(this),this.attrId=++mt,this.componentId=`syn-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`syn-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,t`
      <div
        part="base"
        class=${f({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?t`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></syn-icon-button>
            `:``}
      </div>
    `}},Q.styles=[g,ft,ut],Q.dependencies={"syn-icon-button":Y},v([c(`.tab`)],Q.prototype,`tab`,2),v([u({reflect:!0})],Q.prototype,`panel`,2),v([u({type:Boolean,reflect:!0})],Q.prototype,`active`,2),v([u({type:Boolean,reflect:!0})],Q.prototype,`closable`,2),v([u({type:Boolean,reflect:!0})],Q.prototype,`disabled`,2),v([u({type:Number,reflect:!0})],Q.prototype,`tabIndex`,2),v([m(`active`)],Q.prototype,`handleActiveChange`,1),v([m(`disabled`)],Q.prototype,`handleDisabledChange`,1)})),gt=e((()=>{ht(),Q.define(`syn-tab`)})),_t=e((()=>{gt(),ht(),dt(),pt(),X(),it(),F(),D(),O(),q(),G(),W(),_(),E()})),vt,yt=e((()=>{i(),vt=n`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`})),bt,xt=e((()=>{i(),bt=n`
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
`})),St,$,Ct=e((()=>{yt(),xt(),h(),_(),E(),C(),p(),i(),l(),St=0,$=class extends T{constructor(){super(...arguments),this.attrId=++St,this.componentId=`syn-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return t`
      <slot
        part="base"
        class=${f({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}},$.styles=[g,bt,vt],v([u({reflect:!0})],$.prototype,`name`,2),v([u({type:Boolean,reflect:!0})],$.prototype,`active`,2),v([m(`active`)],$.prototype,`handleActiveChange`,1)})),wt=e((()=>{Ct(),$.define(`syn-tab-panel`)})),Tt=e((()=>{wt(),Ct(),yt(),xt(),_(),E()}));export{le as C,_ as D,g as E,h as O,b as S,C as T,D as _,q as a,v as b,ze as c,ke as d,L as f,O as g,F as h,K as i,m as k,Be as l,P as m,_t as n,G as o,I as p,lt as r,W as s,Tt as t,Oe as u,T as v,S as w,x,E as y};