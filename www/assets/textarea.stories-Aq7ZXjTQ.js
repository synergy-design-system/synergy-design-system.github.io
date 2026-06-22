import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-DWg8XNs3.js";import{d as r,f as i,g as a,u as o}from"./iframe-CVaCVGtH.js";import{t as s}from"./button-CUvYiMKB.js";import{i as c,n as l,o as u,r as d,t as f}from"./component-CllRTPI1.js";import{n as p,t as m}from"./PaddingDecorator-CCtTtXM4.js";import{t as h}from"./textarea-CnrAoF5q.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{h(),s(),n(),d(),r(),m(),a(),{userEvent:g}=__STORYBOOK_MODULE_TEST__,{args:_,argTypes:v}=c(`syn-textarea`),{generateTemplate:y}=u(`syn-textarea`),b={args:_,argTypes:v,parameters:{chromatic:{modes:i},design:o(`41337-204379`),docs:{description:{component:l(`textarea`,`default`)}}},tags:[`Form`],title:`Components/syn-textarea`},x={parameters:{controls:{disable:!1},docs:{description:{story:l(`textarea`,`default`)}}},render:e=>y({args:e})},S={parameters:{docs:{description:{story:l(`textarea`,`labels`)}}},render:()=>t`<syn-textarea label="Comments"></syn-textarea>`},C={parameters:{docs:{description:{story:l(`textarea`,`help-text`)}}},render:()=>t`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`},w={parameters:{docs:{description:{story:l(`textarea`,`rows`)}}},render:()=>t`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`},T={parameters:{docs:{description:{story:l(`textarea`,`placeholder`)}}},render:()=>t`<syn-textarea placeholder="Type something"></syn-textarea>`},E={parameters:{docs:{description:{story:l(`textarea`,`readonly`)}}},render:()=>t`<syn-textarea value="Read-only content"  readonly></syn-textarea>`},D={decorators:[p()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`textarea`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-textarea`);t&&t.focus()},render:()=>t`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    `},O={parameters:{docs:{description:{story:l(`textarea`,`disabled`)}}},render:()=>t`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`},k={parameters:{docs:{description:{story:l(`textarea`,`size`)}}},render:()=>t`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`},A={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`textarea`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t.querySelector(`syn-textarea`),r=t.querySelector(`syn-button`);r&&n&&(await g.click(r),r.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>t`
    <form class="custom-validity">
      <syn-textarea placeholder="Type something" help-text="This textarea is required." required></syn-textarea>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
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
  `},j={parameters:{docs:{description:{story:l(`textarea`,`resize`)}}},render:()=>t`<syn-textarea resize="none"></syn-textarea>`},M={parameters:{docs:{description:{story:l(`textarea`,`resize-auto`)}}},render:()=>t`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`},N=f({Default:x,Labels:S,HelpText:C,Rows:w,Placeholders:T,ReadonlyTextareas:E,Disabled:O,Sizes:k,PreventResizing:j,ExpandWithContent:M},500),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels')
      }
    }
  },
  render: () => html\`<syn-textarea label="Comments"></syn-textarea>\`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text')
      }
    }
  },
  render: () => html\`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>\`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Type something"></syn-textarea>\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'readonly')
      }
    }
  },
  render: () => html\`<syn-textarea value="Read-only content"  readonly></syn-textarea>\`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>\`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-textarea placeholder="Type something" help-text="This textarea is required." required></syn-textarea>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize')
      }
    }
  },
  render: () => html\`<syn-textarea resize="none"></syn-textarea>\`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto')
      }
    }
  },
  render: () => html\`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>\`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...N.parameters?.docs?.source}}},P=[`Default`,`Labels`,`HelpText`,`Rows`,`Placeholders`,`ReadonlyTextareas`,`Focus`,`Disabled`,`Sizes`,`Invalid`,`PreventResizing`,`ExpandWithContent`,`Screenshot`]}));F();export{x as Default,O as Disabled,M as ExpandWithContent,D as Focus,C as HelpText,A as Invalid,S as Labels,T as Placeholders,j as PreventResizing,E as ReadonlyTextareas,w as Rows,N as Screenshot,k as Sizes,P as __namedExportsOrder,b as default,F as t};