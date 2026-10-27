import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,r as m,t as h}from"./chromatic-config-BMgBWGtT.js";import{n as g,r as _,t as v}from"./component-duAHVJ0I.js";import{t as y}from"./taggedTemplateLiteral-CWT6dLlS.js";import{n as b,t as x}from"./chart-series-documentation-Cn0snMjG.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=t((()=>{S=e(l(),1),r(),s(),m(),f(),_(),b(),p(),window.ChartTokens=d,F={component:`syn-chart`,parameters:{chromatic:{...h},docs:{description:{component:g(`chart`,`bar-series-grouped-default`)},page:()=>S.createElement(S.Fragment,null,S.createElement(a,null),S.createElement(i,null),S.createElement(o,null),S.createElement(x,{section:`Bar series presets`}),S.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Bar Chart Grouped`},I={parameters:{docs:{description:{story:g(`chart`,`bar-series-grouped-preset`)}}},render:()=>n(C||=y([`
    <syn-chart id="bar-series-grouped-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-default');

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
            {
              data: [80, 130, 100, 70, 90, 160, 140],
              type: 'bar',
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
              type: 'bar',
            },
          ]
        }
      });
    <\/script>
    `]))},L={parameters:{docs:{description:{story:g(`chart`,`bar-series-vertical`)}}},render:()=>n(w||=y([`
    <syn-chart id="bar-series-grouped-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-vertical');

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
            {
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
            },
          ])
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:g(`chart`,`bar-series-horizontal`)}}},render:()=>n(T||=y([`
    <syn-chart id="bar-series-grouped-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-horizontal');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
            }
          ])
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:g(`chart`,`bar-series-value-range`)}}},render:()=>n(E||=y([`
    <syn-chart id="bar-series-grouped-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-value-range');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: {
          min: 40,
          max: 200,
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
            },
          ])
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:g(`chart`,`bar-series-negative`)}}},render:()=>n(D||=y([`
    <syn-chart id="bar-series-grouped-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-negative');

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
              data: [-120, -180, -150, -80, -70, -110, -130],
            },
            {
              data: [-80, -130, -100, -70, -90, -160, -140],
            },
            {
              data: [-90, -120, -140, -100, -110, -70, -80],
            },
          ])
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:g(`chart`,`bar-series-positive-and-negative`)}}},render:()=>n(O||=y([`
    <syn-chart id="bar-series-grouped-positive-and-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-positive-and-negative');

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
              data: [100, -120, 150, -80, 70, -110, 130],
            },
            {
              data: [60, -40, -20, -60, 30, -80, -50],
            },
            {
              data: [120, -70, 50, -90, 80, -40, 140],
            },
          ])
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:g(`chart`,`bar-series-custom-width`)}}},render:()=>n(k||=y([`
    <syn-chart id="bar-series-grouped-bar-width"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-bar-width');

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
              barWidth: 40,
              barMaxWidth: 40,
              data: [120, 180, 150, 80, 70, 110, 130],
            },
            {
              barWidth: '30%',
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              barWidth: '10%',
              data: [90, 120, 140, 100, 110, 70, 60],
            }
          ])
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:g(`chart`,`bar-series-custom-color`)}}},render:()=>n(A||=y([`
    <syn-chart id="bar-series-grouped-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const charts = document.querySelectorAll('#bar-series-grouped-colors');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C',],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
        color: [
          getChartColor('SynChartSequential02_80'),
          getChartColor('SynChartSequential02_70'),
          getChartColor('SynChartSequential02_50'),
        ],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150],
            },
            {
              data: [80, 130, 100],
            },
            {
              data: [90, 120, 140],
            },
          ])
      });
    <\/script>
  `]))},W={parameters:{docs:{description:{story:g(`chart`,`bar-series-palette`)}}},render:()=>n(j||=y([`
    <syn-chart id="bar-series-grouped-categorical"></syn-chart>
    <syn-chart id="bar-series-grouped-sequential"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const categoricalCharts = document.querySelectorAll('#bar-series-grouped-categorical');
      const sequentialCharts = document.querySelectorAll(' #bar-series-grouped-sequential');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C',],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      categoricalCharts.forEach(categorical => {
        categorical.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150],
            },
            {
              data: [80, 130, 100],
            },
            {
              data: [90, 120, 140],
            },
            {
              data: [110, 140, 170],
            },
            {
              data: [70, 100, 130],
            },
            {
              data: [130, 160, 190],
            },
            {
              data: [100, 130, 160],
            },
            {
              data: [60, 90, 120],
            },
            {
              data: [140, 170, 200],
            },
            {
              data: [85, 115, 145],
            },
            {
              data: [125, 155, 185],
            },
            {
              data: [95, 125, 155],
            },
          ])
      });
     
      sequentialCharts.forEach(sequential => {
        sequential.config = handle => handle
          .baseConfig({
            ...baseConfig,
            color: [
              getChartColor('SynChartSequential01_80'),
              getChartColor('SynChartSequential01_70'),
              getChartColor('SynChartSequential01_50'),
            ],
          })
          .seriesBar([
            {
              data: [120, 180, 150],
            },
            {
              data: [80, 130, 100],
            },
            {
              data: [90, 120, 140],
            },
          ])
      });
    <\/script>
  `]))},G={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`bar-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bar-series-grouped-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(M||=y([`
    <syn-chart id="bar-series-grouped-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-tooltip');

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
              name: 'Series A'
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
              name: 'SeriesB'
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
              name: 'Series C'
            },
          ])
          .tooltipShow({ axisPointer: { type: 'shadow' } })
      });
    <\/script>
  `]))},K={parameters:{docs:{description:{story:g(`chart`,`bar-series-legend`)}}},render:()=>n(N||=y([`
    <syn-chart id="bar-series-grouped-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-legend');

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
              name: 'Series A'
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
              name: 'Series B'
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
              name: 'Series C'
            },
          ])
          .legendShow()
      });
    <\/script>
  `]))},q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`bar-series-selected-mode`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bar-series-grouped-selected-mode`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({dataIndex:[1,3],seriesName:`Multiple`,type:`select`}),e()})})}},render:()=>n(P||=y([`
    <syn-chart id="bar-series-grouped-selected-mode"></syn-chart>
    <div class="selected-container syn-body--small">
      <div>Select a bar to see the selections here:</div>
      <div id="bar-series-grouped-selected-info" class="syn-body--x-small">
      </div>
    </div>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-selected-mode');
      const selectedInfos = document.querySelectorAll('#bar-series-grouped-selected-info');

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

      const data = [
        {
          selectedMode: true,
          data: [120, 180, 150, 80, 70, 110, 130],
          name: 'Single / True'
        },
        {
          selectedMode: 'series',
          data: [80, 130, 100, 70, 90, 160, 140],
          name: 'Series'
        },
        {
          selectedMode: 'multiple',
          data: [90, 120, 140, 100, 110, 70, 60],
          name: 'Multiple'
        },
      ];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar(data)
          .legendShow();
        
        const instance = chart.getInstance();
        instance.on('selectchanged', ({ selected }) => {
          selectedInfos.forEach(selectedInfo => {
            selectedInfo.innerHTML = '';
            if (selectedInfo) {
              const selections = selected.map(item =>  ({ dataIndex: item.dataIndex, seriesIndex: item.seriesIndex}));
              selections.forEach(item => {
                const seriesName = document.createElement('div');
                const seriesValue = document.createElement('div');
                const selectedValues = item.dataIndex.map(index =>
                  baseConfig.xAxis.data[index] + ' (' + data[item.seriesIndex].data[index] + ')'
                );
                seriesName.textContent = data[item.seriesIndex].name + ': ';
                seriesValue.textContent = selectedValues.join(', ');
                selectedInfo.appendChild(seriesName);
                selectedInfo.appendChild(seriesValue);
              });          
            }
          });
        })
      });
    <\/script>
    <style>
      .selected-container {
        border: 1px solid var(--syn-panel-border-color);
        background-color: var(--syn-panel-background-color);
        height: 80px;
      }
      #bar-series-grouped-selected-info {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: var(--syn-spacing-2x-small) var(--syn-spacing-small);
      }
    </style>
  `]))},J=v({Default:I,Vertical:L,Horizontal:R,FixedValueRange:z,NegativeValues:B,PositiveAndNegative:V,CustomBarWidth:H,CustomColors:U,CategoricalVsSequential:W,Legend:K},700),Y=[`Default`,`Vertical`,`Horizontal`,`FixedValueRange`,`NegativeValues`,`PositiveAndNegative`,`CustomBarWidth`,`CustomColors`,`CategoricalVsSequential`,`Tooltip`,`Legend`,`SelectedMode`,`Screenshot`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-grouped-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-grouped-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-default');

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
            {
              data: [80, 130, 100, 70, 90, 160, 140],
              type: 'bar',
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
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
    <syn-chart id="bar-series-grouped-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-vertical');

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
            {
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
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
    <syn-chart id="bar-series-grouped-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-horizontal');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
            }
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
    <syn-chart id="bar-series-grouped-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-value-range');

      const baseConfig = {
        yAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'Days',
          type: 'category',
        },
        xAxis: {
          min: 40,
          max: 200,
          name: 'Values',
          type: 'value',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150, 80, 70, 110, 130],
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
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
    <syn-chart id="bar-series-grouped-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-negative');

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
              data: [-120, -180, -150, -80, -70, -110, -130],
            },
            {
              data: [-80, -130, -100, -70, -90, -160, -140],
            },
            {
              data: [-90, -120, -140, -100, -110, -70, -80],
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
    <syn-chart id="bar-series-grouped-positive-and-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-positive-and-negative');

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
              data: [100, -120, 150, -80, 70, -110, 130],
            },
            {
              data: [60, -40, -20, -60, 30, -80, -50],
            },
            {
              data: [120, -70, 50, -90, 80, -40, 140],
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
    <syn-chart id="bar-series-grouped-bar-width"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-bar-width');

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
              barWidth: 40,
              barMaxWidth: 40,
              data: [120, 180, 150, 80, 70, 110, 130],
            },
            {
              barWidth: '30%',
              data: [80, 130, 100, 70, 90, 160, 140],
            },
            {
              barWidth: '10%',
              data: [90, 120, 140, 100, 110, 70, 60],
            }
          ])
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
    <syn-chart id="bar-series-grouped-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const charts = document.querySelectorAll('#bar-series-grouped-colors');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C',],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
        color: [
          getChartColor('SynChartSequential02_80'),
          getChartColor('SynChartSequential02_70'),
          getChartColor('SynChartSequential02_50'),
        ],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150],
            },
            {
              data: [80, 130, 100],
            },
            {
              data: [90, 120, 140],
            },
          ])
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-palette')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-grouped-categorical"></syn-chart>
    <syn-chart id="bar-series-grouped-sequential"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const categoricalCharts = document.querySelectorAll('#bar-series-grouped-categorical');
      const sequentialCharts = document.querySelectorAll(' #bar-series-grouped-sequential');
      const baseConfig = {
        xAxis: {
          data: ['A', 'B', 'C',],
          name: 'Category',
          type: 'category',
        },
        yAxis: {
          name: 'Values',
        },
      };

      categoricalCharts.forEach(categorical => {
        categorical.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar([
            {
              data: [120, 180, 150],
            },
            {
              data: [80, 130, 100],
            },
            {
              data: [90, 120, 140],
            },
            {
              data: [110, 140, 170],
            },
            {
              data: [70, 100, 130],
            },
            {
              data: [130, 160, 190],
            },
            {
              data: [100, 130, 160],
            },
            {
              data: [60, 90, 120],
            },
            {
              data: [140, 170, 200],
            },
            {
              data: [85, 115, 145],
            },
            {
              data: [125, 155, 185],
            },
            {
              data: [95, 125, 155],
            },
          ])
      });
     
      sequentialCharts.forEach(sequential => {
        sequential.config = handle => handle
          .baseConfig({
            ...baseConfig,
            color: [
              getChartColor('SynChartSequential01_80'),
              getChartColor('SynChartSequential01_70'),
              getChartColor('SynChartSequential01_50'),
            ],
          })
          .seriesBar([
            {
              data: [120, 180, 150],
            },
            {
              data: [80, 130, 100],
            },
            {
              data: [90, 120, 140],
            },
          ])
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
        story: generateStoryDescription('chart', 'bar-series-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Only run this code when running in Chromatic, as it is used to show the tooltip for the snapshot.
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#bar-series-grouped-tooltip');
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
    <syn-chart id="bar-series-grouped-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-tooltip');

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
              name: 'Series A'
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
              name: 'SeriesB'
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
              name: 'Series C'
            },
          ])
          .tooltipShow({ axisPointer: { type: 'shadow' } })
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bar-series-legend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-grouped-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-legend');

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
              name: 'Series A'
            },
            {
              data: [80, 130, 100, 70, 90, 160, 140],
              name: 'Series B'
            },
            {
              data: [90, 120, 140, 100, 110, 70, 60],
              name: 'Series C'
            },
          ])
          .legendShow()
      });
    <\/script>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    // Only run this code when running in Chromatic, as it is used to show the tooltip for the snapshot.
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#bar-series-grouped-selected-mode');
      if (!chart) return;
      const instance = chart.getInstance()!;
      const finishedPromise = new Promise<void>(resolve => {
        instance.on('finished', () => {
          instance.dispatchAction({
            dataIndex: [1, 3],
            seriesName: 'Multiple',
            type: 'select'
          });
          resolve();
        });
      });
      await finishedPromise;
    }
  },
  render: () => html\`
    <syn-chart id="bar-series-grouped-selected-mode"></syn-chart>
    <div class="selected-container syn-body--small">
      <div>Select a bar to see the selections here:</div>
      <div id="bar-series-grouped-selected-info" class="syn-body--x-small">
      </div>
    </div>
    <script type="module">
      const charts = document.querySelectorAll('#bar-series-grouped-selected-mode');
      const selectedInfos = document.querySelectorAll('#bar-series-grouped-selected-info');

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

      const data = [
        {
          selectedMode: true,
          data: [120, 180, 150, 80, 70, 110, 130],
          name: 'Single / True'
        },
        {
          selectedMode: 'series',
          data: [80, 130, 100, 70, 90, 160, 140],
          name: 'Series'
        },
        {
          selectedMode: 'multiple',
          data: [90, 120, 140, 100, 110, 70, 60],
          name: 'Multiple'
        },
      ];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBar(data)
          .legendShow();
        
        const instance = chart.getInstance();
        instance.on('selectchanged', ({ selected }) => {
          selectedInfos.forEach(selectedInfo => {
            selectedInfo.innerHTML = '';
            if (selectedInfo) {
              const selections = selected.map(item =>  ({ dataIndex: item.dataIndex, seriesIndex: item.seriesIndex}));
              selections.forEach(item => {
                const seriesName = document.createElement('div');
                const seriesValue = document.createElement('div');
                const selectedValues = item.dataIndex.map(index =>
                  baseConfig.xAxis.data[index] + ' (' + data[item.seriesIndex].data[index] + ')'
                );
                seriesName.textContent = data[item.seriesIndex].name + ': ';
                seriesValue.textContent = selectedValues.join(', ');
                selectedInfo.appendChild(seriesName);
                selectedInfo.appendChild(seriesValue);
              });          
            }
          });
        })
      });
    <\/script>
    <style>
      .selected-container {
        border: 1px solid var(--syn-panel-border-color);
        background-color: var(--syn-panel-background-color);
        height: 80px;
      }
      #bar-series-grouped-selected-info {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: var(--syn-spacing-2x-small) var(--syn-spacing-small);
      }
    </style>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Vertical,
  Horizontal,
  FixedValueRange,
  NegativeValues,
  PositiveAndNegative,
  CustomBarWidth,
  CustomColors,
  CategoricalVsSequential,
  Legend
}, 700)`,...J.parameters?.docs?.source}}}})))()}X();export{W as CategoricalVsSequential,H as CustomBarWidth,U as CustomColors,I as Default,z as FixedValueRange,R as Horizontal,K as Legend,B as NegativeValues,V as PositiveAndNegative,J as Screenshot,q as SelectedMode,G as Tooltip,L as Vertical,Y as __namedExportsOrder,F as default};