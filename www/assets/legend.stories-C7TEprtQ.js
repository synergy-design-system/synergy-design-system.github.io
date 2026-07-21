import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{a as n,c as r,d as i,o as a}from"./preview-B6MsgHSu.js";import{c as o,t as s}from"./lit-BfcklOOD.js";import{t as c}from"./react-DvlgmmzG.js";import{d as l,f as u,i as d,p as f,u as p}from"./blocks-CAkcEQY7.js";import{t as m}from"./chart-BVa9YRUb.js";import{n as h,r as g,t as _}from"./component-BQujXijc.js";import{n as v,t as y}from"./taggedTemplateLiteral-C9cDEsPD.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{b=e(c(),1),s(),f(),m(),g(),a(),i(),v(),E={component:`syn-chart`,parameters:{chromatic:{modes:r,pauseAnimationAtEnd:!1},design:n(`41094-279501`),docs:{description:{component:h(`chart`,`legend-default`)},page:()=>b.createElement(b.Fragment,null,b.createElement(u,null),b.createElement(l,null),b.createElement(d,null),b.createElement(p,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Legend`},D={parameters:{docs:{description:{story:h(`chart`,`legend-top`)}}},render:()=>o(x||=y([`
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
  `]))},O={parameters:{docs:{description:{story:h(`chart`,`legend-left`)}}},render:()=>o(S||=y([`
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
  `]))},k={parameters:{docs:{description:{story:h(`chart`,`legend-right`)}}},render:()=>o(C||=y([`
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
  `]))},A={parameters:{docs:{description:{story:h(`chart`,`legend-bottom`)}}},render:()=>o(w||=y([`
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
  `]))},j={parameters:{docs:{description:{story:h(`chart`,`legend-non-interactive`)}}},render:()=>o(T||=y([`
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
  `]))},M=_({ShowLegendTop:D,ShowLegendLeft:O,ShowLegendRight:k,ShowLegendBottom:A,NonInteractiveLegend:j},700),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  ShowLegendTop,
  ShowLegendLeft,
  ShowLegendRight,
  ShowLegendBottom,
  NonInteractiveLegend
}, 700)`,...M.parameters?.docs?.source}}},N=[`ShowLegendTop`,`ShowLegendLeft`,`ShowLegendRight`,`ShowLegendBottom`,`NonInteractiveLegend`,`Screenshot`]}))();export{j as NonInteractiveLegend,M as Screenshot,A as ShowLegendBottom,O as ShowLegendLeft,k as ShowLegendRight,D as ShowLegendTop,N as __namedExportsOrder,E as default};