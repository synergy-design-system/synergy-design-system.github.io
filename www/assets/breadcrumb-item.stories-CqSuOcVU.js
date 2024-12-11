import{k as s}from"./directive-helpers-CDT6qhDs.js";import{s as n,a as m,g as o,b as t,c,d as i}from"./component-BD8rYe2A.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-CyEW3xQq.js";import"./library-BZPO0bHa.js";import"./icon.component-DNYVVzLm.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DKEpcEL6.js";const{args:b,argTypes:d}=n("syn-breadcrumb-item"),{overrideArgs:u}=i("syn-breadcrumb-item"),{generateTemplate:p}=m("syn-breadcrumb-item"),w={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:o("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>s`
    <syn-breadcrumb>
      ${p({args:a})}
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},r=c({Default:e},100);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('breadcrumb-item', 'default')
      }
    }
  },
  render: (args: unknown) => html\`
    <syn-breadcrumb>
      \${generateTemplate({
    args
  })}
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  \`
} as Story`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
}, 100)`,...r.parameters?.docs?.source}}};const A=["Default","Screenshot"];export{e as Default,r as Screenshot,A as __namedExportsOrder,w as default};
