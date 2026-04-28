import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,Bt as n,D as r,w as i}from"./iframe-CFxyVgYz.js";import{n as a,t as o}from"./class-map-B2P1DYC9.js";import{n as s,t as c}from"./localize-DnZL8qNz.js";import{a as l,f as u,i as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./synergy-element-DOjsnQEs.js";import{n as v,t as y}from"./icon.component-DSYib2bb.js";import{n as b,t as x}from"./menu.component-BCK8VZLh.js";import{n as S,t as C}from"./dropdown.component-CpH3-fZC.js";import{n as w,t as T}from"./nav-item.component-DMzZVI-Y.js";var E,D=e((()=>{t(),E=n`
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
`})),O,k,A,j,M,N=e((()=>{O=e=>Array.from(e.assignedElements({flatten:!0})),k=e=>e.tagName.toLocaleLowerCase()===`syn-nav-item`||(e.getAttribute(`role`)??``)===`menuitem`,A=e=>e.filter(k),j=e=>{e.setAttribute(`horizontal`,`true`),e.removeAttribute(`slot`),e.removeAttribute(`tabindex`),e.dataset.originalRole?e.setAttribute(`role`,e.dataset.originalRole):e.removeAttribute(`role`)},M=e=>{e.removeAttribute(`horizontal`),e.setAttribute(`slot`,`menu`),e.setAttribute(`role`,`menuitem`)}})),P,F=e((()=>{o(),i(),h(),p(),f(),D(),S(),v(),b(),w(),c(),N(),d(),P=class extends g{constructor(...e){super(...e),this.localize=new s(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[l,E]}static{this.dependencies={"syn-dropdown":C,"syn-icon":y,"syn-menu":x,"syn-nav-item":T}}getSlottedNavItems(){let e=A(O(this.defaultSlot)),t=A(O(this.menuSlot));return e.concat(t)}cacheItemPositions(e){let{left:t}=this.horizontalNav.getBoundingClientRect();e.forEach(e=>{e.removeAttribute(`slot`);let{right:n}=e.getBoundingClientRect();e.dataset.right=(n-t).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){let e=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(e);let{width:t}=this.horizontalNav.getBoundingClientRect(),n=t-(this.priorityMenu.classList.contains(`priority-menu--hidden`)?0:this.priorityMenu.clientWidth),r,i=e.at(-1),a=e.map(e=>{let a=e===i?t:n,o=!!(r||parseFloat(e.dataset.right)>a);return o&&!r&&(r=parseFloat(e.dataset.right)),{isHidden:o,item:e}}),o=a.filter(({isHidden:e})=>!e).length,s=o===1&&e.length>1;a.forEach(({item:e,isHidden:t})=>{t||s?M(e):j(e)}),this.hasItemsInDropdown=o!==e.length,this.amountOfVisibleItems=s?0:o}renderPriorityMenu(){return r`
      <syn-dropdown
        class=${a({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${a({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term(`menu`)}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){let e=this.getSlottedNavItems();e.length!==this.amountOfNavItems&&(this.cacheItemPositions(e),this.handlePriorityMenu(),this.amountOfNavItems=e.length)}firstUpdated(){this.getSlottedNavItems().forEach(e=>{e.dataset.originalRole=e.getAttribute(`role`)??``})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return r`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}},m([_(`slot:not([name])`)],P.prototype,`defaultSlot`,void 0),m([_(`slot[name=menu]`)],P.prototype,`menuSlot`,void 0),m([_(`.horizontal-nav`)],P.prototype,`horizontalNav`,void 0),m([_(`.priority-menu`)],P.prototype,`priorityMenu`,void 0),m([u()],P.prototype,`itemPositionsCached`,void 0),m([u()],P.prototype,`amountOfNavItems`,void 0),m([u()],P.prototype,`amountOfVisibleItems`,void 0),m([u()],P.prototype,`hasItemsInDropdown`,void 0)})),I=e((()=>{F(),F(),P.define(`syn-prio-nav`)}));export{I as t};