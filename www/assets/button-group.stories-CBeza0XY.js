import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe--jLxr_1k.js";import{t as s}from"./button-CoWaGdfw.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-BrFCNCcp.js";import{n as m,t as h}from"./menu-item-B7yHZSzm.js";import{t as g}from"./dropdown-B95uQ-ai.js";import{n as _,t as v}from"./button-group.component-QG5mxyqn.js";import{t as y}from"./tooltip-BGZJdg2k.js";var b=e((()=>{_(),_(),v.define(`syn-button-group`)})),x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{b(),s(),g(),m(),h(),y(),t(),f(),r(),a(),{args:x,argTypes:S}=l(`syn-button-group`),{overrideArgs:C}=c(`syn-button-group`),{generateTemplate:w}=d(`syn-button-group`),T={args:C({name:`default`,type:`slot`,value:`<syn-button>Left</syn-button>
<syn-button>Center</syn-button>
<syn-button>Right</syn-button>`},x),argTypes:S,component:`syn-button-group`,parameters:{chromatic:{modes:i},design:o(`45597-333063`),docs:{description:{component:u(`button-group`,`default`)}}},title:`Components/syn-button-group`},E={parameters:{controls:{disable:!1},docs:{description:{story:u(`button-group`,`default`)}}},render:e=>w({args:e})},D={parameters:{docs:{description:{story:u(`button-group`,`variant`)}}},render:()=>n`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      ${[`outline`,`filled`].map(e=>n`
        <syn-button-group variant="${e}" label="Variant (${e})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      `)}
    </div>
  `},O={parameters:{docs:{description:{story:u(`button-group`,`size`)}}},render:()=>n`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      ${[`small`,`medium`,`large`].map(e=>n`
        <syn-button-group size="${e}" label="Alignment (${e})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      `)}
    </div>
  `},k={parameters:{docs:{description:{story:u(`button-group`,`dropdowns-in-button-groups`)}}},render:()=>n`
    <syn-button-group label="Example Button Group">
      <syn-button>Button</syn-button>
      <syn-button>Button</syn-button>
      <syn-dropdown placement="bottom-end">
        <syn-button slot="trigger" caret>Dropdown</syn-button>
        <syn-menu>
          <syn-menu-item>Save</syn-menu-item>
          <syn-menu-item>Save as&hellip;</syn-menu-item>
          <syn-menu-item>Save all</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </syn-button-group>
  `},A={parameters:{docs:{description:{story:u(`button-group`,`split-buttons`)}}},render:()=>n`
    <syn-button-group label="Example Button Group">
      <syn-button>Save</syn-button>
      <syn-dropdown placement="bottom-end">
        <syn-button slot="trigger" variant="primary" caret></syn-button>
        <syn-menu>
          <syn-menu-item>Save</syn-menu-item>
          <syn-menu-item>Save as&hellip;</syn-menu-item>
          <syn-menu-item>Save all</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </syn-button-group>
  `},j={parameters:{docs:{description:{story:u(`button-group`,`tooltips`)}}},render:()=>n`
    <syn-button-group label="Example Button Group">
      <syn-tooltip content="I am on the left">
        <syn-button>Left</syn-button>
      </syn-tooltip>
      <syn-tooltip content="I am in the center">
        <syn-button>Center</syn-button>
      </syn-tooltip>
      <syn-tooltip content="I am on the right">
        <syn-button>Right</syn-button>
      </syn-tooltip>
    </syn-button-group>
  `},M={parameters:{docs:{description:{story:u(`button-group`,`toolbar`)}}},render:()=>n`
    <div class="button-group-toolbar">
      <syn-button-group label="Download and save">
        <syn-tooltip content="Save">
          <syn-button><syn-icon name="save" label="Save"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Download">
          <syn-button><syn-icon name="save_alt" label="Download"></syn-icon></syn-button>
        </syn-tooltip>
      </syn-button-group>

      <syn-button-group label="Misc">
        <syn-tooltip content="Edit">
          <syn-button><syn-icon name="edit" label="Edit"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Settings">
          <syn-button><syn-icon name="settings" label="Settings"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Preview">
          <syn-button><syn-icon name="wallpaper" label="Preview"></syn-icon></syn-button>
        </syn-tooltip>
      </syn-button-group>

      <syn-button-group>
        <syn-tooltip content="Add">
          <syn-button><syn-icon name="add" label="Add"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Info">
          <syn-button><syn-icon name="info" label="Info"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Upload File">
          <syn-button><syn-icon name="upload_file" label="Upload File"></syn-icon></syn-button>
        </syn-tooltip>
      </syn-button-group>
    </div>

    <style>
      .button-group-toolbar syn-button-group:not(:last-of-type) {
        margin-right: var(--syn-spacing-large);
      }
    </style>
  `},N=p({Default:E,Variants:D,ButtonSizes:O,DropdownsInButtonGroups:k,SplitButtons:A,TooltipsInButtonGroups:j,ToolbarExample:M},280),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
} as Story`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'variant')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      \${['outline', 'filled'].map(variant => html\`
        <syn-button-group variant="\${variant}" label="Variant (\${variant})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      \`)}
    </div>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      \${['small', 'medium', 'large'].map(size => html\`
        <syn-button-group size="\${size}" label="Alignment (\${size})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      \`)}
    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'dropdowns-in-button-groups')
      }
    }
  },
  render: () => html\`
    <syn-button-group label="Example Button Group">
      <syn-button>Button</syn-button>
      <syn-button>Button</syn-button>
      <syn-dropdown placement="bottom-end">
        <syn-button slot="trigger" caret>Dropdown</syn-button>
        <syn-menu>
          <syn-menu-item>Save</syn-menu-item>
          <syn-menu-item>Save as&hellip;</syn-menu-item>
          <syn-menu-item>Save all</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </syn-button-group>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'split-buttons')
      }
    }
  },
  render: () => html\`
    <syn-button-group label="Example Button Group">
      <syn-button>Save</syn-button>
      <syn-dropdown placement="bottom-end">
        <syn-button slot="trigger" variant="primary" caret></syn-button>
        <syn-menu>
          <syn-menu-item>Save</syn-menu-item>
          <syn-menu-item>Save as&hellip;</syn-menu-item>
          <syn-menu-item>Save all</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </syn-button-group>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'tooltips')
      }
    }
  },
  render: () => html\`
    <syn-button-group label="Example Button Group">
      <syn-tooltip content="I am on the left">
        <syn-button>Left</syn-button>
      </syn-tooltip>
      <syn-tooltip content="I am in the center">
        <syn-button>Center</syn-button>
      </syn-tooltip>
      <syn-tooltip content="I am on the right">
        <syn-button>Right</syn-button>
      </syn-tooltip>
    </syn-button-group>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('button-group', 'toolbar')
      }
    }
  },
  render: () => html\`
    <div class="button-group-toolbar">
      <syn-button-group label="Download and save">
        <syn-tooltip content="Save">
          <syn-button><syn-icon name="save" label="Save"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Download">
          <syn-button><syn-icon name="save_alt" label="Download"></syn-icon></syn-button>
        </syn-tooltip>
      </syn-button-group>

      <syn-button-group label="Misc">
        <syn-tooltip content="Edit">
          <syn-button><syn-icon name="edit" label="Edit"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Settings">
          <syn-button><syn-icon name="settings" label="Settings"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Preview">
          <syn-button><syn-icon name="wallpaper" label="Preview"></syn-icon></syn-button>
        </syn-tooltip>
      </syn-button-group>

      <syn-button-group>
        <syn-tooltip content="Add">
          <syn-button><syn-icon name="add" label="Add"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Info">
          <syn-button><syn-icon name="info" label="Info"></syn-icon></syn-button>
        </syn-tooltip>
        <syn-tooltip content="Upload File">
          <syn-button><syn-icon name="upload_file" label="Upload File"></syn-icon></syn-button>
        </syn-tooltip>
      </syn-button-group>
    </div>

    <style>
      .button-group-toolbar syn-button-group:not(:last-of-type) {
        margin-right: var(--syn-spacing-large);
      }
    </style>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  ButtonSizes,
  DropdownsInButtonGroups,
  SplitButtons,
  TooltipsInButtonGroups,
  ToolbarExample
}, 280)`,...N.parameters?.docs?.source}}},P=[`Default`,`Variants`,`ButtonSizes`,`DropdownsInButtonGroups`,`SplitButtons`,`TooltipsInButtonGroups`,`ToolbarExample`,`Screenshot`]}))();export{O as ButtonSizes,E as Default,k as DropdownsInButtonGroups,N as Screenshot,A as SplitButtons,M as ToolbarExample,j as TooltipsInButtonGroups,D as Variants,P as __namedExportsOrder,T as default};