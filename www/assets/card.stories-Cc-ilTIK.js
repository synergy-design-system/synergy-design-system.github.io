import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,a as r,h as i,l as a}from"./preview-C-q7G2lS.js";import{c as o,t as s}from"./lit-DgWh_IaA.js";import{t as c}from"./button-D57oz1we.js";import{t as l}from"./card-BKIZs9_f.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./component-pvg5noYG.js";import{t as g}from"./icon-button-DPnB4h5q.js";var _=t({BasicCard:()=>T,CardWithFooter:()=>D,CardWithHeader:()=>E,CardWithShadow:()=>A,Default:()=>w,Images:()=>O,Screenshot:()=>j,SharpCard:()=>k,__namedExportsOrder:()=>M,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{s(),i(),l(),c(),g(),m(),a(),{args:v,argTypes:y}=d(`syn-card`),{overrideArgs:b}=u(`syn-card`),{generateTemplate:x}=p(`syn-card`),S=({buttonText:e=`More info`,footerText:t=`Optional information`}={})=>`
  <footer slot="footer">
    <small>${t}</small>
    <nav>
      <syn-button variant="filled" size="small">${e}</syn-button>
    </nav>
  </footer>
  <style>
    syn-card {
      max-width: 400px;
    }

    syn-card footer {
      align-items: center;
      color: var(--syn-color-neutral-800);
      display: flex;
      gap: var(--syn-spacing-x-small);
    }

    syn-card h3 {
      font: var(--syn-body-medium-bold);
      margin: 0 0 var(--syn-spacing-x-small); 
    }

    syn-card small {
      font: var(--syn-body-x-small-regular);
    }

    syn-card footer nav {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      gap: var(--syn-spacing-x-small);
      justify-content: flex-end;
    }
  </style>
`,C={args:b([{name:`image`,type:`slot`,value:`<img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />`},{name:`default`,type:`slot`,value:`
        <h3>Headline</h3>
        These are some happy employees, but not just any employees. These are SICK employees.
      `},{name:`footer`,type:`slot`,value:S()}],v),argTypes:y,component:`syn-card`,parameters:{chromatic:{modes:r},docs:{description:{component:f(`card`,`default`)}}},tags:[`Structure`],title:`Components/syn-card`},w={parameters:{controls:{disable:!1},docs:{description:{story:f(`card`,`default`)}}},render:e=>x({args:e})},T={parameters:{docs:{description:{story:f(`card`,`basic-card`)}}},render:()=>o`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},E={parameters:{docs:{description:{story:f(`card`,`with-header`)}}},render:()=>o`
    <syn-card class="card-header">
      <div slot="header">
        Header Title
        <syn-icon-button color="neutral" name="share" label="Share"></syn-icon-button>
      </div>

      This card has a header. You can put all sorts of things in it!
    </syn-card>

    <style>
      .card-header {
        max-width: 400px;
      }

      .card-header [slot='header'] {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .card-header h3 {
        margin: 0;
      }

      .card-header syn-icon-button {
        font-size: var(--syn-font-size-x-large);
      }
    </style>
  `},D={parameters:{docs:{description:{story:f(`card`,`with-footer`)}}},render:()=>o`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${n(S({buttonText:`Preview`,footerText:`Optional information`}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},O={parameters:{docs:{description:{story:f(`card`,`images`)}}},render:()=>o`
    <syn-card class="card-image">
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},k={parameters:{docs:{description:{story:f(`card`,`sharp`)}}},render:()=>o`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  `},A={parameters:{docs:{description:{story:f(`card`,`shadow`)}}},render:()=>o`
    <div class="shadow-card-wrapper">
      <syn-card shadow>
        <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
        These are some happy employees, but not just any employees. These are SICK employees.
      </syn-card>
      <syn-card shadow sharp>
        <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
        These are some happy employees, but not just any employees. These are SICK employees.
      </syn-card>
    </div>

    <style>
      .shadow-card-wrapper {
        display: flex;
        flex-direction: row;
        gap: var(--syn-spacing-large);
      }

      .shadow-card-wrapper syn-card {
        max-width: 400px;
      }
    </style>
  `},j=h({Default:w,BasicCard:T,CardWithHeader:E,CardWithFooter:D,Images:O,SharpCard:k,CardWithShadow:A},600),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('card', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'basic-card')
      }
    }
  },
  render: () => html\`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'with-header')
      }
    }
  },
  render: () => html\`
    <syn-card class="card-header">
      <div slot="header">
        Header Title
        <syn-icon-button color="neutral" name="share" label="Share"></syn-icon-button>
      </div>

      This card has a header. You can put all sorts of things in it!
    </syn-card>

    <style>
      .card-header {
        max-width: 400px;
      }

      .card-header [slot='header'] {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .card-header h3 {
        margin: 0;
      }

      .card-header syn-icon-button {
        font-size: var(--syn-font-size-x-large);
      }
    </style>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'with-footer')
      }
    }
  },
  render: () => html\`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      \${unsafeHTML(createFooter({
    buttonText: 'Preview',
    footerText: 'Optional information'
  }))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'images')
      }
    }
  },
  render: () => html\`
    <syn-card class="card-image">
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'sharp')
      }
    }
  },
  render: () => html\`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'shadow')
      }
    }
  },
  render: () => html\`
    <div class="shadow-card-wrapper">
      <syn-card shadow>
        <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
        These are some happy employees, but not just any employees. These are SICK employees.
      </syn-card>
      <syn-card shadow sharp>
        <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
        These are some happy employees, but not just any employees. These are SICK employees.
      </syn-card>
    </div>

    <style>
      .shadow-card-wrapper {
        display: flex;
        flex-direction: row;
        gap: var(--syn-spacing-large);
      }

      .shadow-card-wrapper syn-card {
        max-width: 400px;
      }
    </style>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  SharpCard,
  CardWithShadow
}, 600)`,...j.parameters?.docs?.source}}},M=[`Default`,`BasicCard`,`CardWithHeader`,`CardWithFooter`,`Images`,`SharpCard`,`CardWithShadow`,`Screenshot`]})))()}export{_ as n,N as r,w as t};