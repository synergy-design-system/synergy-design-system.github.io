import{g as $}from"./preview-BfEM8BLb.js";import{k as n}from"./lit-element-BsyMe9HG.js";import{u as M}from"./index-DbQ-iIe5.js";import{o as L}from"./select-QhapRHtE.js";import{s as P,a as k,g as o,b as q,c as z}from"./component-eGmRQmem.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";import"./icon-button-BsnFsjAn.js";import"./icon-DiAnxFT_.js";import"./index-C8k3Z-3Y.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-D8vHI8_K.js";var x=Object.freeze,H=Object.defineProperty,S=(e,t)=>x(H(e,"raw",{value:x(t||e.slice())})),_,T,E;const{args:D,argTypes:C}=P("syn-select"),{overrideArgs:I}=z("syn-select"),{generateTemplate:U}=k("syn-select"),on={args:D,argTypes:C,component:"syn-select",parameters:{design:$("5069-7562"),docs:{description:{component:o("select","default")},story:{height:"250px"}}},title:"Components/syn-select"},s={parameters:{args:I({name:"default",type:"slot",value:`
        <syn-option value="Option_1">Option 1</syn-option>
        <syn-option value="Option_2">Option 2</syn-option>
        <syn-option value="Option_3">Option 3</syn-option>
      `},D),controls:{disable:!1},docs:{description:{story:o("select","default")}}},render:e=>U({args:e})},i={parameters:{docs:{description:{story:o("select","labels")}}},render:()=>n`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},p={parameters:{docs:{description:{story:o("select","help-text")}}},render:()=>n`
    <syn-select label="Experience" help-text="Please tell us your skill level.">
      <syn-option value="1">Novice</syn-option>
      <syn-option value="2">Intermediate</syn-option>
      <syn-option value="3">Advanced</syn-option>
    </syn-select>
  `},l={parameters:{docs:{description:{story:o("select","placeholder")}}},render:()=>n`
    <syn-select placeholder="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},a={parameters:{docs:{description:{story:o("select","clearable")}}},render:()=>n`
    <syn-select clearable value="option-1">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},r={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("select","focus")}}},play:({canvasElement:e})=>{e.querySelector("syn-select")?.focus()},render:()=>n`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},c={parameters:{docs:{description:{story:o("select","disabled")}}},render:()=>n`
    <syn-select placeholder="Disabled" disabled>
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  `},y={parameters:{docs:{description:{story:o("select","multiple")}}},render:()=>n`
    <syn-select label="Select a Few" value="Option_1 Option_2 Option_3" multiple clearable>
      <syn-option value="Option_1">Option 1</syn-option>
      <syn-option value="Option_2">Option 2</syn-option>
      <syn-option value="Option_3">Option 3</syn-option>
      <syn-option value="Option_4">Option 4</syn-option>
      <syn-option value="Option_5">Option 5</syn-option>
      <syn-option value="Option_6">Option 6</syn-option>
    </syn-select>
  `},u={parameters:{docs:{description:{story:o("select","initialvalue")}}},render:()=>n(_||(_=S([`
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
  `])))},m={parameters:{docs:{description:{story:o("select","group")}}},render:()=>n`
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
  `},d={parameters:{docs:{description:{story:o("select","size")}}},render:()=>n`
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
  `},v={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("select","invalid")}}},play:async({canvasElement:e})=>{const t=e.querySelector("form"),w=t.querySelector("syn-select"),f=t.querySelector("syn-button");f&&w&&(await M.click(f),f.click())},render:()=>n`
    <form class="custom-validity">
      <syn-select label="Select one" required>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-select>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `},O={parameters:{docs:{description:{story:o("select","prefix-suffix")}}},render:()=>n`
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
  `},g={parameters:{docs:{description:{story:o("select","gettag")}}},render:()=>n(T||(T=S([`
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
  `])))},Y={render:()=>n`
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
  `},A={render:()=>n(E||(E=S([`
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
  `])))},b=q({ScreenshotStoryDefault:Y},{afterRender:L("syn-select"),heightPx:400}),h=q({ScreenshotStoryMultiple:A},{afterRender:L("syn-select"),heightPx:400});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: (renderArgs: unknown) => generateTemplate({
    args: renderArgs
  })
} as Story`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    elm?.focus();
  },
  render: () => html\`
    <syn-select label="Select one">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-2">Option 2</syn-option>
      <syn-option value="option-3">Option 3</syn-option>
    </syn-select>
  \`
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
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
}`,...c.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-select label="Select one" required>
        <syn-option value="option-1">Option 1</syn-option>
        <syn-option value="option-2">Option 2</syn-option>
        <syn-option value="option-3">Option 3</syn-option>
      </syn-select>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  \`
}`,...v.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStoryDefault
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ScreenshotStoryMultiple
}, {
  afterRender: openSelect('syn-select'),
  heightPx: 400
})`,...h.parameters?.docs?.source}}};const en=["Default","Labels","HelpText","Placeholder","Clearable","Focus","Disabled","Multiple","SettingInitialValues","GroupingOptions","Sizes","Invalid","PrefixSuffixIcons","CustomTags","ScreenshotDefault","ScreenshotMultiple"];export{a as Clearable,g as CustomTags,s as Default,c as Disabled,r as Focus,m as GroupingOptions,p as HelpText,v as Invalid,i as Labels,y as Multiple,l as Placeholder,O as PrefixSuffixIcons,b as ScreenshotDefault,h as ScreenshotMultiple,u as SettingInitialValues,d as Sizes,en as __namedExportsOrder,on as default};
