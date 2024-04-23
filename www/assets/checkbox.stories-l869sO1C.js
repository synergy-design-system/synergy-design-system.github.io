import{g as h}from"./preview-CSzYYz-W.js";import{x as i}from"./lit-element-ZYWMe1i1.js";import{u}from"./index-C3zu00Ep.js";import{s as k,a as x,g as n,b as f,c as g}from"./component-BD35Kgrk.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-BiF6KxzB.js";import"./icon.component-BAAzxC2d.js";import"./directive-helpers-CkpR4LMI.js";import"./icon-BcesPW-x.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BhJsmGLR.js";var p=Object.freeze,v=Object.defineProperty,S=(e,r)=>p(v(e,"raw",{value:p(r||e.slice())})),b;const{argTypes:D}=k("syn-checkbox"),{overrideArgs:C}=g("syn-checkbox"),{generateTemplate:z}=x("syn-checkbox"),P={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,component:"syn-checkbox",parameters:{design:h("1847-5654"),docs:{description:{component:n("checkbox","default")}}},title:"Components/syn-checkbox"},o={parameters:{controls:{disable:!1},docs:{description:{story:n("checkbox","default")}}},render:e=>z({args:e})},t={parameters:{docs:{description:{story:n("checkbox","checked")}}},render:()=>i`<syn-checkbox checked>Checked</syn-checkbox>`},s={parameters:{docs:{description:{story:n("checkbox","indeterminate")}}},render:()=>i`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},c={parameters:{docs:{description:{story:n("checkbox","disabled")}}},render:()=>i`<syn-checkbox disabled>Disabled</syn-checkbox>`},a={parameters:{docs:{description:{story:n("checkbox","sizes")}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("form"),m=e.querySelector("syn-button"),y=e.querySelector("syn-checkbox");r&&m&&y&&(y.setCustomValidity("Don't forget to check me!"),await u.click(m),m.click())}catch(r){console.error("Error in play function:",r)}},render:()=>i(b||(b=S([`
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
  `])))},l=f({Default:o,Checked:t,Indeterminate:s,Disabled:c,Sizes:a});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} as Story`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
})`,...l.parameters?.docs?.source}}};const U=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{t as Checked,d as CustomValidity,o as Default,c as Disabled,s as Indeterminate,l as Screenshot,a as Sizes,U as __namedExportsOrder,P as default};
