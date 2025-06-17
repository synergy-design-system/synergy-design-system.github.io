import"./nav-item-Betk_qOR.js";import"./prio-nav-C4xF5ujN.js";import{g as a,x as i}from"./iframe-GSRepqjd.js";import{g as e,s,a as p,c as m,b as c}from"./component-sz2YSCF4.js";import"./class-map-QQ7HVnPG.js";import"./property-ImbD-3qY.js";import"./static-BkNWbPkN.js";import"./directive-helpers-CvZEagFv.js";import"./query-DAIS6qJ0.js";import"./if-defined-CDNCanKK.js";import"./divider.component-DbTnzFXm.js";import"./watch-CEsCE2EF.js";import"./component.styles-DXWA7L2q.js";import"./icon.component-B3J6d3UF.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-DOszIc0z.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-BJEudzMA.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./menu.component-CEPi9M8n.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:y,argTypes:v}=s("syn-prio-nav"),{overrideArgs:l}=p("syn-prio-nav"),{generateTemplate:d}=m("syn-prio-nav"),G={args:l([{name:"default",type:"slot",value:`
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
})`,...r.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...r.parameters?.docs?.description}}};const I=["Default","PriorityMenu","Screenshot"];export{n as Default,t as PriorityMenu,r as Screenshot,I as __namedExportsOrder,G as default};
