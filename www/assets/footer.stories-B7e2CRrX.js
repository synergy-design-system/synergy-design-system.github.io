import{d as e,g as i,p as s,x as p}from"./iframe-DkuhNNKt.js";import{T as l,S as m,b as c,c as d}from"./blocks-Duhya2Ag.js";import{g}from"./component-BcSeKVdu.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-I45j3OLV.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./translations-CnhJ1T76.js";import"./nav-item-C-5dXV0t.js";import"./class-map-ObrBcWXB.js";import"./synergy-element-DwyHbzMO.js";import"./icon.component-0vAZ8ena.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-C0_zlWaf.js";import"./divider.component-ClYMPUJY.js";import"./slot-9EVoRGQc.js";import"./prio-nav-ggVdyZqy.js";import"./dropdown.component-DpPnelgQ.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-DtEOUHEx.js";import"./menu.component-pIv_Sw_r.js";import"./header-BxC4QELM.js";import"./icon-DiudvbMD.js";import"./dropdown-blzjdAuy.js";import"./icon-button-6lJGw91t.js";import"./icon-button.component-CGrOsJiq.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-iULwNPIy.js";import"./spinner.component-DXnlr2TD.js";import"./side-nav-Bs-7fS_K.js";import"./drawer.component-D4mz7xa6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const ie={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(l,null),e.createElement(m,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
