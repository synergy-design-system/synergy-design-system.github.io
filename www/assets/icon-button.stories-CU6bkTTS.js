import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./component-Bm6Rp1CP.js";import{n as f,t as p}from"./PaddingDecorator-C4mX2Z0z.js";import{t as m}from"./icon-button-CWa2KSXb.js";var h=t({Colors:()=>C,Default:()=>x,Disabled:()=>T,Focus:()=>E,Label:()=>D,LinkButton:()=>w,Screenshot:()=>O,Sizes:()=>S,__namedExportsOrder:()=>k,default:()=>b}),g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{m(),a(),u(),p(),r(),{args:g,argTypes:_}=s(`syn-icon-button`),{overrideArgs:v}=o(`syn-icon-button`),{generateTemplate:y}=l(`syn-icon-button`),b={args:v([{name:`name`,type:`attribute`,value:`wallpaper`},{name:`label`,type:`attribute`,value:`Wallpaper`},{name:`size`,type:`attribute`,value:`medium`}],g),argTypes:_,component:`syn-icon-button`,parameters:{chromatic:{modes:n},docs:{description:{component:c(`icon-button`,`default`)}}},tags:[`Form`,`Navigation`,`Icons`],title:`Components/syn-icon-button`},x={parameters:{controls:{disable:!1},docs:{description:{story:c(`icon-button`,`default`)}}},render:e=>y({args:e})},S={parameters:{docs:{description:{story:c(`icon-button`,`sizes`)}}},render:()=>i`
    <div style="align-items: end; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
    </div>
  `},C={parameters:{docs:{description:{story:`${c(`icon-button`,`color`)}`}}},render:()=>i`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" size="medium"></syn-icon-button>
    </div>
  `},w={parameters:{docs:{description:{story:c(`icon-button`,`link`)}}},render:()=>i`<syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" href="https://example.com" target="_blank" size="medium"></syn-icon-button>`},T={parameters:{docs:{description:{story:c(`icon-button`,`disabled`)}}},render:()=>i`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" disabled size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="primary" disabled size="medium"></syn-icon-button>
    </div>
  `},E={decorators:[f()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c(`icon-button`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-icon-button`);t&&t.focus()},render:()=>i`
    <div style="align-items: center; display: flex; gap: var(--syn-spacing-large);">
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="small"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="medium"></syn-icon-button>
      <syn-icon-button name="wallpaper" label="Wallpaper" color="neutral" size="large"></syn-icon-button>
    </div>
  `},D={parameters:{docs:{description:{story:c(`icon-button`,`label`)}}},render:()=>i`
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

  </style>`},O=d({Default:x,Sizes:S,Colors:C,LinkButton:w,Disabled:T,Label:D}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
})`,...O.parameters?.docs?.source}}},k=[`Default`,`Sizes`,`Colors`,`LinkButton`,`Disabled`,`Focus`,`Label`,`Screenshot`]})))()}export{h as n,A as r,x as t};