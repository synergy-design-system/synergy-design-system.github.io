import{S as p,c as h,n as v}from"./synergy-element-vpaxSXL5.js";import{w as d}from"./watch-CEsCE2EF.js";import{h as i}from"./iframe-C8LjzEvO.js";const y=i`
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
`,m=i`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,n=(a,r,o,e)=>{for(var t=e>1?void 0:e?u(r,o):r,s=a.length-1,l;s>=0;s--)(l=a[s])&&(t=(e?l(r,o,t):l(t))||t);return e&&t&&b(r,o,t),t};class c extends p{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[h,y,m]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}n([v({type:Boolean,reflect:!0})],c.prototype,"vertical",2);n([d("vertical")],c.prototype,"handleVerticalChange",1);export{c as S};
