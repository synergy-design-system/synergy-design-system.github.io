import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-CW-x0Dg3.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-uOW8jMcR.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-OsM0xRkW.js";import{n as m,t as h}from"./taggedTemplateLiteral-C9cDEsPD.js";import{t as g}from"./checkbox-o9Db8_7f.js";import{n as _,t as v}from"./decorators-BGT2CoeI.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{g(),s(),o(),v(),f(),r(),n(),m(),{userEvent:y}=__STORYBOOK_MODULE_TEST__,{argTypes:x}=l(`syn-checkbox`),{overrideArgs:S}=c(`syn-checkbox`),{generateTemplate:C}=d(`syn-checkbox`),w={args:S([{name:`default`,type:`slot`,value:`Checkbox`}]),argTypes:x,component:`syn-checkbox`,parameters:{chromatic:{modes:i},design:t(`41310-257927`),docs:{description:{component:u(`checkbox`,`default`)}}},tags:[`Form`],title:`Components/syn-checkbox`},T={parameters:{controls:{disable:!1},docs:{description:{story:u(`checkbox`,`default`)}}},render:e=>C({args:e})},E={parameters:{docs:{description:{story:u(`checkbox`,`checked`)}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},D={parameters:{docs:{description:{story:u(`checkbox`,`help-text`)}}},render:()=>a`
    <syn-checkbox help-text="What should the user know about the checkbox?">Label</syn-checkbox>
  `},O={parameters:{docs:{description:{story:u(`checkbox`,`indeterminate`)}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},k={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-checkbox`);t&&t.focus()},render:()=>a`<syn-checkbox>Focused</syn-checkbox>`},A={parameters:{docs:{description:{story:u(`checkbox`,`disabled`)}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},j={parameters:{docs:{description:{story:u(`checkbox`,`readonly`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox name="a" value="a" readonly>Read only content</syn-checkbox>
      <syn-checkbox name="b" value="b" readonly indeterminate>Read only content (indet)</syn-checkbox>
      <syn-checkbox name="c" value="c" readonly checked>Read only content (checked)</syn-checkbox>
    </div>
  `},M={parameters:{docs:{description:{story:u(`checkbox`,`sizes`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},N={decorators:[_],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-checkbox`),r=t?.querySelector(`syn-checkbox:last-of-type`),i=t?.querySelector(`syn-button`);r&&r.setCustomValidity(`This checkbox is invalid`),i&&n&&(await y.click(i),i.click(),n.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a`
    <div class="custom-validity">
      <syn-checkbox required>Invalid</syn-checkbox>
      <syn-checkbox required indeterminate>Invalid</syn-checkbox>
      <syn-checkbox required checked>Invalid</syn-checkbox>
    </div>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }
    </style>
  `},P={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox`,`validity`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=e.querySelector(`syn-button`),r=e.querySelector(`syn-checkbox`);t&&n&&r&&(r.setCustomValidity(`Don't forget to check me!`),await y.click(n),n.click(),r.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a(b||=h([`
    <form class="custom-validity">
      <syn-checkbox name="checked" value="on">Check me</syn-checkbox>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: inline-flex;
      flex-direction: column;
      gap: 1rem;
    }
    </style>

    <script type="module">
    const form = document.querySelector('.custom-validity');
    const checkbox = form.querySelector('syn-checkbox');
    const errorMessage = "Don't forget to check me!";

    // Update validity on change
    checkbox.addEventListener('syn-change', () => {
      checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
    });

    // Handle submit
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
    <\/script>
  `]))},F=p({Default:T,Checked:E,HelpText:D,Indeterminate:O,Disabled:A,Readonly:j,Sizes:M},200),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-checkbox help-text="What should the user know about the checkbox?">Label</syn-checkbox>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const synCheckbox = canvasElement.querySelector('syn-checkbox');
    if (synCheckbox) {
      synCheckbox.focus();
    }
  },
  render: () => html\`<syn-checkbox>Focused</syn-checkbox>\`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox name="a" value="a" readonly>Read only content</syn-checkbox>
      <syn-checkbox name="b" value="b" readonly indeterminate>Read only content (indet)</syn-checkbox>
      <syn-checkbox name="c" value="c" readonly checked>Read only content (checked)</syn-checkbox>
    </div>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
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
        story: generateStoryDescription('checkbox', 'invalid')
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
      const synCheckbox = form?.querySelector<SynCheckbox>('syn-checkbox');
      const lastCheckbox = form?.querySelector<SynCheckbox>('syn-checkbox:last-of-type');
      const button = form?.querySelector('syn-button');
      if (lastCheckbox) {
        lastCheckbox.setCustomValidity('This checkbox is invalid');
      }
      if (button && synCheckbox) {
        await userEvent.click(button);
        button.click();
        synCheckbox.blur();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <div class="custom-validity">
      <syn-checkbox required>Invalid</syn-checkbox>
      <syn-checkbox required indeterminate>Invalid</syn-checkbox>
      <syn-checkbox required checked>Invalid</syn-checkbox>
    </div>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }
    </style>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'validity')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const form = canvasElement.querySelector('form');
      const button = canvasElement.querySelector('syn-button');
      const checkbox = canvasElement.querySelector('syn-checkbox');
      const errorMessage = "Don't forget to check me!";
      if (form && button && checkbox) {
        checkbox.setCustomValidity(errorMessage);

        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
        checkbox.blur();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-checkbox name="checked" value="on">Check me</syn-checkbox>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: inline-flex;
      flex-direction: column;
      gap: 1rem;
    }
    </style>

    <script type="module">
    const form = document.querySelector('.custom-validity');
    const checkbox = form.querySelector('syn-checkbox');
    const errorMessage = "Don't forget to check me!";

    // Update validity on change
    checkbox.addEventListener('syn-change', () => {
      checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
    });

    // Handle submit
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  HelpText,
  Indeterminate,
  Disabled,
  Readonly,
  Sizes
}, 200)`,...F.parameters?.docs?.source}}},I=[`Default`,`Checked`,`HelpText`,`Indeterminate`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`CustomValidity`,`Screenshot`]}));L();export{E as Checked,P as CustomValidity,T as Default,A as Disabled,k as Focus,D as HelpText,O as Indeterminate,N as Invalid,j as Readonly,F as Screenshot,M as Sizes,I as __namedExportsOrder,w as default,L as t};