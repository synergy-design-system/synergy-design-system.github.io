import{d as e,g as i,p as s,x as p}from"./iframe-BjS1ahOZ.js";import{T as l,S as m,b as c,c as d}from"./blocks-CFgbVYBC.js";import{g}from"./component-RZ2Rn8vO.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-eWc7BS5G.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-DKsB8ZHg.js";import"./translations-CnhJ1T76.js";import"./nav-item-7rCVRFfg.js";import"./class-map-D86e78MX.js";import"./synergy-element-B2Z0Dfk0.js";import"./icon.component-lcjrdti5.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-ZLyPoleQ.js";import"./divider.component-BtrXdWgU.js";import"./slot-9EVoRGQc.js";import"./prio-nav-BDrambAE.js";import"./dropdown.component-CQW1g39V.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Bq9ayzou.js";import"./menu.component-Don8jT8A.js";import"./header-Cd7Czk3-.js";import"./icon-Cpj9-QHb.js";import"./dropdown-Dk4FCTIO.js";import"./icon-button-B8ffmGVL.js";import"./icon-button.component-CXRY-jH6.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-B6TFJwHO.js";import"./spinner.component-Tj035ZM_.js";import"./side-nav-Bx1TMY8l.js";import"./drawer.component-DtU_7Io9.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const ie={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(l,null),e.createElement(m,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure","SICK2018"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
