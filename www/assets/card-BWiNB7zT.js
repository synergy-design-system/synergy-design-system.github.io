import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u,y as d}from"./synergy-element-DCZXsIq5.js";import{n as f,t as p}from"./class-map-ivi47HnP.js";import{r as m,t as h}from"./slot-Cl6UAYP5.js";var g,_=e((()=>{r(),g=n`
  :host {
    --border-color: var(--syn-panel-border-color);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
    --padding: var(--syn-spacing-large);

    display: inline-block;
  }

  .card {
    background-color: var(--syn-panel-background-color);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
  }

  /** #1107: Add shadow property to card */
  .card--shadow {
    box-shadow: var(--syn-shadow-small);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    display: flex;
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  /**
   * #1107: Sharp cards do not receive a border radius
   */
  .card--sharp {
    border-radius: var(--syn-border-radius-none);
  }

  /**
   * #1107: Do not apply border radius to sharp card images
   */
  .card--sharp .card__image {
    border-top-left-radius: var(--syn-border-radius-none);
    border-top-right-radius: var(--syn-border-radius-none);
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    color: var(--syn-typography-color-text);
    display: block;
    font: var(--syn-heading-large);
    line-height: var(--syn-line-height-normal);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    color: var(--syn-typography-color-text);
    display: block;
    font: var(--syn-body-medium-regular);
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    padding: var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`})),v,y=e((()=>{r(),p(),l(),m(),s(),o(),_(),a(),v=class extends u{constructor(...e){super(...e),this.hasSlotController=new h(this,`footer`,`header`,`image`),this.shadow=!1,this.sharp=!1}static{this.styles=[i,g]}render(){return t`
      <div
        part="base"
        class=${f({card:!0,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-header":this.hasSlotController.test(`header`),"card--has-image":this.hasSlotController.test(`image`),"card--shadow":this.shadow,"card--sharp":this.sharp})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}},c([d({reflect:!0,type:Boolean})],v.prototype,`shadow`,void 0),c([d({reflect:!0,type:Boolean})],v.prototype,`sharp`,void 0)})),b=e((()=>{y(),y(),v.define(`syn-card`)}));export{b as t};