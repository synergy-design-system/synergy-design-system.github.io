import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{D as r,_ as i,d as a,f as ee,k as o,p as te}from"./iframe-Dn-tjrvc.js";import{t as ne}from"./button-DSjAtJ0E.js";import{t as s}from"./icon-DehYIkFS.js";import{t as c}from"./option-DZsPsOWq.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-D_QZftXm.js";import{n as h,t as g}from"./taggedTemplateLiteral-pWa2IaV6.js";import{n as re,t as ie}from"./PaddingDecorator-DKDp5bXd.js";import{n as ae,t as oe}from"./decorators-Dqhp2nXi.js";import{n as se,r as ce,t as le}from"./combobox-DYppR4jf.js";import{t as ue}from"./optgroup-3h62RHbG.js";var _,de,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{le(),ne(),s(),c(),ue(),n(),r(),ce(),oe(),p(),ee(),ie(),i(),h(),{userEvent:_}=__STORYBOOK_MODULE_TEST__,{args:b,argTypes:x}=u(`syn-combobox`),{overrideArgs:S}=l(`syn-combobox`),{generateTemplate:C}=f(`syn-combobox`),w={args:b,argTypes:x,component:`syn-combobox`,parameters:{chromatic:{modes:te},design:a(`42207-352063`),docs:{description:{component:d(`combobox`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-combobox`},T=[`Yellow`,`Light Green`,`Grey`,`Green`,`Blue`,`Red`,`Orange`,`Magenta`,`White`,`Purple`,`Pink`,`Black`,`Brown`].sort(),E=e=>`<syn-option value="${e.replaceAll(` `,`_`)}">${e}</syn-option>`,D=e=>o(E(e)),O=()=>T.map(E),k=()=>o(O().join(`
`)),A={parameters:{args:S({name:`default`,type:`slot`,value:`
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>`},b),controls:{disable:!1},docs:{description:{story:d(`combobox`,`default`)}}},render:e=>C({args:e})},j={parameters:{docs:{description:{story:d(`combobox`,`label`)}}},render:()=>t`
    <syn-combobox label="State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},M={parameters:{docs:{description:{story:d(`combobox`,`help-text`)}}},render:()=>t`
    <syn-combobox label="State" help-text="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},N={parameters:{docs:{description:{story:d(`combobox`,`placeholder`)}}},render:()=>t`
    <syn-combobox label="State" help-text="Select a State" placeholder="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},P={decorators:[re()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);t&&t.focus()},render:()=>t`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},F={parameters:{docs:{description:{story:d(`combobox`,`clearable`)}}},render:()=>t`
    <syn-combobox value="Green" clearable>
      ${k()}
    </syn-combobox>
  `},I={parameters:{docs:{description:{story:d(`combobox`,`disabled`)}}},render:()=>t`
    <syn-combobox  disabled placeholder="Disabled">
      ${k()}
    </syn-combobox>
  `},L={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`readonly`)}}},render:()=>t`
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
  `},R={parameters:{docs:{description:{story:d(`combobox`,`multiple`)}}},render:()=>t`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},z={parameters:{docs:{description:{story:d(`combobox`,`initial-values`)}}},render:()=>t`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},B={parameters:{docs:{description:{story:d(`combobox`,`restrict-options`)}}},render:()=>t`
    <syn-combobox value="Option 1" restricted>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>
  `},V={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`no-results`)},story:{inline:!1}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,t.focus();let n=t.shadowRoot?.querySelector(`input`);n&&await _.type(n,`Search term`)},render:()=>t`
    <syn-combobox id="no-results" value="Search term" open restricted>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},H={parameters:{docs:{description:{story:d(`combobox`,`size`)}}},render:()=>t`
    <syn-combobox size="small" placeholder="Small">
      ${k()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      ${k()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      ${k()}
    </syn-combobox>
  `},U={decorators:[ae],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`invalid`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=t.querySelector(`syn-combobox`),r=t.querySelector(`syn-button`);r&&n&&(await _.click(r),r.click())},render:()=>t`
    <syn-combobox required placeholder="Type something" help-text="This is required">
      ${k()}
    </syn-combobox>
  `},W={parameters:{docs:{description:{story:d(`combobox`,`preffix-sufffix`)}}},render:()=>t`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${k()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${k()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${k()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${k()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${k()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${k()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  `},G={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`simple`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>t`
    <syn-combobox label="Preferred Color" value="g">
     ${k()}
    </syn-combobox>
  `},K={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`highlight`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>{let e=se;return t(de||=g([`
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
  `]),k(),e)}},q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`grouping`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>t`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        ${D(`Black`)}
        ${D(`Blue`)}
        ${D(`Brown`)}
      </syn-optgroup>
      <syn-optgroup label="G">
        ${D(`Green`)}
        ${D(`Grey`)}
      </syn-optgroup>
      <syn-optgroup label="L">
        ${D(`Light Green`)}
      </syn-optgroup>
      <syn-optgroup label="M">
        ${D(`Magenta`)}
      </syn-optgroup>
      <syn-optgroup label="O">
        ${D(`Orange`)}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${D(`White`)}
      </syn-optgroup>
      <syn-optgroup label="P">
        ${D(`Pink`)}
        ${D(`Purple`)}
      </syn-optgroup>
      <syn-optgroup label="R">
        ${D(`Red`)}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${D(`White`)}
      </syn-optgroup>
      <syn-optgroup label="Y">
        ${D(`Yellow`)}
      </syn-optgroup>
    </syn-combobox>
  `},J={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`container-height`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>t`
    <syn-combobox id="max-height" label="Preferred color" value="g">
      ${k()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        /* if there is not enough space for the desired height, use the available calculated height */
        max-height: min(var(--auto-size-available-height), 112px);
      }
    </style>
  `},Y={parameters:{docs:{description:{story:d(`combobox`,`async-options`)}}},render:()=>t(v||=g([`
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
  `])),tags:[`skip_mcp`]},X={parameters:{docs:{description:{story:d(`combobox`,`custom-filter`)}}},render:()=>t(y||=g([`
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
  `]),k())},Z=m({Default:A,Labels:j,HelpText:M,Placeholder:N,Clearable:F,Disabled:I,Readonly:L,Multiple:R,SettingInitialValue:z,Restricted:B,NoResultsFound:V,Sizes:H,PrefixSuffixTextAndIcons:W,AsyncOptions:Y,CustomFilter:X},500),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
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
    <syn-combobox required placeholder="Type something" help-text="This is required">
      \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Labels`,`HelpText`,`Placeholder`,`Focus`,`Clearable`,`Disabled`,`Readonly`,`Multiple`,`SettingInitialValue`,`Restricted`,`NoResultsFound`,`Sizes`,`Invalid`,`PrefixSuffixTextAndIcons`,`SimpleSuggests`,`HighlightQuery`,`GroupingQuery`,`SuggestionContainerHeight`,`AsyncOptions`,`CustomFilter`,`Screenshot`]}));$();export{Y as AsyncOptions,F as Clearable,X as CustomFilter,A as Default,I as Disabled,P as Focus,q as GroupingQuery,M as HelpText,K as HighlightQuery,U as Invalid,j as Labels,R as Multiple,V as NoResultsFound,N as Placeholder,W as PrefixSuffixTextAndIcons,L as Readonly,B as Restricted,Z as Screenshot,z as SettingInitialValue,G as SimpleSuggests,H as Sizes,J as SuggestionContainerHeight,Q as __namedExportsOrder,w as default,$ as t};