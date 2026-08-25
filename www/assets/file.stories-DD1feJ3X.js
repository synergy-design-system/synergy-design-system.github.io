import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-Br8gqwpX.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-CbgJ0euj.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-iQCIgMPU.js";import{t as p}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as m,t as h}from"./PaddingDecorator-C4mX2Z0z.js";import{n as g,t as _}from"./decorators-B9bB8Cqe.js";import{t as v}from"./file-CYDV-mZA.js";var y=t({Default:()=>D,Directory:()=>R,Disabled:()=>N,Droparea:()=>L,Focus:()=>M,HelpText:()=>k,HideValue:()=>j,Invalid:()=>I,Label:()=>O,Multiple:()=>A,Readonly:()=>P,Screenshot:()=>z,Sizes:()=>F,__namedExportsOrder:()=>B,default:()=>E}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{v(),o(),a(),_(),d(),h(),r(),{userEvent:b}=__STORYBOOK_MODULE_TEST__,{args:S,argTypes:C}=c(`syn-file`),{overrideArgs:w}=s(`syn-file`),{generateTemplate:T}=u(`syn-file`),E={args:w([],S),argTypes:C,component:`syn-file`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`file`,`default`)}}},tags:[`Form`],title:`Components/syn-file`},D={parameters:{controls:{disable:!1},docs:{description:{story:l(`file`,`default`)}}},render:e=>T({args:e})},O={parameters:{docs:{description:{story:l(`file`,`label`)}}},render:()=>i`
    <syn-file label="This is a label"></syn-file>
  `},k={parameters:{docs:{description:{story:l(`file`,`help-text`)}}},render:()=>i`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},A={parameters:{docs:{description:{story:l(`file`,`multiple`)}}},render:()=>i`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},j={parameters:{docs:{description:{story:l(`file`,`hide-value`)}}},render:()=>i`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},M={decorators:[m()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`file`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-file`);t&&t.focus()},render:()=>i`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},N={parameters:{docs:{description:{story:l(`file`,`disabled`)}}},render:()=>i`
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
`},P={parameters:{docs:{description:{story:l(`file`,`readonly`)}}},render:()=>i`
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
`},F={parameters:{docs:{description:{story:l(`file`,`sizes`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},I={decorators:[g],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`file`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t.querySelectorAll(`syn-file`),r=t.querySelector(`syn-button`);r&&n&&(await b.click(r),r.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i(x||=p([`
    <syn-file
      class="syn-file-invalid"
      droparea
      help-text="This is an error text."
      label="This is a label"
    ></syn-file>
    <script type="module">
      const files = document.querySelectorAll('.syn-file-invalid');
      files.forEach((file) => {
        file.setCustomValidity('This is an error text');
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:l(`file`,`droparea`)}}},render:()=>i`
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
  `},R={parameters:{docs:{description:{story:l(`file`,`directory`)}}},render:()=>i`
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
  `},z=f({Default:D,Label:O,HelpText:k,Multiple:A,HideValue:j,Disabled:N,Sizes:F,Invalid:I,Droparea:L,Directory:R},750),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} as Story`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
} as Story`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
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
    <syn-file
      class="syn-file-invalid"
      droparea
      help-text="This is an error text."
      label="This is a label"
    ></syn-file>
    <script type="module">
      const files = document.querySelectorAll('.syn-file-invalid');
      files.forEach((file) => {
        file.setCustomValidity('This is an error text');
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 750)`,...z.parameters?.docs?.source}}},B=[`Default`,`Label`,`HelpText`,`Multiple`,`HideValue`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`Droparea`,`Directory`,`Screenshot`]})))()}export{y as n,V as r,D as t};