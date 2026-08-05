import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-C-q7G2lS.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./icon-DQH7sBmo.js";import{t as s}from"./divider-DzRMa51o.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-pvg5noYG.js";import{t as m}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as h,t as g}from"./menu-item-tqgokB4P.js";var _=t({CheckboxMenuItems:()=>k,Default:()=>w,Disabled:()=>E,Focus:()=>O,Loading:()=>D,PrefixAndSuffix:()=>T,Screenshot:()=>j,ValueSelection:()=>A,__namedExportsOrder:()=>M,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{a(),s(),h(),g(),o(),f(),r(),{args:y,argTypes:b}=l(`syn-menu-item`),{overrideArgs:x}=c(`syn-menu-item`),{generateTemplate:S}=d(`syn-menu-item`),C={args:x([{name:`default`,type:`slot`,value:`Option 1`}],y),argTypes:b,component:`syn-menu-item`,parameters:{chromatic:{modes:n},docs:{description:{component:u(`menu-item`,`default`)}}},tags:[`Navigation`],title:`Components/syn-menu-item`},w={parameters:{controls:{disable:!1},docs:{description:{story:u(`menu-item`,`default`)}}},render:e=>i`
    <syn-menu>
      ${S({args:e})}
    </syn-menu>
  `},T={parameters:{docs:{description:{story:u(`menu-item`,`prefixsuffix`)}}},render:()=>i`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>
        <syn-icon slot="prefix" name="house"></syn-icon>
        Home
      </syn-menu-item>

      <syn-menu-item>
        <syn-icon slot="prefix" name="mail"></syn-icon>
        Messages
        <syn-icon slot="suffix" name="info"></syn-icon>
      </syn-menu-item>

      <syn-divider></syn-divider>

      <syn-menu-item>
        <syn-icon slot="prefix" name="settings"></syn-icon>
        Settings
      </syn-menu-item>
    </syn-menu>
  `},E={parameters:{docs:{description:{story:u(`menu-item`,`disabled`)}}},render:()=>i`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},D={parameters:{docs:{description:{story:u(`menu-item`,`loading`)}}},render:()=>i`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item loading>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`menu-item`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-menu-item:nth-child(2)`);t&&t.focus()},render:()=>i`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},k={parameters:{docs:{description:{story:u(`menu-item`,`checkbox`)}}},render:()=>i`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item type="checkbox">Autosave</syn-menu-item>
      <syn-menu-item type="checkbox" checked>Check Spelling</syn-menu-item>
      <syn-menu-item type="checkbox">Word Wrap</syn-menu-item>
    </syn-menu>
  `},A={parameters:{docs:{description:{story:u(`menu-item`,`selection`)}}},render:()=>i(v||=m([`
    <syn-menu class="menu-value" style="max-width: 200px;">
      <syn-menu-item value="opt-1">Option 1</syn-menu-item>
      <syn-menu-item value="opt-2">Option 2</syn-menu-item>
      <syn-menu-item value="opt-3">Option 3</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item type="checkbox" value="opt-4" checked>Checkbox 4</syn-menu-item>
      <syn-menu-item type="checkbox" value="opt-5">Checkbox 5</syn-menu-item>
      <syn-menu-item type="checkbox" value="opt-6">Checkbox 6</syn-menu-item>
    </syn-menu>

    <script type="module">
      const menu = document.querySelector('.menu-value');

      menu.addEventListener('syn-select', event => {
        const item = event.detail.item;

        // Log value
        if (item.type === 'checkbox') {
          console.log('Selected value: ', item.value, item.checked ? 'checked' : 'unchecked');
        } else {
          console.log('Selected value: ', item.value);
        }
      });
    <\/script>
  `]))},j=p({Default:w,PrefixAndSuffix:T,Disabled:E,Loading:D,CheckboxMenuItems:k,ValueSelection:A},300),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'default')
      }
    }
  },
  render: args => html\`
    <syn-menu>
      \${generateTemplate({
    args
  })}
    </syn-menu>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'prefixsuffix')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>
        <syn-icon slot="prefix" name="house"></syn-icon>
        Home
      </syn-menu-item>

      <syn-menu-item>
        <syn-icon slot="prefix" name="mail"></syn-icon>
        Messages
        <syn-icon slot="suffix" name="info"></syn-icon>
      </syn-menu-item>

      <syn-divider></syn-divider>

      <syn-menu-item>
        <syn-icon slot="prefix" name="settings"></syn-icon>
        Settings
      </syn-menu-item>
    </syn-menu>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'loading')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item loading>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const item = canvasElement.querySelector('syn-menu-item:nth-child(2)') as unknown as SynMenuItem;
    if (item) {
      item.focus();
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'checkbox')
      }
    }
  },
  render: () => html\`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item type="checkbox">Autosave</syn-menu-item>
      <syn-menu-item type="checkbox" checked>Check Spelling</syn-menu-item>
      <syn-menu-item type="checkbox">Word Wrap</syn-menu-item>
    </syn-menu>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('menu-item', 'selection')
      }
    }
  },
  render: () => html\`
    <syn-menu class="menu-value" style="max-width: 200px;">
      <syn-menu-item value="opt-1">Option 1</syn-menu-item>
      <syn-menu-item value="opt-2">Option 2</syn-menu-item>
      <syn-menu-item value="opt-3">Option 3</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item type="checkbox" value="opt-4" checked>Checkbox 4</syn-menu-item>
      <syn-menu-item type="checkbox" value="opt-5">Checkbox 5</syn-menu-item>
      <syn-menu-item type="checkbox" value="opt-6">Checkbox 6</syn-menu-item>
    </syn-menu>

    <script type="module">
      const menu = document.querySelector('.menu-value');

      menu.addEventListener('syn-select', event => {
        const item = event.detail.item;

        // Log value
        if (item.type === 'checkbox') {
          console.log('Selected value: ', item.value, item.checked ? 'checked' : 'unchecked');
        } else {
          console.log('Selected value: ', item.value);
        }
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PrefixAndSuffix,
  Disabled,
  Loading,
  CheckboxMenuItems,
  ValueSelection
}, 300)`,...j.parameters?.docs?.source}}},M=[`Default`,`PrefixAndSuffix`,`Disabled`,`Loading`,`Focus`,`CheckboxMenuItems`,`ValueSelection`,`Screenshot`]})))()}export{N as n,_ as r,w as t};