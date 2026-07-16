import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-BiSXA87W.js";import{i as s,n as c,o as l,r as u,t as d}from"./component-BZMStFjM.js";import{t as f}from"./spinner-CXHBF6WE.js";var p,m,h,g,_,v,y,b,x,S,C=e((()=>{f(),n(),u(),a(),r(),{args:p,argTypes:m}=s(`syn-spinner`),{generateTemplate:h}=l(`syn-spinner`),g={args:p,argTypes:m,component:`syn-spinner`,parameters:{chromatic:{modes:o},design:i(`41227-223775`),docs:{description:{component:c(`spinner`,`default`)}}},tags:[`Feedback`],title:`Components/syn-spinner`},_={parameters:{docs:{description:{story:c(`spinner`,`default`)}}},render:e=>h({args:e})},v={parameters:{docs:{description:{story:c(`spinner`,`size`)}}},render:()=>t`
    <div style="align-items: baseline; display: flex; gap: var(--syn-spacing-large);">
      <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
      <syn-spinner style="font-size: var(--syn-font-size-2x-large);"></syn-spinner>
      <syn-spinner style="font-size: 40px;"></syn-spinner>
    </div>
  `},y={parameters:{docs:{description:{story:c(`spinner`,`track-width`)}}},render:()=>t`
    <syn-spinner style="font-size: 48px; --track-width: 8px;"></syn-spinner>
  `},b={parameters:{docs:{description:{story:c(`spinner`,`color`)}}},render:()=>t`
    <syn-spinner style="font-size: 48px; --indicator-color: var(--syn-color-error-600);"></syn-spinner>
  `},x=d({Default:_,Size:v,TrackWidth:y,Color:b},280),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}, 280)`,...x.parameters?.docs?.source}}},S=[`Default`,`Size`,`TrackWidth`,`Color`,`Screenshot`]}));C();export{b as Color,_ as Default,x as Screenshot,v as Size,y as TrackWidth,S as __namedExportsOrder,g as default,C as t};