import{g as u,C as y,x as i}from"./iframe-3rQ6MjmB.js";import"./menu-item-CNJGpLYF.js";import"./dropdown-C5SFk7-5.js";import"./button-TzOFV85w.js";import"./divider-D1wPipkQ.js";import{g as m,s as d,a as p,b as l,c}from"./component-Bn9Hq4ck.js";import"./preload-helper-PPVm8Dsz.js";import"./menu.component-D3KDRF6w.js";import"./icon.component-BX6zfRdv.js";import"./synergy-element-CpGm7QZ8.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./class-map-BSUKdjAi.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./popup.component-B1hW7WKF.js";import"./if-defined-Dk8TP58w.js";import"./spinner.component-DkdtFvkT.js";import"./dropdown.component-Dk3XM5ko.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./form-d9hCJUdr.js";import"./decorator-CVE5vLu9.js";import"./functions-Cnw7w7U0.js";import"./divider.component-CHX64ETG.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const{args:v,argTypes:g}=d("syn-menu"),{overrideArgs:f}=p("syn-menu"),{generateTemplate:h}=c("syn-menu"),Q={args:f([{name:"default",type:"slot",value:`
        <syn-menu-item value="undo">Undo</syn-menu-item>
        <syn-menu-item value="redo">Redo</syn-menu-item>
        <syn-divider></syn-divider>
        <syn-menu-item value="cut">Cut</syn-menu-item>
        <syn-menu-item value="copy">Copy</syn-menu-item>
        <syn-menu-item value="paste">Paste</syn-menu-item>
        <syn-menu-item value="delete">Delete</syn-menu-item>
      `}],v),argTypes:g,component:"syn-menu",parameters:{chromatic:{modes:y},design:u("11581-378368"),docs:{description:{component:m("menu","default")}}},tags:["Navigation"],title:"Components/syn-menu"},e={parameters:{controls:{disable:!1},docs:{description:{story:m("menu","default")}}},render:r=>i`
    <div style="width: 200px;">
      ${h({args:r})}
    </div>
  `},n={parameters:{docs:{description:{story:m("menu","dropdown")},story:{height:"250px"}}},render:()=>i`
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
  `},t={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:m("menu","submenu")}}},play:async({canvasElement:r,userEvent:a})=>{const o=r.querySelector("syn-menu-item:last-of-type");o&&(await a.hover(o),await o.updateComplete)},render:()=>i`
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
  `},s=l({InDropdowns:n,Default:e},400);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  InDropdowns,
  Default
}, 400)`,...s.parameters?.docs?.source}}};const V=["Default","InDropdowns","Submenus","Screenshot"];export{e as Default,n as InDropdowns,s as Screenshot,t as Submenus,V as __namedExportsOrder,Q as default};
