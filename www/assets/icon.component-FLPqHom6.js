import{u as P,f as _,i as b,s as I,x as V,e as B}from"./directive-helpers-po9zzQFH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:_},A=(e=O,t,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,e),i==="accessor"){const{name:o}=s;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,u,e)},init(l){return l!==void 0&&this.P(o,void 0,e),l}}}if(i==="setter"){const{name:o}=s;return function(l){const u=this[o];t.call(this,l),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,s)=>typeof s=="object"?A(e,t,s):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(e){return a({...e,state:!0,attribute:!1})}function Z(e,t){const s={waitUntilFirstUpdate:!1,...t};return(i,r)=>{const{update:n}=i,o=Array.isArray(e)?e:[e];i.update=function(l){o.forEach(u=>{const f=u;if(l.has(f)){const m=l.get(f),x=this[f];m!==x&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](m,x)}}),n.call(this,l)}}}const R=b`
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
`;var j=Object.defineProperty,U=Object.getOwnPropertyDescriptor,E=(e,t,s,i)=>{for(var r=i>1?void 0:i?U(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(i?o(t,s,r):o(r))||r);return i&&r&&j(t,s,r),r};class y extends I{emit(t,s){const i=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...s});return this.dispatchEvent(i),i}static{this.version="1.9.0"}static define(t,s=this,i={}){const r=customElements.get(t);if(!r){customElements.define(t,class extends s{},i);return}let n=" (unknown version)",o=n;"version"in s&&s.version&&(n=" v"+s.version),"version"in r&&r.version&&(o=" v"+r.version),!(n&&o&&n===o)&&console.warn(`Attempted to register <${t}>${n}, but <${t}>${o} has already been registered.`)}static{this.dependencies={}}constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,s])=>{this.constructor.define(t,s)})}}E([a()],y.prototype,"dir",2);E([a()],y.prototype,"lang",2);let L="";function M(e){L=e}function D(e=""){if(!L){const t=[...document.getElementsByTagName("script")],s=t.find(i=>i.hasAttribute("data-synergy"));if(s)M(s.getAttribute("data-synergy"));else{const i=t.find(n=>/synergy(\.min)?\.js($|\?)/.test(n.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";i&&(r=i.getAttribute("src")),M(r.split("/").slice(0,-1).join("/"))}}return L.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}const T={name:"default",resolver:e=>D(`assets/icons/${e}.svg`)},H={add:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>`,caret:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"/></svg>`,check:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M8.79496 15.875L4.62496 11.705L3.20496 13.115L8.79496 18.705L20.795 6.70498L19.385 5.29498L8.79496 15.875Z"/></svg>`,"chevron-down":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"/></svg>`,"eye-slash":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12.005 6.5C14.765 6.5 17.005 8.74 17.005 11.5C17.005 12.15 16.875 12.76 16.645 13.33L19.565 16.25C21.075 14.99 22.265 13.36 22.995 11.5C21.265 7.11 16.995 4 11.995 4C10.595 4 9.255 4.25 8.01501 4.7L10.175 6.86C10.745 6.63 11.355 6.5 12.005 6.5ZM2.005 3.77L4.745 6.51C3.085 7.8 1.785 9.52 1.005 11.5C2.735 15.89 7.005 19 12.005 19C13.555 19 15.035 18.7 16.385 18.16L16.805 18.58L19.735 21.5L21.005 20.23L3.275 2.5L2.005 3.77ZM7.53501 9.3L9.085 10.85C9.035 11.06 9.005 11.28 9.005 11.5C9.005 13.16 10.345 14.5 12.005 14.5C12.225 14.5 12.445 14.47 12.655 14.42L14.205 15.97C13.535 16.3 12.795 16.5 12.005 16.5C9.245 16.5 7.005 14.26 7.005 11.5C7.005 10.71 7.20501 9.97 7.53501 9.3ZM11.845 8.52L14.995 11.67L15.015 11.51C15.015 9.85 13.675 8.51 12.015 8.51L11.845 8.52Z"/></svg>`,eye:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/></svg>`,indeterminate:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H5V11H19V13Z"/></svg>`,"logo-color":`
		<svg width="295" height="94" viewBox="0 0 295 94" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><g clip-path="url(#clip0_9951_9907)"><path fill-rule="evenodd" clip-rule="evenodd" d="M207.961 69.0591C200.132 83.8898 184.613 93.983 166.804 93.983C141.096 93.983 120.257 72.9431 120.257 46.9915C120.257 21.0399 141.096 0 166.804 0C184.439 0 199.775 9.89295 207.674 24.4885L188.602 34.7821C184.335 26.9182 176.088 21.6757 166.804 21.6757C153.262 21.6757 141.932 32.8139 141.932 46.9915C141.932 61.1691 153.262 72.3074 166.804 72.3074C176.279 72.3074 184.726 66.8558 188.907 58.7133L207.961 69.0591ZM111.078 1.66335H89.7768V91.8668H111.078V1.66335ZM26.0822 91.8669C13.9511 91.8669 0.592136 85.318 0.592136 70.1128C0.592136 70.1128 47.1743 70.1128 54.5941 70.1215C62.4927 68.5453 61.6132 58.5826 54.5941 57.2067H26.8746C12.1223 57.2067 0.444092 44.6141 0.444092 29.6092C0.444092 15.1791 11.234 1.67206 26.8746 1.67206H57.285C69.8254 1.67206 78.7778 11.0599 78.7778 22.9645H26.8746C19.8991 23.9573 19.4549 34.6602 26.8746 35.8707H54.5157C69.6773 36.28 81.7735 48.3501 81.7735 63.6336C81.7735 77.7154 69.8254 91.8669 54.5853 91.8669H26.0822ZM215.99 91.8668V1.66335H237.535V37.8388H245.826L268.224 1.66335H294.716L264.192 47.3399L294.272 91.8668H267.771L245.103 56.9193H237.535V91.8668H215.99Z"/></g><defs><clipPath id="clip0_9951_9907"><rect width="295" height="94"/></clipPath></defs></svg>`,radio:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"/></svg>`,"x-circle-fill":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"/></svg>`,"x-lg":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>`},k={name:"system",resolver:e=>e in H?`data:image/svg+xml,${encodeURIComponent(H[e])}`:""};let v=[T,k],p=[];function q(e){p.push(e)}function z(e){p=p.filter(t=>t!==e)}function S(e){return v.find(t=>t.name===e)}function K(e,t){F(e),v.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),p.forEach(s=>{s.library===e&&s.setIcon()})}function F(e){v=v.filter(t=>t.name!==e)}const N=b`
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
`,W=b`
  /* Write custom CSS here */
