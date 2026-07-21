import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,t as n}from"./lit-BfcklOOD.js";import{a as r,i,n as a,o,r as s,s as c,t as l,y as u}from"./synergy-element-Ca3MURqZ.js";import{n as d,t as f}from"./watch-RA3ULoLi.js";var p,m=e((()=>{n(),p=t`
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
`})),h,g=e((()=>{c(),f(),o(),a(),m(),i(),h=class extends l{constructor(...e){super(...e),this.vertical=!1}static{this.styles=[r,p]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}},s([u({type:Boolean,reflect:!0})],h.prototype,`vertical`,void 0),s([d(`vertical`)],h.prototype,`handleVerticalChange`,null)}));export{g as n,h as t};