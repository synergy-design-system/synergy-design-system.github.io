import{a as l}from"./class-map-QQ7HVnPG.js";import{i as o,x as c,n as v}from"./property-ImbD-3qY.js";import{S as h,c as p}from"./component.styles-DXWA7L2q.js";const d=o`
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
    background: var(--syn-color-neutral-400);
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
`;var f=Object.defineProperty,y=(t,n,s,g)=>{for(var i=void 0,e=t.length-1,r;e>=0;e--)(r=t[e])&&(i=r(n,s,i)||i);return i&&f(n,s,i),i};class a extends h{constructor(){super(...arguments),this.subdivision=!1}static{this.styles=[p,d]}render(){return c`
      <div
        class=${l({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}}y([v({reflect:!0,type:Boolean})],a.prototype,"subdivision");a.define("syn-range-tick");
