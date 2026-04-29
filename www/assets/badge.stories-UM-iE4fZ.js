import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r,d as i,f as a,g as o,u as s}from"./iframe-DVxLZS-s.js";import{n as c,t as l}from"./class-map-CiIHYEuA.js";import{n as u,t as d}from"./localize-DnZL8qNz.js";import{a as f,i as p,n as m,o as h,p as g,r as _,s as v,t as y}from"./synergy-element-DPkpxABF.js";import{n as b,t as x}from"./decorator-CJ_bAnlW.js";import{t as S}from"./button-Bh72Wntz.js";import{t as C}from"./icon-B6NqE4U1.js";import{a as w,i as T,n as E,o as D,r as O,t as k}from"./component-DniQwiZV.js";import{n as A,t as j}from"./menu-item-BiG9-9K5.js";import{t as M}from"./menu-label-DAd772R-.js";import{t as N}from"./popup-CO5zGf_m.js";var P,F=e((()=>{t(),P=r`
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
`})),I,L=e((()=>{t(),I=r`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-small-bold);
    height: var(--syn-spacing-large);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-badge-informative-color-background);
    color: var(--syn-badge-informative-color-text);
  }

  .badge--success {
    background-color: var(--syn-badge-success-color-background);
    color: var(--syn-badge-success-color-text);
  }

  .badge--neutral {
    background-color: var(--syn-badge-neutral-color-background);
    color: var(--syn-badge-neutral-color-text);
  }

  .badge--warning {
    background-color: var(--syn-badge-warning-color-background);
    color: var(--syn-badge-warning-color-text);
  }

  .badge--danger {
    background-color: var(--syn-badge-error-color-background);
    color: var(--syn-badge-error-color-text);
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
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`})),R,z,B=e((()=>{l(),t(),v(),h(),m(),d(),F(),L(),b(),p(),R=class extends y{constructor(...e){super(...e),this.localize=new u(this),this.variant=`primary`}static{this.styles=[f,P,I]}render(){return n`
      <span
        part="base"
        class=${c({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant===`primary`||this.variant===`neutral`?`notification`:this.variant)}
          </span>
        </slot>
      </span>
    `}},_([g({reflect:!0})],R.prototype,`variant`,void 0),R=_([x(`SynBadge`)],R),z=R})),V=e((()=>{B(),B(),z.define(`syn-badge`)})),H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{t(),V(),S(),C(),A(),M(),j(),N(),O(),i(),o(),{args:H,argTypes:U}=T(`syn-badge`),{overrideArgs:W}=w(`syn-badge`),{generateTemplate:G}=D(`syn-badge`),K={args:W([{name:`default`,type:`slot`,value:`Badge`}],H),argTypes:U,component:`syn-badge`,parameters:{chromatic:{modes:a},design:s(`41137-656313`),docs:{description:{component:E(`badge`,`default`)}}},tags:[`Feedback`],title:`Components/syn-badge`},q={parameters:{controls:{disable:!1},docs:{description:{story:E(`badge`,`default`)}}},render:e=>G({args:e})},J={parameters:{docs:{description:{story:E(`badge`,`variants`)}}},render:()=>n`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="danger">danger</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
    </div>
  `},Y={parameters:{docs:{description:{story:E(`badge`,`withButton`)}}},render:()=>n`
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
  `},X={parameters:{docs:{description:{story:E(`badge`,`menu`)}}},render:()=>n`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  `},Z={parameters:{docs:{description:{story:E(`badge`,`withEmptyContent`)}}},render:()=>n`
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
  `},Q=k({Default:q,Variants:J,WithButtons:Y,WithMenuItems:X,WithEmptyContent:Z},250),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  WithButtons,
  WithMenuItems,
  WithEmptyContent
}, 250)`,...Q.parameters?.docs?.source}}},$=[`Default`,`Variants`,`WithButtons`,`WithMenuItems`,`WithEmptyContent`,`Screenshot`]}))();export{q as Default,Q as Screenshot,J as Variants,Y as WithButtons,Z as WithEmptyContent,X as WithMenuItems,$ as __namedExportsOrder,K as default};