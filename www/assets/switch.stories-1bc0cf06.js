import"./switch-9733f3be.js";import{x as c}from"./directive-helpers-a6c66f8a.js";import{u as p}from"./index-8ec6bb21.js";import{s as h,a as u,g as s,b as w,c as S}from"./component-1fdd2bb4.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./query-a4947b92.js";import"./if-defined-1099e361.js";import"./component.styles-1c783f8d.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:f,argTypes:b}=h("syn-switch"),{overrideArgs:g}=S("syn-switch"),{generateTemplate:v}=u("syn-switch"),L={args:g({name:"default",type:"slot",value:"Option"},f),argTypes:b,component:"switch",parameters:{docs:{description:{component:s("switch","default")}}},title:"Components/syn-switch"},a={parameters:{controls:{disable:!1},docs:{description:{story:s("switch","default")}}},render:t=>v({args:t})},r={name:"Checked",parameters:{docs:{description:{story:s("switch","checked")}}},render:()=>c`<syn-switch checked>Checked</syn-switch>`},n={name:"Disabled",parameters:{docs:{description:{story:s("switch","disabled")}}},render:()=>c`<syn-switch disabled>Disabled</syn-switch>`},i={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s("switch","focus")}}},play:({canvasElement:t})=>{const e=t.querySelector("syn-switch");e&&e&&e.focus()},render:()=>c`<syn-switch>Focused</syn-switch>`},d={name:"Invalid",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s("switch","invalid")}}},play:async({canvasElement:t})=>{try{const e=t.querySelector("form"),y=e?.querySelector("syn-switch"),m=e?.querySelector("syn-button");m&&y&&(await p.click(m),m.click())}catch(e){console.error("Error in play function:",e)}},render:()=>c`
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
  <syn-switch size="large">Large</syn-switch>`},l=w([r,n,o]);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} as Story`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Checked',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"generateScreenshotStory([Checked, Disabled, Sizes])",...l.parameters?.docs?.source}}};const M=["Default","Checked","Disabled","Focus","Invalid","Sizes","Screenshot"];export{r as Checked,a as Default,n as Disabled,i as Focus,d as Invalid,l as Screenshot,o as Sizes,M as __namedExportsOrder,L as default};
//# sourceMappingURL=switch.stories-1bc0cf06.js.map
