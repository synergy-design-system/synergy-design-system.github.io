import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-BcPmD-1Q.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-Bm6Rp1CP.js";import{t as p}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as m}from"./tooltip-CK6msDul.js";import{t as h}from"./icon-button-CWa2KSXb.js";var g=t({ClickTrigger:()=>T,Default:()=>C,HTMLInTooltips:()=>O,ManualTrigger:()=>E,Placement:()=>w,RemovingArrows:()=>D,Screenshot:()=>A,SettingAMaximumWidth:()=>k,__namedExportsOrder:()=>j,default:()=>S}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),m(),o(),h(),d(),r(),{args:v,argTypes:y}=c(`syn-tooltip`),{overrideArgs:b}=s(`syn-tooltip`),{generateTemplate:x}=u(`syn-tooltip`),S={args:b([{name:`content`,type:`attribute`,value:`This is a tooltip`},{name:`open`,type:`attribute`,value:!0},{name:`default`,type:`slot`,value:`<syn-button>Hover me</syn-button>`}],v),argTypes:y,component:`syn-tooltip`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`tooltip`,`default`)},story:{height:`200px`,inline:!1}},layout:`centered`},tags:[`Feedback`],title:`Components/syn-tooltip`},C={parameters:{controls:{disable:!1},docs:{description:{story:l(`tooltip`,`default`)}}},render:e=>x({args:e})},w={parameters:{docs:{description:{story:l(`tooltip`,`placement`)},story:{height:`450px`}},layout:`padded`},render:()=>i`
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
`},T={parameters:{docs:{description:{story:l(`tooltip`,`onclick`)}}},render:()=>i`
  <syn-tooltip content="Click again to dismiss" trigger="click" open>
    <syn-button>Click to Toggle</syn-button>
  </syn-tooltip>
  `},E={parameters:{docs:{description:{story:l(`tooltip`,`manuel`)}}},render:()=>i(_||=p([`
  <syn-button style="margin-right: 4rem;">Toggle Manually</syn-button>
  <syn-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip" open>
    <syn-icon-button name="person" label="Person" size="medium" color="neutral"></syn-icon-button>
  </syn-tooltip>

  <script type="module">
    const tooltip = document.querySelector('.manual-tooltip');
    const toggle = tooltip.previousElementSibling;

    toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
  <\/script>
  `]))},D={parameters:{docs:{description:{story:l(`tooltip`,`removingarrows`)}}},render:()=>i`
  <syn-tooltip content="This is a tooltip" style="--syn-tooltip-arrow-size: 0;" open>
    <syn-button>No Arrow</syn-button>
  </syn-tooltip>
  `},O={parameters:{docs:{description:{story:l(`tooltip`,`htmltooltip`)}}},render:()=>i`
  <syn-tooltip open>
    <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

    <syn-button>Hover me</syn-button>
  </syn-tooltip>
`},k={parameters:{docs:{description:{story:l(`tooltip`,`maxwith`)},story:{height:`400px`}}},render:()=>i`
  <syn-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels." open>
    <syn-button>Hover me</syn-button>
  </syn-tooltip>
  `},A=f({Default:C,Placement:w,ClickTrigger:T,ManualTrigger:E,RemovingArrows:D,HTMLInTooltips:O,SettingAMaximumWidth:k},{heightPx:550,styleHeading:{"margin-bottom":`180px`}}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
})`,...A.parameters?.docs?.source}}},j=[`Default`,`Placement`,`ClickTrigger`,`ManualTrigger`,`RemovingArrows`,`HTMLInTooltips`,`SettingAMaximumWidth`,`Screenshot`]})))()}export{M as n,g as r,C as t};