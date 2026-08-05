import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,a as r,h as i,l as a}from"./preview-C-q7G2lS.js";import{c as o,t as s}from"./lit-DgWh_IaA.js";import{t as c}from"./icon-DQH7sBmo.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-pvg5noYG.js";import{t as h}from"./tag-group-fFuoa9E9.js";import{t as g}from"./tag-DS3Z4r62.js";var _=t({Default:()=>w,LabelAlignment:()=>D,Labels:()=>T,Screenshot:()=>O,Sizes:()=>E,__namedExportsOrder:()=>k,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{h(),g(),c(),s(),i(),p(),a(),{args:v,argTypes:y}=u(`syn-tag-group`),{generateTemplate:b}=f(`syn-tag-group`),{overrideArgs:x}=l(`syn-tag-group`),S=e=>Array(e).fill(`<syn-tag removable>
  <syn-icon name="wallpaper"></syn-icon>
  Option
 </syn-tag>`).join(`
`),C={args:x([{name:`label`,type:`slot`,value:`This is a label`},{name:`default`,type:`slot`,value:S(6)}],v),argTypes:y,component:`syn-tag-group`,parameters:{chromatic:{modes:r},docs:{description:{component:d(`tag-group`,`default`)}}},tags:[`Feedback`,`Tags`,`Filter`],title:`Components/syn-tag-group`},w={parameters:{controls:{disable:!1},docs:{description:{story:d(`tag-group`,`default`)}}},render:e=>b({args:e})},T={parameters:{docs:{description:{story:d(`tag-group`,`labels`)}}},render:()=>o`
    <syn-tag-group>
      <div slot="label">This is a label</div>
      ${n(S(6))}
    </syn-tag-group>
  `},E={parameters:{docs:{description:{story:d(`tag-group`,`size`)}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-x-large);">
      ${[`small`,`medium`,`large`].map(e=>o`
        <syn-tag-group
          size="${e}"
          label=${e.charAt(0).toUpperCase()+e.slice(1)}
        >
          ${n(S(6))}
        </syn-tag-group>
      `)}
    </div>
  `},D={parameters:{docs:{description:{story:d(`tag-group`,`label-alignment`)}}},render:()=>o`
    <syn-tag-group label="This is a label" label-position="start">
      ${n(S(6))}
    </syn-tag-group>
  `},O=m({Default:w,Labels:T,Sizes:E,LabelAlignment:D},350),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}, 350)`,...O.parameters?.docs?.source}}},k=[`Default`,`Labels`,`Sizes`,`LabelAlignment`,`Screenshot`]})))()}export{A as n,_ as r,w as t};