import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-Br8gqwpX.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-CbgJ0euj.js";import{i as s,n as c,o as l,r as u,t as d}from"./component-iQCIgMPU.js";import{n as f,t as p}from"./PaddingDecorator-C4mX2Z0z.js";import{n as m,t as h}from"./decorators-B9bB8Cqe.js";import{t as g}from"./textarea-C-dSVaIc.js";var _=t({Default:()=>C,Disabled:()=>A,ExpandWithContent:()=>P,Focus:()=>k,HelpText:()=>T,Invalid:()=>M,Labels:()=>w,Placeholders:()=>D,PreventResizing:()=>N,ReadonlyTextareas:()=>O,Rows:()=>E,Screenshot:()=>F,Sizes:()=>j,__namedExportsOrder:()=>I,default:()=>S}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{g(),o(),a(),h(),u(),p(),r(),{userEvent:v}=__STORYBOOK_MODULE_TEST__,{args:y,argTypes:b}=s(`syn-textarea`),{generateTemplate:x}=l(`syn-textarea`),S={args:y,argTypes:b,parameters:{chromatic:{modes:n},docs:{description:{component:c(`textarea`,`default`)}}},tags:[`Form`],title:`Components/syn-textarea`},C={parameters:{controls:{disable:!1},docs:{description:{story:c(`textarea`,`default`)}}},render:e=>x({args:e})},w={parameters:{docs:{description:{story:c(`textarea`,`labels`)}}},render:()=>i`<syn-textarea label="Comments"></syn-textarea>`},T={parameters:{docs:{description:{story:c(`textarea`,`help-text`)}}},render:()=>i`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`},E={parameters:{docs:{description:{story:c(`textarea`,`rows`)}}},render:()=>i`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`},D={parameters:{docs:{description:{story:c(`textarea`,`placeholder`)}}},render:()=>i`<syn-textarea placeholder="Type something"></syn-textarea>`},O={parameters:{docs:{description:{story:c(`textarea`,`readonly`)}}},render:()=>i`<syn-textarea value="Read-only content"  readonly></syn-textarea>`},k={decorators:[f()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c(`textarea`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-textarea`);t&&t.focus()},render:()=>i`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    `},A={parameters:{docs:{description:{story:c(`textarea`,`disabled`)}}},render:()=>i`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`},j={parameters:{docs:{description:{story:c(`textarea`,`size`)}}},render:()=>i`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`},M={decorators:[m],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c(`textarea`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t.querySelector(`syn-textarea`),r=t.querySelector(`syn-button`);r&&n&&(await v.click(r),r.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>i`
    <syn-textarea placeholder="Type something" help-text="This textarea is required." required></syn-textarea>
  `},N={parameters:{docs:{description:{story:c(`textarea`,`resize`)}}},render:()=>i`<syn-textarea resize="none"></syn-textarea>`},P={parameters:{docs:{description:{story:c(`textarea`,`resize-auto`)}}},render:()=>i`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`},F=d({Default:C,Labels:w,HelpText:T,Rows:E,Placeholders:D,ReadonlyTextareas:O,Disabled:A,Sizes:j,PreventResizing:N,ExpandWithContent:P},500),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'default')
      }
    }
  },
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels')
      }
    }
  },
  render: () => html\`<syn-textarea label="Comments"></syn-textarea>\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text')
      }
    }
  },
  render: () => html\`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'rows')
      }
    }
  },
  render: () => html\`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>\`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Type something"></syn-textarea>\`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'readonly')
      }
    }
  },
  render: () => html\`<syn-textarea value="Read-only content"  readonly></syn-textarea>\`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const textarea = canvasElement.querySelector('syn-textarea');
    if (textarea) {
      textarea.focus();
    }
  },
  render: () => html\`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>\`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'size')
      }
    }
  },
  render: () => html\`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>\`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    try {
      const form = canvasElement.querySelector('form')!;
      const textarea = form.querySelector('syn-textarea');
      const button = form.querySelector('syn-button');
      if (button && textarea) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-textarea placeholder="Type something" help-text="This textarea is required." required></syn-textarea>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize')
      }
    }
  },
  render: () => html\`<syn-textarea resize="none"></syn-textarea>\`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto')
      }
    }
  },
  render: () => html\`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>\`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Rows,
  Placeholders,
  ReadonlyTextareas,
  Disabled,
  Sizes,
  PreventResizing,
  ExpandWithContent
}, 500)`,...F.parameters?.docs?.source}}},I=[`Default`,`Labels`,`HelpText`,`Rows`,`Placeholders`,`ReadonlyTextareas`,`Focus`,`Disabled`,`Sizes`,`Invalid`,`PreventResizing`,`ExpandWithContent`,`Screenshot`]})))()}export{L as n,_ as r,C as t};