import{u as v,a as b,s as w,i as y}from"./directive-helpers-a6c66f8a.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},m=(o=g,e,t)=>{const{kind:n,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(t.name,o),n==="accessor"){const{name:i}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,c,o)},init(a){return a!==void 0&&this.C(i,void 0,o),a}}}if(n==="setter"){const{name:i}=t;return function(a){const c=this[i];e.call(this,a),this.requestUpdate(i,c,o)}}throw Error("Unsupported decorator location: "+n)};function u(o){return(e,t)=>typeof t=="object"?m(o,e,t):((n,s,r)=>{const i=s.hasOwnProperty(r);return s.constructor.createProperty(r,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(s,r):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(o){return u({...o,state:!0,attribute:!1})}var O=Object.defineProperty,E=Object.getOwnPropertyDescriptor,f=(o,e,t,n)=>{for(var s=n>1?void 0:n?E(e,t):e,r=o.length-1,i;r>=0;r--)(i=o[r])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&O(e,t,s),s};class l extends w{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){const s=customElements.get(e);if(!s){customElements.define(e,class extends t{},n);return}let r=" (unknown version)",i=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in s&&s.version&&(i=" v"+s.version),!(r&&i&&r===i)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${i} has already been registered.`)}}l.version="1.2.0";l.dependencies={};f([u()],l.prototype,"dir",2);f([u()],l.prototype,"lang",2);function x(o,e){const t={waitUntilFirstUpdate:!1,...e};return(n,s)=>{const{update:r}=n,i=Array.isArray(o)?o:[o];n.update=function(a){i.forEach(c=>{const d=c;if(a.has(d)){const p=a.get(d),h=this[d];p!==h&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&this[s](p,h)}}),r.call(this,a)}}}const _=y`
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
`;export{l as S,_ as c,u as n,U as r,x as w};
//# sourceMappingURL=component.styles-e21f60bd.js.map
