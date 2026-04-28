import{S as v}from"./menu.component-C9XsxtlJ.js";import{e as y}from"./class-map-DuCXFyun.js";import{H as g,g as k}from"./slot-9EVoRGQc.js";import{c as d,k as x}from"./iframe-CfKmpROb.js";import{L as S}from"./controller-0nuky388.js";import{c as w,n as m,S as _}from"./synergy-element-D6uzLjd8.js";import{a as p}from"./query-D0jTsbLw.js";import{e as C,n as E}from"./ref-o0hgbdKk.js";import{w as c}from"./watch-CEsCE2EF.js";import{S as L}from"./icon.component-BOIuuAKO.js";import{S as z}from"./popup.component-bONzouLj.js";import{S as P}from"./spinner.component-CJLz1-cE.js";v.define("syn-menu");class T{constructor(t,a){this.popupRef=C(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="syn-menu-item"||e.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(b=>b.localName==="syn-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!n)return;const{left:o,top:u,width:h,height:f}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+h:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${u}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+h:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${u+f}px`)},(this.host=t).addController(this),this.hasSlotController=a}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const a=this.host.renderRoot.querySelector("slot[name='submenu']");if(!a){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(const n of a.assignedElements())if(e=n.querySelectorAll("syn-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let n=1;n!==e.length;++n)e[n].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;const t=this.host.parentElement.computedStyleMap(),e=["padding-top","border-top-width","margin-top"].reduce((n,r)=>{const o=t.get(r)??new CSSUnitValue(0,"px"),h=(o instanceof CSSUnitValue?o:new CSSUnitValue(0,"px")).to("px");return n-h.value},0);this.skidding=e}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?d`
      <syn-popup
        ${E(this.popupRef)}
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
    `:d` <slot name="submenu" hidden></slot> `}}const M=x`
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
`;function R(i,t){const a={waitUntilFirstUpdated:!1,...t};return e=>class extends e{#e=!a.waitUntilFirstUpdated;updated(n){if(!this.#e){this.#e=!0;return}const r=Array.from(n).filter(([u])=>i.includes(u));if(r.length===0){super.updated(n);return}const o=r.map(([u,h])=>({attribute:u,newValue:this[u],oldValue:h}));this.emit("syn-attributes-changed",{detail:o}),super.updated(n)}}}var $=Object.defineProperty,D=Object.getOwnPropertyDescriptor,l=(i,t,a,e)=>{for(var n=e>1?void 0:e?D(t,a):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(e?o(t,a,n):o(n))||n);return e&&n&&$(t,a,n),n};let s=class extends _{constructor(){super(...arguments),this.localize=new S(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new g(this,"submenu"),this.submenuController=new T(this,this.hasSlotController),this.handleHostClick=i=>{this.disabled&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleMouseOver=i=>{this.focus(),i.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const i=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=i;return}i!==this.cachedTextLabel&&(this.cachedTextLabel=i,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return k(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const i=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return d`
      <div
        id="anchor"
        part="base"
        class=${y({"menu-item":!0,"menu-item--rtl":i,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?d` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}};s.styles=[w,M];s.dependencies={"syn-icon":L,"syn-popup":z,"syn-spinner":P};l([p("slot:not([name])")],s.prototype,"defaultSlot",2);l([p(".menu-item")],s.prototype,"menuItem",2);l([m()],s.prototype,"type",2);l([m({type:Boolean,reflect:!0})],s.prototype,"checked",2);l([m()],s.prototype,"value",2);l([m({type:Boolean,reflect:!0})],s.prototype,"loading",2);l([m({type:Boolean,reflect:!0})],s.prototype,"disabled",2);l([c("checked")],s.prototype,"handleCheckedChange",1);l([c("disabled")],s.prototype,"handleDisabledChange",1);l([c("type")],s.prototype,"handleTypeChange",1);s=l([R(["type","loading"],{waitUntilFirstUpdated:!0})],s);s.define("syn-menu-item");
