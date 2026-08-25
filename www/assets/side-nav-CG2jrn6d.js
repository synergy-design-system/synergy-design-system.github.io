import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,t as n}from"./lit-DgWh_IaA.js";import{f as r,g as i}from"./library-DDo5iplL.js";import{a,d as o,l as s,n as c,o as l,r as u,s as d,t as f}from"./synergy-element-BeBxrfuL.js";import{t as p}from"./query-DOHNhzf6.js";import{n as m,t as h}from"./class-map-HZwHklGF.js";import{r as g,t as _}from"./slot-CUH75lUH.js";import{n as v,t as y}from"./localize-Du3bqz3O.js";import{n as b}from"./watch-Q8hEwzVb.js";import{n as x,t as S}from"./icon.component-DQFx-sk-.js";import{n as C,t as w}from"./decorator-DZesXZg7.js";import{n as T,t as E}from"./divider.component-BnSxjUZS.js";import{i as D,n as O,r as k,t as A}from"./animation-registry-DCzWq2z4.js";import{i as j,t as M}from"./scroll-CAqkVgC4.js";import{n as N}from"./event-B7qjsglH.js";import{n as P,t as F}from"./drawer.component-xBfbHA-_.js";import{n as I,t as L}from"./nav-item.component-CK8hT_X6.js";var R;function z(){return(z=e((()=>{n(),R=t`
  :host {
    --side-nav-open-width: 320px;
    --side-nav-rail-width: 72px;

    display: block;
  }

  /**
   * Syn-drawer styling
   */
  .side-nav__drawer {
    --size: var(--side-nav-open-width);
  }
  
  .side-nav__drawer::part(base){
    position: absolute;
    z-index: var(--syn-z-index-drawer);
  }

  .side-nav__drawer::part(body),
  .side-nav__drawer::part(footer) {
    padding: 0;
  }

  /** 
   * Overlay 
   */
  .side-nav__drawer::part(overlay){
    position: absolute;
  }

  /****
   *
   * variant="default"
   *
   ****/
  
  /* Side nav should have a width, so it behave correct in an e.g. display flex context */
  .side-nav.side-nav--fix.side-nav--open {
    width: var(--side-nav-open-width);
  }

  /* Fixed mode  */
  .side-nav--fix .side-nav__drawer::part(overlay){
    display: block;
  }

  /****
   *
   * variant="rail"
   *
   ****/

  /* 
   * Side nav should have a width, so it behave correct in an e.g. display flex context. 
   * in variant="rail" the width is always the small rail width, because there should be no shrinking possible of the main content area.
   */
  .side-nav.side-nav--rail {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--rail .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  /* Show the overlay of the drawer on touch devices */
  .side-nav--open.side-nav--rail.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--rail.side-nav--animation {
    white-space: nowrap;
  }

  /* Hide the scrollbars in closed variant="rail" */ 
  :not(.side-nav--open).side-nav--rail .side-nav__drawer::part(body){
    overflow: hidden;
  }

  /****
   *
   * variant="sticky"
   *
   ****/

  /*
   * Side nav should have a width, so it behave correct in an e.g. display flex context.
   * In variant="sticky" the width is the rail width if closed and the open width if open.
   */
  .side-nav.side-nav--sticky {
    width: var(--side-nav-open-width);
  }

  .side-nav.side-nav--sticky:not(.side-nav--open) {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--sticky .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  /*
   * For touch devices the content should not shrink in a flex container
   */ 
  .side-nav--sticky.side-nav--touch {
    width: var(--side-nav-rail-width);
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--sticky.side-nav--animation {
    white-space: nowrap;
  }

  /* Show the overlay of the drawer on touch devices */
   .side-nav--open.side-nav--sticky.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  .side-nav__toggle-icon > syn-icon {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /****
   *
   * Footer divider
   *
   ****/
  .side-nav__footer-divider{
    --spacing: 0;
  }

  :not(.side-nav--open).side-nav--rail ::slotted(syn-nav-item){
    --display-children: none;
  }
`})))()}var B,V;function H(){return(H=e((()=>{h(),r(),d(),g(),c(),l(),z(),P(),T(),x(),I(),O(),y(),M(),C(),B=class extends f{static{this.styles=[a,R]}static{this.dependencies={"syn-divider":E,"syn-drawer":F,"syn-icon":S,"syn-nav-item":L}}setDelayedCallback(e){clearTimeout(this.timeout),this.timeout=setTimeout(e,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&=!1}addMouseListener(){this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.addEventListener(`mouseenter`,this.handleMouseEnter),this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.addEventListener(`mouseleave`,this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.removeEventListener(`mouseenter`,this.handleMouseEnter),this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.removeEventListener(`mouseleave`,this.handleMouseLeave)}setDrawerAnimations(){let e=A(this,`sideNav.show${this.variant==="default"?`NonRail`:`Rail`}`,{dir:this.localize.dir()}),t=A(this,`sideNav.hide${this.variant==="default"?`NonRail`:`Rail`}`,{dir:this.localize.dir()}),n=A(this,`sideNav.overlay.hide`,{dir:this.localize.dir()}),r=A(this,`sideNav.overlay.show`,{dir:this.localize.dir()});k(this.drawer,`drawer.showStart`,e),k(this.drawer,`drawer.hideStart`,t),k(this.drawer,`drawer.overlay.hide`,n),k(this.drawer,`drawer.overlay.show`,r)}handleVariantChange(){switch(this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant){case`rail`:this.addMouseListener();break;default:this.removeMouseListener()}}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,N(this.drawer,`syn-after-${this.open?`show`:`hide`}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,N(this.drawer,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,N(this.drawer,`syn-after-hide`)}constructor(){super(),this.hasSlotController=new _(this,`[default]`,`footer`),this.localize=new v(this),this.isAnimationActive=!1,this.open=!1,this.variant=`default`,this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener(`syn-initial-focus`,e=>{this.variant!=="default"&&(e.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener(`focusin`,e=>{e.target.tagName.toLowerCase()===`syn-nav-item`&&this.variant===`rail`&&!this.open&&(this.open=!0)}),this.addEventListener(`focusout`,e=>{let t=e.target.tagName.toLowerCase(),n=e.relatedTarget?.tagName.toLowerCase();t===`syn-nav-item`&&n!==`syn-nav-item`&&this.variant===`rail`&&this.open&&(this.open=!1)})}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(`.drawer__panel`).tabIndex=-1}),this.variant){case`rail`:this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case`sticky`:break;default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(j(this.drawer),this.drawer.modal.deactivate())}toggleOpenState(){this.open=!this.open}render(){let e=window.navigator.maxTouchPoints>0||`ontouchstart`in window,t=this.hasSlotController.test(`footer`),n=t||this.variant===`sticky`;return i`
      <nav
        class=${m({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":t,"side-nav--open":this.open,"side-nav--rail":this.variant===`rail`,"side-nav--sticky":this.variant===`sticky`,"side-nav--touch":e})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.variant!=="default"}
          exportparts="overlay,panel,body,base:drawer__base"
          label=${this.localize.term(`sideNav`)}
          no-header
          ?open=${this.open}
          part="drawer"
          placement="start"
          @syn-request-close=${this.handleRequestClose} 
        >
          <div part="content-container" class="side-nav__content-container">
            <slot part="content"></slot>
          </div>
          
          <footer class="side-nav__footer" part="footer-container" slot="footer">  

            ${n?i`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:``}
            <slot name="footer" part="footer" ></slot>
            ${this.variant===`sticky`?i`<syn-nav-item part="toggle-nav-item" class="side-nav__toggle-nav-item" @click=${this.toggleOpenState} ?divider=${t}>
                      <slot name="toggle-icon" slot="prefix" class="side-nav__toggle-icon">
                        <syn-icon library="system" name="sticky_sidebar" part="toggle-icon"></syn-icon>
                      </slot>
                      <slot name="toggle-label" part="toggle-label">
                        ${!this.open&&!this.isAnimationActive?this.localize.term(`sideNavShow`):this.localize.term(`sideNavHide`)}
                      </slot>
                    </syn-nav-item>`:``}
          
          </footer>

        </syn-drawer>

      </nav>
    `}},u([s()],B.prototype,`isAnimationActive`,void 0),u([p(`.side-nav__drawer`)],B.prototype,`drawer`,void 0),u([o({reflect:!0,type:Boolean})],B.prototype,`open`,void 0),u([o({reflect:!0})],B.prototype,`variant`,void 0),u([o({attribute:`no-focus-trapping`,reflect:!0,type:Boolean})],B.prototype,`noFocusTrapping`,void 0),u([b(`variant`,{waitUntilFirstUpdate:!0})],B.prototype,`handleVariantChange`,null),u([b(`open`,{waitUntilFirstUpdate:!0})],B.prototype,`handleOpenChange`,null),u([b(`noFocusTrapping`,{waitUntilFirstUpdate:!0})],B.prototype,`handleFocusTrapping`,null),B=u([w(`SynSideNav`)],B),V=B,D(`sideNav.showRail`,{keyframes:[{width:`var(--side-nav-rail-width)`},{width:`var(--side-nav-open-width)`}],options:{duration:250,easing:`ease`}}),D(`sideNav.showNonRail`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),D(`sideNav.hideNonRail`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),D(`sideNav.hideRail`,{keyframes:[{width:`var(--side-nav-open-width)`},{width:`var(--side-nav-rail-width)`}],options:{duration:250,easing:`ease`}}),D(`sideNav.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),D(`sideNav.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})))()}function U(){return(U=e((()=>{H(),V.define(`syn-side-nav`)})))()}export{U as t};