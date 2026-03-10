import{C as i,b as s,c as p,R as e,d as l}from"./iframe--eASrTwU.js";import{T as m,S as c,b as d,c as g}from"./blocks-CefN1NQ5.js";import{g as u}from"./component-AIDHrPx8.js";import{b as n,c as b,g as v,a as y,d as h,e as S,f as F}from"./appshell-BwS592Rs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";import"./translations-CnhJ1T76.js";import"./nav-item-CSIDY_18.js";import"./class-map-CrUBn9Pa.js";import"./synergy-element-Bz57av_A.js";import"./icon.component-DlYQ8xlz.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-C4n4pMDQ.js";import"./divider.component-CtSLaFG7.js";import"./slot-9EVoRGQc.js";import"./prio-nav-znTEp78f.js";import"./dropdown.component-DoSovaHu.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Cg3mqQ32.js";import"./menu.component-BmLjth0C.js";import"./header-Ddxmb9_U.js";import"./icon-hVpkOIAq.js";import"./dropdown-CxjASNms.js";import"./icon-button-BgrIEKIZ.js";import"./icon-button.component-B25oqb10.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./menu-item-Dg-IcPFG.js";import"./spinner.component-C9pjVp8A.js";import"./side-nav-DJbd_WA1.js";import"./drawer.component-u_okHYvc.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const se={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:l("25171-45729"),docs:{chromatic:{modes:i},description:{component:u("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(c,null),e.createElement(d,null),e.createElement(g,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
