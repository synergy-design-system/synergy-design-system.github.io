import{j as p,c as u}from"./iframe-0XdHMixp.js";import{c as b,n,S as m}from"./synergy-element-DUqVEHY7.js";import{o as h}from"./query-assigned-elements-CIlqV-be.js";import{e as c}from"./class-map-C9yt4qre.js";import{H as d}from"./slot-9EVoRGQc.js";import{w as y}from"./watch-CEsCE2EF.js";import{e as f}from"./decorator-CWkWRMhy.js";const v=p`
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
`;var S=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(e,l,r,s)=>{for(var a=s>1?void 0:s?w(l,r):l,g=e.length-1,i;g>=0;g--)(i=e[g])&&(a=(s?i(l,r,a):i(a))||a);return s&&a&&S(l,r,a),a};let t=class extends m{constructor(){super(...arguments),this.hasSlotController=new d(this,"label"),this.label="",this.labelPosition="top",this.size="medium"}adjustTagSize(){this.tagsInDefaultSlot.forEach(e=>{e.setAttribute("size",this.size)})}handleSizeChange(){this.adjustTagSize()}handleSlotChange(){this.adjustTagSize()}render(){const e=this.hasSlotController.test("label"),l=this.label?!0:!!e;return u`
      <div 
        part="base"
        class=${c({"tag-group":!0,"tag-group--large":this.size==="large","tag-group--medium":this.size==="medium","tag-group--small":this.size==="small","tag-group--start":this.labelPosition==="start","tag-group--top":this.labelPosition==="top"})}
      >

        <span
            part="tag-label"
            class="tag-group__label"
            aria-hidden=${l?"false":"true"}
          >
            <slot name="label">${this.label}</slot>
        </span>

        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};t.styles=[b,v];o([h({selector:"syn-tag"})],t.prototype,"tagsInDefaultSlot",2);o([n()],t.prototype,"label",2);o([n({attribute:"label-position",reflect:!0})],t.prototype,"labelPosition",2);o([n({reflect:!0})],t.prototype,"size",2);o([y("size",{waitUntilFirstUpdate:!0})],t.prototype,"handleSizeChange",1);t=o([f("SynTagGroup")],t);t.define("syn-tag-group");
