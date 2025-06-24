import"./optgroup-Cm4CbUeE.js";import"./select-ABoA9YRH.js";import"./option-D1WRdS0i.js";import"./icon-Db2mCSbn.js";import{g as r,x as s}from"./iframe-BlM2pOhP.js";import{o as a}from"./select-w8Rsmofs.js";import{g as i,s as c,a as l,b as y,c as u}from"./component-D-soQZ9J.js";import"./class-map-DvND6SRC.js";import"./property-Bk5rnH1M.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./query-DAIS6qJ0.js";import"./component.styles-rDOucGNN.js";import"./slot-9EVoRGQc.js";import"./divider.component-BxFknWnC.js";import"./watch-CEsCE2EF.js";import"./animation-registry-l4L8bmT6.js";import"./form-d9hCJUdr.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./state-CE03eurR.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./form-control.custom.styles-2sCER5i4.js";import"./icon.component-kNBGlr9V.js";import"./popup.component-C3ovyAsS.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./tag.component-DPBNm1_l.js";import"./icon-button.component-CDoGAf24.js";import"./if-defined-KMfhVUCN.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:m,argTypes:f}=c("syn-optgroup"),{overrideArgs:d}=l("syn-optgroup"),{generateTemplate:g}=u("syn-optgroup"),X={args:d([{name:"default",type:"slot",value:`
        <syn-option value="1">Option 1</syn-option>
        <syn-option value="2">Option 2</syn-option>
        <syn-option value="3">Option 3</syn-option>
      `},{name:"label",type:"attribute",value:"Section 1"}],m),argTypes:f,component:"syn-optgroup",parameters:{design:r("5619-21837"),docs:{description:{component:i("optiongroup","default")},story:{height:"400px"}}},tags:["Form"],title:"Components/syn-optgroup"},o={parameters:{controls:{disable:!1},docs:{description:{story:i("optiongroup","default")}}},render:p=>s`
    <syn-select>
      ${g({args:p})}
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
  `},x={render:()=>s`
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
  `},t=y({ScreenshotStory:x},{afterRender:a("syn-select"),heightPx:400});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
})`,...t.parameters?.docs?.source}}};const Y=["Default","Disabled","PrefixAndSuffix","Screenshot"];export{o as Default,n as Disabled,e as PrefixAndSuffix,t as Screenshot,Y as __namedExportsOrder,X as default};
