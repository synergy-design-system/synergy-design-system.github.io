import"./option-DeFG7o_Z.js";import"./select-D3Rrq-yc.js";import"./icon-DLaBEzps.js";import{g as p,x as s}from"./iframe-GSRepqjd.js";import{o as a}from"./select-DM38o7bI.js";import{g as i,s as c,a as l,b as y,c as m}from"./component-sz2YSCF4.js";import"./property-ImbD-3qY.js";import"./class-map-QQ7HVnPG.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./directive-helpers-CvZEagFv.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-DXWA7L2q.js";import"./icon.component-B3J6d3UF.js";import"./animation-registry-l4L8bmT6.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./scroll-DgKSCJoS.js";import"./unsafe-html-C37otmSZ.js";import"./event-B0iVuGLD.js";import"./form-control.custom.styles-CXpzbCE1.js";import"./popup.component-BJEudzMA.js";import"./composed-offset-position.browser.min-DQsihIor.js";import"./tag.component-DV3xDemC.js";import"./icon-button.component-Dzxtd5Sk.js";import"./static-BkNWbPkN.js";import"./if-defined-CDNCanKK.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:u,argTypes:d}=c("syn-option"),{overrideArgs:f}=l("syn-option"),{generateTemplate:h}=m("syn-option"),W={args:f([{name:"default",type:"slot",value:"Option 1"},{name:"value",type:"attribute",value:"Option_1"}],u),argTypes:d,component:"syn-option",parameters:{design:p("5548-17028"),docs:{description:{component:i("option","default")},story:{height:"250px"}}},tags:["Form"],title:"Components/syn-option"},o={parameters:{docs:{description:{story:i("option","default")}}},render:r=>s`
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
})`,...t.parameters?.docs?.source}}};const X=["Default","Disabled","PrefixAndSuffix","Screenshot"];export{o as Default,e as Disabled,n as PrefixAndSuffix,t as Screenshot,X as __namedExportsOrder,W as default};
