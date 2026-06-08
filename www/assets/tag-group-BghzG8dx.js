import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,qt as r}from"./iframe-Bb0l_wZA.js";import{n as i,t as a}from"./class-map-B4FDG9XZ.js";import{r as o,t as s}from"./slot-DgcqpP0-.js";import{a as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,y as g}from"./synergy-element-Dwcf6wEd.js";import{n as _,t as v}from"./watch-I6gMK-uE.js";import{n as y,t as b}from"./decorator-ChmomMqD.js";var x,S=e((()=>{n(),x=r`
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
`})),C,w,T=e((()=>{n(),m(),a(),o(),d(),v(),f(),S(),y(),l(),C=class extends h{constructor(...e){super(...e),this.hasSlotController=new s(this,`label`),this.label=``,this.labelPosition=`top`,this.size=`medium`}static{this.styles=[c,x]}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){let e=this.hasSlotController.test(`label`),n=this.label?!0:!!e;return t`
      <div 
        part="base"
        class=${i({"tag-group":!0,"tag-group--large":this.size===`large`,"tag-group--medium":this.size===`medium`,"tag-group--small":this.size===`small`,"tag-group--start":this.labelPosition===`start`,"tag-group--top":this.labelPosition===`top`})}
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
    `}},p([u({selector:`syn-tag`})],C.prototype,`tagsInDefaultSlot`,void 0),p([g()],C.prototype,`label`,void 0),p([g({attribute:`label-position`,reflect:!0})],C.prototype,`labelPosition`,void 0),p([g({reflect:!0})],C.prototype,`size`,void 0),p([_(`size`,{waitUntilFirstUpdate:!0})],C.prototype,`handleSizeChange`,null),C=p([b(`SynTagGroup`)],C),w=C})),E=e((()=>{T(),T(),w.define(`syn-tag-group`)}));export{E as t};