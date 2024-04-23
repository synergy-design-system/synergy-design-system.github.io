import{g as p}from"./preview-BKIHvREz.js";import{x as a}from"./lit-element-DILkAbkc.js";import{u as h}from"./index-mKIXR9hI.js";import{s as u,a as w,g as e,b as S,c as f}from"./component-CUNkOpqe.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DaDaXKoT.js";import"./icon.component-l0ioFT3x.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-jmogF0uR.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DlOq3jis.js";const{args:b,argTypes:g}=u("syn-switch"),{overrideArgs:v}=f("syn-switch"),{generateTemplate:k}=w("syn-switch"),H={args:v({name:"default",type:"slot",value:"Option"},b),argTypes:g,component:"syn-switch",parameters:{design:p("2239-58411"),docs:{description:{component:e("switch","default")}}},title:"Components/syn-switch"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("switch","default")}}},render:n=>k({args:n})},r={parameters:{docs:{description:{story:e("switch","checked")}}},render:()=>a`<syn-switch checked>Checked</syn-switch>`},o={parameters:{docs:{description:{story:e("switch","disabled")}}},render:()=>a`<syn-switch disabled>Disabled</syn-switch>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:n})=>{const s=n.querySelector("syn-switch");s&&s&&s.focus()},render:()=>a`<syn-switch>Focused</syn-switch>`},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:n})=>{try{const s=n.querySelector("form"),m=s?.querySelector("syn-switch"),y=s?.querySelector("syn-button");y&&m&&(await h.click(y),y.click())}catch(s){console.error("Error in play function:",s)}},render:()=>a`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
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
  `},c={parameters:{docs:{description:{story:e("switch","sizes")}}},render:()=>a`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>`},d=S({Default:t,Checked:r,Disabled:o,Sizes:c});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const synSwitch = (canvasElement.querySelector('syn-switch') as SynSwitch);
    if (synSwitch) {
      if (synSwitch) {
        synSwitch.focus();
      }
    }
  },
  render: () => html\`<syn-switch>Focused</syn-switch>\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    try {
      const form = canvasElement.querySelector('form');
      const synSwitch = (form?.querySelector('syn-switch') as SynSwitch);
      const button = (form?.querySelector('syn-button') as SynButton);
      if (button && synSwitch) {
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'sizes')
      }
    }
  },
  render: () => html\`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>\`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Disabled,
  Sizes
})`,...d.parameters?.docs?.source}}};const I=["Default","Checked","Disabled","Focus","Invalid","Sizes","Screenshot"];export{r as Checked,t as Default,o as Disabled,i as Focus,l as Invalid,d as Screenshot,c as Sizes,I as __namedExportsOrder,H as default};
