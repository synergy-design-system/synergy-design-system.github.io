import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-DWg8XNs3.js";import{d as r,f as i,g as a,u as o}from"./iframe-DFZAAaEN.js";import{t as s}from"./button-l6yb8oZI.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-C-mvpOf5.js";import{n as m,t as h}from"./menu-item-ClKW92WW.js";import{t as g}from"./dropdown-CjxkNdiw.js";import{t as _}from"./button-group-CQ_dh5JY.js";import{t as v}from"./tooltip-Qn026Jxm.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{_(),s(),g(),m(),h(),v(),n(),f(),r(),a(),{args:y,argTypes:b}=l(`syn-button-group`),{overrideArgs:x}=c(`syn-button-group`),{generateTemplate:S}=d(`syn-button-group`),C={args:x({name:`default`,type:`slot`,value:`<syn-button>Left</syn-button>
<syn-button>Center</syn-button>
<syn-button>Right</syn-button>`},y),argTypes:b,component:`syn-button-group`,parameters:{chromatic:{modes:i},design:o(`45597-333063`),docs:{description:{component:u(`button-group`,`default`)}}},title:`Components/syn-button-group`},w={parameters:{controls:{disable:!1},docs:{description:{story:u(`button-group`,`default`)}}},render:e=>S({args:e})},T={parameters:{docs:{description:{story:u(`button-group`,`variant`)}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      ${[`outline`,`filled`].map(e=>t`
        <syn-button-group variant="${e}" label="Variant (${e})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      `)}
    </div>
  `},E={parameters:{docs:{description:{story:u(`button-group`,`size`)}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      ${[`small`,`medium`,`large`].map(e=>t`
        <syn-button-group size="${e}" label="Alignment (${e})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      `)}
    </div>
  `},D={parameters:{docs:{description:{story:u(`button-group`,`dropdowns-in-button-groups`)}}},render:()=>t`
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
  `},O={parameters:{docs:{description:{story:u(`button-group`,`split-buttons`)}}},render:()=>t`
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
  `},k={parameters:{docs:{description:{story:u(`button-group`,`tooltips`)}}},render:()=>t`
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
  `},A={parameters:{docs:{description:{story:u(`button-group`,`toolbar`)}}},render:()=>t`
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
  `},j=p({Default:w,Variants:T,ButtonSizes:E,DropdownsInButtonGroups:D,SplitButtons:O,TooltipsInButtonGroups:k,ToolbarExample:A},280),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} as Story`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  ButtonSizes,
  DropdownsInButtonGroups,
  SplitButtons,
  TooltipsInButtonGroups,
  ToolbarExample
}, 280)`,...j.parameters?.docs?.source}}},M=[`Default`,`Variants`,`ButtonSizes`,`DropdownsInButtonGroups`,`SplitButtons`,`TooltipsInButtonGroups`,`ToolbarExample`,`Screenshot`]}));N();export{E as ButtonSizes,w as Default,D as DropdownsInButtonGroups,j as Screenshot,O as SplitButtons,A as ToolbarExample,k as TooltipsInButtonGroups,T as Variants,M as __namedExportsOrder,C as default,N as t};