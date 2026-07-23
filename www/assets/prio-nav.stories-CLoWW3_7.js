import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-BFZR08Kk.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Cjcm-1Oq.js";import{t as p}from"./prio-nav-BtunjFzH.js";import{t as m}from"./nav-item-HZggPeZl.js";var h,g,_,v,y,b,x,S,C,w=e((()=>{m(),p(),o(),d(),r(),n(),{args:h,argTypes:g}=c(`syn-prio-nav`),{overrideArgs:_}=s(`syn-prio-nav`),{generateTemplate:v}=u(`syn-prio-nav`),y={args:_([{name:`default`,type:`slot`,value:`
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal href="javascript:void(0)">Trainings</syn-nav-item>
      `}],h),argTypes:g,component:`syn-prio-nav`,parameters:{chromatic:{modes:i},design:t(`41227-206412`),docs:{description:{component:l(`prio-nav`,`default`)},story:{height:`200px`}}},tags:[`Navigation`],title:`Components/syn-prio-nav`},b={parameters:{controls:{disable:!1},docs:{description:{story:l(`prio-nav`,`default`)}}},render:e=>v({args:e})},x={parameters:{docs:{description:{story:l(`prio-nav`,`priority-menu`)}}},render:()=>a`
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
  `},S=f({Default:b,PriorityMenu:x},{heightPx:200}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
})`,...S.parameters?.docs?.source},description:{story:`Uncomment this to test automatic adding of nav-items`,...S.parameters?.docs?.description}}},C=[`Default`,`PriorityMenu`,`Screenshot`]}));w();export{b as Default,x as PriorityMenu,S as Screenshot,C as __namedExportsOrder,y as default,w as t};