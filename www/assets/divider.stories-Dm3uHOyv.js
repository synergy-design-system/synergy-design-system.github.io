import{g as e,a as c,s as p,c as m,d as l}from"./component-zI47X1tU.js";import{x as a}from"./directive-helpers-Dvm_Ferq.js";import"./library-BeKtmk-e.js";import"./ref-mC-OfJbg.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./index-DrFu-skq.js";import"./icon-button-dyHaNbso.js";import"./functions-CDi3doZH.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CDx8exsq.js";const{args:y,argTypes:v}=p("syn-divider"),{generateTemplate:g}=m("syn-divider"),W={args:y,argTypes:v,component:"syn-divider",parameters:{design:c("5521-515898"),docs:{description:{component:e("divider","default")}}},title:"Components/syn-divider"},s={parameters:{docs:{description:{story:e("divider","default")}}},render:d=>g({args:d})},i={parameters:{docs:{description:{story:e("divider","width")}}},render:()=>a`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>`},t={parameters:{docs:{description:{story:e("divider","color")}}},render:()=>a`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>`},n={parameters:{docs:{description:{story:e("divider","spacing")}}},render:()=>a`
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
  `},r=l({Default:s,Width:i,Color:t,Spacing:n,Vertical:o},180);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'color')
      }
    }
  },
  render: () => html\`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>\`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
@todo: Enable when <syn-menu /> is implemented!`,...r.parameters?.docs?.description}}};const k=["Default","Width","Color","Spacing","Vertical","Screenshot"];export{t as Color,s as Default,r as Screenshot,n as Spacing,o as Vertical,i as Width,k as __namedExportsOrder,W as default};
