try{
(()=>{var So=Object.defineProperty;var Eo=(o,e)=>{for(var t in e)So(o,t,{get:e[t],enumerable:!0})};var f={NODE_ENV:"production",NODE_PATH:["/home/runner/work/synergy-design-system/synergy-design-system/synergy-design-system/node_modules/.pnpm/storybook@9.0.11_@testing-library+dom@10.4.0_prettier@3.5.3/node_modules/storybook/bin/node_modules","/home/runner/work/synergy-design-system/synergy-design-system/synergy-design-system/node_modules/.pnpm/storybook@9.0.11_@testing-library+dom@10.4.0_prettier@3.5.3/node_modules/storybook/node_modules","/home/runner/work/synergy-design-system/synergy-design-system/synergy-design-system/node_modules/.pnpm/storybook@9.0.11_@testing-library+dom@10.4.0_prettier@3.5.3/node_modules","/home/runner/work/synergy-design-system/synergy-design-system/synergy-design-system/node_modules/.pnpm/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.12.1/node_modules/pnpm/bin/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.12.1/node_modules/pnpm/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.12.1/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.12.1/node_modules/pnpm/bin/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.12.1/node_modules/pnpm/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.12.1/node_modules","/home/runner/setup-pnpm/node_modules/.pnpm/node_modules"],STORYBOOK:"true",PUBLIC_URL:".",STORYBOOK_PACKAGE_VERSIONS:'{"@synergy-design-system/components":"2.37.0","@synergy-design-system/assets":"1.16.1","@synergy-design-system/styles":"1.7.1","@synergy-design-system/tokens":"2.20.0"}'};var ae={};Eo(ae,{Children:()=>ko,Component:()=>Se,Fragment:()=>w,Profiler:()=>Po,PureComponent:()=>To,StrictMode:()=>Mo,Suspense:()=>Ee,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Ro,act:()=>Bo,cloneElement:()=>Oo,createContext:()=>No,createElement:()=>Lo,createFactory:()=>Ho,createRef:()=>Do,default:()=>Co,forwardRef:()=>Fo,isValidElement:()=>Uo,lazy:()=>Ae,memo:()=>Vo,startTransition:()=>jo,unstable_act:()=>zo,useCallback:()=>k,useContext:()=>Yo,useDebugValue:()=>Go,useDeferredValue:()=>Wo,useEffect:()=>M,useId:()=>Zo,useImperativeHandle:()=>qo,useInsertionEffect:()=>Ko,useLayoutEffect:()=>Xo,useMemo:()=>G,useReducer:()=>Jo,useRef:()=>Qo,useState:()=>P,useSyncExternalStore:()=>er,useTransition:()=>tr,version:()=>or});var Co=__REACT__,{Children:ko,Component:Se,Fragment:w,Profiler:Po,PureComponent:To,StrictMode:Mo,Suspense:Ee,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ro,act:Bo,cloneElement:Oo,createContext:No,createElement:Lo,createFactory:Ho,createRef:Do,forwardRef:Fo,isValidElement:Uo,lazy:Ae,memo:Vo,startTransition:jo,unstable_act:zo,useCallback:k,useContext:Yo,useDebugValue:Go,useDeferredValue:Wo,useEffect:M,useId:Zo,useImperativeHandle:qo,useInsertionEffect:Ko,useLayoutEffect:Xo,useMemo:G,useReducer:Jo,useRef:Qo,useState:P,useSyncExternalStore:er,useTransition:tr,version:or}=__REACT__;var un=__STORYBOOK_THEMING__,{CacheProvider:hn,ClassNames:mn,Global:fn,ThemeProvider:gn,background:vn,color:yn,convert:bn,create:_n,createCache:xn,createGlobal:wn,createReset:$n,css:T,darken:In,ensure:Sn,ignoreSsrWarning:En,isPropValid:An,jsx:u,keyframes:Cn,lighten:kn,styled:Pn,themes:Tn,typography:Mn,useTheme:Rn,withTheme:Bn}=__STORYBOOK_THEMING__;var Dn=__STORYBOOK_COMPONENTS__,{A:Fn,ActionBar:Un,AddonPanel:Vn,Badge:jn,Bar:zn,Blockquote:Yn,Button:Gn,Checkbox:Wn,ClipboardCode:Zn,Code:qn,DL:Kn,Div:Xn,DocumentWrapper:Jn,EmptyTabContent:Qn,ErrorFormatter:es,FlexBar:it,Form:ts,H1:os,H2:rs,H3:ns,H4:ss,H5:is,H6:as,HR:ls,IconButton:le,Img:cs,LI:ds,Link:X,ListItem:ps,Loader:us,Modal:hs,OL:ms,P:fs,Placeholder:H,Pre:gs,ProgressSpinner:vs,ResetWrapper:ys,ScrollArea:bs,Separator:at,Spaced:_s,Span:xs,StorybookIcon:ws,StorybookLogo:$s,SyntaxHighlighter:Is,TT:Ss,TabBar:Es,TabButton:As,TabWrapper:Cs,Table:ks,Tabs:lt,TabsState:Ps,TooltipLinkList:Ts,TooltipMessage:Ms,TooltipNote:Rs,UL:Bs,WithTooltip:Os,WithTooltipPure:Ns,Zoom:Ls,codeCommon:Hs,components:Ds,createCopyToClipboardFunction:Fs,getStoryHref:Us,interleaveSeparators:Vs,nameSpaceClassNames:js,resetComponents:zs,withReset:Ys}=__STORYBOOK_COMPONENTS__;var ce=window,de=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),ct=new WeakMap,J=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(de&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ct.set(t,e))}return e}toString(){return this.cssText}},dt=o=>new J(typeof o=="string"?o:o+"",void 0,Ce),E=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,n,s)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new J(t,o,Ce)},ke=(o,e)=>{de?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),n=ce.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,o.appendChild(r)})},pe=de?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return dt(t)})(o):o;var Pe,ue=window,pt=ue.trustedTypes,rr=pt?pt.emptyScript:"",ut=ue.reactiveElementPolyfillSupport,Me={toAttribute(o,e){switch(e){case Boolean:o=o?rr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ht=(o,e)=>e!==o&&(e==e||o==o),Te={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:ht},Re="finalized",O=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){let s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(Re))return!1;this[Re]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(pe(n))}else e!==void 0&&t.push(pe(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ke(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Te){var n;let s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){let i=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:Me).toAttribute(t,r.type);this._$El=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(e,t){var r;let n=this.constructor,s=n._$Ev.get(e);if(s!==void 0&&this._$El!==s){let i=n.getPropertyOptions(s),c=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?i.converter:Me;this._$El=s,this[s]=c.fromAttribute(t,i.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ht)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};O[Re]=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},ut?.({ReactiveElement:O}),((Pe=ue.reactiveElementVersions)!==null&&Pe!==void 0?Pe:ue.reactiveElementVersions=[]).push("1.6.3");var Be,he=window,W=he.trustedTypes,mt=W?W.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ne="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+D,nr=`<${xt}>`,z=document,ee=()=>z.createComment(""),te=o=>o===null||typeof o!="object"&&typeof o!="function",wt=Array.isArray,sr=o=>wt(o)||typeof o?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,V=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,yt=/"/g,$t=/^(?:script|style|textarea|title)$/i,It=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=It(1),A=It(2),N=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),bt=new WeakMap,j=z.createTreeWalker(z,129,null,!1);function St(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(e):e}var ir=(o,e)=>{let t=o.length-1,r=[],n,s=e===2?"<svg>":"",i=Q;for(let c=0;c<t;c++){let a=o[c],d,l,p=-1,h=0;for(;h<a.length&&(i.lastIndex=h,l=i.exec(a),l!==null);)h=i.lastIndex,i===Q?l[1]==="!--"?i=ft:l[1]!==void 0?i=gt:l[2]!==void 0?($t.test(l[2])&&(n=RegExp("</"+l[2],"g")),i=V):l[3]!==void 0&&(i=V):i===V?l[0]===">"?(i=n??Q,p=-1):l[1]===void 0?p=-2:(p=i.lastIndex-l[2].length,d=l[1],i=l[3]===void 0?V:l[3]==='"'?yt:vt):i===yt||i===vt?i=V:i===ft||i===gt?i=Q:(i=V,n=void 0);let m=i===V&&o[c+1].startsWith("/>")?" ":"";s+=i===Q?a+nr:p>=0?(r.push(d),a.slice(0,p)+Ne+a.slice(p)+D+m):a+D+(p===-2?(r.push(void 0),c):m)}return[St(o,s+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},oe=class o{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,i=0,c=e.length-1,a=this.parts,[d,l]=ir(e,t);if(this.el=o.createElement(d,r),j.currentNode=this.el.content,t===2){let p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(n=j.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){let p=[];for(let h of n.getAttributeNames())if(h.endsWith(Ne)||h.startsWith(D)){let m=l[i++];if(p.push(h),m!==void 0){let g=n.getAttribute(m.toLowerCase()+Ne).split(D),_=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:_[2],strings:g,ctor:_[1]==="."?He:_[1]==="?"?De:_[1]==="@"?Fe:q})}else a.push({type:6,index:s})}for(let h of p)n.removeAttribute(h)}if($t.test(n.tagName)){let p=n.textContent.split(D),h=p.length-1;if(h>0){n.textContent=W?W.emptyScript:"";for(let m=0;m<h;m++)n.append(p[m],ee()),j.nextNode(),a.push({type:2,index:++s});n.append(p[h],ee())}}}else if(n.nodeType===8)if(n.data===xt)a.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(D,p+1))!==-1;)a.push({type:7,index:s}),p+=D.length-1}s++}}static createElement(e,t){let r=z.createElement("template");return r.innerHTML=e,r}};function Z(o,e,t=o,r){var n,s,i,c;if(e===N)return e;let a=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl,d=te(e)?void 0:e._$litDirective$;return a?.constructor!==d&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,t,r)),r!==void 0?((i=(c=t)._$Co)!==null&&i!==void 0?i:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=Z(o,a._$AS(o,e.values),a,r)),e}var Le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:n}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:z).importNode(r,!0);j.currentNode=s;let i=j.nextNode(),c=0,a=0,d=n[0];for(;d!==void 0;){if(c===d.index){let l;d.type===2?l=new re(i,i.nextSibling,this,e):d.type===1?l=new d.ctor(i,d.name,d.strings,this,e):d.type===6&&(l=new Ue(i,this,e)),this._$AV.push(l),d=n[++a]}c!==d?.index&&(i=j.nextNode(),c++)}return j.currentNode=z,s}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},re=class o{constructor(e,t,r,n){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),te(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):sr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&te(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=oe.createElement(St(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{let i=new Le(s,this),c=i.u(this.options);i.v(r),this.$(c),this._$AH=i}}_$AC(e){let t=bt.get(e.strings);return t===void 0&&bt.set(e.strings,t=new oe(e)),t}T(e){wt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let s of e)n===t.length?t.push(r=new o(this.k(ee()),this.k(ee()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},q=class{constructor(e,t,r,n,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){let s=this.strings,i=!1;if(s===void 0)e=Z(this,e,t,0),i=!te(e)||e!==this._$AH&&e!==N,i&&(this._$AH=e);else{let c=e,a,d;for(e=s[0],a=0;a<s.length-1;a++)d=Z(this,c[r+a],t,a),d===N&&(d=this._$AH[a]),i||(i=!te(d)||d!==this._$AH[a]),d===$?e=$:e!==$&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}i&&!n&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},He=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}},ar=W?W.emptyScript:"",De=class extends q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,ar):this.element.removeAttribute(this.name)}},Fe=class extends q{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!==null&&r!==void 0?r:$)===N)return;let n=this._$AH,s=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==$&&(n===$||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ue=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};var _t=he.litHtmlPolyfillSupport;_t?.(oe,re),((Be=he.litHtmlVersions)!==null&&Be!==void 0?Be:he.litHtmlVersions=[]).push("2.8.0");var Et=(o,e,t)=>{var r,n;let s=(r=t?.renderBefore)!==null&&r!==void 0?r:e,i=s._$litPart$;if(i===void 0){let c=(n=t?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=i=new re(e.insertBefore(ee(),c),c,void 0,t??{})}return i._$AI(o),i};var Ve,je;var R=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Et(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return N}};R.finalized=!0,R._$litElement$=!0,(Ve=globalThis.litElementHydrateSupport)===null||Ve===void 0||Ve.call(globalThis,{LitElement:R});var At=globalThis.litElementPolyfillSupport;At?.({LitElement:R});((je=globalThis.litElementVersions)!==null&&je!==void 0?je:globalThis.litElementVersions=[]).push("3.3.3");var lr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},cr=(o,e,t)=>{e.constructor.createProperty(t,o)};function I(o){return(e,t)=>t!==void 0?cr(o,e,t):lr(o,e)}var ze,ma=((ze=window.HTMLSlotElement)===null||ze===void 0?void 0:ze.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var L=({title:o,children:e})=>b`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Ct=E`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`;var kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pt=o=>(...e)=>({_$litDirective$:o,values:e}),me=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Tt="important",dr=" !"+Tt,Y=Pt(class extends me{constructor(o){var e;if(super(o),o.type!==kt.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ht===void 0){this.ht=new Set;for(let r in e)this.ht.add(r);return this.render(e)}this.ht.forEach(r=>{e[r]==null&&(this.ht.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let n=e[r];if(n!=null){this.ht.add(r);let s=typeof n=="string"&&n.endsWith(dr);r.includes("-")||s?t.setProperty(r,s?n.slice(0,-11):n,s?Tt:""):t[r]=n}}return N}});function Mt(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Bt(o,e){let t=Mt(o),r=Mt(e),n=!(t.top>r.bottom||t.bottom<r.top),s=!(t.left>r.right||t.right<r.left);if(s&&n){let l={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:l.y},{x:r.left,y:l.y}]},{points:[{x:t.right,y:l.y},{x:r.right,y:l.y}]},{points:[{y:t.top,x:l.x},{y:r.top,x:l.x}]},{points:[{y:t.bottom,x:l.x},{y:r.bottom,x:l.x}]}]}let i=t.left>r.right,c=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[s?null:{points:[{x:i?t.left:t.right,y:a.y},{x:i?r.right:r.left,y:a.y}],bisector:n?void 0:[{x:i?r.right:r.left,y:a.y},{x:i?r.right:r.left,y:c?r.bottom:r.top}]},n?null:{points:[{y:c?t.top:t.bottom,x:a.x},{y:c?r.bottom:r.top,x:a.x}],bisector:s?void 0:[{y:c?r.bottom:r.top,x:a.x},{y:c?r.bottom:r.top,x:i?r.right:r.left}]}].filter(l=>!!l)}function se(o){return Math.round(o*100)/100}function fe(o,e){return[...Rt(o),...Rt(e)]}function Rt(o){return o?o instanceof Array?o:[o]:[]}var pr=function(o,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},Ot=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return pr([I({attribute:!1})],e.prototype,"selectedNode",void 0),e};function ge(o){return o.touches.length===0||o.touches.length>2}function ur(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Nt=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{ge(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{ge(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{ge(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(ge(r))return;let n=Array.from(this.previousTouches||[]),s=Array.from(r.touches);if(this.previousTouches=r.touches,!(s.length!==n.length||!s.every(i=>n.some(c=>c.identifier===i.identifier)))){if(s.length===1){this.onTouchPan({x:s[0].pageX-n[0].pageX,y:s[0].pageY-n[0].pageY});return}this.onTouchPinch(ur({x:s[0].pageX,y:s[0].pageY},{x:n[0].pageX,y:n[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}};var ie=function(o,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},B=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},Lt=function(o,e,t,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!n:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,t):n?n.value=t:e.set(o,t),t},Ht=o=>{var e,t,r,n,s;class i extends Nt(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(l,p)=>{this.panX+=l/this.scale/window.devicePixelRatio,this.panY+=p/this.scale/window.devicePixelRatio}),r.set(this,l=>{l.code==="Space"&&!B(this,e,"f")&&(Lt(this,e,!0,"f"),document.body.style.cursor="grab")}),n.set(this,l=>{l.code==="Space"&&B(this,e,"f")&&(Lt(this,e,!1,"f"),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",B(this,n,"f")),document.addEventListener("keydown",B(this,r,"f"))}),this.addEventListener("wheel",l=>{if(this.isMovable)if(l.preventDefault(),l.ctrlKey){let{deltaY:p}=l;l.deltaMode===1&&(p*=15);let h=this.scale;this.scale*=1-p/((1e3-this.zoomSpeed)*.5);let m=l.offsetX-this.offsetWidth/2,g=l.offsetY-this.offsetHeight/2;this.panX+=m/this.scale-m/h,this.panY+=g/this.scale-g/h}else{let p=this.panSpeed*.002;this.panX-=l.deltaX*p/this.scale,this.panY-=l.deltaY*p/this.scale}},{passive:!1});let d=1;this.addEventListener("gesturestart",l=>{l.preventDefault(),d=this.scale}),this.addEventListener("gesturechange",l=>{let p=l;p.preventDefault(),this.scale=d*p.scale}),this.addEventListener("pointermove",l=>{l.buttons&4&&(l.preventDefault(),B(this,t,"f").call(this,l.movementX,l.movementY))}),B(this,s,"f").call(this),this.onmousedown=()=>{B(this,e,"f")&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:l,movementY:p})=>{B(this,t,"f").call(this,l,p)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",B(this,n,"f")),document.removeEventListener("keydown",B(this,r,"f")),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,ie([I({attribute:!1})],i.prototype,"panX",void 0),ie([I({attribute:!1})],i.prototype,"panY",void 0),ie([I({attribute:!1})],i.prototype,"scale",void 0),ie([I({type:Number,attribute:"zoom-speed"})],i.prototype,"zoomSpeed",void 0),ie([I({type:Number,attribute:"pan-speed"})],i.prototype,"panSpeed",void 0),i};var hr=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:A`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&A`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${Y({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},mr=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),n=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&n===0)return null;let s=se(Math.max(r,n)).toString(10),i=s.length*t*.5,c=t*.25,a=t*.25,d=t*.5,l=r>n?(o.points[0].x+o.points[1].x)/2-i/2:o.points[0].x,p=r>n?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,h=[`scale(${e})`,r>n?`translate(0, ${c+a})`:`translate(${c+d}, 0)`].join(" "),m=l+i/2,g=p+t/2,_=r>n?`${m} ${p}`:`${l} ${g}`;return A`
    <g class="distance-tooltip">
      <rect
        x=${l-d}
        y=${p-a}
        rx="2"
        width=${i+d*2}
        height=${t+a*2}
        transform=${h}
        transform-origin=${_}
        stroke="none"
      />

      <text
        x=${m}
        y=${p+t-a/2}
        text-anchor="middle"
        transform=${h}
        transform-origin=${_}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${s}
      </text>
    </g>
  `},Dt=new Map,Ft=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let n=o.id+`
`+e.id,s=Dt.get(n);return s||(s=Bt(o.absoluteBoundingBox,e.absoluteBoundingBox),Dt.set(n,s)),[...s.map(i=>hr({guide:i,reverseScale:t})),...s.map(i=>mr({guide:i,reverseScale:t,fontSize:r}))]},Ut=E`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;var Vt=({onClick:o=()=>{}})=>A`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ge=({onClick:o=()=>{}})=>A`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,jt=()=>A`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,zt=()=>A`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Yt=()=>A`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`;var K=o=>o.a===0?"transparent":o.a<1?`rgba(${Gt(o).join(", ")}, ${o.a.toFixed(2)})`:vr(o),gr=o=>new We(o).cssColor,We=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>K(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},ve=class{constructor(e){var t,r,n;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(i=>i===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let i=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=K(i)}let s=(n=e.fills)===null||n===void 0?void 0:n[0];if(s&&s.visible!==!1&&(e.type==="TEXT"?this.color=K(s.color):s.type.includes("GRADIENT")?this.backgroundImage=gr(s):s.type==="SOLID"&&(this.background=K(s.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=K(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:i,radius:c,color:a}=e.effects[0];this.boxShadowColor=K(a),this.boxShadow=`${i?.x||0}px ${i?.y||0}px 0 ${c} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Ze).join(`
`)}},Gt=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],vr=o=>{let[e,t,r]=Gt(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},Ze=({property:o,value:e})=>`${o}: ${e};`;var yr=function(o,e,t,r){function n(s){return s instanceof t?s:new t(function(i){i(s)})}return new(t||(t=Promise))(function(s,i){function c(l){try{d(r.next(l))}catch(p){i(p)}}function a(l){try{d(r.throw(l))}catch(p){i(p)}}function d(l){l.done?s(l.value):n(l.value).then(c,a)}d((r=r.apply(o,e||[])).next())})},qe=o=>yr(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),Wt=({node:o,onClose:e})=>{if(!o)return null;let t=new ve(o),r=n=>n.stopPropagation();return b`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${Vt({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?b`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?b`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&b`<p class="inspector-property">
              ${jt()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&b`<p class="inspector-property">
              ${zt()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?b`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Ge({onClick:()=>qe(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${br(t)}
    </div>
  `},br=o=>{let e=()=>qe(o.getStyleSheet()),t=o.getStyles();return b`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Ge({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(_r)}
    </div>
  </div>`},_r=o=>{let{property:e,value:t,color:r}=o,n=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":n=b`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":n=b`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return b`<div class="css-property" @click=${()=>qe(Ze(o))}>
    <span>${e}:</span>${n}<span class="css-value">${t}</span>;</span>
  </div>`},Zt=E`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`;var Ke=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:n,y:s,width:i,height:c}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},d=t/2,l=(g,_)=>`M${g},${_}`,p=(g,_)=>`L${g},${_}`,h=(g,_,S)=>`A${g},${g} 0 0 1 ${_},${S}`,m=[l(a.topLeft+d,d),p(i-a.topRight,d),h(a.topRight-d,i-d,a.topRight),p(i-d,c-a.bottomRight),h(a.bottomRight-d,i-a.bottomRight,c-d),p(a.bottomLeft,c-d),h(a.bottomLeft-d,d,c-a.bottomLeft),p(d,a.topLeft),h(a.topLeft-d,a.topLeft,d),"Z"].join(" ");return A`
    <path
      class="guide"
      d=${m}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${n}, ${s})"
      ?data-selected=${e}
      @click=${r}
    />
  `},qt=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:n,offsetY:s,reverseScale:i})=>{let c={top:`${s+e+r}px`,left:`${n+o+t/2}px`,transform:`translateX(-50%) scale(${i}) translateY(0.25em)`};return b`
    <div class="tooltip" style="${Y(c)}">
      ${se(t)} x ${se(r)}
    </div>
  `},Kt=E`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`;var $r=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],Xt=o=>(typeof o=="object"?o:new Date(o)).getTime(),Jt=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let n=Xt(e)-Xt(o),s=Math.abs(n);for(let i of $r)if(s>=i.gte){let c=Math.round(Math.abs(n)/i.divisor),a=n<0,d=i.unit;return d?t.format(a?c:-c,d):i.text}};var Qt=E`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,eo=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return b`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Yt()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Jt(t)}
    </span>
  </a>`};var to=function(o,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},C=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},Xe=function(o,e,t,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!n:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,t):n?n.value=t:e.set(o,t),t},be=o=>{var e,t,r,n,s;class i extends Ot(Ht(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),n.set(this,d=>l=>{l.preventDefault(),l.stopPropagation(),this.selectedNode=d}),s.set(this,d=>{var l,p;return(p=(l=C(this,r,"f"))===null||l===void 0?void 0:l.find(h=>h.id===d))!==null&&p!==void 0?p:null})}static get styles(){let a=super.styles;return fe(a,[E`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Kt,Ct,Ut,Zt,Qt])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!C(this,e,"f")||!C(this,r,"f")?L({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?L({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?L({title:"Error",children:this.error}):this.error;let a=C(this,e,"f"),d=1/this.scale,l=`calc(var(--guide-thickness) * ${d})`,p=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return b`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([m,g])=>{var _;let S=C(this,s,"f").call(this,m);if(!S||!("absoluteBoundingBox"in S)||!(!((_=C(this,t,"f"))===null||_===void 0)&&_[S.id]))return null;let x=C(this,t,"f")[S.id];return b`
                <img
                  class="rendered-image"
                  src="${g}"
                  style=${Y({top:`${S.absoluteBoundingBox.y-a.y}px`,left:`${S.absoluteBoundingBox.x-a.x}px`,marginTop:`${-x.top}px`,marginLeft:`${-x.left}px`,width:S.absoluteBoundingBox.width+x.left+x.right+"px",height:S.absoluteBoundingBox.height+x.top+x.bottom+"px"})}
                />
              `})}
            ${this.selectedNode&&qt({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:d})}
            ${A`
            <svg
              class="guides"
              viewBox="0 0 ${a.width} ${a.height}"
              width=${a.width}
              height=${a.height}
              style=${Y({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:l})}
            >
              ${this.selectedNode&&Ke({node:this.selectedNode,selected:!0,computedThickness:p*d})}

              ${C(this,r,"f").map(m=>{var g;return m.id===((g=this.selectedNode)===null||g===void 0?void 0:g.id)?null:A`
                  <g>
                    ${Ke({node:m,computedThickness:p*d,onClick:C(this,n,"f").call(this,m)})}
                    ${this.selectedNode&&Ft({node:m,distanceTo:this.selectedNode,reverseScale:d,fontSize:h})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Wt({node:this.selectedNode,onClose:this.deselectNode})}
          ${eo(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Xe(this,e,a.type==="CANVAS"?Sr(a):a.absoluteBoundingBox,"f"),Xe(this,r,ye(a),"f"),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(C(this,s,"f")).filter(d=>!!d);Xe(this,t,a.reduce((d,l)=>"absoluteBoundingBox"in l?Object.assign(Object.assign({},d),{[l.id]:Er(l,ye(l))}):d,{}),"f"),this.requestUpdate()}resetZoom(){if(C(this,e,"f")){let{width:a,height:d}=C(this,e,"f"),{width:l,height:p}=this.getBoundingClientRect(),h=l/(a+this.zoomMargin*2),m=p/(d+this.zoomMargin*2);this.scale=Math.min(h,m,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,to([I({type:Number,attribute:"zoom-margin"})],i.prototype,"zoomMargin",void 0),to([I({type:String,attribute:"link"})],i.prototype,"link",void 0),i};function Sr(o){let e=[],t=[],r=[],n=[];for(let c of o.children){if(c.type!=="FRAME"&&c.type!=="COMPONENT")continue;let{x:a,y:d,width:l,height:p}=c.absoluteBoundingBox;e.push(a),t.push(a+l),r.push(d),n.push(d+p)}let s=Math.min(...e),i=Math.min(...r);return{x:s,y:i,width:Math.abs(Math.max(...t)-s),height:Math.abs(Math.min(...n)-i)}}function Er(o,e){let t=e.map(n=>{if(!("effects"in n))return{top:n.absoluteBoundingBox.y,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height,left:n.absoluteBoundingBox.x};let s=n.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),i=n.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),c={top:Math.max(0,...s,...i.map(a=>a.top)),right:Math.max(0,...s,...i.map(a=>a.right)),bottom:Math.max(0,...s,...i.map(a=>a.bottom)),left:Math.max(0,...s,...i.map(a=>a.left))};return{top:n.absoluteBoundingBox.y-c.top,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width+c.right,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height+c.bottom,left:n.absoluteBoundingBox.x-c.left}}),r={top:Math.min(...t.map(n=>n.top)),right:Math.max(...t.map(n=>n.right)),bottom:Math.max(...t.map(n=>n.bottom)),left:Math.min(...t.map(n=>n.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function ye(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>ye(t,e+1)).flat()]:o.children.map(t=>ye(t,e+1)).flat()}var oo=function(o,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},F=class extends be(R){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return L({title:"Parameter error",children:b`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return L({title:"Parameter Error",children:b`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};oo([I({type:Object})],F.prototype,"nodes",void 0);oo([I({type:String,attribute:"rendered-image"})],F.prototype,"renderedImage",void 0);var ro=function(o,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(s=(n<3?i(s):n>3?i(e,t,s):i(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},Je=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},_e,Qe,U=class extends be(R){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,_e.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Qe.set(this,e=>{var t,r;let n=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(s=>s.id===n.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return L({title:"Parameter error",children:b`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return fe(super.styles,[E`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return b`
      <div class="controls">
        <select @change=${Je(this,Qe,"f")}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>b`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Je(this,_e,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Je(this,_e,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};_e=new WeakMap,Qe=new WeakMap;ro([I({type:Object,attribute:"document-node"})],U.prototype,"documentNode",void 0);ro([I({type:Object,attribute:"rendered-images"})],U.prototype,"renderedImages",void 0);customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",U);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",F);var Ar=new Set(["children","localName","ref","style","className"]),no=new WeakMap,Cr=(o,e,t,r,n)=>{let s=n?.[e];s===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((i,c,a)=>{let d=no.get(i);d===void 0&&no.set(i,d=new Map);let l=d.get(c);a!==void 0?l===void 0?(d.set(c,l={handleEvent:a}),i.addEventListener(c,l)):l.handleEvent=a:l!==void 0&&(d.delete(c),i.removeEventListener(c,l))})(o,s,t)},kr=(o,e)=>{typeof o=="function"?o(e):o.current=e};function xe(o=window.React,e,t,r,n){let s,i,c;if(e===void 0){let m=o;({tagName:i,elementClass:c,events:r,displayName:n}=m),s=m.react}else s=o,c=t,i=e;let a=s.Component,d=s.createElement,l=new Set(Object.keys(r??{}));class p extends a{constructor(){super(...arguments),this.o=null}t(g){if(this.o!==null)for(let _ in this.i)Cr(this.o,_,this.props[_],g?g[_]:void 0,r)}componentDidMount(){var g;this.t(),(g=this.o)===null||g===void 0||g.removeAttribute("defer-hydration")}componentDidUpdate(g){this.t(g)}render(){let{_$Gl:g,..._}=this.props;this.h!==g&&(this.u=x=>{g!==null&&kr(g,x),this.o=x,this.h=g}),this.i={};let S={ref:this.u};for(let[x,Ie]of Object.entries(_))Ar.has(x)?S[x==="className"?"class":x]=Ie:l.has(x)||x in c.prototype?this.i[x]=Ie:S[x]=Ie;return S.suppressHydrationWarning=!0,d(i,S)}}p.displayName=n??c.name;let h=s.forwardRef((m,g)=>d(p,{...m,_$Gl:g},m?.children));return h.displayName=p.displayName,h}var so=xe(ae,"figspec-frame-viewer",F,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),io=xe(ae,"figspec-file-viewer",U,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var ed=__STORYBOOK_API__,{ActiveTabs:td,Consumer:od,ManagerContext:rd,Provider:nd,RequestResponseError:sd,addons:et,combineParameters:id,controlOrMetaKey:ad,controlOrMetaSymbol:ld,eventMatchesShortcut:cd,eventToShortcut:dd,experimental_MockUniversalStore:pd,experimental_UniversalStore:ud,experimental_getStatusStore:hd,experimental_getTestProviderStore:md,experimental_requestResponse:fd,experimental_useStatusStore:gd,experimental_useTestProviderStore:vd,experimental_useUniversalStore:yd,internal_fullStatusStore:bd,internal_fullTestProviderStore:_d,internal_universalStatusStore:xd,internal_universalTestProviderStore:wd,isMacLike:$d,isShortcutTaken:Id,keyToSymbol:Sd,merge:Ed,mockChannel:Ad,optionOrAltSymbol:Cd,shortcutMatchesShortcut:kd,shortcutToHumanString:Pd,types:ao,useAddonState:Td,useArgTypes:Md,useArgs:Rd,useChannel:Bd,useGlobalTypes:Od,useGlobals:Nd,useParameter:lo,useSharedState:Ld,useStoryPrepared:Hd,useStorybookApi:Dd,useStorybookState:co}=__STORYBOOK_API__;var zd=__STORYBOOK_ICONS__,{AccessibilityAltIcon:Yd,AccessibilityIcon:Gd,AccessibilityIgnoredIcon:Wd,AddIcon:Zd,AdminIcon:qd,AlertAltIcon:Kd,AlertIcon:Xd,AlignLeftIcon:Jd,AlignRightIcon:Qd,AppleIcon:ep,ArrowBottomLeftIcon:tp,ArrowBottomRightIcon:op,ArrowDownIcon:rp,ArrowLeftIcon:np,ArrowRightIcon:sp,ArrowSolidDownIcon:ip,ArrowSolidLeftIcon:ap,ArrowSolidRightIcon:lp,ArrowSolidUpIcon:cp,ArrowTopLeftIcon:dp,ArrowTopRightIcon:pp,ArrowUpIcon:up,AzureDevOpsIcon:hp,BackIcon:mp,BasketIcon:fp,BatchAcceptIcon:gp,BatchDenyIcon:vp,BeakerIcon:yp,BellIcon:bp,BitbucketIcon:_p,BoldIcon:xp,BookIcon:wp,BookmarkHollowIcon:$p,BookmarkIcon:Ip,BottomBarIcon:Sp,BottomBarToggleIcon:Ep,BoxIcon:Ap,BranchIcon:Cp,BrowserIcon:kp,ButtonIcon:Pp,CPUIcon:Tp,CalendarIcon:Mp,CameraIcon:Rp,CameraStabilizeIcon:Bp,CategoryIcon:Op,CertificateIcon:Np,ChangedIcon:Lp,ChatIcon:Hp,CheckIcon:Dp,ChevronDownIcon:Fp,ChevronLeftIcon:Up,ChevronRightIcon:Vp,ChevronSmallDownIcon:jp,ChevronSmallLeftIcon:zp,ChevronSmallRightIcon:Yp,ChevronSmallUpIcon:Gp,ChevronUpIcon:Wp,ChromaticIcon:Zp,ChromeIcon:qp,CircleHollowIcon:Kp,CircleIcon:Xp,ClearIcon:Jp,CloseAltIcon:Qp,CloseIcon:eu,CloudHollowIcon:tu,CloudIcon:ou,CogIcon:ru,CollapseIcon:nu,CommandIcon:su,CommentAddIcon:iu,CommentIcon:au,CommentsIcon:lu,CommitIcon:cu,CompassIcon:du,ComponentDrivenIcon:pu,ComponentIcon:uu,ContrastIcon:hu,ContrastIgnoredIcon:mu,ControlsIcon:fu,CopyIcon:gu,CreditIcon:vu,CrossIcon:yu,DashboardIcon:bu,DatabaseIcon:_u,DeleteIcon:xu,DiamondIcon:wu,DirectionIcon:$u,DiscordIcon:Iu,DocChartIcon:Su,DocListIcon:Eu,DocumentIcon:Au,DownloadIcon:Cu,DragIcon:ku,EditIcon:Pu,EllipsisIcon:Tu,EmailIcon:Mu,ExpandAltIcon:Ru,ExpandIcon:Bu,EyeCloseIcon:Ou,EyeIcon:Nu,FaceHappyIcon:Lu,FaceNeutralIcon:Hu,FaceSadIcon:Du,FacebookIcon:Fu,FailedIcon:Uu,FastForwardIcon:Vu,FigmaIcon:ju,FilterIcon:zu,FlagIcon:Yu,FolderIcon:Gu,FormIcon:Wu,GDriveIcon:Zu,GithubIcon:qu,GitlabIcon:Ku,GlobeIcon:Xu,GoogleIcon:Ju,GraphBarIcon:Qu,GraphLineIcon:eh,GraphqlIcon:th,GridAltIcon:oh,GridIcon:rh,GrowIcon:nh,HeartHollowIcon:sh,HeartIcon:ih,HomeIcon:ah,HourglassIcon:lh,InfoIcon:ch,ItalicIcon:dh,JumpToIcon:ph,KeyIcon:uh,LightningIcon:hh,LightningOffIcon:mh,LinkBrokenIcon:fh,LinkIcon:gh,LinkedinIcon:vh,LinuxIcon:yh,ListOrderedIcon:bh,ListUnorderedIcon:_h,LocationIcon:xh,LockIcon:wh,MarkdownIcon:$h,MarkupIcon:Ih,MediumIcon:Sh,MemoryIcon:Eh,MenuIcon:Ah,MergeIcon:Ch,MirrorIcon:kh,MobileIcon:Ph,MoonIcon:Th,NutIcon:Mh,OutboxIcon:Rh,OutlineIcon:Bh,PaintBrushIcon:Oh,PaperClipIcon:Nh,ParagraphIcon:Lh,PassedIcon:Hh,PhoneIcon:Dh,PhotoDragIcon:Fh,PhotoIcon:Uh,PhotoStabilizeIcon:Vh,PinAltIcon:jh,PinIcon:zh,PlayAllHollowIcon:Yh,PlayBackIcon:Gh,PlayHollowIcon:Wh,PlayIcon:Zh,PlayNextIcon:qh,PlusIcon:Kh,PointerDefaultIcon:Xh,PointerHandIcon:Jh,PowerIcon:Qh,PrintIcon:em,ProceedIcon:tm,ProfileIcon:om,PullRequestIcon:rm,QuestionIcon:nm,RSSIcon:sm,RedirectIcon:im,ReduxIcon:am,RefreshIcon:lm,ReplyIcon:cm,RepoIcon:dm,RequestChangeIcon:pm,RewindIcon:um,RulerIcon:hm,SaveIcon:mm,SearchIcon:fm,ShareAltIcon:gm,ShareIcon:vm,ShieldIcon:ym,SideBySideIcon:bm,SidebarAltIcon:_m,SidebarAltToggleIcon:xm,SidebarIcon:wm,SidebarToggleIcon:$m,SpeakerIcon:Im,StackedIcon:Sm,StarHollowIcon:Em,StarIcon:Am,StatusFailIcon:Cm,StatusIcon:km,StatusPassIcon:Pm,StatusWarnIcon:Tm,StickerIcon:Mm,StopAltHollowIcon:Rm,StopAltIcon:Bm,StopIcon:Om,StorybookIcon:Nm,StructureIcon:Lm,SubtractIcon:Hm,SunIcon:Dm,SupportIcon:Fm,SweepIcon:Um,SwitchAltIcon:Vm,SyncIcon:jm,TabletIcon:zm,ThumbsUpIcon:Ym,TimeIcon:Gm,TimerIcon:Wm,TransferIcon:Zm,TrashIcon:qm,TwitterIcon:Km,TypeIcon:Xm,UbuntuIcon:Jm,UndoIcon:Qm,UnfoldIcon:ef,UnlockIcon:tf,UnpinIcon:of,UploadIcon:rf,UserAddIcon:nf,UserAltIcon:sf,UserIcon:af,UsersIcon:lf,VSCodeIcon:cf,VerifiedIcon:df,VideoIcon:pf,WandIcon:uf,WatchIcon:hf,WindowsIcon:mf,WrenchIcon:ff,XIcon:gf,YoutubeIcon:vf,ZoomIcon:po,ZoomOutIcon:uo,ZoomResetIcon:ho,iconList:yf}=__STORYBOOK_ICONS__;var Pr=Object.defineProperty,nt=(o,e)=>()=>(o&&(e=o(o=0)),e),Tr=(o,e)=>{for(var t in e)Pr(o,t,{get:e[t],enumerable:!0})},$e,mo,fo,go,st=nt(()=>{$e=({config:o,defer:e=!1})=>{let[t,r]=P(e?void 0:o.url),[n,s]=P(!1);return M(()=>{if(!e)return;let i=requestAnimationFrame(()=>{r(o.url)});return()=>cancelAnimationFrame(i)},[e,o.url]),M(()=>{s(!1)},[t]),u("div",{css:mo},!n&&u(H,{css:fo},"Loading..."),u("iframe",{css:go,src:t,allowFullScreen:o.allowFullscreen,onLoad:()=>s(!0)}))},mo=T`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,fo=T`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,go=T`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),ot,vo,yo,bo=nt(()=>{st(),ot=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,vo=o=>ot.test(o),yo=({config:o})=>{let e=G(()=>vo(o.url)?{url:`https://www.figma.com/embed?embed_host=${o.embedHost||location.hostname}&url=${o.url}`,allowFullscreen:o.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),o),[o.url,o.allowFullscreen,o.embedHost]);return u($e,{defer:!0,config:e})}}),_o={};Tr(_o,{Figspec:()=>rt,default:()=>wo});function we(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function Mr(o){if(o.accessToken)return o.accessToken;try{return f.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function xo(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(xo).reduce((e,t)=>e.concat(t),[])}var tt,rt,wo,Rr=nt(()=>{bo(),tt=T`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,rt=({config:o})=>{let[e,t]=P({state:"loading"}),r=async n=>{t({state:"loading"});try{let s=o.url.match(ot);if(!s)throw new Error(o.url+" is not a valid Figma URL.");let[,,i]=s,c=new URL(o.url).searchParams.get("node-id"),a=Mr(o);if(!a)throw new Error("Personal Access Token is required.");let d={"X-FIGMA-TOKEN":a},l=new URL(`https://api.figma.com/v1/files/${i}`),p=new URL(`https://api.figma.com/v1/images/${i}`);if(p.searchParams.set("format","svg"),!c){let g=await fetch(l.href,{headers:d,signal:n}).then(x=>we(x)),_=xo(g.document);p.searchParams.set("ids",_.map(x=>x.id).join(","));let S=await fetch(p.href,{headers:d,signal:n}).then(x=>we(x));t({state:"fetched",value:{type:"file",props:{documentNode:g,renderedImages:S.images,link:o.url}}});return}l.pathname+="/nodes",l.searchParams.set("ids",c),p.searchParams.set("ids",c);let[h,m]=await Promise.all([fetch(l.href,{headers:d,signal:n}).then(g=>we(g)),fetch(p.href,{headers:d,signal:n}).then(g=>we(g))]);t({state:"fetched",value:{type:"frame",props:{nodes:h,renderedImage:Object.values(m.images)[0],link:o.url}}})}catch(s){if(s instanceof DOMException&&s.code===DOMException.ABORT_ERR)return;console.error(s),t({state:"failed",error:s instanceof Error?s.message:String(s)})}};switch(M(()=>{let n=!1,s=()=>{n=!0},i=new AbortController;return r(i.signal).then(s,s),()=>{n||i.abort()}},[o.url]),e.state){case"loading":return u(H,null,u(w,null,"Loading Figma file..."));case"failed":return u(H,null,u(w,null,"Failed to load Figma file"),u(w,null,e.error));case"fetched":return e.value.type==="file"?u(io,{css:tt,...e.value.props}):u(so,{css:tt,...e.value.props})}},wo=rt}),$o="STORYBOOK_ADDON_DESIGNS",Br=$o+"/panel",Io="design",Or=class extends Se{state={hasError:!1};static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,e){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(o),console.log("--- React Component Stack ---"),console.error(e.componentStack),console.groupEnd()}render(){return this.state.hasError?u(H,null,u(w,null,"Failed to render addon UI"),u(w,null,u("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),u("pre",null,String(this.state.error)),u("p",null,"See console log for more details. To clear the error state, please reload the page."," ",u(X,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}};bo();st();var Nr=(o,e)=>{let[t,r]=P([0,0]),[n,s]=P(!1),i=k(h=>{h.button===0&&(r([h.screenX,h.screenY]),s(!0))},[s,r]),c=k(h=>{let m=h.touches[0];r([m.screenX,m.screenY]),s(!0)},[s,r]),a=k(h=>{n&&r(m=>(o([h[0]-m[0],h[1]-m[1]]),h))},[r,n,...e]),d=k(h=>{let{screenX:m,screenY:g}=h;a([m,g])},[a]),l=k(h=>{let{screenX:m,screenY:g}=h.touches[0];a([m,g])},[r,n,...e]),p=k(()=>{r([0,0]),s(!1)},[s,r]);return{onMouseDown:i,onMouseMove:d,onMouseUp:p,onMouseLeave:p,onTouchStart:c,onTouchMove:l,onTouchCancel:p,onTouchEnd:p}},Lr=({children:o,className:e,style:t,defaultValue:r,value:n,onChange:s})=>{let[i,c]=P([0,0]);M(()=>{c(r||n||[0,0])},[r]);let a=Nr(l=>{s&&s(l),c(p=>[p[0]+l[0],p[1]+l[1]])},[c,s]),d=G(()=>{let l=n||i;return{transform:`translate(${l[0]}px, ${l[1]}px)`}},[n,i]);return u("div",{css:Hr,className:e,style:t,...a},u("div",{css:Dr,style:d},o))},Hr=T`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,Dr=T`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Fr=({onZoomIn:o,onZoomOut:e,onReset:t})=>u(w,null,u(le,{onClick:o},u(po,null)),u(le,{onClick:e},u(uo,null)),u(le,{onClick:t},u(ho,null))),Ur=(o,e)=>{let[t,r]=P(1);M(()=>{r(o)},e);let n=k(()=>{r(c=>c+.1)},[r]),s=k(()=>{r(c=>Math.max(c-.1,.1))},[r]),i=k(()=>{r(1)},[r]);return{scale:t,zoomIn:n,zoomOut:s,resetZoom:i}},Vr=({config:o})=>{let e=Ur(o.scale||1,[o.scale]),t=G(()=>({transform:`scale(${e.scale})`}),[e.scale]);return u("div",{css:jr},u(it,{border:!0},u("div",{style:{display:"grid",gridAutoFlow:"column",gap:"4px",alignItems:"center"}},u(w,{key:"left"},u("p",null,u("b",null,"Image")),u(at,null),u(Fr,{onReset:e.resetZoom,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut})))),u(Lr,{css:zr,defaultValue:o.offset},u("img",{css:Yr,src:o.url,style:t})))},jr=T`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,zr=T`
  flex-grow: 1;
`,Yr=T`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,Gr=({config:o})=>u("div",{css:Wr},u(X,{cancel:!1,href:o.url,target:o.target??"_blank",rel:o.rel??"noopener",withArrow:o.showArrow??!0},o.label||o.url)),Wr=T`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;st();var Zr=o=>{if(o.protocol!=="https:")return{valid:!1,error:u(w,null,"Expected HTTPS link, received ",u("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:u(w,null,"Expected a hostname ",u("code",null,"www.sketch.com"),", received"," ",u("code",null,o.hostname))};let e=u(w,null,"Expected pathname ",u("code",null,"/s/<string>/a/<string>"),", received"," ",u("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};let[r,n,s,i]=t;return r!=="s"||!n||s!=="a"||!i?{valid:!1,error:e}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${n}/a/${i}`,offscreen:!1}}},qr=({config:o})=>{let e=G(()=>{let t=Zr(new URL(o.url));return t.valid?{...t,data:{...o,...t.data}}:t},[o]);return e.valid?u($e,{defer:!0,config:e.data}):u(H,null,u(w,null,"Invalid Sketch URL"),u(w,null,e.error))},Kr=({tabs:o,deps:e=[]})=>{let[t,r]=P(o[0].id);return M(()=>{r(o[0].id)},e),u(lt,{absolute:!0,selected:t,actions:{onSelect:r}},o.map(n=>u("div",{key:n.id,id:n.id,title:n.name},n.offscreen||t===n.id?n.content:null)))},Xr=Ae(()=>Promise.resolve().then(()=>(Rr(),_o))),Jr=({config:o})=>{if(!o||"length"in o&&o.length===0)return u(H,null,u(w,null,"No designs found"),u(w,null,"Learn how to"," ",u(X,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let e=[...o instanceof Array?o:[o]].map(t=>{let r={id:JSON.stringify(t),name:t.name||t.type?.toUpperCase()||"ERROR",offscreen:t.offscreen??!0};switch(t.type){case"iframe":return{...r,content:u($e,{config:t})};case"figma":return{...r,content:u(yo,{config:t}),offscreen:!1};case"sketch":return{...r,content:u(qr,{config:t})};case"figspec":case"experimental-figspec":return t.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...r,content:u(Ee,{fallback:"Preparing Figspec viewer..."},u(Xr,{config:t})),offscreen:!1};case"image":return{...r,content:u(Vr,{config:t})};case"link":return{...r,content:u(Gr,{config:t})}}return{...r,content:u(H,null,u(w,null,"Invalid config type"),u(w,null,"Config type you set is not supported. Please choose one from"," ",u(X,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return e.length===1?u("div",null,e[0].content):u(Kr,{tabs:e,deps:[o]})},Qr=({active:o})=>{let e=co(),t=lo(Io),[r,n]=P(o);return M(()=>{n(o)},[t]),M(()=>{o&&n(!0)},[o]),r?u(Jr,{key:e.storyId,config:t}):null},en="Design";function tn(o){et.register($o,e=>{et.add(Br,{title:en,render({active:t}){return t?u(Or,null,u(Qr,{active:!0})):u("noscript",null)},type:ao.TAB,paramKey:Io})})}tn();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
