import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-DWg8XNs3.js";import{d as r,f as i,g as a,u as o}from"./iframe-CVaCVGtH.js";import{a as s,i as c,n as l,r as u,t as d}from"./component-CllRTPI1.js";import{n as f,t as p}from"./styles-Bo4G5Uzy.js";var m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),u(),p(),r(),a(),{args:m,argTypes:h}=c(`syn-table-cell`),{overrideArgs:g}=s(`syn-table-cell`),_={args:g([{name:`default`,type:`slot`,value:`Cell content`}],m),argTypes:h,component:`syn-table-cell`,parameters:{chromatic:{modes:i},design:o(`41227-220286`),docs:{description:{component:l(`table`,`default`)}}},tags:[`Structure`,`Styles`],title:`Styles/syn-table-cell`},v={parameters:{controls:{disable:!1},docs:{description:{story:l(`table`,`default`)}}},render:e=>t`
  <table class="syn-table" style="width: 200px;">
    <tbody>
      <tr>
        ${f({...e,sticky:!0},`td`)}
      </tr>
    </tbody>
  </table>
  <style>
    .sticky {
      position: sticky;
    }
  </style>
  `},y={parameters:{docs:{description:{story:l(`table`,`header`)}}},render:()=>t`
    <table class="syn-table" style="width: 200px;">
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
  `},b={parameters:{docs:{description:{story:l(`table`,`alternating`)}}},render:()=>t`
    <table class="syn-table" style="width: 200px;">
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
  `},x={parameters:{docs:{description:{story:l(`table`,`border`)}}},render:()=>t`
    <table class="syn-table" style="width: 200px;">
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
          <td class="syn-table-cell syn-table-cell--border-bottom">Border Bottom</td>
        </tr>
      </tbody>
    </table>
  `},S={parameters:{docs:{description:{story:l(`table`,`scroll`)}}},render:()=>t`
    <table class="syn-table" style="width: 400px;">
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
  `},C=d({Default:v,Header:y,Alternating:b,Border:x,ScrollingBehavior:S},250),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  <table class="syn-table" style="width: 200px;">
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'header')
      }
    }
  },
  render: () => html\`
    <table class="syn-table" style="width: 200px;">
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'alternating')
      }
    }
  },
  render: () => html\`
    <table class="syn-table" style="width: 200px;">
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'border')
      }
    }
  },
  render: () => html\`
    <table class="syn-table" style="width: 200px;">
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
          <td class="syn-table-cell syn-table-cell--border-bottom">Border Bottom</td>
        </tr>
      </tbody>
    </table>
  \`
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('table', 'scroll')
      }
    }
  },
  render: () => html\`
    <table class="syn-table" style="width: 400px;">
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Header,
  Alternating,
  Border,
  ScrollingBehavior
}, 250)`,...C.parameters?.docs?.source}}},w=[`Default`,`Header`,`Alternating`,`Border`,`ScrollingBehavior`,`Screenshot`]}))();export{b as Alternating,x as Border,v as Default,y as Header,C as Screenshot,S as ScrollingBehavior,w as __namedExportsOrder,_ as default};