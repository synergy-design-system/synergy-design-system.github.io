import{R as f,k as p,D as T}from"./directive-helpers-CDT6qhDs.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t,e){return(r,s,n)=>{const i=o=>o.renderRoot?.querySelector(t)??null;return b(r,s,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_=t=>(...e)=>({_$litDirective$:t,values:e});class S{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this.t=e,this._$AM=r,this.i=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=_(class extends S{constructor(t){if(super(t),t.type!==E.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||this.nt?.has(s)||(n?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return f}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=Symbol.for(""),g=t=>{if(t?.r===l)return t?._$litStatic$},y=t=>({_$litStatic$:t,r:l}),j=(t,...e)=>({_$litStatic$:e.reduce((r,s,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[n+1],t[0]),r:l}),$=new Map,m=t=>(e,...r)=>{const s=r.length;let n,i;const o=[],u=[];let c,a=0,h=!1;for(;a<s;){for(c=e[a];a<s&&(i=r[a],(n=g(i))!==void 0);)c+=n+e[++a],h=!0;a!==s&&u.push(i),o.push(c),a++}if(a===s&&o.push(e[s]),h){const d=o.join("$$lit$$");(e=$.get(d))===void 0&&(o.raw=o,$.set(d,e=o)),r=u}return t(e,...r)},k=m(p);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=t=>t??T;export{R,w as a,A as b,b as c,_ as d,j as e,E as f,S as i,k,y as t};
