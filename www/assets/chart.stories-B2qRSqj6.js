import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,m as o}from"./iframe-BJUJk-mP.js";import{n as s,r as c,t as l}from"./chart-C5Iy1cSV.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./component-Dl_LLDeh.js";import{n as g,t as _}from"./taggedTemplateLiteral-pWa2IaV6.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{n(),l(),c(),m(),a(),r(),g(),{overrideArgs:C}=u(`syn-chart`),{args:w,argTypes:T}=d(`syn-chart`),{generateTemplate:E}=p(`syn-chart`),D={args:C([{name:`id`,type:`attribute`,value:`chart-default`}],w),argTypes:{...T,palette:{control:`select`,options:Object.keys(s)}},component:`syn-chart`,parameters:{chromatic:{modes:o,pauseAnimationAtEnd:!1},design:i(`41094-279501`),docs:{description:{component:[`>⚠️ **Experimental**:`,`>syn-chart is currently experimental.`,`>The API may change in future releases without prior notice.`,`>Use it with caution in production environments and expect potential breaking changes.
`,f(`chart`,`default`)].join(`
`)}}},tags:[`Charting`,`Data Visualization`],title:`Charts/syn-chart`},O={parameters:{controls:{disable:!1},docs:{description:{story:f(`chart`,`default`)}}},render:e=>t(v||=_([`
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
  `]),E({args:e}))},k={parameters:{docs:{description:{story:f(`chart`,`config`)}}},render:()=>t(y||=_([`
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
  `]))},A={parameters:{docs:{description:{story:f(`chart`,`palette`)}}},render:()=>t(b||=_([`
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
  `]))},j={parameters:{docs:{description:{story:f(`chart`,`get-instance`)}}},render:()=>t(x||=_([`
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
  `]))},M={parameters:{docs:{description:{story:f(`chart`,`multiple-charts`)}}},render:()=>t(S||=_([`
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
  `]))},N=h({Default:O,Config:k,Palette:A,GetInstance:j,MultipleChartsWithDifferentPalettes:M},700),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Config,
  Palette,
  GetInstance,
  MultipleChartsWithDifferentPalettes
}, 700)`,...N.parameters?.docs?.source}}},P=[`Default`,`Config`,`Palette`,`GetInstance`,`MultipleChartsWithDifferentPalettes`,`Screenshot`]}));F();export{k as Config,O as Default,j as GetInstance,M as MultipleChartsWithDifferentPalettes,A as Palette,N as Screenshot,P as __namedExportsOrder,D as default,F as t};