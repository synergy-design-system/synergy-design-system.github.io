import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-BVDl_-fF.js";import{n as i,t as a}from"./class-map-BmdGqO7G.js";import{r as o,t as s}from"./slot-DgcqpP0-.js";import{r as c,t as l}from"./if-defined-BsCyJVG6.js";import{n as u,t as d}from"./localize-CzgwcyM2.js";import{_ as f,a as p,f as m,i as h,n as g,o as _,r as v,s as y,t as b,y as x}from"./synergy-element-fkSPPZqT.js";import{n as S,t as C}from"./watch-I6gMK-uE.js";import{a as w,i as T,l as E,n as D,o as O,t as k}from"./animation-registry-CAtzdG-I.js";import{i as A,n as j,t as M}from"./scroll-t7qKpqAH.js";import{n as N,t as P}from"./event-gTfeuJtF.js";import{n as F,t as I}from"./icon-button.component-BXE4Ra15.js";import{n as L,t as R}from"./closeActiveElement-CbfZj3Se.js";import{n as z,t as B}from"./modal-CDz5YPUc.js";function V(e){return e.charAt(0).toUpperCase()+e.slice(1)}var H=e((()=>{})),U,W=e((()=>{r(),U=n`
  :host {
    --size: 25rem;
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);

    display: contents;
  }

  .drawer {
    height: 100%;
    inset-inline-start: 0;
    overflow: hidden;
    pointer-events: none;
    top: 0;
    width: 100%;
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
    background-color: var(--syn-panel-background-color);
    border: 0 solid var(--syn-panel-border-color);
    color: var(--syn-color-neutral-950);
    display: flex;
    flex-direction: column;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
    pointer-events: all;
    position: absolute;
    z-index: 2;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    border-bottom-width: var(--syn-border-width-small);
    bottom: auto;
    height: var(--size);
    inset-inline: 0 auto;
    top: 0;
    width: 100%;
  }

  .drawer--end .drawer__panel {
    border-left-width: var(--syn-border-width-small);
    bottom: auto;
    height: 100%;
    inset-inline: auto 0;
    top: 0;
    width: var(--size);
  }

  .drawer--bottom .drawer__panel {
    border-top-width: var(--syn-border-width-small);
    bottom: 0;
    height: var(--size);
    inset-inline: 0 auto;
    top: auto;
    width: 100%;
  }

  .drawer--start .drawer__panel {
    border-right-width: var(--syn-border-width-small);
    bottom: auto;
    height: 100%;
    inset-inline: 0 auto;
    top: 0;
    width: var(--size);
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    font: var(--syn-heading-x-large);
    margin: 0;
    padding: var(--header-spacing);
  }

  .drawer__header-actions {
    align-items: flex-start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-font-size-x-large);
  }

  .drawer__body {
    display: block;
    flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--body-spacing);
  }

  .drawer__footer {
    padding: var(--footer-spacing);
    text-align: right;
  }

  .drawer__footer ::slotted(syn-button:not(:last-of-type)) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    background-color: var(--syn-overlay-background-color);
    display: block;
    inset: 0;
    pointer-events: all;
    position: fixed;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`})),G,K=e((()=>{O(),L(),a(),D(),o(),r(),l(),d(),M(),y(),H(),P(),C(),_(),z(),g(),F(),W(),h(),G=class extends b{constructor(...e){super(...e),this.hasSlotController=new s(this,`footer`),this.localize=new u(this),this.modal=new B(this),this.isVisible=!1,this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}static{this.styles=[p,U]}static{this.dependencies={"syn-icon-button":I}}firstUpdated(){this.drawer.hidden=this.isVisible?!1:!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),j(this)))}disconnectedCallback(){super.disconnectedCallback(),A(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=k(this,`drawer.denyClose`,{dir:this.localize.dir()});w(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),j(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([E(this.drawer),E(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=k(this,`drawer.show${V(this.placement)}`,{dir:this.localize.dir()}),n=k(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([w(this.panel,t.keyframes,t.options),w(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{R(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),A(this)),await Promise.all([E(this.drawer),E(this.overlay)]);let e=k(this,`drawer.hide${V(this.placement)}`,{dir:this.localize.dir()}),t=k(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([w(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),w(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),j(this)),this.open&&this.contained&&(this.modal.deactivate(),A(this))}async show(){if(!this.open)return this.open=!0,N(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,N(this,`syn-after-hide`)}forceVisibility(e){this.isVisible=e,this.drawer.hidden=e?!1:!this.open}render(){return t`
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
          ${this.noHeader?``:t`
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
    `}},v([f()],G.prototype,`isVisible`,void 0),v([m(`.drawer`)],G.prototype,`drawer`,void 0),v([m(`.drawer__panel`)],G.prototype,`panel`,void 0),v([m(`.drawer__overlay`)],G.prototype,`overlay`,void 0),v([x({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),v([x({reflect:!0})],G.prototype,`label`,void 0),v([x({reflect:!0})],G.prototype,`placement`,void 0),v([x({type:Boolean,reflect:!0})],G.prototype,`contained`,void 0),v([x({attribute:`no-header`,type:Boolean,reflect:!0})],G.prototype,`noHeader`,void 0),v([S(`open`,{waitUntilFirstUpdate:!0})],G.prototype,`handleOpenChange`,null),v([S(`contained`,{waitUntilFirstUpdate:!0})],G.prototype,`handleNoModalChange`,null),T(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),T(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),T(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),T(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),T(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})}));export{K as n,G as t};