import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as i,d as a,f as o,g as s,u as c}from"./iframe-CkMB4fy0.js";import{a as l,i as u,r as d,t as f}from"./component-Cg1b1wX7.js";import{n as p,t as m}from"./styles-dQDSI6xe.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{n(),i(),d(),m(),a(),s(),{args:h,argTypes:g}=u(`syn-table`),{overrideArgs:_}=l(`syn-table`),v="It is possible to achieve different table stylings (default, with border, alternating, ...) \n  either via multiple classes on the `table`, `td` and `th` elements or as a convenient alternative\n  as auto styling class, which is applied on a `table` element. These auto styling classes will\n  style the `td` and `th` elements correctly, without the need to apply further classes.\n  <br> <br>\n  **Note:** The auto styling table classes work for simple table layouts. For more complex ones or advanced use cases, the table cell classes should be used.\n",y=()=>`
  <thead>
    <tr>
      <th> Header content </th>
      <th> Header content </th>
      <th> Header content </th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <td> Cell content </td>
      <td> Cell content </td>
      <td> Cell content </td>
    </tr>
    <tr>
      <td> Cell content </td>
      <td> Cell content </td>
      <td> Cell content </td>
    </tr>
    <tr>
      <td> Cell content </td>
      <td> Cell content </td>
      <td> Cell content </td>
    </tr>
    <tr>
      <td> Cell content </td>
      <td> Cell content </td>
      <td> Cell content </td>
    </tr>
  </tbody>
`,b=(e=`default`)=>r`
  <table class="syn-table--${e}">
    <col>
    <col>
    <colgroup span="3"></colgroup>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Header Col</th>
        <th colspan="3" scope="colgroup">Header Col</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowspan="2" scope="rowgroup">Header Row Group</th>
        <th scope="row">Header Row</th>
        <td>Cell Content</td>
        <td>Cell Content</td>
        <td>Cell Content</td>
      </tr>
      <tr>
        <th scope="row">Header Row</th>
        <td>Cell Content</td>
        <td>Cell Content</td>
        <td>Cell Content</td>
      </tr>
      <tr>
        <th rowspan="2" scope="rowgroup">Header Row Group</th>
        <th scope="row">Header Row</th>
        <td>Cell Content</td>
        <td>Cell Content</td>
        <td>Cell Content</td>
      </tr>
      <tr>
      <th scope="row">Header Row</th>
        <td>Cell Content</td>
        <td>Cell Content</td>
        <td>Cell Content</td>
      </tr>
    </tbody>
  </table>
`,x={args:_([{name:`default`,type:`slot`,value:y().trim()}],h),argTypes:g,component:`syn-table`,parameters:{chromatic:{modes:o},design:c(`41227-220286`),docs:{description:{component:v}}},tags:[`Structure`,`Styles`],title:`Styles/syn-table`},S={parameters:{controls:{disable:!1},docs:{description:{story:v}}},render:e=>p(e,`table`)},C={render:()=>r`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header"> Header content </th>
          <th class="syn-table-cell--header"> Header content </th>
          <th class="syn-table-cell--header"> Header content </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
      </tbody>
    </table>
  `},w={render:()=>r`
    <table class="syn-table--default">
     ${t(y())}
    </table>
  `},T={render:()=>r`
    <table class="syn-table--alternating">
     ${t(y())}
    </table>
  `},E={render:()=>r`
    <table class="syn-table--border">
     ${t(y())}
    </table>
  `},D={render:()=>b()},O={render:()=>b(`border`)},k={render:()=>b(`alternating`)},A=f({AtomicTable:C,AutoDefaultTable:w,AutoAlternatingTable:T,AutoBorderTable:E,ComplexTableDefault:D,ComplexTableBorder:O,ComplexTableAlternating:k},400),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: tableDocs
      }
    }
  },
  render: (args: unknown) => renderStyles(args as RenderArgs, 'table')
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header"> Header content </th>
          <th class="syn-table-cell--header"> Header content </th>
          <th class="syn-table-cell--header"> Header content </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
        <tr>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
          <td class="syn-table-cell"> Cell content </td>
        </tr>
      </tbody>
    </table>
  \`
}`,...C.parameters?.docs?.source},description:{story:"Create table styles using multiple classes attached to `table`, `td` and `th` elements.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--default">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...w.parameters?.docs?.source},description:{story:"Use default table style with the auto styling class `syn-table--default`.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--alternating">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...T.parameters?.docs?.source},description:{story:"Use alternating table style with the auto styling class `syn-table--alternating`.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--border">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...E.parameters?.docs?.source},description:{story:"Use border table style with the auto styling class `syn-table--border`.",...E.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  AtomicTable,
  AutoDefaultTable,
  AutoAlternatingTable,
  AutoBorderTable,
  ComplexTableDefault,
  ComplexTableBorder,
  ComplexTableAlternating
}, 400)`,...A.parameters?.docs?.source}}},j=[`Default`,`AtomicTable`,`AutoDefaultTable`,`AutoAlternatingTable`,`AutoBorderTable`,`Screenshot`]}))();export{C as AtomicTable,T as AutoAlternatingTable,E as AutoBorderTable,w as AutoDefaultTable,S as Default,A as Screenshot,j as __namedExportsOrder,x as default};