import{g as s,x as m}from"./iframe-C60qSCwS.js";import"./breadcrumb-0QH-mvoc.js";import"./icon-DrMhELL1.js";import{g as t,s as n,a as o,b as c,c as i}from"./component-j7DF8I8k.js";import"./class-map-kiCvOja2.js";import"./slot-9EVoRGQc.js";import"./if-defined-CzvRrFBJ.js";import"./property-Dgx3L-LF.js";import"./state-CpqkXG2a.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-DoY_daum.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./icon.component-DHDIBiVU.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{args:b,argTypes:d}=n("syn-breadcrumb-item"),{overrideArgs:p}=o("syn-breadcrumb-item"),{generateTemplate:u}=i("syn-breadcrumb-item"),j={args:p([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:s("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>m`
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
