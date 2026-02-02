import{a as l,g as c,b as u,s as g}from"./animation-registry-l4L8bmT6.js";import{e as y}from"./class-map-BSUKdjAi.js";import{g as w,c as b}from"./tabbable-D_Tgg1nc.js";import{q as f,x as v}from"./iframe-3rQ6MjmB.js";import{o as E}from"./if-defined-Dk8TP58w.js";import{L as k}from"./localize-Dh03wnLC.js";import{S as D,c as C,n as a}from"./synergy-element-CpGm7QZ8.js";import{a as h}from"./query-D0jTsbLw.js";import{w as m}from"./event-B0iVuGLD.js";import{w as O}from"./watch-CEsCE2EF.js";import{S as T}from"./popup.component-B1hW7WKF.js";const _=f`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    border-radius: var(--syn-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(syn-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,L=f`
  /* Write custom CSS here */
`;var S=Object.defineProperty,A=Object.getOwnPropertyDescriptor,i=(d,e,t,s)=>{for(var n=s>1?void 0:s?A(e,t):e,r=d.length-1,p;r>=0;r--)(p=d[r])&&(n=(s?p(e,t,n):p(n))||n);return s&&n&&S(e,t,n),n};class o extends D{constructor(){super(...arguments),this.localize=new k(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="syn-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const t=(s,n)=>{if(!s)return null;const r=s.closest(n);if(r)return r;const p=s.getRootNode();return p instanceof ShadowRoot?t(p.host,n):null};setTimeout(()=>{const s=this.containingElement?.getRootNode()instanceof ShadowRoot?w():document.activeElement;(!this.containingElement||t(s,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[C,_,L]}static{this.dependencies={"syn-popup":T}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),n=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(n=>b(n).start);let s;if(t){switch(t.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,m(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,m(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("syn-select",this.handlePanelSelect),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await l(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=c(this,"dropdown.show",{dir:this.localize.dir()});await u(this.popup.popup,e,t),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await l(this);const{keyframes:e,options:t}=c(this,"dropdown.hide",{dir:this.localize.dir()});await u(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return v`
      <syn-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${E(this.sync?this.sync:void 0)}
        class=${y({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </syn-popup>
    `}}i([h(".dropdown")],o.prototype,"popup",2);i([h(".dropdown__trigger")],o.prototype,"trigger",2);i([h(".dropdown__panel")],o.prototype,"panel",2);i([a({type:Boolean,reflect:!0})],o.prototype,"open",2);i([a({reflect:!0})],o.prototype,"placement",2);i([a({type:Boolean,reflect:!0})],o.prototype,"disabled",2);i([a({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],o.prototype,"stayOpenOnSelect",2);i([a({attribute:!1})],o.prototype,"containingElement",2);i([a({type:Number})],o.prototype,"distance",2);i([a({type:Number})],o.prototype,"skidding",2);i([a({reflect:!0})],o.prototype,"sync",2);i([O("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);g("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});g("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});export{o as S};
