import{s as l,a as g,g as p,b as n,c as y,d}from"./component-isos8zWZ.js";import{k as i}from"./directive-helpers-CDT6qhDs.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-CtjiBMrc.js";import"./library-BZPO0bHa.js";import"./icon.component-BB75QAEK.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-ChCyk8nQ.js";var m=Object.freeze,u=Object.defineProperty,v=(r,h)=>m(u(r,"raw",{value:m(r.slice())})),c;const{args:b,argTypes:S}=l("syn-tag"),{generateTemplate:z}=g("syn-tag"),{overrideArgs:f}=d("syn-tag"),W={args:f([{name:"default",type:"slot",value:"Option"}],b),argTypes:S,component:"syn-tag",parameters:{design:p("2898-58777"),docs:{description:{component:n("tag","default")}}},title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:n("tag","default")}}},render:r=>z({args:r})},t={render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},a={parameters:{docs:{description:{story:n("tag","removable")}}},render:()=>i(c||(c=v([`
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
    </style>`])))},s={parameters:{docs:{description:{story:n("tag","size")}}},render:()=>i`
  <syn-tag size="small">Small</syn-tag>
  <syn-tag size="medium">Medium</syn-tag>
  <syn-tag size="large">Large</syn-tag>`},o=y({Default:e,WithIcon:t,Removable:a,Sizes:s});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>\`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  <syn-tag size="large">Large</syn-tag>\`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...o.parameters?.docs?.source}}};const q=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,a as Removable,o as Screenshot,s as Sizes,t as WithIcon,q as __namedExportsOrder,W as default};
