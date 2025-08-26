import"./textarea-szQX13di.js";import"./button-CRN7mcJk.js";import{g as f,x as r}from"./iframe-B7DfbYuR.js";import{g as e,s as S,c as w,b as v}from"./component-Czukm7wJ.js";import{p as T}from"./PaddingDecorator-D-TIMxM9.js";import"./class-map-CPtZZnXt.js";import"./default-value-CpTjc996.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-dp71bNGA.js";import"./live-Cv3jEGo1.js";import"./synergy-element-VQU4slEB.js";import"./icon.component-Bzj-jGeV.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./form-control.custom.styles-DVUfUexr.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-XYyzj9LU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{userEvent:D}=__STORYBOOK_MODULE_TEST__,{args:z,argTypes:k}=S("syn-textarea"),{generateTemplate:E}=w("syn-textarea"),Z={args:z,argTypes:k,parameters:{design:f("1101-1576"),docs:{description:{component:e("textarea","default")}}},tags:["Form"],title:"Components/syn-textarea"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("textarea","default")}}},render:a=>E({args:a})},o={parameters:{docs:{description:{story:e("textarea","labels")}}},render:()=>r`<syn-textarea label="Comments"></syn-textarea>`},n={parameters:{docs:{description:{story:e("textarea","help-text")}}},render:()=>r`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`},c={parameters:{docs:{description:{story:e("textarea","rows")}}},render:()=>r`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`},i={parameters:{docs:{description:{story:e("textarea","placeholder")}}},render:()=>r`<syn-textarea placeholder="Type something"></syn-textarea>`},l={parameters:{docs:{description:{story:e("textarea","readonly")}}},render:()=>r`<syn-textarea value="Read-only content"  readonly></syn-textarea>`},x={decorators:[T()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("textarea","focus")}}},play:({canvasElement:a})=>{const t=a.querySelector("syn-textarea");t&&t.focus()},render:()=>r`
      <form>
        <syn-textarea placeholder="This is in focus"></syn-textarea>
      </form>
    `},p={parameters:{docs:{description:{story:e("textarea","disabled")}}},render:()=>r`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`},d={parameters:{docs:{description:{story:e("textarea","size")}}},render:()=>r`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("textarea","invalid")}}},play:async({canvasElement:a})=>{try{const t=a.querySelector("form"),b=t.querySelector("syn-textarea"),g=t.querySelector("syn-button");g&&b&&(await D.click(g),g.click())}catch(t){console.error("Error in play function:",t)}},render:()=>r`
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
  `},m={parameters:{docs:{description:{story:e("textarea","resize")}}},render:()=>r`<syn-textarea resize="none"></syn-textarea>`},y={parameters:{docs:{description:{story:e("textarea","resize-auto")}}},render:()=>r`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`},h=v({Default:s,Labels:o,HelpText:n,Rows:c,Placeholders:i,ReadonlyTextareas:l,Disabled:p,Sizes:d,PreventResizing:m,ExpandWithContent:y},500);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels')
      }
    }
  },
  render: () => html\`<syn-textarea label="Comments"></syn-textarea>\`
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text')
      }
    }
  },
  render: () => html\`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>\`
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled')
      }
    }
  },
  render: () => html\`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>\`
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize')
      }
    }
  },
  render: () => html\`<syn-textarea resize="none"></syn-textarea>\`
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto')
      }
    }
  },
  render: () => html\`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>\`
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...h.parameters?.docs?.source}}};const $=["Default","Labels","HelpText","Rows","Placeholders","ReadonlyTextareas","Focus","Disabled","Sizes","Invalid","PreventResizing","ExpandWithContent","Screenshot"];export{s as Default,p as Disabled,y as ExpandWithContent,x as Focus,n as HelpText,u as Invalid,o as Labels,i as Placeholders,m as PreventResizing,l as ReadonlyTextareas,c as Rows,h as Screenshot,d as Sizes,$ as __namedExportsOrder,Z as default};
