import{R as e}from"./index-_2TAQcTa.js";import{T as i,S as l,b as p,c}from"./index-CBdoT7DT.js";import{x as m}from"./directive-helpers-Dvm_Ferq.js";import{g as d,a as u,p as o}from"./component-zI47X1tU.js";import{d as s,c as g,a as y,b as h,e as b,g as f,f as v}from"./appshell-BpeYlaOa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-pPpPM5Pm.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";import"./library-BeKtmk-e.js";import"./ref-mC-OfJbg.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./icon-button-dyHaNbso.js";import"./functions-CDi3doZH.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CDx8exsq.js";import"./translations-CnhJ1T76.js";const O={parameters:{design:u("25171-45729"),docs:{description:{component:d("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(i,null),e.createElement(l,null),e.createElement(p,null),e.createElement(c,{title:""})),story:{inline:!0}}},title:"Templates/Footer"},t={parameters:{chromatic:{...o?.parameters?.chromatic,disableSnapshot:!1}},render:()=>s()},r={...t,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0},viewport:{defaultViewport:"mobile2"}}},a={parameters:{chromatic:{...o?.parameters?.chromatic,disableSnapshot:!1}},render:()=>m`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${g()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${y()}
        ${h()}
        ${s()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${f("appshell-side-navigation")}
    ${v("appshell-side-navigation")}
  `},n={...a,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0},viewport:{defaultViewport:"mobile2"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    chromatic: {
      ...storyBookPreviewConfig?.parameters?.chromatic,
      disableSnapshot: false
    }
  },
  render: () => createFooter()
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Footer,
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    },
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    chromatic: {
      ...storyBookPreviewConfig?.parameters?.chromatic,
      disableSnapshot: false
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      \${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createSideNav()}
        \${createMainContent()}
        \${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    \${createDemoNavigation('appshell-side-navigation')}
    \${createSidebarConnector('appshell-side-navigation')}
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...FooterWithinAppshell,
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    },
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...n.parameters?.docs?.source}}};const R=["Footer","FooterTablet","FooterWithinAppshell","FooterWithinAppshellTablet"];export{t as Footer,r as FooterTablet,a as FooterWithinAppshell,n as FooterWithinAppshellTablet,R as __namedExportsOrder,O as default};
