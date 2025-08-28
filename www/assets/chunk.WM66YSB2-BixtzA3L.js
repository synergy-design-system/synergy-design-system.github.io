import{h as p,k as lt,x as _,v as ct,l as U,u as dt}from"./iframe-DkuhNNKt.js";import{n as c}from"./synergy-element-DwyHbzMO.js";import{e as C}from"./class-map-ObrBcWXB.js";import{a as A}from"./icon.component-0vAZ8ena.js";import{t as ut}from"./event-options-CNZcgQm4.js";import{a as k}from"./query-DAIS6qJ0.js";import{o as Z}from"./query-assigned-elements-QtOlz7Yz.js";import{o as f}from"./if-defined-C0_zlWaf.js";import{r as tt,L as ht}from"./index-DihgwUfS.js";var et=Object.defineProperty,bt=Object.defineProperties,pt=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,at=t=>{throw TypeError(t)},V=(t,e,r)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e)=>{for(var r in e||(e={}))rt.call(e,r)&&V(t,r,e[r]);if(O)for(var r of O(e))ot.call(e,r)&&V(t,r,e[r]);return t},te=(t,e)=>bt(t,vt(e)),ee=(t,e)=>{var r={};for(var o in t)rt.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&O)for(var o of O(t))e.indexOf(o)<0&&ot.call(t,o)&&(r[o]=t[o]);return r},i=(t,e,r,o)=>{for(var a=o>1?void 0:o?pt(e,r):e,s=t.length-1,l;s>=0;s--)(l=t[s])&&(a=(o?l(e,r,a):l(a))||a);return o&&a&&et(e,r,a),a},W=(t,e,r)=>e.has(t)||at("Cannot "+r),v=(t,e,r)=>(W(t,e,"read from private field"),e.get(t)),$=(t,e,r)=>e.has(t)?at("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),D=(t,e,r,o)=>(W(t,e,"write to private field"),e.set(t,r),r),re=(t,e,r)=>(W(t,e,"access private method"),r);function S(t,e){const r=E({waitUntilFirstUpdate:!1},e);return(o,a)=>{const{update:s}=o,l=Array.isArray(t)?t:[t];o.update=function(n){l.forEach(h=>{const b=h;if(n.has(b)){const m=n.get(b),T=this[b];m!==T&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[a](m,T)}}),s.call(this,n)}}}var z=p`
	/* stylelint-disable */
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
`,L,y=class extends lt{constructor(){super(),$(this,L,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const r=new CustomEvent(t,E({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let a=" (unknown version)",s=a;"version"in e&&e.version&&(a=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),!(a&&s&&a===s)&&console.warn(`Attempted to register <${t}>${a}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,r){v(this,L)||(this.constructor.elementProperties.forEach((o,a)=>{o.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),D(this,L,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};L=new WeakMap;y.version="2.41.1";y.dependencies={};i([c()],y.prototype,"dir",2);i([c()],y.prototype,"lang",2);var H="";function G(t){H=t}function gt(t=""){if(!H){const e=[...document.getElementsByTagName("script")],r=e.find(o=>o.hasAttribute("data-synergy"));if(r)G(r.getAttribute("data-synergy"));else{const o=e.find(s=>/synergy(\.min)?\.js($|\?)/.test(s.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(s.src));let a="";o&&(a=o.getAttribute("src")),G(a.split("/").slice(0,-1).join("/"))}}return H.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ft={name:"default",resolver:t=>gt(`assets/icons/${t}.svg`)},yt=ft,mt={add:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>`,caret:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M16.59 8.295 12 12.875l-4.59-4.58L6 9.705l6 6 6-6z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m8.795 15.875-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M16.59 8.295 12 12.875l-4.59-4.58L6 9.705l6 6 6-6z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m9.705 6-1.41 1.41 4.58 4.59-4.58 4.59L9.705 18l6-6z"/></svg>`,error:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12.005 6.5c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16c.57-.23 1.18-.36 1.83-.36m-10-2.73 2.74 2.74a11.8 11.8 0 0 0-3.74 4.99c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42 2.93 2.92 1.27-1.27L3.275 2.5zm5.53 5.53 1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"/></svg>`,indeterminate:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M19 13H5v-2h14z"/></svg>`,"logo-color":`<svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill='currentColor'><g clip-path="url(#a)"><path fill-rule="evenodd" d="M207.961 69.06c-7.829 14.83-23.348 24.923-41.157 24.923-25.708 0-46.547-21.04-46.547-46.991C120.257 21.04 141.096 0 166.804 0c17.635 0 32.971 9.893 40.87 24.489l-19.072 10.293c-4.267-7.864-12.514-13.106-21.798-13.106-13.542 0-24.872 11.138-24.872 25.316s11.33 25.315 24.872 25.315c9.475 0 17.922-5.451 22.103-13.594zM111.078 1.662H89.777v90.204h21.301zM26.082 91.867c-12.13 0-25.49-6.549-25.49-21.754 0 0 46.582 0 54.002.008 7.899-1.576 7.02-11.538 0-12.914h-27.72c-14.752 0-26.43-12.593-26.43-27.598 0-14.43 10.79-27.937 26.43-27.937h30.411c12.54 0 21.493 9.388 21.493 21.293H26.875c-6.976.992-7.42 11.695 0 12.906h27.64c15.162.409 27.258 12.48 27.258 27.763 0 14.081-11.948 28.233-27.188 28.233zm189.908 0V1.663h21.545V37.84h8.291l22.398-36.176h26.492L264.192 47.34l30.08 44.527h-26.501l-22.668-34.948h-7.568v34.948z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path d="M0 0h295v94H0z"/></clipPath></defs></svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/></svg>`,more:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"/></svg>`,"more-vert":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"/></svg>`,radio:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill='currentColor'><path d="M6 1C3.235 1 1 3.235 1 6s2.235 5 5 5 5-2.235 5-5-2.235-5-5-5"/></svg>`,sticky_sidebar:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm5-2h9V5h-9z"/></svg>`,"upload-file":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/></svg>`,"x-circle-fill":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"/></svg>`,"x-lg":`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`},j=mt,wt={name:"system",resolver:t=>t in j?j[t]:""},_t=wt,St=[yt,_t],F=[];function xt(t){F.push(t)}function Ct(t){F=F.filter(e=>e!==t)}function q(t){return St.find(e=>e.name===t)}var kt=p`
  /* Write custom CSS here */
`,zt=p`
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
`,x=Symbol(),I=Symbol(),R,P=new Map,w=class extends y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let o;if(e?.spriteSheet)return this.svg=_`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library==="system"){if(!t)return x;o=new Response(t,{status:200})}else try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?x:I}catch{return I}try{const a=document.createElement("div");a.innerHTML=await o.text();const s=a.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return x;R||(R=new DOMParser);const n=R.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):x}catch{return x}}connectedCallback(){super.connectedCallback(),xt(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ct(this)}getIconSource(){const t=q(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:r}=this.getIconSource(),o=r?q(this.library):void 0;if(!e){this.svg=null;return}let a=P.get(e);if(a||(a=this.resolveIcon(e,o),P.set(e,a)),!this.initialRender)return;const s=await a;if(s===I&&P.delete(e),e===this.getIconSource().url){if(ct(s)){if(this.svg=s,o){await this.updateComplete;const l=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&l&&o.mutator(l)}return}switch(s){case I:case x:this.svg=null,this.emit("syn-error");break;default:this.svg=s.cloneNode(!0),(t=o?.mutator)==null||t.call(o,this.svg),this.emit("syn-load")}}}render(){return this.svg}};w.styles=[z,zt,kt];i([A()],w.prototype,"svg",2);i([c({reflect:!0})],w.prototype,"name",2);i([c()],w.prototype,"src",2);i([c()],w.prototype,"label",2);i([c({reflect:!0})],w.prototype,"library",2);i([S("label")],w.prototype,"handleLabelChange",1);i([S(["name","src","library"])],w.prototype,"setIcon",1);var st={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Choose file",fileButtonTextMultiple:"Choose files",fileDragDrop:"Drop or choose file",folderButtonText:"Choose folder",folderDragDrop:"Drop or choose folder",menu:"Menu",noResults:"No results found",notification:"Notification",numFilesSelected:(t,e)=>t===0?`No ${e?"folder":"files"} chosen`:`${t} files`,openMenu:"Open menu",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Side navigation",sideNavHide:"Hide navigation",sideNavShow:"Show navigation",success:"Success",warning:"Warning"};tt(st);var Tt=st,it=class extends ht{};tt(Tt);var N={autoClamp:!1,noStepAlign:!1,noStepValidation:!1},oe={autoClamp:!0,noStepAlign:!0,noStepValidation:!0},ae=(t={})=>E(E({},N),t),$t={delimiter:{SynSelect:" "},numericStrategy:{SynInput:N},size:{SynAccordion:"medium",SynButton:"medium",SynCheckbox:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynSideNav:"default",SynValidate:"native"}},Et={delimiter:{SynSelect:" "},numericStrategy:{SynInput:N},size:{SynAccordion:"medium",SynButton:"medium",SynCheckbox:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynSideNav:"default",SynValidate:"native"}},Y=new Map,K=new Set,At=t=>{K.has(t)&&K.delete(t)},X=(t,e="default")=>{const r=e==="default"?$t:Et;if(e==="default"){const a=Y.get(t);if(typeof a<"u")return a}const o=Object.entries(r).reduce((a,[s,l])=>{const n=l[t];return n&&(a[s]=n),a},{});return e==="default"&&Y.set(t,o),o};function Bt(t){return e=>{var r,o,a,s,l;return l=class extends e{constructor(...n){super(...n),$(this,r,!1),$(this,o,new Map),$(this,a,[]),$(this,s),this._isInitialized=!1,this._isInitialized=!0,D(this,s,X(t,"initial"))}get __originalDecoratedClassName(){return t}overrideGlobalSettings(n){n.forEach(h=>{v(this,o).has(h.attribute)&&(this[h.attribute]=h.newValue)})}disconnectedCallback(){super.disconnectedCallback(),At(this)}requestUpdate(n,h,b){var m;super.requestUpdate(n,h,b),!(!this._isInitialized||v(this,r)||!n||!(n in v(this,s))||(m=v(this,a))!=null&&m.includes(n))&&v(this,a).push(n)}willUpdate(n){if(super.willUpdate(n),v(this,r))return;D(this,r,!0);const h=X(t);Object.entries(h).forEach(([b,m])=>{const T=this[b],nt=v(this,s)[b];T===nt&&!v(this,a).includes(b)&&(v(this,o).set(b,T),this[b]=m)}),v(this,o).size>0}},r=new WeakMap,o=new WeakMap,a=new WeakMap,s=new WeakMap,l}}var It=p`
  /* stylelint-disable no-descending-specificity */
  /* Write custom CSS here */
  :host {
    --track-width: var(--syn-border-width-small);
    --track-color: var(--syn-color-neutral-300);
    --indicator-width: var(--syn-border-width-x-large);
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
    bottom: 0;
  }

  .tab-group--start .tab-group__indicator {
    border-right: solid var(--indicator-width) var(--indicator-color);
    right: 0;
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    left: 0;
  }

  .tab-group--end .tab-group__indicator {
    border-inline-start: solid var(--indicator-width) var(--indicator-color);
    left: 0;
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: 0;
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
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-medium);
    width: calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button::part(base) {
    padding: calc(var(--syn-spacing-small) - var(--syn-spacing-3x-small));
  }

  /* Make sure the direction of the chevrons match the scrolling directions. */
  .tab-group--has-scroll-controls:not(.tab-group--rtl) .tab-group__scroll-button--start,
  .tab-group--rtl .tab-group__scroll-button--end {
    rotate: 180deg;
  }

  .tab-group--has-scroll-controls:not(.tab-group--contained) .tab-group__scroll-button--start {
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--has-scroll-controls:not(.tab-group--contained) .tab-group__scroll-button--end {
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--rtl:not(.tab-group--contained) .tab-group__scroll-button--start {
    border-bottom: solid var(--track-width) var(--track-color);
    border-top: none;
  }

  .tab-group--rtl:not(.tab-group--contained) .tab-group__scroll-button--end {
    border-bottom: none;
    border-top: solid var(--track-width) var(--track-color);
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
`,Lt=p`
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
`,Ot=p`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`,M=class extends y{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("syn-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return _` <slot @slotchange=${this.handleSlotChange}></slot> `}};M.styles=[z,Ot];i([c({type:Boolean,reflect:!0})],M.prototype,"disabled",2);i([S("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);function Mt(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function Q(t,e,r="vertical",o="smooth"){const a=Mt(t,e),s=a.top+e.scrollTop,l=a.left+e.scrollLeft,n=e.scrollLeft,h=e.scrollLeft+e.offsetWidth,b=e.scrollTop,m=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(l<n?e.scrollTo({left:l,behavior:o}):l+t.clientWidth>h&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:o})),(r==="vertical"||r==="both")&&(s<b?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>m&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}var Rt=p`
  .icon-button {
    border-radius: 0;
    color: currentColor;
    font-size: inherit;
  }

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);

    /** #429: Use token for opacity */
    opacity: var(--syn-input-disabled-opacity);
  }

  /* Remove round borders */
  .icon-button:focus-visible {
    border-radius: var(--syn-border-radius-none);
  }

  /* Colors */
  :host([color="currentColor"]) {
    color: currentColor;
  }

  :host([color="primary"]),
  :host([color="primary"]) .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  :host([color="primary"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-color-primary-900);
  }

  :host([color="primary"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-950);
  }

  :host([color="neutral"]),
  :host([color="neutral"]) .icon-button:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-color-neutral-950);
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
`,Pt=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
    color: var(--syn-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--syn-spacing-x-small);
    cursor: pointer;
    transition: var(--syn-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,u=class extends y{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?U`a`:U`button`;return dt`
      <${e}
        part="base"
        class=${C({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large"})}
        ?disabled=${f(t?void 0:this.disabled)}
        type=${f(t?void 0:"button")}
        href=${f(t?this.href:void 0)}
        target=${f(t?this.target:void 0)}
        download=${f(t?this.download:void 0)}
        rel=${f(t&&this.target?"noreferrer noopener":void 0)}
        role=${f(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${f(this.name)}
          library=${f(this.library)}
          src=${f(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${e}>
    `}};u.styles=[z,Pt,Rt];u.dependencies={"syn-icon":w};i([k(".icon-button")],u.prototype,"button",2);i([A()],u.prototype,"hasFocus",2);i([c()],u.prototype,"name",2);i([c()],u.prototype,"library",2);i([c()],u.prototype,"src",2);i([c()],u.prototype,"href",2);i([c()],u.prototype,"target",2);i([c()],u.prototype,"download",2);i([c()],u.prototype,"label",2);i([c({reflect:!0})],u.prototype,"size",2);i([c({reflect:!0})],u.prototype,"color",2);i([c({type:Boolean,reflect:!0})],u.prototype,"disabled",2);u=i([Bt("SynIconButton")],u);var Dt=(t,e)=>{let r=0;return function(...o){window.clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...o)},e)}},J=(t,e,r)=>{const o=t[e];t[e]=function(...a){o.call(this,...a),r.call(this,o,...a)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,r=new WeakMap,o=s=>{for(const l of s.changedTouches)e.add(l.identifier)},a=s=>{for(const l of s.changedTouches)e.delete(l.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",a,!0),document.addEventListener("touchcancel",a,!0),J(EventTarget.prototype,"addEventListener",function(s,l){if(l!=="scrollend")return;const n=Dt(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",n,{passive:!0}),r.set(this,n)}),J(EventTarget.prototype,"removeEventListener",function(s,l){if(l!=="scrollend")return;const n=r.get(this);n&&s.call(this,"scroll",n,{passive:!0})})}})();var d=class extends y{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new it(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const r=e.filter(({target:o})=>{if(o===this)return!0;if(o.closest("syn-tab-group")!==this)return!1;const a=o.tagName.toLowerCase();return a==="syn-tab"||a==="syn-tab-panel"});if(r.length!==0){if(r.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(o=>o.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(o=>o.attributeName==="active")){const a=r.filter(s=>s.attributeName==="active"&&s.target.tagName.toLowerCase()==="syn-tab").map(s=>s.target).find(s=>s.active);a&&this.setActiveTab(a)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((r,o)=>{var a;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((a=this.getActiveTab())!=null?a:this.tabs[0],{emitEvents:!1}),o.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const r=t.target.closest("syn-tab");r?.closest("syn-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){const r=t.target.closest("syn-tab");if(r?.closest("syn-tab-group")===this&&(["Enter"," "].includes(t.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const a=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";let l=null;if(a?.tagName.toLowerCase()==="syn-tab"){if(t.key==="Home")l=this.focusableTabs[0];else if(t.key==="End")l=this.focusableTabs[this.focusableTabs.length-1];else if(["top"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const n=this.tabs.findIndex(h=>h===a);l=this.findNextFocusableTab(n,"backward")}else if(["top"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const n=this.tabs.findIndex(h=>h===a);l=this.findNextFocusableTab(n,"forward")}if(!l)return;l.tabIndex=0,l.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(l,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===l?0:-1}),["top"].includes(this.placement)&&Q(l,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=E({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const r=this.activeTab;this.activeTab=t,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var a;return o.active=o.name===((a=this.activeTab)==null?void 0:a.panel)}),this.syncIndicator(),["top"].includes(this.placement)&&Q(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("syn-tab-hide",{detail:{name:r.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,r=t.clientHeight,o=this.localize.dir()==="rtl",s=this.tabs.slice(0,this.tabs.indexOf(t)).reduce((l,n)=>({left:l.left+n.clientWidth,top:l.top+n.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${e}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${o?"-":""}1 * (${s.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${r}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${s.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let r=null;const o=e==="forward"?1:-1;let a=t+o;for(;t<this.tabs.length;){if(r=this.tabs[a]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;a+=o}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}preventFocus(t){t.preventDefault()}render(){return _`
      <div
        part="base"
        class=${C({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?_`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${C({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name="chevron-right"
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

          ${this.hasScrollControls?_`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${C({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name="chevron-right"
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
    `}};d.styles=[z,Lt,It];d.dependencies={"syn-icon-button":u,"syn-resize-observer":M};i([Z({slot:"nav",selector:"syn-tab"})],d.prototype,"tabs",2);i([Z({selector:"syn-tab-panel"})],d.prototype,"panels",2);i([k(".tab-group")],d.prototype,"tabGroup",2);i([k(".tab-group__body")],d.prototype,"body",2);i([k(".tab-group__nav")],d.prototype,"nav",2);i([k(".tab-group__indicator")],d.prototype,"indicator",2);i([A()],d.prototype,"hasScrollControls",2);i([A()],d.prototype,"shouldHideScrollStartButton",2);i([A()],d.prototype,"shouldHideScrollEndButton",2);i([c()],d.prototype,"placement",2);i([c()],d.prototype,"activation",2);i([c({attribute:"no-scroll-controls",type:Boolean})],d.prototype,"noScrollControls",2);i([c({type:Boolean})],d.prototype,"contained",2);i([c({type:Boolean})],d.prototype,"sharp",2);i([c({attribute:"fixed-scroll-controls",type:Boolean})],d.prototype,"fixedScrollControls",2);i([ut({passive:!0})],d.prototype,"updateScrollButtons",1);i([S("noScrollControls",{waitUntilFirstUpdate:!0})],d.prototype,"updateScrollControls",1);i([S("placement",{waitUntilFirstUpdate:!0})],d.prototype,"syncIndicator",1);d.define("syn-tab-group");var Ht=p`
  /* Write custom CSS here */

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
    color: var(--syn-color-primary-700);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--syn-typography-color-text);
  }


  /**
   * Closable
   */
  .tab.tab--closable {
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-large);
  }

  .tab__close-button {
    color: var(--syn-color-neutral-500);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-x-small);
  }

  .tab__close-button::part(base):hover {
    color: var(--syn-color-primary-700);
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
`,Ft=p`
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
`,Wt=0,g=class extends y{constructor(){super(...arguments),this.localize=new it(this),this.attrId=++Wt,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,_`
      <div
        part="base"
        class=${C({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?_`
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
    `}};g.styles=[z,Ft,Ht];g.dependencies={"syn-icon-button":u};i([k(".tab")],g.prototype,"tab",2);i([c({reflect:!0})],g.prototype,"panel",2);i([c({type:Boolean,reflect:!0})],g.prototype,"active",2);i([c({type:Boolean,reflect:!0})],g.prototype,"closable",2);i([c({type:Boolean,reflect:!0})],g.prototype,"disabled",2);i([c({type:Number,reflect:!0})],g.prototype,"tabIndex",2);i([S("active")],g.prototype,"handleActiveChange",1);i([S("disabled")],g.prototype,"handleDisabledChange",1);g.define("syn-tab");var Nt=p`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`,Ut=p`
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
`,Vt=0,B=class extends y{constructor(){super(...arguments),this.attrId=++Vt,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return _`
      <slot
        part="base"
        class=${C({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};B.styles=[z,Ut,Nt];i([c({reflect:!0})],B.prototype,"name",2);i([c({type:Boolean,reflect:!0})],B.prototype,"active",2);i([S("active")],B.prototype,"handleActiveChange",1);B.define("syn-tab-panel");export{it as L,y as S,ee as _,E as a,i as b,z as c,te as d,w as e,Bt as f,$ as g,D as h,ae as i,v as j,re as k,oe as m,N as n,S as w};
