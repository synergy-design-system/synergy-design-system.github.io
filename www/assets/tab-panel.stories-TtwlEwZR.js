import"./tab-panel-14b6oPpg.js";import"./tab-C8hqOJuF.js";import{g as o,C as p,x as n}from"./iframe-CvU34O_B.js";import{g as s,s as l,a as b,b as m,c as y}from"./component--gCMxXrB.js";import"./class-map-CVI9ScdU.js";import"./synergy-element-B1F-Pf22.js";import"./icon.component-BGlPOzcQ.js";import"./watch-CEsCE2EF.js";import"./event-options-3qAdqXoU.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CblsR2sJ.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./icon-button.component-C7QorXM_.js";import"./if-defined-5E7M7M3a.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const{args:i,argTypes:c}=l("syn-tab-panel"),{overrideArgs:d}=b("syn-tab-panel"),{generateTemplate:g}=y("syn-tab-panel"),t=()=>n`<main class="synergy-replace">Replace this slot</main>`,N={args:d([{name:"default",type:"slot",value:t().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],i),argTypes:c,component:"syn-tab-panel",parameters:{chromatic:{modes:p},design:o("18086-44682"),docs:{description:{component:s("tab-panel","default")}}},tags:["Navigation"],title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s("tab-panel","default")}}},render:r=>n`
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
  `},e=m({Default:a},200);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
