import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,t as r}from"./lit-D4-0ovri.js";import{a as i,i as a,n as o,r as s,t as c}from"./chromatic-config-DEqEAZ11.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-1Z3hZXYb.js";import{t as h}from"./taggedTemplateLiteral-BZenJ0bZ.js";var g=t({Config:()=>O,Default:()=>D,GetInstance:()=>A,MultipleChartsWithDifferentPalettes:()=>j,Palette:()=>k,Screenshot:()=>M,__namedExportsOrder:()=>N,default:()=>E}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{r(),s(),i(),p(),o(),{overrideArgs:S}=l(`syn-chart`),{args:C,argTypes:w}=u(`syn-chart`),{generateTemplate:T}=f(`syn-chart`),E={args:S([{name:`id`,type:`attribute`,value:`chart-default`}],C),argTypes:{...w,palette:{control:`select`,options:Object.keys(a)}},component:`syn-chart`,parameters:{chromatic:{...c},controls:{exclude:[`id`]},docs:{description:{component:[`>⚠️ **Experimental**:`,`>syn-chart is currently experimental.`,`>The API may change in future releases without prior notice.`,`>Use it with caution in production environments and expect potential breaking changes.
`,d(`chart`,`default`)].join(`
`)}}},tags:[`Charting`,`Data Visualization`],title:`Charts/syn-chart`},D={parameters:{controls:{disable:!1},docs:{description:{story:d(`chart`,`default`)}}},render:e=>n(_||=h([`
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
  `]),T({args:e}))},O={parameters:{docs:{description:{story:d(`chart`,`config`)}}},render:()=>n(v||=h([`
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
  `]))},k={parameters:{docs:{description:{story:d(`chart`,`palette`)}}},render:()=>n(y||=h([`
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
  `]))},A={parameters:{docs:{description:{story:d(`chart`,`get-instance`)}}},render:()=>n(b||=h([`
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
  `]))},j={parameters:{docs:{description:{story:d(`chart`,`multiple-charts`)}}},render:()=>n(x||=h([`
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
  `]))},M=m({Default:D,Config:O,Palette:k,GetInstance:A,MultipleChartsWithDifferentPalettes:j},700),N=[`Default`,`Config`,`Palette`,`GetInstance`,`MultipleChartsWithDifferentPalettes`,`Screenshot`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Config,
  Palette,
  GetInstance,
  MultipleChartsWithDifferentPalettes
}, 700)`,...M.parameters?.docs?.source}}}})))()}export{g as n,P as r,D as t};