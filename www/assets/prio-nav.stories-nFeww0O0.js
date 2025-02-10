import{g as t,a as s,s as o,b as i,c as p,d as m}from"./component-Cdretqd5.js";import{k as c}from"./directive-helpers-B-JxG5af.js";import"./if-defined-CAYRA8Ae.js";import"./ref-CLjsg0Dj.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./index-D8HpcxQN.js";import"./library-UYMiFSYt.js";import"./icon.component-CgdRPS1z.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-BM_ysiRC.js";const{args:y,argTypes:v}=o("syn-prio-nav"),{overrideArgs:l}=i("syn-prio-nav"),{generateTemplate:d}=p("syn-prio-nav"),w={args:l([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],y),argTypes:v,component:"syn-prio-nav",parameters:{design:s("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},title:"Components/syn-prio-nav"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:a=>d({args:a})},r={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-2x-large)">
      <syn-prio-nav style="width: 220px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
      <syn-prio-nav style="width: 170px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Projects</syn-nav-item>
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
      <syn-prio-nav style="width: 220px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
      <syn-prio-nav style="width: 170px;">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      </syn-prio-nav>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PriorityMenu
}, {
  heightPx: 200
})`,...n.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...n.parameters?.docs?.description}}};const M=["Default","PriorityMenu","Screenshot"];export{e as Default,r as PriorityMenu,n as Screenshot,M as __namedExportsOrder,w as default};
