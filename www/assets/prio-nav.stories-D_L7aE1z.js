import"./nav-item-CoQ3HkLs.js";import"./prio-nav-C2lIii7K.js";import{C as a,c as i,d as s}from"./iframe-DoIr3fWQ.js";import{g as t,a as m,s as p,b as c,c as y}from"./component-Bo4Cv_bx.js";import"./class-map-BsxlTbEl.js";import"./synergy-element-Dxw-A1SI.js";import"./icon.component-DzS8x2l3.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-Vd3-hHHV.js";import"./divider.component-Bba-w2Er.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-DzB_r-DK.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Kxr0jhT6.js";import"./menu.component-v940lKQc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";const{args:v,argTypes:l}=p("syn-prio-nav"),{overrideArgs:d}=y("syn-prio-nav"),{generateTemplate:g}=c("syn-prio-nav"),q={args:d([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],v),argTypes:l,component:"syn-prio-nav",parameters:{chromatic:{modes:a},design:s("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},tags:["Navigation"],title:"Components/syn-prio-nav"},n={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:o=>g({args:o})},e={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>i`
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
  `},r=m({Default:n,PriorityMenu:e},{heightPx:200});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
