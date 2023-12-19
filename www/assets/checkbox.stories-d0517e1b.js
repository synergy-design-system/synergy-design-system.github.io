import"./checkbox-a81b1cd5.js";import{x as o}from"./directive-helpers-a6c66f8a.js";import{u}from"./index-8ec6bb21.js";import{s as k,a as h,g as r,b as x}from"./component-5b49799f.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./query-a4947b92.js";import"./if-defined-1099e361.js";import"./component.styles-1c783f8d.js";import"./icon.component-e33c164c.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";var y=Object.freeze,f=Object.defineProperty,g=(e,t)=>y(f(e,"raw",{value:y(t||e.slice())})),b;const{argTypes:v}=k("syn-checkbox"),{overrideArgs:S}=x("syn-checkbox"),{generateTemplate:D}=h("syn-checkbox"),O={args:S([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:v,parameters:{docs:{description:{component:r("checkbox","default")}}},title:"Components/syn-checkbox"},s={parameters:{docs:{description:{story:r("checkbox","default")}}},render:e=>D({args:e})},c={parameters:{controls:{disable:!0},docs:{description:{story:r("checkbox","checked")}}},render:()=>o`<syn-checkbox checked>Checked</syn-checkbox>`},n={parameters:{controls:{disable:!0},docs:{description:{story:r("checkbox","indeterminate")}}},render:()=>o`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},a={parameters:{controls:{disable:!0},docs:{description:{story:r("checkbox","disabled")}}},render:()=>o`<syn-checkbox disabled>Disabled</syn-checkbox>`},i={parameters:{controls:{disable:!0},docs:{description:{story:r("checkbox","sizes")}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={parameters:{controls:{disable:!0},docs:{description:{story:r("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const t=e.querySelector("form"),l=e.querySelector("syn-button"),m=e.querySelector("syn-checkbox"),p="Don't forget to check me!";t&&l&&m&&(m.setCustomValidity(p),await u.click(l),l.click())}catch(t){console.error("Error in play function:",t)}},render:()=>o(b||(b=g([`
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
  `])))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
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
}`,...d.parameters?.docs?.source}}};const j=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity"];export{c as Checked,d as CustomValidity,s as Default,a as Disabled,n as Indeterminate,i as Sizes,j as __namedExportsOrder,O as default};
//# sourceMappingURL=checkbox.stories-d0517e1b.js.map
