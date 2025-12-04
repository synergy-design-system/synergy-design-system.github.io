import{e as b}from"./class-map-D4IBD07P.js";import{j as S,u as f}from"./iframe-DEjDpRef.js";import{S as N,r as h}from"./icon.component-juKEJBdj.js";import{a as c}from"./query-DAIS6qJ0.js";import{S as _,c as P}from"./synergy-element-9YQF5Oan.js";import{S as z}from"./dropdown.component-DjShPkcW.js";import{S as O}from"./menu.component-DiVUaiJ9.js";import{S as C}from"./nav-item-6jQm2qSE.js";import{L as M}from"./localize-Dh03wnLC.js";const w=S`
  :host {
    display: block;

    /**
     * Needed because the positioning of the priority menu is absolute
     */
    position: relative !important;
  }

  .horizontal-nav {
    display: flex;
    flex: 1;
    gap: var(--syn-spacing-large);
  }

  /**
   * Priority Menu adjustments
   */
  .priority-menu--hidden {
    visibility: hidden;
  }

  .priority-menu__label {
    display: none;
  }

  .priority-menu__label--visible {
    display: block;
  }

  /**
   * Make the available small click area accessible by adding paddings
   */
  .priority-menu--has-visible-items .priority-menu__icon {
    padding-left: var(--syn-spacing-small);
    padding-right: var(--syn-spacing-small);
  }

  /**
   * Remove the margin from the content container if it is not visible
   */
  .priority-menu--has-visible-items .priority-menu__nav-item::part(content-container) {
    margin-inline-start: 0;
  }
`,g=t=>Array.from(t.assignedElements({flatten:!0})),A=t=>t.tagName.toLocaleLowerCase()==="syn-nav-item"||(t.getAttribute("role")??"")==="menuitem",I=t=>t.filter(A),R=t=>{t.setAttribute("horizontal","true"),t.removeAttribute("slot"),t.removeAttribute("tabindex"),t.dataset.originalRole?t.setAttribute("role",t.dataset.originalRole):t.removeAttribute("role")},k=t=>{t.removeAttribute("horizontal"),t.setAttribute("slot","menu"),t.setAttribute("role","menuitem")};var D=Object.defineProperty,r=(t,e,s,l)=>{for(var i=void 0,a=t.length-1,m;a>=0;a--)(m=t[a])&&(i=m(e,s,i)||i);return i&&D(e,s,i),i};class o extends _{constructor(){super(...arguments),this.localize=new M(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[P,w]}static{this.dependencies={"syn-dropdown":z,"syn-icon":N,"syn-menu":O,"syn-nav-item":C}}getSlottedNavItems(){const e=I(g(this.defaultSlot)),s=I(g(this.menuSlot));return e.concat(s)}cacheItemPositions(e){const{left:s}=this.horizontalNav.getBoundingClientRect();e.forEach(l=>{l.removeAttribute("slot");const{right:i}=l.getBoundingClientRect();l.dataset.right=(i-s).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const e=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(e);const{width:s}=this.horizontalNav.getBoundingClientRect(),l=this.priorityMenu.classList.contains("priority-menu--hidden")?0:this.priorityMenu.clientWidth,i=s-l;let a;const m=e.at(-1),d=e.map(n=>{const u=n===m?s:i,v=!!(a||parseFloat(n.dataset.right)>u);return v&&!a&&(a=parseFloat(n.dataset.right)),{isHidden:v,item:n}}),p=d.filter(({isHidden:n})=>!n).length,y=p===1;d.forEach(({item:n,isHidden:u})=>{u||y?k(n):R(n)}),this.hasItemsInDropdown=p!==e.length,this.amountOfVisibleItems=y?0:p}renderPriorityMenu(){return f`
      <syn-dropdown
        class=${b({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
        part="priority-menu"
        placement="bottom-end"
      >
        <syn-nav-item class="priority-menu__nav-item" slot="trigger" horizontal part="priority-menu-nav-item">
          <syn-icon 
            class="priority-menu__icon"
            label="More"
            library="system"
            name="more"
            part="priority-menu-icon"
            slot="prefix"
          >
          </syn-icon>
          <span
            class=${b({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const e=this.getSlottedNavItems();e.length!==this.amountOfNavItems&&(this.cacheItemPositions(e),this.handlePriorityMenu(),this.amountOfNavItems=e.length)}firstUpdated(){this.getSlottedNavItems().forEach(e=>{e.dataset.originalRole=e.getAttribute("role")??""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return f`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}}r([c("slot:not([name])")],o.prototype,"defaultSlot");r([c("slot[name=menu]")],o.prototype,"menuSlot");r([c(".horizontal-nav")],o.prototype,"horizontalNav");r([c(".priority-menu")],o.prototype,"priorityMenu");r([h()],o.prototype,"itemPositionsCached");r([h()],o.prototype,"amountOfNavItems");r([h()],o.prototype,"amountOfVisibleItems");r([h()],o.prototype,"hasItemsInDropdown");o.define("syn-prio-nav");
