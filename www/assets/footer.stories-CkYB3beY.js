import{R as e}from"./index-B-o1Wr-g.js";import{ai as i,aj as l,ak as p,al as c}from"./index-BQ-q2t26.js";import{k as m}from"./directive-helpers-CDT6qhDs.js";import{g as d,b as u,p as o}from"./component-CtnV_Tbj.js";import{d as s,c as g,a as y,b as h,e as b,g as v,f}from"./appshell-BbW2BQwM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-vFJfyp_C.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";import"./index-BjJXGaV5.js";import"./icon.component-DBZeGCfw.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./icon-B38ZGMQ7.js";import"./translations-dXj_Xr11.js";const H={parameters:{design:d("25171-45729"),docs:{description:{component:u("templates","footer")},page:()=>e.createElement(e.Fragment,null,e.createElement(i,null),e.createElement(l,null),e.createElement(p,null),e.createElement(c,{title:""})),story:{inline:!0}}},title:"Templates/Footer"},t={parameters:{chromatic:{...o?.parameters?.chromatic,disableSnapshot:!1}},render:()=>s()},r={...t,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0},viewport:{defaultViewport:"mobile2"}}},a={parameters:{chromatic:{...o?.parameters?.chromatic,disableSnapshot:!1}},render:()=>m`
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
    ${v("appshell-side-navigation")}
    ${f("appshell-side-navigation")}
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
}`,...n.parameters?.docs?.source}}};const M=["Footer","FooterTablet","FooterWithinAppshell","FooterWithinAppshellTablet"];export{t as Footer,r as FooterTablet,a as FooterWithinAppshell,n as FooterWithinAppshellTablet,M as __namedExportsOrder,H as default};
