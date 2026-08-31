import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,n as a,o,t as s}from"./synergy-element-IoE5U-8r.js";import{n as c,t as l}from"./divider.component-BE4G1h7y.js";var u;function d(){return(d=e((()=>{r(),u=n`
  :host {
    --display-divider: block;

    display: block;
  }

  .menu-label__divider {
    --spacing: 0;

    display: var(--display-divider);
    margin-bottom: var(--syn-spacing-x-small);
  }

  .menu-label {
    color: var(--syn-input-color);
    display: inline-block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);

    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
  }
`})))()}var f;function p(){return(p=e((()=>{r(),c(),o(),a(),d(),f=class extends s{static{this.styles=[i,u]}static{this.dependencies={"syn-divider":l}}render(){return t`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}}})))()}function m(){return(m=e((()=>{p(),f.define(`syn-menu-label`)})))()}export{m as t};