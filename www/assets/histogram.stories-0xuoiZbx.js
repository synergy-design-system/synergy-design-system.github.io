import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{c as d,l as f,n as p,r as m,t as h}from"./chromatic-config-BU3qlFWk.js";import{n as g,r as _,t as v}from"./component-C3CNoVq_.js";import{n as y,t as b}from"./chart-series-documentation-4QV8F8Mx.js";import{t as x}from"./taggedTemplateLiteral-CWT6dLlS.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{S=e(l(),1),r(),s(),m(),f(),_(),p(),y(),window.ChartTokens=d,P={component:`syn-chart`,parameters:{chromatic:{...h},docs:{description:{component:g(`chart`,`histogram-default`)},page:()=>S.createElement(S.Fragment,null,S.createElement(a,null),S.createElement(i,null),S.createElement(o,null),S.createElement(b,{section:`Histogram series presets`}),S.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Histogram`},F={parameters:{docs:{description:{story:g(`chart`,`histogram-preset`)}}},render:()=>n(C||=x([`
    <syn-chart id="histogram-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-default');

      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            name: 'Value Range',
            type: 'category',
            data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
          },
          yAxis: {
            name: 'Frequency',
          },
          series: [
            {
              data: [2, 8, 17, 14, 6, 3],
              type: 'bar',
              barMaxWidth: '100%',
            },
          ]
        }
      });
    <\/script>
  `]))},I={parameters:{docs:{description:{story:g(`chart`,`histogram-vertical`)}}},render:()=>n(w||=x([`
    <syn-chart id="histogram-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-vertical');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  `]))},L={parameters:{docs:{description:{story:g(`chart`,`histogram-horizontal`)}}},render:()=>n(T||=x([`
    <syn-chart id="histogram-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-horizontal');

      const baseConfig = {
        yAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        xAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  `]))},R={parameters:{docs:{description:{story:g(`chart`,`histogram-value-range`)}}},render:()=>n(E||=x([`
    <syn-chart id="histogram-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-value-range');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          min: 0,
          max: 25,
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  `]))},z={parameters:{docs:{description:{story:g(`chart`,`histogram-negative`)}}},render:()=>n(D||=x([`
    <syn-chart id="histogram-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-negative');

      const baseConfig = {
        yAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        xAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [-2, -8, -17, -14, -6, -3] }])
      });
    <\/script>
  `]))},B={parameters:{docs:{description:{story:g(`chart`,`histogram-positive-and-negative`)}}},render:()=>n(O||=x([`
    <syn-chart id="histogram-positive-and-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-positive-and-negative');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [-6, -2, 8, 14, 6, 3] }])
      });
    <\/script>
  `]))},V={parameters:{docs:{description:{story:g(`chart`,`histogram-custom-width`)}}},render:()=>n(k||=x([`
    <syn-chart id="histogram-fixed-width"></syn-chart>
    <syn-chart id="histogram-relative-width"></syn-chart>
    <script type="module">
      const fixedWidthCharts = document.querySelectorAll('#histogram-fixed-width');
      const relativeWidthCharts = document.querySelectorAll('#histogram-relative-width');
      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      fixedWidthCharts.forEach((fixed) => {
        fixed.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: [2, 8, 17, 14, 6, 3],
            barWidth: 16,
          }])
      });


      relativeWidthCharts.forEach((relative) => {
        relative.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: [2, 8, 17, 14, 6, 3],
            barWidth: '30%',
          }])
      });
    <\/script>
  `]))},H={parameters:{docs:{description:{story:g(`chart`,`histogram-no-gap`)}}},render:()=>n(A||=x([`
    <syn-chart id="histogram-no-gap"></syn-chart>
    <script type="module">
      const noGapCharts = document.querySelectorAll('#histogram-no-gap');
      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      noGapCharts.forEach((noGap) => {
        noGap.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: [2, 8, 17, 14, 6, 3],
            barCategoryGap: 0,
          }])
      });
    <\/script>
  `]))},U={parameters:{docs:{description:{story:g(`chart`,`histogram-custom-color`)}}},render:()=>n(j||=x([`
    <syn-chart id="histogram-custom-color"></syn-chart>
    <script type="module">
      const getChartColor = token => ChartTokens[token]['light'];
      const charts = document.querySelectorAll('#histogram-custom-color');
      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
        color: [getChartColor('SynChartSequential02_70')],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  `]))},W={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`chart`,`histogram-tooltip`)}}},play:async({canvasElement:e})=>{if(u()){let t=e.querySelector(`#histogram-tooltip`);if(!t)return;let n=t.getInstance();await new Promise(e=>{n.on(`finished`,()=>{n.dispatchAction({type:`showTip`,x:320,y:50}),e()})})}},render:()=>n(M||=x([`
    <syn-chart id="histogram-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-tooltip');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
          .tooltipShow({ axisPointer: { type: 'shadow' } })
      });
    <\/script>
  `]))},G={parameters:{docs:{description:{story:g(`chart`,`histogram-large-data`)}}},render:()=>n(N||=x([`
    <syn-chart id="histogram-image-processing"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-image-processing');
      const binCount = 290;
      const intensities = Array.from({ length: binCount }, (_, intensity) => String(intensity));
      // Model an image with shadow, midtone, and highlight regions.
      const frequencies = Array.from({ length: binCount }, (_, intensity) => {
        const shadows = 9000 * Math.exp(-0.5 * ((intensity - 42) / 18) ** 2);
        const midtones = 14000 * Math.exp(-0.5 * ((intensity - 128) / 30) ** 2);
        const highlights = 6500 * Math.exp(-0.5 * ((intensity - 214) / 22) ** 2);
        return Math.round(shadows + midtones + highlights);
      });

      const baseConfig = {
        xAxis: {
          data: intensities,
          name: 'Grayscale intensity (0-255)',
          type: 'category',
        },
        yAxis: {
          name: 'Pixel frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: frequencies,
            barCategoryGap: 0,
          }]);
      });
    <\/script>
  `]))},K=v({Default:F,Vertical:I,Horizontal:L,FixedValueRange:R,NegativeValues:z,PositiveAndNegative:B,CustomBarWidth:V,NoGap:H,CustomColors:U,LargeDataSet:G},700),q=[`Default`,`Vertical`,`Horizontal`,`FixedValueRange`,`NegativeValues`,`PositiveAndNegative`,`CustomBarWidth`,`NoGap`,`CustomColors`,`Tooltip`,`LargeDataSet`,`Screenshot`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-default"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-default');

      charts.forEach(chart => {
        chart.config = {
          xAxis: {
            name: 'Value Range',
            type: 'category',
            data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
          },
          yAxis: {
            name: 'Frequency',
          },
          series: [
            {
              data: [2, 8, 17, 14, 6, 3],
              type: 'bar',
              barMaxWidth: '100%',
            },
          ]
        }
      });
    <\/script>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-vertical')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-vertical"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-vertical');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-horizontal')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-horizontal"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-horizontal');

      const baseConfig = {
        yAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        xAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-value-range')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-value-range');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          min: 0,
          max: 25,
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
      });
    <\/script>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-negative')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-negative');

      const baseConfig = {
        yAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        xAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [-2, -8, -17, -14, -6, -3] }])
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-positive-and-negative')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-positive-and-negative"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-positive-and-negative');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [-6, -2, 8, 14, 6, 3] }])
      });
    <\/script>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-custom-width')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-fixed-width"></syn-chart>
    <syn-chart id="histogram-relative-width"></syn-chart>
    <script type="module">
      const fixedWidthCharts = document.querySelectorAll('#histogram-fixed-width');
      const relativeWidthCharts = document.querySelectorAll('#histogram-relative-width');
      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      fixedWidthCharts.forEach((fixed) => {
        fixed.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: [2, 8, 17, 14, 6, 3],
            barWidth: 16,
          }])
      });


      relativeWidthCharts.forEach((relative) => {
        relative.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: [2, 8, 17, 14, 6, 3],
            barWidth: '30%',
          }])
      });
    <\/script>
  \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-no-gap')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-no-gap"></syn-chart>
    <script type="module">
      const noGapCharts = document.querySelectorAll('#histogram-no-gap');
      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      noGapCharts.forEach((noGap) => {
        noGap.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: [2, 8, 17, 14, 6, 3],
            barCategoryGap: 0,
          }])
      });
    <\/script>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-custom-color')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-custom-color"></syn-chart>
    <script type="module">
      const getChartColor = token => ChartTokens[token]['light'];
      const charts = document.querySelectorAll('#histogram-custom-color');
      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
        color: [getChartColor('SynChartSequential02_70')],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
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
        story: generateStoryDescription('chart', 'histogram-tooltip')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Only run this code when running in Chromatic, as it is used to show the tooltip for the snapshot.
    if (isChromatic()) {
      const chart = canvasElement.querySelector<SynChart>('#histogram-tooltip');
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
    <syn-chart id="histogram-tooltip"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-tooltip');

      const baseConfig = {
        xAxis: {
          name: 'Value Range',
          type: 'category',
          data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
        },
        yAxis: {
          name: 'Frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{ data: [2, 8, 17, 14, 6, 3] }])
          .tooltipShow({ axisPointer: { type: 'shadow' } })
      });
    <\/script>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'histogram-large-data')
      }
    }
  },
  render: () => html\`
    <syn-chart id="histogram-image-processing"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#histogram-image-processing');
      const binCount = 290;
      const intensities = Array.from({ length: binCount }, (_, intensity) => String(intensity));
      // Model an image with shadow, midtone, and highlight regions.
      const frequencies = Array.from({ length: binCount }, (_, intensity) => {
        const shadows = 9000 * Math.exp(-0.5 * ((intensity - 42) / 18) ** 2);
        const midtones = 14000 * Math.exp(-0.5 * ((intensity - 128) / 30) ** 2);
        const highlights = 6500 * Math.exp(-0.5 * ((intensity - 214) / 22) ** 2);
        return Math.round(shadows + midtones + highlights);
      });

      const baseConfig = {
        xAxis: {
          data: intensities,
          name: 'Grayscale intensity (0-255)',
          type: 'category',
        },
        yAxis: {
          name: 'Pixel frequency',
        },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesHistogram([{
            data: frequencies,
            barCategoryGap: 0,
          }]);
      });
    <\/script>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Vertical,
  Horizontal,
  FixedValueRange,
  NegativeValues,
  PositiveAndNegative,
  CustomBarWidth,
  NoGap,
  CustomColors,
  LargeDataSet
}, 700)`,...K.parameters?.docs?.source}}}})))()}J();export{V as CustomBarWidth,U as CustomColors,F as Default,R as FixedValueRange,L as Horizontal,G as LargeDataSet,z as NegativeValues,H as NoGap,B as PositiveAndNegative,K as Screenshot,W as Tooltip,I as Vertical,q as __namedExportsOrder,P as default};