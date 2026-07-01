import{i as e}from"./preload-helper-xPQekRTU.js";import{h as t,t as n}from"./lit-BVDl_-fF.js";import{A as r,P as i}from"./iframe-Berx97Z2.js";import{_ as a,a as o,f as s,i as c,n as l,o as u,r as d,s as f,t as p,y as m}from"./synergy-element-D_jGE1Vc.js";import{n as h,t as g}from"./class-map-BNNCJSEv.js";import{r as _,t as v}from"./slot-DgcqpP0-.js";import{n as y,t as b}from"./localize-CzgwcyM2.js";import{n as x,t as S}from"./watch-I6gMK-uE.js";import{n as C,t as w}from"./icon.component-CXa7Pias.js";import{n as T,t as E}from"./decorator-ChmomMqD.js";import{n as D,t as O}from"./divider.component-DZAuGMpq.js";import{i as k,n as A,r as j,t as M}from"./animation-registry-CAtzdG-I.js";import{i as N,t as P}from"./scroll-t7qKpqAH.js";import{n as F,t as I}from"./event-gTfeuJtF.js";import{n as L,t as R}from"./drawer.component-CU-ZSULL.js";import{n as z,t as B}from"./nav-item.component-B7Oq1GlT.js";var V,H=e((()=>{n(),V=t`
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
`})),U,W,G=e((()=>{g(),r(),f(),_(),l(),u(),H(),L(),D(),C(),z(),I(),S(),A(),b(),P(),T(),c(),U=class extends p{static{this.styles=[o,V]}static{this.dependencies={"syn-divider":O,"syn-drawer":R,"syn-icon":w,"syn-nav-item":B}}setDelayedCallback(e){clearTimeout(this.timeout),this.timeout=setTimeout(e,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&=!1}addMouseListener(){this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.addEventListener(`mouseenter`,this.handleMouseEnter),this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.addEventListener(`mouseleave`,this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.removeEventListener(`mouseenter`,this.handleMouseEnter),this.drawer.shadowRoot.querySelector(`.drawer__panel`)?.removeEventListener(`mouseleave`,this.handleMouseLeave)}setDrawerAnimations(){let e=M(this,`sideNav.show${this.variant==="default"?`NonRail`:`Rail`}`,{dir:this.localize.dir()}),t=M(this,`sideNav.hide${this.variant==="default"?`NonRail`:`Rail`}`,{dir:this.localize.dir()}),n=M(this,`sideNav.overlay.hide`,{dir:this.localize.dir()}),r=M(this,`sideNav.overlay.show`,{dir:this.localize.dir()});j(this.drawer,`drawer.showStart`,e),j(this.drawer,`drawer.hideStart`,t),j(this.drawer,`drawer.overlay.hide`,n),j(this.drawer,`drawer.overlay.show`,r)}handleVariantChange(){switch(this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant){case`rail`:this.addMouseListener();break;default:this.removeMouseListener()}}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,F(this.drawer,`syn-after-${this.open?`show`:`hide`}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,F(this.drawer,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,F(this.drawer,`syn-after-hide`)}constructor(){super(),this.hasSlotController=new v(this,`[default]`,`footer`),this.localize=new y(this),this.isAnimationActive=!1,this.open=!1,this.variant=`default`,this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener(`syn-initial-focus`,e=>{this.variant!=="default"&&(e.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener(`focusin`,e=>{e.target.tagName.toLowerCase()===`syn-nav-item`&&this.variant===`rail`&&!this.open&&(this.open=!0)}),this.addEventListener(`focusout`,e=>{let t=e.target.tagName.toLowerCase(),n=e.relatedTarget?.tagName.toLowerCase();t===`syn-nav-item`&&n!==`syn-nav-item`&&this.variant===`rail`&&this.open&&(this.open=!1)})}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(`.drawer__panel`).tabIndex=-1}),this.variant){case`rail`:this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case`sticky`:break;default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(N(this.drawer),this.drawer.modal.deactivate())}toggleOpenState(){this.open=!this.open}render(){let e=window.navigator.maxTouchPoints>0||`ontouchstart`in window,t=this.hasSlotController.test(`footer`),n=t||this.variant===`sticky`;return i`
      <nav
        class=${h({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":t,"side-nav--open":this.open,"side-nav--rail":this.variant===`rail`,"side-nav--sticky":this.variant===`sticky`,"side-nav--touch":e})}
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
    `}},d([a()],U.prototype,`isAnimationActive`,void 0),d([s(`.side-nav__drawer`)],U.prototype,`drawer`,void 0),d([m({reflect:!0,type:Boolean})],U.prototype,`open`,void 0),d([m({reflect:!0})],U.prototype,`variant`,void 0),d([m({attribute:`no-focus-trapping`,reflect:!0,type:Boolean})],U.prototype,`noFocusTrapping`,void 0),d([x(`variant`,{waitUntilFirstUpdate:!0})],U.prototype,`handleVariantChange`,null),d([x(`open`,{waitUntilFirstUpdate:!0})],U.prototype,`handleOpenChange`,null),d([x(`noFocusTrapping`,{waitUntilFirstUpdate:!0})],U.prototype,`handleFocusTrapping`,null),U=d([E(`SynSideNav`)],U),W=U,k(`sideNav.showRail`,{keyframes:[{width:`var(--side-nav-rail-width)`},{width:`var(--side-nav-open-width)`}],options:{duration:250,easing:`ease`}}),k(`sideNav.showNonRail`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),k(`sideNav.hideNonRail`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),k(`sideNav.hideRail`,{keyframes:[{width:`var(--side-nav-open-width)`},{width:`var(--side-nav-rail-width)`}],options:{duration:250,easing:`ease`}}),k(`sideNav.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),k(`sideNav.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})),K=e((()=>{G(),G(),W.define(`syn-side-nav`)}));export{K as t};