import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{a as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,y as f}from"./synergy-element-CtR5Ldt1.js";import{n as p,t as m}from"./class-map-D8k2AIVc.js";import{r as h,t as g}from"./slot-Cl6UAYP5.js";import{n as _,t as v}from"./watch-RA3ULoLi.js";import{n as y,t as b}from"./decorator-B3p9Y8B9.js";var x,S=e((()=>{r(),x=n`
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
`})),C,w,T=e((()=>{r(),u(),m(),h(),s(),v(),c(),S(),y(),a(),C=class extends d{constructor(...e){super(...e),this.hasSlotController=new g(this,`label`),this.label=``,this.labelPosition=`top`,this.size=`medium`}static{this.styles=[i,x]}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){let e=this.hasSlotController.test(`label`),n=this.label?!0:!!e;return t`
      <div 
        part="base"
        class=${p({"tag-group":!0,"tag-group--large":this.size===`large`,"tag-group--medium":this.size===`medium`,"tag-group--small":this.size===`small`,"tag-group--start":this.labelPosition===`start`,"tag-group--top":this.labelPosition===`top`})}
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
    `}},l([o({selector:`syn-tag`})],C.prototype,`tagsInDefaultSlot`,void 0),l([f()],C.prototype,`label`,void 0),l([f({attribute:`label-position`,reflect:!0})],C.prototype,`labelPosition`,void 0),l([f({reflect:!0})],C.prototype,`size`,void 0),l([_(`size`,{waitUntilFirstUpdate:!0})],C.prototype,`handleSizeChange`,null),C=l([b(`SynTagGroup`)],C),w=C})),E=e((()=>{T(),T(),w.define(`syn-tag-group`)}));export{E as t};