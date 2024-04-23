import{g as m}from"./preview-CSzYYz-W.js";import{x as n}from"./lit-element-ZYWMe1i1.js";import{s as d,a as y,g as e,b as h,c as u}from"./component-BD35Kgrk.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-BiF6KxzB.js";import"./icon.component-BAAzxC2d.js";import"./directive-helpers-CkpR4LMI.js";import"./icon-BcesPW-x.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BhJsmGLR.js";const{args:g,argTypes:b}=d("syn-header"),{overrideArgs:v}=u("syn-header"),{generateTemplate:S}=y("syn-header"),E={args:v([{name:"default",type:"slot",value:"App Name"}],g),argTypes:b,component:"syn-header",parameters:{design:m("10540-8605"),docs:{description:{component:e("header","default")}}},title:"Components/syn-header"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("header","default")}}},render:p=>S({args:p})},a={parameters:{docs:{description:{story:e("header","label")}}},render:()=>n`
    <syn-header label="A new label"></syn-header>
  `},o={parameters:{docs:{description:{story:e("header","logo")}}},render:()=>n`
    <syn-header>
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-primary-500); display: block;"
        slot="logo"
      ></span>
      App Name
    </syn-header>
  `},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("header","focus")}}},play:({canvasElement:p})=>{p.querySelector("a")?.focus()},render:()=>n`
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
  `},s={parameters:{docs:{description:{story:e("header","options")}}},render:()=>n`
    <syn-header>
      <nav slot="meta-navigation">
        <syn-icon-button color="neutral" name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button color="neutral" name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button color="neutral" name="more_vert" label="More"></syn-icon-button>
      </nav>
      App Name
    </syn-header>
  `},t={parameters:{docs:{description:{story:e("header","navigation")}}},render:()=>n`
    <syn-header>
      <syn-prio-nav slot="navigation">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
        <syn-nav-item horizontal>Evaluations</syn-nav-item>
        <syn-nav-item horizontal>Deployments</syn-nav-item>
      </syn-prio-nav>
      App Name
    </syn-header>
  `},i={parameters:{docs:{description:{story:e("header","burger-menu")}}},render:()=>n`
    <syn-header show-burger-menu>
      App Name
    </syn-header>
  `},l=h({Default:r,Label:a,Logo:o,MetaNavigation:s,Navigation:t,BurgerMenu:i},{heightPx:200});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} as Story`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} as Story`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} as Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} as Story`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      App Name
    </syn-header>
  \`
} as Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'navigation')
      }
    }
  },
  render: () => html\`
    <syn-header>
      <syn-prio-nav slot="navigation">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
        <syn-nav-item horizontal>Evaluations</syn-nav-item>
        <syn-nav-item horizontal>Deployments</syn-nav-item>
      </syn-prio-nav>
      App Name
    </syn-header>
  \`
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'burger-menu')
      }
    }
  },
  render: () => html\`
    <syn-header show-burger-menu>
      App Name
    </syn-header>
  \`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  Logo,
  MetaNavigation,
  Navigation,
  BurgerMenu
}, {
  heightPx: 200
})`,...l.parameters?.docs?.source}}};const P=["Default","Label","Logo","Focus","MetaNavigation","Navigation","BurgerMenu","Screenshot"];export{i as BurgerMenu,r as Default,c as Focus,a as Label,o as Logo,s as MetaNavigation,t as Navigation,l as Screenshot,P as __namedExportsOrder,E as default};
