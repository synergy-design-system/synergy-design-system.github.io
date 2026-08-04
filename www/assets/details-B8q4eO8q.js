import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,n as o,o as s,r as c,s as l,t as u}from"./synergy-element-C9GUR4B8.js";import{t as d}from"./query-DOHNhzf6.js";import{n as f,t as p}from"./class-map-HZwHklGF.js";import{n as m,t as h}from"./localize-Du3bqz3O.js";import{n as g}from"./watch-Q8hEwzVb.js";import{n as _,t as v}from"./icon.component-KcKLXIVq.js";import{n as y,t as b}from"./decorator-DZesXZg7.js";import{a as x,c as S,i as C,l as w,n as T,t as E}from"./animation-registry-DCzWq2z4.js";import{n as D}from"./event-B7qjsglH.js";var O;function k(){return(k=e((()=>{r(),O=n`
  :host {
    /* Size-dependent custom properties (default to medium values) */
    --details-header-padding: var(--syn-spacing-medium-large) 0;
    --details-content-padding: var(--syn-spacing-medium) 0 var(--syn-spacing-large);
    --details-summary-font: var(--syn-body-medium-bold);
    --details-content-font-size: var(--syn-font-size-small);
    --details-icon-size: var(--syn-spacing-large);
    --details-slotted-icon-size: var(--syn-spacing-large);
    
    /* Contained variant custom properties */
    --details-header-padding-contained: var(--syn-spacing-medium-large) var(--syn-spacing-large);
    --details-content-padding-contained: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large);

    display: block;
  }

  .details {
    background-color: transparent;
    border: 1px solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    border-width: 0 0 var(--syn-border-width-small);
    overflow-anchor: none;
  }

  /** #429: Use token for opacity */
  .details--disabled {
    opacity: var(--syn-opacity-50);
  }

  .details__header {
    align-items: center;
    border-radius: inherit;
    cursor: pointer;
    display: flex;
    gap: var(--syn-spacing-medium);
    padding: var(--details-header-padding);
    user-select: none;
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
    box-shadow: none;
    outline: none;
  }

  .details__summary {
    align-items: center;
    color: var(--syn-typography-color-text);
    display: flex;
    flex: 1 1 auto;
    font: var(--details-summary-font);
  }

  .details__summary-icon {
    align-items: center;
    align-self: flex-start;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--details-icon-size);
    position: relative;

    /**
     * As we are using an alignment of "start"  instead of "center" make sure
     * the arrow starts on the same visual line as the first line of headline text
     */
    top: 2px;
    transition: var(--syn-transition-medium) rotate ease;
  }

  /**
   * As we are using top/down arrows for the details element,
   * we have to adjust the rotation of the icon when the details is open.
   */
  .details--open .details__summary-icon {
    rotate: var(--syn-details-open-rotation);
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
    font-size: var(--details-content-font-size);
    line-height: var(--syn-line-height-normal);
    padding: var(--details-content-padding);
  }

  /**
   * Size variants
   */
  .details--size-small {
    --details-header-padding: var(--syn-spacing-small) 0;
    --details-content-padding: var(--syn-spacing-small) 0 var(--syn-spacing-medium-large);
    --details-summary-font: var(--syn-body-small-bold);
    --details-content-font-size: var(--syn-font-size-x-small);
    --details-icon-size: var(--syn-spacing-medium-large);
    --details-slotted-icon-size: var(--syn-spacing-medium-large);
    --details-header-padding-contained: var(--syn-spacing-small) var(--syn-spacing-large);
    --details-content-padding-contained: var(--syn-spacing-small) var(--syn-spacing-large) var(--syn-spacing-medium-large);
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .details--size-small .details__header {
    min-height: var(--syn-spacing-large);
  }

  .details--size-large {
    --details-header-padding: var(--syn-spacing-large) 0;
    --details-content-padding: var(--syn-spacing-medium-large) 0 var(--syn-spacing-large);
    --details-summary-font: var(--syn-body-large-bold);
    --details-content-font-size: var(--syn-font-size-medium);
    --details-icon-size: var(--syn-spacing-x-large);
    --details-slotted-icon-size: var(--syn-spacing-x-large);
    --details-header-padding-contained: var(--syn-spacing-large);
    --details-content-padding-contained: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--details-slotted-icon-size);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Add a visually visible hover effect to the summary element
   */
  .details:not(.details--disabled) .details__header:hover .details__summary,
  .details:not(.details--disabled) .details__header:hover .details__summary-icon {
    color: var(--syn-interactive-quiet-color-hover);
  }

  /**
   *  Contained style
   */
  .details--contained {
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    border-width: var(--syn-panel-border-width);
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .details--contained .details__header {
    padding: var(--details-header-padding-contained);
  }

  .details--contained .details__content {
    padding: var(--details-content-padding-contained);
  }

  .details--contained .details__header:focus-visible {
    border-radius: var(--syn-border-radius-medium);
  }
`})))()}var A,j;function M(){return(M=e((()=>{p(),T(),r(),h(),l(),s(),o(),_(),k(),y(),A=class extends u{constructor(...e){super(...e),this.localize=new m(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size=`medium`}static{this.styles=[i,O]}static{this.dependencies={"syn-icon":v}}firstUpdated(){this.body.style.height=this.open?`auto`:`0`,this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit(`syn-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await w(this.body);let{keyframes:e,options:t}=E(this,`details.show`,{dir:this.localize.dir()});await x(this.body,S(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.emit(`syn-after-show`)}else{if(this.emit(`syn-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await w(this.body);let{keyframes:e,options:t}=E(this,`details.hide`,{dir:this.localize.dir()});await x(this.body,S(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.details.open=!1,this.emit(`syn-after-hide`)}}async show(){if(!(this.open||this.disabled))return this.open=!0,D(this,`syn-after-show`)}async hide(){if(!(!this.open||this.disabled))return this.open=!1,D(this,`syn-after-hide`)}render(){return t`
      <details
        part="base"
        class=${f({details:!0,"details--size-small":this.size===`small`,"details--size-medium":this.size===`medium`,"details--size-large":this.size===`large`,"details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="content"
          aria-disabled=${this.disabled?`true`:`false`}
          tabindex=${this.disabled?`-1`:`0`}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <syn-icon library="system" name="details-open"></syn-icon>
            </slot>
            <slot name="collapse-icon">
              <syn-icon library="system" name="details-close"></syn-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" part="body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}},c([d(`.details`)],A.prototype,`details`,void 0),c([d(`.details__header`)],A.prototype,`header`,void 0),c([d(`.details__body`)],A.prototype,`body`,void 0),c([d(`.details__expand-icon-slot`)],A.prototype,`expandIconSlot`,void 0),c([a({type:Boolean,reflect:!0})],A.prototype,`open`,void 0),c([a()],A.prototype,`summary`,void 0),c([a({type:Boolean,reflect:!0})],A.prototype,`disabled`,void 0),c([a({type:Boolean,reflect:!0})],A.prototype,`contained`,void 0),c([a({reflect:!0})],A.prototype,`size`,void 0),c([g(`open`,{waitUntilFirstUpdate:!0})],A.prototype,`handleOpenChange`,null),A=c([b(`SynDetails`)],A),j=A,C(`details.show`,{keyframes:[{height:`0`,opacity:`0`},{height:`auto`,opacity:`1`}],options:{duration:250,easing:`linear`}}),C(`details.hide`,{keyframes:[{height:`auto`,opacity:`1`},{height:`0`,opacity:`0`}],options:{duration:250,easing:`linear`}})})))()}function N(){return(N=e((()=>{M(),j.define(`syn-details`)})))()}export{N as t};