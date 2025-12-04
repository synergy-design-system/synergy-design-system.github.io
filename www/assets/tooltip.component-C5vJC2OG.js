import{p as c,a as u,g as y,b as m,s as g}from"./animation-registry-l4L8bmT6.js";import{e as v}from"./class-map-D4IBD07P.js";import{j as w,x as b}from"./iframe-DEjDpRef.js";import{L as k}from"./localize-Dh03wnLC.js";import{S as C,c as _,n as s}from"./synergy-element-9YQF5Oan.js";import{a as l}from"./query-DAIS6qJ0.js";import{w as f}from"./event-B0iVuGLD.js";import{w as d}from"./watch-CEsCE2EF.js";import{S as x}from"./popup.component-W97KsTIg.js";const T=w`
	/* stylelint-disable */
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--syn-tooltip-arrow-size);
    --arrow-color: var(--syn-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--syn-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--syn-tooltip-border-radius);
    background-color: var(--syn-tooltip-background-color);
    font-family: var(--syn-tooltip-font-family);
    font-size: var(--syn-tooltip-font-size);
    font-weight: var(--syn-tooltip-font-weight);
    line-height: var(--syn-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--syn-tooltip-color);
    padding: var(--syn-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,D=w`
  /* Write custom CSS here */
  .tooltip__body {
    box-shadow: var(--syn-shadow-large);
  }

  /** #640: Adjust the zIndex of the arrow to make sure the box-shadow above does not bleed out */
  :host ::part(arrow) {
    z-index: 0 !important;
  }
`;var S=Object.defineProperty,z=Object.getOwnPropertyDescriptor,e=(n,t,i,a)=>{for(var r=a>1?void 0:a?z(t,i):t,p=n.length-1,h;p>=0;p--)(h=n[p])&&(r=(a?h(t,i,r):h(r))||r);return a&&r&&S(t,i,r),r};class o extends C{constructor(){super(),this.localize=new k(this),this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=c(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=c(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static{this.styles=[_,T,D]}static{this.dependencies={"syn-popup":x}}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await u(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=y(this,"tooltip.show",{dir:this.localize.dir()});await m(this.popup.popup,t,i),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await u(this.body);const{keyframes:t,options:i}=y(this,"tooltip.hide",{dir:this.localize.dir()});await m(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,f(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,f(this,"syn-after-hide")}render(){return b`
      <syn-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${v({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </syn-popup>
    `}}e([l("slot:not([name])")],o.prototype,"defaultSlot",2);e([l(".tooltip__body")],o.prototype,"body",2);e([l("syn-popup")],o.prototype,"popup",2);e([s()],o.prototype,"content",2);e([s()],o.prototype,"placement",2);e([s({type:Boolean,reflect:!0})],o.prototype,"disabled",2);e([s({type:Number})],o.prototype,"distance",2);e([s({type:Boolean,reflect:!0})],o.prototype,"open",2);e([s({type:Number})],o.prototype,"skidding",2);e([s()],o.prototype,"trigger",2);e([s({type:Boolean})],o.prototype,"hoist",2);e([d("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);e([d(["content","distance","hoist","placement","skidding"])],o.prototype,"handleOptionsChange",1);e([d("disabled")],o.prototype,"handleDisabledChange",1);g("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});g("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});export{o as S};
