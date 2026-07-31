import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,c as n,d as r,o as i}from"./preview-DXkhgu0Z.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{a as s,i as c,n as l,r as u,t as d}from"./waitForFinishedCharts-6JKuLrWI.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./component-B0n0ooCL.js";import{n as v,t as y}from"./taggedTemplateLiteral-C9cDEsPD.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{o(),u(),s(),g(),i(),r(),d(),v(),{overrideArgs:T}=f(`syn-chart`),{args:E,argTypes:D}=p(`syn-chart`),{generateTemplate:O}=h(`syn-chart`),k={args:T([{name:`id`,type:`attribute`,value:`chart-default`}],E),argTypes:{...D,palette:{control:`select`,options:Object.keys(c)}},component:`syn-chart`,parameters:{chromatic:{modes:n},controls:{exclude:[`id`]},design:t(`0-1`,!0),docs:{description:{component:[`>⚠️ **Experimental**:`,`>syn-chart is currently experimental.`,`>The API may change in future releases without prior notice.`,`>Use it with caution in production environments and expect potential breaking changes.
`,m(`chart`,`default`)].join(`
`)}}},play:l,tags:[`Charting`,`Data Visualization`],title:`Charts/syn-chart`},A={parameters:{controls:{disable:!1},docs:{description:{story:m(`chart`,`default`)}}},render:e=>a(b||=y([`
    `,`
    <script type="module">
      const charts = document.querySelectorAll('#chart-default');
      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category', name: 'Days' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  `]),O({args:e}))},j={parameters:{docs:{description:{story:m(`chart`,`config`)}}},render:()=>a(x||=y([`
    <syn-chart id="chart-config"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-config');
      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224], type: 'line' }],
          xAxis: { data: ['Mon', 'Tue', 'Wed'], type: 'category' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  `]))},M={parameters:{docs:{description:{story:m(`chart`,`palette`)}}},render:()=>a(S||=y([`
    <syn-chart id="chart-palette" palette="sequential-01"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-palette');
      charts.forEach(chart => {
        chart.config = {
          series: [
            { data: [150, 230, 224, 218, 135, 147, 260], name: 'Series A', type: 'line' },
            { data: [80, 130, 180, 100, 90, 120, 200], name: 'Series B', type: 'line' },
            { data: [200, 160, 140, 170, 210, 180, 150], name: 'Series C', type: 'line' },
            { data: [100, 120, 150, 80, 70, 110, 130], name: 'Series D', type: 'line' },
            { data: [180, 200, 170, 190, 220, 210, 240], name: 'Series E', type: 'line' },
            { data: [90, 110, 130, 70, 60, 100, 120], name: 'Series F', type: 'line' },
            { data: [160, 190, 150, 200, 230, 220, 250], name: 'Series G', type: 'line' },
          ],
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  `]))},N={parameters:{docs:{description:{story:m(`chart`,`get-instance`)}}},render:()=>a(C||=y([`
    <syn-chart id="chart-get-instance"></syn-chart>
    <p style="color:var(--syn-color-neutral-600); font-size:0.875rem; margin-top:1rem">
      Open the browser console and click a data point to see the native ECharts event payload.
    </p>
    <script type="module">
      const charts = document.querySelectorAll('#chart-get-instance');
      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          tooltip: { trigger: 'item' },
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category' },
          yAxis: { type: 'value' },
        };
        const chartInstance = chart.getInstance();
        chartInstance.on('click', params => console.log('ECharts click event:', params));
      });
    <\/script>
  `]))},P={parameters:{docs:{description:{story:m(`chart`,`multiple-charts`)}}},render:()=>a(w||=y([`
    <syn-chart id="chart-multiple-charts" palette="categorical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-multiple-charts');

      const getHexValueFromVariable = (val) => getComputedStyle(document.documentElement).getPropertyValue(val).trim();

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              data: [160, 185, 180, 175, 150, 160, 190], name: 'Series A', type: 'line',
            },
            {
              data: [170, 165, 155, 168, 180, 170, 158], name: 'Series B', type: 'line',
            },
            {
              data: [165, 175, 158, 172, 182, 175, 185], name: 'Series C', type: 'line',
            },
            {
              color: [getHexValueFromVariable('--syn-sequential-05-80')],
              data: [80, 60, 90, 50, 70, 55, 85], name: 'Series D', type: 'line',
            },
            {
              color: [getHexValueFromVariable('--syn-sequential-05-60')],
              data: [65, 75, 55, 80, 45, 70, 60], name: 'Series E', type: 'line',
            },
            {
              color: [getHexValueFromVariable('--syn-sequential-05-40')],
              data: [50, 70, 60, 45, 55, 65, 75], name: 'Series F', type: 'line',
            },
          ],
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  `]))},F=_({Default:A,Config:j,Palette:M,GetInstance:N,MultipleChartsWithDifferentPalettes:P},700),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('chart', 'default')
      }
    }
  },
  render: args => html\`
    \${generateTemplate({
    args
  })}
    <script type="module">
      const charts = document.querySelectorAll('#chart-default');
      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category', name: 'Days' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'config')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-config"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-config');
      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224], type: 'line' }],
          xAxis: { data: ['Mon', 'Tue', 'Wed'], type: 'category' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'palette')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-palette" palette="sequential-01"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-palette');
      charts.forEach(chart => {
        chart.config = {
          series: [
            { data: [150, 230, 224, 218, 135, 147, 260], name: 'Series A', type: 'line' },
            { data: [80, 130, 180, 100, 90, 120, 200], name: 'Series B', type: 'line' },
            { data: [200, 160, 140, 170, 210, 180, 150], name: 'Series C', type: 'line' },
            { data: [100, 120, 150, 80, 70, 110, 130], name: 'Series D', type: 'line' },
            { data: [180, 200, 170, 190, 220, 210, 240], name: 'Series E', type: 'line' },
            { data: [90, 110, 130, 70, 60, 100, 120], name: 'Series F', type: 'line' },
            { data: [160, 190, 150, 200, 230, 220, 250], name: 'Series G', type: 'line' },
          ],
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'get-instance')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-get-instance"></syn-chart>
    <p style="color:var(--syn-color-neutral-600); font-size:0.875rem; margin-top:1rem">
      Open the browser console and click a data point to see the native ECharts event payload.
    </p>
    <script type="module">
      const charts = document.querySelectorAll('#chart-get-instance');
      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          tooltip: { trigger: 'item' },
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category' },
          yAxis: { type: 'value' },
        };
        const chartInstance = chart.getInstance();
        chartInstance.on('click', params => console.log('ECharts click event:', params));
      });
    <\/script>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'multiple-charts')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-multiple-charts" palette="categorical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-multiple-charts');

      const getHexValueFromVariable = (val) => getComputedStyle(document.documentElement).getPropertyValue(val).trim();

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              data: [160, 185, 180, 175, 150, 160, 190], name: 'Series A', type: 'line',
            },
            {
              data: [170, 165, 155, 168, 180, 170, 158], name: 'Series B', type: 'line',
            },
            {
              data: [165, 175, 158, 172, 182, 175, 185], name: 'Series C', type: 'line',
            },
            {
              color: [getHexValueFromVariable('--syn-sequential-05-80')],
              data: [80, 60, 90, 50, 70, 55, 85], name: 'Series D', type: 'line',
            },
            {
              color: [getHexValueFromVariable('--syn-sequential-05-60')],
              data: [65, 75, 55, 80, 45, 70, 60], name: 'Series E', type: 'line',
            },
            {
              color: [getHexValueFromVariable('--syn-sequential-05-40')],
              data: [50, 70, 60, 45, 55, 65, 75], name: 'Series F', type: 'line',
            },
          ],
          xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], type: 'category' },
          yAxis: { type: 'value' },
        };
      });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Config,
  Palette,
  GetInstance,
  MultipleChartsWithDifferentPalettes
}, 700)`,...F.parameters?.docs?.source}}},I=[`Default`,`Config`,`Palette`,`GetInstance`,`MultipleChartsWithDifferentPalettes`,`Screenshot`]}));L();export{j as Config,A as Default,N as GetInstance,P as MultipleChartsWithDifferentPalettes,M as Palette,F as Screenshot,I as __namedExportsOrder,k as default,L as t};