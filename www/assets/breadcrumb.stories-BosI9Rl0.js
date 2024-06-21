import{x as b}from"./lit-element-DILkAbkc.js";import{g as d}from"./preview-BdvKKf_Z.js";import{s as o,a as i,g as e,b as u,c as y}from"./component-CvGABkbr.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-BTqLLuW4.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-B715Afvu.js";import"./icon-C05bciLq.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-Dqg6DAZ7.js";const{args:p,argTypes:l}=o("syn-breadcrumb"),{overrideArgs:g}=y("syn-breadcrumb"),{generateTemplate:f}=i("syn-breadcrumb"),T={args:g([{name:"default",type:"slot",value:`
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      `}],p),argTypes:l,component:"syn-breadcrumb",parameters:{design:d("15172-32035"),docs:{description:{component:e("breadcrumb","default")}}},title:"Components/syn-breadcrumb"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("breadcrumb","default")}}},render:c=>f({args:c})},n={parameters:{docs:{description:{story:e("breadcrumb","links")}}},render:()=>b`
    <syn-breadcrumb>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},m={parameters:{docs:{description:{story:e("breadcrumb","prefix")}}},render:()=>b`
    <syn-breadcrumb>
      <syn-breadcrumb-item>
        <syn-icon slot="prefix" name="home"></syn-icon>
        Breadcrumb Item
      </syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},s={parameters:{docs:{description:{story:e("breadcrumb","suffix")}}},render:()=>b`
    <syn-breadcrumb>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>
        Breadcrumb Item
        <syn-icon slot="suffix" name="security"></syn-icon>
      </syn-breadcrumb-item>
    </syn-breadcrumb>
  `},t={parameters:{docs:{description:{story:e("breadcrumb","menu")}}},render:()=>b`
    <!-- This <div> is only here for positioning the dropdown in storybook -->
    <div style="position: relative;">
      <syn-breadcrumb>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-dropdown>
            <button slot="trigger" class="manual-strigger">
              <syn-icon label="More options" name="more_horiz"></syn-icon>
            </button>
            <syn-menu>
              <syn-menu-item>Breadcrumb Item</syn-menu-item>
              <syn-menu-item>Breadcrumb Item</syn-menu-item>
              <syn-menu-item>Breadcrumb Item</syn-menu-item>
            </syn-menu>
          </syn-dropdown>
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      </syn-breadcrumb>
    </div>
    <style>
      .manual-strigger {
        appearance: none;
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        font-size: var(--syn-font-size-small);
        margin: 0;
        padding: 0;
      }
    </style>
  `},a=u({Default:r,BreadcrumbLinks:n,Prefixes:m,Suffixes:s,WithDropdowns:t},250);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('breadcrumb', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('breadcrumb', 'links')
      }
    }
  },
  render: () => html\`
    <syn-breadcrumb>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  \`
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('breadcrumb', 'prefix')
      }
    }
  },
  render: () => html\`
    <syn-breadcrumb>
      <syn-breadcrumb-item>
        <syn-icon slot="prefix" name="home"></syn-icon>
        Breadcrumb Item
      </syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  \`
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('breadcrumb', 'suffix')
      }
    }
  },
  render: () => html\`
    <syn-breadcrumb>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>
        Breadcrumb Item
        <syn-icon slot="suffix" name="security"></syn-icon>
      </syn-breadcrumb-item>
    </syn-breadcrumb>
  \`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('breadcrumb', 'menu')
      }
    }
  },
  render: () => html\`
    <!-- This <div> is only here for positioning the dropdown in storybook -->
    <div style="position: relative;">
      <syn-breadcrumb>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-dropdown>
            <button slot="trigger" class="manual-strigger">
              <syn-icon label="More options" name="more_horiz"></syn-icon>
            </button>
            <syn-menu>
              <syn-menu-item>Breadcrumb Item</syn-menu-item>
              <syn-menu-item>Breadcrumb Item</syn-menu-item>
              <syn-menu-item>Breadcrumb Item</syn-menu-item>
            </syn-menu>
          </syn-dropdown>
        </syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      </syn-breadcrumb>
    </div>
    <style>
      .manual-strigger {
        appearance: none;
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        font-size: var(--syn-font-size-small);
        margin: 0;
        padding: 0;
      }
    </style>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BreadcrumbLinks,
  Prefixes,
  Suffixes,
  WithDropdowns
}, 250)`,...a.parameters?.docs?.source}}};const P=["Default","BreadcrumbLinks","Prefixes","Suffixes","WithDropdowns","Screenshot"];export{n as BreadcrumbLinks,r as Default,m as Prefixes,a as Screenshot,s as Suffixes,t as WithDropdowns,P as __namedExportsOrder,T as default};
