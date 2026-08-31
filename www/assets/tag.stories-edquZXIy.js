import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./icon-CdFlfCYb.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Bm6Rp1CP.js";import{t as p}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as m}from"./tag-DINvqmL8.js";var h=t({Default:()=>S,Removable:()=>w,Screenshot:()=>E,Sizes:()=>T,WithIcon:()=>C,__namedExportsOrder:()=>D,default:()=>x}),g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{m(),o(),a(),d(),r(),{args:_,argTypes:v}=c(`syn-tag`),{generateTemplate:y}=u(`syn-tag`),{overrideArgs:b}=s(`syn-tag`),x={args:b([{name:`default`,type:`slot`,value:`Option`}],_),argTypes:v,component:`syn-tag`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`tag`,`default`)}}},tags:[`Feedback`,`Tags`,`Filter`],title:`Components/syn-tag`},S={parameters:{controls:{disable:!1},docs:{description:{story:l(`tag`,`default`)}}},render:e=>y({args:e})},C={render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},w={parameters:{docs:{description:{story:l(`tag`,`removable`)}}},render:()=>i(g||=p([`
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
    </style>`]))},T={parameters:{docs:{description:{story:l(`tag`,`size`)}}},render:()=>i`
    <syn-tag size="small">Small</syn-tag>
    <syn-tag size="medium">Medium</syn-tag>
    <syn-tag size="large">Large</syn-tag>
  `},E=f({Default:S,WithIcon:C,Removable:w,Sizes:T}),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>\`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...E.parameters?.docs?.source}}},D=[`Default`,`WithIcon`,`Removable`,`Sizes`,`Screenshot`]})))()}export{O as n,h as r,S as t};