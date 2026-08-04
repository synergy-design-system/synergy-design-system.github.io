import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-C9GUR4B8.js";import{n as d,t as f}from"./class-map-HZwHklGF.js";var p;function m(){return(m=e((()=>{r(),p=n`
  :host {
    --tick-height: var(--syn-spacing-x-small);
    --tick-label-top: 10px;
  }

  .tick {
    color: var(--syn-input-icon-color);
    font-family: var(--syn-font-family);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-denser);
    width: 1px;
  }

  .tick-line {
    background: var(--syn-range-tick-color);
    height: var(--tick-height);
  }

  .tick--subdivision .tick-line{
    height: calc(var(--tick-height) / 2);
  }

  .tick-label {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: var(--tick-label-top);
    text-align: center;
    white-space: nowrap;
  }
`})))()}var h;function g(){return(g=e((()=>{f(),r(),l(),s(),o(),m(),h=class extends u{constructor(...e){super(...e),this.subdivision=!1}static{this.styles=[i,p]}render(){return t`
      <div
        class=${d({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}},c([a({reflect:!0,type:Boolean})],h.prototype,`subdivision`,void 0)})))()}function _(){return(_=e((()=>{g(),h.define(`syn-range-tick`)})))()}export{_ as t};