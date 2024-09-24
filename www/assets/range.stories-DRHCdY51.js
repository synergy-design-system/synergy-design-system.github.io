import{u as A}from"./index-DbQ-iIe5.js";import{k as t}from"./lit-element-BsyMe9HG.js";import{s as C,a as q,g as z,b as e,c as L,d as M}from"./component-7g7PvM4J.js";import"./index-C8k3Z-3Y.js";import"./index-Dy7bMyTO.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DiAnxFT_.js";var T=Object.freeze,_=Object.defineProperty,h=(r,s)=>T(_(r,"raw",{value:T(r.slice())})),V,D,w,E;const{args:P,argTypes:j}=C("syn-range"),{overrideArgs:F}=M("syn-range"),{generateTemplate:O}=q("syn-range"),U={args:F([{name:"value",type:"attribute",value:"50"}],P),argTypes:j,component:"syn-range",parameters:{design:z("20575-35283"),docs:{description:{component:e("range","default")}}},title:"Components/syn-range"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("range","default")},story:{height:"80px"}}},render:r=>O({args:r})},n={parameters:{docs:{description:{story:e("range","labels")}}},render:()=>t`
    <syn-range label="Label" max="100" min="0" value="50"></syn-range>
  `},i={parameters:{docs:{description:{story:e("range","help-text")}}},render:()=>t`
    <syn-range
      help-text="Controls the volume of the current song"
      label="Volume"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},o={parameters:{docs:{description:{story:e("range","disabled")}}},render:()=>t`
    <syn-range disabled max="100" min="0" value="50"></syn-range>
  `},c={parameters:{docs:{description:{story:e("range","invalid")}}},play:async({canvasElement:r})=>{try{const s=r.querySelector("syn-range"),S=r.querySelector("syn-button");s&&S&&(await A.click(S),S.click())}catch(s){console.error("Error in play function:",s)}},render:()=>t(V||(V=h([`
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
  `])))},b={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("range","focus")},story:{height:"80px"}}},play:({canvasElement:r})=>{const s=r.querySelector("syn-range");s&&s.focus()},render:()=>t`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  `},l={parameters:{docs:{description:{story:e("range","size")}}},render:()=>t`
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
  `},m={parameters:{docs:{description:{story:e("range","prefix-suffix")}}},render:()=>t(D||(D=h([`
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
  `])))},p={parameters:{docs:{description:{story:e("range","custom-track-colors")},story:{height:"80px"}}},render:()=>t`
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
  `},u={parameters:{docs:{description:{story:e("range","custom-track-offset")},story:{height:"80px"}}},render:()=>t`
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
  `},y={parameters:{docs:{description:{story:e("range","multi-knob")},story:{height:"80px"}}},render:()=>t`
    <syn-range max="100" min="0" value="30 70"></syn-range>
  `},k={parameters:{docs:{description:{story:e("range","multi-knob-restrict-movement")}}},render:()=>t(w||(w=h([`
    <syn-range
      class="range-restrict-movement"
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      step="1"
    ></syn-range>
    <script type="module">
      Array
        .from(document.querySelectorAll('.range-restrict-movement'))
        .forEach((el) => {
          el.addEventListener('syn-move', e => {
            const { detail, target } = e;
            const values = target.valueAsArray;
            const { element, value } = detail;

            const [firstThumb, lastThumb] = target.thumbs;
            const [firstValue, lastValue] = values;

            if (element === firstThumb && value > lastValue) {
              e.preventDefault();
              target.valueAsArray = [lastValue, lastValue];
            }
            
            if (element === lastThumb && value < firstValue) {
              e.preventDefault();
              target.valueAsArray = [firstValue, firstValue];
            }
          });
        });
    <\/script>
  `])))},g={parameters:{docs:{description:{story:e("range","ticks")}}},render:()=>t`
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
    
    <p>It is possible to divide the space between major ticks for finer scale readings.</p>
   
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
  `},d={parameters:{docs:{description:{story:e("range","tooltip-placement")},story:{height:"80px"}}},render:()=>t`
    <syn-range
      tooltip-placement="bottom"
      max="100"
      min="0"
      value="50"
    ></syn-range>
  `},f={parameters:{docs:{description:{story:e("range","tooltip-disabled")}}},render:()=>t`
    <syn-range
      max="100"
      min="0"
      tooltip-placement="none"
      value="50"
    ></syn-range>
  `},v={parameters:{docs:{description:{story:e("range","tooltip-formatter")}}},render:()=>t(E||(E=h([`
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
  `])))},x=L({Default:a,Labels:n,HelpText:i,Disabled:o,Invalid:c,Sizes:l,PrefixSuffixText:m,CustomTrackColors:p,CustomTrackOffset:u,MultiThumb:y,Ticks:g,TooltipPlacement:d,TooltipDisabled:f,TooltipFormatter:v},500);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} as Story`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    const input = (canvasElement.querySelector('syn-range') as SynRange);
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <form>
      <syn-range max="100" min="0" value="50"></syn-range>
    </form>
  \`
}`,...b.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
      class="range-restrict-movement"
      value="30 70"
      label="Demo of restricting values"
      min="0"
      max="100"
      step="1"
    ></syn-range>
    <script type="module">
      Array
        .from(document.querySelectorAll('.range-restrict-movement'))
        .forEach((el) => {
          el.addEventListener('syn-move', e => {
            const { detail, target } = e;
            const values = target.valueAsArray;
            const { element, value } = detail;

            const [firstThumb, lastThumb] = target.thumbs;
            const [firstValue, lastValue] = values;

            if (element === firstThumb && value > lastValue) {
              e.preventDefault();
              target.valueAsArray = [lastValue, lastValue];
            }
            
            if (element === lastThumb && value < firstValue) {
              e.preventDefault();
              target.valueAsArray = [firstValue, firstValue];
            }
          });
        });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range', 'ticks')
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
    
    <p>It is possible to divide the space between major ticks for finer scale readings.</p>
   
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...x.parameters?.docs?.source}}};const X=["Default","Labels","HelpText","Disabled","Invalid","Focus","Sizes","PrefixSuffixText","CustomTrackColors","CustomTrackOffset","MultiThumb","MultiThumbWithRestrictedMovement","Ticks","TooltipPlacement","TooltipDisabled","TooltipFormatter","Screenshot"];export{p as CustomTrackColors,u as CustomTrackOffset,a as Default,o as Disabled,b as Focus,i as HelpText,c as Invalid,n as Labels,y as MultiThumb,k as MultiThumbWithRestrictedMovement,m as PrefixSuffixText,x as Screenshot,l as Sizes,g as Ticks,f as TooltipDisabled,v as TooltipFormatter,d as TooltipPlacement,X as __namedExportsOrder,U as default};
