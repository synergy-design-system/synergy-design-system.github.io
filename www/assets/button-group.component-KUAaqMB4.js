import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-C9GUR4B8.js";import{t as f}from"./query-DOHNhzf6.js";import{n as p,t as m}from"./decorator-DZesXZg7.js";var h;function g(){return(g=e((()=>{r(),h=n`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`})))()}function _(e){let t=`syn-button, syn-radio-button`;return e.closest(t)??e.querySelector(t)}var v,y;function b(){return(b=e((()=>{r(),u(),c(),s(),g(),p(),v=class extends d{constructor(...e){super(...e),this.disableRole=!1,this.label=``,this.size=`medium`,this.variant=`outline`}static{this.styles=[i,h]}handleFocus(e){_(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!0)}handleBlur(e){_(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!1)}handleMouseOver(e){_(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!0)}handleMouseOut(e){_(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=_(t);r&&(r.size=this.size,r.tagName.toLowerCase()===`syn-button`&&(r.variant=this.variant),r.toggleAttribute(`data-syn-button-group__button`,!0),r.toggleAttribute(`data-syn-button-group__button--first`,n===0),r.toggleAttribute(`data-syn-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-syn-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-syn-button-group__button--radio`,r.tagName.toLowerCase()===`syn-radio-button`))})}firstUpdated(){let e=()=>{this.mutationObserver.observe(this,{attributeFilter:[`size`,`variant`],attributes:!0,subtree:!0})};this.mutationObserver=new MutationObserver(t=>{this.mutationObserver.disconnect();let n=t.some(e=>e.target===this),r=t.some(e=>e.target!==this);r&&t.filter(e=>e.target!==this).forEach(e=>{let t=e.target,n=_(t);n&&(n.size=void 0,n.tagName.toLowerCase()===`syn-button`&&(n.variant=void 0))}),(n||r)&&this.handleSlotChange(),this.updateComplete.then(()=>{e()})}),e()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}render(){return t`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},l([f(`slot`)],v.prototype,`defaultSlot`,void 0),l([o()],v.prototype,`disableRole`,void 0),l([a()],v.prototype,`label`,void 0),l([a({reflect:!0})],v.prototype,`size`,void 0),l([a({reflect:!0})],v.prototype,`variant`,void 0),v=l([m(`SynButtonGroup`)],v),y=v})))()}export{b as n,y as t};