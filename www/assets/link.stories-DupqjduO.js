import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,d as r,f as i,g as a,u as o}from"./iframe-BLAzlACc.js";import{t as s}from"./icon-BFcjyE5U.js";import{a as c,i as l,n as u,r as d,t as f}from"./component-RhnClGwj.js";import{n as p,t as m}from"./PaddingDecorator-Dxl3X7Fp.js";import{n as h,t as g}from"./styles-DlSjwWv2.js";var _,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{n(),d(),g(),r(),s(),m(),a(),{args:_,argTypes:v}=l(`syn-link`),{overrideArgs:y}=c(`syn-link`),b={args:y([{name:`default`,type:`slot`,value:`Link label`},{name:`syn-link`,type:`attribute`,value:`syn-link--medium`}],_),argTypes:v,component:`syn-link`,parameters:{chromatic:{modes:i},design:o(`41337-170604`),docs:{description:{component:u(`styles`,`link`)}}},tags:[`Navigation`,`Styles`],title:`Styles/syn-link`},x={parameters:{controls:{disable:!1}},render:e=>h(e,`a`,{class:`syn-link`,href:`javascript:void(0)`})},S={parameters:{docs:{description:{story:u(`link`,`inline`)}}},render:()=>t`
    <p style="width: 266px;">
      This is some random text that contains <a href="javascript:void(0)" class="syn-link">a link that spans over several lines</a> to imply how it works in real life.
    </p>
  `},C={parameters:{docs:{description:{story:u(`link`,`prefix-suffix-icons`)}}},render:()=>t`
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
  `},w={parameters:{docs:{description:{story:u(`link`,`quiet`)}}},render:()=>t`
    <a href="javascript:void(0)" class="syn-link syn-link--quiet">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Silence is gold
    </a>
  `},T={parameters:{docs:{description:{story:u(`link`,`disabled`)}}},render:()=>t`
    <a class="syn-link syn-link--disabled">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Disabled
    </a>
  `},E={decorators:[p()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`link`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`a`);t&&t.focus()},render:()=>t`
    <a href="javascript:void(0)" class="syn-link syn-link--medium">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Link
    </a>
  `},D={parameters:{docs:{description:{story:u(`link`,`size`)}}},render:()=>t`
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
  `},O=f({Default:x,Inline:S,PrefixSuffixIcons:C,Quiet:w,Disabled:T,Focus:E,Size:D}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Inline,
  PrefixSuffixIcons,
  Quiet,
  Disabled,
  Focus,
  Size
})`,...O.parameters?.docs?.source}}},k=[`Default`,`Inline`,`PrefixSuffixIcons`,`Quiet`,`Disabled`,`Focus`,`Size`,`Screenshot`]}))();export{x as Default,T as Disabled,E as Focus,S as Inline,C as PrefixSuffixIcons,w as Quiet,O as Screenshot,D as Size,k as __namedExportsOrder,b as default};