import"./nav-item-CVGJClow.js";import"./prio-nav-CyVXqRBQ.js";import{g as a,x as i}from"./iframe-C60qSCwS.js";import{g as e,s,a as p,c as m,b as c}from"./component-j7DF8I8k.js";import"./class-map-kiCvOja2.js";import"./property-Dgx3L-LF.js";import"./state-CpqkXG2a.js";import"./query-DAIS6qJ0.js";import"./if-defined-CzvRrFBJ.js";import"./divider.component-D61O8mB4.js";import"./watch-CEsCE2EF.js";import"./component.styles-DoY_daum.js";import"./icon.component-DHDIBiVU.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-BdAyIcOy.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-CnLhE_m5.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./menu.component-Czq2sOHa.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const{args:y,argTypes:v}=s("syn-prio-nav"),{overrideArgs:l}=p("syn-prio-nav"),{generateTemplate:d}=m("syn-prio-nav"),B={args:l([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],y),argTypes:v,component:"syn-prio-nav",parameters:{design:a("12362-10968"),docs:{description:{component:e("prio-nav","default")},story:{height:"200px"}}},tags:["Navigation"],title:"Components/syn-prio-nav"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("prio-nav","default")}}},render:o=>d({args:o})},t={parameters:{docs:{description:{story:e("prio-nav","priority-menu")}}},render:()=>i`
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
  `},r=c({Default:n,PriorityMenu:t},{heightPx:200});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PriorityMenu
}, {
  heightPx: 200
})`,...r.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...r.parameters?.docs?.description}}};const G=["Default","PriorityMenu","Screenshot"];export{n as Default,t as PriorityMenu,r as Screenshot,G as __namedExportsOrder,B as default};
