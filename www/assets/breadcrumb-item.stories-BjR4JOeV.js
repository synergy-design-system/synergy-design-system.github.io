import{g as s,x as m}from"./iframe-BLjrJY6Z.js";import"./breadcrumb-CiA8HOLI.js";import"./icon-CapNxapt.js";import{g as t,s as n,a as o,b as c,c as i}from"./component-KeVqWNnj.js";import"./class-map-sgJetdT5.js";import"./slot-9EVoRGQc.js";import"./if-defined-DwES8uBy.js";import"./property-BFSANEA4.js";import"./state-C8yAg2p0.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-D0Dq4Rdk.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./icon.component-YUbAu1s9.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:b,argTypes:d}=n("syn-breadcrumb-item"),{overrideArgs:p}=o("syn-breadcrumb-item"),{generateTemplate:u}=i("syn-breadcrumb-item"),j={args:p([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:s("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>m`
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
}, 100)`,...r.parameters?.docs?.source}}};const w=["Default","Screenshot"];export{e as Default,r as Screenshot,w as __namedExportsOrder,j as default};
