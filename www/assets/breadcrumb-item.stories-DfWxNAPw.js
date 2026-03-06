import{C as s,c as m,d as o}from"./iframe-pnT4pJc8.js";import"./breadcrumb-DfYDcqvu.js";import"./icon-DLjlcC6F.js";import{g as t,a as n,s as c,b as i,c as d}from"./component-D-ZvKR36.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-CN3Dk8tE.js";import"./slot-9EVoRGQc.js";import"./if-defined-AzRyr4pU.js";import"./synergy-element-BzUY5SE_.js";import"./icon.component-CK7vaVNx.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./index-3hbeBem-.js";import"./_docs-GL32a4iR.js";const{args:b,argTypes:p}=c("syn-breadcrumb-item"),{overrideArgs:u}=d("syn-breadcrumb-item"),{generateTemplate:l}=i("syn-breadcrumb-item"),$={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:p,component:"syn-breadcrumb-item",parameters:{chromatic:{modes:s},design:o("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>m`
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
}, 100)`,...r.parameters?.docs?.source}}};const j=["Default","Screenshot"];export{e as Default,r as Screenshot,j as __namedExportsOrder,$ as default};
