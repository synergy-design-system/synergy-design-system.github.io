import{x as m}from"./directive-helpers-po9zzQFH.js";import"./preview-GxDBaHoI.js";import{s as r,a,g as t,b as o,c as i}from"./component-xlfJ1Ef6.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-zhhcjNaa.js";import"./icon-button-IfN6SgYo.js";import"./icon-dZvNvrqy.js";import"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import"./index-PPLHz8o0.js";import"./index-x-o9IySm.js";const{args:u,argTypes:l}=r("syn-menu-label"),{overrideArgs:y}=i("syn-menu-label"),{generateTemplate:p}=a("syn-menu-label"),T={args:y([{name:"default",type:"slot",value:"Fruits"}],u),argTypes:l,component:"syn-menu-label",parameters:{docs:{description:{component:t("menu-label","default")}}},title:"Components/syn-menu-label"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("menu-label","default")}}},render:s=>m`
    <syn-menu style="width: 200px;">
      ${p({args:s})}
      <syn-menu-item>Apple</syn-menu-item>
      <syn-menu-item>Banana</syn-menu-item>
      <syn-menu-item>Orange</syn-menu-item>
      <syn-menu-label>Vegetables</syn-menu-label>
      <syn-menu-item>Broccoli</syn-menu-item>
      <syn-menu-item>Carrot</syn-menu-item>
      <syn-menu-item>Zucchini</syn-menu-item>
    </syn-menu>
  `},n=o({Default:e},150);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}, 150)`,...n.parameters?.docs?.source}}};const w=["Default","Screenshot"];export{e as Default,n as Screenshot,w as __namedExportsOrder,T as default};
