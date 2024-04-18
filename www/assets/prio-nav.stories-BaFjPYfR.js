import"./preview-BMgyQje8.js";import{x as s}from"./lit-element-ZYWMe1i1.js";import{s as a,a as i,g as t,b as m,c as p}from"./component-CzF4s4R4.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DcbuMwrE.js";import"./icon.component-D55FUTwa.js";import"./directive-helpers-CkpR4LMI.js";import"./icon-BrqnReZV.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-7bc9rCDE.js";const{args:y,argTypes:c}=a("syn-prio-nav"),{overrideArgs:l}=p("syn-prio-nav"),{generateTemplate:v}=i("syn-prio-nav"),b={args:l([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      `}],y),argTypes:c,component:"syn-prio-nav",parameters:{docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},title:"Components/syn-prio-nav"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:o=>v({args:o})},r={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>s`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large)">
      <syn-prio-nav style="width: 250px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
      <syn-prio-nav style="width: 100px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
    </div>
  `},n=m({Default:e,PriorityMenu:r},{heightPx:200});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('prio-nav', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('prio-nav', 'priority-menu')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large)">
      <syn-prio-nav style="width: 250px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
      <syn-prio-nav style="width: 100px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PriorityMenu
}, {
  heightPx: 200
})`,...n.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...n.parameters?.docs?.description}}};const j=["Default","PriorityMenu","Screenshot"];export{e as Default,r as PriorityMenu,n as Screenshot,j as __namedExportsOrder,b as default};
