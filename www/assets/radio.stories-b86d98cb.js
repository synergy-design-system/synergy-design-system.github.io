import"./radio-b1b1f4a7.js";import{x as c}from"./directive-helpers-a6c66f8a.js";import{u as p}from"./index-8ec6bb21.js";import{s as m,a as y,g as o,b as u,c as f}from"./component-be2efc65.js";import"./static-c19bae7e.js";import"./component.styles-226283f4.js";import"./icon.component-e2a42406.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";import"./_docs-6508e6e2.js";const{args:b,argTypes:v}=m("syn-radio"),{overrideArgs:g}=f("syn-radio"),{generateTemplate:S}=y("syn-radio"),I={args:g({name:"default",type:"slot",value:"Option"},b),argTypes:v,component:"radio",parameters:{docs:{description:{component:o("radio","default")}}},title:"Components/syn-radio"},n={parameters:{controls:{disable:!1},docs:{description:{story:o("radio","default")}}},render:e=>S({args:e})},s={name:"Disabled",parameters:{docs:{description:{story:o("radio","disabled")}}},render:()=>c`
    <syn-radio value="1" disabled>Option</syn-radio>`},t={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","focus")}}},play:({canvasElement:e})=>{const r=e.querySelector("syn-radio");r&&r.focus()},render:()=>c`
    <syn-radio value="1">Option</syn-radio>`},i={name:"Invalid",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","invalid")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("syn-radio"),l=e.querySelector("syn-button");l&&r&&(await p.click(l),l.click())}catch(r){console.error("Error in play function:",r)}},render:()=>c`
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
  </style>`},a={name:"Sizes",parameters:{docs:{description:{story:o("radio","sizes")}}},render:()=>c`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>`},d=u([s,a]);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  parameters: {
    chromatic: {
      disableSnapshot: false
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
    const radio = canvasElement.querySelector('syn-radio');
    if (radio) {
      radio.focus();
    }
  },
  render: () => html\`
    <syn-radio value="1">Option</syn-radio>\`
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Invalid',
  parameters: {
    chromatic: {
      disableSnapshot: false
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"generateScreenshotStory([Disabled, Sizes])",...d.parameters?.docs?.source}}};const A=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{n as Default,s as Disabled,t as Focus,i as Invalid,d as Screenshot,a as Sizes,A as __namedExportsOrder,I as default};
//# sourceMappingURL=radio.stories-b86d98cb.js.map
