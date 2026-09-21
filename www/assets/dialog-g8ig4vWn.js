import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-CyOGAJ68.js";import{t as d}from"./query-DOHNhzf6.js";import{r as f,t as p}from"./if-defined-DmmMeZVG.js";import{n as m,t as h}from"./class-map-HZwHklGF.js";import{r as g,t as _}from"./slot-CUH75lUH.js";import{n as v,t as y}from"./localize-Du3bqz3O.js";import{n as b}from"./watch-Q8hEwzVb.js";import{a as x,i as S,l as C,n as w,t as T}from"./animation-registry-DCzWq2z4.js";import{i as E,n as D,t as O}from"./scroll-CAqkVgC4.js";import{n as k}from"./event-B7qjsglH.js";import{n as A,t as j}from"./icon-button.component-CNP0mW7Y.js";import{n as M,t as N}from"./closeActiveElement-BNUGXJNF.js";import{n as P,t as F}from"./modal-BSHb7aR1.js";var I;function L(){return(L=e((()=>{r(),I=n`
  :host {
    --width: 31rem;
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);

    display: contents;
  }

  .dialog {
    align-items: center;
    display: flex;
    inset: 0;
    justify-content: center;
    position: fixed;
    z-index: var(--syn-z-index-dialog);
  }

  .dialog__panel {
    background-color: var(--syn-panel-background-color);
    border: var(--syn-spacing-4x-small) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-large);
    display: flex;
    flex-direction: column;
    max-height: calc(100% - var(--syn-spacing-2x-large));
    max-width: calc(100% - var(--syn-spacing-2x-large));
    width: var(--width);
    z-index: 2;
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (width <= 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    display: flex;
    flex: 0 0 auto;
  }

  .dialog__title {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    font: var(--syn-heading-x-large);
    margin: 0;
    padding: var(--header-spacing);
  }

  .dialog__header-actions {
    align-items: flex-start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-font-size-x-large);
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--body-spacing);
    will-change: transform; /* #1249: Fixes Chrome scroll issues when using multiple scrollable items as content */
  }

  .dialog__footer {
    flex: 0 0 auto;
    padding: var(--footer-spacing);
    text-align: right;
  }

  .dialog__footer ::slotted(syn-button:not(:first-of-type)) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    backdrop-filter: blur(var(--syn-overlay-background-blur)); /* #946: Add background blur for sick 2025 */
    background-color: var(--syn-overlay-background-color);
    inset: 0;
    position: fixed;
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`})))()}var R;function z(){return(z=e((()=>{h(),r(),p(),l(),M(),w(),g(),y(),O(),s(),P(),o(),A(),L(),R=class extends u{constructor(...e){super(...e),this.hasSlotController=new _(this,`footer`),this.localize=new v(this),this.modal=new F(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}static{this.styles=[i,I]}static{this.dependencies={"syn-icon-button":j}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),D(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),E(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=T(this,`dialog.denyClose`,{dir:this.localize.dir()});x(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),D(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([C(this.dialog),C(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=T(this,`dialog.show`,{dir:this.localize.dir()}),n=T(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([x(this.panel,t.keyframes,t.options),x(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{N(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([C(this.dialog),C(this.overlay)]);let e=T(this,`dialog.hide`,{dir:this.localize.dir()}),t=T(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([x(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),x(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,E(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}async show(){if(!this.open)return this.open=!0,k(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,k(this,`syn-after-hide`)}render(){return t`
      <div
        part="base"
        class=${m({dialog:!0,"dialog--has-footer":this.hasSlotController.test(`footer`),"dialog--open":this.open})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${f(this.noHeader?this.label:void 0)}
          aria-labelledby=${f(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:t`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></syn-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}},c([d(`.dialog`)],R.prototype,`dialog`,void 0),c([d(`.dialog__panel`)],R.prototype,`panel`,void 0),c([d(`.dialog__overlay`)],R.prototype,`overlay`,void 0),c([a({reflect:!0,type:Boolean})],R.prototype,`open`,void 0),c([a({reflect:!0})],R.prototype,`label`,void 0),c([a({attribute:`no-header`,reflect:!0,type:Boolean})],R.prototype,`noHeader`,void 0),c([b(`open`,{waitUntilFirstUpdate:!0})],R.prototype,`handleOpenChange`,null),S(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),S(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),S(`dialog.denyClose`,{keyframes:[{offset:0,transform:`translateX(0)`},{offset:.32,transform:`translateX(calc(var(--syn-spacing-x-small) * -1))`},{offset:.6,transform:`translateX(var(--syn-spacing-2x-small))`},{offset:.82,transform:`translateX(calc(var(--syn-spacing-3x-small) * -1))`},{offset:1,transform:`translateX(0)`}],options:{duration:250,easing:`cubic-bezier(0.25, 0.1, 0.25, 1)`}}),S(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),S(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})))()}function B(){return(B=e((()=>{z(),R.define(`syn-dialog`)})))()}export{B as t};