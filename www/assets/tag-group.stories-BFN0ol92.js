import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{_ as t,a as n,d as r,o as i,s as a,y as o}from"./preview-DXkhgu0Z.js";import{c as s,t as c}from"./lit-BfcklOOD.js";import{t as l}from"./icon-koM57tMi.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./component-B0n0ooCL.js";import{t as g}from"./tag-group-BZyu_6iw.js";import{t as _}from"./tag-h88yB-j4.js";var v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{g(),_(),l(),c(),t(),m(),i(),r(),{args:v,argTypes:y}=d(`syn-tag-group`),{generateTemplate:b}=p(`syn-tag-group`),{overrideArgs:x}=u(`syn-tag-group`),S=e=>Array(e).fill(`<syn-tag removable>
  <syn-icon name="wallpaper"></syn-icon>
  Option
 </syn-tag>`).join(`
`),C={args:x([{name:`label`,type:`slot`,value:`This is a label`},{name:`default`,type:`slot`,value:S(6)}],v),argTypes:y,component:`syn-tag-group`,parameters:{chromatic:{modes:a},design:n(`45275-186668`),docs:{description:{component:f(`tag-group`,`default`)}}},tags:[`Feedback`,`Tags`,`Filter`],title:`Components/syn-tag-group`},w={parameters:{controls:{disable:!1},docs:{description:{story:f(`tag-group`,`default`)}}},render:e=>b({args:e})},T={parameters:{docs:{description:{story:f(`tag-group`,`labels`)}}},render:()=>s`
    <syn-tag-group>
      <div slot="label">This is a label</div>
      ${o(S(6))}
    </syn-tag-group>
  `},E={parameters:{docs:{description:{story:f(`tag-group`,`size`)}}},render:()=>s`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-x-large);">
      ${[`small`,`medium`,`large`].map(e=>s`
        <syn-tag-group
          size="${e}"
          label=${e.charAt(0).toUpperCase()+e.slice(1)}
        >
          ${o(S(6))}
        </syn-tag-group>
      `)}
    </div>
  `},D={parameters:{docs:{description:{story:f(`tag-group`,`label-alignment`)}}},render:()=>s`
    <syn-tag-group label="This is a label" label-position="start">
      ${o(S(6))}
    </syn-tag-group>
  `},O=h({Default:w,Labels:T,Sizes:E,LabelAlignment:D},350),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('tag-group', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag-group', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-tag-group>
      <div slot="label">This is a label</div>
      \${unsafeHTML(generateTags(6))}
    </syn-tag-group>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag-group', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-x-large);">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
        <syn-tag-group
          size="\${size}"
          label=\${size.charAt(0).toUpperCase() + size.slice(1)}
        >
          \${unsafeHTML(generateTags(6))}
        </syn-tag-group>
      \`)}
    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag-group', 'label-alignment')
      }
    }
  },
  render: () => html\`
    <syn-tag-group label="This is a label" label-position="start">
      \${unsafeHTML(generateTags(6))}
    </syn-tag-group>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Sizes,
  LabelAlignment
}, 350)`,...O.parameters?.docs?.source}}},k=[`Default`,`Labels`,`Sizes`,`LabelAlignment`,`Screenshot`]}));A();export{w as Default,D as LabelAlignment,T as Labels,O as Screenshot,E as Sizes,k as __namedExportsOrder,C as default,A as t};