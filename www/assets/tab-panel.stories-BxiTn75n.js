import"./tab-panel-D8g_F8kV.js";import"./tab-ktYGJDXE.js";import{g as o,x as t}from"./iframe-C38E_jzw.js";import{s as p,a as l,b,c as m}from"./component-Dnz1ejc-.js";import{d as s}from"./_docs-DKsB8ZHg.js";import"./class-map-uZN7Me8m.js";import"./synergy-element-DGBJpgid.js";import"./icon.component-B-tvdrx5.js";import"./watch-CEsCE2EF.js";import"./event-options-CNZcgQm4.js";import"./query-DAIS6qJ0.js";import"./query-assigned-elements-BQ-t-koE.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./icon-button.component-Ds0Aopf-.js";import"./if-defined-DfCBjZD6.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";const{args:y,argTypes:i}=p("syn-tab-panel"),{overrideArgs:c}=l("syn-tab-panel"),{generateTemplate:d}=m("syn-tab-panel"),n=()=>t`<main class="synergy-replace">Replace this slot</main>`,K={args:c([{name:"default",type:"slot",value:n().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],y),argTypes:i,component:"syn-tab-panel",parameters:{design:o("18086-44682"),docs:{description:{component:s.components["tab-panel"].description.value}}},tags:["Navigation","SICK2018"],title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s.components["tab-panel"].description.value}}},render:r=>t`
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
}, 200)`,...e.parameters?.docs?.source}}};const N=["Default","Screenshot"];export{a as Default,e as Screenshot,N as __namedExportsOrder,K as default};
