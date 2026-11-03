import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u,o as d,r as f,s as p,t as m}from"./chromatic-config-BU3qlFWk.js";import{n as h,r as g,t as _}from"./component-C3CNoVq_.js";import{t as v}from"./taggedTemplateLiteral-CWT6dLlS.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{y=e(l(),1),r(),s(),f(),p(),g(),u(),window.ComponentTokens=d,D={component:`syn-chart`,parameters:{chromatic:{...m},docs:{description:{component:h(`chart`,`mark-line-default`)},page:()=>y.createElement(y.Fragment,null,y.createElement(a,null),y.createElement(i,null),y.createElement(o,null),y.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Mark Lines`},O={parameters:{docs:{description:{story:h(`chart`,`mark-line-min-max`)}}},render:()=>n(b||=v([`
    <syn-chart id="mark-line-min-max"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-min-max');

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
              markLine: {
                data: [
                  { type: 'min', name: 'Minimum'},
                  { type: 'max', name: 'Maximum' }
                ],
              }
            }
          ])
      });
    <\/script>
  `]))},k={parameters:{docs:{description:{story:h(`chart`,`mark-line-average`)}}},render:()=>n(x||=v([`
    <syn-chart id="mark-line-average"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-average');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
            grid: { left: 80 },
          })
          .seriesLine([
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              markLine: {
                data: [{ type: 'average', name: 'Average' }],
              }
            }
          ])
      });
    <\/script>
  `]))},A={parameters:{docs:{description:{story:h(`chart`,`mark-line-thresholds`)}}},render:()=>n(S||=v([`
    <syn-chart id="mark-line-thresholds"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-thresholds');

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
            markLine: {
              data: [
                { yAxis: 240 },
                { 
                  xAxis: 'Sat',
                  label: {
                    position: 'start',
                  }
                },
              ],
            },
          }])
      });
    <\/script>
  `]))},j={parameters:{docs:{description:{story:h(`chart`,`mark-line-coordinates`)}}},render:()=>n(C||=v([`
    <syn-chart id="mark-line-coordinates"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-coordinates');

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
              data: [150, 230, 224, 218, 135, 147, 260],
              markLine: {
                data: [
                  [
                    { coord: ['Mon', 100], name: 'Trend' }, 
                    { coord: ['Sun', 280] },
                  ]
                ],
                symbol: ['none', 'arrow']
              }
            }
          ])
      });
    <\/script>
  `]))},M={parameters:{docs:{description:{story:h(`chart`,`mark-line-intent-colors`)}}},render:()=>n(w||=v([`
    <syn-chart id="mark-line-intent-colors"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-intent-colors');
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
            markLine: {
              data: [
                {
                  yAxis: 100,
                  name: 'Target met',
                  lineStyle: { color: getColor('SynNamurSuccessColor') },
                },
                {
                  yAxis: 180,
                  name: 'Warning',
                  lineStyle: { color: getColor('SynNamurWarningColor') },
                },
                {
                  yAxis: 260,
                  name: 'Critical limit',
                  lineStyle: { color: getColor('SynNamurErrorColor') },
                },
              ],
            },
          }]);
      });
    <\/script>
  `]))},N={parameters:{docs:{description:{story:h(`chart`,`mark-line-label-position`)}}},render:()=>n(T||=v([`
    <syn-chart id="mark-line-label-position"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-label-position');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
            grid: {
              left: 200,
              right: 200,
              top: 50,
            }
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markLine: {
              data: [
                {
                  yAxis: 80,
                  name: 'Horizontal start',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'start',
                  },
                },
                {
                  yAxis: 220,
                  name: 'Horizontal end',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'end',
                  },
                },
                {
                  xAxis: 'Tue',
                  name: 'Vertical start',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'start',
                  },
                },
                {
                  xAxis: 'Sat',
                  name: 'Vertical end',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'end',
                  },
                },
              ],
            },
          }]);
      });
    <\/script>
  `]))},P={parameters:{docs:{description:{story:h(`chart`,`mark-line-no-label`)}}},render:()=>n(E||=v([`
    <syn-chart id="mark-line-no-label"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-no-label');

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
              data: [150, 230, 224, 218, 135, 147, 260],
              markLine: {
                data: [
                  { yAxis: 180, label: { show: false } },
                ],
              }
            }
          ])
      });
    <\/script>
  `]))},F=_({MinAndMax:O,Average:k,FixedThresholds:A,CoordinateLine:j,IntentColors:M,LabelPosition:N,NoLabel:P},700),I=[`MinAndMax`,`Average`,`FixedThresholds`,`CoordinateLine`,`IntentColors`,`LabelPosition`,`NoLabel`,`Screenshot`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-min-max')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-min-max"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-min-max');

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
              markLine: {
                data: [
                  { type: 'min', name: 'Minimum'},
                  { type: 'max', name: 'Maximum' }
                ],
              }
            }
          ])
      });
    <\/script>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-average')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-average"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-average');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
            grid: { left: 80 },
          })
          .seriesLine([
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              markLine: {
                data: [{ type: 'average', name: 'Average' }],
              }
            }
          ])
      });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-thresholds')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-thresholds"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-thresholds');

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
            markLine: {
              data: [
                { yAxis: 240 },
                { 
                  xAxis: 'Sat',
                  label: {
                    position: 'start',
                  }
                },
              ],
            },
          }])
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-coordinates')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-coordinates"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-coordinates');

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
              data: [150, 230, 224, 218, 135, 147, 260],
              markLine: {
                data: [
                  [
                    { coord: ['Mon', 100], name: 'Trend' }, 
                    { coord: ['Sun', 280] },
                  ]
                ],
                symbol: ['none', 'arrow']
              }
            }
          ])
      });
    <\/script>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-intent-colors')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-intent-colors"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-intent-colors');
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
            markLine: {
              data: [
                {
                  yAxis: 100,
                  name: 'Target met',
                  lineStyle: { color: getColor('SynNamurSuccessColor') },
                },
                {
                  yAxis: 180,
                  name: 'Warning',
                  lineStyle: { color: getColor('SynNamurWarningColor') },
                },
                {
                  yAxis: 260,
                  name: 'Critical limit',
                  lineStyle: { color: getColor('SynNamurErrorColor') },
                },
              ],
            },
          }]);
      });
    <\/script>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-label-position')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-label-position"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-label-position');

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig({
            xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              type: 'category', name: 'Days',
            },
            yAxis: { type: 'value', name: 'Values' },
            grid: {
              left: 200,
              right: 200,
              top: 50,
            }
          })
          .seriesLine([{
            data: [150, 230, 224, 218, 135, 147, 260],
            markLine: {
              data: [
                {
                  yAxis: 80,
                  name: 'Horizontal start',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'start',
                  },
                },
                {
                  yAxis: 220,
                  name: 'Horizontal end',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'end',
                  },
                },
                {
                  xAxis: 'Tue',
                  name: 'Vertical start',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'start',
                  },
                },
                {
                  xAxis: 'Sat',
                  name: 'Vertical end',
                  label: {
                    formatter: '{b}: {c}',
                    position: 'end',
                  },
                },
              ],
            },
          }]);
      });
    <\/script>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'mark-line-no-label')
      }
    }
  },
  render: () => html\`
    <syn-chart id="mark-line-no-label"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#mark-line-no-label');

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
              data: [150, 230, 224, 218, 135, 147, 260],
              markLine: {
                data: [
                  { yAxis: 180, label: { show: false } },
                ],
              }
            }
          ])
      });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  MinAndMax,
  Average,
  FixedThresholds,
  CoordinateLine,
  IntentColors,
  LabelPosition,
  NoLabel
}, 700)`,...F.parameters?.docs?.source}}}})))()}L();export{k as Average,j as CoordinateLine,A as FixedThresholds,M as IntentColors,N as LabelPosition,O as MinAndMax,P as NoLabel,F as Screenshot,I as __namedExportsOrder,D as default};