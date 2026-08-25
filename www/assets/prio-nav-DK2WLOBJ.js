import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,t as n}from"./lit-DgWh_IaA.js";import{f as r,g as i}from"./library-DDo5iplL.js";import{a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-BeBxrfuL.js";import{t as f}from"./query-DOHNhzf6.js";import{n as p,t as m}from"./class-map-HZwHklGF.js";import{n as h,t as g}from"./localize-Du3bqz3O.js";import{n as _,t as v}from"./icon.component-DQFx-sk-.js";import{n as y,t as b}from"./menu.component-B377n_eq.js";import{n as x,t as S}from"./dropdown.component-C19WXnnm.js";import{n as C,t as w}from"./nav-item.component-CK8hT_X6.js";var T;function E(){return(E=e((()=>{n(),T=t`
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
`})))()}var D,O,k,A,j;function M(){return(M=e((()=>{D=e=>Array.from(e.assignedElements({flatten:!0})),O=e=>e.tagName.toLocaleLowerCase()===`syn-nav-item`||(e.getAttribute(`role`)??``)===`menuitem`,k=e=>e.filter(O),A=e=>{e.setAttribute(`horizontal`,`true`),e.removeAttribute(`slot`),e.removeAttribute(`tabindex`),e.dataset.originalRole?e.setAttribute(`role`,e.dataset.originalRole):e.removeAttribute(`role`)},j=e=>{e.removeAttribute(`horizontal`),e.setAttribute(`slot`,`menu`),e.setAttribute(`role`,`menuitem`)}})))()}var N;function P(){return(P=e((()=>{m(),r(),u(),c(),s(),E(),x(),_(),y(),C(),g(),M(),N=class extends d{constructor(...e){super(...e),this.localize=new h(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[a,T]}static{this.dependencies={"syn-dropdown":S,"syn-icon":v,"syn-menu":b,"syn-nav-item":w}}getSlottedNavItems(){let e=k(D(this.defaultSlot)),t=k(D(this.menuSlot));return e.concat(t)}cacheItemPositions(e){let{left:t}=this.horizontalNav.getBoundingClientRect();e.forEach(e=>{e.removeAttribute(`slot`);let{right:n}=e.getBoundingClientRect();e.dataset.right=(n-t).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){let e=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(e);let{width:t}=this.horizontalNav.getBoundingClientRect(),n=t-(this.priorityMenu.classList.contains(`priority-menu--hidden`)?0:this.priorityMenu.clientWidth),r,i=e.at(-1),a=e.map(e=>{let a=e===i?t:n,o=!!(r||parseFloat(e.dataset.right)>a);return o&&!r&&(r=parseFloat(e.dataset.right)),{isHidden:o,item:e}}),o=a.filter(({isHidden:e})=>!e).length,s=o===1&&e.length>1;a.forEach(({item:e,isHidden:t})=>{t||s?j(e):A(e)}),this.hasItemsInDropdown=o!==e.length,this.amountOfVisibleItems=s?0:o}renderPriorityMenu(){return i`
      <syn-dropdown
        class=${p({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${p({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term(`menu`)}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){let e=this.getSlottedNavItems();e.length!==this.amountOfNavItems&&(this.cacheItemPositions(e),this.handlePriorityMenu(),this.amountOfNavItems=e.length)}firstUpdated(){this.getSlottedNavItems().forEach(e=>{e.dataset.originalRole=e.getAttribute(`role`)??``})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return i`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}},l([f(`slot:not([name])`)],N.prototype,`defaultSlot`,void 0),l([f(`slot[name=menu]`)],N.prototype,`menuSlot`,void 0),l([f(`.horizontal-nav`)],N.prototype,`horizontalNav`,void 0),l([f(`.priority-menu`)],N.prototype,`priorityMenu`,void 0),l([o()],N.prototype,`itemPositionsCached`,void 0),l([o()],N.prototype,`amountOfNavItems`,void 0),l([o()],N.prototype,`amountOfVisibleItems`,void 0),l([o()],N.prototype,`hasItemsInDropdown`,void 0)})))()}function F(){return(F=e((()=>{P(),N.define(`syn-prio-nav`)})))()}export{F as t};