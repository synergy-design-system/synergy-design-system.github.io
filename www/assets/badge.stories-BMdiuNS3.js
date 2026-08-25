import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-Br8gqwpX.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-CbgJ0euj.js";import{t as s}from"./icon-8mkXc18S.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-iQCIgMPU.js";import{t as m}from"./badge-F-VJM41A.js";import{n as h,t as g}from"./menu-item-BSPcAHyj.js";import{t as _}from"./menu-label-Ci8t4xPb.js";import{t as v}from"./popup-BM27oMzc.js";var y=t({Default:()=>T,Screenshot:()=>A,Variants:()=>E,WithButtons:()=>D,WithEmptyContent:()=>k,WithMenuItems:()=>O,__namedExportsOrder:()=>j,default:()=>w}),b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),m(),o(),s(),h(),_(),g(),v(),f(),r(),{args:b,argTypes:x}=l(`syn-badge`),{overrideArgs:S}=c(`syn-badge`),{generateTemplate:C}=d(`syn-badge`),w={args:S([{name:`default`,type:`slot`,value:`Badge`}],b),argTypes:x,component:`syn-badge`,parameters:{chromatic:{modes:n},docs:{description:{component:u(`badge`,`default`)}}},tags:[`Feedback`],title:`Components/syn-badge`},T={parameters:{controls:{disable:!1},docs:{description:{story:u(`badge`,`default`)}}},render:e=>C({args:e})},E={parameters:{docs:{description:{story:u(`badge`,`variants`)}}},render:()=>i`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-badge variant="primary">primary</syn-badge>
      <syn-badge variant="success">success</syn-badge>
      <syn-badge variant="warning">warning</syn-badge>
      <syn-badge variant="critical">critical</syn-badge>
      <syn-badge variant="error">error</syn-badge>
      <syn-badge variant="danger">danger*</syn-badge>
      <syn-badge variant="neutral">neutral</syn-badge>
    </div>
  `},D={parameters:{docs:{description:{story:u(`badge`,`withButton`)}}},render:()=>i`
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
        <syn-badge variant="error" pill>6</syn-badge>
      </syn-button>
    </div>
  `},O={parameters:{docs:{description:{story:u(`badge`,`menu`)}}},render:()=>i`
    <syn-menu style="max-width: 228px;">
      <syn-menu-label>Messages</syn-menu-label>
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="primary" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="primary" pill>12</syn-badge></syn-menu-item>
    </syn-menu>
  `},k={parameters:{docs:{description:{story:u(`badge`,`withEmptyContent`)}}},render:()=>i`
    <div style="display: flex; position: relative; gap: var(--syn-spacing-3x-large);">
      <syn-popup
        active
        distance="-3"
        placement="right-start"
        skidding="-12"
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
        distance="-10"
        placement="right-start"
        skidding="-14"
      >
        <syn-icon
          name="wallpaper"
          style="font-size: var(--syn-font-size-x-large)"
          slot="anchor"
        ></syn-icon>
        <syn-badge>12</syn-badge>
      </syn-popup>
    </div>
  `},A=p({Default:T,Variants:E,WithButtons:D,WithMenuItems:O,WithEmptyContent:k},250),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      <syn-badge variant="critical">critical</syn-badge>
      <syn-badge variant="error">error</syn-badge>
      <syn-badge variant="danger">danger*</syn-badge>
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
        <syn-badge variant="error" pill>6</syn-badge>
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
      <syn-menu-item>Comments <syn-badge slot="suffix" variant="primary" pill>4</syn-badge></syn-menu-item>
      <syn-menu-item>Replies <syn-badge slot="suffix" variant="primary" pill>12</syn-badge></syn-menu-item>
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
        distance="-3"
        placement="right-start"
        skidding="-12"
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
        distance="-10"
        placement="right-start"
        skidding="-14"
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
}, 250)`,...A.parameters?.docs?.source}}},j=[`Default`,`Variants`,`WithButtons`,`WithMenuItems`,`WithEmptyContent`,`Screenshot`]})))()}export{y as n,M as r,T as t};