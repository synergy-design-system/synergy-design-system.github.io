import{S as x}from"./menu.component-D5RzaJzS.js";import{e as k}from"./class-map-BDTDoIXv.js";import{H as _,g as w}from"./slot-9EVoRGQc.js";import{e as S,A as C,E as f,x as c,j as y}from"./iframe-Y-pgiymh.js";import{L as E}from"./localize-Dh03wnLC.js";import{c as L,n as m,S as z}from"./synergy-element-Bk2cWI72.js";import{a as v}from"./query-DAIS6qJ0.js";import{w as p}from"./watch-CEsCE2EF.js";import{S as P}from"./icon.component-Cxo-rQRB.js";import{S as T}from"./popup.component-D40xTt-4.js";import{S as M}from"./spinner.component-CK8LwdIi.js";x.define("syn-menu");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=()=>new A;class A{}const d=new WeakMap,$=S(class extends C{render(n){return f}update(n,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=n.options?.host,this.rt(this.ct=n.element)),f}rt(n){if(this.isConnected||(n=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=d.get(t);i===void 0&&(i=new WeakMap,d.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,n),n!==void 0&&this.G.call(this.ht,n)}else this.G.value=n}get lt(){return typeof this.G=="function"?d.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class D{constructor(t,i){this.popupRef=R(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="syn-menu-item"||e.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(g=>g.localName==="syn-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:a,top:u,width:h,height:b}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?a+h:a}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${u}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?a+h:a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${u+b}px`)},(this.host=t).addController(this),this.hasSlotController=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(const s of i.assignedElements())if(e=s.querySelectorAll("syn-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let s=1;s!==e.length;++s)e[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;const t=this.host.parentElement.computedStyleMap(),e=["padding-top","border-top-width","margin-top"].reduce((s,r)=>{const a=t.get(r)??new CSSUnitValue(0,"px"),h=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return s-h.value},0);this.skidding=e}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?c`
      <syn-popup
        ${$(this.popupRef)}
        placement=${t?"left-start":"right-start"}
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
    `:c` <slot name="submenu" hidden></slot> `}}const O=y`
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
`,U=y`
  :host {
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
    color: var(--syn-option-color, var(--syn-typography-color-text));
    font-size: var(--menuitem-font-size);

    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--menuitem-min-height, var(--syn-input-height-medium));
    padding: 0 calc(var(--menuitem-padding) - var(--menuitem-inset-border-vertical));
  }

  :host(:focus-visible) .menu-item {
    background-color: var(--syn-option-background-color-active, var(--syn-color-neutral-1000));
  }

  /** #429: Use token for opacity */
  .menu-item.menu-item--disabled {
    opacity: var(--syn-opacity-50);
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
    color: var(--syn-option-icon-color, var(--syn-typography-color-text));
    font-size: var(--syn-font-size-x-large);
  }

  :host(:hover) .menu-item .menu-item__prefix::slotted(syn-icon),
  :host(:hover) .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-hover, var(--syn-typography-color-text-inverted));
  }

  :host(:focus-visible) .menu-item .menu-item__prefix::slotted(syn-icon),
  :host(:focus-visible) .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-active, var(--syn-typography-color-text-inverted));
  }

  /* Adjust background and text color for focused elements */
  /* stylelint-disable selector-not-notation, plugin/no-unsupported-browser-features */
  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--syn-option-background-color-hover, var(--syn-color-neutral-1000));
    color: var(--syn-option-color-hover, var(--syn-typography-color-text-inverted));
  }
  /* stylelint-enable selector-not-notation, plugin/no-unsupported-browser-features */

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
    color: var(--syn-option-check-color, var(--syn-color-primary-600));
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
    color: var(--syn-option-check-color-active, var(--syn-color-neutral-0));
  }

  :host(:hover) .menu-item--checked .menu-item__check {
    color: var(--syn-option-check-color-hover, var(--syn-color-neutral-0));
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

  .menu-item.menu-item--loading *:not(syn-spinner) {
    opacity: var(--syn-opacity-50);
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
    --track-width: 2px;

    color: var(--syn-interactive-emphasis-color, var(--syn-color-primary-700));
    font-size: var(--syn-font-size-medium);
    left: calc(var(--menuitem-padding) - var(--menuitem-inset-border-vertical));
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

  /* #1131: Make sure that slotted menus do show the correct border radius */
  syn-popup::part(popup) {
    border-radius: var(--syn-input-border-radius-medium);
  }

  /**
   * #1009: Adjust the position for submenus when they are opened to the left, too.
   * This works because the data-current-placement attribute is set on the popup accordingly.
   * We do not use the actual placement attribute, because it does not update when the placement changes
   */
  syn-popup[data-current-placement^="left"]::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }
`;function G(n,t){const i={waitUntilFirstUpdated:!1,...t};return e=>class extends e{#e=!i.waitUntilFirstUpdated;updated(s){if(!this.#e){this.#e=!0;return}const r=Array.from(s).filter(([u])=>n.includes(u));if(r.length===0){super.updated(s);return}const a=r.map(([u,h])=>({attribute:u,newValue:this[u],oldValue:h}));this.emit("syn-attributes-changed",{detail:a}),super.updated(s)}}}var H=Object.defineProperty,V=Object.getOwnPropertyDescriptor,l=(n,t,i,e)=>{for(var s=e>1?void 0:e?V(t,i):t,r=n.length-1,a;r>=0;r--)(a=n[r])&&(s=(e?a(t,i,s):a(s))||s);return e&&s&&H(t,i,s),s};let o=class extends z{constructor(){super(...arguments),this.localize=new E(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new _(this,"submenu"),this.submenuController=new D(this,this.hasSlotController),this.handleHostClick=n=>{this.disabled&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleMouseOver=n=>{this.focus(),n.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const n=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=n;return}n!==this.cachedTextLabel&&(this.cachedTextLabel=n,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return w(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const n=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return c`
      <div
        id="anchor"
        part="base"
        class=${k({"menu-item":!0,"menu-item--rtl":n,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?c` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}};o.styles=[L,O,U];o.dependencies={"syn-icon":P,"syn-popup":T,"syn-spinner":M};l([v("slot:not([name])")],o.prototype,"defaultSlot",2);l([v(".menu-item")],o.prototype,"menuItem",2);l([m()],o.prototype,"type",2);l([m({type:Boolean,reflect:!0})],o.prototype,"checked",2);l([m()],o.prototype,"value",2);l([m({type:Boolean,reflect:!0})],o.prototype,"loading",2);l([m({type:Boolean,reflect:!0})],o.prototype,"disabled",2);l([p("checked")],o.prototype,"handleCheckedChange",1);l([p("disabled")],o.prototype,"handleDisabledChange",1);l([p("type")],o.prototype,"handleTypeChange",1);o=l([G(["type","loading"],{waitUntilFirstUpdated:!0})],o);o.define("syn-menu-item");
