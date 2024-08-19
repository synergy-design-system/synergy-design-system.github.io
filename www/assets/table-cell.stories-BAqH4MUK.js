import{x as a}from"./lit-element-DILkAbkc.js";import{s as d,g as e,b,c as y}from"./component-BEsS8oJ5.js";import{r as i}from"./styles-CG_neGQv.js";import{g as p}from"./preview-CvBHywAB.js";import"./icon-button-BaHXGfTO.js";import"./icon.component-Dz9RM87e.js";import"./directive-helpers-DbZfDV3x.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-CJgmZ3eS.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-SvBqPYt-.js";const{args:m,argTypes:h}=d("syn-table-cell"),{overrideArgs:g}=y("syn-table-cell"),E={args:g([{name:"default",type:"slot",value:"Cell content"}],m),argTypes:h,component:"syn-table-cell",parameters:{design:p("19479-134433"),docs:{description:{component:e("table","default")}}},title:"Styles/syn-table-cell"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("table","default")}}},render:c=>a`
  <table class="syn-table">
    <tbody>
      <tr>
        ${i({...c,sticky:!0},"td")}
      </tr>
    </tbody>
  </table>
  <style>
    .sticky {
      position: sticky;
    }
  </style>
  `},l={parameters:{docs:{description:{story:e("table","header")}}},render:()=>a`
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
  `},r={parameters:{docs:{description:{story:e("table","alternating")}}},render:()=>a`
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
  `},n={parameters:{docs:{description:{story:e("table","border")}}},render:()=>a`
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
  `},s={parameters:{docs:{description:{story:e("table","scroll")}}},render:()=>a`
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
  `},o=b({Default:t,Header:l,Alternating:r,Border:n,ScrollingBehavior:s},250);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        \${renderStyles(({
    ...(args as RenderArgs),
    sticky: true
  } as RenderArgs), 'td')}
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Header,
  Alternating,
  Border,
  ScrollingBehavior
}, 250)`,...o.parameters?.docs?.source}}};const T=["Default","Header","Alternating","Border","ScrollingBehavior","Screenshot"];export{r as Alternating,n as Border,t as Default,l as Header,o as Screenshot,s as ScrollingBehavior,T as __namedExportsOrder,E as default};
