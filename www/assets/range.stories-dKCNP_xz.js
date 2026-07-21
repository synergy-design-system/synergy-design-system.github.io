import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-CW-x0Dg3.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-uOW8jMcR.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-OsM0xRkW.js";import{n as m,t as h}from"./taggedTemplateLiteral-C9cDEsPD.js";import{n as g,t as _}from"./decorators-BGT2CoeI.js";import{t as v}from"./input-BlNxePRU.js";import{t as y}from"./range-CChEe792.js";import{t as b}from"./range-tick-D_FFll7r.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y=e((()=>{o(),y(),s(),v(),b(),_(),f(),r(),n(),m(),{userEvent:x}=__STORYBOOK_MODULE_TEST__,{args:T,argTypes:E}=l(`syn-range`),{overrideArgs:D}=c(`syn-range`),{generateTemplate:O}=d(`syn-range`),k={args:D([{name:`value`,type:`attribute`,value:`50`}],T),argTypes:E,component:`syn-range`,parameters:{chromatic:{modes:i},design:t(`41310-323916`),docs:{description:{component:u(`range`,`default`)}}},tags:[`Form`],title:`Components/syn-range`},A={parameters:{controls:{disable:!1},docs:{description:{story:u(`range`,`default`)},story:{height:`80px`}}},render:e=>O({args:e})},j={parameters:{docs:{description:{story:u(`range`,`labels`)}}},render:()=>a`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  `},M={parameters:{docs:{description:{story:u(`range`,`help-text`)}}},render:()=>a`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},N={parameters:{docs:{description:{story:u(`range`,`disabled`)}}},render:()=>a`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  `},P={decorators:[g],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`range`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-range`),n=e.querySelector(`syn-button`);t&&n&&(await x.click(n),n.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a(S||=h([`
    <syn-range
      help-text="This is an error text"
      id="range-invalid"
      max="100"
      min="0"
      value="50"
    ></syn-range>
    <script type="module">
      const range = document.querySelector('#range-invalid');
      range.setCustomValidity('Please enter a valid value');
    <\/script>
  `]))},F={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`range`,`focus`)},story:{height:`80px`}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-range`);t&&t.focus()},render:()=>a`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  `},I={parameters:{docs:{description:{story:u(`range`,`readonly`)}}},render:()=>a`
    <form>
      <syn-range max="100" min="0" value="50" readonly></syn-range>
    </form>
  `},L={parameters:{docs:{description:{story:u(`range`,`size`)}}},render:()=>a`
    <div class="size-wrapper">
      <syn-range label="Small" max="100" min="0" size="small" value="33"></syn-range>
      <syn-range label="Medium" max="100" min="0" size="medium" value="66"></syn-range>
      <syn-range label="Large" max="100" min="0" size="large" value="99"></syn-range>
    </div>
    <style>
      .size-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-medium);
      }
    </style>
  `},R={parameters:{docs:{description:{story:u(`range`,`prefix-suffix`)}}},render:()=>a(C||=h([`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    >
      <span slot="prefix">0</span>
      <span slot="suffix">100</span>
    </syn-range>

    <br>
    <p>This can be used to add input fields or icons.</p>
    <br>

    <syn-range label="Estimated Time" class="suffix-input-field" min="0" max="60" value="30">
      <span slot="prefix">0</span>
      <span slot="suffix">
        <div class="suffix-input">
          60
          <syn-input value="30" type="number" no-spin-buttons min="0" max="60">
            <span slot="suffix">sec</span>
          </syn-input>
        </div>
      </span>
    </syn-range>
    
    <style>
      .suffix-input {
        align-items: center;
        display: flex;
        gap: var(--syn-spacing-medium);

        syn-input {
          max-width: 6.5rem;
        }
      }
    </style>
    <script>
      [...document.querySelectorAll('.suffix-input-field')]
        .forEach(range => {
          const input = range.querySelector('syn-input');

          range.addEventListener('syn-input', e => {
            const { target } = e;
            if (target.tagName !== 'SYN-RANGE') return;
            target.querySelector('syn-input').value = target.value;
            range.setCustomValidity('');
          });

          input.addEventListener('syn-input', e => {
            const { target } = e;
            target.closest('syn-range').value = target.value;

            const inputValidationMessage = target.validationMessage;

            if(inputValidationMessage) {
              range.setCustomValidity(inputValidationMessage);
            } else {
              range.setCustomValidity('');
            }
          });

          input.addEventListener('syn-change', e => {
            const { target } = e;
            if(!target.checkValidity()) {
              range.reportValidity();
            }
          });
        });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:u(`range`,`custom-track-colors`)},story:{height:`80px`}}},render:()=>a`
    <syn-range
      class="custom-track-color"
      max="100"
      min="0"
      value="50"
    ></syn-range>
    <style>
      .custom-track-color {
        --track-color-active: var(--syn-color-success-700);
      }
    </style>
  `},B={parameters:{docs:{description:{story:u(`range`,`custom-track-offset`)},story:{height:`80px`}}},render:()=>a`
    <syn-range
      class="custom-track-offset"
      max="50"
      min="-50"
      value="-15"
    ></syn-range>
    <style>
      .custom-track-offset {
        --track-active-offset: 50%;
      }
    </style>
  `},V={parameters:{docs:{description:{story:u(`range`,`multi-knob`)},story:{height:`80px`}}},render:()=>a`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  `},H={parameters:{docs:{description:{story:u(`range`,`multi-knob-restrict-movement`)}}},render:()=>a`
    <syn-range
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      restrict-movement
      step="1"
    ></syn-range>
  `},U={parameters:{docs:{description:{story:u(`range-tick`,`default`)}}},render:()=>a`
  <div class="wrapper">
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>
    
    <p>${u(`range-tick`,`subdivision`)}</p>
   
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>

  </div>
    <style>
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }

      .syn-range-with-tick nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  `},W={parameters:{docs:{description:{story:u(`range`,`tooltip-placement`)},story:{height:`80px`}}},render:()=>a`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},G={parameters:{docs:{description:{story:u(`range`,`tooltip-disabled`)}}},render:()=>a`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  `},K={parameters:{docs:{description:{story:u(`range`,`tooltip-formatter`)}}},render:()=>a(w||=h([`
    <syn-range
      class="tooltip-formatter"
      max="100"
      min="0"
      value="50"
    >
      <nav slot="ticks">
        <syn-range-tick>0%</syn-range-tick>
        <syn-range-tick>50%</syn-range-tick>
        <syn-range-tick>100%</syn-range-tick>
      </nav>
    </syn-range>
    <style>
      .tooltip-formatter nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
    <script>
      document
        .querySelectorAll('.tooltip-formatter')
        .forEach(tip => {
          tip.tooltipFormatter = value => value + '%';
        });
    <\/script>
  `]))},q=p({Default:A,Labels:j,HelpText:M,Disabled:N,Readonly:I,Sizes:L,PrefixSuffixText:R,CustomTrackColors:z,CustomTrackOffset:B,MultiThumb:V,Ticks:U,TooltipPlacement:W,TooltipDisabled:G,TooltipFormatter:K},500),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('range', 'default')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('range', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const range = canvasElement.querySelector('syn-range');
      const button = canvasElement.querySelector('syn-button');
      if (range && button) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-range
      help-text="This is an error text"
      id="range-invalid"
      max="100"
      min="0"
      value="50"
    ></syn-range>
    <script type="module">
      const range = document.querySelector('#range-invalid');
      range.setCustomValidity('Please enter a valid value');
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('range', 'focus')
      },
      story: {
        height: '80px'
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector('syn-range');
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'readonly')
      }
    }
  },
  render: () => html\`
    <form>
      <syn-range max="100" min="0" value="50" readonly></syn-range>
    </form>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'size')
      }
    }
  },
  render: () => html\`
    <div class="size-wrapper">
      <syn-range label="Small" max="100" min="0" size="small" value="33"></syn-range>
      <syn-range label="Medium" max="100" min="0" size="medium" value="66"></syn-range>
      <syn-range label="Large" max="100" min="0" size="large" value="99"></syn-range>
    </div>
    <style>
      .size-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-medium);
      }
    </style>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    >
      <span slot="prefix">0</span>
      <span slot="suffix">100</span>
    </syn-range>

    <br>
    <p>This can be used to add input fields or icons.</p>
    <br>

    <syn-range label="Estimated Time" class="suffix-input-field" min="0" max="60" value="30">
      <span slot="prefix">0</span>
      <span slot="suffix">
        <div class="suffix-input">
          60
          <syn-input value="30" type="number" no-spin-buttons min="0" max="60">
            <span slot="suffix">sec</span>
          </syn-input>
        </div>
      </span>
    </syn-range>
    
    <style>
      .suffix-input {
        align-items: center;
        display: flex;
        gap: var(--syn-spacing-medium);

        syn-input {
          max-width: 6.5rem;
        }
      }
    </style>
    <script>
      [...document.querySelectorAll('.suffix-input-field')]
        .forEach(range => {
          const input = range.querySelector('syn-input');

          range.addEventListener('syn-input', e => {
            const { target } = e;
            if (target.tagName !== 'SYN-RANGE') return;
            target.querySelector('syn-input').value = target.value;
            range.setCustomValidity('');
          });

          input.addEventListener('syn-input', e => {
            const { target } = e;
            target.closest('syn-range').value = target.value;

            const inputValidationMessage = target.validationMessage;

            if(inputValidationMessage) {
              range.setCustomValidity(inputValidationMessage);
            } else {
              range.setCustomValidity('');
            }
          });

          input.addEventListener('syn-change', e => {
            const { target } = e;
            if(!target.checkValidity()) {
              range.reportValidity();
            }
          });
        });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'custom-track-colors')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range
      class="custom-track-color"
      max="100"
      min="0"
      value="50"
    ></syn-range>
    <style>
      .custom-track-color {
        --track-color-active: var(--syn-color-success-700);
      }
    </style>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'custom-track-offset')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range
      class="custom-track-offset"
      max="50"
      min="-50"
      value="-15"
    ></syn-range>
    <style>
      .custom-track-offset {
        --track-active-offset: 50%;
      }
    </style>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'multi-knob')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    docs: {
      description: {
        story: generateStoryDescription('range', 'multi-knob-restrict-movement')
      }
    }
  },
  render: () => html\`
    <syn-range
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      restrict-movement
      step="1"
    ></syn-range>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'default')
      }
    }
  },
  render: () => html\`
  <div class="wrapper">
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>
    
    <p>\${generateStoryDescription('range-tick', 'subdivision')}</p>
   
    <syn-range
      class="syn-range-with-tick"
      max="100"
      min="0"
      value="50"
      label="Volume"
    >
      <nav slot="ticks">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick subdivision></syn-range-tick>
        <syn-range-tick>100</syn-range-tick>
      </nav>
    </syn-range>

  </div>
    <style>
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }

      .syn-range-with-tick nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'tooltip-placement')
      },
      story: {
        height: '80px'
      }
    }
  },
  render: () => html\`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'tooltip-disabled')
      }
    }
  },
  render: () => html\`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'tooltip-formatter')
      }
    }
  },
  render: () => html\`
    <syn-range
      class="tooltip-formatter"
      max="100"
      min="0"
      value="50"
    >
      <nav slot="ticks">
        <syn-range-tick>0%</syn-range-tick>
        <syn-range-tick>50%</syn-range-tick>
        <syn-range-tick>100%</syn-range-tick>
      </nav>
    </syn-range>
    <style>
      .tooltip-formatter nav {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
    <script>
      document
        .querySelectorAll('.tooltip-formatter')
        .forEach(tip => {
          tip.tooltipFormatter = value => value + '%';
        });
    <\/script>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Disabled,
  Readonly,
  Sizes,
  PrefixSuffixText,
  CustomTrackColors,
  CustomTrackOffset,
  MultiThumb,
  Ticks,
  TooltipPlacement,
  TooltipDisabled,
  TooltipFormatter
}, 500)`,...q.parameters?.docs?.source}}},J=[`Default`,`Labels`,`HelpText`,`Disabled`,`Invalid`,`Focus`,`Readonly`,`Sizes`,`PrefixSuffixText`,`CustomTrackColors`,`CustomTrackOffset`,`MultiThumb`,`MultiThumbWithRestrictedMovement`,`Ticks`,`TooltipPlacement`,`TooltipDisabled`,`TooltipFormatter`,`Screenshot`]}));Y();export{z as CustomTrackColors,B as CustomTrackOffset,A as Default,N as Disabled,F as Focus,M as HelpText,P as Invalid,j as Labels,V as MultiThumb,H as MultiThumbWithRestrictedMovement,R as PrefixSuffixText,I as Readonly,q as Screenshot,L as Sizes,U as Ticks,G as TooltipDisabled,K as TooltipFormatter,W as TooltipPlacement,J as __namedExportsOrder,k as default,Y as t};