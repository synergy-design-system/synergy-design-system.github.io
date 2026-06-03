import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-BcSabCAt.js";import{n as i,t as a}from"./class-map-ubcCJG2R.js";import{r as o,t as s}from"./slot-BUy-JBM2.js";import{a as c,c as l,i as u,m as d,n as f,o as p,r as m,s as h,t as g}from"./synergy-element-B9jDHluB.js";import{n as _,t as v}from"./watch-0Lf6m-Da.js";import{n as y,t as b}from"./decorator-C8FY8E2M.js";var x,S=e((()=>{t(),x=r`
  :host {
    --tag-group-item-gap: var(--syn-spacing-x-small);
    --tag-group-label-gap: var(--syn-spacing-x-small);
    --tag-group-label-font: var(--syn-body-medium-semibold);

    display: block;
  }

  .tag-group {
    align-items: anchor-center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--tag-group-item-gap);
  }

  /* Label Styles */
  .tag-group__label {
    color: var(--syn-input-label-color);
    display: block;
    font: var(--tag-group-label-font);
  }

  .tag-group--top .tag-group__label {
    /**
     * When calculating the margin-bottom, we have to take the gap of .tag-group into account.
     * We dont want to remove the row-gap above, as otherwise the gap between multi line tags would be 0.
     * By subtracting the row-gap from the label gap, we ensure that the distance between the label and the first row of tags is consistent.
     */
    margin-bottom: calc(var(--tag-group-label-gap) - var(--syn-spacing-2x-small));
    order: -1;  
    width: 100%;  
  }

  /* Size Modifiers */
  .tag-group--small {
    --tag-group-item-gap: var(--syn-spacing-2x-small);
    --tag-group-label-gap: var(--syn-spacing-x-small);
    --tag-group-label-font: var(--syn-body-small-semibold);
  }

  .tag-group--large {
    --tag-group-item-gap: var(--syn-spacing-small);
    --tag-group-label-gap: var(--syn-spacing-x-small);
    --tag-group-label-font: var(--syn-body-large-semibold);
  }
`})),C,w,T=e((()=>{t(),h(),a(),o(),f(),v(),p(),S(),y(),u(),C=class extends g{constructor(...e){super(...e),this.hasSlotController=new s(this,`label`),this.label=``,this.labelPosition=`top`,this.size=`medium`}static{this.styles=[c,x]}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){let e=this.hasSlotController.test(`label`),t=this.label?!0:!!e;return n`
      <div 
        part="base"
        class=${i({"tag-group":!0,"tag-group--large":this.size===`large`,"tag-group--medium":this.size===`medium`,"tag-group--small":this.size===`small`,"tag-group--start":this.labelPosition===`start`,"tag-group--top":this.labelPosition===`top`})}
      >

        <span
            part="tag-label"
            class="tag-group__label"
            aria-hidden=${t?`false`:`true`}
          >
            <slot name="label">${this.label}</slot>
        </span>

        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},m([l({selector:`syn-tag`})],C.prototype,`tagsInDefaultSlot`,void 0),m([d()],C.prototype,`label`,void 0),m([d({attribute:`label-position`,reflect:!0})],C.prototype,`labelPosition`,void 0),m([d({reflect:!0})],C.prototype,`size`,void 0),m([_(`size`,{waitUntilFirstUpdate:!0})],C.prototype,`handleSizeChange`,null),C=m([b(`SynTagGroup`)],C),w=C})),E=e((()=>{T(),T(),w.define(`syn-tag-group`)}));export{E as t};