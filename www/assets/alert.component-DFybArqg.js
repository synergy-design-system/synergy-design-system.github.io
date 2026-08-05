import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-Dt4MSOQD.js";import{t as d}from"./query-DOHNhzf6.js";import{n as f,t as p}from"./class-map-HZwHklGF.js";import{r as m,t as h}from"./slot-CUH75lUH.js";import{n as g,t as _}from"./localize-Du3bqz3O.js";import{n as v}from"./watch-Q8hEwzVb.js";import{n as y,t as b}from"./decorator-DZesXZg7.js";import{a as x,i as S,l as C,n as w,t as T}from"./animation-registry-DCzWq2z4.js";import{n as E}from"./event-B7qjsglH.js";import{n as D,t as O}from"./icon-button.component-BdYRxTpl.js";import{n as k,t as A}from"./closeActiveElement-BNUGXJNF.js";var j;function M(){return(M=e((()=>{r(),j=n`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    /* Defines the used border and icon color for variants */
    --variant-color-border: var(--syn-alert-informative-color-border);
    --variant-color-background: var(--syn-alert-informative-color-background);
    --variant-color-icon: var(--syn-alert-informative-color-icon);
    --variant-color-indicator: var(--syn-alert-informative-color-indicator);
    --variant-color-text: var(--syn-typography-color-text);

    /* Defines special settings for sizes */
    --size-font-size: var(--syn-font-size-medium);
    --size-icon-size: var(--syn-font-size-x-large);
    --size-min-height: 54px;
    --size-message-padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-medium) var(--syn-spacing-medium);
    --size-icon-padding-block: var(--syn-spacing-medium);
    --size-icon-padding-inline: var(--syn-spacing-medium);

    align-items: stretch;
    background-color: var(--variant-color-background);
    border: var(--syn-panel-border-width) solid var(--variant-color-border);
    border-left: 0;
    border-radius: var(--syn-border-radius-none);
    box-sizing: content-box;
    color: var(--variant-color-text);
    display: flex;
    font-family: var(--syn-font-sans);
    font-size: var(--size-font-size);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-normal);
    margin: inherit;
    min-height: var(--size-min-height);
    position: relative;
  }

  /**
   * Add back the items left borders
   * This is done to prevent border clipping with the large border-left needed on .alert
   * Note we also need to adjust our paddings to add the border width here
   */
  .alert::before {
    background: var(--variant-color-indicator);
    bottom: -1px;
    content: "";
    left: 0;
    position: absolute;
    top: -1px;
    width: var(--syn-spacing-2x-small);
  }

  .alert :first-child {
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  /**
   * Make sure everything is aligned to top
   */
  .alert__icon {
    align-items: flex-start;
    color: var(--variant-color-icon);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--size-icon-size);
    padding-block-start: var(--size-icon-padding-block);
    padding-inline-start: var(--size-icon-padding-inline);
  }

  .alert__message {
    align-self: center;
    display: block;
    flex: 1 1 auto;
    padding: var(--size-message-padding);
  }

  /**
   * Close Icon
   */
  .alert__close-button {
    align-items: flex-start;
    align-self: start; /* #1135: Fix alignment for the close icon */
    color: var(--variant-color-text);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--size-icon-size);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Variant colors
   */
  .alert--success {
    --variant-color-border: var(--syn-alert-success-color-border);
    --variant-color-background: var(--syn-alert-success-color-background);
    --variant-color-icon: var(--syn-alert-success-color-icon);
    --variant-color-indicator: var(--syn-alert-success-color-indicator);
    --variant-color-text: var(--syn-alert-success-color-text);
  }

  .alert--neutral {
    --variant-color-border: var(--syn-alert-neutral-color-border);
    --variant-color-background: var(--syn-alert-neutral-color-background);
    --variant-color-icon: var(--syn-alert-neutral-color-icon);
    --variant-color-indicator: var(--syn-alert-neutral-color-indicator);
    --variant-color-text: var(--syn-alert-neutral-color-text);
  }

  .alert--warning {
    --variant-color-border: var(--syn-alert-warning-color-border);
    --variant-color-background: var(--syn-alert-warning-color-background);
    --variant-color-icon: var(--syn-alert-warning-color-icon);
    --variant-color-indicator: var(--syn-alert-warning-color-indicator);
    --variant-color-text: var(--syn-alert-warning-color-text);
  }

  .alert--critical {
    --variant-color-border: var(--syn-alert-critical-color-border);
    --variant-color-background: var(--syn-alert-critical-color-background);
    --variant-color-icon: var(--syn-alert-critical-color-icon);
    --variant-color-indicator: var(--syn-alert-critical-color-indicator);
    --variant-color-text: var(--syn-alert-critical-color-text);
  }

  /** TODO: Major: Remove .alert--danger */
  .alert--danger,
  .alert--error {
    --variant-color-border: var(--syn-alert-error-color-border);
    --variant-color-background: var(--syn-alert-error-color-background);
    --variant-color-icon: var(--syn-alert-error-color-icon);
    --variant-color-indicator: var(--syn-alert-error-color-indicator);
    --variant-color-text: var(--syn-alert-error-color-text);
  }

  /* #1119: Alert Sizes */
  .alert--small {
    --size-font-size: var(--syn-font-size-small);
    --size-icon-size: var(--syn-font-size-large);
    --size-min-height: 44px;
    --size-message-padding: var(--syn-spacing-small) var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-small);
    --size-icon-padding-block: var(--syn-spacing-small);
    --size-icon-padding-inline: var(--syn-spacing-small);
  }

  /* Adjust close button size for small alerts */
  .alert--small .alert__close-button {
    font-size: var(--syn-font-size-medium);
  }

  .alert--large {
    --size-font-size: var(--syn-font-size-large);
    --size-icon-size: var(--syn-font-size-2x-large);
    --size-min-height: 68px;
    --size-message-padding: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-medium-large) var(--syn-spacing-medium-large);
    --size-icon-padding-block: var(--syn-spacing-medium-large);
    --size-icon-padding-inline: var(--syn-spacing-medium-large);
  }
