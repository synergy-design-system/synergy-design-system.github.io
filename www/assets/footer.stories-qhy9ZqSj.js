import{j as e,g as i,p as s,x as p}from"./iframe-0UxjpWda.js";import{T as m,S as l,b as c,c as d}from"./blocks-CLYH-Qg_.js";import{g}from"./component-DUcdzUn5.js";import{d as n,c as u,a as v,b as y,e as b,g as h,f as S}from"./appshell-yxa4MnjT.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";import"./translations-CnhJ1T76.js";import"./nav-item-D9yx-PD5.js";import"./class-map-D_EmVpM1.js";import"./property-B5xXPlsR.js";import"./state-Bf2jxics.js";import"./query-DAIS6qJ0.js";import"./if-defined-zJ0-s7Of.js";import"./divider.component-BhAcegMc.js";import"./watch-CEsCE2EF.js";import"./component.styles-BtoW6U7E.js";import"./icon.component-ve8nTo37.js";import"./slot-9EVoRGQc.js";import"./prio-nav-CzkEQ1OG.js";import"./dropdown.component-CIp10J3M.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Dsm4GhqJ.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./menu.component-DWEOXQ7n.js";import"./header-6Z5KxBec.js";import"./icon-B6wOVNRF.js";import"./dropdown-CVDJ1fEf.js";import"./icon-button-TuxlxntX.js";import"./icon-button.component-EAA33tmn.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-dffR4f2T.js";import"./ref-BIKrLdst.js";import"./spinner.component-pa2R42J0.js";import"./side-nav-OdeGP-lJ.js";import"./drawer.component-CDCWR274.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const me={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1},design:i("25171-45729"),docs:{description:{component:g("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(l,null),e.createElement(c,null),e.createElement(d,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>p`
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
