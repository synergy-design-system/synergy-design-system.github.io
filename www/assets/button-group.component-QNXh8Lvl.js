import{q as g,x as d}from"./iframe-CvU34O_B.js";import{c,n as b,S as h}from"./synergy-element-B1F-Pf22.js";import{r as p}from"./icon.component-BGlPOzcQ.js";import{a as f}from"./query-D0jTsbLw.js";import{e as m}from"./decorator-UnohHU6S.js";const y=g`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,v=g`
  /* Write custom CSS here */
`;var _=Object.defineProperty,S=Object.getOwnPropertyDescriptor,i=(t,e,s,o)=>{for(var n=o>1?void 0:o?S(e,s):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(n=(o?r(e,s,n):r(n))||n);return o&&n&&_(e,s,n),n};let a=class extends h{constructor(){super(...arguments),this.disableRole=!1,this.label="",this.size="medium",this.variant="outline"}handleFocus(t){u(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(t){u(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(t){u(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(t){u(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),o=u(e);o&&(o.size=this.size,o.tagName.toLowerCase()==="syn-button"&&(o.variant=this.variant),o.toggleAttribute("data-syn-button-group__button",!0),o.toggleAttribute("data-syn-button-group__button--first",s===0),o.toggleAttribute("data-syn-button-group__button--inner",s>0&&s<t.length-1),o.toggleAttribute("data-syn-button-group__button--last",s===t.length-1),o.toggleAttribute("data-syn-button-group__button--radio",o.tagName.toLowerCase()==="syn-radio-button"))})}firstUpdated(){const t=()=>{this.mutationObserver.observe(this,{subtree:!0,attributes:!0,attributeFilter:["size","variant"]})};this.mutationObserver=new MutationObserver(e=>{this.mutationObserver.disconnect();const s=e.some(n=>n.target===this),o=e.some(n=>n.target!==this);o&&e.filter(n=>n.target!==this).forEach(n=>{const l=n.target,r=u(l);r&&(r.size=void 0,r.tagName.toLowerCase()==="syn-button"&&(r.variant=void 0))}),(s||o)&&this.handleSlotChange(),this.updateComplete.then(()=>{t()})}),t()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}render(){return d`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};a.styles=[c,y,v];i([f("slot")],a.prototype,"defaultSlot",2);i([p()],a.prototype,"disableRole",2);i([b()],a.prototype,"label",2);i([b({reflect:!0})],a.prototype,"size",2);i([b({reflect:!0})],a.prototype,"variant",2);a=i([m("SynButtonGroup")],a);function u(t){const e="syn-button, syn-radio-button";return t.closest(e)??t.querySelector(e)}export{a as S};
