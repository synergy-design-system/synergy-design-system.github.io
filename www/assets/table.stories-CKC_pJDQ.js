import{x as n}from"./directive-helpers-DGrfjhaU.js";import{o as d}from"./unsafe-html-Cjw1QqN7.js";import{a as i,s as y,b as h,c as m}from"./component-DyVzHN2b.js";import{r as u}from"./styles-szx9gHus.js";import"./static-gmWA-8Kq.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-DLbbekGf.js";const{args:C,argTypes:g}=y("syn-table"),{overrideArgs:f}=h("syn-table"),p="It is possible to achieve different table stylings (default, with border, alternating, ...) \n  either via multiple classes on the `table`, `td` and `th` elements or as a convenient alternative\n  as auto styling class, which is applied on a `table` element. These auto styling classes will\n  style the `td` and `th` elements correctly, without the need to apply further classes.\n  <br> <br>\n  **Note:** The auto styling table classes work for simple table layouts. For more complex ones or advanced use cases, the table cell classes should be used.\n",o=()=>`
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
`,b=(c="default")=>n`
  <table class="syn-table--${c}">
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
`,O={args:f([{name:"default",type:"slot",value:o().trim()}],C),argTypes:g,component:"syn-table",parameters:{design:i("19479-134433"),docs:{description:{component:p}}},title:"Styles/syn-table"},s={parameters:{controls:{disable:!1},docs:{description:{story:p}}},render:c=>u(c,"table")},t={render:()=>n`
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
  `},e={render:()=>n`
    <table class="syn-table--default">
     ${d(o())}
    </table>
  `},l={render:()=>n`
    <table class="syn-table--alternating">
     ${d(o())}
    </table>
  `},a={render:()=>n`
    <table class="syn-table--border">
     ${d(o())}
    </table>
  `},T={render:()=>b()},w={render:()=>b("border")},H={render:()=>b("alternating")},r=m({AtomicTable:t,AutoDefaultTable:e,AutoAlternatingTable:l,AutoBorderTable:a,ComplexTableDefault:T,ComplexTableBorder:w,ComplexTableAlternating:H},400);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Create table styles using multiple classes attached to `table`, `td` and `th` elements.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--default">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...e.parameters?.docs?.source},description:{story:"Use default table style with the auto styling class `syn-table--default`.",...e.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--alternating">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...l.parameters?.docs?.source},description:{story:"Use alternating table style with the auto styling class `syn-table--alternating`.",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <table class="syn-table--border">
     \${unsafeHTML(createTableData())}
    </table>
  \`
}`,...a.parameters?.docs?.source},description:{story:"Use border table style with the auto styling class `syn-table--border`.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  AtomicTable,
  AutoDefaultTable,
  AutoAlternatingTable,
  AutoBorderTable,
  ComplexTableDefault,
  ComplexTableBorder,
  ComplexTableAlternating
}, 400)`,...r.parameters?.docs?.source}}};const _=["Default","AtomicTable","AutoDefaultTable","AutoAlternatingTable","AutoBorderTable","Screenshot"];export{t as AtomicTable,l as AutoAlternatingTable,a as AutoBorderTable,e as AutoDefaultTable,s as Default,r as Screenshot,_ as __namedExportsOrder,O as default};
