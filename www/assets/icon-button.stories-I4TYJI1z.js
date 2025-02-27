import"./icon-button-D-sG795Z.js";import{k as t}from"./directive-helpers-B-JxG5af.js";import{g as e,a as m,s as d,b,c as y,d as g}from"./component-CRI_M4YG.js";import"./if-defined-98Biveud.js";import"./library-UYMiFSYt.js";import"./icon.component-C_7FYL5Y.js";import"./index-Vx7n56Jp.js";import"./ref-DMm6gEez.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-Dstpo8YC.js";const{args:S,argTypes:f}=d("syn-icon-button"),{overrideArgs:z}=b("syn-icon-button"),{generateTemplate:w}=y("syn-icon-button"),A={args:z([{name:"name",type:"attribute",value:"wallpaper"},{name:"label",type:"attribute",value:"Wallpaper"},{name:"size",type:"attribute",value:"medium"}],S),argTypes:f,component:"syn-icon-button",parameters:{design:m("2986-3736"),docs:{description:{component:e("icon-button","default")}}},title:"Components/syn-icon-button"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("icon-button","default")}}},render:p=>w({args:p})},r={parameters:{docs:{description:{story:e("icon-button","sizes")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>`},a={parameters:{docs:{description:{story:`${e("icon-button","color")}`}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>`},s={parameters:{docs:{description:{story:e("icon-button","link")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>`},o={parameters:{docs:{description:{story:e("icon-button","disabled")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>`},i={parameters:{docs:{description:{story:e("icon-button","focus")}}},play:({canvasElement:p})=>{const u=p.querySelector("syn-icon-button");u&&u.focus()},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>`},l={parameters:{docs:{description:{story:e("icon-button","label")}}},render:()=>t`
  <div class="grid">
    <span>Unset label property: </span>
    <syn-icon-button name="wallpaper" color="neutral" size="medium"></syn-icon-button>
    <span>Set label property: </span>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
  </div>
  <style>
    .grid {
      font-size: var(--syn-font-size-x-small);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

  </style>`},c=g({Default:n,Sizes:r,Colors:a,LinkButton:s,Disabled:o,Label:l});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'sizes')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>\`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`\${generateStoryDescription('icon-button', 'color')}\`
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>\`
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'link')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>\`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'disabled')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>\`
}`,...o.parameters?.docs?.source},description:{story:"Wrap a tooltip around an icon button to provide contextual information to the user.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const iconButton = canvasElement.querySelector('syn-icon-button') as SynIconButton;
    if (iconButton) {
      iconButton.focus();
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'label')
      }
    }
  },
  render: () => html\`
  <div class="grid">
    <span>Unset label property: </span>
    <syn-icon-button name="wallpaper" color="neutral" size="medium"></syn-icon-button>
    <span>Set label property: </span>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
  </div>
  <style>
    .grid {
      font-size: var(--syn-font-size-x-small);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

  </style>\`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Sizes,
  Colors,
  LinkButton,
  Disabled,
  Label
})`,...c.parameters?.docs?.source}}};const H=["Default","Sizes","Colors","LinkButton","Disabled","Focus","Label","Screenshot"];export{a as Colors,n as Default,o as Disabled,i as Focus,l as Label,s as LinkButton,c as Screenshot,r as Sizes,H as __namedExportsOrder,A as default};
