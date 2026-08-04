import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,t as n}from"./lit-DgWh_IaA.js";import{f as r,g as i,p as a}from"./library-DDo5iplL.js";import{a as o,d as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./synergy-element-C9GUR4B8.js";import{t as m}from"./query-DOHNhzf6.js";import{r as h,t as g}from"./if-defined-DmmMeZVG.js";import{n as _,t as v}from"./class-map-HZwHklGF.js";import{i as y,r as b,t as x}from"./form-D9RYqjir.js";import{n as S,r as C,t as w}from"./slot-CUH75lUH.js";import{n as T,t as E}from"./localize-Du3bqz3O.js";import{n as D}from"./watch-Q8hEwzVb.js";import{n as O,t as k}from"./icon.component-KcKLXIVq.js";import{n as A,t as j}from"./spinner.component-DrLR-NKx.js";import{n as M,t as N}from"./decorator-DZesXZg7.js";var P;function F(){return(F=e((()=>{n(),P=t`
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
`})))()}var I;function L(){return(L=e((()=>{n(),I=t`
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
`})))()}var R,z;function B(){return(B=e((()=>{r(),f(),g(),v(),b(),C(),E(),u(),l(),O(),A(),F(),L(),M(),R=class extends p{constructor(...e){super(...e),this.formControlController=new x(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new w(this,`[default]`,`prefix`,`suffix`),this.localize=new T(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`outline`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}static{this.styles=[o,P,I]}static{this.dependencies={"syn-icon":k,"syn-spinner":j}}get validity(){return this.isButton()?this.button.validity:y}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){let e=S(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),n=t.length===1&&t[0].tagName.toLowerCase()===`syn-icon`;this.iconOnly=n&&e===``}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?a`a`:a`button`;return i`
      <${t}
        part="base"
        class=${_({button:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--filled":this.variant===`filled`,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`),"button--large":this.size===`large`,"button--loading":this.loading,"button--medium":this.size===`medium`,"button--outline":this.variant===`outline`,"button--primary":!0,"button--rtl":this.localize.dir()===`rtl`,"button--small":this.size===`small`,"button--text":this.variant===`text`})}
        ?disabled=${h(e?void 0:this.disabled)}
        type=${h(e?void 0:this.type)}
        title=${this.title}
        name=${h(e?void 0:this.name)}
        value=${h(e?void 0:this.value)}
        href=${h(e&&!this.disabled?this.href:void 0)}
        target=${h(e?this.target:void 0)}
        download=${h(e?this.download:void 0)}
        rel=${h(e?this.rel:void 0)}
        role=${h(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${_({"button__icon-only":this.iconOnly,button__label:!0})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?i` <syn-icon part="caret" class="button__caret" library="system" name="chevron-down"></syn-icon> `:``}
        ${this.loading?i`<syn-spinner part="spinner"></syn-spinner>`:``}
      </${t}>
    `}},d([m(`.button`)],R.prototype,`button`,void 0),d([m(`slot:not([name])`)],R.prototype,`defaultSlot`,void 0),d([c()],R.prototype,`iconOnly`,void 0),d([c()],R.prototype,`hasFocus`,void 0),d([c()],R.prototype,`invalid`,void 0),d([s({reflect:!0})],R.prototype,`title`,void 0),d([s({reflect:!0})],R.prototype,`variant`,void 0),d([s({reflect:!0})],R.prototype,`size`,void 0),d([s({reflect:!0,type:Boolean})],R.prototype,`caret`,void 0),d([s({reflect:!0,type:Boolean})],R.prototype,`disabled`,void 0),d([s({reflect:!0,type:Boolean})],R.prototype,`loading`,void 0),d([s()],R.prototype,`type`,void 0),d([s()],R.prototype,`name`,void 0),d([s()],R.prototype,`value`,void 0),d([s()],R.prototype,`href`,void 0),d([s()],R.prototype,`target`,void 0),d([s()],R.prototype,`rel`,void 0),d([s()],R.prototype,`download`,void 0),d([s()],R.prototype,`form`,void 0),d([s({attribute:`formaction`})],R.prototype,`formAction`,void 0),d([s({attribute:`formenctype`})],R.prototype,`formEnctype`,void 0),d([s({attribute:`formmethod`})],R.prototype,`formMethod`,void 0),d([s({attribute:`formnovalidate`,type:Boolean})],R.prototype,`formNoValidate`,void 0),d([s({attribute:`formtarget`})],R.prototype,`formTarget`,void 0),d([D(`disabled`,{waitUntilFirstUpdate:!0})],R.prototype,`handleDisabledChange`,null),R=d([N(`SynButton`)],R),z=R})))()}export{F as i,B as n,P as r,z as t};