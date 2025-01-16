import{k as a}from"./directive-helpers-CDT6qhDs.js";import{s as y,a as p,g,b as e,c as b,d as v}from"./component-zzBp6eXk.js";import"./static-9CmeQujl.js";import"./ref-BgFTv61d.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-CpvI6Xjn.js";import"./library-BZPO0bHa.js";import"./icon.component-DOxq3uID.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BxMyzCs2.js";const{args:h,argTypes:S}=y("syn-details"),{overrideArgs:f}=v("syn-details"),{generateTemplate:x}=p("syn-details"),F={args:f([{name:"summary",type:"attribute",value:"Toggle Me"},{name:"contained",type:"attribute",value:!0},{name:"default",type:"slot",value:`<h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.`}],h),argTypes:S,component:"syn-details",parameters:{design:g("16771-27087"),docs:{description:{component:e("details","default")}}},title:"Components/syn-details"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("details","default")}}},render:o=>x({args:o})},t={parameters:{docs:{description:{story:e("details","open")}}},render:()=>a`
    <syn-details summary="Toggle Me" open>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},r={parameters:{docs:{description:{story:e("details","contained")}}},render:()=>a`
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
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("details","focus")}}},play:({canvasElement:o})=>{const u=o.querySelector("syn-details");u&&u.shadowRoot.querySelector("summary").focus()},render:()=>a`
    <syn-details summary="Toggle Me" contained>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},c=o=>({parameters:{docs:{description:{story:e("details","disabled")}}},render:()=>a`
    <syn-details summary="Toggle Me" disabled .contained=${o}>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `}),n=c(!0),q=c(!1),i={parameters:{docs:{description:{story:e("details","size")}}},render:()=>a`
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
  `},l={parameters:{docs:{description:{story:e("details","icon")}}},render:()=>a`
    <syn-details open>
      <syn-icon name="home" slot="summary"></syn-icon>
      <span slot="summary">Accordion Element</span>
      <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </syn-details>
  `},m=b({Default:s,Open:t,Contained:r,DisabledNotContained:q,Disabled:n,Sizes:i,PrefixIcons:l},300);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}, 300)`,...m.parameters?.docs?.source}}};const I=["Default","Open","Contained","Focus","Disabled","Sizes","PrefixIcons","Screenshot"];export{r as Contained,s as Default,n as Disabled,d as Focus,t as Open,l as PrefixIcons,m as Screenshot,i as Sizes,I as __namedExportsOrder,F as default};
