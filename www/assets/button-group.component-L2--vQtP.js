import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-zaPEO0fm.js";import{n as m,t as h}from"./decorator-B3p9Y8B9.js";var g,_=e((()=>{r(),g=n`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`}));function v(e){let t=`syn-button, syn-radio-button`;return e.closest(t)??e.querySelector(t)}var y,b,x=e((()=>{r(),d(),l(),c(),_(),m(),s(),y=class extends f{constructor(...e){super(...e),this.disableRole=!1,this.label=``,this.size=`medium`,this.variant=`outline`}static{this.styles=[a,g]}handleFocus(e){v(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!0)}handleBlur(e){v(e.target)?.toggleAttribute(`data-syn-button-group__button--focus`,!1)}handleMouseOver(e){v(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!0)}handleMouseOut(e){v(e.target)?.toggleAttribute(`data-syn-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=v(t);r&&(r.size=this.size,r.tagName.toLowerCase()===`syn-button`&&(r.variant=this.variant),r.toggleAttribute(`data-syn-button-group__button`,!0),r.toggleAttribute(`data-syn-button-group__button--first`,n===0),r.toggleAttribute(`data-syn-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-syn-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-syn-button-group__button--radio`,r.tagName.toLowerCase()===`syn-radio-button`))})}firstUpdated(){let e=()=>{this.mutationObserver.observe(this,{attributeFilter:[`size`,`variant`],attributes:!0,subtree:!0})};this.mutationObserver=new MutationObserver(t=>{this.mutationObserver.disconnect();let n=t.some(e=>e.target===this),r=t.some(e=>e.target!==this);r&&t.filter(e=>e.target!==this).forEach(e=>{let t=e.target,n=v(t);n&&(n.size=void 0,n.tagName.toLowerCase()===`syn-button`&&(n.variant=void 0))}),(n||r)&&this.handleSlotChange(),this.updateComplete.then(()=>{e()})}),e()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}render(){return t`
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
    `}},u([o(`slot`)],y.prototype,`defaultSlot`,void 0),u([i()],y.prototype,`disableRole`,void 0),u([p()],y.prototype,`label`,void 0),u([p({reflect:!0})],y.prototype,`size`,void 0),u([p({reflect:!0})],y.prototype,`variant`,void 0),y=u([h(`SynButtonGroup`)],y),b=y}));export{x as n,b as t};