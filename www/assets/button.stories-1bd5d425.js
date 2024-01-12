import"./button-26d90f60.js";import{x as n}from"./directive-helpers-a6c66f8a.js";import{s as p,a as g,g as t,b as f,c as h}from"./component-e9e6c7ab.js";import"./static-c19bae7e.js";import"./form-daa16d55.js";import"./slot-4492e2ee.js";import"./if-defined-1099e361.js";import"./localize-d6e19d2a.js";import"./component.styles-30ab6d75.js";import"./query-f49a08ce.js";import"./icon.component-80114edf.js";import"./chunk-757FFUVQ-7dc151b2.js";import"./index-356e4a49.js";const{args:x,argTypes:S}=p("syn-button"),{overrideArgs:z}=h("syn-button"),{generateTemplate:v}=g("syn-button"),V={args:z({name:"default",type:"slot",value:"Button"},x),argTypes:S,component:"button",parameters:{docs:{description:{component:t("button","default")}}},title:"Components/syn-button"},l={parameters:{controls:{disable:!1},docs:{description:{story:t("button","default")}}},render:b=>v({args:b})},s={name:"Variants",parameters:{docs:{description:{story:t("button","variant")}}},render:()=>n`
  <syn-button variant="filled">Filled</syn-button>
  <syn-button variant="outline">Outline</syn-button>
  <syn-button variant="text">Text</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},e={name:"Sizes",parameters:{docs:{description:{story:t("button","size")}}},render:()=>n`
  <syn-button size="small">Small</syn-button>
  <syn-button size="medium">Medium</syn-button>
  <syn-button size="large">Large</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},c={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:t("button","focus")}}},play:({canvasElement:b})=>{const d=b.querySelector("syn-button");d&&d.focus()},render:()=>n`<syn-button>Default</syn-button>`},o={name:"Link buttons",parameters:{docs:{description:{story:t("button","link")}}},render:()=>n`
  <syn-button href="https://example.com/">Link</syn-button>
  <syn-button href="https://example.com/" target="_blank">New Window</syn-button>
  <syn-button href="/assets/images/wordmark.svg" download="synergy.svg">Download</syn-button>
  <syn-button href="https://example.com/" disabled>Disabled</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},r={name:"Setting a custom width",parameters:{docs:{description:{story:t("button","width")}}},render:()=>n`
  <syn-button size="small" style="width: 100%; margin-bottom: 1rem;">Small</syn-button>
  <syn-button size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</syn-button>
  <syn-button size="large" style="width: 100%;">Large</syn-button>`},a={name:"Prefix and suffix icons",parameters:{docs:{description:{story:t("button","prefix-suffix")}}},render:()=>n`
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
  </style>`},i={name:"Caret",parameters:{docs:{description:{story:t("button","caret")}}},render:()=>n`
  <syn-button size="small" caret>Small</syn-button>
  <syn-button size="medium" caret>Medium</syn-button>
  <syn-button size="large" caret>Large</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},u={name:"Loading",parameters:{docs:{description:{story:t("button","loading")}}},render:()=>n`
  <syn-button variant="filled" loading>Filled</syn-button>
  <syn-button variant="outline" loading>Outline</syn-button>
  <syn-button variant="text" loading>Text</syn-button>
  <style>
    syn-button {
      margin: 0.2rem;
    }
  </style>`},y={name:"Disabled",parameters:{docs:{description:{story:t("button","disabled")}}},render:()=>n`
  <syn-button variant="filled" disabled>Filled</syn-button>
  <syn-button variant="outline" disabled>Outline</syn-button>
  <syn-button variant="text" disabled>Text</syn-button>`},m=f([s,e,o,r,a,i,u,y],280);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} as Story`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Variants',
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
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
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
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
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
    const button = (canvasElement.querySelector('syn-button') as SynButton);
    if (button) {
      button.focus();
    }
  },
  render: () => html\`<syn-button>Default</syn-button>\`
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Link buttons',
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Setting a custom width',
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Prefix and suffix icons',
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Caret',
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"generateScreenshotStory([Variants, Sizes, LinkButtons, SettingACustomWidth, PrefixAndSuffixIcons, Caret, Loading, Disabled], 280)",...m.parameters?.docs?.source}}};const W=["Default","Variants","Sizes","Focus","LinkButtons","SettingACustomWidth","PrefixAndSuffixIcons","Caret","Loading","Disabled","Screenshot"];export{i as Caret,l as Default,y as Disabled,c as Focus,o as LinkButtons,u as Loading,a as PrefixAndSuffixIcons,m as Screenshot,r as SettingACustomWidth,e as Sizes,s as Variants,W as __namedExportsOrder,V as default};
//# sourceMappingURL=button.stories-1bd5d425.js.map
