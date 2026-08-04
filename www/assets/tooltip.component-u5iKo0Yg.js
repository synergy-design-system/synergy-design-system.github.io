import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-C9GUR4B8.js";import{t as f}from"./query-DOHNhzf6.js";import{n as p,t as m}from"./class-map-HZwHklGF.js";import{n as h,t as g}from"./localize-Du3bqz3O.js";import{n as _}from"./watch-Q8hEwzVb.js";import{a as v,i as y,l as b,n as x,s as S,t as C}from"./animation-registry-DCzWq2z4.js";import{n as w}from"./event-B7qjsglH.js";import{n as T,t as E}from"./popup.component-m19NDUeB.js";var D;function O(){return(O=e((()=>{r(),D=n`
  /* stylelint-disable property-no-vendor-prefix */
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  /** #640: Adjust the zIndex of the arrow to make sure the box-shadow above does not bleed out */
  :host ::part(arrow) {
    z-index: 0 !important;
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
    background-color: var(--syn-tooltip-background-color);
    border-radius: var(--syn-tooltip-border-radius);
    box-shadow: var(--syn-shadow-large);
    color: var(--syn-tooltip-color);
    display: block;
    font-family: var(--syn-tooltip-font-family);
    font-size: var(--syn-tooltip-font-size);
    font-weight: var(--syn-tooltip-font-weight);
    line-height: var(--syn-tooltip-line-height);
    max-width: var(--max-width);
    padding: var(--syn-tooltip-padding);
    pointer-events: none;
    text-align: start;
    -webkit-user-select: none;
    user-select: none;
    white-space: normal;
    width: max-content;
  }
`})))()}var k;function A(){return(A=e((()=>{m(),x(),r(),g(),u(),c(),s(),T(),O(),k=class extends d{static{this.styles=[i,D]}static{this.dependencies={"syn-popup":E}}constructor(){super(),this.localize=new h(this),this.anchor=void 0,this.content=``,this.placement=`top`,this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=S(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=S(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit(`syn-show`),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await b(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=C(this,`tooltip.show`,{dir:this.localize.dir()});await v(this.popup.popup,e,t),this.popup.reposition(),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await b(this.body);let{keyframes:e,options:t}=C(this,`tooltip.hide`,{dir:this.localize.dir()});await v(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit(`syn-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,w(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,w(this,`syn-after-hide`)}render(){return t`
      <syn-popup
        .anchor=${this.anchor}
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${p({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        arrow
        hover-bridge
      >
        ${``}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${``}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?`polite`:`off`}>
          <slot name="content">${this.content}</slot>
        </div>
      </syn-popup>
    `}},l([f(`slot:not([name])`)],k.prototype,`defaultSlot`,void 0),l([f(`.tooltip__body`)],k.prototype,`body`,void 0),l([f(`syn-popup`)],k.prototype,`popup`,void 0),l([o()],k.prototype,`anchor`,void 0),l([a()],k.prototype,`content`,void 0),l([a()],k.prototype,`placement`,void 0),l([a({type:Boolean,reflect:!0})],k.prototype,`disabled`,void 0),l([a({type:Number})],k.prototype,`distance`,void 0),l([a({type:Boolean,reflect:!0})],k.prototype,`open`,void 0),l([a({type:Number})],k.prototype,`skidding`,void 0),l([a()],k.prototype,`trigger`,void 0),l([_(`open`,{waitUntilFirstUpdate:!0})],k.prototype,`handleOpenChange`,null),l([_([`anchor`,`content`,`distance`,`placement`,`skidding`])],k.prototype,`handleOptionsChange`,null),l([_(`disabled`)],k.prototype,`handleDisabledChange`,null),y(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),y(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}})})))()}export{A as n,k as t};