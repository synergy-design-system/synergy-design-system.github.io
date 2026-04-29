import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-DVxLZS-s.js";import{a as i,f as a,i as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./synergy-element-DPkpxABF.js";import{n as m,t as h}from"./decorator-CJ_bAnlW.js";var g,_=e((()=>{t(),g=r`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`})),v,y=e((()=>{t(),v=r`
  /* Write custom CSS here */
`}));function b(e){let t=`syn-button, syn-radio-button`;return e.closest(t)??e.querySelector(t)}var x,S,C=e((()=>{t(),d(),c(),s(),_(),y(),m(),o(),x=class extends f{constructor(...e){super(...e),this.disableRole=!1,this.label=``,this.size=`medium`,this.variant=`outline`}static{this.styles=[i,g,v]}handleFocus(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!0)}handleBlur(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!1)}handleMouseOver(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!0)}handleMouseOut(e){b(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=b(t);r&&(r.size=this.size,r.tagName.toLowerCase()===`syn-button`&&(r.variant=this.variant),r.toggleAttribute(`data-syn-button-group__button`,!0),r.toggleAttribute(`data-syn-button-group__button--first`,n===0),r.toggleAttribute(`data-syn-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-syn-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-syn-button-group__button--radio`,r.tagName.toLowerCase()===`syn-radio-button`))})}firstUpdated(){let e=()=>{this.mutationObserver.observe(this,{subtree:!0,attributes:!0,attributeFilter:[`size`,`variant`]})};this.mutationObserver=new MutationObserver(t=>{this.mutationObserver.disconnect();let n=t.some(e=>e.target===this),r=t.some(e=>e.target!==this);r&&t.filter(e=>e.target!==this).forEach(e=>{let t=e.target,n=b(t);n&&(n.size=void 0,n.tagName.toLowerCase()===`syn-button`&&(n.variant=void 0))}),(n||r)&&this.handleSlotChange(),this.updateComplete.then(()=>{e()})}),e()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}render(){return n`
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
    `}},u([p(`slot`)],x.prototype,`defaultSlot`,void 0),u([a()],x.prototype,`disableRole`,void 0),u([l()],x.prototype,`label`,void 0),u([l({reflect:!0})],x.prototype,`size`,void 0),u([l({reflect:!0})],x.prototype,`variant`,void 0),x=u([h(`SynButtonGroup`)],x),S=x}));export{C as n,S as t};