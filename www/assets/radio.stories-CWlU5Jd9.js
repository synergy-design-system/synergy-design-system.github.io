import{g as o,a as p,s as y,b as m,c as u,d as f}from"./component-C3JBB7VU.js";import{k as d}from"./directive-helpers-B-JxG5af.js";import{u as g}from"./index-DTU3eezp.js";import"./static-43aNRy8P.js";import"./ref-BlB4gB2S.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./icon-button-CIGXfYJ2.js";import"./library-UYMiFSYt.js";import"./icon.component-CspRTML7.js";import"./index-Vx7n56Jp.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-KePH8sLq.js";const{args:b,argTypes:v}=y("syn-radio"),{overrideArgs:S}=m("syn-radio"),{generateTemplate:h}=u("syn-radio"),_={args:S({name:"default",type:"slot",value:"Option"},b),argTypes:v,component:"syn-radio",parameters:{design:p("1175-2494"),docs:{description:{component:o("radio","default")}}},title:"Components/syn-radio"},s={parameters:{controls:{disable:!1},docs:{description:{story:o("radio","default")}}},render:e=>h({args:e})},a={parameters:{docs:{description:{story:o("radio","disabled")}}},render:()=>d`
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
    <syn-radio value="3" size="large">Option</syn-radio>`},c=f({Default:s,Disabled:a,Sizes:t});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
})`,...c.parameters?.docs?.source}}};const j=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{s as Default,a as Disabled,n as Focus,i as Invalid,c as Screenshot,t as Sizes,j as __namedExportsOrder,_ as default};
