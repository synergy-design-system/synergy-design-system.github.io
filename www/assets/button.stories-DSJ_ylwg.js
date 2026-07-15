import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-CvD3XlUh.js";import{t as s}from"./button-C19qJtS0.js";import{t as c}from"./icon-BVWOaspj.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-Bq4ds4DM.js";import{n as h,t as g}from"./PaddingDecorator-DKDp5bXd.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{s(),c(),n(),p(),a(),g(),r(),{args:_,argTypes:v}=u(`syn-button`),{overrideArgs:y}=l(`syn-button`),{generateTemplate:b}=f(`syn-button`),x={args:y({name:`default`,type:`slot`,value:`Default`},_),argTypes:v,component:`syn-button`,parameters:{chromatic:{modes:o},design:i(`42076-167749`),docs:{description:{component:d(`button`,`default`)}}},tags:[`Form`,`Navigation`],title:`Components/syn-button`},S={parameters:{controls:{disable:!1},docs:{description:{story:d(`button`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:d(`button`,`variant`)}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled">Filled</syn-button>
      <syn-button variant="outline">Outline</syn-button>
      <syn-button variant="text">Text</syn-button>
    </div>
  `},w={parameters:{docs:{description:{story:d(`button`,`size`)}}},render:()=>t`
    <div style="align-items: anchor-center; display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button size="small">Small</syn-button>
      <syn-button size="medium">Medium</syn-button>
      <syn-button size="large">Large</syn-button>
    </div>
  `},T={decorators:[h()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`button`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-button`);t&&t.focus()},render:()=>t`<syn-button>Default</syn-button>`},E={parameters:{docs:{description:{story:d(`button`,`link`)}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button href="https://example.com/">Link</syn-button>
      <syn-button href="https://example.com/" target="_blank">New Window</syn-button>
      <syn-button href="/assets/images/wordmark.svg" download="synergy.svg">Download</syn-button>
      <syn-button href="https://example.com/" disabled>Disabled</syn-button>
    </div>
  `},D={parameters:{docs:{description:{story:d(`button`,`width`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-button size="small" style="width: 100%;">Small</syn-button>
      <syn-button size="medium" style="width: 100%;">Medium</syn-button>
      <syn-button size="large" style="width: 100%;">Large</syn-button>
    </div>
  `},O={parameters:{docs:{description:{story:d(`button`,`icon-only`)}}},render:()=>t`
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
  `},k={parameters:{docs:{description:{story:d(`button`,`prefix-suffix`)}}},render:()=>t`
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
  `},A={parameters:{docs:{description:{story:d(`button`,`caret`)}}},render:()=>t`
    <div style="align-items: anchor-center; display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button size="small" caret>Small</syn-button>
      <syn-button size="medium" caret>Medium</syn-button>
      <syn-button size="large" caret>Large</syn-button>
    </div>
  `},j={parameters:{docs:{description:{story:d(`button`,`loading`)}}},render:()=>t`
    <div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large);">
      <syn-button variant="filled" loading>Filled</syn-button>
      <syn-button variant="outline" loading>Outline</syn-button>
      <syn-button variant="text" loading>Text</syn-button>
    </div>
  `},M={parameters:{docs:{description:{story:d(`button`,`disabled`)}}},render:()=>t`
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
  `},N=m({Default:S,Variants:C,Sizes:w,LinkButtons:E,SettingACustomWidth:D,IconOnly:O,PrefixAndSuffixIcons:k,Caret:A,Loading:j,Disabled:M},280),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 280)`,...N.parameters?.docs?.source}}},P=[`Default`,`Variants`,`Sizes`,`Focus`,`LinkButtons`,`SettingACustomWidth`,`IconOnly`,`PrefixAndSuffixIcons`,`Caret`,`Loading`,`Disabled`,`Screenshot`]}));F();export{A as Caret,S as Default,M as Disabled,T as Focus,O as IconOnly,E as LinkButtons,j as Loading,k as PrefixAndSuffixIcons,N as Screenshot,D as SettingACustomWidth,w as Sizes,C as Variants,P as __namedExportsOrder,x as default,F as t};