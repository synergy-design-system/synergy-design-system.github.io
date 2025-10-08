import{d as e,g as i,p as m,x as a}from"./iframe-DETqXCDE.js";import{T as o,S as c,b as d,c as b}from"./blocks-B3A6QJmY.js";import"./header-w6P8HbJK.js";import"./breadcrumb-DXNR3l7R.js";import"./dropdown-C-NPqnsO.js";import"./icon-button-Dp2Qnvmz.js";import"./icon-Bb_g6zKz.js";import"./menu-item-BYl8eLcB.js";import{g as y}from"./component-B4eUbZSL.js";import"./preload-helper-Ct5FWWRu.js";import"./class-map-CA1EWqNv.js";import"./synergy-element-C3Jrd-QR.js";import"./icon.component-CWoOaWeI.js";import"./watch-CEsCE2EF.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./if-defined-Bok6JrVO.js";import"./query-DAIS6qJ0.js";import"./dropdown.component-swILvxnd.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-B-qEWZSS.js";import"./icon-button.component-D7k8Rj8_.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu.component-DQr7ysc3.js";import"./spinner.component-DI5twqa2.js";import"./index-Bkk0Z6Ex.js";import"./_docs-DKsB8ZHg.js";const s=()=>a`
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
`,G={parameters:{chromatic:{...m?.parameters?.chromatic,disableSnapshot:!1},design:i("23524-12912"),docs:{description:{component:y("breadcrumb","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(o,null),e.createElement(c,null),e.createElement(d,null),e.createElement(b,{title:""}))}},tags:["Navigation","SICK2018"],title:"Templates/Breadcrumb"},r={render:()=>a`
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
}`,...t.parameters?.docs?.source}}};const J=["BreadcrumbResponsive","BreadcrumbTruncated","BreadcrumbShort"];export{r as BreadcrumbResponsive,t as BreadcrumbShort,n as BreadcrumbTruncated,J as __namedExportsOrder,G as default};
