import{w as g,x as _,T as S,i as $}from"./lit-element-DILkAbkc.js";import{a as z,c as x,S as T,b as w,n as u}from"./icon.component-V1lrfYz6.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},k=o=>(...t)=>({_$litDirective$:o,values:t});let A=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,e){this._$Ct=t,this._$AM=n,this._$Ci=e}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=k(class extends A{constructor(o){if(super(o),o.type!==E.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=o.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return g}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(o,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(o,t){return(n,e,r)=>{const s=l=>l.renderRoot?.querySelector(o)??null;return B(n,e,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=Symbol.for(""),R=o=>{if(o?.r===h)return o?._$litStatic$},N=o=>({_$litStatic$:o,r:h}),v=(o,...t)=>({_$litStatic$:t.reduce((n,e,r)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+o[r+1],o[0]),r:h}),m=new Map,j=o=>(t,...n)=>{const e=n.length;let r,s;const l=[],p=[];let b,d=0,f=!1;for(;d<e;){for(b=t[d];d<e&&(s=n[d],(r=R(s))!==void 0);)b+=r+t[++d],f=!0;d!==e&&p.push(s),l.push(b),d++}if(d===e&&l.push(t[e]),f){const y=l.join("$$lit$$");(t=m.get(y))===void 0&&(l.raw=l,m.set(y,t=l)),n=p}return o(t,...n)},I=j(_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=o=>o??S,O=$`
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
`,P=$`
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
`;var U=Object.defineProperty,a=(o,t,n,e)=>{for(var r=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(r=l(t,n,r)||r);return r&&U(t,n,r),r};class i extends z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}static{this.styles=[x,O,P]}static{this.dependencies={"syn-icon":T}}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,n=t?v`a`:v`button`;return I`
      <${n}
        part="base"
        class=${C({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large","icon-button--primary":this.color==="primary","icon-button--neutral":this.color==="neutral"})}
        ?disabled=${c(t?void 0:this.disabled)}
        type=${c(t?void 0:"button")}
        href=${c(t?this.href:void 0)}
        target=${c(t?this.target:void 0)}
        download=${c(t?this.download:void 0)}
        rel=${c(t&&this.target?"noreferrer noopener":void 0)}
        role=${c(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${c(this.name)}
          library=${c(this.library)}
          src=${c(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${n}>
    `}}a([F(".icon-button")],i.prototype,"button");a([w()],i.prototype,"hasFocus");a([u()],i.prototype,"name");a([u()],i.prototype,"library");a([u()],i.prototype,"src");a([u()],i.prototype,"href");a([u()],i.prototype,"target");a([u()],i.prototype,"download");a([u()],i.prototype,"label");a([u({reflect:!0})],i.prototype,"size");a([u({reflect:!0})],i.prototype,"color");a([u({type:Boolean,reflect:!0})],i.prototype,"disabled");i.define("syn-icon-button");export{i as S,C as a,F as b,A as c,k as e,N as i,I as n,c as o,v as s,E as t};
