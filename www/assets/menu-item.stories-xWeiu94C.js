import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-CKG-bwJX.js";import{t as s}from"./icon-CIjbzSz9.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-YYGwUeS7.js";import{n as m,t as h}from"./taggedTemplateLiteral-BuD1d7yP.js";import{n as g,t as _}from"./menu-item-CZLSPi4H.js";import{t as v}from"./divider-_kXTztXd.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{t(),v(),g(),_(),s(),f(),r(),a(),m(),{args:b,argTypes:x}=l(`syn-menu-item`),{overrideArgs:S}=c(`syn-menu-item`),{generateTemplate:C}=d(`syn-menu-item`),w={args:S([{name:`default`,type:`slot`,value:`Option 1`}],b),argTypes:x,component:`syn-menu-item`,parameters:{chromatic:{modes:i},design:o(`41203-369012`),docs:{description:{component:u(`menu-item`,`default`)}}},tags:[`Navigation`],title:`Components/syn-menu-item`},T={parameters:{controls:{disable:!1},docs:{description:{story:u(`menu-item`,`default`)}}},render:e=>n`
    <syn-menu>
      ${C({args:e})}
    </syn-menu>
  `},E={parameters:{docs:{description:{story:u(`menu-item`,`prefixsuffix`)}}},render:()=>n`
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
  `},D={parameters:{docs:{description:{story:u(`menu-item`,`disabled`)}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},O={parameters:{docs:{description:{story:u(`menu-item`,`loading`)}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item loading>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},k={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`menu-item`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-menu-item:nth-child(2)`);t&&t.focus()},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},A={parameters:{docs:{description:{story:u(`menu-item`,`checkbox`)}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item type="checkbox">Autosave</syn-menu-item>
      <syn-menu-item type="checkbox" checked>Check Spelling</syn-menu-item>
      <syn-menu-item type="checkbox">Word Wrap</syn-menu-item>
    </syn-menu>
  `},j={parameters:{docs:{description:{story:u(`menu-item`,`selection`)}}},render:()=>n(y||=h([`
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
  `]))},M=p({Default:T,PrefixAndSuffix:E,Disabled:D,Loading:O,CheckboxMenuItems:A,ValueSelection:j},300),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PrefixAndSuffix,
  Disabled,
  Loading,
  CheckboxMenuItems,
  ValueSelection
}, 300)`,...M.parameters?.docs?.source}}},N=[`Default`,`PrefixAndSuffix`,`Disabled`,`Loading`,`Focus`,`CheckboxMenuItems`,`ValueSelection`,`Screenshot`]}))();export{A as CheckboxMenuItems,T as Default,D as Disabled,k as Focus,O as Loading,E as PrefixAndSuffix,M as Screenshot,j as ValueSelection,N as __namedExportsOrder,w as default};