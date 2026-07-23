import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-BFZR08Kk.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-BpLoAK9F.js";import{t as c}from"./icon-8cT1hKpd.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-Cjcm-1Oq.js";import{n as h,t as g}from"./decorators-ydlG83TL.js";import{t as _}from"./radio-group-CXM3p9zD.js";import{t as v}from"./radio-button-L3Jc0Exm.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=e((()=>{o(),s(),c(),_(),v(),g(),p(),r(),n(),{userEvent:y}=__STORYBOOK_MODULE_TEST__,{args:b,argTypes:x}=u(`syn-radio-button`),{overrideArgs:S}=l(`syn-radio-button`),{generateTemplate:C}=f(`syn-radio-button`),w={args:S([{name:`default`,type:`slot`,value:`Option 1`},{name:`value`,type:`attribute`,value:`1`}],b),argTypes:x,component:`syn-radio-button`,parameters:{chromatic:{modes:i},design:t(`49697-83768`),docs:{description:{component:d(`radio-button`,`default`)}}},tags:[`Form`],title:`Components/syn-radio-button`},T={parameters:{controls:{disable:!1},docs:{description:{story:d(`radio-button`,`default`)}}},render:e=>a`
    <syn-radio-group label="Select an option" name="a" value="1">
      ${C({args:e})}
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},E={parameters:{docs:{description:{story:d(`radio-button`,`checked`)}}},render:()=>a`
    <syn-radio-group label="Select an option" name="b" value="2">
      <syn-radio-button value="1">Option 1</syn-radio-button>
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},D={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`radio-button`,`focus`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`syn-radio-group`);t&&(await t.updateComplete,t.focus())},render:()=>a`
    <syn-radio-group label="Select an option" name="b" value="1">
      <syn-radio-button value="1">Option 1</syn-radio-button>
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},O={parameters:{docs:{description:{story:d(`radio-button`,`disabled`)}}},render:()=>a`
    <syn-radio-group label="Select an option" name="b" value="1">
      <syn-radio-button value="1" disabled>Option 1</syn-radio-button>
      <syn-radio-button value="2" disabled>Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},k={parameters:{docs:{description:{story:d(`radio-button`,`readonly`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-radio-group label="Select an option" name="b" value="1">
        <syn-radio-button value="1" readonly>Option 1</syn-radio-button>
        <syn-radio-button value="2" readonly>Option 2</syn-radio-button>
        <syn-radio-button value="3" readonly>Option 3</syn-radio-button>
      </syn-radio-group>
      <syn-radio-group label="Select an option" name="b" value="1">
        <syn-radio-button value="1" readonly>Option 1</syn-radio-button>
        <syn-radio-button value="2" readonly>Option 2</syn-radio-button>
        <syn-radio-button value="3">Option 3</syn-radio-button>
      </syn-radio-group>
    </div>
  `},A={parameters:{docs:{description:{story:d(`radio-button`,`sizes`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      ${[`small`,`medium`,`large`].map(e=>a`
        <syn-radio-group label="Select an option" name="size" size=${e} value="1">
          <syn-radio-button value="1">Option 1</syn-radio-button>
          <syn-radio-button value="2">Option 2</syn-radio-button>
          <syn-radio-button value="3">Option 3</syn-radio-button>
        </syn-radio-group>
      `)}
    </div>
  `},j={decorators:[h],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`radio-button`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-button`);t&&(await y.click(t),t.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a`
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio-button value="1">Option 1</syn-radio-button>
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  `},M={parameters:{docs:{description:{story:d(`radio-button`,`prefix-suffix`)}}},render:()=>a`
    <syn-radio-group label="Select an option" name="b" value="1">
      <syn-radio-button value="1">
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
        Option 1
      </syn-radio-button>
      <syn-radio-button value="2">
        Option 2
        <syn-icon slot="suffix" name="wallpaper"></syn-icon>
      </syn-radio-button>
      <syn-radio-button value="3">
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
        Option 3
        <syn-icon slot="suffix" name="wallpaper"></syn-icon>
      </syn-radio-button>
    </syn-radio-group>
  `},N={parameters:{docs:{description:{story:d(`radio-button`,`buttons-with-icons`)}}},render:()=>a`
    <syn-radio-group label="Select an option" name="a" value="neutral">
      <syn-radio-button value="angry">
        <syn-icon name="face_5" label="Angry"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="sad">
        <syn-icon name="face_4" label="Sad"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="neutral">
        <syn-icon name="face_3" label="Neutral"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="happy">
        <syn-icon name="face_2" label="Happy"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="laughing">
        <syn-icon name="face_6" label="Laughing"></syn-icon>
      </syn-radio-button>
    </syn-radio-group>
  `},P=m({Default:T,Checked:E,Disabled:O,Readonly:k,Sizes:A,PrefixAndSuffixIcons:M,ButtonsWithIcons:N},350),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'default')
      }
    }
  },
  render: args => html\`
    <syn-radio-group label="Select an option" name="a" value="1">
      \${generateTemplate({
    args
  })}
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'checked')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="b" value="2">
      <syn-radio-button value="1">Option 1</syn-radio-button>
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'focus')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const radio = canvasElement.querySelector('syn-radio-group');
    if (radio) {
      await radio.updateComplete;
      radio.focus();
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="b" value="1">
      <syn-radio-button value="1">Option 1</syn-radio-button>
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="b" value="1">
      <syn-radio-button value="1" disabled>Option 1</syn-radio-button>
      <syn-radio-button value="2" disabled>Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-radio-group label="Select an option" name="b" value="1">
        <syn-radio-button value="1" readonly>Option 1</syn-radio-button>
        <syn-radio-button value="2" readonly>Option 2</syn-radio-button>
        <syn-radio-button value="3" readonly>Option 3</syn-radio-button>
      </syn-radio-group>
      <syn-radio-group label="Select an option" name="b" value="1">
        <syn-radio-button value="1" readonly>Option 1</syn-radio-button>
        <syn-radio-button value="2" readonly>Option 2</syn-radio-button>
        <syn-radio-button value="3">Option 3</syn-radio-button>
      </syn-radio-group>
    </div>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
        <syn-radio-group label="Select an option" name="size" size=\${size} value="1">
          <syn-radio-button value="1">Option 1</syn-radio-button>
          <syn-radio-button value="2">Option 2</syn-radio-button>
          <syn-radio-button value="3">Option 3</syn-radio-button>
        </syn-radio-group>
      \`)}
    </div>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const button = canvasElement.querySelector('syn-button');
      if (button) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio-button value="1">Option 1</syn-radio-button>
      <syn-radio-button value="2">Option 2</syn-radio-button>
      <syn-radio-button value="3">Option 3</syn-radio-button>
    </syn-radio-group>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="b" value="1">
      <syn-radio-button value="1">
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
        Option 1
      </syn-radio-button>
      <syn-radio-button value="2">
        Option 2
        <syn-icon slot="suffix" name="wallpaper"></syn-icon>
      </syn-radio-button>
      <syn-radio-button value="3">
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
        Option 3
        <syn-icon slot="suffix" name="wallpaper"></syn-icon>
      </syn-radio-button>
    </syn-radio-group>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-button', 'buttons-with-icons')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="Select an option" name="a" value="neutral">
      <syn-radio-button value="angry">
        <syn-icon name="face_5" label="Angry"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="sad">
        <syn-icon name="face_4" label="Sad"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="neutral">
        <syn-icon name="face_3" label="Neutral"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="happy">
        <syn-icon name="face_2" label="Happy"></syn-icon>
      </syn-radio-button>

      <syn-radio-button value="laughing">
        <syn-icon name="face_6" label="Laughing"></syn-icon>
      </syn-radio-button>
    </syn-radio-group>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Disabled,
  Readonly,
  Sizes,
  PrefixAndSuffixIcons,
  ButtonsWithIcons
}, 350)`,...P.parameters?.docs?.source}}},F=[`Default`,`Checked`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`PrefixAndSuffixIcons`,`ButtonsWithIcons`,`Screenshot`]}));I();export{N as ButtonsWithIcons,E as Checked,T as Default,O as Disabled,D as Focus,j as Invalid,M as PrefixAndSuffixIcons,k as Readonly,P as Screenshot,A as Sizes,F as __namedExportsOrder,w as default,I as t};