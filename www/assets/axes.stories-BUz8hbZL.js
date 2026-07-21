import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{a as n,c as r,d as i,o as a}from"./preview-B6MsgHSu.js";import{c as o,t as s}from"./lit-BfcklOOD.js";import{t as c}from"./react-DvlgmmzG.js";import{d as l,f as u,i as d,p as f,u as p}from"./blocks-CAkcEQY7.js";import{t as m}from"./select-BFZHBhPa.js";import{t as h}from"./option-DRjLNY3c.js";import{t as g}from"./chart-BVa9YRUb.js";import{n as _,r as v,t as y}from"./component-BQujXijc.js";import{n as b,t as x}from"./taggedTemplateLiteral-C9cDEsPD.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{S=e(c(),1),s(),m(),h(),f(),g(),v(),a(),i(),b(),A={component:`syn-chart`,parameters:{chromatic:{modes:r,pauseAnimationAtEnd:!1},design:n(`41094-279501`),docs:{description:{component:_(`chart`,`axes-default`)},page:()=>S.createElement(S.Fragment,null,S.createElement(u,null),S.createElement(l,null),S.createElement(d,null),S.createElement(p,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Axes`},j={parameters:{docs:{description:{story:_(`chart`,`axes-split-lines-hidden`)}}},render:()=>o(C||=x([`
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
  `]))},M={parameters:{docs:{description:{story:_(`chart`,`axes-split-lines-visible`)}}},render:()=>o(w||=x([`
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
  `]))},N={parameters:{docs:{description:{story:_(`chart`,`axes-horizontal-split-lines`)}}},render:()=>o(T||=x([`
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
  `]))},P={parameters:{docs:{description:{story:_(`chart`,`axes-vertical-split-lines`)}}},render:()=>o(E||=x([`
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
  `]))},F={parameters:{docs:{description:{story:_(`chart`,`axes-labels-hidden`)}}},render:()=>o(D||=x([`
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
  `]))},I={parameters:{docs:{description:{story:_(`chart`,`axes-lines-visible-labels-hidden`)}}},render:()=>o(O||=x([`
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
  `]))},L={parameters:{docs:{description:{story:_(`chart`,`axes-labels-with-icons`)}}},render:()=>o(k||=x([`
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
  `]))},R=y({AxesSplitLinesHidden:j,AxesSplitLinesVisible:M,HorizontalSplitLinesVisible:N,VerticalSplitLinesVisible:P,AxesLabelsHidden:F,AxesLinesVisibleWithLabelsHidden:I,AxesLabelsWithIcons:L},700),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  AxesSplitLinesHidden,
  AxesSplitLinesVisible,
  HorizontalSplitLinesVisible,
  VerticalSplitLinesVisible,
  AxesLabelsHidden,
  AxesLinesVisibleWithLabelsHidden,
  AxesLabelsWithIcons
}, 700)`,...R.parameters?.docs?.source}}},z=[`AxesSplitLinesHidden`,`AxesSplitLinesVisible`,`HorizontalSplitLinesVisible`,`VerticalSplitLinesVisible`,`AxesLabelsHidden`,`AxesLinesVisibleWithLabelsHidden`,`AxesLabelsWithIcons`,`Screenshot`]}))();export{F as AxesLabelsHidden,L as AxesLabelsWithIcons,I as AxesLinesVisibleWithLabelsHidden,j as AxesSplitLinesHidden,M as AxesSplitLinesVisible,N as HorizontalSplitLinesVisible,R as Screenshot,P as VerticalSplitLinesVisible,z as __namedExportsOrder,A as default};