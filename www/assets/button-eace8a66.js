import{s as p,n as d,a as v}from"./static-c19bae7e.js";import{e as _,F as x,a as k}from"./query-a4947b92.js";import{H as w}from"./slot-4492e2ee.js";import{o as e}from"./if-defined-1099e361.js";import{L as h}from"./localize-d6e19d2a.js";import{c as y,S as m,r as f,n as r,w as C}from"./component.styles-63ef33a5.js";import{S as z}from"./icon.component-a161cffb.js";import{i as c,x as $}from"./directive-helpers-a6c66f8a.js";const B=c`
	/* stylelint-disable */
  ${y}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--syn-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
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
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;class g extends m{constructor(){super(...arguments),this.localize=new h(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}g.styles=B;const S=c`
.button:focus-visible {
    outline: var(--syn-focus-ring-color) solid var(--syn-focus-ring-width);
    outline-offset: var(--syn-focus-ring-width);
  }

  /*
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
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
    color: var(--syn-color-neutral-600);
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
    border-color: var(--syn-color-neutral-400);
    color: var(--syn-color-neutral-400);
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
    border-color:  none;
    color:  var(--syn-color-primary-950);
  }

  .button--text.button--primary.button--disabled {
    color: var(--syn-color-neutral-400);
  }

  /*
* PADDING
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
    padding-inline-start: var(--syn-spacing-medium);
   }

  .button.button--large.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-suffix .button__label {
    padding-inline-end: var(--syn-spacing-medium);
  }

  .button.button--large.button--has-prefix .button__prefix, 
  .button.button--large.button--has-suffix .button__suffix {
    font-size: var(--syn-font-size-2x-large);
  }
  `,F=c`
	/* stylelint-disable */
  ${y}

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

  :host(.syn-button-group__button--first:not(.syn-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.syn-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.syn-button-group__button--last:not(.syn-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.syn-button-group__button:not(.syn-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--syn-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .syn-button-group__button:not(
          .syn-button-group__button--first,
          .syn-button-group__button--radio,
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
  :host(.syn-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.syn-button-group__button--focus),
  :host(.syn-button-group__button[checked]) {
    z-index: 2;
  }

  ${S}
`;var V=Object.defineProperty,I=Object.getOwnPropertyDescriptor,n=(l,t,i,s)=>{for(var a=s>1?void 0:s?I(t,i):t,u=l.length-1,b;u>=0;u--)(b=l[u])&&(a=(s?b(t,i,a):b(a))||a);return s&&a&&V(t,i,a),a};class o extends m{constructor(){super(...arguments),this.formControlController=new x(this,{form:t=>{if(t.hasAttribute("form")){const i=t.getRootNode(),s=t.getAttribute("form");return i.getElementById(s)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new w(this,"[default]","prefix","suffix"),this.localize=new h(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:k}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),i=t?p`a`:p`button`;return d`
      <${i}
        part="base"
        class=${v({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${e(t?void 0:this.disabled)}
        type=${e(t?void 0:this.type)}
        title=${this.title}
        name=${e(t?void 0:this.name)}
        value=${e(t?void 0:this.value)}
        href=${e(t?this.href:void 0)}
        target=${e(t?this.target:void 0)}
        download=${e(t?this.download:void 0)}
        rel=${e(t?this.rel:void 0)}
        role=${e(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?d` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?d`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${i}>
    `}}o.styles=F;o.dependencies={"syn-icon":z,"syn-spinner":g};n([_(".button")],o.prototype,"button",2);n([f()],o.prototype,"hasFocus",2);n([f()],o.prototype,"invalid",2);n([r()],o.prototype,"title",2);n([r({reflect:!0})],o.prototype,"variant",2);n([r({reflect:!0})],o.prototype,"size",2);n([r({type:Boolean,reflect:!0})],o.prototype,"caret",2);n([r({type:Boolean,reflect:!0})],o.prototype,"disabled",2);n([r({type:Boolean,reflect:!0})],o.prototype,"loading",2);n([r()],o.prototype,"type",2);n([r()],o.prototype,"name",2);n([r()],o.prototype,"value",2);n([r()],o.prototype,"href",2);n([r()],o.prototype,"target",2);n([r()],o.prototype,"rel",2);n([r()],o.prototype,"download",2);n([r()],o.prototype,"form",2);n([r({attribute:"formaction"})],o.prototype,"formAction",2);n([r({attribute:"formenctype"})],o.prototype,"formEnctype",2);n([r({attribute:"formmethod"})],o.prototype,"formMethod",2);n([r({attribute:"formnovalidate",type:Boolean})],o.prototype,"formNoValidate",2);n([r({attribute:"formtarget"})],o.prototype,"formTarget",2);n([C("disabled",{waitUntilFirstUpdate:!0})],o.prototype,"handleDisabledChange",1);o.define("syn-button");export{F as b};
//# sourceMappingURL=button-eace8a66.js.map
