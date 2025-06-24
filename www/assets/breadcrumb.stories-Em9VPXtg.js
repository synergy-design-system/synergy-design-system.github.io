import{j as e,g as i,p as m,x as a}from"./iframe-BlM2pOhP.js";import{T as o,S as c,b,c as d}from"./blocks-1N3ft2ra.js";import"./header-DrxNv1_W.js";import"./breadcrumb-J0vKcUV9.js";import"./dropdown-B1BnFKJS.js";import"./icon-button-CJEXBVCw.js";import"./icon-Db2mCSbn.js";import"./menu-item-B157po8n.js";import{g as y}from"./component-D-soQZ9J.js";import"./class-map-DvND6SRC.js";import"./property-Bk5rnH1M.js";import"./state-CE03eurR.js";import"./component.styles-rDOucGNN.js";import"./slot-9EVoRGQc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./watch-CEsCE2EF.js";import"./icon.component-kNBGlr9V.js";import"./if-defined-KMfhVUCN.js";import"./query-DAIS6qJ0.js";import"./dropdown.component-Bb398JBn.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-C3ovyAsS.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./icon-button.component-CDoGAf24.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu.component-DtFJ2mK3.js";import"./ref-Cil3w5St.js";import"./spinner.component-aWG7cD3_.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const s=()=>a`
  <style>
      body {
        margin: 0 !important;
        padding: 0 !important;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }

      syn-header {
        margin-bottom: var(--syn-spacing-x-large);
      }

      .synergy-demo-application {
        display: flex;
        flex-direction: column;
      }

      .synergy-demo-application syn-breadcrumb {
        margin-left: var(--syn-spacing-large);
      }
  </style>
