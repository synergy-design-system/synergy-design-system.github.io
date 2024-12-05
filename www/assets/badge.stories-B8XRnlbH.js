import{k as o}from"./directive-helpers-CDT6qhDs.js";import{s as y,a as p,g,b as e,c as l,d as m}from"./component-D48BArIm.js";import"./icon-mDAH2N1d.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-_eS0ek2w.js";import"./library-BZPO0bHa.js";import"./icon.component-DiV6dkIi.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{args:c,argTypes:u}=y("syn-badge"),{overrideArgs:b}=m("syn-badge"),{generateTemplate:v}=p("syn-badge"),R={args:b([{name:"default",type:"slot",value:"Badge"}],c),argTypes:u,component:"syn-badge",parameters:{design:g("14127-697884"),docs:{description:{component:e("badge","default")}}},title:"Components/syn-badge"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("badge","default")}}},render:d=>v({args:d})},n={parameters:{docs:{description:{story:e("badge","variants")}}},render:()=>o`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="danger">danger</syn-badge>
    </div>
  `},a={parameters:{docs:{description:{story:e("badge","withButton")}}},render:()=>o`
    <div style="display: flex; gap: var(--syn-spacing-2x-large)">
      <syn-button>
        Requests
        <syn-badge pill>30</syn-badge>
      </syn-button>

      <syn-button style="margin-inline-start: 1rem;">
        Warnings
        <syn-badge variant="warning" pill>8</syn-badge>
      </syn-button>

      <syn-button style="margin-inline-start: 1rem;">
        Errors
        <syn-badge variant="danger" pill>6</syn-badge>
      </syn-button>
    </div>
  `},t={parameters:{docs:{description:{story:e("badge","menu")}}},render:()=>o`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  `},r={parameters:{docs:{description:{story:e("badge","withEmptyContent")}}},render:()=>o`
    <div style="display: flex; position: relative; gap: var(--syn-spacing-3x-large);">
      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge></syn-badge>
      </syn-popup>

      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge>12</syn-badge>
      </syn-popup>
    </div>
  `},i=l({Default:s,Variants:n,WithButtons:a,WithMenuItems:t,WithEmptyContent:r});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('badge', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'variants')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="danger">danger</syn-badge>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'withButton')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-2x-large)">
      <syn-button>
        Requests
        <syn-badge pill>30</syn-badge>
      </syn-button>

      <syn-button style="margin-inline-start: 1rem;">
        Warnings
        <syn-badge variant="warning" pill>8</syn-badge>
      </syn-button>

      <syn-button style="margin-inline-start: 1rem;">
        Errors
        <syn-badge variant="danger" pill>6</syn-badge>
      </syn-button>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'menu')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  \`
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'withEmptyContent')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; position: relative; gap: var(--syn-spacing-3x-large);">
      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge></syn-badge>
      </syn-popup>

      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge>12</syn-badge>
      </syn-popup>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  WithButtons,
  WithMenuItems,
  WithEmptyContent
})`,...i.parameters?.docs?.source}}};const T=["Default","Variants","WithButtons","WithMenuItems","WithEmptyContent","Screenshot"];export{s as Default,i as Screenshot,n as Variants,a as WithButtons,r as WithEmptyContent,t as WithMenuItems,T as __namedExportsOrder,R as default};
