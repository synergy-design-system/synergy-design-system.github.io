import{g}from"./preview-B3aX1ie9.js";import{x as i}from"./lit-element-DILkAbkc.js";import{s as l,a as p,g as o,b as y,c as d}from"./component-DET4JjRq.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-ECBjcGqG.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-DB3uW5ZR.js";import"./icon-CC8qjACX.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DU65Ag4u.js";var m=Object.freeze,u=Object.defineProperty,v=(r,h)=>m(u(r,"raw",{value:m(r.slice())})),c;const{args:b,argTypes:S}=l("syn-tag"),{generateTemplate:f}=p("syn-tag"),{overrideArgs:z}=d("syn-tag"),I={args:z([{name:"default",type:"slot",value:"Option"}],b),argTypes:S,component:"syn-tag",parameters:{design:g("2898-58777"),docs:{description:{component:o("tag","default")}}},title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:o("tag","default")}}},render:r=>f({args:r})},t={render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},a={parameters:{docs:{description:{story:o("tag","removable")}}},render:()=>i(c||(c=v([`
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
    </style>`])))},s={parameters:{docs:{description:{story:o("tag","size")}}},render:()=>i`
  <syn-tag size="small">Small</syn-tag>
  <syn-tag size="medium">Medium</syn-tag>
  <syn-tag size="large">Large</syn-tag>`},n=y({Default:e,WithIcon:t,Removable:a,Sizes:s});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...n.parameters?.docs?.source}}};const P=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,a as Removable,n as Screenshot,s as Sizes,t as WithIcon,P as __namedExportsOrder,I as default};
