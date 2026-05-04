import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-CKG-bwJX.js";import{n as i,t as a}from"./class-map-tHUwgcUJ.js";import{r as o,t as s}from"./slot-uOU62xJ8.js";import{a as c,i as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./synergy-element-BvVk4gNI.js";var g,_=e((()=>{t(),g=r`
	/* stylelint-disable */
  :host {
    --border-color: var(--syn-color-neutral-200);
    --border-radius: var(--syn-border-radius-medium);
    --border-width: 1px;
    --padding: var(--syn-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
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
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`})),v,y=e((()=>{t(),v=r`
  :host {
    --border-color: var(--syn-panel-border-color);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
  }

  .card {
    box-shadow: none;
  }

  /** #1107: Add shadow property to card */
  .card--shadow {
    box-shadow: var(--syn-shadow-small);
  }

  /**
   * Header adjustments
   */
  .card__header {
    border: none;
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-large);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * Card body
   */
  .card__body {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-medium-regular);
  }

  /**
   * Card Footer
   */
  .card--has-footer .card__footer {
    border-top: none;
    padding: var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  /**
   * Cards that are sharp do not receive a border radius
   */
  .card--sharp {
    border-radius: var(--syn-border-radius-none);
  }

  /**
   * Do not apply border radius to sharp card images
   */
  .card--sharp .card__image {
    border-top-left-radius: var(--syn-border-radius-none);
    border-top-right-radius: var(--syn-border-radius-none);
  }

`})),b,x=e((()=>{a(),m(),o(),t(),d(),u(),_(),y(),l(),b=class extends h{constructor(...e){super(...e),this.hasSlotController=new s(this,`footer`,`header`,`image`),this.shadow=!1,this.sharp=!1}static{this.styles=[c,g,v]}render(){return n`
      <div
        part="base"
        class=${i({card:!0,"card--shadow":this.shadow,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`)})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}},p([f({type:Boolean,reflect:!0})],b.prototype,`shadow`,void 0),p([f({type:Boolean,reflect:!0})],b.prototype,`sharp`,void 0)})),S=e((()=>{x(),x(),b.define(`syn-card`)}));export{S as t};