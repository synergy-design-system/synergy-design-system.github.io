import"./spinner-xGiRPBdv.js";import{C as p,c as a,d as c}from"./iframe-hncc6fn8.js";import{g as t,a as d,s as y,b as m}from"./component-BDcZ8_k2.js";import"./spinner.component-CET_LilP.js";import"./controller-0nuky388.js";import"./synergy-element-ZP8Aphe2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-VWJ8UqMU.js";const{args:l,argTypes:g}=y("syn-spinner"),{generateTemplate:f}=m("syn-spinner"),T={args:l,argTypes:g,component:"syn-spinner",parameters:{chromatic:{modes:p},design:c("14127-697884"),docs:{description:{component:t("spinner","default")}}},tags:["Feedback"],title:"Components/syn-spinner"},e={parameters:{docs:{description:{story:t("spinner","default")}}},render:i=>f({args:i})},r={parameters:{docs:{description:{story:t("spinner","size")}}},render:()=>a`
    <div style="align-items: baseline; display: flex; gap: var(--syn-spacing-large);">
      <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
      <syn-spinner style="font-size: var(--syn-font-size-2x-large);"></syn-spinner>
      <syn-spinner style="font-size: 40px;"></syn-spinner>
    </div>
  `},s={parameters:{docs:{description:{story:t("spinner","track-width")}}},render:()=>a`
    <syn-spinner style="font-size: 48px; --track-width: 8px;"></syn-spinner>
  `},n={parameters:{docs:{description:{story:t("spinner","color")}}},render:()=>a`
    <syn-spinner style="font-size: 48px; --indicator-color: var(--syn-color-error-600);"></syn-spinner>
  `},o=d({Default:e,Size:r,TrackWidth:s,Color:n},280);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackWidth,
  Color
}, 280)`,...o.parameters?.docs?.source}}};const C=["Default","Size","TrackWidth","Color","Screenshot"];export{n as Color,e as Default,o as Screenshot,r as Size,s as TrackWidth,C as __namedExportsOrder,T as default};
