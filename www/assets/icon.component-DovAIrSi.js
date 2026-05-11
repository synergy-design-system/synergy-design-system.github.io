import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,Nt as n,Ot as r,Rt as i,Ut as a,a as o,c as s,l as c,o as l}from"./iframe-rzuzvTqw.js";import{a as u,f as d,i as f,n as p,o as m,p as h,r as g,s as _,t as v}from"./synergy-element-C2gCmwiV.js";import{n as y,t as b}from"./watch-OXZPXmne.js";var x,S=e((()=>{n(),x=a`
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
`})),C,w=e((()=>{n(),C=a`
  /* Write custom CSS here */
`})),T,E,D,O,k,A=e((()=>{l(),n(),r(),_(),b(),m(),p(),S(),w(),f(),T=Symbol(),E=Symbol(),O=new Map,k=class extends v{constructor(...e){super(...e),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}static{this.styles=[u,x,C]}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=i`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return T;n=new Response(e,{status:200})}else try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?T:E}catch{return E}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return T;D||=new DOMParser;let r=D.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):T}catch{return T}}connectedCallback(){super.connectedCallback(),c(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),s(this)}getIconSource(){let e=o(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:n}=this.getIconSource(),r=n?o(this.library):void 0;if(!e){this.svg=null;return}let i=O.get(e);if(i||(i=this.resolveIcon(e,r),O.set(e,i)),!this.initialRender)return;let a=await i;if(a===E&&O.delete(e),e===this.getIconSource().url){if(t(a)){if(this.svg=a,r){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof r.mutator==`function`&&e&&r.mutator(e)}return}switch(a){case E:case T:this.svg=null,this.emit(`syn-error`);break;default:this.svg=a.cloneNode(!0),r?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}},g([d()],k.prototype,`svg`,void 0),g([h({reflect:!0})],k.prototype,`name`,void 0),g([h()],k.prototype,`src`,void 0),g([h()],k.prototype,`label`,void 0),g([h({reflect:!0})],k.prototype,`library`,void 0),g([y(`label`)],k.prototype,`handleLabelChange`,null),g([y([`name`,`src`,`library`])],k.prototype,`setIcon`,null)}));export{A as n,k as t};