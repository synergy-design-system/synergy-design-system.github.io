import{g as St,x as y}from"./iframe-GSRepqjd.js";import{i as wt,n as g,x as nt}from"./property-ImbD-3qY.js";import{o as zt}from"./if-defined-CDNCanKK.js";import{a as K}from"./query-DAIS6qJ0.js";import{r as Tt}from"./query-all-BNBO5se6.js";import{a as Ct}from"./class-map-QQ7HVnPG.js";import{d as Vt}from"./default-value-CoJKpiHX.js";import{F as It,c as Mt,v as $t}from"./form-d9hCJUdr.js";import{H as Dt}from"./slot-9EVoRGQc.js";import{L as Et}from"./localize-CatY2peN.js";import{c as Pt,S as At}from"./component.styles-DXWA7L2q.js";import{f as Ft,a as Lt}from"./form-control.custom.styles-CXpzbCE1.js";import{S as qt}from"./tooltip.component-Bo5fJD9W.js";import{e as Ot}from"./decorator-DANECR0-.js";import"./button-CwZJTvX8.js";import"./input-BOqSKrKg.js";import"./range-tick-DhPrW2p3.js";import{g as h,s as Rt,a as Ht,c as Nt,b as Wt}from"./component-sz2YSCF4.js";import"./index-DihgwUfS.js";import"./animation-registry-l4L8bmT6.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./popup.component-BJEudzMA.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./functions-CDi3doZH.js";import"./static-BkNWbPkN.js";import"./directive-helpers-CvZEagFv.js";import"./icon.component-B3J6d3UF.js";import"./spinner.component-pJEN2kXr.js";import"./live-3_FXf7tU.js";import"./divider.component-DbTnzFXm.js";import"./async-directive-WyEE_4Ii.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const x=(t,e)=>t-e,O=(t,e)=>{if(t.length!==e.length)return!0;const s=t.slice().sort(x),a=e.slice().sort(x);for(let r=0;r<s.length;r+=1)if(s[r]!==a[r])return!0;return!1},ut=(t,e,s)=>{const a=t.getBoundingClientRect(),r=a.width;if(r<=0)return 0;let o=e;return o-=a.left,o<=0?s?1:0:o>=r?s?0:1:(o/=r,s?1-o:o)},Bt=wt`
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
`;var Ut=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,mt=t=>{throw TypeError(t)},m=(t,e,s,a)=>{for(var r=a>1?void 0:a?jt(e,s):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(r=(a?p(e,s,r):p(r))||r);return a&&r&&Ut(e,s,r),r},Z=(t,e,s)=>e.has(t)||mt("Cannot "+s),i=(t,e,s)=>(Z(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,a)=>(Z(t,e,"write to private field"),e.set(t,s),s),c=(t,e,s)=>(Z(t,e,"access private method"),s),l,d,R,_,G,k,n,H,tt,dt,et,ht,yt,X,N,W,ft,gt,S,vt,bt,xt;let u=class extends At{constructor(){super(),b(this,n),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new Dt(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new It(this,{assumeInteractionOn:["syn-change"]}),this.localize=new Et(this),b(this,l,[0]),b(this,d,new Map),b(this,R,!1),b(this,_,""),b(this,G),b(this,k,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(t){f(this,l,t?t.split(" ").map(Number).sort(x):[])}get value(){return i(this,l).slice().sort(x).join(" ")}set valueAsArray(t){const e=i(this,l);f(this,l,Array.isArray(t)?t.slice().sort(x):t||[]),O(e,i(this,l))&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...i(this,l)].sort(x)}disconnectedCallback(){super.disconnectedCallback(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.visibilityObserver=new IntersectionObserver(t=>{const e=t.at(0);e&&e.isIntersecting&&e.target.checkVisibility()&&c(this,n,xt).call(this,e.boundingClientRect.height)},{root:this.ticks.parentElement}),this.visibilityObserver.observe(this.ticks),this.formControlController.updateValidity(),f(this,k,Array.from(i(this,l))),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{e.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=i(this,l).map(s=>{if(s<=this.min)return this.min;if(s>=this.max)return this.max;const a=this.min+this.step*Math.round((s-this.min)/this.step);return a>this.max?this.max:a});O(i(this,l),e)&&f(this,l,e)}updated(t){super.updated(t);for(const e of this.thumbs){const s=+e.dataset.rangeId;i(this,d).has(s)&&c(this,n,N).call(this,e,i(this,d).get(s))}c(this,n,W).call(this)}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!i(this,_);return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(i(this,G)),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),f(this,G,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),t}setCustomValidity(t){f(this,_,t),this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return i(this,_)?Mt:$t}get validationMessage(){return i(this,_)}renderThumbs(t){const e=i(this,l).length>1;return i(this,d).clear(),i(this,l).map((s,a)=>{const r=a+1;i(this,d).set(r,s);const o=`thumb-${r}`;let p="",v="";return e?(v=t?`label aria-label-hidden ${o}`:`aria-label-hidden ${o}`,a===0?p=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(s)})`:a===i(this,l).length-1?p=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(s)})`:p=this.tooltipFormatter(s)):v=t?"label aria-label-hidden":"",nt`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          hoist
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${zt(this.disabled?"true":void 0)}
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
            @pointerdown=${c(this,n,ht)}
            @pointermove=${c(this,n,yt)}
            @pointerup=${c(this,n,X)}
            @pointercancel=${c(this,n,X)}
            @pointerleave=${c(this,n,X)}
            @keydown=${c(this,n,ft)}
            @focus=${c(this,n,vt)}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix"),r=this.label?!0:!!t,o=this.helpText?!0:!!e;return nt`
      <div
        part="form-control"
        class=${Ct({"form-control":!0,"form-control--has-help-text":o,"form-control--has-label":r,"form-control--has-prefix":s,"form-control--has-suffix":a,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${c(this,n,gt)}
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
              @invalid=${c(this,n,bt)}
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
              @pointerdown=${c(this,n,dt)}
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
    `}};l=new WeakMap;d=new WeakMap;R=new WeakMap;_=new WeakMap;G=new WeakMap;k=new WeakMap;n=new WeakSet;H=function(){return this.localize.dir()==="rtl"};tt=function(t,e=!0){if(this.disabled)return;const{clientX:s}=t,a=Array.from(this.thumbs),r=ut(this.baseDiv,s,i(this,n,H)),o=this.step/(this.max-this.min),p=this.min+this.step*Math.round(r/o),v=a.reduce((J,Q)=>{const rt=i(this,d).get(+Q.dataset.rangeId),_t=i(this,d).get(+J.dataset.rangeId),it=Math.abs(rt-p),at=Math.abs(_t-p);return it===at?rt<p?Q:J:it<at?Q:J}),w=+v.dataset.rangeId;if(!w)return;i(this,d).set(w,p),c(this,n,N).call(this,v,p);const B=i(this,l);f(this,l,Array.from(i(this,d).values())),c(this,n,W).call(this),O(B,i(this,l))&&(f(this,k,Array.from(i(this,l))),this.emit("syn-input"),this.emit("syn-change"));const kt=new PointerEvent("pointerdown",t);e&&v.dispatchEvent(kt)&&c(this,n,S).call(this,v)};dt=function(t){c(this,n,tt).call(this,t,!1)};et=function(t,e){const s=this.valueAsArray,r=Array.from(this.thumbs).indexOf(t),o=s[r-1]||this.min,p=s[r+1]||this.max,v=e<o||e>p;return{finalValue:Math.max(o,Math.min(p,e)),isRestricted:v,nextValue:p,prevValue:o}};ht=async function(t){if(this.disabled)return;const e=t.target;c(this,n,S).call(this,e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()};yt=function(t){if(this.disabled)return;const e=t.target,s=+e.dataset.rangeId;if(!i(this,d).has(s)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const r=ut(this.baseDiv,t.clientX,i(this,n,H)),o=this.step/(this.max-this.min);let p=this.min+this.step*Math.round(r/o);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:p}}).defaultPrevented)return;if(this.restrictMovement){const B=c(this,n,et).call(this,e,p);B.isRestricted?(p=B.finalValue,e.style.zIndex=(3+this.thumbs.length).toFixed(0)):e.style.zIndex="3"}i(this,d).set(s,p),c(this,n,N).call(this,e,p);const w=i(this,l);f(this,l,Array.from(i(this,d).values())),c(this,n,W).call(this),O(w,i(this,l))&&this.emit("syn-input")};X=async function(t){const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,O(i(this,k),i(this,l))&&(f(this,k,Array.from(i(this,l))),this.emit("syn-change")),await e.parentElement.hide())};N=function(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const s=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc(${100*s}% - var(--half-thumb-size))`,c(this,n,S).call(this,t)};W=function(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(i(this,l).length===1){const r=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",o=100*(i(this,l)[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${r}, ${o}%)`,t.style.insetInlineEnd=`min(calc(100% - ${r}), calc(100% - ${o}%))`;return}const e=i(this,l).slice().sort(x),s=100*(e[0]-this.min)/(this.max-this.min),a=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${s}%`,t.style.insetInlineEnd=`calc(100% - ${a}%)`};ft=function(t){const e=t.target,s=+e.dataset.rangeId,a=i(this,d).get(s);if(a===void 0)return;let r=a;switch(t.key){case"ArrowUp":case"Up":r=Math.min(a+this.step,this.max);break;case"ArrowDown":case"Down":r=Math.max(a-this.step,this.min);break;case"ArrowLeft":case"Left":r=i(this,n,H)?Math.min(a+this.step,this.max):Math.max(a-this.step,this.min);break;case"ArrowRight":case"Right":r=i(this,n,H)?Math.max(a-this.step,this.min):Math.min(a+this.step,this.max);break;case"PageUp":r=Math.min(a+(this.max-this.min)/5,this.max);break;case"PageDown":r=Math.max(a-(this.max-this.min)/5,this.min);break;case"Home":r=this.min;break;case"End":r=this.max;break;default:return}if(r!==a){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:r}}).defaultPrevented)return;if(this.restrictMovement){const p=c(this,n,et).call(this,e,r);p.isRestricted&&(r=p.finalValue)}c(this,n,N).call(this,e,r),i(this,d).set(s,r),f(this,l,Array.from(i(this,d).values())),c(this,n,W).call(this),c(this,n,S).call(this,e),f(this,k,Array.from(i(this,l))),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()};gt=function(t){t.relatedTarget&&this.shadowRoot?.contains(t.relatedTarget)||(this.emit("syn-blur"),f(this,R,!1))};S=function(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!i(this,d).has(e))return;const s=i(this,d).get(e),a=t.parentElement;a.content=this.tooltipFormatter(s)};vt=function(t){if(this.disabled)return;i(this,R)||(f(this,R,!0),this.emit("syn-focus"));const e=t.target;e?.dataset?.rangeId&&c(this,n,S).call(this,e)};bt=function(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)};xt=function(t){const e=this.hasSlotController.test("ticks"),s=this.hasSlotController.test("prefix"),a=this.hasSlotController.test("suffix");if(!e)return;let r=t||this.shadowRoot?.querySelector(".ticks")?.clientHeight;if(r){if(r+=2,r/=2,s){const o=this.shadowRoot?.querySelector(".input__prefix");o.style.transform=`translateY(-${r}px)`}if(a){const o=this.shadowRoot?.querySelector(".input__suffix");o.style.transform=`translateY(-${r}px)`}}};u.styles=[Pt,Ft,Lt,Bt];u.dependencies={"syn-tooltip":qt};m([g()],u.prototype,"name",2);m([g()],u.prototype,"label",2);m([g({attribute:"help-text"})],u.prototype,"helpText",2);m([g({reflect:!0,type:Boolean})],u.prototype,"disabled",2);m([g({type:Number})],u.prototype,"min",2);m([g({type:Number})],u.prototype,"max",2);m([g({type:Number})],u.prototype,"step",2);m([g({reflect:!0})],u.prototype,"size",2);m([g({attribute:"tooltip-placement",type:String})],u.prototype,"tooltipPlacement",2);m([g({type:String})],u.prototype,"value",1);m([g({attribute:"restrict-movement",type:Boolean})],u.prototype,"restrictMovement",2);m([Vt()],u.prototype,"defaultValue",2);m([g({reflect:!0})],u.prototype,"form",2);m([g({attribute:!1})],u.prototype,"tooltipFormatter",2);m([K(".input__wrapper")],u.prototype,"baseDiv",2);m([K(".active-track")],u.prototype,"activeTrack",2);m([K(".ticks")],u.prototype,"ticks",2);m([Tt(".thumb")],u.prototype,"thumbs",2);m([K(".range__validation-input")],u.prototype,"validationInput",2);u=m([Ot("SynRange")],u);u.define("syn-range");var ot=Object.freeze,Yt=Object.defineProperty,st=(t,e)=>ot(Yt(t,"raw",{value:ot(t.slice())})),lt,ct,pt;const{userEvent:Gt}=__STORYBOOK_MODULE_TEST__,{args:Xt,argTypes:Kt}=Rt("syn-range"),{overrideArgs:Jt}=Ht("syn-range"),{generateTemplate:Qt}=Nt("syn-range"),Ee={args:Jt([{name:"value",type:"attribute",value:"50"}],Xt),argTypes:Kt,component:"syn-range",parameters:{design:St("20575-35283"),docs:{description:{component:h("range","default")}}},tags:["Form"],title:"Components/syn-range"},z={parameters:{controls:{disable:!1},docs:{description:{story:h("range","default")},story:{height:"80px"}}},render:t=>Qt({args:t})},T={parameters:{docs:{description:{story:h("range","labels")}}},render:()=>y`
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
  `},I={parameters:{docs:{description:{story:h("range","invalid")}}},play:async({canvasElement:t})=>{try{const e=t.querySelector("syn-range"),s=t.querySelector("syn-button");e&&s&&(await Gt.click(s),s.click())}catch(e){console.error("Error in play function:",e)}},render:()=>y(lt||(lt=st([`
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
  `},M={parameters:{docs:{description:{story:h("range","size")}}},render:()=>y`
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
  `},$={parameters:{docs:{description:{story:h("range","prefix-suffix")}}},render:()=>y(ct||(ct=st([`
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
  `])))},D={parameters:{docs:{description:{story:h("range","custom-track-colors")},story:{height:"80px"}}},render:()=>y`
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
  `},E={parameters:{docs:{description:{story:h("range","custom-track-offset")},story:{height:"80px"}}},render:()=>y`
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
  `},P={parameters:{docs:{description:{story:h("range","multi-knob")},story:{height:"80px"}}},render:()=>y`
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
  `},F={parameters:{docs:{description:{story:h("range","tooltip-placement")},story:{height:"80px"}}},render:()=>y`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},L={parameters:{docs:{description:{story:h("range","tooltip-disabled")}}},render:()=>y`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  `},q={parameters:{docs:{description:{story:h("range","tooltip-formatter")}}},render:()=>y(pt||(pt=st([`
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
  `])))},Y=Wt({Default:z,Labels:T,HelpText:C,Disabled:V,Invalid:I,Sizes:M,PrefixSuffixText:$,CustomTrackColors:D,CustomTrackOffset:E,MultiThumb:P,Ticks:A,TooltipPlacement:F,TooltipDisabled:L,TooltipFormatter:q},500);z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
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
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Disabled,
  Invalid,
  Sizes,
  PrefixSuffixText,
  CustomTrackColors,
  CustomTrackOffset,
  MultiThumb,
  Ticks,
  TooltipPlacement,
  TooltipDisabled,
  TooltipFormatter
}, 500)`,...Y.parameters?.docs?.source}}};const Pe=["Default","Labels","HelpText","Disabled","Invalid","Focus","Sizes","PrefixSuffixText","CustomTrackColors","CustomTrackOffset","MultiThumb","MultiThumbWithRestrictedMovement","Ticks","TooltipPlacement","TooltipDisabled","TooltipFormatter","Screenshot"];export{D as CustomTrackColors,E as CustomTrackOffset,z as Default,V as Disabled,U as Focus,C as HelpText,I as Invalid,T as Labels,P as MultiThumb,j as MultiThumbWithRestrictedMovement,$ as PrefixSuffixText,Y as Screenshot,M as Sizes,A as Ticks,L as TooltipDisabled,q as TooltipFormatter,F as TooltipPlacement,Pe as __namedExportsOrder,Ee as default};
