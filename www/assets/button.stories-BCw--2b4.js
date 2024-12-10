import{s as g,a as f,g as S,b as t,c as x,d as h}from"./component-Ch2orRWV.js";import{k as n}from"./directive-helpers-CDT6qhDs.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-DKU_zBw8.js";import"./library-BZPO0bHa.js";import"./icon.component-BqaAhpVK.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DQ4LgkGh.js";const{args:z,argTypes:v}=g("syn-button"),{overrideArgs:D}=h("syn-button"),{generateTemplate:k}=f("syn-button"),_={args:D({name:"default",type:"slot",value:"Button"},z),argTypes:v,component:"syn-button",parameters:{design:S("1055-22957"),docs:{description:{component:t("button","default")}}},title:"Components/syn-button"},s={parameters:{controls:{disable:!1},docs:{description:{story:t("button","default")}}},render:d=>k({args:d})},e={parameters:{docs:{description:{story:t("button","variant")}}},render:()=>n`
  <syn-button variant="filled">Filled</syn-button>
  <syn-button variant="outline">Outline</syn-button>
  <syn-button variant="text">Text</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},o={parameters:{docs:{description:{story:t("button","size")}}},render:()=>n`
  <syn-button size="small">Small</syn-button>
  <syn-button size="medium">Medium</syn-button>
  <syn-button size="large">Large</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},b={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:t("button","focus")}}},play:({canvasElement:d})=>{const p=d.querySelector("syn-button");p&&p.focus()},render:()=>n`<syn-button>Default</syn-button>`},r={parameters:{docs:{description:{story:t("button","link")}}},render:()=>n`
  <syn-button href="https://example.com/">Link</syn-button>
  <syn-button href="https://example.com/" target="_blank">New Window</syn-button>
  <syn-button href="/assets/images/wordmark.svg" download="synergy.svg">Download</syn-button>
  <syn-button href="https://example.com/" disabled>Disabled</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},i={parameters:{docs:{description:{story:t("button","width")}}},render:()=>n`
  <syn-button size="small" style="width: 100%; margin-bottom: 1rem;">Small</syn-button>
  <syn-button size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</syn-button>
  <syn-button size="large" style="width: 100%;">Large</syn-button>`},a={parameters:{docs:{description:{story:t("button","icon-only")}}},render:()=>n`
    <syn-button size="small" variant="filled">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="small">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="small" variant="text">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>

    <br> 

    <syn-button size="medium" variant="filled">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="medium">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="medium" variant="text">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>

    <br> 

    <syn-button size="large" variant="filled">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="large">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="large" variant="text">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
  <style>
    syn-button {
      margin: 10px 10px 0 0;
    }
  </style>
  `},y={parameters:{docs:{description:{story:t("button","prefix-suffix")}}},render:()=>n`
  <syn-button size="small">
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-button>

  <syn-button size="small">
    <syn-icon slot="suffix" name="refresh"></syn-icon>
    Refresh
  </syn-button>

  <syn-button size="small">
    <syn-icon slot="prefix" name="link"></syn-icon>
    <syn-icon slot="suffix" name="launch"></syn-icon>
    Open
  </syn-button>

  <br/><br/>

  <syn-button>
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-button>

  <syn-button>
    <syn-icon slot="suffix" name="refresh"></syn-icon>
    Refresh
  </syn-button>

  <syn-button>
    <syn-icon slot="prefix" name="link"></syn-icon>
    <syn-icon slot="suffix" name="launch"></syn-icon>
    Open
  </syn-button>

  <br/><br/>

  <syn-button size="large">
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-button>

  <syn-button size="large">
    <syn-icon slot="suffix" name="refresh"></syn-icon>
    Refresh
  </syn-button>

  <syn-button size="large">
    <syn-icon slot="prefix" name="link"></syn-icon>
    <syn-icon slot="suffix" name="launch"></syn-icon>
    Open
  </syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},u={parameters:{docs:{description:{story:t("button","caret")}}},render:()=>n`
  <syn-button size="small" caret>Small</syn-button>
  <syn-button size="medium" caret>Medium</syn-button>
  <syn-button size="large" caret>Large</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},l={parameters:{docs:{description:{story:t("button","loading")}}},render:()=>n`
  <syn-button variant="filled" loading>Filled</syn-button>
  <syn-button variant="outline" loading>Outline</syn-button>
  <syn-button variant="text" loading>Text</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},c={parameters:{docs:{description:{story:t("button","disabled")}}},render:()=>n`
  <syn-button variant="filled" disabled>Filled</syn-button>
  <syn-button variant="outline" disabled>Outline</syn-button>
  <syn-button variant="text" disabled>Text</syn-button>`},m=x({Default:s,Variants:e,Sizes:o,LinkButtons:r,SettingACustomWidth:i,IconOnly:a,PrefixAndSuffixIcons:y,Caret:u,Loading:l,Disabled:c},280);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('button', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'variant')
      }
    }
  },
  render: () => html\`
  <syn-button variant="filled">Filled</syn-button>
  <syn-button variant="outline">Outline</syn-button>
  <syn-button variant="text">Text</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>\`
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'size')
      }
    }
  },
  render: () => html\`
  <syn-button size="small">Small</syn-button>
  <syn-button size="medium">Medium</syn-button>
  <syn-button size="large">Large</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>\`
}`,...o.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('button', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector('syn-button') as SynButton;
    if (button) {
      button.focus();
    }
  },
  render: () => html\`<syn-button>Default</syn-button>\`
}`,...b.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'link')
      }
    }
  },
  render: () => html\`
  <syn-button href="https://example.com/">Link</syn-button>
  <syn-button href="https://example.com/" target="_blank">New Window</syn-button>
  <syn-button href="/assets/images/wordmark.svg" download="synergy.svg">Download</syn-button>
  <syn-button href="https://example.com/" disabled>Disabled</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>\`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'width')
      }
    }
  },
  render: () => html\`
  <syn-button size="small" style="width: 100%; margin-bottom: 1rem;">Small</syn-button>
  <syn-button size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</syn-button>
  <syn-button size="large" style="width: 100%;">Large</syn-button>\`
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'icon-only')
      }
    }
  },
  render: () => html\`
    <syn-button size="small" variant="filled">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="small">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="small" variant="text">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>

    <br> 

    <syn-button size="medium" variant="filled">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="medium">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="medium" variant="text">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>

    <br> 

    <syn-button size="large" variant="filled">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="large">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
    <syn-button size="large" variant="text">
      <syn-icon name="settings" label="Settings"></syn-icon>
    </syn-button>
  <style>
    syn-button {
      margin: 10px 10px 0 0;
    }
  </style>
  \`
}`,...a.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
  <syn-button size="small">
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-button>

  <syn-button size="small">
    <syn-icon slot="suffix" name="refresh"></syn-icon>
    Refresh
  </syn-button>

  <syn-button size="small">
    <syn-icon slot="prefix" name="link"></syn-icon>
    <syn-icon slot="suffix" name="launch"></syn-icon>
    Open
  </syn-button>

  <br/><br/>

  <syn-button>
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-button>

  <syn-button>
    <syn-icon slot="suffix" name="refresh"></syn-icon>
    Refresh
  </syn-button>

  <syn-button>
    <syn-icon slot="prefix" name="link"></syn-icon>
    <syn-icon slot="suffix" name="launch"></syn-icon>
    Open
  </syn-button>

  <br/><br/>

  <syn-button size="large">
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-button>

  <syn-button size="large">
    <syn-icon slot="suffix" name="refresh"></syn-icon>
    Refresh
  </syn-button>

  <syn-button size="large">
    <syn-icon slot="prefix" name="link"></syn-icon>
    <syn-icon slot="suffix" name="launch"></syn-icon>
    Open
  </syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>\`
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'caret')
      }
    }
  },
  render: () => html\`
  <syn-button size="small" caret>Small</syn-button>
  <syn-button size="medium" caret>Medium</syn-button>
  <syn-button size="large" caret>Large</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>\`
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'loading')
      }
    }
  },
  render: () => html\`
  <syn-button variant="filled" loading>Filled</syn-button>
  <syn-button variant="outline" loading>Outline</syn-button>
  <syn-button variant="text" loading>Text</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>\`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'disabled')
      }
    }
  },
  render: () => html\`
  <syn-button variant="filled" disabled>Filled</syn-button>
  <syn-button variant="outline" disabled>Outline</syn-button>
  <syn-button variant="text" disabled>Text</syn-button>\`
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  Sizes,
  LinkButtons,
  SettingACustomWidth,
  IconOnly,
  PrefixAndSuffixIcons,
  Caret,
  Loading,
  Disabled
}, 280)`,...m.parameters?.docs?.source}}};const E=["Default","Variants","Sizes","Focus","LinkButtons","SettingACustomWidth","IconOnly","PrefixAndSuffixIcons","Caret","Loading","Disabled","Screenshot"];export{u as Caret,s as Default,c as Disabled,b as Focus,a as IconOnly,r as LinkButtons,l as Loading,y as PrefixAndSuffixIcons,m as Screenshot,i as SettingACustomWidth,o as Sizes,e as Variants,E as __namedExportsOrder,_ as default};