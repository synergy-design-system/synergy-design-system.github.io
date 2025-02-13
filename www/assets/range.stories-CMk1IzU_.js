import{u as V}from"./index-DTU3eezp.js";import{k as r}from"./directive-helpers-B-JxG5af.js";import{g as e,a as C,s as q,b as z,c as M,d as L}from"./component-ByGZX7dA.js";import"./if-defined-98Biveud.js";import"./ref-DMm6gEez.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./icon-button-CDyIbTum.js";import"./library-UYMiFSYt.js";import"./icon.component-C6LVZrc_.js";import"./index-Vx7n56Jp.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-DIZFGV1d.js";var T=Object.freeze,P=Object.defineProperty,S=(t,s)=>T(P(t,"raw",{value:T(t.slice())})),D,w,E;const{args:_,argTypes:A}=q("syn-range"),{overrideArgs:F}=z("syn-range"),{generateTemplate:j}=M("syn-range"),Z={args:F([{name:"value",type:"attribute",value:"50"}],_),argTypes:A,component:"syn-range",parameters:{design:C("20575-35283"),docs:{description:{component:e("range","default")}}},title:"Components/syn-range"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("range","default")},story:{height:"80px"}}},render:t=>j({args:t})},a={parameters:{docs:{description:{story:e("range","labels")}}},render:()=>r`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  `},i={parameters:{docs:{description:{story:e("range","help-text")}}},render:()=>r`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},o={parameters:{docs:{description:{story:e("range","disabled")}}},render:()=>r`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  `},c={parameters:{docs:{description:{story:e("range","invalid")}}},play:async({canvasElement:t})=>{try{const s=t.querySelector("syn-range"),h=t.querySelector("syn-button");s&&h&&(await V.click(h),h.click())}catch(s){console.error("Error in play function:",s)}},render:()=>r(D||(D=S([`
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
  `])))},k={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("range","focus")},story:{height:"80px"}}},play:({canvasElement:t})=>{const s=t.querySelector("syn-range");s&&s.focus()},render:()=>r`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  `},l={parameters:{docs:{description:{story:e("range","size")}}},render:()=>r`
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
  `},p={parameters:{docs:{description:{story:e("range","prefix-suffix")}}},render:()=>r(w||(w=S([`
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
          min-width: 0;
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
  `])))},m={parameters:{docs:{description:{story:e("range","custom-track-colors")},story:{height:"80px"}}},render:()=>r`
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
  `},y={parameters:{docs:{description:{story:e("range","custom-track-offset")},story:{height:"80px"}}},render:()=>r`
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
  `},u={parameters:{docs:{description:{story:e("range","multi-knob")},story:{height:"80px"}}},render:()=>r`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  `},x={parameters:{docs:{description:{story:e("range","multi-knob-restrict-movement")}}},render:()=>r`
    <syn-range
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      restrict-movement
      step="1"
    ></syn-range>
  `},g={parameters:{docs:{description:{story:e("range-tick","default")}}},render:()=>r`
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
    
    <p>${e("range-tick","subdivision")}</p>
   
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
  `},d={parameters:{docs:{description:{story:e("range","tooltip-placement")},story:{height:"80px"}}},render:()=>r`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},f={parameters:{docs:{description:{story:e("range","tooltip-disabled")}}},render:()=>r`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  `},v={parameters:{docs:{description:{story:e("range","tooltip-formatter")}}},render:()=>r(E||(E=S([`
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
  `])))},b=L({Default:n,Labels:a,HelpText:i,Disabled:o,Invalid:c,Sizes:l,PrefixSuffixText:p,CustomTrackColors:m,CustomTrackOffset:y,MultiThumb:u,Ticks:g,TooltipPlacement:d,TooltipDisabled:f,TooltipFormatter:v},500);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
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
}`,...c.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    const input = canvasElement.querySelector('syn-range') as SynRange;
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  \`
}`,...k.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          min-width: 0;
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Disabled,
  Invalid,
  Sizes,
  PrefixSuffixText,
  CustomTrackColors,
  CustomTrackOffset,
  MultiThumb,
  Ticks,
  TooltipPlacement,
  TooltipDisabled,
  TooltipFormatter
}, 500)`,...b.parameters?.docs?.source}}};const ee=["Default","Labels","HelpText","Disabled","Invalid","Focus","Sizes","PrefixSuffixText","CustomTrackColors","CustomTrackOffset","MultiThumb","MultiThumbWithRestrictedMovement","Ticks","TooltipPlacement","TooltipDisabled","TooltipFormatter","Screenshot"];export{m as CustomTrackColors,y as CustomTrackOffset,n as Default,o as Disabled,k as Focus,i as HelpText,c as Invalid,a as Labels,u as MultiThumb,x as MultiThumbWithRestrictedMovement,p as PrefixSuffixText,b as Screenshot,l as Sizes,g as Ticks,f as TooltipDisabled,v as TooltipFormatter,d as TooltipPlacement,ee as __namedExportsOrder,Z as default};
