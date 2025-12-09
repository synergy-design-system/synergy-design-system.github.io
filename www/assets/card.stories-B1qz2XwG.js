import{j as g,x as s,g as f,C as v,o as x}from"./iframe-CCf0SjNU.js";import{e as S}from"./class-map-CPEWKE0X.js";import{S as _,c as C,n as w}from"./synergy-element-C2cCdqmn.js";import{H as T}from"./slot-9EVoRGQc.js";import"./button-BfUvjWsk.js";import"./icon-button-xp6XAFXF.js";import{g as e,s as j,a as I,c as D,b as K}from"./component-Brb9k3ih.js";import"./preload-helper-Ct5FWWRu.js";import"./form-d9hCJUdr.js";import"./if-defined-BzpMTWTC.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./icon.component-BxEwtDV8.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./spinner.component-5Pq2XyAj.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./icon-button.component-Bi2xlwTF.js";import"./index-CQ0aEGxp.js";import"./_docs-DXCV3alH.js";const H=g`
	/* stylelint-disable */
  :host {
    --border-color: var(--syn-color-neutral-200);
    --border-radius: var(--syn-border-radius-medium);
    --border-width: 1px;
    --padding: var(--syn-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,k=g`
  :host {
    --border-color: var(--syn-panel-border-color);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
  }

  .card {
    box-shadow: none;
  }

  /**
   * Header adjustments
   */
  .card__header {
    border: none;
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-large);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * Card body
   */
  .card__body {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-medium-regular);
  }

  /**
   * Card Footer
   */
  .card--has-footer .card__footer {
    border-top: none;
    padding: var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  /**
   * Cards that are sharp do not receive a border radius
   */
  .card--sharp {
    border-radius: var(--syn-border-radius-none);
  }

  /**
   * Do not apply border radius to sharp card images
   */
  .card--sharp .card__image {
    border-top-left-radius: var(--syn-border-radius-none);
    border-top-right-radius: var(--syn-border-radius-none);
  }

`;var A=Object.defineProperty,M=(r,l,y,P)=>{for(var a=void 0,m=r.length-1,h;m>=0;m--)(h=r[m])&&(a=h(l,y,a)||a);return a&&A(l,y,a),a};class u extends _{constructor(){super(...arguments),this.hasSlotController=new T(this,"footer","header","image"),this.sharp=!1}static{this.styles=[C,H,k]}render(){return s`
      <div
        part="base"
        class=${S({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}M([w({type:Boolean,reflect:!0})],u.prototype,"sharp");u.define("syn-card");const{args:F,argTypes:O}=j("syn-card"),{overrideArgs:W}=I("syn-card"),{generateTemplate:z}=D("syn-card"),b=({buttonText:r="More info",footerText:l="Optional information"}={})=>`
  <footer slot="footer">
    <small>${l}</small>
    <nav>
      <syn-button variant="filled" size="small">${r}</syn-button>
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
`,nr={args:W([{name:"image",type:"slot",value:'<img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />'},{name:"default",type:"slot",value:`
        <h3>Headline</h3>
        These are some happy employees, but not just any employees. These are SICK employees.
      `},{name:"footer",type:"slot",value:b()}],F),argTypes:O,component:"syn-card",parameters:{chromatic:{modes:v},design:f("15409-74106"),docs:{description:{component:e("card","default")}}},tags:["Structure","SICK2018","SICK2025"],title:"Components/syn-card"},o={parameters:{controls:{disable:!1},docs:{description:{story:e("card","default")}}},render:r=>z({args:r})},t={parameters:{docs:{description:{story:e("card","basic-card")}}},render:()=>s`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},n={parameters:{docs:{description:{story:e("card","with-header")}}},render:()=>s`
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
  `},d={parameters:{docs:{description:{story:e("card","with-footer")}}},render:()=>s`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${x(b({buttonText:"Preview",footerText:"Optional information"}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},i={parameters:{docs:{description:{story:e("card","images")}}},render:()=>s`
    <syn-card class="card-image">
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},c={parameters:{docs:{description:{story:e("card","sharp")}}},render:()=>s`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      These are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  `},p=K({Default:o,BasicCard:t,CardWithHeader:n,CardWithFooter:d,Images:i,SharpCard:c},600);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  SharpCard
}, 600)`,...p.parameters?.docs?.source}}};const dr=["Default","BasicCard","CardWithHeader","CardWithFooter","Images","SharpCard","Screenshot"];export{t as BasicCard,d as CardWithFooter,n as CardWithHeader,o as Default,i as Images,p as Screenshot,c as SharpCard,dr as __namedExportsOrder,nr as default};
