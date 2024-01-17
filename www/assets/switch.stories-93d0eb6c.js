import"./preview-c856a228.js";import{x as c}from"./directive-helpers-b15f7890.js";import{u as p}from"./index-8ec6bb21.js";import{s as h,a as u,g as s,b as w,c as S}from"./component-37613803.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./icon.component-bf7bc8ad.js";import"./icon-button-0f7d7fef.js";import"./icon-64a1e782.js";import"./index-356e4a49.js";import"./chunk-HJCNT6QR-e16449d2.js";import"./chunk-FJPRWHXQ-684f3606.js";import"./_docs-e2c24145.js";const{args:f,argTypes:b}=h("syn-switch"),{overrideArgs:g}=S("syn-switch"),{generateTemplate:v}=u("syn-switch"),M={args:g({name:"default",type:"slot",value:"Option"},f),argTypes:b,component:"switch",parameters:{docs:{description:{component:s("switch","default")}}},title:"Components/syn-switch"},a={parameters:{controls:{disable:!1},docs:{description:{story:s("switch","default")}}},render:n=>v({args:n})},t={name:"Checked",parameters:{docs:{description:{story:s("switch","checked")}}},render:()=>c`<syn-switch checked>Checked</syn-switch>`},r={name:"Disabled",parameters:{docs:{description:{story:s("switch","disabled")}}},render:()=>c`<syn-switch disabled>Disabled</syn-switch>`},i={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s("switch","focus")}}},play:({canvasElement:n})=>{const e=n.querySelector("syn-switch");e&&e&&e.focus()},render:()=>c`<syn-switch>Focused</syn-switch>`},d={name:"Invalid",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s("switch","invalid")}}},play:async({canvasElement:n})=>{try{const e=n.querySelector("form"),y=e?.querySelector("syn-switch"),l=e?.querySelector("syn-button");l&&y&&(await p.click(l),l.click())}catch(e){console.error("Error in play function:",e)}},render:()=>c`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `},o={name:"Sizes",parameters:{docs:{description:{story:s("switch","sizes")}}},render:()=>c`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>`},m=w([t,r,o]);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Checked',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const synSwitch = (canvasElement.querySelector('syn-switch') as SynSwitch);
    if (synSwitch) {
      if (synSwitch) {
        synSwitch.focus();
      }
    }
  },
  render: () => html\`<syn-switch>Focused</syn-switch>\`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Invalid',
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    try {
      const form = canvasElement.querySelector('form');
      const synSwitch = (form?.querySelector('syn-switch') as SynSwitch);
      const button = (form?.querySelector('syn-button') as SynButton);
      if (button && synSwitch) {
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  \`
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'sizes')
      }
    }
  },
  render: () => html\`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>\`
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"generateScreenshotStory([Checked, Disabled, Sizes])",...m.parameters?.docs?.source}}};const H=["Default","Checked","Disabled","Focus","Invalid","Sizes","Screenshot"];export{t as Checked,a as Default,r as Disabled,i as Focus,d as Invalid,m as Screenshot,o as Sizes,H as __namedExportsOrder,M as default};
