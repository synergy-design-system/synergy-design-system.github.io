import{h as _t,x as y,g as St}from"./iframe-DkuhNNKt.js";import{o as wt}from"./if-defined-C0_zlWaf.js";import{c as zt,n as g,S as Tt}from"./synergy-element-DwyHbzMO.js";import{e as Ct,a as K}from"./query-DAIS6qJ0.js";import{e as Vt}from"./class-map-ObrBcWXB.js";import{d as It}from"./default-value-BhbvYS1P.js";import{F as Mt,c as $t,v as Dt}from"./form-d9hCJUdr.js";import{H as Et}from"./slot-9EVoRGQc.js";import{L as At}from"./localize-Dh03wnLC.js";import{f as Pt,a as Ft}from"./form-control.custom.styles-Bk8DPYPN.js";import{S as Lt}from"./tooltip.component-B6rMELmH.js";import{e as qt}from"./decorator-DANECR0-.js";import"./button-BM6w7vIU.js";import"./input-dCATxEsX.js";import"./range-tick-BSyecKQ0.js";import{g as h,s as Ot,a as Rt,c as Ht,b as Nt}from"./component-BcSeKVdu.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DihgwUfS.js";import"./animation-registry-l4L8bmT6.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./popup.component-DtEOUHEx.js";import"./functions-CDi3doZH.js";import"./icon.component-0vAZ8ena.js";import"./spinner.component-DXnlr2TD.js";import"./live-l8S-hqLc.js";import"./divider.component-ClYMPUJY.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wt;function Bt(t){return(e,s)=>Ct(e,s,{get(){return(this.renderRoot??(Wt??=document.createDocumentFragment())).querySelectorAll(t)}})}const x=(t,e)=>t-e,q=(t,e)=>{if(t.length!==e.length)return!0;const s=t.slice().sort(x),a=e.slice().sort(x);for(let r=0;r<s.length;r+=1)if(s[r]!==a[r])return!0;return!1},pt=(t,e,s)=>{const a=t.getBoundingClientRect(),r=a.width;if(r<=0)return 0;let o=e;return o-=a.left,o<=0?s?1:0:o>=r?s?0:1:(o/=r,s?1-o:o)},Ut=_t`
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
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    margin: calc((var(--full-thumb-size) - var(--track-height)) / 2) calc(var(--half-thumb-size) * -1);
  }

  .active-track {
    background-color: var(--track-color-active);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    margin: 0 calc(var(--half-thumb-size) * -1);
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
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: grab;
  }

  .thumb.grabbed {
    background: var(--syn-color-primary-950);
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
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
`;var jt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,ut=t=>{throw TypeError(t)},m=(t,e,s,a)=>{for(var r=a>1?void 0:a?Yt(e,s):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(r=(a?p(e,s,r):p(r))||r);return a&&r&&jt(e,s,r),r},Z=(t,e,s)=>e.has(t)||ut("Cannot "+s),i=(t,e,s)=>(Z(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,a)=>(Z(t,e,"write to private field"),e.set(t,s),s),c=(t,e,s)=>(Z(t,e,"access private method"),s),l,d,O,_,G,k,n,R,tt,mt,et,dt,ht,X,H,N,yt,ft,S,gt,vt,bt;let u=class extends Tt{constructor(){super(),b(this,n),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new Et(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-change"]}),this.localize=new At(this),b(this,l,[0]),b(this,d,new Map),b(this,O,!1),b(this,_,""),b(this,G),b(this,k,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(t){f(this,l,t?t.split(" ").map(Number).sort(x):[])}get value(){return i(this,l).slice().sort(x).join(" ")}set valueAsArray(t){const e=i(this,l);f(this,l,Array.isArray(t)?t.slice().sort(x):t||[]),q(e,i(this,l))&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...i(this,l)].sort(x)}disconnectedCallback(){super.disconnectedCallback(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.visibilityObserver=new IntersectionObserver(t=>{const e=t.at(0);e&&e.isIntersecting&&e.target.checkVisibility()&&c(this,n,bt).call(this,e.boundingClientRect.height)},{root:this.ticks.parentElement}),this.visibilityObserver.observe(this.ticks),this.formControlController.updateValidity(),f(this,k,Array.from(i(this,l))),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{e.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=i(this,l).map(s=>{if(s<=this.min)return this.min;if(s>=this.max)return this.max;const a=this.min+this.step*Math.round((s-this.min)/this.step);return a>this.max?this.max:a});q(i(this,l),e)&&f(this,l,e)}updated(t){super.updated(t);for(const e of this.thumbs){const s=+e.dataset.rangeId;i(this,d).has(s)&&c(this,n,H).call(this,e,i(this,d).get(s))}c(this,n,N).call(this)}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!i(this,_);return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(i(this,G)),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),f(this,G,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),t}setCustomValidity(t){f(this,_,t),this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return i(this,_)?$t:Dt}get validationMessage(){return i(this,_)}renderThumbs(t){const e=i(this,l).length>1;return i(this,d).clear(),i(this,l).map((s,a)=>{const r=a+1;i(this,d).set(r,s);const o=`thumb-${r}`;let p="",v="";return e?(v=t?`label aria-label-hidden ${o}`:`aria-label-hidden ${o}`,a===0?p=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(s)})`:a===i(this,l).length-1?p=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(s)})`:p=this.tooltipFormatter(s)):v=t?"label aria-label-hidden":"",y`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          hoist
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${wt(this.disabled?"true":void 0)}
            aria-labelledby=${v}
            aria-label=${p}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${s}"
            aria-valuetext="${this.tooltipFormatter(s)}"
            class="thumb"
            data-range-id="${r}"
            id=${o}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${c(this,n,dt)}
            @pointermove=${c(this,n,ht)}
            @pointerup=${c(this,n,X)}
            @pointercancel=${c(this,n,X)}
            @pointerleave=${c(this,n,X)}
            @keydown=${c(this,n,yt)}
            @focus=${c(this,n,gt)}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix"),r=this.label?!0:!!t,o=this.helpText?!0:!!e;return y`
      <div
        part="form-control"
        class=${Vt({"form-control":!0,"form-control--has-help-text":o,"form-control--has-label":r,"form-control--has-prefix":s,"form-control--has-suffix":a,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${c(this,n,ft)}
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
          (${i(this,l).map(this.tooltipFormatter).join(" - ")})
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
              @invalid=${c(this,n,vt)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${c(this,n,tt)}
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
              @pointerdown=${c(this,n,mt)}
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};l=new WeakMap;d=new WeakMap;O=new WeakMap;_=new WeakMap;G=new WeakMap;k=new WeakMap;n=new WeakSet;R=function(){return this.localize.dir()==="rtl"};tt=function(t,e=!0){if(this.disabled)return;const{clientX:s}=t,a=Array.from(this.thumbs),r=pt(this.baseDiv,s,i(this,n,R)),o=this.step/(this.max-this.min),p=this.min+this.step*Math.round(r/o),v=a.reduce((J,Q)=>{const rt=i(this,d).get(+Q.dataset.rangeId),kt=i(this,d).get(+J.dataset.rangeId),it=Math.abs(rt-p),at=Math.abs(kt-p);return it===at?rt<p?Q:J:it<at?Q:J}),w=+v.dataset.rangeId;if(!w)return;i(this,d).set(w,p),c(this,n,H).call(this,v,p);const W=i(this,l);f(this,l,Array.from(i(this,d).values())),c(this,n,N).call(this),q(W,i(this,l))&&(f(this,k,Array.from(i(this,l))),this.emit("syn-input"),this.emit("syn-change"));const xt=new PointerEvent("pointerdown",t);e&&v.dispatchEvent(xt)&&c(this,n,S).call(this,v)};mt=function(t){c(this,n,tt).call(this,t,!1)};et=function(t,e){const s=this.valueAsArray,r=Array.from(this.thumbs).indexOf(t),o=s[r-1]||this.min,p=s[r+1]||this.max,v=e<o||e>p;return{finalValue:Math.max(o,Math.min(p,e)),isRestricted:v,nextValue:p,prevValue:o}};dt=async function(t){if(this.disabled)return;const e=t.target;c(this,n,S).call(this,e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()};ht=function(t){if(this.disabled)return;const e=t.target,s=+e.dataset.rangeId;if(!i(this,d).has(s)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const r=pt(this.baseDiv,t.clientX,i(this,n,R)),o=this.step/(this.max-this.min);let p=this.min+this.step*Math.round(r/o);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:p}}).defaultPrevented)return;if(this.restrictMovement){const W=c(this,n,et).call(this,e,p);W.isRestricted?(p=W.finalValue,e.style.zIndex=(3+this.thumbs.length).toFixed(0)):e.style.zIndex="3"}i(this,d).set(s,p),c(this,n,H).call(this,e,p);const w=i(this,l);f(this,l,Array.from(i(this,d).values())),c(this,n,N).call(this),q(w,i(this,l))&&this.emit("syn-input")};X=async function(t){const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,q(i(this,k),i(this,l))&&(f(this,k,Array.from(i(this,l))),this.emit("syn-change")),await e.parentElement.hide())};H=function(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const s=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc(${100*s}% - var(--half-thumb-size))`,c(this,n,S).call(this,t)};N=function(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(i(this,l).length===1){const r=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",o=100*(i(this,l)[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${r}, ${o}%)`,t.style.insetInlineEnd=`min(calc(100% - ${r}), calc(100% - ${o}%))`;return}const e=i(this,l).slice().sort(x),s=100*(e[0]-this.min)/(this.max-this.min),a=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${s}%`,t.style.insetInlineEnd=`calc(100% - ${a}%)`};yt=function(t){const e=t.target,s=+e.dataset.rangeId,a=i(this,d).get(s);if(a===void 0)return;let r=a;switch(t.key){case"ArrowUp":case"Up":r=Math.min(a+this.step,this.max);break;case"ArrowDown":case"Down":r=Math.max(a-this.step,this.min);break;case"ArrowLeft":case"Left":r=i(this,n,R)?Math.min(a+this.step,this.max):Math.max(a-this.step,this.min);break;case"ArrowRight":case"Right":r=i(this,n,R)?Math.max(a-this.step,this.min):Math.min(a+this.step,this.max);break;case"PageUp":r=Math.min(a+(this.max-this.min)/5,this.max);break;case"PageDown":r=Math.max(a-(this.max-this.min)/5,this.min);break;case"Home":r=this.min;break;case"End":r=this.max;break;default:return}if(r!==a){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:r}}).defaultPrevented)return;if(this.restrictMovement){const p=c(this,n,et).call(this,e,r);p.isRestricted&&(r=p.finalValue)}c(this,n,H).call(this,e,r),i(this,d).set(s,r),f(this,l,Array.from(i(this,d).values())),c(this,n,N).call(this),c(this,n,S).call(this,e),f(this,k,Array.from(i(this,l))),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()};ft=function(t){t.relatedTarget&&this.shadowRoot?.contains(t.relatedTarget)||(this.emit("syn-blur"),f(this,O,!1))};S=function(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!i(this,d).has(e))return;const s=i(this,d).get(e),a=t.parentElement;a.content=this.tooltipFormatter(s)};gt=function(t){if(this.disabled)return;i(this,O)||(f(this,O,!0),this.emit("syn-focus"));const e=t.target;e?.dataset?.rangeId&&c(this,n,S).call(this,e)};vt=function(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)};bt=function(t){const e=this.hasSlotController.test("ticks"),s=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix");if(!e)return;let r=t||this.shadowRoot?.querySelector(".ticks")?.clientHeight;if(r){if(r+=2,r/=2,s){const o=this.shadowRoot?.querySelector(".input__prefix");o.style.transform=`translateY(-${r}px)`}if(a){const o=this.shadowRoot?.querySelector(".input__suffix");o.style.transform=`translateY(-${r}px)`}}};u.styles=[zt,Pt,Ft,Ut];u.dependencies={"syn-tooltip":Lt};m([g()],u.prototype,"name",2);m([g()],u.prototype,"label",2);m([g({attribute:"help-text"})],u.prototype,"helpText",2);m([g({reflect:!0,type:Boolean})],u.prototype,"disabled",2);m([g({type:Number})],u.prototype,"min",2);m([g({type:Number})],u.prototype,"max",2);m([g({type:Number})],u.prototype,"step",2);m([g({reflect:!0})],u.prototype,"size",2);m([g({attribute:"tooltip-placement",type:String})],u.prototype,"tooltipPlacement",2);m([g({type:String})],u.prototype,"value",1);m([g({attribute:"restrict-movement",type:Boolean})],u.prototype,"restrictMovement",2);m([It()],u.prototype,"defaultValue",2);m([g({reflect:!0})],u.prototype,"form",2);m([g({attribute:!1})],u.prototype,"tooltipFormatter",2);m([K(".input__wrapper")],u.prototype,"baseDiv",2);m([K(".active-track")],u.prototype,"activeTrack",2);m([K(".ticks")],u.prototype,"ticks",2);m([Bt(".thumb")],u.prototype,"thumbs",2);m([K(".range__validation-input")],u.prototype,"validationInput",2);u=m([qt("SynRange")],u);u.define("syn-range");var nt=Object.freeze,Gt=Object.defineProperty,st=(t,e)=>nt(Gt(t,"raw",{value:nt(t.slice())})),ot,lt,ct;const{userEvent:Xt}=__STORYBOOK_MODULE_TEST__,{args:Kt,argTypes:Jt}=Ot("syn-range"),{overrideArgs:Qt}=Rt("syn-range"),{generateTemplate:Zt}=Ht("syn-range"),Ie={args:Qt([{name:"value",type:"attribute",value:"50"}],Kt),argTypes:Jt,component:"syn-range",parameters:{design:St("20575-35283"),docs:{description:{component:h("range","default")}}},tags:["Form"],title:"Components/syn-range"},z={parameters:{controls:{disable:!1},docs:{description:{story:h("range","default")},story:{height:"80px"}}},render:t=>Zt({args:t})},T={parameters:{docs:{description:{story:h("range","labels")}}},render:()=>y`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  `},C={parameters:{docs:{description:{story:h("range","help-text")}}},render:()=>y`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},V={parameters:{docs:{description:{story:h("range","disabled")}}},render:()=>y`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  `},B={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:h("range","invalid")}}},play:async({canvasElement:t})=>{try{const e=t.querySelector("syn-range"),s=t.querySelector("syn-button");e&&s&&(await Xt.click(s),s.click())}catch(e){console.error("Error in play function:",e)}},render:()=>y(ot||(ot=st([`
    <form class="custom-validity">
      <syn-range
        help-text="This is an error text"
        id="range-invalid"
        max="100"
        min="0"
        value="50"
      >

      </syn-range>
      <syn-button type="submit">Submit</syn-button>
    </form>
    <script type="module">
      document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
      });

      const range = document.querySelector('#range-invalid');
      range.setCustomValidity('Please enter a valid value');
    <\/script>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      syn-button {
        align-self: flex-start;
      }
    </style>
  `])))},U={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:h("range","focus")},story:{height:"80px"}}},play:({canvasElement:t})=>{const e=t.querySelector("syn-range");e&&e.focus()},render:()=>y`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  `},I={parameters:{docs:{description:{story:h("range","size")}}},render:()=>y`
    <div class="size-wrapper">
      <syn-range label="Small" max="100" min="0" size="small" value="33"></syn-range>
      <syn-range label="Medium" max="100" min="0" size="medium" value="66"></syn-range>
      <syn-range label="Large" max="100" min="0" size="large" value="99"></syn-range>
    </div>
    <style>
      .size-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-medium);
      }
    </style>
  `},M={parameters:{docs:{description:{story:h("range","prefix-suffix")}}},render:()=>y(lt||(lt=st([`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    >
      <span slot="prefix">0</span>
      <span slot="suffix">100</span>
    </syn-range>

    <br>
    <p>This can be used to add input fields or icons.</p>
    <br>

    <syn-range label="Estimated Time" class="suffix-input-field" min="0" max="60" value="30">
      <span slot="prefix">0</span>
      <span slot="suffix">
        <div class="suffix-input">
          60
          <syn-input value="30" type="number" no-spin-buttons min="0" max="60">
            <span slot="suffix">sec</span>
          </syn-input>
        </div>
      </span>
    </syn-range>
    
    <style>
      .suffix-input {
        align-items: center;
        display: flex;
        gap: var(--syn-spacing-medium);

        syn-input {
          min-width: 0;
        }
      }
    </style>
    <script>
      [...document.querySelectorAll('.suffix-input-field')]
        .forEach(range => {
          const input = range.querySelector('syn-input');

          range.addEventListener('syn-input', e => {
            const { target } = e;
            if (target.tagName !== 'SYN-RANGE') return;
            target.querySelector('syn-input').value = target.value;
            range.setCustomValidity('');
          });

          input.addEventListener('syn-input', e => {
            const { target } = e;
            target.closest('syn-range').value = target.value;

            const inputValidationMessage = target.validationMessage;

            if(inputValidationMessage) {
              range.setCustomValidity(inputValidationMessage);
            } else {
              range.setCustomValidity('');
            }
          });

          input.addEventListener('syn-change', e => {
            const { target } = e;
            if(!target.checkValidity()) {
              range.reportValidity();
            }
          });
        });
    <\/script>
  `])))},$={parameters:{docs:{description:{story:h("range","custom-track-colors")},story:{height:"80px"}}},render:()=>y`
    <syn-range
      class="custom-track-color"
      max="100"
      min="0"
      value="50"
    ></syn-range>
    <style>
      .custom-track-color {
        --track-color-active: var(--syn-color-success-700);
      }
    </style>
  `},D={parameters:{docs:{description:{story:h("range","custom-track-offset")},story:{height:"80px"}}},render:()=>y`
    <syn-range
      class="custom-track-offset"
      max="50"
      min="-50"
      value="-15"
    ></syn-range>
    <style>
      .custom-track-offset {
        --track-active-offset: 50%;
      }
    </style>
  `},E={parameters:{docs:{description:{story:h("range","multi-knob")},story:{height:"80px"}}},render:()=>y`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  `},j={parameters:{docs:{description:{story:h("range","multi-knob-restrict-movement")}}},render:()=>y`
    <syn-range
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      restrict-movement
      step="1"
    ></syn-range>
  `},A={parameters:{docs:{description:{story:h("range-tick","default")}}},render:()=>y`
  <div class="wrapper">
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>
    
    <p>${h("range-tick","subdivision")}</p>
   
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>

  </div>
    <style>
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }

      .syn-range-with-tick nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  `},P={parameters:{docs:{description:{story:h("range","tooltip-placement")},story:{height:"80px"}}},render:()=>y`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},F={parameters:{docs:{description:{story:h("range","tooltip-disabled")}}},render:()=>y`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  `},L={parameters:{docs:{description:{story:h("range","tooltip-formatter")}}},render:()=>y(ct||(ct=st([`
    <syn-range
      class="tooltip-formatter"
      max="100"
      min="0"
      value="50"
    >
      <nav slot="ticks">
        <syn-range-tick>0%</syn-range-tick>
        <syn-range-tick>50%</syn-range-tick>
        <syn-range-tick>100%</syn-range-tick>
      </nav>
    </syn-range>
    <style>
      .tooltip-formatter nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
    <script>
      document
        .querySelectorAll('.tooltip-formatter')
        .forEach(tip => {
          tip.tooltipFormatter = value => value + '%';
        });
    <\/script>
  `])))},Y=Nt({Default:z,Labels:T,HelpText:C,Disabled:V,Sizes:I,PrefixSuffixText:M,CustomTrackColors:$,CustomTrackOffset:D,MultiThumb:E,Ticks:A,TooltipPlacement:P,TooltipDisabled:F,TooltipFormatter:L},500);z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('range', 'default')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  \`
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  \`
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  \`
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('range', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const range = canvasElement.querySelector('syn-range');
      const button = canvasElement.querySelector('syn-button');
      if (range && button) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-range
        help-text="This is an error text"
        id="range-invalid"
        max="100"
        min="0"
        value="50"
      >

      </syn-range>
      <syn-button type="submit">Submit</syn-button>
    </form>
    <script type="module">
      document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
      });

      const range = document.querySelector('#range-invalid');
      range.setCustomValidity('Please enter a valid value');
    <\/script>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      syn-button {
        align-self: flex-start;
      }
    </style>
  \`
}`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('range', 'focus')
      },
      story: {
        height: '80px'
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector('syn-range');
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  \`
}`,...U.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'size')
      }
    }
  },
  render: () => html\`
    <div class="size-wrapper">
      <syn-range label="Small" max="100" min="0" size="small" value="33"></syn-range>
      <syn-range label="Medium" max="100" min="0" size="medium" value="66"></syn-range>
      <syn-range label="Large" max="100" min="0" size="large" value="99"></syn-range>
    </div>
    <style>
      .size-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-medium);
      }
    </style>
  \`
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    >
      <span slot="prefix">0</span>
      <span slot="suffix">100</span>
    </syn-range>

    <br>
    <p>This can be used to add input fields or icons.</p>
    <br>

    <syn-range label="Estimated Time" class="suffix-input-field" min="0" max="60" value="30">
      <span slot="prefix">0</span>
      <span slot="suffix">
        <div class="suffix-input">
          60
          <syn-input value="30" type="number" no-spin-buttons min="0" max="60">
            <span slot="suffix">sec</span>
          </syn-input>
        </div>
      </span>
    </syn-range>
    
    <style>
      .suffix-input {
        align-items: center;
        display: flex;
        gap: var(--syn-spacing-medium);

        syn-input {
          min-width: 0;
        }
      }
    </style>
    <script>
      [...document.querySelectorAll('.suffix-input-field')]
        .forEach(range => {
          const input = range.querySelector('syn-input');

          range.addEventListener('syn-input', e => {
            const { target } = e;
            if (target.tagName !== 'SYN-RANGE') return;
            target.querySelector('syn-input').value = target.value;
            range.setCustomValidity('');
          });

          input.addEventListener('syn-input', e => {
            const { target } = e;
            target.closest('syn-range').value = target.value;

            const inputValidationMessage = target.validationMessage;

            if(inputValidationMessage) {
              range.setCustomValidity(inputValidationMessage);
            } else {
              range.setCustomValidity('');
            }
          });

          input.addEventListener('syn-change', e => {
            const { target } = e;
            if(!target.checkValidity()) {
              range.reportValidity();
            }
          });
        });
    <\/script>
  \`
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'custom-track-colors')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range
      class="custom-track-color"
      max="100"
      min="0"
      value="50"
    ></syn-range>
    <style>
      .custom-track-color {
        --track-color-active: var(--syn-color-success-700);
      }
    </style>
  \`
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'custom-track-offset')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range
      class="custom-track-offset"
      max="50"
      min="-50"
      value="-15"
    ></syn-range>
    <style>
      .custom-track-offset {
        --track-active-offset: 50%;
      }
    </style>
  \`
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'multi-knob')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  \`
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    docs: {
      description: {
        story: generateStoryDescription('range', 'multi-knob-restrict-movement')
      }
    }
  },
  render: () => html\`
    <syn-range
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      restrict-movement
      step="1"
    ></syn-range>
  \`
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'default')
      }
    }
  },
  render: () => html\`
  <div class="wrapper">
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>
    
    <p>\${generateStoryDescription('range-tick', 'subdivision')}</p>
   
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>

  </div>
    <style>
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }

      .syn-range-with-tick nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  \`
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'tooltip-placement')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  \`
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'tooltip-disabled')
      }
    }
  },
  render: () => html\`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  \`
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'tooltip-formatter')
      }
    }
  },
  render: () => html\`
    <syn-range
      class="tooltip-formatter"
      max="100"
      min="0"
      value="50"
    >
      <nav slot="ticks">
        <syn-range-tick>0%</syn-range-tick>
        <syn-range-tick>50%</syn-range-tick>
        <syn-range-tick>100%</syn-range-tick>
      </nav>
    </syn-range>
    <style>
      .tooltip-formatter nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
    <script>
      document
        .querySelectorAll('.tooltip-formatter')
        .forEach(tip => {
          tip.tooltipFormatter = value => value + '%';
        });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Disabled,
  Sizes,
  PrefixSuffixText,
  CustomTrackColors,
  CustomTrackOffset,
  MultiThumb,
  Ticks,
  TooltipPlacement,
  TooltipDisabled,
  TooltipFormatter
}, 500)`,...Y.parameters?.docs?.source}}};const Me=["Default","Labels","HelpText","Disabled","Invalid","Focus","Sizes","PrefixSuffixText","CustomTrackColors","CustomTrackOffset","MultiThumb","MultiThumbWithRestrictedMovement","Ticks","TooltipPlacement","TooltipDisabled","TooltipFormatter","Screenshot"];export{$ as CustomTrackColors,D as CustomTrackOffset,z as Default,V as Disabled,U as Focus,C as HelpText,B as Invalid,T as Labels,E as MultiThumb,j as MultiThumbWithRestrictedMovement,M as PrefixSuffixText,Y as Screenshot,I as Sizes,A as Ticks,F as TooltipDisabled,L as TooltipFormatter,P as TooltipPlacement,Me as __namedExportsOrder,Ie as default};
