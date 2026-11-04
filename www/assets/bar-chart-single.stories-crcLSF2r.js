import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-CxR-002Q.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,r as m,t as h}from"./chromatic-config-_lZf5ecc.js";import{n as g,r as _,t as v}from"./component-C3CNoVq_.js";import{n as y,t as b}from"./chart-series-documentation-CFcfON4D.js";import{t as x}from"./taggedTemplateLiteral-CWT6dLlS.js";import{t as S}from"./switch-BDN5pPC_.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=t((()=>{C=e(l(),1),r(),s(),m(),S(),f(),_(),y(),p(),window.ChartTokens=d,F={component:`syn-chart`,parameters:{chromatic:{...h},docs:{description:{component:g(`chart`,`bar-series-single-default`)},page:()=>C.createElement(C.Fragment,null,C.createElement(a,null),C.createElement(i,null),C.createElement(o,null),C.createElement(b,{section:`Bar series presets`}),C.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Bar Chart Single`},I={parameters:{docs:{description:{story:g(`chart`,`bar-series-single-preset`)}}},render:()=>n(w||=x([`
    <syn-chart id="bar-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-default');

      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Days',
            type: 'category',
          },
          yAxis: {
            name: 'Values',
          },
          series: [
            {
              data: [120, 180, 150, 80, 70, 110, 130],
              type: 'bar',
            },
          ]
        }
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:g(`chart`,`bar-series-vertical`)}}},render:()=>n(T||=x([`
    <syn-chart id="bar-series-single-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-vertical');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: { 
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:g(`chart`,`bar-series-horizontal`)}}},render:()=>n(E||=x([`
    <syn-chart id="bar-series-single-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-horizontal');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: { 
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:g(`chart`,`bar-series-value-range`)}}},render:()=>n(D||=x([`
    <syn-chart id="bar-series-single-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-value-range');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: { 
          min: 60,
          max: 200,
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:g(`chart`,`bar-series-negative`)}}},render:()=>n(O||=x([`
    <syn-chart id="bar-series-single-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-negative');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: {
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [-120, -175, -150, -80, -70, -110, -130],
            },
          ])
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:g(`chart`,`bar-series-positive-and-negative`)}}},render:()=>n(k||=x([`
    <syn-chart id="bar-series-single-positive-and-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-positive-and-negative');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [ 100, -120, 150, -80, 70, -110, 130],
            },
          ])
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:g(`chart`,`bar-series-custom-width`)}}},render:()=>n(A||=x([`
    <syn-chart id="bar-series-single-fixed-width"></syn-chart>
    <syn-chart id="bar-series-single-relative-width"></syn-chart>
    <script type="module">
      const fixedWidthCharts = document.querySelectorAll('#bar-series-single-fixed-width');
      const relativeWidthCharts = document.querySelectorAll('#bar-series-single-relative-width');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C'],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      fixedWidthCharts.forEach((fixed) => {
        fixed.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            { 
              barWidth: 40,
              barMaxWidth: 40,
              data: [120, 180, 150],
            }
          ]);
      });


      relativeWidthCharts.forEach((relative) => {
        relative.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              barWidth: '30%',
              data: [120, 180, 150],
            }
          ]);
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:g(`chart`,`bar-series-custom-color`)}}},render:()=>n(j||=x([`
    <syn-chart id="bar-series-single-custom-color"></syn-chart>
    <script type="module">
      const getChartColor = token => ChartTokens[token]['light'];
      const charts = document.querySelectorAll('#bar-series-single-custom-color');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C'],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
        color: [getChartColor('SynChartSequential02_70')],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([{ data: [120, 180, 150] }]);
      });
    <\/script>
  `]))},W={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`bar-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bar-series-single-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(M||=x([`
    <syn-chart id="bar-series-single-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-tooltip');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: { 
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
          .tooltipShow({ axisPointer: { type: 'shadow' } })
      });
    <\/script>
  `]))},G={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`bar-series-selected-mode`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bar-series-single-selected-mode`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({dataIndex:[1,3],seriesIndex:0,type:`select`}),e()})})}},render:()=>n(N||=x([`
    <syn-chart id="bar-series-single-selected-mode"></syn-chart>
    <div class="syn-body--medium">
      Selected day: <span id="bar-series-selected-day" >-</span>
    </div>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-selected-mode');
      const status = document.querySelectorAll('#bar-series-selected-day');
      const values = [120, 180, 150, 80, 70, 110, 130];
      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: values,
              selectedMode: 'single',
            },
          ]);

        const instance = chart.getInstance();
        instance.on('selectchanged', ({ selected }) => {
          const selectedIndex = selected.flatMap(item => item.dataIndex)[0];
          status.forEach(el => {
            el.textContent = selectedIndex !== undefined
              ? baseConfig.xAxis.data[selectedIndex] + ' (' + values[selectedIndex] + ')'
              : '-';
          });
        });
      });
    <\/script>
  `]))},K={parameters:{docs:{description:{story:g(`chart`,`bar-series-large-data`)}}},render:()=>n(P||=x([`
    <div style="display: flex; align-items: flex-start; flex-direction: column; gap: var(--syn-spacing-medium); margin-bottom: var(--syn-spacing-small);">
      <syn-switch id="bar-chart-single-large-toggle" checked>Optimize rendering</syn-switch>
      <span id="bar-chart-single-large-status" class="syn-body--medium"></span>
    </div>
    <syn-chart id="bar-chart-single-large-data"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-chart-single-large-data');
      const largeToggles = document.querySelectorAll('#bar-chart-single-large-toggle');
      const statuses = document.querySelectorAll('#bar-chart-single-large-status');
      const length = 4e4;
      const categories = Array.from({ length }, (_, index) => String(index + 1));
      const segmentSize = 2000;
      const levels = [
        5000, 4500, 5300, 6100, 3900, 6800, 7200, 8600, 9000, 7000,
        5900, 4500, 4100, 5000, 5800, 6500, 6000, 5200, 4200, 3600,
        4000,
      ];
      // Interpolate the trend levels and add deterministic variation to each data point.
      const values = Array.from({ length }, (_, index) => {
        const segment = Math.floor(index / segmentSize);
        const progress = (index % segmentSize) / segmentSize;
        const level = levels[segment] + (levels[segment + 1] - levels[segment]) * progress;
        const variation = Math.sin(index * 0.7548776662) * 700
          + Math.sin(index * 1.3247179572 + 0.3) * 800
          + Math.sin(index * 2.4142135624 + 0.7) * 300
          + Math.sin(index * 4.123105626 + 1.1) * 200;
        return Math.max(0, Math.round(level + variation));
      });

      const baseConfig = {
        xAxis: {
          data: categories,
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
        dataZoom: [{
          type: 'slider',
        }],
        grid: {
          bottom: 120,
        }
      };

      largeToggles.forEach((largeToggle, index) => {
        const chart = charts[index];
        const status = statuses[index];
        if (!chart || !status) return;

        const updateChart = () => {
          const large = largeToggle.checked;
          status.textContent = large
            ? 'Performance optimization: enabled'
            : 'Performance optimization: disabled';
          chart.config = handle => handle
            .baseConfig(baseConfig)
            .seriesBar([{
              data: values,
              large,
              largeThreshold: 1000,
            }]);
        };

        largeToggle.addEventListener('syn-change', updateChart);
        updateChart();
      });
    <\/script>
  `]))},q=v({Default:I,Vertical:L,Horizontal:R,FixedValueRange:z,NegativeValues:B,PositiveAndNegative:V,CustomBarWidth:H,CustomColors:U,LargeDataSet:K},700),J=[`Default`,`Vertical`,`Horizontal`,`FixedValueRange`,`NegativeValues`,`PositiveAndNegative`,`CustomBarWidth`,`CustomColors`,`Tooltip`,`SelectedMode`,`LargeDataSet`,`Screenshot`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-single-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-default');

      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Days',
            type: 'category',
          },
          yAxis: {
            name: 'Values',
          },
          series: [
            {
              data: [120, 180, 150, 80, 70, 110, 130],
              type: 'bar',
            },
          ]
        }
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-vertical')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-vertical');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: { 
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-horizontal')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-horizontal');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: { 
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-value-range')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-value-range');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: { 
          min: 60,
          max: 200,
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-negative')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-negative');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: {
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [-120, -175, -150, -80, -70, -110, -130],
            },
          ])
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-positive-and-negative')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-positive-and-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-positive-and-negative');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [ 100, -120, 150, -80, 70, -110, 130],
            },
          ])
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-custom-width')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-fixed-width"></syn-chart>
    <syn-chart id="bar-series-single-relative-width"></syn-chart>
    <script type="module">
      const fixedWidthCharts = document.querySelectorAll('#bar-series-single-fixed-width');
      const relativeWidthCharts = document.querySelectorAll('#bar-series-single-relative-width');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C'],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      fixedWidthCharts.forEach((fixed) => {
        fixed.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            { 
              barWidth: 40,
              barMaxWidth: 40,
              data: [120, 180, 150],
            }
          ]);
      });


      relativeWidthCharts.forEach((relative) => {
        relative.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              barWidth: '30%',
              data: [120, 180, 150],
            }
          ]);
      });
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-custom-color')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-custom-color"></syn-chart>
    <script type="module">
      const getChartColor = token => ChartTokens[token]['light'];
      const charts = document.querySelectorAll('#bar-series-single-custom-color');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C'],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
        color: [getChartColor('SynChartSequential02_70')],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([{ data: [120, 180, 150] }]);
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Only run this code when running in Chromatic, as it is used to show the tooltip for the snapshot.
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#bar-series-single-tooltip');
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
    <syn-chart id="bar-series-single-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-tooltip');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: { 
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
          ])
          .tooltipShow({ axisPointer: { type: 'shadow' } })
      });
    <\/script>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-selected-mode')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#bar-series-single-selected-mode');
      if (!chart) return;
      const instance = chart.getInstance()!;
      const finishedPromise = new Promise<void>(resolve => {
        instance.on('finished', () => {
          instance.dispatchAction({
            dataIndex: [1, 3],
            seriesIndex: 0,
            type: 'select'
          });
          resolve();
        });
      });
      await finishedPromise;
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-single-selected-mode"></syn-chart>
    <div class="syn-body--medium">
      Selected day: <span id="bar-series-selected-day" >-</span>
    </div>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-single-selected-mode');
      const status = document.querySelectorAll('#bar-series-selected-day');
      const values = [120, 180, 150, 80, 70, 110, 130];
      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: values,
              selectedMode: 'single',
            },
          ]);

        const instance = chart.getInstance();
        instance.on('selectchanged', ({ selected }) => {
          const selectedIndex = selected.flatMap(item => item.dataIndex)[0];
          status.forEach(el => {
            el.textContent = selectedIndex !== undefined
              ? baseConfig.xAxis.data[selectedIndex] + ' (' + values[selectedIndex] + ')'
              : '-';
          });
        });
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-large-data')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; align-items: flex-start; flex-direction: column; gap: var(--syn-spacing-medium); margin-bottom: var(--syn-spacing-small);">
      <syn-switch id="bar-chart-single-large-toggle" checked>Optimize rendering</syn-switch>
      <span id="bar-chart-single-large-status" class="syn-body--medium"></span>
    </div>
    <syn-chart id="bar-chart-single-large-data"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-chart-single-large-data');
      const largeToggles = document.querySelectorAll('#bar-chart-single-large-toggle');
      const statuses = document.querySelectorAll('#bar-chart-single-large-status');
      const length = 4e4;
      const categories = Array.from({ length }, (_, index) => String(index + 1));
      const segmentSize = 2000;
      const levels = [
        5000, 4500, 5300, 6100, 3900, 6800, 7200, 8600, 9000, 7000,
        5900, 4500, 4100, 5000, 5800, 6500, 6000, 5200, 4200, 3600,
        4000,
      ];
      // Interpolate the trend levels and add deterministic variation to each data point.
      const values = Array.from({ length }, (_, index) => {
        const segment = Math.floor(index / segmentSize);
        const progress = (index % segmentSize) / segmentSize;
        const level = levels[segment] + (levels[segment + 1] - levels[segment]) * progress;
        const variation = Math.sin(index * 0.7548776662) * 700
          + Math.sin(index * 1.3247179572 + 0.3) * 800
          + Math.sin(index * 2.4142135624 + 0.7) * 300
          + Math.sin(index * 4.123105626 + 1.1) * 200;
        return Math.max(0, Math.round(level + variation));
      });

      const baseConfig = {
        xAxis: {
          data: categories,
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
        dataZoom: [{
          type: 'slider',
        }],
        grid: {
          bottom: 120,
        }
      };

      largeToggles.forEach((largeToggle, index) => {
        const chart = charts[index];
        const status = statuses[index];
        if (!chart || !status) return;

        const updateChart = () => {
          const large = largeToggle.checked;
          status.textContent = large
            ? 'Performance optimization: enabled'
            : 'Performance optimization: disabled';
          chart.config = handle => handle
            .baseConfig(baseConfig)
            .seriesBar([{
              data: values,
              large,
              largeThreshold: 1000,
            }]);
        };

        largeToggle.addEventListener('syn-change', updateChart);
        updateChart();
      });
    <\/script>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Vertical,
  Horizontal,
  FixedValueRange,
  NegativeValues,
  PositiveAndNegative,
  CustomBarWidth,
  CustomColors,
  LargeDataSet
}, 700)`,...q.parameters?.docs?.source}}}})))()}Y();export{H as CustomBarWidth,U as CustomColors,I as Default,z as FixedValueRange,R as Horizontal,K as LargeDataSet,B as NegativeValues,V as PositiveAndNegative,q as Screenshot,G as SelectedMode,W as Tooltip,L as Vertical,J as __namedExportsOrder,F as default};