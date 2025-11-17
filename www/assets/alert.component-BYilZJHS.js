import{s as y,a as u,g as h,b as p}from"./animation-registry-l4L8bmT6.js";import{b as w}from"./closeActiveElement-Bnbpk8Kw.js";import{e as m}from"./class-map-DnZUJkpi.js";import{H as _}from"./slot-9EVoRGQc.js";import{j as g,x as d}from"./iframe-D4ebzwTM.js";import{L as k}from"./localize-Dh03wnLC.js";import{c as T,n as s,S as x}from"./synergy-element-DSqLclgz.js";import{r as S}from"./icon.component-VP1WK7EU.js";import{a as b}from"./query-DAIS6qJ0.js";import{w as v}from"./event-B0iVuGLD.js";import{w as f}from"./watch-CEsCE2EF.js";import{S as C}from"./icon-button.component-CtUivMaQ.js";import{e as A}from"./decorator-DANECR0-.js";const I=g`
	/* stylelint-disable */
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-top-width: calc(var(--syn-panel-border-width) * 3);
    border-radius: var(--syn-border-radius-medium);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-normal);
    line-height: 1.6;
    color: var(--syn-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-large);
    padding-inline-start: var(--syn-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--syn-spacing-large);
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
    margin-inline-end: var(--syn-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--syn-panel-border-width) * 3);
    background-color: var(--syn-panel-border-color);
    display: flex;
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

  .alert__timer {
    display: none;
  }
`,z=g`
  .alert {
    /* Defines the used border and icon color for variants */
    --variant-color-border: var(--syn-alert-informative-color-border, var(--syn-panel-border-color));
    --variant-color-background: var(--syn-alert-informative-color-background, var(--syn-panel-background-color));
    --variant-color-icon: var(--syn-alert-informative-color-icon, var(--syn-color-primary-600));
    --variant-color-indicator: var(--syn-alert-informative-color-indicator, var(--syn-color-primary-600));

    background-color: var(--variant-color-background);
    border: var(--syn-panel-border-width) solid var(--variant-color-border);
    border-left: 0;
    border-radius: var(--syn-border-radius-none);
    color: var(--syn-typography-color-text);
    font-size: var(--syn-font-size-medium);
    line-height: var(--syn-line-height-normal);
    min-height: 56px;
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

  /**
   * Make sure everything is aligned to top
   */
  .alert__icon,
  .alert__close-button {
    align-items: flex-start;
    font-size: var(--syn-font-size-x-large);
  }

  .alert__message {
    padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-medium) var(--syn-spacing-medium);
  }

  /**
   * Alert Icon
   */
  .alert__icon {
    color: var(--variant-color-icon);
    padding-block: var(--syn-spacing-medium);
    padding-inline-start: var(--syn-spacing-medium);
  }

  /**
   * Close Icon
   */
  .alert__close-button {
    align-self: start;
    color: var(--syn-typography-color-text);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Variant colors
   */
  .alert--success {
    --variant-color-border: var(--syn-alert-success-color-border, var(--syn-panel-border-color));
    --variant-color-background: var(--syn-alert-success-color-background, var(--syn-panel-background-color));
    --variant-color-icon: var(--syn-alert-success-color-icon, var(--syn-color-success-500));
    --variant-color-indicator: var(--syn-alert-success-color-indicator, var(--syn-color-success-500));
  }

  .alert--neutral {
    --variant-color-border: var(--syn-alert-neutral-color-border, var(--syn-panel-border-color));
    --variant-color-background: var(--syn-alert-neutral-color-background, var(--syn-panel-background-color));
    --variant-color-icon: var(--syn-alert-neutral-color-icon, var(--syn-color-neutral-800));
    --variant-color-indicator: var(--syn-alert-neutral-color-indicator, var(--syn-color-neutral-800));
  }

  .alert--warning {
    --variant-color-border: var(--syn-alert-warning-color-border, var(--syn-panel-border-color));
    --variant-color-background: var(--syn-alert-warning-color-background, var(--syn-panel-background-color));
    --variant-color-icon: var(--syn-alert-warning-color-icon, var(--syn-color-warning-400));
    --variant-color-indicator: var(--syn-alert-warning-color-indicator, var(--syn-color-warning-400));
  }

  .alert--danger {
    --variant-color-border: var(--syn-alert-error-color-border, var(--syn-panel-border-color));
    --variant-color-background: var(--syn-alert-error-color-background, var(--syn-panel-background-color));
    --variant-color-icon: var(--syn-alert-error-color-icon, var(--syn-color-error-600));
    --variant-color-indicator: var(--syn-alert-error-color-indicator, var(--syn-color-error-600));
  }
`;var H=Object.defineProperty,$=Object.getOwnPropertyDescriptor,a=(t,e,n,i)=>{for(var o=i>1?void 0:i?$(e,n):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(o=(i?c(e,n,o):c(o))||o);return i&&o&&H(e,n,o),o};let r=class extends x{constructor(){super(...arguments),this.hasSlotController=new _(this,"icon","suffix"),this.localize=new k(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"syn-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",n="0";this.countdownAnimation=t.animate([{width:e},{width:n}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await u(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=h(this,"alert.show",{dir:this.localize.dir()});await p(this.base,t,e),this.emit("syn-after-show")}else{w(this),this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await u(this.base);const{keyframes:t,options:e}=h(this,"alert.hide",{dir:this.localize.dir()});await p(this.base,t,e),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,v(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,v(this,"syn-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),r.toastStack.parentElement===null&&document.body.append(r.toastStack),r.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{r.toastStack.removeChild(this),t(),r.toastStack.querySelector("syn-alert")===null&&r.toastStack.remove()},{once:!0})})}render(){return d`
      <div
        part="base"
        class=${m({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?d`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></syn-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?d`
              <div
                class=${m({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};r.styles=[T,I,z];r.dependencies={"syn-icon-button":C};a([b('[part~="base"]')],r.prototype,"base",2);a([b(".alert__countdown-elapsed")],r.prototype,"countdownElement",2);a([s({type:Boolean,reflect:!0})],r.prototype,"open",2);a([s({type:Boolean,reflect:!0})],r.prototype,"closable",2);a([s({reflect:!0})],r.prototype,"variant",2);a([s({type:Number})],r.prototype,"duration",2);a([S()],r.prototype,"remainingTime",2);a([f("open",{waitUntilFirstUpdate:!0})],r.prototype,"handleOpenChange",1);a([f("duration")],r.prototype,"handleDurationChange",1);r=a([A("SynAlert")],r);y("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});y("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});export{r as S};
