import{T as f,x as p,E as _}from"./directive-helpers-Dvm_Ferq.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t,e){return(r,s,i)=>{const n=o=>o.renderRoot?.querySelector(t)??null;return b(r,s,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,ELEMENT:6},E=t=>(...e)=>({_$litDirective$:t,values:e});let S=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=E(class extends S{constructor(t){if(super(t),t.type!==T.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const i=!!e[s];i===this.st.has(s)||this.nt?.has(s)||(i?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return f}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=Symbol.for(""),g=t=>{if(t?.r===l)return t?._$litStatic$},j=t=>({_$litStatic$:t,r:l}),w=(t,...e)=>({_$litStatic$:e.reduce((r,s,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[i+1],t[0]),r:l}),$=new Map,m=t=>(e,...r)=>{const s=r.length;let i,n;const o=[],c=[];let u,a=0,h=!1;for(;a<s;){for(u=e[a];a<s&&(n=r[a],(i=g(n))!==void 0);)u+=i+e[++a],h=!0;a!==s&&c.push(n),o.push(u),a++}if(a===s&&o.push(e[s]),h){const d=o.join("$$lit$$");(e=$.get(d))===void 0&&(o.raw=o,$.set(d,e=o)),r=c}return t(e,...r)},U=m(p);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=t=>t??_;export{R as a,b,E as c,S as d,A as e,w as i,M as o,j as s,T as t,U as u};
