import{R as g,k as _,D as S,i as $}from"./lit-element-BsyMe9HG.js";import{a as z,c as k,S as x,b as E,n as u}from"./icon.component-IjvC4sFt.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(o,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(o,t){return(r,e,n)=>{const s=l=>l.renderRoot?.querySelector(o)??null;return T(r,e,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},A=o=>(...t)=>({_$litDirective$:o,values:t});class C{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,e){this.t=t,this._$AM=r,this.i=e}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=A(class extends C{constructor(o){if(super(o),o.type!==R.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=o.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return g}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=Symbol.for(""),F=o=>{if(o?.r===h)return o?._$litStatic$},D=o=>({_$litStatic$:o,r:h}),v=(o,...t)=>({_$litStatic$:t.reduce((r,e,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+o[n+1],o[0]),r:h}),m=new Map,j=o=>(t,...r)=>{const e=r.length;let n,s;const l=[],f=[];let b,d=0,p=!1;for(;d<e;){for(b=t[d];d<e&&(s=r[d],(n=F(s))!==void 0);)b+=n+t[++d],p=!0;d!==e&&f.push(s),l.push(b),d++}if(d===e&&l.push(t[e]),p){const y=l.join("$$lit$$");(t=m.get(y))===void 0&&(l.raw=l,m.set(y,t=l)),r=f}return o(t,...r)},I=j(_);/**
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

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);
  }

  /* Remove round borders */
  .icon-button:focus-visible {
    border-radius: var(--syn-border-radius-none);
  }

  /* Colors */
  :host([color="currentColor"]) {
    color: currentColor;
  }

  :host([color="primary"]),
  :host([color="primary"]) .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  :host([color="primary"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-color-primary-900);
  }

  :host([color="primary"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-950);
  }

  :host([color="neutral"]),
  :host([color="neutral"]) .icon-button:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-color-neutral-950);
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
`;var U=Object.defineProperty,a=(o,t,r,e)=>{for(var n=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(n=l(t,r,n)||n);return n&&U(t,r,n),n};class i extends z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}static{this.styles=[k,O,P]}static{this.dependencies={"syn-icon":x}}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,r=t?v`a`:v`button`;return I`
      <${r}
        part="base"
        class=${B({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large"})}
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
      </${r}>
    `}}a([w(".icon-button")],i.prototype,"button");a([E()],i.prototype,"hasFocus");a([u()],i.prototype,"name");a([u()],i.prototype,"library");a([u()],i.prototype,"src");a([u()],i.prototype,"href");a([u()],i.prototype,"target");a([u()],i.prototype,"download");a([u()],i.prototype,"label");a([u({reflect:!0})],i.prototype,"size");a([u({reflect:!0})],i.prototype,"color");a([u({type:Boolean,reflect:!0})],i.prototype,"disabled");i.define("syn-icon-button");export{B as R,i as S,T as a,R as b,w as c,c as d,A as e,v as f,C as i,I as k,D as t};
