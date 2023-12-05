import{w as f,x as p}from"./directive-helpers-a6c66f8a.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T=s=>(...e)=>({_$litDirective$:s,values:e});let E=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,t){this._$Ct=e,this._$AM=i,this._$Ci=t}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=T(class extends E{constructor(s){if(super(s),s.type!==_.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=s.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const n=!!e[t];n===this.it.has(t)||this.st?.has(t)||(n?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return f}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=Symbol.for(""),v=s=>{if(s?.r===c)return s?._$litStatic$},g=s=>({_$litStatic$:s,r:c}),w=(s,...e)=>({_$litStatic$:e.reduce((i,t,n)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(t)+s[n+1],s[0]),r:c}),d=new Map,A=s=>(e,...i)=>{const t=i.length;let n,a;const o=[],u=[];let l,r=0,h=!1;for(;r<t;){for(l=e[r];r<t&&(a=i[r],(n=v(a))!==void 0);)l+=n+e[++r],h=!0;r!==t&&u.push(a),o.push(l),r++}if(r===t&&o.push(e[t]),h){const $=o.join("$$lit$$");(e=d.get($))===void 0&&(o.raw=o,d.set($,e=o)),i=u}return s(e,...i)},y=A(p);export{m as a,g as b,T as e,E as i,y as n,w as s,_ as t};
//# sourceMappingURL=static-c19bae7e.js.map
