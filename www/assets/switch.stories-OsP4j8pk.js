import"./switch-DifkNRfr.js";import"./button-D79asdm_.js";import{C as u,c as t,d as w}from"./iframe-BF3kHbTn.js";import{g as e,a as g,s as f,b as S,c as b}from"./component-C4Zfhy8Z.js";import"./class-map-w4AcnhbO.js";import"./default-value-Cz9p_C4M.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-DIaF50Gh.js";import"./live-CEpSrdW2.js";import"./synergy-element-D2l-m579.js";import"./icon.component-QU43wL0d.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./form-control.styles-DFi38fbk.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-D-olW4UA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-ZdRmyf7z.js";const{userEvent:v}=__STORYBOOK_MODULE_TEST__,{args:x,argTypes:k}=f("syn-switch"),{overrideArgs:D}=b("syn-switch"),{generateTemplate:E}=S("syn-switch"),Q={args:D({name:"default",type:"slot",value:"Option"},x),argTypes:k,component:"syn-switch",parameters:{chromatic:{modes:u},design:w("2239-58411"),docs:{description:{component:e("switch","default")}}},tags:["Form"],title:"Components/syn-switch"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("switch","default")}}},render:r=>E({args:r})},o={parameters:{docs:{description:{story:e("switch","checked")}}},render:()=>t`<syn-switch checked>Checked</syn-switch>`},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","focus")}}},play:({canvasElement:r})=>{const s=r.querySelector("syn-switch");s&&s.focus()},render:()=>t`<syn-switch>Focused</syn-switch>`},c={parameters:{docs:{description:{story:e("switch","disabled")}}},render:()=>t`<syn-switch disabled>Disabled</syn-switch>`},a={parameters:{docs:{description:{story:e("switch","readonly")}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column; align-items: flex-start;">
      <syn-switch readonly>Unchecked</syn-switch>
      <syn-switch checked readonly>Checked</syn-switch>
    </div>
  `},i={parameters:{docs:{description:{story:e("switch","sizes")}}},render:()=>t`
    <div style="gap: var(--syn-spacing-large); display: flex; flex-direction: column; align-items: flex-start;">
      <syn-switch size="small">Small</syn-switch>
      <syn-switch size="medium">Medium</syn-switch>
      <syn-switch size="large">Large</syn-switch>
    </div>
  `},l={parameters:{docs:{description:{story:e("switch","help-text")}}},render:()=>t`
    <syn-switch help-text="What should the user know about the switch?">Label</syn-switch>
  `},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("switch","invalid")}}},play:async({canvasElement:r})=>{try{const s=r.querySelector("form"),h=s?.querySelector("syn-switch"),y=s?.querySelector("syn-button");y&&h&&(await v.click(y),y.click())}catch(s){console.error("Error in play function:",s)}},render:()=>t`
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
  `},m=g({Default:n,Checked:o,Disabled:c,Readonly:a,Sizes:i,HelpText:l},200);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled')
      }
    }
  },
  render: () => html\`<syn-switch disabled>Disabled</syn-switch>\`
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column; align-items: flex-start;">
      <syn-switch readonly>Unchecked</syn-switch>
      <syn-switch checked readonly>Checked</syn-switch>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Checked,
  Disabled,
  Readonly,
  Sizes,
  HelpText
}, 200)`,...m.parameters?.docs?.source}}};const V=["Default","Checked","Focus","Disabled","Readonly","Sizes","HelpText","Invalid","Screenshot"];export{o as Checked,n as Default,c as Disabled,d as Focus,l as HelpText,p as Invalid,a as Readonly,m as Screenshot,i as Sizes,V as __namedExportsOrder,Q as default};
