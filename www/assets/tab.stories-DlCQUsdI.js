import"./tab-HRXu99ze.js";import{g as r,x as o}from"./iframe-CWRRF7Kz.js";import{g as a,s as n,a as i,b as p,c}from"./component-Ds-2z4Q_.js";import"./class-map-31AjmBp8.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./property-DfgI3O36.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-DAsZ-SQ-.js";import"./icon-button.component-DZ68u1nk.js";import"./if-defined-KFkiWXYQ.js";import"./state-1d_pmrPj.js";import"./icon.component-CK3dmUUo.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{args:m,argTypes:l}=n("syn-tab"),{overrideArgs:b}=i("syn-tab"),{generateTemplate:d}=c("syn-tab"),F={args:b([{name:"default",type:"slot",value:"Tab"}],m),argTypes:l,component:"syn-tab",parameters:{design:r("18008-40436"),docs:{description:{component:a("tab","default")}}},tags:["Navigation"],title:"Components/syn-tab"},e={parameters:{controls:{disable:!1},docs:{description:{story:a("tab","default")}}},render:s=>o`
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
})`,...t.parameters?.docs?.source}}};const H=["Default","Screenshot"];export{e as Default,t as Screenshot,H as __namedExportsOrder,F as default};
