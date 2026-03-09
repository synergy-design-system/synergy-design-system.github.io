import{e as g}from"./class-map-BXP5nj_A.js";import{j as h,u as o}from"./iframe-OI-W47sE.js";import{S as u,c as v,n as c}from"./synergy-element-CDccwnU_.js";import{S as p,r as m}from"./icon.component-DZRgsOxP.js";import{a as y}from"./query-D0jTsbLw.js";import{H as b}from"./slot-9EVoRGQc.js";import"./icon-Bsj09ulO.js";import{L as f}from"./localize-Dh03wnLC.js";import{w as _}from"./watch-CEsCE2EF.js";const N=h`
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
`;var M=Object.defineProperty,S=Object.getOwnPropertyDescriptor,s=(r,e,n,t)=>{for(var a=t>1?void 0:t?S(e,n):e,l=r.length-1,d;l>=0;l--)(d=r[l])&&(a=(t?d(e,n,a):d(a))||a);return t&&a&&M(e,n,a),a};class i extends u{constructor(){super(...arguments),this.hasSlotController=new b(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new f(this),this.isSideNavAnimating=!1,this.label="",this.burgerMenu="hidden",this.sticky=!1}static{this.styles=[v,N]}static{this.dependencies={"syn-icon":p}}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant!=="default"?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}updateMetaNavigation(){const e=[];this.metaNavigationSlot.assignedElements({flatten:!0}).forEach(t=>{if(t.tagName.toLowerCase()==="syn-divider")e.push(t);else{const a=t.querySelectorAll(":scope > syn-divider");a.length&&e.push(...a)}});const n="--spacing: var(--syn-spacing-x-small); align-self: center; display: flex; height: var(--metanavigation-item-size);";e.filter(t=>t.hasAttribute("vertical")).forEach(t=>{t.style.cssText+=n})}handleBurgerMenu(){const e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{const e=document.querySelector("syn-side-nav");this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){if(this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector("syn-side-nav"),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","variant"],attributes:!0});const n=a=>{a.target===this.sideNav&&(this.isSideNavAnimating=!0)},t=a=>{a.target===this.sideNav&&(this.isSideNavAnimating=!1)};this.sideNav.addEventListener("syn-show",n),this.sideNav.addEventListener("syn-hide",n),this.sideNav.addEventListener("syn-after-show",t),this.sideNav.addEventListener("syn-after-hide",t)}}render(){const e=this.hasSlotController.test("navigation"),n=this.burgerMenu!=="hidden";return o`
      <header
        class=${g({header:!0,"header--has-burger-menu":n,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${n?o`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?o`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:o`
                          <slot name="closed-burger-menu-icon">
                            <syn-icon name="menu" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

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
    `}}s([y('slot[name="meta-navigation"]')],i.prototype,"metaNavigationSlot",2);s([c()],i.prototype,"label",2);s([c({attribute:"burger-menu",reflect:!0})],i.prototype,"burgerMenu",2);s([c({reflect:!0,type:Boolean})],i.prototype,"sticky",2);s([m()],i.prototype,"sideNav",2);s([_("burgerMenu",{waitUntilFirstUpdate:!0})],i.prototype,"handleBurgerMenu",1);i.define("syn-header");
