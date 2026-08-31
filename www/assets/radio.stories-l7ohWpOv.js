import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-BcPmD-1Q.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Bm6Rp1CP.js";import{n as p,t as m}from"./decorators-CGxFtcp0.js";import{t as h}from"./radio-group-CSQtf3BW.js";import{t as g}from"./radio-CJr76pVD.js";var _=t({Default:()=>w,Disabled:()=>D,Focus:()=>E,InitialValue:()=>T,Invalid:()=>A,Readonly:()=>O,Screenshot:()=>j,Sizes:()=>k,__namedExportsOrder:()=>M,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{g(),h(),o(),a(),m(),d(),r(),{userEvent:v}=__STORYBOOK_MODULE_TEST__,{args:y,argTypes:b}=c(`syn-radio`),{overrideArgs:x}=s(`syn-radio`),{generateTemplate:S}=u(`syn-radio`),C={args:x({name:`default`,type:`slot`,value:`Option`},y),argTypes:b,component:`syn-radio`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`radio`,`default`)}}},tags:[`Form`],title:`Components/syn-radio`},w={parameters:{controls:{disable:!1},docs:{description:{story:l(`radio`,`default`)}}},render:e=>S({args:e})},T={parameters:{docs:{description:{story:l(`radio`,`initialValue`)}}},render:()=>i`
    <syn-radio-group value="1">
      <syn-radio value="1" selected>Option</syn-radio>
    </syn-radio-group>
  `},E={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`radio`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-radio`);t&&t.focus()},render:()=>i`
    <syn-radio value="1">Option</syn-radio>`},D={parameters:{docs:{description:{story:l(`radio`,`disabled`)}}},render:()=>i`
    <syn-radio value="1" disabled>Option</syn-radio>`},O={parameters:{docs:{description:{story:l(`radio`,`readonly`)}}},render:()=>i`
    <syn-radio-group value="1">
      <syn-radio value="1" readonly>Read-only content</syn-radio>
    </syn-radio-group>
  `},k={parameters:{docs:{description:{story:l(`radio`,`sizes`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio value="1" size="small">Option</syn-radio>
      <syn-radio value="2" size="medium">Option</syn-radio>
      <syn-radio value="3" size="large">Option</syn-radio>
    </div>
  `},A={decorators:[p],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`radio`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-button`);n&&t&&(await v.click(n),n.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i`
    <syn-radio-group required>
      <syn-radio value="1">Invalid</syn-radio>
      <syn-radio value="">Invalid</syn-radio>
    </syn-radio-group>
  `},j=f({Default:w,InitialValue:T,Disabled:D,Readonly:O,Sizes:k}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
})`,...j.parameters?.docs?.source}}},M=[`Default`,`InitialValue`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`Screenshot`]})))()}export{N as n,_ as r,w as t};