import"./nav-item-lsvM-9GB.js";import"./prio-nav-CRwnUe_i.js";import{g as a,C as i,x as s}from"./iframe-BzMZbpvr.js";import{g as t,s as m,a as p,c,b as y}from"./component-DbiUGRJd.js";import"./class-map-DM5-FK16.js";import"./synergy-element-dW9JSpRW.js";import"./icon.component-PB2O3BYH.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-nn1R3lcX.js";import"./divider.component-C7rYfaC2.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-CVeNpIE2.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-BdKKTtNt.js";import"./menu.component-CahDfufk.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DmU5sf6r.js";const{args:v,argTypes:l}=m("syn-prio-nav"),{overrideArgs:d}=p("syn-prio-nav"),{generateTemplate:g}=c("syn-prio-nav"),q={args:d([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],v),argTypes:l,component:"syn-prio-nav",parameters:{chromatic:{modes:i},design:a("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},tags:["Navigation"],title:"Components/syn-prio-nav"},n={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:o=>g({args:o})},e={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>s`
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
  `},r=y({Default:n,PriorityMenu:e},{heightPx:200});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  render: args => generateTemplate({
    args
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PriorityMenu
}, {
  heightPx: 200
})`,...r.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...r.parameters?.docs?.description}}};const B=["Default","PriorityMenu","Screenshot"];export{n as Default,e as PriorityMenu,r as Screenshot,B as __namedExportsOrder,q as default};
