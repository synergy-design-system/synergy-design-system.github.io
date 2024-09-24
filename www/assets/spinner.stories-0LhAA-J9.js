import{s as p,a as c,g as y,b as t,c as d}from"./component-7g7PvM4J.js";import{k as a}from"./lit-element-BsyMe9HG.js";import"./index-Dy7bMyTO.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DiAnxFT_.js";const{args:m,argTypes:l}=p("syn-spinner"),{generateTemplate:g}=c("syn-spinner"),T={args:m,argTypes:l,component:"syn-spinner",parameters:{design:y("14127-697884"),docs:{description:{component:t("spinner","default")}}},title:"Components/syn-spinner"},e={parameters:{docs:{description:{story:t("spinner","default")}}},render:i=>g({args:i})},r={parameters:{docs:{description:{story:t("spinner","size")}}},render:()=>a`
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
}, 280)`,...o.parameters?.docs?.source}}};const b=["Default","Size","TrackWidth","Color","Screenshot"];export{n as Color,e as Default,o as Screenshot,r as Size,s as TrackWidth,b as __namedExportsOrder,T as default};
