import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-BFEAJlBN.js";import{r as m,t as h}from"./if-defined-gcdQCgEY.js";import{n as g,t as _}from"./class-map-BntiyWRh.js";import{r as v,t as y}from"./slot-Cl6UAYP5.js";import{n as b,t as x}from"./localize-BNnpMTZD.js";import{n as S,t as C}from"./watch-RA3ULoLi.js";import{n as w,t as T}from"./icon.component-03RqJYOT.js";var E,D=e((()=>{r(),E=n`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-600);
    line-height: var(--syn-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--syn-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--syn-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--syn-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--syn-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--syn-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--syn-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`})),O,k=e((()=>{r(),O=n`
  .breadcrumb-item {
    color: var(--syn-breadcrumb-color);
    font-size: var(--syn-font-size-x-small);
    font-weight: var(--syn-font-weight-semibold);
  }

  /**
   * Make sure to remove the border radius.
   * Without this, focus will be rounded
   */
  .breadcrumb-item__label {
    border-radius: var(--syn-border-radius-none);
  }

  :host(:not(:last-of-type)) .breadcrumb-item {
    font-weight: var(--syn-font-weight-normal);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--syn-typography-color-text);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--syn-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--syn-color-primary-950);
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    margin-inline-end: var(--syn-spacing-2x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  /**
   * Adjust color and font size to match Synergy's typography.
   */
  .breadcrumb-item--has-prefix .breadcrumb-item__prefix,
  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    color: var(--syn-typography-color-text);
    font-size: var(--syn-spacing-medium);
  }

  /**
   * Make sure the color of the last item's prefix and suffix matches the text.
   */
  :host(:last-of-type) .breadcrumb-item--has-prefix .breadcrumb-item__prefix,
  :host(:last-of-type) .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    color: inherit;
  }

  .breadcrumb-item__separator {
    font-size: var(--syn-spacing-medium);
    margin: 0 var(--syn-spacing-x-small) 0 var(--syn-spacing-2x-small);
  }

  /**
   * Make sure the direction of the chevron matches the direction of the text.
   */
  .breadcrumb-item__separator ::slotted(syn-icon.ltr) {
    rotate: -90deg;
  }

  .breadcrumb-item__separator ::slotted(syn-icon.rtl) {
    rotate: 90deg;
  }

  .breadcrumb-item__label--drop-down {
    display: flex;
  }
`})),A,j=e((()=>{_(),v(),r(),h(),d(),C(),l(),c(),D(),k(),s(),A=class extends f{constructor(...e){super(...e),this.hasSlotController=new y(this,`prefix`,`suffix`),this.renderType=`button`,this.rel=`noreferrer noopener`}static{this.styles=[a,E,O]}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`syn-dropdown`).length>0;if(this.href){this.renderType=`link`;return}if(e){this.renderType=`dropdown`;return}this.renderType=`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return t`
      <div
        part="base"
        class=${g({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test(`prefix`),"breadcrumb-item--has-suffix":this.hasSlotController.test(`suffix`)})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType===`link`?t`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${m(this.target?this.target:void 0)}"
                rel=${m(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:``}
        ${this.renderType===`button`?t`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:``}
        ${this.renderType===`dropdown`?t`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:``}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}},u([o(`slot:not([name])`)],A.prototype,`defaultSlot`,void 0),u([i()],A.prototype,`renderType`,void 0),u([p()],A.prototype,`href`,void 0),u([p()],A.prototype,`target`,void 0),u([p()],A.prototype,`rel`,void 0),u([S(`href`,{waitUntilFirstUpdate:!0})],A.prototype,`hrefChanged`,null)})),M=e((()=>{j(),j(),A.define(`syn-breadcrumb-item`)})),N,P=e((()=>{r(),N=n`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`})),F,I=e((()=>{r(),F=n`
  /* Write custom CSS here */
`})),L,R=e((()=>{r(),x(),d(),l(),c(),w(),P(),I(),s(),L=class extends f{constructor(...e){super(...e),this.localize=new b(this),this.separatorDir=this.localize.dir(),this.label=``}static{this.styles=[a,N,F]}static{this.dependencies={"syn-icon":T}}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`syn-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),t`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}},u([o(`slot`)],L.prototype,`defaultSlot`,void 0),u([o(`slot[name="separator"]`)],L.prototype,`separatorSlot`,void 0),u([p()],L.prototype,`label`,void 0)})),z=e((()=>{R(),R(),L.define(`syn-breadcrumb`)}));export{M as n,z as t};