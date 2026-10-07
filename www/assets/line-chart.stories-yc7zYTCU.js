import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,t as r}from"./lit-D4-0ovri.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Cw7zwOlI.js";import{t as l}from"./react-Q1GcV6wX.js";import{n as u}from"./isChromatic-3XEt0aYp.js";import{n as d,r as f,t as p}from"./chromatic-config-DEqEAZ11.js";import{n as m,r as h,t as g}from"./component-1Z3hZXYb.js";import{t as _}from"./taggedTemplateLiteral-BZenJ0bZ.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{v=e(l(),1),r(),s(),f(),h(),d(),D={component:`syn-chart`,parameters:{chromatic:{...p},docs:{description:{component:m(`chart`,`line-chart-default`)},page:()=>v.createElement(v.Fragment,null,v.createElement(a,null),v.createElement(i,null),v.createElement(o,null),v.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Line Chart`},O={parameters:{docs:{description:{story:m(`chart`,`line-chart-preset`)}}},render:()=>n(y||=_([`
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
  `]))},k={parameters:{docs:{description:{story:m(`chart`,`line-series-curved`)}}},render:()=>n(b||=_([`
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
  `]))},A={parameters:{docs:{description:{story:m(`chart`,`line-series-hidden-lines`)}}},render:()=>n(x||=_([`
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
  `]))},j={parameters:{docs:{description:{story:m(`chart`,`line-series-styles`)}}},render:()=>n(S||=_([`
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
  `]))},M={parameters:{docs:{description:{story:m(`chart`,`line-series-widths-symbol-sizes`)}}},render:()=>n(C||=_([`
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
  `]))},N={parameters:{docs:{description:{story:m(`chart`,`line-series-symbols`)}}},render:()=>n(w||=_([`
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
  `]))},P={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:m(`chart`,`line-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#line-series-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(T||=_([`
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
  `]))},F={parameters:{docs:{description:{story:m(`chart`,`line-chart-positive-and-negative-values`)}}},render:()=>n(E||=_([`
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
  `]))},I=g({Default:O,CurvedLine:k,HiddenLine:A,MultipleLineStyles:j,MultipleLineWidthsAndSymbolSizes:M,MultipleSymbolStyles:N,PositiveAndNegativeValues:F},700),L=[`Default`,`CurvedLine`,`HiddenLine`,`MultipleLineStyles`,`MultipleLineWidthsAndSymbolSizes`,`MultipleSymbolStyles`,`Tooltip`,`PositiveAndNegativeValues`,`Screenshot`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  CurvedLine,
  HiddenLine,
  MultipleLineStyles,
  MultipleLineWidthsAndSymbolSizes,
  MultipleSymbolStyles,
  PositiveAndNegativeValues
}, 700)`,...I.parameters?.docs?.source}}}})))()}R();export{k as CurvedLine,O as Default,A as HiddenLine,j as MultipleLineStyles,M as MultipleLineWidthsAndSymbolSizes,N as MultipleSymbolStyles,F as PositiveAndNegativeValues,I as Screenshot,P as Tooltip,L as __namedExportsOrder,D as default};