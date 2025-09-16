import{S as g}from"./tag.component-Bl2U9fCg.js";import"./icon-HN375zFn.js";import{g as l,x as i}from"./iframe-BVqenz5p.js";import{g as n,s as p,a as y,c as d,b as u}from"./component-DcvEqyNH.js";import"./class-map-iO1aBk3n.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-D_a6mvqc.js";import"./icon-button.component-DWicR0Ax.js";import"./if-defined-CSCrNTM4.js";import"./icon.component-CH4yotId.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";g.define("syn-tag");var m=Object.freeze,v=Object.defineProperty,b=(r,_)=>m(v(r,"raw",{value:m(r.slice())})),c;const{args:S,argTypes:f}=p("syn-tag"),{generateTemplate:z}=d("syn-tag"),{overrideArgs:h}=y("syn-tag"),H={args:h([{name:"default",type:"slot",value:"Option"}],S),argTypes:f,component:"syn-tag",parameters:{design:l("2898-58777"),docs:{description:{component:n("tag","default")}}},tags:["Feedback"],title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:n("tag","default")}}},render:r=>z({args:r})},t={render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},a={parameters:{docs:{description:{story:n("tag","removable")}}},render:()=>i(c||(c=b([`
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
    <syn-tag size="large">Large</syn-tag>
  `},o=u({Default:e,WithIcon:t,Removable:a,Sizes:s});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    <syn-tag size="large">Large</syn-tag>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...o.parameters?.docs?.source}}};const B=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,a as Removable,o as Screenshot,s as Sizes,t as WithIcon,B as __namedExportsOrder,H as default};
