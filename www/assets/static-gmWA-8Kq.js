import{T as f,x as p}from"./directive-helpers-DGrfjhaU.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,ELEMENT:6},T=e=>(...s)=>({_$litDirective$:e,values:s});let v=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,i,t){this._$Ct=s,this._$AM=i,this._$Ci=t}_$AS(s,i){return this.update(s,i)}update(s,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=T(class extends v{constructor(e){if(super(e),e.type!==_.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(s=>e[s]).join(" ")+" "}update(e,[s]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in s)s[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(s)}const i=e.element.classList;for(const t of this.st)t in s||(i.remove(t),this.st.delete(t));for(const t in s){const n=!!s[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return f}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=Symbol.for(""),A=e=>{if(e?.r===u)return e?._$litStatic$},g=e=>({_$litStatic$:e,r:u}),w=(e,...s)=>({_$litStatic$:s.reduce((i,t,n)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(t)+e[n+1],e[0]),r:u}),d=new Map,E=e=>(s,...i)=>{const t=i.length;let n,a;const o=[],c=[];let l,r=0,h=!1;for(;r<t;){for(l=s[r];r<t&&(a=i[r],(n=A(a))!==void 0);)l+=n+s[++r],h=!0;r!==t&&c.push(a),o.push(l),r++}if(r===t&&o.push(s[t]),h){const $=o.join("$$lit$$");(s=d.get($))===void 0&&(o.raw=o,d.set($,s=o)),i=c}return e(s,...i)},y=E(p);export{m as a,w as b,T as e,v as i,g as s,_ as t,y as u};
