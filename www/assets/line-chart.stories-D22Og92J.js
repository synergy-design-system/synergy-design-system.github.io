import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{a as n,c as r,d as i,m as a,o,p as s}from"./preview-DXkhgu0Z.js";import{c,t as l}from"./lit-BfcklOOD.js";import{t as u}from"./react-DvlgmmzG.js";import{d,f,i as p,p as m,u as h}from"./blocks-Dyc7j8Lq.js";import{n as g,r as _,t as v}from"./waitForFinishedCharts-6JKuLrWI.js";import{n as y,r as b,t as x}from"./component-B0n0ooCL.js";import{n as S,t as C}from"./taggedTemplateLiteral-C9cDEsPD.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;t((()=>{w=e(u(),1),l(),m(),s(),_(),b(),o(),i(),v(),S(),N={component:`syn-chart`,parameters:{chromatic:{modes:r},design:n(`23-861`,!0),docs:{description:{component:y(`chart`,`line-chart-default`)},page:()=>w.createElement(w.Fragment,null,w.createElement(f,null),w.createElement(d,null),w.createElement(p,null),w.createElement(h,{title:``}))}},play:g,tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Line Chart`},P={parameters:{docs:{description:{story:y(`chart`,`line-chart-preset`)}}},render:()=>c(T||=C([`
    <syn-chart id="line-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-default');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
        ])
      });
    <\/script>
  `]))},F={parameters:{docs:{description:{story:y(`chart`,`line-series-curved`)}}},render:()=>c(E||=C([`
    <syn-chart id="line-series-curved"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-curved');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      const lineData = [[820, 932, 901, 934, 1290, 1330, 1320], [620, 732, 701, 734, 1090, 1130, 1120]];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine(lineData.map(data => ({
            data,
            smooth: true,
          })));
      });
    <\/script>
  `]))},I={parameters:{docs:{description:{story:y(`chart`,`line-series-hidden-lines`)}}},render:()=>c(D||=C([`
    <syn-chart id="line-series-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-hidden');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      const lineData = [[820, 932, 901, 934, 1290, 1330, 1320], [620, 732, 701, 734, 1090, 1130, 1120]];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine(lineData.map(data => ({
            data,
            lineStyle: {
              width: 0,
            },
            symbol: 'circle',
          })));
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:y(`chart`,`line-series-styles`)}}},render:()=>c(O||=C([`
    <syn-chart id="line-series-styles"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-styles');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Solid Line',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Dashed Line',
              lineStyle: {
                type: 'dashed',
              },
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Dotted Line',
              lineStyle: {
                type: 'dotted',
              },
            },
          ])
          .legendShow();
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:y(`chart`,`line-series-widths-symbol-sizes`)}}},render:()=>c(k||=C([`
    <syn-chart id="line-series-widths"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-widths');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Default',
              symbol: 'emptyCircle',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Width: 4',
              lineStyle: {
                width: 4,
              },
              symbol: 'emptyCircle',
              symbolSize: 10,
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Width: 8',
              lineStyle: {
                width: 8,
              },
              symbol: 'emptyCircle',
              symbolSize: 12,
            },
            {
              data: [220, 332, 301, 334, 690, 730, 720],
              name: 'Width: 12',
              lineStyle: {
                width: 12,
              },
              symbol: 'emptyCircle',
              symbolSize: 16,
            }
          ])
          .legendShow();
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:y(`chart`,`line-series-symbols`)}}},render:()=>c(A||=C([`
    <syn-chart id="line-series-symbols"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-symbols');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Empty circle symbol',
              symbol: 'emptyCircle',
            },
            {
              data: [720, 832, 801, 834, 1190, 1230, 1220],
              name: 'Circle symbol',
              symbol: 'circle',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Diamond symbol',
              symbol: 'diamond',
            },
            {
              data: [520, 632, 601, 634, 990, 1030, 1020],
              name: 'Triangle symbol',
              symbol: 'triangle',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Rect symbol',
              symbol: 'rect',
            },
            {
              data: [320, 432, 401, 434, 790, 830, 820],
              name: 'Pin symbol',
              symbol: 'pin',
            },
            {
              data: [220, 332, 301, 334, 690, 730, 720],
              name: 'Arrow symbol',
              symbol: 'arrow',
            },
            {
              data: [120, 232, 201, 234, 590, 630, 620],
              name: 'Round rect symbol',
              symbol: 'roundRect',
            },
            {
              data: [20, 132, 101, 134, 490, 530, 520],
              name: 'None symbol',
              symbol: 'none',
            },
          ])
          .legendShow( {}, { top: 140 });
      });
    <\/script>
  `]))},B={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:y(`chart`,`line-series-tooltip`)}}},play:async({canvasElement:e})=>{if(a()){let t=e.querySelector(`#line-series-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>c(j||=C([`
    <syn-chart id="line-series-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-tooltip');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .tooltipShow()
          .seriesLine([
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
        ]);
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:y(`chart`,`line-chart-positive-and-negative-values`)}}},render:()=>c(M||=C([`
    <syn-chart id="line-series-positive-and-negative-values"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-positive-and-negative-values');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowSplitLines()
          .seriesLine([
          {
            data: [-820, 932, -901, 934, -1290, 1330, 1320],
          },
          {
            data: [620, -32, -701, 734, 1090, -1130, 1120],
          },
        ])
      });
    <\/script>
  `]))},H=x({Default:P,CurvedLine:F,HiddenLine:I,MultipleLineStyles:L,MultipleLineWidthsAndSymbolSizes:R,MultipleSymbolStyles:z,PositiveAndNegativeValues:V},700),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-chart-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-default');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
        ])
      });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-series-curved')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-curved"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-curved');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      const lineData = [[820, 932, 901, 934, 1290, 1330, 1320], [620, 732, 701, 734, 1090, 1130, 1120]];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine(lineData.map(data => ({
            data,
            smooth: true,
          })));
      });
    <\/script>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-series-hidden-lines')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-hidden');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      const lineData = [[820, 932, 901, 934, 1290, 1330, 1320], [620, 732, 701, 734, 1090, 1130, 1120]];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine(lineData.map(data => ({
            data,
            lineStyle: {
              width: 0,
            },
            symbol: 'circle',
          })));
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-series-styles')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-styles"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-styles');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Solid Line',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Dashed Line',
              lineStyle: {
                type: 'dashed',
              },
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Dotted Line',
              lineStyle: {
                type: 'dotted',
              },
            },
          ])
          .legendShow();
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-series-widths-symbol-sizes')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-widths"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-widths');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Default',
              symbol: 'emptyCircle',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Width: 4',
              lineStyle: {
                width: 4,
              },
              symbol: 'emptyCircle',
              symbolSize: 10,
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Width: 8',
              lineStyle: {
                width: 8,
              },
              symbol: 'emptyCircle',
              symbolSize: 12,
            },
            {
              data: [220, 332, 301, 334, 690, 730, 720],
              name: 'Width: 12',
              lineStyle: {
                width: 12,
              },
              symbol: 'emptyCircle',
              symbolSize: 16,
            }
          ])
          .legendShow();
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-series-symbols')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-symbols"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-symbols');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Empty circle symbol',
              symbol: 'emptyCircle',
            },
            {
              data: [720, 832, 801, 834, 1190, 1230, 1220],
              name: 'Circle symbol',
              symbol: 'circle',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Diamond symbol',
              symbol: 'diamond',
            },
            {
              data: [520, 632, 601, 634, 990, 1030, 1020],
              name: 'Triangle symbol',
              symbol: 'triangle',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Rect symbol',
              symbol: 'rect',
            },
            {
              data: [320, 432, 401, 434, 790, 830, 820],
              name: 'Pin symbol',
              symbol: 'pin',
            },
            {
              data: [220, 332, 301, 334, 690, 730, 720],
              name: 'Arrow symbol',
              symbol: 'arrow',
            },
            {
              data: [120, 232, 201, 234, 590, 630, 620],
              name: 'Round rect symbol',
              symbol: 'roundRect',
            },
            {
              data: [20, 132, 101, 134, 490, 530, 520],
              name: 'None symbol',
              symbol: 'none',
            },
          ])
          .legendShow( {}, { top: 140 });
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-series-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Only run this code when running in Chromatic, as it is used to show the tooltip for the snapshot.
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#line-series-tooltip');
      if (!chart) return;
      const instance = chart.getInstance()!;
      const finishedPromise = new Promise<void>(resolve => {
        instance.on('finished', () => {
          instance.dispatchAction({
            type: 'showTip',
            x: 320,
            y: 50
          });
          resolve();
        });
      });
      await finishedPromise;
    }
  },
  render: () => html\`
    <syn-chart id="line-series-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-tooltip');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .tooltipShow()
          .seriesLine([
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
        ]);
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'line-chart-positive-and-negative-values')
      }
    }
  },
  render: () => html\`
    <syn-chart id="line-series-positive-and-negative-values"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#line-series-positive-and-negative-values');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .axesShowSplitLines()
          .seriesLine([
          {
            data: [-820, 932, -901, 934, -1290, 1330, 1320],
          },
          {
            data: [620, -32, -701, 734, 1090, -1130, 1120],
          },
        ])
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  CurvedLine,
  HiddenLine,
  MultipleLineStyles,
  MultipleLineWidthsAndSymbolSizes,
  MultipleSymbolStyles,
  PositiveAndNegativeValues
}, 700)`,...H.parameters?.docs?.source}}},U=[`Default`,`CurvedLine`,`HiddenLine`,`MultipleLineStyles`,`MultipleLineWidthsAndSymbolSizes`,`MultipleSymbolStyles`,`Tooltip`,`PositiveAndNegativeValues`,`Screenshot`]}))();export{F as CurvedLine,P as Default,I as HiddenLine,L as MultipleLineStyles,R as MultipleLineWidthsAndSymbolSizes,z as MultipleSymbolStyles,V as PositiveAndNegativeValues,H as Screenshot,B as Tooltip,U as __namedExportsOrder,N as default};