import{s as p,a as c,g as y,b as t,c as d}from"./component-y1-tfEpO.js";import{k as i}from"./directive-helpers-CDT6qhDs.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-DVp6siB8.js";import"./library-BZPO0bHa.js";import"./icon.component-B5i8AmDz.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-C1IMDzMD.js";const{args:m,argTypes:l}=p("syn-spinner"),{generateTemplate:g}=c("syn-spinner"),W={args:m,argTypes:l,component:"syn-spinner",parameters:{design:y("14127-697884"),docs:{description:{component:t("spinner","default")}}},title:"Components/syn-spinner"},e={parameters:{docs:{description:{story:t("spinner","default")}}},render:a=>g({args:a})},r={parameters:{docs:{description:{story:t("spinner","size")}}},render:()=>i`
    <div style="align-items: baseline; display: flex; gap: var(--syn-spacing-large);">
      <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
      <syn-spinner style="font-size: var(--syn-font-size-2x-large);"></syn-spinner>
      <syn-spinner style="font-size: 40px;"></syn-spinner>
    </div>
  `},s={parameters:{docs:{description:{story:t("spinner","track-width")}}},render:()=>i`
    <syn-spinner style="font-size: 48px; --track-width: 8px;"></syn-spinner>
  `},n={parameters:{docs:{description:{story:t("spinner","color")}}},render:()=>i`
    <syn-spinner style="font-size: 48px; --indicator-color: var(--syn-color-error-600);"></syn-spinner>
  `},o=d({Default:e,Size:r,TrackWidth:s,Color:n},280);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('spinner', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}, 280)`,...o.parameters?.docs?.source}}};const A=["Default","Size","TrackWidth","Color","Screenshot"];export{n as Color,e as Default,o as Screenshot,r as Size,s as TrackWidth,A as __namedExportsOrder,W as default};
