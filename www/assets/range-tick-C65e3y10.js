import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-B7_1u8P_.js";import{n as i,t as a}from"./class-map-Be1w4HNc.js";import{a as o,i as s,m as c,n as l,o as u,r as d,s as f,t as p}from"./synergy-element-DyMK5BmM.js";var m,h=e((()=>{t(),m=r`
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
`})),g,_=e((()=>{a(),t(),f(),u(),l(),h(),s(),g=class extends p{constructor(...e){super(...e),this.subdivision=!1}static{this.styles=[o,m]}render(){return n`
      <div
        class=${i({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}},d([c({reflect:!0,type:Boolean})],g.prototype,`subdivision`,void 0)})),v=e((()=>{_(),_(),g.define(`syn-range-tick`)}));export{v as t};