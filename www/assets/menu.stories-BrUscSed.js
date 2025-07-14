import{g as o,x as r}from"./iframe-D-UauLL5.js";import"./menu-item-D3YlpgtP.js";import"./dropdown-Qdr7HrXL.js";import"./button-BRK7nchw.js";import"./divider-D35EOl1z.js";import{g as m,s as u,a,b as y,c as d}from"./component-DaWXE_kz.js";import"./menu.component-5Mpj1dj-.js";import"./state-AKRYM2P7.js";import"./property-FaezvFFC.js";import"./query-DAIS6qJ0.js";import"./class-map-Xfkr4cAh.js";import"./component.styles-BXMfMvRe.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./ref-7DWUC-tA.js";import"./watch-CEsCE2EF.js";import"./icon.component-BM6-0I20.js";import"./popup.component-DTrSsqqI.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./spinner.component-C8NQuaRU.js";import"./dropdown.component-j3D583Px.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-BRLN1l9F.js";import"./event-B0iVuGLD.js";import"./form-d9hCJUdr.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./divider.component-BkCfwJho.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{args:p,argTypes:l}=u("syn-menu"),{overrideArgs:c}=a("syn-menu"),{generateTemplate:v}=d("syn-menu"),Q={args:c([{name:"default",type:"slot",value:`
        <syn-menu-item value="undo">Undo</syn-menu-item>
        <syn-menu-item value="redo">Redo</syn-menu-item>
        <syn-divider></syn-divider>
        <syn-menu-item value="cut">Cut</syn-menu-item>
        <syn-menu-item value="copy">Copy</syn-menu-item>
        <syn-menu-item value="paste">Paste</syn-menu-item>
        <syn-menu-item value="delete">Delete</syn-menu-item>
      `}],p),argTypes:l,component:"syn-menu",parameters:{design:o("11581-378368"),docs:{description:{component:m("menu","default")}}},tags:["Navigation"],title:"Components/syn-menu"},e={parameters:{controls:{disable:!1},docs:{description:{story:m("menu","default")}}},render:i=>r`
    <div style="width: 200px;">
      ${v({args:i})}
    </div>
  `},n={parameters:{docs:{description:{story:m("menu","dropdown")},story:{height:"250px"}}},render:()=>r`
    <div style="position: relative">
      <syn-dropdown ?open=${!0} placement="bottom-start">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="width: 200px;">
          <syn-menu-item value="cut">Cut</syn-menu-item>
          <syn-menu-item value="copy">Copy</syn-menu-item>
          <syn-menu-item value="paste">Paste</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  `},t={parameters:{docs:{description:{story:m("menu","submenu")}}},render:()=>r`
    <syn-menu style="max-width: 200px;">
      <syn-menu-item value="undo">Undo</syn-menu-item>
      <syn-menu-item value="redo">Redo</syn-menu-item>
      
      <syn-divider></syn-divider>
      
      <syn-menu-item value="cut">Cut</syn-menu-item>
      <syn-menu-item value="copy">Copy</syn-menu-item>
      <syn-menu-item value="paste">Paste</syn-menu-item>
      
      <syn-divider></syn-divider>
      
      <syn-menu-item>
        Find
        <syn-menu slot="submenu">
          <syn-menu-item value="find">Find…</syn-menu-item>
          <syn-menu-item value="find-previous">Find Next</syn-menu-item>
          <syn-menu-item value="find-next">Find Previous</syn-menu-item>
        </syn-menu>
      </syn-menu-item>
    </syn-menu>
  `},s=y({InDropdowns:n,Default:e,Submenus:t},400);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('menu', 'default')
      }
    }
  },
  render: args => html\`
    <div style="width: 200px;">
      \${generateTemplate({
    args
  })}
    </div>
  \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu', 'dropdown')
      },
      story: {
        height: '250px'
      }
    }
  },
  render: () => html\`
    <div style="position: relative">
      <syn-dropdown ?open=\${true} placement="bottom-start">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="width: 200px;">
          <syn-menu-item value="cut">Cut</syn-menu-item>
          <syn-menu-item value="copy">Copy</syn-menu-item>
          <syn-menu-item value="paste">Paste</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu', 'submenu')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 200px;">
      <syn-menu-item value="undo">Undo</syn-menu-item>
      <syn-menu-item value="redo">Redo</syn-menu-item>
      
      <syn-divider></syn-divider>
      
      <syn-menu-item value="cut">Cut</syn-menu-item>
      <syn-menu-item value="copy">Copy</syn-menu-item>
      <syn-menu-item value="paste">Paste</syn-menu-item>
      
      <syn-divider></syn-divider>
      
      <syn-menu-item>
        Find
        <syn-menu slot="submenu">
          <syn-menu-item value="find">Find…</syn-menu-item>
          <syn-menu-item value="find-previous">Find Next</syn-menu-item>
          <syn-menu-item value="find-next">Find Previous</syn-menu-item>
        </syn-menu>
      </syn-menu-item>
    </syn-menu>
  \`
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  InDropdowns,
  Default,
  Submenus
}, 400)`,...s.parameters?.docs?.source}}};const V=["Default","InDropdowns","Submenus","Screenshot"];export{e as Default,n as InDropdowns,s as Screenshot,t as Submenus,V as __namedExportsOrder,Q as default};
