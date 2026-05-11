import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-rzuzvTqw.js";import{n as i,t as a}from"./class-map-BSEJ0nPb.js";import{n as o,t as s}from"./if-defined-yx3P30D8.js";import{n as c,t as l}from"./localize-DnZL8qNz.js";import{a as u,i as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v}from"./synergy-element-C2gCmwiV.js";import{n as y,t as b}from"./watch-OXZPXmne.js";import{a as x,i as S,l as C,n as w,o as T,t as E}from"./animation-registry-DTpGRZQp.js";import{n as D,t as O}from"./event-CAQhbrA7.js";import{n as k,t as A}from"./popup.component-BA0jsqi6.js";import{a as j,o as M,r as N,t as P}from"./tabbable-DeoUxXwQ.js";var F,I=e((()=>{t(),F=r`
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
`})),L,R=e((()=>{T(),a(),w(),M(),N(),t(),s(),l(),g(),O(),b(),p(),f(),k(),I(),d(),L=class extends _{constructor(...e){super(...e),this.localize=new c(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`syn-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?j():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`syn-menu`&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[u,F]}static{this.dependencies={"syn-popup":A}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`syn-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>P(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`syn-button`:case`syn-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,D(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,D(this,`syn-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`syn-select`,this.handlePanelSelect),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`syn-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`syn-show`),this.addOpenListeners(),await C(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=E(this,`dropdown.show`,{dir:this.localize.dir()});await x(this.popup.popup,e,t),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.removeOpenListeners(),await C(this);let{keyframes:e,options:t}=E(this,`dropdown.hide`,{dir:this.localize.dir()});await x(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}}render(){return n`
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
        sync=${o(this.sync?this.sync:void 0)}
        class=${i({dropdown:!0,"dropdown--open":this.open})}
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
    `}},h([v(`.dropdown`)],L.prototype,`popup`,void 0),h([v(`.dropdown__trigger`)],L.prototype,`trigger`,void 0),h([v(`.dropdown__panel`)],L.prototype,`panel`,void 0),h([m({type:Boolean,reflect:!0})],L.prototype,`open`,void 0),h([m({reflect:!0})],L.prototype,`placement`,void 0),h([m({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),h([m({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],L.prototype,`stayOpenOnSelect`,void 0),h([m({attribute:!1})],L.prototype,`containingElement`,void 0),h([m({type:Number})],L.prototype,`distance`,void 0),h([m({type:Number})],L.prototype,`skidding`,void 0),h([m({reflect:!0})],L.prototype,`sync`,void 0),h([y(`open`,{waitUntilFirstUpdate:!0})],L.prototype,`handleOpenChange`,null),S(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),S(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}})}));export{R as n,L as t};