import{s as p,a as h,g as u,b as e,c as w,d as S}from"./component-Mphgh4uS.js";import{k as a}from"./directive-helpers-CDT6qhDs.js";import{u as f}from"./index-B_f3VjvO.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-DCKMi8pB.js";import"./library-BZPO0bHa.js";import"./icon.component-D_9xmZHG.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DI7pAums.js";const{args:b,argTypes:g}=p("syn-switch"),{overrideArgs:k}=S("syn-switch"),{generateTemplate:v}=h("syn-switch"),_={args:k({name:"default",type:"slot",value:"Option"},b),argTypes:g,component:"syn-switch",parameters:{design:u("2239-58411"),docs:{description:{component:e("switch","default")}}},title:"Components/syn-switch"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("switch","default")}}},render:t=>v({args:t})},n={parameters:{docs:{description:{story:e("switch","checked")}}},render:()=>a`<syn-switch checked>Checked</syn-switch>`},o={parameters:{docs:{description:{story:e("switch","disabled")}}},render:()=>a`<syn-switch disabled>Disabled</syn-switch>`},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:t})=>{const s=t.querySelector("syn-switch");s&&s&&s.focus()},render:()=>a`<syn-switch>Focused</syn-switch>`},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:t})=>{try{const s=t.querySelector("form"),y=s?.querySelector("syn-switch"),m=s?.querySelector("syn-button");m&&y&&(await f.click(m),m.click())}catch(s){console.error("Error in play function:",s)}},render:()=>a`
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
  <syn-switch size="large">Large</syn-switch>`},d=w({Default:r,Checked:n,Disabled:o,Sizes:c});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} as Story`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const synSwitch = canvasElement.querySelector('syn-switch') as SynSwitch;
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
      const synSwitch = form?.querySelector('syn-switch') as SynSwitch;
      const button = form?.querySelector('syn-button') as SynButton;
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
})`,...d.parameters?.docs?.source}}};const j=["Default","Checked","Disabled","Focus","Invalid","Sizes","Screenshot"];export{n as Checked,r as Default,o as Disabled,i as Focus,l as Invalid,d as Screenshot,c as Sizes,j as __namedExportsOrder,_ as default};
