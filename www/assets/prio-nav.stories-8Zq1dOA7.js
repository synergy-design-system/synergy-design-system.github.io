import{g as a}from"./preview-BH0iTC6g.js";import{x as o}from"./lit-element-ZYWMe1i1.js";import{s as i,a as m,g as t,b as p,c as y}from"./component-B40MukIV.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DcbuMwrE.js";import"./icon.component-D55FUTwa.js";import"./directive-helpers-CkpR4LMI.js";import"./icon-BrqnReZV.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BhJsmGLR.js";const{args:c,argTypes:l}=i("syn-prio-nav"),{overrideArgs:v}=y("syn-prio-nav"),{generateTemplate:d}=m("syn-prio-nav"),j={args:v([{name:"default",type:"slot",value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
      `}],c),argTypes:l,component:"syn-prio-nav",parameters:{design:a("12362-10968"),docs:{description:{component:t("prio-nav","default")},story:{height:"200px"}}},title:"Components/syn-prio-nav"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("prio-nav","default")}}},render:s=>d({args:s})},r={parameters:{docs:{description:{story:t("prio-nav","priority-menu")}}},render:()=>o`
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
  `},n=p({Default:e,PriorityMenu:r},{heightPx:200});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
})`,...n.parameters?.docs?.source},description:{story:"Uncomment this to test automatic adding of nav-items",...n.parameters?.docs?.description}}};const w=["Default","PriorityMenu","Screenshot"];export{e as Default,r as PriorityMenu,n as Screenshot,w as __namedExportsOrder,j as default};
