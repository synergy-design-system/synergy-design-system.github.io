import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r,n as i,t as a}from"./preview-C-q7G2lS.js";import{c as o,t as s}from"./lit-DgWh_IaA.js";import{d as c,f as l,i as u,p as d,u as f}from"./blocks-CjiNIppL.js";import{t as p}from"./react-BZJXY1be.js";import{t as m}from"./button-D57oz1we.js";import{t as h}from"./icon-DQH7sBmo.js";import{n as g,r as _}from"./component-pvg5noYG.js";import{t as v}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as y,t as b}from"./translations-uscc1XxV.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{x=e(p(),1),d(),s(),a(),_(),y(),r(),m(),h(),E=(e,t=5)=>Array(t).fill(void 0).map(e),D=(e=void 0)=>{let t=e?`syn-table-cell--shadow-${e} shadow-cell`:``,n=n=>`${e===`end`&&n===0||e===`start`&&n===4||e===`bottom`?t:``}`;return o`
    <thead>
      <tr>
        <th class="${n(0)}">${b(`table.header.name`)}</th>
        <th class="${n(1)}">${b(`table.header.customer`)}</th>
        <th class="${n(2)}">${b(`table.header.location`)}</th>
        <th class="${n(3)}">${b(`table.header.contractStart`)}</th>
        <th class="${n(4)}"></th>
      </tr>
    </thead>
  `},O=(e=void 0)=>{let t=e?`syn-table-cell--shadow-${e} shadow-cell`:``,n=n=>`${e===`end`&&n===0||e===`start`&&n===4?t:``}`;return o`
    <tr>
      <td class="${n(0)}">${b(`table.body.name`)}</td>
      <td class="${n(1)}">${b(`table.body.customer`)}</td>
      <td class="${n(2)}">${b(`table.body.location`)}</td>
      <td class="${n(3)}">${b(`table.body.contractStart`)}</td>
      <td class="${n(4)} buttons-cell"> 
        <syn-button variant="text" size="small">
          <syn-icon name="edit"></syn-icon>
        </syn-button>
        <syn-button variant="text" size="small">
          <syn-icon name="delete_outline"></syn-icon>
        </syn-button>
      </td>
    </tr>
  `},k=()=>o`
  <tr>
    <td class="syn-table-cell--shadow-end shadow-cell">
      <div class="product-cell">
        <img
          class="product-image"
          src="https://synergy-design-system.github.io/card-example.jpg"
          alt="Multiple persons having lunch in SICK Academy"
        />
        <div>
          <div>${b(`table.productTable.body.productDetails`)}</div>
          <div class="product-name">${b(`table.productTable.body.productName`)}</div>
          <div>${b(`table.productTable.body.partNo`)}</div> 
        </div>
      </div>
    </td>
    <td>
      <div class="availability">
        <syn-icon class="check_icon" name="check_circle_outline"></syn-icon>
        ${b(`table.productTable.body.availability`)}
      </div>
    </td>
    <td>
      ${b(`table.productTable.body.earliestDelivery`)}
    </td>
    <td>
      <div class="price">
        <div>${b(`table.productTable.body.listPrice.text`)}</div>
        <div>${b(`table.productTable.body.netPrice.text`)}</div>  
      </div>
    </td>
    <td>
      <div class="price">
        <div>${b(`table.productTable.body.listPrice.unitPrice`)}</div>
        <div>${b(`table.productTable.body.netPrice.unitPrice`)}</div>
      </div>
    </td>
    <td>
      <div class="price">
        <div>${b(`table.productTable.body.listPrice.totalPrice`)}</div>
        <div>${b(`table.productTable.body.netPrice.totalPrice`)}</div>
      </div>
    </td>
    <td> 
      <syn-button variant="text" size="small">
        <syn-icon name="edit"></syn-icon>
      </syn-button>
      <syn-button variant="text" size="small">
        <syn-icon name="delete_outline"></syn-icon>
      </syn-button>
    </td>
    <td> 
      <syn-button variant="filled" size="small">
        <syn-icon slot="prefix" name="shopping_cart"></syn-icon>
        ${b(`table.productTable.body.button.cart`)}
      </syn-button>
      <syn-button variant="text" size="small">
        <syn-icon slot="suffix" name="keyboard_arrow_right"></syn-icon>
        ${b(`table.productTable.body.button.request`)}
      </syn-button>
    </td>
  </tr>
