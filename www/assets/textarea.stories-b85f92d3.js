import"./textarea-c35b0f01.js";import{x as r}from"./directive-helpers-a6c66f8a.js";import{u as S}from"./index-8ec6bb21.js";import{s as f,a as w,g as e,b as v}from"./component-e9e6c7ab.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./form-daa16d55.js";import"./slot-4492e2ee.js";import"./if-defined-1099e361.js";import"./component.styles-30ab6d75.js";import"./query-f49a08ce.js";import"./form-control.styles-d852634a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:T,argTypes:z}=f("syn-textarea"),{generateTemplate:D}=w("syn-textarea"),B={args:T,argTypes:z,parameters:{docs:{description:{component:e("textarea","default")}}},title:"Components/syn-textarea"},y={parameters:{controls:{disable:!1},docs:{description:{story:e("textarea","default")}}},render:a=>D({args:a})},s={name:"Labels",parameters:{docs:{description:{story:e("textarea","labels")}}},render:()=>r`<syn-textarea label="Comments"></syn-textarea>`},n={name:"Help text",parameters:{docs:{description:{story:e("textarea","help-text")}}},render:()=>r`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`},o={name:"Rows",parameters:{docs:{description:{story:e("textarea","rows")}}},render:()=>r`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`},c={name:"Placeholders",parameters:{docs:{description:{story:e("textarea","placeholder")}}},render:()=>r`<syn-textarea placeholder="Type something"></syn-textarea>`},i={name:"Readonly textareas",parameters:{docs:{description:{story:e("textarea","readonly")}}},render:()=>r`<syn-textarea value="Read-only content"  readonly></syn-textarea>`},x={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("textarea","focus")}}},play:({canvasElement:a})=>{const t=a.querySelector("syn-textarea");t&&t.focus()},render:()=>r`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    `},l={name:"Disabled",parameters:{docs:{description:{story:e("textarea","disabled")}}},render:()=>r`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`},d={name:"Sizes",parameters:{docs:{description:{story:e("textarea","size")}}},render:()=>r`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`},u={name:"Invalid",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("textarea","invalid")}}},play:async({canvasElement:a})=>{try{const t=a.querySelector("form"),g=t.querySelector("syn-textarea"),b=t.querySelector("syn-button");b&&g&&(await S.click(b),b.click())}catch(t){console.error("Error in play function:",t)}},render:()=>r`
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
  `},p={name:"Prevent resizing",parameters:{docs:{description:{story:e("textarea","resize")}}},render:()=>r`<syn-textarea resize="none"></syn-textarea>`},m={name:"Expand with content",parameters:{docs:{description:{story:e("textarea","resize-auto")}}},render:()=>r`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`},h=v([s,n,o,c,i,l,d,p,m],500);y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...y.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Labels',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels')
      }
    }
  },
  render: () => html\`<syn-textarea label="Comments"></syn-textarea>\`
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Help text',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text')
      }
    }
  },
  render: () => html\`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>\`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Rows',
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Placeholders',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Type something"></syn-textarea>\`
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Readonly textareas',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'readonly')
      }
    }
  },
  render: () => html\`<syn-textarea value="Read-only content"  readonly></syn-textarea>\`
}`,...i.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
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
    const textarea = (canvasElement.querySelector('syn-textarea') as SynTextarea);
    if (textarea) {
      textarea.focus();
    }
  },
  render: () => html\`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    \`
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>\`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Invalid',
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
      const textarea = (form.querySelector('syn-textarea') as SynTextarea);
      const button = (form.querySelector('syn-button') as SynButton);
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Prevent resizing',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize')
      }
    }
  },
  render: () => html\`<syn-textarea resize="none"></syn-textarea>\`
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Expand with content',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto')
      }
    }
  },
  render: () => html\`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>\`
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"generateScreenshotStory([Labels, HelpText, Rows, Placeholders, ReadonlyTextareas, Disabled, Sizes, PreventResizing, ExpandWithContent], 500)",...h.parameters?.docs?.source}}};const j=["Default","Labels","HelpText","Rows","Placeholders","ReadonlyTextareas","Focus","Disabled","Sizes","Invalid","PreventResizing","ExpandWithContent","Screenshot"];export{y as Default,l as Disabled,m as ExpandWithContent,x as Focus,n as HelpText,u as Invalid,s as Labels,c as Placeholders,p as PreventResizing,i as ReadonlyTextareas,o as Rows,h as Screenshot,d as Sizes,j as __namedExportsOrder,B as default};
//# sourceMappingURL=textarea.stories-b85f92d3.js.map
