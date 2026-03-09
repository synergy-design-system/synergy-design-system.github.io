import"./tag-group-CMUlxSzu.js";import"./tag-Bh0UJWdg.js";import"./icon-BKjjr23e.js";import{C as g,o as l,c as i,d as c}from"./iframe-CvEK3hyS.js";import{g as o,a as m,s as d,b as u,c as y}from"./component-CA77O2dz.js";import"./synergy-element-CPjip6ae.js";import"./query-assigned-elements-CIlqV-be.js";import"./query-D0jTsbLw.js";import"./class-map-CxnJOQ98.js";import"./slot-9EVoRGQc.js";import"./watch-CEsCE2EF.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./tag.component-CFTtrtot.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./icon-button.component-DevAOAvU.js";import"./if-defined-B09jWYPP.js";import"./icon.component-ZmKdh5hn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-GL32a4iR.js";const{args:b,argTypes:f}=d("syn-tag-group"),{generateTemplate:S}=u("syn-tag-group"),{overrideArgs:h}=y("syn-tag-group"),p=e=>new Array(e).fill(`
<syn-tag removable>
  <syn-icon name="wallpaper"></syn-icon>
  Option
 </syn-tag>    
  `.trim()).join(`
`),G={args:h([{name:"label",type:"slot",value:"This is a label"},{name:"default",type:"slot",value:p(6)}],b),argTypes:f,component:"syn-tag-group",parameters:{chromatic:{modes:g},design:c("45275-174458"),docs:{description:{component:o("tag-group","default")}}},tags:["Feedback","Tags","Filter"],title:"Components/syn-tag-group"},r={parameters:{controls:{disable:!1},docs:{description:{story:o("tag-group","default")}}},render:e=>S({args:e})},a={parameters:{docs:{description:{story:o("tag-group","labels")}}},render:()=>i`
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
}, 350)`,...n.parameters?.docs?.source}}};const I=["Default","Labels","Sizes","LabelAlignment","Screenshot"];export{r as Default,t as LabelAlignment,a as Labels,n as Screenshot,s as Sizes,I as __namedExportsOrder,G as default};
