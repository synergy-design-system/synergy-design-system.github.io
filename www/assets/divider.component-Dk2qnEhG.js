import{n as p}from"./property-Cf1mp-f_.js";import{w as v}from"./watch-CEsCE2EF.js";import{S as h,c as d}from"./component.styles-Bg22BIIN.js";import{l as i}from"./iframe-T704dET3.js";const m=i`
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
`,y=i`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,n=(o,t,a,e)=>{for(var r=e>1?void 0:e?u(t,a):t,s=o.length-1,l;s>=0;s--)(l=o[s])&&(r=(e?l(t,a,r):l(r))||r);return e&&r&&b(t,a,r),r};class c extends h{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[d,m,y]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}n([p({type:Boolean,reflect:!0})],c.prototype,"vertical",2);n([v("vertical")],c.prototype,"handleVerticalChange",1);export{c as S};
