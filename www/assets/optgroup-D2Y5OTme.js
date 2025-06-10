import{a as h,u as b}from"./static-gmWA-8Kq.js";import{n as d}from"./property-BGzwfL48.js";import{o as u}from"./query-assigned-elements-QtOlz7Yz.js";import{S as f}from"./component.styles-Do19GEOY.js";import{H as c}from"./slot-9EVoRGQc.js";import{S as g}from"./divider.component-KO_YE4Ha.js";import{i as v}from"./directive-helpers-DGrfjhaU.js";const y=v`
  :host {
    --display-divider: block;
  }

  .optgroup__divider {
    --spacing: var(--syn-spacing-x-small);

    display: var(--display-divider);
  }

  .optgroup__label-container {
    align-items: center;
    box-sizing: border-box;
    color: var(--syn-color-neutral-950);
    display: flex;
    gap: var(--syn-spacing-small);
    min-height: var(--option-min-height, var(--syn-input-height-medium));
  }

  /**
   * Only show the label container when there is a label at all
   */
  .optgroup--has-prefix .optgroup__label-container,
  .optgroup--has-label .optgroup__label-container,
  .optgroup--has-suffix .optgroup__label-container {
    padding: var(--option-padding, var(--syn-spacing-small) var(--syn-spacing-medium));
  }

  /**
   * Format main label.
   * Make sure this works for props and slotted content
   */
  .optgroup__label-content,
  .optgroup__label::slotted(*) {
    flex: 1;
    font-family: var(--syn-font-sans);
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    font-weight: var(--syn-font-weight-semibold);
    line-height: var(--syn-line-height-normal);
  }

  /* Disabled Label */
  .optgroup--is-disabled .optgroup__label-container {
    opacity: var(--syn-input-disabled-opacity);
  }

  .optgroup__prefix,
  .optgroup__suffix {
    color: var(--syn-color-neutral-800);
    font-size: var(--syn-spacing-large);
  }

  .optgroup__options ::slotted(syn-option[hidden]) {
    display: none;
  }
`;var m=Object.defineProperty,n=(i,t,a,r)=>{for(var s=void 0,e=i.length-1,o;e>=0;e--)(o=i[e])&&(s=o(t,a,s)||s);return s&&m(t,a,s),s};const p=(i,t)=>{i.disabled?i.dataset.originallyDisabled="true":delete i.dataset.originallyDisabled,t&&(i.disabled=!0)};class l extends f{constructor(){super(...arguments),this.hasSlotController=new c(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=y}static{this.dependencies={"syn-divider":g}}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:["disabled"],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{const a=t.filter(e=>e.target===this),r=t.filter(e=>e.target.matches("syn-option")),s=a.length>0||r.length>0;s&&this.mutationObserver.disconnect(),r.length>0&&r.forEach(e=>{p(e.target,this.disabled)}),a.length>0&&a.forEach(e=>{e.type==="attributes"&&this.assignedOptions.forEach(o=>{o.disabled=this.disabled?!0:!!o.dataset?.originallyDisabled}),e.type==="childList"&&e.addedNodes.forEach(o=>{o instanceof HTMLElement&&o.matches("syn-option")&&p(o,this.disabled)})}),s&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){const{disabled:t}=this,a=this.hasSlotController.test("label"),r=this.label?!0:!!a;return b`
      <div
        class=${h({optgroup:!0,"optgroup--has-label":r,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
        role="${t?"presentation":"group"}"
        part="base"
      >
        <syn-divider class="optgroup__divider" part="divider"></syn-divider>
        <div class="optgroup__label-container" part="label-container">
          <slot name="prefix" part="prefix" class="optgroup__prefix"></slot>
          <slot name="label" part="label" class="optgroup__label">
            <span class="optgroup__label-content">
              ${this.label}
            </span>
          </slot>
          <slot name="suffix" part="suffix" class="optgroup__suffix"></slot>
        </div>
        <div class="optgroup__options" role="group" part="options">
          <slot></slot>
        </div>
      </div>
    `}}n([u({selector:"syn-option"})],l.prototype,"assignedOptions");n([d({reflect:!0,type:Boolean})],l.prototype,"disabled");n([d()],l.prototype,"label");l.define("syn-optgroup");
