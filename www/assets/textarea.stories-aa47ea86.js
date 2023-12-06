import"./textarea-9d15e527.js";import{x as r}from"./directive-helpers-a6c66f8a.js";import{u as S}from"./index-8ec6bb21.js";import{s as w,a as v,g as e}from"./component-5b49799f.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./query-a4947b92.js";import"./slot-4492e2ee.js";import"./if-defined-1099e361.js";import"./component.styles-92298694.js";import"./form-control.styles-d852634a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:b,argTypes:T}=w("syn-textarea"),{generateTemplate:g}=v("syn-textarea"),A={args:b,argTypes:T,parameters:{docs:{description:{component:e("textarea","default")}}},title:"Components/syn-textarea"},s={parameters:{docs:{description:{story:e("textarea","default")}}},render:a=>g({args:a})},o={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","labels")}}},render:()=>r`<syn-textarea label="Comments"></syn-textarea>`},n={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","help-text")}}},render:()=>r`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`},l={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","rows")}}},render:()=>r`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`},c={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","placeholder")}}},render:()=>r`<syn-textarea placeholder="Type something"></syn-textarea>`},i={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","readonly")}}},render:()=>r`<syn-textarea value="Read-only content"  readonly></syn-textarea>`},d={args:{placeholder:"This is in focus"},parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","focus")}}},play:({canvasElement:a})=>{const t=a.querySelector("syn-textarea");t&&t.focus()},render:()=>r`
      <form>
        ${g({args:b})}
      </form>
    `},p={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","disabled")}}},render:()=>r`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`},y={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","size")}}},render:()=>r`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`},m={args:{helpText:"This textarea is required.",placeholder:"Type something"},parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","invalid")}}},play:async({canvasElement:a})=>{try{const t=a.querySelector("form"),f=t.querySelector("syn-textarea"),h=t.querySelector("syn-button");h&&f&&(await S.click(h),h.click())}catch(t){console.error("Error in play function:",t)}},render:()=>r`
    <form class="custom-validity">
  ${g({args:b,constants:[{name:"required",type:"attribute",value:!0}]})}
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
  `},u={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","resize")}}},render:()=>r`<syn-textarea resize="none"></syn-textarea>`},x={parameters:{controls:{disable:!0},docs:{description:{story:e("textarea","resize-auto")}}},render:()=>r`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels')
      }
    }
  },
  render: () => html\`<syn-textarea label="Comments"></syn-textarea>\`
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text')
      }
    }
  },
  render: () => html\`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>\`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Type something"></syn-textarea>\`
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'readonly')
      }
    }
  },
  render: () => html\`<syn-textarea value="Read-only content"  readonly></syn-textarea>\`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is in focus'
  },
  parameters: {
    controls: {
      disable: true
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
        \${generateTemplate({
    args
  })}
      </form>
    \`
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>\`
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    helpText: 'This textarea is required.',
    placeholder: 'Type something'
  },
  parameters: {
    controls: {
      disable: true
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
  \${generateTemplate({
    args,
    constants: [{
      name: 'required',
      type: 'attribute',
      value: true
    }]
  })}
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize')
      }
    }
  },
  render: () => html\`<syn-textarea resize="none"></syn-textarea>\`
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto')
      }
    }
  },
  render: () => html\`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>\`
}`,...x.parameters?.docs?.source}}};const I=["Default","Labels","HelpText","Rows","Placeholders","ReadonlyTextareas","Focus","Disabled","Sizes","Invalid","PreventResizing","ExpandWithContent"];export{s as Default,p as Disabled,x as ExpandWithContent,d as Focus,n as HelpText,m as Invalid,o as Labels,c as Placeholders,u as PreventResizing,i as ReadonlyTextareas,l as Rows,y as Sizes,I as __namedExportsOrder,A as default};
//# sourceMappingURL=textarea.stories-aa47ea86.js.map
