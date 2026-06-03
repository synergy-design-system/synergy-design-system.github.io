import{n as e}from"./chunk-DnJy8xQt.js";import{Ft as t,Nt as n,Rt as r,Ut as i,d as a,f as o,g as s,u as c}from"./iframe-BcSabCAt.js";import{n as l,t as u}from"./localize-BO4uh8LG.js";import{a as ee,i as d,m as f,n as p,o as m,r as h,s as g,t as _}from"./synergy-element-B9jDHluB.js";import{n as te,t as ne}from"./decorator-C8FY8E2M.js";import{a as re,i as ie,n as v,o as ae,r as oe,t as se}from"./component-CI3ThXYz.js";import{n as ce,t as y}from"./icon-button.component-jI10Rs9H.js";import{n as b,t as le}from"./divider.component-nNkF1miJ.js";import{n as ue,r as x,t as S}from"./ref-DGeC1k9F.js";import{o as C,s as de}from"./utility-4zssNfA-.js";import{n as fe,t as pe}from"./input.component-Dto8lvXD.js";import{n as me,t as he}from"./select.component-DsGORt77.js";var w,ge=e((()=>{n(),w=i`
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
`})),T,E,D,O,k,A,j,M,N,P,F,I=e((()=>{T=[10,25,50,100],E=e=>Number.isSafeInteger(e)&&Number(e)>0,D=e=>Number.isSafeInteger(e)&&Number(e)>=0,O=(e,t,n,r)=>{let i=e.get(t);return r(i)?i:n},k=(e,t)=>Math.ceil((Number.isFinite(e)&&e>0?e:0)/(Number.isFinite(t)&&t>0?t:1)),A=(e,t,n)=>{if(e<=0)return{endIndex:0,startIndex:0};let r=k(e,t),i=Math.min(Math.max(n,1),r),a=(i-1)*t+1;return{endIndex:Math.min(i*t,e),startIndex:a}},j=(e,t)=>Number.isFinite(e)?Math.min(Math.max(e,1),Number.isFinite(t)?Math.max(t,1):1):1,M=(e,t)=>{let n=Number.isFinite(e)&&e>0?e:1;return Math.max(1,Math.ceil((Number.isFinite(t)&&t>0?t:0)/n))},N=e=>{let t=(Array.isArray(e)?e:[]).map(e=>Number(e)).filter(e=>Number.isSafeInteger(e)&&e>0);return t.length>0?t:T},P=e=>N(e).reduce((e,t)=>Math.max(e,String(t).length),1),F=(e,t)=>String(M(e,t)).length})),L,R,z,B=e((()=>{n(),g(),S(),u(),p(),m(),ge(),b(),ce(),pe(),C(),he(),I(),te(),d(),R=class extends _{static{L=this}constructor(...e){super(...e),this.baseRef=ue(),this.localize=new l(this),this.divider=!1,this.disabled=!1,this.size=`medium`,this.currentPage=1,this.pageSize=25,this.pageSizeOptions=[10,25,50,100],this.totalItems=0,this.variant=`full`,this.ariaLabel=`Pagination`}static{this.DEFAULT_PAGE_SIZE=25}static{this.DEFAULT_CURRENT_PAGE=1}static{this.DEFAULT_TOTAL_ITEMS=0}static{this.styles=[ee,w]}static{this.dependencies={"syn-divider":le,"syn-icon-button":y,"syn-input":fe,"syn-option":de,"syn-select":me}}pageChangedViaUserInput(e){let t=e.target.valueAsNumber;E(t)&&this.updateCurrentPage(t)}navigationClicked(e,t){e.currentTarget?.blur(),this.updateCurrentPage(t)}sanitizeInvalidPropertyValues(e){if(e.has(`pageSize`)&&!E(this.pageSize)&&(this.pageSize=O(e,`pageSize`,L.DEFAULT_PAGE_SIZE,E)),e.has(`currentPage`)&&!E(this.currentPage)&&(this.currentPage=O(e,`currentPage`,L.DEFAULT_CURRENT_PAGE,E)),e.has(`totalItems`)&&!D(this.totalItems)&&(this.totalItems=O(e,`totalItems`,L.DEFAULT_TOTAL_ITEMS,D)),e.has(`pageSizeOptions`)){let e=N(this.pageSizeOptions);(this.pageSizeOptions.length!==e.length||this.pageSizeOptions.some((t,n)=>t!==e[n]))&&(this.pageSizeOptions=e)}}updateCurrentPage(e){let t=j(e,M(this.pageSize,this.totalItems)),{currentPage:n}=this;t!==n&&(this.emit(`syn-pagination-page-changed`,{detail:{currentPage:t,previousPage:n}}),this.currentPage=t)}pageSizeChanged(e){let{currentPage:t,pageSize:n}=this,{value:r}=e.target,i=parseInt(r,10);if(!Number.isSafeInteger(i)||i<=0)return;let a=(t-1)*n+1,o=M(i,this.totalItems),s=j(Math.floor((a-1)/i)+1,o);this.pageSize=i,this.currentPage=s,this.emit(`syn-pagination-page-size-changed`,{detail:{currentPageSize:i,previousPageSize:n}}),s!==t&&this.emit(`syn-pagination-page-changed`,{detail:{currentPage:s,previousPage:t}})}willUpdate(e){super.willUpdate(e),this.sanitizeInvalidPropertyValues(e);let t=e.get(`pageSizeOptions`);if(Array.isArray(t)&&!this.pageSizeOptions.includes(this.pageSize)){let e=this.pageSizeOptions[0],t=(this.currentPage-1)*this.pageSize+1,n=M(e,this.totalItems),r=j(Math.floor((t-1)/e)+1,n);this.pageSize=e,this.currentPage=r}if(e.has(`currentPage`)||e.has(`pageSize`)||e.has(`totalItems`)){let e=M(this.pageSize,this.totalItems),t=j(this.currentPage,e);t!==this.currentPage&&(this.currentPage=t)}}updated(e){if(super.updated(e),e.has(`pageSizeOptions`)||e.has(`pageSize`)||e.has(`totalItems`)){let e=P(this.pageSizeOptions),t=F(this.pageSize,this.totalItems),n=this.baseRef.value;n&&(n.style.setProperty(`--pagination-page-size-option-char-count`,String(e)),n.style.setProperty(`--pagination-total-pages-char-count`,String(t)))}}render(){let e=k(this.totalItems,this.pageSize),n=this.variant===`compact`,i=this.disabled||e===0,a=A(this.totalItems,this.pageSize,this.currentPage),o=this.pageSizeOptions.includes(this.pageSize)?this.pageSize:this.pageSizeOptions[0],s=this.currentPage===1,c=this.currentPage===e;return r`
      ${this.divider?r`<syn-divider part="divider"></syn-divider>`:t}
      <nav
        aria-label=${this.ariaLabel}
        class="pagination"
        part="base"
        ${x(this.baseRef)}
      >
        ${n?t:r`
          <div class="pagination__page-size-select-wrapper" part="page-size-select-wrapper">
            <syn-select
              class="pagination__page-size-select"
              ?disabled=${i}
              label=${this.localize.term(`paginationItemsPerPage`)}
              part="page-size-select"
              value=${o}
              size=${this.size}
              @syn-change=${this.pageSizeChanged}
            >
              ${this.pageSizeOptions.map(e=>r`
                <syn-option value="${e}">
                  ${e}
                </syn-option>
              `)}
            </syn-select>
            <!-- /.pagination__page-size-select -->

            <span part="page-item-summary">
              ${this.localize.term(`paginationItemSummary`,a.startIndex,a.endIndex,this.totalItems)}
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
              ?disabled=${s||i}
              label=${this.localize.term(`paginationFirstPage`)}
              library="system"
              name="first-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${e=>this.navigationClicked(e,this.currentPage-1)}
              color="primary"
              ?disabled=${s||i}
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
              ?disabled=${i}
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
              ?disabled=${c||i}
              label=${this.localize.term(`paginationNextPage`)}
              library="system"
              name="next-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${t=>this.navigationClicked(t,e)}
              color="primary"
              ?disabled=${c||i}
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
    `}},h([f({type:Boolean})],R.prototype,`divider`,void 0),h([f({reflect:!0,type:Boolean})],R.prototype,`disabled`,void 0),h([f({reflect:!0})],R.prototype,`size`,void 0),h([f({attribute:`current-page`,reflect:!0,type:Number})],R.prototype,`currentPage`,void 0),h([f({attribute:`page-size`,reflect:!0,type:Number})],R.prototype,`pageSize`,void 0),h([f({attribute:`page-size-options`,converter:{fromAttribute:e=>e.split(`,`).map(e=>{let t=parseInt(e.trim(),10);return Number.isSafeInteger(t)?t:null}).filter(Boolean)},type:Array})],R.prototype,`pageSizeOptions`,void 0),h([f({attribute:`total-items`,reflect:!0,type:Number})],R.prototype,`totalItems`,void 0),h([f({attribute:`variant`,reflect:!0})],R.prototype,`variant`,void 0),h([f({attribute:`aria-label`})],R.prototype,`ariaLabel`,void 0),R=L=h([ne(`SynPagination`)],R),z=R})),_e=e((()=>{B(),B(),z.define(`syn-pagination`)})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{_e(),n(),oe(),a(),s(),{args:V,argTypes:H}=ie(`syn-pagination`),{overrideArgs:U}=re(`syn-pagination`),{generateTemplate:W}=ae(`syn-pagination`),G={args:U([{name:`total-items`,type:`attribute`,value:500},{name:`page-size-options`,type:`attribute`,value:`10, 25, 50, 100`}],V),argTypes:H,component:`syn-pagination`,parameters:{chromatic:{modes:o},design:c(`45235-64809`),docs:{description:{component:v(`pagination`,`default`)}}},tags:[`Navigation`,`Filter`],title:`Components/syn-pagination`},K={parameters:{controls:{disable:!1},docs:{description:{story:v(`pagination`,`default`)}}},render:e=>W({args:e})},q={parameters:{docs:{description:{story:v(`pagination`,`with-divider`)}}},render:()=>r`
    <syn-pagination divider current-page="2" page-size="25" total-items="500" ></syn-pagination>
  `},J={parameters:{docs:{description:{story:v(`pagination`,`disabled`)}}},render:()=>r`
    <syn-pagination disabled current-page="1" page-size="25" total-items="500" ></syn-pagination>
  `},Y={parameters:{docs:{description:{story:v(`pagination`,`compact`)}}},render:()=>r`
    <syn-pagination variant="compact" current-page="1" page-size="25" total-items="500"></syn-pagination>
  `},X={parameters:{docs:{description:{story:v(`pagination`,`sizes`)}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large);">
      <syn-pagination current-page="1" page-size="25" total-items="500" size="small"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="medium"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="large"></syn-pagination>
    </div>
  `},Z=se({Default:K,WithDivider:q,Disabled:J,Compact:Y,Sizes:X}),K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
})`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithDivider`,`Disabled`,`Compact`,`Sizes`,`Screenshot`]}));$();export{Y as Compact,K as Default,J as Disabled,Z as Screenshot,X as Sizes,q as WithDivider,Q as __namedExportsOrder,G as default,$ as t};