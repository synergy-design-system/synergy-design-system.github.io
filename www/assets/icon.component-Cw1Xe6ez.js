import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{C as i,a,i as o,n as s,t as c,x as l}from"./library-DDo5iplL.js";import{a as u,d,l as f,n as p,o as m,r as h,s as g,t as _}from"./synergy-element-DYwwX6ls.js";import{n as v}from"./watch-Q8hEwzVb.js";var y;function b(){return(b=e((()=>{r(),y=n`
  :host {
    box-sizing: content-box !important;
    display: inline-block;
    height: 1em;
    width: 1em;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`})))()}var x,S,C,w,T;function E(){return(E=e((()=>{s(),r(),l(),g(),m(),p(),b(),x=Symbol(),S=Symbol(),w=new Map,T=class extends _{constructor(...e){super(...e),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}static{this.styles=[u,y]}async resolveIcon(e,n){let r;if(n?.spriteSheet)return this.svg=t`<svg part="svg">
        <use part="use" href="${e}" width="100%" height="100%"></use>
      </svg>`,this.svg;if(this.library===`system`){if(!e)return x;r=new Response(e,{status:200})}else try{if(r=await fetch(e,{mode:`cors`}),!r.ok)return r.status===410?x:S}catch{return S}try{let e=document.createElement(`div`);e.innerHTML=await r.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return x;C||=new DOMParser;let n=C.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return n?(n.part.add(`svg`),document.adoptNode(n)):x}catch{return x}}connectedCallback(){super.connectedCallback(),a(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),o(this)}getIconSource(){let e=c(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?c(this.library):void 0;if(!e){this.svg=null;return}let r=w.get(e);if(r||(r=this.resolveIcon(e,n),w.set(e,r)),!this.initialRender)return;let a=await r;if(a===S&&w.delete(e),e===this.getIconSource().url){if(i(a)){if(this.svg=a,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(a){case S:case x:this.svg=null,this.emit(`syn-error`);break;default:this.svg=a.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`syn-load`)}}}render(){return this.svg}},h([f()],T.prototype,`svg`,void 0),h([d({reflect:!0})],T.prototype,`name`,void 0),h([d()],T.prototype,`src`,void 0),h([d()],T.prototype,`label`,void 0),h([d({reflect:!0})],T.prototype,`library`,void 0),h([v(`label`)],T.prototype,`handleLabelChange`,null),h([v([`name`,`src`,`library`])],T.prototype,`setIcon`,null)})))()}export{E as n,T as t};