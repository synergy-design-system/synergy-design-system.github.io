import{e as d}from"./class-map-CgfiomsZ.js";import{j as m,x as g}from"./iframe-DHSLgJZF.js";import{L as v}from"./localize-Dh03wnLC.js";import{c as y,n as c,S as p}from"./synergy-element-BCW6ZVkV.js";import{S as u}from"./icon-button.component-BvmdC5t_.js";import{e as h}from"./decorator-DeP7ND_N.js";const b=m`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--syn-button-font-size-small);
    height: calc(var(--syn-input-height-small) * 0.8);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-small);
    padding: 0 var(--syn-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--syn-button-font-size-medium);
    height: calc(var(--syn-input-height-medium) * 0.8);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-medium);
    padding: 0 var(--syn-spacing-small);
  }

  .tag--large {
    font-size: var(--syn-button-font-size-large);
    height: calc(var(--syn-input-height-large) * 0.8);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-large);
    padding: 0 var(--syn-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  
`,f=m`
  :host {
    /*
     * #850: This is needed for position adjustments when using the tags in syn-select[multiple].
     * It will get adjusted in the syn-select component.
     */
    --syn-tag-position-adjustment: 0px;
  }

  .tag {
    background-color: var(--syn-panel-background-color);
    border-color: var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-small);
    border-width: var(--syn-border-width-small);
    color: var(--syn-input-color);
  }

  .tag .tag__remove {
    color: var(--syn-input-icon-icon-clearable-color);
  }


  /* Size small */
  .tag--small {
    font-size: var(--syn-font-size-x-small);
    height: var(--syn-font-size-x-large);
    line-height: calc(var(--syn-font-size-x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--small.tag--removable {
    padding-inline-end: var(--syn-spacing-2x-small);
  }


  /* Size medium */
  .tag--medium {
    font-size: var(--syn-font-size-small);
    height: var(--syn-font-size-2x-large);
    line-height: calc(var(--syn-font-size-2x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--medium.tag--removable {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .tag--medium .tag__remove {
    margin-inline-start: var(--syn-spacing-small);
  }


  /* Size large */
  .tag--large {
    font-size: var(--syn-font-size-medium);
    height: var(--syn-font-size-3x-large);
    line-height: calc(var(--syn-font-size-3x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--large .tag__remove {
    margin-inline-start: var(--syn-spacing-medium);
  }

  .tag--large.tag--removable {
    padding-inline-end: var(--syn-spacing-small);
  }


  /* Hover */
  .tag.tag--removable:hover {
    background-color: var(--syn-interactive-background-color-hover, var(--syn-color-neutral-100));
  }
  
  .tag .tag__remove:hover {
    color: var(--syn-input-icon-icon-clearable-color-hover);
  }


  /* Focus 
     ! Focus styling is currently not working because shoelace does not support to focus icon-button 
  */
  .tag.tag--removable:focus ~ .tag__remove {
    border: solid 1px var(--syn-color-primary-500);
  }


  /* Slotted icon style */
  .tag ::slotted(syn-icon) {
    position: relative;
    top: var(--syn-tag-position-adjustment);
  }

  .tag--small ::slotted(syn-icon) {
    font-size: var(--syn-font-size-small);
    margin-inline-end: var(--syn-spacing-2x-small);
  }

  .tag--medium ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .tag--large ::slotted(syn-icon) {
    font-size: var(--syn-font-size-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }


  /* Remove icon-button style */
  .tag--small .tag__remove::part(base){
    font-size: var(--syn-font-size-medium);
  }

  .tag--medium .tag__remove::part(base){
    font-size: var(--syn-font-size-x-large);
  }

  .tag--large .tag__remove::part(base){
    font-size: var(--syn-font-size-2x-large);
  }
`;var z=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(l,t,s,n)=>{for(var e=n>1?void 0:n?_(t,s):t,r=l.length-1,i;r>=0;r--)(i=l[r])&&(e=(n?i(t,s,e):i(e))||e);return n&&e&&z(t,s,e),e};let a=class extends p{constructor(){super(...arguments),this.localize=new v(this),this.size="medium",this.removable=!1}handleRemoveClick(){this.emit("syn-remove")}render(){return g`
      <span
        part="base"
        class=${d({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?g`
              <syn-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></syn-icon-button>
            `:""}
      </span>
    `}};a.styles=[y,b,f];a.dependencies={"syn-icon-button":u};o([c({reflect:!0})],a.prototype,"size",2);o([c({type:Boolean})],a.prototype,"removable",2);a=o([h("SynTag")],a);export{a as S};
