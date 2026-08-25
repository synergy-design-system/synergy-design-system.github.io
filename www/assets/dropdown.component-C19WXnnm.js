import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-BeBxrfuL.js";import{t as d}from"./query-DOHNhzf6.js";import{r as f,t as p}from"./if-defined-DmmMeZVG.js";import{n as m,t as h}from"./class-map-HZwHklGF.js";import{n as g,t as _}from"./localize-Du3bqz3O.js";import{n as v}from"./watch-Q8hEwzVb.js";import{a as y,i as b,l as x,n as S,t as C}from"./animation-registry-DCzWq2z4.js";import{n as w}from"./event-B7qjsglH.js";import{n as T,t as E}from"./popup.component-CuRzav0u.js";import{a as D,r as O,t as k}from"./tabbable-DTCXBXIp.js";var A;function j(){return(j=e((()=>{r(),A=n`
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
    border-radius: var(--syn-border-radius-medium);
    box-shadow: var(--syn-shadow-large);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(syn-menu) {
    max-height: var(--auto-size-available-height) !important;
    max-width: var(--auto-size-available-width) !important;
  }
`})))()}var M;function N(){return(N=e((()=>{h(),S(),O(),r(),p(),_(),l(),s(),o(),T(),j(),M=class extends u{constructor(...e){super(...e),this.localize=new g(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`syn-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?D():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`syn-menu`&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[i,A]}static{this.dependencies={"syn-popup":E}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getContainingModalHost(){return this.closest(`syn-dialog, syn-drawer`)}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`syn-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>k(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`syn-button`:case`syn-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,w(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,w(this,`syn-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`syn-select`,this.handlePanelSelect),this.getContainingModalHost()?.modal?.activateExternal(),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`syn-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),this.getContainingModalHost()?.modal?.deactivateExternal(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`syn-show`),this.addOpenListeners(),await x(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=C(this,`dropdown.show`,{dir:this.localize.dir()});await y(this.popup.popup,e,t),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.removeOpenListeners(),await x(this);let{keyframes:e,options:t}=C(this,`dropdown.hide`,{dir:this.localize.dir()});await y(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}}render(){return t`
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
        sync=${f(this.sync?this.sync:void 0)}
        class=${m({dropdown:!0,"dropdown--open":this.open})}
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

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </syn-popup>
    `}},c([d(`.dropdown`)],M.prototype,`popup`,void 0),c([d(`.dropdown__trigger`)],M.prototype,`trigger`,void 0),c([d(`.dropdown__panel`)],M.prototype,`panel`,void 0),c([a({type:Boolean,reflect:!0})],M.prototype,`open`,void 0),c([a({reflect:!0})],M.prototype,`placement`,void 0),c([a({type:Boolean,reflect:!0})],M.prototype,`disabled`,void 0),c([a({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],M.prototype,`stayOpenOnSelect`,void 0),c([a({attribute:!1})],M.prototype,`containingElement`,void 0),c([a({type:Number})],M.prototype,`distance`,void 0),c([a({type:Number})],M.prototype,`skidding`,void 0),c([a({reflect:!0})],M.prototype,`sync`,void 0),c([v(`open`,{waitUntilFirstUpdate:!0})],M.prototype,`handleOpenChange`,null),b(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),b(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}})})))()}export{N as n,M as t};