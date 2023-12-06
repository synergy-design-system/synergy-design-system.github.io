import{a as u}from"./static-c19bae7e.js";import{d as w,l as y}from"./live-50407c8a.js";import{e as v,F as p}from"./query-a4947b92.js";import{i as h,x as b}from"./directive-helpers-a6c66f8a.js";import{o as m}from"./if-defined-1099e361.js";import{c as f,r as _,n as o,w as d,S as g}from"./component.styles-63ef33a5.js";const k=h`
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
  `,z=h`
	/* stylelint-disable */
  ${f}

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
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }

  ${k}
`;var C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,r=(n,t,s,c)=>{for(var i=c>1?void 0:c?x(t,s):t,l=n.length-1,a;l>=0;l--)(a=n[l])&&(i=(c?a(t,s,i):a(i))||i);return c&&i&&C(t,s,i),i};class e extends g{constructor(){super(...arguments),this.formControlController=new p(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,s)=>t.checked=s}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return b`
      <label
        part="base"
        class=${u({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${m(this.value)}
          .checked=${y(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
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
    `}}e.styles=z;r([v('input[type="checkbox"]')],e.prototype,"input",2);r([_()],e.prototype,"hasFocus",2);r([o()],e.prototype,"title",2);r([o()],e.prototype,"name",2);r([o()],e.prototype,"value",2);r([o({reflect:!0})],e.prototype,"size",2);r([o({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([o({type:Boolean,reflect:!0})],e.prototype,"checked",2);r([w("checked")],e.prototype,"defaultChecked",2);r([o({reflect:!0})],e.prototype,"form",2);r([o({type:Boolean,reflect:!0})],e.prototype,"required",2);r([d("checked",{waitUntilFirstUpdate:!0})],e.prototype,"handleCheckedChange",1);r([d("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);e.define("syn-switch");
//# sourceMappingURL=switch-3fd932d3.js.map
