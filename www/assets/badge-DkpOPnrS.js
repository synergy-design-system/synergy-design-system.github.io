import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u,y as d}from"./synergy-element-DCZXsIq5.js";import{n as f,t as p}from"./class-map-ivi47HnP.js";import{n as m,t as h}from"./localize-BjBTQYuo.js";import{n as g,t as _}from"./decorator-B3p9Y8B9.js";var v,y=e((()=>{r(),v=n`
  :host {
    display: inline-flex;
  }

  .badge {
    /* Defines the used back- and foreground color for variants. Defaults to primary */
    --variant-color-text: var(--syn-badge-informative-color-text);
    --variant-color-background: var(--syn-badge-informative-color-background);

    align-items: center;
    background-color: var(--variant-color-background);
    border-radius: var(--syn-border-radius-pill);
    color: var(--variant-color-text);
    cursor: inherit;
    display: inline-flex;
    font: var(--syn-body-small-bold);
    height: var(--syn-spacing-large);
    justify-content: center;
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
  }

  /* Variant modifiers */
  .badge--success {
    --variant-color-background: var(--syn-badge-success-color-background);
    --variant-color-text: var(--syn-badge-success-color-text);
  }

  .badge--neutral {
    --variant-color-background: var(--syn-badge-neutral-color-background);
    --variant-color-text: var(--syn-badge-neutral-color-text);
  }

  .badge--warning {
    --variant-color-background: var(--syn-badge-warning-color-background);
    --variant-color-text: var(--syn-badge-warning-color-text);
  }

  .badge--critical {
    --variant-color-background: var(--syn-badge-critical-color-background);
    --variant-color-text: var(--syn-badge-critical-color-text);
  }

  /* @todo: Major: Remove .badge--danger */
  .badge--danger,
  .badge--error {
    --variant-color-background: var(--syn-badge-error-color-background);
    --variant-color-text: var(--syn-badge-error-color-text);
  }

  /**
   * Special treatment: If the badge is empty, show it as a dot only
   */
  :host(:empty) .badge {
    height: var(--syn-spacing-x-small);
    min-width: initial;
    padding: 0;
    width: var(--syn-spacing-x-small);
  }

  .visually-hidden {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`})),b,x,S=e((()=>{r(),p(),l(),s(),o(),h(),y(),g(),a(),b=class extends u{constructor(...e){super(...e),this.localize=new m(this),this.variant=`primary`}static{this.styles=[i,v]}render(){return t`
      <span
        part="base"
        class=${f({badge:!0,"badge--critical":this.variant===`critical`,"badge--danger":this.variant===`danger`,"badge--error":this.variant===`error`,"badge--neutral":this.variant===`neutral`,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--warning":this.variant===`warning`})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant===`primary`||this.variant===`neutral`?`notification`:this.variant)}
          </span>
        </slot>
      </span>
    `}},c([d({reflect:!0})],b.prototype,`variant`,void 0),b=c([_(`SynBadge`)],b),x=b})),C=e((()=>{S(),S(),x.define(`syn-badge`)}));export{C as t};