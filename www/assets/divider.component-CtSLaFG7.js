import{S as c,c as p,n as v}from"./synergy-element-Bz57av_A.js";import{w as h}from"./watch-CEsCE2EF.js";import{j as d}from"./iframe--eASrTwU.js";const y=d`
  :host {
    --color: var(--syn-panel-border-color);
    --width: var(--syn-panel-border-width);
    --spacing: var(--syn-spacing-medium);
  }

  :host(:not([vertical])) {
    border-top: solid var(--width) var(--color);
    display: block;
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    border-left: solid var(--width) var(--color);
    display: inline-block;
    height: 100%;
    margin: 0 var(--spacing);
  }
`;var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(a,t,o,e)=>{for(var r=e>1?void 0:e?b(t,o):t,s=a.length-1,i;s>=0;s--)(i=a[s])&&(r=(e?i(t,o,r):i(r))||r);return e&&r&&m(t,o,r),r};class n extends c{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[p,y]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}l([v({type:Boolean,reflect:!0})],n.prototype,"vertical",2);l([h("vertical")],n.prototype,"handleVerticalChange",1);export{n as S};
