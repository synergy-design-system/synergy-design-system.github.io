import{g as h}from"./preview-Dx-OzZwk.js";import{x as a}from"./lit-element-DILkAbkc.js";import{u}from"./index-B2lwzyK9.js";import{s as k,a as x,g as n,b as f,c as g}from"./component-QIBP5SBH.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-C19sjoeu.js";import"./icon.component-CttMNk01.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-D9LxvDoP.js";import"./index-DG4PcxGy.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BZijvsIS.js";var p=Object.freeze,v=Object.defineProperty,S=(e,i)=>p(v(e,"raw",{value:p(e.slice())})),b;const{argTypes:D}=k("syn-checkbox"),{overrideArgs:C}=g("syn-checkbox"),{generateTemplate:z}=x("syn-checkbox"),U={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,component:"syn-checkbox",parameters:{design:h("1847-5654"),docs:{description:{component:n("checkbox","default")}}},title:"Components/syn-checkbox"},r={parameters:{controls:{disable:!1},docs:{description:{story:n("checkbox","default")}}},render:e=>z({args:e})},o={parameters:{docs:{description:{story:n("checkbox","checked")}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},t={parameters:{docs:{description:{story:n("checkbox","indeterminate")}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},s={parameters:{docs:{description:{story:n("checkbox","disabled")}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},c={parameters:{docs:{description:{story:n("checkbox","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const i=e.querySelector("form"),m=e.querySelector("syn-button"),y=e.querySelector("syn-checkbox");i&&m&&y&&(y.setCustomValidity("Don't forget to check me!"),await u.click(m),m.click())}catch(i){console.error("Error in play function:",i)}},render:()=>a(b||(b=S([`
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
  `])))},l=f({Default:r,Checked:o,Indeterminate:t,Disabled:s,Sizes:c});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} as Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Indeterminate,
  Disabled,
  Sizes
})`,...l.parameters?.docs?.source}}};const B=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{o as Checked,d as CustomValidity,r as Default,s as Disabled,t as Indeterminate,l as Screenshot,c as Sizes,B as __namedExportsOrder,U as default};
