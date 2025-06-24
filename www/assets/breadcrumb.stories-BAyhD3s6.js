import{g as c,x as b}from"./iframe-BlM2pOhP.js";import"./breadcrumb-J0vKcUV9.js";import"./icon-Db2mCSbn.js";import"./dropdown-B1BnFKJS.js";import"./menu-item-B157po8n.js";import{g as r,s as i,a as d,c as u,b as y}from"./component-D-soQZ9J.js";import"./class-map-DvND6SRC.js";import"./slot-9EVoRGQc.js";import"./if-defined-KMfhVUCN.js";import"./property-Bk5rnH1M.js";import"./state-CE03eurR.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-rDOucGNN.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./icon.component-kNBGlr9V.js";import"./dropdown.component-Bb398JBn.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-C3ovyAsS.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./menu.component-DtFJ2mK3.js";import"./ref-Cil3w5St.js";import"./spinner.component-aWG7cD3_.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:p,argTypes:l}=i("syn-breadcrumb"),{overrideArgs:g}=d("syn-breadcrumb"),{generateTemplate:f}=u("syn-breadcrumb"),Q={args:g([{name:"default",type:"slot",value:`
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
        <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
      `}],p),argTypes:l,component:"syn-breadcrumb",parameters:{design:c("15172-32035"),docs:{description:{component:r("breadcrumb","default")}}},tags:["Navigation"],title:"Components/syn-breadcrumb"},e={parameters:{controls:{disable:!1},docs:{description:{story:r("breadcrumb","default")}}},render:o=>f({args:o})},m={parameters:{docs:{description:{story:r("breadcrumb","links")}}},render:()=>b`
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
  `},n=y({Default:e,BreadcrumbLinks:m,Prefixes:t,Suffixes:s,WithDropdowns:a},250);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}, 250)`,...n.parameters?.docs?.source}}};const R=["Default","BreadcrumbLinks","Prefixes","Suffixes","WithDropdowns","Screenshot"];export{m as BreadcrumbLinks,e as Default,t as Prefixes,n as Screenshot,s as Suffixes,a as WithDropdowns,R as __namedExportsOrder,Q as default};
