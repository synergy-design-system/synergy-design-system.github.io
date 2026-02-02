import{R as e,C as i,g as s,p,x as l}from"./iframe-3rQ6MjmB.js";import{T as m,S as c,b as d,c as g}from"./blocks-DH5ZSVP7.js";import{g as u}from"./component-Bn9Hq4ck.js";import{d as n,c as v,a as y,b,e as h,g as S,f as F}from"./appshell-BXGZRPEm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";import"./translations-CnhJ1T76.js";import"./nav-item-B364fkKx.js";import"./class-map-BSUKdjAi.js";import"./synergy-element-CpGm7QZ8.js";import"./icon.component-BX6zfRdv.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-Dk8TP58w.js";import"./divider.component-CHX64ETG.js";import"./slot-9EVoRGQc.js";import"./prio-nav-DSTcqwuj.js";import"./dropdown.component-Dk3XM5ko.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-B1hW7WKF.js";import"./menu.component-D3KDRF6w.js";import"./header-DqQzcejA.js";import"./icon-BwfrVYmH.js";import"./dropdown-C5SFk7-5.js";import"./icon-button-BsvxDxLF.js";import"./icon-button.component-CaDA6T58.js";import"./decorator-CVE5vLu9.js";import"./functions-Cnw7w7U0.js";import"./menu-item-CNJGpLYF.js";import"./spinner.component-DkdtFvkT.js";import"./side-nav-8DhKItnR.js";import"./drawer.component-CuNF0q4e.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const se={parameters:{chromatic:{...p?.parameters?.chromatic,disableSnapshot:!1},design:s("25171-45729"),docs:{chromatic:{modes:i},description:{component:u("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(c,null),e.createElement(d,null),e.createElement(g,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>l`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${v()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${y()}
        ${b()}
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
