import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-DJ0QlWgc.js";import{n as i,t as a}from"./class-map-DEi9Q1MK.js";import{r as o,t as s}from"./slot-uOU62xJ8.js";import{n as c,t as l}from"./if-defined-D8THz00N.js";import{n as u,t as d}from"./localize-DnZL8qNz.js";import{a as f,f as p,i as m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./synergy-element-ChX6Se5O.js";import{n as S,t as C}from"./watch-OXZPXmne.js";import{a as w,i as T,l as E,n as D,o as O,t as k}from"./animation-registry-DTpGRZQp.js";import{n as A,t as j}from"./event-CAQhbrA7.js";import{n as M,t as N}from"./closeActiveElement-DWQwTBzc.js";import{n as P,t as F}from"./icon-button.component-BX_JM2We.js";import{i as I,n as L,t as R}from"./scroll-puol-Nad.js";import{n as z,t as B}from"./modal-Cc10KPo5.js";function V(e){return e.charAt(0).toUpperCase()+e.slice(1)}var H=e((()=>{})),U,W=e((()=>{t(),U=r`
	/* stylelint-disable */
  :host {
    --size: 25rem;
    --header-spacing: var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--syn-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--syn-font-size-large);
    line-height: var(--syn-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--syn-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(syn-button:not(:last-of-type)) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--syn-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`})),G,K=e((()=>{t(),G=r`
  :host {
    /**
     * Used as the default padding for the drawer title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);
  }

  /**
   * Synergy uses a border to distinguish the drawer from its background and
   * removes the default shoelace shadow completely
   */
  .drawer__panel {
    border: 0 solid var(--syn-panel-border-color);
    box-shadow: none;
    color: var(--syn-color-neutral-950);
  }

  /*
   * The border of the panel is always placed in direction to the content,
   * depending on the position of the drawer itself
   */
  .drawer--end .drawer__panel {
    border-left-width: var(--syn-border-width-small);
  }

  .drawer--start .drawer__panel {
    border-right-width: var(--syn-border-width-small);
  }

  .drawer--top .drawer__panel {
    border-bottom-width: var(--syn-border-width-small);
  }

  .drawer--bottom .drawer__panel {
    border-top-width: var(--syn-border-width-small);
  }

  .drawer__header-actions {
    align-items: flex-start;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .drawer__title {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * We need this to make sure we are big enough as defined in the layout
   * When omitting this statement, we will get rounding problems via line-height
   */
  .drawer__title,
  .drawer__header-actions {
    min-height: 88px;
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }
`})),q,J=e((()=>{O(),M(),a(),D(),o(),t(),l(),d(),R(),y(),H(),j(),C(),g(),z(),h(),P(),W(),K(),m(),q=class extends b{constructor(...e){super(...e),this.hasSlotController=new s(this,`footer`),this.localize=new u(this),this.modal=new B(this),this.isVisible=!1,this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}static{this.styles=[f,U,G]}static{this.dependencies={"syn-icon-button":F}}firstUpdated(){this.drawer.hidden=this.isVisible?!1:!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),L(this)))}disconnectedCallback(){super.disconnectedCallback(),I(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=k(this,`drawer.denyClose`,{dir:this.localize.dir()});w(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),L(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([E(this.drawer),E(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=k(this,`drawer.show${V(this.placement)}`,{dir:this.localize.dir()}),n=k(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([w(this.panel,t.keyframes,t.options),w(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{N(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),I(this)),await Promise.all([E(this.drawer),E(this.overlay)]);let e=k(this,`drawer.hide${V(this.placement)}`,{dir:this.localize.dir()}),t=k(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([w(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),w(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),L(this)),this.open&&this.contained&&(this.modal.deactivate(),I(this))}async show(){if(!this.open)return this.open=!0,A(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,A(this,`syn-after-hide`)}forceVisibility(e){this.isVisible=e,this.drawer.hidden=e?!1:!this.open}render(){return n`
      <div
        part="base"
        class=${i({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement===`top`,"drawer--end":this.placement===`end`,"drawer--bottom":this.placement===`bottom`,"drawer--start":this.placement===`start`,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()===`rtl`,"drawer--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.isVisible||this.open?`false`:`true`}
          aria-label=${c(this.noHeader?this.label:void 0)}
          aria-labelledby=${c(this.noHeader?void 0:`title`)}
          tabindex="0"
        >
          ${this.noHeader?``:n`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click=${()=>this.requestClose(`close-button`)}
                    ></syn-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}},v([p()],q.prototype,`isVisible`,void 0),v([x(`.drawer`)],q.prototype,`drawer`,void 0),v([x(`.drawer__panel`)],q.prototype,`panel`,void 0),v([x(`.drawer__overlay`)],q.prototype,`overlay`,void 0),v([_({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),v([_({reflect:!0})],q.prototype,`label`,void 0),v([_({reflect:!0})],q.prototype,`placement`,void 0),v([_({type:Boolean,reflect:!0})],q.prototype,`contained`,void 0),v([_({attribute:`no-header`,type:Boolean,reflect:!0})],q.prototype,`noHeader`,void 0),v([S(`open`,{waitUntilFirstUpdate:!0})],q.prototype,`handleOpenChange`,null),v([S(`contained`,{waitUntilFirstUpdate:!0})],q.prototype,`handleNoModalChange`,null),T(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),T(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),T(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})}));export{J as n,q as t};