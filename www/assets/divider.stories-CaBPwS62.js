import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-DVxLZS-s.js";import{i as s,n as c,o as l,r as u,t as d}from"./component-DniQwiZV.js";import{t as f}from"./divider-CBSOkBji.js";var p,m,h,g,_,v,y,b,x,S,C;e((()=>{f(),t(),u(),r(),a(),{args:p,argTypes:m}=s(`syn-divider`),{generateTemplate:h}=l(`syn-divider`),g={args:p,argTypes:m,component:`syn-divider`,parameters:{chromatic:{modes:i},design:o(`41227-216341`),docs:{description:{component:c(`divider`,`default`)}}},tags:[`Structure`],title:`Components/syn-divider`},_={parameters:{docs:{description:{story:c(`divider`,`default`)}}},render:e=>h({args:e})},v={parameters:{docs:{description:{story:c(`divider`,`width`)}}},render:()=>n`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>`},y={parameters:{docs:{description:{story:c(`divider`,`color`)}}},render:()=>n`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>`},b={parameters:{docs:{description:{story:c(`divider`,`spacing`)}}},render:()=>n`
    <div style="text-align: center;">
      Above
      <syn-divider style="--spacing: var(--syn-spacing-large);"></syn-divider>
      Below
    </div>
  `},x={parameters:{docs:{description:{story:c(`divider`,`vertical`)}}},render:()=>n`
    <div style="display: flex; align-items: center; height: 2rem;">
      First
      <syn-divider vertical></syn-divider>
      Middle
      <syn-divider vertical></syn-divider>
      Last
    </div>
  `},S=d({Default:_,Width:v,Color:y,Spacing:b,Vertical:x},180),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'width')
      }
    }
  },
  render: () => html\`<syn-divider style="--width: var(--syn-spacing-x-small);"></syn-divider>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('divider', 'color')
      }
    }
  },
  render: () => html\`<syn-divider style="--color: var(--syn-color-primary-600);"></syn-divider>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Width,
  Color,
  Spacing,
  Vertical
}, 180)`,...S.parameters?.docs?.source},description:{story:`Use dividers in  to visually group menu items.
@todo: Enable when <syn-menu /> is implemented!`,...S.parameters?.docs?.description}}},C=[`Default`,`Width`,`Color`,`Spacing`,`Vertical`,`Screenshot`]}))();export{y as Color,_ as Default,S as Screenshot,b as Spacing,x as Vertical,v as Width,C as __namedExportsOrder,g as default};