import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-BVDl_-fF.js";import{n as i,t as a}from"./class-map-BmdGqO7G.js";import{n as o,t as s}from"./localize-CzgwcyM2.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m,y as h}from"./synergy-element-fkSPPZqT.js";import{n as g,t as _}from"./decorator-ChmomMqD.js";var v,y=e((()=>{r(),v=n`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--syn-border-radius-small);
    border: solid 1px var(--syn-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--success {
    background-color: var(--syn-color-success-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--syn-color-warning-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--syn-color-danger-600);
    color: var(--syn-color-neutral-0);
  }
`})),b,x=e((()=>{r(),b=n`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-small-bold);
    height: var(--syn-spacing-large);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-badge-informative-color-background);
    color: var(--syn-badge-informative-color-text);
  }

  .badge--success {
    background-color: var(--syn-badge-success-color-background);
    color: var(--syn-badge-success-color-text);
  }

  .badge--neutral {
    background-color: var(--syn-badge-neutral-color-background);
    color: var(--syn-badge-neutral-color-text);
  }

  .badge--warning {
    background-color: var(--syn-badge-warning-color-background);
    color: var(--syn-badge-warning-color-text);
  }

  .badge--danger {
    background-color: var(--syn-badge-error-color-background);
    color: var(--syn-badge-error-color-text);
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
`})),S,C,w=e((()=>{a(),r(),p(),d(),u(),s(),y(),x(),g(),l(),S=class extends m{constructor(...e){super(...e),this.localize=new o(this),this.variant=`primary`}static{this.styles=[c,v,b]}render(){return t`
      <span
        part="base"
        class=${i({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant===`primary`||this.variant===`neutral`?`notification`:this.variant)}
          </span>
        </slot>
      </span>
    `}},f([h({reflect:!0})],S.prototype,`variant`,void 0),S=f([_(`SynBadge`)],S),C=S})),T=e((()=>{w(),w(),C.define(`syn-badge`)}));export{T as t};