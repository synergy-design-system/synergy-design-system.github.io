import"./nav-item-BfJFkqeI.js";import"./prio-nav-DHRjxuxt.js";import{x as i}from"./directive-helpers-DGrfjhaU.js";import{g as e,a,s,b as p,d as m,c}from"./component-JZANH7tg.js";import"./static-gmWA-8Kq.js";import"./property-BGzwfL48.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./if-defined-B2ZFWIyt.js";import"./divider.component-KO_YE4Ha.js";import"./watch-CEsCE2EF.js";import"./component.styles-Do19GEOY.js";import"./icon.component-CScz9CrR.js";import"./slot-9EVoRGQc.js";import"./dropdown.component-ByMhRq2E.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-4h2Ou4ib.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./menu.component-efn2ltwP.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-Br-JURis.js";const{args:y,argTypes:v}=s("syn-prio-nav"),{overrideArgs:l}=p("syn-prio-nav"),{generateTemplate:d}=m("syn-prio-nav"),R={args:l([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],y),argTypes:v,component:"syn-prio-nav",parameters:{design:a("12362-10968"),docs:{description:{component:e("prio-nav","default")},story:{height:"200px"}}},title:"Components/syn-prio-nav"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("prio-nav","default")}}},render:o=>d({args:o})},t={parameters:{docs:{description:{story:e("prio-nav","priority-menu")}}},render:()=>i`
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
})`,...r.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...r.parameters?.docs?.description}}};const V=["Default","PriorityMenu","Screenshot"];export{n as Default,t as PriorityMenu,r as Screenshot,V as __namedExportsOrder,R as default};
