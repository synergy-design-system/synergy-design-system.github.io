import"./preview-hG2T33hE.js";import{x as c}from"./directive-helpers-po9zzQFH.js";import{s as l,a as p,g as e,b as d,c as m}from"./component-gghu0Q_r.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-X2LvZYBL.js";import"./icon-button-YFpdcvXY.js";import"./icon-T0CKlryb.js";import"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import"./index-PPLHz8o0.js";import"./index-x3CuAjO7.js";const{args:y,argTypes:h}=l("syn-header"),{overrideArgs:u}=m("syn-header"),{generateTemplate:g}=p("syn-header"),T={args:u([{name:"default",type:"slot",value:"App Name"}],y),argTypes:h,component:"syn-header",parameters:{docs:{description:{component:e("header","default")}}},title:"Components/syn-header"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("header","default")}}},render:i=>g({args:i})},o={parameters:{docs:{description:{story:e("header","label")}}},render:()=>c`
    <syn-header label="A new label"></syn-header>
  `},r={parameters:{docs:{description:{story:e("header","logo")}}},render:()=>c`
    <syn-header>
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-primary-500); display: block;"
        slot="logo"
      ></span>
      App Name
    </syn-header>
  `},s={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("header","focus")}}},play:({canvasElement:i})=>{i.querySelector("a")?.focus()},render:()=>c`
    <style>
    .custom-header-link-with-logo {
      color: var(--syn-color-primary-600) !important;
    }
    .custom-header-link-with-logo syn-icon {
      display: block;
      width: auto;
      height: 32px;
    }
    </style>
    <syn-header>
      <a href="#" slot="logo" class="custom-header-link-with-logo">
        <syn-icon name="logo-color" library="system" label="Custom Logo with link"></syn-icon>
      </a>
      App Name
    </syn-header>
  `},a={parameters:{docs:{description:{story:e("header","options")}}},render:()=>c`
    <syn-header>
      <nav slot="meta-navigation">
        <syn-icon-button color="neutral" name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button color="neutral" name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button color="neutral" name="more_vert" label="More"></syn-icon-button>
      </nav>
      Meta Navigation
    </syn-header>
  `},t=d({Default:n,Label:o,Logo:r,MetaNavigation:a},{heightPx:150});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('header', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'label')
      }
    }
  },
  render: () => html\`
    <syn-header label="A new label"></syn-header>
  \`
} as Story`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'logo')
      }
    }
  },
  render: () => html\`
    <syn-header>
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-primary-500); display: block;"
        slot="logo"
      ></span>
      App Name
    </syn-header>
  \`
} as Story`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('header', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector('a');
    link?.focus();
  },
  render: () => html\`
    <style>
    .custom-header-link-with-logo {
      color: var(--syn-color-primary-600) !important;
    }
    .custom-header-link-with-logo syn-icon {
      display: block;
      width: auto;
      height: 32px;
    }
    </style>
    <syn-header>
      <a href="#" slot="logo" class="custom-header-link-with-logo">
        <syn-icon name="logo-color" library="system" label="Custom Logo with link"></syn-icon>
      </a>
      App Name
    </syn-header>
  \`
} as Story`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'options')
      }
    }
  },
  render: () => html\`
    <syn-header>
      <nav slot="meta-navigation">
        <syn-icon-button color="neutral" name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button color="neutral" name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button color="neutral" name="more_vert" label="More"></syn-icon-button>
      </nav>
      Meta Navigation
    </syn-header>
  \`
} as Story`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  Logo,
  MetaNavigation
}, {
  heightPx: 150
})`,...t.parameters?.docs?.source}}};const C=["Default","Label","Logo","Focus","MetaNavigation","Screenshot"];export{n as Default,s as Focus,o as Label,r as Logo,a as MetaNavigation,t as Screenshot,C as __namedExportsOrder,T as default};
