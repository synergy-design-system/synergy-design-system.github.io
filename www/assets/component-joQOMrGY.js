var ct=Object.freeze,Mt=Object.defineProperty;var ut=(s,t)=>ct(Mt(s,"raw",{value:ct(t||s.slice())}));import{n as v,i as b,e as Lt}from"./icon-button-KtHLMDzK.js";import{s as Dt}from"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import{n as Rt,_ as jt,d as It}from"./index-FIHtO42A.js";import Bt from"./preview-F0TXjjBB.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const Y=window,P=Y.trustedTypes,pt=P?P.createPolicy("lit-html",{createHTML:s=>s}):void 0,et="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,At="?"+T,Ut=`<${At}>`,S=document,K=()=>S.createComment(""),j=s=>s===null||typeof s!="object"&&typeof s!="function",bt=Array.isArray,Wt=s=>bt(s)||typeof s?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ht=/>/g,N=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,$t=/"/g,Tt=/^(?:script|style|textarea|title)$/i,xt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),Ft=xt(1),I=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),mt=new WeakMap,w=S.createTreeWalker(S,129,null,!1);function Ct(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const Vt=(s,t)=>{const e=s.length-1,n=[];let r,o=t===2?"<svg>":"",i=D;for(let c=0;c<e;c++){const a=s[c];let l,p,d=-1,$=0;for(;$<a.length&&(i.lastIndex=$,p=i.exec(a),p!==null);)$=i.lastIndex,i===D?p[1]==="!--"?i=dt:p[1]!==void 0?i=ht:p[2]!==void 0?(Tt.test(p[2])&&(r=RegExp("</"+p[2],"g")),i=N):p[3]!==void 0&&(i=N):i===N?p[0]===">"?(i=r??D,d=-1):p[1]===void 0?d=-2:(d=i.lastIndex-p[2].length,l=p[1],i=p[3]===void 0?N:p[3]==='"'?$t:ft):i===$t||i===ft?i=N:i===dt||i===ht?i=D:(i=N,r=void 0);const g=i===N&&s[c+1].startsWith("/>")?" ":"";o+=i===D?a+Ut:d>=0?(n.push(l),a.slice(0,d)+et+a.slice(d)+T+g):a+T+(d===-2?(n.push(void 0),c):g)}return[Ct(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),n]};class B{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let o=0,i=0;const c=t.length-1,a=this.parts,[l,p]=Vt(t,e);if(this.el=B.createElement(l,n),w.currentNode=this.el.content,e===2){const d=this.el.content,$=d.firstChild;$.remove(),d.append(...$.childNodes)}for(;(r=w.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const $ of r.getAttributeNames())if($.endsWith(et)||$.startsWith(T)){const g=p[i++];if(d.push($),g!==void 0){const W=r.getAttribute(g.toLowerCase()+et).split(T),M=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:M[2],strings:W,ctor:M[1]==="."?Yt:M[1]==="?"?Gt:M[1]==="@"?Qt:J})}else a.push({type:6,index:o})}for(const $ of d)r.removeAttribute($)}if(Tt.test(r.tagName)){const d=r.textContent.split(T),$=d.length-1;if($>0){r.textContent=P?P.emptyScript:"";for(let g=0;g<$;g++)r.append(d[g],K()),w.nextNode(),a.push({type:2,index:++o});r.append(d[$],K())}}}else if(r.nodeType===8)if(r.data===At)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(T,d+1))!==-1;)a.push({type:7,index:o}),d+=T.length-1}o++}}static createElement(t,e){const n=S.createElement("template");return n.innerHTML=t,n}}function H(s,t,e=s,n){var r,o,i,c;if(t===I)return t;let a=n!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[n]:e._$Cl;const l=j(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,n)),n!==void 0?((i=(c=e)._$Co)!==null&&i!==void 0?i:c._$Co=[])[n]=a:e._$Cl=a),a!==void 0&&(t=H(s,a._$AS(s,t.values),a,n)),t}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:r}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:S).importNode(n,!0);w.currentNode=o;let i=w.nextNode(),c=0,a=0,l=r[0];for(;l!==void 0;){if(c===l.index){let p;l.type===2?p=new q(i,i.nextSibling,this,t):l.type===1?p=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(p=new Zt(i,this,t)),this._$AV.push(p),l=r[++a]}c!==l?.index&&(i=w.nextNode(),c++)}return w.currentNode=S,o}v(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class q{constructor(t,e,n,r){var o;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cp=(o=r?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),j(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==m&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=B.createElement(Ct(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(n);else{const i=new zt(o,this),c=i.u(this.options);i.v(n),this.$(c),this._$AH=i}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new B(t)),e}T(t){bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const o of t)r===e.length?e.push(n=new q(this.k(K()),this.k(K()),this,this.options)):n=e[r],n._$AI(o),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class J{constructor(t,e,n,r,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,r){const o=this.strings;let i=!1;if(o===void 0)t=H(this,t,e,0),i=!j(t)||t!==this._$AH&&t!==I,i&&(this._$AH=t);else{const c=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=H(this,c[n+a],e,a),l===I&&(l=this._$AH[a]),i||(i=!j(l)||l!==this._$AH[a]),l===m?t=m:t!==m&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}i&&!r&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yt extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}const Kt=P?P.emptyScript:"";class Gt extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==m?this.element.setAttribute(this.name,Kt):this.element.removeAttribute(this.name)}}class Qt extends J{constructor(t,e,n,r,o){super(t,e,n,r,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=H(this,t,e,0))!==null&&n!==void 0?n:m)===I)return;const r=this._$AH,o=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==m&&(r===m||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Zt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const vt=Y.litHtmlPolyfillSupport;vt?.(B,q),((X=Y.litHtmlVersions)!==null&&X!==void 0?X:Y.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jt=s=>(...t)=>({_$litDirective$:s,values:t});class Xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(s,t)=>{var e,n;const r=s._$AN;if(r===void 0)return!1;for(const o of r)(n=(e=o)._$AO)===null||n===void 0||n.call(e,t,!1),R(o,t);return!0},G=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Nt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ne(t)}};function ee(s){this._$AN!==void 0?(G(this),this._$AM=s,Nt(this)):this._$AM=s}function se(s,t=!1,e=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)R(n[o],!1),G(n[o]);else n!=null&&(R(n,!1),G(n));else R(this,s)}const ne=s=>{var t,e,n,r;s.type==qt.CHILD&&((t=(n=s)._$AP)!==null&&t!==void 0||(n._$AP=se),(e=(r=s)._$AQ)!==null&&e!==void 0||(r._$AQ=ee))};class re extends Xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Nt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,r;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),e&&(R(this,t),G(this))}setValue(t){if(te(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class oe extends re{host;element;prevData={};render(t){return m}update(t,[e]){this.element!==t.element&&(this.element=t.element),this.host=t.options?.host||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:n}=this;for(const r in t){const o=t[r];o!==e[r]&&Q(n,r,o)}}groom(t){const{prevData:e,element:n}=this;if(e)for(const r in e)(!t||!(r in t)&&n[r]===e[r])&&Q(n,r,void 0)}}class ie extends oe{eventData={};apply(t){if(t)for(const e in t){const n=t[e];n!==this.eventData[e]&&this.applyEvent(e,n)}}applyEvent(t,e){const{prevData:n,element:r}=this;this.eventData[t]=e,n[t]&&r.removeEventListener(t,this,e),r.addEventListener(t,this,e)}groom(t){const{prevData:e,element:n}=this;if(e)for(const r in e)(!t||!(r in t)&&n[r]===e[r])&&this.groomEvent(r,e[r])}groomEvent(t,e){const{element:n}=this;delete this.eventData[t],n.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const n in t){const r=n.slice(1),o=t[n];e.removeEventListener(r,this,o)}}reconnected(){const{eventData:t,element:e}=this;for(const n in t){const r=n.slice(1),o=t[n];e.addEventListener(r,this,o)}}}class ae extends ie{apply(t){if(!t)return;const{prevData:e,element:n}=this;for(const r in t){const o=t[r];if(o===e[r])continue;const i=r.slice(1);switch(r[0]){case"@":this.eventData[i]=o,this.applyEvent(i,o);break;case".":Q(n,i,o);break;case"?":o?n.setAttribute(i,""):n.removeAttribute(i);break;default:o?n.setAttribute(r,String(o)):n.removeAttribute(r);break}}}groom(t){const{prevData:e,element:n}=this;if(e)for(const r in e){const o=r.slice(1);if(!t||!(r in t)&&n[o]===e[r])switch(r[0]){case"@":this.groomEvent(o,e[r]);break;case".":Q(n,o,void 0);break;case"?":n.removeAttribute(o);break;default:n.removeAttribute(r);break}}}}function Q(s,t,e){le(s,t)?s[t]=e:console.warn(`Could not set property "${t}" on ${s.tagName} because it has no "setter".`)}function le(s,t){return!!Object.getOwnPropertyDescriptor(s.constructor.prototype,t)?.set}const ce=Jt(ae);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=Symbol.for(""),ue=s=>{if(s?.r===wt)return s?._$litStatic$},E=s=>({_$litStatic$:s,r:wt}),gt=new Map,pe=s=>(t,...e)=>{const n=e.length;let r,o;const i=[],c=[];let a,l=0,p=!1;for(;l<n;){for(a=t[l];l<n&&(o=e[l],(r=ue(o))!==void 0);)a+=r+t[++l],p=!0;l!==n&&c.push(o),i.push(a),l++}if(l===n&&i.push(t[n]),p){const d=i.join("$$lit$$");(t=gt.get(d))===void 0&&(i.raw=i,gt.set(d,t=i)),e=c}return s(t,...e)},z=pe(Ft);let k={};setTimeout(()=>{k=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});function Et(s,t){return t.modules?.find(n=>n.declarations?.some(r=>r.tagName===s))?.declarations.find(n=>n.kind==="class"&&n.tagName===s)}function nt(s){const t={};return s?.members?.forEach(e=>{if(e.kind!=="field")return;const n=s.attributes?.find(p=>e.name===p.fieldName),r=e.name;if(t[r]={name:r,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static)return;const o=n?.name||e.name,i=k.typeRef&&e[`${k.typeRef}`]?.text||e?.type?.text,c=Ot(i),a=U(e.default);t[o]={name:o,description:at(e.description,r,e.deprecated),defaultValue:a==="''"?"":a,control:{type:St(c,n!==void 0)},table:{category:n?"attributes":"properties",defaultValue:{summary:a},type:{summary:i}}};const l=c?.split("|");l&&l?.length>1&&(t[o].options=l.map(p=>U(p)))}),t}function de(s){const t={};return s?.members?.forEach(e=>{if(e.kind!=="field"||(t[e.name]={name:e.name,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static))return;const n=k.typeRef&&e[`${k.typeRef}`]?.text||e?.type?.text,r=Ot(n),o=`${e.name}`,i=St(r);t[o]={name:e.name,description:e.description,defaultValue:fe(i,e.default),control:{type:i},table:{category:"properties",defaultValue:{summary:U(e.default)},type:{summary:n}}};const c=r?.split("|");c&&c?.length>1&&(t[o].options=c.map(a=>U(a)))}),delete t.ref,t}function he(s){const t={};return s?.events?.forEach(e=>{const n=me(e.name);t[n]={name:n,description:e.description,table:{category:"events"}}}),t}function rt(s){const t={};return s?.cssProperties?.forEach(e=>{t[e.name]={name:e.name,description:e.description,defaultValue:e.default,control:{type:e.name.toLowerCase().includes("color")?"color":"text"}}}),t}function ot(s){const t={};return s?.cssParts?.forEach(e=>{t[e.name]={name:e.name,table:{disable:!0}},t[`${e.name}-part`]={name:e.name,description:at(e.description,`${e.name}-part`),control:"text",defaultValue:`${s?.tagName}::part(${e.name}) {
}`,table:{category:"css shadow parts"}}}),t}function it(s){const t={};return s?.slots?.forEach(e=>{t[e.name]={name:e.name,table:{disable:!0}};const n=e.name||"default";t[`${n}-slot`]={name:n,description:at(e.description,`${n}-slot`),control:"text",defaultValue:n==="default"?"":`<span slot="${n}"></span>`,table:{category:"slots"}}}),t}function fe(s,t){const e=U(t);return s==="boolean"?e==="true":e==="''"?"":e}function St(s,t=!1){if(!s)return"text";const e=s.toLowerCase(),n=e.split("|").map(r=>r.trim()).filter(r=>r!==""&&r!=="null"&&r!=="undefined");return $e(e)&&!t?"object":V(n,"boolean")?"boolean":V(n,"number")&&!V(n,"string")&&n.every(r=>!r.includes("'"))?"number":V(n,"date")?"date":n.length>1&&n.every(r=>r.includes("'"))?"select":"text"}function $e(s){return s.includes("array")||s.includes("object")||s.includes("{")||s.includes("[")||s.includes("<")}function V(s=[],t){return s?.find(e=>e===t)!==void 0}function Ot(s){return s?s.replace(" | undefined","").replace(" | null",""):""}function U(s){return s?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function at(s,t,e){let n="";return e&&(n+=`\`@deprecated\` ${e}`),s&&(n+=n?`


`:"",n+=s),k.hideArgRef?n:n+=`


arg ref - \`${t}\``}const me=s=>`on${ge(ve(s))}`;function ve(s=""){return s.split("-").map((n,r)=>r?n.charAt(0).toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()).join("")}function ge(s){return s.charAt(0).toUpperCase()+s.slice(1)}const{useArgs:_e}=__STORYBOOK_MODULE_CLIENT_API__;let Z,_t,lt={};setTimeout(()=>{lt=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});var yt;function ye(s,t,e){if(!t)return z`<${E(s.tagName)}></${E(s.tagName)}>`;s?.tagName!==_t&&(Z=void 0,_t=s?.tagName);const{attrOperators:n,propOperators:r}=Ae(s,t),o={...n,...r},i=Ce(s,t),c=be(s,t);return Ne(s),z`${Pt(s,t)}
<${E(s.tagName)} 
  ${ce(o)}
  ${c}
  >
    ${i}${e||""}
</${E(s.tagName)}>
${lt.hideScriptTag?"":z(yt||(yt=ut([`<script>
        globalThis.component = document.querySelector("`,`");
      <\/script>`])),s.tagName)}
`}function Pt(s,t){const e=Te(s,t);return`${e}`?.replaceAll(/\s+/g,"")!=""?z`<style>${e}</style>
`:""}function Ae(s,t){const e=nt(s),n={},r={};return Object.keys(e).forEach(o=>{const i=e[o];if(i?.table?.category!=="attributes")return;const c=i.name,a=t[o],l=i.control.type==="boolean"?`?${c}`:c;(a!==e[o].defaultValue||lt.renderDefaultAttributeValues)&&(n[l]=a==="false"?!1:a)}),Object.keys(t).filter(o=>e[o]?.table?.category==="properties").forEach(o=>{if(o.startsWith("on"))return;const i=t[o];r[`.${o}`]=i}),{attrOperators:n,propOperators:r}}function be(s,t){if(!s?.cssProperties?.length)return;const e=rt(s);return E(`style="${Object.keys(e).map(n=>{const r=e[n].name,o=t[n];return o?`${r}: ${o||""}`:null}).filter(n=>n!==null).join(";")}"`)}function Te(s,t){const e=ot(s);if(!Object.keys(e).some(o=>!!t[o]))return;const r=Object.keys(e).filter(o=>o.endsWith("-part")).map(o=>{const i=e[o].name,c=t[o];return c?.replaceAll(/\s+/g,"")!==`${s?.tagName}::part(${i}){}`?`
${c}`:null}).filter(o=>o!==null).join(`
`);return r?E(`${r}
`):""}function Ce(s,t){const e=it(s);return E(`${Object.keys(e).filter(r=>r.endsWith("-slot")).map(r=>{const o=e[r].name,i=t[r];return o==="default"?i||null:i!==`<span slot="${o}"></span>`?i:null}).filter(r=>r!==null).join("")}`)}function Ne(s){we(s),setTimeout(()=>{const t=document.querySelector(s.tagName);Z?.observe(t,{attributes:!0})})}function we(s){let t=!1;const e=_e()[1],n=nt(s);Z||(Z=new MutationObserver(r=>{r.forEach(o=>{if(o.type!=="attributes"||o.attributeName==="class"&&t)return;t=!0;const i=n[`${o.attributeName}`];i?.control==="boolean"||i?.control?.type==="boolean"?e({[`${o.attributeName}`]:o.target?.hasAttribute(o.attributeName||"")}):e({[`${o.attributeName}`]:o.target.getAttribute(o.attributeName||"")}),t=!1})}))}function Ee(s){window.__WC_STORYBOOK_HELPERS_CONFIG__=s}function Ht(s){const t=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!t)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const e=Et(s,t),n=e?.events?.map(r=>r.name)||[];return{args:Se(e),argTypes:kt(e),reactArgTypes:Pe(e),events:n,styleTemplate:r=>Pt(e,r),template:(r,o)=>ye(e,r,o)}}function kt(s){return{...rt(s),...ot(s),...it(s),...nt(s)}}function Se(s){return Object.entries(kt(s)).filter(([,e])=>e?.control).map(([e,n])=>{const r=Oe(n.defaultValue);return{[e]:r===void 0?"":r}}).reduce((e,n)=>({...e,...n}),{})}function Oe(s){try{return JSON.parse(s)}catch{return s}}function Pe(s){return{...de(s),...he(s),...rt(s),...ot(s),...it(s)}}function He(s){return s.charAt(0).toUpperCase()+s.substr(1)}function ke(s,t){var e=s.toLowerCase();return t===0?He(e):e}function Me(s,t){return t===void 0&&(t={}),Rt(s,jt({delimiter:" ",transform:ke},t))}Ee({hideArgRef:!0,hideScriptTag:!0});async function Le(){await fetch("./custom-elements.json");let t=await(await fetch("./custom-elements.json")).json();t.modules&&(t.modules=t.modules.map(e=>(e.declarations&&(e.declarations=e.declarations.map(n=>(n.members&&(n.members=n.members.filter(r=>r.description&&r.privacy!=="private")),n))),e))),Dt(t),console.log("Custom elements manifest loaded")}await Le();const st=s=>{const{args:t,events:e,argTypes:n}=Ht(s),r=Et(s,window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__),o=()=>({status:{styles:{backgroundColor:r?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${r?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${r?.since}`}});return{args:t,argTypes:(()=>{for(const a in n)n.hasOwnProperty(a)&&n[a].table&&n[a].table.category==="properties"&&(n[a].control=!1);return{...n,...r?.events?.reduce((a,l)=>(a[l.name]={...l,control:!1,table:{category:"Events"}},a),{}),...r?.members?.filter(a=>a.kind==="method").reduce((a,l)=>(a[l.name]={...l,control:!1,table:{category:"Methods"}},a),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:e}}}},O=s=>({getSuffixFromType:t=>({attribute:"",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:e}=st(s);return e[t]?.control?.type==="boolean"?[!0,!1]:e[t].options},getValuesFromAttributes:t=>t?.map(e=>(e.endsWith("-attr")||(e=`${e}-attr`),{name:e,values:O(s).getValuesFromAttribute(e)})),overrideArgs:(t,e)=>{const n=e||st(s).args,r=Array.isArray(t)?t:[t];for(const o of r){const i=O(s).getSuffixFromType(o.type);n[`${o.name}${i}`]=o.value}return n}}),We=s=>{const{template:t,manifest:e}=Ht(s),{args:n}=st(s),{getValuesFromAttribute:r}=O(s);return{generateTemplate:({axis:i,constants:c=[],options:a,args:l=n})=>{const p=u=>{if(!e?.style)return t(u);const h=Object.keys(u).filter(f=>f.endsWith("-attr")).reduce((f,y)=>{const _=y.substring(0,y.length-5);return u[y]===!0?f[_]=!0:u[y]==="false"||u[y]==="(default)"?f[_]=!1:u[y]&&(_.endsWith("...")?f[_.replace("...",u[y])]=!0:f[u[y]]=!0),f},{}),A=u["default-slot"]||"",C={[s]:!0,...h},L=Object.keys(C).filter(f=>C[f]).join(" ");if(a?.templateContent){const f=a.templateContent.replaceAll("%SLOT%",A).replaceAll("%CLASSES%",L);return b(f)}return v`<div class=${Lt(C)}>${b(A)}</div>`},d=(Array.isArray(c)?c:[c]).reduce((u,h)=>({...u,[`${h.name}${O(s).getSuffixFromType(h.type)}`]:h.value}),{});if(!i?.x&&!i?.y&&!a?.title)return v`${p({...l,...d})}`;const $=u=>u?Array.isArray(u)?u.map(h=>({...h,values:h.values||r(h.name)})):[{...u,values:u.values||r(u.name)}]:[{}],g=$(i?.x),W=$(i?.y),x=(Array.isArray(c)?c:[c]).find(u=>u.type==="template")?.value,F=`uuid-${crypto.randomUUID()}`;return v`
      <style>
        table:not(:first-of-type).story-template {
          margin-top: 72px;
        }
        .story-template th {
          text-align: left;
        }
        .story-template td {
          text-align: center;
        }
        .story-template th,
        .story-template td {
          padding: 16px;
          font-size: 12px;
        }
        td.template {
          font-size: 16px;
        }
        .story-template thead tr th {
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }
        .story-template thead th.title {
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
        }
        .story-template tbody tr th {
          font-weight: normal;
          text-align: center;
        }

        .story-template tbody tr:first-of-type th:first-of-type {
          width: 32px;
        }

        .story-template tbody tr th[rowspan] {
          text-align: center;
          padding-left: 0;
          border-right: 1px solid #e0e0e0;
          font-weight: bold;
        }

        .story-template tbody tr th span {
          -ms-writing-mode: tb-rl;
          -webkit-writing-mode: vertical-rl;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        ${a?.templateBackground&&`
          .${F}.story-template tbody tr.template-row td.template {
            background: ${a?.templateBackground};
          }
        `}

        ${a?.templateBackgrounds?.colors.map((u,h)=>{const A=C=>`${a?.templateBackgrounds?.colors.length}n + ${C+1}`;return a?.templateBackgrounds?.alternate==="y"?`
                .${F}.story-template tbody tr.template-row:nth-of-type(${A(h)}) td.template {
                  background: ${u};
                }
              `:`
                .${F}.story-template tbody tr.template-row td.template:nth-of-type(${A(h)}) {
                  background: ${u};
                }
              `})}
      </style>
      ${g.map(u=>v` ${W.map(h=>{let A=!0;const C=g.length>1||u.values,L=(u&&h||W.length>1)&&h?.values;return v`
            <table class="story-template ${F} ${a?.classes}">
              <thead>
                ${a?.title&&v`<tr>
                  <th class="title" colspan=${(u.values?.length||0)+3}><code>${a?.title}</code></th>
                </tr>`}
                ${u&&u.values&&v`
                  <tr>
                    ${L?v`<td></td>`:""} <td></td>
                    ${C&&v`<th colspan=${u.values?.length||0}><code>${u.title||u.name}</code></th>`}
                    </tr>
                  </tr>
                  ${v`
                    <tr>
                      ${L?v`<td></td>`:""}
                      <td></td>
                      ${u?.values?.map(f=>v`<td><code>${f.title||f}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(h?.values||[""]).map(f=>{const y=v`
                    <tr class="template-row">
                      ${A&&L?v`<th rowspan="${h?.values?.length}">
                            <span><code>${h.title||h.name}</code></span>
                          </th>`:""}
                      <th><code>${f.title||f}</code></th>
                      ${(u?.values||[""]).map(_=>v`
                          <td class="template template-x-${u?.values?.indexOf(_)||1} template-y-${h?.values?.indexOf(f.value||f)||1}">
                          ${u.type==="template"&&b((_.value||_).split("%TEMPLATE%")[0]||"")||""}
                          ${h.type==="template"&&b((f.value||f).split("%TEMPLATE%")[0]||"")||""}
                          ${x&&b(x.split("%TEMPLATE%")[0]||"")||""}
                            ${p({...l,...d,...u&&u.type!=="template"&&{[`${u.name}${O(s).getSuffixFromType(u.type)}`]:_.hasOwnProperty("value")?_.value:_},...h&&h.type!=="template"&&{[`${h.name}${O(s).getSuffixFromType(h.type)}`]:f.hasOwnProperty("value")?f.value:f}})}
                         ${h.type==="template"&&b((f.value||f).split("%TEMPLATE%")[1]||"")||""}
                         ${u.type==="template"&&b((_.value||_).split("%TEMPLATE%")[1]||"")||""}
                          ${x&&b(x.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return A=!1,y})}
              </tbody>
            </table>
          `})}`)}
    `}}},xe=(s,t)=>It?.components?.[s]?.[t]?.description?.value??"No Description",Fe=(s,t=150)=>{const e=isNaN(t)?t:{heightPx:t},{afterRender:n="",additionalChromaticOptions:r={},heightPx:o=150}=e;return{parameters:{chromatic:{...Bt?.parameters?.chromatic,...r,disableSnapshot:!1},docs:{disable:!0}},render:(i,c)=>v`
      ${Object.entries(s).map(([a,l])=>{const p=l.name??Me(a);return v`
          <div style='height: ${o}px; margin: var(--syn-spacing-small)'>
            <h3 data-chromatic="ignore">${p}</h3>
            ${l.render?.(i,c)}
          </div>
      `})}
      ${n}
    `}};export{We as a,Fe as b,O as c,xe as g,st as s};
