import{a as o,s as l,b as p,d as b,c as y}from"./component-Cdretqd5.js";import{k as t}from"./directive-helpers-B-JxG5af.js";import{d as s}from"./index-D8HpcxQN.js";import"./if-defined-CAYRA8Ae.js";import"./ref-CLjsg0Dj.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./library-UYMiFSYt.js";import"./icon.component-CgdRPS1z.js";import"./icon-BM_ysiRC.js";const{args:c,argTypes:m}=l("syn-tab-panel"),{overrideArgs:i}=p("syn-tab-panel"),{generateTemplate:d}=y("syn-tab-panel"),n=()=>t`<main class="synergy-replace">Replace this slot</main>`,R={args:i([{name:"default",type:"slot",value:n().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],c),argTypes:m,component:"syn-tab-panel",parameters:{design:o("18086-44682"),docs:{description:{component:s.components["tab-panel"].description.value}}},title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s.components["tab-panel"].description.value}}},render:r=>t`
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
}, 200)`,...e.parameters?.docs?.source}}};const j=["Default","Screenshot"];export{a as Default,e as Screenshot,j as __namedExportsOrder,R as default};
