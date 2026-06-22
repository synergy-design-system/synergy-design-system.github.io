import{i as e}from"./preload-helper-xPQekRTU.js";import{h as t,t as n}from"./lit-DWg8XNs3.js";import{M as r,O as i}from"./iframe-DFZAAaEN.js";import{n as a,t as o}from"./class-map-D1ussEL3.js";import{r as s,t as c}from"./slot-DgcqpP0-.js";import{n as l,t as u}from"./localize-CzgwcyM2.js";import{_ as d,a as f,f as p,i as m,n as h,o as g,r as _,s as v,t as y,y as b}from"./synergy-element-CsptVtzA.js";import{n as x,t as S}from"./watch-I6gMK-uE.js";import{n as C,t as w}from"./icon.component-CCjjVGTa.js";var T,E=e((()=>{n(),T=t`
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
    font: var(--syn-heading-large);
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
`})),D,O=e((()=>{o(),i(),v(),h(),s(),g(),E(),C(),u(),S(),m(),D=class extends y{constructor(...e){super(...e),this.hasSlotController=new c(this,`[default]`,`logo`,`label`,`meta-navigation`,`navigation`),this.localize=new l(this),this.isSideNavAnimating=!1,this.label=``,this.burgerMenu=`hidden`,this.sticky=!1}static{this.styles=[f,T]}static{this.dependencies={"syn-icon":w}}toggleBurgerMenu(){switch(this.burgerMenu){case`closed`:this.burgerMenu=`open`;break;case`open`:this.burgerMenu=`closed`;break;default:break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant==="default"?this.burgerMenu=this.sideNav.open?`open`:`closed`:this.burgerMenu=`hidden`)}updateMetaNavigation(){let e=[];this.metaNavigationSlot.assignedElements({flatten:!0}).forEach(t=>{if(t.tagName.toLowerCase()===`syn-divider`)e.push(t);else{let n=t.querySelectorAll(`:scope > syn-divider`);n.length&&e.push(...n)}}),e.filter(e=>e.hasAttribute(`vertical`)).forEach(e=>{e.style.cssText+=`--spacing: var(--syn-spacing-x-small); align-self: center; display: flex; height: var(--metanavigation-item-size);`})}handleBurgerMenu(){let e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{let e=document.querySelector(`syn-side-nav`);this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){if(this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector(`syn-side-nav`),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:[`open`,`variant`],attributes:!0});let e=e=>{e.target===this.sideNav&&(this.isSideNavAnimating=!0)},t=e=>{e.target===this.sideNav&&(this.isSideNavAnimating=!1)};this.sideNav.addEventListener(`syn-show`,e),this.sideNav.addEventListener(`syn-hide`,e),this.sideNav.addEventListener(`syn-after-show`,t),this.sideNav.addEventListener(`syn-after-hide`,t)}}render(){let e=this.hasSlotController.test(`navigation`),t=this.burgerMenu!==`hidden`;return r`
      <header
        class=${a({header:!0,"header--has-burger-menu":t,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${t?r`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu===`closed`?`openMenu`:`closeMenu`)}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu===`open`?r`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:r`
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
    `}},_([p(`slot[name="meta-navigation"]`)],D.prototype,`metaNavigationSlot`,void 0),_([b()],D.prototype,`label`,void 0),_([b({attribute:`burger-menu`,reflect:!0})],D.prototype,`burgerMenu`,void 0),_([b({reflect:!0,type:Boolean})],D.prototype,`sticky`,void 0),_([d()],D.prototype,`sideNav`,void 0),_([x(`burgerMenu`,{waitUntilFirstUpdate:!0})],D.prototype,`handleBurgerMenu`,null)})),k=e((()=>{O(),O(),D.define(`syn-header`)}));export{k as t};