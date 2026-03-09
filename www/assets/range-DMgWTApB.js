import{j as Z,c as H}from"./iframe-DtvPklk3.js";import{o as tt}from"./if-defined-CpGYur4H.js";import{c as et,n as f,S as it}from"./synergy-element-DDXtXjm4.js";import{e as st,a as I}from"./query-D0jTsbLw.js";import{e as rt}from"./class-map-Cn49rhip.js";import{d as at}from"./default-value-B5aw-36d.js";import{F as ot,c as nt,v as lt}from"./form-d9hCJUdr.js";import{H as ht}from"./slot-9EVoRGQc.js";import{L as ct}from"./localize-Dh03wnLC.js";import{f as dt}from"./form-control.styles-ByfDgDKP.js";import{S as ut}from"./tooltip.component-CVv0Cx-1.js";import{e as pt}from"./decorator-CWkWRMhy.js";let mt;function ft(t){return(e,i)=>st(e,i,{get(){return(this.renderRoot??(mt??=document.createDocumentFragment())).querySelectorAll(t)}})}const y=(t,e)=>t-e,w=(t,e)=>{if(t.length!==e.length)return!0;const i=t.slice().sort(y),a=e.slice().sort(y);for(let s=0;s<i.length;s+=1)if(i[s]!==a[s])return!0;return!1},L=(t,e,i)=>{const a=t.getBoundingClientRect(),s=a.width;if(s<=0)return 0;let h=e;return h-=a.left,h<=0?i?1:0:h>=s?i?0:1:(h/=s,i?1-h:h)},bt=Z`
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
`;var vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,U=t=>{throw TypeError(t)},u=(t,e,i,a)=>{for(var s=a>1?void 0:a?yt(e,i):e,h=t.length-1,c;h>=0;h--)(c=t[h])&&(s=(a?c(e,i,s):c(s))||s);return a&&s&&vt(e,i,s),s},R=(t,e,i)=>e.has(t)||U("Cannot "+i),r=(t,e,i)=>(R(t,e,"read from private field"),i?i.call(t):e.get(t)),v=(t,e,i)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),m=(t,e,i,a)=>(R(t,e,"write to private field"),e.set(t,i),i),n=(t,e,i)=>(R(t,e,"access private method"),i),l,p,z,x,M,g,o,C,D,N,E,X,j,T,$,S,q,G,_,K,J,A;let d=class extends it{constructor(){super(),v(this,o),this.name="",this.label="",this.helpText="",this.disabled=!1,this.readonly=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new ht(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new ot(this,{assumeInteractionOn:["syn-change"]}),this.localize=new ct(this),v(this,l,[0]),v(this,p,new Map),v(this,z,!1),v(this,x,""),v(this,M),v(this,g,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(t){m(this,l,t?t.split(" ").map(Number).sort(y):[])}get value(){return r(this,l).slice().sort(y).join(" ")}set valueAsArray(t){const e=r(this,l);m(this,l,Array.isArray(t)?t.slice().sort(y):t||[]),w(e,r(this,l))&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...r(this,l)].sort(y)}disconnectedCallback(){super.disconnectedCallback(),this?.ticksResizeObserver?.disconnect(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.ticksResizeObserver=new ResizeObserver(()=>{n(this,o,A).call(this)}),this.ticksResizeObserver.observe(this.ticks),this.ticksResizeObserver.observe(this.baseControl),this.visibilityObserver=new IntersectionObserver(t=>{const e=t.at(0);e&&e.isIntersecting&&n(this,o,A).call(this)}),this.visibilityObserver.observe(this),n(this,o,A).call(this),this.formControlController.updateValidity(),m(this,g,Array.from(r(this,l))),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{e.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=r(this,l).map(i=>{if(i<=this.min)return this.min;if(i>=this.max)return this.max;const a=this.min+this.step*Math.round((i-this.min)/this.step);return a>this.max?this.max:a});w(r(this,l),e)&&m(this,l,e)}updated(t){super.updated(t);for(const e of this.thumbs){const i=+e.dataset.rangeId;r(this,p).has(i)&&n(this,o,$).call(this,e,r(this,p).get(i))}n(this,o,S).call(this)}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!r(this,x);return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(r(this,M)),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),m(this,M,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),t}setCustomValidity(t){m(this,x,t),this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return r(this,x)?nt:lt}get validationMessage(){return r(this,x)}renderThumbs(t){const e=r(this,l).length>1;return r(this,p).clear(),r(this,l).map((i,a)=>{const s=a+1;r(this,p).set(s,i);const h=`thumb-${s}`;let c="",b="";return e?(b=t?`label aria-label-hidden ${h}`:`aria-label-hidden ${h}`,a===0?c=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(i)})`:a===r(this,l).length-1?c=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(i)})`:c=this.tooltipFormatter(i)):b=t?"label aria-label-hidden":"",H`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${tt(this.disabled||this.readonly?"true":void 0)}
            aria-labelledby=${b}
            aria-label=${c}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${i}"
            aria-valuetext="${this.tooltipFormatter(i)}"
            class="thumb"
            data-range-id="${s}"
            id=${h}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${n(this,o,X)}
            @pointermove=${n(this,o,j)}
            @pointerup=${n(this,o,T)}
            @pointercancel=${n(this,o,T)}
            @pointerleave=${n(this,o,T)}
            @keydown=${n(this,o,q)}
            @focus=${n(this,o,K)}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix"),s=this.label?!0:!!t,h=this.helpText?!0:!!e;return H`
      <div
        part="form-control"
        class=${rt({"form-control":!0,"form-control--has-help-text":h,"form-control--has-label":s,"form-control--has-prefix":i,"form-control--has-suffix":a,"form-control--is-disabled":this.disabled,"form-control--is-readonly":this.readonly,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${n(this,o,G)}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${r(this,l).map(this.tooltipFormatter).join(" - ")})
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
              @invalid=${n(this,o,J)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${n(this,o,D)}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(s)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${n(this,o,N)}
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
          aria-hidden=${h?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};l=new WeakMap;p=new WeakMap;z=new WeakMap;x=new WeakMap;M=new WeakMap;g=new WeakMap;o=new WeakSet;C=function(){return this.localize.dir()==="rtl"};D=function(t,e=!0){if(this.disabled)return;if(this.readonly){t.preventDefault(),this.focus();return}const{clientX:i}=t,a=Array.from(this.thumbs),s=L(this.baseDiv,i,r(this,o,C)),h=this.step/(this.max-this.min),c=this.min+this.step*Math.round(s/h),b=a.reduce((P,F)=>{const B=r(this,p).get(+F.dataset.rangeId),Y=r(this,p).get(+P.dataset.rangeId),O=Math.abs(B-c),W=Math.abs(Y-c);return O===W?B<c?F:P:O<W?F:P}),k=+b.dataset.rangeId;if(!k)return;r(this,p).set(k,c),n(this,o,$).call(this,b,c);const V=r(this,l);m(this,l,Array.from(r(this,p).values())),n(this,o,S).call(this),w(V,r(this,l))&&(m(this,g,Array.from(r(this,l))),this.emit("syn-input"),this.emit("syn-change"));const Q=new PointerEvent("pointerdown",t);e&&b.dispatchEvent(Q)&&n(this,o,_).call(this,b)};N=function(t){n(this,o,D).call(this,t,!1)};E=function(t,e){const i=this.valueAsArray,s=Array.from(this.thumbs).indexOf(t),h=i[s-1]||this.min,c=i[s+1]||this.max,b=e<h||e>c;return{finalValue:Math.max(h,Math.min(c,e)),isRestricted:b,nextValue:c,prevValue:h}};X=async function(t){if(this.disabled||this.readonly)return;const e=t.target;n(this,o,_).call(this,e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()};j=function(t){if(this.disabled||this.readonly)return;const e=t.target,i=+e.dataset.rangeId;if(!r(this,p).has(i)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const s=L(this.baseDiv,t.clientX,r(this,o,C)),h=this.step/(this.max-this.min);let c=this.min+this.step*Math.round(s/h);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:c}}).defaultPrevented)return;if(this.restrictMovement){const V=n(this,o,E).call(this,e,c);V.isRestricted?(c=V.finalValue,e.style.zIndex=(3+this.thumbs.length).toFixed(0)):e.style.zIndex="3"}r(this,p).set(i,c),n(this,o,$).call(this,e,c);const k=r(this,l);m(this,l,Array.from(r(this,p).values())),n(this,o,S).call(this),w(k,r(this,l))&&this.emit("syn-input")};T=async function(t){if(this.disabled||this.readonly)return;const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,w(r(this,g),r(this,l))&&(m(this,g,Array.from(r(this,l))),this.emit("syn-change")),await e.parentElement.hide())};$=function(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const i=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc(${100*i}% - var(--half-thumb-size))`,n(this,o,_).call(this,t)};S=function(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(r(this,l).length===1){const s=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",h=100*(r(this,l)[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${s}, ${h}%)`,t.style.insetInlineEnd=`min(calc(100% - ${s}), calc(100% - ${h}%))`;return}const e=r(this,l).slice().sort(y),i=100*(e[0]-this.min)/(this.max-this.min),a=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${i}%`,t.style.insetInlineEnd=`calc(100% - ${a}%)`};q=function(t){if(this.readonly)return;const e=t.target,i=+e.dataset.rangeId,a=r(this,p).get(i);if(a===void 0)return;let s=a;switch(t.key){case"ArrowUp":case"Up":s=Math.min(a+this.step,this.max);break;case"ArrowDown":case"Down":s=Math.max(a-this.step,this.min);break;case"ArrowLeft":case"Left":s=r(this,o,C)?Math.min(a+this.step,this.max):Math.max(a-this.step,this.min);break;case"ArrowRight":case"Right":s=r(this,o,C)?Math.max(a-this.step,this.min):Math.min(a+this.step,this.max);break;case"PageUp":s=Math.min(a+(this.max-this.min)/5,this.max);break;case"PageDown":s=Math.max(a-(this.max-this.min)/5,this.min);break;case"Home":s=this.min;break;case"End":s=this.max;break;default:return}if(s!==a){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:s}}).defaultPrevented)return;if(this.restrictMovement){const c=n(this,o,E).call(this,e,s);c.isRestricted&&(s=c.finalValue)}n(this,o,$).call(this,e,s),r(this,p).set(i,s),m(this,l,Array.from(r(this,p).values())),n(this,o,S).call(this),n(this,o,_).call(this,e),m(this,g,Array.from(r(this,l))),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()};G=function(t){t.relatedTarget&&this.shadowRoot?.contains(t.relatedTarget)||(this.emit("syn-blur"),m(this,z,!1))};_=function(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!r(this,p).has(e))return;const i=r(this,p).get(e),a=t.parentElement;a.content=this.tooltipFormatter(i)};K=function(t){if(this.disabled)return;r(this,z)||(m(this,z,!0),this.emit("syn-focus"));const e=t.target;e?.dataset?.rangeId&&n(this,o,_).call(this,e)};J=function(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)};A=function(){if(!this.hasSlotController.test("ticks")){this.baseControl.style.marginBottom="";return}const t=this.ticks.getBoundingClientRect().height,e=this.baseControl.getBoundingClientRect().height,i=this.baseDiv.getBoundingClientRect().height,a=(e-i)/2,s=Math.ceil(Math.max(0,t-a));this.baseControl.style.marginBottom=s>0?`${s}px`:""};d.styles=[et,dt,bt];d.dependencies={"syn-tooltip":ut};u([f()],d.prototype,"name",2);u([f()],d.prototype,"label",2);u([f({attribute:"help-text"})],d.prototype,"helpText",2);u([f({reflect:!0,type:Boolean})],d.prototype,"disabled",2);u([f({reflect:!0,type:Boolean})],d.prototype,"readonly",2);u([f({type:Number})],d.prototype,"min",2);u([f({type:Number})],d.prototype,"max",2);u([f({type:Number})],d.prototype,"step",2);u([f({reflect:!0})],d.prototype,"size",2);u([f({attribute:"tooltip-placement",type:String})],d.prototype,"tooltipPlacement",2);u([f({type:String})],d.prototype,"value",1);u([f({attribute:"restrict-movement",type:Boolean})],d.prototype,"restrictMovement",2);u([at()],d.prototype,"defaultValue",2);u([f({reflect:!0})],d.prototype,"form",2);u([f({attribute:!1})],d.prototype,"tooltipFormatter",2);u([I(".input__wrapper")],d.prototype,"baseDiv",2);u([I(".base")],d.prototype,"baseControl",2);u([I(".active-track")],d.prototype,"activeTrack",2);u([I(".ticks")],d.prototype,"ticks",2);u([ft(".thumb")],d.prototype,"thumbs",2);u([I(".range__validation-input")],d.prototype,"validationInput",2);d=u([pt("SynRange")],d);d.define("syn-range");
