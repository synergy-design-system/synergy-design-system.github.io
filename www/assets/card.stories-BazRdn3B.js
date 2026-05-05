import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as i,d as a,f as o,g as s,u as c}from"./iframe--jLxr_1k.js";import{t as l}from"./button-CoWaGdfw.js";import{t as u}from"./card-BVjjgVZM.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./component-BrFCNCcp.js";import{t as _}from"./icon-button-BlqECvQn.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{n(),i(),u(),l(),_(),h(),a(),s(),{args:v,argTypes:y}=f(`syn-card`),{overrideArgs:b}=d(`syn-card`),{generateTemplate:x}=m(`syn-card`),S=({buttonText:e=`More info`,footerText:t=`Optional information`}={})=>`
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
      font: var(--syn-body-medium-bold) !important;
      margin: 0 0 var(--syn-spacing-x-small) !important;  
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
      `},{name:`footer`,type:`slot`,value:S()}],v),argTypes:y,component:`syn-card`,parameters:{chromatic:{modes:o},design:c(`42207-351610`),docs:{description:{component:p(`card`,`default`)}}},tags:[`Structure`],title:`Components/syn-card`},w={parameters:{controls:{disable:!1},docs:{description:{story:p(`card`,`default`)}}},render:e=>x({args:e})},T={parameters:{docs:{description:{story:p(`card`,`basic-card`)}}},render:()=>r`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},E={parameters:{docs:{description:{story:p(`card`,`with-header`)}}},render:()=>r`
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
  `},D={parameters:{docs:{description:{story:p(`card`,`with-footer`)}}},render:()=>r`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${t(S({buttonText:`Preview`,footerText:`Optional information`}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},O={parameters:{docs:{description:{story:p(`card`,`images`)}}},render:()=>r`
    <syn-card class="card-image">
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},k={parameters:{docs:{description:{story:p(`card`,`sharp`)}}},render:()=>r`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  `},A={parameters:{docs:{description:{story:p(`card`,`shadow`)}}},render:()=>r`
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
  `},j=g({Default:w,BasicCard:T,CardWithHeader:E,CardWithFooter:D,Images:O,SharpCard:k,CardWithShadow:A},600),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}, 600)`,...j.parameters?.docs?.source}}},M=[`Default`,`BasicCard`,`CardWithHeader`,`CardWithFooter`,`Images`,`SharpCard`,`CardWithShadow`,`Screenshot`]}))();export{T as BasicCard,D as CardWithFooter,E as CardWithHeader,A as CardWithShadow,w as Default,O as Images,j as Screenshot,k as SharpCard,M as __namedExportsOrder,C as default};