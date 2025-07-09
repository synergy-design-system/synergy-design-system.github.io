import{S as p}from"./spinner.component-D_XMpxII.js";import{g as c,x as i}from"./iframe-D8v3JfET.js";import{g as t,s as y,c as d,b as m}from"./component-Bg5OTkmo.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./component.styles-Bhl5cM0E.js";import"./property-DoR_msu8.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";p.define("syn-spinner");const{args:l,argTypes:g}=y("syn-spinner"),{generateTemplate:f}=d("syn-spinner"),T={args:l,argTypes:g,component:"syn-spinner",parameters:{design:c("14127-697884"),docs:{description:{component:t("spinner","default")}}},tags:["Feedback"],title:"Components/syn-spinner"},e={parameters:{docs:{description:{story:t("spinner","default")}}},render:a=>f({args:a})},r={parameters:{docs:{description:{story:t("spinner","size")}}},render:()=>i`
    <div style="align-items: baseline; display: flex; gap: var(--syn-spacing-large);">
      <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
      <syn-spinner style="font-size: var(--syn-font-size-2x-large);"></syn-spinner>
      <syn-spinner style="font-size: 40px;"></syn-spinner>
    </div>
  `},n={parameters:{docs:{description:{story:t("spinner","track-width")}}},render:()=>i`
    <syn-spinner style="font-size: 48px; --track-width: 8px;"></syn-spinner>
  `},s={parameters:{docs:{description:{story:t("spinner","color")}}},render:()=>i`
    <syn-spinner style="font-size: 48px; --indicator-color: var(--syn-color-error-600);"></syn-spinner>
  `},o=m({Default:e,Size:r,TrackWidth:n,Color:s},280);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackWidth,
  Color
}, 280)`,...o.parameters?.docs?.source}}};const w=["Default","Size","TrackWidth","Color","Screenshot"];export{s as Color,e as Default,o as Screenshot,r as Size,n as TrackWidth,w as __namedExportsOrder,T as default};
