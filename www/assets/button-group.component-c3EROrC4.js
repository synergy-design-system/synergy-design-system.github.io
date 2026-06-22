import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-DWg8XNs3.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-CsptVtzA.js";import{n as m,t as h}from"./decorator-ChmomMqD.js";var g,_=e((()=>{r(),g=n`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`})),v,y=e((()=>{r(),v=n`
  /* Write custom CSS here */
`}));function b(e){let t=`syn-button, syn-radio-button`;return e.closest(t)??e.querySelector(t)}var x,S,C=e((()=>{r(),d(),l(),c(),_(),y(),m(),s(),x=class extends f{constructor(...e){super(...e),this.disableRole=!1,this.label=``,this.size=`medium`,this.variant=`outline`}static{this.styles=[a,g,v]}handleFocus(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!0)}handleBlur(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!1)}handleMouseOver(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!0)}handleMouseOut(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=b(t);r&&(r.size=this.size,r.tagName.toLowerCase()===`syn-button`&&(r.variant=this.variant),r.toggleAttribute(`data-syn-button-group__button`,!0),r.toggleAttribute(`data-syn-button-group__button--first`,n===0),r.toggleAttribute(`data-syn-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-syn-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-syn-button-group__button--radio`,r.tagName.toLowerCase()===`syn-radio-button`))})}firstUpdated(){let e=()=>{this.mutationObserver.observe(this,{subtree:!0,attributes:!0,attributeFilter:[`size`,`variant`]})};this.mutationObserver=new MutationObserver(t=>{this.mutationObserver.disconnect();let n=t.some(e=>e.target===this),r=t.some(e=>e.target!==this);r&&t.filter(e=>e.target!==this).forEach(e=>{let t=e.target,n=b(t);n&&(n.size=void 0,n.tagName.toLowerCase()===`syn-button`&&(n.variant=void 0))}),(n||r)&&this.handleSlotChange(),this.updateComplete.then(()=>{e()})}),e()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}render(){return t`
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
    `}},u([o(`slot`)],x.prototype,`defaultSlot`,void 0),u([i()],x.prototype,`disableRole`,void 0),u([p()],x.prototype,`label`,void 0),u([p({reflect:!0})],x.prototype,`size`,void 0),u([p({reflect:!0})],x.prototype,`variant`,void 0),x=u([h(`SynButtonGroup`)],x),S=x}));export{C as n,S as t};