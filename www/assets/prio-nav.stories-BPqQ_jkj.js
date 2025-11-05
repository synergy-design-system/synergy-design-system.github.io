import"./nav-item-BbrM-EOH.js";import"./prio-nav-CI0gOZ3G.js";import{g as a,x as i}from"./iframe-CNjcOboT.js";import{g as t,s,a as p,c as m,b as c}from"./component-CLgtm9Q8.js";import"./class-map-BAdaFs8M.js";import"./synergy-element-DcJoLspZ.js";import"./icon.component-kN9TCwag.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-CxEY91JF.js";import"./divider.component-D52avn4O.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-C7HCW1Uj.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Doz71l1O.js";import"./menu.component-CaGSvYF8.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";const{args:y,argTypes:v}=s("syn-prio-nav"),{overrideArgs:l}=p("syn-prio-nav"),{generateTemplate:d}=m("syn-prio-nav"),K={args:l([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],y),argTypes:v,component:"syn-prio-nav",parameters:{design:a("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},tags:["Navigation","SICK2018"],title:"Components/syn-prio-nav"},r={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:o=>d({args:o})},e={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>i`
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
  `},n=c({Default:r,PriorityMenu:e},{heightPx:200});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
})`,...n.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...n.parameters?.docs?.description}}};const N=["Default","PriorityMenu","Screenshot"];export{r as Default,e as PriorityMenu,n as Screenshot,N as __namedExportsOrder,K as default};