`,Q={parameters:{chromatic:{...m?.parameters?.chromatic,disableSnapshot:!1},design:i("23524-12912"),docs:{description:{component:y("breadcrumb","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(o,null),e.createElement(c,null),e.createElement(b,null),e.createElement(d,{title:""}))}},tags:["Navigation"],title:"Templates/Breadcrumb"},r={render:()=>a`
    <div id="breadcrumb-responsive" class="synergy-demo-application">
      <syn-header label="Synergy"></syn-header>
      <syn-breadcrumb>
        <syn-breadcrumb-item>Home</syn-breadcrumb-item>
        <syn-breadcrumb-item class="truncated">
          <syn-dropdown>
            <syn-icon-button slot="trigger" size="small" label="More options" name="more_horiz">
            </syn-icon-button>
            <syn-menu>
              <syn-menu-item>Service and support</syn-menu-item>
              <syn-menu-item>Service category</syn-menu-item>
            </syn-menu>
          </syn-dropdown>
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Service and support</syn-breadcrumb-item>
        <syn-breadcrumb-item>Service category</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-icon class="back-icon" name="arrow_back" slot="prefix"></syn-icon>
          Service
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Current service page</syn-breadcrumb-item>
      </syn-breadcrumb>
    </div>
    ${s()}
    <style>
      #breadcrumb-responsive {
        container-type: inline-size;
      }

      /**
      * Styling for medium 
      **/
      #breadcrumb-responsive .truncated syn-icon-button::part(base) {
        padding: 0;
      }
      #breadcrumb-responsive .truncated syn-icon-button {
        vertical-align: middle;
      }

      @container (max-width: 639px) and (min-width: 480px) {
        /* Hide the two breadcrumbs, which should be shown in the drop down */
        #breadcrumb-responsive syn-breadcrumb-item:nth-of-type(3),
        #breadcrumb-responsive syn-breadcrumb-item:nth-of-type(4) {
          display: none;
        }
      }

      /**
      * Styling for large
      **/
      @container (min-width: 640px) {
        #breadcrumb-responsive .truncated {
          display: none;
        }
      }

      /**
      * Styling for large and medium 
      **/
      @container (min-width: 480px) {
        /* Hide the back icon for the medium and large size */
        #breadcrumb-responsive .back-icon {
          display: none;
        }
      }

      /**
      * Styling for small 
      **/
      @container (max-width: 479px) {
        /* Hide the separator of the breadcrumb */
        #breadcrumb-responsive syn-breadcrumb-item::part(separator){
          display: none;
        }

        /* Only show the previous page breadcrumb */
        #breadcrumb-responsive syn-breadcrumb-item:not(:nth-last-of-type(2)) {
          display: none;
        }
      }
    </style>
  `},n={render:()=>a`
    <div id="breadcrumb-truncated" class="synergy-demo-application">
      <syn-header label="Synergy"></syn-header>
      <syn-breadcrumb>
        <syn-breadcrumb-item>Home</syn-breadcrumb-item>
        <syn-breadcrumb-item class="truncated">
          <syn-dropdown>
            <syn-icon-button slot="trigger" size="small" label="More options" name="more_horiz">
              </syn-icon-button>
              <syn-menu>
                <syn-menu-item>Service and support</syn-menu-item>
                <syn-menu-item>Service category</syn-menu-item>
              </syn-menu>
            </syn-dropdown>
          </syn-breadcrumb-item>
          <syn-breadcrumb-item>
            Service
          </syn-breadcrumb-item>
          <syn-breadcrumb-item>Current service page</syn-breadcrumb-item>
        </syn-breadcrumb>
    </div>
    ${s()}
    <style>
      #breadcrumb-truncated .truncated syn-icon-button::part(base) {
        padding: 0;
      }
      #breadcrumb-truncated .truncated syn-icon-button {
        vertical-align: middle;
      }
    </style>
 `},t={globals:{viewport:{value:"mobile1"}},render:()=>a`
    <div id="breadcrumb-short" class="synergy-demo-application">
      <syn-header label="Synergy"></syn-header>
      <syn-breadcrumb >
        <syn-breadcrumb-item>Home</syn-breadcrumb-item>
        <syn-breadcrumb-item>Service and support</syn-breadcrumb-item>
        <syn-breadcrumb-item>Service category</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-icon class="back-icon" name="arrow_back" slot="prefix"></syn-icon>
          Service
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Current service page</syn-breadcrumb-item>
      </syn-breadcrumb>
    </div>
    ${s()}
    <style>
      /* Hide the separator of the breadcrumb */
      #breadcrumb-short syn-breadcrumb-item::part(separator){
        display: none;
      }

      /* Only show the previous page breadcrumb */
      #breadcrumb-short syn-breadcrumb-item:not(:nth-last-of-type(2)) {
        display: none;
      }
    </style>
 `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div id="breadcrumb-responsive" class="synergy-demo-application">
      <syn-header label="Synergy"></syn-header>
      <syn-breadcrumb>
        <syn-breadcrumb-item>Home</syn-breadcrumb-item>
        <syn-breadcrumb-item class="truncated">
          <syn-dropdown>
            <syn-icon-button slot="trigger" size="small" label="More options" name="more_horiz">
            </syn-icon-button>
            <syn-menu>
              <syn-menu-item>Service and support</syn-menu-item>
              <syn-menu-item>Service category</syn-menu-item>
            </syn-menu>
          </syn-dropdown>
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Service and support</syn-breadcrumb-item>
        <syn-breadcrumb-item>Service category</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-icon class="back-icon" name="arrow_back" slot="prefix"></syn-icon>
          Service
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Current service page</syn-breadcrumb-item>
      </syn-breadcrumb>
    </div>
    \${createSharedStyles()}
    <style>
      #breadcrumb-responsive {
        container-type: inline-size;
      }

      /**
      * Styling for medium 
      **/
      #breadcrumb-responsive .truncated syn-icon-button::part(base) {
        padding: 0;
      }
      #breadcrumb-responsive .truncated syn-icon-button {
        vertical-align: middle;
      }

      @container (max-width: 639px) and (min-width: 480px) {
        /* Hide the two breadcrumbs, which should be shown in the drop down */
        #breadcrumb-responsive syn-breadcrumb-item:nth-of-type(3),
        #breadcrumb-responsive syn-breadcrumb-item:nth-of-type(4) {
          display: none;
        }
      }

      /**
      * Styling for large
      **/
      @container (min-width: 640px) {
        #breadcrumb-responsive .truncated {
          display: none;
        }
      }

      /**
      * Styling for large and medium 
      **/
      @container (min-width: 480px) {
        /* Hide the back icon for the medium and large size */
        #breadcrumb-responsive .back-icon {
          display: none;
        }
      }

      /**
      * Styling for small 
      **/
      @container (max-width: 479px) {
        /* Hide the separator of the breadcrumb */
        #breadcrumb-responsive syn-breadcrumb-item::part(separator){
          display: none;
        }

        /* Only show the previous page breadcrumb */
        #breadcrumb-responsive syn-breadcrumb-item:not(:nth-last-of-type(2)) {
          display: none;
        }
      }
    </style>
  \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div id="breadcrumb-truncated" class="synergy-demo-application">
      <syn-header label="Synergy"></syn-header>
      <syn-breadcrumb>
        <syn-breadcrumb-item>Home</syn-breadcrumb-item>
        <syn-breadcrumb-item class="truncated">
          <syn-dropdown>
            <syn-icon-button slot="trigger" size="small" label="More options" name="more_horiz">
              </syn-icon-button>
              <syn-menu>
                <syn-menu-item>Service and support</syn-menu-item>
                <syn-menu-item>Service category</syn-menu-item>
              </syn-menu>
            </syn-dropdown>
          </syn-breadcrumb-item>
          <syn-breadcrumb-item>
            Service
          </syn-breadcrumb-item>
          <syn-breadcrumb-item>Current service page</syn-breadcrumb-item>
        </syn-breadcrumb>
    </div>
    \${createSharedStyles()}
    <style>
      #breadcrumb-truncated .truncated syn-icon-button::part(base) {
        padding: 0;
      }
      #breadcrumb-truncated .truncated syn-icon-button {
        vertical-align: middle;
      }
    </style>
 \`
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1'
    }
  },
  render: () => html\`
    <div id="breadcrumb-short" class="synergy-demo-application">
      <syn-header label="Synergy"></syn-header>
      <syn-breadcrumb >
        <syn-breadcrumb-item>Home</syn-breadcrumb-item>
        <syn-breadcrumb-item>Service and support</syn-breadcrumb-item>
        <syn-breadcrumb-item>Service category</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-icon class="back-icon" name="arrow_back" slot="prefix"></syn-icon>
          Service
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Current service page</syn-breadcrumb-item>
      </syn-breadcrumb>
    </div>
    \${createSharedStyles()}
    <style>
      /* Hide the separator of the breadcrumb */
      #breadcrumb-short syn-breadcrumb-item::part(separator){
        display: none;
      }

      /* Only show the previous page breadcrumb */
      #breadcrumb-short syn-breadcrumb-item:not(:nth-last-of-type(2)) {
        display: none;
      }
    </style>
 \`
}`,...t.parameters?.docs?.source}}};const U=["BreadcrumbResponsive","BreadcrumbTruncated","BreadcrumbShort"];export{r as BreadcrumbResponsive,t as BreadcrumbShort,n as BreadcrumbTruncated,U as __namedExportsOrder,Q as default};
