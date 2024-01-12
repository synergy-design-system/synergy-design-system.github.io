import"./icon-button-4dc88460.js";import{x as t}from"./directive-helpers-a6c66f8a.js";import{s as u,a as d,g as e,b,c as y}from"./component-e9e6c7ab.js";import"./static-c19bae7e.js";import"./if-defined-1099e361.js";import"./component.styles-30ab6d75.js";import"./query-f49a08ce.js";import"./icon.component-80114edf.js";import"./chunk-757FFUVQ-7dc151b2.js";import"./index-356e4a49.js";const{args:g,argTypes:S}=u("syn-icon-button"),{overrideArgs:z}=y("syn-icon-button"),{generateTemplate:f}=d("syn-icon-button"),E={args:z([{name:"name",type:"attribute",value:"wallpaper"},{name:"label",type:"attribute",value:"Wallpaper"},{name:"color",type:"attribute",value:"neutral"},{name:"size",type:"attribute",value:"medium"}],g),argTypes:S,component:"icon-button",parameters:{docs:{description:{component:e("icon-button","default")}}},title:"Components/syn-icon-button"},l={parameters:{controls:{disable:!1},docs:{description:{story:e("icon-button","default")}}},render:p=>f({args:p})},n={name:"Sizes",parameters:{docs:{description:{story:e("icon-button","sizes")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>`},r={name:"Colors",parameters:{docs:{description:{story:`${e("icon-button","color")}`}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>`},a={name:"Link buttons",parameters:{docs:{description:{story:e("icon-button","link")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>`},o={name:"Disabled",parameters:{docs:{description:{story:e("icon-button","disabled")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>`},i={name:"Focus",parameters:{docs:{description:{story:e("icon-button","focus")}}},play:({canvasElement:p})=>{const m=p.querySelector("syn-icon-button");m&&m.focus()},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>`},s={name:"Label",parameters:{docs:{description:{story:e("icon-button","label")}}},render:()=>t`
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

  </style>`},c=b([n,r,a,o,s]);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} as Story`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story: \`\${generateStoryDescription('icon-button', 'color')}\`
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>\`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Link buttons',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'link')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>\`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'disabled')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>\`
}`,...o.parameters?.docs?.source},description:{story:"Wrap a tooltip around an icon button to provide contextual information to the user.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Label',
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"generateScreenshotStory([Sizes, Colors, LinkButton, Disabled, Label])",...c.parameters?.docs?.source}}};const T=["Default","Sizes","Colors","LinkButton","Disabled","Focus","Label","Screenshot"];export{r as Colors,l as Default,o as Disabled,i as Focus,s as Label,a as LinkButton,c as Screenshot,n as Sizes,T as __namedExportsOrder,E as default};
//# sourceMappingURL=icon-button.stories-a45952d5.js.map
