import{n as e}from"./chunk-DnJy8xQt.js";import{A as t,D as n,Nt as r,Ut as i}from"./iframe-rzuzvTqw.js";import{n as a,t as o}from"./class-map-BSEJ0nPb.js";import{r as s,t as c}from"./slot-uOU62xJ8.js";import{n as l,t as u}from"./localize-DnZL8qNz.js";import{a as d,f,i as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./synergy-element-C2gCmwiV.js";import{n as x,t as S}from"./watch-OXZPXmne.js";import{n as C,t as w}from"./icon.component-DovAIrSi.js";var T,E=e((()=>{r(),T=i`
  :host {
    --sticky-position: 0;
    --metanavigation-item-size: var(--syn-font-size-x-large);

    display: block;
  }

  .header {
    background: var(--syn-panel-background-color);
    box-shadow: inset 0 -1px 0 0 var(--syn-header-border-color);
  }

  /**
   * The primary content area displays one to many slotted items
   * and contains the following items:
   * - side nav state icon (OPTIONAL)
   * - company or application logo
   * - application name
   * - meta-navigation
   */
  .header__content {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    min-height: 40px;
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
  }

  /**
   * The logo slot includes the application or company logo
   */
  .header__logo ::slotted(*),
  .header__logo syn-icon {
    display: block;
  }

  /**
   * Make sure to use the correct color and outline for links
   */
  .header__logo ::slotted(a),
  .header__logo ::slotted(a:hover) {
    color: var(--syn-logo-color);
  }

  .header__logo ::slotted(a:is(:focus-visible)) {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /**
   * Styles for the default logo. This makes sure the default SICK logo has the correct size and color
   */
  .header__logo syn-icon,
  .header__logo syn-icon::part(svg) {
    color: var(--syn-logo-color);
    height: 32px;
    width: auto;
  }

  /**
   * The label section hosts the application name
   */
  .header__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-large-bold);
    padding: 0 var(--syn-spacing-2x-large);
    white-space: nowrap;
  }

  /**
   * The options menu holds an arbitrary list of <syn-icon-button />
   */
  .header__meta-navigation {
    display: flex;
    flex: 1;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
  }

  .header__meta-navigation ::slotted(*) {
    color: var(--syn-interactive-quiet-color);
    display: contents;
    font-size: var(--metanavigation-item-size);
  }

  /**
   * The horizontal top navigation section
   */
  .header__navigation {
    padding: 0 var(--syn-spacing-large);
  }

  /**
   * The burger menu icon styles
   */
  .header__burger-menu-toggle {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-interactive-quiet-color);
    cursor: pointer;
    display: flex;
    font-size: var(--syn-font-size-x-large);
    margin-right: calc(var(--syn-spacing-medium) + var(--syn-spacing-2x-small));
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .header__burger-menu-toggle:hover {
    color: var(--syn-interactive-quiet-color-hover);
  }

  .header__burger-menu-toggle:active {
    color: var(--syn-interactive-quiet-color-active);
  }

  .header__burger-menu-toggle:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /**
   * If the burger menu is provided, use a smaller spacing on the left side
   */
  .header--has-burger-menu .header__content {
    padding-left: var(--syn-spacing-medium);
  }

  /**
   * #529: Sticky header styles
   */
  :host([sticky]) {
    box-shadow: var(--syn-shadow-sticky-down);
    position: sticky;
    top: var(--sticky-position);

    /* Make sure the header is above all other content, but below any potential modals or overlays */
    z-index: calc(infinity - 1);
  }
`})),D,O=e((()=>{o(),n(),v(),m(),s(),h(),E(),C(),u(),S(),p(),D=class extends y{constructor(...e){super(...e),this.hasSlotController=new c(this,`[default]`,`logo`,`label`,`meta-navigation`,`navigation`),this.localize=new l(this),this.isSideNavAnimating=!1,this.label=``,this.burgerMenu=`hidden`,this.sticky=!1}static{this.styles=[d,T]}static{this.dependencies={"syn-icon":w}}toggleBurgerMenu(){switch(this.burgerMenu){case`closed`:this.burgerMenu=`open`;break;case`open`:this.burgerMenu=`closed`;break;default:break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant===`default`&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant===`default`?this.burgerMenu=this.sideNav.open?`open`:`closed`:this.burgerMenu=`hidden`)}updateMetaNavigation(){let e=[];this.metaNavigationSlot.assignedElements({flatten:!0}).forEach(t=>{if(t.tagName.toLowerCase()===`syn-divider`)e.push(t);else{let n=t.querySelectorAll(`:scope > syn-divider`);n.length&&e.push(...n)}}),e.filter(e=>e.hasAttribute(`vertical`)).forEach(e=>{e.style.cssText+=`--spacing: var(--syn-spacing-x-small); align-self: center; display: flex; height: var(--metanavigation-item-size);`})}handleBurgerMenu(){let e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{let e=document.querySelector(`syn-side-nav`);this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){if(this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector(`syn-side-nav`),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:[`open`,`variant`],attributes:!0});let e=e=>{e.target===this.sideNav&&(this.isSideNavAnimating=!0)},t=e=>{e.target===this.sideNav&&(this.isSideNavAnimating=!1)};this.sideNav.addEventListener(`syn-show`,e),this.sideNav.addEventListener(`syn-hide`,e),this.sideNav.addEventListener(`syn-after-show`,t),this.sideNav.addEventListener(`syn-after-hide`,t)}}render(){let e=this.hasSlotController.test(`navigation`),n=this.burgerMenu!==`hidden`;return t`
      <header
        class=${a({header:!0,"header--has-burger-menu":n,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${n?t`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu===`closed`?`openMenu`:`closeMenu`)}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu===`open`?t`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:t`
                          <slot name="closed-burger-menu-icon">
                            <syn-icon name="menu" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:``}

          <div part="logo" class="header__logo">
            <slot name="logo">
              <syn-icon name="logo-color" library="system" label="SICK Sensor Intelligence"></syn-icon>
            </slot>
          </div>

          <div part="label" class="header__label">
            <slot name="label">
              ${this.label}
            </slot>
          </div>

          <div part="meta-navigation" class="header__meta-navigation">
            <slot @slotchange=${this.updateMetaNavigation} name="meta-navigation"></slot>
          </div>
        </div>
        <!-- /.header__content -->

        <div part="navigation" class="header__navigation">
          <slot name="navigation"></slot>
        </div>
      </header>
    `}},_([b(`slot[name="meta-navigation"]`)],D.prototype,`metaNavigationSlot`,void 0),_([g()],D.prototype,`label`,void 0),_([g({attribute:`burger-menu`,reflect:!0})],D.prototype,`burgerMenu`,void 0),_([g({reflect:!0,type:Boolean})],D.prototype,`sticky`,void 0),_([f()],D.prototype,`sideNav`,void 0),_([x(`burgerMenu`,{waitUntilFirstUpdate:!0})],D.prototype,`handleBurgerMenu`,null)})),k=e((()=>{O(),O(),D.define(`syn-header`)}));export{k as t};