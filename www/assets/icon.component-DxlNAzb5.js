import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{C as i,a,i as o,n as s,t as c,x as l}from"./library-DiyAL7yZ.js";import{_ as u,a as d,i as f,n as p,o as m,r as h,s as g,t as _,y as v}from"./synergy-element-Ca3MURqZ.js";import{n as y,t as b}from"./watch-RA3ULoLi.js";var x,S=e((()=>{r(),x=n`
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
`})),C,w=e((()=>{r(),C=n`
  /* Write custom CSS here */
`})),T,E,D,O,k,A=e((()=>{s(),r(),l(),g(),b(),m(),p(),S(),w(),f(),T=Symbol(),E=Symbol(),O=new Map,k=class extends _{constructor(...e){super(...e),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}static{this.styles=[d,x,C]}async resolveIcon(e,n){let r;if(n?.spriteSheet)return this.svg=t`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return T;r=new Response(e,{status:200})}else try{if(r=await fetch(e,{mode:`cors`}),!r.ok)return r.status===410?T:E}catch{return E}try{let e=document.createElement(`div`);e.innerHTML=await r.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return T;D||=new DOMParser;let n=D.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return n?(n.part.add(`svg`),document.adoptNode(n)):T}catch{return T}}connectedCallback(){super.connectedCallback(),a(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),o(this)}getIconSource(){let e=c(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?c(this.library):void 0;if(!e){this.svg=null;return}let r=O.get(e);if(r||(r=this.resolveIcon(e,n),O.set(e,r)),!this.initialRender)return;let a=await r;if(a===E&&O.delete(e),e===this.getIconSource().url){if(i(a)){if(this.svg=a,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(a){case E:case T:this.svg=null,this.emit(`syn-error`);break;default:this.svg=a.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}},h([u()],k.prototype,`svg`,void 0),h([v({reflect:!0})],k.prototype,`name`,void 0),h([v()],k.prototype,`src`,void 0),h([v()],k.prototype,`label`,void 0),h([v({reflect:!0})],k.prototype,`library`,void 0),h([y(`label`)],k.prototype,`handleLabelChange`,null),h([y([`name`,`src`,`library`])],k.prototype,`setIcon`,null)}));export{A as n,k as t};