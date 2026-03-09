import"./radio-DhiXpJOz.js";import"./button-C6KTTrBR.js";import{C as u,c as a,d as g}from"./iframe-OI-W47sE.js";import{g as r,a as v,s as f,b as S,c as b}from"./component-C7EW-_mv.js";import"./class-map-BXP5nj_A.js";import"./synergy-element-CDccwnU_.js";import"./icon.component-DZRgsOxP.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./form-control.styles-SUecHvVR.js";import"./button-group.component-BXGH_LvS.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./if-defined-CTCs6BF-.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-DNDvNCuE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";const{userEvent:h}=__STORYBOOK_MODULE_TEST__,{args:O,argTypes:E}=f("syn-radio"),{overrideArgs:D}=b("syn-radio"),{generateTemplate:x}=S("syn-radio"),J={args:D({name:"default",type:"slot",value:"Option"},O),argTypes:E,component:"syn-radio",parameters:{chromatic:{modes:u},design:g("1175-2494"),docs:{description:{component:r("radio","default")}}},tags:["Form"],title:"Components/syn-radio"},s={parameters:{controls:{disable:!1},docs:{description:{story:r("radio","default")}}},render:o=>x({args:o})},t={parameters:{docs:{description:{story:r("radio","initialValue")}}},render:()=>a`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  `},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("radio","focus")}}},play:({canvasElement:o})=>{const e=o.querySelector("syn-radio");e&&e.focus()},render:()=>a`
    <syn-radio value="1">Option</syn-radio>`},n={parameters:{docs:{description:{story:r("radio","disabled")}}},render:()=>a`
    <syn-radio value="1" disabled>Option</syn-radio>`},i={parameters:{docs:{description:{story:r("radio","readonly")}}},render:()=>a`
    <syn-radio-group value="1">
      <syn-radio value="1" readonly>Read-only content</syn-radio>
    </syn-radio-group>
  `},d={parameters:{docs:{description:{story:r("radio","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio value="1" size="small">Option</syn-radio>
      <syn-radio value="2" size="medium">Option</syn-radio>
      <syn-radio value="3" size="large">Option</syn-radio>
    </div>
  `},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("radio","invalid")}}},play:async({canvasElement:o})=>{try{const e=o.querySelector("form"),m=o.querySelector("syn-radio-group"),y=e?.querySelector("syn-button");y&&e&&m&&(m.setCustomValidity("Invalid"),await h.click(y),y.click(),document.activeElement?.blur())}catch(e){console.error("Error in play function:",e)}},render:()=>a`
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
  `},p=v({Default:s,InitialValue:t,Disabled:n,Readonly:i,Sizes:d});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        story: generateStoryDescription('radio', 'initialValue')
      }
    }
  },
  render: () => html\`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  \`
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'readonly')
      }
    }
  },
  render: () => html\`
    <syn-radio-group value="1">
      <syn-radio value="1" readonly>Read-only content</syn-radio>
    </syn-radio-group>
  \`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InitialValue,
  Disabled,
  Readonly,
  Sizes
})`,...p.parameters?.docs?.source}}};const N=["Default","InitialValue","Focus","Disabled","Readonly","Sizes","Invalid","Screenshot"];export{s as Default,n as Disabled,c as Focus,t as InitialValue,l as Invalid,i as Readonly,p as Screenshot,d as Sizes,N as __namedExportsOrder,J as default};
