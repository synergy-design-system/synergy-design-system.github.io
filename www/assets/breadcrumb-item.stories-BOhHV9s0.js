import{x as s}from"./directive-helpers-Dvm_Ferq.js";import{g as t,a as n,s as m,b as o,d as c,c as i}from"./component-9igOvX-k.js";import"./if-defined-zGpnP1OK.js";import"./ref-CgC99LRu.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./index-DrFu-skq.js";import"./icon-button-ByUvDcwf.js";import"./library-C58jM0s5.js";import"./icon.component-Jg8V7nUU.js";import"./index-Vx7n56Jp.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-BiWueWHw.js";const{args:b,argTypes:d}=m("syn-breadcrumb-item"),{overrideArgs:u}=o("syn-breadcrumb-item"),{generateTemplate:p}=i("syn-breadcrumb-item"),A={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:n("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>s`
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
}, 100)`,...r.parameters?.docs?.source}}};const O=["Default","Screenshot"];export{e as Default,r as Screenshot,O as __namedExportsOrder,A as default};
