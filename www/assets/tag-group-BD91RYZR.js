import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-BeBxrfuL.js";import{n as d}from"./query-assigned-elements-CWXdehfi.js";import{n as f,t as p}from"./class-map-HZwHklGF.js";import{r as m,t as h}from"./slot-CUH75lUH.js";import{n as g}from"./watch-Q8hEwzVb.js";import{n as _,t as v}from"./decorator-DZesXZg7.js";var y;function b(){return(b=e((()=>{r(),y=n`
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
`})))()}var x,S;function C(){return(C=e((()=>{r(),l(),p(),m(),o(),s(),b(),_(),x=class extends u{constructor(...e){super(...e),this.hasSlotController=new h(this,`label`),this.label=``,this.labelPosition=`top`,this.size=`medium`}static{this.styles=[i,y]}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){let e=this.hasSlotController.test(`label`),n=this.label?!0:!!e;return t`
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
    `}},c([d({selector:`syn-tag`})],x.prototype,`tagsInDefaultSlot`,void 0),c([a()],x.prototype,`label`,void 0),c([a({attribute:`label-position`,reflect:!0})],x.prototype,`labelPosition`,void 0),c([a({reflect:!0})],x.prototype,`size`,void 0),c([g(`size`,{waitUntilFirstUpdate:!0})],x.prototype,`handleSizeChange`,null),x=c([v(`SynTagGroup`)],x),S=x})))()}function w(){return(w=e((()=>{C(),S.define(`syn-tag-group`)})))()}export{w as t};