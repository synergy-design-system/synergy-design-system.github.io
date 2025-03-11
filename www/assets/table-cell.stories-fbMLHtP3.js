import{k as o}from"./directive-helpers-B-JxG5af.js";import{g as e,a as d,s as b,b as y,d as i}from"./component-DJQbWcOU.js";import{r as p}from"./styles-Cjbr__uk.js";import"./if-defined-98Biveud.js";import"./ref-DMm6gEez.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./icon-button-B618sG2i.js";import"./library-UYMiFSYt.js";import"./icon.component-CEnKTybK.js";import"./index-Vx7n56Jp.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-D4nLdb-j.js";const{args:m,argTypes:h}=b("syn-table-cell"),{overrideArgs:g}=y("syn-table-cell"),O={args:g([{name:"default",type:"slot",value:"Cell content"}],m),argTypes:h,component:"syn-table-cell",parameters:{design:d("19479-134433"),docs:{description:{component:e("table","default")}}},title:"Styles/syn-table-cell"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("table","default")}}},render:c=>o`
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
  `},r={parameters:{docs:{description:{story:e("table","header")}}},render:()=>o`
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
  `},l={parameters:{docs:{description:{story:e("table","alternating")}}},render:()=>o`
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
  `},s={parameters:{docs:{description:{story:e("table","border")}}},render:()=>o`
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
  `},a={parameters:{docs:{description:{story:e("table","scroll")}}},render:()=>o`
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
  `},n=i({Default:t,Header:r,Alternating:l,Border:s,ScrollingBehavior:a},250);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Header,
  Alternating,
  Border,
  ScrollingBehavior
}, 250)`,...n.parameters?.docs?.source}}};const R=["Default","Header","Alternating","Border","ScrollingBehavior","Screenshot"];export{l as Alternating,s as Border,t as Default,r as Header,n as Screenshot,a as ScrollingBehavior,R as __namedExportsOrder,O as default};
