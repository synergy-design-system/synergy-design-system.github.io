import"./switch-BIlytvk2.js";import"./button-R_bx4RjR.js";import{g as h,C as u,x as t}from"./iframe-CM1cFSJI.js";import{g as e,s as w,a as f,c as g,b as S}from"./component-D0FiR1TK.js";import"./class-map-BHavj5nm.js";import"./default-value-Xq3D0yUM.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-BsPfGaQo.js";import"./live-CWlIbAhE.js";import"./synergy-element-D-UeZOoN.js";import"./icon.component-g5Os0oaQ.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./form-control.custom.styles-BNEOXH3E.js";import"./decorator-CVE5vLu9.js";import"./functions-Cnw7w7U0.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-DLrL1Yp4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const{userEvent:b}=__STORYBOOK_MODULE_TEST__,{args:v,argTypes:x}=w("syn-switch"),{overrideArgs:k}=f("syn-switch"),{generateTemplate:D}=g("syn-switch"),N={args:k({name:"default",type:"slot",value:"Option"},v),argTypes:x,component:"syn-switch",parameters:{chromatic:{modes:u},design:h("2239-58411"),docs:{description:{component:e("switch","default")}}},tags:["Form"],title:"Components/syn-switch"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("switch","default")}}},render:r=>D({args:r})},o={parameters:{docs:{description:{story:e("switch","checked")}}},render:()=>t`<syn-switch checked>Checked</syn-switch>`},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:r})=>{const s=r.querySelector("syn-switch");s&&s.focus()},render:()=>t`<syn-switch>Focused</syn-switch>`},c={parameters:{docs:{description:{story:e("switch","disabled")}}},render:()=>t`<syn-switch disabled>Disabled</syn-switch>`},i={parameters:{docs:{description:{story:e("switch","sizes")}}},render:()=>t`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  `},a={parameters:{docs:{description:{story:e("switch","help-text")}}},render:()=>t`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:r})=>{try{const s=r.querySelector("form"),y=s?.querySelector("syn-switch"),p=s?.querySelector("syn-button");p&&y&&(await b.click(p),p.click())}catch(s){console.error("Error in play function:",s)}},render:()=>t`
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
  `},m=S({Default:n,Checked:o,Disabled:c,Sizes:i,HelpText:a},200);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked')
      }
    }
  },
  render: () => html\`<syn-switch checked>Checked</syn-switch>\`
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  \`
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  \`
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Disabled,
  Sizes,
  HelpText
}, 200)`,...m.parameters?.docs?.source}}};const Q=["Default","Checked","Focus","Disabled","Sizes","HelpText","Invalid","Screenshot"];export{o as Checked,n as Default,c as Disabled,l as Focus,a as HelpText,d as Invalid,m as Screenshot,i as Sizes,Q as __namedExportsOrder,N as default};
