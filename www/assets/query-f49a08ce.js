/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(o,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(o,r,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(o,r){return(e,n,c)=>{const u=i=>i.renderRoot?.querySelector(o)??null;if(r){const{get:i,set:s}=typeof n=="object"?e:c??(()=>{const t=Symbol();return{get(){return this[t]},set(f){this[t]=f}}})();return l(e,n,{get(){if(r){let t=i.call(this);return t===void 0&&(t=u(this),s.call(this,t)),t}return u(this)}})}return l(e,n,{get(){return u(this)}})}}export{h as e};
//# sourceMappingURL=query-f49a08ce.js.map
