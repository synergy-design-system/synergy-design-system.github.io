import{s as o,a as l,g as p,c as b,d as y}from"./component-7g7PvM4J.js";import{k as t}from"./lit-element-BsyMe9HG.js";import{d as s}from"./index-Dy7bMyTO.js";import"./directive-helpers-DUpkUCIH.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-Cwq7Y_Aa.js";import"./icon-DiAnxFT_.js";const{args:c,argTypes:m}=o("syn-tab-panel"),{overrideArgs:i}=y("syn-tab-panel"),{generateTemplate:d}=l("syn-tab-panel"),n=()=>t`<main class="synergy-replace">Replace this slot</main>`,x={args:i([{name:"default",type:"slot",value:n().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],c),argTypes:m,component:"syn-tab-panel",parameters:{design:p("18086-44682"),docs:{description:{component:s.components["tab-panel"].description.value}}},title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s.components["tab-panel"].description.value}}},render:r=>t`
  <syn-tab-group>
    <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
    <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
    <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
    <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>
    
    ${d({args:r})}
    <syn-tab-panel name="tab2">${n()}</syn-tab-panel>
    <syn-tab-panel name="tab3">${n()}</syn-tab-panel>
    <syn-tab-panel name="tab4">${n()}</syn-tab-panel>
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
  `},e=b({Default:a},200);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: docsTokens.components['tab-panel'].description.value
      }
    }
  },
  render: (args: unknown) => html\`
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
} as Story`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
}, 200)`,...e.parameters?.docs?.source}}};const I=["Default","Screenshot"];export{a as Default,e as Screenshot,I as __namedExportsOrder,x as default};
