import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./component-Bm6Rp1CP.js";import{t as f}from"./prio-nav-0QiCMuMi.js";import{t as p}from"./nav-item-vsb3kzWl.js";var m=t({Default:()=>b,PriorityMenu:()=>x,Screenshot:()=>S,__namedExportsOrder:()=>C,default:()=>y}),h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{p(),f(),a(),u(),r(),{args:h,argTypes:g}=s(`syn-prio-nav`),{overrideArgs:_}=o(`syn-prio-nav`),{generateTemplate:v}=l(`syn-prio-nav`),y={args:_([{name:`default`,type:`slot`,value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],h),argTypes:g,component:`syn-prio-nav`,parameters:{chromatic:{modes:n},docs:{description:{component:c(`prio-nav`,`default`)},story:{height:`200px`}}},tags:[`Navigation`],title:`Components/syn-prio-nav`},b={parameters:{controls:{disable:!1},docs:{description:{story:c(`prio-nav`,`default`)}}},render:e=>v({args:e})},x={parameters:{docs:{description:{story:c(`prio-nav`,`priority-menu`)}}},render:()=>i`
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
  `},S=d({Default:b,PriorityMenu:x},{heightPx:200}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PriorityMenu
}, {
  heightPx: 200
})`,...S.parameters?.docs?.source},description:{story:`Uncomment this to test automatic adding of nav-items`,...S.parameters?.docs?.description}}},C=[`Default`,`PriorityMenu`,`Screenshot`]})))()}export{w as n,m as r,b as t};