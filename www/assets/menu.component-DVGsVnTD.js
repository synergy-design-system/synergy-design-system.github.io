import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./synergy-element-Ca3MURqZ.js";var p,m=e((()=>{r(),p=n`
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
`})),h,g=e((()=>{r(),d(),l(),c(),m(),s(),h=class extends f{constructor(...e){super(...e),this.hasMenuItemsWithCheckmarks=!1,this.checkmarkStyledItems=new Set,this.updateCheckMarksByChildPropChange=e=>{e.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}static{this.styles=[a,p]}handleUpdateCheckmarks(e){this.hasMenuItemsWithCheckmarks=e.some(e=>e.type===`checkbox`||e.loading),this.syncCheckmarkVisibility(e)}syncCheckmarkVisibility(e){if(this.checkmarkStyledItems.forEach(t=>{e.includes(t)||(t.style.removeProperty(`--display-checkmark`),this.checkmarkStyledItems.delete(t))}),this.hasMenuItemsWithCheckmarks){e.forEach(e=>{e.style.removeProperty(`--display-checkmark`),this.checkmarkStyledItems.delete(e)});return}e.forEach(e=>{e.style.setProperty(`--display-checkmark`,`none`),this.checkmarkStyledItems.add(e)})}disconnectedCallback(){this.removeEventListener(`syn-attributes-changed`,this.updateCheckMarksByChildPropChange),this.checkmarkStyledItems.forEach(e=>e.style.removeProperty(`--display-checkmark`)),this.checkmarkStyledItems.clear()}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`),this.addEventListener(`syn-attributes-changed`,this.updateCheckMarksByChildPropChange)}getMenuItemFromEvent(e){let t=e.composedPath(),n=t.find(e=>e instanceof HTMLElement&&this.isMenuItem(e));if(!(!n||!(n instanceof HTMLElement))&&t.find(e=>e instanceof Element&&e.getAttribute(`role`)===`menu`)===this)return n}handleClick(e){let t=this.getMenuItemFromEvent(e);t&&(t.type===`checkbox`&&(t.checked=!t.checked),this.emit(`syn-select`,{detail:{item:t}}))}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=this.getMenuItemFromEvent(e);t&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();this.handleUpdateCheckmarks(e),e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`syn-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getMenuItemsFromElement(e){return e.inert?[]:this.isMenuItem(e)?[e]:e.tagName.toLowerCase()===`syn-menu`?[]:[...e.children].flatMap(e=>this.getMenuItemsFromElement(e))}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].flatMap(e=>this.getMenuItemsFromElement(e))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return t`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}},u([o(`slot`)],h.prototype,`defaultSlot`,void 0),u([i()],h.prototype,`hasMenuItemsWithCheckmarks`,void 0)}));export{g as n,h as t};