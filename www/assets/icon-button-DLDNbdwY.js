import{w as _,x as S,T as z,i as g}from"./lit-element-ZYWMe1i1.js";import{a as w,c as x,S as T,b as E,n as b}from"./icon.component-DCW_tdaV.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j=e=>(...t)=>({_$litDirective$:e,values:t});let C=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=j(class extends C{constructor(e){if(super(e),e.type!==A.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return _}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(e,t){return(r,o,n)=>{const s=i=>i.renderRoot?.querySelector(e)??null;if(t){const{get:i,set:h}=typeof o=="object"?r:n??(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return v(r,o,{get(){let l=i.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&h.call(this,l)),l}})}return v(r,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),F=e=>{if(e?.r===p)return e?._$litStatic$},V=e=>({_$litStatic$:e,r:p}),m=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:p}),$=new Map,P=e=>(t,...r)=>{const o=r.length;let n,s;const i=[],h=[];let l,u=0,f=!1;for(;u<o;){for(l=t[u];u<o&&(s=r[u],(n=F(s))!==void 0);)l+=n+t[++u],f=!0;u!==o&&h.push(s),i.push(l),u++}if(u===o&&i.push(t[o]),f){const y=i.join("$$lit$$");(t=$.get(y))===void 0&&(i.raw=i,$.set(y,t=i)),r=h}return e(t,...r)},R=P(S);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=e=>e??z,U=g`
	/* stylelint-disable */
  :host {
    display: inline-block;
    color: var(--syn-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--syn-spacing-x-small);
    cursor: pointer;
    transition: var(--syn-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,k=g`
  .icon-button {
    border-radius: 0;
    color: currentColor;
    font-size: inherit;
  }

  /* Color variants */
  .icon-button--neutral,
  .icon-button--neutral:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-color-neutral-950);
  }

  .icon-button--primary,
  .icon-button--primary:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button--primary:hover:not(.icon-button--disabled) {
    color: var(--syn-color-primary-900);
  }

  .icon-button--primary:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-950);
  }

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);
  }

  /* Remove round borders */
  .icon-button:focus-visible {
    border-radius: var(--syn-border-radius-none);
  }


  /* Sizes */
  .icon-button--small {
    font-size: var(--syn-font-size-medium);
  }

  .icon-button--medium {
    font-size: var(--syn-font-size-x-large);

  }

  .icon-button--large {
    font-size: var(--syn-font-size-2x-large);
  }

  /* Force user to set "label" prop */
  .icon-button[aria-label=""] {
    border: var(--syn-border-width-large) var(--syn-color-error-600) solid;
  }

  .icon-button[aria-label=""]::after {
    content: "Set label prop for a11y to get rid of this text and border!";
    font-size: var(--syn-font-size-2x-small);
    margin-left: var(--syn-spacing-2x-small);
  }
`;var I=Object.defineProperty,D=Object.getOwnPropertyDescriptor,c=(e,t,r,o)=>{for(var n=o>1?void 0:o?D(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&I(t,r,n),n};class a extends w{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}static{this.styles=[x,U,k]}static{this.dependencies={"syn-icon":T}}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,r=t?m`a`:m`button`;return R`
      <${r}
        part="base"
        class=${O({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large","icon-button--primary":this.color==="primary","icon-button--neutral":this.color==="neutral"})}
        ?disabled=${d(t?void 0:this.disabled)}
        type=${d(t?void 0:"button")}
        href=${d(t?this.href:void 0)}
        target=${d(t?this.target:void 0)}
        download=${d(t?this.download:void 0)}
        rel=${d(t&&this.target?"noreferrer noopener":void 0)}
        role=${d(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${d(this.name)}
          library=${d(this.library)}
          src=${d(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${r}>
    `}}c([B(".icon-button")],a.prototype,"button",2);c([E()],a.prototype,"hasFocus",2);c([b()],a.prototype,"name",2);c([b()],a.prototype,"library",2);c([b()],a.prototype,"src",2);c([b()],a.prototype,"href",2);c([b()],a.prototype,"target",2);c([b()],a.prototype,"download",2);c([b()],a.prototype,"label",2);c([b({reflect:!0})],a.prototype,"size",2);c([b({reflect:!0})],a.prototype,"color",2);c([b({type:Boolean,reflect:!0})],a.prototype,"disabled",2);a.define("syn-icon-button");export{a as S,O as a,B as b,C as c,j as e,V as i,R as n,d as o,m as s,A as t};
