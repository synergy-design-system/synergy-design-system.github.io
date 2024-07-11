import{x as s}from"./lit-element-DILkAbkc.js";import{g as n}from"./preview-Pa1RylMy.js";import{s as m,a as o,g as t,b as c,c as i}from"./component-COwq2uDV.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-Dcv0JzAR.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-B_KM14U1.js";import"./icon-C0kUiRUs.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DU65Ag4u.js";const{args:b,argTypes:d}=m("syn-breadcrumb-item"),{overrideArgs:u}=i("syn-breadcrumb-item"),{generateTemplate:p}=o("syn-breadcrumb-item"),v={args:u([{name:"default",type:"slot",value:"Breadcrumb Item"},{name:"suffix",type:"slot",value:'<syn-icon slot="suffix" name="wallpaper"></syn-icon>'},{name:"prefix",type:"slot",value:'<syn-icon slot="prefix" name="home"></syn-icon>'}],b),argTypes:d,component:"syn-breadcrumb-item",parameters:{design:n("17186-185318"),docs:{description:{component:t("breadcrumb-item","default")}}},title:"Components/syn-breadcrumb-item"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("breadcrumb-item","default")}}},render:a=>s`
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
