import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-Berx97Z2.js";import{t as s}from"./icon-sIvJvsnb.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-D0wDPDrh.js";import{n as m,t as h}from"./PaddingDecorator-DKDp5bXd.js";import{t as g}from"./nav-item-Bz33BqQU.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{g(),s(),n(),f(),a(),h(),r(),{args:_,argTypes:v}=l(`syn-nav-item`),{overrideArgs:y}=c(`syn-nav-item`),{generateTemplate:b}=d(`syn-nav-item`),x={args:y([{name:`default`,type:`slot`,value:`Label`}],_),argTypes:v,component:`syn-nav-item`,parameters:{chromatic:{modes:o},design:i(`41163-402744`),docs:{description:{component:u(`nav-item`,`default`)}}},tags:[`Navigation`],title:`Components/syn-nav-item`},S={parameters:{controls:{disable:!1},docs:{description:{story:u(`nav-item`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:u(`nav-item`,`labels`)}}},render:()=>t`
    <syn-nav-item>This is a label</syn-nav-item>
  `},w={parameters:{docs:{description:{story:u(`nav-item`,`current`)}}},render:()=>t`
    <syn-nav-item current>Current Navigation item</syn-nav-item>
  `},T={parameters:{docs:{description:{story:u(`nav-item`,`nav-horizontal`)}}},render:()=>t`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-nav-item current horizontal>Horizontal navigation item</syn-nav-item>
      <syn-nav-item horizontal>Horizontal navigation item</syn-nav-item>
    </div>
  `},E={decorators:[m()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`nav-item`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-nav-item`);t&&t.focus()},render:()=>t`
    <syn-nav-item>Current navigation item</syn-nav-item>
  `},D={parameters:{docs:{description:{story:u(`nav-item`,`prefix-suffix`)}}},render:()=>t`
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
  `},O={parameters:{docs:{description:{story:u(`nav-item`,`children`)}}},render:()=>t`
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
  `},k={parameters:{docs:{description:{story:u(`nav-item`,`divider`)}}},render:()=>t`
    <nav style="width: 320px;">
      <syn-nav-item>Dividing element</syn-nav-item>
      <syn-nav-item divider>Dividing element</syn-nav-item>
    </nav>
  `},A={parameters:{docs:{description:{story:u(`nav-item`,`indentation`)}}},render:()=>t`
    <nav style="width: 320px; gap: 24px; display: flex; flex-direction: column;">
      <syn-nav-item current>Indentation: none</syn-nav-item>
      <syn-nav-item current style="--indentation: 1">Indentation: 1</syn-nav-item>
      <syn-nav-item current style="--indentation: 2">Indentation: 2</syn-nav-item>
    </nav>
  `},j={parameters:{docs:{description:{story:u(`nav-item`,`disabled`)}}},render:()=>t`
    <syn-nav-item disabled>Parent Element</syn-nav-item>
  `},M=p({Default:S,Labels:C,Current:w,HorizontalNavigation:T,PrefixAndSuffixSlot:D,ChildrenClosedOrOpenVerticalOnly:O,Divider:k,Disabled:j},300),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  render: args => generateTemplate({
    args
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'nav-horizontal')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: var(--syn-spacing-large);">
      <syn-nav-item current horizontal>Horizontal navigation item</syn-nav-item>
      <syn-nav-item horizontal>Horizontal navigation item</syn-nav-item>
    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
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
    const item = canvasElement.querySelector('syn-nav-item');
    if (item) {
      item.focus();
    }
  },
  render: () => html\`
    <syn-nav-item>Current navigation item</syn-nav-item>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Current,
  HorizontalNavigation,
  PrefixAndSuffixSlot,
  ChildrenClosedOrOpenVerticalOnly,
  Divider,
  Disabled
}, 300)`,...M.parameters?.docs?.source}}},N=[`Default`,`Labels`,`Current`,`HorizontalNavigation`,`Focus`,`PrefixAndSuffixSlot`,`ChildrenClosedOrOpenVerticalOnly`,`Divider`,`Indentation`,`Disabled`,`Screenshot`]}));P();export{O as ChildrenClosedOrOpenVerticalOnly,w as Current,S as Default,j as Disabled,k as Divider,E as Focus,T as HorizontalNavigation,A as Indentation,C as Labels,D as PrefixAndSuffixSlot,M as Screenshot,N as __namedExportsOrder,x as default,P as t};