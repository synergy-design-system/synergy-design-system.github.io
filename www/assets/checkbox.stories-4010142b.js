import"./preview-f79de5e2.js";import{x as a}from"./directive-helpers-b15f7890.js";import{u}from"./index-8ec6bb21.js";import{s as k,a as x,g as n,b as f,c as g}from"./component-4215867f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./icon.component-f339fa62.js";import"./icon-button-bf342a86.js";import"./icon-03abd6e8.js";import"./index-356e4a49.js";import"./chunk-HJCNT6QR-e16449d2.js";import"./chunk-FJPRWHXQ-684f3606.js";import"./_docs-3cda8374.js";var p=Object.freeze,v=Object.defineProperty,S=(e,r)=>p(v(e,"raw",{value:p(r||e.slice())})),b;const{argTypes:D}=k("syn-checkbox"),{overrideArgs:C}=g("syn-checkbox"),{generateTemplate:z}=x("syn-checkbox"),P={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,parameters:{docs:{description:{component:n("checkbox","default")}}},title:"Components/syn-checkbox"},i={parameters:{controls:{disable:!1},docs:{description:{story:n("checkbox","default")}}},render:e=>z({args:e})},t={name:"Checked",parameters:{docs:{description:{story:n("checkbox","checked")}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},o={name:"Indeterminate",parameters:{docs:{description:{story:n("checkbox","indeterminate")}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},s={name:"Disabled",parameters:{docs:{description:{story:n("checkbox","disabled")}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},c={name:"Sizes",parameters:{docs:{description:{story:n("checkbox","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={name:"Custom validity",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("form"),l=e.querySelector("syn-button"),y=e.querySelector("syn-checkbox"),h="Don't forget to check me!";r&&l&&y&&(y.setCustomValidity(h),await u.click(l),l.click())}catch(r){console.error("Error in play function:",r)}},render:()=>a(b||(b=S([`
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
  `])))},m=f([t,o,s,c]);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Checked',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Indeterminate',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Custom validity',
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
      const button = (canvasElement.querySelector('syn-button') as SynButton);
      const checkbox = (canvasElement.querySelector('syn-checkbox') as SynCheckbox);
      const errorMessage = "Don't forget to check me!";
      if (form && button && checkbox) {
        checkbox.setCustomValidity(errorMessage);

        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"generateScreenshotStory([Checked, Indeterminate, Disabled, Sizes])",...m.parameters?.docs?.source}}};const U=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{t as Checked,d as CustomValidity,i as Default,s as Disabled,o as Indeterminate,m as Screenshot,c as Sizes,U as __namedExportsOrder,P as default};
