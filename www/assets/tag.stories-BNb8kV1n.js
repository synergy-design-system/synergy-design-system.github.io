import{S as g}from"./tag.component-B8lQdATy.js";import"./icon-BTRqAuEP.js";import{g as l,x as i}from"./iframe-7tHXQVNC.js";import{g as n,s as p,a as y,c as d,b as u}from"./component-vUv6yFaV.js";import"./class-map-vAWwgj24.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./property-D1h_DNUl.js";import"./component.styles-C7e_DUNf.js";import"./icon-button.component-CrUN87sN.js";import"./if-defined-CCtHeFzx.js";import"./state-C9P6TcHx.js";import"./query-DAIS6qJ0.js";import"./icon.component-B89CvZOL.js";import"./watch-CEsCE2EF.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";g.define("syn-tag");var m=Object.freeze,v=Object.defineProperty,b=(s,_)=>m(v(s,"raw",{value:m(s.slice())})),c;const{args:S,argTypes:f}=p("syn-tag"),{generateTemplate:z}=d("syn-tag"),{overrideArgs:h}=y("syn-tag"),B={args:h([{name:"default",type:"slot",value:"Option"}],S),argTypes:f,component:"syn-tag",parameters:{design:l("2898-58777"),docs:{description:{component:n("tag","default")}}},tags:["Feedback"],title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:n("tag","default")}}},render:s=>z({args:s})},t={render:()=>i`
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
    </style>`])))},r={parameters:{docs:{description:{story:n("tag","size")}}},render:()=>i`
    <syn-tag size="small">Small</syn-tag>
    <syn-tag size="medium">Medium</syn-tag>
    <syn-tag size="large">Large</syn-tag>
  `},o=u({Default:e,WithIcon:t,Removable:a,Sizes:r});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...o.parameters?.docs?.source}}};const G=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,a as Removable,o as Screenshot,r as Sizes,t as WithIcon,G as __namedExportsOrder,B as default};
