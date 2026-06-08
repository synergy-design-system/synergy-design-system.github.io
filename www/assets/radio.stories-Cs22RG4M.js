import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,d as r,f as i,g as a,u as o}from"./iframe-Bb0l_wZA.js";import{t as s}from"./button-BfprR77y.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-1GQqMfLf.js";import{n as m,t as h}from"./radio-JWYg-TKH.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j=e((()=>{h(),m(),s(),n(),f(),r(),a(),{userEvent:g}=__STORYBOOK_MODULE_TEST__,{args:_,argTypes:v}=l(`syn-radio`),{overrideArgs:y}=c(`syn-radio`),{generateTemplate:b}=d(`syn-radio`),x={args:y({name:`default`,type:`slot`,value:`Option`},_),argTypes:v,component:`syn-radio`,parameters:{chromatic:{modes:i},design:o(`41310-252390`),docs:{description:{component:u(`radio`,`default`)}}},tags:[`Form`],title:`Components/syn-radio`},S={parameters:{controls:{disable:!1},docs:{description:{story:u(`radio`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:u(`radio`,`initialValue`)}}},render:()=>t`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  `},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-radio`);t&&t.focus()},render:()=>t`
    <syn-radio value="1">Option</syn-radio>`},T={parameters:{docs:{description:{story:u(`radio`,`disabled`)}}},render:()=>t`
    <syn-radio value="1" disabled>Option</syn-radio>`},E={parameters:{docs:{description:{story:u(`radio`,`readonly`)}}},render:()=>t`
    <syn-radio-group value="1">
      <syn-radio value="1" readonly>Read-only content</syn-radio>
    </syn-radio-group>
  `},D={parameters:{docs:{description:{story:u(`radio`,`sizes`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio value="1" size="small">Option</syn-radio>
      <syn-radio value="2" size="medium">Option</syn-radio>
      <syn-radio value="3" size="large">Option</syn-radio>
    </div>
  `},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=e.querySelector(`syn-radio-group`),r=t?.querySelector(`syn-button`);r&&t&&n&&(n.setCustomValidity(`Invalid`),await g.click(r),r.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>t`
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
  `},k=p({Default:S,InitialValue:C,Disabled:T,Readonly:E,Sizes:D}),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InitialValue,
  Disabled,
  Readonly,
  Sizes
})`,...k.parameters?.docs?.source}}},A=[`Default`,`InitialValue`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`Screenshot`]}));j();export{S as Default,T as Disabled,w as Focus,C as InitialValue,O as Invalid,E as Readonly,k as Screenshot,D as Sizes,A as __namedExportsOrder,x as default,j as t};