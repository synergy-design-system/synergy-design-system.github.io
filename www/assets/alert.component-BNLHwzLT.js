import{s as g,a as h,g as u,b as m}from"./animation-registry-l4L8bmT6.js";import{b as w}from"./closeActiveElement-Bnbpk8Kw.js";import{a as p}from"./static-gmWA-8Kq.js";import{H as _}from"./slot-9EVoRGQc.js";import{i as v,x as d}from"./directive-helpers-DGrfjhaU.js";import{L as k}from"./localize-CatY2peN.js";import{n as s}from"./property-BGzwfL48.js";import{r as T}from"./state-CZ0nVzce.js";import{a as f}from"./query-DAIS6qJ0.js";import{w as y}from"./event-B0iVuGLD.js";import{w as b}from"./watch-CEsCE2EF.js";import{c as x,S}from"./component.styles-Do19GEOY.js";import{S as C}from"./icon-button.component-BGixvALP.js";import{e as A}from"./decorator-DANECR0-.js";const I=v`
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
`,z=v`
  .alert {
    /* Defines the used border and icon color for variants */
    --variant-accent-color: var(--syn-panel-border-color);

    border: var(--syn-panel-border-width) solid var(--syn-panel-border-color);
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
    background: var(--variant-accent-color);
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
    color: var(--variant-accent-color);
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
   * Variants should highlight the left border instead of top
   */
  .alert--primary {
    --variant-accent-color: var(--syn-color-primary-600);
  }

  .alert--success {
    --variant-accent-color: var(--syn-color-success-500);
  }

  .alert--neutral {
    --variant-accent-color: var(--syn-color-neutral-800);
  }

  .alert--warning {
    --variant-accent-color: var(--syn-color-warning-400);
  }

  .alert--danger {
    --variant-accent-color: var(--syn-color-error-600);
  }
`;var H=Object.defineProperty,$=Object.getOwnPropertyDescriptor,r=(e,a,i,o)=>{for(var n=o>1?void 0:o?$(a,i):a,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(a,i,n):c(n))||n);return o&&n&&H(a,i,n),n};let t=class extends S{constructor(){super(...arguments),this.hasSlotController=new _(this,"icon","suffix"),this.localize=new k(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"syn-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,a="100%",i="0";this.countdownAnimation=e.animate([{width:a},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await h(this.base),this.base.hidden=!1;const{keyframes:e,options:a}=u(this,"alert.show",{dir:this.localize.dir()});await m(this.base,e,a),this.emit("syn-after-show")}else{w(this),this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await h(this.base);const{keyframes:e,options:a}=u(this,"alert.hide",{dir:this.localize.dir()});await m(this.base,e,a),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,y(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,y(this,"syn-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),t.toastStack.parentElement===null&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{t.toastStack.removeChild(this),e(),t.toastStack.querySelector("syn-alert")===null&&t.toastStack.remove()},{once:!0})})}render(){return d`
      <div
        part="base"
        class=${p({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${p({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};t.styles=[x,I,z];t.dependencies={"syn-icon-button":C};r([f('[part~="base"]')],t.prototype,"base",2);r([f(".alert__countdown-elapsed")],t.prototype,"countdownElement",2);r([s({type:Boolean,reflect:!0})],t.prototype,"open",2);r([s({type:Boolean,reflect:!0})],t.prototype,"closable",2);r([s({reflect:!0})],t.prototype,"variant",2);r([s({type:Number})],t.prototype,"duration",2);r([T()],t.prototype,"remainingTime",2);r([b("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);r([b("duration")],t.prototype,"handleDurationChange",1);t=r([A("SynAlert")],t);g("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});g("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});export{t as S};
