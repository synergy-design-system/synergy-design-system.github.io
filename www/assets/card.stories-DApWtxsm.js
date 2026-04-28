import{C as y,c as a,o as h,d as g}from"./iframe-CfKmpROb.js";import"./card-DqWrAvy2.js";import"./button-Dmxtjkv9.js";import"./icon-button-CGeIfjdQ.js";import{g as e,a as u,s as f,b as x,c as b}from"./component-CDJDa1-b.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-DuCXFyun.js";import"./synergy-element-D6uzLjd8.js";import"./slot-9EVoRGQc.js";import"./button.component-iYmpiFHk.js";import"./form-d9hCJUdr.js";import"./if-defined-DcCHMlyu.js";import"./controller-0nuky388.js";import"./icon.component-BOIuuAKO.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./spinner.component-CJLz1-cE.js";import"./decorator-jbWt9cIm.js";import"./functions-DCU90qiI.js";import"./icon-button.component-B3ct88uZ.js";import"./index-3hbeBem-.js";import"./_docs-VWJ8UqMU.js";const{args:S,argTypes:w}=f("syn-card"),{overrideArgs:v}=b("syn-card"),{generateTemplate:C}=x("syn-card"),l=({buttonText:p="More info",footerText:m="Optional information"}={})=>`
  <footer slot="footer">
    <small>${m}</small>
    <nav>
      <syn-button variant="filled" size="small">${p}</syn-button>
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
`,q={args:v([{name:"image",type:"slot",value:'<img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />'},{name:"default",type:"slot",value:`
        <h3>Headline</h3>
        These are some happy employees, but not just any employees. These are SICK employees.
      `},{name:"footer",type:"slot",value:l()}],S),argTypes:w,component:"syn-card",parameters:{chromatic:{modes:y},design:g("42207-351610"),docs:{description:{component:e("card","default")}}},tags:["Structure"],title:"Components/syn-card"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("card","default")}}},render:p=>C({args:p})},s={parameters:{docs:{description:{story:e("card","basic-card")}}},render:()=>a`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},t={parameters:{docs:{description:{story:e("card","with-header")}}},render:()=>a`
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
  `},o={parameters:{docs:{description:{story:e("card","with-footer")}}},render:()=>a`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${h(l({buttonText:"Preview",footerText:"Optional information"}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},n={parameters:{docs:{description:{story:e("card","images")}}},render:()=>a`
    <syn-card class="card-image">
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},c={parameters:{docs:{description:{story:e("card","sharp")}}},render:()=>a`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  `},d={parameters:{docs:{description:{story:e("card","shadow")}}},render:()=>a`
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
  `},i=u({Default:r,BasicCard:s,CardWithHeader:t,CardWithFooter:o,Images:n,SharpCard:c,CardWithShadow:d},600);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  SharpCard,
  CardWithShadow
}, 600)`,...i.parameters?.docs?.source}}};const G=["Default","BasicCard","CardWithHeader","CardWithFooter","Images","SharpCard","CardWithShadow","Screenshot"];export{s as BasicCard,o as CardWithFooter,t as CardWithHeader,d as CardWithShadow,r as Default,n as Images,i as Screenshot,c as SharpCard,G as __namedExportsOrder,q as default};
