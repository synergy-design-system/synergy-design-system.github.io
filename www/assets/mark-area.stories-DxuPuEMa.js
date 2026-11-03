import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u,o as d,r as f,s as p,t as m}from"./chromatic-config-q1zR883M.js";import{n as h,r as g,t as _}from"./component-K7w6EZ8X.js";import{t as v}from"./taggedTemplateLiteral-CWT6dLlS.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{y=e(l(),1),r(),s(),f(),p(),g(),u(),window.ComponentTokens=d,T={component:`syn-chart`,parameters:{chromatic:{...m},docs:{description:{component:h(`chart`,`mark-area-default`)},page:()=>y.createElement(y.Fragment,null,y.createElement(a,null),y.createElement(i,null),y.createElement(o,null),y.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Mark Areas`},E={parameters:{docs:{description:{story:h(`chart`,`mark-area-min-max`)}}},render:()=>n(b||=v([`
    <syn-chart id="mark-area-min-max"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-min-max');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([
            { 
              data: [150, 230, 270, 218, 135, 147, 260],
              markArea: {
                data: [
                  [{ type: 'average' }, { type: 'max' }], 
                ],
              }
            }
          ])
      });
    <\/script>
  `]))},D={parameters:{docs:{description:{story:h(`chart`,`mark-area-value-range`)}}},render:()=>n(x||=v([`
    <syn-chart id="mark-area-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-value-range');

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
            markArea: {
              data: [[
                { yAxis: 120 },
                { yAxis: 200 },
              ]],
            },
          }]);
      });
    <\/script>
  `]))},O={parameters:{docs:{description:{story:h(`chart`,`mark-area-category-ranges`)}}},render:()=>n(S||=v([`
    <syn-chart id="mark-area-category-ranges"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-category-ranges');

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
            markArea: {
              data: [
                [
                  { xAxis: 'Mon', name: 'Low activity', label: { position: 'insideTop' } },
                  { xAxis: 'Tue' },
                ],
                [
                  { xAxis: 'Fri', name: 'High activity', label: { position: 'insideTop' } },
                  { xAxis: 'Sun' },
                ],
              ],
            },
          }]);
      });
    <\/script>
  `]))},k={parameters:{docs:{description:{story:h(`chart`,`mark-area-label-position`)}}},render:()=>n(C||=v([`
    <syn-chart id="mark-area-label-position"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-label-position');
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
            markArea: {
              data: [
                [
                  {
                    yAxis: 110,
                    name: 'Horizontal Position',
                  },
                  { yAxis: 160 },
                ],
                [
                  {
                    xAxis: 'Wed',
                    name: 'Vertical Position',
                    label: {
                      position: 'insideTop',
                    } },
                  { xAxis: 'Fri' },
                ],
              ],
            },
          }]);
      });
    <\/script>
  `]))},A={parameters:{docs:{description:{story:h(`chart`,`mark-area-intent-colors`)}}},render:()=>n(w||=v([`
    <syn-chart id="mark-area-intent-colors"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-intent-colors');
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
            markArea: {
              data: [
                [
                  {
                    yAxis: 230,
                    name: 'Too high',
                    itemStyle: { color: getColor('SynNamurErrorColor'), opacity: 0.3 },
                  },
                  { yAxis: 280 },
                ],
                [
                  {
                    yAxis: 80,
                    name: 'Too low',
                    itemStyle: { color: getColor('SynNamurErrorColor'), opacity: 0.3 },
                  },
                  { yAxis: 120 },
                ],
              ],
            },
          }]);
      });
    <\/script>
  `]))},j=_({MinMaxAndAverage:E,ValueRange:D,CategoryRange:O,LabelPosition:k,IntentColors:A},700),M=[`MinMaxAndAverage`,`ValueRange`,`CategoryRange`,`LabelPosition`,`IntentColors`,`Screenshot`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-area-min-max')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-area-min-max"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-min-max');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
          })
          .seriesLine([
            { 
              data: [150, 230, 270, 218, 135, 147, 260],
              markArea: {
                data: [
                  [{ type: 'average' }, { type: 'max' }], 
                ],
              }
            }
          ])
      });
    <\/script>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-area-value-range')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-area-value-range"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-value-range');

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
            markArea: {
              data: [[
                { yAxis: 120 },
                { yAxis: 200 },
              ]],
            },
          }]);
      });
    <\/script>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-area-category-ranges')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-area-category-ranges"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-category-ranges');

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
            markArea: {
              data: [
                [
                  { xAxis: 'Mon', name: 'Low activity', label: { position: 'insideTop' } },
                  { xAxis: 'Tue' },
                ],
                [
                  { xAxis: 'Fri', name: 'High activity', label: { position: 'insideTop' } },
                  { xAxis: 'Sun' },
                ],
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
        story: generateStoryDescription('chart', 'mark-area-label-position')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-area-label-position"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-label-position');
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
            markArea: {
              data: [
                [
                  {
                    yAxis: 110,
                    name: 'Horizontal Position',
                  },
                  { yAxis: 160 },
                ],
                [
                  {
                    xAxis: 'Wed',
                    name: 'Vertical Position',
                    label: {
                      position: 'insideTop',
                    } },
                  { xAxis: 'Fri' },
                ],
              ],
            },
          }]);
      });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-area-intent-colors')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-area-intent-colors"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-area-intent-colors');
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
            markArea: {
              data: [
                [
                  {
                    yAxis: 230,
                    name: 'Too high',
                    itemStyle: { color: getColor('SynNamurErrorColor'), opacity: 0.3 },
                  },
                  { yAxis: 280 },
                ],
                [
                  {
                    yAxis: 80,
                    name: 'Too low',
                    itemStyle: { color: getColor('SynNamurErrorColor'), opacity: 0.3 },
                  },
                  { yAxis: 120 },
                ],
              ],
            },
          }]);
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  MinMaxAndAverage,
  ValueRange,
  CategoryRange,
  LabelPosition,
  IntentColors
}, 700)`,...j.parameters?.docs?.source}}}})))()}N();export{O as CategoryRange,A as IntentColors,k as LabelPosition,E as MinMaxAndAverage,j as Screenshot,D as ValueRange,M as __namedExportsOrder,T as default};