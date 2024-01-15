import{w as _,x as S,T as z,i as g}from"./directive-helpers-b15f7890.js";import{c as w,S as x,a as T,n as b,b as E}from"./icon.component-bf7bc8ad.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j=e=>(...t)=>({_$litDirective$:e,values:t});let C=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=j(class extends C{constructor(e){if(super(e),e.type!==A.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.it)o in t||(r.remove(o),this.it.delete(o));for(const o in t){const n=!!t[o];n===this.it.has(o)||this.st?.has(o)||(n?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return _}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),B=e=>{if(e?.r===p)return e?._$litStatic$},V=e=>({_$litStatic$:e,r:p}),v=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:p}),m=new Map,F=e=>(t,...r)=>{const o=r.length;let n,i;const a=[],h=[];let c,u=0,f=!1;for(;u<o;){for(c=t[u];u<o&&(i=r[u],(n=B(i))!==void 0);)c+=n+t[++u],f=!0;u!==o&&h.push(i),a.push(c),u++}if(u===o&&a.push(t[o]),f){const y=a.join("$$lit$$");(t=m.get(y))===void 0&&(a.raw=a,m.set(y,t=a)),r=h}return e(t,...r)},P=F(S);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=e=>e??z;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(e,t){return(r,o,n)=>{const i=a=>a.renderRoot?.querySelector(e)??null;if(t){const{get:a,set:h}=typeof o=="object"?r:n??(()=>{const c=Symbol();return{get(){return this[c]},set(u){this[c]=u}}})();return $(r,o,{get(){if(t){let c=a.call(this);return c===void 0&&(c=i(this),h.call(this,c)),c}return i(this)}})}return $(r,o,{get(){return i(this)}})}}const k=g`
  .icon-button {
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
`,I=g`
	/* stylelint-disable */
  ${w}

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

  ${k}
`;var U=Object.defineProperty,D=Object.getOwnPropertyDescriptor,l=(e,t,r,o)=>{for(var n=o>1?void 0:o?D(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&U(t,r,n),n};class s extends E{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,r=t?v`a`:v`button`;return P`
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
    `}}s.styles=I;s.dependencies={"syn-icon":x};l([R(".icon-button")],s.prototype,"button",2);l([T()],s.prototype,"hasFocus",2);l([b()],s.prototype,"name",2);l([b()],s.prototype,"library",2);l([b()],s.prototype,"src",2);l([b()],s.prototype,"href",2);l([b()],s.prototype,"target",2);l([b()],s.prototype,"download",2);l([b()],s.prototype,"label",2);l([b({reflect:!0})],s.prototype,"size",2);l([b({reflect:!0})],s.prototype,"color",2);l([b({type:Boolean,reflect:!0})],s.prototype,"disabled",2);s.define("syn-icon-button");export{s as S,R as a,j as b,C as c,O as e,V as i,P as n,d as o,v as s,A as t};
