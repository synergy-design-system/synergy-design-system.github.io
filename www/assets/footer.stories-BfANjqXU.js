import{j as e,g as i,p as s,x as p}from"./iframe-C60qSCwS.js";import{T as m,S as l,b as c,c as d}from"./blocks-DKn7kS3c.js";import{g}from"./component-j7DF8I8k.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-bXcyxwyi.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./translations-CnhJ1T76.js";import"./nav-item-CVGJClow.js";import"./class-map-kiCvOja2.js";import"./property-Dgx3L-LF.js";import"./state-CpqkXG2a.js";import"./query-DAIS6qJ0.js";import"./if-defined-CzvRrFBJ.js";import"./divider.component-D61O8mB4.js";import"./watch-CEsCE2EF.js";import"./component.styles-DoY_daum.js";import"./icon.component-DHDIBiVU.js";import"./slot-9EVoRGQc.js";import"./prio-nav-CyVXqRBQ.js";import"./dropdown.component-BdAyIcOy.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-CnLhE_m5.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./menu.component-Czq2sOHa.js";import"./header-CYMlFmoT.js";import"./icon-DrMhELL1.js";import"./dropdown-DWbwkdMT.js";import"./icon-button-Ct81t9-X.js";import"./icon-button.component-B42h5qVc.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-B3astuYH.js";import"./ref-DKVwKRKY.js";import"./spinner.component-CjQbUrgn.js";import"./side-nav-DsUHgkDi.js";import"./drawer.component-D4Twdtjt.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const me={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(l,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
