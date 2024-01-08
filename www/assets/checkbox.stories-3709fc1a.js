import"./checkbox-a81b1cd5.js";import{x as a}from"./directive-helpers-a6c66f8a.js";import{u}from"./index-8ec6bb21.js";import{s as k,a as x,g as r,b as f,c as g}from"./component-1fdd2bb4.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./query-a4947b92.js";import"./if-defined-1099e361.js";import"./component.styles-1c783f8d.js";import"./icon.component-e33c164c.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";var p=Object.freeze,v=Object.defineProperty,S=(e,t)=>p(v(e,"raw",{value:p(t||e.slice())})),b;const{argTypes:D}=k("syn-checkbox"),{overrideArgs:C}=g("syn-checkbox"),{generateTemplate:z}=x("syn-checkbox"),P={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,parameters:{docs:{description:{component:r("checkbox","default")}}},title:"Components/syn-checkbox"},i={parameters:{controls:{disable:!1},docs:{description:{story:r("checkbox","default")}}},render:e=>z({args:e})},o={name:"Checked",parameters:{docs:{description:{story:r("checkbox","checked")}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},s={name:"Indeterminate",parameters:{docs:{description:{story:r("checkbox","indeterminate")}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},c={name:"Disabled",parameters:{docs:{description:{story:r("checkbox","disabled")}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},n={name:"Sizes",parameters:{docs:{description:{story:r("checkbox","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={name:"Custom validity",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const t=e.querySelector("form"),l=e.querySelector("syn-button"),y=e.querySelector("syn-checkbox"),h="Don't forget to check me!";t&&l&&y&&(y.setCustomValidity(h),await u.click(l),l.click())}catch(t){console.error("Error in play function:",t)}},render:()=>a(b||(b=S([`
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
  `])))},m=f([o,s,c,n]);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} as Story`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Checked',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Indeterminate',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"generateScreenshotStory([Checked, Indeterminate, Disabled, Sizes])",...m.parameters?.docs?.source}}};const U=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{o as Checked,d as CustomValidity,i as Default,c as Disabled,s as Indeterminate,m as Screenshot,n as Sizes,U as __namedExportsOrder,P as default};
//# sourceMappingURL=checkbox.stories-3709fc1a.js.map
