import{g as S}from"./preview-CvBHywAB.js";import{x as n}from"./lit-element-DILkAbkc.js";import{u as x}from"./index-BY-rbqZU.js";import{s as v,a as T,g as e,b as D,c as z}from"./component-BEsS8oJ5.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-Dz9RM87e.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-BaHXGfTO.js";import"./icon-SvBqPYt-.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-CJgmZ3eS.js";var b=Object.freeze,k=Object.defineProperty,E=(s,r)=>b(k(s,"raw",{value:b(s.slice())})),h;const{args:q,argTypes:M}=v("syn-file"),{overrideArgs:_}=z("syn-file"),{generateTemplate:w}=T("syn-file"),J={args:_([],q),argTypes:M,component:"syn-file",parameters:{design:S("21709-49135"),docs:{description:{component:e("file","default")}}},title:"Components/syn-file"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("file","default")}}},render:s=>w({args:s})},l={parameters:{docs:{description:{story:e("file","label")}}},render:()=>n`
    <syn-file label="This is a label"></syn-file>
  `},t={parameters:{docs:{description:{story:e("file","help-text")}}},render:()=>n`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},i={parameters:{docs:{description:{story:e("file","multiple")}}},render:()=>n`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},o={parameters:{docs:{description:{story:e("file","hide-value")}}},render:()=>n`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},c={parameters:{docs:{description:{story:e("file","disabled")}}},render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-file
        disabled
        label="This is a label"
      ></syn-file>
      <syn-file
        disabled
        droparea
        label="This is a label"
      ></syn-file>
    </div>
`},p={parameters:{docs:{description:{story:e("file","sizes")}}},render:()=>n`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},d={parameters:{docs:{description:{story:e("file","droparea")}}},render:()=>n`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Small"
        multiple
        size="small"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Medium"
        multiple
        size="medium"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Large"
        multiple
        size="large"
      ></syn-file>
    </div>
  `},y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("file","focus")}}},play:({canvasElement:s})=>{const r=s.querySelector("syn-file");r&&r.focus()},render:()=>n`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("file","invalid")}}},play:async({canvasElement:s})=>{try{const r=s.querySelector("form"),g=r.querySelectorAll("syn-file"),u=r.querySelector("syn-button");u&&g&&(await x.click(u),u.click())}catch(r){console.error("Error in play function:",r)}},render:()=>n(h||(h=E([`
    <form class="custom-validity">
      <syn-file
        class="syn-file-invalid"
        droparea
        help-text="This is an error text."
        label="This is a label"
      ></syn-file>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <script type="module">
      const files = document.querySelectorAll('.syn-file-invalid');
      files.forEach((file) => {
        file.setCustomValidity('This is an error text');
      });
    <\/script>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      syn-button {
        align-self: flex-start;
      }
    </style>
  `])))},f=D({Default:a,Label:l,HelpText:t,Multiple:i,HideValue:o,Disabled:c,Sizes:p,Droparea:d},350);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('file', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'label')
      }
    }
  },
  render: () => html\`
    <syn-file label="This is a label"></syn-file>
  \`
} as Story`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  \`
} as Story`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'multiple')
      }
    }
  },
  render: () => html\`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  \`
} as Story`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'hide-value')
      }
    }
  },
  render: () => html\`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  \`
} as Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'disabled')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-file
        disabled
        label="This is a label"
      ></syn-file>
      <syn-file
        disabled
        droparea
        label="This is a label"
      ></syn-file>
    </div>
\`
} as Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  \`
} as Story`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'droparea')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Small"
        multiple
        size="small"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Medium"
        multiple
        size="medium"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Large"
        multiple
        size="large"
      ></syn-file>
    </div>
  \`
} as Story`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('file', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const input = (canvasElement.querySelector('syn-file') as SynFile);
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  \`
} as Story`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('file', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const form = canvasElement.querySelector('form')!;
      const files = form.querySelectorAll('syn-file');
      const button = form.querySelector('syn-button')!;
      if (button && files) {
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
      <syn-file
        class="syn-file-invalid"
        droparea
        help-text="This is an error text."
        label="This is a label"
      ></syn-file>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <script type="module">
      const files = document.querySelectorAll('.syn-file-invalid');
      files.forEach((file) => {
        file.setCustomValidity('This is an error text');
      });
    <\/script>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      syn-button {
        align-self: flex-start;
      }
    </style>
  \`
} as Story`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  HelpText,
  Multiple,
  HideValue,
  Disabled,
  Sizes,
  Droparea
}, 350)`,...f.parameters?.docs?.source}}};const K=["Default","Label","HelpText","Multiple","HideValue","Disabled","Sizes","Droparea","Focus","Invalid","Screenshot"];export{a as Default,c as Disabled,d as Droparea,y as Focus,t as HelpText,o as HideValue,m as Invalid,l as Label,i as Multiple,f as Screenshot,p as Sizes,K as __namedExportsOrder,J as default};
