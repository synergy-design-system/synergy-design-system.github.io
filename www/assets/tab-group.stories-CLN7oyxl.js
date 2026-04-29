import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as i,d as a,f as o,g as s,u as c}from"./iframe-DVxLZS-s.js";import{i as l,n as u}from"./dist-DKcu4P11.js";import{t as d}from"./icon-B6NqE4U1.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./component-DniQwiZV.js";import{n as v,t as y}from"./taggedTemplateLiteral-BuD1d7yP.js";import{n as b,t as x}from"./tab-panel-o6lMgvaZ.js";import{t as S}from"./tab-B7vukn1w.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{b(),S(),x(),d(),n(),u(),i(),g(),a(),s(),v(),{args:w,argTypes:T}=p(`syn-tab-group`),{overrideArgs:E}=f(`syn-tab-group`),{generateTemplate:D}=h(`syn-tab-group`),O=(e,t,{active:n=!1,closable:r=!1,disabled:i=!1}={})=>`<syn-tab slot="nav" panel="${e}" ${n?`active`:``} ${i?`disabled`:``} ${r?`closable`:``}>${t}</syn-tab>`,k=(e,n,{active:r=!1,closable:i=!1,disabled:a=!1}={})=>t(O(e,n,{active:r,closable:i,disabled:a})),A=()=>[{panel:`general`,props:{active:!0}},{panel:`custom`},{panel:`advanced`},{panel:`disabled`,props:{disabled:!0}}].map(({panel:e,props:t})=>O(e,l(e),t)).join(`
`),j=()=>t(A()),M=(e,t,n=!1)=>`<syn-tab-panel name="${e}" ${n?`active`:``}>${t}</syn-tab-panel>`,N=(e,n,r=!1)=>t(M(e,n,r)),P=()=>[`general`,`custom`,`advanced`,`disabled`].map((e,t)=>M(e,`This is the ${e} tab panel.`,t===0)).join(`
`),F=(e,t=!1)=>r`
<syn-tab-panel name="${e}" ?active=${t}>
  <main class="synergy-replace">
    Replace this slot
  </main>
</syn-tab-panel>
`,I=()=>r`
  ${[`tab-1`,`tab-2`,`tab-3`,`tab-4`].map((e,t)=>k(e,`Tab item`,{active:t===0}))}
  ${[`tab-1`,`tab-2`,`tab-3`,`tab-4`].map((e,t)=>F(e,t===0))}
`,L=()=>t(P()),R={args:E([{name:`default`,type:`slot`,value:P()},{name:`nav`,type:`slot`,value:A()}],w),argTypes:T,component:`syn-tab-group`,parameters:{chromatic:{modes:o},design:c(`42207-338578`),docs:{description:{component:m(`tab-group`,`default`)}}},tags:[`Navigation`],title:`Components/syn-tab-group`},z={parameters:{docs:{description:{story:m(`tab-group`,`default`)}}},render:e=>D({args:e})},B={parameters:{docs:{description:{story:m(`tab-group`,`start`)}}},render:()=>r`
  <syn-tab-group placement="start">
    ${j()}
    ${L()}
  </syn-tab-group>
  `},V={parameters:{docs:{description:{story:m(`tab-group`,`end`)}}},render:()=>r`
  <syn-tab-group placement="end">
    ${j()}
    ${L()}
  </syn-tab-group>
`},H={parameters:{docs:{description:{story:m(`tab-group`,`closable`)}}},render:()=>r(C||=y([`
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
  `]),[{content:`General`,panel:`general`,props:{active:!0}},{content:`Closable 1`,panel:`closable-1`,props:{closable:!0}},{content:`Closable 2`,panel:`closable-2`,props:{closable:!0}},{content:`Closable 3`,panel:`closable-3`,props:{closable:!0}}].map(({content:e,panel:t,props:n})=>k(t,e,n)),[{content:`general`,name:`general`},{content:`first closable`,name:`closable-1`},{content:`second closable`,name:`closable-2`},{content:`third closable`,name:`closable-3`}].map(({content:e,name:t},n)=>N(t,`This is the ${e} tab panel.`,n===0)))},U={parameters:{docs:{description:{story:m(`tab-group`,`scrolling`)}}},render:()=>r`
    <syn-tab-group>
      <!-- Tabs -->
      ${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`].map((e,t)=>k(`tab-${e}`,`Tab ${e}`,{active:t===0}))}

      <!-- Tab Panels -->
      ${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`].map((e,t)=>N(`tab-${e}`,`Tab panel ${e}`,t===0))}
    </syn-tab-group>
  `},W={parameters:{docs:{description:{story:m(`tab-group`,`hierachy`)}}},render:()=>r`
    <h3 class="body-medium">Default</h3>
    <syn-tab-group>
      ${I()}
    </syn-tab-group>

    <h3 class="body-medium">Contained</h3>
    <syn-tab-group contained>
      ${I()}
    </syn-tab-group>

    <h3 class="body-medium">Sharp</h3>
    <syn-tab-group contained sharp>
     ${I()}
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
  `},G={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:m(`tab-group`,`manuel`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-tab[panel="general"]`)?.focus()},render:()=>r` 
    <syn-tab-group activation="manual">
      ${j()}
      ${L()}
    </syn-tab-group>
  `},K={parameters:{docs:{description:{story:m(`tab-group`,`icon`)}}},render:()=>r`
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
    ${L()}
  </syn-tab-group>
`},q=_({Default:z,TabsOnStart:B,TabsOnEnd:V,ClosableTabs:H,ScrollingTabs:U,VisualHierarchy:W,Icons:K},{heightPx:740}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TabsOnStart,
  TabsOnEnd,
  ClosableTabs,
  ScrollingTabs,
  VisualHierarchy,
  Icons
}, {
  heightPx: 740
})`,...q.parameters?.docs?.source}}},J=[`Default`,`TabsOnStart`,`TabsOnEnd`,`ClosableTabs`,`ScrollingTabs`,`VisualHierarchy`,`ManualActivation`,`Icons`,`Screenshot`]}))();export{H as ClosableTabs,z as Default,K as Icons,G as ManualActivation,q as Screenshot,U as ScrollingTabs,V as TabsOnEnd,B as TabsOnStart,W as VisualHierarchy,J as __namedExportsOrder,R as default};