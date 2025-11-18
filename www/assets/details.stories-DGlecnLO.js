import{g as p,C as y,x as a}from"./iframe-cdTaQBvw.js";import"./details-DM6DyW7K.js";import"./icon-IaElupQ2.js";import{g as e,s as g,a as b,c as v,b as h}from"./component-BuQbJE7T.js";import{p as S}from"./PaddingDecorator-s_8s12KQ.js";import"./preload-helper-Ct5FWWRu.js";import"./animation-registry-l4L8bmT6.js";import"./class-map-CnRrksDE.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-CCQiaWXz.js";import"./query-DAIS6qJ0.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./icon.component-CDj2c9Em.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";const{args:f,argTypes:x}=g("syn-details"),{overrideArgs:A}=b("syn-details"),{generateTemplate:q}=v("syn-details"),B={args:A([{name:"summary",type:"attribute",value:"Toggle Me"},{name:"contained",type:"attribute",value:!0},{name:"default",type:"slot",value:`<h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.`}],f),argTypes:x,component:"syn-details",parameters:{chromatic:{modes:y},design:p("16771-27087"),docs:{description:{component:e("details","default")}}},tags:["Structure","SICK2018","SICK2025"],title:"Components/syn-details"},o={parameters:{controls:{disable:!1},docs:{description:{story:e("details","default")}}},render:s=>q({args:s})},t={parameters:{docs:{description:{story:e("details","open")}}},render:()=>a`
    <syn-details summary="Toggle Me" open>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},r={parameters:{docs:{description:{story:e("details","contained")}}},render:()=>a`
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
  `},m={decorators:[S()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("details","focus")}}},play:({canvasElement:s})=>{const u=s.querySelector("syn-details");u&&u.shadowRoot.querySelector("summary").focus()},render:()=>a`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},c=s=>({parameters:{docs:{description:{story:e("details","disabled")}}},render:()=>a`
    <syn-details summary="Toggle Me" disabled .contained=${s}>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `}),n=c(!0),D=c(!1),i={parameters:{docs:{description:{story:e("details","size")}}},render:()=>a`
    <syn-details size="medium" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details size="large" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},d={parameters:{docs:{description:{story:e("details","icon")}}},render:()=>a`
    <syn-details open>
      <syn-icon name="home" slot="summary"></syn-icon>
      <span slot="summary">Accordion Element</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},l=h({Default:o,Open:t,Contained:r,DisabledNotContained:D,Disabled:n,Sizes:i,PrefixIcons:d},300);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"createDisabledStory(true)",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('details', 'size')
      }
    }
  },
  render: () => html\`
    <syn-details size="medium" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details size="large" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Open,
  Contained,
  DisabledNotContained,
  Disabled,
  Sizes,
  PrefixIcons
}, 300)`,...l.parameters?.docs?.source}}};const G=["Default","Open","Contained","Focus","Disabled","Sizes","PrefixIcons","Screenshot"];export{r as Contained,o as Default,n as Disabled,m as Focus,t as Open,d as PrefixIcons,l as Screenshot,i as Sizes,G as __namedExportsOrder,B as default};
