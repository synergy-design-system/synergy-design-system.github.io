import{g as u}from"./preview-BH0iTC6g.js";import{x as e}from"./lit-element-ZYWMe1i1.js";import{s as g,a as f,g as n,b as h,c as b}from"./component-B40MukIV.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DcbuMwrE.js";import"./icon.component-D55FUTwa.js";import"./directive-helpers-CkpR4LMI.js";import"./icon-BrqnReZV.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BhJsmGLR.js";const{args:x,argTypes:S}=g("syn-nav-item"),{overrideArgs:D}=b("syn-nav-item"),{generateTemplate:z}=f("syn-nav-item"),L={args:D([{name:"default",type:"slot",value:"Label"}],x),argTypes:S,component:"syn-nav-item",parameters:{design:u("12362-10775"),docs:{description:{component:n("nav-item","default")}}},title:"Components/syn-nav-item"},t={parameters:{controls:{disable:!1},docs:{description:{story:n("nav-item","default")}}},render:y=>z({args:y})},r={parameters:{docs:{description:{story:n("nav-item","labels")}}},render:()=>e`
    <syn-nav-item>This is a label</syn-nav-item>
  `},a={parameters:{docs:{description:{story:n("nav-item","current")}}},render:()=>e`
    <syn-nav-item current>Current Navigation item</syn-nav-item>
  `},s={parameters:{docs:{description:{story:n("nav-item","nav-horizontal")}}},render:()=>e`
    <syn-nav-item current horizontal>Horizontal navigation item</syn-nav-item>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("nav-item","focus")}}},play:({canvasElement:y})=>{const v=y.querySelector("syn-nav-item");v&&v.focus()},render:()=>e`
    <syn-nav-item>Current navigation item</syn-nav-item>
  `},i={parameters:{docs:{description:{story:n("nav-item","prefix-suffix")}}},render:()=>e`
    <style>
    .doc-number-helper {
      align-items: center;
      border: 1px solid var(--syn-color-neutral-400);
      border-radius: var(--syn-border-radius-circle);
      box-sizing: border-box;
      color: var(--syn-color-neutral-950);
      display: inline-flex;
      font-size: var(--syn-font-size-x-small);
      height: var(--syn-font-size-x-large);
      width: var(--syn-font-size-x-large);
      justify-content: center;
    }
    </style>
    <syn-nav-item>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Item with icon slots
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-nav-item>
    <br />
    <syn-nav-item>
      <span class="doc-number-helper" slot="prefix">1</span>
      Step-like item with a number
    </syn-nav-item>
  `},o={parameters:{docs:{description:{story:n("nav-item","children")}}},render:()=>e`
    <nav style="width: 320px">
      <syn-nav-item>
        Children closed
        <nav slot="children">
          <syn-nav-item>Item 1</syn-nav-item>
          <syn-nav-item>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
      <br />
      <syn-nav-item open >
        Children open
        <nav slot="children">
          <syn-nav-item>Item 1</syn-nav-item>
          <syn-nav-item>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
    </nav>
  `},m={parameters:{docs:{description:{story:n("nav-item","divider")}}},render:()=>e`
    <nav style="width: 320px;">
      <syn-nav-item>Dividing element</syn-nav-item>
      <syn-nav-item divider>Dividing element</syn-nav-item>
    </nav>
  `},l={parameters:{docs:{description:{story:n("nav-item","indentation")}}},render:()=>e`
    <nav style="width: 320px; gap: 24px; display: flex; flex-direction: column;">
      <syn-nav-item current>Indentation: none</syn-nav-item>
      <syn-nav-item current style="--indentation: 1">Indentation: 1</syn-nav-item>
      <syn-nav-item current style="--indentation: 2">Indentation: 2</syn-nav-item>
    </nav>
  `},c={parameters:{docs:{description:{story:n("nav-item","disabled")}}},render:()=>e`
    <syn-nav-item disabled>Parent Element</syn-nav-item>
  `},p=h({Default:t,Labels:r,Current:a,HorizontalNavigation:s,PrefixAndSuffixSlot:i,ChildrenClosedOrOpenVerticalOnly:o,Divider:m,Disabled:c},300);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-nav-item>This is a label</syn-nav-item>
  \`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'current')
      }
    }
  },
  render: () => html\`
    <syn-nav-item current>Current Navigation item</syn-nav-item>
  \`
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'nav-horizontal')
      }
    }
  },
  render: () => html\`
    <syn-nav-item current horizontal>Horizontal navigation item</syn-nav-item>
  \`
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const item = (canvasElement.querySelector('syn-nav-item') as SynNavItem);
    if (item) {
      item.focus();
    }
  },
  render: () => html\`
    <syn-nav-item>Current navigation item</syn-nav-item>
  \`
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <style>
    .doc-number-helper {
      align-items: center;
      border: 1px solid var(--syn-color-neutral-400);
      border-radius: var(--syn-border-radius-circle);
      box-sizing: border-box;
      color: var(--syn-color-neutral-950);
      display: inline-flex;
      font-size: var(--syn-font-size-x-small);
      height: var(--syn-font-size-x-large);
      width: var(--syn-font-size-x-large);
      justify-content: center;
    }
    </style>
    <syn-nav-item>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Item with icon slots
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-nav-item>
    <br />
    <syn-nav-item>
      <span class="doc-number-helper" slot="prefix">1</span>
      Step-like item with a number
    </syn-nav-item>
  \`
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'children')
      }
    }
  },
  render: () => html\`
    <nav style="width: 320px">
      <syn-nav-item>
        Children closed
        <nav slot="children">
          <syn-nav-item>Item 1</syn-nav-item>
          <syn-nav-item>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
      <br />
      <syn-nav-item open >
        Children open
        <nav slot="children">
          <syn-nav-item>Item 1</syn-nav-item>
          <syn-nav-item>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
    </nav>
  \`
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'divider')
      }
    }
  },
  render: () => html\`
    <nav style="width: 320px;">
      <syn-nav-item>Dividing element</syn-nav-item>
      <syn-nav-item divider>Dividing element</syn-nav-item>
    </nav>
  \`
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'indentation')
      }
    }
  },
  render: () => html\`
    <nav style="width: 320px; gap: 24px; display: flex; flex-direction: column;">
      <syn-nav-item current>Indentation: none</syn-nav-item>
      <syn-nav-item current style="--indentation: 1">Indentation: 1</syn-nav-item>
      <syn-nav-item current style="--indentation: 2">Indentation: 2</syn-nav-item>
    </nav>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-nav-item disabled>Parent Element</syn-nav-item>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Current,
  HorizontalNavigation,
  PrefixAndSuffixSlot,
  ChildrenClosedOrOpenVerticalOnly,
  Divider,
  Disabled
}, 300)`,...p.parameters?.docs?.source}}};const j=["Default","Labels","Current","HorizontalNavigation","Focus","PrefixAndSuffixSlot","ChildrenClosedOrOpenVerticalOnly","Divider","Indentation","Disabled","Screenshot"];export{o as ChildrenClosedOrOpenVerticalOnly,a as Current,t as Default,c as Disabled,m as Divider,d as Focus,s as HorizontalNavigation,l as Indentation,r as Labels,i as PrefixAndSuffixSlot,p as Screenshot,j as __namedExportsOrder,L as default};
