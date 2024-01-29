import"./preview-JelwKJMQ.js";import{x as a}from"./directive-helpers-dXnBnwbo.js";import{s as c,a as p,g as e,b as m}from"./component-YF21Uptg.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-0RmXMwT2.js";import"./icon-button-K1gWgnDp.js";import"./icon-cLGZxvB8.js";import"./chunk-HJCNT6QR-zjy042Te.js";import"./chunk-FJPRWHXQ-npYaCjJl.js";import"./index-PPLHz8o0.js";import"./index-kUddmL6t.js";const{args:l,argTypes:y}=c("syn-divider"),{generateTemplate:v}=p("syn-divider"),V={args:l,argTypes:y,component:"divider",parameters:{docs:{description:{component:e("divider","default")}}},title:"Components/syn-divider"},s={parameters:{docs:{description:{story:e("divider","default")}}},render:d=>v({args:d})},i={parameters:{docs:{description:{story:e("divider","width")}}},render:()=>a`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>`},n={parameters:{docs:{description:{story:e("divider","color")}}},render:()=>a`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>`},t={parameters:{docs:{description:{story:e("divider","spacing")}}},render:()=>a`
    <div style="text-align: center;">
      Above
      <syn-divider style="--spacing: var(--syn-spacing-large);"></syn-divider>
      Below
    </div>
  `},o={parameters:{docs:{description:{story:e("divider","vertical")}}},render:()=>a`
    <div style="display: flex; align-items: center; height: 2rem;">
      First
      <syn-divider vertical></syn-divider>
      Middle
      <syn-divider vertical></syn-divider>
      Last
    </div>
  `},r=m({Default:s,Width:i,Color:n,Spacing:t,Vertical:o},180);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'default')
      }
    }
  },
  render: (args: any) => generateTemplate({
    args
  })
} as Story`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'width')
      }
    }
  },
  render: () => html\`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>\`
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'color')
      }
    }
  },
  render: () => html\`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>\`
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'spacing')
      }
    }
  },
  render: () => html\`
    <div style="text-align: center;">
      Above
      <syn-divider style="--spacing: var(--syn-spacing-large);"></syn-divider>
      Below
    </div>
  \`
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'vertical')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; align-items: center; height: 2rem;">
      First
      <syn-divider vertical></syn-divider>
      Middle
      <syn-divider vertical></syn-divider>
      Last
    </div>
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Width,
  Color,
  Spacing,
  Vertical
}, 180)`,...r.parameters?.docs?.source},description:{story:`Use dividers in  to visually group menu items.
@todo: Enable when <syn-menu /> is implemented!`,...r.parameters?.docs?.description}}};const W=["Default","Width","Color","Spacing","Vertical","Screenshot"];export{n as Color,s as Default,r as Screenshot,t as Spacing,o as Vertical,i as Width,W as __namedExportsOrder,V as default};
