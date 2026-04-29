import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as i,d as a,f as ee,g as o,u as s}from"./iframe-CIeU5pXv.js";import{t as c}from"./button-DQZ97ppS.js";import{t as l}from"./icon-EWLg8ZFU.js";import{a as te,i as ne,n as u,o as d,r as f,t as p}from"./component-Dma-UHGC.js";import{n as m,t as h}from"./PaddingDecorator-CNEzbfQ8.js";import{n as g,t as _}from"./taggedTemplateLiteral-BuD1d7yP.js";import{n as v,r as y,t as re}from"./combobox-BdYE5fI4.js";import{t as ie}from"./option-Bv6yMDYn.js";import{t as ae}from"./optgroup-DNQeF38d.js";var b,oe,se,ce,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{re(),c(),l(),ie(),ae(),n(),i(),y(),f(),a(),h(),o(),g(),{userEvent:b}=__STORYBOOK_MODULE_TEST__,{args:x,argTypes:S}=ne(`syn-combobox`),{overrideArgs:C}=te(`syn-combobox`),{generateTemplate:w}=d(`syn-combobox`),T={args:x,argTypes:S,component:`syn-combobox`,parameters:{chromatic:{modes:ee},design:s(`42207-352063`),docs:{description:{component:u(`combobox`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-combobox`},E=[`Yellow`,`Light Green`,`Grey`,`Green`,`Blue`,`Red`,`Orange`,`Magenta`,`White`,`Purple`,`Pink`,`Black`,`Brown`].sort(),D=e=>`<syn-option value="${e.replaceAll(` `,`_`)}">${e}</syn-option>`,O=e=>t(D(e)),k=()=>E.map(D),A=()=>t(k().join(`
`)),j={parameters:{args:C({name:`default`,type:`slot`,value:`
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>`},x),controls:{disable:!1},docs:{description:{story:u(`combobox`,`default`)}}},render:e=>w({args:e})},M={parameters:{docs:{description:{story:u(`combobox`,`label`)}}},render:()=>r`
    <syn-combobox label="State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},N={parameters:{docs:{description:{story:u(`combobox`,`help-text`)}}},render:()=>r`
    <syn-combobox label="State" help-text="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},P={parameters:{docs:{description:{story:u(`combobox`,`placeholder`)}}},render:()=>r`
    <syn-combobox label="State" help-text="Select a State" placeholder="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},F={decorators:[m()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);t&&t.focus()},render:()=>r`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},I={parameters:{docs:{description:{story:u(`combobox`,`clearable`)}}},render:()=>r`
    <syn-combobox value="Green" clearable>
      ${A()}
    </syn-combobox>
  `},L={parameters:{docs:{description:{story:u(`combobox`,`disabled`)}}},render:()=>r`
    <syn-combobox  disabled placeholder="Disabled">
      ${A()}
    </syn-combobox>
  `},R={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`readonly`)}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-combobox placeholder="Readonly" value="option-1" readonly>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-combobox>
      <syn-combobox max-options-visible="2" multiple placeholder="Readonly" value="option-1 option-2 option-3" readonly>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-combobox>
    </div>
  `},z={parameters:{docs:{description:{story:u(`combobox`,`multiple`)}}},render:()=>r`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},B={parameters:{docs:{description:{story:u(`combobox`,`initial-values`)}}},render:()=>r`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},V={parameters:{docs:{description:{story:u(`combobox`,`restrict-options`)}}},render:()=>r`
    <syn-combobox value="Option 1" restricted>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>
  `},H={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`no-results`)},story:{inline:!1}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,t.focus();let n=t.shadowRoot?.querySelector(`input`);n&&await b.type(n,`Search term`)},render:()=>r`
    <syn-combobox id="no-results" value="Search term" open restricted>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},U={parameters:{docs:{description:{story:u(`combobox`,`size`)}}},render:()=>r`
    <syn-combobox size="small" placeholder="Small">
      ${A()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      ${A()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      ${A()}
    </syn-combobox>
  `},W={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`invalid`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=t.querySelector(`syn-combobox`),r=t.querySelector(`syn-button`);r&&n&&(await b.click(r),r.click())},render:()=>r`
    <form class="custom-validity">
      <syn-combobox required placeholder="Type something" help-text="This is required">
        ${A()}
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
  `},G={parameters:{docs:{description:{story:u(`combobox`,`preffix-sufffix`)}}},render:()=>r`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${A()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${A()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${A()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${A()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${A()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${A()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  `},K={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`simple`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>r`
    <syn-combobox label="Preferred Color" value="g">
     ${A()}
    </syn-combobox>
  `},q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`highlight`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>{let e=v;return r(oe||=_([`
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
  `]),A(),e)}},J={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`grouping`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>r`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        ${O(`Black`)}
        ${O(`Blue`)}
        ${O(`Brown`)}
      </syn-optgroup>
      <syn-optgroup label="G">
        ${O(`Green`)}
        ${O(`Grey`)}
      </syn-optgroup>
      <syn-optgroup label="L">
        ${O(`Light Green`)}
      </syn-optgroup>
      <syn-optgroup label="M">
        ${O(`Magenta`)}
      </syn-optgroup>
      <syn-optgroup label="O">
        ${O(`Orange`)}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${O(`White`)}
      </syn-optgroup>
      <syn-optgroup label="P">
        ${O(`Pink`)}
        ${O(`Purple`)}
      </syn-optgroup>
      <syn-optgroup label="R">
        ${O(`Red`)}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${O(`White`)}
      </syn-optgroup>
      <syn-optgroup label="Y">
        ${O(`Yellow`)}
      </syn-optgroup>
    </syn-combobox>
  `},Y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`combobox`,`container-height`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>r`
    <syn-combobox id="max-height" label="Preferred color" value="g">
      ${A()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        /* if there is not enough space for the desired height, use the available calculated height */
        max-height: min(var(--auto-size-available-height), 112px);
      }
    </style>
  `},X={parameters:{docs:{description:{story:u(`combobox`,`async-options`)}}},render:()=>r(se||=_([`
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
  `])),tags:[`skip_mcp`]},Z={parameters:{docs:{description:{story:u(`combobox`,`custom-filter`)}}},render:()=>r(ce||=_([`
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
  `]),A())},Q=p({Default:j,Labels:M,HelpText:N,Placeholder:P,Clearable:I,Disabled:L,Readonly:R,Multiple:z,SettingInitialValue:B,Restricted:V,NoResultsFound:H,Sizes:U,PrefixSuffixTextAndIcons:G,AsyncOptions:X,CustomFilter:Z},500),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-combobox placeholder="Readonly" value="option-1" readonly>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-combobox>
      <syn-combobox max-options-visible="2" multiple placeholder="Readonly" value="option-1 option-2 option-3" readonly>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-combobox>
    </div>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Placeholder,
  Clearable,
  Disabled,
  Readonly,
  Multiple,
  SettingInitialValue,
  Restricted,
  NoResultsFound,
  Sizes,
  PrefixSuffixTextAndIcons,
  AsyncOptions,
  CustomFilter
}, 500)`,...Q.parameters?.docs?.source}}},$=[`Default`,`Labels`,`HelpText`,`Placeholder`,`Focus`,`Clearable`,`Disabled`,`Readonly`,`Multiple`,`SettingInitialValue`,`Restricted`,`NoResultsFound`,`Sizes`,`Invalid`,`PrefixSuffixTextAndIcons`,`SimpleSuggests`,`HighlightQuery`,`GroupingQuery`,`SuggestionContainerHeight`,`AsyncOptions`,`CustomFilter`,`Screenshot`]}))();export{X as AsyncOptions,I as Clearable,Z as CustomFilter,j as Default,L as Disabled,F as Focus,J as GroupingQuery,N as HelpText,q as HighlightQuery,W as Invalid,M as Labels,z as Multiple,H as NoResultsFound,P as Placeholder,G as PrefixSuffixTextAndIcons,R as Readonly,V as Restricted,Q as Screenshot,B as SettingInitialValue,K as SimpleSuggests,U as Sizes,Y as SuggestionContainerHeight,$ as __namedExportsOrder,T as default};