import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-Br8gqwpX.js";import{c as i,h as a,i as o,t as s}from"./lit-DgWh_IaA.js";import{a as c,d as l,n as ee,o as te,r as u,s as ne,t as re}from"./synergy-element-BeBxrfuL.js";import{n as ie,t as d}from"./localize-Du3bqz3O.js";import{n as f,t as p}from"./decorator-DZesXZg7.js";import{n as m,t as h}from"./divider.component-BnSxjUZS.js";import{n as ae,t as oe}from"./icon-button.component-CWWNMk3k.js";import{n as se,t as ce}from"./option.component-CGYN-gwF.js";import{n as le,t as ue}from"./select.component-Dc3bhaiG.js";import{n as de,t as g}from"./input.component-CytVr4qa.js";import{a as _,i as fe,n as v,o as pe,r as me,t as y}from"./component-iQCIgMPU.js";import{i as b,n as x,t as he}from"./ref-K9F4l-PQ.js";var S;function C(){return(C=e((()=>{s(),S=a`
  :host {
    display: block;
  }

  .pagination {
    --base-font: var(--syn-body-medium-regular);
    --base-gap: var(--syn-spacing-small);
    --navigation-gap: var(--syn-spacing-small);
    --pagination-page-size-option-char-count: 2;
    --pagination-total-pages-char-count: 3;

    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font: var(--base-font);
    gap: var(--base-gap) var(--syn-spacing-large);
  }

  /* Sizes */
  :host([size="small"]) .pagination {
    --base-gap: var(--syn-spacing-x-small);
    --base-font: var(--syn-body-small-regular);
  }

  :host([size="large"]) .pagination {
    --base-gap: var(--syn-spacing-medium);
    --base-font: var(--syn-body-large-regular);
  }

  /* Divider */
  syn-divider {
    --divider-spacing: var(--syn-spacing-small); 
    --spacing: 0 auto var(--divider-spacing);
  }

  :host([size="small"]) syn-divider {
    --divider-spacing: var(--syn-spacing-x-small); 
  }

  :host([size="large"]) syn-divider {
    --divider-spacing: var(--syn-spacing-medium);
  }

  /* Select */
  .pagination__page-size-select-wrapper {
    align-items: center;
    display: flex;
    gap: var(--base-gap);
  }

  .pagination__page-size-select::part(form-control) {
    align-items: center;
    display: flex;
    gap: var(--base-gap);
  }

  .pagination__page-size-select::part(form-control-label) {
    font: var(--base-font);
    margin-bottom: 0;
  }

  .pagination__page-size-select::part(display-input) {
    width: calc((var(--pagination-page-size-option-char-count) * 1ch) + 1ch);
  }

  /* Navigation */
  .pagination__navigation {
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    gap: var(--navigation-gap);
    justify-content: end;
  }

  .pagination__navigation > section {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
  }

  .pagination__page-input {
    margin-inline-end: var(--navigation-gap);
  }

  .pagination__page-input::part(input) {
    text-align: center;
    width: calc((var(--pagination-total-pages-char-count) * 1ch) + 3ch);
  }

  /**
   * Make sure to hide the label of the page input, but keep it accessible for screen readers.
   * We can't use the label slot of syn-input for this, because it would mess with the layout.
   */
  .pagination__page-input::part(form-control-label) {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* Compact Version */
  :host([variant="compact"]) .pagination__navigation {
    justify-content: center;
  }

  /* Adjustments for really small container widths */
  @supports (container-type: inline-size) {
    :host {
      container-type: inline-size;
    }

    @container (max-width: 400px) {
      .pagination__navigation {
        justify-content: center;
      }
    }
  }
`})))()}var w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{w=[10,25,50,100],T=e=>Number.isSafeInteger(e)&&Number(e)>0,E=e=>Number.isSafeInteger(e)&&Number(e)>=0,D=(e,t,n,r)=>{let i=e.get(t);return r(i)?i:n},O=(e,t)=>Math.ceil((Number.isFinite(e)&&e>0?e:0)/(Number.isFinite(t)&&t>0?t:1)),k=(e,t,n)=>{if(e<=0)return{endIndex:0,startIndex:0};let r=O(e,t),i=Math.min(Math.max(n,1),r),a=(i-1)*t+1;return{endIndex:Math.min(i*t,e),startIndex:a}},A=(e,t)=>Number.isFinite(e)?Math.min(Math.max(e,1),Number.isFinite(t)?Math.max(t,1):1):1,j=(e,t)=>{let n=Number.isFinite(e)&&e>0?e:1;return Math.max(1,Math.ceil((Number.isFinite(t)&&t>0?t:0)/n))},M=e=>{let t=(Array.isArray(e)?e:[]).map(e=>Number(e)).filter(e=>Number.isSafeInteger(e)&&e>0);return t.length>0?t:w},N=e=>M(e).reduce((e,t)=>Math.max(e,String(t).length),1),P=(e,t)=>String(j(e,t)).length})))()}var I,L,R;function z(){return(z=e((()=>{s(),ne(),he(),d(),ee(),te(),C(),m(),ae(),g(),ce(),ue(),F(),f(),L=class extends re{static{I=this}constructor(...e){super(...e),this.baseRef=x(),this.localize=new ie(this),this.divider=!1,this.disabled=!1,this.size=`medium`,this.currentPage=1,this.pageSize=25,this.pageSizeOptions=[10,25,50,100],this.totalItems=0,this.variant=`full`,this.ariaLabel=`Pagination`}static{this.DEFAULT_PAGE_SIZE=25}static{this.DEFAULT_CURRENT_PAGE=1}static{this.DEFAULT_TOTAL_ITEMS=0}static{this.styles=[c,S]}static{this.dependencies={"syn-divider":h,"syn-icon-button":oe,"syn-input":de,"syn-option":se,"syn-select":le}}pageChangedViaUserInput(e){let t=e.target.valueAsNumber;T(t)&&this.updateCurrentPage(t)}navigationClicked(e,t){e.currentTarget?.blur(),this.updateCurrentPage(t)}sanitizeInvalidPropertyValues(e){if(e.has(`pageSize`)&&!T(this.pageSize)&&(this.pageSize=D(e,`pageSize`,I.DEFAULT_PAGE_SIZE,T)),e.has(`currentPage`)&&!T(this.currentPage)&&(this.currentPage=D(e,`currentPage`,I.DEFAULT_CURRENT_PAGE,T)),e.has(`totalItems`)&&!E(this.totalItems)&&(this.totalItems=D(e,`totalItems`,I.DEFAULT_TOTAL_ITEMS,E)),e.has(`pageSizeOptions`)){let e=M(this.pageSizeOptions);(this.pageSizeOptions.length!==e.length||this.pageSizeOptions.some((t,n)=>t!==e[n]))&&(this.pageSizeOptions=e)}}updateCurrentPage(e){let t=j(this.pageSize,this.totalItems),n=A(e,t),{currentPage:r}=this;n!==r&&(this.emit(`syn-pagination-page-changed`,{detail:{currentPage:n,previousPage:r}}),this.currentPage=n)}pageSizeChanged(e){let{currentPage:t,pageSize:n}=this,{value:r}=e.target,i=parseInt(r,10);if(!Number.isSafeInteger(i)||i<=0)return;let a=(t-1)*n+1,o=j(i,this.totalItems),s=A(Math.floor((a-1)/i)+1,o);this.pageSize=i,this.currentPage=s,this.emit(`syn-pagination-page-size-changed`,{detail:{currentPageSize:i,previousPageSize:n}}),s!==t&&this.emit(`syn-pagination-page-changed`,{detail:{currentPage:s,previousPage:t}})}willUpdate(e){super.willUpdate(e),this.sanitizeInvalidPropertyValues(e);let t=e.get(`pageSizeOptions`);if(Array.isArray(t)&&!this.pageSizeOptions.includes(this.pageSize)){let e=this.pageSizeOptions[0],t=(this.currentPage-1)*this.pageSize+1,n=j(e,this.totalItems),r=A(Math.floor((t-1)/e)+1,n);this.pageSize=e,this.currentPage=r}if(e.has(`currentPage`)||e.has(`pageSize`)||e.has(`totalItems`)){let e=j(this.pageSize,this.totalItems),t=A(this.currentPage,e);t!==this.currentPage&&(this.currentPage=t)}}updated(e){if(super.updated(e),e.has(`pageSizeOptions`)||e.has(`pageSize`)||e.has(`totalItems`)){let e=N(this.pageSizeOptions),t=P(this.pageSize,this.totalItems),n=this.baseRef.value;n&&(n.style.setProperty(`--pagination-page-size-option-char-count`,String(e)),n.style.setProperty(`--pagination-total-pages-char-count`,String(t)))}}render(){let e=O(this.totalItems,this.pageSize),t=this.variant===`compact`,n=this.disabled||e===0,r=k(this.totalItems,this.pageSize,this.currentPage),a=this.pageSizeOptions.includes(this.pageSize)?this.pageSize:this.pageSizeOptions[0],s=this.currentPage===1,c=this.currentPage===e;return i`
      ${this.divider?i`<syn-divider part="divider"></syn-divider>`:o}
      <nav
        aria-label=${this.ariaLabel}
        class="pagination"
        part="base"
        ${b(this.baseRef)}
      >
        ${t?o:i`
          <div class="pagination__page-size-select-wrapper" part="page-size-select-wrapper">
            <syn-select
              class="pagination__page-size-select"
              ?disabled=${n}
              label=${this.localize.term(`paginationItemsPerPage`)}
              part="page-size-select"
              value=${a}
              size=${this.size}
              @syn-change=${this.pageSizeChanged}
            >
              ${this.pageSizeOptions.map(e=>i`
                <syn-option value="${e}">
                  ${e}
                </syn-option>
              `)}
            </syn-select>
            <!-- /.pagination__page-size-select -->

            <span part="page-item-summary">
              ${this.localize.term(`paginationItemSummary`,r.startIndex,r.endIndex,this.totalItems)}
            </span>
            <!-- /.pagination__page-item-summary -->
          </div>
          <!-- /.pagination__page-size-select-wrapper -->
        `}

        <div class="pagination__navigation" part="navigation">
          <section>
            <syn-icon-button
              @click=${e=>this.navigationClicked(e,1)}
              color="primary"
              ?disabled=${s||n}
              label=${this.localize.term(`paginationFirstPage`)}
              library="system"
              name="first-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${e=>this.navigationClicked(e,this.currentPage-1)}
              color="primary"
              ?disabled=${s||n}
              label=${this.localize.term(`paginationPreviousPage`)}
              library="system"
              name="previous-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>

          <section part="page-input-section">
            <syn-input
              class="pagination__page-input"
              ?disabled=${n}
              label=${this.localize.term(`paginationInputLabel`)}
              max=${e}
              min="1"
              no-spin-buttons
              numeric-strategy="modern"
              part="page-input"
              size=${this.size}
              @syn-change=${this.pageChangedViaUserInput}
              type="number"
              value=${this.currentPage}
            ></syn-input>
            
            <span>${this.localize.term(`paginationOfTotalPages`,e)}</span>
          </section>

          <section>
            <syn-icon-button
              @click=${e=>this.navigationClicked(e,this.currentPage+1)}
              color="primary"
              ?disabled=${c||n}
              label=${this.localize.term(`paginationNextPage`)}
              library="system"
              name="next-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${t=>this.navigationClicked(t,e)}
              color="primary"
              ?disabled=${c||n}
              label=${this.localize.term(`paginationLastPage`)}
              library="system"
              name="last-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>
        </div>
        <!-- /.pagination__navigation -->
      </nav>
    `}},u([l({type:Boolean})],L.prototype,`divider`,void 0),u([l({reflect:!0,type:Boolean})],L.prototype,`disabled`,void 0),u([l({reflect:!0})],L.prototype,`size`,void 0),u([l({attribute:`current-page`,reflect:!0,type:Number})],L.prototype,`currentPage`,void 0),u([l({attribute:`page-size`,reflect:!0,type:Number})],L.prototype,`pageSize`,void 0),u([l({attribute:`page-size-options`,converter:{fromAttribute:e=>e.split(`,`).map(e=>{let t=parseInt(e.trim(),10);return Number.isSafeInteger(t)?t:null}).filter(Boolean)},type:Array})],L.prototype,`pageSizeOptions`,void 0),u([l({attribute:`total-items`,reflect:!0,type:Number})],L.prototype,`totalItems`,void 0),u([l({attribute:`variant`,reflect:!0})],L.prototype,`variant`,void 0),u([l({attribute:`aria-label`})],L.prototype,`ariaLabel`,void 0),L=I=u([p(`SynPagination`)],L),R=L})))()}function B(){return(B=e((()=>{z(),R.define(`syn-pagination`)})))()}var ge=t({Compact:()=>Y,Default:()=>K,Disabled:()=>J,Screenshot:()=>Z,Sizes:()=>X,WithDivider:()=>q,__namedExportsOrder:()=>Q,default:()=>G}),V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{B(),s(),me(),r(),{args:V,argTypes:H}=fe(`syn-pagination`),{overrideArgs:U}=_(`syn-pagination`),{generateTemplate:W}=pe(`syn-pagination`),G={args:U([{name:`total-items`,type:`attribute`,value:500},{name:`page-size-options`,type:`attribute`,value:`10, 25, 50, 100`}],V),argTypes:H,component:`syn-pagination`,parameters:{chromatic:{modes:n},docs:{description:{component:v(`pagination`,`default`)}}},tags:[`Navigation`,`Filter`],title:`Components/syn-pagination`},K={parameters:{controls:{disable:!1},docs:{description:{story:v(`pagination`,`default`)}}},render:e=>W({args:e})},q={parameters:{docs:{description:{story:v(`pagination`,`with-divider`)}}},render:()=>i`
    <syn-pagination divider current-page="2" page-size="25" total-items="500" ></syn-pagination>
  `},J={parameters:{docs:{description:{story:v(`pagination`,`disabled`)}}},render:()=>i`
    <syn-pagination disabled current-page="1" page-size="25" total-items="500" ></syn-pagination>
  `},Y={parameters:{docs:{description:{story:v(`pagination`,`compact`)}}},render:()=>i`
    <syn-pagination variant="compact" current-page="1" page-size="25" total-items="500"></syn-pagination>
  `},X={parameters:{docs:{description:{story:v(`pagination`,`sizes`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large);">
      <syn-pagination current-page="1" page-size="25" total-items="500" size="small"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="medium"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="large"></syn-pagination>
    </div>
  `},Z=y({Default:K,WithDivider:q,Disabled:J,Compact:Y,Sizes:X}),K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('pagination', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('pagination', 'with-divider')
      }
    }
  },
  render: () => html\`
    <syn-pagination divider current-page="2" page-size="25" total-items="500" ></syn-pagination>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('pagination', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-pagination disabled current-page="1" page-size="25" total-items="500" ></syn-pagination>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('pagination', 'compact')
      }
    }
  },
  render: () => html\`
    <syn-pagination variant="compact" current-page="1" page-size="25" total-items="500"></syn-pagination>
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('pagination', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large);">
      <syn-pagination current-page="1" page-size="25" total-items="500" size="small"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="medium"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="large"></syn-pagination>
    </div>
  \`
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithDivider,
  Disabled,
  Compact,
  Sizes
})`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithDivider`,`Disabled`,`Compact`,`Sizes`,`Screenshot`]})))()}export{$ as n,ge as r,K as t};