import"./optgroup-Culu5ppp.js";import"./select-DzTS1rmS.js";import"./option-HRJ5MQ4C.js";import"./icon-ZpBo1gm6.js";import{g as r,C as a,x as s}from"./iframe-DKzh7HHt.js";import{o as c}from"./select-BK9MSPYk.js";import{g as i,s as l,a as y,b as u,c as m}from"./component-BVwEOs8-.js";import"./class-map-Bipwc1iT.js";import"./synergy-element-D4Cp3n7p.js";import"./query-assigned-elements-CblsR2sJ.js";import"./query-D0jTsbLw.js";import"./slot-9EVoRGQc.js";import"./divider.component-BcdySDJf.js";import"./watch-CEsCE2EF.js";import"./animation-registry-l4L8bmT6.js";import"./form-d9hCJUdr.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./icon.component-CNp8HpxC.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./form-control.custom.styles-MMjKA1AU.js";import"./popup.component-eIInEwux.js";import"./if-defined-DWhkacz2.js";import"./tag.component-hk63p978.js";import"./icon-button.component-XkdzRgjk.js";import"./decorator-DeP7ND_N.js";import"./functions-DkH8wE0_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQ0aEGxp.js";import"./_docs-DCc6stEZ.js";const{args:f,argTypes:d}=l("syn-optgroup"),{overrideArgs:g}=y("syn-optgroup"),{generateTemplate:x}=m("syn-optgroup"),V={args:g([{name:"default",type:"slot",value:`
        <syn-option value="1">Option 1</syn-option>
        <syn-option value="2">Option 2</syn-option>
        <syn-option value="3">Option 3</syn-option>
      `},{name:"label",type:"attribute",value:"Section 1"}],f),argTypes:d,component:"syn-optgroup",parameters:{chromatic:{modes:a},design:r("5619-21837"),docs:{description:{component:i("optiongroup","default")},story:{height:"400px"}}},tags:["Form"],title:"Components/syn-optgroup"},o={parameters:{controls:{disable:!1},docs:{description:{story:i("optiongroup","default")}}},render:p=>s`
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
  `},t=u({ScreenshotStory:h},{afterRender:c("syn-select"),heightPx:400});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
