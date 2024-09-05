import{g as h}from"./preview-BNqIg48L.js";import{k as a}from"./lit-element-BsyMe9HG.js";import{u}from"./index-DbQ-iIe5.js";import{s as k,a as x,g as r,b as f,c as g}from"./component-DH05a2lD.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-IjvC4sFt.js";import"./directive-helpers-DUpkUCIH.js";import"./icon-button-CHOVHuo3.js";import"./icon-D5y6_pit.js";import"./index-C8k3Z-3Y.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-D8vHI8_K.js";var p=Object.freeze,v=Object.defineProperty,S=(e,i)=>p(v(e,"raw",{value:p(e.slice())})),b;const{argTypes:D}=k("syn-checkbox"),{overrideArgs:C}=g("syn-checkbox"),{generateTemplate:z}=x("syn-checkbox"),U={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,component:"syn-checkbox",parameters:{design:h("1847-5654"),docs:{description:{component:r("checkbox","default")}}},title:"Components/syn-checkbox"},o={parameters:{controls:{disable:!1},docs:{description:{story:r("checkbox","default")}}},render:e=>z({args:e})},t={parameters:{docs:{description:{story:r("checkbox","checked")}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},s={parameters:{docs:{description:{story:r("checkbox","indeterminate")}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},c={parameters:{docs:{description:{story:r("checkbox","disabled")}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},n={parameters:{docs:{description:{story:r("checkbox","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const i=e.querySelector("form"),m=e.querySelector("syn-button"),y=e.querySelector("syn-checkbox");i&&m&&y&&(y.setCustomValidity("Don't forget to check me!"),await u.click(m),m.click())}catch(i){console.error("Error in play function:",i)}},render:()=>a(b||(b=S([`
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
  `])))},l=f({Default:o,Checked:t,Indeterminate:s,Disabled:c,Sizes:n});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
})`,...l.parameters?.docs?.source}}};const B=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{t as Checked,d as CustomValidity,o as Default,c as Disabled,s as Indeterminate,l as Screenshot,n as Sizes,B as __namedExportsOrder,U as default};
