import{j as y,x as g,w as v,v as w,y as f,z as S}from"./iframe-C_zxIagT.js";import{n as h,S as C,c as R}from"./synergy-element-BPI6Vef6.js";import{w as m}from"./watch-CEsCE2EF.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(c){return h({...c,state:!0,attribute:!1})}const I=y`
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
`,E=y`
  /* Write custom CSS here */
`;var A=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(c,t,i,e)=>{for(var r=e>1?void 0:e?_(t,i):t,s=c.length-1,a;s>=0;s--)(a=c[s])&&(r=(e?a(t,i,r):a(r))||r);return e&&r&&A(t,i,r),r};const l=Symbol(),u=Symbol();let d;const p=new Map;class n extends C{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}static{this.styles=[R,I,E]}async resolveIcon(t,i){let e;if(i?.spriteSheet)return this.svg=g`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library==="system"){if(!t)return l;e=new Response(t,{status:200})}else try{if(e=await fetch(t,{mode:"cors"}),!e.ok)return e.status===410?l:u}catch{return u}try{const r=document.createElement("div");r.innerHTML=await e.text();const s=r.firstElementChild;if(s?.tagName?.toLowerCase()!=="svg")return l;d||(d=new DOMParser);const b=d.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return b?(b.part.add("svg"),document.adoptNode(b)):l}catch{return l}}connectedCallback(){super.connectedCallback(),v(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),w(this)}getIconSource(){const t=f(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:i}=this.getIconSource(),e=i?f(this.library):void 0;if(!t){this.svg=null;return}let r=p.get(t);if(r||(r=this.resolveIcon(t,e),p.set(t,r)),!this.initialRender)return;const s=await r;if(s===u&&p.delete(t),t===this.getIconSource().url){if(S(s)){if(this.svg=s,e){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof e.mutator=="function"&&a&&e.mutator(a)}return}switch(s){case u:case l:this.svg=null,this.emit("syn-error");break;default:this.svg=s.cloneNode(!0),e?.mutator?.(this.svg),this.emit("syn-load")}}}render(){return this.svg}}o([L()],n.prototype,"svg",2);o([h({reflect:!0})],n.prototype,"name",2);o([h()],n.prototype,"src",2);o([h()],n.prototype,"label",2);o([h({reflect:!0})],n.prototype,"library",2);o([m("label")],n.prototype,"handleLabelChange",1);o([m(["name","src","library"])],n.prototype,"setIcon",1);export{n as S,L as r};
