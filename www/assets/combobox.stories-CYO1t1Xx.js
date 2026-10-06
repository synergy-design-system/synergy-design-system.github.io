import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,a as r,h as ee,l as i}from"./preview-YKqmsJfa.js";import{c as a,t as te}from"./lit-D4-0ovri.js";import{t as o}from"./button-Dak2maL1.js";import{t as s}from"./icon-Cn0LlPhL.js";import{t as c}from"./option-CLTM2r5D.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-CXd55hIp.js";import{t as h}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as g,t as ne}from"./PaddingDecorator-Dx4_2Fla.js";import{n as re,t as ie}from"./decorators-C02eqVpo.js";import{t as ae}from"./combobox-CV3g0mGn.js";import{t as oe}from"./spinner-CCbvrdOt.js";import{t as se}from"./optgroup-D_qdDm-h.js";var ce=t({AsyncOptions:()=>q,Clearable:()=>N,CustomFilter:()=>J,Default:()=>O,Disabled:()=>P,EmptyFilter:()=>Y,EndlessScrolling:()=>X,Focus:()=>M,GroupingQuery:()=>G,HelpText:()=>A,HighlightQuery:()=>W,Invalid:()=>V,Labels:()=>k,Multiple:()=>I,NoResultsFound:()=>z,Placeholder:()=>j,PrefixSuffixTextAndIcons:()=>H,Readonly:()=>F,Restricted:()=>R,Screenshot:()=>Z,SettingInitialValue:()=>L,SimpleSuggests:()=>U,Sizes:()=>B,SuggestionContainerHeight:()=>K,__namedExportsOrder:()=>Q,default:()=>S}),_,le,ue,de,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ae(),o(),s(),oe(),c(),se(),te(),ee(),ie(),p(),ne(),i(),{userEvent:_}=__STORYBOOK_MODULE_TEST__,{args:v,argTypes:y}=u(`syn-combobox`),{overrideArgs:b}=l(`syn-combobox`),{generateTemplate:x}=f(`syn-combobox`),S={args:v,argTypes:y,component:`syn-combobox`,parameters:{chromatic:{modes:r},docs:{description:{component:d(`combobox`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-combobox`},C=[`Yellow`,`Light Green`,`Grey`,`Green`,`Blue`,`Red`,`Orange`,`Magenta`,`White`,`Purple`,`Pink`,`Black`,`Brown`].sort(),w=e=>`<syn-option value="${e.replaceAll(` `,`_`)}">${e}</syn-option>`,T=e=>n(w(e)),E=()=>C.map(w),D=()=>n(E().join(`
`)),O={parameters:{args:b({name:`default`,type:`slot`,value:`
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>`},v),controls:{disable:!1},docs:{description:{story:d(`combobox`,`default`)}}},render:e=>x({args:e})},k={parameters:{docs:{description:{story:d(`combobox`,`label`)}}},render:()=>a`
    <syn-combobox label="State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},A={parameters:{docs:{description:{story:d(`combobox`,`help-text`)}}},render:()=>a`
    <syn-combobox label="State" help-text="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},j={parameters:{docs:{description:{story:d(`combobox`,`placeholder`)}}},render:()=>a`
    <syn-combobox label="State" help-text="Select a State" placeholder="Select a State">
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},M={decorators:[g()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);t&&t.focus()},render:()=>a`
    <syn-combobox>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},N={parameters:{docs:{description:{story:d(`combobox`,`clearable`)}}},render:()=>a`
    <syn-combobox value="Green" clearable>
      ${D()}
    </syn-combobox>
  `},P={parameters:{docs:{description:{story:d(`combobox`,`disabled`)}}},render:()=>a`
    <syn-combobox  disabled placeholder="Disabled">
      ${D()}
    </syn-combobox>
  `},F={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`readonly`)}}},render:()=>a`
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
  `},I={parameters:{docs:{description:{story:d(`combobox`,`multiple`)}}},render:()=>a`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},L={parameters:{docs:{description:{story:d(`combobox`,`initial-values`)}}},render:()=>a`
    <syn-combobox value="option-1 option-2 option-3" multiple clearable max-options-visible="2">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-option value="option-4">Option 4</syn-option>
      <syn-option value="option-5">Option 5</syn-option>
      <syn-option value="option-6">Option 6</syn-option>
    </syn-combobox>
  `},R={parameters:{docs:{description:{story:d(`combobox`,`restrict-options`)}}},render:()=>a`
    <syn-combobox value="Option 1" restricted>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>
  `},z={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`no-results`)},story:{inline:!1}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,t.focus();let n=t.shadowRoot?.querySelector(`input`);n&&await _.type(n,`Search term`)},render:()=>a`
    <syn-combobox id="no-results" value="Search term" open restricted>
      <syn-option>Option 1</syn-option>
      <syn-option>Option 2</syn-option>
      <syn-option>Option 3</syn-option>
    </syn-combobox>
  `},B={parameters:{docs:{description:{story:d(`combobox`,`size`)}}},render:()=>a`
    <syn-combobox size="small" placeholder="Small">
      ${D()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      ${D()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      ${D()}
    </syn-combobox>
  `},V={decorators:[re],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`invalid`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=t.querySelector(`syn-combobox`),r=t.querySelector(`syn-button`);r&&n&&(await _.click(r),r.click())},render:()=>a`
    <syn-combobox required placeholder="Type something" help-text="This is required">
      ${D()}
    </syn-combobox>
  `},H={parameters:{docs:{description:{story:d(`combobox`,`preffix-sufffix`)}}},render:()=>a`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${D()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${D()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${D()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${D()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${D()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${D()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  `},U={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`simple`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>a`
    <syn-combobox label="Preferred Color" value="g">
     ${D()}
    </syn-combobox>
  `},W={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`highlight`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>a`
    <syn-combobox label="Preferred color" value="g" getOption="highlight">
      ${D()}
    </syn-combobox>
  `},G={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`grouping`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>a`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        ${T(`Black`)}
        ${T(`Blue`)}
        ${T(`Brown`)}
      </syn-optgroup>
      <syn-optgroup label="G">
        ${T(`Green`)}
        ${T(`Grey`)}
      </syn-optgroup>
      <syn-optgroup label="L">
        ${T(`Light Green`)}
      </syn-optgroup>
      <syn-optgroup label="M">
        ${T(`Magenta`)}
      </syn-optgroup>
      <syn-optgroup label="O">
        ${T(`Orange`)}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${T(`White`)}
      </syn-optgroup>
      <syn-optgroup label="P">
        ${T(`Pink`)}
        ${T(`Purple`)}
      </syn-optgroup>
      <syn-optgroup label="R">
        ${T(`Red`)}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${T(`White`)}
      </syn-optgroup>
      <syn-optgroup label="Y">
        ${T(`Yellow`)}
      </syn-optgroup>
    </syn-combobox>
  `},K={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`combobox`,`container-height`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-combobox`);await t.updateComplete,await t.show()},render:()=>a`
    <syn-combobox id="max-height" label="Preferred color" value="g">
      ${D()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        /* if there is not enough space for the desired height, use the available calculated height */
        max-height: min(var(--auto-size-available-height), 112px);
      }
    </style>
  `},q={parameters:{docs:{description:{story:d(`combobox`,`async-options`)}}},render:()=>a(le||=h([`
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
  `])),tags:[`skip_mcp`]},J={parameters:{docs:{description:{story:d(`combobox`,`custom-filter`)}}},render:()=>a(ue||=h([`
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
  `]),D())},Y={parameters:{docs:{description:{story:d(`combobox`,`empty-filter`)}}},render:()=>a`
    <syn-combobox
      class="empty-filter-combobox"
      filter="none"
      getOption="highlight"
      label="Empty Filter"
      multiple
    >
      ${D()}
    </syn-combobox>
  `},X={parameters:{docs:{description:{story:d(`combobox`,`endless-scrolling`)},story:{inline:!1}}},render:()=>a(de||=h([`
    <syn-combobox label="Option" class="endless-scrolling-combobox">
      <syn-spinner slot="prefix" style="display: none;"></syn-spinner>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>

    <script type="module">
      const comboboxes = document.querySelectorAll('.endless-scrolling-combobox');
      comboboxes.forEach((combobox) => {
        const loadingIndicator = combobox.querySelector('syn-spinner');
        let nextOption = 4;
        const maxOptions = 40;
        const pageSize = 10;

        // Replace the delay and generated data with your API request. Return each page as
        // { value, label } items, using whatever page or cursor parameter your API expects.
        const fetchNextPage = async (startIndex) => {
          await new Promise(resolve => setTimeout(resolve, 600));
          const endIndex = Math.min(startIndex + pageSize, maxOptions + 1);

          return Array.from({ length: endIndex - startIndex }, (_, offset) => {
            const index = startIndex + offset;
            return {
              label: 'Option ' + index,
              value: 'option-' + index,
            };
          });
        };

        // This handler runs for each syn-end-reached event. Adapt the end-of-data check and
        // request parameters to your API, then map its results to options and append the page.
        const loadNextPage = async () => {
          if (nextOption > maxOptions) {
            return;
          }

          loadingIndicator.style.display = 'inline-block';
          const options = await fetchNextPage(nextOption);
          const fragment = document.createDocumentFragment();

          options.forEach(({ value, label }) => {
            const option = document.createElement('syn-option');
            option.value = value;
            option.textContent = label;
            fragment.appendChild(option);
          });

          combobox.appendChild(fragment);
          nextOption += options.length;
          loadingIndicator.style.display = 'none';
        };

        // The combobox re-arms the sentinel after the new options are added.
        combobox.addEventListener('syn-end-reached', loadNextPage);
      });
    <\/script>
  `]))},Z=m({Default:O,Labels:k,HelpText:A,Placeholder:j,Clearable:N,Disabled:P,Readonly:F,Multiple:I,SettingInitialValue:L,Restricted:R,NoResultsFound:z,Sizes:B,PrefixSuffixTextAndIcons:H,AsyncOptions:q,CustomFilter:J,EmptyFilter:Y,EndlessScrolling:X},500),Q=[`Default`,`Labels`,`HelpText`,`Placeholder`,`Focus`,`Clearable`,`Disabled`,`Readonly`,`Multiple`,`SettingInitialValue`,`Restricted`,`NoResultsFound`,`Sizes`,`Invalid`,`PrefixSuffixTextAndIcons`,`SimpleSuggests`,`HighlightQuery`,`GroupingQuery`,`SuggestionContainerHeight`,`AsyncOptions`,`CustomFilter`,`EmptyFilter`,`EndlessScrolling`,`Screenshot`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
  render: () => html\`
    <syn-combobox label="Preferred color" value="g" getOption="highlight">
      \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'empty-filter')
      }
    }
  },
  render: () => html\`
    <syn-combobox
      class="empty-filter-combobox"
      filter="none"
      getOption="highlight"
      label="Empty Filter"
      multiple
    >
      \${createColorOptionsHtml()}
    </syn-combobox>
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('combobox', 'endless-scrolling')
      },
      story: {
        inline: false
      }
    }
  },
  render: () => html\`
    <syn-combobox label="Option" class="endless-scrolling-combobox">
      <syn-spinner slot="prefix" style="display: none;"></syn-spinner>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-combobox>

    <script type="module">
      const comboboxes = document.querySelectorAll('.endless-scrolling-combobox');
      comboboxes.forEach((combobox) => {
        const loadingIndicator = combobox.querySelector('syn-spinner');
        let nextOption = 4;
        const maxOptions = 40;
        const pageSize = 10;

        // Replace the delay and generated data with your API request. Return each page as
        // { value, label } items, using whatever page or cursor parameter your API expects.
        const fetchNextPage = async (startIndex) => {
          await new Promise(resolve => setTimeout(resolve, 600));
          const endIndex = Math.min(startIndex + pageSize, maxOptions + 1);

          return Array.from({ length: endIndex - startIndex }, (_, offset) => {
            const index = startIndex + offset;
            return {
              label: 'Option ' + index,
              value: 'option-' + index,
            };
          });
        };

        // This handler runs for each syn-end-reached event. Adapt the end-of-data check and
        // request parameters to your API, then map its results to options and append the page.
        const loadNextPage = async () => {
          if (nextOption > maxOptions) {
            return;
          }

          loadingIndicator.style.display = 'inline-block';
          const options = await fetchNextPage(nextOption);
          const fragment = document.createDocumentFragment();

          options.forEach(({ value, label }) => {
            const option = document.createElement('syn-option');
            option.value = value;
            option.textContent = label;
            fragment.appendChild(option);
          });

          combobox.appendChild(fragment);
          nextOption += options.length;
          loadingIndicator.style.display = 'none';
        };

        // The combobox re-arms the sentinel after the new options are added.
        combobox.addEventListener('syn-end-reached', loadNextPage);
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
  CustomFilter,
  EmptyFilter,
  EndlessScrolling
}, 500)`,...Z.parameters?.docs?.source}}}})))()}export{ce as n,$ as r,O as t};