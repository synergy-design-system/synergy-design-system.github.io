import{g as d,C as u,x as o}from"./iframe-D3jh34T2.js";import{S as g}from"./tooltip.component-Ce3wPjNo.js";import"./button-Be3NXwS0.js";import"./icon-button-l01vmjpr.js";import{g as t,s as b,a as h,c as v,b as x}from"./component-DtDvIiCV.js";import"./preload-helper-Ct5FWWRu.js";import"./animation-registry-l4L8bmT6.js";import"./class-map-TRixnXgC.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-Gy20R3QD.js";import"./query-DAIS6qJ0.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./popup.component-BJN9IfXa.js";import"./if-defined-CtjQHRUr.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./icon.component-bZ25TJym.js";import"./spinner.component-ovUywGfF.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./icon-button.component-nThcmUJv.js";import"./index-CQ0aEGxp.js";import"./_docs-DXCV3alH.js";g.define("syn-tooltip");var m=Object.freeze,w=Object.defineProperty,f=(a,H)=>m(w(a,"raw",{value:m(a.slice())})),y;const{args:S,argTypes:T}=b("syn-tooltip"),{overrideArgs:k}=h("syn-tooltip"),{generateTemplate:M}=v("syn-tooltip"),Z={args:k([{name:"content",type:"attribute",value:"This is a tooltip"},{name:"open",type:"attribute",value:!0},{name:"default",type:"slot",value:"<syn-button>Hover me</syn-button>"}],S),argTypes:T,component:"syn-tooltip",parameters:{chromatic:{modes:u},design:d("12852-79550"),docs:{description:{component:t("tooltip","default")},story:{height:"200px",inline:!1}},layout:"centered"},tags:["Feedback","SICK2018","SICK2025"],title:"Components/syn-tooltip"},n={parameters:{controls:{disable:!1},docs:{description:{story:t("tooltip","default")}}},render:a=>M({args:a})},e={parameters:{docs:{description:{story:t("tooltip","placement")},story:{height:"450px"}},layout:"padded"},render:()=>o`
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
`},s={parameters:{docs:{description:{story:t("tooltip","onclick")}}},render:()=>o`
  <syn-tooltip content="Click again to dismiss" trigger="click" open>
    <syn-button>Click to Toggle</syn-button>
  </syn-tooltip>
  `},i={parameters:{docs:{description:{story:t("tooltip","manuel")}}},render:()=>o(y||(y=f([`
  <syn-button style="margin-right: 4rem;">Toggle Manually</syn-button>
  <syn-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip" open>
    <syn-icon-button name="person" label="Person" size="medium" color="neutral"></syn-icon-button>
  </syn-tooltip>

  <script type="module">
    const tooltip = document.querySelector('.manual-tooltip');
    const toggle = tooltip.previousElementSibling;

    toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
  <\/script>
  `])))},r={parameters:{docs:{description:{story:t("tooltip","removingarrows")}}},render:()=>o`
  <syn-tooltip content="This is a tooltip" style="--syn-tooltip-arrow-size: 0;" open>
    <syn-button>No Arrow</syn-button>
  </syn-tooltip>
  `},l={parameters:{docs:{description:{story:t("tooltip","htmltooltip")}}},render:()=>o`
  <syn-tooltip open>
    <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

    <syn-button>Hover me</syn-button>
  </syn-tooltip>
`},p={parameters:{docs:{description:{story:t("tooltip","maxwith")},story:{height:"400px"}}},render:()=>o`
  <syn-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels." open>
    <syn-button>Hover me</syn-button>
  </syn-tooltip>
  `},c=x({Default:n,Placement:e,ClickTrigger:s,ManualTrigger:i,RemovingArrows:r,HTMLInTooltips:l,SettingAMaximumWidth:p},{heightPx:550,styleHeading:{"margin-bottom":"180px"}});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
})`,...c.parameters?.docs?.source}}};const $=["Default","Placement","ClickTrigger","ManualTrigger","RemovingArrows","HTMLInTooltips","SettingAMaximumWidth","Screenshot"];export{s as ClickTrigger,n as Default,l as HTMLInTooltips,i as ManualTrigger,e as Placement,r as RemovingArrows,c as Screenshot,p as SettingAMaximumWidth,$ as __namedExportsOrder,Z as default};
