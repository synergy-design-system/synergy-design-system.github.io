import{S as l}from"./button-group.component-DyX3c6kX.js";import"./button-BbfaGMjJ.js";import"./dropdown-DKqs0alv.js";import"./menu-item-Dn-rgPpS.js";import"./tooltip-D62lQLr_.js";import{g as m,C as b,x as t}from"./iframe-CW_KonjK.js";import{g as n,s as c,a as d,c as g,b as v}from"./component-C0ootQNb.js";import"./synergy-element-BoJA4F0K.js";import"./icon.component-9N7Azsi9.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./decorator-CVE5vLu9.js";import"./functions-Cnw7w7U0.js";import"./class-map-Bo2NiYIQ.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-qefA8dKN.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-DvWUUZZP.js";import"./dropdown.component-BX051Mdz.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./event-B0iVuGLD.js";import"./popup.component-CvFYpjcw.js";import"./menu.component-BlG038v0.js";import"./tooltip.component-BLbyQUBM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";l.define("syn-button-group");const{args:S,argTypes:f}=c("syn-button-group"),{overrideArgs:h}=d("syn-button-group"),{generateTemplate:w}=g("syn-button-group"),Y={args:h({name:"default",type:"slot",value:`
<syn-button>Left</syn-button>
<syn-button>Center</syn-button>
<syn-button>Right</syn-button>
      `.trim()},S),argTypes:f,component:"syn-button-group",parameters:{chromatic:{modes:b},design:m("45597-333058"),docs:{description:{component:n("button-group","default")}}},title:"Components/syn-button-group"},e={parameters:{controls:{disable:!1},docs:{description:{story:n("button-group","default")}}},render:o=>w({args:o})},s={parameters:{docs:{description:{story:n("button-group","variant")}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      ${["outline","filled"].map(o=>t`
        <syn-button-group variant="${o}" label="Variant (${o})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      `)}
    </div>
  `},r={parameters:{docs:{description:{story:n("button-group","size")}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large); flex-direction: column;">
      ${["small","medium","large"].map(o=>t`
        <syn-button-group size="${o}" label="Alignment (${o})">
          <syn-button>Left</syn-button>
          <syn-button>Center</syn-button>
          <syn-button>Right</syn-button>
        </syn-button-group>
      `)}
    </div>
  `},a={parameters:{docs:{description:{story:n("button-group","dropdowns-in-button-groups")}}},render:()=>t`
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
  `},u={parameters:{docs:{description:{story:n("button-group","split-buttons")}}},render:()=>t`
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
  `},i={parameters:{docs:{description:{story:n("button-group","tooltips")}}},render:()=>t`
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
  `},p={parameters:{docs:{description:{story:n("button-group","toolbar")}}},render:()=>t`
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
  `},y=v({Default:e,Variants:s,ButtonSizes:r,DropdownsInButtonGroups:a,SplitButtons:u,TooltipsInButtonGroups:i,ToolbarExample:p},280);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
} as Story`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  ButtonSizes,
  DropdownsInButtonGroups,
  SplitButtons,
  TooltipsInButtonGroups,
  ToolbarExample
}, 280)`,...y.parameters?.docs?.source}}};const Z=["Default","Variants","ButtonSizes","DropdownsInButtonGroups","SplitButtons","TooltipsInButtonGroups","ToolbarExample","Screenshot"];export{r as ButtonSizes,e as Default,a as DropdownsInButtonGroups,y as Screenshot,u as SplitButtons,p as ToolbarExample,i as TooltipsInButtonGroups,s as Variants,Z as __namedExportsOrder,Y as default};
