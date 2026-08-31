import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-BcPmD-1Q.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Bm6Rp1CP.js";import{n as p,t as m}from"./decorators-CGxFtcp0.js";import{t as h}from"./radio-group-CSQtf3BW.js";import{t as g}from"./radio-button-CgGg1z0l.js";import{t as _}from"./radio-CJr76pVD.js";var v=t({Checked:()=>O,CustomValidity:()=>F,Default:()=>E,Disabled:()=>j,Focus:()=>A,HelpText:()=>k,HorizontalLayout:()=>L,Invalid:()=>P,Labels:()=>D,RadioButtons:()=>I,Readonly:()=>M,Screenshot:()=>R,Sizes:()=>N,__namedExportsOrder:()=>z,default:()=>w}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{h(),_(),g(),o(),a(),m(),d(),r(),{userEvent:y}=__STORYBOOK_MODULE_TEST__,{args:b,argTypes:x}=c(`syn-radio-group`),{overrideArgs:S}=s(`syn-radio-group`),{generateTemplate:C}=u(`syn-radio-group`),w={args:b,argTypes:x,component:`syn-radio-group`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`radio-group`,`default`)}}},tags:[`Form`],title:`Components/syn-radio-group`},T=e=>`${e[0].toUpperCase()}${e.slice(1)}`,E={args:S([{name:`label`,type:`attribute`,value:`This is a label`},{name:`default`,type:`slot`,value:`<syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>`}],b),parameters:{controls:{disable:!1},docs:{description:{story:l(`radio-group`,`default`)}}},render:e=>C({args:e})},D={parameters:{docs:{description:{story:l(`radio-group`,`labels`)}}},render:()=>i`
    <syn-radio-group label="This is a label">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},O={parameters:{docs:{description:{story:l(`radio-group`,`checked`)}}},render:()=>i`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},k={parameters:{docs:{description:{story:l(`radio-group`,`help-text`)}}},render:()=>i`
    <syn-radio-group label="This is a label" help-text="Choose the most appropriate option." name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},A={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`radio-group`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-radio-group`)?.focus()},render:()=>i`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},j={parameters:{docs:{description:{story:l(`radio-group`,`disabled`)}}},render:()=>i`
    <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" disabled>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},M={parameters:{docs:{description:{story:l(`radio-group`,`readonly`)}}},render:()=>i`
    <syn-radio-group label="This is a label" help-text="This is readonly" name="a" value="2">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" readonly>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},N={parameters:{docs:{description:{story:l(`radio-group`,`size`)}}},render:()=>i`
    <div class="demo-radio-group-grid">
      ${[`small`,`medium`,`large`].map(e=>i`
        <div class="demo-radio-group-tile">
          <syn-radio-group
            label="${`${T(e)} size vertical`}"
            size="${e}"
            layout="vertical"
          >
            <syn-radio value="1">Option</syn-radio>
            <syn-radio value="2">Option</syn-radio>
          </syn-radio-group>
        </div>
        <div class="demo-radio-group-tile">
          <syn-radio-group
            label="${`${T(e)} size horizontal`}"
            size="${e}"
            layout="horizontal"
          >
            <syn-radio value="1">Option</syn-radio>
            <syn-radio value="2">Option</syn-radio>
          </syn-radio-group>
        </div>
      `)}
    </div>
    <style>
    .demo-radio-group-grid {
      column-gap: var(--syn-spacing-large);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }

    .demo-radio-group-tile {
      background: var(--syn-page-background);
      padding: var(--syn-spacing-large);
      box-sizing: border-box;
      height: 100%;
    }
    </style>
  `},P={decorators:[p],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`radio-group`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-button`);t&&(await y.click(t),t.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i`
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio value="1">Option 1</syn-radio>
      <syn-radio value="2">Option 2</syn-radio>
      <syn-radio value="3">Option 3</syn-radio>
    </syn-radio-group>
  `},F={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`radio-group`,`setCustomValidity`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-radio-group`),n=e.querySelector(`syn-button`),r=e.querySelector(`syn-radio[value="1"]`),i=e.querySelector(`syn-radio[value="3"]`),a=`You must choose the last option`;t?.setCustomValidity(a),r&&await y.click(r),i&&t?.value===`3`?t?.setCustomValidity(``):t?.setCustomValidity(a),n&&(await y.click(n),n.click(),t?.checkValidity()?console.log(`All fields are valid!`):console.error(`Form validation failed`))}catch(e){console.error(`Error in play function:`,e)}},render:()=>i`
    <form>
      <syn-radio-group label="Select an option" name="a" value="1">
        <syn-radio value="1">Not me</syn-radio>
        <syn-radio value="2">Me neither</syn-radio>
        <syn-radio value="3">Choose me</syn-radio>
      </syn-radio-group>
      <br />
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
  `},I={parameters:{docs:{description:{story:l(`radio-group`,`radio-buttons`)}}},render:()=>i`
    <syn-radio-group label="Select an option" value="Option 1" help-text="Select an option that makes you proud.">
      <syn-radio-button value="Option 1">Option 1</syn-radio-button>
      <syn-radio-button value="Option 2">Option 2</syn-radio-button>
      <syn-radio-button value="Option 3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},L={parameters:{docs:{description:{story:l(`radio-group`,`horizontal-layout`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio-group layout="horizontal" label="Small size" size="small">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group layout="horizontal" label="Medium size" size="medium">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group layout="horizontal" label="Large size" size="large">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
    </div>
  `},R=f({Default:E,Labels:D,Checked:O,HelpText:k,Disabled:j,Readonly:M,Sizes:N,RadioButtons:I,HorizontalLayout:L},400),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'size')
      }
    }
  },
  render: () => html\`
    <div class="demo-radio-group-grid">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
        <div class="demo-radio-group-tile">
          <syn-radio-group
            label="\${\`\${capitalizeFirstLetter(size)} size vertical\`}"
            size="\${size}"
            layout="vertical"
          >
            <syn-radio value="1">Option</syn-radio>
            <syn-radio value="2">Option</syn-radio>
          </syn-radio-group>
        </div>
        <div class="demo-radio-group-tile">
          <syn-radio-group
            label="\${\`\${capitalizeFirstLetter(size)} size horizontal\`}"
            size="\${size}"
            layout="horizontal"
          >
            <syn-radio value="1">Option</syn-radio>
            <syn-radio value="2">Option</syn-radio>
          </syn-radio-group>
        </div>
      \`)}
    </div>
    <style>
    .demo-radio-group-grid {
      column-gap: var(--syn-spacing-large);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }

    .demo-radio-group-tile {
      background: var(--syn-page-background);
      padding: var(--syn-spacing-large);
      box-sizing: border-box;
      height: 100%;
    }
    </style>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'horizontal-layout')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio-group layout="horizontal" label="Small size" size="small">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group layout="horizontal" label="Medium size" size="medium">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group layout="horizontal" label="Large size" size="large">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
    </div>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Checked,
  HelpText,
  Disabled,
  Readonly,
  Sizes,
  RadioButtons,
  HorizontalLayout
}, 400)`,...R.parameters?.docs?.source}}},z=[`Default`,`Labels`,`Checked`,`HelpText`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`CustomValidity`,`RadioButtons`,`HorizontalLayout`,`Screenshot`]})))()}export{B as n,v as r,E as t};