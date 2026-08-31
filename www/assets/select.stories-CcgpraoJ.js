import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-BcPmD-1Q.js";import{t as ee}from"./icon-CdFlfCYb.js";import{t as s}from"./select-e-UmhgQm.js";import{t as c}from"./option-DiBtB6VY.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-Bm6Rp1CP.js";import{t as h}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as g,t as _}from"./PaddingDecorator-C4mX2Z0z.js";import{n as v,t as y}from"./decorators-CGxFtcp0.js";import{t as b}from"./optgroup-BJY1WbOs.js";import{n as x,t as S}from"./select-3E3ObyZR.js";var C=t({Clearable:()=>L,CustomTags:()=>q,Default:()=>N,Disabled:()=>z,Focus:()=>R,GroupingOptions:()=>U,HelpText:()=>F,Invalid:()=>G,Labels:()=>P,Multiple:()=>V,Placeholder:()=>I,PrefixSuffixIcons:()=>K,Readonly:()=>B,ScreenshotDefault:()=>X,ScreenshotMultiple:()=>Z,SettingInitialValues:()=>H,Sizes:()=>W,__namedExportsOrder:()=>Q,default:()=>M}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{s(),c(),b(),ee(),o(),a(),S(),p(),y(),_(),r(),{userEvent:w}=__STORYBOOK_MODULE_TEST__,{args:O,argTypes:k}=u(`syn-select`),{overrideArgs:A}=l(`syn-select`),{generateTemplate:j}=f(`syn-select`),M={args:O,argTypes:k,component:`syn-select`,parameters:{chromatic:{modes:n},docs:{description:{component:d(`select`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-select`},N={parameters:{args:A({name:`default`,type:`slot`,value:`
        <syn-option value="Option_1">Option 1</syn-option>
        <syn-option value="Option_2">Option 2</syn-option>
        <syn-option value="Option_3">Option 3</syn-option>
      `},O),controls:{disable:!1},docs:{description:{story:d(`select`,`default`)}}},render:e=>j({args:e})},P={parameters:{docs:{description:{story:d(`select`,`labels`)}}},render:()=>i`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},F={parameters:{docs:{description:{story:d(`select`,`help-text`)}}},render:()=>i`
    <syn-select label="Experience" help-text="Please tell us your skill level.">
      <syn-option value="1">Novice</syn-option>
      <syn-option value="2">Intermediate</syn-option>
      <syn-option value="3">Advanced</syn-option>
    </syn-select>
  `},I={parameters:{docs:{description:{story:d(`select`,`placeholder`)}}},render:()=>i`
    <syn-select placeholder="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},L={parameters:{docs:{description:{story:d(`select`,`clearable`)}}},render:()=>i`
    <syn-select clearable value="option-1">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},R={decorators:[g()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`select`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-select`)?.focus()},render:()=>i`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},z={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`select`,`disabled`)}}},render:()=>i`
    <syn-select placeholder="Disabled" disabled>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},B={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`select`,`readonly`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-select placeholder="Readonly" value="option-1" readonly>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-select>
      <syn-select max-options-visible="2" multiple placeholder="Readonly" value="option-1 option-2 option-3" readonly>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-select>
    </div>
  `},V={parameters:{docs:{description:{story:d(`select`,`multiple`)}}},render:()=>i`
    <syn-select label="Select a Few" value="Option_1 Option_2 Option_3" multiple clearable>
      <syn-option value="Option_1">Option 1</syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-option value="Option_4">Option 4</syn-option>
      <syn-option value="Option_5">Option 5</syn-option>
      <syn-option value="Option_6">Option 6</syn-option>
    </syn-select>
  `},H={parameters:{docs:{description:{story:d(`select`,`initialvalue`)}}},render:()=>i(T||=h([`
    <syn-select value="option-1 option-2 option-3 option-4" multiple clearable class="custom-tag">
      <syn-option value="option-1">Option</syn-option>
      <syn-option value="option-2">Option 1</syn-option>
      <syn-option value="option-3">Option 2</syn-option>
      <syn-option value="option-4">Option 3</syn-option>
    </syn-select>
    <script type="module">
      const select = document.querySelector('.custom-tag');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \`
          <syn-tag removable>
          \${option.getTextLabel()}
          </syn-tag>
          \`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \`
          <syn-tag removable>
            <syn-icon name="\${name}"></syn-icon>
            \${option.getTextLabel()}
          </syn-tag>
        \`;
      };
    <\/script>
  `],[`
    <syn-select value="option-1 option-2 option-3 option-4" multiple clearable class="custom-tag">
      <syn-option value="option-1">Option</syn-option>
      <syn-option value="option-2">Option 1</syn-option>
      <syn-option value="option-3">Option 2</syn-option>
      <syn-option value="option-4">Option 3</syn-option>
    </syn-select>
    <script type="module">
      const select = document.querySelector('.custom-tag');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \\\`
          <syn-tag removable>
          \\\${option.getTextLabel()}
          </syn-tag>
          \\\`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \\\`
          <syn-tag removable>
            <syn-icon name="\\\${name}"></syn-icon>
            \\\${option.getTextLabel()}
          </syn-tag>
        \\\`;
      };
    <\/script>
  `]))},U={parameters:{docs:{description:{story:d(`select`,`group`)}}},render:()=>i`
    <syn-select placeholder="This is a value">
      <syn-optgroup label="Section 1">
        <syn-option value="1">Option</syn-option>
        <syn-option value="2">Option</syn-option>
      </syn-optgroup>
      <syn-optgroup label="Section 2">
        <syn-option value="3">Option</syn-option>
        <syn-option value="4">Option</syn-option>
      </syn-optgroup>
    </syn-select>
  `},W={parameters:{docs:{description:{story:d(`select`,`size`)}}},render:()=>i`
    <syn-select placeholder="Small" size="small">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>

    <br />

    <syn-select placeholder="Medium" size="medium">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>

    <br />

    <syn-select placeholder="Large" size="large">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},G={decorators:[v],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`select`,`invalid`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=t.querySelector(`syn-select`),r=t.querySelector(`syn-button`);r&&n&&(await w.click(r),r.click(),document.activeElement?.blur())},render:()=>i`
    <syn-select label="Select one" required>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},K={parameters:{docs:{description:{story:d(`select`,`prefix-suffix`)}}},render:()=>i`
    <syn-select placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
    <br />
    <syn-select placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
    <br />
    <syn-select placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
  `},q={parameters:{docs:{description:{story:d(`select`,`gettag`)}}},render:()=>i(E||=h([`
    <syn-select
      clearable
      id="custom-tags-story"
      multiple
      placeholder="Select one"
      value="phone email"
    >
      <syn-option value="email">
        <syn-icon slot="prefix" name="mail_outline"></syn-icon>
        Email
      </syn-option>
      <syn-option value="phone">
        <syn-icon slot="prefix" name="phone"></syn-icon>
        Phone
      </syn-option>
      <syn-option value="chat">
        <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
        Chat
      </syn-option>
    </syn-select>

    <script type="module">
      const select = document.querySelector('#custom-tags-story');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \`
          <syn-tag removable>
          \${option.getTextLabel()}
          </syn-tag>
          \`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \`
          <syn-tag removable>
            <syn-icon name="\${name}"></syn-icon>
            \${option.getTextLabel()}
          </syn-tag>
        \`;
      };
    <\/script>
  `],[`
    <syn-select
      clearable
      id="custom-tags-story"
      multiple
      placeholder="Select one"
      value="phone email"
    >
      <syn-option value="email">
        <syn-icon slot="prefix" name="mail_outline"></syn-icon>
        Email
      </syn-option>
      <syn-option value="phone">
        <syn-icon slot="prefix" name="phone"></syn-icon>
        Phone
      </syn-option>
      <syn-option value="chat">
        <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
        Chat
      </syn-option>
    </syn-select>

    <script type="module">
      const select = document.querySelector('#custom-tags-story');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \\\`
          <syn-tag removable>
          \\\${option.getTextLabel()}
          </syn-tag>
          \\\`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \\\`
          <syn-tag removable>
            <syn-icon name="\\\${name}"></syn-icon>
            \\\${option.getTextLabel()}
          </syn-tag>
        \\\`;
      };
    <\/script>
  `]))},J={render:()=>i`
    <syn-select
      clearable
      help-text="Help-Text"
      label="Label"
      placeholder="Placeholder"
    >
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="Option_1">Option 1</syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
  `},Y={render:()=>i(D||=h([`
    <syn-select
      class="custom-tag"
      clearable
      help-text="Help-Text"
      label="Label"
      multiple
      placeholder="Placeholder"
      value="Option_1 Option_2 Option_3 Option_7"
    >
      <syn-option value="Option_1">
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
        Option 1
      </syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-option value="Option_4">Option 4</syn-option>
      <syn-option value="Option_5">Option 5</syn-option>
      <syn-option value="Option_6">Option 6</syn-option>
      
      <syn-optgroup label="Section 1">
        <syn-option value="Option_7">Option 7</syn-option>
        <syn-option value="Option_8">Option 8</syn-option>
      </syn-optgroup>
      <syn-optgroup label="Section 2">
        <syn-option value="Option_9">Option 9</syn-option>
      </syn-optgroup>

    </syn-select>
    <script type="module">
      const select = document.querySelector('.custom-tag');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \`
          <syn-tag removable>
          \${option.getTextLabel()}
          </syn-tag>
          \`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \`
          <syn-tag removable>
            <syn-icon name="\${name}"></syn-icon>
            \${option.getTextLabel()}
          </syn-tag>
        \`;
      };
    <\/script>
  `],[`
    <syn-select
      class="custom-tag"
      clearable
      help-text="Help-Text"
      label="Label"
      multiple
      placeholder="Placeholder"
      value="Option_1 Option_2 Option_3 Option_7"
    >
      <syn-option value="Option_1">
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
        Option 1
      </syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-option value="Option_4">Option 4</syn-option>
      <syn-option value="Option_5">Option 5</syn-option>
      <syn-option value="Option_6">Option 6</syn-option>
      
      <syn-optgroup label="Section 1">
        <syn-option value="Option_7">Option 7</syn-option>
        <syn-option value="Option_8">Option 8</syn-option>
      </syn-optgroup>
      <syn-optgroup label="Section 2">
        <syn-option value="Option_9">Option 9</syn-option>
      </syn-optgroup>

    </syn-select>
    <script type="module">
      const select = document.querySelector('.custom-tag');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \\\`
          <syn-tag removable>
          \\\${option.getTextLabel()}
          </syn-tag>
          \\\`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \\\`
          <syn-tag removable>
            <syn-icon name="\\\${name}"></syn-icon>
            \\\${option.getTextLabel()}
          </syn-tag>
        \\\`;
      };
    <\/script>
  `]))},X=m({ScreenshotStoryDefault:J},{afterRender:x(`syn-select`,!1),heightPx:400}),Z=m({ScreenshotStoryMultiple:Y},{afterRender:x(`syn-select`),heightPx:400}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    args: overrideArgs({
      name: 'default',
      type: 'slot',
      value: \`
        <syn-option value="Option_1">Option 1</syn-option>
        <syn-option value="Option_2">Option 2</syn-option>
        <syn-option value="Option_3">Option 3</syn-option>
      \`
    }, args),
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('select', 'default')
      }
    }
  },
  render: renderArgs => generateTemplate({
    args: renderArgs
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-select label="Experience" help-text="Please tell us your skill level.">
      <syn-option value="1">Novice</syn-option>
      <syn-option value="2">Intermediate</syn-option>
      <syn-option value="3">Advanced</syn-option>
    </syn-select>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'placeholder')
      }
    }
  },
  render: () => html\`
    <syn-select placeholder="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'clearable')
      }
    }
  },
  render: () => html\`
    <syn-select clearable value="option-1">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('select', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const elm = canvasElement.querySelector<SynSelect>('syn-select');
    elm?.focus();
  },
  render: () => html\`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('select', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-select placeholder="Disabled" disabled>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('select', 'readonly')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-select placeholder="Readonly" value="option-1" readonly>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-select>
      <syn-select max-options-visible="2" multiple placeholder="Readonly" value="option-1 option-2 option-3" readonly>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-select>
    </div>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'multiple')
      }
    }
  },
  render: () => html\`
    <syn-select label="Select a Few" value="Option_1 Option_2 Option_3" multiple clearable>
      <syn-option value="Option_1">Option 1</syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-option value="Option_4">Option 4</syn-option>
      <syn-option value="Option_5">Option 5</syn-option>
      <syn-option value="Option_6">Option 6</syn-option>
    </syn-select>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'initialvalue')
      }
    }
  },
  render: () => html\`
    <syn-select value="option-1 option-2 option-3 option-4" multiple clearable class="custom-tag">
      <syn-option value="option-1">Option</syn-option>
      <syn-option value="option-2">Option 1</syn-option>
      <syn-option value="option-3">Option 2</syn-option>
      <syn-option value="option-4">Option 3</syn-option>
    </syn-select>
    <script type="module">
      const select = document.querySelector('.custom-tag');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \\\`
          <syn-tag removable>
          \\\${option.getTextLabel()}
          </syn-tag>
          \\\`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \\\`
          <syn-tag removable>
            <syn-icon name="\\\${name}"></syn-icon>
            \\\${option.getTextLabel()}
          </syn-tag>
        \\\`;
      };
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'group')
      }
    }
  },
  render: () => html\`
    <syn-select placeholder="This is a value">
      <syn-optgroup label="Section 1">
        <syn-option value="1">Option</syn-option>
        <syn-option value="2">Option</syn-option>
      </syn-optgroup>
      <syn-optgroup label="Section 2">
        <syn-option value="3">Option</syn-option>
        <syn-option value="4">Option</syn-option>
      </syn-optgroup>
    </syn-select>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'size')
      }
    }
  },
  render: () => html\`
    <syn-select placeholder="Small" size="small">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>

    <br />

    <syn-select placeholder="Medium" size="medium">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>

    <br />

    <syn-select placeholder="Large" size="large">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('select', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector('form')!;
    const select = form.querySelector('syn-select');
    const button = form.querySelector('syn-button');
    if (button && select) {
      // make sure to always fire both events:
      // 1. userEvent.click is needed for storybooks play function to register
      // 2. button.click is needed to really click the button
      // userEvent.click works on native elements only
      await userEvent.click(button);
      button.click();
      (document.activeElement as HTMLElement)?.blur();
    }
  },
  render: () => html\`
    <syn-select label="Select one" required>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
    <syn-select placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
    <br />
    <syn-select placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
    <br />
    <syn-select placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-select>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'gettag')
      }
    }
  },
  render: () => html\`
    <syn-select
      clearable
      id="custom-tags-story"
      multiple
      placeholder="Select one"
      value="phone email"
    >
      <syn-option value="email">
        <syn-icon slot="prefix" name="mail_outline"></syn-icon>
        Email
      </syn-option>
      <syn-option value="phone">
        <syn-icon slot="prefix" name="phone"></syn-icon>
        Phone
      </syn-option>
      <syn-option value="chat">
        <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
        Chat
      </syn-option>
    </syn-select>

    <script type="module">
      const select = document.querySelector('#custom-tags-story');

      select.getTag = (option, index) => {
        // Use the same icon used in the <syn-option>
        const optionElement = option.querySelector('syn-icon[slot="prefix"]');
        
        if (!optionElement) {
          return \\\`
          <syn-tag removable>
          \\\${option.getTextLabel()}
          </syn-tag>
          \\\`;
        }
        
        const { name } = optionElement;

        // You can return a string, a Lit Template, or an HTMLElement here
        return \\\`
          <syn-tag removable>
            <syn-icon name="\\\${name}"></syn-icon>
            \\\${option.getTextLabel()}
          </syn-tag>
        \\\`;
      };
    <\/script>
  \`
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStoryDefault
}, {
  afterRender: openSelect('syn-select', false),
  heightPx: 400
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStoryMultiple
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Labels`,`HelpText`,`Placeholder`,`Clearable`,`Focus`,`Disabled`,`Readonly`,`Multiple`,`SettingInitialValues`,`GroupingOptions`,`Sizes`,`Invalid`,`PrefixSuffixIcons`,`CustomTags`,`ScreenshotDefault`,`ScreenshotMultiple`]})))()}export{$ as n,C as r,N as t};