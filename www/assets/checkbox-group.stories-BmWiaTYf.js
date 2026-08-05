import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-C-q7G2lS.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./button-D57oz1we.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-pvg5noYG.js";import{t as p}from"./checkbox-group-FCkQEN9Y.js";import{t as m}from"./checkbox-lZ0QuObr.js";var h=t({Checked:()=>E,Default:()=>S,Disabled:()=>k,Focus:()=>O,HelpText:()=>D,HorizontalLayout:()=>w,Labels:()=>T,Readonly:()=>A,Screenshot:()=>M,Sizes:()=>j,VerticalLayout:()=>C,__namedExportsOrder:()=>N,default:()=>x}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{p(),m(),o(),a(),d(),r(),g=e=>`${e[0].toUpperCase()}${e.slice(1)}`,_=(e=3,t={})=>Array.from({length:e},(e,n)=>i`
  <syn-checkbox
    ?checked="${t.checked?.includes(n)}"
    ?disabled="${t.disabled?.includes(n)}"
    ?readonly="${t.readonly?.includes(n)}"
    name="checkbox-${n+1}"
    value="checkbox-${n+1}"
  >Option</syn-checkbox>
`),{argTypes:v}=c(`syn-checkbox-group`),{overrideArgs:y}=s(`syn-checkbox-group`),{generateTemplate:b}=u(`syn-checkbox-group`),x={args:y([{name:`label`,type:`attribute`,value:`This is a label`},{name:`default`,type:`slot`,value:`
        <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>
        <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
        <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
      `}]),argTypes:v,component:`syn-checkbox-group`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`checkbox-group`,`default`)}}},tags:[`Form`],title:`Components/syn-checkbox-group`},S={parameters:{controls:{disable:!1},docs:{description:{story:l(`checkbox-group`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:l(`checkbox-group`,`vertical-layout`)}}},render:()=>i`
    <syn-checkbox-group label="This is a label" layout="vertical">
      ${_()}
    </syn-checkbox-group>
  `},w={parameters:{docs:{description:{story:l(`checkbox-group`,`horizontal-layout`)}}},render:()=>i`
    <syn-checkbox-group label="This is a label" layout="horizontal">
      ${_(11)}
    </syn-checkbox-group>
  `},T={parameters:{docs:{description:{story:l(`checkbox-group`,`labels`)}}},render:()=>i`
    <syn-checkbox-group label="This is a label">
      ${_(3)}
    </syn-checkbox-group>
  `},E={parameters:{docs:{description:{story:l(`checkbox-group`,`checked`)}}},render:()=>i`
    <syn-checkbox-group label="This is a label">
      ${_(3,{checked:[1]})}
    </syn-checkbox-group>
  `},D={parameters:{docs:{description:{story:l(`checkbox-group`,`help-text`)}}},render:()=>i`
    <syn-checkbox-group label="This is a label" help-text="Choose the most appropriate option.">
      ${_(3)}
    </syn-checkbox-group>
  `},O={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l(`checkbox-group`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-checkbox-group`)?.focus()},render:()=>i`
    <syn-checkbox-group label="This is a label" help-text="Choose the most appropriate option.">
      ${_(3,{checked:[1],disabled:[0]})}
    </syn-checkbox-group>
  `},k={parameters:{docs:{description:{story:l(`checkbox-group`,`disabled`)}}},render:()=>i`
    <syn-checkbox-group label="This is a disabled">
      ${_(3,{checked:[1],disabled:[0,1]})}
    </syn-checkbox-group>
  `},A={parameters:{docs:{description:{story:l(`checkbox-group`,`readonly`)}}},render:()=>i`
    <syn-checkbox-group label="This is a label">
      ${_(3,{checked:[1],readonly:[0,1]})}
    </syn-checkbox-group>
  `},j={parameters:{docs:{description:{story:l(`checkbox-group`,`sizes`)}}},render:()=>i`
    <div class="demo-checkbox-group-grid">
      ${[`small`,`medium`,`large`].map(e=>i`
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
  `},M=f({Default:S,VerticalLayout:C,HorizontalLayout:w,Labels:T,Checked:E,HelpText:D,Disabled:k,Readonly:A,Sizes:j},400),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}, 400)`,...M.parameters?.docs?.source}}},N=[`Default`,`VerticalLayout`,`HorizontalLayout`,`Labels`,`Checked`,`HelpText`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Screenshot`]})))()}export{h as n,P as r,S as t};