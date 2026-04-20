import"./file-NQfwwAwo.js";import"./button-CO5TyCZU.js";import{C as S,c as r,d as T}from"./iframe-BSIZOQaR.js";import{g as e,a as D,s as z,b as k,c as _}from"./component-B_60J-Kr.js";import{p as E}from"./PaddingDecorator-pHz1gPwB.js";import"./class-map-BAlzbuiq.js";import"./synergy-element-DMAZ4sCT.js";import"./icon.component-DBXuqMd0.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-D41PQdx4.js";import"./default-value-DlpTFRFp.js";import"./controller-BGdn_hBF.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./form-control.styles-CxPBCY2m.js";import"./button.component-Ci9gR9EW.js";import"./spinner.component-CX2aJZ2n.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./animation-registry-DyRYqZdt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DCFLSkr0.js";var g=Object.freeze,M=Object.defineProperty,q=(s,a)=>g(M(s,"raw",{value:g(s.slice())})),x;const{userEvent:w}=__STORYBOOK_MODULE_TEST__,{args:L,argTypes:O}=z("syn-file"),{overrideArgs:A}=_("syn-file"),{generateTemplate:H}=k("syn-file"),le={args:A([],L),argTypes:O,component:"syn-file",parameters:{chromatic:{modes:S},design:T("21709-49135"),docs:{description:{component:e("file","default")}}},tags:["Form"],title:"Components/syn-file"},i={parameters:{controls:{disable:!1},docs:{description:{story:e("file","default")}}},render:s=>H({args:s})},l={parameters:{docs:{description:{story:e("file","label")}}},render:()=>r`
    <syn-file label="This is a label"></syn-file>
  `},t={parameters:{docs:{description:{story:e("file","help-text")}}},render:()=>r`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},o={parameters:{docs:{description:{story:e("file","multiple")}}},render:()=>r`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},n={parameters:{docs:{description:{story:e("file","hide-value")}}},render:()=>r`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},f={decorators:[E()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("file","focus")}}},play:({canvasElement:s})=>{const a=s.querySelector("syn-file");a&&a.focus()},render:()=>r`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},c={parameters:{docs:{description:{story:e("file","disabled")}}},render:()=>r`
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
`},u={parameters:{docs:{description:{story:e("file","readonly")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-file
        readonly
        label="This is a label"
      ></syn-file>
      <syn-file
        readonly
        droparea
        label="This is a label"
      ></syn-file>
    </div>
`},p={parameters:{docs:{description:{story:e("file","sizes")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("file","invalid")}}},play:async({canvasElement:s})=>{try{const a=s.querySelector("form"),v=a.querySelectorAll("syn-file"),h=a.querySelector("syn-button");h&&v&&(await w.click(h),h.click())}catch(a){console.error("Error in play function:",a)}},render:()=>r(x||(x=q([`
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
  `])))},y={parameters:{docs:{description:{story:e("file","droparea")}}},render:()=>r`
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
  `},m={parameters:{docs:{description:{story:e("file","directory")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        label="Button"
        webkitdirectory
      ></syn-file>
      <syn-file
        droparea
        label="Droparea"
        webkitdirectory
      ></syn-file>
    </div>
  `},b=D({Default:i,Label:l,HelpText:t,Multiple:o,HideValue:n,Disabled:c,Sizes:p,Invalid:d,Droparea:y,Directory:m},750);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  render: args => generateTemplate({
    args
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
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
    const input = canvasElement.querySelector('syn-file');
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  \`
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} as Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-file
        readonly
        label="This is a label"
      ></syn-file>
      <syn-file
        readonly
        droparea
        label="This is a label"
      ></syn-file>
    </div>
\`
} as Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      // eslint-disable-next-line no-console
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
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'directory')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        label="Button"
        webkitdirectory
      ></syn-file>
      <syn-file
        droparea
        label="Droparea"
        webkitdirectory
      ></syn-file>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  HelpText,
  Multiple,
  HideValue,
  Disabled,
  Sizes,
  Invalid,
  Droparea,
  Directory
}, 750)`,...b.parameters?.docs?.source}}};const te=["Default","Label","HelpText","Multiple","HideValue","Focus","Disabled","Readonly","Sizes","Invalid","Droparea","Directory","Screenshot"];export{i as Default,m as Directory,c as Disabled,y as Droparea,f as Focus,t as HelpText,n as HideValue,d as Invalid,l as Label,o as Multiple,u as Readonly,b as Screenshot,p as Sizes,te as __namedExportsOrder,le as default};
