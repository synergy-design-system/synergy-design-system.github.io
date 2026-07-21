import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-DdzcclEm.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-BpLoAK9F.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-BjD7AuVi.js";import{n as m,t as h}from"./decorators-hI1Naz7G.js";import{t as g}from"./radio-group-CXM3p9zD.js";import{t as _}from"./radio-COD6QnFz.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{_(),g(),s(),o(),h(),f(),r(),n(),{userEvent:v}=__STORYBOOK_MODULE_TEST__,{args:y,argTypes:b}=l(`syn-radio`),{overrideArgs:x}=c(`syn-radio`),{generateTemplate:S}=d(`syn-radio`),C={args:x({name:`default`,type:`slot`,value:`Option`},y),argTypes:b,component:`syn-radio`,parameters:{chromatic:{modes:i},design:t(`41310-252390`),docs:{description:{component:u(`radio`,`default`)}}},tags:[`Form`],title:`Components/syn-radio`},w={parameters:{controls:{disable:!1},docs:{description:{story:u(`radio`,`default`)}}},render:e=>S({args:e})},T={parameters:{docs:{description:{story:u(`radio`,`initialValue`)}}},render:()=>a`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  `},E={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-radio`);t&&t.focus()},render:()=>a`
    <syn-radio value="1">Option</syn-radio>`},D={parameters:{docs:{description:{story:u(`radio`,`disabled`)}}},render:()=>a`
    <syn-radio value="1" disabled>Option</syn-radio>`},O={parameters:{docs:{description:{story:u(`radio`,`readonly`)}}},render:()=>a`
    <syn-radio-group value="1">
      <syn-radio value="1" readonly>Read-only content</syn-radio>
    </syn-radio-group>
  `},k={parameters:{docs:{description:{story:u(`radio`,`sizes`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio value="1" size="small">Option</syn-radio>
      <syn-radio value="2" size="medium">Option</syn-radio>
      <syn-radio value="3" size="large">Option</syn-radio>
    </div>
  `},A={decorators:[m],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-button`);n&&t&&(await v.click(n),n.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a`
    <syn-radio-group required>
      <syn-radio value="1">Invalid</syn-radio>
      <syn-radio value="">Invalid</syn-radio>
    </syn-radio-group>
  `},j=p({Default:w,InitialValue:T,Disabled:D,Readonly:O,Sizes:k}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio value="1" disabled>Option</syn-radio>\`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
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
      const button = form?.querySelector('syn-button');
      if (button && form) {
        await userEvent.click(button);
        button.click();
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-radio-group required>
      <syn-radio value="1">Invalid</syn-radio>
      <syn-radio value="">Invalid</syn-radio>
    </syn-radio-group>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InitialValue,
  Disabled,
  Readonly,
  Sizes
})`,...j.parameters?.docs?.source}}},M=[`Default`,`InitialValue`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`Screenshot`]}));N();export{w as Default,D as Disabled,E as Focus,T as InitialValue,A as Invalid,O as Readonly,j as Screenshot,k as Sizes,M as __namedExportsOrder,C as default,N as t};