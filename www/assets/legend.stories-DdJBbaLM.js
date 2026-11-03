import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,t as r}from"./lit-CHM2bYch.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Dl-D6zgk.js";import{t as l}from"./react-DlPsW1c0.js";import{n as u,r as d,t as f}from"./chromatic-config-q1zR883M.js";import{n as p,r as m,t as h}from"./component-K7w6EZ8X.js";import{n as g,t as _}from"./chart-series-documentation-CQsjMZVx.js";import{t as v}from"./taggedTemplateLiteral-CWT6dLlS.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{y=e(l(),1),r(),s(),d(),g(),m(),u(),T={component:`syn-chart`,parameters:{chromatic:{...f},docs:{description:{component:p(`chart`,`legend-default`)},page:()=>y.createElement(y.Fragment,null,y.createElement(a,null),y.createElement(i,null),y.createElement(o,null),y.createElement(_,{section:`Legend presets`}),y.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Legend`},E={parameters:{docs:{description:{story:p(`chart`,`legend-top`)}}},render:()=>n(b||=v([`
    <syn-chart id="chart-show-legend-top"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-top');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow();
      });
    <\/script>
  `]))},D={parameters:{docs:{description:{story:p(`chart`,`legend-left`)}}},render:()=>n(x||=v([`
    <syn-chart id="chart-show-legend-left"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-left');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow('left');
      });
    <\/script>
  `]))},O={parameters:{docs:{description:{story:p(`chart`,`legend-right`)}}},render:()=>n(S||=v([`
    <syn-chart id="chart-show-legend-right"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-right');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow({ position: 'right' });
      });
    <\/script>
  `]))},k={parameters:{docs:{description:{story:p(`chart`,`legend-bottom`)}}},render:()=>n(C||=v([`
    <syn-chart id="chart-show-legend-bottom"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-bottom');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow('bottom');
      });
    <\/script>
  `]))},A={parameters:{docs:{description:{story:p(`chart`,`legend-non-interactive`)}}},render:()=>n(w||=v([`
    <syn-chart id="chart-non-interactive-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-non-interactive-legend');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow({ position: 'top', legend: { selectedMode: false} });
      });
    <\/script>
  `]))},j=h({ShowLegendTop:E,ShowLegendLeft:D,ShowLegendRight:O,ShowLegendBottom:k,NonInteractiveLegend:A},700),M=[`ShowLegendTop`,`ShowLegendLeft`,`ShowLegendRight`,`ShowLegendBottom`,`NonInteractiveLegend`,`Screenshot`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'legend-top')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-show-legend-top"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-top');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow();
      });
    <\/script>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'legend-left')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-show-legend-left"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-left');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow('left');
      });
    <\/script>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'legend-right')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-show-legend-right"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-right');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow({ position: 'right' });
      });
    <\/script>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'legend-bottom')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-show-legend-bottom"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-show-legend-bottom');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow('bottom');
      });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'legend-non-interactive')
      }
    }
  },
  render: () => html\`
    <syn-chart id="chart-non-interactive-legend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#chart-non-interactive-legend');

      const baseConfig = {
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260], type: 'line', name: 'Series A' },
          { data: [120, 282, 251, 234, 290, 430, 310], type: 'line', name: 'Series B' },
          { data: [320, 332, 301, 334, 390, 330, 320], type: 'line', name: 'Series C' },
        ],
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          type: 'category', name: 'Days',
        },
        yAxis: { type: 'value', name: 'Values' },
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .legendShow({ position: 'top', legend: { selectedMode: false} });
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ShowLegendTop,
  ShowLegendLeft,
  ShowLegendRight,
  ShowLegendBottom,
  NonInteractiveLegend
}, 700)`,...j.parameters?.docs?.source}}}})))()}N();export{A as NonInteractiveLegend,j as Screenshot,k as ShowLegendBottom,D as ShowLegendLeft,O as ShowLegendRight,E as ShowLegendTop,M as __namedExportsOrder,T as default};