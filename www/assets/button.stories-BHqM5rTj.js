import"./button-Blu0oPhu.js";import"./icon-Dvb_e3A7.js";import{g,C as f,x as t}from"./iframe-CvU34O_B.js";import{g as n,s as v,a as x,c as S,b as h}from"./component--gCMxXrB.js";import{p as w}from"./PaddingDecorator-BmZol4iC.js";import"./class-map-CVI9ScdU.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-5E7M7M3a.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-B1F-Pf22.js";import"./icon.component-BGlPOzcQ.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./spinner.component-wvmau_pc.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const{args:z,argTypes:D}=v("syn-button"),{overrideArgs:k}=x("syn-button"),{generateTemplate:O}=S("syn-button"),Q={args:k({name:"default",type:"slot",value:"Default"},z),argTypes:D,component:"syn-button",parameters:{chromatic:{modes:f},design:g("1055-22957"),docs:{description:{component:n("button","default")}}},tags:["Form","Navigation"],title:"Components/syn-button"},s={parameters:{controls:{disable:!1},docs:{description:{story:n("button","default")}}},render:m=>O({args:m})},e={parameters:{docs:{description:{story:n("button","variant")}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled">Filled</syn-button>
      <syn-button variant="outline">Outline</syn-button>
      <syn-button variant="text">Text</syn-button>
    </div>
  `},o={parameters:{docs:{description:{story:n("button","size")}}},render:()=>t`
    <div style="align-items: anchor-center; display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button size="small">Small</syn-button>
      <syn-button size="medium">Medium</syn-button>
      <syn-button size="large">Large</syn-button>
    </div>
  `},u={decorators:[w()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("button","focus")}}},play:({canvasElement:m})=>{const b=m.querySelector("syn-button");b&&b.focus()},render:()=>t`<syn-button>Default</syn-button>`},i={parameters:{docs:{description:{story:n("button","link")}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button href="https://example.com/">Link</syn-button>
      <syn-button href="https://example.com/" target="_blank">New Window</syn-button>
      <syn-button href="/assets/images/wordmark.svg" download="synergy.svg">Download</syn-button>
      <syn-button href="https://example.com/" disabled>Disabled</syn-button>
    </div>
  `},a={parameters:{docs:{description:{story:n("button","width")}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-button size="small" style="width: 100%;">Small</syn-button>
      <syn-button size="medium" style="width: 100%;">Medium</syn-button>
      <syn-button size="large" style="width: 100%;">Large</syn-button>
    </div>
  `},r={parameters:{docs:{description:{story:n("button","icon-only")}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large); margin-bottom: var(--syn-spacing-small);">
      <syn-button size="small" variant="filled">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="small">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="small" variant="text">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
    </div>

    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large); margin-bottom: var(--syn-spacing-small);">
      <syn-button size="medium" variant="filled">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="medium">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="medium" variant="text">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
    </div>

    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large); margin-bottom: var(--syn-spacing-small);">
      <syn-button size="large" variant="filled">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="large">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="large" variant="text">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
    </div>
  `},l={parameters:{docs:{description:{story:n("button","prefix-suffix")}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
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
      </div>

      <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
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
      </div>

      <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
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
      </div>
    </div>
  `},y={parameters:{docs:{description:{story:n("button","caret")}}},render:()=>t`
    <div style="align-items: anchor-center; display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button size="small" caret>Small</syn-button>
      <syn-button size="medium" caret>Medium</syn-button>
      <syn-button size="large" caret>Large</syn-button>
    </div>
  `},c={parameters:{docs:{description:{story:n("button","loading")}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled" loading>Filled</syn-button>
      <syn-button variant="outline" loading>Outline</syn-button>
      <syn-button variant="text" loading>Text</syn-button>
    </div>
  `},d={parameters:{docs:{description:{story:n("button","disabled")}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled" disabled>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Button
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
      </syn-button>

      <syn-button variant="outline" disabled>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Button
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
      </syn-button>

      <syn-button variant="text" disabled>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Button
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
      </syn-button>
    </div>
  `},p=h({Default:s,Variants:e,Sizes:o,LinkButtons:i,SettingACustomWidth:a,IconOnly:r,PrefixAndSuffixIcons:l,Caret:y,Loading:c,Disabled:d},280);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: args => generateTemplate({
    args
  })
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'variant')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled">Filled</syn-button>
      <syn-button variant="outline">Outline</syn-button>
      <syn-button variant="text">Text</syn-button>
    </div>
  \`
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'size')
      }
    }
  },
  render: () => html\`
    <div style="align-items: anchor-center; display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button size="small">Small</syn-button>
      <syn-button size="medium">Medium</syn-button>
      <syn-button size="large">Large</syn-button>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
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
    const button = canvasElement.querySelector<SynButton>('syn-button');
    if (button) {
      button.focus();
    }
  },
  render: () => html\`<syn-button>Default</syn-button>\`
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'link')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button href="https://example.com/">Link</syn-button>
      <syn-button href="https://example.com/" target="_blank">New Window</syn-button>
      <syn-button href="/assets/images/wordmark.svg" download="synergy.svg">Download</syn-button>
      <syn-button href="https://example.com/" disabled>Disabled</syn-button>
    </div>
  \`
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'width')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-button size="small" style="width: 100%;">Small</syn-button>
      <syn-button size="medium" style="width: 100%;">Medium</syn-button>
      <syn-button size="large" style="width: 100%;">Large</syn-button>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'icon-only')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large); margin-bottom: var(--syn-spacing-small);">
      <syn-button size="small" variant="filled">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="small">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="small" variant="text">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
    </div>

    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large); margin-bottom: var(--syn-spacing-small);">
      <syn-button size="medium" variant="filled">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="medium">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="medium" variant="text">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
    </div>

    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large); margin-bottom: var(--syn-spacing-small);">
      <syn-button size="large" variant="filled">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="large">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
      <syn-button size="large" variant="text">
        <syn-icon name="settings" label="Settings"></syn-icon>
      </syn-button>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
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
      </div>

      <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
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
      </div>

      <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
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
      </div>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'caret')
      }
    }
  },
  render: () => html\`
    <div style="align-items: anchor-center; display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button size="small" caret>Small</syn-button>
      <syn-button size="medium" caret>Medium</syn-button>
      <syn-button size="large" caret>Large</syn-button>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'loading')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled" loading>Filled</syn-button>
      <syn-button variant="outline" loading>Outline</syn-button>
      <syn-button variant="text" loading>Text</syn-button>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button', 'disabled')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled" disabled>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Button
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
      </syn-button>

      <syn-button variant="outline" disabled>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Button
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
      </syn-button>

      <syn-button variant="text" disabled>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Button
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
      </syn-button>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 280)`,...p.parameters?.docs?.source}}};const U=["Default","Variants","Sizes","Focus","LinkButtons","SettingACustomWidth","IconOnly","PrefixAndSuffixIcons","Caret","Loading","Disabled","Screenshot"];export{y as Caret,s as Default,d as Disabled,u as Focus,r as IconOnly,i as LinkButtons,c as Loading,l as PrefixAndSuffixIcons,p as Screenshot,a as SettingACustomWidth,o as Sizes,e as Variants,U as __namedExportsOrder,Q as default};
