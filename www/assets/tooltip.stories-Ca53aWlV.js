import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-DWg8XNs3.js";import{d as r,f as i,g as a,u as o}from"./iframe-CVaCVGtH.js";import{t as s}from"./button-CUvYiMKB.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-CllRTPI1.js";import{n as m,t as h}from"./taggedTemplateLiteral-pWa2IaV6.js";import{t as g}from"./tooltip-DJhCUqbS.js";import{t as _}from"./icon-button-CUNxpVjV.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{n(),g(),s(),_(),f(),r(),a(),m(),{args:y,argTypes:b}=l(`syn-tooltip`),{overrideArgs:x}=c(`syn-tooltip`),{generateTemplate:S}=d(`syn-tooltip`),C={args:x([{name:`content`,type:`attribute`,value:`This is a tooltip`},{name:`open`,type:`attribute`,value:!0},{name:`default`,type:`slot`,value:`<syn-button>Hover me</syn-button>`}],y),argTypes:b,component:`syn-tooltip`,parameters:{chromatic:{modes:i},design:o(`41337-203414`),docs:{description:{component:u(`tooltip`,`default`)},story:{height:`200px`,inline:!1}},layout:`centered`},tags:[`Feedback`],title:`Components/syn-tooltip`},w={parameters:{controls:{disable:!1},docs:{description:{story:u(`tooltip`,`default`)}}},render:e=>S({args:e})},T={parameters:{docs:{description:{story:u(`tooltip`,`placement`)},story:{height:`450px`}},layout:`padded`},render:()=>t`
    <div class="tooltip-placement-example">
      <div class="tooltip-placement-example-row">
        <syn-tooltip content="top-start" placement="top-start" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="top" placement="top" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="top-end" placement="top-end" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="left-start" placement="left-start" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="right-start" placement="right-start" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="left" placement="left" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="right" placement="right" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="left-end" placement="left-end" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="right-end" placement="right-end" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="bottom-start" placement="bottom-start" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="bottom" placement="bottom" open>
        <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="bottom-end" placement="bottom-end" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>
    </div>

    <style>
      .tooltip-placement-example {
        width: 500px;
        margin: 5rem 6rem;
      }

      .tooltip-placement-example-row:after {
        content: '';
        display: table;
        clear: both;
      }

      .tooltip-placement-example syn-button {
        float: left;
        width: var(--syn-spacing-2x-large);
        margin-bottom: var(--syn-spacing-medium);
      }

      .tooltip-placement-example-row:nth-child(1) syn-tooltip:first-child syn-button,
      .tooltip-placement-example-row:nth-child(5) syn-tooltip:first-child syn-button {
        margin-left: var(--syn-spacing-3x-large);
        margin-right: var(--syn-spacing-4x-large);
      }

      .tooltip-placement-example-row:nth-child(1) syn-tooltip:nth-child(2) syn-button,
      .tooltip-placement-example-row:nth-child(5) syn-tooltip:nth-child(2) syn-button {
        margin-right: var(--syn-spacing-4x-large);
      }

      .tooltip-placement-example-row:nth-child(2) syn-tooltip:nth-child(2) syn-button,
      .tooltip-placement-example-row:nth-child(3) syn-tooltip:nth-child(2) syn-button,
      .tooltip-placement-example-row:nth-child(4) syn-tooltip:nth-child(2) syn-button {
        margin-left: calc((var(--syn-spacing-2x-large) * 3) + (var(--syn-spacing-4x-large) * 2) + (var(--syn-spacing-medium) * 2));
      }
    </style>
`},E={parameters:{docs:{description:{story:u(`tooltip`,`onclick`)}}},render:()=>t`
  <syn-tooltip content="Click again to dismiss" trigger="click" open>
    <syn-button>Click to Toggle</syn-button>
  </syn-tooltip>
  `},D={parameters:{docs:{description:{story:u(`tooltip`,`manuel`)}}},render:()=>t(v||=h([`
  <syn-button style="margin-right: 4rem;">Toggle Manually</syn-button>
  <syn-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip" open>
    <syn-icon-button name="person" label="Person" size="medium" color="neutral"></syn-icon-button>
  </syn-tooltip>

  <script type="module">
    const tooltip = document.querySelector('.manual-tooltip');
    const toggle = tooltip.previousElementSibling;

    toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
  <\/script>
  `]))},O={parameters:{docs:{description:{story:u(`tooltip`,`removingarrows`)}}},render:()=>t`
  <syn-tooltip content="This is a tooltip" style="--syn-tooltip-arrow-size: 0;" open>
    <syn-button>No Arrow</syn-button>
  </syn-tooltip>
  `},k={parameters:{docs:{description:{story:u(`tooltip`,`htmltooltip`)}}},render:()=>t`
  <syn-tooltip open>
    <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

    <syn-button>Hover me</syn-button>
  </syn-tooltip>
`},A={parameters:{docs:{description:{story:u(`tooltip`,`maxwith`)},story:{height:`400px`}}},render:()=>t`
  <syn-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels." open>
    <syn-button>Hover me</syn-button>
  </syn-tooltip>
  `},j=p({Default:w,Placement:T,ClickTrigger:E,ManualTrigger:D,RemovingArrows:O,HTMLInTooltips:k,SettingAMaximumWidth:A},{heightPx:550,styleHeading:{"margin-bottom":`180px`}}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'placement')
      },
      story: {
        height: '450px'
      }
    },
    layout: 'padded'
  },
  render: () => html\`
    <div class="tooltip-placement-example">
      <div class="tooltip-placement-example-row">
        <syn-tooltip content="top-start" placement="top-start" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="top" placement="top" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="top-end" placement="top-end" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="left-start" placement="left-start" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="right-start" placement="right-start" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="left" placement="left" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="right" placement="right" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="left-end" placement="left-end" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="right-end" placement="right-end" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <syn-tooltip content="bottom-start" placement="bottom-start" open>
          <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="bottom" placement="bottom" open>
        <syn-button></syn-button>
        </syn-tooltip>

        <syn-tooltip content="bottom-end" placement="bottom-end" open>
          <syn-button></syn-button>
        </syn-tooltip>
      </div>
    </div>

    <style>
      .tooltip-placement-example {
        width: 500px;
        margin: 5rem 6rem;
      }

      .tooltip-placement-example-row:after {
        content: '';
        display: table;
        clear: both;
      }

      .tooltip-placement-example syn-button {
        float: left;
        width: var(--syn-spacing-2x-large);
        margin-bottom: var(--syn-spacing-medium);
      }

      .tooltip-placement-example-row:nth-child(1) syn-tooltip:first-child syn-button,
      .tooltip-placement-example-row:nth-child(5) syn-tooltip:first-child syn-button {
        margin-left: var(--syn-spacing-3x-large);
        margin-right: var(--syn-spacing-4x-large);
      }

      .tooltip-placement-example-row:nth-child(1) syn-tooltip:nth-child(2) syn-button,
      .tooltip-placement-example-row:nth-child(5) syn-tooltip:nth-child(2) syn-button {
        margin-right: var(--syn-spacing-4x-large);
      }

      .tooltip-placement-example-row:nth-child(2) syn-tooltip:nth-child(2) syn-button,
      .tooltip-placement-example-row:nth-child(3) syn-tooltip:nth-child(2) syn-button,
      .tooltip-placement-example-row:nth-child(4) syn-tooltip:nth-child(2) syn-button {
        margin-left: calc((var(--syn-spacing-2x-large) * 3) + (var(--syn-spacing-4x-large) * 2) + (var(--syn-spacing-medium) * 2));
      }
    </style>
\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'onclick')
      }
    }
  },
  render: () => html\`
  <syn-tooltip content="Click again to dismiss" trigger="click" open>
    <syn-button>Click to Toggle</syn-button>
  </syn-tooltip>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'manuel')
      }
    }
  },
  render: () => html\`
  <syn-button style="margin-right: 4rem;">Toggle Manually</syn-button>
  <syn-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip" open>
    <syn-icon-button name="person" label="Person" size="medium" color="neutral"></syn-icon-button>
  </syn-tooltip>

  <script type="module">
    const tooltip = document.querySelector('.manual-tooltip');
    const toggle = tooltip.previousElementSibling;

    toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
  <\/script>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'removingarrows')
      }
    }
  },
  render: () => html\`
  <syn-tooltip content="This is a tooltip" style="--syn-tooltip-arrow-size: 0;" open>
    <syn-button>No Arrow</syn-button>
  </syn-tooltip>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'htmltooltip')
      }
    }
  },
  render: () => html\`
  <syn-tooltip open>
    <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

    <syn-button>Hover me</syn-button>
  </syn-tooltip>
\`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tooltip', 'maxwith')
      },
      story: {
        height: '400px'
      }
    }
  },
  render: () => html\`
  <syn-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels." open>
    <syn-button>Hover me</syn-button>
  </syn-tooltip>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Placement,
  ClickTrigger,
  ManualTrigger,
  RemovingArrows,
  HTMLInTooltips,
  SettingAMaximumWidth
}, {
  heightPx: 550,
  styleHeading: {
    'margin-bottom': '180px'
  }
})`,...j.parameters?.docs?.source}}},M=[`Default`,`Placement`,`ClickTrigger`,`ManualTrigger`,`RemovingArrows`,`HTMLInTooltips`,`SettingAMaximumWidth`,`Screenshot`]}));N();export{E as ClickTrigger,w as Default,k as HTMLInTooltips,D as ManualTrigger,T as Placement,O as RemovingArrows,j as Screenshot,A as SettingAMaximumWidth,M as __namedExportsOrder,C as default,N as t};