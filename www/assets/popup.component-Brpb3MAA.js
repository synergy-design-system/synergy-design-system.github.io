import{a as $,o as E,s as w,f as S,b as B,c as k,p as m,e as C,d as A}from"./composed-offset-position.browser.min-DQsihIor.js";import{a as P}from"./static-gmWA-8Kq.js";import{i as R,x}from"./directive-helpers-DGrfjhaU.js";import{L as _}from"./localize-CatY2peN.js";import{n as r}from"./property-BGzwfL48.js";import{a as z}from"./query-DAIS6qJ0.js";import{S as F,c as O}from"./component.styles-Bzr6o2G3.js";const j=R`
	/* stylelint-disable */
  :host {
    --arrow-color: var(--syn-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var L=Object.defineProperty,e=(p,t,o,l)=>{for(var a=void 0,s=p.length-1,h;s>=0;s--)(h=p[s])&&(a=h(t,o,a)||a);return a&&L(t,o,a),a};function N(p){return p!==null&&typeof p=="object"&&"getBoundingClientRect"in p&&("contextElement"in p?p.contextElement instanceof Element:!0)}class i extends F{constructor(){super(...arguments),this.localize=new _(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),o=this.popup.getBoundingClientRect(),l=this.placement.includes("top")||this.placement.includes("bottom");let a=0,s=0,h=0,d=0,u=0,n=0,c=0,f=0;l?t.top<o.top?(a=t.left,s=t.bottom,h=t.right,d=t.bottom,u=o.left,n=o.top,c=o.right,f=o.top):(a=o.left,s=o.bottom,h=o.right,d=o.bottom,u=t.left,n=t.top,c=t.right,f=t.top):t.left<o.left?(a=t.right,s=t.top,h=o.left,d=o.top,u=t.right,n=t.bottom,c=o.left,f=o.bottom):(a=o.right,s=o.top,h=t.left,d=t.top,u=o.right,n=o.bottom,c=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${h}px`),this.style.setProperty("--hover-bridge-top-right-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}static{this.styles=[O,j]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||N(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=$(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[E({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(w({apply:({rects:l})=>{const a=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${l.reference.width}px`:"",this.popup.style.height=s?`${l.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(S({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(B({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(w({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:l,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${l}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(k({element:this.arrowEl,padding:this.arrowPadding}));const o=this.strategy==="absolute"?l=>m.getOffsetParent(l,C):m.getOffsetParent;A(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...m,getOffsetParent:o}}).then(({x:l,y:a,middlewareData:s,placement:h})=>{const d=this.localize.dir()==="rtl",u={top:"bottom",right:"left",bottom:"top",left:"right"}[h.split("-")[0]];if(this.setAttribute("data-current-placement",h),Object.assign(this.popup.style,{left:`${l}px`,top:`${a}px`}),this.arrow){const n=s.arrow.x,c=s.arrow.y;let f="",b="",v="",y="";if(this.arrowPlacement==="start"){const g=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",b=d?g:"",y=d?"":g}else if(this.arrowPlacement==="end"){const g=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=d?"":g,y=d?g:"",v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(y=typeof n=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(y=typeof n=="number"?`${n}px`:"",f=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:f,right:b,bottom:v,left:y,[u]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${P({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${P({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}e([z(".popup")],i.prototype,"popup");e([z(".popup__arrow")],i.prototype,"arrowEl");e([r()],i.prototype,"anchor");e([r({type:Boolean,reflect:!0})],i.prototype,"active");e([r({reflect:!0})],i.prototype,"placement");e([r({reflect:!0})],i.prototype,"strategy");e([r({type:Number})],i.prototype,"distance");e([r({type:Number})],i.prototype,"skidding");e([r({type:Boolean})],i.prototype,"arrow");e([r({attribute:"arrow-placement"})],i.prototype,"arrowPlacement");e([r({attribute:"arrow-padding",type:Number})],i.prototype,"arrowPadding");e([r({type:Boolean})],i.prototype,"flip");e([r({attribute:"flip-fallback-placements",converter:{fromAttribute:p=>p.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:p=>p.join(" ")}})],i.prototype,"flipFallbackPlacements");e([r({attribute:"flip-fallback-strategy"})],i.prototype,"flipFallbackStrategy");e([r({type:Object})],i.prototype,"flipBoundary");e([r({attribute:"flip-padding",type:Number})],i.prototype,"flipPadding");e([r({type:Boolean})],i.prototype,"shift");e([r({type:Object})],i.prototype,"shiftBoundary");e([r({attribute:"shift-padding",type:Number})],i.prototype,"shiftPadding");e([r({attribute:"auto-size"})],i.prototype,"autoSize");e([r()],i.prototype,"sync");e([r({type:Object})],i.prototype,"autoSizeBoundary");e([r({attribute:"auto-size-padding",type:Number})],i.prototype,"autoSizePadding");e([r({attribute:"hover-bridge",type:Boolean})],i.prototype,"hoverBridge");export{i as S};
