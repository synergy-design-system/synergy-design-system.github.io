import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,r as m,t as h}from"./chromatic-config-BU3qlFWk.js";import{n as g,r as _,t as v}from"./component-C3CNoVq_.js";import{n as y,t as b}from"./chart-series-documentation-4QV8F8Mx.js";import{t as x}from"./taggedTemplateLiteral-CWT6dLlS.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{S=e(l(),1),r(),s(),m(),f(),_(),y(),p(),window.ChartTokens=d,N={component:`syn-chart`,parameters:{chromatic:{...h},docs:{description:{component:g(`chart`,`area-range-series-default`)},page:()=>S.createElement(S.Fragment,null,S.createElement(a,null),S.createElement(i,null),S.createElement(o,null),S.createElement(b,{section:`Area range series presets`}),S.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Area Range Chart`},P={parameters:{docs:{description:{story:g(`chart`,`area-range-series-preset`)}}},render:()=>n(C||=x([`
    <syn-chart id="area-range-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-default');

      const lower = [620, 732, 701, 734, 1090, 1130, 1120];
      const upper = [820, 1032, 901, 1134, 1390, 1430, 1320];
      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'category', name: 'Days',
          },
          yAxis: { type: 'value', name: 'Values' },
          tooltip: {},
          series: [
            {
              data: lower,
              stack: 'arearange',
              name: 'Series A',
              type: 'line',
              tooltip: {
                show: false,
              },
            },
            {
              data: upper.map((value, index) => value - lower[index]),
              stack: 'arearange',
              type: 'line',
              name: 'Series A',
              areaStyle: { opacity: 0.2 },
              tooltip: {
                valueFormatter: (_, dataIndex) => lower[dataIndex] + " - " + upper[dataIndex],
              },
            }
          ],
        };
      });
    <\/script>
  `]))},F={parameters:{docs:{description:{story:g(`chart`,`area-range-series-curved`)}}},render:()=>n(w||=x([`
    <syn-chart id="area-range-series-curved"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-curved');

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
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            { smooth: true },
          );
      });
    <\/script>
  `]))},I={parameters:{docs:{description:{story:g(`chart`,`area-range-series-hidden-lines`)}}},render:()=>n(T||=x([`
    <syn-chart id="area-range-series-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-hidden');

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
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              lineStyle: {
                width: 0,
              },
              symbol: 'circle',
            }
          );
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:g(`chart`,`area-range-series-line-styles`)}}},render:()=>n(E||=x([`
    <syn-chart id="area-range-series-line-styles"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-line-styles');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              lineStyle: { type: 'solid', width: 2 },
              name: 'Solid, 2 px',
            }
          )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
            {
              lineStyle: { type: 'dashed', width: 4 },
              name: 'Dashed, 4 px',
            }
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
            {
              lineStyle: { type: 'dotted', width: 6 },
              name: 'Dotted, 6 px',
            }
          )
          .legendShow();
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:g(`chart`,`area-range-series-symbols`)}}},render:()=>n(D||=x([`
    <syn-chart id="area-range-series-symbols"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-symbols');

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
          .seriesAreaRange(
            [[7170, 7470], [7282, 7582], [7251, 7551], [7284, 7584], [7640, 7940], [7680, 7980], [7670, 7970]],
            {
              name: 'Empty circle',
              symbol: 'emptyCircle',
              symbolSize: 8,
            },
          )
          .seriesAreaRange(
            [[6270, 6570], [6382, 6682], [6351, 6651], [6384, 6684], [6740, 7040], [6780, 7080], [6770, 7070]],
            {
              name: 'Circle',
              symbol: 'circle',
              symbolSize: 10,
            },
          )
          .seriesAreaRange(
            [[5370, 5670], [5482, 5782], [5451, 5751], [5484, 5784], [5840, 6140], [5880, 6180], [5870, 6170]],
            {
              name: 'Diamond',
              symbol: 'diamond',
              symbolSize: 14,
            },
          )
          .seriesAreaRange(
            [[4470, 4770], [4582, 4882], [4551, 4851], [4584, 4884], [4940, 5240], [4980, 5280], [4970, 5270]],
            {
              name: 'Triangle',
              symbol: 'triangle',
              symbolSize: 12,
            },
          )
          .seriesAreaRange(
            [[3570, 3870], [3682, 3982], [3651, 3951], [3684, 3984], [4040, 4340], [4080, 4380], [4070, 4370]],
            {
              name: 'Rect',
              symbol: 'rect',
              symbolSize: 12,
            },
          )
          .seriesAreaRange(
            [[2670, 2970], [2782, 3082], [2751, 3051], [2784, 3084], [3140, 3440], [3180, 3480], [3170, 3470]],
            {
              name: 'Pin',
              symbol: 'pin',
              symbolSize: 16,
            },
          )
          .seriesAreaRange(
            [[1770, 2070], [1882, 2182], [1851, 2151], [1884, 2184], [2240, 2540], [2280, 2580], [2270, 2570]],
            {
              name: 'Arrow',
              symbol: 'arrow',
              symbolSize: 14,
            },
          )
          .seriesAreaRange(
            [[870, 1170], [982, 1282], [951, 1251], [984, 1284], [1340, 1640], [1380, 1680], [1370, 1670]],
            {
              name: 'Round rect',
              symbol: 'roundRect',
              symbolSize: 12,
            },
          )
          .seriesAreaRange(
            [[30, 270], [82, 382], [51, 351], [84, 384], [440, 740], [480, 780], [470, 770]],
            {
              name: 'None',
              symbol: 'none',
            },
          )
          .legendShow({}, { top: 140 });
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:g(`chart`,`area-range-series-palette`)}}},render:()=>n(O||=x([`
    <syn-chart id="area-range-series-palettes" palette="sequential-01"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-palettes');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
          )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
          );
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:g(`chart`,`area-range-series-custom-colors`)}}},render:()=>n(k||=x([`
    <syn-chart id="area-range-series-custom-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const charts = document.querySelectorAll('#area-range-series-custom-colors');
      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
        color: [
          getChartColor('SynChartSequential02_80'),
          getChartColor('SynChartSequential02_70'),
          getChartColor('SynChartSequential02_50'),
        ],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
          )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
          );
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:g(`chart`,`area-range-series-positive-and-negative-values`)}}},render:()=>n(A||=x([`
    <syn-chart id="area-range-series-positive-and-negative-values"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-positive-and-negative-values');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[-280, -120], [-220, -40], [-80, 140], [50, 260], [120, 290], [-170, 180], [-260, 240]],
          );
      });
    <\/script>
  `]))},H={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`area-range-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#area-range-series-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(j||=x([`
    <syn-chart id="area-range-series-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-tooltip');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              name: 'Series A',
            }
            )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
            {
              name: 'Series B',
            }
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
            {
              name: 'Series C',
            }
          )
          .tooltipShow();
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:g(`chart`,`area-range-series-with-legend`)}}},render:()=>n(M||=x([`
    <syn-chart id="area-range-series-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-legend');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            legend: { selectedMode: 'multiple' },
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              name: 'Series A',
            }
            )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
            {
              name: 'Series B',
            }
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
            {
              name: 'Series C',
            }
          )
          .legendShow();
      });
    <\/script>
  `]))},W=v({Default:P,CurvedLine:F,HiddenLine:I,LineStylesAndWidths:L,SymbolStylesAndSizes:R,ColorPalettes:z,CustomColors:B,PositiveAndNegativeValues:V,WithLegend:U},700),G=[`Default`,`CurvedLine`,`HiddenLine`,`LineStylesAndWidths`,`SymbolStylesAndSizes`,`ColorPalettes`,`CustomColors`,`PositiveAndNegativeValues`,`Tooltip`,`WithLegend`,`Screenshot`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-default');

      const lower = [620, 732, 701, 734, 1090, 1130, 1120];
      const upper = [820, 1032, 901, 1134, 1390, 1430, 1320];
      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'category', name: 'Days',
          },
          yAxis: { type: 'value', name: 'Values' },
          tooltip: {},
          series: [
            {
              data: lower,
              stack: 'arearange',
              name: 'Series A',
              type: 'line',
              tooltip: {
                show: false,
              },
            },
            {
              data: upper.map((value, index) => value - lower[index]),
              stack: 'arearange',
              type: 'line',
              name: 'Series A',
              areaStyle: { opacity: 0.2 },
              tooltip: {
                valueFormatter: (_, dataIndex) => lower[dataIndex] + " - " + upper[dataIndex],
              },
            }
          ],
        };
      });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-curved')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-curved"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-curved');

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
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            { smooth: true },
          );
      });
    <\/script>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-hidden-lines')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-hidden');

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
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              lineStyle: {
                width: 0,
              },
              symbol: 'circle',
            }
          );
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-line-styles')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-line-styles"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-line-styles');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              lineStyle: { type: 'solid', width: 2 },
              name: 'Solid, 2 px',
            }
          )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
            {
              lineStyle: { type: 'dashed', width: 4 },
              name: 'Dashed, 4 px',
            }
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
            {
              lineStyle: { type: 'dotted', width: 6 },
              name: 'Dotted, 6 px',
            }
          )
          .legendShow();
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-symbols')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-symbols"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-symbols');

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
          .seriesAreaRange(
            [[7170, 7470], [7282, 7582], [7251, 7551], [7284, 7584], [7640, 7940], [7680, 7980], [7670, 7970]],
            {
              name: 'Empty circle',
              symbol: 'emptyCircle',
              symbolSize: 8,
            },
          )
          .seriesAreaRange(
            [[6270, 6570], [6382, 6682], [6351, 6651], [6384, 6684], [6740, 7040], [6780, 7080], [6770, 7070]],
            {
              name: 'Circle',
              symbol: 'circle',
              symbolSize: 10,
            },
          )
          .seriesAreaRange(
            [[5370, 5670], [5482, 5782], [5451, 5751], [5484, 5784], [5840, 6140], [5880, 6180], [5870, 6170]],
            {
              name: 'Diamond',
              symbol: 'diamond',
              symbolSize: 14,
            },
          )
          .seriesAreaRange(
            [[4470, 4770], [4582, 4882], [4551, 4851], [4584, 4884], [4940, 5240], [4980, 5280], [4970, 5270]],
            {
              name: 'Triangle',
              symbol: 'triangle',
              symbolSize: 12,
            },
          )
          .seriesAreaRange(
            [[3570, 3870], [3682, 3982], [3651, 3951], [3684, 3984], [4040, 4340], [4080, 4380], [4070, 4370]],
            {
              name: 'Rect',
              symbol: 'rect',
              symbolSize: 12,
            },
          )
          .seriesAreaRange(
            [[2670, 2970], [2782, 3082], [2751, 3051], [2784, 3084], [3140, 3440], [3180, 3480], [3170, 3470]],
            {
              name: 'Pin',
              symbol: 'pin',
              symbolSize: 16,
            },
          )
          .seriesAreaRange(
            [[1770, 2070], [1882, 2182], [1851, 2151], [1884, 2184], [2240, 2540], [2280, 2580], [2270, 2570]],
            {
              name: 'Arrow',
              symbol: 'arrow',
              symbolSize: 14,
            },
          )
          .seriesAreaRange(
            [[870, 1170], [982, 1282], [951, 1251], [984, 1284], [1340, 1640], [1380, 1680], [1370, 1670]],
            {
              name: 'Round rect',
              symbol: 'roundRect',
              symbolSize: 12,
            },
          )
          .seriesAreaRange(
            [[30, 270], [82, 382], [51, 351], [84, 384], [440, 740], [480, 780], [470, 770]],
            {
              name: 'None',
              symbol: 'none',
            },
          )
          .legendShow({}, { top: 140 });
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-palette')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-palettes" palette="sequential-01"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-palettes');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
          )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
          );
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-custom-colors')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-custom-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const charts = document.querySelectorAll('#area-range-series-custom-colors');
      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
        color: [
          getChartColor('SynChartSequential02_80'),
          getChartColor('SynChartSequential02_70'),
          getChartColor('SynChartSequential02_50'),
        ],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
          )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
          );
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-positive-and-negative-values')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-positive-and-negative-values"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-positive-and-negative-values');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[-280, -120], [-220, -40], [-80, 140], [50, 260], [120, 290], [-170, 180], [-260, 240]],
          );
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#area-range-series-tooltip');
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
    <syn-chart id="area-range-series-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-tooltip');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              name: 'Series A',
            }
            )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
            {
              name: 'Series B',
            }
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
            {
              name: 'Series C',
            }
          )
          .tooltipShow();
      });
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-range-series-with-legend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-range-series-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-range-series-legend');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            legend: { selectedMode: 'multiple' },
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesAreaRange(
            [[620, 820], [732, 932], [701, 901], [734, 934], [1090, 1290], [1130, 1330], [1120, 1320]],
            {
              name: 'Series A',
            }
            )
          .seriesAreaRange(
            [[370, 520], [482, 682], [451, 631], [484, 714], [840, 1040], [880, 1080], [870, 1070]],
            {
              name: 'Series B',
            }
          )
          .seriesAreaRange(
            [[120, 270], [232, 382], [201, 351], [234, 384], [590, 740], [630, 780], [620, 770]],
            {
              name: 'Series C',
            }
          )
          .legendShow();
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  CurvedLine,
  HiddenLine,
  LineStylesAndWidths,
  SymbolStylesAndSizes,
  ColorPalettes,
  CustomColors,
  PositiveAndNegativeValues,
  WithLegend
}, 700)`,...W.parameters?.docs?.source}}}})))()}K();export{z as ColorPalettes,F as CurvedLine,B as CustomColors,P as Default,I as HiddenLine,L as LineStylesAndWidths,V as PositiveAndNegativeValues,W as Screenshot,R as SymbolStylesAndSizes,H as Tooltip,U as WithLegend,G as __namedExportsOrder,N as default};