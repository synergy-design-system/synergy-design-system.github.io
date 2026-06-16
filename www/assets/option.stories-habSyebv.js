import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,d as r,f as i,g as a,u as o}from"./iframe-CR7gJfd0.js";import{t as s}from"./icon-Dc1RxlDd.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-Cxgfo-fM.js";import{t as m}from"./option-CGj7G9Br.js";import{t as h}from"./select-CN5d5cUx.js";import{n as g,t as _}from"./select-CDoRNney.js";var v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{m(),h(),s(),n(),_(),f(),r(),a(),{args:v,argTypes:y}=l(`syn-option`),{overrideArgs:b}=c(`syn-option`),{generateTemplate:x}=d(`syn-option`),S={args:b([{name:`default`,type:`slot`,value:`Option 1`},{name:`value`,type:`attribute`,value:`Option_1`}],v),argTypes:y,component:`syn-option`,parameters:{design:o(`41325-312743`),docs:{chromatic:{modes:i},description:{component:u(`option`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-option`},C={parameters:{docs:{description:{story:u(`option`,`default`)}}},render:e=>t`
    <syn-select label="Select one">
      ${x({args:e})}
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
    </syn-select>
  `},w={parameters:{docs:{description:{story:u(`option`,`disabled`)}}},render:()=>t`
    <syn-select label="Select one" label="Select one">
      <syn-option value="option-1">Email</syn-option>
      <syn-option value="option-2" disabled>Phone</syn-option>
      <syn-option value="option-3">Chat</syn-option>

      <syn-option value="option-4" disabled>
        <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
        <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
        Other
      </syn-option>
      <!-- /Regression#1277 -->
    </syn-select>
  `},T={parameters:{docs:{description:{story:u(`option`,`prefix-suffix`)}}},render:()=>t`
    <syn-select label="Select one" open>
      <syn-option value="option-1">
        <syn-icon slot="prefix" name="email"></syn-icon>
        Email
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>

      <syn-option value="option-2">
        <syn-icon slot="prefix" name="local_phone"></syn-icon>
        Phone
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>

      <syn-option value="option-3">
        <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
        Chat
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>
    </syn-select>
  `},E={render:()=>t`
    <syn-select>
      <!-- Default -->
      <syn-option value="Option_1">Option 1</syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <!-- /Default -->

      <!-- Disabled -->
      <syn-option value="Option_4" disabled>Option 4 (Disabled)</syn-option>
      <!-- /Disabled -->

      <!-- Prefix and Suffix -->
      <syn-option value="Option-5">
        <syn-icon slot="prefix" name="email"></syn-icon>
        Email
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>

      <syn-option value="Option-6">
        <syn-icon slot="prefix" name="local_phone"></syn-icon>
        Phone
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>

      <syn-option value="Option-7">
        <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
        Chat
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>
      <!-- /Prefix and Suffix -->

    </syn-select>
  `},D=p({ScreenshotStory:E},{afterRender:g(`syn-select`,!1),heightPx:400}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('option', 'default')
      }
    }
  },
  render: args => html\`
    <syn-select label="Select one">
      \${generateTemplate({
    args
  })}
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
    </syn-select>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('option', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-select label="Select one" label="Select one">
      <syn-option value="option-1">Email</syn-option>
      <syn-option value="option-2" disabled>Phone</syn-option>
      <syn-option value="option-3">Chat</syn-option>

      <syn-option value="option-4" disabled>
        <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
        <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
        Other
      </syn-option>
      <!-- /Regression#1277 -->
    </syn-select>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('option', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-select label="Select one" open>
      <syn-option value="option-1">
        <syn-icon slot="prefix" name="email"></syn-icon>
        Email
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>

      <syn-option value="option-2">
        <syn-icon slot="prefix" name="local_phone"></syn-icon>
        Phone
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>

      <syn-option value="option-3">
        <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
        Chat
        <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
      </syn-option>
    </syn-select>
  \`
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStory
}, {
  afterRender: openSelect('syn-select', false),
  heightPx: 400
})`,...D.parameters?.docs?.source}}},O=[`Default`,`Disabled`,`PrefixAndSuffix`,`Screenshot`]}));k();export{C as Default,w as Disabled,T as PrefixAndSuffix,D as Screenshot,O as __namedExportsOrder,S as default,k as t};