import"./preview-e052f3de.js";import{x as d}from"./directive-helpers-a6c66f8a.js";import{u as p}from"./index-866bbc1b.js";import{s as y,a as m,g as n,b as u,c as f}from"./component-eaa2f9de.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./icon.component-614f81b8.js";import"./icon-button-ba6ef6ae.js";import"./icon-fae232e6.js";import"./index-356e4a49.js";import"./chunk-HJCNT6QR-924d2471.js";import"./chunk-FJPRWHXQ-913159c4.js";import"./index-45466ee9.js";const{args:b,argTypes:g}=y("syn-radio"),{overrideArgs:v}=f("syn-radio"),{generateTemplate:S}=m("syn-radio"),I={args:v({name:"default",type:"slot",value:"Option"},b),argTypes:g,component:"radio",parameters:{docs:{description:{component:n("radio","default")}}},title:"Components/syn-radio"},o={parameters:{controls:{disable:!1},docs:{description:{story:n("radio","default")}}},render:e=>S({args:e})},s={parameters:{docs:{description:{story:n("radio","disabled")}}},render:()=>d`
    <syn-radio value="1" disabled>Option</syn-radio>`},t={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("radio","focus")}}},play:({canvasElement:e})=>{const r=e.querySelector("syn-radio");r&&r.focus()},render:()=>d`
    <syn-radio value="1">Option</syn-radio>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("radio","invalid")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("syn-radio"),l=e.querySelector("syn-button");l&&r&&(await p.click(l),l.click())}catch(r){console.error("Error in play function:",r)}},render:()=>d`
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
  </style>`},a={parameters:{docs:{description:{story:n("radio","sizes")}}},render:()=>d`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>`},c=u({Default:o,Disabled:s,Sizes:a});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} as Story`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Disabled,
  Sizes
})`,...c.parameters?.docs?.source}}};const L=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{o as Default,s as Disabled,t as Focus,i as Invalid,c as Screenshot,a as Sizes,L as __namedExportsOrder,I as default};
