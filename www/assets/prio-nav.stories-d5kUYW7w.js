import{g as t,a as o,s,b as i,c as p,d as m}from"./component-CzQAcUPB.js";import{x as c}from"./directive-helpers-Dvm_Ferq.js";import"./if-defined-zGpnP1OK.js";import"./ref-BbXSZ-3a.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./index-DrFu-skq.js";import"./icon-button-CM_m1Wpw.js";import"./library-C58jM0s5.js";import"./icon.component-CNx_GwpD.js";import"./index-Vx7n56Jp.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-DUMdkemV.js";const{args:y,argTypes:v}=s("syn-prio-nav"),{overrideArgs:l}=i("syn-prio-nav"),{generateTemplate:d}=p("syn-prio-nav"),M={args:l([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],y),argTypes:v,component:"syn-prio-nav",parameters:{design:o("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},title:"Components/syn-prio-nav"},r={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:a=>d({args:a})},e={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>c`
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
  `},n=m({Default:r,PriorityMenu:e},{heightPx:200});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} as Story`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PriorityMenu
}, {
  heightPx: 200
})`,...n.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...n.parameters?.docs?.description}}};const A=["Default","PriorityMenu","Screenshot"];export{r as Default,e as PriorityMenu,n as Screenshot,A as __namedExportsOrder,M as default};
