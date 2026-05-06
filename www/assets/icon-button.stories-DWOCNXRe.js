import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-DJ0QlWgc.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-CYGmWguq.js";import{n as p,t as m}from"./PaddingDecorator-D0C63Ei_.js";import{t as h}from"./icon-button-CP44d4rD.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{h(),t(),d(),r(),m(),a(),{args:g,argTypes:_}=c(`syn-icon-button`),{overrideArgs:v}=s(`syn-icon-button`),{generateTemplate:y}=u(`syn-icon-button`),b={args:v([{name:`name`,type:`attribute`,value:`wallpaper`},{name:`label`,type:`attribute`,value:`Wallpaper`},{name:`size`,type:`attribute`,value:`medium`}],g),argTypes:_,component:`syn-icon-button`,parameters:{chromatic:{modes:i},design:o(`41137-747935`),docs:{description:{component:l(`icon-button`,`default`)}}},tags:[`Form`,`Navigation`,`Icons`],title:`Components/syn-icon-button`},x={parameters:{controls:{disable:!1},docs:{description:{story:l(`icon-button`,`default`)}}},render:e=>y({args:e})},S={parameters:{docs:{description:{story:l(`icon-button`,`sizes`)}}},render:()=>n`
    <div style="align-items: end; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
    </div>
  `},C={parameters:{docs:{description:{story:`${l(`icon-button`,`color`)}`}}},render:()=>n`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>
    </div>
  `},w={parameters:{docs:{description:{story:l(`icon-button`,`link`)}}},render:()=>n`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>`},T={parameters:{docs:{description:{story:l(`icon-button`,`disabled`)}}},render:()=>n`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" disabled size="medium"></syn-icon-button>
    </div>
  `},E={decorators:[p()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`icon-button`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-icon-button`);t&&t.focus()},render:()=>n`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
    </div>
  `},D={parameters:{docs:{description:{story:l(`icon-button`,`label`)}}},render:()=>n`
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

  </style>`},O=f({Default:x,Sizes:S,Colors:C,LinkButton:w,Disabled:T,Label:D}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="align-items: end; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
    </div>
  \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`\${generateStoryDescription('icon-button', 'color')}\`
      }
    }
  },
  render: () => html\`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>
    </div>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'link')
      }
    }
  },
  render: () => html\`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('icon-button', 'disabled')
      }
    }
  },
  render: () => html\`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" disabled size="medium"></syn-icon-button>
    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
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
  render: () => html\`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Sizes,
  Colors,
  LinkButton,
  Disabled,
  Label
})`,...O.parameters?.docs?.source}}},k=[`Default`,`Sizes`,`Colors`,`LinkButton`,`Disabled`,`Focus`,`Label`,`Screenshot`]}))();export{C as Colors,x as Default,T as Disabled,E as Focus,D as Label,w as LinkButton,O as Screenshot,S as Sizes,k as __namedExportsOrder,b as default};