import"./nav-item-BfJFkqeI.js";import"./icon-pavMdF9K.js";import{x as n}from"./directive-helpers-DGrfjhaU.js";import{g as e,a as u,s as f,b as g,d as h,c as b}from"./component-CRxE2rhG.js";import"./static-gmWA-8Kq.js";import"./property-BGzwfL48.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./if-defined-B2ZFWIyt.js";import"./divider.component-KO_YE4Ha.js";import"./watch-CEsCE2EF.js";import"./component.styles-Do19GEOY.js";import"./icon.component-CScz9CrR.js";import"./slot-9EVoRGQc.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CcHPuk5a.js";const{args:x,argTypes:S}=f("syn-nav-item"),{overrideArgs:D}=g("syn-nav-item"),{generateTemplate:z}=h("syn-nav-item"),R={args:D([{name:"default",type:"slot",value:"Label"}],x),argTypes:S,component:"syn-nav-item",parameters:{design:u("12362-10775"),docs:{description:{component:e("nav-item","default")}}},title:"Components/syn-nav-item"},r={parameters:{controls:{disable:!1},docs:{description:{story:e("nav-item","default")}}},render:y=>z({args:y})},t={parameters:{docs:{description:{story:e("nav-item","labels")}}},render:()=>n`
    <syn-nav-item>This is a label</syn-nav-item>
  `},a={parameters:{docs:{description:{story:e("nav-item","current")}}},render:()=>n`
    <syn-nav-item current>Current Navigation item</syn-nav-item>
  `},s={parameters:{docs:{description:{story:e("nav-item","nav-horizontal")}}},render:()=>n`
    <syn-nav-item current horizontal>Horizontal navigation item</syn-nav-item>
  `},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("nav-item","focus")}}},play:({canvasElement:y})=>{const v=y.querySelector("syn-nav-item");v&&v.focus()},render:()=>n`
    <syn-nav-item>Current navigation item</syn-nav-item>
  `},i={parameters:{docs:{description:{story:e("nav-item","prefix-suffix")}}},render:()=>n`
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
  `},o={parameters:{docs:{description:{story:e("nav-item","children")}}},render:()=>n`
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
          <syn-nav-item href="javascript:void(0)">Item 1</syn-nav-item>
          <syn-nav-item>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
    </nav>
  `},m={parameters:{docs:{description:{story:e("nav-item","divider")}}},render:()=>n`
    <nav style="width: 320px;">
      <syn-nav-item>Dividing element</syn-nav-item>
      <syn-nav-item divider>Dividing element</syn-nav-item>
    </nav>
  `},l={parameters:{docs:{description:{story:e("nav-item","indentation")}}},render:()=>n`
    <nav style="width: 320px; gap: 24px; display: flex; flex-direction: column;">
      <syn-nav-item current>Indentation: none</syn-nav-item>
      <syn-nav-item current style="--indentation: 1">Indentation: 1</syn-nav-item>
      <syn-nav-item current style="--indentation: 2">Indentation: 2</syn-nav-item>
    </nav>
  `},c={parameters:{docs:{description:{story:e("nav-item","disabled")}}},render:()=>n`
    <syn-nav-item disabled>Parent Element</syn-nav-item>
  `},p=b({Default:r,Labels:t,Current:a,HorizontalNavigation:s,PrefixAndSuffixSlot:i,ChildrenClosedOrOpenVerticalOnly:o,Divider:m,Disabled:c},300);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    const item = canvasElement.querySelector('syn-nav-item') as SynNavItem;
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
          <syn-nav-item href="javascript:void(0)">Item 1</syn-nav-item>
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
}, 300)`,...p.parameters?.docs?.source}}};const U=["Default","Labels","Current","HorizontalNavigation","Focus","PrefixAndSuffixSlot","ChildrenClosedOrOpenVerticalOnly","Divider","Indentation","Disabled","Screenshot"];export{o as ChildrenClosedOrOpenVerticalOnly,a as Current,r as Default,c as Disabled,m as Divider,d as Focus,s as HorizontalNavigation,l as Indentation,t as Labels,i as PrefixAndSuffixSlot,p as Screenshot,U as __namedExportsOrder,R as default};
