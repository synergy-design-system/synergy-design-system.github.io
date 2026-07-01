import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-Berx97Z2.js";import{t as s}from"./button-BOCPVNim.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-D0wDPDrh.js";import{n as m,t as h}from"./decorators-Dx47dWvL.js";import{t as g}from"./radio-group-CwVhaeAm.js";import{t as _}from"./radio-button-CpOKsEst.js";import{t as v}from"./radio-DH0iIb7v.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R=e((()=>{g(),v(),_(),s(),n(),h(),f(),a(),r(),{userEvent:y}=__STORYBOOK_MODULE_TEST__,{args:b,argTypes:x}=l(`syn-radio-group`),{overrideArgs:S}=c(`syn-radio-group`),{generateTemplate:C}=d(`syn-radio-group`),w={args:b,argTypes:x,component:`syn-radio-group`,parameters:{chromatic:{modes:o},design:i(`41310-253349`),docs:{description:{component:u(`radio-group`,`default`)}}},tags:[`Form`],title:`Components/syn-radio-group`},T={args:S([{name:`label`,type:`attribute`,value:`This is a label`},{name:`default`,type:`slot`,value:`<syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>`}],b),parameters:{controls:{disable:!1},docs:{description:{story:u(`radio-group`,`default`)}}},render:e=>C({args:e})},E={parameters:{docs:{description:{story:u(`radio-group`,`labels`)}}},render:()=>t`
    <syn-radio-group label="This is a label">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},D={parameters:{docs:{description:{story:u(`radio-group`,`checked`)}}},render:()=>t`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},O={parameters:{docs:{description:{story:u(`radio-group`,`help-text`)}}},render:()=>t`
    <syn-radio-group label="This is a label" help-text="Choose the most appropriate option." name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},k={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio-group`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-radio-group`)?.focus()},render:()=>t`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},A={parameters:{docs:{description:{story:u(`radio-group`,`disabled`)}}},render:()=>t`
    <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" disabled>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},j={parameters:{docs:{description:{story:u(`radio-group`,`readonly`)}}},render:()=>t`
    <syn-radio-group label="This is a label" help-text="This is readonly" name="a" value="2">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" readonly>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},M={parameters:{docs:{description:{story:u(`radio-group`,`size`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio-group label="Small size" size="small">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Medium size" size="medium">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Large size" size="large">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
    </div>
  `},N={decorators:[m],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio-group`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-button`);t&&(await y.click(t),t.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>t`
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio value="1">Option 1</syn-radio>
      <syn-radio value="2">Option 2</syn-radio>
      <syn-radio value="3">Option 3</syn-radio>
    </syn-radio-group>
  `},P={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio-group`,`setCustomValidity`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-radio-group`),n=e.querySelector(`syn-button`),r=e.querySelector(`syn-radio[value="1"]`),i=e.querySelector(`syn-radio[value="3"]`),a=`You must choose the last option`;t?.setCustomValidity(a),r&&await y.click(r),i&&t?.value===`3`?t?.setCustomValidity(``):t?.setCustomValidity(a),n&&(await y.click(n),n.click(),t?.checkValidity()?console.log(`All fields are valid!`):console.error(`Form validation failed`))}catch(e){console.error(`Error in play function:`,e)}},render:()=>t`
    <form>
      <syn-radio-group label="Select an option" name="a" value="1">
        <syn-radio value="1">Not me</syn-radio>
        <syn-radio value="2">Me neither</syn-radio>
        <syn-radio value="3">Choose me</syn-radio>
      </syn-radio-group>
      <br />
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
  `},F={parameters:{docs:{description:{story:u(`radio-group`,`radio-buttons`)}}},render:()=>t`
    <syn-radio-group label="Select an option" value="Option 1" help-text="Select an option that makes you proud.">
      <syn-radio-button value="Option 1">Option 1</syn-radio-button>
      <syn-radio-button value="Option 2">Option 2</syn-radio-button>
      <syn-radio-button value="Option 3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},I=p({Default:T,Labels:E,Checked:D,HelpText:O,Disabled:A,Readonly:j,Sizes:M,RadioButtons:F},400),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: overrideArgs([{
    name: 'label',
    type: 'attribute',
    value: 'This is a label'
  }, {
    name: 'default',
    type: 'slot',
    value: \`
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
      \`.trim()
  }], args),
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'default')
      }
    }
  },
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="This is a label">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'checked')
      }
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="This is a label" help-text="Choose the most appropriate option." name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const elm = canvasElement.querySelector<SynRadioGroup>('syn-radio-group');
    elm?.focus();
  },
  render: () => html\`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" disabled>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'readonly')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="This is a label" help-text="This is readonly" name="a" value="2">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" readonly>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio-group label="Small size" size="small">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Medium size" size="medium">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Large size" size="large">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
    </div>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const button = canvasElement.querySelector('syn-button');
      if (button) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio value="1">Option 1</syn-radio>
      <syn-radio value="2">Option 2</syn-radio>
      <syn-radio value="3">Option 3</syn-radio>
    </syn-radio-group>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'setCustomValidity')
      }
    }
  },
  // eslint-disable-next-line complexity
  play: async ({
    canvasElement
  }) => {
    try {
      const radioGroup = canvasElement.querySelector('syn-radio-group');
      const button = canvasElement.querySelector('syn-button');
      const initiallySelectedOption = canvasElement.querySelector('syn-radio[value="1"]');
      const correctRadioOption = canvasElement.querySelector('syn-radio[value="3"]');
      const errorMessage = 'You must choose the last option';
      radioGroup?.setCustomValidity(errorMessage);
      if (initiallySelectedOption) {
        await userEvent.click(initiallySelectedOption);
      }
      if (correctRadioOption && radioGroup?.value === '3') {
        radioGroup?.setCustomValidity('');
      } else {
        radioGroup?.setCustomValidity(errorMessage);
      }
      if (button) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
        if (radioGroup?.checkValidity()) {
          // eslint-disable-next-line no-console
          console.log('All fields are valid!');
        } else {
          // eslint-disable-next-line no-console
          console.error('Form validation failed');
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form>
      <syn-radio-group label="Select an option" name="a" value="1">
        <syn-radio value="1">Not me</syn-radio>
        <syn-radio value="2">Me neither</syn-radio>
        <syn-radio value="3">Choose me</syn-radio>
      </syn-radio-group>
      <br />
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'radio-buttons')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" value="Option 1" help-text="Select an option that makes you proud.">
      <syn-radio-button value="Option 1">Option 1</syn-radio-button>
      <syn-radio-button value="Option 2">Option 2</syn-radio-button>
      <syn-radio-button value="Option 3">Option 3</syn-radio-button>
    </syn-radio-group>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Checked,
  HelpText,
  Disabled,
  Readonly,
  Sizes,
  RadioButtons
}, 400)`,...I.parameters?.docs?.source}}},L=[`Default`,`Labels`,`Checked`,`HelpText`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`CustomValidity`,`RadioButtons`,`Screenshot`]}));R();export{D as Checked,P as CustomValidity,T as Default,A as Disabled,k as Focus,O as HelpText,N as Invalid,E as Labels,F as RadioButtons,j as Readonly,I as Screenshot,M as Sizes,L as __namedExportsOrder,w as default,R as t};