import{w as g,u as v,g as d,a as w}from"./library-6WV9-XO2.js";import{i as f,x as S,e as C}from"./directive-helpers-DGrfjhaU.js";import{n as h}from"./property-BGzwfL48.js";import{w as y}from"./watch-CEsCE2EF.js";import{S as R,c as L}from"./component.styles-Bzr6o2G3.js";const I=f`
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
`,E=f`
  /* Write custom CSS here */
`;var A=Object.defineProperty,_=Object.getOwnPropertyDescriptor,a=(u,t,i,e)=>{for(var r=e>1?void 0:e?_(t,i):t,s=u.length-1,o;s>=0;s--)(o=u[s])&&(r=(e?o(t,i,r):o(r))||r);return e&&r&&A(t,i,r),r};const l=Symbol(),c=Symbol();let m;const b=new Map;class n extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}static{this.styles=[L,I,E]}async resolveIcon(t,i){let e;if(i?.spriteSheet)return this.svg=S`<svg part="svg">
        <use part="use" href="${t}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library==="system"){if(!t)return l;e=new Response(t,{status:200})}else try{if(e=await fetch(t,{mode:"cors"}),!e.ok)return e.status===410?l:c}catch{return c}try{const r=document.createElement("div");r.innerHTML=await e.text();const s=r.firstElementChild;if(s?.tagName?.toLowerCase()!=="svg")return l;m||(m=new DOMParser);const p=m.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return p?(p.part.add("svg"),document.adoptNode(p)):l}catch{return l}}connectedCallback(){super.connectedCallback(),g(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),v(this)}getIconSource(){const t=d(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:i}=this.getIconSource(),e=i?d(this.library):void 0;if(!t){this.svg=null;return}let r=b.get(t);if(r||(r=this.resolveIcon(t,e),b.set(t,r)),!this.initialRender)return;const s=await r;if(s===c&&b.delete(t),t===this.getIconSource().url){if(C(s)){if(this.svg=s,e){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof e.mutator=="function"&&o&&e.mutator(o)}return}switch(s){case c:case l:this.svg=null,this.emit("syn-error");break;default:this.svg=s.cloneNode(!0),e?.mutator?.(this.svg),this.emit("syn-load")}}}render(){return this.svg}}a([w()],n.prototype,"svg",2);a([h({reflect:!0})],n.prototype,"name",2);a([h()],n.prototype,"src",2);a([h()],n.prototype,"label",2);a([h({reflect:!0})],n.prototype,"library",2);a([y("label")],n.prototype,"handleLabelChange",1);a([y(["name","src","library"])],n.prototype,"setIcon",1);export{n as S};
