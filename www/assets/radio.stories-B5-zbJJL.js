import"./radio-_cO_AWtu.js";import"./button-CAHNNbty.js";import{g as p,x as d}from"./iframe-7tHXQVNC.js";import{g as o,s as m,a as y,c as u,b as f}from"./component-vUv6yFaV.js";import"./class-map-vAWwgj24.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./property-D1h_DNUl.js";import"./state-C9P6TcHx.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-C7e_DUNf.js";import"./form-control.custom.styles-hWZPQpEV.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./icon.component-B89CvZOL.js";import"./if-defined-CCtHeFzx.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-DtXeJSQ8.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{userEvent:g}=__STORYBOOK_MODULE_TEST__,{args:b,argTypes:v}=m("syn-radio"),{overrideArgs:S}=y("syn-radio"),{generateTemplate:h}=u("syn-radio"),U={args:S({name:"default",type:"slot",value:"Option"},b),argTypes:v,component:"syn-radio",parameters:{design:p("1175-2494"),docs:{description:{component:o("radio","default")}}},tags:["Form"],title:"Components/syn-radio"},s={parameters:{controls:{disable:!1},docs:{description:{story:o("radio","default")}}},render:r=>h({args:r})},t={parameters:{docs:{description:{story:o("radio","disabled")}}},render:()=>d`
    <syn-radio value="1" disabled>Option</syn-radio>`},n={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","focus")}}},play:({canvasElement:r})=>{const e=r.querySelector("syn-radio");e&&e.focus()},render:()=>d`
    <syn-radio value="1">Option</syn-radio>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","invalid")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-radio"),l=r.querySelector("syn-button");l&&e&&(await g.click(l),l.click())}catch(e){console.error("Error in play function:",e)}},render:()=>d`
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
  </style>`},a={parameters:{docs:{description:{story:o("radio","sizes")}}},render:()=>d`
    <syn-radio value="1" size="small">Option</syn-radio>
    <syn-radio value="2" size="medium">Option</syn-radio>
    <syn-radio value="3" size="large">Option</syn-radio>`},c=f({Default:s,Disabled:t,Sizes:a});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
})`,...c.parameters?.docs?.source}}};const Y=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{s as Default,t as Disabled,n as Focus,i as Invalid,c as Screenshot,a as Sizes,Y as __namedExportsOrder,U as default};
