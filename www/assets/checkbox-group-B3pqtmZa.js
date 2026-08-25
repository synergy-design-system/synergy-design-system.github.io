import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-BeBxrfuL.js";import{t as d}from"./query-DOHNhzf6.js";import{n as f,t as p}from"./class-map-HZwHklGF.js";import{r as m,t as h}from"./slot-CUH75lUH.js";import{n as g}from"./watch-Q8hEwzVb.js";import{n as _,t as v}from"./decorator-DZesXZg7.js";import{n as y,t as b}from"./form-control.styles-NuPmuUkm.js";var x;function S(){return(S=e((()=>{r(),x=n`
  :host {
    display: block;
  }

  .form-control {
    border: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .form-control__label {
    padding: 0;
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    
    /*
     * We use 2x-small because the checkbox already has inner padding!
     * @todo: Exchange this with --syn-spacing-x-small in #1323
     */
    gap: var(--syn-spacing-2x-small);
  }

  .form-control--has-help-text.form-control--checkbox-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  /**
   * Allow checkbox-groups to be displayed in a row.
   */
  .form-control--is-horizontal .form-control-input {
    flex-flow: row wrap;
    gap: var(--syn-spacing-2x-small) var(--syn-spacing-medium);
  }
`})))()}var C,w;function T(){return(T=e((()=>{r(),p(),l(),s(),y(),o(),S(),m(),_(),C=class extends u{constructor(...e){super(...e),this.hasSlotController=new h(this,`help-text`,`label`),this.label=``,this.helpText=``,this.size=`medium`,this.layout=`vertical`,this.form=``}static{this.styles=[i,b,x]}handleSizeChange(){this.syncCheckboxes()}handleFormChange(){this.syncCheckboxes()}async syncCheckboxElements(){let e=this.getAllCheckboxes();await Promise.all(e.map(async e=>{await e.updateComplete;let t=e;t.size=this.size,t.form=this.form}))}syncCheckboxes(){let e=!!this.querySelector(`syn-checkbox`),t=!!this.querySelector(`syn-switch`),n=!!customElements.get(`syn-checkbox`),r=!!customElements.get(`syn-switch`);if((!e||n)&&(!t||r)){this.syncCheckboxElements().catch(()=>void 0);return}e&&!n&&customElements.whenDefined(`syn-checkbox`).then(()=>this.syncCheckboxes()).catch(()=>void 0),t&&!r&&customElements.whenDefined(`syn-switch`).then(()=>this.syncCheckboxes()).catch(()=>void 0)}getAllCheckboxes(){return[...this.querySelectorAll(`syn-checkbox, syn-switch`)]}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key))return;let t=this.getAllCheckboxes().filter(e=>!e.disabled&&!e.readonly);if(!t.length)return;let n=e.composedPath().find(e=>{if(!e||!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return t===`syn-checkbox`||t===`syn-switch`}),r=t.find(e=>e.checked),i=t.indexOf(n??r??t[0])+([`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1);i<0&&(i=t.length-1),i>t.length-1&&(i=0),t[i].focus(),e.preventDefault()}handleLabelClick(){this.focus()}focus(e){let t=this.getAllCheckboxes(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus({...e,focusVisible:!0})}firstUpdated(){this.syncCheckboxes()}render(){let e=this.hasSlotController.test(`label`),n=this.hasSlotController.test(`help-text`),r=this.label?!0:!!e,i=this.helpText?!0:!!n;return t`
      <fieldset
        part="form-control"
        class=${f({"form-control":!0,"form-control--checkbox-group":!0,"form-control--has-help-text":i,"form-control--has-label":r,"form-control--is-horizontal":this.layout===`horizontal`,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`})}
        aria-labelledby="label"
        aria-describedby="help-text"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <slot
            @slotchange=${this.syncCheckboxes}
            @keydown=${this.handleKeyDown}
          ></slot>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}},c([d(`slot:not([name])`)],C.prototype,`defaultSlot`,void 0),c([a()],C.prototype,`label`,void 0),c([a({attribute:`help-text`})],C.prototype,`helpText`,void 0),c([a({reflect:!0})],C.prototype,`size`,void 0),c([a({reflect:!0})],C.prototype,`layout`,void 0),c([a({reflect:!0})],C.prototype,`form`,void 0),c([g(`size`,{waitUntilFirstUpdate:!0})],C.prototype,`handleSizeChange`,null),c([g(`form`,{waitUntilFirstUpdate:!0})],C.prototype,`handleFormChange`,null),C=c([v(`SynCheckboxGroup`)],C),w=C})))()}function E(){return(E=e((()=>{T(),w.define(`syn-checkbox-group`)})))()}export{E as t};