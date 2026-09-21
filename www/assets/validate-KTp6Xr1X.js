import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-D4-0ovri.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-Di-hMrpy.js";import{t as f}from"./query-DOHNhzf6.js";import{n as p}from"./query-assigned-elements-CWXdehfi.js";import{r as m,t as h}from"./if-defined-BN5mMhH6.js";import{n as g}from"./watch-Q8hEwzVb.js";import{n as _,t as v}from"./decorator-DZesXZg7.js";import{n as y,t as b}from"./alert.component-PMz9FMCu.js";import{n as x,t as S}from"./tooltip.component-IzRLYf3d.js";var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{s(),C=[`blur`,`change`,`clear`,`focus`,`invalid`,`input`,`move`],w=(e,t)=>e.includes(t),T=e=>w(e,`blur`),E=e=>w(e,`invalid`),D=e=>e instanceof d,O=(e=``)=>e.split(` `).map(e=>e.trim()).filter(Boolean),k=(e,t)=>{let n=t.trim();return D(e)&&C.includes(n)?`syn-${n}`:n},A=e=>{if(!D(e))return;let{size:t}=e;return t??void 0},j={"syn-checkbox":`input`,"syn-combobox":`.combobox__value-input`,"syn-file":`input`,"syn-input":`input`,"syn-radio-group":`input`,"syn-range":`.input__control`,"syn-select":`.select__value-input`,"syn-switch":`input`,"syn-textarea":`.textarea__control`},M=(e,t)=>e.shadowRoot?.querySelector(t)??null,N=e=>{if(!e)return;if(!e.shadowRoot)return e;let t=e.tagName.toLowerCase(),n=j[t];if(n){let t=M(e,n);if(t)return t}return M(e,`input,select,textarea`)||e}})))()}var F;function I(){return(I=e((()=>{r(),F=n`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`})))()}var L,R,z;function B(){return(B=e((()=>{r(),u(),h(),c(),s(),y(),x(),P(),I(),_(),L=()=>t`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`,R=class extends d{constructor(...e){super(...e),this.controller=new AbortController,this.validationMessage=``,this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant=`native`,this.hideIcon=!1,this.on=``,this.customValidationMessage=``,this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage=``)},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async e=>{if(E(e.type)&&this.variant===`native`&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}E(e.type)&&this.variant!==`native`&&(e.preventDefault(),e.stopPropagation());let t=e.currentTarget;if(D(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!T(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!T(e.type)&&this.variant===`native`&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}static{this.styles=[i,F]}static{this.dependencies={"syn-alert":b,"syn-tooltip":S}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){let e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){let e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){return this.slottedChildren[0]||void 0}setAlertSize(){this.alertSize=A(this.getInput())}getUsedEventNames(){let e=this.getInput();if(!e)return[];let[...t]=O(this.on).filter(Boolean);return t.includes(`invalid`)||t.push(`invalid`),t.includes(`live`)&&(t.push(`input`),t.push(`blur`)),Array.from(new Set(t.filter(e=>e!==`live`).map(t=>k(e,t))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;let e=this.getInput();if(!e)return;let t=this.getUsedEventNames();t.forEach(t=>{e.addEventListener(t,this.validate,{capture:E(t),signal:this.controller.signal})});let n=k(e,`change`);t.includes(n)||e.addEventListener(n,this.internalRevalidate,{signal:this.controller.signal});let r=k(e,`focus`),i=k(e,`blur`);e.addEventListener(r,this.handleInputFocus,{signal:this.controller.signal}),e.addEventListener(i,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(e){let{customValidationMessage:t}=this,n=t||e.validationMessage;this.validationMessage=n}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){let t=document.activeElement,n=t.closest(`syn-validate`);(t.validity?.valid||!n)&&(e.scrollIntoView({block:`nearest`}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();let t=this.getInput();this.customValidationMessage&&(D(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{let t=this.getInput();t&&e.filter(({target:e})=>e===t).every(e=>e.attributeName===`size`)&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:[`size`],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{let t=this.getInput();t&&(e.filter(({target:e})=>e===t).every(e=>{let t=e.target;return t.hasAttribute(`disabled`)||t.hasAttribute(`readonly`)})?(this.isValid=!0,this.validationMessage=``):(D(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??``}))}),this.observer.observe(this,{attributeFilter:[`disabled`,`readonly`],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}updated(e){if(super.updated(e),this.variant!==`tooltip`)return;let t=this.tooltipElement;if(!t)return;let n=this.getDisplayValidationMessage();!this.isValid&&n&&this.hasFocus?(t.content=n,t.show()):t.hide()}renderInlineValidation(){let e=this.getDisplayValidationMessage();return this.variant!==`inline`||!e?``:t`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${m(this.alertSize)}
        variant="error"
      >
        ${this.hideIcon?``:t`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${e}
      </syn-alert>
    `}render(){let e=this.variant===`tooltip`?t`
        <syn-tooltip
          .anchor=${N(this.getInput())??void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${L()}
        </syn-tooltip>
      `:L();return t`
      <div
        class="validate"
        part="base"
      >
        ${e}
        ${this.renderInlineValidation()}
      </div>
    `}},l([p()],R.prototype,`slottedChildren`,void 0),l([f(`syn-tooltip`)],R.prototype,`tooltipElement`,void 0),l([o()],R.prototype,`validationMessage`,void 0),l([o()],R.prototype,`eagerFirstMount`,void 0),l([o()],R.prototype,`isInternalTriggeredInvalid`,void 0),l([o()],R.prototype,`isValid`,void 0),l([o()],R.prototype,`alertSize`,void 0),l([o()],R.prototype,`hasFocus`,void 0),l([a({reflect:!0})],R.prototype,`variant`,void 0),l([a({attribute:`hide-icon`,reflect:!0,type:Boolean})],R.prototype,`hideIcon`,void 0),l([a({reflect:!0})],R.prototype,`on`,void 0),l([a({attribute:`custom-validation-message`,type:String})],R.prototype,`customValidationMessage`,void 0),l([a({type:Boolean})],R.prototype,`eager`,void 0),l([g(`on`,{waitUntilFirstUpdate:!0})],R.prototype,`handleListenerChange`,null),l([g(`eager`,{waitUntilFirstUpdate:!1})],R.prototype,`handleEagerChange`,null),l([g(`customValidationMessage`,{waitUntilFirstUpdate:!0})],R.prototype,`handleCustomValidationMessageChange`,null),R=l([v(`SynValidate`)],R),z=R})))()}function V(){return(V=e((()=>{B(),z.define(`syn-validate`)})))()}export{V as t};