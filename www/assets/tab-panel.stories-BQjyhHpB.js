import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-CIeU5pXv.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Dma-UHGC.js";import{n as p,t as m}from"./tab-panel-0GUrR1a8.js";import{t as h}from"./tab-B4Ho8wZT.js";var g,_,v,y,b,x,S,C,w;e((()=>{m(),p(),h(),t(),d(),r(),a(),{args:g,argTypes:_}=c(`syn-tab-panel`),{overrideArgs:v}=s(`syn-tab-panel`),{generateTemplate:y}=u(`syn-tab-panel`),b=()=>n`<main class="synergy-replace">Replace this slot</main>`,x={args:v([{name:`default`,type:`slot`,value:b().strings.join(`
`)},{name:`name`,type:`attribute`,value:`tab1`}],g),argTypes:_,component:`syn-tab-panel`,parameters:{chromatic:{modes:i},design:o(`42207-340626`),docs:{description:{component:l(`tab-panel`,`default`)}}},tags:[`Navigation`],title:`Components/syn-tab-panel`},S={parameters:{docs:{description:{story:l(`tab-panel`,`default`)}}},render:e=>n`
    <syn-tab-group>
      <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>
      
      ${y({args:e})}
      <syn-tab-panel name="tab2">${b()}</syn-tab-panel>
      <syn-tab-panel name="tab3">${b()}</syn-tab-panel>
      <syn-tab-panel name="tab4">${b()}</syn-tab-panel>
    </syn-tab-group>
    <style>
      .synergy-replace {
        border: 1px dashed #9747FF;
        border-radius: var(--syn-border-radius-small);
        color: #9747FF;
        font: var(--syn-body-small-bold);
        height: var(--syn-spacing-x-large);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  `},C=f({Default:S},200),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-panel', 'default')
      }
    }
  },
  render: args => html\`
    <syn-tab-group>
      <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
      <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>
      
      \${generateTemplate({
    args
  })}
      <syn-tab-panel name="tab2">\${createReplaceContent()}</syn-tab-panel>
      <syn-tab-panel name="tab3">\${createReplaceContent()}</syn-tab-panel>
      <syn-tab-panel name="tab4">\${createReplaceContent()}</syn-tab-panel>
    </syn-tab-group>
    <style>
      .synergy-replace {
        border: 1px dashed #9747FF;
        border-radius: var(--syn-border-radius-small);
        color: #9747FF;
        font: var(--syn-body-small-bold);
        height: var(--syn-spacing-x-large);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default
}, 200)`,...C.parameters?.docs?.source}}},w=[`Default`,`Screenshot`]}))();export{S as Default,C as Screenshot,w as __namedExportsOrder,x as default};