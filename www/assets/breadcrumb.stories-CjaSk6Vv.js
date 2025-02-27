import{R as e}from"./index-CYQpqK1Q.js";import{T as i,S as m,b as c,c as o}from"./index-CmscGxvF.js";import{k as t}from"./directive-helpers-B-JxG5af.js";import{g as d,a as b,p as y}from"./component-DaH5QtWM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bl7A9aNV.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";import"./if-defined-98Biveud.js";import"./ref-DMm6gEez.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./icon-button-hzo19ImS.js";import"./library-UYMiFSYt.js";import"./icon.component-Bc5b5_ig.js";import"./index-Vx7n56Jp.js";import"./icon-Dl5i9ygo.js";const s=()=>t`
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
`,$={parameters:{chromatic:{...y?.parameters?.chromatic,disableSnapshot:!1},design:b("23524-12912"),docs:{description:{component:d("templates","breadcrumb")},page:()=>e.createElement(e.Fragment,null,e.createElement(i,null),e.createElement(m,null),e.createElement(c,null),e.createElement(o,{title:""}))}},title:"Templates/Breadcrumb"},n={render:()=>t`
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
  `},r={render:()=>t`
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
 `},a={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>t`
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
 `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
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
}`,...a.parameters?.docs?.source}}};const T=["BreadcrumbResponsive","BreadcrumbTruncated","BreadcrumbShort"];export{n as BreadcrumbResponsive,a as BreadcrumbShort,r as BreadcrumbTruncated,T as __namedExportsOrder,$ as default};
