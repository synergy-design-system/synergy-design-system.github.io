import{R as e,C as i,g as s,p,x as l}from"./iframe-DKzh7HHt.js";import{T as m,S as c,b as d,c as g}from"./blocks-DXnMXvBP.js";import{g as u}from"./component-BVwEOs8-.js";import{d as n,c as v,a as y,b,e as h,g as S,f as F}from"./appshell-Df1l8WsT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DCc6stEZ.js";import"./translations-CnhJ1T76.js";import"./nav-item-Bmk2J7az.js";import"./class-map-Bipwc1iT.js";import"./synergy-element-D4Cp3n7p.js";import"./icon.component-CNp8HpxC.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-DWhkacz2.js";import"./divider.component-BcdySDJf.js";import"./slot-9EVoRGQc.js";import"./prio-nav-Bx-7CRNp.js";import"./dropdown.component-DOtY1xp4.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-eIInEwux.js";import"./menu.component-DM1uaFv3.js";import"./header-BeEgdp0x.js";import"./icon-ZpBo1gm6.js";import"./dropdown-QG4jKNLJ.js";import"./icon-button-BgjjYy7W.js";import"./icon-button.component-XkdzRgjk.js";import"./decorator-DeP7ND_N.js";import"./functions-DkH8wE0_.js";import"./menu-item-BCwp04tk.js";import"./spinner.component-aogJALmx.js";import"./side-nav-BMUoUITu.js";import"./drawer.component-C1qWupYg.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";const se={parameters:{chromatic:{...p?.parameters?.chromatic,disableSnapshot:!1},design:s("25171-45729"),docs:{chromatic:{modes:i},description:{component:u("footer","default","templates")},page:()=>e.createElement(e.Fragment,null,e.createElement(m,null),e.createElement(c,null),e.createElement(d,null),e.createElement(g,{title:""})),story:{inline:!0}}},tags:["Navigation","Structure"],title:"Templates/Footer"},t={render:()=>n()},o={...t,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}},r={render:()=>l`
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
