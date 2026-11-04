import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-CxR-002Q.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,r as m,t as h}from"./chromatic-config-_lZf5ecc.js";import{n as g,r as _,t as v}from"./component-C3CNoVq_.js";import{n as y,t as b}from"./chart-series-documentation-CFcfON4D.js";import{t as x}from"./taggedTemplateLiteral-CWT6dLlS.js";var S,C,w,T,ee,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{S=e(l(),1),r(),s(),m(),f(),_(),p(),y(),window.ChartTokens=d,I={component:`syn-chart`,parameters:{chromatic:{...h},docs:{description:{component:g(`chart`,`area-series-default`)},page:()=>S.createElement(S.Fragment,null,S.createElement(a,null),S.createElement(i,null),S.createElement(o,null),S.createElement(b,{section:`Area series presets`}),S.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Area Chart`},L={parameters:{docs:{description:{story:g(`chart`,`area-series-preset`)}}},render:()=>n(C||=x([`
    <syn-chart id="area-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-default');

      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'category', name: 'Days',
          },
          yAxis: { type: 'value', name: 'Values' },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              type: 'line',
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              type: 'line',
              areaStyle: {
                opacity: 0.2,
              },
            },
          ],
        };
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:g(`chart`,`area-series-curved`)}}},render:()=>n(w||=x([`
    <syn-chart id="area-series-curved"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-curved');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      const lineData = [
        [820, 932, 901, 934, 1290, 1330, 1320],
        [620, 732, 701, 734, 1090, 1130, 1120],
        [420, 532, 501, 534, 890, 930, 920],
      ];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesArea(lineData.map(data => ({
            data,
            smooth: true,
          })));
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:g(`chart`,`area-series-hidden-lines`)}}},render:()=>n(T||=x([`
    <syn-chart id="area-series-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-hidden');

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
          .seriesArea(lineData.map(data => ({
            data,
            lineStyle: {
              width: 0,
            },
            symbol: 'circle',
          })));
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:g(`chart`,`area-series-line-styles`)}}},render:()=>n(ee||=x([`
    <syn-chart id="area-series-line-styles"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-line-styles');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              lineStyle: { type: 'solid', width: 2 },
              name: 'Solid, 2 px',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              lineStyle: { type: 'dashed', width: 4 },
              name: 'Dashed, 4 px',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              lineStyle: { type: 'dotted', width: 6 },
              name: 'Dotted, 6 px',
            },
          ])
          .legendShow();
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:g(`chart`,`area-series-symbols`)}}},render:()=>n(E||=x([`
    <syn-chart id="area-series-symbols"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-symbols');

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
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Empty circle',
              symbol: 'emptyCircle',
              symbolSize: 8,
            },
            {
              data: [720, 832, 801, 834, 1190, 1230, 1220],
              name: 'Circle',
              symbol: 'circle',
              symbolSize: 10,
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Diamond',
              symbol: 'diamond',
              symbolSize: 14,
            },
            {
              data: [520, 632, 601, 634, 990, 1030, 1020],
              name: 'Triangle',
              symbol: 'triangle',
              symbolSize: 12,
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Rect',
              symbol: 'rect',
              symbolSize: 12,
            },
            {
              data: [320, 432, 401, 434, 790, 830, 820],
              name: 'Pin',
              symbol: 'pin',
              symbolSize: 16,
            },
            {
              data: [220, 332, 301, 334, 690, 730, 720],
              name: 'Arrow',
              symbol: 'arrow',
              symbolSize: 14,
            },
            {
              data: [120, 232, 201, 234, 590, 630, 620],
              name: 'Round rect',
              symbol: 'roundRect',
              symbolSize: 12,
            },
            {
              data: [20, 132, 101, 134, 490, 530, 520],
              name: 'None',
              symbol: 'none',
            },
          ])
          .legendShow({}, { top: 140 });
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:g(`chart`,`area-series-palette`)}}},render:()=>n(D||=x([`
    <syn-chart id="area-series-palettes" palette="sequential-01"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-palettes');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
            },
          ]);
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:g(`chart`,`area-series-custom-colors`)}}},render:()=>n(O||=x([`
    <syn-chart id="area-series-custom-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const charts = document.querySelectorAll('#area-series-custom-colors');
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
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Series A',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Series B',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Series C',
            },
          ]);
      });
    <\/script>
  `]))},W={parameters:{docs:{description:{story:g(`chart`,`area-series-positive-and-negative-values`)}}},render:()=>n(k||=x([`
    <syn-chart id="area-series-positive-and-negative-values"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-positive-and-negative-values');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [-820, 932, -901, 934, -1290, 1330, 1320],
            },
          ]);
      });
    <\/script>
  `]))},G={parameters:{docs:{description:{story:g(`chart`,`area-series-origin`)}}},render:()=>n(A||=x([`
    <div style="display: grid; grid-template-columns: 50% 50%; gap: var(--syn-spacing-medium);">
    `,`
    </div>
    <script type="module">
      const charts = document.querySelectorAll('.area-series-origin');

      charts.forEach(chart => {
        const origin = JSON.parse(chart.dataset.origin);

        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([{
            areaStyle: { origin },
            data: [-620, -320, 200, 734, 1090, 530, -120],
          }])
      });
    <\/script>
  `]),[`auto`,`start`,`end`,500].map(e=>n`
      <div>
        <span style="display: block; margin-bottom: var(--syn-spacing-medium)">Origin: ${e}</span>
        <syn-chart
        class="area-series-origin"
        data-origin=${JSON.stringify(e)}
        ></syn-chart>
      </div>
      `))},K={parameters:{docs:{description:{story:g(`chart`,`area-series-stack`)}}},render:()=>n(j||=x([`
    <div style="display: grid; grid-template-columns: 50% 50%; gap: var(--syn-spacing-medium);">
      `,`
    </div>
    <script type="module">
      const charts = document.querySelectorAll('.area-series-stack');
      const seriesData = [
        [400, -400, 400, -400],
        [200, -200, -200, 200],
      ];

      charts.forEach(chart => {
        const stackStrategy = chart.dataset.stackStrategy;

        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Both positive', 'Both negative', '1. positive, 2. negative', '1. negative, 2. positive'],
              type: 'category', name: 'Days',
              axisLabel: {
                interval: 0,
                width: 70,
                overflow: 'break',
              }
            },
            yAxis: { min: -1000, max: 1000, type: 'value', name: 'Values' },
          })
          .seriesArea(seriesData.map((data, index) => ({
            data,
            name: 'Series ' + (index + 1),
            stack: 'total',
            stackStrategy,
          })))
          .legendShow();
      });
    <\/script>
  `]),[`samesign`,`all`,`positive`,`negative`].map(e=>n`
        <div style="min-width: 0;">
          <span style="display: block; margin-bottom: var(--syn-spacing-medium)">
            Stack strategy: ${e}
          </span>
          <syn-chart
            class="area-series-stack"
            data-stack-strategy=${e}
          ></syn-chart>
        </div>
      `))},q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`area-series-focus-hover`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#area-series-focus`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({seriesIndex:2,type:`highlight`}),e()})})}},render:()=>n(M||=x([`
    <syn-chart id="area-series-focus"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-focus');
      const seriesData = [
        [820, 932, 901, 934, 1290, 1330, 1320],
        [620, 732, 701, 734, 1090, 1130, 1120],
        [420, 532, 501, 534, 890, 930, 920],
      ];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea(seriesData.map((data, index) => ({
            data,
            emphasis: {
              focus: 'series',
            },
          })));
      });
    <\/script>
  `]))},J={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`area-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#area-series-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(N||=x([`
    <syn-chart id="area-series-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-tooltip');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Series A',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Series B',
            },
            ])
          .tooltipShow();
      });
    <\/script>
  `]))},Y={parameters:{docs:{description:{story:g(`chart`,`area-series-with-legend`)}}},render:()=>n(P||=x([`
    <syn-chart id="area-series-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-legend');

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
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Series A',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Series B',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Series C',
            },
          ])
          .legendShow();
      });
    <\/script>
  `]))},X={parameters:{docs:{description:{story:g(`chart`,`area-series-zoom`)}}},render:()=>n(F||=x([`
    <syn-chart id="area-series-zoom"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-zoom');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            dataZoom: [
              { type: 'slider', start: 30, end: 70 },
            ],
            grid: { bottom: 120 },
            xAxis: {
              data: Array.from({ length: 30 }, (_, index) => {
                const date = new Date(2026, 0, 1 + index);
                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              }),
              type: 'category', name: 'Date',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 620, 732, 701, 734, 1090, 1130, 1120, 420, 532, 501, 534, 890, 930, 920, 320, 432, 401, 434, 790, 830, 820, 220, 332],
              name: 'Series A',
            },
            {
              data: [450, 680, 550, 890, 720, 850, 610, 1100, 950, 820, 1050, 650, 780, 560, 920, 1200, 680, 750, 1040, 590, 875, 1150, 740, 920, 680, 1080, 620, 950, 1220, 750],
              name: 'Series B',
            },
          ]);
      });
    <\/script>
  `]))},Z=v({Default:L,CurvedLine:R,LineStylesAndWidths:B,SymbolStylesAndSizes:V,ColorPalettes:H,CustomColors:U,PositiveAndNegativeValues:W,Origin:G,Stack:K,WithLegend:Y,Zoom:X},700),Q=[`Default`,`CurvedLine`,`HiddenLine`,`LineStylesAndWidths`,`SymbolStylesAndSizes`,`ColorPalettes`,`CustomColors`,`PositiveAndNegativeValues`,`Origin`,`Stack`,`FocusOnHover`,`Tooltip`,`WithLegend`,`Zoom`,`Screenshot`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-default');

      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'category', name: 'Days',
          },
          yAxis: { type: 'value', name: 'Values' },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              type: 'line',
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              type: 'line',
              areaStyle: {
                opacity: 0.2,
              },
            },
          ],
        };
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-curved')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-curved"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-curved');

      const baseConfig = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      const lineData = [
        [820, 932, 901, 934, 1290, 1330, 1320],
        [620, 732, 701, 734, 1090, 1130, 1120],
        [420, 532, 501, 534, 890, 930, 920],
      ];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesArea(lineData.map(data => ({
            data,
            smooth: true,
          })));
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-hidden-lines')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-hidden"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-hidden');

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
          .seriesArea(lineData.map(data => ({
            data,
            lineStyle: {
              width: 0,
            },
            symbol: 'circle',
          })));
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-line-styles')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-line-styles"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-line-styles');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              lineStyle: { type: 'solid', width: 2 },
              name: 'Solid, 2 px',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              lineStyle: { type: 'dashed', width: 4 },
              name: 'Dashed, 4 px',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              lineStyle: { type: 'dotted', width: 6 },
              name: 'Dotted, 6 px',
            },
          ])
          .legendShow();
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-symbols')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-symbols"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-symbols');

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
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Empty circle',
              symbol: 'emptyCircle',
              symbolSize: 8,
            },
            {
              data: [720, 832, 801, 834, 1190, 1230, 1220],
              name: 'Circle',
              symbol: 'circle',
              symbolSize: 10,
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Diamond',
              symbol: 'diamond',
              symbolSize: 14,
            },
            {
              data: [520, 632, 601, 634, 990, 1030, 1020],
              name: 'Triangle',
              symbol: 'triangle',
              symbolSize: 12,
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Rect',
              symbol: 'rect',
              symbolSize: 12,
            },
            {
              data: [320, 432, 401, 434, 790, 830, 820],
              name: 'Pin',
              symbol: 'pin',
              symbolSize: 16,
            },
            {
              data: [220, 332, 301, 334, 690, 730, 720],
              name: 'Arrow',
              symbol: 'arrow',
              symbolSize: 14,
            },
            {
              data: [120, 232, 201, 234, 590, 630, 620],
              name: 'Round rect',
              symbol: 'roundRect',
              symbolSize: 12,
            },
            {
              data: [20, 132, 101, 134, 490, 530, 520],
              name: 'None',
              symbol: 'none',
            },
          ])
          .legendShow({}, { top: 140 });
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-palette')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-palettes" palette="sequential-01"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-palettes');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
            },
          ]);
      });
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-custom-colors')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-custom-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      const charts = document.querySelectorAll('#area-series-custom-colors');
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
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Series A',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Series B',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Series C',
            },
          ]);
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-positive-and-negative-values')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-positive-and-negative-values"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-positive-and-negative-values');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [-820, 932, -901, 934, -1290, 1330, 1320],
            },
          ]);
      });
    <\/script>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-origin')
      }
    }
  },
  render: () => html\`
    <div style="display: grid; grid-template-columns: 50% 50%; gap: var(--syn-spacing-medium);">
    \${['auto', 'start', 'end', 500].map(origin => html\`
      <div>
        <span style="display: block; margin-bottom: var(--syn-spacing-medium)">Origin: \${origin}</span>
        <syn-chart
        class="area-series-origin"
        data-origin=\${JSON.stringify(origin)}
        ></syn-chart>
      </div>
      \`)}
    </div>
    <script type="module">
      const charts = document.querySelectorAll('.area-series-origin');

      charts.forEach(chart => {
        const origin = JSON.parse(chart.dataset.origin);

        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([{
            areaStyle: { origin },
            data: [-620, -320, 200, 734, 1090, 530, -120],
          }])
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-stack')
      }
    }
  },
  render: () => html\`
    <div style="display: grid; grid-template-columns: 50% 50%; gap: var(--syn-spacing-medium);">
      \${['samesign', 'all', 'positive', 'negative'].map(strategy => html\`
        <div style="min-width: 0;">
          <span style="display: block; margin-bottom: var(--syn-spacing-medium)">
            Stack strategy: \${strategy}
          </span>
          <syn-chart
            class="area-series-stack"
            data-stack-strategy=\${strategy}
          ></syn-chart>
        </div>
      \`)}
    </div>
    <script type="module">
      const charts = document.querySelectorAll('.area-series-stack');
      const seriesData = [
        [400, -400, 400, -400],
        [200, -200, -200, 200],
      ];

      charts.forEach(chart => {
        const stackStrategy = chart.dataset.stackStrategy;

        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Both positive', 'Both negative', '1. positive, 2. negative', '1. negative, 2. positive'],
              type: 'category', name: 'Days',
              axisLabel: {
                interval: 0,
                width: 70,
                overflow: 'break',
              }
            },
            yAxis: { min: -1000, max: 1000, type: 'value', name: 'Values' },
          })
          .seriesArea(seriesData.map((data, index) => ({
            data,
            name: 'Series ' + (index + 1),
            stack: 'total',
            stackStrategy,
          })))
          .legendShow();
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
        story: generateStoryDescription('chart', 'area-series-focus-hover')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#area-series-focus');
      if (!chart) return;
      const instance = chart.getInstance()!;
      const finishedPromise = new Promise<void>(resolve => {
        instance.on('finished', () => {
          instance.dispatchAction({
            seriesIndex: 2,
            type: 'highlight'
          });
          resolve();
        });
      });
      await finishedPromise;
    }
  },
  render: () => html\`
    <syn-chart id="area-series-focus"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-focus');
      const seriesData = [
        [820, 932, 901, 934, 1290, 1330, 1320],
        [620, 732, 701, 734, 1090, 1130, 1120],
        [420, 532, 501, 534, 890, 930, 920],
      ];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea(seriesData.map((data, index) => ({
            data,
            emphasis: {
              focus: 'series',
            },
          })));
      });
    <\/script>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#area-series-tooltip');
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
    <syn-chart id="area-series-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-tooltip');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Series A',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Series B',
            },
            ])
          .tooltipShow();
      });
    <\/script>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-with-legend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-legend');

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
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              name: 'Series A',
            },
            {
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              name: 'Series B',
            },
            {
              data: [420, 532, 501, 534, 890, 930, 920],
              name: 'Series C',
            },
          ])
          .legendShow();
      });
    <\/script>
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'area-series-zoom')
      }
    }
  },
  render: () => html\`
    <syn-chart id="area-series-zoom"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#area-series-zoom');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            dataZoom: [
              { type: 'slider', start: 30, end: 70 },
            ],
            grid: { bottom: 120 },
            xAxis: {
              data: Array.from({ length: 30 }, (_, index) => {
                const date = new Date(2026, 0, 1 + index);
                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              }),
              type: 'category', name: 'Date',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesArea([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 620, 732, 701, 734, 1090, 1130, 1120, 420, 532, 501, 534, 890, 930, 920, 320, 432, 401, 434, 790, 830, 820, 220, 332],
              name: 'Series A',
            },
            {
              data: [450, 680, 550, 890, 720, 850, 610, 1100, 950, 820, 1050, 650, 780, 560, 920, 1200, 680, 750, 1040, 590, 875, 1150, 740, 920, 680, 1080, 620, 950, 1220, 750],
              name: 'Series B',
            },
          ]);
      });
    <\/script>
  \`
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  CurvedLine,
  LineStylesAndWidths,
  SymbolStylesAndSizes,
  ColorPalettes,
  CustomColors,
  PositiveAndNegativeValues,
  Origin,
  Stack,
  WithLegend,
  Zoom
}, 700)`,...Z.parameters?.docs?.source}}}})))()}$();export{H as ColorPalettes,R as CurvedLine,U as CustomColors,L as Default,q as FocusOnHover,z as HiddenLine,B as LineStylesAndWidths,G as Origin,W as PositiveAndNegativeValues,Z as Screenshot,K as Stack,V as SymbolStylesAndSizes,J as Tooltip,Y as WithLegend,X as Zoom,Q as __namedExportsOrder,I as default};