import{e as l}from"./class-map-BSAfnhal.js";import{v as c,c as o}from"./iframe-r0CQHRKQ.js";import{S as v,c as h,n as p}from"./synergy-element-C0zzvLBX.js";const d=c`
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
`;var f=Object.defineProperty,g=(t,n,s,y)=>{for(var i=void 0,e=t.length-1,r;e>=0;e--)(r=t[e])&&(i=r(n,s,i)||i);return i&&f(n,s,i),i};class a extends v{constructor(){super(...arguments),this.subdivision=!1}static{this.styles=[h,d]}render(){return o`
      <div
        class=${l({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}}g([p({reflect:!0,type:Boolean})],a.prototype,"subdivision");a.define("syn-range-tick");
