import{x as a}from"./directive-helpers-DGrfjhaU.js";import"./range-tick-D1QkE0FV.js";import{g as i,a as o,s as g,d as y,c as p}from"./component-CRxE2rhG.js";import"./static-gmWA-8Kq.js";import"./property-BGzwfL48.js";import"./component.styles-Do19GEOY.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CcHPuk5a.js";const{args:d,argTypes:k}=g("syn-range-tick"),{generateTemplate:l}=y("syn-range-tick"),_={args:d,argTypes:k,component:"syn-range-tick",parameters:{design:o("0628-87581"),docs:{description:{component:i("range-tick","default")}}},title:"Components/syn-range-tick"},n={parameters:{controls:{disable:!1},docs:{description:{story:i("range-tick","default")}}},render:c=>l({args:c})},e={parameters:{docs:{description:{story:i("range-tick","label")}}},render:()=>a`
    <syn-range-tick>0</syn-range-tick>
  `},r={parameters:{docs:{description:{story:i("range-tick","grouping")}}},render:()=>a`
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
  `},s={parameters:{docs:{description:{story:i("range-tick","subdivision")}}},render:()=>a`
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
  `},t=p({Default:n,Labels:e,Grouping:r,SubdivisionTicks:s},230);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        story: generateStoryDescription('range-tick', 'default')
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
        story: generateStoryDescription('range-tick', 'label')
      }
    }
  },
  render: () => html\`
    <syn-range-tick>0</syn-range-tick>
  \`
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'grouping')
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'subdivision')
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Grouping,
  SubdivisionTicks
}, 230)`,...t.parameters?.docs?.source}}};const A=["Default","Labels","Grouping","SubdivisionTicks","Screenshot"];export{n as Default,r as Grouping,e as Labels,t as Screenshot,s as SubdivisionTicks,A as __namedExportsOrder,_ as default};
