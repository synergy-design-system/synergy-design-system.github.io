import"./optgroup-BGLcRcPY.js";import"./select-DYy4fjMp.js";import"./option-CARz4VuF.js";import"./icon-IS4gQd8m.js";import{C as r,c as s,d as a}from"./iframe-BF3kHbTn.js";import{o as c}from"./select-DVPcWPe4.js";import{g as i,a as l,s as y,b as u,c as m}from"./component-C4Zfhy8Z.js";import"./class-map-w4AcnhbO.js";import"./synergy-element-D2l-m579.js";import"./query-assigned-elements-CIlqV-be.js";import"./query-D0jTsbLw.js";import"./slot-9EVoRGQc.js";import"./divider.component-Dx36KTM2.js";import"./watch-CEsCE2EF.js";import"./animation-registry-DyRYqZdt.js";import"./form-d9hCJUdr.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./icon.component-QU43wL0d.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./form-control.styles-DFi38fbk.js";import"./popup.component-B6WYlp6Y.js";import"./if-defined-DIaF50Gh.js";import"./tag.component-cvdyIpaZ.js";import"./icon-button.component-CWTS_llf.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-ZdRmyf7z.js";const{args:f,argTypes:d}=y("syn-optgroup"),{overrideArgs:g}=m("syn-optgroup"),{generateTemplate:x}=u("syn-optgroup"),V={args:g([{name:"default",type:"slot",value:`
        <syn-option value="1">Option 1</syn-option>
        <syn-option value="2">Option 2</syn-option>
        <syn-option value="3">Option 3</syn-option>
      `},{name:"label",type:"attribute",value:"Section 1"}],f),argTypes:d,component:"syn-optgroup",parameters:{chromatic:{modes:r},design:a("5619-21837"),docs:{description:{component:i("optiongroup","default")},story:{height:"400px"}}},tags:["Form"],title:"Components/syn-optgroup"},o={parameters:{controls:{disable:!1},docs:{description:{story:i("optiongroup","default")}}},render:p=>s`
    <syn-select>
      ${x({args:p})}
      <syn-optgroup label="Section 2">
        <syn-option value="4">Option 4</syn-option>
      </syn-optgroup>
    </syn-select>
  `},n={parameters:{docs:{description:{story:i("optiongroup","disabled")}}},render:()=>s`
    <syn-select>
      <syn-optgroup disabled>
        <span slot="label">Section 1</span>
        <syn-option value="1">Option</syn-option>
        <syn-option value="2">Option</syn-option>
        <syn-option value="3">Option</syn-option>
      </syn-optgroup>
    </syn-select>
  `},e={parameters:{docs:{description:{story:i("optiongroup","prefix-suffix")}}},render:()=>s`
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
  `},h={render:()=>s`
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
  `},t=l({ScreenshotStory:h},{afterRender:c("syn-select"),heightPx:400});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  render: args => html\`
    <syn-select>
      \${generateTemplate({
    args
  })}
      <syn-optgroup label="Section 2">
        <syn-option value="4">Option 4</syn-option>
      </syn-optgroup>
    </syn-select>
  \`
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStory
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...t.parameters?.docs?.source}}};const X=["Default","Disabled","PrefixAndSuffix","Screenshot"];export{o as Default,n as Disabled,e as PrefixAndSuffix,t as Screenshot,X as __namedExportsOrder,V as default};
