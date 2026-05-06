import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-CkMB4fy0.js";import{t as s}from"./button-B10EVkmP.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-Cg1b1wX7.js";import{t as m}from"./switch-DTKrdXzG.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{m(),s(),t(),f(),r(),a(),{userEvent:h}=__STORYBOOK_MODULE_TEST__,{args:g,argTypes:_}=l(`syn-switch`),{overrideArgs:v}=c(`syn-switch`),{generateTemplate:y}=d(`syn-switch`),b={args:v({name:`default`,type:`slot`,value:`Option`},g),argTypes:_,component:`syn-switch`,parameters:{chromatic:{modes:i},design:o(`41310-259132`),docs:{description:{component:u(`switch`,`default`)}}},tags:[`Form`],title:`Components/syn-switch`},x={parameters:{controls:{disable:!1},docs:{description:{story:u(`switch`,`default`)}}},render:e=>y({args:e})},S={parameters:{docs:{description:{story:u(`switch`,`checked`)}}},render:()=>n`<syn-switch checked>Checked</syn-switch>`},C={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`switch`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-switch`);t&&t.focus()},render:()=>n`<syn-switch>Focused</syn-switch>`},w={parameters:{docs:{description:{story:u(`switch`,`disabled`)}}},render:()=>n`<syn-switch disabled>Disabled</syn-switch>`},T={parameters:{docs:{description:{story:u(`switch`,`readonly`)}}},render:()=>n`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column; align-items: flex-start;">
      <syn-switch readonly>Unchecked</syn-switch>
      <syn-switch checked readonly>Checked</syn-switch>
    </div>
  `},E={parameters:{docs:{description:{story:u(`switch`,`sizes`)}}},render:()=>n`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  `},D={parameters:{docs:{description:{story:u(`switch`,`help-text`)}}},render:()=>n`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  `},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`switch`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-switch`),r=t?.querySelector(`syn-button`);r&&n&&(await h.click(r),r.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>n`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
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
  `},k=p({Default:x,Checked:S,Disabled:w,Readonly:T,Sizes:E,HelpText:D},200),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
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
  Checked,
  Disabled,
  Readonly,
  Sizes,
  HelpText
}, 200)`,...k.parameters?.docs?.source}}},A=[`Default`,`Checked`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`HelpText`,`Invalid`,`Screenshot`]}))();export{S as Checked,x as Default,w as Disabled,C as Focus,D as HelpText,O as Invalid,T as Readonly,k as Screenshot,E as Sizes,A as __namedExportsOrder,b as default};