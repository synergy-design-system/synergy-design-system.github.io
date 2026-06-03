import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-BcSabCAt.js";import{a as i,n as a,o,t as s}from"./synergy-element-B9jDHluB.js";import{n as c,t as l}from"./divider.component-nNkF1miJ.js";var u,d=e((()=>{t(),u=r`
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
`})),f,p=e((()=>{t(),c(),o(),a(),d(),f=class extends s{static{this.styles=[i,u]}static{this.dependencies={"syn-divider":l}}render(){return n`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}}})),m=e((()=>{p(),p(),f.define(`syn-menu-label`)}));export{m as t};