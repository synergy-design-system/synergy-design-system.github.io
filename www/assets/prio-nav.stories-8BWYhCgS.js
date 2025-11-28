import"./nav-item-DHIPFfEp.js";import"./prio-nav-B2OjvObz.js";import{g as a,C as i,x as s}from"./iframe-C5QviLTd.js";import{g as t,s as m,a as p,c,b as y}from"./component-DTvMqera.js";import"./class-map-szeHYWjM.js";import"./synergy-element-Cm-Wv3ul.js";import"./icon.component-ChqKiuCu.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-CnsgxTJq.js";import"./divider.component-DHlwxJY4.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-Cgrtox9Y.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-YCAMOYVW.js";import"./menu.component-2JdUnqAG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DXCV3alH.js";const{args:v,argTypes:l}=m("syn-prio-nav"),{overrideArgs:d}=p("syn-prio-nav"),{generateTemplate:g}=c("syn-prio-nav"),N={args:d([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],v),argTypes:l,component:"syn-prio-nav",parameters:{chromatic:{modes:i},design:a("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},tags:["Navigation","SICK2018","SICK2025"],title:"Components/syn-prio-nav"},n={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:o=>g({args:o})},e={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>s`
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
})`,...r.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...r.parameters?.docs?.description}}};const U=["Default","PriorityMenu","Screenshot"];export{n as Default,e as PriorityMenu,r as Screenshot,U as __namedExportsOrder,N as default};
