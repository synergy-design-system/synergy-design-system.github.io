import{s as p,a as y,g as m,b as o,c as u,d as f}from"./component-y1-tfEpO.js";import{k as d}from"./directive-helpers-CDT6qhDs.js";import{u as g}from"./index-B_f3VjvO.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-DVp6siB8.js";import"./library-BZPO0bHa.js";import"./icon.component-B5i8AmDz.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-C1IMDzMD.js";const{args:b,argTypes:v}=p("syn-radio"),{overrideArgs:S}=f("syn-radio"),{generateTemplate:h}=y("syn-radio"),M={args:S({name:"default",type:"slot",value:"Option"},b),argTypes:v,component:"syn-radio",parameters:{design:m("1175-2494"),docs:{description:{component:o("radio","default")}}},title:"Components/syn-radio"},s={parameters:{controls:{disable:!1},docs:{description:{story:o("radio","default")}}},render:e=>h({args:e})},a={parameters:{docs:{description:{story:o("radio","disabled")}}},render:()=>d`
    <syn-radio value="1" disabled>Option</syn-radio>`},n={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","focus")}}},play:({canvasElement:e})=>{const r=e.querySelector("syn-radio");r&&r.focus()},render:()=>d`
    <syn-radio value="1">Option</syn-radio>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","invalid")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("syn-radio"),l=e.querySelector("syn-button");l&&r&&(await g.click(l),l.click())}catch(r){console.error("Error in play function:",r)}},render:()=>d`
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
  </style>`},t={parameters:{docs:{description:{story:o("radio","sizes")}}},render:()=>d`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>`},c=u({Default:s,Disabled:a,Sizes:t});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} as Story`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Disabled,
  Sizes
})`,...c.parameters?.docs?.source}}};const _=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{s as Default,a as Disabled,n as Focus,i as Invalid,c as Screenshot,t as Sizes,_ as __namedExportsOrder,M as default};
