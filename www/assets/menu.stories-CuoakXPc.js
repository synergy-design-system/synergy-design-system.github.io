import{x as r}from"./directive-helpers-DGrfjhaU.js";import"./menu-item-Bja00sVV.js";import"./dropdown-CKd3Fuk7.js";import"./button-BtEYlTQw.js";import"./divider-aVQbqhyw.js";import{g as m,a as i,s as u,b as a,c as y,d as p}from"./component-JZANH7tg.js";import"./menu.component-efn2ltwP.js";import"./state-CZ0nVzce.js";import"./property-BGzwfL48.js";import"./query-DAIS6qJ0.js";import"./static-gmWA-8Kq.js";import"./component.styles-Do19GEOY.js";import"./slot-9EVoRGQc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./ref-B3rPxG6X.js";import"./async-directive-PIeysb9D.js";import"./watch-CEsCE2EF.js";import"./icon.component-CScz9CrR.js";import"./popup.component-4h2Ou4ib.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./spinner.component-oeFu-uyM.js";import"./dropdown.component-ByMhRq2E.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-B2ZFWIyt.js";import"./event-B0iVuGLD.js";import"./form-d9hCJUdr.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./divider.component-KO_YE4Ha.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-Br-JURis.js";const{args:d,argTypes:l}=u("syn-menu"),{overrideArgs:c}=a("syn-menu"),{generateTemplate:v}=p("syn-menu"),ne={args:c([{name:"default",type:"slot",value:`
        <syn-menu-item value="undo">Undo</syn-menu-item>
        <syn-menu-item value="redo">Redo</syn-menu-item>
        <syn-divider></syn-divider>
        <syn-menu-item value="cut">Cut</syn-menu-item>
        <syn-menu-item value="copy">Copy</syn-menu-item>
        <syn-menu-item value="paste">Paste</syn-menu-item>
        <syn-menu-item value="delete">Delete</syn-menu-item>
      `}],d),argTypes:l,component:"syn-menu",parameters:{design:i("11581-378368"),docs:{description:{component:m("menu","default")}}},title:"Components/syn-menu"},e={parameters:{controls:{disable:!1},docs:{description:{story:m("menu","default")}}},render:o=>r`
    <div style="width: 200px;">
      ${v({args:o})}
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
  render: (args: unknown) => html\`
    <div style="width: 200px;">
      \${generateTemplate({
    args
  })}
    </div>
  \`
} as Story`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}, 400)`,...s.parameters?.docs?.source}}};const te=["Default","InDropdowns","Submenus","Screenshot"];export{e as Default,n as InDropdowns,s as Screenshot,t as Submenus,te as __namedExportsOrder,ne as default};