`,A={parameters:{chromatic:{...i?.parameters?.chromatic,disableSnapshot:!1,modes:n},docs:{description:{component:g(`table`,`default`,`templates`)},page:()=>x.createElement(x.Fragment,null,x.createElement(l,null),x.createElement(c,null),x.createElement(u,null),x.createElement(f,{title:``})),story:{iframeHeight:550}}},tags:[`Structure`],title:`Templates/Table`},j={render:()=>{let e=E(()=>O());return o`
      <table class="syn-table--default">
        ${D()}
        <tbody>
          ${e}
        </tbody>
      </table>
      <style>
        .syn-table--default .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
    `}},M={render:()=>{let e=E(()=>O());return o`
      <table class="syn-table--alternating">
        ${D()}
        <tbody>
          ${e}
        </tbody>
      </table>
      <style>
        .syn-table--alternating .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
    `}},N={render:()=>{let e=E(()=>O());return o`
      <table class="syn-table--border">
        ${D()}
        <tbody>
          ${e}
        </tbody>
      </table>
      <style>
        .syn-table--border .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
    `}},P={render:()=>{let e=E(()=>O(`end`));return o(S||=v([`
      <div id="horizontal-scrollable-table">
        <table class="syn-table--default">
          `,`
          <tbody>
            `,`
          </tbody>
        </table>
      </div>
      <style>
        #horizontal-scrollable-table {
          overflow-x: auto;
          width: 550px;
        }

        #horizontal-scrollable-table > table {
          /* Set border-collapse to separate, if using scrolling mechanism together with a table with borders */
          /* border-collapse: separate; */
        }

        #horizontal-scrollable-table .shadow-cell {
          position: sticky;
          left: 0;
          z-index: 1;
        }

        #horizontal-scrollable-table td {
          min-width: 120px;
        }

        #horizontal-scrollable-table .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
      <script type="module">
        const scrollableTable = document.getElementById('horizontal-scrollable-table');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-end');

        scrollableTable.addEventListener('scroll', () => {
          shadowCells.forEach(shadowCell => {
            if (scrollableTable.scrollLeft === 0) {
              shadowCell.classList.remove('syn-table-cell--shadow-active');
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active');
            }
          });
        });

        scrollableTable.scrollLeft = 20;
      <\/script>
    `]),D(`end`),e)}},F={render:()=>{let e=E(()=>O(`start`));return o(C||=v([`
      <div id="horizontal-scrollable-table2">
        <table class="syn-table--default">
          `,`
          <tbody>
            `,`
          </tbody>
        </table>
      </div>
      <style>
        #horizontal-scrollable-table2 {
          overflow-x: auto;
          width: 550px;
        }

        #horizontal-scrollable-table2 > table {
          /* Set border-collapse to separate, if using scrolling mechanism together with a table with borders */
          /* border-collapse: separate; */
        }

        #horizontal-scrollable-table2 .shadow-cell {
          position: sticky;
          right: 0;
          z-index: 1;
        }

        #horizontal-scrollable-table2 td {
          min-width: 120px;
        }

        #horizontal-scrollable-table2 .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
      <script type="module">
        const scrollableTable = document.getElementById('horizontal-scrollable-table2');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-start');
        const maxScrollX = scrollableTable.scrollWidth - scrollableTable.clientWidth;

        const handleShadow = () => {
          shadowCells.forEach(shadowCell => {
            if (scrollableTable.scrollLeft === maxScrollX) {
              shadowCell.classList.remove('syn-table-cell--shadow-active');
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active');
            }
          });
        }

        // Initially set shadow on load
        handleShadow();

        scrollableTable.addEventListener('scroll', handleShadow);
      <\/script>
    `]),D(`start`),e)}},I={render:()=>{let e=E(()=>O());return o(w||=v([`
      <div id="vertical-scrollable-table">
        <table class="syn-table--default">
          `,`
          <tbody>
            `,`
          </tbody>
        </table>
      </div>
      <style>
        #vertical-scrollable-table {
          overflow-y: auto;
          height: 200px;
          width: fit-content;
        }

        #vertical-scrollable-table > table {
          /* Set border-collapse to separate, if using scrolling mechanism together with a table with borders */
          /* border-collapse: separate; */
        }

        #vertical-scrollable-table .shadow-cell {
          position: sticky;
          z-index: 1;
          top: 0;
        }

        #vertical-scrollable-table .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
      <script type="module">
        const scrollableTable = document.getElementById('vertical-scrollable-table');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-bottom');

        scrollableTable.addEventListener('scroll', () => {
          shadowCells.forEach(shadowCell => {

            if (scrollableTable.scrollTop === 0) {
              shadowCell.classList.remove('syn-table-cell--shadow-active')
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active'); 
            }
          });
        });

        scrollableTable.scrollTop = 20;
      <\/script>
    `]),D(`bottom`),e)}},L={render:()=>{let e=E(()=>k());return o(T||=v([`
      <div id="product-table">
        <table class="syn-table--default">
          <thead>
            <tr>
              <th class="syn-table-cell--shadow-end shadow-cell">
                `,`
              </th>
              <th>
                `,`
              </th>
              <th>
                `,`
              </th>
              <th></th>
              <th>
                `,`
              </th>
              <th>
                `,`
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            `,`
          </tbody>
        </table>
      </div>
      <script type="module">
      const scrollableTable = document.getElementById('product-table');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-end');

        scrollableTable.addEventListener('scroll', () => {
          shadowCells.forEach(shadowCell => {
            if (scrollableTable.scrollLeft === 0) {
              shadowCell.classList.remove('syn-table-cell--shadow-active');
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active');
            }
          });
        });

        scrollableTable.scrollLeft = 20;
      <\/script>
      <style>
        #product-table {
          overflow-y: auto;
          width: 900px;
        }

        #product-table .shadow-cell {
          position: sticky;
          z-index: 1;
          left: 0;
        }

        #product-table td {
          min-width: 100px;
        }

        .product-image {
          height: var(--syn-spacing-3x-large);
          width: var(--syn-spacing-3x-large);
          object-fit: cover;
        }

        .product-cell {
          display: flex;
          flex-direction: row;
          font: var(--syn-body-x-small-regular);
          gap: var(--syn-spacing-medium);
          width: 230px;
        }

        .product-name {
          color: var(--syn-color-primary-600);
          font: var(--syn-body-medium-semibold);
        }

        .availability {
          display: flex;
          align-items: center;
          gap: var(--syn-spacing-2x-small);
        }

        .check_icon {
          font-size: var(--syn-font-size-medium);
          color: var(--syn-color-success-600);
        }

        .price {
          display: flex;
          flex-direction: column;
          gap: var(--syn-spacing-2x-small);
        }

        .price :nth-child(2) {
          font: var(--syn-body-small-semibold);
        }
      </style>
    `]),b(`table.productTable.header.product`),b(`table.productTable.header.availability`),b(`table.productTable.header.earliestDelivery`),b(`table.productTable.header.unitPrice`),b(`table.productTable.header.totalPrice`),e)}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRow());
    return html\`
      <table class="syn-table--default">
        \${createHeader()}
        <tbody>
          \${bodyData}
        </tbody>
      </table>
      <style>
        .syn-table--default .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
    \`;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRow());
    return html\`
      <table class="syn-table--alternating">
        \${createHeader()}
        <tbody>
          \${bodyData}
        </tbody>
      </table>
      <style>
        .syn-table--alternating .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
    \`;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRow());
    return html\`
      <table class="syn-table--border">
        \${createHeader()}
        <tbody>
          \${bodyData}
        </tbody>
      </table>
      <style>
        .syn-table--border .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
    \`;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRow('end'));
    return html\`
      <div id="horizontal-scrollable-table">
        <table class="syn-table--default">
          \${createHeader('end')}
          <tbody>
            \${bodyData}
          </tbody>
        </table>
      </div>
      <style>
        #horizontal-scrollable-table {
          overflow-x: auto;
          width: 550px;
        }

        #horizontal-scrollable-table > table {
          /* Set border-collapse to separate, if using scrolling mechanism together with a table with borders */
          /* border-collapse: separate; */
        }

        #horizontal-scrollable-table .shadow-cell {
          position: sticky;
          left: 0;
          z-index: 1;
        }

        #horizontal-scrollable-table td {
          min-width: 120px;
        }

        #horizontal-scrollable-table .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
      <script type="module">
        const scrollableTable = document.getElementById('horizontal-scrollable-table');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-end');

        scrollableTable.addEventListener('scroll', () => {
          shadowCells.forEach(shadowCell => {
            if (scrollableTable.scrollLeft === 0) {
              shadowCell.classList.remove('syn-table-cell--shadow-active');
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active');
            }
          });
        });

        scrollableTable.scrollLeft = 20;
      <\/script>
    \`;
  }
}`,...P.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRow('start'));
    return html\`
      <div id="horizontal-scrollable-table2">
        <table class="syn-table--default">
          \${createHeader('start')}
          <tbody>
            \${bodyData}
          </tbody>
        </table>
      </div>
      <style>
        #horizontal-scrollable-table2 {
          overflow-x: auto;
          width: 550px;
        }

        #horizontal-scrollable-table2 > table {
          /* Set border-collapse to separate, if using scrolling mechanism together with a table with borders */
          /* border-collapse: separate; */
        }

        #horizontal-scrollable-table2 .shadow-cell {
          position: sticky;
          right: 0;
          z-index: 1;
        }

        #horizontal-scrollable-table2 td {
          min-width: 120px;
        }

        #horizontal-scrollable-table2 .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
      <script type="module">
        const scrollableTable = document.getElementById('horizontal-scrollable-table2');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-start');
        const maxScrollX = scrollableTable.scrollWidth - scrollableTable.clientWidth;

        const handleShadow = () => {
          shadowCells.forEach(shadowCell => {
            if (scrollableTable.scrollLeft === maxScrollX) {
              shadowCell.classList.remove('syn-table-cell--shadow-active');
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active');
            }
          });
        }

        // Initially set shadow on load
        handleShadow();

        scrollableTable.addEventListener('scroll', handleShadow);
      <\/script>
    \`;
  }
}`,...F.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRow());
    return html\`
      <div id="vertical-scrollable-table">
        <table class="syn-table--default">
          \${createHeader('bottom')}
          <tbody>
            \${bodyData}
          </tbody>
        </table>
      </div>
      <style>
        #vertical-scrollable-table {
          overflow-y: auto;
          height: 200px;
          width: fit-content;
        }

        #vertical-scrollable-table > table {
          /* Set border-collapse to separate, if using scrolling mechanism together with a table with borders */
          /* border-collapse: separate; */
        }

        #vertical-scrollable-table .shadow-cell {
          position: sticky;
          z-index: 1;
          top: 0;
        }

        #vertical-scrollable-table .buttons-cell {
          padding-top: var(--syn-spacing-2x-small);
          padding-bottom: var(--syn-spacing-2x-small);
          min-width: 76px;
        }
      </style>
      <script type="module">
        const scrollableTable = document.getElementById('vertical-scrollable-table');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-bottom');

        scrollableTable.addEventListener('scroll', () => {
          shadowCells.forEach(shadowCell => {

            if (scrollableTable.scrollTop === 0) {
              shadowCell.classList.remove('syn-table-cell--shadow-active')
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active'); 
            }
          });
        });

        scrollableTable.scrollTop = 20;
      <\/script>
    \`;
  }
}`,...I.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const bodyData = repeatFor(() => createBodyRowProduct());
    return html\`
      <div id="product-table">
        <table class="syn-table--default">
          <thead>
            <tr>
              <th class="syn-table-cell--shadow-end shadow-cell">
                \${getTranslation('table.productTable.header.product')}
              </th>
              <th>
                \${getTranslation('table.productTable.header.availability')}
              </th>
              <th>
                \${getTranslation('table.productTable.header.earliestDelivery')}
              </th>
              <th></th>
              <th>
                \${getTranslation('table.productTable.header.unitPrice')}
              </th>
              <th>
                \${getTranslation('table.productTable.header.totalPrice')}
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            \${bodyData}
          </tbody>
        </table>
      </div>
      <script type="module">
      const scrollableTable = document.getElementById('product-table');
        const shadowCells = scrollableTable.querySelectorAll('.syn-table-cell--shadow-end');

        scrollableTable.addEventListener('scroll', () => {
          shadowCells.forEach(shadowCell => {
            if (scrollableTable.scrollLeft === 0) {
              shadowCell.classList.remove('syn-table-cell--shadow-active');
            } else {
              shadowCell.classList.add('syn-table-cell--shadow-active');
            }
          });
        });

        scrollableTable.scrollLeft = 20;
      <\/script>
      <style>
        #product-table {
          overflow-y: auto;
          width: 900px;
        }

        #product-table .shadow-cell {
          position: sticky;
          z-index: 1;
          left: 0;
        }

        #product-table td {
          min-width: 100px;
        }

        .product-image {
          height: var(--syn-spacing-3x-large);
          width: var(--syn-spacing-3x-large);
          object-fit: cover;
        }

        .product-cell {
          display: flex;
          flex-direction: row;
          font: var(--syn-body-x-small-regular);
          gap: var(--syn-spacing-medium);
          width: 230px;
        }

        .product-name {
          color: var(--syn-color-primary-600);
          font: var(--syn-body-medium-semibold);
        }

        .availability {
          display: flex;
          align-items: center;
          gap: var(--syn-spacing-2x-small);
        }

        .check_icon {
          font-size: var(--syn-font-size-medium);
          color: var(--syn-color-success-600);
        }

        .price {
          display: flex;
          flex-direction: column;
          gap: var(--syn-spacing-2x-small);
        }

        .price :nth-child(2) {
          font: var(--syn-body-small-semibold);
        }
      </style>
    \`;
  }
}`,...L.parameters?.docs?.source}}},R=[`TableWithHeader`,`TableWithAlternatingRows`,`TableWithBorders`,`TableShadowLeftColumn`,`TableShadowRightColumn`,`TableShadowTopRow`,`TableProduct`]})))()}z();export{L as TableProduct,P as TableShadowLeftColumn,F as TableShadowRightColumn,I as TableShadowTopRow,M as TableWithAlternatingRows,N as TableWithBorders,j as TableWithHeader,R as __namedExportsOrder,A as default};