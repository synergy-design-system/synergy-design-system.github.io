import{S as p,c as v,n as h}from"./synergy-element-9YQF5Oan.js";import{w as d}from"./watch-CEsCE2EF.js";import{j as l}from"./iframe-DEjDpRef.js";const y=l`
	/* stylelint-disable */
  :host {
    --color: var(--syn-panel-border-color);
    --width: var(--syn-panel-border-width);
    --spacing: var(--syn-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,m=l`
  /* Write custom CSS here */
`;var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,n=(a,e,o,r)=>{for(var t=r>1?void 0:r?u(e,o):e,s=a.length-1,i;s>=0;s--)(i=a[s])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&b(e,o,t),t};class c extends p{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[v,y,m]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}n([h({type:Boolean,reflect:!0})],c.prototype,"vertical",2);n([d("vertical")],c.prototype,"handleVerticalChange",1);export{c as S};
