import{j as we,M as qi}from"./index-DCaNCkn3.js";import{useMDXComponents as hi}from"./index-CMNp7ghJ.js";import{b as x,r as lt,R as ve}from"./index-CYQpqK1Q.js";import{i as d,h as Pi,k as u,n as Ri,u as qt,D as ji,R as Hi,Q as Ui}from"./directive-helpers-B-JxG5af.js";import{n as s,a as _,r as Wi}from"./library-UYMiFSYt.js";import{e as m,a as Te,k as se,R as v,b as y,d as Ki,f as Gi}from"./if-defined-98Biveud.js";import{r as gi,L as Zi,t as Xi,F as Je,b as Yi,o as Qi,f as Ji,s as eo,c as Pt,d as to,p as xt,e as io,g as oo,h as fi,i as ao,a as yi,j as so,$ as ro,k as no,K as lo}from"./ref-DMm6gEez.js";import{d as Ot}from"./default-icons--FEJ2Psb.js";import"./iframe-BNGWLgq7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=new Set(["children","localName","ref","style","className"]),Rt=new WeakMap,jt=(e,t,i,a,r)=>{const n=r?.[t];n===void 0?(e[t]=i,i==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):i!==a&&((l,p,c)=>{let h=Rt.get(l);h===void 0&&Rt.set(l,h=new Map);let k=h.get(p);c!==void 0?k===void 0?(h.set(p,k={handleEvent:c}),l.addEventListener(p,k)):k.handleEvent=c:k!==void 0&&(h.delete(p),l.removeEventListener(p,k))})(e,n,i)},w=({react:e,tagName:t,elementClass:i,events:a,displayName:r})=>{const n=new Set(Object.keys(a??{})),l=e.forwardRef((p,c)=>{const h=e.useRef(new Map),k=e.useRef(null),V={},he={};for(const[N,G]of Object.entries(p))po.has(N)?V[N==="className"?"class":N]=G:n.has(N)||N in i.prototype?he[N]=G:V[N]=G;return e.useLayoutEffect(()=>{if(k.current===null)return;const N=new Map;for(const G in he)jt(k.current,G,p[G],h.current.get(G),a),h.current.delete(G),N.set(G,p[G]);for(const[G,nt]of h.current)jt(k.current,G,void 0,nt,a);h.current=N}),e.useLayoutEffect(()=>{k.current?.removeAttribute("defer-hydration")},[]),V.suppressHydrationWarning=!0,e.createElement(t,{...V,ref:e.useCallback(N=>{k.current=N,typeof c=="function"?c(N):c!==null&&(c.current=N)},[c])})});return l.displayName=r??i.name,l};var co=d`
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
`,uo=d`
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
`,mo=d`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`,bi=Object.defineProperty,ho=Object.defineProperties,go=Object.getOwnPropertyDescriptor,fo=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,yo=Object.prototype.hasOwnProperty,bo=Object.prototype.propertyIsEnumerable,wt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Dt=e=>{throw TypeError(e)},Ut=(e,t,i)=>t in e?bi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ge=(e,t)=>{for(var i in t||(t={}))yo.call(t,i)&&Ut(e,i,t[i]);if(Ht)for(var i of Ht(t))bo.call(t,i)&&Ut(e,i,t[i]);return e},Pe=(e,t)=>ho(e,fo(t)),o=(e,t,i,a)=>{for(var r=a>1?void 0:a?go(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(a?l(t,i,r):l(r))||r);return a&&r&&bi(t,i,r),r},Mt=(e,t,i)=>t.has(e)||Dt("Cannot "+i),f=(e,t,i)=>(Mt(e,t,"read from private field"),i?i.call(e):t.get(e)),ue=(e,t,i)=>t.has(e)?Dt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),oe=(e,t,i,a)=>(Mt(e,t,"write to private field"),t.set(e,i),i),F=(e,t,i)=>(Mt(e,t,"access private method"),i),vo=function(e,t){this[0]=e,this[1]=t},_o=e=>{var t=e[wt("asyncIterator")],i=!1,a,r={};return t==null?(t=e[wt("iterator")](),a=n=>r[n]=l=>t[n](l)):(t=t.call(e),a=n=>r[n]=l=>{if(i){if(i=!1,n==="throw")throw l;return l}return i=!0,{done:!1,value:new vo(new Promise(p=>{var c=t[n](l);c instanceof Object||Dt("Object expected"),p(c)}),1)}}),r[wt("iterator")]=()=>r,a("next"),"throw"in t?a("throw"):r.throw=n=>{throw n},"return"in t&&a("return"),r};function g(e,t){const i=ge({waitUntilFirstUpdate:!1},t);return(a,r)=>{const{update:n}=a,l=Array.isArray(e)?e:[e];a.update=function(p){l.forEach(c=>{const h=c;if(p.has(h)){const k=p.get(h),V=this[h];k!==V&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](k,V)}}),n.call(this,p)}}}var z=d`
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
`,ut,b=class extends Pi{constructor(){super(),ue(this,ut,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,ge({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const a=customElements.get(e);if(!a){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",n=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in a&&a.version&&(n=" v"+a.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,i){f(this,ut)||(this.constructor.elementProperties.forEach((a,r)=>{a.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),oe(this,ut,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}};ut=new WeakMap;b.version="2.23.0";b.dependencies={};o([s()],b.prototype,"dir",2);o([s()],b.prototype,"lang",2);var ft=class extends b{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("syn-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],t.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return u` <slot @slotchange=${this.handleSlotChange}></slot> `}};ft.styles=[z,mo];o([s({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);o([g("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);function xo(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var At=new Set;function wo(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function zo(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Qe(e){if(At.add(e),!document.documentElement.classList.contains("syn-scroll-lock")){const t=wo()+zo();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--syn-scroll-lock-gutter",i),document.documentElement.classList.add("syn-scroll-lock"),document.documentElement.style.setProperty("--syn-scroll-lock-size",`${t}px`)}}function Be(e){At.delete(e),At.size===0&&(document.documentElement.classList.remove("syn-scroll-lock"),document.documentElement.style.removeProperty("--syn-scroll-lock-size"))}function gt(e,t,i="vertical",a="smooth"){const r=xo(e,t),n=r.top+t.scrollTop,l=r.left+t.scrollLeft,p=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,h=t.scrollTop,k=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(l<p?t.scrollTo({left:l,behavior:a}):l+e.clientWidth>c&&t.scrollTo({left:l-t.offsetWidth+e.clientWidth,behavior:a})),(i==="vertical"||i==="both")&&(n<h?t.scrollTo({top:n,behavior:a}):n+e.clientHeight>k&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:a}))}var ko=d`
  .icon-button {
    border-radius: 0;
    color: currentColor;
    font-size: inherit;
  }

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);
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
`,Co=d`
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
`,It="";function Wt(e){It=e}function So(e=""){if(!It){const t=[...document.getElementsByTagName("script")],i=t.find(a=>a.hasAttribute("data-synergy"));if(i)Wt(i.getAttribute("data-synergy"));else{const a=t.find(n=>/synergy(\.min)?\.js($|\?)/.test(n.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";a&&(r=a.getAttribute("src")),Wt(r.split("/").slice(0,-1).join("/"))}}return It.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var $o={name:"default",resolver:e=>So(`assets/icons/${e}.svg`)},Oo=$o,Kt={add:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>`,caret:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z"/></svg>`,check:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M8.79496 15.875L4.62496 11.705L3.20496 13.115L8.79496 18.705L20.795 6.70501L19.385 5.29501L8.79496 15.875Z"/></svg>`,"chevron-down":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z"/></svg>`,"chevron-right":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z"/></svg>`,error:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/></svg>`,"eye-slash":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12.005 6.5C14.765 6.5 17.005 8.74 17.005 11.5C17.005 12.15 16.875 12.76 16.645 13.33L19.565 16.25C21.075 14.99 22.265 13.36 22.995 11.5C21.265 7.11 16.995 4 11.995 4C10.595 4 9.255 4.25 8.01501 4.7L10.175 6.86C10.745 6.63 11.355 6.5 12.005 6.5ZM2.005 3.77L4.745 6.51C3.085 7.8 1.785 9.52 1.005 11.5C2.735 15.89 7.005 19 12.005 19C13.555 19 15.035 18.7 16.385 18.16L16.805 18.58L19.735 21.5L21.005 20.23L3.275 2.5L2.005 3.77ZM7.53501 9.3L9.085 10.85C9.035 11.06 9.005 11.28 9.005 11.5C9.005 13.16 10.345 14.5 12.005 14.5C12.225 14.5 12.445 14.47 12.655 14.42L14.205 15.97C13.535 16.3 12.795 16.5 12.005 16.5C9.245 16.5 7.005 14.26 7.005 11.5C7.005 10.71 7.20501 9.97 7.53501 9.3ZM11.845 8.52L14.995 11.67L15.015 11.51C15.015 9.85 13.675 8.51 12.015 8.51L11.845 8.52Z"/></svg>`,eye:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/></svg>`,indeterminate:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H5V11H19V13Z"/></svg>`,"logo-color":`
		<svg width="295" height="94" viewBox="0 0 295 94" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><g clip-path="url(#clip0_9951_9907)"><path fill-rule="evenodd" clip-rule="evenodd" d="M207.961 69.0591C200.132 83.8898 184.613 93.983 166.804 93.983C141.096 93.983 120.257 72.9431 120.257 46.9915C120.257 21.0399 141.096 0 166.804 0C184.439 0 199.775 9.89295 207.674 24.4885L188.602 34.7821C184.335 26.9182 176.088 21.6757 166.804 21.6757C153.262 21.6757 141.932 32.8139 141.932 46.9915C141.932 61.1691 153.262 72.3074 166.804 72.3074C176.279 72.3074 184.726 66.8558 188.907 58.7133L207.961 69.0591ZM111.078 1.66335H89.7768V91.8668H111.078V1.66335ZM26.0822 91.8669C13.9511 91.8669 0.592136 85.318 0.592136 70.1128C0.592136 70.1128 47.1743 70.1128 54.5941 70.1215C62.4927 68.5453 61.6132 58.5826 54.5941 57.2067H26.8746C12.1223 57.2067 0.444092 44.6141 0.444092 29.6092C0.444092 15.1791 11.234 1.67206 26.8746 1.67206H57.285C69.8254 1.67206 78.7778 11.0599 78.7778 22.9645H26.8746C19.8991 23.9573 19.4549 34.6602 26.8746 35.8707H54.5157C69.6773 36.28 81.7735 48.3501 81.7735 63.6336C81.7735 77.7154 69.8254 91.8669 54.5853 91.8669H26.0822ZM215.99 91.8668V1.66335H237.535V37.8388H245.826L268.224 1.66335H294.716L264.192 47.3399L294.272 91.8668H267.771L245.103 56.9193H237.535V91.8668H215.99Z"/></g><defs><clipPath id="clip0_9951_9907"><rect width="295" height="94"/></clipPath></defs></svg>`,menu:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"/></svg>`,"more-vert":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"/></svg>`,more:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"/></svg>`,radio:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"/></svg>`,"upload-file":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z"/></svg>`,"x-circle-fill":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"/></svg>`,"x-lg":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>`},Ao={name:"system",resolver:e=>e in Kt?`data:image/svg+xml,${encodeURIComponent(Kt[e])}`:""},Io=Ao,Eo=[Oo,Io],Et=[];function To(e){Et.push(e)}function Lo(e){Et=Et.filter(t=>t!==e)}function Gt(e){return Eo.find(t=>t.name===e)}var Do=d`
  /* Write custom CSS here */
`,Mo=d`
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
`,We=Symbol(),pt=Symbol(),zt,kt=new Map,R=class extends b{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,i){var a;let r;if(i?.spriteSheet)return this.svg=u`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?We:pt}catch{return pt}try{const n=document.createElement("div");n.innerHTML=await r.text();const l=n.firstElementChild;if(((a=l?.tagName)==null?void 0:a.toLowerCase())!=="svg")return We;zt||(zt=new DOMParser);const c=zt.parseFromString(l.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):We}catch{return We}}connectedCallback(){super.connectedCallback(),To(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Lo(this)}getIconSource(){const t=Gt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:i,fromLibrary:a}=this.getIconSource(),r=a?Gt(this.library):void 0;if(!i){this.svg=null;return}let n=kt.get(i);if(n||(n=this.resolveIcon(i,r),kt.set(i,n)),!this.initialRender)return;const l=await n;if(l===pt&&kt.delete(i),i===this.getIconSource().url){if(Ri(l)){if(this.svg=l,r){await this.updateComplete;const p=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&p&&r.mutator(p)}return}switch(l){case pt:case We:this.svg=null,this.emit("syn-error");break;default:this.svg=l.cloneNode(!0),(t=r?.mutator)==null||t.call(r,this.svg),this.emit("syn-load")}}}render(){return this.svg}};R.styles=[z,Mo,Do];o([_()],R.prototype,"svg",2);o([s({reflect:!0})],R.prototype,"name",2);o([s()],R.prototype,"src",2);o([s()],R.prototype,"label",2);o([s({reflect:!0})],R.prototype,"library",2);o([g("label")],R.prototype,"handleLabelChange",1);o([g(["name","src","library"])],R.prototype,"setIcon",1);var Fo={size:{SynAccordion:"medium",SynButton:"medium",SynCheckbox:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynValidate:"native"}},Vo={size:{SynAccordion:"medium",SynButton:"medium",SynCheckbox:"medium",SynCombobox:"medium",SynDetails:"medium",SynFile:"medium",SynIconButton:"inherit",SynInput:"medium",SynRadio:"medium",SynRadioButton:"medium",SynRadioGroup:"medium",SynRange:"medium",SynSelect:"medium",SynSwitch:"medium",SynTag:"medium",SynTextarea:"medium"},variant:{SynAlert:"primary",SynBadge:"primary",SynButton:"outline",SynValidate:"native"}},Zt=new Map,Xt=new Set,No=e=>{Xt.has(e)&&Xt.delete(e)},Yt=(e,t="default")=>{const i=t==="default"?Fo:Vo;if(t==="default"){const r=Zt.get(e);if(typeof r<"u")return r}const a=Object.entries(i).reduce((r,[n,l])=>{const p=l[e];return p&&(r[n]=p),r},{});return t==="default"&&Zt.set(e,a),a};function ee(e){return t=>{var i,a,r,n,l;return l=class extends t{constructor(...p){super(...p),ue(this,i,!1),ue(this,a,new Map),ue(this,r,[]),ue(this,n),this._isInitialized=!1,this._isInitialized=!0,oe(this,n,Yt(e,"initial"))}get __originalDecoratedClassName(){return e}overrideGlobalSettings(p){p.forEach(c=>{f(this,a).has(c.attribute)&&(this[c.attribute]=c.newValue)})}disconnectedCallback(){super.disconnectedCallback(),No(this)}requestUpdate(p,c,h){var k;super.requestUpdate(p,c,h),!(!this._isInitialized||f(this,i)||!p||!(p in f(this,n))||(k=f(this,r))!=null&&k.includes(p))&&f(this,r).push(p)}willUpdate(p){if(super.willUpdate(p),f(this,i))return;oe(this,i,!0);const c=Yt(e);Object.entries(c).forEach(([h,k])=>{const V=this[h],he=f(this,n)[h];V===he&&!f(this,r).includes(h)&&(f(this,a).set(h,V),this[h]=k)}),f(this,a).size>0}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,l}}var j=class extends b{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Te`a`:Te`button`;return se`
      <${t}
        part="base"
        class=${v({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large"})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:"button")}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e&&this.target?"noreferrer noopener":void 0)}
        role=${y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${y(this.name)}
          library=${y(this.library)}
          src=${y(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${t}>
    `}};j.styles=[z,Co,ko];j.dependencies={"syn-icon":R};o([m(".icon-button")],j.prototype,"button",2);o([_()],j.prototype,"hasFocus",2);o([s()],j.prototype,"name",2);o([s()],j.prototype,"library",2);o([s()],j.prototype,"src",2);o([s()],j.prototype,"href",2);o([s()],j.prototype,"target",2);o([s()],j.prototype,"download",2);o([s()],j.prototype,"label",2);o([s({reflect:!0})],j.prototype,"size",2);o([s({reflect:!0})],j.prototype,"color",2);o([s({type:Boolean,reflect:!0})],j.prototype,"disabled",2);j=o([ee("SynIconButton")],j);var vi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Choose file",fileButtonTextMultiple:"Choose files",folderButtonText:"Choose folder",fileDragDrop:"Drop or choose file",folderDragDrop:"Drop or choose folder",menu:"Menu",notification:"Notification",numFilesSelected:(e,t)=>e===0?`No ${t?"folder":"files"} chosen`:`${e} files`,openMenu:"Open menu",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Side navigation",success:"Success",warning:"Warning"};gi(vi);var Bo=vi,B=class extends Zi{};gi(Bo);var qo=(e,t)=>{let i=0;return function(...a){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...a)},t)}},Qt=(e,t,i)=>{const a=e[t];e[t]=function(...r){a.call(this,...r),i.call(this,a,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,i=new WeakMap,a=n=>{for(const l of n.changedTouches)t.add(l.identifier)},r=n=>{for(const l of n.changedTouches)t.delete(l.identifier)};document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Qt(EventTarget.prototype,"addEventListener",function(n,l){if(l!=="scrollend")return;const p=qo(()=>{t.size?p():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",p,{passive:!0}),i.set(this,p)}),Qt(EventTarget.prototype,"removeEventListener",function(n,l){if(l!=="scrollend")return;const p=i.get(this);p&&n.call(this,"scroll",p,{passive:!0})})}})();var Y=class extends b{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new B(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const i=t.filter(({target:a})=>{if(a===this)return!0;if(a.closest("syn-tab-group")!==this)return!1;const r=a.tagName.toLowerCase();return r==="syn-tab"||r==="syn-tab-panel"});if(i.length!==0){if(i.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(a=>a.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(a=>a.attributeName==="active")){const r=i.filter(n=>n.attributeName==="active"&&n.target.tagName.toLowerCase()==="syn-tab").map(n=>n.target).find(n=>n.active);r&&this.setActiveTab(r)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((i,a)=>{var r;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),a.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="syn-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("syn-tab");i?.closest("syn-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("syn-tab");if(i?.closest("syn-tab-group")===this&&(["Enter"," "].includes(e.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const r=this.tabs.find(p=>p.matches(":focus")),n=this.localize.dir()==="rtl";let l=null;if(r?.tagName.toLowerCase()==="syn-tab"){if(e.key==="Home")l=this.focusableTabs[0];else if(e.key==="End")l=this.focusableTabs[this.focusableTabs.length-1];else if(["top"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const p=this.tabs.findIndex(c=>c===r);l=this.findNextFocusableTab(p,"backward")}else if(["top"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const p=this.tabs.findIndex(c=>c===r);l=this.findNextFocusableTab(p,"forward")}if(!l)return;l.tabIndex=0,l.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(l,{scrollBehavior:"smooth"}):this.tabs.forEach(p=>{p.tabIndex=p===l?0:-1}),["top"].includes(this.placement)&&gt(l,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=ge({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>{var r;return a.active=a.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top"].includes(this.placement)&&gt(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.emit("syn-tab-hide",{detail:{name:i.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,i=e.clientHeight,a=this.localize.dir()==="rtl",r=this.getAllTabs(),l=r.slice(0,r.indexOf(e)).reduce((p,c)=>({left:p.left+c.clientWidth,top:p.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${t}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${a?"-":""}1 * (${l.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${i}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${l.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let i=null;const a=t==="forward"?1:-1;let r=e+a;for(;e<this.tabs.length;){if(i=this.tabs[r]||null,i===null){t==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=a}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(i=>i.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}preventFocus(e){e.preventDefault()}render(){return u`
      <div
        part="base"
        class=${v({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?u`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${v({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?u`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${v({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Y.styles=[z,uo,co];Y.dependencies={"syn-icon-button":j,"syn-resize-observer":ft};o([m(".tab-group")],Y.prototype,"tabGroup",2);o([m(".tab-group__body")],Y.prototype,"body",2);o([m(".tab-group__nav")],Y.prototype,"nav",2);o([m(".tab-group__indicator")],Y.prototype,"indicator",2);o([_()],Y.prototype,"hasScrollControls",2);o([_()],Y.prototype,"shouldHideScrollStartButton",2);o([_()],Y.prototype,"shouldHideScrollEndButton",2);o([s()],Y.prototype,"placement",2);o([s()],Y.prototype,"activation",2);o([s({attribute:"no-scroll-controls",type:Boolean})],Y.prototype,"noScrollControls",2);o([s({type:Boolean})],Y.prototype,"contained",2);o([s({type:Boolean})],Y.prototype,"sharp",2);o([s({attribute:"fixed-scroll-controls",type:Boolean})],Y.prototype,"fixedScrollControls",2);o([Xi({passive:!0})],Y.prototype,"updateScrollButtons",1);o([g("noScrollControls",{waitUntilFirstUpdate:!0})],Y.prototype,"updateScrollControls",1);o([g("placement",{waitUntilFirstUpdate:!0})],Y.prototype,"syncIndicator",1);var Po="syn-tab-group";Y.define("syn-tab-group");w({displayName:"SynTabGroup",elementClass:Y,events:{onSynTabShow:"syn-tab-show",onSynTabHide:"syn-tab-hide"},react:x,tagName:Po});var Ro=d`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`,jo=d`
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
`,Ho=0,Re=class extends b{constructor(){super(...arguments),this.attrId=++Ho,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return u`
      <slot
        part="base"
        class=${v({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Re.styles=[z,jo,Ro];o([s({reflect:!0})],Re.prototype,"name",2);o([s({type:Boolean,reflect:!0})],Re.prototype,"active",2);o([g("active")],Re.prototype,"handleActiveChange",1);var Uo="syn-tab-panel";Re.define("syn-tab-panel");w({displayName:"SynTabPanel",elementClass:Re,events:{},react:x,tagName:Uo});var Wo=d`
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
`,Ko=d`
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
`,Go=0,fe=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.attrId=++Go,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,u`
      <div
        part="base"
        class=${v({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?u`
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
    `}};fe.styles=[z,Ko,Wo];fe.dependencies={"syn-icon-button":j};o([m(".tab")],fe.prototype,"tab",2);o([s({reflect:!0})],fe.prototype,"panel",2);o([s({type:Boolean,reflect:!0})],fe.prototype,"active",2);o([s({type:Boolean,reflect:!0})],fe.prototype,"closable",2);o([s({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);o([s({type:Number,reflect:!0})],fe.prototype,"tabIndex",2);o([g("active")],fe.prototype,"handleActiveChange",1);o([g("disabled")],fe.prototype,"handleDisabledChange",1);var Zo="syn-tab";fe.define("syn-tab");w({displayName:"SynTab",elementClass:fe,events:{onSynClose:"syn-close"},react:x,tagName:Zo});var Xo=d`
  .tag {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-neutral-400);
    border-radius: var(--syn-border-radius-small);
    color: var(--syn-input-color);
  }

  .tag .tag__remove {
    color: var(--syn-color-neutral-500);
  }


  /* Size small */
  .tag--small {
    font-size: var(--syn-font-size-x-small);
    height: var(--syn-font-size-x-large);
  }

  .tag--small.tag--removable {
    padding-inline-end: var(--syn-spacing-2x-small);
  }


  /* Size medium */
  .tag--medium {
    font-size: var(--syn-font-size-small);
    height: var(--syn-font-size-2x-large);
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
  }

  .tag--large .tag__remove {
    margin-inline-start: var(--syn-spacing-medium);
  }

  .tag--large.tag--removable {
    padding-inline-end: var(--syn-spacing-small);
  }


  /* Hover */
  .tag.tag--removable:hover {
    background-color: var(--syn-color-neutral-100);
  }
  
  .tag .tag__remove:hover {
    color: var(--syn-color-neutral-950);
  }


  /* Focus 
     ! Focus styling is currently not working because shoelace does not support to focus icon-button 
  */
  .tag.tag--removable:focus ~ .tag__remove {
    border: solid 1px var(--syn-color-primary-500);
  }


  /* Slotted icon style */
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
`,Yo=d`
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

  
`,Ce=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.size="medium",this.removable=!1}handleRemoveClick(){this.emit("syn-remove")}render(){return u`
      <span
        part="base"
        class=${v({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?u`
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
    `}};Ce.styles=[z,Yo,Xo];Ce.dependencies={"syn-icon-button":j};o([s({reflect:!0})],Ce.prototype,"size",2);o([s({type:Boolean})],Ce.prototype,"removable",2);Ce=o([ee("SynTag")],Ce);var Qo="syn-tag";Ce.define("syn-tag");w({displayName:"SynTag",elementClass:Ce,events:{onSynRemove:"syn-remove"},react:x,tagName:Qo});var Jo=d`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`,ea=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    cursor: text;
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
    color: var(--syn-input-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--syn-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly textareas */
  .textarea--readonly {
    border: none;
    background-color: var(--syn-input-readonly-background-color);
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
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--syn-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
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
    padding: 0.5em var(--syn-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--syn-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--syn-input-spacing-large);
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
    resize: none;
    overflow-y: hidden;
  }
`,De=(e="value")=>(t,i)=>{const a=t.constructor,r=a.prototype.attributeChangedCallback;a.prototype.attributeChangedCallback=function(n,l,p){var c;const h=a.getPropertyOptions(e),k=typeof h.attribute=="string"?h.attribute:e;if(n===k){const V=h.converter||qt,N=(typeof V=="function"?V:(c=V?.fromAttribute)!=null?c:qt.fromAttribute)(p,h.type);this[e]!==N&&(this[i]=N)}r.call(this,n,l,p)}},Se=d`
	/* stylelint-disable */
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    margin-bottom: var(--syn-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--syn-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--syn-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--syn-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
    color: var(--syn-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--syn-input-help-text-color);
    margin-top: var(--syn-spacing-3x-small);
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
`,$e=d` 

   /* Label */
  .form-control--has-label .form-control__label {
   font-weight: var(--syn-font-weight-semibold);
  }

  .form-control--has-label.form-control--small .form-control__label {
    margin-bottom: var(--syn-spacing-x-small);
  }
  
  .form-control--has-label.form-control--medium .form-control__label {
    margin-bottom: var(--syn-input-spacing-small);
  }

  .form-control--has-label.form-control--large .form-control__label {
    margin-bottom: var(--syn-input-spacing-medium);
  }

    /* Help text */
  .form-control--has-help-text .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  .form-control--small.form-control--has-prefix .input__control  {
    padding: var(--syn-spacing-3x-small) 0;
  }

  .form-control--has-prefix.form-control--medium .input__control {
    padding: var(--syn-spacing-x-small) 0;
  }

  .form-control--large.form-control--has-prefix .input__control {
   padding: var(--syn-input-spacing-small) 0;
  }

    /* ERROR */
  :host([data-user-invalid]:not([disabled])) .form-control__help-text {
    color: var(--syn-input-help-text-color-error);
   }

  /* DISABLED */
  :host([disabled]) .form-control--has-label .form-control__label,
  :host([disabled]) .form-control--has-help-text .form-control__help-text {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Ke=new WeakMap,Ge=new WeakMap,Ze=new WeakMap,Ct=new WeakSet,ct=new WeakMap,ze=class{constructor(e,t){this.handleFormData=i=>{const a=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";if(this.host.isConnected&&!a&&!l&&typeof r=="string"&&r.length>0&&typeof n<"u"){if(n instanceof FileList){const p=n;for(const c of p)i.formData.append(r,c,c.name);return}Array.isArray(n)?n.forEach(p=>{i.formData.append(r,p.toString())}):i.formData.append(r,n.toString())}},this.handleFormSubmit=i=>{var a;const r=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((a=Ke.get(this.form))==null||a.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!r&&!n(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ct.set(this.host,[])},this.handleInteraction=i=>{const a=ct.get(this.host);a.includes(i.type)||a.push(i.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ge({form:i=>{const a=i.form;if(a){const n=i.getRootNode().querySelector(`#${a}`);if(n)return n}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var a;return(a=i.disabled)!=null?a:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,a)=>i.value=a,assumeInteractionOn:["syn-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ct.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ct.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ke.has(this.form)?Ke.get(this.form).add(this.host):Ke.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ge.has(this.form)||(Ge.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ze.has(this.form)||(Ze.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ke.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ge.has(this.form)&&(this.form.reportValidity=Ge.get(this.form),Ge.delete(this.form)),Ze.has(this.form)&&(this.form.checkValidity=Ze.get(this.form),Ze.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ct.add(e):Ct.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{t.hasAttribute(a)&&i.setAttribute(a,t.getAttribute(a))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!Ct.has(t),a=!!t.required;t.toggleAttribute("data-required",a),t.toggleAttribute("data-optional",!a),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e);const r=t.parentElement;if(r&&r.tagName.toLocaleUpperCase()==="SYN-VALIDATE"){const n=r.getValidity();t.toggleAttribute("data-user-invalid",!e&&!n)}else t.toggleAttribute("data-user-invalid",!e&&i);t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},ot=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ta=Object.freeze(Pe(ge({},ot),{valid:!1,valueMissing:!0})),_i=Object.freeze(Pe(ge({},ot),{valid:!1,customError:!0})),K=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const a=i.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function xi(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(a=>{a.nodeType===Node.TEXT_NODE&&(i+=a.textContent)}),i}var I=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,a="preserve"){const r=t??this.input.selectionStart,n=i??this.input.selectionEnd;this.input.setRangeText(e,r,n,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,a=this.helpText?!0:!!t;return u`
      <div
        part="form-control"
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
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
            class=${v({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${y(this.name)}
              .value=${Je(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              rows=${y(this.rows)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              autocapitalize=${y(this.autocapitalize)}
              autocorrect=${y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${y(this.spellcheck)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/synergy-design-system/synergy/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
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
    `}};I.styles=[z,Se,ea,$e,Jo];o([m(".textarea__control")],I.prototype,"input",2);o([m(".textarea__size-adjuster")],I.prototype,"sizeAdjuster",2);o([_()],I.prototype,"hasFocus",2);o([s()],I.prototype,"title",2);o([s()],I.prototype,"name",2);o([s()],I.prototype,"value",2);o([s({reflect:!0})],I.prototype,"size",2);o([s()],I.prototype,"label",2);o([s({attribute:"help-text"})],I.prototype,"helpText",2);o([s()],I.prototype,"placeholder",2);o([s({type:Number})],I.prototype,"rows",2);o([s()],I.prototype,"resize",2);o([s({type:Boolean,reflect:!0})],I.prototype,"disabled",2);o([s({type:Boolean,reflect:!0})],I.prototype,"readonly",2);o([s({reflect:!0})],I.prototype,"form",2);o([s({type:Boolean,reflect:!0})],I.prototype,"required",2);o([s({type:Number})],I.prototype,"minlength",2);o([s({type:Number})],I.prototype,"maxlength",2);o([s()],I.prototype,"autocapitalize",2);o([s()],I.prototype,"autocorrect",2);o([s()],I.prototype,"autocomplete",2);o([s({type:Boolean})],I.prototype,"autofocus",2);o([s()],I.prototype,"enterkeyhint",2);o([s({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],I.prototype,"spellcheck",2);o([s()],I.prototype,"inputmode",2);o([De()],I.prototype,"defaultValue",2);o([g("disabled",{waitUntilFirstUpdate:!0})],I.prototype,"handleDisabledChange",1);o([g("rows",{waitUntilFirstUpdate:!0})],I.prototype,"handleRowsChange",1);o([g("value",{waitUntilFirstUpdate:!0})],I.prototype,"handleValueChange",1);I=o([ee("SynTextarea")],I);var ia="syn-textarea";I.define("syn-textarea");w({displayName:"SynTextarea",elementClass:I,events:{onSynBlur:"syn-blur",onSynChange:"syn-change",onSynFocus:"syn-focus",onSynInput:"syn-input",onSynInvalid:"syn-invalid"},react:x,tagName:ia});var oa=d`
  /* Write custom CSS here */
  .tooltip__body {
    box-shadow: var(--syn-shadow-large);
  }
`,aa=d`
	/* stylelint-disable */
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
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
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--syn-tooltip-border-radius);
    background-color: var(--syn-tooltip-background-color);
    font-family: var(--syn-tooltip-font-family);
    font-size: var(--syn-tooltip-font-size);
    font-weight: var(--syn-tooltip-font-weight);
    line-height: var(--syn-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--syn-tooltip-color);
    padding: var(--syn-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,sa=d`
	/* stylelint-disable */
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
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;function ra(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var T=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let a=0,r=0,n=0,l=0,p=0,c=0,h=0,k=0;i?e.top<t.top?(a=e.left,r=e.bottom,n=e.right,l=e.bottom,p=t.left,c=t.top,h=t.right,k=t.top):(a=t.left,r=t.bottom,n=t.right,l=t.bottom,p=e.left,c=e.top,h=e.right,k=e.top):e.left<t.left?(a=e.right,r=e.top,n=t.left,l=t.top,p=e.right,c=e.bottom,h=t.left,k=t.bottom):(a=t.right,r=t.top,n=e.left,l=e.top,p=t.right,c=t.bottom,h=e.left,k=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${k}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||ra(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Yi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Qi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Pt({apply:({rects:i})=>{const a=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ji({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(eo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Pt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(to({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?i=>xt.getOffsetParent(i,io):xt.getOffsetParent;oo(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Pe(ge({},xt),{getOffsetParent:t})}).then(({x:i,y:a,middlewareData:r,placement:n})=>{const l=this.localize.dir()==="rtl",p={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){const c=r.arrow.x,h=r.arrow.y;let k="",V="",he="",N="";if(this.arrowPlacement==="start"){const G=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",V=l?G:"",N=l?"":G}else if(this.arrowPlacement==="end"){const G=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";V=l?"":G,N=l?G:"",he=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(N=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",k=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(N=typeof c=="number"?`${c}px`:"",k=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:k,right:V,bottom:he,left:N,[p]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return u`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${v({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${v({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?u`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};T.styles=[z,sa];o([m(".popup")],T.prototype,"popup",2);o([m(".popup__arrow")],T.prototype,"arrowEl",2);o([s()],T.prototype,"anchor",2);o([s({type:Boolean,reflect:!0})],T.prototype,"active",2);o([s({reflect:!0})],T.prototype,"placement",2);o([s({reflect:!0})],T.prototype,"strategy",2);o([s({type:Number})],T.prototype,"distance",2);o([s({type:Number})],T.prototype,"skidding",2);o([s({type:Boolean})],T.prototype,"arrow",2);o([s({attribute:"arrow-placement"})],T.prototype,"arrowPlacement",2);o([s({attribute:"arrow-padding",type:Number})],T.prototype,"arrowPadding",2);o([s({type:Boolean})],T.prototype,"flip",2);o([s({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],T.prototype,"flipFallbackPlacements",2);o([s({attribute:"flip-fallback-strategy"})],T.prototype,"flipFallbackStrategy",2);o([s({type:Object})],T.prototype,"flipBoundary",2);o([s({attribute:"flip-padding",type:Number})],T.prototype,"flipPadding",2);o([s({type:Boolean})],T.prototype,"shift",2);o([s({type:Object})],T.prototype,"shiftBoundary",2);o([s({attribute:"shift-padding",type:Number})],T.prototype,"shiftPadding",2);o([s({attribute:"auto-size"})],T.prototype,"autoSize",2);o([s()],T.prototype,"sync",2);o([s({type:Object})],T.prototype,"autoSizeBoundary",2);o([s({attribute:"auto-size-padding",type:Number})],T.prototype,"autoSizePadding",2);o([s({attribute:"hover-bridge",type:Boolean})],T.prototype,"hoverBridge",2);function U(e,t){return new Promise(i=>{function a(r){r.target===e&&(e.removeEventListener(t,a),i())}e.addEventListener(t,a)})}function q(e,t,i){return new Promise(a=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Pe(ge({},i),{duration:na()?0:i.duration}));r.addEventListener("cancel",a,{once:!0}),r.addEventListener("finish",a,{once:!0})})}function Jt(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function na(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Z(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}function ei(e,t){return e.map(i=>Pe(ge({},i),{height:i.height==="auto"?`${t}px`:i.height}))}var wi=new Map,Tt=new WeakMap;function zi(e){return e??{keyframes:[],options:{duration:0}}}function ti(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function $(e,t){wi.set(e,zi(t))}function dt(e,t,i){Tt.set(e,Pe(ge({},Tt.get(e)),{[t]:zi(i)}))}function M(e,t,i){const a=Tt.get(e);if(a?.[t])return ti(a[t],i.dir);const r=wi.get(t);return r?ti(r,i.dir):{keyframes:[],options:{duration:0}}}var te=class extends b{constructor(){super(),this.localize=new B(this),this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Jt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Jt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Z(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:a}=M(this,"tooltip.show",{dir:this.localize.dir()});await q(this.popup.popup,i,a),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Z(this.body);const{keyframes:i,options:a}=M(this,"tooltip.hide",{dir:this.localize.dir()});await q(this.popup.popup,i,a),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,U(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,U(this,"syn-after-hide")}render(){return u`
      <syn-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${v({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
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
    `}};te.styles=[z,aa,oa];te.dependencies={"syn-popup":T};o([m("slot:not([name])")],te.prototype,"defaultSlot",2);o([m(".tooltip__body")],te.prototype,"body",2);o([m("syn-popup")],te.prototype,"popup",2);o([s()],te.prototype,"content",2);o([s()],te.prototype,"placement",2);o([s({type:Boolean,reflect:!0})],te.prototype,"disabled",2);o([s({type:Number})],te.prototype,"distance",2);o([s({type:Boolean,reflect:!0})],te.prototype,"open",2);o([s({type:Number})],te.prototype,"skidding",2);o([s()],te.prototype,"trigger",2);o([s({type:Boolean})],te.prototype,"hoist",2);o([g("open",{waitUntilFirstUpdate:!0})],te.prototype,"handleOpenChange",1);o([g(["content","distance","hoist","placement","skidding"])],te.prototype,"handleOptionsChange",1);o([g("disabled")],te.prototype,"handleDisabledChange",1);$("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});$("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var la="syn-tooltip";te.define("syn-tooltip");w({displayName:"SynTooltip",elementClass:te,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide"},react:x,tagName:la});var pa=["blur","change","clear","focus","invalid","input","move"],ki=(e,t)=>e.includes(t),ii=e=>ki(e,"blur"),St=e=>ki(e,"invalid"),ca=(e="")=>e.split(" ").map(t=>t.trim()).filter(Boolean),oi=(e,t)=>{const i=t.trim();return e instanceof b&&pa.includes(i)?`syn-${i}`:i},da=d`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`,yt=e=>{var t;const{activeElement:i}=document;i&&e.contains(i)&&((t=document.activeElement)==null||t.blur())},ua=d`
  .alert {
    /* Defines the used border and icon color for variants */
    --variant-accent-color: var(--syn-panel-border-color);

    border: var(--syn-panel-border-width) solid var(--syn-panel-border-color);
    border-left: 0;
    border-radius: var(--syn-border-radius-none);
    color: var(--syn-typography-color-text);
    font-size: var(--syn-font-size-medium);
    line-height: var(--syn-line-height-normal);
    min-height: 56px;
  }

  /**
   * Add back the items left borders
   * This is done to prevent border clipping with the large border-left needed on .alert
   * Note we also need to adjust our paddings to add the border width here
   */
  .alert::before {
    background: var(--variant-accent-color);
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

  /**
   * Make sure everything is aligned to top
   */
  .alert__icon,
  .alert__close-button {
    align-items: flex-start;
    font-size: var(--syn-font-size-x-large);
  }

  .alert__message {
    padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-medium) var(--syn-spacing-medium);
  }

  /**
   * Alert Icon
   */
  .alert__icon {
    color: var(--variant-accent-color);
    padding-block: var(--syn-spacing-medium);
    padding-inline-start: var(--syn-spacing-medium);
  }

  /**
   * Close Icon
   */
  .alert__close-button {
    align-self: start;
    color: var(--syn-typography-color-text);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
    padding-inline-end: 0;
  }

  /**
   * Variants should highlight the left border instead of top
   */
  .alert--primary {
    --variant-accent-color: var(--syn-color-primary-600);
  }

  .alert--success {
    --variant-accent-color: var(--syn-color-success-500);
  }

  .alert--neutral {
    --variant-accent-color: var(--syn-color-neutral-800);
  }

  .alert--warning {
    --variant-accent-color: var(--syn-color-warning-400);
  }

  .alert--danger {
    --variant-accent-color: var(--syn-color-error-600);
  }
`,ma=d`
	/* stylelint-disable */
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-top-width: calc(var(--syn-panel-border-width) * 3);
    border-radius: var(--syn-border-radius-medium);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-normal);
    line-height: 1.6;
    color: var(--syn-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-large);
    padding-inline-start: var(--syn-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--syn-spacing-large);
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
    padding-inline-end: var(--syn-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--syn-panel-border-width) * 3);
    background-color: var(--syn-panel-border-color);
    display: flex;
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

  .alert__timer {
    display: none;
  }
`,H=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"icon","suffix"),this.localize=new B(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"syn-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,t="100%",i="0";this.countdownAnimation=e.animate([{width:t},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await Z(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=M(this,"alert.show",{dir:this.localize.dir()});await q(this.base,e,t),this.emit("syn-after-show")}else{yt(this),this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Z(this.base);const{keyframes:e,options:t}=M(this,"alert.hide",{dir:this.localize.dir()});await q(this.base,e,t),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,U(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,U(this,"syn-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),H.toastStack.parentElement===null&&document.body.append(H.toastStack),H.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{H.toastStack.removeChild(this),e(),H.toastStack.querySelector("syn-alert")===null&&H.toastStack.remove()},{once:!0})})}render(){return u`
      <div
        part="base"
        class=${v({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?u`
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

        ${this.countdown?u`
              <div
                class=${v({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};H.styles=[z,ma,ua];H.dependencies={"syn-icon-button":j};o([m('[part~="base"]')],H.prototype,"base",2);o([m(".alert__countdown-elapsed")],H.prototype,"countdownElement",2);o([s({type:Boolean,reflect:!0})],H.prototype,"open",2);o([s({type:Boolean,reflect:!0})],H.prototype,"closable",2);o([s({reflect:!0})],H.prototype,"variant",2);o([s({type:Number})],H.prototype,"duration",2);o([_()],H.prototype,"remainingTime",2);o([g("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);o([g("duration")],H.prototype,"handleDurationChange",1);H=o([ee("SynAlert")],H);$("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Q=class extends b{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=e=>{var t;(t=e.currentTarget.validity)!=null&&t.valid&&(this.validationMessage="")},this.validate=e=>{var t;if(St(e.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}St(e.type)&&this.variant!=="native"&&(e.preventDefault(),e.stopPropagation());const i=e.currentTarget;if(this.isValid=(t=i.validity)==null?void 0:t.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(i);return}!this.isValid&&!ii(e.type)&&this.handleFocus(i),this.setValidationMessage(i),!ii(e.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,i.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){const e=this.slottedChildren[0];return e||void 0}getUsedEventNames(){const e=this.getInput();if(!e)return[];const t=ca(this.on),[...i]=t.filter(Boolean);return i.includes("invalid")||i.push("invalid"),i.includes("live")&&(i.push("input"),i.push("blur")),Array.from(new Set(i.filter(a=>a!=="live").map(a=>oi(e,a))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const e=this.getInput();if(!e)return;const t=this.getUsedEventNames();t.forEach(a=>{e.addEventListener(a,this.validate,{capture:St(a),signal:this.controller.signal})});const i=oi(e,"change");t.includes(i)||e.addEventListener(i,this.internalRevalidate,{signal:this.controller.signal})}setValidationMessage(e){const{customValidationMessage:t}=this,i=t||e.validationMessage;this.validationMessage=i}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){var t;const i=document.activeElement,a=i.closest("syn-validate");!((t=i.validity)!=null&&t.valid)&&a||(e.scrollIntoView({block:"nearest"}),e.focus())}async firstUpdated(e){var t,i;super.firstUpdated(e),this.updateEvents();const a=this.getInput();this.customValidationMessage&&(a instanceof b&&await a.updateComplete,a?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=(i=(t=a?.validity)==null?void 0:t.valid)!=null?i:!1,a?.reportValidity())}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:a})=>a===t).every(a=>{const r=a.target;return r.hasAttribute("disabled")||r.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(t instanceof b?t.updateComplete:Promise.resolve()).then(()=>{var r,n,l;this.isValid=(n=(r=t?.validity)==null?void 0:r.valid)!=null?n:!1,this.validationMessage=(l=t?.validationMessage)!=null?l:""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),this.controller.abort(),(e=this==null?void 0:this.observer)==null||e.disconnect()}renderInlineValidation(){return this.variant!=="inline"||!this.validationMessage?"":u`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        variant="danger"
      >
        ${this.hideIcon?"":u`<syn-icon slot="icon" name="error" library="system"></syn-icon>`}
        ${this.validationMessage}
      </syn-alert>
    `}render(){return u`
      <div
        class="validate"
        part="base"
      >
        <slot
          class="validate__input-wrapper"
          part="input-wrapper"
        ></slot>
        
        ${this.renderInlineValidation()}
      </div>
    `}};Q.styles=[z,da];Q.dependencies={"syn-alert":H};o([fi()],Q.prototype,"slottedChildren",2);o([_()],Q.prototype,"validationMessage",2);o([_()],Q.prototype,"eagerFirstMount",2);o([_()],Q.prototype,"isInternalTriggeredInvalid",2);o([_()],Q.prototype,"isValid",2);o([s({reflect:!0})],Q.prototype,"variant",2);o([s({attribute:"hide-icon",reflect:!0,type:Boolean})],Q.prototype,"hideIcon",2);o([s({reflect:!0})],Q.prototype,"on",2);o([s({attribute:"custom-validation-message",type:String})],Q.prototype,"customValidationMessage",2);o([s({type:Boolean})],Q.prototype,"eager",2);o([g("on",{waitUntilFirstUpdate:!0})],Q.prototype,"handleListenerChange",1);o([g("eager",{waitUntilFirstUpdate:!1})],Q.prototype,"handleEagerChange",1);o([g("customValidationMessage",{waitUntilFirstUpdate:!0})],Q.prototype,"handleCustomValidationMessageChange",1);Q=o([ee("SynValidate")],Q);var ha="syn-validate";Q.define("syn-validate");w({displayName:"SynValidate",elementClass:Q,events:{},react:x,tagName:ha});var ga=d`
  :host([data-user-invalid]) {
    --syn-input-border-color: var(--syn-input-border-color-focus-error);
    --syn-input-border-color-hover: var(--syn-input-border-color-focus-error);
    --syn-color-primary-600: var(--syn-color-error-700);
    --syn-color-primary-900: var(--syn-color-error-900);
    --syn-color-primary-950: var(--syn-color-error-950);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-x-small);
  }

`,fa=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,ya=d`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Me=class extends b{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Xe(e.target);t?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(e){const t=Xe(e.target);t?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(e){const t=Xe(e.target);t?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(e){const t=Xe(e.target);t?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const i=e.indexOf(t),a=Xe(t);a&&(a.toggleAttribute("data-syn-button-group__button",!0),a.toggleAttribute("data-syn-button-group__button--first",i===0),a.toggleAttribute("data-syn-button-group__button--inner",i>0&&i<e.length-1),a.toggleAttribute("data-syn-button-group__button--last",i===e.length-1),a.toggleAttribute("data-syn-button-group__button--radio",a.tagName.toLowerCase()==="syn-radio-button"))})}render(){return u`
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
    `}};Me.styles=[z,ya];o([m("slot")],Me.prototype,"defaultSlot",2);o([_()],Me.prototype,"disableRole",2);o([s()],Me.prototype,"label",2);function Xe(e){var t;const i="syn-button, syn-radio-button";return(t=e.closest(i))!=null?t:e.querySelector(i)}var X=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this),this.hasSlotController=new K(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?_i:e?ta:ot}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(e){const t=e.target.closest("syn-radio, syn-radio-button"),i=this.getAllRadios(),a=this.value;!t||t.disabled||(this.value=t.value,i.forEach(r=>r.checked=r===t),this.value!==a&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter(p=>!p.disabled),a=(t=i.find(p=>p.checked))!=null?t:i[0],r=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let l=i.indexOf(a)+r;l<0&&(l=i.length-1),l>i.length-1&&(l=0),this.getAllRadios().forEach(p=>{p.checked=!1,this.hasButtonGroup||p.setAttribute("tabindex","-1")}),this.value=i[l].value,i[l].checked=!0,this.hasButtonGroup?i[l].shadowRoot.querySelector("button").focus():(i[l].setAttribute("tabindex","0"),i[l].focus()),this.value!==n&&(this.emit("syn-change"),this.emit("syn-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const i=this.getAllRadios();if(await Promise.all(i.map(async a=>{await a.updateComplete,a.checked=a.value===this.value,a.size=this.size})),this.hasButtonGroup=i.some(a=>a.tagName.toLowerCase()==="syn-radio-button"),i.length>0&&!i.some(a=>a.checked))if(this.hasButtonGroup){const a=(e=i[0].shadowRoot)==null?void 0:e.querySelector("button");a&&a.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const a=(t=this.shadowRoot)==null?void 0:t.querySelector("syn-button-group");a&&(a.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),i=t.find(n=>n.checked),a=t.find(n=>!n.disabled),r=i||a;r&&r.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,a=this.helpText?!0:!!t,r=u`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return u`
      <fieldset
        part="form-control"
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":a})}
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

          ${this.hasButtonGroup?u`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </syn-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};X.styles=[z,Se,fa,$e,ga];X.dependencies={"syn-button-group":Me};o([m("slot:not([name])")],X.prototype,"defaultSlot",2);o([m(".radio-group__validation-input")],X.prototype,"validationInput",2);o([_()],X.prototype,"hasButtonGroup",2);o([_()],X.prototype,"errorMessage",2);o([_()],X.prototype,"defaultValue",2);o([s()],X.prototype,"label",2);o([s({attribute:"help-text"})],X.prototype,"helpText",2);o([s()],X.prototype,"name",2);o([s({reflect:!0})],X.prototype,"value",2);o([s({reflect:!0})],X.prototype,"size",2);o([s({reflect:!0})],X.prototype,"form",2);o([s({type:Boolean,reflect:!0})],X.prototype,"required",2);o([g("size",{waitUntilFirstUpdate:!0})],X.prototype,"handleSizeChange",1);o([g("value")],X.prototype,"handleValueChange",1);X=o([ee("SynRadioGroup")],X);var ba="syn-radio-group";X.define("syn-radio-group");w({displayName:"SynRadioGroup",elementClass:X,events:{onSynChange:"syn-change",onSynInput:"syn-input",onSynInvalid:"syn-invalid"},react:x,tagName:ba});var va=d`
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled):hover  .radio__control {
    background-color: var(--syn-color-primary-950);
    border-color: var(--syn-color-primary-950);
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled):hover .radio__control {
    border-color: var(--syn-color-primary-900);
  }

  /* Fix#456: Multi line radio fixes */
  .radio__label {
    margin-inline-start: var(--syn-spacing-x-small);
    position: relative;
  }

  .radio--small .radio__label {
    font: var(--syn-body-small-regular);
    top: -3px;
  }

  .radio--medium .radio__label {
    font: var(--syn-body-medium-regular);
    top: -3px;
  }

  .radio--large .radio__label {
    font: var(--syn-body-large-regular);
    top: -2px;
  }

  /* /Fix#456 */

  /* Size modifiers */
  .radio--small {
    --toggle-size: var(--syn-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--syn-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--syn-spacing-large);
  }

  .radio--small .radio__label, .radio--large .radio__label  {
    margin-inline-start: var(--syn-spacing-x-small);
  }
`,_a=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
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
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 50%;
    background-color: var(--syn-input-background-color);
    color: transparent;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-input-border-color-hover);
    background-color: var(--syn-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    background-color: var(--syn-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-color-primary-500);
    background-color: var(--syn-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,me=class extends b{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return u`
      <span
        part="base"
        class=${v({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?u` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};me.styles=[z,_a,va];me.dependencies={"syn-icon":R};o([_()],me.prototype,"checked",2);o([_()],me.prototype,"hasFocus",2);o([s()],me.prototype,"value",2);o([s({reflect:!0})],me.prototype,"size",2);o([s({type:Boolean,reflect:!0})],me.prototype,"disabled",2);o([g("checked")],me.prototype,"handleCheckedChange",1);o([g("disabled",{waitUntilFirstUpdate:!0})],me.prototype,"handleDisabledChange",1);me=o([ee("SynRadio")],me);var xa="syn-radio";me.define("syn-radio");w({displayName:"SynRadio",elementClass:me,events:{onSynBlur:"syn-blur",onSynFocus:"syn-focus"},react:x,tagName:xa});var wa=d`
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
    background: var(--syn-color-neutral-400);
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
`,bt=class extends b{constructor(){super(...arguments),this.subdivision=!1}render(){return u`
      <div
        class=${v({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}};bt.styles=[z,wa];o([s({reflect:!0,type:Boolean})],bt.prototype,"subdivision",2);var za="syn-range-tick";bt.define("syn-range-tick");w({displayName:"SynRangeTick",elementClass:bt,events:{},react:x,tagName:za});var Ee=(e,t)=>e-t,et=(e,t)=>{if(e.length!==t.length)return!0;const i=e.slice().sort(Ee),a=t.slice().sort(Ee);for(let r=0;r<i.length;r+=1)if(i[r]!==a[r])return!0;return!1},Ci=(e,t,i)=>{const a=e.getBoundingClientRect(),r=a.width;if(r<=0)return 0;let n=t;return n-=a.left,n<=0?i?1:0:n>=r?i?0:1:(n/=r,i?1-n:n)},ka=d`
  :host {
    /*
     * Values here apply for the default size of "medium"
     * For other sizes, see below
     */
    --thumb-size: var(--syn-spacing-medium);
    --thumb-hit-area-size: 1.4;
    --track-hit-area-size: var(--syn-spacing-medium);
    --track-active-offset: 0px;
    --track-color-active: var(--syn-color-primary-600);
    --track-color-inactive: var(--syn-color-neutral-200);
    --track-height: var(--syn-spacing-2x-small);

    /* This is needed to get the full with of the element, including the border */
    --full-thumb-size: calc(var(--thumb-size) + (var(--syn-focus-ring-width) * 2));
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
    touch-action: none; /* Prevent misbehaviour in mobile by disabling native touch */
    -webkit-touch-callout: none;
    transition: var(--syn-transition-fast) color, var(--syn-transition-fast) border, var(--syn-transition-fast) box-shadow, var(--syn-transition-fast) background-color;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    vertical-align: middle;
    width: 100%;
  }

  .input__wrapper {
    flex: 1 0 auto;
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
    inset: calc(var(--track-hit-area-size) * -1) calc(var(--full-thumb-size) / 2 * -1);
    position: absolute;
  }

  .track {
    background-color: var(--track-color-inactive);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    margin: calc((var(--full-thumb-size) - var(--track-height)) / 2) 0;
  }

  .active-track {
    background-color: var(--track-color-active);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .thumb {
    background-color: var(--syn-color-primary-600);
    border: var(--syn-focus-ring-width) solid var(--syn-color-neutral-0);
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
    cursor: grab;
  }

  .thumb.grabbed {
    background: var(--syn-color-primary-950);
    cursor: grabbing;
  }

  .thumb:focus-visible {
    outline: none;
  }

  .thumb:not(.grabbed):focus-visible {
    background: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: 0;
  }

  :host([disabled]) .track__wrapper,
  :host([disabled]) .thumb,
  :host([disabled]) .thumb.grabbed {
    cursor: not-allowed;
  }

  /*
   * Guard against mobile devices not removing the transform
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover
   */
  @media (any-hover: hover) {
    :host(:not([disabled])) .thumb:hover  {
      transform: scale(var(--thumb-hit-area-size));
    }

    :host(:not([disabled])) .thumb:not(.grabbed):hover  {
      background: var(--syn-color-primary-900);
    }
    
    :host(:not([disabled])) .thumb:hover::after  {
      /* Unset the area of the thumb click and drag area space, so it does not scale with the hover */
      inset: unset;
    }
  }

  /* Ticks */
  .ticks {
    cursor: pointer;
    margin: 1px 0;
    position: relative;
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
    --track-color-active: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .thumb {
    background-color: var(--syn-input-border-color-focus-error);
  }
`,L,ae,tt,Ne,mt,Le,A,it,Ft,Si,Vt,$i,Oi,ht,at,st,Ai,Ii,je,Ei,Ti,Li,P=class extends b{constructor(){super(),ue(this,A),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new K(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new ze(this,{assumeInteractionOn:["syn-change"]}),this.localize=new B(this),ue(this,L,[0]),ue(this,ae,new Map),ue(this,tt,!1),ue(this,Ne,""),ue(this,mt),ue(this,Le,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(e){oe(this,L,e?e.split(" ").map(t=>+t).sort(Ee):[])}get value(){return f(this,L).slice().sort(Ee).join(" ")}set valueAsArray(e){const t=f(this,L);oe(this,L,Array.isArray(e)?e.slice().sort(Ee):e||[]),et(t,f(this,L))&&this.requestUpdate("value",t.join(" "))}get valueAsArray(){return[...f(this,L)].sort(Ee)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this==null?void 0:this.visibilityObserver)==null||e.disconnect()}firstUpdated(){this.visibilityObserver=new IntersectionObserver(e=>{const t=e.at(0);t&&t.isIntersecting&&t.target.checkVisibility()&&F(this,A,Li).call(this,t.boundingClientRect.height)},{root:this.ticks.parentElement}),this.visibilityObserver.observe(this.ticks),this.formControlController.updateValidity(),oe(this,Le,Array.from(f(this,L))),this.thumbs.forEach(e=>{const t=e.parentElement;t.updateComplete.then(()=>{const i=t.shadowRoot.querySelector(".tooltip__body");i?.setAttribute("aria-hidden","true")})})}willUpdate(e){super.willUpdate(e),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const t=f(this,L).map(i=>{if(i<=this.min)return this.min;if(i>=this.max)return this.max;const a=this.min+this.step*Math.round((i-this.min)/this.step);return a>this.max?this.max:a});et(f(this,L),t)&&oe(this,L,t)}updated(e){super.updated(e);for(const t of this.thumbs){const i=+t.dataset.rangeId;f(this,ae).has(i)&&F(this,A,at).call(this,t,f(this,ae).get(i))}F(this,A,st).call(this)}focus(e){const t=this.thumbs.item(0);t?t.focus(e):super.focus(e)}checkValidity(){if(this.disabled)return!0;const e=!f(this,Ne);return e||this.formControlController.emitInvalidEvent(),e}reportValidity(){if(this.disabled)return!0;const e=this.validity.valid;return this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(f(this,mt)),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),oe(this,mt,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),e}setCustomValidity(e){oe(this,Ne,e),this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return f(this,Ne)?_i:ot}get validationMessage(){return f(this,Ne)}renderThumbs(e){const t=f(this,L).length>1;return f(this,ae).clear(),f(this,L).map((i,a)=>{const r=a+1;f(this,ae).set(r,i);const n=`thumb-${r}`;let l="",p="";return t?(p=e?`label aria-label-hidden ${n}`:`aria-label-hidden ${n}`,a===0?l=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(i)})`:a===f(this,L).length-1?l=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(i)})`:l=this.tooltipFormatter(i)):p=e?"label aria-label-hidden":"",u`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          hoist
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${y(this.disabled?"true":void 0)}
            aria-labelledby=${p}
            aria-label=${l}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${i}"
            aria-valuetext="${this.tooltipFormatter(i)}"
            class="thumb"
            data-range-id="${r}"
            id=${n}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${F(this,A,$i)}
            @pointermove=${F(this,A,Oi)}
            @pointerup=${F(this,A,ht)}
            @pointercancel=${F(this,A,ht)}
            @pointerleave=${F(this,A,ht)}
            @keydown=${F(this,A,Ai)}
            @focus=${F(this,A,Ei)}
          ></div>
        </syn-tooltip>
      `})}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return u`
      <div
        part="form-control"
        class=${v({"form-control":!0,"form-control--has-help-text":n,"form-control--has-label":r,"form-control--has-prefix":i,"form-control--has-suffix":a,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${F(this,A,Ii)}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${f(this,L).map(this.tooltipFormatter).join(" - ")})
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
              @invalid=${F(this,A,Ti)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${F(this,A,Ft)}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(r)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${F(this,A,Si)}
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
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};L=new WeakMap;ae=new WeakMap;tt=new WeakMap;Ne=new WeakMap;mt=new WeakMap;Le=new WeakMap;A=new WeakSet;it=function(){return this.localize.dir()==="rtl"};Ft=function(e,t=!0){if(this.disabled)return;const{clientX:i}=e,a=Array.from(this.thumbs),r=Ci(this.baseDiv,i,f(this,A,it)),n=this.step/(this.max-this.min),l=this.min+this.step*Math.round(r/n),p=a.reduce((V,he)=>{const N=f(this,ae).get(+he.dataset.rangeId),G=f(this,ae).get(+V.dataset.rangeId),nt=Math.abs(N-l),Bt=Math.abs(G-l);return nt===Bt?N<l?he:V:nt<Bt?he:V}),c=+p.dataset.rangeId;if(!c)return;f(this,ae).set(c,l),F(this,A,at).call(this,p,l);const h=f(this,L);oe(this,L,Array.from(f(this,ae).values())),F(this,A,st).call(this),et(h,f(this,L))&&(oe(this,Le,Array.from(f(this,L))),this.emit("syn-input"),this.emit("syn-change"));const k=new PointerEvent("pointerdown",e);t&&p.dispatchEvent(k)&&F(this,A,je).call(this,p)};Si=function(e){F(this,A,Ft).call(this,e,!1)};Vt=function(e,t){const i=this.valueAsArray,r=Array.from(this.thumbs).indexOf(e),n=i[r-1]||this.min,l=i[r+1]||this.max,p=t<n||t>l;return{finalValue:Math.max(n,Math.min(l,t)),isRestricted:p,nextValue:l,prevValue:n}};$i=async function(e){if(this.disabled)return;const t=e.target;F(this,A,je).call(this,t),t.dataset.pointerId&&t.releasePointerCapture(+t.dataset.pointerId),t.dataset.pointerId=e.pointerId.toString(),t.setPointerCapture(e.pointerId),t.classList.add("grabbed"),await t.parentElement.show()};Oi=function(e){if(this.disabled)return;const t=e.target,i=+t.dataset.rangeId;if(!f(this,ae).has(i)||(t.dataset.pointerId?+t.dataset.pointerId:null)!==e.pointerId)return;const r=Ci(this.baseDiv,e.clientX,f(this,A,it)),n=this.step/(this.max-this.min);let l=this.min+this.step*Math.round(r/n);if(this.emit("syn-move",{cancelable:!0,detail:{element:t,value:l}}).defaultPrevented)return;if(this.restrictMovement){const h=F(this,A,Vt).call(this,t,l);h.isRestricted?(l=h.finalValue,t.style.zIndex=(3+this.thumbs.length).toFixed(0)):t.style.zIndex="3"}f(this,ae).set(i,l),F(this,A,at).call(this,t,l);const c=f(this,L);oe(this,L,Array.from(f(this,ae).values())),F(this,A,st).call(this),et(c,f(this,L))&&this.emit("syn-input")};ht=async function(e){const t=e.target;!t.dataset.pointerId||e.pointerId!==+t.dataset.pointerId||(t.classList.remove("grabbed"),t.releasePointerCapture(e.pointerId),delete t.dataset.pointerId,et(f(this,Le),f(this,L))&&(oe(this,Le,Array.from(f(this,L))),this.emit("syn-change")),await t.parentElement.hide())};at=function(e,t){e.setAttribute("aria-valuenow",t.toString()),e.setAttribute("aria-valuetext",this.tooltipFormatter(t));const i=(t-this.min)/(this.max-this.min);e.style.insetInlineStart=`calc( ${100*i}% - var(--full-thumb-size) / 2 )`,F(this,A,je).call(this,e)};st=function(){const{activeTrack:e}=this;if(!e)return;if(this.min===this.max){e.style.insetInlineStart="0%",e.style.insetInlineEnd="0%";return}if(f(this,L).length===1){const r=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",n=100*(f(this,L)[0]-this.min)/(this.max-this.min);e.style.insetInlineStart=`min(${r}, ${n}%)`,e.style.insetInlineEnd=`min(calc(100% - ${r}), calc(100% - ${n}%))`;return}const t=f(this,L).slice().sort(Ee),i=100*(t[0]-this.min)/(this.max-this.min),a=100*(t[t.length-1]-this.min)/(this.max-this.min);e.style.insetInlineStart=`${i}%`,e.style.insetInlineEnd=`calc(100% - ${a}%)`};Ai=function(e){const t=e.target,i=+t.dataset.rangeId,a=f(this,ae).get(i);if(a===void 0)return;let r=a;switch(e.key){case"ArrowUp":case"Up":r=Math.min(a+this.step,this.max);break;case"ArrowDown":case"Down":r=Math.max(a-this.step,this.min);break;case"ArrowLeft":case"Left":r=f(this,A,it)?Math.min(a+this.step,this.max):Math.max(a-this.step,this.min);break;case"ArrowRight":case"Right":r=f(this,A,it)?Math.max(a-this.step,this.min):Math.min(a+this.step,this.max);break;case"PageUp":r=Math.min(a+(this.max-this.min)/5,this.max);break;case"PageDown":r=Math.max(a-(this.max-this.min)/5,this.min);break;case"Home":r=this.min;break;case"End":r=this.max;break;default:return}if(r!==a){if(this.emit("syn-move",{cancelable:!0,detail:{element:t,value:r}}).defaultPrevented)return;if(this.restrictMovement){const l=F(this,A,Vt).call(this,t,r);l.isRestricted&&(r=l.finalValue)}F(this,A,at).call(this,t,r),f(this,ae).set(i,r),oe(this,L,Array.from(f(this,ae).values())),F(this,A,st).call(this),F(this,A,je).call(this,t),oe(this,Le,Array.from(f(this,L))),this.emit("syn-input"),this.emit("syn-change")}e.stopPropagation(),e.preventDefault()};Ii=function(e){var t;e.relatedTarget&&((t=this.shadowRoot)!=null&&t.contains(e.relatedTarget))||(this.emit("syn-blur"),oe(this,tt,!1))};je=function(e){if(this.tooltipPlacement==="none")return;const t=+e.dataset.rangeId;if(!f(this,ae).has(t))return;const i=f(this,ae).get(t),a=e.parentElement;a.content=this.tooltipFormatter(i)};Ei=function(e){var t;if(this.disabled)return;f(this,tt)||(oe(this,tt,!0),this.emit("syn-focus"));const i=e.target;(t=i?.dataset)!=null&&t.rangeId&&F(this,A,je).call(this,i)};Ti=function(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)};Li=function(e){var t,i,a,r;const n=this.hasSlotController.test("ticks"),l=this.hasSlotController.test("prefix"),p=this.hasSlotController.test("suffix");if(!n)return;let c=e||((i=(t=this.shadowRoot)==null?void 0:t.querySelector(".ticks"))==null?void 0:i.clientHeight);if(c){if(c+=2,c/=2,l){const h=(a=this.shadowRoot)==null?void 0:a.querySelector(".input__prefix");h.style.transform=`translateY(-${c}px)`}if(p){const h=(r=this.shadowRoot)==null?void 0:r.querySelector(".input__suffix");h.style.transform=`translateY(-${c}px)`}}};P.styles=[z,Se,$e,ka];P.dependencies={"syn-tooltip":te};o([s()],P.prototype,"name",2);o([s()],P.prototype,"label",2);o([s({attribute:"help-text"})],P.prototype,"helpText",2);o([s({reflect:!0,type:Boolean})],P.prototype,"disabled",2);o([s({type:Number})],P.prototype,"min",2);o([s({type:Number})],P.prototype,"max",2);o([s({type:Number})],P.prototype,"step",2);o([s({reflect:!0})],P.prototype,"size",2);o([s({attribute:"tooltip-placement",type:String})],P.prototype,"tooltipPlacement",2);o([s({type:String})],P.prototype,"value",1);o([s({attribute:"restrict-movement",type:Boolean})],P.prototype,"restrictMovement",2);o([De()],P.prototype,"defaultValue",2);o([s({reflect:!0})],P.prototype,"form",2);o([s({attribute:!1})],P.prototype,"tooltipFormatter",2);o([m(".input__wrapper")],P.prototype,"baseDiv",2);o([m(".active-track")],P.prototype,"activeTrack",2);o([m(".ticks")],P.prototype,"ticks",2);o([ao(".thumb")],P.prototype,"thumbs",2);o([m(".range__validation-input")],P.prototype,"validationInput",2);P=o([ee("SynRange")],P);var Ca="syn-range";P.define("syn-range");w({displayName:"SynRange",elementClass:P,events:{onSynBlur:"syn-blur",onSynChange:"syn-change",onSynFocus:"syn-focus",onSynInput:"syn-input",onSynInvalid:"syn-invalid",onSynMove:"syn-move"},react:x,tagName:Ca});var Sa=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
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
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--syn-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
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
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--syn-spacing-2x-small);
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
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

/* Sizes */
  .select--small .select__combobox {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    min-height: var(--syn-input-height-small);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    min-height: var(--syn-input-height-medium);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    min-height: var(--syn-input-height-large);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }/* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--syn-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Clear button */
  .select__clear {
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

  .select__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--syn-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-500);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }
`,Di=d`
  /**
   * Size adjustments for syn-select and other widgets that use syn-option
   * This allows to share the common settings between all components that
   * should be able to set the size of a syn-option tag.
   */
  :host([size="small"]) {
    --option-min-height: var(--syn-input-height-small);
    --option-padding: 0 var(--syn-input-spacing-small);
    --option-font-size: var(--syn-input-font-size-small);
    --option-icon-size: var(--syn-spacing-medium);
  }

  :host([size="medium"]) {
    --option-min-height: var(--syn-input-height-medium);
    --option-padding: 0 var(--syn-input-spacing-medium);
    --option-font-size: var(--syn-input-font-size-medium);
    --option-icon-size: var(--syn-spacing-large);
  }

  :host([size="large"]) {
    --option-min-height: var(--syn-input-height-large);
    --option-padding: 0 var(--syn-input-spacing-large);
    --option-font-size: var(--syn-input-font-size-large);
    --option-icon-size: var(--syn-spacing-x-large);
  }
`,$a=d`
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

  /* Clear button */
  .select__clear {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-spacing-large);
  }

  .select--small .select__clear {
    font-size: var(--syn-spacing-medium);
  }

  .select--large .select__clear {
    font-size: var(--syn-spacing-x-large);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Expand icon */
  .select__expand-icon {
    color: var(--syn-color-neutral-950);
    margin-inline-start: var(--syn-spacing-small);
  }

  .select--small .select__expand-icon {
    font-size: var(--syn-spacing-medium);
  }

  .select--medium .select__expand-icon {
    font-size: var(--syn-spacing-large);
  }

  .select--large .select__expand-icon {
    font-size: var(--syn-spacing-x-large);
  }

  /* Change select border on hover */
  /* stylelint-disable-next-line no-descending-specificity */
  .select:not(.select--disabled):hover .select__combobox {
    border-color: var(--syn-input-color-hover);
  }

  /* Prefix and Suffix */

  /* Small */
  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .select--small .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .select--small .select__suffix::slotted(syn-icon),
  .select--small .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
  }

  /* Medium */
  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .select--medium .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .select--medium .select__suffix::slotted(syn-icon),
  .select--medium .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
  }

  /* Large */
  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .select--large .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .select--large .select__suffix::slotted(syn-icon),
  .select--large .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
  }


  .select__prefix,
  .select__suffix {
    color: var(--syn-input-help-text-color);
  }

  /* Multi Select */
  .select__tags {
    margin-inline-start: var(--syn-spacing-medium);
  }

  .select--small .select__tags {
    gap: var(--syn-spacing-2x-small);
  }

  .select--medium .select__tags {
    gap: var(--syn-spacing-x-small);
  }

  .select--large .select__tags {
    gap: var(--syn-spacing-small);
  }

  /* Listbox */
  .select__listbox {
    /* @todo: Should be --syn-border-radius-medium, which should be set to 0 */
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-medium);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .select__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }

  ${Di}
`,O=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label"),this.localize=new B(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>u`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest(".select__clear")!==null,a=t.closest("syn-icon-button")!==null;if(!(i||a)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const r=this.getAllOptions(),n=r.indexOf(this.currentOption);let l=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(l=n+1,l>r.length-1&&(l=0)):e.key==="ArrowUp"?(l=n-1,l<0&&(l=r.length-1)):e.key==="Home"?l=0:e.key==="End"&&(l=r.length-1),this.setCurrentOption(r[l])}if(e.key&&e.key.length===1||e.key==="Backspace"){const r=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of r)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?Array.isArray(e)||(e=typeof e=="string"?e.split(" "):[e].filter(Boolean)):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const i=e.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="syn-icon-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("syn-option"),a=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("syn-option")||customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(t)?t:[t],a=[];e.forEach(r=>a.push(r.value)),this.setSelectedOptions(e.filter(r=>i.includes(r.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(a=>a.selected=!1),i.length&&i.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i;const a=this.getAllOptions();this.selectedOptions=a.filter(n=>n.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.value=(e=n?.value)!=null?e:"",this.displayLabel=(i=(t=n?.getTextLabel)==null?void 0:t.call(n))!=null?i:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return u`<div @syn-remove=${a=>this.handleTagRemove(a,e)}>
          ${typeof i=="string"?yi(i):i}
        </div>`}else if(t===this.maxOptionsVisible)return u`<syn-tag size=${this.size}>+${this.selectedOptions.length-t}</syn-tag>`;return u``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="value"){const a=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=a}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(i=>t.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await Z(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=M(this,"select.show",{dir:this.localize.dir()});await q(this.popup.popup,e,t),this.currentOption&&gt(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await Z(this);const{keyframes:e,options:t}=M(this,"select.hide",{dir:this.localize.dir()});await q(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,U(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,U(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,a=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return u`
      <div
        part="form-control"
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${v({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
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

              ${this.multiple?u`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?u`
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
    `}};O.styles=[z,Se,Sa,$e,$a];O.dependencies={"syn-icon":R,"syn-popup":T,"syn-tag":Ce};o([m(".select")],O.prototype,"popup",2);o([m(".select__combobox")],O.prototype,"combobox",2);o([m(".select__display-input")],O.prototype,"displayInput",2);o([m(".select__value-input")],O.prototype,"valueInput",2);o([m(".select__listbox")],O.prototype,"listbox",2);o([_()],O.prototype,"hasFocus",2);o([_()],O.prototype,"displayLabel",2);o([_()],O.prototype,"currentOption",2);o([_()],O.prototype,"selectedOptions",2);o([_()],O.prototype,"valueHasChanged",2);o([s()],O.prototype,"name",2);o([_()],O.prototype,"value",1);o([s({attribute:"value"})],O.prototype,"defaultValue",2);o([s({reflect:!0})],O.prototype,"size",2);o([s()],O.prototype,"placeholder",2);o([s({type:Boolean,reflect:!0})],O.prototype,"multiple",2);o([s({attribute:"max-options-visible",type:Number})],O.prototype,"maxOptionsVisible",2);o([s({type:Boolean,reflect:!0})],O.prototype,"disabled",2);o([s({type:Boolean})],O.prototype,"clearable",2);o([s({type:Boolean,reflect:!0})],O.prototype,"open",2);o([s({type:Boolean})],O.prototype,"hoist",2);o([s()],O.prototype,"label",2);o([s({reflect:!0})],O.prototype,"placement",2);o([s({attribute:"help-text"})],O.prototype,"helpText",2);o([s({reflect:!0})],O.prototype,"form",2);o([s({type:Boolean,reflect:!0})],O.prototype,"required",2);o([s()],O.prototype,"getTag",2);o([g("disabled",{waitUntilFirstUpdate:!0})],O.prototype,"handleDisabledChange",1);o([g(["defaultValue","value"],{waitUntilFirstUpdate:!0})],O.prototype,"handleValueChange",1);o([g("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);O=o([ee("SynSelect")],O);$("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Oa="syn-select";O.define("syn-select");w({displayName:"SynSelect",elementClass:O,events:{onSynChange:"syn-change",onSynClear:"syn-clear",onSynInput:"syn-input",onSynFocus:"syn-focus",onSynBlur:"syn-blur",onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide",onSynInvalid:"syn-invalid"},react:x,tagName:Oa});var Aa=d`
  :host {
    --side-nav-open-width: 320px;
    --side-nav-rail-width: 72px;

    display: block;
  }

  /* Side nav should have a width, so it behave correct in an e.g. display flex context */
  .side-nav:not(.side-nav--rail).side-nav--open {
    width: var(--side-nav-open-width);
  }
  
  /**
   * Side nav should have a width, so it behave correct in an e.g. display flex context.
   * In rail mode the width is always the small rail width, because there should be no shrinking possible of the main content area.
   */
  .side-nav.side-nav--rail {
    width: var(--side-nav-rail-width);
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

  .side-nav__drawer::part(body), .side-nav__drawer::part(footer) {
    padding: 0;
  }

  /** 
   * Overlay 
   */
  .side-nav__drawer::part(overlay){
    position: absolute;
  }

  /**
   * Fixed mode
   */
  .side-nav--fix .side-nav__drawer::part(overlay){
    display: block;
  }

  /**
   * Rail mode
   */
  :not(.side-nav--open).side-nav--rail .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  .side-nav--open.side-nav--rail.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  /**
   * Avoid multiline flickering on open and close animation
   */
  .side-nav--rail.side-nav--animation {
    white-space: nowrap;
  }

  /**
   * Hide the scrollbars in closed rail mode
   */ 
  :not(.side-nav--open).side-nav--rail .side-nav__drawer::part(body){
    overflow: hidden;
  }

  /**
   * Footer divider
   */
  .side-nav__footer-divider{
    --spacing: 0;
    --color: var(--syn-color-neutral-300);
  }

  :not(.side-nav--open).side-nav--rail ::slotted(syn-nav-item){
    --display-children: none;
  }
`,Ia=d`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`,Ea=d`
	/* stylelint-disable */
  :host {
    --color: var(--syn-panel-border-color);
    --width: var(--syn-panel-border-width);
    --spacing: var(--syn-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,ke=class extends b{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ke.styles=[z,Ea,Ia];o([s({type:Boolean,reflect:!0})],ke.prototype,"vertical",2);o([g("vertical")],ke.prototype,"handleVerticalChange",1);var Ta=d`
	/* stylelint-disable */
  :host {
    --size: 25rem;
    --header-spacing: var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--syn-font-size-large);
    line-height: var(--syn-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--syn-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(syn-button:not(:last-of-type)) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--syn-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`,La=d`
  :host {
    /**
     * Used as the default padding for the drawer title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);
  }

  /**
   * Synergy uses a border to distinguish the drawer from its background and
   * removes the default shoelace shadow completely
   */
  .drawer__panel {
    border: 0 solid var(--syn-panel-border-color);
    box-shadow: none;
    color: var(--syn-color-neutral-950);
  }

  /*
   * The border of the panel is always placed in direction to the content,
   * depending on the position of the drawer itself
   */
  .drawer--end .drawer__panel {
    border-left-width: var(--syn-border-width-small);
  }

  .drawer--start .drawer__panel {
    border-right-width: var(--syn-border-width-small);
  }

  .drawer--top .drawer__panel {
    border-bottom-width: var(--syn-border-width-small);
  }

  .drawer--bottom .drawer__panel {
    border-top-width: var(--syn-border-width-small);
  }

  .drawer__header-actions {
    align-items: flex-start;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .drawer__title {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * We need this to make sure we are big enough as defined in the layout
   * When omitting this statement, we will get rounding problems via line-height
   */
  .drawer__title,
  .drawer__header-actions {
    min-height: 88px;
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }
`,ai=new WeakMap;function Mi(e){let t=ai.get(e);return t||(t=window.getComputedStyle(e,null),ai.set(e,t)),t}function Da(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Mi(e);return t.visibility!=="hidden"&&t.display!=="none"}function Ma(e){const t=Mi(e),{overflowY:i,overflowX:a}=t;return i==="scroll"||a==="scroll"?!0:i!=="auto"||a!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&a==="auto"}function Fa(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const n=e.getRootNode(),l=`input[type='radio'][name="${e.getAttribute("name")}"]`,p=n.querySelector(`${l}:checked`);return p?p===e:n.querySelector(l)===e}return Da(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Ma(e):!1}function Va(e){var t,i;const a=Lt(e),r=(t=a[0])!=null?t:null,n=(i=a[a.length-1])!=null?i:null;return{start:r,end:n}}function Na(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function Lt(e){const t=new WeakMap,i=[];function a(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||t.has(r))return;t.set(r,!0),!i.includes(r)&&Fa(r)&&i.push(r),r instanceof HTMLSlotElement&&Na(r,e)&&r.assignedElements({flatten:!0}).forEach(n=>{a(n)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&a(r.shadowRoot)}for(const n of r.children)a(n)}return a(e),i.sort((r,n)=>{const l=Number(r.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-l})}function*Nt(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*_o(Nt(e.shadowRoot.activeElement))))}function Ba(){return[...Nt()].pop()}var Ye=[],Fi=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const a=Ba();if(this.previousFocus=a,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=Lt(this.element);let n=r.findIndex(p=>p===a);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){n+l>=r.length?n=0:n+l<0?n=r.length-1:n+=l,this.previousFocus=this.currentFocus;const p=r[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||p&&this.possiblyHasTabbableChildren(p))return;t.preventDefault(),this.currentFocus=p,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...Nt()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Ye.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ye=Ye.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ye[Ye.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Lt(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],a=this.tabDirection==="forward"?t:i;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function si(e){return e.charAt(0).toUpperCase()+e.slice(1)}var pe=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer"),this.localize=new B(this),this.modal=new Fi(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Qe(this)))}disconnectedCallback(){super.disconnectedCallback(),Be(this),this.removeOpenListeners()}requestClose(e){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=M(this,"drawer.denyClose",{dir:this.localize.dir()});q(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Qe(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Z(this.drawer),Z(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=M(this,`drawer.show${si(this.placement)}`,{dir:this.localize.dir()}),i=M(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([q(this.panel,t.keyframes,t.options),q(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{yt(this),this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Be(this)),await Promise.all([Z(this.drawer),Z(this.overlay)]);const e=M(this,`drawer.hide${si(this.placement)}`,{dir:this.localize.dir()}),t=M(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([q(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),q(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Qe(this)),this.open&&this.contained&&(this.modal.deactivate(),Be(this))}async show(){if(!this.open)return this.open=!0,U(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,U(this,"syn-after-hide")}render(){return u`
      <div
        part="base"
        class=${v({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${y(this.noHeader?this.label:void 0)}
          aria-labelledby=${y(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":u`
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
    `}};pe.styles=[z,Ta,La];pe.dependencies={"syn-icon-button":j};o([m(".drawer")],pe.prototype,"drawer",2);o([m(".drawer__panel")],pe.prototype,"panel",2);o([m(".drawer__overlay")],pe.prototype,"overlay",2);o([s({type:Boolean,reflect:!0})],pe.prototype,"open",2);o([s({reflect:!0})],pe.prototype,"label",2);o([s({reflect:!0})],pe.prototype,"placement",2);o([s({type:Boolean,reflect:!0})],pe.prototype,"contained",2);o([s({attribute:"no-header",type:Boolean,reflect:!0})],pe.prototype,"noHeader",2);o([g("open",{waitUntilFirstUpdate:!0})],pe.prototype,"handleOpenChange",1);o([g("contained",{waitUntilFirstUpdate:!0})],pe.prototype,"handleNoModalChange",1);$("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});$("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});$("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});$("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});$("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});$("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});$("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});$("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});$("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});$("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});$("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ye=class extends b{constructor(){super(),this.hasSlotController=new K(this,"[default]","footer"),this.localize=new B(this),this.isAnimationActive=!1,this.open=!1,this.rail=!1,this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener("syn-initial-focus",e=>{this.rail&&(e.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener("focusin",e=>{e.target.tagName.toLowerCase()==="syn-nav-item"&&this.rail&&!this.open&&(this.open=!0)}),this.addEventListener("focusout",e=>{var t;const i=e.target.tagName.toLowerCase(),a=(t=e.relatedTarget)==null?void 0:t.tagName.toLowerCase();i==="syn-nav-item"&&a!=="syn-nav-item"&&this.rail&&this.open&&(this.open=!1)})}setDelayedCallback(e){clearTimeout(this.timeout),this.timeout=setTimeout(e,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){var e,t;(e=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||e.addEventListener("mouseenter",this.handleMouseEnter),(t=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||t.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){var e,t;(e=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||e.removeEventListener("mouseenter",this.handleMouseEnter),(t=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||t.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerVisibility(e){var t;this.drawer.shadowRoot.querySelector(".drawer").hidden=!e,(t=this.drawer.shadowRoot.querySelector(".drawer__panel"))==null||t.setAttribute("aria-hidden",e?"false":"true")}forceDrawerVisibilityForRailMode(){return U(this.drawer,"syn-after-hide").then(()=>{this.setDrawerVisibility(!0),this.isAnimationActive=!1})}setDrawerAnimations(){const e=M(this,`sideNav.show${this.rail?"Rail":"NonRail"}`,{dir:this.localize.dir()}),t=M(this,`sideNav.hide${this.rail?"Rail":"NonRail"}`,{dir:this.localize.dir()}),i=M(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),a=M(this,"sideNav.overlay.show",{dir:this.localize.dir()});dt(this.drawer,"drawer.showStart",e),dt(this.drawer,"drawer.hideStart",t),dt(this.drawer,"drawer.overlay.hide",i),dt(this.drawer,"drawer.overlay.show",a)}handleModeChange(){this.setDrawerAnimations(),this.rail?(this.addMouseListener(),this.setDrawerVisibility(!0)):(this.removeMouseListener(),this.open||this.setDrawerVisibility(!1))}handleOpenChange(){this.open||yt(this),this.rail&&(this.isAnimationActive=!0,this.open?U(this.drawer,"syn-after-show").then(()=>{this.isAnimationActive=!1}):this.forceDrawerVisibilityForRailMode())}handleFocusTrapping(){this.rail||(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,U(this.drawer,"syn-after-show")}async hide(){if(this.open)return this.open=!1,U(this.drawer,"syn-after-hide")}firstUpdated(){this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.shadowRoot.querySelector(".drawer__panel").tabIndex=-1}),this.rail?this.drawer.updateComplete.then(()=>{this.addMouseListener(),this.setDrawerVisibility(!0)}):this.noFocusTrapping&&this.drawer.modal.activateExternal()}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(Be(this.drawer),this.drawer.modal.deactivate())}render(){const e=window.navigator.maxTouchPoints>0||"ontouchstart"in window,t=this.hasSlotController.test("footer");return se`
      <nav
        class=${v({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":!this.rail,"side-nav--has-footer":t,"side-nav--open":this.open,"side-nav--rail":this.rail,"side-nav--touch":e})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.rail}
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

            ${t?se`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot> 
          
          </footer>

        </syn-drawer>

      </nav>
    `}};ye.styles=[z,Aa];ye.dependencies={"syn-divider":ke,"syn-drawer":pe};o([_()],ye.prototype,"isAnimationActive",2);o([m(".side-nav__drawer")],ye.prototype,"drawer",2);o([s({reflect:!0,type:Boolean})],ye.prototype,"open",2);o([s({reflect:!0,type:Boolean})],ye.prototype,"rail",2);o([s({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],ye.prototype,"noFocusTrapping",2);o([g("rail",{waitUntilFirstUpdate:!0})],ye.prototype,"handleModeChange",1);o([g("open",{waitUntilFirstUpdate:!0})],ye.prototype,"handleOpenChange",1);o([g("noFocusTrapping",{waitUntilFirstUpdate:!0})],ye.prototype,"handleFocusTrapping",1);$("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});$("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});$("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});$("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});$("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});$("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var qa="syn-side-nav";ye.define("syn-side-nav");w({displayName:"SynSideNav",elementClass:ye,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide"},react:x,tagName:qa});var Pa=d`
  :host {
    --speed: var(--syn-transition-x-slow);
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
    opacity: 0.16;
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
`,Ra=d`
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
`,rt=class extends b{constructor(){super(...arguments),this.localize=new B(this)}render(){return u`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};rt.styles=[z,Ra,Pa];var ja="syn-spinner";rt.define("syn-spinner");w({displayName:"SynSpinner",elementClass:rt,events:{},react:x,tagName:ja});var Ha=d`
:host([size='small']) {
    --height: calc(var(--syn-font-size-medium) + 2px);
    --thumb-size: var(--syn-font-size-small);
    --width: calc((var(--height) * 2) - 6px);
  }

  :host([size='medium']) {
    --height: var(--syn-font-size-large);
    --thumb-size: var(--syn-font-size-medium);
    --width: calc((var(--height) * 2) - 6px);
  }

  :host([size='large']) {
    --height: calc(var(--syn-toggle-size-large) + 4px);
    --thumb-size: var(--syn-toggle-size-large);
    --width: calc((var(--height) * 2) - 6px);
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
    background-color: var(--syn-color-neutral-600);
    border: solid var(--syn-border-width-medium) var(--syn-color-neutral-600);
  }

   .switch__control .switch__thumb {
    border: none;
   }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-neutral-900);
    border-color: var(--syn-color-neutral-900);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-neutral-600);
    border-color: var(--syn-color-neutral-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  .switch__label {
    margin-inline-start: var(--syn-spacing-x-small);
  }
  
  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled) .switch__control {
    background-color: var(--syn-color-error-700);
    border-color: var(--syn-color-error-700);
  }

  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-error-900);
    border-color: var(--syn-color-error-900);
  }
  `,Ua=d`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--syn-toggle-size-small);
    --thumb-size: calc(var(--syn-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--syn-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--syn-toggle-size-medium);
    --thumb-size: calc(var(--syn-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--syn-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--syn-toggle-size-large);
    --thumb-size: calc(var(--syn-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--syn-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-input-font-family);
    font-size: inherit;
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--syn-color-neutral-400);
    border: solid var(--syn-input-border-width) var(--syn-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--syn-color-neutral-0);
    border-radius: 50%;
    border: solid var(--syn-input-border-width) var(--syn-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--syn-input-required-content);
    color: var(--syn-input-required-content-color);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,J=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new K(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return u`
      <div
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${v({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${y(this.value)}
            .checked=${Je(this.checked)}
            .disabled=${this.disabled}
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
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J.styles=[z,Se,Ua,$e,Ha];o([m('input[type="checkbox"]')],J.prototype,"input",2);o([_()],J.prototype,"hasFocus",2);o([s()],J.prototype,"title",2);o([s()],J.prototype,"name",2);o([s()],J.prototype,"value",2);o([s({reflect:!0})],J.prototype,"size",2);o([s({type:Boolean,reflect:!0})],J.prototype,"disabled",2);o([s({type:Boolean,reflect:!0})],J.prototype,"checked",2);o([De("checked")],J.prototype,"defaultChecked",2);o([s({reflect:!0})],J.prototype,"form",2);o([s({type:Boolean,reflect:!0})],J.prototype,"required",2);o([s({attribute:"help-text"})],J.prototype,"helpText",2);o([g("checked",{waitUntilFirstUpdate:!0})],J.prototype,"handleCheckedChange",1);o([g("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);J=o([ee("SynSwitch")],J);var Wa="syn-switch";J.define("syn-switch");w({displayName:"SynSwitch",elementClass:J,events:{onSynBlur:"syn-blur",onSynChange:"syn-change",onSynInput:"syn-input",onSynFocus:"syn-focus",onSynInvalid:"syn-invalid"},react:x,tagName:Wa});var Ka=d`
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
    color: var(--syn-color-neutral-950);
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
    background: var(--syn-color-neutral-600);
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
    opacity: 0.11;
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
    opacity: 0.5;
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

  .current-indicator--visible.current-indicator--disabled {
    background: var(--syn-color-neutral-500);
  }

  .current-indicator--visible {
    background: var(--syn-color-primary-600);
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
    --color: var(--syn-color-neutral-200);

    left: var(--syn-spacing-medium);
    margin: 0;
    position: absolute;
    right: var(--syn-spacing-medium);
    top: 0;
    transition: border var(--syn-transition-fast) ease-in-out;
  }

  /**
   * Hide the divider for active elements
   */
  .nav-item:focus-visible .divider {
    --color: transparent;
  }

  /**
   * Make sure the divider is not visible anymore when hovering
   */
  .nav-item:not(.nav-item--disabled):hover .divider {
    --color: transparent;
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
`,ie=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","children","prefix","suffix"),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}isButton(){return!this.href&&!this.hasSlotController.test("children")}isLink(){return!!this.href&&!this.hasSlotController.test("children")}isAccordion(){return this.hasSlotController.test("children")}getNavItemChildren(e){return Array.from(e?.assignedElements({flatten:!0})||[]).map(t=>t.tagName.toLowerCase()==="syn-nav-item"?t:Array.from(t.querySelectorAll(":scope > syn-nav-item"))).flat()}getAllNestedNavItems(e){const t=this.getNavItemChildren(e),i=t.map(a=>a.getAllNestedNavItems(a.childrenSlot)).flat();return t.concat(i)}handleCurrentMarkedChild(){const e=this.closest("syn-side-nav");(!this.open||e?.rail)&&(this.currentMarkedChild=this.getAllNestedNavItems(this.childrenSlot).some(t=>t.current))}handleClickButton(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}handleClickSummary(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit("syn-hide",{cancelable:!0})}showDetails(){this.open=!0,this.emit("syn-show",{cancelable:!0})}handleSlotChange(){const e=getComputedStyle(this);if(e.length===0){setTimeout(()=>{this.handleSlotChange()});return}this.handleCurrentMarkedChild();const i=e.getPropertyValue("--indentation"),a=Math.min(parseInt(i,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(r=>{r.style.setProperty("--indentation",a.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleWidth(e){e.forEach(t=>{if(t.contentRect.width<100){const i=this.hasSlotController.test("prefix");this.showPrefixOnly=i}else this.showPrefixOnly=!1;t.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})}handleHorizontalChange(){this.horizontal?this.resizeObserver.disconnect():this.resizeObserver.observe(this)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleWidth(e)),this.horizontal||this.resizeObserver.observe(this)}firstUpdated(e){super.firstUpdated(e),this.mutationObserver=new MutationObserver(()=>{this.childrenSlot&&this.handleCurrentMarkedChild()}),this.mutationObserver.observe(this,{attributeFilter:["current","open"],childList:!0,subtree:!0})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.disconnect(),(t=this.mutationObserver)==null||t.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(e){this.control.focus(e)}render(){const e=this.isButton(),t=this.isLink(),i=this.isAccordion(),a=this.closest("syn-side-nav"),r=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&!!a?.rail&&!a?.open;let n=Te`button`;i?n=Te`summary`:t&&(n=Te`a`);const l=(this.chevron||i)&&!this.horizontal;let p;i?p=this.handleClickSummary:e&&(p=this.handleClickButton);const c=se`
      <${n}
        aria-controls=${y(i?"navigation-item-details":void 0)}
        aria-current=${y(this.current?"page":void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${v({"nav-item":!0,"nav-item--current":this.current||r,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test("[default]"),"nav-item--has-prefix":this.hasSlotController.test("prefix"),"nav-item--has-suffix":this.hasSlotController.test("suffix"),"nav-item--horizontal":this.horizontal,"nav-item--is-link":t,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":i})}
        @click=${p}
        ?disabled=${y(t?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${y(t?this.href:void 0)}
        part="base"
        role=${t?"link":"button"}
        tabindex=${this.disabled?"-1":"0"}
      >

        ${this.divider&&!this.horizontal?se`<syn-divider class="divider" part="divider"></syn-divider>`:""}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${l?se`
            <syn-icon
              class=${v({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              color="currentColor"
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:""}

          <div
            class=${v({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||r})}
            part="current-indicator"
          >
          </div>
        </div>

      </${n}>
    `;return i?se`
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
    `:c}};ie.styles=[z,Ka];ie.dependencies={"syn-divider":ke};o([_()],ie.prototype,"hasFocus",2);o([_()],ie.prototype,"showPrefixOnly",2);o([_()],ie.prototype,"currentMarkedChild",2);o([_()],ie.prototype,"isMultiLine",2);o([m('slot[name="children"]')],ie.prototype,"childrenSlot",2);o([m(".nav-item")],ie.prototype,"control",2);o([s({reflect:!0,type:String})],ie.prototype,"href",2);o([s({reflect:!0,type:Boolean})],ie.prototype,"current",2);o([s({reflect:!0,type:Boolean})],ie.prototype,"disabled",2);o([s({reflect:!0,type:Boolean})],ie.prototype,"horizontal",2);o([s({reflect:!0,type:Boolean})],ie.prototype,"chevron",2);o([s({reflect:!0,type:Boolean})],ie.prototype,"open",2);o([s({reflect:!0,type:Boolean})],ie.prototype,"divider",2);o([g("horizontal",{waitUntilFirstUpdate:!0})],ie.prototype,"handleHorizontalChange",1);var Ga="syn-nav-item";ie.define("syn-nav-item");w({displayName:"SynNavItem",elementClass:ie,events:{onSynShow:"syn-show",onSynHide:"syn-hide",onSynBlur:"syn-blur",onSynFocus:"syn-focus"},react:x,tagName:Ga});var Za=d`
  :host {
    --display-divider: block;
  }

  .optgroup__divider {
    --spacing: var(--syn-spacing-x-small);

    display: var(--display-divider);
  }

  .optgroup__label-container {
    align-items: center;
    box-sizing: border-box;
    color: var(--syn-color-neutral-950);
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
    padding: var(--option-padding, var(--syn-spacing-small) var(--syn-spacing-medium));
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
    color: var(--syn-color-neutral-800);
    font-size: var(--syn-spacing-large);
  }

  .optgroup__options ::slotted(syn-option[hidden]) {
    display: none;
  }
`,Ae=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}handleDisableOptions(){const{disabled:e}=this;this.defaultSlot.assignedElements().filter(t=>t.tagName.toLowerCase()==="syn-option").forEach(t=>{t.disabled=e})}handleDisabledChange(){this.handleDisableOptions()}render(){const{disabled:e}=this,t=this.hasSlotController.test("label"),i=this.label?!0:!!t;return se`
      <div
        class=${v({optgroup:!0,"optgroup--has-label":i,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
        role="${e?"presentation":"group"}"
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
          <slot @slotchange=${this.handleDisableOptions}></slot>
        </div>
      </div>
    `}};Ae.styles=Za;Ae.dependencies={"syn-divider":ke};o([m("slot:not([name])")],Ae.prototype,"defaultSlot",2);o([s({reflect:!0,type:Boolean})],Ae.prototype,"disabled",2);o([s()],Ae.prototype,"label",2);o([g("disabled",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleDisabledChange",1);var Xa="syn-optgroup";Ae.define("syn-optgroup");w({displayName:"SynOptgroup",elementClass:Ae,events:{},react:x,tagName:Xa});var Ya=d`
  /**
   * The syn-option is now able to adjust its height from a parent item
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
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    
    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--option-min-height, var(--syn-input-height-medium));
    padding: var(--option-padding, var(--syn-spacing-small) var(--syn-spacing-medium));
  }

  .option:not(.option--current) {
    color: var(--syn-color-neutral-950);
  }

  .option__label {
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-color-primary-600);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option .option__check {
    padding-inline-end: var(--syn-spacing-small);
  }

  /* Invert the check mark when keyboard navigation is used */
  .option--current .option__check {
    color: var(--syn-color-neutral-0);
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
    color: var(--syn-color-neutral-800);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option--current .option__prefix::slotted(syn-icon),
  .option--current .option__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-0);
  }

  /* This is needed for the highlight styling of the options in syn-combobox */
  .option__label::slotted(.syn-highlight-style) {
    background-color: transparent;
    color: var(--syn-color-neutral-950);
    font: var(--syn-body-medium-bold);
  }

  :host([aria-selected='true']) .option__label::slotted(.syn-highlight-style) {
    color: var(--syn-color-neutral-0);
  }
`,Qa=d`
	/* stylelint-disable */
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    color: var(--syn-color-neutral-700);
    padding: var(--syn-spacing-x-small) var(--syn-spacing-medium) var(--syn-spacing-x-small) var(--syn-spacing-x-small);
    transition: var(--syn-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--syn-color-neutral-100);
    color: var(--syn-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--syn-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--syn-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,de=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?(customElements.whenDefined("syn-combobox").then(()=>{const e=this.closest("syn-combobox");e&&e.handleDefaultSlotChange()}),customElements.whenDefined("syn-select").then(()=>{const e=this.closest("syn-select");e&&e.handleDefaultSlotChange()})):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(t+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(t+=i.textContent)}),t.trim()}render(){return u`
      <div
        part="base"
        class=${v({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};de.styles=[z,Qa,Ya];de.dependencies={"syn-icon":R};o([m(".option__label")],de.prototype,"defaultSlot",2);o([_()],de.prototype,"current",2);o([_()],de.prototype,"selected",2);o([_()],de.prototype,"hasHover",2);o([s({reflect:!0})],de.prototype,"value",2);o([s({type:Boolean,reflect:!0})],de.prototype,"disabled",2);o([g("disabled")],de.prototype,"handleDisabledChange",1);o([g("selected")],de.prototype,"handleSelectedChange",1);o([g("value")],de.prototype,"handleValueChange",1);var Ja="syn-option";de.define("syn-option");w({displayName:"SynOption",elementClass:de,events:{},react:x,tagName:Ja});var es="syn-popup";T.define("syn-popup");w({displayName:"SynPopup",elementClass:T,events:{onSynReposition:"syn-reposition"},react:x,tagName:es});var ri=e=>Array.from(e.assignedElements({flatten:!0})),ts=e=>{var t;return e.tagName.toLocaleLowerCase()==="syn-nav-item"||((t=e.getAttribute("role"))!=null?t:"")==="menuitem"},ni=e=>e.filter(ts),is=e=>{e.setAttribute("horizontal","true"),e.removeAttribute("slot"),e.removeAttribute("tabindex"),e.dataset.originalRole?e.setAttribute("role",e.dataset.originalRole):e.removeAttribute("role")},os=e=>{e.removeAttribute("horizontal"),e.setAttribute("slot","menu"),e.setAttribute("role","menuitem")},as=d`
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
`,ss=d`
  :host {
    border-radius: 0;
  }

  /*
   * #368: Hide the checkmarks for menu items
   * when no syn-menu-item[checkbox] or loading is present
   */
  .menu--no-checkmarks::slotted(syn-menu-item) {
    --display-checkmark: none;
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  ::slotted(syn-menu-label:first-of-type) {
    --display-divider: none;
  }

  ::slotted(syn-divider) {
    /* #369: Slotted syn-dividers should use a lighter color so they do not crash with the border visually */
    --color: var(--syn-color-neutral-200);
  }
`,rs=d`
	/* stylelint-disable */
  :host {
    display: block;
    position: relative;
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding: var(--syn-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }
`,He=class extends b{constructor(){super(...arguments),this.hasMenuItemsWithCheckmarks=!1,this.updateCheckMarksByChildPropChange=e=>{e.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}handleUpdateCheckmarks(e){this.hasMenuItemsWithCheckmarks=e.some(t=>t.type==="checkbox"||t.loading)}disconnectedCallback(){this.removeEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath(),a=i.find(p=>{var c;return t.includes(((c=p?.getAttribute)==null?void 0:c.call(p,"role"))||"")});if(!a||i.find(p=>{var c;return((c=p?.getAttribute)==null?void 0:c.call(p,"role"))==="menu"})!==this)return;const l=a;l.type==="checkbox"&&(l.checked=!l.checked),this.emit("syn-select",{detail:{item:l}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let a=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?a++:e.key==="ArrowUp"?a--:e.key==="Home"?a=0:e.key==="End"&&(a=t.length-1),a<0&&(a=t.length-1),a>t.length-1&&(a=0),this.setCurrentItem(t[a]),t[a].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();this.handleUpdateCheckmarks(e),e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return u`
      <slot
        class=${v({"menu--no-checkmarks":!this.hasMenuItemsWithCheckmarks})}
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};He.styles=[z,rs,ss];o([m("slot")],He.prototype,"defaultSlot",2);o([_()],He.prototype,"hasMenuItemsWithCheckmarks",2);var ns=d`
  /* Write custom CSS here */
`,ls=d`
	/* stylelint-disable */
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
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    border-radius: var(--syn-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(syn-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,re=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="syn-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,a,r;const n=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(r=(a=document.activeElement)==null?void 0:a.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||n?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.getAllItems(),a=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(a),a.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(a=>Va(a).start);let i;if(t){switch(t.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":i=t.button;break;default:i=t}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,U(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,U(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("syn-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await Z(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=M(this,"dropdown.show",{dir:this.localize.dir()});await q(this.popup.popup,e,t),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await Z(this);const{keyframes:e,options:t}=M(this,"dropdown.hide",{dir:this.localize.dir()});await q(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return u`
      <syn-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${y(this.sync?this.sync:void 0)}
        class=${v({dropdown:!0,"dropdown--open":this.open})}
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
    `}};re.styles=[z,ls,ns];re.dependencies={"syn-popup":T};o([m(".dropdown")],re.prototype,"popup",2);o([m(".dropdown__trigger")],re.prototype,"trigger",2);o([m(".dropdown__panel")],re.prototype,"panel",2);o([s({type:Boolean,reflect:!0})],re.prototype,"open",2);o([s({reflect:!0})],re.prototype,"placement",2);o([s({type:Boolean,reflect:!0})],re.prototype,"disabled",2);o([s({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],re.prototype,"stayOpenOnSelect",2);o([s({attribute:!1})],re.prototype,"containingElement",2);o([s({type:Number})],re.prototype,"distance",2);o([s({type:Number})],re.prototype,"skidding",2);o([s({type:Boolean})],re.prototype,"hoist",2);o([s({reflect:!0})],re.prototype,"sync",2);o([g("open",{waitUntilFirstUpdate:!0})],re.prototype,"handleOpenChange",1);$("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var be=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}getSlottedNavItems(){const e=ni(ri(this.defaultSlot)),t=ni(ri(this.menuSlot));return e.concat(t)}cacheItemPositions(e){const{left:t}=this.horizontalNav.getBoundingClientRect();e.forEach(i=>{i.removeAttribute("slot");const{right:a}=i.getBoundingClientRect();i.dataset.right=(a-t).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const e=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(e);const{width:t}=this.horizontalNav.getBoundingClientRect(),i=this.priorityMenu.classList.contains("priority-menu--hidden")?0:this.priorityMenu.clientWidth,a=t-i;let r;const n=e.at(-1),l=e.map(h=>{const k=h===n?t:a,V=!!(r||parseFloat(h.dataset.right)>k);return V&&!r&&(r=parseFloat(h.dataset.right)),{isHidden:V,item:h}}),p=l.filter(({isHidden:h})=>!h).length,c=p===1;l.forEach(({item:h,isHidden:k})=>{k||c?os(h):is(h)}),this.hasItemsInDropdown=p!==e.length,this.amountOfVisibleItems=c?0:p}renderPriorityMenu(){return se`
      <syn-dropdown
        class=${v({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${v({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const e=this.getSlottedNavItems();e.length!==this.amountOfNavItems&&(this.cacheItemPositions(e),this.handlePriorityMenu(),this.amountOfNavItems=e.length)}firstUpdated(){this.getSlottedNavItems().forEach(e=>{var t;e.dataset.originalRole=(t=e.getAttribute("role"))!=null?t:""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return se`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}};be.styles=[z,as];be.dependencies={"syn-dropdown":re,"syn-icon":R,"syn-menu":He,"syn-nav-item":ie};o([m("slot:not([name])")],be.prototype,"defaultSlot",2);o([m("slot[name=menu]")],be.prototype,"menuSlot",2);o([m(".horizontal-nav")],be.prototype,"horizontalNav",2);o([m(".priority-menu")],be.prototype,"priorityMenu",2);o([_()],be.prototype,"itemPositionsCached",2);o([_()],be.prototype,"amountOfNavItems",2);o([_()],be.prototype,"amountOfVisibleItems",2);o([_()],be.prototype,"hasItemsInDropdown",2);var ps="syn-prio-nav";be.define("syn-prio-nav");w({displayName:"SynPrioNav",elementClass:be,events:{},react:x,tagName:ps});var cs=d`
  :host {
    --height: var(--syn-font-size-medium);
    --speed: 2.5s;
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
`,ds=d`
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
`,Ue=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return u`
      <div
        part="base"
        class=${v({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${y(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${so({width:`${this.value}%`})}>
          ${this.indeterminate?"":u` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ue.styles=[z,ds,cs];o([s({type:Number,reflect:!0})],Ue.prototype,"value",2);o([s({type:Boolean,reflect:!0})],Ue.prototype,"indeterminate",2);o([s()],Ue.prototype,"label",2);var us="syn-progress-bar";Ue.define("syn-progress-bar");w({displayName:"SynProgressBar",elementClass:Ue,events:{},react:x,tagName:us});var ms=d`
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
`,hs=d`
  :host {
    --size: 120px;
    --track-width: var(--syn-spacing-x-small);
  }

  .progress-ring__indicator {
    stroke-linecap: initial;
  }

  .progress-ring__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-x-large);
  }
`,Fe=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,a=i-this.value/100*i;this.indicatorOffset=`${a}px`}}render(){return u`
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
    `}};Fe.styles=[z,ms,hs];o([m(".progress-ring__indicator")],Fe.prototype,"indicator",2);o([_()],Fe.prototype,"indicatorOffset",2);o([s({type:Number,reflect:!0})],Fe.prototype,"value",2);o([s()],Fe.prototype,"label",2);var gs="syn-progress-ring";Fe.define("syn-progress-ring");w({displayName:"SynProgressRing",elementClass:Fe,events:{},react:x,tagName:gs});var Vi=d`
	/* stylelint-disable */
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--syn-input-border-width);
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--syn-transition-x-fast) background-color,
      var(--syn-transition-x-fast) color,
      var(--syn-transition-x-fast) border,
      var(--syn-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(syn-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Primary */
  .button--filled.button--primary {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:hover:not(.button--disabled) {
    background-color: var(--syn-color-primary-500);
    border-color: var(--syn-color-primary-500);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:active:not(.button--disabled) {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--syn-color-primary-600);
    color: var(--syn-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--syn-color-primary-700);
    background-color: var(--syn-color-primary-700);
    color: var(--syn-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--syn-input-height-small);
    font-size: var(--syn-button-font-size-small);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--syn-input-height-medium);
    font-size: var(--syn-button-font-size-medium);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--syn-input-height-large);
    font-size: var(--syn-button-font-size-large);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-large);
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
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading syn-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(syn-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(syn-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--syn-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--syn-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--syn-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--syn-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--syn-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--syn-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-syn-button-group__button--first]:not([data-syn-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-syn-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-syn-button-group__button--last]:not([data-syn-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-syn-button-group__button]:not([data-syn-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--syn-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-syn-button-group__button]:not(
          [data-syn-button-group__button--first],
          [data-syn-button-group__button--radio],
          [variant='filled']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
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
`,fs=d`
	/* stylelint-disable */
  ${Vi}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ce=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return se`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${v({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${y(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ce.styles=[z,fs];o([m(".button")],ce.prototype,"input",2);o([m(".hidden-input")],ce.prototype,"hiddenInput",2);o([_()],ce.prototype,"hasFocus",2);o([s({type:Boolean,reflect:!0})],ce.prototype,"checked",2);o([s()],ce.prototype,"value",2);o([s({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);o([s({reflect:!0})],ce.prototype,"size",2);o([s({type:Boolean,reflect:!0})],ce.prototype,"pill",2);o([g("disabled",{waitUntilFirstUpdate:!0})],ce.prototype,"handleDisabledChange",1);ce=o([ee("SynRadioButton")],ce);var ys="syn-radio-button";ce.define("syn-radio-button");w({displayName:"SynRadioButton",elementClass:ce,events:{onSynBlur:"syn-blur",onSynFocus:"syn-focus"},react:x,tagName:ys});var bs=d`
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
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-primary-900);
  }

  /* Drop Area */
  .droparea {
    --highlight-color: var(--syn-color-primary-600);

    border: var(--syn-border-width-small) dashed var(--syn-input-border-color);
    font: var(--syn-body-medium-regular);
    padding: var(--syn-spacing-x-large) var(--syn-spacing-large);
    transition: var(--syn-transition-medium) background;
  }

  .droparea:focus-visible {
    border: var(--syn-border-width-small) dashed var(--syn-color-primary-600);
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

  /* Disabled Styles */
  :host([disabled]) .droparea,
  :host([disabled]) .input__value {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host(:not([disabled])) .form-control--user-dragging .droparea {
    background: var(--syn-color-primary-50);
    border: var(--syn-border-width-small) solid var(--syn-color-primary-600);
    cursor: pointer;
  }

  :host(:not([disabled])) .droparea:not(:focus-visible):hover {
    --highlight-color: var(--syn-color-primary-900);

    border: var(--syn-border-width-small) dashed var(--syn-color-primary-900);
    cursor: pointer;
  }

  /* Validation */
  /* stylelint-disable-next-line no-descending-specificity */
  :host([data-user-invalid]:not([disabled])) .droparea {
    border: var(--syn-border-width-small) dashed var(--syn-input-border-color-focus-error);
  }
`,vs=d`
  .button {
    font-weight: var(--syn-font-weight-bold);
  }

  .button:focus-visible {
    outline: var(--syn-focus-ring-color) solid var(--syn-focus-ring-width);
    outline-offset: var(--syn-focus-ring-width);
  }

  /*
   * Adjustments for button label paddings
   * @see https://github.com/synergy-design-system/synergy-design-system/issues/243
   */
  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--syn-spacing-2x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--syn-spacing-2x-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--syn-spacing-x-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Icon-only buttons
   */
  .button--small .button__label.button__icon-only {
    padding: 0 calc(var(--syn-spacing-x-small) + var(--syn-spacing-4x-small));
  }

  .button--small .button__label::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
    vertical-align: -3px;
  }

  .button--medium .button__label.button__icon-only {
    padding: 0 calc(var(--syn-spacing-small) - var(--syn-spacing-4x-small));
  }

  .button--medium .button__label::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    vertical-align: -6px;
  }

  .button--large .button__label.button__icon-only {
    padding: 0 calc(var(--syn-spacing-medium) - var(--syn-spacing-4x-small));
  }

  .button--large .button__label::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
    vertical-align: -8px;
  }


  /**
   * Size modifiers
   */
  .button.button--medium.button--has-label .button__label {
    font-size: var(--syn-font-size-medium);
  } 

  .button.button--large.button--has-label .button__label {
    font-size: var(--syn-font-size-large);
  }

  /*
   * Standard buttons
   */
  .button--filled.button--primary.button--disabled {
    background-color: var(--syn-color-neutral-600);
    border-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:hover:not(.button--disabled) {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:active:not(.button--disabled) {
    background-color: var(--syn-color-primary-950);
    border-color: var(--syn-color-primary-950);
    color: var(--syn-color-neutral-0);
  }

  /*
   * Outline buttons
   */
  .button--outline.button--primary.button--disabled {
    background: none;
    border-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background: none;
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-primary-900);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    background: inherit;
    border-color:  var(--syn-color-primary-950);
    color:  var(--syn-color-primary-950);
  }

  /*
   * Text buttons
   */
  .button--text:hover:not(.button--disabled) {
    color: var(--syn-color-primary-900);
  }

  .button--text.button--primary:active:not(.button--disabled) {
    background: inherit;
    border-color: transparent;
    color:  var(--syn-color-primary-950);
  }

  .button--text.button--primary.button--disabled {
    color: var(--syn-color-neutral-600);
  }

  /**
   * Button spacing
   */
  .button.button--small.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button.button--small.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button.button--small.button--has-prefix .button__prefix, 
  .button.button--small.button--has-suffix .button__suffix {
    font-size: var(--syn-spacing-medium);
  }

  .button.button--medium.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-medium);
  } 

  .button.button--medium.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-medium);
  }

  .button.button--medium.button--has-prefix .button__prefix, 
  .button.button--medium.button--has-suffix .button__suffix {
    font-size: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-prefix .button__label {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button.button--large.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-suffix .button__label {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button.button--large.button--has-prefix .button__prefix, 
  .button.button--large.button--has-suffix .button__suffix {
    font-size: var(--syn-font-size-2x-large);
  }

  /*
   * Caret modifier
   */
  .button--caret.button--small .button__caret{
    font-size: var(--syn-font-size-medium);
  }

  .button--caret.button--medium .button__caret{
    font-size: var(--syn-font-size-x-large);
  }

  .button--caret.button--large .button__caret{
    font-size: var(--syn-font-size-2x-large);
  }
`,E=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new K(this,"[default]","prefix","suffix"),this.localize=new B(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ot}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){const e=xi(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),i=t.length===1&&t[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=i&&e===""}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Te`a`:Te`button`;return se`
      <${t}
        part="base"
        class=${v({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:this.type)}
        title=${this.title}
        name=${y(e?void 0:this.name)}
        value=${y(e?void 0:this.value)}
        href=${y(e&&!this.disabled?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e?this.rel:void 0)}
        role=${y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${v({button__label:!0,"button__icon-only":this.iconOnly})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?se` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?se`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${t}>
    `}};E.styles=[z,Vi,vs];E.dependencies={"syn-icon":R,"syn-spinner":rt};o([m(".button")],E.prototype,"button",2);o([m("slot:not([name])")],E.prototype,"defaultSlot",2);o([_()],E.prototype,"iconOnly",2);o([_()],E.prototype,"hasFocus",2);o([_()],E.prototype,"invalid",2);o([s()],E.prototype,"title",2);o([s({reflect:!0})],E.prototype,"variant",2);o([s({reflect:!0})],E.prototype,"size",2);o([s({type:Boolean,reflect:!0})],E.prototype,"caret",2);o([s({type:Boolean,reflect:!0})],E.prototype,"disabled",2);o([s({type:Boolean,reflect:!0})],E.prototype,"loading",2);o([s()],E.prototype,"type",2);o([s()],E.prototype,"name",2);o([s()],E.prototype,"value",2);o([s()],E.prototype,"href",2);o([s()],E.prototype,"target",2);o([s()],E.prototype,"rel",2);o([s()],E.prototype,"download",2);o([s()],E.prototype,"form",2);o([s({attribute:"formaction"})],E.prototype,"formAction",2);o([s({attribute:"formenctype"})],E.prototype,"formEnctype",2);o([s({attribute:"formmethod"})],E.prototype,"formMethod",2);o([s({attribute:"formnovalidate",type:Boolean})],E.prototype,"formNoValidate",2);o([s({attribute:"formtarget"})],E.prototype,"formTarget",2);o([g("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);E=o([ee("SynButton")],E);var D=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{assumeInteractionOn:["syn-change"],value:e=>e.files}),this.hasSlotController=new K(this,"help-text","label"),this.localize=new B(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(e){this.input&&(this.input.files=e)}get files(){var e;return(e=this.input)==null?void 0:e.files}set value(e){this.input&&(this.input.value=e)}get value(){var e;return(e=this.input)==null?void 0:e.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){var t,i;if(this.droparea){(t=this.dropareaWrapper)==null||t.focus(e);return}(i=this.button)==null||i.focus(e)}blur(){var e,t;if(this.droparea){(e=this.dropareaWrapper)==null||e.blur();return}(t=this.button)==null||t.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value="";return}this.files=e}async handleTransferItems(e){if(!e)return this.value="",new Promise((l,p)=>{p(new Error("No proper items found"))});const i=Array.from(e).map(l=>l.webkitGetAsEntry()).map(l=>this.getFilesFromEntry(l)),r=(await Promise.all(i)).flat(),n=new DataTransfer;return Array.from(r).forEach(l=>n.items.add(l)),n.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((t,i)=>{e.file(a=>t([a]),i)}):e.isDirectory?new Promise((t,i)=>{e.createReader().readEntries(r=>{Promise.all(r.map(n=>this.getFilesFromEntry(n))).then(n=>{t(n.flat())}).catch(i)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!0}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!1}async handleDrop(e){var t;if(e.preventDefault(),e.stopPropagation(),!e.dataTransfer)return;const i=await this.handleTransferItems((t=e.dataTransfer)==null?void 0:t.items);if(this.userIsDragging=!1,!i)return;if(!this.multiple&&!this.webkitdirectory&&i.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(i);else{const r=M(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),n=M(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const l=M(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});q(this.dropareaIcon,l.keyframes,l.options)}await q(this.inputChosen,r.keyframes,r.options),this.handleFiles(i),await q(this.inputChosen,n.keyframes,n.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){var e;let t=!1,i=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&((e=this.files)==null?void 0:e.length)>0&&(t=!0,i=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),u`
      <span
        class=${v({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!t})}
        part="value"
      >
        ${i}
      </span>
    `}renderDroparea(){return u`
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
    `}renderButton(){let e=this.localize.term("fileButtonText");return this.multiple&&(e=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(e=this.localize.term("folderButtonText")),u`
      <div
        class="button__wrapper"
        part="button-wrapper"
      >
        <syn-button
          class="button"
          @click=${this.handleClick}
          ?disabled=${this.disabled}
          exportparts="base:button__base"
          part="button"
          size=${this.size}
          variant="outline"
        >
          ${e}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){const e=this.label||!!this.hasSlotController.test("label"),t=this.helpText?!0:!!this.hasSlotController.test("help-text"),i=!!this.hasSlotController.test("trigger");return u`
      <div
        class=${v({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":t,"form-control--has-label":e,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${i?u`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:u`
              <label
                aria-hidden=${e?"false":"true"}
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
                aria-hidden=${t?"false":"true"}
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
          ?disabled=${this.disabled}
          id="input"
          @invalid=${this.handleInvalid}
          ?multiple=${this.multiple}
          name=${y(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}};D.styles=[z,Se,$e,bs];D.dependencies={"syn-button":E,"syn-icon":R};o([_()],D.prototype,"userIsDragging",2);o([s({type:Object})],D.prototype,"files",1);o([s({type:String})],D.prototype,"name",2);o([s({type:String})],D.prototype,"value",1);o([De()],D.prototype,"defaultValue",2);o([s({reflect:!0})],D.prototype,"size",2);o([s()],D.prototype,"label",2);o([s({attribute:"help-text"})],D.prototype,"helpText",2);o([s({reflect:!0,type:Boolean})],D.prototype,"disabled",2);o([s({type:Boolean})],D.prototype,"droparea",2);o([s({type:String})],D.prototype,"accept",2);o([s({type:String})],D.prototype,"capture",2);o([s({reflect:!0,type:Boolean})],D.prototype,"multiple",2);o([s({reflect:!0,type:Boolean})],D.prototype,"webkitdirectory",2);o([s({reflect:!0})],D.prototype,"form",2);o([s({reflect:!0,type:Boolean})],D.prototype,"required",2);o([s({attribute:"hide-value",type:Boolean})],D.prototype,"hideValue",2);o([m(".input__control")],D.prototype,"input",2);o([m(".button")],D.prototype,"button",2);o([m(".droparea")],D.prototype,"dropareaWrapper",2);o([m(".droparea__icon")],D.prototype,"dropareaIcon",2);o([m(".input__value")],D.prototype,"inputChosen",2);o([g("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);o([g("value",{waitUntilFirstUpdate:!0})],D.prototype,"handleValueChange",1);D=o([ee("SynFile")],D);$("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});$("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});$("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});var _s="syn-file";D.define("syn-file");w({displayName:"SynFile",elementClass:D,events:{onSynBlur:"syn-blur",onSynChange:"syn-change",onSynError:"syn-error",onSynFocus:"syn-focus",onSynInput:"syn-input"},react:x,tagName:_s});var xs=d`
  :host {
    display: block;
  }

  .header {
    background: var(--syn-color-neutral-0);
    box-shadow: inset 0 -1px 0 0 var(--syn-color-neutral-400);
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
    color: var(--syn-color-primary-600);
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
    color: var(--syn-color-primary-600);
    height: 32px;
    width: auto;
  }

  /**
   * The label section hosts the application name
   */
  .header__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-large-bold);
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
    color: var(--syn-color-neutral-950);
    display: contents;
    font-size: var(--syn-font-size-x-large);
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
    color: var(--syn-color-neutral-950);
    cursor: pointer;
    display: flex;
    font-size: var(--syn-font-size-x-large);
    margin-right: calc(var(--syn-spacing-medium) + var(--syn-spacing-2x-small));
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .header__burger-menu-toggle:hover {
    color: var(--syn-color-primary-600);
  }

  .header__burger-menu-toggle:active {
    color: var(--syn-color-primary-700);
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
`,ws=R;R.define("syn-icon");var Ie=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new B(this),this.label="",this.burgerMenu="hidden"}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&!this.sideNav.rail&&(this.sideNav.open=!this.sideNav.open),this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.rail?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}handleBurgerMenu(){const e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{const e=document.querySelector("syn-side-nav");this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector("syn-side-nav"),this.sideNav&&(this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","rail"],attributes:!0}))}render(){const e=this.hasSlotController.test("navigation"),t=this.burgerMenu!=="hidden";return se`
      <header
        class=${v({header:!0,"header--has-burger-menu":t,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${t?se`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?se`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:se`
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
            <slot name="meta-navigation"></slot>
          </div>
        </div>
        <!-- /.header__content -->

        <div part="navigation" class="header__navigation">
          <slot name="navigation"></slot>
        </div>
      </header>
    `}};Ie.styles=[z,xs];Ie.dependencies={"syn-icon":ws};o([s()],Ie.prototype,"label",2);o([s({attribute:"burger-menu",reflect:!0})],Ie.prototype,"burgerMenu",2);o([_()],Ie.prototype,"sideNav",2);o([g("burgerMenu",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleBurgerMenu",1);var zs="syn-header";Ie.define("syn-header");w({displayName:"SynHeader",elementClass:Ie,events:{onSynBurgerMenuClosed:"syn-burger-menu-closed",onSynBurgerMenuHidden:"syn-burger-menu-hidden",onSynBurgerMenuOpen:"syn-burger-menu-open"},react:x,tagName:zs});var ks="syn-icon-button";j.define("syn-icon-button");w({displayName:"SynIconButton",elementClass:j,events:{onSynBlur:"syn-blur",onSynFocus:"syn-focus"},react:x,tagName:ks});var Cs="syn-icon";R.define("syn-icon");var Ss=w({displayName:"SynIcon",elementClass:R,events:{onSynLoad:"syn-load",onSynError:"syn-error"},react:x,tagName:Cs}),$s=d`
  /**
  * Fixes overflowing of the syn-input in flex and grid containers with fix width (https://github.com/synergy-design-system/synergy-design-system/issues/761)
  */
  .input__control {
    width: 100%;
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
    color: var(--syn-color-primary-600);
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
    color: var(--syn-color-primary-900)
  }

  .input__number-stepper-button:active:not([disabled]) {
    color: var(--syn-color-primary-950)
  }

  .input__number-stepper-button[disabled] {
    color: var(--syn-color-neutral-400);
    cursor: not-allowed;
    opacity: 0.5;
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
`,Os=d`
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
`,As=class extends ro{constructor(e){if(super(e),this.handlePointerDown=t=>{t.button!==0||this.host.disabled||this.spinOnLongPressCallback(t)},this.handlePointerUp=t=>{t?.preventDefault(),t?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},e.type!==Gi.ELEMENT||!(e.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(e){return ji}update(e,[t]){return this.callbacks===void 0&&this.host===void 0&&(this.host=e.element,this.callbacks=ge({},t),this.host.addEventListener("pointerdown",this.handlePointerDown)),Hi}reconnected(){this.host.addEventListener("pointerdown",this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(e){var t;e.preventDefault(),e.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),(t=this.observer)==null||t.disconnect(),this.observer=new MutationObserver(i=>{i.forEach(a=>{a.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){var e;clearInterval(this.interval),clearTimeout(this.timeout),(e=this.observer)==null||e.disconnect()}},li=Ki(As),C=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label","prefix","suffix"),this.localize=new B(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null||this.disabled)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return this.valueAsNumber<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return this.valueAsNumber>=t}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,i,a="none"){this.input.setSelectionRange(t,i,a)}setRangeText(t,i,a,r="preserve"){const n=i??this.input.selectionStart,l=a??this.input.selectionEnd;this.input.setRangeText(t,n,l,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),a=this.hasSlotController.test("prefix"),r=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,l=this.helpText?!0:!!i,c=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return u`
      <div
        part="form-control"
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":l,"form-control--has-prefix":a,"form-control--has-suffix":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${v({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${y(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              min=${y(this.min)}
              max=${y(this.max)}
              step=${y(this.step)}
              .value=${Je(this.value)}
              autocapitalize=${y(this.autocapitalize)}
              autocomplete=${y(this.autocomplete)}
              autocorrect=${y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${y(this.pattern)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${c?u`
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
            ${this.passwordToggle&&!this.disabled?u`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?u`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:u`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?u`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${li({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${li({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
          aria-hidden=${l?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};C.styles=[z,Se,Os,$e,$s];C.dependencies={"syn-icon":R,"syn-divider":ke};o([m(".input__control")],C.prototype,"input",2);o([_()],C.prototype,"hasFocus",2);o([s()],C.prototype,"title",2);o([s({reflect:!0})],C.prototype,"type",2);o([s()],C.prototype,"name",2);o([s()],C.prototype,"value",2);o([De()],C.prototype,"defaultValue",2);o([s({reflect:!0})],C.prototype,"size",2);o([s()],C.prototype,"label",2);o([s({attribute:"help-text"})],C.prototype,"helpText",2);o([s({type:Boolean})],C.prototype,"clearable",2);o([s({type:Boolean,reflect:!0})],C.prototype,"disabled",2);o([s()],C.prototype,"placeholder",2);o([s({type:Boolean,reflect:!0})],C.prototype,"readonly",2);o([s({attribute:"password-toggle",type:Boolean})],C.prototype,"passwordToggle",2);o([s({attribute:"password-visible",type:Boolean})],C.prototype,"passwordVisible",2);o([s({attribute:"no-spin-buttons",type:Boolean})],C.prototype,"noSpinButtons",2);o([s({reflect:!0})],C.prototype,"form",2);o([s({type:Boolean,reflect:!0})],C.prototype,"required",2);o([s()],C.prototype,"pattern",2);o([s({type:Number})],C.prototype,"minlength",2);o([s({type:Number})],C.prototype,"maxlength",2);o([s()],C.prototype,"min",2);o([s()],C.prototype,"max",2);o([s()],C.prototype,"step",2);o([s()],C.prototype,"autocapitalize",2);o([s()],C.prototype,"autocorrect",2);o([s()],C.prototype,"autocomplete",2);o([s({type:Boolean})],C.prototype,"autofocus",2);o([s()],C.prototype,"enterkeyhint",2);o([s({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],C.prototype,"spellcheck",2);o([s()],C.prototype,"inputmode",2);o([g("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);o([g("step",{waitUntilFirstUpdate:!0})],C.prototype,"handleStepChange",1);o([g("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);C=o([ee("SynInput")],C);var Is="syn-input";C.define("syn-input");var Es=w({displayName:"SynInput",elementClass:C,events:{onSynBlur:"syn-blur",onSynChange:"syn-change",onSynClear:"syn-clear",onSynFocus:"syn-focus",onSynInput:"syn-input",onSynInvalid:"syn-invalid"},react:x,tagName:Is}),Ts=d`
  :host {
    /* Custom override for hiding the checkmark in menus it is not needed */
    --display-checkmark: flex;
  }

  .menu-item {
    color: var(--syn-typography-color-text);
    font-size: var(--syn-font-size-medium);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);
  }

  /**
   * Handling for slotted prefix and suffix
   */
  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-small);
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /**
   * Set the default font size to make icons appear correct
   */
  .menu-item .menu-item__prefix::slotted(syn-icon),
  .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-800);
    font-size: var(--syn-font-size-x-large);
  }

  :host(:focus-visible)  .menu-item .menu-item__prefix::slotted(syn-icon),
  :host(:focus-visible)  .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-0);
  }

  /**
   * Adjust the size of icons
   */
  .menu-item .menu-item__chevron,
  .menu-item .menu-item__check {
    display: var(--display-checkmark);
    font-size: var(--syn-font-size-x-large);
    width: var(--syn-font-size-x-large);
  }

  /**
   * This makes sure the chevron does not take any space if we do not have children
   */
  .menu-item .menu-item__chevron {
    display: none;
    margin-inline-start: var(--syn-spacing-small);
  }

  .menu-item .menu-item__check {
    color: var(--syn-color-primary-600);
    margin-inline-end: var(--syn-spacing-small);
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
    color: var(--syn-color-neutral-0);
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
   * Make sure to show the chevron if there are children
   */
  .menu-item--has-submenu .menu-item__chevron {
    display: flex;
  }

  /**
   * Adjustments for the spinner in loading state
   */
  .menu-item--loading syn-spinner {
    --indicator-color: currentColor;
    --track-width: 2px;

    font-size: var(--syn-font-size-medium);
    left: var(--syn-spacing-medium);
    opacity: 1;
    position: absolute;
    top: calc(50% - 0.5em);
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
`,Ls=d`
	/* stylelint-disable */
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    color: var(--syn-color-neutral-700);
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-2x-small);
    transition: var(--syn-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(syn-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading syn-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--syn-color-neutral-100);
    color: var(--syn-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  syn-popup::part(popup) {
    box-shadow: var(--syn-shadow-large);
    z-index: var(--syn-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl syn-popup::part(popup) {
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
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ds=class{constructor(e,t){this.popupRef=no(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var a;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="syn-menu-item"||(a=i.target.role)!=null&&a.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),a=i?.assignedElements({flatten:!0}).filter(h=>h.localName==="syn-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!a)return;const{left:n,top:l,width:p,height:c}=a.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?n+p:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?n+p:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const a of t.assignedElements())if(i=a.querySelectorAll("syn-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let a=1;a!==i.length;++a)i[a].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),a=["padding-top","border-top-width","margin-top"].reduce((r,n)=>{var l;const p=(l=t.get(n))!=null?l:new CSSUnitValue(0,"px"),h=(p instanceof CSSUnitValue?p:new CSSUnitValue(0,"px")).to("px");return r-h.value},0);this.skidding=a}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?u`
      <syn-popup
        ${lo(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </syn-popup>
    `:u` <slot name="submenu" hidden></slot> `}};function Ms(e,t){const i=ge({waitUntilFirstUpdated:!1},t);return a=>{var r,n;return n=class extends a{constructor(){super(...arguments),ue(this,r,!i.waitUntilFirstUpdated)}updated(l){if(!f(this,r)){oe(this,r,!0);return}const p=Array.from(l).filter(([h])=>e.includes(h));if(p.length===0){super.updated(l);return}const c=p.map(([h,k])=>({attribute:h,newValue:this[h],oldValue:k}));this.emit("syn-attributes-changed",{detail:c}),super.updated(l)}},r=new WeakMap,n}}var ne=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new K(this,"submenu"),this.submenuController=new Ds(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return xi(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return u`
      <div
        id="anchor"
        part="base"
        class=${v({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?u` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}};ne.styles=[z,Ls,Ts];ne.dependencies={"syn-icon":R,"syn-popup":T,"syn-spinner":rt};o([m("slot:not([name])")],ne.prototype,"defaultSlot",2);o([m(".menu-item")],ne.prototype,"menuItem",2);o([s()],ne.prototype,"type",2);o([s({type:Boolean,reflect:!0})],ne.prototype,"checked",2);o([s()],ne.prototype,"value",2);o([s({type:Boolean,reflect:!0})],ne.prototype,"loading",2);o([s({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);o([g("checked")],ne.prototype,"handleCheckedChange",1);o([g("disabled")],ne.prototype,"handleDisabledChange",1);o([g("type")],ne.prototype,"handleTypeChange",1);ne=o([Ms(["type","loading"],{waitUntilFirstUpdated:!0})],ne);var Fs="syn-menu-item";ne.define("syn-menu-item");w({displayName:"SynMenuItem",elementClass:ne,events:{},react:x,tagName:Fs});var Vs=d`
  :host {
    --display-divider: block;
  }

  .menu-label__divider {
    --spacing: 0;

    display: var(--display-divider);
    margin-bottom: var(--syn-spacing-x-small);
  }

  .menu-label {
    color: var(--syn-typography-color-text);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);
  }
`,Ns=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    color: var(--syn-color-neutral-500);
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,vt=class extends b{render(){return u`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}};vt.styles=[z,Ns,Vs];vt.dependencies={"syn-divider":ke};var Bs="syn-menu-label";vt.define("syn-menu-label");w({displayName:"SynMenuLabel",elementClass:vt,events:{},react:x,tagName:Bs});var qs="syn-menu";He.define("syn-menu");w({displayName:"SynMenu",elementClass:He,events:{onSynSelect:"syn-select"},react:x,tagName:qs});var Ps=d`
  :host {
    --border-color: var(--syn-color-neutral-300);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
  }

  .card {
    box-shadow: none;
  }

  /**
   * Header adjustments
   */
  .card__header {
    border: none;
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-large);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * Card body
   */
  .card__body {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-medium-regular);
  }

  /**
   * Card Footer
   */
  .card--has-footer .card__footer {
    border-top: none;
    padding: var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  /**
   * Cards that are sharp do not receive a border radius
   */
  .card--sharp {
    border-radius: var(--syn-border-radius-none);
  }

  /**
   * Do not apply border radius to sharp card images
   */
  .card--sharp .card__image {
    border-top-left-radius: var(--syn-border-radius-none);
    border-top-right-radius: var(--syn-border-radius-none);
  }

`,Rs=d`
	/* stylelint-disable */
  :host {
    --border-color: var(--syn-color-neutral-200);
    --border-radius: var(--syn-border-radius-medium);
    --border-width: 1px;
    --padding: var(--syn-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
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
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,_t=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer","header","image"),this.sharp=!1}render(){return u`
      <div
        part="base"
        class=${v({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};_t.styles=[z,Rs,Ps];o([s({type:Boolean,reflect:!0})],_t.prototype,"sharp",2);var js="syn-card";_t.define("syn-card");w({displayName:"SynCard",elementClass:_t,events:{},react:x,tagName:js});var Hs=d`
  .checkbox__control {
    border-radius: var(--syn-input-border-radius-small);
  }

  :host([data-user-invalid]) .checkbox__control {
    border-color: var(--syn-input-border-color-focus-error);
  }

  /**
   * Hover
   * Applies the hover state to the whole component
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):hover .checkbox__control {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /**
   * Checked/indeterminate + hover
   * Applies the hover state to the whole component
   */
  .checkbox.checkbox--checked:not(.checkbox--disabled):hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):hover .checkbox__control {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
  }

  .checkbox__label {
    line-height: var(--syn-line-height-normal);
    margin-inline-start: var(--syn-spacing-x-small);
    position: relative;
  }

  .checkbox--small .checkbox__label {
    top: -3px;
  }

  .checkbox--medium .checkbox__label {
    top: -3px;
  }

  .checkbox--large .checkbox__label {
    top: -2px;
  }
`,Us=d`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--syn-toggle-size-small);
    font-size: var(--syn-input-font-size-small);
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
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 2px;
    background-color: var(--syn-input-background-color);
    color: var(--syn-color-neutral-0);
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--syn-input-border-color-hover);
    background-color: var(--syn-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--syn-color-primary-600);
    background-color: var(--syn-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--syn-color-primary-500);
    background-color: var(--syn-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--syn-input-required-content);
    color: var(--syn-input-required-content-color);
    margin-inline-start: var(--syn-input-required-content-offset);
  }
`,W=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new K(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return u`
      <div
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${v({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${y(this.value)}
            .indeterminate=${Je(this.indeterminate)}
            .checked=${Je(this.checked)}
            .disabled=${this.disabled}
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
            ${this.checked?u`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?u`
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
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};W.styles=[z,Se,Us,$e,Hs];W.dependencies={"syn-icon":R};o([m('input[type="checkbox"]')],W.prototype,"input",2);o([_()],W.prototype,"hasFocus",2);o([s()],W.prototype,"title",2);o([s()],W.prototype,"name",2);o([s()],W.prototype,"value",2);o([s({reflect:!0})],W.prototype,"size",2);o([s({type:Boolean,reflect:!0})],W.prototype,"disabled",2);o([s({type:Boolean,reflect:!0})],W.prototype,"checked",2);o([s({type:Boolean,reflect:!0})],W.prototype,"indeterminate",2);o([De("checked")],W.prototype,"defaultChecked",2);o([s({reflect:!0})],W.prototype,"form",2);o([s({type:Boolean,reflect:!0})],W.prototype,"required",2);o([s({attribute:"help-text"})],W.prototype,"helpText",2);o([g("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);o([g(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],W.prototype,"handleStateChange",1);W=o([ee("SynCheckbox")],W);var Ws="syn-checkbox";W.define("syn-checkbox");w({displayName:"SynCheckbox",elementClass:W,events:{onSynBlur:"syn-blur",onSynChange:"syn-change",onSynFocus:"syn-focus",onSynInput:"syn-input",onSynInvalid:"syn-invalid"},react:x,tagName:Ws});var Ks=e=>e,pi=e=>Array.from(e.assignedElements({flatten:!0})),Gs=e=>e.tagName.toLocaleLowerCase()==="syn-option"?e:Array.from(e.querySelectorAll(":scope > syn-option")),Zs=e=>e.tagName.toLocaleLowerCase()==="syn-optgroup",ci=e=>e.map(Gs),Xs=e=>e.filter(Zs),di=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),ui=e=>{const t=document.createElement("div");return Ui(e,t),t.firstElementChild},$t=e=>e.tagName.toLocaleLowerCase()==="syn-option"?e:void 0,Ys=e=>{if(e){if(e instanceof HTMLElement)return $t(e);if(typeof e=="string"){const t=u`${yi(e)}`,i=ui(t);return $t(i)}if(Object.prototype.hasOwnProperty.call(e,"_$litType$")){const t=ui(e);return $t(t)}}},Qs=d`
  .combobox:not(.combobox--disabled) .combobox__display-input {
    cursor: text;
  }

  .listbox__options ::slotted(syn-option[hidden]), 
  .listbox__options ::slotted(syn-optgroup[hidden]) {
    display: none;
  }

  ${Di}
`,Js=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  /** The popup */
  .combobox {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
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
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  .combobox__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--syn-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .combobox__display-input::placeholder {
    color: var(--syn-input-placeholder-color);
  }

  .combobox:not(.combobox--disabled):hover .combobox__display-input {
    color: var(--syn-input-color-hover);
  }

  .combobox__display-input:focus {
    outline: none;
  }

  .combobox__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
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
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .combobox--standard:not(.combobox--disabled).combobox--open .combobox__inputs,
  .combobox--standard:not(.combobox--disabled).combobox--focused .combobox__inputs {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

/* Sizes */
  .combobox--small .combobox__inputs {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    min-height: var(--syn-input-height-small);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-small);
  }

  .combobox--small .combobox__clear {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .combobox--small .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .combobox--medium .combobox__inputs {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    min-height: var(--syn-input-height-medium);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-medium);
  }

  .combobox--medium .combobox__clear {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .combobox--medium .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .combobox--large .combobox__inputs {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    min-height: var(--syn-input-height-large);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-large);
  }

  .combobox--large .combobox__clear {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .combobox--large .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

/* Prefix and Suffix */
  .combobox__prefix,
  .combobox__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--syn-input-placeholder-color);
  }

  .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Clear button */
  .combobox__clear {
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

  .combobox__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .combobox__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .combobox__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--syn-spacing-small);
  }

  .combobox--open .combobox__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .combobox__listbox {
    display: block;
    position: relative;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .combobox__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .combobox__listbox ::slotted(small) {
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-500);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
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

  /* Clear button */
  .combobox__clear {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-spacing-large);
  }

  .combobox--small .combobox__clear {
    font-size: var(--syn-spacing-medium);
  }

  .combobox--large .combobox__clear {
    font-size: var(--syn-spacing-x-large);
  }

  .combobox--medium .combobox__clear {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Expand icon */
  .combobox__expand-icon {
    color: var(--syn-color-neutral-950);
    margin-inline-start: var(--syn-spacing-small);
  }

  .combobox--small .combobox__expand-icon {
    font-size: var(--syn-spacing-medium);
  }

  .combobox--medium .combobox__expand-icon {
    font-size: var(--syn-spacing-large);
  }

  .combobox--large .combobox__expand-icon {
    font-size: var(--syn-spacing-x-large);
  }

  /* Change combobox border on hover */
  .combobox:not(.combobox--disabled):hover .combobox__inputs {
    border-color: var(--syn-input-color-hover);
  }

  /* Prefix and Suffix */

  /* Small */
  .combobox--small .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .combobox--small .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .combobox--small .combobox__suffix::slotted(syn-icon),
  .combobox--small .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
  }

  /* Medium */
  .combobox--medium .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .combobox--medium .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .combobox--medium .combobox__suffix::slotted(syn-icon),
  .combobox--medium .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
  }

  /* Large */
  .combobox--large .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .combobox--large .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .combobox--large .combobox__suffix::slotted(syn-icon),
  .combobox--large .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
  }


  .combobox__prefix,
  .combobox__suffix {
    color: var(--syn-input-help-text-color);
  }



  /* Listbox */
  .combobox__listbox {
    /* @todo: Should be --syn-border-radius-medium, which should be set to 0 */
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-medium);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .combobox__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }
`,S=class extends b{constructor(){super(...arguments),this.formControlController=new ze(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label"),this.localize=new B(this),this.lastOptionValue="",this.isOptionRendererTriggered=!1,this.hasFocus=!1,this.displayLabel="",this.numberFilteredOptions=0,this.cachedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getOption=Ks,this.filter=(e,t)=>{let i=e?.textContent||"";e instanceof de&&(i=e.getTextLabel());const a=di(i),r=di(t);return a.includes(r)},this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{if(e.target.closest(".combobox__clear")===null){if(e.key==="Escape"&&(this.open&&!this.closeWatcher?(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||this.clearCombobox()),e.key==="Enter"){const a=this.getCurrentOption(),r=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;if(!this.open&&!r){setTimeout(()=>{e.defaultPrevented||this.formControlController.submit()});return}if(!this.open||a&&a.disabled)return;if(a){const n=this.lastOptionValue;this.setSelectedOption(a),this.value!==n&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})}this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),this.open||this.show(),this.selectNextOption(e.key==="ArrowDown")),["Home","End"].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),e.key==="Home"?this.displayInput.setSelectionRange(0,0):e.key==="End"&&this.displayInput.setSelectionRange(this.displayInput.value.length,this.displayInput.value.length))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}firstUpdated(){this.updateComplete.then(()=>{this.displayLabel=this.value}),this.formControlController.updateValidity()}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){if(this.disabled)return;const t=()=>this.open?this.hide():this.show();e.preventDefault(),t().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(e){e.key!=="Tab"&&this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.clearCombobox()}clearCombobox(){this.value!==""&&(this.value="",this.displayInput.value="",this.lastOptionValue="",this.setSelectedOption(void 0),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("syn-option"),a=this.lastOptionValue;i&&!i.disabled&&(this.setSelectedOption(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.hide(),this.displayInput.focus({preventScroll:!0}))}selectNextOption(e){const t=this.getAllFilteredOptions();if(t.length===0)return;const i=this.getCurrentOption(),a=t.indexOf(i);let r=Math.max(0,a);if(e){const n=a+1;r=n>t.length-1?0:n}else{const n=a-1;r=n<0?t.length-1:n}this.setCurrentOption(t[r]),gt(this.getCurrentOption(),this.listbox,"vertical","auto")}getAllFilteredOptions(){return this.getSlottedOptions().filter(e=>!e.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(e=>e.current)}setCurrentOption(e){const t=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),t.forEach(i=>{i.current=!1,i.setAttribute("aria-selected","false")}),e&&(e.current=!0,e.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",e.id))}setSelectedOption(e){var t,i;this.selectedOption=e;const a=((t=this.selectedOption)==null?void 0:t.value)||((i=this.selectedOption)==null?void 0:i.getTextLabel());e&&(this.lastOptionValue=a||""),this.value=a??this.displayInput.value,this.updateComplete.then(()=>{var r,n;this.displayLabel=(n=(r=this.selectedOption)==null?void 0:r.getTextLabel())!=null?n:this.displayInput.value,this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.value)}handleDisabledChange(){this.formControlController.setValidity(this.disabled),this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){this.displayLabel=this.value,this.createComboboxOptionsFromQuery(this.value),this.setCurrentOption(null)}async handleOpenChange(){if(this.open&&!this.disabled){if(this.numberFilteredOptions===0){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await Z(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:i,options:a}=M(this,"combobox.show",{dir:this.localize.dir()});await q(this.popup.popup,i,a),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await Z(this);const{keyframes:e,options:t}=M(this,"combobox.hide",{dir:this.localize.dir()});await q(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Promise.race([U(this,"syn-after-show"),U(this,"syn-error")])}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,U(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(e){var t;this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(a=>{const r=this.cachedOptions.find(c=>c.id===a.id)||a,n=this.getOption(r,e);let l=Ys(n);l||(l=r);const p=!(this.filter(l,e)||e==="");l.hidden=p,a.replaceWith(l),p||(this.numberFilteredOptions+=1)}),(t=this.getSlottedOptGroups().filter(a=>{const n=ci(Array.from(a.children)).flat().some(l=>!l.hidden);return a.hidden=!n,n})[0])==null||t.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1},0)}async handleInput(){const e=this.displayInput.value;this.value=e,await this.updateComplete,this.open=this.numberFilteredOptions>0,this.setSelectedOption(void 0),this.formControlController.updateValidity(),this.emit("syn-input")}handleChange(){this.selectedOption||(this.value=this.displayInput.value,this.updateComplete.then(()=>{this.formControlController.updateValidity()}),this.emit("syn-change"))}getSlottedOptions(){return ci(pi(this.defaultSlot)).flat()}getSlottedOptGroups(){return Xs(pi(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const e=this.getSlottedOptions(),t=this.getSlottedOptGroups();e.forEach((i,a)=>{i.id=i.id||`syn-combobox-option-${a}`}),t.forEach((i,a)=>{i.id=i.id||`syn-combobox-optgroup-${a}`}),this.cachedOptions=[...e]}handleDefaultSlotChange(){if(!this.isOptionRendererTriggered){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());return}this.cacheSlottedOptionsAndOptgroups(),this.createComboboxOptionsFromQuery(this.value),this.hasFocus&&this.value.length>0&&!this.open&&this.show()}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,a=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return u`
      <div
        part="form-control"
        class=${v({"form-control":!0,"form-control--has-help-text":a,"form-control--has-label":i,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${v({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--open":this.open,"combobox--placeholder-visible":n,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--top":this.placement==="top"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox__inputs"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="combobox__prefix"></slot>

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
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
                ?required=${this.required}
                .value=${this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${r?u`
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
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">
                <slot @slotchange=${this.handleDefaultSlotChange}></slot>      
              </div>
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
    `}};S.styles=[z,Se,Js,$e,Qs];S.dependencies={"syn-icon":R,"syn-popup":T};o([m(".combobox")],S.prototype,"popup",2);o([m(".combobox__inputs")],S.prototype,"combobox",2);o([m(".combobox__display-input")],S.prototype,"displayInput",2);o([m(".combobox__value-input")],S.prototype,"valueInput",2);o([m(".combobox__listbox")],S.prototype,"listbox",2);o([m("slot:not([name])")],S.prototype,"defaultSlot",2);o([_()],S.prototype,"hasFocus",2);o([_()],S.prototype,"displayLabel",2);o([_()],S.prototype,"selectedOption",2);o([_()],S.prototype,"numberFilteredOptions",2);o([_()],S.prototype,"cachedOptions",2);o([s()],S.prototype,"name",2);o([s()],S.prototype,"value",2);o([De()],S.prototype,"defaultValue",2);o([s({reflect:!0})],S.prototype,"size",2);o([s()],S.prototype,"placeholder",2);o([s({reflect:!0,type:Boolean})],S.prototype,"disabled",2);o([s({type:Boolean})],S.prototype,"clearable",2);o([s({reflect:!0,type:Boolean})],S.prototype,"open",2);o([s({type:Boolean})],S.prototype,"hoist",2);o([s()],S.prototype,"label",2);o([s({reflect:!0})],S.prototype,"placement",2);o([s({attribute:"help-text"})],S.prototype,"helpText",2);o([s({reflect:!0})],S.prototype,"form",2);o([s({reflect:!0,type:Boolean})],S.prototype,"required",2);o([s()],S.prototype,"getOption",2);o([s()],S.prototype,"filter",2);o([g(["filter","getOption"],{waitUntilFirstUpdate:!0})],S.prototype,"handlePropertiesChange",1);o([g("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);o([g("value",{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);o([g("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);S=o([ee("SynCombobox")],S);$("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var er="syn-combobox";S.define("syn-combobox");w({displayName:"SynCombobox",elementClass:S,events:{onSynChange:"syn-change",onSynClear:"syn-clear",onSynInput:"syn-input",onSynFocus:"syn-focus",onSynBlur:"syn-blur",onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide",onSynInvalid:"syn-invalid",onSynError:"syn-error"},react:x,tagName:er});var tr=d`
  .details {
    background-color: unset;
    border-color: var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    border-width: 0 0 var(--syn-border-width-small);
  }

  .details--disabled {
    opacity: var(--syn-opacity-50);
  }

  .details__summary-icon {
    align-self: flex-start;
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-spacing-large);

    /**
     * As we are using an alignment of "start"  instead of "center" make sure
     * the arrow starts on the same visual line as the first line of headline text
     */
    position: relative;
    top: 2px;
  }

  .details .details__summary {
    color: var(--syn-typography-color-text);
  }

  .details__header {
    gap: var(--syn-spacing-medium);
  }

  /**
   * As we are using top/down arrows for the details element,
   * we have to adjust the rotation of the icon when the details is open.
   */
  .details--open .details__summary-icon {
    rotate: -180deg;
  }

  /**
   * Adjustments for medium variant
   */
  .details--size-medium .details__header {
    padding: var(--syn-spacing-medium-large) 0;
  }

  .details--size-medium .details__content {
    font-size: var(--syn-font-size-small);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-medium) 0 var(--syn-spacing-large);
  }

  .details--size-medium .details__summary {
    font: var(--syn-body-medium-regular);
  }

  .details--size-medium .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--syn-spacing-large);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Adjustment for large variant
   */
  .details--size-large .details__header {
    padding: var(--syn-spacing-large) 0;
  }

  .details--size-large .details__content {
    font-size: var(--syn-font-size-medium);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-medium-large) 0 var(--syn-spacing-large);
  }

  .details--size-large .details__summary {
    font: var(--syn-body-large-regular);
  }

  .details--size-large .details__summary-icon {
    font-size: var(--syn-spacing-x-large);
  }

  .details--size-large .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--syn-spacing-x-large);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Mark the details as open by adjusting its label
   */
  .details--open .details__summary {
    font-weight: var(--syn-font-weight-bold);
  }

  /**
   * Add a visually visible hover effect to the summary element
   */
  .details:not(.details--disabled) .details__header:hover .details__summary,
  .details:not(.details--disabled) .details__header:hover .details__summary-icon {
    color: var(--syn-color-primary-700);
  }

  /**
   *  Contained style
   */
  .details--contained {
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    border-width: var(--syn-panel-border-width);
  }

  .details--contained .details__header:focus-visible {
    border-radius: var(--syn-border-radius-medium);
  }

  .details--size-medium.details--contained .details__header {
    padding: var(--syn-spacing-medium-large) var(--syn-spacing-large);
  }

  .details--size-medium.details--contained .details__content {
    padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .details--size-large.details--contained .details__header {
    padding: var(--syn-spacing-large);
  }

  .details--size-large.details--contained .details__content {
    padding: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-large);
  }
`,ir=d`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--syn-color-neutral-200);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--syn-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
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
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
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
    padding: var(--syn-spacing-medium);
  }
`,le=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size="medium"}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("syn-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Z(this.body);const{keyframes:t,options:i}=M(this,"details.show",{dir:this.localize.dir()});await q(this.body,ei(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("syn-after-show")}else{if(this.emit("syn-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Z(this.body);const{keyframes:t,options:i}=M(this,"details.hide",{dir:this.localize.dir()});await q(this.body,ei(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("syn-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,U(this,"syn-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,U(this,"syn-after-hide")}render(){return u`
      <details
        part="base"
        class=${v({details:!0,"details--size-medium":this.size==="medium","details--size-large":this.size==="large","details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
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
              <syn-icon library="system" name="chevron-down"></syn-icon>
            </slot>
            <slot name="collapse-icon">
              <syn-icon library="system" name="chevron-down"></syn-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};le.styles=[z,ir,tr];le.dependencies={"syn-icon":R};o([m(".details")],le.prototype,"details",2);o([m(".details__header")],le.prototype,"header",2);o([m(".details__body")],le.prototype,"body",2);o([m(".details__expand-icon-slot")],le.prototype,"expandIconSlot",2);o([s({type:Boolean,reflect:!0})],le.prototype,"open",2);o([s()],le.prototype,"summary",2);o([s({type:Boolean,reflect:!0})],le.prototype,"disabled",2);o([s({type:Boolean,reflect:!0})],le.prototype,"contained",2);o([s({reflect:!0})],le.prototype,"size",2);o([g("open",{waitUntilFirstUpdate:!0})],le.prototype,"handleOpenChange",1);le=o([ee("SynDetails")],le);$("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});$("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var or="syn-details";le.define("syn-details");w({displayName:"SynDetails",elementClass:le,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide"},react:x,tagName:or});var ar=d`
	/* stylelint-disable */
  :host {
    --width: 31rem;
    --header-spacing: var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--syn-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--syn-spacing-2x-large));
    max-height: calc(100% - var(--syn-spacing-2x-large));
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    box-shadow: var(--syn-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--syn-font-size-large);
    line-height: var(--syn-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--syn-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(syn-button:not(:first-of-type)) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--syn-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`,sr=d`
  :host {
    /**
     * Used as the default padding for the dialog title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);
  }

  .dialog__panel {
    border: var(--syn-spacing-4x-small) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-large);
  }

  .dialog__header-actions {
    align-items: flex-start;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  /**
   * We need this to make sure we are big enough as defined in the layout
   * When omitting this statement, we will get rounding problems via line-height
   */
  .dialog__title,
  .dialog__header-actions {
    min-height: 88px;
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }

  .dialog__title {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
  }
`,xe=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer"),this.localize=new B(this),this.modal=new Fi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Qe(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Be(this),this.removeOpenListeners()}requestClose(e){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=M(this,"dialog.denyClose",{dir:this.localize.dir()});q(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Qe(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Z(this.dialog),Z(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=M(this,"dialog.show",{dir:this.localize.dir()}),i=M(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([q(this.panel,t.keyframes,t.options),q(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{yt(this),this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Z(this.dialog),Z(this.overlay)]);const e=M(this,"dialog.hide",{dir:this.localize.dir()}),t=M(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([q(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),q(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Be(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,U(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,U(this,"syn-after-hide")}render(){return u`
      <div
        part="base"
        class=${v({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${y(this.noHeader?this.label:void 0)}
          aria-labelledby=${y(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":u`
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
    `}};xe.styles=[z,ar,sr];xe.dependencies={"syn-icon-button":j};o([m(".dialog")],xe.prototype,"dialog",2);o([m(".dialog__panel")],xe.prototype,"panel",2);o([m(".dialog__overlay")],xe.prototype,"overlay",2);o([s({type:Boolean,reflect:!0})],xe.prototype,"open",2);o([s({reflect:!0})],xe.prototype,"label",2);o([s({attribute:"no-header",type:Boolean,reflect:!0})],xe.prototype,"noHeader",2);o([g("open",{waitUntilFirstUpdate:!0})],xe.prototype,"handleOpenChange",1);$("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});$("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});$("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});$("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var rr="syn-dialog";xe.define("syn-dialog");w({displayName:"SynDialog",elementClass:xe,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide",onSynInitialFocus:"syn-initial-focus",onSynRequestClose:"syn-request-close"},react:x,tagName:rr});var nr="syn-divider";ke.define("syn-divider");w({displayName:"SynDivider",elementClass:ke,events:{},react:x,tagName:nr});var lr="syn-drawer";pe.define("syn-drawer");w({displayName:"SynDrawer",elementClass:pe,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide",onSynInitialFocus:"syn-initial-focus",onSynRequestClose:"syn-request-close"},react:x,tagName:lr});var pr="syn-dropdown";re.define("syn-dropdown");w({displayName:"SynDropdown",elementClass:re,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide"},react:x,tagName:pr});var cr=d`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`,_e=class extends b{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(t=>{t!==e.target&&t.parentNode===e.target.parentNode&&t.removeAttribute("open")})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return u`
      <div 
        part="base"
        class=${v({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};_e.styles=[z,cr];o([fi({selector:"syn-details"})],_e.prototype,"detailsInDefaultSlot",2);o([s({attribute:"close-others",type:Boolean})],_e.prototype,"closeOthers",2);o([s({reflect:!0,type:Boolean})],_e.prototype,"contained",2);o([s({reflect:!0})],_e.prototype,"size",2);o([g("size",{waitUntilFirstUpdate:!0})],_e.prototype,"handleSizeChange",1);o([g("contained",{waitUntilFirstUpdate:!0})],_e.prototype,"handleContainedChange",1);_e=o([ee("SynAccordion")],_e);var dr="syn-accordion";_e.define("syn-accordion");w({displayName:"SynAccordion",elementClass:_e,events:{},react:x,tagName:dr});var ur="syn-alert";H.define("syn-alert");w({displayName:"SynAlert",elementClass:H,events:{onSynShow:"syn-show",onSynAfterShow:"syn-after-show",onSynHide:"syn-hide",onSynAfterHide:"syn-after-hide"},react:x,tagName:ur});var mr=d`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-medium-bold);
    height: var(--syn-spacing-large);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-typography-color-text-inverted);
  }

  .badge--success {
    background-color: var(--syn-color-success-500);
    color: var(--syn-typography-color-text);
  }

  .badge--neutral {
    background-color: var(--syn-color-neutral-800);
    color: var(--syn-typography-color-text-inverted);
  }

  .badge--warning {
    background-color: var(--syn-color-warning-400);
    color: var(--syn-typography-color-text);
  }

  .badge--danger {
    background-color: var(--syn-color-error-600);
    color: var(--syn-typography-color-text-inverted);
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
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`,hr=d`
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
`,qe=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.variant="primary"}render(){return u`
      <span
        part="base"
        class=${v({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}};qe.styles=[z,hr,mr];o([s({reflect:!0})],qe.prototype,"variant",2);qe=o([ee("SynBadge")],qe);var gr="syn-badge";qe.define("syn-badge");w({displayName:"SynBadge",elementClass:qe,events:{},react:x,tagName:gr});var fr=d`
  .breadcrumb-item {
    color: var(--syn-color-neutral-500);
    font-size: var(--syn-font-size-x-small);
    font-weight: var(--syn-font-weight-normal);
  }

  /**
   * Make sure to remove the border radius.
   * Without this, focus will be rounded
   */
  .breadcrumb-item__label {
    border-radius: var(--syn-border-radius-none);
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
    color: var(--syn-color-neutral-500);
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
`,yr=d`
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
`,Oe=class extends b{constructor(){super(...arguments),this.hasSlotController=new K(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="syn-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return u`
      <div
        part="base"
        class=${v({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?u`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${y(this.target?this.target:void 0)}"
                rel=${y(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?u`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?u`
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
    `}};Oe.styles=[z,yr,fr];o([m("slot:not([name])")],Oe.prototype,"defaultSlot",2);o([_()],Oe.prototype,"renderType",2);o([s()],Oe.prototype,"href",2);o([s()],Oe.prototype,"target",2);o([s()],Oe.prototype,"rel",2);o([g("href",{waitUntilFirstUpdate:!0})],Oe.prototype,"hrefChanged",1);var br="syn-breadcrumb-item";Oe.define("syn-breadcrumb-item");w({displayName:"SynBreadcrumbItem",elementClass:Oe,events:{},react:x,tagName:br});var vr=d`
  /* Write custom CSS here */
`,_r=d`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ve=class extends b{constructor(){super(...arguments),this.localize=new B(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="syn-breadcrumb-item");e.forEach((t,i)=>{const a=t.querySelector('[slot="separator"]');a===null?t.append(this.getSeparator()):a.hasAttribute("data-default")&&a.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),u`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}};Ve.styles=[z,_r,vr];Ve.dependencies={"syn-icon":R};o([m("slot")],Ve.prototype,"defaultSlot",2);o([m('slot[name="separator"]')],Ve.prototype,"separatorSlot",2);o([s()],Ve.prototype,"label",2);var xr="syn-breadcrumb";Ve.define("syn-breadcrumb");w({displayName:"SynBreadcrumb",elementClass:Ve,events:{},react:x,tagName:xr});var wr="syn-button-group";Me.define("syn-button-group");w({displayName:"SynButtonGroup",elementClass:Me,events:{},react:x,tagName:wr});var zr="syn-button";E.define("syn-button");w({displayName:"SynButton",elementClass:E,events:{onSynBlur:"syn-blur",onSynFocus:"syn-focus",onSynInvalid:"syn-invalid"},react:x,tagName:zr});const kr=JSON.parse(`[{"name":"10k","version":10,"popularity":1275,"codepoint":59729,"unsupported_families":[],"categories":["av"],"tags":["10000","10K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"10mp","version":10,"popularity":668,"codepoint":59730,"unsupported_families":[],"categories":["image"],"tags":["10","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"11mp","version":10,"popularity":611,"codepoint":59731,"unsupported_families":[],"categories":["image"],"tags":["11","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"123","version":1,"popularity":5943,"codepoint":60301,"unsupported_families":[],"categories":["action"],"tags":["1","2","3","digit","numbers","symbol"],"sizes_px":[20,24]},{"name":"12mp","version":10,"popularity":763,"codepoint":59732,"unsupported_families":[],"categories":["image"],"tags":["12","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"13mp","version":10,"popularity":581,"codepoint":59733,"unsupported_families":[],"categories":["image"],"tags":["13","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"14mp","version":10,"popularity":560,"codepoint":59734,"unsupported_families":[],"categories":["image"],"tags":["14","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"15mp","version":10,"popularity":579,"codepoint":59735,"unsupported_families":[],"categories":["image"],"tags":["15","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"16mp","version":10,"popularity":578,"codepoint":59736,"unsupported_families":[],"categories":["image"],"tags":["16","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"17mp","version":10,"popularity":568,"codepoint":59737,"unsupported_families":[],"categories":["image"],"tags":["17","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"18_up_rating","version":1,"popularity":761,"codepoint":63741,"unsupported_families":[],"categories":["social"],"tags":[],"sizes_px":[20,24]},{"name":"18mp","version":10,"popularity":676,"codepoint":59738,"unsupported_families":[],"categories":["image"],"tags":["18","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"19mp","version":10,"popularity":555,"codepoint":59739,"unsupported_families":[],"categories":["image"],"tags":["19","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"1k","version":10,"popularity":903,"codepoint":59740,"unsupported_families":[],"categories":["av"],"tags":["1000","1K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"1k_plus","version":10,"popularity":821,"codepoint":59741,"unsupported_families":[],"categories":["av"],"tags":["+","1000","1K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"1x_mobiledata","version":9,"popularity":1742,"codepoint":61389,"unsupported_families":[],"categories":["device"],"tags":["1x","alphabet","cellular","character","digit","font","letters","mobile","mobiledata","network","numbers","phone","signal","speed","symbol","text","type","wifi"],"sizes_px":[24]},{"name":"20mp","version":10,"popularity":611,"codepoint":59742,"unsupported_families":[],"categories":["image"],"tags":["20","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"21mp","version":10,"popularity":578,"codepoint":59743,"unsupported_families":[],"categories":["image"],"tags":["21","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"22mp","version":10,"popularity":555,"codepoint":59744,"unsupported_families":[],"categories":["image"],"tags":["22","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"23mp","version":10,"popularity":650,"codepoint":59745,"unsupported_families":[],"categories":["image"],"tags":["23","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"24mp","version":10,"popularity":1008,"codepoint":59746,"unsupported_families":[],"categories":["image"],"tags":["24","camera","digits","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"2k","version":10,"popularity":845,"codepoint":59747,"unsupported_families":[],"categories":["av"],"tags":["2000","2K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"2k_plus","version":10,"popularity":634,"codepoint":59748,"unsupported_families":[],"categories":["av"],"tags":["+","2k","alphabet","character","digit","font","letters","numbers","plus","symbol","text","type"],"sizes_px":[24]},{"name":"2mp","version":10,"popularity":573,"codepoint":59749,"unsupported_families":[],"categories":["image"],"tags":["2","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"30fps","version":10,"popularity":1347,"codepoint":61390,"unsupported_families":[],"categories":["device"],"tags":["30fps","alphabet","camera","character","digit","font","fps","frames","letters","numbers","symbol","text","type","video"],"sizes_px":[24]},{"name":"30fps_select","version":10,"popularity":1106,"codepoint":61391,"unsupported_families":[],"categories":["image"],"tags":["30","camera","digits","fps","frame","frequency","image","numbers","per","rate","second","seconds","select","video"],"sizes_px":[24]},{"name":"360","version":14,"popularity":9049,"codepoint":58743,"unsupported_families":[],"categories":["maps"],"tags":["360","arrow","av","camera","direction","rotate","rotation","virtual reality","vr"],"sizes_px":[24]},{"name":"3d_rotation","version":18,"popularity":14916,"codepoint":59469,"unsupported_families":[],"categories":["action"],"tags":["3","3d","D","alphabet","arrow","arrows","av","camera","character","digit","font","letters","numbers","rotation","symbol","text","type","virtual_reality","vr"],"sizes_px":[24]},{"name":"3g_mobiledata","version":9,"popularity":1140,"codepoint":61392,"unsupported_families":[],"categories":["device"],"tags":["3g","alphabet","cellular","character","digit","font","letters","mobile","mobiledata","network","numbers","phone","signal","speed","symbol","text","type","wifi"],"sizes_px":[24]},{"name":"3k","version":10,"popularity":698,"codepoint":59750,"unsupported_families":[],"categories":["av"],"tags":["3000","3K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"3k_plus","version":10,"popularity":634,"codepoint":59751,"unsupported_families":[],"categories":["av"],"tags":["+","3000","3K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"3mp","version":10,"popularity":596,"codepoint":59752,"unsupported_families":[],"categories":["image"],"tags":["3","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"3p","version":11,"popularity":7820,"codepoint":61393,"unsupported_families":[],"categories":["communication"],"tags":["3","3p","account","avatar","bubble","chat","comment","communicate","face","human","message","party","people","person","profile","speech","user"],"sizes_px":[24]},{"name":"4g_mobiledata","version":9,"popularity":1975,"codepoint":61394,"unsupported_families":[],"categories":["device"],"tags":["4g","alphabet","cellular","character","digit","font","letters","mobile","mobiledata","network","numbers","phone","signal","speed","symbol","text","type","wifi"],"sizes_px":[24]},{"name":"4g_plus_mobiledata","version":9,"popularity":1338,"codepoint":61395,"unsupported_families":[],"categories":["device"],"tags":["4g","alphabet","cellular","character","digit","font","letters","mobile","mobiledata","network","numbers","phone","plus","signal","speed","symbol","text","type","wifi"],"sizes_px":[24]},{"name":"4k","version":11,"popularity":1942,"codepoint":57458,"unsupported_families":[],"categories":["av"],"tags":["4000","4K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"4k_plus","version":10,"popularity":942,"codepoint":59753,"unsupported_families":[],"categories":["av"],"tags":["+","4000","4K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"4mp","version":10,"popularity":550,"codepoint":59754,"unsupported_families":[],"categories":["image"],"tags":["4","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"5g","version":13,"popularity":2557,"codepoint":61240,"unsupported_families":[],"categories":["av"],"tags":["5g","alphabet","cellular","character","data","digit","font","letters","mobile","network","numbers","phone","signal","speed","symbol","text","type","wifi"],"sizes_px":[20,24]},{"name":"5k","version":10,"popularity":714,"codepoint":59755,"unsupported_families":[],"categories":["av"],"tags":["5000","5K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"5k_plus","version":10,"popularity":664,"codepoint":59756,"unsupported_families":[],"categories":["av"],"tags":["+","5000","5K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"5mp","version":10,"popularity":583,"codepoint":59757,"unsupported_families":[],"categories":["image"],"tags":["5","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"60fps","version":10,"popularity":1098,"codepoint":61396,"unsupported_families":[],"categories":["device"],"tags":["60fps","camera","digit","fps","frames","numbers","symbol","video"],"sizes_px":[24]},{"name":"60fps_select","version":10,"popularity":1023,"codepoint":61397,"unsupported_families":[],"categories":["image"],"tags":["60","camera","digits","fps","frame","frequency","numbers","per","rate","second","seconds","select","video"],"sizes_px":[24]},{"name":"6_ft_apart","version":9,"popularity":2411,"codepoint":61982,"unsupported_families":[],"categories":["social"],"tags":["6","apart","body","covid","distance","feet","ft","human","people","person","social"],"sizes_px":[24]},{"name":"6k","version":10,"popularity":633,"codepoint":59758,"unsupported_families":[],"categories":["av"],"tags":["6000","6K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"6k_plus","version":10,"popularity":632,"codepoint":59759,"unsupported_families":[],"categories":["av"],"tags":["+","6000","6K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"6mp","version":10,"popularity":546,"codepoint":59760,"unsupported_families":[],"categories":["image"],"tags":["6","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"7k","version":10,"popularity":648,"codepoint":59761,"unsupported_families":[],"categories":["av"],"tags":["7000","7K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"7k_plus","version":10,"popularity":633,"codepoint":59762,"unsupported_families":[],"categories":["av"],"tags":["+","7000","7K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"7mp","version":10,"popularity":546,"codepoint":59763,"unsupported_families":[],"categories":["image"],"tags":["7","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"8k","version":11,"popularity":783,"codepoint":59764,"unsupported_families":[],"categories":["av"],"tags":["8000","8K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"8k_plus","version":11,"popularity":708,"codepoint":59765,"unsupported_families":[],"categories":["av"],"tags":["+","7000","8K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"8mp","version":10,"popularity":550,"codepoint":59766,"unsupported_families":[],"categories":["image"],"tags":["8","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"9k","version":10,"popularity":641,"codepoint":59767,"unsupported_families":[],"categories":["av"],"tags":["9000","9K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"9k_plus","version":10,"popularity":707,"codepoint":59768,"unsupported_families":[],"categories":["av"],"tags":["+","9000","9K","alphabet","character","digit","display","font","letters","numbers","pixel","pixels","plus","resolution","symbol","text","type","video"],"sizes_px":[24]},{"name":"9mp","version":10,"popularity":546,"codepoint":59769,"unsupported_families":[],"categories":["image"],"tags":["9","camera","digit","font","image","letters","megapixel","megapixels","mp","numbers","pixel","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"abc","version":1,"popularity":3455,"codepoint":60308,"unsupported_families":[],"categories":["action"],"tags":["alphabet","character","font","letters","symbol","text","type"],"sizes_px":[20,24]},{"name":"ac_unit","version":12,"popularity":18722,"codepoint":60219,"unsupported_families":[],"categories":["places"],"tags":["ac","air","cold","conditioner","flake","snow","snowflake","temperature","unit","weather","winter"],"sizes_px":[24]},{"name":"access_alarm","version":12,"popularity":2236,"codepoint":57744,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[24]},{"name":"access_alarms","version":12,"popularity":2445,"codepoint":57745,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[24]},{"name":"access_time","version":12,"popularity":10488,"codepoint":57746,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[24]},{"name":"access_time_filled","version":10,"popularity":4969,"codepoint":61398,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[24]},{"name":"accessibility","version":13,"popularity":27186,"codepoint":59470,"unsupported_families":[],"categories":["action"],"tags":["accessibility","accessible","body","handicap","help","human","people","person"],"sizes_px":[24]},{"name":"accessibility_new","version":13,"popularity":25267,"codepoint":59692,"unsupported_families":[],"categories":["action"],"tags":["accessibility","accessible","body","handicap","help","human","new","people","person"],"sizes_px":[24]},{"name":"accessible","version":13,"popularity":14231,"codepoint":59668,"unsupported_families":[],"categories":["action"],"tags":["accessibility","accessible","body","handicap","help","human","people","person","wheelchair"],"sizes_px":[24]},{"name":"accessible_forward","version":13,"popularity":6909,"codepoint":59700,"unsupported_families":[],"categories":["action"],"tags":["accessibility","accessible","body","forward","handicap","help","human","people","person","wheelchair"],"sizes_px":[24]},{"name":"account_balance","version":19,"popularity":88454,"codepoint":59471,"unsupported_families":[],"categories":["action"],"tags":["account","balance","bank","bill","building","card","cash","coin","commerce","credit","currency","dollars","finance","government","money","online","pay","payment"],"sizes_px":[24]},{"name":"account_balance_wallet","version":12,"popularity":71665,"codepoint":59472,"unsupported_families":[],"categories":["action"],"tags":["account","balance","bank","bill","card","cash","coin","commerce","credit","currency","dollars","finance","money","online","pay","payment","wallet"],"sizes_px":[24]},{"name":"account_box","version":14,"popularity":47842,"codepoint":59473,"unsupported_families":[],"categories":["action"],"tags":["account","avatar","box","face","human","people","person","profile","square","thumbnail","user"],"sizes_px":[20,24]},{"name":"account_circle","version":20,"popularity":616273,"codepoint":59475,"unsupported_families":[],"categories":["action"],"tags":["account","avatar","circle","face","human","people","person","profile","thumbnail","user"],"sizes_px":[20,24]},{"name":"account_tree","version":12,"popularity":45872,"codepoint":59770,"unsupported_families":[],"categories":["notification"],"tags":["account","analytics","chart","connect","data","diagram","flow","graph","infographic","measure","metrics","process","square","statistics","structure","tracking","tree"],"sizes_px":[24]},{"name":"ad_units","version":13,"popularity":3009,"codepoint":61241,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","ad","banner","cell","device","hardware","iOS","mobile","notification","notifications","phone","tablet","top","units"],"sizes_px":[24]},{"name":"adb","version":12,"popularity":4746,"codepoint":58894,"unsupported_families":[],"categories":["notification"],"tags":["adb","android","bridge","debug"],"sizes_px":[24]},{"name":"add","version":21,"popularity":340410,"codepoint":57669,"unsupported_families":[],"categories":["content"],"tags":["+","add","new symbol","plus","symbol"],"sizes_px":[24]},{"name":"add_a_photo","version":14,"popularity":35864,"codepoint":58425,"unsupported_families":[],"categories":["image"],"tags":["+","a photo","add","camera","lens","new","photography","picture","plus","symbol"],"sizes_px":[24]},{"name":"add_alarm","version":13,"popularity":1323,"codepoint":57747,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[24]},{"name":"add_alert","version":16,"popularity":6739,"codepoint":57347,"unsupported_families":[],"categories":["alert"],"tags":["+","active","add","alarm","alert","bell","chime","new","notifications","notify","plus","reminder","ring","sound","symbol"],"sizes_px":[24]},{"name":"add_box","version":13,"popularity":43153,"codepoint":57670,"unsupported_families":[],"categories":["content"],"tags":["add","box","new square","plus","symbol"],"sizes_px":[24]},{"name":"add_business","version":17,"popularity":10498,"codepoint":59177,"unsupported_families":[],"categories":["maps"],"tags":["+","add","bill","building","business","card","cash","coin","commerce","company","credit","currency","dollars","market","money","new","online","pay","payment","plus","shop","shopping","store","storefront","symbol"],"sizes_px":[20,24]},{"name":"add_card","version":1,"popularity":6469,"codepoint":60294,"unsupported_families":[],"categories":["action"],"tags":["+","add","bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","money","new","online","pay","payment","plus","price","shopping","symbol"],"sizes_px":[20,24]},{"name":"add_chart","version":11,"popularity":4646,"codepoint":59771,"unsupported_families":[],"categories":["editor"],"tags":["+","add","analytics","bar","bars","chart","data","diagram","graph","infographic","measure","metrics","new","plus","statistics","symbol","tracking"],"sizes_px":[24]},{"name":"add_circle","version":13,"popularity":129595,"codepoint":57671,"unsupported_families":[],"categories":["content"],"tags":["+","add","circle","counter","create","new","plus"],"sizes_px":[24]},{"name":"add_circle_outline","version":16,"popularity":145795,"codepoint":57672,"unsupported_families":[],"categories":["content"],"tags":["+","add","circle","create","new","outline","plus"],"sizes_px":[24]},{"name":"add_comment","version":11,"popularity":9418,"codepoint":57958,"unsupported_families":[],"categories":["editor"],"tags":["+","add","bubble","chat","comment","communicate","feedback","message","new","plus","speech","symbol"],"sizes_px":[24]},{"name":"add_home","version":1,"popularity":1534,"codepoint":63723,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"add_home_work","version":1,"popularity":1473,"codepoint":63725,"unsupported_families":[],"categories":["navigation"],"tags":[],"sizes_px":[20,24]},{"name":"add_ic_call","version":12,"popularity":4992,"codepoint":59772,"unsupported_families":[],"categories":["communication"],"tags":["+","add","call","cell","contact","device","hardware","mobile","new","phone","plus","symbol","telephone"],"sizes_px":[24]},{"name":"add_link","version":11,"popularity":9784,"codepoint":57720,"unsupported_families":[],"categories":["content"],"tags":["add","attach","clip","link","new","plus","symbol"],"sizes_px":[24]},{"name":"add_location","version":16,"popularity":6370,"codepoint":58727,"unsupported_families":[],"categories":["maps"],"tags":["+","add","destination","direction","location","maps","new","pin","place","plus","stop","symbol"],"sizes_px":[24]},{"name":"add_location_alt","version":13,"popularity":7819,"codepoint":61242,"unsupported_families":[],"categories":["maps"],"tags":["+","add","alt","destination","direction","location","maps","new","pin","place","plus","stop","symbol"],"sizes_px":[24]},{"name":"add_moderator","version":12,"popularity":5744,"codepoint":59773,"unsupported_families":[],"categories":["social"],"tags":["+","add","certified","moderator","new","plus","privacy","private","protect","protection","security","shield","symbol","verified"],"sizes_px":[24]},{"name":"add_photo_alternate","version":12,"popularity":24114,"codepoint":58430,"unsupported_families":[],"categories":["image"],"tags":["+","add","alternate","image","landscape","mountain","mountains","new","photo","photography","picture","plus","symbol"],"sizes_px":[24]},{"name":"add_reaction","version":9,"popularity":5862,"codepoint":57811,"unsupported_families":[],"categories":["social"],"tags":["+","add","emoji","emotions","expressions","face","feelings","glad","happiness","happy","icon","icons","insert","like","mood","new","person","pleased","plus","smile","smiling","social","survey","symbol"],"sizes_px":[24]},{"name":"add_road","version":12,"popularity":4963,"codepoint":61243,"unsupported_families":[],"categories":["maps"],"tags":["+","add","destination","direction","highway","maps","new","plus","road","stop","street","symbol","traffic"],"sizes_px":[20,24]},{"name":"add_shopping_cart","version":15,"popularity":57121,"codepoint":59476,"unsupported_families":[],"categories":["action"],"tags":["add","card","cart","cash","checkout","coin","commerce","credit","currency","dollars","money","online","pay","payment","plus","shopping"],"sizes_px":[24]},{"name":"add_task","version":6,"popularity":26765,"codepoint":62010,"unsupported_families":[],"categories":["action"],"tags":["+","add","approve","check","circle","completed","increase","mark","ok","plus","select","task","tick","yes"],"sizes_px":[24]},{"name":"add_to_drive","version":18,"popularity":6658,"codepoint":58972,"unsupported_families":[],"categories":["action"],"tags":["add","app","application","backup","cloud","drive","files","folders","gdrive","google","recovery","shortcut","storage"],"sizes_px":[20,24]},{"name":"add_to_home_screen","version":12,"popularity":2158,"codepoint":57854,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","add to","arrow","cell","device","hardware","home","iOS","mobile","phone","screen","tablet","up"],"sizes_px":[24]},{"name":"add_to_photos","version":12,"popularity":4571,"codepoint":58269,"unsupported_families":[],"categories":["image"],"tags":["add","collection","image","landscape","mountain","mountains","photo","photography","photos","picture","plus","to"],"sizes_px":[24]},{"name":"add_to_queue","version":11,"popularity":3748,"codepoint":57436,"unsupported_families":[],"categories":["av"],"tags":["+","Android","OS","add","chrome","desktop","device","display","hardware","iOS","mac","monitor","new","plus","queue","screen","symbol","to","web","window"],"sizes_px":[24]},{"name":"addchart","version":13,"popularity":10629,"codepoint":61244,"unsupported_families":[],"categories":["action"],"tags":["+","addchart","analytics","bar","bars","chart","data","diagram","graph","infographic","measure","metrics","new","plus","statistics","symbol","tracking"],"sizes_px":[24]},{"name":"adf_scanner","version":2,"popularity":1191,"codepoint":60122,"unsupported_families":[],"categories":["hardware"],"tags":["adf","document","feeder","machine","office","scan","scanner"],"sizes_px":[20,24]},{"name":"adjust","version":12,"popularity":15601,"codepoint":58270,"unsupported_families":[],"categories":["image"],"tags":["adjust","alter","auto click","center","circle","circles","dot","fix","focus","image","move","target"],"sizes_px":[24]},{"name":"admin_panel_settings","version":13,"popularity":63945,"codepoint":61245,"unsupported_families":[],"categories":["action"],"tags":["account","admin","avatar","certified","face","human","panel","people","person","privacy","private","profile","protect","protection","security","settings","shield","user","verified"],"sizes_px":[20,24]},{"name":"ads_click","version":3,"popularity":24020,"codepoint":59234,"unsupported_families":[],"categories":["action"],"tags":["ads","browser","click","clicks","cursor","internet","target","traffic","web"],"sizes_px":[20,24]},{"name":"agriculture","version":11,"popularity":9501,"codepoint":60025,"unsupported_families":[],"categories":["maps"],"tags":["agriculture","automobile","car","cars","cultivation","farm","harvest","maps","tractor","transport","travel","truck","vehicle"],"sizes_px":[20,24]},{"name":"air","version":10,"popularity":13885,"codepoint":61400,"unsupported_families":[],"categories":["device"],"tags":["air","blowing","breeze","flow","wave","weather","wind"],"sizes_px":[24]},{"name":"airline_seat_flat","version":12,"popularity":1406,"codepoint":58928,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","business","class","first","flat","human","people","person","rest","seat","sleep","travel"],"sizes_px":[24]},{"name":"airline_seat_flat_angled","version":12,"popularity":1135,"codepoint":58929,"unsupported_families":[],"categories":["notification"],"tags":["airline","angled","body","business","class","first","flat","human","people","person","rest","seat","sleep","travel"],"sizes_px":[24]},{"name":"airline_seat_individual_suite","version":11,"popularity":1570,"codepoint":58930,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","business","class","first","human","individual","people","person","rest","seat","sleep","suite","travel"],"sizes_px":[24]},{"name":"airline_seat_legroom_extra","version":12,"popularity":962,"codepoint":58931,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","extra","feet","human","leg","legroom","people","person","seat","sitting","space","travel"],"sizes_px":[24]},{"name":"airline_seat_legroom_normal","version":12,"popularity":1018,"codepoint":58932,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","feet","human","leg","legroom","normal","people","person","seat","sitting","space","travel"],"sizes_px":[24]},{"name":"airline_seat_legroom_reduced","version":12,"popularity":918,"codepoint":58933,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","feet","human","leg","legroom","people","person","reduced","seat","sitting","space","travel"],"sizes_px":[24]},{"name":"airline_seat_recline_extra","version":12,"popularity":2605,"codepoint":58934,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","extra","feet","human","leg","legroom","people","person","seat","sitting","space","travel"],"sizes_px":[24]},{"name":"airline_seat_recline_normal","version":12,"popularity":3857,"codepoint":58935,"unsupported_families":[],"categories":["notification"],"tags":["airline","body","extra","feet","human","leg","legroom","normal","people","person","recline","seat","sitting","space","travel"],"sizes_px":[24]},{"name":"airline_stops","version":2,"popularity":1854,"codepoint":59344,"unsupported_families":[],"categories":["maps"],"tags":["airline","arrow","destination","direction","layover","location","maps","place","stops","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"airlines","version":2,"popularity":1458,"codepoint":59338,"unsupported_families":[],"categories":["maps"],"tags":["air","aircraft","airplane","airplanes","airport","flight","flights","fly","flying","mode","on","plane","planes","signal","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"airplane_ticket","version":11,"popularity":7718,"codepoint":61401,"unsupported_families":[],"categories":["device"],"tags":["air","aircraft","airplane","airplanes","airport","boarding","boarding pass","flight","flights","fly","flying","maps","pass","plane","planes","signal","ticket","transportation","travel","trip"],"sizes_px":[24]},{"name":"airplanemode_active","version":16,"popularity":4941,"codepoint":57749,"unsupported_families":[],"categories":["device"],"tags":["air","aircraft","airplane","airplanes","airport","flight","flights","fly","flying","mode","on","plane","planes","signal","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"airplanemode_inactive","version":17,"popularity":1761,"codepoint":57748,"unsupported_families":[],"categories":["device"],"tags":["air","aircraft","airplane","airplanes","airport","disabled","enabled","flight","flights","fly","flying","inactive","maps","mode","off","offline","on","plane","planes","signal","slash","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"airplay","version":13,"popularity":3444,"codepoint":57429,"unsupported_families":[],"categories":["av"],"tags":["airplay","arrow","connect","control","desktop","device","display","monitor","screen","signal"],"sizes_px":[24]},{"name":"airport_shuttle","version":12,"popularity":11226,"codepoint":60220,"unsupported_families":[],"categories":["places"],"tags":["airport","automobile","car","cars","commercial","delivery","direction","maps","mini","public","shuttle","transport","transportation","travel","truck","van","vehicle"],"sizes_px":[24]},{"name":"alarm","version":12,"popularity":30985,"codepoint":59477,"unsupported_families":[],"categories":["action"],"tags":["alarm","alert","bell","clock","countdown","date","notification","schedule","time"],"sizes_px":[24]},{"name":"alarm_add","version":12,"popularity":5789,"codepoint":59478,"unsupported_families":[],"categories":["action"],"tags":["+","add","alarm","alert","bell","clock","countdown","date","new","notification","plus","schedule","symbol","time"],"sizes_px":[24]},{"name":"alarm_off","version":12,"popularity":3830,"codepoint":59479,"unsupported_families":[],"categories":["action"],"tags":["alarm","alert","bell","clock","disabled","duration","enabled","notification","off","on","slash","time","timer","watch"],"sizes_px":[24]},{"name":"alarm_on","version":12,"popularity":12419,"codepoint":59480,"unsupported_families":[],"categories":["action"],"tags":["alarm","alert","bell","clock","disabled","duration","enabled","notification","off","on","slash","time","timer","watch"],"sizes_px":[24]},{"name":"album","version":12,"popularity":7704,"codepoint":57369,"unsupported_families":[],"categories":["av"],"tags":["album","artist","audio","bvb","cd","computer","data","disk","file","music","record","sound","storage","track"],"sizes_px":[24]},{"name":"align_horizontal_center","version":6,"popularity":2182,"codepoint":57359,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","center","format","horizontal","layout","lines","paragraph","rule","rules","style","text"],"sizes_px":[24]},{"name":"align_horizontal_left","version":7,"popularity":3288,"codepoint":57357,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","format","horizontal","layout","left","lines","paragraph","rule","rules","style","text"],"sizes_px":[24]},{"name":"align_horizontal_right","version":7,"popularity":2053,"codepoint":57360,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","format","horizontal","layout","lines","paragraph","right","rule","rules","style","text"],"sizes_px":[24]},{"name":"align_vertical_bottom","version":6,"popularity":2273,"codepoint":57365,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","bottom","format","layout","lines","paragraph","rule","rules","style","text","vertical"],"sizes_px":[24]},{"name":"align_vertical_center","version":6,"popularity":1666,"codepoint":57361,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","center","format","layout","lines","paragraph","rule","rules","style","text","vertical"],"sizes_px":[24]},{"name":"align_vertical_top","version":6,"popularity":1703,"codepoint":57356,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","format","layout","lines","paragraph","rule","rules","style","text","top","vertical"],"sizes_px":[24]},{"name":"all_inbox","version":11,"popularity":8630,"codepoint":59775,"unsupported_families":[],"categories":["action"],"tags":["Inbox","all","delivered","delivery","email","mail","message","send"],"sizes_px":[24]},{"name":"all_inclusive","version":11,"popularity":11427,"codepoint":60221,"unsupported_families":[],"categories":["places"],"tags":["all","endless","forever","inclusive","infinity","loop","mobius","neverending","strip","sustainability","sustainable"],"sizes_px":[24]},{"name":"all_out","version":12,"popularity":2709,"codepoint":59659,"unsupported_families":[],"categories":["action"],"tags":["all","circle","out","shape"],"sizes_px":[24]},{"name":"alt_route","version":9,"popularity":9596,"codepoint":61828,"unsupported_families":[],"categories":["maps"],"tags":["alt","alternate","alternative","arrows","dash","dashed","direction","maps","navigation","options","other","route","routes","split","symbol"],"sizes_px":[20,24]},{"name":"alternate_email","version":13,"popularity":38689,"codepoint":57574,"unsupported_families":[],"categories":["communication"],"tags":["@","address","alternate","contact","email","tag"],"sizes_px":[24]},{"name":"analytics","version":12,"popularity":66802,"codepoint":61246,"unsupported_families":[],"categories":["action"],"tags":["analytics","assessment","bar","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[24]},{"name":"anchor","version":7,"popularity":8534,"codepoint":61901,"unsupported_families":[],"categories":["action"],"tags":["anchor","google","logo"],"sizes_px":[24]},{"name":"android","version":15,"popularity":27343,"codepoint":59481,"unsupported_families":[],"categories":["action"],"tags":["android","character","logo","mascot","toy"],"sizes_px":[20,24]},{"name":"animation","version":14,"popularity":4438,"codepoint":59164,"unsupported_families":[],"categories":["image"],"tags":["animation","circles","film","motion","movement","sequence","video"],"sizes_px":[24]},{"name":"announcement","version":18,"popularity":22875,"codepoint":59482,"unsupported_families":[],"categories":["action"],"tags":["!","alert","announcement","attention","bubble","caution","chat","comment","communicate","danger","error","exclamation","feedback","important","mark","message","notification","speech","symbol","warning"],"sizes_px":[24]},{"name":"aod","version":10,"popularity":2222,"codepoint":61402,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","always","aod","device","display","hardware","homescreen","iOS","mobile","on","phone","tablet"],"sizes_px":[24]},{"name":"apartment","version":11,"popularity":45088,"codepoint":59968,"unsupported_families":[],"categories":["places"],"tags":["accommodation","apartment","architecture","building","city","company","estate","flat","home","house","office","places","real","residence","residential","shelter","units","workplace"],"sizes_px":[20,24]},{"name":"api","version":7,"popularity":18340,"codepoint":61879,"unsupported_families":[],"categories":["action"],"tags":["api","developer","development","enterprise","software"],"sizes_px":[24]},{"name":"app_blocking","version":13,"popularity":3587,"codepoint":61247,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","app","application","block","blocking","cancel","cell","device","hardware","iOS","mobile","phone","stop","stopped","tablet"],"sizes_px":[24]},{"name":"app_registration","version":11,"popularity":19390,"codepoint":61248,"unsupported_families":[],"categories":["communication"],"tags":["app","apps","edit","pencil","register","registration"],"sizes_px":[20,24]},{"name":"app_settings_alt","version":17,"popularity":5659,"codepoint":61249,"unsupported_families":[],"categories":["navigation"],"tags":["Android","OS","app","applications","cell","device","gear","hardware","iOS","mobile","phone","setting","settings","tablet"],"sizes_px":[24]},{"name":"app_shortcut","version":2,"popularity":3405,"codepoint":60132,"unsupported_families":[],"categories":["action"],"tags":["app","bookmarked","favorite","highlight","important","marked","mobile","save","saved","shortcut","software","special","star"],"sizes_px":[20,24]},{"name":"approval","version":11,"popularity":9647,"codepoint":59778,"unsupported_families":[],"categories":["file"],"tags":["apply","approval","approvals","approve","certificate","certification","disapproval","drive","file","impression","ink","mark","postage","stamp"],"sizes_px":[24]},{"name":"apps","version":12,"popularity":73609,"codepoint":58819,"unsupported_families":[],"categories":["navigation"],"tags":["all","applications","apps","circles","collection","components","dots","grid","interface","squares","ui","ux"],"sizes_px":[24]},{"name":"apps_outage","version":2,"popularity":3170,"codepoint":59340,"unsupported_families":[],"categories":["navigation"],"tags":["all","applications","apps","circles","collection","components","dots","grid","interface","outage","squares","ui","ux"],"sizes_px":[20,24]},{"name":"architecture","version":11,"popularity":11114,"codepoint":59963,"unsupported_families":[],"categories":["social"],"tags":["architecture","art","compass","design","draw","drawing","engineering","geometric","tool"],"sizes_px":[20,24]},{"name":"archive","version":16,"popularity":23908,"codepoint":57673,"unsupported_families":[],"categories":["content"],"tags":["archive","inbox","mail","store"],"sizes_px":[24]},{"name":"area_chart","version":3,"popularity":6252,"codepoint":59248,"unsupported_families":[],"categories":["editor"],"tags":["analytics","area","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[20,24]},{"name":"arrow_back","version":17,"popularity":242555,"codepoint":58820,"unsupported_families":[],"categories":["navigation"],"tags":["DISABLE_IOS","app","application","arrow","back","components","direction","disable_ios","interface","left","navigation","previous","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_back_ios","version":14,"popularity":171520,"codepoint":58848,"unsupported_families":[],"categories":["navigation"],"tags":["DISABLE_IOS","app","application","arrow","back","chevron","components","direction","disable_ios","interface","ios","left","navigation","previous","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_back_ios_new","version":6,"popularity":52191,"codepoint":58090,"unsupported_families":[],"categories":["navigation"],"tags":["DISABLE_IOS","app","application","arrow","back","chevron","components","direction","disable_ios","interface","ios","left","navigation","previous","screen","site","ui","ux","web","website"],"sizes_px":[20,24]},{"name":"arrow_circle_down","version":8,"popularity":15775,"codepoint":61825,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","direction","down","navigation"],"sizes_px":[20,24]},{"name":"arrow_circle_left","version":2,"popularity":13815,"codepoint":60071,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","direction","left","navigation"],"sizes_px":[20,24]},{"name":"arrow_circle_right","version":2,"popularity":22888,"codepoint":60074,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","direction","navigation","right"],"sizes_px":[20,24]},{"name":"arrow_circle_up","version":8,"popularity":18698,"codepoint":61826,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","direction","navigation","up"],"sizes_px":[20,24]},{"name":"arrow_downward","version":17,"popularity":49127,"codepoint":58843,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","direction","down","downward","interface","navigation","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_drop_down","version":16,"popularity":159924,"codepoint":58821,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","direction","down","drop","interface","navigation","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_drop_down_circle","version":12,"popularity":14092,"codepoint":58822,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","circle","components","direction","down","drop","interface","navigation","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_drop_up","version":12,"popularity":34478,"codepoint":58823,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","direction","drop","interface","navigation","screen","site","ui","up","ux","web","website"],"sizes_px":[24]},{"name":"arrow_forward","version":13,"popularity":125969,"codepoint":58824,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","arrows","components","direction","forward","interface","navigation","right","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_forward_ios","version":16,"popularity":172816,"codepoint":58849,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","chevron","components","direction","forward","interface","ios","navigation","next","right","screen","site","ui","ux","web","website"],"sizes_px":[20,24]},{"name":"arrow_left","version":12,"popularity":20112,"codepoint":58846,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","direction","interface","left","navigation","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_outward","version":1,"popularity":2982,"codepoint":63694,"unsupported_families":[],"categories":["action"],"tags":["app","application","arrow","arrows","components","direction","forward","interface","navigation","right","screen","site","ui","ux","web","website"],"sizes_px":[20,24]},{"name":"arrow_right","version":12,"popularity":46473,"codepoint":58847,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","direction","interface","navigation","right","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"arrow_right_alt","version":13,"popularity":73128,"codepoint":59713,"unsupported_families":[],"categories":["action"],"tags":["alt","arrow","arrows","direction","east","navigation","pointing","right"],"sizes_px":[24]},{"name":"arrow_upward","version":11,"popularity":64729,"codepoint":58840,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","direction","interface","navigation","screen","site","ui","up","upward","ux","web","website"],"sizes_px":[24]},{"name":"art_track","version":13,"popularity":2247,"codepoint":57440,"unsupported_families":[],"categories":["av"],"tags":["album","art","artist","audio","image","music","photo","photography","picture","sound","track","tracks"],"sizes_px":[24]},{"name":"article","version":13,"popularity":103688,"codepoint":61250,"unsupported_families":[],"categories":["action"],"tags":["article","doc","document","file","page","paper","text","writing"],"sizes_px":[24]},{"name":"aspect_ratio","version":12,"popularity":13193,"codepoint":59483,"unsupported_families":[],"categories":["action"],"tags":["aspect","dash","dashed","expand","image","ratio","resize","scale","size","square"],"sizes_px":[24]},{"name":"assessment","version":12,"popularity":41769,"codepoint":59484,"unsupported_families":[],"categories":["action"],"tags":["analytics","assessment","bar","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[24]},{"name":"assignment","version":15,"popularity":82154,"codepoint":59485,"unsupported_families":[],"categories":["action"],"tags":["assignment","clipboard","doc","document","text","writing"],"sizes_px":[24]},{"name":"assignment_ind","version":12,"popularity":37623,"codepoint":59486,"unsupported_families":[],"categories":["action"],"tags":["account","assignment","clipboard","doc","document","face","ind","people","person","profile","user"],"sizes_px":[24]},{"name":"assignment_late","version":15,"popularity":9089,"codepoint":59487,"unsupported_families":[],"categories":["action"],"tags":["!","alert","assignment","attention","caution","clipboard","danger","doc","document","error","exclamation","important","late","mark","notification","symbol","warning"],"sizes_px":[24]},{"name":"assignment_return","version":14,"popularity":9434,"codepoint":59488,"unsupported_families":[],"categories":["action"],"tags":["arrow","assignment","back","clipboard","doc","document","left","retun"],"sizes_px":[24]},{"name":"assignment_returned","version":12,"popularity":6184,"codepoint":59489,"unsupported_families":[],"categories":["action"],"tags":["arrow","assignment","clipboard","doc","document","down","returned"],"sizes_px":[24]},{"name":"assignment_turned_in","version":16,"popularity":33400,"codepoint":59490,"unsupported_families":[],"categories":["action"],"tags":["approve","assignment","check","clipboard","complete","doc","document","done","in","mark","ok","select","tick","turn","validate","verified","yes"],"sizes_px":[24]},{"name":"assist_walker","version":1,"popularity":863,"codepoint":63701,"unsupported_families":[],"categories":["social"],"tags":["accessibility","accessible","assist","body","disability","handicap","help","human","injured","injury","mobility","person","walk","walker"],"sizes_px":[20,24]},{"name":"assistant","version":12,"popularity":6930,"codepoint":58271,"unsupported_families":[],"categories":["image"],"tags":["ai","artificial","assistant","automatic","automation","bubble","chat","comment","communicate","custom","feedback","genai","intelligence","magic","message","recommendation","smart","spark","sparkle","speech","star","suggestion","twinkle"],"sizes_px":[24]},{"name":"assistant_direction","version":14,"popularity":5540,"codepoint":59784,"unsupported_families":[],"categories":["navigation"],"tags":["assistant","destination","direction","location","maps","navigate","navigation","pin","place","right","stop"],"sizes_px":[24]},{"name":"assistant_photo","version":12,"popularity":3026,"codepoint":58272,"unsupported_families":[],"categories":["image"],"tags":["assistant","flag","photo","recommendation","smart","star","suggestion"],"sizes_px":[24]},{"name":"assured_workload","version":1,"popularity":5886,"codepoint":60271,"unsupported_families":[],"categories":["action"],"tags":["account","assured","balance","bank","bill","building","card","cash","coin","commerce","compliance","confidential","credit","currency","dollars","federal","finance","government","money","online","pay","payment","secure","sensitive regulatory","workload"],"sizes_px":[20,24]},{"name":"atm","version":12,"popularity":2987,"codepoint":58739,"unsupported_families":[],"categories":["maps"],"tags":["alphabet","atm","automated","bill","card","cart","cash","character","coin","commerce","credit","currency","dollars","font","letters","machine","money","online","pay","payment","shopping","symbol","teller","text","type"],"sizes_px":[24]},{"name":"attach_email","version":16,"popularity":5891,"codepoint":59998,"unsupported_families":[],"categories":["file"],"tags":["attach","attachment","clip","compose","email","envelop","letters","link","mail","message","paperclip","send"],"sizes_px":[20,24]},{"name":"attach_file","version":16,"popularity":48720,"codepoint":57894,"unsupported_families":[],"categories":["editor"],"tags":["add","attach","attachment","clip","file","link","mail","media","paperclip"],"sizes_px":[24]},{"name":"attach_money","version":17,"popularity":87537,"codepoint":57895,"unsupported_families":[],"categories":["editor"],"tags":["bill","card","cash","circle","coin","commerce","cost","credit","currency","dollars","finance","monetization","money","on","online","pay","payment","shopping","symbol"],"sizes_px":[24]},{"name":"attachment","version":15,"popularity":23081,"codepoint":58044,"unsupported_families":[],"categories":["file"],"tags":["attach","attachment","clip","compose","file","image","link"],"sizes_px":[24]},{"name":"attractions","version":10,"popularity":4246,"codepoint":59986,"unsupported_families":[],"categories":["maps"],"tags":["amusement","attractions","entertainment","ferris","fun","maps","park","places","wheel"],"sizes_px":[20,24]},{"name":"attribution","version":11,"popularity":5432,"codepoint":61403,"unsupported_families":[],"categories":["content"],"tags":["account","attribute","attribution","body","circle","copyright","copywriter","human","people","person","profile","user","youtube"],"sizes_px":[24]},{"name":"audio_file","version":1,"popularity":2651,"codepoint":60290,"unsupported_families":[],"categories":["av"],"tags":["audio","doc","document","key","music","note","sound","track"],"sizes_px":[20,24]},{"name":"audiotrack","version":12,"popularity":12464,"codepoint":58273,"unsupported_families":[],"categories":["image"],"tags":["audio","audiotrack","key","music","note","sound","track"],"sizes_px":[24]},{"name":"auto_awesome","version":14,"popularity":40412,"codepoint":58975,"unsupported_families":[],"categories":["image"],"tags":["adjust","ai","artificial","automatic","automation","custom","edit","editing","enhance","genai","intelligence","magic","smart","spark","sparkle","star","stars"],"sizes_px":[24]},{"name":"auto_awesome_mosaic","version":14,"popularity":5557,"codepoint":58976,"unsupported_families":[],"categories":["image"],"tags":["adjust","auto","awesome","collage","edit","editing","enhance","image","mosaic","photo"],"sizes_px":[24]},{"name":"auto_awesome_motion","version":14,"popularity":7213,"codepoint":58977,"unsupported_families":[],"categories":["image"],"tags":["adjust","auto","awesome","collage","edit","editing","enhance","image","motion","photo","video"],"sizes_px":[24]},{"name":"auto_delete","version":11,"popularity":6648,"codepoint":59980,"unsupported_families":[],"categories":["alert"],"tags":["auto","bin","can","clock","date","delete","garbage","remove","schedule","time","trash"],"sizes_px":[20,24]},{"name":"auto_fix_high","version":14,"popularity":17889,"codepoint":58979,"unsupported_families":[],"categories":["image"],"tags":["adjust","ai","artificial","auto","automatic","automation","custom","edit","editing","enhance","erase","fix","genai","high","intelligence","magic","modify","pen","smart","spark","sparkle","star","tool","wand"],"sizes_px":[24]},{"name":"auto_fix_normal","version":14,"popularity":6270,"codepoint":58980,"unsupported_families":[],"categories":["image"],"tags":["ai","artificial","auto","automatic","automation","custom","edit","erase","fix","genai","intelligence","magic","modify","smart","spark","sparkle","star","wand"],"sizes_px":[24]},{"name":"auto_fix_off","version":13,"popularity":1465,"codepoint":58981,"unsupported_families":[],"categories":["image"],"tags":["ai","artificial","auto","automatic","automation","custom","disabled","edit","enabled","erase","fix","genai","intelligence","magic","modify","off","on","slash","smart","spark","sparkle","star","wand"],"sizes_px":[24]},{"name":"auto_graph","version":4,"popularity":13761,"codepoint":58619,"unsupported_families":[],"categories":["editor"],"tags":["analytics","auto","chart","data","diagram","graph","infographic","line","measure","metrics","stars","statistics","tracking"],"sizes_px":[20,24]},{"name":"auto_mode","version":1,"popularity":3499,"codepoint":60448,"unsupported_families":[],"categories":["home"],"tags":["ai","around","arrow","arrows","artificial","auto","automatic","automation","custom","direction","genai","inprogress","intelligence","load","loading refresh","magic","mode","navigation","nest","renew","rotate","smart","spark","sparkle","star","turn"],"sizes_px":[20,24]},{"name":"auto_stories","version":13,"popularity":39583,"codepoint":58982,"unsupported_families":[],"categories":["image"],"tags":["auto","book","flipping","pages","stories"],"sizes_px":[24]},{"name":"autofps_select","version":10,"popularity":922,"codepoint":61404,"unsupported_families":[],"categories":["image"],"tags":["A","alphabet","auto","character","font","fps","frame","frequency","letters","per","rate","second","seconds","select","symbol","text","type"],"sizes_px":[24]},{"name":"autorenew","version":12,"popularity":70057,"codepoint":59491,"unsupported_families":[],"categories":["action"],"tags":["around","arrow","arrows","autorenew","cache","cached","direction","inprogress","load","loading refresh","navigation","renew","rotate","turn"],"sizes_px":[24]},{"name":"av_timer","version":12,"popularity":7787,"codepoint":57371,"unsupported_families":[],"categories":["av"],"tags":["av","clock","countdown","duration","minutes","seconds","time","timer","watch"],"sizes_px":[24]},{"name":"baby_changing_station","version":8,"popularity":3021,"codepoint":61851,"unsupported_families":[],"categories":["places"],"tags":["babies","baby","bathroom","body","changing","child","children","father","human","infant","kids","mother","newborn","people","person","station","toddler","wc","young"],"sizes_px":[24]},{"name":"back_hand","version":3,"popularity":11240,"codepoint":59236,"unsupported_families":[],"categories":["social"],"tags":["back","fingers","gesture","hand","raised"],"sizes_px":[20,24]},{"name":"backpack","version":8,"popularity":4039,"codepoint":61852,"unsupported_families":[],"categories":["places"],"tags":["back","backpack","bag","book","bookbag","knapsack","pack","storage","travel"],"sizes_px":[24]},{"name":"backspace","version":13,"popularity":27448,"codepoint":57674,"unsupported_families":[],"categories":["content"],"tags":["arrow","back","backspace","cancel","clear","correct","delete","erase","remove"],"sizes_px":[24]},{"name":"backup","version":15,"popularity":16789,"codepoint":59492,"unsupported_families":[],"categories":["action"],"tags":["arrow","backup","cloud","data","drive","files folders","storage","up","upload"],"sizes_px":[24]},{"name":"backup_table","version":11,"popularity":5854,"codepoint":61251,"unsupported_families":[],"categories":["action"],"tags":["backup","drive","files folders","format","layout","stack","storage","table"],"sizes_px":[20,24]},{"name":"badge","version":11,"popularity":59083,"codepoint":60007,"unsupported_families":[],"categories":["maps"],"tags":["account","avatar","badge","card","certified","employee","face","human","id","id card","identification","name","people","person","profile","security","user","work"],"sizes_px":[20,24]},{"name":"bakery_dining","version":11,"popularity":6276,"codepoint":59987,"unsupported_families":[],"categories":["maps"],"tags":["bakery","bread","breakfast","brunch","croissant","dining","food"],"sizes_px":[20,24]},{"name":"balance","version":1,"popularity":9282,"codepoint":60150,"unsupported_families":[],"categories":["action"],"tags":["balance","equal","equity","impartiality","justice","parity","stability. equilibrium","steadiness","symmetry"],"sizes_px":[20,24]},{"name":"balcony","version":4,"popularity":2392,"codepoint":58767,"unsupported_families":[],"categories":["places"],"tags":["architecture","balcony","doors","estate","home","house","maps","out","outside","place","real","residence","residential","stay","terrace","window"],"sizes_px":[20,24]},{"name":"ballot","version":14,"popularity":14305,"codepoint":57714,"unsupported_families":[],"categories":["content"],"tags":["ballot","bullet","election","list","point","poll","vote"],"sizes_px":[24]},{"name":"bar_chart","version":13,"popularity":38158,"codepoint":57963,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[20,24]},{"name":"batch_prediction","version":12,"popularity":4673,"codepoint":61685,"unsupported_families":[],"categories":["action"],"tags":["batch","bulb","idea","light","prediction"],"sizes_px":[20,24]},{"name":"bathroom","version":10,"popularity":3584,"codepoint":61405,"unsupported_families":[],"categories":["search"],"tags":["bath","bathroom","closet","home","house","place","plumbing","room","shower","sprinkler","wash","water","wc"],"sizes_px":[24]},{"name":"bathtub","version":11,"popularity":6487,"codepoint":59969,"unsupported_families":[],"categories":["places"],"tags":["bath","bathing","bathroom","bathtub","home","hotel","human","person","shower","travel","tub"],"sizes_px":[20,24]},{"name":"battery_0_bar","version":1,"popularity":2871,"codepoint":60380,"unsupported_families":[],"categories":["device"],"tags":["0","bar","battery","cell","charge","full","mobile","power"],"sizes_px":[20,24]},{"name":"battery_1_bar","version":1,"popularity":2153,"codepoint":60377,"unsupported_families":[],"categories":["device"],"tags":["1","bar","battery","cell","charge","mobile","power"],"sizes_px":[20,24]},{"name":"battery_2_bar","version":1,"popularity":1806,"codepoint":60384,"unsupported_families":[],"categories":["device"],"tags":["2","bar","battery","cell","charge","mobile","power"],"sizes_px":[20,24]},{"name":"battery_3_bar","version":1,"popularity":2460,"codepoint":60381,"unsupported_families":[],"categories":["device"],"tags":["3","bar","battery","cell","charge","mobile","power"],"sizes_px":[20,24]},{"name":"battery_4_bar","version":1,"popularity":2936,"codepoint":60386,"unsupported_families":[],"categories":["device"],"tags":["4","bar","battery","cell","charge","mobile","power"],"sizes_px":[20,24]},{"name":"battery_5_bar","version":1,"popularity":3642,"codepoint":60372,"unsupported_families":[],"categories":["device"],"tags":["5","bar","battery","cell","charge","mobile","power"],"sizes_px":[20,24]},{"name":"battery_6_bar","version":1,"popularity":2616,"codepoint":60370,"unsupported_families":[],"categories":["device"],"tags":["6","bar","battery","cell","charge","mobile","power"],"sizes_px":[20,24]},{"name":"battery_alert","version":12,"popularity":4635,"codepoint":57756,"unsupported_families":[],"categories":["device"],"tags":["!","alert","attention","battery","caution","cell","charge","danger","error","exclamation","important","mark","mobile","notification","power","symbol","warning"],"sizes_px":[24]},{"name":"battery_charging_full","version":12,"popularity":15799,"codepoint":57763,"unsupported_families":[],"categories":["device"],"tags":["battery","bolt","cell","charge","charging","electric","energy","full","instant","lightening","mobile","power","thunderbolt"],"sizes_px":[24]},{"name":"battery_full","version":12,"popularity":20676,"codepoint":57764,"unsupported_families":[],"categories":["device"],"tags":["0","bar","battery","cell","charge","full","mobile","power"],"sizes_px":[24]},{"name":"battery_saver","version":9,"popularity":3329,"codepoint":61406,"unsupported_families":[],"categories":["device"],"tags":["+","add","battery","charge","charging","new","plus","power","saver","symbol"],"sizes_px":[24]},{"name":"battery_std","version":12,"popularity":6295,"codepoint":57765,"unsupported_families":[],"categories":["device"],"tags":["battery","cell","charge","mobile","plus","power","standard","std"],"sizes_px":[24]},{"name":"battery_unknown","version":13,"popularity":2756,"codepoint":57766,"unsupported_families":[],"categories":["device"],"tags":["?","assistance","battery","cell","charge","help","info","information","mobile","power","punctuation","question mark","support","symbol","unknown"],"sizes_px":[24]},{"name":"beach_access","version":12,"popularity":9858,"codepoint":60222,"unsupported_families":[],"categories":["places"],"tags":["access","beach","places","summer","sunny","umbrella"],"sizes_px":[24]},{"name":"bed","version":10,"popularity":14360,"codepoint":61407,"unsupported_families":[],"categories":["search"],"tags":["bed","bedroom","double","full","furniture","home","hotel","house","king","night","pillows","queen","rest","room","size","sleep"],"sizes_px":[24]},{"name":"bedroom_baby","version":9,"popularity":3686,"codepoint":61408,"unsupported_families":[],"categories":["search"],"tags":["babies","baby","bedroom","child","children","home","horse","house","infant","kid","newborn","rocking","room","toddler","young"],"sizes_px":[24]},{"name":"bedroom_child","version":9,"popularity":3003,"codepoint":61409,"unsupported_families":[],"categories":["search"],"tags":["bed","bedroom","child","children","furniture","home","hotel","house","kid","night","pillows","rest","room","size","sleep","twin","young"],"sizes_px":[24]},{"name":"bedroom_parent","version":9,"popularity":3765,"codepoint":61410,"unsupported_families":[],"categories":["search"],"tags":["bed","bedroom","double","full","furniture","home","hotel","house","king","night","parent","pillows","queen","rest","room","sizem master","sleep"],"sizes_px":[24]},{"name":"bedtime","version":15,"popularity":4768,"codepoint":61252,"unsupported_families":[],"categories":["image"],"tags":["bedtime","clear","climate","home","lunar","moon","nest","night","nightime","quiet","security","sleep","thermostat","time","weather"],"sizes_px":[20,24]},{"name":"bedtime_off","version":2,"popularity":679,"codepoint":60278,"unsupported_families":[],"categories":["image"],"tags":["active","bedtime","clear","climate","disabled","home","lunar","moon","nest","night","nightime","off","offline","quiet","security","slash","sleep","thermostat","time","weather"],"sizes_px":[20,24]},{"name":"beenhere","version":12,"popularity":9472,"codepoint":58669,"unsupported_families":[],"categories":["maps"],"tags":["approve","archive","beenhere","bookmark","check","complete","done","favorite","label","library","mark","ok","read","reading","remember","ribbon","save","select","tag","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"bento","version":6,"popularity":2253,"codepoint":61940,"unsupported_families":[],"categories":["places"],"tags":["bento","box","dinner","food","lunch","meal","restaurant","takeout"],"sizes_px":[24]},{"name":"bike_scooter","version":11,"popularity":1414,"codepoint":61253,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bike","car","cars","maps","scooter","transportation","vehicle","vespa"],"sizes_px":[20,24]},{"name":"biotech","version":11,"popularity":14179,"codepoint":59962,"unsupported_families":[],"categories":["content"],"tags":["biotech","chemistry","laboratory","microscope","research","science","technology"],"sizes_px":[20,24]},{"name":"blender","version":9,"popularity":4184,"codepoint":61411,"unsupported_families":[],"categories":["search"],"tags":["appliance","blender","cook","cooking","electric","juicer","kitchen","machine","vitamix"],"sizes_px":[24]},{"name":"blind","version":1,"popularity":798,"codepoint":63702,"unsupported_families":[],"categories":["social"],"tags":["accessibility","accessible","assist","blind","body","cane","disability","handicap","help","human","mobility","person","walk","walker"],"sizes_px":[20,24]},{"name":"blinds","version":3,"popularity":767,"codepoint":57990,"unsupported_families":[],"categories":["home"],"tags":["blinds","cover","curtains","nest","open","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"blinds_closed","version":1,"popularity":683,"codepoint":60447,"unsupported_families":[],"categories":["home"],"tags":["blinds","closed","cover","curtains","nest","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"block","version":17,"popularity":41347,"codepoint":57675,"unsupported_families":[],"categories":["content"],"tags":["avoid","block","cancel","close","disturb","do not disturb","entry","exit","no","prohibited","quit","remove","stop"],"sizes_px":[24]},{"name":"bloodtype","version":10,"popularity":6308,"codepoint":61412,"unsupported_families":[],"categories":["device"],"tags":["blood","bloodtype","donate","droplet","emergency","hospital","medicine","negative","positive","type","water"],"sizes_px":[24]},{"name":"bluetooth","version":11,"popularity":12603,"codepoint":57767,"unsupported_families":[],"categories":["device"],"tags":["bluetooth","cast","connect","connection","device","paring","streaming","symbol","wireless"],"sizes_px":[24]},{"name":"bluetooth_audio","version":12,"popularity":1752,"codepoint":58895,"unsupported_families":[],"categories":["notification"],"tags":["audio","bluetooth","connect","connection","device","music","signal","sound","symbol"],"sizes_px":[24]},{"name":"bluetooth_connected","version":12,"popularity":3731,"codepoint":57768,"unsupported_families":[],"categories":["device"],"tags":["bluetooth","cast","connect","connection","device","paring","streaming","symbol","wireless"],"sizes_px":[24]},{"name":"bluetooth_disabled","version":17,"popularity":2979,"codepoint":57769,"unsupported_families":[],"categories":["device"],"tags":["bluetooth","cast","connect","connection","device","disabled","enabled","off","offline","on","paring","slash","streaming","symbol","wireless"],"sizes_px":[24]},{"name":"bluetooth_drive","version":9,"popularity":1287,"codepoint":61413,"unsupported_families":[],"categories":["device"],"tags":["automobile","bluetooth","car","cars","cast","connect","connection","device","drive","maps","paring","streaming","symbol","transportation","travel","vehicle","wireless"],"sizes_px":[24]},{"name":"bluetooth_searching","version":13,"popularity":3097,"codepoint":57770,"unsupported_families":[],"categories":["device"],"tags":["bluetooth","connection","device","paring","search","searching","symbol"],"sizes_px":[24]},{"name":"blur_circular","version":12,"popularity":2524,"codepoint":58274,"unsupported_families":[],"categories":["image"],"tags":["blur","circle","circular","dots","edit","editing","effect","enhance","filter"],"sizes_px":[24]},{"name":"blur_linear","version":12,"popularity":1817,"codepoint":58275,"unsupported_families":[],"categories":["image"],"tags":["blur","dots","edit","editing","effect","enhance","filter","linear"],"sizes_px":[24]},{"name":"blur_off","version":12,"popularity":1187,"codepoint":58276,"unsupported_families":[],"categories":["image"],"tags":["blur","disabled","dots","edit","editing","effect","enabled","enhance","off","on","slash"],"sizes_px":[24]},{"name":"blur_on","version":12,"popularity":7145,"codepoint":58277,"unsupported_families":[],"categories":["image"],"tags":["blur","disabled","dots","edit","editing","effect","enabled","enhance","filter","off","on","slash"],"sizes_px":[24]},{"name":"bolt","version":10,"popularity":50125,"codepoint":59915,"unsupported_families":[],"categories":["content"],"tags":["bolt","electric","energy","fast","flash","instant","lightning","power","thunderbolt"],"sizes_px":[24]},{"name":"book","version":16,"popularity":30262,"codepoint":59493,"unsupported_families":[],"categories":["action"],"tags":["book","bookmark","favorite","label","library","read","reading","remember","ribbon","save","tag"],"sizes_px":[24]},{"name":"book_online","version":10,"popularity":15910,"codepoint":61975,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","admission","appointment","book","cell","device","event","hardware","iOS","mobile","online","pass","phone","reservation","tablet","ticket"],"sizes_px":[24]},{"name":"bookmark","version":17,"popularity":48631,"codepoint":59494,"unsupported_families":[],"categories":["action"],"tags":["archive","bookmark","favorite","label","library","read","reading","remember","ribbon","save","tag"],"sizes_px":[24]},{"name":"bookmark_add","version":3,"popularity":11929,"codepoint":58776,"unsupported_families":[],"categories":["action"],"tags":["+","add","bookmark","favorite","plus","remember","ribbon","save","symbol"],"sizes_px":[20,24]},{"name":"bookmark_added","version":3,"popularity":9596,"codepoint":58777,"unsupported_families":[],"categories":["action"],"tags":["added","approve","bookmark","check","complete","done","favorite","mark","ok","remember","save","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"bookmark_border","version":12,"popularity":46299,"codepoint":59495,"unsupported_families":[],"categories":["action"],"tags":["archive","bookmark","border","favorite","label","library","read","reading","remember","ribbon","save","tag"],"sizes_px":[24]},{"name":"bookmark_remove","version":3,"popularity":4508,"codepoint":58778,"unsupported_families":[],"categories":["action"],"tags":["bookmark","delete","favorite","minus","remember","remove","ribbon","save","subtract"],"sizes_px":[20,24]},{"name":"bookmarks","version":12,"popularity":18722,"codepoint":59787,"unsupported_families":[],"categories":["action"],"tags":["bookmark","bookmarks","favorite","label","layers","library","multiple","read","reading","remember","ribbon","save","stack","tag"],"sizes_px":[24]},{"name":"border_all","version":12,"popularity":2694,"codepoint":57896,"unsupported_families":[],"categories":["editor"],"tags":["all","border","doc","edit","editing","editor","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_bottom","version":12,"popularity":892,"codepoint":57897,"unsupported_families":[],"categories":["editor"],"tags":["border","bottom","dash","dashed","doc","edit","editing","editor","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_clear","version":12,"popularity":1671,"codepoint":57898,"unsupported_families":[],"categories":["editor"],"tags":["border","clear","dash","dashed","doc","edit","editing","editor","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_color","version":15,"popularity":20654,"codepoint":57899,"unsupported_families":[],"categories":["editor"],"tags":["all","border","doc","edit","editing","editor","pen","pencil","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_horizontal","version":12,"popularity":845,"codepoint":57900,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","horizontal","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_inner","version":12,"popularity":939,"codepoint":57901,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","inner","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_left","version":12,"popularity":922,"codepoint":57902,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","left","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_outer","version":12,"popularity":1390,"codepoint":57903,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","outer","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_right","version":12,"popularity":805,"codepoint":57904,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","right","sheet","spreadsheet","stroke","text","type","writing"],"sizes_px":[24]},{"name":"border_style","version":12,"popularity":1510,"codepoint":57905,"unsupported_families":[],"categories":["editor"],"tags":["border","color","dash","dashed","doc","edit","editing","editor","sheet","spreadsheet","stroke","style","text","type","writing"],"sizes_px":[24]},{"name":"border_top","version":12,"popularity":814,"codepoint":57906,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","sheet","spreadsheet","stroke","text","top","type","writing"],"sizes_px":[24]},{"name":"border_vertical","version":12,"popularity":868,"codepoint":57907,"unsupported_families":[],"categories":["editor"],"tags":["border","dash","dashed","doc","edit","editing","editor","sheet","spreadsheet","stroke","text","type","vertical","writing"],"sizes_px":[24]},{"name":"boy","version":1,"popularity":3403,"codepoint":60263,"unsupported_families":[],"categories":["social"],"tags":["body","boy","gender","human","male","man","people","person","social","symbol"],"sizes_px":[20,24]},{"name":"branding_watermark","version":13,"popularity":6904,"codepoint":57451,"unsupported_families":[],"categories":["av"],"tags":["branding","components","copyright","design","emblem","format","identity","interface","layout","logo","screen","site","stamp","ui","ux","watermark","web","website","window"],"sizes_px":[24]},{"name":"breakfast_dining","version":11,"popularity":3142,"codepoint":59988,"unsupported_families":[],"categories":["maps"],"tags":["bakery","bread","breakfast","butter","dining","food","toast"],"sizes_px":[20,24]},{"name":"brightness_1","version":19,"popularity":5399,"codepoint":58278,"unsupported_families":[],"categories":["image"],"tags":["1","brightness","circle","control","crescent","level","moon","screen"],"sizes_px":[24]},{"name":"brightness_2","version":12,"popularity":2342,"codepoint":58279,"unsupported_families":[],"categories":["image"],"tags":["2","brightness","circle","control","crescent","level","moon","screen"],"sizes_px":[24]},{"name":"brightness_3","version":16,"popularity":2600,"codepoint":58280,"unsupported_families":[],"categories":["image"],"tags":["3","brightness","circle","control","crescent","level","moon","screen"],"sizes_px":[24]},{"name":"brightness_4","version":16,"popularity":6146,"codepoint":58281,"unsupported_families":[],"categories":["image"],"tags":["4","brightness","circle","control","crescent","level","moon","screen","sun"],"sizes_px":[24]},{"name":"brightness_5","version":12,"popularity":5416,"codepoint":58282,"unsupported_families":[],"categories":["image"],"tags":["5","brightness","circle","control","crescent","level","moon","screen","sun"],"sizes_px":[24]},{"name":"brightness_6","version":12,"popularity":5501,"codepoint":58283,"unsupported_families":[],"categories":["image"],"tags":["6","brightness","circle","control","crescent","level","moon","screen","sun"],"sizes_px":[24]},{"name":"brightness_7","version":13,"popularity":3989,"codepoint":58284,"unsupported_families":[],"categories":["image"],"tags":["7","brightness","circle","control","crescent","level","moon","screen","sun"],"sizes_px":[24]},{"name":"brightness_auto","version":12,"popularity":1912,"codepoint":57771,"unsupported_families":[],"categories":["device"],"tags":["A","auto","brightness","control","display","level","mobile","monitor","phone","screen","sun"],"sizes_px":[24]},{"name":"brightness_high","version":13,"popularity":3434,"codepoint":57772,"unsupported_families":[],"categories":["device"],"tags":["auto","brightness","control","high","mobile","monitor","phone","sun"],"sizes_px":[24]},{"name":"brightness_low","version":12,"popularity":3068,"codepoint":57773,"unsupported_families":[],"categories":["device"],"tags":["auto","brightness","control","low","mobile","monitor","phone","sun"],"sizes_px":[24]},{"name":"brightness_medium","version":12,"popularity":3120,"codepoint":57774,"unsupported_families":[],"categories":["device"],"tags":["auto","brightness","control","medium","mobile","monitor","phone","sun"],"sizes_px":[24]},{"name":"broadcast_on_home","version":1,"popularity":648,"codepoint":63736,"unsupported_families":[],"categories":["home"],"tags":[],"sizes_px":[20,24]},{"name":"broadcast_on_personal","version":1,"popularity":773,"codepoint":63737,"unsupported_families":[],"categories":["home"],"tags":[],"sizes_px":[20,24]},{"name":"broken_image","version":11,"popularity":6659,"codepoint":58285,"unsupported_families":[],"categories":["image"],"tags":["broken","corrupt","error","image","landscape","mountain","mountains","photo","photography","picture","torn"],"sizes_px":[24]},{"name":"browse_gallery","version":1,"popularity":1651,"codepoint":60369,"unsupported_families":[],"categories":["action"],"tags":["clock","collection","gallery","library","stack","watch"],"sizes_px":[20,24]},{"name":"browser_not_supported","version":12,"popularity":1391,"codepoint":61255,"unsupported_families":[],"categories":["hardware"],"tags":["browser","disabled","enabled","internet","not","off","on","page","screen","site","slash","supported","web","website","www"],"sizes_px":[20,24]},{"name":"browser_updated","version":2,"popularity":3114,"codepoint":59343,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","arrow","browser","chrome","desktop","device","display","download","hardware","iOS","mac","monitor","screen","updated","web","window"],"sizes_px":[20,24]},{"name":"brunch_dining","version":11,"popularity":2807,"codepoint":60019,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","brunch","champagne","dining","drink","food","lunch","meal"],"sizes_px":[20,24]},{"name":"brush","version":13,"popularity":20612,"codepoint":58286,"unsupported_families":[],"categories":["image"],"tags":["art","brush","design","draw","edit","editing","paint","painting","tool"],"sizes_px":[24]},{"name":"bubble_chart","version":12,"popularity":7818,"codepoint":59101,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","bubble","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[24]},{"name":"bug_report","version":12,"popularity":30312,"codepoint":59496,"unsupported_families":[],"categories":["action"],"tags":["animal","bug","fix","insect","issue","problem","report","testing","virus","warning"],"sizes_px":[24]},{"name":"build","version":12,"popularity":69227,"codepoint":59497,"unsupported_families":[],"categories":["action"],"tags":["adjust","build","fix","home","nest","repair","tool","tools","wrench"],"sizes_px":[24]},{"name":"build_circle","version":14,"popularity":17781,"codepoint":61256,"unsupported_families":[],"categories":["action"],"tags":["adjust","build","circle","fix","repair","tool","wrench"],"sizes_px":[20,24]},{"name":"bungalow","version":4,"popularity":2101,"codepoint":58769,"unsupported_families":[],"categories":["places"],"tags":["architecture","bungalow","cottage","estate","home","house","maps","place","real","residence","residential","stay","traveling"],"sizes_px":[20,24]},{"name":"burst_mode","version":12,"popularity":1985,"codepoint":58428,"unsupported_families":[],"categories":["image"],"tags":["burst","image","landscape","mode","mountain","mountains","multiple","photo","photography","picture"],"sizes_px":[24]},{"name":"bus_alert","version":15,"popularity":2454,"codepoint":59791,"unsupported_families":[],"categories":["maps"],"tags":["!","alert","attention","automobile","bus","car","cars","caution","danger","error","exclamation","important","maps","mark","notification","symbol","transportation","vehicle","warning"],"sizes_px":[24]},{"name":"business","version":12,"popularity":75060,"codepoint":57519,"unsupported_families":[],"categories":["communication"],"tags":["apartment","architecture","building","business","company","estate","home","place","real","residence","residential","shelter"],"sizes_px":[24]},{"name":"business_center","version":15,"popularity":23796,"codepoint":60223,"unsupported_families":[],"categories":["places"],"tags":["bag","baggage","briefcase","business","case","center","places","purse","suitcase","work"],"sizes_px":[24]},{"name":"cabin","version":4,"popularity":3401,"codepoint":58761,"unsupported_families":[],"categories":["places"],"tags":["architecture","cabin","camping","cottage","estate","home","house","log","maps","place","real","residence","residential","stay","traveling","wood"],"sizes_px":[20,24]},{"name":"cable","version":10,"popularity":8276,"codepoint":61414,"unsupported_families":[],"categories":["device"],"tags":["cable","connect","connection","device","electronics","usb","wire"],"sizes_px":[24]},{"name":"cached","version":13,"popularity":30344,"codepoint":59498,"unsupported_families":[],"categories":["action"],"tags":["around","arrows","cache","cached","inprogress","load","loading refresh","renew","rotate"],"sizes_px":[24]},{"name":"cake","version":13,"popularity":23626,"codepoint":59369,"unsupported_families":[],"categories":["social"],"tags":["add","baked","birthday","cake","candles","celebration","dessert","food","frosting","new","party","pastries","pastry","plus","social","sweet","symbol"],"sizes_px":[24]},{"name":"calculate","version":11,"popularity":39460,"codepoint":59999,"unsupported_families":[],"categories":["content"],"tags":["+","-","=","calculate","count","finance calculator","math"],"sizes_px":[20,24]},{"name":"calendar_month","version":1,"popularity":71356,"codepoint":60364,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","month","schedule","today"],"sizes_px":[20,24]},{"name":"calendar_today","version":12,"popularity":124421,"codepoint":59701,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","month","schedule","today"],"sizes_px":[24]},{"name":"calendar_view_day","version":15,"popularity":6152,"codepoint":59702,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","format","grid","layout","month","schedule","today","view","week"],"sizes_px":[24]},{"name":"calendar_view_month","version":10,"popularity":12366,"codepoint":61415,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","format","grid","layout","month","schedule","today","view"],"sizes_px":[24]},{"name":"calendar_view_week","version":10,"popularity":7161,"codepoint":61416,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","format","grid","layout","month","schedule","today","view","week"],"sizes_px":[24]},{"name":"call","version":17,"popularity":184277,"codepoint":57520,"unsupported_families":[],"categories":["communication"],"tags":["call","cell","contact","device","hardware","mobile","phone","telephone"],"sizes_px":[24]},{"name":"call_end","version":16,"popularity":11438,"codepoint":57521,"unsupported_families":[],"categories":["communication"],"tags":["call","cell","contact","device","end","hardware","mobile","phone","telephone"],"sizes_px":[24]},{"name":"call_made","version":13,"popularity":7446,"codepoint":57522,"unsupported_families":[],"categories":["communication"],"tags":["arrow","call","device","made","mobile"],"sizes_px":[24]},{"name":"call_merge","version":13,"popularity":2898,"codepoint":57523,"unsupported_families":[],"categories":["communication"],"tags":["arrow","call","device","merge","mobile"],"sizes_px":[24]},{"name":"call_missed","version":13,"popularity":2106,"codepoint":57524,"unsupported_families":[],"categories":["communication"],"tags":["arrow","call","device","missed","mobile"],"sizes_px":[24]},{"name":"call_missed_outgoing","version":15,"popularity":2388,"codepoint":57572,"unsupported_families":[],"categories":["communication"],"tags":["arrow","call","device","missed","mobile","outgoing"],"sizes_px":[24]},{"name":"call_received","version":13,"popularity":4676,"codepoint":57525,"unsupported_families":[],"categories":["communication"],"tags":["arrow","call","device","mobile","received"],"sizes_px":[24]},{"name":"call_split","version":13,"popularity":6780,"codepoint":57526,"unsupported_families":[],"categories":["communication"],"tags":["arrow","call","device","mobile","split"],"sizes_px":[24]},{"name":"call_to_action","version":11,"popularity":3347,"codepoint":57452,"unsupported_families":[],"categories":["av"],"tags":["action","alert","bar","call","components","cta","design","info","information","interface","layout","message","notification","screen","site","to","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"camera","version":12,"popularity":13358,"codepoint":58287,"unsupported_families":[],"categories":["image"],"tags":["aperture","camera","lens","photo","photography","picture","shutter"],"sizes_px":[24]},{"name":"camera_alt","version":12,"popularity":12457,"codepoint":58288,"unsupported_families":[],"categories":["image"],"tags":["alt","camera","image","photo","photography","picture"],"sizes_px":[24]},{"name":"camera_enhance","version":12,"popularity":7348,"codepoint":59644,"unsupported_families":[],"categories":["action"],"tags":["ai","artificial","automatic","automation","camera","custom","enhance","genai","important","intelligence","lens","magic","photo","photography","picture","quality","smart","spark","sparkle","special","star"],"sizes_px":[24]},{"name":"camera_front","version":12,"popularity":2100,"codepoint":58289,"unsupported_families":[],"categories":["image"],"tags":["body","camera","front","human","lens","mobile","person","phone","photography","portrait","selfie"],"sizes_px":[24]},{"name":"camera_indoor","version":9,"popularity":3689,"codepoint":61417,"unsupported_families":[],"categories":["search"],"tags":["architecture","building","camera","estate","film","filming","home","house","image","indoor","inside","motion","nest","picture","place","real","residence","residential","shelter","video","videography"],"sizes_px":[24]},{"name":"camera_outdoor","version":9,"popularity":3402,"codepoint":61418,"unsupported_families":[],"categories":["search"],"tags":["architecture","building","camera","estate","film","filming","home","house","image","motion","nest","outdoor","outside","picture","place","real","residence","residential","shelter","video","videography"],"sizes_px":[24]},{"name":"camera_rear","version":13,"popularity":1067,"codepoint":58290,"unsupported_families":[],"categories":["image"],"tags":["camera","front","lens","mobile","phone","photo","photography","picture","portrait","rear","selfie"],"sizes_px":[24]},{"name":"camera_roll","version":12,"popularity":1891,"codepoint":58291,"unsupported_families":[],"categories":["image"],"tags":["camera","film","image","library","photo","photography","roll"],"sizes_px":[24]},{"name":"cameraswitch","version":10,"popularity":8004,"codepoint":61419,"unsupported_families":[],"categories":["device"],"tags":["arrows","camera","cameraswitch","flip","rotate","swap","switch","view"],"sizes_px":[24]},{"name":"campaign","version":12,"popularity":54796,"codepoint":61257,"unsupported_families":[],"categories":["navigation"],"tags":["alert","announcement","campaign","loud","megaphone","microphone","notification","speaker"],"sizes_px":[24]},{"name":"cancel","version":16,"popularity":169176,"codepoint":58825,"unsupported_families":[],"categories":["navigation"],"tags":["cancel","circle","clear","close","exit","remove","stop","x"],"sizes_px":[24]},{"name":"cancel_presentation","version":14,"popularity":7914,"codepoint":57577,"unsupported_families":[],"categories":["communication"],"tags":["cancel","clear","close","device","exit","no","present","presentation","quit","remove","screen","slide","stop","website","window","x"],"sizes_px":[24]},{"name":"cancel_schedule_send","version":12,"popularity":5209,"codepoint":59961,"unsupported_families":[],"categories":["action"],"tags":["cancel","clear","email","mail","no","quit","remove","schedule","send","share","stop","x"],"sizes_px":[20,24]},{"name":"candlestick_chart","version":2,"popularity":2296,"codepoint":60116,"unsupported_families":[],"categories":["editor"],"tags":["analytics","candlestick","chart","data","diagram","finance","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[20,24]},{"name":"car_crash","version":1,"popularity":2147,"codepoint":60402,"unsupported_families":[],"categories":["maps"],"tags":["accident","automobile","car","cars","collision","crash","direction","maps","public","transportation","vehicle"],"sizes_px":[20,24]},{"name":"car_rental","version":10,"popularity":4366,"codepoint":59989,"unsupported_families":[],"categories":["maps"],"tags":["access","automobile","car","cars","entry","key","lock","maps","password","rental","transportation","unlock","vehicle"],"sizes_px":[20,24]},{"name":"car_repair","version":10,"popularity":3581,"codepoint":59990,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","maps","repair","transportation","vehicle"],"sizes_px":[20,24]},{"name":"card_giftcard","version":14,"popularity":36752,"codepoint":59638,"unsupported_families":[],"categories":["action"],"tags":["account","balance","bill","card","cart","cash","certificate","coin","commerce","credit","currency","dollars","gift","giftcard","money","online","pay","payment","present","shopping"],"sizes_px":[24]},{"name":"card_membership","version":14,"popularity":16064,"codepoint":59639,"unsupported_families":[],"categories":["action"],"tags":["bill","bookmark","card","cash","certificate","coin","commerce","cost","credit","currency","dollars","finance","loyalty","membership","money","online","pay","payment","shopping","subscription"],"sizes_px":[24]},{"name":"card_travel","version":13,"popularity":6446,"codepoint":59640,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","membership","miles","money","online","pay","payment","travel","trip"],"sizes_px":[24]},{"name":"carpenter","version":6,"popularity":3071,"codepoint":61944,"unsupported_families":[],"categories":["places"],"tags":["building","carpenter","construction","cutting","handyman","repair","saw","tool"],"sizes_px":[24]},{"name":"cases","version":11,"popularity":6497,"codepoint":59794,"unsupported_families":[],"categories":["image"],"tags":["bag","baggage","briefcase","business","case","cases","purse","suitcase"],"sizes_px":[24]},{"name":"casino","version":13,"popularity":8796,"codepoint":60224,"unsupported_families":[],"categories":["places"],"tags":["casino","casino chip","chips","dice","dots","entertainment","gamble","gambling","game","games","luck","places","tokens"],"sizes_px":[24]},{"name":"cast","version":18,"popularity":7278,"codepoint":58119,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","airplay","cast","chrome","connect","desktop","device","display","hardware","iOS","mac","monitor","screen","screencast","streaming","television","tv","web","window","wireless"],"sizes_px":[24]},{"name":"cast_connected","version":13,"popularity":3343,"codepoint":58120,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","airplay","cast","chrome","connect","connected","desktop","device","display","hardware","iOS","mac","monitor","screen","screencast","streaming","television","tv","web","window","wireless"],"sizes_px":[24]},{"name":"cast_for_education","version":14,"popularity":8083,"codepoint":61420,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","airplay","cast","chrome","connect","desktop","device","display","education","for","hardware","iOS","learning","lessons teaching","mac","monitor","screen","screencast","streaming","television","tv","web","window","wireless"],"sizes_px":[24]},{"name":"castle","version":2,"popularity":2304,"codepoint":60081,"unsupported_families":[],"categories":["maps"],"tags":["castle","fort","fortress","mansion","palace"],"sizes_px":[20,24]},{"name":"catching_pokemon","version":4,"popularity":8191,"codepoint":58632,"unsupported_families":[],"categories":["social"],"tags":["catching","go","pokemon","pokestop","travel"],"sizes_px":[20,24]},{"name":"category","version":12,"popularity":56550,"codepoint":58740,"unsupported_families":[],"categories":["maps"],"tags":["categories","category","circle","collection","items","product","shapes","sort","square","triangle"],"sizes_px":[24]},{"name":"celebration","version":11,"popularity":19969,"codepoint":60005,"unsupported_families":[],"categories":["maps"],"tags":["activity","birthday","celebration","event","fun","party"],"sizes_px":[20,24]},{"name":"cell_tower","version":1,"popularity":4049,"codepoint":60346,"unsupported_families":[],"categories":["communication"],"tags":["broadcast","casting","cell","network","signal","tower","transmitting","wireless"],"sizes_px":[20,24]},{"name":"cell_wifi","version":14,"popularity":2311,"codepoint":57580,"unsupported_families":[],"categories":["communication"],"tags":["cell","connection","data","internet","mobile","network","phone","service","signal","wifi","wireless"],"sizes_px":[24]},{"name":"center_focus_strong","version":12,"popularity":7319,"codepoint":58292,"unsupported_families":[],"categories":["image"],"tags":["camera","center","focus","image","lens","photo","photography","strong","zoom"],"sizes_px":[24]},{"name":"center_focus_weak","version":12,"popularity":4409,"codepoint":58293,"unsupported_families":[],"categories":["image"],"tags":["camera","center","focus","image","lens","photo","photography","weak","zoom"],"sizes_px":[24]},{"name":"chair","version":10,"popularity":15192,"codepoint":61421,"unsupported_families":[],"categories":["search"],"tags":["chair","comfort","couch","decoration","furniture","home","house","living","lounging","loveseat","room","seat","seating","sofa"],"sizes_px":[24]},{"name":"chair_alt","version":9,"popularity":3493,"codepoint":61422,"unsupported_families":[],"categories":["search"],"tags":["cahir","furniture","home","house","kitchen","lounging","seating","table"],"sizes_px":[24]},{"name":"chalet","version":4,"popularity":1895,"codepoint":58757,"unsupported_families":[],"categories":["places"],"tags":["architecture","chalet","cottage","estate","home","house","maps","place","real","residence","residential","stay","traveling"],"sizes_px":[20,24]},{"name":"change_circle","version":8,"popularity":20139,"codepoint":58087,"unsupported_families":[],"categories":["content"],"tags":["around","arrows","change","circle","direction","navigation","rotate"],"sizes_px":[20,24]},{"name":"change_history","version":11,"popularity":14955,"codepoint":59499,"unsupported_families":[],"categories":["action"],"tags":["change","history","shape","triangle"],"sizes_px":[24]},{"name":"charging_station","version":8,"popularity":3063,"codepoint":61853,"unsupported_families":[],"categories":["places"],"tags":["Android","OS","battery","bolt","cell","charging","device","electric","energy","hardware","iOS","instant","lightning","mobile","phone","station","tablet","thunderbolt"],"sizes_px":[24]},{"name":"chat","version":19,"popularity":72507,"codepoint":57527,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","feedback","message","speech"],"sizes_px":[24]},{"name":"chat_bubble","version":15,"popularity":32385,"codepoint":57546,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","feedback","message","speech"],"sizes_px":[24]},{"name":"chat_bubble_outline","version":18,"popularity":40878,"codepoint":57547,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","feedback","message","outline","speech"],"sizes_px":[24]},{"name":"check","version":18,"popularity":106506,"codepoint":58826,"unsupported_families":[],"categories":["navigation"],"tags":["DISABLE_IOS","check","confirm","correct","disable_ios","done","enter","mark","ok","okay","select","tick","yes"],"sizes_px":[24]},{"name":"check_box","version":16,"popularity":123242,"codepoint":59444,"unsupported_families":[],"categories":["toggle"],"tags":["approved","box","button","check","component","control","form","mark","ok","select","selected","selection","tick","toggle","ui","yes"],"sizes_px":[24]},{"name":"check_box_outline_blank","version":16,"popularity":100326,"codepoint":59445,"unsupported_families":[],"categories":["toggle"],"tags":["blank","box","button","check","component","control","dash","dashed","deselected","empty","form","outline","select","selection","square","tick","toggle","ui"],"sizes_px":[24]},{"name":"check_circle","version":19,"popularity":402910,"codepoint":59500,"unsupported_families":[],"categories":["action"],"tags":["approve","check","circle","complete","confirm","done","mark","ok","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"check_circle_outline","version":12,"popularity":130111,"codepoint":59693,"unsupported_families":[],"categories":["action"],"tags":["approve","check","circle","complete","done","finished","mark","ok","outline","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"checklist","version":3,"popularity":37132,"codepoint":59057,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","approve","check","checklist","complete","doc","done","edit","editing","editor","format","list","mark","notes","ok","select","sheet","spreadsheet","text","tick","type","validate","verified","writing","yes"],"sizes_px":[20,24]},{"name":"checklist_rtl","version":3,"popularity":14678,"codepoint":59059,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","approve","check","checklist","complete","doc","done","edit","editing","editor","format","list","mark","notes","ok","rtl","select","sheet","spreadsheet","text","tick","type","validate","verified","writing","yes"],"sizes_px":[20,24]},{"name":"checkroom","version":8,"popularity":13075,"codepoint":61854,"unsupported_families":[],"categories":["places"],"tags":["checkroom","closet","clothes","coat check","hanger"],"sizes_px":[24]},{"name":"chevron_left","version":16,"popularity":125529,"codepoint":58827,"unsupported_families":[],"categories":["navigation"],"tags":["DISABLE_IOS","arrow","arrows","chevron","direction","disable_ios","left"],"sizes_px":[24]},{"name":"chevron_right","version":16,"popularity":218399,"codepoint":58828,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","chevron","direction","right"],"sizes_px":[24]},{"name":"child_care","version":12,"popularity":10638,"codepoint":60225,"unsupported_families":[],"categories":["places"],"tags":["babies","baby","care","child","children","face","infant","kids","newborn","toddler","young"],"sizes_px":[24]},{"name":"child_friendly","version":12,"popularity":6341,"codepoint":60226,"unsupported_families":[],"categories":["places"],"tags":["baby","care","carriage","child","children","friendly","infant","kid","newborn","stroller","toddler","young"],"sizes_px":[24]},{"name":"chrome_reader_mode","version":12,"popularity":6122,"codepoint":59501,"unsupported_families":[],"categories":["action"],"tags":["chrome","mode","read","reader","text"],"sizes_px":[24]},{"name":"church","version":2,"popularity":3870,"codepoint":60078,"unsupported_families":[],"categories":["maps"],"tags":["christian","christianity","ideology","religion","spiritual","worship"],"sizes_px":[20,24]},{"name":"circle","version":11,"popularity":58411,"codepoint":61258,"unsupported_families":[],"categories":["image"],"tags":["angle","circle","eye","fish","full","geometry","image","lens","moon","panorama","photo","photography","picture","wide"],"sizes_px":[24]},{"name":"circle_notifications","version":11,"popularity":16513,"codepoint":59796,"unsupported_families":[],"categories":["action"],"tags":["active","alarm","alert","bell","chime","circle","notifications","notify","reminder","ring","sound"],"sizes_px":[24]},{"name":"class","version":11,"popularity":14187,"codepoint":59502,"unsupported_families":[],"categories":["action"],"tags":["archive","book","bookmark","class","favorite","label","library","read","reading","remember","ribbon","save","tag"],"sizes_px":[24]},{"name":"clean_hands","version":8,"popularity":5014,"codepoint":61983,"unsupported_families":[],"categories":["social"],"tags":["bacteria","clean","disinfect","germs","gesture","hand","hands","sanitize","sanitizer"],"sizes_px":[24]},{"name":"cleaning_services","version":12,"popularity":14319,"codepoint":61695,"unsupported_families":[],"categories":["maps"],"tags":["clean","cleaning","dust","services","sweep"],"sizes_px":[20,24]},{"name":"clear","version":12,"popularity":105518,"codepoint":57676,"unsupported_families":[],"categories":["content"],"tags":["back","cancel","clear","correct","delete","erase","exit","remove","x"],"sizes_px":[24]},{"name":"clear_all","version":12,"popularity":11002,"codepoint":57528,"unsupported_families":[],"categories":["communication"],"tags":["all","clear","doc","document","format","lines","list"],"sizes_px":[24]},{"name":"close","version":19,"popularity":419712,"codepoint":58829,"unsupported_families":[],"categories":["navigation"],"tags":["cancel","clear","close","exit","remove","stop","x"],"sizes_px":[24]},{"name":"close_fullscreen","version":7,"popularity":22899,"codepoint":61903,"unsupported_families":[],"categories":["action"],"tags":["action","arrow","arrows","close","collapse","direction","full","fullscreen","minimize","screen"],"sizes_px":[24]},{"name":"closed_caption","version":12,"popularity":5358,"codepoint":57372,"unsupported_families":[],"categories":["av"],"tags":["accessible","alphabet","caption","cc","character","closed","decoder","font","language","letters","media","movies","subtitle","subtitles","symbol","text","tv","type"],"sizes_px":[24]},{"name":"closed_caption_disabled","version":8,"popularity":1592,"codepoint":61916,"unsupported_families":[],"categories":["av"],"tags":["accessible","alphabet","caption","cc","character","closed","decoder","disabled","enabled","font","language","letters","media","movies","off","on","slash","subtitle","subtitles","symbol","text","tv","type"],"sizes_px":[24]},{"name":"closed_caption_off","version":11,"popularity":3045,"codepoint":59798,"unsupported_families":[],"categories":["av"],"tags":["accessible","alphabet","caption","cc","character","closed","decoder","font","language","letters","media","movies","off","outline","subtitle","subtitles","symbol","text","tv","type"],"sizes_px":[24]},{"name":"cloud","version":12,"popularity":31867,"codepoint":58045,"unsupported_families":[],"categories":["file"],"tags":["climate","cloud","connection","internet","network","queue","sky","temperature","upload","weather"],"sizes_px":[24]},{"name":"cloud_circle","version":12,"popularity":4310,"codepoint":58046,"unsupported_families":[],"categories":["file"],"tags":["app","application","backup","circle","cloud","connection","drive","files","folders","internet","network","sky","storage","upload"],"sizes_px":[24]},{"name":"cloud_done","version":12,"popularity":11867,"codepoint":58047,"unsupported_families":[],"categories":["file"],"tags":["app","application","approve","backup","check","cloud","complete","connection","done","drive","files","folders","internet","mark","network","ok","select","sky","storage","tick","upload","validate","verified","yes"],"sizes_px":[24]},{"name":"cloud_download","version":12,"popularity":29754,"codepoint":58048,"unsupported_families":[],"categories":["file"],"tags":["app","application","arrow","backup","cloud","connection","down","download","drive","files","folders","internet","network","sky","storage","upload"],"sizes_px":[24]},{"name":"cloud_off","version":16,"popularity":9215,"codepoint":58049,"unsupported_families":[],"categories":["file"],"tags":["app","application","backup","cloud","connection","disabled","drive","enabled","files","folders","internet","network","off","offline","on","sky","slash","storage","upload"],"sizes_px":[24]},{"name":"cloud_queue","version":12,"popularity":11041,"codepoint":58050,"unsupported_families":[],"categories":["file"],"tags":["climate","cloud","connection","internet","network","queue","sky","temperature","upload","weather"],"sizes_px":[24]},{"name":"cloud_sync","version":1,"popularity":7073,"codepoint":60250,"unsupported_families":[],"categories":["file"],"tags":["app","application","around","backup","cloud","connection","drive","files","folders","inprogress","internet","load","loading refresh","network","renew","rotate","sky","storage","turn","upload"],"sizes_px":[20,24]},{"name":"cloud_upload","version":12,"popularity":39082,"codepoint":58051,"unsupported_families":[],"categories":["file"],"tags":["app","application","arrow","backup","cloud","connection","download","drive","files","folders","internet","network","sky","storage","up","upload"],"sizes_px":[24]},{"name":"co2","version":3,"popularity":3557,"codepoint":59312,"unsupported_families":[],"categories":["social"],"tags":["carbon","chemical","co2","dioxide","gas"],"sizes_px":[20,24]},{"name":"co_present","version":1,"popularity":5196,"codepoint":60144,"unsupported_families":[],"categories":["communication"],"tags":["arrow","co-present","presentation","screen","share","site","slides","togather","web","website"],"sizes_px":[20,24]},{"name":"code","version":11,"popularity":58140,"codepoint":59503,"unsupported_families":[],"categories":["action"],"tags":["brackets","code","css","develop","developer","engineer","engineering","html","platform"],"sizes_px":[24]},{"name":"code_off","version":4,"popularity":4518,"codepoint":58611,"unsupported_families":[],"categories":["action"],"tags":["brackets","code","css","develop","developer","disabled","enabled","engineer","engineering","html","off","on","platform","slash"],"sizes_px":[20,24]},{"name":"coffee","version":9,"popularity":10597,"codepoint":61423,"unsupported_families":[],"categories":["search"],"tags":["beverage","coffee","cup","drink","mug","plate","set","tea"],"sizes_px":[24]},{"name":"coffee_maker","version":9,"popularity":4411,"codepoint":61424,"unsupported_families":[],"categories":["search"],"tags":["appliances","beverage","coffee","cup","drink","machine","maker","mug"],"sizes_px":[24]},{"name":"collections","version":12,"popularity":37779,"codepoint":58294,"unsupported_families":[],"categories":["image"],"tags":["album","collections","gallery","image","landscape","library","mountain","mountains","photo","photography","picture","stack"],"sizes_px":[24]},{"name":"collections_bookmark","version":12,"popularity":9409,"codepoint":58417,"unsupported_families":[],"categories":["image"],"tags":["album","archive","bookmark","collections","favorite","gallery","label","library","read","reading","remember","ribbon","save","stack","tag"],"sizes_px":[24]},{"name":"color_lens","version":16,"popularity":10556,"codepoint":58295,"unsupported_families":[],"categories":["image"],"tags":["art","color","lens","paint","pallet"],"sizes_px":[24]},{"name":"colorize","version":12,"popularity":6434,"codepoint":58296,"unsupported_families":[],"categories":["image"],"tags":["color","colorize","dropper","extract","eye","picker","tool"],"sizes_px":[24]},{"name":"comment","version":19,"popularity":24427,"codepoint":57529,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","feedback","message","outline","speech"],"sizes_px":[24]},{"name":"comment_bank","version":15,"popularity":5002,"codepoint":59982,"unsupported_families":[],"categories":["action"],"tags":["archive","bank","bookmark","bubble","cchat","comment","communicate","favorite","label","library","message","remember","ribbon","save","speech","tag"],"sizes_px":[20,24]},{"name":"comments_disabled","version":3,"popularity":1916,"codepoint":59298,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","comments","communicate","disabled","enabled","feedback","message","off","offline","on","slash","speech"],"sizes_px":[20,24]},{"name":"commit","version":1,"popularity":2502,"codepoint":60149,"unsupported_families":[],"categories":["action"],"tags":["accomplish","bind","circle","commit","dedicate","execute","line","perform","pledge"],"sizes_px":[20,24]},{"name":"commute","version":12,"popularity":10786,"codepoint":59712,"unsupported_families":[],"categories":["action"],"tags":["automobile","car","commute","direction","maps","public","train","transportation","trip","vehicle"],"sizes_px":[24]},{"name":"compare","version":12,"popularity":7944,"codepoint":58297,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustment","compare","edit","editing","edits","enhance","fix","image","images","photo","photography","photos","scan","settings"],"sizes_px":[24]},{"name":"compare_arrows","version":14,"popularity":20369,"codepoint":59669,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","collide","compare","direction","left","pressure","push","right","together"],"sizes_px":[24]},{"name":"compass_calibration","version":12,"popularity":1906,"codepoint":58748,"unsupported_families":[],"categories":["maps"],"tags":["calibration","compass","connection","internet","location","maps","network","refresh","service","signal","wifi","wireless"],"sizes_px":[24]},{"name":"compost","version":3,"popularity":9106,"codepoint":59233,"unsupported_families":[],"categories":["social"],"tags":["bio","compost","compostable","decomposable","decompose","eco","green","leaf","leafs","nature","organic","plant","recycle","sustainability","sustainable"],"sizes_px":[20,24]},{"name":"compress","version":10,"popularity":6193,"codepoint":59725,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","collide","compress","pressure","push","together"],"sizes_px":[24]},{"name":"computer","version":12,"popularity":33891,"codepoint":58122,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","computer","desktop","device","hardware","iOS","mac","monitor","web","window"],"sizes_px":[24]},{"name":"confirmation_number","version":15,"popularity":24626,"codepoint":58936,"unsupported_families":[],"categories":["notification"],"tags":["admission","confirmation","entertainment","event","numbers","ticket"],"sizes_px":[24]},{"name":"connect_without_contact","version":7,"popularity":11519,"codepoint":61987,"unsupported_families":[],"categories":["social"],"tags":["communicating","connect","contact","distance","people","signal","social","socialize","without"],"sizes_px":[24]},{"name":"connected_tv","version":11,"popularity":3693,"codepoint":59800,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","airplay","chrome","connect","connected","desktop","device","display","hardware","iOS","mac","monitor","screen","screencast","streaming","television","tv","web","window","wireless"],"sizes_px":[24]},{"name":"connecting_airports","version":2,"popularity":2680,"codepoint":59337,"unsupported_families":[],"categories":["maps"],"tags":["air","aircraft","airplane","airplanes","airport","flight","flights","fly","flying","mode","on","plane","planes","signal","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"construction","version":11,"popularity":49773,"codepoint":59964,"unsupported_families":[],"categories":["social"],"tags":["build","carpenter","construction","equipment","fix","hammer","improvement","industrial","industry","repair","tools","wrench"],"sizes_px":[20,24]},{"name":"contact_emergency","version":1,"popularity":2316,"codepoint":63697,"unsupported_families":[],"categories":["communication"],"tags":["account","avatar","call","cell","contacts","face","human","info","information","mobile","people","person","phone","profile","user"],"sizes_px":[20,24]},{"name":"contact_mail","version":13,"popularity":29528,"codepoint":57552,"unsupported_families":[],"categories":["communication"],"tags":["account","address","avatar","communicate","contact","email","face","human","info","information","mail","message","people","person","profile","user"],"sizes_px":[24]},{"name":"contact_page","version":6,"popularity":30407,"codepoint":61998,"unsupported_families":[],"categories":["action"],"tags":["account","avatar","contact","data","doc","document","drive","face","file","folder","folders","human","page","people","person","profile","sheet","slide","storage","user","writing"],"sizes_px":[24]},{"name":"contact_phone","version":13,"popularity":18588,"codepoint":57551,"unsupported_families":[],"categories":["communication"],"tags":["account","avatar","call","communicate","contact","face","human","info","information","message","mobile","people","person","phone","profile","user"],"sizes_px":[24]},{"name":"contact_support","version":13,"popularity":56827,"codepoint":59724,"unsupported_families":[],"categories":["action"],"tags":["?","bubble","chat","comment","communicate","contact","help","info","information","mark","message","punctuation","question","question mark","speech","support","symbol"],"sizes_px":[24]},{"name":"contactless","version":11,"popularity":8866,"codepoint":60017,"unsupported_families":[],"categories":["action"],"tags":["bluetooth","cash","connect","connection","connectivity","contact","contactless","credit","device","finance","pay","payment","signal","transaction","wifi","wireless"],"sizes_px":[20,24]},{"name":"contacts","version":11,"popularity":24644,"codepoint":57530,"unsupported_families":[],"categories":["communication"],"tags":["account","avatar","call","cell","contacts","face","human","info","information","mobile","people","person","phone","profile","user"],"sizes_px":[24]},{"name":"content_copy","version":17,"popularity":134495,"codepoint":57677,"unsupported_families":[],"categories":["content"],"tags":["content","copy","cut","doc","document","duplicate","file","multiple","paste","stack"],"sizes_px":[24]},{"name":"content_cut","version":17,"popularity":16676,"codepoint":57678,"unsupported_families":[],"categories":["content"],"tags":["content","copy","cut","doc","document","file","paste","scissors","trim"],"sizes_px":[24]},{"name":"content_paste","version":14,"popularity":32109,"codepoint":57679,"unsupported_families":[],"categories":["content"],"tags":["clipboard","content","copy","cut","doc","document","file","multiple","paste"],"sizes_px":[24]},{"name":"content_paste_go","version":2,"popularity":4503,"codepoint":60046,"unsupported_families":[],"categories":["content"],"tags":["clipboard","content","disabled","doc","document","enabled","file","go","on","paste","slash"],"sizes_px":[20,24]},{"name":"content_paste_off","version":4,"popularity":3055,"codepoint":58616,"unsupported_families":[],"categories":["content"],"tags":["clipboard","content","disabled","doc","document","enabled","file","off","on","paste","slash"],"sizes_px":[20,24]},{"name":"content_paste_search","version":2,"popularity":8353,"codepoint":60059,"unsupported_families":[],"categories":["content"],"tags":["clipboard","content","doc","document","file","find","paste","search","trace","track"],"sizes_px":[20,24]},{"name":"contrast","version":1,"popularity":3474,"codepoint":60215,"unsupported_families":[],"categories":["image"],"tags":["black","contrast","dark theme","edit","editing","effect","filter","grayscale","image","images","photography","picture","pictures","settings","white"],"sizes_px":[20,24]},{"name":"control_camera","version":12,"popularity":4232,"codepoint":57460,"unsupported_families":[],"categories":["av"],"tags":["adjust","arrow","arrows","camera","center","control","direction","left","move","reposition","right"],"sizes_px":[24]},{"name":"control_point","version":13,"popularity":16377,"codepoint":58298,"unsupported_families":[],"categories":["image"],"tags":["+","add","circle","control","plus","point"],"sizes_px":[24]},{"name":"control_point_duplicate","version":12,"popularity":3981,"codepoint":58299,"unsupported_families":[],"categories":["image"],"tags":["+","add","circle","control","duplicate","multiple","new","plus","point","symbol"],"sizes_px":[24]},{"name":"cookie","version":2,"popularity":6121,"codepoint":60076,"unsupported_families":[],"categories":["social"],"tags":["biscuit","cookies","data","dessert","wafer"],"sizes_px":[20,24]},{"name":"copy_all","version":8,"popularity":9385,"codepoint":58092,"unsupported_families":[],"categories":["content"],"tags":["all","content","copy","cut","dash","dashed","doc","document","file","multiple","page","paper","past"],"sizes_px":[20,24]},{"name":"copyright","version":17,"popularity":18222,"codepoint":59660,"unsupported_families":[],"categories":["action"],"tags":["alphabet","c","character","copyright","emblem","font","legal","letters","owner","symbol","text"],"sizes_px":[24]},{"name":"coronavirus","version":7,"popularity":18048,"codepoint":61985,"unsupported_families":[],"categories":["social"],"tags":["19","bacteria","coronavirus","covid","disease","germs","illness","sick","social"],"sizes_px":[24]},{"name":"corporate_fare","version":7,"popularity":19082,"codepoint":61904,"unsupported_families":[],"categories":["places"],"tags":["architecture","building","business","corporate","estate","fare","organization","place","real","residence","residential","shelter"],"sizes_px":[24]},{"name":"cottage","version":4,"popularity":16833,"codepoint":58759,"unsupported_families":[],"categories":["places"],"tags":["architecture","beach","cottage","estate","home","house","lake","lodge","maps","place","real","residence","residential","stay","traveling"],"sizes_px":[20,24]},{"name":"countertops","version":6,"popularity":3273,"codepoint":61943,"unsupported_families":[],"categories":["places"],"tags":["counter","countertops","home","house","kitchen","sink","table","tops"],"sizes_px":[24]},{"name":"create","version":16,"popularity":37803,"codepoint":57680,"unsupported_families":[],"categories":["content"],"tags":["compose","create","edit","editing","input","new","pen","pencil","write","writing"],"sizes_px":[24]},{"name":"create_new_folder","version":11,"popularity":16025,"codepoint":58060,"unsupported_families":[],"categories":["file"],"tags":["+","add","create","data","doc","document","drive","file","folder","new","plus","sheet","slide","storage","symbol"],"sizes_px":[24]},{"name":"credit_card","version":12,"popularity":92881,"codepoint":59504,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","money","online","pay","payment","price","shopping","symbol"],"sizes_px":[24]},{"name":"credit_card_off","version":4,"popularity":5727,"codepoint":58612,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","disabled","dollars","enabled","finance","money","off","online","pay","payment","price","shopping","slash","symbol"],"sizes_px":[20,24]},{"name":"credit_score","version":10,"popularity":23687,"codepoint":61425,"unsupported_families":[],"categories":["device"],"tags":["approve","bill","card","cash","check","coin","commerce","complete","cost","credit","currency","dollars","done","finance","loan","mark","money","ok","online","pay","payment","score","select","symbol","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"crib","version":4,"popularity":1921,"codepoint":58760,"unsupported_families":[],"categories":["places"],"tags":["babies","baby","bassinet","bed","child","children","cradle","crib","infant","kid","newborn","sleeping","toddler"],"sizes_px":[20,24]},{"name":"crisis_alert","version":1,"popularity":2987,"codepoint":60393,"unsupported_families":[],"categories":["maps"],"tags":["!","alert","attention","bullseye","caution","crisis","danger","error","exclamation","important","mark","notification","symbol","target","warning"],"sizes_px":[20,24]},{"name":"crop","version":12,"popularity":7131,"codepoint":58302,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","area","crop","edit","editing","frame","image","images","photo","photos","rectangle","settings","size","square"],"sizes_px":[24]},{"name":"crop_16_9","version":13,"popularity":2859,"codepoint":58300,"unsupported_families":[],"categories":["image"],"tags":["16","9","adjust","adjustments","area","by","crop","edit","editing","frame","image","images","photo","photos","rectangle","settings","size","square"],"sizes_px":[20,24]},{"name":"crop_3_2","version":13,"popularity":1763,"codepoint":58301,"unsupported_families":[],"categories":["image"],"tags":["2","3","adjust","adjustments","area","by","crop","edit","editing","frame","image","images","photo","photos","rectangle","settings","size","square"],"sizes_px":[20,24]},{"name":"crop_5_4","version":13,"popularity":2086,"codepoint":58303,"unsupported_families":[],"categories":["image"],"tags":["4","5","adjust","adjustments","area","by","crop","edit","editing settings","frame","image","images","photo","photos","rectangle","size","square"],"sizes_px":[20,24]},{"name":"crop_7_5","version":13,"popularity":2309,"codepoint":58304,"unsupported_families":[],"categories":["image"],"tags":["5","7","adjust","adjustments","area","by","crop","editing","frame","image","images","photo","photos","rectangle","settings","size","square"],"sizes_px":[20,24]},{"name":"crop_din","version":12,"popularity":4136,"codepoint":58305,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","area","crop","din","edit","editing","frame","image","images","photo","photos","rectangle","settings","size","square"],"sizes_px":[24]},{"name":"crop_free","version":12,"popularity":10427,"codepoint":58306,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","crop","display","edit","editing","focus","frame","free","image","photo","photos","settings","size","zoom"],"sizes_px":[24]},{"name":"crop_landscape","version":12,"popularity":1777,"codepoint":58307,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","area","crop","edit","editing","frame","image","images","landscape","photo","photos","settings","size"],"sizes_px":[24]},{"name":"crop_original","version":13,"popularity":6263,"codepoint":58308,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","area","crop","edit","editing","frame","image","images","original","photo","photos","picture","settings","size"],"sizes_px":[24]},{"name":"crop_portrait","version":12,"popularity":2496,"codepoint":58309,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","area","crop","edit","editing","frame","image","images","photo","photos","portrait","rectangle","settings","size","square"],"sizes_px":[24]},{"name":"crop_rotate","version":12,"popularity":2216,"codepoint":58423,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","area","arrow","arrows","crop","edit","editing","frame","image","images","photo","photos","rotate","settings","size","turn"],"sizes_px":[24]},{"name":"crop_square","version":12,"popularity":9385,"codepoint":58310,"unsupported_families":[],"categories":["image"],"tags":["adjust","adjustments","app","application","area","components","crop","design","edit","editing","expand","frame","image","images","interface","open","photo","photos","rectangle","screen","settings","shape","shapes","site","size","square","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"cruelty_free","version":3,"popularity":6883,"codepoint":59289,"unsupported_families":[],"categories":["social"],"tags":["animal","bunny","cruelty","eco","free","nature","rabbit","social","sustainability","sustainable","testing"],"sizes_px":[20,24]},{"name":"css","version":1,"popularity":2275,"codepoint":60307,"unsupported_families":[],"categories":["action"],"tags":["alphabet","brackets","character","code","css","develop","developer","engineer","engineering","font","html","letters","platform","symbol","text","type"],"sizes_px":[20,24]},{"name":"currency_bitcoin","version":1,"popularity":4056,"codepoint":60357,"unsupported_families":[],"categories":["image"],"tags":["bill","blockchain","card","cash","coin","commerce","cost","credit","currency","digital","dollar","dollars","finance","franc","money","online","pay","payment","price","shopping","symbol"],"sizes_px":[20,24]},{"name":"currency_exchange","version":1,"popularity":21343,"codepoint":60272,"unsupported_families":[],"categories":["action"],"tags":["360","around","arrow","arrows","cash","coin","commerce","currency","direction","dollars","exchange","inprogress","money","pay","renew","rotate","sync","turn","universal"],"sizes_px":[20,24]},{"name":"currency_franc","version":1,"popularity":763,"codepoint":60154,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","franc","money","online","pay","payment","price","shopping","symbol"],"sizes_px":[20,24]},{"name":"currency_lira","version":1,"popularity":1034,"codepoint":60143,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","lira","money","online","pay","payment","price","shopping","symbol"],"sizes_px":[20,24]},{"name":"currency_pound","version":1,"popularity":3131,"codepoint":60145,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","money","online","pay","payment","pound","price","shopping","symbol"],"sizes_px":[20,24]},{"name":"currency_ruble","version":1,"popularity":2208,"codepoint":60140,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","money","online","pay","payment","price","ruble","shopping","symbol"],"sizes_px":[20,24]},{"name":"currency_rupee","version":1,"popularity":10299,"codepoint":60151,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","money","online","pay","payment","price","rupee","shopping","symbol"],"sizes_px":[20,24]},{"name":"currency_yen","version":1,"popularity":3867,"codepoint":60155,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","money","online","pay","payment","price","shopping","symbol","yen"],"sizes_px":[20,24]},{"name":"currency_yuan","version":1,"popularity":1039,"codepoint":60153,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollar","dollars","finance","money","online","pay","payment","price","shopping","symbol","yuan"],"sizes_px":[20,24]},{"name":"curtains","version":1,"popularity":672,"codepoint":60446,"unsupported_families":[],"categories":["home"],"tags":["blinds","cover","curtains","nest","open","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"curtains_closed","version":1,"popularity":647,"codepoint":60445,"unsupported_families":[],"categories":["home"],"tags":["blinds","closed","cover","curtains","nest","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"cyclone","version":1,"popularity":1439,"codepoint":60373,"unsupported_families":[],"categories":["social"],"tags":["crisis","disaster","natural","rain","storm","water","weather","wind","winds"],"sizes_px":[20,24]},{"name":"dangerous","version":12,"popularity":21653,"codepoint":59802,"unsupported_families":[],"categories":["action"],"tags":["broken","danger","dangerous","fix","no","sign","stop","update","warning","wrong","x"],"sizes_px":[20,24]},{"name":"dark_mode","version":4,"popularity":50134,"codepoint":58652,"unsupported_families":[],"categories":["device"],"tags":["app","application","dark","device","interface","mode","moon","night","silent","theme","ui","ux","website"],"sizes_px":[20,24]},{"name":"dashboard","version":13,"popularity":138008,"codepoint":59505,"unsupported_families":[],"categories":["action"],"tags":["cards","dashboard","format","grid","layout","rectangle","shapes","square","view","web","website"],"sizes_px":[24]},{"name":"dashboard_customize","version":11,"popularity":23459,"codepoint":59803,"unsupported_families":[],"categories":["action"],"tags":["cards","customize","dashboard","format","layout","rectangle","shapes","square","web","website"],"sizes_px":[24]},{"name":"data_array","version":2,"popularity":1959,"codepoint":60113,"unsupported_families":[],"categories":["editor"],"tags":["array","brackets","code","coder","data","parentheses"],"sizes_px":[20,24]},{"name":"data_exploration","version":3,"popularity":7663,"codepoint":59247,"unsupported_families":[],"categories":["action"],"tags":["analytics","arrow","chart","data","diagram","exploration","graph","infographic","measure","metrics","statistics","tracking"],"sizes_px":[20,24]},{"name":"data_object","version":2,"popularity":5297,"codepoint":60115,"unsupported_families":[],"categories":["editor"],"tags":["brackets","code","coder","data","object","parentheses"],"sizes_px":[20,24]},{"name":"data_saver_off","version":10,"popularity":3204,"codepoint":61426,"unsupported_families":[],"categories":["device"],"tags":["analytics","bar","bars","chart","data","diagram","donut","graph","infographic","measure","metrics","off","on","ring","saver","statistics","tracking"],"sizes_px":[24]},{"name":"data_saver_on","version":10,"popularity":3132,"codepoint":61427,"unsupported_families":[],"categories":["device"],"tags":["+","add","analytics","chart","data","diagram","graph","infographic","measure","metrics","new","on","plus","ring","saver","statistics","symbol","tracking"],"sizes_px":[24]},{"name":"data_thresholding","version":1,"popularity":2591,"codepoint":60319,"unsupported_families":[],"categories":["action"],"tags":["data","hidden","privacy","thresholding","thresold"],"sizes_px":[20,24]},{"name":"data_usage","version":12,"popularity":7290,"codepoint":57775,"unsupported_families":[],"categories":["device"],"tags":["analytics","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking","usage"],"sizes_px":[24]},{"name":"dataset","version":1,"popularity":1836,"codepoint":63726,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[20,24]},{"name":"dataset_linked","version":1,"popularity":1036,"codepoint":63727,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[20,24]},{"name":"date_range","version":12,"popularity":104549,"codepoint":59670,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","month","range","remember","reminder","schedule","time","today","week"],"sizes_px":[24]},{"name":"deblur","version":1,"popularity":1167,"codepoint":60279,"unsupported_families":[],"categories":["image"],"tags":["adjust","deblur","edit","editing","enhance","face","image","lines","photo","photography","sharpen"],"sizes_px":[20,24]},{"name":"deck","version":11,"popularity":5572,"codepoint":59970,"unsupported_families":[],"categories":["social"],"tags":["chairs","deck","home","house","outdoors","outside","patio","social","terrace","umbrella","yard"],"sizes_px":[20,24]},{"name":"dehaze","version":12,"popularity":5996,"codepoint":58311,"unsupported_families":[],"categories":["image"],"tags":["adjust","dehaze","edit","editing","enhance","haze","image","lines","photo","photography","remove"],"sizes_px":[24]},{"name":"delete","version":17,"popularity":374284,"codepoint":59506,"unsupported_families":[],"categories":["action"],"tags":["bin","can","delete","garbage","remove","trash"],"sizes_px":[24]},{"name":"delete_forever","version":15,"popularity":66608,"codepoint":59691,"unsupported_families":[],"categories":["action"],"tags":["bin","can","cancel","clear","delete","exit","forever","garbage","remove","trash","x"],"sizes_px":[24]},{"name":"delete_outline","version":11,"popularity":88269,"codepoint":59694,"unsupported_families":[],"categories":["action"],"tags":["bin","can","delete","garbage","outline","remove","trash"],"sizes_px":[24]},{"name":"delete_sweep","version":12,"popularity":12738,"codepoint":57708,"unsupported_families":[],"categories":["content"],"tags":["bin","can","delete","garbage","remove","sweep","trash"],"sizes_px":[24]},{"name":"delivery_dining","version":15,"popularity":16584,"codepoint":60018,"unsupported_families":[],"categories":["maps"],"tags":["delivery","dining","food","meal","restaurant","scooter","takeout","transportation","vehicle","vespa"],"sizes_px":[20,24]},{"name":"density_large","version":1,"popularity":1379,"codepoint":60329,"unsupported_families":[],"categories":["action"],"tags":["density","horizontal","large","lines","rule","rules"],"sizes_px":[20,24]},{"name":"density_medium","version":1,"popularity":6572,"codepoint":60318,"unsupported_families":[],"categories":["action"],"tags":["density","horizontal","lines","medium","rule","rules"],"sizes_px":[20,24]},{"name":"density_small","version":1,"popularity":2733,"codepoint":60328,"unsupported_families":[],"categories":["action"],"tags":["density","horizontal","lines","rule","rules","small"],"sizes_px":[20,24]},{"name":"departure_board","version":11,"popularity":5001,"codepoint":58742,"unsupported_families":[],"categories":["maps"],"tags":["automobile","board","bus","car","cars","clock","departure","maps","public","schedule","time","transportation","travel","vehicle"],"sizes_px":[24]},{"name":"description","version":12,"popularity":257637,"codepoint":59507,"unsupported_families":[],"categories":["action"],"tags":["article","data","description","doc","document","drive","file","folder","folders","notes","page","paper","sheet","slide","text","writing"],"sizes_px":[24]},{"name":"deselect","version":1,"popularity":1797,"codepoint":60342,"unsupported_families":[],"categories":["content"],"tags":["all","disabled","enabled","off","on","selection","slash","square","tool"],"sizes_px":[20,24]},{"name":"design_services","version":12,"popularity":17011,"codepoint":61706,"unsupported_families":[],"categories":["maps"],"tags":["compose","create","design","draft","edit","editing","input","pen","pencil","ruler","service","write","writing"],"sizes_px":[20,24]},{"name":"desk","version":1,"popularity":664,"codepoint":63732,"unsupported_families":[],"categories":["places"],"tags":[],"sizes_px":[20,24]},{"name":"desktop_access_disabled","version":11,"popularity":2340,"codepoint":59805,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","access","chrome","desktop","device","disabled","display","enabled","hardware","iOS","mac","monitor","off","offline","on","screen","slash","web","window"],"sizes_px":[24]},{"name":"desktop_mac","version":17,"popularity":6197,"codepoint":58123,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","desktop","device","display","hardware","iOS","mac","monitor","screen","web","window"],"sizes_px":[24]},{"name":"desktop_windows","version":13,"popularity":28405,"codepoint":58124,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","desktop","device","display","hardware","iOS","mac","monitor","screen","television","tv","web","window","windows"],"sizes_px":[24]},{"name":"details","version":16,"popularity":5421,"codepoint":58312,"unsupported_families":[],"categories":["image"],"tags":["details","edit","editing","enhance","image","photo","photography","sharpen","triangle"],"sizes_px":[24]},{"name":"developer_board","version":13,"popularity":10215,"codepoint":58125,"unsupported_families":[],"categories":["hardware"],"tags":["board","chip","computer","developer","development","hardware","microchip","processor"],"sizes_px":[24]},{"name":"developer_board_off","version":4,"popularity":1149,"codepoint":58623,"unsupported_families":[],"categories":["hardware"],"tags":["board","chip","computer","developer","development","disabled","enabled","hardware","microchip","off","on","processor","slash"],"sizes_px":[20,24]},{"name":"developer_mode","version":12,"popularity":6706,"codepoint":57776,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","bracket","cell","code","developer","development","device","engineer","hardware","iOS","mobile","mode","phone","tablet"],"sizes_px":[24]},{"name":"device_hub","version":12,"popularity":7998,"codepoint":58165,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","circle","computer","desktop","device","hardware","hub","iOS","laptop","mobile","monitor","phone","square","tablet","triangle","watch","wearable","web"],"sizes_px":[24]},{"name":"device_thermostat","version":11,"popularity":7563,"codepoint":57855,"unsupported_families":[],"categories":["device"],"tags":["celsius","device","fahrenheit","meter","temp","temperature","thermometer","thermostat"],"sizes_px":[24]},{"name":"device_unknown","version":12,"popularity":3094,"codepoint":58169,"unsupported_families":[],"categories":["hardware"],"tags":["?","Android","OS","assistance","cell","device","hardware","help","iOS","info","information","mobile","phone","punctuation","question mark","support","symbol","tablet","unknown"],"sizes_px":[24]},{"name":"devices","version":17,"popularity":32525,"codepoint":57777,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","computer","desktop","device","hardware","iOS","laptop","mobile","monitor","phone","tablet","watch","wearable","web"],"sizes_px":[24]},{"name":"devices_fold","version":1,"popularity":620,"codepoint":60382,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","cell","dash","dashed","device","fold","foldable","hardware","iOS","mobile","phone","tablet"],"sizes_px":[20,24]},{"name":"devices_other","version":12,"popularity":6411,"codepoint":58167,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","ar","cell","chrome","desktop","device","gadget","hardware","iOS","ipad","mac","mobile","monitor","other","phone","tablet","virtual_reality","vr","watch","wearables","window"],"sizes_px":[24]},{"name":"dialer_sip","version":12,"popularity":1910,"codepoint":57531,"unsupported_families":[],"categories":["communication"],"tags":["alphabet","call","cell","character","contact","device","dialer","font","hardware","initiation","internet","letters","mobile","over","phone","protocol","routing","session","sip","symbol","telephone","text","type","voice"],"sizes_px":[24]},{"name":"dialpad","version":12,"popularity":9564,"codepoint":57532,"unsupported_families":[],"categories":["communication"],"tags":["buttons","call","contact","device","dial","dialpad","dots","mobile","numbers","pad","phone"],"sizes_px":[24]},{"name":"diamond","version":2,"popularity":12348,"codepoint":60117,"unsupported_families":[],"categories":["maps"],"tags":["diamond","fashion","gems","jewelry","logo","retail","valuable","valuables"],"sizes_px":[20,24]},{"name":"difference","version":1,"popularity":3889,"codepoint":60285,"unsupported_families":[],"categories":["file"],"tags":["compare","content","copy","cut","diff","difference","doc","document","duplicate","file","multiple","past","stack"],"sizes_px":[20,24]},{"name":"dining","version":9,"popularity":4906,"codepoint":61428,"unsupported_families":[],"categories":["search"],"tags":["cafe","cafeteria","cutlery","diner","dining","eat","eating","fork","room","spoon"],"sizes_px":[24]},{"name":"dinner_dining","version":10,"popularity":6351,"codepoint":59991,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","dining","dinner","food","fork","lunch","meal","restaurant","spaghetti","utensils"],"sizes_px":[20,24]},{"name":"directions","version":14,"popularity":11030,"codepoint":58670,"unsupported_families":[],"categories":["maps"],"tags":["arrow","directions","maps","right","route","sign","traffic"],"sizes_px":[24]},{"name":"directions_bike","version":13,"popularity":15026,"codepoint":58671,"unsupported_families":[],"categories":["maps"],"tags":["bicycle","bike","direction","directions","human","maps","person","public","route","transportation"],"sizes_px":[24]},{"name":"directions_boat","version":17,"popularity":9935,"codepoint":58674,"unsupported_families":[],"categories":["maps"],"tags":["automobile","boat","car","cars","direction","directions","ferry","maps","public","transportation","vehicle"],"sizes_px":[24]},{"name":"directions_boat_filled","version":16,"popularity":3400,"codepoint":61429,"unsupported_families":[],"categories":["maps"],"tags":["automobile","boat","car","cars","direction","directions","ferry","filled","maps","public","transportation","vehicle"],"sizes_px":[24]},{"name":"directions_bus","version":12,"popularity":16969,"codepoint":58672,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bus","car","cars","directions","maps","public","transportation","vehicle"],"sizes_px":[24]},{"name":"directions_bus_filled","version":10,"popularity":7219,"codepoint":61430,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bus","car","cars","direction","directions","filled","maps","public","transportation","vehicle"],"sizes_px":[24]},{"name":"directions_car","version":18,"popularity":41322,"codepoint":58673,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","directions","maps","public","transportation","vehicle"],"sizes_px":[24]},{"name":"directions_car_filled","version":10,"popularity":14765,"codepoint":61431,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","directions","maps","public","transportation","vehicle"],"sizes_px":[24]},{"name":"directions_off","version":14,"popularity":1014,"codepoint":61711,"unsupported_families":[],"categories":["notification"],"tags":["arrow","directions","disabled","enabled","maps","off","on","right","route","sign","slash","traffic"],"sizes_px":[24]},{"name":"directions_railway","version":13,"popularity":1705,"codepoint":58676,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"directions_railway_filled","version":10,"popularity":1173,"codepoint":61432,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"directions_run","version":13,"popularity":25664,"codepoint":58726,"unsupported_families":[],"categories":["maps"],"tags":["body","directions","human","jogging","maps","people","person","route","run","running","walk"],"sizes_px":[24]},{"name":"directions_subway","version":12,"popularity":1955,"codepoint":58675,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"directions_subway_filled","version":10,"popularity":1210,"codepoint":61433,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"directions_transit","version":12,"popularity":2622,"codepoint":58677,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"directions_transit_filled","version":10,"popularity":1323,"codepoint":61434,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"directions_walk","version":13,"popularity":21100,"codepoint":58678,"unsupported_families":[],"categories":["maps"],"tags":["body","direction","directions","human","jogging","maps","people","person","route","run","walk"],"sizes_px":[24]},{"name":"dirty_lens","version":15,"popularity":1104,"codepoint":61259,"unsupported_families":[],"categories":["image"],"tags":["camera","dirty","lens","photo","photography","picture","splat"],"sizes_px":[24]},{"name":"disabled_by_default","version":6,"popularity":20041,"codepoint":62000,"unsupported_families":[],"categories":["action"],"tags":["box","by","cancel","clear","close","default","disabled","exit","no","quit","remove","square","stop","x"],"sizes_px":[24]},{"name":"disabled_visible","version":3,"popularity":5532,"codepoint":59246,"unsupported_families":[],"categories":["action"],"tags":["cancel","close","disabled","exit","eye","no","on","quit","remove","reveal","see","show","stop","view","visibility","visible"],"sizes_px":[20,24]},{"name":"disc_full","version":12,"popularity":1872,"codepoint":58896,"unsupported_families":[],"categories":["notification"],"tags":["!","alert","attention","caution","cd","danger","disc","error","exclamation","full","important","mark","music","notification","storage","symbol","warning"],"sizes_px":[24]},{"name":"discount","version":1,"popularity":7656,"codepoint":60361,"unsupported_families":[],"categories":["device"],"tags":[],"sizes_px":[20,24]},{"name":"display_settings","version":1,"popularity":5506,"codepoint":60311,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","application","change","chrome","desktop","details","device","display","gear","hardware","iOS","info","information","mac","monitor","options","personal","screen","service","settings","web","window"],"sizes_px":[20,24]},{"name":"diversity_1","version":1,"popularity":5885,"codepoint":63703,"unsupported_families":[],"categories":["social"],"tags":["committee","diverse","diversity","family","friends","group","groups","heart","humans","network","people","persons","social","team"],"sizes_px":[20,24]},{"name":"diversity_2","version":1,"popularity":3850,"codepoint":63704,"unsupported_families":[],"categories":["social"],"tags":["committee","diverse","diversity","family","friends","group","groups","heart","humans","network","people","persons","social","team"],"sizes_px":[20,24]},{"name":"diversity_3","version":1,"popularity":8559,"codepoint":63705,"unsupported_families":[],"categories":["social"],"tags":["committee","diverse","diversity","family","friends","group","groups","humans","network","people","persons","social","team"],"sizes_px":[20,24]},{"name":"dns","version":12,"popularity":33279,"codepoint":59509,"unsupported_families":[],"categories":["action"],"tags":["address","bars","dns","domain","information","ip","list","lookup","name","server","system"],"sizes_px":[24]},{"name":"do_disturb","version":10,"popularity":5316,"codepoint":61580,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","denied","deny","disturb","do","remove","silence","stop"],"sizes_px":[24]},{"name":"do_disturb_alt","version":11,"popularity":3747,"codepoint":61581,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","denied","deny","disturb","do","remove","silence","stop"],"sizes_px":[24]},{"name":"do_disturb_off","version":10,"popularity":1440,"codepoint":61582,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","denied","deny","disabled","disturb","do","enabled","off","on","remove","silence","slash","stop"],"sizes_px":[24]},{"name":"do_disturb_on","version":10,"popularity":7203,"codepoint":61583,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","denied","deny","disabled","disturb","do","enabled","off","on","remove","silence","slash","stop"],"sizes_px":[24]},{"name":"do_not_disturb","version":11,"popularity":9055,"codepoint":58898,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","denied","deny","disturb","do","neutral","remove","silence","slash","stop"],"sizes_px":[24]},{"name":"do_not_disturb_alt","version":12,"popularity":3463,"codepoint":58897,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","denied","deny","disturb","do","neutral","remove","silence","slash","stop"],"sizes_px":[24]},{"name":"do_not_disturb_off","version":11,"popularity":1603,"codepoint":58947,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","dash","denied","deny","disabled","disturb","do","enabled","off","on","remove","silence","stop"],"sizes_px":[24]},{"name":"do_not_disturb_on","version":11,"popularity":12140,"codepoint":58948,"unsupported_families":[],"categories":["notification"],"tags":["cancel","close","dash","denied","deny","disabled","disturb","do","enabled","off","on","remove","silence","stop"],"sizes_px":[24]},{"name":"do_not_disturb_on_total_silence","version":15,"popularity":1808,"codepoint":61435,"unsupported_families":[],"categories":["device"],"tags":["busy","disturb","do","mute","no","not","on total","quiet","silence"],"sizes_px":[24]},{"name":"do_not_step","version":8,"popularity":1736,"codepoint":61855,"unsupported_families":[],"categories":["places"],"tags":["boot","disabled","do","enabled","feet","foot","not","off","on","shoe","slash","sneaker","step","steps"],"sizes_px":[24]},{"name":"do_not_touch","version":8,"popularity":2544,"codepoint":61872,"unsupported_families":[],"categories":["places"],"tags":["disabled","do","enabled","fingers","gesture","hand","not","off","on","slash","touch"],"sizes_px":[24]},{"name":"dock","version":12,"popularity":1456,"codepoint":58126,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","cell","charging","connector","device","dock","hardware","iOS","mobile","phone","power","station","tablet"],"sizes_px":[24]},{"name":"document_scanner","version":3,"popularity":12267,"codepoint":58874,"unsupported_families":[],"categories":["communication"],"tags":["article","data","doc","document","drive","file","folder","folders","notes","page","paper","scan","scanner","sheet","slide","text","writing"],"sizes_px":[20,24]},{"name":"domain","version":16,"popularity":15447,"codepoint":59374,"unsupported_families":[],"categories":["social"],"tags":["apartment","architecture","building","business","domain","estate","home","place","real","residence","residential","shelter","web","www"],"sizes_px":[24]},{"name":"domain_add","version":1,"popularity":3364,"codepoint":60258,"unsupported_families":[],"categories":["social"],"tags":["+","add","apartment","architecture","building","business","domain","estate","home","new","place","plus","real","residence","residential","shelter","symbol","web","www"],"sizes_px":[20,24]},{"name":"domain_disabled","version":12,"popularity":2517,"codepoint":57583,"unsupported_families":[],"categories":["communication"],"tags":["apartment","architecture","building","business","company","disabled","domain","enabled","estate","home","internet","maps","off","office","offline","on","place","real","residence","residential","slash","web","website"],"sizes_px":[24]},{"name":"domain_verification","version":11,"popularity":5279,"codepoint":61260,"unsupported_families":[],"categories":["communication"],"tags":["app","application desktop","approve","check","complete","design","domain","done","interface","internet","layout","mark","ok","screen","select","site","tick","ui","ux","validate","verification","verified","web","website","window","www","yes"],"sizes_px":[20,24]},{"name":"done","version":19,"popularity":512190,"codepoint":59510,"unsupported_families":[],"categories":["action"],"tags":["DISABLE_IOS","approve","check","complete","disable_ios","done","mark","ok","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"done_all","version":12,"popularity":53111,"codepoint":59511,"unsupported_families":[],"categories":["action"],"tags":["all","approve","check","complete","done","layers","mark","multiple","ok","select","stack","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"done_outline","version":12,"popularity":38132,"codepoint":59695,"unsupported_families":[],"categories":["action"],"tags":["all","approve","check","complete","done","mark","ok","outline","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"donut_large","version":13,"popularity":12983,"codepoint":59671,"unsupported_families":[],"categories":["action"],"tags":["analytics","chart","data","diagram","donut","graph","infographic","inprogress","large","measure","metrics","pie","statistics","tracking"],"sizes_px":[24]},{"name":"donut_small","version":12,"popularity":8924,"codepoint":59672,"unsupported_families":[],"categories":["action"],"tags":["analytics","chart","data","diagram","donut","graph","infographic","inprogress","measure","metrics","pie","small","statistics","tracking"],"sizes_px":[24]},{"name":"door_back","version":10,"popularity":3329,"codepoint":61436,"unsupported_families":[],"categories":["search"],"tags":["back","closed","door","doorway","entrance","exit","home","house","way"],"sizes_px":[24]},{"name":"door_front","version":10,"popularity":6189,"codepoint":61437,"unsupported_families":[],"categories":["search"],"tags":["closed","door","doorway","entrance","exit","front","home","house","way"],"sizes_px":[24]},{"name":"door_sliding","version":10,"popularity":3484,"codepoint":61438,"unsupported_families":[],"categories":["search"],"tags":["auto","automatic","door","doorway","double","entrance","exit","glass","home","house","sliding","two"],"sizes_px":[24]},{"name":"doorbell","version":10,"popularity":3130,"codepoint":61439,"unsupported_families":[],"categories":["search"],"tags":["alarm","bell","door","doorbell","home","house","ringing"],"sizes_px":[24]},{"name":"double_arrow","version":11,"popularity":33357,"codepoint":59984,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","direction","double","multiple","navigation","right"],"sizes_px":[20,24]},{"name":"downhill_skiing","version":4,"popularity":3620,"codepoint":58633,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","downhill","entertainment","exercise","hobby","human","people","person","ski social","skiing","snow","sports","travel","winter"],"sizes_px":[20,24]},{"name":"download","version":10,"popularity":75685,"codepoint":61584,"unsupported_families":[],"categories":["file"],"tags":["arrow","down","download","downloads","drive","install","upload"],"sizes_px":[24]},{"name":"download_done","version":10,"popularity":9518,"codepoint":61585,"unsupported_families":[],"categories":["file"],"tags":["arrow","arrows","check","done","down","download","downloads","drive","install","installed","ok","tick","upload"],"sizes_px":[24]},{"name":"download_for_offline","version":9,"popularity":18220,"codepoint":61440,"unsupported_families":[],"categories":["file"],"tags":["arrow","circle","down","download","for offline","install","upload"],"sizes_px":[24]},{"name":"downloading","version":9,"popularity":13802,"codepoint":61441,"unsupported_families":[],"categories":["file"],"tags":["arrow","circle","down","download","downloading","downloads","install","pending","progress","upload"],"sizes_px":[24]},{"name":"drafts","version":17,"popularity":14223,"codepoint":57681,"unsupported_families":[],"categories":["content"],"tags":["document","draft","drafts","email","file","letters","mail","message","read"],"sizes_px":[24]},{"name":"drag_handle","version":14,"popularity":27273,"codepoint":57949,"unsupported_families":[],"categories":["editor"],"tags":["app","application ui","components","design","drag","handle","interface","layout","menu","move","screen","site","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"drag_indicator","version":15,"popularity":43189,"codepoint":59717,"unsupported_families":[],"categories":["action"],"tags":["app","application","circles","components","design","dots","drag","drop","indicator","interface","layout","mobile","monitor","move","phone","screen","shape","shift","site","tablet","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"draw","version":6,"popularity":13209,"codepoint":59206,"unsupported_families":[],"categories":["editor"],"tags":["compose","create","design","draft","draw","edit","editing","input","pen","pencil","write","writing"],"sizes_px":[20,24]},{"name":"drive_eta","version":12,"popularity":15023,"codepoint":58899,"unsupported_families":[],"categories":["notification"],"tags":["automobile","car","cars","destination","direction","drive","estimate","eta","maps","public","transportation","travel","trip","vehicle"],"sizes_px":[24]},{"name":"drive_file_move","version":19,"popularity":8340,"codepoint":58997,"unsupported_families":[],"categories":["file"],"tags":["arrow","data","doc","document","drive","file","folder","move","right","sheet","slide","storage"],"sizes_px":[24]},{"name":"drive_file_move_rtl","version":3,"popularity":2453,"codepoint":59245,"unsupported_families":[],"categories":["file"],"tags":["arrow","arrows","data","direction","doc","document","drive","file","folder","folders","left","move","rtl","sheet","side","slide","storage"],"sizes_px":[20,24]},{"name":"drive_file_rename_outline","version":12,"popularity":26345,"codepoint":59810,"unsupported_families":[],"categories":["file"],"tags":["compose","create","draft","drive","edit","editing","file","input","marker","pen","pencil","rename","write","writing"],"sizes_px":[24]},{"name":"drive_folder_upload","version":11,"popularity":7572,"codepoint":59811,"unsupported_families":[],"categories":["file"],"tags":["arrow","data","doc","document","drive","file","folder","sheet","slide","storage","up","upload"],"sizes_px":[24]},{"name":"dry","version":8,"popularity":1606,"codepoint":61875,"unsupported_families":[],"categories":["places"],"tags":["air","bathroom","dry","dryer","fingers","gesture","hand","wc"],"sizes_px":[24]},{"name":"dry_cleaning","version":10,"popularity":3877,"codepoint":59992,"unsupported_families":[],"categories":["maps"],"tags":["cleaning","dry","hanger","hotel","laundry","places","service","towel"],"sizes_px":[20,24]},{"name":"duo","version":12,"popularity":3675,"codepoint":59813,"unsupported_families":[],"categories":["communication"],"tags":["call","chat","conference","device","duo","video"],"sizes_px":[24]},{"name":"dvr","version":13,"popularity":12224,"codepoint":57778,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","audio","chrome","computer","desktop","device","display","dvr","electronic","hardware","iOS","list","mac","monitor","record","recorder","screen","tv","video","web","window"],"sizes_px":[24]},{"name":"dynamic_feed","version":15,"popularity":9357,"codepoint":59924,"unsupported_families":[],"categories":["content"],"tags":["'mail_outline'","'markunread'. Keep 'mail' and remove others.","Duplicate of 'email'"],"sizes_px":[20,24]},{"name":"dynamic_form","version":7,"popularity":7234,"codepoint":61887,"unsupported_families":[],"categories":["action"],"tags":["bolt","code","dynamic","electric","fast","form","lightning","lists","questionnaire","thunderbolt"],"sizes_px":[24]},{"name":"e_mobiledata","version":9,"popularity":776,"codepoint":61442,"unsupported_families":[],"categories":["device"],"tags":["alphabet","data","e","font","letters","mobile","mobiledata","text","type"],"sizes_px":[24]},{"name":"earbuds","version":9,"popularity":2101,"codepoint":61443,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","earbuds","earphone","headphone","listen","music","sound"],"sizes_px":[24]},{"name":"earbuds_battery","version":9,"popularity":1332,"codepoint":61444,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","battery","charging","earbuds","earphone","headphone","listen","music","sound"],"sizes_px":[24]},{"name":"east","version":7,"popularity":63320,"codepoint":61919,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","east","maps","navigation","right"],"sizes_px":[24]},{"name":"edgesensor_high","version":10,"popularity":1451,"codepoint":61445,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","cell","device","edge","hardware","high","iOS","mobile","move","phone","sensitivity","sensor","tablet","vibrate"],"sizes_px":[24]},{"name":"edgesensor_low","version":10,"popularity":1151,"codepoint":61446,"unsupported_families":[],"categories":["device"],"tags":["Android","cell","device","edge","hardware","iOS","low","mobile","move","phone","sensitivity","sensor","tablet","vibrate"],"sizes_px":[24]},{"name":"edit","version":12,"popularity":303706,"codepoint":58313,"unsupported_families":[],"categories":["image"],"tags":["compose","create","edit","editing","input","new","pen","pencil","write","writing"],"sizes_px":[24]},{"name":"edit_attributes","version":12,"popularity":3811,"codepoint":58744,"unsupported_families":[],"categories":["maps"],"tags":["approve","attribution","check","complete","done","edit","mark","ok","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"edit_calendar","version":5,"popularity":29888,"codepoint":59202,"unsupported_families":[],"categories":["action"],"tags":["calendar","compose","create","date","day","draft","edit","editing","event","month","pen","pencil","schedule","write","writing"],"sizes_px":[20,24]},{"name":"edit_location","version":16,"popularity":4157,"codepoint":58728,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","edit","location","maps","pen","pencil","pin","place","stop"],"sizes_px":[24]},{"name":"edit_location_alt","version":8,"popularity":3756,"codepoint":57797,"unsupported_families":[],"categories":["maps"],"tags":["alt","edit","location","pen","pencil","pin"],"sizes_px":[20,24]},{"name":"edit_note","version":5,"popularity":57744,"codepoint":59205,"unsupported_families":[],"categories":["editor"],"tags":["compose","create","draft","edit","editing","input","lines","note","pen","pencil","text","write","writing"],"sizes_px":[20,24]},{"name":"edit_notifications","version":4,"popularity":4382,"codepoint":58661,"unsupported_families":[],"categories":["social"],"tags":["active","alarm","alert","bell","chime","compose","create","draft","edit","editing","input","new","notifications","notify","pen","pencil","reminder","ring","sound","write","writing"],"sizes_px":[20,24]},{"name":"edit_off","version":15,"popularity":8463,"codepoint":59728,"unsupported_families":[],"categories":["action"],"tags":["compose","create","disabled","draft","edit","editing","enabled","input","new","off","offline","on","pen","pencil","slash","write","writing"],"sizes_px":[24]},{"name":"edit_road","version":11,"popularity":3821,"codepoint":61261,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","edit","highway","maps","pen","pencil","road","street","traffic"],"sizes_px":[20,24]},{"name":"egg","version":2,"popularity":2553,"codepoint":60108,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","brunch","egg","food"],"sizes_px":[20,24]},{"name":"egg_alt","version":2,"popularity":1411,"codepoint":60104,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","brunch","egg","food"],"sizes_px":[20,24]},{"name":"eject","version":11,"popularity":4011,"codepoint":59643,"unsupported_families":[],"categories":["action"],"tags":["disc","drive","dvd","eject","remove","triangle","usb"],"sizes_px":[24]},{"name":"elderly","version":7,"popularity":5829,"codepoint":61978,"unsupported_families":[],"categories":["social"],"tags":["body","cane","elderly","human","old","people","person","senior"],"sizes_px":[24]},{"name":"elderly_woman","version":1,"popularity":2043,"codepoint":60265,"unsupported_families":[],"categories":["social"],"tags":["body","cane","elderly","female","gender","girl","human","lady","old","people","person","senior","social","symbol","woman","women"],"sizes_px":[20,24]},{"name":"electric_bike","version":14,"popularity":2690,"codepoint":60187,"unsupported_families":[],"categories":["maps"],"tags":["bike","bolt","ebike","electric","electricity","maps","scooter","thunderbolt","transportation","travel","vespa"],"sizes_px":[20,24]},{"name":"electric_bolt","version":1,"popularity":6302,"codepoint":60444,"unsupported_families":[],"categories":["home"],"tags":["bolt","electric","energy","fast","instant","lightning","nest","thunderbolt"],"sizes_px":[20,24]},{"name":"electric_car","version":14,"popularity":4645,"codepoint":60188,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bolt","car","cars","electric","electricity","maps","thunderbolt","transportation","travel","vehicle"],"sizes_px":[20,24]},{"name":"electric_meter","version":1,"popularity":2046,"codepoint":60443,"unsupported_families":[],"categories":["home"],"tags":["bolt","electric","energy","fast","instant","lightning","measure","meter","nest","thunderbolt","usage","voltage","volts"],"sizes_px":[20,24]},{"name":"electric_moped","version":14,"popularity":1607,"codepoint":60189,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bike","bolt","car","cars","electric","maps","moped","scooter","thunderbolt","transportation","travel","vehicle","vespa"],"sizes_px":[20,24]},{"name":"electric_rickshaw","version":15,"popularity":1905,"codepoint":60190,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bolt","car","cars","electric","india","maps","rickshaw","thunderbolt","transportation","truck","vehicle"],"sizes_px":[20,24]},{"name":"electric_scooter","version":14,"popularity":2539,"codepoint":60191,"unsupported_families":[],"categories":["maps"],"tags":["bike","bolt","direction","directions","electric","maps","scooter","thunderbolt","transportation","vehicle","vespa"],"sizes_px":[20,24]},{"name":"electrical_services","version":12,"popularity":10316,"codepoint":61698,"unsupported_families":[],"categories":["maps"],"tags":["charge","cord","electric","electrical","plug","power","services","wire"],"sizes_px":[20,24]},{"name":"elevator","version":8,"popularity":3594,"codepoint":61856,"unsupported_families":[],"categories":["places"],"tags":["body","down","elevator","human","people","person","up"],"sizes_px":[24]},{"name":"email","version":18,"popularity":268385,"codepoint":57534,"unsupported_families":[],"categories":["communication"],"tags":["email","envelop","letters","mail","message","send"],"sizes_px":[24]},{"name":"emergency","version":5,"popularity":9320,"codepoint":57835,"unsupported_families":[],"categories":["maps"],"tags":["asterisk","clinic","emergency","health","hospital","maps","medical","symbol"],"sizes_px":[20,24]},{"name":"emergency_recording","version":1,"popularity":702,"codepoint":60404,"unsupported_families":[],"categories":["maps"],"tags":["alert","attention","camera","caution","danger","emergency","film","filming","hardware","image","important","motion","notification","picture","record","video","videography","warning"],"sizes_px":[20,24]},{"name":"emergency_share","version":1,"popularity":1134,"codepoint":60406,"unsupported_families":[],"categories":["maps"],"tags":["alert","attention","caution","danger","emergency","important","notification","share","warning"],"sizes_px":[20,24]},{"name":"emoji_emotions","version":11,"popularity":32622,"codepoint":59938,"unsupported_families":[],"categories":["social"],"tags":["+","add","emoji","emotions","expressions","face","feelings","glad","happiness","happy","icon","icons","insert","like","mood","new","person","pleased","plus","smile","smiling","social","survey","symbol"],"sizes_px":[20,24]},{"name":"emoji_events","version":13,"popularity":78647,"codepoint":59939,"unsupported_families":[],"categories":["social"],"tags":["achievement","award","chalice","champion","cup","emoji","events","first","prize","reward","sport","trophy","winner"],"sizes_px":[20,24]},{"name":"emoji_food_beverage","version":11,"popularity":6438,"codepoint":59931,"unsupported_families":[],"categories":["social"],"tags":["beverage","coffee","cup","drink","emoji","mug","plate","set","tea"],"sizes_px":[20,24]},{"name":"emoji_nature","version":11,"popularity":9130,"codepoint":59932,"unsupported_families":[],"categories":["social"],"tags":["animal","bee","bug","daisy","emoji","flower","insect","ladybug","nature","petals","spring","summer"],"sizes_px":[20,24]},{"name":"emoji_objects","version":11,"popularity":25492,"codepoint":59940,"unsupported_families":[],"categories":["social"],"tags":["bulb","creative","emoji","idea","light","objects","solution","thinking"],"sizes_px":[20,24]},{"name":"emoji_people","version":11,"popularity":18438,"codepoint":59933,"unsupported_families":[],"categories":["social"],"tags":["arm","body","emoji","greeting","human","people","person","social","waving"],"sizes_px":[20,24]},{"name":"emoji_symbols","version":11,"popularity":6405,"codepoint":59934,"unsupported_families":[],"categories":["social"],"tags":["ampersand","character","emoji","hieroglyph","music","note","percent","sign","symbols"],"sizes_px":[20,24]},{"name":"emoji_transportation","version":11,"popularity":6245,"codepoint":59935,"unsupported_families":[],"categories":["social"],"tags":["architecture","automobile","building","car","cars","direction","emoji","estate","maps","place","public","real","residence","residential","shelter","transportation","travel","vehicle"],"sizes_px":[20,24]},{"name":"energy_savings_leaf","version":1,"popularity":3953,"codepoint":60442,"unsupported_families":[],"categories":["home"],"tags":["eco","energy","leaf","leaves","nest","savings","usage"],"sizes_px":[20,24]},{"name":"engineering","version":11,"popularity":51072,"codepoint":59965,"unsupported_families":[],"categories":["social"],"tags":["body","cogs","cogwheel","construction","engineering","fixing","gears","hat","helmet","human","maintenance","people","person","setting","worker"],"sizes_px":[20,24]},{"name":"enhanced_encryption","version":19,"popularity":6291,"codepoint":58943,"unsupported_families":[],"categories":["notification"],"tags":["+","add","encryption","enhanced","lock","locked","new","password","plus","privacy","private","protection","safety","secure","security","symbol"],"sizes_px":[24]},{"name":"equalizer","version":12,"popularity":19293,"codepoint":57373,"unsupported_families":[],"categories":["av"],"tags":["adjustment","analytics","chart","data","equalizer","graph","measure","metrics","music","noise","sound","static","statistics","tracking","volume"],"sizes_px":[24]},{"name":"error","version":20,"popularity":105628,"codepoint":57344,"unsupported_families":[],"categories":["alert"],"tags":["!","alert","attention","caution","circle","danger","error","exclamation","important","mark","notification","symbol","warning"],"sizes_px":[24]},{"name":"error_outline","version":16,"popularity":83695,"codepoint":57345,"unsupported_families":[],"categories":["alert"],"tags":["!","alert","attention","caution","circle","danger","error","exclamation","important","mark","notification","outline","symbol","warning"],"sizes_px":[24]},{"name":"escalator","version":8,"popularity":1629,"codepoint":61857,"unsupported_families":[],"categories":["places"],"tags":["down","escalator","staircase","up"],"sizes_px":[24]},{"name":"escalator_warning","version":8,"popularity":6541,"codepoint":61868,"unsupported_families":[],"categories":["places"],"tags":["body","child","escalator","human","kid","parent","people","person","warning"],"sizes_px":[24]},{"name":"euro","version":12,"popularity":19124,"codepoint":59925,"unsupported_families":[],"categories":["image"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","euro","euros","finance","money","online","pay","payment","price","shopping","symbol"],"sizes_px":[20,24]},{"name":"euro_symbol","version":13,"popularity":21094,"codepoint":59686,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","euro","finance","money","online","pay","payment","symbol"],"sizes_px":[24]},{"name":"ev_station","version":11,"popularity":4864,"codepoint":58733,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bolt","car","cars","charger","charging","electric","electricity","ev","home","maps","places","station","thunderbolt","transportation","vehicle"],"sizes_px":[24]},{"name":"event","version":21,"popularity":139100,"codepoint":59512,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","mark","month","range","remember","reminder","today","week"],"sizes_px":[24]},{"name":"event_available","version":17,"popularity":40743,"codepoint":58900,"unsupported_families":[],"categories":["notification"],"tags":["approve","available","calendar","check","complete","date","done","event","mark","ok","schedule","select","tick","time","validate","verified","yes"],"sizes_px":[24]},{"name":"event_busy","version":20,"popularity":13497,"codepoint":58901,"unsupported_families":[],"categories":["notification"],"tags":["busy","calendar","cancel","clear","close","date","event","exit","no","remove","schedule","stop","time","unavailable","x"],"sizes_px":[24]},{"name":"event_note","version":14,"popularity":24660,"codepoint":58902,"unsupported_families":[],"categories":["notification"],"tags":["calendar","date","event","note","schedule","text","time","writing"],"sizes_px":[24]},{"name":"event_repeat","version":1,"popularity":5586,"codepoint":60283,"unsupported_families":[],"categories":["action"],"tags":["around","calendar","date","day","event","inprogress","load","loading refresh","month","renew","rotate","schedule","turn"],"sizes_px":[20,24]},{"name":"event_seat","version":19,"popularity":7743,"codepoint":59651,"unsupported_families":[],"categories":["action"],"tags":["assign","assigned","chair","event","furniture","reservation","row","seat","section","sit"],"sizes_px":[24]},{"name":"exit_to_app","version":13,"popularity":37426,"codepoint":59513,"unsupported_families":[],"categories":["action"],"tags":["app","application","arrow","components","design","exit","export","interface","layout","leave","mobile","monitor","move","output","phone","screen","site","tablet","to","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"expand","version":11,"popularity":13803,"codepoint":59727,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","compress","enlarge","expand","grow","move","push","together"],"sizes_px":[24]},{"name":"expand_circle_down","version":2,"popularity":21997,"codepoint":59341,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","chevron","circle","collapse","direction","down","expand","expandable","list","more"],"sizes_px":[20,24]},{"name":"expand_less","version":12,"popularity":107784,"codepoint":58830,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","chevron","collapse","direction","expand","expandable","less","list","up"],"sizes_px":[24]},{"name":"expand_more","version":14,"popularity":348014,"codepoint":58831,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","chevron","collapse","direction","down","expand","expandable","list","more"],"sizes_px":[24]},{"name":"explicit","version":12,"popularity":2057,"codepoint":57374,"unsupported_families":[],"categories":["av"],"tags":["adult","alphabet","character","content","e","explicit","font","language","letters","media","movies","music","symbol","text","type"],"sizes_px":[24]},{"name":"explore","version":12,"popularity":49218,"codepoint":59514,"unsupported_families":[],"categories":["action"],"tags":["compass","destination","direction","east","explore","location","maps","needle","north","south","travel","west"],"sizes_px":[24]},{"name":"explore_off","version":12,"popularity":2340,"codepoint":59816,"unsupported_families":[],"categories":["action"],"tags":["compass","destination","direction","disabled","east","enabled","explore","location","maps","needle","north","off","on","slash","south","travel","west"],"sizes_px":[24]},{"name":"exposure","version":12,"popularity":2800,"codepoint":58314,"unsupported_families":[],"categories":["image"],"tags":["add","brightness","contrast","edit","editing","effect","exposure","image","minus","photo","photography","picture","plus","settings","subtract"],"sizes_px":[24]},{"name":"exposure_neg_1","version":13,"popularity":1423,"codepoint":58315,"unsupported_families":[],"categories":["image"],"tags":["1","brightness","contrast","digit","edit","editing","effect","exposure","image","neg","negative","numbers","photo","photography","settings","symbol"],"sizes_px":[24]},{"name":"exposure_neg_2","version":13,"popularity":986,"codepoint":58316,"unsupported_families":[],"categories":["image"],"tags":["2","brightness","contrast","digit","edit","editing","effect","exposure","image","neg","negative","numbers","photo","photography","settings","symbol"],"sizes_px":[24]},{"name":"exposure_plus_1","version":12,"popularity":2897,"codepoint":58317,"unsupported_families":[],"categories":["image"],"tags":["1","add","brightness","contrast","digit","edit","editing","effect","exposure","image","numbers","photo","photography","plus","settings","symbol"],"sizes_px":[24]},{"name":"exposure_plus_2","version":12,"popularity":1590,"codepoint":58318,"unsupported_families":[],"categories":["image"],"tags":["2","add","brightness","contrast","digit","edit","editing","effect","exposure","image","numbers","photo","photography","plus","settings","symbol"],"sizes_px":[24]},{"name":"exposure_zero","version":12,"popularity":2203,"codepoint":58319,"unsupported_families":[],"categories":["image"],"tags":["0","brightness","contrast","digit","edit","editing","effect","exposure","image","numbers","photo","photography","settings","symbol","zero"],"sizes_px":[24]},{"name":"extension","version":12,"popularity":28388,"codepoint":59515,"unsupported_families":[],"categories":["action"],"tags":["app","extended","extension","game","jigsaw","plugin add","puzzle","shape"],"sizes_px":[24]},{"name":"extension_off","version":4,"popularity":2039,"codepoint":58613,"unsupported_families":[],"categories":["action"],"tags":["disabled","enabled","extended","extension","jigsaw","off","on","piece","puzzle","shape","slash"],"sizes_px":[20,24]},{"name":"face","version":15,"popularity":157392,"codepoint":59516,"unsupported_families":[],"categories":["action"],"tags":["account","emoji","eyes","face","human","lock","log","login","logout","people","person","profile","recognition","security","social","thumbnail","unlock","user"],"sizes_px":[24]},{"name":"face_2","version":1,"popularity":1831,"codepoint":63706,"unsupported_families":[],"categories":["social"],"tags":["account","emoji","eyes","face","human","lock","log","login","logout","people","person","profile","recognition","security","social","thumbnail","unlock","user"],"sizes_px":[20,24]},{"name":"face_3","version":1,"popularity":2376,"codepoint":63707,"unsupported_families":[],"categories":["social"],"tags":["account","emoji","eyes","face","human","lock","log","login","logout","people","person","profile","recognition","security","social","thumbnail","unlock","user"],"sizes_px":[20,24]},{"name":"face_4","version":1,"popularity":1784,"codepoint":63708,"unsupported_families":[],"categories":["social"],"tags":["account","emoji","eyes","face","human","lock","log","login","logout","people","person","profile","recognition","security","social","thumbnail","unlock","user"],"sizes_px":[20,24]},{"name":"face_5","version":1,"popularity":1334,"codepoint":63709,"unsupported_families":[],"categories":["social"],"tags":["account","emoji","eyes","face","human","lock","log","login","logout","people","person","profile","recognition","security","social","thumbnail","unlock","user"],"sizes_px":[20,24]},{"name":"face_6","version":1,"popularity":2567,"codepoint":63710,"unsupported_families":[],"categories":["social"],"tags":["account","emoji","eyes","face","human","lock","log","login","logout","people","person","profile","recognition","security","social","thumbnail","unlock","user"],"sizes_px":[20,24]},{"name":"face_retouching_natural","version":16,"popularity":6882,"codepoint":61262,"unsupported_families":[],"categories":["image"],"tags":["ai","artificial","automatic","automation","custom","edit","editing","effect","emoji","emotion","face","faces","genai","image","intelligence","magic","natural","photo","photography","retouch","retouching","settings","smart","spark","sparkle","star","tag"],"sizes_px":[24]},{"name":"face_retouching_off","version":15,"popularity":1401,"codepoint":61447,"unsupported_families":[],"categories":["image"],"tags":["disabled","edit","editing","effect","emoji","emotion","enabled","face","faces","image","natural","off","on","photo","photography","retouch","retouching","settings","slash","tag"],"sizes_px":[24]},{"name":"fact_check","version":14,"popularity":83373,"codepoint":61637,"unsupported_families":[],"categories":["action"],"tags":["approve","check","complete","done","fact","list","mark","ok","select","tick","validate","verified","yes"],"sizes_px":[20,24]},{"name":"factory","version":1,"popularity":11499,"codepoint":60348,"unsupported_families":[],"categories":["maps"],"tags":["factory","industry","manufacturing","warehouse"],"sizes_px":[20,24]},{"name":"family_restroom","version":9,"popularity":14199,"codepoint":61858,"unsupported_families":[],"categories":["places"],"tags":["bathroom","child","children","family","father","gender","kids","mother","parents","restroom","wc"],"sizes_px":[24]},{"name":"fast_forward","version":18,"popularity":17987,"codepoint":57375,"unsupported_families":[],"categories":["av"],"tags":["control","fast","forward","media","music","play","speed","time","tv","video"],"sizes_px":[24]},{"name":"fast_rewind","version":12,"popularity":10730,"codepoint":57376,"unsupported_families":[],"categories":["av"],"tags":["back","control","fast","media","music","play","rewind","speed","time","tv","video"],"sizes_px":[24]},{"name":"fastfood","version":12,"popularity":14978,"codepoint":58746,"unsupported_families":[],"categories":["maps"],"tags":["drink","fastfood","food","hamburger","maps","meal","places"],"sizes_px":[24]},{"name":"favorite","version":17,"popularity":273062,"codepoint":59517,"unsupported_families":[],"categories":["action"],"tags":["appreciate","favorite","heart","like","love","remember","save","shape"],"sizes_px":[24]},{"name":"favorite_border","version":12,"popularity":222800,"codepoint":59518,"unsupported_families":[],"categories":["action"],"tags":["border","favorite","heart","like","love","outline","remember","save","shape"],"sizes_px":[24]},{"name":"fax","version":2,"popularity":6292,"codepoint":60120,"unsupported_families":[],"categories":["action"],"tags":["fax","machine","office","phone","send"],"sizes_px":[20,24]},{"name":"featured_play_list","version":12,"popularity":4716,"codepoint":57453,"unsupported_families":[],"categories":["av"],"tags":["collection","featured","highlighted","list","music","play","playlist","recommended"],"sizes_px":[24]},{"name":"featured_video","version":12,"popularity":2783,"codepoint":57454,"unsupported_families":[],"categories":["av"],"tags":["advertised","advertisement","featured","highlighted","recommended","video","watch"],"sizes_px":[24]},{"name":"feed","version":10,"popularity":40286,"codepoint":61449,"unsupported_families":[],"categories":["search"],"tags":["article","feed","headline","information","news","newspaper","paper","public","social","timeline"],"sizes_px":[24]},{"name":"feedback","version":12,"popularity":34631,"codepoint":59519,"unsupported_families":[],"categories":["action"],"tags":["!","alert","announcement","attention","caution","chat","chat bubble","comment","communicate","communication","conversation","danger","error","exclamation","failed","feedback","important","mark","message","notification","service","sms","speech","symbol","warning"],"sizes_px":[24]},{"name":"female","version":3,"popularity":14336,"codepoint":58768,"unsupported_families":[],"categories":["social"],"tags":["female","gender","girl","lady","social","symbol","woman","women"],"sizes_px":[20,24]},{"name":"fence","version":6,"popularity":2410,"codepoint":61942,"unsupported_families":[],"categories":["places"],"tags":["backyard","barrier","boundaries","boundary","door","entrance","fence","flowers","garden","gate","grass","home","house","nature","nest","outdoor","outside","protection","yard"],"sizes_px":[24]},{"name":"festival","version":10,"popularity":4524,"codepoint":60008,"unsupported_families":[],"categories":["maps"],"tags":["circus","event","festival","local","maps","places","tent","tour","travel"],"sizes_px":[20,24]},{"name":"fiber_dvr","version":13,"popularity":1000,"codepoint":57437,"unsupported_families":[],"categories":["av"],"tags":["alphabet","character","digital","dvr","electronics","fiber","font","letters","network","record","recorder","symbol","text","tv","type","video"],"sizes_px":[24]},{"name":"fiber_manual_record","version":16,"popularity":31796,"codepoint":57441,"unsupported_families":[],"categories":["av"],"tags":["circle","dot","fiber","manual","play","record","watch"],"sizes_px":[24]},{"name":"fiber_new","version":13,"popularity":8117,"codepoint":57438,"unsupported_families":[],"categories":["av"],"tags":["alphabet","character","fiber","font","letters","network","new","symbol","text","type"],"sizes_px":[24]},{"name":"fiber_pin","version":12,"popularity":1121,"codepoint":57450,"unsupported_families":[],"categories":["av"],"tags":["alphabet","character","fiber","font","letters","network","pin","symbol","text","type"],"sizes_px":[24]},{"name":"fiber_smart_record","version":12,"popularity":1918,"codepoint":57442,"unsupported_families":[],"categories":["av"],"tags":["circle","dot","fiber","play","record","smart","watch"],"sizes_px":[24]},{"name":"file_copy","version":12,"popularity":29809,"codepoint":57715,"unsupported_families":[],"categories":["content"],"tags":["content","copy","cut","doc","document","duplicate","file","multiple","past","stack"],"sizes_px":[24]},{"name":"file_download","version":11,"popularity":178700,"codepoint":58052,"unsupported_families":[],"categories":["file"],"tags":["arrow","arrows","down","download","downloads","drive","export","file","install","upload"],"sizes_px":[24]},{"name":"file_download_done","version":11,"popularity":7403,"codepoint":59818,"unsupported_families":[],"categories":["file"],"tags":["arrow","arrows","check","done","down","download","downloads","drive","file","install","installed","tick","upload"],"sizes_px":[24]},{"name":"file_download_off","version":4,"popularity":3132,"codepoint":58622,"unsupported_families":[],"categories":["file"],"tags":["arrow","disabled","down","download","drive","enabled","export","file","install","off","on","save","slash","upload"],"sizes_px":[20,24]},{"name":"file_open","version":1,"popularity":8420,"codepoint":60147,"unsupported_families":[],"categories":["file"],"tags":["arrow","doc","document","drive","file","left","open","page","paper"],"sizes_px":[20,24]},{"name":"file_present","version":10,"popularity":15825,"codepoint":59918,"unsupported_families":[],"categories":["action"],"tags":["clip","data","doc","document","drive","file","folder","folders","note","paper","present","reminder","sheet","slide","storage","writing"],"sizes_px":[24]},{"name":"file_upload","version":11,"popularity":92405,"codepoint":58054,"unsupported_families":[],"categories":["file"],"tags":["arrow","arrows","download","drive","export","file","up","upload"],"sizes_px":[24]},{"name":"filter","version":12,"popularity":3973,"codepoint":58323,"unsupported_families":[],"categories":["image"],"tags":["edit","editing","effect","filter","image","landscape","mountain","mountains","photo","photography","picture","settings"],"sizes_px":[24]},{"name":"filter_1","version":12,"popularity":4809,"codepoint":58320,"unsupported_families":[],"categories":["image"],"tags":["1","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_2","version":12,"popularity":2784,"codepoint":58321,"unsupported_families":[],"categories":["image"],"tags":["2","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_3","version":12,"popularity":2184,"codepoint":58322,"unsupported_families":[],"categories":["image"],"tags":["3","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_4","version":12,"popularity":1611,"codepoint":58324,"unsupported_families":[],"categories":["image"],"tags":["4","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_5","version":12,"popularity":1464,"codepoint":58325,"unsupported_families":[],"categories":["image"],"tags":["5","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_6","version":12,"popularity":1204,"codepoint":58326,"unsupported_families":[],"categories":["image"],"tags":["6","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_7","version":12,"popularity":1629,"codepoint":58327,"unsupported_families":[],"categories":["image"],"tags":["7","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_8","version":12,"popularity":1281,"codepoint":58328,"unsupported_families":[],"categories":["image"],"tags":["8","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_9","version":12,"popularity":1281,"codepoint":58329,"unsupported_families":[],"categories":["image"],"tags":["9","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_9_plus","version":13,"popularity":1600,"codepoint":58330,"unsupported_families":[],"categories":["image"],"tags":["+","9","digit","edit","editing","effect","filter","image","images","multiple","numbers","photography","picture","pictures","plus","settings","stack","symbol"],"sizes_px":[24]},{"name":"filter_alt","version":11,"popularity":142681,"codepoint":61263,"unsupported_families":[],"categories":["action"],"tags":["edit","filter","funnel","options","refine","sift"],"sizes_px":[24]},{"name":"filter_alt_off","version":1,"popularity":9492,"codepoint":60210,"unsupported_families":[],"categories":["action"],"tags":["alt","disabled","edit","filter","funnel","off","offline","options","refine","sift","slash"],"sizes_px":[20,24]},{"name":"filter_b_and_w","version":13,"popularity":1808,"codepoint":58331,"unsupported_families":[],"categories":["image"],"tags":["and","b","black","contrast","edit","editing","effect","filter","grayscale","image","images","photography","picture","pictures","settings","w","white"],"sizes_px":[24]},{"name":"filter_center_focus","version":12,"popularity":6245,"codepoint":58332,"unsupported_families":[],"categories":["image"],"tags":["camera","center","dot","edit","filter","focus","image","photo","photography","picture"],"sizes_px":[24]},{"name":"filter_drama","version":12,"popularity":7706,"codepoint":58333,"unsupported_families":[],"categories":["image"],"tags":["cloud","drama","edit","editing","effect","filter","image","photo","photography","picture","sky camera"],"sizes_px":[24]},{"name":"filter_frames","version":13,"popularity":1981,"codepoint":58334,"unsupported_families":[],"categories":["image"],"tags":["boarders","border","camera","center","edit","editing","effect","filter","filters","focus","frame","frames","image","options","photo","photography","picture"],"sizes_px":[24]},{"name":"filter_hdr","version":13,"popularity":2298,"codepoint":58335,"unsupported_families":[],"categories":["image"],"tags":["camera","edit","editing","effect","filter","hdr","image","mountain","mountains","photo","photography","picture"],"sizes_px":[24]},{"name":"filter_list","version":13,"popularity":73053,"codepoint":57682,"unsupported_families":[],"categories":["content"],"tags":["filter","lines","list","organize","sort"],"sizes_px":[24]},{"name":"filter_list_off","version":1,"popularity":3880,"codepoint":60247,"unsupported_families":[],"categories":["content"],"tags":["alt","disabled","edit","filter","list","off","offline","options","refine","sift","slash"],"sizes_px":[20,24]},{"name":"filter_none","version":13,"popularity":6485,"codepoint":58336,"unsupported_families":[],"categories":["image"],"tags":["filter","multiple","none","square","stack"],"sizes_px":[24]},{"name":"filter_tilt_shift","version":14,"popularity":2722,"codepoint":58338,"unsupported_families":[],"categories":["image"],"tags":["blur","center","dash","dashed","edit","editing","effect","filter","focus","image","images","photography","picture","pictures","shift","tilt"],"sizes_px":[24]},{"name":"filter_vintage","version":13,"popularity":7932,"codepoint":58339,"unsupported_families":[],"categories":["image"],"tags":["edit","editing","effect","filter","flower","image","images","photography","picture","pictures","vintage"],"sizes_px":[24]},{"name":"find_in_page","version":12,"popularity":23659,"codepoint":59520,"unsupported_families":[],"categories":["action"],"tags":["data","doc","document","drive","file","find","folder","folders","glass","in","look","magnify","magnifying","page","paper","search","see","sheet","slide","writing"],"sizes_px":[24]},{"name":"find_replace","version":12,"popularity":6239,"codepoint":59521,"unsupported_families":[],"categories":["action"],"tags":["around","arrows","find","glass","inprogress","load","loading refresh","look","magnify","magnifying","renew","replace","rotate","search","see"],"sizes_px":[24]},{"name":"fingerprint","version":12,"popularity":137931,"codepoint":59661,"unsupported_families":[],"categories":["action"],"tags":["finger","fingerprint","id","identification","identity","print","reader","thumbprint","verification"],"sizes_px":[24]},{"name":"fire_extinguisher","version":7,"popularity":3112,"codepoint":61912,"unsupported_families":[],"categories":["places"],"tags":["emergency","extinguisher","fire","water"],"sizes_px":[24]},{"name":"fire_hydrant_alt","version":1,"popularity":433,"codepoint":63729,"unsupported_families":[],"categories":["maps"],"tags":[],"sizes_px":[20,24]},{"name":"fire_truck","version":1,"popularity":1127,"codepoint":63730,"unsupported_families":[],"categories":["maps"],"tags":[],"sizes_px":[20,24]},{"name":"fireplace","version":11,"popularity":5198,"codepoint":59971,"unsupported_families":[],"categories":["social"],"tags":["chimney","fire","fireplace","flame","home","house","living","pit","place","room","warm","winter"],"sizes_px":[20,24]},{"name":"first_page","version":11,"popularity":16659,"codepoint":58844,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","back","chevron","first","left","page","rewind"],"sizes_px":[24]},{"name":"fit_screen","version":15,"popularity":8373,"codepoint":59920,"unsupported_families":[],"categories":["action"],"tags":["enlarge","fit","format","layout","reduce","scale","screen","size"],"sizes_px":[24]},{"name":"fitbit","version":2,"popularity":3243,"codepoint":59435,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","exercise","fitbit","fitness","hobby","logo"],"sizes_px":[20,24]},{"name":"fitness_center","version":12,"popularity":27515,"codepoint":60227,"unsupported_families":[],"categories":["places"],"tags":["athlete","center","dumbbell","exercise","fitness","gym","hobby","places","sport","weights","workout"],"sizes_px":[24]},{"name":"flag","version":18,"popularity":45420,"codepoint":57683,"unsupported_families":[],"categories":["content"],"tags":["country","destination","emoji","flag","flags","goal","landmark","location","mark","milepost","milestone","nation","place","pole","report","save","social","start","world"],"sizes_px":[24]},{"name":"flag_circle","version":1,"popularity":4775,"codepoint":60152,"unsupported_families":[],"categories":["content"],"tags":["circle","country","flag","goal","mark","nation","report","round","start"],"sizes_px":[20,24]},{"name":"flaky","version":13,"popularity":8280,"codepoint":61264,"unsupported_families":[],"categories":["action"],"tags":["approve","check","close","complete","contrast","done","exit","flaky","mark","no","ok","options","select","stop","tick","verified","x","yes"],"sizes_px":[20,24]},{"name":"flare","version":12,"popularity":6609,"codepoint":58340,"unsupported_families":[],"categories":["image"],"tags":["bright","edit","editing","effect","flare","image","images","light","photography","picture","pictures","sun"],"sizes_px":[24]},{"name":"flash_auto","version":12,"popularity":2481,"codepoint":58341,"unsupported_families":[],"categories":["image"],"tags":["a","auto","bolt","electric","energy","fast","flash","instant","lightning","thunderbolt"],"sizes_px":[24]},{"name":"flash_off","version":12,"popularity":5766,"codepoint":58342,"unsupported_families":[],"categories":["image"],"tags":["bolt","disabled","electric","enabled","energy","fast","flash","instant","lightning","off","on","slash","thunderbolt"],"sizes_px":[24]},{"name":"flash_on","version":12,"popularity":18937,"codepoint":58343,"unsupported_families":[],"categories":["image"],"tags":["bolt","disabled","electric","enabled","energy","fast","flash","instant","lightning","off","on","slash","thunderbolt"],"sizes_px":[24]},{"name":"flashlight_off","version":10,"popularity":2198,"codepoint":61450,"unsupported_families":[],"categories":["device"],"tags":["disabled","enabled","flash","flashlight","light","off","on","slash"],"sizes_px":[24]},{"name":"flashlight_on","version":10,"popularity":5320,"codepoint":61451,"unsupported_families":[],"categories":["device"],"tags":["disabled","enabled","flash","flashlight","light","off","on","slash"],"sizes_px":[24]},{"name":"flatware","version":9,"popularity":4675,"codepoint":61452,"unsupported_families":[],"categories":["search"],"tags":["cafe","cafeteria","cutlery","diner","dining","dinner","eat","eating","food","fork","knife","local","meal","restaurant","spoon","utensils"],"sizes_px":[24]},{"name":"flight","version":18,"popularity":28411,"codepoint":58681,"unsupported_families":[],"categories":["maps"],"tags":["air","aircraft","airplane","airplanes","airport","flight","flights","fly","flying","mode","on","plane","planes","signal","transportation","travel","trip"],"sizes_px":[24]},{"name":"flight_class","version":2,"popularity":1220,"codepoint":59339,"unsupported_families":[],"categories":["maps"],"tags":["air","aircraft","airplane","airplanes","airport","business","business class","first class","flight","flights","fly","flying","plane","planes","seat","signal","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"flight_land","version":13,"popularity":9357,"codepoint":59652,"unsupported_families":[],"categories":["action"],"tags":["air","aircraft","airplane","airplanes","airport","arrival","arriving","departing","departure","flight","flights","fly","flying","landing","plane","planes","signal","transportation","travel","trip"],"sizes_px":[24]},{"name":"flight_takeoff","version":13,"popularity":33029,"codepoint":59653,"unsupported_families":[],"categories":["action"],"tags":["air","aircraft","airplane","airplanes","airport","arrival","arriving","departing","departure","flight","flights","fly","flying","landing","plane","planes","signal","transportation","travel","trip"],"sizes_px":[24]},{"name":"flip","version":12,"popularity":5258,"codepoint":58344,"unsupported_families":[],"categories":["image"],"tags":["dash","dashed","edit","editing","flip","image","orientation","scan scanning"],"sizes_px":[24]},{"name":"flip_camera_android","version":12,"popularity":5341,"codepoint":59959,"unsupported_families":[],"categories":["image"],"tags":["android","camera","center","edit","editing","flip","image","mobile","orientation","rotate","turn"],"sizes_px":[20,24]},{"name":"flip_camera_ios","version":12,"popularity":4835,"codepoint":59960,"unsupported_families":[],"categories":["image"],"tags":["DISABLE_IOS","android","camera","disable_ios","edit","editing","flip","image","ios","mobile","orientation","rotate","turn"],"sizes_px":[20,24]},{"name":"flip_to_back","version":12,"popularity":2890,"codepoint":59522,"unsupported_families":[],"categories":["action"],"tags":["arrange","arrangement","back","dash","dashed","flip","format","front","layout","move","order","sort","to"],"sizes_px":[24]},{"name":"flip_to_front","version":12,"popularity":4175,"codepoint":59523,"unsupported_families":[],"categories":["action"],"tags":["arrange","arrangement","back","dash","dashed","flip","format","front","layout","move","order","sort","to"],"sizes_px":[24]},{"name":"flood","version":1,"popularity":1250,"codepoint":60390,"unsupported_families":[],"categories":["social"],"tags":["crisis","disaster","flooding","natural","rain","storm","water","wave","weather"],"sizes_px":[20,24]},{"name":"fluorescent","version":1,"popularity":521,"codepoint":60465,"unsupported_families":[],"categories":["device"],"tags":["bright","fluorescent","lamp","light","lightbulb"],"sizes_px":[24]},{"name":"flutter_dash","version":5,"popularity":22868,"codepoint":57355,"unsupported_families":[],"categories":["action"],"tags":["app","application","bird","dash","flutter","framework","logo","mascot","open source","program","software"],"sizes_px":[20,24]},{"name":"fmd_bad","version":15,"popularity":5356,"codepoint":61454,"unsupported_families":[],"categories":["device"],"tags":["!","alert","attention","bad","caution","danger","destination","direction","error","exclamation","fmd","important","location","maps","mark","notification","pin","place","symbol","warning"],"sizes_px":[24]},{"name":"fmd_good","version":15,"popularity":14973,"codepoint":61455,"unsupported_families":[],"categories":["device"],"tags":["destination","direction","fmd","good","location","maps","pin","place","stop"],"sizes_px":[24]},{"name":"folder","version":16,"popularity":71211,"codepoint":58055,"unsupported_families":[],"categories":["file"],"tags":["data","doc","document","drive","file","folder","folders","sheet","slide","storage"],"sizes_px":[24]},{"name":"folder_copy","version":1,"popularity":4614,"codepoint":60349,"unsupported_families":[],"categories":["file"],"tags":["content","copy","cut","data","doc","document","drive","duplicate","file","folder","folders","multiple","paste","sheet","slide","storage"],"sizes_px":[20,24]},{"name":"folder_delete","version":1,"popularity":2613,"codepoint":60212,"unsupported_families":[],"categories":["file"],"tags":["bin","can","data","delete","doc","document","drive","file","folder","folders","garbage","remove","sheet","slide","storage","trash"],"sizes_px":[20,24]},{"name":"folder_off","version":1,"popularity":1606,"codepoint":60291,"unsupported_families":[],"categories":["file"],"tags":["data","disabled","doc","document","drive","enabled","file","folder","folders","off","on","online","sheet","slash","slide","storage"],"sizes_px":[20,24]},{"name":"folder_open","version":13,"popularity":32191,"codepoint":58056,"unsupported_families":[],"categories":["file"],"tags":["data","doc","document","drive","file","folder","folders","open","sheet","slide","storage"],"sizes_px":[24]},{"name":"folder_shared","version":16,"popularity":12548,"codepoint":58057,"unsupported_families":[],"categories":["file"],"tags":["account","collaboration","data","doc","document","drive","face","file","folder","human","people","person","profile","share","shared","sheet","slide","storage","team","user"],"sizes_px":[24]},{"name":"folder_special","version":11,"popularity":6276,"codepoint":58903,"unsupported_families":[],"categories":["notification"],"tags":["bookmark","data","doc","document","drive","favorite","file","folder","highlight","important","marked","save","saved","shape","sheet","slide","special","star","storage"],"sizes_px":[24]},{"name":"folder_zip","version":1,"popularity":4765,"codepoint":60204,"unsupported_families":[],"categories":["file"],"tags":["compress","data","doc","document","drive","file","folder","folders","open","sheet","slide","storage","zip"],"sizes_px":[20,24]},{"name":"follow_the_signs","version":7,"popularity":5436,"codepoint":61986,"unsupported_families":[],"categories":["social"],"tags":["arrow","body","directional","follow","human","people","person","right","signs","social","the"],"sizes_px":[24]},{"name":"font_download","version":11,"popularity":6448,"codepoint":57703,"unsupported_families":[],"categories":["content"],"tags":["A","alphabet","character","classification","download","font","letters","square","symbol","text","type","typeface"],"sizes_px":[24]},{"name":"font_download_off","version":4,"popularity":1630,"codepoint":58617,"unsupported_families":[],"categories":["content"],"tags":["alphabet","character","disabled","download","enabled","font","letters","off","on","slash","square","symbol","text","type"],"sizes_px":[20,24]},{"name":"food_bank","version":7,"popularity":5397,"codepoint":61938,"unsupported_families":[],"categories":["places"],"tags":["architecture","bank","building","charity","eat","estate","food","fork","house","knife","meal","place","real","residence","residential","shelter","utensils"],"sizes_px":[24]},{"name":"forest","version":2,"popularity":6761,"codepoint":60057,"unsupported_families":[],"categories":["maps"],"tags":["forest","jungle","nature","plantation","plants","trees","woodland"],"sizes_px":[20,24]},{"name":"fork_left","version":1,"popularity":969,"codepoint":60320,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","fork","left","maps","navigation","path","route","sign","traffic"],"sizes_px":[20,24]},{"name":"fork_right","version":1,"popularity":1714,"codepoint":60332,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","fork","maps","navigation","path","right","route","sign","traffic"],"sizes_px":[20,24]},{"name":"format_align_center","version":12,"popularity":6713,"codepoint":57908,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","center","doc","edit","editing","editor","format","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_align_justify","version":12,"popularity":5191,"codepoint":57909,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","density","doc","edit","editing","editor","extra","format","justify","sheet","small","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_align_left","version":13,"popularity":10275,"codepoint":57910,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","doc","edit","editing","editor","format","left","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_align_right","version":13,"popularity":5832,"codepoint":57911,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","doc","edit","editing","editor","format","right","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_bold","version":12,"popularity":14544,"codepoint":57912,"unsupported_families":[],"categories":["editor"],"tags":["B","alphabet","bold","character","doc","edit","editing","editor","font","format","letters","sheet","spreadsheet","styles","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_clear","version":12,"popularity":2435,"codepoint":57913,"unsupported_families":[],"categories":["editor"],"tags":["T","alphabet","character","clear","disabled","doc","edit","editing","editor","enabled","font","format","letters","off","on","sheet","slash","spreadsheet","style","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_color_fill","version":14,"popularity":9933,"codepoint":57914,"unsupported_families":[],"categories":["editor"],"tags":["bucket","color","doc","edit","editing","editor","fill","format","paint","sheet","spreadsheet","style","text","type","writing"],"sizes_px":[20,24]},{"name":"format_color_reset","version":11,"popularity":3391,"codepoint":57915,"unsupported_families":[],"categories":["editor"],"tags":["clear","color","disabled","doc","droplet","edit","editing","editor","enabled","fill","format","off","on","paint","reset","sheet","slash","spreadsheet","style","text","type","water","writing"],"sizes_px":[24]},{"name":"format_color_text","version":17,"popularity":5871,"codepoint":57916,"unsupported_families":[],"categories":["editor"],"tags":["color","doc","edit","editing","editor","fill","format","paint","sheet","spreadsheet","style","text","type","writing"],"sizes_px":[20,24]},{"name":"format_indent_decrease","version":13,"popularity":2563,"codepoint":57917,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","decrease","doc","edit","editing","editor","format","indent","indentation","paragraph","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_indent_increase","version":13,"popularity":3677,"codepoint":57918,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","doc","edit","editing","editor","format","increase","indent","indentation","paragraph","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_italic","version":12,"popularity":10072,"codepoint":57919,"unsupported_families":[],"categories":["editor"],"tags":["alphabet","character","doc","edit","editing","editor","font","format","italic","letters","sheet","spreadsheet","style","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_line_spacing","version":12,"popularity":2354,"codepoint":57920,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","doc","edit","editing","editor","format","line","sheet","spacing","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_list_bulleted","version":13,"popularity":54452,"codepoint":57921,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","bulleted","doc","edit","editing","editor","format","list","notes","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_list_numbered","version":12,"popularity":22312,"codepoint":57922,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","digit","doc","edit","editing","editor","format","list","notes","numbered","numbers","sheet","spreadsheet","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_list_numbered_rtl","version":12,"popularity":5532,"codepoint":57959,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","digit","doc","edit","editing","editor","format","list","notes","numbered","numbers","rtl","sheet","spreadsheet","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_overline","version":1,"popularity":699,"codepoint":60261,"unsupported_families":[],"categories":["file"],"tags":["alphabet","character","doc","edit","editing","editor","font","format","letters","line","overline","sheet","spreadsheet","style","symbol","text","type","under","writing"],"sizes_px":[20,24]},{"name":"format_paint","version":12,"popularity":6274,"codepoint":57923,"unsupported_families":[],"categories":["editor"],"tags":["brush","color","doc","edit","editing","editor","fill","format","paint","roller","sheet","spreadsheet","style","text","type","writing"],"sizes_px":[24]},{"name":"format_quote","version":12,"popularity":24450,"codepoint":57924,"unsupported_families":[],"categories":["editor"],"tags":["doc","edit","editing","editor","format","quotation","quote","sheet","spreadsheet","text","type","writing"],"sizes_px":[24]},{"name":"format_shapes","version":12,"popularity":4299,"codepoint":57950,"unsupported_families":[],"categories":["editor"],"tags":["alphabet","character","color","doc","edit","editing","editor","fill","font","format","insert","letters","paint","shapes","sheet","spreadsheet","style","symbol","text","type","vector","writing"],"sizes_px":[24]},{"name":"format_size","version":12,"popularity":8162,"codepoint":57925,"unsupported_families":[],"categories":["editor"],"tags":["alphabet","character","color","doc","edit","editing","editor","fill","font","format","letters","paint","sheet","size","spreadsheet","style","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_strikethrough","version":12,"popularity":2037,"codepoint":57926,"unsupported_families":[],"categories":["editor"],"tags":["alphabet","character","doc","edit","editing","editor","font","format","letters","sheet","spreadsheet","strikethrough","style","symbol","text","type","writing"],"sizes_px":[24]},{"name":"format_textdirection_l_to_r","version":13,"popularity":902,"codepoint":57927,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","doc","edit","editing","editor","format","ltr","paragraph","sheet","spreadsheet","text","textdirection","type","writing"],"sizes_px":[24]},{"name":"format_textdirection_r_to_l","version":13,"popularity":836,"codepoint":57928,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","doc","edit","editing","editor","format","ltr","paragraph","sheet","spreadsheet","text","textdirection","type","writing"],"sizes_px":[24]},{"name":"format_underlined","version":13,"popularity":7897,"codepoint":57929,"unsupported_families":[],"categories":["editor"],"tags":["alphabet","character","doc","edit","editing","editor","font","format","letters","line","sheet","spreadsheet","style","symbol","text","type","under","underlined","writing"],"sizes_px":[24]},{"name":"fort","version":2,"popularity":1187,"codepoint":60077,"unsupported_families":[],"categories":["maps"],"tags":["castle","fort","fortress","mansion","palace"],"sizes_px":[20,24]},{"name":"forum","version":19,"popularity":32995,"codepoint":57535,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","community","conversation","feedback","forum","hub","message","speech"],"sizes_px":[24]},{"name":"forward","version":17,"popularity":17290,"codepoint":57684,"unsupported_families":[],"categories":["content"],"tags":["arrow","forward","mail","message","playback","right","sent"],"sizes_px":[24]},{"name":"forward_10","version":13,"popularity":6552,"codepoint":57430,"unsupported_families":[],"categories":["av"],"tags":["10","arrow","control","controls","digit","fast","forward","music","numbers","play","seconds","symbol","video"],"sizes_px":[24]},{"name":"forward_30","version":13,"popularity":2581,"codepoint":57431,"unsupported_families":[],"categories":["av"],"tags":["30","arrow","control","controls","digit","fast","forward","music","numbers","seconds","symbol","video"],"sizes_px":[24]},{"name":"forward_5","version":13,"popularity":2193,"codepoint":57432,"unsupported_families":[],"categories":["av"],"tags":["10","5","arrow","control","controls","digit","fast","forward","music","numbers","seconds","symbol","video"],"sizes_px":[24]},{"name":"forward_to_inbox","version":9,"popularity":17935,"codepoint":61831,"unsupported_families":[],"categories":["communication"],"tags":["arrow","arrows","directions","email","envelop","forward","inbox","letters","mail","message","navigation","outgoing","right","send","to"],"sizes_px":[20,24]},{"name":"foundation","version":6,"popularity":5748,"codepoint":61952,"unsupported_families":[],"categories":["places"],"tags":["architecture","base","basis","building","construction","estate","foundation","home","house","real","residential"],"sizes_px":[24]},{"name":"free_breakfast","version":11,"popularity":6681,"codepoint":60228,"unsupported_families":[],"categories":["places"],"tags":["beverage","breakfast","cafe","coffee","cup","drink","free","mug","tea"],"sizes_px":[24]},{"name":"free_cancellation","version":5,"popularity":5967,"codepoint":59208,"unsupported_families":[],"categories":["action"],"tags":["approve","calendar","cancel","cancellation","check","clear","complete","date","day","done","event","exit","free","mark","month","no","ok","remove","schedule","select","stop","tick","validate","verified","x","yes"],"sizes_px":[20,24]},{"name":"front_hand","version":3,"popularity":10284,"codepoint":59241,"unsupported_families":[],"categories":["social"],"tags":["fingers","front","gesture","hand","hello","palm","stop"],"sizes_px":[20,24]},{"name":"fullscreen","version":12,"popularity":35588,"codepoint":58832,"unsupported_families":[],"categories":["navigation"],"tags":["adjust","app","application","components","full","fullscreen","interface","screen","site","size","ui","ux","view","web","website"],"sizes_px":[24]},{"name":"fullscreen_exit","version":12,"popularity":15897,"codepoint":58833,"unsupported_families":[],"categories":["navigation"],"tags":["adjust","app","application","components","exit","full","fullscreen","interface","screen","site","size","ui","ux","view","web","website"],"sizes_px":[24]},{"name":"functions","version":12,"popularity":11430,"codepoint":57930,"unsupported_families":[],"categories":["editor"],"tags":["average","calculate","count","custom","doc","edit","editing","editor","functions","math","sheet","spreadsheet","style","sum","text","type","writing"],"sizes_px":[24]},{"name":"g_mobiledata","version":9,"popularity":898,"codepoint":61456,"unsupported_families":[],"categories":["device"],"tags":["alphabet","character","data","font","g","letters","mobile","network","service","symbol","text","type"],"sizes_px":[24]},{"name":"g_translate","version":15,"popularity":14097,"codepoint":59687,"unsupported_families":[],"categories":["action"],"tags":["emblem","g","google","language","logo","mark","speaking","speech","translate","translator","words"],"sizes_px":[24]},{"name":"gamepad","version":12,"popularity":4379,"codepoint":58127,"unsupported_families":[],"categories":["hardware"],"tags":["buttons","console","controller","device","game","gamepad","gaming","playstation","video"],"sizes_px":[24]},{"name":"games","version":12,"popularity":7179,"codepoint":57377,"unsupported_families":[],"categories":["av"],"tags":["adjust","arrow","arrows","control","controller","direction","games","gaming","left","move","right"],"sizes_px":[24]},{"name":"garage","version":10,"popularity":5969,"codepoint":61457,"unsupported_families":[],"categories":["search"],"tags":["automobile","automotive","car","cars","direction","garage","maps","transportation","travel","vehicle"],"sizes_px":[24]},{"name":"gas_meter","version":1,"popularity":1696,"codepoint":60441,"unsupported_families":[],"categories":["home"],"tags":["droplet","energy","gas","measure","meter","nest","usage","water"],"sizes_px":[20,24]},{"name":"gavel","version":14,"popularity":30086,"codepoint":59662,"unsupported_families":[],"categories":["action"],"tags":["agreement","contract","court","document","gavel","government","judge","law","mallet","official","police","rule","rules","terms"],"sizes_px":[24]},{"name":"generating_tokens","version":5,"popularity":6001,"codepoint":59209,"unsupported_families":[],"categories":["action"],"tags":["access","ai","api","artificial","automatic","automation","coin","custom","genai","generating","intelligence","magic","smart","spark","sparkle","star","tokens"],"sizes_px":[20,24]},{"name":"gesture","version":12,"popularity":5863,"codepoint":57685,"unsupported_families":[],"categories":["content"],"tags":["doodle","draw","drawing","finger","gesture","gestures","hand","motion","scribble","string","thread"],"sizes_px":[24]},{"name":"get_app","version":12,"popularity":27073,"codepoint":59524,"unsupported_families":[],"categories":["action"],"tags":["app","arrow","arrows","down","download","downloads","export","get","install","play","upload"],"sizes_px":[24]},{"name":"gif","version":14,"popularity":5237,"codepoint":59656,"unsupported_families":[],"categories":["action"],"tags":["alphabet","animated","animation","bitmap","character","font","format","gif","graphics","interchange","letters","symbol","text","type"],"sizes_px":[24]},{"name":"gif_box","version":3,"popularity":4013,"codepoint":59299,"unsupported_families":[],"categories":["action"],"tags":["alphabet","animated","animation","bitmap","character","font","format","gif","graphics","interchange","letter","letters","symbol","text","type"],"sizes_px":[20,24]},{"name":"girl","version":1,"popularity":2713,"codepoint":60264,"unsupported_families":[],"categories":["social"],"tags":["body","female","gender","girl","human","lady","people","person","social","symbol","woman","women"],"sizes_px":[20,24]},{"name":"gite","version":4,"popularity":5228,"codepoint":58763,"unsupported_families":[],"categories":["places"],"tags":["architecture","estate","gite","home","hostel","house","maps","place","real","residence","residential","stay","traveling"],"sizes_px":[20,24]},{"name":"golf_course","version":11,"popularity":4799,"codepoint":60229,"unsupported_families":[],"categories":["places"],"tags":["athlete","athletic","ball","club","course","entertainment","flag","golf","golfer","golfing","hobby","hole","places","putt","sports"],"sizes_px":[24]},{"name":"gpp_bad","version":10,"popularity":7397,"codepoint":61458,"unsupported_families":[],"categories":["device"],"tags":["bad","cancel","certified","close","error","exit","gpp","no","privacy","private","protect","protection","remove","security","shield","sim","stop","verified","x"],"sizes_px":[24]},{"name":"gpp_good","version":9,"popularity":17003,"codepoint":61459,"unsupported_families":[],"categories":["device"],"tags":["certified","check","good","gpp","ok","pass","security","shield","sim","tick"],"sizes_px":[24]},{"name":"gpp_maybe","version":10,"popularity":8808,"codepoint":61460,"unsupported_families":[],"categories":["device"],"tags":["!","alert","attention","caution","certified","danger","error","exclamation","gpp","important","mark","maybe","notification","privacy","private","protect","protection","security","shield","sim","symbol","verified","warning"],"sizes_px":[24]},{"name":"gps_fixed","version":12,"popularity":20487,"codepoint":57779,"unsupported_families":[],"categories":["device"],"tags":["destination","direction","fixed","gps","location","maps","pin","place","pointer","stop","tracking"],"sizes_px":[24]},{"name":"gps_not_fixed","version":12,"popularity":4054,"codepoint":57780,"unsupported_families":[],"categories":["device"],"tags":["destination","direction","disabled","enabled","gps","location","maps","not fixed","off","on","online","place","pointer","slash","tracking"],"sizes_px":[24]},{"name":"gps_off","version":12,"popularity":2122,"codepoint":57781,"unsupported_families":[],"categories":["device"],"tags":["destination","direction","disabled","enabled","gps","location","maps","not fixed","off","offline","on","place","pointer","slash","tracking"],"sizes_px":[24]},{"name":"grade","version":16,"popularity":60429,"codepoint":59525,"unsupported_families":[],"categories":["action"],"tags":["'favorite_news'  .","'star_outline'","Duplicate of 'star_boarder'","star_border_purple500'"],"sizes_px":[24]},{"name":"gradient","version":12,"popularity":3142,"codepoint":58345,"unsupported_families":[],"categories":["image"],"tags":["color","edit","editing","effect","filter","gradient","image","images","photography","picture","pictures"],"sizes_px":[24]},{"name":"grading","version":12,"popularity":18222,"codepoint":59983,"unsupported_families":[],"categories":["action"],"tags":["'favorite'_new'.  ' Remove this icon & keep 'star'.","'star_boarder'","'star_border_purple500'","'star_outline'","'star_purple500'","'star_rate'","Same as 'star'"],"sizes_px":[20,24]},{"name":"grain","version":12,"popularity":5386,"codepoint":58346,"unsupported_families":[],"categories":["image"],"tags":["dots","edit","editing","effect","filter","grain","image","images","photography","picture","pictures"],"sizes_px":[24]},{"name":"graphic_eq","version":13,"popularity":12405,"codepoint":57784,"unsupported_families":[],"categories":["device"],"tags":["audio","detect","detection","eq","equalizer","graphic","music","noise","recording","sound","voice"],"sizes_px":[24]},{"name":"grass","version":7,"popularity":11347,"codepoint":61957,"unsupported_families":[],"categories":["places"],"tags":["backyard","fodder","grass","ground","home","lawn","plant","turf","yard"],"sizes_px":[24]},{"name":"grid_3x3","version":10,"popularity":1982,"codepoint":61461,"unsupported_families":[],"categories":["device"],"tags":["3","grid","layout","line","space"],"sizes_px":[24]},{"name":"grid_4x4","version":10,"popularity":3068,"codepoint":61462,"unsupported_families":[],"categories":["device"],"tags":["4","by","grid","layout","lines","space"],"sizes_px":[24]},{"name":"grid_goldenratio","version":10,"popularity":1147,"codepoint":61463,"unsupported_families":[],"categories":["device"],"tags":["golden","goldenratio","grid","layout","lines","ratio","space"],"sizes_px":[24]},{"name":"grid_off","version":12,"popularity":1534,"codepoint":58347,"unsupported_families":[],"categories":["image"],"tags":["collage","disabled","enabled","grid","image","layout","off","on","slash","view"],"sizes_px":[24]},{"name":"grid_on","version":12,"popularity":10520,"codepoint":58348,"unsupported_families":[],"categories":["image"],"tags":["background","collage","disabled","enabled","grid","image","layout","off","on","slash","view"],"sizes_px":[24]},{"name":"grid_view","version":12,"popularity":64058,"codepoint":59824,"unsupported_families":[],"categories":["file"],"tags":["app","application square","blocks","components","dashboard","design","grid","interface","layout","screen","site","tiles","ui","ux","view","web","website","window"],"sizes_px":[24]},{"name":"group","version":19,"popularity":61449,"codepoint":59375,"unsupported_families":[],"categories":["social"],"tags":["accounts","committee","face","family","friends","group","humans","network","people","persons","profiles","social","team","users"],"sizes_px":[24]},{"name":"group_add","version":18,"popularity":42240,"codepoint":59376,"unsupported_families":[],"categories":["social"],"tags":["accounts","add","committee","face","family","friends","group","humans","increase","more","network","people","persons","plus","profiles","social","team","users"],"sizes_px":[20,24]},{"name":"group_off","version":5,"popularity":2989,"codepoint":59207,"unsupported_families":[],"categories":["social"],"tags":["body","club","collaboration","crowd","gathering","group","human","meeting","off","people","person","social","teams"],"sizes_px":[20,24]},{"name":"group_remove","version":3,"popularity":3599,"codepoint":59309,"unsupported_families":[],"categories":["social"],"tags":["accounts","committee","face","family","friends","group","humans","network","people","persons","profiles","remove","social","team","users"],"sizes_px":[20,24]},{"name":"group_work","version":12,"popularity":20693,"codepoint":59526,"unsupported_families":[],"categories":["action"],"tags":["alliance","collaboration","group","partnership","team","teamwork","together","work"],"sizes_px":[24]},{"name":"groups","version":6,"popularity":170307,"codepoint":62003,"unsupported_families":[],"categories":["social"],"tags":["body","club","collaboration","crowd","gathering","groups","human","meeting","people","person","social","teams"],"sizes_px":[24]},{"name":"groups_2","version":1,"popularity":4544,"codepoint":63711,"unsupported_families":[],"categories":["social"],"tags":["body","club","collaboration","crowd","gathering","groups","hair","human","meeting","people","person","social","teams"],"sizes_px":[20,24]},{"name":"groups_3","version":1,"popularity":2827,"codepoint":63712,"unsupported_families":[],"categories":["social"],"tags":["abstract","body","club","collaboration","crowd","gathering","groups","human","meeting","people","person","social","teams"],"sizes_px":[20,24]},{"name":"h_mobiledata","version":9,"popularity":827,"codepoint":61464,"unsupported_families":[],"categories":["device"],"tags":["alphabet","character","data","font","h","letters","mobile","network","service","symbol","text","type"],"sizes_px":[24]},{"name":"h_plus_mobiledata","version":9,"popularity":735,"codepoint":61465,"unsupported_families":[],"categories":["device"],"tags":["+","alphabet","character","data","font","h","letters","mobile","network","plus","service","symbol","text","type"],"sizes_px":[24]},{"name":"hail","version":11,"popularity":7071,"codepoint":59825,"unsupported_families":[],"categories":["maps"],"tags":["body","hail","human","people","person","pick","public","stop","taxi","transportation"],"sizes_px":[24]},{"name":"handshake","version":1,"popularity":21690,"codepoint":60363,"unsupported_families":[],"categories":["social"],"tags":["agreement","hand","hands","partnership","shake"],"sizes_px":[20,24]},{"name":"handyman","version":12,"popularity":26321,"codepoint":61707,"unsupported_families":[],"categories":["maps"],"tags":["build","construction","fix","hammer","handyman","repair","screw","screwdriver","tools"],"sizes_px":[20,24]},{"name":"hardware","version":10,"popularity":5066,"codepoint":59993,"unsupported_families":[],"categories":["maps"],"tags":["break","construction","hammer","hardware","nail","repair","tool"],"sizes_px":[20,24]},{"name":"hd","version":12,"popularity":3196,"codepoint":57426,"unsupported_families":[],"categories":["av"],"tags":["alphabet","character","codec","definition","display","font","hd","high","high definition","letters","movie","movies","resolution","screen","symbol","text","tv","type"],"sizes_px":[24]},{"name":"hdr_auto","version":10,"popularity":2880,"codepoint":61466,"unsupported_families":[],"categories":["device"],"tags":["A","alphabet","auto","camera","character","circle","dynamic","font","hdr","high","letters","photo","range","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_auto_select","version":10,"popularity":666,"codepoint":61467,"unsupported_families":[],"categories":["device"],"tags":["+","A","alphabet","auto","camera","character","circle","dynamic","font","hdr","high","letters","photo","range","select","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_enhanced_select","version":11,"popularity":721,"codepoint":61265,"unsupported_families":[],"categories":["image"],"tags":["add","alphabet","character","dynamic","enhance","font","hdr","high","letters","plus","range","select","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_off","version":11,"popularity":637,"codepoint":58349,"unsupported_families":[],"categories":["image"],"tags":["alphabet","character","disabled","dynamic","enabled","enhance","font","hdr","high","letters","off","on","range","select","slash","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_off_select","version":10,"popularity":630,"codepoint":61468,"unsupported_families":[],"categories":["device"],"tags":["alphabet","camera","character","circle","disabled","dynamic","enabled","font","hdr","high","letters","off","on","photo","range","select","slash","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_on","version":11,"popularity":1146,"codepoint":58350,"unsupported_families":[],"categories":["image"],"tags":["add","alphabet","character","dynamic","enhance","font","hdr","high","letters","on","plus","range","select","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_on_select","version":10,"popularity":703,"codepoint":61469,"unsupported_families":[],"categories":["device"],"tags":["+","alphabet","camera","character","circle","dynamic","font","hdr","high","letters","on","photo","range","select","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_plus","version":10,"popularity":834,"codepoint":61470,"unsupported_families":[],"categories":["image"],"tags":["+","add","alphabet","character","circle","dynamic","enhance","font","hdr","high","letters","plus","range","select","symbol","text","type"],"sizes_px":[24]},{"name":"hdr_strong","version":12,"popularity":2617,"codepoint":58353,"unsupported_families":[],"categories":["image"],"tags":["circles","dots","dynamic","enhance","hdr","high","range","strong"],"sizes_px":[24]},{"name":"hdr_weak","version":12,"popularity":2099,"codepoint":58354,"unsupported_families":[],"categories":["image"],"tags":["circles","dots","dynamic","enhance","hdr","high","range","weak"],"sizes_px":[24]},{"name":"headphones","version":9,"popularity":17003,"codepoint":61471,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","device","ear","earphone","headphones","headset","listen","music","sound"],"sizes_px":[24]},{"name":"headphones_battery","version":9,"popularity":1479,"codepoint":61472,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","battery","charging","device","ear","earphone","headphones","headset","listen","music","sound"],"sizes_px":[24]},{"name":"headset","version":12,"popularity":7685,"codepoint":58128,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","device","ear","earphone","headphones","headset","listen","music","sound"],"sizes_px":[24]},{"name":"headset_mic","version":12,"popularity":16180,"codepoint":58129,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","chat","device","ear","earphone","headphones","headset","listen","mic","music","sound","talk"],"sizes_px":[24]},{"name":"headset_off","version":12,"popularity":1934,"codepoint":58170,"unsupported_families":[],"categories":["hardware"],"tags":["accessory","audio","chat","device","disabled","ear","earphone","enabled","headphones","headset","listen","mic","music","mute","off","on","slash","sound","talk"],"sizes_px":[24]},{"name":"healing","version":12,"popularity":7447,"codepoint":58355,"unsupported_families":[],"categories":["image"],"tags":["bandage","edit","editing","emergency","fix","healing","hospital","image","medicine"],"sizes_px":[24]},{"name":"health_and_safety","version":7,"popularity":34858,"codepoint":57813,"unsupported_families":[],"categories":["social"],"tags":["+","add","and","certified","cross","health","home","nest","plus","privacy","private","protect","protection","safety","security","shield","symbol","verified"],"sizes_px":[24]},{"name":"hearing","version":12,"popularity":8597,"codepoint":57379,"unsupported_families":[],"categories":["av"],"tags":["accessibility","accessible","aids","body","ear","handicap","hearing","hearing aids","help","human","impaired","listen","mono","sound","volume"],"sizes_px":[24]},{"name":"hearing_disabled","version":14,"popularity":2199,"codepoint":61700,"unsupported_families":[],"categories":["av"],"tags":["accessibility","accessible","aid","disabled","ear","enabled","handicap","hearing","help","impaired","listen","mute","off","on","slash","sound","volume"],"sizes_px":[20,24]},{"name":"heart_broken","version":2,"popularity":6162,"codepoint":60098,"unsupported_families":[],"categories":["social"],"tags":["break","broken","core","crush","health","heart","nucleus","split"],"sizes_px":[20,24]},{"name":"heat_pump","version":1,"popularity":1949,"codepoint":60440,"unsupported_families":[],"categories":["home"],"tags":["air conditioner","cool","energy","furnance","heat","nest","pump","usage"],"sizes_px":[20,24]},{"name":"height","version":11,"popularity":7550,"codepoint":59926,"unsupported_families":[],"categories":["editor"],"tags":["arrow","color","doc","down","edit","editing","editor","fill","format","height","paint","sheet","spreadsheet","style","text","type","up","writing"],"sizes_px":[20,24]},{"name":"help","version":13,"popularity":114335,"codepoint":59527,"unsupported_families":[],"categories":["action"],"tags":["?","assistance","circle","help","info","information","punctuation","question mark","recent","restore","shape","support","symbol"],"sizes_px":[24]},{"name":"help_center","version":9,"popularity":26243,"codepoint":61888,"unsupported_families":[],"categories":["action"],"tags":["?","assistance","center","help","info","information","punctuation","question mark","recent","restore","support","symbol"],"sizes_px":[24]},{"name":"help_outline","version":12,"popularity":165200,"codepoint":59645,"unsupported_families":[],"categories":["action"],"tags":["?","assistance","circle","help","info","information","outline","punctuation","question mark","recent","restore","shape","support","symbol"],"sizes_px":[24]},{"name":"hevc","version":10,"popularity":706,"codepoint":61473,"unsupported_families":[],"categories":["image"],"tags":["alphabet","character","coding","efficiency","font","hevc","high","letters","symbol","text","type","video"],"sizes_px":[24]},{"name":"hexagon","version":1,"popularity":3224,"codepoint":60217,"unsupported_families":[],"categories":["editor"],"tags":["hexagon","shape","six sides"],"sizes_px":[20,24]},{"name":"hide_image","version":10,"popularity":2933,"codepoint":61474,"unsupported_families":[],"categories":["image"],"tags":["disabled","enabled","hide","image","landscape","mountain","mountains","off","on","photo","photography","picture","slash"],"sizes_px":[24]},{"name":"hide_source","version":9,"popularity":9797,"codepoint":61475,"unsupported_families":[],"categories":["action"],"tags":["circle","disabled","enabled","hide","off","offline","on","shape","slash","source"],"sizes_px":[24]},{"name":"high_quality","version":12,"popularity":5023,"codepoint":57380,"unsupported_families":[],"categories":["av"],"tags":["alphabet","character","definition","display","font","high","hq","letters","movie","movies","quality","resolution","screen","symbol","text","tv","type"],"sizes_px":[24]},{"name":"highlight","version":14,"popularity":5357,"codepoint":57951,"unsupported_families":[],"categories":["editor"],"tags":["color","doc","edit","editing","editor","emphasize","fill","flash","format","highlight","light","paint","sheet","spreadsheet","style","text","type","writing"],"sizes_px":[24]},{"name":"highlight_alt","version":12,"popularity":8838,"codepoint":61266,"unsupported_families":[],"categories":["action"],"tags":["alt","arrow","box","click","cursor","draw","focus","highlight","pointer","select","selection","target"],"sizes_px":[24]},{"name":"highlight_off","version":17,"popularity":120720,"codepoint":59528,"unsupported_families":[],"categories":["action"],"tags":["cancel","clear","close","exit","highlight","no","off","quit","remove","stop","x"],"sizes_px":[24]},{"name":"hiking","version":4,"popularity":11205,"codepoint":58634,"unsupported_families":[],"categories":["social"],"tags":["backpacking","bag","climbing","duffle","hiking","mountain","social","sports","stick","trail","travel","walking"],"sizes_px":[20,24]},{"name":"history","version":12,"popularity":91278,"codepoint":59529,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backwards","clock","date","device","history","home","nest","refresh","renew","reset","restore","reverse","rotate","schedule","time","turn"],"sizes_px":[24]},{"name":"history_edu","version":11,"popularity":24044,"codepoint":59966,"unsupported_families":[],"categories":["social"],"tags":["document","edu","education","feather","history","letters","paper","pen","quill","school","story","tools","write","writing"],"sizes_px":[20,24]},{"name":"history_toggle_off","version":9,"popularity":10559,"codepoint":61821,"unsupported_families":[],"categories":["action"],"tags":["clock","dash","dashed","date","history","off","schedule","time","toggle"],"sizes_px":[20,24]},{"name":"hive","version":2,"popularity":4559,"codepoint":60070,"unsupported_families":[],"categories":["social"],"tags":["bee","honey","honeycomb"],"sizes_px":[20,24]},{"name":"hls","version":1,"popularity":751,"codepoint":60298,"unsupported_families":[],"categories":["action"],"tags":["alphabet","character","develop","developer","engineer","engineering","font","hls","letters","platform","symbol","text","type"],"sizes_px":[20,24]},{"name":"hls_off","version":1,"popularity":753,"codepoint":60300,"unsupported_families":[],"categories":["action"],"tags":["alphabet","character","develop","developer","disabled","enabled","engineer","engineering","font","hls","letters","off","offline","on","platform","slash","symbol","text","type"],"sizes_px":[20,24]},{"name":"holiday_village","version":4,"popularity":8634,"codepoint":58762,"unsupported_families":[],"categories":["places"],"tags":["architecture","beach","camping","cottage","estate","holiday","home","house","lake","lodge","maps","place","real","residence","residential","stay","traveling","vacation","village"],"sizes_px":[20,24]},{"name":"home","version":16,"popularity":759039,"codepoint":59530,"unsupported_families":[],"categories":["action"],"tags":["address","app","application--house","architecture","building","components","design","estate","home","interface","layout","place","real","residence","residential","screen","shelter","site","structure","ui","unit","ux","web","website","window"],"sizes_px":[24]},{"name":"home_max","version":10,"popularity":1564,"codepoint":61476,"unsupported_families":[],"categories":["hardware"],"tags":["device","gadget","hardware","home","internet","iot","max","nest","smart","things"],"sizes_px":[24]},{"name":"home_mini","version":10,"popularity":1241,"codepoint":61477,"unsupported_families":[],"categories":["hardware"],"tags":["Internet","device","gadget","hardware","home","iot","mini","nest","smart","things"],"sizes_px":[24]},{"name":"home_repair_service","version":12,"popularity":14631,"codepoint":61696,"unsupported_families":[],"categories":["maps"],"tags":["box","equipment","fix","home","kit","mechanic","repair","repairing","service","tool","toolbox","tools","workshop"],"sizes_px":[20,24]},{"name":"home_work","version":13,"popularity":16660,"codepoint":59913,"unsupported_families":[],"categories":["navigation"],"tags":["architecture","building","estate","home","place","real","residence","residential","shelter","work"],"sizes_px":[20,24]},{"name":"horizontal_distribute","version":6,"popularity":2312,"codepoint":57364,"unsupported_families":[],"categories":["editor"],"tags":["alignment","distribute","format","horizontal","layout","lines","paragraph","rule","rules","style","text"],"sizes_px":[24]},{"name":"horizontal_rule","version":13,"popularity":10484,"codepoint":61704,"unsupported_families":[],"categories":["editor"],"tags":["gmail","horizontal","line","novitas","rule"],"sizes_px":[20,24]},{"name":"horizontal_split","version":15,"popularity":4804,"codepoint":59719,"unsupported_families":[],"categories":["action"],"tags":["bars","format","horizontal","layout","lines","split","stacked"],"sizes_px":[24]},{"name":"hot_tub","version":12,"popularity":3360,"codepoint":60230,"unsupported_families":[],"categories":["places"],"tags":["bath","bathing","bathroom","bathtub","hot","hotel","human","jacuzzi","person","shower","spa","steam","travel","tub","water"],"sizes_px":[24]},{"name":"hotel","version":19,"popularity":14061,"codepoint":58682,"unsupported_families":[],"categories":["maps"],"tags":["body","hotel","human","people","person","sleep","stay","travel","trip"],"sizes_px":[24]},{"name":"hotel_class","version":6,"popularity":9216,"codepoint":59203,"unsupported_families":[],"categories":["action"],"tags":["achievement","bookmark","class","favorite","highlight","hotel","important","marked","rank","ranking","rate","rating","reward","save","saved","shape","special","star"],"sizes_px":[20,24]},{"name":"hourglass_bottom","version":11,"popularity":17514,"codepoint":59996,"unsupported_families":[],"categories":["communication"],"tags":["bottom","countdown","half","hourglass","loading","minute","minutes","time","wait","waiting"],"sizes_px":[20,24]},{"name":"hourglass_disabled","version":12,"popularity":3749,"codepoint":61267,"unsupported_families":[],"categories":["action"],"tags":["clock","countdown","disabled","empty","enabled","hourglass","loading","minute","minutes","off","on","slash","time","wait","waiting"],"sizes_px":[20,24]},{"name":"hourglass_empty","version":15,"popularity":26399,"codepoint":59531,"unsupported_families":[],"categories":["action"],"tags":["countdown","empty","full","hourglass","loading","minutes","time","wait","waiting"],"sizes_px":[24]},{"name":"hourglass_full","version":15,"popularity":8458,"codepoint":59532,"unsupported_families":[],"categories":["action"],"tags":["countdown","empty","full","hourglass","loading","minutes","time","wait","waiting"],"sizes_px":[24]},{"name":"hourglass_top","version":11,"popularity":16952,"codepoint":59995,"unsupported_families":[],"categories":["communication"],"tags":["countdown","half","hourglass","loading","minute","minutes","time","top","wait","waiting"],"sizes_px":[20,24]},{"name":"house","version":11,"popularity":20256,"codepoint":59972,"unsupported_families":[],"categories":["places"],"tags":["architecture","building","estate","family","home","homepage","house","place","places","real","residence","residential","shelter"],"sizes_px":[20,24]},{"name":"house_siding","version":6,"popularity":3401,"codepoint":61954,"unsupported_families":[],"categories":["places"],"tags":["architecture","building","construction","estate","exterior","facade","home","house","real","residential","siding"],"sizes_px":[24]},{"name":"houseboat","version":4,"popularity":2340,"codepoint":58756,"unsupported_families":[],"categories":["places"],"tags":["architecture","beach","boat","estate","floating","home","house","houseboat","maps","place","real","residence","residential","sea","stay","traveling","vacation"],"sizes_px":[20,24]},{"name":"how_to_reg","version":14,"popularity":32979,"codepoint":57716,"unsupported_families":[],"categories":["content"],"tags":["approve","ballot","check","complete","done","election","how","mark","ok","poll","register","registration","select","tick","to reg","validate","verified","vote","yes"],"sizes_px":[24]},{"name":"how_to_vote","version":15,"popularity":6109,"codepoint":57717,"unsupported_families":[],"categories":["content"],"tags":["ballot","election","how","poll","to","vote"],"sizes_px":[24]},{"name":"html","version":1,"popularity":4498,"codepoint":60286,"unsupported_families":[],"categories":["action"],"tags":["alphabet","brackets","character","code","css","develop","developer","engineer","engineering","font","html","letters","platform","symbol","text","type"],"sizes_px":[20,24]},{"name":"http","version":11,"popularity":6002,"codepoint":59650,"unsupported_families":[],"categories":["action"],"tags":["alphabet","character","font","http","letters","symbol","text","transfer","type","url","website"],"sizes_px":[24]},{"name":"https","version":16,"popularity":18764,"codepoint":59533,"unsupported_families":[],"categories":["action"],"tags":["https","lock","locked","password","privacy","private","protection","safety","secure","security"],"sizes_px":[24]},{"name":"hub","version":2,"popularity":13658,"codepoint":59892,"unsupported_families":[],"categories":["communication"],"tags":["center","connection","core","focal point","hub","network","nodes","nucleus","topology"],"sizes_px":[20,24]},{"name":"hvac","version":12,"popularity":2728,"codepoint":61710,"unsupported_families":[],"categories":["maps"],"tags":["air","conditioning","heating","hvac","ventilation"],"sizes_px":[20,24]},{"name":"ice_skating","version":4,"popularity":2073,"codepoint":58635,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","entertainment","exercise","hobby","ice","shoe","skates","skating","social","sports","travel"],"sizes_px":[20,24]},{"name":"icecream","version":11,"popularity":5356,"codepoint":60009,"unsupported_families":[],"categories":["maps"],"tags":["cream","dessert","food","ice","icecream","snack"],"sizes_px":[20,24]},{"name":"image","version":16,"popularity":97650,"codepoint":58356,"unsupported_families":[],"categories":["image"],"tags":["image","landscape","mountain","mountains","photo","photography","picture"],"sizes_px":[24]},{"name":"image_aspect_ratio","version":12,"popularity":1104,"codepoint":58357,"unsupported_families":[],"categories":["image"],"tags":["aspect","image","photo","photography","picture","ratio","rectangle","square"],"sizes_px":[24]},{"name":"image_not_supported","version":13,"popularity":5046,"codepoint":61718,"unsupported_families":[],"categories":["image"],"tags":["disabled","enabled","image","landscape","mountain","mountains","not","off","on","photo","photography","picture","slash","supported"],"sizes_px":[20,24]},{"name":"image_search","version":12,"popularity":7642,"codepoint":58431,"unsupported_families":[],"categories":["image"],"tags":["find","glass","image","landscape","look","magnify","magnifying","mountain","mountains","photo","photography","picture","search","see"],"sizes_px":[24]},{"name":"imagesearch_roller","version":11,"popularity":2215,"codepoint":59828,"unsupported_families":[],"categories":["notification"],"tags":["art","image","imagesearch","paint","roller","search"],"sizes_px":[24]},{"name":"import_contacts","version":14,"popularity":19739,"codepoint":57568,"unsupported_families":[],"categories":["communication"],"tags":["address","book","contacts","import","info","information","open"],"sizes_px":[24]},{"name":"import_export","version":12,"popularity":18323,"codepoint":57539,"unsupported_families":[],"categories":["communication"],"tags":["arrow","arrows","direction","down","explort","import","up"],"sizes_px":[24]},{"name":"important_devices","version":11,"popularity":11256,"codepoint":59666,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","desktop","devices","hardware","iOS","important","mobile","monitor","phone","star","tablet","web"],"sizes_px":[24]},{"name":"inbox","version":18,"popularity":15342,"codepoint":57686,"unsupported_families":[],"categories":["content"],"tags":["archive","category","email","inbox","incoming","mail","message"],"sizes_px":[24]},{"name":"incomplete_circle","version":3,"popularity":3899,"codepoint":59291,"unsupported_families":[],"categories":["image"],"tags":["chart","circle","incomplete"],"sizes_px":[20,24]},{"name":"indeterminate_check_box","version":18,"popularity":15890,"codepoint":59657,"unsupported_families":[],"categories":["toggle"],"tags":["app","application","box","button","check","components","control","design","form","indeterminate","interface","screen","select","selected","selection","site","square","toggle","ui","undetermined","ux","web","website"],"sizes_px":[24]},{"name":"info","version":21,"popularity":450224,"codepoint":59534,"unsupported_families":[],"categories":["action"],"tags":["alert","announcement","assistance","details","help","i","info","information","service","support"],"sizes_px":[24]},{"name":"input","version":13,"popularity":18517,"codepoint":59536,"unsupported_families":[],"categories":["action"],"tags":["arrow","box","download","input","login","move","right"],"sizes_px":[24]},{"name":"insert_chart","version":12,"popularity":8693,"codepoint":57931,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","insert","measure","metrics","statistics","tracking"],"sizes_px":[24]},{"name":"insert_chart_outlined","version":12,"popularity":13261,"codepoint":57962,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","insert","measure","metrics","outlined","statistics","tracking"],"sizes_px":[24]},{"name":"insert_comment","version":13,"popularity":7938,"codepoint":57932,"unsupported_families":[],"categories":["editor"],"tags":["add","bubble","chat","comment","feedback","insert","message"],"sizes_px":[24]},{"name":"insert_drive_file","version":17,"popularity":26292,"codepoint":57933,"unsupported_families":[],"categories":["editor"],"tags":["doc","drive","file","format","insert","sheet","slide"],"sizes_px":[24]},{"name":"insert_emoticon","version":15,"popularity":13984,"codepoint":57934,"unsupported_families":[],"categories":["editor"],"tags":["account","emoji","emoticon","face","happy","human","insert","people","person","profile","sentiment","smile","user"],"sizes_px":[24]},{"name":"insert_invitation","version":12,"popularity":10477,"codepoint":57935,"unsupported_families":[],"categories":["editor"],"tags":["calendar","date","day","event","insert","invitation","mark","month","range","remember","reminder","today","week"],"sizes_px":[24]},{"name":"insert_link","version":12,"popularity":10835,"codepoint":57936,"unsupported_families":[],"categories":["editor"],"tags":["add","attach","clip","file","insert","link","mail","media"],"sizes_px":[24]},{"name":"insert_page_break","version":2,"popularity":1268,"codepoint":60106,"unsupported_families":[],"categories":["editor"],"tags":["break","dash","dashed","doc","document","file","page","paper"],"sizes_px":[20,24]},{"name":"insert_photo","version":12,"popularity":13516,"codepoint":57937,"unsupported_families":[],"categories":["editor"],"tags":["image","insert","landscape","mountain","mountains","photo","photography","picture"],"sizes_px":[24]},{"name":"insights","version":12,"popularity":55881,"codepoint":61586,"unsupported_families":[],"categories":["content"],"tags":["ai","analytics","artificial","automatic","automation","bar","bars","chart","custom","data","diagram","genai","graph","infographic","insights","intelligence","magic","measure","metrics","smart","spark","sparkle","star","stars","statistics","tracking"],"sizes_px":[20,24]},{"name":"install_desktop","version":1,"popularity":2995,"codepoint":60273,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","chrome","desktop","device","display","fix","hardware","iOS","install","mac","monitor","place","pwa","screen","web","window"],"sizes_px":[20,24]},{"name":"install_mobile","version":1,"popularity":2350,"codepoint":60274,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","cell","device","hardware","iOS","install","mobile","phone","pwa","tablet"],"sizes_px":[20,24]},{"name":"integration_instructions","version":11,"popularity":14876,"codepoint":61268,"unsupported_families":[],"categories":["action"],"tags":["brackets","clipboard","code","css","develop","developer","doc","document","engineer","engineering clipboard","html","instructions","integration","platform"],"sizes_px":[24]},{"name":"interests","version":2,"popularity":8364,"codepoint":59336,"unsupported_families":[],"categories":["social"],"tags":["circle","heart","interests","shapes","social","square","triangle"],"sizes_px":[20,24]},{"name":"interpreter_mode","version":2,"popularity":2483,"codepoint":59451,"unsupported_families":[],"categories":["av"],"tags":["account","accounts","committee","dictation","face","family","friends","group","hear","hearing","human","humans","interpreter","keyboard","language","mic","microphone","mode","network","noise","people","person","persons","profile","profiles","record","recorder","social","sound","speaker","speaking","symbol","team","user","users","voice"],"sizes_px":[20,24]},{"name":"inventory","version":13,"popularity":58579,"codepoint":57721,"unsupported_families":[],"categories":["content"],"tags":["archive","box","clipboard","doc","document","file","inventory","organize","packages","product","stock","supply"],"sizes_px":[24]},{"name":"inventory_2","version":9,"popularity":61200,"codepoint":57761,"unsupported_families":[],"categories":["content"],"tags":["archive","box","file","inventory","organize","packages","product","stock","storage","supply"],"sizes_px":[20,24]},{"name":"invert_colors","version":13,"popularity":10706,"codepoint":59537,"unsupported_families":[],"categories":["action"],"tags":["colors","drop","droplet","edit","editing","hue","invert","inverted","palette","tone","water"],"sizes_px":[20,24]},{"name":"invert_colors_off","version":12,"popularity":1872,"codepoint":57540,"unsupported_families":[],"categories":["communication"],"tags":["colors","disabled","drop","droplet","enabled","hue","invert","inverted","off","offline","on","opacity","palette","slash","tone","water"],"sizes_px":[20,24]},{"name":"ios_share","version":13,"popularity":28530,"codepoint":59064,"unsupported_families":[],"categories":["social"],"tags":["arrow","export","ios","send","share","up"],"sizes_px":[24]},{"name":"iron","version":4,"popularity":2164,"codepoint":58755,"unsupported_families":[],"categories":["places"],"tags":["appliance","clothes","electric","iron","ironing","machine","object"],"sizes_px":[20,24]},{"name":"iso","version":11,"popularity":2363,"codepoint":58358,"unsupported_families":[],"categories":["image"],"tags":["add","edit","editing","effect","image","iso","minus","photography","picture","plus","sensor","shutter","speed","subtract"],"sizes_px":[24]},{"name":"javascript","version":1,"popularity":3478,"codepoint":60284,"unsupported_families":[],"categories":["action"],"tags":["alphabet","brackets","character","code","css","develop","developer","engineer","engineering","font","html","javascript","letters","platform","symbol","text","type"],"sizes_px":[20,24]},{"name":"join_full","version":1,"popularity":3559,"codepoint":60139,"unsupported_families":[],"categories":["action"],"tags":["circle","combine","command","join","left","outer","overlap","right","sql"],"sizes_px":[20,24]},{"name":"join_inner","version":1,"popularity":3059,"codepoint":60148,"unsupported_families":[],"categories":["action"],"tags":["circle","command","inner","join","matching","overlap","sql","values"],"sizes_px":[20,24]},{"name":"join_left","version":1,"popularity":2157,"codepoint":60146,"unsupported_families":[],"categories":["action"],"tags":["circle","command","join","left","matching","overlap","sql","values"],"sizes_px":[20,24]},{"name":"join_right","version":1,"popularity":1917,"codepoint":60138,"unsupported_families":[],"categories":["action"],"tags":["circle","command","join","matching","overlap","right","sql","values"],"sizes_px":[20,24]},{"name":"kayaking","version":4,"popularity":3616,"codepoint":58636,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","canoe","entertainment","exercise","hobby","human","kayak","kayaking","lake","paddle","paddling","people","person","rafting","river","row","social","sports","summer","travel","water"],"sizes_px":[20,24]},{"name":"kebab_dining","version":2,"popularity":1219,"codepoint":59458,"unsupported_families":[],"categories":["maps"],"tags":["dining","dinner","food","kebab","meal","meat","skewer"],"sizes_px":[20,24]},{"name":"key","version":2,"popularity":22249,"codepoint":59196,"unsupported_families":[],"categories":["communication"],"tags":["access","door","entry","key","lock","password","unlock"],"sizes_px":[20,24]},{"name":"key_off","version":1,"popularity":1384,"codepoint":60292,"unsupported_families":[],"categories":["communication"],"tags":["access","disabled","door","enabled","entry","key","lock","off","offline","on","password","slash","unlock"],"sizes_px":[20,24]},{"name":"keyboard","version":13,"popularity":16544,"codepoint":58130,"unsupported_families":[],"categories":["hardware"],"tags":["computer","device","hardware","input","keyboard","keypad","letters","office","text","type"],"sizes_px":[24]},{"name":"keyboard_alt","version":15,"popularity":4088,"codepoint":61480,"unsupported_families":[],"categories":["hardware"],"tags":["computer","device","hardware","input","keyboard","keypad","letters","office","text","type"],"sizes_px":[24]},{"name":"keyboard_arrow_down","version":18,"popularity":69118,"codepoint":58131,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","down","keyboard"],"sizes_px":[24]},{"name":"keyboard_arrow_left","version":17,"popularity":18431,"codepoint":58132,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","keyboard","left"],"sizes_px":[24]},{"name":"keyboard_arrow_right","version":17,"popularity":33987,"codepoint":58133,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","keyboard","right"],"sizes_px":[24]},{"name":"keyboard_arrow_up","version":19,"popularity":20888,"codepoint":58134,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","chevron","collapse","direction","expand","expandable","less","list","up"],"sizes_px":[24]},{"name":"keyboard_backspace","version":13,"popularity":22219,"codepoint":58135,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","back","backspace","keyboard","left"],"sizes_px":[24]},{"name":"keyboard_capslock","version":13,"popularity":2059,"codepoint":58136,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","capslock","keyboard","up"],"sizes_px":[24]},{"name":"keyboard_command_key","version":1,"popularity":1690,"codepoint":60135,"unsupported_families":[],"categories":["hardware"],"tags":["button","command key","control","keyboard"],"sizes_px":[20,24]},{"name":"keyboard_control_key","version":1,"popularity":860,"codepoint":60134,"unsupported_families":[],"categories":["hardware"],"tags":["control key","keyboard"],"sizes_px":[20,24]},{"name":"keyboard_double_arrow_down","version":2,"popularity":11360,"codepoint":60112,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","direction","double","down","multiple","navigation"],"sizes_px":[20,24]},{"name":"keyboard_double_arrow_left","version":2,"popularity":13334,"codepoint":60099,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","direction","double","left","multiple","navigation"],"sizes_px":[20,24]},{"name":"keyboard_double_arrow_right","version":2,"popularity":20217,"codepoint":60105,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","direction","double","multiple","navigation","right"],"sizes_px":[20,24]},{"name":"keyboard_double_arrow_up","version":2,"popularity":8562,"codepoint":60111,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","arrows","direction","double","multiple","navigation","up"],"sizes_px":[20,24]},{"name":"keyboard_hide","version":13,"popularity":2809,"codepoint":58138,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","computer","device","down","hardware","hide","input","keyboard","keypad","text"],"sizes_px":[24]},{"name":"keyboard_option_key","version":1,"popularity":693,"codepoint":60136,"unsupported_families":[],"categories":["hardware"],"tags":["alt key","key","keyboard","modifier key","option"],"sizes_px":[20,24]},{"name":"keyboard_return","version":13,"popularity":20498,"codepoint":58139,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","back","keyboard","left","return"],"sizes_px":[24]},{"name":"keyboard_tab","version":13,"popularity":5693,"codepoint":58140,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","keyboard","left","next","right","tab"],"sizes_px":[24]},{"name":"keyboard_voice","version":17,"popularity":10187,"codepoint":58141,"unsupported_families":[],"categories":["hardware"],"tags":["dictation","hear","hearing","keyboard","mic","microphone","noise","record","recorder","sound","speaker","voice"],"sizes_px":[24]},{"name":"king_bed","version":12,"popularity":8299,"codepoint":59973,"unsupported_families":[],"categories":["social"],"tags":["bed","bedroom","double","furniture","home","hotel","house","king","night","pillows","queen","rest","room","sleep"],"sizes_px":[20,24]},{"name":"kitchen","version":12,"popularity":8879,"codepoint":60231,"unsupported_families":[],"categories":["places"],"tags":["appliance","cold","food","fridge","home","house","ice","kitchen","places","refrigerator","storage"],"sizes_px":[24]},{"name":"kitesurfing","version":4,"popularity":2369,"codepoint":58637,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","beach","body","entertainment","exercise","hobby","human","kitesurfing","people","person","social","sports","surf","travel","water"],"sizes_px":[20,24]},{"name":"label","version":17,"popularity":34083,"codepoint":59538,"unsupported_families":[],"categories":["action"],"tags":["favorite","indent","label","library","mail","remember","save","stamp","sticker","tag"],"sizes_px":[24]},{"name":"label_important","version":20,"popularity":16035,"codepoint":59703,"unsupported_families":[],"categories":["action"],"tags":["chevron","favorite","flag","important","indent","label","library","mail","remember","right","save","stamp","sticker","tag","wing"],"sizes_px":[24]},{"name":"label_off","version":13,"popularity":2620,"codepoint":59830,"unsupported_families":[],"categories":["action"],"tags":["disabled","enabled","favorite","indent","label","library","mail","off","on","remember","save","slash","stamp","sticker","tag","wing"],"sizes_px":[24]},{"name":"lan","version":1,"popularity":5754,"codepoint":60207,"unsupported_families":[],"categories":["device"],"tags":["computer","connection","data","internet","lan","network","service"],"sizes_px":[20,24]},{"name":"landscape","version":12,"popularity":9710,"codepoint":58359,"unsupported_families":[],"categories":["image"],"tags":["image","landscape","mountain","mountains","nature","photo","photography","picture"],"sizes_px":[24]},{"name":"landslide","version":1,"popularity":854,"codepoint":60375,"unsupported_families":[],"categories":["social"],"tags":["crisis","disaster","natural","rain","storm","weather"],"sizes_px":[20,24]},{"name":"language","version":12,"popularity":182636,"codepoint":59540,"unsupported_families":[],"categories":["action"],"tags":["globe","internet","language","planet","website","world","www"],"sizes_px":[24]},{"name":"laptop","version":13,"popularity":19586,"codepoint":58142,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","computer","desktop","device","hardware","iOS","laptop","mac","monitor","web","windows"],"sizes_px":[24]},{"name":"laptop_chromebook","version":12,"popularity":5468,"codepoint":58143,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","chromebook","device","display","hardware","iOS","laptop","mac chromebook","monitor","screen","web","window"],"sizes_px":[24]},{"name":"laptop_mac","version":12,"popularity":7447,"codepoint":58144,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","device","display","hardware","iOS","laptop","mac","monitor","screen","web","window"],"sizes_px":[24]},{"name":"laptop_windows","version":12,"popularity":3218,"codepoint":58145,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","device","display","hardware","iOS","laptop","mac","monitor","screen","web","window","windows"],"sizes_px":[24]},{"name":"last_page","version":13,"popularity":14104,"codepoint":58845,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","chevron","components","end","forward","interface","last","page","right","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"launch","version":17,"popularity":43448,"codepoint":59541,"unsupported_families":[],"categories":["action"],"tags":["app","application","arrow","box","components","interface","launch","new","open","screen","site","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"layers","version":12,"popularity":22773,"codepoint":58683,"unsupported_families":[],"categories":["maps"],"tags":["arrange","disabled","enabled","interaction","layers","maps","off","on","overlay","pages","slash","stack"],"sizes_px":[24]},{"name":"layers_clear","version":12,"popularity":4305,"codepoint":58684,"unsupported_families":[],"categories":["maps"],"tags":["arrange","clear","delete","disabled","enabled","interaction","layers","maps","off","on","overlay","pages","slash"],"sizes_px":[24]},{"name":"leaderboard","version":6,"popularity":41490,"codepoint":61964,"unsupported_families":[],"categories":["action"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","leaderboard","measure","metrics","statistics","tracking"],"sizes_px":[24]},{"name":"leak_add","version":12,"popularity":3973,"codepoint":58360,"unsupported_families":[],"categories":["image"],"tags":["add","connection","data","leak","link","network","service","signals","synce","wireless"],"sizes_px":[24]},{"name":"leak_remove","version":12,"popularity":1295,"codepoint":58361,"unsupported_families":[],"categories":["image"],"tags":["connection","data","disabled","enabled","leak","link","network","off","offline","on","remove","service","signals","slash","synce","wireless"],"sizes_px":[24]},{"name":"legend_toggle","version":8,"popularity":6270,"codepoint":61723,"unsupported_families":[],"categories":["navigation"],"tags":["analytics","chart","data","diagram","graph","infographic","legend","measure","metrics","monitoring","stackdriver","statistics","toggle","tracking"],"sizes_px":[20,24]},{"name":"lens","version":12,"popularity":9225,"codepoint":58362,"unsupported_families":[],"categories":["image"],"tags":["angle","circle","eye","fish","full","geometry","image","lens","moon","panorama","photo","photography","picture","wide"],"sizes_px":[24]},{"name":"lens_blur","version":10,"popularity":4479,"codepoint":61481,"unsupported_families":[],"categories":["device"],"tags":["blur","camera","dim","dot","effect","foggy","fuzzy","image","lens","photo","soften"],"sizes_px":[24]},{"name":"library_add","version":13,"popularity":15608,"codepoint":57390,"unsupported_families":[],"categories":["av"],"tags":["+","add","collection","layers","library","multiple","music","new","plus","stacked","symbol","video"],"sizes_px":[24]},{"name":"library_add_check","version":17,"popularity":8654,"codepoint":59831,"unsupported_families":[],"categories":["av"],"tags":["add","approve","check","collection","complete","done","layers","library","mark","multiple","music","ok","select","stacked","tick","validate","verified","video","yes"],"sizes_px":[20,24]},{"name":"library_books","version":14,"popularity":32923,"codepoint":57391,"unsupported_families":[],"categories":["av"],"tags":["add","album","audio","book","books","collection","library","read","reading"],"sizes_px":[24]},{"name":"library_music","version":13,"popularity":10388,"codepoint":57392,"unsupported_families":[],"categories":["av"],"tags":["add","album","collection","library","music","song","sounds"],"sizes_px":[24]},{"name":"light","version":9,"popularity":6215,"codepoint":61482,"unsupported_families":[],"categories":["search"],"tags":["bulb","ceiling","hanging","inside","interior","lamp","light","lighting","pendent","room"],"sizes_px":[24]},{"name":"light_mode","version":4,"popularity":57325,"codepoint":58648,"unsupported_families":[],"categories":["device"],"tags":["bright","brightness","day","device","light","lighting","mode","morning","sky","sun","sunny"],"sizes_px":[20,24]},{"name":"lightbulb","version":18,"popularity":95089,"codepoint":57584,"unsupported_families":[],"categories":["action"],"tags":["alert","announcement","bulb","idea","incandescent","info","information","led","light","lightbulb","tip"],"sizes_px":[24]},{"name":"lightbulb_circle","version":1,"popularity":3317,"codepoint":60414,"unsupported_families":[],"categories":["action"],"tags":["alert","announcement","bulb","idea","incandescent","info","information","led","light","lightbulb","tip"],"sizes_px":[20,24]},{"name":"line_axis","version":2,"popularity":1336,"codepoint":60058,"unsupported_families":[],"categories":["editor"],"tags":["axis","dash","horizontal","line","stroke","vertical"],"sizes_px":[20,24]},{"name":"line_style","version":14,"popularity":3483,"codepoint":59673,"unsupported_families":[],"categories":["action"],"tags":["dash","dotted","line","rule","spacing","style"],"sizes_px":[24]},{"name":"line_weight","version":14,"popularity":4922,"codepoint":59674,"unsupported_families":[],"categories":["action"],"tags":["height","line","size","spacing","style","thickness","weight"],"sizes_px":[24]},{"name":"linear_scale","version":17,"popularity":8462,"codepoint":57952,"unsupported_families":[],"categories":["editor"],"tags":["app","application","components","design","interface","layout","linear","measure","menu","scale","screen","site","slider","ui","ux","web","website","window"],"sizes_px":[24]},{"name":"link","version":21,"popularity":80927,"codepoint":57687,"unsupported_families":[],"categories":["content"],"tags":["chain","clip","connection","link","linked","links","multimedia","url"],"sizes_px":[24]},{"name":"link_off","version":11,"popularity":14840,"codepoint":57711,"unsupported_families":[],"categories":["content"],"tags":["attached","chain","clip","connection","disabled","enabled","link","linked","links","multimedia","off","on","slash","url"],"sizes_px":[24]},{"name":"linked_camera","version":15,"popularity":2590,"codepoint":58424,"unsupported_families":[],"categories":["image"],"tags":["camera","connect","connection","lens","linked","network","photo","photography","picture","signal","signals","sync","wireless"],"sizes_px":[24]},{"name":"liquor","version":10,"popularity":8723,"codepoint":60000,"unsupported_families":[],"categories":["maps"],"tags":["alcohol","bar","bottle","club","cocktail","drink","food","liquor","party","store","wine"],"sizes_px":[20,24]},{"name":"list","version":18,"popularity":135909,"codepoint":59542,"unsupported_families":[],"categories":["action"],"tags":["file","format","index","list","menu","options"],"sizes_px":[24]},{"name":"list_alt","version":13,"popularity":51436,"codepoint":57582,"unsupported_families":[],"categories":["communication"],"tags":["alt","box","contained","form","format","lines","list","order","reorder","stacked","title"],"sizes_px":[24]},{"name":"live_help","version":15,"popularity":18169,"codepoint":57542,"unsupported_families":[],"categories":["communication"],"tags":["?","assistance","bubble","chat","comment","communicate","help","info","information","live","message","punctuation","question mark","recent","restore","speech","support","symbol"],"sizes_px":[24]},{"name":"live_tv","version":11,"popularity":18769,"codepoint":58937,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS","antennas hardware","chrome","desktop","device","iOS","live","mac","monitor","movie","play","stream","television","tv","web","window"],"sizes_px":[24]},{"name":"living","version":9,"popularity":3302,"codepoint":61483,"unsupported_families":[],"categories":["search"],"tags":["chair","comfort","couch","decoration","furniture","home","house","living","lounging","loveseat","room","seat","seating","sofa"],"sizes_px":[24]},{"name":"local_activity","version":19,"popularity":17446,"codepoint":58687,"unsupported_families":[],"categories":["maps"],"tags":["activity","event","event ticket","local","star","things","ticket"],"sizes_px":[24]},{"name":"local_airport","version":14,"popularity":8063,"codepoint":58685,"unsupported_families":[],"categories":["maps"],"tags":["air","airplane","airport","flight","plane","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"local_atm","version":12,"popularity":17865,"codepoint":58686,"unsupported_families":[],"categories":["maps"],"tags":["atm","bill","card","cart","cash","coin","commerce","credit","currency","dollars","local","money","online","pay","payment","shopping","symbol"],"sizes_px":[24]},{"name":"local_bar","version":12,"popularity":9761,"codepoint":58688,"unsupported_families":[],"categories":["maps"],"tags":["alcohol","bar","bottle","club","cocktail","drink","food","liquor","local","wine"],"sizes_px":[24]},{"name":"local_cafe","version":11,"popularity":16682,"codepoint":58689,"unsupported_families":[],"categories":["maps"],"tags":["bottle","cafe","coffee","cup","drink","food","restaurant","tea"],"sizes_px":[24]},{"name":"local_car_wash","version":12,"popularity":2437,"codepoint":58690,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","local","maps","transportation","travel","vehicle","wash"],"sizes_px":[24]},{"name":"local_convenience_store","version":16,"popularity":4031,"codepoint":58691,"unsupported_families":[],"categories":["maps"],"tags":["--","24","bill","building","business","card","cash","coin","commerce","company","convenience","credit","currency","dollars","local","maps","market","money","new","online","pay","payment","plus","shop","shopping","store","storefront","symbol"],"sizes_px":[24]},{"name":"local_dining","version":21,"popularity":7594,"codepoint":58710,"unsupported_families":[],"categories":["maps"],"tags":["dining","eat","food","fork","knife","local","meal","restaurant","spoon"],"sizes_px":[24]},{"name":"local_drink","version":12,"popularity":7113,"codepoint":58692,"unsupported_families":[],"categories":["maps"],"tags":["cup","drink","drop","droplet","liquid","local","park","water"],"sizes_px":[24]},{"name":"local_fire_department","version":15,"popularity":40637,"codepoint":61269,"unsupported_families":[],"categories":["maps"],"tags":["911","climate","department","fire","firefighter","flame","heat","home","hot","nest","thermostat"],"sizes_px":[20,24]},{"name":"local_florist","version":12,"popularity":11733,"codepoint":58693,"unsupported_families":[],"categories":["maps"],"tags":["florist","flower","local","shop"],"sizes_px":[24]},{"name":"local_gas_station","version":13,"popularity":12362,"codepoint":58694,"unsupported_families":[],"categories":["maps"],"tags":["auto","car","gas","local","oil","station","vehicle"],"sizes_px":[24]},{"name":"local_grocery_store","version":12,"popularity":13520,"codepoint":58695,"unsupported_families":[],"categories":["maps"],"tags":["grocery","market","shop","store"],"sizes_px":[24]},{"name":"local_hospital","version":12,"popularity":20017,"codepoint":58696,"unsupported_families":[],"categories":["maps"],"tags":["911","aid","cross","emergency","first","hospital","local","medicine"],"sizes_px":[24]},{"name":"local_hotel","version":13,"popularity":2422,"codepoint":58697,"unsupported_families":[],"categories":["maps"],"tags":["body","hotel","human","local","people","person","sleep","stay","travel","trip"],"sizes_px":[24]},{"name":"local_laundry_service","version":16,"popularity":7280,"codepoint":58698,"unsupported_families":[],"categories":["maps"],"tags":["cleaning","clothing","dry","dryer","hotel","laundry","local","service","washer"],"sizes_px":[24]},{"name":"local_library","version":12,"popularity":19155,"codepoint":58699,"unsupported_families":[],"categories":["maps"],"tags":["book","community learning","library","local","read"],"sizes_px":[24]},{"name":"local_mall","version":12,"popularity":27990,"codepoint":58700,"unsupported_families":[],"categories":["maps"],"tags":["bag","bill","building","business","buy","card","cart","cash","coin","commerce","credit","currency","dollars","handbag","local","mall","money","online","pay","payment","shop","shopping","store","storefront"],"sizes_px":[24]},{"name":"local_movies","version":12,"popularity":3486,"codepoint":58701,"unsupported_families":[],"categories":["maps"],"tags":[],"sizes_px":[24]},{"name":"local_offer","version":20,"popularity":59493,"codepoint":58702,"unsupported_families":[],"categories":["maps"],"tags":["deal","discount","offer","price","shop","shopping","store","tag"],"sizes_px":[24]},{"name":"local_parking","version":12,"popularity":11821,"codepoint":58703,"unsupported_families":[],"categories":["maps"],"tags":["alphabet","auto","car","character","font","garage","letters","local","park","parking","symbol","text","type","vehicle"],"sizes_px":[24]},{"name":"local_pharmacy","version":12,"popularity":5175,"codepoint":58704,"unsupported_families":[],"categories":["maps"],"tags":["911","aid","cross","emergency","first","hospital","local","medicine","pharmacy","places"],"sizes_px":[24]},{"name":"local_phone","version":17,"popularity":13571,"codepoint":58705,"unsupported_families":[],"categories":["maps"],"tags":["booth","call","communication","phone","telecommunication"],"sizes_px":[24]},{"name":"local_pizza","version":12,"popularity":6813,"codepoint":58706,"unsupported_families":[],"categories":["maps"],"tags":["drink","fastfood","food","local","meal","pizza"],"sizes_px":[24]},{"name":"local_play","version":12,"popularity":1537,"codepoint":58707,"unsupported_families":[],"categories":["maps"],"tags":[],"sizes_px":[24]},{"name":"local_police","version":13,"popularity":15411,"codepoint":61270,"unsupported_families":[],"categories":["maps"],"tags":["911","badge","law","local","officer","police","protect","protection","security","shield"],"sizes_px":[24]},{"name":"local_post_office","version":12,"popularity":11161,"codepoint":58708,"unsupported_families":[],"categories":["maps"],"tags":["delivery","email","envelop","letters","local","mail","message","office","package","parcel","post","postal","send","stamp"],"sizes_px":[24]},{"name":"local_printshop","version":17,"popularity":7059,"codepoint":58709,"unsupported_families":[],"categories":["maps"],"tags":["draft","fax","ink","local","machine","office","paper","print","printer","printshop","send"],"sizes_px":[24]},{"name":"local_see","version":16,"popularity":4589,"codepoint":58711,"unsupported_families":[],"categories":["maps"],"tags":["camera","lens","local","photo","photography","picture","see"],"sizes_px":[24]},{"name":"local_shipping","version":12,"popularity":215153,"codepoint":58712,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","delivery","letters","local","mail","maps","office","package","parcel","post","postal","send","shipping","shopping","stamp","transportation","truck","vehicle"],"sizes_px":[24]},{"name":"local_taxi","version":12,"popularity":7423,"codepoint":58713,"unsupported_families":[],"categories":["maps"],"tags":["automobile","cab","call","car","cars","direction","local","lyft","maps","public","taxi","transportation","uber","vehicle","yellow"],"sizes_px":[24]},{"name":"location_city","version":12,"popularity":29022,"codepoint":59377,"unsupported_families":[],"categories":["social"],"tags":["apartments","architecture","buildings","business","city","estate","home","landscape","location","place","real","residence","residential","shelter","town","urban"],"sizes_px":[24]},{"name":"location_disabled","version":12,"popularity":1295,"codepoint":57782,"unsupported_families":[],"categories":["device"],"tags":["destination","direction","disabled","enabled","location","maps","off","on","pin","place","pointer","slash","stop","tracking"],"sizes_px":[24]},{"name":"location_off","version":11,"popularity":3857,"codepoint":57543,"unsupported_families":[],"categories":["communication"],"tags":["destination","direction","location","maps","off","pin","place","room","stop"],"sizes_px":[24]},{"name":"location_on","version":15,"popularity":203754,"codepoint":57544,"unsupported_families":[],"categories":["communication"],"tags":["destination","direction","location","maps","on","pin","place","room","stop"],"sizes_px":[24]},{"name":"location_searching","version":12,"popularity":8176,"codepoint":57783,"unsupported_families":[],"categories":["device"],"tags":["destination","direction","location","maps","pin","place","pointer","searching","stop","tracking"],"sizes_px":[24]},{"name":"lock","version":18,"popularity":216417,"codepoint":59543,"unsupported_families":[],"categories":["action"],"tags":["lock","locked","password","privacy","private","protection","safety","secure","security"],"sizes_px":[24]},{"name":"lock_clock","version":11,"popularity":7973,"codepoint":61271,"unsupported_families":[],"categories":["action"],"tags":["clock","date","lock","locked","password","privacy","private","protection","safety","schedule","secure","security","time"],"sizes_px":[20,24]},{"name":"lock_open","version":16,"popularity":61459,"codepoint":59544,"unsupported_families":[],"categories":["action"],"tags":["lock","open","password","privacy","private","protection","safety","secure","security","unlocked"],"sizes_px":[24]},{"name":"lock_person","version":1,"popularity":2432,"codepoint":63731,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"lock_reset","version":1,"popularity":7907,"codepoint":60126,"unsupported_families":[],"categories":["action"],"tags":["around","inprogress","load","loading refresh","lock","locked","password","privacy","private","protection","renew","rotate","safety","secure","security","turn"],"sizes_px":[20,24]},{"name":"login","version":12,"popularity":128702,"codepoint":60023,"unsupported_families":[],"categories":["action"],"tags":["access","app","application","arrow","components","design","enter","in","interface","left","log","login","screen","sign","site","ui","ux","web","website"],"sizes_px":[20,24]},{"name":"logo_dev","version":2,"popularity":1892,"codepoint":60118,"unsupported_families":[],"categories":["image"],"tags":["dev","dev.to","logo"],"sizes_px":[20,24]},{"name":"logout","version":12,"popularity":251989,"codepoint":59834,"unsupported_families":[],"categories":["action"],"tags":["app","application","arrow","components","design","exit","interface","leave","log","login","logout","right","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"looks","version":13,"popularity":2610,"codepoint":58364,"unsupported_families":[],"categories":["image"],"tags":["circle","half","looks","rainbow"],"sizes_px":[24]},{"name":"looks_3","version":12,"popularity":8132,"codepoint":58363,"unsupported_families":[],"categories":["image"],"tags":["3","digit","looks","numbers","square","symbol"],"sizes_px":[24]},{"name":"looks_4","version":12,"popularity":4503,"codepoint":58365,"unsupported_families":[],"categories":["image"],"tags":["4","digit","looks","numbers","square","symbol"],"sizes_px":[24]},{"name":"looks_5","version":12,"popularity":3412,"codepoint":58366,"unsupported_families":[],"categories":["image"],"tags":["5","digit","looks","numbers","square","symbol"],"sizes_px":[24]},{"name":"looks_6","version":13,"popularity":2607,"codepoint":58367,"unsupported_families":[],"categories":["image"],"tags":["6","digit","looks","numbers","square","symbol"],"sizes_px":[24]},{"name":"looks_one","version":12,"popularity":17573,"codepoint":58368,"unsupported_families":[],"categories":["image"],"tags":["1","digit","looks","numbers","square","symbol"],"sizes_px":[24]},{"name":"looks_two","version":12,"popularity":9277,"codepoint":58369,"unsupported_families":[],"categories":["image"],"tags":["2","digit","looks","numbers","square","symbol"],"sizes_px":[24]},{"name":"loop","version":12,"popularity":19761,"codepoint":57384,"unsupported_families":[],"categories":["av"],"tags":["around","arrow","arrows","direction","inprogress","load","loading refresh","loop","music","navigation","renew","rotate","turn"],"sizes_px":[24]},{"name":"loupe","version":12,"popularity":5117,"codepoint":58370,"unsupported_families":[],"categories":["image"],"tags":["+","add","details","focus","glass","loupe","magnifying","new","plus","symbol"],"sizes_px":[24]},{"name":"low_priority","version":18,"popularity":7313,"codepoint":57709,"unsupported_families":[],"categories":["content"],"tags":["arrange","arrow","backward","bottom","list","low","move","order","priority"],"sizes_px":[24]},{"name":"loyalty","version":12,"popularity":22992,"codepoint":59546,"unsupported_families":[],"categories":["action"],"tags":["benefits","card","credit","heart","loyalty","membership","miles","points","program","subscription","tag","travel","trip"],"sizes_px":[24]},{"name":"lte_mobiledata","version":9,"popularity":1314,"codepoint":61484,"unsupported_families":[],"categories":["device"],"tags":["alphabet","character","data","font","internet","letters","lte","mobile","network","speed","symbol","text","type","wifi","wireless"],"sizes_px":[24]},{"name":"lte_plus_mobiledata","version":9,"popularity":1081,"codepoint":61485,"unsupported_families":[],"categories":["device"],"tags":["+","alphabet","character","data","font","internet","letters","lte","mobile","network","plus","speed","symbol","text","type","wifi","wireless"],"sizes_px":[24]},{"name":"luggage","version":7,"popularity":10656,"codepoint":62005,"unsupported_families":[],"categories":["social"],"tags":["airport","bag","baggage","carry","flight","hotel","luggage","on","suitcase","travel","trip"],"sizes_px":[24]},{"name":"lunch_dining","version":11,"popularity":19943,"codepoint":60001,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","dining","dinner","drink","fastfood","food","hamburger","lunch","meal"],"sizes_px":[20,24]},{"name":"lyrics","version":3,"popularity":1375,"codepoint":60427,"unsupported_families":[],"categories":["av"],"tags":["audio","bubble","chat","comment","communicate","feedback","key","lyrics","message","music","note","song","sound","speech","track"],"sizes_px":[20,24]},{"name":"macro_off","version":1,"popularity":310,"codepoint":63698,"unsupported_families":[],"categories":["device"],"tags":["camera","disabled","enabled","flower","garden","image","macro","off","offline","on","slash"],"sizes_px":[20,24]},{"name":"mail","version":16,"popularity":82349,"codepoint":57688,"unsupported_families":[],"categories":["content"],"tags":["email","envelop","letters","mail","message","send"],"sizes_px":[24]},{"name":"mail_lock","version":1,"popularity":1658,"codepoint":60426,"unsupported_families":[],"categories":["communication"],"tags":["email","envelop","letters","lock","locked","mail","message","password","privacy","private","protection","safety","secure","security","send"],"sizes_px":[20,24]},{"name":"mail_outline","version":12,"popularity":65285,"codepoint":57569,"unsupported_families":[],"categories":["communication"],"tags":["email","envelop","letters","mail","message","outline","send"],"sizes_px":[24]},{"name":"male","version":3,"popularity":13043,"codepoint":58766,"unsupported_families":[],"categories":["social"],"tags":["boy","gender","male","man","social","symbol"],"sizes_px":[20,24]},{"name":"man","version":2,"popularity":6572,"codepoint":58603,"unsupported_families":[],"categories":["social"],"tags":["boy","gender","male","man","social","symbol"],"sizes_px":[20,24]},{"name":"man_2","version":1,"popularity":835,"codepoint":63713,"unsupported_families":[],"categories":["social"],"tags":["boy","gender","male","man","social","symbol"],"sizes_px":[20,24]},{"name":"man_3","version":1,"popularity":440,"codepoint":63714,"unsupported_families":[],"categories":["social"],"tags":["abstract","boy","gender","male","man","social","symbol"],"sizes_px":[20,24]},{"name":"man_4","version":1,"popularity":507,"codepoint":63715,"unsupported_families":[],"categories":["social"],"tags":["abstract","boy","gender","male","man","social","symbol"],"sizes_px":[20,24]},{"name":"manage_accounts","version":10,"popularity":154672,"codepoint":61486,"unsupported_families":[],"categories":["action"],"tags":["accounts","change","details","face","gear","human","manage","options","people","person","profile","service","settings","user"],"sizes_px":[24]},{"name":"manage_history","version":1,"popularity":5269,"codepoint":60391,"unsupported_families":[],"categories":["action"],"tags":["application","arrow","back","backwards","change","clock","date","details","gear","history","options","refresh","renew","reverse","rotate","schedule","settings","time","turn"],"sizes_px":[20,24]},{"name":"manage_search","version":10,"popularity":43366,"codepoint":61487,"unsupported_families":[],"categories":["search"],"tags":["glass","history","magnifying","manage","search","text"],"sizes_px":[24]},{"name":"map","version":16,"popularity":57952,"codepoint":58715,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","location","map","maps","pin","place","route","stop","travel"],"sizes_px":[24]},{"name":"maps_home_work","version":10,"popularity":32305,"codepoint":61488,"unsupported_families":[],"categories":["navigation"],"tags":["building","home","house","maps","office","work"],"sizes_px":[24]},{"name":"maps_ugc","version":13,"popularity":7487,"codepoint":61272,"unsupported_families":[],"categories":["maps"],"tags":["+","add","bubble","comment","communicate","feedback","maps","message","new","plus","speech","symbol","ugc"],"sizes_px":[24]},{"name":"margin","version":11,"popularity":1913,"codepoint":59835,"unsupported_families":[],"categories":["editor"],"tags":["design","dots","layout","margin","padding","size","square"],"sizes_px":[24]},{"name":"mark_as_unread","version":10,"popularity":9523,"codepoint":59836,"unsupported_families":[],"categories":["action"],"tags":["as","envelop","letters","mail","mark","post","postal","read","receive","send","unread"],"sizes_px":[20,24]},{"name":"mark_chat_read","version":8,"popularity":5097,"codepoint":61835,"unsupported_families":[],"categories":["communication"],"tags":["approve","bubble","chat","check","comment","communicate","complete","done","mark","message","ok","read","select","sent","speech","tick","verified","yes"],"sizes_px":[20,24]},{"name":"mark_chat_unread","version":8,"popularity":7982,"codepoint":61833,"unsupported_families":[],"categories":["communication"],"tags":["alarm","alert","bubble","chat","circle","comment","communicate","dot","mark","message","notification","notifications","notify","reminder","speech","unread"],"sizes_px":[20,24]},{"name":"mark_email_read","version":8,"popularity":15774,"codepoint":61836,"unsupported_families":[],"categories":["communication"],"tags":["approve","check","complete","done","email","envelop","letters","mail","mark","message","note","ok","read","select","send","sent","tick","yes"],"sizes_px":[20,24]},{"name":"mark_email_unread","version":8,"popularity":11621,"codepoint":61834,"unsupported_families":[],"categories":["communication"],"tags":["check","circle","email","envelop","letters","mail","mark","message","note","notification","send","unread"],"sizes_px":[20,24]},{"name":"mark_unread_chat_alt","version":1,"popularity":2275,"codepoint":60317,"unsupported_families":[],"categories":["communication"],"tags":["alarm","alert","bubble","chat","circle","comment","communicate","dot","mark","message","notification","notifications","notify","reminder","speech","unread"],"sizes_px":[20,24]},{"name":"markunread","version":12,"popularity":11972,"codepoint":57689,"unsupported_families":[],"categories":["content"],"tags":["email","envelop","letters","mail","markunread","message","send","unread"],"sizes_px":[24]},{"name":"markunread_mailbox","version":12,"popularity":7244,"codepoint":59547,"unsupported_families":[],"categories":["action"],"tags":["deliver","envelop","letters","mail","mailbox","markunread","post","postal","postbox","receive","send","unread"],"sizes_px":[24]},{"name":"masks","version":7,"popularity":10781,"codepoint":61976,"unsupported_families":[],"categories":["social"],"tags":["air","cover","covid","face","hospital","masks","medical","pollution","protection","respirator","sick","social"],"sizes_px":[24]},{"name":"maximize","version":11,"popularity":12153,"codepoint":59696,"unsupported_families":[],"categories":["action"],"tags":["app","application","components","design","interface","line","maximize","screen","shape","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"media_bluetooth_off","version":10,"popularity":793,"codepoint":61489,"unsupported_families":[],"categories":["device"],"tags":["bluetooth","connect","connection","connectivity","device","disabled","enabled","media","music","note","off","offline","on","paring","signal","slash","symbol","wireless"],"sizes_px":[24]},{"name":"media_bluetooth_on","version":10,"popularity":1248,"codepoint":61490,"unsupported_families":[],"categories":["device"],"tags":["bluetooth","connect","connection","connectivity","device","disabled","enabled","media","music","note","off","on","online","paring","signal","slash","symbol","wireless"],"sizes_px":[24]},{"name":"mediation","version":15,"popularity":8425,"codepoint":61351,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","direction","dots","mediation","right"],"sizes_px":[24]},{"name":"medical_information","version":1,"popularity":4462,"codepoint":60397,"unsupported_families":[],"categories":["maps"],"tags":["badge","card","health","id","id card","identification","information","medical","services"],"sizes_px":[20,24]},{"name":"medical_services","version":12,"popularity":21943,"codepoint":61705,"unsupported_families":[],"categories":["maps"],"tags":["aid","bag","briefcase","emergency","first","kit","medical","medicine","services"],"sizes_px":[20,24]},{"name":"medication","version":10,"popularity":18406,"codepoint":61491,"unsupported_families":[],"categories":["device"],"tags":["doctor","drug","emergency","hospital","medication","medicine","pharmacy","pills","prescription"],"sizes_px":[24]},{"name":"medication_liquid","version":2,"popularity":2205,"codepoint":60039,"unsupported_families":[],"categories":["device"],"tags":["+","bottle","doctor","drug","health","hospital","liquid","medications","medicine","pharmacy","spoon","vessel"],"sizes_px":[20,24]},{"name":"meeting_room","version":17,"popularity":20852,"codepoint":60239,"unsupported_families":[],"categories":["places"],"tags":["building","door","doorway","entrance","home","house","interior","meeting","office","open","places","room"],"sizes_px":[24]},{"name":"memory","version":12,"popularity":17275,"codepoint":58146,"unsupported_families":[],"categories":["hardware"],"tags":["card","chip","digital","memory","micro","processor","sd","storage"],"sizes_px":[24]},{"name":"menu","version":13,"popularity":362972,"codepoint":58834,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","components","hamburger","interface","line","lines","menu","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"menu_book","version":12,"popularity":71544,"codepoint":59929,"unsupported_families":[],"categories":["maps"],"tags":["book","dining","food","meal","menu","restaurant"],"sizes_px":[24]},{"name":"menu_open","version":13,"popularity":43058,"codepoint":59837,"unsupported_families":[],"categories":["navigation"],"tags":["app","application","arrow","components","hamburger","interface","left","line","lines","menu","open","screen","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"merge","version":1,"popularity":3071,"codepoint":60312,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","merge","navigation","path","route","sign","traffic"],"sizes_px":[20,24]},{"name":"merge_type","version":13,"popularity":4800,"codepoint":57938,"unsupported_families":[],"categories":["editor"],"tags":["arrow","combine","direction","format","merge","text","type"],"sizes_px":[24]},{"name":"message","version":13,"popularity":26583,"codepoint":57545,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","feedback","message","speech"],"sizes_px":[24]},{"name":"mic","version":13,"popularity":61838,"codepoint":57385,"unsupported_families":[],"categories":["av"],"tags":["dictation","hear","hearing","keyboard","mic","microphone","noise","record","recorder","sound","speaker","voice"],"sizes_px":[24]},{"name":"mic_external_off","version":11,"popularity":816,"codepoint":61273,"unsupported_families":[],"categories":["image"],"tags":["audio","disabled","enabled","external","mic","microphone","off","on","slash","sound","voice"],"sizes_px":[24]},{"name":"mic_external_on","version":11,"popularity":3254,"codepoint":61274,"unsupported_families":[],"categories":["image"],"tags":["audio","disabled","enabled","external","mic","microphone","off","on","slash","sound","voice"],"sizes_px":[24]},{"name":"mic_none","version":12,"popularity":10601,"codepoint":57386,"unsupported_families":[],"categories":["av"],"tags":["dictation","hear","hearing","keyboard","mic","microphone","noise","record","recorder","sound","speaker","voice"],"sizes_px":[24]},{"name":"mic_off","version":14,"popularity":14993,"codepoint":57387,"unsupported_families":[],"categories":["av"],"tags":["audio","disabled","enabled","hear","hearing","mic","microphone","mute","noise","off","on","record","recording","slash","sound","voice"],"sizes_px":[24]},{"name":"microwave","version":6,"popularity":4101,"codepoint":61956,"unsupported_families":[],"categories":["places"],"tags":["appliance","cook","cooking","electric","heat","home","house","kitchen","machine","microwave"],"sizes_px":[24]},{"name":"military_tech","version":11,"popularity":26193,"codepoint":59967,"unsupported_families":[],"categories":["social"],"tags":["army","award","badge","honor","medal","merit","military","order","privilege","prize","rank","reward","ribbon","soldier","star","status","tech","trophy","win","winner"],"sizes_px":[20,24]},{"name":"minimize","version":11,"popularity":29217,"codepoint":59697,"unsupported_families":[],"categories":["action"],"tags":["app","application","components","design","interface","line","minimize","screen","shape","site","ui","ux","web","website"],"sizes_px":[24]},{"name":"minor_crash","version":1,"popularity":1286,"codepoint":60401,"unsupported_families":[],"categories":["maps"],"tags":["accident","auto","automobile","car","cars","collision","directions","maps","public","transportation","vehicle"],"sizes_px":[20,24]},{"name":"miscellaneous_services","version":12,"popularity":13585,"codepoint":61708,"unsupported_families":[],"categories":["maps"],"tags":[],"sizes_px":[20,24]},{"name":"missed_video_call","version":13,"popularity":1303,"codepoint":57459,"unsupported_families":[],"categories":["av"],"tags":["arrow","call","camera","film","filming","hardware","image","missed","motion","picture","record","video","videography"],"sizes_px":[24]},{"name":"mms","version":12,"popularity":2196,"codepoint":58904,"unsupported_families":[],"categories":["notification"],"tags":["bubble","chat","comment","communicate","feedback","image","landscape","message","mms","mountain","mountains","multimedia","photo","photography","picture","speech"],"sizes_px":[24]},{"name":"mobile_friendly","version":12,"popularity":4923,"codepoint":57856,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","approve","cell","check","complete","device","done","friendly","hardware","iOS","mark","mobile","ok","phone","select","tablet","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"mobile_off","version":12,"popularity":1283,"codepoint":57857,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","cell","device","disabled","enabled","hardware","iOS","mobile","off","on","phone","silence","slash","tablet"],"sizes_px":[24]},{"name":"mobile_screen_share","version":12,"popularity":2790,"codepoint":57575,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","cast","cell","device","hardware","iOS","mirror","mobile","monitor","phone","screen","screencast","share","stream","streaming","tablet","tv","wireless"],"sizes_px":[24]},{"name":"mobiledata_off","version":10,"popularity":2997,"codepoint":61492,"unsupported_families":[],"categories":["device"],"tags":["arrow","data","disabled","down","enabled","internet","mobile","network","off","on","slash","speed","up","wifi","wireless"],"sizes_px":[24]},{"name":"mode","version":10,"popularity":12625,"codepoint":61591,"unsupported_families":[],"categories":["editor"],"tags":["compose","create","draft","draw","edit","mode","pen","pencil","write"],"sizes_px":[24]},{"name":"mode_comment","version":12,"popularity":12061,"codepoint":57939,"unsupported_families":[],"categories":["editor"],"tags":["bubble","chat","comment","communicate","feedback","message","mode comment","speech"],"sizes_px":[24]},{"name":"mode_edit","version":11,"popularity":51090,"codepoint":57940,"unsupported_families":[],"categories":["editor"],"tags":["compose","create","draft","draw","edit","mode","pen","pencil","write"],"sizes_px":[24]},{"name":"mode_edit_outline","version":10,"popularity":10645,"codepoint":61493,"unsupported_families":[],"categories":["editor"],"tags":["compose","create","draft","draw","edit","mode","outline","pen","pencil","write"],"sizes_px":[20,24]},{"name":"mode_fan_off","version":1,"popularity":1160,"codepoint":60439,"unsupported_families":[],"categories":["home"],"tags":["air conditioner","cool","disabled","enabled","fan","nest","off","on","slash"],"sizes_px":[20,24]},{"name":"mode_night","version":10,"popularity":6506,"codepoint":61494,"unsupported_families":[],"categories":["device"],"tags":["dark","disturb","lunar","mode","moon","night","sleep"],"sizes_px":[24]},{"name":"mode_of_travel","version":2,"popularity":2455,"codepoint":59342,"unsupported_families":[],"categories":["maps"],"tags":["arrow","destination","direction","location","maps","mode","of","pin","place","stop","transportation","travel","trip"],"sizes_px":[20,24]},{"name":"mode_standby","version":9,"popularity":3534,"codepoint":61495,"unsupported_families":[],"categories":["device"],"tags":["disturb","mode","power","sleep","standby","target"],"sizes_px":[24]},{"name":"model_training","version":13,"popularity":13077,"codepoint":61647,"unsupported_families":[],"categories":["action"],"tags":["arrow","bulb","idea","inprogress","light","load","loading","model","refresh","renew","restore","reverse","rotate","training"],"sizes_px":[20,24]},{"name":"monetization_on","version":12,"popularity":48524,"codepoint":57955,"unsupported_families":[],"categories":["editor"],"tags":["bill","card","cash","circle","coin","commerce","cost","credit","currency","dollars","finance","monetization","money","on","online","pay","payment","shopping","symbol"],"sizes_px":[24]},{"name":"money","version":11,"popularity":11175,"codepoint":58749,"unsupported_families":[],"categories":["maps"],"tags":["100","bill","card","cash","coin","commerce","cost","credit","currency","digit","dollars","finance","money","numbers","online","pay","payment","price","shopping","symbol"],"sizes_px":[24]},{"name":"money_off","version":12,"popularity":7947,"codepoint":57948,"unsupported_families":[],"categories":["editor"],"tags":["bill","card","cart","cash","coin","commerce","credit","currency","disabled","dollars","enabled","money","off","on","online","pay","payment","shopping","slash","symbol"],"sizes_px":[24]},{"name":"money_off_csred","version":11,"popularity":3867,"codepoint":61496,"unsupported_families":[],"categories":["editor"],"tags":["bill","card","cart","cash","coin","commerce","credit","csred","currency","disabled","dollars","enabled","money","off","on","online","pay","payment","shopping","slash","symbol"],"sizes_px":[24]},{"name":"monitor","version":11,"popularity":5206,"codepoint":61275,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","device","display","hardware","iOS","mac","monitor","screen","web","window"],"sizes_px":[24]},{"name":"monitor_heart","version":2,"popularity":12468,"codepoint":60066,"unsupported_families":[],"categories":["device"],"tags":["baseline","device","ecc","ecg","fitness","health","heart","medical","monitor","track"],"sizes_px":[20,24]},{"name":"monitor_weight","version":10,"popularity":7162,"codepoint":61497,"unsupported_families":[],"categories":["device"],"tags":["body","device","diet","health","monitor","scale","smart","weight"],"sizes_px":[24]},{"name":"monochrome_photos","version":11,"popularity":1475,"codepoint":58371,"unsupported_families":[],"categories":["image"],"tags":["black","camera","image","monochrome","photo","photography","photos","picture","white"],"sizes_px":[24]},{"name":"mood","version":16,"popularity":15045,"codepoint":59378,"unsupported_families":[],"categories":["social"],"tags":["emoji","emotions","expressions","face","feelings","glad","happiness","happy","like","mood","person","pleased","smile","smiling","social","survey"],"sizes_px":[24]},{"name":"mood_bad","version":12,"popularity":9558,"codepoint":59379,"unsupported_families":[],"categories":["social"],"tags":["bad","disappointment","dislike","emoji","emotions","expressions","face","feelings","mood","person","rating","social","survey","unhappiness","unhappy","unpleased","unsmile","unsmiling"],"sizes_px":[24]},{"name":"moped","version":14,"popularity":3548,"codepoint":60200,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bike","car","cars","maps","scooter","transportation","vehicle","vespa"],"sizes_px":[20,24]},{"name":"more","version":13,"popularity":9976,"codepoint":58905,"unsupported_families":[],"categories":["notification"],"tags":["3","archive","bookmark","dots","etc","favorite","indent","label","more","remember","save","stamp","sticker","tab","tag","three"],"sizes_px":[24]},{"name":"more_horiz","version":13,"popularity":100332,"codepoint":58835,"unsupported_families":[],"categories":["navigation"],"tags":["3","DISABLE_IOS","app","application","components","disable_ios","dots","etc","horiz","horizontal","interface","ios","more","screen","site","three","ui","ux","web","website"],"sizes_px":[24]},{"name":"more_time","version":11,"popularity":12027,"codepoint":59997,"unsupported_families":[],"categories":["communication"],"tags":["+","add","clock","date","more","new","plus","schedule","symbol","time"],"sizes_px":[20,24]},{"name":"more_vert","version":19,"popularity":146210,"codepoint":58836,"unsupported_families":[],"categories":["navigation"],"tags":["3","DISABLE_IOS","android","app","application","components","disable_ios","dots","etc","interface","more","screen","site","three","ui","ux","vert","vertical","web","website"],"sizes_px":[24]},{"name":"mosque","version":2,"popularity":1998,"codepoint":60082,"unsupported_families":[],"categories":["maps"],"tags":["ideology","islam","islamic","masjid","muslim","religion","spiritual","worship"],"sizes_px":[20,24]},{"name":"motion_photos_auto","version":15,"popularity":2425,"codepoint":61498,"unsupported_families":[],"categories":["image"],"tags":["A","alphabet","animation","auto","automatic","character","circle","font","gif","letters","live","motion","photos","symbol","text","type","video"],"sizes_px":[24]},{"name":"motion_photos_off","version":14,"popularity":1187,"codepoint":59840,"unsupported_families":[],"categories":["image"],"tags":["animation","circle","disabled","enabled","motion","off","on","photos","slash","video"],"sizes_px":[24]},{"name":"motion_photos_on","version":18,"popularity":3390,"codepoint":59841,"unsupported_families":[],"categories":["image"],"tags":["animation","circle","disabled","enabled","motion","off","on","photos","play","slash","video"],"sizes_px":[20,24]},{"name":"motion_photos_pause","version":8,"popularity":1167,"codepoint":61991,"unsupported_families":[],"categories":["image"],"tags":["animation","circle","motion","pause","paused","photos","video"],"sizes_px":[20,24]},{"name":"motion_photos_paused","version":17,"popularity":1489,"codepoint":59842,"unsupported_families":[],"categories":["image"],"tags":["animation","circle","motion","pause","paused","photos","video"],"sizes_px":[24]},{"name":"mouse","version":12,"popularity":10785,"codepoint":58147,"unsupported_families":[],"categories":["hardware"],"tags":["click","computer","cursor","device","hardware","mouse","wireless"],"sizes_px":[24]},{"name":"move_down","version":2,"popularity":3025,"codepoint":60257,"unsupported_families":[],"categories":["editor"],"tags":["arrow","direction","down","jump","move","navigation","transfer"],"sizes_px":[20,24]},{"name":"move_to_inbox","version":15,"popularity":9265,"codepoint":57704,"unsupported_families":[],"categories":["content"],"tags":["archive","arrow","down","email","envelop","inbox","incoming","letters","mail","message","move to","send"],"sizes_px":[24]},{"name":"move_up","version":2,"popularity":3607,"codepoint":60260,"unsupported_families":[],"categories":["editor"],"tags":["arrow","direction","jump","move","navigation","transfer","up"],"sizes_px":[20,24]},{"name":"movie","version":12,"popularity":25484,"codepoint":57388,"unsupported_families":[],"categories":["av"],"tags":["cinema","film","media","movie","slate","video"],"sizes_px":[24]},{"name":"movie_creation","version":12,"popularity":4598,"codepoint":58372,"unsupported_families":[],"categories":["image"],"tags":["cinema","clapperboard","creation","film","movie","movies","slate","video"],"sizes_px":[24]},{"name":"movie_filter","version":13,"popularity":4372,"codepoint":58426,"unsupported_families":[],"categories":["image"],"tags":["ai","artificial","automatic","automation","clapperboard","creation","custom","film","filter","genai","intelligence","magic","movie","movies","slate","smart","spark","sparkle","star","stars","video"],"sizes_px":[24]},{"name":"moving","version":4,"popularity":8113,"codepoint":58625,"unsupported_families":[],"categories":["maps"],"tags":["arrow","direction","moving","navigation","travel","up"],"sizes_px":[20,24]},{"name":"mp","version":15,"popularity":739,"codepoint":59843,"unsupported_families":[],"categories":["image"],"tags":["alphabet","character","font","image","letters","megapixel","mp","photo","photography","pixels","quality","resolution","symbol","text","type"],"sizes_px":[24]},{"name":"multiline_chart","version":13,"popularity":2921,"codepoint":59103,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","line","measure","metrics","multiple","statistics","tracking"],"sizes_px":[24]},{"name":"multiple_stop","version":7,"popularity":5915,"codepoint":61881,"unsupported_families":[],"categories":["maps"],"tags":["arrows","dash","dashed","directions","dots","left","maps","multiple","navigation","right","stop"],"sizes_px":[24]},{"name":"museum","version":11,"popularity":5306,"codepoint":59958,"unsupported_families":[],"categories":["maps"],"tags":["architecture","attraction","building","estate","event","exhibition","explore","local","museum","places","real","see","shop","store","tour"],"sizes_px":[20,24]},{"name":"music_note","version":12,"popularity":27745,"codepoint":58373,"unsupported_families":[],"categories":["image"],"tags":["audio","audiotrack","key","music","note","sound","track"],"sizes_px":[24]},{"name":"music_off","version":12,"popularity":2873,"codepoint":58432,"unsupported_families":[],"categories":["image"],"tags":["audio","audiotrack","disabled","enabled","key","music","mute","note","off","on","slash","sound","track"],"sizes_px":[24]},{"name":"music_video","version":15,"popularity":2515,"codepoint":57443,"unsupported_families":[],"categories":["av"],"tags":["band","music","recording","screen","tv","video","watch"],"sizes_px":[24]},{"name":"my_location","version":12,"popularity":31609,"codepoint":58716,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","location","maps","navigation","pin","place","point","stop"],"sizes_px":[24]},{"name":"nat","version":11,"popularity":1420,"codepoint":61276,"unsupported_families":[],"categories":["communication"],"tags":["communication","nat"],"sizes_px":[20,24]},{"name":"nature","version":12,"popularity":3887,"codepoint":58374,"unsupported_families":[],"categories":["image"],"tags":["forest","nature","outdoor","outside","park","tree","wilderness"],"sizes_px":[24]},{"name":"nature_people","version":12,"popularity":6024,"codepoint":58375,"unsupported_families":[],"categories":["image"],"tags":["activity","body","forest","human","landscape","nature","outdoor","outside","park","people","person","tree","wilderness"],"sizes_px":[24]},{"name":"navigate_before","version":13,"popularity":36450,"codepoint":58376,"unsupported_families":[],"categories":["image"],"tags":["arrow","arrows","before","direction","left","navigate"],"sizes_px":[24]},{"name":"navigate_next","version":13,"popularity":118543,"codepoint":58377,"unsupported_families":[],"categories":["image"],"tags":["arrow","arrows","direction","navigate","next","right"],"sizes_px":[24]},{"name":"navigation","version":12,"popularity":12451,"codepoint":58717,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","location","maps","navigation","pin","place","point","stop"],"sizes_px":[24]},{"name":"near_me","version":12,"popularity":27241,"codepoint":58729,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","location","maps","me","navigation","near","pin","place","point","stop"],"sizes_px":[24]},{"name":"near_me_disabled","version":6,"popularity":1368,"codepoint":61935,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","disabled","enabled","location","maps","me","navigation","near","off","on","pin","place","point","slash"],"sizes_px":[24]},{"name":"nearby_error","version":10,"popularity":1770,"codepoint":61499,"unsupported_families":[],"categories":["device"],"tags":["!","alert","attention","caution","danger","error","exclamation","important","mark","nearby","notification","symbol","warning"],"sizes_px":[24]},{"name":"nearby_off","version":10,"popularity":645,"codepoint":61500,"unsupported_families":[],"categories":["device"],"tags":["disabled","enabled","nearby","off","on","slash"],"sizes_px":[24]},{"name":"nest_cam_wired_stand","version":1,"popularity":647,"codepoint":60438,"unsupported_families":[],"categories":["home"],"tags":["camera","film","filming","hardware","image","motion","nest","picture","stand","video","videography","wired"],"sizes_px":[20,24]},{"name":"network_cell","version":16,"popularity":2974,"codepoint":57785,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","phone","speed","wifi","wireless"],"sizes_px":[24]},{"name":"network_check","version":12,"popularity":5093,"codepoint":58944,"unsupported_families":[],"categories":["notification"],"tags":["check","connect","connection","internet","meter","network","signal","speed","tick","wifi","wireless"],"sizes_px":[24]},{"name":"network_locked","version":17,"popularity":1391,"codepoint":58906,"unsupported_families":[],"categories":["notification"],"tags":["alert","available","cellular","connection","data","error","internet","lock","locked","mobile","network","not","privacy","private","protection","restricted","safety","secure","security","service","signal","warning","wifi","wireless"],"sizes_px":[24]},{"name":"network_ping","version":1,"popularity":1489,"codepoint":60362,"unsupported_families":[],"categories":["action"],"tags":["alert","available","cellular","connection","data","internet","ip","mobile","network","ping","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"network_wifi","version":16,"popularity":5125,"codepoint":57786,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","phone","speed","wifi","wireless"],"sizes_px":[24]},{"name":"network_wifi_1_bar","version":1,"popularity":1338,"codepoint":60388,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","phone","speed","wifi","wireless"],"sizes_px":[20,24]},{"name":"network_wifi_2_bar","version":1,"popularity":1090,"codepoint":60374,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","phone","speed","wifi","wireless"],"sizes_px":[20,24]},{"name":"network_wifi_3_bar","version":1,"popularity":1276,"codepoint":60385,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","phone","speed","wifi","wireless"],"sizes_px":[20,24]},{"name":"new_label","version":3,"popularity":5905,"codepoint":58889,"unsupported_families":[],"categories":["action"],"tags":["+","add","archive","bookmark","favorite","label","library","new","plus","read","reading","remember","ribbon","save","symbol","tag"],"sizes_px":[20,24]},{"name":"new_releases","version":13,"popularity":23442,"codepoint":57393,"unsupported_families":[],"categories":["av"],"tags":["approve","award","check","checkmark","complete","done","new","notification","ok","release","releases","select","star","symbol","tick","verification","verified","warning","yes"],"sizes_px":[24]},{"name":"newspaper","version":1,"popularity":18242,"codepoint":60289,"unsupported_families":[],"categories":["file"],"tags":["article","data","doc","document","drive","file","folder","folders","magazine","media","news","newspaper","notes","page","paper","sheet","slide","text","writing"],"sizes_px":[20,24]},{"name":"next_plan","version":16,"popularity":7628,"codepoint":61277,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","next","plan","right"],"sizes_px":[20,24]},{"name":"next_week","version":14,"popularity":3713,"codepoint":57706,"unsupported_families":[],"categories":["content"],"tags":["arrow","bag","baggage","briefcase","business","case","next","suitcase","week"],"sizes_px":[24]},{"name":"nfc","version":12,"popularity":3634,"codepoint":57787,"unsupported_families":[],"categories":["device"],"tags":["communication","data","field","mobile","near","nfc","wireless"],"sizes_px":[24]},{"name":"night_shelter","version":6,"popularity":5064,"codepoint":61937,"unsupported_families":[],"categories":["places"],"tags":["architecture","bed","building","estate","homeless","house","night","place","real","shelter","sleep"],"sizes_px":[24]},{"name":"nightlife","version":10,"popularity":5196,"codepoint":60002,"unsupported_families":[],"categories":["maps"],"tags":["alcohol","bar","bottle","club","cocktail","dance","drink","food","glass","liquor","music","nightlife","note","wine"],"sizes_px":[20,24]},{"name":"nightlight","version":10,"popularity":10913,"codepoint":61501,"unsupported_families":[],"categories":["device"],"tags":["dark","disturb","mode","moon","night","nightlight","sleep"],"sizes_px":[24]},{"name":"nightlight_round","version":10,"popularity":19239,"codepoint":61278,"unsupported_families":[],"categories":["action"],"tags":["dark","half","light","mode","moon","night","nightlight","round"],"sizes_px":[24]},{"name":"nights_stay","version":12,"popularity":8462,"codepoint":59974,"unsupported_families":[],"categories":["social"],"tags":["climate","cloud","crescent","dark","lunar","mode","moon","nights","phases","silence","silent","sky","stay","time","weather"],"sizes_px":[20,24]},{"name":"no_accounts","version":10,"popularity":10697,"codepoint":61502,"unsupported_families":[],"categories":["action"],"tags":["account","accounts","avatar","disabled","enabled","face","human","no","off","offline","on","people","person","profile","slash","thumbnail","unavailable","unidentifiable","unknown","user"],"sizes_px":[24]},{"name":"no_adult_content","version":1,"popularity":676,"codepoint":63742,"unsupported_families":[],"categories":["social"],"tags":[],"sizes_px":[20,24]},{"name":"no_backpack","version":6,"popularity":865,"codepoint":62007,"unsupported_families":[],"categories":["places"],"tags":["accessory","backpack","bag","bookbag","knapsack","no","pack","travel"],"sizes_px":[24]},{"name":"no_cell","version":8,"popularity":1104,"codepoint":61860,"unsupported_families":[],"categories":["places"],"tags":["Android","OS","cell","device","disabled","enabled","hardware","iOS","mobile","no","off","on","phone","slash","tablet"],"sizes_px":[24]},{"name":"no_crash","version":1,"popularity":1642,"codepoint":60400,"unsupported_families":[],"categories":["maps"],"tags":["accident","auto","automobile","car","cars","check","collision","confirm","correct","crash","direction","done","enter","maps","mark","no","ok","okay","select","tick","transportation","vehicle","yes"],"sizes_px":[20,24]},{"name":"no_drinks","version":8,"popularity":1426,"codepoint":61861,"unsupported_families":[],"categories":["places"],"tags":["alcohol","beverage","bottle","cocktail","drink","drinks","food","liquor","no","wine"],"sizes_px":[24]},{"name":"no_encryption","version":17,"popularity":2973,"codepoint":58945,"unsupported_families":[],"categories":["notification"],"tags":["disabled","enabled","encryption","lock","no","off","on","password","safety","security","slash"],"sizes_px":[24]},{"name":"no_encryption_gmailerrorred","version":10,"popularity":1845,"codepoint":61503,"unsupported_families":[],"categories":["notification"],"tags":["disabled","enabled","encryption","error","gmail","lock","locked","no","off","on","slash"],"sizes_px":[24]},{"name":"no_flash","version":8,"popularity":946,"codepoint":61862,"unsupported_families":[],"categories":["places"],"tags":["bolt","camera","disabled","electric","enabled","energy","flash","image","instant","lightning","no","off","on","photo","photography","picture","slash","thunderbolt"],"sizes_px":[24]},{"name":"no_food","version":8,"popularity":2339,"codepoint":61863,"unsupported_families":[],"categories":["places"],"tags":["disabled","drink","enabled","fastfood","food","hamburger","meal","no","off","on","slash"],"sizes_px":[24]},{"name":"no_luggage","version":7,"popularity":1262,"codepoint":62011,"unsupported_families":[],"categories":["social"],"tags":["bag","baggage","carry","disabled","enabled","luggage","no","off","on","slash","suitcase","travel"],"sizes_px":[24]},{"name":"no_meals","version":7,"popularity":1672,"codepoint":61910,"unsupported_families":[],"categories":["maps"],"tags":["dining","disabled","eat","enabled","food","fork","knife","meal","meals","no","off","on","restaurant","slash","spoon","utensils"],"sizes_px":[24]},{"name":"no_meeting_room","version":11,"popularity":1688,"codepoint":60238,"unsupported_families":[],"categories":["places"],"tags":["building","disabled","door","doorway","enabled","entrance","home","house","interior","meeting","no","off","office","on","open","places","room","slash"],"sizes_px":[24]},{"name":"no_photography","version":8,"popularity":4329,"codepoint":61864,"unsupported_families":[],"categories":["places"],"tags":["camera","disabled","enabled","image","no","off","on","photo","photography","picture","slash"],"sizes_px":[24]},{"name":"no_sim","version":12,"popularity":1336,"codepoint":57548,"unsupported_families":[],"categories":["communication"],"tags":["camera","card","device","eject","insert","memory","no","phone","sim","storage"],"sizes_px":[24]},{"name":"no_stroller","version":9,"popularity":800,"codepoint":61871,"unsupported_families":[],"categories":["places"],"tags":["baby","care","carriage","child","children","disabled","enabled","infant","kid","newborn","no","off","on","parents","slash","stroller","toddler","young"],"sizes_px":[24]},{"name":"no_transfer","version":7,"popularity":1235,"codepoint":61909,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bus","car","cars","direction","disabled","enabled","maps","no","off","on","public","slash","transfer","transportation","vehicle"],"sizes_px":[24]},{"name":"noise_aware","version":2,"popularity":2080,"codepoint":60396,"unsupported_families":[],"categories":["action"],"tags":["audio","aware","cancellation","music","noise","note","sound"],"sizes_px":[20,24]},{"name":"noise_control_off","version":2,"popularity":5540,"codepoint":60403,"unsupported_families":[],"categories":["action"],"tags":["audio","aware","cancel","cancellation","control","disabled","enabled","music","noise","note","off","offline","on","slash","sound"],"sizes_px":[20,24]},{"name":"nordic_walking","version":4,"popularity":2750,"codepoint":58638,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","entertainment","exercise","hiking","hobby","human","nordic","people","person","social","sports","travel","walker","walking"],"sizes_px":[20,24]},{"name":"north","version":7,"popularity":17257,"codepoint":61920,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","maps","navigation","north","up"],"sizes_px":[24]},{"name":"north_east","version":7,"popularity":17664,"codepoint":61921,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","east","maps","navigation","noth","right","up"],"sizes_px":[24]},{"name":"north_west","version":7,"popularity":5287,"codepoint":61922,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","left","maps","navigation","north","up","west"],"sizes_px":[24]},{"name":"not_accessible","version":13,"popularity":2179,"codepoint":61694,"unsupported_families":[],"categories":["action"],"tags":["accessibility","accessible","body","handicap","help","human","not","person","wheelchair"],"sizes_px":[20,24]},{"name":"not_interested","version":12,"popularity":13580,"codepoint":57395,"unsupported_families":[],"categories":["av"],"tags":["cancel","clear","close","dislike","exit","interested","no","not","off","quit","remove","stop","x"],"sizes_px":[24]},{"name":"not_listed_location","version":18,"popularity":6523,"codepoint":58741,"unsupported_families":[],"categories":["maps"],"tags":["?","assistance","destination","direction","help","info","information","listed","location","maps","not","pin","place","punctuation","question mark","stop","support","symbol"],"sizes_px":[24]},{"name":"not_started","version":13,"popularity":9630,"codepoint":61649,"unsupported_families":[],"categories":["action"],"tags":["circle","media","not","pause","play","started","video"],"sizes_px":[20,24]},{"name":"note","version":12,"popularity":8027,"codepoint":57455,"unsupported_families":[],"categories":["av"],"tags":["bookmark","data","doc","document","drive","file","folder","folders","message","note","page","paper","plus","sheet","slide","symbol","writing"],"sizes_px":[24]},{"name":"note_add","version":13,"popularity":47845,"codepoint":59548,"unsupported_families":[],"categories":["action"],"tags":["+","add","data","doc","document","drive","file","folder","folders","new","note","page","paper","plus","sheet","slide","symbol","writing"],"sizes_px":[24]},{"name":"note_alt","version":10,"popularity":13581,"codepoint":61504,"unsupported_families":[],"categories":["device"],"tags":["alt","clipboard","document","file","memo","note","page","paper","writing"],"sizes_px":[24]},{"name":"notes","version":12,"popularity":16195,"codepoint":57964,"unsupported_families":[],"categories":["editor"],"tags":["comment","doc","document","note","notes","text","write","writing"],"sizes_px":[24]},{"name":"notification_add","version":5,"popularity":7308,"codepoint":58265,"unsupported_families":[],"categories":["social"],"tags":["+","active","add","alarm","alert","bell","chime","notification","notifications","notify","plus","reminder","ring","sound","symbol"],"sizes_px":[20,24]},{"name":"notification_important","version":12,"popularity":20072,"codepoint":57348,"unsupported_families":[],"categories":["alert"],"tags":["!","active","alarm","alert","attention","bell","caution","chime","danger","error","exclamation","important","mark","notification","notifications","notify","reminder","ring","sound","symbol","warning"],"sizes_px":[24]},{"name":"notifications","version":18,"popularity":201856,"codepoint":59380,"unsupported_families":[],"categories":["social"],"tags":["active","alarm","alert","bell","chime","notifications","notify","reminder","ring","sound"],"sizes_px":[24]},{"name":"notifications_active","version":13,"popularity":50264,"codepoint":59383,"unsupported_families":[],"categories":["social"],"tags":["active","alarm","alert","bell","chime","notifications","notify","reminder","ring","ringing","sound"],"sizes_px":[24]},{"name":"notifications_none","version":12,"popularity":33104,"codepoint":59381,"unsupported_families":[],"categories":["social"],"tags":["alarm","alert","bell","none","notifications","notify","reminder","sound"],"sizes_px":[24]},{"name":"notifications_off","version":12,"popularity":11062,"codepoint":59382,"unsupported_families":[],"categories":["social"],"tags":["active","alarm","alert","bell","chime","disabled","enabled","notifications","notify","off","offline","on","reminder","ring","slash","sound"],"sizes_px":[24]},{"name":"notifications_paused","version":12,"popularity":3410,"codepoint":59384,"unsupported_families":[],"categories":["social"],"tags":["active","alarm","alert","bell","chime","ignore","notifications","notify","paused","quiet","reminder","ring --- pause","sleep","snooze","sound","z","zzz"],"sizes_px":[24]},{"name":"numbers","version":2,"popularity":4356,"codepoint":60103,"unsupported_families":[],"categories":["editor"],"tags":["digit","numbers","symbol"],"sizes_px":[20,24]},{"name":"offline_bolt","version":18,"popularity":13769,"codepoint":59698,"unsupported_families":[],"categories":["action"],"tags":["bolt","circle","electric","energy","fast","instant","lightning","offline","thunderbolt"],"sizes_px":[24]},{"name":"offline_pin","version":18,"popularity":6355,"codepoint":59658,"unsupported_families":[],"categories":["action"],"tags":["approve","check","checkmark","circle","complete","done","mark","offline","ok","pin","select","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"offline_share","version":12,"popularity":3013,"codepoint":59845,"unsupported_families":[],"categories":["navigation"],"tags":["Android","OS","arrow","cell","connect","device","direction","hardware","iOS","link","mobile","multiple","offline","phone","right","share","tablet"],"sizes_px":[24]},{"name":"oil_barrel","version":1,"popularity":2210,"codepoint":60437,"unsupported_families":[],"categories":["home"],"tags":["barrel","droplet","gas","gasoline","nest","oil","water"],"sizes_px":[20,24]},{"name":"on_device_training","version":1,"popularity":1411,"codepoint":60413,"unsupported_families":[],"categories":["action"],"tags":["arrow","bulb","call","cell","contact","device","hardware","idea","inprogress","light","load","loading","mobile","model","phone","refresh","renew","restore","reverse","rotate","telephone","training"],"sizes_px":[20,24]},{"name":"ondemand_video","version":11,"popularity":16671,"codepoint":58938,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS","chrome","demand","desktop","device","hardware","iOS","mac","monitor","ondemand","play","television","tv","video","web","window"],"sizes_px":[24]},{"name":"online_prediction","version":12,"popularity":7761,"codepoint":61675,"unsupported_families":[],"categories":["action"],"tags":["bulb","connection","idea","light","network","online","prediction","signal","wireless"],"sizes_px":[20,24]},{"name":"opacity","version":15,"popularity":10801,"codepoint":59676,"unsupported_families":[],"categories":["action"],"tags":["color","drop","droplet","hue","invert","inverted","opacity","palette","tone","water"],"sizes_px":[24]},{"name":"open_in_browser","version":12,"popularity":10762,"codepoint":59549,"unsupported_families":[],"categories":["action"],"tags":["arrow","browser","in","open","site","up","web","website","window"],"sizes_px":[24]},{"name":"open_in_full","version":7,"popularity":39807,"codepoint":61902,"unsupported_families":[],"categories":["action"],"tags":["action","arrow","arrows","expand","full","grow","in","move","open"],"sizes_px":[24]},{"name":"open_in_new","version":21,"popularity":100700,"codepoint":59550,"unsupported_families":[],"categories":["action"],"tags":["app","application","arrow","box","components","in","interface","new","open","right","screen","site","ui","up","ux","web","website","window"],"sizes_px":[24]},{"name":"open_in_new_off","version":4,"popularity":2794,"codepoint":58614,"unsupported_families":[],"categories":["action"],"tags":["arrow","box","disabled","enabled","export","in","new","off","on","open","slash","window"],"sizes_px":[20,24]},{"name":"open_with","version":12,"popularity":16687,"codepoint":59551,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","direction","expand","move","open","pan","with"],"sizes_px":[24]},{"name":"other_houses","version":4,"popularity":12832,"codepoint":58764,"unsupported_families":[],"categories":["places"],"tags":["architecture","cottage","estate","home","house","houses","maps","other","place","real","residence","residential","stay","traveling"],"sizes_px":[20,24]},{"name":"outbound","version":8,"popularity":5300,"codepoint":57802,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","directional","outbound","right","up"],"sizes_px":[24]},{"name":"outbox","version":10,"popularity":6498,"codepoint":61279,"unsupported_families":[],"categories":["action"],"tags":["box","mail","outbox","send","sent"],"sizes_px":[20,24]},{"name":"outdoor_grill","version":11,"popularity":5692,"codepoint":59975,"unsupported_families":[],"categories":["social"],"tags":["barbecue","bbq","charcoal","cook","cooking","grill","home","house","outdoor","outside"],"sizes_px":[20,24]},{"name":"outlet","version":7,"popularity":6042,"codepoint":61908,"unsupported_families":[],"categories":["action"],"tags":["connect","connecter","electricity","outlet","plug","power"],"sizes_px":[24]},{"name":"outlined_flag","version":12,"popularity":15882,"codepoint":57710,"unsupported_families":[],"categories":["content"],"tags":["country","flag","goal","mark","nation","outlined","report","start"],"sizes_px":[24]},{"name":"output","version":1,"popularity":4565,"codepoint":60350,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"padding","version":11,"popularity":1408,"codepoint":59848,"unsupported_families":[],"categories":["editor"],"tags":["design","dots","layout","margin","padding","size","square"],"sizes_px":[24]},{"name":"pages","version":11,"popularity":3970,"codepoint":59385,"unsupported_families":[],"categories":["social"],"tags":["article","gplus","pages","paper","post","star"],"sizes_px":[24]},{"name":"pageview","version":12,"popularity":15490,"codepoint":59552,"unsupported_families":[],"categories":["action"],"tags":["doc","document","find","glass","magnifying","page","paper","search","view"],"sizes_px":[24]},{"name":"paid","version":9,"popularity":111468,"codepoint":61505,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cash","circle","coin","commerce","cost","credit","currency","dollars","finance","monetization","money","on","online","pay","payment","shopping","symbol"],"sizes_px":[24]},{"name":"palette","version":16,"popularity":33960,"codepoint":58378,"unsupported_families":[],"categories":["image"],"tags":["art","color","colors","filters","paint","palette"],"sizes_px":[20,24]},{"name":"pan_tool","version":14,"popularity":29942,"codepoint":59685,"unsupported_families":[],"categories":["action"],"tags":["fingers","gesture","hand","hands","human","move","pan","scan","stop","tool"],"sizes_px":[24]},{"name":"pan_tool_alt","version":1,"popularity":5505,"codepoint":60345,"unsupported_families":[],"categories":["action"],"tags":["fingers","gesture","hand","hands","human","move","pan","scan","stop","tool"],"sizes_px":[20,24]},{"name":"panorama","version":17,"popularity":4431,"codepoint":58379,"unsupported_families":[],"categories":["image"],"tags":["angle","image","mountain","mountains","panorama","photo","photography","picture","view","wide"],"sizes_px":[24]},{"name":"panorama_fish_eye","version":13,"popularity":9392,"codepoint":58380,"unsupported_families":[],"categories":["image"],"tags":["angle","circle","eye","fish","full","geometry","image","lens","moon","panorama","photo","photography","picture","wide"],"sizes_px":[24]},{"name":"panorama_horizontal","version":12,"popularity":1117,"codepoint":58381,"unsupported_families":[],"categories":["image"],"tags":["angle","horizontal","image","panorama","photo","photography","picture","wide"],"sizes_px":[24]},{"name":"panorama_horizontal_select","version":11,"popularity":859,"codepoint":61280,"unsupported_families":[],"categories":["image"],"tags":["angle","horizontal","image","panorama","photo","photography","picture","select","wide"],"sizes_px":[24]},{"name":"panorama_photosphere","version":11,"popularity":1295,"codepoint":59849,"unsupported_families":[],"categories":["image"],"tags":["angle","horizontal","image","panorama","photo","photography","photosphere","picture","wide"],"sizes_px":[24]},{"name":"panorama_photosphere_select","version":12,"popularity":842,"codepoint":59850,"unsupported_families":[],"categories":["image"],"tags":["angle","horizontal","image","panorama","photo","photography","photosphere","picture","select","wide"],"sizes_px":[24]},{"name":"panorama_vertical","version":13,"popularity":757,"codepoint":58382,"unsupported_families":[],"categories":["image"],"tags":["angle","image","panorama","photo","photography","picture","vertical","wide"],"sizes_px":[24]},{"name":"panorama_vertical_select","version":12,"popularity":828,"codepoint":61281,"unsupported_families":[],"categories":["image"],"tags":["angle","image","panorama","photo","photography","picture","select","vertical","wide"],"sizes_px":[24]},{"name":"panorama_wide_angle","version":14,"popularity":836,"codepoint":58383,"unsupported_families":[],"categories":["image"],"tags":["angle","image","panorama","photo","photography","picture","wide"],"sizes_px":[24]},{"name":"panorama_wide_angle_select","version":12,"popularity":1014,"codepoint":61282,"unsupported_families":[],"categories":["image"],"tags":["angle","image","panorama","photo","photography","picture","select","wide"],"sizes_px":[24]},{"name":"paragliding","version":4,"popularity":2573,"codepoint":58639,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","entertainment","exercise","fly","gliding","hobby","human","parachute","paragliding","people","person","sky","skydiving","social","sports","travel"],"sizes_px":[20,24]},{"name":"park","version":10,"popularity":18578,"codepoint":60003,"unsupported_families":[],"categories":["maps"],"tags":["attraction","fresh","local","nature","outside","park","plant","tree"],"sizes_px":[20,24]},{"name":"party_mode","version":12,"popularity":2471,"codepoint":59386,"unsupported_families":[],"categories":["social"],"tags":["camera","lens","mode","party","photo","photography","picture"],"sizes_px":[24]},{"name":"password","version":10,"popularity":38067,"codepoint":61506,"unsupported_families":[],"categories":["device"],"tags":["code","key","login","password","pin","security","star","unlock"],"sizes_px":[24]},{"name":"pattern","version":11,"popularity":3491,"codepoint":61507,"unsupported_families":[],"categories":["device"],"tags":["key","login","password","pattern","pin","security","star","unlock"],"sizes_px":[24]},{"name":"pause","version":16,"popularity":53384,"codepoint":57396,"unsupported_families":[],"categories":["av"],"tags":["control","controls","media","music","pause","video"],"sizes_px":[24]},{"name":"pause_circle","version":10,"popularity":15116,"codepoint":57762,"unsupported_families":[],"categories":["av"],"tags":["circle","control","controls","media","music","pause","video"],"sizes_px":[20,24]},{"name":"pause_circle_filled","version":15,"popularity":8189,"codepoint":57397,"unsupported_families":[],"categories":["av"],"tags":["circle","control","controls","filled","media","music","pause","video"],"sizes_px":[24]},{"name":"pause_circle_outline","version":19,"popularity":8133,"codepoint":57398,"unsupported_families":[],"categories":["av"],"tags":["circle","control","controls","media","music","outline","pause","video"],"sizes_px":[24]},{"name":"pause_presentation","version":12,"popularity":2030,"codepoint":57578,"unsupported_families":[],"categories":["communication"],"tags":["app","application desktop","device","pause","present","presentation","screen","share","site","slides","web","website","window","www"],"sizes_px":[24]},{"name":"payment","version":12,"popularity":45033,"codepoint":59553,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","money","online","pay","payment","price","shopping","symbol"],"sizes_px":[24]},{"name":"payments","version":13,"popularity":71978,"codepoint":61283,"unsupported_families":[],"categories":["navigation"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","layer","money","multiple","online","pay","payment","payments","price","shopping","symbol"],"sizes_px":[24]},{"name":"pedal_bike","version":14,"popularity":9252,"codepoint":60201,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bicycle","bike","car","cars","direction","human","maps","pedal","public","route","scooter","transportation","vehicle","vespa"],"sizes_px":[20,24]},{"name":"pending","version":17,"popularity":42967,"codepoint":61284,"unsupported_families":[],"categories":["action"],"tags":["circle","dots","loading","pending","progress","wait","waiting"],"sizes_px":[20,24]},{"name":"pending_actions","version":7,"popularity":46808,"codepoint":61883,"unsupported_families":[],"categories":["action"],"tags":["actions","clipboard","clock","date","doc","document","pending","remember","schedule","time"],"sizes_px":[24]},{"name":"pentagon","version":1,"popularity":1776,"codepoint":60240,"unsupported_families":[],"categories":["editor"],"tags":["five sides","pentagon","shape"],"sizes_px":[20,24]},{"name":"people","version":23,"popularity":133358,"codepoint":59387,"unsupported_families":[],"categories":["social"],"tags":["accounts","committee","face","family","friends","humans","network","people","persons","profiles","social","team","users"],"sizes_px":[24]},{"name":"people_alt","version":21,"popularity":44649,"codepoint":59937,"unsupported_families":[],"categories":["social"],"tags":["accounts","committee","face","family","friends","humans","network","people","persons","profiles","social","team","users"],"sizes_px":[20,24]},{"name":"people_outline","version":12,"popularity":14866,"codepoint":59388,"unsupported_families":[],"categories":["social"],"tags":["accounts","committee","face","family","friends","humans","network","outline","people","persons","profiles","social","team","users"],"sizes_px":[24]},{"name":"percent","version":1,"popularity":15031,"codepoint":60248,"unsupported_families":[],"categories":["action"],"tags":["math","numbers","percent","symbol"],"sizes_px":[20,24]},{"name":"perm_camera_mic","version":12,"popularity":2012,"codepoint":59554,"unsupported_families":[],"categories":["action"],"tags":["camera","image","microphone","min","perm","photo","photography","picture","speaker"],"sizes_px":[24]},{"name":"perm_contact_calendar","version":13,"popularity":17226,"codepoint":59555,"unsupported_families":[],"categories":["action"],"tags":["account","calendar","contact","date","face","human","information","people","perm","person","profile","schedule","time","user"],"sizes_px":[24]},{"name":"perm_data_setting","version":12,"popularity":3827,"codepoint":59556,"unsupported_families":[],"categories":["action"],"tags":["data","gear","info","information","perm","settings"],"sizes_px":[24]},{"name":"perm_device_information","version":13,"popularity":3450,"codepoint":59557,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","alert","announcement","device","hardware","i","iOS","info","information","mobile","perm","phone","tablet"],"sizes_px":[24]},{"name":"perm_identity","version":12,"popularity":91240,"codepoint":59558,"unsupported_families":[],"categories":["action"],"tags":["account","avatar","face","human","identity","people","perm","person","profile","thumbnail","user"],"sizes_px":[24]},{"name":"perm_media","version":15,"popularity":18142,"codepoint":59559,"unsupported_families":[],"categories":["action"],"tags":["collection","copy","data","doc","document","duplicate","file","folder","folders","image","landscape","media","mountain","mountains","perm","photo","photography","picture","stack","storage"],"sizes_px":[24]},{"name":"perm_phone_msg","version":12,"popularity":16281,"codepoint":59560,"unsupported_families":[],"categories":["action"],"tags":["bubble","call","cell","chat","comment","communicate","contact","device","message","msg","perm","phone","recording","speech","telephone","voice"],"sizes_px":[24]},{"name":"perm_scan_wifi","version":12,"popularity":3725,"codepoint":59561,"unsupported_families":[],"categories":["action"],"tags":["alert","announcement","connection","info","information","internet","network","perm","scan","service","signal","wifi","wireless"],"sizes_px":[24]},{"name":"person","version":17,"popularity":363674,"codepoint":59389,"unsupported_families":[],"categories":["social"],"tags":["account","face","human","people","person","profile","user"],"sizes_px":[24]},{"name":"person_2","version":1,"popularity":1912,"codepoint":63716,"unsupported_families":[],"categories":["social"],"tags":["account","face","human","people","person","profile","user"],"sizes_px":[20,24]},{"name":"person_3","version":1,"popularity":1278,"codepoint":63717,"unsupported_families":[],"categories":["social"],"tags":["account","face","human","people","person","profile","user"],"sizes_px":[20,24]},{"name":"person_4","version":1,"popularity":1336,"codepoint":63718,"unsupported_families":[],"categories":["social"],"tags":["account","face","human","people","person","profile","user"],"sizes_px":[20,24]},{"name":"person_add","version":16,"popularity":86617,"codepoint":59390,"unsupported_families":[],"categories":["social"],"tags":["+","account","add","avatar","face","human","new","people","person","plus","profile","symbol","user"],"sizes_px":[24]},{"name":"person_add_alt","version":11,"popularity":26335,"codepoint":59981,"unsupported_families":[],"categories":["social"],"tags":["+","account","add","face","human","people","person","plus","profile","user"],"sizes_px":[20,24]},{"name":"person_add_alt_1","version":13,"popularity":12479,"codepoint":61285,"unsupported_families":[],"categories":["social"],"tags":[],"sizes_px":[20,24]},{"name":"person_add_disabled","version":11,"popularity":2528,"codepoint":59851,"unsupported_families":[],"categories":["communication"],"tags":["+","account","add","disabled","enabled","face","human","new","off","offline","on","people","person","plus","profile","slash","symbol","user"],"sizes_px":[24]},{"name":"person_off","version":4,"popularity":13851,"codepoint":58640,"unsupported_families":[],"categories":["social"],"tags":["account","avatar","disabled","enabled","face","human","off","on","people","person","profile","slash","user"],"sizes_px":[20,24]},{"name":"person_outline","version":19,"popularity":95056,"codepoint":59391,"unsupported_families":[],"categories":["social"],"tags":["account","face","human","outline","people","person","profile","user"],"sizes_px":[24]},{"name":"person_pin","version":13,"popularity":17070,"codepoint":58714,"unsupported_families":[],"categories":["maps"],"tags":["account","avatar","destination","direction","face","human","location","maps","people","person","pin","place","profile","stop","user"],"sizes_px":[24]},{"name":"person_pin_circle","version":18,"popularity":11880,"codepoint":58730,"unsupported_families":[],"categories":["maps"],"tags":["account","circle","destination","direction","face","human","location","maps","people","person","pin","place","profile","stop","user"],"sizes_px":[24]},{"name":"person_remove","version":12,"popularity":17936,"codepoint":61286,"unsupported_families":[],"categories":["social"],"tags":["account","avatar","delete","face","human","minus","people","person","profile","remove","unfriend","user"],"sizes_px":[20,24]},{"name":"person_remove_alt_1","version":13,"popularity":3284,"codepoint":61287,"unsupported_families":[],"categories":["social"],"tags":[],"sizes_px":[20,24]},{"name":"person_search","version":12,"popularity":29632,"codepoint":61702,"unsupported_families":[],"categories":["communication"],"tags":["account","avatar","face","find","glass","human","look","magnify","magnifying","people","person","profile","search","user"],"sizes_px":[20,24]},{"name":"personal_injury","version":3,"popularity":5765,"codepoint":59098,"unsupported_families":[],"categories":["social"],"tags":["accident","aid","arm","bandage","body","broke","cast","fracture","health","human","injury","medical","patient","people","person","personal","sling","social"],"sizes_px":[20,24]},{"name":"personal_video","version":13,"popularity":4469,"codepoint":58939,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS","cam","chrome","desktop","device","hardware","iOS","mac","monitor","personal","television","tv","video","web","window"],"sizes_px":[24]},{"name":"pest_control","version":12,"popularity":4067,"codepoint":61690,"unsupported_families":[],"categories":["maps"],"tags":["bug","control","exterminator","insects","pest"],"sizes_px":[20,24]},{"name":"pest_control_rodent","version":12,"popularity":1426,"codepoint":61693,"unsupported_families":[],"categories":["maps"],"tags":["control","exterminator","mice","mouse","pest","rodent"],"sizes_px":[20,24]},{"name":"pets","version":12,"popularity":52337,"codepoint":59677,"unsupported_families":[],"categories":["action"],"tags":["animal","cat","dog","hand","paw","pet"],"sizes_px":[24]},{"name":"phishing","version":2,"popularity":1682,"codepoint":60119,"unsupported_families":[],"categories":["device"],"tags":["fish","fishing","fraud","hook","phishing","scam"],"sizes_px":[20,24]},{"name":"phone","version":12,"popularity":113346,"codepoint":57549,"unsupported_families":[],"categories":["communication"],"tags":["call","cell","contact","device","hardware","mobile","phone","telephone"],"sizes_px":[24]},{"name":"phone_android","version":12,"popularity":21698,"codepoint":58148,"unsupported_families":[],"categories":["hardware"],"tags":["OS","android","cell","device","hardware","iOS","mobile","phone","tablet"],"sizes_px":[24]},{"name":"phone_bluetooth_speaker","version":12,"popularity":1150,"codepoint":58907,"unsupported_families":[],"categories":["notification"],"tags":["bluetooth","call","cell","connect","connection","connectivity","contact","device","hardware","mobile","phone","signal","speaker","symbol","telephone","wireless"],"sizes_px":[24]},{"name":"phone_callback","version":13,"popularity":5081,"codepoint":58953,"unsupported_families":[],"categories":["notification"],"tags":["arrow","call","callback","cell","contact","device","down","hardware","mobile","phone","telephone"],"sizes_px":[24]},{"name":"phone_disabled","version":12,"popularity":4048,"codepoint":59852,"unsupported_families":[],"categories":["communication"],"tags":["call","cell","contact","device","disabled","enabled","hardware","mobile","off","offline","on","phone","slash","telephone"],"sizes_px":[24]},{"name":"phone_enabled","version":16,"popularity":8611,"codepoint":59853,"unsupported_families":[],"categories":["communication"],"tags":["call","cell","contact","device","enabled","hardware","mobile","phone","telephone"],"sizes_px":[24]},{"name":"phone_forwarded","version":13,"popularity":4705,"codepoint":58908,"unsupported_families":[],"categories":["notification"],"tags":["arrow","call","cell","contact","device","direction","forwarded","hardware","mobile","phone","right","telephone"],"sizes_px":[24]},{"name":"phone_iphone","version":12,"popularity":66182,"codepoint":58149,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","cell","device","hardware","iOS","iphone","mobile","phone","tablet"],"sizes_px":[24]},{"name":"phone_locked","version":19,"popularity":1406,"codepoint":58910,"unsupported_families":[],"categories":["notification"],"tags":["call","cell","contact","device","hardware","lock","locked","mobile","password","phone","privacy","private","protection","safety","secure","security","telephone"],"sizes_px":[20,24]},{"name":"phone_missed","version":13,"popularity":2861,"codepoint":58911,"unsupported_families":[],"categories":["notification"],"tags":["arrow","call","cell","contact","device","hardware","missed","mobile","phone","telephone"],"sizes_px":[24]},{"name":"phone_paused","version":13,"popularity":1566,"codepoint":58912,"unsupported_families":[],"categories":["notification"],"tags":["call","cell","contact","device","hardware","mobile","pause","paused","phone","telephone"],"sizes_px":[24]},{"name":"phonelink","version":12,"popularity":5409,"codepoint":58150,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","computer","connect","desktop","device","hardware","iOS","link","mac","mobile","phone","phonelink","sync","tablet","web","windows"],"sizes_px":[24]},{"name":"phonelink_erase","version":12,"popularity":2810,"codepoint":57563,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","cancel","cell","clear","close","connection","device","erase","exit","hardware","iOS","mobile","no","phone","phonelink","remove","stop","tablet","x"],"sizes_px":[24]},{"name":"phonelink_lock","version":15,"popularity":4243,"codepoint":57564,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","cell","connection","device","erase","hardware","iOS","lock","locked","mobile","password","phone","phonelink","privacy","private","protection","safety","secure","security","tablet"],"sizes_px":[24]},{"name":"phonelink_off","version":12,"popularity":1277,"codepoint":58151,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","chrome","computer","connect","desktop","device","disabled","enabled","hardware","iOS","link","mac","mobile","off","on","phone","phonelink","slash","sync","tablet","web","windows"],"sizes_px":[24]},{"name":"phonelink_ring","version":12,"popularity":4815,"codepoint":57565,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","cell","connection","data","device","hardware","iOS","mobile","network","phone","phonelink","ring","service","signal","tablet","wireless"],"sizes_px":[24]},{"name":"phonelink_setup","version":13,"popularity":3793,"codepoint":57566,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","call","chat","device","hardware","iOS","info","mobile","phone","phonelink","settings","setup","tablet","text"],"sizes_px":[24]},{"name":"photo","version":12,"popularity":5869,"codepoint":58384,"unsupported_families":[],"categories":["image"],"tags":["image","mountain","mountains","photo","photography","picture"],"sizes_px":[24]},{"name":"photo_album","version":14,"popularity":2741,"codepoint":58385,"unsupported_families":[],"categories":["image"],"tags":["album","archive","bookmark","image","label","library","mountain","mountains","photo","photography","picture","ribbon","save","tag"],"sizes_px":[20,24]},{"name":"photo_camera","version":18,"popularity":101366,"codepoint":58386,"unsupported_families":[],"categories":["image"],"tags":["camera","image","photo","photography","picture"],"sizes_px":[24]},{"name":"photo_camera_back","version":11,"popularity":1494,"codepoint":61288,"unsupported_families":[],"categories":["image"],"tags":["back","camera","image","landscape","mountain","mountains","photo","photography","picture","rear"],"sizes_px":[24]},{"name":"photo_camera_front","version":11,"popularity":3289,"codepoint":61289,"unsupported_families":[],"categories":["image"],"tags":["account","camera","face","front","human","image","people","person","photo","photography","picture","portrait","profile","user"],"sizes_px":[24]},{"name":"photo_filter","version":12,"popularity":2423,"codepoint":58427,"unsupported_families":[],"categories":["image"],"tags":["ai","artificial","automatic","automation","custom","filter","filters","genai","image","intelligence","magic","photo","photography","picture","smart","spark","sparkle","star"],"sizes_px":[24]},{"name":"photo_library","version":12,"popularity":13694,"codepoint":58387,"unsupported_families":[],"categories":["image"],"tags":["album","image","library","mountain","mountains","photo","photography","picture"],"sizes_px":[24]},{"name":"photo_size_select_actual","version":12,"popularity":3591,"codepoint":58418,"unsupported_families":[],"categories":["image"],"tags":["actual","dash","dashed","image","mountain","mountains","photo","photography","picture","select","size"],"sizes_px":[24]},{"name":"photo_size_select_large","version":12,"popularity":2203,"codepoint":58419,"unsupported_families":[],"categories":["image"],"tags":["adjust","album","dash","dashed","edit","editing","image","large","library","mountain","mountains","photo","photography","picture","select","size"],"sizes_px":[24]},{"name":"photo_size_select_small","version":12,"popularity":2317,"codepoint":58420,"unsupported_families":[],"categories":["image"],"tags":["adjust","album","edit","editing","image","large","library","mountain","mountains","photo","photography","picture","select","size","small"],"sizes_px":[24]},{"name":"php","version":1,"popularity":1644,"codepoint":60303,"unsupported_families":[],"categories":["action"],"tags":["alphabet","brackets","character","code","css","develop","developer","engineer","engineering","font","html","letters","php","platform","symbol","text","type"],"sizes_px":[20,24]},{"name":"piano","version":4,"popularity":4952,"codepoint":58657,"unsupported_families":[],"categories":["social"],"tags":["instrument","keyboard","keys","music","musical","piano","social"],"sizes_px":[20,24]},{"name":"piano_off","version":4,"popularity":1086,"codepoint":58656,"unsupported_families":[],"categories":["social"],"tags":["disabled","enabled","instrument","keyboard","keys","music","musical","off","on","piano","slash","social"],"sizes_px":[20,24]},{"name":"picture_as_pdf","version":12,"popularity":62284,"codepoint":58389,"unsupported_families":[],"categories":["image"],"tags":["alphabet","as","character","copy","document","duplicate","file","font","image","letters","multiple","pdf","photo","photography","picture","stack","symbol","text","type"],"sizes_px":[24]},{"name":"picture_in_picture","version":12,"popularity":4654,"codepoint":59562,"unsupported_families":[],"categories":["action"],"tags":["chat","crop","cropped","display","displays","layout","multitasking","overlap","photo","picture","pip","position","shape","sizes","talktrack"],"sizes_px":[24]},{"name":"picture_in_picture_alt","version":12,"popularity":3570,"codepoint":59665,"unsupported_families":[],"categories":["action"],"tags":["chat","crop","cropped","display","displays","layout","multitasking","overlap","photo","picture","pip","position","shape","sizes","talktrack"],"sizes_px":[24]},{"name":"pie_chart","version":11,"popularity":18260,"codepoint":59076,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","measure","metrics","pie","statistics","tracking"],"sizes_px":[24]},{"name":"pie_chart_outline","version":10,"popularity":3703,"codepoint":61508,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","measure","metrics","outline","pie","statistics","tracking"],"sizes_px":[24]},{"name":"pin","version":10,"popularity":18044,"codepoint":61509,"unsupported_families":[],"categories":["device"],"tags":["1","2","3","digit","key","login","logout","numbers","password","pattern","pin","security","star","symbol","unlock"],"sizes_px":[24]},{"name":"pin_drop","version":18,"popularity":18858,"codepoint":58718,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","drop","location","maps","navigation","pin","place","stop"],"sizes_px":[24]},{"name":"pin_end","version":3,"popularity":1895,"codepoint":59239,"unsupported_families":[],"categories":["action"],"tags":["action","arrow","dot","end","pin"],"sizes_px":[20,24]},{"name":"pin_invoke","version":3,"popularity":2119,"codepoint":59235,"unsupported_families":[],"categories":["action"],"tags":["action","arrow","dot","invoke","pin"],"sizes_px":[20,24]},{"name":"pinch","version":1,"popularity":2087,"codepoint":60216,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","compress","direction","finger","grasp","hand","navigation","nip","pinch","squeeze","tweak"],"sizes_px":[20,24]},{"name":"pivot_table_chart","version":11,"popularity":4114,"codepoint":59854,"unsupported_families":[],"categories":["navigation"],"tags":["analytics","arrow","arrows","bar","bars","chart","data","diagram","direction","drive","edit","editing","graph","grid","infographic","measure","metrics","pivot","rotate","sheet","statistics","table","tracking"],"sizes_px":[24]},{"name":"pix","version":2,"popularity":5076,"codepoint":60067,"unsupported_families":[],"categories":["social"],"tags":["bill","brazil","card","cash","commerce","credit","currency","finance","money","payment"],"sizes_px":[20,24]},{"name":"place","version":19,"popularity":149307,"codepoint":58719,"unsupported_families":[],"categories":["maps"],"tags":["destination","direction","location","maps","navigation","pin","place","point","stop"],"sizes_px":[24]},{"name":"plagiarism","version":11,"popularity":9509,"codepoint":59994,"unsupported_families":[],"categories":["action"],"tags":["doc","document","find","glass","look","magnifying","page","paper","plagiarism","search","see"],"sizes_px":[20,24]},{"name":"play_arrow","version":16,"popularity":151714,"codepoint":57399,"unsupported_families":[],"categories":["av"],"tags":["app","application","arrow","back","components","control","controls","direction","forward","interface","media","music","navigation","play","right","screen","site","triangle","ui","ux","video","web","website"],"sizes_px":[24]},{"name":"play_circle","version":9,"popularity":66042,"codepoint":57796,"unsupported_families":[],"categories":["av"],"tags":["arrow","circle","control","controls","media","music","play","video"],"sizes_px":[20,24]},{"name":"play_circle_filled","version":14,"popularity":77347,"codepoint":57400,"unsupported_families":[],"categories":["av"],"tags":["arrow","circle","control","controls","media","music","play","video"],"sizes_px":[24]},{"name":"play_circle_outline","version":19,"popularity":44162,"codepoint":57401,"unsupported_families":[],"categories":["av"],"tags":["arrow","circle","control","controls","media","music","outline","play","video"],"sizes_px":[24]},{"name":"play_disabled","version":10,"popularity":1517,"codepoint":61290,"unsupported_families":[],"categories":["av"],"tags":["control","controls","disabled","enabled","media","music","off","on","play","slash","video"],"sizes_px":[24]},{"name":"play_for_work","version":12,"popularity":5623,"codepoint":59654,"unsupported_families":[],"categories":["action"],"tags":["arrow","circle","down","google","half","play","work"],"sizes_px":[24]},{"name":"play_lesson","version":10,"popularity":3271,"codepoint":61511,"unsupported_families":[],"categories":["device"],"tags":["audio","book","bookmark","digital","ebook","lesson","multimedia","play","play lesson","read","reading","ribbon"],"sizes_px":[24]},{"name":"playlist_add","version":16,"popularity":23311,"codepoint":57403,"unsupported_families":[],"categories":["av"],"tags":["+","add","collection","list","music","new","playlist","plus","symbol"],"sizes_px":[20,24]},{"name":"playlist_add_check","version":17,"popularity":17174,"codepoint":57445,"unsupported_families":[],"categories":["av"],"tags":["add","approve","check","collection","complete","done","list","mark","music","ok","playlist","select","tick","validate","verified","yes"],"sizes_px":[20,24]},{"name":"playlist_add_check_circle","version":2,"popularity":4438,"codepoint":59366,"unsupported_families":[],"categories":["av"],"tags":["add","album","artist","audio","cd","check","circle","collection","list","mark","music","playlist","record","sound","track"],"sizes_px":[20,24]},{"name":"playlist_add_circle","version":2,"popularity":2558,"codepoint":59365,"unsupported_families":[],"categories":["av"],"tags":["add","album","artist","audio","cd","check","circle","collection","list","mark","music","playlist","record","sound","track"],"sizes_px":[20,24]},{"name":"playlist_play","version":14,"popularity":7338,"codepoint":57439,"unsupported_families":[],"categories":["av"],"tags":["arrow","collection","list","music","play","playlist"],"sizes_px":[20,24]},{"name":"playlist_remove","version":1,"popularity":4135,"codepoint":60288,"unsupported_families":[],"categories":["av"],"tags":["-","collection","list","minus","music","playlist","remove"],"sizes_px":[20,24]},{"name":"plumbing","version":12,"popularity":4487,"codepoint":61703,"unsupported_families":[],"categories":["maps"],"tags":["build","construction","fix","handyman","plumbing","repair","tools","wrench"],"sizes_px":[20,24]},{"name":"plus_one","version":17,"popularity":5381,"codepoint":59392,"unsupported_families":[],"categories":["social"],"tags":["1","add","digit","increase","numbers","one","plus","symbol"],"sizes_px":[24]},{"name":"podcasts","version":9,"popularity":11138,"codepoint":61512,"unsupported_families":[],"categories":["search"],"tags":["broadcast","casting","network","podcasts","signal","transmitting","wireless"],"sizes_px":[24]},{"name":"point_of_sale","version":8,"popularity":16563,"codepoint":61822,"unsupported_families":[],"categories":["hardware"],"tags":["checkout","cost","machine","merchant","money","of","pay","payment","point","pos","retail","sale","system","transaction"],"sizes_px":[20,24]},{"name":"policy","version":12,"popularity":21741,"codepoint":59927,"unsupported_families":[],"categories":["content"],"tags":["certified","find","glass","legal","look","magnify","magnifying","policy","privacy","private","protect","protection","search","security","see","shield","verified"],"sizes_px":[20,24]},{"name":"poll","version":13,"popularity":16950,"codepoint":59393,"unsupported_families":[],"categories":["social"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","measure","metrics","poll","statistics","survey","tracking","vote"],"sizes_px":[24]},{"name":"polyline","version":1,"popularity":2658,"codepoint":60347,"unsupported_families":[],"categories":["editor"],"tags":["compose","connect","connection","create","design","draw","line","node","polyline","vector"],"sizes_px":[20,24]},{"name":"polymer","version":12,"popularity":4682,"codepoint":59563,"unsupported_families":[],"categories":["action"],"tags":["emblem","logo","mark","polymer"],"sizes_px":[24]},{"name":"pool","version":12,"popularity":9462,"codepoint":60232,"unsupported_families":[],"categories":["places"],"tags":["athlete","athletic","beach","body","entertainment","exercise","hobby","human","ocean","people","person","places","pool","sea","sports","swim","swimming","water"],"sizes_px":[24]},{"name":"portable_wifi_off","version":12,"popularity":1743,"codepoint":57550,"unsupported_families":[],"categories":["communication"],"tags":["connection","data","disabled","enabled","internet","network","off","offline","on","portable","service","signal","slash","wifi","wireless"],"sizes_px":[24]},{"name":"portrait","version":12,"popularity":12828,"codepoint":58390,"unsupported_families":[],"categories":["image"],"tags":["account","face","human","people","person","photo","picture","portrait","profile","user"],"sizes_px":[24]},{"name":"post_add","version":11,"popularity":39523,"codepoint":59936,"unsupported_families":[],"categories":["editor"],"tags":["+","add","data","doc","document","drive","file","folder","folders","page","paper","plus","post","sheet","slide","text","writing"],"sizes_px":[20,24]},{"name":"power","version":12,"popularity":9576,"codepoint":58940,"unsupported_families":[],"categories":["notification"],"tags":["charge","cord","electric","electrical","outlet","plug","power"],"sizes_px":[24]},{"name":"power_input","version":12,"popularity":1445,"codepoint":58166,"unsupported_families":[],"categories":["hardware"],"tags":["input","lines","power","supply"],"sizes_px":[24]},{"name":"power_off","version":12,"popularity":4647,"codepoint":58950,"unsupported_families":[],"categories":["notification"],"tags":["charge","cord","disabled","electric","electrical","enabled","off","on","outlet","plug","power","slash"],"sizes_px":[24]},{"name":"power_settings_new","version":12,"popularity":55241,"codepoint":59564,"unsupported_families":[],"categories":["action"],"tags":["info","information","off","on","power","save","settings","shutdown"],"sizes_px":[24]},{"name":"precision_manufacturing","version":10,"popularity":28175,"codepoint":61513,"unsupported_families":[],"categories":["social"],"tags":["arm","automatic","chain","conveyor","crane","factory","industry","machinery","manufacturing","mechanical","precision","production","repairing","robot","supply","warehouse"],"sizes_px":[20,24]},{"name":"pregnant_woman","version":14,"popularity":7481,"codepoint":59678,"unsupported_families":[],"categories":["action"],"tags":["baby","birth","body","female","human","lady","maternity","mom","mother","people","person","pregnant","women"],"sizes_px":[24]},{"name":"present_to_all","version":11,"popularity":5174,"codepoint":57567,"unsupported_families":[],"categories":["communication"],"tags":["all","arrow","present","presentation","screen","share","site","slides","to","web","website"],"sizes_px":[24]},{"name":"preview","version":7,"popularity":38011,"codepoint":61893,"unsupported_families":[],"categories":["action"],"tags":["design","eye","layout","preview","reveal","screen","see","show","site","view","web","website","window","www"],"sizes_px":[24]},{"name":"price_change","version":10,"popularity":15740,"codepoint":61514,"unsupported_families":[],"categories":["device"],"tags":["arrows","bill","card","cash","change","coin","commerce","cost","credit","currency","dollars","down","finance","money","online","pay","payment","price","shopping","symbol","up"],"sizes_px":[24]},{"name":"price_check","version":10,"popularity":19231,"codepoint":61515,"unsupported_families":[],"categories":["device"],"tags":["approve","bill","card","cash","check","coin","commerce","complete","cost","credit","currency","dollars","done","finance","mark","money","ok","online","pay","payment","price","select","shopping","symbol","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"print","version":16,"popularity":67599,"codepoint":59565,"unsupported_families":[],"categories":["action"],"tags":["draft","fax","ink","machine","office","paper","print","printer","send"],"sizes_px":[24]},{"name":"print_disabled","version":12,"popularity":2185,"codepoint":59855,"unsupported_families":[],"categories":["communication"],"tags":["disabled","enabled","off","on","paper","print","printer","slash"],"sizes_px":[24]},{"name":"priority_high","version":19,"popularity":41948,"codepoint":58949,"unsupported_families":[],"categories":["notification"],"tags":["!","alert","attention","caution","danger","error","exclamation","high","important","mark","notification","symbol","warning"],"sizes_px":[24]},{"name":"privacy_tip","version":12,"popularity":19542,"codepoint":61660,"unsupported_families":[],"categories":["action"],"tags":["alert","announcement","assistance","certified","details","help","i","info","information","privacy","private","protect","protection","security","service","shield","support","tip","verified"],"sizes_px":[20,24]},{"name":"private_connectivity","version":5,"popularity":3173,"codepoint":59204,"unsupported_families":[],"categories":["action"],"tags":["connectivity","lock","locked","password","privacy","private","protection","safety","secure","security"],"sizes_px":[20,24]},{"name":"production_quantity_limits","version":7,"popularity":13782,"codepoint":57809,"unsupported_families":[],"categories":["action"],"tags":["!","alert","attention","bill","card","cart","cash","caution","coin","commerce","credit","currency","danger","dollars","error","exclamation","important","limits","mark","money","notification","online","pay","payment","production","quantity","shopping","symbol","warning"],"sizes_px":[24]},{"name":"propane","version":1,"popularity":764,"codepoint":60436,"unsupported_families":[],"categories":["home"],"tags":["gas","nest","propane"],"sizes_px":[20,24]},{"name":"propane_tank","version":1,"popularity":1306,"codepoint":60435,"unsupported_families":[],"categories":["home"],"tags":["bbq","gas","grill","nest","propane","tank"],"sizes_px":[20,24]},{"name":"psychology","version":11,"popularity":37408,"codepoint":59978,"unsupported_families":[],"categories":["social"],"tags":["behavior","body","brain","cognitive","function","gear","head","human","intellectual","mental","mind","people","person","preferences","psychiatric","psychology","science","settings","social","therapy","thinking","thoughts"],"sizes_px":[20,24]},{"name":"psychology_alt","version":1,"popularity":4515,"codepoint":63722,"unsupported_families":[],"categories":["social"],"tags":["?","assistance","behavior","body","brain","cognitive","function","gear","head","help","human","info","information","intellectual","mental","mind","people","person","preferences","psychiatric","psychology","punctuation","question mark","science","settings","social","support","symbol","therapy","thinking","thoughts"],"sizes_px":[20,24]},{"name":"public","version":13,"popularity":85653,"codepoint":59403,"unsupported_families":[],"categories":["social"],"tags":["earth","global","globe","map","network","planet","public","social","space","web","world"],"sizes_px":[24]},{"name":"public_off","version":8,"popularity":3555,"codepoint":61898,"unsupported_families":[],"categories":["social"],"tags":["disabled","earth","enabled","global","globe","map","network","off","on","planet","public","slash","social","space","web","world"],"sizes_px":[24]},{"name":"publish","version":12,"popularity":14278,"codepoint":57941,"unsupported_families":[],"categories":["editor"],"tags":["arrow","cloud","file","import","publish","up","upload"],"sizes_px":[24]},{"name":"published_with_changes","version":6,"popularity":37572,"codepoint":62002,"unsupported_families":[],"categories":["action"],"tags":["approve","arrow","arrows","changes","check","complete","done","inprogress","load","loading","mark","ok","published","refresh","renew","replace","rotate","select","tick","validate","verified","with","yes"],"sizes_px":[24]},{"name":"punch_clock","version":2,"popularity":2063,"codepoint":60072,"unsupported_families":[],"categories":["device"],"tags":["clock","date","punch","schedule","time","timer","timesheet"],"sizes_px":[20,24]},{"name":"push_pin","version":13,"popularity":41785,"codepoint":61709,"unsupported_families":[],"categories":["content"],"tags":["location","marker","pin","place","push","remember","save"],"sizes_px":[20,24]},{"name":"qr_code","version":12,"popularity":29068,"codepoint":61291,"unsupported_families":[],"categories":["communication"],"tags":["barcode","camera","code","media","product","qr","quick","response","smartphone","url","urls"],"sizes_px":[20,24]},{"name":"qr_code_2","version":6,"popularity":28111,"codepoint":57354,"unsupported_families":[],"categories":["communication"],"tags":["barcode","camera","code","media","product","qr","quick","response","smartphone","url","urls"],"sizes_px":[24]},{"name":"qr_code_scanner","version":7,"popularity":49369,"codepoint":61958,"unsupported_families":[],"categories":["communication"],"tags":["barcode","camera","code","media","product","qr","quick","response","scanner","smartphone","url","urls"],"sizes_px":[24]},{"name":"query_builder","version":13,"popularity":18144,"codepoint":59566,"unsupported_families":[],"categories":["action"],"tags":["builder","clock","date","query","schedule","time"],"sizes_px":[24]},{"name":"query_stats","version":4,"popularity":23185,"codepoint":58620,"unsupported_families":[],"categories":["editor"],"tags":["analytics","chart","data","diagram","find","glass","graph","infographic","line","look","magnify","magnifying","measure","metrics","query","search","see","statistics","stats","tracking"],"sizes_px":[20,24]},{"name":"question_answer","version":12,"popularity":109260,"codepoint":59567,"unsupported_families":[],"categories":["action"],"tags":["answer","bubble","chat","comment","communicate","conversation","feedback","message","question","speech","talk"],"sizes_px":[24]},{"name":"question_mark","version":1,"popularity":29306,"codepoint":60299,"unsupported_families":[],"categories":["action"],"tags":["?","assistance","help","info","information","punctuation","question mark","support","symbol"],"sizes_px":[20,24]},{"name":"queue","version":12,"popularity":7275,"codepoint":57404,"unsupported_families":[],"categories":["av"],"tags":["add","collection","layers","list","multiple","music","playlist","queue","stack","stream","video"],"sizes_px":[24]},{"name":"queue_music","version":18,"popularity":8527,"codepoint":57405,"unsupported_families":[],"categories":["av"],"tags":["collection","list","music","playlist","queue"],"sizes_px":[20,24]},{"name":"queue_play_next","version":14,"popularity":2448,"codepoint":57446,"unsupported_families":[],"categories":["av"],"tags":["+","add","arrow","desktop","device","display","hardware","monitor","new","next","play","plus","queue","screen","stream","symbol","tv"],"sizes_px":[24]},{"name":"quickreply","version":12,"popularity":5121,"codepoint":61292,"unsupported_families":[],"categories":["action"],"tags":["bolt","bubble","chat","comment","communicate","electric","energy","fast","instant","lightning","message","quick","quickreply","reply","speech","thunderbolt"],"sizes_px":[20,24]},{"name":"quiz","version":10,"popularity":29979,"codepoint":61516,"unsupported_families":[],"categories":["device"],"tags":["?","assistance","faq","help","info","information","punctuation","question mark","quiz","support","symbol","test"],"sizes_px":[24]},{"name":"r_mobiledata","version":9,"popularity":769,"codepoint":61517,"unsupported_families":[],"categories":["device"],"tags":["alphabet","character","data","font","letters","mobile","r","symbol","text","type"],"sizes_px":[24]},{"name":"radar","version":10,"popularity":7548,"codepoint":61518,"unsupported_families":[],"categories":["device"],"tags":["detect","military","near","network","position","radar","scan"],"sizes_px":[24]},{"name":"radio","version":12,"popularity":7112,"codepoint":57406,"unsupported_families":[],"categories":["av"],"tags":["antenna","audio","device","frequency","hardware","listen","media","music","player","radio","signal","tune"],"sizes_px":[24]},{"name":"radio_button_checked","version":13,"popularity":66460,"codepoint":59447,"unsupported_families":[],"categories":["toggle"],"tags":["app","application","bullet","button","checked","circle","components","design","form","interface","off","on","point","radio","record","screen","select","selected","site","toggle","ui","ux","web","website"],"sizes_px":[24]},{"name":"radio_button_unchecked","version":13,"popularity":83879,"codepoint":59446,"unsupported_families":[],"categories":["toggle"],"tags":["bullet","button","circle","deselected","form","off","on","point","radio","record","select","toggle","unchecked"],"sizes_px":[24]},{"name":"railway_alert","version":10,"popularity":1631,"codepoint":59857,"unsupported_families":[],"categories":["maps"],"tags":["!","alert","attention","automobile","bike","car","cars","caution","danger","direction","error","exclamation","important","maps","mark","notification","public","railway","scooter","subway","symbol","train","transportation","vehicle","vespa","warning"],"sizes_px":[24]},{"name":"ramen_dining","version":10,"popularity":7228,"codepoint":60004,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","dining","dinner","drink","fastfood","food","lunch","meal","noodles","ramen","restaurant"],"sizes_px":[20,24]},{"name":"ramp_left","version":1,"popularity":526,"codepoint":60316,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","left","maps","navigation","path","ramp","route","sign","traffic"],"sizes_px":[20,24]},{"name":"ramp_right","version":1,"popularity":500,"codepoint":60310,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","ramp","right","route","sign","traffic"],"sizes_px":[20,24]},{"name":"rate_review","version":11,"popularity":16593,"codepoint":58720,"unsupported_families":[],"categories":["maps"],"tags":["comment","feedback","pen","pencil","rate","review","stars","write"],"sizes_px":[24]},{"name":"raw_off","version":10,"popularity":657,"codepoint":61519,"unsupported_families":[],"categories":["image"],"tags":["alphabet","character","disabled","enabled","font","image","letters","off","on","original","photo","photography","raw","slash","symbol","text","type"],"sizes_px":[24]},{"name":"raw_on","version":10,"popularity":1193,"codepoint":61520,"unsupported_families":[],"categories":["image"],"tags":["alphabet","character","disabled","enabled","font","image","letters","off","on","original","photo","photography","raw","slash","symbol","text","type"],"sizes_px":[24]},{"name":"read_more","version":13,"popularity":12442,"codepoint":61293,"unsupported_families":[],"categories":["communication"],"tags":["arrow","more","read","text"],"sizes_px":[20,24]},{"name":"real_estate_agent","version":3,"popularity":11151,"codepoint":59194,"unsupported_families":[],"categories":["social"],"tags":["agent","architecture","broker","estate","hand","home","house","loan","mortgage","property","real","residence","residential","sales","social"],"sizes_px":[20,24]},{"name":"receipt","version":12,"popularity":55894,"codepoint":59568,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[24]},{"name":"receipt_long","version":12,"popularity":60526,"codepoint":61294,"unsupported_families":[],"categories":["image"],"tags":["bill","check","document","list","long","paper","paperwork","receipt","record","store","transaction"],"sizes_px":[24]},{"name":"recent_actors","version":12,"popularity":9346,"codepoint":57407,"unsupported_families":[],"categories":["av"],"tags":["account","actors","avatar","card","cards","carousel","face","human","layers","list","people","person","profile","recent","thumbnail","user"],"sizes_px":[24]},{"name":"recommend","version":14,"popularity":15278,"codepoint":59858,"unsupported_families":[],"categories":["social"],"tags":["approved","circle","confirm","favorite","gesture","hand","like","reaction","recommend","social","support","thumbs","up","well"],"sizes_px":[24]},{"name":"record_voice_over","version":12,"popularity":26978,"codepoint":59679,"unsupported_families":[],"categories":["action"],"tags":["account","dictation","face","human","over","people","person","profile","record","recording","speak","speaking","speech","transcript","user","voice"],"sizes_px":[24]},{"name":"rectangle","version":1,"popularity":3162,"codepoint":60244,"unsupported_families":[],"categories":["editor"],"tags":["four sides","parallelograms","polygons","quadrilaterals","recangle","shape"],"sizes_px":[20,24]},{"name":"recycling","version":4,"popularity":14303,"codepoint":59232,"unsupported_families":[],"categories":["social"],"tags":["bio","eco","green","loop","recyclable","recycle","recycling","rotate","sustainability","sustainable","trash"],"sizes_px":[20,24]},{"name":"redeem","version":12,"popularity":23099,"codepoint":59569,"unsupported_families":[],"categories":["action"],"tags":["bill","card","cart","cash","certificate","coin","commerce","credit","currency","dollars","gift","giftcard","money","online","pay","payment","present","redeem","shopping"],"sizes_px":[24]},{"name":"redo","version":13,"popularity":17639,"codepoint":57690,"unsupported_families":[],"categories":["content"],"tags":["arrow","backward","forward","next","redo","repeat","rotate","undo"],"sizes_px":[24]},{"name":"reduce_capacity","version":6,"popularity":6444,"codepoint":61980,"unsupported_families":[],"categories":["social"],"tags":["arrow","body","capacity","covid","decrease","down","human","people","person","reduce","social"],"sizes_px":[24]},{"name":"refresh","version":16,"popularity":95218,"codepoint":58837,"unsupported_families":[],"categories":["navigation"],"tags":["around","arrow","arrows","direction","inprogress","load","loading refresh","navigation","refresh","renew","right","rotate","turn"],"sizes_px":[24]},{"name":"remember_me","version":10,"popularity":3621,"codepoint":61521,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","avatar","device","hardware","human","iOS","identity","me","mobile","people","person","phone","profile","remember","tablet","user"],"sizes_px":[24]},{"name":"remove","version":16,"popularity":76526,"codepoint":57691,"unsupported_families":[],"categories":["content"],"tags":["can","delete","minus","negative","remove","substract","trash"],"sizes_px":[24]},{"name":"remove_circle","version":19,"popularity":42073,"codepoint":57692,"unsupported_families":[],"categories":["content"],"tags":["block","can","circle","delete","minus","negative","remove","substract","trash"],"sizes_px":[24]},{"name":"remove_circle_outline","version":12,"popularity":53015,"codepoint":57693,"unsupported_families":[],"categories":["content"],"tags":["block","can","circle","delete","minus","negative","outline","remove","substract","trash"],"sizes_px":[24]},{"name":"remove_done","version":10,"popularity":6921,"codepoint":59859,"unsupported_families":[],"categories":["action"],"tags":["approve","check","complete","disabled","done","enabled","finished","mark","multiple","off","ok","on","remove","select","slash","tick","yes"],"sizes_px":[24]},{"name":"remove_from_queue","version":13,"popularity":1587,"codepoint":57447,"unsupported_families":[],"categories":["av"],"tags":["desktop","device","display","from","hardware","monitor","queue","remove","screen","stream"],"sizes_px":[24]},{"name":"remove_moderator","version":11,"popularity":3493,"codepoint":59860,"unsupported_families":[],"categories":["social"],"tags":["certified","disabled","enabled","moderator","off","on","privacy","private","protect","protection","remove","security","shield","slash","verified"],"sizes_px":[24]},{"name":"remove_red_eye","version":12,"popularity":31954,"codepoint":58391,"unsupported_families":[],"categories":["image"],"tags":["eye","iris","look","looking","preview","red","remove","see","sight","vision"],"sizes_px":[24]},{"name":"remove_road","version":1,"popularity":968,"codepoint":60412,"unsupported_families":[],"categories":["maps"],"tags":["-","cancel","clear","close","destination","direction","exit","highway","maps","minus","new","no","remove","road","stop","street","symbol","traffic","x"],"sizes_px":[20,24]},{"name":"remove_shopping_cart","version":12,"popularity":8371,"codepoint":59688,"unsupported_families":[],"categories":["action"],"tags":["card","cart","cash","checkout","coin","commerce","credit","currency","delete","dollars","minus","online","pay","payment","remember","remove","ribbon","save","shopping","subtract"],"sizes_px":[24]},{"name":"reorder","version":16,"popularity":47010,"codepoint":59646,"unsupported_families":[],"categories":["action"],"tags":["format","lines","list","order","reorder","stacked"],"sizes_px":[24]},{"name":"repartition","version":1,"popularity":988,"codepoint":63720,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","data","partition","refresh","renew","repartition","restore","table"],"sizes_px":[20,24]},{"name":"repeat","version":12,"popularity":14234,"codepoint":57408,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","control","controls","loop","media","music","repeat","video"],"sizes_px":[24]},{"name":"repeat_on","version":12,"popularity":3071,"codepoint":59862,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","control","controls","loop","media","music","on","repeat","video"],"sizes_px":[24]},{"name":"repeat_one","version":12,"popularity":3536,"codepoint":57409,"unsupported_families":[],"categories":["av"],"tags":["1","arrow","arrows","control","controls","digit","loop","media","music","numbers","one","repeat","symbol","video"],"sizes_px":[24]},{"name":"repeat_one_on","version":12,"popularity":1690,"codepoint":59863,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","control","controls","digit","loop","media","music","numbers","on","one","repeat","symbol","video"],"sizes_px":[24]},{"name":"replay","version":13,"popularity":33312,"codepoint":57410,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","control","controls","music","refresh","renew","repeat","replay","video"],"sizes_px":[24]},{"name":"replay_10","version":14,"popularity":6245,"codepoint":57433,"unsupported_families":[],"categories":["av"],"tags":["10","arrow","arrows","control","controls","digit","music","numbers","refresh","renew","repeat","replay","symbol","ten","video"],"sizes_px":[24]},{"name":"replay_30","version":14,"popularity":3117,"codepoint":57434,"unsupported_families":[],"categories":["av"],"tags":["30","arrow","arrows","control","controls","digit","music","numbers","refresh","renew","repeat","replay","symbol","thirty","video"],"sizes_px":[24]},{"name":"replay_5","version":14,"popularity":2421,"codepoint":57435,"unsupported_families":[],"categories":["av"],"tags":["5","arrow","arrows","control","controls","digit","five","music","numbers","refresh","renew","repeat","replay","symbol","video"],"sizes_px":[24]},{"name":"replay_circle_filled","version":12,"popularity":7091,"codepoint":59864,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","circle","control","controls","filled","music","refresh","renew","repeat","replay","video"],"sizes_px":[24]},{"name":"reply","version":20,"popularity":44143,"codepoint":57694,"unsupported_families":[],"categories":["content"],"tags":["arrow","backward","left","mail","message","reply","send","share"],"sizes_px":[24]},{"name":"reply_all","version":17,"popularity":7906,"codepoint":57695,"unsupported_families":[],"categories":["content"],"tags":["all","arrow","backward","group","left","mail","message","multiple","reply","send","share"],"sizes_px":[24]},{"name":"report","version":18,"popularity":30367,"codepoint":57696,"unsupported_families":[],"categories":["content"],"tags":["!","alert","attention","caution","danger","error","exclamation","important","mark","notification","octagon","report","symbol","warning"],"sizes_px":[24]},{"name":"report_gmailerrorred","version":11,"popularity":13616,"codepoint":61522,"unsupported_families":[],"categories":["content"],"tags":["!","alert","attention","caution","danger","error","exclamation","gmail","gmailerrorred","important","mark","notification","octagon","report","symbol","warning"],"sizes_px":[24]},{"name":"report_off","version":12,"popularity":2284,"codepoint":57712,"unsupported_families":[],"categories":["content"],"tags":["!","alert","attention","caution","danger","disabled","enabled","error","exclamation","important","mark","notification","octagon","off","offline","on","report","slash","symbol","warning"],"sizes_px":[24]},{"name":"report_problem","version":18,"popularity":82316,"codepoint":59570,"unsupported_families":[],"categories":["action"],"tags":["!","alert","attention","caution","danger","error","exclamation","feedback","important","mark","notification","problem","report","symbol","triangle","warning"],"sizes_px":[24]},{"name":"request_page","version":7,"popularity":7181,"codepoint":61996,"unsupported_families":[],"categories":["action"],"tags":["data","doc","document","drive","file","folder","folders","page","paper","request","sheet","slide","writing"],"sizes_px":[24]},{"name":"request_quote","version":7,"popularity":31302,"codepoint":61878,"unsupported_families":[],"categories":["file"],"tags":["bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","money","online","pay","payment","price","quote","request","shopping","symbol"],"sizes_px":[24]},{"name":"reset_tv","version":10,"popularity":1967,"codepoint":59865,"unsupported_families":[],"categories":["device"],"tags":["arrow","arrows","device","hardware","monitor","reset","television","tv"],"sizes_px":[24]},{"name":"restart_alt","version":10,"popularity":53680,"codepoint":61523,"unsupported_families":[],"categories":["device"],"tags":["alt","around","arrow","inprogress","load","loading refresh","reboot","renew","repeat","reset","restart"],"sizes_px":[24]},{"name":"restaurant","version":16,"popularity":44537,"codepoint":58732,"unsupported_families":[],"categories":["maps"],"tags":["cafe","cafeteria","cutlery","diner","dining","dinner","eat","eating","food","fork","knife","local","meal","restaurant","spoon","utensils"],"sizes_px":[24]},{"name":"restaurant_menu","version":12,"popularity":24091,"codepoint":58721,"unsupported_families":[],"categories":["maps"],"tags":["book","dining","eat","food","fork","knife","local","meal","menu","restaurant","spoon"],"sizes_px":[24]},{"name":"restore","version":12,"popularity":22192,"codepoint":59571,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backwards","clock","date","device","history","home","nest","refresh","renew","reset","restore","reverse","rotate","schedule","time","turn"],"sizes_px":[24]},{"name":"restore_from_trash","version":12,"popularity":7454,"codepoint":59704,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backwards","clock","date","history","refresh","renew","restore","reverse","rotate","schedule","time","turn"],"sizes_px":[24]},{"name":"restore_page","version":12,"popularity":5791,"codepoint":59689,"unsupported_families":[],"categories":["action"],"tags":["arrow","data","doc","file","page","paper","refresh","restore","rotate","sheet","storage"],"sizes_px":[24]},{"name":"reviews","version":10,"popularity":15066,"codepoint":61524,"unsupported_families":[],"categories":["device"],"tags":["bubble","chat","comment","communicate","feedback","message","rate","rating","recommendation","reviews","speech"],"sizes_px":[24]},{"name":"rice_bowl","version":6,"popularity":2497,"codepoint":61941,"unsupported_families":[],"categories":["places"],"tags":["bowl","dinner","food","lunch","meal","restaurant","rice"],"sizes_px":[24]},{"name":"ring_volume","version":13,"popularity":4004,"codepoint":57553,"unsupported_families":[],"categories":["communication"],"tags":["call","calling","cell","contact","device","hardware","incoming","mobile","phone","ring","ringer","sound","telephone","volume"],"sizes_px":[24]},{"name":"rocket","version":1,"popularity":8677,"codepoint":60325,"unsupported_families":[],"categories":["action"],"tags":["astronaut","fast","quick","rocket","space","spaceship","speed"],"sizes_px":[20,24]},{"name":"rocket_launch","version":1,"popularity":29422,"codepoint":60315,"unsupported_families":[],"categories":["action"],"tags":["astronaut","fast","launch","quick","rocket","space","spaceship","speed","takeoff"],"sizes_px":[20,24]},{"name":"roller_shades","version":1,"popularity":933,"codepoint":60434,"unsupported_families":[],"categories":["home"],"tags":["blinds","cover","curtains","nest","open","roller","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"roller_shades_closed","version":1,"popularity":724,"codepoint":60433,"unsupported_families":[],"categories":["home"],"tags":["blinds","closed","cover","curtains","nest","roller","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"roller_skating","version":1,"popularity":958,"codepoint":60365,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","entertainment","exercise","hobby","roller","shoe","skate","skates","skating","social","sports","travel"],"sizes_px":[20,24]},{"name":"roofing","version":6,"popularity":7849,"codepoint":61953,"unsupported_families":[],"categories":["places"],"tags":["architecture","building","chimney","construction","estate","home","house","real","residence","residential","roof","roofing","service","shelter"],"sizes_px":[24]},{"name":"room","version":19,"popularity":58440,"codepoint":59572,"unsupported_families":[],"categories":["action"],"tags":["destination","direction","location","maps","pin","place","room","stop"],"sizes_px":[24]},{"name":"room_preferences","version":7,"popularity":7287,"codepoint":61880,"unsupported_families":[],"categories":["places"],"tags":["building","door","doorway","entrance","gear","home","house","interior","office","open","preferences","room","settings"],"sizes_px":[24]},{"name":"room_service","version":11,"popularity":7891,"codepoint":60233,"unsupported_families":[],"categories":["places"],"tags":["alert","bell","delivery","hotel","notify","room","service"],"sizes_px":[24]},{"name":"rotate_90_degrees_ccw","version":12,"popularity":3345,"codepoint":58392,"unsupported_families":[],"categories":["image"],"tags":["90","arrow","arrows","ccw","degrees","direction","edit","editing","image","photo","rotate","turn"],"sizes_px":[24]},{"name":"rotate_90_degrees_cw","version":2,"popularity":2301,"codepoint":60075,"unsupported_families":[],"categories":["image"],"tags":["90","arrow","arrows","ccw","degrees","direction","edit","editing","image","photo","rotate","turn"],"sizes_px":[20,24]},{"name":"rotate_left","version":13,"popularity":7372,"codepoint":58393,"unsupported_families":[],"categories":["image"],"tags":["around","arrow","dash","dashed","direction","inprogress","left","load","loading refresh","renew","rotate","turn"],"sizes_px":[24]},{"name":"rotate_right","version":13,"popularity":10546,"codepoint":58394,"unsupported_families":[],"categories":["image"],"tags":["around","arrow","direction","inprogress","load","loading refresh","renew","right","rotate","turn"],"sizes_px":[24]},{"name":"roundabout_left","version":1,"popularity":676,"codepoint":60313,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","left","maps","navigation","path","roundabout","route","sign","traffic"],"sizes_px":[20,24]},{"name":"roundabout_right","version":1,"popularity":898,"codepoint":60323,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","right","roundabout","route","sign","traffic"],"sizes_px":[20,24]},{"name":"rounded_corner","version":15,"popularity":2503,"codepoint":59680,"unsupported_families":[],"categories":["action"],"tags":["adjust","corner","dash","dashed","edit","rounded","shape","square","transform"],"sizes_px":[24]},{"name":"route","version":2,"popularity":10277,"codepoint":60109,"unsupported_families":[],"categories":["maps"],"tags":["directions","maps","path","route","sign","traffic"],"sizes_px":[20,24]},{"name":"router","version":13,"popularity":9505,"codepoint":58152,"unsupported_families":[],"categories":["hardware"],"tags":["box","cable","connection","hardware","internet","network","router","signal","wifi"],"sizes_px":[24]},{"name":"rowing","version":14,"popularity":6148,"codepoint":59681,"unsupported_families":[],"categories":["action"],"tags":["activity","boat","body","canoe","human","people","person","row","rowing","sport","water"],"sizes_px":[24]},{"name":"rss_feed","version":12,"popularity":16534,"codepoint":57573,"unsupported_families":[],"categories":["communication"],"tags":["application","blog","connection","data","feed","internet","network","rss","service","signal","website","wifi","wireless"],"sizes_px":[24]},{"name":"rsvp","version":10,"popularity":1184,"codepoint":61525,"unsupported_families":[],"categories":["device"],"tags":["alphabet","character","font","invitation","invite","letters","plaît","respond","rsvp","répondez","sil","symbol","text","type","vous"],"sizes_px":[24]},{"name":"rtt","version":15,"popularity":1779,"codepoint":59821,"unsupported_families":[],"categories":["communication"],"tags":["call","real","rrt","text","time"],"sizes_px":[24]},{"name":"rule","version":8,"popularity":25502,"codepoint":61890,"unsupported_families":[],"categories":["action"],"tags":["approve","check","complete","done","incomplete","line","mark","missing","no","ok","rule","select","tick","validate","verified","wrong","x","yes"],"sizes_px":[24]},{"name":"rule_folder","version":7,"popularity":4969,"codepoint":61897,"unsupported_families":[],"categories":["file"],"tags":["approve","cancel","check","close","complete","data","doc","document","done","drive","exit","file","folder","mark","no","ok","remove","rule","select","sheet","slide","storage","tick","validate","verified","x","yes"],"sizes_px":[24]},{"name":"run_circle","version":11,"popularity":3917,"codepoint":61295,"unsupported_families":[],"categories":["maps"],"tags":["body","circle","exercise","human","people","person","run","running"],"sizes_px":[20,24]},{"name":"running_with_errors","version":4,"popularity":6463,"codepoint":58653,"unsupported_families":[],"categories":["notification"],"tags":["!","alert","attention","caution","danger","duration","error","errors","exclamation","important","mark","notification","process","processing","running","symbol","time","warning","with"],"sizes_px":[20,24]},{"name":"rv_hookup","version":12,"popularity":3044,"codepoint":58946,"unsupported_families":[],"categories":["places"],"tags":["arrow","attach","automobile","automotive","back","car","cars","connect","direction","hookup","left","maps","public","right","rv","trailer","transportation","travel","truck","van","vehicle"],"sizes_px":[24]},{"name":"safety_check","version":1,"popularity":2517,"codepoint":60399,"unsupported_families":[],"categories":["maps"],"tags":["certified","check","clock","privacy","private","protect","protection","safety","schedule","security","shield","time","verified"],"sizes_px":[20,24]},{"name":"safety_divider","version":7,"popularity":3264,"codepoint":57804,"unsupported_families":[],"categories":["social"],"tags":["apart","distance","divider","safety","separate","social","space"],"sizes_px":[24]},{"name":"sailing","version":4,"popularity":7946,"codepoint":58626,"unsupported_families":[],"categories":["maps"],"tags":["boat","entertainment","fishing","hobby","ocean","sailboat","sailing","sea","social sports","travel","water"],"sizes_px":[20,24]},{"name":"sanitizer","version":6,"popularity":4789,"codepoint":61981,"unsupported_families":[],"categories":["social"],"tags":["bacteria","bottle","clean","covid","disinfect","germs","pump","sanitizer"],"sizes_px":[24]},{"name":"satellite","version":12,"popularity":3403,"codepoint":58722,"unsupported_families":[],"categories":["maps"],"tags":["bluetooth","connect","connection","connectivity","data","device","image","internet","landscape","location","maps","mountain","mountains","network","photo","photography","picture","satellite","scan","service","signal","symbol","wifi","wireless"],"sizes_px":[24]},{"name":"satellite_alt","version":1,"popularity":5071,"codepoint":60218,"unsupported_families":[],"categories":["action"],"tags":["alternative","artificial","communication","satellite","space","space station","television"],"sizes_px":[20,24]},{"name":"save","version":12,"popularity":85497,"codepoint":57697,"unsupported_families":[],"categories":["content"],"tags":["data","disk","document","drive","file","floppy","multimedia","save","storage"],"sizes_px":[24]},{"name":"save_alt","version":12,"popularity":23285,"codepoint":57713,"unsupported_families":[],"categories":["content"],"tags":["alt","arrow","disk","document","down","file","floppy","multimedia","save"],"sizes_px":[24]},{"name":"save_as","version":2,"popularity":6984,"codepoint":60256,"unsupported_families":[],"categories":["content"],"tags":["compose","create","data","disk","document","draft","drive","edit","editing","file","floppy","input","multimedia","pen","pencil","save","storage","write","writing"],"sizes_px":[20,24]},{"name":"saved_search","version":11,"popularity":8841,"codepoint":59921,"unsupported_families":[],"categories":["action"],"tags":["find","glass","important","look","magnify","magnifying","marked","saved","search","see","star"],"sizes_px":[24]},{"name":"savings","version":5,"popularity":58725,"codepoint":58091,"unsupported_families":[],"categories":["action"],"tags":["bank","bill","card","cash","coin","commerce","cost","credit","currency","dollars","finance","money","online","pay","payment","pig","piggy","savings","symbol"],"sizes_px":[20,24]},{"name":"scale","version":1,"popularity":5586,"codepoint":60255,"unsupported_families":[],"categories":["social"],"tags":["measure","monitor","scale","weight"],"sizes_px":[20,24]},{"name":"scanner","version":12,"popularity":2702,"codepoint":58153,"unsupported_families":[],"categories":["hardware"],"tags":["copy","device","hardware","machine","scan","scanner"],"sizes_px":[24]},{"name":"scatter_plot","version":12,"popularity":5718,"codepoint":57960,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","circles","data","diagram","dot","graph","infographic","measure","metrics","plot","scatter","statistics","tracking"],"sizes_px":[24]},{"name":"schedule","version":17,"popularity":202110,"codepoint":59573,"unsupported_families":[],"categories":["action"],"tags":["clock","date","history","recent","schedule","time"],"sizes_px":[24]},{"name":"schedule_send","version":14,"popularity":12338,"codepoint":59914,"unsupported_families":[],"categories":["action"],"tags":["calendar","clock","date","email","letters","mail","remember","schedule","send","share","time"],"sizes_px":[24]},{"name":"schema","version":4,"popularity":7301,"codepoint":58621,"unsupported_families":[],"categories":["editor"],"tags":["analytics","chart","data","diagram","flow","graph","infographic","measure","metrics","schema","squares","statistics","tracking"],"sizes_px":[20,24]},{"name":"school","version":13,"popularity":96476,"codepoint":59404,"unsupported_families":[],"categories":["social"],"tags":["academy","achievement","cap","class","college","education","graduation","hat","knowledge","learning","school","university"],"sizes_px":[24]},{"name":"science","version":17,"popularity":26243,"codepoint":59979,"unsupported_families":[],"categories":["social"],"tags":["beaker","chemical","chemistry","experiment","flask","glass","laboratory","research","science","tube"],"sizes_px":[20,24]},{"name":"score","version":12,"popularity":2751,"codepoint":57961,"unsupported_families":[],"categories":["editor"],"tags":["2k","alphabet","analytics","bar","bars","character","chart","data","diagram","digit","font","graph","infographic","letters","measure","metrics","numbers","score","statistics","symbol","text","tracking","type"],"sizes_px":[24]},{"name":"scoreboard","version":1,"popularity":1877,"codepoint":60368,"unsupported_families":[],"categories":["social"],"tags":["board","points","score","scoreboard","sports"],"sizes_px":[20,24]},{"name":"screen_lock_landscape","version":16,"popularity":1099,"codepoint":57790,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","device","hardware","iOS","landscape","lock","mobile","phone","rotate","screen","tablet"],"sizes_px":[24]},{"name":"screen_lock_portrait","version":17,"popularity":1608,"codepoint":57791,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","device","hardware","iOS","lock","mobile","phone","portrait","rotate","screen","tablet"],"sizes_px":[24]},{"name":"screen_lock_rotation","version":16,"popularity":1117,"codepoint":57792,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","arrow","device","hardware","iOS","lock","mobile","phone","rotate","rotation","screen","tablet","turn"],"sizes_px":[24]},{"name":"screen_rotation","version":12,"popularity":4233,"codepoint":57793,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","arrow","device","hardware","iOS","mobile","phone","rotate","rotation","screen","tablet","turn"],"sizes_px":[24]},{"name":"screen_rotation_alt","version":1,"popularity":961,"codepoint":60398,"unsupported_families":[],"categories":["maps"],"tags":["Android","OS","arrow","device","hardware","iOS","mobile","phone","rotate","rotation","screen","tablet","turn"],"sizes_px":[20,24]},{"name":"screen_search_desktop","version":10,"popularity":4418,"codepoint":61296,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","arrow","desktop","device","hardware","iOS","lock","monitor","rotate","screen","web"],"sizes_px":[24]},{"name":"screen_share","version":12,"popularity":7084,"codepoint":57570,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","arrow","cast","chrome","device","display","hardware","iOS","laptop","mac","mirror","monitor","screen","share","stream","streaming","web","window"],"sizes_px":[24]},{"name":"screenshot","version":10,"popularity":2999,"codepoint":61526,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","cell","crop","device","hardware","iOS","mobile","phone","screen","screenshot","tablet"],"sizes_px":[24]},{"name":"screenshot_monitor","version":1,"popularity":1786,"codepoint":60424,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","chrome","desktop","device","display","hardware","iOS","mac","monitor","screen","screengrab","screenshot","web","window"],"sizes_px":[20,24]},{"name":"scuba_diving","version":1,"popularity":1109,"codepoint":60366,"unsupported_families":[],"categories":["social"],"tags":["diving","entertainment","exercise","hobby","scuba","social","swim","swimming"],"sizes_px":[20,24]},{"name":"sd","version":10,"popularity":1375,"codepoint":59869,"unsupported_families":[],"categories":["av"],"tags":["alphabet","camera","card","character","data","device","digital","drive","flash","font","image","letters","memory","photo","sd","secure","symbol","text","type"],"sizes_px":[24]},{"name":"sd_card","version":12,"popularity":2917,"codepoint":58915,"unsupported_families":[],"categories":["notification"],"tags":["camera","card","digital","memory","photos","sd","secure","storage"],"sizes_px":[24]},{"name":"sd_card_alert","version":11,"popularity":1711,"codepoint":61527,"unsupported_families":[],"categories":["notification"],"tags":["!","alert","attention","camera","card","caution","danger","digital","error","exclamation","important","mark","memory","notification","photos","sd","secure","storage","symbol","warning"],"sizes_px":[24]},{"name":"sd_storage","version":12,"popularity":2043,"codepoint":57794,"unsupported_families":[],"categories":["device"],"tags":["camera","card","data","digital","memory","sd","secure","storage"],"sizes_px":[24]},{"name":"search","version":17,"popularity":833765,"codepoint":59574,"unsupported_families":[],"categories":["action"],"tags":["filter","find","glass","look","magnify","magnifying","search","see"],"sizes_px":[24]},{"name":"search_off","version":12,"popularity":9743,"codepoint":60022,"unsupported_families":[],"categories":["action"],"tags":["cancel","clear","close","disabled","enabled","find","glass","look","magnify","magnifying","off","on","search","see","slash","stop","x"],"sizes_px":[20,24]},{"name":"security","version":12,"popularity":31715,"codepoint":58154,"unsupported_families":[],"categories":["hardware"],"tags":["certified","privacy","private","protect","protection","security","shield","verified"],"sizes_px":[24]},{"name":"security_update","version":11,"popularity":2133,"codepoint":61528,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","arrow","device","down","download","hardware","iOS","mobile","phone","security","tablet","update"],"sizes_px":[24]},{"name":"security_update_good","version":10,"popularity":2782,"codepoint":61529,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","checkmark","device","good","hardware","iOS","mobile","ok","phone","security","tablet","tick","update"],"sizes_px":[24]},{"name":"security_update_warning","version":10,"popularity":1721,"codepoint":61530,"unsupported_families":[],"categories":["device"],"tags":["!","Android","OS","alert","attention","caution","danger","device","download","error","exclamation","hardware","iOS","important","mark","mobile","notification","phone","security","symbol","tablet","update","warning"],"sizes_px":[24]},{"name":"segment","version":11,"popularity":12863,"codepoint":59723,"unsupported_families":[],"categories":["action"],"tags":["alignment","fonts","format","lines","list","paragraph","part","piece","rule","rules","segment","style","text"],"sizes_px":[24]},{"name":"select_all","version":12,"popularity":7746,"codepoint":57698,"unsupported_families":[],"categories":["content"],"tags":["all","dash","dashed","select","selection","square","tool"],"sizes_px":[24]},{"name":"self_improvement","version":11,"popularity":18166,"codepoint":60024,"unsupported_families":[],"categories":["social"],"tags":["body","calm","care","chi","human","improvement","meditate","meditation","people","person","relax","self","sitting","wellbeing","yoga","zen"],"sizes_px":[20,24]},{"name":"sell","version":10,"popularity":36139,"codepoint":61531,"unsupported_families":[],"categories":["device"],"tags":["bill","card","cart","cash","coin","commerce","credit","currency","dollars","money","online","pay","payment","price","sell","shopping","tag"],"sizes_px":[24]},{"name":"send","version":20,"popularity":126062,"codepoint":57699,"unsupported_families":[],"categories":["content"],"tags":["email","mail","message","paper","plane","reply","right","send","share"],"sizes_px":[24]},{"name":"send_and_archive","version":11,"popularity":4639,"codepoint":59916,"unsupported_families":[],"categories":["action"],"tags":["archive","arrow","down","download","email","letters","mail","save","send","share"],"sizes_px":[20,24]},{"name":"send_time_extension","version":2,"popularity":1694,"codepoint":60123,"unsupported_families":[],"categories":["communication"],"tags":["deliver","dispatch","envelop","extension","mail","message","schedule","send","time"],"sizes_px":[20,24]},{"name":"send_to_mobile","version":11,"popularity":4720,"codepoint":61532,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","arrow","device","export","forward","hardware","iOS","mobile","phone","right","send","share","tablet","to"],"sizes_px":[24]},{"name":"sensor_door","version":8,"popularity":7056,"codepoint":61877,"unsupported_families":[],"categories":["home"],"tags":["alarm","security","security system"],"sizes_px":[20,24]},{"name":"sensor_occupied","version":1,"popularity":2157,"codepoint":60432,"unsupported_families":[],"categories":["home"],"tags":["body","body response","connection","fitbit","human","network","people","person","scan","sensors","signal","smart body scan sensor","wireless"],"sizes_px":[20,24]},{"name":"sensor_window","version":8,"popularity":3708,"codepoint":61876,"unsupported_families":[],"categories":["home"],"tags":["alarm","security","security system"],"sizes_px":[20,24]},{"name":"sensors","version":4,"popularity":20912,"codepoint":58654,"unsupported_families":[],"categories":["action"],"tags":["connection","network","scan","sensors","signal","wireless"],"sizes_px":[20,24]},{"name":"sensors_off","version":5,"popularity":3650,"codepoint":58655,"unsupported_families":[],"categories":["action"],"tags":["connection","disabled","enabled","network","off","on","scan","sensors","signal","slash","wireless"],"sizes_px":[20,24]},{"name":"sentiment_dissatisfied","version":11,"popularity":21589,"codepoint":59409,"unsupported_families":[],"categories":["social"],"tags":["angry","disappointed","dislike","dissatisfied","emotions","expressions","face","feelings","frown","mood","person","sad","sentiment","survey","unhappy","unsatisfied","upset"],"sizes_px":[24]},{"name":"sentiment_neutral","version":11,"popularity":11529,"codepoint":59410,"unsupported_families":[],"categories":["social"],"tags":["emotionless","emotions","expressions","face","feelings","fine","indifference","mood","neutral","okay","person","sentiment","survey"],"sizes_px":[24]},{"name":"sentiment_satisfied","version":11,"popularity":26646,"codepoint":59411,"unsupported_families":[],"categories":["social"],"tags":["emotions","expressions","face","feelings","glad","happiness","happy","like","mood","person","pleased","satisfied","sentiment","smile","smiling","survey"],"sizes_px":[24]},{"name":"sentiment_satisfied_alt","version":11,"popularity":29358,"codepoint":57581,"unsupported_families":[],"categories":["communication"],"tags":["account","alt","emoji","face","happy","human","people","person","profile","satisfied","sentiment","smile","user"],"sizes_px":[24]},{"name":"sentiment_very_dissatisfied","version":11,"popularity":20538,"codepoint":59412,"unsupported_families":[],"categories":["social"],"tags":["angry","disappointed","dislike","dissatisfied","emotions","expressions","face","feelings","mood","person","sad","sentiment","sorrow","survey","unhappy","unsatisfied","upset","very"],"sizes_px":[24]},{"name":"sentiment_very_satisfied","version":11,"popularity":30349,"codepoint":59413,"unsupported_families":[],"categories":["social"],"tags":["emotions","expressions","face","feelings","glad","happiness","happy","like","mood","person","pleased","satisfied","sentiment","smile","smiling","survey","very"],"sizes_px":[24]},{"name":"set_meal","version":6,"popularity":4962,"codepoint":61930,"unsupported_families":[],"categories":["maps"],"tags":["chopsticks","dinner","fish","food","lunch","meal","restaurant","set","teishoku"],"sizes_px":[24]},{"name":"settings","version":19,"popularity":585199,"codepoint":59576,"unsupported_families":[],"categories":["action"],"tags":["application","change","details","gear","info","information","options","personal","service","settings"],"sizes_px":[24]},{"name":"settings_accessibility","version":10,"popularity":13964,"codepoint":61533,"unsupported_families":[],"categories":["action"],"tags":["accessibility","body","details","human","information","people","person","personal","preferences","profile","settings","user"],"sizes_px":[24]},{"name":"settings_applications","version":11,"popularity":23828,"codepoint":59577,"unsupported_families":[],"categories":["action"],"tags":["application","change","details","gear","info","information","options","personal","service","settings"],"sizes_px":[24]},{"name":"settings_backup_restore","version":11,"popularity":13810,"codepoint":59578,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backup","backwards","refresh","restore","reverse","rotate","settings"],"sizes_px":[24]},{"name":"settings_bluetooth","version":11,"popularity":4447,"codepoint":59579,"unsupported_families":[],"categories":["action"],"tags":["bluetooth","connect","connection","connectivity","device","settings","signal","symbol"],"sizes_px":[24]},{"name":"settings_brightness","version":12,"popularity":5912,"codepoint":59581,"unsupported_families":[],"categories":["action"],"tags":["brightness","dark","filter","light","mode","setting","settings"],"sizes_px":[24]},{"name":"settings_cell","version":11,"popularity":3589,"codepoint":59580,"unsupported_families":[],"categories":["action"],"tags":["Android","OS","cell","device","hardware","iOS","mobile","phone","settings","tablet"],"sizes_px":[24]},{"name":"settings_ethernet","version":11,"popularity":12016,"codepoint":59582,"unsupported_families":[],"categories":["action"],"tags":["arrows","computer","connect","connection","connectivity","dots","ethernet","internet","network","settings","wifi"],"sizes_px":[24]},{"name":"settings_input_antenna","version":11,"popularity":9474,"codepoint":59583,"unsupported_families":[],"categories":["action"],"tags":["airplay","antenna","arrows","cast","computer","connect","connection","connectivity","dots","input","internet","network","screencast","settings","stream","wifi","wireless"],"sizes_px":[24]},{"name":"settings_input_component","version":11,"popularity":8755,"codepoint":59584,"unsupported_families":[],"categories":["action"],"tags":["audio","av","cable","cables","component","connect","connection","connectivity","input","internet","plug","points","settings","video","wifi"],"sizes_px":[24]},{"name":"settings_input_composite","version":11,"popularity":5137,"codepoint":59585,"unsupported_families":[],"categories":["action"],"tags":["component","composite","connection","connectivity","input","plug","points","settings"],"sizes_px":[24]},{"name":"settings_input_hdmi","version":11,"popularity":3793,"codepoint":59586,"unsupported_families":[],"categories":["action"],"tags":["cable","connection","connectivity","definition","hdmi","high","input","plug","plugin","points","settings","video","wire"],"sizes_px":[24]},{"name":"settings_input_svideo","version":11,"popularity":2947,"codepoint":59587,"unsupported_families":[],"categories":["action"],"tags":["cable","connection","connectivity","definition","input","plug","plugin","points","settings","standard","svideo","video"],"sizes_px":[24]},{"name":"settings_overscan","version":11,"popularity":5460,"codepoint":59588,"unsupported_families":[],"categories":["action"],"tags":["arrows","expand","image","photo","picture","scan","settings"],"sizes_px":[24]},{"name":"settings_phone","version":15,"popularity":16967,"codepoint":59589,"unsupported_families":[],"categories":["action"],"tags":["call","cell","contact","device","hardware","mobile","phone","settings","telephone"],"sizes_px":[24]},{"name":"settings_power","version":11,"popularity":6797,"codepoint":59590,"unsupported_families":[],"categories":["action"],"tags":["info","information","off","on","power","save","settings","shutdown"],"sizes_px":[24]},{"name":"settings_remote","version":11,"popularity":8581,"codepoint":59591,"unsupported_families":[],"categories":["action"],"tags":["bluetooth","connection","connectivity","device","remote","settings","signal","wifi","wireless"],"sizes_px":[24]},{"name":"settings_suggest","version":20,"popularity":30721,"codepoint":61534,"unsupported_families":[],"categories":["device"],"tags":["ai","artificial","automatic","automation","change","custom","details","gear","genai","intelligence","magic","options","recommendation","service","settings","smart","spark","sparkle","star","suggest","suggestion","system"],"sizes_px":[24]},{"name":"settings_system_daydream","version":12,"popularity":2592,"codepoint":57795,"unsupported_families":[],"categories":["device"],"tags":["backup","cloud","daydream","drive","settings","storage","system"],"sizes_px":[24]},{"name":"settings_voice","version":11,"popularity":7784,"codepoint":59592,"unsupported_families":[],"categories":["action"],"tags":["mic","microphone","record","recorder","settings","speaker","voice"],"sizes_px":[24]},{"name":"severe_cold","version":1,"popularity":1060,"codepoint":60371,"unsupported_families":[],"categories":["social"],"tags":["!","alert","attention","caution","climate","cold","crisis","danger","disaster","error","exclamation","important","notification","severe","snow","snowflake","warning","weather","winter"],"sizes_px":[20,24]},{"name":"shape_line","version":1,"popularity":954,"codepoint":63699,"unsupported_families":[],"categories":["editor"],"tags":["circle","draw","edit","editing","line","shape","square"],"sizes_px":[20,24]},{"name":"share","version":18,"popularity":121647,"codepoint":59405,"unsupported_families":[],"categories":["social"],"tags":["DISABLE_IOS","android","connect","contect","disable_ios","link","media","multimedia","multiple","network","options","share","shared","sharing","social"],"sizes_px":[24]},{"name":"share_location","version":17,"popularity":9100,"codepoint":61535,"unsupported_families":[],"categories":["device"],"tags":["dash","dashed","destination","direction","gps","location","maps","pin","place","share","stop","tracking"],"sizes_px":[24]},{"name":"shield","version":11,"popularity":26640,"codepoint":59872,"unsupported_families":[],"categories":["content"],"tags":["certified","privacy","private","protect","protection","security","shield","verified"],"sizes_px":[24]},{"name":"shield_moon","version":2,"popularity":2876,"codepoint":60073,"unsupported_families":[],"categories":["home"],"tags":["certified","do not disturb","moon","night","privacy","private","protect","protection","security","shield","verified"],"sizes_px":[20,24]},{"name":"shop","version":12,"popularity":9553,"codepoint":59593,"unsupported_families":[],"categories":["action"],"tags":["bag","bill","buy","card","cart","cash","coin","commerce","credit","currency","dollars","google","money","online","pay","payment","play","shop","shopping","store"],"sizes_px":[24]},{"name":"shop_2","version":9,"popularity":2687,"codepoint":57758,"unsupported_families":[],"categories":["action"],"tags":["2","add","arrow","buy","cart","google","play","purchase","shop","shopping"],"sizes_px":[20,24]},{"name":"shop_two","version":11,"popularity":4223,"codepoint":59594,"unsupported_families":[],"categories":["action"],"tags":["add","arrow","buy","cart","google","play","purchase","shop","shopping","two"],"sizes_px":[24]},{"name":"shopping_bag","version":9,"popularity":96569,"codepoint":61900,"unsupported_families":[],"categories":["action"],"tags":["bag","bill","business","buy","card","cart","cash","coin","commerce","credit","currency","dollars","money","online","pay","payment","shop","shopping","store","storefront"],"sizes_px":[24]},{"name":"shopping_basket","version":12,"popularity":45252,"codepoint":59595,"unsupported_families":[],"categories":["action"],"tags":["add","basket","bill","buy","card","cart","cash","checkout","coin","commerce","credit","currency","dollars","money","online","pay","payment","shopping"],"sizes_px":[24]},{"name":"shopping_cart","version":18,"popularity":309756,"codepoint":59596,"unsupported_families":[],"categories":["action"],"tags":["add","bill","buy","card","cart","cash","checkout","coin","commerce","credit","currency","dollars","money","online","pay","payment","shopping"],"sizes_px":[24]},{"name":"shopping_cart_checkout","version":1,"popularity":10571,"codepoint":60296,"unsupported_families":[],"categories":["action"],"tags":["arrow","cart","cash","checkout","coin","commerce","currency","dollars","money","online","pay","payment","right","shopping"],"sizes_px":[20,24]},{"name":"short_text","version":15,"popularity":3634,"codepoint":57953,"unsupported_families":[],"categories":["editor"],"tags":["brief","comment","doc","document","note","short","text","write","writing"],"sizes_px":[24]},{"name":"shortcut","version":10,"popularity":7777,"codepoint":61536,"unsupported_families":[],"categories":["device"],"tags":["arrow","direction","forward","right","shortcut"],"sizes_px":[24]},{"name":"show_chart","version":13,"popularity":26451,"codepoint":59105,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic","line","measure","metrics","presentation","show chart","statistics","tracking"],"sizes_px":[24]},{"name":"shower","version":9,"popularity":10285,"codepoint":61537,"unsupported_families":[],"categories":["search"],"tags":["bath","bathroom","closet","home","house","place","plumbing","room","shower","sprinkler","wash","water","wc"],"sizes_px":[24]},{"name":"shuffle","version":14,"popularity":13079,"codepoint":57411,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","control","controls","music","random","shuffle","video"],"sizes_px":[24]},{"name":"shuffle_on","version":12,"popularity":2681,"codepoint":59873,"unsupported_families":[],"categories":["av"],"tags":["arrow","arrows","control","controls","music","on","random","shuffle","video"],"sizes_px":[24]},{"name":"shutter_speed","version":11,"popularity":2771,"codepoint":58429,"unsupported_families":[],"categories":["image"],"tags":["aperture","camera","duration","image","lens","photo","photography","photos","picture","setting","shutter","speed","stop","time","timer","watch"],"sizes_px":[24]},{"name":"sick","version":6,"popularity":6385,"codepoint":61984,"unsupported_families":[],"categories":["social"],"tags":["covid","discomfort","emotions","expressions","face","feelings","fever","flu","ill","mood","pain","person","sick","survey","upset"],"sizes_px":[24]},{"name":"sign_language","version":1,"popularity":1569,"codepoint":60389,"unsupported_families":[],"categories":["social"],"tags":["communication","deaf","fingers","gesture","hand","language","sign"],"sizes_px":[20,24]},{"name":"signal_cellular_0_bar","version":15,"popularity":2189,"codepoint":61608,"unsupported_families":[],"categories":["device"],"tags":["0","bar","cell","cellular","data","internet","mobile","network","phone","signal","speed","wifi","wireless"],"sizes_px":[24]},{"name":"signal_cellular_4_bar","version":12,"popularity":5566,"codepoint":57800,"unsupported_families":[],"categories":["device"],"tags":["4","bar","cell","cellular","data","internet","mobile","network","phone","signal","speed","wifi","wireless"],"sizes_px":[24]},{"name":"signal_cellular_alt","version":12,"popularity":33257,"codepoint":57858,"unsupported_families":[],"categories":["device"],"tags":["alt","analytics","bar","cell","cellular","chart","data","diagram","graph","infographic","internet","measure","metrics","mobile","network","phone","signal","statistics","tracking","wifi","wireless"],"sizes_px":[24]},{"name":"signal_cellular_alt_1_bar","version":1,"popularity":1041,"codepoint":60383,"unsupported_families":[],"categories":["device"],"tags":["1","bar","cell","cellular","data","internet","mobile","network","phone","signal","speed","wifi","wireless"],"sizes_px":[20,24]},{"name":"signal_cellular_alt_2_bar","version":1,"popularity":1023,"codepoint":60387,"unsupported_families":[],"categories":["device"],"tags":["2","bar","cell","cellular","data","internet","mobile","network","phone","signal","speed","wifi","wireless"],"sizes_px":[20,24]},{"name":"signal_cellular_connected_no_internet_0_bar","version":13,"popularity":1660,"codepoint":61612,"unsupported_families":[],"categories":["device"],"tags":["!","0","alert","attention","bar","caution","cell","cellular","connected","danger","data","error","exclamation","important","internet","mark","mobile","network","no","notification","phone","signal","symbol","warning","wifi","wireless"],"sizes_px":[20,24]},{"name":"signal_cellular_connected_no_internet_4_bar","version":13,"popularity":1860,"codepoint":57805,"unsupported_families":[],"categories":["device"],"tags":["!","4","alert","attention","bar","caution","cell","cellular","connected","danger","data","error","exclamation","important","internet","mark","mobile","network","no","notification","phone","signal","symbol","warning","wifi","wireless"],"sizes_px":[20,24]},{"name":"signal_cellular_no_sim","version":11,"popularity":1003,"codepoint":57806,"unsupported_families":[],"categories":["device"],"tags":["camera","card","cellular","chip","device","disabled","enabled","memory","no","off","offline","on","phone","signal","sim","slash","storage"],"sizes_px":[24]},{"name":"signal_cellular_nodata","version":10,"popularity":1348,"codepoint":61538,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","clear","data","internet","mobile","network","no","nodata","offline","phone","quit","remove","signal","wifi","wireless","x"],"sizes_px":[24]},{"name":"signal_cellular_null","version":12,"popularity":1292,"codepoint":57807,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","null","phone","signal","wifi","wireless"],"sizes_px":[24]},{"name":"signal_cellular_off","version":12,"popularity":1327,"codepoint":57808,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","disabled","enabled","internet","mobile","network","off","offline","on","phone","signal","slash","wifi","wireless"],"sizes_px":[24]},{"name":"signal_wifi_0_bar","version":15,"popularity":3074,"codepoint":61616,"unsupported_families":[],"categories":["device"],"tags":["0","bar","cell","cellular","data","internet","mobile","network","phone","signal","wifi","wireless"],"sizes_px":[24]},{"name":"signal_wifi_4_bar","version":12,"popularity":6986,"codepoint":57816,"unsupported_families":[],"categories":["device"],"tags":["4","bar","cell","cellular","data","internet","mobile","network","phone","signal","wifi","wireless"],"sizes_px":[24]},{"name":"signal_wifi_4_bar_lock","version":13,"popularity":1322,"codepoint":57817,"unsupported_families":[],"categories":["device"],"tags":["4","bar","cell","cellular","data","internet","lock","locked","mobile","network","password","phone","privacy","private","protection","safety","secure","security","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"signal_wifi_bad","version":10,"popularity":2466,"codepoint":61539,"unsupported_families":[],"categories":["device"],"tags":["bad","bar","cancel","cell","cellular","clear","close","data","exit","internet","mobile","network","no","phone","quit","remove","signal","stop","wifi","wireless","x"],"sizes_px":[24]},{"name":"signal_wifi_connected_no_internet_4","version":10,"popularity":2339,"codepoint":61540,"unsupported_families":[],"categories":["device"],"tags":["4","cell","cellular","connected","data","internet","mobile","network","no","offline","phone","signal","wifi","wireless","x"],"sizes_px":[24]},{"name":"signal_wifi_off","version":17,"popularity":2628,"codepoint":57818,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","disabled","enabled","internet","mobile","network","off","on","phone","signal","slash","speed","wifi","wireless"],"sizes_px":[24]},{"name":"signal_wifi_statusbar_4_bar","version":9,"popularity":4297,"codepoint":61541,"unsupported_families":[],"categories":["device"],"tags":["4","bar","cell","cellular","data","internet","mobile","network","phone","signal","speed","statusbar","wifi","wireless"],"sizes_px":[24]},{"name":"signal_wifi_statusbar_connected_no_internet_4","version":11,"popularity":4143,"codepoint":61542,"unsupported_families":[],"categories":["device"],"tags":["!","4","alert","attention","caution","cell","cellular","connected","danger","data","error","exclamation","important","internet","mark","mobile","network","no","notification","phone","signal","speed","statusbar","symbol","warning","wifi","wireless"],"sizes_px":[20,24]},{"name":"signal_wifi_statusbar_null","version":9,"popularity":2120,"codepoint":61543,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","data","internet","mobile","network","null","phone","signal","speed","statusbar","wifi","wireless"],"sizes_px":[24]},{"name":"signpost","version":1,"popularity":3323,"codepoint":60305,"unsupported_families":[],"categories":["maps"],"tags":["arrow","direction","left","maps","right","signal","signs","street","traffic"],"sizes_px":[20,24]},{"name":"sim_card","version":12,"popularity":4235,"codepoint":58155,"unsupported_families":[],"categories":["hardware"],"tags":["camera","card","chip","device","memory","phone","sim","storage"],"sizes_px":[24]},{"name":"sim_card_alert","version":11,"popularity":1657,"codepoint":58916,"unsupported_families":[],"categories":["notification"],"tags":["!","alert","attention","camera","card","caution","danger","digital","error","exclamation","important","mark","memory","notification","photos","sd","secure","storage","symbol","warning"],"sizes_px":[24]},{"name":"sim_card_download","version":9,"popularity":5139,"codepoint":61544,"unsupported_families":[],"categories":["device"],"tags":["arrow","camera","card","chip","device","down","download","memory","phone","sim","storage"],"sizes_px":[24]},{"name":"single_bed","version":11,"popularity":3501,"codepoint":59976,"unsupported_families":[],"categories":["social"],"tags":["bed","bedroom","double","furniture","home","hotel","house","king","night","pillows","queen","rest","room","single","sleep","twin"],"sizes_px":[20,24]},{"name":"sip","version":10,"popularity":1458,"codepoint":61545,"unsupported_families":[],"categories":["communication"],"tags":["alphabet","call","character","dialer","font","initiation","internet","letters","over","phone","protocol","routing","session","sip","symbol","text","type","voice"],"sizes_px":[24]},{"name":"skateboarding","version":4,"popularity":3387,"codepoint":58641,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","entertainment","exercise","hobby","human","people","person","skate","skateboarder","skateboarding","social","sports"],"sizes_px":[20,24]},{"name":"skip_next","version":16,"popularity":32920,"codepoint":57412,"unsupported_families":[],"categories":["av"],"tags":["arrow","control","controls","music","next","play","previous","skip","video"],"sizes_px":[24]},{"name":"skip_previous","version":16,"popularity":23898,"codepoint":57413,"unsupported_families":[],"categories":["av"],"tags":["arrow","control","controls","music","next","play","previous","skip","video"],"sizes_px":[24]},{"name":"sledding","version":5,"popularity":1833,"codepoint":58642,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","entertainment","exercise","hobby","human","people","person","sled","sledding","sledge","snow","social","sports","travel","winter"],"sizes_px":[20,24]},{"name":"slideshow","version":12,"popularity":9713,"codepoint":58395,"unsupported_families":[],"categories":["image"],"tags":["movie","photos","play","slideshow","square","video","view"],"sizes_px":[24]},{"name":"slow_motion_video","version":11,"popularity":3747,"codepoint":57448,"unsupported_families":[],"categories":["av"],"tags":["arrow","control","controls","dash","dashed","motion","music","play","slow","speed","video"],"sizes_px":[24]},{"name":"smart_button","version":7,"popularity":6910,"codepoint":61889,"unsupported_families":[],"categories":["action"],"tags":["action","ai","artificial","automatic","automation","button","components","composer","custom","function","genai","intelligence","interface","magic","site","smart","spark","sparkle","special","star","stars","ui","ux","web","website"],"sizes_px":[24]},{"name":"smart_display","version":9,"popularity":27333,"codepoint":61546,"unsupported_families":[],"categories":["hardware"],"tags":["airplay","cast","chrome","connect","device","display","play","screen","screencast","smart","stream","television","tv","video","wireless"],"sizes_px":[24]},{"name":"smart_screen","version":9,"popularity":1440,"codepoint":61547,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","airplay","cast","cell","connect","device","hardware","iOS","mobile","phone","screen","screencast","smart","stream","tablet","video"],"sizes_px":[24]},{"name":"smart_toy","version":9,"popularity":19158,"codepoint":61548,"unsupported_families":[],"categories":["hardware"],"tags":["bot","droid","games","robot","smart","toy"],"sizes_px":[24]},{"name":"smartphone","version":16,"popularity":45801,"codepoint":58156,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","call","cell","chat","device","hardware","iOS","mobile","phone","smartphone","tablet","text"],"sizes_px":[24]},{"name":"smoke_free","version":12,"popularity":2762,"codepoint":60234,"unsupported_families":[],"categories":["places"],"tags":["cigarette","disabled","enabled","free","never","no","off","on","places","prohibited","slash","smoke","smoking","tobacco","warning","zone"],"sizes_px":[24]},{"name":"smoking_rooms","version":12,"popularity":3481,"codepoint":60235,"unsupported_families":[],"categories":["places"],"tags":["allowed","cigarette","places","rooms","smoke","smoking","tobacco","zone"],"sizes_px":[24]},{"name":"sms","version":12,"popularity":21585,"codepoint":58917,"unsupported_families":[],"categories":["notification"],"tags":["3","bubble","chat","communication","conversation","dots","message","more","service","sms","speech","three"],"sizes_px":[24]},{"name":"sms_failed","version":13,"popularity":5162,"codepoint":58918,"unsupported_families":[],"categories":["notification"],"tags":["!","alert","announcement","attention","caution","chat","chat bubble","comment","communicate","communication","conversation","danger","error","exclamation","failed","feedback","important","mark","message","notification","service","sms","speech","symbol","warning"],"sizes_px":[24]},{"name":"snippet_folder","version":7,"popularity":3859,"codepoint":61895,"unsupported_families":[],"categories":["file"],"tags":["data","doc","document","drive","file","folder","sheet","slide","snippet","storage"],"sizes_px":[24]},{"name":"snooze","version":12,"popularity":3278,"codepoint":57414,"unsupported_families":[],"categories":["av"],"tags":["alarm","bell","clock","duration","notification","snooze","time","timer","watch","z"],"sizes_px":[24]},{"name":"snowboarding","version":4,"popularity":2427,"codepoint":58643,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","entertainment","exercise","hobby","human","people","person","snow","snowboarding","social","sports","travel","winter"],"sizes_px":[20,24]},{"name":"snowmobile","version":4,"popularity":1354,"codepoint":58627,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","direction","skimobile","snow","snowmobile","social","sports","transportation","travel","vehicle","winter"],"sizes_px":[20,24]},{"name":"snowshoeing","version":4,"popularity":2160,"codepoint":58644,"unsupported_families":[],"categories":["social"],"tags":["body","human","people","person","snow","snowshoe","snowshoeing","sports","travel","walking","winter"],"sizes_px":[20,24]},{"name":"soap","version":8,"popularity":2963,"codepoint":61874,"unsupported_families":[],"categories":["places"],"tags":["bathroom","clean","fingers","gesture","hand","soap","wash","wc"],"sizes_px":[24]},{"name":"social_distance","version":7,"popularity":5397,"codepoint":57803,"unsupported_families":[],"categories":["social"],"tags":["6","apart","body","distance","ft","human","people","person","social","space"],"sizes_px":[24]},{"name":"solar_power","version":1,"popularity":3437,"codepoint":60431,"unsupported_families":[],"categories":["home"],"tags":["eco","energy","heat","nest","power","solar","sun","sunny"],"sizes_px":[20,24]},{"name":"sort","version":13,"popularity":50557,"codepoint":57700,"unsupported_families":[],"categories":["content"],"tags":["filter","find","lines","list","organize","sort"],"sizes_px":[24]},{"name":"sort_by_alpha","version":11,"popularity":11816,"codepoint":57427,"unsupported_families":[],"categories":["av"],"tags":["alphabet","alphabetize","az","by alpha","character","font","letters","list","order","organize","sort","symbol","text","type"],"sizes_px":[24]},{"name":"sos","version":1,"popularity":1248,"codepoint":60407,"unsupported_families":[],"categories":["maps"],"tags":["font","help","letters","save","sos","text","type"],"sizes_px":[20,24]},{"name":"soup_kitchen","version":2,"popularity":3333,"codepoint":59347,"unsupported_families":[],"categories":["maps"],"tags":["breakfast","brunch","dining","food","kitchen","lunch","meal","soup"],"sizes_px":[20,24]},{"name":"source","version":7,"popularity":23765,"codepoint":61892,"unsupported_families":[],"categories":["action"],"tags":["code","composer","content","creation","data","doc","document","file","folder","mode","source","storage","view"],"sizes_px":[24]},{"name":"south","version":7,"popularity":20103,"codepoint":61923,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","down","maps","navigation","south"],"sizes_px":[24]},{"name":"south_america","version":2,"popularity":2110,"codepoint":59364,"unsupported_families":[],"categories":["social"],"tags":["continent","landscape","place","region","south america"],"sizes_px":[20,24]},{"name":"south_east","version":7,"popularity":5872,"codepoint":61924,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","down","east","maps","navigation","right","south"],"sizes_px":[24]},{"name":"south_west","version":7,"popularity":4330,"codepoint":61925,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","down","left","maps","navigation","south","west"],"sizes_px":[24]},{"name":"spa","version":12,"popularity":22892,"codepoint":60236,"unsupported_families":[],"categories":["places"],"tags":["aromatherapy","flower","healthcare","leaf","massage","meditation","nature","petals","places","relax","spa","wellbeing","wellness"],"sizes_px":[24]},{"name":"space_bar","version":11,"popularity":2430,"codepoint":57942,"unsupported_families":[],"categories":["editor"],"tags":["bar","keyboard","line","space"],"sizes_px":[24]},{"name":"space_dashboard","version":3,"popularity":30779,"codepoint":58987,"unsupported_families":[],"categories":["action"],"tags":["cards","dashboard","format","grid","layout","rectangle","shapes","space","squares","web","website"],"sizes_px":[20,24]},{"name":"spatial_audio","version":1,"popularity":1283,"codepoint":60395,"unsupported_families":[],"categories":["action"],"tags":["audio","music","note","sound","spatial"],"sizes_px":[20,24]},{"name":"spatial_audio_off","version":1,"popularity":2247,"codepoint":60392,"unsupported_families":[],"categories":["action"],"tags":["audio","disabled","enabled","music","note","off","offline","on","slash","sound","spatial"],"sizes_px":[20,24]},{"name":"spatial_tracking","version":1,"popularity":1344,"codepoint":60394,"unsupported_families":[],"categories":["action"],"tags":["audio","disabled","enabled","music","note","off","offline","on","slash","sound","spatial","tracking"],"sizes_px":[20,24]},{"name":"speaker","version":16,"popularity":4638,"codepoint":58157,"unsupported_families":[],"categories":["hardware"],"tags":["box","electronic","loud","music","sound","speaker","stereo","system","video"],"sizes_px":[24]},{"name":"speaker_group","version":12,"popularity":2151,"codepoint":58158,"unsupported_families":[],"categories":["hardware"],"tags":["box","electronic","group","loud","multiple","music","sound","speaker","stereo","system","video"],"sizes_px":[24]},{"name":"speaker_notes","version":13,"popularity":16166,"codepoint":59597,"unsupported_families":[],"categories":["action"],"tags":["bubble","chat","comment","communicate","format","list","message","notes","speaker","speech","text"],"sizes_px":[24]},{"name":"speaker_notes_off","version":13,"popularity":4016,"codepoint":59690,"unsupported_families":[],"categories":["action"],"tags":["bubble","chat","comment","communicate","disabled","enabled","format","list","message","notes","off","on","slash","speaker","speech","text"],"sizes_px":[24]},{"name":"speaker_phone","version":15,"popularity":2370,"codepoint":57554,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","audio","cell","device","hardware","iOS","mobile","phone","sound","speaker","tablet","volume"],"sizes_px":[24]},{"name":"speed","version":12,"popularity":30682,"codepoint":59876,"unsupported_families":[],"categories":["av"],"tags":["arrow","control","controls","fast","gauge","meter","motion","music","slow","speed","speedometer","velocity","video"],"sizes_px":[24]},{"name":"spellcheck","version":12,"popularity":5837,"codepoint":59598,"unsupported_families":[],"categories":["action"],"tags":["a","alphabet","approve","character","check","font","letters","mark","ok","processor","proofread","select","spell","spellcheck","symbol","text","tick","type","word","write","yes"],"sizes_px":[24]},{"name":"splitscreen","version":11,"popularity":5344,"codepoint":61549,"unsupported_families":[],"categories":["device"],"tags":["column","grid","layout","multitasking","row","screen","spaces","split","splitscreen","window"],"sizes_px":[24]},{"name":"spoke","version":2,"popularity":2394,"codepoint":59815,"unsupported_families":[],"categories":["communication"],"tags":["connection","network","radius","spoke"],"sizes_px":[20,24]},{"name":"sports","version":11,"popularity":6547,"codepoint":59952,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","blowing","coach","entertainment","exercise","game","hobby","instrument","referee","social","sound","sports","warning","whistle"],"sizes_px":[20,24]},{"name":"sports_bar","version":7,"popularity":6900,"codepoint":61939,"unsupported_families":[],"categories":["places"],"tags":["alcohol","bar","beer","drink","liquor","pint","places","pub","sports"],"sizes_px":[20,24]},{"name":"sports_baseball","version":11,"popularity":4496,"codepoint":59985,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","baseball","entertainment","exercise","game","hobby","social","sports"],"sizes_px":[20,24]},{"name":"sports_basketball","version":11,"popularity":7576,"codepoint":59942,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","basketball","entertainment","exercise","game","hobby","social","sports"],"sizes_px":[20,24]},{"name":"sports_cricket","version":11,"popularity":2946,"codepoint":59943,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","bat","cricket","entertainment","exercise","game","hobby","social","sports"],"sizes_px":[20,24]},{"name":"sports_esports","version":11,"popularity":31386,"codepoint":59944,"unsupported_families":[],"categories":["social"],"tags":["asset","console","control","controller","device","entertainment","esports","game","gamepad","gaming","google","handheld","hardware","hobby","online","playstation","remote","social","sports","stadia","video","video game","videogame","xbox"],"sizes_px":[20,24]},{"name":"sports_football","version":12,"popularity":3853,"codepoint":59945,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","entertainment","exercise","football","game","hobby","social","sports"],"sizes_px":[20,24]},{"name":"sports_golf","version":11,"popularity":2739,"codepoint":59946,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","club","entertainment","exercise","game","golf","golfer","golfing","hobby","social","sports"],"sizes_px":[20,24]},{"name":"sports_gymnastics","version":1,"popularity":2582,"codepoint":60356,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","entertainment","exercise","gymnastics","hobby","social","sports"],"sizes_px":[20,24]},{"name":"sports_handball","version":11,"popularity":4601,"codepoint":59955,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","body","entertainment","exercise","game","handball","hobby","human","people","person","social","sports"],"sizes_px":[20,24]},{"name":"sports_hockey","version":11,"popularity":2089,"codepoint":59947,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","entertainment","exercise","game","hobby","hockey","social","sports","sticks"],"sizes_px":[20,24]},{"name":"sports_kabaddi","version":11,"popularity":6633,"codepoint":59956,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","body","combat","entertainment","exercise","fighting","game","hobby","human","kabaddi","people","person","social","sports","wrestle","wrestling"],"sizes_px":[20,24]},{"name":"sports_martial_arts","version":1,"popularity":2873,"codepoint":60137,"unsupported_families":[],"categories":["social"],"tags":["arts","athlete","athletic","entertainment","exercise","hobby","human","karate","martial","people","person","social","sports"],"sizes_px":[20,24]},{"name":"sports_mma","version":11,"popularity":2869,"codepoint":59948,"unsupported_families":[],"categories":["social"],"tags":["arts","athlete","athletic","boxing","combat","entertainment","exercise","fighting","game","glove","hobby","martial","mixed","mma","social","sports"],"sizes_px":[20,24]},{"name":"sports_motorsports","version":11,"popularity":4802,"codepoint":59949,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","automobile","bike","drive","driving","entertainment","helmet","hobby","motorcycle","motorsports","protect","social","sports","vehicle"],"sizes_px":[20,24]},{"name":"sports_rugby","version":11,"popularity":2004,"codepoint":59950,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","entertainment","exercise","game","hobby","rugby","social","sports"],"sizes_px":[20,24]},{"name":"sports_score","version":10,"popularity":10683,"codepoint":61550,"unsupported_families":[],"categories":["device"],"tags":["destination","flag","goal","score","sports"],"sizes_px":[24]},{"name":"sports_soccer","version":11,"popularity":15848,"codepoint":59951,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","entertainment","exercise","football","game","hobby","soccer","social","sports"],"sizes_px":[20,24]},{"name":"sports_tennis","version":11,"popularity":6033,"codepoint":59954,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","bat","entertainment","exercise","game","hobby","racket","social","sports","tennis"],"sizes_px":[20,24]},{"name":"sports_volleyball","version":11,"popularity":4182,"codepoint":59953,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","ball","entertainment","exercise","game","hobby","social","sports","volleyball"],"sizes_px":[20,24]},{"name":"square","version":1,"popularity":6590,"codepoint":60214,"unsupported_families":[],"categories":["editor"],"tags":["draw","four","quadrangle","shape","sides","square"],"sizes_px":[20,24]},{"name":"square_foot","version":11,"popularity":11978,"codepoint":59977,"unsupported_families":[],"categories":["content"],"tags":["construction","feet","foot","inches","length","measurement","ruler","school","set","square","tools"],"sizes_px":[20,24]},{"name":"ssid_chart","version":1,"popularity":3025,"codepoint":60262,"unsupported_families":[],"categories":["device"],"tags":["chart","graph","lines","network","ssid","wifi"],"sizes_px":[20,24]},{"name":"stacked_bar_chart","version":12,"popularity":12230,"codepoint":59878,"unsupported_families":[],"categories":["content"],"tags":["analytics","bar","chart-chart","data","diagram","graph","infographic","measure","metrics","stacked","statistics","tracking"],"sizes_px":[20,24]},{"name":"stacked_line_chart","version":6,"popularity":8210,"codepoint":61995,"unsupported_families":[],"categories":["editor"],"tags":["analytics","chart","data","diagram","graph","infographic","line","measure","metrics","stacked","statistics","tracking"],"sizes_px":[24]},{"name":"stadium","version":1,"popularity":2425,"codepoint":60304,"unsupported_families":[],"categories":["maps"],"tags":["activity","amphitheater","arena","coliseum","event","local","stadium","star","things","ticket"],"sizes_px":[20,24]},{"name":"stairs","version":8,"popularity":4220,"codepoint":61865,"unsupported_families":[],"categories":["places"],"tags":["down","staircase","stairs","stairway","stairwell","steps","up"],"sizes_px":[24]},{"name":"star","version":22,"popularity":138673,"codepoint":59448,"unsupported_families":[],"categories":["toggle"],"tags":["best","bookmark","favorite","highlight","ranking","rate","rating","save","star","toggle"],"sizes_px":[24]},{"name":"star_border","version":19,"popularity":53937,"codepoint":59450,"unsupported_families":[],"categories":["toggle"],"tags":["best","bookmark","border","favorite","highlight","outline","ranking","rate","rating","save","star","toggle"],"sizes_px":[24]},{"name":"star_border_purple500","version":10,"popularity":7233,"codepoint":61593,"unsupported_families":[],"categories":["toggle"],"tags":["500","best","bookmark","border","favorite","highlight","outline","purple","ranking","rate","rating","save","star","toggle"],"sizes_px":[24]},{"name":"star_half","version":22,"popularity":17341,"codepoint":59449,"unsupported_families":[],"categories":["toggle"],"tags":["achievement","bookmark","favorite","half","highlight","important","marked","ranking","rate","rating rank","reward","save","saved","shape","special","star","toggle"],"sizes_px":[24]},{"name":"star_outline","version":11,"popularity":37184,"codepoint":61551,"unsupported_families":[],"categories":["toggle"],"tags":["bookmark","favorite","half","highlight","ranking","rate","rating","save","star","toggle"],"sizes_px":[24]},{"name":"star_purple500","version":10,"popularity":9703,"codepoint":61594,"unsupported_families":[],"categories":["toggle"],"tags":["500","best","bookmark","favorite","highlight","purple","ranking","rate","rating","save","star","toggle"],"sizes_px":[24]},{"name":"star_rate","version":12,"popularity":78267,"codepoint":61676,"unsupported_families":[],"categories":["action"],"tags":["achievement","bookmark","favorite","highlight","important","marked","ranking","rate","rating rank","reward","save","saved","shape","special","star"],"sizes_px":[24]},{"name":"stars","version":12,"popularity":33411,"codepoint":59600,"unsupported_families":[],"categories":["action"],"tags":["achievement","bookmark","circle","favorite","highlight","important","marked","ranking","rate","rating rank","reward","save","saved","shape","special","star"],"sizes_px":[24]},{"name":"start","version":1,"popularity":9593,"codepoint":57481,"unsupported_families":[],"categories":["hardware"],"tags":["arrow","keyboard","next","right","start"],"sizes_px":[20,24]},{"name":"stay_current_landscape","version":12,"popularity":1469,"codepoint":57555,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","current","device","hardware","iOS","landscape","mobile","phone","stay","tablet"],"sizes_px":[24]},{"name":"stay_current_portrait","version":12,"popularity":4651,"codepoint":57556,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","current","device","hardware","iOS","mobile","phone","portrait","stay","tablet"],"sizes_px":[24]},{"name":"stay_primary_landscape","version":12,"popularity":1367,"codepoint":57557,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","current","device","hardware","iOS","landscape","mobile","phone","primary","stay","tablet"],"sizes_px":[24]},{"name":"stay_primary_portrait","version":12,"popularity":3509,"codepoint":57558,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","current","device","hardware","iOS","mobile","phone","portrait","primary","stay","tablet"],"sizes_px":[24]},{"name":"sticky_note_2","version":7,"popularity":23920,"codepoint":61948,"unsupported_families":[],"categories":["action"],"tags":["2","bookmark","mark","message","note","paper","sticky","text","writing"],"sizes_px":[24]},{"name":"stop","version":12,"popularity":30029,"codepoint":57415,"unsupported_families":[],"categories":["av"],"tags":["control","controls","music","pause","play","square","stop","video"],"sizes_px":[24]},{"name":"stop_circle","version":15,"popularity":14738,"codepoint":61297,"unsupported_families":[],"categories":["av"],"tags":["circle","control","controls","music","pause","play","square","stop","video"],"sizes_px":[20,24]},{"name":"stop_screen_share","version":13,"popularity":2216,"codepoint":57571,"unsupported_families":[],"categories":["communication"],"tags":["Android","OS","arrow","cast","chrome","device","disabled","display","enabled","hardware","iOS","laptop","mac","mirror","monitor","off","offline","on","screen","share","slash","stop","stream","streaming","web","window"],"sizes_px":[24]},{"name":"storage","version":13,"popularity":26297,"codepoint":57819,"unsupported_families":[],"categories":["device"],"tags":["computer","data","drive","memory","storage"],"sizes_px":[24]},{"name":"store","version":11,"popularity":67711,"codepoint":59601,"unsupported_families":[],"categories":["action"],"tags":["bill","building","business","card","cash","coin","commerce","company","credit","currency","dollars","market","money","online","pay","payment","shop","shopping","store","storefront"],"sizes_px":[24]},{"name":"store_mall_directory","version":12,"popularity":5458,"codepoint":58723,"unsupported_families":[],"categories":["maps"],"tags":["directory","mall","store"],"sizes_px":[24]},{"name":"storefront","version":17,"popularity":51526,"codepoint":59922,"unsupported_families":[],"categories":["places"],"tags":["business","buy","cafe","commerce","front","market","places","restaurant","retail","sell","shop","shopping","store","storefront"],"sizes_px":[24]},{"name":"storm","version":10,"popularity":3191,"codepoint":61552,"unsupported_families":[],"categories":["device"],"tags":["forecast","hurricane","storm","temperature","twister","weather","wind"],"sizes_px":[24]},{"name":"straight","version":1,"popularity":3040,"codepoint":60309,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","route","sign","straight","traffic","up"],"sizes_px":[20,24]},{"name":"straighten","version":12,"popularity":15115,"codepoint":58396,"unsupported_families":[],"categories":["image"],"tags":["length","measure","measurement","ruler","size","straighten"],"sizes_px":[24]},{"name":"stream","version":11,"popularity":9461,"codepoint":59881,"unsupported_families":[],"categories":["content"],"tags":["cast","connected","feed","live","network","signal","stream","wireless"],"sizes_px":[24]},{"name":"streetview","version":12,"popularity":2117,"codepoint":58734,"unsupported_families":[],"categories":["maps"],"tags":["maps","street","streetview","view"],"sizes_px":[24]},{"name":"strikethrough_s","version":14,"popularity":3385,"codepoint":57943,"unsupported_families":[],"categories":["editor"],"tags":["alphabet","character","cross","doc","edit","editing","editor","font","letters","out","s","sheet","spreadsheet","strikethrough","styles","symbol","text","type","writing"],"sizes_px":[24]},{"name":"stroller","version":8,"popularity":1543,"codepoint":61870,"unsupported_families":[],"categories":["places"],"tags":["baby","care","carriage","child","children","infant","kid","newborn","stroller","toddler","young"],"sizes_px":[24]},{"name":"style","version":12,"popularity":16078,"codepoint":58397,"unsupported_families":[],"categories":["image"],"tags":["booklet","cards","filters","options","style","tags"],"sizes_px":[24]},{"name":"subdirectory_arrow_left","version":11,"popularity":5526,"codepoint":58841,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directory","down","left","navigation","sub","subdirectory"],"sizes_px":[24]},{"name":"subdirectory_arrow_right","version":11,"popularity":11678,"codepoint":58842,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directory","down","navigation","right","sub","subdirectory"],"sizes_px":[24]},{"name":"subject","version":13,"popularity":19960,"codepoint":59602,"unsupported_families":[],"categories":["action"],"tags":["alignment","doc","document","email","full","justify","list","note","subject","text","writing"],"sizes_px":[24]},{"name":"subscript","version":13,"popularity":1676,"codepoint":61713,"unsupported_families":[],"categories":["editor"],"tags":["2","doc","edit","editing","editor","gmail","novitas","sheet","spreadsheet","style","subscript","symbol","text","writing","x"],"sizes_px":[20,24]},{"name":"subscriptions","version":11,"popularity":14433,"codepoint":57444,"unsupported_families":[],"categories":["av"],"tags":["enroll","list","media","order","play","signup","stack","subscribe","subscriptions"],"sizes_px":[24]},{"name":"subtitles","version":12,"popularity":8160,"codepoint":57416,"unsupported_families":[],"categories":["av"],"tags":["accessible","caption","cc","character","closed","decoder","language","live caption","media","movies","subtitle","subtitles","tv"],"sizes_px":[24]},{"name":"subtitles_off","version":11,"popularity":3344,"codepoint":61298,"unsupported_families":[],"categories":["action"],"tags":["accessibility","accessible","caption","cc","closed","disabled","enabled","language","live caption","off","on","slash","subtitle","subtitles","translate","video"],"sizes_px":[20,24]},{"name":"subway","version":11,"popularity":2990,"codepoint":58735,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bike","car","cars","maps","rail","scooter","subway","train","transportation","travel","tunnel","underground","vehicle","vespa"],"sizes_px":[24]},{"name":"summarize","version":10,"popularity":41484,"codepoint":61553,"unsupported_families":[],"categories":["device"],"tags":["doc","document","form","list","menu","note","report","summary"],"sizes_px":[24]},{"name":"superscript","version":12,"popularity":2001,"codepoint":61714,"unsupported_families":[],"categories":["editor"],"tags":["2","doc","edit","editing","editor","gmail","novitas","sheet","spreadsheet","style","superscript","symbol","text","writing","x"],"sizes_px":[20,24]},{"name":"supervised_user_circle","version":12,"popularity":29434,"codepoint":59705,"unsupported_families":[],"categories":["action"],"tags":["account","avatar","circle","control","face","human","parental","parents","people","person","profile","supervised","supervisor","user"],"sizes_px":[24]},{"name":"supervisor_account","version":13,"popularity":43020,"codepoint":59603,"unsupported_families":[],"categories":["action"],"tags":["account","avatar","control","custodian","face","guardian","human","parental","parental control","parents","people","person","profile","supervised","supervisor","user"],"sizes_px":[24]},{"name":"support","version":11,"popularity":23128,"codepoint":61299,"unsupported_families":[],"categories":["action"],"tags":["assist","buoy","help","life","lifebuoy","rescue","safe","safety","support"],"sizes_px":[20,24]},{"name":"support_agent","version":12,"popularity":94739,"codepoint":61666,"unsupported_families":[],"categories":["notification"],"tags":["agent","care","customer","face","headphone","person","representative","service","support"],"sizes_px":[20,24]},{"name":"surfing","version":4,"popularity":4797,"codepoint":58645,"unsupported_families":[],"categories":["social"],"tags":["athlete","athletic","beach","body","entertainment","exercise","hobby","human","people","person","sea","social sports","sports","summer","surfing","water","wave"],"sizes_px":[20,24]},{"name":"surround_sound","version":13,"popularity":1587,"codepoint":57417,"unsupported_families":[],"categories":["av"],"tags":["circle","signal","sound","speaker","surround","system","volumn","wireless"],"sizes_px":[24]},{"name":"swap_calls","version":12,"popularity":3504,"codepoint":57559,"unsupported_families":[],"categories":["communication"],"tags":["arrow","arrows","calls","device","direction","mobile","share","swap"],"sizes_px":[24]},{"name":"swap_horiz","version":12,"popularity":33889,"codepoint":59604,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","back","forward","horizontal","swap"],"sizes_px":[24]},{"name":"swap_horizontal_circle","version":12,"popularity":7971,"codepoint":59699,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","back","circle","forward","horizontal","swap"],"sizes_px":[24]},{"name":"swap_vert","version":12,"popularity":23779,"codepoint":59605,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","direction","down","navigation","sort","sorting","swap","up","vert","vertical"],"sizes_px":[24]},{"name":"swap_vertical_circle","version":13,"popularity":5205,"codepoint":59606,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","circle","down","swap","up","vertical"],"sizes_px":[24]},{"name":"swipe","version":12,"popularity":14192,"codepoint":59884,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","fingers","gesture","hand","hands","swipe","touch"],"sizes_px":[20,24]},{"name":"swipe_down","version":1,"popularity":2249,"codepoint":60243,"unsupported_families":[],"categories":["action"],"tags":["arrows","direction","disable","down","enable","finger","hands","hit","navigation","strike","swing","swpie","take"],"sizes_px":[20,24]},{"name":"swipe_down_alt","version":1,"popularity":1460,"codepoint":60208,"unsupported_families":[],"categories":["action"],"tags":["alt","arrows","direction","disable","down","enable","finger","hands","hit","navigation","strike","swing","swpie","take"],"sizes_px":[20,24]},{"name":"swipe_left","version":1,"popularity":3300,"codepoint":60249,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","finger","hand","hit","left","navigation","reject","strike","swing","swipe","take"],"sizes_px":[20,24]},{"name":"swipe_left_alt","version":1,"popularity":1330,"codepoint":60211,"unsupported_families":[],"categories":["action"],"tags":["alt","arrow","arrows","finger","hand","hit","left","navigation","reject","strike","swing","swipe","take"],"sizes_px":[20,24]},{"name":"swipe_right","version":1,"popularity":2992,"codepoint":60242,"unsupported_families":[],"categories":["action"],"tags":["accept","arrows","direction","finger","hands","hit","navigation","right","strike","swing","swpie","take"],"sizes_px":[20,24]},{"name":"swipe_right_alt","version":1,"popularity":1838,"codepoint":60246,"unsupported_families":[],"categories":["action"],"tags":["accept","alt","arrows","direction","finger","hands","hit","navigation","right","strike","swing","swpie","take"],"sizes_px":[20,24]},{"name":"swipe_up","version":1,"popularity":2906,"codepoint":60206,"unsupported_families":[],"categories":["action"],"tags":["arrows","direction","disable","enable","finger","hands","hit","navigation","strike","swing","swpie","take","up"],"sizes_px":[20,24]},{"name":"swipe_up_alt","version":1,"popularity":1264,"codepoint":60213,"unsupported_families":[],"categories":["action"],"tags":["alt","arrows","direction","disable","enable","finger","hands","hit","navigation","strike","swing","swpie","take","up"],"sizes_px":[20,24]},{"name":"swipe_vertical","version":1,"popularity":2046,"codepoint":60241,"unsupported_families":[],"categories":["action"],"tags":["arrows","direction","finger","hands","hit","navigation","strike","swing","swpie","take","verticle"],"sizes_px":[20,24]},{"name":"switch_access_shortcut","version":3,"popularity":5230,"codepoint":59361,"unsupported_families":[],"categories":["action"],"tags":["access","arrow","arrows","direction","navigation","new","north","shortcut","switch","symbol","up"],"sizes_px":[20,24]},{"name":"switch_access_shortcut_add","version":3,"popularity":3796,"codepoint":59362,"unsupported_families":[],"categories":["action"],"tags":["+","access","add","arrow","arrows","direction","navigation","new","north","plus","shortcut","switch","symbol","up"],"sizes_px":[20,24]},{"name":"switch_account","version":11,"popularity":9046,"codepoint":59885,"unsupported_families":[],"categories":["social"],"tags":["account","choices","face","human","multiple","options","people","person","profile","social","stack","switch","user"],"sizes_px":[24]},{"name":"switch_camera","version":12,"popularity":1673,"codepoint":58398,"unsupported_families":[],"categories":["image"],"tags":["arrow","arrows","camera","photo","photography","picture","switch"],"sizes_px":[24]},{"name":"switch_left","version":8,"popularity":5140,"codepoint":61905,"unsupported_families":[],"categories":["navigation"],"tags":["arrows","directional","left","navigation","switch","toggle"],"sizes_px":[24]},{"name":"switch_right","version":9,"popularity":3995,"codepoint":61906,"unsupported_families":[],"categories":["navigation"],"tags":["arrows","directional","navigation","right","switch","toggle"],"sizes_px":[24]},{"name":"switch_video","version":12,"popularity":1651,"codepoint":58399,"unsupported_families":[],"categories":["image"],"tags":["arrow","arrows","camera","photography","switch","video","videos"],"sizes_px":[24]},{"name":"synagogue","version":2,"popularity":989,"codepoint":60080,"unsupported_families":[],"categories":["maps"],"tags":["ideology","jew","jewish","religion","shul","spiritual","temple","worship"],"sizes_px":[20,24]},{"name":"sync","version":17,"popularity":44926,"codepoint":58919,"unsupported_families":[],"categories":["notification"],"tags":["360","around","arrow","arrows","direction","inprogress","load","loading refresh","renew","rotate","sync","turn"],"sizes_px":[24]},{"name":"sync_alt","version":12,"popularity":33306,"codepoint":59928,"unsupported_families":[],"categories":["action"],"tags":["alt","arrow","arrows","horizontal","internet","sync","technology","up","update","wifi"],"sizes_px":[20,24]},{"name":"sync_disabled","version":16,"popularity":3291,"codepoint":58920,"unsupported_families":[],"categories":["notification"],"tags":["360","around","arrow","arrows","direction","disabled","enabled","inprogress","load","loading refresh","off","on","renew","rotate","slash","sync","turn"],"sizes_px":[24]},{"name":"sync_lock","version":1,"popularity":1874,"codepoint":60142,"unsupported_families":[],"categories":["notification"],"tags":["around","arrow","arrows","lock","locked","password","privacy","private","protection","renew","rotate","safety","secure","security","sync","turn"],"sizes_px":[20,24]},{"name":"sync_problem","version":21,"popularity":8670,"codepoint":58921,"unsupported_families":[],"categories":["notification"],"tags":["!","360","alert","around","arrow","arrows","attention","caution","danger","direction","error","exclamation","important","inprogress","load","loading refresh","mark","notification","problem","renew","rotate","symbol","sync","turn","warning"],"sizes_px":[24]},{"name":"system_security_update","version":10,"popularity":1510,"codepoint":61554,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","arrow","cell","device","down","hardware","iOS","mobile","phone","security","system","tablet","update"],"sizes_px":[24]},{"name":"system_security_update_good","version":10,"popularity":3946,"codepoint":61555,"unsupported_families":[],"categories":["device"],"tags":["Android","OS","approve","cell","check","complete","device","done","good","hardware","iOS","mark","mobile","ok","phone","security","select","system","tablet","tick","update","validate","verified","yes"],"sizes_px":[24]},{"name":"system_security_update_warning","version":10,"popularity":1526,"codepoint":61556,"unsupported_families":[],"categories":["device"],"tags":["!","Android","OS","alert","attention","caution","cell","danger","device","error","exclamation","hardware","iOS","important","mark","mobile","notification","phone","security","symbol","system","tablet","update","warning"],"sizes_px":[24]},{"name":"system_update","version":12,"popularity":4634,"codepoint":58922,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS","arrow","arrows","cell","device","direction","down","download","hardware","iOS","install","mobile","phone","system","tablet","update"],"sizes_px":[24]},{"name":"system_update_alt","version":13,"popularity":10893,"codepoint":59607,"unsupported_families":[],"categories":["action"],"tags":["arrow","down","download","export","system","update"],"sizes_px":[24]},{"name":"tab","version":12,"popularity":7213,"codepoint":59608,"unsupported_families":[],"categories":["action"],"tags":["browser","computer","document","documents","folder","internet","tab","tabs","web","website","window","windows"],"sizes_px":[24]},{"name":"tab_unselected","version":12,"popularity":2540,"codepoint":59609,"unsupported_families":[],"categories":["action"],"tags":["browser","computer","dash","dashed","document","documents","folder","internet","tab","tabs","unselected","web","website","window","windows"],"sizes_px":[24]},{"name":"table_bar","version":2,"popularity":3001,"codepoint":60114,"unsupported_families":[],"categories":["search"],"tags":["bar","cafe","round","table"],"sizes_px":[20,24]},{"name":"table_chart","version":12,"popularity":20835,"codepoint":57957,"unsupported_families":[],"categories":["editor"],"tags":["analytics","bar","bars","chart","data","diagram","graph","infographic grid","measure","metrics","statistics","table","tracking"],"sizes_px":[24]},{"name":"table_restaurant","version":2,"popularity":4138,"codepoint":60102,"unsupported_families":[],"categories":["search"],"tags":["bar","dining","table"],"sizes_px":[20,24]},{"name":"table_rows","version":17,"popularity":14346,"codepoint":61697,"unsupported_families":[],"categories":["editor"],"tags":["background","grid","layout","lines","rows","stacked","table"],"sizes_px":[20,24]},{"name":"table_view","version":8,"popularity":20383,"codepoint":61886,"unsupported_families":[],"categories":["action"],"tags":["format","grid","group","layout","multiple","table","view"],"sizes_px":[24]},{"name":"tablet","version":12,"popularity":2592,"codepoint":58159,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","device","hardware","iOS","ipad","mobile","tablet","web"],"sizes_px":[24]},{"name":"tablet_android","version":14,"popularity":3407,"codepoint":58160,"unsupported_families":[],"categories":["hardware"],"tags":["OS","android","device","hardware","iOS","ipad","mobile","tablet","web"],"sizes_px":[24]},{"name":"tablet_mac","version":12,"popularity":6521,"codepoint":58161,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","device","hardware","iOS","ipad","mobile","tablet mac","web"],"sizes_px":[24]},{"name":"tag","version":10,"popularity":19977,"codepoint":59887,"unsupported_families":[],"categories":["content"],"tags":["hash","hashtag","key","media","numbers","pound","social","tag","trend"],"sizes_px":[24]},{"name":"tag_faces","version":19,"popularity":5597,"codepoint":58400,"unsupported_families":[],"categories":["image"],"tags":["emoji","emotion","faces","happy","satisfied","smile","tag"],"sizes_px":[24]},{"name":"takeout_dining","version":16,"popularity":5582,"codepoint":60020,"unsupported_families":[],"categories":["maps"],"tags":["box","container","delivery","dining","food","meal","restaurant","takeout"],"sizes_px":[20,24]},{"name":"tap_and_play","version":12,"popularity":3085,"codepoint":58923,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS wifi","cell","connection","device","hardware","iOS","internet","mobile","network","phone","play","signal","tablet","tap","to","wireless"],"sizes_px":[24]},{"name":"tapas","version":6,"popularity":2539,"codepoint":61929,"unsupported_families":[],"categories":["places"],"tags":["appetizer","brunch","dinner","food","lunch","restaurant","snack","tapas"],"sizes_px":[24]},{"name":"task","version":10,"popularity":43978,"codepoint":61557,"unsupported_families":[],"categories":["device"],"tags":["approve","check","complete","data","doc","document","done","drive","file","folder","folders","mark","ok","page","paper","select","sheet","slide","task","tick","validate","verified","writing","yes"],"sizes_px":[24]},{"name":"task_alt","version":6,"popularity":110601,"codepoint":58086,"unsupported_families":[],"categories":["action"],"tags":["approve","check","circle","complete","done","mark","ok","select","task","tick","validate","verified","yes"],"sizes_px":[24]},{"name":"taxi_alert","version":11,"popularity":3200,"codepoint":61300,"unsupported_families":[],"categories":["maps"],"tags":["!","alert","attention","automobile","cab","car","cars","caution","danger","direction","error","exclamation","important","lyft","maps","mark","notification","public","symbol","taxi","transportation","uber","vehicle","warning","yellow"],"sizes_px":[24]},{"name":"temple_buddhist","version":2,"popularity":1183,"codepoint":60083,"unsupported_families":[],"categories":["maps"],"tags":["buddha","buddhism","buddhist","ideology","monastery","religion","spiritual","temple","worship"],"sizes_px":[20,24]},{"name":"temple_hindu","version":3,"popularity":1004,"codepoint":60079,"unsupported_families":[],"categories":["maps"],"tags":["hindu","hinduism","hindus","ideology","mandir","religion","spiritual","temple","worship"],"sizes_px":[20,24]},{"name":"terminal","version":1,"popularity":8120,"codepoint":60302,"unsupported_families":[],"categories":["action"],"tags":["application","code","emulator","program","software","terminal"],"sizes_px":[20,24]},{"name":"terrain","version":12,"popularity":5982,"codepoint":58724,"unsupported_families":[],"categories":["maps"],"tags":["geography","landscape","mountain","terrain"],"sizes_px":[24]},{"name":"text_decrease","version":1,"popularity":1624,"codepoint":60125,"unsupported_families":[],"categories":["editor"],"tags":["-","alphabet","character","decrease","font","letters","minus","remove","resize","subtract","symbol","text","type"],"sizes_px":[20,24]},{"name":"text_fields","version":14,"popularity":14544,"codepoint":57954,"unsupported_families":[],"categories":["editor"],"tags":["T","add","alphabet","character","field","fields","font","input","letters","symbol","text","type"],"sizes_px":[24]},{"name":"text_format","version":12,"popularity":6896,"codepoint":57701,"unsupported_families":[],"categories":["content"],"tags":["alphabet","character","font","format","letters","square A","style","symbol","text","type"],"sizes_px":[24]},{"name":"text_increase","version":1,"popularity":2673,"codepoint":60130,"unsupported_families":[],"categories":["editor"],"tags":["+","add","alphabet","character","font","increase","letters","new","plus","resize","symbol","text","type"],"sizes_px":[20,24]},{"name":"text_rotate_up","version":12,"popularity":1644,"codepoint":59706,"unsupported_families":[],"categories":["action"],"tags":["A","alphabet","arrow","character","field","font","letters","move","rotate","symbol","text","type","up"],"sizes_px":[24]},{"name":"text_rotate_vertical","version":12,"popularity":2397,"codepoint":59707,"unsupported_families":[],"categories":["action"],"tags":["A","alphabet","arrow","character","down","field","font","letters","move","rotate","symbol","text","type","vertical"],"sizes_px":[24]},{"name":"text_rotation_angledown","version":12,"popularity":1639,"codepoint":59708,"unsupported_families":[],"categories":["action"],"tags":["A","alphabet","angledown","arrow","character","field","font","letters","move","rotate","symbol","text","type"],"sizes_px":[24]},{"name":"text_rotation_angleup","version":12,"popularity":1614,"codepoint":59709,"unsupported_families":[],"categories":["action"],"tags":["A","alphabet","angleup","arrow","character","field","font","letters","move","rotate","symbol","text","type"],"sizes_px":[24]},{"name":"text_rotation_down","version":12,"popularity":1599,"codepoint":59710,"unsupported_families":[],"categories":["action"],"tags":["A","alphabet","arrow","character","dow","field","font","letters","move","rotate","symbol","text","type"],"sizes_px":[24]},{"name":"text_rotation_none","version":12,"popularity":2264,"codepoint":59711,"unsupported_families":[],"categories":["action"],"tags":["A","alphabet","arrow","character","field","font","letters","move","none","rotate","symbol","text","type"],"sizes_px":[24]},{"name":"text_snippet","version":8,"popularity":31802,"codepoint":61894,"unsupported_families":[],"categories":["file"],"tags":["data","doc","document","file","note","notes","snippet","storage","text","writing"],"sizes_px":[24]},{"name":"textsms","version":12,"popularity":31257,"codepoint":57560,"unsupported_families":[],"categories":["communication"],"tags":["bubble","chat","comment","communicate","dots","feedback","message","speech","textsms"],"sizes_px":[24]},{"name":"texture","version":12,"popularity":3766,"codepoint":58401,"unsupported_families":[],"categories":["image"],"tags":["diagonal","lines","pattern","stripes","texture"],"sizes_px":[24]},{"name":"theater_comedy","version":11,"popularity":6990,"codepoint":60006,"unsupported_families":[],"categories":["maps"],"tags":["broadway","comedy","event","mask","masks","movie","musical","places","show","standup","theater","tour","watch"],"sizes_px":[20,24]},{"name":"theaters","version":12,"popularity":11821,"codepoint":59610,"unsupported_families":[],"categories":["action"],"tags":["film","movie","movies","show","showtimes","theater","theaters","watch"],"sizes_px":[24]},{"name":"thermostat","version":11,"popularity":22792,"codepoint":61558,"unsupported_families":[],"categories":["device"],"tags":["climate","forecast","temperature","thermostat","weather"],"sizes_px":[24]},{"name":"thermostat_auto","version":10,"popularity":2790,"codepoint":61559,"unsupported_families":[],"categories":["image"],"tags":["A","auto","celsius","fahrenheit","meter","temp","temperature","thermometer","thermostat"],"sizes_px":[24]},{"name":"thumb_down","version":19,"popularity":25107,"codepoint":59611,"unsupported_families":[],"categories":["action"],"tags":["ate","dislike","down","favorite","fingers","gesture","hand","hands","like","rank","ranking","rating","thumb"],"sizes_px":[24]},{"name":"thumb_down_alt","version":11,"popularity":11422,"codepoint":59414,"unsupported_families":[],"categories":["social"],"tags":["bad","decline","disapprove","dislike","down","feedback","hate","negative","no","reject","social","thumb","veto","vote"],"sizes_px":[24]},{"name":"thumb_down_off_alt","version":13,"popularity":11625,"codepoint":59890,"unsupported_families":[],"categories":["action"],"tags":["disabled","dislike","down","enabled","favorite","filled","fingers","gesture","hand","hands","like","off","offline","on","rank","ranking","rate","rating","slash","thumb"],"sizes_px":[24]},{"name":"thumb_up","version":19,"popularity":144618,"codepoint":59612,"unsupported_families":[],"categories":["action"],"tags":["favorite","fingers","gesture","hand","hands","like","rank","ranking","rate","rating","thumb","up"],"sizes_px":[24]},{"name":"thumb_up_alt","version":11,"popularity":35741,"codepoint":59415,"unsupported_families":[],"categories":["social"],"tags":["agreed","approved","confirm","correct","favorite","feedback","good","happy","like","okay","positive","satisfaction","social","thumb","up","vote","yes"],"sizes_px":[24]},{"name":"thumb_up_off_alt","version":13,"popularity":41153,"codepoint":59891,"unsupported_families":[],"categories":["action"],"tags":["alt","disabled","enabled","favorite","fingers","gesture","hand","hands","like","off","offline","on","rank","ranking","rate","rating","slash","thumb","up"],"sizes_px":[24]},{"name":"thumbs_up_down","version":12,"popularity":11958,"codepoint":59613,"unsupported_families":[],"categories":["action"],"tags":["dislike","down","favorite","fingers","gesture","hands","like","rate","rating","thumbs","up"],"sizes_px":[24]},{"name":"thunderstorm","version":1,"popularity":2973,"codepoint":60379,"unsupported_families":[],"categories":["social"],"tags":["bolt","climate","cloud","cloudy","lightning","rain","rainfall","rainstorm","storm","thunder","thunderstorm","weather"],"sizes_px":[20,24]},{"name":"time_to_leave","version":12,"popularity":8180,"codepoint":58924,"unsupported_families":[],"categories":["notification"],"tags":["automobile","car","cars","destination","direction","drive","estimate","eta","maps","public","transportation","travel","trip","vehicle"],"sizes_px":[24]},{"name":"timelapse","version":12,"popularity":10382,"codepoint":58402,"unsupported_families":[],"categories":["image"],"tags":["duration","motion","photo","time","timelapse","timer","video"],"sizes_px":[24]},{"name":"timeline","version":13,"popularity":33708,"codepoint":59682,"unsupported_families":[],"categories":["action"],"tags":["data","history","line","movement","point","points","timeline","tracking","trending","zigzag"],"sizes_px":[24]},{"name":"timer","version":13,"popularity":47675,"codepoint":58405,"unsupported_families":[],"categories":["image"],"tags":["alarm","alert","bell","clock","disabled","duration","enabled","notification","time","timer","watch"],"sizes_px":[20,24]},{"name":"timer_10","version":12,"popularity":1242,"codepoint":58403,"unsupported_families":[],"categories":["image"],"tags":["10","alarm","alert","bell","clock","digits","disabled","duration","enabled","notification","numbers","seconds","ten","time","timer","watch"],"sizes_px":[24]},{"name":"timer_10_select","version":15,"popularity":1056,"codepoint":61562,"unsupported_families":[],"categories":["device"],"tags":["10","alphabet","camera","character","digit","font","letters","numbers","seconds","select","symbol","ten","text","timer","type"],"sizes_px":[24]},{"name":"timer_3","version":12,"popularity":1028,"codepoint":58404,"unsupported_families":[],"categories":["image"],"tags":["3","digits","duration","numbers","seconds","three","time","timer"],"sizes_px":[24]},{"name":"timer_3_select","version":15,"popularity":864,"codepoint":61563,"unsupported_families":[],"categories":["device"],"tags":["3","alphabet","camera","character","digit","font","letters","numbers","seconds","select","symbol","text","three","timer","type"],"sizes_px":[24]},{"name":"timer_off","version":13,"popularity":3666,"codepoint":58406,"unsupported_families":[],"categories":["image"],"tags":["alarm","alert","bell","clock","disabled","duration","enabled","notification","off","on","slash","stop","time","timer","watch"],"sizes_px":[20,24]},{"name":"tips_and_updates","version":3,"popularity":34617,"codepoint":59290,"unsupported_families":[],"categories":["action"],"tags":["ai","alert","and","announcement","artificial","automatic","automation","custom","electricity","genai","idea","info","information","intelligence","light","lightbulb","magic","smart","spark","sparkle","star","tips","updates"],"sizes_px":[20,24]},{"name":"tire_repair","version":1,"popularity":1360,"codepoint":60360,"unsupported_families":[],"categories":["maps"],"tags":["auto","automobile","car","cars","gauge","mechanic","pressure","repair","tire","vehicle"],"sizes_px":[20,24]},{"name":"title","version":11,"popularity":14098,"codepoint":57956,"unsupported_families":[],"categories":["editor"],"tags":["T","alphabet","character","font","header","letters","subject","symbol","text","title","type"],"sizes_px":[24]},{"name":"toc","version":13,"popularity":18737,"codepoint":59614,"unsupported_families":[],"categories":["action"],"tags":["content","format","lines","list","order","reorder","stacked","table","title","titles","toc"],"sizes_px":[24]},{"name":"today","version":17,"popularity":64549,"codepoint":59615,"unsupported_families":[],"categories":["action"],"tags":["calendar","date","day","event","mark","month","remember","reminder","schedule","time","today"],"sizes_px":[24]},{"name":"toggle_off","version":12,"popularity":30717,"codepoint":59893,"unsupported_families":[],"categories":["toggle"],"tags":["active","app","application","components","configuration","control","design","disable","inable","inactive","interface","off","on","selection","settings","site","slider","switch","toggle","ui","ux","web","website"],"sizes_px":[24]},{"name":"toggle_on","version":12,"popularity":50577,"codepoint":59894,"unsupported_families":[],"categories":["toggle"],"tags":["active","app","application","components","configuration","control","design","disable","inable","inactive","interface","off","on","selection","settings","site","slider","switch","toggle","ui","ux","web","website"],"sizes_px":[24]},{"name":"token","version":2,"popularity":7171,"codepoint":59941,"unsupported_families":[],"categories":["action"],"tags":["badge","hexagon","mark","shield","sign","symbol"],"sizes_px":[20,24]},{"name":"toll","version":12,"popularity":8144,"codepoint":59616,"unsupported_families":[],"categories":["action"],"tags":["bill","booth","car","card","cash","coin","commerce","credit","currency","dollars","highway","money","online","pay","payment","ticket","toll"],"sizes_px":[24]},{"name":"tonality","version":12,"popularity":2284,"codepoint":58407,"unsupported_families":[],"categories":["image"],"tags":["circle","edit","editing","filter","greyscale","image","photography","picture","shade","shadow","tonality"],"sizes_px":[24]},{"name":"topic","version":7,"popularity":10281,"codepoint":61896,"unsupported_families":[],"categories":["file"],"tags":["data","doc","document","drive","file","folder","sheet","slide","storage","topic"],"sizes_px":[24]},{"name":"tornado","version":1,"popularity":933,"codepoint":57753,"unsupported_families":[],"categories":["social"],"tags":["crisis","disaster","natural","rain","storm","tornado","weather","wind"],"sizes_px":[20,24]},{"name":"touch_app","version":13,"popularity":43015,"codepoint":59667,"unsupported_families":[],"categories":["action"],"tags":["app","command","fingers","gesture","hand","press","tap","touch"],"sizes_px":[24]},{"name":"tour","version":12,"popularity":10083,"codepoint":61301,"unsupported_families":[],"categories":["action"],"tags":["destination","flag","places","tour","travel","visit"],"sizes_px":[24]},{"name":"toys","version":14,"popularity":4444,"codepoint":58162,"unsupported_families":[],"categories":["hardware"],"tags":["car","games","kids","toy","toys","windmill"],"sizes_px":[20,24]},{"name":"track_changes","version":11,"popularity":18672,"codepoint":59617,"unsupported_families":[],"categories":["action"],"tags":["bullseye","changes","circle","evolve","lines","movement","rotate","shift","target","track"],"sizes_px":[24]},{"name":"traffic","version":12,"popularity":10151,"codepoint":58725,"unsupported_families":[],"categories":["maps"],"tags":["direction","light","maps","signal","street","traffic"],"sizes_px":[24]},{"name":"train","version":11,"popularity":12287,"codepoint":58736,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"tram","version":11,"popularity":3239,"codepoint":58737,"unsupported_families":[],"categories":["maps"],"tags":["automobile","car","cars","direction","maps","public","rail","railway","subway","train","tram","transit","transportation","trolley","vehicle"],"sizes_px":[24]},{"name":"transcribe","version":1,"popularity":871,"codepoint":63724,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"transfer_within_a_station","version":12,"popularity":6434,"codepoint":58738,"unsupported_families":[],"categories":["maps"],"tags":["a","arrow","arrows","body","direction","human","left","maps","people","person","public","right","route","station","stop","transfer","transportation","vehicle","walk","within"],"sizes_px":[24]},{"name":"transform","version":12,"popularity":3576,"codepoint":58408,"unsupported_families":[],"categories":["image"],"tags":["adjust","crop","edit","editing","image","photo","picture","transform"],"sizes_px":[24]},{"name":"transgender","version":3,"popularity":5763,"codepoint":58765,"unsupported_families":[],"categories":["social"],"tags":["female","gender","lgbt","male","neutral","social","symbol","transgender"],"sizes_px":[20,24]},{"name":"transit_enterexit","version":12,"popularity":2888,"codepoint":58745,"unsupported_families":[],"categories":["maps"],"tags":["arrow","direction","enterexit","maps","navigation","route","transit","transportation"],"sizes_px":[24]},{"name":"translate","version":16,"popularity":30139,"codepoint":59618,"unsupported_families":[],"categories":["action"],"tags":["language","speaking","speech","translate","translator","words"],"sizes_px":[24]},{"name":"travel_explore","version":8,"popularity":34283,"codepoint":58075,"unsupported_families":[],"categories":["social"],"tags":["browser","earth","explore","find","glass","global","globe","look","magnify","magnifying","map","network","planet","search","see","social","space","travel","web","world"],"sizes_px":[20,24]},{"name":"trending_down","version":18,"popularity":14908,"codepoint":59619,"unsupported_families":[],"categories":["action"],"tags":["analytics","arrow","data","diagram","down","graph","infographic","measure","metrics","movement","rate","rating","statistics","tracking","trending"],"sizes_px":[24]},{"name":"trending_flat","version":19,"popularity":26111,"codepoint":59620,"unsupported_families":[],"categories":["action"],"tags":["arrow","change","data","flat","metric","movement","rate","right","track","tracking","trending"],"sizes_px":[24]},{"name":"trending_up","version":19,"popularity":88979,"codepoint":59621,"unsupported_families":[],"categories":["action"],"tags":["analytics","arrow","data","diagram","graph","infographic","measure","metrics","movement","rate","rating","statistics","tracking","trending","up"],"sizes_px":[24]},{"name":"trip_origin","version":12,"popularity":7280,"codepoint":58747,"unsupported_families":[],"categories":["maps"],"tags":["circle","departure","origin","trip"],"sizes_px":[24]},{"name":"troubleshoot","version":10,"popularity":4642,"codepoint":57810,"unsupported_families":[],"categories":["action"],"tags":["analytics","chart","data","diagram","find","glass","graph","infographic","line","look","magnify","magnifying","measure","metrics","search","see","statistics","tracking","troubleshoot"],"sizes_px":[20,24]},{"name":"try","version":9,"popularity":6496,"codepoint":61564,"unsupported_families":[],"categories":["action"],"tags":["bookmark","bubble","chat","comment","communicate","favorite","feedback","highlight","important","marked","message","save","saved","shape","special","speech","star","try"],"sizes_px":[24]},{"name":"tsunami","version":1,"popularity":1059,"codepoint":60376,"unsupported_families":[],"categories":["social"],"tags":["crisis","disaster","flood","ocean","rain","sea","storm","tsunami","water","wave","weather"],"sizes_px":[20,24]},{"name":"tty","version":8,"popularity":2458,"codepoint":61866,"unsupported_families":[],"categories":["places"],"tags":["call","cell","contact","deaf","device","hardware","impaired","mobile","phone","speech","talk","telephone","text","tty"],"sizes_px":[24]},{"name":"tune","version":12,"popularity":67448,"codepoint":58409,"unsupported_families":[],"categories":["image"],"tags":["adjust","audio","controls","custom","customize","edit","editing","filter","filters","instant","mix","music","options","setting","settings","slider","sliders","switches","tune"],"sizes_px":[24]},{"name":"tungsten","version":10,"popularity":14935,"codepoint":61565,"unsupported_families":[],"categories":["device"],"tags":["balance","bright","edit","editing","electricity","indoor","iridescent","lamp","light","lightbulb","lighting","setting","settings","tungsten","white","wp"],"sizes_px":[24]},{"name":"turn_left","version":1,"popularity":1524,"codepoint":60326,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","left","maps","navigation","path","route","sign","traffic","turn"],"sizes_px":[20,24]},{"name":"turn_right","version":1,"popularity":1905,"codepoint":60331,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","right","route","sign","traffic","turn"],"sizes_px":[20,24]},{"name":"turn_sharp_left","version":1,"popularity":661,"codepoint":60327,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","left","maps","navigation","path","route","sharp","sign","traffic","turn"],"sizes_px":[20,24]},{"name":"turn_sharp_right","version":1,"popularity":943,"codepoint":60330,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","right","route","sharp","sign","traffic","turn"],"sizes_px":[20,24]},{"name":"turn_slight_left","version":1,"popularity":852,"codepoint":60324,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","right","route","sign","slight","traffic","turn"],"sizes_px":[20,24]},{"name":"turn_slight_right","version":1,"popularity":864,"codepoint":60314,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","right","route","sharp","sign","slight","traffic","turn"],"sizes_px":[20,24]},{"name":"turned_in","version":11,"popularity":9397,"codepoint":59622,"unsupported_families":[],"categories":["action"],"tags":["archive","bookmark","favorite","in","label","library","read","reading","remember","ribbon","save","tag","turned"],"sizes_px":[24]},{"name":"turned_in_not","version":11,"popularity":8397,"codepoint":59623,"unsupported_families":[],"categories":["action"],"tags":["archive","bookmark","favorite","in","label","library","not","read","reading","remember","ribbon","save","tag","turned"],"sizes_px":[24]},{"name":"tv","version":16,"popularity":15408,"codepoint":58163,"unsupported_families":[],"categories":["hardware"],"tags":["device","display","monitor","screen","screencast","stream","television","tv","video","wireless"],"sizes_px":[24]},{"name":"tv_off","version":11,"popularity":1162,"codepoint":58951,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS","chrome","desktop","device","disabled","enabled","hardware","iOS","mac","monitor","off","on","slash","television","tv","web","window"],"sizes_px":[24]},{"name":"two_wheeler","version":14,"popularity":10971,"codepoint":59897,"unsupported_families":[],"categories":["maps"],"tags":["automobile","bike","car","cars","direction","maps","motorcycle","public","scooter","sport","transportation","travel","two wheeler","vehicle"],"sizes_px":[20,24]},{"name":"type_specimen","version":1,"popularity":530,"codepoint":63728,"unsupported_families":[],"categories":["editor"],"tags":[],"sizes_px":[20,24]},{"name":"u_turn_left","version":1,"popularity":1474,"codepoint":60321,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","left","maps","navigation","path","route","sign","traffic","u-turn"],"sizes_px":[20,24]},{"name":"u_turn_right","version":1,"popularity":1055,"codepoint":60322,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","direction","directions","maps","navigation","path","right","route","sign","traffic","u-turn"],"sizes_px":[20,24]},{"name":"umbrella","version":8,"popularity":2731,"codepoint":61869,"unsupported_families":[],"categories":["places"],"tags":["beach","protection","rain","sun","sunny","umbrella"],"sizes_px":[24]},{"name":"unarchive","version":13,"popularity":8221,"codepoint":57705,"unsupported_families":[],"categories":["content"],"tags":["archive","arrow","inbox","mail","store","unarchive","undo","up"],"sizes_px":[24]},{"name":"undo","version":13,"popularity":36006,"codepoint":57702,"unsupported_families":[],"categories":["content"],"tags":["arrow","backward","mail","previous","redo","repeat","rotate","undo"],"sizes_px":[24]},{"name":"unfold_less","version":12,"popularity":13094,"codepoint":58838,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","chevron","collapse","direction","expand","expandable","inward","less","list","navigation","unfold","up"],"sizes_px":[24]},{"name":"unfold_less_double","version":1,"popularity":1013,"codepoint":63695,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","chevron","collapse","direction","double","expand","expandable","inward","less","list","navigation","unfold","up"],"sizes_px":[20,24]},{"name":"unfold_more","version":12,"popularity":34275,"codepoint":58839,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","arrows","chevron","collapse","direction","down","expand","expandable","list","more","navigation","unfold"],"sizes_px":[24]},{"name":"unfold_more_double","version":1,"popularity":1493,"codepoint":63696,"unsupported_families":[],"categories":["action"],"tags":["arrow","arrows","chevron","collapse","direction","double","down","expand","expandable","list","more","navigation","unfold"],"sizes_px":[20,24]},{"name":"unpublished","version":7,"popularity":11100,"codepoint":62006,"unsupported_families":[],"categories":["action"],"tags":["approve","check","circle","complete","disabled","done","enabled","mark","off","ok","on","select","slash","tick","unpublished","validate","verified","yes"],"sizes_px":[24]},{"name":"unsubscribe","version":12,"popularity":5808,"codepoint":57579,"unsupported_families":[],"categories":["communication"],"tags":["cancel","close","email","envelop","letters","mail","message","newsletter","off","remove","send","subscribe","unsubscribe"],"sizes_px":[24]},{"name":"upcoming","version":9,"popularity":5945,"codepoint":61566,"unsupported_families":[],"categories":["content"],"tags":["alarm","calendar","mail","message","notification","upcoming"],"sizes_px":[24]},{"name":"update","version":13,"popularity":59745,"codepoint":59683,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backwards","clock","forward","history","load","refresh","reverse","schedule","time","update"],"sizes_px":[24]},{"name":"update_disabled","version":8,"popularity":3353,"codepoint":57461,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backwards","clock","date","disabled","enabled","forward","history","load","off","on","refresh","reverse","rotate","schedule","slash","time","update"],"sizes_px":[20,24]},{"name":"upgrade","version":12,"popularity":14947,"codepoint":61691,"unsupported_families":[],"categories":["action"],"tags":["arrow","export","instal","line","replace","up","update","upgrade"],"sizes_px":[20,24]},{"name":"upload","version":10,"popularity":23867,"codepoint":61595,"unsupported_families":[],"categories":["file"],"tags":["arrow","arrows","download","drive","up","upload"],"sizes_px":[24]},{"name":"upload_file","version":10,"popularity":46411,"codepoint":59900,"unsupported_families":[],"categories":["file"],"tags":["arrow","data","doc","document","download","drive","file","folder","folders","page","paper","sheet","slide","up","upload","writing"],"sizes_px":[24]},{"name":"usb","version":12,"popularity":4829,"codepoint":57824,"unsupported_families":[],"categories":["device"],"tags":["cable","connection","device","usb","wire"],"sizes_px":[24]},{"name":"usb_off","version":4,"popularity":1135,"codepoint":58618,"unsupported_families":[],"categories":["device"],"tags":["cable","connection","device","off","usb","wire"],"sizes_px":[20,24]},{"name":"vaccines","version":2,"popularity":10136,"codepoint":57656,"unsupported_families":[],"categories":["social"],"tags":["aid","covid","doctor","drug","emergency","hospital","immunity","injection","medical","medication","medicine","needle","pharmacy","sick","syringe","vaccination","vaccines","vial"],"sizes_px":[20,24]},{"name":"vape_free","version":1,"popularity":579,"codepoint":60358,"unsupported_families":[],"categories":["places"],"tags":["disabled","e-cigarette","enabled","free","never","no","off","on","places","prohibited","slash","smoke","smoking","tobacco","vape","vaping","vapor","warning","zone"],"sizes_px":[20,24]},{"name":"vaping_rooms","version":1,"popularity":737,"codepoint":60367,"unsupported_families":[],"categories":["places"],"tags":["allowed","e-cigarette","never","no","places","prohibited","smoke","smoking","tobacco","vape","vaping","vapor","warning","zone"],"sizes_px":[20,24]},{"name":"verified","version":11,"popularity":155108,"codepoint":61302,"unsupported_families":[],"categories":["action"],"tags":["approve","badge","burst","check","complete","done","mark","ok","select","star","tick","validate","verified","yes"],"sizes_px":[20,24]},{"name":"verified_user","version":18,"popularity":84308,"codepoint":59624,"unsupported_families":[],"categories":["action"],"tags":["approve","certified","check","complete","done","mark","ok","privacy","private","protect","protection","security","select","shield","tick","user","validate","verified","yes"],"sizes_px":[24]},{"name":"vertical_align_bottom","version":12,"popularity":7839,"codepoint":57944,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","arrow","bottom","doc","down","edit","editing","editor","sheet","spreadsheet","text","type","vertical","writing"],"sizes_px":[24]},{"name":"vertical_align_center","version":12,"popularity":3334,"codepoint":57945,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","arrow","center","doc","down","edit","editing","editor","sheet","spreadsheet","text","type","up","vertical","writing"],"sizes_px":[24]},{"name":"vertical_align_top","version":12,"popularity":7280,"codepoint":57946,"unsupported_families":[],"categories":["editor"],"tags":["align","alignment","arrow","doc","edit","editing","editor","sheet","spreadsheet","text","top","type","up","vertical","writing"],"sizes_px":[24]},{"name":"vertical_distribute","version":6,"popularity":2092,"codepoint":57462,"unsupported_families":[],"categories":["editor"],"tags":["alignment","distribute","format","layout","lines","paragraph","rule","rules","style","text","vertical"],"sizes_px":[24]},{"name":"vertical_shades","version":1,"popularity":653,"codepoint":60430,"unsupported_families":[],"categories":["home"],"tags":["blinds","cover","curtains","nest","open","shade","shutter","sunshade","vertical"],"sizes_px":[20,24]},{"name":"vertical_shades_closed","version":1,"popularity":650,"codepoint":60429,"unsupported_families":[],"categories":["home"],"tags":["blinds","closed","cover","curtains","nest","roller","shade","shutter","sunshade"],"sizes_px":[20,24]},{"name":"vertical_split","version":15,"popularity":7802,"codepoint":59721,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","layout","paragraph","split","text","vertical","website","writing"],"sizes_px":[24]},{"name":"vibration","version":12,"popularity":3880,"codepoint":58925,"unsupported_families":[],"categories":["notification"],"tags":["Android","OS","alert","cell","device","hardware","iOS","mobile","mode","motion","notification","phone","silence","silent","tablet","vibrate","vibration"],"sizes_px":[24]},{"name":"video_call","version":11,"popularity":14238,"codepoint":57456,"unsupported_families":[],"categories":["av"],"tags":["+","add","call","camera","chat","conference","film","filming","hardware","image","motion","new","picture","plus","symbol","video","videography"],"sizes_px":[24]},{"name":"video_camera_back","version":10,"popularity":3590,"codepoint":61567,"unsupported_families":[],"categories":["image"],"tags":["back","camera","image","landscape","mountain","mountains","photo","photography","picture","rear","video"],"sizes_px":[24]},{"name":"video_camera_front","version":10,"popularity":10425,"codepoint":61568,"unsupported_families":[],"categories":["image"],"tags":["account","camera","face","front","human","image","people","person","photo","photography","picture","profile","user","video"],"sizes_px":[24]},{"name":"video_chat","version":1,"popularity":676,"codepoint":63648,"unsupported_families":[],"categories":["notification"],"tags":["bubble","cam","camera","chat","comment","communicate","facetime","feedback","message","speech","video","voice"],"sizes_px":[20,24]},{"name":"video_file","version":1,"popularity":2355,"codepoint":60295,"unsupported_families":[],"categories":["av"],"tags":["camera","doc","document","film","filming","hardware","image","motion","picture","video","videography"],"sizes_px":[20,24]},{"name":"video_label","version":11,"popularity":1943,"codepoint":57457,"unsupported_families":[],"categories":["av"],"tags":["label","screen","video","window"],"sizes_px":[24]},{"name":"video_library","version":13,"popularity":17138,"codepoint":57418,"unsupported_families":[],"categories":["av"],"tags":["arrow","collection","library","play","video"],"sizes_px":[24]},{"name":"video_settings","version":12,"popularity":5137,"codepoint":60021,"unsupported_families":[],"categories":["av"],"tags":["change","details","gear","info","information","options","play","screen","service","setting","settings","video","window"],"sizes_px":[20,24]},{"name":"video_stable","version":10,"popularity":1230,"codepoint":61569,"unsupported_families":[],"categories":["image"],"tags":["film","filming","recording","setting","stability","stable","taping","video"],"sizes_px":[24]},{"name":"videocam","version":16,"popularity":67396,"codepoint":57419,"unsupported_families":[],"categories":["av"],"tags":["cam","camera","conference","film","filming","hardware","image","motion","picture","video","videography"],"sizes_px":[24]},{"name":"videocam_off","version":12,"popularity":9444,"codepoint":57420,"unsupported_families":[],"categories":["av"],"tags":["cam","camera","conference","disabled","enabled","film","filming","hardware","image","motion","off","offline","on","picture","slash","video","videography"],"sizes_px":[24]},{"name":"videogame_asset","version":11,"popularity":9222,"codepoint":58168,"unsupported_families":[],"categories":["hardware"],"tags":["asset","console","control","controller","device","entertainment","esports","game","gamepad","gaming","google","handheld","hardware","hobby","online","playstation","remote","social","sports","stadia","video","video game","videogame","xbox"],"sizes_px":[24]},{"name":"videogame_asset_off","version":4,"popularity":1043,"codepoint":58624,"unsupported_families":[],"categories":["hardware"],"tags":["asset","console","control","controller","device","disabled","enabled","entertainment","esports","game","gamepad","gaming","google","handheld","hardware","hobby","off","on","online","playstation","remote","slash","social","sports","stadia","video","video game","videogame","xbox"],"sizes_px":[20,24]},{"name":"view_agenda","version":14,"popularity":11688,"codepoint":59625,"unsupported_families":[],"categories":["action"],"tags":["agenda","cards","design","format","grid","layout","stacked","view","website"],"sizes_px":[20,24]},{"name":"view_array","version":13,"popularity":2834,"codepoint":59626,"unsupported_families":[],"categories":["action"],"tags":["array","design","format","grid","layout","view","website"],"sizes_px":[20,24]},{"name":"view_carousel","version":13,"popularity":8676,"codepoint":59627,"unsupported_families":[],"categories":["action"],"tags":["cards","carousel","design","format","grid","layout","view","website"],"sizes_px":[20,24]},{"name":"view_column","version":13,"popularity":13166,"codepoint":59628,"unsupported_families":[],"categories":["action"],"tags":["column","design","format","grid","layout","vertical","view","website"],"sizes_px":[20,24]},{"name":"view_comfy","version":14,"popularity":5113,"codepoint":58410,"unsupported_families":[],"categories":["image"],"tags":["comfy","grid","layout","pattern","squares","view"],"sizes_px":[20,24]},{"name":"view_comfy_alt","version":1,"popularity":1605,"codepoint":60275,"unsupported_families":[],"categories":["action"],"tags":["alt","comfy","cozy","design","format","layout","view","web"],"sizes_px":[20,24]},{"name":"view_compact","version":13,"popularity":3879,"codepoint":58411,"unsupported_families":[],"categories":["image"],"tags":["compact","grid","layout","pattern","squares","view"],"sizes_px":[20,24]},{"name":"view_compact_alt","version":1,"popularity":1508,"codepoint":60276,"unsupported_families":[],"categories":["action"],"tags":["alt","compact","design","format","layout dense","view","web"],"sizes_px":[20,24]},{"name":"view_cozy","version":1,"popularity":1966,"codepoint":60277,"unsupported_families":[],"categories":["action"],"tags":["comfy","cozy","design","format","layout","view","web"],"sizes_px":[20,24]},{"name":"view_day","version":13,"popularity":5040,"codepoint":59629,"unsupported_families":[],"categories":["action"],"tags":["cards","carousel","day","design","format","grid","layout","view","website"],"sizes_px":[24]},{"name":"view_headline","version":11,"popularity":22156,"codepoint":59630,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","headline","layout","paragraph","text","view","website"],"sizes_px":[24]},{"name":"view_in_ar","version":11,"popularity":35648,"codepoint":59902,"unsupported_families":[],"categories":["action"],"tags":["3d","ar","augmented","cube","daydream","headset","in","reality","square","view","virtual_reality","vr"],"sizes_px":[24]},{"name":"view_kanban","version":1,"popularity":2358,"codepoint":60287,"unsupported_families":[],"categories":["action"],"tags":["grid","kanban","layout","pattern","squares","view"],"sizes_px":[20,24]},{"name":"view_list","version":14,"popularity":68973,"codepoint":59631,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","layout","lines","list","stacked","view","website"],"sizes_px":[20,24]},{"name":"view_module","version":13,"popularity":18434,"codepoint":59632,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","layout","module","square","squares","stacked","view","website"],"sizes_px":[20,24]},{"name":"view_quilt","version":14,"popularity":8623,"codepoint":59633,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","layout","quilt","square","squares","stacked","view","website"],"sizes_px":[20,24]},{"name":"view_sidebar","version":13,"popularity":7952,"codepoint":61716,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","layout","sidebar","view","web"],"sizes_px":[20,24]},{"name":"view_stream","version":13,"popularity":7232,"codepoint":59634,"unsupported_families":[],"categories":["action"],"tags":["design","format","grid","layout","lines","list","stacked","stream","view","website"],"sizes_px":[20,24]},{"name":"view_timeline","version":1,"popularity":5302,"codepoint":60293,"unsupported_families":[],"categories":["action"],"tags":["grid","layout","pattern","squares","timeline","view"],"sizes_px":[20,24]},{"name":"view_week","version":13,"popularity":10410,"codepoint":59635,"unsupported_families":[],"categories":["action"],"tags":["bars","columns","design","format","grid","layout","view","website","week"],"sizes_px":[20,24]},{"name":"vignette","version":12,"popularity":1144,"codepoint":58421,"unsupported_families":[],"categories":["image"],"tags":["border","edit","editing","filter","gradient","image","photo","photography","setting","vignette"],"sizes_px":[24]},{"name":"villa","version":4,"popularity":5183,"codepoint":58758,"unsupported_families":[],"categories":["places"],"tags":["architecture","beach","estate","home","house","maps","place","real","residence","residential","traveling","vacation stay","villa"],"sizes_px":[20,24]},{"name":"visibility","version":16,"popularity":318225,"codepoint":59636,"unsupported_families":[],"categories":["action"],"tags":["eye","on","reveal","see","show","view","visibility"],"sizes_px":[24]},{"name":"visibility_off","version":12,"popularity":129082,"codepoint":59637,"unsupported_families":[],"categories":["action"],"tags":["disabled","enabled","eye","off","on","reveal","see","show","slash","view","visibility"],"sizes_px":[24]},{"name":"voice_chat","version":13,"popularity":3991,"codepoint":58926,"unsupported_families":[],"categories":["notification"],"tags":["bubble","cam","camera","chat","comment","communicate","facetime","feedback","message","speech","video","voice"],"sizes_px":[24]},{"name":"voice_over_off","version":11,"popularity":3191,"codepoint":59722,"unsupported_families":[],"categories":["action"],"tags":["account","disabled","enabled","face","human","mute","off","on","over","people","person","profile","recording","slash","speak","speaking","speech","transcript","user","voice"],"sizes_px":[24]},{"name":"voicemail","version":12,"popularity":3328,"codepoint":57561,"unsupported_families":[],"categories":["communication"],"tags":["call","device","message","missed","mobile","phone","recording","voice","voicemail"],"sizes_px":[24]},{"name":"volcano","version":1,"popularity":758,"codepoint":60378,"unsupported_families":[],"categories":["social"],"tags":["crisis","disaster","eruption","lava","magma","natural","volcano"],"sizes_px":[20,24]},{"name":"volume_down","version":13,"popularity":9692,"codepoint":57421,"unsupported_families":[],"categories":["av"],"tags":["audio","control","down","music","sound","speaker","tv","volume"],"sizes_px":[24]},{"name":"volume_mute","version":13,"popularity":14349,"codepoint":57422,"unsupported_families":[],"categories":["av"],"tags":["audio","control","music","mute","sound","speaker","tv","volume"],"sizes_px":[24]},{"name":"volume_off","version":17,"popularity":33103,"codepoint":57423,"unsupported_families":[],"categories":["av"],"tags":["audio","control","disabled","enabled","low","music","mute","off","on","slash","sound","speaker","tv","volume"],"sizes_px":[24]},{"name":"volume_up","version":14,"popularity":60522,"codepoint":57424,"unsupported_families":[],"categories":["av"],"tags":["audio","control","music","sound","speaker","tv","up","volume"],"sizes_px":[24]},{"name":"volunteer_activism","version":10,"popularity":37105,"codepoint":60016,"unsupported_families":[],"categories":["maps"],"tags":["activism","donation","fingers","gesture","giving","hand","hands","heart","love","sharing","volunteer"],"sizes_px":[20,24]},{"name":"vpn_key","version":12,"popularity":48227,"codepoint":57562,"unsupported_families":[],"categories":["communication"],"tags":["access","code","door","entry","key","lock","network","passcode","password","unlock","vpn"],"sizes_px":[24]},{"name":"vpn_key_off","version":1,"popularity":1145,"codepoint":60282,"unsupported_families":[],"categories":["communication"],"tags":["access","code","disabled","door","enabled","entry","key","lock","network","off","offline","on","passcode","password","slash","unlock","vpn"],"sizes_px":[20,24]},{"name":"vpn_lock","version":17,"popularity":7026,"codepoint":58927,"unsupported_families":[],"categories":["notification"],"tags":["earth","globe","lock","locked","network","password","privacy","private","protection","safety","secure","security","virtual","vpn","world"],"sizes_px":[24]},{"name":"vrpano","version":10,"popularity":2562,"codepoint":61570,"unsupported_families":[],"categories":["image"],"tags":["angle","image","landscape","mountain","mountains","panorama","photo","photography","picture","view","vrpano","wide"],"sizes_px":[24]},{"name":"wallet","version":1,"popularity":5873,"codepoint":63743,"unsupported_families":[],"categories":["social"],"tags":[],"sizes_px":[20,24]},{"name":"wallpaper","version":13,"popularity":7612,"codepoint":57788,"unsupported_families":[],"categories":["device"],"tags":["background","dash","dashed","image","landscape","photo","photography","picture","wallpaper"],"sizes_px":[24]},{"name":"warehouse","version":1,"popularity":9878,"codepoint":60344,"unsupported_families":[],"categories":["maps"],"tags":["garage","industry","manufacturing","storage","warehouse"],"sizes_px":[20,24]},{"name":"warning","version":17,"popularity":123864,"codepoint":57346,"unsupported_families":[],"categories":["alert"],"tags":["!","alert","attention","caution","danger","error","exclamation","important","mark","notification","symbol","triangle","warning"],"sizes_px":[24]},{"name":"warning_amber","version":16,"popularity":54157,"codepoint":61571,"unsupported_families":[],"categories":["alert"],"tags":["!","alert","amber","attention","caution","danger","error","exclamation","important","mark","notification","symbol","triangle","warning"],"sizes_px":[24]},{"name":"wash","version":8,"popularity":3512,"codepoint":61873,"unsupported_families":[],"categories":["places"],"tags":["bathroom","clean","fingers","gesture","hand","wash","wc"],"sizes_px":[24]},{"name":"watch","version":12,"popularity":6789,"codepoint":58164,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","ar","clock","gadget","iOS","time","vr","watch","wearables","web","wristwatch"],"sizes_px":[24]},{"name":"watch_later","version":17,"popularity":61052,"codepoint":59684,"unsupported_families":[],"categories":["action"],"tags":["clock","date","later","schedule","time","watch"],"sizes_px":[24]},{"name":"watch_off","version":1,"popularity":701,"codepoint":60131,"unsupported_families":[],"categories":["hardware"],"tags":["Android","OS","ar","clock","close","gadget","iOS","off","shut","time","vr","watch","wearables","web","wristwatch"],"sizes_px":[20,24]},{"name":"water","version":11,"popularity":9582,"codepoint":61572,"unsupported_families":[],"categories":["device"],"tags":["aqua","beach","lake","ocean","river","water","waves","weather"],"sizes_px":[24]},{"name":"water_damage","version":6,"popularity":3115,"codepoint":61955,"unsupported_families":[],"categories":["places"],"tags":["architecture","building","damage","drop","droplet","estate","house","leak","plumbing","real","residence","residential","shelter","water"],"sizes_px":[24]},{"name":"water_drop","version":3,"popularity":34005,"codepoint":59288,"unsupported_families":[],"categories":["social"],"tags":["drink","drop","droplet","eco","liquid","nature","ocean","rain","social","water"],"sizes_px":[20,24]},{"name":"waterfall_chart","version":11,"popularity":5165,"codepoint":59904,"unsupported_families":[],"categories":["navigation"],"tags":["analytics","bar","chart","data","diagram","graph","infographic","measure","metrics","statistics","tracking","waterfall"],"sizes_px":[24]},{"name":"waves","version":11,"popularity":8746,"codepoint":57718,"unsupported_families":[],"categories":["content"],"tags":["beach","lake","ocean","pool","river","sea","swim","water","wave","waves"],"sizes_px":[24]},{"name":"waving_hand","version":3,"popularity":11346,"codepoint":59238,"unsupported_families":[],"categories":["social"],"tags":["bye","fingers","gesture","goodbye","greetings","hand","hello","palm","wave","waving"],"sizes_px":[20,24]},{"name":"wb_auto","version":12,"popularity":837,"codepoint":58412,"unsupported_families":[],"categories":["image"],"tags":["A","W","alphabet","auto","automatic","balance","character","edit","editing","font","image","letters","photo","photography","symbol","text","type","white","wp"],"sizes_px":[24]},{"name":"wb_cloudy","version":12,"popularity":6529,"codepoint":58413,"unsupported_families":[],"categories":["image"],"tags":["balance","cloud","cloudy","edit","editing","white","wp"],"sizes_px":[24]},{"name":"wb_incandescent","version":12,"popularity":6989,"codepoint":58414,"unsupported_families":[],"categories":["image"],"tags":["balance","bright","edit","editing","incandescent","light","lighting","setting","settings","white","wp"],"sizes_px":[24]},{"name":"wb_iridescent","version":11,"popularity":1561,"codepoint":58422,"unsupported_families":[],"categories":["image"],"tags":["balance","bright","edit","editing","electricity","indoor","iridescent","lamp","light","lightbulb","lighting","setting","settings","tungsten","white","wp"],"sizes_px":[24]},{"name":"wb_shade","version":10,"popularity":1185,"codepoint":59905,"unsupported_families":[],"categories":["image"],"tags":["balance","house","light","lighting","shade","wb","white"],"sizes_px":[24]},{"name":"wb_sunny","version":12,"popularity":23106,"codepoint":58416,"unsupported_families":[],"categories":["image"],"tags":["balance","bright","light","lighting","sun","sunny","wb","white"],"sizes_px":[24]},{"name":"wb_twilight","version":9,"popularity":3157,"codepoint":57798,"unsupported_families":[],"categories":["image"],"tags":["balance","light","lighting","noon","sun","sunset","twilight","wb","white"],"sizes_px":[20,24]},{"name":"wc","version":11,"popularity":11333,"codepoint":58941,"unsupported_families":[],"categories":["notification"],"tags":["bathroom","closet","female","gender","male","man","restroom","room","wash","water","wc","women"],"sizes_px":[24]},{"name":"web","version":13,"popularity":17478,"codepoint":57425,"unsupported_families":[],"categories":["av"],"tags":["browser","internet","page","screen","site","web","website","www"],"sizes_px":[24]},{"name":"web_asset","version":12,"popularity":8688,"codepoint":57449,"unsupported_families":[],"categories":["av"],"tags":["-website","app","application desktop","asset","browser","design","download","image","interface","internet","layout","screen","site","ui","ux","video","web","website","window","www"],"sizes_px":[24]},{"name":"web_asset_off","version":4,"popularity":1497,"codepoint":58615,"unsupported_families":[],"categories":["av"],"tags":["asset","browser","disabled","enabled","internet","off","on","page","screen","slash","web","webpage","website","windows","www"],"sizes_px":[20,24]},{"name":"web_stories","version":4,"popularity":2541,"codepoint":58773,"unsupported_families":[],"categories":["content"],"tags":["google","images","logo","stories","web"],"sizes_px":[20,24]},{"name":"webhook","version":1,"popularity":5059,"codepoint":60306,"unsupported_families":[],"categories":["action"],"tags":["api","developer","development","enterprise","software","webhook"],"sizes_px":[20,24]},{"name":"weekend","version":12,"popularity":6312,"codepoint":57707,"unsupported_families":[],"categories":["content"],"tags":["chair","couch","furniture","home","living","lounge","relax","room","weekend"],"sizes_px":[24]},{"name":"west","version":7,"popularity":26767,"codepoint":61926,"unsupported_families":[],"categories":["navigation"],"tags":["arrow","directional","left","maps","navigation","west"],"sizes_px":[24]},{"name":"whatshot","version":17,"popularity":16174,"codepoint":59406,"unsupported_families":[],"categories":["social"],"tags":["arrow","circle","direction","fire","frames","hot","round","whatshot"],"sizes_px":[24]},{"name":"wheelchair_pickup","version":8,"popularity":2223,"codepoint":61867,"unsupported_families":[],"categories":["places"],"tags":["accessibility","accessible","body","handicap","help","human","person","pickup","wheelchair"],"sizes_px":[24]},{"name":"where_to_vote","version":16,"popularity":9312,"codepoint":57719,"unsupported_families":[],"categories":["content"],"tags":["approve","ballot","check","complete","destination","direction","done","location","maps","mark","ok","pin","place","poll","select","stop","tick","to","validate election","verified","vote","where","yes"],"sizes_px":[24]},{"name":"widgets","version":13,"popularity":28773,"codepoint":57789,"unsupported_families":[],"categories":["device"],"tags":["app","box","menu","setting","squares","ui","widgets"],"sizes_px":[24]},{"name":"width_full","version":1,"popularity":990,"codepoint":63733,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"width_normal","version":1,"popularity":888,"codepoint":63734,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"width_wide","version":1,"popularity":839,"codepoint":63735,"unsupported_families":[],"categories":["action"],"tags":[],"sizes_px":[20,24]},{"name":"wifi","version":12,"popularity":52068,"codepoint":58942,"unsupported_families":[],"categories":["notification"],"tags":["connection","data","internet","network","scan","service","signal","wifi","wireless"],"sizes_px":[24]},{"name":"wifi_1_bar","version":1,"popularity":909,"codepoint":58570,"unsupported_families":[],"categories":["device"],"tags":["1","bar","cell","cellular","connection","data","internet","mobile","network","phone","scan","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_2_bar","version":1,"popularity":1038,"codepoint":58585,"unsupported_families":[],"categories":["device"],"tags":["2","bar","cell","cellular","connection","data","internet","mobile","network","phone","scan","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_calling","version":11,"popularity":1813,"codepoint":61303,"unsupported_families":[],"categories":["communication"],"tags":["call","calling","cell","connect","connection","connectivity","contact","device","hardware","mobile","phone","signal","telephone","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_calling_3","version":10,"popularity":2844,"codepoint":61573,"unsupported_families":[],"categories":["device"],"tags":["3","calling","cell","cellular","data","internet","mobile","network","phone","speed","wifi","wireless"],"sizes_px":[24]},{"name":"wifi_channel","version":1,"popularity":905,"codepoint":60266,"unsupported_families":[],"categories":["device"],"tags":["cellular","channel","connection","data","internet","mobile","network","scan","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_find","version":1,"popularity":1304,"codepoint":60209,"unsupported_families":[],"categories":["device"],"tags":["cellular","connection","data","detect","discover","find","internet","look","magnifying glass","mobile","network","notice","scan","search","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_lock","version":13,"popularity":1844,"codepoint":57825,"unsupported_families":[],"categories":["device"],"tags":["cellular","connection","data","internet","lock","locked","mobile","network","password","privacy","private","protection","safety","secure","security","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_off","version":12,"popularity":14234,"codepoint":58952,"unsupported_families":[],"categories":["notification"],"tags":["connection","data","disabled","enabled","internet","network","off","offline","on","scan","service","signal","slash","wifi","wireless"],"sizes_px":[24]},{"name":"wifi_password","version":1,"popularity":1590,"codepoint":60267,"unsupported_families":[],"categories":["device"],"tags":["cellular","connection","data","internet","lock","mobile","network","password","scan","secure","service","signal","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_protected_setup","version":12,"popularity":5674,"codepoint":61692,"unsupported_families":[],"categories":["action"],"tags":["around","arrow","arrows","protected","rotate","setup","wifi"],"sizes_px":[20,24]},{"name":"wifi_tethering","version":12,"popularity":6419,"codepoint":57826,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","connection","data","internet","mobile","network","phone","scan","service","signal","speed","tethering","wifi","wireless"],"sizes_px":[24]},{"name":"wifi_tethering_error","version":3,"popularity":1015,"codepoint":60121,"unsupported_families":[],"categories":["device"],"tags":["!","alert","attention","caution","cell","cellular","connection","danger","data","error","exclamation","important","internet","mark","mobile","network","notification","phone","rounded","scan","service","signal","speed","symbol","tethering","warning","wifi","wireless"],"sizes_px":[20,24]},{"name":"wifi_tethering_off","version":10,"popularity":1489,"codepoint":61575,"unsupported_families":[],"categories":["device"],"tags":["cell","cellular","connection","data","disabled","enabled","internet","mobile","network","off","offline","on","phone","scan","service","signal","slash","speed","tethering","wifi","wireless"],"sizes_px":[24]},{"name":"wind_power","version":1,"popularity":2182,"codepoint":60428,"unsupported_families":[],"categories":["home"],"tags":["eco","energy","nest","power","wind","windy"],"sizes_px":[20,24]},{"name":"window","version":10,"popularity":7654,"codepoint":61576,"unsupported_families":[],"categories":["search"],"tags":["close","glass","grid","home","house","interior","layout","outside","window"],"sizes_px":[20,24]},{"name":"wine_bar","version":6,"popularity":5992,"codepoint":61928,"unsupported_families":[],"categories":["maps"],"tags":["alcohol","bar","cocktail","cup","drink","glass","liquor","wine"],"sizes_px":[24]},{"name":"woman","version":2,"popularity":5785,"codepoint":57662,"unsupported_families":[],"categories":["social"],"tags":["female","gender","girl","lady","social","symbol","woman","women"],"sizes_px":[20,24]},{"name":"woman_2","version":1,"popularity":844,"codepoint":63719,"unsupported_families":[],"categories":["social"],"tags":["female","gender","girl","lady","social","symbol","woman","women"],"sizes_px":[20,24]},{"name":"work","version":12,"popularity":67652,"codepoint":59641,"unsupported_families":[],"categories":["action"],"tags":["bag","baggage","briefcase","business","case","job","suitcase","work"],"sizes_px":[24]},{"name":"work_history","version":1,"popularity":6262,"codepoint":60425,"unsupported_families":[],"categories":["action"],"tags":["back","backwards","bag","baggage","briefcase","business","case","clock","date","history","job","pending","recent","schedule","suitcase","time","updates","work"],"sizes_px":[20,24]},{"name":"work_off","version":12,"popularity":3621,"codepoint":59714,"unsupported_families":[],"categories":["action"],"tags":["bag","baggage","briefcase","business","case","disabled","enabled","job","off","on","slash","suitcase","work"],"sizes_px":[24]},{"name":"work_outline","version":12,"popularity":33409,"codepoint":59715,"unsupported_families":[],"categories":["action"],"tags":["bag","baggage","briefcase","business","case","job","suitcase","work"],"sizes_px":[24]},{"name":"workspace_premium","version":3,"popularity":29920,"codepoint":59311,"unsupported_families":[],"categories":["social"],"tags":["certification","degree","ecommerce","guarantee","medal","permit","premium","ribbon","verification","workspace"],"sizes_px":[20,24]},{"name":"workspaces","version":9,"popularity":10919,"codepoint":57760,"unsupported_families":[],"categories":["file"],"tags":["circles","collaboration","dot","filled","group","outline","space","team","work","workspaces"],"sizes_px":[20,24]},{"name":"wrap_text","version":13,"popularity":1723,"codepoint":57947,"unsupported_families":[],"categories":["editor"],"tags":["arrow writing","doc","edit","editing","editor","sheet","spreadsheet","text","type","wrap","write","writing"],"sizes_px":[24]},{"name":"wrong_location","version":17,"popularity":3566,"codepoint":61304,"unsupported_families":[],"categories":["maps"],"tags":["cancel","clear","close","destination","direction","exit","location","maps","no","pin","place","quit","remove","stop","wrong","x"],"sizes_px":[20,24]},{"name":"wysiwyg","version":8,"popularity":16084,"codepoint":61891,"unsupported_families":[],"categories":["action"],"tags":["composer","mode","screen","site","software","system","text","view","visibility","web","website","window","wysiwyg"],"sizes_px":[24]},{"name":"yard","version":9,"popularity":10055,"codepoint":61577,"unsupported_families":[],"categories":["search"],"tags":["backyard","flower","garden","home","house","nature","pettle","plants","yard"],"sizes_px":[24]},{"name":"youtube_searched_for","version":12,"popularity":10090,"codepoint":59642,"unsupported_families":[],"categories":["action"],"tags":["arrow","back","backwards","find","glass","history","inprogress","load","loading","look","magnify","magnifying","refresh","renew","restore","reverse","rotate","search","see","youtube"],"sizes_px":[24]},{"name":"zoom_in","version":11,"popularity":42381,"codepoint":59647,"unsupported_families":[],"categories":["action"],"tags":["big","bigger","find","glass","grow","in","look","magnify","magnifying","plus","scale","search","see","size","zoom"],"sizes_px":[24]},{"name":"zoom_in_map","version":1,"popularity":4141,"codepoint":60205,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","center","destination","in","location","maps","middle","move","place","stop","zoom"],"sizes_px":[20,24]},{"name":"zoom_out","version":11,"popularity":17017,"codepoint":59648,"unsupported_families":[],"categories":["action"],"tags":["find","glass","look","magnify","magnifying","minus","negative","out","scale","search","see","size","small","smaller","zoom"],"sizes_px":[24]},{"name":"zoom_out_map","version":17,"popularity":14410,"codepoint":58731,"unsupported_families":[],"categories":["maps"],"tags":["arrow","arrows","center","destination","location","maps","middle","move","out","place","stop","zoom"],"sizes_px":[24]}]`),Cr={icons:kr},Ni=Object.keys(Ot).map(e=>{const t=Cr.icons.find(i=>i.name===e);return{categories:t?t.categories:["No category"],name:e,tags:t?t.tags:[]}}),Sr=e=>t=>t.categories&&t.categories.includes(e),Bi=e=>t=>e===""||t.name.includes(e)||!!(t.tags&&t.tags.some(i=>i.includes(e))),$r=(e,t)=>Ni.filter(Sr(e)).filter(Bi(t)).map(i=>i.name),Or=e=>{const t=new Set;return Ni.forEach(i=>{Bi(e)(i)&&i.categories.forEach(a=>t.add(a))}),Array.from(t)},Ar=async e=>{const t=e.target;try{const i=t.dataset.iconName||"";await navigator.clipboard.writeText(i)}catch(i){console.error("Could not copy value to clipboard. Error was:",i)}},Ir=()=>{Wi("bundled-default",{mutator:e=>e.setAttribute("fill","currentColor"),resolver:e=>e in Ot?`data:image/svg+xml,${encodeURIComponent(Ot[e])}`:""})},Er=()=>{const[e,t]=lt.useState(""),[i,a]=lt.useState([]);lt.useEffect(()=>{Ir()},[]);const r=n=>{t(n.target.value.toLowerCase()||"")};return lt.useEffect(()=>{a(Or(e))},[e]),ve.createElement(ve.Fragment,null,ve.createElement("div",{style:{backgroundColor:"var(--syn-color-neutral-0)",paddingTop:"var(--syn-spacing-x-large)",position:"sticky",top:0,zIndex:10}},ve.createElement(Es,{label:"Search icons",onSynInput:r})),ve.createElement("div",null,i.map(n=>ve.createElement("div",{key:n},ve.createElement("h2",{style:{marginTop:"var(--syn-spacing-3x-large)"},id:n},n),ve.createElement("div",{style:{columnGap:"var(--syn-spacing-small)",display:"grid",gridTemplateColumns:"repeat(auto-fill, 150px)",rowGap:"var(--syn-spacing-x-large)"}},$r(n,e).map(l=>ve.createElement("div",{key:l,style:{alignItems:"center",cursor:"pointer",display:"flex",flexDirection:"column"},"data-icon-name":l,onClick:Ar},ve.createElement("span",{"data-icon-name":l,style:{fontSize:"var(--syn-font-size-x-small)"}},l),ve.createElement(Ss,{"data-icon-name":l,style:{fontSize:"var(--syn-font-size-2x-large)"},name:l,library:"bundled-default"}))))))))};function mi(e){const t={code:"code",h1:"h1",p:"p",...hi(),...e.components};return we.jsxs(we.Fragment,{children:[we.jsx(qi,{title:"Icon search"}),`
`,we.jsx(t.h1,{id:"icon-search-page",children:"Icon search page"}),`
`,we.jsxs(t.p,{children:["Use this icon search to find a matching icon for your need. Icons can be searched via icon name or via tag, which is related to the icon. Click on the desired icon or icon text to copy it's name and use it with a ",we.jsx(t.code,{children:"<syn-icon>"})," or ",we.jsx(t.code,{children:"<syn-icon-button>"}),"."]}),`
`,we.jsx(Er,{})]})}function Kr(e={}){const{wrapper:t}={...hi(),...e.components};return t?we.jsx(t,{...e,children:we.jsx(mi,{...e})}):mi(e)}export{Kr as default};
