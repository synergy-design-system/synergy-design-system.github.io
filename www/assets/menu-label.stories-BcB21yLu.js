import{k as m}from"./directive-helpers-CDT6qhDs.js";import{s as r,a,g as o,b as t,c as i,d as u}from"./component-B9s4qVy7.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-9yyrOoP6.js";import"./library-BZPO0bHa.js";import"./icon.component-DAI0zaoJ.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BI4J2Sbr.js";const{args:l,argTypes:y}=r("syn-menu-label"),{overrideArgs:p}=u("syn-menu-label"),{generateTemplate:c}=a("syn-menu-label"),w={args:p([{name:"default",type:"slot",value:"Fruits"}],l),argTypes:y,component:"syn-menu-label",parameters:{design:o("10461-8649"),docs:{description:{component:t("menu-label","default")}}},title:"Components/syn-menu-label"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("menu-label","default")}}},render:s=>m`
    <syn-menu style="width: 200px;">
      ${c({args:s})}
      <syn-menu-item>Apple</syn-menu-item>
      <syn-menu-item>Banana</syn-menu-item>
      <syn-menu-item>Orange</syn-menu-item>
      <syn-menu-label>Vegetables</syn-menu-label>
      <syn-menu-item>Broccoli</syn-menu-item>
      <syn-menu-item>Carrot</syn-menu-item>
      <syn-menu-item>Zucchini</syn-menu-item>
    </syn-menu>
  `},n=i({Default:e},150);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('menu-label', 'default')
      }
    }
  },
  render: (args: unknown) => html\`
    <syn-menu style="width: 200px;">
      \${generateTemplate({
    args
  })}
      <syn-menu-item>Apple</syn-menu-item>
      <syn-menu-item>Banana</syn-menu-item>
      <syn-menu-item>Orange</syn-menu-item>
      <syn-menu-label>Vegetables</syn-menu-label>
      <syn-menu-item>Broccoli</syn-menu-item>
      <syn-menu-item>Carrot</syn-menu-item>
      <syn-menu-item>Zucchini</syn-menu-item>
    </syn-menu>
  \`
} as Story`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
}, 150)`,...n.parameters?.docs?.source}}};const C=["Default","Screenshot"];export{e as Default,n as Screenshot,C as __namedExportsOrder,w as default};