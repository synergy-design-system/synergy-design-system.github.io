import{h as L}from"./combobox-uEPv2RoJ.js";import"./button-Blu0oPhu.js";import"./icon-Dvb_e3A7.js";import"./option-D4pPg0N7.js";import"./optgroup-of1IO3cu.js";import{g as G,C as F,x as t,o as A}from"./iframe-CvU34O_B.js";import{g as n,s as B,c as I,a as W,b as Y}from"./component--gCMxXrB.js";import{p as j}from"./PaddingDecorator-BmZol4iC.js";import"./class-map-CVI9ScdU.js";import"./synergy-element-B1F-Pf22.js";import"./icon.component-BGlPOzcQ.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./animation-registry-l4L8bmT6.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./form-control.custom.styles-bVkZjL29.js";import"./popup.component-CVeQpAG-.js";import"./if-defined-5E7M7M3a.js";import"./tag.component-D2lLzb9K.js";import"./icon-button.component-C7QorXM_.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./scroll-DgKSCJoS.js";import"./spinner.component-wvmau_pc.js";import"./query-assigned-elements-CblsR2sJ.js";import"./divider.component-DRZaBS02.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";var z=Object.freeze,Q=Object.defineProperty,D=(o,e)=>z(Q(o,"raw",{value:z(o.slice())})),R,P,T;const{userEvent:M}=__STORYBOOK_MODULE_TEST__,{args:_,argTypes:N}=B("syn-combobox"),{overrideArgs:V}=W("syn-combobox"),{generateTemplate:K}=I("syn-combobox"),Po={args:_,argTypes:N,component:"syn-combobox",parameters:{chromatic:{modes:F},design:G("25272-35634"),docs:{description:{component:n("combobox","default")},story:{height:"250px"}}},tags:["Form"],title:"Components/syn-combobox"},U=["Yellow","Light Green","Grey","Green","Blue","Red","Orange","Magenta","White","Purple","Pink","Black","Brown"].sort(),k=o=>`<syn-option value="${o.replaceAll(" ","_")}">${o}</syn-option>`,r=o=>A(k(o)),J=()=>U.map(k),s=()=>A(J().join(`
`)),i={parameters:{args:V({name:"default",type:"slot",value:`
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>`},_),controls:{disable:!1},docs:{description:{story:n("combobox","default")}}},render:o=>K({args:o})},a={parameters:{docs:{description:{story:n("combobox","label")}}},render:()=>t`
    <syn-combobox label="State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},p={parameters:{docs:{description:{story:n("combobox","help-text")}}},render:()=>t`
    <syn-combobox label="State" help-text="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},c={parameters:{docs:{description:{story:n("combobox","placeholder")}}},render:()=>t`
    <syn-combobox label="State" help-text="Select a State" placeholder="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},O={decorators:[j()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","focus")}}},play:({canvasElement:o})=>{const e=o.querySelector("syn-combobox");e&&e.focus()},render:()=>t`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},l={parameters:{docs:{description:{story:n("combobox","clearable")}}},render:()=>t`
    <syn-combobox value="Green" clearable>
      ${s()}
    </syn-combobox>
  `},m={parameters:{docs:{description:{story:n("combobox","disabled")}}},render:()=>t`
    <syn-combobox  disabled placeholder="Disabled">
      ${s()}
    </syn-combobox>
  `},b={parameters:{docs:{description:{story:n("combobox","multiple")}}},render:()=>t`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},y={parameters:{docs:{description:{story:n("combobox","initial-values")}}},render:()=>t`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},d={parameters:{docs:{description:{story:n("combobox","restrict-options")}}},render:()=>t`
    <syn-combobox value="Option 1" restricted>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>
  `},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","no-results")},story:{inline:!1}}},play:async({canvasElement:o})=>{const e=o.querySelector("syn-combobox");await e.updateComplete,e.focus();const S=e.shadowRoot?.querySelector("input");S&&await M.type(S,"Search term")},render:()=>t`
    <syn-combobox id="no-results" value="Search term" open restricted>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},x={parameters:{docs:{description:{story:n("combobox","size")}}},render:()=>t`
    <syn-combobox size="small" placeholder="Small">
      ${s()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      ${s()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      ${s()}
    </syn-combobox>
  `},v={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","invalid")}}},play:async({canvasElement:o})=>{const e=o.querySelector("form"),S=e.querySelector("syn-combobox"),q=e.querySelector("syn-button");q&&S&&(await M.click(q),q.click())},render:()=>t`
    <form class="custom-validity">
      <syn-combobox required placeholder="Type something" help-text="This is required">
        ${s()}
      </syn-combobox>
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
  `},g={parameters:{docs:{description:{story:n("combobox","preffix-sufffix")}}},render:()=>t`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${s()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${s()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${s()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${s()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${s()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${s()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  `},C={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","simple")}}},play:async({canvasElement:o})=>{const e=o.querySelector("syn-combobox");await e.updateComplete,await e.show()},render:()=>t`
    <syn-combobox label="Preferred Color" value="g">
     ${s()}
    </syn-combobox>
  `},$={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","highlight")}}},play:async({canvasElement:o})=>{const e=o.querySelector("syn-combobox");await e.updateComplete,await e.show()},render:()=>{const o=L;return t(R||(R=D([`
    <syn-combobox label="Preferred color" class="highlight-combobox" value="g">
     `,`
    </syn-combobox>
    <script type="module">
      // the highlight option renderer utility function can be imported via:
      // import { highlightOptionRenderer } from '@synergy-design-system/components';

      // preview-ignore:start
      const highlightOptionRenderer = `,`;
      // preview-ignore:end
    
      const comboboxes = document.querySelectorAll('.highlight-combobox');
      comboboxes.forEach((combobox) => {
        combobox.getOption = highlightOptionRenderer;
      });
    <\/script>
  `])),s(),o)}},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","grouping")}}},play:async({canvasElement:o})=>{const e=o.querySelector("syn-combobox");await e.updateComplete,await e.show()},render:()=>t`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        ${r("Black")}
        ${r("Blue")}
        ${r("Brown")}
      </syn-optgroup>
      <syn-optgroup label="G">
        ${r("Green")}
        ${r("Grey")}
      </syn-optgroup>
      <syn-optgroup label="L">
        ${r("Light Green")}
      </syn-optgroup>
      <syn-optgroup label="M">
        ${r("Magenta")}
      </syn-optgroup>
      <syn-optgroup label="O">
        ${r("Orange")}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${r("White")}
      </syn-optgroup>
      <syn-optgroup label="P">
        ${r("Pink")}
        ${r("Purple")}
      </syn-optgroup>
      <syn-optgroup label="R">
        ${r("Red")}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${r("White")}
      </syn-optgroup>
      <syn-optgroup label="Y">
        ${r("Yellow")}
      </syn-optgroup>
    </syn-combobox>
  `},H={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("combobox","container-height")}}},play:async({canvasElement:o})=>{const e=o.querySelector("syn-combobox");await e.updateComplete,await e.show()},render:()=>t`
    <syn-combobox id="max-height" label="Preferred color" value="g">
      ${s()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        /* if there is not enough space for the desired height, use the available calculated height */
        max-height: min(var(--auto-size-available-height), 112px);
      }
    </style>
  `},h={parameters:{docs:{description:{story:n("combobox","async-options")}}},render:()=>t(P||(P=D([`
    <syn-combobox label="Async options" class="async-combobox">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
    <script type="module">
      const comboboxes = document.querySelectorAll('.async-combobox');
      comboboxes.forEach((combobox) => {
        // After api request the options are added async
        let index = 4;
        let timeout = setInterval(() => {
          const option = document.createElement('syn-option');
          const value = 'Option ' + index++;
          option.textContent = value;
          combobox.appendChild(option);
          if(index > 10) {
            clearInterval(timeout);
          }
        }, 4000);
      });
    <\/script>
  `]))),tags:["skip_mcp"]},f={parameters:{docs:{description:{story:n("combobox","custom-filter")}}},render:()=>t(T||(T=D([`
    <syn-combobox label="Custom Filter" class="filter-combobox">
      `,`
    </syn-combobox>
    <script type="module">
      const comboboxes = document.querySelectorAll('.filter-combobox');
      comboboxes.forEach((combobox) => {
        const oldFilter = combobox.filter;
        combobox.filter = (option, queryString) => {
          // only show options for more than 2 characters on text input
          if(queryString && queryString.length > 2) {
            return oldFilter(option, queryString);
          }
          return false;
        }
      });
    <\/script>
  `])),s())},E=Y({Default:i,Labels:a,HelpText:p,Placeholder:c,Clearable:l,Disabled:m,Multiple:b,SettingInitialValue:y,Restricted:d,NoResultsFound:u,Sizes:x,PrefixSuffixTextAndIcons:g,AsyncOptions:h,CustomFilter:f},500);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    args: overrideArgs({
      name: 'default',
      type: 'slot',
      value: \`
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>\`
    }, args),
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'default')
      }
    }
  },
  render: renderArgs => generateTemplate({
    args: renderArgs
  })
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'label')
      }
    }
  },
  render: () => html\`
    <syn-combobox label="State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  \`
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-combobox label="State" help-text="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  \`
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'placeholder')
      }
    }
  },
  render: () => html\`
    <syn-combobox label="State" help-text="Select a State" placeholder="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  \`
}`,...c.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const elm = canvasElement.querySelector<SynCombobox>('syn-combobox');
    if (elm) {
      elm.focus();
    }
  },
  render: () => html\`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  \`
}`,...O.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'clearable')
      }
    }
  },
  render: () => html\`
    <syn-combobox value="Green" clearable>
      \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-combobox  disabled placeholder="Disabled">
      \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'multiple')
      }
    }
  },
  render: () => html\`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  \`
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'initial-values')
      }
    }
  },
  render: () => html\`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  \`
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'restrict-options')
      }
    }
  },
  render: () => html\`
    <syn-combobox value="Option 1" restricted>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'no-results')
      },
      story: {
        inline: false
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    combobox.focus();
    const input = combobox.shadowRoot?.querySelector('input');
    if (input) {
      await userEvent.type(input, 'Search term');
    }
  },
  render: () => html\`
    <syn-combobox id="no-results" value="Search term" open restricted>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  \`
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'size')
      }
    }
  },
  render: () => html\`
    <syn-combobox size="small" placeholder="Small">
      \${createColorOptionsHtml()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      \${createColorOptionsHtml()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector('form')!;
    const combobox = form.querySelector('syn-combobox');
    const button = form.querySelector('syn-button');
    if (button && combobox) {
      // make sure to always fire both events:
      // 1. userEvent.click is needed for storybooks play function to register
      // 2. button.click is needed to really click the button
      // userEvent.click works on native elements only
      await userEvent.click(button);
      button.click();
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-combobox required placeholder="Type something" help-text="This is required">
        \${createColorOptionsHtml()}
      </syn-combobox>
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'preffix-sufffix')
      }
    }
  },
  render: () => html\`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      \${createColorOptionsHtml()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      \${createColorOptionsHtml()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      \${createColorOptionsHtml()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      \${createColorOptionsHtml()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      \${createColorOptionsHtml()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      \${createColorOptionsHtml()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  \`
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'simple')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    await combobox.show();
  },
  render: () => html\`
    <syn-combobox label="Preferred Color" value="g">
     \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'highlight')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    await combobox.show();
  },
  render: () => {
    const optionRenderer = highlightOptionRenderer;
    return html\`
    <syn-combobox label="Preferred color" class="highlight-combobox" value="g">
     \${createColorOptionsHtml()}
    </syn-combobox>
    <script type="module">
      // the highlight option renderer utility function can be imported via:
      // import { highlightOptionRenderer } from '@synergy-design-system/components';

      // preview-ignore:start
      const highlightOptionRenderer = \${optionRenderer};
      // preview-ignore:end
    
      const comboboxes = document.querySelectorAll('.highlight-combobox');
      comboboxes.forEach((combobox) => {
        combobox.getOption = highlightOptionRenderer;
      });
    <\/script>
  \`;
  }
}`,...$.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'grouping')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    await combobox.show();
  },
  render: () => html\`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        \${createColorOptionHtml('Black')}
        \${createColorOptionHtml('Blue')}
        \${createColorOptionHtml('Brown')}
      </syn-optgroup>
      <syn-optgroup label="G">
        \${createColorOptionHtml('Green')}
        \${createColorOptionHtml('Grey')}
      </syn-optgroup>
      <syn-optgroup label="L">
        \${createColorOptionHtml('Light Green')}
      </syn-optgroup>
      <syn-optgroup label="M">
        \${createColorOptionHtml('Magenta')}
      </syn-optgroup>
      <syn-optgroup label="O">
        \${createColorOptionHtml('Orange')}
      </syn-optgroup>
      <syn-optgroup label="W">
        \${createColorOptionHtml('White')}
      </syn-optgroup>
      <syn-optgroup label="P">
        \${createColorOptionHtml('Pink')}
        \${createColorOptionHtml('Purple')}
      </syn-optgroup>
      <syn-optgroup label="R">
        \${createColorOptionHtml('Red')}
      </syn-optgroup>
      <syn-optgroup label="W">
        \${createColorOptionHtml('White')}
      </syn-optgroup>
      <syn-optgroup label="Y">
        \${createColorOptionHtml('Yellow')}
      </syn-optgroup>
    </syn-combobox>
  \`
}`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'container-height')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    await combobox.show();
  },
  render: () => html\`
    <syn-combobox id="max-height" label="Preferred color" value="g">
      \${createColorOptionsHtml()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        /* if there is not enough space for the desired height, use the available calculated height */
        max-height: min(var(--auto-size-available-height), 112px);
      }
    </style>
  \`
}`,...H.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'async-options')
      }
    }
  },
  render: () => html\`
    <syn-combobox label="Async options" class="async-combobox">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
    <script type="module">
      const comboboxes = document.querySelectorAll('.async-combobox');
      comboboxes.forEach((combobox) => {
        // After api request the options are added async
        let index = 4;
        let timeout = setInterval(() => {
          const option = document.createElement('syn-option');
          const value = 'Option ' + index++;
          option.textContent = value;
          combobox.appendChild(option);
          if(index > 10) {
            clearInterval(timeout);
          }
        }, 4000);
      });
    <\/script>
  \`,
  tags: ['skip_mcp']
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'custom-filter')
      }
    }
  },
  render: () => html\`
    <syn-combobox label="Custom Filter" class="filter-combobox">
      \${createColorOptionsHtml()}
    </syn-combobox>
    <script type="module">
      const comboboxes = document.querySelectorAll('.filter-combobox');
      comboboxes.forEach((combobox) => {
        const oldFilter = combobox.filter;
        combobox.filter = (option, queryString) => {
          // only show options for more than 2 characters on text input
          if(queryString && queryString.length > 2) {
            return oldFilter(option, queryString);
          }
          return false;
        }
      });
    <\/script>
  \`
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Placeholder,
  Clearable,
  Disabled,
  Multiple,
  SettingInitialValue,
  Restricted,
  NoResultsFound,
  Sizes,
  PrefixSuffixTextAndIcons,
  AsyncOptions,
  CustomFilter
}, 500)`,...E.parameters?.docs?.source}}};const To=["Default","Labels","HelpText","Placeholder","Focus","Clearable","Disabled","Multiple","SettingInitialValue","Restricted","NoResultsFound","Sizes","Invalid","PrefixSuffixTextAndIcons","SimpleSuggests","HighlightQuery","GroupingQuery","SuggestionContainerHeight","AsyncOptions","CustomFilter","Screenshot"];export{h as AsyncOptions,l as Clearable,f as CustomFilter,i as Default,m as Disabled,O as Focus,w as GroupingQuery,p as HelpText,$ as HighlightQuery,v as Invalid,a as Labels,b as Multiple,u as NoResultsFound,c as Placeholder,g as PrefixSuffixTextAndIcons,d as Restricted,E as Screenshot,y as SettingInitialValue,C as SimpleSuggests,x as Sizes,H as SuggestionContainerHeight,To as __namedExportsOrder,Po as default};
