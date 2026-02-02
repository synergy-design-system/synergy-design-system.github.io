import{S as g}from"./tag.component-DO9QhQxI.js";import"./icon-BwfrVYmH.js";import{g as l,C as p,x as i}from"./iframe-3rQ6MjmB.js";import{g as n,s as y,a as d,c as u,b as v}from"./component-Bn9Hq4ck.js";import"./class-map-BSUKdjAi.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-CpGm7QZ8.js";import"./icon-button.component-CaDA6T58.js";import"./if-defined-Dk8TP58w.js";import"./icon.component-BX6zfRdv.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./decorator-CVE5vLu9.js";import"./functions-Cnw7w7U0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";g.define("syn-tag");var m=Object.freeze,b=Object.defineProperty,S=(r,D)=>m(b(r,"raw",{value:m(r.slice())})),c;const{args:f,argTypes:z}=y("syn-tag"),{generateTemplate:h}=u("syn-tag"),{overrideArgs:_}=d("syn-tag"),B={args:_([{name:"default",type:"slot",value:"Option"}],f),argTypes:z,component:"syn-tag",parameters:{chromatic:{modes:p},design:l("2898-58777"),docs:{description:{component:n("tag","default")}}},tags:["Feedback"],title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:n("tag","default")}}},render:r=>h({args:r})},t={render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},a={parameters:{docs:{description:{story:n("tag","removable")}}},render:()=>i(c||(c=S([`
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
  `},o=v({Default:e,WithIcon:t,Removable:a,Sizes:s});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
})`,...o.parameters?.docs?.source}}};const G=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,a as Removable,o as Screenshot,s as Sizes,t as WithIcon,G as __namedExportsOrder,B as default};
