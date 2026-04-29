import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-B3D1qQau.js";import{n as i,t as a}from"./class-map-D3No2an5.js";import{a as o,f as s,i as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./synergy-element-Doexde1X.js";var h,g=e((()=>{t(),h=r`
  :host {
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    display: block;
    overflow: auto;
    overscroll-behavior: none;
    padding: var(--syn-spacing-x-small) 0;
    position: relative;
  }

  ::slotted(syn-divider) {
    /* #369: Slotted syn-dividers should use a lighter color so they do not crash with the border visually */
    --color: var(--syn-panel-border-color);
    --spacing: var(--syn-spacing-x-small);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  ::slotted(syn-menu-label:first-of-type) {
    --display-divider: none;
  }

  /*
   * #368: Hide the checkmarks for menu items
   * when no syn-menu-item[checkbox] or loading is present
   */
  .menu--no-checkmarks::slotted(syn-menu-item) {
    --display-checkmark: none;
  }
`})),_,v=e((()=>{t(),f(),a(),u(),l(),g(),c(),_=class extends p{constructor(...e){super(...e),this.hasMenuItemsWithCheckmarks=!1,this.updateCheckMarksByChildPropChange=e=>{e.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}static{this.styles=[o,h]}handleUpdateCheckmarks(e){this.hasMenuItemsWithCheckmarks=e.some(e=>e.type===`checkbox`||e.loading)}disconnectedCallback(){this.removeEventListener(`syn-attributes-changed`,this.updateCheckMarksByChildPropChange)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`),this.addEventListener(`syn-attributes-changed`,this.updateCheckMarksByChildPropChange)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>t.includes(e?.getAttribute?.(`role`)||``));if(!r||n.find(e=>e?.getAttribute?.(`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`syn-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();this.handleUpdateCheckmarks(e),e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`syn-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return n`
      <slot
        class=${i({"menu--no-checkmarks":!this.hasMenuItemsWithCheckmarks})}
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}},d([m(`slot`)],_.prototype,`defaultSlot`,void 0),d([s()],_.prototype,`hasMenuItemsWithCheckmarks`,void 0)}));export{v as n,_ as t};