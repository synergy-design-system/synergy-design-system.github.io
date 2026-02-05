import{v as u,c as f,q as p,w as b}from"./iframe-CvU34O_B.js";const v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:u},g=(o=v,t,e)=>{const{kind:r,metadata:i}=e;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),r==="accessor"){const{name:n}=e;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,c,o)},init(a){return a!==void 0&&this.C(n,void 0,o,a),a}}}if(r==="setter"){const{name:n}=e;return function(a){const c=this[n];t.call(this,a),this.requestUpdate(n,c,o)}}throw Error("Unsupported decorator location: "+r)};function l(o){return(t,e)=>typeof e=="object"?g(o,t,e):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}const m=p`
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
`;var y=Object.defineProperty,d=(o,t,e,r)=>{for(var i=void 0,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=n(t,e,i)||i);return i&&y(t,e,i),i};class h extends b{constructor(){super(),this.#e=!1,this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...e});return this.dispatchEvent(r),r}static{this.version="3.2.0"}static define(t,e=this,r={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let s=" (unknown version)",n=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${n} has already been registered.`)}static{this.dependencies={}}#e;attributeChangedCallback(t,e,r){this.#e||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),this.#e=!0),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}}d([l()],h.prototype,"dir");d([l()],h.prototype,"lang");export{h as S,m as c,l as n};
