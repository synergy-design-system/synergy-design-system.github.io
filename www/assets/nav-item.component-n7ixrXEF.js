import{i as e}from"./preload-helper-xPQekRTU.js";import{h as t,t as n}from"./lit-BVDl_-fF.js";import{M as r,O as i,k as a}from"./iframe-BCoUYk3Z.js";import{n as o,t as s}from"./class-map-DgYlm_fS.js";import{r as c,t as l}from"./slot-DgcqpP0-.js";import{r as u,t as d}from"./if-defined-BsCyJVG6.js";import{_ as f,a as p,f as m,i as h,n as g,o as _,r as v,s as y,t as b,y as x}from"./synergy-element-BtCydRhm.js";import{n as S,t as C}from"./watch-I6gMK-uE.js";import{n as w,t as T}from"./icon.component-B9Dbh5an.js";import{n as E,t as D}from"./divider.component-CKfBxPIB.js";var O,k=e((()=>{n(),O=t`
  /**
   * Default alignment is inline block when we are in horizontal mode
   */
  :host {
    /**
     * The indentation property defines the current "level" the component is on
     * It may be set per hand, but is normally set during the render phase
     * of a <syn-nav-item /> for slotted children
     */
    --indentation: 0;

    /**
     * Defines the amount of pixels each indentation level will shift the content to the left
     */
    --indentation-stepping: var(--syn-spacing-x-large);

    /**
     * Display property of the children. Defaults to "contents"
     */
    --display-children: contents;

    display: block;
  }

  /**
   * Switch alignment to inline-block when we are in horizontal mode
   */
  :host([horizontal]) {
    display: inline-block;
  }

  /**
   * Core nav item wrapper
   */
  .nav-item {
    align-items: center;
    background: transparent;
    border: none;
    box-shadow: inset 0 -1px 0 0 transparent;
    box-sizing: border-box;
    color: var(--syn-typography-color-text);
    cursor: pointer;
    display: inline-flex;
    font: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: background-color var(--syn-transition-fast) ease-in-out, box-shadow var(--syn-transition-fast) ease-in-out;
    width: 100%;
    z-index: 0;
  }

  .nav-item:focus-visible {
    outline: none;
  }

  .nav-item:focus-visible::after {
    content: '';
    display: block;
    height: 100%;
    left: calc(var(--syn-spacing-x-small) * -1);
    outline: var(--syn-focus-ring);
    outline-offset: -2px;
    position: absolute;
    top: 0;
    width: calc(100% + 2 * var(--syn-spacing-x-small));
  }

  .nav-item--vertical:focus-visible::after {
    left: 0;
    width: 100%;
  }

  /**
   * Horizontal nav items use narrower paddings
   */
  .nav-item--horizontal {
    padding: var(--syn-spacing-small) 0;
  }

  /**
   * Nav Items acting as accordion use a slightly narrower padding on the right side
   */
  .nav-item.nav-item-is-accordion {
    padding-right: var(--syn-spacing-medium);
  }

  .nav-item--disabled {
    cursor: not-allowed;
  }

  .nav-item--current {
    font-weight: var(--syn-font-weight-bold);
  }

  /**
   * Basic set up for the nav item prefix.
   */
  .nav-item:not(.nav-item--disabled)::before {
    background: var(--syn-interactive-background-color-hover);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /**
   * Hover effect for the nav item.
   * We use opacity to make sure the border-bottom is visible if used in the prio-nav in header
   */
  .nav-item:not(.nav-item--disabled):hover::before {
    opacity: 1;
  }

  /**
   * #443: Add support for active state
   */
  .nav-item:not(.nav-item--disabled):active::before {
    background: var(--syn-interactive-background-color-active);
    opacity: 1;
  }

  /**
   * When using horizontal, the background should extend the element
   * on the left and right so the animation for the indicator can be seen
   */
  .nav-item--horizontal:not(.nav-item--disabled)::before {
    left: calc(var(--syn-spacing-x-small) * -1);
    width: calc(100% + 2 * var(--syn-spacing-x-small));
  }

  /**
   * The content wrapper is needed to get the disabled state right
   * and also sets the left padding, according to the given indentation level.
   *
   * Normally, we would just use opacity directly on the button.
   * However, when using the divider prop, this leads to problems
   * as the divider itself will also get opaque.
   */
  .nav-item__content {
    align-items: center;
    display: flex;
    padding-inline-start: calc(var(--indentation) * var(--indentation-stepping));
    width: 100%;
  }

  .nav-item--disabled .nav-item__content {
    opacity: var(--syn-opacity-50);
  }

  /**
   * Slotted icons should use a default font size of large
   */
  .nav-item--has-prefix ::slotted(syn-icon),
  .nav-item--has-suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /**
   * The chevron indicates the use as a <details /> element OR a link
   */
  .nav-item__chevron {
    color: var(--syn-interactive-quiet-color);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-x-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .nav-item__chevron-open {
    rotate: -180deg;
  }

  /**
   * Items that have the chevron attribute set and are NOT accordions should always show a chevron pointing to the right
   */
  .nav-item:not(.nav-item-is-accordion) .nav-item__chevron {
    rotate: -90deg;
  }

  /**
   * Make the primary content container fill all available space
   */
  .nav-item__content-container {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /**
   * Horizontal navigation items should not break words
   */
  .nav-item--horizontal .nav-item__content-container {
    font-weight: var(--syn-font-weight-bold);
    white-space: nowrap;
  }

  /**
   * Show prefix only
   */
  /* stylelint-disable no-descending-specificity */
  .nav-item--show-prefix-only .nav-item__content-container,
  .nav-item--show-prefix-only .nav-item__suffix,
  .nav-item--show-prefix-only .nav-item__chevron {
    height: var(--syn-spacing-large);
  }
  /* stylelint-enable no-descending-specificity */

  /**
   * Adjust the paddings for the label, depending if there is a pre- and/or suffix available.
   * But only if the there is a main content or additionally a prefix / suffix
   */
  .nav-item--has-prefix.nav-item--has-content .nav-item__content-container,
  .nav-item--has-prefix.nav-item--has-suffix .nav-item__content-container {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .nav-item--has-suffix.nav-item--has-content .nav-item__content-container,
  .nav-item--has-suffix.nav-item--has-prefix .nav-item__content-container {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Multi line content
   */
  /* stylelint-disable no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix,
  .nav-item--multi-line .nav-item__prefix,
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }
  /* stylelint-enable no-descending-specificity */

  /* stylelint-disable no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix::slotted(syn-icon),
  :not(.nav-item--show-prefix-only).nav-item--multi-line .nav-item__prefix::slotted(syn-icon),
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }
  /* stylelint-enable no-descending-specificity */

  /**
   * The current indicator tells the user that the nav-item is the active one
   */
  .current-indicator {
    background: transparent;
    border: none;
    margin: 0;
    position: absolute;
    transition: var(--syn-transition-medium) top ease,
      var(--syn-transition-medium) right ease,
      var(--syn-transition-medium) bottom ease,
      var(--syn-transition-medium) left ease;
    z-index: 1;
  }

  .current-indicator--visible {
    background: var(--syn-interactive-emphasis-color);
  }

  .nav-item--horizontal .current-indicator {
    bottom: 0;
    height: var(--syn-spacing-2x-small);
    left: 0;
    right: 0;
  }

  .nav-item--horizontal:hover .current-indicator--visible,
  .nav-item--horizontal:focus-visible .current-indicator--visible {
    left: calc(var(--syn-spacing-x-small) * -1);
    right: calc(var(--syn-spacing-x-small) * -1);
  }

  .nav-item--vertical .current-indicator {
    bottom: var(--syn-spacing-x-small);
    left: 0;
    top: var(--syn-spacing-x-small);
    width: var(--syn-spacing-2x-small);
  }

  .nav-item--vertical:hover .current-indicator--visible,
  .nav-item--vertical:focus-visible .current-indicator--visible {
    bottom: 0;
    top: 0;
  }

  /**
   * Dividers are optionally displayed in horizontal nav items
   */
  .divider {
    left: var(--syn-spacing-medium);
    margin: 0;
    position: absolute;
    right: var(--syn-spacing-medium);
    top: 0;
  }

  /**
   * Make sure the divider blends into the background on hover
   * for items that are NOT disabled.
   */
  .nav-item--vertical:not(.nav-item--disabled):hover .divider {
    --color: var(--syn-interactive-background-color-hover);
  }

  /**
   * Sub menu styling
   */
  summary.nav-item {
    box-sizing: border-box;
    display: flex;
  }

  details summary::-webkit-details-marker {
    visibility: hidden;
  }

  .children {
    display: var(--display-children)
  }
`})),A,j=e((()=>{s(),i(),y(),d(),E(),w(),c(),C(),g(),_(),k(),h(),A=class extends b{constructor(...e){super(...e),this.hasSlotController=new l(this,`[default]`,`children`,`prefix`,`suffix`),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.rel=`noreferrer noopener`,this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}static{this.styles=[p,O]}static{this.dependencies={"syn-divider":D,"syn-icon":T}}isButton(){return!this.href&&!this.hasSlotController.test(`children`)}isLink(){return!!this.href&&!this.hasSlotController.test(`children`)}isAccordion(){return this.hasSlotController.test(`children`)}getNavItemChildren(e){return Array.from(e?.assignedElements({flatten:!0})||[]).map(e=>e.tagName.toLowerCase()===`syn-nav-item`?e:Array.from(e.querySelectorAll(`:scope > syn-nav-item`))).flat()}getAllNestedNavItems(e){let t=this.getNavItemChildren(e),n=t.map(e=>e.getAllNestedNavItems(e.childrenSlot)).flat();return t.concat(n)}handleCurrentMarkedChild(){let e=this.closest(`syn-side-nav`);(!this.open||e?.variant===`rail`)&&(this.currentMarkedChild=this.getAllNestedNavItems(this.childrenSlot).some(e=>e.current))}handleClickButton(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}handleClickSummary(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit(`syn-hide`,{cancelable:!0})}showDetails(){this.open=!0,this.emit(`syn-show`,{cancelable:!0})}handleSlotChange(){let e=getComputedStyle(this);if(e.length===0){setTimeout(()=>{this.handleSlotChange()});return}this.handleCurrentMarkedChild();let t=e.getPropertyValue(`--indentation`),n=Math.min(parseInt(t,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(e=>{e.style.setProperty(`--indentation`,n.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleWidth(e){e.forEach(e=>{requestAnimationFrame(()=>{if(e.contentRect.width<100){let e=this.hasSlotController.test(`prefix`);this.showPrefixOnly=e}else this.showPrefixOnly=!1;e.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})})}handleHorizontalChange(){this.horizontal?this.resizeObserver.disconnect():this.resizeObserver.observe(this)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleWidth(e)),this.horizontal||this.resizeObserver.observe(this)}firstUpdated(e){super.firstUpdated(e),this.mutationObserver=new MutationObserver(()=>{this.childrenSlot&&this.handleCurrentMarkedChild()}),this.mutationObserver.observe(this,{attributeFilter:[`current`,`open`],childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(e){this.control.focus(e)}render(){let e=this.isButton(),t=this.isLink(),n=this.isAccordion(),i=this.closest(`syn-side-nav`),s=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&i?.variant===`rail`&&!i?.open,c=a`button`;n?c=a`summary`:t&&(c=a`a`);let l=(this.chevron||n)&&!this.horizontal,d;n?d=this.handleClickSummary:e&&(d=this.handleClickButton);let f=r`
      <${c}
        aria-controls=${u(n?`navigation-item-details`:void 0)}
        aria-current=${u(this.current?`page`:void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${o({"nav-item":!0,"nav-item--current":this.current||s,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test(`[default]`),"nav-item--has-prefix":this.hasSlotController.test(`prefix`),"nav-item--has-suffix":this.hasSlotController.test(`suffix`),"nav-item--horizontal":this.horizontal,"nav-item--is-link":t,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":n})}
        @click=${d}
        ?disabled=${u(t?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${u(t?this.href:void 0)}
        part="base"
        role=${t?`link`:`button`}
        rel=${u(t?this.rel:void 0)}
        tabindex=${this.disabled?`-1`:`0`}
        target=${u(t?this.target:void 0)}
      >

        ${this.divider&&!this.horizontal?r`<syn-divider class="divider" part="divider"></syn-divider>`:``}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${l?r`
            <syn-icon
              class=${o({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:``}

          <div
            class=${o({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||s})}
            part="current-indicator"
          >
          </div>
        </div>

      </${c}>
    `;return n?r`
      <details
        id="navigation-item-details"
        ?open=${this.open}
        part="details"
      >
        ${f}
        <slot
          class="children"
          name="children"
          part="children"
          @slotchange=${this.handleSlotChange}
        ></slot>
      </details>
    `:f}},v([f()],A.prototype,`hasFocus`,void 0),v([f()],A.prototype,`showPrefixOnly`,void 0),v([f()],A.prototype,`currentMarkedChild`,void 0),v([f()],A.prototype,`isMultiLine`,void 0),v([m(`slot[name="children"]`)],A.prototype,`childrenSlot`,void 0),v([m(`.nav-item`)],A.prototype,`control`,void 0),v([x({reflect:!0,type:String})],A.prototype,`href`,void 0),v([x()],A.prototype,`target`,void 0),v([x()],A.prototype,`rel`,void 0),v([x({reflect:!0,type:Boolean})],A.prototype,`current`,void 0),v([x({reflect:!0,type:Boolean})],A.prototype,`disabled`,void 0),v([x({reflect:!0,type:Boolean})],A.prototype,`horizontal`,void 0),v([x({reflect:!0,type:Boolean})],A.prototype,`chevron`,void 0),v([x({reflect:!0,type:Boolean})],A.prototype,`open`,void 0),v([x({reflect:!0,type:Boolean})],A.prototype,`divider`,void 0),v([S(`horizontal`,{waitUntilFirstUpdate:!0})],A.prototype,`handleHorizontalChange`,null)}));export{j as n,A as t};