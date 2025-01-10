import{s as r,a,g as c,b as t,c as l,d as y}from"./component-CGWqN7cP.js";import{k as i}from"./directive-helpers-CDT6qhDs.js";import{o as u}from"./select-Cdb3Xvib.js";import"./if-defined-BaykDp1D.js";import"./ref-lLHsj5FH.js";import"./chunk-L4EGOTBX-C9C4DwME.js";import"./entry-preview-D9TbQDUR.js";import"./index-DrFu-skq.js";import"./index-CJqkmo2F.js";import"./library-BZPO0bHa.js";import"./icon.component-C9BK_WHL.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-Bh07MqHG.js";const{args:m,argTypes:f}=r("syn-optgroup"),{overrideArgs:d}=y("syn-optgroup"),{generateTemplate:g}=a("syn-optgroup"),R={args:d([{name:"default",type:"slot",value:`
        <syn-option value="1">Option 1</syn-option>
        <syn-option value="2">Option 2</syn-option>
        <syn-option value="3">Option 3</syn-option>
      `},{name:"label",type:"attribute",value:"Section 1"}],m),argTypes:f,component:"syn-optgroup",parameters:{design:c("5619-21837"),docs:{description:{component:t("optiongroup","default")},story:{height:"400px"}}},title:"Components/syn-optgroup"},o={parameters:{controls:{disable:!1},docs:{description:{story:t("optiongroup","default")}}},render:p=>i`
    <syn-select>
      ${g({args:p})}
      <syn-optgroup label="Section 2">
        <syn-option value="4">Option 4</syn-option>
      </syn-optgroup>
    </syn-select>
  `},n={parameters:{docs:{description:{story:t("optiongroup","disabled")}}},render:()=>i`
    <syn-select>
      <syn-optgroup disabled>
        <span slot="label">Section 1</span>
        <syn-option value="1">Option</syn-option>
        <syn-option value="2">Option</syn-option>
        <syn-option value="3">Option</syn-option>
      </syn-optgroup>
    </syn-select>
  `},e={parameters:{docs:{description:{story:t("optiongroup","prefix-suffix")}}},render:()=>i`
    <syn-select>
      <syn-optgroup label="Contact Support">
        <syn-icon name="contact_support" slot="prefix"></syn-icon>
        <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
        
        <syn-option value="1">
          <syn-icon name="mail" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
          E-Mail
        </syn-option>

        <syn-option value="2">
          <syn-icon name="phone" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
          Phone
        </syn-option>
        
        <syn-option value="3">
          <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
          Chat
        </syn-option>
      </syn-optgroup>
    </syn-select>
  `},x={render:()=>i`
    <syn-select>
      <!-- Default -->
      <syn-optgroup label="Section 1">
        <syn-option value="1">Option 1</syn-option>
        <syn-option value="2">Option 2</syn-option>
        <syn-option value="3">Option 3</syn-option>
      </syn-optgroup>
      <syn-optgroup label="Section 2">
        <syn-option value="4">Option 4</syn-option>
      </syn-optgroup>
      <!-- /Default -->

      <!-- Disabled -->
      <syn-optgroup disabled>
        <span slot="label">Section 3 (Disabled)</span>
        <syn-option value="1">Option</syn-option>
        <syn-option value="2">Option</syn-option>
        <syn-option value="3">Option</syn-option>
      </syn-optgroup>
      <!-- /Disabled -->
      
      <!-- prefix and suffix -->
      <syn-optgroup label="Section 4 (With Prefix and Suffix Icons)">
        <syn-icon name="contact_support" slot="prefix"></syn-icon>
        <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
        
        <syn-option value="1">
          <syn-icon name="mail" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
          E-Mail
        </syn-option>

        <syn-option value="2">
          <syn-icon name="phone" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
          Phone
        </syn-option>
        
        <syn-option value="3">
          <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
          Chat
        </syn-option>
      </syn-optgroup>
      <!-- /prefix and suffix -->
    </syn-select>
  `},s=l({ScreenshotStory:x},{afterRender:u("syn-select"),heightPx:400});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('optiongroup', 'default')
      }
    }
  },
  render: (args: unknown) => html\`
    <syn-select>
      \${generateTemplate({
    args
  })}
      <syn-optgroup label="Section 2">
        <syn-option value="4">Option 4</syn-option>
      </syn-optgroup>
    </syn-select>
  \`
} as Story`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('optiongroup', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-select>
      <syn-optgroup disabled>
        <span slot="label">Section 1</span>
        <syn-option value="1">Option</syn-option>
        <syn-option value="2">Option</syn-option>
        <syn-option value="3">Option</syn-option>
      </syn-optgroup>
    </syn-select>
  \`
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('optiongroup', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-select>
      <syn-optgroup label="Contact Support">
        <syn-icon name="contact_support" slot="prefix"></syn-icon>
        <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
        
        <syn-option value="1">
          <syn-icon name="mail" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
          E-Mail
        </syn-option>

        <syn-option value="2">
          <syn-icon name="phone" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
          Phone
        </syn-option>
        
        <syn-option value="3">
          <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
          <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>  
          Chat
        </syn-option>
      </syn-optgroup>
    </syn-select>
  \`
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStory
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...s.parameters?.docs?.source}}};const $=["Default","Disabled","PrefixAndSuffix","Screenshot"];export{o as Default,n as Disabled,e as PrefixAndSuffix,s as Screenshot,$ as __namedExportsOrder,R as default};
