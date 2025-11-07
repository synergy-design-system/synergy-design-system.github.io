import{d as e,g as i,p as s,x as p}from"./iframe-CHA1MzIk.js";import{T as l,S as m,b as c,c as d}from"./blocks-BtPzbdTN.js";import{g}from"./component-eiaVsgaO.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-BMBxmjb7.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";import"./translations-CnhJ1T76.js";import"./nav-item-DPU5Dhn1.js";import"./class-map-CRqJTAdA.js";import"./synergy-element-pv_h4y-S.js";import"./icon.component-DYgg5wVc.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-BfuKNPpB.js";import"./divider.component-CMDFBM3L.js";import"./slot-9EVoRGQc.js";import"./prio-nav-CxepPOy6.js";import"./dropdown.component-CJEOkrpa.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-CzRHwZ3s.js";import"./menu.component-TKmoM82M.js";import"./header-Btgi0UaE.js";import"./icon-C2-6ZbyD.js";import"./dropdown-Di7j9mzJ.js";import"./icon-button-Dhs_2EyP.js";import"./icon-button.component-BRkvKEBE.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-CDbls1at.js";import"./spinner.component-CR-B1yNh.js";import"./side-nav-wCBRMpHQ.js";import"./drawer.component-G_Fvudh4.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const ie={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(l,null),e.createElement(m,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure","SICK2018"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
