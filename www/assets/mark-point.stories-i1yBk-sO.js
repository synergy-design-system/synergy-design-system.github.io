import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{c as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./chromatic-config-q1zR883M.js";import{n as _,r as v,t as y}from"./component-K7w6EZ8X.js";import{t as b}from"./taggedTemplateLiteral-CWT6dLlS.js";var x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{x=e(l(),1),r(),s(),m(),h(),d(),v(),f(),window.ComponentTokens=p,window.ChartTokens=u,E={component:`syn-chart`,parameters:{chromatic:{...g},docs:{description:{component:_(`chart`,`mark-point-default`)},page:()=>x.createElement(x.Fragment,null,x.createElement(a,null),x.createElement(i,null),x.createElement(o,null),x.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Mark Points`},D={parameters:{docs:{description:{story:_(`chart`,`mark-point-min-max-average`)}}},render:()=>n(S||=b([`
    <syn-chart id="mark-point-min-max-and-average"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-min-max-and-average');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 270, 218, 135, 147, 260],
            markPoint: {
              data: [
                { type: 'min' },
                { type: 'max' },
                { type: 'average' },
              ],
            },
          }]);
      });
    <\/script>
  `]))},O={parameters:{docs:{description:{story:_(`chart`,`mark-point-coordinates`)}}},render:()=>n(C||=b([`
    <syn-chart id="mark-point-coordinates"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-coordinates');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markPoint: {
              data: [
                { coord: ['Tue', 230], value: 230 },
                { coord: ['Fri', 135], value: 135 },
              ],
            },
          }]);
      });
    <\/script>
  `]))},k={parameters:{docs:{description:{story:_(`chart`,`mark-point-custom-styling`)}}},render:()=>n(w||=b([`
    <syn-chart id="mark-point-custom-styling"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-custom-styling');
      const getColor = (token) => ComponentTokens[token]['light'];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markPoint: {
              data: [
                {
                  coord: ['Tue', 230],
                  name: 'Target met',
                  symbol: 'circle',
                  symbolSize: 18,
                  label: { position: 'top' },
                  itemStyle: { color: getColor('SynNamurSuccessColor') },
                },
                {
                  coord: ['Thu', 218],
                  name: 'Warning',
                  symbol: 'triangle',
                  symbolSize: 20,
                  label: { position: 'top' },
                  itemStyle: { color: getColor('SynNamurWarningColor') },
                },
                {
                  coord: ['Sat', 147],
                  name: 'Critical',
                  symbol: 'diamond',
                  symbolSize: 24,
                  label: { position: 'right' },
                  itemStyle: { color: getColor('SynNamurErrorColor') },
                },
              ],
              label: { formatter: '{b}' },
            },
          }]);
      });
    <\/script>
  `]))},A={parameters:{docs:{description:{story:_(`chart`,`mark-point-long-labels`)}}},render:()=>n(T||=b([`
    <syn-chart id="mark-point-labels"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-labels');
      const getChartColor = (token) => ChartTokens[token]['light'];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markPoint: {
              data: [
                { coord: ['Tue', 230], name: 'Inspection', label: { position: 'top' } },
                { coord: ['Fri', 135], name: 'Maintenance', label: { position: 'bottom' } },
              ],
              label: { formatter: '{b}', position: 'top' },
              symbol: 'circle',
              symbolSize: 16,
              itemStyle: { color: getChartColor('SynChartCategorical01') }
            },
          }]);
      });
    <\/script>
  `]))},j=y({MinMaxAndAverage:D,Coordinates:O,CustomStyling:k,LongLabels:A},700),M=[`MinMaxAndAverage`,`Coordinates`,`CustomStyling`,`LongLabels`,`Screenshot`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-point-min-max-average')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-point-min-max-and-average"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-min-max-and-average');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 270, 218, 135, 147, 260],
            markPoint: {
              data: [
                { type: 'min' },
                { type: 'max' },
                { type: 'average' },
              ],
            },
          }]);
      });
    <\/script>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-point-coordinates')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-point-coordinates"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-coordinates');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markPoint: {
              data: [
                { coord: ['Tue', 230], value: 230 },
                { coord: ['Fri', 135], value: 135 },
              ],
            },
          }]);
      });
    <\/script>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-point-custom-styling')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-point-custom-styling"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-custom-styling');
      const getColor = (token) => ComponentTokens[token]['light'];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markPoint: {
              data: [
                {
                  coord: ['Tue', 230],
                  name: 'Target met',
                  symbol: 'circle',
                  symbolSize: 18,
                  label: { position: 'top' },
                  itemStyle: { color: getColor('SynNamurSuccessColor') },
                },
                {
                  coord: ['Thu', 218],
                  name: 'Warning',
                  symbol: 'triangle',
                  symbolSize: 20,
                  label: { position: 'top' },
                  itemStyle: { color: getColor('SynNamurWarningColor') },
                },
                {
                  coord: ['Sat', 147],
                  name: 'Critical',
                  symbol: 'diamond',
                  symbolSize: 24,
                  label: { position: 'right' },
                  itemStyle: { color: getColor('SynNamurErrorColor') },
                },
              ],
              label: { formatter: '{b}' },
            },
          }]);
      });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-point-long-labels')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-point-labels"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-point-labels');
      const getChartColor = (token) => ChartTokens[token]['light'];

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markPoint: {
              data: [
                { coord: ['Tue', 230], name: 'Inspection', label: { position: 'top' } },
                { coord: ['Fri', 135], name: 'Maintenance', label: { position: 'bottom' } },
              ],
              label: { formatter: '{b}', position: 'top' },
              symbol: 'circle',
              symbolSize: 16,
              itemStyle: { color: getChartColor('SynChartCategorical01') }
            },
          }]);
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  MinMaxAndAverage,
  Coordinates,
  CustomStyling,
  LongLabels
}, 700)`,...j.parameters?.docs?.source}}}})))()}N();export{O as Coordinates,k as CustomStyling,A as LongLabels,D as MinMaxAndAverage,j as Screenshot,M as __namedExportsOrder,E as default};