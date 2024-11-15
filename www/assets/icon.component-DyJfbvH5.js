import{u as S,f as B,h as P,i as b,k as R,n as I}from"./directive-helpers-CDT6qhDs.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:B},A=(e=_,t,s)=>{const{kind:r,metadata:i}=s;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(s.name,e),r==="accessor"){const{name:o}=s;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,d,e)},init(l){return l!==void 0&&this.P(o,void 0,e),l}}}if(r==="setter"){const{name:o}=s;return function(l){const d=this[o];t.call(this,l),this.requestUpdate(o,d,e)}}throw Error("Unsupported decorator location: "+r)};function a(e){return(t,s)=>typeof s=="object"?A(e,t,s):((r,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(e){return a({...e,state:!0,attribute:!1})}var O=Object.defineProperty,V=(e,t,s,r)=>{for(var i=void 0,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(t,s,i)||i);return i&&O(t,s,i),i};class m extends P{constructor(){super(),this.#t=!1,this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,s])=>{this.constructor.define(t,s)})}emit(t,s){const r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...s});return this.dispatchEvent(r),r}static{this.version="2.11.8"}static define(t,s=this,r={}){const i=customElements.get(t);if(!i){try{customElements.define(t,s,r)}catch{customElements.define(t,class extends s{},r)}return}let n=" (unknown version)",o=n;"version"in s&&s.version&&(n=" v"+s.version),"version"in i&&i.version&&(o=" v"+i.version),!(n&&o&&n===o)&&console.warn(`Attempted to register <${t}>${n}, but <${t}>${o} has already been registered.`)}static{this.dependencies={}}#t;attributeChangedCallback(t,s,r){this.#t||(this.constructor.elementProperties.forEach((i,n)=>{i.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),this.#t=!0),super.attributeChangedCallback(t,s,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((s,r)=>{t.has(r)&&this[r]==null&&(this[r]=s)})}}V([a()],m.prototype,"dir");V([a()],m.prototype,"lang");function E(e,t){const s={waitUntilFirstUpdate:!1,...t};return(r,i)=>{const{update:n}=r,o=Array.isArray(e)?e:[e];r.update=function(l){o.forEach(d=>{const f=d;if(l.has(f)){const y=l.get(f),x=this[f];y!==x&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](y,x)}}),n.call(this,l)}}}const k=b`
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
`;let L="";function M(e){L=e}function U(e=""){if(!L){const t=[...document.getElementsByTagName("script")],s=t.find(r=>r.hasAttribute("data-synergy"));if(s)M(s.getAttribute("data-synergy"));else{const r=t.find(n=>/synergy(\.min)?\.js($|\?)/.test(n.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";r&&(i=r.getAttribute("src")),M(i.split("/").slice(0,-1).join("/"))}}return L.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}const j={name:"default",resolver:e=>U(`assets/icons/${e}.svg`)},H={add:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>`,caret:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"/></svg>`,check:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M8.79496 15.875L4.62496 11.705L3.20496 13.115L8.79496 18.705L20.795 6.70498L19.385 5.29498L8.79496 15.875Z"/></svg>`,"chevron-down":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"/></svg>`,"chevron-right":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z"/></svg>`,"eye-slash":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12.005 6.5C14.765 6.5 17.005 8.74 17.005 11.5C17.005 12.15 16.875 12.76 16.645 13.33L19.565 16.25C21.075 14.99 22.265 13.36 22.995 11.5C21.265 7.11 16.995 4 11.995 4C10.595 4 9.255 4.25 8.01501 4.7L10.175 6.86C10.745 6.63 11.355 6.5 12.005 6.5ZM2.005 3.77L4.745 6.51C3.085 7.8 1.785 9.52 1.005 11.5C2.735 15.89 7.005 19 12.005 19C13.555 19 15.035 18.7 16.385 18.16L16.805 18.58L19.735 21.5L21.005 20.23L3.275 2.5L2.005 3.77ZM7.53501 9.3L9.085 10.85C9.035 11.06 9.005 11.28 9.005 11.5C9.005 13.16 10.345 14.5 12.005 14.5C12.225 14.5 12.445 14.47 12.655 14.42L14.205 15.97C13.535 16.3 12.795 16.5 12.005 16.5C9.245 16.5 7.005 14.26 7.005 11.5C7.005 10.71 7.20501 9.97 7.53501 9.3ZM11.845 8.52L14.995 11.67L15.015 11.51C15.015 9.85 13.675 8.51 12.015 8.51L11.845 8.52Z"/></svg>`,eye:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/></svg>`,indeterminate:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H5V11H19V13Z"/></svg>`,"logo-color":`
		<svg width="295" height="94" viewBox="0 0 295 94" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><g clip-path="url(#clip0_9951_9907)"><path fill-rule="evenodd" clip-rule="evenodd" d="M207.961 69.0591C200.132 83.8898 184.613 93.983 166.804 93.983C141.096 93.983 120.257 72.9431 120.257 46.9915C120.257 21.0399 141.096 0 166.804 0C184.439 0 199.775 9.89295 207.674 24.4885L188.602 34.7821C184.335 26.9182 176.088 21.6757 166.804 21.6757C153.262 21.6757 141.932 32.8139 141.932 46.9915C141.932 61.1691 153.262 72.3074 166.804 72.3074C176.279 72.3074 184.726 66.8558 188.907 58.7133L207.961 69.0591ZM111.078 1.66335H89.7768V91.8668H111.078V1.66335ZM26.0822 91.8669C13.9511 91.8669 0.592136 85.318 0.592136 70.1128C0.592136 70.1128 47.1743 70.1128 54.5941 70.1215C62.4927 68.5453 61.6132 58.5826 54.5941 57.2067H26.8746C12.1223 57.2067 0.444092 44.6141 0.444092 29.6092C0.444092 15.1791 11.234 1.67206 26.8746 1.67206H57.285C69.8254 1.67206 78.7778 11.0599 78.7778 22.9645H26.8746C19.8991 23.9573 19.4549 34.6602 26.8746 35.8707H54.5157C69.6773 36.28 81.7735 48.3501 81.7735 63.6336C81.7735 77.7154 69.8254 91.8669 54.5853 91.8669H26.0822ZM215.99 91.8668V1.66335H237.535V37.8388H245.826L268.224 1.66335H294.716L264.192 47.3399L294.272 91.8668H267.771L245.103 56.9193H237.535V91.8668H215.99Z"/></g><defs><clipPath id="clip0_9951_9907"><rect width="295" height="94"/></clipPath></defs></svg>`,menu:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"/></svg>`,"more-vert":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"/></svg>`,more:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"/></svg>`,radio:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"/></svg>`,"upload-file":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z"/></svg>`,"x-circle-fill":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"/></svg>`,"x-lg":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>`},T={name:"system",resolver:e=>e in H?`data:image/svg+xml,${encodeURIComponent(H[e])}`:""};let v=[j,T],w=[];function D(e){w.push(e)}function q(e){w=w.filter(t=>t!==e)}function Z(e){return v.find(t=>t.name===e)}function J(e,t){z(e),v.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),w.forEach(s=>{s.library===e&&s.setIcon()})}function z(e){v=v.filter(t=>t.name!==e)}const F=b`
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
`,N=b`
  /* Write custom CSS here */
`;var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,h=(e,t,s,r)=>{for(var i=r>1?void 0:r?W(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&G(t,s,i),i};const g=Symbol(),u=Symbol();let p;const C=new Map;class c extends m{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}static{this.styles=[k,F,N]}async resolveIcon(t,s){let r;if(s?.spriteSheet)return this.svg=R`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?g:u}catch{return u}try{const i=document.createElement("div");i.innerHTML=await r.text();const n=i.firstElementChild;if(n?.tagName?.toLowerCase()!=="svg")return g;p||(p=new DOMParser);const l=p.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):g}catch{return g}}connectedCallback(){super.connectedCallback(),D(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),q(this)}getIconSource(){const t=Z(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:s}=this.getIconSource(),r=s?Z(this.library):void 0;if(!t){this.svg=null;return}let i=C.get(t);if(i||(i=this.resolveIcon(t,r),C.set(t,i)),!this.initialRender)return;const n=await i;if(n===u&&C.delete(t),t===this.getIconSource().url){if(I(n)){if(this.svg=n,r){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&o&&r.mutator(o)}return}switch(n){case u:case g:this.svg=null,this.emit("syn-error");break;default:this.svg=n.cloneNode(!0),r?.mutator?.(this.svg),this.emit("syn-load")}}}render(){return this.svg}}h([$()],c.prototype,"svg",2);h([a({reflect:!0})],c.prototype,"name",2);h([a()],c.prototype,"src",2);h([a()],c.prototype,"label",2);h([a({reflect:!0})],c.prototype,"library",2);h([E("label")],c.prototype,"handleLabelChange",1);h([E(["name","src","library"])],c.prototype,"setIcon",1);export{c as S,m as a,$ as b,k as c,a as n,J as r,E as w};
