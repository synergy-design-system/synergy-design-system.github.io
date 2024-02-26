import"./preview-38IG8ydY.js";import{x as a}from"./directive-helpers-po9zzQFH.js";import{u as p}from"./index-XprlCEIM.js";import{s as h,a as u,g as e,b as w,c as S}from"./component-T7JAUJA5.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-C-ESOXiC.js";import"./icon-button-hWu3VM7N.js";import"./icon-3D35f5n6.js";import"./index-PPLHz8o0.js";import"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import"./index-PHhWkUIg.js";const{args:f,argTypes:b}=h("syn-switch"),{overrideArgs:g}=S("syn-switch"),{generateTemplate:v}=u("syn-switch"),H={args:g({name:"default",type:"slot",value:"Option"},f),argTypes:b,component:"switch",parameters:{docs:{description:{component:e("switch","default")}}},title:"Components/syn-switch"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("switch","default")}}},render:t=>v({args:t})},r={parameters:{docs:{description:{story:e("switch","checked")}}},render:()=>a`<syn-switch checked>Checked</syn-switch>`},o={parameters:{docs:{description:{story:e("switch","disabled")}}},render:()=>a`<syn-switch disabled>Disabled</syn-switch>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:t})=>{const s=t.querySelector("syn-switch");s&&s&&s.focus()},render:()=>a`<syn-switch>Focused</syn-switch>`},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:t})=>{try{const s=t.querySelector("form"),m=s?.querySelector("syn-switch"),y=s?.querySelector("syn-button");y&&m&&(await p.click(y),y.click())}catch(s){console.error("Error in play function:",s)}},render:()=>a`
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
  <syn-switch size="large">Large</syn-switch>`},d=w({Default:n,Checked:r,Disabled:o,Sizes:c});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} as Story`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
})`,...d.parameters?.docs?.source}}};const I=["Default","Checked","Disabled","Focus","Invalid","Sizes","Screenshot"];export{r as Checked,n as Default,o as Disabled,i as Focus,l as Invalid,d as Screenshot,c as Sizes,I as __namedExportsOrder,H as default};
