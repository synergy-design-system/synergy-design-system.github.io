import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-rzuzvTqw.js";import{n as i,t as a}from"./class-map-BSEJ0nPb.js";import{n as o,r as s,t as c}from"./slot-uOU62xJ8.js";import{n as l,t as u}from"./localize-DnZL8qNz.js";import{a as d,i as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./synergy-element-C2gCmwiV.js";import{n as b,t as x}from"./watch-OXZPXmne.js";import{n as S,t as C}from"./icon.component-DovAIrSi.js";import{n as w,t as T}from"./spinner.component-D2LGKj3i.js";import{n as E,t as D}from"./menu.component-CNgdd_lq.js";import{n as O,r as k,t as A}from"./ref-B_7rePga.js";import{n as j,t as M}from"./popup.component-BA0jsqi6.js";var N=e((()=>{E(),E(),D.define(`syn-menu`)})),P,F=e((()=>{A(),t(),P=class{constructor(e,t){this.popupRef=O(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty(`--safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--safe-triangle-cursor-y`,`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e);break;default:break}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`syn-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`syn-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-y`,`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`syn-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`syn-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`syn-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?n`
      <syn-popup
        ${k(this.popupRef)}
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
    `:n` <slot name="submenu" hidden></slot> `}}})),I,L=e((()=>{t(),I=r`
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
`}));function R(e,t){let n={waitUntilFirstUpdated:!1,...t};return t=>class extends t{#e=!n.waitUntilFirstUpdated;updated(t){if(!this.#e){this.#e=!0;return}let n=Array.from(t).filter(([t])=>e.includes(t));if(n.length===0){super.updated(t);return}let r=n.map(([e,t])=>({attribute:e,newValue:this[e],oldValue:t}));this.emit(`syn-attributes-changed`,{detail:r}),super.updated(t)}}}var z=e((()=>{})),B,V,H=e((()=>{a(),s(),t(),u(),_(),F(),x(),m(),p(),S(),j(),w(),L(),z(),f(),B=class extends v{constructor(...e){super(...e),this.localize=new l(this),this.type=`normal`,this.checked=!1,this.value=``,this.loading=!1,this.disabled=!1,this.hasSlotController=new c(this,`submenu`),this.submenuController=new P(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}static{this.styles=[d,I]}static{this.dependencies={"syn-icon":C,"syn-popup":M,"syn-spinner":T}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(this.cachedTextLabel===void 0){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return o(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return n`
      <div
        id="anchor"
        part="base"
        class=${i({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?n` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:``}
      </div>
    `}},g([y(`slot:not([name])`)],B.prototype,`defaultSlot`,void 0),g([y(`.menu-item`)],B.prototype,`menuItem`,void 0),g([h()],B.prototype,`type`,void 0),g([h({type:Boolean,reflect:!0})],B.prototype,`checked`,void 0),g([h()],B.prototype,`value`,void 0),g([h({type:Boolean,reflect:!0})],B.prototype,`loading`,void 0),g([h({type:Boolean,reflect:!0})],B.prototype,`disabled`,void 0),g([b(`checked`)],B.prototype,`handleCheckedChange`,null),g([b(`disabled`)],B.prototype,`handleDisabledChange`,null),g([b(`type`)],B.prototype,`handleTypeChange`,null),B=g([R([`type`,`loading`],{waitUntilFirstUpdated:!0})],B),V=B})),U=e((()=>{H(),H(),V.define(`syn-menu-item`)}));export{N as n,U as t};