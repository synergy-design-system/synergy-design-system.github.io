var Wo=Object.defineProperty,Wn=Object.defineProperties,jn=Object.getOwnPropertyDescriptor,Gn=Object.getOwnPropertyDescriptors,Ri=Object.getOwnPropertySymbols,jo=Object.prototype.hasOwnProperty,Go=Object.prototype.propertyIsEnumerable,ns=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),$s=t=>{throw TypeError(t)},Ys=(t,e,i)=>e in t?Wo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,it=(t,e)=>{for(var i in e||(e={}))jo.call(e,i)&&Ys(t,i,e[i]);if(Ri)for(var i of Ri(e))Go.call(e,i)&&Ys(t,i,e[i]);return t},ue=(t,e)=>Wn(t,Gn(e)),Kn=(t,e)=>{var i={};for(var s in t)jo.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&Ri)for(var s of Ri(t))e.indexOf(s)<0&&Go.call(t,s)&&(i[s]=t[s]);return i},n=(t,e,i,s)=>{for(var o=s>1?void 0:s?jn(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(o=(s?r(e,i,o):r(o))||o);return s&&o&&Wo(e,i,o),o},As=(t,e,i)=>e.has(t)||$s("Cannot "+i),g=(t,e,i)=>(As(t,e,"read from private field"),i?i.call(t):e.get(t)),_t=(t,e,i)=>e.has(t)?$s("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),J=(t,e,i,s)=>(As(t,e,"write to private field"),e.set(t,i),i),I=(t,e,i)=>(As(t,e,"access private method"),i),Xn=function(t,e){this[0]=t,this[1]=e},Yn=t=>{var e=t[ns("asyncIterator")],i=!1,s,o={};return e==null?(e=t[ns("iterator")](),s=a=>o[a]=r=>e[a](r)):(e=e.call(t),s=a=>o[a]=r=>{if(i){if(i=!1,a==="throw")throw r;return r}return i=!0,{done:!1,value:new Xn(new Promise(d=>{var c=e[a](r);c instanceof Object||$s("Object expected"),d(c)}),1)}}),o[ns("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=a=>{throw a},"return"in e&&s("return"),o},je=new WeakMap,Ge=new WeakMap,Ke=new WeakMap,as=new WeakSet,zi=new WeakMap,Wt=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),a=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="syn-button";if(this.host.isConnected&&!s&&!r&&typeof o=="string"&&o.length>0&&typeof a<"u"){if(a instanceof FileList){const d=a;for(const c of d)i.formData.append(o,c,c.name);return}Array.isArray(a)?a.forEach(d=>{i.formData.append(o,d.toString())}):i.formData.append(o,a.toString())}},this.handleFormSubmit=i=>{var s;const o=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=je.get(this.form))==null||s.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!o&&!a(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),zi.set(this.host,[])},this.handleInteraction=i=>{const s=zi.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=it({form:i=>{const s=i.form;if(s){const a=i.getRootNode().querySelector(`#${s}`);if(a)return a}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["syn-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),zi.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),zi.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,je.has(this.form)?je.get(this.form).add(this.host):je.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ge.has(this.form)||(Ge.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ke.has(this.form)||(Ke.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=je.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ge.has(this.form)&&(this.form.reportValidity=Ge.get(this.form),Ge.delete(this.form)),Ke.has(this.form)&&(this.form.checkValidity=Ke.get(this.form),Ke.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?as.add(t):as.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!as.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t);const o=e.parentElement;if(o&&o.tagName.toLocaleUpperCase()==="SYN-VALIDATE"){const a=o.getValidity();e.toggleAttribute("data-user-invalid",!t&&!a)}else e.toggleAttribute("data-user-invalid",!t&&i);e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},bi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Zn=Object.freeze(ue(it({},bi),{valid:!1,valueMissing:!0})),Ko=Object.freeze(ue(it({},bi),{valid:!1,customError:!0}));const Ii=globalThis,Os=Ii.ShadowRoot&&(Ii.ShadyCSS===void 0||Ii.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Es=Symbol(),Zs=new WeakMap;let Xo=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==Es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Os&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=Zs.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Zs.set(i,e))}return e}toString(){return this.cssText}};const Qn=t=>new Xo(typeof t=="string"?t:t+"",void 0,Es),_=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,o,a)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new Xo(i,t,Es)},Jn=(t,e)=>{if(Os)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),o=Ii.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},Qs=Os?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Qn(i)})(t):t;const{is:ta,defineProperty:ea,getOwnPropertyDescriptor:ia,getOwnPropertyNames:sa,getOwnPropertySymbols:oa,getPrototypeOf:na}=Object,Xi=globalThis,Js=Xi.trustedTypes,aa=Js?Js.emptyScript:"",ra=Xi.reactiveElementPolyfillSupport,ei=(t,e)=>t,Le={toAttribute(t,e){switch(e){case Boolean:t=t?aa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ts=(t,e)=>!ta(t,e),to={attribute:!0,type:String,converter:Le,reflect:!1,useDefault:!1,hasChanged:Ts};Symbol.metadata??=Symbol("metadata"),Xi.litPropertyMetadata??=new WeakMap;let Ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=to){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&ea(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){const{get:o,set:a}=ia(this.prototype,e)??{get(){return this[i]},set(r){this[i]=r}};return{get:o,set(r){const d=o?.call(this);a?.call(this,r),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??to}static _$Ei(){if(this.hasOwnProperty(ei("elementProperties")))return;const e=na(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ei("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ei("properties"))){const i=this.properties,s=[...sa(i),...oa(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(Qs(o))}else e!==void 0&&i.push(Qs(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Le).toAttribute(i,s.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,i){const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=s.getPropertyOptions(o),r=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Le;this._$Em=o;const d=r.fromAttribute(i,a.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(e,i,s,o=!1,a){if(e!==void 0){const r=this.constructor;if(o===!1&&(a=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??Ts)(a,i)||s.useDefault&&s.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:o,wrapped:a},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??i??this[e]),a!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:r}=a,d=this[o];r!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,a,d)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[ei("elementProperties")]=new Map,Ae[ei("finalized")]=new Map,ra?.({ReactiveElement:Ae}),(Xi.reactiveElementVersions??=[]).push("2.1.2");const Is=globalThis,eo=t=>t,Ni=Is.trustedTypes,io=Ni?Ni.createPolicy("lit-html",{createHTML:t=>t}):void 0,Yo="$lit$",le=`lit$${Math.random().toFixed(9).slice(2)}$`,Zo="?"+le,la=`<${Zo}>`,we=document,ri=()=>we.createComment(""),li=t=>t===null||typeof t!="object"&&typeof t!="function",Ls=Array.isArray,da=t=>Ls(t)||typeof t?.[Symbol.iterator]=="function",rs=`[ 	
\f\r]`,Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,oo=/>/g,fe=RegExp(`>|${rs}(?:([^\\s"'>=/]+)(${rs}*=${rs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,ao=/"/g,Qo=/^(?:script|style|textarea|title)$/i,ca=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),m=ca(1),St=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),ro=new WeakMap,ge=we.createTreeWalker(we,129);function Jo(t,e){if(!Ls(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return io!==void 0?io.createHTML(e):e}const ha=(t,e)=>{const i=t.length-1,s=[];let o,a=e===2?"<svg>":e===3?"<math>":"",r=Xe;for(let d=0;d<i;d++){const c=t[d];let h,u,p=-1,b=0;for(;b<c.length&&(r.lastIndex=b,u=r.exec(c),u!==null);)b=r.lastIndex,r===Xe?u[1]==="!--"?r=so:u[1]!==void 0?r=oo:u[2]!==void 0?(Qo.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=fe):u[3]!==void 0&&(r=fe):r===fe?u[0]===">"?(r=o??Xe,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,h=u[1],r=u[3]===void 0?fe:u[3]==='"'?ao:no):r===ao||r===no?r=fe:r===so||r===oo?r=Xe:(r=fe,o=void 0);const f=r===fe&&t[d+1].startsWith("/>")?" ":"";a+=r===Xe?c+la:p>=0?(s.push(h),c.slice(0,p)+Yo+c.slice(p)+le+f):c+le+(p===-2?d:f)}return[Jo(t,a+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class di{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let a=0,r=0;const d=e.length-1,c=this.parts,[h,u]=ha(e,i);if(this.el=di.createElement(h,s),ge.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ge.nextNode())!==null&&c.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(Yo)){const b=u[r++],f=o.getAttribute(p).split(le),x=/([.?@])?(.*)/.exec(b);c.push({type:1,index:a,name:x[2],strings:f,ctor:x[1]==="."?pa:x[1]==="?"?ma:x[1]==="@"?fa:Yi}),o.removeAttribute(p)}else p.startsWith(le)&&(c.push({type:6,index:a}),o.removeAttribute(p));if(Qo.test(o.tagName)){const p=o.textContent.split(le),b=p.length-1;if(b>0){o.textContent=Ni?Ni.emptyScript:"";for(let f=0;f<b;f++)o.append(p[f],ri()),ge.nextNode(),c.push({type:2,index:++a});o.append(p[b],ri())}}}else if(o.nodeType===8)if(o.data===Zo)c.push({type:2,index:a});else{let p=-1;for(;(p=o.data.indexOf(le,p+1))!==-1;)c.push({type:7,index:a}),p+=le.length-1}a++}}static createElement(e,i){const s=we.createElement("template");return s.innerHTML=e,s}}function De(t,e,i=t,s){if(e===St)return e;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const a=li(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(t),o._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(e=De(t,o._$AS(t,e.values),o,s)),e}class ua{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,o=(e?.creationScope??we).importNode(i,!0);ge.currentNode=o;let a=ge.nextNode(),r=0,d=0,c=s[0];for(;c!==void 0;){if(r===c.index){let h;c.type===2?h=new gi(a,a.nextSibling,this,e):c.type===1?h=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(h=new ya(a,this,e)),this._$AV.push(h),c=s[++d]}r!==c?.index&&(a=ge.nextNode(),r++)}return ge.currentNode=we,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class gi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=De(this,e,i),li(e)?e===q||e==null||e===""?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==St&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):da(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&li(this._$AH)?this._$AA.nextSibling.data=e:this.T(we.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=di.createElement(Jo(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const a=new ua(o,this),r=a.u(this.options);a.p(i),this.T(r),this._$AH=a}}_$AC(e){let i=ro.get(e.strings);return i===void 0&&ro.set(e.strings,i=new di(e)),i}k(e){Ls(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const a of e)o===i.length?i.push(s=new gi(this.O(ri()),this.O(ri()),this,this.options)):s=i[o],s._$AI(a),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const s=eo(e).nextSibling;eo(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Yi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(e,i=this,s,o){const a=this.strings;let r=!1;if(a===void 0)e=De(this,e,i,0),r=!li(e)||e!==this._$AH&&e!==St,r&&(this._$AH=e);else{const d=e;let c,h;for(e=a[0],c=0;c<a.length-1;c++)h=De(this,d[s+c],i,c),h===St&&(h=this._$AH[c]),r||=!li(h)||h!==this._$AH[c],h===q?e=q:e!==q&&(e+=(h??"")+a[c+1]),this._$AH[c]=h}r&&!o&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pa extends Yi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class ma extends Yi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class fa extends Yi{constructor(e,i,s,o,a){super(e,i,s,o,a),this.type=5}_$AI(e,i=this){if((e=De(this,e,i,0)??q)===St)return;const s=this._$AH,o=e===q&&s!==q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==q&&(s===q||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ya{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}}const ba=Is.litHtmlPolyfillSupport;ba?.(di,gi),(Is.litHtmlVersions??=[]).push("3.3.3");const tn=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(o===void 0){const a=i?.renderBefore??null;s._$litPart$=o=new gi(e.insertBefore(ri(),a),a,void 0,i??{})}return o._$AI(t),o};const Ds=globalThis;let ii=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tn(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return St}};ii._$litElement$=!0,ii.finalized=!0,Ds.litElementHydrateSupport?.({LitElement:ii});const ga=Ds.litElementPolyfillSupport;ga?.({LitElement:ii});(Ds.litElementVersions??=[]).push("4.2.2");var va=_`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--syn-border-radius-small);
    border: solid 1px var(--syn-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--success {
    background-color: var(--syn-color-success-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--syn-color-warning-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--syn-color-danger-600);
    color: var(--syn-color-neutral-0);
  }
`,_a=_`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-small-bold);
    height: var(--syn-spacing-large);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-badge-informative-color-background);
    color: var(--syn-badge-informative-color-text);
  }

  .badge--success {
    background-color: var(--syn-badge-success-color-background);
    color: var(--syn-badge-success-color-text);
  }

  .badge--neutral {
    background-color: var(--syn-badge-neutral-color-background);
    color: var(--syn-badge-neutral-color-text);
  }

  .badge--warning {
    background-color: var(--syn-badge-warning-color-background);
    color: var(--syn-badge-warning-color-text);
  }

  .badge--danger {
    background-color: var(--syn-badge-error-color-background);
    color: var(--syn-badge-error-color-text);
  }

  /**
   * Special treatment: If the badge is empty, show it as a dot only
   */
  :host(:empty) .badge {
    height: var(--syn-spacing-x-small);
    min-width: initial;
    padding: 0;
    width: var(--syn-spacing-x-small);
  }

  .visually-hidden {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`,Bi={autoClamp:!1,noStepAlign:!1,noStepValidation:!1},ci={autoClamp:!0,noStepAlign:!0,noStepValidation:!0},wa=(t={})=>it(it({},Bi),t),xa={delimiter:{SynCombobox:" ",SynOption:" ",SynSelect:" "},numericStrategy:{SynInput:ci},size:{SynAccordion:"medium",SynAlert:"medium",SynButton:"medium",SynButtonGroup:"medium",SynCheckbox:"medium",SynCheckboxGroup:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynPagination:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTagGroup:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynButtonGroup:"outline",SynPagination:"full",SynSideNav:"default",SynValidate:"native"}},ka={delimiter:{SynCombobox:" ",SynOption:" ",SynSelect:" "},numericStrategy:{SynInput:ci},size:{SynAccordion:"medium",SynAlert:"medium",SynButton:"medium",SynButtonGroup:"medium",SynCheckbox:"medium",SynCheckboxGroup:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynPagination:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTagGroup:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynButtonGroup:"outline",SynPagination:"full",SynSideNav:"default",SynValidate:"native"}},lo=new Map,co=new Set,Ca=t=>{co.has(t)&&co.delete(t)},ho=(t,e="default")=>{const i=e==="default"?xa:ka;if(e==="default"){const o=lo.get(t);if(typeof o<"u")return o}const s=Object.entries(i).reduce((o,[a,r])=>{const d=r[t];return d&&(o[a]=d),o},{});return e==="default"&&lo.set(t,s),s};function K(t){return e=>{var i,s,o,a,r;return r=class extends e{constructor(...d){super(...d),_t(this,i,!1),_t(this,s,new Map),_t(this,o,[]),_t(this,a),this._isInitialized=!1,this._isInitialized=!0,J(this,a,ho(t,"initial"))}get __originalDecoratedClassName(){return t}overrideGlobalSettings(d){d.forEach(c=>{g(this,s).has(c.attribute)&&(this[c.attribute]=c.newValue)})}disconnectedCallback(){super.disconnectedCallback(),Ca(this)}requestUpdate(d,c,h){var u;super.requestUpdate(d,c,h),!(!this._isInitialized||g(this,i)||!d||!(d in g(this,a))||(u=g(this,o))!=null&&u.includes(d))&&g(this,o).push(d)}willUpdate(d){if(super.willUpdate(d),g(this,i))return;J(this,i,!0);const c=ho(t);Object.entries(c).forEach(([h,u])=>{const p=this[h],b=g(this,a)[h];p===b&&!g(this,o).includes(h)&&(g(this,s).set(h,p),this[h]=u)}),g(this,s).size>0}},i=new WeakMap,s=new WeakMap,o=new WeakMap,a=new WeakMap,r}}var bs=new Set,Ee=new Map,be,Ms="ltr",Fs="en",en=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function sn(){en&&(Ms=document.documentElement.dir||"ltr",Fs=document.documentElement.lang||navigator.language),[...bs.keys()].forEach(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(en){const t=new MutationObserver(sn);Ms=document.documentElement.dir||"ltr",Fs=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributeFilter:["dir","lang"],attributes:!0})}function on(...t){t.forEach(e=>{const i=e.$code.toLowerCase();Ee.has(i)?Ee.set(i,it(it({},Ee.get(i)),e)):Ee.set(i,e),be||(be=e)}),sn()}var Sa=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){bs.add(this.host)}hostDisconnected(){bs.delete(this.host)}dir(){return`${this.host.dir||Ms}`.toLowerCase()}lang(){return`${this.host.lang||Fs}`.toLowerCase()}getTranslationData(t){var e,i;const s=new Intl.Locale(t.replace(/_/g,"-")),o=s?.language.toLowerCase(),a=(i=(e=s?.region)==null?void 0:e.toLowerCase())!=null?i:"",r=Ee.get(`${o}-${a}`),d=Ee.get(o);return{language:o,locale:s,primary:r,region:a,secondary:d}}exists(t,e){var i;const{primary:s,secondary:o}=this.getTranslationData((i=e.lang)!=null?i:this.lang()),a=it({ignoreFallback:!1},e);return!!(s&&s[t]||o&&o[t]||a.includeFallback&&be&&be[t])}term(t,...e){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(s&&s[t])o=s[t];else if(be&&be[t])o=be[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...e):o}date(t,e){const i=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(i)}number(t,e){const i=Number(t);return isNaN(i)?"":new Intl.NumberFormat(this.lang(),e).format(i)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}},nn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",hidePassword:"Hide password",loading:"Loading",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,progress:"Progress",remove:"Remove",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",showPassword:"Show password",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Select file",fileButtonTextMultiple:"Select files",fileDragDrop:"Drop or select file",folderButtonText:"Select folder",folderDragDrop:"Drop or select folder",menu:"Menu",noResults:"No results found",notification:"Notification",numFilesSelected:(t,e)=>t===0?`No ${e?"folders":"files"} chosen`:`${t} ${e?"folders":"files"} chosen`,openMenu:"Open menu",paginationFirstPage:"First page",paginationInputLabel:"Select page",paginationItemsPerPage:"Items per page",paginationItemSummary:(t,e,i)=>`${t}-${e} of ${i} items`,paginationLastPage:"Last page",paginationNextPage:"Next page",paginationOfTotalPages:t=>`of ${t}`,paginationPreviousPage:"Previous page",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Page navigation",sideNavHide:"Hide navigation",sideNavShow:"Show navigation",success:"Success",warning:"Warning"};on(nn);var za=nn,W=class extends Sa{};on(za);var z=_`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const $a={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Ts},Aa=(t=$a,e,i)=>{const{kind:s,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),s==="accessor"){const{name:r}=i;return{set(d){const c=e.get.call(this);e.set.call(this,d),this.requestUpdate(r,c,t,!0,d)},init(d){return d!==void 0&&this.C(r,void 0,t,d),d}}}if(s==="setter"){const{name:r}=i;return function(d){const c=this[r];e.call(this,d),this.requestUpdate(r,c,t,!0,d)}}throw Error("Unsupported decorator location: "+s)};function l(t){return(e,i)=>typeof i=="object"?Aa(t,e,i):((s,o,a)=>{const r=o.hasOwnProperty(a);return o.constructor.createProperty(a,s),r?Object.getOwnPropertyDescriptor(o,a):void 0})(t,e,i)}function k(t){return l({...t,state:!0,attribute:!1})}function Oa(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}const Ps=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function y(t,e){return(i,s,o)=>{const a=r=>r.renderRoot?.querySelector(t)??null;return Ps(i,s,{get(){return a(this)}})}}let Ea;function Ta(t){return(e,i)=>Ps(e,i,{get(){return(this.renderRoot??(Ea??=document.createDocumentFragment())).querySelectorAll(t)}})}function Fe(t){return(e,i)=>{const{slot:s,selector:o}=t??{},a="slot"+(s?`[name=${s}]`:":not([name])");return Ps(e,i,{get(){const r=this.renderRoot?.querySelector(a),d=r?.assignedElements(t)??[];return o===void 0?d:d.filter(c=>c.matches(o))}})}}var Li,S=class extends ii{constructor(){super(),_t(this,Li,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,it({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",a=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(a=" v"+s.version),!(o&&a&&o===a)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${a} has already been registered.`)}attributeChangedCallback(t,e,i){g(this,Li)||(this.constructor.elementProperties.forEach((s,o)=>{s.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),J(this,Li,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};Li=new WeakMap;S.version="3.18.0";S.dependencies={};n([l()],S.prototype,"dir",2);n([l()],S.prototype,"lang",2);const Mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,ELEMENT:6},Pe=t=>(...e)=>({_$litDirective$:t,values:e});let vi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const C=Pe(class extends vi{constructor(t){if(super(t),t.type!==Mt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||this.nt?.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return St}});var hi=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.variant="primary"}render(){return m`
      <span
        part="base"
        class=${C({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}};hi.styles=[z,va,_a];n([l({reflect:!0})],hi.prototype,"variant",2);hi=n([K("SynBadge")],hi);hi.define("syn-badge");var Ia=_`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    /* Defines the used border and icon color for variants */
    --variant-color-border: var(--syn-alert-informative-color-border);
    --variant-color-background: var(--syn-alert-informative-color-background);
    --variant-color-icon: var(--syn-alert-informative-color-icon);
    --variant-color-indicator: var(--syn-alert-informative-color-indicator);

    /* Defines special settings for sizes */
    --size-font-size: var(--syn-font-size-medium);
    --size-icon-size: var(--syn-font-size-x-large);
    --size-min-height: 54px;
    --size-message-padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-medium) var(--syn-spacing-medium);
    --size-icon-padding-block: var(--syn-spacing-medium);
    --size-icon-padding-inline: var(--syn-spacing-medium);

    align-items: stretch;
    background-color: var(--variant-color-background);
    border: var(--syn-panel-border-width) solid var(--variant-color-border);
    border-left: 0;
    border-radius: var(--syn-border-radius-none);
    box-sizing: content-box;
    color: var(--syn-typography-color-text);
    display: flex;
    font-family: var(--syn-font-sans);
    font-size: var(--size-font-size);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-normal);
    margin: inherit;
    min-height: var(--size-min-height);
    position: relative;
  }

  /**
   * Add back the items left borders
   * This is done to prevent border clipping with the large border-left needed on .alert
   * Note we also need to adjust our paddings to add the border width here
   */
  .alert::before {
    background: var(--variant-color-indicator);
    bottom: -1px;
    content: "";
    left: 0;
    position: absolute;
    top: -1px;
    width: var(--syn-spacing-2x-small);
  }

  .alert :first-child {
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  /**
   * Make sure everything is aligned to top
   */
  .alert__icon {
    align-items: flex-start;
    color: var(--variant-color-icon);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--size-icon-size);
    padding-block-start: var(--size-icon-padding-block);
    padding-inline-start: var(--size-icon-padding-inline);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert__message {
    align-self: center;
    display: block;
    flex: 1 1 auto;
    padding: var(--size-message-padding);
  }

  /**
   * Close Icon
   */
  .alert__close-button {
    align-items: flex-start;
    align-self: start; /* #1135: Fix alignment for the close icon */
    color: var(--syn-typography-color-text);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--size-icon-size);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .alert__countdown {
    background-color: var(--syn-panel-border-color);
    bottom: 0;
    display: flex;
    height: calc(var(--syn-panel-border-width) * 3);
    left: 0;
    position: absolute;
    width: 100%;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--syn-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--syn-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--syn-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--syn-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--syn-color-danger-600);
  }

  /**
   * Variant colors
   */
  .alert--success {
    --variant-color-border: var(--syn-alert-success-color-border);
    --variant-color-background: var(--syn-alert-success-color-background);
    --variant-color-icon: var(--syn-alert-success-color-icon);
    --variant-color-indicator: var(--syn-alert-success-color-indicator);
  }

  .alert--neutral {
    --variant-color-border: var(--syn-alert-neutral-color-border);
    --variant-color-background: var(--syn-alert-neutral-color-background);
    --variant-color-icon: var(--syn-alert-neutral-color-icon);
    --variant-color-indicator: var(--syn-alert-neutral-color-indicator);
  }

  .alert--warning {
    --variant-color-border: var(--syn-alert-warning-color-border);
    --variant-color-background: var(--syn-alert-warning-color-background);
    --variant-color-icon: var(--syn-alert-warning-color-icon);
    --variant-color-indicator: var(--syn-alert-warning-color-indicator);
  }

  .alert--danger {
    --variant-color-border: var(--syn-alert-error-color-border);
    --variant-color-background: var(--syn-alert-error-color-background);
    --variant-color-icon: var(--syn-alert-error-color-icon);
    --variant-color-indicator: var(--syn-alert-error-color-indicator);
  }

  /* #1119: Alert Sizes */
  .alert--small {
    --size-font-size: var(--syn-font-size-small);
    --size-icon-size: var(--syn-font-size-large);
    --size-min-height: 44px;
    --size-message-padding: var(--syn-spacing-small) var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-small);
    --size-icon-padding-block: var(--syn-spacing-small);
    --size-icon-padding-inline: var(--syn-spacing-small);
  }

  /* Adjust close button size for small alerts */
  .alert--small .alert__close-button {
    font-size: var(--syn-font-size-medium);
  }

  .alert--large {
    --size-font-size: var(--syn-font-size-large);
    --size-icon-size: var(--syn-font-size-2x-large);
    --size-min-height: 68px;
    --size-message-padding: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-medium-large) var(--syn-spacing-medium-large);
    --size-icon-padding-block: var(--syn-spacing-medium-large);
    --size-icon-padding-inline: var(--syn-spacing-medium-large);
  }

  .alert__timer {
    display: none;
  }
`,Vs=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())},Z=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Rs(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}var La=_`
  :host {
    color: var(--syn-color-neutral-600);
    display: inline-block;
  }

  .icon-button {
    align-items: center;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    border-radius: 0;
    color: currentColor;
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    font-size: inherit;
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button:focus-visible {
    border-radius: var(--syn-icon-button-focus-ring-border-radius); /* Remove round borders */
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
  }

  .icon-button__icon {
    pointer-events: none;
  }

  /* Colors */
  :host([color="currentColor"]) {
    color: currentColor;
  }

  :host([color="primary"]),
  :host([color="primary"]) .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color);
  }

  :host([color="primary"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color-hover);
  }

  :host([color="primary"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color-active);
  }

  :host([color="neutral"]) {
    color: var(--syn-interactive-quiet-color);
  }

  :host([color="neutral"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-interactive-quiet-color-hover);
  }

  :host([color="neutral"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-interactive-quiet-color-active);
  }

  :host([color="neutral"]) .icon-button:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-interactive-quiet-color);
  }

  /* Sizes */
  .icon-button--small {
    font-size: var(--syn-font-size-medium);
  }

  .icon-button--medium {
    font-size: var(--syn-font-size-x-large);
  }

  .icon-button--large {
    font-size: var(--syn-font-size-2x-large);
  }

  /* Force user to set "label" prop */
  .icon-button[aria-label=""] {
    border: var(--syn-border-width-large) var(--syn-color-error-600) solid;
  }

  .icon-button[aria-label=""]::after {
    content: "Set label prop for a11y to get rid of this text and border!";
    font-size: var(--syn-font-size-2x-small);
    margin-left: var(--syn-spacing-2x-small);
  }
`,Da=_`
  /* Write custom CSS here */
`,Ma=_`
	/* stylelint-disable */
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,gs="";function uo(t){gs=t}function Fa(t=""){if(!gs){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-synergy"));if(i)uo(i.getAttribute("data-synergy"));else{const s=e.find(a=>/synergy(\.min)?\.js($|\?)/.test(a.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(a.src));let o="";s&&(o=s.getAttribute("src")),uo(o.split("/").slice(0,-1).join("/"))}}return gs.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Pa={name:"default",resolver:t=>Fa(`assets/icons/${t}.svg`)},Va=Pa,Ra={add:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.55 17.654-5.334-5.335 1.069-1.069 4.265 4.265 9.166-9.165 1.069 1.07z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 15.039 6.346 9.384 7.4 8.331l4.6 4.6 4.6-4.6 1.054 1.053z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,"details-close":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"details-open":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12.002 15.577q1.7 0 2.888-1.19t1.187-2.89-1.19-2.886-2.89-1.188-2.886 1.19-1.188 2.89 1.19 2.887 2.89 1.187M12 14.2q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.788-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.913.787.787.788.787 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m.001 4.3q-3.45 0-6.285-1.903-2.837-1.904-4.177-5.097 1.34-3.194 4.175-5.097T12 4.5t6.286 1.903q2.836 1.904 4.177 5.097-1.341 3.195-4.176 5.097T12.001 18.5"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m19.762 21.87-4.046-4.016q-.77.285-1.705.465-.936.18-2.01.181-3.525 0-6.341-1.939-2.815-1.938-4.121-5.061.554-1.325 1.43-2.472A11.4 11.4 0 0 1 4.9 7.038l-2.77-2.8 1.055-1.053 17.63 17.63zM12 15.576q.314 0 .642-.054.33-.053.585-.158l-5.092-5.092q-.104.275-.158.599a4 4 0 0 0-.054.628q0 1.702 1.188 2.89 1.186 1.187 2.89 1.187m6.954.507-3.137-3.111q.118-.32.189-.684.07-.366.071-.789 0-1.702-1.187-2.89Q13.702 7.424 12 7.424q-.422 0-.779.076-.355.076-.684.228L8.035 5.235a10 10 0 0 1 1.936-.556q.99-.18 2.03-.179 3.514 0 6.34 1.939 2.824 1.938 4.12 5.061-.555 1.34-1.435 2.502a11 11 0 0 1-2.072 2.082m-4.27-4.234-3.009-3q.661-.124 1.25.098.586.223 1.012.663.435.44.636 1.033.202.593.112 1.206"/></svg>`,"first-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.25 17.75V6.25h1.5v11.5zM17 17.654 11.346 12 17 6.346 18.054 7.4l-4.6 4.6 4.6 4.6z"/></svg>`,indeterminate:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"last-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M7 17.654 5.946 16.6l4.6-4.6-4.6-4.6L7 6.346 12.654 12zm9.25.096V6.25h1.5v11.5z"/></svg>`,"logo-color":`<svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill='currentColor'><g clip-path="url(#a)"><path d="M166.39 0c17.638 0 32.976 9.895 40.876 24.493L188.19 34.788c-4.268-7.865-12.516-13.108-21.8-13.108-13.545 0-24.876 11.14-24.876 25.32s11.331 25.32 24.876 25.32c9.476 0 17.925-5.452 22.106-13.596l19.058 10.347C199.723 83.905 184.202 94 166.39 94c-25.713 0-46.556-21.044-46.556-47S140.677 0 166.39 0M56.85 1.673c12.543 0 21.498 9.389 21.498 21.296H26.436c-6.977.993-7.421 11.697 0 12.908H54.08c15.164.41 27.263 12.481 27.263 27.768 0 14.084-11.95 28.238-27.194 28.238H25.643c-12.134 0-25.495-6.55-25.495-21.758.151 0 46.601 0 54.011.009 7.9-1.577 7.02-11.541 0-12.917H26.436C11.68 57.217 0 44.622 0 29.614 0 15.182 10.792 1.673 26.436 1.673zm53.803 90.21H89.349V1.664h21.304zm126.48-90.219v36.182h8.292l22.402-36.182h26.497L263.795 47.35l30.085 44.534h-26.505L244.702 56.93h-7.569v34.953h-21.549V1.664z"/></g><defs><clipPath id="a"><path d="M0 0h295v94H0z"/></clipPath></defs></svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 17.635v-1.5h17v1.5zm0-4.885v-1.5h17v1.5zm0-4.885v-1.5h17v1.5z"/></svg>`,more:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.23 13.5q-.618 0-1.059-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.441-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.62 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.058.44.441.442.441 1.06t-.44 1.06q-.44.44-1.06.44"/></svg>`,"more-vert":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 19.27q-.619 0-1.06-.442a1.44 1.44 0 0 1-.44-1.059q0-.618.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06 0 .62-.44 1.06-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.618.44-1.058.442-.441 1.06-.441t1.06.44q.44.44.44 1.06 0 .618-.44 1.06-.442.44-1.06.44"/></svg>`,"next-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,placeholder:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 20.5V13H5v6h6v1.5zm9.5 0V19h6v-6h1.5v7.5zm-6.25-3.75 2.48-3.289 2 2.558 2.809-3.653 3.288 4.384zM3.5 11V3.5H11V5H5v6zM19 11V5h-6V3.5h7.5V11zm-3.594-1.096q-.566 0-.938-.37a1.26 1.26 0 0 1-.372-.936q0-.566.37-.938t.936-.372.938.37q.371.37.372.936 0 .566-.37.938a1.26 1.26 0 0 1-.936.372"/></svg>`,"previous-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M14 17.654 8.346 12 14 6.346 15.054 7.4l-4.6 4.6 4.6 4.6z"/></svg>`,radio:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill='currentColor'><path d="M6 10.75a4.6 4.6 0 0 1-1.852-.374A4.8 4.8 0 0 1 2.64 9.361a4.8 4.8 0 0 1-1.016-1.508 4.6 4.6 0 0 1-.374-1.852q0-.986.374-1.853.375-.866 1.015-1.508.641-.641 1.508-1.016a4.6 4.6 0 0 1 1.852-.374q.986 0 1.853.374.867.375 1.508 1.015.642.641 1.016 1.508t.374 1.852-.374 1.853A4.8 4.8 0 0 1 9.361 9.36q-.642.642-1.508 1.016a4.6 4.6 0 0 1-1.852.374"/></svg>`,"status-error":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 16.712q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575a.78.78 0 0 0 .576.233m-.75-3.481h1.5V7.192h-1.5zM8.461 20.5 3.5 15.543V8.462L8.457 3.5h7.082L20.5 8.457v7.082L15.543 20.5zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8z"/></svg>`,"status-informative":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 16.75h1.5V11h-1.5zM12 9.289q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575A.78.78 0 0 0 12 9.29m.002 12.211a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-neutral":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.692 21.5-.38-3.046a5.3 5.3 0 0 1-1.579-.896L4.912 18.75l-2.308-4 2.44-1.844a5 5 0 0 1-.049-.448 7 7 0 0 1 0-.882q.014-.22.05-.482L2.603 9.25l2.308-3.98 2.811 1.182a6.4 6.4 0 0 1 .772-.524 5 5 0 0 1 .807-.382l.39-3.046h4.616l.38 3.056q.45.163.815.381t.735.515l2.85-1.183 2.308 3.981-2.479 1.873q.054.243.059.453t.005.424q0 .204-.01.415-.01.21-.069.481l2.46 1.854-2.308 4-2.815-1.202q-.372.296-.758.524a4.6 4.6 0 0 1-.793.372l-.38 3.056zM11 20h1.966l.359-2.679q.765-.2 1.399-.568.634-.369 1.222-.947l2.485 1.044.985-1.7-2.17-1.635q.125-.387.17-.761a6.3 6.3 0 0 0 0-1.508 4 4 0 0 0-.17-.742l2.189-1.654-.985-1.7-2.513 1.06a5.3 5.3 0 0 0-1.203-.949 5.2 5.2 0 0 0-1.418-.582L13 4h-1.985l-.33 2.67a5.2 5.2 0 0 0-1.414.553q-.648.374-1.237.962L5.55 7.15l-.984 1.7 2.159 1.61a3.7 3.7 0 0 0-.175.74 6.3 6.3 0 0 0 0 1.575q.05.375.165.74l-2.15 1.635.985 1.7 2.475-1.05q.57.585 1.217.958t1.433.573zm1.011-5q1.249 0 2.125-.876A2.9 2.9 0 0 0 15.012 12q0-1.248-.876-2.124A2.9 2.9 0 0 0 12.012 9q-1.264 0-2.132.876A2.9 2.9 0 0 0 9.01 12q0 1.248.869 2.124T12.01 15"/></svg>`,"status-success":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m10.58 16.254 6.724-6.723-1.054-1.054-5.67 5.67-2.85-2.85-1.053 1.053zm1.422 5.246a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-warning":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M1.865 20.5 12 3l10.135 17.5zM4.45 19h15.1L12 6zM12 17.808q.343 0 .575-.232a.78.78 0 0 0 .233-.576.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.576a.78.78 0 0 0 .576.232m-.75-2.616h1.5v-5h-1.5z"/></svg>`,sticky_sidebar:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M9.5 19H19V5H9.5zm-6 1.5v-17h17v17z"/></svg>`,"tabs-left":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m7.373 12.75 5.696 5.696L12 19.5 4.5 12 12 4.5l1.07 1.054-5.697 5.696H19.5v1.5z"/></svg>`,"tabs-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M16.627 12.75H4.5v-1.5h12.127l-5.696-5.696L12 4.5l7.5 7.5-7.5 7.5-1.07-1.054z"/></svg>`,"upload-file":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 18.385h1.5V13.95l1.85 1.85 1.054-1.07L12 11.078l-3.654 3.654 1.07 1.053 1.834-1.834zM4.5 21.5v-19h9.75l5.25 5.25V21.5zm9-13V4H6v16h12V8.5z"/></svg>`,"x-circle-fill":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m8.4 16.654 3.6-3.6 3.6 3.6 1.054-1.054-3.6-3.6 3.6-3.6L15.6 7.346l-3.6 3.6-3.6-3.6L7.346 8.4l3.6 3.6-3.6 3.6zm3.602 4.846a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749"/></svg>`,"x-lg":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.4 18.654 5.346 17.6l5.6-5.6-5.6-5.6L6.4 5.346l5.6 5.6 5.6-5.6L18.654 6.4l-5.6 5.6 5.6 5.6-1.054 1.054-5.6-5.6z"/></svg>`},po=Ra,Na={name:"system",resolver:t=>t in po?po[t]:""},Ba=Na,Ui=[Va,Ba],Hi=[];function Ua(t){Hi.push(t)}function Ha(t){Hi=Hi.filter(e=>e!==t)}function mo(t){return Ui.find(e=>e.name===t)}function an(t,e){qa(t),Ui.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Hi.forEach(i=>{i.library===t&&i.setIcon()})}function qa(t){Ui=Ui.filter(e=>e.name!==t)}function v(t,e){const i=it({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:a}=s,r=Array.isArray(t)?t:[t];s.update=function(d){r.forEach(c=>{const h=c;if(d.has(h)){const u=d.get(h),p=this[h];u!==p&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](u,p)}}),a.call(this,d)}}}const Wa=(t,e)=>t?._$litType$!==void 0,rn=t=>t.strings===void 0,ja={},Ga=(t,e=ja)=>t._$AH=e;var Ce=Symbol(),$i=Symbol(),ls,ds=new Map,X=class extends S{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e?.spriteSheet)return this.svg=m`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library==="system"){if(!t)return Ce;s=new Response(t,{status:200})}else try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?Ce:$i}catch{return $i}try{const o=document.createElement("div");o.innerHTML=await s.text();const a=o.firstElementChild;if(((i=a?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Ce;ls||(ls=new DOMParser);const d=ls.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):Ce}catch{return Ce}}connectedCallback(){super.connectedCallback(),Ua(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ha(this)}getIconSource(){const t=mo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?mo(this.library):void 0;if(!e){this.svg=null;return}let o=ds.get(e);if(o||(o=this.resolveIcon(e,s),ds.set(e,o)),!this.initialRender)return;const a=await o;if(a===$i&&ds.delete(e),e===this.getIconSource().url){if(Wa(a)){if(this.svg=a,s){await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&r&&s.mutator(r)}return}switch(a){case $i:case Ce:this.svg=null,this.emit("syn-error");break;default:this.svg=a.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("syn-load")}}}render(){return this.svg}};X.styles=[z,Ma,Da];n([k()],X.prototype,"svg",2);n([l({reflect:!0})],X.prototype,"name",2);n([l()],X.prototype,"src",2);n([l()],X.prototype,"label",2);n([l({reflect:!0})],X.prototype,"library",2);n([v("label")],X.prototype,"handleLabelChange",1);n([v(["name","src","library"])],X.prototype,"setIcon",1);const ln=Symbol.for(""),Ka=t=>{if(t?.r===ln)return t?._$litStatic$},_e=(t,...e)=>({_$litStatic$:e.reduce((i,s,o)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[o+1],t[0]),r:ln}),fo=new Map,Xa=t=>(e,...i)=>{const s=i.length;let o,a;const r=[],d=[];let c,h=0,u=!1;for(;h<s;){for(c=e[h];h<s&&(a=i[h],(o=Ka(a))!==void 0);)c+=o+e[++h],u=!0;h!==s&&d.push(a),r.push(c),h++}if(h===s&&r.push(e[s]),u){const p=r.join("$$lit$$");(e=fo.get(p))===void 0&&(r.raw=r,fo.set(p,e=r)),i=d}return t(e,...i)},ft=Xa(m);const w=t=>t??q;var Y=class extends S{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?_e`a`:_e`button`;return ft`
      <${e}
        part="base"
        class=${C({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--large":this.size==="large","icon-button--medium":this.size==="medium","icon-button--small":this.size==="small"})}
        ?disabled=${w(t?void 0:this.disabled)}
        type=${w(t?void 0:"button")}
        href=${w(t?this.href:void 0)}
        target=${w(t?this.target:void 0)}
        download=${w(t?this.download:void 0)}
        rel=${w(t&&this.target?"noreferrer noopener":void 0)}
        role=${w(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${w(this.name)}
          library=${w(this.library)}
          src=${w(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${e}>
    `}};Y.styles=[z,La];Y.dependencies={"syn-icon":X};n([y(".icon-button")],Y.prototype,"button",2);n([k()],Y.prototype,"hasFocus",2);n([l()],Y.prototype,"name",2);n([l()],Y.prototype,"library",2);n([l()],Y.prototype,"src",2);n([l()],Y.prototype,"href",2);n([l()],Y.prototype,"target",2);n([l()],Y.prototype,"download",2);n([l()],Y.prototype,"label",2);n([l({reflect:!0})],Y.prototype,"size",2);n([l({reflect:!0})],Y.prototype,"color",2);n([l({reflect:!0,type:Boolean})],Y.prototype,"disabled",2);Y=n([K("SynIconButton")],Y);function at(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function G(t,e,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,ue(it({},i),{duration:Ya()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function yo(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Ya(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function nt(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function bo(t,e){return t.map(i=>ue(it({},i),{height:i.height==="auto"?`${e}px`:i.height}))}var dn=new Map,vs=new WeakMap;function cn(t){return t??{keyframes:[],options:{duration:0}}}function go(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function L(t,e){dn.set(t,cn(e))}function Ai(t,e,i){vs.set(t,ue(it({},vs.get(t)),{[e]:cn(i)}))}function U(t,e,i){const s=vs.get(t);if(s?.[e])return go(s[e],i.dir);const o=dn.get(e);return o?go(o,i.dir):{keyframes:[],options:{duration:0}}}var tt=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"icon","suffix"),this.localize=new W(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.size="medium",this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"syn-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",i="0";this.countdownAnimation=t.animate([{width:e},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await nt(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=U(this,"alert.show",{dir:this.localize.dir()});await G(this.base,t,e),this.emit("syn-after-show")}else{Vs(this),this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await nt(this.base);const{keyframes:t,options:e}=U(this,"alert.hide",{dir:this.localize.dir()});await G(this.base,t,e),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,at(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,at(this,"syn-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),tt.toastStack.parentElement===null&&document.body.append(tt.toastStack),tt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{tt.toastStack.removeChild(this),t(),tt.toastStack.querySelector("syn-alert")===null&&tt.toastStack.remove()},{once:!0})})}render(){return m`
      <div
        part="base"
        class=${C({alert:!0,"alert--open":this.open,"alert--small":this.size==="small","alert--medium":this.size==="medium","alert--large":this.size==="large","alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?m`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></syn-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?m`
              <div
                class=${C({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};tt.styles=[z,Ia];tt.dependencies={"syn-icon-button":Y};n([y('[part~="base"]')],tt.prototype,"base",2);n([y(".alert__countdown-elapsed")],tt.prototype,"countdownElement",2);n([l({type:Boolean,reflect:!0})],tt.prototype,"open",2);n([l({type:Boolean,reflect:!0})],tt.prototype,"closable",2);n([l({reflect:!0})],tt.prototype,"variant",2);n([l({type:Number})],tt.prototype,"duration",2);n([l({reflect:!0})],tt.prototype,"size",2);n([k()],tt.prototype,"remainingTime",2);n([v("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);n([v("duration")],tt.prototype,"handleDurationChange",1);tt=n([K("SynAlert")],tt);L("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});L("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});tt.define("syn-alert");var Za=_`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`,Ht=class extends S{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=t=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(e=>{e!==t.target&&e.parentNode===t.target.parentNode&&e.removeAttribute("open")})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(t=>{t.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(t=>{t.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return m`
      <div 
        part="base"
        class=${C({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ht.styles=[z,Za];n([Fe({selector:"syn-details"})],Ht.prototype,"detailsInDefaultSlot",2);n([l({attribute:"close-others",type:Boolean})],Ht.prototype,"closeOthers",2);n([l({reflect:!0,type:Boolean})],Ht.prototype,"contained",2);n([l({reflect:!0})],Ht.prototype,"size",2);n([v("size",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleSizeChange",1);n([v("contained",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleContainedChange",1);Ht=n([K("SynAccordion")],Ht);Ht.define("syn-accordion");var Qa=_`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-600);
    line-height: var(--syn-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--syn-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--syn-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--syn-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--syn-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--syn-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--syn-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ja=_`
  .breadcrumb-item {
    color: var(--syn-breadcrumb-color);
    font-size: var(--syn-font-size-x-small);
    font-weight: var(--syn-font-weight-semibold);
  }

  /**
   * Make sure to remove the border radius.
   * Without this, focus will be rounded
   */
  .breadcrumb-item__label {
    border-radius: var(--syn-border-radius-none);
  }

  :host(:not(:last-of-type)) .breadcrumb-item {
    font-weight: var(--syn-font-weight-normal);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--syn-typography-color-text);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--syn-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--syn-color-primary-950);
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    margin-inline-end: var(--syn-spacing-2x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  /**
   * Adjust color and font size to match Synergy's typography.
   */
  .breadcrumb-item--has-prefix .breadcrumb-item__prefix,
  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    color: var(--syn-typography-color-text);
    font-size: var(--syn-spacing-medium);
  }

  /**
   * Make sure the color of the last item's prefix and suffix matches the text.
   */
  :host(:last-of-type) .breadcrumb-item--has-prefix .breadcrumb-item__prefix,
  :host(:last-of-type) .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    color: inherit;
  }

  .breadcrumb-item__separator {
    font-size: var(--syn-spacing-medium);
    margin: 0 var(--syn-spacing-x-small) 0 var(--syn-spacing-2x-small);
  }

  /**
   * Make sure the direction of the chevron matches the direction of the text.
   */
  .breadcrumb-item__separator ::slotted(syn-icon.ltr) {
    rotate: -90deg;
  }

  .breadcrumb-item__separator ::slotted(syn-icon.rtl) {
    rotate: 90deg;
  }

  .breadcrumb-item__label--drop-down {
    display: flex;
  }
`,pe=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="syn-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return m`
      <div
        part="base"
        class=${C({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?m`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${w(this.target?this.target:void 0)}"
                rel=${w(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?m`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?m`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};pe.styles=[z,Qa,Ja];n([y("slot:not([name])")],pe.prototype,"defaultSlot",2);n([k()],pe.prototype,"renderType",2);n([l()],pe.prototype,"href",2);n([l()],pe.prototype,"target",2);n([l()],pe.prototype,"rel",2);n([v("href",{waitUntilFirstUpdate:!0})],pe.prototype,"hrefChanged",1);pe.define("syn-breadcrumb-item");var tr=_`
  /* Write custom CSS here */
`,er=_`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ve=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="syn-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),m`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}};Ve.styles=[z,er,tr];Ve.dependencies={"syn-icon":X};n([y("slot")],Ve.prototype,"defaultSlot",2);n([y('slot[name="separator"]')],Ve.prototype,"separatorSlot",2);n([l()],Ve.prototype,"label",2);Ve.define("syn-breadcrumb");var ir=_`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;function Se(t){var e;const i="syn-button, syn-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var qt=class extends S{constructor(){super(...arguments),this.disableRole=!1,this.label="",this.size="medium",this.variant="outline"}handleFocus(t){const e=Se(t.target);e?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(t){const e=Se(t.target);e?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(t){const e=Se(t.target);e?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(t){const e=Se(t.target);e?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=Se(e);s&&(s.size=this.size,s.tagName.toLowerCase()==="syn-button"&&(s.variant=this.variant),s.toggleAttribute("data-syn-button-group__button",!0),s.toggleAttribute("data-syn-button-group__button--first",i===0),s.toggleAttribute("data-syn-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-syn-button-group__button--last",i===t.length-1),s.toggleAttribute("data-syn-button-group__button--radio",s.tagName.toLowerCase()==="syn-radio-button"))})}firstUpdated(){const t=()=>{this.mutationObserver.observe(this,{attributeFilter:["size","variant"],attributes:!0,subtree:!0})};this.mutationObserver=new MutationObserver(e=>{this.mutationObserver.disconnect();const i=e.some(o=>o.target===this),s=e.some(o=>o.target!==this);s&&e.filter(o=>o.target!==this).forEach(o=>{const a=o.target,r=Se(a);r&&(r.size=void 0,r.tagName.toLowerCase()==="syn-button"&&(r.variant=void 0))}),(i||s)&&this.handleSlotChange(),this.updateComplete.then(()=>{t()})}),t()}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}render(){return m`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};qt.styles=[z,ir];n([y("slot")],qt.prototype,"defaultSlot",2);n([k()],qt.prototype,"disableRole",2);n([l()],qt.prototype,"label",2);n([l({reflect:!0})],qt.prototype,"size",2);n([l({reflect:!0})],qt.prototype,"variant",2);qt=n([K("SynButtonGroup")],qt);qt.define("syn-button-group");var sr=_`
  /* stylelint-disable no-descending-specificity */
  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */
  :host([data-syn-button-group__button--first]:not([data-syn-button-group__button--last])) .button {
    border-end-end-radius: 0;
    border-start-end-radius: 0;
  }

  :host([data-syn-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-syn-button-group__button--last]:not([data-syn-button-group__button--first])) .button {
    border-end-start-radius: 0;
    border-start-start-radius: 0;
  }

  /* All except the first */
  :host([data-syn-button-group__button]:not([data-syn-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--syn-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host([data-syn-button-group__button]:not([data-syn-button-group__button--first]):not([data-syn-button-group__button--radio]):not([variant='filled']):not(:hover)) .button::after {
    border-left: solid 1px rgb(128 128 128 / 33%);
    bottom: 0;
    content: '';
    inset-inline-start: 0;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-syn-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-syn-button-group__button--focus]),
  :host([data-syn-button-group__button][checked]) {
    z-index: 2;
  }

  /* #392: Button Groups */
  :host([data-syn-button-group__button--inner]) .button--filled.button {
    border-left-color: var(--syn-panel-background-color);
    border-right-color: var(--syn-panel-background-color);
  }

  :host([data-syn-button-group__button--first]:not([data-syn-button-group__button--last])) .button--filled.button {
    border-right-color: var(--syn-panel-background-color);
  }

  :host([data-syn-button-group__button--last]:not([data-syn-button-group__button--first])) .button--filled.button {
    border-left-color: var(--syn-panel-background-color);
  }
`,hn=_`
  :host {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: auto;
  }

  .button {
    /* Icon size tokens */
    --button-small-icon-size: var(--syn-font-size-medium);
    --button-medium-icon-size: var(--syn-font-size-x-large);
    --button-large-icon-size: var(--syn-font-size-2x-large);

    /* Icon alignment tokens */
    --button-icon-offset-small: -3px;
    --button-icon-offset-medium: -6px;
    --button-icon-offset-large: -8px;

    /* Default (medium) spacing tokens */
    --button-icon-only-padding: 0 calc(var(--syn-spacing-small) - var(--syn-spacing-4x-small));
    --button-label-padding-inline-start: var(--syn-spacing-medium);
    --button-label-padding-inline-end: var(--syn-spacing-medium);
    --button-label-padding-inline-start-with-prefix: var(--syn-spacing-x-small);
    --button-label-padding-inline-end-with-suffix: var(--syn-spacing-x-small);
    --button-prefix-spacing: var(--syn-spacing-small);
    --button-suffix-spacing: var(--syn-spacing-small);
    --button-affix-size: var(--button-medium-icon-size);
    --button-labeled-prefix-spacing: var(--syn-spacing-medium);
    --button-labeled-suffix-spacing: var(--syn-spacing-medium);

    align-items: stretch;
    border-style: solid;
    border-width: var(--syn-input-border-width);
    cursor: inherit;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-font-weight-bold);
    height: auto;
    justify-content: center;
    padding: 0;
    text-decoration: none;
    transition:
      var(--syn-transition-x-fast) background-color,
      var(--syn-transition-x-fast) color,
      var(--syn-transition-x-fast) border,
      var(--syn-transition-x-fast) box-shadow;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--syn-focus-ring-color) solid var(--syn-focus-ring-width);
    outline-offset: var(--syn-focus-ring-width);
  }

  .button--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix,
  .button__caret {
    font-size: var(--button-affix-size);
  }

  .button__prefix,
  .button__suffix {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  /**
   * Icon-only buttons
   */
  .button__label.button__icon-only {
    padding: var(--button-icon-only-padding);
  }

  .button__label::slotted(syn-icon) {
    font-size: var(--button-medium-icon-size);
    vertical-align: var(--button-icon-offset-medium);
  }

  /*
   * Standard buttons
   */

  /* Primary */
  .button--filled.button--primary {
    background: var(--syn-button-color);
    border-color: var(--syn-button-color);
    color: var(--syn-button-filled-color-text);
  }

  .button--filled.button--primary.button--disabled {
    background: var(--syn-color-neutral-600);
    border-color: var(--syn-color-neutral-600);
    color: var(--syn-typography-color-text-inverted);
  }

  .button--filled.button--primary:hover:not(.button--disabled) {
    background: var(--syn-button-color-hover);
    border-color: var(--syn-button-color-hover);
    color: var(--syn-button-filled-color-text-hover);
  }

  .button--filled.button--primary:active:not(.button--disabled) {
    background: var(--syn-button-color-active);
    border-color: var(--syn-button-color-active);
    color: var(--syn-button-filled-color-text-active);
  }

  /*
   * Outline buttons
   */
  .button--outline {
    background: none;
    border: var(--syn-input-border-width) solid; /* #901: Use token for border width */
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--syn-button-color);
    color: var(--syn-button-outline-color-text);
  }

  .button--outline.button--primary.button--disabled {
    background: none;
    border-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background: var(--syn-button-outline-color-hover);
    border-color: var(--syn-button-outline-color-hover);
    color: var(--syn-button-outline-color-text-hover);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    background: var(--syn-button-outline-color-active);
    border-color: var(--syn-button-outline-color-active);
    color: var(--syn-button-outline-color-text-active);
  }

  /*
   * Text buttons
   */
  .button--text {
    background: transparent;
    border-color: transparent;
    color: var(--syn-button-text-color-text);
  }

  .button--text:hover:not(.button--disabled) {
    color: var(--syn-button-text-color-text-hover);
  }

  .button--text:focus-visible:not(.button--disabled) {
    color: var(--syn-button-color);
  }

  .button--text.button--primary:active:not(.button--disabled) {
    color: var(--syn-button-text-color-text-active);
  }

  .button--text.button--primary.button--disabled {
    color: var(--syn-color-neutral-600);
  }

  /*
   * Size modifiers
   */

  .button--small {
    --button-icon-only-padding: 0 calc(var(--syn-spacing-x-small) + var(--syn-spacing-4x-small));
    --button-label-padding-inline-start: var(--syn-spacing-small);
    --button-label-padding-inline-end: var(--syn-spacing-small);
    --button-label-padding-inline-start-with-prefix: var(--syn-spacing-2x-small);
    --button-label-padding-inline-end-with-suffix: var(--syn-spacing-2x-small);
    --button-prefix-spacing: var(--syn-spacing-x-small);
    --button-suffix-spacing: var(--syn-spacing-x-small);
    --button-affix-size: var(--button-small-icon-size);
    --button-labeled-prefix-spacing: var(--syn-spacing-small);
    --button-labeled-suffix-spacing: var(--syn-spacing-small);
    
    border-radius: var(--syn-button-border-radius-small);
    font-size: var(--syn-button-font-size-small);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    min-height: var(--syn-input-height-small);
  }

  .button--small .button__label::slotted(syn-icon) {
    font-size: var(--button-small-icon-size);
    vertical-align: var(--button-icon-offset-small);
  }

  .button--medium {
    border-radius: var(--syn-button-border-radius-medium);
    font-size: var(--syn-button-font-size-medium);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    min-height: var(--syn-input-height-medium);
  }

  .button--large {
    --button-icon-only-padding: 0 calc(var(--syn-spacing-medium) - var(--syn-spacing-4x-small));
    --button-label-padding-inline-start: var(--syn-spacing-large);
    --button-label-padding-inline-end: var(--syn-spacing-large);
    --button-label-padding-inline-start-with-prefix: var(--syn-spacing-small);
    --button-label-padding-inline-end-with-suffix: var(--syn-spacing-small);
    --button-affix-size: var(--button-large-icon-size);
    --button-labeled-prefix-spacing: var(--syn-spacing-large);
    --button-labeled-suffix-spacing: var(--syn-spacing-large);
    
    border-radius: var(--syn-button-border-radius-large);
    font-size: var(--syn-button-font-size-large);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    min-height: var(--syn-input-height-large);
  }

  .button--large .button__label::slotted(syn-icon) {
    font-size: var(--button-large-icon-size);
    vertical-align: var(--button-icon-offset-large);
  }

  /*
   * Caret modifier
   */
  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */
  .button--loading {
    cursor: wait;
    position: relative;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading syn-spinner {
    --indicator-color: currentColor;

    font-size: 1em;
    height: 1em;
    left: calc(50% - 0.5em);
    position: absolute;
    top: calc(50% - 0.5em);
    width: 1em;
  }

  /*
   * Badges
   */
  .button ::slotted(syn-badge) {
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    translate: 50% -50%;
  }

  .button--rtl ::slotted(syn-badge) {
    left: 0;
    right: auto;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */
  .button--has-label .button__label {
    padding-block: 0;
    padding-inline: var(--button-label-padding-inline-start) var(--button-label-padding-inline-end);
  }

  .button--has-label .button__label.button__icon-only {
    padding: var(--button-icon-only-padding);
  }

  /*
   * Adjustments for button label paddings
   * @see https://github.com/synergy-design-system/synergy-design-system/issues/243
   */
  .button--has-prefix .button__label {
    padding-inline-start: var(--button-label-padding-inline-start-with-prefix);
  }

  .button--has-suffix .button__label,
  .button--caret .button__label {
    padding-inline-end: var(--button-label-padding-inline-end-with-suffix);
  }

  /* Basic prefix/suffix spacing */
  .button--has-prefix {
    padding-inline-start: var(--button-prefix-spacing);
  }

  .button--has-suffix,
  .button--caret {
    padding-inline-end: var(--button-suffix-spacing);
  }

  /* Enhanced spacing for labeled buttons with prefix/suffix */
  .button--has-label.button--has-prefix {
    padding-inline-start: var(--button-labeled-prefix-spacing);
  }

  .button--has-label.button--has-suffix {
    padding-inline-end: var(--button-labeled-suffix-spacing);
  }
`,or=_`
  :host {
    --speed: var(--syn-transition-x-slow);
    --indicator-color: var(--syn-interactive-emphasis-color);
  }

  .spinner__indicator {
    stroke-dasharray: 75% 360%;
    stroke-linecap: initial;
  }

  /**
   * Make sure the spinner track is using the correct color.
   */
  .spinner__track {
    filter: saturate(0);
    opacity: var(--syn-spinner-opacity);
    stroke: var(--indicator-color);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,nr=_`
	/* stylelint-disable */
  :host {
    --track-width: 2px;
    --indicator-color: var(--syn-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }
`,Zi=class extends S{constructor(){super(...arguments),this.localize=new W(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zi.styles=[z,nr,or];var V=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Z(this,"[default]","prefix","suffix"),this.localize=new W(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:bi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){const t=Rs(this.defaultSlot).trim(),e=this.defaultSlot.assignedElements({flatten:!0}),i=e.length===1&&e[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=i&&t===""}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?_e`a`:_e`button`;return ft`
      <${e}
        part="base"
        class=${C({button:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--filled":this.variant==="filled","button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix"),"button--large":this.size==="large","button--loading":this.loading,"button--medium":this.size==="medium","button--outline":this.variant==="outline","button--primary":!0,"button--rtl":this.localize.dir()==="rtl","button--small":this.size==="small","button--text":this.variant==="text"})}
        ?disabled=${w(t?void 0:this.disabled)}
        type=${w(t?void 0:this.type)}
        title=${this.title}
        name=${w(t?void 0:this.name)}
        value=${w(t?void 0:this.value)}
        href=${w(t&&!this.disabled?this.href:void 0)}
        target=${w(t?this.target:void 0)}
        download=${w(t?this.download:void 0)}
        rel=${w(t?this.rel:void 0)}
        role=${w(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${C({"button__icon-only":this.iconOnly,button__label:!0})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ft` <syn-icon part="caret" class="button__caret" library="system" name="chevron-down"></syn-icon> `:""}
        ${this.loading?ft`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${e}>
    `}};V.styles=[z,hn,sr];V.dependencies={"syn-icon":X,"syn-spinner":Zi};n([y(".button")],V.prototype,"button",2);n([y("slot:not([name])")],V.prototype,"defaultSlot",2);n([k()],V.prototype,"iconOnly",2);n([k()],V.prototype,"hasFocus",2);n([k()],V.prototype,"invalid",2);n([l({reflect:!0})],V.prototype,"title",2);n([l({reflect:!0})],V.prototype,"variant",2);n([l({reflect:!0})],V.prototype,"size",2);n([l({reflect:!0,type:Boolean})],V.prototype,"caret",2);n([l({reflect:!0,type:Boolean})],V.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],V.prototype,"loading",2);n([l()],V.prototype,"type",2);n([l()],V.prototype,"name",2);n([l()],V.prototype,"value",2);n([l()],V.prototype,"href",2);n([l()],V.prototype,"target",2);n([l()],V.prototype,"rel",2);n([l()],V.prototype,"download",2);n([l()],V.prototype,"form",2);n([l({attribute:"formaction"})],V.prototype,"formAction",2);n([l({attribute:"formenctype"})],V.prototype,"formEnctype",2);n([l({attribute:"formmethod"})],V.prototype,"formMethod",2);n([l({attribute:"formnovalidate",type:Boolean})],V.prototype,"formNoValidate",2);n([l({attribute:"formtarget"})],V.prototype,"formTarget",2);n([v("disabled",{waitUntilFirstUpdate:!0})],V.prototype,"handleDisabledChange",1);V=n([K("SynButton")],V);V.define("syn-button");var ar=_`
  :host {
    --border-color: var(--syn-panel-border-color);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
    --padding: var(--syn-spacing-large);

    display: inline-block;
  }

  .card {
    background-color: var(--syn-panel-background-color);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
  }

  /** #1107: Add shadow property to card */
  .card--shadow {
    box-shadow: var(--syn-shadow-small);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    display: flex;
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  /**
   * #1107: Sharp cards do not receive a border radius
   */
  .card--sharp {
    border-radius: var(--syn-border-radius-none);
  }

  /**
   * #1107: Do not apply border radius to sharp card images
   */
  .card--sharp .card__image {
    border-top-left-radius: var(--syn-border-radius-none);
    border-top-right-radius: var(--syn-border-radius-none);
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    color: var(--syn-typography-color-text);
    display: block;
    font: var(--syn-heading-large);
    line-height: var(--syn-line-height-normal);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    color: var(--syn-typography-color-text);
    display: block;
    font: var(--syn-body-medium-regular);
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    padding: var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Qi=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"footer","header","image"),this.shadow=!1,this.sharp=!1}render(){return m`
      <div
        part="base"
        class=${C({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-header":this.hasSlotController.test("header"),"card--has-image":this.hasSlotController.test("image"),"card--shadow":this.shadow,"card--sharp":this.sharp})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Qi.styles=[z,ar];n([l({reflect:!0,type:Boolean})],Qi.prototype,"shadow",2);n([l({reflect:!0,type:Boolean})],Qi.prototype,"sharp",2);Qi.define("syn-card");var rr=_`
  :host {
    display: block;
  }

  .form-control {
    border: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .form-control__label {
    padding: 0;
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    
    /*
     * We use 2x-small because the checkbox already has inner padding!
     * @todo: Exchange this with --syn-spacing-x-small in #1323
     */
    gap: var(--syn-spacing-2x-small);
  }

  .form-control--has-help-text.form-control--checkbox-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  /**
   * Allow checkbox-groups to be displayed in a row.
   */
  .form-control--is-horizontal .form-control-input {
    flex-flow: row wrap;
    gap: var(--syn-spacing-2x-small) var(--syn-spacing-medium);
  }
`,jt=_`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    color: var(--syn-input-label-color);
    display: inline-block;
    font-weight: var(--syn-font-weight-semibold);
    margin-bottom: var(--syn-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--syn-input-label-font-size-small);
    margin-bottom: var(--syn-spacing-x-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--syn-input-label-font-size-medium);
    margin-bottom: var(--syn-input-spacing-small);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--syn-input-label-font-size-large);
    margin-bottom: var(--syn-input-spacing-medium);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    color: var(--syn-input-required-content-color);
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    color: var(--syn-input-help-text-color);
    display: block;
    margin-top: var(--syn-spacing-x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-2x-small);
  }

  /* ERROR */
  :host([data-user-invalid]:not([disabled])) .form-control__help-text {
    color: var(--syn-input-help-text-color-error);
   }

  /* DISABLED */
  :host([disabled]) .form-control--has-label .form-control__label,
  :host([disabled]) .form-control--has-help-text .form-control__help-text {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }
`,It=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"help-text","label"),this.label="",this.helpText="",this.size="medium",this.layout="vertical",this.form=""}handleSizeChange(){this.syncCheckboxes()}handleFormChange(){this.syncCheckboxes()}async syncCheckboxElements(){const t=this.getAllCheckboxes();await Promise.all(t.map(async e=>{await e.updateComplete;const i=e;i.size=this.size,i.form=this.form}))}syncCheckboxes(){const t=!!this.querySelector("syn-checkbox"),e=!!this.querySelector("syn-switch"),i=!!customElements.get("syn-checkbox"),s=!!customElements.get("syn-switch");if((!t||i)&&(!e||s)){this.syncCheckboxElements().catch(()=>{});return}t&&!i&&customElements.whenDefined("syn-checkbox").then(()=>this.syncCheckboxes()).catch(()=>{}),e&&!s&&customElements.whenDefined("syn-switch").then(()=>this.syncCheckboxes()).catch(()=>{})}getAllCheckboxes(){return[...this.querySelectorAll("syn-checkbox, syn-switch")]}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key))return;const i=this.getAllCheckboxes().filter(h=>!h.disabled&&!h.readonly);if(!i.length)return;const o=t.composedPath().find(h=>{if(!h||!(h instanceof HTMLElement))return!1;const u=h.tagName.toLowerCase();return u==="syn-checkbox"||u==="syn-switch"}),a=i.find(h=>h.checked),r=i.indexOf((e=o??a)!=null?e:i[0]),d=["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let c=r+d;c<0&&(c=i.length-1),c>i.length-1&&(c=0),i[c].focus(),t.preventDefault()}handleLabelClick(){this.focus()}focus(t){const e=this.getAllCheckboxes(),i=e.find(a=>a.checked),s=e.find(a=>!a.disabled),o=i||s;o&&o.focus(ue(it({},t),{focusVisible:!0}))}firstUpdated(){this.syncCheckboxes()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return m`
      <fieldset
        part="form-control"
        class=${C({"form-control":!0,"form-control--checkbox-group":!0,"form-control--has-help-text":s,"form-control--has-label":i,"form-control--is-horizontal":this.layout==="horizontal","form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        aria-labelledby="label"
        aria-describedby="help-text"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <slot
            @slotchange=${this.syncCheckboxes}
            @keydown=${this.handleKeyDown}
          ></slot>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};It.styles=[z,jt,rr];n([y("slot:not([name])")],It.prototype,"defaultSlot",2);n([l()],It.prototype,"label",2);n([l({attribute:"help-text"})],It.prototype,"helpText",2);n([l({reflect:!0})],It.prototype,"size",2);n([l({reflect:!0})],It.prototype,"layout",2);n([l({reflect:!0})],It.prototype,"form",2);n([v("size",{waitUntilFirstUpdate:!0})],It.prototype,"handleSizeChange",1);n([v("form",{waitUntilFirstUpdate:!0})],It.prototype,"handleFormChange",1);It=n([K("SynCheckboxGroup")],It);It.define("syn-checkbox-group");var lr=_`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: inline-block;
  }

  .checkbox {
    align-items: flex-start;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    padding: var(--syn-spacing-2x-small) 0; /* #1083: This adds spacing around multi-line labels */
    position: relative;
    vertical-align: middle;
  }

  .checkbox--small {
    --toggle-size: var(--syn-toggle-size-small);

    font-size: var(--syn-input-font-size-small);
    padding: var(--syn-spacing-3x-small) 0;
  }

  .checkbox--medium {
    --toggle-size: var(--syn-toggle-size-medium);

    font-size: var(--syn-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--syn-toggle-size-large);

    font-size: var(--syn-input-font-size-large);
  }

  .checkbox__control {
    align-items: center;
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: var(--syn-checkbox-border-radius);
    color: var(--syn-color-neutral-0);
    display: inline-flex;
    flex: 0 0 auto;
    height: var(--toggle-size);
    justify-content: center;
    margin: 0.1em 0; /* #1083: This adds spacing around multi-line labels */
    position: relative;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
    width: var(--toggle-size);
  }

  .checkbox__input {
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    height: var(--toggle-size);
    width: var(--toggle-size);
  }

  /**
   * Hover
   * Applies the hover state to the whole component
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):not(.checkbox--readonly):hover .checkbox__control {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--disabled):not(.checkbox--readonly) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
  }

  /**
   * Checked/indeterminate + hover
   * Applies the hover state to the whole component
   */
  .checkbox.checkbox--checked:not(.checkbox--disabled):not(.checkbox--readonly):hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):not(.checkbox--readonly):hover .checkbox__control {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  /*
   * #443: Add active styles
   * The checked and unchecked states have different active colors
   * Note the fallback is defined to match the hover color.
   * This is done to make sure no active state is shown at all if no active color is defined.
   * Still better than showing one for the unchecked state but not for the checked state.
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):not(.checkbox--readonly):active .checkbox__control {
    border-color: var(--syn-input-border-color-active);
  }

  /* Checked/indeterminate */
  .checkbox.checkbox--checked:not(.checkbox--disabled):not(.checkbox--readonly):active .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):not(.checkbox--readonly):active .checkbox__control {
    background: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /** #429: Use token for opacity */
  .checkbox--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .checkbox__label {
    align-self: center;
    color: var(--syn-input-label-color);
    display: inline-block;
    line-height: var(--syn-line-height-normal);
    margin-inline-start: var(--syn-spacing-x-small);
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    color: var(--syn-input-required-content-color);
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  :host([data-user-invalid]) .checkbox__control {
    background: var(--syn-input-border-color-focus-error);
    border-color: var(--syn-input-border-color-focus-error);
  }

  /**
   * #943: When invalid, use a transparent background if not checked or indeterminate
   */
  :host([data-user-invalid]:not([checked]):not([indeterminate])) .checkbox__control {
    background: transparent;
  }

  /**
   * #1171: Readonly state
   */
  .checkbox.checkbox--readonly {
    cursor: default;
  }

  .checkbox.checkbox--readonly .checkbox__label {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: auto;
    user-select: auto;
  }

  .checkbox.checkbox--readonly .checkbox__control {
    background: var(--syn-input-readonly-background-color);
    border-color: var(--syn-input-readonly-background-color);
    color: var(--syn-readonly-indicator-color);
    cursor: default;
  }

  .checkbox.checkbox--readonly .checkbox__input:focus ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }
`,Re=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(a,r,d){var c;const h=s.getPropertyOptions(t),u=typeof h.attribute=="string"?h.attribute:t;if(a===u){const p=h.converter||Le,f=(typeof p=="function"?p:(c=p?.fromAttribute)!=null?c:Le.fromAttribute)(d,h.type);this[t]!==f&&(this[i]=f)}o.call(this,a,r,d)}};const ui=Pe(class extends vi{constructor(t){if(super(t),t.type!==Mt.PROPERTY&&t.type!==Mt.ATTRIBUTE&&t.type!==Mt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===St||e===q)return e;const i=t.element,s=t.name;if(t.type===Mt.PROPERTY){if(e===i[s])return St}else if(t.type===Mt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return St}else if(t.type===Mt.ATTRIBUTE&&i.getAttribute(s)===e+"")return St;return Ga(t),e}});var lt=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Z(this,"help-text"),this.title="",this.name="",this.size="medium",this.disabled=!1,this.readonly=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(t){if(this.readonly){t.preventDefault();return}this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${C({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${C({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--readonly":this.readonly,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${w(this.value)}
            .indeterminate=${ui(this.indeterminate)}
            .checked=${ui(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?m`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?m`
                  <syn-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></syn-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};lt.styles=[z,jt,lr];lt.dependencies={"syn-icon":X};n([y('input[type="checkbox"]')],lt.prototype,"input",2);n([l({reflect:!0})],lt.prototype,"title",2);n([l()],lt.prototype,"name",2);n([l()],lt.prototype,"value",2);n([l({reflect:!0})],lt.prototype,"size",2);n([l({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],lt.prototype,"readonly",2);n([l({type:Boolean,reflect:!0})],lt.prototype,"checked",2);n([l({type:Boolean,reflect:!0})],lt.prototype,"indeterminate",2);n([Re("checked")],lt.prototype,"defaultChecked",2);n([l({reflect:!0})],lt.prototype,"form",2);n([l({type:Boolean,reflect:!0})],lt.prototype,"required",2);n([l({attribute:"help-text"})],lt.prototype,"helpText",2);n([v("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);n([v(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],lt.prototype,"handleStateChange",1);lt=n([K("SynCheckbox")],lt);lt.define("syn-checkbox");var dr=_`
  :host {
    --width: 31rem;
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);

    display: contents;
  }

  .dialog {
    align-items: center;
    display: flex;
    inset: 0;
    justify-content: center;
    position: fixed;
    z-index: var(--syn-z-index-dialog);
  }

  .dialog__panel {
    background-color: var(--syn-panel-background-color);
    border: var(--syn-spacing-4x-small) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-large);
    display: flex;
    flex-direction: column;
    max-height: calc(100% - var(--syn-spacing-2x-large));
    max-width: calc(100% - var(--syn-spacing-2x-large));
    width: var(--width);
    z-index: 2;
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (width <= 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    display: flex;
    flex: 0 0 auto;
  }

  .dialog__title {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    font: var(--syn-heading-x-large);
    margin: 0;
    padding: var(--header-spacing);
  }

  .dialog__header-actions {
    align-items: flex-start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-font-size-x-large);
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--body-spacing);
    will-change: transform; /* #1249: Fixes Chrome scroll issues when using multiple scrollable items as content */
  }

  .dialog__footer {
    flex: 0 0 auto;
    padding: var(--footer-spacing);
    text-align: right;
  }

  .dialog__footer ::slotted(syn-button:not(:first-of-type)) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    backdrop-filter: blur(var(--syn-overlay-background-blur)); /* #946: Add background blur for sick 2025 */
    background-color: var(--syn-overlay-background-color);
    inset: 0;
    position: fixed;
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`;function*Ns(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Yn(Ns(t.shadowRoot.activeElement))))}function un(){return[...Ns()].pop()}var vo=new WeakMap;function pn(t){let e=vo.get(t);return e||(e=window.getComputedStyle(t,null),vo.set(t,e)),e}function cr(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=pn(t);return e.visibility!=="hidden"&&e.display!=="none"}function hr(t){const e=pn(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function ur(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const a=t.getRootNode(),r=`input[type='radio'][name="${t.getAttribute("name")}"]`,d=a.querySelector(`${r}:checked`);return d?d===t:a.querySelector(r)===t}return cr(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:hr(t):!1}function pr(t){var e,i;const s=_s(t),o=(e=s[0])!=null?e:null,a=(i=s[s.length-1])!=null?i:null;return{start:o,end:a}}function mr(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function _s(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&ur(o)&&i.push(o),o instanceof HTMLSlotElement&&mr(o,t)&&o.assignedElements({flatten:!0}).forEach(a=>{s(a)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const a of o.children)s(a)}return s(t),i.sort((o,a)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-r})}var Ye=[],mn=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=un();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=_s(this.element);let a=o.findIndex(d=>d===s);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){a+r>=o.length?a=0:a+r<0?a=o.length-1:a+=r,this.previousFocus=this.currentFocus;const d=o[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||d&&this.possiblyHasTabbableChildren(d))return;e.preventDefault(),this.currentFocus=d,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...Ns()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Ye.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ye=Ye.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ye[Ye.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=_s(this.element);if(!(()=>{let i=document.activeElement;for(;i;){if(this.element.contains(i))return!0;const s=i.shadowRoot;i=s?s.activeElement:null}return!1})()){const i=t[0],s=t[t.length-1],o=this.tabDirection==="forward"?i:s;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function fr(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var ws=new Set;function yr(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function br(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function si(t){if(ws.add(t),!document.documentElement.classList.contains("syn-scroll-lock")){const e=yr()+br();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--syn-scroll-lock-gutter",i),document.documentElement.classList.add("syn-scroll-lock"),document.documentElement.style.setProperty("--syn-scroll-lock-size",`${e}px`)}}function Te(t){ws.delete(t),ws.size===0&&(document.documentElement.classList.remove("syn-scroll-lock"),document.documentElement.style.removeProperty("--syn-scroll-lock-size"))}function qi(t,e,i="vertical",s="smooth"){const o=fr(t,e),a=o.top+e.scrollTop,r=o.left+e.scrollLeft,d=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,u=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(r<d?e.scrollTo({left:r,behavior:s}):r+t.clientWidth>c&&e.scrollTo({left:r-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(a<h?e.scrollTo({top:a,behavior:s}):a+t.clientHeight>u&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:s}))}var Gt=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"footer"),this.localize=new W(this),this.modal=new mn(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),si(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Te(this),this.removeOpenListeners()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=U(this,"dialog.denyClose",{dir:this.localize.dir()});G(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),si(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([nt(this.dialog),nt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,"dialog.show",{dir:this.localize.dir()}),i=U(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([G(this.panel,e.keyframes,e.options),G(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{Vs(this),this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([nt(this.dialog),nt(this.overlay)]);const t=U(this,"dialog.hide",{dir:this.localize.dir()}),e=U(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([G(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),G(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Te(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,at(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,at(this,"syn-after-hide")}render(){return m`
      <div
        part="base"
        class=${C({dialog:!0,"dialog--has-footer":this.hasSlotController.test("footer"),"dialog--open":this.open})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${w(this.noHeader?this.label:void 0)}
          aria-labelledby=${w(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></syn-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Gt.styles=[z,dr];Gt.dependencies={"syn-icon-button":Y};n([y(".dialog")],Gt.prototype,"dialog",2);n([y(".dialog__panel")],Gt.prototype,"panel",2);n([y(".dialog__overlay")],Gt.prototype,"overlay",2);n([l({reflect:!0,type:Boolean})],Gt.prototype,"open",2);n([l({reflect:!0})],Gt.prototype,"label",2);n([l({attribute:"no-header",reflect:!0,type:Boolean})],Gt.prototype,"noHeader",2);n([v("open",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleOpenChange",1);L("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});L("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});L("dialog.denyClose",{keyframes:[{offset:0,transform:"translateX(0)"},{offset:.32,transform:"translateX(calc(var(--syn-spacing-x-small) * -1))"},{offset:.6,transform:"translateX(var(--syn-spacing-2x-small))"},{offset:.82,transform:"translateX(calc(var(--syn-spacing-3x-small) * -1))"},{offset:1,transform:"translateX(0)"}],options:{duration:250,easing:"cubic-bezier(0.25, 0.1, 0.25, 1)"}});L("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});L("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Gt.define("syn-dialog");var gr=_`
  :host {
    /* Size-dependent custom properties (default to medium values) */
    --details-header-padding: var(--syn-spacing-medium-large) 0;
    --details-content-padding: var(--syn-spacing-medium) 0 var(--syn-spacing-large);
    --details-summary-font: var(--syn-body-medium-bold);
    --details-content-font-size: var(--syn-font-size-small);
    --details-icon-size: var(--syn-spacing-large);
    --details-slotted-icon-size: var(--syn-spacing-large);
    
    /* Contained variant custom properties */
    --details-header-padding-contained: var(--syn-spacing-medium-large) var(--syn-spacing-large);
    --details-content-padding-contained: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large);

    display: block;
  }

  .details {
    background-color: transparent;
    border: 1px solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    border-width: 0 0 var(--syn-border-width-small);
    overflow-anchor: none;
  }

  /** #429: Use token for opacity */
  .details--disabled {
    opacity: var(--syn-opacity-50);
  }

  .details__header {
    align-items: center;
    border-radius: inherit;
    cursor: pointer;
    display: flex;
    gap: var(--syn-spacing-medium);
    padding: var(--details-header-padding);
    user-select: none;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: calc(1px + var(--syn-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    box-shadow: none;
    outline: none;
  }

  .details__summary {
    align-items: center;
    color: var(--syn-typography-color-text);
    display: flex;
    flex: 1 1 auto;
    font: var(--details-summary-font);
  }

  .details__summary-icon {
    align-items: center;
    align-self: flex-start;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--details-icon-size);
    position: relative;

    /**
     * As we are using an alignment of "start"  instead of "center" make sure
     * the arrow starts on the same visual line as the first line of headline text
     */
    top: 2px;
    transition: var(--syn-transition-medium) rotate ease;
  }

  /**
   * As we are using top/down arrows for the details element,
   * we have to adjust the rotation of the icon when the details is open.
   */
  .details--open .details__summary-icon {
    rotate: var(--syn-details-open-rotation);
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    font-size: var(--details-content-font-size);
    line-height: var(--syn-line-height-normal);
    padding: var(--details-content-padding);
  }

  /**
   * Size variants
   */
  .details--size-small {
    --details-header-padding: var(--syn-spacing-small) 0;
    --details-content-padding: var(--syn-spacing-small) 0 var(--syn-spacing-medium-large);
    --details-summary-font: var(--syn-body-small-bold);
    --details-content-font-size: var(--syn-font-size-x-small);
    --details-icon-size: var(--syn-spacing-medium-large);
    --details-slotted-icon-size: var(--syn-spacing-medium-large);
    --details-header-padding-contained: var(--syn-spacing-small) var(--syn-spacing-large);
    --details-content-padding-contained: var(--syn-spacing-small) var(--syn-spacing-large) var(--syn-spacing-medium-large);
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .details--size-small .details__header {
    min-height: var(--syn-spacing-large);
  }

  .details--size-large {
    --details-header-padding: var(--syn-spacing-large) 0;
    --details-content-padding: var(--syn-spacing-medium-large) 0 var(--syn-spacing-large);
    --details-summary-font: var(--syn-body-large-bold);
    --details-content-font-size: var(--syn-font-size-medium);
    --details-icon-size: var(--syn-spacing-x-large);
    --details-slotted-icon-size: var(--syn-spacing-x-large);
    --details-header-padding-contained: var(--syn-spacing-large);
    --details-content-padding-contained: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--details-slotted-icon-size);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Add a visually visible hover effect to the summary element
   */
  .details:not(.details--disabled) .details__header:hover .details__summary,
  .details:not(.details--disabled) .details__header:hover .details__summary-icon {
    color: var(--syn-interactive-quiet-color-hover);
  }

  /**
   *  Contained style
   */
  .details--contained {
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    border-width: var(--syn-panel-border-width);
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .details--contained .details__header {
    padding: var(--details-header-padding-contained);
  }

  .details--contained .details__content {
    padding: var(--details-content-padding-contained);
  }

  .details--contained .details__header:focus-visible {
    border-radius: var(--syn-border-radius-medium);
  }
`,wt=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size="medium"}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("syn-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await nt(this.body);const{keyframes:e,options:i}=U(this,"details.show",{dir:this.localize.dir()});await G(this.body,bo(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("syn-after-show")}else{if(this.emit("syn-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await nt(this.body);const{keyframes:e,options:i}=U(this,"details.hide",{dir:this.localize.dir()});await G(this.body,bo(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("syn-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,at(this,"syn-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,at(this,"syn-after-hide")}render(){return m`
      <details
        part="base"
        class=${C({details:!0,"details--size-small":this.size==="small","details--size-medium":this.size==="medium","details--size-large":this.size==="large","details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <syn-icon library="system" name="details-open"></syn-icon>
            </slot>
            <slot name="collapse-icon">
              <syn-icon library="system" name="details-close"></syn-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" part="body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};wt.styles=[z,gr];wt.dependencies={"syn-icon":X};n([y(".details")],wt.prototype,"details",2);n([y(".details__header")],wt.prototype,"header",2);n([y(".details__body")],wt.prototype,"body",2);n([y(".details__expand-icon-slot")],wt.prototype,"expandIconSlot",2);n([l({type:Boolean,reflect:!0})],wt.prototype,"open",2);n([l()],wt.prototype,"summary",2);n([l({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],wt.prototype,"contained",2);n([l({reflect:!0})],wt.prototype,"size",2);n([v("open",{waitUntilFirstUpdate:!0})],wt.prototype,"handleOpenChange",1);wt=n([K("SynDetails")],wt);L("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});L("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});wt.define("syn-details");let xs=class extends vi{constructor(e){if(super(e),this.it=q,e.type!==Mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===q||e==null)return this._t=void 0,this.it=e;if(e===St)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};xs.directiveName="unsafeHTML",xs.resultType=1;const Bs=Pe(xs);var _o=t=>Array.from(t.assignedElements({flatten:!0})),vr=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:Array.from(t.querySelectorAll(":scope > syn-option")),_r=t=>t.tagName.toLocaleLowerCase()==="syn-optgroup",wo=t=>t.map(vr),wr=t=>t.filter(_r),xo=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),ko=t=>{const e=document.createElement("div");return tn(t,e),e.firstElementChild},cs=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:void 0,xr=t=>{if(t){if(t instanceof HTMLElement)return cs(t);if(typeof t=="string"){const e=m`${Bs(t)}`,i=ko(e);return cs(i)}if(Object.prototype.hasOwnProperty.call(t,"_$litType$")){const e=ko(t);return cs(e)}}},ks=t=>{const{value:e}=t;return e==null||e===""?t.getTextLabel():e},ze=t=>t.map(ks),Co=(t,e)=>{if(!e||t===void 0||t===null||t==="")return!1;const i=e.value,s=e.getTextLabel();return String(t)===String(i)||String(t)===s},fn=_`
  /**
   * Size adjustments for syn-select and other widgets that use syn-option
   * This allows to share the common settings between all components that
   * should be able to set the size of a syn-option tag.
   *
   * Also note that we have to adjust the padding to take the border size into account.
   */
  :host([size="small"]) {
    --option-inset-border-horizontal: var(--syn-spacing-2x-small);
    --option-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --option-min-height: var(--syn-input-height-small);
    --option-padding: var(--syn-input-spacing-small);
    --option-font-size: var(--syn-input-font-size-small);
    --option-icon-size: var(--syn-spacing-medium);
  }

  :host([size="medium"]) {
    --option-inset-border-horizontal: var(--syn-spacing-2x-small);
    --option-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --option-min-height: var(--syn-input-height-medium);
    --option-padding: var(--syn-input-spacing-medium);
    --option-font-size: var(--syn-input-font-size-medium);
    --option-icon-size: var(--syn-spacing-large);
  }

  :host([size="large"]) {
    --option-inset-border-horizontal: var(--syn-spacing-2x-small);
    --option-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --option-min-height: var(--syn-input-height-large);
    --option-padding: var(--syn-input-spacing-large);
    --option-font-size: var(--syn-input-font-size-large);
    --option-icon-size: var(--syn-spacing-x-large);
  }
`,kr=_`
  /* stylelint-disable property-no-vendor-prefix */
  /* stylelint-disable no-descending-specificity */
  :host {
    /* Size-dependent CSS custom properties - defaults to medium */
    --syn-combobox-input-border-radius: var(--syn-input-border-radius-medium);
    --syn-combobox-input-font-size: var(--syn-input-font-size-medium);
    --syn-combobox-input-height: var(--syn-input-height-medium);
    --syn-combobox-input-spacing: var(--syn-input-spacing-medium);
    --syn-combobox-clear-font-size: var(--syn-spacing-large);
    --syn-combobox-clear-margin: var(--syn-spacing-small);
    --syn-combobox-prefix-suffix-margin: var(--syn-input-spacing-small);
    --syn-combobox-icon-font-size: var(--syn-font-size-x-large);
    --syn-combobox-expand-icon-font-size: var(--syn-spacing-large);
    --syn-combobox-tags-gap: var(--syn-spacing-x-small);
    --syn-combobox-tags-margin: var(--syn-input-spacing-small);
    --syn-combobox-no-results-font-size: var(--syn-input-font-size-medium);
    --syn-combobox-no-results-height: var(--syn-input-height-medium);
    --syn-combobox-no-results-padding: var(--syn-spacing-small) var(--syn-spacing-medium) var(--syn-spacing-small) 52px;

    display: block;   
  }

  /** The popup */
  .combobox {
    display: inline-flex;
    flex: 1 1 auto;
    position: relative;
    vertical-align: middle;
    width: 100%;
  }

  .combobox::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .combobox[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .combobox[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .combobox__inputs {
    align-items: center;
    border-radius: var(--syn-combobox-input-border-radius);
    cursor: pointer;
    display: flex;
    flex: 1;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-combobox-input-font-size);
    font-weight: var(--syn-input-font-weight);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    min-height: var(--syn-combobox-input-height);
    min-width: 0;
    overflow: hidden;
    padding-block: 0;
    padding-inline: var(--syn-combobox-input-spacing);
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
  }

  .combobox__display-input {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: var(--syn-input-color);
    cursor: inherit;
    flex: 1;
    font: inherit;
    margin: 0;
    min-width: var(--syn-spacing-2x-large);
    overflow: hidden;
    padding: 0;
    position: relative;
    width: unset;
  }

  .combobox__display-input::placeholder {
    color: var(--syn-input-placeholder-color);
  }

  .combobox__display-input:focus {
    outline: none;
  }

  .combobox:not(.combobox--disabled):not(.combobox--readonly) .combobox__display-input {
    cursor: text;
  }

  .combobox:not(.combobox--disabled):hover:not(.combobox--readonly) .combobox__display-input {
    color: var(--syn-input-color-hover);
  }

  .combobox__value-input {
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /* Standard combobox */
  .combobox--standard .combobox__inputs {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .combobox--standard.combobox--disabled .combobox__inputs {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    color: var(--syn-input-color-disabled);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /** #429: Use token for opacity */
    outline: none;
  }

  /* Change combobox border on hover */
  .combobox:not(.combobox--disabled):not(.combobox--readonly):hover .combobox__inputs {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Size variants */
  .combobox--small {
    --syn-combobox-input-border-radius: var(--syn-input-border-radius-small);
    --syn-combobox-input-font-size: var(--syn-input-font-size-small);
    --syn-combobox-input-height: var(--syn-input-height-small);
    --syn-combobox-input-spacing: var(--syn-input-spacing-small);
    --syn-combobox-clear-font-size: var(--syn-spacing-medium);
    --syn-combobox-clear-margin: var(--syn-input-spacing-small);
    --syn-combobox-prefix-suffix-margin: var(--syn-spacing-x-small);
    --syn-combobox-icon-font-size: var(--syn-font-size-medium);
    --syn-combobox-expand-icon-font-size: var(--syn-spacing-medium);
    --syn-combobox-tags-gap: var(--syn-spacing-2x-small);
    --syn-combobox-tags-margin: var(--syn-spacing-x-small);
    --syn-combobox-no-results-font-size: var(--syn-input-font-size-small);
    --syn-combobox-no-results-height: var(--syn-input-height-small);
    --syn-combobox-no-results-padding: 0 var(--syn-spacing-small) 0 40px;
  }

  .combobox--large {
    --syn-combobox-input-border-radius: var(--syn-input-border-radius-large);
    --syn-combobox-input-font-size: var(--syn-input-font-size-large);
    --syn-combobox-input-height: var(--syn-input-height-large);
    --syn-combobox-input-spacing: var(--syn-input-spacing-large);
    --syn-combobox-clear-font-size: var(--syn-spacing-x-large);
    --syn-combobox-clear-margin: var(--syn-input-spacing-large);
    --syn-combobox-prefix-suffix-margin: var(--syn-input-spacing-medium);
    --syn-combobox-icon-font-size: var(--syn-font-size-2x-large);
    --syn-combobox-expand-icon-font-size: var(--syn-spacing-x-large);
    --syn-combobox-tags-gap: var(--syn-spacing-small);
    --syn-combobox-tags-margin: var(--syn-input-spacing-medium);
    --syn-combobox-no-results-font-size: var(--syn-input-font-size-large);
    --syn-combobox-no-results-height: var(--syn-input-height-large);
    --syn-combobox-no-results-padding: 0 var(--syn-spacing-large) 0 68px;
  }

  /* Prefix and Suffix */
  .combobox__prefix,
  .combobox__suffix {
    align-items: center;
    color: var(--syn-input-icon-color);
    display: inline-flex;
    flex: 0;
  }

  .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-combobox-prefix-suffix-margin);
  }

  .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-combobox-prefix-suffix-margin);
  }

  .combobox__suffix::slotted(syn-icon),
  .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-combobox-icon-font-size);
  }

  /* Clear button */
  .combobox__clear {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-input-icon-icon-clearable-color);
    cursor: pointer;
    display: inline-flex;
    font-size: var(--syn-combobox-clear-font-size);
    justify-content: center;
    margin-inline-start: var(--syn-combobox-clear-margin);
    padding: 0;
    transition: var(--syn-transition-fast) color;
  }

  .combobox__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .combobox__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .combobox__expand-icon {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-combobox-expand-icon-font-size);
    margin-inline-start: var(--syn-spacing-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .combobox--open .combobox__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .combobox__listbox {
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    box-shadow: var(--syn-shadow-medium);
    display: block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    max-height: var(--auto-size-available-height); /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    overflow: auto;
    overscroll-behavior: none;
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    position: relative;   
  }

  .combobox__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .combobox__listbox ::slotted(small) {
    color: var(--syn-color-neutral-500);
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }

  /* Multi Select */
  .combobox__tags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--syn-combobox-tags-gap);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .combobox__tags::slotted(syn-tag) {
    cursor: pointer !important;
  }

  .combobox--disabled .combobox__tags,
  .combobox--disabled .combobox__tags::slotted(syn-tag) {
    cursor: not-allowed !important;
  }

  .combobox--tags-visible .combobox__tags {
    margin-inline-end: var(--syn-combobox-tags-margin);
  }

  .listbox__options ::slotted(syn-option[hidden]), 
  .listbox__options ::slotted(syn-optgroup[hidden]) {
    display: none;
  }

  .listbox__no-results {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    font-size: var(--syn-combobox-no-results-font-size);
    font-weight: var(--syn-font-weight-normal);
    min-height: var(--syn-combobox-no-results-height);
    padding: var(--syn-combobox-no-results-padding);
  }

  /**
   * #850: Allow to measure the size of the combobox.
   * This is needed so we can automatically size and truncate the tags in the <syn-combobox multiple> component.
   * Scoped to multiple to not break the single select per accident.
   * Scoped to when placeholder is not visible to not break the placeholder visualization
   */
  :host([multiple]) :not(.combobox--placeholder-visible).combobox--tags-visible > .combobox__inputs > .combobox__tags {
    min-width: 85px;
    overflow: hidden;
  }

  :host([multiple]) .combobox__tags > div {
    display: contents;
  }

  :host([multiple]) .combobox__tags > div > syn-tag {
    --syn-tag-position-adjustment: var(--syn-spacing-3x-small);

    max-width: var(--syn-select-tag-max-width);
  }

  :host([multiple]) .combobox__tags > div > syn-tag::part(content) {
    display: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 
  This class is needed to be able to hide the options as long as the popup close animation is running.
  As otherwise the listbox would flicker because the options are shown again when the value is reset to empty string.
  */
  .options__hide {
    /* We need to set the slot to something different than display: contents to be able to hide it. Also it should not take any space so we remove the height */
    display: block;
    height: 0;
    opacity: 0;
  }

  /**
   * Invalid user data
   */
  :host([data-user-invalid]) .combobox__inputs {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .combobox--standard:not(.combobox--disabled).combobox--open .combobox__inputs,
  :host([data-user-invalid]) .combobox--standard:not(.combobox--disabled).combobox--focused .combobox__inputs {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  .combobox--standard:not(.combobox--disabled).combobox--open .combobox__inputs,
  .combobox--standard:not(.combobox--disabled).combobox--focused .combobox__inputs {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .combobox--standard.combobox--readonly.combobox--focused .combobox__inputs {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .combobox__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }

  /**
   * #1172: Add support for readonly
   */
  .combobox--readonly .combobox__inputs {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
    cursor: default;
  }

  .combobox--readonly .combobox__expand-icon {
    color: var(--syn-readonly-icon-color-expand);
  }

  ${fn}
`,Cr=t=>t,Sr=_`
  :host {
    display: block;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /**
   * syn-option is now able to adjust its height from a parent item
   * This is done by exposing multiple css variables to the outside:
   *
   * --option-min-height (defaults to 48px) The minimal height of an element
   * --option-padding (defaults to var(--syn-spacing-small) var(--syn-spacing-medium)) The padding to use
   * --option-font-size (defaults to var(--syn-font-size-medium)) The font size to use
   * --option-icon-size (defaults to var(--syn-spacing-large)) The size of the checkmark
   * 
   * See below for usage of these variables
   */
  .option {
    align-items: center;

    /*
     * #988: Brand2025 defines a small gap between options
     * and rounded corners. We achieve that using an border
     * that simulates the gap using the menu background color.
     */
    border: solid var(--syn-panel-background-color);

    /**
     * Border Radius needs to be increased to cover the outline
     * Note this also needs to take the following into account:
     * - 2018 does not have a focus ring, so the border radius is as small as the border, essentially negating it to "0"
     * - 2025 needs to adapt with another pixel to make it match the rounding of the focus ring
     */
    border-radius: calc(calc(var(--syn-focus-ring-border-radius) * 2) + var(--option-inset-border-vertical) - 2px) / calc(calc(var(--syn-focus-ring-border-radius) * 2) + var(--option-inset-border-vertical) - 4px);
    border-width: var(--option-inset-border-horizontal) var(--option-inset-border-vertical);
    color: var(--syn-color-neutral-700);
    cursor: pointer;
    display: flex;
    font-family: var(--syn-font-sans);
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    font-weight: var(--syn-font-weight-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);

    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--option-min-height, var(--syn-input-height-medium));
    padding: 0 calc(var(--option-padding) - var(--option-inset-border-vertical));
    position: relative;
    transition: var(--syn-transition-fast) fill;
  }

  .option:not(.option--current) {
    color: var(--syn-option-color);
  }

  .option--current,
  .option--current.option--hover:not(.option--disabled) {
    background-color: var(--syn-option-background-color-active);
    color: var(--syn-option-color-active);
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--syn-option-background-color-hover);
    color: var(--syn-option-color-hover);
  }

  .option--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
    outline: none;
  }

  .option--current.option--disabled {
    background-color: var(--syn-option-background-color-hover);
    color: var(--syn-option-color-hover);
  }

  .option__label {
    display: inline-block;
    flex: 1 1 auto;
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-option-check-color);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option .option__check {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    padding-inline-end: var(--syn-spacing-small);
    visibility: hidden;
  }

  /* Invert the check mark when keyboard navigation is used */
  .option--current .option__check {
    color: var(--syn-option-check-color-active);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option--hover:not(.option--current) .option__check {
    color: var(--syn-option-check-color-hover);
  }

  .option__prefix,
  .option__suffix {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
  }

  /* Use larger spacing between icons and content */
  .option__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Set correct icon size when someone uses syn-icon in the slots */
  .option__prefix::slotted(syn-icon),
  .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option--current .option__prefix::slotted(syn-icon),
  .option--current .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-active);
  }

  .option--hover:not(.option--disabled) .option__prefix::slotted(syn-icon),
  .option--hover:not(.option--disabled) .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-hover);
  }

  /* This is needed for the highlight styling of the options in syn-combobox */
  .option__label::slotted(.syn-highlight-style) {
    background-color: transparent;
    color: unset;
    font: var(--syn-body-medium-bold);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,zr=(t,e)=>{const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(i,"g");return t.replace(s,"_")},ht=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.originalValue="",this.isInitialized=!1,this.delimiter=" ",this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?this.triggerParentDefaultSlotChange():this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleDelimiterChange(){this.sanitizeValueForDelimiter()}handleValueChange(){this.originalValue=this.value,this.sanitizeValueForDelimiter()}sanitizeValueForDelimiter(){let t=this.originalValue;if(typeof t=="number")return;typeof t!="string"&&(t=String(t));const{delimiter:e}=this;t.includes(e)&&(console.error(`Option values cannot include "${e}". All occurrences of "${e}" have been replaced with "_".`,this),t=zr(t,this.delimiter)),this.value=t,this.triggerParentDefaultSlotChange()}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}triggerParentDefaultSlotChange(){customElements.whenDefined("syn-combobox").then(()=>{const t=this.closest("syn-combobox");t&&t.handleDefaultSlotChange()}),customElements.whenDefined("syn-select").then(()=>{const t=this.closest("syn-select");t&&t.handleDefaultSlotChange()})}render(){return m`
      <div
        part="base"
        class=${C({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ht.styles=[z,Sr];ht.dependencies={"syn-icon":X};n([y(".option__label")],ht.prototype,"defaultSlot",2);n([k()],ht.prototype,"delimiter",2);n([k()],ht.prototype,"current",2);n([k()],ht.prototype,"selected",2);n([k()],ht.prototype,"hasHover",2);n([l({reflect:!0})],ht.prototype,"value",2);n([l({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);n([v("disabled")],ht.prototype,"handleDisabledChange",1);n([v("selected")],ht.prototype,"handleSelectedChange",1);n([v("delimiter")],ht.prototype,"handleDelimiterChange",1);n([v("value")],ht.prototype,"handleValueChange",1);ht=n([K("SynOption")],ht);var oi=t=>Array.isArray(t)||typeof t=="string"?t.length>0:typeof t=="number"?!0:!!t,Qe=(t,e)=>Array.isArray(t)&&Array.isArray(e)?t.length!==e.length?!1:t.every((i,s)=>i===e[s]):t===e,$r=_`
  :host {
    /*
     * #850: This is needed for position adjustments when using the tags in syn-select[multiple].
     * It will get adjusted in the syn-select component.
     */
    --syn-tag-position-adjustment: 0px;
  }

  .tag {
    background-color: var(--syn-panel-background-color);
    border-color: var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-small);
    border-width: var(--syn-border-width-small);
    color: var(--syn-input-color);
  }

  .tag .tag__remove {
    color: var(--syn-input-icon-icon-clearable-color);
  }


  /* Size small */
  .tag--small {
    font-size: var(--syn-font-size-x-small);
    height: var(--syn-font-size-x-large);
    line-height: calc(var(--syn-font-size-x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--small.tag--removable {
    padding-inline-end: var(--syn-spacing-2x-small);
  }


  /* Size medium */
  .tag--medium {
    font-size: var(--syn-font-size-small);
    height: var(--syn-font-size-2x-large);
    line-height: calc(var(--syn-font-size-2x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--medium.tag--removable {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .tag--medium .tag__remove {
    margin-inline-start: var(--syn-spacing-small);
  }


  /* Size large */
  .tag--large {
    font-size: var(--syn-font-size-medium);
    height: var(--syn-font-size-3x-large);
    line-height: calc(var(--syn-font-size-3x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--large .tag__remove {
    margin-inline-start: var(--syn-spacing-medium);
  }

  .tag--large.tag--removable {
    padding-inline-end: var(--syn-spacing-small);
  }


  /* Hover */
  .tag.tag--removable:hover {
    background-color: var(--syn-interactive-background-color-hover);
  }
  
  .tag .tag__remove:hover {
    color: var(--syn-input-icon-icon-clearable-color-hover);
  }


  /* Focus 
     ! Focus styling is currently not working because shoelace does not support to focus icon-button 
  */
  .tag.tag--removable:focus ~ .tag__remove {
    border: solid 1px var(--syn-color-primary-500);
  }


  /* Slotted icon style */
  .tag ::slotted(syn-icon) {
    position: relative;
    top: var(--syn-tag-position-adjustment);
  }

  .tag--small ::slotted(syn-icon) {
    font-size: var(--syn-font-size-small);
    margin-inline-end: var(--syn-spacing-2x-small);
  }

  .tag--medium ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .tag--large ::slotted(syn-icon) {
    font-size: var(--syn-font-size-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }


  /* Remove icon-button style */
  .tag--small .tag__remove::part(base){
    font-size: var(--syn-font-size-medium);
  }

  .tag--medium .tag__remove::part(base){
    font-size: var(--syn-font-size-x-large);
  }

  .tag--large .tag__remove::part(base){
    font-size: var(--syn-font-size-2x-large);
  }
`,Ar=_`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--syn-button-font-size-small);
    height: calc(var(--syn-input-height-small) * 0.8);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-small);
    padding: 0 var(--syn-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--syn-button-font-size-medium);
    height: calc(var(--syn-input-height-medium) * 0.8);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-medium);
    padding: 0 var(--syn-spacing-small);
  }

  .tag--large {
    font-size: var(--syn-button-font-size-large);
    height: calc(var(--syn-input-height-large) * 0.8);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-large);
    padding: 0 var(--syn-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  
`,ee=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.size="medium",this.removable=!1}handleRemoveClick(){this.emit("syn-remove")}render(){return m`
      <span
        part="base"
        class=${C({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?m`
              <syn-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></syn-icon-button>
            `:""}
      </span>
    `}};ee.styles=[z,Ar,$r];ee.dependencies={"syn-icon-button":Y};n([l({reflect:!0})],ee.prototype,"size",2);n([l({type:Boolean})],ee.prototype,"removable",2);ee=n([K("SynTag")],ee);var Or=_`
  :host {
    --arrow-color: var(--syn-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    isolation: isolate;
    max-height: var(--auto-size-available-height, none);
    max-width: var(--auto-size-available-width, none);
    position: absolute;

    :where(&) {
      background: unset;
      border: unset;
      color: unset;
      height: unset;
      inset: unset;
      margin: unset;
      overflow: unset;
      padding: unset;
      width: unset;
    }
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    background: var(--arrow-color);
    height: calc(var(--arrow-size-diagonal) * 2);
    position: absolute;
    rotate: 45deg;
    width: calc(var(--arrow-size-diagonal) * 2);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge {
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
    inset: 0;
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
  }

  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }
`;const de=Math.min,$t=Math.max,Wi=Math.round,Oi=Math.floor,Ut=t=>({x:t,y:t}),Er={left:"right",right:"left",bottom:"top",top:"bottom"};function Cs(t,e,i){return $t(t,de(e,i))}function Ne(t,e){return typeof t=="function"?t(e):t}function ce(t){return t.split("-")[0]}function Be(t){return t.split("-")[1]}function yn(t){return t==="x"?"y":"x"}function Us(t){return t==="y"?"height":"width"}function Jt(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function Hs(t){return yn(Jt(t))}function Tr(t,e,i){i===void 0&&(i=!1);const s=Be(t),o=Hs(t),a=Us(o);let r=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(r=ji(r)),[r,ji(r)]}function Ir(t){const e=ji(t);return[Ss(t),e,Ss(e)]}function Ss(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const So=["left","right"],zo=["right","left"],Lr=["top","bottom"],Dr=["bottom","top"];function Mr(t,e,i){switch(t){case"top":case"bottom":return i?e?zo:So:e?So:zo;case"left":case"right":return e?Lr:Dr;default:return[]}}function Fr(t,e,i,s){const o=Be(t);let a=Mr(ce(t),i==="start",s);return o&&(a=a.map(r=>r+"-"+o),e&&(a=a.concat(a.map(Ss)))),a}function ji(t){const e=ce(t);return Er[e]+t.slice(e.length)}function Pr(t){return{top:0,right:0,bottom:0,left:0,...t}}function bn(t){return typeof t!="number"?Pr(t):{top:t,right:t,bottom:t,left:t}}function Gi(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function $o(t,e,i){let{reference:s,floating:o}=t;const a=Jt(e),r=Hs(e),d=Us(r),c=ce(e),h=a==="y",u=s.x+s.width/2-o.width/2,p=s.y+s.height/2-o.height/2,b=s[d]/2-o[d]/2;let f;switch(c){case"top":f={x:u,y:s.y-o.height};break;case"bottom":f={x:u,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:p};break;case"left":f={x:s.x-o.width,y:p};break;default:f={x:s.x,y:s.y}}switch(Be(e)){case"start":f[r]-=b*(i&&h?-1:1);break;case"end":f[r]+=b*(i&&h?-1:1);break}return f}async function Vr(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:a,rects:r,elements:d,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:b=!1,padding:f=0}=Ne(e,t),x=bn(f),M=d[b?p==="floating"?"reference":"floating":p],T=Gi(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(M)))==null||i?M:M.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(d.floating)),boundary:h,rootBoundary:u,strategy:c})),B=p==="floating"?{x:s,y:o,width:r.floating.width,height:r.floating.height}:r.reference,H=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d.floating)),Q=await(a.isElement==null?void 0:a.isElement(H))?await(a.getScale==null?void 0:a.getScale(H))||{x:1,y:1}:{x:1,y:1},yt=Gi(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:B,offsetParent:H,strategy:c}):B);return{top:(T.top-yt.top+x.top)/Q.y,bottom:(yt.bottom-T.bottom+x.bottom)/Q.y,left:(T.left-yt.left+x.left)/Q.x,right:(yt.right-T.right+x.right)/Q.x}}const Rr=50,Nr=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:a=[],platform:r}=i,d=r.detectOverflow?r:{...r,detectOverflow:Vr},c=await(r.isRTL==null?void 0:r.isRTL(e));let h=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:p}=$o(h,s,c),b=s,f=0;const x={};for(let O=0;O<a.length;O++){const M=a[O];if(!M)continue;const{name:T,fn:B}=M,{x:H,y:Q,data:yt,reset:ct}=await B({x:u,y:p,initialPlacement:s,placement:b,strategy:o,middlewareData:x,rects:h,platform:d,elements:{reference:t,floating:e}});u=H??u,p=Q??p,x[T]={...x[T],...yt},ct&&f<Rr&&(f++,typeof ct=="object"&&(ct.placement&&(b=ct.placement),ct.rects&&(h=ct.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:o}):ct.rects),{x:u,y:p}=$o(h,b,c)),O=-1)}return{x:u,y:p,placement:b,strategy:o,middlewareData:x}},Br=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:a,platform:r,elements:d,middlewareData:c}=e,{element:h,padding:u=0}=Ne(t,e)||{};if(h==null)return{};const p=bn(u),b={x:i,y:s},f=Hs(o),x=Us(f),O=await r.getDimensions(h),M=f==="y",T=M?"top":"left",B=M?"bottom":"right",H=M?"clientHeight":"clientWidth",Q=a.reference[x]+a.reference[f]-b[f]-a.floating[x],yt=b[f]-a.reference[f],ct=await(r.getOffsetParent==null?void 0:r.getOffsetParent(h));let bt=ct?ct[H]:0;(!bt||!await(r.isElement==null?void 0:r.isElement(ct)))&&(bt=d.floating[H]||a.floating[x]);const Yt=Q/2-yt/2,Nt=bt/2-O[x]/2-1,Tt=de(p[T],Nt),ne=de(p[B],Nt),Bt=Tt,ae=bt-O[x]-ne,vt=bt/2-O[x]/2+Yt,me=Cs(Bt,vt,ae),Zt=!c.arrow&&Be(o)!=null&&vt!==me&&a.reference[x]/2-(vt<Bt?Tt:ne)-O[x]/2<0,Lt=Zt?vt<Bt?vt-Bt:vt-ae:0;return{[f]:b[f]+Lt,data:{[f]:me,centerOffset:vt-me-Lt,...Zt&&{alignmentOffset:Lt}},reset:Zt}}}),Ur=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:a,rects:r,initialPlacement:d,platform:c,elements:h}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:b,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:O=!0,...M}=Ne(t,e);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const T=ce(o),B=Jt(d),H=ce(d)===d,Q=await(c.isRTL==null?void 0:c.isRTL(h.floating)),yt=b||(H||!O?[ji(d)]:Ir(d)),ct=x!=="none";!b&&ct&&yt.push(...Fr(d,O,x,Q));const bt=[d,...yt],Yt=await c.detectOverflow(e,M),Nt=[];let Tt=((s=a.flip)==null?void 0:s.overflows)||[];if(u&&Nt.push(Yt[T]),p){const vt=Tr(o,r,Q);Nt.push(Yt[vt[0]],Yt[vt[1]])}if(Tt=[...Tt,{placement:o,overflows:Nt}],!Nt.every(vt=>vt<=0)){var ne,Bt;const vt=(((ne=a.flip)==null?void 0:ne.index)||0)+1,me=bt[vt];if(me&&(!(p==="alignment"?B!==Jt(me):!1)||Tt.every(Dt=>Jt(Dt.placement)===B?Dt.overflows[0]>0:!0)))return{data:{index:vt,overflows:Tt},reset:{placement:me}};let Zt=(Bt=Tt.filter(Lt=>Lt.overflows[0]<=0).sort((Lt,Dt)=>Lt.overflows[1]-Dt.overflows[1])[0])==null?void 0:Bt.placement;if(!Zt)switch(f){case"bestFit":{var ae;const Lt=(ae=Tt.filter(Dt=>{if(ct){const re=Jt(Dt.placement);return re===B||re==="y"}return!0}).map(Dt=>[Dt.placement,Dt.overflows.filter(re=>re>0).reduce((re,qn)=>re+qn,0)]).sort((Dt,re)=>Dt[1]-re[1])[0])==null?void 0:ae[0];Lt&&(Zt=Lt);break}case"initialPlacement":Zt=d;break}if(o!==Zt)return{reset:{placement:Zt}}}return{}}}},Hr=new Set(["left","top"]);async function qr(t,e){const{placement:i,platform:s,elements:o}=t,a=await(s.isRTL==null?void 0:s.isRTL(o.floating)),r=ce(i),d=Be(i),c=Jt(i)==="y",h=Hr.has(r)?-1:1,u=a&&c?-1:1,p=Ne(e,t);let{mainAxis:b,crossAxis:f,alignmentAxis:x}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return d&&typeof x=="number"&&(f=d==="end"?x*-1:x),c?{x:f*u,y:b*h}:{x:b*h,y:f*u}}const Wr=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:a,placement:r,middlewareData:d}=e,c=await qr(e,t);return r===((i=d.offset)==null?void 0:i.placement)&&(s=d.arrow)!=null&&s.alignmentOffset?{}:{x:o+c.x,y:a+c.y,data:{...c,placement:r}}}}},jr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o,platform:a}=e,{mainAxis:r=!0,crossAxis:d=!1,limiter:c={fn:T=>{let{x:B,y:H}=T;return{x:B,y:H}}},...h}=Ne(t,e),u={x:i,y:s},p=await a.detectOverflow(e,h),b=Jt(ce(o)),f=yn(b);let x=u[f],O=u[b];if(r){const T=f==="y"?"top":"left",B=f==="y"?"bottom":"right",H=x+p[T],Q=x-p[B];x=Cs(H,x,Q)}if(d){const T=b==="y"?"top":"left",B=b==="y"?"bottom":"right",H=O+p[T],Q=O-p[B];O=Cs(H,O,Q)}const M=c.fn({...e,[f]:x,[b]:O});return{...M,data:{x:M.x-i,y:M.y-s,enabled:{[f]:r,[b]:d}}}}}},Gr=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:a,platform:r,elements:d}=e,{apply:c=()=>{},...h}=Ne(t,e),u=await r.detectOverflow(e,h),p=ce(o),b=Be(o),f=Jt(o)==="y",{width:x,height:O}=a.floating;let M,T;p==="top"||p==="bottom"?(M=p,T=b===(await(r.isRTL==null?void 0:r.isRTL(d.floating))?"start":"end")?"left":"right"):(T=p,M=b==="end"?"top":"bottom");const B=O-u.top-u.bottom,H=x-u.left-u.right,Q=de(O-u[M],B),yt=de(x-u[T],H),ct=!e.middlewareData.shift;let bt=Q,Yt=yt;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(Yt=H),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(bt=B),ct&&!b){const Tt=$t(u.left,0),ne=$t(u.right,0),Bt=$t(u.top,0),ae=$t(u.bottom,0);f?Yt=x-2*(Tt!==0||ne!==0?Tt+ne:$t(u.left,u.right)):bt=O-2*(Bt!==0||ae!==0?Bt+ae:$t(u.top,u.bottom))}await c({...e,availableWidth:Yt,availableHeight:bt});const Nt=await r.getDimensions(d.floating);return x!==Nt.width||O!==Nt.height?{reset:{rects:!0}}:{}}}};function Ji(){return typeof window<"u"}function Ue(t){return gn(t)?(t.nodeName||"").toLowerCase():"#document"}function At(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Kt(t){var e;return(e=(gn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function gn(t){return Ji()?t instanceof Node||t instanceof At(t).Node:!1}function Ft(t){return Ji()?t instanceof Element||t instanceof At(t).Element:!1}function se(t){return Ji()?t instanceof HTMLElement||t instanceof At(t).HTMLElement:!1}function Ao(t){return!Ji()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof At(t).ShadowRoot}function _i(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=Pt(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&o!=="inline"&&o!=="contents"}function Kr(t){return/^(table|td|th)$/.test(Ue(t))}function ts(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Xr=/transform|translate|scale|rotate|perspective|filter/,Yr=/paint|layout|strict|content/,ye=t=>!!t&&t!=="none";let hs;function es(t){const e=Ft(t)?Pt(t):t;return ye(e.transform)||ye(e.translate)||ye(e.scale)||ye(e.rotate)||ye(e.perspective)||!qs()&&(ye(e.backdropFilter)||ye(e.filter))||Xr.test(e.willChange||"")||Yr.test(e.contain||"")}function Zr(t){let e=he(t);for(;se(e)&&!Me(e);){if(es(e))return e;if(ts(e))return null;e=he(e)}return null}function qs(){return hs==null&&(hs=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),hs}function Me(t){return/^(html|body|#document)$/.test(Ue(t))}function Pt(t){return At(t).getComputedStyle(t)}function is(t){return Ft(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function he(t){if(Ue(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ao(t)&&t.host||Kt(t);return Ao(e)?e.host:e}function vn(t){const e=he(t);return Me(e)?t.ownerDocument?t.ownerDocument.body:t.body:se(e)&&_i(e)?e:vn(e)}function pi(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=vn(t),a=o===((s=t.ownerDocument)==null?void 0:s.body),r=At(o);if(a){const d=zs(r);return e.concat(r,r.visualViewport||[],_i(o)?o:[],d&&i?pi(d):[])}else return e.concat(o,pi(o,[],i))}function zs(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _n(t){const e=Pt(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=se(t),a=o?t.offsetWidth:i,r=o?t.offsetHeight:s,d=Wi(i)!==a||Wi(s)!==r;return d&&(i=a,s=r),{width:i,height:s,$:d}}function Ws(t){return Ft(t)?t:t.contextElement}function Ie(t){const e=Ws(t);if(!se(e))return Ut(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:a}=_n(e);let r=(a?Wi(i.width):i.width)/s,d=(a?Wi(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!d||!Number.isFinite(d))&&(d=1),{x:r,y:d}}const Qr=Ut(0);function wn(t){const e=At(t);return!qs()||!e.visualViewport?Qr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jr(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==At(t)?!1:e}function xe(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),a=Ws(t);let r=Ut(1);e&&(s?Ft(s)&&(r=Ie(s)):r=Ie(t));const d=Jr(a,i,s)?wn(a):Ut(0);let c=(o.left+d.x)/r.x,h=(o.top+d.y)/r.y,u=o.width/r.x,p=o.height/r.y;if(a){const b=At(a),f=s&&Ft(s)?At(s):s;let x=b,O=zs(x);for(;O&&s&&f!==x;){const M=Ie(O),T=O.getBoundingClientRect(),B=Pt(O),H=T.left+(O.clientLeft+parseFloat(B.paddingLeft))*M.x,Q=T.top+(O.clientTop+parseFloat(B.paddingTop))*M.y;c*=M.x,h*=M.y,u*=M.x,p*=M.y,c+=H,h+=Q,x=At(O),O=zs(x)}}return Gi({width:u,height:p,x:c,y:h})}function ss(t,e){const i=is(t).scrollLeft;return e?e.left+i:xe(Kt(t)).left+i}function xn(t,e){const i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-ss(t,i),o=i.top+e.scrollTop;return{x:s,y:o}}function tl(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const a=o==="fixed",r=Kt(s),d=e?ts(e.floating):!1;if(s===r||d&&a)return i;let c={scrollLeft:0,scrollTop:0},h=Ut(1);const u=Ut(0),p=se(s);if((p||!p&&!a)&&((Ue(s)!=="body"||_i(r))&&(c=is(s)),p)){const f=xe(s);h=Ie(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}const b=r&&!p&&!a?xn(r,c):Ut(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+u.x+b.x,y:i.y*h.y-c.scrollTop*h.y+u.y+b.y}}function el(t){return Array.from(t.getClientRects())}function il(t){const e=Kt(t),i=is(t),s=t.ownerDocument.body,o=$t(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),a=$t(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let r=-i.scrollLeft+ss(t);const d=-i.scrollTop;return Pt(s).direction==="rtl"&&(r+=$t(e.clientWidth,s.clientWidth)-o),{width:o,height:a,x:r,y:d}}const Oo=25;function sl(t,e){const i=At(t),s=Kt(t),o=i.visualViewport;let a=s.clientWidth,r=s.clientHeight,d=0,c=0;if(o){a=o.width,r=o.height;const u=qs();(!u||u&&e==="fixed")&&(d=o.offsetLeft,c=o.offsetTop)}const h=ss(s);if(h<=0){const u=s.ownerDocument,p=u.body,b=getComputedStyle(p),f=u.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,x=Math.abs(s.clientWidth-p.clientWidth-f);x<=Oo&&(a-=x)}else h<=Oo&&(a+=h);return{width:a,height:r,x:d,y:c}}function ol(t,e){const i=xe(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,a=se(t)?Ie(t):Ut(1),r=t.clientWidth*a.x,d=t.clientHeight*a.y,c=o*a.x,h=s*a.y;return{width:r,height:d,x:c,y:h}}function Eo(t,e,i){let s;if(e==="viewport")s=sl(t,i);else if(e==="document")s=il(Kt(t));else if(Ft(e))s=ol(e,i);else{const o=wn(t);s={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Gi(s)}function kn(t,e){const i=he(t);return i===e||!Ft(i)||Me(i)?!1:Pt(i).position==="fixed"||kn(i,e)}function nl(t,e){const i=e.get(t);if(i)return i;let s=pi(t,[],!1).filter(d=>Ft(d)&&Ue(d)!=="body"),o=null;const a=Pt(t).position==="fixed";let r=a?he(t):t;for(;Ft(r)&&!Me(r);){const d=Pt(r),c=es(r);!c&&d.position==="fixed"&&(o=null),(a?!c&&!o:!c&&d.position==="static"&&!!o&&(o.position==="absolute"||o.position==="fixed")||_i(r)&&!c&&kn(t,r))?s=s.filter(u=>u!==r):o=d,r=he(r)}return e.set(t,s),s}function al(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const r=[...i==="clippingAncestors"?ts(e)?[]:nl(e,this._c):[].concat(i),s],d=Eo(e,r[0],o);let c=d.top,h=d.right,u=d.bottom,p=d.left;for(let b=1;b<r.length;b++){const f=Eo(e,r[b],o);c=$t(f.top,c),h=de(f.right,h),u=de(f.bottom,u),p=$t(f.left,p)}return{width:h-p,height:u-c,x:p,y:c}}function rl(t){const{width:e,height:i}=_n(t);return{width:e,height:i}}function ll(t,e,i){const s=se(e),o=Kt(e),a=i==="fixed",r=xe(t,!0,a,e);let d={scrollLeft:0,scrollTop:0};const c=Ut(0);function h(){c.x=ss(o)}if(s||!s&&!a)if((Ue(e)!=="body"||_i(o))&&(d=is(e)),s){const f=xe(e,!0,a,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else o&&h();a&&!s&&o&&h();const u=o&&!s&&!a?xn(o,d):Ut(0),p=r.left+d.scrollLeft-c.x-u.x,b=r.top+d.scrollTop-c.y-u.y;return{x:p,y:b,width:r.width,height:r.height}}function us(t){return Pt(t).position==="static"}function To(t,e){if(!se(t)||Pt(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return Kt(t)===i&&(i=i.ownerDocument.body),i}function Cn(t,e){const i=At(t);if(ts(t))return i;if(!se(t)){let o=he(t);for(;o&&!Me(o);){if(Ft(o)&&!us(o))return o;o=he(o)}return i}let s=To(t,e);for(;s&&Kr(s)&&us(s);)s=To(s,e);return s&&Me(s)&&us(s)&&!es(s)?i:s||Zr(t)||i}const dl=async function(t){const e=this.getOffsetParent||Cn,i=this.getDimensions,s=await i(t.floating);return{reference:ll(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function cl(t){return Pt(t).direction==="rtl"}const Di={convertOffsetParentRelativeRectToViewportRelativeRect:tl,getDocumentElement:Kt,getClippingRect:al,getOffsetParent:Cn,getElementRects:dl,getClientRects:el,getDimensions:rl,getScale:Ie,isElement:Ft,isRTL:cl};function Sn(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function hl(t,e){let i=null,s;const o=Kt(t);function a(){var d;clearTimeout(s),(d=i)==null||d.disconnect(),i=null}function r(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),a();const h=t.getBoundingClientRect(),{left:u,top:p,width:b,height:f}=h;if(d||e(),!b||!f)return;const x=Oi(p),O=Oi(o.clientWidth-(u+b)),M=Oi(o.clientHeight-(p+f)),T=Oi(u),H={rootMargin:-x+"px "+-O+"px "+-M+"px "+-T+"px",threshold:$t(0,de(1,c))||1};let Q=!0;function yt(ct){const bt=ct[0].intersectionRatio;if(bt!==c){if(!Q)return r();bt?r(!1,bt):s=setTimeout(()=>{r(!1,1e-7)},1e3)}bt===1&&!Sn(h,t.getBoundingClientRect())&&r(),Q=!1}try{i=new IntersectionObserver(yt,{...H,root:o.ownerDocument})}catch{i=new IntersectionObserver(yt,H)}i.observe(t)}return r(!0),a}function ul(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,h=Ws(t),u=o||a?[...h?pi(h):[],...e?pi(e):[]]:[];u.forEach(T=>{o&&T.addEventListener("scroll",i,{passive:!0}),a&&T.addEventListener("resize",i)});const p=h&&d?hl(h,i):null;let b=-1,f=null;r&&(f=new ResizeObserver(T=>{let[B]=T;B&&B.target===h&&f&&e&&(f.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var H;(H=f)==null||H.observe(e)})),i()}),h&&!c&&f.observe(h),e&&f.observe(e));let x,O=c?xe(t):null;c&&M();function M(){const T=xe(t);O&&!Sn(O,T)&&i(),O=T,x=requestAnimationFrame(M)}return i(),()=>{var T;u.forEach(B=>{o&&B.removeEventListener("scroll",i),a&&B.removeEventListener("resize",i)}),p?.(),(T=f)==null||T.disconnect(),f=null,c&&cancelAnimationFrame(x)}}const pl=Wr,ml=jr,fl=Ur,Io=Gr,yl=Br,bl=(t,e,i)=>{const s=new Map,o={platform:Di,...i},a={...o.platform,_c:s};return Nr(t,e,{...o,platform:a})};function gl(t){return vl(t)}function ps(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function vl(t){for(let e=t;e;e=ps(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ps(t);e;e=ps(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||es(i)||e.tagName==="BODY"))return e}return null}var Lo,$e=(Lo=globalThis?.HTMLElement)==null?void 0:Lo.prototype.hasOwnProperty("popover");function _l(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var N=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.active=!1,this.placement="top",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,a=0,r=0,d=0,c=0,h=0,u=0;i?t.top<e.top?(s=t.left,o=t.bottom,a=t.right,r=t.bottom,d=e.left,c=e.top,h=e.right,u=e.top):(s=e.left,o=e.bottom,a=e.right,r=e.bottom,d=t.left,c=t.top,h=t.right,u=t.top):t.left<e.left?(s=t.right,o=t.top,a=e.left,r=e.top,d=t.right,c=t.bottom,h=e.left,u=e.bottom):(s=e.right,o=e.top,a=t.left,r=t.top,d=e.right,c=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||_l(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){var t,e;!this.anchorEl||!this.active||($e&&((e=(t=this.popup).showPopover)==null||e.call(t)),this.cleanup=ul(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{var e,i;$e&&((i=(e=this.popup)==null?void 0:e.hidePopover)==null||i.call(e)),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[pl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Io({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(fl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ml({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Io({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(yl({element:this.arrowEl,padding:this.arrowPadding}));const e=$e?i=>Di.getOffsetParent(i,gl):Di.getOffsetParent;bl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:$e?"absolute":"fixed",platform:ue(it({},Di),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:a})=>{const r=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const c=o.arrow.x,h=o.arrow.y;let u="",p="",b="",f="";if(this.arrowPlacement==="start"){const x=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=r?x:"",f=r?"":x}else if(this.arrowPlacement==="end"){const x=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=r?"":x,f=r?x:"",b=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof c=="number"?`${c}px`:"",u=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:u,right:p,bottom:b,left:f,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${C({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        popover=${w($e?"manual":void 0)}
        class=${C({popup:!0,"popup--active":this.active,"popup--fixed":!$e,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};N.styles=[z,Or];n([y(".popup")],N.prototype,"popup",2);n([y(".popup__arrow")],N.prototype,"arrowEl",2);n([l()],N.prototype,"anchor",2);n([l({type:Boolean,reflect:!0})],N.prototype,"active",2);n([l({reflect:!0})],N.prototype,"placement",2);n([l({type:Number})],N.prototype,"distance",2);n([l({type:Number})],N.prototype,"skidding",2);n([l({type:Boolean})],N.prototype,"arrow",2);n([l({attribute:"arrow-placement"})],N.prototype,"arrowPlacement",2);n([l({attribute:"arrow-padding",type:Number})],N.prototype,"arrowPadding",2);n([l({type:Boolean})],N.prototype,"flip",2);n([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],N.prototype,"flipFallbackPlacements",2);n([l({attribute:"flip-fallback-strategy"})],N.prototype,"flipFallbackStrategy",2);n([l({type:Object})],N.prototype,"flipBoundary",2);n([l({attribute:"flip-padding",type:Number})],N.prototype,"flipPadding",2);n([l({type:Boolean})],N.prototype,"shift",2);n([l({type:Object})],N.prototype,"shiftBoundary",2);n([l({attribute:"shift-padding",type:Number})],N.prototype,"shiftPadding",2);n([l({attribute:"auto-size"})],N.prototype,"autoSize",2);n([l()],N.prototype,"sync",2);n([l({type:Object})],N.prototype,"autoSizeBoundary",2);n([l({attribute:"auto-size-padding",type:Number})],N.prototype,"autoSizePadding",2);n([l({attribute:"hover-bridge",type:Boolean})],N.prototype,"hoverBridge",2);var $=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Z(this,"help-text","label"),this.localize=new W(this),this.lastOptions=[],this.isInitialized=!1,this.isOptionRendererTriggered=!1,this.hasFocus=!1,this.isUserInput=!1,this.displayLabel="",this.selectedOptions=[],this.numberFilteredOptions=0,this.cachedOptions=[],this.valueHasChanged=!1,this.hideOptions=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.restricted=!1,this.multiple=!1,this.getOption=Cr,this.filter=(t,e)=>{var i;let s=t?.textContent||"";t instanceof ht&&(s=t.getTextLabel());const o=xo(s),a=xo(e);return o.includes(a)?!0:((i=t?.value)==null?void 0:i.toString())===e},this.delimiter=" ",this.maxOptionsVisible=3,this.getTag=t=>m`
    <syn-tag
      part="tag"
      exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
      size=${this.size}
      removable
      @syn-remove=${e=>this.handleTagRemove(e,t)}
    >
      ${t.getTextLabel()}
    </syn-tag>
  `,this.calculateTagMaxWidth=t=>{const e=t.at(0);if(!e||!this.tagContainer)return;const i=e.contentRect.width,s=this.tagContainer.getBoundingClientRect().width,o=Math.max(85,s+i-48);this.tagContainer.style.setProperty("--syn-select-tag-max-width",`${o}px`)},this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{if(t.target.closest(".combobox__clear")===null){if(t.key==="Escape"&&(this.open&&!this.closeWatcher?(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||(this.multiple?this.clearInputField():this.clearCombobox())),t.key==="Enter"){const s=this.getCurrentOption(),o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;if(!this.open&&!o){setTimeout(()=>{t.defaultPrevented||this.formControlController.submit()});return}if(!this.open||s&&s.disabled)return;if(s){this.isUserInput=!0,this.valueHasChanged=!0;const a=this.lastOptions?ze(this.lastOptions):[];this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.selectionChanged();const r=Array.isArray(this.value)?this.value:[this.value];this.updateComplete.then(()=>{this.isUserInput=!1}),Qe(a,r)||this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})}this.multiple||this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),this.open||this.show(),this.selectNextOption(t.key==="ArrowDown")),["Home","End"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),t.key==="Home"?this.displayInput.setSelectionRange(0,0):t.key==="End"&&this.displayInput.setSelectionRange(this.displayLabel.length,this.displayLabel.length))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?Array.isArray(t)||(t=typeof t=="string"?t.split(this.delimiter):[t].filter(oi)):t=Array.isArray(t)?t.join(this.delimiter):t,!Qe(this._value,t)&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver||(this.resizeObserver=new ResizeObserver(this.calculateTagMaxWidth)),this.resizeObserver.observe(this.displayInput))}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{var e,i,s;const o=t.some(r=>{if(!(r.target instanceof ht)||r.type!=="attributes"||r.attributeName!=="value")return!1;const d=r.target.getAttribute("value");return r.oldValue!==d&&!!d}),a=(this.restricted||this.multiple)&&t.some(r=>r.type!=="characterData"&&r.type!=="childList"?!1:this.selectedOptions.some(d=>d===r.target||d.contains(r.target)));o&&this.handleSlotContentChange(),a&&(this.multiple?this.readonly?this.displayLabel=this.selectedOptions.map(r=>r.getTextLabel()).join(", "):this.requestUpdate():this.displayLabel=(s=(i=(e=this.selectedOptions[0])==null?void 0:e.getTextLabel)==null?void 0:i.call(e))!=null?s:this.displayLabel)}),this.mutationObserver.observe(this,{attributeFilter:["value"],attributeOldValue:!0,attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(()=>{this.handleSlotContentChange()}),this.open=!1}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect(),(e=this.mutationObserver)==null||e.disconnect(),this.removeOpenListeners()}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}updated(t){var e;super.updated(t),t.has("multiple")&&(this.multiple?this.enableResizeObserver():(e=this.resizeObserver)==null||e.disconnect())}willUpdate(t){super.willUpdate(t);const e=this.defaultValue==null||this.defaultValue===""||Array.isArray(this.defaultValue)&&this.defaultValue.length===0;if(t.has("value")&&e&&this.value&&!this.isUserInput&&(this.multiple&&Array.isArray(this.value)?this.defaultValue=this.value.join(this.delimiter):this.defaultValue=this.value,this.valueHasChanged=!1),!this.isInitialized&&t.has("value")&&this.value!==void 0&&t.has("multiple")&&this.multiple&&!Array.isArray(this.defaultValue)){const i=this.valueHasChanged;this.value=typeof this.defaultValue=="string"?this.defaultValue.split(this.delimiter):[this.defaultValue].filter(oi),this.valueHasChanged=i}}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return m`<div @syn-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?Bs(i):i}
        </div>`}return e===this.maxOptionsVisible?m`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`:m``})}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(e,!1),this.selectionChanged(),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}handleComboboxMouseDown(t){const i=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="syn-icon-button");if(this.disabled||this.readonly||i)return;const s=()=>this.open?this.hide():this.show();t.preventDefault(),s().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(t){t.key!=="Tab"&&this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.clearCombobox()}clearInputField(){if(this.displayLabel!==""){const t=this.valueHasChanged;this.value=ze(this.selectedOptions),this.valueHasChanged=t,this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-input")})}}clearCombobox(){this.valueHasChanged=!0,this.value!==""&&(this.value="",this.displayLabel="",this.lastOptions=[],this.setSelectedOptions([]),this.selectionChanged(),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("syn-option"),s=this.lastOptions?ze(this.lastOptions):[];if(i&&!i.disabled){this.isUserInput=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.selectionChanged(),this.updateComplete.then(()=>{this.displayInput.focus({preventScroll:!0}),this.isUserInput=!1});const o=Array.isArray(this.value)?this.value:[this.value];Qe(s,o)||this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0}))}}selectNextOption(t){const e=this.getAllFilteredOptions();if(e.length===0)return;const i=this.getCurrentOption(),s=e.indexOf(i);let o=Math.max(0,s);if(t){const a=s+1;o=a>e.length-1?0:a}else{const a=s-1;o=a<0?e.length-1:a}this.setCurrentOption(e[o]),qi(this.getCurrentOption(),this.listbox,"vertical","auto")}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected;const i=this.cachedOptions.find(s=>s.id===t.id);i&&(i.selected=t.selected)}setSelectedOptions(t){const e=Array.isArray(t)?t:[t];!this.multiple&&e.length>1&&e.splice(1),this.getSlottedOptions().forEach(s=>{s.selected=e.some(o=>o.id===s.id)}),this.cachedOptions.forEach(s=>{s.selected=e.some(o=>o.id===s.id)})}getAllFilteredOptions(){return this.getSlottedOptions().filter(t=>!t.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(t=>t.current)}setCurrentOption(t){const e=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),e.forEach(i=>{i.current=!1,i.setAttribute("aria-selected","false")}),t&&(t.current=!0,t.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",t.id))}selectionChanged(){const t=this.getSlottedOptions();this.selectedOptions=t.filter(s=>s.selected),this.selectedOptions.length===0&&(this.displayLabel=Array.isArray(this.value)?this.value.join(", "):String(this.value));let e;const i=this.valueHasChanged;if(this.multiple){if(this.value=this.selectedOptions.map(s=>ks(s)),this.value.length===0&&this.selectedOptions.length!==0){this.valueHasChanged=i,this.resetToLastValidValue();return}}else{if(this.selectedOptions.length!==0)e=ks(this.selectedOptions[0]);else if(this.restricted&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==""&&!this.isUserInput){this.resetToLastValidValue(),this.valueHasChanged=i;return}this.value=e??this.displayLabel}this.valueHasChanged=i,this.lastOptions=[...this.selectedOptions],this.updateComplete.then(()=>{var s,o;let a=this.displayLabel;this.multiple&&this.readonly?a=this.selectedOptions.map(r=>r.getTextLabel()).join(", "):this.multiple&&!this.readonly?a="":a=(o=(s=this.selectedOptions[0])==null?void 0:s.getTextLabel())!=null?o:this.displayLabel,this.displayLabel=a,this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.displayLabel),this.open&&this.updateComplete.then(()=>{this.open=this.multiple||this.restricted||this.numberFilteredOptions>0})}handleDisplayInputValueChange(){this.createComboboxOptionsFromQuery(this.displayLabel)}handleDisabledChange(){this.disabled&&this.formControlController.setValidity(this.disabled),(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange()),this.selectionChanged()}handleDelimiterChange(){this.getSlottedOptions().forEach(t=>{t.delimiter=this.delimiter})}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}this.updateSelectedOptionFromValue()}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){if(this.numberFilteredOptions===0&&!this.restricted&&!this.multiple){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await nt(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=U(this,"combobox.show",{dir:this.localize.dir()});await G(this.popup.popup,i,s),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await nt(this);const{keyframes:t,options:e}=U(this,"combobox.hide",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,Promise.race([at(this,"syn-after-show"),at(this,"syn-error")])}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,at(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(t){var e;this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(s=>{const o=this.cachedOptions.find(c=>c.id===s.id)||s,a=this.getOption(o,t);let r=xr(a);r||(r=o);const d=!(this.filter(r,t)||t==="");r.hidden=d,s.replaceWith(r),d||(this.numberFilteredOptions+=1)}),(e=this.getSlottedOptGroups().filter(s=>{const a=wo(Array.from(s.children)).flat().some(r=>!r.hidden);return s.hidden=!a,a})[0])==null||e.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1})}async handleInput(){const t=this.displayInput.value;this.displayLabel=t;const e=this.lastOptions;if(this.isUserInput=!0,this.multiple||(this.selectedOptions=[]),this.multiple){const i=ze(this.selectedOptions);this.value=[...i,t]}else this.value=t;await this.updateComplete,this.isUserInput=!1,this.lastOptions=e,this.open=this.multiple||this.restricted||this.numberFilteredOptions>0,this.formControlController.updateValidity(),this.emit("syn-input")}isValidValue(t){return this.cachedOptions.some(i=>Co(t,i))}getOptionsFromValue(){const t=this.valueHasChanged?this.value:this.defaultValue;let e;return Array.isArray(t)?e=t:t===void 0||t==null?e=[]:this.multiple&&typeof t=="string"?e=t.split(this.delimiter):e=[t],e.map(i=>this.cachedOptions.find(s=>Co(i,s))).filter(i=>i!==void 0)}resetToLastValidValue(){var t,e,i,s;let o="",a=[];this.lastOptions.length!==0&&(a=ze(this.lastOptions),this.multiple||(o=this.lastOptions[0].getTextLabel()));const r=(s=(i=(e=(t=this.popup)==null?void 0:t.popup)==null?void 0:e.getAnimations)==null?void 0:i.call(e))!=null?s:[],d=r.length?Promise.all(r.map(h=>h.playState==="finished"?Promise.resolve():new Promise(u=>{h.addEventListener("finish",()=>u(),{once:!0})}))):Promise.resolve();this.hideOptions=!0,d.then(()=>{this.hideOptions=!1});const c=this.valueHasChanged;this.value=a,this.displayLabel=o,this.formControlController.updateValidity(),this.valueHasChanged=c}handleChange(){const t=this.selectedOptions.length!==0&&this.selectedOptions.length===this.getOptionsFromValue().length;let e;Array.isArray(this.value)?e=this.value:typeof this.value=="string"?e=this.value.split(this.delimiter):e=[this.value];const i=e.every(c=>this.isValidValue(c)),s=this.multiple&&t&&i;if(!this.multiple&&this.selectedOptions.length>0||s)return;const a=this.lastOptions?ze(this.lastOptions):[];if((this.restricted||this.multiple)&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==""){this.resetToLastValidValue();return}const r=this.getOptionsFromValue();this.setSelectedOptions(r),this.selectionChanged(),this.lastOptions=[...r],this.updateComplete.then(()=>{this.formControlController.updateValidity()});const d=Array.isArray(this.value)?this.value:[this.value];Qe(a,d)||this.emit("syn-change")}getSlottedOptions(){return this.defaultSlot?wo(_o(this.defaultSlot)).flat():[]}getSlottedOptGroups(){return wr(_o(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const t=this.getSlottedOptions(),e=this.getSlottedOptGroups();t.forEach((i,s)=>{i.id=i.id||`syn-combobox-option-${s}`}),e.forEach((i,s)=>{i.id=i.id||`syn-combobox-optgroup-${s}`}),this.cachedOptions=[...t]}updateSelectedOptionFromValue(){if(!this.isUserInput){const e=this.getOptionsFromValue();this.setSelectedOptions(e),this.selectionChanged()}let t="";this.multiple?t=this.displayLabel:t=Array.isArray(this.value)?this.value.join(", "):String(this.value),this.createComboboxOptionsFromQuery(t)}handleSlotContentChange(){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleSlotContentChange());return}this.handleDelimiterChange(),this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue();let t;Array.isArray(this.value)?t=this.value.length>0:typeof this.value=="string"?t=this.value.length>0:t=this.value!==void 0&&this.value!==null,this.hasFocus&&t&&!this.open&&this.show()}handleDefaultSlotChange(){this.isOptionRendererTriggered||this.handleSlotContentChange()}render(){var t;const e=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,o=this.helpText?!0:!!i;let a;Array.isArray(this.value)?a=this.value.length>0:typeof this.value=="string"?a=this.value.length>0:a=this.value!==void 0&&this.value!==null&&typeof this.value=="number";const r=this.clearable&&!this.disabled&&!this.readonly&&a,d=this.placeholder&&!a,c=this.multiple&&this.selectedOptions.length>0;return m`
      <div
        part="form-control"
        class=${C({"form-control":!0,"form-control--has-help-text":o,"form-control--has-label":s,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @click=${this.handleFormControlClick}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${C({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--multiple":this.multiple,"combobox--open":this.open,"combobox--placeholder-visible":d,"combobox--readonly":this.readonly,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--tags-visible":c,"combobox--top":this.placement==="top"})}
            placement=${`${this.placement}-start`}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="popup"
          >
            <div
              part="combobox"
              class="combobox__inputs"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="combobox__prefix"></slot>

              ${this.multiple&&!this.readonly?m`<div part="tags" class="combobox__tags">${this.tags}</div>`:""}

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .readOnly=${this.readonly}
                .value=${this.displayLabel}
                maxlength=${w(this.maxlength)}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}

                aria-autocomplete="list"
                aria-owns="listbox"
                @input=${this.handleInput}
                @change=${this.handleChange}
              />

              <input
                class="combobox__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):(t=this.value)==null?void 0:t.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${r?m`
                    <button
                      part="clear-button"
                      class="combobox__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.preventLoosingFocus}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:""}

                <slot name="suffix" part="suffix" class="combobox__suffix"></slot>

                <slot name="expand-icon" part="expand-icon" class="combobox__expand-icon">
                  <syn-icon library="system" name="chevron-down"></syn-icon>
                </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-labelledby="label"
              aria-multiselectable=${this.multiple?"true":"false"}
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">
                ${this.hideOptions||this.numberFilteredOptions===0?m`<span
                      class="listbox__no-results"
                      aria-hidden="true"
                      part="no-results"
                      >${this.localize.term("noResults")}</span
                    >`:""}
                <slot class=${C({options__hide:this.hideOptions})} @slotchange=${this.handleDefaultSlotChange}></slot>      
              </div>
            </div>
          </syn-popup>
        </div>
        
        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$.styles=[z,jt,kr];$.dependencies={"syn-icon":X,"syn-popup":N,"syn-tag":ee};n([y(".combobox")],$.prototype,"popup",2);n([y(".combobox__inputs")],$.prototype,"combobox",2);n([y(".combobox__display-input")],$.prototype,"displayInput",2);n([y(".combobox__value-input")],$.prototype,"valueInput",2);n([y(".combobox__listbox")],$.prototype,"listbox",2);n([y("slot:not([name])")],$.prototype,"defaultSlot",2);n([y(".combobox__tags")],$.prototype,"tagContainer",2);n([k()],$.prototype,"hasFocus",2);n([k()],$.prototype,"isUserInput",2);n([k()],$.prototype,"displayLabel",2);n([k()],$.prototype,"selectedOptions",2);n([k()],$.prototype,"numberFilteredOptions",2);n([k()],$.prototype,"cachedOptions",2);n([k()],$.prototype,"valueHasChanged",2);n([k()],$.prototype,"hideOptions",2);n([l()],$.prototype,"name",2);n([k()],$.prototype,"value",1);n([l({attribute:"value"})],$.prototype,"defaultValue",2);n([l({reflect:!0})],$.prototype,"size",2);n([l()],$.prototype,"placeholder",2);n([l({reflect:!0,type:Boolean})],$.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],$.prototype,"readonly",2);n([l({type:Boolean})],$.prototype,"clearable",2);n([l({reflect:!0,type:Boolean})],$.prototype,"open",2);n([l()],$.prototype,"label",2);n([l({type:Number})],$.prototype,"maxlength",2);n([l({reflect:!0})],$.prototype,"placement",2);n([l({attribute:"help-text"})],$.prototype,"helpText",2);n([l({reflect:!0})],$.prototype,"form",2);n([l({reflect:!0,type:Boolean})],$.prototype,"required",2);n([l({reflect:!0,type:Boolean})],$.prototype,"restricted",2);n([l({reflect:!0,type:Boolean})],$.prototype,"multiple",2);n([l()],$.prototype,"getOption",2);n([l()],$.prototype,"filter",2);n([l()],$.prototype,"delimiter",2);n([l({attribute:"max-options-visible",type:Number})],$.prototype,"maxOptionsVisible",2);n([l()],$.prototype,"getTag",2);n([v(["filter","getOption"],{waitUntilFirstUpdate:!0})],$.prototype,"handlePropertiesChange",1);n([v("displayLabel",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisplayInputValueChange",1);n([v(["disabled","readonly"],{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);n([v("delimiter")],$.prototype,"handleDelimiterChange",1);n([v(["defaultValue","value","delimiter","multiple","restricted"],{waitUntilFirstUpdate:!0})],$.prototype,"handleValueChange",1);n([v("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1);$=n([K("SynCombobox")],$);L("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});L("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});$.define("syn-combobox");var wl=_`
  :host {
    --size: 25rem;
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);

    display: contents;
  }

  .drawer {
    height: 100%;
    inset-inline-start: 0;
    overflow: hidden;
    pointer-events: none;
    top: 0;
    width: 100%;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--syn-z-index-drawer);
  }

  .drawer__panel {
    background-color: var(--syn-panel-background-color);
    border: 0 solid var(--syn-panel-border-color);
    color: var(--syn-color-neutral-950);
    display: flex;
    flex-direction: column;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
    pointer-events: all;
    position: absolute;
    z-index: 2;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    border-bottom-width: var(--syn-border-width-small);
    bottom: auto;
    height: var(--size);
    inset-inline: 0 auto;
    top: 0;
    width: 100%;
  }

  .drawer--end .drawer__panel {
    border-left-width: var(--syn-border-width-small);
    bottom: auto;
    height: 100%;
    inset-inline: auto 0;
    top: 0;
    width: var(--size);
  }

  .drawer--bottom .drawer__panel {
    border-top-width: var(--syn-border-width-small);
    bottom: 0;
    height: var(--size);
    inset-inline: 0 auto;
    top: auto;
    width: 100%;
  }

  .drawer--start .drawer__panel {
    border-right-width: var(--syn-border-width-small);
    bottom: auto;
    height: 100%;
    inset-inline: 0 auto;
    top: 0;
    width: var(--size);
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    font: var(--syn-heading-x-large);
    margin: 0;
    padding: var(--header-spacing);
  }

  .drawer__header-actions {
    align-items: flex-start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-font-size-x-large);
  }

  .drawer__body {
    display: block;
    flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--body-spacing);
  }

  .drawer__footer {
    padding: var(--footer-spacing);
    text-align: right;
  }

  .drawer__footer ::slotted(syn-button:not(:last-of-type)) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    background-color: var(--syn-overlay-background-color);
    display: block;
    inset: 0;
    pointer-events: all;
    position: fixed;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`;function Do(t){return t.charAt(0).toUpperCase()+t.slice(1)}var kt=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"footer"),this.localize=new W(this),this.modal=new mn(this),this.isVisible=!1,this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=this.isVisible?!1:!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),si(this)))}disconnectedCallback(){super.disconnectedCallback(),Te(this),this.removeOpenListeners()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=U(this,"drawer.denyClose",{dir:this.localize.dir()});G(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),si(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([nt(this.drawer),nt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,`drawer.show${Do(this.placement)}`,{dir:this.localize.dir()}),i=U(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([G(this.panel,e.keyframes,e.options),G(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{Vs(this),this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Te(this)),await Promise.all([nt(this.drawer),nt(this.overlay)]);const t=U(this,`drawer.hide${Do(this.placement)}`,{dir:this.localize.dir()}),e=U(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([G(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),G(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),si(this)),this.open&&this.contained&&(this.modal.deactivate(),Te(this))}async show(){if(!this.open)return this.open=!0,at(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,at(this,"syn-after-hide")}forceVisibility(t){this.isVisible=t,this.drawer.hidden=t?!1:!this.open}render(){return m`
      <div
        part="base"
        class=${C({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.isVisible||this.open?"false":"true"}
          aria-label=${w(this.noHeader?this.label:void 0)}
          aria-labelledby=${w(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":m`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></syn-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};kt.styles=[z,wl];kt.dependencies={"syn-icon-button":Y};n([k()],kt.prototype,"isVisible",2);n([y(".drawer")],kt.prototype,"drawer",2);n([y(".drawer__panel")],kt.prototype,"panel",2);n([y(".drawer__overlay")],kt.prototype,"overlay",2);n([l({type:Boolean,reflect:!0})],kt.prototype,"open",2);n([l({reflect:!0})],kt.prototype,"label",2);n([l({reflect:!0})],kt.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],kt.prototype,"contained",2);n([l({attribute:"no-header",type:Boolean,reflect:!0})],kt.prototype,"noHeader",2);n([v("open",{waitUntilFirstUpdate:!0})],kt.prototype,"handleOpenChange",1);n([v("contained",{waitUntilFirstUpdate:!0})],kt.prototype,"handleNoModalChange",1);L("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});L("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});L("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});L("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});L("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});L("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});L("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});L("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});L("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});L("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});L("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});kt.define("syn-drawer");var xl=_`
  :host {
    --color: var(--syn-panel-border-color);
    --width: var(--syn-panel-border-width);
    --spacing: var(--syn-spacing-medium);
  }

  :host(:not([vertical])) {
    border-top: solid var(--width) var(--color);
    display: block;
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    border-left: solid var(--width) var(--color);
    display: inline-block;
    height: 100%;
    margin: 0 var(--spacing);
  }
`,Xt=class extends S{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Xt.styles=[z,xl];n([l({type:Boolean,reflect:!0})],Xt.prototype,"vertical",2);n([v("vertical")],Xt.prototype,"handleVerticalChange",1);Xt.define("syn-divider");var zn=640,kl=_`
  :host {
    /*
     * The amount of items per row.
     * This is used to calculate the width of the items in the fieldset when not using stacked layout.
     * Defaults to 2.
     */
    --items-per-row: 2;

    /**
     * The gap between the fields in the fieldset.
     */
    --item-gap: var(--syn-spacing-large);

    display: block;
  }

  .fieldset {
    border: none;
    color: var(--syn-typography-color-text);
    margin: 0;
    padding: 0;
  }

  .legend {
    display: block;
    font: var(--syn-heading-large);
    margin-bottom: var(--syn-spacing-large);
    padding: 0;
    width: 100%;
  }

  .description {
    font: var(--syn-body-medium-regular);
    margin: 0 0 var(--syn-spacing-large);
  }

  .fieldset--has-description.fieldset--has-legend .legend {
    margin-bottom: var(--syn-spacing-medium);
  }

  .fields {
    align-items: start;
    container-type: inline-size;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    gap: var(--item-gap);
  }

  .fields ::slotted(*) {
    flex-basis: 100%;
  }

  @container (min-width: ${zn}px) {
    .fields--two-columns ::slotted(*) {
      flex-basis: calc((100% - (var(--item-gap) * (var(--items-per-row) - 1))) / var(--items-per-row));
    }
  }
`,Cl=t=>{const e=["button","fieldset","input","select","textarea","syn-button","syn-checkbox","syn-checkbox-group","syn-combobox","syn-dropdown","syn-fieldset","syn-file","syn-icon-button","syn-input","syn-radio-group","syn-radio","syn-range","syn-select","syn-switch","syn-textarea"].join(",");return Array.from(t.querySelectorAll(e))},Sl=t=>"disabled"in t,zl="syn-radio-group, syn-checkbox-group",$l=(t,e)=>t!=="two-columns"||e<zn?"vertical":"horizontal",Al=(t,e)=>{t.querySelectorAll(zl).forEach(s=>{s.layout!==e&&(s.layout=e)})},ke=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"description","legend"),this.forcedDisabledElements=new WeakSet,this.lightDomObserver=new MutationObserver(t=>{this.disabled&&this.syncDisabledState(),t.some(e=>e.type==="childList")&&this.scheduleGroupedControlLayoutSync()}),this.fieldContainerResizeObserver=new ResizeObserver(()=>{this.scheduleGroupedControlLayoutSync()}),this.groupedLayoutSyncAnimationFrame=null,this.handleSlotChange=()=>{this.disabled&&this.syncDisabledState(),this.scheduleGroupedControlLayoutSync()},this.description="",this.legend="",this.disabled=!1,this.disableAutoGroupLayout=!1,this.layout="one-column"}getFieldContainerWidth(){var t,e;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".fields");return(e=i?.getBoundingClientRect().width)!=null?e:0}syncGroupedControlLayouts(){if(this.disableAutoGroupLayout)return;const t=$l(this.layout,this.getFieldContainerWidth());Al(this,t)}scheduleGroupedControlLayoutSync(){this.groupedLayoutSyncAnimationFrame===null&&(this.groupedLayoutSyncAnimationFrame=requestAnimationFrame(()=>{this.groupedLayoutSyncAnimationFrame=null,this.syncGroupedControlLayouts()}))}syncDisabledState(){Array.from(Cl(this)).filter(Sl).forEach(t=>{this.disabled&&(t.disabled||(this.forcedDisabledElements.add(t),t.disabled=!0)),!this.disabled&&this.forcedDisabledElements.has(t)&&(t.disabled=!1)})}connectedCallback(){super.connectedCallback(),this.lightDomObserver.observe(this,{attributeFilter:["disabled"],attributes:!0,childList:!0,subtree:!0})}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".fields");e&&this.fieldContainerResizeObserver.observe(e),this.syncGroupedControlLayouts()}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.lightDomObserver)==null||t.disconnect(),(e=this.fieldContainerResizeObserver)==null||e.disconnect(),this.groupedLayoutSyncAnimationFrame!==null&&(cancelAnimationFrame(this.groupedLayoutSyncAnimationFrame),this.groupedLayoutSyncAnimationFrame=null)}updated(t){super.updated(t),t.has("disabled")&&this.syncDisabledState(),(t.has("layout")||t.has("disableAutoGroupLayout"))&&this.scheduleGroupedControlLayoutSync()}render(){const t=this.hasSlotController.test("legend")||this.legend.length>0,e=this.hasSlotController.test("description")||this.description.length>0;return m`
      <fieldset
        class=${C({fieldset:!0,"fieldset--has-description":e,"fieldset--has-legend":t})}
        ?disabled=${this.disabled}
        aria-describedby=${w(e?"description":void 0)}
        part="base"
      >
        ${t?m`
            <legend class="legend" part="legend">
              <slot name="legend">${this.legend}</slot>
            </legend>
          `:null}

        ${e?m`
            <div class="description" id="description" part="description">
              <slot name="description">${this.description}</slot>
            </div>
          `:null}

        <div
          class=${C({fields:!0,"fields--two-columns":this.layout==="two-columns"})}
          part="field-container"
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </fieldset>
    `}};ke.styles=[z,kl];n([l({reflect:!0,type:String})],ke.prototype,"description",2);n([l({reflect:!0,type:String})],ke.prototype,"legend",2);n([l({reflect:!0,type:Boolean})],ke.prototype,"disabled",2);n([l({attribute:"disable-auto-group-layout",reflect:!0,type:Boolean})],ke.prototype,"disableAutoGroupLayout",2);n([l({reflect:!0})],ke.prototype,"layout",2);ke.define("syn-fieldset");var Ol=_`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    border-radius: var(--syn-border-radius-medium);
    box-shadow: var(--syn-shadow-large);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(syn-menu) {
    max-height: var(--auto-size-available-height) !important;
    max-width: var(--auto-size-available-width) !important;
  }
`,gt=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="syn-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(s,o)=>{if(!s)return null;const a=s.closest(o);if(a)return a;const r=s.getRootNode();return r instanceof ShadowRoot?i(r.host,o):null};setTimeout(()=>{var s;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?un():document.activeElement;(!this.containingElement||i(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getContainingModalHost(){return this.closest("syn-dialog, syn-drawer")}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>pr(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,at(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,at(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t,e,i;this.panel.addEventListener("syn-select",this.handlePanelSelect),(e=(t=this.getContainingModalHost())==null?void 0:t.modal)==null||e.activateExternal(),"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t,e,i;this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),(e=(t=this.getContainingModalHost())==null?void 0:t.modal)==null||e.deactivateExternal(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(i=this.closeWatcher)==null||i.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await nt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=U(this,"dropdown.show",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await nt(this);const{keyframes:t,options:e}=U(this,"dropdown.hide",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return m`
      <syn-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${w(this.sync?this.sync:void 0)}
        class=${C({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </syn-popup>
    `}};gt.styles=[z,Ol];gt.dependencies={"syn-popup":N};n([y(".dropdown")],gt.prototype,"popup",2);n([y(".dropdown__trigger")],gt.prototype,"trigger",2);n([y(".dropdown__panel")],gt.prototype,"panel",2);n([l({type:Boolean,reflect:!0})],gt.prototype,"open",2);n([l({reflect:!0})],gt.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);n([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],gt.prototype,"stayOpenOnSelect",2);n([l({attribute:!1})],gt.prototype,"containingElement",2);n([l({type:Number})],gt.prototype,"distance",2);n([l({type:Number})],gt.prototype,"skidding",2);n([l({reflect:!0})],gt.prototype,"sync",2);n([v("open",{waitUntilFirstUpdate:!0})],gt.prototype,"handleOpenChange",1);L("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});L("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});gt.define("syn-dropdown");var El=_`
  :host {
    --sticky-position: 0;
    --metanavigation-item-size: var(--syn-font-size-x-large);

    display: block;
  }

  .header {
    background: var(--syn-panel-background-color);
    box-shadow: inset 0 -1px 0 0 var(--syn-header-border-color);
  }

  /**
   * The primary content area displays one to many slotted items
   * and contains the following items:
   * - side nav state icon (OPTIONAL)
   * - company or application logo
   * - application name
   * - meta-navigation
   */
  .header__content {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    min-height: 40px;
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
  }

  /**
   * The logo slot includes the application or company logo
   */
  .header__logo ::slotted(*),
  .header__logo syn-icon {
    display: block;
  }

  /**
   * Make sure to use the correct color and outline for links
   */
  .header__logo ::slotted(a),
  .header__logo ::slotted(a:hover) {
    color: var(--syn-logo-color);
  }

  .header__logo ::slotted(a:is(:focus-visible)) {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /**
   * Styles for the default logo. This makes sure the default SICK logo has the correct size and color
   */
  .header__logo syn-icon,
  .header__logo syn-icon::part(svg) {
    color: var(--syn-logo-color);
    height: 32px;
    width: auto;
  }

  /**
   * The label section hosts the application name
   */
  .header__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-large);
    padding: 0 var(--syn-spacing-2x-large);
    white-space: nowrap;
  }

  /**
   * The options menu holds an arbitrary list of <syn-icon-button />
   */
  .header__meta-navigation {
    display: flex;
    flex: 1;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
  }

  .header__meta-navigation ::slotted(*) {
    color: var(--syn-interactive-quiet-color);
    display: contents;
    font-size: var(--metanavigation-item-size);
  }

  /**
   * The horizontal top navigation section
   */
  .header__navigation {
    padding: 0 var(--syn-spacing-large);
  }

  /**
   * The burger menu icon styles
   */
  .header__burger-menu-toggle {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-interactive-quiet-color);
    cursor: pointer;
    display: flex;
    font-size: var(--syn-font-size-x-large);
    margin-right: calc(var(--syn-spacing-medium) + var(--syn-spacing-2x-small));
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .header__burger-menu-toggle:hover {
    color: var(--syn-interactive-quiet-color-hover);
  }

  .header__burger-menu-toggle:active {
    color: var(--syn-interactive-quiet-color-active);
  }

  .header__burger-menu-toggle:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /**
   * If the burger menu is provided, use a smaller spacing on the left side
   */
  .header--has-burger-menu .header__content {
    padding-left: var(--syn-spacing-medium);
  }

  /**
   * #529: Sticky header styles
   */
  :host([sticky]) {
    box-shadow: var(--syn-shadow-sticky-down);
    position: sticky;
    top: var(--sticky-position);

    /* Make sure the header is above all other content, but below any potential modals or overlays */
    z-index: calc(infinity - 1);
  }
`,oe=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new W(this),this.isSideNavAnimating=!1,this.label="",this.burgerMenu="hidden",this.sticky=!1}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant!=="default"?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}updateMetaNavigation(){const t=[];this.metaNavigationSlot.assignedElements({flatten:!0}).forEach(i=>{if(i.tagName.toLowerCase()==="syn-divider")t.push(i);else{const s=i.querySelectorAll(":scope > syn-divider");s.length&&t.push(...s)}});const e="--spacing: var(--syn-spacing-x-small); align-self: center; display: flex; height: var(--metanavigation-item-size);";t.filter(i=>i.hasAttribute("vertical")).forEach(i=>{i.style.cssText+=e})}handleBurgerMenu(){const t=`syn-burger-menu-${this.burgerMenu}`;this.emit(t)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{const t=document.querySelector("syn-side-nav");this.connectSideNavigation(t)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(t){if(this.mutationObserver.disconnect(),this.sideNav=t||document.querySelector("syn-side-nav"),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","variant"],attributes:!0});const e=s=>{s.target===this.sideNav&&(this.isSideNavAnimating=!0)},i=s=>{s.target===this.sideNav&&(this.isSideNavAnimating=!1)};this.sideNav.addEventListener("syn-show",e),this.sideNav.addEventListener("syn-hide",e),this.sideNav.addEventListener("syn-after-show",i),this.sideNav.addEventListener("syn-after-hide",i)}}render(){const t=this.hasSlotController.test("navigation"),e=this.burgerMenu!=="hidden";return ft`
      <header
        class=${C({header:!0,"header--has-burger-menu":e,"header--has-navigation":t})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${e?ft`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?ft`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:ft`
                          <slot name="closed-burger-menu-icon">
                            <syn-icon name="menu" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

          <div part="logo" class="header__logo">
            <slot name="logo">
              <syn-icon name="logo-color" library="system" label="SICK Sensor Intelligence"></syn-icon>
            </slot>
          </div>

          <div part="label" class="header__label">
            <slot name="label">
              ${this.label}
            </slot>
          </div>

          <div part="meta-navigation" class="header__meta-navigation">
            <slot @slotchange=${this.updateMetaNavigation} name="meta-navigation"></slot>
          </div>
        </div>
        <!-- /.header__content -->

        <div part="navigation" class="header__navigation">
          <slot name="navigation"></slot>
        </div>
      </header>
    `}};oe.styles=[z,El];oe.dependencies={"syn-icon":X};n([y('slot[name="meta-navigation"]')],oe.prototype,"metaNavigationSlot",2);n([l()],oe.prototype,"label",2);n([l({attribute:"burger-menu",reflect:!0})],oe.prototype,"burgerMenu",2);n([l({reflect:!0,type:Boolean})],oe.prototype,"sticky",2);n([k()],oe.prototype,"sideNav",2);n([v("burgerMenu",{waitUntilFirstUpdate:!0})],oe.prototype,"handleBurgerMenu",1);oe.define("syn-header");var Tl=_`
  :host {
    display: block;
  }

  .input__control {
    /**
     * Visually hide the input type=file without display:none
     * This is necessary for accessibility reasons and so the native html input validation popup 
     * is shown.
     */
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .form-control--droparea .input__control {
    /* move the input into the center, so the native validation popup is centered to the droparea */
    left: 50%;
  }

  .form-control-input {
    /* needed, so the native validation popup is centered correctly */
    position: relative;
  }

  /* Regular Input with button only */
  .button__wrapper {
    align-items: center;
    display: flex;
    gap: var(--syn-input-spacing-medium);
  }

  .form-control--small .button__wrapper {
    gap: var(--syn-input-spacing-small);
  }

  :host([size="large"]) .button__wrapper {
    gap: var(--syn-input-spacing-large);
  }

  /**
   * The value of the chosen file(s) or the placeholder text
   */
  .input__value {
    color: var(--syn-input-color);
    font-size: var(--syn-input-label-font-size-medium);
  }

  .input__value.input__value--hidden {
    display: none;
  }

  .input__value--placeholder {
    color: var(--syn-input-help-text-color);
  }

  .form-control--small .input__value {
    font-size: var(--syn-input-label-font-size-small);
  }

  .form-control--large .input__value {
    font-size: var(--syn-input-label-font-size-large);
  }

  /**
   * Special case for regular inputs:
   * When the user uses drag and drop, highlight the button with the primary color
   */
  .form-control--user-dragging:not([disabled]) .button::part(base) {
    background: none;
    border-color: var(--syn-interactive-emphasis-color-hover);
    color: var(--syn-interactive-emphasis-color-hover);
  }

  /* Drop Area */
  .droparea {
    --highlight-color: var(--syn-interactive-emphasis-color);

    border: var(--syn-input-border-width) dashed var(--syn-input-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    font: var(--syn-body-medium-regular);
    padding: var(--syn-spacing-x-large) var(--syn-spacing-large);
    transition: var(--syn-transition-medium) background;
  }

  .droparea:focus-visible {
    border: var(--syn-input-border-width) dashed var(--syn-interactive-emphasis-color);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Adjust the highlight to match an inactive item */
  :host([disabled]) .droparea {
    --highlight-color: var(--syn-color-neutral-600);
  }

  :host([disabled]) .input__value {
    display: none;
  }

  .droparea__background {
    align-items: center;
    display: flex;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-x-small) var(--syn-spacing-medium);
  }

  .droparea__icon {
    align-items: center;
    color: var(--highlight-color);
    display: flex;
    font-size: var(--syn-spacing-3x-large);
  }

  .droparea__text {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-3x-small);
    margin: 0;
  }

  .droparea__text strong {
    color: var(--highlight-color);
    font-weight: var(--syn-font-weight-bold);
  }

  /* Sizes */
  /* stylelint-disable-next-line no-descending-specificity */
  .form-control--small .droparea {
    font: var(--syn-body-small-regular);
  }

  .form-control--small .droparea__icon {
    font-size: var(--syn-spacing-2x-large)
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .form-control--large .droparea {
    font: var(--syn-body-large-regular);
  }

  .form-control--large .droparea__icon {
    font-size: var(--syn-spacing-4x-large)
  }

  /* #1173: Readonly Styles */
  :host([readonly]) .button::part(base) {
    background: var(--syn-readonly-background-color);
    color: var(--syn-readonly-indicator-color);
  }

  :host([readonly]) .droparea__text strong {
    color: var(--syn-readonly-color-text);
  }

  :host([readonly]) .droparea {
    --highlight-color: var(--syn-readonly-icon-color);

    background: var(--syn-readonly-background-color);
    border: var(--syn-input-border-width) solid var(--syn-readonly-background-color);
  }

  /* Disabled Styles */
  :host([disabled]) .droparea,
  :host([disabled]) .input__value {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  :host(:not([disabled]):not([readonly])) .form-control--user-dragging .droparea {
    background: var(--syn-color-primary-50);
    border: var(--syn-input-border-width) solid var(--syn-interactive-emphasis-color);
    cursor: pointer;
  }

  :host(:not([disabled]):not([readonly])) .droparea:not(:focus-visible):hover {
    --highlight-color: var(--syn-interactive-emphasis-color-hover);

    border: var(--syn-input-border-width) dashed var(--syn-input-border-color-hover);
    cursor: pointer;
  }

  /* Validation */
  /* stylelint-disable-next-line no-descending-specificity */
  :host([data-user-invalid]:not([disabled]):not([readonly])) .droparea {
    border: var(--syn-input-border-width) dashed var(--syn-input-focus-ring-error);
  }
`,R=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{assumeInteractionOn:["syn-change"],value:t=>t.files}),this.hasSlotController=new Z(this,"help-text","label"),this.localize=new W(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.readonly=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(t){this.input&&(this.input.files=t)}get files(){var t;return(t=this.input)==null?void 0:t.files}set value(t){this.input&&(this.input.value=t)}get value(){var t;return(t=this.input)==null?void 0:t.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){var e,i;if(this.droparea){(e=this.dropareaWrapper)==null||e.focus(t);return}(i=this.button)==null||i.focus(t)}blur(){var t,e;if(this.droparea){(t=this.dropareaWrapper)==null||t.blur();return}(e=this.button)==null||e.blur()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFiles(t){if(!t){this.value="";return}this.files=t}async handleTransferItems(t){if(!t)return this.value="",new Promise((r,d)=>{d(new Error("No proper items found"))});const i=Array.from(t).map(r=>r.webkitGetAsEntry()).map(r=>this.getFilesFromEntry(r)),o=(await Promise.all(i)).flat(),a=new DataTransfer;return Array.from(o).forEach(r=>a.items.add(r)),a.files}async getFilesFromEntry(t){return t?t.isFile?new Promise((e,i)=>{t.file(s=>e([s]),i)}):t.isDirectory?new Promise((e,i)=>{t.createReader().readEntries(o=>{Promise.all(o.map(a=>this.getFilesFromEntry(a))).then(a=>{e(a.flat())}).catch(i)})}):[]:[]}handleClick(t){t.preventDefault(),this.input.click()}handleChange(t){t.preventDefault(),t.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(t){t.preventDefault(),t.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!0)}handleDragLeave(t){t.preventDefault(),t.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!1)}async handleDrop(t){var e;if(t.preventDefault(),t.stopPropagation(),this.disabled||this.readonly||!t.dataTransfer)return;const i=await this.handleTransferItems((e=t.dataTransfer)==null?void 0:e.items);if(this.userIsDragging=!1,!i)return;if(!this.multiple&&!this.webkitdirectory&&i.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(i);else{const o=U(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),a=U(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const r=U(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});G(this.dropareaIcon,r.keyframes,r.options)}await G(this.inputChosen,o.keyframes,o.options),this.handleFiles(i),await G(this.inputChosen,a.keyframes,a.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){var t;let e=!1,i=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&((t=this.files)==null?void 0:t.length)>0&&(e=!0,i=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),m`
      <span
        class=${C({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${i}
      </span>
    `}renderDroparea(){return m`
      <div
        class="droparea"
        @click=${this.handleClick}
        @keypress=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        tabindex=${this.disabled?-1:0}
        part="droparea"
      >
        <div
          class="droparea__background"
          part="droparea-background"
        >
          <span part="droparea-icon" class="droparea__icon">
            <slot name="droparea-icon">
              <syn-icon name="upload-file" library="system" ></syn-icon>
            </slot>
          </span>
          <p
            class="droparea__text"
            part="droparea-value"
          >
            <strong>${this.localize.term(this.webkitdirectory?"folderDragDrop":"fileDragDrop")}</strong>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `}renderButton(){let t=this.localize.term("fileButtonText");return this.multiple&&(t=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(t=this.localize.term("folderButtonText")),m`
      <div
        class="button__wrapper"
        part="button-wrapper"
      >
        <syn-button
          class="button"
          @click=${this.handleClick}
          ?disabled=${this.disabled||this.readonly}
          exportparts="base:button__base"
          part="button"
          size=${this.size}
          variant="outline"
        >
          ${t}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){const t=this.label||!!this.hasSlotController.test("label"),e=this.helpText?!0:!!this.hasSlotController.test("help-text"),i=!!this.hasSlotController.test("trigger");return m`
      <div
        class=${C({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":e,"form-control--has-label":t,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${i?m`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:m`
              <label
                aria-hidden=${t?"false":"true"}
                class="form-control__label"
                for="input"
                part="form-control-label"
              >
                <slot name="label">${this.label}</slot>
              </label>

              <div
                class="form-control-input"
                part="form-control-input"
              >

                ${this.droparea?this.renderDroparea():this.renderButton()}
              </div>

              <div
                aria-hidden=${e?"false":"true"}
                class="form-control__help-text"
                id="help-text"
                part="form-control-help-text"
              >
                <slot name="help-text">${this.helpText}</slot>
              </div>
            `}
        <input
          accept=${this.accept}
          aria-describedby="help-text"
          @change=${this.handleChange}
          class="input__control"
          ?disabled=${this.disabled||this.readonly}
          id="input"
          @invalid=${this.handleInvalid}
          ?multiple=${this.multiple}
          name=${w(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}};R.styles=[z,jt,Tl];R.dependencies={"syn-button":V,"syn-icon":X};n([k()],R.prototype,"userIsDragging",2);n([l({type:Object})],R.prototype,"files",1);n([l({type:String})],R.prototype,"name",2);n([l({type:String})],R.prototype,"value",1);n([Re()],R.prototype,"defaultValue",2);n([l({reflect:!0})],R.prototype,"size",2);n([l()],R.prototype,"label",2);n([l({attribute:"help-text"})],R.prototype,"helpText",2);n([l({reflect:!0,type:Boolean})],R.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],R.prototype,"readonly",2);n([l({type:Boolean})],R.prototype,"droparea",2);n([l({type:String})],R.prototype,"accept",2);n([l({type:String})],R.prototype,"capture",2);n([l({reflect:!0,type:Boolean})],R.prototype,"multiple",2);n([l({reflect:!0,type:Boolean})],R.prototype,"webkitdirectory",2);n([l({reflect:!0})],R.prototype,"form",2);n([l({reflect:!0,type:Boolean})],R.prototype,"required",2);n([l({attribute:"hide-value",type:Boolean})],R.prototype,"hideValue",2);n([y(".input__control")],R.prototype,"input",2);n([y(".button")],R.prototype,"button",2);n([y(".droparea")],R.prototype,"dropareaWrapper",2);n([y(".droparea__icon")],R.prototype,"dropareaIcon",2);n([y(".input__value")],R.prototype,"inputChosen",2);n([v("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1);n([v("value",{waitUntilFirstUpdate:!0})],R.prototype,"handleValueChange",1);R=n([K("SynFile")],R);L("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});L("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});L("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});R.define("syn-file");X.define("syn-icon");var Il=_`
  /**
  * Fixes overflowing of the syn-input in flex and grid containers with fix width (https://github.com/synergy-design-system/synergy-design-system/issues/761)
  */
  .input__control {
    width: 100%;
  }

  /** #429: Use token for opacity */
  .input--standard.input--disabled,
  .input--readonly.input--disabled {
    opacity: var(--syn-input-disabled-opacity);
  }

  /**
  * Min-width size adjusted for each size so 2 full digits are shown for type number
  */ 
 
  :host([size="small"][type="number"]:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-small)*8.3);
  }

  :host([size="medium"][type="number"]:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-medium)*9.4);
  }

  :host([size="large"][type="number"]:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-large)*10);
  }

   /**
   * Clearable + Password Toggle
   */
   .input__clear {
    color: var(--syn-input-icon-icon-clearable-color);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    font-size: var(--syn-font-size-medium);
    padding-left: var(--syn-spacing-x-small);
    padding-right: var(--syn-spacing-small);
    width: auto;
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    font-size: var(--syn-font-size-x-large);
    padding-left: var(--syn-spacing-small);
    padding-right: var(--syn-spacing-medium);
    width: auto;
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    font-size: var(--syn-font-size-2x-large);
    padding-left: var(--syn-spacing-medium);
    padding-right: var(--syn-spacing-large);
    width: auto;
  }

  /* Prefix / Suffix color */
  .input__prefix ::slotted(*),
  .input__suffix ::slotted(*) {
    color: var(--syn-input-icon-color);
  }


  /* PADDINGS */
  .input--small .input__control {
    padding: var(--syn-spacing-3x-small) var(--syn-input-spacing-small);
  }

  .input--medium .input__control {
    padding: var(--syn-spacing-x-small) var(--syn-input-spacing-medium);
  }

  .input--large .input__control {
    padding: var(--syn-input-spacing-small) var(--syn-input-spacing-large);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-small) var(--syn-spacing-x-small);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-medium) var(--syn-input-spacing-small);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-large) var(--syn-input-spacing-medium);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline: var(--syn-spacing-x-small) var(--syn-input-spacing-small);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-small) var(--syn-input-spacing-medium);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-medium) var(--syn-input-spacing-large);
  }

  .input__clear + .input__suffix ::slotted(*),
  .input__password-toggle + .input__suffix ::slotted(*) {
    margin-inline-start: 0;  
  }

  .input--small .input__clear + .input__password-toggle {
    padding-left: var(--syn-spacing-2x-small);
  }

  .input--medium .input__clear + .input__password-toggle {
    padding-left: calc(var(--syn-spacing-2x-small) + var(--syn-spacing-3x-small));
  }

  .input--large .input__clear + .input__password-toggle {
    padding-left: var(--syn-spacing-x-small);
  }

  .input--small .input__clear:has(+ .input__password-toggle) {
    padding-right: var(--syn-spacing-2x-small);
  }

  .input--medium .input__clear:has(+ .input__password-toggle) {
    padding-right: calc(var(--syn-spacing-2x-small) + var(--syn-spacing-3x-small));
  }

  .input--large .input__clear:has(+ .input__password-toggle) {
    padding-right: var(--syn-spacing-x-small);
  }

  .form-control--has-suffix .input--large .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input--large .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--syn-spacing-medium);
  }

  .form-control--has-suffix .input--small .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input--small .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--syn-spacing-x-small);
  }

  .form-control--has-suffix .input--medium .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input--medium .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--syn-spacing-small);
  }

  /* Fixes wrong paddings on some suffix special cases: https://github.com/synergy-design-system/synergy-design-system/issues/817  */
  .form-control--has-prefix .input__control {
    padding-left: 0;
  }

  /* Fixes wrong paddings on some suffix special cases: https://github.com/synergy-design-system/synergy-design-system/issues/817  */
  .form-control--has-suffix .input__control,
  .input:has(.input__clear) .input__control,
  .input:has(.input__password-toggle) .input__control {
    padding-right: 0;
  }

  :host([type='number']) .input--large:not(.input--no-spin-buttons) .input__clear,
  :host([type='number']) .input--large:not(.input--no-spin-buttons) .input__password-toggle {
    padding-right: var(--syn-spacing-medium);
  }

  /* ICONS SIZE */
   .input--small .input__prefix ::slotted(syn-icon),
   .input--small .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
   }

  .input--medium .input__prefix ::slotted(syn-icon),
  .input--medium .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
   }

  .input--large .input__prefix ::slotted(syn-icon),
  .input--large .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
   }

  :host([data-user-invalid]) .input--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .input--standard.input--focused:not(.input--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  .input--standard.input--disabled .input__suffix, 
  .input--standard.input--disabled .input__prefix {
    cursor: not-allowed;
  } 


  /**
  * Number stepper
  */
  .input__number-stepper {
    align-items: center;
    display: flex;
  }

  .input--small .input__number-stepper {
    margin-left: var(--syn-spacing-2x-small);
  }

  .input--medium .input__number-stepper {
    margin-right: var(--syn-spacing-2x-small);
  }

  .input--large .input__number-stepper {
    margin-right: var(--syn-spacing-x-small);
  }


  /**
  * Number stepper buttons
  */
  .input__number-stepper-button {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-interactive-emphasis-color);
    cursor: pointer;
    display: flex;
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .input--small .input__number-stepper-button {
    font-size: var(--syn-font-size-medium);
  }

  .input--medium .input__number-stepper-button {
    font-size: var(--syn-font-size-x-large);
  }

  .input--large .input__number-stepper-button {
    font-size: var(--syn-font-size-2x-large);
  }

  .input__number-stepper-button:hover:not([disabled]) {
    color: var(--syn-interactive-emphasis-color-hover);
  }

  .input__number-stepper-button:active:not([disabled]) {
    color: var(--syn-interactive-emphasis-color-active);
  }

  .input__number-stepper-button[disabled] {
    color: var(--syn-color-neutral-400);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  /**
  * Number stepper divider
  */
  .input--small .input__number-divider {
    height: var(--syn-font-size-medium);
    margin: 0;
  }

  .input--medium .input__number-divider {
    height: var(--syn-font-size-x-large);
    margin: 0 var(--syn-spacing-2x-small);
  }

  .input--large .input__number-divider {
    height: var(--syn-font-size-2x-large);
    margin: 0 var(--syn-spacing-x-small);
  }
`,Ll=_`
	/* stylelint-disable */
  :host {
    display: block;

    --syn-input-autofill-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-background-color-hover) inset;
    --syn-input-autofill-readonly-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-readonly-background-color) inset;
    --syn-input-autofill-text-fill-color: var(--syn-color-primary-500);
    --syn-input-autofill-caret-color: var(--syn-input-color);
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--syn-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--syn-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly inputs */
  .input--readonly {
    border: none;
    background-color: var(--syn-input-readonly-background-color);
    color: var(--syn-input-color);
  }

  .input--readonly:hover:not(.input--disabled) {
    background-color: var(--syn-input-readonly-background-color-hover);
  }

  .input--readonly.input--focused:not(.input--disabled) {
    background-color: var(--syn-input-readonly-background-color-focus);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .input--readonly.input--disabled {
    background-color: var(--syn-input-readonly-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--syn-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: var(--syn-input-autofill-shadow) !important;
    -webkit-text-fill-color: var(--syn-input-autofill-text-fill-color);
    caret-color: var(--syn-input-autofill-caret-color);
  }

  .input--readonly .input__control:-webkit-autofill,
  .input--readonly .input__control:-webkit-autofill:hover,
  .input--readonly .input__control:-webkit-autofill:focus,
  .input--readonly .input__control:-webkit-autofill:active {
    box-shadow: var(--syn-input-autofill-readonly-shadow) !important;
  }

  .input__control::placeholder {
    color: var(--syn-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--syn-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(syn-icon),
  .input__suffix ::slotted(syn-icon) {
    color: var(--syn-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    height: var(--syn-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    height: var(--syn-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    height: var(--syn-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--syn-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--syn-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`,Dl=(t,e,i={})=>{var s;const o=i,{maximumFractionDigits:a,minimumFractionDigits:r}=o,d=Kn(o,["maximumFractionDigits","minimumFractionDigits"]),h=((s=(e==="any"||!e?1:+e).toString().split(".")[1])==null?void 0:s.length)||0;let u,p;const b=typeof r=="number",f=typeof a=="number";return b&&!f?(u=r,p=r):f&&!b?(u=a,p=a):b&&f&&(u=Math.min(r,a),p=Math.max(r,a)),h>(u||0)&&(u=h),h>(p||0)&&(p=h),typeof u<"u"&&u>100&&(u=100),typeof p<"u"&&p>100&&(p=100),new Intl.NumberFormat("en-US",it({maximumFractionDigits:p,minimumFractionDigits:u,useGrouping:!1},d)).format(t)};const ni=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),ni(s,e);return!0},Ki=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},$n=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Pl(e)}};function Ml(t){this._$AN!==void 0?(Ki(this),this._$AM=t,$n(this)):this._$AM=t}function Fl(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let a=i;a<s.length;a++)ni(s[a],!1),Ki(s[a]);else s!=null&&(ni(s,!1),Ki(s));else ni(this,t)}const Pl=t=>{t.type==Mt.CHILD&&(t._$AP??=Fl,t._$AQ??=Ml)};class An extends vi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),$n(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(ni(this,e),Ki(this))}setValue(e){if(rn(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}var Vl=class extends An{constructor(t){if(super(t),this.handlePointerDown=e=>{e.button!==0||this.host.disabled||this.spinOnLongPressCallback(e)},this.handlePointerUp=e=>{e?.preventDefault(),e?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},t.type!==Mt.ELEMENT||!(t.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(t){return q}update(t,[e]){return this.callbacks===void 0&&this.host===void 0&&(this.host=t.element,this.callbacks=it({},e),this.host.addEventListener("pointerdown",this.handlePointerDown)),St}reconnected(){this.host.addEventListener("pointerdown",this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(t){var e;t.preventDefault(),t.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),(e=this.observer)==null||e.disconnect(),this.observer=new MutationObserver(i=>{i.forEach(s=>{s.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){var t;clearInterval(this.interval),clearTimeout(this.timeout),(t=this.observer)==null||t.disconnect()}},Mo=Pe(Vl),Ct,Qt,Mi,Je,A=class extends S{constructor(){super(...arguments),_t(this,Qt),this.formControlController=new Wt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Z(this,"help-text","label","prefix","suffix"),this.localize=new W(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0,_t(this,Ct,ci)}set numericStrategy(t){switch(typeof t){case"string":J(this,Ct,t==="modern"?ci:Bi);break;case"object":J(this,Ct,wa(t));break;default:J(this,Ct,Bi)}}get numericStrategy(){return g(this,Ct)}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return parseFloat(this.value)<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return parseFloat(this.value)>=t}handleNumericStrategyAutoClamp(){const{valueAsNumber:t,max:e,min:i}=this;if(!g(this,Ct).autoClamp)return{eventObj:null,shouldClamp:!1,nextValue:t};const s=typeof i=="string"?parseFloat(i):i,o=typeof e=="string"?parseFloat(e):e;let a=t,r="";a<s?(a=s,r="min"):a>o&&(a=o,r="max");const d=r?{detail:{clampedTo:r,lastUserValue:t}}:null;return{eventObj:d,shouldClamp:!!d,nextValue:a}}handleChange(){if(this.type==="number"&&(I(this,Qt,Je).call(this)||g(this,Ct).autoClamp)){const{eventObj:t,shouldClamp:e,nextValue:i}=this.handleNumericStrategyAutoClamp();let s=g(this,Ct).autoClamp?i:this.valueAsNumber;if(isNaN(s)){const{max:o,min:a}=this;o!=null?s=typeof o=="string"?parseFloat(o):+o:a!=null?s=typeof a=="string"?parseFloat(a):+a:s=0}this.value=I(this,Qt,Je).call(this)?I(this,Qt,Mi).call(this,s):s.toString(),this.updateComplete.then(()=>{e&&t&&this.emit("syn-clamp",t),this.formControlController.updateValidity(),this.emit("syn-change")});return}this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){if(g(this,Ct).noStepAlign&&this.type==="number"){const{key:i}=t;if(i==="ArrowUp"||i==="ArrowDown"){t.preventDefault(),t.stopPropagation(),i==="ArrowUp"?this.handleStepUp():i==="ArrowDown"&&this.handleStepDown(),this.handleChange();return}}const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){g(this,Ct).noStepValidation||(this.input.step=String(this.step),this.formControlController.updateValidity())}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,o,a,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){if(g(this,Ct).noStepAlign){const{max:t,step:e,valueAsNumber:i}=this,s=Number.isNaN(i)?0:i,o=typeof this.min=="string"?parseFloat(this.min):this.min,a=typeof t=="string"?parseFloat(t):t,r=typeof e>"u"||e===null||e==="any"?1:typeof e=="number"?e:parseFloat(e);let d=s+r;typeof a=="number"&&a<d?d=a:typeof o=="number"&&o>d&&(d=o);const c=I(this,Qt,Je).call(this)?I(this,Qt,Mi).call(this,d):d.toString();this.input.value=c,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){if(g(this,Ct).noStepAlign){const{min:t,max:e,step:i,valueAsNumber:s}=this,o=Number.isNaN(s)?0:s,a=typeof t=="string"?parseFloat(t):t,r=typeof e=="string"?parseFloat(e):e,d=typeof i>"u"||i===null||i==="any"?1:typeof i=="number"?i:parseFloat(i);let c=o-d;typeof a=="number"&&a>c?c=a:typeof r=="number"&&r<c&&(c=r);const h=I(this,Qt,Je).call(this)?I(this,Qt,Mi).call(this,c):c.toString();this.input.value=h,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),o=this.label?!0:!!t,a=this.helpText?!0:!!e,d=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${C({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":a,"form-control--has-prefix":i,"form-control--has-suffix":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${C({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${w(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              min=${w(this.min)}
              max=${w(this.max)}
              step=${w(g(this,Ct).noStepValidation?"any":this.step)}
              .value=${ui(this.value)}
              autocapitalize=${w(this.autocapitalize)}
              autocomplete=${w(this.autocomplete)}
              autocorrect=${w(this.autocorrect?void 0:"off")}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${w(this.pattern)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${d?m`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <syn-icon name="x-circle-fill" library="system"></syn-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?m`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?m`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:m`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?m`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${Mo({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
                  tabindex="-1"
                >
                  <slot name="decrement-number-stepper">
                    <syn-icon name="indeterminate" library="system"></syn-icon>
                  </slot>
                </button>
                <syn-divider class="input__number-divider" part="divider" vertical></syn-divider>
                <button
                  part="increment-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isIncrementDisabled()}
                  aria-hidden="true"
                  ${Mo({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
                  tabindex="-1"
                >
                  <slot name="increment-number-stepper">
                    <syn-icon name="add" library="system"></syn-icon>
                  </slot>
                </button>
              </div>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ct=new WeakMap;Qt=new WeakSet;Mi=function(t){return Dl(t,this.step,it({maximumFractionDigits:this.maxFractionDigits,minimumFractionDigits:this.minFractionDigits},this.numberFormatterOptions))};Je=function(){var t;const{numberFormatterOptions:e,maxFractionDigits:i,minFractionDigits:s,step:o}=this,a=typeof i<"u"&&!Number.isNaN(i),r=typeof s<"u"&&!Number.isNaN(s);return a||r||typeof e=="object"?!0:(((t=(o==="any"||!o?1:+o).toString().split(".")[1])==null?void 0:t.length)||0)>0};A.styles=[z,jt,Ll,Il];A.dependencies={"syn-icon":X,"syn-divider":Xt};n([y(".input__control")],A.prototype,"input",2);n([k()],A.prototype,"hasFocus",2);n([l({reflect:!0})],A.prototype,"title",2);n([l({reflect:!0})],A.prototype,"type",2);n([l()],A.prototype,"name",2);n([l()],A.prototype,"value",2);n([Re()],A.prototype,"defaultValue",2);n([l({reflect:!0})],A.prototype,"size",2);n([l()],A.prototype,"label",2);n([l({attribute:"help-text"})],A.prototype,"helpText",2);n([l({type:Boolean})],A.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],A.prototype,"disabled",2);n([l()],A.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],A.prototype,"readonly",2);n([l({attribute:"password-toggle",type:Boolean})],A.prototype,"passwordToggle",2);n([l({attribute:"password-visible",type:Boolean})],A.prototype,"passwordVisible",2);n([l({attribute:"no-spin-buttons",type:Boolean})],A.prototype,"noSpinButtons",2);n([l({reflect:!0})],A.prototype,"form",2);n([l({type:Boolean,reflect:!0})],A.prototype,"required",2);n([l()],A.prototype,"pattern",2);n([l({type:Number})],A.prototype,"minlength",2);n([l({type:Number})],A.prototype,"maxlength",2);n([l()],A.prototype,"min",2);n([l()],A.prototype,"max",2);n([l()],A.prototype,"step",2);n([l()],A.prototype,"autocapitalize",2);n([l({attribute:"autocorrect",reflect:!0,converter:{fromAttribute:t=>t===""||t==="on",toAttribute:t=>t?"on":"off"},type:Boolean})],A.prototype,"autocorrect",2);n([l()],A.prototype,"autocomplete",2);n([l({type:Boolean})],A.prototype,"autofocus",2);n([l()],A.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],A.prototype,"spellcheck",2);n([l()],A.prototype,"inputmode",2);n([l({attribute:!1,reflect:!1,type:Object})],A.prototype,"numberFormatterOptions",2);n([l({attribute:"min-fraction-digits",type:Number})],A.prototype,"minFractionDigits",2);n([l({attribute:"max-fraction-digits",type:Number})],A.prototype,"maxFractionDigits",2);n([l({attribute:"numeric-strategy",converter:{fromAttribute:t=>t==="modern"?ci:Bi},type:Object})],A.prototype,"numericStrategy",1);n([v("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1);n([v("step",{waitUntilFirstUpdate:!0})],A.prototype,"handleStepChange",1);n([v("value",{waitUntilFirstUpdate:!0})],A.prototype,"handleValueChange",1);A=n([K("SynInput")],A);A.define("syn-input");Y.define("syn-icon-button");var Rl=_`
  /* stylelint-disable no-descending-specificity */
  :host {
    --submenu-offset: -2px;

    /* Custom override for hiding the checkmark in menus it is not needed */
    --display-checkmark: flex;

    /**
     * Default size settings for menu-item
     * This prepares the custom sizes that we will add later on
     * @see https://github.com/synergy-design-system/design/issues/277
     */
    --menuitem-inset-border-horizontal: var(--syn-spacing-2x-small);
    --menuitem-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --menuitem-min-height: var(--syn-input-height-medium);
    --menuitem-padding: var(--syn-input-spacing-medium);
    --menuitem-font-size: var(--syn-input-font-size-medium);
    --menuitem-icon-size: var(--syn-spacing-large);

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    align-items: center;

    /*
     * #1127: Brand2025 defines a small gap between options
     * and rounded corners. We achieve that using an border
     * that simulates the gap using the menu background color.
     */
    border: solid var(--syn-panel-background-color);

    /* Border Radius needs to be increased to cover the outline */
    border-radius: calc(var(--syn-focus-ring-border-radius) + var(--menuitem-inset-border-vertical));
    border-width: var(--menuitem-inset-border-horizontal) var(--menuitem-inset-border-vertical);
    color: var(--syn-option-color);
    cursor: pointer;
    display: flex;
    font-family: var(--syn-font-sans);
    font-size: var(--menuitem-font-size);
    font-weight: var(--syn-font-weight-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);

    /* Height is dependent on line-height of .option__label, which does not fit the layout completely */
    min-height: var(--menuitem-min-height, var(--syn-input-height-medium));
    padding: 0 calc(var(--menuitem-padding) - var(--menuitem-inset-border-vertical));
    position: relative;
    transition: var(--syn-transition-fast) fill;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
  }

  .menu-item.menu-item--disabled {
    cursor: not-allowed;

    /** #429: Use token for opacity */
    opacity: var(--syn-opacity-50);
    outline: none;
  }

  .menu-item.menu-item--loading {
    cursor: wait;
    outline: none;
  }

  .menu-item.menu-item--loading *:not(syn-spinner) {
    opacity: var(--syn-opacity-50);
  }

  .menu-item--loading syn-spinner {
    --indicator-color: currentColor;
    --track-width: 2px;

    color: var(--syn-interactive-emphasis-color);
    font-size: var(--syn-font-size-medium);
    left: calc(var(--menuitem-padding) - var(--menuitem-inset-border-vertical));
    opacity: 1;
    position: absolute;
    top: calc(50% - 0.5em);
  }

  .menu-item .menu-item__label {
    display: inline-block;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu-item .menu-item__prefix {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-small);
  }

  .menu-item .menu-item__suffix {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /**
   * Set the default font size to make icons appear correct
   */
  .menu-item .menu-item__prefix::slotted(syn-icon),
  .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color);
    font-size: var(--syn-font-size-x-large);
  }

  /**
   * #1194: Make sure hover is only done on non disabled items
   */
  :host(:hover) .menu-item:not(.menu-item--disabled) .menu-item__prefix::slotted(syn-icon),
  :host(:hover) .menu-item:not(.menu-item--disabled) .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-hover);
  }

  :host(:focus-visible) .menu-item .menu-item__prefix::slotted(syn-icon),
  :host(:focus-visible) .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-active);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
    content: '';
    inset: 0;
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true']):not(:focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--syn-option-background-color-hover);
    color: var(--syn-option-color-hover);
  }

  :host(:focus-visible) .menu-item {
    background-color: var(--syn-option-background-color-active);
    color: var(--syn-color-neutral-0);
    opacity: 1;
    outline: none;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    align-items: center;
    display: var(--display-checkmark);
    flex: 0 0 auto;
    font-size: var(--syn-font-size-x-large);
    justify-content: center;
    visibility: hidden;
    width: var(--syn-font-size-x-large);
  }

  .menu-item .menu-item__check {
    color: var(--syn-option-check-color);
    margin-inline-end: var(--syn-spacing-small);
  }

  /**
   * This makes sure the chevron does not take any space if we do not have children
   */
  .menu-item .menu-item__chevron {
    display: none;
    margin-inline-start: var(--syn-spacing-small);
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /**
   * Make sure to show the chevron if there are children
   */
  .menu-item--has-submenu .menu-item__chevron {
    display: flex;
  }

  /**
   * When in loading state, do not show the checkmark as it would bleed through
   */
  .menu-item--loading .menu-item__check {
    visibility: hidden;
  }

  /**
   * Make sure the checkbox is also visible when the item is active
   */
  :host(:focus-visible) .menu-item--checked .menu-item__check {
    color: var(--syn-option-check-color-active);
  }

  :host(:hover) .menu-item--checked:not(.menu-item--disabled) .menu-item__check {  
    color: var(--syn-option-check-color-hover);
  }

  /**
   * Special handling for the submenu chevron:
   * We are using the "chevron-down" icon per default as
   * we do not want all chevrons to be part of the bundle
   * Therefore, we have to transform it into the right direction
   */
  .menu-item .menu-item__chevron syn-icon {
    transform: rotate(-90deg);
  }

  .menu-item--rtl .menu-item__chevron syn-icon {
    transform: rotate(90deg);
  }

  /**
   * Highlight checked items
   */
  .menu-item--checked .menu-item__label {
    font-weight: var(--syn-font-weight-semibold);
  }

  /* Needed if we do not show the checkmark */
  :host(:not([type="checkmark"]):not([loading])) .menu-item__label {
    min-height: var(--syn-font-size-x-large);
  }

  /* Add elevation and z-index to submenus */
  syn-popup::part(popup) {
    /* #1131: Make sure that slotted menus do show the correct border radius */
    border-radius: var(--syn-input-border-radius-medium);
    box-shadow: var(--syn-shadow-large);
    margin-left: var(--submenu-offset);
    z-index: var(--syn-z-index-dropdown);
  }

  .menu-item--rtl syn-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  /**
   * #1009: Adjust the position for submenus when they are opened to the left, too.
   * This works because the data-current-placement attribute is set on the popup accordingly.
   * We do not use the actual placement attribute, because it does not update when the placement changes
   */
  syn-popup[data-current-placement^="left"]::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(syn-menu) {
    max-height: var(--auto-size-available-height) !important;
    max-width: var(--auto-size-available-width) !important;
  }
`;const On=()=>new Nl;class Nl{}const ms=new WeakMap,En=Pe(class extends An{render(t){return q}update(t,[e]){const i=e!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=ms.get(e);i===void 0&&(i=new WeakMap,ms.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?ms.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Bl=class{constructor(t,e){this.popupRef=On(),this.enableSubmenuTimer=-1,this.hasGlobalDismissListeners=!1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleHostMouseLeave=i=>{this.isWithinSubmenuInteractionTree(i.relatedTarget)||this.disableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="syn-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handleWindowBlur=()=>{this.disableSubmenu()},this.handlePageHide=()=>{this.disableSubmenu()},this.handleVisibilityChange=()=>{document.visibilityState==="hidden"&&this.disableSubmenu()},this.handleDocumentKeyDown=i=>{i.key==="Escape"&&this.isExpanded()&&(this.disableSubmenu(),i.stopPropagation())},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupMouseLeave=i=>{this.isWithinSubmenuInteractionTree(i.relatedTarget)||this.disableSubmenu()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i?.assignedElements({flatten:!0}).filter(h=>h.localName==="syn-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:a,top:r,width:d,height:c}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?a+d:a}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?a+d:a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("mouseleave",this.handleHostMouseLeave),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("mouseleave",this.handlePopupMouseLeave),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("mouseleave",this.handleHostMouseLeave),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("mouseleave",this.handlePopupMouseLeave),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1),this.removeGlobalDismissListeners()}addGlobalDismissListeners(){this.hasGlobalDismissListeners||(document.addEventListener("keydown",this.handleDocumentKeyDown),window.addEventListener("blur",this.handleWindowBlur),window.addEventListener("pagehide",this.handlePageHide),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.hasGlobalDismissListeners=!0)}removeGlobalDismissListeners(){this.hasGlobalDismissListeners&&(document.removeEventListener("keydown",this.handleDocumentKeyDown),window.removeEventListener("blur",this.handleWindowBlur),window.removeEventListener("pagehide",this.handlePageHide),document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.hasGlobalDismissListeners=!1)}isWithinSubmenuInteractionTree(t){var e;if(!(t instanceof Node))return!1;if(this.host.contains(t)||(e=this.popupRef.value)!=null&&e.contains(t))return!0;const i=t.getRootNode();return i instanceof ShadowRoot?this.isWithinSubmenuInteractionTree(i.host):!1}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("syn-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,t?this.addGlobalDismissListeners():this.removeGlobalDismissListeners(),this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,a)=>{var r;const d=(r=e.get(a))!=null?r:new CSSUnitValue(0,"px"),h=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return o-h.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?m`
      <syn-popup
        ${En(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </syn-popup>
    `:m` <slot name="submenu" hidden></slot> `}};function Ul(t,e){const i=it({waitUntilFirstUpdated:!1},e);return s=>{var o,a;return a=class extends s{constructor(){super(...arguments),_t(this,o,!i.waitUntilFirstUpdated)}updated(r){if(!g(this,o)){J(this,o,!0);return}const d=Array.from(r).filter(([h])=>t.includes(h));if(d.length===0){super.updated(r);return}const c=d.map(([h,u])=>({attribute:h,newValue:this[h],oldValue:u}));this.emit("syn-attributes-changed",{detail:c}),super.updated(r)}},o=new WeakMap,a}}var xt=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Z(this,"submenu"),this.submenuController=new Bl(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Rs(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return m`
      <div
        id="anchor"
        part="base"
        class=${C({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <syn-icon name="check" library="system" aria-hidden="true"></syn-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <syn-icon name="chevron-down" library="system" aria-hidden="true"></syn-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?m` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}};xt.styles=[z,Rl];xt.dependencies={"syn-icon":X,"syn-popup":N,"syn-spinner":Zi};n([y("slot:not([name])")],xt.prototype,"defaultSlot",2);n([y(".menu-item")],xt.prototype,"menuItem",2);n([l()],xt.prototype,"type",2);n([l({type:Boolean,reflect:!0})],xt.prototype,"checked",2);n([l()],xt.prototype,"value",2);n([l({type:Boolean,reflect:!0})],xt.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);n([v("checked")],xt.prototype,"handleCheckedChange",1);n([v("disabled")],xt.prototype,"handleDisabledChange",1);n([v("type")],xt.prototype,"handleTypeChange",1);xt=n([Ul(["type","loading"],{waitUntilFirstUpdated:!0})],xt);xt.define("syn-menu-item");var Hl=_`
  :host {
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    display: block;
    overflow: auto;
    overscroll-behavior: none;
    padding: var(--syn-spacing-x-small) 0;
    position: relative;
  }

  ::slotted(syn-divider) {
    /* #369: Slotted syn-dividers should use a lighter color so they do not crash with the border visually */
    --color: var(--syn-panel-border-color);
    --spacing: var(--syn-spacing-x-small);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  ::slotted(syn-menu-label:first-of-type) {
    --display-divider: none;
  }
`,wi=class extends S{constructor(){super(...arguments),this.hasMenuItemsWithCheckmarks=!1,this.checkmarkStyledItems=new Set,this.updateCheckMarksByChildPropChange=t=>{t.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}handleUpdateCheckmarks(t){this.hasMenuItemsWithCheckmarks=t.some(e=>e.type==="checkbox"||e.loading),this.syncCheckmarkVisibility(t)}syncCheckmarkVisibility(t){if(this.checkmarkStyledItems.forEach(e=>{t.includes(e)||(e.style.removeProperty("--display-checkmark"),this.checkmarkStyledItems.delete(e))}),this.hasMenuItemsWithCheckmarks){t.forEach(e=>{e.style.removeProperty("--display-checkmark"),this.checkmarkStyledItems.delete(e)});return}t.forEach(e=>{e.style.setProperty("--display-checkmark","none"),this.checkmarkStyledItems.add(e)})}disconnectedCallback(){this.removeEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange),this.checkmarkStyledItems.forEach(t=>t.style.removeProperty("--display-checkmark")),this.checkmarkStyledItems.clear()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}getMenuItemFromEvent(t){const e=t.composedPath(),i=e.find(o=>o instanceof HTMLElement&&this.isMenuItem(o));if(!(!i||!(i instanceof HTMLElement)||e.find(o=>o instanceof Element&&o.getAttribute("role")==="menu")!==this))return i}handleClick(t){const e=this.getMenuItemFromEvent(t);e&&(e.type==="checkbox"&&(e.checked=!e.checked),this.emit("syn-select",{detail:{item:e}}))}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=this.getMenuItemFromEvent(t);e&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();this.handleUpdateCheckmarks(t),t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getMenuItemsFromElement(t){return t.inert?[]:this.isMenuItem(t)?[t]:t.tagName.toLowerCase()==="syn-menu"?[]:[...t.children].flatMap(e=>this.getMenuItemsFromElement(e))}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].flatMap(t=>this.getMenuItemsFromElement(t))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};wi.styles=[z,Hl];n([y("slot")],wi.prototype,"defaultSlot",2);n([k()],wi.prototype,"hasMenuItemsWithCheckmarks",2);wi.define("syn-menu");var ql=_`
  :host {
    --display-divider: block;
  }

  .optgroup__divider {
    --spacing: var(--syn-spacing-x-small);

    display: var(--display-divider);
  }

  .optgroup__label-container {
    align-items: center;
    border: solid transparent;
    border-width: 0 var(--option-inset-border-vertical);
    box-sizing: border-box;
    color: var(--syn-input-color);
    display: flex;
    gap: var(--syn-spacing-small);
    min-height: var(--option-min-height, var(--syn-input-height-medium));
  }

  /**
   * Only show the label container when there is a label at all
   */
  .optgroup--has-prefix .optgroup__label-container,
  .optgroup--has-label .optgroup__label-container,
  .optgroup--has-suffix .optgroup__label-container {
    padding: 0 calc(var(--option-padding) - var(--option-inset-border-vertical));
  }

  /**
   * Format main label.
   * Make sure this works for props and slotted content
   */
  .optgroup__label-content,
  .optgroup__label::slotted(*) {
    flex: 1;
    font-family: var(--syn-font-sans);
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    font-weight: var(--syn-font-weight-semibold);
    line-height: var(--syn-line-height-normal);
  }

  /* Disabled Label */
  .optgroup--is-disabled .optgroup__label-container {
    opacity: var(--syn-input-disabled-opacity);
  }

  .optgroup__prefix,
  .optgroup__suffix {
    color: var(--syn-option-icon-color);
    font-size: var(--syn-spacing-large);
  }

  .optgroup__options ::slotted(syn-option[hidden]) {
    display: none;
  }
`,Fo=(t,e)=>{t.disabled?t.dataset.originallyDisabled="true":delete t.dataset.originallyDisabled,e&&(t.disabled=!0)},He=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:["disabled"],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(o=>o.target===this),i=t.filter(o=>o.target.matches("syn-option")),s=e.length>0||i.length>0;s&&this.mutationObserver.disconnect(),i.length>0&&i.forEach(o=>{Fo(o.target,this.disabled)}),e.length>0&&e.forEach(o=>{o.type==="attributes"&&this.assignedOptions.forEach(a=>{var r;a.disabled=this.disabled?!0:!!((r=a.dataset)!=null&&r.originallyDisabled)}),o.type==="childList"&&o.addedNodes.forEach(a=>{a instanceof HTMLElement&&a.matches("syn-option")&&Fo(a,this.disabled)})}),s&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){const{disabled:t}=this,e=this.hasSlotController.test("label"),i=this.label?!0:!!e;return ft`
      <div
        class=${C({optgroup:!0,"optgroup--has-label":i,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
        role="${t?"presentation":"group"}"
        part="base"
      >
        <syn-divider class="optgroup__divider" part="divider"></syn-divider>
        <div class="optgroup__label-container" part="label-container">
          <slot name="prefix" part="prefix" class="optgroup__prefix"></slot>
          <slot name="label" part="label" class="optgroup__label">
            <span class="optgroup__label-content">
              ${this.label}
            </span>
          </slot>
          <slot name="suffix" part="suffix" class="optgroup__suffix"></slot>
        </div>
        <div class="optgroup__options" role="group" part="options">
          <slot></slot>
        </div>
      </div>
    `}};He.styles=ql;He.dependencies={"syn-divider":Xt};n([Fe({selector:"syn-option"})],He.prototype,"assignedOptions",2);n([l({reflect:!0,type:Boolean})],He.prototype,"disabled",2);n([l()],He.prototype,"label",2);He.define("syn-optgroup");var Wl=_`
  /**
   * Default alignment is inline block when we are in horizontal mode
   */
  :host {
    /**
     * The indentation property defines the current "level" the component is on
     * It may be set per hand, but is normally set during the render phase
     * of a <syn-nav-item /> for slotted children
     */
    --indentation: 0;

    /**
     * Defines the amount of pixels each indentation level will shift the content to the left
     */
    --indentation-stepping: var(--syn-spacing-x-large);

    /**
     * Display property of the children. Defaults to "contents"
     */
    --display-children: contents;

    display: block;
  }

  /**
   * Switch alignment to inline-block when we are in horizontal mode
   */
  :host([horizontal]) {
    display: inline-block;
  }

  /**
   * Core nav item wrapper
   */
  .nav-item {
    align-items: center;
    background: transparent;
    border: none;
    box-shadow: inset 0 -1px 0 0 transparent;
    box-sizing: border-box;
    color: var(--syn-typography-color-text);
    cursor: pointer;
    display: inline-flex;
    font: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: background-color var(--syn-transition-fast) ease-in-out, box-shadow var(--syn-transition-fast) ease-in-out;
    width: 100%;
    z-index: 0;
  }

  .nav-item:focus-visible {
    outline: none;
  }

  .nav-item:focus-visible::after {
    content: '';
    display: block;
    height: 100%;
    left: calc(var(--syn-spacing-x-small) * -1);
    outline: var(--syn-focus-ring);
    outline-offset: -2px;
    position: absolute;
    top: 0;
    width: calc(100% + 2 * var(--syn-spacing-x-small));
  }

  .nav-item--vertical:focus-visible::after {
    left: 0;
    width: 100%;
  }

  /**
   * Horizontal nav items use narrower paddings
   */
  .nav-item--horizontal {
    padding: var(--syn-spacing-small) 0;
  }

  /**
   * Nav Items acting as accordion use a slightly narrower padding on the right side
   */
  .nav-item.nav-item-is-accordion {
    padding-right: var(--syn-spacing-medium);
  }

  .nav-item--disabled {
    cursor: not-allowed;
  }

  .nav-item--current {
    font-weight: var(--syn-font-weight-bold);
  }

  /**
   * Basic set up for the nav item prefix.
   */
  .nav-item:not(.nav-item--disabled)::before {
    background: var(--syn-interactive-background-color-hover);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /**
   * Hover effect for the nav item.
   * We use opacity to make sure the border-bottom is visible if used in the prio-nav in header
   */
  .nav-item:not(.nav-item--disabled):hover::before {
    opacity: 1;
  }

  /**
   * #443: Add support for active state
   */
  .nav-item:not(.nav-item--disabled):active::before {
    background: var(--syn-interactive-background-color-active);
    opacity: 1;
  }

  /**
   * When using horizontal, the background should extend the element
   * on the left and right so the animation for the indicator can be seen
   */
  .nav-item--horizontal:not(.nav-item--disabled)::before {
    left: calc(var(--syn-spacing-x-small) * -1);
    width: calc(100% + 2 * var(--syn-spacing-x-small));
  }

  /**
   * The content wrapper is needed to get the disabled state right
   * and also sets the left padding, according to the given indentation level.
   *
   * Normally, we would just use opacity directly on the button.
   * However, when using the divider prop, this leads to problems
   * as the divider itself will also get opaque.
   */
  .nav-item__content {
    align-items: center;
    display: flex;
    padding-inline-start: calc(var(--indentation) * var(--indentation-stepping));
    width: 100%;
  }

  .nav-item--disabled .nav-item__content {
    opacity: var(--syn-opacity-50);
  }

  /**
   * Slotted icons should use a default font size of large
   */
  .nav-item--has-prefix ::slotted(syn-icon),
  .nav-item--has-suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /**
   * The chevron indicates the use as a <details /> element OR a link
   */
  .nav-item__chevron {
    color: var(--syn-interactive-quiet-color);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-x-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .nav-item__chevron-open {
    rotate: -180deg;
  }

  /**
   * Items that have the chevron attribute set and are NOT accordions should always show a chevron pointing to the right
   */
  .nav-item:not(.nav-item-is-accordion) .nav-item__chevron {
    rotate: -90deg;
  }

  /**
   * Make the primary content container fill all available space
   */
  .nav-item__content-container {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /**
   * Horizontal navigation items should not break words
   */
  .nav-item--horizontal .nav-item__content-container {
    font-weight: var(--syn-font-weight-bold);
    white-space: nowrap;
  }

  /**
   * Show prefix only
   */
  /* stylelint-disable no-descending-specificity */
  .nav-item--show-prefix-only .nav-item__content-container,
  .nav-item--show-prefix-only .nav-item__suffix,
  .nav-item--show-prefix-only .nav-item__chevron {
    height: var(--syn-spacing-large);
  }
  /* stylelint-enable no-descending-specificity */

  /**
   * Adjust the paddings for the label, depending if there is a pre- and/or suffix available.
   * But only if the there is a main content or additionally a prefix / suffix
   */
  .nav-item--has-prefix.nav-item--has-content .nav-item__content-container,
  .nav-item--has-prefix.nav-item--has-suffix .nav-item__content-container {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .nav-item--has-suffix.nav-item--has-content .nav-item__content-container,
  .nav-item--has-suffix.nav-item--has-prefix .nav-item__content-container {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Multi line content
   */
  /* stylelint-disable no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix,
  .nav-item--multi-line .nav-item__prefix,
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }
  /* stylelint-enable no-descending-specificity */

  /* stylelint-disable no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix::slotted(syn-icon),
  :not(.nav-item--show-prefix-only).nav-item--multi-line .nav-item__prefix::slotted(syn-icon),
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }
  /* stylelint-enable no-descending-specificity */

  /**
   * The current indicator tells the user that the nav-item is the active one
   */
  .current-indicator {
    background: transparent;
    border: none;
    margin: 0;
    position: absolute;
    transition: var(--syn-transition-medium) top ease,
      var(--syn-transition-medium) right ease,
      var(--syn-transition-medium) bottom ease,
      var(--syn-transition-medium) left ease;
    z-index: 1;
  }

  .current-indicator--visible {
    background: var(--syn-interactive-emphasis-color);
  }

  .nav-item--horizontal .current-indicator {
    bottom: 0;
    height: var(--syn-spacing-2x-small);
    left: 0;
    right: 0;
  }

  .nav-item--horizontal:hover .current-indicator--visible,
  .nav-item--horizontal:focus-visible .current-indicator--visible {
    left: calc(var(--syn-spacing-x-small) * -1);
    right: calc(var(--syn-spacing-x-small) * -1);
  }

  .nav-item--vertical .current-indicator {
    bottom: var(--syn-spacing-x-small);
    left: 0;
    top: var(--syn-spacing-x-small);
    width: var(--syn-spacing-2x-small);
  }

  .nav-item--vertical:hover .current-indicator--visible,
  .nav-item--vertical:focus-visible .current-indicator--visible {
    bottom: 0;
    top: 0;
  }

  /**
   * Dividers are optionally displayed in horizontal nav items
   */
  .divider {
    left: var(--syn-spacing-medium);
    margin: 0;
    position: absolute;
    right: var(--syn-spacing-medium);
    top: 0;
  }

  /**
   * Make sure the divider blends into the background on hover
   * for items that are NOT disabled.
   */
  .nav-item--vertical:not(.nav-item--disabled):hover .divider {
    --color: var(--syn-interactive-background-color-hover);
  }

  /**
   * Sub menu styling
   */
  summary.nav-item {
    box-sizing: border-box;
    display: flex;
  }

  details summary::-webkit-details-marker {
    visibility: hidden;
  }

  .children {
    display: var(--display-children)
  }
`,et=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"[default]","children","prefix","suffix"),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.rel="noreferrer noopener",this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}isButton(){return!this.href&&!this.hasSlotController.test("children")}isLink(){return!!this.href&&!this.hasSlotController.test("children")}isAccordion(){return this.hasSlotController.test("children")}getNavItemChildren(t){return Array.from(t?.assignedElements({flatten:!0})||[]).map(e=>e.tagName.toLowerCase()==="syn-nav-item"?e:Array.from(e.querySelectorAll(":scope > syn-nav-item"))).flat()}getAllNestedNavItems(t){const e=this.getNavItemChildren(t),i=e.map(s=>s.getAllNestedNavItems(s.childrenSlot)).flat();return e.concat(i)}handleCurrentMarkedChild(){const t=this.closest("syn-side-nav");(!this.open||t?.variant==="rail")&&(this.currentMarkedChild=this.getAllNestedNavItems(this.childrenSlot).some(e=>e.current))}handleClickButton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}handleClickSummary(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit("syn-hide",{cancelable:!0})}showDetails(){this.open=!0,this.emit("syn-show",{cancelable:!0})}handleSlotChange(){const t=getComputedStyle(this);if(t.length===0){setTimeout(()=>{this.handleSlotChange()});return}this.handleCurrentMarkedChild();const i=t.getPropertyValue("--indentation"),s=Math.min(parseInt(i,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(o=>{o.style.setProperty("--indentation",s.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleWidth(t){t.forEach(e=>{requestAnimationFrame(()=>{if(e.contentRect.width<100){const i=this.hasSlotController.test("prefix");this.showPrefixOnly=i}else this.showPrefixOnly=!1;e.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})})}handleHorizontalChange(){this.horizontal?this.resizeObserver.disconnect():this.resizeObserver.observe(this)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleWidth(t)),this.horizontal||this.resizeObserver.observe(this)}firstUpdated(t){super.firstUpdated(t),this.mutationObserver=new MutationObserver(()=>{this.childrenSlot&&this.handleCurrentMarkedChild()}),this.mutationObserver.observe(this,{attributeFilter:["current","open"],childList:!0,subtree:!0})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect(),(e=this.mutationObserver)==null||e.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(t){this.control.focus(t)}render(){const t=this.isButton(),e=this.isLink(),i=this.isAccordion(),s=this.closest("syn-side-nav"),o=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&s?.variant==="rail"&&!s?.open;let a=_e`button`;i?a=_e`summary`:e&&(a=_e`a`);const r=(this.chevron||i)&&!this.horizontal;let d;i?d=this.handleClickSummary:t&&(d=this.handleClickButton);const c=ft`
      <${a}
        aria-controls=${w(i?"navigation-item-details":void 0)}
        aria-current=${w(this.current?"page":void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${C({"nav-item":!0,"nav-item--current":this.current||o,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test("[default]"),"nav-item--has-prefix":this.hasSlotController.test("prefix"),"nav-item--has-suffix":this.hasSlotController.test("suffix"),"nav-item--horizontal":this.horizontal,"nav-item--is-link":e,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":i})}
        @click=${d}
        ?disabled=${w(e?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${w(e?this.href:void 0)}
        part="base"
        role=${e?"link":"button"}
        rel=${w(e?this.rel:void 0)}
        tabindex=${this.disabled?"-1":"0"}
        target=${w(e?this.target:void 0)}
      >

        ${this.divider&&!this.horizontal?ft`<syn-divider class="divider" part="divider"></syn-divider>`:""}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${r?ft`
            <syn-icon
              class=${C({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:""}

          <div
            class=${C({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||o})}
            part="current-indicator"
          >
          </div>
        </div>

      </${a}>
    `;return i?ft`
      <details
        id="navigation-item-details"
        ?open=${this.open}
        part="details"
      >
        ${c}
        <slot
          class="children"
          name="children"
          part="children"
          @slotchange=${this.handleSlotChange}
        ></slot>
      </details>
    `:c}};et.styles=[z,Wl];et.dependencies={"syn-divider":Xt,"syn-icon":X};n([k()],et.prototype,"hasFocus",2);n([k()],et.prototype,"showPrefixOnly",2);n([k()],et.prototype,"currentMarkedChild",2);n([k()],et.prototype,"isMultiLine",2);n([y('slot[name="children"]')],et.prototype,"childrenSlot",2);n([y(".nav-item")],et.prototype,"control",2);n([l({reflect:!0,type:String})],et.prototype,"href",2);n([l()],et.prototype,"target",2);n([l()],et.prototype,"rel",2);n([l({reflect:!0,type:Boolean})],et.prototype,"current",2);n([l({reflect:!0,type:Boolean})],et.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],et.prototype,"horizontal",2);n([l({reflect:!0,type:Boolean})],et.prototype,"chevron",2);n([l({reflect:!0,type:Boolean})],et.prototype,"open",2);n([l({reflect:!0,type:Boolean})],et.prototype,"divider",2);n([v("horizontal",{waitUntilFirstUpdate:!0})],et.prototype,"handleHorizontalChange",1);var jl=et;et.define("syn-nav-item");var Gl=_`
  :host {
    --display-divider: block;

    display: block;
  }

  .menu-label__divider {
    --spacing: 0;

    display: var(--display-divider);
    margin-bottom: var(--syn-spacing-x-small);
  }

  .menu-label {
    color: var(--syn-input-color);
    display: inline-block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);

    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
  }
`,js=class extends S{render(){return m`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}};js.styles=[z,Gl];js.dependencies={"syn-divider":Xt};js.define("syn-menu-label");var Kl=[10,25,50,100],Ze=t=>Number.isSafeInteger(t)&&Number(t)>0,Po=t=>Number.isSafeInteger(t)&&Number(t)>=0,fs=(t,e,i,s)=>{const o=t.get(e);return s(o)?o:i},Tn=(t,e)=>{const i=Number.isFinite(t)&&t>0?t:0,s=Number.isFinite(e)&&e>0?e:1;return Math.ceil(i/s)},Xl=(t,e,i)=>{if(t<=0)return{endIndex:0,startIndex:0};const s=Tn(t,e),o=Math.min(Math.max(i,1),s),a=(o-1)*e+1;return{endIndex:Math.min(o*e,t),startIndex:a}},Ei=(t,e)=>{if(!Number.isFinite(t))return 1;const i=Number.isFinite(e)?Math.max(e,1):1;return Math.min(Math.max(t,1),i)},ti=(t,e)=>{const i=Number.isFinite(t)&&t>0?t:1,s=Number.isFinite(e)&&e>0?e:0;return Math.max(1,Math.ceil(s/i))},In=t=>{const i=(Array.isArray(t)?t:[]).map(s=>Number(s)).filter(s=>Number.isSafeInteger(s)&&s>0);return i.length>0?i:Kl},Yl=t=>In(t).reduce((e,i)=>Math.max(e,String(i).length),1),Zl=(t,e)=>String(ti(t,e)).length,Ql=_`
  :host {
    display: block;
  }

  .pagination {
    --base-font: var(--syn-body-medium-regular);
    --base-gap: var(--syn-spacing-small);
    --navigation-gap: var(--syn-spacing-small);
    --pagination-page-size-option-char-count: 2;
    --pagination-total-pages-char-count: 3;

    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font: var(--base-font);
    gap: var(--base-gap) var(--syn-spacing-large);
  }

  /* Sizes */
  :host([size="small"]) .pagination {
    --base-gap: var(--syn-spacing-x-small);
    --base-font: var(--syn-body-small-regular);
  }

  :host([size="large"]) .pagination {
    --base-gap: var(--syn-spacing-medium);
    --base-font: var(--syn-body-large-regular);
  }

  /* Divider */
  syn-divider {
    --divider-spacing: var(--syn-spacing-small); 
    --spacing: 0 auto var(--divider-spacing);
  }

  :host([size="small"]) syn-divider {
    --divider-spacing: var(--syn-spacing-x-small); 
  }

  :host([size="large"]) syn-divider {
    --divider-spacing: var(--syn-spacing-medium);
  }

  /* Select */
  .pagination__page-size-select-wrapper {
    align-items: center;
    display: flex;
    gap: var(--base-gap);
  }

  .pagination__page-size-select::part(form-control) {
    align-items: center;
    display: flex;
    gap: var(--base-gap);
  }

  .pagination__page-size-select::part(form-control-label) {
    font: var(--base-font);
    margin-bottom: 0;
  }

  .pagination__page-size-select::part(display-input) {
    width: calc((var(--pagination-page-size-option-char-count) * 1ch) + 1ch);
  }

  /* Navigation */
  .pagination__navigation {
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    gap: var(--navigation-gap);
    justify-content: end;
  }

  .pagination__navigation > section {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
  }

  .pagination__page-input {
    margin-inline-end: var(--navigation-gap);
  }

  .pagination__page-input::part(input) {
    text-align: center;
    width: calc((var(--pagination-total-pages-char-count) * 1ch) + 3ch);
  }

  /**
   * Make sure to hide the label of the page input, but keep it accessible for screen readers.
   * We can't use the label slot of syn-input for this, because it would mess with the layout.
   */
  .pagination__page-input::part(form-control-label) {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* Compact Version */
  :host([variant="compact"]) .pagination__navigation {
    justify-content: center;
  }

  /* Adjustments for really small container widths */
  @supports (container-type: inline-size) {
    :host {
      container-type: inline-size;
    }

    @container (max-width: 400px) {
      .pagination__navigation {
        justify-content: center;
      }
    }
  }
`,Jl=_`
  /* stylelint-disable property-no-vendor-prefix */
  /* stylelint-disable no-descending-specificity */
  :host {
    /* Size-dependent CSS custom properties - defaults to medium */
    --syn-select-input-border-radius: var(--syn-input-border-radius-medium);
    --syn-select-input-font-size: var(--syn-input-font-size-medium);
    --syn-select-input-height: var(--syn-input-height-medium);
    --syn-select-input-spacing: var(--syn-input-spacing-medium);
    --syn-select-clear-font-size: var(--syn-spacing-large);
    --syn-select-clear-margin: var(--syn-spacing-small);
    --syn-select-prefix-suffix-margin: var(--syn-input-spacing-small);
    --syn-select-icon-font-size: var(--syn-font-size-x-large);
    --syn-select-expand-icon-font-size: var(--syn-spacing-large);
    --syn-select-tags-gap: var(--syn-spacing-x-small);
    --syn-select-multiple-padding-block: 3px;
    --syn-select-multiple-prefix-margin: var(--syn-input-spacing-medium);

    display: block;
  }

  /** The popup */
  .select {
    display: inline-flex;
    flex: 1 1 auto;
    position: relative;
    vertical-align: middle;
    width: 100%;
  }

  .select::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    align-items: center;
    border-radius: var(--syn-select-input-border-radius);
    cursor: pointer;
    display: flex;
    flex: 1;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-select-input-font-size);
    font-weight: var(--syn-input-font-weight);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    min-height: var(--syn-select-input-height);
    min-width: 0;
    overflow: hidden;
    padding-block: 0;
    padding-inline: var(--syn-select-input-spacing);
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
  }

  .select__display-input {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: var(--syn-input-color);
    cursor: inherit;
    font: inherit;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
  }

  .select__display-input::placeholder {
    color: var(--syn-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--syn-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
  }

  .select--multiple.select--readonly:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: var(--syn-select-prefix-suffix-margin);
  }

  .select--multiple:not(.select--readonly):not(.select--placeholder-visible) .select__display-input {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /* #1177: Make sure that the values are copyable when using the readonly state */
  .select--multiple.select--readonly:not(.select--placeholder-visible) .select__display-input {
    flex: auto;
  }

  .select__value-input {
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .select__tags {
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: var(--syn-select-tags-gap);
    margin-inline-start: var(--syn-spacing-medium);
  }

  .select__tags::slotted(syn-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(syn-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    color: var(--syn-input-color-disabled);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
    outline: none;
  }

  /**
   * Invalid user data
   */
  :host([data-user-invalid]) .select__combobox {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .select--standard:not(.select--disabled).select--open .select__combobox,
  :host([data-user-invalid]) .select--standard:not(.select--disabled).select--focused .select__combobox {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  /* Change select border on hover */
  .select:not(.select--disabled):not(.select--readonly):hover .select__combobox {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Size variants */
  .select--small {
    --syn-select-input-border-radius: var(--syn-input-border-radius-small);
    --syn-select-input-font-size: var(--syn-input-font-size-small);
    --syn-select-input-height: var(--syn-input-height-small);
    --syn-select-input-spacing: var(--syn-input-spacing-small);
    --syn-select-clear-font-size: var(--syn-spacing-medium);
    --syn-select-clear-margin: var(--syn-input-spacing-small);
    --syn-select-prefix-suffix-margin: var(--syn-spacing-x-small);
    --syn-select-icon-font-size: var(--syn-font-size-medium);
    --syn-select-expand-icon-font-size: var(--syn-spacing-medium);
    --syn-select-tags-gap: var(--syn-spacing-2x-small);
    --syn-select-multiple-padding-block: 2px;
    --syn-select-multiple-prefix-margin: var(--syn-input-spacing-small);
  }

  .select--large {
    --syn-select-input-border-radius: var(--syn-input-border-radius-large);
    --syn-select-input-font-size: var(--syn-input-font-size-large);
    --syn-select-input-height: var(--syn-input-height-large);
    --syn-select-input-spacing: var(--syn-input-spacing-large);
    --syn-select-clear-font-size: var(--syn-spacing-x-large);
    --syn-select-clear-margin: var(--syn-input-spacing-large);
    --syn-select-prefix-suffix-margin: var(--syn-input-spacing-medium);
    --syn-select-icon-font-size: var(--syn-font-size-2x-large);
    --syn-select-expand-icon-font-size: var(--syn-spacing-x-large);
    --syn-select-tags-gap: var(--syn-spacing-small);
    --syn-select-multiple-padding-block: 4px;
    --syn-select-multiple-prefix-margin: var(--syn-input-spacing-large);
  }

  /* Multiple select specific styles */
  .select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-select-multiple-prefix-margin);
  }
 
  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    align-items: center;
    color: var(--syn-input-icon-color);
    display: inline-flex;
    flex: 0;
  }

  .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-select-prefix-suffix-margin);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-select-prefix-suffix-margin);
  }

  .select__suffix::slotted(syn-icon),
  .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-select-icon-font-size);
  }

  /* Clear button */
  .select__clear {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-input-icon-icon-clearable-color);
    cursor: pointer;
    display: inline-flex;
    font-size: var(--syn-select-clear-font-size);
    justify-content: center;
    margin-inline-start: var(--syn-select-clear-margin);
    padding: 0;
    transition: var(--syn-transition-fast) color;
  }

  .select__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-select-expand-icon-font-size);
    margin-inline-start: var(--syn-spacing-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    box-shadow: var(--syn-shadow-medium);
    display: block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    max-height: var(--auto-size-available-height); /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    overflow: auto;
    overscroll-behavior: none;
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    position: relative;
  }

  .select__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    color: var(--syn-color-neutral-500);
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .select--standard.select--readonly.select--focused .select__combobox {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .select__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }

  /**
   * #850: Allow to measure the size of the combobox.
   * This is needed so we can automatically size and truncate the tags in the <syn-select multiple> component.
   * Scoped to multiple to not break the single select per accident.
   * Scoped to when placeholder is not visible to not break the placeholder visualization
   */
  :host([multiple]) :not(.select--placeholder-visible) > .select__combobox > .select__tags {
    min-width: 100px;
    overflow: hidden;
  }

  :host([multiple]) .select__tags > div {
    display: contents;
  }

  :host([multiple]) .select__tags > div > syn-tag {
    --syn-tag-position-adjustment: var(--syn-spacing-3x-small);

    max-width: var(--syn-select-tag-max-width);
  }

  :host([multiple]) .select__tags > div > syn-tag::part(content) {
    display: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /**
   * #1177: Add support for readonly
   */
  .select--readonly .select__combobox {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
    cursor: default;
  }

  .select--readonly .select__expand-icon {
    color: var(--syn-readonly-icon-color-expand);
  }

  ${fn}
`,E=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Z(this,"help-text","label"),this.localize=new W(this),this.typeToSelectString="",this.isUserInput=!1,this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.delimiter=" ",this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>m`
      <syn-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        size=${this.size}
        removable
        @syn-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </syn-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,s=e.closest("syn-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.isUserInput=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),a=o.indexOf(this.currentOption);let r=Math.max(0,a);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(r=a+1,r>o.length-1&&(r=0)):t.key==="ArrowUp"?(r=a-1,r<0&&(r=o.length-1)):t.key==="Home"?r=0:t.key==="End"&&(r=o.length-1),this.setCurrentOption(o[r])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const a of o)if(a.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}getContainingModalHost(){return this.closest("syn-dialog, syn-drawer")}get value(){return this._value}set value(t){this.multiple?Array.isArray(t)||(t=typeof t=="string"?t.split(this.delimiter):[t].filter(oi)):t=Array.isArray(t)?t.join(this.delimiter):t,!Qe(this._value,t)&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&!this.readonly&&this.tagContainer&&(this.resizeObserver=new ResizeObserver(t=>{const e=t.at(0);this.tagContainer.style.setProperty("--syn-select-tag-max-width",`${e.contentRect.width}px`)}),this.resizeObserver.observe(this.tagContainer))}connectedCallback(){super.connectedCallback(),this.selectedOptionObserver=new MutationObserver(()=>{var t,e,i;this.multiple?this.readonly?this.displayLabel=this.selectedOptions.map(s=>s.getTextLabel()).join(", "):this.requestUpdate():this.displayLabel=(i=(e=(t=this.selectedOptions[0])==null?void 0:t.getTextLabel)==null?void 0:e.call(t))!=null?i:""}),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect(),(e=this.selectedOptionObserver)==null||e.disconnect()}observeSelectedOptions(){var t;(t=this.selectedOptionObserver)==null||t.disconnect(),this.selectedOptions.forEach(e=>{this.selectedOptionObserver.observe(e,{childList:!0,characterData:!0,subtree:!0})})}addOpenListeners(){var t,e,i;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),(e=(t=this.getContainingModalHost())==null?void 0:t.modal)==null||e.activateExternal(),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t,e,i;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=(t=this.getContainingModalHost())==null?void 0:t.modal)==null||e.deactivateExternal(),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(i=this.closeWatcher)==null||i.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="syn-icon-button");this.disabled||this.readonly||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("syn-option"),s=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.isUserInput=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("syn-option")||customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue;this.handleDelimiterChange();const i=Array.isArray(e)?e:typeof e=="string"?e.split(this.delimiter):[e].filter(oi),s=[];t.forEach(r=>s.push(r.value));const o=i.map(String),a=t.filter(r=>o.includes(String(r.value)));this.setSelectedOptions(a)}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(a=>a.selected),this.observeSelectedOptions();const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(a=>a.value),this.readonly?this.displayLabel=this.selectedOptions.map(a=>a.getTextLabel()).join(", "):this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.value=(t=a?.value)!=null?t:"",this.displayLabel=(i=(e=a?.getTextLabel)==null?void 0:e.call(a))!=null?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.isUserInput=!1,this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return m`<div @syn-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?Bs(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return m`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`;return m``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDelimiterChange(){this.getAllOptions().forEach(t=>{t.delimiter=this.delimiter})}handleDisabledChange(){(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange())}updated(t){var e;super.updated(t),(t.has("multiple")||t.has("readonly"))&&((e=this.resizeObserver)==null||e.disconnect(),this.multiple&&!this.readonly&&this.enableResizeObserver())}willUpdate(t){super.willUpdate(t),t.has("value")&&!this.defaultValue&&this.value&&!this.isUserInput&&(this.defaultValue=this.value,this.valueHasChanged=!1)}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}const t=this.getAllOptions(),i=(Array.isArray(this.value)?this.value:[this.value]).map(String),s=t.filter(o=>i.includes(String(o.value)));this.setSelectedOptions(s)}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await nt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=U(this,"select.show",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.currentOption&&qi(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await nt(this);const{keyframes:t,options:e}=U(this,"select.hide",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,at(this,"syn-after-show")}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,at(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){var t;const e=oi(this.value),i=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),o=this.label?!0:!!i,a=this.helpText?!0:!!s,r=this.clearable&&!this.disabled&&!this.readonly&&e,d=this.placeholder&&this.value&&!e;return m`
      <div
        part="form-control"
        class=${C({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":a})}
        @click=${this.handleFormControlClick}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${C({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--readonly":this.readonly,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":d,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement+"-start"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="popup"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple&&!this.readonly?m`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):(t=this.value)==null?void 0:t.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?m`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <syn-icon library="system" name="chevron-down"></syn-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </syn-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};E.styles=[z,jt,Jl];E.dependencies={"syn-icon":X,"syn-popup":N,"syn-tag":ee};n([y(".select")],E.prototype,"popup",2);n([y(".select__combobox")],E.prototype,"combobox",2);n([y(".select__display-input")],E.prototype,"displayInput",2);n([y(".select__value-input")],E.prototype,"valueInput",2);n([y(".select__listbox")],E.prototype,"listbox",2);n([y(".select__tags")],E.prototype,"tagContainer",2);n([k()],E.prototype,"hasFocus",2);n([k()],E.prototype,"displayLabel",2);n([k()],E.prototype,"currentOption",2);n([k()],E.prototype,"selectedOptions",2);n([k()],E.prototype,"valueHasChanged",2);n([l()],E.prototype,"delimiter",2);n([l()],E.prototype,"name",2);n([k()],E.prototype,"value",1);n([l({attribute:"value"})],E.prototype,"defaultValue",2);n([l({reflect:!0})],E.prototype,"size",2);n([l()],E.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],E.prototype,"multiple",2);n([l({attribute:"max-options-visible",type:Number})],E.prototype,"maxOptionsVisible",2);n([l({type:Boolean,reflect:!0})],E.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],E.prototype,"readonly",2);n([l({type:Boolean})],E.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],E.prototype,"open",2);n([l()],E.prototype,"label",2);n([l({reflect:!0})],E.prototype,"placement",2);n([l({attribute:"help-text"})],E.prototype,"helpText",2);n([l({reflect:!0})],E.prototype,"form",2);n([l({type:Boolean,reflect:!0})],E.prototype,"required",2);n([l()],E.prototype,"getTag",2);n([v("delimiter")],E.prototype,"handleDelimiterChange",1);n([v(["disabled","readonly"],{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);n([v(["defaultValue","value","delimiter"],{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1);n([v("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);E=n([K("SynSelect")],E);L("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});L("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var rt=class extends S{constructor(){super(...arguments),this.baseRef=On(),this.localize=new W(this),this.divider=!1,this.disabled=!1,this.size="medium",this.currentPage=1,this.pageSize=25,this.pageSizeOptions=[10,25,50,100],this.totalItems=0,this.variant="full",this.ariaLabel="Pagination"}pageChangedViaUserInput(t){const e=t.target.valueAsNumber;Ze(e)&&this.updateCurrentPage(e)}navigationClicked(t,e){var i;(i=t.currentTarget)==null||i.blur(),this.updateCurrentPage(e)}sanitizeInvalidPropertyValues(t){if(t.has("pageSize")&&!Ze(this.pageSize)&&(this.pageSize=fs(t,"pageSize",rt.DEFAULT_PAGE_SIZE,Ze)),t.has("currentPage")&&!Ze(this.currentPage)&&(this.currentPage=fs(t,"currentPage",rt.DEFAULT_CURRENT_PAGE,Ze)),t.has("totalItems")&&!Po(this.totalItems)&&(this.totalItems=fs(t,"totalItems",rt.DEFAULT_TOTAL_ITEMS,Po)),t.has("pageSizeOptions")){const e=In(this.pageSizeOptions);(this.pageSizeOptions.length!==e.length||this.pageSizeOptions.some((s,o)=>s!==e[o]))&&(this.pageSizeOptions=e)}}updateCurrentPage(t){const e=ti(this.pageSize,this.totalItems),i=Ei(t,e),{currentPage:s}=this;i!==s&&(this.emit("syn-pagination-page-changed",{detail:{currentPage:i,previousPage:s}}),this.currentPage=i)}pageSizeChanged(t){const{currentPage:e,pageSize:i}=this,s=t.target,{value:o}=s,a=parseInt(o,10);if(!Number.isSafeInteger(a)||a<=0)return;const r=(e-1)*i+1,d=ti(a,this.totalItems),c=Ei(Math.floor((r-1)/a)+1,d);this.pageSize=a,this.currentPage=c,this.emit("syn-pagination-page-size-changed",{detail:{currentPageSize:a,previousPageSize:i}}),c!==e&&this.emit("syn-pagination-page-changed",{detail:{currentPage:c,previousPage:e}})}willUpdate(t){super.willUpdate(t),this.sanitizeInvalidPropertyValues(t);const e=t.get("pageSizeOptions");if(Array.isArray(e)&&!this.pageSizeOptions.includes(this.pageSize)){const s=this.pageSizeOptions[0],o=(this.currentPage-1)*this.pageSize+1,a=ti(s,this.totalItems),r=Ei(Math.floor((o-1)/s)+1,a);this.pageSize=s,this.currentPage=r}if(t.has("currentPage")||t.has("pageSize")||t.has("totalItems")){const s=ti(this.pageSize,this.totalItems),o=Ei(this.currentPage,s);o!==this.currentPage&&(this.currentPage=o)}}updated(t){if(super.updated(t),t.has("pageSizeOptions")||t.has("pageSize")||t.has("totalItems")){const e=Yl(this.pageSizeOptions),i=Zl(this.pageSize,this.totalItems),s=this.baseRef.value;s&&(s.style.setProperty("--pagination-page-size-option-char-count",String(e)),s.style.setProperty("--pagination-total-pages-char-count",String(i)))}}render(){const t=Tn(this.totalItems,this.pageSize),e=this.variant==="compact",i=this.disabled||t===0,s=Xl(this.totalItems,this.pageSize,this.currentPage),o=this.pageSizeOptions.includes(this.pageSize)?this.pageSize:this.pageSizeOptions[0],a=this.currentPage===1,r=this.currentPage===t;return m`
      ${this.divider?m`<syn-divider part="divider"></syn-divider>`:q}
      <nav
        aria-label=${this.ariaLabel}
        class="pagination"
        part="base"
        ${En(this.baseRef)}
      >
        ${e?q:m`
          <div class="pagination__page-size-select-wrapper" part="page-size-select-wrapper">
            <syn-select
              class="pagination__page-size-select"
              ?disabled=${i}
              label=${this.localize.term("paginationItemsPerPage")}
              part="page-size-select"
              value=${o}
              size=${this.size}
              @syn-change=${this.pageSizeChanged}
            >
              ${this.pageSizeOptions.map(d=>m`
                <syn-option value="${d}">
                  ${d}
                </syn-option>
              `)}
            </syn-select>
            <!-- /.pagination__page-size-select -->

            <span part="page-item-summary">
              ${this.localize.term("paginationItemSummary",s.startIndex,s.endIndex,this.totalItems)}
            </span>
            <!-- /.pagination__page-item-summary -->
          </div>
          <!-- /.pagination__page-size-select-wrapper -->
        `}

        <div class="pagination__navigation" part="navigation">
          <section>
            <syn-icon-button
              @click=${d=>this.navigationClicked(d,1)}
              color="primary"
              ?disabled=${a||i}
              label=${this.localize.term("paginationFirstPage")}
              library="system"
              name="first-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${d=>this.navigationClicked(d,this.currentPage-1)}
              color="primary"
              ?disabled=${a||i}
              label=${this.localize.term("paginationPreviousPage")}
              library="system"
              name="previous-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>

          <section part="page-input-section">
            <syn-input
              class="pagination__page-input"
              ?disabled=${i}
              label=${this.localize.term("paginationInputLabel")}
              max=${t}
              min="1"
              no-spin-buttons
              numeric-strategy="modern"
              part="page-input"
              size=${this.size}
              @syn-change=${this.pageChangedViaUserInput}
              type="number"
              value=${this.currentPage}
            ></syn-input>
            
            <span>${this.localize.term("paginationOfTotalPages",t)}</span>
          </section>

          <section>
            <syn-icon-button
              @click=${d=>this.navigationClicked(d,this.currentPage+1)}
              color="primary"
              ?disabled=${r||i}
              label=${this.localize.term("paginationNextPage")}
              library="system"
              name="next-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${d=>this.navigationClicked(d,t)}
              color="primary"
              ?disabled=${r||i}
              label=${this.localize.term("paginationLastPage")}
              library="system"
              name="last-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>
        </div>
        <!-- /.pagination__navigation -->
      </nav>
    `}};rt.DEFAULT_PAGE_SIZE=25;rt.DEFAULT_CURRENT_PAGE=1;rt.DEFAULT_TOTAL_ITEMS=0;rt.styles=[z,Ql];rt.dependencies={"syn-divider":Xt,"syn-icon-button":Y,"syn-input":A,"syn-option":ht,"syn-select":E};n([l({type:Boolean})],rt.prototype,"divider",2);n([l({reflect:!0,type:Boolean})],rt.prototype,"disabled",2);n([l({reflect:!0})],rt.prototype,"size",2);n([l({attribute:"current-page",reflect:!0,type:Number})],rt.prototype,"currentPage",2);n([l({attribute:"page-size",reflect:!0,type:Number})],rt.prototype,"pageSize",2);n([l({attribute:"page-size-options",converter:{fromAttribute:t=>t.split(",").map(e=>{const i=parseInt(e.trim(),10);return Number.isSafeInteger(i)?i:null}).filter(Boolean)},type:Array})],rt.prototype,"pageSizeOptions",2);n([l({attribute:"total-items",reflect:!0,type:Number})],rt.prototype,"totalItems",2);n([l({attribute:"variant",reflect:!0})],rt.prototype,"variant",2);n([l({attribute:"aria-label"})],rt.prototype,"ariaLabel",2);rt=n([K("SynPagination")],rt);rt.define("syn-pagination");ht.define("syn-option");var td=_`
  :host {
    display: block;

    /**
     * Needed because the positioning of the priority menu is absolute
     */
    position: relative !important;
  }

  .horizontal-nav {
    display: flex;
    flex: 1;
    gap: var(--syn-spacing-large);
  }

  /**
   * Priority Menu adjustments
   */
  .priority-menu--hidden {
    visibility: hidden;
  }

  .priority-menu__label {
    display: none;
  }

  .priority-menu__label--visible {
    display: block;
  }

  /**
   * Make the available small click area accessible by adding paddings
   */
  .priority-menu--has-visible-items .priority-menu__icon {
    padding-left: var(--syn-spacing-small);
    padding-right: var(--syn-spacing-small);
  }

  /**
   * Remove the margin from the content container if it is not visible
   */
  .priority-menu--has-visible-items .priority-menu__nav-item::part(content-container) {
    margin-inline-start: 0;
  }
`,Vo=t=>Array.from(t.assignedElements({flatten:!0})),ed=t=>{var e;return t.tagName.toLocaleLowerCase()==="syn-nav-item"||((e=t.getAttribute("role"))!=null?e:"")==="menuitem"},Ro=t=>t.filter(ed),id=t=>{t.setAttribute("horizontal","true"),t.removeAttribute("slot"),t.removeAttribute("tabindex"),t.dataset.originalRole?t.setAttribute("role",t.dataset.originalRole):t.removeAttribute("role")},sd=t=>{t.removeAttribute("horizontal"),t.setAttribute("slot","menu"),t.setAttribute("role","menuitem")},Vt=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}getSlottedNavItems(){const t=Ro(Vo(this.defaultSlot)),e=Ro(Vo(this.menuSlot));return t.concat(e)}cacheItemPositions(t){const{left:e}=this.horizontalNav.getBoundingClientRect();t.forEach(i=>{i.removeAttribute("slot");const{right:s}=i.getBoundingClientRect();i.dataset.right=(s-e).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const t=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(t);const{width:e}=this.horizontalNav.getBoundingClientRect(),i=this.priorityMenu.classList.contains("priority-menu--hidden")?0:this.priorityMenu.clientWidth,s=e-i;let o;const a=t.at(-1),r=t.map(h=>{const u=h===a?e:s,p=!!(o||parseFloat(h.dataset.right)>u);return p&&!o&&(o=parseFloat(h.dataset.right)),{isHidden:p,item:h}}),d=r.filter(({isHidden:h})=>!h).length,c=d===1&&t.length>1;r.forEach(({item:h,isHidden:u})=>{u||c?sd(h):id(h)}),this.hasItemsInDropdown=d!==t.length,this.amountOfVisibleItems=c?0:d}renderPriorityMenu(){return ft`
      <syn-dropdown
        class=${C({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
        part="priority-menu"
        placement="bottom-end"
      >
        <syn-nav-item class="priority-menu__nav-item" slot="trigger" horizontal part="priority-menu-nav-item">
          <syn-icon 
            class="priority-menu__icon"
            label="More"
            library="system"
            name="more"
            part="priority-menu-icon"
            slot="prefix"
          >
          </syn-icon>
          <span
            class=${C({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const t=this.getSlottedNavItems();t.length!==this.amountOfNavItems&&(this.cacheItemPositions(t),this.handlePriorityMenu(),this.amountOfNavItems=t.length)}firstUpdated(){this.getSlottedNavItems().forEach(t=>{var e;t.dataset.originalRole=(e=t.getAttribute("role"))!=null?e:""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return ft`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}};Vt.styles=[z,td];Vt.dependencies={"syn-dropdown":gt,"syn-icon":X,"syn-menu":wi,"syn-nav-item":et};n([y("slot:not([name])")],Vt.prototype,"defaultSlot",2);n([y("slot[name=menu]")],Vt.prototype,"menuSlot",2);n([y(".horizontal-nav")],Vt.prototype,"horizontalNav",2);n([y(".priority-menu")],Vt.prototype,"priorityMenu",2);n([k()],Vt.prototype,"itemPositionsCached",2);n([k()],Vt.prototype,"amountOfNavItems",2);n([k()],Vt.prototype,"amountOfVisibleItems",2);n([k()],Vt.prototype,"hasItemsInDropdown",2);Vt.define("syn-prio-nav");N.define("syn-popup");var od=_`
  :host {
    --size: 120px;
    --track-width: var(--syn-spacing-x-small);
    --track-color: var(--syn-progress-track-color);
    --indicator-color: var(--syn-progress-indicator-color);
  }

  .progress-ring__indicator {
    stroke-linecap: initial;
  }

  .progress-ring__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-x-large);
  }
`,nd=_`
	/* stylelint-disable */
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--syn-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--syn-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,qe=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return m`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};qe.styles=[z,nd,od];n([y(".progress-ring__indicator")],qe.prototype,"indicator",2);n([k()],qe.prototype,"indicatorOffset",2);n([l({type:Number,reflect:!0})],qe.prototype,"value",2);n([l()],qe.prototype,"label",2);qe.define("syn-progress-ring");var ad=_`
  :host {
    --height: var(--syn-font-size-medium);
    --speed: 2.5s;
    --indicator-color: var(--syn-progress-indicator-color);
    --track-color: var(--syn-progress-track-color);
  }

  .progress-bar {
    border-radius: var(--syn-border-radius-none);
    box-shadow: none;
  }

  .progress-bar__indicator {
    font: var(--syn-body-x-small-bold);
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    animation-duration: var(--speed);
  }
`,rd=_`
	/* stylelint-disable */
  :host {
    --height: 1rem;
    --track-color: var(--syn-color-neutral-200);
    --indicator-color: var(--syn-color-primary-600);
    --label-color: var(--syn-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--syn-border-radius-pill);
    box-shadow: inset var(--syn-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--syn-font-sans);
    font-size: 12px;
    font-weight: var(--syn-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--syn-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;const Ln="important",ld=" !"+Ln,dd=Pe(class extends vi{constructor(t){if(super(t),t.type!==Mt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ft.add(s);const a=typeof o=="string"&&o.endsWith(ld);s.includes("-")||a?i.setProperty(s,a?o.slice(0,-11):o,a?Ln:""):i[s]=o}}return St}});var xi=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return m`
      <div
        part="base"
        class=${C({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${w(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${dd({width:`${this.value}%`})}>
          ${this.indeterminate?"":m` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};xi.styles=[z,rd,ad];n([l({type:Number,reflect:!0})],xi.prototype,"value",2);n([l({type:Boolean,reflect:!0})],xi.prototype,"indeterminate",2);n([l()],xi.prototype,"label",2);xi.define("syn-progress-bar");var cd=_`
  :host {
    display: block;
  }

  :host([data-user-invalid]) {
    --syn-input-border-color: var(--syn-input-border-color-focus-error);
    --syn-input-border-color-hover: var(--syn-input-border-color-focus-error);
    --syn-color-primary-600: var(--syn-input-border-color-focus-error);
    --syn-color-primary-900: var(--syn-color-error-900);
    --syn-color-primary-950: var(--syn-color-error-950);
    --syn-color-neutral-1000: var(--syn-input-border-color-focus-error);
    --syn-interactive-emphasis-color: var(--syn-input-border-color-focus-error);
    --syn-interactive-emphasis-color-hover: var(--syn-input-border-color-focus-error);
    --syn-interactive-emphasis-color-active: var(--syn-input-border-color-focus-error);
  }

  .form-control {
    border: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .form-control__label {
    padding: 0;
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-x-small);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  .radio-group--required .radio-group__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  .visually-hidden {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /**
   * #1140:
   * Apply custom styling when we are using syn-radio-button.
   * This is needed because syn-radio-button is displayed with space between the items
   * and should not adhere to the default styling needed for regular button groups.
   */
  .form-control--has-button-group .form-control-input {
    max-width: 100%; /* Fallback for older browsers, do not remove */
  }

  @supports (max-width: fit-content) {
    .form-control--has-button-group .form-control-input {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      max-width: fit-content;
    }
  }

  .form-control--has-button-group syn-button-group::part(base) {
    --radiogroup-padding: calc(var(--syn-spacing-x-small) - 1px);

    border: 1px solid var(--syn-input-border-color);
    border-radius: var(--syn-input-border-radius-large);
    gap: var(--radiogroup-padding);
    padding: var(--radiogroup-padding);
  }

  .form-control--has-button-group syn-button-group[readonly]::part(base) {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
  }

  .form-control--has-button-group syn-button-group[size="small"]::part(base) {
    --radiogroup-padding: calc(var(--syn-spacing-2x-small) + var(--syn-input-width));
  }

  /**
   * #1140: This statement overrides the children selectors that are used for showing readonly fields
   * We are not able to easily forward them to the radio button, so we need to override them here.
   */
  .form-control--has-button-group syn-button-group[readonly] ::slotted(syn-radio-button) {
    --syn-readonly-indicator-color: var(--syn-readonly-background-color);
    --syn-readonly-border-color: transparent;
    --syn-color-neutral-0: var(--syn-readonly-color-text);
  }

  /**
   * #794: Allow radio-groups to be displayed in a row when using syn-radio-button.
   * Will not apply to syn-radio-button, which is always displayed in a column.
   */
  .form-control--is-horizontal:not(.form-control--has-button-group) .form-control-input {
    flex-flow: row wrap;
    gap: var(--syn-spacing-x-small) var(--syn-spacing-medium);
  }
`,dt=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this),this.hasSlotController=new Z(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.layout="vertical",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Ko:t?Zn:bi}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button");if(!e||e.disabled||e.readonly)return;const i=this.getAllRadios(),s=this.value;this.value=e.value,i.forEach(o=>{o.checked=o===e}),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input"))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(c=>!c.disabled&&!c.readonly),s=(e=i.find(c=>c.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let r=i.indexOf(s)+o;if(r<0&&(r=i.length-1),r>i.length-1&&(r=0),!i[r])return;this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||c.setAttribute("tabindex","-1")}),this.value=i[r].value,i[r].checked=!0,this.hasButtonGroup?i[r].shadowRoot.querySelector("button").focus():(i[r].setAttribute("tabindex","0"),i[r].focus()),this.value!==a&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="syn-radio-button"),i.length>0&&!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&s.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("syn-button-group");s&&s.toggleAttribute("readonly",i.every(o=>o.readonly)),s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>{e.checked=e.value===this.value}),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(a=>a.checked),s=e.find(a=>!a.disabled),o=i||s;o&&o.focus(ue(it({},t),{focusVisible:!0}))}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=m`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return m`
      <fieldset
        part="form-control"
        class=${C({"form-control":!0,"form-control--has-button-group":this.hasButtonGroup,"form-control--has-help-text":s,"form-control--has-label":i,"form-control--is-horizontal":this.layout==="horizontal","form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--radio-group":!0,"form-control--small":this.size==="small"})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?m`
                <syn-button-group
                  exportparts="base:button-group__base"
                  part="button-group"
                  role="presentation"
                  size=${this.size}
                >
                  ${o}
                </syn-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};dt.styles=[z,jt,cd];dt.dependencies={"syn-button-group":qt};n([y("slot:not([name])")],dt.prototype,"defaultSlot",2);n([y(".radio-group__validation-input")],dt.prototype,"validationInput",2);n([k()],dt.prototype,"hasButtonGroup",2);n([k()],dt.prototype,"errorMessage",2);n([k()],dt.prototype,"defaultValue",2);n([l()],dt.prototype,"label",2);n([l({attribute:"help-text"})],dt.prototype,"helpText",2);n([l()],dt.prototype,"name",2);n([l({reflect:!0})],dt.prototype,"value",2);n([l({reflect:!0})],dt.prototype,"size",2);n([l({reflect:!0})],dt.prototype,"layout",2);n([l({reflect:!0})],dt.prototype,"form",2);n([l({reflect:!0,type:Boolean})],dt.prototype,"required",2);n([v("size",{waitUntilFirstUpdate:!0})],dt.prototype,"handleSizeChange",1);n([v("value")],dt.prototype,"handleValueChange",1);dt=n([K("SynRadioGroup")],dt);dt.define("syn-radio-group");var hd=_`
  :host([readonly]) {
    cursor: default;
  }

  .button {
    /* Medium size is the default */
    --syn-radio-button-height: 32px;
    --syn-radio-button-radius: var(--syn-radio-button-border-radius-medium);

    border-radius: var(--syn-radio-button-radius);
    font-weight: normal;
    line-height: calc(var(--syn-radio-button-height) - var(--syn-input-border-width) * 2);
    min-height: var(--syn-radio-button-height);
  }

  .button--small {
    --syn-radio-button-height: 24px;
    --syn-radio-button-radius: var(--syn-radio-button-border-radius-small);
  }

  .button--large {
    --syn-radio-button-height: 48px;
    --syn-radio-button-radius: var(--syn-radio-button-border-radius-large);
  }

  /**
   * Icon only buttons
   */
  .button--icon-only .button__label {
    border-radius: var(--syn-border-radius-medium);
    padding-inline: var(--syn-spacing-2x-small);
  }

  /**
   * Override the default unchecked button
   */
  .button--text {
    color: var(--syn-interactive-quiet-color);
  }

  .button--text:hover:not(.button--disabled):not(.button--readonly) {
    background: var(--syn-interactive-background-color-hover);
    color: var(--syn-interactive-quiet-color-hover);
  }

  /**
   * Disabled active buttons should look like their default state, but with opacity applied.
   * This overrides the defaults from the button component.
   * Note we cannot use syn-button-color because it will be the wrong color in dark mode.
   */
  .button--filled.button--primary,
  .button--filled.button--primary.button--disabled {
    background: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
    color: var(--syn-color-neutral-0);
  }

  /**
   * Make sure the active state is applied to the button in its selected and none selected state.
   */
  .button--filled.button--primary:active:not(.button--disabled),
  .button--text.button--primary:active:not(.button--disabled) {
    background: var(--syn-button-color-active);
    border-color: var(--syn-button-color-active);
    color: var(--syn-button-filled-color-text-active);
  }

  /**
   * Readonly state styles
   */
  .button.button--readonly {
    background: var(--syn-readonly-background-color);
    color: var(--syn-readonly-color-text);
    cursor: text;
    pointer-events: none;
    user-select: text;
  }

  .button.button--readonly:focus-visible {
    background: var(--syn-input-readonly-background-color-focus);
    color: var(--syn-readonly-color-text);
  }

  .button.button--readonly.button--checked {
    background: var(--syn-readonly-indicator-color);
    border-color: var(--syn-readonly-border-color);
    color: var(--syn-color-neutral-0);
  }
`,zt=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.iconOnly=!1,this.checked=!1,this.disabled=!1,this.readonly=!1,this.size="medium"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}isDisabled(){return this.disabled||this.readonly}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.isDisabled()){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleSlotChange(){const t=Rs(this.defaultSlot).trim(),e=this.defaultSlot.assignedElements({flatten:!0}),i=e.length===1&&e[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=i&&t===""}handleDisabledChange(){this.setAttribute("aria-disabled",this.isDisabled()?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return m`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${C({button:!0,"button--checked":this.checked,"button--default":!0,"button--disabled":this.disabled,"button--filled":this.checked,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix"),"button--icon-only":this.iconOnly,"button--large":this.size==="large","button--medium":this.size==="medium","button--primary":!0,"button--readonly":this.readonly,"button--small":this.size==="small","button--text":!this.checked})}
          aria-disabled=${this.disabled}
          type="button"
          tabindex=${w(this.disabled?"-1":void 0)}
          value=${w(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label" @slotchange=${this.handleSlotChange}></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};zt.styles=[z,hn,hd];n([y(".button")],zt.prototype,"input",2);n([y("slot:not([name])")],zt.prototype,"defaultSlot",2);n([k()],zt.prototype,"hasFocus",2);n([k()],zt.prototype,"iconOnly",2);n([l({reflect:!0,type:Boolean})],zt.prototype,"checked",2);n([l()],zt.prototype,"value",2);n([l({reflect:!0,type:Boolean})],zt.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],zt.prototype,"readonly",2);n([l({reflect:!0})],zt.prototype,"size",2);n([v(["disabled","readonly"],{waitUntilFirstUpdate:!0})],zt.prototype,"handleDisabledChange",1);zt=n([K("SynRadioButton")],zt);zt.define("syn-radio-button");var ud=_`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0;
  }

  .radio {
    align-items: flex-start;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    vertical-align: middle;
  }

  .radio--small {
    --toggle-size: var(--syn-toggle-size-small);

    font-size: var(--syn-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--syn-toggle-size-medium);

    font-size: var(--syn-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--syn-toggle-size-large);

    font-size: var(--syn-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    height: var(--toggle-size);

    /**
     * #920: The new icons are instances in figma.
     * The width of the system icon is 12px x 12px, so there is no inner padding.
     * To accommodate for this, we need to set the width and height of the icon to 50% to get the same result as before.
     */
    scale: 0.5;
    width: var(--toggle-size);

  }

  .radio__control {
    align-items: center;
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 50%;
    color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    height: var(--toggle-size);
    justify-content: center;
    position: relative;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
    width: var(--toggle-size);
  }

  .radio__input {
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled):not(.radio--readonly):hover .radio__control {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
    color: var(--syn-color-neutral-0);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled):not(.radio--readonly):hover .radio__control {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  /* Checked + active */
  .radio.radio--checked:not(.radio--disabled):not(.radio--readonly):active .radio__control {
    background-color: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /* Not-Checked + active */
  .radio:not(.radio--checked):not(.radio--disabled):not(.radio--readonly):active .radio__control {
    border-color: var(--syn-input-border-color-active);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }

  .radio--disabled {
    cursor: not-allowed;

    /** #429: Use token for opacity */
    opacity: var(--syn-input-disabled-opacity);
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  /* Fix#456: Multi line radio fixes */
  .radio__label {
    align-self: center;
    color: var(--syn-input-label-color);
    display: inline-block;
    line-height: var(--toggle-size);
    margin-inline-start: var(--syn-spacing-x-small);
    margin-top: -1px;
    user-select: none;
  }

  .radio--small .radio__label {
    font: var(--syn-body-small-regular);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .radio--medium .radio__label {
    font: var(--syn-body-medium-regular);
  }

  .radio--large .radio__label {
    font: var(--syn-body-large-regular);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  /* /Fix#456 */

  /**
   * #1174: Readonly state
   */
  .radio.radio--readonly {
    cursor: default;
  }

  .radio.radio--readonly .radio__label {
    user-select: auto;
  }

  .radio.radio--readonly .radio__control {
    background: var(--syn-input-readonly-background-color);
    border-color: var(--syn-input-readonly-background-color);
    color: var(--syn-readonly-indicator-color);
    cursor: default;
  }

  :host(:focus) .radio--readonly .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }
`,Ot=class extends S{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{if(this.readonly){this.focus();return}this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled||this.readonly?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled||this.readonly?"true":"false")}render(){return m`
      <span
        part="base"
        class=${C({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--large":this.size==="large","radio--medium":this.size==="medium","radio--readonly":this.readonly,"radio--small":this.size==="small"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?m` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ot.styles=[z,ud];Ot.dependencies={"syn-icon":X};n([k()],Ot.prototype,"checked",2);n([k()],Ot.prototype,"hasFocus",2);n([l()],Ot.prototype,"value",2);n([l({reflect:!0})],Ot.prototype,"size",2);n([l({reflect:!0,type:Boolean})],Ot.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],Ot.prototype,"readonly",2);n([v("checked")],Ot.prototype,"handleCheckedChange",1);n([v(["disabled","readonly"],{waitUntilFirstUpdate:!0})],Ot.prototype,"handleDisabledChange",1);Ot=n([K("SynRadio")],Ot);Ot.define("syn-radio");var pd=_`
  :host {
    --tick-height: var(--syn-spacing-x-small);
    --tick-label-top: 10px;
  }

  .tick {
    color: var(--syn-input-icon-color);
    font-family: var(--syn-font-family);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-denser);
    width: 1px;
  }

  .tick-line {
    background: var(--syn-range-tick-color);
    height: var(--tick-height);
  }

  .tick--subdivision .tick-line{
    height: calc(var(--tick-height) / 2);
  }

  .tick-label {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: var(--tick-label-top);
    text-align: center;
    white-space: nowrap;
  }
`,Gs=class extends S{constructor(){super(...arguments),this.subdivision=!1}render(){return m`
      <div
        class=${C({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}};Gs.styles=[z,pd];n([l({reflect:!0,type:Boolean})],Gs.prototype,"subdivision",2);Gs.define("syn-range-tick");var md=_`
  :host {
    /*
     * Values here apply for the default size of "medium"
     * For other sizes, see below
     */
    --thumb-size: var(--syn-spacing-medium);
    --thumb-hit-area-size: 1.4;
    --track-hit-area-size: var(--syn-spacing-medium);
    --track-active-offset: 0px;
    --track-color-active: var(--syn-range-track-color-active);
    --track-color-inactive: var(--syn-range-color-inactive);
    --track-height: var(--syn-spacing-2x-small);

    /* This is needed to get the full with of the element, including the border */
    --full-thumb-size: calc(var(--thumb-size) + (var(--syn-focus-ring-width) * 2));

    /*
     * There are multiple places where we need the half width of the thumb
     * This is needed for example to position the knob on the track or
     * provide the spacing to the left and right for the track to make it stand "over"
     */
    --half-thumb-size: calc(var(--full-thumb-size) / 2);
  }

  /* Sizes */
  :host([size='small']) {
    --thumb-size: var(--syn-spacing-small);
  }

  :host([size='large']) {
    --thumb-size: var(--syn-spacing-medium-large);
  }

  .form-control {
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    writing-mode: horizontal-tb;
  }

  .base {
    align-items: center;
    cursor: text;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    position: relative;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    touch-action: none; /* Prevent misbehavior in mobile by disabling native touch */
    -webkit-touch-callout: none;
    transition: var(--syn-transition-fast) color, var(--syn-transition-fast) border, var(--syn-transition-fast) box-shadow, var(--syn-transition-fast) background-color;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    vertical-align: middle;
    width: 100%;
  }

  .input__wrapper {
    flex: 1 0 auto;
    margin: 0 var(--half-thumb-size);
    position: relative;
  }

  :host([disabled]) .base {
    opacity: var(--syn-input-disabled-opacity);
  }

  .input__prefix,
  .input__suffix {
    align-items: center;
    color: var(--syn-input-icon-color);
    cursor: default;
    display: inline-flex;
    flex: 0 0 auto;
  }

  /* Sizing for the prefix and suffix */
  .form-control--small .input__prefix ::slotted(*) {
    font-size: var(--syn-input-font-size-small);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .form-control--small .input__suffix ::slotted(*) {
    font-size: var(--syn-input-font-size-small);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .form-control--medium .input__prefix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .form-control--medium .input__suffix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .form-control--large .input__prefix ::slotted(*) {
    font-size: var(--syn-input-font-size-large);
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .form-control--large .input__suffix ::slotted(*) {
    font-size: var(--syn-input-font-size-large);
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .form-control--small .input__prefix ::slotted(syn-icon),
  .form-control--small .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
  }

  .form-control--medium .input__prefix ::slotted(syn-icon),
  .form-control--medium .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
  }
  
  .form-control--large .input__prefix ::slotted(syn-icon),
  .form-control--large .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
  }

  .track__wrapper {
    cursor: pointer;
    position: relative;
  }

  /* Internal helper for a better click surface on tracks */
  .track__click-helper {
    inset: calc(var(--track-hit-area-size) * -1) calc(var(--half-thumb-size) * -1);
    position: absolute;
  }

  .track {
    background-color: var(--track-color-inactive);
    border-radius: var(--syn-border-radius-pill);
    height: var(--track-height);
    margin: calc((var(--full-thumb-size) - var(--track-height)) / 2) calc(var(--half-thumb-size) * -1);
  }

  .active-track {
    background-color: var(--track-color-active);
    border-radius: var(--syn-border-radius-pill);
    height: var(--track-height);
    margin: 0 calc(var(--half-thumb-size) * -1);
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .thumb {
    background-color: var(--syn-interactive-emphasis-color);
    border: var(--syn-focus-ring-width) solid var(--syn-input-border-color-offset);
    border-radius: var(--syn-border-radius-circle);
    cursor: pointer;
    display: block;
    height: var(--full-thumb-size);
    position: absolute;
    top: 0;
    transition: transform var(--syn-transition-fast) ease-in-out, background-color var(--syn-transition-fast) ease-in-out, box-shadow var(--syn-transition-fast) ease-in-out;
    user-select: none;
    width: var(--full-thumb-size);
    z-index: 3;
  }

  /**
   * Adds some space to the thumb that makes it easier to click and drag
   */
  .thumb::after {
    background: transparent;
    border-radius: var(--syn-border-radius-circle);
    content: "";
    display: block;
  
    /* The --thumb-size needs to be used to subtract from, because the border of the thumb is not calculated into the inset */
    inset: calc((var(--thumb-size) - (var(--full-thumb-size) * var(--thumb-hit-area-size)) ) / 2);

    /* This is needed as we also attach a pointerleave listener that stops */
    pointer-events: none;
    position: absolute;
  }

  .thumb:hover {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: grab;
  }

  .thumb.grabbed {
    background: var(--syn-interactive-emphasis-color-active);
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: grabbing;
  }

  .thumb:focus-visible {
    outline: none;
  }

  .thumb:not(.grabbed):focus-visible {
    background: var(--syn-interactive-emphasis-color-hover);
    outline: var(--syn-focus-ring);
    outline-offset: 0;
  }

  :host([disabled]) .track__wrapper,
  :host([disabled]) .thumb,
  :host([disabled]) .thumb.grabbed {
    cursor: not-allowed;
  }

  :host([readonly]) .track__wrapper,
  :host([readonly]) .thumb,
  :host([readonly]) .thumb.grabbed {
    cursor: default;
  }

  /*
   * Guard against mobile devices not removing the transform
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover
   */
  @media (any-hover: hover) {
    :host(:not([disabled]):not([readonly])) .thumb:hover  {
      transform: scale(var(--thumb-hit-area-size));
    }

    :host(:not([disabled]):not([readonly])) .thumb:not(.grabbed):hover  {
      background: var(--syn-interactive-emphasis-color-hover);
    }
    
    :host(:not([disabled]):not([readonly])) .thumb:hover::after  {
      /* Unset the area of the thumb click and drag area space, so it does not scale with the hover */
      inset: unset;
    }
  }

  /* Ticks */
  .ticks {
    cursor: pointer;
    inset-inline: 0;
    position: absolute;
    top: 100%;
    user-select: none;
  }

  .form-control--small .ticks ::slotted(*) {
    font-size: var(--syn-font-size-small);
  }

  .form-control--large .ticks ::slotted(*) {
    font-size: var(--syn-font-size-large);
  }

  /**
   * Visually hide elements without display:none to make aria and other accessibility stuff work correctly
   * This is necessary for accessibility reasons and e.g. for the native html input validation popup to be
   * shown.
   */
  .visually-hidden {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /**
   * Position the validation input to the bottom and center of the range track
   */
  .range__validation-input {
    bottom: 0;
    left: 50%;
  }
  

  :host([data-user-invalid]) .active-track {
    --track-color-active: var(--syn-range-error-color);
  }

  :host([data-user-invalid]) .thumb {
    background-color: var(--syn-range-error-color);
  }

  /**
   * #1176: Readonly state
   */
  :host([readonly]) {
    --track-color-active: var(--syn-readonly-indicator-color);
    --track-color-inactive: var(--syn-readonly-background-color);
  }

  :host([readonly]) .thumb {
    background-color: var(--syn-readonly-indicator-color);
  }

  :host([readonly]) .thumb:focus {
    background-color: var(--syn-readonly-indicator-color);
    outline: var(--syn-focus-ring);
    outline-offset: 0;
  }
`,ve=(t,e)=>t-e,mi=(t,e)=>{if(t.length!==e.length)return!0;const i=t.slice().sort(ve),s=e.slice().sort(ve);for(let o=0;o<i.length;o+=1)if(i[o]!==s[o])return!0;return!1},Dn=(t,e,i)=>{const s=t.getBoundingClientRect(),o=s.width;if(o<=0)return 0;let a=e;return a-=s.left,a<=0?i?1:0:a>=o?i?0:1:(a/=o,i?1-a:a)},fd=_`
  /* stylelint-disable property-no-vendor-prefix */
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  /** #640: Adjust the zIndex of the arrow to make sure the box-shadow above does not bleed out */
  :host ::part(arrow) {
    z-index: 0 !important;
  }

  .tooltip {
    --arrow-size: var(--syn-tooltip-arrow-size);
    --arrow-color: var(--syn-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--syn-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    background-color: var(--syn-tooltip-background-color);
    border-radius: var(--syn-tooltip-border-radius);
    box-shadow: var(--syn-shadow-large);
    color: var(--syn-tooltip-color);
    display: block;
    font-family: var(--syn-tooltip-font-family);
    font-size: var(--syn-tooltip-font-size);
    font-weight: var(--syn-tooltip-font-weight);
    line-height: var(--syn-tooltip-line-height);
    max-width: var(--max-width);
    padding: var(--syn-tooltip-padding);
    pointer-events: none;
    text-align: start;
    -webkit-user-select: none;
    user-select: none;
    white-space: normal;
    width: max-content;
  }
`,pt=class extends S{constructor(){super(),this.localize=new W(this),this.anchor=void 0,this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=yo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=yo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await nt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=U(this,"tooltip.show",{dir:this.localize.dir()});await G(this.popup.popup,i,s),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await nt(this.body);const{keyframes:i,options:s}=U(this,"tooltip.hide",{dir:this.localize.dir()});await G(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,at(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,at(this,"syn-after-hide")}render(){return m`
      <syn-popup
        .anchor=${this.anchor}
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${C({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </syn-popup>
    `}};pt.styles=[z,fd];pt.dependencies={"syn-popup":N};n([y("slot:not([name])")],pt.prototype,"defaultSlot",2);n([y(".tooltip__body")],pt.prototype,"body",2);n([y("syn-popup")],pt.prototype,"popup",2);n([k()],pt.prototype,"anchor",2);n([l()],pt.prototype,"content",2);n([l()],pt.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);n([l({type:Number})],pt.prototype,"distance",2);n([l({type:Boolean,reflect:!0})],pt.prototype,"open",2);n([l({type:Number})],pt.prototype,"skidding",2);n([l()],pt.prototype,"trigger",2);n([v("open",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpenChange",1);n([v(["anchor","content","distance","placement","skidding"])],pt.prototype,"handleOptionsChange",1);n([v("disabled")],pt.prototype,"handleDisabledChange",1);L("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});L("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var P,mt,fi,Oe,Fi,te,D,yi,Ks,Mn,Xs,Fn,Pn,Pi,ki,Ci,Vn,Rn,We,Nn,Bn,Vi,j=class extends S{constructor(){super(),_t(this,D),this.name="",this.label="",this.helpText="",this.disabled=!1,this.readonly=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new Z(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new Wt(this,{assumeInteractionOn:["syn-change"]}),this.localize=new W(this),_t(this,P,[0]),_t(this,mt,new Map),_t(this,fi,!1),_t(this,Oe,""),_t(this,Fi),_t(this,te,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(t){J(this,P,t?t.split(" ").map(Number).sort(ve):[]),J(this,te,Array.from(g(this,P)))}get value(){return g(this,P).slice().sort(ve).join(" ")}set valueAsArray(t){const e=g(this,P);J(this,P,Array.isArray(t)?t.slice().sort(ve):t||[]),J(this,te,Array.from(g(this,P))),mi(e,g(this,P))&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...g(this,P)].sort(ve)}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this==null?void 0:this.ticksResizeObserver)==null||t.disconnect(),(e=this==null?void 0:this.visibilityObserver)==null||e.disconnect()}firstUpdated(){this.ticksResizeObserver=new ResizeObserver(()=>{I(this,D,Vi).call(this)}),this.ticksResizeObserver.observe(this.ticks),this.ticksResizeObserver.observe(this.baseControl),this.visibilityObserver=new IntersectionObserver(t=>{const e=t.at(0);e&&e.isIntersecting&&I(this,D,Vi).call(this)}),this.visibilityObserver.observe(this),I(this,D,Vi).call(this),this.formControlController.updateValidity(),J(this,te,Array.from(g(this,P))),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{const i=e.shadowRoot.querySelector(".tooltip__body");i?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=g(this,P).map(i=>{if(i<=this.min)return this.min;if(i>=this.max)return this.max;const s=this.min+this.step*Math.round((i-this.min)/this.step);return s>this.max?this.max:s});mi(g(this,P),e)&&J(this,P,e)}updated(t){super.updated(t);for(const e of this.thumbs){const i=+e.dataset.rangeId;g(this,mt).has(i)&&I(this,D,ki).call(this,e,g(this,mt).get(i))}I(this,D,Ci).call(this)}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!g(this,Oe);return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(g(this,Fi)),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),J(this,Fi,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),t}setCustomValidity(t){J(this,Oe,t),this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return g(this,Oe)?Ko:bi}get validationMessage(){return g(this,Oe)}renderThumbs(t){const e=g(this,P).length>1;return g(this,mt).clear(),g(this,P).map((i,s)=>{const o=s+1;g(this,mt).set(o,i);const a=`thumb-${o}`;let r="",d="";return e?(d=t?`label aria-label-hidden ${a}`:`aria-label-hidden ${a}`,s===0?r=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(i)})`:s===g(this,P).length-1?r=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(i)})`:r=this.tooltipFormatter(i)):d=t?"label aria-label-hidden":"",m`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${w(this.disabled||this.readonly?"true":void 0)}
            aria-labelledby=${d}
            aria-label=${r}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${i}"
            aria-valuetext="${this.tooltipFormatter(i)}"
            class="thumb"
            data-range-id="${o}"
            id=${a}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${I(this,D,Fn)}
            @pointermove=${I(this,D,Pn)}
            @pointerup=${I(this,D,Pi)}
            @pointercancel=${I(this,D,Pi)}
            @pointerleave=${I(this,D,Pi)}
            @keydown=${I(this,D,Vn)}
            @focus=${I(this,D,Nn)}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),o=this.label?!0:!!t,a=this.helpText?!0:!!e;return m`
      <div
        part="form-control"
        class=${C({"form-control":!0,"form-control--has-help-text":a,"form-control--has-label":o,"form-control--has-prefix":i,"form-control--has-suffix":s,"form-control--is-disabled":this.disabled,"form-control--is-readonly":this.readonly,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${I(this,D,Rn)}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${g(this,P).map(this.tooltipFormatter).join(" - ")})
        </label>

        <div class="base input__control" part="base">
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <div class="input__wrapper" part="input-wrapper">
            <input
              class="range__validation-input visually-hidden"
              tabindex="-1"
              hidden
              @invalid=${I(this,D,Bn)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${I(this,D,Ks)}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(o)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${I(this,D,Mn)}
              role="presentation"
            >
              <slot name="ticks"></slot>
            </div>
          </div>

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>

        <div
          part="form-control-help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};P=new WeakMap;mt=new WeakMap;fi=new WeakMap;Oe=new WeakMap;Fi=new WeakMap;te=new WeakMap;D=new WeakSet;yi=function(){return this.localize.dir()==="rtl"};Ks=function(t,e=!0){if(this.disabled)return;if(this.readonly){t.preventDefault(),this.focus();return}const{clientX:i}=t,s=Array.from(this.thumbs),o=Dn(this.baseDiv,i,g(this,D,yi)),a=this.step/(this.max-this.min),r=this.min+this.step*Math.round(o/a),d=s.reduce((p,b)=>{const f=g(this,mt).get(+b.dataset.rangeId),x=g(this,mt).get(+p.dataset.rangeId),O=Math.abs(f-r),M=Math.abs(x-r);return O===M?f<r?b:p:O<M?b:p}),c=+d.dataset.rangeId;if(!c)return;g(this,mt).set(c,r),I(this,D,ki).call(this,d,r);const h=g(this,P);J(this,P,Array.from(g(this,mt).values())),I(this,D,Ci).call(this),mi(h,g(this,P))&&(J(this,te,Array.from(g(this,P))),this.emit("syn-input"),this.emit("syn-change"));const u=new PointerEvent("pointerdown",t);e&&d.dispatchEvent(u)&&I(this,D,We).call(this,d)};Mn=function(t){I(this,D,Ks).call(this,t,!1)};Xs=function(t,e){const i=this.valueAsArray,o=Array.from(this.thumbs).indexOf(t),a=i[o-1]||this.min,r=i[o+1]||this.max,d=e<a||e>r;return{finalValue:Math.max(a,Math.min(r,e)),isRestricted:d,nextValue:r,prevValue:a}};Fn=async function(t){if(this.disabled||this.readonly)return;const e=t.target;I(this,D,We).call(this,e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()};Pn=function(t){if(this.disabled||this.readonly)return;const e=t.target,i=+e.dataset.rangeId;if(!g(this,mt).has(i)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const o=Dn(this.baseDiv,t.clientX,g(this,D,yi)),a=this.step/(this.max-this.min);let r=this.min+this.step*Math.round(o/a);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:r}}).defaultPrevented)return;if(this.restrictMovement){const h=I(this,D,Xs).call(this,e,r);h.isRestricted?(r=h.finalValue,e.style.zIndex=(3+this.thumbs.length).toFixed(0)):e.style.zIndex="3"}g(this,mt).set(i,r),I(this,D,ki).call(this,e,r);const c=g(this,P);J(this,P,Array.from(g(this,mt).values())),I(this,D,Ci).call(this),mi(c,g(this,P))&&this.emit("syn-input")};Pi=async function(t){if(this.disabled||this.readonly)return;const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,mi(g(this,te),g(this,P))&&(J(this,te,Array.from(g(this,P))),this.emit("syn-change")),await e.parentElement.hide())};ki=function(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const i=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc(${100*i}% - var(--half-thumb-size))`,I(this,D,We).call(this,t)};Ci=function(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(g(this,P).length===1){const o=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",a=100*(g(this,P)[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${o}, ${a}%)`,t.style.insetInlineEnd=`min(calc(100% - ${o}), calc(100% - ${a}%))`;return}const e=g(this,P).slice().sort(ve),i=100*(e[0]-this.min)/(this.max-this.min),s=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${i}%`,t.style.insetInlineEnd=`calc(100% - ${s}%)`};Vn=function(t){if(this.readonly)return;const e=t.target,i=+e.dataset.rangeId,s=g(this,mt).get(i);if(s===void 0)return;let o=s;switch(t.key){case"ArrowUp":case"Up":o=Math.min(s+this.step,this.max);break;case"ArrowDown":case"Down":o=Math.max(s-this.step,this.min);break;case"ArrowLeft":case"Left":o=g(this,D,yi)?Math.min(s+this.step,this.max):Math.max(s-this.step,this.min);break;case"ArrowRight":case"Right":o=g(this,D,yi)?Math.max(s-this.step,this.min):Math.min(s+this.step,this.max);break;case"PageUp":o=Math.min(s+(this.max-this.min)/5,this.max);break;case"PageDown":o=Math.max(s-(this.max-this.min)/5,this.min);break;case"Home":o=this.min;break;case"End":o=this.max;break;default:return}if(o!==s){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:o}}).defaultPrevented)return;if(this.restrictMovement){const r=I(this,D,Xs).call(this,e,o);r.isRestricted&&(o=r.finalValue)}I(this,D,ki).call(this,e,o),g(this,mt).set(i,o),J(this,P,Array.from(g(this,mt).values())),I(this,D,Ci).call(this),I(this,D,We).call(this,e),J(this,te,Array.from(g(this,P))),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()};Rn=function(t){var e;t.relatedTarget&&((e=this.shadowRoot)!=null&&e.contains(t.relatedTarget))||(this.emit("syn-blur"),J(this,fi,!1))};We=function(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!g(this,mt).has(e))return;const i=g(this,mt).get(e),s=t.parentElement;s.content=this.tooltipFormatter(i)};Nn=function(t){var e;if(this.disabled)return;g(this,fi)||(J(this,fi,!0),this.emit("syn-focus"));const i=t.target;(e=i?.dataset)!=null&&e.rangeId&&I(this,D,We).call(this,i)};Bn=function(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)};Vi=function(){if(!this.hasSlotController.test("ticks")){this.baseControl.style.marginBottom="";return}const t=this.ticks.getBoundingClientRect().height,e=this.baseControl.getBoundingClientRect().height,i=this.baseDiv.getBoundingClientRect().height,s=(e-i)/2,o=Math.ceil(Math.max(0,t-s));this.baseControl.style.marginBottom=o>0?`${o}px`:""};j.styles=[z,jt,md];j.dependencies={"syn-tooltip":pt};n([l()],j.prototype,"name",2);n([l()],j.prototype,"label",2);n([l({attribute:"help-text"})],j.prototype,"helpText",2);n([l({reflect:!0,type:Boolean})],j.prototype,"disabled",2);n([l({reflect:!0,type:Boolean})],j.prototype,"readonly",2);n([l({type:Number})],j.prototype,"min",2);n([l({type:Number})],j.prototype,"max",2);n([l({type:Number})],j.prototype,"step",2);n([l({reflect:!0})],j.prototype,"size",2);n([l({attribute:"tooltip-placement",type:String})],j.prototype,"tooltipPlacement",2);n([l({type:String})],j.prototype,"value",1);n([l({attribute:"restrict-movement",type:Boolean})],j.prototype,"restrictMovement",2);n([Re()],j.prototype,"defaultValue",2);n([l({reflect:!0})],j.prototype,"form",2);n([l({attribute:!1})],j.prototype,"tooltipFormatter",2);n([y(".input__wrapper")],j.prototype,"baseDiv",2);n([y(".base")],j.prototype,"baseControl",2);n([y(".active-track")],j.prototype,"activeTrack",2);n([y(".ticks")],j.prototype,"ticks",2);n([Ta(".thumb")],j.prototype,"thumbs",2);n([y(".range__validation-input")],j.prototype,"validationInput",2);j=n([K("SynRange")],j);j.define("syn-range");var yd=_`
  :host {
    --side-nav-open-width: 320px;
    --side-nav-rail-width: 72px;

    display: block;
  }

  /**
   * Syn-drawer styling
   */
  .side-nav__drawer {
    --size: var(--side-nav-open-width);
  }
  
  .side-nav__drawer::part(base){
    position: absolute;
    z-index: var(--syn-z-index-drawer);
  }

  .side-nav__drawer::part(body),
  .side-nav__drawer::part(footer) {
    padding: 0;
  }

  /** 
   * Overlay 
   */
  .side-nav__drawer::part(overlay){
    position: absolute;
  }

  /****
   *
   * variant="default"
   *
   ****/
  
  /* Side nav should have a width, so it behave correct in an e.g. display flex context */
  .side-nav.side-nav--fix.side-nav--open {
    width: var(--side-nav-open-width);
  }

  /* Fixed mode  */
  .side-nav--fix .side-nav__drawer::part(overlay){
    display: block;
  }

  /****
   *
   * variant="rail"
   *
   ****/

  /* 
   * Side nav should have a width, so it behave correct in an e.g. display flex context. 
   * in variant="rail" the width is always the small rail width, because there should be no shrinking possible of the main content area.
   */
  .side-nav.side-nav--rail {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--rail .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  /* Show the overlay of the drawer on touch devices */
  .side-nav--open.side-nav--rail.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--rail.side-nav--animation {
    white-space: nowrap;
  }

  /* Hide the scrollbars in closed variant="rail" */ 
  :not(.side-nav--open).side-nav--rail .side-nav__drawer::part(body){
    overflow: hidden;
  }

  /****
   *
   * variant="sticky"
   *
   ****/

  /*
   * Side nav should have a width, so it behave correct in an e.g. display flex context.
   * In variant="sticky" the width is the rail width if closed and the open width if open.
   */
  .side-nav.side-nav--sticky {
    width: var(--side-nav-open-width);
  }

  .side-nav.side-nav--sticky:not(.side-nav--open) {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--sticky .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  /*
   * For touch devices the content should not shrink in a flex container
   */ 
  .side-nav--sticky.side-nav--touch {
    width: var(--side-nav-rail-width);
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--sticky.side-nav--animation {
    white-space: nowrap;
  }

  /* Show the overlay of the drawer on touch devices */
   .side-nav--open.side-nav--sticky.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  .side-nav__toggle-icon > syn-icon {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /****
   *
   * Footer divider
   *
   ****/
  .side-nav__footer-divider{
    --spacing: 0;
  }

  :not(.side-nav--open).side-nav--rail ::slotted(syn-nav-item){
    --display-children: none;
  }
`,Et=class extends S{constructor(){super(),this.hasSlotController=new Z(this,"[default]","footer"),this.localize=new W(this),this.isAnimationActive=!1,this.open=!1,this.variant="default",this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener("syn-initial-focus",t=>{this.variant!=="default"&&(t.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener("focusin",t=>{t.target.tagName.toLowerCase()==="syn-nav-item"&&this.variant==="rail"&&!this.open&&(this.open=!0)}),this.addEventListener("focusout",t=>{var e;const i=t.target.tagName.toLowerCase(),s=(e=t.relatedTarget)==null?void 0:e.tagName.toLowerCase();i==="syn-nav-item"&&s!=="syn-nav-item"&&this.variant==="rail"&&this.open&&(this.open=!1)})}setDelayedCallback(t){clearTimeout(this.timeout),this.timeout=setTimeout(t,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){var t,e;(t=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||t.addEventListener("mouseenter",this.handleMouseEnter),(e=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||e.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){var t,e;(t=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||t.removeEventListener("mouseenter",this.handleMouseEnter),(e=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||e.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerAnimations(){const t=U(this,`sideNav.show${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),e=U(this,`sideNav.hide${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),i=U(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),s=U(this,"sideNav.overlay.show",{dir:this.localize.dir()});Ai(this.drawer,"drawer.showStart",t),Ai(this.drawer,"drawer.hideStart",e),Ai(this.drawer,"drawer.overlay.hide",i),Ai(this.drawer,"drawer.overlay.show",s)}handleVariantChange(){this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant==="rail"?this.addMouseListener():this.removeMouseListener()}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,at(this.drawer,`syn-after-${this.open?"show":"hide"}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,at(this.drawer,"syn-after-show")}async hide(){if(this.open)return this.open=!1,at(this.drawer,"syn-after-hide")}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(".drawer__panel").tabIndex=-1}),this.variant){case"rail":this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case"sticky":break;default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(Te(this.drawer),this.drawer.modal.deactivate())}toggleOpenState(){this.open=!this.open}render(){const t=window.navigator.maxTouchPoints>0||"ontouchstart"in window,e=this.hasSlotController.test("footer"),i=e||this.variant==="sticky";return ft`
      <nav
        class=${C({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":e,"side-nav--open":this.open,"side-nav--rail":this.variant==="rail","side-nav--sticky":this.variant==="sticky","side-nav--touch":t})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.variant!=="default"}
          exportparts="overlay,panel,body,base:drawer__base"
          label=${this.localize.term("sideNav")}
          no-header
          ?open=${this.open}
          part="drawer"
          placement="start"
          @syn-request-close=${this.handleRequestClose} 
        >
          <div part="content-container" class="side-nav__content-container">
            <slot part="content"></slot>
          </div>
          
          <footer class="side-nav__footer" part="footer-container" slot="footer">  

            ${i?ft`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot>
            ${this.variant==="sticky"?ft`<syn-nav-item part="toggle-nav-item" class="side-nav__toggle-nav-item" @click=${this.toggleOpenState} ?divider=${e}>
                      <slot name="toggle-icon" slot="prefix" class="side-nav__toggle-icon">
                        <syn-icon library="system" name="sticky_sidebar" part="toggle-icon"></syn-icon>
                      </slot>
                      <slot name="toggle-label" part="toggle-label">
                        ${!this.open&&!this.isAnimationActive?this.localize.term("sideNavShow"):this.localize.term("sideNavHide")}
                      </slot>
                    </syn-nav-item>`:""}
          
          </footer>

        </syn-drawer>

      </nav>
    `}};Et.styles=[z,yd];Et.dependencies={"syn-divider":Xt,"syn-drawer":kt,"syn-icon":X,"syn-nav-item":et};n([k()],Et.prototype,"isAnimationActive",2);n([y(".side-nav__drawer")],Et.prototype,"drawer",2);n([l({reflect:!0,type:Boolean})],Et.prototype,"open",2);n([l({reflect:!0})],Et.prototype,"variant",2);n([l({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],Et.prototype,"noFocusTrapping",2);n([v("variant",{waitUntilFirstUpdate:!0})],Et.prototype,"handleVariantChange",1);n([v("open",{waitUntilFirstUpdate:!0})],Et.prototype,"handleOpenChange",1);n([v("noFocusTrapping",{waitUntilFirstUpdate:!0})],Et.prototype,"handleFocusTrapping",1);Et=n([K("SynSideNav")],Et);L("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});L("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});L("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});L("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});L("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});L("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Et.define("syn-side-nav");E.define("syn-select");var bd=_`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--syn-switch-height-small);
    --thumb-size: var(--syn-toggle-size-small);
    --width: var(--syn-switch-width-small);

    font-size: var(--syn-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--syn-switch-height-medium);
    --thumb-size: var(--syn-toggle-size-medium);
    --width: var(--syn-switch-width-medium);

    font-size: var(--syn-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--syn-switch-height-large);
    --thumb-size: var(--syn-toggle-size-large);
    --width: var(--syn-switch-width-large);

    font-size: var(--syn-input-font-size-large);
  }

  .switch {
    align-items: center;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-size: inherit;
    font-weight: var(--syn-input-font-weight);
    position: relative;
    vertical-align: middle;
  }

  .switch.switch--small {
    padding: var(--syn-spacing-2x-small) 0;
  }

  .switch.switch--medium {
    padding: var(--syn-spacing-2x-small) 0;
  }

  .switch.switch--large {
    padding: var(--syn-spacing-3x-small) 0;
  }

  /* Hint: can be removed, if the padding stylings for sizes from above are removed */
  .form-control--has-help-text .switch {
    padding-bottom: 0;
  }

  .switch__control {
    align-items: center;
    background-color: var(--syn-input-icon-icon-clearable-color);
    border: solid var(--syn-border-width-medium) var(--syn-input-icon-icon-clearable-color);
    border-radius: var(--height);
    display: inline-flex;
    flex: 0 0 auto;
    height: var(--height);
    justify-content: center;
    position: relative;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color;
    width: var(--width);
  }

  .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border: none;
    border-radius: 50%;
    height: var(--thumb-size);
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) box-shadow;
    translate: calc((var(--width) - var(--height)) / -2);
    width: var(--thumb-size);
  }

  .switch__input {
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly):hover .switch__control {
    background-color: var(--syn-input-icon-icon-clearable-color-hover);
    border-color: var(--syn-input-icon-icon-clearable-color-hover);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-input-icon-icon-clearable-color);
    border-color: var(--syn-input-icon-icon-clearable-color);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly):hover .switch__control {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly):hover .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  /*
   * #443: Add active styles
   * The checked and unchecked states have different active colors
   * Note the fallback is defined to match the hover color.
   * This is done to make sure no active state is shown at all if no active color is defined.
   * Still better than showing one for the unchecked state but not for the checked state.
   */
  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly):active .switch__control {
    background: var(--syn-input-icon-icon-clearable-color-active);
    border-color: var(--syn-input-icon-icon-clearable-color-active);
  }

  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly):active .switch__control {
    background: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /** #429: Use token for opacity */
  .switch--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: var(--syn-spacing-x-small);
    user-select: none;
  }

  :host([required]) .switch__label::after {
    color: var(--syn-input-required-content-color);
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly) .switch__control {
    background-color: var(--syn-input-border-color-focus-error);
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly):hover .switch__control {
    background-color: var(--syn-input-border-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /**
   * #1178: Readonly state
   */
  .switch.switch--readonly {
    cursor: default;
  }

  .switch.switch--readonly .switch__label {
    user-select: auto;
  }

  .switch.switch--readonly .switch__control {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
    cursor: default;
  }

  .switch.switch--readonly:hover .switch__control {
    background: var(--syn-input-readonly-background-color-hover);
    border-color: var(--syn-input-readonly-background-color-hover);
  }

  .switch.switch--readonly .switch__input:focus ~ .switch__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch.switch--readonly .switch__control .switch__thumb {
    background: var(--syn-readonly-indicator-color);
  }

  /* Override base styles to remove outline from thumb for readonly switches */
  .switch.switch--readonly .switch__input:focus-visible ~ .switch__control .switch__thumb {
    outline: none;
  }

  .switch.switch--readonly.switch--checked .switch__input:focus-visible ~ .switch__control .switch__thumb {
    outline: none !important;
  }

  /* Focus override */
  .switch.switch--readonly .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ut=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Z(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.readonly=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(t){if(this.readonly){t.preventDefault();return}this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){this.readonly||(t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input")))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${C({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${C({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--readonly":this.readonly,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${w(this.value)}
            .checked=${ui(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ut.styles=[z,jt,bd];n([y('input[type="checkbox"]')],ut.prototype,"input",2);n([k()],ut.prototype,"hasFocus",2);n([l({reflect:!0})],ut.prototype,"title",2);n([l()],ut.prototype,"name",2);n([l()],ut.prototype,"value",2);n([l({reflect:!0})],ut.prototype,"size",2);n([l({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],ut.prototype,"readonly",2);n([l({type:Boolean,reflect:!0})],ut.prototype,"checked",2);n([Re("checked")],ut.prototype,"defaultChecked",2);n([l({reflect:!0})],ut.prototype,"form",2);n([l({type:Boolean,reflect:!0})],ut.prototype,"required",2);n([l({attribute:"help-text"})],ut.prototype,"helpText",2);n([v("checked",{waitUntilFirstUpdate:!0})],ut.prototype,"handleCheckedChange",1);n([v("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);ut=n([K("SynSwitch")],ut);ut.define("syn-switch");Zi.define("syn-spinner");var gd=_`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`,os=class extends S{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("syn-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return m` <slot @slotchange=${this.handleSlotChange}></slot> `}};os.styles=[z,gd];n([l({type:Boolean,reflect:!0})],os.prototype,"disabled",2);n([v("disabled",{waitUntilFirstUpdate:!0})],os.prototype,"handleDisabledChange",1);var vd=_`
  /* stylelint-disable no-descending-specificity */
  /* Write custom CSS here */
  :host {
    --track-width: var(--syn-border-width-small);
    --track-color: var(--syn-panel-border-color);
    --indicator-width: var(--syn-border-width-x-large);
    --indicator-color: var(--syn-interactive-emphasis-color);
  }

  /* we need to augment the size of the height of the tab-group__nav to make the focus outline and the hiding white border visible of the tab because of overflow-x value  */
  .tab-group--top .tab-group__body {
    position: relative;
    top: calc(-1 * var(--syn-panel-border-width));
  }

  .tab-group--top .tab-group__nav {
    padding: 0 0 var(--syn-panel-border-width) 0;
  }

  /**
   * Indicator
   */
  .tab-group--top .tab-group__indicator {
    border-bottom: solid var(--indicator-width) var(--indicator-color);
  }

  .tab-group--start .tab-group__indicator {
    border-right: solid var(--indicator-width) var(--indicator-color);
  }

  .tab-group--end .tab-group__indicator {
    border-inline-start: solid var(--indicator-width) var(--indicator-color);
  }

  /**
   * Panel
   */
  .tab-group--top ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-large) 0;
  }

  .tab-group--start ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-large);
  }

  .tab-group--end ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-large);
  }

  /**
   * Contained styling
   */ 
  .tab-group--contained .tab-group__tabs {
    border: none;
  }

  .tab-group--contained ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-large);

    background-color: var(--syn-panel-background-color);
    border: var(--syn-panel-border-width) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
  }

  /* Stretch the tab panel container for non-top placements, otherwise the borders are not drawn correctly */
  .tab-group--contained:not(.tab-group--top) ::slotted(syn-tab-panel) {
    height: 100%;
  }

  /* Draw the correct border radii of the panel depending on the placement and direction */
  .tab-group--top.tab-group--contained:not(.tab-group--sharp):not(.tab-group--has-scroll-controls) ::slotted(syn-tab-panel:first-of-type),
  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:first-of-type) {
    border-start-start-radius: var(--syn-border-radius-none);
  }

  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:last-of-type) {
    border-end-start-radius: var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:last-of-type) {
    border-end-end-radius: var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:first-of-type) {
    border-start-end-radius: var(--syn-border-radius-none);
  }

  .tab-group--contained .tab-group__indicator {
    /* Remove the animation of the indicator */
    transition: none;
    
    /* Needed, otherwise the indicator is hidden under the background of the tab */
    z-index: 2;
  }

  /* Contained styling for tabs */
  .tab-group--contained ::slotted(syn-tab) {
    --background-color: var(--syn-panel-background-color);
    --border-width: var(--syn-panel-border-width);

    position: relative;
    z-index: 1;
  }

  /* Top */
  .tab-group--top.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-medium) var(--syn-border-radius-medium) var(--syn-border-radius-none) var(--syn-border-radius-none);
  }

  .tab-group--top.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-background-color);

    /* We need to move the tab down, so the bottom border, hides parts of the border of the tab-group */
    top: var(--syn-panel-border-width);
  }

  .tab-group--top.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move down the non-active tabs also, so we don't get jumping of the tab text content */
    top: var(--syn-panel-border-width);
  }

  /* Start & End with rtl */
  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab),
  .tab-group--end.tab-group--rtl.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-medium) var(--syn-border-radius-none) var(--syn-border-radius-none) var(--syn-border-radius-medium);
  }

  .tab-group--start.tab-group--contained ::slotted(syn-tab[active]),
  .tab-group--end.tab-group--rtl.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-background-color) var(--syn-panel-border-color)  var(--syn-panel-border-color) ;

    /* We need to move the tab right, so the right border, hides parts of the border of the tab-group */
    left: var(--syn-panel-border-width);
    right: unset;
  }

  .tab-group--start.tab-group--contained ::slotted(syn-tab:not([active])),
  .tab-group--end.tab-group--rtl.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move right the non-active tabs also, so we don't get jumping of the tab text content */
    left: var(--syn-panel-border-width);
    right: unset;
  }

  /* End & Start with rtl */
  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab),
  .tab-group--start.tab-group--rtl.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-none) var(--syn-border-radius-medium) var(--syn-border-radius-medium) var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained ::slotted(syn-tab[active]),
  .tab-group--start.tab-group--rtl.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-background-color);

    /* We need to move the tab left, so the left border, hides parts of the border of the tab-group */
    left: unset;
    right: var(--syn-panel-border-width);
  }

  .tab-group--end.tab-group--contained ::slotted(syn-tab:not([active])),
  .tab-group--start.tab-group--rtl.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move left the non-active tabs also, so we don't get jumping of the tab text content */
    left: unset;
    right: var(--syn-panel-border-width);
  }


  /**
   * Sharp styling
   */
  .tab-group--sharp ::slotted(syn-tab-panel) {
    border-radius: var(--syn-border-radius-none);
  }


  /**
   * Scroll buttons
   */
  .tab-group--has-scroll-controls .tab-group__nav-container {
    padding: 0 calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button {
    /* we need to move the scroll buttons to the top, to align the borders with the border of the tab-group--nav  */
    bottom: var(--syn-panel-border-width);
    color: var(--syn-interactive-quiet-color);
    font-size: var(--syn-font-size-medium);
    width: calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button::part(base) {
    padding: calc(var(--syn-spacing-small) - var(--syn-spacing-3x-small));
  }

  .tab-group--has-scroll-controls:not(.tab-group--contained) .tab-group__scroll-button {
    border-bottom: solid var(--track-width) var(--track-color);
  }

  /**
   * Shoelace 2.17 introduced a new attribute "fixed-scroll-controls".
   * Per default, tab-groups now hide the scroll buttons when they are not needed.
   * "fixed-scroll-controls" will keep the scroll buttons visible at all times,
   * which is the default behavior of Synergy.
   * For this reason, we make the buttons visible by default, but show them in a "disabled" state when they are not needed.
   */
  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: visible;
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden::part(base),
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden::part(base) {
    opacity: var(--syn-input-disabled-opacity);
    pointer-events: none;
  }
`,_d=_`
	/* stylelint-disable */
  :host {
    --indicator-color: var(--syn-color-primary-600);
    --track-color: var(--syn-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--syn-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--syn-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-medium);
  }
`,wd=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},No=(t,e,i)=>{const s=t[e];t[e]=function(...o){s.call(this,...o),i.call(this,s,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,i=new WeakMap,s=a=>{for(const r of a.changedTouches)e.add(r.identifier)},o=a=>{for(const r of a.changedTouches)e.delete(r.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),No(EventTarget.prototype,"addEventListener",function(a,r){if(r!=="scrollend")return;const d=wd(()=>{e.size?d():this.dispatchEvent(new Event("scrollend"))},100);a.call(this,"scroll",d,{passive:!0}),i.set(this,d)}),No(EventTarget.prototype,"removeEventListener",function(a,r){if(r!=="scrollend")return;const d=i.get(this);d&&a.call(this,"scroll",d,{passive:!0})})}})();var ot=class extends S{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new W(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const i=e.filter(({target:s})=>{if(s===this)return!0;if(s.closest("syn-tab-group")!==this)return!1;const o=s.tagName.toLowerCase();return o==="syn-tab"||o==="syn-tab-panel"});if(i.length!==0){if(i.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(s=>s.attributeName==="active")){const o=i.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="syn-tab").map(a=>a.target).find(a=>a.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,s)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("syn-tab");i?.closest("syn-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("syn-tab");if(i?.closest("syn-tab-group")===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(d=>d.matches(":focus")),a=this.localize.dir()==="rtl";let r=null;if(o?.tagName.toLowerCase()==="syn-tab"){if(t.key==="Home")r=this.focusableTabs[0];else if(t.key==="End")r=this.focusableTabs[this.focusableTabs.length-1];else if(["top"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const d=this.tabs.findIndex(c=>c===o);r=this.findNextFocusableTab(d,"backward")}else if(["top"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const d=this.tabs.findIndex(c=>c===o);r=this.findNextFocusableTab(d,"forward")}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(r,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===r?0:-1}),["top"].includes(this.placement)&&qi(r,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=it({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top"].includes(this.placement)&&qi(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("syn-tab-hide",{detail:{name:i.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",a=this.tabs.slice(0,this.tabs.indexOf(t)).reduce((r,d)=>({left:r.left+d.clientWidth,top:r.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${e}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${s?"-":""}1 * (${a.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${i}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${a.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const s=e==="forward"?1:-1;let o=t+s;for(;t<this.tabs.length;){if(i=this.tabs[o]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=s}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}preventFocus(t){t.preventDefault()}render(){const t=this.localize.dir()==="rtl";return m`
      <div
        part="base"
        class=${C({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?m`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${C({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"tabs-right":"tabs-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToStart}
                ></syn-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <syn-resize-observer @syn-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </syn-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?m`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${C({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"tabs-left":"tabs-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToEnd}
                ></syn-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ot.styles=[z,_d,vd];ot.dependencies={"syn-icon-button":Y,"syn-resize-observer":os};n([Fe({slot:"nav",selector:"syn-tab"})],ot.prototype,"tabs",2);n([Fe({selector:"syn-tab-panel"})],ot.prototype,"panels",2);n([y(".tab-group")],ot.prototype,"tabGroup",2);n([y(".tab-group__body")],ot.prototype,"body",2);n([y(".tab-group__nav")],ot.prototype,"nav",2);n([y(".tab-group__indicator")],ot.prototype,"indicator",2);n([k()],ot.prototype,"hasScrollControls",2);n([k()],ot.prototype,"shouldHideScrollStartButton",2);n([k()],ot.prototype,"shouldHideScrollEndButton",2);n([l()],ot.prototype,"placement",2);n([l()],ot.prototype,"activation",2);n([l({attribute:"no-scroll-controls",type:Boolean})],ot.prototype,"noScrollControls",2);n([l({type:Boolean})],ot.prototype,"contained",2);n([l({type:Boolean})],ot.prototype,"sharp",2);n([l({attribute:"fixed-scroll-controls",type:Boolean})],ot.prototype,"fixedScrollControls",2);n([Oa({passive:!0})],ot.prototype,"updateScrollButtons",1);n([v("noScrollControls",{waitUntilFirstUpdate:!0})],ot.prototype,"updateScrollControls",1);n([v("placement",{waitUntilFirstUpdate:!0})],ot.prototype,"syncIndicator",1);ot.define("syn-tab-group");var xd=_`
  :host {
    --background-color: none;
    --border-width: var(--syn-border-width-none);
    --border-color: none;
    --border-radius: var(--syn-border-radius-none);
  }

  .tab {
    border-color: transparent;
    border-radius: var(--border-radius);
    border-style: solid;
    border-width: var(--border-width);
    color: var(--syn-typography-color-text);
    font: var(--syn-body-small-bold);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);

    /* Stretch the tabs so they are aligned to each other vertically and the focus width stays the same  */
    width: 100%;
  }


  /** #429: Use token for opacity */
  .tab.tab--disabled {
    opacity: var(--syn-opacity-50);
  }

  /**
   * Focus
   */
  :host(:focus-visible) {
    outline-offset: calc(var(--syn-focus-ring-offset) * -1);
  }

  :host(:focus-visible:not(.tab--disabled)) {
    color: var(--syn-typography-color-text);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline-offset: calc(var(--syn-focus-ring-offset) * -1);
    }
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-interactive-emphasis-color);
  }

  .tab.tab--active:not(:hover):not(.tab--disabled) {
    color: var(--syn-typography-color-text);
  }

  /**
   * Closable
   */
  .tab.tab--closable {
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-large);
  }

  .tab__close-button {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-x-small);
  }

  .tab__close-button::part(base):hover {
    color: var(--syn-input-icon-icon-clearable-color-hover);
  }

  .tab--active {
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-style: solid;
    border-width: var(--border-width);
  }

  /* Slotted icon style */
  .tab ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /* #969: Prevent interactive color when close button is hovered */
  .tab.tab--closable:hover:has(.tab__close-button:hover) {
    color: var(--syn-typography-color-text);
  }
`,kd=_`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    border-radius: var(--syn-border-radius-medium);
    color: var(--syn-color-neutral-600);
    padding: var(--syn-spacing-medium) var(--syn-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: calc(-1 * var(--syn-focus-ring-width) - var(--syn-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--syn-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--syn-font-size-small);
    margin-inline-start: var(--syn-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Cd=0,Rt=class extends S{constructor(){super(...arguments),this.localize=new W(this),this.attrId=++Cd,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,m`
      <div
        part="base"
        class=${C({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?m`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></syn-icon-button>
            `:""}
      </div>
    `}};Rt.styles=[z,kd,xd];Rt.dependencies={"syn-icon-button":Y};n([y(".tab")],Rt.prototype,"tab",2);n([l({reflect:!0})],Rt.prototype,"panel",2);n([l({type:Boolean,reflect:!0})],Rt.prototype,"active",2);n([l({type:Boolean,reflect:!0})],Rt.prototype,"closable",2);n([l({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);n([l({type:Number,reflect:!0})],Rt.prototype,"tabIndex",2);n([v("active")],Rt.prototype,"handleActiveChange",1);n([v("disabled")],Rt.prototype,"handleDisabledChange",1);Rt.define("syn-tab");ee.define("syn-tag");var Sd=_`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`,zd=_`
	/* stylelint-disable */
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,$d=0,Si=class extends S{constructor(){super(...arguments),this.attrId=++$d,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return m`
      <slot
        part="base"
        class=${C({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Si.styles=[z,zd,Sd];n([l({reflect:!0})],Si.prototype,"name",2);n([l({type:Boolean,reflect:!0})],Si.prototype,"active",2);n([v("active")],Si.prototype,"handleActiveChange",1);Si.define("syn-tab-panel");pt.define("syn-tooltip");var Ad=_`
  /* stylelint-disable no-descending-specificity */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  /* stylelint-disable property-no-vendor-prefix */
  :host {
    display: block;
  }

  .textarea {
    align-items: center;
    cursor: text;
    display: grid;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    line-height: var(--syn-line-height-normal);
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--syn-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly textareas */
  .textarea--readonly {
    background-color: var(--syn-input-readonly-background-color);
    border: none;
    color: var(--syn-input-color);
  }

  .textarea--readonly:hover:not(.textarea--disabled) {
    background-color: var(--syn-input-readonly-background-color-hover);
  }

  .textarea--readonly.textarea--focused:not(.textarea--disabled) {
    background-color: var(--syn-input-readonly-background-color-focus);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .textarea--readonly.textarea--disabled {
    background-color: var(--syn-input-readonly-background-color-disabled);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .textarea__control {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    color: var(--syn-input-color);
    cursor: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;

    /*
    Unfortunately we need to add a small margin to the textarea control. This is needed for the new sick 2025 theme,
    as because of the big border-radius the resize icon will otherwise overlap with the border
    This added margin needs to be subtracted from the padding of the textarea
    */
    margin: var(--syn-spacing-3x-small);
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color);
    -webkit-user-select: none;
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */
  .textarea--small {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
  }

  .textarea--small .textarea__control {
    /* TODO: Wait for Design response, how to handle this left / right spacing. Design has "--syn-input-spacing-medium" for all sizes,
      but we have different (coming from shoelace) */

    /* We need to subtract the added margin of the textarea control from the padding */
    padding: calc(var(--syn-spacing-x-small) - var(--syn-spacing-3x-small)) calc(var(--syn-input-spacing-small) - var(--syn-spacing-3x-small));
  }

  .textarea--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    /* We need to subtract the added margin of the textarea control from the padding */
    padding: calc(var(--syn-spacing-x-small) - var(--syn-spacing-3x-small)) calc(var(--syn-input-spacing-medium) - var(--syn-spacing-3x-small));
  }

  .textarea--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
  }

  .textarea--large .textarea__control {
    /* TODO: Wait for Design response, how to handle this left / right spacing. Design has "--syn-input-spacing-medium" for all sizes,
      but we have different (coming from shoelace) */

    /* We need to subtract the added margin of the textarea control from the padding */
    padding: calc(var(--syn-spacing-x-small) - var(--syn-spacing-3x-small)) calc(var(--syn-input-spacing-large) - var(--syn-spacing-3x-small));
  }

  /*
   * Resize types
   */
  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    overflow-y: hidden;
    resize: none;
  }

  /* Validation */
  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }
`,F=class extends S{constructor(){super(...arguments),this.formControlController=new Wt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Z(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,o,a,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return m`
      <div
        part="form-control"
        class=${C({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${C({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${w(this.name)}
              .value=${ui(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              rows=${w(this.rows)}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              autocapitalize=${w(this.autocapitalize)}
              autocorrect=${w(this.autocorrect?void 0:"off")}
              ?autofocus=${this.autofocus}
              spellcheck=${w(this.spellcheck)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[z,jt,Ad];n([y(".textarea__control")],F.prototype,"input",2);n([y(".textarea__size-adjuster")],F.prototype,"sizeAdjuster",2);n([k()],F.prototype,"hasFocus",2);n([l({reflect:!0})],F.prototype,"title",2);n([l()],F.prototype,"name",2);n([l()],F.prototype,"value",2);n([l({reflect:!0})],F.prototype,"size",2);n([l()],F.prototype,"label",2);n([l({attribute:"help-text"})],F.prototype,"helpText",2);n([l()],F.prototype,"placeholder",2);n([l({type:Number})],F.prototype,"rows",2);n([l()],F.prototype,"resize",2);n([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],F.prototype,"readonly",2);n([l({reflect:!0})],F.prototype,"form",2);n([l({type:Boolean,reflect:!0})],F.prototype,"required",2);n([l({type:Number})],F.prototype,"minlength",2);n([l({type:Number})],F.prototype,"maxlength",2);n([l()],F.prototype,"autocapitalize",2);n([l({attribute:"autocorrect",reflect:!0,converter:{fromAttribute:t=>t===""||t==="on",toAttribute:t=>t?"on":"off"},type:Boolean})],F.prototype,"autocorrect",2);n([l()],F.prototype,"autocomplete",2);n([l({type:Boolean})],F.prototype,"autofocus",2);n([l()],F.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],F.prototype,"spellcheck",2);n([l()],F.prototype,"inputmode",2);n([Re()],F.prototype,"defaultValue",2);n([v("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);n([v("rows",{waitUntilFirstUpdate:!0})],F.prototype,"handleRowsChange",1);n([v("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F=n([K("SynTextarea")],F);F.define("syn-textarea");var Od=_`
  :host {
    --tag-group-item-gap: var(--syn-spacing-x-small);
    --tag-group-label-gap: var(--syn-spacing-x-small);
    --tag-group-label-font: var(--syn-body-medium-semibold);

    display: block;
  }

  .tag-group {
    align-items: anchor-center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--tag-group-item-gap);
  }

  /* Label Styles */
  .tag-group__label {
    color: var(--syn-input-label-color);
    display: block;
    font: var(--tag-group-label-font);
  }

  .tag-group--top .tag-group__label {
    /**
     * When calculating the margin-bottom, we have to take the gap of .tag-group into account.
     * We dont want to remove the row-gap above, as otherwise the gap between multi line tags would be 0.
     * By subtracting the row-gap from the label gap, we ensure that the distance between the label and the first row of tags is consistent.
     */
    margin-bottom: calc(var(--tag-group-label-gap) - var(--syn-spacing-2x-small));
    order: -1;  
    width: 100%;  
  }

  /* Size Modifiers */
  .tag-group--small {
    --tag-group-item-gap: var(--syn-spacing-2x-small);
    --tag-group-label-gap: var(--syn-spacing-x-small);
    --tag-group-label-font: var(--syn-body-small-semibold);
  }

  .tag-group--large {
    --tag-group-item-gap: var(--syn-spacing-small);
    --tag-group-label-gap: var(--syn-spacing-x-small);
    --tag-group-label-font: var(--syn-body-large-semibold);
  }
`,ie=class extends S{constructor(){super(...arguments),this.hasSlotController=new Z(this,"label"),this.label="",this.labelPosition="top",this.size="medium"}adjustTagSize(){this.tagsInDefaultSlot.forEach(t=>{t.setAttribute("size",this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){const t=this.hasSlotController.test("label"),e=this.label?!0:!!t;return m`
      <div 
        part="base"
        class=${C({"tag-group":!0,"tag-group--large":this.size==="large","tag-group--medium":this.size==="medium","tag-group--small":this.size==="small","tag-group--start":this.labelPosition==="start","tag-group--top":this.labelPosition==="top"})}
      >

        <span
            part="tag-label"
            class="tag-group__label"
            aria-hidden=${e?"false":"true"}
          >
            <slot name="label">${this.label}</slot>
        </span>

        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};ie.styles=[z,Od];n([Fe({selector:"syn-tag"})],ie.prototype,"tagsInDefaultSlot",2);n([l()],ie.prototype,"label",2);n([l({attribute:"label-position",reflect:!0})],ie.prototype,"labelPosition",2);n([l({reflect:!0})],ie.prototype,"size",2);n([v("size",{waitUntilFirstUpdate:!0})],ie.prototype,"handleSizeChange",1);ie=n([K("SynTagGroup")],ie);ie.define("syn-tag-group");var Ed=["blur","change","clear","focus","invalid","input","move"],Un=(t,e)=>t.includes(e),Bo=t=>Un(t,"blur"),ys=t=>Un(t,"invalid"),ai=t=>t instanceof S,Td=(t="")=>t.split(" ").map(e=>e.trim()).filter(Boolean),Ti=(t,e)=>{const i=e.trim();return ai(t)&&Ed.includes(i)?`syn-${i}`:i},Id=t=>{if(!ai(t))return;const{size:e}=t;return e!=null?e:void 0},Ld={"syn-checkbox":"input","syn-combobox":".combobox__value-input","syn-file":"input","syn-input":"input","syn-radio-group":"input","syn-range":".input__control","syn-select":".select__value-input","syn-switch":"input","syn-textarea":".textarea__control"},Uo=(t,e)=>{var i,s;return(s=(i=t.shadowRoot)==null?void 0:i.querySelector(e))!=null?s:null},Dd=t=>{if(!t)return;if(!t.shadowRoot)return t;const e=t.tagName.toLowerCase(),i=Ld[e];if(i){const o=Uo(t,i);if(o)return o}const s=Uo(t,"input,select,textarea");return s||t},Md=_`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`,Ho=()=>m`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`,st=class extends S{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=t=>{var e;(e=t.currentTarget.validity)!=null&&e.valid&&(this.validationMessage="")},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async t=>{var e;if(ys(t.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}ys(t.type)&&this.variant!=="native"&&(t.preventDefault(),t.stopPropagation());const i=t.currentTarget;if(ai(i)&&await i.updateComplete,this.isValid=(e=i.validity)==null?void 0:e.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(i);return}!this.isValid&&!Bo(t.type)&&this.handleFocus(i),this.setValidationMessage(i),!Bo(t.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,i.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const t=this.getInput();await this.updateComplete,t?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const t=this.getInput();t&&(this.setCustomValidationMessage(t),this.setValidationMessage(t))}getValidity(){return this.isValid}getInput(){const t=this.slottedChildren[0];return t||void 0}setAlertSize(){this.alertSize=Id(this.getInput())}getUsedEventNames(){const t=this.getInput();if(!t)return[];const e=Td(this.on),[...i]=e.filter(Boolean);return i.includes("invalid")||i.push("invalid"),i.includes("live")&&(i.push("input"),i.push("blur")),Array.from(new Set(i.filter(s=>s!=="live").map(s=>Ti(t,s))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const t=this.getInput();if(!t)return;const e=this.getUsedEventNames();e.forEach(a=>{t.addEventListener(a,this.validate,{capture:ys(a),signal:this.controller.signal})});const i=Ti(t,"change");e.includes(i)||t.addEventListener(i,this.internalRevalidate,{signal:this.controller.signal});const s=Ti(t,"focus"),o=Ti(t,"blur");t.addEventListener(s,this.handleInputFocus,{signal:this.controller.signal}),t.addEventListener(o,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(t){const{customValidationMessage:e}=this,i=e||t.validationMessage;this.validationMessage=i}setCustomValidationMessage(t){t.setCustomValidity(this.customValidationMessage)}handleFocus(t){var e;const i=document.activeElement,s=i.closest("syn-validate");!((e=i.validity)!=null&&e.valid)&&s||(t.scrollIntoView({block:"nearest"}),t.focus())}async firstUpdated(t){var e,i;super.firstUpdated(t),this.updateEvents();const s=this.getInput();this.customValidationMessage&&(ai(s)&&await s.updateComplete,s?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=(i=(e=s?.validity)==null?void 0:e.valid)!=null?i:!1,s?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(t=>{const e=this.getInput();if(!e)return;t.filter(({target:s})=>s===e).every(s=>s.attributeName==="size")&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:["size"],attributes:!0,subtree:!0}),this.observer=new MutationObserver(t=>{const e=this.getInput();if(!e)return;t.filter(({target:s})=>s===e).every(s=>{const o=s.target;return o.hasAttribute("disabled")||o.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(ai(e)?e.updateComplete:Promise.resolve()).then(()=>{var o,a,r;this.isValid=(a=(o=e?.validity)==null?void 0:o.valid)!=null?a:!1,this.validationMessage=(r=e?.validationMessage)!=null?r:""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){var t,e;super.disconnectedCallback(),this.controller.abort(),(t=this==null?void 0:this.observer)==null||t.disconnect(),(e=this==null?void 0:this.sizeObserver)==null||e.disconnect()}updated(t){if(super.updated(t),this.variant!=="tooltip")return;const e=this.tooltipElement;if(!e)return;const i=this.getDisplayValidationMessage();!this.isValid&&i&&this.hasFocus?(e.content=i,e.show()):e.hide()}renderInlineValidation(){const t=this.getDisplayValidationMessage();return this.variant!=="inline"||!t?"":m`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${w(this.alertSize)}
        variant="danger"
      >
        ${this.hideIcon?"":m`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${t}
      </syn-alert>
    `}render(){var t;const e=this.variant==="tooltip"?m`
        <syn-tooltip
          .anchor=${(t=Dd(this.getInput()))!=null?t:void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${Ho()}
        </syn-tooltip>
      `:Ho();return m`
      <div
        class="validate"
        part="base"
      >
        ${e}
        ${this.renderInlineValidation()}
      </div>
    `}};st.styles=[z,Md];st.dependencies={"syn-alert":tt,"syn-tooltip":pt};n([Fe()],st.prototype,"slottedChildren",2);n([y("syn-tooltip")],st.prototype,"tooltipElement",2);n([k()],st.prototype,"validationMessage",2);n([k()],st.prototype,"eagerFirstMount",2);n([k()],st.prototype,"isInternalTriggeredInvalid",2);n([k()],st.prototype,"isValid",2);n([k()],st.prototype,"alertSize",2);n([k()],st.prototype,"hasFocus",2);n([l({reflect:!0})],st.prototype,"variant",2);n([l({attribute:"hide-icon",reflect:!0,type:Boolean})],st.prototype,"hideIcon",2);n([l({reflect:!0})],st.prototype,"on",2);n([l({attribute:"custom-validation-message",type:String})],st.prototype,"customValidationMessage",2);n([l({type:Boolean})],st.prototype,"eager",2);n([v("on",{waitUntilFirstUpdate:!0})],st.prototype,"handleListenerChange",1);n([v("eager",{waitUntilFirstUpdate:!1})],st.prototype,"handleEagerChange",1);n([v("customValidationMessage",{waitUntilFirstUpdate:!0})],st.prototype,"handleCustomValidationMessageChange",1);st=n([K("SynValidate")],st);st.define("syn-validate");const Hn="/knowledge/";an("sidenav",{resolver:t=>`${Hn}icons/sidenav/${t}.svg`});an("logos",{resolver:t=>`${Hn}icons/${t}.svg`});const Fd=t=>Array.from(t.querySelectorAll(':scope > syn-nav-item:not([slot="footer"])')),qo=async()=>{await customElements.whenDefined("syn-side-nav");const t=document.querySelector("syn-side-nav");if(!t)return;const e=async()=>{const s=t.hasAttribute("open"),o=Fd(t);for(const a of o){if(!s){a.open=!1;continue}a.open=!1;const r=a.querySelector("syn-nav-item[current]");r&&(a.open=!0,await a.updateComplete,r.scrollIntoView({block:"nearest"}))}};new MutationObserver(s=>{for(const o of s)o.type==="attributes"&&o.attributeName==="open"&&e()}).observe(t,{attributeFilter:["open"],attributes:!0}),t.addEventListener("click",s=>{if(t.hasAttribute("open"))return;const o=s.composedPath().find(d=>d instanceof jl);if(!o)return;const a=o.parentElement===t&&o.getAttribute("slot")!=="footer",r=!!o.querySelector(':scope > [slot="children"]');!a||!r||(o.open=!1,s.preventDefault(),s.stopImmediatePropagation())},{capture:!0}),e()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{qo()},{once:!0}):qo();
