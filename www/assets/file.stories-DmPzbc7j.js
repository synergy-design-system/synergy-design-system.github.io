import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,d as r,f as i,g as a,u as o}from"./iframe-BLAzlACc.js";import{t as s}from"./button-Ci1LHfIR.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-RhnClGwj.js";import{n as m,t as h}from"./taggedTemplateLiteral-pWa2IaV6.js";import{n as g,t as _}from"./PaddingDecorator-Dxl3X7Fp.js";import{t as v}from"./file-ChaNIhHW.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B=e((()=>{v(),s(),n(),f(),r(),_(),a(),m(),{userEvent:y}=__STORYBOOK_MODULE_TEST__,{args:x,argTypes:S}=l(`syn-file`),{overrideArgs:C}=c(`syn-file`),{generateTemplate:w}=d(`syn-file`),T={args:C([],x),argTypes:S,component:`syn-file`,parameters:{chromatic:{modes:i},design:o(`41310-271865`),docs:{description:{component:u(`file`,`default`)}}},tags:[`Form`],title:`Components/syn-file`},E={parameters:{controls:{disable:!1},docs:{description:{story:u(`file`,`default`)}}},render:e=>w({args:e})},D={parameters:{docs:{description:{story:u(`file`,`label`)}}},render:()=>t`
    <syn-file label="This is a label"></syn-file>
  `},O={parameters:{docs:{description:{story:u(`file`,`help-text`)}}},render:()=>t`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},k={parameters:{docs:{description:{story:u(`file`,`multiple`)}}},render:()=>t`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},A={parameters:{docs:{description:{story:u(`file`,`hide-value`)}}},render:()=>t`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},j={decorators:[g()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`file`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-file`);t&&t.focus()},render:()=>t`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},M={parameters:{docs:{description:{story:u(`file`,`disabled`)}}},render:()=>t`
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
`},N={parameters:{docs:{description:{story:u(`file`,`readonly`)}}},render:()=>t`
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
`},P={parameters:{docs:{description:{story:u(`file`,`sizes`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},F={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`file`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t.querySelectorAll(`syn-file`),r=t.querySelector(`syn-button`);r&&n&&(await y.click(r),r.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>t(b||=h([`
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
  `]))},I={parameters:{docs:{description:{story:u(`file`,`droparea`)}}},render:()=>t`
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
  `},L={parameters:{docs:{description:{story:u(`file`,`directory`)}}},render:()=>t`
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
  `},R=p({Default:E,Label:D,HelpText:O,Multiple:k,HideValue:A,Disabled:M,Sizes:P,Invalid:F,Droparea:I,Directory:L},750),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} as Story`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} as Story`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 750)`,...R.parameters?.docs?.source}}},z=[`Default`,`Label`,`HelpText`,`Multiple`,`HideValue`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`Droparea`,`Directory`,`Screenshot`]}));B();export{E as Default,L as Directory,M as Disabled,I as Droparea,j as Focus,O as HelpText,A as HideValue,F as Invalid,D as Label,k as Multiple,N as Readonly,R as Screenshot,P as Sizes,z as __namedExportsOrder,T as default,B as t};