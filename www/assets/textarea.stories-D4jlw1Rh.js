import{g as f}from"./preview-CDE2O3Wq.js";import{x as r}from"./lit-element-DILkAbkc.js";import{u as S}from"./index-D1uk6h4O.js";import{s as w,a as v,g as e,b as T}from"./component-BteU4oxk.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-Bp4UJBn3.js";import"./icon.component-BAp08lqM.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-CEOmvufO.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-PzU9tuEL.js";const{args:z,argTypes:k}=w("syn-textarea"),{generateTemplate:D}=v("syn-textarea"),I={args:z,argTypes:k,parameters:{design:f("1101-1576"),docs:{description:{component:e("textarea","default")}}},title:"Components/syn-textarea"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("textarea","default")}}},render:a=>D({args:a})},s={parameters:{docs:{description:{story:e("textarea","labels")}}},render:()=>r`<syn-textarea label="Comments"></syn-textarea>`},o={parameters:{docs:{description:{story:e("textarea","help-text")}}},render:()=>r`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`},c={parameters:{docs:{description:{story:e("textarea","rows")}}},render:()=>r`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`},i={parameters:{docs:{description:{story:e("textarea","placeholder")}}},render:()=>r`<syn-textarea placeholder="Type something"></syn-textarea>`},l={parameters:{docs:{description:{story:e("textarea","readonly")}}},render:()=>r`<syn-textarea value="Read-only content"  readonly></syn-textarea>`},x={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("textarea","focus")}}},play:({canvasElement:a})=>{const t=a.querySelector("syn-textarea");t&&t.focus()},render:()=>r`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    `},d={parameters:{docs:{description:{story:e("textarea","disabled")}}},render:()=>r`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`},p={parameters:{docs:{description:{story:e("textarea","size")}}},render:()=>r`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("textarea","invalid")}}},play:async({canvasElement:a})=>{try{const t=a.querySelector("form"),b=t.querySelector("syn-textarea"),g=t.querySelector("syn-button");g&&b&&(await S.click(g),g.click())}catch(t){console.error("Error in play function:",t)}},render:()=>r`
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
  `},y={parameters:{docs:{description:{story:e("textarea","resize")}}},render:()=>r`<syn-textarea resize="none"></syn-textarea>`},m={parameters:{docs:{description:{story:e("textarea","resize-auto")}}},render:()=>r`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`},h=T({Default:n,Labels:s,HelpText:o,Rows:c,Placeholders:i,ReadonlyTextareas:l,Disabled:d,Sizes:p,PreventResizing:y,ExpandWithContent:m},500);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} as Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels')
      }
    }
  },
  render: () => html\`<syn-textarea label="Comments"></syn-textarea>\`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text')
      }
    }
  },
  render: () => html\`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>\`
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Type something"></syn-textarea>\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'readonly')
      }
    }
  },
  render: () => html\`<syn-textarea value="Read-only content"  readonly></syn-textarea>\`
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>\`
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize')
      }
    }
  },
  render: () => html\`<syn-textarea resize="none"></syn-textarea>\`
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto')
      }
    }
  },
  render: () => html\`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>\`
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...h.parameters?.docs?.source}}};const _=["Default","Labels","HelpText","Rows","Placeholders","ReadonlyTextareas","Focus","Disabled","Sizes","Invalid","PreventResizing","ExpandWithContent","Screenshot"];export{n as Default,d as Disabled,m as ExpandWithContent,x as Focus,o as HelpText,u as Invalid,s as Labels,i as Placeholders,y as PreventResizing,l as ReadonlyTextareas,c as Rows,h as Screenshot,p as Sizes,_ as __namedExportsOrder,I as default};
