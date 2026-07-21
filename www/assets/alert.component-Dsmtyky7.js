import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-zaPEO0fm.js";import{n as m,t as h}from"./class-map-D8k2AIVc.js";import{r as g,t as _}from"./slot-Cl6UAYP5.js";import{n as v,t as y}from"./localize-BNnpMTZD.js";import{n as b,t as x}from"./watch-RA3ULoLi.js";import{n as S,t as C}from"./decorator-B3p9Y8B9.js";import{a as w,i as T,l as E,n as D,o as O,t as k}from"./animation-registry-BrsFz0KL.js";import{n as A,t as j}from"./event-D536S22s.js";import{n as M,t as N}from"./icon-button.component-3mhpsjQ3.js";import{n as P,t as F}from"./closeActiveElement-DfCXYoqP.js";var I,L=e((()=>{r(),I=n`
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
    color: var(--syn-typography-color-text);
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

  .alert--has-countdown {
    border-bottom: none;
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
    color: var(--syn-typography-color-text);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--size-icon-size);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .alert__countdown {
    background-color: var(--syn-panel-border-color);
    bottom: 0;
    display: flex;
    height: calc(var(--syn-panel-border-width) * 3);
    left: 0;
    position: absolute;
    width: 100%;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--syn-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--syn-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--syn-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--syn-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--syn-color-danger-600);
  }

  /**
   * Variant colors
   */
  .alert--success {
    --variant-color-border: var(--syn-alert-success-color-border);
    --variant-color-background: var(--syn-alert-success-color-background);
    --variant-color-icon: var(--syn-alert-success-color-icon);
    --variant-color-indicator: var(--syn-alert-success-color-indicator);
  }

  .alert--neutral {
    --variant-color-border: var(--syn-alert-neutral-color-border);
    --variant-color-background: var(--syn-alert-neutral-color-background);
    --variant-color-icon: var(--syn-alert-neutral-color-icon);
    --variant-color-indicator: var(--syn-alert-neutral-color-indicator);
  }

  .alert--warning {
    --variant-color-border: var(--syn-alert-warning-color-border);
    --variant-color-background: var(--syn-alert-warning-color-background);
    --variant-color-icon: var(--syn-alert-warning-color-icon);
    --variant-color-indicator: var(--syn-alert-warning-color-indicator);
  }

  .alert--danger {
    --variant-color-border: var(--syn-alert-error-color-border);
    --variant-color-background: var(--syn-alert-error-color-background);
    --variant-color-icon: var(--syn-alert-error-color-icon);
    --variant-color-indicator: var(--syn-alert-error-color-indicator);
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

  .alert__timer {
    display: none;
  }
`})),R,z,B,V=e((()=>{O(),P(),h(),D(),g(),r(),y(),d(),j(),x(),l(),c(),M(),L(),S(),s(),z=class extends f{static{R=this}constructor(...e){super(...e),this.hasSlotController=new _(this,`icon`,`suffix`),this.localize=new v(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.size=`medium`,this.remainingTime=this.duration}static{this.styles=[a,I]}static{this.dependencies={"syn-icon-button":N}}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`syn-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.duration<1/0&&this.restartAutoHide(),await E(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=k(this,`alert.show`,{dir:this.localize.dir()});await w(this.base,e,t),this.emit(`syn-after-show`)}else{F(this),this.emit(`syn-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await E(this.base);let{keyframes:e,options:t}=k(this,`alert.hide`,{dir:this.localize.dir()});await w(this.base,e,t),this.base.hidden=!0,this.emit(`syn-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,A(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,A(this,`syn-after-hide`)}async toast(){return new Promise(e=>{this.handleCountdownChange(),R.toastStack.parentElement===null&&document.body.append(R.toastStack),R.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`syn-after-hide`,()=>{R.toastStack.removeChild(this),e(),R.toastStack.querySelector(`syn-alert`)===null&&R.toastStack.remove()},{once:!0})})}render(){return t`
      <div
        part="base"
        class=${m({alert:!0,"alert--open":this.open,"alert--small":this.size===`small`,"alert--medium":this.size===`medium`,"alert--large":this.size===`large`,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
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

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?t`
              <div
                class=${m({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}},u([o(`[part~="base"]`)],z.prototype,`base`,void 0),u([o(`.alert__countdown-elapsed`)],z.prototype,`countdownElement`,void 0),u([p({type:Boolean,reflect:!0})],z.prototype,`open`,void 0),u([p({type:Boolean,reflect:!0})],z.prototype,`closable`,void 0),u([p({reflect:!0})],z.prototype,`variant`,void 0),u([p({type:Number})],z.prototype,`duration`,void 0),u([p({reflect:!0})],z.prototype,`size`,void 0),u([i()],z.prototype,`remainingTime`,void 0),u([b(`open`,{waitUntilFirstUpdate:!0})],z.prototype,`handleOpenChange`,null),u([b(`duration`)],z.prototype,`handleDurationChange`,null),z=R=u([C(`SynAlert`)],z),B=z,T(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),T(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}})}));export{V as n,B as t};