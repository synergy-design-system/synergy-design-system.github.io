import{R as $,D as p,k as b}from"./directive-helpers-B-JxG5af.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t,e){return(r,s,i)=>{const n=a=>a.renderRoot?.querySelector(t)??null;return T(r,s,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,ELEMENT:6},E=t=>(...e)=>({_$litDirective$:t,values:e});class S{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this.t=e,this._$AM=r,this.i=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=E(class extends S{constructor(t){if(super(t),t.type!==_.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const i=!!e[s];i===this.st.has(s)||this.nt?.has(s)||(i?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return $}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=t=>t??p;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=Symbol.for(""),g=t=>{if(t?.r===l)return t?._$litStatic$},k=t=>({_$litStatic$:t,r:l}),w=(t,...e)=>({_$litStatic$:e.reduce((r,s,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[i+1],t[0]),r:l}),f=new Map,m=t=>(e,...r)=>{const s=r.length;let i,n;const a=[],c=[];let u,o=0,d=!1;for(;o<s;){for(u=e[o];o<s&&(n=r[o],(i=g(n))!==void 0);)u+=i+e[++o],d=!0;o!==s&&c.push(n),a.push(u),o++}if(o===s&&a.push(e[s]),d){const h=a.join("$$lit$$");(e=f.get(h))===void 0&&(a.raw=a,f.set(h,e=a)),r=c}return t(e,...r)},U=m(b);export{y as R,j as a,R as b,T as c,E as d,w as e,_ as f,S as i,U as k,k as t};
