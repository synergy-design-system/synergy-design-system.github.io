import"./tag-group-fnzE2mZh.js";import"./tag-BFVytaOs.js";import"./icon-CdTGkBe_.js";import{C as g,o as l,c as i,d as c}from"./iframe-hncc6fn8.js";import{g as o,a as m,s as d,b as u,c as y}from"./component-BDcZ8_k2.js";import"./synergy-element-ZP8Aphe2.js";import"./query-assigned-elements-CIlqV-be.js";import"./query-D0jTsbLw.js";import"./class-map-J4m71D6f.js";import"./slot-9EVoRGQc.js";import"./watch-CEsCE2EF.js";import"./decorator-jbWt9cIm.js";import"./functions-DCU90qiI.js";import"./tag.component-DNEik5mR.js";import"./controller-0nuky388.js";import"./icon-button.component-BkakauBp.js";import"./if-defined-Df6Qu0g8.js";import"./icon.component-uI_62ALx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-VWJ8UqMU.js";const{args:b,argTypes:f}=d("syn-tag-group"),{generateTemplate:S}=u("syn-tag-group"),{overrideArgs:h}=y("syn-tag-group"),p=e=>new Array(e).fill(`
<syn-tag removable>
  <syn-icon name="wallpaper"></syn-icon>
  Option
 </syn-tag>    
  `.trim()).join(`
`),B={args:h([{name:"label",type:"slot",value:"This is a label"},{name:"default",type:"slot",value:p(6)}],b),argTypes:f,component:"syn-tag-group",parameters:{chromatic:{modes:g},design:c("45275-174458"),docs:{description:{component:o("tag-group","default")}}},tags:["Feedback","Tags","Filter"],title:"Components/syn-tag-group"},r={parameters:{controls:{disable:!1},docs:{description:{story:o("tag-group","default")}}},render:e=>S({args:e})},a={parameters:{docs:{description:{story:o("tag-group","labels")}}},render:()=>i`
    <syn-tag-group>
      <div slot="label">This is a label</div>
      ${l(p(6))}
    </syn-tag-group>
  `},s={parameters:{docs:{description:{story:o("tag-group","size")}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-x-large);">
      ${["small","medium","large"].map(e=>i`
        <syn-tag-group
          size="${e}"
          label=${e.charAt(0).toUpperCase()+e.slice(1)}
        >
          ${l(p(6))}
        </syn-tag-group>
      `)}
    </div>
  `},t={parameters:{docs:{description:{story:o("tag-group","label-alignment")}}},render:()=>i`
    <syn-tag-group label="This is a label" label-position="start">
      ${l(p(6))}
    </syn-tag-group>
  `},n=m({Default:r,Labels:a,Sizes:s,LabelAlignment:t},350);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Sizes,
  LabelAlignment
}, 350)`,...n.parameters?.docs?.source}}};const G=["Default","Labels","Sizes","LabelAlignment","Screenshot"];export{r as Default,t as LabelAlignment,a as Labels,n as Screenshot,s as Sizes,G as __namedExportsOrder,B as default};
