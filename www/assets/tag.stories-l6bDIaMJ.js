import"./preview-dR4LAv3R.js";import{x as i}from"./directive-helpers-po9zzQFH.js";import{s as g,a as p,g as o,b as y,c as d}from"./component-PdQHgwAL.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-C-ESOXiC.js";import"./icon-button-hWu3VM7N.js";import"./icon-3D35f5n6.js";import"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import"./index-PPLHz8o0.js";import"./index-1e2JmIOY.js";var m=Object.freeze,u=Object.defineProperty,v=(r,l)=>m(u(r,"raw",{value:m(l||r.slice())})),c;const{args:b,argTypes:S}=g("syn-tag"),{generateTemplate:z}=p("syn-tag"),{overrideArgs:f}=d("syn-tag"),R={args:f([{name:"default",type:"slot",value:"Option"}],b),argTypes:S,component:"tag",parameters:{docs:{description:{story:o("tag","default")}}},title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:o("tag","default")}}},render:r=>z({args:r})},t={render:()=>i`
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
})`,...n.parameters?.docs?.source}}};const W=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,a as Removable,n as Screenshot,s as Sizes,t as WithIcon,W as __namedExportsOrder,R as default};
