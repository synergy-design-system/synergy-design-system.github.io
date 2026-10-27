import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{c as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./chromatic-config-BMgBWGtT.js";import{n as _,t as v}from"./formatter-DigzwySx.js";import{n as y,r as b,t as x}from"./component-duAHVJ0I.js";import{t as S}from"./taggedTemplateLiteral-CWT6dLlS.js";import{n as C,t as w}from"./chart-series-documentation-Cn0snMjG.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{T=e(l(),1),r(),s(),d(),h(),m(),_(),b(),C(),f(),window.ChartTokens=u,window.ComponentTokens=p,window.formatter=v,F={component:`syn-chart`,parameters:{chromatic:{...g},docs:{description:{component:y(`chart`,`donut-series-default`)},page:()=>T.createElement(T.Fragment,null,T.createElement(a,null),T.createElement(i,null),T.createElement(o,null),T.createElement(w,{section:`Donut series presets`}),T.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Donut Chart`},I={parameters:{docs:{description:{story:y(`chart`,`donut-series-preset`)}}},render:()=>n(E||=S([`
    <syn-chart id="donut-series-preset"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-series-preset');

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              type: 'synDonut',
              data: [10, 20, 30, 40],
            }
          ]
        };
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:y(`chart`,`donut-series-colors`)}}},render:()=>n(D||=S([`
    <syn-chart id="donut-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const charts = document.querySelectorAll('#donut-colors');
      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({ 
          color: [
            getChartColor('SynChartSequential01_100'),
            getChartColor('SynChartSequential01_90'),
            getChartColor('SynChartSequential01_80'),
            getChartColor('SynChartSequential01_70'),
            getChartColor('SynChartSequential01_60'),
            getChartColor('SynChartSequential01_50'),
            getChartColor('SynChartSequential01_40')]
          })
        .seriesDonut({
          data: [ 15, 10, 20, 12, 18, 8, 17 ],
        });
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:y(`chart`,`donut-series-label-formatting`)}}},render:()=>n(O||=S([`
    <syn-chart id="donut-label-formatting"></syn-chart>
    <script type="module">
      // Import the formatter from the chart utilities
      //import { formatter } from '@synergy-design-system/components/components/chart/index.js';

      const charts = document.querySelectorAll('#donut-label-formatting');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
            data: [
            {
              value: 2000,
              label: 'Custom string',
            },
            {
              value: 2000,
              label: undefined,
            },
            {
              value: 2000,
              label: formatter.unitFormatter('ms'),
            },
            {
              value: 2000,
              label: formatter.numberShorthandFormatter(),
            },
            {
              value: 2000,
              label: formatter.numberFormatter(undefined, { minimumFractionDigits: 2 }),
            },
          ],
        });
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:y(`chart`,`donut-series-labels`)}}},render:()=>n(k||=S([`
    <syn-chart id="donut-labels"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-labels');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          data: [
            {
              value: 421,
              label: 'Angular',
              prefixIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkwyIDZsMS42IDEyLjlMMTIgMjJsOC40LTMuMUwyMiA2IDEyIDJ6bTAgMi4yIDcuNiAyLjctMS4yIDEwLjZMMTIgMTkuOGwtNi40LTIuM0w0LjQgNi45IDEyIDQuMnpNMTIgOWwtNCA5aDEuNmwuOC0yaDMuMmwuOCAySDE2bC00LTl6bTAgMi45IDEuMSAyLjdoLTIuMkwxMiAxMS45eiIvPjwvc3ZnPg==",
            },
            {
              value: 552,
              label: 'React',
              prefixIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS40Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSIvPjxlbGxpcHNlIGN4PSIxMiIgY3k9IjEyIiByeD0iMTAiIHJ5PSI0LjIiLz48ZWxsaXBzZSBjeD0iMTIiIGN5PSIxMiIgcng9IjEwIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSg2MCAxMiAxMikiLz48ZWxsaXBzZSBjeD0iMTIiIGN5PSIxMiIgcng9IjEwIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjAgMTIgMTIpIi8+PC9zdmc+",
            },
            {
              value: 36,
              label: 'Vue',
              prefixIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMiAzaDQuMkwxMiAxM2w1LjgtMTBIMjJMMTIgMjEgMiAzeiIvPjxwYXRoIGQ9Ik04LjQgM2gzLjJMMTIgNS4xIDEzLjQgM2gzLjJMMTIgMTIuOSA4LjQgM3oiLz48L3N2Zz4=",
            },
          ],
        });
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:y(`chart`,`donut-series-radius`)}}},render:()=>n(A||=S([`
    <syn-chart id="donut-radius"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-radius');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          radius: '90%',
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:y(`chart`,`donut-series-center`)}}},render:()=>n(j||=S([`
    <syn-chart id="donut-center"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-center');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          center: ['35%', '65%'],
          radius: '70',
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:y(`chart`,`donut-series-insets`)}}},render:()=>n(M||=S([`
    <syn-chart id="donut-insets"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-insets');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          top: 20,
          right: 120,
          bottom: '50%',
          left: 260,
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:y(`chart`,`donut-series-legend`)}}},render:()=>n(N||=S([`
    <syn-chart id="donut-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-legend');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          top: 60,
          data: [
            {
              value: 421,
              name: 'Angular',
            },
            {
              value: 552,
              name: 'React',
            },
            {
              value: 36,
              name: 'Vue',
            },
          ],
        })
        .legendShow();
      });
    <\/script>
  `]))},W={parameters:{docs:{description:{story:y(`chart`,`donut-series-status`)}}},render:()=>n(P||=S([`
    <syn-chart id="donut-status"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';
      const charts = document.querySelectorAll('#donut-status');
      const getColor = (token) => {
        return ComponentTokens[token]['light'];
      };

      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({ 
          color: [
            getColor('SynNamurErrorColor'),
            getColor('SynNamurWarningColor'),
            getColor('SynNamurSuccessColor'),
            getColor('SynNamurNeutralColor'),
          ]
        })
        .seriesDonut({
          top: 16,
          data: [
            {
              value: 220,
              name: 'Error',
            },
            {
              value: 50,
              name: 'Warning',
            },
            {
              value: 120,
              name: 'Success',
            },
            {
              value: 33,
              name: 'Neutral',
            },
          ],
        })
      .legendShow();
      });
    <\/script>
  `]))},G=x({Default:I,CustomColors:L,LabelFormatting:R,LabelsWithIcons:z,Radius:B,AdjustCenterPosition:V,Insets:H,WithLegend:U,StatusDonut:W},700),K=[`Default`,`CustomColors`,`LabelFormatting`,`LabelsWithIcons`,`Radius`,`AdjustCenterPosition`,`Insets`,`WithLegend`,`StatusDonut`,`Screenshot`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-series-preset"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-series-preset');

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              type: 'synDonut',
              data: [10, 20, 30, 40],
            }
          ]
        };
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-colors')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const charts = document.querySelectorAll('#donut-colors');
      const getChartColor = (token) => {
        return ChartTokens[token]['light'];
      };

      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({ 
          color: [
            getChartColor('SynChartSequential01_100'),
            getChartColor('SynChartSequential01_90'),
            getChartColor('SynChartSequential01_80'),
            getChartColor('SynChartSequential01_70'),
            getChartColor('SynChartSequential01_60'),
            getChartColor('SynChartSequential01_50'),
            getChartColor('SynChartSequential01_40')]
          })
        .seriesDonut({
          data: [ 15, 10, 20, 12, 18, 8, 17 ],
        });
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-label-formatting')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-label-formatting"></syn-chart>
    <script type="module">
      // Import the formatter from the chart utilities
      //import { formatter } from '@synergy-design-system/components/components/chart/index.js';

      const charts = document.querySelectorAll('#donut-label-formatting');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
            data: [
            {
              value: 2000,
              label: 'Custom string',
            },
            {
              value: 2000,
              label: undefined,
            },
            {
              value: 2000,
              label: formatter.unitFormatter('ms'),
            },
            {
              value: 2000,
              label: formatter.numberShorthandFormatter(),
            },
            {
              value: 2000,
              label: formatter.numberFormatter(undefined, { minimumFractionDigits: 2 }),
            },
          ],
        });
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-labels')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-labels"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-labels');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          data: [
            {
              value: 421,
              label: 'Angular',
              prefixIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkwyIDZsMS42IDEyLjlMMTIgMjJsOC40LTMuMUwyMiA2IDEyIDJ6bTAgMi4yIDcuNiAyLjctMS4yIDEwLjZMMTIgMTkuOGwtNi40LTIuM0w0LjQgNi45IDEyIDQuMnpNMTIgOWwtNCA5aDEuNmwuOC0yaDMuMmwuOCAySDE2bC00LTl6bTAgMi45IDEuMSAyLjdoLTIuMkwxMiAxMS45eiIvPjwvc3ZnPg==",
            },
            {
              value: 552,
              label: 'React',
              prefixIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS40Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSIvPjxlbGxpcHNlIGN4PSIxMiIgY3k9IjEyIiByeD0iMTAiIHJ5PSI0LjIiLz48ZWxsaXBzZSBjeD0iMTIiIGN5PSIxMiIgcng9IjEwIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSg2MCAxMiAxMikiLz48ZWxsaXBzZSBjeD0iMTIiIGN5PSIxMiIgcng9IjEwIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjAgMTIgMTIpIi8+PC9zdmc+",
            },
            {
              value: 36,
              label: 'Vue',
              prefixIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMiAzaDQuMkwxMiAxM2w1LjgtMTBIMjJMMTIgMjEgMiAzeiIvPjxwYXRoIGQ9Ik04LjQgM2gzLjJMMTIgNS4xIDEzLjQgM2gzLjJMMTIgMTIuOSA4LjQgM3oiLz48L3N2Zz4=",
            },
          ],
        });
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-radius')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-radius"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-radius');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          radius: '90%',
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-center')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-center"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-center');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          center: ['35%', '65%'],
          radius: '70',
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-insets')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-insets"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-insets');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          top: 20,
          right: 120,
          bottom: '50%',
          left: 260,
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-legend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#donut-legend');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesDonut({
          top: 60,
          data: [
            {
              value: 421,
              name: 'Angular',
            },
            {
              value: 552,
              name: 'React',
            },
            {
              value: 36,
              name: 'Vue',
            },
          ],
        })
        .legendShow();
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'donut-series-status')
      }
    }
  },
  render: () => html\`
    <syn-chart id="donut-status"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';
      const charts = document.querySelectorAll('#donut-status');
      const getColor = (token) => {
        return ComponentTokens[token]['light'];
      };

      charts.forEach(chart => {
        chart.config = handle => handle
        .baseConfig({ 
          color: [
            getColor('SynNamurErrorColor'),
            getColor('SynNamurWarningColor'),
            getColor('SynNamurSuccessColor'),
            getColor('SynNamurNeutralColor'),
          ]
        })
        .seriesDonut({
          top: 16,
          data: [
            {
              value: 220,
              name: 'Error',
            },
            {
              value: 50,
              name: 'Warning',
            },
            {
              value: 120,
              name: 'Success',
            },
            {
              value: 33,
              name: 'Neutral',
            },
          ],
        })
      .legendShow();
      });
    <\/script>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  CustomColors,
  LabelFormatting,
  LabelsWithIcons,
  Radius,
  AdjustCenterPosition,
  Insets,
  WithLegend,
  StatusDonut
}, 700)`,...G.parameters?.docs?.source}}}})))()}q();export{V as AdjustCenterPosition,L as CustomColors,I as Default,H as Insets,R as LabelFormatting,z as LabelsWithIcons,B as Radius,G as Screenshot,W as StatusDonut,U as WithLegend,K as __namedExportsOrder,F as default};