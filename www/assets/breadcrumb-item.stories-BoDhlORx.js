import{g as s,x as n}from"./iframe-BU6pI8GJ.js";import"./breadcrumb-C5KOKHqs.js";import"./icon-B8xiByvz.js";import{g as t,s as m,a as o,b as c,c as i}from"./component-B9yFO2OE.js";import"./preload-helper-Ct5FWWRu.js";import"./class-map-DSRw8Zyj.js";import"./slot-9EVoRGQc.js";import"./if-defined-D_B395BP.js";import"./synergy-element-Dr2c-Hm7.js";import"./icon.component-CIHoI7Sg.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./localize-bgLrV2YE.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{args:b,argTypes:d}=m("syn-breadcrumb-item"),{overrideArgs:p}=o("syn-breadcrumb-item"),{generateTemplate:u}=i("syn-breadcrumb-item"),_={args:p([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:s("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>n`
    <syn-breadcrumb>
      ${u({args:a})}
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
}, 100)`,...r.parameters?.docs?.source}}};const $=["Default","Screenshot"];export{e as Default,r as Screenshot,$ as __namedExportsOrder,_ as default};
