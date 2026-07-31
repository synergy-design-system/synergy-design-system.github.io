import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{a as n,c as r,d as i,o as a}from"./preview-DXkhgu0Z.js";import{c as o,t as s}from"./lit-BfcklOOD.js";import{t as c}from"./react-DvlgmmzG.js";import{d as l,f as u,i as d,p as f,u as p}from"./blocks-Dyc7j8Lq.js";import{t as m}from"./select-DNDp0Z_G.js";import{t as h}from"./option-YhDjAxh5.js";import{n as g,r as _,t as v}from"./waitForFinishedCharts-6JKuLrWI.js";import{n as y,r as b,t as x}from"./component-B0n0ooCL.js";import{n as S,t as C}from"./taggedTemplateLiteral-C9cDEsPD.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{w=e(c(),1),s(),m(),h(),f(),_(),b(),a(),i(),v(),S(),M={component:`syn-chart`,parameters:{chromatic:{modes:r},design:n(`2038-12066`,!0),docs:{description:{component:y(`chart`,`axes-default`)},page:()=>w.createElement(w.Fragment,null,w.createElement(u,null),w.createElement(l,null),w.createElement(d,null),w.createElement(p,{title:``}))}},play:g,tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Axes`},N={parameters:{docs:{description:{story:y(`chart`,`axes-split-lines-hidden`)}}},render:()=>o(T||=C([`
    <syn-chart id="chart-lines-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-lines-hidden');

      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: { 
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'category', name: 'Days',
          },
          yAxis: { type: 'value', name: 'Values' },
        };
      });
    <\/script>
  `]))},P={parameters:{docs:{description:{story:y(`chart`,`axes-split-lines-visible`)}}},render:()=>o(E||=C([`
    <syn-chart id="chart-lines-visible"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-lines-visible');

      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowSplitLines();
      });
    <\/script>
  `]))},F={parameters:{docs:{description:{story:y(`chart`,`axes-horizontal-split-lines`)}}},render:()=>o(D||=C([`
    <syn-chart id="chart-horizontal-lines-visible"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-horizontal-lines-visible');

      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowYSplitLines();
      });
    <\/script>
  `]))},I={parameters:{docs:{description:{story:y(`chart`,`axes-vertical-split-lines`)}}},render:()=>o(O||=C([`
    <syn-chart id="chart-vertical-lines-visible"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-vertical-lines-visible');

      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowXSplitLines();
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:y(`chart`,`axes-labels-hidden`)}}},render:()=>o(k||=C([`
    <syn-chart id="chart-lines-hidden-values-hidden"></syn-chart>
    <script type="module">
        const charts = document.querySelectorAll('#chart-lines-hidden-values-hidden');

        const baseConfig = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Days',
            type: 'category',
          },
          yAxis: {
            name: 'Values',
            type: 'value',
          },
        };
        charts.forEach(chart => {
          chart.config = handle => handle
            .baseConfig(baseConfig)
            .axesHideLabels();
        });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:y(`chart`,`axes-lines-visible-labels-hidden`)}}},render:()=>o(A||=C([`
    <syn-chart id="chart-lines-visible-values-hidden"></syn-chart>
    <script type="module">
      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      const charts = document.querySelectorAll('#chart-lines-visible-values-hidden');
      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesHideLabels()
          .axesHideLabels();
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:y(`chart`,`axes-labels-with-icons`)}}},render:()=>o(j||=C([`
    <div class="controls">
      <syn-select value="top" label="x-axis icon position" id="x-axis-icon-position">
        <syn-option value="top">Top</syn-option>
        <syn-option value="bottom">Bottom</syn-option>
      </syn-select>
      <syn-select value="left" label="y-axis icon position" id="y-axis-icon-position">
        <syn-option value="left">Left</syn-option>
        <syn-option value="right">Right</syn-option>
      </syn-select>
    </div>
    <syn-chart id="chart-axis-prefix-icons"></syn-chart>
    <script type="module">
      const XAXIS_ICONS = ['calendar_today', 'event_available', 'schedule', 'event_note', 'event_upcoming', 'weekend', 'sunny'];
      const YAXIS_ICONS = ['wallpaper', 'tune', 'watch', 'format_paint', 'brush', 'gradient', 'format_color_reset'];

      let yAxisIconUrls = [];
      let xAxisIconUrls = [];

      const fetchIcons = async () => {
        xAxisIconUrls = await Promise.all(
          XAXIS_ICONS.map(async (iconName) => {
            const svg = await fetch('/assets/sick2025/' + iconName + '.svg').then(r => r.text());
            return 'data:image/svg+xml;base64,' + btoa(svg);
          })
        );
        yAxisIconUrls = await Promise.all(
          YAXIS_ICONS.map(async (iconName) => {
            const svg = await fetch('/assets/sick2025/' + iconName + '.svg').then(r => r.text());
            return 'data:image/svg+xml;base64,' + btoa(svg);
          })
        );
      };

      const xAxisIconPositionSelect = document.querySelector('#x-axis-icon-position');
      const yAxisIconPositionSelect = document.querySelector('#y-axis-icon-position');

      const setConfig = async () => {        
        const baseConfig = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Days',
            type: 'category',
          },
          yAxis: {
            name: 'Values',
            type: 'value',
          },
        };

        const yAxisIconPosition = yAxisIconPositionSelect.value;
        const xAxisIconPosition = xAxisIconPositionSelect.value;

        const charts = document.querySelectorAll('#chart-axis-prefix-icons');
        charts.forEach(chart => {
          chart.config = handle => handle
            .baseConfig(baseConfig)
            .axesShowSplitLines()
            .axesAddXLabelIcons({
              iconUrls: xAxisIconUrls,
              iconPosition: xAxisIconPosition,
            })
            .axesAddYLabelIcons({
              iconUrls: yAxisIconUrls,
              iconPosition: yAxisIconPosition,
            });
        });
      };

      fetchIcons().then(setConfig);
      xAxisIconPositionSelect.addEventListener('syn-change', setConfig);
      yAxisIconPositionSelect.addEventListener('syn-change', setConfig);
    <\/script>
    <style>
      .controls {
        display: flex;
        gap: var(--syn-spacing-large);
        margin-bottom: var(--syn-spacing-large);
      }
    </style>
  `]))},B=x({AxesSplitLinesHidden:N,AxesSplitLinesVisible:P,HorizontalSplitLinesVisible:F,VerticalSplitLinesVisible:I,AxesLabelsHidden:L,AxesLinesVisibleWithLabelsHidden:R,AxesLabelsWithIcons:z},700),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-split-lines-hidden')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-lines-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-lines-hidden');

      charts.forEach(chart => {
        chart.config = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: { 
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'category', name: 'Days',
          },
          yAxis: { type: 'value', name: 'Values' },
        };
      });
    <\/script>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-split-lines-visible')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-lines-visible"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-lines-visible');

      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowSplitLines();
      });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-horizontal-split-lines')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-horizontal-lines-visible"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-horizontal-lines-visible');

      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowYSplitLines();
      });
    <\/script>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-vertical-split-lines')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-vertical-lines-visible"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-vertical-lines-visible');

      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowXSplitLines();
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-labels-hidden')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-lines-hidden-values-hidden"></syn-chart>
    <script type="module">
        const charts = document.querySelectorAll('#chart-lines-hidden-values-hidden');

        const baseConfig = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Days',
            type: 'category',
          },
          yAxis: {
            name: 'Values',
            type: 'value',
          },
        };
        charts.forEach(chart => {
          chart.config = handle => handle
            .baseConfig(baseConfig)
            .axesHideLabels();
        });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-lines-visible-labels-hidden')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-lines-visible-values-hidden"></syn-chart>
    <script type="module">
      const baseConfig = {
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
          type: 'value',
        },
      };

      const charts = document.querySelectorAll('#chart-lines-visible-values-hidden');
      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesHideLabels()
          .axesHideLabels();
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'axes-labels-with-icons')
      }
    }
  },
  render: () => html\`
    <div class="controls">
      <syn-select value="top" label="x-axis icon position" id="x-axis-icon-position">
        <syn-option value="top">Top</syn-option>
        <syn-option value="bottom">Bottom</syn-option>
      </syn-select>
      <syn-select value="left" label="y-axis icon position" id="y-axis-icon-position">
        <syn-option value="left">Left</syn-option>
        <syn-option value="right">Right</syn-option>
      </syn-select>
    </div>
    <syn-chart id="chart-axis-prefix-icons"></syn-chart>
    <script type="module">
      const XAXIS_ICONS = ['calendar_today', 'event_available', 'schedule', 'event_note', 'event_upcoming', 'weekend', 'sunny'];
      const YAXIS_ICONS = ['wallpaper', 'tune', 'watch', 'format_paint', 'brush', 'gradient', 'format_color_reset'];

      let yAxisIconUrls = [];
      let xAxisIconUrls = [];

      const fetchIcons = async () => {
        xAxisIconUrls = await Promise.all(
          XAXIS_ICONS.map(async (iconName) => {
            const svg = await fetch('/assets/sick2025/' + iconName + '.svg').then(r => r.text());
            return 'data:image/svg+xml;base64,' + btoa(svg);
          })
        );
        yAxisIconUrls = await Promise.all(
          YAXIS_ICONS.map(async (iconName) => {
            const svg = await fetch('/assets/sick2025/' + iconName + '.svg').then(r => r.text());
            return 'data:image/svg+xml;base64,' + btoa(svg);
          })
        );
      };

      const xAxisIconPositionSelect = document.querySelector('#x-axis-icon-position');
      const yAxisIconPositionSelect = document.querySelector('#y-axis-icon-position');

      const setConfig = async () => {        
        const baseConfig = {
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Days',
            type: 'category',
          },
          yAxis: {
            name: 'Values',
            type: 'value',
          },
        };

        const yAxisIconPosition = yAxisIconPositionSelect.value;
        const xAxisIconPosition = xAxisIconPositionSelect.value;

        const charts = document.querySelectorAll('#chart-axis-prefix-icons');
        charts.forEach(chart => {
          chart.config = handle => handle
            .baseConfig(baseConfig)
            .axesShowSplitLines()
            .axesAddXLabelIcons({
              iconUrls: xAxisIconUrls,
              iconPosition: xAxisIconPosition,
            })
            .axesAddYLabelIcons({
              iconUrls: yAxisIconUrls,
              iconPosition: yAxisIconPosition,
            });
        });
      };

      fetchIcons().then(setConfig);
      xAxisIconPositionSelect.addEventListener('syn-change', setConfig);
      yAxisIconPositionSelect.addEventListener('syn-change', setConfig);
    <\/script>
    <style>
      .controls {
        display: flex;
        gap: var(--syn-spacing-large);
        margin-bottom: var(--syn-spacing-large);
      }
    </style>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  AxesSplitLinesHidden,
  AxesSplitLinesVisible,
  HorizontalSplitLinesVisible,
  VerticalSplitLinesVisible,
  AxesLabelsHidden,
  AxesLinesVisibleWithLabelsHidden,
  AxesLabelsWithIcons
}, 700)`,...B.parameters?.docs?.source}}},V=[`AxesSplitLinesHidden`,`AxesSplitLinesVisible`,`HorizontalSplitLinesVisible`,`VerticalSplitLinesVisible`,`AxesLabelsHidden`,`AxesLinesVisibleWithLabelsHidden`,`AxesLabelsWithIcons`,`Screenshot`]}))();export{L as AxesLabelsHidden,z as AxesLabelsWithIcons,R as AxesLinesVisibleWithLabelsHidden,N as AxesSplitLinesHidden,P as AxesSplitLinesVisible,F as HorizontalSplitLinesVisible,B as Screenshot,I as VerticalSplitLinesVisible,V as __namedExportsOrder,M as default};