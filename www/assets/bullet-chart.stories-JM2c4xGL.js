import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-2nWLM9Kw.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,o as m,r as h,s as g,t as _}from"./chromatic-config-D3BsjlyZ.js";import{n as v,r as y,t as b}from"./component-iHqn-0Yj.js";import{n as x,t as S}from"./chart-series-documentation-Bsa0-pgC.js";import{t as C}from"./taggedTemplateLiteral-CWT6dLlS.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=t((()=>{w=e(l(),1),r(),s(),f(),g(),h(),x(),p(),y(),window.ChartTokens=d,window.ComponentTokens=m,I={component:`syn-chart`,parameters:{chromatic:{..._},docs:{description:{component:v(`chart`,`bullet-series-default`)},page:()=>w.createElement(w.Fragment,null,w.createElement(a,null),w.createElement(i,null),w.createElement(o,null),w.createElement(S,{section:`Bullet series presets`}),w.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Bullet Chart`},L={parameters:{docs:{description:{story:v(`chart`,`bullet-series-preset`)}}},render:()=>n(T||=C([`
    <syn-chart id="bullet-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-default');
      charts.forEach(chart => {
        chart.config = {
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
          series: [
            {
              type: 'synBullet',
              data: [
                { start: 10, end: 80, current: 65 },
                { start: -10, end: 60, current: 48 },
                { start: 20, end: 100, current: 42 },
                { start: -15, end: 45, current: -6 },
              ],
            },
          ],
        };
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:v(`chart`,`bullet-series-vertical`)}}},render:()=>n(E||=C([`
    <syn-chart id="bullet-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-vertical');
      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
            yAxis: { type: 'value' },
          })
          .seriesBullet({
            data: [
              { start: 10, end: 80, current: 65 },
              { start: -10, end: 60, current: 48 },
              { start: 20, end: 100, current: 42 },
              { start: -15, end: 45, current: -6 },
            ],
          })
          .axesShowYSplitLines();
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:v(`chart`,`bullet-series-color-by`)}}},render:()=>n(D||=C([`
    <syn-chart id="bullet-color-by-data"></syn-chart>
    <syn-chart id="bullet-color-by-series"></syn-chart>
    <script type="module">
      const byData = document.querySelectorAll('#bullet-color-by-data');
      const bySeries = document.querySelectorAll('#bullet-color-by-series');
      const baseConfig = {
        xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
        yAxis: { type: 'value' },
      };
      const data = [
        { start: 10, end: 80, current: 65 },
        { start: -10, end: 60, current: 48 },
        { start: 20, end: 100, current: 42 },
        { start: -15, end: 45, current: -6 },
      ];
      byData.forEach(chart => {
        chart.config = handle =>
          handle.baseConfig(baseConfig)
            .seriesBullet({ colorBy: 'data', data });
      });
      bySeries.forEach(chart => {
        chart.config = handle =>
          handle.baseConfig(baseConfig)
            .seriesBullet({ colorBy: 'series', data });
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:v(`chart`,`bullet-series-horizontal`)}}},render:()=>n(O||=C([`
    <syn-chart id="bullet-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-horizontal');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { type: 'value' },
          yAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
        })
        .seriesBullet({
          data: [
            { start: 10, end: 80, current: 65 },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42 },
            { start: -15, end: 45, current: -6 },
          ],
        });
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:v(`chart`,`bullet-series-palette`)}}},render:()=>n(k||=C([`
    <syn-chart id="bullet-palette" palette="sequential-status-success"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-palette');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
        })
        .seriesBullet({
          data: [
            { start: 10, end: 80, current: 65 },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42 },
            { start: -15, end: 45, current: -6 },
          ],
        });
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:v(`chart`,`bullet-series-custom-color`)}}},render:()=>n(A||=C([`
    <syn-chart id="bullet-custom-colors"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-custom-colors');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
        })
        .seriesBullet({
          itemStyle: { borderColor: ComponentTokens.SynColorNeutral700.light, borderWidth: 2, color: ChartTokens.SynChartSequential02_40.light },
          data: [
            { start: 10, end: 80, current: 65, },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42, itemStyle: { borderColor: ComponentTokens.SynColorNeutral1000.light, color: ChartTokens.SynChartSequential02_70.light } },
            { start: -15, end: 45, current: -6 },
          ],
        });
      });
    <\/script>
  `]))},U={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:v(`chart`,`bullet-series-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#bullet-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({dataIndex:0,seriesIndex:0,type:`showTip`}),e()})})}},render:()=>n(j||=C([`
    <syn-chart id="bullet-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-tooltip');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
        })
        .seriesBullet({
          data: [
            { name: 'Sensor A', start: 10, end: 80, current: 65 },
            { name: 'Sensor B', start: -10, end: 60, current: 48 },
            { name: 'Sensor C', start: 20, end: 100, current: 42 },
            { name: 'Sensor D', start: -15, end: 45, current: -6 },
          ],
        })
        .tooltipShow({ axisPointer: { type: 'shadow' } });
      });
    <\/script>
  `]))},W={parameters:{docs:{description:{story:v(`chart`,`bullet-series-legend`)}}},render:()=>n(M||=C([`
    <syn-chart id="bullet-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-legend');
      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
            yAxis: { type: 'value' },
          })
          .seriesBullet({
            data: [
              { name: 'Pressure', start: 10, end: 80, current: 65 },
              { name: 'Flow', start: -10, end: 60, current: 48 },
              { name: 'Temperature', start: 20, end: 100, current: 42 },
              { name: 'Speed', start: -15, end: 45, current: -6 },
            ],
          })
          .legendShow();
      });
    <\/script>
  `]))},G={parameters:{docs:{description:{story:v(`chart`,`bullet-series-value-range`)}}},render:()=>n(N||=C([`
    <syn-chart id="bullet-fixed-axis-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-fixed-axis-range');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Speed'], type: 'category' },
          yAxis: { min: -100, max: 100, type: 'value' },
        })
        .seriesBullet({
          data: [
            { name: 'Pressure', start: -70, end: 70, current: -40 },
            { name: 'Flow', start: -45, end: 65, current: 50 },
            { name: 'Speed', start: -30, end: 40, current: -20 },
          ],
        });
      });
    <\/script>
  `]))},K={parameters:{docs:{description:{story:v(`chart`,`bullet-series-custom-width`)}}},render:()=>n(P||=C([`
    <syn-chart id="bullet-fixed-width"></syn-chart>
    <syn-chart id="bullet-relative-width"></syn-chart>
    <script type="module">
      const fixedWidthCharts = document.querySelectorAll('#bullet-fixed-width');
      const relativeWidthCharts = document.querySelectorAll('#bullet-relative-width');
      const baseConfig = {
        xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
        yAxis: { type: 'value' },
      };
      const data = [
        { start: 10, end: 80, current: 65 },
        { start: -10, end: 60, current: 48 },
        { start: 20, end: 100, current: 42 },
        { start: -15, end: 45, current: -6 },
      ];

      fixedWidthCharts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBullet({ barWidth: 40, barMaxWidth: 40, data });
      });
      relativeWidthCharts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBullet({ barWidth: '30%', barMaxWidth: undefined, data });
      });
    <\/script>
  `]))},q={parameters:{docs:{description:{story:v(`chart`,`bullet-series-marker`)}}},render:()=>n(F||=C([`
    <syn-chart id="bullet-custom-marker"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-custom-marker');

      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({ xAxis: { data: ['Pressure', 'Flow', 'Speed', 'Temperature'], type: 'category' }, yAxis: {type: 'value'} })
        .seriesBullet({
          data: [
            { start: 10, end: 80, current: 65 },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42 },
            { start: -15, end: 45, current: -6 }
          ],
          markerStyle: {
            width: 20,
            height: 20,
            borderRadius: 20,
            color: ComponentTokens.SynColorNeutral400.light
          },
        });
      });
    <\/script>
  `]))},J=b({Default:L,Vertical:R,Horizontal:B,ColorBy:z,PaletteColors:V,CustomStyle:H,LegendSelection:W,FixedAxisRange:G,CustomRangeWidth:K,CustomMarker:q},700),Y=[`Default`,`Vertical`,`ColorBy`,`Horizontal`,`PaletteColors`,`CustomStyle`,`Tooltip`,`LegendSelection`,`FixedAxisRange`,`CustomRangeWidth`,`CustomMarker`,`Screenshot`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-default');
      charts.forEach(chart => {
        chart.config = {
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
          series: [
            {
              type: 'synBullet',
              data: [
                { start: 10, end: 80, current: 65 },
                { start: -10, end: 60, current: 48 },
                { start: 20, end: 100, current: 42 },
                { start: -15, end: 45, current: -6 },
              ],
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
        story: generateStoryDescription('chart', 'bullet-series-vertical')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-vertical');
      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
            yAxis: { type: 'value' },
          })
          .seriesBullet({
            data: [
              { start: 10, end: 80, current: 65 },
              { start: -10, end: 60, current: 48 },
              { start: 20, end: 100, current: 42 },
              { start: -15, end: 45, current: -6 },
            ],
          })
          .axesShowYSplitLines();
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-color-by')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-color-by-data"></syn-chart>
    <syn-chart id="bullet-color-by-series"></syn-chart>
    <script type="module">
      const byData = document.querySelectorAll('#bullet-color-by-data');
      const bySeries = document.querySelectorAll('#bullet-color-by-series');
      const baseConfig = {
        xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
        yAxis: { type: 'value' },
      };
      const data = [
        { start: 10, end: 80, current: 65 },
        { start: -10, end: 60, current: 48 },
        { start: 20, end: 100, current: 42 },
        { start: -15, end: 45, current: -6 },
      ];
      byData.forEach(chart => {
        chart.config = handle =>
          handle.baseConfig(baseConfig)
            .seriesBullet({ colorBy: 'data', data });
      });
      bySeries.forEach(chart => {
        chart.config = handle =>
          handle.baseConfig(baseConfig)
            .seriesBullet({ colorBy: 'series', data });
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-horizontal')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-horizontal');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { type: 'value' },
          yAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
        })
        .seriesBullet({
          data: [
            { start: 10, end: 80, current: 65 },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42 },
            { start: -15, end: 45, current: -6 },
          ],
        });
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-palette')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-palette" palette="sequential-status-success"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-palette');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
        })
        .seriesBullet({
          data: [
            { start: 10, end: 80, current: 65 },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42 },
            { start: -15, end: 45, current: -6 },
          ],
        });
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-custom-color')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-custom-colors"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-custom-colors');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
        })
        .seriesBullet({
          itemStyle: { borderColor: ComponentTokens.SynColorNeutral700.light, borderWidth: 2, color: ChartTokens.SynChartSequential02_40.light },
          data: [
            { start: 10, end: 80, current: 65, },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42, itemStyle: { borderColor: ComponentTokens.SynColorNeutral1000.light, color: ChartTokens.SynChartSequential02_70.light } },
            { start: -15, end: 45, current: -6 },
          ],
        });
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
        story: generateStoryDescription('chart', 'bullet-series-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Only run this code when running in Chromatic, as it is used to show the tooltip for the snapshot.
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#bullet-tooltip');
      if (!chart) return;
      const instance = chart.getInstance()!;
      const finishedPromise = new Promise<void>(resolve => {
        instance.on('finished', () => {
          instance.dispatchAction({
            dataIndex: 0,
            seriesIndex: 0,
            type: 'showTip'
          });
          resolve();
        });
      });
      await finishedPromise;
    }
  },
  render: () => html\`
    <syn-chart id="bullet-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-tooltip');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
          yAxis: { type: 'value' },
        })
        .seriesBullet({
          data: [
            { name: 'Sensor A', start: 10, end: 80, current: 65 },
            { name: 'Sensor B', start: -10, end: 60, current: 48 },
            { name: 'Sensor C', start: 20, end: 100, current: 42 },
            { name: 'Sensor D', start: -15, end: 45, current: -6 },
          ],
        })
        .tooltipShow({ axisPointer: { type: 'shadow' } });
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-legend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-legend');
      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
            yAxis: { type: 'value' },
          })
          .seriesBullet({
            data: [
              { name: 'Pressure', start: 10, end: 80, current: 65 },
              { name: 'Flow', start: -10, end: 60, current: 48 },
              { name: 'Temperature', start: 20, end: 100, current: 42 },
              { name: 'Speed', start: -15, end: 45, current: -6 },
            ],
          })
          .legendShow();
      });
    <\/script>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-value-range')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-fixed-axis-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-fixed-axis-range');
      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({
          xAxis: { data: ['Pressure', 'Flow', 'Speed'], type: 'category' },
          yAxis: { min: -100, max: 100, type: 'value' },
        })
        .seriesBullet({
          data: [
            { name: 'Pressure', start: -70, end: 70, current: -40 },
            { name: 'Flow', start: -45, end: 65, current: 50 },
            { name: 'Speed', start: -30, end: 40, current: -20 },
          ],
        });
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-custom-width')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-fixed-width"></syn-chart>
    <syn-chart id="bullet-relative-width"></syn-chart>
    <script type="module">
      const fixedWidthCharts = document.querySelectorAll('#bullet-fixed-width');
      const relativeWidthCharts = document.querySelectorAll('#bullet-relative-width');
      const baseConfig = {
        xAxis: { data: ['Pressure', 'Flow', 'Temperature', 'Speed'], type: 'category' },
        yAxis: { type: 'value' },
      };
      const data = [
        { start: 10, end: 80, current: 65 },
        { start: -10, end: 60, current: 48 },
        { start: 20, end: 100, current: 42 },
        { start: -15, end: 45, current: -6 },
      ];

      fixedWidthCharts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBullet({ barWidth: 40, barMaxWidth: 40, data });
      });
      relativeWidthCharts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesBullet({ barWidth: '30%', barMaxWidth: undefined, data });
      });
    <\/script>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'bullet-series-marker')
      }
    }
  },
  render: () => html\`
    <syn-chart id="bullet-custom-marker"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#bullet-custom-marker');

      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({ xAxis: { data: ['Pressure', 'Flow', 'Speed', 'Temperature'], type: 'category' }, yAxis: {type: 'value'} })
        .seriesBullet({
          data: [
            { start: 10, end: 80, current: 65 },
            { start: -10, end: 60, current: 48 },
            { start: 20, end: 100, current: 42 },
            { start: -15, end: 45, current: -6 }
          ],
          markerStyle: {
            width: 20,
            height: 20,
            borderRadius: 20,
            color: ComponentTokens.SynColorNeutral400.light
          },
        });
      });
    <\/script>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Vertical,
  Horizontal,
  ColorBy,
  PaletteColors,
  CustomStyle,
  LegendSelection,
  FixedAxisRange,
  CustomRangeWidth,
  CustomMarker
}, 700)`,...J.parameters?.docs?.source}}}})))()}X();export{z as ColorBy,q as CustomMarker,K as CustomRangeWidth,H as CustomStyle,L as Default,G as FixedAxisRange,B as Horizontal,W as LegendSelection,V as PaletteColors,J as Screenshot,U as Tooltip,R as Vertical,Y as __namedExportsOrder,I as default};