import{d as Ft,f as dt,h as ht,t as F}from"./library-BX4ONXik.js";import{a as Wt,T as Q,E as it,m as ee}from"./directive-helpers-Dvm_Ferq.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ve(t){return(e,n)=>{const o=typeof e=="function"?e:e[n];Object.assign(o,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ne;function ze(t){return(e,n)=>Ft(e,n,{get(){return(this.renderRoot??(ne??=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(t){return(e,n)=>{const{slot:o,selector:i}=t??{},s="slot"+(o?`[name=${o}]`:":not([name])");return Ft(e,n,{get(){const r=this.renderRoot?.querySelector(s),c=r?.assignedElements(t)??[];return i===void 0?c:c.filter(l=>l.matches(i))}})}}const bt=new Set,Z=new Map;let U,Ct="ltr",Rt="en";const Ht=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ht){const t=new MutationObserver(It);Ct=document.documentElement.dir||"ltr",Rt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ue(...t){t.map(e=>{const n=e.$code.toLowerCase();Z.has(n)?Z.set(n,Object.assign(Object.assign({},Z.get(n)),e)):Z.set(n,e),U||(U=e)}),It()}function It(){Ht&&(Ct=document.documentElement.dir||"ltr",Rt=document.documentElement.lang||navigator.language),[...bt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let qe=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){bt.add(this.host)}hostDisconnected(){bt.delete(this.host)}dir(){return`${this.host.dir||Ct}`.toLowerCase()}lang(){return`${this.host.lang||Rt}`.toLowerCase()}getTranslationData(e){var n,o;const i=new Intl.Locale(e.replace(/_/g,"-")),s=i?.language.toLowerCase(),r=(o=(n=i?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&o!==void 0?o:"",c=Z.get(`${s}-${r}`),l=Z.get(s);return{locale:i,language:s,region:r,primary:c,secondary:l}}exists(e,n){var o;const{primary:i,secondary:s}=this.getTranslationData((o=n.lang)!==null&&o!==void 0?o:this.lang());return n=Object.assign({includeFallback:!1},n),!!(i&&i[e]||s&&s[e]||n.includeFallback&&U&&U[e])}term(e,...n){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(i&&i[e])s=i[e];else if(U&&U[e])s=U[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...n):s}date(e,n){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),n).format(e)}number(e,n){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),n).format(e)}relativeTime(e,n,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=dt(class extends ht{constructor(t){if(super(t),t.type!==F.PROPERTY&&t.type!==F.ATTRIBUTE&&t.type!==F.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Wt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Q||e===it)return e;const n=t.element,o=t.name;if(t.type===F.PROPERTY){if(e===n[o])return Q}else if(t.type===F.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return Q}else if(t.type===F.ATTRIBUTE&&n.getAttribute(o)===e+"")return Q;return ee(t),e}}),V=Math.min,T=Math.max,lt=Math.round,ct=Math.floor,P=t=>({x:t,y:t}),oe={left:"right",right:"left",bottom:"top",top:"bottom"},ie={start:"end",end:"start"};function At(t,e,n){return T(t,V(e,n))}function tt(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function et(t){return t.split("-")[1]}function Yt(t){return t==="x"?"y":"x"}function Et(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(z(t))?"y":"x"}function Lt(t){return Yt(q(t))}function se(t,e,n){n===void 0&&(n=!1);const o=et(t),i=Lt(t),s=Et(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=at(r)),[r,at(r)]}function re(t){const e=at(t);return[Ot(t),e,Ot(e)]}function Ot(t){return t.replace(/start|end/g,e=>ie[e])}function ce(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function le(t,e,n,o){const i=et(t);let s=ce(z(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(Ot)))),s}function at(t){return t.replace(/left|right|bottom|top/g,e=>oe[e])}function ae(t){return{top:0,right:0,bottom:0,left:0,...t}}function Vt(t){return typeof t!="number"?ae(t):{top:t,right:t,bottom:t,left:t}}function ft(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Nt(t,e,n){let{reference:o,floating:i}=t;const s=q(e),r=Lt(e),c=Et(r),l=z(e),a=s==="y",f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let u;switch(l){case"top":u={x:f,y:o.y-i.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-i.width,y:d};break;default:u={x:o.x,y:o.y}}switch(et(e)){case"start":u[r]-=m*(n&&a?-1:1);break;case"end":u[r]+=m*(n&&a?-1:1);break}return u}const fe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:d}=Nt(a,o,l),m=o,u={},h=0;for(let g=0;g<c.length;g++){const{name:w,fn:p}=c[g],{x:y,y:x,data:b,reset:v}=await p({x:f,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:u,rects:a,platform:r,elements:{reference:t,floating:e}});f=y??f,d=x??d,u={...u,[w]:{...u[w],...b}},v&&h<=50&&(h++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(a=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:f,y:d}=Nt(a,m,l)),g=-1)}return{x:f,y:d,placement:m,strategy:i,middlewareData:u}};async function Dt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=tt(e,t),h=Vt(u),w=c[m?d==="floating"?"reference":"floating":d],p=ft(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:l})),y=d==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},v=ft(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:x,strategy:l}):y);return{top:(p.top-v.top+h.top)/b.y,bottom:(v.bottom-p.bottom+h.bottom)/b.y,left:(p.left-v.left+h.left)/b.x,right:(v.right-p.right+h.right)/b.x}}const ue=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:f=0}=tt(t,e)||{};if(a==null)return{};const d=Vt(f),m={x:n,y:o},u=Lt(i),h=Et(u),g=await r.getDimensions(a),w=u==="y",p=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[h]+s.reference[u]-m[u]-s.floating[h],v=m[u]-s.reference[u],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let A=C?C[x]:0;(!A||!await(r.isElement==null?void 0:r.isElement(C)))&&(A=c.floating[x]||s.floating[h]);const k=b/2-v/2,D=A/2-g[h]/2-1,R=V(d[p],D),W=V(d[y],D),S=R,H=A-g[h]-W,O=A/2-g[h]/2+k,K=At(S,O,H),B=!l.arrow&&et(i)!=null&&O!==K&&s.reference[h]/2-(O<S?R:W)-g[h]/2<0,_=B?O<S?O-S:O-H:0;return{[u]:m[u]+_,data:{[u]:K,centerOffset:O-K-_,...B&&{alignmentOffset:_}},reset:B}}}),de=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=tt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=z(i),y=q(c),x=z(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(a.floating)),v=m||(x||!g?[at(c)]:re(c)),C=h!=="none";!m&&C&&v.push(...le(c,g,h,b));const A=[c,...v],k=await Dt(e,w),D=[];let R=((o=s.flip)==null?void 0:o.overflows)||[];if(f&&D.push(k[p]),d){const O=se(i,r,b);D.push(k[O[0]],k[O[1]])}if(R=[...R,{placement:i,overflows:D}],!D.every(O=>O<=0)){var W,S;const O=(((W=s.flip)==null?void 0:W.index)||0)+1,K=A[O];if(K)return{data:{index:O,overflows:R},reset:{placement:K}};let B=(S=R.filter(_=>_.overflows[0]<=0).sort((_,I)=>_.overflows[1]-I.overflows[1])[0])==null?void 0:S.placement;if(!B)switch(u){case"bestFit":{var H;const _=(H=R.filter(I=>{if(C){const Y=q(I.placement);return Y===y||Y==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(Y=>Y>0).reduce((Y,te)=>Y+te,0)]).sort((I,Y)=>I[1]-Y[1])[0])==null?void 0:H[0];_&&(B=_);break}case"initialPlacement":B=c;break}if(i!==B)return{reset:{placement:B}}}return{}}}};async function he(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=z(n),c=et(n),l=q(n)==="y",a=["left","top"].includes(r)?-1:1,f=s&&l?-1:1,d=tt(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof h=="number"&&(u=c==="end"?h*-1:h),l?{x:u*f,y:m*a}:{x:m*a,y:u*f}}const me=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await he(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},ge=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...l}=tt(t,e),a={x:n,y:o},f=await Dt(e,l),d=q(z(i)),m=Yt(d);let u=a[m],h=a[d];if(s){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",y=u+f[w],x=u-f[p];u=At(y,u,x)}if(r){const w=d==="y"?"top":"left",p=d==="y"?"bottom":"right",y=h+f[w],x=h-f[p];h=At(y,h,x)}const g=c.fn({...e,[m]:u,[d]:h});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:s,[d]:r}}}}}},pe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:s,platform:r,elements:c}=e,{apply:l=()=>{},...a}=tt(t,e),f=await Dt(e,a),d=z(i),m=et(i),u=q(i)==="y",{width:h,height:g}=s.floating;let w,p;d==="top"||d==="bottom"?(w=d,p=m===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(p=d,w=m==="end"?"top":"bottom");const y=g-f.top-f.bottom,x=h-f.left-f.right,b=V(g-f[w],y),v=V(h-f[p],x),C=!e.middlewareData.shift;let A=b,k=v;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(k=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(A=y),C&&!m){const R=T(f.left,0),W=T(f.right,0),S=T(f.top,0),H=T(f.bottom,0);u?k=h-2*(R!==0||W!==0?R+W:T(f.left,f.right)):A=g-2*(S!==0||H!==0?S+H:T(f.top,f.bottom))}await l({...e,availableWidth:k,availableHeight:A});const D=await r.getDimensions(c.floating);return h!==D.width||g!==D.height?{reset:{rects:!0}}:{}}}};function mt(){return typeof window<"u"}function nt(t){return zt(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(zt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function zt(t){return mt()?t instanceof Node||t instanceof $(t).Node:!1}function E(t){return mt()?t instanceof Element||t instanceof $(t).Element:!1}function N(t){return mt()?t instanceof HTMLElement||t instanceof $(t).HTMLElement:!1}function Mt(t){return!mt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function rt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function we(t){return["table","td","th"].includes(nt(t))}function gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function pt(t){const e=St(),n=E(t)?L(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ye(t){let e=j(t);for(;N(e)&&!J(e);){if(pt(e))return e;if(gt(e))return null;e=j(e)}return null}function St(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(nt(t))}function L(t){return $(t).getComputedStyle(t)}function wt(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function j(t){if(nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Mt(t)&&t.host||M(t);return Mt(e)?e.host:e}function jt(t){const e=j(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&rt(e)?e:jt(e)}function st(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=jt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=$(i);if(s){const c=Tt(r);return e.concat(r,r.visualViewport||[],rt(i)?i:[],c&&n?st(c):[])}return e.concat(i,st(i,[],n))}function Tt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ut(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=lt(n)!==s||lt(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function _t(t){return E(t)?t:t.contextElement}function G(t){const e=_t(t);if(!N(e))return P(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ut(e);let r=(s?lt(n.width):n.width)/o,c=(s?lt(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const xe=P(0);function qt(t){const e=$(t);return!St()||!e.visualViewport?xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ve(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=_t(t);let r=P(1);e&&(o?E(o)&&(r=G(o)):r=G(t));const c=ve(s,n,o)?qt(s):P(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,f=i.width/r.x,d=i.height/r.y;if(s){const m=$(s),u=o&&E(o)?$(o):o;let h=m,g=Tt(h);for(;g&&o&&u!==h;){const w=G(g),p=g.getBoundingClientRect(),y=L(g),x=p.left+(g.clientLeft+parseFloat(y.paddingLeft))*w.x,b=p.top+(g.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,f*=w.x,d*=w.y,l+=x,a+=b,h=$(g),g=Tt(h)}}return ft({width:f,height:d,x:l,y:a})}function Pt(t,e){const n=wt(t).scrollLeft;return e?e.left+n:X(M(t)).left+n}function Xt(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:Pt(t,o)),s=o.top+e.scrollTop;return{x:i,y:s}}function be(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=M(o),c=e?gt(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=P(1);const f=P(0),d=N(o);if((d||!d&&!s)&&((nt(o)!=="body"||rt(r))&&(l=wt(o)),N(o))){const u=X(o);a=G(o),f.x=u.x+o.clientLeft,f.y=u.y+o.clientTop}const m=r&&!d&&!s?Xt(r,l,!0):P(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+f.x+m.x,y:n.y*a.y-l.scrollTop*a.y+f.y+m.y}}function Ae(t){return Array.from(t.getClientRects())}function Oe(t){const e=M(t),n=wt(t),o=t.ownerDocument.body,i=T(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=T(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Pt(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(r+=T(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function Te(t,e){const n=$(t),o=M(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=St();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function $e(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=N(t)?G(t):P(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function kt(t,e,n){let o;if(e==="viewport")o=Te(t,n);else if(e==="document")o=Oe(M(t));else if(E(e))o=$e(e,n);else{const i=qt(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ft(o)}function Kt(t,e){const n=j(t);return n===e||!E(n)||J(n)?!1:L(n).position==="fixed"||Kt(n,e)}function Ce(t,e){const n=e.get(t);if(n)return n;let o=st(t,[],!1).filter(c=>E(c)&&nt(c)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?j(t):t;for(;E(r)&&!J(r);){const c=L(r),l=pt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||rt(r)&&!l&&Kt(t,r))?o=o.filter(f=>f!==r):i=c,r=j(r)}return e.set(t,o),o}function Re(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?gt(e)?[]:Ce(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,f)=>{const d=kt(e,f,i);return a.top=T(d.top,a.top),a.right=V(d.right,a.right),a.bottom=V(d.bottom,a.bottom),a.left=T(d.left,a.left),a},kt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ee(t){const{width:e,height:n}=Ut(t);return{width:e,height:n}}function Le(t,e,n){const o=N(e),i=M(e),s=n==="fixed",r=X(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=P(0);if(o||!o&&!s)if((nt(e)!=="body"||rt(i))&&(c=wt(e)),o){const m=X(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else i&&(l.x=Pt(i));const a=i&&!o&&!s?Xt(i,c):P(0),f=r.left+c.scrollLeft-l.x-a.x,d=r.top+c.scrollTop-l.y-a.y;return{x:f,y:d,width:r.width,height:r.height}}function yt(t){return L(t).position==="static"}function Bt(t,e){if(!N(t)||L(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return M(t)===n&&(n=n.ownerDocument.body),n}function Qt(t,e){const n=$(t);if(gt(t))return n;if(!N(t)){let i=j(t);for(;i&&!J(i);){if(E(i)&&!yt(i))return i;i=j(i)}return n}let o=Bt(t,e);for(;o&&we(o)&&yt(o);)o=Bt(o,e);return o&&J(o)&&yt(o)&&!pt(o)?n:o||ye(t)||n}const De=async function(t){const e=this.getOffsetParent||Qt,n=this.getDimensions,o=await n(t.floating);return{reference:Le(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Se(t){return L(t).direction==="rtl"}const _e={convertOffsetParentRelativeRectToViewportRelativeRect:be,getDocumentElement:M,getClippingRect:Re,getOffsetParent:Qt,getElementRects:De,getClientRects:Ae,getDimensions:Ee,getScale:G,isElement:E,isRTL:Se};function Zt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Pe(t,e){let n=null,o;const i=M(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:f,top:d,width:m,height:u}=a;if(c||e(),!m||!u)return;const h=ct(d),g=ct(i.clientWidth-(f+m)),w=ct(i.clientHeight-(d+u)),p=ct(f),x={rootMargin:-h+"px "+-g+"px "+-w+"px "+-p+"px",threshold:T(0,V(1,l))||1};let b=!0;function v(C){const A=C[0].intersectionRatio;if(A!==l){if(!b)return r();A?r(!1,A):o=setTimeout(()=>{r(!1,1e-7)},1e3)}A===1&&!Zt(a,t.getBoundingClientRect())&&r(),b=!1}try{n=new IntersectionObserver(v,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,x)}n.observe(t)}return r(!0),s}function Qe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=_t(t),f=i||s?[...a?st(a):[],...st(e)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=a&&c?Pe(a,n):null;let m=-1,u=null;r&&(u=new ResizeObserver(p=>{let[y]=p;y&&y.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=u)==null||x.observe(e)})),n()}),a&&!l&&u.observe(a),u.observe(e));let h,g=l?X(t):null;l&&w();function w(){const p=X(t);g&&!Zt(g,p)&&n(),g=p,h=requestAnimationFrame(w)}return n(),()=>{var p;f.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),d?.(),(p=u)==null||p.disconnect(),u=null,l&&cancelAnimationFrame(h)}}const Ze=me,Ge=ge,Je=de,tn=pe,en=ue,nn=(t,e,n)=>{const o=new Map,i={platform:_e,...n},s={...i.platform,_c:o};return fe(t,e,{...i,platform:s})};function on(t){return Ne(t)}function xt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ne(t){for(let e=t;e;e=xt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=xt(t);e;e=xt(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||pt(n)||e.tagName==="BODY"))return e}return null}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $t=class extends ht{constructor(e){if(super(e),this.it=it,e.type!==F.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===it||e==null)return this._t=void 0,this.it=e;if(e===Q)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};$t.directiveName="unsafeHTML",$t.resultType=1;const rn=dt($t);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt="important",Me=" !"+Gt,cn=dt(class extends ht{constructor(t){if(super(t),t.type!==F.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const i=e[o];if(i!=null){this.ft.add(o);const s=typeof i=="string"&&i.endsWith(Me);o.includes("-")||s?n.setProperty(o,s?i.slice(0,-11):i,s?Gt:""):n[o]=i}}return Q}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),ot(o,e);return!0},ut=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},Jt=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Fe(e)}};function ke(t){this._$AN!==void 0?(ut(this),this._$AM=t,Jt(this)):this._$AM=t}function Be(t,e=!1,n=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let s=n;s<o.length;s++)ot(o[s],!1),ut(o[s]);else o!=null&&(ot(o,!1),ut(o));else ot(this,t)}const Fe=t=>{t.type==F.CHILD&&(t._$AP??=Be,t._$AQ??=ke)};class We extends ht{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),Jt(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(ot(this,e),ut(this))}setValue(e){if(Wt(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln=()=>new He;class He{}const vt=new WeakMap,an=dt(class extends We{render(t){return it}update(t,[e]){const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),it}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let n=vt.get(e);n===void 0&&(n=new WeakMap,vt.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?vt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{qe as L,je as a,Qe as b,Ze as c,tn as d,en as e,Je as f,on as g,nn as h,ze as i,cn as j,We as k,Ke as l,ln as m,an as n,rn as o,_e as p,Ue as r,Ge as s,Ve as t};
