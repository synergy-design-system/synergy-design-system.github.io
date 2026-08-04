import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-DKowTjrk.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-VFKvv9D6.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-yQeR3V9a.js";import{t as p}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as m}from"./checkbox-SkUV3xzM.js";import{n as h,t as g}from"./decorators-D4h4FA4e.js";var _=t({Checked:()=>T,CustomValidity:()=>N,Default:()=>w,Disabled:()=>k,Focus:()=>O,HelpText:()=>E,Indeterminate:()=>D,Invalid:()=>M,Readonly:()=>A,Screenshot:()=>P,Sizes:()=>j,__namedExportsOrder:()=>F,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{m(),o(),a(),g(),d(),r(),{userEvent:v}=__STORYBOOK_MODULE_TEST__,{argTypes:b}=c(`syn-checkbox`),{overrideArgs:x}=s(`syn-checkbox`),{generateTemplate:S}=u(`syn-checkbox`),C={args:x([{name:`default`,type:`slot`,value:`Checkbox`}]),argTypes:b,component:`syn-checkbox`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`checkbox`,`default`)}}},tags:[`Form`],title:`Components/syn-checkbox`},w={parameters:{controls:{disable:!1},docs:{description:{story:l(`checkbox`,`default`)}}},render:e=>S({args:e})},T={parameters:{docs:{description:{story:l(`checkbox`,`checked`)}}},render:()=>i`<syn-checkbox checked>Checked</syn-checkbox>`},E={parameters:{docs:{description:{story:l(`checkbox`,`help-text`)}}},render:()=>i`
    <syn-checkbox help-text="What should the user know about the checkbox?">Label</syn-checkbox>
  `},D={parameters:{docs:{description:{story:l(`checkbox`,`indeterminate`)}}},render:()=>i`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`checkbox`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-checkbox`);t&&t.focus()},render:()=>i`<syn-checkbox>Focused</syn-checkbox>`},k={parameters:{docs:{description:{story:l(`checkbox`,`disabled`)}}},render:()=>i`<syn-checkbox disabled>Disabled</syn-checkbox>`},A={parameters:{docs:{description:{story:l(`checkbox`,`readonly`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox name="a" value="a" readonly>Read only content</syn-checkbox>
      <syn-checkbox name="b" value="b" readonly indeterminate>Read only content (indet)</syn-checkbox>
      <syn-checkbox name="c" value="c" readonly checked>Read only content (checked)</syn-checkbox>
    </div>
  `},j={parameters:{docs:{description:{story:l(`checkbox`,`sizes`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},M={decorators:[h],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`checkbox`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t?.querySelector(`syn-checkbox`),r=t?.querySelector(`syn-checkbox:last-of-type`),i=t?.querySelector(`syn-button`);r&&r.setCustomValidity(`This checkbox is invalid`),i&&n&&(await v.click(i),i.click(),n.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i`
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
  `},N={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`checkbox`,`validity`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=e.querySelector(`syn-button`),r=e.querySelector(`syn-checkbox`);t&&n&&r&&(r.setCustomValidity(`Don't forget to check me!`),await v.click(n),n.click(),r.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i(y||=p([`
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
  `]))},P=f({Default:w,Checked:T,HelpText:E,Indeterminate:D,Disabled:k,Readonly:A,Sizes:j},200),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  HelpText,
  Indeterminate,
  Disabled,
  Readonly,
  Sizes
}, 200)`,...P.parameters?.docs?.source}}},F=[`Default`,`Checked`,`HelpText`,`Indeterminate`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`CustomValidity`,`Screenshot`]})))()}export{_ as n,I as r,w as t};