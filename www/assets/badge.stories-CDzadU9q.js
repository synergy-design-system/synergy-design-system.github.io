import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-Berx97Z2.js";import{t as s}from"./button-BOCPVNim.js";import{t as c}from"./icon-sIvJvsnb.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-D0wDPDrh.js";import{t as h}from"./badge-Bd8lIYUF.js";import{n as g,t as _}from"./menu-item-CWGd2B5x.js";import{t as v}from"./menu-label-Cjr_0HPj.js";import{t as y}from"./popup-zpFKtAta.js";var b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{n(),h(),s(),c(),g(),v(),_(),y(),p(),a(),r(),{args:b,argTypes:x}=u(`syn-badge`),{overrideArgs:S}=l(`syn-badge`),{generateTemplate:C}=f(`syn-badge`),w={args:S([{name:`default`,type:`slot`,value:`Badge`}],b),argTypes:x,component:`syn-badge`,parameters:{chromatic:{modes:o},design:i(`41137-656313`),docs:{description:{component:d(`badge`,`default`)}}},tags:[`Feedback`],title:`Components/syn-badge`},T={parameters:{controls:{disable:!1},docs:{description:{story:d(`badge`,`default`)}}},render:e=>C({args:e})},E={parameters:{docs:{description:{story:d(`badge`,`variants`)}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="danger">danger</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
    </div>
  `},D={parameters:{docs:{description:{story:d(`badge`,`withButton`)}}},render:()=>t`
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
  `},O={parameters:{docs:{description:{story:d(`badge`,`menu`)}}},render:()=>t`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  `},k={parameters:{docs:{description:{story:d(`badge`,`withEmptyContent`)}}},render:()=>t`
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
  `},A=m({Default:T,Variants:E,WithButtons:D,WithMenuItems:O,WithEmptyContent:k},250),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  WithButtons,
  WithMenuItems,
  WithEmptyContent
}, 250)`,...A.parameters?.docs?.source}}},j=[`Default`,`Variants`,`WithButtons`,`WithMenuItems`,`WithEmptyContent`,`Screenshot`]}));M();export{T as Default,A as Screenshot,E as Variants,D as WithButtons,k as WithEmptyContent,O as WithMenuItems,j as __namedExportsOrder,w as default,M as t};