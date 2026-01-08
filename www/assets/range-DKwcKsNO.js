import{n as Z,x as L}from"./iframe-DKzh7HHt.js";import{o as tt}from"./if-defined-DWhkacz2.js";import{c as et,n as f,S as it}from"./synergy-element-D4Cp3n7p.js";import{e as st,a as M}from"./query-D0jTsbLw.js";import{e as rt}from"./class-map-Bipwc1iT.js";import{d as at}from"./default-value-C9FSfLbD.js";import{F as ot,c as nt,v as lt}from"./form-d9hCJUdr.js";import{H as ht}from"./slot-9EVoRGQc.js";import{L as ct}from"./localize-Dh03wnLC.js";import{f as ut,a as dt}from"./form-control.custom.styles-MMjKA1AU.js";import{S as pt}from"./tooltip.component-C8W6Ragh.js";import{e as mt}from"./decorator-DeP7ND_N.js";let ft;function bt(t){return(e,i)=>st(e,i,{get(){return(this.renderRoot??(ft??=document.createDocumentFragment())).querySelectorAll(t)}})}const y=(t,e)=>t-e,w=(t,e)=>{if(t.length!==e.length)return!0;const i=t.slice().sort(y),a=e.slice().sort(y);for(let s=0;s<i.length;s+=1)if(i[s]!==a[s])return!0;return!1},U=(t,e,i)=>{const a=t.getBoundingClientRect(),s=a.width;if(s<=0)return 0;let n=e;return n-=a.left,n<=0?i?1:0:n>=s?i?0:1:(n/=s,i?1-n:n)},vt=Z`
  :host {
    /*
     * Values here apply for the default size of "medium"
     * For other sizes, see below
     */
    --thumb-size: var(--syn-spacing-medium);
    --thumb-hit-area-size: 1.4;
    --track-hit-area-size: var(--syn-spacing-medium);
    --track-active-offset: 0px;
    --track-color-active: var(--syn-range-track-color-active,var(--syn-color-primary-600));
    --track-color-inactive: var(--syn-range-color-inactive, var(--syn-color-neutral-200));
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
    background-color: var(--syn-interactive-emphasis-color,var(--syn-color-primary-600));
    border: var(--syn-focus-ring-width) solid var(--syn-input-border-color-offset, var(--syn-color-neutral-0));
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
    background: var(--syn-interactive-emphasis-color-active, var(--syn-color-primary-950));
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: grabbing;
  }

  .thumb:focus-visible {
    outline: none;
  }

  .thumb:not(.grabbed):focus-visible {
    background: var(--syn-interactive-emphasis-color-hover,var(--syn-color-primary-900));
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
      background: var(--syn-interactive-emphasis-color-hover, var(--syn-color-primary-900));
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
    --track-color-active: var(--syn-range-error-color ,var(--syn-input-border-color-focus-error));
  }

  :host([data-user-invalid]) .thumb {
    background-color: var(--syn-range-error-color ,var(--syn-input-border-color-focus-error));
  }
`;var yt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,W=t=>{throw TypeError(t)},d=(t,e,i,a)=>{for(var s=a>1?void 0:a?gt(e,i):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(s=(a?c(e,i,s):c(s))||s);return a&&s&&yt(e,i,s),s},E=(t,e,i)=>e.has(t)||W("Cannot "+i),r=(t,e,i)=>(E(t,e,"read from private field"),i?i.call(t):e.get(t)),v=(t,e,i)=>e.has(t)?W("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),m=(t,e,i,a)=>(E(t,e,"write to private field"),e.set(t,i),i),h=(t,e,i)=>(E(t,e,"access private method"),i),l,p,z,x,V,g,o,S,F,H,D,q,N,T,I,C,X,j,_,G,Y,K;let u=class extends it{constructor(){super(),v(this,o),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new ht(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new ot(this,{assumeInteractionOn:["syn-change"]}),this.localize=new ct(this),v(this,l,[0]),v(this,p,new Map),v(this,z,!1),v(this,x,""),v(this,V),v(this,g,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(t){m(this,l,t?t.split(" ").map(Number).sort(y):[])}get value(){return r(this,l).slice().sort(y).join(" ")}set valueAsArray(t){const e=r(this,l);m(this,l,Array.isArray(t)?t.slice().sort(y):t||[]),w(e,r(this,l))&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...r(this,l)].sort(y)}disconnectedCallback(){super.disconnectedCallback(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.visibilityObserver=new IntersectionObserver(t=>{const e=t.at(0);e&&e.isIntersecting&&e.target.checkVisibility()&&h(this,o,K).call(this,e.boundingClientRect.height)},{root:this.ticks.parentElement}),this.visibilityObserver.observe(this.ticks),this.formControlController.updateValidity(),m(this,g,Array.from(r(this,l))),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{e.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=r(this,l).map(i=>{if(i<=this.min)return this.min;if(i>=this.max)return this.max;const a=this.min+this.step*Math.round((i-this.min)/this.step);return a>this.max?this.max:a});w(r(this,l),e)&&m(this,l,e)}updated(t){super.updated(t);for(const e of this.thumbs){const i=+e.dataset.rangeId;r(this,p).has(i)&&h(this,o,I).call(this,e,r(this,p).get(i))}h(this,o,C).call(this)}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!r(this,x);return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(r(this,V)),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),m(this,V,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),t}setCustomValidity(t){m(this,x,t),this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return r(this,x)?nt:lt}get validationMessage(){return r(this,x)}renderThumbs(t){const e=r(this,l).length>1;return r(this,p).clear(),r(this,l).map((i,a)=>{const s=a+1;r(this,p).set(s,i);const n=`thumb-${s}`;let c="",b="";return e?(b=t?`label aria-label-hidden ${n}`:`aria-label-hidden ${n}`,a===0?c=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(i)})`:a===r(this,l).length-1?c=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(i)})`:c=this.tooltipFormatter(i)):b=t?"label aria-label-hidden":"",L`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          hoist
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${tt(this.disabled?"true":void 0)}
            aria-labelledby=${b}
            aria-label=${c}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${i}"
            aria-valuetext="${this.tooltipFormatter(i)}"
            class="thumb"
            data-range-id="${s}"
            id=${n}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${h(this,o,q)}
            @pointermove=${h(this,o,N)}
            @pointerup=${h(this,o,T)}
            @pointercancel=${h(this,o,T)}
            @pointerleave=${h(this,o,T)}
            @keydown=${h(this,o,X)}
            @focus=${h(this,o,G)}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix"),s=this.label?!0:!!t,n=this.helpText?!0:!!e;return L`
      <div
        part="form-control"
        class=${rt({"form-control":!0,"form-control--has-help-text":n,"form-control--has-label":s,"form-control--has-prefix":i,"form-control--has-suffix":a,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${h(this,o,j)}
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
              @invalid=${h(this,o,Y)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${h(this,o,F)}
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
              @pointerdown=${h(this,o,H)}
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
    `}};l=new WeakMap;p=new WeakMap;z=new WeakMap;x=new WeakMap;V=new WeakMap;g=new WeakMap;o=new WeakSet;S=function(){return this.localize.dir()==="rtl"};F=function(t,e=!0){if(this.disabled)return;const{clientX:i}=t,a=Array.from(this.thumbs),s=U(this.baseDiv,i,r(this,o,S)),n=this.step/(this.max-this.min),c=this.min+this.step*Math.round(s/n),b=a.reduce((A,P)=>{const R=r(this,p).get(+P.dataset.rangeId),Q=r(this,p).get(+A.dataset.rangeId),O=Math.abs(R-c),B=Math.abs(Q-c);return O===B?R<c?P:A:O<B?P:A}),k=+b.dataset.rangeId;if(!k)return;r(this,p).set(k,c),h(this,o,I).call(this,b,c);const $=r(this,l);m(this,l,Array.from(r(this,p).values())),h(this,o,C).call(this),w($,r(this,l))&&(m(this,g,Array.from(r(this,l))),this.emit("syn-input"),this.emit("syn-change"));const J=new PointerEvent("pointerdown",t);e&&b.dispatchEvent(J)&&h(this,o,_).call(this,b)};H=function(t){h(this,o,F).call(this,t,!1)};D=function(t,e){const i=this.valueAsArray,s=Array.from(this.thumbs).indexOf(t),n=i[s-1]||this.min,c=i[s+1]||this.max,b=e<n||e>c;return{finalValue:Math.max(n,Math.min(c,e)),isRestricted:b,nextValue:c,prevValue:n}};q=async function(t){if(this.disabled)return;const e=t.target;h(this,o,_).call(this,e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()};N=function(t){if(this.disabled)return;const e=t.target,i=+e.dataset.rangeId;if(!r(this,p).has(i)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const s=U(this.baseDiv,t.clientX,r(this,o,S)),n=this.step/(this.max-this.min);let c=this.min+this.step*Math.round(s/n);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:c}}).defaultPrevented)return;if(this.restrictMovement){const $=h(this,o,D).call(this,e,c);$.isRestricted?(c=$.finalValue,e.style.zIndex=(3+this.thumbs.length).toFixed(0)):e.style.zIndex="3"}r(this,p).set(i,c),h(this,o,I).call(this,e,c);const k=r(this,l);m(this,l,Array.from(r(this,p).values())),h(this,o,C).call(this),w(k,r(this,l))&&this.emit("syn-input")};T=async function(t){const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,w(r(this,g),r(this,l))&&(m(this,g,Array.from(r(this,l))),this.emit("syn-change")),await e.parentElement.hide())};I=function(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const i=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc(${100*i}% - var(--half-thumb-size))`,h(this,o,_).call(this,t)};C=function(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(r(this,l).length===1){const s=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",n=100*(r(this,l)[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${s}, ${n}%)`,t.style.insetInlineEnd=`min(calc(100% - ${s}), calc(100% - ${n}%))`;return}const e=r(this,l).slice().sort(y),i=100*(e[0]-this.min)/(this.max-this.min),a=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${i}%`,t.style.insetInlineEnd=`calc(100% - ${a}%)`};X=function(t){const e=t.target,i=+e.dataset.rangeId,a=r(this,p).get(i);if(a===void 0)return;let s=a;switch(t.key){case"ArrowUp":case"Up":s=Math.min(a+this.step,this.max);break;case"ArrowDown":case"Down":s=Math.max(a-this.step,this.min);break;case"ArrowLeft":case"Left":s=r(this,o,S)?Math.min(a+this.step,this.max):Math.max(a-this.step,this.min);break;case"ArrowRight":case"Right":s=r(this,o,S)?Math.max(a-this.step,this.min):Math.min(a+this.step,this.max);break;case"PageUp":s=Math.min(a+(this.max-this.min)/5,this.max);break;case"PageDown":s=Math.max(a-(this.max-this.min)/5,this.min);break;case"Home":s=this.min;break;case"End":s=this.max;break;default:return}if(s!==a){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:s}}).defaultPrevented)return;if(this.restrictMovement){const c=h(this,o,D).call(this,e,s);c.isRestricted&&(s=c.finalValue)}h(this,o,I).call(this,e,s),r(this,p).set(i,s),m(this,l,Array.from(r(this,p).values())),h(this,o,C).call(this),h(this,o,_).call(this,e),m(this,g,Array.from(r(this,l))),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()};j=function(t){t.relatedTarget&&this.shadowRoot?.contains(t.relatedTarget)||(this.emit("syn-blur"),m(this,z,!1))};_=function(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!r(this,p).has(e))return;const i=r(this,p).get(e),a=t.parentElement;a.content=this.tooltipFormatter(i)};G=function(t){if(this.disabled)return;r(this,z)||(m(this,z,!0),this.emit("syn-focus"));const e=t.target;e?.dataset?.rangeId&&h(this,o,_).call(this,e)};Y=function(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)};K=function(t){const e=this.hasSlotController.test("ticks"),i=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix");if(!e)return;let s=t||this.shadowRoot?.querySelector(".ticks")?.clientHeight;if(s){if(s+=2,s/=2,i){const n=this.shadowRoot?.querySelector(".input__prefix");n.style.transform=`translateY(-${s}px)`}if(a){const n=this.shadowRoot?.querySelector(".input__suffix");n.style.transform=`translateY(-${s}px)`}}};u.styles=[et,ut,dt,vt];u.dependencies={"syn-tooltip":pt};d([f()],u.prototype,"name",2);d([f()],u.prototype,"label",2);d([f({attribute:"help-text"})],u.prototype,"helpText",2);d([f({reflect:!0,type:Boolean})],u.prototype,"disabled",2);d([f({type:Number})],u.prototype,"min",2);d([f({type:Number})],u.prototype,"max",2);d([f({type:Number})],u.prototype,"step",2);d([f({reflect:!0})],u.prototype,"size",2);d([f({attribute:"tooltip-placement",type:String})],u.prototype,"tooltipPlacement",2);d([f({type:String})],u.prototype,"value",1);d([f({attribute:"restrict-movement",type:Boolean})],u.prototype,"restrictMovement",2);d([at()],u.prototype,"defaultValue",2);d([f({reflect:!0})],u.prototype,"form",2);d([f({attribute:!1})],u.prototype,"tooltipFormatter",2);d([M(".input__wrapper")],u.prototype,"baseDiv",2);d([M(".active-track")],u.prototype,"activeTrack",2);d([M(".ticks")],u.prototype,"ticks",2);d([bt(".thumb")],u.prototype,"thumbs",2);d([M(".range__validation-input")],u.prototype,"validationInput",2);u=d([mt("SynRange")],u);u.define("syn-range");
