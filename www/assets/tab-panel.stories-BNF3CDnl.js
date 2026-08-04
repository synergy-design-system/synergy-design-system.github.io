import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-DKowTjrk.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./component-yQeR3V9a.js";import{n as f,t as p}from"./tab-panel-DDYUpsGx.js";import{t as m}from"./tab-Dd85iLw3.js";var h=t({Default:()=>S,Screenshot:()=>C,__namedExportsOrder:()=>w,default:()=>x}),g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{p(),f(),m(),a(),u(),r(),{args:g,argTypes:_}=s(`syn-tab-panel`),{overrideArgs:v}=o(`syn-tab-panel`),{generateTemplate:y}=l(`syn-tab-panel`),b=()=>i`<main class="synergy-replace">Replace this slot</main>`,x={args:v([{name:`default`,type:`slot`,value:b().strings.join(`
`)},{name:`name`,type:`attribute`,value:`tab1`}],g),argTypes:_,component:`syn-tab-panel`,parameters:{chromatic:{modes:n},docs:{description:{component:c(`tab-panel`,`default`)}}},tags:[`Navigation`],title:`Components/syn-tab-panel`},S={parameters:{docs:{description:{story:c(`tab-panel`,`default`)}}},render:e=>i`
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
  `},C=d({Default:S},200),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}, 200)`,...C.parameters?.docs?.source}}},w=[`Default`,`Screenshot`]})))()}export{T as n,h as r,S as t};