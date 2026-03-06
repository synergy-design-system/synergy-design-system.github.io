import"./tab-BT27_78G.js";import{C as r,c as o,d as n}from"./iframe-0XdHMixp.js";import{g as a,a as i,s as c,b as m,c as p}from"./component--Tj_tTP1.js";import"./class-map-C9yt4qre.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-DUqVEHY7.js";import"./query-D0jTsbLw.js";import"./watch-CEsCE2EF.js";import"./icon-button.component-CmgDEahI.js";import"./if-defined-sMIZFOz-.js";import"./icon.component-CrgkV22D.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-GL32a4iR.js";const{args:l,argTypes:b}=c("syn-tab"),{overrideArgs:d}=p("syn-tab"),{generateTemplate:y}=m("syn-tab"),F={args:d([{name:"default",type:"slot",value:"Tab"}],l),argTypes:b,component:"syn-tab",parameters:{chromatic:{modes:r},design:n("18008-40436"),docs:{description:{component:a("tab","default")}}},tags:["Navigation"],title:"Components/syn-tab"},e={parameters:{controls:{disable:!1},docs:{description:{story:a("tab","default")}}},render:s=>o`
    ${y({args:s})}
    <syn-tab active>Active</syn-tab>
    <syn-tab closable>Closable</syn-tab>
    <syn-tab disabled>Disabled</syn-tab>
  `},t=i({Default:e});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
