import{x as s}from"./lit-element-DILkAbkc.js";import{g as n}from"./preview-CDE2O3Wq.js";import{s as m,a as o,g as t,b as c,c as i}from"./component-BteU4oxk.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-Bp4UJBn3.js";import"./icon.component-BAp08lqM.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-CEOmvufO.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-PzU9tuEL.js";const{args:b,argTypes:d}=m("syn-breadcrumb-item"),{overrideArgs:u}=i("syn-breadcrumb-item"),{generateTemplate:p}=o("syn-breadcrumb-item"),v={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:n("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>s`
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
}, 100)`,...r.parameters?.docs?.source}}};const T=["Default","Screenshot"];export{e as Default,r as Screenshot,T as __namedExportsOrder,v as default};
