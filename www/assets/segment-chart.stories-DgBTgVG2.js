import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,t as r}from"./lit-D4-0ovri.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Cw7zwOlI.js";import{t as l}from"./react-Q1GcV6wX.js";import{c as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./chromatic-config-DEqEAZ11.js";import{n as _,t as v}from"./formatter-34eogR_H.js";import{n as y,r as b,t as x}from"./component-1Z3hZXYb.js";import{t as S}from"./taggedTemplateLiteral-BZenJ0bZ.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=t((()=>{C=e(l(),1),r(),s(),d(),h(),m(),_(),b(),f(),window.ChartTokens=u,window.ComponentTokens=p,window.formatter=v,F={component:`syn-chart`,parameters:{chromatic:{...g},docs:{description:{component:y(`chart`,`segment-series-default`)},page:()=>C.createElement(C.Fragment,null,C.createElement(a,null),C.createElement(i,null),C.createElement(o,null),C.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Segment Chart`},I={parameters:{docs:{description:{story:y(`chart`,`segment-series-preset`)}}},render:()=>n(w||=S([`
    <syn-chart id="segment-preset"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-preset');

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              type: 'synSegment',
              data: [5, 10, 50, 80, 100],
            }
          ]
        };
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:y(`chart`,`segment-series-name`)}}},render:()=>n(T||=S([`
    <syn-chart id="segment-name"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-name');
      charts.forEach(chart => {
        const halfChartSize =  () => Math.min(chart.offsetWidth, chart.offsetHeight) / 2;
        let nameWidth = halfChartSize();
        chart.config = handle => handle
          .seriesSegment({
            data: [ 5, 10, 50, 80, 100 ],
            name: 'This is a very long name',
            nameTextStyle: {
              overflow: 'break',
              width: nameWidth
            }
          });

        setTimeout(() => {
          const instance = chart.getInstance();
          // Adapt the name width when the chart is resized, so it breaks correctly
          window.addEventListener('resize', () => {
            nameWidth = halfChartSize();
            instance.setOption({ series:[ { nameTextStyle: { width: nameWidth  } } ]});
          });
        });
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:y(`chart`,`segment-series-colors`)}}},render:()=>n(E||=S([`
    <syn-chart id="segment-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const charts = document.querySelectorAll('#segment-colors');
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
            getChartColor('SynChartSequential01_40')
          ]
          })
        .seriesSegment({
          data: [ 70, 80, 90, 75, 60, 50 ],
        });
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:y(`chart`,`segment-series-label-formatting`)}}},render:()=>n(D||=S([`
    <syn-chart id="segment-label-formatting"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-label-formatting');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
            data: [
            {
              value: 70,
              label: 'Custom string',
            },
            {
              value: 70,
              label: undefined,
            },
            {
              value: 70,
              label: formatter.unitFormatter('ms'),
            },
            {
              value: 70,
              label: formatter.numberShorthandFormatter(),
            },
            {
              value: 70,
              label: formatter.numberFormatter(undefined, { minimumFractionDigits: 2 }),
            },
            {
              value: 70,
            },
          ],
        });
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:y(`chart`,`segment-series-gap`)}}},render:()=>n(O||=S([`
    <syn-chart id="segment-gap"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-gap');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [ 5, 10, 50, 80, 100 ],
          gap: 0.5,
          gapOrientation: 90,
        });
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:y(`chart`,`segment-series-no-gap`)}}},render:()=>n(k||=S([`
    <syn-chart id="segment-no-gap"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-no-gap');
      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [90, 100, 20, 10, 50, 90, 10, 0, 20, 10, 30, 70, 40, 10, 30, 20],
          gap: 0,
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSdjdXJyZW50Q29sb3InPjxwYXRoIGQ9Ik0xMiAyMS41cS0xLjg3MyAwLTMuMTg3LTEuMzE0UTcuNSAxOC44NzQgNy41IDE3cTAtMS4xNDMuNTMtMi4xMTdhNC41NiA0LjU2IDAgMCAxIDEuNDctMS42MTRWNXEwLTEuMDQ4LjcyNi0xLjc3NEEyLjQgMi40IDAgMCAxIDEyIDIuNXExLjA0OCAwIDEuNzc0LjcyNlQxNC41IDV2OC4yN2E0LjU2IDQuNTYgMCAwIDEgMS40NyAxLjYxM3EuNTMuOTc0LjUzIDIuMTE3IDAgMS44NzMtMS4zMTMgMy4xODZRMTMuODczIDIxLjUgMTIgMjEuNW0tMS0xMC4zMDhoMnYtMS4yNWgtMXYtLjg4NGgxVjYuOTQyaC0xdi0uODg0aDFWNWEuOTcuOTcgMCAwIDAtLjI4Ny0uNzEzQS45Ny45NyAwIDAgMCAxMiA0YS45Ny45NyAwIDAgMC0uNzEzLjI4N0EuOTcuOTcgMCAwIDAgMTEgNXoiLz48L3N2Zz4=",
        });
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:y(`chart`,`segment-series-min-max`)}}},render:()=>n(A||=S([`
    <syn-chart id="segment-min-max"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-min-max');
      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          top: 80,
          min: -5,
          max: 20,
          data: [
            { value: -1, name: 'January', label: formatter.unitFormatter('°C') },
            { value: 2, name: 'February', label: formatter.unitFormatter('°C') },
            { value: 5, name: 'March', label: formatter.unitFormatter('°C') },
            { value: 9, name: 'April', label: formatter.unitFormatter('°C') },
            { value: 14, name: 'May', label: formatter.unitFormatter('°C') },
            { value: 17, name: 'June', label: formatter.unitFormatter('°C') },
            { value: 19, name: 'July', label: formatter.unitFormatter('°C') },
            { value: 18, name: 'August', label: formatter.unitFormatter('°C') },
            { value: 14, name: 'September', label: formatter.unitFormatter('°C') },
            { value: 10, name: 'October', label: formatter.unitFormatter('°C') },
            { value: 5, name: 'November', label: formatter.unitFormatter('°C') },
            { value: -0.5, name: 'December', label: formatter.unitFormatter('°C') },
          ],
          name: 'Temperature',
        }).legendShow();
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:y(`chart`,`segment-series-weights`)}}},render:()=>n(j||=S([`
    <syn-chart id="segment-weights"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-weights');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
            data: [
            {
              label: formatter.unitFormatter('%'),
              value: 15,
              weight: 0.2,
            },
            {
              label: formatter.unitFormatter('%'),
              value: 30,
            },
            {
              label: formatter.unitFormatter('%'),
              value: 50,
              weight: 0.5,
            },
            {
              label: formatter.unitFormatter('%'),
              value: 80,
              weight: 0.3
            },
            {
              label: formatter.unitFormatter('%'),
              value: 70,
              weight: 0.7,
            },
          ],
        });
      });
    <\/script>
  `]))},W={parameters:{docs:{description:{story:y(`chart`,`segment-series-styling`)}}},render:()=>n(M||=S([`
    <syn-chart id="segment-styling"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-styling');

      const getColor = (token) => {
        return ComponentTokens[token]['light'];
      };

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [
            {
              value: 60,
              itemStyle: {
                color: getColor('SynNamurErrorColor'),
              },
              label: 'one',
              labelTextStyle: {
                fill: getColor('SynNamurErrorColor'),
              },
            },
            {
              value: 30,
              itemStyle: {
                color: getColor('SynNamurWarningColor'),
                borderWidth: 1,
              },
              label: 'two',
              labelTextStyle: {
                fill: getColor('SynNamurWarningColor'),
              },
            },
            {
              value: 50,
              backgroundStyle: {
                 color: getColor('SynColorNeutral200'),
              },
              itemStyle: {
                borderColor: getColor('SynNamurErrorColor'),
                borderWidth: 3,
                color: getColor('SynNamurSuccessColor'),
              },
              label: 'three',
              labelTextStyle: {
                fill: getColor('SynNamurSuccessColor'),
                fontSize: 24
              },
            },
          ],
          itemStyle: {
              color: getColor('SynNamurNeutralColor'),
              borderColor: getColor('SynColorNeutral950'),
              borderWidth: 1,
          },
          backgroundStyle: {
            color: getColor('SynColorNeutral100'),
          },
          labelTextStyle: {
            fontSize: 12,
          }
        });
      });
    <\/script>
  `]))},G={parameters:{docs:{description:{story:y(`chart`,`segment-series-insets`)}}},render:()=>n(N||=S([`
    <syn-chart id="segment-insets"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-insets');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          top: 20,
          right: 30,
          bottom: '20%',
          left: 60,
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  `]))},K={parameters:{docs:{description:{story:y(`chart`,`segment-series-legend`)}}},render:()=>n(P||=S([`
    <syn-chart id="segment-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-legend');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [
            {
              value: 15,
              name: 'One',
            },
            {
              value: 30,
              name: 'Two',
            },
            {
              value: 50,
              name: 'Three',
            },
            {
              value: 80,
              name: 'Four',
            },
          ],
          top: 20
        })
        .legendShow()
        ;
      });
    <\/script>
  `]))},q=x({Default:I,Name:L,CustomColors:R,LabelFormatting:z,Gap:B,NoGap:V,MinMax:H,Weights:U,CustomStyling:W,Insets:G,WithLegend:K},200),J=[`Default`,`Name`,`CustomColors`,`LabelFormatting`,`Gap`,`NoGap`,`MinMax`,`Weights`,`CustomStyling`,`Insets`,`WithLegend`,`Screenshot`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-preset"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-preset');

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              type: 'synSegment',
              data: [5, 10, 50, 80, 100],
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
        story: generateStoryDescription('chart', 'segment-series-name')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-name"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-name');
      charts.forEach(chart => {
        const halfChartSize =  () => Math.min(chart.offsetWidth, chart.offsetHeight) / 2;
        let nameWidth = halfChartSize();
        chart.config = handle => handle
          .seriesSegment({
            data: [ 5, 10, 50, 80, 100 ],
            name: 'This is a very long name',
            nameTextStyle: {
              overflow: 'break',
              width: nameWidth
            }
          });

        setTimeout(() => {
          const instance = chart.getInstance();
          // Adapt the name width when the chart is resized, so it breaks correctly
          window.addEventListener('resize', () => {
            nameWidth = halfChartSize();
            instance.setOption({ series:[ { nameTextStyle: { width: nameWidth  } } ]});
          });
        });
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-colors')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-colors"></syn-chart>
    <script type="module">
      // To use Synergy chart colors, import the resolved chart tokens. The chart
      // configuration currently requires hex values, which can be retrieved
      // directly from the chart tokens object:
      //
      // import { ResolvedTokens as ChartTokens } from '@synergy-design-system/tokens/charts/resolved';

      const charts = document.querySelectorAll('#segment-colors');
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
            getChartColor('SynChartSequential01_40')
          ]
          })
        .seriesSegment({
          data: [ 70, 80, 90, 75, 60, 50 ],
        });
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-label-formatting')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-label-formatting"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-label-formatting');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
            data: [
            {
              value: 70,
              label: 'Custom string',
            },
            {
              value: 70,
              label: undefined,
            },
            {
              value: 70,
              label: formatter.unitFormatter('ms'),
            },
            {
              value: 70,
              label: formatter.numberShorthandFormatter(),
            },
            {
              value: 70,
              label: formatter.numberFormatter(undefined, { minimumFractionDigits: 2 }),
            },
            {
              value: 70,
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
        story: generateStoryDescription('chart', 'segment-series-gap')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-gap"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-gap');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [ 5, 10, 50, 80, 100 ],
          gap: 0.5,
          gapOrientation: 90,
        });
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-no-gap')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-no-gap"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-no-gap');
      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [90, 100, 20, 10, 50, 90, 10, 0, 20, 10, 30, 70, 40, 10, 30, 20],
          gap: 0,
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSdjdXJyZW50Q29sb3InPjxwYXRoIGQ9Ik0xMiAyMS41cS0xLjg3MyAwLTMuMTg3LTEuMzE0UTcuNSAxOC44NzQgNy41IDE3cTAtMS4xNDMuNTMtMi4xMTdhNC41NiA0LjU2IDAgMCAxIDEuNDctMS42MTRWNXEwLTEuMDQ4LjcyNi0xLjc3NEEyLjQgMi40IDAgMCAxIDEyIDIuNXExLjA0OCAwIDEuNzc0LjcyNlQxNC41IDV2OC4yN2E0LjU2IDQuNTYgMCAwIDEgMS40NyAxLjYxM3EuNTMuOTc0LjUzIDIuMTE3IDAgMS44NzMtMS4zMTMgMy4xODZRMTMuODczIDIxLjUgMTIgMjEuNW0tMS0xMC4zMDhoMnYtMS4yNWgtMXYtLjg4NGgxVjYuOTQyaC0xdi0uODg0aDFWNWEuOTcuOTcgMCAwIDAtLjI4Ny0uNzEzQS45Ny45NyAwIDAgMCAxMiA0YS45Ny45NyAwIDAgMC0uNzEzLjI4N0EuOTcuOTcgMCAwIDAgMTEgNXoiLz48L3N2Zz4=",
        });
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-min-max')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-min-max"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-min-max');
      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          top: 80,
          min: -5,
          max: 20,
          data: [
            { value: -1, name: 'January', label: formatter.unitFormatter('°C') },
            { value: 2, name: 'February', label: formatter.unitFormatter('°C') },
            { value: 5, name: 'March', label: formatter.unitFormatter('°C') },
            { value: 9, name: 'April', label: formatter.unitFormatter('°C') },
            { value: 14, name: 'May', label: formatter.unitFormatter('°C') },
            { value: 17, name: 'June', label: formatter.unitFormatter('°C') },
            { value: 19, name: 'July', label: formatter.unitFormatter('°C') },
            { value: 18, name: 'August', label: formatter.unitFormatter('°C') },
            { value: 14, name: 'September', label: formatter.unitFormatter('°C') },
            { value: 10, name: 'October', label: formatter.unitFormatter('°C') },
            { value: 5, name: 'November', label: formatter.unitFormatter('°C') },
            { value: -0.5, name: 'December', label: formatter.unitFormatter('°C') },
          ],
          name: 'Temperature',
        }).legendShow();
      });
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-weights')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-weights"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-weights');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
            data: [
            {
              label: formatter.unitFormatter('%'),
              value: 15,
              weight: 0.2,
            },
            {
              label: formatter.unitFormatter('%'),
              value: 30,
            },
            {
              label: formatter.unitFormatter('%'),
              value: 50,
              weight: 0.5,
            },
            {
              label: formatter.unitFormatter('%'),
              value: 80,
              weight: 0.3
            },
            {
              label: formatter.unitFormatter('%'),
              value: 70,
              weight: 0.7,
            },
          ],
        });
      });
    <\/script>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-styling')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-styling"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-styling');

      const getColor = (token) => {
        return ComponentTokens[token]['light'];
      };

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [
            {
              value: 60,
              itemStyle: {
                color: getColor('SynNamurErrorColor'),
              },
              label: 'one',
              labelTextStyle: {
                fill: getColor('SynNamurErrorColor'),
              },
            },
            {
              value: 30,
              itemStyle: {
                color: getColor('SynNamurWarningColor'),
                borderWidth: 1,
              },
              label: 'two',
              labelTextStyle: {
                fill: getColor('SynNamurWarningColor'),
              },
            },
            {
              value: 50,
              backgroundStyle: {
                 color: getColor('SynColorNeutral200'),
              },
              itemStyle: {
                borderColor: getColor('SynNamurErrorColor'),
                borderWidth: 3,
                color: getColor('SynNamurSuccessColor'),
              },
              label: 'three',
              labelTextStyle: {
                fill: getColor('SynNamurSuccessColor'),
                fontSize: 24
              },
            },
          ],
          itemStyle: {
              color: getColor('SynNamurNeutralColor'),
              borderColor: getColor('SynColorNeutral950'),
              borderWidth: 1,
          },
          backgroundStyle: {
            color: getColor('SynColorNeutral100'),
          },
          labelTextStyle: {
            fontSize: 12,
          }
        });
      });
    <\/script>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-insets')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-insets"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-insets');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          top: 20,
          right: 30,
          bottom: '20%',
          left: 60,
          data: [10, 20, 30, 40],
        });
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'segment-series-legend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="segment-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#segment-legend');

      charts.forEach(chart => {
        chart.config = handle => handle
        .seriesSegment({
          data: [
            {
              value: 15,
              name: 'One',
            },
            {
              value: 30,
              name: 'Two',
            },
            {
              value: 50,
              name: 'Three',
            },
            {
              value: 80,
              name: 'Four',
            },
          ],
          top: 20
        })
        .legendShow()
        ;
      });
    <\/script>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Name,
  CustomColors,
  LabelFormatting,
  Gap,
  NoGap,
  MinMax,
  Weights,
  CustomStyling,
  Insets,
  WithLegend
}, 200)`,...q.parameters?.docs?.source}}}})))()}Y();export{R as CustomColors,W as CustomStyling,I as Default,B as Gap,G as Insets,z as LabelFormatting,H as MinMax,L as Name,V as NoGap,q as Screenshot,U as Weights,K as WithLegend,J as __namedExportsOrder,F as default};