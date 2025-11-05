import{g as o,C as i,x as b}from"./iframe-CNjcOboT.js";import"./breadcrumb-BoUrzUwc.js";import"./icon-DGVzpCFB.js";import"./dropdown-Bx3gOhd-.js";import"./menu-item-D4Xkuwwr.js";import{g as r,s as d,a as u,c as y,b as p}from"./component-CLgtm9Q8.js";import"./preload-helper-Ct5FWWRu.js";import"./class-map-BAdaFs8M.js";import"./slot-9EVoRGQc.js";import"./if-defined-CxEY91JF.js";import"./synergy-element-DcJoLspZ.js";import"./icon.component-kN9TCwag.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./dropdown.component-C7HCW1Uj.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-Doz71l1O.js";import"./menu.component-CaGSvYF8.js";import"./spinner.component-Cwg8q2di.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";const{args:l,argTypes:g}=d("syn-breadcrumb"),{overrideArgs:f}=u("syn-breadcrumb"),{generateTemplate:B}=y("syn-breadcrumb"),G={args:f([{name:"default",type:"slot",value:`
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      `}],l),argTypes:g,component:"syn-breadcrumb",parameters:{chromatic:{modes:i},design:o("15172-32035"),docs:{description:{component:r("breadcrumb","default")}}},tags:["Navigation","SICK2018","SICK2025"],title:"Components/syn-breadcrumb"},e={parameters:{controls:{disable:!1},docs:{description:{story:r("breadcrumb","default")}}},render:c=>B({args:c})},m={parameters:{docs:{description:{story:r("breadcrumb","links")}}},render:()=>b`
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
  `},n=p({Default:e,BreadcrumbLinks:m,Prefixes:t,Suffixes:s,WithDropdowns:a},250);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
