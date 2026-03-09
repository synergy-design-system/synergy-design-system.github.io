import{C as i,b as s,c as p,R as e,d as l}from"./iframe-OI-W47sE.js";import{T as m,S as c,b as d,c as g}from"./blocks-DVsxZSj_.js";import{g as u}from"./component-C7EW-_mv.js";import{b as n,c as b,g as v,a as y,d as h,e as S,f as F}from"./appshell-CfBFCINV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";import"./translations-CnhJ1T76.js";import"./nav-item-X9Ot9K9r.js";import"./class-map-BXP5nj_A.js";import"./synergy-element-CDccwnU_.js";import"./icon.component-DZRgsOxP.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-CTCs6BF-.js";import"./divider.component-_RqfbsvR.js";import"./slot-9EVoRGQc.js";import"./prio-nav-DrJm-pqj.js";import"./dropdown.component-DfSuQsh-.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-5u9iTBSx.js";import"./menu.component-O_sTqToN.js";import"./header-BvyNw5mG.js";import"./icon-Bsj09ulO.js";import"./dropdown-BdqJnSDn.js";import"./icon-button-ay3zF1Km.js";import"./icon-button.component-Dun_qe4y.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./menu-item-DfXnI41a.js";import"./spinner.component-DNDvNCuE.js";import"./side-nav-CjjeigPX.js";import"./drawer.component-QVvC-57X.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const se={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:l("25171-45729"),docs:{chromatic:{modes:i},description:{component:u("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(c,null),e.createElement(d,null),e.createElement(g,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${b()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${v()}
        ${y()}
        ${n()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${h()}
    ${S("appshell-side-navigation")}
    ${F("appshell-side-navigation")}
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
}`,...a.parameters?.docs?.source}}};const pe=["Footer","FooterTablet","FooterWithinAppshell","FooterWithinAppshellTablet"];export{t as Footer,o as FooterTablet,r as FooterWithinAppshell,a as FooterWithinAppshellTablet,pe as __namedExportsOrder,se as default};
