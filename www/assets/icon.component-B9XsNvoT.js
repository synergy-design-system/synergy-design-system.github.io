import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{C as i,a,i as o,n as s,t as c,x as l}from"./library-DDo5iplL.js";import{a as u,d,l as f,n as p,o as m,r as h,s as g,t as _}from"./synergy-element-Dt4MSOQD.js";import{n as v}from"./watch-Q8hEwzVb.js";var y;function b(){return(b=e((()=>{r(),y=n`
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
`})))()}var x;function S(){return(S=e((()=>{r(),x=n`
  /* Write custom CSS here */
`})))()}var C,w,T,E,D;function O(){return(O=e((()=>{s(),r(),l(),g(),m(),p(),b(),S(),C=Symbol(),w=Symbol(),E=new Map,D=class extends _{constructor(...e){super(...e),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}static{this.styles=[u,y,x]}async resolveIcon(e,n){let r;if(n?.spriteSheet)return this.svg=t`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return C;r=new Response(e,{status:200})}else try{if(r=await fetch(e,{mode:`cors`}),!r.ok)return r.status===410?C:w}catch{return w}try{let e=document.createElement(`div`);e.innerHTML=await r.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return C;T||=new DOMParser;let n=T.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return n?(n.part.add(`svg`),document.adoptNode(n)):C}catch{return C}}connectedCallback(){super.connectedCallback(),a(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),o(this)}getIconSource(){let e=c(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?c(this.library):void 0;if(!e){this.svg=null;return}let r=E.get(e);if(r||(r=this.resolveIcon(e,n),E.set(e,r)),!this.initialRender)return;let a=await r;if(a===w&&E.delete(e),e===this.getIconSource().url){if(i(a)){if(this.svg=a,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(a){case w:case C:this.svg=null,this.emit(`syn-error`);break;default:this.svg=a.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}},h([f()],D.prototype,`svg`,void 0),h([d({reflect:!0})],D.prototype,`name`,void 0),h([d()],D.prototype,`src`,void 0),h([d()],D.prototype,`label`,void 0),h([d({reflect:!0})],D.prototype,`library`,void 0),h([v(`label`)],D.prototype,`handleLabelChange`,null),h([v([`name`,`src`,`library`])],D.prototype,`setIcon`,null)})))()}export{O as n,D as t};