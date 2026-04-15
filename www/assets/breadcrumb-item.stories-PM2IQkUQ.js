import{C as s,c as m,d as o}from"./iframe-eRvaIELU.js";import"./breadcrumb-qjuLq5jD.js";import"./icon-CqBzwWTC.js";import{g as t,a as n,s as c,b as i,c as d}from"./component-mLh0MrP7.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-BctzS3gw.js";import"./slot-9EVoRGQc.js";import"./if-defined-BvPV1s9v.js";import"./synergy-element-BVZI5H_G.js";import"./icon.component-ehmpGKuT.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./controller-BGdn_hBF.js";import"./index-3hbeBem-.js";import"./_docs-DCFLSkr0.js";const{args:b,argTypes:p}=c("syn-breadcrumb-item"),{overrideArgs:u}=d("syn-breadcrumb-item"),{generateTemplate:l}=i("syn-breadcrumb-item"),O={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:p,component:"syn-breadcrumb-item",parameters:{chromatic:{modes:s},design:o("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>m`
    <syn-breadcrumb>
      ${l({args:a})}
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},r=n({Default:e},100);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  render: args => html\`
    <syn-breadcrumb>
      \${generateTemplate({
    args
  })}
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  \`
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
}, 100)`,...r.parameters?.docs?.source}}};const $=["Default","Screenshot"];export{e as Default,r as Screenshot,$ as __namedExportsOrder,O as default};
