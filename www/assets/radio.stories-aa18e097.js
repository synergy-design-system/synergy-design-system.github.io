import"./preview-f79de5e2.js";import{x as c}from"./directive-helpers-b15f7890.js";import{u as p}from"./index-8ec6bb21.js";import{s as m,a as y,g as n,b as u,c as f}from"./component-4215867f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./icon.component-f339fa62.js";import"./icon-button-bf342a86.js";import"./icon-03abd6e8.js";import"./index-356e4a49.js";import"./chunk-HJCNT6QR-e16449d2.js";import"./chunk-FJPRWHXQ-684f3606.js";import"./_docs-3cda8374.js";const{args:b,argTypes:v}=m("syn-radio"),{overrideArgs:g}=f("syn-radio"),{generateTemplate:S}=y("syn-radio"),H={args:g({name:"default",type:"slot",value:"Option"},b),argTypes:v,component:"radio",parameters:{docs:{description:{component:n("radio","default")}}},title:"Components/syn-radio"},a={parameters:{controls:{disable:!1},docs:{description:{story:n("radio","default")}}},render:e=>S({args:e})},o={name:"Disabled",parameters:{docs:{description:{story:n("radio","disabled")}}},render:()=>c`
    <syn-radio value="1" disabled>Option</syn-radio>`},t={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("radio","focus")}}},play:({canvasElement:e})=>{const r=e.querySelector("syn-radio");r&&r.focus()},render:()=>c`
    <syn-radio value="1">Option</syn-radio>`},i={name:"Invalid",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("radio","invalid")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("syn-radio"),l=e.querySelector("syn-button");l&&r&&(await p.click(l),l.click())}catch(r){console.error("Error in play function:",r)}},render:()=>c`
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
  </style>`},s={name:"Sizes",parameters:{docs:{description:{story:n("radio","sizes")}}},render:()=>c`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>`},d=u([o,s]);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} as Story`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"generateScreenshotStory([Disabled, Sizes])",...d.parameters?.docs?.source}}};const L=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{a as Default,o as Disabled,t as Focus,i as Invalid,d as Screenshot,s as Sizes,L as __namedExportsOrder,H as default};
