import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Ut as n}from"./iframe-BcSabCAt.js";import{a as r,i,m as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-B9jDHluB.js";import{n as d,t as f}from"./watch-0Lf6m-Da.js";var p,m=e((()=>{t(),p=n`
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
`})),h,g=e((()=>{l(),f(),s(),o(),m(),i(),h=class extends u{constructor(...e){super(...e),this.vertical=!1}static{this.styles=[r,p]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}},c([a({type:Boolean,reflect:!0})],h.prototype,`vertical`,void 0),c([d(`vertical`)],h.prototype,`handleVerticalChange`,null)}));export{g as n,h as t};