import{g as p,x as n,i as t}from"./iframe-GSRepqjd.js";import"./dropdown-Bb-3iMdB.js";import"./divider-jw4E83G0.js";import"./menu-item-C5x8eeam.js";import"./button-CwZJTvX8.js";import"./icon-DLaBEzps.js";import{g as e,s as c,a as l,c as v}from"./component-sz2YSCF4.js";import"./dropdown.component-DOszIc0z.js";import"./animation-registry-l4L8bmT6.js";import"./class-map-QQ7HVnPG.js";import"./property-ImbD-3qY.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-CDNCanKK.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./query-DAIS6qJ0.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./component.styles-DXWA7L2q.js";import"./popup.component-BJEudzMA.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./divider.component-DbTnzFXm.js";import"./menu.component-CEPi9M8n.js";import"./directive-helpers-CvZEagFv.js";import"./slot-9EVoRGQc.js";import"./ref-747bye4Q.js";import"./async-directive-WyEE_4Ii.js";import"./icon.component-B3J6d3UF.js";import"./spinner.component-pJEN2kXr.js";import"./form-d9hCJUdr.js";import"./static-BkNWbPkN.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";var y=Object.freeze,w=Object.defineProperty,g=(s,C)=>y(w(s,"raw",{value:y(s.slice())})),u;const{args:h,argTypes:b}=c("syn-dropdown"),{overrideArgs:f}=l("syn-dropdown"),{generateTemplate:S}=v("syn-dropdown"),ie={args:f([{name:"default",type:"slot",value:`
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
      `},{name:"open",type:"attribute",value:t()}],h),argTypes:b,component:"syn-dropdown",parameters:{design:p("10461-8361"),docs:{description:{component:e("dropdown","default")},story:{height:"250px"}}},tags:["Form"],title:"Components/syn-dropdown"},i={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:e("dropdown","default")}}},render:s=>n`
    <div style="position: relative">
      ${S({args:s})}
    </div>
  `},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("dropdown","selected")}}},render:()=>n(u||(u=g([`
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
  `])),t())},o={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("dropdown","placement")}}},render:()=>n`
    <div style="position: relative">
      <syn-dropdown ?open=${t()} placement="right-start">
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
  `},r={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("dropdown","distance")}}},render:()=>n`
    <div style="position: relative">
      <syn-dropdown ?open=${t()} distance="30">
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
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("dropdown","skidding")}}},render:()=>n`
    <div style="position: relative">
      <syn-dropdown ?open=${t()} skidding="30">
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
  `},a={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("dropdown","submenu")}}},render:()=>n`
    <div style="position: relative">
      <syn-dropdown ?open=${t()}>
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
  render: args => html\`
    <div style="position: relative">
      \${generateTemplate({
    args
  })}
    </div>
  \`
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const me=["Default","GettingTheSelectedItem","Placement","Distance","Skidding","Submenus"];export{i as Default,r as Distance,m as GettingTheSelectedItem,o as Placement,d as Skidding,a as Submenus,me as __namedExportsOrder,ie as default};
