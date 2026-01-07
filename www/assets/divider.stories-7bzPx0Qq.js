import"./divider-BDNGYN3q.js";import{g as c,C as p,x as o}from"./iframe-DfPMeVe9.js";import{g as e,s as l,c as m,b as y}from"./component-DEQyBny7.js";import"./divider.component-DjtKb3xZ.js";import"./synergy-element-BWbdILdx.js";import"./watch-CEsCE2EF.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DmU5sf6r.js";const{args:v,argTypes:g}=l("syn-divider"),{generateTemplate:u}=m("syn-divider"),T={args:v,argTypes:g,component:"syn-divider",parameters:{chromatic:{modes:p},design:c("5521-515898"),docs:{description:{component:e("divider","default")}}},tags:["Structure"],title:"Components/syn-divider"},s={parameters:{docs:{description:{story:e("divider","default")}}},render:d=>u({args:d})},i={parameters:{docs:{description:{story:e("divider","width")}}},render:()=>o`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>`},t={parameters:{docs:{description:{story:e("divider","color")}}},render:()=>o`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>`},n={parameters:{docs:{description:{story:e("divider","spacing")}}},render:()=>o`
    <div style="text-align: center;">
      Above
      <syn-divider style="--spacing: var(--syn-spacing-large);"></syn-divider>
      Below
    </div>
  `},a={parameters:{docs:{description:{story:e("divider","vertical")}}},render:()=>o`
    <div style="display: flex; align-items: center; height: 2rem;">
      First
      <syn-divider vertical></syn-divider>
      Middle
      <syn-divider vertical></syn-divider>
      Last
    </div>
  `},r=y({Default:s,Width:i,Color:t,Spacing:n,Vertical:a},180);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Width,
  Color,
  Spacing,
  Vertical
}, 180)`,...r.parameters?.docs?.source},description:{story:`Use dividers in  to visually group menu items.
@todo: Enable when <syn-menu /> is implemented!`,...r.parameters?.docs?.description}}};const _=["Default","Width","Color","Spacing","Vertical","Screenshot"];export{t as Color,s as Default,r as Screenshot,n as Spacing,a as Vertical,i as Width,_ as __namedExportsOrder,T as default};
