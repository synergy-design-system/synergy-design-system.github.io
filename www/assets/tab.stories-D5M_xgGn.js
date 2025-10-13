import"./tab-G7ZkJo2E.js";import{g as r,x as o}from"./iframe-6nDxvAIw.js";import{g as a,s as n,a as i,b as p,c}from"./component-CVYD7FPW.js";import"./class-map-B30_JGj1.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-C_G4WpK6.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./icon-button.component-CgdKO3D4.js";import"./if-defined-CfklQaY3.js";import"./icon.component-DTh8Z4W7.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-DKsB8ZHg.js";const{args:m,argTypes:l}=n("syn-tab"),{overrideArgs:b}=i("syn-tab"),{generateTemplate:d}=c("syn-tab"),E={args:b([{name:"default",type:"slot",value:"Tab"}],m),argTypes:l,component:"syn-tab",parameters:{design:r("18008-40436"),docs:{description:{component:a("tab","default")}}},tags:["Navigation","SICK2018"],title:"Components/syn-tab"},e={parameters:{controls:{disable:!1},docs:{description:{story:a("tab","default")}}},render:s=>o`
    ${d({args:s})}
    <syn-tab active>Active</syn-tab>
    <syn-tab closable>Closable</syn-tab>
    <syn-tab disabled>Disabled</syn-tab>
  `},t=p({Default:e});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('tab', 'default')
      }
    }
  },
  render: args => html\`
    \${generateTemplate({
    args
  })}
    <syn-tab active>Active</syn-tab>
    <syn-tab closable>Closable</syn-tab>
    <syn-tab disabled>Disabled</syn-tab>
  \`
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
})`,...t.parameters?.docs?.source}}};const F=["Default","Screenshot"];export{e as Default,t as Screenshot,F as __namedExportsOrder,E as default};
