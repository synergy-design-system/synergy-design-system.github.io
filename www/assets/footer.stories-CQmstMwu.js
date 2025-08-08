import{j as e,g as i,p as s,x as p}from"./iframe-hmg045VI.js";import{T as m,S as l,b as c,c as d}from"./blocks-CfSUIRB4.js";import{g}from"./component-Bo8xV33a.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-nldvVndv.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./translations-CnhJ1T76.js";import"./nav-item-BSb1RNze.js";import"./class-map-IFlBxVd3.js";import"./property-DGhSbS75.js";import"./state-DKD71wud.js";import"./query-DAIS6qJ0.js";import"./if-defined-DOPdW2bs.js";import"./divider.component-B8Fcn_Ol.js";import"./watch-CEsCE2EF.js";import"./component.styles-CXuD9i9j.js";import"./icon.component-C3LySnyd.js";import"./slot-9EVoRGQc.js";import"./prio-nav-DN4VYoel.js";import"./dropdown.component-C_kcuRsQ.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-C9Z1hcNi.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./menu.component-aKxKQU_9.js";import"./header-sanAaokJ.js";import"./icon-B0bUSbWK.js";import"./dropdown-BlxPSOEL.js";import"./icon-button-DHRLqjDM.js";import"./icon-button.component-CyVbwA5c.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-BEdfD2tk.js";import"./ref-DydWqAuH.js";import"./spinner.component-DFxAsvki.js";import"./side-nav-OD2tf1BF.js";import"./drawer.component-C8jwxS0C.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const me={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(l,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
