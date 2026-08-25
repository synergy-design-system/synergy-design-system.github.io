import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,l as n}from"./preview-Br8gqwpX.js";import{c as r,t as i}from"./lit-DgWh_IaA.js";import{t as a}from"./icon-8mkXc18S.js";import{a as o,i as s,n as c,r as l,t as u}from"./component-iQCIgMPU.js";import{n as d,t as f}from"./PaddingDecorator-C4mX2Z0z.js";import{n as p,t as m}from"./styles-CTQmb3bf.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{i(),l(),m(),a(),f(),n(),{args:h,argTypes:g}=s(`syn-link`),{overrideArgs:_}=o(`syn-link`),v={args:_([{name:`default`,type:`slot`,value:`Link label`},{name:`syn-link`,type:`attribute`,value:`syn-link--medium`}],h),argTypes:g,component:`syn-link`,parameters:{chromatic:{modes:t},docs:{description:{component:c(`styles`,`link`)}}},tags:[`Navigation`,`Styles`],title:`Styles/syn-link`},y={parameters:{controls:{disable:!1}},render:e=>p(e,`a`,{class:`syn-link`,href:`javascript:void(0)`})},b={parameters:{docs:{description:{story:c(`link`,`inline`)}}},render:()=>r`
    <p style="width: 266px;">
      This is some random text that contains <a href="javascript:void(0)" class="syn-link">a link that spans over several lines</a> to imply how it works in real life.
    </p>
  `},x={parameters:{docs:{description:{story:c(`link`,`prefix-suffix-icons`)}}},render:()=>r`
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
  `},S={parameters:{docs:{description:{story:c(`link`,`quiet`)}}},render:()=>r`
    <a href="javascript:void(0)" class="syn-link syn-link--quiet">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Silence is gold
    </a>
  `},C={parameters:{docs:{description:{story:c(`link`,`disabled`)}}},render:()=>r`
    <a class="syn-link syn-link--disabled">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Disabled
    </a>
  `},w={decorators:[d()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:c(`link`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`a`);t&&t.focus()},render:()=>r`
    <a href="javascript:void(0)" class="syn-link syn-link--medium">
      <syn-icon name="keyboard_arrow_right"></syn-icon>
      Link
    </a>
  `},T={parameters:{docs:{description:{story:c(`link`,`size`)}}},render:()=>r`
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
  `},E=u({Default:y,Inline:b,PrefixSuffixIcons:x,Quiet:S,Disabled:C,Focus:w,Size:T}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Inline,
  PrefixSuffixIcons,
  Quiet,
  Disabled,
  Focus,
  Size
})`,...E.parameters?.docs?.source}}},D=[`Default`,`Inline`,`PrefixSuffixIcons`,`Quiet`,`Disabled`,`Focus`,`Size`,`Screenshot`]})))()}O();export{y as Default,C as Disabled,w as Focus,b as Inline,x as PrefixSuffixIcons,S as Quiet,E as Screenshot,T as Size,D as __namedExportsOrder,v as default};