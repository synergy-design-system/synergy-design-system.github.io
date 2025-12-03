import{j as b,x as d,g as h,C as f}from"./iframe-CW7A_EUN.js";import{e as x}from"./class-map-BqiZXczW.js";import{c as w,n as S,S as k}from"./synergy-element-noebnX5D.js";import{L as C}from"./localize-Dh03wnLC.js";import{e as D}from"./decorator-DANECR0-.js";import"./button-DhO_MbOs.js";import"./icon-DupGej4x.js";import"./menu-item-CIqrxO0d.js";import"./menu-label-CbsrMiKY.js";import"./popup-DQzws7jF.js";import{g as a,s as z,a as W,c as _,b as E}from"./component-CCMeno9Q.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DihgwUfS.js";import"./functions-CDi3doZH.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-CrKN9-gv.js";import"./icon.component-Dx2STHNo.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./spinner.component-Dqb3CZyu.js";import"./menu.component-hiCygTLn.js";import"./popup.component-BhaN0T3o.js";import"./divider.component-BmPBqvry.js";import"./index-CQ0aEGxp.js";import"./_docs-DXCV3alH.js";const B=b`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--syn-border-radius-small);
    border: solid 1px var(--syn-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--success {
    background-color: var(--syn-color-success-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--syn-color-warning-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--syn-color-danger-600);
    color: var(--syn-color-neutral-0);
  }
`,I=b`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-medium-bold);
    height: var(--syn-spacing-large);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-badge-informative-color-background, var(--syn-color-primary-600));
    color: var(--syn-badge-informative-color-text, var(--syn-typography-color-text-inverted));
  }

  .badge--success {
    background-color: var(--syn-badge-success-color-background, var(--syn-color-success-500));
    color: var(--syn-badge-success-color-text, var(--syn-typography-color-text));
  }

  .badge--neutral {
    background-color: var(--syn-badge-neutral-color-background, var(--syn-color-neutral-800));
    color: var(--syn-badge-neutral-color-text, var(--syn-typography-color-text-inverted));
  }

  .badge--warning {
    background-color: var(--syn-badge-warning-color-background, var(--syn-color-warning-400));
    color: var(--syn-badge-warning-color-text, var(--syn-typography-color-text));
  }

  .badge--danger {
    background-color: var(--syn-badge-error-color-background, var(--syn-color-error-600));
    color: var(--syn-badge-error-color-text, var(--syn-typography-color-text-inverted));
  }

  /**
   * Special treatment: If the badge is empty, show it as a dot only
   */
  :host(:empty) .badge {
    height: var(--syn-spacing-x-small);
    min-width: initial;
    padding: 0;
    width: var(--syn-spacing-x-small);
  }

  .visually-hidden {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;var M=Object.defineProperty,O=Object.getOwnPropertyDescriptor,v=(l,c,p,y)=>{for(var e=y>1?void 0:y?O(c,p):c,m=l.length-1,u;m>=0;m--)(u=l[m])&&(e=(y?u(c,p,e):u(e))||e);return y&&e&&M(c,p,e),e};let i=class extends k{constructor(){super(...arguments),this.localize=new C(this),this.variant="primary"}render(){return d`
      <span
        part="base"
        class=${x({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}};i.styles=[w,B,I];v([S({reflect:!0})],i.prototype,"variant",2);i=v([D("SynBadge")],i);i.define("syn-badge");const{args:j,argTypes:P}=z("syn-badge"),{overrideArgs:V}=W("syn-badge"),{generateTemplate:R}=_("syn-badge"),ce={args:V([{name:"default",type:"slot",value:"Badge"}],j),argTypes:P,component:"syn-badge",parameters:{chromatic:{modes:f},design:h("14127-697884"),docs:{description:{component:a("badge","default")}}},tags:["Feedback","SICK2018","SICK2025"],title:"Components/syn-badge"},r={parameters:{controls:{disable:!1},docs:{description:{story:a("badge","default")}}},render:l=>R({args:l})},n={parameters:{docs:{description:{story:a("badge","variants")}}},render:()=>d`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="danger">danger</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
    </div>
  `},s={parameters:{docs:{description:{story:a("badge","withButton")}}},render:()=>d`
    <div style="display: flex; gap: var(--syn-spacing-2x-large)">
      <syn-button>
        Requests
        <syn-badge pill>30</syn-badge>
      </syn-button>

      <syn-button>
        Warnings
        <syn-badge variant="warning" pill>8</syn-badge>
      </syn-button>

      <syn-button>
        Errors
        <syn-badge variant="danger" pill>6</syn-badge>
      </syn-button>
    </div>
  `},t={parameters:{docs:{description:{story:a("badge","menu")}}},render:()=>d`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  `},o={parameters:{docs:{description:{story:a("badge","withEmptyContent")}}},render:()=>d`
    <div style="display: flex; position: relative; gap: var(--syn-spacing-3x-large);">
      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge></syn-badge>
      </syn-popup>

      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge>12</syn-badge>
      </syn-popup>
    </div>
  `},g=E({Default:r,Variants:n,WithButtons:s,WithMenuItems:t,WithEmptyContent:o},250);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('badge', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'variants')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="danger">danger</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'withButton')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-2x-large)">
      <syn-button>
        Requests
        <syn-badge pill>30</syn-badge>
      </syn-button>

      <syn-button>
        Warnings
        <syn-badge variant="warning" pill>8</syn-badge>
      </syn-button>

      <syn-button>
        Errors
        <syn-badge variant="danger" pill>6</syn-badge>
      </syn-button>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'menu')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  \`
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'withEmptyContent')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; position: relative; gap: var(--syn-spacing-3x-large);">
      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge></syn-badge>
      </syn-popup>

      <syn-popup
        active
        distance="-8"
        placement="right-start"
        skidding="-10"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge>12</syn-badge>
      </syn-popup>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  WithButtons,
  WithMenuItems,
  WithEmptyContent
}, 250)`,...g.parameters?.docs?.source}}};const ye=["Default","Variants","WithButtons","WithMenuItems","WithEmptyContent","Screenshot"];export{r as Default,g as Screenshot,n as Variants,s as WithButtons,o as WithEmptyContent,t as WithMenuItems,ye as __namedExportsOrder,ce as default};
