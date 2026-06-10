import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,qt as r}from"./iframe-BLAzlACc.js";import{n as i,t as a}from"./class-map-C6rhpuKM.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-A58418dp.js";var m,h=e((()=>{n(),m=r`
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
`})),g,_=e((()=>{a(),n(),d(),l(),c(),h(),s(),g=class extends f{constructor(...e){super(...e),this.subdivision=!1}static{this.styles=[o,m]}render(){return t`
      <div
        class=${i({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}},u([p({reflect:!0,type:Boolean})],g.prototype,`subdivision`,void 0)})),v=e((()=>{_(),_(),g.define(`syn-range-tick`)}));export{v as t};