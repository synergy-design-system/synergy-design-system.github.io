import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-BVDl_-fF.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-D_jGE1Vc.js";import{n as m,t as h}from"./class-map-B6tcqeNv.js";import{n as g,t as _}from"./localize-CzgwcyM2.js";import{n as v,t as y}from"./watch-I6gMK-uE.js";import{a as b,i as x,l as S,n as C,o as w,s as T,t as E}from"./animation-registry-CAtzdG-I.js";import{n as D,t as O}from"./event-gTfeuJtF.js";import{n as k,t as A}from"./popup.component-DHq-WgAm.js";var j,M=e((()=>{r(),j=n`
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
`})),N,P=e((()=>{w(),h(),C(),r(),_(),d(),O(),y(),l(),c(),k(),M(),s(),N=class extends f{static{this.styles=[a,j]}static{this.dependencies={"syn-popup":A}}constructor(){super(),this.localize=new g(this),this.anchor=void 0,this.content=``,this.placement=`top`,this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=T(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=T(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit(`syn-show`),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await S(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=E(this,`tooltip.show`,{dir:this.localize.dir()});await b(this.popup.popup,e,t),this.popup.reposition(),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await S(this.body);let{keyframes:e,options:t}=E(this,`tooltip.hide`,{dir:this.localize.dir()});await b(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit(`syn-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,D(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,D(this,`syn-after-hide`)}render(){return t`
      <syn-popup
        .anchor=${this.anchor}
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${m({tooltip:!0,"tooltip--open":this.open})}
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
    `}},u([o(`slot:not([name])`)],N.prototype,`defaultSlot`,void 0),u([o(`.tooltip__body`)],N.prototype,`body`,void 0),u([o(`syn-popup`)],N.prototype,`popup`,void 0),u([i()],N.prototype,`anchor`,void 0),u([p()],N.prototype,`content`,void 0),u([p()],N.prototype,`placement`,void 0),u([p({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),u([p({type:Number})],N.prototype,`distance`,void 0),u([p({type:Boolean,reflect:!0})],N.prototype,`open`,void 0),u([p({type:Number})],N.prototype,`skidding`,void 0),u([p()],N.prototype,`trigger`,void 0),u([v(`open`,{waitUntilFirstUpdate:!0})],N.prototype,`handleOpenChange`,null),u([v([`anchor`,`content`,`distance`,`placement`,`skidding`])],N.prototype,`handleOptionsChange`,null),u([v(`disabled`)],N.prototype,`handleDisabledChange`,null),x(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),x(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}})}));export{P as n,N as t};