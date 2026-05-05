import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe--jLxr_1k.js";import{n as i,t as a}from"./class-map-DU_vSCXs.js";import{i as o,n as s,r as c,t as l}from"./form-BVa_zioF.js";import{r as u,t as d}from"./slot-uOU62xJ8.js";import{n as f,t as p}from"./if-defined-BvtcOMac.js";import{n as m,t as h}from"./localize-DnZL8qNz.js";import{a as g,i as _,l as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T}from"./synergy-element-DglO7nfm.js";import{n as E,t as D}from"./decorator-CJ_bAnlW.js";import{n as O,t as k}from"./tooltip.component-CtxBbKFV.js";import{n as A,t as j}from"./default-value-C24IyI25.js";import{n as M,t as N}from"./form-control.styles-BQCtwON5.js";var P,F,I,L=e((()=>{P=(e,t)=>e-t,F=(e,t)=>{if(e.length!==t.length)return!0;let n=e.slice().sort(P),r=t.slice().sort(P);for(let e=0;e<n.length;e+=1)if(n[e]!==r[e])return!0;return!1},I=(e,t,n)=>{let r=e.getBoundingClientRect(),i=r.width;if(i<=0)return 0;let a=t;return a-=r.left,a<=0?+!!n:a>=i?+!n:(a/=i,n?1-a:a)}})),R,z=e((()=>{t(),R=r`
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
`})),B,V,H=e((()=>{t(),p(),C(),a(),A(),c(),u(),h(),b(),M(),y(),O(),L(),z(),E(),_(),B=class extends w{static{this.styles=[g,N,R]}static{this.dependencies={"syn-tooltip":k}}set value(e){this.#e=e?e.split(` `).map(Number).sort(P):[]}get value(){return this.#e.slice().sort(P).join(` `)}set valueAsArray(e){let t=this.#e;this.#e=Array.isArray(e)?e.slice().sort(P):e||[],F(t,this.#e)&&this.requestUpdate(`value`,t.join(` `))}get valueAsArray(){return[...this.#e].sort(P)}#e;#t;#n;#r;#i;#a;get#o(){return this.localize.dir()===`rtl`}constructor(){super(),this.name=``,this.label=``,this.helpText=``,this.disabled=!1,this.readonly=!1,this.min=0,this.max=100,this.step=1,this.size=`medium`,this.tooltipPlacement=`top`,this.restrictMovement=!1,this.defaultValue=`0`,this.form=``,this.hasSlotController=new d(this,`help-text`,`label`,`prefix`,`suffix`,`ticks`),this.formControlController=new l(this,{assumeInteractionOn:[`syn-change`]}),this.localize=new m(this),this.#e=[0],this.#t=new Map,this.#n=!1,this.#r=``,this.#a=[],this.tooltipFormatter=this.localize.number.bind(this.localize)}disconnectedCallback(){super.disconnectedCallback(),this?.ticksResizeObserver?.disconnect(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.ticksResizeObserver=new ResizeObserver(()=>{this.#b()}),this.ticksResizeObserver.observe(this.ticks),this.ticksResizeObserver.observe(this.baseControl),this.visibilityObserver=new IntersectionObserver(e=>{let t=e.at(0);t&&t.isIntersecting&&this.#b()}),this.visibilityObserver.observe(this),this.#b(),this.formControlController.updateValidity(),this.#a=Array.from(this.#e),this.thumbs.forEach(e=>{let t=e.parentElement;t.updateComplete.then(()=>{t.shadowRoot.querySelector(`.tooltip__body`)?.setAttribute(`aria-hidden`,`true`)})})}willUpdate(e){super.willUpdate(e),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);let t=this.#e.map(e=>{if(e<=this.min)return this.min;if(e>=this.max)return this.max;let t=this.min+this.step*Math.round((e-this.min)/this.step);return t>this.max?this.max:t});F(this.#e,t)&&(this.#e=t)}updated(e){super.updated(e);for(let e of this.thumbs){let t=+e.dataset.rangeId;this.#t.has(t)&&this.#p(e,this.#t.get(t))}this.#m()}focus(e){let t=this.thumbs.item(0);t?t.focus(e):super.focus(e)}checkValidity(){if(this.disabled)return!0;let e=!this.#r;return e||this.formControlController.emitInvalidEvent(),e}reportValidity(){if(this.disabled)return!0;let e=this.validity.valid;return this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.#i),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.#i=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),e}setCustomValidity(e){this.#r=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return this.#r?s:o}get validationMessage(){return this.#r}#s(e,t=!0){if(this.disabled)return;if(this.readonly){e.preventDefault(),this.focus();return}let{clientX:n}=e,r=Array.from(this.thumbs),i=I(this.baseDiv,n,this.#o),a=this.step/(this.max-this.min),o=this.min+this.step*Math.round(i/a),s=r.reduce((e,t)=>{let n=this.#t.get(+t.dataset.rangeId),r=this.#t.get(+e.dataset.rangeId),i=Math.abs(n-o),a=Math.abs(r-o);return i===a?n<o?t:e:i<a?t:e}),c=+s.dataset.rangeId;if(!c)return;this.#t.set(c,o),this.#p(s,o);let l=this.#e;this.#e=Array.from(this.#t.values()),this.#m(),F(l,this.#e)&&(this.#a=Array.from(this.#e),this.emit(`syn-input`),this.emit(`syn-change`));let u=new PointerEvent(`pointerdown`,e);t&&s.dispatchEvent(u)&&this.#_(s)}#c(e){this.#s(e,!1)}#l(e,t){let n=this.valueAsArray,r=Array.from(this.thumbs).indexOf(e),i=n[r-1]||this.min,a=n[r+1]||this.max;return{finalValue:Math.max(i,Math.min(a,t)),isRestricted:t<i||t>a,nextValue:a,prevValue:i}}async#u(e){if(this.disabled||this.readonly)return;let t=e.target;this.#_(t),t.dataset.pointerId&&t.releasePointerCapture(+t.dataset.pointerId),t.dataset.pointerId=e.pointerId.toString(),t.setPointerCapture(e.pointerId),t.classList.add(`grabbed`),await t.parentElement.show()}#d(e){if(this.disabled||this.readonly)return;let t=e.target,n=+t.dataset.rangeId;if(!this.#t.has(n)||(t.dataset.pointerId?+t.dataset.pointerId:null)!==e.pointerId)return;let r=I(this.baseDiv,e.clientX,this.#o),i=this.step/(this.max-this.min),a=this.min+this.step*Math.round(r/i);if(this.emit(`syn-move`,{cancelable:!0,detail:{element:t,value:a}}).defaultPrevented)return;if(this.restrictMovement){let e=this.#l(t,a);e.isRestricted?(a=e.finalValue,t.style.zIndex=(3+this.thumbs.length).toFixed(0)):t.style.zIndex=`3`}this.#t.set(n,a),this.#p(t,a);let o=this.#e;this.#e=Array.from(this.#t.values()),this.#m(),F(o,this.#e)&&this.emit(`syn-input`)}async#f(e){if(this.disabled||this.readonly)return;let t=e.target;!t.dataset.pointerId||e.pointerId!==+t.dataset.pointerId||(t.classList.remove(`grabbed`),t.releasePointerCapture(e.pointerId),delete t.dataset.pointerId,F(this.#a,this.#e)&&(this.#a=Array.from(this.#e),this.emit(`syn-change`)),await t.parentElement.hide())}#p(e,t){e.setAttribute(`aria-valuenow`,t.toString()),e.setAttribute(`aria-valuetext`,this.tooltipFormatter(t));let n=(t-this.min)/(this.max-this.min);e.style.insetInlineStart=`calc(${100*n}% - var(--half-thumb-size))`,this.#_(e)}#m(){let{activeTrack:e}=this;if(!e)return;if(this.min===this.max){e.style.insetInlineStart=`0%`,e.style.insetInlineEnd=`0%`;return}if(this.#e.length===1){let t=getComputedStyle(this).getPropertyValue(`--track-active-offset`)||`0%`,n=100*(this.#e[0]-this.min)/(this.max-this.min);e.style.insetInlineStart=`min(${t}, ${n}%)`,e.style.insetInlineEnd=`min(calc(100% - ${t}), calc(100% - ${n}%))`;return}let t=this.#e.slice().sort(P),n=100*(t[0]-this.min)/(this.max-this.min),r=100*(t[t.length-1]-this.min)/(this.max-this.min);e.style.insetInlineStart=`${n}%`,e.style.insetInlineEnd=`calc(100% - ${r}%)`}#h(e){if(this.readonly)return;let t=e.target,n=+t.dataset.rangeId,r=this.#t.get(n);if(r===void 0)return;let i=r;switch(e.key){case`ArrowUp`:case`Up`:i=Math.min(r+this.step,this.max);break;case`ArrowDown`:case`Down`:i=Math.max(r-this.step,this.min);break;case`ArrowLeft`:case`Left`:i=this.#o?Math.min(r+this.step,this.max):Math.max(r-this.step,this.min);break;case`ArrowRight`:case`Right`:i=this.#o?Math.max(r-this.step,this.min):Math.min(r+this.step,this.max);break;case`PageUp`:i=Math.min(r+(this.max-this.min)/5,this.max);break;case`PageDown`:i=Math.max(r-(this.max-this.min)/5,this.min);break;case`Home`:i=this.min;break;case`End`:i=this.max;break;default:return}if(i!==r){if(this.emit(`syn-move`,{cancelable:!0,detail:{element:t,value:i}}).defaultPrevented)return;if(this.restrictMovement){let e=this.#l(t,i);e.isRestricted&&(i=e.finalValue)}this.#p(t,i),this.#t.set(n,i),this.#e=Array.from(this.#t.values()),this.#m(),this.#_(t),this.#a=Array.from(this.#e),this.emit(`syn-input`),this.emit(`syn-change`)}e.stopPropagation(),e.preventDefault()}#g(e){e.relatedTarget&&this.shadowRoot?.contains(e.relatedTarget)||(this.emit(`syn-blur`),this.#n=!1)}#_(e){if(this.tooltipPlacement===`none`)return;let t=+e.dataset.rangeId;if(!this.#t.has(t))return;let n=this.#t.get(t),r=e.parentElement;r.content=this.tooltipFormatter(n)}#v(e){if(this.disabled)return;this.#n||(this.#n=!0,this.emit(`syn-focus`));let t=e.target;t?.dataset?.rangeId&&this.#_(t)}#y(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}#b(){if(!this.hasSlotController.test(`ticks`)){this.baseControl.style.marginBottom=``;return}let e=this.ticks.getBoundingClientRect().height,t=(this.baseControl.getBoundingClientRect().height-this.baseDiv.getBoundingClientRect().height)/2,n=Math.ceil(Math.max(0,e-t));this.baseControl.style.marginBottom=n>0?`${n}px`:``}renderThumbs(e){let t=this.#e.length>1;return this.#t.clear(),this.#e.map((r,i)=>{let a=i+1;this.#t.set(a,r);let o=`thumb-${a}`,s=``,c=``;return t?(c=e?`label aria-label-hidden ${o}`:`aria-label-hidden ${o}`,s=i===0?`${this.localize.term(`rangeMin`)} (${this.tooltipFormatter(r)})`:i===this.#e.length-1?`${this.localize.term(`rangeMax`)} (${this.tooltipFormatter(r)})`:this.tooltipFormatter(r)):c=e?`label aria-label-hidden`:``,n`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          .disabled=${this.tooltipPlacement===`none`||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${f(this.disabled||this.readonly?`true`:void 0)}
            aria-labelledby=${c}
            aria-label=${s}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${r}"
            aria-valuetext="${this.tooltipFormatter(r)}"
            class="thumb"
            data-range-id="${a}"
            id=${o}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${this.#u}
            @pointermove=${this.#d}
            @pointerup=${this.#f}
            @pointercancel=${this.#f}
            @pointerleave=${this.#f}
            @keydown=${this.#h}
            @focus=${this.#v}
          ></div>
        </syn-tooltip>
      `})}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),r=this.hasSlotController.test(`prefix`),a=this.hasSlotController.test(`suffix`),o=this.label?!0:!!e,s=this.helpText?!0:!!t;return n`
      <div
        part="form-control"
        class=${i({"form-control":!0,"form-control--has-help-text":s,"form-control--has-label":o,"form-control--has-prefix":r,"form-control--has-suffix":a,"form-control--is-disabled":this.disabled,"form-control--is-readonly":this.readonly,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`})}
        @focusout=${this.#g}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?`false`:`true`}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${this.#e.map(this.tooltipFormatter).join(` - `)})
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
              @invalid=${this.#y}
            />

            <div
              class="track__wrapper"
              @pointerdown=${this.#s}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(o)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${this.#c}
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
          aria-hidden=${s?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}},S([x()],B.prototype,`name`,void 0),S([x()],B.prototype,`label`,void 0),S([x({attribute:`help-text`})],B.prototype,`helpText`,void 0),S([x({reflect:!0,type:Boolean})],B.prototype,`disabled`,void 0),S([x({reflect:!0,type:Boolean})],B.prototype,`readonly`,void 0),S([x({type:Number})],B.prototype,`min`,void 0),S([x({type:Number})],B.prototype,`max`,void 0),S([x({type:Number})],B.prototype,`step`,void 0),S([x({reflect:!0})],B.prototype,`size`,void 0),S([x({attribute:`tooltip-placement`,type:String})],B.prototype,`tooltipPlacement`,void 0),S([x({type:String})],B.prototype,`value`,null),S([x({attribute:`restrict-movement`,type:Boolean})],B.prototype,`restrictMovement`,void 0),S([j()],B.prototype,`defaultValue`,void 0),S([x({reflect:!0})],B.prototype,`form`,void 0),S([x({attribute:!1})],B.prototype,`tooltipFormatter`,void 0),S([T(`.input__wrapper`)],B.prototype,`baseDiv`,void 0),S([T(`.base`)],B.prototype,`baseControl`,void 0),S([T(`.active-track`)],B.prototype,`activeTrack`,void 0),S([T(`.ticks`)],B.prototype,`ticks`,void 0),S([v(`.thumb`)],B.prototype,`thumbs`,void 0),S([T(`.range__validation-input`)],B.prototype,`validationInput`,void 0),B=S([D(`SynRange`)],B),V=B})),U=e((()=>{H(),H(),V.define(`syn-range`)}));export{U as t};