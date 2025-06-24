import{k as d,l as h}from"./iframe-T704dET3.js";import{n as l}from"./property-Cf1mp-f_.js";var f=Object.defineProperty,a=(o,e,t,r)=>{for(var i=void 0,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=n(e,t,i)||i);return i&&f(e,t,i),i};class c extends d{constructor(){super(),this.#e=!1,this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(r),r}static{this.version="2.38.0"}static define(e,t=this,r={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let s=" (unknown version)",n=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in i&&i.version&&(n=" v"+i.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${n} has already been registered.`)}static{this.dependencies={}}#e;attributeChangedCallback(e,t,r){this.#e||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),this.#e=!0),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}}a([l()],c.prototype,"dir");a([l()],c.prototype,"lang");const v=h`
	/* stylelint-disable */
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;export{c as S,v as c};
