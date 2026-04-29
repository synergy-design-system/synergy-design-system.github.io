import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Ut as n}from"./iframe-B3D1qQau.js";import{a as r,i,n as a,o,p as s,r as c,s as l,t as u}from"./synergy-element-Doexde1X.js";import{n as d,t as f}from"./watch-OXZPXmne.js";var p,m=e((()=>{t(),p=n`
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
`})),h,g=e((()=>{l(),f(),o(),a(),m(),i(),h=class extends u{constructor(...e){super(...e),this.vertical=!1}static{this.styles=[r,p]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}},c([s({type:Boolean,reflect:!0})],h.prototype,`vertical`,void 0),c([d(`vertical`)],h.prototype,`handleVerticalChange`,null)}));export{g as n,h as t};