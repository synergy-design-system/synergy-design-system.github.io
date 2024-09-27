import"./index-Dfi6UpXT.js";import{k as o}from"./lit-element-BsyMe9HG.js";import{s as m,a as d,g as b,b as e,c as y,d as g}from"./component-BZvxfSsF.js";import"./icon.component-CExUySyX.js";import"./directive-helpers-DUpkUCIH.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-NtWdXWMv.js";const{args:S,argTypes:f}=m("syn-icon-button"),{overrideArgs:z}=g("syn-icon-button"),{generateTemplate:w}=d("syn-icon-button"),T={args:z([{name:"name",type:"attribute",value:"wallpaper"},{name:"label",type:"attribute",value:"Wallpaper"},{name:"size",type:"attribute",value:"medium"}],S),argTypes:f,component:"syn-icon-button",parameters:{design:b("2986-3736"),docs:{description:{component:e("icon-button","default")}}},title:"Components/syn-icon-button"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("icon-button","default")}}},render:p=>w({args:p})},r={parameters:{docs:{description:{story:e("icon-button","sizes")}}},render:()=>o`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>`},a={parameters:{docs:{description:{story:`${e("icon-button","color")}`}}},render:()=>o`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>`},s={parameters:{docs:{description:{story:e("icon-button","link")}}},render:()=>o`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>`},n={parameters:{docs:{description:{story:e("icon-button","disabled")}}},render:()=>o`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>`},i={parameters:{docs:{description:{story:e("icon-button","focus")}}},play:({canvasElement:p})=>{const u=p.querySelector("syn-icon-button");u&&u.focus()},render:()=>o`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>`},l={parameters:{docs:{description:{story:e("icon-button","label")}}},render:()=>o`
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

  </style>`},c=y({Default:t,Sizes:r,Colors:a,LinkButton:s,Disabled:n,Label:l});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} as Story`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'disabled')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>\`
}`,...n.parameters?.docs?.source},description:{story:"Wrap a tooltip around an icon button to provide contextual information to the user.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    const iconButton = (canvasElement.querySelector('syn-icon-button') as SynIconButton);
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
})`,...c.parameters?.docs?.source}}};const C=["Default","Sizes","Colors","LinkButton","Disabled","Focus","Label","Screenshot"];export{a as Colors,t as Default,n as Disabled,i as Focus,l as Label,s as LinkButton,c as Screenshot,r as Sizes,C as __namedExportsOrder,T as default};
