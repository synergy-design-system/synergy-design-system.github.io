import"./radio-BIdgTFFl.js";import"./button-uzOkKr-M.js";import{g as u,C as y,x as i}from"./iframe-CHA1MzIk.js";import{g as e,s as g,a as v,c as f,b as S}from"./component-eiaVsgaO.js";import"./class-map-CRqJTAdA.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./synergy-element-pv_h4y-S.js";import"./icon.component-DYgg5wVc.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./form-control.custom.styles-B-sF6dOi.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./if-defined-BfuKNPpB.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-CR-B1yNh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";const{userEvent:b}=__STORYBOOK_MODULE_TEST__,{args:h,argTypes:O}=g("syn-radio"),{overrideArgs:E}=v("syn-radio"),{generateTemplate:D}=f("syn-radio"),U={args:E({name:"default",type:"slot",value:"Option"},h),argTypes:O,component:"syn-radio",parameters:{chromatic:{modes:y},design:u("1175-2494"),docs:{description:{component:e("radio","default")}}},tags:["Form","SICK2018","SICK2025"],title:"Components/syn-radio"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("radio","default")}}},render:o=>D({args:o})},s={parameters:{docs:{description:{story:e("radio","initialValue")}}},render:()=>i`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("radio","focus")}}},play:({canvasElement:o})=>{const r=o.querySelector("syn-radio");r&&r.focus()},render:()=>i`
    <syn-radio value="1">Option</syn-radio>`},t={parameters:{docs:{description:{story:e("radio","disabled")}}},render:()=>i`
    <syn-radio value="1" disabled>Option</syn-radio>`},n={parameters:{docs:{description:{story:e("radio","sizes")}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio value="1" size="small">Option</syn-radio>
      <syn-radio value="2" size="medium">Option</syn-radio>
      <syn-radio value="3" size="large">Option</syn-radio>
    </div>
  `},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("radio","invalid")}}},play:async({canvasElement:o})=>{try{const r=o.querySelector("form"),m=o.querySelector("syn-radio-group"),p=r?.querySelector("syn-button");p&&r&&m&&(m.setCustomValidity("Invalid"),await b.click(p),p.click(),document.activeElement?.blur())}catch(r){console.error("Error in play function:",r)}},render:()=>i`
    <form class="custom-validity">
      <syn-radio-group required value="2">
        <syn-radio value="1">Invalid</syn-radio>
        <syn-radio value="2">Invalid</syn-radio>
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
    </style>
  `},l=S({Default:a,InitialValue:s,Disabled:t,Sizes:n});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'initialValue')
      }
    }
  },
  render: () => html\`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  \`
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    docs: {
      description: {
        story: generateStoryDescription('radio', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio value="1" size="small">Option</syn-radio>
      <syn-radio value="2" size="medium">Option</syn-radio>
      <syn-radio value="3" size="large">Option</syn-radio>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      const form = canvasElement.querySelector('form');
      const radioGroup = canvasElement.querySelector<SynRadioGroup>('syn-radio-group');
      const button = form?.querySelector('syn-button');
      if (button && form && radioGroup) {
        radioGroup.setCustomValidity('Invalid');
        await userEvent.click(button);
        button.click();
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-radio-group required value="2">
        <syn-radio value="1">Invalid</syn-radio>
        <syn-radio value="2">Invalid</syn-radio>
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
    </style>
  \`
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InitialValue,
  Disabled,
  Sizes
})`,...l.parameters?.docs?.source}}};const Y=["Default","InitialValue","Focus","Disabled","Sizes","Invalid","Screenshot"];export{a as Default,t as Disabled,d as Focus,s as InitialValue,c as Invalid,l as Screenshot,n as Sizes,Y as __namedExportsOrder,U as default};
