import{h as k}from"./combobox-BtP4t_Uh.js";import"./button-BVpA511D.js";import"./icon-DgiHrfGP.js";import"./option-BOrb-NfY.js";import"./optgroup-31xUirCR.js";import{x as r}from"./directive-helpers-DGrfjhaU.js";import{o as z}from"./unsafe-html-Cjw1QqN7.js";import{u as L}from"./index-CSCA1apM.js";import{g as e,a as T,s as G,d as M,b as R,c as F}from"./component-DyVzHN2b.js";import"./static-gmWA-8Kq.js";import"./property-BGzwfL48.js";import"./library-6WV9-XO2.js";import"./query-DAIS6qJ0.js";import"./animation-registry-l4L8bmT6.js";import"./default-value-DcEsLq7D.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./component.styles-DHLjuUKI.js";import"./form-control.custom.styles-CRbuQ0tx.js";import"./icon.component-D5Mb01w1.js";import"./popup.component-7UFwADvf.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./scroll-DgKSCJoS.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./if-defined-B2ZFWIyt.js";import"./spinner.component-C7BVFWvG.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./divider.component-DTR0mtHH.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-DLbbekGf.js";var w=Object.freeze,_=Object.defineProperty,$=(o,t)=>w(_(o,"raw",{value:w(o.slice())})),H,q,E;const{args:D,argTypes:B}=G("syn-combobox"),{overrideArgs:I}=R("syn-combobox"),{generateTemplate:W}=M("syn-combobox"),To={args:D,argTypes:B,component:"syn-combobox",parameters:{design:T("25272-35634"),docs:{description:{component:e("combobox","default")},story:{height:"250px"}}},title:"Components/syn-combobox"},Y=["Yellow","Light Green","Grey","Green","Blue","Red","Orange","Magenta","White","Purple","Pink","Black","Brown"].sort(),P=o=>`<syn-option value="${o.replaceAll(" ","_")}">${o}</syn-option>`,s=o=>z(P(o)),j=()=>Y.map(P),n=()=>z(j().join(`
`)),a={parameters:{args:I({name:"default",type:"slot",value:`
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>`},D),controls:{disable:!1},docs:{description:{story:e("combobox","default")}}},render:o=>W({args:o})},i={parameters:{docs:{description:{story:e("combobox","label")}}},render:()=>r`
    <syn-combobox label="State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},c={parameters:{docs:{description:{story:e("combobox","help-text")}}},render:()=>r`
    <syn-combobox label="State" help-text="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},l={parameters:{docs:{description:{story:e("combobox","placeholder")}}},render:()=>r`
    <syn-combobox label="State" help-text="Select a State" placeholder="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},x={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","focus")}}},play:({canvasElement:o})=>{o.querySelector("syn-combobox")?.focus()},render:()=>r`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},p={parameters:{docs:{description:{story:e("combobox","clearable")}}},render:()=>r`
    <syn-combobox value="Green" clearable>
      ${n()}
    </syn-combobox>
  `},m={parameters:{docs:{description:{story:e("combobox","disabled")}}},render:()=>r`
    <syn-combobox  disabled placeholder="Disabled">
      ${n()}
    </syn-combobox>
  `},b={parameters:{docs:{description:{story:e("combobox","size")}}},render:()=>r`
    <syn-combobox size="small" placeholder="Small">
      ${n()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      ${n()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      ${n()}
    </syn-combobox>
  `},h={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","invalid")}}},play:async({canvasElement:o})=>{const t=o.querySelector("form"),A=t.querySelector("syn-combobox"),C=t.querySelector("syn-button");C&&A&&(await L.click(C),C.click())},render:()=>r`
    <form class="custom-validity">
      <syn-combobox required placeholder="Type something" help-text="This is required">
        ${n()}
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
  `},y={parameters:{docs:{description:{story:e("combobox","preffix-sufffix")}}},render:()=>r`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${n()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${n()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${n()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${n()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${n()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${n()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  `},g={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","simple")}}},play:async({canvasElement:o})=>{const t=o.querySelector("syn-combobox");await t.updateComplete,await t.show()},render:()=>r`
    <syn-combobox label="Preferred Color" value="g">
     ${n()}
    </syn-combobox>
  `},f={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","highlight")}}},play:async({canvasElement:o})=>{const t=o.querySelector("syn-combobox");await t.updateComplete,await t.show()},render:()=>{const o=k;return r(H||(H=$([`
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
  `])),n(),o)}},S={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","grouping")}}},play:async({canvasElement:o})=>{const t=o.querySelector("syn-combobox");await t.updateComplete,await t.show()},render:()=>r`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        ${s("Black")}
        ${s("Blue")}
        ${s("Brown")}
      </syn-optgroup>
      <syn-optgroup label="G">
        ${s("Green")}
        ${s("Grey")}
      </syn-optgroup>
      <syn-optgroup label="L">
        ${s("Light Green")}
      </syn-optgroup>
      <syn-optgroup label="M">
        ${s("Magenta")}
      </syn-optgroup>
      <syn-optgroup label="O">
        ${s("Orange")}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${s("White")}
      </syn-optgroup>
      <syn-optgroup label="P">
        ${s("Pink")}
        ${s("Purple")}
      </syn-optgroup>
      <syn-optgroup label="R">
        ${s("Red")}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${s("White")}
      </syn-optgroup>
      <syn-optgroup label="Y">
        ${s("Yellow")}
      </syn-optgroup>
    </syn-combobox>
  `},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","container-height")}}},play:async({canvasElement:o})=>{const t=o.querySelector("syn-combobox");await t.updateComplete,await t.show()},render:()=>r`
    <syn-combobox id="max-height" label="Preferred color" value="g">
      ${n()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        /* if there is not enough space for the desired height, use the available calculated height */
        max-height: min(var(--auto-size-available-height), 112px);
      }
    </style>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","async-options")}}},render:()=>r(q||(q=$([`
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
  `])))},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("combobox","custom-filter")}}},render:()=>r(E||(E=$([`
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
  `])),n())},v=F({Default:a,Labels:i,HelpText:c,Placeholder:l,Clearable:p,Disabled:m,Sizes:b,PrefixSuffixTextAndIcons:y,AsyncOptions:d,CustomFilter:u},500);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: (renderArgs: unknown) => generateTemplate({
    args: renderArgs
  })
} as Story`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    elm?.focus();
  },
  render: () => html\`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  \`
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
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
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Placeholder,
  Clearable,
  Disabled,
  Sizes,
  PrefixSuffixTextAndIcons,
  AsyncOptions,
  CustomFilter
}, 500)`,...v.parameters?.docs?.source}}};const Go=["Default","Labels","HelpText","Placeholder","Focus","Clearable","Disabled","Sizes","Invalid","PrefixSuffixTextAndIcons","SimpleSuggests","HighlightQuery","GroupingQuery","SuggestionContainerHeight","AsyncOptions","CustomFilter","Screenshot"];export{d as AsyncOptions,p as Clearable,u as CustomFilter,a as Default,m as Disabled,x as Focus,S as GroupingQuery,c as HelpText,f as HighlightQuery,h as Invalid,i as Labels,l as Placeholder,y as PrefixSuffixTextAndIcons,v as Screenshot,g as SimpleSuggests,b as Sizes,O as SuggestionContainerHeight,Go as __namedExportsOrder,To as default};
