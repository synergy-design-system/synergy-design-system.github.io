import{e as u}from"./class-map-vAWwgj24.js";import{l as g,h as o}from"./iframe-7tHXQVNC.js";import{n as c}from"./property-D1h_DNUl.js";import{r as h}from"./state-C9P6TcHx.js";import{S as v,c as p}from"./component.styles-C7e_DUNf.js";import{H as m}from"./slot-9EVoRGQc.js";import"./icon-BTRqAuEP.js";import{L as y}from"./localize-Dh03wnLC.js";import{w as b}from"./watch-CEsCE2EF.js";import{S as f}from"./icon.component-B89CvZOL.js";const _=g`
  :host {
    display: block;
  }

  .header {
    background: var(--syn-color-neutral-0);
    box-shadow: inset 0 -1px 0 0 var(--syn-color-neutral-400);
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
    color: var(--syn-color-primary-600);
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
    color: var(--syn-color-primary-600);
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
    color: var(--syn-color-neutral-950);
    display: contents;
    font-size: var(--syn-font-size-x-large);
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
    color: var(--syn-color-neutral-950);
    cursor: pointer;
    display: flex;
    font-size: var(--syn-font-size-x-large);
    margin-right: calc(var(--syn-spacing-medium) + var(--syn-spacing-2x-small));
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .header__burger-menu-toggle:hover {
    color: var(--syn-color-primary-600);
  }

  .header__burger-menu-toggle:active {
    color: var(--syn-color-primary-700);
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
`;var N=Object.defineProperty,M=Object.getOwnPropertyDescriptor,r=(i,e,t,n)=>{for(var a=n>1?void 0:n?M(e,t):e,l=i.length-1,d;l>=0;l--)(d=i[l])&&(a=(n?d(e,t,a):d(a))||a);return n&&a&&N(e,t,a),a};class s extends v{constructor(){super(...arguments),this.hasSlotController=new m(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new y(this),this.isSideNavAnimating=!1,this.label="",this.burgerMenu="hidden"}static{this.styles=[p,_]}static{this.dependencies={"syn-icon":f}}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant!=="default"?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}handleBurgerMenu(){const e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{const e=document.querySelector("syn-side-nav");this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){if(this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector("syn-side-nav"),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","variant"],attributes:!0});const t=()=>{this.isSideNavAnimating=!0},n=()=>{this.isSideNavAnimating=!1};this.sideNav.addEventListener("syn-show",t),this.sideNav.addEventListener("syn-hide",t),this.sideNav.addEventListener("syn-after-show",n),this.sideNav.addEventListener("syn-after-hide",n)}}render(){const e=this.hasSlotController.test("navigation"),t=this.burgerMenu!=="hidden";return o`
      <header
        class=${u({header:!0,"header--has-burger-menu":t,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${t?o`
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
            <slot name="meta-navigation"></slot>
          </div>
        </div>
        <!-- /.header__content -->

        <div part="navigation" class="header__navigation">
          <slot name="navigation"></slot>
        </div>
      </header>
    `}}r([c()],s.prototype,"label",2);r([c({attribute:"burger-menu",reflect:!0})],s.prototype,"burgerMenu",2);r([h()],s.prototype,"sideNav",2);r([b("burgerMenu",{waitUntilFirstUpdate:!0})],s.prototype,"handleBurgerMenu",1);s.define("syn-header");
