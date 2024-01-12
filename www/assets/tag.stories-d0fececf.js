import"./tag-50399f39.js";import{x as i}from"./directive-helpers-a6c66f8a.js";import{s as g,a as p,g as n,b as y,c as d}from"./component-be2efc65.js";import"./static-c19bae7e.js";import"./localize-d6e19d2a.js";import"./component.styles-e21f60bd.js";import"./icon-button.component-98112e77.js";import"./if-defined-1099e361.js";import"./query-f49a08ce.js";import"./icon.component-ca10f2f2.js";import"./chunk-757FFUVQ-7dc151b2.js";import"./index-356e4a49.js";import"./_docs-6508e6e2.js";var m=Object.freeze,u=Object.defineProperty,v=(s,l)=>m(u(s,"raw",{value:m(l||s.slice())})),c;const{args:b,argTypes:S}=g("syn-tag"),{generateTemplate:z}=p("syn-tag"),{overrideArgs:f}=d("syn-tag"),I={args:f([{name:"default",type:"slot",value:"Option"}],b),argTypes:S,component:"tag",parameters:{docs:{description:{story:n("tag","default")}}},title:"Components/syn-tag"},r={parameters:{controls:{disable:!1},docs:{description:{story:n("tag","default")}}},render:s=>z({args:s})},e={name:"With icon",render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},t={name:"Removable",parameters:{docs:{description:{story:n("tag","removable")}}},render:()=>i(c||(c=v([`
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
    </style>`])))},a={name:"Sizes",parameters:{docs:{description:{story:n("tag","size")}}},render:()=>i`
  <syn-tag size="small">Small</syn-tag>
  <syn-tag size="medium">Medium</syn-tag>
  <syn-tag size="large">Large</syn-tag>`},o=y([e,t,a]);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} as Story`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  render: () => html\`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>\`
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Removable',
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"generateScreenshotStory([WithIcon, Removable, Sizes])",...o.parameters?.docs?.source}}};const j=["Default","WithIcon","Removable","Sizes","Screenshot"];export{r as Default,t as Removable,o as Screenshot,a as Sizes,e as WithIcon,j as __namedExportsOrder,I as default};
//# sourceMappingURL=tag.stories-d0fececf.js.map
