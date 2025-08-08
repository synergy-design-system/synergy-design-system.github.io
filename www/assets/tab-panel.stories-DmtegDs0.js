import"./tab-panel-B303dTBG.js";import"./tab-BvycbTSt.js";import{g as o,x as t}from"./iframe-hmg045VI.js";import{s as p,a as l,b,c as m}from"./component-Bo8xV33a.js";import{d as s}from"./_docs-UXgsQIP6.js";import"./class-map-IFlBxVd3.js";import"./property-DGhSbS75.js";import"./state-DKD71wud.js";import"./event-options-CNZcgQm4.js";import"./query-DAIS6qJ0.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./watch-CEsCE2EF.js";import"./component.styles-CXuD9i9j.js";import"./icon-button.component-CyVbwA5c.js";import"./if-defined-DOPdW2bs.js";import"./icon.component-C3LySnyd.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";const{args:y,argTypes:i}=p("syn-tab-panel"),{overrideArgs:c}=l("syn-tab-panel"),{generateTemplate:d}=m("syn-tab-panel"),n=()=>t`<main class="synergy-replace">Replace this slot</main>`,P={args:c([{name:"default",type:"slot",value:n().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],y),argTypes:i,component:"syn-tab-panel",parameters:{design:o("18086-44682"),docs:{description:{component:s.components["tab-panel"].description.value}}},tags:["Navigation"],title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s.components["tab-panel"].description.value}}},render:r=>t`
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
}, 200)`,...e.parameters?.docs?.source}}};const q=["Default","Screenshot"];export{a as Default,e as Screenshot,q as __namedExportsOrder,P as default};
