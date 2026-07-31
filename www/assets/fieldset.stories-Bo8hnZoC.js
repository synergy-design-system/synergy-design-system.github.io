import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-DXkhgu0Z.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-B0n0ooCL.js";import{t as p}from"./input-kCHvP1AL.js";import{t as m}from"./fieldset-BNcROlBz.js";var h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{m(),p(),o(),d(),r(),n(),{args:h,argTypes:g}=c(`syn-fieldset`),{overrideArgs:_}=s(`syn-fieldset`),{generateTemplate:v}=u(`syn-fieldset`),y=(e=3,t=!0)=>Array.from({length:e},(e,n)=>t?a`<syn-input name="item-${n+1}" label="Item ${n+1}"></syn-input>\n`:`<syn-input name="item-${n+1}" label="Item ${n+1}"></syn-input>`),b={args:_([{name:`layout`,type:`attribute`,value:`two-columns`},{name:`legend`,type:`attribute`,value:`Legend`},{name:`description`,type:`attribute`,value:`Description text for the fieldset. This is optional and can be used to provide additional information about the fieldset.`},{name:`default`,type:`slot`,value:y(6,!1).map(String).join(`
`)}],h),argTypes:g,component:`syn-fieldset`,parameters:{chromatic:{modes:i},design:t(`50945-47173`),docs:{description:{component:l(`fieldset`,`default`)}}},tags:[`Form`,`Structure`],title:`Components/syn-fieldset`},x={parameters:{controls:{disable:!1},docs:{description:{story:l(`fieldset`,`default`)}}},render:e=>v({args:e})},S={parameters:{controls:{disable:!1},docs:{description:{story:l(`fieldset`,`one-column-layout`)}}},render:()=>a`
    <syn-fieldset
      description="For container widths < 640px"
      layout="one-column"
      legend="One column layout"
    >
      ${y(6)}
    </syn-fieldset>
  `},C={parameters:{controls:{disable:!1},docs:{description:{story:l(`fieldset`,`two-column-layout`)}}},render:()=>a`
    <syn-fieldset
      description="For container widths ≥ 640px"
      layout="two-columns"
      legend="Two column layout"
    >
      ${y(6)}
    </syn-fieldset>
  `},w={parameters:{controls:{disable:!1},docs:{description:{story:l(`fieldset`,`disabled`)}}},render:()=>a`
    <syn-fieldset
      disabled
      layout="two-columns"
      legend="Disabled fieldset"
    >
      ${y(6)}
    </syn-fieldset>
  `},T=f({Default:x,OneColumnLayout:S,TwoColumnLayout:C,Disabled:w},750),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('fieldset', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('fieldset', 'one-column-layout')
      }
    }
  },
  render: () => html\`
    <syn-fieldset
      description="For container widths < 640px"
      layout="one-column"
      legend="One column layout"
    >
      \${createFields(6)}
    </syn-fieldset>
  \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('fieldset', 'two-column-layout')
      }
    }
  },
  render: () => html\`
    <syn-fieldset
      description="For container widths ≥ 640px"
      layout="two-columns"
      legend="Two column layout"
    >
      \${createFields(6)}
    </syn-fieldset>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('fieldset', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-fieldset
      disabled
      layout="two-columns"
      legend="Disabled fieldset"
    >
      \${createFields(6)}
    </syn-fieldset>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  OneColumnLayout,
  TwoColumnLayout,
  Disabled
}, 750)`,...T.parameters?.docs?.source}}},E=[`Default`,`OneColumnLayout`,`TwoColumnLayout`,`Disabled`,`Screenshot`]}));D();export{x as Default,w as Disabled,S as OneColumnLayout,T as Screenshot,C as TwoColumnLayout,E as __namedExportsOrder,b as default,D as t};