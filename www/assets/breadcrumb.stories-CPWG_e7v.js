import{C as o,c as b,d as i}from"./iframe-eRvaIELU.js";import"./breadcrumb-qjuLq5jD.js";import"./icon-CqBzwWTC.js";import"./dropdown-xIkJLrdm.js";import"./menu-item-CP3JuO68.js";import{g as r,a as d,s as u,b as y,c as p}from"./component-mLh0MrP7.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-BctzS3gw.js";import"./slot-9EVoRGQc.js";import"./if-defined-BvPV1s9v.js";import"./synergy-element-BVZI5H_G.js";import"./icon.component-ehmpGKuT.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./controller-BGdn_hBF.js";import"./dropdown.component-C_DDugxc.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-Dn3dFsqK.js";import"./menu.component-CZc5Zv9Z.js";import"./spinner.component-BI3Egrps.js";import"./index-3hbeBem-.js";import"./_docs-DCFLSkr0.js";const{args:l,argTypes:g}=u("syn-breadcrumb"),{overrideArgs:f}=p("syn-breadcrumb"),{generateTemplate:B}=y("syn-breadcrumb"),G={args:f([{name:"default",type:"slot",value:`
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      `}],l),argTypes:g,component:"syn-breadcrumb",parameters:{chromatic:{modes:o},design:i("15172-32035"),docs:{description:{component:r("breadcrumb","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb"},e={parameters:{controls:{disable:!1},docs:{description:{story:r("breadcrumb","default")}}},render:c=>B({args:c})},m={parameters:{docs:{description:{story:r("breadcrumb","links")}}},render:()=>b`
    <syn-breadcrumb>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item href="#" target="_blank">Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},t={parameters:{docs:{description:{story:r("breadcrumb","prefix")}}},render:()=>b`
    <syn-breadcrumb>
      <syn-breadcrumb-item>
        <syn-icon slot="prefix" name="home"></syn-icon>
        Breadcrumb Item
      </syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    </syn-breadcrumb>
  `},s={parameters:{docs:{description:{story:r("breadcrumb","suffix")}}},render:()=>b`
    <syn-breadcrumb>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      <syn-breadcrumb-item>
        Breadcrumb Item
        <syn-icon slot="suffix" name="security"></syn-icon>
      </syn-breadcrumb-item>
    </syn-breadcrumb>
  `},a={parameters:{docs:{description:{story:r("breadcrumb","menu")}}},render:()=>b`
    <!-- This <div> is only here for positioning the dropdown in storybook -->
    <div style="position: relative;">
      <syn-breadcrumb>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>
          <syn-dropdown>
            <button slot="trigger" class="manual-trigger">
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
      .manual-trigger {
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
  `},n=d({Default:e,BreadcrumbLinks:m,Prefixes:t,Suffixes:s,WithDropdowns:a},250);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  render: args => generateTemplate({
    args
  })
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <button slot="trigger" class="manual-trigger">
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
      .manual-trigger {
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BreadcrumbLinks,
  Prefixes,
  Suffixes,
  WithDropdowns
}, 250)`,...n.parameters?.docs?.source}}};const J=["Default","BreadcrumbLinks","Prefixes","Suffixes","WithDropdowns","Screenshot"];export{m as BreadcrumbLinks,e as Default,t as Prefixes,n as Screenshot,s as Suffixes,a as WithDropdowns,J as __namedExportsOrder,G as default};
