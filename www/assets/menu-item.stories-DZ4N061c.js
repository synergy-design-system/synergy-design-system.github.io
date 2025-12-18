import{g as l,C as h,x as n}from"./iframe-BzMZbpvr.js";import"./divider-B83x13zP.js";import"./menu-item-VZxhfF7y.js";import"./icon-5mMJscih.js";import{g as e,s as x,a as g,b as f,c as v}from"./component-DbiUGRJd.js";import"./preload-helper-Ct5FWWRu.js";import"./divider.component-C7rYfaC2.js";import"./synergy-element-dW9JSpRW.js";import"./watch-CEsCE2EF.js";import"./menu.component-CahDfufk.js";import"./icon.component-PB2O3BYH.js";import"./query-DAIS6qJ0.js";import"./class-map-DM5-FK16.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./popup.component-BdKKTtNt.js";import"./if-defined-nn1R3lcX.js";import"./spinner.component-Cwk0tATg.js";import"./index-CQ0aEGxp.js";import"./_docs-DmU5sf6r.js";var p=Object.freeze,b=Object.defineProperty,S=(t,y)=>p(b(t,"raw",{value:p(t.slice())})),d;const{args:k,argTypes:O}=x("syn-menu-item"),{overrideArgs:w}=g("syn-menu-item"),{generateTemplate:D}=v("syn-menu-item"),K={args:w([{name:"default",type:"slot",value:"Option 1"}],k),argTypes:O,component:"syn-menu-item",parameters:{chromatic:{modes:h},design:l("10461-8626"),docs:{description:{component:e("menu-item","default")}}},tags:["Navigation"],title:"Components/syn-menu-item"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("menu-item","default")}}},render:t=>n`
    <syn-menu>
      ${D({args:t})}
    </syn-menu>
  `},m={parameters:{docs:{description:{story:e("menu-item","prefixsuffix")}}},render:()=>n`
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
  `},i={parameters:{docs:{description:{story:e("menu-item","disabled")}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},o={parameters:{docs:{description:{story:e("menu-item","loading")}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item loading>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("menu-item","focus")}}},play:({canvasElement:t})=>{const y=t.querySelector("syn-menu-item:nth-child(2)");y&&y.focus()},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item>Option 1</syn-menu-item>
      <syn-menu-item disabled>Option 2</syn-menu-item>
      <syn-menu-item>Option 3</syn-menu-item>
    </syn-menu>
  `},r={parameters:{docs:{description:{story:e("menu-item","checkbox")}}},render:()=>n`
    <syn-menu style="max-width: 240px;">
      <syn-menu-item type="checkbox">Autosave</syn-menu-item>
      <syn-menu-item type="checkbox" checked>Check Spelling</syn-menu-item>
      <syn-menu-item type="checkbox">Word Wrap</syn-menu-item>
    </syn-menu>
  `},a={parameters:{docs:{description:{story:e("menu-item","selection")}}},render:()=>n(d||(d=S([`
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
  `])))},u=f({Default:s,PrefixAndSuffix:m,Disabled:i,Loading:o,CheckboxMenuItems:r,ValueSelection:a},300);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  PrefixAndSuffix,
  Disabled,
  Loading,
  CheckboxMenuItems,
  ValueSelection
}, 300)`,...u.parameters?.docs?.source}}};const Q=["Default","PrefixAndSuffix","Disabled","Loading","Focus","CheckboxMenuItems","ValueSelection","Screenshot"];export{r as CheckboxMenuItems,s as Default,i as Disabled,c as Focus,o as Loading,m as PrefixAndSuffix,u as Screenshot,a as ValueSelection,Q as __namedExportsOrder,K as default};
