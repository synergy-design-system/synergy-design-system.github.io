import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-BiSXA87W.js";import{t as s}from"./button-6RBRhEco.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-BZMStFjM.js";import{t as m}from"./checkbox-group-DV4M-sub.js";import{t as h}from"./checkbox-J-wTQ_FX.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{m(),h(),s(),n(),f(),a(),r(),g=e=>`${e[0].toUpperCase()}${e.slice(1)}`,_=(e=3,n={})=>Array.from({length:e},(e,r)=>t`
  <syn-checkbox
    ?checked="${n.checked?.includes(r)}"
    ?disabled="${n.disabled?.includes(r)}"
    ?readonly="${n.readonly?.includes(r)}"
    name="checkbox-${r+1}"
    value="checkbox-${r+1}"
  >Option</syn-checkbox>
`),{argTypes:v}=l(`syn-checkbox-group`),{overrideArgs:y}=c(`syn-checkbox-group`),{generateTemplate:b}=d(`syn-checkbox-group`),x={args:y([{name:`label`,type:`attribute`,value:`This is a label`},{name:`default`,type:`slot`,value:`
        <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>
        <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
        <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
      `}]),argTypes:v,component:`syn-checkbox-group`,parameters:{chromatic:{modes:o},design:i(`50279-43830`),docs:{description:{component:u(`checkbox-group`,`default`)}}},tags:[`Form`],title:`Components/syn-checkbox-group`},S={parameters:{controls:{disable:!1},docs:{description:{story:u(`checkbox-group`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:u(`checkbox-group`,`vertical-layout`)}}},render:()=>t`
    <syn-checkbox-group label="This is a label" layout="vertical">
      ${_()}
    </syn-checkbox-group>
  `},w={parameters:{docs:{description:{story:u(`checkbox-group`,`horizontal-layout`)}}},render:()=>t`
    <syn-checkbox-group label="This is a label" layout="horizontal">
      ${_(11)}
    </syn-checkbox-group>
  `},T={parameters:{docs:{description:{story:u(`checkbox-group`,`labels`)}}},render:()=>t`
    <syn-checkbox-group label="This is a label">
      ${_(3)}
    </syn-checkbox-group>
  `},E={parameters:{docs:{description:{story:u(`checkbox-group`,`checked`)}}},render:()=>t`
    <syn-checkbox-group label="This is a label">
      ${_(3,{checked:[1]})}
    </syn-checkbox-group>
  `},D={parameters:{docs:{description:{story:u(`checkbox-group`,`help-text`)}}},render:()=>t`
    <syn-checkbox-group label="This is a label" help-text="Choose the most appropriate option.">
      ${_(3)}
    </syn-checkbox-group>
  `},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`checkbox-group`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-checkbox-group`)?.focus()},render:()=>t`
    <syn-checkbox-group label="This is a label" help-text="Choose the most appropriate option.">
      ${_(3,{checked:[1],disabled:[0]})}
    </syn-checkbox-group>
  `},k={parameters:{docs:{description:{story:u(`checkbox-group`,`disabled`)}}},render:()=>t`
    <syn-checkbox-group label="This is a disabled">
      ${_(3,{checked:[1],disabled:[0,1]})}
    </syn-checkbox-group>
  `},A={parameters:{docs:{description:{story:u(`checkbox-group`,`readonly`)}}},render:()=>t`
    <syn-checkbox-group label="This is a label">
      ${_(3,{checked:[1],readonly:[0,1]})}
    </syn-checkbox-group>
  `},j={parameters:{docs:{description:{story:u(`checkbox-group`,`sizes`)}}},render:()=>t`
    <div class="demo-checkbox-group-grid">
      ${[`small`,`medium`,`large`].map(e=>t`
        <div class="demo-checkbox-group-tile">
          <syn-checkbox-group
            label="${`${g(e)} size vertical`}"
            size="${e}"
            layout="vertical"
          >
            ${_(2)}
          </syn-checkbox-group>
        </div>
        <div class="demo-checkbox-group-tile">
          <syn-checkbox-group
            label="${`${g(e)} size horizontal`}"
            size="${e}"
            layout="horizontal"
          >
            ${_(2)}
          </syn-checkbox-group>
        </div>
      `)}
    </div>
    <style>
    .demo-checkbox-group-grid {
      column-gap: var(--syn-spacing-large);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }

    .demo-checkbox-group-tile {
      background: var(--syn-page-background);
      padding: var(--syn-spacing-large);
      box-sizing: border-box;
      height: 100%;
    }
    </style>
  `},M=p({Default:S,VerticalLayout:C,HorizontalLayout:w,Labels:T,Checked:E,HelpText:D,Disabled:k,Readonly:A,Sizes:j},400),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'vertical-layout')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label" layout="vertical">
      \${createCheckboxes()}
    </syn-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'horizontal-layout')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label" layout="horizontal">
      \${createCheckboxes(11)}
    </syn-checkbox-group>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label">
      \${createCheckboxes(3)}
    </syn-checkbox-group>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'checked')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label">
      \${createCheckboxes(3, {
    checked: [1]
  })}
    </syn-checkbox-group>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label" help-text="Choose the most appropriate option.">
      \${createCheckboxes(3)}
    </syn-checkbox-group>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const checkboxGroup = canvasElement.querySelector('syn-checkbox-group');
    checkboxGroup?.focus();
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label" help-text="Choose the most appropriate option.">
      \${createCheckboxes(3, {
    checked: [1],
    disabled: [0]
  })}
    </syn-checkbox-group>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'disabled')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a disabled">
      \${createCheckboxes(3, {
    checked: [1],
    disabled: [0, 1]
  })}
    </syn-checkbox-group>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'readonly')
      }
    }
  },
  render: () => html\`
    <syn-checkbox-group label="This is a label">
      \${createCheckboxes(3, {
    checked: [1],
    readonly: [0, 1]
  })}
    </syn-checkbox-group>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('checkbox-group', 'sizes')
      }
    }
  },
  render: () => html\`
    <div class="demo-checkbox-group-grid">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
        <div class="demo-checkbox-group-tile">
          <syn-checkbox-group
            label="\${\`\${capitalizeFirstLetter(size)} size vertical\`}"
            size="\${size}"
            layout="vertical"
          >
            \${createCheckboxes(2)}
          </syn-checkbox-group>
        </div>
        <div class="demo-checkbox-group-tile">
          <syn-checkbox-group
            label="\${\`\${capitalizeFirstLetter(size)} size horizontal\`}"
            size="\${size}"
            layout="horizontal"
          >
            \${createCheckboxes(2)}
          </syn-checkbox-group>
        </div>
      \`)}
    </div>
    <style>
    .demo-checkbox-group-grid {
      column-gap: var(--syn-spacing-large);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }

    .demo-checkbox-group-tile {
      background: var(--syn-page-background);
      padding: var(--syn-spacing-large);
      box-sizing: border-box;
      height: 100%;
    }
    </style>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  VerticalLayout,
  HorizontalLayout,
  Labels,
  Checked,
  HelpText,
  Disabled,
  Readonly,
  Sizes
}, 400)`,...M.parameters?.docs?.source}}},N=[`Default`,`VerticalLayout`,`HorizontalLayout`,`Labels`,`Checked`,`HelpText`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Screenshot`]}));P();export{E as Checked,S as Default,k as Disabled,O as Focus,D as HelpText,w as HorizontalLayout,T as Labels,A as Readonly,M as Screenshot,j as Sizes,C as VerticalLayout,N as __namedExportsOrder,x as default,P as t};