import{i as e,g as p}from"./preview-CmgmDqI3.js";import{x as t}from"./lit-element-DILkAbkc.js";import{s as c,a as l,g as n,c as v}from"./component-DxU6OxXl.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-7B7zNgNb.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-BDdQ3v9d.js";import"./icon-D0WpraVk.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BQOBZeGB.js";var y=Object.freeze,w=Object.defineProperty,g=(s,C)=>y(w(s,"raw",{value:y(s.slice())})),u;const{args:h,argTypes:b}=c("syn-dropdown"),{overrideArgs:f}=v("syn-dropdown"),{generateTemplate:S}=l("syn-dropdown"),z={args:f([{name:"default",type:"slot",value:`
        <syn-button slot="trigger" caret>Dropdown</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Dropdown Item 1</syn-menu-item>
          <syn-menu-item>Dropdown Item 2</syn-menu-item>
          <syn-menu-item>Dropdown Item 3</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item type="checkbox" checked>Checkbox</syn-menu-item>
          <syn-menu-item disabled>Disabled</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>
            Prefix
            <syn-icon slot="prefix" name="wallpaper"></syn-icon>
          </syn-menu-item>
          <syn-menu-item>
            Suffix Icon
            <syn-icon slot="suffix" name="wallpaper"></syn-icon>
          </syn-menu-item>
        </syn-menu>    
      `},{name:"open",type:"attribute",value:e()}],h),argTypes:b,component:"syn-dropdown",parameters:{design:p("10461-8361"),docs:{description:{component:n("dropdown","default")},story:{height:"250px"}}},title:"Components/syn-dropdown"},i={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:n("dropdown","default")}}},render:s=>t`
    <div style="position: relative">
      ${S({args:s})}
    </div>
  `},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dropdown","selected")}}},render:()=>t(u||(u=g([`
    <div style="position: relative">
      <div class="dropdown-selection">
        <syn-dropdown ?open=`,`>
          <syn-button slot="trigger" caret>Edit</syn-button>
          <syn-menu style="min-width: 240px;">
            <syn-menu-item value="cut">Cut</syn-menu-item>
            <syn-menu-item value="copy">Copy</syn-menu-item>
            <syn-menu-item value="paste">Paste</syn-menu-item>
          </syn-menu>
        </syn-dropdown>
      </div>
    </div>

    <script type="module">
      const container = document.querySelector('.dropdown-selection');
      const dropdown = container.querySelector('syn-dropdown');

      dropdown.addEventListener('syn-select', event => {
        const selectedItem = event.detail.item;
        console.log(selectedItem.value);
      });
    <\/script>
  `])),e())},o={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dropdown","placement")}}},render:()=>t`
    <div style="position: relative">
      <syn-dropdown ?open=${e()} placement="right-start">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Cut</syn-menu-item>
          <syn-menu-item>Copy</syn-menu-item>
          <syn-menu-item>Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>Find</syn-menu-item>
          <syn-menu-item>Replace</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  `},r={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dropdown","distance")}}},render:()=>t`
    <div style="position: relative">
      <syn-dropdown ?open=${e()} distance="30">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Cut</syn-menu-item>
          <syn-menu-item>Copy</syn-menu-item>
          <syn-menu-item>Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>Find</syn-menu-item>
          <syn-menu-item>Replace</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dropdown","skidding")}}},render:()=>t`
    <div style="position: relative">
      <syn-dropdown ?open=${e()} skidding="30">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Cut</syn-menu-item>
          <syn-menu-item>Copy</syn-menu-item>
          <syn-menu-item>Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>Find</syn-menu-item>
          <syn-menu-item>Replace</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  `},a={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dropdown","submenu")}}},render:()=>t`
    <div style="position: relative">
      <syn-dropdown ?open=${e()}>
        <syn-button slot="trigger" caret>Edit</syn-button>

        <syn-menu style="min-width: 240px;">
          <syn-menu-item value="undo">Undo</syn-menu-item>
          <syn-menu-item value="redo">Redo</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item value="cut">Cut</syn-menu-item>
          <syn-menu-item value="copy">Copy</syn-menu-item>
          <syn-menu-item value="paste">Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>
            Find
            <syn-menu slot="submenu">
              <syn-menu-item value="find">Find…</syn-menu-item>
              <syn-menu-item value="find-previous">Find Next</syn-menu-item>
              <syn-menu-item value="find-next">Find Previous</syn-menu-item>
            </syn-menu>
          </syn-menu-item>
          <syn-menu-item>
            Transformations
            <syn-menu slot="submenu">
              <syn-menu-item value="uppercase">Make uppercase</syn-menu-item>
              <syn-menu-item value="lowercase">Make lowercase</syn-menu-item>
              <syn-menu-item value="capitalize">Capitalize</syn-menu-item>
            </syn-menu>
          </syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dropdown', 'default')
      }
    }
  },
  render: (args: unknown) => html\`
    <div style="position: relative">
      \${generateTemplate({
    args
  })}
    </div>
  \`
} as Story`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dropdown', 'selected')
      }
    }
  },
  render: () => html\`
    <div style="position: relative">
      <div class="dropdown-selection">
        <syn-dropdown ?open=\${isChromatic()}>
          <syn-button slot="trigger" caret>Edit</syn-button>
          <syn-menu style="min-width: 240px;">
            <syn-menu-item value="cut">Cut</syn-menu-item>
            <syn-menu-item value="copy">Copy</syn-menu-item>
            <syn-menu-item value="paste">Paste</syn-menu-item>
          </syn-menu>
        </syn-dropdown>
      </div>
    </div>

    <script type="module">
      const container = document.querySelector('.dropdown-selection');
      const dropdown = container.querySelector('syn-dropdown');

      dropdown.addEventListener('syn-select', event => {
        const selectedItem = event.detail.item;
        console.log(selectedItem.value);
      });
    <\/script>
  \`
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dropdown', 'placement')
      }
    }
  },
  render: () => html\`
    <div style="position: relative">
      <syn-dropdown ?open=\${isChromatic()} placement="right-start">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Cut</syn-menu-item>
          <syn-menu-item>Copy</syn-menu-item>
          <syn-menu-item>Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>Find</syn-menu-item>
          <syn-menu-item>Replace</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dropdown', 'distance')
      }
    }
  },
  render: () => html\`
    <div style="position: relative">
      <syn-dropdown ?open=\${isChromatic()} distance="30">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Cut</syn-menu-item>
          <syn-menu-item>Copy</syn-menu-item>
          <syn-menu-item>Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>Find</syn-menu-item>
          <syn-menu-item>Replace</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dropdown', 'skidding')
      }
    }
  },
  render: () => html\`
    <div style="position: relative">
      <syn-dropdown ?open=\${isChromatic()} skidding="30">
        <syn-button slot="trigger" caret>Edit</syn-button>
        <syn-menu style="min-width: 240px;">
          <syn-menu-item>Cut</syn-menu-item>
          <syn-menu-item>Copy</syn-menu-item>
          <syn-menu-item>Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>Find</syn-menu-item>
          <syn-menu-item>Replace</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dropdown', 'submenu')
      }
    }
  },
  render: () => html\`
    <div style="position: relative">
      <syn-dropdown ?open=\${isChromatic()}>
        <syn-button slot="trigger" caret>Edit</syn-button>

        <syn-menu style="min-width: 240px;">
          <syn-menu-item value="undo">Undo</syn-menu-item>
          <syn-menu-item value="redo">Redo</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item value="cut">Cut</syn-menu-item>
          <syn-menu-item value="copy">Copy</syn-menu-item>
          <syn-menu-item value="paste">Paste</syn-menu-item>
          <syn-divider></syn-divider>
          <syn-menu-item>
            Find
            <syn-menu slot="submenu">
              <syn-menu-item value="find">Find…</syn-menu-item>
              <syn-menu-item value="find-previous">Find Next</syn-menu-item>
              <syn-menu-item value="find-next">Find Previous</syn-menu-item>
            </syn-menu>
          </syn-menu-item>
          <syn-menu-item>
            Transformations
            <syn-menu slot="submenu">
              <syn-menu-item value="uppercase">Make uppercase</syn-menu-item>
              <syn-menu-item value="lowercase">Make lowercase</syn-menu-item>
              <syn-menu-item value="capitalize">Capitalize</syn-menu-item>
            </syn-menu>
          </syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};const q=["Default","GettingTheSelectedItem","Placement","Distance","Skidding","Submenus"];export{i as Default,r as Distance,m as GettingTheSelectedItem,o as Placement,d as Skidding,a as Submenus,q as __namedExportsOrder,z as default};
