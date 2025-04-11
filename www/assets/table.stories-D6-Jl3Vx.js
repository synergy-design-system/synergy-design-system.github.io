import{R as r}from"./index-_2TAQcTa.js";import{T as $,S as C,b as z,c as S}from"./index-BdnXA0MA.js";import{x as a}from"./directive-helpers-Dvm_Ferq.js";import{g as L,a as E,p as D}from"./component-BEqk7vAR.js";import{g as l}from"./translations-dXj_Xr11.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-tcYegwRX.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";import"./library-BX4ONXik.js";import"./ref-B9GS7qLj.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./icon-button-CJ-dEVl6.js";import"./index-Vx7n56Jp.js";var w=Object.freeze,_=Object.defineProperty,v=(e,o)=>w(_(e,"raw",{value:w(e.slice())})),g,f,x,T;const s=(e,o=5)=>new Array(o).fill(void 0).map(e),n=(e=void 0)=>{const o=e?`syn-table-cell--shadow-${e} shadow-cell`:"",t=d=>`${e==="end"&&d===0||e==="start"&&d===4||e==="bottom"?o:""}`;return a`
    <thead>
      <tr>
        <th class="${t(0)}">${l("table.header.name")}</th>
        <th class="${t(1)}">${l("table.header.customer")}</th>
        <th class="${t(2)}">${l("table.header.location")}</th>
        <th class="${t(3)}">${l("table.header.contractStart")}</th>
        <th class="${t(4)}"></th>
      </tr>
    </thead>
  `},c=(e=void 0)=>{const o=e?`syn-table-cell--shadow-${e} shadow-cell`:"",t=d=>`${e==="end"&&d===0||e==="start"&&d===4?o:""}`;return a`
    <tr>
      <td class="${t(0)}">${l("table.body.name")}</td>
      <td class="${t(1)}">${l("table.body.customer")}</td>
      <td class="${t(2)}">${l("table.body.location")}</td>
      <td class="${t(3)}">${l("table.body.contractStart")}</td>
      <td class="${t(4)} buttons-cell"> 
        <syn-button variant="text" size="small">
          <syn-icon name="edit"></syn-icon>
        </syn-button>
        <syn-button variant="text" size="small">
          <syn-icon name="delete_outline"></syn-icon>
        </syn-button>
      </td>
    </tr>
  `},P=()=>a`
  <tr>
    <td class="syn-table-cell--shadow-end shadow-cell">
      <div class="product-cell">
        <img
          class="product-image"
          src="https://synergy-design-system.github.io/card-example.jpg"
          alt="Multiple persons having lunch in SICK Academy"
        />
        <div>
          <div>${l("table.productTable.body.productDetails")}</div>
          <div class="product-name">${l("table.productTable.body.productName")}</div>
          <div>${l("table.productTable.body.partNo")}</div> 
        </div>
      </div>
    </td>
    <td>
      <div class="availability">
        <syn-icon class="check_icon" name="check_circle_outline"></syn-icon>
        ${l("table.productTable.body.availability")}
      </div>
    </td>
    <td>
      ${l("table.productTable.body.earliestDelivery")}
    </td>
    <td>
      <div class="price">
        <div>${l("table.productTable.body.listPrice.text")}</div>
        <div>${l("table.productTable.body.netPrice.text")}</div>  
      </div>
    </td>
    <td>
      <div class="price">
        <div>${l("table.productTable.body.listPrice.unitPrice")}</div>
        <div>${l("table.productTable.body.netPrice.unitPrice")}</div>
      </div>
    </td>
    <td>
      <div class="price">
        <div>${l("table.productTable.body.listPrice.totalPrice")}</div>
        <div>${l("table.productTable.body.netPrice.totalPrice")}</div>
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
        ${l("table.productTable.body.button.cart")}
      </syn-button>
      <syn-button variant="text" size="small">
        <syn-icon slot="suffix" name="keyboard_arrow_right"></syn-icon>
        ${l("table.productTable.body.button.request")}
      </syn-button>
    </td>
  </tr>
`,G={parameters:{chromatic:{...D?.parameters?.chromatic,disableSnapshot:!1},design:E("19923-55456"),docs:{description:{component:L("table","default","templates")},page:()=>r.createElement(r.Fragment,null,r.createElement($,null),r.createElement(C,null),r.createElement(z,null),r.createElement(S,{title:""})),story:{iframeHeight:550}}},title:"Templates/Table"},h={render:()=>{const e=s(()=>c());return a`
      <table class="syn-table--default">
        ${n()}
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
    `}},y={render:()=>{const e=s(()=>c());return a`
      <table class="syn-table--alternating">
        ${n()}
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
    `}},m={render:()=>{const e=s(()=>c());return a`
      <table class="syn-table--border">
        ${n()}
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
    `}},i={render:()=>{const e=s(()=>c("end"));return a(g||(g=v([`
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
    `])),n("end"),e)}},b={render:()=>{const e=s(()=>c("start"));return a(f||(f=v([`
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
    `])),n("start"),e)}},p={render:()=>{const e=s(()=>c());return a(x||(x=v([`
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
    `])),n("bottom"),e)}},u={render:()=>{const e=s(()=>P());return a(T||(T=v([`
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
          color: var(--syn-typography-color-text);
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
    `])),l("table.productTable.header.product"),l("table.productTable.header.availability"),l("table.productTable.header.earliestDelivery"),l("table.productTable.header.unitPrice"),l("table.productTable.header.totalPrice"),e)}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...i.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...b.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`If using a table with borders, sticky row and scrolling mechanism together, the 'border-collapse'
property should be set to 'separate'. Otherwise the table will have some strange behaviors.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
          color: var(--syn-typography-color-text);
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
}`,...u.parameters?.docs?.source}}};const J=["TableWithHeader","TableWithAlternatingRows","TableWithBorders","TableShadowLeftColumn","TableShadowRightColumn","TableShadowTopRow","TableProduct"];export{u as TableProduct,i as TableShadowLeftColumn,b as TableShadowRightColumn,p as TableShadowTopRow,y as TableWithAlternatingRows,m as TableWithBorders,h as TableWithHeader,J as __namedExportsOrder,G as default};
