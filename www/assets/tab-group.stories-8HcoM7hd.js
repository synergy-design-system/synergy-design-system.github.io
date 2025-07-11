import"./tab-panel--TitPIRe.js";import"./tab-CEE5I0Cq.js";import"./icon-BTRqAuEP.js";import{g as G,x as t,o as u}from"./iframe-7tHXQVNC.js";import{p as E}from"./index-Bkk0Z6Ex.js";import{g as s,s as _,a as O,c as F,b as R}from"./component-vUv6yFaV.js";import"./class-map-vAWwgj24.js";import"./property-D1h_DNUl.js";import"./state-C9P6TcHx.js";import"./event-options-CNZcgQm4.js";import"./query-DAIS6qJ0.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./watch-CEsCE2EF.js";import"./component.styles-C7e_DUNf.js";import"./icon-button.component-CrUN87sN.js";import"./if-defined-CCtHeFzx.js";import"./icon.component-B89CvZOL.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./_docs-UXgsQIP6.js";var $=Object.freeze,q=Object.defineProperty,j=(e,n)=>$(q(e,"raw",{value:$(n||e.slice())})),S;const{args:w,argTypes:A}=_("syn-tab-group"),{overrideArgs:L}=O("syn-tab-group"),{generateTemplate:I}=F("syn-tab-group"),P=(e,n,{active:a=!1,closable:g=!1,disabled:v=!1}={})=>`<syn-tab slot="nav" panel="${e}" ${a?"active":""} ${v?"disabled":""} ${g?"closable":""}>${n}</syn-tab>`,T=(e,n,{active:a=!1,closable:g=!1,disabled:v=!1}={})=>u(P(e,n,{active:a,closable:g,disabled:v})),H=()=>[{panel:"general",props:{active:!0}},{panel:"custom"},{panel:"advanced"},{panel:"disabled",props:{disabled:!0}}].map(({panel:e,props:n})=>P(e,E(e),n)).join(`
`),f=()=>u(H()),x=(e,n,a=!1)=>`<syn-tab-panel name="${e}" ${a?"active":""}>${n}</syn-tab-panel>`,C=(e,n,a=!1)=>u(x(e,n,a)),D=()=>["general","custom","advanced","disabled"].map((e,n)=>x(e,`This is the ${e} tab panel.`,n===0)).join(`
`),M=(e,n=!1)=>t`
<syn-tab-panel name="${e}" ?active=${n}>
  <main class="synergy-replace">
    Replace this slot
  </main>
</syn-tab-panel>
`,h=()=>t`
  ${["tab-1","tab-2","tab-3","tab-4"].map((e,n)=>T(e,"Tab item",{active:n===0}))}
  ${["tab-1","tab-2","tab-3","tab-4"].map((e,n)=>M(e,n===0))}
`,y=()=>u(D()),be={args:L([{name:"default",type:"slot",value:D()},{name:"nav",type:"slot",value:H()}],w),argTypes:A,component:"syn-tab-group",parameters:{design:G("18021-1924779"),docs:{description:{component:s("tab-group","default")}}},tags:["Navigation"],title:"Components/syn-tab-group"},r={parameters:{docs:{description:{story:s("tab-group","default")}}},render:e=>I({args:e})},o={parameters:{docs:{description:{story:s("tab-group","start")}}},render:()=>t`
  <syn-tab-group placement="start">
    ${f()}
    ${y()}
  </syn-tab-group>
  `},l={parameters:{docs:{description:{story:s("tab-group","end")}}},render:()=>t`
  <syn-tab-group placement="end">
    ${f()}
    ${y()}
  </syn-tab-group>
`},c={parameters:{docs:{description:{story:s("tab-group","closable")}}},render:()=>t(S||(S=j([`
    <syn-tab-group class="tabs-closable">
      <!-- Tabs -->
      `,`

      <!-- Tab Panels  -->
      `,`
    </syn-tab-group>

    <script type="module">
      const tabGroup = document.querySelector('.tabs-closable');
      tabGroup.addEventListener('syn-close', async event => {
        const tab = event.target;
        const panel = tabGroup.querySelector(\`syn-tab-panel[name="\${tab.panel}"]\`);
        
        // Show the previous tab if the tab is currently active
        if (tab.active) {
          tabGroup.show(tab.previousElementSibling.panel);
        }

        // Remove the tab + panel
        tab.remove();
        panel.remove();
      });
    <\/script>
  `],[`
    <syn-tab-group class="tabs-closable">
      <!-- Tabs -->
      `,`

      <!-- Tab Panels  -->
      `,`
    </syn-tab-group>

    <script type="module">
      const tabGroup = document.querySelector('.tabs-closable');
      tabGroup.addEventListener('syn-close', async event => {
        const tab = event.target;
        const panel = tabGroup.querySelector(\\\`syn-tab-panel[name="\\\${tab.panel}"]\\\`);
        
        // Show the previous tab if the tab is currently active
        if (tab.active) {
          tabGroup.show(tab.previousElementSibling.panel);
        }

        // Remove the tab + panel
        tab.remove();
        panel.remove();
      });
    <\/script>
  `])),[{content:"General",panel:"general",props:{active:!0}},{content:"Closable 1",panel:"closable-1",props:{closable:!0}},{content:"Closable 2",panel:"closable-2",props:{closable:!0}},{content:"Closable 3",panel:"closable-3",props:{closable:!0}}].map(({content:e,panel:n,props:a})=>T(n,e,a)),[{content:"general",name:"general"},{content:"first closable",name:"closable-1"},{content:"second closable",name:"closable-2"},{content:"third closable",name:"closable-3"}].map(({content:e,name:n},a)=>C(n,`This is the ${e} tab panel.`,a===0)))},p={parameters:{docs:{description:{story:s("tab-group","scrolling")}}},render:()=>t`
    <syn-tab-group>
      <!-- Tabs -->
      ${["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"].map((e,n)=>T(`tab-${e}`,`Tab ${e}`,{active:n===0}))}

      <!-- Tab Panels -->
      ${["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"].map((e,n)=>C(`tab-${e}`,`Tab panel ${e}`,n===0))}
    </syn-tab-group>
  `},b={parameters:{docs:{description:{story:s("tab-group","hierachy")}}},render:()=>t`
    <h3 class="body-medium">Default</h3>
    <syn-tab-group>
      ${h()}
    </syn-tab-group>

    <h3 class="body-medium">Contained</h3>
    <syn-tab-group contained>
      ${h()}
    </syn-tab-group>

    <h3 class="body-medium">Sharp</h3>
    <syn-tab-group contained sharp>
     ${h()}
    </syn-tab-group>

    <style>
      .synergy-replace {
        border: 1px dashed #9747FF;
        border-radius: var(--syn-border-radius-small);
        color: #9747FF;
        font: var(--syn-body-small-bold);
        height: var(--syn-spacing-x-large);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .body-medium:first-of-type {
        margin-top: 0;
      }

      .body-medium {
        font: var(--syn-body-medium-bold);
        color: var(--syn-color-neutral-1000);
        margin-top: var(--syn-spacing-2x-large);
        margin-bottom: var(--syn-spacing-large);
      }
    </style>
  `},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s("tab-group","manuel")}}},play:({canvasElement:e})=>{e.querySelector('syn-tab[panel="general"]')?.focus()},render:()=>t` 
    <syn-tab-group activation="manual">
      ${f()}
      ${y()}
    </syn-tab-group>
  `},i={parameters:{docs:{description:{story:s("tab-group","icon")}}},render:()=>t`
  <syn-tab-group>
    <syn-tab slot="nav" panel="general" active>
      <syn-icon name="style"></syn-icon>
      General
    </syn-tab>
    <syn-tab slot="nav" panel="custom">
      <syn-icon name="tune"></syn-icon>
      Custom
    </syn-tab>
    <syn-tab slot="nav" panel="advanced">
      <syn-icon name="verified_user"></syn-icon>
      Advanced
    </syn-tab>
    <syn-tab slot="nav" panel="disabled" disabled>
      <syn-icon name="update_disabled"></syn-icon>
      Disabled
    </syn-tab>
    ${y()}
  </syn-tab-group>
`},d=R({Default:r,TabsOnStart:o,TabsOnEnd:l,ClosableTabs:c,ScrollingTabs:p,VisualHierarchy:b,Icons:i},{heightPx:740});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'start')
      }
    }
  },
  render: () => html\`
  <syn-tab-group placement="start">
    \${createTabsHtml()}
    \${createTabPanelsHtml()}
  </syn-tab-group>
  \`
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'end')
      }
    }
  },
  render: () => html\`
  <syn-tab-group placement="end">
    \${createTabsHtml()}
    \${createTabPanelsHtml()}
  </syn-tab-group>
\`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'closable')
      }
    }
  },
  render: () => html\`
    <syn-tab-group class="tabs-closable">
      <!-- Tabs -->
      \${[{
    content: 'General',
    panel: 'general',
    props: {
      active: true
    }
  }, {
    content: 'Closable 1',
    panel: 'closable-1',
    props: {
      closable: true
    }
  }, {
    content: 'Closable 2',
    panel: 'closable-2',
    props: {
      closable: true
    }
  }, {
    content: 'Closable 3',
    panel: 'closable-3',
    props: {
      closable: true
    }
  }].map(({
    content,
    panel,
    props
  }) => createTabHtml(panel, content, props))}

      <!-- Tab Panels  -->
      \${[{
    content: 'general',
    name: 'general'
  }, {
    content: 'first closable',
    name: 'closable-1'
  }, {
    content: 'second closable',
    name: 'closable-2'
  }, {
    content: 'third closable',
    name: 'closable-3'
  }].map(({
    content,
    name
  }, index) => createTabPanelHtml(name, \`This is the \${content} tab panel.\`, index === 0))}
    </syn-tab-group>

    <script type="module">
      const tabGroup = document.querySelector('.tabs-closable');
      tabGroup.addEventListener('syn-close', async event => {
        const tab = event.target;
        const panel = tabGroup.querySelector(\\\`syn-tab-panel[name="\\\${tab.panel}"]\\\`);
        
        // Show the previous tab if the tab is currently active
        if (tab.active) {
          tabGroup.show(tab.previousElementSibling.panel);
        }

        // Remove the tab + panel
        tab.remove();
        panel.remove();
      });
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'scrolling')
      }
    }
  },
  render: () => html\`
    <syn-tab-group>
      <!-- Tabs -->
      \${['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'].map((count, index) => createTabHtml(\`tab-\${count}\`, \`Tab \${count}\`, {
    active: index === 0
  }))}

      <!-- Tab Panels -->
      \${['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'].map((count, index) => createTabPanelHtml(\`tab-\${count}\`, \`Tab panel \${count}\`, index === 0))}
    </syn-tab-group>
  \`
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'hierachy')
      }
    }
  },
  render: () => html\`
    <h3 class="body-medium">Default</h3>
    <syn-tab-group>
      \${createReplaceContent()}
    </syn-tab-group>

    <h3 class="body-medium">Contained</h3>
    <syn-tab-group contained>
      \${createReplaceContent()}
    </syn-tab-group>

    <h3 class="body-medium">Sharp</h3>
    <syn-tab-group contained sharp>
     \${createReplaceContent()}
    </syn-tab-group>

    <style>
      .synergy-replace {
        border: 1px dashed #9747FF;
        border-radius: var(--syn-border-radius-small);
        color: #9747FF;
        font: var(--syn-body-small-bold);
        height: var(--syn-spacing-x-large);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .body-medium:first-of-type {
        margin-top: 0;
      }

      .body-medium {
        font: var(--syn-body-medium-bold);
        color: var(--syn-color-neutral-1000);
        margin-top: var(--syn-spacing-2x-large);
        margin-bottom: var(--syn-spacing-large);
      }
    </style>
  \`
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'manuel')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const elm = canvasElement.querySelector<SynTab>('syn-tab[panel="general"]');
    elm?.focus();
  },
  render: () => html\` 
    <syn-tab-group activation="manual">
      \${createTabsHtml()}
      \${createTabPanelsHtml()}
    </syn-tab-group>
  \`
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'icon')
      }
    }
  },
  render: () => html\`
  <syn-tab-group>
    <syn-tab slot="nav" panel="general" active>
      <syn-icon name="style"></syn-icon>
      General
    </syn-tab>
    <syn-tab slot="nav" panel="custom">
      <syn-icon name="tune"></syn-icon>
      Custom
    </syn-tab>
    <syn-tab slot="nav" panel="advanced">
      <syn-icon name="verified_user"></syn-icon>
      Advanced
    </syn-tab>
    <syn-tab slot="nav" panel="disabled" disabled>
      <syn-icon name="update_disabled"></syn-icon>
      Disabled
    </syn-tab>
    \${createTabPanelsHtml()}
  </syn-tab-group>
\`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TabsOnStart,
  TabsOnEnd,
  ClosableTabs,
  ScrollingTabs,
  VisualHierarchy,
  Icons
}, {
  heightPx: 740
})`,...d.parameters?.docs?.source}}};const ie=["Default","TabsOnStart","TabsOnEnd","ClosableTabs","ScrollingTabs","VisualHierarchy","ManualActivation","Icons","Screenshot"];export{c as ClosableTabs,r as Default,i as Icons,m as ManualActivation,d as Screenshot,p as ScrollingTabs,l as TabsOnEnd,o as TabsOnStart,b as VisualHierarchy,ie as __namedExportsOrder,be as default};
