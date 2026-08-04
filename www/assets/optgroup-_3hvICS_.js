import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,t as n}from"./lit-DgWh_IaA.js";import{f as r,g as i}from"./library-DDo5iplL.js";import{d as a,n as o,r as s,s as c,t as l}from"./synergy-element-C9GUR4B8.js";import{n as u}from"./query-assigned-elements-CWXdehfi.js";import{n as d,t as f}from"./class-map-HZwHklGF.js";import{r as p,t as m}from"./slot-CUH75lUH.js";import{n as h,t as g}from"./divider.component-CyQwlLwd.js";var _;function v(){return(v=e((()=>{n(),_=t`
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
`})))()}var y,b;function x(){return(x=e((()=>{f(),r(),c(),o(),p(),h(),v(),y=(e,t)=>{e.disabled?e.dataset.originallyDisabled=`true`:delete e.dataset.originallyDisabled,t&&(e.disabled=!0)},b=class extends l{constructor(...e){super(...e),this.hasSlotController=new m(this,`[default]`,`prefix`,`suffix`,`label`),this.disabled=!1,this.label=``}static{this.styles=_}static{this.dependencies={"syn-divider":g}}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:[`disabled`],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(e=>e.target===this),n=e.filter(e=>e.target.matches(`syn-option`)),r=t.length>0||n.length>0;r&&this.mutationObserver.disconnect(),n.length>0&&n.forEach(e=>{y(e.target,this.disabled)}),t.length>0&&t.forEach(e=>{e.type===`attributes`&&this.assignedOptions.forEach(e=>{e.disabled=this.disabled?!0:!!e.dataset?.originallyDisabled}),e.type===`childList`&&e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.matches(`syn-option`)&&y(e,this.disabled)})}),r&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){let{disabled:e}=this,t=this.hasSlotController.test(`label`),n=this.label?!0:!!t;return i`
      <div
        class=${d({optgroup:!0,"optgroup--has-label":n,"optgroup--has-prefix":this.hasSlotController.test(`prefix`),"optgroup--has-suffix":this.hasSlotController.test(`suffix`),"optgroup--is-disabled":this.disabled})}
        role="${e?`presentation`:`group`}"
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
    `}},s([u({selector:`syn-option`})],b.prototype,`assignedOptions`,void 0),s([a({reflect:!0,type:Boolean})],b.prototype,`disabled`,void 0),s([a()],b.prototype,`label`,void 0)})))()}function S(){return(S=e((()=>{x(),b.define(`syn-optgroup`)})))()}export{S as t};