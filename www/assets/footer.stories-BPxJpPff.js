import{d as e,g as i,p as s,x as p}from"./iframe-CNjcOboT.js";import{T as l,S as m,b as c,c as d}from"./blocks-DPvtU-fj.js";import{g}from"./component-CLgtm9Q8.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-BbMBPuuj.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";import"./translations-CnhJ1T76.js";import"./nav-item-BbrM-EOH.js";import"./class-map-BAdaFs8M.js";import"./synergy-element-DcJoLspZ.js";import"./icon.component-kN9TCwag.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-CxEY91JF.js";import"./divider.component-D52avn4O.js";import"./slot-9EVoRGQc.js";import"./prio-nav-CI0gOZ3G.js";import"./dropdown.component-C7HCW1Uj.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Doz71l1O.js";import"./menu.component-CaGSvYF8.js";import"./header-ChvagJQW.js";import"./icon-DGVzpCFB.js";import"./dropdown-Bx3gOhd-.js";import"./icon-button-Cn_ngn4z.js";import"./icon-button.component-DLQ7Kxp-.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-D4Xkuwwr.js";import"./spinner.component-Cwg8q2di.js";import"./side-nav-BJGLYWFE.js";import"./drawer.component-Db4ertba.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const ie={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(l,null),e.createElement(m,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure","SICK2018"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${u()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${v()}
        ${y()}
        ${n()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${h("appshell-side-navigation")}
    ${S("appshell-side-navigation")}
  `},a={...r,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => createFooter()
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Footer,
  globals: {
    viewport: {
      value: 'mobile2'
    }
  },
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...FooterWithinAppshell,
  globals: {
    viewport: {
      value: 'mobile2'
    }
  },
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    }
  }
}`,...a.parameters?.docs?.source}}};const se=["Footer","FooterTablet","FooterWithinAppshell","FooterWithinAppshellTablet"];export{t as Footer,o as FooterTablet,r as FooterWithinAppshell,a as FooterWithinAppshellTablet,se as __namedExportsOrder,ie as default};
