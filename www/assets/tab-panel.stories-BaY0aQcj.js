import"./tab-panel-BX0_d-dI.js";import"./tab-Op-_ybKn.js";import{g as o,x as n}from"./iframe-GSRepqjd.js";import{s as p,a as l,b,c as m}from"./component-sz2YSCF4.js";import{d as s}from"./_docs-CrPFe_9C.js";import"./class-map-QQ7HVnPG.js";import"./property-ImbD-3qY.js";import"./directive-helpers-CvZEagFv.js";import"./event-options-CNZcgQm4.js";import"./query-DAIS6qJ0.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./watch-CEsCE2EF.js";import"./component.styles-DXWA7L2q.js";import"./icon-button.component-Dzxtd5Sk.js";import"./static-BkNWbPkN.js";import"./if-defined-CDNCanKK.js";import"./icon.component-B3J6d3UF.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";const{args:y,argTypes:i}=p("syn-tab-panel"),{overrideArgs:c}=l("syn-tab-panel"),{generateTemplate:d}=m("syn-tab-panel"),t=()=>n`<main class="synergy-replace">Replace this slot</main>`,q={args:c([{name:"default",type:"slot",value:t().strings.join(`
`)},{name:"name",type:"attribute",value:"tab1"}],y),argTypes:i,component:"syn-tab-panel",parameters:{design:o("18086-44682"),docs:{description:{component:s.components["tab-panel"].description.value}}},tags:["Navigation"],title:"Components/syn-tab-panel"},a={parameters:{docs:{description:{story:s.components["tab-panel"].description.value}}},render:r=>n`
    <syn-tab-group>
      <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>
      
      ${d({args:r})}
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
}, 200)`,...e.parameters?.docs?.source}}};const w=["Default","Screenshot"];export{a as Default,e as Screenshot,w as __namedExportsOrder,q as default};
