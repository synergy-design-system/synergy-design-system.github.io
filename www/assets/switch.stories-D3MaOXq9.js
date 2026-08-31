import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-BcPmD-1Q.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Bm6Rp1CP.js";import{n as p,t as m}from"./decorators-CGxFtcp0.js";import{t as h}from"./switch-sY891WaA.js";var g=t({Checked:()=>w,Default:()=>C,Disabled:()=>E,Focus:()=>T,HelpText:()=>k,Invalid:()=>A,Readonly:()=>D,Screenshot:()=>j,Sizes:()=>O,__namedExportsOrder:()=>M,default:()=>S}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{h(),o(),a(),m(),d(),r(),{userEvent:_}=__STORYBOOK_MODULE_TEST__,{args:v,argTypes:y}=c(`syn-switch`),{overrideArgs:b}=s(`syn-switch`),{generateTemplate:x}=u(`syn-switch`),S={args:b({name:`default`,type:`slot`,value:`Option`},v),argTypes:y,component:`syn-switch`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`switch`,`default`)}}},tags:[`Form`],title:`Components/syn-switch`},C={parameters:{controls:{disable:!1},docs:{description:{story:l(`switch`,`default`)}}},render:e=>x({args:e})},w={parameters:{docs:{description:{story:l(`switch`,`checked`)}}},render:()=>i`<syn-switch checked>Checked</syn-switch>`},T={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`switch`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-switch`);t&&t.focus()},render:()=>i`<syn-switch>Focused</syn-switch>`},E={parameters:{docs:{description:{story:l(`switch`,`disabled`)}}},render:()=>i`<syn-switch disabled>Disabled</syn-switch>`},D={parameters:{docs:{description:{story:l(`switch`,`readonly`)}}},render:()=>i`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column; align-items: flex-start;">
      <syn-switch readonly>Unchecked</syn-switch>
      <syn-switch checked readonly>Checked</syn-switch>
    </div>
  `},O={parameters:{docs:{description:{story:l(`switch`,`sizes`)}}},render:()=>i`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  `},k={parameters:{docs:{description:{story:l(`switch`,`help-text`)}}},render:()=>i`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  `},A={decorators:[p],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`switch`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-switch`),r=t?.querySelector(`syn-button`);r&&n&&(await _.click(r),r.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i`
    <syn-switch required>Option</syn-switch>
  `},j=f({Default:C,Checked:w,Disabled:E,Readonly:D,Sizes:O,HelpText:k},200),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}, 200)`,...j.parameters?.docs?.source}}},M=[`Default`,`Checked`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`HelpText`,`Invalid`,`Screenshot`]})))()}export{N as n,g as r,C as t};