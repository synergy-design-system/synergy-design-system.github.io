import"./checkbox-BhQ8fwJC.js";import"./button-Be3NXwS0.js";import{g as v,C as g,x as c}from"./iframe-D3jh34T2.js";import{g as r,s as S,a as C,c as q,b as D}from"./component-DtDvIiCV.js";import"./class-map-TRixnXgC.js";import"./default-value-CdTPzwck.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-CtjQHRUr.js";import"./live-C-9xNDiI.js";import"./synergy-element-Gy20R3QD.js";import"./icon.component-bZ25TJym.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./form-control.custom.styles-OVZxmFGS.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-ovUywGfF.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DXCV3alH.js";var k=Object.freeze,E=Object.defineProperty,_=(o,e)=>k(E(o,"raw",{value:k(o.slice())})),x;const{userEvent:f}=__STORYBOOK_MODULE_TEST__,{argTypes:I}=S("syn-checkbox"),{overrideArgs:z}=C("syn-checkbox"),{generateTemplate:M}=q("syn-checkbox"),ee={args:z([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:I,component:"syn-checkbox",parameters:{chromatic:{modes:g},design:v("1847-5654"),docs:{description:{component:r("checkbox","default")}}},tags:["Form","SICK2018","SICK2025"],title:"Components/syn-checkbox"},n={parameters:{controls:{disable:!1},docs:{description:{story:r("checkbox","default")}}},render:o=>M({args:o})},a={parameters:{docs:{description:{story:r("checkbox","checked")}}},render:()=>c`<syn-checkbox checked>Checked</syn-checkbox>`},i={parameters:{docs:{description:{story:r("checkbox","help-text")}}},render:()=>c`
    <syn-checkbox help-text="What should the user know about the checkbox?">Label</syn-checkbox>
  `},l={parameters:{docs:{description:{story:r("checkbox","indeterminate")}}},render:()=>c`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},b={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","focus")}}},play:({canvasElement:o})=>{const e=o.querySelector("syn-checkbox");e&&e.focus()},render:()=>c`<syn-checkbox>Focused</syn-checkbox>`},d={parameters:{docs:{description:{story:r("checkbox","disabled")}}},render:()=>c`<syn-checkbox disabled>Disabled</syn-checkbox>`},m={parameters:{docs:{description:{story:r("checkbox","sizes")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},h={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","invalid")}}},play:async({canvasElement:o})=>{try{const e=o.querySelector("form"),t=e?.querySelector("syn-checkbox"),s=e?.querySelector("syn-checkbox:last-of-type"),y=e?.querySelector("syn-button");s&&s.setCustomValidity("This checkbox is invalid"),y&&t&&(await f.click(y),y.click(),t.blur())}catch(e){console.error("Error in play function:",e)}},render:()=>c`
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
  `},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("checkbox","validity")}}},play:async({canvasElement:o})=>{try{const e=o.querySelector("form"),t=o.querySelector("syn-button"),s=o.querySelector("syn-checkbox");e&&t&&s&&(s.setCustomValidity("Don't forget to check me!"),await f.click(t),t.click(),s.blur())}catch(e){console.error("Error in play function:",e)}},render:()=>c(x||(x=_([`
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
  `])))},u=D({Default:n,Checked:a,HelpText:i,Indeterminate:l,Disabled:d,Sizes:m});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'checked')
      }
    }
  },
  render: () => html\`<syn-checkbox checked>Checked</syn-checkbox>\`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'indeterminate')
      }
    }
  },
  render: () => html\`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>\`
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  HelpText,
  Indeterminate,
  Disabled,
  Sizes
})`,...u.parameters?.docs?.source}}};const oe=["Default","Checked","HelpText","Indeterminate","Focus","Disabled","Sizes","Invalid","CustomValidity","Screenshot"];export{a as Checked,p as CustomValidity,n as Default,d as Disabled,b as Focus,i as HelpText,l as Indeterminate,h as Invalid,u as Screenshot,m as Sizes,oe as __namedExportsOrder,ee as default};
