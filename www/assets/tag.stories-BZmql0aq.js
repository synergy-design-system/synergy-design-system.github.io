import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-BiSXA87W.js";import{t as s}from"./icon-BQD_aSf3.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-BZMStFjM.js";import{n as m,t as h}from"./taggedTemplateLiteral-pWa2IaV6.js";import{t as g}from"./tag-DmUYTvM1.js";var _,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{g(),s(),n(),f(),a(),r(),m(),{args:v,argTypes:y}=l(`syn-tag`),{generateTemplate:b}=d(`syn-tag`),{overrideArgs:x}=c(`syn-tag`),S={args:x([{name:`default`,type:`slot`,value:`Option`}],v),argTypes:y,component:`syn-tag`,parameters:{chromatic:{modes:o},design:i(`41163-156701`),docs:{description:{component:u(`tag`,`default`)}}},tags:[`Feedback`,`Tags`,`Filter`],title:`Components/syn-tag`},C={parameters:{controls:{disable:!1},docs:{description:{story:u(`tag`,`default`)}}},render:e=>b({args:e})},w={render:()=>t`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},T={parameters:{docs:{description:{story:u(`tag`,`removable`)}}},render:()=>t(_||=h([`
    <div class="tags-removable">
      <syn-tag size="small" removable>Small</syn-tag>
      <syn-tag size="medium" removable>Medium</syn-tag>
      <syn-tag size="large" removable>Large</syn-tag> 
    </div>

    <script type="module">
      const div = document.querySelector('.tags-removable');

      div.addEventListener('syn-remove', event => {
        const tag = event.target;
        tag.style.opacity = '0';
        setTimeout(() => (tag.style.opacity = '1'), 2000);
      });
    <\/script>

    <style>
      .tags-removable syn-tag {
        transition: var(--syn-transition-medium) opacity;
      }
    </style>`]))},E={parameters:{docs:{description:{story:u(`tag`,`size`)}}},render:()=>t`
    <syn-tag size="small">Small</syn-tag>
    <syn-tag size="medium">Medium</syn-tag>
    <syn-tag size="large">Large</syn-tag>
  `},D=p({Default:C,WithIcon:w,Removable:T,Sizes:E}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('tag', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag', 'removable')
      }
    }
  },
  render: () => html\`
    <div class="tags-removable">
      <syn-tag size="small" removable>Small</syn-tag>
      <syn-tag size="medium" removable>Medium</syn-tag>
      <syn-tag size="large" removable>Large</syn-tag> 
    </div>

    <script type="module">
      const div = document.querySelector('.tags-removable');

      div.addEventListener('syn-remove', event => {
        const tag = event.target;
        tag.style.opacity = '0';
        setTimeout(() => (tag.style.opacity = '1'), 2000);
      });
    <\/script>

    <style>
      .tags-removable syn-tag {
        transition: var(--syn-transition-medium) opacity;
      }
    </style>\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag', 'size')
      }
    }
  },
  render: () => html\`
    <syn-tag size="small">Small</syn-tag>
    <syn-tag size="medium">Medium</syn-tag>
    <syn-tag size="large">Large</syn-tag>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...D.parameters?.docs?.source}}},O=[`Default`,`WithIcon`,`Removable`,`Sizes`,`Screenshot`]}));k();export{C as Default,T as Removable,D as Screenshot,E as Sizes,w as WithIcon,O as __namedExportsOrder,S as default,k as t};