import{j as e,g as i,p as s,x as p}from"./iframe-PfQ-yHii.js";import{T as m,S as l,b as c,c as d}from"./blocks-DF3rWpnz.js";import{g}from"./component-DpUHzmc7.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-DMFdWk7l.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./translations-CnhJ1T76.js";import"./nav-item-B8UIbS6H.js";import"./class-map--fBJekhC.js";import"./property-C5Clh3dC.js";import"./state-D49XWjPc.js";import"./query-DAIS6qJ0.js";import"./if-defined-D0RU9ZN4.js";import"./divider.component-D8dZDfPw.js";import"./watch-CEsCE2EF.js";import"./component.styles-DB_F015F.js";import"./icon.component-D3GPJxDS.js";import"./slot-9EVoRGQc.js";import"./prio-nav-ClDHzko4.js";import"./dropdown.component-0g81q2-C.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-CpBw_X5T.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./menu.component-CkzmwopW.js";import"./header-BuDaMmOR.js";import"./icon-BSvoqWI1.js";import"./dropdown-BQ5bSLWD.js";import"./icon-button-C4F4cYU0.js";import"./icon-button.component-D7T2-rAC.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-BJ9bZxfr.js";import"./ref-B5xhEywy.js";import"./spinner.component-ChKoHCjt.js";import"./side-nav-CU9DadzE.js";import"./drawer.component-Cec4eEfP.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const me={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(l,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
}`,...a.parameters?.docs?.source}}};const le=["Footer","FooterTablet","FooterWithinAppshell","FooterWithinAppshellTablet"];export{t as Footer,o as FooterTablet,r as FooterWithinAppshell,a as FooterWithinAppshellTablet,le as __namedExportsOrder,me as default};
