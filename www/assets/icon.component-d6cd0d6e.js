import{i as C,x,e as S}from"./directive-helpers-a6c66f8a.js";import{c as M,r as I,n as v,w as b,S as Z}from"./component.styles-86aba3f6.js";let L="";function w(e){L=e}function B(e=""){if(!L){const t=[...document.getElementsByTagName("script")],n=t.find(s=>s.hasAttribute("data-synergy"));if(n)w(n.getAttribute("data-synergy"));else{const s=t.find(i=>/synergy(\.min)?\.js($|\?)/.test(i.src)||/synergy-autoloader(\.min)?\.js($|\?)/.test(i.src));let r="";s&&(r=s.getAttribute("src")),w(r.split("/").slice(0,-1).join("/"))}}return L.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}const R={name:"default",resolver:e=>B(`assets/icons/${e}.svg`)},m={caret:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M16.59 8.295L12 12.875L7.41 8.295L6 9.705L12 15.705L18 9.705L16.59 8.295Z"/></svg>`,check:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M8.79496 15.875L4.62496 11.705L3.20496 13.115L8.79496 18.705L20.795 6.705L19.385 5.295L8.79496 15.875Z"/></svg>`,"eye-slash":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12.005 6.5C14.765 6.5 17.005 8.74 17.005 11.5C17.005 12.15 16.875 12.76 16.645 13.33L19.565 16.25C21.075 14.99 22.265 13.36 22.995 11.5C21.265 7.11 16.995 4 11.995 4C10.595 4 9.255 4.25 8.01501 4.7L10.175 6.86C10.745 6.63 11.355 6.5 12.005 6.5ZM2.005 3.77L4.745 6.51C3.085 7.8 1.785 9.52 1.005 11.5C2.735 15.89 7.005 19 12.005 19C13.555 19 15.035 18.7 16.385 18.16L16.805 18.58L19.735 21.5L21.005 20.23L3.275 2.5L2.005 3.77ZM7.53501 9.3L9.085 10.85C9.035 11.06 9.005 11.28 9.005 11.5C9.005 13.16 10.345 14.5 12.005 14.5C12.225 14.5 12.445 14.47 12.655 14.42L14.205 15.97C13.535 16.3 12.795 16.5 12.005 16.5C9.245 16.5 7.005 14.26 7.005 11.5C7.005 10.71 7.20501 9.97 7.53501 9.3ZM11.845 8.52L14.995 11.67L15.015 11.51C15.015 9.85 13.675 8.51 12.015 8.51L11.845 8.52Z"/></svg>`,eye:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/></svg>`,indeterminate:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 13H5V11H19V13Z"/></svg>`,radio:`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"/></svg>`,"x-circle-fill":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"/></svg>`,"x-lg":`
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>`},A={name:"system",resolver:e=>e in m?`data:image/svg+xml,${encodeURIComponent(m[e])}`:""};let g=[R,A],u=[];function E(e){u.push(e)}function $(e){u=u.filter(t=>t!==e)}function y(e){return g.find(t=>t.name===e)}function N(e,t){P(e),g.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),u.forEach(n=>{n.library===e&&n.setIcon()})}function P(e){g=g.filter(t=>t.name!==e)}const _=C`
  /* Write custom CSS here */
`,O=C`
	/* stylelint-disable */
  ${M}

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

  ${_}
`;var j=Object.defineProperty,k=Object.getOwnPropertyDescriptor,l=(e,t,n,s)=>{for(var r=s>1?void 0:s?k(t,n):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(r=(s?c(t,n,r):c(r))||r);return s&&r&&j(t,n,r),r};const a=Symbol(),h=Symbol();let f;const p=new Map;class o extends Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,n){let s;if(n?.spriteSheet)return x`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?a:h}catch{return h}try{const r=document.createElement("div");r.innerHTML=await s.text();const i=r.firstElementChild;if(i?.tagName?.toLowerCase()!=="svg")return a;f||(f=new DOMParser);const d=f.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):a}catch{return a}}connectedCallback(){super.connectedCallback(),E(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),$(this)}getIconSource(){const t=y(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:n}=this.getIconSource(),s=n?y(this.library):void 0;if(!t){this.svg=null;return}let r=p.get(t);if(r||(r=this.resolveIcon(t,s),p.set(t,r)),!this.initialRender)return;const i=await r;if(i===h&&p.delete(t),t===this.getIconSource().url){if(S(i)){this.svg=i;return}switch(i){case h:case a:this.svg=null,this.emit("syn-error");break;default:this.svg=i.cloneNode(!0),s?.mutator?.(this.svg),this.emit("syn-load")}}}render(){return this.svg}}o.styles=O;l([I()],o.prototype,"svg",2);l([v({reflect:!0})],o.prototype,"name",2);l([v()],o.prototype,"src",2);l([v()],o.prototype,"label",2);l([v({reflect:!0})],o.prototype,"library",2);l([b("label")],o.prototype,"handleLabelChange",1);l([b(["name","src","library"])],o.prototype,"setIcon",1);export{o as S,N as r};
//# sourceMappingURL=icon.component-d6cd0d6e.js.map