`})))()}var N,P,F;function I(){return(I=e((()=>{r(),p(),l(),k(),w(),m(),_(),s(),o(),D(),M(),y(),P=class extends u{static{N=this}constructor(...e){super(...e),this.hasSlotController=new h(this,`icon`,`suffix`),this.localize=new g(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.size=`medium`}static{this.styles=[i,j]}static{this.dependencies={"syn-icon-button":O}}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`syn-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>{this.hide()},this.duration))}pauseAutoHide(){clearTimeout(this.autoHideTimeout)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>{this.hide()},this.duration))}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.duration<1/0&&this.restartAutoHide(),await C(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=T(this,`alert.show`,{dir:this.localize.dir()});await x(this.base,e,t),this.emit(`syn-after-show`)}else{A(this),this.emit(`syn-hide`),clearTimeout(this.autoHideTimeout),await C(this.base);let{keyframes:e,options:t}=T(this,`alert.hide`,{dir:this.localize.dir()});await x(this.base,e,t),this.base.hidden=!0,this.emit(`syn-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,E(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,E(this,`syn-after-hide`)}async toast(){return new Promise(e=>{N.toastStack.parentElement===null&&document.body.append(N.toastStack),N.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`syn-after-hide`,()=>{N.toastStack.removeChild(this),e(),N.toastStack.querySelector(`syn-alert`)===null&&N.toastStack.remove()},{once:!0})})}render(){return t`
      <div
        part="base"
        class=${f({alert:!0,"alert--closable":this.closable,"alert--critical":this.variant===`critical`,"alert--danger":this.variant===`danger`,"alert--error":this.variant===`error`,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--large":this.size===`large`,"alert--medium":this.size===`medium`,"alert--neutral":this.variant===`neutral`,"alert--open":this.open,"alert--primary":this.variant===`primary`,"alert--small":this.size===`small`,"alert--success":this.variant===`success`,"alert--warning":this.variant===`warning`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?t`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></syn-icon-button>
            `:``}

      </div>
    `}},c([d(`[part~="base"]`)],P.prototype,`base`,void 0),c([a({reflect:!0,type:Boolean})],P.prototype,`open`,void 0),c([a({reflect:!0,type:Boolean})],P.prototype,`closable`,void 0),c([a({reflect:!0})],P.prototype,`variant`,void 0),c([a({type:Number})],P.prototype,`duration`,void 0),c([a({reflect:!0})],P.prototype,`size`,void 0),c([v(`open`,{waitUntilFirstUpdate:!0})],P.prototype,`handleOpenChange`,null),c([v(`duration`)],P.prototype,`handleDurationChange`,null),P=N=c([b(`SynAlert`)],P),F=P,S(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),S(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}})})))()}export{I as n,F as t};