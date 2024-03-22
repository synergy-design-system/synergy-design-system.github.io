import"./preview-RO1Z7rcH.js";import{x as a}from"./lit-element-BlBE-KDw.js";import{s as c,a as p,g as e,b as m}from"./component-9RDkNEc1.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-CSFZGqAw.js";import"./directive-helpers-D9fPh5dU.js";import"./icon-button-Bt59P7oc.js";import"./icon-C0zSQhMg.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-pzRuZh1q.js";const{args:l,argTypes:y}=c("syn-divider"),{generateTemplate:v}=p("syn-divider"),A={args:l,argTypes:y,component:"syn-divider",parameters:{docs:{description:{component:e("divider","default")}}},title:"Components/syn-divider"},s={parameters:{docs:{description:{story:e("divider","default")}}},render:d=>v({args:d})},n={parameters:{docs:{description:{story:e("divider","width")}}},render:()=>a`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>`},i={parameters:{docs:{description:{story:e("divider","color")}}},render:()=>a`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>`},t={parameters:{docs:{description:{story:e("divider","spacing")}}},render:()=>a`
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
  `},r=m({Default:s,Width:n,Color:i,Spacing:t,Vertical:o},180);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} as Story`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'width')
      }
    }
  },
  render: () => html\`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>\`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'color')
      }
    }
  },
  render: () => html\`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>\`
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
@todo: Enable when <syn-menu /> is implemented!`,...r.parameters?.docs?.description}}};const V=["Default","Width","Color","Spacing","Vertical","Screenshot"];export{i as Color,s as Default,r as Screenshot,t as Spacing,o as Vertical,n as Width,V as __namedExportsOrder,A as default};
