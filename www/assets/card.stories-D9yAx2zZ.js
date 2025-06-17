import{g as f,x as c,o as v}from"./iframe-GSRepqjd.js";import{a as x}from"./class-map-QQ7HVnPG.js";import{i as g,x as S,n as _}from"./property-ImbD-3qY.js";import{H as w}from"./slot-9EVoRGQc.js";import{S as C,c as T}from"./component.styles-DXWA7L2q.js";import"./button-CwZJTvX8.js";import"./icon-button-GSYtI5Q6.js";import{g as e,s as j,a as I,c as D,b as H}from"./component-sz2YSCF4.js";import"./form-d9hCJUdr.js";import"./static-BkNWbPkN.js";import"./if-defined-CDNCanKK.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./directive-helpers-CvZEagFv.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./icon.component-B3J6d3UF.js";import"./spinner.component-pJEN2kXr.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./icon-button.component-Dzxtd5Sk.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const k=g`
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
`,K=g`
  :host {
    --border-color: var(--syn-color-neutral-300);
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

`;var A=Object.defineProperty,F=(r,l,y,z)=>{for(var a=void 0,m=r.length-1,h;m>=0;m--)(h=r[m])&&(a=h(l,y,a)||a);return a&&A(l,y,a),a};class u extends C{constructor(){super(...arguments),this.hasSlotController=new w(this,"footer","header","image"),this.sharp=!1}static{this.styles=[T,k,K]}render(){return S`
      <div
        part="base"
        class=${x({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}F([_({type:Boolean,reflect:!0})],u.prototype,"sharp");u.define("syn-card");const{args:M,argTypes:O}=j("syn-card"),{overrideArgs:W}=I("syn-card"),{generateTemplate:$}=D("syn-card"),b=({buttonText:r="More Info",footerText:l="Optional information"}={})=>`
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
`,ir={args:W([{name:"image",type:"slot",value:'<img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />'},{name:"default",type:"slot",value:`
        <h3>Headline</h3>
        This are some happy employees, but not just any employees. These are SICK employees.
      `},{name:"footer",type:"slot",value:b()}],M),argTypes:O,component:"syn-card",parameters:{design:f("15409-74106"),docs:{description:{component:e("card","default")}}},tags:["Structure"],title:"Components/syn-card"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("card","default")}}},render:r=>$({args:r})},o={parameters:{docs:{description:{story:e("card","basic-card")}}},render:()=>c`
    <syn-card class="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </syn-card>
    <style>
    .card-basic {
      max-width: 400px;
    }
    </style>
  `},t={parameters:{docs:{description:{story:e("card","with-header")}}},render:()=>c`
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
      ${v(b({buttonText:"Preview",footerText:"Optional information"}))}
    </syn-card>

    <style>
      .card-footer {
        max-width: 400px;
      }
    </style>
  `},d={parameters:{docs:{description:{story:e("card","images")}}},render:()=>c`
    <syn-card class="card-image">
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  `},i={parameters:{docs:{description:{story:e("card","sharp")}}},render:()=>c`
    <syn-card class="sharp-card" sharp>
      <img slot="image" src="https://synergy-design-system.github.io/card-example.jpg" alt="Multiple persons having lunch in SICK Academy" />
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  `},p=H({Default:s,BasicCard:o,CardWithHeader:t,CardWithFooter:n,Images:d,SharpCard:i},600);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .card-image {
        max-width: 400px;
      }
    </style>
  \`
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      This are some happy employees, but not just any employees. These are SICK employees.
    </syn-card>

    <style>
      .sharp-card {
        max-width: 400px;
      }
    </style>
  \`
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  BasicCard,
  CardWithHeader,
  CardWithFooter,
  Images,
  SharpCard
}, 600)`,...p.parameters?.docs?.source}}};const cr=["Default","BasicCard","CardWithHeader","CardWithFooter","Images","SharpCard","Screenshot"];export{o as BasicCard,n as CardWithFooter,t as CardWithHeader,s as Default,d as Images,p as Screenshot,i as SharpCard,cr as __namedExportsOrder,ir as default};
