import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-C-q7G2lS.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{i as o,n as s,o as c,r as l,t as u}from"./component-pvg5noYG.js";import{t as d}from"./spinner-DLndoWHt.js";var f=t({Color:()=>b,Default:()=>_,Screenshot:()=>x,Size:()=>v,TrackWidth:()=>y,__namedExportsOrder:()=>S,default:()=>g}),p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d(),a(),l(),r(),{args:p,argTypes:m}=o(`syn-spinner`),{generateTemplate:h}=c(`syn-spinner`),g={args:p,argTypes:m,component:`syn-spinner`,parameters:{chromatic:{modes:n},docs:{description:{component:s(`spinner`,`default`)}}},tags:[`Feedback`],title:`Components/syn-spinner`},_={parameters:{docs:{description:{story:s(`spinner`,`default`)}}},render:e=>h({args:e})},v={parameters:{docs:{description:{story:s(`spinner`,`size`)}}},render:()=>i`
    <div style="align-items: baseline; display: flex; gap: var(--syn-spacing-large);">
      <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
      <syn-spinner style="font-size: var(--syn-font-size-2x-large);"></syn-spinner>
      <syn-spinner style="font-size: 40px;"></syn-spinner>
    </div>
  `},y={parameters:{docs:{description:{story:s(`spinner`,`track-width`)}}},render:()=>i`
    <syn-spinner style="font-size: 48px; --track-width: 8px;"></syn-spinner>
  `},b={parameters:{docs:{description:{story:s(`spinner`,`color`)}}},render:()=>i`
    <syn-spinner style="font-size: 48px; --indicator-color: var(--syn-color-error-600);"></syn-spinner>
  `},x=u({Default:_,Size:v,TrackWidth:y,Color:b},280),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('spinner', 'default')
      }
    }
  },
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('spinner', 'size')
      }
    }
  },
  render: () => html\`
    <div style="align-items: baseline; display: flex; gap: var(--syn-spacing-large);">
      <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
      <syn-spinner style="font-size: var(--syn-font-size-2x-large);"></syn-spinner>
      <syn-spinner style="font-size: 40px;"></syn-spinner>
    </div>
  \`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('spinner', 'track-width')
      }
    }
  },
  render: () => html\`
    <syn-spinner style="font-size: 48px; --track-width: 8px;"></syn-spinner>
  \`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('spinner', 'color')
      }
    }
  },
  render: () => html\`
    <syn-spinner style="font-size: 48px; --indicator-color: var(--syn-color-error-600);"></syn-spinner>
  \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackWidth,
  Color
}, 280)`,...x.parameters?.docs?.source}}},S=[`Default`,`Size`,`TrackWidth`,`Color`,`Screenshot`]})))()}export{C as n,f as r,_ as t};