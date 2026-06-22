import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{c as n,t as r}from"./lit-DWg8XNs3.js";import{B as i,d as a,f as o,g as s,n as c,t as l,u}from"./iframe-DFZAAaEN.js";import{d,f,i as p,p as m,u as h}from"./blocks-BvFIjJpU.js";import{t as g}from"./button-l6yb8oZI.js";import{t as _}from"./icon-Bkwl5xpe.js";import{n as v,r as y}from"./component-C-mvpOf5.js";import{n as b,t as x}from"./taggedTemplateLiteral-pWa2IaV6.js";import{n as S,t as C}from"./translations-C4Vy0kAa.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{w=t(i(),1),m(),r(),l(),y(),S(),a(),s(),g(),_(),b(),k=(e,t=5)=>Array(t).fill(void 0).map(e),A=(e=void 0)=>{let t=e?`syn-table-cell--shadow-${e} shadow-cell`:``,r=n=>`${e===`end`&&n===0||e===`start`&&n===4||e===`bottom`?t:``}`;return n`
    <thead>
      <tr>
        <th class="${r(0)}">${C(`table.header.name`)}</th>
        <th class="${r(1)}">${C(`table.header.customer`)}</th>
        <th class="${r(2)}">${C(`table.header.location`)}</th>
        <th class="${r(3)}">${C(`table.header.contractStart`)}</th>
        <th class="${r(4)}"></th>
      </tr>
    </thead>
  `},j=(e=void 0)=>{let t=e?`syn-table-cell--shadow-${e} shadow-cell`:``,r=n=>`${e===`end`&&n===0||e===`start`&&n===4?t:``}`;return n`
    <tr>
      <td class="${r(0)}">${C(`table.body.name`)}</td>
      <td class="${r(1)}">${C(`table.body.customer`)}</td>
      <td class="${r(2)}">${C(`table.body.location`)}</td>
      <td class="${r(3)}">${C(`table.body.contractStart`)}</td>
      <td class="${r(4)} buttons-cell"> 
        <syn-button variant="text" size="small">
          <syn-icon name="edit"></syn-icon>
        </syn-button>
        <syn-button variant="text" size="small">
          <syn-icon name="delete_outline"></syn-icon>
        </syn-button>
      </td>
    </tr>
  `},M=()=>n`
  <tr>
    <td class="syn-table-cell--shadow-end shadow-cell">
      <div class="product-cell">
        <img
          class="product-image"
          src="https://synergy-design-system.github.io/card-example.jpg"
          alt="Multiple persons having lunch in SICK Academy"
        />
        <div>
          <div>${C(`table.productTable.body.productDetails`)}</div>
          <div class="product-name">${C(`table.productTable.body.productName`)}</div>
          <div>${C(`table.productTable.body.partNo`)}</div> 
        </div>
      </div>
    </td>
    <td>
      <div class="availability">
        <syn-icon class="check_icon" name="check_circle_outline"></syn-icon>
        ${C(`table.productTable.body.availability`)}
      </div>
    </td>
    <td>
      ${C(`table.productTable.body.earliestDelivery`)}
    </td>
    <td>
      <div class="price">
        <div>${C(`table.productTable.body.listPrice.text`)}</div>
        <div>${C(`table.productTable.body.netPrice.text`)}</div>  
      </div>
    </td>
    <td>
      <div class="price">
        <div>${C(`table.productTable.body.listPrice.unitPrice`)}</div>
        <div>${C(`table.productTable.body.netPrice.unitPrice`)}</div>
      </div>
    </td>
    <td>
      <div class="price">
        <div>${C(`table.productTable.body.listPrice.totalPrice`)}</div>
        <div>${C(`table.productTable.body.netPrice.totalPrice`)}</div>
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
        ${C(`table.productTable.body.button.cart`)}
      </syn-button>
      <syn-button variant="text" size="small">
        <syn-icon slot="suffix" name="keyboard_arrow_right"></syn-icon>
        ${C(`table.productTable.body.button.request`)}
      </syn-button>
    </td>
  </tr>
`,N={parameters:{chromatic:{...c?.parameters?.chromatic,disableSnapshot:!1,modes:o},design:u(`16648-52486`),docs:{description:{component:v(`table`,`default`,`templates`)},page:()=>w.createElement(w.Fragment,null,w.createElement(f,null),w.createElement(d,null),w.createElement(p,null),w.createElement(h,{title:``})),story:{iframeHeight:550}}},tags:[`Structure`],title:`Templates/Table`},P={render:()=>{let e=k(()=>j());return n`
      <table class="syn-table--default">
        ${A()}
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
    `}},F={render:()=>{let e=k(()=>j());return n`
      <table class="syn-table--alternating">
        ${A()}
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
    `}},I={render:()=>{let e=k(()=>j());return n`
      <table class="syn-table--border">
        ${A()}
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
    `}},L={render:()=>{let e=k(()=>j(`end`));return n(T||=x([`
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
    `]),A(`end`),e)}},R={render:()=>{let e=k(()=>j(`start`));return n(E||=x([`
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
    `]),A(`start`),e)}},z={render:()=>{let e=k(()=>j());return n(D||=x([`
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
    `]),A(`bottom`),e)}},B={render:()=>{let e=k(()=>M());return n(O||=x([`
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
    `]),C(`table.productTable.header.product`),C(`table.productTable.header.availability`),C(`table.productTable.header.earliestDelivery`),C(`table.productTable.header.unitPrice`),C(`table.productTable.header.totalPrice`),e)}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`TableWithHeader`,`TableWithAlternatingRows`,`TableWithBorders`,`TableShadowLeftColumn`,`TableShadowRightColumn`,`TableShadowTopRow`,`TableProduct`]}))();export{B as TableProduct,L as TableShadowLeftColumn,R as TableShadowRightColumn,z as TableShadowTopRow,F as TableWithAlternatingRows,I as TableWithBorders,P as TableWithHeader,V as __namedExportsOrder,N as default};