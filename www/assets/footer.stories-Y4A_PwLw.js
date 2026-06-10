import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,Ht as r,It as i,d as a,f as o,g as s,n as c,t as l,u}from"./iframe-BLAzlACc.js";import{d,f,i as p,p as m,u as h}from"./blocks-vFyq5Z8H.js";import{n as g,r as _}from"./component-RhnClGwj.js";import{a as v,c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./appshell-DsgS6w5g.js";var E,D,O,k,A,j,M;e((()=>{E=t(n(),1),m(),i(),l(),_(),a(),y(),s(),D={parameters:{chromatic:{...c?.parameters?.chromatic,disableSnapshot:!1},design:u(`16648-52486`),docs:{chromatic:{modes:o},description:{component:g(`footer`,`default`,`templates`)},page:()=>E.createElement(E.Fragment,null,E.createElement(f,null),E.createElement(d,null),E.createElement(p,null),E.createElement(h,{title:``})),story:{inline:!0}}},tags:[`Navigation`,`Structure`],title:`Templates/Footer`},O={render:()=>x()},k={...O,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{disable:!0}}},A={render:()=>r`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${C()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${S()}
        ${b()}
        ${x()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${v()}
    ${T(`appshell-side-navigation`)}
    ${w(`appshell-side-navigation`)}
  `},j={...A,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{disable:!0}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => createFooter()
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Footer`,`FooterTablet`,`FooterWithinAppshell`,`FooterWithinAppshellTablet`]}))();export{O as Footer,k as FooterTablet,A as FooterWithinAppshell,j as FooterWithinAppshellTablet,M as __namedExportsOrder,D as default};