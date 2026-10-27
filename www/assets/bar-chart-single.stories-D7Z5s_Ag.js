import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,r as m,t as h}from"./chromatic-config-BMgBWGtT.js";import{n as g,r as _,t as v}from"./component-duAHVJ0I.js";import{t as y}from"./taggedTemplateLiteral-CWT6dLlS.js";import{n as b,t as x}from"./chart-series-documentation-Cn0snMjG.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{S=e(l(),1),r(),s(),m(),f(),_(),b(),p(),window.ChartTokens=d,N={component:`syn-chart`,parameters:{chromatic:{...h},docs:{description:{component:g(`chart`,`bar-series-single-default`)},page:()=>S.createElement(S.Fragment,null,S.createElement(a,null),S.createElement(i,null),S.createElement(o,null),S.createElement(x,{section:`Bar series presets`}),S.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Bar Chart Single`},P={parameters:{docs:{description:{story:g(`chart`,`bar-series-single-preset`)}}},render:()=>n(C||=y([`
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
  `]))},F={parameters:{docs:{description:{story:g(`chart`,`bar-series-vertical`)}}},render:()=>n(w||=y([`
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
  `]))},I={parameters:{docs:{description:{story:g(`chart`,`bar-series-horizontal`)}}},render:()=>n(T||=y([`
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
  `]))},L={parameters:{docs:{description:{story:g(`chart`,`bar-series-value-range`)}}},render:()=>n(E||=y([`
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
  `]))},R={parameters:{docs:{description:{story:g(`chart`,`bar-series-negative`)}}},render:()=>n(D||=y([`
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
  `]))},z={parameters:{docs:{description:{story:g(`chart`,`bar-series-positive-and-negative`)}}},render:()=>n(O||=y([`
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
  `]))},B={parameters:{docs:{description:{story:g(`chart`,`bar-series-custom-width`)}}},render:()=>n(k||=y([`
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
  `]))},V={parameters:{docs:{description:{story:g(`chart`,`bar-series-custom-color`)}}},render:()=>n(A||=y([`
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
  `]))},H={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`bar-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bar-series-single-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(j||=y([`
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
  `]))},U={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`bar-series-selected-mode`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bar-series-single-selected-mode`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({dataIndex:[1,3],seriesIndex:0,type:`select`}),e()})})}},render:()=>n(M||=y([`
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
  `]))},W=v({Default:P,Vertical:F,Horizontal:I,FixedValueRange:L,NegativeValues:R,PositiveAndNegative:z,CustomBarWidth:B,CustomColors:V},700),G=[`Default`,`Vertical`,`Horizontal`,`FixedValueRange`,`NegativeValues`,`PositiveAndNegative`,`CustomBarWidth`,`CustomColors`,`Tooltip`,`SelectedMode`,`Screenshot`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Vertical,
  Horizontal,
  FixedValueRange,
  NegativeValues,
  PositiveAndNegative,
  CustomBarWidth,
  CustomColors
}, 700)`,...W.parameters?.docs?.source}}}})))()}K();export{B as CustomBarWidth,V as CustomColors,P as Default,L as FixedValueRange,I as Horizontal,R as NegativeValues,z as PositiveAndNegative,W as Screenshot,U as SelectedMode,H as Tooltip,F as Vertical,G as __namedExportsOrder,N as default};