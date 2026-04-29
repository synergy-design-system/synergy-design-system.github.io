import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-DVxLZS-s.js";import{t as s}from"./button-Bh72Wntz.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-DniQwiZV.js";import{n as m,t as h}from"./taggedTemplateLiteral-BuD1d7yP.js";import{t as g}from"./input-vCaiuUB5.js";import{t as _}from"./range-Boj5ELHK.js";import{t as v}from"./range-tick-N74Of7yF.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{t(),_(),s(),g(),v(),f(),r(),a(),m(),{userEvent:y}=__STORYBOOK_MODULE_TEST__,{args:C,argTypes:w}=l(`syn-range`),{overrideArgs:T}=c(`syn-range`),{generateTemplate:E}=d(`syn-range`),D={args:T([{name:`value`,type:`attribute`,value:`50`}],C),argTypes:w,component:`syn-range`,parameters:{chromatic:{modes:i},design:o(`41310-323916`),docs:{description:{component:u(`range`,`default`)}}},tags:[`Form`],title:`Components/syn-range`},O={parameters:{controls:{disable:!1},docs:{description:{story:u(`range`,`default`)},story:{height:`80px`}}},render:e=>E({args:e})},k={parameters:{docs:{description:{story:u(`range`,`labels`)}}},render:()=>n`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  `},A={parameters:{docs:{description:{story:u(`range`,`help-text`)}}},render:()=>n`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},j={parameters:{docs:{description:{story:u(`range`,`disabled`)}}},render:()=>n`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  `},M={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`range`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-range`),n=e.querySelector(`syn-button`);t&&n&&(await y.click(n),n.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>n(b||=h([`
    <form class="custom-validity">
      <syn-range
        help-text="This is an error text"
        id="range-invalid"
        max="100"
        min="0"
        value="50"
      >

      </syn-range>
      <syn-button type="submit">Submit</syn-button>
    </form>
    <script type="module">
      document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
      });

      const range = document.querySelector('#range-invalid');
      range.setCustomValidity('Please enter a valid value');
    <\/script>
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
  `]))},N={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`range`,`focus`)},story:{height:`80px`}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-range`);t&&t.focus()},render:()=>n`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  `},P={parameters:{docs:{description:{story:u(`range`,`readonly`)}}},render:()=>n`
    <form>
      <syn-range max="100" min="0" value="50" readonly></syn-range>
    </form>
  `},F={parameters:{docs:{description:{story:u(`range`,`size`)}}},render:()=>n`
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
  `},I={parameters:{docs:{description:{story:u(`range`,`prefix-suffix`)}}},render:()=>n(x||=h([`
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
  `]))},L={parameters:{docs:{description:{story:u(`range`,`custom-track-colors`)},story:{height:`80px`}}},render:()=>n`
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
  `},R={parameters:{docs:{description:{story:u(`range`,`custom-track-offset`)},story:{height:`80px`}}},render:()=>n`
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
  `},z={parameters:{docs:{description:{story:u(`range`,`multi-knob`)},story:{height:`80px`}}},render:()=>n`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  `},B={parameters:{docs:{description:{story:u(`range`,`multi-knob-restrict-movement`)}}},render:()=>n`
    <syn-range
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      restrict-movement
      step="1"
    ></syn-range>
  `},V={parameters:{docs:{description:{story:u(`range-tick`,`default`)}}},render:()=>n`
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
  `},H={parameters:{docs:{description:{story:u(`range`,`tooltip-placement`)},story:{height:`80px`}}},render:()=>n`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},U={parameters:{docs:{description:{story:u(`range`,`tooltip-disabled`)}}},render:()=>n`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  `},W={parameters:{docs:{description:{story:u(`range`,`tooltip-formatter`)}}},render:()=>n(S||=h([`
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
  `]))},G=p({Default:O,Labels:k,HelpText:A,Disabled:j,Readonly:P,Sizes:F,PrefixSuffixText:I,CustomTrackColors:L,CustomTrackOffset:R,MultiThumb:z,Ticks:V,TooltipPlacement:H,TooltipDisabled:U,TooltipFormatter:W},500),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
    <form class="custom-validity">
      <syn-range
        help-text="This is an error text"
        id="range-invalid"
        max="100"
        min="0"
        value="50"
      >

      </syn-range>
      <syn-button type="submit">Submit</syn-button>
    </form>
    <script type="module">
      document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
      });

      const range = document.querySelector('#range-invalid');
      range.setCustomValidity('Please enter a valid value');
    <\/script>
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...G.parameters?.docs?.source}}},K=[`Default`,`Labels`,`HelpText`,`Disabled`,`Invalid`,`Focus`,`Readonly`,`Sizes`,`PrefixSuffixText`,`CustomTrackColors`,`CustomTrackOffset`,`MultiThumb`,`MultiThumbWithRestrictedMovement`,`Ticks`,`TooltipPlacement`,`TooltipDisabled`,`TooltipFormatter`,`Screenshot`]}))();export{L as CustomTrackColors,R as CustomTrackOffset,O as Default,j as Disabled,N as Focus,A as HelpText,M as Invalid,k as Labels,z as MultiThumb,B as MultiThumbWithRestrictedMovement,I as PrefixSuffixText,P as Readonly,G as Screenshot,F as Sizes,V as Ticks,U as TooltipDisabled,W as TooltipFormatter,H as TooltipPlacement,K as __namedExportsOrder,D as default};