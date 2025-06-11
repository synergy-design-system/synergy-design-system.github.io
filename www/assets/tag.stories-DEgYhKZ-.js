import{S as p}from"./tag.component-BUGAEWNU.js";import"./icon-pavMdF9K.js";import{x as i}from"./directive-helpers-DGrfjhaU.js";import{g as n,a as g,s as l,b as y,d,c as u}from"./component-CRxE2rhG.js";import"./static-gmWA-8Kq.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./property-BGzwfL48.js";import"./component.styles-Do19GEOY.js";import"./icon-button.component-BGixvALP.js";import"./if-defined-B2ZFWIyt.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./icon.component-CScz9CrR.js";import"./watch-CEsCE2EF.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CcHPuk5a.js";p.define("syn-tag");var m=Object.freeze,v=Object.defineProperty,S=(s,_)=>m(v(s,"raw",{value:m(s.slice())})),c;const{args:b,argTypes:f}=l("syn-tag"),{generateTemplate:z}=d("syn-tag"),{overrideArgs:h}=y("syn-tag"),V={args:h([{name:"default",type:"slot",value:"Option"}],b),argTypes:f,component:"syn-tag",parameters:{design:g("2898-58777"),docs:{description:{component:n("tag","default")}}},title:"Components/syn-tag"},e={parameters:{controls:{disable:!1},docs:{description:{story:n("tag","default")}}},render:s=>z({args:s})},t={render:()=>i`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`},r={parameters:{docs:{description:{story:n("tag","removable")}}},render:()=>i(c||(c=S([`
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
    </style>`])))},a={parameters:{docs:{description:{story:n("tag","size")}}},render:()=>i`
  <syn-tag size="small">Small</syn-tag>
  <syn-tag size="medium">Medium</syn-tag>
  <syn-tag size="large">Large</syn-tag>`},o=u({Default:e,WithIcon:t,Removable:r,Sizes:a});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  WithIcon,
  Removable,
  Sizes
})`,...o.parameters?.docs?.source}}};const X=["Default","WithIcon","Removable","Sizes","Screenshot"];export{e as Default,r as Removable,o as Screenshot,a as Sizes,t as WithIcon,X as __namedExportsOrder,V as default};
