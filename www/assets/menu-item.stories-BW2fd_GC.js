import{k as n}from"./directive-helpers-CDT6qhDs.js";import{s as p,a as d,g as l,b as e,c as x,d as h}from"./component--W7FzjDu.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-SK-fzUQf.js";import"./library-BZPO0bHa.js";import"./icon.component-CNnTmbSm.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-FgfOggb5.js";var c=Object.freeze,g=Object.defineProperty,v=(a,O)=>c(g(a,"raw",{value:c(a.slice())})),y;const{args:f,argTypes:k}=p("syn-menu-item"),{overrideArgs:b}=h("syn-menu-item"),{generateTemplate:S}=d("syn-menu-item"),I={args:b([{name:"default",type:"slot",value:"Option 1"}],f),argTypes:k,component:"syn-menu-item",parameters:{design:l("10461-8626"),docs:{description:{component:e("menu-item","default")}}},title:"Components/syn-menu-item"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("menu-item","default")}}},render:a=>n`
    <syn-menu>
      ${S({args:a})}
    </syn-menu>
  `},s={parameters:{docs:{description:{story:e("menu-item","prefixsuffix")}}},render:()=>n`
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
  `},m={parameters:{docs:{description:{story:e("menu-item","disabled")}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},i={parameters:{docs:{description:{story:e("menu-item","loading")}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item loading>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},o={parameters:{docs:{description:{story:e("menu-item","checkbox")}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item type="checkbox">Autosave</syn-menu-item>
      <syn-menu-item type="checkbox" checked>Check Spelling</syn-menu-item>
      <syn-menu-item type="checkbox">Word Wrap</syn-menu-item>
    </syn-menu>
  `},r={parameters:{docs:{description:{story:e("menu-item","selection")}}},render:()=>n(y||(y=v([`
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
  `])))},u=x({Default:t,PrefixAndSuffix:s,Disabled:m,Loading:i,CheckboxMenuItems:o,ValueSelection:r},300);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  render: (args: unknown) => html\`
    <syn-menu>
      \${generateTemplate({
    args
  })}
    </syn-menu>
  \`
} as Story`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PrefixAndSuffix,
  Disabled,
  Loading,
  CheckboxMenuItems,
  ValueSelection
}, 300)`,...u.parameters?.docs?.source}}};const V=["Default","PrefixAndSuffix","Disabled","Loading","CheckboxMenuItems","ValueSelection","Screenshot"];export{o as CheckboxMenuItems,t as Default,m as Disabled,i as Loading,s as PrefixAndSuffix,u as Screenshot,r as ValueSelection,V as __namedExportsOrder,I as default};
