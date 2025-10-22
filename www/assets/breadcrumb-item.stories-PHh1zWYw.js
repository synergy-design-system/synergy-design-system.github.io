import{g as s,x as m}from"./iframe-DUztr9np.js";import"./breadcrumb-DbLSQMSP.js";import"./icon-CvJamEUy.js";import{g as t,s as n,a as o,b as c,c as i}from"./component-B5oU5NCH.js";import"./preload-helper-Ct5FWWRu.js";import"./class-map-DNRrGswL.js";import"./slot-9EVoRGQc.js";import"./if-defined-C5PXOD-L.js";import"./synergy-element-DQJWtWn5.js";import"./icon.component-BVW2YmP3.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./index-CQ0aEGxp.js";import"./_docs-AUM8SZQl.js";const{args:b,argTypes:d}=n("syn-breadcrumb-item"),{overrideArgs:p}=o("syn-breadcrumb-item"),{generateTemplate:u}=i("syn-breadcrumb-item"),_={args:p([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:s("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation","SICK2018"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>m`
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
