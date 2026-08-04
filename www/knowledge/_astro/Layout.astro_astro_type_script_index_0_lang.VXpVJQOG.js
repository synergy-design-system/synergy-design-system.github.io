var e=new WeakMap,t=new WeakMap,n=new WeakMap,r=new WeakSet,i=new WeakMap,a=class{constructor(t,n){this.handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`syn-button`;if(this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&r!==void 0){if(r instanceof FileList){let t=r;for(let r of t)e.formData.append(n,r,r.name);return}Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString())}},this.handleFormSubmit=t=>{let n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&e.get(this.form)?.forEach(e=>{this.setUserInteracted(e,!0)}),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),i.set(this.host,[])},this.handleInteraction=e=>{let t=i.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`syn-input`],...n}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),i.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),i.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,e.has(this.form)?e.get(this.form).add(this.host):e.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),t.has(this.form)||(t.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),n.has(this.form)||(n.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let r=e.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),t.has(this.form)&&(this.form.reportValidity=t.get(this.form),t.delete(this.form)),n.has(this.form)&&(this.form.checkValidity=n.get(this.form),n.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?r.add(e):r.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let n=document.createElement(`button`);n.type=e,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.clipPath=`inset(50%)`,n.style.overflow=`hidden`,n.style.whiteSpace=`nowrap`,t&&(n.name=t.name,n.value=t.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!r.has(t),i=!!t.required;t.toggleAttribute(`data-required`,i),t.toggleAttribute(`data-optional`,!i),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e);let a=t.parentElement;if(a&&a.tagName.toLocaleUpperCase()===`SYN-VALIDATE`){let n=a.getValidity();t.toggleAttribute(`data-user-invalid`,!e&&!n)}else t.toggleAttribute(`data-user-invalid`,!e&&n);t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`syn-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},o=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),s=Object.freeze({...o,valid:!1,valueMissing:!0}),c=Object.freeze({...o,valid:!1,customError:!0}),l=globalThis,u=l.ShadowRoot&&(l.ShadyCSS===void 0||l.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,d=Symbol(),f=new WeakMap,p=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(u&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=f.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&f.set(t,e))}return e}toString(){return this.cssText}},m=e=>new p(typeof e==`string`?e:e+``,void 0,d),h=(e,...t)=>new p(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,d),ee=(e,t)=>{if(u)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=l.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},te=u?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return m(t)})(e):e,{is:ne,defineProperty:re,getOwnPropertyDescriptor:ie,getOwnPropertyNames:ae,getOwnPropertySymbols:oe,getPrototypeOf:se}=Object,ce=globalThis,le=ce.trustedTypes,ue=le?le.emptyScript:``,de=ce.reactiveElementPolyfillSupport,fe=(e,t)=>e,pe={toAttribute(e,t){switch(t){case Boolean:e=e?ue:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},me=(e,t)=>!ne(e,t),he={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:me};Symbol.metadata??=Symbol(`metadata`),ce.litPropertyMetadata??=new WeakMap;var ge=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&re(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ie(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(fe(`elementProperties`)))return;let e=se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fe(`properties`))){let e=this.properties,t=[...ae(e),...oe(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(te(e))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?pe:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?pe:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??me)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ge.elementStyles=[],ge.shadowRootOptions={mode:`open`},ge[fe(`elementProperties`)]=new Map,ge[fe(`finalized`)]=new Map,de?.({ReactiveElement:ge}),(ce.reactiveElementVersions??=[]).push(`2.1.2`);var _e=globalThis,ve=e=>e,ye=_e.trustedTypes,be=ye?ye.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,xe=`$lit$`,Se=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce=`?`+Se,we=`<${Ce}>`,Te=document,Ee=()=>Te.createComment(``),De=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Oe=Array.isArray,ke=e=>Oe(e)||typeof e?.[Symbol.iterator]==`function`,Ae=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Ne=/>/g,Pe=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Fe=/'/g,Ie=/"/g,Le=/^(?:script|style|textarea|title)$/i,g=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Re=Symbol.for(`lit-noChange`),_=Symbol.for(`lit-nothing`),ze=new WeakMap,Be=Te.createTreeWalker(Te,129);function Ve(e,t){if(!Oe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return be===void 0?t:be.createHTML(t)}var He=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=je;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===je?c[1]===`!--`?o=Me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Pe):(Le.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Pe):o=Ne:o===Pe?c[0]===`>`?(o=i??je,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Pe:c[3]===`"`?Ie:Fe):o===Ie||o===Fe?o=Pe:o===Me||o===Ne?o=je:(o=Pe,i=void 0);let d=o===Pe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===je?n+we:l>=0?(r.push(s),n.slice(0,l)+xe+n.slice(l)+Se+d):n+Se+(l===-2?t:d)}return[Ve(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ue=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=He(t,n);if(this.el=e.createElement(l,r),Be.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Be.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(xe)){let t=u[o++],n=i.getAttribute(e).split(Se),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Je:r[1]===`?`?Ye:r[1]===`@`?Xe:qe}),i.removeAttribute(e)}else e.startsWith(Se)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Le.test(i.tagName)){let e=i.textContent.split(Se),t=e.length-1;if(t>0){i.textContent=ye?ye.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ee()),Be.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ee())}}}else if(i.nodeType===8)if(i.data===Ce)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Se,e+1))!==-1;)c.push({type:7,index:a}),e+=Se.length-1}a++}}static createElement(e,t){let n=Te.createElement(`template`);return n.innerHTML=e,n}};function We(e,t,n=e,r){if(t===Re)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=De(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=We(e,i._$AS(e,t.values),i,r)),t}var Ge=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Te).importNode(t,!0);Be.currentNode=r;let i=Be.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ke(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ze(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Be.nextNode(),a++)}return Be.currentNode=Te,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ke=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),De(e)?e===_||e==null||e===``?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Re&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ke(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&De(this._$AH)?this._$AA.nextSibling.data=e:this.T(Te.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ue.createElement(Ve(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ge(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new Ue(e)),t}k(t){Oe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ee()),this.O(Ee()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ve(e).nextSibling;ve(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=We(this,e,t,0),a=!De(e)||e!==this._$AH&&e!==Re,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=We(this,r[n+o],t,o),s===Re&&(s=this._$AH[o]),a||=!De(s)||s!==this._$AH[o],s===_?e=_:e!==_&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Je=class extends qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Ye=class extends qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Xe=class extends qe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=We(this,e,t,0)??_)===Re)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ze=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}},Qe={M:xe,P:Se,A:Ce,C:1,L:He,R:Ge,D:ke,V:We,I:Ke,H:qe,N:Ye,U:Xe,B:Je,F:Ze},$e=_e.litHtmlPolyfillSupport;$e?.(Ue,Ke),(_e.litHtmlVersions??=[]).push(`3.3.3`);var et=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ke(t.insertBefore(Ee(),e),e,void 0,n??{})}return i._$AI(e),i},tt=globalThis,nt=class extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};nt._$litElement$=!0,nt.finalized=!0,tt.litElementHydrateSupport?.({LitElement:nt});var rt=tt.litElementPolyfillSupport;rt?.({LitElement:nt}),(tt.litElementVersions??=[]).push(`4.2.2`);var it=h`
  :host {
    display: inline-flex;
  }

  .badge {
    /* Defines the used back- and foreground color for variants. Defaults to primary */
    --variant-color-text: var(--syn-badge-informative-color-text);
    --variant-color-background: var(--syn-badge-informative-color-background);

    align-items: center;
    background-color: var(--variant-color-background);
    border-radius: var(--syn-border-radius-pill);
    color: var(--variant-color-text);
    cursor: inherit;
    display: inline-flex;
    font: var(--syn-body-small-bold);
    height: var(--syn-spacing-large);
    justify-content: center;
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
  }

  /* Variant modifiers */
  .badge--success {
    --variant-color-background: var(--syn-badge-success-color-background);
    --variant-color-text: var(--syn-badge-success-color-text);
  }

  .badge--neutral {
    --variant-color-background: var(--syn-badge-neutral-color-background);
    --variant-color-text: var(--syn-badge-neutral-color-text);
  }

  .badge--warning {
    --variant-color-background: var(--syn-badge-warning-color-background);
    --variant-color-text: var(--syn-badge-warning-color-text);
  }

  .badge--critical {
    --variant-color-background: var(--syn-badge-critical-color-background);
    --variant-color-text: var(--syn-badge-critical-color-text);
  }

  /* @todo: Major: Remove .badge--danger */
  .badge--danger,
  .badge--error {
    --variant-color-background: var(--syn-badge-error-color-background);
    --variant-color-text: var(--syn-badge-error-color-text);
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
`,at={autoClamp:!1,noStepAlign:!1,noStepValidation:!1},ot={autoClamp:!0,noStepAlign:!0,noStepValidation:!0},st=(e={})=>({...at,...e}),ct={delimiter:{SynCombobox:` `,SynOption:` `,SynSelect:` `},numericStrategy:{SynInput:ot},size:{SynAccordion:`medium`,SynAlert:`medium`,SynButton:`medium`,SynButtonGroup:`medium`,SynCheckbox:`medium`,SynCheckboxGroup:`medium`,SynCombobox:`medium`,SynDetails:`medium`,SynFile:`medium`,SynIconButton:`inherit`,SynInput:`medium`,SynPagination:`medium`,SynRadio:`medium`,SynRadioButton:`medium`,SynRadioGroup:`medium`,SynRange:`medium`,SynSelect:`medium`,SynSwitch:`medium`,SynTag:`medium`,SynTagGroup:`medium`,SynTextarea:`medium`},variant:{SynAlert:`primary`,SynBadge:`primary`,SynButton:`outline`,SynButtonGroup:`outline`,SynPagination:`full`,SynSideNav:`default`,SynValidate:`native`}},lt={delimiter:{SynCombobox:` `,SynOption:` `,SynSelect:` `},numericStrategy:{SynInput:ot},size:{SynAccordion:`medium`,SynAlert:`medium`,SynButton:`medium`,SynButtonGroup:`medium`,SynCheckbox:`medium`,SynCheckboxGroup:`medium`,SynCombobox:`medium`,SynDetails:`medium`,SynFile:`medium`,SynIconButton:`inherit`,SynInput:`medium`,SynPagination:`medium`,SynRadio:`medium`,SynRadioButton:`medium`,SynRadioGroup:`medium`,SynRange:`medium`,SynSelect:`medium`,SynSwitch:`medium`,SynTag:`medium`,SynTagGroup:`medium`,SynTextarea:`medium`},variant:{SynAlert:`primary`,SynBadge:`primary`,SynButton:`outline`,SynButtonGroup:`outline`,SynPagination:`full`,SynSideNav:`default`,SynValidate:`native`}},ut=new Map,dt=new Set,ft=e=>{dt.has(e)&&dt.delete(e)},pt=(e,t=`default`)=>{let n=t==="default"?ct:lt;if(t==="default"){let t=ut.get(e);if(t!==void 0)return t}let r=Object.entries(n).reduce((t,[n,r])=>{let i=r[e];return i&&(t[n]=i),t},{});return t==="default"&&ut.set(e,r),r},mt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,gt=e=>{throw TypeError(e)},v=(e,t,n,r)=>{for(var i=r>1?void 0:r?ht(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&mt(t,n,i),i},_t=(e,t,n)=>t.has(e)||gt(`Cannot `+n),y=(e,t,n)=>(_t(e,t,`read from private field`),n?n.call(e):t.get(e)),vt=(e,t,n)=>t.has(e)?gt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),b=(e,t,n,r)=>(_t(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),x=(e,t,n)=>(_t(e,t,`access private method`),n);function S(e){return t=>{var n,r,i,a,o;return o=class extends t{constructor(...t){super(...t),vt(this,n,!1),vt(this,r,new Map),vt(this,i,[]),vt(this,a),this._isInitialized=!1,this._isInitialized=!0,b(this,a,pt(e,`initial`))}get __originalDecoratedClassName(){return e}overrideGlobalSettings(e){e.forEach(e=>{y(this,r).has(e.attribute)&&(this[e.attribute]=e.newValue)})}disconnectedCallback(){super.disconnectedCallback(),ft(this)}requestUpdate(e,t,r){super.requestUpdate(e,t,r),!(!this._isInitialized||y(this,n)||!e||!(e in y(this,a))||y(this,i)?.includes(e))&&y(this,i).push(e)}willUpdate(t){if(super.willUpdate(t),y(this,n))return;b(this,n,!0);let o=pt(e);Object.entries(o).forEach(([e,t])=>{let n=this[e];n===y(this,a)[e]&&!y(this,i).includes(e)&&(y(this,r).set(e,n),this[e]=t)}),y(this,r).size}},n=new WeakMap,r=new WeakMap,i=new WeakMap,a=new WeakMap,o}}var yt=new Set,bt=new Map,xt,St=`ltr`,Ct=`en`,wt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;function Tt(){wt&&(St=document.documentElement.dir||`ltr`,Ct=document.documentElement.lang||navigator.language),[...yt.keys()].forEach(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}if(wt){let e=new MutationObserver(Tt);St=document.documentElement.dir||`ltr`,Ct=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributeFilter:[`dir`,`lang`],attributes:!0})}function Et(...e){e.forEach(e=>{let t=e.$code.toLowerCase();bt.has(t)?bt.set(t,{...bt.get(t),...e}):bt.set(t,e),xt||=e}),Tt()}var Dt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){yt.add(this.host)}hostDisconnected(){yt.delete(this.host)}dir(){return`${this.host.dir||St}`.toLowerCase()}lang(){return`${this.host.lang||Ct}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=t?.region?.toLowerCase()??``;return{language:n,locale:t,primary:bt.get(`${n}-${r}`),region:r,secondary:bt.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang()),i={ignoreFallback:!1,...t};return!!(n&&n[e]||r&&r[e]||i.includeFallback&&xt&&xt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(xt&&xt[e])i=xt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){let n=new Date(e);return new Intl.DateTimeFormat(this.lang(),t).format(n)}number(e,t){let n=Number(e);return isNaN(n)?``:new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ot={$code:`en`,$name:`English`,$dir:`ltr`,clearEntry:`Clear entry`,close:`Close`,hidePassword:`Hide password`,loading:`Loading`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,progress:`Progress`,remove:`Remove`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,showPassword:`Show password`,closeMenu:`Close menu`,critical:`Critical`,danger:`Danger`,error:`Error`,fileButtonText:`Select file`,fileButtonTextMultiple:`Select files`,fileDragDrop:`Drop or select file`,folderButtonText:`Select folder`,folderDragDrop:`Drop or select folder`,menu:`Menu`,noResults:`No results found`,notification:`Notification`,numFilesSelected:(e,t)=>e===0?`No ${t?`folders`:`files`} chosen`:`${e} ${t?`folders`:`files`} chosen`,openMenu:`Open menu`,paginationFirstPage:`First page`,paginationInputLabel:`Select page`,paginationItemsPerPage:`Items per page`,paginationItemSummary:(e,t,n)=>`${e}-${t} of ${n} items`,paginationLastPage:`Last page`,paginationNextPage:`Next page`,paginationOfTotalPages:e=>`of ${e}`,paginationPreviousPage:`Previous page`,rangeMax:`Maximum`,rangeMin:`Minimum`,sideNav:`Page navigation`,sideNavHide:`Hide navigation`,sideNavShow:`Show navigation`,success:`Success`,warning:`Warning`};Et(Ot);var kt=Ot,C=class extends Dt{};Et(kt);var w=h`
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
`,At={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:me},jt=(e=At,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function T(e){return(t,n)=>typeof n==`object`?jt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function E(e){return T({...e,state:!0,attribute:!1})}function Mt(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}var Nt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function D(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Nt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Nt(n,r,{get(){return a(this)}})}}var Pt;function Ft(e){return(t,n)=>Nt(t,n,{get(){return(this.renderRoot??(Pt??=document.createDocumentFragment())).querySelectorAll(e)}})}function It(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return Nt(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter(e=>e.matches(i))}})}}var Lt,O=class extends nt{constructor(){super(),vt(this,Lt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){y(this,Lt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),b(this,Lt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Lt=new WeakMap,O.version=`3.22.1`,O.dependencies={},v([T()],O.prototype,`dir`,2),v([T()],O.prototype,`lang`,2);var Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=e=>(...t)=>({_$litDirective$:e,values:t}),Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},k=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Re}}),Vt=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.variant=`primary`}render(){return g`
      <span
        part="base"
        class=${k({badge:!0,"badge--critical":this.variant===`critical`,"badge--danger":this.variant===`danger`,"badge--error":this.variant===`error`,"badge--neutral":this.variant===`neutral`,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--warning":this.variant===`warning`})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant===`primary`||this.variant===`neutral`?`notification`:this.variant)}
          </span>
        </slot>
      </span>
    `}};Vt.styles=[w,it],v([T({reflect:!0})],Vt.prototype,`variant`,2),Vt=v([S(`SynBadge`)],Vt),Vt.define(`syn-badge`);var Ht=h`
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
    --variant-color-text: var(--syn-typography-color-text);

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
    color: var(--variant-color-text);
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
    color: var(--variant-color-text);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--size-icon-size);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Variant colors
   */
  .alert--success {
    --variant-color-border: var(--syn-alert-success-color-border);
    --variant-color-background: var(--syn-alert-success-color-background);
    --variant-color-icon: var(--syn-alert-success-color-icon);
    --variant-color-indicator: var(--syn-alert-success-color-indicator);
    --variant-color-text: var(--syn-alert-success-color-text);
  }

  .alert--neutral {
    --variant-color-border: var(--syn-alert-neutral-color-border);
    --variant-color-background: var(--syn-alert-neutral-color-background);
    --variant-color-icon: var(--syn-alert-neutral-color-icon);
    --variant-color-indicator: var(--syn-alert-neutral-color-indicator);
    --variant-color-text: var(--syn-alert-neutral-color-text);
  }

  .alert--warning {
    --variant-color-border: var(--syn-alert-warning-color-border);
    --variant-color-background: var(--syn-alert-warning-color-background);
    --variant-color-icon: var(--syn-alert-warning-color-icon);
    --variant-color-indicator: var(--syn-alert-warning-color-indicator);
    --variant-color-text: var(--syn-alert-warning-color-text);
  }

  .alert--critical {
    --variant-color-border: var(--syn-alert-critical-color-border);
    --variant-color-background: var(--syn-alert-critical-color-background);
    --variant-color-icon: var(--syn-alert-critical-color-icon);
    --variant-color-indicator: var(--syn-alert-critical-color-indicator);
    --variant-color-text: var(--syn-alert-critical-color-text);
  }

  /** TODO: Major: Remove .alert--danger */
  .alert--danger,
  .alert--error {
    --variant-color-border: var(--syn-alert-error-color-border);
    --variant-color-background: var(--syn-alert-error-color-background);
    --variant-color-icon: var(--syn-alert-error-color-icon);
    --variant-color-indicator: var(--syn-alert-error-color-indicator);
    --variant-color-text: var(--syn-alert-error-color-text);
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
`,Ut=e=>{let{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()},A=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`syn-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}};function Wt(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var Gt=h`
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
`,Kt=h`
  /* Write custom CSS here */
`,qt=h`
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
`,Jt=``;function Yt(e){Jt=e}function Xt(e=``){if(!Jt){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-synergy`));if(t)Yt(t.getAttribute(`data-synergy`));else{let t=e.find(e=>/synergy(\.min)?\.js($|\?)/.test(e.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),Yt(n.split(`/`).slice(0,-1).join(`/`))}}return Jt.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var Zt={name:`default`,resolver:e=>Xt(`assets/icons/${e}.svg`)},Qt={add:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.55 17.654-5.334-5.335 1.069-1.069 4.265 4.265 9.166-9.165 1.069 1.07z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 15.039 6.346 9.384 7.4 8.331l4.6 4.6 4.6-4.6 1.054 1.053z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,"details-close":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"details-open":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 12.75H5.5v-1.5h5.75V5.5h1.5v5.75h5.75v1.5h-5.75v5.75h-1.5z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12.002 15.577q1.7 0 2.888-1.19t1.187-2.89-1.19-2.886-2.89-1.188-2.886 1.19-1.188 2.89 1.19 2.887 2.89 1.187M12 14.2q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.788-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.913.787.787.788.787 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m.001 4.3q-3.45 0-6.285-1.903-2.837-1.904-4.177-5.097 1.34-3.194 4.175-5.097T12 4.5t6.286 1.903q2.836 1.904 4.177 5.097-1.341 3.195-4.176 5.097T12.001 18.5"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m19.762 21.87-4.046-4.016q-.77.285-1.705.465-.936.18-2.01.181-3.525 0-6.341-1.939-2.815-1.938-4.121-5.061.554-1.325 1.43-2.472A11.4 11.4 0 0 1 4.9 7.038l-2.77-2.8 1.055-1.053 17.63 17.63zM12 15.576q.314 0 .642-.054.33-.053.585-.158l-5.092-5.092q-.104.275-.158.599a4 4 0 0 0-.054.628q0 1.702 1.188 2.89 1.186 1.187 2.89 1.187m6.954.507-3.137-3.111q.118-.32.189-.684.07-.366.071-.789 0-1.702-1.187-2.89Q13.702 7.424 12 7.424q-.422 0-.779.076-.355.076-.684.228L8.035 5.235a10 10 0 0 1 1.936-.556q.99-.18 2.03-.179 3.514 0 6.34 1.939 2.824 1.938 4.12 5.061-.555 1.34-1.435 2.502a11 11 0 0 1-2.072 2.082m-4.27-4.234-3.009-3q.661-.124 1.25.098.586.223 1.012.663.435.44.636 1.033.202.593.112 1.206"/></svg>`,"first-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.25 17.75V6.25h1.5v11.5zM17 17.654 11.346 12 17 6.346 18.054 7.4l-4.6 4.6 4.6 4.6z"/></svg>`,indeterminate:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.5 12.75v-1.5h13v1.5z"/></svg>`,"last-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M7 17.654 5.946 16.6l4.6-4.6-4.6-4.6L7 6.346 12.654 12zm9.25.096V6.25h1.5v11.5z"/></svg>`,"logo-color":`<svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill='currentColor'><g clip-path="url(#a)"><path d="M166.39 0c17.638 0 32.976 9.895 40.876 24.493L188.19 34.788c-4.268-7.865-12.516-13.108-21.8-13.108-13.545 0-24.876 11.14-24.876 25.32s11.331 25.32 24.876 25.32c9.476 0 17.925-5.452 22.106-13.596l19.058 10.347C199.723 83.905 184.202 94 166.39 94c-25.713 0-46.556-21.044-46.556-47S140.677 0 166.39 0M56.85 1.673c12.543 0 21.498 9.389 21.498 21.296H26.436c-6.977.993-7.421 11.697 0 12.908H54.08c15.164.41 27.263 12.481 27.263 27.768 0 14.084-11.95 28.238-27.194 28.238H25.643c-12.134 0-25.495-6.55-25.495-21.758.151 0 46.601 0 54.011.009 7.9-1.577 7.02-11.541 0-12.917H26.436C11.68 57.217 0 44.622 0 29.614 0 15.182 10.792 1.673 26.436 1.673zm53.803 90.21H89.349V1.664h21.304zm126.48-90.219v36.182h8.292l22.402-36.182h26.497L263.795 47.35l30.085 44.534h-26.505L244.702 56.93h-7.569v34.953h-21.549V1.664z"/></g><defs><clipPath id="a"><path d="M0 0h295v94H0z"/></clipPath></defs></svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 17.635v-1.5h17v1.5zm0-4.885v-1.5h17v1.5zm0-4.885v-1.5h17v1.5z"/></svg>`,more:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.23 13.5q-.618 0-1.059-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.441-.44 1.06-.44.618 0 1.06.44.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m5.77 0q-.62 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.619.44-1.06.44-.44 1.06-.44.618 0 1.058.44.441.442.441 1.06t-.44 1.06q-.44.44-1.06.44"/></svg>`,"more-vert":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 19.27q-.619 0-1.06-.442a1.44 1.44 0 0 1-.44-1.059q0-.618.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06 0 .62-.44 1.06-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06t-.44 1.06q-.442.44-1.06.44m0-5.77q-.619 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.618.44-1.058.442-.441 1.06-.441t1.06.44q.44.44.44 1.06 0 .618-.44 1.06-.442.44-1.06.44"/></svg>`,"next-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m12.946 12-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654 8.346 16.6z"/></svg>`,placeholder:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3.5 20.5V13H5v6h6v1.5zm9.5 0V19h6v-6h1.5v7.5zm-6.25-3.75 2.48-3.289 2 2.558 2.809-3.653 3.288 4.384zM3.5 11V3.5H11V5H5v6zM19 11V5h-6V3.5h7.5V11zm-3.594-1.096q-.566 0-.938-.37a1.26 1.26 0 0 1-.372-.936q0-.566.37-.938t.936-.372.938.37q.371.37.372.936 0 .566-.37.938a1.26 1.26 0 0 1-.936.372"/></svg>`,"previous-page":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M14 17.654 8.346 12 14 6.346 15.054 7.4l-4.6 4.6 4.6 4.6z"/></svg>`,radio:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill='currentColor'><path d="M6 10.75a4.6 4.6 0 0 1-1.852-.374A4.8 4.8 0 0 1 2.64 9.361a4.8 4.8 0 0 1-1.016-1.508 4.6 4.6 0 0 1-.374-1.852q0-.986.374-1.853.375-.866 1.015-1.508.641-.641 1.508-1.016a4.6 4.6 0 0 1 1.852-.374q.986 0 1.853.374.867.375 1.508 1.015.642.641 1.016 1.508t.374 1.852-.374 1.853A4.8 4.8 0 0 1 9.361 9.36q-.642.642-1.508 1.016a4.6 4.6 0 0 1-1.852.374"/></svg>`,"status-critical":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 13.317h1.5V7.241h-1.5zm.75 2.385q.343 0 .576-.232a.78.78 0 0 0 .232-.576.78.78 0 0 0-.232-.575.78.78 0 0 0-.576-.233.78.78 0 0 0-.575.233.78.78 0 0 0-.233.575q0 .344.233.576a.78.78 0 0 0 .575.232m0 6.387L1.912 12 12 1.912 22.09 12zM12 20l8-8-8-8-8 8z"/></svg>`,"status-error":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 16.712q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575a.78.78 0 0 0 .576.233m-.75-3.481h1.5V7.192h-1.5zM8.461 20.5 3.5 15.543V8.462L8.457 3.5h7.082L20.5 8.457v7.082L15.543 20.5zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8z"/></svg>`,"status-informative":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 16.75h1.5V11h-1.5zM12 9.289q.343 0 .575-.233a.78.78 0 0 0 .233-.575.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.575A.78.78 0 0 0 12 9.29m.002 12.211a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-neutral":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.692 21.5-.38-3.046a5.3 5.3 0 0 1-1.579-.896L4.912 18.75l-2.308-4 2.44-1.844a5 5 0 0 1-.049-.448 7 7 0 0 1 0-.882q.014-.22.05-.482L2.603 9.25l2.308-3.98 2.811 1.182a6.4 6.4 0 0 1 .772-.524 5 5 0 0 1 .807-.382l.39-3.046h4.616l.38 3.056q.45.163.815.381t.735.515l2.85-1.183 2.308 3.981-2.479 1.873q.054.243.059.453t.005.424q0 .204-.01.415-.01.21-.069.481l2.46 1.854-2.308 4-2.815-1.202q-.372.296-.758.524a4.6 4.6 0 0 1-.793.372l-.38 3.056zM11 20h1.966l.359-2.679q.765-.2 1.399-.568.634-.369 1.222-.947l2.485 1.044.985-1.7-2.17-1.635q.125-.387.17-.761a6.3 6.3 0 0 0 0-1.508 4 4 0 0 0-.17-.742l2.189-1.654-.985-1.7-2.513 1.06a5.3 5.3 0 0 0-1.203-.949 5.2 5.2 0 0 0-1.418-.582L13 4h-1.985l-.33 2.67a5.2 5.2 0 0 0-1.414.553q-.648.374-1.237.962L5.55 7.15l-.984 1.7 2.159 1.61a3.7 3.7 0 0 0-.175.74 6.3 6.3 0 0 0 0 1.575q.05.375.165.74l-2.15 1.635.985 1.7 2.475-1.05q.57.585 1.217.958t1.433.573zm1.011-5q1.249 0 2.125-.876A2.9 2.9 0 0 0 15.012 12q0-1.248-.876-2.124A2.9 2.9 0 0 0 12.012 9q-1.264 0-2.132.876A2.9 2.9 0 0 0 9.01 12q0 1.248.869 2.124T12.01 15"/></svg>`,"status-success":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m10.58 16.254 6.724-6.723-1.054-1.054-5.67 5.67-2.85-2.85-1.053 1.053zm1.422 5.246a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"/></svg>`,"status-warning":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M1.865 20.5 12 3l10.135 17.5zM4.45 19h15.1L12 6zM12 17.808q.343 0 .575-.232a.78.78 0 0 0 .233-.576.78.78 0 0 0-.232-.576.78.78 0 0 0-.576-.232.78.78 0 0 0-.575.232.78.78 0 0 0-.233.576q0 .343.232.576a.78.78 0 0 0 .576.232m-.75-2.616h1.5v-5h-1.5z"/></svg>`,sticky_sidebar:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M9.5 19H19V5H9.5zm-6 1.5v-17h17v17z"/></svg>`,"tabs-left":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m7.373 12.75 5.696 5.696L12 19.5 4.5 12 12 4.5l1.07 1.054-5.697 5.696H19.5v1.5z"/></svg>`,"tabs-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M16.627 12.75H4.5v-1.5h12.127l-5.696-5.696L12 4.5l7.5 7.5-7.5 7.5-1.07-1.054z"/></svg>`,"upload-file":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M11.25 18.385h1.5V13.95l1.85 1.85 1.054-1.07L12 11.078l-3.654 3.654 1.07 1.053 1.834-1.834zM4.5 21.5v-19h9.75l5.25 5.25V21.5zm9-13V4H6v16h12V8.5z"/></svg>`,"x-circle-fill":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m8.4 16.654 3.6-3.6 3.6 3.6 1.054-1.054-3.6-3.6 3.6-3.6L15.6 7.346l-3.6 3.6-3.6-3.6L7.346 8.4l3.6 3.6-3.6 3.6zm3.602 4.846a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749"/></svg>`,"x-lg":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6.4 18.654 5.346 17.6l5.6-5.6-5.6-5.6L6.4 5.346l5.6 5.6 5.6-5.6L18.654 6.4l-5.6 5.6 5.6 5.6-1.054 1.054-5.6-5.6z"/></svg>`},$t=[Zt,{name:`system`,resolver:e=>e in Qt?Qt[e]:``}],en=[];function tn(e){en.push(e)}function nn(e){en=en.filter(t=>t!==e)}function rn(e){return $t.find(t=>t.name===e)}function an(e,t){on(e),$t.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),en.forEach(t=>{t.library===e&&t.setIcon()})}function on(e){$t=$t.filter(t=>t.name!==e)}function j(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var{I:sn}=Qe,cn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,ln=e=>e.strings===void 0,un={},dn=(e,t=un)=>e._$AH=t,fn=Symbol(),pn=Symbol(),mn,hn=new Map,M=class extends O{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=g`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return fn;n=new Response(e,{status:200})}else try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?fn:pn}catch{return pn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return fn;mn||=new DOMParser;let r=mn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):fn}catch{return fn}}connectedCallback(){super.connectedCallback(),tn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),nn(this)}getIconSource(){let e=rn(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?rn(this.library):void 0;if(!e){this.svg=null;return}let r=hn.get(e);if(r||(r=this.resolveIcon(e,n),hn.set(e,r)),!this.initialRender)return;let i=await r;if(i===pn&&hn.delete(e),e===this.getIconSource().url){if(cn(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case pn:case fn:this.svg=null,this.emit(`syn-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}};M.styles=[w,qt,Kt],v([E()],M.prototype,`svg`,2),v([T({reflect:!0})],M.prototype,`name`,2),v([T()],M.prototype,`src`,2),v([T()],M.prototype,`label`,2),v([T({reflect:!0})],M.prototype,`library`,2),v([j(`label`)],M.prototype,`handleLabelChange`,1),v([j([`name`,`src`,`library`])],M.prototype,`setIcon`,1);var gn=Symbol.for(``),_n=e=>{if(e?.r===gn)return e?._$litStatic$},vn=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:gn}),yn=new Map,bn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=_n(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=yn.get(e))===void 0&&(o.raw=o,yn.set(e,t=o)),n=s}return e(t,...n)})(g),N=e=>e??_,P=class extends O{constructor(){super(...arguments),this.hasFocus=!1,this.label=``,this.size=`inherit`,this.color=`currentColor`,this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?vn`a`:vn`button`;return bn`
      <${t}
        part="base"
        class=${k({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--large":this.size===`large`,"icon-button--medium":this.size===`medium`,"icon-button--small":this.size===`small`})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:`button`)}
        href=${N(e?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e&&this.target?`noreferrer noopener`:void 0)}
        role=${N(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          src=${N(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${t}>
    `}};P.styles=[w,Gt],P.dependencies={"syn-icon":M},v([D(`.icon-button`)],P.prototype,`button`,2),v([E()],P.prototype,`hasFocus`,2),v([T()],P.prototype,`name`,2),v([T()],P.prototype,`library`,2),v([T()],P.prototype,`src`,2),v([T()],P.prototype,`href`,2),v([T()],P.prototype,`target`,2),v([T()],P.prototype,`download`,2),v([T()],P.prototype,`label`,2),v([T({reflect:!0})],P.prototype,`size`,2),v([T({reflect:!0})],P.prototype,`color`,2),v([T({reflect:!0,type:Boolean})],P.prototype,`disabled`,2),P=v([S(`SynIconButton`)],P);function F(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function I(e,t,n){return new Promise(r=>{if(n?.duration===1/0)throw Error(`Promise-based animations must be finite.`);let i=e.animate(t,{...n,duration:Sn()?0:n.duration});i.addEventListener(`cancel`,r,{once:!0}),i.addEventListener(`finish`,r,{once:!0})})}function xn(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e):e.indexOf(`s`)>-1?parseFloat(e)*1e3:parseFloat(e)}function Sn(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function L(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function Cn(e,t){return e.map(e=>({...e,height:e.height===`auto`?`${t}px`:e.height}))}var wn=new Map,Tn=new WeakMap;function En(e){return e??{keyframes:[],options:{duration:0}}}function Dn(e,t){return t.toLowerCase()===`rtl`?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function R(e,t){wn.set(e,En(t))}function On(e,t,n){Tn.set(e,{...Tn.get(e),[t]:En(n)})}function z(e,t,n){let r=Tn.get(e);if(r?.[t])return Dn(r[t],n.dir);let i=wn.get(t);return i?Dn(i,n.dir):{keyframes:[],options:{duration:0}}}var B=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`icon`,`suffix`),this.localize=new C(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.size=`medium`}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`syn-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>{this.hide()},this.duration))}pauseAutoHide(){clearTimeout(this.autoHideTimeout)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>{this.hide()},this.duration))}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.duration<1/0&&this.restartAutoHide(),await L(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=z(this,`alert.show`,{dir:this.localize.dir()});await I(this.base,e,t),this.emit(`syn-after-show`)}else{Ut(this),this.emit(`syn-hide`),clearTimeout(this.autoHideTimeout),await L(this.base);let{keyframes:e,options:t}=z(this,`alert.hide`,{dir:this.localize.dir()});await I(this.base,e,t),this.base.hidden=!0,this.emit(`syn-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,F(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this,`syn-after-hide`)}async toast(){return new Promise(e=>{B.toastStack.parentElement===null&&document.body.append(B.toastStack),B.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`syn-after-hide`,()=>{B.toastStack.removeChild(this),e(),B.toastStack.querySelector(`syn-alert`)===null&&B.toastStack.remove()},{once:!0})})}render(){return g`
      <div
        part="base"
        class=${k({alert:!0,"alert--closable":this.closable,"alert--critical":this.variant===`critical`,"alert--danger":this.variant===`danger`,"alert--error":this.variant===`error`,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--large":this.size===`large`,"alert--medium":this.size===`medium`,"alert--neutral":this.variant===`neutral`,"alert--open":this.open,"alert--primary":this.variant===`primary`,"alert--small":this.size===`small`,"alert--success":this.variant===`success`,"alert--warning":this.variant===`warning`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?g`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></syn-icon-button>
            `:``}

      </div>
    `}};B.styles=[w,Ht],B.dependencies={"syn-icon-button":P},v([D(`[part~="base"]`)],B.prototype,`base`,2),v([T({reflect:!0,type:Boolean})],B.prototype,`open`,2),v([T({reflect:!0,type:Boolean})],B.prototype,`closable`,2),v([T({reflect:!0})],B.prototype,`variant`,2),v([T({type:Number})],B.prototype,`duration`,2),v([T({reflect:!0})],B.prototype,`size`,2),v([j(`open`,{waitUntilFirstUpdate:!0})],B.prototype,`handleOpenChange`,1),v([j(`duration`)],B.prototype,`handleDurationChange`,1),B=v([S(`SynAlert`)],B),R(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),R(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),B.define(`syn-alert`);var kn=h`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`,An=class extends O{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size=`medium`,this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(t=>{t!==e.target&&t.parentNode===e.target.parentNode&&t.removeAttribute(`open`)})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener(`syn-show`,this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`syn-show`,this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return g`
      <div 
        part="base"
        class=${k({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};An.styles=[w,kn],v([It({selector:`syn-details`})],An.prototype,`detailsInDefaultSlot`,2),v([T({attribute:`close-others`,type:Boolean})],An.prototype,`closeOthers`,2),v([T({reflect:!0,type:Boolean})],An.prototype,`contained`,2),v([T({reflect:!0})],An.prototype,`size`,2),v([j(`size`,{waitUntilFirstUpdate:!0})],An.prototype,`handleSizeChange`,1),v([j(`contained`,{waitUntilFirstUpdate:!0})],An.prototype,`handleContainedChange`,1),An=v([S(`SynAccordion`)],An),An.define(`syn-accordion`);var jn=h`
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
`,Mn=h`
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
`,Nn=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`prefix`,`suffix`),this.renderType=`button`,this.rel=`noreferrer noopener`}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`syn-dropdown`).length>0;if(this.href){this.renderType=`link`;return}if(e){this.renderType=`dropdown`;return}this.renderType=`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return g`
      <div
        part="base"
        class=${k({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test(`prefix`),"breadcrumb-item--has-suffix":this.hasSlotController.test(`suffix`)})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType===`link`?g`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${N(this.target?this.target:void 0)}"
                rel=${N(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:``}
        ${this.renderType===`button`?g`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:``}
        ${this.renderType===`dropdown`?g`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:``}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Nn.styles=[w,Mn,jn],v([D(`slot:not([name])`)],Nn.prototype,`defaultSlot`,2),v([E()],Nn.prototype,`renderType`,2),v([T()],Nn.prototype,`href`,2),v([T()],Nn.prototype,`target`,2),v([T()],Nn.prototype,`rel`,2),v([j(`href`,{waitUntilFirstUpdate:!0})],Nn.prototype,`hrefChanged`,1),Nn.define(`syn-breadcrumb-item`);var Pn=h`
  /* Write custom CSS here */
`,Fn=h`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,In=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.separatorDir=this.localize.dir(),this.label=``}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`syn-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),g`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}};In.styles=[w,Fn,Pn],In.dependencies={"syn-icon":M},v([D(`slot`)],In.prototype,`defaultSlot`,2),v([D(`slot[name="separator"]`)],In.prototype,`separatorSlot`,2),v([T()],In.prototype,`label`,2),In.define(`syn-breadcrumb`);var Ln=h`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;function Rn(e){let t=`syn-button, syn-radio-button`;return e.closest(t)??e.querySelector(t)}var zn=class extends O{constructor(){super(...arguments),this.disableRole=!1,this.label=``,this.size=`medium`,this.variant=`outline`}handleFocus(e){Rn(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!0)}handleBlur(e){Rn(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!1)}handleMouseOver(e){Rn(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!0)}handleMouseOut(e){Rn(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=Rn(t);r&&(r.size=this.size,r.tagName.toLowerCase()===`syn-button`&&(r.variant=this.variant),r.toggleAttribute(`data-syn-button-group__button`,!0),r.toggleAttribute(`data-syn-button-group__button--first`,n===0),r.toggleAttribute(`data-syn-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-syn-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-syn-button-group__button--radio`,r.tagName.toLowerCase()===`syn-radio-button`))})}firstUpdated(){let e=()=>{this.mutationObserver.observe(this,{attributeFilter:[`size`,`variant`],attributes:!0,subtree:!0})};this.mutationObserver=new MutationObserver(t=>{this.mutationObserver.disconnect();let n=t.some(e=>e.target===this),r=t.some(e=>e.target!==this);r&&t.filter(e=>e.target!==this).forEach(e=>{let t=e.target,n=Rn(t);n&&(n.size=void 0,n.tagName.toLowerCase()===`syn-button`&&(n.variant=void 0))}),(n||r)&&this.handleSlotChange(),this.updateComplete.then(()=>{e()})}),e()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}render(){return g`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};zn.styles=[w,Ln],v([D(`slot`)],zn.prototype,`defaultSlot`,2),v([E()],zn.prototype,`disableRole`,2),v([T()],zn.prototype,`label`,2),v([T({reflect:!0})],zn.prototype,`size`,2),v([T({reflect:!0})],zn.prototype,`variant`,2),zn=v([S(`SynButtonGroup`)],zn),zn.define(`syn-button-group`);var Bn=h`
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
`,Vn=h`
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
`,Hn=h`
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
`,Un=h`
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
`,Wn=class extends O{constructor(){super(...arguments),this.localize=new C(this)}render(){return g`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Wn.styles=[w,Un,Hn];var V=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new A(this,`[default]`,`prefix`,`suffix`),this.localize=new C(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`outline`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}get validity(){return this.isButton()?this.button.validity:o}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){let e=Wt(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),n=t.length===1&&t[0].tagName.toLowerCase()===`syn-icon`;this.iconOnly=n&&e===``}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?vn`a`:vn`button`;return bn`
      <${t}
        part="base"
        class=${k({button:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--filled":this.variant===`filled`,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`),"button--large":this.size===`large`,"button--loading":this.loading,"button--medium":this.size===`medium`,"button--outline":this.variant===`outline`,"button--primary":!0,"button--rtl":this.localize.dir()===`rtl`,"button--small":this.size===`small`,"button--text":this.variant===`text`})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:this.type)}
        title=${this.title}
        name=${N(e?void 0:this.name)}
        value=${N(e?void 0:this.value)}
        href=${N(e&&!this.disabled?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e?this.rel:void 0)}
        role=${N(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${k({"button__icon-only":this.iconOnly,button__label:!0})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?bn` <syn-icon part="caret" class="button__caret" library="system" name="chevron-down"></syn-icon> `:``}
        ${this.loading?bn`<syn-spinner part="spinner"></syn-spinner>`:``}
      </${t}>
    `}};V.styles=[w,Vn,Bn],V.dependencies={"syn-icon":M,"syn-spinner":Wn},v([D(`.button`)],V.prototype,`button`,2),v([D(`slot:not([name])`)],V.prototype,`defaultSlot`,2),v([E()],V.prototype,`iconOnly`,2),v([E()],V.prototype,`hasFocus`,2),v([E()],V.prototype,`invalid`,2),v([T({reflect:!0})],V.prototype,`title`,2),v([T({reflect:!0})],V.prototype,`variant`,2),v([T({reflect:!0})],V.prototype,`size`,2),v([T({reflect:!0,type:Boolean})],V.prototype,`caret`,2),v([T({reflect:!0,type:Boolean})],V.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],V.prototype,`loading`,2),v([T()],V.prototype,`type`,2),v([T()],V.prototype,`name`,2),v([T()],V.prototype,`value`,2),v([T()],V.prototype,`href`,2),v([T()],V.prototype,`target`,2),v([T()],V.prototype,`rel`,2),v([T()],V.prototype,`download`,2),v([T()],V.prototype,`form`,2),v([T({attribute:`formaction`})],V.prototype,`formAction`,2),v([T({attribute:`formenctype`})],V.prototype,`formEnctype`,2),v([T({attribute:`formmethod`})],V.prototype,`formMethod`,2),v([T({attribute:`formnovalidate`,type:Boolean})],V.prototype,`formNoValidate`,2),v([T({attribute:`formtarget`})],V.prototype,`formTarget`,2),v([j(`disabled`,{waitUntilFirstUpdate:!0})],V.prototype,`handleDisabledChange`,1),V=v([S(`SynButton`)],V),V.define(`syn-button`);var Gn=h`
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
`,Kn=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`footer`,`header`,`image`),this.shadow=!1,this.sharp=!1}render(){return g`
      <div
        part="base"
        class=${k({card:!0,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-header":this.hasSlotController.test(`header`),"card--has-image":this.hasSlotController.test(`image`),"card--shadow":this.shadow,"card--sharp":this.sharp})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Kn.styles=[w,Gn],v([T({reflect:!0,type:Boolean})],Kn.prototype,`shadow`,2),v([T({reflect:!0,type:Boolean})],Kn.prototype,`sharp`,2),Kn.define(`syn-card`);var qn=h`
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
`,Jn=h`
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
`,Yn=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`help-text`,`label`),this.label=``,this.helpText=``,this.size=`medium`,this.layout=`vertical`,this.form=``}handleSizeChange(){this.syncCheckboxes()}handleFormChange(){this.syncCheckboxes()}async syncCheckboxElements(){let e=this.getAllCheckboxes();await Promise.all(e.map(async e=>{await e.updateComplete;let t=e;t.size=this.size,t.form=this.form}))}syncCheckboxes(){let e=!!this.querySelector(`syn-checkbox`),t=!!this.querySelector(`syn-switch`),n=!!customElements.get(`syn-checkbox`),r=!!customElements.get(`syn-switch`);if((!e||n)&&(!t||r)){this.syncCheckboxElements().catch(()=>void 0);return}e&&!n&&customElements.whenDefined(`syn-checkbox`).then(()=>this.syncCheckboxes()).catch(()=>void 0),t&&!r&&customElements.whenDefined(`syn-switch`).then(()=>this.syncCheckboxes()).catch(()=>void 0)}getAllCheckboxes(){return[...this.querySelectorAll(`syn-checkbox, syn-switch`)]}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key))return;let t=this.getAllCheckboxes().filter(e=>!e.disabled&&!e.readonly);if(!t.length)return;let n=e.composedPath().find(e=>{if(!e||!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return t===`syn-checkbox`||t===`syn-switch`}),r=t.find(e=>e.checked),i=t.indexOf(n??r??t[0])+([`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1);i<0&&(i=t.length-1),i>t.length-1&&(i=0),t[i].focus(),e.preventDefault()}handleLabelClick(){this.focus()}focus(e){let t=this.getAllCheckboxes(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus({...e,focusVisible:!0})}firstUpdated(){this.syncCheckboxes()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return g`
      <fieldset
        part="form-control"
        class=${k({"form-control":!0,"form-control--checkbox-group":!0,"form-control--has-help-text":r,"form-control--has-label":n,"form-control--is-horizontal":this.layout===`horizontal`,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`})}
        aria-labelledby="label"
        aria-describedby="help-text"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
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
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Yn.styles=[w,Jn,qn],v([D(`slot:not([name])`)],Yn.prototype,`defaultSlot`,2),v([T()],Yn.prototype,`label`,2),v([T({attribute:`help-text`})],Yn.prototype,`helpText`,2),v([T({reflect:!0})],Yn.prototype,`size`,2),v([T({reflect:!0})],Yn.prototype,`layout`,2),v([T({reflect:!0})],Yn.prototype,`form`,2),v([j(`size`,{waitUntilFirstUpdate:!0})],Yn.prototype,`handleSizeChange`,1),v([j(`form`,{waitUntilFirstUpdate:!0})],Yn.prototype,`handleFormChange`,1),Yn=v([S(`SynCheckboxGroup`)],Yn),Yn.define(`syn-checkbox-group`);var Xn=h`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: inline-block;
  }

  .checkbox {
    --cb-font-size: var(--syn-input-font-size-medium);
    --toggle-size: var(--syn-toggle-size-medium);

    align-items: flex-start;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-size: var(--cb-font-size);
    font-weight: var(--syn-input-font-weight);
    padding: 0;
    position: relative;
    vertical-align: middle;
  }

  .checkbox--small {
    --cb-font-size: var(--syn-input-font-size-small);
    --toggle-size: var(--syn-toggle-size-small);
  }

  .checkbox--large {
    --cb-font-size: var(--syn-input-font-size-large);
    --toggle-size: var(--syn-toggle-size-large);
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
`,Zn=(e=`value`)=>(t,n)=>{let r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,a,o){let s=r.getPropertyOptions(e);if(t===(typeof s.attribute==`string`?s.attribute:e)){let t=s.converter||pe,r=(typeof t==`function`?t:t?.fromAttribute??pe.fromAttribute)(o,s.type);this[e]!==r&&(this[n]=r)}i.call(this,t,a,o)}},Qn=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.PROPERTY&&e.type!==Rt.ATTRIBUTE&&e.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ln(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Re||t===_)return t;let n=e.element,r=e.name;if(e.type===Rt.PROPERTY){if(t===n[r])return Re}else if(e.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Re}else if(e.type===Rt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Re;return dn(e),t}}),$n=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new A(this,`help-text`),this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.readonly=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(e){if(this.readonly){e.preventDefault();return}this.checked=!this.checked,this.indeterminate=!1,this.emit(`syn-change`)}handleBlur(){this.emit(`syn-blur`)}handleInput(){this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.emit(`syn-focus`)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return g`
      <div
        class=${k({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${k({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--readonly":this.readonly,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${N(this.value)}
            .indeterminate=${Qn(this.indeterminate)}
            .checked=${Qn(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?g`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:``}
            ${!this.checked&&this.indeterminate?g`
                  <syn-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></syn-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$n.styles=[w,Jn,Xn],$n.dependencies={"syn-icon":M},v([D(`input[type="checkbox"]`)],$n.prototype,`input`,2),v([T({reflect:!0})],$n.prototype,`title`,2),v([T()],$n.prototype,`name`,2),v([T()],$n.prototype,`value`,2),v([T({reflect:!0})],$n.prototype,`size`,2),v([T({type:Boolean,reflect:!0})],$n.prototype,`disabled`,2),v([T({type:Boolean,reflect:!0})],$n.prototype,`readonly`,2),v([T({type:Boolean,reflect:!0})],$n.prototype,`checked`,2),v([T({type:Boolean,reflect:!0})],$n.prototype,`indeterminate`,2),v([Zn(`checked`)],$n.prototype,`defaultChecked`,2),v([T({reflect:!0})],$n.prototype,`form`,2),v([T({type:Boolean,reflect:!0})],$n.prototype,`required`,2),v([T({attribute:`help-text`})],$n.prototype,`helpText`,2),v([j(`disabled`,{waitUntilFirstUpdate:!0})],$n.prototype,`handleDisabledChange`,1),v([j([`checked`,`indeterminate`],{waitUntilFirstUpdate:!0})],$n.prototype,`handleStateChange`,1),$n=v([S(`SynCheckbox`)],$n),$n.define(`syn-checkbox`);var er=h`
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
`;function*tr(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*tr(e.shadowRoot.activeElement)))}function nr(){return[...tr()].pop()}var rr=new WeakMap;function ir(e){let t=rr.get(e);return t||(t=window.getComputedStyle(e,null),rr.set(e,t)),t}function ar(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=ir(e);return t.visibility!==`hidden`&&t.display!==`none`}function or(e){let{overflowY:t,overflowX:n}=ir(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function sr(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return ar(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:or(e):!1}function cr(e){let t=ur(e);return{start:t[0]??null,end:t[t.length-1]??null}}function lr(e,t){return e.getRootNode({composed:!0})?.host!==t}function ur(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),!n.includes(i)&&sr(i)&&n.push(i),i instanceof HTMLSlotElement&&lr(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var dr=[],fr=class{constructor(e){this.tabDirection=`forward`,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{if(e.key!==`Tab`||this.isExternalActivated||!this.isActive())return;let t=nr();if(this.previousFocus=t,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;this.tabDirection=e.shiftKey?`backward`:`forward`;let n=ur(this.element),r=n.findIndex(e=>e===t);this.previousFocus=this.currentFocus;let i=this.tabDirection===`forward`?1:-1;for(;;){r+i>=n.length?r=0:r+i<0?r=n.length-1:r+=i,this.previousFocus=this.currentFocus;let t=n[r];if(this.tabDirection===`backward`&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||t&&this.possiblyHasTabbableChildren(t))return;e.preventDefault(),this.currentFocus=t,this.currentFocus?.focus({preventScroll:!1});let a=[...tr()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection=`forward`},this.element=e,this.elementsWithTabbableControls=[`iframe`]}activate(){dr.push(this.element),document.addEventListener(`focusin`,this.handleFocusIn),document.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keyup`,this.handleKeyUp)}deactivate(){dr=dr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener(`focusin`,this.handleFocusIn),document.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keyup`,this.handleKeyUp)}isActive(){return dr[dr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=ur(this.element);if(!(()=>{let e=document.activeElement;for(;e;){if(this.element.contains(e))return!0;let t=e.shadowRoot;e=t?t.activeElement:null}return!1})()){let t=e[0],n=e[e.length-1],r=this.tabDirection===`forward`?t:n;typeof r?.focus==`function`&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute(`controls`)}};function pr(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var mr=new Set;function hr(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function gr(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function _r(e){if(mr.add(e),!document.documentElement.classList.contains(`syn-scroll-lock`)){let e=hr()+gr(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--syn-scroll-lock-gutter`,t),document.documentElement.classList.add(`syn-scroll-lock`),document.documentElement.style.setProperty(`--syn-scroll-lock-size`,`${e}px`)}}function vr(e){mr.delete(e),mr.size===0&&(document.documentElement.classList.remove(`syn-scroll-lock`),document.documentElement.style.removeProperty(`--syn-scroll-lock-size`))}function yr(e,t,n=`vertical`,r=`smooth`){let i=pr(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var br=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`footer`),this.localize=new C(this),this.modal=new fr(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),_r(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),vr(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=z(this,`dialog.denyClose`,{dir:this.localize.dir()});I(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),_r(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([L(this.dialog),L(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=z(this,`dialog.show`,{dir:this.localize.dir()}),n=z(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([I(this.panel,t.keyframes,t.options),I(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{Ut(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([L(this.dialog),L(this.overlay)]);let e=z(this,`dialog.hide`,{dir:this.localize.dir()}),t=z(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([I(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),I(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,vr(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}async show(){if(!this.open)return this.open=!0,F(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this,`syn-after-hide`)}render(){return g`
      <div
        part="base"
        class=${k({dialog:!0,"dialog--has-footer":this.hasSlotController.test(`footer`),"dialog--open":this.open})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:g`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></syn-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};br.styles=[w,er],br.dependencies={"syn-icon-button":P},v([D(`.dialog`)],br.prototype,`dialog`,2),v([D(`.dialog__panel`)],br.prototype,`panel`,2),v([D(`.dialog__overlay`)],br.prototype,`overlay`,2),v([T({reflect:!0,type:Boolean})],br.prototype,`open`,2),v([T({reflect:!0})],br.prototype,`label`,2),v([T({attribute:`no-header`,reflect:!0,type:Boolean})],br.prototype,`noHeader`,2),v([j(`open`,{waitUntilFirstUpdate:!0})],br.prototype,`handleOpenChange`,1),R(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),R(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),R(`dialog.denyClose`,{keyframes:[{offset:0,transform:`translateX(0)`},{offset:.32,transform:`translateX(calc(var(--syn-spacing-x-small) * -1))`},{offset:.6,transform:`translateX(var(--syn-spacing-2x-small))`},{offset:.82,transform:`translateX(calc(var(--syn-spacing-3x-small) * -1))`},{offset:1,transform:`translateX(0)`}],options:{duration:250,easing:`cubic-bezier(0.25, 0.1, 0.25, 1)`}}),R(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),R(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),br.define(`syn-dialog`);var xr=h`
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
`,Sr=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size=`medium`}firstUpdated(){this.body.style.height=this.open?`auto`:`0`,this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit(`syn-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await L(this.body);let{keyframes:e,options:t}=z(this,`details.show`,{dir:this.localize.dir()});await I(this.body,Cn(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.emit(`syn-after-show`)}else{if(this.emit(`syn-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await L(this.body);let{keyframes:e,options:t}=z(this,`details.hide`,{dir:this.localize.dir()});await I(this.body,Cn(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.details.open=!1,this.emit(`syn-after-hide`)}}async show(){if(!(this.open||this.disabled))return this.open=!0,F(this,`syn-after-show`)}async hide(){if(!(!this.open||this.disabled))return this.open=!1,F(this,`syn-after-hide`)}render(){return g`
      <details
        part="base"
        class=${k({details:!0,"details--size-small":this.size===`small`,"details--size-medium":this.size===`medium`,"details--size-large":this.size===`large`,"details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="content"
          aria-disabled=${this.disabled?`true`:`false`}
          tabindex=${this.disabled?`-1`:`0`}
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
    `}};Sr.styles=[w,xr],Sr.dependencies={"syn-icon":M},v([D(`.details`)],Sr.prototype,`details`,2),v([D(`.details__header`)],Sr.prototype,`header`,2),v([D(`.details__body`)],Sr.prototype,`body`,2),v([D(`.details__expand-icon-slot`)],Sr.prototype,`expandIconSlot`,2),v([T({type:Boolean,reflect:!0})],Sr.prototype,`open`,2),v([T()],Sr.prototype,`summary`,2),v([T({type:Boolean,reflect:!0})],Sr.prototype,`disabled`,2),v([T({type:Boolean,reflect:!0})],Sr.prototype,`contained`,2),v([T({reflect:!0})],Sr.prototype,`size`,2),v([j(`open`,{waitUntilFirstUpdate:!0})],Sr.prototype,`handleOpenChange`,1),Sr=v([S(`SynDetails`)],Sr),R(`details.show`,{keyframes:[{height:`0`,opacity:`0`},{height:`auto`,opacity:`1`}],options:{duration:250,easing:`linear`}}),R(`details.hide`,{keyframes:[{height:`auto`,opacity:`1`},{height:`0`,opacity:`0`}],options:{duration:250,easing:`linear`}}),Sr.define(`syn-details`);var Cr=class extends Bt{constructor(e){if(super(e),this.it=_,e.type!==Rt.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===Re)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Cr.directiveName=`unsafeHTML`,Cr.resultType=1;var wr=zt(Cr),Tr=e=>Array.from(e.assignedElements({flatten:!0})),Er=e=>e.tagName.toLocaleLowerCase()===`syn-option`?e:Array.from(e.querySelectorAll(`:scope > syn-option`)),Dr=e=>e.tagName.toLocaleLowerCase()===`syn-optgroup`,Or=e=>e.map(Er),kr=e=>e.filter(Dr),Ar=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),jr=e=>{let t=document.createElement(`div`);return et(e,t),t.firstElementChild},Mr=e=>e.tagName.toLocaleLowerCase()===`syn-option`?e:void 0,Nr=e=>{if(e){if(e instanceof HTMLElement)return Mr(e);if(typeof e==`string`)return Mr(jr(g`${wr(e)}`));if(Object.prototype.hasOwnProperty.call(e,`_$litType$`))return Mr(jr(e))}},Pr=e=>{let{value:t}=e;return t==null||t===``?e.getTextLabel():t},Fr=e=>e.map(Pr),Ir=(e,t)=>{if(!t||e==null||e===``)return!1;let n=t.value,r=t.getTextLabel();return String(e)===String(n)||String(e)===r},Lr=h`
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
`,Rr=h`
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

  ${Lr}
`,zr=e=>e,Br=h`
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
`,Vr=(e,t)=>{let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),r=new RegExp(n,`g`);return e.replace(r,`_`)},Hr=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.originalValue=``,this.isInitialized=!1,this.delimiter=` `,this.current=!1,this.selected=!1,this.hasHover=!1,this.value=``,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?this.triggerParentDefaultSlotChange():this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleDelimiterChange(){this.sanitizeValueForDelimiter()}handleValueChange(){this.originalValue=this.value,this.sanitizeValueForDelimiter()}sanitizeValueForDelimiter(){let e=this.originalValue;if(typeof e==`number`)return;typeof e!=`string`&&(e=String(e));let{delimiter:t}=this;e.includes(t)&&(console.error(`Option values cannot include "${t}". All occurrences of "${t}" have been replaced with "_".`,this),e=Vr(e,this.delimiter)),this.value=e,this.triggerParentDefaultSlotChange()}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}triggerParentDefaultSlotChange(){customElements.whenDefined(`syn-combobox`).then(()=>{let e=this.closest(`syn-combobox`);e&&e.handleDefaultSlotChange()}),customElements.whenDefined(`syn-select`).then(()=>{let e=this.closest(`syn-select`);e&&e.handleDefaultSlotChange()})}render(){return g`
      <div
        part="base"
        class=${k({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Hr.styles=[w,Br],Hr.dependencies={"syn-icon":M},v([D(`.option__label`)],Hr.prototype,`defaultSlot`,2),v([E()],Hr.prototype,`delimiter`,2),v([E()],Hr.prototype,`current`,2),v([E()],Hr.prototype,`selected`,2),v([E()],Hr.prototype,`hasHover`,2),v([T({reflect:!0})],Hr.prototype,`value`,2),v([T({type:Boolean,reflect:!0})],Hr.prototype,`disabled`,2),v([j(`disabled`)],Hr.prototype,`handleDisabledChange`,1),v([j(`selected`)],Hr.prototype,`handleSelectedChange`,1),v([j(`delimiter`)],Hr.prototype,`handleDelimiterChange`,1),v([j(`value`)],Hr.prototype,`handleValueChange`,1),Hr=v([S(`SynOption`)],Hr);var Ur=e=>Array.isArray(e)||typeof e==`string`?e.length>0:typeof e==`number`||!!e,Wr=(e,t)=>Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e===t,Gr=h`
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
`,Kr=h`
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

  
`,qr=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.size=`medium`,this.removable=!1}handleRemoveClick(){this.emit(`syn-remove`)}render(){return g`
      <span
        part="base"
        class=${k({tag:!0,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?g`
              <syn-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></syn-icon-button>
            `:``}
      </span>
    `}};qr.styles=[w,Kr,Gr],qr.dependencies={"syn-icon-button":P},v([T({reflect:!0})],qr.prototype,`size`,2),v([T({type:Boolean})],qr.prototype,`removable`,2),qr=v([S(`SynTag`)],qr);var Jr=h`
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
`,Yr=Math.min,Xr=Math.max,Zr=Math.round,Qr=Math.floor,$r=e=>({x:e,y:e}),ei={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ti(e,t,n){return Xr(e,Yr(t,n))}function ni(e,t){return typeof e==`function`?e(t):e}function ri(e){return e.split(`-`)[0]}function ii(e){return e.split(`-`)[1]}function ai(e){return e===`x`?`y`:`x`}function oi(e){return e===`y`?`height`:`width`}function si(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function ci(e){return ai(si(e))}function li(e,t,n){n===void 0&&(n=!1);let r=ii(e),i=ci(e),a=oi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=vi(o)),[o,vi(o)]}function ui(e){let t=vi(e);return[di(e),t,di(t)]}function di(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var fi=[`left`,`right`],pi=[`right`,`left`],mi=[`top`,`bottom`],hi=[`bottom`,`top`];function gi(e,t,n){switch(e){case`top`:case`bottom`:return n?t?pi:fi:t?fi:pi;case`left`:case`right`:return t?mi:hi;default:return[]}}function _i(e,t,n,r){let i=ii(e),a=gi(ri(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(di)))),a}function vi(e){let t=ri(e);return ei[t]+e.slice(t.length)}function yi(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function bi(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:yi(e)}function xi(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Si(e,t,n){let{reference:r,floating:i}=e,a=si(t),o=ci(t),s=oi(o),c=ri(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=ii(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Ci(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=ni(t,e),p=bi(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=xi(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),ee=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,te=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),ne=await(i.isElement==null?void 0:i.isElement(te))&&await(i.getScale==null?void 0:i.getScale(te))||{x:1,y:1},re=xi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:ee,offsetParent:te,strategy:s}):ee);return{top:(h.top-re.top+p.top)/ne.y,bottom:(re.bottom-h.bottom+p.bottom)/ne.y,left:(h.left-re.left+p.left)/ne.x,right:(re.right-h.right+p.right)/ne.x}}var wi=50,Ti=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ci},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Si(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:ee,fn:te}=h,{x:ne,y:re,data:ie,reset:ae}=await te({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=ne??u,d=re??d,m[ee]={...m[ee],...ie},ae&&p<wi&&(p++,typeof ae==`object`&&(ae.placement&&(f=ae.placement),ae.rects&&(l=ae.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):ae.rects),{x:u,y:d}=Si(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ei=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=ni(e,t)||{};if(l==null)return{};let d=bi(u),f={x:n,y:r},p=ci(i),m=oi(p),h=await o.getDimensions(l),ee=p===`y`,te=ee?`top`:`left`,ne=ee?`bottom`:`right`,re=ee?`clientHeight`:`clientWidth`,ie=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ae=f[p]-a.reference[p],oe=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),se=oe?oe[re]:0;(!se||!await(o.isElement==null?void 0:o.isElement(oe)))&&(se=s.floating[re]||a.floating[m]);let ce=ie/2-ae/2,le=se/2-h[m]/2-1,ue=Yr(d[te],le),de=Yr(d[ne],le),fe=se-h[m]-de,pe=se/2-h[m]/2+ce,me=ti(ue,pe,fe),he=!c.arrow&&ii(i)!=null&&pe!==me&&a.reference[m]/2-(pe<ue?ue:de)-h[m]/2<0,ge=he?pe<ue?pe-ue:pe-fe:0;return{[p]:f[p]+ge,data:{[p]:me,centerOffset:pe-me-ge,...he&&{alignmentOffset:ge}},reset:he}}}),Di=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=ni(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let ee=ri(r),te=si(o),ne=ri(o)===o,re=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ie=d||(ne||!m?[vi(o)]:ui(o)),ae=p!==`none`;!d&&ae&&ie.push(..._i(o,m,p,re));let oe=[o,...ie],se=await s.detectOverflow(t,h),ce=[],le=i.flip?.overflows||[];if(l&&ce.push(se[ee]),u){let e=li(r,a,re);ce.push(se[e[0]],se[e[1]])}if(le=[...le,{placement:r,overflows:ce}],!ce.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=oe[e];if(t&&(u!==`alignment`||te===si(t)||le.every(e=>si(e.placement)!==te||e.overflows[0]>0)))return{data:{index:e,overflows:le},reset:{placement:t}};let n=le.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=le.filter(e=>{if(ae){let t=si(e.placement);return t===te||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Oi=new Set([`left`,`top`]);async function ki(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ri(n),s=ii(n),c=si(n)===`y`,l=Oi.has(o)?-1:1,u=a&&c?-1:1,d=ni(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Ai=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await ki(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},ji=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=ni(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=si(i),p=ai(f),m=u[p],h=u[f],ee=(e,t)=>ti(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=ee(p,m)),s&&(h=ee(f,h));let te=c.fn({...t,[p]:m,[f]:h});return{...te,data:{x:te.x-n,y:te.y-r,enabled:{[p]:o,[f]:s}}}}}},Mi=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=ni(e,t),c=await i.detectOverflow(t,s),l=ri(n),u=ii(n),d=si(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let ee=p-c.top-c.bottom,te=f-c.left-c.right,ne=Yr(p-c[m],ee),re=Yr(f-c[h],te),ie=t.middlewareData.shift,ae=!ie,oe=ne,se=re;ie!=null&&ie.enabled.x&&(se=te),ie!=null&&ie.enabled.y&&(oe=ee),ae&&!u&&(d?se=f-2*Xr(c.left,c.right):oe=p-2*Xr(c.top,c.bottom)),await o({...t,availableWidth:se,availableHeight:oe});let ce=await i.getDimensions(a.floating);return f!==ce.width||p!==ce.height?{reset:{rects:!0}}:{}}}};function Ni(){return typeof window<`u`}function Pi(e){return Li(e)?(e.nodeName||``).toLowerCase():`#document`}function Fi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ii(e){return((Li(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Li(e){return Ni()?e instanceof Node||e instanceof Fi(e).Node:!1}function Ri(e){return Ni()?e instanceof Element||e instanceof Fi(e).Element:!1}function zi(e){return Ni()?e instanceof HTMLElement||e instanceof Fi(e).HTMLElement:!1}function Bi(e){return!Ni()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Fi(e).ShadowRoot}function Vi(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Qi(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Hi(e){return/^(table|td|th)$/.test(Pi(e))}function Ui(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Wi=/transform|translate|scale|rotate|perspective|filter/,Gi=/paint|layout|strict|content/,Ki=e=>!!e&&e!==`none`,qi;function Ji(e){let t=Ri(e)?Qi(e):e;return Ki(t.transform)||Ki(t.translate)||Ki(t.scale)||Ki(t.rotate)||Ki(t.perspective)||!Xi()&&(Ki(t.backdropFilter)||Ki(t.filter))||Wi.test(t.willChange||``)||Gi.test(t.contain||``)}function Yi(e){let t=ea(e);for(;zi(t)&&!Zi(t);){if(Ji(t))return t;if(Ui(t))return null;t=ea(t)}return null}function Xi(){return qi??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),qi}function Zi(e){return/^(html|body|#document)$/.test(Pi(e))}function Qi(e){return Fi(e).getComputedStyle(e)}function $i(e){return Ri(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ea(e){if(Pi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Bi(e)&&e.host||Ii(e);return Bi(t)?t.host:t}function ta(e){let t=ea(e);return Zi(t)?(e.ownerDocument||e).body:zi(t)&&Vi(t)?t:ta(t)}function na(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ta(e),i=r===e.ownerDocument?.body,a=Fi(r);if(i){let e=ra(a);return t.concat(a,a.visualViewport||[],Vi(r)?r:[],e&&n?na(e):[])}return t.concat(r,na(r,[],n))}function ra(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ia(e){let t=Qi(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=zi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Zr(n)!==a||Zr(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function aa(e){return Ri(e)?e:e.contextElement}function oa(e){let t=aa(e);if(!zi(t))return $r(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ia(t),o=(a?Zr(n.width):n.width)/r,s=(a?Zr(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var sa=$r(0);function ca(e){let t=Fi(e);return!Xi()||!t.visualViewport?sa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function la(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Fi(e)}function ua(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=aa(e),o=$r(1);t&&(r?Ri(r)&&(o=oa(r)):o=oa(e));let s=la(a,n,r)?ca(a):$r(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Fi(a),t=Ri(r)?Fi(r):r,n=e,i=ra(n);for(;i&&t!==n;){let e=oa(i),t=i.getBoundingClientRect(),r=Qi(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Fi(i),i=ra(n)}}return xi({width:u,height:d,x:c,y:l})}function da(e,t){let n=$i(e).scrollLeft;return t?t.left+n:ua(Ii(e)).left+n}function fa(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-da(e,n),y:n.top+t.scrollTop}}function pa(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ii(r),s=t?Ui(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=$r(1),u=$r(0),d=zi(r);if((d||!a)&&((Pi(r)!==`body`||Vi(o))&&(c=$i(r)),d)){let e=ua(r);l=oa(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?fa(o,c):$r(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ma(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ha(e){let t=$i(e),n=e.ownerDocument.body,r=Xr(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Xr(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+da(e),o=-t.scrollTop;return Qi(n).direction===`rtl`&&(a+=Xr(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var ga=25;function _a(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Fi(e),a=Ii(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Xi()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(da(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=ga&&(s-=o)}return{width:s,height:c,x:l,y:u}}function va(e,t){let n=ua(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=oa(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ya(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=_a(e,n,t);else if(t===`document`)r=ha(Ii(e));else if(Ri(t))r=va(t,n);else{let n=ca(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return xi(r)}function ba(e,t){let n=t.get(e);if(n)return n;let r=na(e,[],!1).filter(e=>Ri(e)&&Pi(e)!==`body`),i=null,a=Qi(e).position===`fixed`,o=a?ea(e):e;for(;Ri(o)&&!Zi(o);){let e=Qi(o),t=Ji(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=ea(o)}return t.set(e,r),r}function xa(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ui(t)?[]:ba(t,this._c):[].concat(n),r],o=ya(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ya(t,a[e],i);s=Xr(n.top,s),c=Yr(n.right,c),l=Yr(n.bottom,l),u=Xr(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Sa(e){let{width:t,height:n}=ia(e);return{width:t,height:n}}function Ca(e,t,n){let r=zi(t),i=Ii(t),a=n===`fixed`,o=ua(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=$r(0);if((r||!a)&&((Pi(t)!==`body`||Vi(i))&&(s=$i(t)),r)){let e=ua(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=da(i));let l=i&&!r&&!a?fa(i,s):$r(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function wa(e){return Qi(e).position===`static`}function Ta(e,t){if(!zi(e)||Qi(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ii(e)===n&&(n=n.ownerDocument.body),n}function Ea(e,t){let n=Fi(e);if(Ui(e))return n;if(!zi(e)){let t=ea(e);for(;t&&!Zi(t);){if(Ri(t)&&!wa(t))return t;t=ea(t)}return n}let r=Ta(e,t);for(;r&&Hi(r)&&wa(r);)r=Ta(r,t);return r&&Zi(r)&&wa(r)&&!Ji(r)?n:r||Yi(e)||n}var Da=async function(e){let t=this.getOffsetParent||Ea,n=this.getDimensions,r=await n(e.floating);return{reference:Ca(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Oa(e){return Qi(e).direction===`rtl`}var ka={convertOffsetParentRelativeRectToViewportRelativeRect:pa,getDocumentElement:Ii,getClippingRect:xa,getOffsetParent:Ea,getElementRects:Da,getClientRects:ma,getDimensions:Sa,getScale:oa,isElement:Ri,isRTL:Oa};function Aa(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ja(e,t,n){let r=null,i,a=Ii(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Qr(d),h=Qr(a.clientWidth-(u+f)),ee=Qr(a.clientHeight-(d+p)),te=Qr(u),ne={rootMargin:-m+`px `+-h+`px `+-ee+`px `+-te+`px`,threshold:Xr(0,Yr(1,c))||1},re=!0;function ie(t){let n=t[0].intersectionRatio;if(!Aa(l,e.getBoundingClientRect()))return s();if(n!==c){if(!re)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}re=!1}try{r=new IntersectionObserver(ie,{...ne,root:a.ownerDocument})}catch{r=new IntersectionObserver(ie,ne)}r.observe(e)}let c=Fi(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Ma(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=aa(e),u=i||a?[...l?na(l):[],...t?na(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ja(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ua(e):null;c&&ee();function ee(){let t=ua(e);h&&!Aa(h,t)&&n(),h=t,m=requestAnimationFrame(ee)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Na=Ai,Pa=ji,Fa=Di,Ia=Mi,La=Ei,Ra=(e,t,n)=>{let r=new Map,i=n??{},a={...ka,...i.platform,_c:r};return Ti(e,t,{...i,platform:a})};function za(e){return Va(e)}function Ba(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Va(e){for(let t=e;t;t=Ba(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ba(e);t;t=Ba(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Ji(e)||t.tagName===`BODY`))return t}return null}var Ha=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`);function Ua(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var H=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.active=!1,this.placement=`top`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Ua(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(Ha&&this.popup.showPopover?.(),this.cleanup=Ma(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{Ha&&this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[Na({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ia({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``),this.flip&&e.push(Fa({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Pa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ia({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(La({element:this.arrowEl,padding:this.arrowPadding}));let t=Ha?e=>ka.getOffsetParent(e,za):ka.getOffsetParent;Ra(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Ha?`absolute`:`fixed`,platform:{...ka,getOffsetParent:t}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`syn-reposition`)}render(){return g`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${k({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        popover=${N(Ha?`manual`:void 0)}
        class=${k({popup:!0,"popup--active":this.active,"popup--fixed":!Ha,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?g`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};H.styles=[w,Jr],v([D(`.popup`)],H.prototype,`popup`,2),v([D(`.popup__arrow`)],H.prototype,`arrowEl`,2),v([T()],H.prototype,`anchor`,2),v([T({type:Boolean,reflect:!0})],H.prototype,`active`,2),v([T({reflect:!0})],H.prototype,`placement`,2),v([T({type:Number})],H.prototype,`distance`,2),v([T({type:Number})],H.prototype,`skidding`,2),v([T({type:Boolean})],H.prototype,`arrow`,2),v([T({attribute:`arrow-placement`})],H.prototype,`arrowPlacement`,2),v([T({attribute:`arrow-padding`,type:Number})],H.prototype,`arrowPadding`,2),v([T({type:Boolean})],H.prototype,`flip`,2),v([T({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],H.prototype,`flipFallbackPlacements`,2),v([T({attribute:`flip-fallback-strategy`})],H.prototype,`flipFallbackStrategy`,2),v([T({type:Object})],H.prototype,`flipBoundary`,2),v([T({attribute:`flip-padding`,type:Number})],H.prototype,`flipPadding`,2),v([T({type:Boolean})],H.prototype,`shift`,2),v([T({type:Object})],H.prototype,`shiftBoundary`,2),v([T({attribute:`shift-padding`,type:Number})],H.prototype,`shiftPadding`,2),v([T({attribute:`auto-size`})],H.prototype,`autoSize`,2),v([T()],H.prototype,`sync`,2),v([T({type:Object})],H.prototype,`autoSizeBoundary`,2),v([T({attribute:`auto-size-padding`,type:Number})],H.prototype,`autoSizePadding`,2),v([T({attribute:`hover-bridge`,type:Boolean})],H.prototype,`hoverBridge`,2);var U=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new A(this,`help-text`,`label`),this.localize=new C(this),this.lastOptions=[],this.isInitialized=!1,this.isOptionRendererTriggered=!1,this.hasFocus=!1,this.isUserInput=!1,this.displayLabel=``,this.selectedOptions=[],this.numberFilteredOptions=0,this.cachedOptions=[],this.valueHasChanged=!1,this.hideOptions=!1,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.restricted=!1,this.multiple=!1,this.getOption=zr,this.filter=(e,t)=>{let n=e?.textContent||``;e instanceof Hr&&(n=e.getTextLabel());let r=Ar(n),i=Ar(t);return r.includes(i)?!0:e?.value?.toString()===t},this.delimiter=` `,this.maxOptionsVisible=3,this.getTag=e=>g`
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
      @syn-remove=${t=>this.handleTagRemove(t,e)}
    >
      ${e.getTextLabel()}
    </syn-tag>
  `,this.calculateTagMaxWidth=e=>{let t=e.at(0);if(!t||!this.tagContainer)return;let n=t.contentRect.width,r=this.tagContainer.getBoundingClientRect().width,i=Math.max(85,r+n-48);this.tagContainer.style.setProperty(`--syn-select-tag-max-width`,`${i}px`)},this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{if(e.target.closest(`.combobox__clear`)===null){if(e.key===`Escape`&&(this.open&&!this.closeWatcher?(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||(this.multiple?this.clearInputField():this.clearCombobox())),e.key===`Enter`){let t=this.getCurrentOption(),n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;if(!this.open&&!n){setTimeout(()=>{e.defaultPrevented||this.formControlController.submit()});return}if(!this.open||t&&t.disabled)return;if(t){this.isUserInput=!0,this.valueHasChanged=!0;let e=this.lastOptions?Fr(this.lastOptions):[];this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.selectionChanged();let n=Array.isArray(this.value)?this.value:[this.value];this.updateComplete.then(()=>{this.isUserInput=!1}),Wr(e,n)||this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)})}this.multiple||this.hide(),this.displayInput.focus({preventScroll:!0});return}[`ArrowUp`,`ArrowDown`].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),this.open||this.show(),this.selectNextOption(e.key===`ArrowDown`)),[`Home`,`End`].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),e.key===`Home`?this.displayInput.setSelectionRange(0,0):e.key===`End`&&this.displayInput.setSelectionRange(this.displayLabel.length,this.displayLabel.length))}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?Array.isArray(e)||(e=typeof e==`string`?e.split(this.delimiter):[e].filter(Ur)):e=Array.isArray(e)?e.join(this.delimiter):e,!Wr(this._value,e)&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver||=new ResizeObserver(this.calculateTagMaxWidth),this.resizeObserver.observe(this.displayInput))}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{let t=e.some(e=>{if(!(e.target instanceof Hr)||e.type!==`attributes`||e.attributeName!==`value`)return!1;let t=e.target.getAttribute(`value`);return e.oldValue!==t&&!!t}),n=(this.restricted||this.multiple)&&e.some(e=>e.type!==`characterData`&&e.type!==`childList`?!1:this.selectedOptions.some(t=>t===e.target||t.contains(e.target)));t&&this.handleSlotContentChange(),n&&(this.multiple?this.readonly?this.displayLabel=this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.requestUpdate():this.displayLabel=this.selectedOptions[0]?.getTextLabel?.()??this.displayLabel)}),this.mutationObserver.observe(this,{attributeFilter:[`value`],attributeOldValue:!0,attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(()=>{this.handleSlotContentChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect(),this.removeOpenListeners()}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}updated(e){super.updated(e),e.has(`multiple`)&&(this.multiple?this.enableResizeObserver():this.resizeObserver?.disconnect())}willUpdate(e){super.willUpdate(e);let t=this.defaultValue==null||this.defaultValue===``||Array.isArray(this.defaultValue)&&this.defaultValue.length===0;if(e.has(`value`)&&t&&this.value&&!this.isUserInput&&(this.defaultValue=this.multiple&&Array.isArray(this.value)?this.value.join(this.delimiter):this.value,this.valueHasChanged=!1),!this.isInitialized&&e.has(`value`)&&this.value!==void 0&&e.has(`multiple`)&&this.multiple&&!Array.isArray(this.defaultValue)){let e=this.valueHasChanged;this.value=typeof this.defaultValue==`string`?this.defaultValue.split(this.delimiter):[this.defaultValue].filter(Ur),this.valueHasChanged=e}}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return g`<div @syn-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?wr(n):n}
        </div>`}return t===this.maxOptionsVisible?g`<syn-tag size=${this.size}>+${this.selectedOptions.length-t}</syn-tag>`:g``})}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(t,!1),this.selectionChanged(),this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}))}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`syn-icon-button`);this.disabled||this.readonly||t||(e.preventDefault(),(this.open?this.hide():this.show()).then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))}))}handleComboboxKeyDown(e){e.key!==`Tab`&&this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.clearCombobox()}clearInputField(){if(this.displayLabel!==``){let e=this.valueHasChanged;this.value=Fr(this.selectedOptions),this.valueHasChanged=e,this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`syn-input`)})}}clearCombobox(){this.valueHasChanged=!0,this.value!==``&&(this.value=``,this.displayLabel=``,this.lastOptions=[],this.setSelectedOptions([]),this.selectionChanged(),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`syn-clear`),this.emit(`syn-input`),this.emit(`syn-change`)}))}preventLoosingFocus(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`syn-option`),n=this.lastOptions?Fr(this.lastOptions):[];t&&!t.disabled&&(this.isUserInput=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.selectionChanged(),this.updateComplete.then(()=>{this.displayInput.focus({preventScroll:!0}),this.isUserInput=!1}),Wr(n,Array.isArray(this.value)?this.value:[this.value])||this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}selectNextOption(e){let t=this.getAllFilteredOptions();if(t.length===0)return;let n=this.getCurrentOption(),r=t.indexOf(n),i=Math.max(0,r);if(e){let e=r+1;i=e>t.length-1?0:e}else{let e=r-1;i=e<0?t.length-1:e}this.setCurrentOption(t[i]),yr(this.getCurrentOption(),this.listbox,`vertical`,`auto`)}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected;let n=this.cachedOptions.find(t=>t.id===e.id);n&&(n.selected=e.selected)}setSelectedOptions(e){let t=Array.isArray(e)?e:[e];!this.multiple&&t.length>1&&t.splice(1),this.getSlottedOptions().forEach(e=>{e.selected=t.some(t=>t.id===e.id)}),this.cachedOptions.forEach(e=>{e.selected=t.some(t=>t.id===e.id)})}getAllFilteredOptions(){return this.getSlottedOptions().filter(e=>!e.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(e=>e.current)}setCurrentOption(e){let t=this.getAllFilteredOptions();this.displayInput.removeAttribute(`aria-activedescendant`),t.forEach(e=>{e.current=!1,e.setAttribute(`aria-selected`,`false`)}),e&&(e.current=!0,e.setAttribute(`aria-selected`,`true`),this.displayInput.setAttribute(`aria-activedescendant`,e.id))}selectionChanged(){let e=this.getSlottedOptions();this.selectedOptions=e.filter(e=>e.selected),this.selectedOptions.length===0&&(this.displayLabel=Array.isArray(this.value)?this.value.join(`, `):String(this.value));let t,n=this.valueHasChanged;if(this.multiple){if(this.value=this.selectedOptions.map(e=>Pr(e)),this.value.length===0&&this.selectedOptions.length!==0){this.valueHasChanged=n,this.resetToLastValidValue();return}}else{if(this.selectedOptions.length!==0)t=Pr(this.selectedOptions[0]);else if(this.restricted&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==``&&!this.isUserInput){this.resetToLastValidValue(),this.valueHasChanged=n;return}this.value=t??this.displayLabel}this.valueHasChanged=n,this.lastOptions=[...this.selectedOptions],this.updateComplete.then(()=>{let e=this.displayLabel;e=this.multiple&&this.readonly?this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.multiple&&!this.readonly?``:this.selectedOptions[0]?.getTextLabel()??this.displayLabel,this.displayLabel=e,this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.displayLabel),this.open&&this.updateComplete.then(()=>{this.open=this.multiple||this.restricted||this.numberFilteredOptions>0})}handleDisplayInputValueChange(){this.createComboboxOptionsFromQuery(this.displayLabel)}handleDisabledChange(){this.disabled&&this.formControlController.setValidity(this.disabled),(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange()),this.selectionChanged()}handleDelimiterChange(){this.getSlottedOptions().forEach(e=>{e.delimiter=this.delimiter})}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}this.updateSelectedOptionFromValue()}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){if(this.numberFilteredOptions===0&&!this.restricted&&!this.multiple){this.open=!1,this.emit(`syn-error`);return}this.emit(`syn-show`),this.addOpenListeners(),await L(this),this.listbox.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=z(this,`combobox.show`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.emit(`syn-after-show`);return}this.setCurrentOption(null),this.displayInput.removeAttribute(`aria-activedescendant`),this.emit(`syn-hide`),this.removeOpenListeners(),await L(this);let{keyframes:e,options:t}=z(this,`combobox.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,Promise.race([F(this,`syn-after-show`),F(this,`syn-error`)])}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,F(this,`syn-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(e){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(t=>{let n=this.cachedOptions.find(e=>e.id===t.id)||t,r=Nr(this.getOption(n,e));r||=n;let i=!(this.filter(r,e)||e===``);r.hidden=i,t.replaceWith(r),i||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(e=>{let t=Or(Array.from(e.children)).flat().some(e=>!e.hidden);return e.hidden=!t,t})[0]?.style.setProperty(`--display-divider`,`none`),setTimeout(()=>{this.isOptionRendererTriggered=!1})}async handleInput(){let e=this.displayInput.value;this.displayLabel=e;let t=this.lastOptions;if(this.isUserInput=!0,this.multiple||(this.selectedOptions=[]),this.multiple){let t=Fr(this.selectedOptions);this.value=[...t,e]}else this.value=e;await this.updateComplete,this.isUserInput=!1,this.lastOptions=t,this.open=this.multiple||this.restricted||this.numberFilteredOptions>0,this.formControlController.updateValidity(),this.emit(`syn-input`)}isValidValue(e){return this.cachedOptions.some(t=>Ir(e,t))}getOptionsFromValue(){let e=this.valueHasChanged?this.value:this.defaultValue,t;return t=Array.isArray(e)?e:e===void 0||e==null?[]:this.multiple&&typeof e==`string`?e.split(this.delimiter):[e],t.map(e=>this.cachedOptions.find(t=>Ir(e,t))).filter(e=>e!==void 0)}resetToLastValidValue(){let e=``,t=[];this.lastOptions.length!==0&&(t=Fr(this.lastOptions),this.multiple||(e=this.lastOptions[0].getTextLabel()));let n=this.popup?.popup?.getAnimations?.()??[],r=n.length?Promise.all(n.map(e=>e.playState===`finished`?Promise.resolve():new Promise(t=>{e.addEventListener(`finish`,()=>t(),{once:!0})}))):Promise.resolve();this.hideOptions=!0,r.then(()=>{this.hideOptions=!1});let i=this.valueHasChanged;this.value=t,this.displayLabel=e,this.formControlController.updateValidity(),this.valueHasChanged=i}handleChange(){let e=this.selectedOptions.length!==0&&this.selectedOptions.length===this.getOptionsFromValue().length,t;t=Array.isArray(this.value)?this.value:typeof this.value==`string`?this.value.split(this.delimiter):[this.value];let n=t.every(e=>this.isValidValue(e)),r=this.multiple&&e&&n;if(!this.multiple&&this.selectedOptions.length>0||r)return;let i=this.lastOptions?Fr(this.lastOptions):[];if((this.restricted||this.multiple)&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==``){this.resetToLastValidValue();return}let a=this.getOptionsFromValue();this.setSelectedOptions(a),this.selectionChanged(),this.lastOptions=[...a],this.updateComplete.then(()=>{this.formControlController.updateValidity()}),Wr(i,Array.isArray(this.value)?this.value:[this.value])||this.emit(`syn-change`)}getSlottedOptions(){return this.defaultSlot?Or(Tr(this.defaultSlot)).flat():[]}getSlottedOptGroups(){return kr(Tr(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){let e=this.getSlottedOptions(),t=this.getSlottedOptGroups();e.forEach((e,t)=>{e.id=e.id||`syn-combobox-option-${t}`}),t.forEach((e,t)=>{e.id=e.id||`syn-combobox-optgroup-${t}`}),this.cachedOptions=[...e]}updateSelectedOptionFromValue(){if(!this.isUserInput){let e=this.getOptionsFromValue();this.setSelectedOptions(e),this.selectionChanged()}let e=``;e=this.multiple?this.displayLabel:Array.isArray(this.value)?this.value.join(`, `):String(this.value),this.createComboboxOptionsFromQuery(e)}handleSlotContentChange(){if(!customElements.get(`syn-option`)){customElements.whenDefined(`syn-option`).then(()=>this.handleSlotContentChange());return}this.handleDelimiterChange(),this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue();let e;e=Array.isArray(this.value)||typeof this.value==`string`?this.value.length>0:this.value!==void 0&&this.value!==null,this.hasFocus&&e&&!this.open&&this.show()}handleDefaultSlotChange(){this.isOptionRendererTriggered||this.handleSlotContentChange()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i;i=Array.isArray(this.value)||typeof this.value==`string`?this.value.length>0:this.value!==void 0&&this.value!==null&&typeof this.value==`number`;let a=this.clearable&&!this.disabled&&!this.readonly&&i,o=this.placeholder&&!i,s=this.multiple&&this.selectedOptions.length>0;return g`
      <div
        part="form-control"
        class=${k({"form-control":!0,"form-control--has-help-text":r,"form-control--has-label":n,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`})}
        @click=${this.handleFormControlClick}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${k({combobox:!0,"combobox--bottom":this.placement===`bottom`,"combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size===`large`,"combobox--medium":this.size===`medium`,"combobox--multiple":this.multiple,"combobox--open":this.open,"combobox--placeholder-visible":o,"combobox--readonly":this.readonly,"combobox--small":this.size===`small`,"combobox--standard":!0,"combobox--tags-visible":s,"combobox--top":this.placement===`top`})}
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

              ${this.multiple&&!this.readonly?g`<div part="tags" class="combobox__tags">${this.tags}</div>`:``}

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .readOnly=${this.readonly}
                .value=${this.displayLabel}
                maxlength=${N(this.maxlength)}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
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
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value?.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${a?g`
                    <button
                      part="clear-button"
                      class="combobox__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.preventLoosingFocus}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:``}

                <slot name="suffix" part="suffix" class="combobox__suffix"></slot>

                <slot name="expand-icon" part="expand-icon" class="combobox__expand-icon">
                  <syn-icon library="system" name="chevron-down"></syn-icon>
                </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-labelledby="label"
              aria-multiselectable=${this.multiple?`true`:`false`}
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">
                ${this.hideOptions||this.numberFilteredOptions===0?g`<span
                      class="listbox__no-results"
                      aria-hidden="true"
                      part="no-results"
                      >${this.localize.term(`noResults`)}</span
                    >`:``}
                <slot class=${k({options__hide:this.hideOptions})} @slotchange=${this.handleDefaultSlotChange}></slot>      
              </div>
            </div>
          </syn-popup>
        </div>
        
        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};U.styles=[w,Jn,Rr],U.dependencies={"syn-icon":M,"syn-popup":H,"syn-tag":qr},v([D(`.combobox`)],U.prototype,`popup`,2),v([D(`.combobox__inputs`)],U.prototype,`combobox`,2),v([D(`.combobox__display-input`)],U.prototype,`displayInput`,2),v([D(`.combobox__value-input`)],U.prototype,`valueInput`,2),v([D(`.combobox__listbox`)],U.prototype,`listbox`,2),v([D(`slot:not([name])`)],U.prototype,`defaultSlot`,2),v([D(`.combobox__tags`)],U.prototype,`tagContainer`,2),v([E()],U.prototype,`hasFocus`,2),v([E()],U.prototype,`isUserInput`,2),v([E()],U.prototype,`displayLabel`,2),v([E()],U.prototype,`selectedOptions`,2),v([E()],U.prototype,`numberFilteredOptions`,2),v([E()],U.prototype,`cachedOptions`,2),v([E()],U.prototype,`valueHasChanged`,2),v([E()],U.prototype,`hideOptions`,2),v([T()],U.prototype,`name`,2),v([E()],U.prototype,`value`,1),v([T({attribute:`value`})],U.prototype,`defaultValue`,2),v([T({reflect:!0})],U.prototype,`size`,2),v([T()],U.prototype,`placeholder`,2),v([T({reflect:!0,type:Boolean})],U.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],U.prototype,`readonly`,2),v([T({type:Boolean})],U.prototype,`clearable`,2),v([T({reflect:!0,type:Boolean})],U.prototype,`open`,2),v([T()],U.prototype,`label`,2),v([T({type:Number})],U.prototype,`maxlength`,2),v([T({reflect:!0})],U.prototype,`placement`,2),v([T({attribute:`help-text`})],U.prototype,`helpText`,2),v([T({reflect:!0})],U.prototype,`form`,2),v([T({reflect:!0,type:Boolean})],U.prototype,`required`,2),v([T({reflect:!0,type:Boolean})],U.prototype,`restricted`,2),v([T({reflect:!0,type:Boolean})],U.prototype,`multiple`,2),v([T()],U.prototype,`getOption`,2),v([T()],U.prototype,`filter`,2),v([T()],U.prototype,`delimiter`,2),v([T({attribute:`max-options-visible`,type:Number})],U.prototype,`maxOptionsVisible`,2),v([T()],U.prototype,`getTag`,2),v([j([`filter`,`getOption`],{waitUntilFirstUpdate:!0})],U.prototype,`handlePropertiesChange`,1),v([j(`displayLabel`,{waitUntilFirstUpdate:!0})],U.prototype,`handleDisplayInputValueChange`,1),v([j([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],U.prototype,`handleDisabledChange`,1),v([j(`delimiter`)],U.prototype,`handleDelimiterChange`,1),v([j([`defaultValue`,`value`,`delimiter`,`multiple`,`restricted`],{waitUntilFirstUpdate:!0})],U.prototype,`handleValueChange`,1),v([j(`open`,{waitUntilFirstUpdate:!0})],U.prototype,`handleOpenChange`,1),U=v([S(`SynCombobox`)],U),R(`combobox.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),R(`combobox.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),U.define(`syn-combobox`);var Wa=h`
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
`;function Ga(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ka=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`footer`),this.localize=new C(this),this.modal=new fr(this),this.isVisible=!1,this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.drawer.hidden=!this.isVisible&&!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),_r(this)))}disconnectedCallback(){super.disconnectedCallback(),vr(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=z(this,`drawer.denyClose`,{dir:this.localize.dir()});I(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),_r(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([L(this.drawer),L(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=z(this,`drawer.show${Ga(this.placement)}`,{dir:this.localize.dir()}),n=z(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([I(this.panel,t.keyframes,t.options),I(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{Ut(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),vr(this)),await Promise.all([L(this.drawer),L(this.overlay)]);let e=z(this,`drawer.hide${Ga(this.placement)}`,{dir:this.localize.dir()}),t=z(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([I(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),I(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),_r(this)),this.open&&this.contained&&(this.modal.deactivate(),vr(this))}async show(){if(!this.open)return this.open=!0,F(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this,`syn-after-hide`)}forceVisibility(e){this.isVisible=e,this.drawer.hidden=!e&&!this.open}render(){return g`
      <div
        part="base"
        class=${k({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement===`top`,"drawer--end":this.placement===`end`,"drawer--bottom":this.placement===`bottom`,"drawer--start":this.placement===`start`,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()===`rtl`,"drawer--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.isVisible||this.open?`false`:`true`}
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:`title`)}
          tabindex="0"
        >
          ${this.noHeader?``:g`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click=${()=>this.requestClose(`close-button`)}
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
    `}};Ka.styles=[w,Wa],Ka.dependencies={"syn-icon-button":P},v([E()],Ka.prototype,`isVisible`,2),v([D(`.drawer`)],Ka.prototype,`drawer`,2),v([D(`.drawer__panel`)],Ka.prototype,`panel`,2),v([D(`.drawer__overlay`)],Ka.prototype,`overlay`,2),v([T({type:Boolean,reflect:!0})],Ka.prototype,`open`,2),v([T({reflect:!0})],Ka.prototype,`label`,2),v([T({reflect:!0})],Ka.prototype,`placement`,2),v([T({type:Boolean,reflect:!0})],Ka.prototype,`contained`,2),v([T({attribute:`no-header`,type:Boolean,reflect:!0})],Ka.prototype,`noHeader`,2),v([j(`open`,{waitUntilFirstUpdate:!0})],Ka.prototype,`handleOpenChange`,1),v([j(`contained`,{waitUntilFirstUpdate:!0})],Ka.prototype,`handleNoModalChange`,1),R(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),R(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),R(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),R(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),R(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),R(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),R(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),R(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),R(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),R(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),R(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Ka.define(`syn-drawer`);var qa=h`
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
`,Ja=class extends O{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}};Ja.styles=[w,qa],v([T({type:Boolean,reflect:!0})],Ja.prototype,`vertical`,2),v([j(`vertical`)],Ja.prototype,`handleVerticalChange`,1),Ja.define(`syn-divider`);var Ya=h`
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

  @container (min-width: ${640}px) {
    .fields--two-columns ::slotted(*) {
      flex-basis: calc((100% - (var(--item-gap) * (var(--items-per-row) - 1))) / var(--items-per-row));
    }
  }
`,Xa=e=>{let t=[`button`,`fieldset`,`input`,`select`,`textarea`,`syn-button`,`syn-checkbox`,`syn-checkbox-group`,`syn-combobox`,`syn-dropdown`,`syn-fieldset`,`syn-file`,`syn-icon-button`,`syn-input`,`syn-radio-group`,`syn-radio`,`syn-range`,`syn-select`,`syn-switch`,`syn-textarea`].join(`,`);return Array.from(e.querySelectorAll(t))},Za=e=>`disabled`in e,Qa=`syn-radio-group, syn-checkbox-group`,$a=(e,t)=>e!==`two-columns`||t<640?`vertical`:`horizontal`,eo=(e,t)=>{e.querySelectorAll(Qa).forEach(e=>{e.layout!==t&&(e.layout=t)})},to=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`description`,`legend`),this.forcedDisabledElements=new WeakSet,this.lightDomObserver=new MutationObserver(e=>{this.disabled&&this.syncDisabledState(),e.some(e=>e.type===`childList`)&&this.scheduleGroupedControlLayoutSync()}),this.fieldContainerResizeObserver=new ResizeObserver(()=>{this.scheduleGroupedControlLayoutSync()}),this.groupedLayoutSyncAnimationFrame=null,this.handleSlotChange=()=>{this.disabled&&this.syncDisabledState(),this.scheduleGroupedControlLayoutSync()},this.description=``,this.legend=``,this.disabled=!1,this.disableAutoGroupLayout=!1,this.layout=`one-column`}getFieldContainerWidth(){return(this.shadowRoot?.querySelector(`.fields`))?.getBoundingClientRect().width??0}syncGroupedControlLayouts(){if(this.disableAutoGroupLayout)return;let e=$a(this.layout,this.getFieldContainerWidth());eo(this,e)}scheduleGroupedControlLayoutSync(){this.groupedLayoutSyncAnimationFrame===null&&(this.groupedLayoutSyncAnimationFrame=requestAnimationFrame(()=>{this.groupedLayoutSyncAnimationFrame=null,this.syncGroupedControlLayouts()}))}syncDisabledState(){Array.from(Xa(this)).filter(Za).forEach(e=>{this.disabled&&(e.disabled||=(this.forcedDisabledElements.add(e),!0)),!this.disabled&&this.forcedDisabledElements.has(e)&&(e.disabled=!1)})}connectedCallback(){super.connectedCallback(),this.lightDomObserver.observe(this,{attributeFilter:[`disabled`],attributes:!0,childList:!0,subtree:!0})}firstUpdated(){let e=this.shadowRoot?.querySelector(`.fields`);e&&this.fieldContainerResizeObserver.observe(e),this.syncGroupedControlLayouts()}disconnectedCallback(){super.disconnectedCallback(),this.lightDomObserver?.disconnect(),this.fieldContainerResizeObserver?.disconnect(),this.groupedLayoutSyncAnimationFrame!==null&&(cancelAnimationFrame(this.groupedLayoutSyncAnimationFrame),this.groupedLayoutSyncAnimationFrame=null)}updated(e){super.updated(e),e.has(`disabled`)&&this.syncDisabledState(),(e.has(`layout`)||e.has(`disableAutoGroupLayout`))&&this.scheduleGroupedControlLayoutSync()}render(){let e=this.hasSlotController.test(`legend`)||this.legend.length>0,t=this.hasSlotController.test(`description`)||this.description.length>0;return g`
      <fieldset
        class=${k({fieldset:!0,"fieldset--has-description":t,"fieldset--has-legend":e})}
        ?disabled=${this.disabled}
        aria-describedby=${N(t?`description`:void 0)}
        part="base"
      >
        ${e?g`
            <legend class="legend" part="legend">
              <slot name="legend">${this.legend}</slot>
            </legend>
          `:null}

        ${t?g`
            <div class="description" id="description" part="description">
              <slot name="description">${this.description}</slot>
            </div>
          `:null}

        <div
          class=${k({fields:!0,"fields--two-columns":this.layout===`two-columns`})}
          part="field-container"
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </fieldset>
    `}};to.styles=[w,Ya],v([T({reflect:!0,type:String})],to.prototype,`description`,2),v([T({reflect:!0,type:String})],to.prototype,`legend`,2),v([T({reflect:!0,type:Boolean})],to.prototype,`disabled`,2),v([T({attribute:`disable-auto-group-layout`,reflect:!0,type:Boolean})],to.prototype,`disableAutoGroupLayout`,2),v([T({reflect:!0})],to.prototype,`layout`,2),to.define(`syn-fieldset`);var no=h`
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
`,ro=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`syn-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?nr():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`syn-menu`&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getContainingModalHost(){return this.closest(`syn-dialog, syn-drawer`)}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`syn-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>cr(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`syn-button`:case`syn-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,F(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this,`syn-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`syn-select`,this.handlePanelSelect),this.getContainingModalHost()?.modal?.activateExternal(),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`syn-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),this.getContainingModalHost()?.modal?.deactivateExternal(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`syn-show`),this.addOpenListeners(),await L(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=z(this,`dropdown.show`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.removeOpenListeners(),await L(this);let{keyframes:e,options:t}=z(this,`dropdown.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}}render(){return g`
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
        sync=${N(this.sync?this.sync:void 0)}
        class=${k({dropdown:!0,"dropdown--open":this.open})}
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

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </syn-popup>
    `}};ro.styles=[w,no],ro.dependencies={"syn-popup":H},v([D(`.dropdown`)],ro.prototype,`popup`,2),v([D(`.dropdown__trigger`)],ro.prototype,`trigger`,2),v([D(`.dropdown__panel`)],ro.prototype,`panel`,2),v([T({type:Boolean,reflect:!0})],ro.prototype,`open`,2),v([T({reflect:!0})],ro.prototype,`placement`,2),v([T({type:Boolean,reflect:!0})],ro.prototype,`disabled`,2),v([T({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],ro.prototype,`stayOpenOnSelect`,2),v([T({attribute:!1})],ro.prototype,`containingElement`,2),v([T({type:Number})],ro.prototype,`distance`,2),v([T({type:Number})],ro.prototype,`skidding`,2),v([T({reflect:!0})],ro.prototype,`sync`,2),v([j(`open`,{waitUntilFirstUpdate:!0})],ro.prototype,`handleOpenChange`,1),R(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),R(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),ro.define(`syn-dropdown`);var io=h`
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
`,ao=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`[default]`,`logo`,`label`,`meta-navigation`,`navigation`),this.localize=new C(this),this.isSideNavAnimating=!1,this.label=``,this.burgerMenu=`hidden`,this.sticky=!1}toggleBurgerMenu(){switch(this.burgerMenu){case`closed`:this.burgerMenu=`open`;break;case`open`:this.burgerMenu=`closed`}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.burgerMenu=this.sideNav.variant==="default"?this.sideNav.open?`open`:`closed`:`hidden`)}updateMetaNavigation(){let e=[];this.metaNavigationSlot.assignedElements({flatten:!0}).forEach(t=>{if(t.tagName.toLowerCase()===`syn-divider`)e.push(t);else{let n=t.querySelectorAll(`:scope > syn-divider`);n.length&&e.push(...n)}}),e.filter(e=>e.hasAttribute(`vertical`)).forEach(e=>{e.style.cssText+=`--spacing: var(--syn-spacing-x-small); align-self: center; display: flex; height: var(--metanavigation-item-size);`})}handleBurgerMenu(){let e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{let e=document.querySelector(`syn-side-nav`);this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){if(this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector(`syn-side-nav`),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:[`open`,`variant`],attributes:!0});let e=e=>{e.target===this.sideNav&&(this.isSideNavAnimating=!0)},t=e=>{e.target===this.sideNav&&(this.isSideNavAnimating=!1)};this.sideNav.addEventListener(`syn-show`,e),this.sideNav.addEventListener(`syn-hide`,e),this.sideNav.addEventListener(`syn-after-show`,t),this.sideNav.addEventListener(`syn-after-hide`,t)}}render(){let e=this.hasSlotController.test(`navigation`),t=this.burgerMenu!==`hidden`;return bn`
      <header
        class=${k({header:!0,"header--has-burger-menu":t,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${t?bn`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu===`closed`?`openMenu`:`closeMenu`)}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu===`open`?bn`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:bn`
                          <slot name="closed-burger-menu-icon">
                            <syn-icon name="menu" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:``}

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
    `}};ao.styles=[w,io],ao.dependencies={"syn-icon":M},v([D(`slot[name="meta-navigation"]`)],ao.prototype,`metaNavigationSlot`,2),v([T()],ao.prototype,`label`,2),v([T({attribute:`burger-menu`,reflect:!0})],ao.prototype,`burgerMenu`,2),v([T({reflect:!0,type:Boolean})],ao.prototype,`sticky`,2),v([E()],ao.prototype,`sideNav`,2),v([j(`burgerMenu`,{waitUntilFirstUpdate:!0})],ao.prototype,`handleBurgerMenu`,1),ao.define(`syn-header`);var oo=h`
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
`,W=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{assumeInteractionOn:[`syn-change`],value:e=>e.files}),this.hasSlotController=new A(this,`help-text`,`label`),this.localize=new C(this),this.userIsDragging=!1,this.name=``,this.defaultValue=``,this.size=`medium`,this.label=``,this.helpText=``,this.disabled=!1,this.readonly=!1,this.droparea=!1,this.accept=``,this.multiple=!1,this.webkitdirectory=!1,this.form=``,this.required=!1,this.hideValue=!1}set files(e){this.input&&(this.input.files=e)}get files(){return this.input?.files}set value(e){this.input&&(this.input.value=e)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){if(this.droparea){this.dropareaWrapper?.focus(e);return}this.button?.focus(e)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value=``;return}this.files=e}async handleTransferItems(e){if(!e)return this.value=``,new Promise((e,t)=>{t(Error(`No proper items found`))});let t=Array.from(e).map(e=>e.webkitGetAsEntry()).map(e=>this.getFilesFromEntry(e)),n=(await Promise.all(t)).flat(),r=new DataTransfer;return Array.from(n).forEach(e=>r.items.add(e)),r.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((t,n)=>{e.file(e=>t([e]),n)}):e.isDirectory?new Promise((t,n)=>{e.createReader().readEntries(e=>{Promise.all(e.map(e=>this.getFilesFromEntry(e))).then(e=>{t(e.flat())}).catch(n)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit(`syn-input`),this.emit(`syn-change`)}handleDragOver(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!0)}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!1)}async handleDrop(e){if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readonly||!e.dataTransfer)return;let t=await this.handleTransferItems(e.dataTransfer?.items);if(this.userIsDragging=!1,t){if(!this.multiple&&!this.webkitdirectory&&t.length>1){this.emit(`syn-error`);return}if(this.hasSlotController.test(`trigger`))this.handleFiles(t);else{let e=z(this.inputChosen,`file.text.disappear`,{dir:this.localize.dir()}),n=z(this.inputChosen,`file.text.appear`,{dir:this.localize.dir()});if(this.droparea){let e=z(this.dropareaIcon,`file.iconDrop`,{dir:this.localize.dir()});I(this.dropareaIcon,e.keyframes,e.options)}await I(this.inputChosen,e.keyframes,e.options),this.handleFiles(t),await I(this.inputChosen,n.keyframes,n.options)}this.input.dispatchEvent(new Event(`change`))}}handleFocus(){this.emit(`syn-focus`)}handleBlur(){this.emit(`syn-blur`)}renderValue(){let e=!1,t=this.localize.term(`numFilesSelected`,0,this.webkitdirectory);return this.files&&this.files?.length>0&&(e=!0,t=this.files.length===1?this.files[0].name:this.localize.term(`numFilesSelected`,this.files.length,this.webkitdirectory)),g`
      <span
        class=${k({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${t}
      </span>
    `}renderDroparea(){return g`
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
            <strong>${this.localize.term(this.webkitdirectory?`folderDragDrop`:`fileDragDrop`)}</strong>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `}renderButton(){let e=this.localize.term(`fileButtonText`);return this.multiple&&(e=this.localize.term(`fileButtonTextMultiple`)),this.webkitdirectory&&(e=this.localize.term(`folderButtonText`)),g`
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
          ${e}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){let e=this.label||!!this.hasSlotController.test(`label`),t=this.helpText?!0:!!this.hasSlotController.test(`help-text`),n=!!this.hasSlotController.test(`trigger`);return g`
      <div
        class=${k({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":t,"form-control--has-label":e,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`,"form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${n?g`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:g`
              <label
                aria-hidden=${e?`false`:`true`}
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
                aria-hidden=${t?`false`:`true`}
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
          name=${N(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}};W.styles=[w,Jn,oo],W.dependencies={"syn-button":V,"syn-icon":M},v([E()],W.prototype,`userIsDragging`,2),v([T({type:Object})],W.prototype,`files`,1),v([T({type:String})],W.prototype,`name`,2),v([T({type:String})],W.prototype,`value`,1),v([Zn()],W.prototype,`defaultValue`,2),v([T({reflect:!0})],W.prototype,`size`,2),v([T()],W.prototype,`label`,2),v([T({attribute:`help-text`})],W.prototype,`helpText`,2),v([T({reflect:!0,type:Boolean})],W.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],W.prototype,`readonly`,2),v([T({type:Boolean})],W.prototype,`droparea`,2),v([T({type:String})],W.prototype,`accept`,2),v([T({type:String})],W.prototype,`capture`,2),v([T({reflect:!0,type:Boolean})],W.prototype,`multiple`,2),v([T({reflect:!0,type:Boolean})],W.prototype,`webkitdirectory`,2),v([T({reflect:!0})],W.prototype,`form`,2),v([T({reflect:!0,type:Boolean})],W.prototype,`required`,2),v([T({attribute:`hide-value`,type:Boolean})],W.prototype,`hideValue`,2),v([D(`.input__control`)],W.prototype,`input`,2),v([D(`.button`)],W.prototype,`button`,2),v([D(`.droparea`)],W.prototype,`dropareaWrapper`,2),v([D(`.droparea__icon`)],W.prototype,`dropareaIcon`,2),v([D(`.input__value`)],W.prototype,`inputChosen`,2),v([j(`disabled`,{waitUntilFirstUpdate:!0})],W.prototype,`handleDisabledChange`,1),v([j(`value`,{waitUntilFirstUpdate:!0})],W.prototype,`handleValueChange`,1),W=v([S(`SynFile`)],W),R(`file.iconDrop`,{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:`ease-out`}}),R(`file.text.disappear`,{keyframes:[{opacity:1},{opacity:0,transform:`translateY(-40%)`}],options:{duration:300,easing:`cubic-bezier(0.45, 1.45, 0.8, 1)`}}),R(`file.text.appear`,{keyframes:[{opacity:0,transform:`translateY(40%)`},{opacity:1}],options:{duration:300,easing:`cubic-bezier(0.45, 1.45, 0.8, 1)`}}),W.define(`syn-file`),M.define(`syn-icon`);var so=(e,t=!1)=>{let n;switch(e){case`access_alarm`:n=`alarm`;break;case`access_alarms`:n=`alarm`;break;case`access_time`:n=`schedule`;break;case`access_time_filled`:n=`schedule`;break;case`account_tree_outline`:n=`account_tree`;break;case`add_alarm`:n=`alarm_add`;break;case`add_circle_outline`:n=`add_circle`;break;case`add_ic_call`:n=`add_call`;break;case`addchart`:n=`add_chart`;break;case`announcement`:n=`feedback`;break;case`app_settings_alt`:n=`phonelink_setup`;break;case`arrow_range_outline`:n=`arrow_range`;break;case`assessment`:n=`insert_chart`;break;case`assistant_photo`:n=`flag`;break;case`audiotrack`:n=`music_note`;break;case`battery_std`:n=`battery_full`;break;case`bluetooth_audio`:n=`bluetooth_searching`;break;case`bookmark_border`:n=`bookmark`;break;case`box_outline`:n=`box`;break;case`browser_not_supported`:n=`web_asset_off`;break;case`build_circle_outline`:n=`build_circle`;break;case`business`:n=`domain`;break;case`camera_alt`:n=`photo_camera`;break;case`cancel_outline`:n=`cancel`;break;case`card_giftcard`:n=`redeem`;break;case`catching_pokemon`:n=`sports_baseball`;break;case`center_focus_strong_outline`:n=`center_focus_strong`;break;case`chat_bubble_outline`:n=`chat_bubble`;break;case`check_circle_outline`:n=`check_circle`;break;case`circle_outline`:n=`circle`;break;case`class`:n=`book`;break;case`clear`:n=`close`;break;case`closed_caption_off`:n=`closed_caption`;break;case`collections`:n=`filter`;break;case`color_lens`:n=`palette`;break;case`control_point`:n=`add_circle`;break;case`conveyor_belt_outline`:n=`conveyor_belt`;break;case`create`:n=`edit`;break;case`crop_din`:n=`crop_square`;break;case`crop_original`:n=`image`;break;case`data_saver_off`:n=`data_usage`;break;case`delete_outline`:n=`delete`;break;case`delivery_dining`:n=`moped`;break;case`directions_boat_filled`:n=`directions_boat`;break;case`directions_bus_filled`:n=`directions_bus`;break;case`directions_car_filled`:n=`directions_car`;break;case`directions_railway_filled`:n=`directions_railway`;break;case`directions_subway_filled`:n=`directions_subway`;break;case`directions_transit`:n=`directions_subway`;break;case`directions_transit_filled`:n=`directions_subway`;break;case`discount`:n=`sell`;break;case`do_disturb`:n=`block`;break;case`do_disturb_alt`:n=`block`;break;case`do_disturb_off`:n=`block`;break;case`do_disturb_on`:n=`do_not_disturb_on`;break;case`do_not_disturb`:n=`do_not_disturb_off`;break;case`do_not_disturb_alt`:n=`block`;break;case`drive_eta`:n=`directions_car`;break;case`email`:n=`mail`;break;case`emoji_emotions`:n=`mood`;break;case`error_outline`:n=`error`;break;case`favorite_border`:n=`favorite`;break;case`feedback_outline`:n=`feedback`;break;case`filter_alt_outline`:n=`filter_alt`;break;case`fire_hydrant_alt`:n=`fire_hydrant`;break;case`fitbit`:n=`blur_on`;break;case`fmd_good`:n=`location_on`;break;case`free_breakfast`:n=`local_cafe`;break;case`games`:n=`gamepad`;break;case`get_app`:n=`file_download`;break;case`gpp_good`:n=`verified_user`;break;case`gps_fixed`:n=`my_location`;break;case`gps_not_fixed`:n=`location_searching`;break;case`gps_off`:n=`location_disabled`;break;case`headset`:n=`headphones`;break;case`help_outline`:n=`help`;break;case`highlight_alt`:n=`ink_selection`;break;case`highlight_off`:n=`cancel`;break;case`https`:n=`lock`;break;case`import_export`:n=`swap_vert`;break;case`info_outline`:n=`info`;break;case`insert_chart_outlined`:n=`insert_chart`;break;case`insert_comment`:n=`comment`;break;case`insert_drive_file`:n=`note`;break;case`insert_emoticon`:n=`mood`;break;case`insert_invitation`:n=`event`;break;case`insert_link`:n=`link`;break;case`insert_photo`:n=`image`;break;case`iso`:n=`exposure`;break;case`laptop`:n=`laptop_mac`;break;case`launch`:n=`open_in_new`;break;case`local_airport`:n=`flight`;break;case`local_grocery_store`:n=`shopping_cart`;break;case`local_hotel`:n=`hotel`;break;case`local_movies`:n=`theaters`;break;case`local_offer`:n=`sell`;break;case`local_phone`:n=`call`;break;case`local_play`:n=`local_activity`;break;case`local_printshop`:n=`print`;break;case`loop`:n=`sync`;break;case`mail_outline`:n=`mail`;break;case`maps_home_work`:n=`home_work`;break;case`markunread`:n=`mail`;break;case`message`:n=`chat`;break;case`mic_none`:n=`mic`;break;case`miscellaneous_services`:n=`manufacturing`;break;case`mode`:n=`edit`;break;case`mode_edit`:n=`edit`;break;case`mode_edit_outline`:n=`edit`;break;case`money_off_csred`:n=`money_off`;break;case`motion_photos_pause`:n=`motion_photos_paused`;break;case`move_group_outline`:n=`move_group`;break;case`movie_creation`:n=`movie`;break;case`nightlight_round`:n=`nightlight`;break;case`no_cell`:n=`mobile_off`;break;case`no_encryption_gmailerrorred`:n=`no_encryption`;break;case`not_interested`:n=`block`;break;case`notifications_none`:n=`notifications`;break;case`ondemand_video`:n=`live_tv`;break;case`outlined_flag`:n=`flag`;break;case`package_2_outline`:n=`package_2`;break;case`package_outline`:n=`package`;break;case`pallet_outline`:n=`pallet`;break;case`pan_tool_outline`:n=`pan_tool`;break;case`panorama_horizontal_select`:n=`panorama_horizontal`;break;case`panorama_photosphere_select`:n=`panorama_photosphere`;break;case`panorama_vertical_select`:n=`panorama_vertical`;break;case`panorama_wide_angle_select`:n=`panorama_wide_angle`;break;case`pause_circle_filled`:n=`pause_circle`;break;case`pause_circle_outline`:n=`pause_circle`;break;case`payment`:n=`credit_card`;break;case`pending_outline`:n=`pending`;break;case`people`:n=`group`;break;case`people_alt`:n=`group`;break;case`people_outline`:n=`group`;break;case`perm_identity`:n=`person`;break;case`person_add_alt`:n=`person_add`;break;case`person_add_alt_1`:n=`person_add`;break;case`person_outline`:n=`person`;break;case`person_remove_alt_1`:n=`person_remove`;break;case`personal_video`:n=`monitor`;break;case`phone`:n=`call`;break;case`phonelink`:n=`devices`;break;case`photo_size_select_actual`:n=`panorama`;break;case`pie_chart_outline`:n=`pie_chart`;break;case`pix`:n=`wallpaper`;break;case`place`:n=`location_on`;break;case`play_circle_filled`:n=`play_circle`;break;case`play_circle_outline`:n=`play_circle`;break;case`plus_one`:n=`exposure_plus_1`;break;case`poll`:n=`insert_chart`;break;case`portrait`:n=`account_box`;break;case`progress_activity_outline`:n=`progress_activity`;break;case`query_builder`:n=`schedule`;break;case`question_answer`:n=`forum`;break;case`queue`:n=`library_add`;break;case`remove_circle`:n=`do_not_disturb_on`;break;case`remove_circle_outline`:n=`do_not_disturb_on`;break;case`remove_red_eye`:n=`visibility`;break;case`replay_circle_filled`:n=`replay`;break;case`report_gmailerrorred`:n=`report`;break;case`report_problem`:n=`warning`;break;case`restore`:n=`history`;break;case`room`:n=`location_on`;break;case`rotate_90_degrees_cw_outline`:n=`rotate_90_degrees_cw`;break;case`save_alt`:n=`file_download`;break;case`sd_storage`:n=`sd_card`;break;case`security_update`:n=`system_update`;break;case`sentiment_satisfied_alt`:n=`sentiment_satisfied`;break;case`settings_input_composite`:n=`settings_input_component`;break;case`settings_outline`:n=`settings`;break;case`shelves_outline`:n=`shelves`;break;case`shop_2`:n=`shop_two`;break;case`shortcut`:n=`turn_right`;break;case`signal_cellular_no_sim`:n=`no_sim`;break;case`signal_wifi_4_bar_lock`:n=`wifi_lock`;break;case`signal_wifi_connected_no_internet_4`:n=`signal_wifi_bad`;break;case`signal_wifi_statusbar_4_bar`:n=`signal_wifi_4_bar`;break;case`signal_wifi_statusbar_connected_no_internet_4`:n=`signal_wifi_statusbar_not_connected`;break;case`sim_card_alert`:n=`sd_card_alert`;break;case`sms_outline`:n=`sms`;break;case`source`:n=`topic`;break;case`square_outline`:n=`square`;break;case`star_border`:n=`grade`;break;case`star_border_purple500`:n=`star_rate`;break;case`star_outline`:n=`star`;break;case`star_purple500`:n=`star_rate`;break;case`stop_circle_outline`:n=`stop_circle`;break;case`store_mall_directory`:n=`store`;break;case`system_security_update`:n=`system_update`;break;case`system_security_update_good`:n=`security_update_good`;break;case`system_security_update_warning`:n=`security_update_warning`;break;case`table_chart_outline`:n=`table_chart`;break;case`tag_faces`:n=`mood`;break;case`terrain`:n=`landscape`;break;case`textsms`:n=`sms`;break;case`thumb_down_alt`:n=`thumb_down`;break;case`thumb_down_off_alt`:n=`thumb_down_off`;break;case`thumb_up_alt`:n=`thumb_up`;break;case`thumb_up_off_alt`:n=`thumb_up_off`;break;case`time_to_leave`:n=`directions_car`;break;case`timer_outline`:n=`timer`;break;case`try`:n=`reviews`;break;case`tungsten`:n=`wb_incandescent`;break;case`turned_in`:n=`bookmark`;break;case`turned_in_not`:n=`bookmark`;break;case`visibility_off_outline`:n=`visibility_off`;break;case`visibility_outline`:n=`visibility`;break;case`warning_amber`:n=`warning`;break;case`watch_later`:n=`schedule`;break;case`wb_cloudy`:n=`cloud_queue`;break;case`wb_incandescent_outline`:n=`wb_incandescent`;break;case`window_outline`:n=`window`;break;case`work_off`:n=`enterprise_off`;break;case`work_outline`:n=`work`;break;default:n=e}return t&&n!==e&&console.warn(`[Icon Migration] Mapped icon name "${e}" to "${n}"`),n};((e=`DISABLED`)=>({name:`default`,resolver:t=>Xt(`assets/icons/${so(t,e===`ENABLED`)}.svg`)}))(`DISABLED`);var co=h`
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
`,lo=h`
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
`,uo=(e,t,n={})=>{let{maximumFractionDigits:r,minimumFractionDigits:i,...a}=n,o=(t===`any`||!t?1:+t).toString().split(`.`)[1]?.length||0,s,c,l=typeof i==`number`,u=typeof r==`number`;return l&&!u?(s=i,c=i):u&&!l?(s=r,c=r):l&&u&&(s=Math.min(i,r),c=Math.max(i,r)),o>(s||0)&&(s=o),o>(c||0)&&(c=o),s!==void 0&&s>100&&(s=100),c!==void 0&&c>100&&(c=100),new Intl.NumberFormat(`en-US`,{maximumFractionDigits:c,minimumFractionDigits:s,useGrouping:!1,...a}).format(e)},fo=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),fo(e,t);return!0},po=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},mo=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),_o(t)}};function ho(e){this._$AN===void 0?this._$AM=e:(po(this),this._$AM=e,mo(this))}function go(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)fo(r[e],!1),po(r[e]);else r!=null&&(fo(r,!1),po(r));else fo(this,e)}var _o=e=>{e.type==Rt.CHILD&&(e._$AP??=go,e._$AQ??=ho)},vo=class extends Bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),mo(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(fo(this,e),po(this))}setValue(e){if(ln(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},yo=zt(class extends vo{constructor(e){if(super(e),this.handlePointerDown=e=>{e.button!==0||this.host.disabled||this.spinOnLongPressCallback(e)},this.handlePointerUp=e=>{e?.preventDefault(),e?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener(`pointerup`,this.handlePointerUp)},e.type!==Rt.ELEMENT||!(e.element instanceof HTMLButtonElement))throw Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(e){return _}update(e,[t]){return this.callbacks===void 0&&this.host===void 0&&(this.host=e.element,this.callbacks={...t},this.host.addEventListener(`pointerdown`,this.handlePointerDown)),Re}reconnected(){this.host.addEventListener(`pointerdown`,this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener(`pointerdown`,this.handlePointerDown),document.removeEventListener(`pointerup`,this.handlePointerUp)}spinOnLongPressCallback(e){e.preventDefault(),e.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener(`pointerup`,this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(e=>{e.forEach(e=>{e.attributeName===`disabled`&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}),bo,xo,So,Co,G=class extends O{constructor(){super(...arguments),vt(this,xo),this.formControlController=new a(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new A(this,`help-text`,`label`,`prefix`,`suffix`),this.localize=new C(this),this.hasFocus=!1,this.title=``,this.__numberInput=Object.assign(document.createElement(`input`),{type:`number`}),this.__dateInput=Object.assign(document.createElement(`input`),{type:`date`}),this.type=`text`,this.name=``,this.value=``,this.defaultValue=``,this.size=`medium`,this.label=``,this.helpText=``,this.clearable=!1,this.disabled=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form=``,this.required=!1,this.spellcheck=!0,vt(this,bo,ot)}set numericStrategy(e){switch(typeof e){case`string`:b(this,bo,e===`modern`?ot:at);break;case`object`:b(this,bo,st(e));break;default:b(this,bo,at)}}get numericStrategy(){return y(this,bo)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null)return!1;let e=typeof this.min==`string`?parseFloat(this.min):this.min;return parseFloat(this.value)<=e}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;let e=typeof this.max==`string`?parseFloat(this.max):this.max;return parseFloat(this.value)>=e}handleNumericStrategyAutoClamp(){let{valueAsNumber:e,max:t,min:n}=this;if(!y(this,bo).autoClamp)return{eventObj:null,shouldClamp:!1,nextValue:e};let r=typeof n==`string`?parseFloat(n):n,i=typeof t==`string`?parseFloat(t):t,a=e,o=``;a<r?(a=r,o=`min`):a>i&&(a=i,o=`max`);let s=o?{detail:{clampedTo:o,lastUserValue:e}}:null;return{eventObj:s,shouldClamp:!!s,nextValue:a}}handleChange(){if(this.type===`number`&&(x(this,xo,Co).call(this)||y(this,bo).autoClamp)){let{eventObj:e,shouldClamp:t,nextValue:n}=this.handleNumericStrategyAutoClamp(),r=y(this,bo).autoClamp?n:this.valueAsNumber;if(isNaN(r)){let{max:e,min:t}=this;r=e==null?t==null?0:typeof t==`string`?parseFloat(t):+t:typeof e==`string`?parseFloat(e):+e}this.value=x(this,xo,Co).call(this)?x(this,xo,So).call(this,r):r.toString(),this.updateComplete.then(()=>{t&&e&&this.emit(`syn-clamp`,e),this.formControlController.updateValidity(),this.emit(`syn-change`)});return}this.value=this.input.value,this.emit(`syn-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`syn-clear`),this.emit(`syn-input`),this.emit(`syn-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){if(y(this,bo).noStepAlign&&this.type===`number`){let{key:t}=e;if(t===`ArrowUp`||t===`ArrowDown`){e.preventDefault(),e.stopPropagation(),t===`ArrowUp`?this.handleStepUp():t===`ArrowDown`&&this.handleStepDown(),this.handleChange();return}}let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){y(this,bo).noStepValidation||(this.input.step=String(this.step),this.formControlController.updateValidity())}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){if(y(this,bo).noStepAlign){let{max:e,step:t,valueAsNumber:n}=this,r=Number.isNaN(n)?0:n,i=typeof this.min==`string`?parseFloat(this.min):this.min,a=typeof e==`string`?parseFloat(e):e,o=r+(t==null||t===`any`?1:typeof t==`number`?t:parseFloat(t));typeof a==`number`&&a<o?o=a:typeof i==`number`&&i>o&&(o=i);let s=x(this,xo,Co).call(this)?x(this,xo,So).call(this,o):o.toString();this.input.value=s,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){if(y(this,bo).noStepAlign){let{min:e,max:t,step:n,valueAsNumber:r}=this,i=Number.isNaN(r)?0:r,a=typeof e==`string`?parseFloat(e):e,o=typeof t==`string`?parseFloat(t):t,s=i-(n==null||n===`any`?1:typeof n==`number`?n:parseFloat(n));typeof a==`number`&&a>s?s=a:typeof o==`number`&&o<s&&(s=o);let c=x(this,xo,Co).call(this)?x(this,xo,So).call(this,s):s.toString();this.input.value=c,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.hasSlotController.test(`prefix`),r=this.hasSlotController.test(`suffix`),i=this.label?!0:!!e,a=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return g`
      <div
        part="form-control"
        class=${k({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":i,"form-control--has-help-text":a,"form-control--has-prefix":n,"form-control--has-suffix":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${k({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${N(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(y(this,bo).noStepValidation?`any`:this.step)}
              .value=${Qn(this.value)}
              autocapitalize=${N(this.autocapitalize)}
              autocomplete=${N(this.autocomplete)}
              autocorrect=${N(this.autocorrect?void 0:`off`)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${N(this.pattern)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?g`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <syn-icon name="x-circle-fill" library="system"></syn-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?g`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?g`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:g`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type===`number`&&!this.noSpinButtons?g`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${yo({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${yo({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
                  tabindex="-1"
                >
                  <slot name="increment-number-stepper">
                    <syn-icon name="add" library="system"></syn-icon>
                  </slot>
                </button>
              </div>
                `:``}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};bo=new WeakMap,xo=new WeakSet,So=function(e){return uo(e,this.step,{maximumFractionDigits:this.maxFractionDigits,minimumFractionDigits:this.minFractionDigits,...this.numberFormatterOptions})},Co=function(){let{numberFormatterOptions:e,maxFractionDigits:t,minFractionDigits:n,step:r}=this;return t!==void 0&&!Number.isNaN(t)||n!==void 0&&!Number.isNaN(n)||typeof e==`object`||((r===`any`||!r?1:+r).toString().split(`.`)[1]?.length||0)>0},G.styles=[w,Jn,lo,co],G.dependencies={"syn-icon":M,"syn-divider":Ja},v([D(`.input__control`)],G.prototype,`input`,2),v([E()],G.prototype,`hasFocus`,2),v([T({reflect:!0})],G.prototype,`title`,2),v([T({reflect:!0})],G.prototype,`type`,2),v([T()],G.prototype,`name`,2),v([T()],G.prototype,`value`,2),v([Zn()],G.prototype,`defaultValue`,2),v([T({reflect:!0})],G.prototype,`size`,2),v([T()],G.prototype,`label`,2),v([T({attribute:`help-text`})],G.prototype,`helpText`,2),v([T({type:Boolean})],G.prototype,`clearable`,2),v([T({type:Boolean,reflect:!0})],G.prototype,`disabled`,2),v([T()],G.prototype,`placeholder`,2),v([T({type:Boolean,reflect:!0})],G.prototype,`readonly`,2),v([T({attribute:`password-toggle`,type:Boolean})],G.prototype,`passwordToggle`,2),v([T({attribute:`password-visible`,type:Boolean})],G.prototype,`passwordVisible`,2),v([T({attribute:`no-spin-buttons`,type:Boolean})],G.prototype,`noSpinButtons`,2),v([T({reflect:!0})],G.prototype,`form`,2),v([T({type:Boolean,reflect:!0})],G.prototype,`required`,2),v([T()],G.prototype,`pattern`,2),v([T({type:Number})],G.prototype,`minlength`,2),v([T({type:Number})],G.prototype,`maxlength`,2),v([T()],G.prototype,`min`,2),v([T()],G.prototype,`max`,2),v([T()],G.prototype,`step`,2),v([T()],G.prototype,`autocapitalize`,2),v([T({attribute:`autocorrect`,reflect:!0,converter:{fromAttribute:e=>e===``||e===`on`,toAttribute:e=>e?`on`:`off`},type:Boolean})],G.prototype,`autocorrect`,2),v([T()],G.prototype,`autocomplete`,2),v([T({type:Boolean})],G.prototype,`autofocus`,2),v([T()],G.prototype,`enterkeyhint`,2),v([T({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],G.prototype,`spellcheck`,2),v([T()],G.prototype,`inputmode`,2),v([T({attribute:!1,reflect:!1,type:Object})],G.prototype,`numberFormatterOptions`,2),v([T({attribute:`min-fraction-digits`,type:Number})],G.prototype,`minFractionDigits`,2),v([T({attribute:`max-fraction-digits`,type:Number})],G.prototype,`maxFractionDigits`,2),v([T({attribute:`numeric-strategy`,converter:{fromAttribute:e=>e===`modern`?ot:at},type:Object})],G.prototype,`numericStrategy`,1),v([j(`disabled`,{waitUntilFirstUpdate:!0})],G.prototype,`handleDisabledChange`,1),v([j(`step`,{waitUntilFirstUpdate:!0})],G.prototype,`handleStepChange`,1),v([j(`value`,{waitUntilFirstUpdate:!0})],G.prototype,`handleValueChange`,1),G=v([S(`SynInput`)],G),G.define(`syn-input`),P.define(`syn-icon-button`);var wo=h`
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
`,To=()=>new Eo,Eo=class{},Do=new WeakMap,Oo=zt(class extends vo{render(e){return _}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),_}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Do.get(t);n===void 0&&(n=new WeakMap,Do.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Do.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ko=class{constructor(e,t){this.popupRef=To(),this.enableSubmenuTimer=-1,this.hasGlobalDismissListeners=!1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty(`--safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--safe-triangle-cursor-y`,`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()},this.handleHostMouseLeave=e=>{this.isWithinSubmenuInteractionTree(e.relatedTarget)||this.disableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e)}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`syn-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handleWindowBlur=()=>{this.disableSubmenu()},this.handlePageHide=()=>{this.disableSubmenu()},this.handleVisibilityChange=()=>{document.visibilityState===`hidden`&&this.disableSubmenu()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.isExpanded()&&(this.disableSubmenu(),e.stopPropagation())},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupMouseLeave=e=>{this.isWithinSubmenuInteractionTree(e.relatedTarget)||this.disableSubmenu()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`syn-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-y`,`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`mouseleave`,this.handleHostMouseLeave),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`mouseleave`,this.handlePopupMouseLeave),this.popupRef.value.addEventListener(`syn-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`mouseleave`,this.handleHostMouseLeave),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`mouseleave`,this.handlePopupMouseLeave),this.popupRef.value.removeEventListener(`syn-reposition`,this.handlePopupReposition),this.isPopupConnected=!1),this.removeGlobalDismissListeners()}addGlobalDismissListeners(){this.hasGlobalDismissListeners||=(document.addEventListener(`keydown`,this.handleDocumentKeyDown),window.addEventListener(`blur`,this.handleWindowBlur),window.addEventListener(`pagehide`,this.handlePageHide),document.addEventListener(`visibilitychange`,this.handleVisibilityChange),!0)}removeGlobalDismissListeners(){this.hasGlobalDismissListeners&&=(document.removeEventListener(`keydown`,this.handleDocumentKeyDown),window.removeEventListener(`blur`,this.handleWindowBlur),window.removeEventListener(`pagehide`,this.handlePageHide),document.removeEventListener(`visibilitychange`,this.handleVisibilityChange),!1)}isWithinSubmenuInteractionTree(e){if(!(e instanceof Node))return!1;if(this.host.contains(e)||this.popupRef.value?.contains(e))return!0;let t=e.getRootNode();return t instanceof ShadowRoot&&this.isWithinSubmenuInteractionTree(t.host)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`syn-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,e?this.addGlobalDismissListeners():this.removeGlobalDismissListeners(),this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?g`
      <syn-popup
        ${Oo(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </syn-popup>
    `:g` <slot name="submenu" hidden></slot> `}};function Ao(e,t){let n={waitUntilFirstUpdated:!1,...t};return t=>{var r,i;return i=class extends t{constructor(){super(...arguments),vt(this,r,!n.waitUntilFirstUpdated)}updated(t){if(!y(this,r)){b(this,r,!0);return}let n=Array.from(t).filter(([t])=>e.includes(t));if(n.length===0){super.updated(t);return}let i=n.map(([e,t])=>({attribute:e,newValue:this[e],oldValue:t}));this.emit(`syn-attributes-changed`,{detail:i}),super.updated(t)}},r=new WeakMap,i}}var jo=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.type=`normal`,this.checked=!1,this.value=``,this.loading=!1,this.disabled=!1,this.hasSlotController=new A(this,`submenu`),this.submenuController=new ko(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick)}handleDefaultSlotChange(){let e=this.getTextLabel();if(this.cachedTextLabel===void 0){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return Wt(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return g`
      <div
        id="anchor"
        part="base"
        class=${k({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
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
        ${this.loading?g` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:``}
      </div>
    `}};jo.styles=[w,wo],jo.dependencies={"syn-icon":M,"syn-popup":H,"syn-spinner":Wn},v([D(`slot:not([name])`)],jo.prototype,`defaultSlot`,2),v([D(`.menu-item`)],jo.prototype,`menuItem`,2),v([T()],jo.prototype,`type`,2),v([T({type:Boolean,reflect:!0})],jo.prototype,`checked`,2),v([T()],jo.prototype,`value`,2),v([T({type:Boolean,reflect:!0})],jo.prototype,`loading`,2),v([T({type:Boolean,reflect:!0})],jo.prototype,`disabled`,2),v([j(`checked`)],jo.prototype,`handleCheckedChange`,1),v([j(`disabled`)],jo.prototype,`handleDisabledChange`,1),v([j(`type`)],jo.prototype,`handleTypeChange`,1),jo=v([Ao([`type`,`loading`],{waitUntilFirstUpdated:!0})],jo),jo.define(`syn-menu-item`);var Mo=h`
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
`,No=class extends O{constructor(){super(...arguments),this.hasMenuItemsWithCheckmarks=!1,this.checkmarkStyledItems=new Set,this.updateCheckMarksByChildPropChange=e=>{e.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}handleUpdateCheckmarks(e){this.hasMenuItemsWithCheckmarks=e.some(e=>e.type===`checkbox`||e.loading),this.syncCheckmarkVisibility(e)}syncCheckmarkVisibility(e){if(this.checkmarkStyledItems.forEach(t=>{e.includes(t)||(t.style.removeProperty(`--display-checkmark`),this.checkmarkStyledItems.delete(t))}),this.hasMenuItemsWithCheckmarks){e.forEach(e=>{e.style.removeProperty(`--display-checkmark`),this.checkmarkStyledItems.delete(e)});return}e.forEach(e=>{e.style.setProperty(`--display-checkmark`,`none`),this.checkmarkStyledItems.add(e)})}disconnectedCallback(){this.removeEventListener(`syn-attributes-changed`,this.updateCheckMarksByChildPropChange),this.checkmarkStyledItems.forEach(e=>e.style.removeProperty(`--display-checkmark`)),this.checkmarkStyledItems.clear()}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`),this.addEventListener(`syn-attributes-changed`,this.updateCheckMarksByChildPropChange)}getMenuItemFromEvent(e){let t=e.composedPath(),n=t.find(e=>e instanceof HTMLElement&&this.isMenuItem(e));if(!(!n||!(n instanceof HTMLElement))&&t.find(e=>e instanceof Element&&e.getAttribute(`role`)===`menu`)===this)return n}handleClick(e){let t=this.getMenuItemFromEvent(e);t&&(t.type===`checkbox`&&(t.checked=!t.checked),this.emit(`syn-select`,{detail:{item:t}}))}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=this.getMenuItemFromEvent(e);t&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();this.handleUpdateCheckmarks(e),e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`syn-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getMenuItemsFromElement(e){return e.inert?[]:this.isMenuItem(e)?[e]:e.tagName.toLowerCase()===`syn-menu`?[]:[...e.children].flatMap(e=>this.getMenuItemsFromElement(e))}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].flatMap(e=>this.getMenuItemsFromElement(e))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return g`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};No.styles=[w,Mo],v([D(`slot`)],No.prototype,`defaultSlot`,2),v([E()],No.prototype,`hasMenuItemsWithCheckmarks`,2),No.define(`syn-menu`);var Po=h`
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
`,Fo=(e,t)=>{e.disabled?e.dataset.originallyDisabled=`true`:delete e.dataset.originallyDisabled,t&&(e.disabled=!0)},Io=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`[default]`,`prefix`,`suffix`,`label`),this.disabled=!1,this.label=``}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:[`disabled`],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(e=>e.target===this),n=e.filter(e=>e.target.matches(`syn-option`)),r=t.length>0||n.length>0;r&&this.mutationObserver.disconnect(),n.length>0&&n.forEach(e=>{Fo(e.target,this.disabled)}),t.length>0&&t.forEach(e=>{e.type===`attributes`&&this.assignedOptions.forEach(e=>{e.disabled=this.disabled?!0:!!e.dataset?.originallyDisabled}),e.type===`childList`&&e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.matches(`syn-option`)&&Fo(e,this.disabled)})}),r&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){let{disabled:e}=this,t=this.hasSlotController.test(`label`);return bn`
      <div
        class=${k({optgroup:!0,"optgroup--has-label":this.label?!0:!!t,"optgroup--has-prefix":this.hasSlotController.test(`prefix`),"optgroup--has-suffix":this.hasSlotController.test(`suffix`),"optgroup--is-disabled":this.disabled})}
        role="${e?`presentation`:`group`}"
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
    `}};Io.styles=Po,Io.dependencies={"syn-divider":Ja},v([It({selector:`syn-option`})],Io.prototype,`assignedOptions`,2),v([T({reflect:!0,type:Boolean})],Io.prototype,`disabled`,2),v([T()],Io.prototype,`label`,2),Io.define(`syn-optgroup`);var Lo=h`
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
`,K=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`[default]`,`children`,`prefix`,`suffix`),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.rel=`noreferrer noopener`,this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}isButton(){return!this.href&&!this.hasSlotController.test(`children`)}isLink(){return!!this.href&&!this.hasSlotController.test(`children`)}isAccordion(){return this.hasSlotController.test(`children`)}getNavItemChildren(e){return Array.from(e?.assignedElements({flatten:!0})||[]).map(e=>e.tagName.toLowerCase()===`syn-nav-item`?e:Array.from(e.querySelectorAll(`:scope > syn-nav-item`))).flat()}getAllNestedNavItems(e){let t=this.getNavItemChildren(e),n=t.map(e=>e.getAllNestedNavItems(e.childrenSlot)).flat();return t.concat(n)}handleCurrentMarkedChild(){let e=this.closest(`syn-side-nav`);(!this.open||e?.variant===`rail`)&&(this.currentMarkedChild=this.getAllNestedNavItems(this.childrenSlot).some(e=>e.current))}handleClickButton(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}handleClickSummary(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit(`syn-hide`,{cancelable:!0})}showDetails(){this.open=!0,this.emit(`syn-show`,{cancelable:!0})}handleSlotChange(){let e=getComputedStyle(this);if(e.length===0){setTimeout(()=>{this.handleSlotChange()});return}this.handleCurrentMarkedChild();let t=e.getPropertyValue(`--indentation`),n=Math.min(parseInt(t,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(e=>{e.style.setProperty(`--indentation`,n.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleWidth(e){e.forEach(e=>{requestAnimationFrame(()=>{if(e.contentRect.width<100){let e=this.hasSlotController.test(`prefix`);this.showPrefixOnly=e}else this.showPrefixOnly=!1;this.isMultiLine=e.contentRect.height>48})})}handleHorizontalChange(){this.horizontal?this.resizeObserver.disconnect():this.resizeObserver.observe(this)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleWidth(e)),this.horizontal||this.resizeObserver.observe(this)}firstUpdated(e){super.firstUpdated(e),this.mutationObserver=new MutationObserver(()=>{this.childrenSlot&&this.handleCurrentMarkedChild()}),this.mutationObserver.observe(this,{attributeFilter:[`current`,`open`],childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(e){this.control.focus(e)}render(){let e=this.isButton(),t=this.isLink(),n=this.isAccordion(),r=this.closest(`syn-side-nav`),i=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&r?.variant===`rail`&&!r?.open,a=vn`button`;n?a=vn`summary`:t&&(a=vn`a`);let o=(this.chevron||n)&&!this.horizontal,s;n?s=this.handleClickSummary:e&&(s=this.handleClickButton);let c=bn`
      <${a}
        aria-controls=${N(n?`navigation-item-details`:void 0)}
        aria-current=${N(this.current?`page`:void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${k({"nav-item":!0,"nav-item--current":this.current||i,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test(`[default]`),"nav-item--has-prefix":this.hasSlotController.test(`prefix`),"nav-item--has-suffix":this.hasSlotController.test(`suffix`),"nav-item--horizontal":this.horizontal,"nav-item--is-link":t,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":n})}
        @click=${s}
        ?disabled=${N(t?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${N(t?this.href:void 0)}
        part="base"
        role=${t?`link`:`button`}
        rel=${N(t?this.rel:void 0)}
        tabindex=${this.disabled?`-1`:`0`}
        target=${N(t?this.target:void 0)}
      >

        ${this.divider&&!this.horizontal?bn`<syn-divider class="divider" part="divider"></syn-divider>`:``}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${o?bn`
            <syn-icon
              class=${k({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:``}

          <div
            class=${k({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||i})}
            part="current-indicator"
          >
          </div>
        </div>

      </${a}>
    `;return n?bn`
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
    `:c}};K.styles=[w,Lo],K.dependencies={"syn-divider":Ja,"syn-icon":M},v([E()],K.prototype,`hasFocus`,2),v([E()],K.prototype,`showPrefixOnly`,2),v([E()],K.prototype,`currentMarkedChild`,2),v([E()],K.prototype,`isMultiLine`,2),v([D(`slot[name="children"]`)],K.prototype,`childrenSlot`,2),v([D(`.nav-item`)],K.prototype,`control`,2),v([T({reflect:!0,type:String})],K.prototype,`href`,2),v([T()],K.prototype,`target`,2),v([T()],K.prototype,`rel`,2),v([T({reflect:!0,type:Boolean})],K.prototype,`current`,2),v([T({reflect:!0,type:Boolean})],K.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],K.prototype,`horizontal`,2),v([T({reflect:!0,type:Boolean})],K.prototype,`chevron`,2),v([T({reflect:!0,type:Boolean})],K.prototype,`open`,2),v([T({reflect:!0,type:Boolean})],K.prototype,`divider`,2),v([j(`horizontal`,{waitUntilFirstUpdate:!0})],K.prototype,`handleHorizontalChange`,1);var Ro=K;K.define(`syn-nav-item`);var zo=h`
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
`,Bo=class extends O{render(){return g`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}};Bo.styles=[w,zo],Bo.dependencies={"syn-divider":Ja},Bo.define(`syn-menu-label`);var Vo=[10,25,50,100],Ho=e=>Number.isSafeInteger(e)&&Number(e)>0,Uo=e=>Number.isSafeInteger(e)&&Number(e)>=0,Wo=(e,t,n,r)=>{let i=e.get(t);return r(i)?i:n},Go=(e,t)=>Math.ceil((Number.isFinite(e)&&e>0?e:0)/(Number.isFinite(t)&&t>0?t:1)),Ko=(e,t,n)=>{if(e<=0)return{endIndex:0,startIndex:0};let r=Go(e,t),i=Math.min(Math.max(n,1),r),a=(i-1)*t+1;return{endIndex:Math.min(i*t,e),startIndex:a}},qo=(e,t)=>Number.isFinite(e)?Math.min(Math.max(e,1),Number.isFinite(t)?Math.max(t,1):1):1,Jo=(e,t)=>{let n=Number.isFinite(e)&&e>0?e:1;return Math.max(1,Math.ceil((Number.isFinite(t)&&t>0?t:0)/n))},Yo=e=>{let t=(Array.isArray(e)?e:[]).map(e=>Number(e)).filter(e=>Number.isSafeInteger(e)&&e>0);return t.length>0?t:Vo},Xo=e=>Yo(e).reduce((e,t)=>Math.max(e,String(t).length),1),Zo=(e,t)=>String(Jo(e,t)).length,Qo=h`
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
`,$o=h`
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

  ${Lr}
`,q=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new A(this,`help-text`,`label`),this.localize=new C(this),this.typeToSelectString=``,this.isUserInput=!1,this.hasFocus=!1,this.displayLabel=``,this.selectedOptions=[],this.valueHasChanged=!1,this.delimiter=` `,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.getTag=e=>g`
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
        @syn-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </syn-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`syn-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.isUserInput=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}getContainingModalHost(){return this.closest(`syn-dialog, syn-drawer`)}get value(){return this._value}set value(e){this.multiple?Array.isArray(e)||(e=typeof e==`string`?e.split(this.delimiter):[e].filter(Ur)):e=Array.isArray(e)?e.join(this.delimiter):e,!Wr(this._value,e)&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&!this.readonly&&this.tagContainer&&(this.resizeObserver=new ResizeObserver(e=>{let t=e.at(0);this.tagContainer.style.setProperty(`--syn-select-tag-max-width`,`${t.contentRect.width}px`)}),this.resizeObserver.observe(this.tagContainer))}connectedCallback(){super.connectedCallback(),this.selectedOptionObserver=new MutationObserver(()=>{this.multiple?this.readonly?this.displayLabel=this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.requestUpdate():this.displayLabel=this.selectedOptions[0]?.getTextLabel?.()??``}),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.selectedOptionObserver?.disconnect()}observeSelectedOptions(){this.selectedOptionObserver?.disconnect(),this.selectedOptions.forEach(e=>{this.selectedOptionObserver.observe(e,{childList:!0,characterData:!0,subtree:!0})})}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getContainingModalHost()?.modal?.activateExternal(),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getContainingModalHost()?.modal?.deactivateExternal(),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`syn-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`syn-icon-button`);this.disabled||this.readonly||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`syn-clear`),this.emit(`syn-input`),this.emit(`syn-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`syn-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.isUserInput=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`syn-option`)||customElements.whenDefined(`syn-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue;this.handleDelimiterChange();let n=Array.isArray(t)?t:typeof t==`string`?t.split(this.delimiter):[t].filter(Ur),r=[];e.forEach(e=>r.push(e.value));let i=n.map(String),a=e.filter(e=>i.includes(String(e.value)));this.setSelectedOptions(a)}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}))}getAllOptions(){return[...this.querySelectorAll(`syn-option`)]}getFirstOption(){return this.querySelector(`syn-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected),this.observeSelectedOptions();let t=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.displayLabel=this.readonly?this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.placeholder&&this.value.length===0?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.value=e?.value??``,this.displayLabel=e?.getTextLabel?.()??``}this.valueHasChanged=t,this.updateComplete.then(()=>{this.isUserInput=!1,this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return g`<div @syn-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?wr(n):n}
        </div>`}return t===this.maxOptionsVisible?g`<syn-tag size=${this.size}>+${this.selectedOptions.length-t}</syn-tag>`:g``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDelimiterChange(){this.getAllOptions().forEach(e=>{e.delimiter=this.delimiter})}handleDisabledChange(){(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange())}updated(e){super.updated(e),(e.has(`multiple`)||e.has(`readonly`))&&(this.resizeObserver?.disconnect(),this.multiple&&!this.readonly&&this.enableResizeObserver())}willUpdate(e){super.willUpdate(e),e.has(`value`)&&!this.defaultValue&&this.value&&!this.isUserInput&&(this.defaultValue=this.value,this.valueHasChanged=!1)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=(Array.isArray(this.value)?this.value:[this.value]).map(String),n=e.filter(e=>t.includes(String(e.value)));this.setSelectedOptions(n)}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`syn-show`),this.addOpenListeners(),await L(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=z(this,`select.show`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.currentOption&&yr(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.removeOpenListeners(),await L(this);let{keyframes:e,options:t}=z(this,`select.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,F(this,`syn-after-show`)}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,F(this,`syn-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=Ur(this.value),t=this.hasSlotController.test(`label`),n=this.hasSlotController.test(`help-text`),r=this.label?!0:!!t,i=this.helpText?!0:!!n,a=this.clearable&&!this.disabled&&!this.readonly&&e,o=this.placeholder&&this.value&&!e;return g`
      <div
        part="form-control"
        class=${k({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":r,"form-control--has-help-text":i})}
        @click=${this.handleFormControlClick}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${k({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--readonly":this.readonly,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement+`-start`}
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
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple&&!this.readonly?g`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value?.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${a?g`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <syn-icon library="system" name="chevron-down"></syn-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
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
          aria-hidden=${i?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[w,Jn,$o],q.dependencies={"syn-icon":M,"syn-popup":H,"syn-tag":qr},v([D(`.select`)],q.prototype,`popup`,2),v([D(`.select__combobox`)],q.prototype,`combobox`,2),v([D(`.select__display-input`)],q.prototype,`displayInput`,2),v([D(`.select__value-input`)],q.prototype,`valueInput`,2),v([D(`.select__listbox`)],q.prototype,`listbox`,2),v([D(`.select__tags`)],q.prototype,`tagContainer`,2),v([E()],q.prototype,`hasFocus`,2),v([E()],q.prototype,`displayLabel`,2),v([E()],q.prototype,`currentOption`,2),v([E()],q.prototype,`selectedOptions`,2),v([E()],q.prototype,`valueHasChanged`,2),v([T()],q.prototype,`delimiter`,2),v([T()],q.prototype,`name`,2),v([E()],q.prototype,`value`,1),v([T({attribute:`value`})],q.prototype,`defaultValue`,2),v([T({reflect:!0})],q.prototype,`size`,2),v([T()],q.prototype,`placeholder`,2),v([T({type:Boolean,reflect:!0})],q.prototype,`multiple`,2),v([T({attribute:`max-options-visible`,type:Number})],q.prototype,`maxOptionsVisible`,2),v([T({type:Boolean,reflect:!0})],q.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],q.prototype,`readonly`,2),v([T({type:Boolean})],q.prototype,`clearable`,2),v([T({type:Boolean,reflect:!0})],q.prototype,`open`,2),v([T()],q.prototype,`label`,2),v([T({reflect:!0})],q.prototype,`placement`,2),v([T({attribute:`help-text`})],q.prototype,`helpText`,2),v([T({reflect:!0})],q.prototype,`form`,2),v([T({type:Boolean,reflect:!0})],q.prototype,`required`,2),v([T()],q.prototype,`getTag`,2),v([j(`delimiter`)],q.prototype,`handleDelimiterChange`,1),v([j([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],q.prototype,`handleDisabledChange`,1),v([j([`defaultValue`,`value`,`delimiter`],{waitUntilFirstUpdate:!0})],q.prototype,`handleValueChange`,1),v([j(`open`,{waitUntilFirstUpdate:!0})],q.prototype,`handleOpenChange`,1),q=v([S(`SynSelect`)],q),R(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),R(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}});var es=class extends O{constructor(){super(...arguments),this.baseRef=To(),this.localize=new C(this),this.divider=!1,this.disabled=!1,this.size=`medium`,this.currentPage=1,this.pageSize=25,this.pageSizeOptions=[10,25,50,100],this.totalItems=0,this.variant=`full`,this.ariaLabel=`Pagination`}pageChangedViaUserInput(e){let t=e.target.valueAsNumber;Ho(t)&&this.updateCurrentPage(t)}navigationClicked(e,t){e.currentTarget?.blur(),this.updateCurrentPage(t)}sanitizeInvalidPropertyValues(e){if(e.has(`pageSize`)&&!Ho(this.pageSize)&&(this.pageSize=Wo(e,`pageSize`,es.DEFAULT_PAGE_SIZE,Ho)),e.has(`currentPage`)&&!Ho(this.currentPage)&&(this.currentPage=Wo(e,`currentPage`,es.DEFAULT_CURRENT_PAGE,Ho)),e.has(`totalItems`)&&!Uo(this.totalItems)&&(this.totalItems=Wo(e,`totalItems`,es.DEFAULT_TOTAL_ITEMS,Uo)),e.has(`pageSizeOptions`)){let e=Yo(this.pageSizeOptions);(this.pageSizeOptions.length!==e.length||this.pageSizeOptions.some((t,n)=>t!==e[n]))&&(this.pageSizeOptions=e)}}updateCurrentPage(e){let t=qo(e,Jo(this.pageSize,this.totalItems)),{currentPage:n}=this;t!==n&&(this.emit(`syn-pagination-page-changed`,{detail:{currentPage:t,previousPage:n}}),this.currentPage=t)}pageSizeChanged(e){let{currentPage:t,pageSize:n}=this,{value:r}=e.target,i=parseInt(r,10);if(!Number.isSafeInteger(i)||i<=0)return;let a=(t-1)*n+1,o=Jo(i,this.totalItems),s=qo(Math.floor((a-1)/i)+1,o);this.pageSize=i,this.currentPage=s,this.emit(`syn-pagination-page-size-changed`,{detail:{currentPageSize:i,previousPageSize:n}}),s!==t&&this.emit(`syn-pagination-page-changed`,{detail:{currentPage:s,previousPage:t}})}willUpdate(e){super.willUpdate(e),this.sanitizeInvalidPropertyValues(e);let t=e.get(`pageSizeOptions`);if(Array.isArray(t)&&!this.pageSizeOptions.includes(this.pageSize)){let e=this.pageSizeOptions[0],t=(this.currentPage-1)*this.pageSize+1,n=Jo(e,this.totalItems),r=qo(Math.floor((t-1)/e)+1,n);this.pageSize=e,this.currentPage=r}if(e.has(`currentPage`)||e.has(`pageSize`)||e.has(`totalItems`)){let e=Jo(this.pageSize,this.totalItems),t=qo(this.currentPage,e);t!==this.currentPage&&(this.currentPage=t)}}updated(e){if(super.updated(e),e.has(`pageSizeOptions`)||e.has(`pageSize`)||e.has(`totalItems`)){let e=Xo(this.pageSizeOptions),t=Zo(this.pageSize,this.totalItems),n=this.baseRef.value;n&&(n.style.setProperty(`--pagination-page-size-option-char-count`,String(e)),n.style.setProperty(`--pagination-total-pages-char-count`,String(t)))}}render(){let e=Go(this.totalItems,this.pageSize),t=this.variant===`compact`,n=this.disabled||e===0,r=Ko(this.totalItems,this.pageSize,this.currentPage),i=this.pageSizeOptions.includes(this.pageSize)?this.pageSize:this.pageSizeOptions[0],a=this.currentPage===1,o=this.currentPage===e;return g`
      ${this.divider?g`<syn-divider part="divider"></syn-divider>`:_}
      <nav
        aria-label=${this.ariaLabel}
        class="pagination"
        part="base"
        ${Oo(this.baseRef)}
      >
        ${t?_:g`
          <div class="pagination__page-size-select-wrapper" part="page-size-select-wrapper">
            <syn-select
              class="pagination__page-size-select"
              ?disabled=${n}
              label=${this.localize.term(`paginationItemsPerPage`)}
              part="page-size-select"
              value=${i}
              size=${this.size}
              @syn-change=${this.pageSizeChanged}
            >
              ${this.pageSizeOptions.map(e=>g`
                <syn-option value="${e}">
                  ${e}
                </syn-option>
              `)}
            </syn-select>
            <!-- /.pagination__page-size-select -->

            <span part="page-item-summary">
              ${this.localize.term(`paginationItemSummary`,r.startIndex,r.endIndex,this.totalItems)}
            </span>
            <!-- /.pagination__page-item-summary -->
          </div>
          <!-- /.pagination__page-size-select-wrapper -->
        `}

        <div class="pagination__navigation" part="navigation">
          <section>
            <syn-icon-button
              @click=${e=>this.navigationClicked(e,1)}
              color="primary"
              ?disabled=${a||n}
              label=${this.localize.term(`paginationFirstPage`)}
              library="system"
              name="first-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${e=>this.navigationClicked(e,this.currentPage-1)}
              color="primary"
              ?disabled=${a||n}
              label=${this.localize.term(`paginationPreviousPage`)}
              library="system"
              name="previous-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>

          <section part="page-input-section">
            <syn-input
              class="pagination__page-input"
              ?disabled=${n}
              label=${this.localize.term(`paginationInputLabel`)}
              max=${e}
              min="1"
              no-spin-buttons
              numeric-strategy="modern"
              part="page-input"
              size=${this.size}
              @syn-change=${this.pageChangedViaUserInput}
              type="number"
              value=${this.currentPage}
            ></syn-input>
            
            <span>${this.localize.term(`paginationOfTotalPages`,e)}</span>
          </section>

          <section>
            <syn-icon-button
              @click=${e=>this.navigationClicked(e,this.currentPage+1)}
              color="primary"
              ?disabled=${o||n}
              label=${this.localize.term(`paginationNextPage`)}
              library="system"
              name="next-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${t=>this.navigationClicked(t,e)}
              color="primary"
              ?disabled=${o||n}
              label=${this.localize.term(`paginationLastPage`)}
              library="system"
              name="last-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>
        </div>
        <!-- /.pagination__navigation -->
      </nav>
    `}};es.DEFAULT_PAGE_SIZE=25,es.DEFAULT_CURRENT_PAGE=1,es.DEFAULT_TOTAL_ITEMS=0,es.styles=[w,Qo],es.dependencies={"syn-divider":Ja,"syn-icon-button":P,"syn-input":G,"syn-option":Hr,"syn-select":q},v([T({type:Boolean})],es.prototype,`divider`,2),v([T({reflect:!0,type:Boolean})],es.prototype,`disabled`,2),v([T({reflect:!0})],es.prototype,`size`,2),v([T({attribute:`current-page`,reflect:!0,type:Number})],es.prototype,`currentPage`,2),v([T({attribute:`page-size`,reflect:!0,type:Number})],es.prototype,`pageSize`,2),v([T({attribute:`page-size-options`,converter:{fromAttribute:e=>e.split(`,`).map(e=>{let t=parseInt(e.trim(),10);return Number.isSafeInteger(t)?t:null}).filter(Boolean)},type:Array})],es.prototype,`pageSizeOptions`,2),v([T({attribute:`total-items`,reflect:!0,type:Number})],es.prototype,`totalItems`,2),v([T({attribute:`variant`,reflect:!0})],es.prototype,`variant`,2),v([T({attribute:`aria-label`})],es.prototype,`ariaLabel`,2),es=v([S(`SynPagination`)],es),es.define(`syn-pagination`),Hr.define(`syn-option`);var ts=h`
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
`,ns=e=>Array.from(e.assignedElements({flatten:!0})),rs=e=>e.tagName.toLocaleLowerCase()===`syn-nav-item`||(e.getAttribute(`role`)??``)===`menuitem`,is=e=>e.filter(rs),as=e=>{e.setAttribute(`horizontal`,`true`),e.removeAttribute(`slot`),e.removeAttribute(`tabindex`),e.dataset.originalRole?e.setAttribute(`role`,e.dataset.originalRole):e.removeAttribute(`role`)},os=e=>{e.removeAttribute(`horizontal`),e.setAttribute(`slot`,`menu`),e.setAttribute(`role`,`menuitem`)},ss=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}getSlottedNavItems(){let e=is(ns(this.defaultSlot)),t=is(ns(this.menuSlot));return e.concat(t)}cacheItemPositions(e){let{left:t}=this.horizontalNav.getBoundingClientRect();e.forEach(e=>{e.removeAttribute(`slot`);let{right:n}=e.getBoundingClientRect();e.dataset.right=(n-t).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){let e=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(e);let{width:t}=this.horizontalNav.getBoundingClientRect(),n=t-(this.priorityMenu.classList.contains(`priority-menu--hidden`)?0:this.priorityMenu.clientWidth),r,i=e.at(-1),a=e.map(e=>{let a=e===i?t:n,o=!!(r||parseFloat(e.dataset.right)>a);return o&&!r&&(r=parseFloat(e.dataset.right)),{isHidden:o,item:e}}),o=a.filter(({isHidden:e})=>!e).length,s=o===1&&e.length>1;a.forEach(({item:e,isHidden:t})=>{t||s?os(e):as(e)}),this.hasItemsInDropdown=o!==e.length,this.amountOfVisibleItems=s?0:o}renderPriorityMenu(){return bn`
      <syn-dropdown
        class=${k({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${k({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term(`menu`)}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){let e=this.getSlottedNavItems();e.length!==this.amountOfNavItems&&(this.cacheItemPositions(e),this.handlePriorityMenu(),this.amountOfNavItems=e.length)}firstUpdated(){this.getSlottedNavItems().forEach(e=>{e.dataset.originalRole=e.getAttribute(`role`)??``})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return bn`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}};ss.styles=[w,ts],ss.dependencies={"syn-dropdown":ro,"syn-icon":M,"syn-menu":No,"syn-nav-item":K},v([D(`slot:not([name])`)],ss.prototype,`defaultSlot`,2),v([D(`slot[name=menu]`)],ss.prototype,`menuSlot`,2),v([D(`.horizontal-nav`)],ss.prototype,`horizontalNav`,2),v([D(`.priority-menu`)],ss.prototype,`priorityMenu`,2),v([E()],ss.prototype,`itemPositionsCached`,2),v([E()],ss.prototype,`amountOfNavItems`,2),v([E()],ss.prototype,`amountOfVisibleItems`,2),v([E()],ss.prototype,`hasItemsInDropdown`,2),ss.define(`syn-prio-nav`),H.define(`syn-popup`);var cs=h`
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
`,ls=h`
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
`,us=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.value=0,this.label=``}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;this.indicatorOffset=`${n}px`}}render(){return g`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
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
    `}};us.styles=[w,ls,cs],v([D(`.progress-ring__indicator`)],us.prototype,`indicator`,2),v([E()],us.prototype,`indicatorOffset`,2),v([T({type:Number,reflect:!0})],us.prototype,`value`,2),v([T()],us.prototype,`label`,2),us.define(`syn-progress-ring`);var ds=h`
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
`,fs=h`
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
`,ps=`important`,ms=` !important`,hs=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(ms);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?ps:``):n[e]=r}}return Re}}),gs=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.value=0,this.indeterminate=!1,this.label=``}render(){return g`
      <div
        part="base"
        class=${k({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${N(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${hs({width:`${this.value}%`})}>
          ${this.indeterminate?``:g` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};gs.styles=[w,fs,ds],v([T({type:Number,reflect:!0})],gs.prototype,`value`,2),v([T({type:Boolean,reflect:!0})],gs.prototype,`indeterminate`,2),v([T()],gs.prototype,`label`,2),gs.define(`syn-progress-bar`);var _s=h`
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
    --radiogroup-padding: var(--syn-spacing-x-small);

    border: 1px solid var(--syn-input-border-color);
    border-radius: var(--syn-input-border-radius-large);
    gap: var(--syn-spacing-x-small);
    padding: var(--radiogroup-padding);
  }

  .form-control--has-button-group syn-button-group[readonly]::part(base) {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
  }

  .form-control--has-button-group syn-button-group[size="small"]::part(base) {
    --radiogroup-padding: var(--syn-radio-button-spacing-small);
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
`,vs=class extends O{constructor(){super(...arguments),this.formControlController=new a(this),this.hasSlotController=new A(this,`help-text`,`label`),this.customValidityMessage=``,this.hasButtonGroup=!1,this.errorMessage=``,this.defaultValue=``,this.label=``,this.helpText=``,this.name=`option`,this.value=``,this.size=`medium`,this.layout=`vertical`,this.form=``,this.required=!1}get validity(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?s:o:c}get validationMessage(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?this.validationInput.validationMessage:``:this.customValidityMessage}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`syn-radio, syn-radio-button`)]}handleRadioClick(e){let t=e.target.closest(`syn-radio, syn-radio-button`);if(!t||t.disabled||t.readonly)return;let n=this.getAllRadios(),r=this.value;this.value=t.value,n.forEach(e=>{e.checked=e===t}),this.value!==r&&(this.emit(`syn-change`),this.emit(`syn-input`))}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key))return;let t=this.getAllRadios().filter(e=>!e.disabled&&!e.readonly),n=t.find(e=>e.checked)??t[0],r=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,i=this.value,a=t.indexOf(n)+r;a<0&&(a=t.length-1),a>t.length-1&&(a=0),t[a]&&(this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,this.hasButtonGroup?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==i&&(this.emit(`syn-change`),this.emit(`syn-input`)),e.preventDefault())}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){let e=this.getAllRadios();if(await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=e.some(e=>e.tagName.toLowerCase()===`syn-radio-button`),e.length>0&&!e.some(e=>e.checked))if(this.hasButtonGroup){let t=e[0].shadowRoot?.querySelector(`button`);t&&t.setAttribute(`tabindex`,`0`)}else e[0].setAttribute(`tabindex`,`0`);if(this.hasButtonGroup){let t=this.shadowRoot?.querySelector(`syn-button-group`);t&&t.toggleAttribute(`readonly`,e.every(e=>e.readonly)),t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get(`syn-radio`)&&customElements.get(`syn-radio-button`)){this.syncRadioElements();return}customElements.get(`syn-radio`)?this.syncRadioElements():customElements.whenDefined(`syn-radio`).then(()=>this.syncRadios()),customElements.get(`syn-radio-button`)?this.syncRadioElements():customElements.whenDefined(`syn-radio-button`).then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>{e.checked=e.value===this.value}),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let e=this.required&&!this.value,t=this.customValidityMessage!==``;return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?``:this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),e}setCustomValidity(e=``){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus({...e,focusVisible:!0})}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=g`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return g`
      <fieldset
        part="form-control"
        class=${k({"form-control":!0,"form-control--has-button-group":this.hasButtonGroup,"form-control--has-help-text":r,"form-control--has-label":n,"form-control--is-horizontal":this.layout===`horizontal`,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--radio-group":!0,"form-control--small":this.size===`small`})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
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

          ${this.hasButtonGroup?g`
                <syn-button-group
                  exportparts="base:button-group__base"
                  part="button-group"
                  role="presentation"
                  size=${this.size}
                >
                  ${i}
                </syn-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};vs.styles=[w,Jn,_s],vs.dependencies={"syn-button-group":zn},v([D(`slot:not([name])`)],vs.prototype,`defaultSlot`,2),v([D(`.radio-group__validation-input`)],vs.prototype,`validationInput`,2),v([E()],vs.prototype,`hasButtonGroup`,2),v([E()],vs.prototype,`errorMessage`,2),v([E()],vs.prototype,`defaultValue`,2),v([T()],vs.prototype,`label`,2),v([T({attribute:`help-text`})],vs.prototype,`helpText`,2),v([T()],vs.prototype,`name`,2),v([T({reflect:!0})],vs.prototype,`value`,2),v([T({reflect:!0})],vs.prototype,`size`,2),v([T({reflect:!0})],vs.prototype,`layout`,2),v([T({reflect:!0})],vs.prototype,`form`,2),v([T({reflect:!0,type:Boolean})],vs.prototype,`required`,2),v([j(`size`,{waitUntilFirstUpdate:!0})],vs.prototype,`handleSizeChange`,1),v([j(`value`)],vs.prototype,`handleValueChange`,1),vs=v([S(`SynRadioGroup`)],vs),vs.define(`syn-radio-group`);var ys=h`
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
`,bs=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.iconOnly=!1,this.checked=!1,this.disabled=!1,this.readonly=!1,this.size=`medium`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}isDisabled(){return this.disabled||this.readonly}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleClick(e){if(this.isDisabled()){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleSlotChange(){let e=Wt(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),n=t.length===1&&t[0].tagName.toLowerCase()===`syn-icon`;this.iconOnly=n&&e===``}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.isDisabled()?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return g`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?` button--checked`:``}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${k({button:!0,"button--checked":this.checked,"button--default":!0,"button--disabled":this.disabled,"button--filled":this.checked,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`),"button--icon-only":this.iconOnly,"button--large":this.size===`large`,"button--medium":this.size===`medium`,"button--primary":!0,"button--readonly":this.readonly,"button--small":this.size===`small`,"button--text":!this.checked})}
          aria-disabled=${this.disabled}
          type="button"
          tabindex=${N(this.disabled?`-1`:void 0)}
          value=${N(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label" @slotchange=${this.handleSlotChange}></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};bs.styles=[w,Vn,ys],v([D(`.button`)],bs.prototype,`input`,2),v([D(`slot:not([name])`)],bs.prototype,`defaultSlot`,2),v([E()],bs.prototype,`hasFocus`,2),v([E()],bs.prototype,`iconOnly`,2),v([T({reflect:!0,type:Boolean})],bs.prototype,`checked`,2),v([T()],bs.prototype,`value`,2),v([T({reflect:!0,type:Boolean})],bs.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],bs.prototype,`readonly`,2),v([T({reflect:!0})],bs.prototype,`size`,2),v([j([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],bs.prototype,`handleDisabledChange`,1),bs=v([S(`SynRadioButton`)],bs),bs.define(`syn-radio-button`);var xs=h`
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
`,Ss=class extends O{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size=`medium`,this.disabled=!1,this.readonly=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit(`syn-blur`)},this.handleClick=()=>{if(this.readonly){this.focus();return}this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit(`syn-focus`)},this.addEventListener(`blur`,this.handleBlur),this.addEventListener(`click`,this.handleClick),this.addEventListener(`focus`,this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.setAttribute(`tabindex`,`-1`),this.setAttribute(`aria-disabled`,this.disabled||this.readonly?`true`:`false`)}handleCheckedChange(){this.setAttribute(`aria-checked`,this.checked?`true`:`false`),this.setAttribute(`tabindex`,this.checked?`0`:`-1`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled||this.readonly?`true`:`false`)}render(){return g`
      <span
        part="base"
        class=${k({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--large":this.size===`large`,"radio--medium":this.size===`medium`,"radio--readonly":this.readonly,"radio--small":this.size===`small`})}
      >
        <span part="${`control${this.checked?` control--checked`:``}`}" class="radio__control">
          ${this.checked?g` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:``}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ss.styles=[w,xs],Ss.dependencies={"syn-icon":M},v([E()],Ss.prototype,`checked`,2),v([E()],Ss.prototype,`hasFocus`,2),v([T()],Ss.prototype,`value`,2),v([T({reflect:!0})],Ss.prototype,`size`,2),v([T({reflect:!0,type:Boolean})],Ss.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],Ss.prototype,`readonly`,2),v([j(`checked`)],Ss.prototype,`handleCheckedChange`,1),v([j([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],Ss.prototype,`handleDisabledChange`,1),Ss=v([S(`SynRadio`)],Ss),Ss.define(`syn-radio`);var Cs=h`
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
`,ws=class extends O{constructor(){super(...arguments),this.subdivision=!1}render(){return g`
      <div
        class=${k({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}};ws.styles=[w,Cs],v([T({reflect:!0,type:Boolean})],ws.prototype,`subdivision`,2),ws.define(`syn-range-tick`);var Ts=h`
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
`,Es=(e,t)=>e-t,Ds=(e,t)=>{if(e.length!==t.length)return!0;let n=e.slice().sort(Es),r=t.slice().sort(Es);for(let e=0;e<n.length;e+=1)if(n[e]!==r[e])return!0;return!1},Os=(e,t,n)=>{let r=e.getBoundingClientRect(),i=r.width;if(i<=0)return 0;let a=t;return a-=r.left,a<=0?+!!n:a>=i?+!n:(a/=i,n?1-a:a)},ks=h`
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
`,As=class extends O{constructor(){super(),this.localize=new C(this),this.anchor=void 0,this.content=``,this.placement=`top`,this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=xn(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=xn(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit(`syn-show`),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await L(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=z(this,`tooltip.show`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.popup.reposition(),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await L(this.body);let{keyframes:e,options:t}=z(this,`tooltip.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit(`syn-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,F(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this,`syn-after-hide`)}render(){return g`
      <syn-popup
        .anchor=${this.anchor}
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${k({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        arrow
        hover-bridge
      >
        ${``}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${``}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?`polite`:`off`}>
          <slot name="content">${this.content}</slot>
        </div>
      </syn-popup>
    `}};As.styles=[w,ks],As.dependencies={"syn-popup":H},v([D(`slot:not([name])`)],As.prototype,`defaultSlot`,2),v([D(`.tooltip__body`)],As.prototype,`body`,2),v([D(`syn-popup`)],As.prototype,`popup`,2),v([E()],As.prototype,`anchor`,2),v([T()],As.prototype,`content`,2),v([T()],As.prototype,`placement`,2),v([T({type:Boolean,reflect:!0})],As.prototype,`disabled`,2),v([T({type:Number})],As.prototype,`distance`,2),v([T({type:Boolean,reflect:!0})],As.prototype,`open`,2),v([T({type:Number})],As.prototype,`skidding`,2),v([T()],As.prototype,`trigger`,2),v([j(`open`,{waitUntilFirstUpdate:!0})],As.prototype,`handleOpenChange`,1),v([j([`anchor`,`content`,`distance`,`placement`,`skidding`])],As.prototype,`handleOptionsChange`,1),v([j(`disabled`)],As.prototype,`handleDisabledChange`,1),R(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),R(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}});var J,js,Ms,Ns,Ps,Fs,Y,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,X=class extends O{constructor(){super(),vt(this,Y),this.name=``,this.label=``,this.helpText=``,this.disabled=!1,this.readonly=!1,this.min=0,this.max=100,this.step=1,this.size=`medium`,this.tooltipPlacement=`top`,this.restrictMovement=!1,this.defaultValue=`0`,this.form=``,this.hasSlotController=new A(this,`help-text`,`label`,`prefix`,`suffix`,`ticks`),this.formControlController=new a(this,{assumeInteractionOn:[`syn-change`]}),this.localize=new C(this),vt(this,J,[0]),vt(this,js,new Map),vt(this,Ms,!1),vt(this,Ns,``),vt(this,Ps),vt(this,Fs,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(e){b(this,J,e?e.split(` `).map(Number).sort(Es):[]),b(this,Fs,Array.from(y(this,J)))}get value(){return y(this,J).slice().sort(Es).join(` `)}set valueAsArray(e){let t=y(this,J);b(this,J,Array.isArray(e)?e.slice().sort(Es):e||[]),b(this,Fs,Array.from(y(this,J))),Ds(t,y(this,J))&&this.requestUpdate(`value`,t.join(` `))}get valueAsArray(){return[...y(this,J)].sort(Es)}disconnectedCallback(){super.disconnectedCallback(),this?.ticksResizeObserver?.disconnect(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.ticksResizeObserver=new ResizeObserver(()=>{x(this,Y,Xs).call(this)}),this.ticksResizeObserver.observe(this.ticks),this.ticksResizeObserver.observe(this.baseControl),this.visibilityObserver=new IntersectionObserver(e=>{let t=e.at(0);t&&t.isIntersecting&&x(this,Y,Xs).call(this)}),this.visibilityObserver.observe(this),x(this,Y,Xs).call(this),this.formControlController.updateValidity(),b(this,Fs,Array.from(y(this,J))),this.thumbs.forEach(e=>{let t=e.parentElement;t.updateComplete.then(()=>{t.shadowRoot.querySelector(`.tooltip__body`)?.setAttribute(`aria-hidden`,`true`)})})}willUpdate(e){super.willUpdate(e),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);let t=y(this,J).map(e=>{if(e<=this.min)return this.min;if(e>=this.max)return this.max;let t=this.min+this.step*Math.round((e-this.min)/this.step);return t>this.max?this.max:t});Ds(y(this,J),t)&&b(this,J,t)}updated(e){super.updated(e);for(let e of this.thumbs){let t=+e.dataset.rangeId;y(this,js).has(t)&&x(this,Y,Us).call(this,e,y(this,js).get(t))}x(this,Y,Ws).call(this)}focus(e){let t=this.thumbs.item(0);t?t.focus(e):super.focus(e)}checkValidity(){if(this.disabled)return!0;let e=!y(this,Ns);return e||this.formControlController.emitInvalidEvent(),e}reportValidity(){if(this.disabled)return!0;let e=this.validity.valid;return this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(y(this,Ps)),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),b(this,Ps,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),e}setCustomValidity(e){b(this,Ns,e),this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return y(this,Ns)?c:o}get validationMessage(){return y(this,Ns)}renderThumbs(e){let t=y(this,J).length>1;return y(this,js).clear(),y(this,J).map((n,r)=>{let i=r+1;y(this,js).set(i,n);let a=`thumb-${i}`,o=``,s=``;return t?(s=e?`label aria-label-hidden ${a}`:`aria-label-hidden ${a}`,o=r===0?`${this.localize.term(`rangeMin`)} (${this.tooltipFormatter(n)})`:r===y(this,J).length-1?`${this.localize.term(`rangeMax`)} (${this.tooltipFormatter(n)})`:this.tooltipFormatter(n)):s=e?`label aria-label-hidden`:``,g`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          .disabled=${this.tooltipPlacement===`none`||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${N(this.disabled||this.readonly?`true`:void 0)}
            aria-labelledby=${s}
            aria-label=${o}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${n}"
            aria-valuetext="${this.tooltipFormatter(n)}"
            class="thumb"
            data-range-id="${i}"
            id=${a}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${x(this,Y,Bs)}
            @pointermove=${x(this,Y,Vs)}
            @pointerup=${x(this,Y,Hs)}
            @pointercancel=${x(this,Y,Hs)}
            @pointerleave=${x(this,Y,Hs)}
            @keydown=${x(this,Y,Gs)}
            @focus=${x(this,Y,Js)}
          ></div>
        </syn-tooltip>
      `})}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.hasSlotController.test(`prefix`),r=this.hasSlotController.test(`suffix`),i=this.label?!0:!!e,a=this.helpText?!0:!!t;return g`
      <div
        part="form-control"
        class=${k({"form-control":!0,"form-control--has-help-text":a,"form-control--has-label":i,"form-control--has-prefix":n,"form-control--has-suffix":r,"form-control--is-disabled":this.disabled,"form-control--is-readonly":this.readonly,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`})}
        @focusout=${x(this,Y,Ks)}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?`false`:`true`}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${y(this,J).map(this.tooltipFormatter).join(` - `)})
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
              @invalid=${x(this,Y,Ys)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${x(this,Y,Ls)}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(i)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${x(this,Y,Rs)}
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
          aria-hidden=${a?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J=new WeakMap,js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,Fs=new WeakMap,Y=new WeakSet,Is=function(){return this.localize.dir()===`rtl`},Ls=function(e,t=!0){if(this.disabled)return;if(this.readonly){e.preventDefault(),this.focus();return}let{clientX:n}=e,r=Array.from(this.thumbs),i=Os(this.baseDiv,n,y(this,Y,Is)),a=this.step/(this.max-this.min),o=this.min+this.step*Math.round(i/a),s=r.reduce((e,t)=>{let n=y(this,js).get(+t.dataset.rangeId),r=y(this,js).get(+e.dataset.rangeId),i=Math.abs(n-o),a=Math.abs(r-o);return i===a?n<o?t:e:i<a?t:e}),c=+s.dataset.rangeId;if(!c)return;y(this,js).set(c,o),x(this,Y,Us).call(this,s,o);let l=y(this,J);b(this,J,Array.from(y(this,js).values())),x(this,Y,Ws).call(this),Ds(l,y(this,J))&&(b(this,Fs,Array.from(y(this,J))),this.emit(`syn-input`),this.emit(`syn-change`));let u=new PointerEvent(`pointerdown`,e);t&&s.dispatchEvent(u)&&x(this,Y,qs).call(this,s)},Rs=function(e){x(this,Y,Ls).call(this,e,!1)},zs=function(e,t){let n=this.valueAsArray,r=Array.from(this.thumbs).indexOf(e),i=n[r-1]||this.min,a=n[r+1]||this.max;return{finalValue:Math.max(i,Math.min(a,t)),isRestricted:t<i||t>a,nextValue:a,prevValue:i}},Bs=async function(e){if(this.disabled||this.readonly)return;let t=e.target;x(this,Y,qs).call(this,t),t.dataset.pointerId&&t.releasePointerCapture(+t.dataset.pointerId),t.dataset.pointerId=e.pointerId.toString(),t.setPointerCapture(e.pointerId),t.classList.add(`grabbed`),await t.parentElement.show()},Vs=function(e){if(this.disabled||this.readonly)return;let t=e.target,n=+t.dataset.rangeId;if(!y(this,js).has(n)||(t.dataset.pointerId?+t.dataset.pointerId:null)!==e.pointerId)return;let r=Os(this.baseDiv,e.clientX,y(this,Y,Is)),i=this.step/(this.max-this.min),a=this.min+this.step*Math.round(r/i);if(this.emit(`syn-move`,{cancelable:!0,detail:{element:t,value:a}}).defaultPrevented)return;if(this.restrictMovement){let e=x(this,Y,zs).call(this,t,a);e.isRestricted?(a=e.finalValue,t.style.zIndex=(3+this.thumbs.length).toFixed(0)):t.style.zIndex=`3`}y(this,js).set(n,a),x(this,Y,Us).call(this,t,a);let o=y(this,J);b(this,J,Array.from(y(this,js).values())),x(this,Y,Ws).call(this),Ds(o,y(this,J))&&this.emit(`syn-input`)},Hs=async function(e){if(this.disabled||this.readonly)return;let t=e.target;!t.dataset.pointerId||e.pointerId!==+t.dataset.pointerId||(t.classList.remove(`grabbed`),t.releasePointerCapture(e.pointerId),delete t.dataset.pointerId,Ds(y(this,Fs),y(this,J))&&(b(this,Fs,Array.from(y(this,J))),this.emit(`syn-change`)),await t.parentElement.hide())},Us=function(e,t){e.setAttribute(`aria-valuenow`,t.toString()),e.setAttribute(`aria-valuetext`,this.tooltipFormatter(t));let n=(t-this.min)/(this.max-this.min);e.style.insetInlineStart=`calc(${100*n}% - var(--half-thumb-size))`,x(this,Y,qs).call(this,e)},Ws=function(){let{activeTrack:e}=this;if(!e)return;if(this.min===this.max){e.style.insetInlineStart=`0%`,e.style.insetInlineEnd=`0%`;return}if(y(this,J).length===1){let t=getComputedStyle(this).getPropertyValue(`--track-active-offset`)||`0%`,n=100*(y(this,J)[0]-this.min)/(this.max-this.min);e.style.insetInlineStart=`min(${t}, ${n}%)`,e.style.insetInlineEnd=`min(calc(100% - ${t}), calc(100% - ${n}%))`;return}let t=y(this,J).slice().sort(Es),n=100*(t[0]-this.min)/(this.max-this.min),r=100*(t[t.length-1]-this.min)/(this.max-this.min);e.style.insetInlineStart=`${n}%`,e.style.insetInlineEnd=`calc(100% - ${r}%)`},Gs=function(e){if(this.readonly)return;let t=e.target,n=+t.dataset.rangeId,r=y(this,js).get(n);if(r===void 0)return;let i=r;switch(e.key){case`ArrowUp`:case`Up`:i=Math.min(r+this.step,this.max);break;case`ArrowDown`:case`Down`:i=Math.max(r-this.step,this.min);break;case`ArrowLeft`:case`Left`:i=y(this,Y,Is)?Math.min(r+this.step,this.max):Math.max(r-this.step,this.min);break;case`ArrowRight`:case`Right`:i=y(this,Y,Is)?Math.max(r-this.step,this.min):Math.min(r+this.step,this.max);break;case`PageUp`:i=Math.min(r+(this.max-this.min)/5,this.max);break;case`PageDown`:i=Math.max(r-(this.max-this.min)/5,this.min);break;case`Home`:i=this.min;break;case`End`:i=this.max;break;default:return}if(i!==r){if(this.emit(`syn-move`,{cancelable:!0,detail:{element:t,value:i}}).defaultPrevented)return;if(this.restrictMovement){let e=x(this,Y,zs).call(this,t,i);e.isRestricted&&(i=e.finalValue)}x(this,Y,Us).call(this,t,i),y(this,js).set(n,i),b(this,J,Array.from(y(this,js).values())),x(this,Y,Ws).call(this),x(this,Y,qs).call(this,t),b(this,Fs,Array.from(y(this,J))),this.emit(`syn-input`),this.emit(`syn-change`)}e.stopPropagation(),e.preventDefault()},Ks=function(e){e.relatedTarget&&this.shadowRoot?.contains(e.relatedTarget)||(this.emit(`syn-blur`),b(this,Ms,!1))},qs=function(e){if(this.tooltipPlacement===`none`)return;let t=+e.dataset.rangeId;if(!y(this,js).has(t))return;let n=y(this,js).get(t),r=e.parentElement;r.content=this.tooltipFormatter(n)},Js=function(e){if(this.disabled)return;y(this,Ms)||(b(this,Ms,!0),this.emit(`syn-focus`));let t=e.target;t?.dataset?.rangeId&&x(this,Y,qs).call(this,t)},Ys=function(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)},Xs=function(){if(!this.hasSlotController.test(`ticks`)){this.baseControl.style.marginBottom=``;return}let e=this.ticks.getBoundingClientRect().height,t=(this.baseControl.getBoundingClientRect().height-this.baseDiv.getBoundingClientRect().height)/2,n=Math.ceil(Math.max(0,e-t));this.baseControl.style.marginBottom=n>0?`${n}px`:``},X.styles=[w,Jn,Ts],X.dependencies={"syn-tooltip":As},v([T()],X.prototype,`name`,2),v([T()],X.prototype,`label`,2),v([T({attribute:`help-text`})],X.prototype,`helpText`,2),v([T({reflect:!0,type:Boolean})],X.prototype,`disabled`,2),v([T({reflect:!0,type:Boolean})],X.prototype,`readonly`,2),v([T({type:Number})],X.prototype,`min`,2),v([T({type:Number})],X.prototype,`max`,2),v([T({type:Number})],X.prototype,`step`,2),v([T({reflect:!0})],X.prototype,`size`,2),v([T({attribute:`tooltip-placement`,type:String})],X.prototype,`tooltipPlacement`,2),v([T({type:String})],X.prototype,`value`,1),v([T({attribute:`restrict-movement`,type:Boolean})],X.prototype,`restrictMovement`,2),v([Zn()],X.prototype,`defaultValue`,2),v([T({reflect:!0})],X.prototype,`form`,2),v([T({attribute:!1})],X.prototype,`tooltipFormatter`,2),v([D(`.input__wrapper`)],X.prototype,`baseDiv`,2),v([D(`.base`)],X.prototype,`baseControl`,2),v([D(`.active-track`)],X.prototype,`activeTrack`,2),v([D(`.ticks`)],X.prototype,`ticks`,2),v([Ft(`.thumb`)],X.prototype,`thumbs`,2),v([D(`.range__validation-input`)],X.prototype,`validationInput`,2),X=v([S(`SynRange`)],X),X.define(`syn-range`);var Zs=h`
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
`,Qs=class extends O{constructor(){super(),this.hasSlotController=new A(this,`[default]`,`footer`),this.localize=new C(this),this.isAnimationActive=!1,this.open=!1,this.variant=`default`,this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener(`syn-initial-focus`,e=>{this.variant!=="default"&&(e.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener(`focusin`,e=>{e.target.tagName.toLowerCase()===`syn-nav-item`&&this.variant===`rail`&&!this.open&&(this.open=!0)}),this.addEventListener(`focusout`,e=>{let t=e.target.tagName.toLowerCase(),n=e.relatedTarget?.tagName.toLowerCase();t===`syn-nav-item`&&n!==`syn-nav-item`&&this.variant===`rail`&&this.open&&(this.open=!1)})}setDelayedCallback(e){clearTimeout(this.timeout),this.timeout=setTimeout(e,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&=!1}addMouseListener(){this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.addEventListener(`mouseenter`,this.handleMouseEnter),this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.addEventListener(`mouseleave`,this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.removeEventListener(`mouseenter`,this.handleMouseEnter),this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.removeEventListener(`mouseleave`,this.handleMouseLeave)}setDrawerAnimations(){let e=z(this,`sideNav.show${this.variant==="default"?`NonRail`:`Rail`}`,{dir:this.localize.dir()}),t=z(this,`sideNav.hide${this.variant==="default"?`NonRail`:`Rail`}`,{dir:this.localize.dir()}),n=z(this,`sideNav.overlay.hide`,{dir:this.localize.dir()}),r=z(this,`sideNav.overlay.show`,{dir:this.localize.dir()});On(this.drawer,`drawer.showStart`,e),On(this.drawer,`drawer.hideStart`,t),On(this.drawer,`drawer.overlay.hide`,n),On(this.drawer,`drawer.overlay.show`,r)}handleVariantChange(){switch(this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant){case`rail`:this.addMouseListener();break;default:this.removeMouseListener()}}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,F(this.drawer,`syn-after-${this.open?`show`:`hide`}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,F(this.drawer,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this.drawer,`syn-after-hide`)}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(`.drawer__panel`).tabIndex=-1}),this.variant){case`rail`:this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case`sticky`:break;default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(vr(this.drawer),this.drawer.modal.deactivate())}toggleOpenState(){this.open=!this.open}render(){let e=window.navigator.maxTouchPoints>0||`ontouchstart`in window,t=this.hasSlotController.test(`footer`),n=t||this.variant===`sticky`;return bn`
      <nav
        class=${k({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":t,"side-nav--open":this.open,"side-nav--rail":this.variant===`rail`,"side-nav--sticky":this.variant===`sticky`,"side-nav--touch":e})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.variant!=="default"}
          exportparts="overlay,panel,body,base:drawer__base"
          label=${this.localize.term(`sideNav`)}
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

            ${n?bn`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:``}
            <slot name="footer" part="footer" ></slot>
            ${this.variant===`sticky`?bn`<syn-nav-item part="toggle-nav-item" class="side-nav__toggle-nav-item" @click=${this.toggleOpenState} ?divider=${t}>
                      <slot name="toggle-icon" slot="prefix" class="side-nav__toggle-icon">
                        <syn-icon library="system" name="sticky_sidebar" part="toggle-icon"></syn-icon>
                      </slot>
                      <slot name="toggle-label" part="toggle-label">
                        ${!this.open&&!this.isAnimationActive?this.localize.term(`sideNavShow`):this.localize.term(`sideNavHide`)}
                      </slot>
                    </syn-nav-item>`:``}
          
          </footer>

        </syn-drawer>

      </nav>
    `}};Qs.styles=[w,Zs],Qs.dependencies={"syn-divider":Ja,"syn-drawer":Ka,"syn-icon":M,"syn-nav-item":K},v([E()],Qs.prototype,`isAnimationActive`,2),v([D(`.side-nav__drawer`)],Qs.prototype,`drawer`,2),v([T({reflect:!0,type:Boolean})],Qs.prototype,`open`,2),v([T({reflect:!0})],Qs.prototype,`variant`,2),v([T({attribute:`no-focus-trapping`,reflect:!0,type:Boolean})],Qs.prototype,`noFocusTrapping`,2),v([j(`variant`,{waitUntilFirstUpdate:!0})],Qs.prototype,`handleVariantChange`,1),v([j(`open`,{waitUntilFirstUpdate:!0})],Qs.prototype,`handleOpenChange`,1),v([j(`noFocusTrapping`,{waitUntilFirstUpdate:!0})],Qs.prototype,`handleFocusTrapping`,1),Qs=v([S(`SynSideNav`)],Qs),R(`sideNav.showRail`,{keyframes:[{width:`var(--side-nav-rail-width)`},{width:`var(--side-nav-open-width)`}],options:{duration:250,easing:`ease`}}),R(`sideNav.showNonRail`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),R(`sideNav.hideNonRail`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),R(`sideNav.hideRail`,{keyframes:[{width:`var(--side-nav-open-width)`},{width:`var(--side-nav-rail-width)`}],options:{duration:250,easing:`ease`}}),R(`sideNav.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),R(`sideNav.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Qs.define(`syn-side-nav`),q.define(`syn-select`);var $s=h`
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
`,ec=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new A(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.readonly=!1,this.checked=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleInput(){this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(e){if(this.readonly){e.preventDefault();return}this.checked=!this.checked,this.emit(`syn-change`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleKeyDown(e){this.readonly||(e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`syn-change`),this.emit(`syn-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`syn-change`),this.emit(`syn-input`)))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return g`
      <div
        class=${k({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${k({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--readonly":this.readonly,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${N(this.value)}
            .checked=${Qn(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
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
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ec.styles=[w,Jn,$s],v([D(`input[type="checkbox"]`)],ec.prototype,`input`,2),v([E()],ec.prototype,`hasFocus`,2),v([T({reflect:!0})],ec.prototype,`title`,2),v([T()],ec.prototype,`name`,2),v([T()],ec.prototype,`value`,2),v([T({reflect:!0})],ec.prototype,`size`,2),v([T({type:Boolean,reflect:!0})],ec.prototype,`disabled`,2),v([T({type:Boolean,reflect:!0})],ec.prototype,`readonly`,2),v([T({type:Boolean,reflect:!0})],ec.prototype,`checked`,2),v([Zn(`checked`)],ec.prototype,`defaultChecked`,2),v([T({reflect:!0})],ec.prototype,`form`,2),v([T({type:Boolean,reflect:!0})],ec.prototype,`required`,2),v([T({attribute:`help-text`})],ec.prototype,`helpText`,2),v([j(`checked`,{waitUntilFirstUpdate:!0})],ec.prototype,`handleCheckedChange`,1),v([j(`disabled`,{waitUntilFirstUpdate:!0})],ec.prototype,`handleDisabledChange`,1),ec=v([S(`SynSwitch`)],ec),ec.define(`syn-switch`),Wn.define(`syn-spinner`);var tc=h`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`,nc=class extends O{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit(`syn-resize`,{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector(`slot`);if(e!==null){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};nc.styles=[w,tc],v([T({type:Boolean,reflect:!0})],nc.prototype,`disabled`,2),v([j(`disabled`,{waitUntilFirstUpdate:!0})],nc.prototype,`handleDisabledChange`,1);var rc=h`
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
`,ic=h`
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
`,ac=(e,t)=>{let n=0;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...r)},t)}},oc=(e,t,n)=>{let r=e[t];e[t]=function(...e){r.call(this,...e),n.call(this,r,...e)}};(()=>{if(!(typeof window>`u`)&&!(`onscrollend`in window)){let e=new Set,t=new WeakMap,n=t=>{for(let n of t.changedTouches)e.add(n.identifier)},r=t=>{for(let n of t.changedTouches)e.delete(n.identifier)};document.addEventListener(`touchstart`,n,!0),document.addEventListener(`touchend`,r,!0),document.addEventListener(`touchcancel`,r,!0),oc(EventTarget.prototype,`addEventListener`,function(n,r){if(r!==`scrollend`)return;let i=ac(()=>{e.size?i():this.dispatchEvent(new Event(`scrollend`))},100);n.call(this,`scroll`,i,{passive:!0}),t.set(this,i)}),oc(EventTarget.prototype,`removeEventListener`,function(e,n){if(n!==`scrollend`)return;let r=t.get(this);r&&e.call(this,`scroll`,r,{passive:!0})})}})();var Z=class extends O{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new C(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement=`top`,this.activation=`auto`,this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let e=Promise.all([customElements.whenDefined(`syn-tab`),customElements.whenDefined(`syn-tab-panel`)]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest(`syn-tab-group`)!==this)return!1;let t=e.tagName.toLowerCase();return t===`syn-tab`||t===`syn-tab-panel`});if(t.length!==0){if(t.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`syn-tab`).map(e=>e.target).find(e=>e.active);e&&this.setActiveTab(e)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:[`active`,`disabled`,`name`,`panel`],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`syn-tab`);t?.closest(`syn-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`syn-tab`);if(t?.closest(`syn-tab-group`)===this&&([`Enter`,` `].includes(e.key)&&t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault()),[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`syn-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`].includes(this.placement)&&yr(r,this.nav,`horizontal`),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:`auto`,...t},e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),this.syncIndicator(),[`top`].includes(this.placement)&&yr(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.emit(`syn-tab-hide`,{detail:{name:n.panel}}),this.emit(`syn-tab-show`,{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}repositionIndicator(){let e=this.getActiveTab();if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=this.localize.dir()===`rtl`,i=this.tabs.slice(0,this.tabs.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case`top`:this.indicator.style.width=`calc(${t}px - ${this.contained||this.sharp?`2 * var(--syn-spacing-large)`:`0px`})`,this.indicator.style.height=`auto`,this.indicator.style.translate=`calc(${r?`-`:``}1 * (${i.left}px + ${this.contained||this.sharp?`var(--syn-spacing-large)`:`0px`}))`;break;case`start`:case`end`:this.indicator.style.width=`auto`,this.indicator.style.height=`calc(${n}px - ${this.contained||this.sharp?`2 * var(--syn-spacing-small)`:`0px`})`,this.indicator.style.translate=`0 calc(${i.top}px + ${this.contained||this.sharp?`var(--syn-spacing-small)`:`0px`})`}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()===`rtl`?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.hasScrollControls=!this.noScrollControls&&[`top`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display=`block`,this.repositionIndicator()):this.indicator.style.display=`none`}show(e){let t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:`smooth`})}preventFocus(e){e.preventDefault()}render(){let e=this.localize.dir()===`rtl`;return g`
      <div
        part="base"
        class=${k({"tab-group":!0,"tab-group--top":this.placement===`top`,"tab-group--start":this.placement===`start`,"tab-group--end":this.placement===`end`,"tab-group--rtl":this.localize.dir()===`rtl`,"tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?g`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${k({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?`tabs-right`:`tabs-left`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToStart`)}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToStart}
                ></syn-icon-button>
              `:``}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <syn-resize-observer @syn-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </syn-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?g`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${k({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?`tabs-left`:`tabs-right`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToEnd`)}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToEnd}
                ></syn-icon-button>
              `:``}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Z.styles=[w,ic,rc],Z.dependencies={"syn-icon-button":P,"syn-resize-observer":nc},v([It({slot:`nav`,selector:`syn-tab`})],Z.prototype,`tabs`,2),v([It({selector:`syn-tab-panel`})],Z.prototype,`panels`,2),v([D(`.tab-group`)],Z.prototype,`tabGroup`,2),v([D(`.tab-group__body`)],Z.prototype,`body`,2),v([D(`.tab-group__nav`)],Z.prototype,`nav`,2),v([D(`.tab-group__indicator`)],Z.prototype,`indicator`,2),v([E()],Z.prototype,`hasScrollControls`,2),v([E()],Z.prototype,`shouldHideScrollStartButton`,2),v([E()],Z.prototype,`shouldHideScrollEndButton`,2),v([T()],Z.prototype,`placement`,2),v([T()],Z.prototype,`activation`,2),v([T({attribute:`no-scroll-controls`,type:Boolean})],Z.prototype,`noScrollControls`,2),v([T({type:Boolean})],Z.prototype,`contained`,2),v([T({type:Boolean})],Z.prototype,`sharp`,2),v([T({attribute:`fixed-scroll-controls`,type:Boolean})],Z.prototype,`fixedScrollControls`,2),v([Mt({passive:!0})],Z.prototype,`updateScrollButtons`,1),v([j(`noScrollControls`,{waitUntilFirstUpdate:!0})],Z.prototype,`updateScrollControls`,1),v([j(`placement`,{waitUntilFirstUpdate:!0})],Z.prototype,`syncIndicator`,1),Z.define(`syn-tab-group`);var sc=h`
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
`,cc=h`
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
`,lc=0,uc=class extends O{constructor(){super(...arguments),this.localize=new C(this),this.attrId=++lc,this.componentId=`syn-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`syn-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.tabIndex=this.disabled&&!this.active?-1:0}render(){return this.id=this.id.length>0?this.id:this.componentId,g`
      <div
        part="base"
        class=${k({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?g`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></syn-icon-button>
            `:``}
      </div>
    `}};uc.styles=[w,cc,sc],uc.dependencies={"syn-icon-button":P},v([D(`.tab`)],uc.prototype,`tab`,2),v([T({reflect:!0})],uc.prototype,`panel`,2),v([T({type:Boolean,reflect:!0})],uc.prototype,`active`,2),v([T({type:Boolean,reflect:!0})],uc.prototype,`closable`,2),v([T({type:Boolean,reflect:!0})],uc.prototype,`disabled`,2),v([T({type:Number,reflect:!0})],uc.prototype,`tabIndex`,2),v([j(`active`)],uc.prototype,`handleActiveChange`,1),v([j(`disabled`)],uc.prototype,`handleDisabledChange`,1),uc.define(`syn-tab`),qr.define(`syn-tag`);var dc=h`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`,fc=h`
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
`,pc=0,mc=class extends O{constructor(){super(...arguments),this.attrId=++pc,this.componentId=`syn-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return g`
      <slot
        part="base"
        class=${k({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};mc.styles=[w,fc,dc],v([T({reflect:!0})],mc.prototype,`name`,2),v([T({type:Boolean,reflect:!0})],mc.prototype,`active`,2),v([j(`active`)],mc.prototype,`handleActiveChange`,1),mc.define(`syn-tab-panel`),As.define(`syn-tooltip`);var hc=h`
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
`,Q=class extends O{constructor(){super(...arguments),this.formControlController=new a(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new A(this,`help-text`,`label`),this.hasFocus=!1,this.title=``,this.name=``,this.value=``,this.size=`medium`,this.label=``,this.helpText=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.defaultValue=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`syn-change`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleInput(){this.value=this.input.value,this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return g`
      <div
        part="form-control"
        class=${k({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${k({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Qn(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              rows=${N(this.rows)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              autocapitalize=${N(this.autocapitalize)}
              autocorrect=${N(this.autocorrect?void 0:`off`)}
              ?autofocus=${this.autofocus}
              spellcheck=${N(this.spellcheck)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q.styles=[w,Jn,hc],v([D(`.textarea__control`)],Q.prototype,`input`,2),v([D(`.textarea__size-adjuster`)],Q.prototype,`sizeAdjuster`,2),v([E()],Q.prototype,`hasFocus`,2),v([T({reflect:!0})],Q.prototype,`title`,2),v([T()],Q.prototype,`name`,2),v([T()],Q.prototype,`value`,2),v([T({reflect:!0})],Q.prototype,`size`,2),v([T()],Q.prototype,`label`,2),v([T({attribute:`help-text`})],Q.prototype,`helpText`,2),v([T()],Q.prototype,`placeholder`,2),v([T({type:Number})],Q.prototype,`rows`,2),v([T()],Q.prototype,`resize`,2),v([T({type:Boolean,reflect:!0})],Q.prototype,`disabled`,2),v([T({type:Boolean,reflect:!0})],Q.prototype,`readonly`,2),v([T({reflect:!0})],Q.prototype,`form`,2),v([T({type:Boolean,reflect:!0})],Q.prototype,`required`,2),v([T({type:Number})],Q.prototype,`minlength`,2),v([T({type:Number})],Q.prototype,`maxlength`,2),v([T()],Q.prototype,`autocapitalize`,2),v([T({attribute:`autocorrect`,reflect:!0,converter:{fromAttribute:e=>e===``||e===`on`,toAttribute:e=>e?`on`:`off`},type:Boolean})],Q.prototype,`autocorrect`,2),v([T()],Q.prototype,`autocomplete`,2),v([T({type:Boolean})],Q.prototype,`autofocus`,2),v([T()],Q.prototype,`enterkeyhint`,2),v([T({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Q.prototype,`spellcheck`,2),v([T()],Q.prototype,`inputmode`,2),v([Zn()],Q.prototype,`defaultValue`,2),v([j(`disabled`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleDisabledChange`,1),v([j(`rows`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleRowsChange`,1),v([j(`value`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleValueChange`,1),Q=v([S(`SynTextarea`)],Q),Q.define(`syn-textarea`);var gc=h`
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
`,_c=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,`label`),this.label=``,this.labelPosition=`top`,this.size=`medium`}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){let e=this.hasSlotController.test(`label`),t=this.label?!0:!!e;return g`
      <div 
        part="base"
        class=${k({"tag-group":!0,"tag-group--large":this.size===`large`,"tag-group--medium":this.size===`medium`,"tag-group--small":this.size===`small`,"tag-group--start":this.labelPosition===`start`,"tag-group--top":this.labelPosition===`top`})}
      >

        <span
            part="tag-label"
            class="tag-group__label"
            aria-hidden=${t?`false`:`true`}
          >
            <slot name="label">${this.label}</slot>
        </span>

        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};_c.styles=[w,gc],v([It({selector:`syn-tag`})],_c.prototype,`tagsInDefaultSlot`,2),v([T()],_c.prototype,`label`,2),v([T({attribute:`label-position`,reflect:!0})],_c.prototype,`labelPosition`,2),v([T({reflect:!0})],_c.prototype,`size`,2),v([j(`size`,{waitUntilFirstUpdate:!0})],_c.prototype,`handleSizeChange`,1),_c=v([S(`SynTagGroup`)],_c),_c.define(`syn-tag-group`);var vc=[`blur`,`change`,`clear`,`focus`,`invalid`,`input`,`move`],yc=(e,t)=>e.includes(t),bc=e=>yc(e,`blur`),xc=e=>yc(e,`invalid`),Sc=e=>e instanceof O,Cc=(e=``)=>e.split(` `).map(e=>e.trim()).filter(Boolean),wc=(e,t)=>{let n=t.trim();return Sc(e)&&vc.includes(n)?`syn-${n}`:n},Tc=e=>{if(!Sc(e))return;let{size:t}=e;return t??void 0},Ec={"syn-checkbox":`input`,"syn-combobox":`.combobox__value-input`,"syn-file":`input`,"syn-input":`input`,"syn-radio-group":`input`,"syn-range":`.input__control`,"syn-select":`.select__value-input`,"syn-switch":`input`,"syn-textarea":`.textarea__control`},Dc=(e,t)=>e.shadowRoot?.querySelector(t)??null,Oc=e=>{if(!e)return;if(!e.shadowRoot)return e;let t=Ec[e.tagName.toLowerCase()];if(t){let n=Dc(e,t);if(n)return n}return Dc(e,`input,select,textarea`)||e},kc=h`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`,Ac=()=>g`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`,$=class extends O{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage=``,this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant=`native`,this.hideIcon=!1,this.on=``,this.customValidationMessage=``,this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage=``)},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async e=>{if(xc(e.type)&&this.variant===`native`&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}xc(e.type)&&this.variant!==`native`&&(e.preventDefault(),e.stopPropagation());let t=e.currentTarget;if(Sc(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!bc(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!bc(e.type)&&this.variant===`native`&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){let e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){let e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){return this.slottedChildren[0]||void 0}setAlertSize(){this.alertSize=Tc(this.getInput())}getUsedEventNames(){let e=this.getInput();if(!e)return[];let[...t]=Cc(this.on).filter(Boolean);return t.includes(`invalid`)||t.push(`invalid`),t.includes(`live`)&&(t.push(`input`),t.push(`blur`)),Array.from(new Set(t.filter(e=>e!==`live`).map(t=>wc(e,t))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;let e=this.getInput();if(!e)return;let t=this.getUsedEventNames();t.forEach(t=>{e.addEventListener(t,this.validate,{capture:xc(t),signal:this.controller.signal})});let n=wc(e,`change`);t.includes(n)||e.addEventListener(n,this.internalRevalidate,{signal:this.controller.signal});let r=wc(e,`focus`),i=wc(e,`blur`);e.addEventListener(r,this.handleInputFocus,{signal:this.controller.signal}),e.addEventListener(i,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(e){let{customValidationMessage:t}=this,n=t||e.validationMessage;this.validationMessage=n}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){let t=document.activeElement,n=t.closest(`syn-validate`);!t.validity?.valid&&n||(e.scrollIntoView({block:`nearest`}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();let t=this.getInput();this.customValidationMessage&&(Sc(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{let t=this.getInput();t&&e.filter(({target:e})=>e===t).every(e=>e.attributeName===`size`)&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:[`size`],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{let t=this.getInput();t&&(e.filter(({target:e})=>e===t).every(e=>{let t=e.target;return t.hasAttribute(`disabled`)||t.hasAttribute(`readonly`)})?(this.isValid=!0,this.validationMessage=``):(Sc(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??``}))}),this.observer.observe(this,{attributeFilter:[`disabled`,`readonly`],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}updated(e){if(super.updated(e),this.variant!==`tooltip`)return;let t=this.tooltipElement;if(!t)return;let n=this.getDisplayValidationMessage();!this.isValid&&n&&this.hasFocus?(t.content=n,t.show()):t.hide()}renderInlineValidation(){let e=this.getDisplayValidationMessage();return this.variant!==`inline`||!e?``:g`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${N(this.alertSize)}
        variant="error"
      >
        ${this.hideIcon?``:g`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${e}
      </syn-alert>
    `}render(){return g`
      <div
        class="validate"
        part="base"
      >
        ${this.variant===`tooltip`?g`
        <syn-tooltip
          .anchor=${Oc(this.getInput())??void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${Ac()}
        </syn-tooltip>
      `:Ac()}
        ${this.renderInlineValidation()}
      </div>
    `}};$.styles=[w,kc],$.dependencies={"syn-alert":B,"syn-tooltip":As},v([It()],$.prototype,`slottedChildren`,2),v([D(`syn-tooltip`)],$.prototype,`tooltipElement`,2),v([E()],$.prototype,`validationMessage`,2),v([E()],$.prototype,`eagerFirstMount`,2),v([E()],$.prototype,`isInternalTriggeredInvalid`,2),v([E()],$.prototype,`isValid`,2),v([E()],$.prototype,`alertSize`,2),v([E()],$.prototype,`hasFocus`,2),v([T({reflect:!0})],$.prototype,`variant`,2),v([T({attribute:`hide-icon`,reflect:!0,type:Boolean})],$.prototype,`hideIcon`,2),v([T({reflect:!0})],$.prototype,`on`,2),v([T({attribute:`custom-validation-message`,type:String})],$.prototype,`customValidationMessage`,2),v([T({type:Boolean})],$.prototype,`eager`,2),v([j(`on`,{waitUntilFirstUpdate:!0})],$.prototype,`handleListenerChange`,1),v([j(`eager`,{waitUntilFirstUpdate:!1})],$.prototype,`handleEagerChange`,1),v([j(`customValidationMessage`,{waitUntilFirstUpdate:!0})],$.prototype,`handleCustomValidationMessageChange`,1),$=v([S(`SynValidate`)],$),$.define(`syn-validate`);var jc=`/knowledge/`;an(`sidenav`,{resolver:e=>`${jc}icons/sidenav/${e}.svg`}),an(`logos`,{resolver:e=>`${jc}icons/${e}.svg`});var Mc=e=>Array.from(e.querySelectorAll(`:scope > syn-nav-item:not([slot="footer"])`)),Nc=async()=>{await customElements.whenDefined(`syn-side-nav`);let e=document.querySelector(`syn-side-nav`);if(!e)return;let t=async()=>{let t=e.hasAttribute(`open`),n=Mc(e);for(let e of n){if(!t){e.open=!1;continue}e.open=!1;let n=e.querySelector(`syn-nav-item[current]`);n&&(e.open=!0,await e.updateComplete,n.scrollIntoView({block:`nearest`}))}};new MutationObserver(e=>{for(let n of e)n.type===`attributes`&&n.attributeName===`open`&&t()}).observe(e,{attributeFilter:[`open`],attributes:!0}),e.addEventListener(`click`,t=>{if(e.hasAttribute(`open`))return;let n=t.composedPath().find(e=>e instanceof Ro);if(!n)return;let r=n.parentElement===e&&n.getAttribute(`slot`)!==`footer`,i=!!n.querySelector(`:scope > [slot="children"]`);!r||!i||(n.open=!1,t.preventDefault(),t.stopImmediatePropagation())},{capture:!0}),t()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{Nc()},{once:!0}):Nc();