import"./switch-Bpb85u5C.js";import"./button-DorK-1zF.js";import{g as y,x as i}from"./iframe-BPTGpV5F.js";import{g as e,s as h,a as u,c as w,b as S}from"./component-CcVK7IEJ.js";import"./class-map-hCkpY42X.js";import"./default-value-BV7kSuIw.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-CoHF8A8R.js";import"./live-qrzkCyIb.js";import"./synergy-element-Cui3Y_g1.js";import"./icon.component-B0AQQ8Br.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./form-control.custom.styles-DLhXDJis.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-BH8monv7.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-DKsB8ZHg.js";const{userEvent:f}=__STORYBOOK_MODULE_TEST__,{args:b,argTypes:g}=h("syn-switch"),{overrideArgs:v}=u("syn-switch"),{generateTemplate:D}=w("syn-switch"),J={args:v({name:"default",type:"slot",value:"Option"},b),argTypes:g,component:"syn-switch",parameters:{design:y("2239-58411"),docs:{description:{component:e("switch","default")}}},tags:["Form","SICK2018"],title:"Components/syn-switch"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("switch","default")}}},render:t=>D({args:t})},n={parameters:{docs:{description:{story:e("switch","checked")}}},render:()=>i`<syn-switch checked>Checked</syn-switch>`},o={parameters:{docs:{description:{story:e("switch","disabled")}}},render:()=>i`<syn-switch disabled>Disabled</syn-switch>`},a={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:t})=>{const s=t.querySelector("syn-switch");s&&s.focus()},render:()=>i`<syn-switch>Focused</syn-switch>`},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:t})=>{try{const s=t.querySelector("form"),p=s?.querySelector("syn-switch"),d=s?.querySelector("syn-button");d&&p&&(await f.click(d),d.click())}catch(s){console.error("Error in play function:",s)}},render:()=>i`
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
  `},c={parameters:{docs:{description:{story:e("switch","sizes")}}},render:()=>i`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>`},l=S({Default:r,Checked:n,Disabled:o,Sizes:c});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    const synSwitch = canvasElement.querySelector('syn-switch');
    if (synSwitch) {
      synSwitch.focus();
    }
  },
  render: () => html\`<syn-switch>Focused</syn-switch>\`
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      const synSwitch = form?.querySelector('syn-switch');
      const button = form?.querySelector('syn-button');
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Disabled,
  Sizes
})`,...l.parameters?.docs?.source}}};const N=["Default","Checked","Disabled","Focus","Invalid","Sizes","Screenshot"];export{n as Checked,r as Default,o as Disabled,a as Focus,m as Invalid,l as Screenshot,c as Sizes,N as __namedExportsOrder,J as default};
