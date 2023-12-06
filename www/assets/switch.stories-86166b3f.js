import"./switch-3fd932d3.js";import{x as r}from"./directive-helpers-a6c66f8a.js";import{u as m}from"./index-8ec6bb21.js";import{s as p,a as u,g as e,b as h}from"./component-5b49799f.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./query-a4947b92.js";import"./if-defined-1099e361.js";import"./component.styles-63ef33a5.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:w,argTypes:b}=p("syn-switch"),{overrideArgs:f}=h("syn-switch"),{generateTemplate:S}=u("syn-switch"),A={args:f({name:"default",type:"slot",value:"Option"},w),argTypes:b,component:"switch",parameters:{docs:{description:e("switch","default")}},title:"Components/syn-switch"},n={parameters:{docs:{description:{story:e("switch","default")}}},render:t=>S({args:t})},o={parameters:{controls:{disable:!0},docs:{description:{story:e("switch","checked")}}},render:()=>r`<syn-switch checked>Checked</syn-switch>`},c={parameters:{controls:{disable:!0},docs:{description:{story:e("switch","disabled")}}},render:()=>r`<syn-switch disabled>Disabled</syn-switch>`},i={parameters:{controls:{disable:!0},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:t})=>{const s=t.querySelector("syn-switch");s&&s&&s.focus()},render:()=>r`<syn-switch>Focused</syn-switch>`},a={parameters:{controls:{disable:!0},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:t})=>{try{const s=t.querySelector("form"),y=s?.querySelector("syn-switch"),d=s?.querySelector("syn-button");d&&y&&(await m.click(d),d.click())}catch(s){console.error("Error in play function:",s)}},render:()=>r`
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
  `},l={parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0},docs:{description:{story:e("switch","sizes")}}},render:()=>r`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>`};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    controls: {
      disable: true
    },
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
}`,...l.parameters?.docs?.source}}};const L=["Default","Checked","Disabled","Focus","Invalid","Sizes"];export{o as Checked,n as Default,c as Disabled,i as Focus,a as Invalid,l as Sizes,L as __namedExportsOrder,A as default};
//# sourceMappingURL=switch.stories-86166b3f.js.map
