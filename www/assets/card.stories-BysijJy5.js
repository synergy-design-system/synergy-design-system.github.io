import{x as n}from"./lit-element-DILkAbkc.js";import{g as m,o as y}from"./preview-BWNuBL4z.js";import{s as u,a as h,g as e,b as g,c as f}from"./component-K_9I7N5f.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-C7rLUjkO.js";import"./icon.component-BB67hdAN.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-CWeYOLfV.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-PzU9tuEL.js";const{args:x,argTypes:v}=u("syn-card"),{overrideArgs:b}=f("syn-card"),{generateTemplate:S}=h("syn-card"),l=({buttonText:c="More Info",footerText:p="Optional information"}={})=>`
  <footer slot="footer">
    <small>${p}</small>
    <nav>
      <syn-button variant="filled" size="small">${c}</syn-button>
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
`,O={args:b([{name:"image",type:"slot",value:'<img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />'},{name:"default",type:"slot",value:`
        <h3>Headline</h3>
        This are some happy employees, but not just any employees. These are SICK employees.
      `},{name:"footer",type:"slot",value:l()}],x),argTypes:v,component:"syn-card",parameters:{design:m("15409-74106"),docs:{description:{component:e("card","default")}}},title:"Components/syn-card"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("card","default")}}},render:c=>S({args:c})},s={parameters:{docs:{description:{story:e("card","basic-card")}}},render:()=>n`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},r={parameters:{docs:{description:{story:e("card","with-header")}}},render:()=>n`
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
  `},t={parameters:{docs:{description:{story:e("card","with-footer")}}},render:()=>n`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${y(l({buttonText:"Preview",footerText:"Optional information"}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},o={parameters:{docs:{description:{story:e("card","images")}}},render:()=>n`
    <syn-card class="card-image">
      <img slot="image" src="/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},d={parameters:{docs:{description:{story:e("card","nested")}}},render:()=>n`
    <syn-card class="nested-cards">
      <div slot="header">
        Header Title
        <syn-icon-button color="neutral" name="share" label="Share"></syn-icon-button>
      </div>

      <div class="nested-cards-items">
        ${[0,1].map(()=>n`
          <syn-card nested>
            <img
              slot="image"
              src="/card-example.jpg"
              alt="Multiple persons having lunch in SICK Academy"
            />
            <h3>Headline</h3>
            Together, we shape digital transformation and develop innovative solutions for a sustainable future.
            
            <footer slot="footer">
              <small>Optional Information</small>
              <nav>
                <syn-button variant="filled" size="small">Button</syn-button>
              </nav>
            </footer>
          </syn-card>
        `)}
      </div>
    </syn-card>

    <style>
      .nested-cards {
        max-width: 800px;
      }

      .nested-cards [slot='header'] {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .nested-cards syn-icon-button {
        font-size: var(--syn-font-size-x-large);
      }

      .nested-cards-items {
        display: flex;
        gap: var(--syn-spacing-large);
      }

      .nested-cards-items footer {
        align-items: center;
        display: flex;
        gap: var(--syn-spacing-x-small);
      }

      .nested-cards-items footer nav {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        gap: var(--syn-spacing-x-small);
        justify-content: flex-end;
      }
    </style>
  `},i=g({Default:a,BasicCard:s,CardWithHeader:r,CardWithFooter:t,Images:o,NestedCard:d},600);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} as Story`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('card', 'nested')
      }
    }
  },
  render: () => html\`
    <syn-card class="nested-cards">
      <div slot="header">
        Header Title
        <syn-icon-button color="neutral" name="share" label="Share"></syn-icon-button>
      </div>

      <div class="nested-cards-items">
        \${[0, 1].map(() => html\`
          <syn-card nested>
            <img
              slot="image"
              src="/card-example.jpg"
              alt="Multiple persons having lunch in SICK Academy"
            />
            <h3>Headline</h3>
            Together, we shape digital transformation and develop innovative solutions for a sustainable future.
            
            <footer slot="footer">
              <small>Optional Information</small>
              <nav>
                <syn-button variant="filled" size="small">Button</syn-button>
              </nav>
            </footer>
          </syn-card>
        \`)}
      </div>
    </syn-card>

    <style>
      .nested-cards {
        max-width: 800px;
      }

      .nested-cards [slot='header'] {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .nested-cards syn-icon-button {
        font-size: var(--syn-font-size-x-large);
      }

      .nested-cards-items {
        display: flex;
        gap: var(--syn-spacing-large);
      }

      .nested-cards-items footer {
        align-items: center;
        display: flex;
        gap: var(--syn-spacing-x-small);
      }

      .nested-cards-items footer nav {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        gap: var(--syn-spacing-x-small);
        justify-content: flex-end;
      }
    </style>
  \`
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  NestedCard
}, 600)`,...i.parameters?.docs?.source}}};const F=["Default","BasicCard","CardWithHeader","CardWithFooter","Images","NestedCard","Screenshot"];export{s as BasicCard,t as CardWithFooter,r as CardWithHeader,a as Default,o as Images,d as NestedCard,i as Screenshot,F as __namedExportsOrder,O as default};
