import"./checkbox-BYallP7r.js";import"./button-BtEYlTQw.js";import{x as a}from"./directive-helpers-DGrfjhaU.js";import{u as h}from"./index-CSCA1apM.js";import{g as r,a as u,s as k,b as x,d as f,c as g}from"./component-CRxE2rhG.js";import"./static-gmWA-8Kq.js";import"./default-value-DcEsLq7D.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-B2ZFWIyt.js";import"./live-DekCFwgv.js";import"./property-BGzwfL48.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-Do19GEOY.js";import"./form-control.custom.styles-DbPhNFMw.js";import"./icon.component-CScz9CrR.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./spinner.component-oeFu-uyM.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CcHPuk5a.js";var y=Object.freeze,v=Object.defineProperty,S=(e,i)=>y(v(e,"raw",{value:y(e.slice())})),b;const{argTypes:D}=k("syn-checkbox"),{overrideArgs:C}=x("syn-checkbox"),{generateTemplate:z}=f("syn-checkbox"),ce={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,component:"syn-checkbox",parameters:{design:u("1847-5654"),docs:{description:{component:r("checkbox","default")}}},title:"Components/syn-checkbox"},t={parameters:{controls:{disable:!1},docs:{description:{story:r("checkbox","default")}}},render:e=>z({args:e})},o={parameters:{docs:{description:{story:r("checkbox","checked")}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},s={parameters:{docs:{description:{story:r("checkbox","indeterminate")}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},c={parameters:{docs:{description:{story:r("checkbox","disabled")}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},n={parameters:{docs:{description:{story:r("checkbox","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const i=e.querySelector("form"),l=e.querySelector("syn-button"),p=e.querySelector("syn-checkbox");i&&l&&p&&(p.setCustomValidity("Don't forget to check me!"),await h.click(l),l.click())}catch(i){console.error("Error in play function:",i)}},render:()=>a(b||(b=S([`
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
  `])))},d=g({Default:t,Checked:o,Indeterminate:s,Disabled:c,Sizes:n});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} as Story`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      const button = canvasElement.querySelector('syn-button') as SynButton;
      const checkbox = canvasElement.querySelector('syn-checkbox') as SynCheckbox;
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Indeterminate,
  Disabled,
  Sizes
})`,...d.parameters?.docs?.source}}};const ne=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{o as Checked,m as CustomValidity,t as Default,c as Disabled,s as Indeterminate,d as Screenshot,n as Sizes,ne as __namedExportsOrder,ce as default};
