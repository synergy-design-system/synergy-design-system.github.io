import{g,o as i,x as c}from"./iframe-CWRRF7Kz.js";import{g as o,s as f,b as S}from"./component-Ds-2z4Q_.js";import{r as z}from"./styles-BYYnmBfP.js";import"./icon-DoqmrotQ.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./icon.component-CK3dmUUo.js";import"./property-DfgI3O36.js";import"./state-1d_pmrPj.js";import"./watch-CEsCE2EF.js";import"./component.styles-DAsZ-SQ-.js";const{args:h,argTypes:L}=f("syn-link-list"),m={...h};delete m["default-slot"];const u={...L};delete u["default-slot"];const s=(r=4,d="medium")=>new Array(r).fill(void 0).map(()=>`
    <li>
      <a href="javascript:void()" class="syn-link syn-link--${d}">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Link
      </a>
    </li>
  `.trim()).join(""),_={args:m,argTypes:u,component:"syn-link-list",parameters:{design:g("28388-133752"),docs:{description:{component:o("styles","link-list")}}},tags:["Navigation","Structure","Styles"],title:"Styles/syn-link-list"},e={parameters:{controls:{disable:!1}},render:r=>{const p=r["syn-link-list"].split("--").at(-1),y=s(4,p),k={...r,"default-slot":y};return z(k,"ul",{class:"syn-link-list"})}},n={parameters:{docs:{description:{story:o("link-list","horizontal")}}},render:()=>c`
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
  `},a=S({Default:e,Horizontal:n,Multiline:t,Size:l},300);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}, 300)`,...a.parameters?.docs?.source}}};const j=["Default","Horizontal","Multiline","Size","Screenshot"];export{e as Default,n as Horizontal,t as Multiline,a as Screenshot,l as Size,j as __namedExportsOrder,_ as default};
