import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-BiSXA87W.js";import{t as s}from"./button-6RBRhEco.js";import{t as c}from"./divider-Cc855Qe0.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-BZMStFjM.js";import{n as h,t as g}from"./menu-item-BDzgx2O5.js";import{t as _}from"./dropdown-vvzkwNOf.js";var v,y,b,x,S,C,w,T,E,D,O=e((()=>{n(),h(),g(),_(),s(),c(),p(),a(),r(),{args:v,argTypes:y}=u(`syn-menu`),{overrideArgs:b}=l(`syn-menu`),{generateTemplate:x}=f(`syn-menu`),S={args:b([{name:`default`,type:`slot`,value:`
        <syn-menu-item value="undo">Undo</syn-menu-item>
        <syn-menu-item value="redo">Redo</syn-menu-item>
        <syn-divider></syn-divider>
        <syn-menu-item value="cut">Cut</syn-menu-item>
        <syn-menu-item value="copy">Copy</syn-menu-item>
        <syn-menu-item value="paste">Paste</syn-menu-item>
        <syn-menu-item value="delete">Delete</syn-menu-item>
      `}],v),argTypes:y,component:`syn-menu`,parameters:{chromatic:{modes:o},design:i(`41203-442314`),docs:{description:{component:d(`menu`,`default`)}}},tags:[`Navigation`],title:`Components/syn-menu`},C={parameters:{controls:{disable:!1},docs:{description:{story:d(`menu`,`default`)}}},render:e=>t`
    <div style="width: 200px;">
      ${x({args:e})}
    </div>
  `},w={parameters:{docs:{description:{story:d(`menu`,`dropdown`)},story:{height:`250px`}}},render:()=>t`
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
  `},T={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`menu`,`submenu`)}}},play:async({canvasElement:e,userEvent:t})=>{let n=e.querySelector(`syn-menu-item:last-of-type`);n&&(await t.hover(n),await n.updateComplete)},render:()=>t`
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
  `},E=m({InDropdowns:w,Default:C},400),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('menu', 'submenu')
      }
    }
  },
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const lastItem = canvasElement.querySelector('syn-menu-item:last-of-type') as SynMenuItem;
    if (lastItem) {
      await userEvent.hover(lastItem);
      await lastItem.updateComplete;
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  InDropdowns,
  Default
}, 400)`,...E.parameters?.docs?.source}}},D=[`Default`,`InDropdowns`,`Submenus`,`Screenshot`]}));O();export{C as Default,w as InDropdowns,E as Screenshot,T as Submenus,D as __namedExportsOrder,S as default,O as t};