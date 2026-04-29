import{n as e}from"./chunk-DnJy8xQt.js";import{A as t,D as n,Nt as r,Ut as i}from"./iframe-CIeU5pXv.js";import{n as a,t as o}from"./class-map-BwLhrg01.js";import{r as s,t as c}from"./slot-uOU62xJ8.js";import{c as l,i as u,n as d,p as f,r as p,s as m,t as h}from"./synergy-element-17bSic8x.js";import{n as g,t as _}from"./divider.component-Ccd41slq.js";var v,y=e((()=>{r(),v=i`
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
`})),b,x,S=e((()=>{o(),n(),m(),d(),s(),g(),y(),u(),b=(e,t)=>{e.disabled?e.dataset.originallyDisabled=`true`:delete e.dataset.originallyDisabled,t&&(e.disabled=!0)},x=class extends h{constructor(...e){super(...e),this.hasSlotController=new c(this,`[default]`,`prefix`,`suffix`,`label`),this.disabled=!1,this.label=``}static{this.styles=v}static{this.dependencies={"syn-divider":_}}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:[`disabled`],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(e=>e.target===this),n=e.filter(e=>e.target.matches(`syn-option`)),r=t.length>0||n.length>0;r&&this.mutationObserver.disconnect(),n.length>0&&n.forEach(e=>{b(e.target,this.disabled)}),t.length>0&&t.forEach(e=>{e.type===`attributes`&&this.assignedOptions.forEach(e=>{e.disabled=this.disabled?!0:!!e.dataset?.originallyDisabled}),e.type===`childList`&&e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.matches(`syn-option`)&&b(e,this.disabled)})}),r&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){let{disabled:e}=this,n=this.hasSlotController.test(`label`);return t`
      <div
        class=${a({optgroup:!0,"optgroup--has-label":this.label?!0:!!n,"optgroup--has-prefix":this.hasSlotController.test(`prefix`),"optgroup--has-suffix":this.hasSlotController.test(`suffix`),"optgroup--is-disabled":this.disabled})}
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
    `}},p([l({selector:`syn-option`})],x.prototype,`assignedOptions`,void 0),p([f({reflect:!0,type:Boolean})],x.prototype,`disabled`,void 0),p([f()],x.prototype,`label`,void 0)})),C=e((()=>{S(),S(),x.define(`syn-optgroup`)}));export{C as t};