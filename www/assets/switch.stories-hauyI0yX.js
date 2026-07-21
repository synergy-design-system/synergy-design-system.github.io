import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-C7vlOWDR.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-D_HfsTp7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-tvBHR92M.js";import{n as m,t as h}from"./decorators-BsIKVJEb.js";import{t as g}from"./switch-Dxoduosm.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{g(),s(),o(),h(),f(),r(),n(),{userEvent:_}=__STORYBOOK_MODULE_TEST__,{args:v,argTypes:y}=l(`syn-switch`),{overrideArgs:b}=c(`syn-switch`),{generateTemplate:x}=d(`syn-switch`),S={args:b({name:`default`,type:`slot`,value:`Option`},v),argTypes:y,component:`syn-switch`,parameters:{chromatic:{modes:i},design:t(`41310-259132`),docs:{description:{component:u(`switch`,`default`)}}},tags:[`Form`],title:`Components/syn-switch`},C={parameters:{controls:{disable:!1},docs:{description:{story:u(`switch`,`default`)}}},render:e=>x({args:e})},w={parameters:{docs:{description:{story:u(`switch`,`checked`)}}},render:()=>a`<syn-switch checked>Checked</syn-switch>`},T={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`switch`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-switch`);t&&t.focus()},render:()=>a`<syn-switch>Focused</syn-switch>`},E={parameters:{docs:{description:{story:u(`switch`,`disabled`)}}},render:()=>a`<syn-switch disabled>Disabled</syn-switch>`},D={parameters:{docs:{description:{story:u(`switch`,`readonly`)}}},render:()=>a`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column; align-items: flex-start;">
      <syn-switch readonly>Unchecked</syn-switch>
      <syn-switch checked readonly>Checked</syn-switch>
    </div>
  `},O={parameters:{docs:{description:{story:u(`switch`,`sizes`)}}},render:()=>a`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  `},k={parameters:{docs:{description:{story:u(`switch`,`help-text`)}}},render:()=>a`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  `},A={decorators:[m],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`switch`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-switch`),r=t?.querySelector(`syn-button`);r&&n&&(await _.click(r),r.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a`
    <syn-switch required>Option</syn-switch>
  `},j=p({Default:C,Checked:w,Disabled:E,Readonly:D,Sizes:O,HelpText:k},200),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'default')
      }
    }
  },
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const synSwitch = canvasElement.querySelector('syn-switch');
    if (synSwitch) {
      synSwitch.focus();
    }
  },
  render: () => html\`<syn-switch>Focused</syn-switch>\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column; align-items: flex-start;">
      <syn-switch readonly>Unchecked</syn-switch>
      <syn-switch checked readonly>Checked</syn-switch>
    </div>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'invalid')
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
      const synSwitch = form?.querySelector('syn-switch');
      const button = form?.querySelector('syn-button');
      if (button && synSwitch) {
        await userEvent.click(button);
        button.click();
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-switch required>Option</syn-switch>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Disabled,
  Readonly,
  Sizes,
  HelpText
}, 200)`,...j.parameters?.docs?.source}}},M=[`Default`,`Checked`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`HelpText`,`Invalid`,`Screenshot`]}));N();export{w as Checked,C as Default,E as Disabled,T as Focus,k as HelpText,A as Invalid,D as Readonly,j as Screenshot,O as Sizes,M as __namedExportsOrder,S as default,N as t};