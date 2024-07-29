import{x as c}from"./lit-element-DILkAbkc.js";import{g as m,o as y}from"./preview-B3aX1ie9.js";import{s as h,a as u,g as e,b as g,c as f}from"./component-DET4JjRq.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-ECBjcGqG.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-DB3uW5ZR.js";import"./icon-CC8qjACX.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DU65Ag4u.js";const{args:x,argTypes:b}=h("syn-card"),{overrideArgs:S}=f("syn-card"),{generateTemplate:v}=u("syn-card"),l=({buttonText:i="More Info",footerText:p="Optional information"}={})=>`
  <footer slot="footer">
    <small>${p}</small>
    <nav>
      <syn-button variant="filled" size="small">${i}</syn-button>
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
`,W={args:S([{name:"image",type:"slot",value:'<img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />'},{name:"default",type:"slot",value:`
        <h3>Headline</h3>
        This are some happy employees, but not just any employees. These are SICK employees.
      `},{name:"footer",type:"slot",value:l()}],x),argTypes:b,component:"syn-card",parameters:{design:m("15409-74106"),docs:{description:{component:e("card","default")}}},title:"Components/syn-card"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("card","default")}}},render:i=>v({args:i})},r={parameters:{docs:{description:{story:e("card","basic-card")}}},render:()=>c`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},s={parameters:{docs:{description:{story:e("card","with-header")}}},render:()=>c`
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
  `},n={parameters:{docs:{description:{story:e("card","with-footer")}}},render:()=>c`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${y(l({buttonText:"Preview",footerText:"Optional information"}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},t={parameters:{docs:{description:{story:e("card","images")}}},render:()=>c`
    <syn-card class="card-image">
      <img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},o={parameters:{docs:{description:{story:e("card","sharp")}}},render:()=>c`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  `},d=g({Default:a,BasicCard:r,CardWithHeader:s,CardWithFooter:n,Images:t,SharpCard:o},600);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'images')
      }
    }
  },
  render: () => html\`
    <syn-card class="card-image">
      <img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  \`
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'sharp')
      }
    }
  },
  render: () => html\`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  \`
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  SharpCard
}, 600)`,...d.parameters?.docs?.source}}};const z=["Default","BasicCard","CardWithHeader","CardWithFooter","Images","SharpCard","Screenshot"];export{r as BasicCard,n as CardWithFooter,s as CardWithHeader,a as Default,t as Images,d as Screenshot,o as SharpCard,z as __namedExportsOrder,W as default};
