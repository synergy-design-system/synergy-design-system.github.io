import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,t as r}from"./lit-D4-0ovri.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Cw7zwOlI.js";import{t as l}from"./react-Q1GcV6wX.js";import{c as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./chromatic-config-DEqEAZ11.js";import{n as _,t as v}from"./formatter-34eogR_H.js";import{n as y,r as b,t as x}from"./component-1Z3hZXYb.js";import{t as S}from"./taggedTemplateLiteral-BZenJ0bZ.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{C=e(l(),1),r(),s(),d(),h(),m(),_(),b(),f(),window.ChartTokens=u,window.ComponentTokens=p,window.formatter=v,N={component:`syn-chart`,parameters:{chromatic:{...g},docs:{description:{component:y(`chart`,`donut-series-default`)},page:()=>C.createElement(C.Fragment,null,C.createElement(a,null),C.createElement(i,null),C.createElement(o,null),C.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Donut Chart`},P={parameters:{docs:{description:{story:y(`chart`,`donut-series-preset`)}}},render:()=>n(w||=S([`
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
  `]))},F={parameters:{docs:{description:{story:y(`chart`,`donut-series-colors`)}}},render:()=>n(T||=S([`
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
  `]))},I={parameters:{docs:{description:{story:y(`chart`,`donut-series-label-formatting`)}}},render:()=>n(E||=S([`
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
  `]))},L={parameters:{docs:{description:{story:y(`chart`,`donut-series-labels`)}}},render:()=>n(D||=S([`
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
  `]))},R={parameters:{docs:{description:{story:y(`chart`,`donut-series-radius`)}}},render:()=>n(O||=S([`
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
  `]))},z={parameters:{docs:{description:{story:y(`chart`,`donut-series-center`)}}},render:()=>n(k||=S([`
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
  `]))},B={parameters:{docs:{description:{story:y(`chart`,`donut-series-insets`)}}},render:()=>n(A||=S([`
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
  `]))},V={parameters:{docs:{description:{story:y(`chart`,`donut-series-legend`)}}},render:()=>n(j||=S([`
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
  `]))},H={parameters:{docs:{description:{story:y(`chart`,`donut-series-status`)}}},render:()=>n(M||=S([`
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
  `]))},U=x({Default:P,CustomColors:F,LabelFormatting:I,LabelsWithIcons:L,Radius:R,AdjustCenterPosition:z,Insets:B,WithLegend:V,StatusDonut:H},700),W=[`Default`,`CustomColors`,`LabelFormatting`,`LabelsWithIcons`,`Radius`,`AdjustCenterPosition`,`Insets`,`WithLegend`,`StatusDonut`,`Screenshot`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  CustomColors,
  LabelFormatting,
  LabelsWithIcons,
  Radius,
  AdjustCenterPosition,
  Insets,
  WithLegend,
  StatusDonut
}, 700)`,...U.parameters?.docs?.source}}}})))()}G();export{z as AdjustCenterPosition,F as CustomColors,P as Default,B as Insets,I as LabelFormatting,L as LabelsWithIcons,R as Radius,U as Screenshot,H as StatusDonut,V as WithLegend,W as __namedExportsOrder,N as default};