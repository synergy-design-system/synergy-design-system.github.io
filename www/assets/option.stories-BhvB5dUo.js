import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-DKowTjrk.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./icon-CBsrAmoE.js";import{t as s}from"./select-BMIwhKWk.js";import{t as c}from"./option-Dj6RDehR.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-yQeR3V9a.js";import{n as h,t as g}from"./select-3E3ObyZR.js";var _=t({Default:()=>C,Disabled:()=>w,PrefixAndSuffix:()=>T,Screenshot:()=>D,__namedExportsOrder:()=>O,default:()=>S}),v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{c(),s(),o(),a(),g(),p(),r(),{args:v,argTypes:y}=u(`syn-option`),{overrideArgs:b}=l(`syn-option`),{generateTemplate:x}=f(`syn-option`),S={args:b([{name:`default`,type:`slot`,value:`Option 1`},{name:`value`,type:`attribute`,value:`Option_1`}],v),argTypes:y,component:`syn-option`,parameters:{docs:{chromatic:{modes:n},description:{component:d(`option`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-option`},C={parameters:{docs:{description:{story:d(`option`,`default`)}}},render:e=>i`
    <syn-select label="Select one">
      ${x({args:e})}
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
    </syn-select>
  `},w={parameters:{docs:{description:{story:d(`option`,`disabled`)}}},render:()=>i`
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
  `},T={parameters:{docs:{description:{story:d(`option`,`prefix-suffix`)}}},render:()=>i`
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
  `},E={render:()=>i`
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
  `},D=m({ScreenshotStory:E},{afterRender:h(`syn-select`,!1),heightPx:400}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
})`,...D.parameters?.docs?.source}}},O=[`Default`,`Disabled`,`PrefixAndSuffix`,`Screenshot`]})))()}export{k as n,_ as r,C as t};