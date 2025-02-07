import{n as h,u as S,g as w,a as I,w as L}from"./library-BZPO0bHa.js";import{h as _,i as v,k as x,n as A}from"./directive-helpers-CDT6qhDs.js";var O=Object.defineProperty,E=(a,t,r,e)=>{for(var s=void 0,i=a.length-1,n;i>=0;i--)(n=a[i])&&(s=n(t,r,s)||s);return s&&O(t,r,s),s};class y extends _{constructor(){super(),this.#t=!1,this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,r])=>{this.constructor.define(t,r)})}emit(t,r){const e=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...r});return this.dispatchEvent(e),e}static{this.version="2.19.3"}static define(t,r=this,e={}){const s=customElements.get(t);if(!s){try{customElements.define(t,r,e)}catch{customElements.define(t,class extends r{},e)}return}let i=" (unknown version)",n=i;"version"in r&&r.version&&(i=" v"+r.version),"version"in s&&s.version&&(n=" v"+s.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${t}>${i}, but <${t}>${n} has already been registered.`)}static{this.dependencies={}}#t;attributeChangedCallback(t,r,e){this.#t||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),this.#t=!0),super.attributeChangedCallback(t,r,e)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((r,e)=>{t.has(e)&&this[e]==null&&(this[e]=r)})}}E([h()],y.prototype,"dir");E([h()],y.prototype,"lang");function R(a,t){const r={waitUntilFirstUpdate:!1,...t};return(e,s)=>{const{update:i}=e,n=Array.isArray(a)?a:[a];e.update=function(o){n.forEach(C=>{const f=C;if(o.has(f)){const g=o.get(f),m=this[f];g!==m&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](g,m)}}),i.call(this,o)}}}const P=v`
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
`,k=v`
	/* stylelint-disable */
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,U=v`
  /* Write custom CSS here */
`;var $=Object.defineProperty,M=Object.getOwnPropertyDescriptor,l=(a,t,r,e)=>{for(var s=e>1?void 0:e?M(t,r):t,i=a.length-1,n;i>=0;i--)(n=a[i])&&(s=(e?n(t,r,s):n(s))||s);return e&&s&&$(t,r,s),s};const u=Symbol(),d=Symbol();let b;const p=new Map;class c extends y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}static{this.styles=[P,k,U]}async resolveIcon(t,r){let e;if(r?.spriteSheet)return this.svg=x`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;try{if(e=await fetch(t,{mode:"cors"}),!e.ok)return e.status===410?u:d}catch{return d}try{const s=document.createElement("div");s.innerHTML=await e.text();const i=s.firstElementChild;if(i?.tagName?.toLowerCase()!=="svg")return u;b||(b=new DOMParser);const o=b.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):u}catch{return u}}connectedCallback(){super.connectedCallback(),L(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),S(this)}getIconSource(){const t=w(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:r}=this.getIconSource(),e=r?w(this.library):void 0;if(!t){this.svg=null;return}let s=p.get(t);if(s||(s=this.resolveIcon(t,e),p.set(t,s)),!this.initialRender)return;const i=await s;if(i===d&&p.delete(t),t===this.getIconSource().url){if(A(i)){if(this.svg=i,e){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof e.mutator=="function"&&n&&e.mutator(n)}return}switch(i){case d:case u:this.svg=null,this.emit("syn-error");break;default:this.svg=i.cloneNode(!0),e?.mutator?.(this.svg),this.emit("syn-load")}}}render(){return this.svg}}l([I()],c.prototype,"svg",2);l([h({reflect:!0})],c.prototype,"name",2);l([h()],c.prototype,"src",2);l([h()],c.prototype,"label",2);l([h({reflect:!0})],c.prototype,"library",2);l([R("label")],c.prototype,"handleLabelChange",1);l([R(["name","src","library"])],c.prototype,"setIcon",1);export{c as S,y as a,P as c,R as w};
