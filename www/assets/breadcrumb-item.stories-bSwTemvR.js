import{g as s,C as m,x as o}from"./iframe-CqX6pvQ7.js";import"./breadcrumb-PfyWhlfp.js";import"./icon-DhL3ItZz.js";import{g as t,s as n,a as c,b as i,c as d}from"./component-DtGApjJ1.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-CkodkV_7.js";import"./slot-9EVoRGQc.js";import"./if-defined-BhIyMJbo.js";import"./synergy-element-DJ-4p8a1.js";import"./icon.component-Dw2pYwlh.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const{args:b,argTypes:p}=n("syn-breadcrumb-item"),{overrideArgs:u}=c("syn-breadcrumb-item"),{generateTemplate:l}=d("syn-breadcrumb-item"),$={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:p,component:"syn-breadcrumb-item",parameters:{chromatic:{modes:m},design:s("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>o`
    <syn-breadcrumb>
      ${l({args:a})}
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},r=i({Default:e},100);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}, 100)`,...r.parameters?.docs?.source}}};const j=["Default","Screenshot"];export{e as Default,r as Screenshot,j as __namedExportsOrder,$ as default};
