import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as ee,t as te}from"./modes--YaBmfvT.js";import{t as ne}from"./button-D70oL_Q_.js";import{t as i}from"./icon-Df7PRRMU.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./component-iHqn-0Yj.js";import{t as d}from"./taggedTemplateLiteral-CWT6dLlS.js";import{t as f}from"./select-CFcayJ2v.js";import{t as p}from"./option-CJ9e6KKi.js";import{n as m,t as h}from"./PaddingDecorator-CGbVgbNi.js";import{n as g,t as re}from"./decorators-DLiJz8Ah.js";import{t as ie}from"./spinner-8ZVn3pr_.js";import{t as ae}from"./optgroup-D85gxzLX.js";import{n as _,t as v}from"./select-DWIrOU9j.js";var y=t({Clearable:()=>P,CustomTags:()=>W,Default:()=>A,Disabled:()=>I,EndlessScrolling:()=>G,Focus:()=>F,GroupingOptions:()=>B,HelpText:()=>M,Invalid:()=>H,Labels:()=>j,Multiple:()=>R,Placeholder:()=>N,PrefixSuffixIcons:()=>U,Readonly:()=>L,ScreenshotDefault:()=>Y,ScreenshotGroupingOptionsWithIcons:()=>Z,ScreenshotMultiple:()=>X,SettingInitialValues:()=>z,Sizes:()=>V,__namedExportsOrder:()=>Q,default:()=>k}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{f(),p(),ae(),i(),ne(),ie(),r(),v(),l(),re(),h(),ee(),{userEvent:b}=__STORYBOOK_MODULE_TEST__,{args:T,argTypes:E}=o(`syn-select`),{overrideArgs:D}=a(`syn-select`),{generateTemplate:O}=c(`syn-select`),k={args:T,argTypes:E,component:`syn-select`,parameters:{chromatic:{modes:te},docs:{description:{component:s(`select`,`default`)},story:{height:`250px`}}},tags:[`Form`],title:`Components/syn-select`},A={parameters:{args:D({name:`default`,type:`slot`,value:`
        <syn-option value="Option_1">Option 1</syn-option>
        <syn-option value="Option_2">Option 2</syn-option>
        <syn-option value="Option_3">Option 3</syn-option>
      `},T),controls:{disable:!1},docs:{description:{story:s(`select`,`default`)}}},render:e=>O({args:e})},j={parameters:{docs:{description:{story:s(`select`,`labels`)}}},render:()=>n`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},M={parameters:{docs:{description:{story:s(`select`,`help-text`)}}},render:()=>n`
    <syn-select label="Experience" help-text="Please tell us your skill level.">
      <syn-option value="1">Novice</syn-option>
      <syn-option value="2">Intermediate</syn-option>
      <syn-option value="3">Advanced</syn-option>
    </syn-select>
  `},N={parameters:{docs:{description:{story:s(`select`,`placeholder`)}}},render:()=>n`
    <syn-select placeholder="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},P={parameters:{docs:{description:{story:s(`select`,`clearable`)}}},render:()=>n`
    <syn-select clearable value="option-1">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},F={decorators:[m()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s(`select`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-select`)?.focus()},render:()=>n`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},I={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s(`select`,`disabled`)}}},render:()=>n`
    <syn-select placeholder="Disabled" disabled>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},L={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s(`select`,`readonly`)}}},render:()=>n`
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
  `},R={parameters:{docs:{description:{story:s(`select`,`multiple`)}}},render:()=>n`
    <syn-select label="Select a Few" value="Option_1 Option_2 Option_3" multiple clearable>
      <syn-option value="Option_1">Option 1</syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-option value="Option_4">Option 4</syn-option>
      <syn-option value="Option_5">Option 5</syn-option>
      <syn-option value="Option_6">Option 6</syn-option>
    </syn-select>
  `},z={parameters:{docs:{description:{story:s(`select`,`initialvalue`)}}},render:()=>n(x||=d([`
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
  `]))},B={parameters:{docs:{description:{story:s(`select`,`group`)}}},render:()=>n`
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
  `},V={parameters:{docs:{description:{story:s(`select`,`size`)}}},render:()=>n`
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
  `},H={decorators:[g],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:s(`select`,`invalid`)}}},play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=t.querySelector(`syn-select`),r=t.querySelector(`syn-button`);r&&n&&(await b.click(r),r.click(),document.activeElement?.blur())},render:()=>n`
    <syn-select label="Select one" required>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},U={parameters:{docs:{description:{story:s(`select`,`prefix-suffix`)}}},render:()=>n`
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
  `},W={parameters:{docs:{description:{story:s(`select`,`gettag`)}}},render:()=>n(S||=d([`
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
  `]))},G={parameters:{docs:{description:{story:s(`select`,`endless-scrolling`)},story:{inline:!1}}},render:()=>n(C||=d([`
    <syn-select label="Option" class="endless-scrolling-select">
      <syn-spinner slot="prefix" style="display: none;"></syn-spinner>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>

    <script type="module">
      const selects = document.querySelectorAll('.endless-scrolling-select');
      selects.forEach((select) => {
        const loadingIndicator = select.querySelector('syn-spinner');
        let nextOption = 4;
        const maxOptions = 40;
        const pageSize = 10;

        // Replace the delay and generated data with your API request. Return each page as
        // { value, label } items, using whatever page or cursor parameter your API expects.
        const fetchNextPage = async (startIndex) => {
          await new Promise(resolve => setTimeout(resolve, 600));
          const endIndex = Math.min(startIndex + pageSize, maxOptions + 1);

          return Array.from({ length: endIndex - startIndex }, (_, offset) => {
            const index = startIndex + offset;
            return {
              label: 'Option ' + index,
              value: 'option-' + index,
            };
          });
        };

        // This handler runs for each syn-end-reached event. Adapt the end-of-data check and
        // request parameters to your API, then map its results to options and append the page.
        const loadNextPage = async () => {
          if (nextOption > maxOptions) {
            return;
          }

          loadingIndicator.style.display = 'inline-block';
          const options = await fetchNextPage(nextOption);
          const fragment = document.createDocumentFragment();

          options.forEach(({ value, label }) => {
            const option = document.createElement('syn-option');
            option.value = value;
            option.textContent = label;
            fragment.appendChild(option);
          });

          select.appendChild(fragment);
          nextOption += options.length;
          loadingIndicator.style.display = 'none';
        };

        // The select re-arms the sentinel after the new options are added.
        select.addEventListener('syn-end-reached', loadNextPage);
      });
    <\/script>
  `]))},K={render:()=>n`
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
  `},q={render:()=>n(w||=d([`
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
  `]))},J={render:()=>n`
    <syn-select placeholder="Small" size="small">
      <syn-optgroup label="Section 1">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        <syn-icon name="wallpaper" slot="suffix"></syn-icon>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
      </syn-optgroup>
      <syn-optgroup label="Section 2">
        <syn-option value="option-3">Option 3</syn-option>
        <syn-option value="option-4">Option 4</syn-option>
      </syn-optgroup>
    </syn-select>
  `},Y=u({ScreenshotStoryDefault:K},{afterRender:_(`syn-select`,!1),heightPx:400}),X=u({ScreenshotStoryMultiple:q},{afterRender:_(`syn-select`),heightPx:400}),Z=u({GroupingOptionsWithIcons:J},{afterRender:_(`syn-select`),heightPx:400}),Q=[`Default`,`Labels`,`HelpText`,`Placeholder`,`Clearable`,`Focus`,`Disabled`,`Readonly`,`Multiple`,`SettingInitialValues`,`GroupingOptions`,`Sizes`,`Invalid`,`PrefixSuffixIcons`,`CustomTags`,`EndlessScrolling`,`ScreenshotDefault`,`ScreenshotMultiple`,`ScreenshotGroupingOptionsWithIcons`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('select', 'endless-scrolling')
      },
      story: {
        inline: false
      }
    }
  },
  render: () => html\`
    <syn-select label="Option" class="endless-scrolling-select">
      <syn-spinner slot="prefix" style="display: none;"></syn-spinner>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>

    <script type="module">
      const selects = document.querySelectorAll('.endless-scrolling-select');
      selects.forEach((select) => {
        const loadingIndicator = select.querySelector('syn-spinner');
        let nextOption = 4;
        const maxOptions = 40;
        const pageSize = 10;

        // Replace the delay and generated data with your API request. Return each page as
        // { value, label } items, using whatever page or cursor parameter your API expects.
        const fetchNextPage = async (startIndex) => {
          await new Promise(resolve => setTimeout(resolve, 600));
          const endIndex = Math.min(startIndex + pageSize, maxOptions + 1);

          return Array.from({ length: endIndex - startIndex }, (_, offset) => {
            const index = startIndex + offset;
            return {
              label: 'Option ' + index,
              value: 'option-' + index,
            };
          });
        };

        // This handler runs for each syn-end-reached event. Adapt the end-of-data check and
        // request parameters to your API, then map its results to options and append the page.
        const loadNextPage = async () => {
          if (nextOption > maxOptions) {
            return;
          }

          loadingIndicator.style.display = 'inline-block';
          const options = await fetchNextPage(nextOption);
          const fragment = document.createDocumentFragment();

          options.forEach(({ value, label }) => {
            const option = document.createElement('syn-option');
            option.value = value;
            option.textContent = label;
            fragment.appendChild(option);
          });

          select.appendChild(fragment);
          nextOption += options.length;
          loadingIndicator.style.display = 'none';
        };

        // The select re-arms the sentinel after the new options are added.
        select.addEventListener('syn-end-reached', loadNextPage);
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStoryDefault
}, {
  afterRender: openSelect('syn-select', false),
  heightPx: 400
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStoryMultiple
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  GroupingOptionsWithIcons
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...Z.parameters?.docs?.source}}}})))()}export{$ as n,y as r,A as t};