import{x as S}from"./property-ImbD-3qY.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),d=i=>{if(i?.r===p)return i?._$litStatic$},v=(i,...t)=>({_$litStatic$:t.reduce((a,o,l)=>a+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+i[l+1],i[0]),r:p}),f=new Map,h=i=>(t,...a)=>{const o=a.length;let l,r;const s=[],u=[];let n,e=0,c=!1;for(;e<o;){for(n=t[e];e<o&&(r=a[e],(l=d(r))!==void 0);)n+=l+t[++e],c=!0;e!==o&&u.push(r),s.push(n),e++}if(e===o&&s.push(t[o]),c){const $=s.join("$$lit$$");(t=f.get($))===void 0&&(s.raw=s,f.set($,t=s)),a=u}return i(t,...a)},_=h(S);export{v as i,_ as u};
