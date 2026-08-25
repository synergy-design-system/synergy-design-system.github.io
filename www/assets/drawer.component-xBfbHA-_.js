import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-BeBxrfuL.js";import{t as f}from"./query-DOHNhzf6.js";import{r as p,t as m}from"./if-defined-DmmMeZVG.js";import{n as h,t as g}from"./class-map-HZwHklGF.js";import{r as _,t as v}from"./slot-CUH75lUH.js";import{n as y,t as b}from"./localize-Du3bqz3O.js";import{n as x}from"./watch-Q8hEwzVb.js";import{a as S,i as C,l as w,n as T,t as E}from"./animation-registry-DCzWq2z4.js";import{i as D,n as O,t as k}from"./scroll-CAqkVgC4.js";import{n as A}from"./event-B7qjsglH.js";import{n as j,t as M}from"./icon-button.component-CWWNMk3k.js";import{n as N,t as P}from"./closeActiveElement-BNUGXJNF.js";import{n as F,t as I}from"./modal-BSHb7aR1.js";function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}var R;function z(){return(z=e((()=>{r(),R=n`
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
`})))()}var B;function V(){return(V=e((()=>{N(),g(),T(),_(),r(),m(),b(),k(),u(),c(),F(),s(),j(),z(),B=class extends d{constructor(...e){super(...e),this.hasSlotController=new v(this,`footer`),this.localize=new y(this),this.modal=new I(this),this.isVisible=!1,this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}static{this.styles=[i,R]}static{this.dependencies={"syn-icon-button":M}}firstUpdated(){this.drawer.hidden=!this.isVisible&&!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),O(this)))}disconnectedCallback(){super.disconnectedCallback(),D(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=E(this,`drawer.denyClose`,{dir:this.localize.dir()});S(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),O(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([w(this.drawer),w(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=E(this,`drawer.show${L(this.placement)}`,{dir:this.localize.dir()}),n=E(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([S(this.panel,t.keyframes,t.options),S(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{P(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),D(this)),await Promise.all([w(this.drawer),w(this.overlay)]);let e=E(this,`drawer.hide${L(this.placement)}`,{dir:this.localize.dir()}),t=E(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([S(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),S(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),O(this)),this.open&&this.contained&&(this.modal.deactivate(),D(this))}async show(){if(!this.open)return this.open=!0,A(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,A(this,`syn-after-hide`)}forceVisibility(e){this.isVisible=e,this.drawer.hidden=!e&&!this.open}render(){return t`
      <div
        part="base"
        class=${h({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement===`top`,"drawer--end":this.placement===`end`,"drawer--bottom":this.placement===`bottom`,"drawer--start":this.placement===`start`,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()===`rtl`,"drawer--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.isVisible||this.open?`false`:`true`}
          aria-label=${p(this.noHeader?this.label:void 0)}
          aria-labelledby=${p(this.noHeader?void 0:`title`)}
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
    `}},l([o()],B.prototype,`isVisible`,void 0),l([f(`.drawer`)],B.prototype,`drawer`,void 0),l([f(`.drawer__panel`)],B.prototype,`panel`,void 0),l([f(`.drawer__overlay`)],B.prototype,`overlay`,void 0),l([a({type:Boolean,reflect:!0})],B.prototype,`open`,void 0),l([a({reflect:!0})],B.prototype,`label`,void 0),l([a({reflect:!0})],B.prototype,`placement`,void 0),l([a({type:Boolean,reflect:!0})],B.prototype,`contained`,void 0),l([a({attribute:`no-header`,type:Boolean,reflect:!0})],B.prototype,`noHeader`,void 0),l([x(`open`,{waitUntilFirstUpdate:!0})],B.prototype,`handleOpenChange`,null),l([x(`contained`,{waitUntilFirstUpdate:!0})],B.prototype,`handleNoModalChange`,null),C(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),C(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),C(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),C(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),C(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),C(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),C(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),C(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),C(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),C(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),C(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})))()}export{V as n,B as t};