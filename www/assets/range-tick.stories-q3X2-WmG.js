import{k as a}from"./directive-helpers-CDT6qhDs.js";import{s as o,a as g,g as y,c as p}from"./component--W7FzjDu.js";import{d as i}from"./index-SK-fzUQf.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./library-BZPO0bHa.js";import"./icon.component-CNnTmbSm.js";import"./icon-FgfOggb5.js";const{args:d,argTypes:l}=o("syn-range-tick"),{generateTemplate:k}=g("syn-range-tick"),L={args:d,argTypes:l,component:"syn-range-tick",parameters:{design:y("0628-87581"),docs:{description:{component:i.components.range.ticks.default.description.value}}},title:"Components/syn-range-tick"},n={parameters:{controls:{disable:!1},docs:{description:{story:i.components.range.ticks.default.description.value}}},render:c=>k({args:c})},e={parameters:{docs:{description:{story:i.components.range.ticks.label.description.value}}},render:()=>a`
    <syn-range-tick>0</syn-range-tick>
  `},s={parameters:{docs:{description:{story:i.components.range.ticks.grouping.description.value}}},render:()=>a`
    <div class="groupings">
      <div class="even-group">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick> 
      </div>

      <div class="uneven-group">
        <syn-range-tick>1</syn-range-tick>
        <syn-range-tick>2</syn-range-tick>
        <syn-range-tick>3</syn-range-tick> 
        <syn-range-tick>5</syn-range-tick> 
        <syn-range-tick>8</syn-range-tick> 
        <syn-range-tick>13</syn-range-tick> 
      </div>
    </div>
    <style>
      .groupings {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-4x-large);
      }

      .even-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group syn-range-tick {
        flex-grow: 1;
      }
   
      .uneven-group syn-range-tick:nth-child(3) {
        flex-grow: 2;
      }

      .uneven-group syn-range-tick:nth-child(4) {
        flex-grow: 3;
      }

      .uneven-group syn-range-tick:nth-child(5) {
        flex-grow: 5;
      }

      .uneven-group syn-range-tick:nth-child(6) {
        flex-grow: 0;
      }
    </style>
  `},r={parameters:{docs:{description:{story:i.components.range.ticks.subdivision.description.value}}},render:()=>a`
    <div class="grouping">
      <syn-range-tick>0</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>50</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>100</syn-range-tick> 
    </div>
    <style>
      .grouping {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  `},t=p({Default:n,Labels:e,Grouping:s,SubdivisionTicks:r},230);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        story: docsTokens.components.range.ticks.default.description.value
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        story: docsTokens.components.range.ticks.label.description.value
      }
    }
  },
  render: () => html\`
    <syn-range-tick>0</syn-range-tick>
  \`
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        story: docsTokens.components.range.ticks.grouping.description.value
      }
    }
  },
  render: () => html\`
    <div class="groupings">
      <div class="even-group">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick> 
      </div>

      <div class="uneven-group">
        <syn-range-tick>1</syn-range-tick>
        <syn-range-tick>2</syn-range-tick>
        <syn-range-tick>3</syn-range-tick> 
        <syn-range-tick>5</syn-range-tick> 
        <syn-range-tick>8</syn-range-tick> 
        <syn-range-tick>13</syn-range-tick> 
      </div>
    </div>
    <style>
      .groupings {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-4x-large);
      }

      .even-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group syn-range-tick {
        flex-grow: 1;
      }
   
      .uneven-group syn-range-tick:nth-child(3) {
        flex-grow: 2;
      }

      .uneven-group syn-range-tick:nth-child(4) {
        flex-grow: 3;
      }

      .uneven-group syn-range-tick:nth-child(5) {
        flex-grow: 5;
      }

      .uneven-group syn-range-tick:nth-child(6) {
        flex-grow: 0;
      }
    </style>
  \`
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        story: docsTokens.components.range.ticks.subdivision.description.value
      }
    }
  },
  render: () => html\`
    <div class="grouping">
      <syn-range-tick>0</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>50</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>100</syn-range-tick> 
    </div>
    <style>
      .grouping {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  \`
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Grouping,
  SubdivisionTicks
}, 230)`,...t.parameters?.docs?.source}}};const O=["Default","Labels","Grouping","SubdivisionTicks","Screenshot"];export{n as Default,s as Grouping,e as Labels,t as Screenshot,r as SubdivisionTicks,O as __namedExportsOrder,L as default};
