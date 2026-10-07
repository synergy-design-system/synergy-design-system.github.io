import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,t as n}from"./lit-D4-0ovri.js";import{d as r,t as i}from"./modes-DiggSWQK.js";import{a,i as o,n as s,r as c,t as l}from"./component-1Z3hZXYb.js";import{n as u,t as d}from"./styles-BpnS4iRC.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),c(),d(),r(),{args:f,argTypes:p}=o(`syn-table-cell`),{overrideArgs:m}=a(`syn-table-cell`),h={args:m([{name:`default`,type:`slot`,value:`Cell content`}],f),argTypes:p,component:`syn-table-cell`,parameters:{chromatic:{modes:i},docs:{description:{component:s(`table`,`default`)}}},tags:[`Structure`,`Styles`],title:`Styles/syn-table-cell`},g={parameters:{controls:{disable:!1},docs:{description:{story:s(`table`,`default`)}}},render:e=>t`
  <table class="syn-table" style="width: 200px;">
    <tbody>
      <tr>
        ${u({...e,sticky:!0},`td`)}
      </tr>
    </tbody>
  </table>
  <style>
    .sticky {
      position: sticky;
    }
  </style>
  `},_={parameters:{docs:{description:{story:s(`table`,`header`)}}},render:()=>t`
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
  `},v={parameters:{docs:{description:{story:s(`table`,`alternating`)}}},render:()=>t`
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
  `},y={parameters:{docs:{description:{story:s(`table`,`border`)}}},render:()=>t`
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
  `},b={parameters:{docs:{description:{story:s(`table`,`scroll`)}}},render:()=>t`
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
  `},x=l({Default:g,Header:_,Alternating:v,Border:y,ScrollingBehavior:b},250),S=[`Default`,`Header`,`Alternating`,`Border`,`ScrollingBehavior`,`Screenshot`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Header,
  Alternating,
  Border,
  ScrollingBehavior
}, 250)`,...x.parameters?.docs?.source}}}})))()}C();export{v as Alternating,y as Border,g as Default,_ as Header,x as Screenshot,b as ScrollingBehavior,S as __namedExportsOrder,h as default};