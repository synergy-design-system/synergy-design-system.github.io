import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,Nt as r,a as i,c as a,jt as o,l as s,o as c,qt as l}from"./iframe-BLAzlACc.js";import{_ as u,a as d,i as f,n as p,o as m,r as h,s as g,t as _,y as v}from"./synergy-element-A58418dp.js";import{n as y,t as b}from"./watch-I6gMK-uE.js";var x,S=e((()=>{n(),x=l`
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
`})),C,w=e((()=>{n(),C=l`
  /* Write custom CSS here */
`})),T,E,D,O,k,A=e((()=>{c(),n(),o(),g(),b(),m(),p(),S(),w(),f(),T=Symbol(),E=Symbol(),O=new Map,k=class extends _{constructor(...e){super(...e),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}static{this.styles=[d,x,C]}async resolveIcon(e,n){let r;if(n?.spriteSheet)return this.svg=t`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return T;r=new Response(e,{status:200})}else try{if(r=await fetch(e,{mode:`cors`}),!r.ok)return r.status===410?T:E}catch{return E}try{let e=document.createElement(`div`);e.innerHTML=await r.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return T;D||=new DOMParser;let n=D.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return n?(n.part.add(`svg`),document.adoptNode(n)):T}catch{return T}}connectedCallback(){super.connectedCallback(),s(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),a(this)}getIconSource(){let e=i(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?i(this.library):void 0;if(!e){this.svg=null;return}let a=O.get(e);if(a||(a=this.resolveIcon(e,n),O.set(e,a)),!this.initialRender)return;let o=await a;if(o===E&&O.delete(e),e===this.getIconSource().url){if(r(o)){if(this.svg=o,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(o){case E:case T:this.svg=null,this.emit(`syn-error`);break;default:this.svg=o.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}},h([u()],k.prototype,`svg`,void 0),h([v({reflect:!0})],k.prototype,`name`,void 0),h([v()],k.prototype,`src`,void 0),h([v()],k.prototype,`label`,void 0),h([v({reflect:!0})],k.prototype,`library`,void 0),h([y(`label`)],k.prototype,`handleLabelChange`,null),h([y([`name`,`src`,`library`])],k.prototype,`setIcon`,null)}));export{A as n,k as t};