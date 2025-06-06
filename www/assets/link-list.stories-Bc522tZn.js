import{x as c}from"./directive-helpers-Dvm_Ferq.js";import{o as i}from"./ref-BaJmCsNF.js";import{g as o,a as g,s as f,d as z}from"./component-CxOHOteT.js";import{r as S}from"./styles-C7prW4dk.js";import"./library-0LAVuf5L.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./index-DrFu-skq.js";import"./icon-button-D9mnycTT.js";import"./functions-CDi3doZH.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CNncYWqS.js";const{args:h,argTypes:L}=f("syn-link-list"),d={...h};delete d["default-slot"];const u={...L};delete u["default-slot"];const s=(r=4,m="medium")=>new Array(r).fill(void 0).map(()=>`
    <li>
      <a href="javascript:void()" class="syn-link syn-link--${m}">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Link
      </a>
    </li>
  `.trim()).join(""),E={args:d,argTypes:u,component:"syn-link-list",parameters:{design:g("28388-133752"),docs:{description:{component:o("styles","link-list")}}},title:"Styles/syn-link-list"},e={parameters:{controls:{disable:!1}},render:r=>{const p=r["syn-link-list"].split("--").at(-1),y=s(4,p),k={...r,"default-slot":y};return S(k,"ul",{class:"syn-link-list"})}},n={parameters:{docs:{description:{story:o("link-list","horizontal")}}},render:()=>c`
    <ul class="syn-link-list syn-link-list--horizontal">
      ${i(s(4,"medium"))}
    </ul>
  `},t={parameters:{docs:{description:{story:o("link-list","multiline")}}},render:()=>c`
    <ul class="syn-link-list syn-link-list--horizontal" style="width: 480px">
      ${i(s(8,"medium"))}
    </ul>
  `},l={parameters:{docs:{description:{story:o("link-list","size")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <ul class="syn-link-list syn-link-list--small syn-link-list--horizontal">
        ${i(s(4,"small"))}
      </ul>
      <ul class="syn-link-list syn-link-list--medium syn-link-list--horizontal">
        ${i(s(4,"medium"))}
      </ul>
      <ul class="syn-link-list syn-link-list--large syn-link-list--horizontal">
        ${i(s(4,"large"))}
      </ul>
    </div>
  `},a=z({Default:e,Horizontal:n,Multiline:t,Size:l},300);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  render: storyArgs => {
    const sizeClass = storyArgs['syn-link-list']! as string;
    const usedSize = sizeClass.split('--').at(-1);
    const defaultSlot = generateLinks(4, usedSize);
    const finalArgs = {
      ...storyArgs,
      'default-slot': defaultSlot
    };
    return renderStyles(finalArgs, 'ul', {
      class: 'syn-link-list'
    });
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link-list', 'horizontal')
      }
    }
  },
  render: () => html\`
    <ul class="syn-link-list syn-link-list--horizontal">
      \${unsafeHTML(generateLinks(4, 'medium'))}
    </ul>
  \`
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link-list', 'multiline')
      }
    }
  },
  render: () => html\`
    <ul class="syn-link-list syn-link-list--horizontal" style="width: 480px">
      \${unsafeHTML(generateLinks(8, 'medium'))}
    </ul>
  \`
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link-list', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <ul class="syn-link-list syn-link-list--small syn-link-list--horizontal">
        \${unsafeHTML(generateLinks(4, 'small'))}
      </ul>
      <ul class="syn-link-list syn-link-list--medium syn-link-list--horizontal">
        \${unsafeHTML(generateLinks(4, 'medium'))}
      </ul>
      <ul class="syn-link-list syn-link-list--large syn-link-list--horizontal">
        \${unsafeHTML(generateLinks(4, 'large'))}
      </ul>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Horizontal,
  Multiline,
  Size
}, 300)`,...a.parameters?.docs?.source}}};const F=["Default","Horizontal","Multiline","Size","Screenshot"];export{e as Default,n as Horizontal,t as Multiline,a as Screenshot,l as Size,F as __namedExportsOrder,E as default};
