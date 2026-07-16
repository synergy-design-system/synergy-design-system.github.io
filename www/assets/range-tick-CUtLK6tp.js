import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-BVDl_-fF.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u,y as d}from"./synergy-element-DzBHqVed.js";import{n as f,t as p}from"./class-map-D5wKsNTm.js";var m,h=e((()=>{r(),m=n`
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
`})),g,_=e((()=>{p(),r(),l(),s(),o(),h(),a(),g=class extends u{constructor(...e){super(...e),this.subdivision=!1}static{this.styles=[i,m]}render(){return t`
      <div
        class=${f({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}},c([d({reflect:!0,type:Boolean})],g.prototype,`subdivision`,void 0)})),v=e((()=>{_(),_(),g.define(`syn-range-tick`)}));export{v as t};