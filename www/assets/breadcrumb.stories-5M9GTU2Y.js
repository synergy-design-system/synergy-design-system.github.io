import{R as e,g as i,C as m,p as o,x as t}from"./iframe-BsIwdOO5.js";import{T as c,S as b,b as d,c as y}from"./blocks-D2HkSL-i.js";import"./header-Dp6TYwf0.js";import"./breadcrumb-Edpec360.js";import"./dropdown-CMplf3Y0.js";import"./icon-button-CTxASteG.js";import"./icon-B1rw4SCF.js";import"./menu-item-DoHZ9eXm.js";import{g as u}from"./component-OCyU0ZKL.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-BYJlmUdT.js";import"./synergy-element-D2zAoy3a.js";import"./icon.component-DfYj9s5e.js";import"./watch-CEsCE2EF.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./if-defined-xr0GHsnH.js";import"./query-D0jTsbLw.js";import"./dropdown.component-BxIbx-z8.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-B5VnEN-U.js";import"./icon-button.component-CnVlTvkg.js";import"./decorator-EjbSnxDC.js";import"./functions-CbkBBXWA.js";import"./menu.component-BlMDZagG.js";import"./spinner.component-DaDrUPwU.js";import"./index-CQ0aEGxp.js";import"./_docs-DCc6stEZ.js";const s=()=>t`
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
`,K={parameters:{chromatic:{...o?.parameters?.chromatic,disableSnapshot:!1,modes:m},design:i("23524-12912"),docs:{description:{component:u("breadcrumb","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(c,null),e.createElement(b,null),e.createElement(d,null),e.createElement(y,{title:""}))}},tags:["Navigation"],title:"Templates/Breadcrumb"},r={render:()=>t`
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
        /* Remove the margin of the prefix slot */
        #breadcrumb-responsive syn-breadcrumb-item:has(> .back-icon)::part(prefix) {
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
  `},n={render:()=>t`
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
 `},a={globals:{viewport:{value:"mobile1"}},render:()=>t`
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
        /* Remove the margin of the prefix slot */
        #breadcrumb-responsive syn-breadcrumb-item:has(> .back-icon)::part(prefix) {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const L=["BreadcrumbResponsive","BreadcrumbTruncated","BreadcrumbShort"];export{r as BreadcrumbResponsive,a as BreadcrumbShort,n as BreadcrumbTruncated,L as __namedExportsOrder,K as default};
