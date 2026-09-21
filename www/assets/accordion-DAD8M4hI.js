import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-D4-0ovri.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-Di-hMrpy.js";import{n as d}from"./query-assigned-elements-CWXdehfi.js";import{n as f,t as p}from"./class-map-LsJiuvgY.js";import{n as m}from"./watch-Q8hEwzVb.js";import{n as h,t as g}from"./decorator-DZesXZg7.js";var _;function v(){return(v=e((()=>{r(),_=n`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`})))()}var y,b;function x(){return(x=e((()=>{r(),l(),p(),o(),s(),v(),h(),y=class extends u{constructor(...e){super(...e),this.closeOthers=!1,this.contained=!1,this.size=`medium`,this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(t=>{t!==e.target&&t.parentNode===e.target.parentNode&&t.removeAttribute(`open`)})}}static{this.styles=[i,_]}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener(`syn-show`,this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`syn-show`,this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return t`
      <div 
        part="base"
        class=${f({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},c([d({selector:`syn-details`})],y.prototype,`detailsInDefaultSlot`,void 0),c([a({attribute:`close-others`,type:Boolean})],y.prototype,`closeOthers`,void 0),c([a({reflect:!0,type:Boolean})],y.prototype,`contained`,void 0),c([a({reflect:!0})],y.prototype,`size`,void 0),c([m(`size`,{waitUntilFirstUpdate:!0})],y.prototype,`handleSizeChange`,null),c([m(`contained`,{waitUntilFirstUpdate:!0})],y.prototype,`handleContainedChange`,null),y=c([g(`SynAccordion`)],y),b=y})))()}function S(){return(S=e((()=>{x(),b.define(`syn-accordion`)})))()}export{S as t};