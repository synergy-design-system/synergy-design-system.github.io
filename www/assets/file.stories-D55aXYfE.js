import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-Lxgm_fxp.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-CdIPVuol.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-BRYPxz3B.js";import{n as m,t as h}from"./taggedTemplateLiteral-C9cDEsPD.js";import{n as g,t as _}from"./PaddingDecorator-B8dy7wkX.js";import{n as v,t as y}from"./decorators-BnZi37Nl.js";import{t as b}from"./file-CPcrUiby.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H=e((()=>{b(),s(),o(),y(),f(),r(),_(),n(),m(),{userEvent:x}=__STORYBOOK_MODULE_TEST__,{args:C,argTypes:w}=l(`syn-file`),{overrideArgs:T}=c(`syn-file`),{generateTemplate:E}=d(`syn-file`),D={args:T([],C),argTypes:w,component:`syn-file`,parameters:{chromatic:{modes:i},design:t(`41310-271865`),docs:{description:{component:u(`file`,`default`)}}},tags:[`Form`],title:`Components/syn-file`},O={parameters:{controls:{disable:!1},docs:{description:{story:u(`file`,`default`)}}},render:e=>E({args:e})},k={parameters:{docs:{description:{story:u(`file`,`label`)}}},render:()=>a`
    <syn-file label="This is a label"></syn-file>
  `},A={parameters:{docs:{description:{story:u(`file`,`help-text`)}}},render:()=>a`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},j={parameters:{docs:{description:{story:u(`file`,`multiple`)}}},render:()=>a`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},M={parameters:{docs:{description:{story:u(`file`,`hide-value`)}}},render:()=>a`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},N={decorators:[g()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`file`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-file`);t&&t.focus()},render:()=>a`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},P={parameters:{docs:{description:{story:u(`file`,`disabled`)}}},render:()=>a`
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
`},F={parameters:{docs:{description:{story:u(`file`,`readonly`)}}},render:()=>a`
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
`},I={parameters:{docs:{description:{story:u(`file`,`sizes`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},L={decorators:[v],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`file`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t.querySelectorAll(`syn-file`),r=t.querySelector(`syn-button`);r&&n&&(await x.click(r),r.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a(S||=h([`
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
  `]))},R={parameters:{docs:{description:{story:u(`file`,`droparea`)}}},render:()=>a`
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
  `},z={parameters:{docs:{description:{story:u(`file`,`directory`)}}},render:()=>a`
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
  `},B=p({Default:O,Label:k,HelpText:A,Multiple:j,HideValue:M,Disabled:P,Sizes:I,Invalid:L,Droparea:R,Directory:z},750),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
} as Story`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} as Story`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 750)`,...B.parameters?.docs?.source}}},V=[`Default`,`Label`,`HelpText`,`Multiple`,`HideValue`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`Droparea`,`Directory`,`Screenshot`]}));H();export{O as Default,z as Directory,P as Disabled,R as Droparea,N as Focus,A as HelpText,M as HideValue,L as Invalid,k as Label,j as Multiple,F as Readonly,B as Screenshot,I as Sizes,V as __namedExportsOrder,D as default,H as t};