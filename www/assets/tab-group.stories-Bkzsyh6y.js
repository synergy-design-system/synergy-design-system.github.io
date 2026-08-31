import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,a as r,h as i,l as a}from"./preview-AI1NfaYJ.js";import{c as o,t as s}from"./lit-DgWh_IaA.js";import{i as c,n as l}from"./dist-CxjvbReK.js";import{t as u}from"./icon-CdFlfCYb.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./component-Bm6Rp1CP.js";import{t as _}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as v,t as y}from"./tab-panel-BaH81G3y.js";import{t as b}from"./tab-DmfFKDud.js";var x=t({ClosableTabs:()=>V,Default:()=>R,Icons:()=>G,ManualActivation:()=>W,Screenshot:()=>K,ScrollingTabs:()=>H,TabsOnEnd:()=>B,TabsOnStart:()=>z,VisualHierarchy:()=>U,__namedExportsOrder:()=>q,default:()=>L}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{v(),b(),y(),u(),s(),l(),i(),h(),a(),{args:C,argTypes:w}=f(`syn-tab-group`),{overrideArgs:T}=d(`syn-tab-group`),{generateTemplate:E}=m(`syn-tab-group`),D=(e,t,{active:n=!1,closable:r=!1,disabled:i=!1}={})=>`<syn-tab slot="nav" panel="${e}" ${n?`active`:``} ${i?`disabled`:``} ${r?`closable`:``}>${t}</syn-tab>`,O=(e,t,{active:r=!1,closable:i=!1,disabled:a=!1}={})=>n(D(e,t,{active:r,closable:i,disabled:a})),k=()=>[{panel:`general`,props:{active:!0}},{panel:`custom`},{panel:`advanced`},{panel:`disabled`,props:{disabled:!0}}].map(({panel:e,props:t})=>D(e,c(e),t)).join(`
`),A=()=>n(k()),j=(e,t,n=!1)=>`<syn-tab-panel name="${e}" ${n?`active`:``}>${t}</syn-tab-panel>`,M=(e,t,r=!1)=>n(j(e,t,r)),N=()=>[`general`,`custom`,`advanced`,`disabled`].map((e,t)=>j(e,`This is the ${e} tab panel.`,t===0)).join(`
`),P=(e,t=!1)=>o`
<syn-tab-panel name="${e}" ?active=${t}>
  <main class="synergy-replace">
    Replace this slot
  </main>
</syn-tab-panel>
`,F=()=>o`
  ${[`tab-1`,`tab-2`,`tab-3`,`tab-4`].map((e,t)=>O(e,`Tab item`,{active:t===0}))}
  ${[`tab-1`,`tab-2`,`tab-3`,`tab-4`].map((e,t)=>P(e,t===0))}
`,I=()=>n(N()),L={args:T([{name:`default`,type:`slot`,value:N()},{name:`nav`,type:`slot`,value:k()}],C),argTypes:w,component:`syn-tab-group`,parameters:{chromatic:{modes:r},docs:{description:{component:p(`tab-group`,`default`)}}},tags:[`Navigation`],title:`Components/syn-tab-group`},R={parameters:{docs:{description:{story:p(`tab-group`,`default`)}}},render:e=>E({args:e})},z={parameters:{docs:{description:{story:p(`tab-group`,`start`)}}},render:()=>o`
  <syn-tab-group placement="start">
    ${A()}
    ${I()}
  </syn-tab-group>
  `},B={parameters:{docs:{description:{story:p(`tab-group`,`end`)}}},render:()=>o`
  <syn-tab-group placement="end">
    ${A()}
    ${I()}
  </syn-tab-group>
`},V={parameters:{docs:{description:{story:p(`tab-group`,`closable`)}}},render:()=>o(S||=_([`
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
  `]),[{content:`General`,panel:`general`,props:{active:!0}},{content:`Closable 1`,panel:`closable-1`,props:{closable:!0}},{content:`Closable 2`,panel:`closable-2`,props:{closable:!0}},{content:`Closable 3`,panel:`closable-3`,props:{closable:!0}}].map(({content:e,panel:t,props:n})=>O(t,e,n)),[{content:`general`,name:`general`},{content:`first closable`,name:`closable-1`},{content:`second closable`,name:`closable-2`},{content:`third closable`,name:`closable-3`}].map(({content:e,name:t},n)=>M(t,`This is the ${e} tab panel.`,n===0)))},H={parameters:{docs:{description:{story:p(`tab-group`,`scrolling`)}}},render:()=>o`
    <syn-tab-group>
      <!-- Tabs -->
      ${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`].map((e,t)=>O(`tab-${e}`,`Tab ${e}`,{active:t===0}))}

      <!-- Tab Panels -->
      ${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`].map((e,t)=>M(`tab-${e}`,`Tab panel ${e}`,t===0))}
    </syn-tab-group>
  `},U={parameters:{docs:{description:{story:p(`tab-group`,`hierachy`)}}},render:()=>o`
    <h3 class="body-medium">Default</h3>
    <syn-tab-group>
      ${F()}
    </syn-tab-group>

    <h3 class="body-medium">Contained</h3>
    <syn-tab-group contained>
      ${F()}
    </syn-tab-group>

    <h3 class="body-medium">Sharp</h3>
    <syn-tab-group contained sharp>
     ${F()}
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
  `},W={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:p(`tab-group`,`manuel`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-tab[panel="general"]`)?.focus()},render:()=>o` 
    <syn-tab-group activation="manual">
      ${A()}
      ${I()}
    </syn-tab-group>
  `},G={parameters:{docs:{description:{story:p(`tab-group`,`icon`)}}},render:()=>o`
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
    ${I()}
  </syn-tab-group>
`},K=g({Default:R,TabsOnStart:z,TabsOnEnd:B,ClosableTabs:V,ScrollingTabs:H,VisualHierarchy:U,Icons:G},{heightPx:740}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TabsOnStart,
  TabsOnEnd,
  ClosableTabs,
  ScrollingTabs,
  VisualHierarchy,
  Icons
}, {
  heightPx: 740
})`,...K.parameters?.docs?.source}}},q=[`Default`,`TabsOnStart`,`TabsOnEnd`,`ClosableTabs`,`ScrollingTabs`,`VisualHierarchy`,`ManualActivation`,`Icons`,`Screenshot`]})))()}export{J as n,x as r,R as t};