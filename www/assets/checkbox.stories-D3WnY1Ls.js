import"./checkbox-B6-BBVGY.js";import"./button-BRK7nchw.js";import{g as h,x as a}from"./iframe-D-UauLL5.js";import{g as r,s as u,a as k,c as x,b as f}from"./component-DaWXE_kz.js";import"./class-map-Xfkr4cAh.js";import"./default-value-BGZXjuW0.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-BRLN1l9F.js";import"./live-BjiNvwcy.js";import"./property-FaezvFFC.js";import"./state-AKRYM2P7.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-BXMfMvRe.js";import"./form-control.custom.styles-Ca4mCqy5.js";import"./icon.component-BM6-0I20.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-C8NQuaRU.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";var y=Object.freeze,g=Object.defineProperty,v=(e,i)=>y(g(e,"raw",{value:y(e.slice())})),b;const{userEvent:S}=__STORYBOOK_MODULE_TEST__,{argTypes:D}=u("syn-checkbox"),{overrideArgs:C}=k("syn-checkbox"),{generateTemplate:E}=x("syn-checkbox"),X={args:C([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:D,component:"syn-checkbox",parameters:{design:h("1847-5654"),docs:{description:{component:r("checkbox","default")}}},tags:["Form"],title:"Components/syn-checkbox"},t={parameters:{controls:{disable:!1},docs:{description:{story:r("checkbox","default")}}},render:e=>E({args:e})},o={parameters:{docs:{description:{story:r("checkbox","checked")}}},render:()=>a`<syn-checkbox checked>Checked</syn-checkbox>`},c={parameters:{docs:{description:{story:r("checkbox","indeterminate")}}},render:()=>a`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},s={parameters:{docs:{description:{story:r("checkbox","disabled")}}},render:()=>a`<syn-checkbox disabled>Disabled</syn-checkbox>`},n={parameters:{docs:{description:{story:r("checkbox","sizes")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","validity")}}},play:async({canvasElement:e})=>{try{const i=e.querySelector("form"),l=e.querySelector("syn-button"),p=e.querySelector("syn-checkbox");i&&l&&p&&(p.setCustomValidity("Don't forget to check me!"),await S.click(l),l.click())}catch(i){console.error("Error in play function:",i)}},render:()=>a(b||(b=v([`
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
  `])))},m=f({Default:t,Checked:o,Indeterminate:c,Disabled:s,Sizes:n});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Indeterminate,
  Disabled,
  Sizes
})`,...m.parameters?.docs?.source}}};const Z=["Default","Checked","Indeterminate","Disabled","Sizes","CustomValidity","Screenshot"];export{o as Checked,d as CustomValidity,t as Default,s as Disabled,c as Indeterminate,m as Screenshot,n as Sizes,Z as __namedExportsOrder,X as default};
