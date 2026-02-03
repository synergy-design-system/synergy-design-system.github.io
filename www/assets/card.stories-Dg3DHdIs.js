import{q as b,x as a,g as w,C as S,o as C}from"./iframe-CM1cFSJI.js";import{e as _}from"./class-map-BHavj5nm.js";import{S as T,c as j,n as f}from"./synergy-element-D-UeZOoN.js";import{H as I}from"./slot-9EVoRGQc.js";import"./button-R_bx4RjR.js";import"./icon-button-0sJS589m.js";import{g as e,s as K,a as A,c as D,b as M}from"./component-D0FiR1TK.js";import"./preload-helper-PPVm8Dsz.js";import"./form-d9hCJUdr.js";import"./if-defined-BsPfGaQo.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./icon.component-g5Os0oaQ.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./spinner.component-DLrL1Yp4.js";import"./decorator-CVE5vLu9.js";import"./functions-Cnw7w7U0.js";import"./icon-button.component-Du6l6apy.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const H=b`
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
`,k=b`
  :host {
    --border-color: var(--syn-panel-border-color);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
  }

  .card {
    box-shadow: none;
  }

  /** #1107: Add shadow property to card */
  .card--shadow {
    box-shadow: var(--syn-shadow-small);
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

`;var W=Object.defineProperty,v=(r,p,g,P)=>{for(var s=void 0,m=r.length-1,u;m>=0;m--)(u=r[m])&&(s=u(p,g,s)||s);return s&&W(p,g,s),s};class h extends T{constructor(){super(...arguments),this.hasSlotController=new I(this,"footer","header","image"),this.shadow=!1,this.sharp=!1}static{this.styles=[j,H,k]}render(){return a`
      <div
        part="base"
        class=${_({card:!0,"card--shadow":this.shadow,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}v([f({type:Boolean,reflect:!0})],h.prototype,"shadow");v([f({type:Boolean,reflect:!0})],h.prototype,"sharp");h.define("syn-card");const{args:F,argTypes:O}=K("syn-card"),{overrideArgs:z}=A("syn-card"),{generateTemplate:B}=D("syn-card"),x=({buttonText:r="More info",footerText:p="Optional information"}={})=>`
  <footer slot="footer">
    <small>${p}</small>
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
`,ne={args:z([{name:"image",type:"slot",value:'<img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />'},{name:"default",type:"slot",value:`
        <h3>Headline</h3>
        These are some happy employees, but not just any employees. These are SICK employees.
      `},{name:"footer",type:"slot",value:x()}],F),argTypes:O,component:"syn-card",parameters:{chromatic:{modes:S},design:w("15409-74106"),docs:{description:{component:e("card","default")}}},tags:["Structure"],title:"Components/syn-card"},o={parameters:{controls:{disable:!1},docs:{description:{story:e("card","default")}}},render:r=>B({args:r})},t={parameters:{docs:{description:{story:e("card","basic-card")}}},render:()=>a`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},d={parameters:{docs:{description:{story:e("card","with-header")}}},render:()=>a`
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
  `},n={parameters:{docs:{description:{story:e("card","with-footer")}}},render:()=>a`
    <syn-card class="card-footer">
      This card has a footer. You can put all sorts of things in it!
      ${C(x({buttonText:"Preview",footerText:"Optional information"}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},i={parameters:{docs:{description:{story:e("card","images")}}},render:()=>a`
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
  `},l={parameters:{docs:{description:{story:e("card","shadow")}}},render:()=>a`
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
  `},y=M({Default:o,BasicCard:t,CardWithHeader:d,CardWithFooter:n,Images:i,SharpCard:c,CardWithShadow:l},600);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  SharpCard,
  CardWithShadow
}, 600)`,...y.parameters?.docs?.source}}};const ie=["Default","BasicCard","CardWithHeader","CardWithFooter","Images","SharpCard","CardWithShadow","Screenshot"];export{t as BasicCard,n as CardWithFooter,d as CardWithHeader,l as CardWithShadow,o as Default,i as Images,y as Screenshot,c as SharpCard,ie as __namedExportsOrder,ne as default};
