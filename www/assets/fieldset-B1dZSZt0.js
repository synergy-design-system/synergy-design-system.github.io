import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u,y as d}from"./synergy-element-BFEAJlBN.js";import{r as f,t as p}from"./if-defined-gcdQCgEY.js";import{n as m,t as h}from"./class-map-BntiyWRh.js";import{r as g,t as _}from"./slot-Cl6UAYP5.js";var v=e((()=>{})),y,b=e((()=>{r(),v(),y=n`
  :host {
    /*
     * The amount of items per row.
     * This is used to calculate the width of the items in the fieldset when not using stacked layout.
     * Defaults to 2.
     */
    --items-per-row: 2;

    /**
     * The gap between the fields in the fieldset.
     */
    --item-gap: var(--syn-spacing-large);

    display: block;
  }

  .fieldset {
    border: none;
    color: var(--syn-typography-color-text);
    margin: 0;
    padding: 0;
  }

  .legend {
    display: block;
    font: var(--syn-heading-large);
    margin-bottom: var(--syn-spacing-large);
    padding: 0;
    width: 100%;
  }

  .description {
    font: var(--syn-body-medium-regular);
    margin: 0 0 var(--syn-spacing-large);
  }

  .fieldset--has-description.fieldset--has-legend .legend {
    margin-bottom: var(--syn-spacing-medium);
  }

  .fields {
    align-items: start;
    container-type: inline-size;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    gap: var(--item-gap);
  }

  .fields ::slotted(*) {
    flex-basis: 100%;
  }

  @container (min-width: ${640}px) {
    .fields--two-columns ::slotted(*) {
      flex-basis: calc((100% - (var(--item-gap) * (var(--items-per-row) - 1))) / var(--items-per-row));
    }
  }
`})),x,S,C,w,T,E=e((()=>{v(),x=e=>{let t=[`button`,`fieldset`,`input`,`select`,`textarea`,`syn-button`,`syn-checkbox`,`syn-checkbox-group`,`syn-combobox`,`syn-dropdown`,`syn-fieldset`,`syn-file`,`syn-icon-button`,`syn-input`,`syn-radio-group`,`syn-radio`,`syn-range`,`syn-select`,`syn-switch`,`syn-textarea`].join(`,`);return Array.from(e.querySelectorAll(t))},S=e=>`disabled`in e,C=`syn-radio-group, syn-checkbox-group`,w=(e,t)=>e!==`two-columns`||t<640?`vertical`:`horizontal`,T=(e,t)=>{e.querySelectorAll(C).forEach(e=>{e.layout!==t&&(e.layout=t)})}})),D,O=e((()=>{r(),l(),h(),p(),g(),s(),o(),b(),E(),a(),D=class extends u{constructor(...e){super(...e),this.hasSlotController=new _(this,`description`,`legend`),this.forcedDisabledElements=new WeakSet,this.lightDomObserver=new MutationObserver(e=>{this.disabled&&this.syncDisabledState(),e.some(e=>e.type===`childList`)&&this.scheduleGroupedControlLayoutSync()}),this.fieldContainerResizeObserver=new ResizeObserver(()=>{this.scheduleGroupedControlLayoutSync()}),this.groupedLayoutSyncAnimationFrame=null,this.handleSlotChange=()=>{this.disabled&&this.syncDisabledState(),this.scheduleGroupedControlLayoutSync()},this.description=``,this.legend=``,this.disabled=!1,this.disableAutoGroupLayout=!1,this.layout=`one-column`}static{this.styles=[i,y]}getFieldContainerWidth(){return(this.shadowRoot?.querySelector(`.fields`))?.getBoundingClientRect().width??0}syncGroupedControlLayouts(){if(this.disableAutoGroupLayout)return;let e=w(this.layout,this.getFieldContainerWidth());T(this,e)}scheduleGroupedControlLayoutSync(){this.groupedLayoutSyncAnimationFrame===null&&(this.groupedLayoutSyncAnimationFrame=requestAnimationFrame(()=>{this.groupedLayoutSyncAnimationFrame=null,this.syncGroupedControlLayouts()}))}syncDisabledState(){Array.from(x(this)).filter(S).forEach(e=>{this.disabled&&(e.disabled||=(this.forcedDisabledElements.add(e),!0)),!this.disabled&&this.forcedDisabledElements.has(e)&&(e.disabled=!1)})}connectedCallback(){super.connectedCallback(),this.lightDomObserver.observe(this,{attributeFilter:[`disabled`],attributes:!0,childList:!0,subtree:!0})}firstUpdated(){let e=this.shadowRoot?.querySelector(`.fields`);e&&this.fieldContainerResizeObserver.observe(e),this.syncGroupedControlLayouts()}disconnectedCallback(){super.disconnectedCallback(),this.lightDomObserver?.disconnect(),this.fieldContainerResizeObserver?.disconnect(),this.groupedLayoutSyncAnimationFrame!==null&&(cancelAnimationFrame(this.groupedLayoutSyncAnimationFrame),this.groupedLayoutSyncAnimationFrame=null)}updated(e){super.updated(e),e.has(`disabled`)&&this.syncDisabledState(),(e.has(`layout`)||e.has(`disableAutoGroupLayout`))&&this.scheduleGroupedControlLayoutSync()}render(){let e=this.hasSlotController.test(`legend`)||this.legend.length>0,n=this.hasSlotController.test(`description`)||this.description.length>0;return t`
      <fieldset
        class=${m({fieldset:!0,"fieldset--has-description":n,"fieldset--has-legend":e})}
        ?disabled=${this.disabled}
        aria-describedby=${f(n?`description`:void 0)}
        part="base"
      >
        ${e?t`
            <legend class="legend" part="legend">
              <slot name="legend">${this.legend}</slot>
            </legend>
          `:null}

        ${n?t`
            <div class="description" id="description" part="description">
              <slot name="description">${this.description}</slot>
            </div>
          `:null}

        <div
          class=${m({fields:!0,"fields--two-columns":this.layout===`two-columns`})}
          part="field-container"
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </fieldset>
    `}},c([d({reflect:!0,type:String})],D.prototype,`description`,void 0),c([d({reflect:!0,type:String})],D.prototype,`legend`,void 0),c([d({reflect:!0,type:Boolean})],D.prototype,`disabled`,void 0),c([d({attribute:`disable-auto-group-layout`,reflect:!0,type:Boolean})],D.prototype,`disableAutoGroupLayout`,void 0),c([d({reflect:!0})],D.prototype,`layout`,void 0)})),k=e((()=>{O(),O(),D.define(`syn-fieldset`)}));export{k as t};