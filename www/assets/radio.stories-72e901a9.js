import"./radio-49d6b8cf.js";import{x as d}from"./directive-helpers-a6c66f8a.js";import{u as l}from"./index-8ec6bb21.js";import{s as u,a as y,g as o,b as p}from"./component-5b49799f.js";import"./static-c19bae7e.js";import"./component.styles-92298694.js";import"./icon.component-d5c62d76.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:m,argTypes:b}=u("syn-radio"),{overrideArgs:f}=p("syn-radio"),{generateTemplate:v}=y("syn-radio"),T={args:f({name:"default",type:"slot",value:"Option"},m),argTypes:b,component:"radio",parameters:{docs:{description:{component:o("radio","default")}}},title:"Components/syn-radio"},s={parameters:{docs:{description:{story:o("radio","default")}}},render:r=>v({args:r})},t={parameters:{controls:{disable:!0},docs:{description:{story:o("radio","disabled")}}},render:()=>d`
    <syn-radio value="1" disabled>Option</syn-radio>`},a={parameters:{controls:{disable:!0},docs:{description:{story:o("radio","focus")}}},play:({canvasElement:r})=>{const e=r.querySelector("syn-radio");e&&e.focus()},render:()=>d`
    <syn-radio value="1">Option</syn-radio>`},n={parameters:{controls:{disable:!0},docs:{description:{story:o("radio","invalid")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-radio"),c=r.querySelector("syn-button");c&&e&&(await l.click(c),c.click())}catch(e){console.error("Error in play function:",e)}},render:()=>d`
  <form class="custom-validity">
    <syn-radio-group required>
      <syn-radio value="1">Option</syn-radio>
    </syn-radio-group>
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
  </style>`},i={parameters:{controls:{disable:!0},docs:{description:{story:o("radio","sizes")}}},render:()=>d`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>`};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
  // render: () => html\`
  // <syn-radio value="1" size="medium">Option</syn-radio>\`,
} as Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('radio', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const radio = ((canvasElement.querySelector('syn-radio') as unknown) as HTMLInputElement);
    if (radio) {
      radio.focus();
    }
  },
  render: () => html\`
    <syn-radio value="1">Option</syn-radio>\`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('radio', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    try {
      const radio = canvasElement.querySelector('syn-radio');
      const button = canvasElement.querySelector('syn-button');
      if (button && radio) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
  <form class="custom-validity">
    <syn-radio-group required>
      <syn-radio value="1">Option</syn-radio>
    </syn-radio-group>
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
  </style>\`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('radio', 'sizes')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>\`
}`,...i.parameters?.docs?.source}}};const w=["Default","Disabled","Focus","Invalid","Sizes"];export{s as Default,t as Disabled,a as Focus,n as Invalid,i as Sizes,w as __namedExportsOrder,T as default};
//# sourceMappingURL=radio.stories-72e901a9.js.map
