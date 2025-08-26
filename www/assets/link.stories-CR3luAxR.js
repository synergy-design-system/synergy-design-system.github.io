import{g as p,x as e}from"./iframe-B7DfbYuR.js";import{g as s,s as m,a as k,b as u}from"./component-Czukm7wJ.js";import{r as f}from"./styles-D0ixfgSz.js";import"./icon-CvW2xKii.js";import{p as g}from"./PaddingDecorator-D-TIMxM9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./icon.component-Bzj-jGeV.js";import"./synergy-element-VQU4slEB.js";import"./watch-CEsCE2EF.js";const{args:v,argTypes:h}=m("syn-link"),{overrideArgs:w}=k("syn-link"),z={args:w([{name:"default",type:"slot",value:"Link label"},{name:"syn-link",type:"attribute",value:"syn-link--medium"}],v),argTypes:h,component:"syn-link",parameters:{design:p("24700-38828"),docs:{description:{component:s("styles","link")}}},tags:["Navigation","Styles"],title:"Styles/syn-link"},n={parameters:{controls:{disable:!1}},render:d=>f(d,"a",{class:"syn-link",href:"javascript:void(0)"})},r={parameters:{docs:{description:{story:s("link","inline")}}},render:()=>e`
    <p style="width: 266px;">
      This is some random text that contains <a href="javascript:void(0)" class="syn-link">a link that spans over several lines</a> to imply how it works in real life.
    </p>
  `},a={parameters:{docs:{description:{story:s("link","prefix-suffix-icons")}}},render:()=>e`
    <nav class="storybook-demo-syn-link">
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        Open link in new window
        <syn-icon name="arrow_outward"></syn-icon>
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        <syn-icon name="picture_as_pdf"></syn-icon>
        Download PDF
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        <syn-icon name="picture_as_pdf"></syn-icon>
        Open PDF in new window
        <syn-icon name="arrow_outward"></syn-icon>
      </a>
    </nav>
    <style>
      .storybook-demo-syn-link {
        display: inline-flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }
    </style>
  `},i={parameters:{docs:{description:{story:s("link","quiet")}}},render:()=>e`
    <a href="javascript:void(0)" class="syn-link syn-link--quiet">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Silence is gold
    </a>
  `},o={parameters:{docs:{description:{story:s("link","disabled")}}},render:()=>e`
    <a class="syn-link syn-link--disabled">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Disabled
    </a>
  `},t={decorators:[g()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s("link","focus")}}},play:({canvasElement:d})=>{const y=d.querySelector("a");y&&y.focus()},render:()=>e`
    <a href="javascript:void(0)" class="syn-link syn-link--medium">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Link
    </a>
  `},c={parameters:{docs:{description:{story:s("link","size")}}},render:()=>e`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <a href="javascript:void(0)" class="syn-link syn-link--small">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Small
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Medium
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--large">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Large
      </a>
    </div>
  `},l=u({Default:n,Inline:r,PrefixSuffixIcons:a,Quiet:i,Disabled:o,Focus:t,Size:c});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  render: (args: unknown) => renderStyles(args as RenderArgs, 'a', {
    class: 'syn-link',
    // eslint-disable-next-line no-script-url
    href: 'javascript:void(0)'
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link', 'inline')
      }
    }
  },
  render: () => html\`
    <p style="width: 266px;">
      This is some random text that contains <a href="javascript:void(0)" class="syn-link">a link that spans over several lines</a> to imply how it works in real life.
    </p>
  \`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link', 'prefix-suffix-icons')
      }
    }
  },
  render: () => html\`
    <nav class="storybook-demo-syn-link">
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        Open link in new window
        <syn-icon name="arrow_outward"></syn-icon>
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        <syn-icon name="picture_as_pdf"></syn-icon>
        Download PDF
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        <syn-icon name="picture_as_pdf"></syn-icon>
        Open PDF in new window
        <syn-icon name="arrow_outward"></syn-icon>
      </a>
    </nav>
    <style>
      .storybook-demo-syn-link {
        display: inline-flex;
        flex-direction: column;
        gap: var(--syn-spacing-large);
      }
    </style>
  \`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link', 'quiet')
      }
    }
  },
  render: () => html\`
    <a href="javascript:void(0)" class="syn-link syn-link--quiet">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Silence is gold
    </a>
  \`
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link', 'disabled')
      }
    }
  },
  render: () => html\`
    <a class="syn-link syn-link--disabled">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Disabled
    </a>
  \`
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('link', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector('a');
    if (link) {
      link.focus();
    }
  },
  render: () => html\`
    <a href="javascript:void(0)" class="syn-link syn-link--medium">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Link
    </a>
  \`
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <a href="javascript:void(0)" class="syn-link syn-link--small">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Small
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--medium">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Medium
      </a>
      <a href="javascript:void(0)" class="syn-link syn-link--large">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Large
      </a>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Inline,
  PrefixSuffixIcons,
  Quiet,
  Disabled,
  Focus,
  Size
})`,...l.parameters?.docs?.source}}};const L=["Default","Inline","PrefixSuffixIcons","Quiet","Disabled","Focus","Size","Screenshot"];export{n as Default,o as Disabled,t as Focus,r as Inline,a as PrefixSuffixIcons,i as Quiet,l as Screenshot,c as Size,L as __namedExportsOrder,z as default};
