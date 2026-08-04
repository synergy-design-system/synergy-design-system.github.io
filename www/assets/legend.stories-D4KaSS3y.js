import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{l as n,o as r}from"./preview-DKowTjrk.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{d as o,f as s,i as c,p as l,u}from"./blocks-CjiNIppL.js";import{t as d}from"./react-BZJXY1be.js";import{n as f,r as p,t as m}from"./waitForFinishedCharts-fjiFVLQ-.js";import{n as h,r as g,t as _}from"./component-yQeR3V9a.js";import{t as v}from"./taggedTemplateLiteral-BZenJ0bZ.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{y=e(d(),1),a(),l(),p(),g(),n(),m(),T={component:`syn-chart`,parameters:{chromatic:{modes:r},docs:{description:{component:h(`chart`,`legend-default`)},page:()=>y.createElement(y.Fragment,null,y.createElement(s,null),y.createElement(o,null),y.createElement(c,null),y.createElement(u,{title:``}))}},play:f,tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Legend`},E={parameters:{docs:{description:{story:h(`chart`,`legend-top`)}}},render:()=>i(b||=v([`
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
  `]))},D={parameters:{docs:{description:{story:h(`chart`,`legend-left`)}}},render:()=>i(x||=v([`
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
  `]))},O={parameters:{docs:{description:{story:h(`chart`,`legend-right`)}}},render:()=>i(S||=v([`
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
  `]))},k={parameters:{docs:{description:{story:h(`chart`,`legend-bottom`)}}},render:()=>i(C||=v([`
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
  `]))},A={parameters:{docs:{description:{story:h(`chart`,`legend-non-interactive`)}}},render:()=>i(w||=v([`
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
  `]))},j=_({ShowLegendTop:E,ShowLegendLeft:D,ShowLegendRight:O,ShowLegendBottom:k,NonInteractiveLegend:A},700),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}, 700)`,...j.parameters?.docs?.source}}},M=[`ShowLegendTop`,`ShowLegendLeft`,`ShowLegendRight`,`ShowLegendBottom`,`NonInteractiveLegend`,`Screenshot`]})))()}N();export{A as NonInteractiveLegend,j as Screenshot,k as ShowLegendBottom,D as ShowLegendLeft,O as ShowLegendRight,E as ShowLegendTop,M as __namedExportsOrder,T as default};