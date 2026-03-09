import"./checkbox-DLeoCn_Q.js";import"./button-T6bmYOzW.js";import{C as g,c as r,d as S}from"./iframe-CvEK3hyS.js";import{g as c,a as C,s as D,b as q,c as E}from"./component-CA77O2dz.js";import"./class-map-CxnJOQ98.js";import"./default-value-BtsnQ-pU.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-B09jWYPP.js";import"./live-B-z64Ocn.js";import"./synergy-element-CPjip6ae.js";import"./query-D0jTsbLw.js";import"./watch-CEsCE2EF.js";import"./form-control.styles-7AtXwvXx.js";import"./icon.component-ZmKdh5hn.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-BGapwH13.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-GL32a4iR.js";var x=Object.freeze,_=Object.defineProperty,z=(o,e)=>x(_(o,"raw",{value:x(o.slice())})),f;const{userEvent:v}=__STORYBOOK_MODULE_TEST__,{argTypes:I}=D("syn-checkbox"),{overrideArgs:M}=E("syn-checkbox"),{generateTemplate:T}=q("syn-checkbox"),oe={args:M([{name:"default",type:"slot",value:"Checkbox"}]),argTypes:I,component:"syn-checkbox",parameters:{chromatic:{modes:g},design:S("1847-5654"),docs:{description:{component:c("checkbox","default")}}},tags:["Form"],title:"Components/syn-checkbox"},n={parameters:{controls:{disable:!1},docs:{description:{story:c("checkbox","default")}}},render:o=>T({args:o})},a={parameters:{docs:{description:{story:c("checkbox","checked")}}},render:()=>r`<syn-checkbox checked>Checked</syn-checkbox>`},i={parameters:{docs:{description:{story:c("checkbox","help-text")}}},render:()=>r`
    <syn-checkbox help-text="What should the user know about the checkbox?">Label</syn-checkbox>
  `},l={parameters:{docs:{description:{story:c("checkbox","indeterminate")}}},render:()=>r`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`},h={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c("checkbox","focus")}}},play:({canvasElement:o})=>{const e=o.querySelector("syn-checkbox");e&&e.focus()},render:()=>r`<syn-checkbox>Focused</syn-checkbox>`},d={parameters:{docs:{description:{story:c("checkbox","disabled")}}},render:()=>r`<syn-checkbox disabled>Disabled</syn-checkbox>`},y={parameters:{docs:{description:{story:c("checkbox","readonly")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox name="a" value="a" readonly>Read only content</syn-checkbox>
      <syn-checkbox name="b" value="b" readonly indeterminate>Read only content (indet)</syn-checkbox>
      <syn-checkbox name="c" value="c" readonly checked>Read only content (checked)</syn-checkbox>
    </div>
  `},m={parameters:{docs:{description:{story:c("checkbox","sizes")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c("checkbox","invalid")}}},play:async({canvasElement:o})=>{try{const e=o.querySelector("form"),t=e?.querySelector("syn-checkbox"),s=e?.querySelector("syn-checkbox:last-of-type"),b=e?.querySelector("syn-button");s&&s.setCustomValidity("This checkbox is invalid"),b&&t&&(await v.click(b),b.click(),t.blur())}catch(e){console.error("Error in play function:",e)}},render:()=>r`
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
  `},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c("checkbox","validity")}}},play:async({canvasElement:o})=>{try{const e=o.querySelector("form"),t=o.querySelector("syn-button"),s=o.querySelector("syn-checkbox");e&&t&&s&&(s.setCustomValidity("Don't forget to check me!"),await v.click(t),t.click(),s.blur())}catch(e){console.error("Error in play function:",e)}},render:()=>r(f||(f=z([`
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
  `])))},k=C({Default:n,Checked:a,HelpText:i,Indeterminate:l,Disabled:d,Readonly:y,Sizes:m},200);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox', 'disabled')
      }
    }
  },
  render: () => html\`<syn-checkbox disabled>Disabled</syn-checkbox>\`
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  HelpText,
  Indeterminate,
  Disabled,
  Readonly,
  Sizes
}, 200)`,...k.parameters?.docs?.source}}};const ce=["Default","Checked","HelpText","Indeterminate","Focus","Disabled","Readonly","Sizes","Invalid","CustomValidity","Screenshot"];export{a as Checked,u as CustomValidity,n as Default,d as Disabled,h as Focus,i as HelpText,l as Indeterminate,p as Invalid,y as Readonly,k as Screenshot,m as Sizes,ce as __namedExportsOrder,oe as default};
