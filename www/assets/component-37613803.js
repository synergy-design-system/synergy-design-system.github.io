var nt=Object.freeze,Pt=Object.defineProperty;var rt=(n,t)=>nt(Pt(n,"raw",{value:nt(t||n.slice())}));import{n as A,i as S,e as Mt}from"./icon-button-0f7d7fef.js";import{s as Lt}from"./chunk-HJCNT6QR-e16449d2.js";import"./chunk-FJPRWHXQ-684f3606.js";import{d as xt}from"./_docs-e2c24145.js";import Dt from"./preview-c856a228.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const B=window,L=B.trustedTypes,ot=L?L.createPolicy("lit-html",{createHTML:n=>n}):void 0,G="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+N,jt=`<${gt}>`,P=document,W=()=>P.createComment(""),I=n=>n===null||typeof n!="object"&&typeof n!="function",mt=Array.isArray,Rt=n=>mt(n)||typeof n?.[Symbol.iterator]=="function",X=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,at=/>/g,k=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ct=/"/g,vt=/^(?:script|style|textarea|title)$/i,It=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Vt=It(1),V=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ut=new WeakMap,O=P.createTreeWalker(P,129,null,!1);function At(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Ut=(n,t)=>{const e=n.length-1,s=[];let r,o=t===2?"<svg>":"",i=j;for(let u=0;u<e;u++){const a=n[u];let c,l,d=-1,p=0;for(;p<a.length&&(i.lastIndex=p,l=i.exec(a),l!==null);)p=i.lastIndex,i===j?l[1]==="!--"?i=it:l[1]!==void 0?i=at:l[2]!==void 0?(vt.test(l[2])&&(r=RegExp("</"+l[2],"g")),i=k):l[3]!==void 0&&(i=k):i===k?l[0]===">"?(i=r??j,d=-1):l[1]===void 0?d=-2:(d=i.lastIndex-l[2].length,c=l[1],i=l[3]===void 0?k:l[3]==='"'?ct:lt):i===ct||i===lt?i=k:i===it||i===at?i=j:(i=k,r=void 0);const f=i===k&&n[u+1].startsWith("/>")?" ":"";o+=i===j?a+jt:d>=0?(s.push(c),a.slice(0,d)+G+a.slice(d)+N+f):a+N+(d===-2?(s.push(void 0),u):f)}return[At(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,i=0;const u=t.length-1,a=this.parts,[c,l]=Ut(t,e);if(this.el=U.createElement(c,s),O.currentNode=this.el.content,e===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(r=O.nextNode())!==null&&a.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const p of r.getAttributeNames())if(p.endsWith(G)||p.startsWith(N)){const f=l[i++];if(d.push(p),f!==void 0){const b=r.getAttribute(f.toLowerCase()+G).split(N),_=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:_[2],strings:b,ctor:_[1]==="."?Wt:_[1]==="?"?zt:_[1]==="@"?qt:Z})}else a.push({type:6,index:o})}for(const p of d)r.removeAttribute(p)}if(vt.test(r.tagName)){const d=r.textContent.split(N),p=d.length-1;if(p>0){r.textContent=L?L.emptyScript:"";for(let f=0;f<p;f++)r.append(d[f],W()),O.nextNode(),a.push({type:2,index:++o});r.append(d[p],W())}}}else if(r.nodeType===8)if(r.data===gt)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(N,d+1))!==-1;)a.push({type:7,index:o}),d+=N.length-1}o++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function x(n,t,e=n,s){var r,o,i,u;if(t===V)return t;let a=s!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[s]:e._$Cl;const c=I(t)?void 0:t._$litDirective$;return a?.constructor!==c&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(n),a._$AT(n,e,s)),s!==void 0?((i=(u=e)._$Co)!==null&&i!==void 0?i:u._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=x(n,a._$AS(n,t.values),a,s)),t}class Bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:r}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:P).importNode(s,!0);O.currentNode=o;let i=O.nextNode(),u=0,a=0,c=r[0];for(;c!==void 0;){if(u===c.index){let l;c.type===2?l=new Y(i,i.nextSibling,this,t):c.type===1?l=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(l=new Qt(i,this,t)),this._$AV.push(l),c=r[++a]}u!==c?.index&&(i=O.nextNode(),u++)}return O.currentNode=P,o}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{constructor(t,e,s,r){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cp=(o=r?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),I(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==V&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Rt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=U.createElement(At(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{const i=new Bt(o,this),u=i.u(this.options);i.v(s),this.$(u),this._$AH=i}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new U(t)),e}T(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new Y(this.k(W()),this.k(W()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Z{constructor(t,e,s,r,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const o=this.strings;let i=!1;if(o===void 0)t=x(this,t,e,0),i=!I(t)||t!==this._$AH&&t!==V,i&&(this._$AH=t);else{const u=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=x(this,u[s+a],e,a),c===V&&(c=this._$AH[a]),i||(i=!I(c)||c!==this._$AH[a]),c===v?t=v:t!==v&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}i&&!r&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Wt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const Ft=L?L.emptyScript:"";class zt extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,Ft):this.element.removeAttribute(this.name)}}class qt extends Z{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:v)===V)return;const r=this._$AH,o=t===v&&r!==v||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==v&&(r===v||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Qt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const pt=B.litHtmlPolyfillSupport;pt?.(U,Y),((K=B.litHtmlVersions)!==null&&K!==void 0?K:B.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zt=n=>(...t)=>({_$litDirective$:n,values:t});class Kt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(n,t)=>{var e,s;const r=n._$AN;if(r===void 0)return!1;for(const o of r)(s=(e=o)._$AO)===null||s===void 0||s.call(e,t,!1),R(o,t);return!0},F=n=>{let t,e;do{if((t=n._$AM)===void 0)break;e=t._$AN,e.delete(n),n=t}while(e?.size===0)},yt=n=>{for(let t;t=n._$AM;n=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(n))break;e.add(n),te(t)}};function Gt(n){this._$AN!==void 0?(F(this),this._$AM=n,yt(this)):this._$AM=n}function Jt(n,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)R(s[o],!1),F(s[o]);else s!=null&&(R(s,!1),F(s));else R(this,n)}const te=n=>{var t,e,s,r;n.type==Yt.CHILD&&((t=(s=n)._$AP)!==null&&t!==void 0||(s._$AP=Jt),(e=(r=n)._$AQ)!==null&&e!==void 0||(r._$AQ=Gt))};class ee extends Kt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),yt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),e&&(R(this,t),F(this))}setValue(t){if(Xt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class se extends ee{constructor(){super(...arguments),this.prevData={}}render(t){return v}update(t,[e]){var s;this.element!==t.element&&(this.element=t.element),this.host=((s=t.options)===null||s===void 0?void 0:s.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:s}=this;for(const r in t){const o=t[r];o!==e[r]&&(s[r]=o)}}groom(t){const{prevData:e,element:s}=this;if(e)for(const r in e)(!t||!(r in t)&&s[r]===e[r])&&(s[r]=void 0)}}class ne extends se{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const e in t){const s=t[e];s!==this.eventData[e]&&this.applyEvent(e,s)}}applyEvent(t,e){const{prevData:s,element:r}=this;this.eventData[t]=e,s[t]&&r.removeEventListener(t,this,e),r.addEventListener(t,this,e)}groom(t){const{prevData:e,element:s}=this;if(e)for(const r in e)(!t||!(r in t)&&s[r]===e[r])&&this.groomEvent(r,e[r])}groomEvent(t,e){const{element:s}=this;delete this.eventData[t],s.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const s in t){const r=s.slice(1),o=t[s];e.removeEventListener(r,this,o)}}reconnected(){const{eventData:t,element:e}=this;for(const s in t){const r=s.slice(1),o=t[s];e.addEventListener(r,this,o)}}}class re extends ne{apply(t){if(!t)return;const{prevData:e,element:s}=this;for(const r in t){const o=t[r];if(o===e[r])continue;const i=r.slice(1);switch(r[0]){case"@":this.eventData[i]=o,this.applyEvent(i,o);break;case".":s[i]=o;break;case"?":o?s.setAttribute(i,""):s.removeAttribute(i);break;default:o!=null?s.setAttribute(r,String(o)):s.removeAttribute(r);break}}}groom(t){const{prevData:e,element:s}=this;if(e)for(const r in e){const o=r.slice(1);if(!t||!(r in t)&&s[o]===e[r])switch(r[0]){case"@":this.groomEvent(o,e[r]);break;case".":s[o]=void 0;break;case"?":s.removeAttribute(o);break;default:s.removeAttribute(r);break}}}}const oe=Zt(re);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=Symbol.for(""),ie=n=>{if(n?.r===_t)return n?._$litStatic$},H=n=>({_$litStatic$:n,r:_t}),dt=new Map,ae=n=>(t,...e)=>{const s=e.length;let r,o;const i=[],u=[];let a,c=0,l=!1;for(;c<s;){for(a=t[c];c<s&&(o=e[c],(r=ie(o))!==void 0);)a+=r+t[++c],l=!0;c!==s&&u.push(o),i.push(a),c++}if(c===s&&i.push(t[s]),l){const d=i.join("$$lit$$");(t=dt.get(d))===void 0&&(i.raw=i,dt.set(d,t=i)),e=u}return n(t,...e)},J=ae(Vt);function le(n,t){return t.modules?.find(s=>s.declarations?.some(r=>r.tagName===n))?.declarations.find(s=>s.kind==="class"&&s.tagName===n)}function et(n,t){const e={};return n?.members?.forEach(s=>{if(s.kind!=="field"||(s.attribute&&(e[s.attribute]={name:s.attribute,table:{disable:!0}}),e[s.name]={name:s.name,table:{disable:!0}},s.privacy==="private"||s.privacy==="protected"||s.static))return;const r=Nt(s?.type?.text),o=s.attribute?`${s.attribute}-attr`:`${s.name}-prop`,i=z(s.default);e[o]={name:s.attribute||s.name,description:st(s.description,t?.showArgRef?o:"",s.deprecated),defaultValue:i==="''"?"":i,control:{type:St(r)},table:{category:s.attribute?"attributes":"properties",defaultValue:{summary:i},type:{summary:s?.type?.text}}};const u=r?.split("|");u&&u?.length>1&&(e[o].options=u.map(a=>z(a)))}),e}function ce(n){const t={};return n?.members?.forEach(e=>{if(e.kind!=="field"||(t[e.name]={name:e.name,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static))return;const s=Nt(e?.type?.text),r=`${e.name}`,o=z(e.default);t[r]={name:e.name,description:e.description,defaultValue:o==="false"?!1:o==="''"?"":o,control:{type:St(s)},table:{category:"properties",defaultValue:{summary:o},type:{summary:e?.type?.text}}};const i=s?.split("|");i&&i?.length>1&&(t[r].options=i.map(u=>z(u)))}),t}function ue(n){const t={};return n?.events?.forEach(e=>{const s=pe(e.name);t[s]={name:s,description:e.description,table:{category:"events"}}}),t}function bt(n){const t={};return n?.cssProperties?.forEach(e=>{t[e.name]={name:e.name,description:e.description,defaultValue:e.default,control:{type:"text"}}}),t}function wt(n,t){const e={};return n?.cssParts?.forEach(s=>{e[s.name]={name:s.name,table:{disable:!0}},e[`${s.name}-part`]={name:s.name,description:st(s.description,t?.showArgRef?`${s.name}-part`:""),control:"text",defaultValue:`${n?.tagName}::part(${s.name}) {
}`,table:{category:"css shadow parts"}}}),e}function Tt(n,t){const e={};return n?.slots?.forEach(s=>{e[s.name]={name:s.name,table:{disable:!0}};const r=s.name||"default";e[`${r}-slot`]={name:r,description:st(s.description,t?.showArgRef?`${r}-part`:""),control:"text",defaultValue:r==="default"?"":`<span slot="${r}"></span>`,table:{category:"slots"}}}),e}function St(n){if(!n)return"text";if(n.includes("boolean"))return"boolean";if(n.includes("number")&&!n.includes("string"))return"number";if(n.includes("Date"))return"date";const t=n.split("|");return t.length>1?t.length<3?"inline-radio":t.length<=4?"radio":"select":"text"}function Nt(n){return n?n.replace(" | undefined","").replace(" | null",""):""}function z(n){return n?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function st(n,t,e){let s="";return e&&(s+=`\`@deprecated\` ${e}`),n&&(s+=s?`


`:"",s+=n),t&&(s+=s?`

`:"",s+=`arg ref - \`${t}\``),s}const pe=n=>`on${he(de(n))}`;function de(n=""){return n.split("-").map((s,r)=>r?s.charAt(0).toUpperCase()+s.slice(1).toLowerCase():s.toLowerCase()).join("")}function he(n){return n.charAt(0).toUpperCase()+n.slice(1)}const{useArgs:fe}=__STORYBOOK_MODULE_CLIENT_API__;let q,ht;var $t;function $e(n,t,e){if(!t)return J`<${H(n.tagName)}></${H(n.tagName)}>`;n?.tagName!==ht&&(q=void 0,ht=n?.tagName);const s=ge(n,t),r=Ae(n,t);ye(n);const o=me(n,t);return J($t||($t=rt(["",`
<`," "," ",">","","</",`>

<script>
  component = document.querySelector('`,`');
<\/script>
`])),Et(n,t),H(n.tagName),oe(s),o,r,e||"",H(n.tagName),n.tagName)}function Et(n,t){const e=ve(n,t);return`${e}`?.replaceAll(/\s+/g,"")!=""?J`<style>${e}</style>
`:""}function ge(n,t){const e=et(n),s={};return Object.keys(e).filter(r=>r.endsWith("-attr")).forEach(r=>{const o=e[r],i=e[r].name,u=t[r];if(u){const a=o.control.type==="boolean"?`?${i}`:i;s[a]=u==="false"?!1:u}}),Object.keys(t).filter(r=>!r.endsWith("-attr")&&!r.endsWith("-part")&&!r.endsWith("-slot")).forEach(r=>{if(r.startsWith("on"))return;const o=t[r];o&&(s[`.${r}`]=o)}),s}function me(n,t){const e=bt(n);return Object.keys(e).some(o=>!!t[o])?H(`style="${Object.keys(e).map(o=>{const i=e[o].name,u=t[o];return u?`${i}: ${u||""}`:null}).filter(o=>o!==null).join(";")}"`):void 0}function ve(n,t){const e=wt(n);return Object.keys(e).some(o=>!!t[o])?H(`${Object.keys(e).filter(o=>o.endsWith("-part")).map(o=>{const i=e[o].name,u=t[o];return u?.replaceAll(/\s+/g,"")!==`${n?.tagName}::part(${i}){}`?`
${u}`:null}).filter(o=>o!==null).join(`
`)}
`):void 0}function Ae(n,t){const e=Tt(n);return H(`${Object.keys(e).filter(r=>r.endsWith("-slot")).map(r=>{const o=e[r].name,i=t[r];return o==="default"?i||null:i!==`<span slot="${o}"></span>`?i:null}).filter(r=>r!==null).join("")}`)}function ye(n){_e(n),setTimeout(()=>{const t=document.querySelector(n.tagName);q?.observe(t,{attributes:!0})})}function _e(n){let t=!1;const e=fe()[1],s=et(n);q||(q=new MutationObserver(r=>{r.forEach(o=>{if(o.type!=="attributes"||o.attributeName==="class"&&t)return;t=!0;const i=s[`${o.attributeName}-attr`];i?.control==="boolean"||i?.control?.type==="boolean"?e({[`${o.attributeName}-attr`]:o.target?.hasAttribute(o.attributeName||"")}):e({[`${o.attributeName}-attr`]:o.target.getAttribute(o.attributeName||"")}),t=!1})}))}function Ct(n,t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const s=le(n,e),r=s?.events?.map(o=>o.name)||[];return{argTypes:kt(s,{showArgRef:t?.showArgRef}),reactArgTypes:we(s),args:be(s),events:r,styleTemplate:o=>Et(s,o),template:(o,i)=>$e(s,o,i),manifest:s}}function kt(n,t){return{...et(n,{showArgRef:t?.showArgRef}),...Tt(n,{showArgRef:t?.showArgRef}),...bt(n),...wt(n,{showArgRef:t?.showArgRef})}}function be(n){return Object.entries(kt(n)).filter(([,e])=>e?.control).map(([e,s])=>({[e]:s.defaultValue||""})).reduce((e,s)=>({...e,...s}),{})}function we(n){return{...ce(n),...ue(n)}}const ft=String.raw`[A-Za-z][^/\s>]*`,Te=String.raw`(?<!\w)"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Se=String.raw`(?<!\w)'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Ot=String.raw`${Te}|${Se}`,Ne=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ee=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Ce=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,ke=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Oe=String.raw`${Ne}|${Ee}|${Ce}`,He=String.raw`(?<attrName>${ke})(?:\s*=\s*(?:${Oe}))?`,Pe=String.raw`${Ot}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,Ht=String.raw`(?<attrSpace>\s*)(?:${He}|(?<attrText>${Pe}))`,Me={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${ft})(?<attrs>(?:${Ht})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${ft})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Ot}|['"]`,wildcard:String.raw`.`},Le=Object.entries(Me).map(([n,t])=>`(?<${n}>${t})`).join("|");function*xe(n,t){let e,{lastIndex:s}=n;for(;e=n.exec(t);)yield e,{lastIndex:s}=n;if(s!=t.length)throw new Error("Failed to parse string")}const De=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Q(n,t="  ",e=80){const s=new RegExp(Le,"gys"),r=new RegExp(Ht,"gy"),o=[];let i=null,u=0,a=!1,c=0;const l=(...p)=>{for(const f of p){if(!i)if(f==`
`)a=!0;else{const _=f.indexOf(`
`),m=_==-1?f.length:_;c+m>e&&/^[ \t]+$/.test(o[o.length-1])&&(o.pop(),l(`
`)),a&&(a=!1,l(t.repeat(u)))}const b=f.lastIndexOf(`
`);b==-1?c+=f.length:c=f.length-b-1,o.push(f)}};for(const p of xe(s,n)){if(Q.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const f=p.groups.endTagName.toLowerCase();f==i&&(i=null),i||(--u,l(`</${f}>`))}if(i)l(p[0]);else if(p.groups.space)l(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)l(p[0]);else if(p.groups.startTag){const f=p.groups.startTagName.toLowerCase();if(l(`<${f}`),++u,p.groups.attrs){let{lastIndex:_}=r,m,E;for(;m=r.exec(p.groups.attrs);){if({lastIndex:_}=r,Q.__strict&&m.groups.attrText)throw new Error("Unexpected attr text");m.groups.attrText?(m.groups.attrSpace&&l(/\n/.test(m.groups.attrSpace)?`
`:" "),l(m.groups.attrText)):((m.groups.attrSpace||!E?.groups.attrText)&&l(/\n/.test(m.groups.attrSpace)?`
`:" "),l(`${m.groups.attrName}${m.groups.quotedAttrValue?`="${m.groups.quotedAttrValue}"`:m.groups.singleQuotedAttrValue?`='${m.groups.singleQuotedAttrValue}'`:m.groups.unquotedAttrValue?`=${m.groups.unquotedAttrValue}`:""}`)),E=m}if(_!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const b=!!p.groups.closingSlash;l(b?" />":">"),b||De.has(f)?--u:["pre","script","style"].includes(f)&&(i=f)}}let d=!1;for(;/^\s+$/.test(o[o.length-1]);){const p=o.pop();/\n/.test(p)&&(d=!0)}return d&&o.push(`
`),o.join("")}Q.default=Q;async function je(){await fetch("./custom-elements.json");const t=await(await fetch("./custom-elements.json")).json();Lt(t),console.log("Custom elements manifest loaded")}await je();const tt=n=>{const{args:t,events:e,argTypes:s,manifest:r}=Ct(n),o=Object.fromEntries(Object.entries(s).map(([a,c])=>c?.control?.type==="number"&&c.options&&c.options?.length>0?[a,{...c,control:{type:"select"}}]:[a,c])),i=()=>({status:{styles:{backgroundColor:r?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${r?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${r?.since}`}});return{args:t,argTypes:(()=>{const a=()=>{const l=r?.members?.filter(f=>f.kind==="field"),d=new Set(r?.attributes?.map(f=>f.fieldName));return l?.filter(f=>!d.has(f.name)&&f?.privacy!=="private")?.map(f=>f.name)};return{...o,...r?.events?.reduce((l,d)=>(l[d.name]={...d,control:!1,table:{category:"Events"}},l),{}),...r?.members?.filter(l=>l.kind==="method"&&l?.privacy!=="private").reduce((l,d)=>(l[d.name]={...d,control:!1,table:{category:"Methods"}},l),{}),...a()?.reduce((l,d)=>(l[`${d}-prop`]={table:{disable:!0}},l[d]={control:!1,table:{category:"Properties"}},l),{})}})(),parameters:{badges:["status","since"],badgesConfig:i(),actions:{handles:e}}}},M=n=>({getSuffixFromType:t=>({attribute:"-attr",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:e}=tt(n);return e[t]?.control?.type==="boolean"?[!0,!1]:e[t].options},getValuesFromAttributes:t=>t?.map(e=>(e.endsWith("-attr")||(e=`${e}-attr`),{name:e,values:M(n).getValuesFromAttribute(e)})),overrideArgs:(t,e)=>{const s=e||tt(n).args,r=Array.isArray(t)?t:[t];for(const o of r){const i=M(n).getSuffixFromType(o.type);s[`${o.name}${i}`]=o.value}return s}}),Fe=n=>{const{template:t,manifest:e}=Ct(n),{args:s}=tt(n),{getValuesFromAttribute:r}=M(n);return{generateTemplate:({axis:i,constants:u=[],options:a,args:c=s})=>{const l=h=>{if(!e?.style)return t(h);const $=Object.keys(h).filter(g=>g.endsWith("-attr")).reduce((g,w)=>{const y=w.substring(0,w.length-5);return h[w]===!0?g[y]=!0:h[w]==="false"||h[w]==="(default)"?g[y]=!1:h[w]&&(y.endsWith("...")?g[y.replace("...",h[w])]=!0:g[h[w]]=!0),g},{}),T=h["default-slot"]||"",C={[n]:!0,...$},D=Object.keys(C).filter(g=>C[g]).join(" ");if(a?.templateContent){const g=a.templateContent.replaceAll("%SLOT%",T).replaceAll("%CLASSES%",D);return S(g)}return A`<div class=${Mt(C)}>${S(T)}</div>`},d=(Array.isArray(u)?u:[u]).reduce((h,$)=>({...h,[`${$.name}${M(n).getSuffixFromType($.type)}`]:$.value}),{});if(!i?.x&&!i?.y&&!a?.title)return A`${l({...c,...d})}`;const p=h=>h?Array.isArray(h)?h.map($=>({...$,values:$.values||r($.name)})):[{...h,values:h.values||r(h.name)}]:[{}],f=p(i?.x),b=p(i?.y),m=(Array.isArray(u)?u:[u]).find(h=>h.type==="template")?.value,E=`uuid-${crypto.randomUUID()}`;return A`
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
          .${E}.story-template tbody tr.template-row td.template {
            background: ${a?.templateBackground};
          }
        `}

        ${a?.templateBackgrounds?.colors.map((h,$)=>{const T=C=>`${a?.templateBackgrounds?.colors.length}n + ${C+1}`;return a?.templateBackgrounds?.alternate==="y"?`
                .${E}.story-template tbody tr.template-row:nth-of-type(${T($)}) td.template {
                  background: ${h};
                }
              `:`
                .${E}.story-template tbody tr.template-row td.template:nth-of-type(${T($)}) {
                  background: ${h};
                }
              `})}
      </style>
      ${f.map(h=>A` ${b.map($=>{let T=!0;const C=f.length>1||h.values,D=(h&&$||b.length>1)&&$?.values;return A`
            <table class="story-template ${E} ${a?.classes}">
              <thead>
                ${a?.title&&A`<tr>
                  <th class="title" colspan=${(h.values?.length||0)+3}><code>${a?.title}</code></th>
                </tr>`}
                ${h&&h.values&&A`
                  <tr>
                    ${D?A`<td></td>`:""} <td></td>
                    ${C&&A`<th colspan=${h.values?.length||0}><code>${h.title||h.name}</code></th>`}
                    </tr>
                  </tr>
                  ${A`
                    <tr>
                      ${D?A`<td></td>`:""}
                      <td></td>
                      ${h?.values?.map(g=>A`<td><code>${g.title||g}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${($?.values||[""]).map(g=>{const w=A`
                    <tr class="template-row">
                      ${T&&D?A`<th rowspan="${$?.values?.length}">
                            <span><code>${$.title||$.name}</code></span>
                          </th>`:""}
                      <th><code>${g.title||g}</code></th>
                      ${(h?.values||[""]).map(y=>A`
                          <td class="template template-x-${h?.values?.indexOf(y)||1} template-y-${$?.values?.indexOf(g.value||g)||1}">
                          ${h.type==="template"&&S((y.value||y).split("%TEMPLATE%")[0]||"")||""}
                          ${$.type==="template"&&S((g.value||g).split("%TEMPLATE%")[0]||"")||""}
                          ${m&&S(m.split("%TEMPLATE%")[0]||"")||""}
                            ${l({...c,...d,...h&&h.type!=="template"&&{[`${h.name}${M(n).getSuffixFromType(h.type)}`]:y.hasOwnProperty("value")?y.value:y},...$&&$.type!=="template"&&{[`${$.name}${M(n).getSuffixFromType($.type)}`]:g.hasOwnProperty("value")?g.value:g}})}
                         ${$.type==="template"&&S((g.value||g).split("%TEMPLATE%")[1]||"")||""}
                         ${h.type==="template"&&S((y.value||y).split("%TEMPLATE%")[1]||"")||""}
                          ${m&&S(m.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return T=!1,w})}
              </tbody>
            </table>
          `})}`)}
    `}}},ze=(n,t)=>xt?.components?.[n]?.[t]?.description?.value??"No Description",qe=(n,t=150)=>({parameters:{chromatic:{...Dt?.parameters?.chromatic,disableSnapshot:!1},docs:{disable:!0}},render:(e,s)=>A`${n.map(r=>A`
    <div style='height: ${t}px; margin: var(--syn-spacing-small)'>
      <h3>${r.name}</h3>
      ${r.render?.(e,s)}
    </div>
    `)}`});export{Fe as a,qe as b,M as c,ze as g,tt as s};
