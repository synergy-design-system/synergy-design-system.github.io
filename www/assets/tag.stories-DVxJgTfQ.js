import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-C7vlOWDR.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./icon-F6VV0ve3.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-tvBHR92M.js";import{n as m,t as h}from"./taggedTemplateLiteral-C9cDEsPD.js";import{t as g}from"./tag-s1GDcw-h.js";var _,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{g(),s(),o(),f(),r(),n(),m(),{args:v,argTypes:y}=l(`syn-tag`),{generateTemplate:b}=d(`syn-tag`),{overrideArgs:x}=c(`syn-tag`),S={args:x([{name:`default`,type:`slot`,value:`Option`}],v),argTypes:y,component:`syn-tag`,parameters:{chromatic:{modes:i},design:t(`41163-156701`),docs:{description:{component:u(`tag`,`default`)}}},tags:[`Feedback`,`Tags`,`Filter`],title:`Components/syn-tag`},C={parameters:{controls:{disable:!1},docs:{description:{story:u(`tag`,`default`)}}},render:e=>b({args:e})},w={render:()=>a`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},T={parameters:{docs:{description:{story:u(`tag`,`removable`)}}},render:()=>a(_||=h([`
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
    </style>`]))},E={parameters:{docs:{description:{story:u(`tag`,`size`)}}},render:()=>a`
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