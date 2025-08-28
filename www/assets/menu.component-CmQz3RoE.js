import{h,x as m}from"./iframe-iE3EDw75.js";import{a as u}from"./icon.component-Dh84bkzH.js";import{a as k}from"./query-DAIS6qJ0.js";import{e as p}from"./class-map-BPy2K2Ee.js";import{S as y,c as g}from"./synergy-element-D1lOSmgF.js";const f=h`
	/* stylelint-disable */
  :host {
    display: block;
    position: relative;
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding: var(--syn-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }
`,b=h`
  :host {
    border-radius: 0;
  }

  /*
   * #368: Hide the checkmarks for menu items
   * when no syn-menu-item[checkbox] or loading is present
   */
  .menu--no-checkmarks::slotted(syn-menu-item) {
    --display-checkmark: none;
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  ::slotted(syn-menu-label:first-of-type) {
    --display-divider: none;
  }

  ::slotted(syn-divider) {
    /* #369: Slotted syn-dividers should use a lighter color so they do not crash with the border visually */
    --color: var(--syn-color-neutral-200);
  }
`;var C=Object.defineProperty,c=(i,e,t,r)=>{for(var s=void 0,n=i.length-1,a;n>=0;n--)(a=i[n])&&(s=a(e,t,s)||s);return s&&C(e,t,s),s};class d extends y{constructor(){super(...arguments),this.hasMenuItemsWithCheckmarks=!1,this.updateCheckMarksByChildPropChange=e=>{e.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}static{this.styles=[g,f,b]}handleUpdateCheckmarks(e){this.hasMenuItemsWithCheckmarks=e.some(t=>t.type==="checkbox"||t.loading)}disconnectedCallback(){this.removeEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath(),s=r.find(l=>t.includes(l?.getAttribute?.("role")||""));if(!s||r.find(l=>l?.getAttribute?.("role")==="menu")!==this)return;const o=s;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("syn-select",{detail:{item:o}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let s=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();this.handleUpdateCheckmarks(e),e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(e.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return m`
      <slot
        class=${p({"menu--no-checkmarks":!this.hasMenuItemsWithCheckmarks})}
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}}c([k("slot")],d.prototype,"defaultSlot");c([u()],d.prototype,"hasMenuItemsWithCheckmarks");export{d as S};
