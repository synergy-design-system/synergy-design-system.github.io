import"./option-_23jec56.js";import"./select-DQuhH94b.js";import"./icon-CCoMlvFD.js";import{g as p,x as s}from"./iframe-CTgV35OJ.js";import{o as a}from"./select-DPOTbWq0.js";import{g as i,s as c,a as l,b as y,c as m}from"./component-BDoUB8Bc.js";import"./class-map-CDiWxM4K.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-MiSOT8Er.js";import"./icon.component-C7G2s8mX.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./animation-registry-l4L8bmT6.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./form-control.custom.styles-Cs3oUzek.js";import"./popup.component-D7cfVEOD.js";import"./if-defined-CdYcxt7f.js";import"./tag.component-Cvrr7EGZ.js";import"./icon-button.component-CFB6mgVE.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-AUM8SZQl.js";const{args:u,argTypes:d}=c("syn-option"),{overrideArgs:f}=l("syn-option"),{generateTemplate:h}=m("syn-option"),N={args:f([{name:"default",type:"slot",value:"Option 1"},{name:"value",type:"attribute",value:"Option_1"}],u),argTypes:d,component:"syn-option",parameters:{design:p("5548-17028"),docs:{description:{component:i("option","default")},story:{height:"250px"}}},tags:["Form","SICK2018"],title:"Components/syn-option"},o={parameters:{docs:{description:{story:i("option","default")}}},render:r=>s`
    <syn-select label="Select one">
      ${h({args:r})}
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
    </syn-select>
  `},e={parameters:{docs:{description:{story:i("option","disabled")}}},render:()=>s`
    <syn-select label="Select one" label="Select one">
      <syn-option value="option-1">Email</syn-option>
      <syn-option value="option-2" disabled>Phone</syn-option>
      <syn-option value="option-3">Chat</syn-option>
    </syn-select>
  `},n={parameters:{docs:{description:{story:i("option","prefix-suffix")}}},render:()=>s`
    <syn-select label="Select one">
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
  `},_={render:()=>s`
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
  `},t=y({ScreenshotStory:_},{afterRender:a("syn-select",!1),heightPx:400});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    </syn-select>
  \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('option', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-select label="Select one">
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStory
}, {
  afterRender: openSelect('syn-select', false),
  heightPx: 400
})`,...t.parameters?.docs?.source}}};const Q=["Default","Disabled","PrefixAndSuffix","Screenshot"];export{o as Default,e as Disabled,n as PrefixAndSuffix,t as Screenshot,Q as __namedExportsOrder,N as default};
