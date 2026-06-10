import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,d as r,f as i,g as a,u as o}from"./iframe-BLAzlACc.js";import{t as s}from"./button-Ci1LHfIR.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-RhnClGwj.js";import{n as m,t as h}from"./taggedTemplateLiteral-pWa2IaV6.js";import{t as g}from"./checkbox-Bfy6eS8z.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{g(),s(),n(),f(),r(),a(),m(),{userEvent:_}=__STORYBOOK_MODULE_TEST__,{argTypes:y}=l(`syn-checkbox`),{overrideArgs:b}=c(`syn-checkbox`),{generateTemplate:x}=d(`syn-checkbox`),S={args:b([{name:`default`,type:`slot`,value:`Checkbox`}]),argTypes:y,component:`syn-checkbox`,parameters:{chromatic:{modes:i},design:o(`41310-257927`),docs:{description:{component:u(`checkbox`,`default`)}}},tags:[`Form`],title:`Components/syn-checkbox`},C={parameters:{controls:{disable:!1},docs:{description:{story:u(`checkbox`,`default`)}}},render:e=>x({args:e})},w={parameters:{docs:{description:{story:u(`checkbox`,`checked`)}}},render:()=>t`<syn-checkbox checked>Checked</syn-checkbox>`},T={parameters:{docs:{description:{story:u(`checkbox`,`help-text`)}}},render:()=>t`
    <syn-checkbox help-text="What should the user know about the checkbox?">Label</syn-checkbox>
  `},E={parameters:{docs:{description:{story:u(`checkbox`,`indeterminate`)}}},render:()=>t`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},D={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-checkbox`);t&&t.focus()},render:()=>t`<syn-checkbox>Focused</syn-checkbox>`},O={parameters:{docs:{description:{story:u(`checkbox`,`disabled`)}}},render:()=>t`<syn-checkbox disabled>Disabled</syn-checkbox>`},k={parameters:{docs:{description:{story:u(`checkbox`,`readonly`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox name="a" value="a" readonly>Read only content</syn-checkbox>
      <syn-checkbox name="b" value="b" readonly indeterminate>Read only content (indet)</syn-checkbox>
      <syn-checkbox name="c" value="c" readonly checked>Read only content (checked)</syn-checkbox>
    </div>
  `},A={parameters:{docs:{description:{story:u(`checkbox`,`sizes`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},j={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-checkbox`),r=t?.querySelector(`syn-checkbox:last-of-type`),i=t?.querySelector(`syn-button`);r&&r.setCustomValidity(`This checkbox is invalid`),i&&n&&(await _.click(i),i.click(),n.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>t`
    <form class="custom-validity">
      <div class="custom-validity">
        <syn-checkbox required>Invalid</syn-checkbox>
        <syn-checkbox required indeterminate>Invalid</syn-checkbox>
        <syn-checkbox required checked>Invalid</syn-checkbox>
      </div>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: var(--syn-spacing-large);
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `},M={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox`,`validity`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=e.querySelector(`syn-button`),r=e.querySelector(`syn-checkbox`);t&&n&&r&&(r.setCustomValidity(`Don't forget to check me!`),await _.click(n),n.click(),r.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>t(v||=h([`
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
  `]))},N=p({Default:C,Checked:w,HelpText:T,Indeterminate:E,Disabled:O,Readonly:k,Sizes:A},200),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    <form class="custom-validity">
      <div class="custom-validity">
        <syn-checkbox required>Invalid</syn-checkbox>
        <syn-checkbox required indeterminate>Invalid</syn-checkbox>
        <syn-checkbox required checked>Invalid</syn-checkbox>
      </div>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: var(--syn-spacing-large);
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  HelpText,
  Indeterminate,
  Disabled,
  Readonly,
  Sizes
}, 200)`,...N.parameters?.docs?.source}}},P=[`Default`,`Checked`,`HelpText`,`Indeterminate`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`CustomValidity`,`Screenshot`]}));F();export{w as Checked,M as CustomValidity,C as Default,O as Disabled,D as Focus,T as HelpText,E as Indeterminate,j as Invalid,k as Readonly,N as Screenshot,A as Sizes,P as __namedExportsOrder,S as default,F as t};