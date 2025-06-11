import"./radio-7-0SluS8.js";import"./button-BtEYlTQw.js";import{x as d}from"./directive-helpers-DGrfjhaU.js";import{u as p}from"./index-CSCA1apM.js";import{g as o,a as m,s as y,b as u,d as f,c as g}from"./component-CRxE2rhG.js";import"./static-gmWA-8Kq.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./property-BGzwfL48.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-Do19GEOY.js";import"./form-control.custom.styles-DbPhNFMw.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./icon.component-CScz9CrR.js";import"./if-defined-B2ZFWIyt.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./spinner.component-oeFu-uyM.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CcHPuk5a.js";const{args:b,argTypes:v}=y("syn-radio"),{overrideArgs:S}=u("syn-radio"),{generateTemplate:h}=f("syn-radio"),Y={args:S({name:"default",type:"slot",value:"Option"},b),argTypes:v,component:"syn-radio",parameters:{design:m("1175-2494"),docs:{description:{component:o("radio","default")}}},title:"Components/syn-radio"},s={parameters:{controls:{disable:!1},docs:{description:{story:o("radio","default")}}},render:r=>h({args:r})},t={parameters:{docs:{description:{story:o("radio","disabled")}}},render:()=>d`
    <syn-radio value="1" disabled>Option</syn-radio>`},n={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","focus")}}},play:({canvasElement:r})=>{const e=r.querySelector("syn-radio");e&&e.focus()},render:()=>d`
    <syn-radio value="1">Option</syn-radio>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio","invalid")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-radio"),l=r.querySelector("syn-button");l&&e&&(await p.click(l),l.click())}catch(e){console.error("Error in play function:",e)}},render:()=>d`
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
    <syn-radio value="3" size="large">Option</syn-radio>`},c=g({Default:s,Disabled:t,Sizes:a});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} as Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
})`,...c.parameters?.docs?.source}}};const Z=["Default","Disabled","Focus","Invalid","Sizes","Screenshot"];export{s as Default,t as Disabled,n as Focus,i as Invalid,c as Screenshot,a as Sizes,Z as __namedExportsOrder,Y as default};
