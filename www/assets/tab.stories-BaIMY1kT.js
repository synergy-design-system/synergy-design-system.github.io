import{s as r,a as n,g as o,b as a,c,d as i}from"./component-DlqTHlR-.js";import{k as l}from"./directive-helpers-CDT6qhDs.js";import"./index-CtGd_Rwb.js";import"./icon.component-C03aviy-.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-C2BmeJDK.js";const{args:p,argTypes:b}=r("syn-tab"),{overrideArgs:m}=i("syn-tab"),{generateTemplate:d}=n("syn-tab"),A={args:m([{name:"default",type:"slot",value:"Tab"}],p),argTypes:b,component:"syn-tab",parameters:{design:o("18008-40436"),docs:{description:{component:a("tab","default")}}},title:"Components/syn-tab"},e={parameters:{controls:{disable:!1},docs:{description:{story:a("tab","default")}}},render:s=>l`
  ${d({args:s})}
  <syn-tab active>Active</syn-tab>
  <syn-tab closable>Closable</syn-tab>
  <syn-tab disabled>Disabled</syn-tab>
  `},t=c({Default:e});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => html\`
  \${generateTemplate({
    args
  })}
  <syn-tab active>Active</syn-tab>
  <syn-tab closable>Closable</syn-tab>
  <syn-tab disabled>Disabled</syn-tab>
  \`
} as Story`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
})`,...t.parameters?.docs?.source}}};const C=["Default","Screenshot"];export{e as Default,t as Screenshot,C as __namedExportsOrder,A as default};