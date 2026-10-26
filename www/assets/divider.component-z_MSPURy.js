import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,t as n}from"./lit-CHM2bYch.js";import{_ as r,a as i,n as a,o,r as s,s as c,t as l}from"./synergy-element-DXBTABhW.js";import{n as u}from"./watch-B40nufxp.js";var d;function f(){return(f=e((()=>{n(),d=t`
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
`})))()}var p;function m(){return(m=e((()=>{c(),o(),a(),f(),p=class extends l{constructor(...e){super(...e),this.vertical=!1}static{this.styles=[i,d]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}},s([r({type:Boolean,reflect:!0})],p.prototype,`vertical`,void 0),s([u(`vertical`)],p.prototype,`handleVerticalChange`,null)})))()}export{m as n,p as t};