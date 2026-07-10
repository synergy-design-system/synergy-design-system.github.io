import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-BJUJk-mP.js";import{t as s}from"./icon-CWcZLnjq.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-Dl_LLDeh.js";import{t as m}from"./details-B27__f4Y.js";import{n as h,t as g}from"./PaddingDecorator-DKDp5bXd.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{n(),m(),s(),f(),a(),g(),r(),{args:_,argTypes:v}=l(`syn-details`),{overrideArgs:y}=c(`syn-details`),{generateTemplate:b}=d(`syn-details`),x={args:y([{name:`summary`,type:`attribute`,value:`Toggle Me`},{name:`contained`,type:`attribute`,value:!0},{name:`default`,type:`slot`,value:`<h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.`}],_),argTypes:v,component:`syn-details`,parameters:{chromatic:{modes:o},design:i(`41227-232486`),docs:{description:{component:u(`details`,`default`)}}},tags:[`Structure`],title:`Components/syn-details`},S={parameters:{controls:{disable:!1},docs:{description:{story:u(`details`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:u(`details`,`open`)}}},render:()=>t`
    <syn-details summary="Toggle Me" open>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},w={parameters:{docs:{description:{story:u(`details`,`contained`)}}},render:()=>t`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details summary="Toggle Me" open contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},T={decorators:[h()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`details`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-details`);t&&t.shadowRoot.querySelector(`summary`).focus()},render:()=>t`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},E=e=>({parameters:{docs:{description:{story:u(`details`,`disabled`)}}},render:()=>t`
    <syn-details summary="Toggle Me" disabled .contained=${e}>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `}),D=E(!0),O=E(!1),k={parameters:{docs:{description:{story:u(`details`,`size`)}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-x-small); flex-direction: column;">
      <syn-details size="small" contained>
        <span slot="summary">Toggle Me</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-x-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details size="medium" contained>
        <span slot="summary">Toggle Me</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details size="large" contained>
        <span slot="summary">Toggle Me</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-medium-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </div>
  `},A={parameters:{docs:{description:{story:u(`details`,`icon`)}}},render:()=>t`
    <syn-details open>
      <syn-icon name="home" slot="summary"></syn-icon>
      <span slot="summary">Accordion Element</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},j=p({Default:S,Open:C,Contained:w,DisabledNotContained:O,Disabled:D,Sizes:k,PrefixIcons:A},300),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('details', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('details', 'open')
      }
    }
  },
  render: () => html\`
    <syn-details summary="Toggle Me" open>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('details', 'contained')
      }
    }
  },
  render: () => html\`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details summary="Toggle Me" open contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('details', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const details = canvasElement.querySelector('syn-details');
    if (details) {
      details.shadowRoot!.querySelector('summary')!.focus();
    }
  },
  render: () => html\`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createDisabledStory(true)`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('details', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-x-small); flex-direction: column;">
      <syn-details size="small" contained>
        <span slot="summary">Toggle Me</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-x-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details size="medium" contained>
        <span slot="summary">Toggle Me</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details size="large" contained>
        <span slot="summary">Toggle Me</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-medium-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </div>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('details', 'icon')
      }
    }
  },
  render: () => html\`
    <syn-details open>
      <syn-icon name="home" slot="summary"></syn-icon>
      <span slot="summary">Accordion Element</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Open,
  Contained,
  DisabledNotContained,
  Disabled,
  Sizes,
  PrefixIcons
}, 300)`,...j.parameters?.docs?.source}}},M=[`Default`,`Open`,`Contained`,`Focus`,`Disabled`,`Sizes`,`PrefixIcons`,`Screenshot`]}));N();export{w as Contained,S as Default,D as Disabled,T as Focus,C as Open,A as PrefixIcons,j as Screenshot,k as Sizes,M as __namedExportsOrder,x as default,N as t};