`;var Y=Object.defineProperty,G=Object.getOwnPropertyDescriptor,c=(e,t,s,i)=>{for(var r=i>1?void 0:i?G(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(i?o(t,s,r):o(r))||r);return i&&r&&Y(t,s,r),r};const d=Symbol(),g=Symbol();let w;const C=new Map;class h extends y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}static{this.styles=[R,N,W]}async resolveIcon(t,s){let i;if(s?.spriteSheet)return V`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?d:g}catch{return g}try{const r=document.createElement("div");r.innerHTML=await i.text();const n=r.firstElementChild;if(n?.tagName?.toLowerCase()!=="svg")return d;w||(w=new DOMParser);const l=w.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):d}catch{return d}}connectedCallback(){super.connectedCallback(),q(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),z(this)}getIconSource(){const t=S(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:s}=this.getIconSource(),i=s?S(this.library):void 0;if(!t){this.svg=null;return}let r=C.get(t);if(r||(r=this.resolveIcon(t,i),C.set(t,r)),!this.initialRender)return;const n=await r;if(n===g&&C.delete(t),t===this.getIconSource().url){if(B(n)){this.svg=n;return}switch(n){case g:case d:this.svg=null,this.emit("syn-error");break;default:this.svg=n.cloneNode(!0),i?.mutator?.(this.svg),this.emit("syn-load")}}}render(){return this.svg}}c([$()],h.prototype,"svg",2);c([a({reflect:!0})],h.prototype,"name",2);c([a()],h.prototype,"src",2);c([a()],h.prototype,"label",2);c([a({reflect:!0})],h.prototype,"library",2);c([Z("label")],h.prototype,"handleLabelChange",1);c([Z(["name","src","library"])],h.prototype,"setIcon",1);export{h as S,y as a,$ as b,R as c,a as n,K as r,Z as w};
