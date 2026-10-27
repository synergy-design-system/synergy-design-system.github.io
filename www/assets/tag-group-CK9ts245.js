import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,h as n,t as r}from"./lit-CHM2bYch.js";import{_ as i,a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-BbBQWYgK.js";import{n as f,t as p}from"./class-map-DWgFSlwb.js";import{r as m,t as h}from"./slot-Bs_OjGGF.js";import{n as g}from"./watch-B40nufxp.js";import{n as _,t as v}from"./decorator-DVAJxXeQ.js";var y;function b(){return(b=e((()=>{r(),y=n`
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
`})))()}var x,S;function C(){return(C=e((()=>{r(),u(),p(),m(),s(),c(),b(),_(),x=class extends d{constructor(...e){super(...e),this.hasSlotController=new h(this,`label`),this.label=``,this.labelPosition=`top`,this.size=`medium`}static{this.styles=[a,y]}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){let e=this.hasSlotController.test(`label`),n=this.label?!0:!!e;return t`
      <div 
        part="base"
        class=${f({"tag-group":!0,"tag-group--large":this.size===`large`,"tag-group--medium":this.size===`medium`,"tag-group--small":this.size===`small`,"tag-group--start":this.labelPosition===`start`,"tag-group--top":this.labelPosition===`top`})}
      >

        <span
            part="tag-label"
            class="tag-group__label"
            aria-hidden=${n?`false`:`true`}
          >
            <slot name="label">${this.label}</slot>
        </span>

        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},l([o({selector:`syn-tag`})],x.prototype,`tagsInDefaultSlot`,void 0),l([i()],x.prototype,`label`,void 0),l([i({attribute:`label-position`,reflect:!0})],x.prototype,`labelPosition`,void 0),l([i({reflect:!0})],x.prototype,`size`,void 0),l([g(`size`,{waitUntilFirstUpdate:!0})],x.prototype,`handleSizeChange`,null),x=l([v(`SynTagGroup`)],x),S=x})))()}function w(){return(w=e((()=>{C(),S.define(`syn-tag-group`)})))()}export{w as t};