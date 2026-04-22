import{k as O,A as x,c as l,C as T,d as D}from"./iframe-hncc6fn8.js";import{c as w,n as c,S as N}from"./synergy-element-ZP8Aphe2.js";import{e as A,n as E}from"./ref-CFo4hYfC.js";import{L as F}from"./controller-0nuky388.js";import{S as L}from"./divider.component-CAm9t5hy.js";import{S as M}from"./icon-button.component-BkakauBp.js";import{S as U}from"./input.component-B9glR2mL.js";import{S as k}from"./utility-BlB98DVP.js";import{S as V}from"./select.component-Ct42h636.js";import{e as j}from"./decorator-jbWt9cIm.js";import{g as m,a as R,s as G,b as B,c as W}from"./component-BDcZ8_k2.js";import"./preload-helper-PPVm8Dsz.js";import"./watch-CEsCE2EF.js";import"./class-map-J4m71D6f.js";import"./if-defined-Df6Qu0g8.js";import"./icon.component-uI_62ALx.js";import"./query-D0jTsbLw.js";import"./default-value-DoIyiDFw.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./live-DuCdd6xk.js";import"./form-control.styles-COnyBaWJ.js";import"./functions-DCU90qiI.js";import"./animation-registry-DyRYqZdt.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./popup.component-BvGfN3ZB.js";import"./tag.component-DNEik5mR.js";import"./index-3hbeBem-.js";import"./_docs-VWJ8UqMU.js";const Z=O`
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
`,H=[10,25,50,100],d=e=>Number.isSafeInteger(e)&&Number(e)>0,I=e=>Number.isSafeInteger(e)&&Number(e)>=0,_=(e,t,a,i)=>{const n=e.get(t);return i(n)?n:a},$=(e,t)=>{const a=Number.isFinite(e)&&e>0?e:0,i=Number.isFinite(t)&&t>0?t:1;return Math.ceil(a/i)},q=(e,t,a)=>{if(e<=0)return{endIndex:0,startIndex:0};const i=$(e,t),n=Math.min(Math.max(a,1),i),r=(n-1)*t+1;return{endIndex:Math.min(n*t,e),startIndex:r}},f=(e,t)=>{if(!Number.isFinite(e))return 1;const a=Number.isFinite(t)?Math.max(t,1):1;return Math.min(Math.max(e,1),a)},u=(e,t)=>{const a=Number.isFinite(e)&&e>0?e:1,i=Number.isFinite(t)&&t>0?t:0;return Math.max(1,Math.ceil(i/a))},C=e=>{const a=(Array.isArray(e)?e:[]).map(i=>Number(i)).filter(i=>Number.isSafeInteger(i)&&i>0);return a.length>0?a:H},J=e=>C(e).reduce((t,a)=>Math.max(t,String(a).length),1),K=(e,t)=>String(u(e,t)).length;var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,g=(e,t,a,i)=>{for(var n=i>1?void 0:i?X(t,a):t,r=e.length-1,p;r>=0;r--)(p=e[r])&&(n=(i?p(t,a,n):p(n))||n);return i&&n&&Q(t,a,n),n};let s=class extends N{constructor(){super(...arguments),this.baseRef=A(),this.localize=new F(this),this.divider=!1,this.disabled=!1,this.size="medium",this.currentPage=1,this.pageSize=25,this.pageSizeOptions=[10,25,50,100],this.totalItems=0,this.variant="full",this.ariaLabel="Pagination"}pageChangedViaUserInput(e){const t=e.target.valueAsNumber;d(t)&&this.updateCurrentPage(t)}navigationClicked(e,t){e.currentTarget?.blur(),this.updateCurrentPage(t)}sanitizeInvalidPropertyValues(e){if(e.has("pageSize")&&!d(this.pageSize)&&(this.pageSize=_(e,"pageSize",s.DEFAULT_PAGE_SIZE,d)),e.has("currentPage")&&!d(this.currentPage)&&(this.currentPage=_(e,"currentPage",s.DEFAULT_CURRENT_PAGE,d)),e.has("totalItems")&&!I(this.totalItems)&&(this.totalItems=_(e,"totalItems",s.DEFAULT_TOTAL_ITEMS,I)),e.has("pageSizeOptions")){const t=C(this.pageSizeOptions);(this.pageSizeOptions.length!==t.length||this.pageSizeOptions.some((i,n)=>i!==t[n]))&&(this.pageSizeOptions=t)}}updateCurrentPage(e){const t=u(this.pageSize,this.totalItems),a=f(e,t),{currentPage:i}=this;a!==i&&(this.emit("syn-pagination-page-changed",{detail:{currentPage:a,previousPage:i}}),this.currentPage=a)}pageSizeChanged(e){const{currentPage:t,pageSize:a}=this,i=e.target,{value:n}=i,r=parseInt(n,10);if(!Number.isSafeInteger(r)||r<=0)return;const p=(t-1)*a+1,o=u(r,this.totalItems),P=f(Math.floor((p-1)/r)+1,o);this.pageSize=r,this.currentPage=P,this.emit("syn-pagination-page-size-changed",{detail:{currentPageSize:r,previousPageSize:a}}),P!==t&&this.emit("syn-pagination-page-changed",{detail:{currentPage:P,previousPage:t}})}willUpdate(e){super.willUpdate(e),this.sanitizeInvalidPropertyValues(e);const t=e.get("pageSizeOptions");if(Array.isArray(t)&&!this.pageSizeOptions.includes(this.pageSize)){const i=this.pageSizeOptions[0],n=(this.currentPage-1)*this.pageSize+1,r=u(i,this.totalItems),p=f(Math.floor((n-1)/i)+1,r);this.pageSize=i,this.currentPage=p}if(e.has("currentPage")||e.has("pageSize")||e.has("totalItems")){const i=u(this.pageSize,this.totalItems),n=f(this.currentPage,i);n!==this.currentPage&&(this.currentPage=n)}}updated(e){if(super.updated(e),e.has("pageSizeOptions")||e.has("pageSize")||e.has("totalItems")){const t=J(this.pageSizeOptions),a=K(this.pageSize,this.totalItems),i=this.baseRef.value;i&&(i.style.setProperty("--pagination-page-size-option-char-count",String(t)),i.style.setProperty("--pagination-total-pages-char-count",String(a)))}}render(){const e=$(this.totalItems,this.pageSize),t=this.variant==="compact",a=this.disabled||e===0,i=q(this.totalItems,this.pageSize,this.currentPage),n=this.pageSizeOptions.includes(this.pageSize)?this.pageSize:this.pageSizeOptions[0],r=this.currentPage===1,p=this.currentPage===e;return l`
      ${this.divider?l`<syn-divider part="divider"></syn-divider>`:x}
      <nav
        aria-label=${this.ariaLabel}
        class="pagination"
        part="base"
        ${E(this.baseRef)}
      >
        ${t?x:l`
          <div class="pagination__page-size-select-wrapper" part="page-size-select-wrapper">
            <syn-select
              class="pagination__page-size-select"
              ?disabled=${a}
              label=${this.localize.term("paginationItemsPerPage")}
              part="page-size-select"
              value=${n}
              size=${this.size}
              @syn-change=${this.pageSizeChanged}
            >
              ${this.pageSizeOptions.map(o=>l`
                <syn-option value="${o}">
                  ${o}
                </syn-option>
              `)}
            </syn-select>
            <!-- /.pagination__page-size-select -->

            <span part="page-item-summary">
              ${this.localize.term("paginationItemSummary",i.startIndex,i.endIndex,this.totalItems)}
            </span>
            <!-- /.pagination__page-item-summary -->
          </div>
          <!-- /.pagination__page-size-select-wrapper -->
        `}

        <div class="pagination__navigation" part="navigation">
          <section>
            <syn-icon-button
              @click=${o=>this.navigationClicked(o,1)}
              color="primary"
              ?disabled=${r||a}
              label=${this.localize.term("paginationFirstPage")}
              library="system"
              name="first-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${o=>this.navigationClicked(o,this.currentPage-1)}
              color="primary"
              ?disabled=${r||a}
              label=${this.localize.term("paginationPreviousPage")}
              library="system"
              name="previous-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>

          <section part="page-input-section">
            <syn-input
              class="pagination__page-input"
              ?disabled=${a}
              label=${this.localize.term("paginationInputLabel")}
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
            
            <span>${this.localize.term("paginationOfTotalPages",e)}</span>
          </section>

          <section>
            <syn-icon-button
              @click=${o=>this.navigationClicked(o,this.currentPage+1)}
              color="primary"
              ?disabled=${p||a}
              label=${this.localize.term("paginationNextPage")}
              library="system"
              name="next-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>

            <syn-icon-button
              @click=${o=>this.navigationClicked(o,e)}
              color="primary"
              ?disabled=${p||a}
              label=${this.localize.term("paginationLastPage")}
              library="system"
              name="last-page"
              part="navigation-action"
              size=${this.size}
            ></syn-icon-button>
          </section>
        </div>
        <!-- /.pagination__navigation -->
      </nav>
    `}};s.DEFAULT_PAGE_SIZE=25;s.DEFAULT_CURRENT_PAGE=1;s.DEFAULT_TOTAL_ITEMS=0;s.styles=[w,Z];s.dependencies={"syn-divider":L,"syn-icon-button":M,"syn-input":U,"syn-option":k,"syn-select":V};g([c({type:Boolean})],s.prototype,"divider",2);g([c({reflect:!0,type:Boolean})],s.prototype,"disabled",2);g([c({reflect:!0})],s.prototype,"size",2);g([c({attribute:"current-page",reflect:!0,type:Number})],s.prototype,"currentPage",2);g([c({attribute:"page-size",reflect:!0,type:Number})],s.prototype,"pageSize",2);g([c({attribute:"page-size-options",converter:{fromAttribute:e=>e.split(",").map(t=>{const a=parseInt(t.trim(),10);return Number.isSafeInteger(a)?a:null}).filter(Boolean)},type:Array})],s.prototype,"pageSizeOptions",2);g([c({attribute:"total-items",reflect:!0,type:Number})],s.prototype,"totalItems",2);g([c({attribute:"variant",reflect:!0})],s.prototype,"variant",2);g([c({attribute:"aria-label"})],s.prototype,"ariaLabel",2);s=g([j("SynPagination")],s);s.define("syn-pagination");const{args:Y,argTypes:ee}=G("syn-pagination"),{overrideArgs:te}=W("syn-pagination"),{generateTemplate:ae}=B("syn-pagination"),Ae={args:te([{name:"total-items",type:"attribute",value:500},{name:"page-size-options",type:"attribute",value:"10, 25, 50, 100"}],Y),argTypes:ee,component:"syn-pagination",parameters:{chromatic:{modes:T},design:D("45235-64809"),docs:{description:{component:m("pagination","default")}}},tags:["Navigation","Filter"],title:"Components/syn-pagination"},h={parameters:{controls:{disable:!1},docs:{description:{story:m("pagination","default")}}},render:e=>ae({args:e})},y={parameters:{docs:{description:{story:m("pagination","with-divider")}}},render:()=>l`
    <syn-pagination divider current-page="2" page-size="25" total-items="500" ></syn-pagination>
  `},z={parameters:{docs:{description:{story:m("pagination","disabled")}}},render:()=>l`
    <syn-pagination disabled current-page="1" page-size="25" total-items="500" ></syn-pagination>
  `},b={parameters:{docs:{description:{story:m("pagination","compact")}}},render:()=>l`
    <syn-pagination variant="compact" current-page="1" page-size="25" total-items="500"></syn-pagination>
  `},v={parameters:{docs:{description:{story:m("pagination","sizes")}}},render:()=>l`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large);">
      <syn-pagination current-page="1" page-size="25" total-items="500" size="small"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="medium"></syn-pagination>
      <syn-pagination current-page="1" page-size="25" total-items="500" size="large"></syn-pagination>
    </div>
  `},S=R({Default:h,WithDivider:y,Disabled:z,Compact:b,Sizes:v});h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithDivider,
  Disabled,
  Compact,
  Sizes
})`,...S.parameters?.docs?.source}}};const Ee=["Default","WithDivider","Disabled","Compact","Sizes","Screenshot"];export{b as Compact,h as Default,z as Disabled,S as Screenshot,v as Sizes,y as WithDivider,Ee as __namedExportsOrder,Ae as default};
