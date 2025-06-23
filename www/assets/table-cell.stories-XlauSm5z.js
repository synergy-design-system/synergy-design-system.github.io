import{g as d,x as n}from"./iframe-BLjrJY6Z.js";import{g as e,s as b,a as y,b as i}from"./component-KeVqWNnj.js";import{r as p}from"./styles-BYIo8CX0.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const{args:m,argTypes:h}=b("syn-table-cell"),{overrideArgs:g}=y("syn-table-cell"),B={args:g([{name:"default",type:"slot",value:"Cell content"}],m),argTypes:h,component:"syn-table-cell",parameters:{design:d("19479-134433"),docs:{description:{component:e("table","default")}}},tags:["Structure","Styles"],title:"Styles/syn-table-cell"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("table","default")}}},render:c=>n`
  <table class="syn-table">
    <tbody>
      <tr>
        ${p({...c,sticky:!0},"td")}
      </tr>
    </tbody>
  </table>
  <style>
    .sticky {
      position: sticky;
    }
  </style>
  `},l={parameters:{docs:{description:{story:e("table","header")}}},render:()=>n`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header">Cell header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="syn-table-cell">Cell content</td>
        </tr>
      </tbody>
    </table>
  `},r={parameters:{docs:{description:{story:e("table","alternating")}}},render:()=>n`
    <table class="syn-table">
      <tbody>
        <tr>
          <td class="syn-table-cell">Cell content</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--alternating">Cell content</td>
        </tr>
        <tr>
          <td class="syn-table-cell">Cell content</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--alternating">Cell content</td>
        </tr>
      </tbody>
    </table>
  `},s={parameters:{docs:{description:{story:e("table","border")}}},render:()=>n`
    <table class="syn-table">
      <tbody>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-top">Border Top</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-start">Border Start</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-end">Border End</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-bottom">Border Left</td>
        </tr>
      </tbody>
    </table>
  `},a={parameters:{docs:{description:{story:e("table","scroll")}}},render:()=>n`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header syn-table-cell--shadow-bottom syn-table-cell--shadow-active sticky">Cell header</th>
          <th class="syn-table-cell--header syn-table-cell--shadow-bottom syn-table-cell--shadow-active sticky">Cell header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="syn-table-cell">Cell content</td>
          <td class="syn-table-cell">Cell content</td>
        </tr>
      </tbody>
    </table>
    <style>
      .sticky {
        position: sticky;
      }
    </style>
  `},o=i({Default:t,Header:l,Alternating:r,Border:s,ScrollingBehavior:a},250);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('table', 'default')
      }
    }
  },
  render: (args: unknown) => html\`
  <table class="syn-table">
    <tbody>
      <tr>
        \${renderStyles({
    ...(args as RenderArgs),
    sticky: true
  } as RenderArgs, 'td')}
      </tr>
    </tbody>
  </table>
  <style>
    .sticky {
      position: sticky;
    }
  </style>
  \`
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'header')
      }
    }
  },
  render: () => html\`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header">Cell header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="syn-table-cell">Cell content</td>
        </tr>
      </tbody>
    </table>
  \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'alternating')
      }
    }
  },
  render: () => html\`
    <table class="syn-table">
      <tbody>
        <tr>
          <td class="syn-table-cell">Cell content</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--alternating">Cell content</td>
        </tr>
        <tr>
          <td class="syn-table-cell">Cell content</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--alternating">Cell content</td>
        </tr>
      </tbody>
    </table>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'border')
      }
    }
  },
  render: () => html\`
    <table class="syn-table">
      <tbody>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-top">Border Top</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-start">Border Start</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-end">Border End</td>
        </tr>
        <tr>
          <td class="syn-table-cell syn-table-cell--border-bottom">Border Left</td>
        </tr>
      </tbody>
    </table>
  \`
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'scroll')
      }
    }
  },
  render: () => html\`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header syn-table-cell--shadow-bottom syn-table-cell--shadow-active sticky">Cell header</th>
          <th class="syn-table-cell--header syn-table-cell--shadow-bottom syn-table-cell--shadow-active sticky">Cell header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="syn-table-cell">Cell content</td>
          <td class="syn-table-cell">Cell content</td>
        </tr>
      </tbody>
    </table>
    <style>
      .sticky {
        position: sticky;
      }
    </style>
  \`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Header,
  Alternating,
  Border,
  ScrollingBehavior
}, 250)`,...o.parameters?.docs?.source}}};const D=["Default","Header","Alternating","Border","ScrollingBehavior","Screenshot"];export{r as Alternating,s as Border,t as Default,l as Header,o as Screenshot,a as ScrollingBehavior,D as __namedExportsOrder,B as default};
