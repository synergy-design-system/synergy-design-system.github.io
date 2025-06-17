import"./icon-button-GSYtI5Q6.js";import{g as u,x as t}from"./iframe-GSRepqjd.js";import{g as e,s as d,a as b,c as y,b as g}from"./component-sz2YSCF4.js";import"./icon-button.component-Dzxtd5Sk.js";import"./class-map-QQ7HVnPG.js";import"./property-ImbD-3qY.js";import"./static-BkNWbPkN.js";import"./if-defined-CDNCanKK.js";import"./directive-helpers-CvZEagFv.js";import"./query-DAIS6qJ0.js";import"./component.styles-DXWA7L2q.js";import"./icon.component-B3J6d3UF.js";import"./watch-CEsCE2EF.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:f,argTypes:z}=d("syn-icon-button"),{overrideArgs:S}=b("syn-icon-button"),{generateTemplate:w}=y("syn-icon-button"),U={args:S([{name:"name",type:"attribute",value:"wallpaper"},{name:"label",type:"attribute",value:"Wallpaper"},{name:"size",type:"attribute",value:"medium"}],f),argTypes:z,component:"syn-icon-button",parameters:{design:u("2986-3736"),docs:{description:{component:e("icon-button","default")}}},tags:["Form","Navigation","Icons"],title:"Components/syn-icon-button"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("icon-button","default")}}},render:p=>w({args:p})},n={parameters:{docs:{description:{story:e("icon-button","sizes")}}},render:()=>t`
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
  `},a={parameters:{docs:{description:{story:`${e("icon-button","color")}`}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>`},s={parameters:{docs:{description:{story:e("icon-button","link")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>`},o={parameters:{docs:{description:{story:e("icon-button","disabled")}}},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>`},i={parameters:{docs:{description:{story:e("icon-button","focus")}}},play:({canvasElement:p})=>{const m=p.querySelector("syn-icon-button");m&&m.focus()},render:()=>t`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>`},l={parameters:{docs:{description:{story:e("icon-button","label")}}},render:()=>t`
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

  </style>`},c=g({Default:r,Sizes:n,Colors:a,LinkButton:s,Disabled:o,Label:l});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  render: args => generateTemplate({
    args
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'sizes')
      }
    }
  },
  render: () => html\`
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
    <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
  \`
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    const iconButton = canvasElement.querySelector('syn-icon-button');
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
})`,...c.parameters?.docs?.source}}};const $=["Default","Sizes","Colors","LinkButton","Disabled","Focus","Label","Screenshot"];export{a as Colors,r as Default,o as Disabled,i as Focus,l as Label,s as LinkButton,c as Screenshot,n as Sizes,$ as __namedExportsOrder,U as default};
