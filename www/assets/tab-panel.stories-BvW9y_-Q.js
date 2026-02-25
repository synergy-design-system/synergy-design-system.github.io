import"./tab-panel-IW3wurV7.js";import"./tab-B3e7DLOr.js";import{C as o,c as n,d as p}from"./iframe-r0CQHRKQ.js";import{g as s,a as l,s as b,b as m,c as y}from"./component-H_NDQ3WO.js";import"./class-map-BSAfnhal.js";import"./synergy-element-C0zzvLBX.js";import"./icon.component-BtCkPkUy.js";import"./watch-CEsCE2EF.js";import"./event-options-3qAdqXoU.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CIlqV-be.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./icon-button.component-CGGXH9Zy.js";import"./if-defined-BE596y_O.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-B-LcOZte.js";const{args:i,argTypes:c}=b("syn-tab-panel"),{overrideArgs:d}=y("syn-tab-panel"),{generateTemplate:g}=m("syn-tab-panel"),t=()=>n`<main class="synergy-replace">Replace this slot</main>`,N={args:d([{name:"default",type:"slot",value:t().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],i),argTypes:c,component:"syn-tab-panel",parameters:{chromatic:{modes:o},design:p("18086-44682"),docs:{description:{component:s("tab-panel","default")}}},tags:["Navigation"],title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s("tab-panel","default")}}},render:r=>n`
    <syn-tab-group>
      <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>
      
      ${g({args:r})}
      <syn-tab-panel name="tab2">${t()}</syn-tab-panel>
      <syn-tab-panel name="tab3">${t()}</syn-tab-panel>
      <syn-tab-panel name="tab4">${t()}</syn-tab-panel>
    </syn-tab-group>
    <style>
      .synergy-replace {
        border: 1px dashed #9747FF;
        border-radius: var(--syn-border-radius-small);
        color: #9747FF;
        font: var(--syn-body-small-bold);
        height: var(--syn-spacing-x-large);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  `},e=l({Default:a},200);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-panel', 'default')
      }
    }
  },
  render: args => html\`
    <syn-tab-group>
      <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>
      
      \${generateTemplate({
    args
  })}
      <syn-tab-panel name="tab2">\${createReplaceContent()}</syn-tab-panel>
      <syn-tab-panel name="tab3">\${createReplaceContent()}</syn-tab-panel>
      <syn-tab-panel name="tab4">\${createReplaceContent()}</syn-tab-panel>
    </syn-tab-group>
    <style>
      .synergy-replace {
        border: 1px dashed #9747FF;
        border-radius: var(--syn-border-radius-small);
        color: #9747FF;
        font: var(--syn-body-small-bold);
        height: var(--syn-spacing-x-large);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  \`
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
}, 200)`,...e.parameters?.docs?.source}}};const P=["Default","Screenshot"];export{a as Default,e as Screenshot,P as __namedExportsOrder,N as default};
