import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,a as n,h as r,l as i}from"./preview-AI1NfaYJ.js";import{c as a,t as o}from"./lit-DgWh_IaA.js";import{a as s,i as c,r as l,t as u}from"./component-Bm6Rp1CP.js";import{n as d,t as f}from"./styles-CTQmb3bf.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{o(),r(),l(),f(),i(),{args:p,argTypes:m}=c(`syn-table`),{overrideArgs:h}=s(`syn-table`),g="It is possible to achieve different table stylings (default, with border, alternating, ...) \n  either via multiple classes on the `table`, `td` and `th` elements or as a convenient alternative\n  as auto styling class, which is applied on a `table` element. These auto styling classes will\n  style the `td` and `th` elements correctly, without the need to apply further classes.\n  <br> <br>\n  **Note:** The auto styling table classes work for simple table layouts. For more complex ones or advanced use cases, the table cell classes should be used.\n",_=()=>`
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
`,v=(e=`default`)=>a`
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
`,y={args:h([{name:`default`,type:`slot`,value:_().trim()}],p),argTypes:m,component:`syn-table`,parameters:{chromatic:{modes:n},docs:{description:{component:g}}},tags:[`Structure`,`Styles`],title:`Styles/syn-table`},b={parameters:{controls:{disable:!1},docs:{description:{story:g}}},render:e=>d(e,`table`)},x={render:()=>a`
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
  `},S={render:()=>a`
    <table class="syn-table--default">
     ${t(_())}
    </table>
  `},C={render:()=>a`
    <table class="syn-table--alternating">
     ${t(_())}
    </table>
  `},w={render:()=>a`
    <table class="syn-table--border">
     ${t(_())}
    </table>
  `},T={render:()=>v()},E={render:()=>v(`border`)},D={render:()=>v(`alternating`)},O=u({AtomicTable:x,AutoDefaultTable:S,AutoAlternatingTable:C,AutoBorderTable:w,ComplexTableDefault:T,ComplexTableBorder:E,ComplexTableAlternating:D},400),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Create table styles using multiple classes attached to `table`, `td` and `th` elements.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--default">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...S.parameters?.docs?.source},description:{story:"Use default table style with the auto styling class `syn-table--default`.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--alternating">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...C.parameters?.docs?.source},description:{story:"Use alternating table style with the auto styling class `syn-table--alternating`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--border">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...w.parameters?.docs?.source},description:{story:"Use border table style with the auto styling class `syn-table--border`.",...w.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  AtomicTable,
  AutoDefaultTable,
  AutoAlternatingTable,
  AutoBorderTable,
  ComplexTableDefault,
  ComplexTableBorder,
  ComplexTableAlternating
}, 400)`,...O.parameters?.docs?.source}}},k=[`Default`,`AtomicTable`,`AutoDefaultTable`,`AutoAlternatingTable`,`AutoBorderTable`,`Screenshot`]})))()}A();export{x as AtomicTable,C as AutoAlternatingTable,w as AutoBorderTable,S as AutoDefaultTable,b as Default,O as Screenshot,k as __namedExportsOrder,y as default};