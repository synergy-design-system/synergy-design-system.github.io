import{s as g,a as m,g as y,b as c,d as p}from"./animation-registry-l4L8bmT6.js";import{e as _}from"./class-map-CqeSldTo.js";import{j as f,x as b}from"./iframe-HYWqsTHs.js";import{L as v}from"./localize-Dh03wnLC.js";import{c as w,n as r,S as z}from"./synergy-element-Bv7T9Cbj.js";import{a as l}from"./query-DAIS6qJ0.js";import{w as u}from"./event-B0iVuGLD.js";import{w as k}from"./watch-CEsCE2EF.js";import{S as x}from"./icon.component-CwSx8_oh.js";import{e as S}from"./decorator-DANECR0-.js";const A=f`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--syn-color-neutral-200);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--syn-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: calc(1px + var(--syn-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--syn-spacing-medium);
  }
`,D=f`
  .details {
    background-color: unset;
    border-color: var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    border-width: 0 0 var(--syn-border-width-small);
  }

  /** #429: Use token for opacity */
  .details--disabled {
    opacity: var(--syn-opacity-50);
  }

  .details__summary-icon {
    align-self: flex-start;
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-spacing-large);

    /**
     * As we are using an alignment of "start"  instead of "center" make sure
     * the arrow starts on the same visual line as the first line of headline text
     */
    position: relative;
    top: 2px;
  }

  .details .details__summary {
    color: var(--syn-typography-color-text);
  }

  .details__header {
    gap: var(--syn-spacing-medium);
  }

  /**
   * As we are using top/down arrows for the details element,
   * we have to adjust the rotation of the icon when the details is open.
   */
  .details--open .details__summary-icon {
    rotate: -180deg;
  }

  /**
   * Adjustments for medium variant
   */
  .details--size-medium .details__header {
    padding: var(--syn-spacing-medium-large) 0;
  }

  .details--size-medium .details__content {
    font-size: var(--syn-font-size-small);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-medium) 0 var(--syn-spacing-large);
  }

  .details--size-medium .details__summary {
    font: var(--syn-body-medium-regular);
  }

  .details--size-medium .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--syn-spacing-large);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Adjustment for large variant
   */
  .details--size-large .details__header {
    padding: var(--syn-spacing-large) 0;
  }

  .details--size-large .details__content {
    font-size: var(--syn-font-size-medium);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-medium-large) 0 var(--syn-spacing-large);
  }

  .details--size-large .details__summary {
    font: var(--syn-body-large-regular);
  }

  .details--size-large .details__summary-icon {
    font-size: var(--syn-spacing-x-large);
  }

  .details--size-large .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--syn-spacing-x-large);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Mark the details as open by adjusting its label
   */
  .details--open .details__summary {
    font-weight: var(--syn-font-weight-bold);
  }

  /**
   * Add a visually visible hover effect to the summary element
   */
  .details:not(.details--disabled) .details__header:hover .details__summary,
  .details:not(.details--disabled) .details__header:hover .details__summary-icon {
    color: var(--syn-color-primary-700);
  }

  /**
   *  Contained style
   */
  .details--contained {
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    border-width: var(--syn-panel-border-width);
  }

  .details--contained .details__header:focus-visible {
    border-radius: var(--syn-border-radius-medium);
  }

  .details--size-medium.details--contained .details__header {
    padding: var(--syn-spacing-medium-large) var(--syn-spacing-large);
  }

  .details--size-medium.details--contained .details__content {
    padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .details--size-large.details--contained .details__header {
    padding: var(--syn-spacing-large);
  }

  .details--size-large.details--contained .details__content {
    padding: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-large);
  }
`;var O=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(e,a,t,o)=>{for(var n=o>1?void 0:o?C(a,t):a,d=e.length-1,h;d>=0;d--)(h=e[d])&&(n=(o?h(a,t,n):h(n))||n);return o&&n&&O(a,t,n),n};let s=class extends z{constructor(){super(...arguments),this.localize=new v(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size="medium"}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const a of e)a.type==="attributes"&&a.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("syn-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await m(this.body);const{keyframes:a,options:t}=y(this,"details.show",{dir:this.localize.dir()});await c(this.body,p(a,this.body.scrollHeight),t),this.body.style.height="auto",this.emit("syn-after-show")}else{if(this.emit("syn-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await m(this.body);const{keyframes:a,options:t}=y(this,"details.hide",{dir:this.localize.dir()});await c(this.body,p(a,this.body.scrollHeight),t),this.body.style.height="auto",this.details.open=!1,this.emit("syn-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,u(this,"syn-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,u(this,"syn-after-hide")}render(){return b`
      <details
        part="base"
        class=${_({details:!0,"details--size-medium":this.size==="medium","details--size-large":this.size==="large","details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <syn-icon library="system" name="chevron-down"></syn-icon>
            </slot>
            <slot name="collapse-icon">
              <syn-icon library="system" name="chevron-down"></syn-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" part="body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};s.styles=[w,A,D];s.dependencies={"syn-icon":x};i([l(".details")],s.prototype,"details",2);i([l(".details__header")],s.prototype,"header",2);i([l(".details__body")],s.prototype,"body",2);i([l(".details__expand-icon-slot")],s.prototype,"expandIconSlot",2);i([r({type:Boolean,reflect:!0})],s.prototype,"open",2);i([r()],s.prototype,"summary",2);i([r({type:Boolean,reflect:!0})],s.prototype,"disabled",2);i([r({type:Boolean,reflect:!0})],s.prototype,"contained",2);i([r({reflect:!0})],s.prototype,"size",2);i([k("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);s=i([S("SynDetails")],s);g("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});g("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});s.define("syn-details");
