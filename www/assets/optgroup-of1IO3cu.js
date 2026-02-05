import{e as b}from"./class-map-CVI9ScdU.js";import{q as h,u as c}from"./iframe-CvU34O_B.js";import{S as f,n as d}from"./synergy-element-B1F-Pf22.js";import{o as u}from"./query-assigned-elements-CblsR2sJ.js";import{H as g}from"./slot-9EVoRGQc.js";import{S as v}from"./divider.component-DRZaBS02.js";const y=h`
  :host {
    --display-divider: block;
  }

  .optgroup__divider {
    --spacing: var(--syn-spacing-x-small);

    display: var(--display-divider);
  }

  .optgroup__label-container {
    align-items: center;
    border: solid transparent;
    border-width: 0 var(--option-inset-border-vertical);
    box-sizing: border-box;
    color: var(--syn-input-color);
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
    padding: 0 calc(var(--option-padding) - var(--option-inset-border-vertical));
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
    color: var(--syn-option-icon-color);
    font-size: var(--syn-spacing-large);
  }

  .optgroup__options ::slotted(syn-option[hidden]) {
    display: none;
  }
`;var _=Object.defineProperty,n=(i,e,r,a)=>{for(var s=void 0,t=i.length-1,o;t>=0;t--)(o=i[t])&&(s=o(e,r,s)||s);return s&&_(e,r,s),s};const p=(i,e)=>{i.disabled?i.dataset.originallyDisabled="true":delete i.dataset.originallyDisabled,e&&(i.disabled=!0)};class l extends f{constructor(){super(...arguments),this.hasSlotController=new g(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=y}static{this.dependencies={"syn-divider":v}}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:["disabled"],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{const r=e.filter(t=>t.target===this),a=e.filter(t=>t.target.matches("syn-option")),s=r.length>0||a.length>0;s&&this.mutationObserver.disconnect(),a.length>0&&a.forEach(t=>{p(t.target,this.disabled)}),r.length>0&&r.forEach(t=>{t.type==="attributes"&&this.assignedOptions.forEach(o=>{o.disabled=this.disabled?!0:!!o.dataset?.originallyDisabled}),t.type==="childList"&&t.addedNodes.forEach(o=>{o instanceof HTMLElement&&o.matches("syn-option")&&p(o,this.disabled)})}),s&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){const{disabled:e}=this,r=this.hasSlotController.test("label"),a=this.label?!0:!!r;return c`
      <div
        class=${b({optgroup:!0,"optgroup--has-label":a,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
        role="${e?"presentation":"group"}"
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
