import{x as o}from"./directive-helpers-Dvm_Ferq.js";import{g as e,a as y,s as p,b as g,c as b,d as v}from"./component-DHkdqIA6.js";import"./if-defined-zGpnP1OK.js";import"./ref-BbXSZ-3a.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./index-DrFu-skq.js";import"./icon-button-BPEjE2OL.js";import"./library-C58jM0s5.js";import"./icon.component-D6ywNx23.js";import"./index-Vx7n56Jp.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-D6tUsI5c.js";const{args:h,argTypes:S}=p("syn-details"),{overrideArgs:f}=g("syn-details"),{generateTemplate:x}=b("syn-details"),I={args:f([{name:"summary",type:"attribute",value:"Toggle Me"},{name:"contained",type:"attribute",value:!0},{name:"default",type:"slot",value:`<h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.`}],h),argTypes:S,component:"syn-details",parameters:{design:y("16771-27087"),docs:{description:{component:e("details","default")}}},title:"Components/syn-details"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("details","default")}}},render:a=>x({args:a})},t={parameters:{docs:{description:{story:e("details","open")}}},render:()=>o`
    <syn-details summary="Toggle Me" open>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},r={parameters:{docs:{description:{story:e("details","contained")}}},render:()=>o`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details summary="Toggle Me" open contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("details","focus")}}},play:({canvasElement:a})=>{const u=a.querySelector("syn-details");u&&u.shadowRoot.querySelector("summary").focus()},render:()=>o`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},c=a=>({parameters:{docs:{description:{story:e("details","disabled")}}},render:()=>o`
    <syn-details summary="Toggle Me" disabled .contained=${a}>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `}),n=c(!0),q=c(!1),i={parameters:{docs:{description:{story:e("details","size")}}},render:()=>o`
    <syn-details size="medium" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details size="large" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},l={parameters:{docs:{description:{story:e("details","icon")}}},render:()=>o`
    <syn-details open>
      <syn-icon name="home" slot="summary"></syn-icon>
      <span slot="summary">Accordion Element</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},m=v({Default:s,Open:t,Contained:r,DisabledNotContained:q,Disabled:n,Sizes:i,PrefixIcons:l},300);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('details', 'open')
      }
    }
  },
  render: () => html\`
    <syn-details summary="Toggle Me" open>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
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
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details summary="Toggle Me" open contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const details = canvasElement.querySelector('syn-details') as SynDetails;
    if (details) {
      details.shadowRoot!.querySelector('summary')!.focus();
    }
  },
  render: () => html\`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"createDisabledStory(true)",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
    <br/>
    <syn-details size="large" contained>
      <span slot="summary">Toggle Me</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  \`
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Open,
  Contained,
  DisabledNotContained,
  Disabled,
  Sizes,
  PrefixIcons
}, 300)`,...m.parameters?.docs?.source}}};const N=["Default","Open","Contained","Focus","Disabled","Sizes","PrefixIcons","Screenshot"];export{r as Contained,s as Default,n as Disabled,d as Focus,t as Open,l as PrefixIcons,m as Screenshot,i as Sizes,N as __namedExportsOrder,I as default};
