import"./tab-panel-R5FVfJil.js";import"./tab-B3hnPGjy.js";import{g as o,C as p,x as n}from"./iframe-DEjDpRef.js";import{s as l,a as b,b as m,c as y}from"./component-CRq7DUSa.js";import{d as s}from"./_docs-DXCV3alH.js";import"./class-map-D4IBD07P.js";import"./synergy-element-9YQF5Oan.js";import"./icon.component-juKEJBdj.js";import"./watch-CEsCE2EF.js";import"./event-options-CNZcgQm4.js";import"./query-DAIS6qJ0.js";import"./query-assigned-elements-BQ-t-koE.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./icon-button.component-Bljg4NsB.js";import"./if-defined-DlM02Wh9.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";const{args:c,argTypes:i}=l("syn-tab-panel"),{overrideArgs:d}=b("syn-tab-panel"),{generateTemplate:g}=y("syn-tab-panel"),t=()=>n`<main class="synergy-replace">Replace this slot</main>`,M={args:d([{name:"default",type:"slot",value:t().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],c),argTypes:i,component:"syn-tab-panel",parameters:{chromatic:{modes:p},design:o("18086-44682"),docs:{description:{component:s.components["tab-panel"].description.value}}},tags:["Navigation","SICK2018","SICK2025"],title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s.components["tab-panel"].description.value}}},render:r=>n`
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
}, 200)`,...e.parameters?.docs?.source}}};const N=["Default","Screenshot"];export{a as Default,e as Screenshot,N as __namedExportsOrder,M as default};
