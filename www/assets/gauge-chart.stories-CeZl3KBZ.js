import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,t as r}from"./lit-D4-0ovri.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Cw7zwOlI.js";import{t as l}from"./react-Q1GcV6wX.js";import{n as u,r as d,t as f}from"./chromatic-config-DEqEAZ11.js";import{n as p,t as m}from"./formatter-34eogR_H.js";import{n as h,r as g,t as _}from"./component-1Z3hZXYb.js";import{t as v}from"./taggedTemplateLiteral-BZenJ0bZ.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{y=e(l(),1),r(),s(),d(),p(),g(),u(),window.formatter=m,T={component:`syn-chart`,parameters:{chromatic:{...f},docs:{description:{component:h(`chart`,`gauge-series-default`)},page:()=>y.createElement(y.Fragment,null,y.createElement(a,null),y.createElement(i,null),y.createElement(o,null),y.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Gauge Chart`},E={parameters:{docs:{description:{story:h(`chart`,`gauge-series-preset`)}}},render:()=>n(b||=v([`
    <syn-chart id="gauge-series-preset"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-series-preset');

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              type: 'synGauge',
              data: [45],
            }
          ]
        };
      });
    <\/script>
  `]))},D={parameters:{docs:{description:{story:h(`chart`,`gauge-series-sections`)}}},render:()=>n(x||=v([`
    <syn-chart id="gauge-sections"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-sections');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            sections: {
              boundaries: [0, 20, 70, 100],
              show: true,
            },
            value: 80,
        });
      });
    <\/script>
  `]))},O={parameters:{docs:{description:{story:h(`chart`,`gauge-series-trend`)}}},render:()=>n(S||=v([`
    <syn-chart id="gauge-trend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-trend');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            trend: {
              show: true,
              value: '5',
            },
            value: 80,
          });
      });
    <\/script>
  `]))},k={parameters:{docs:{description:{story:h(`chart`,`gauge-series-icon`)}}},render:()=>n(C||=v([`
    <syn-chart id="gauge-icon"></syn-chart>
    <script type="module">
      // Import the formatter from the chart utilities
      //import { formatter } from '@synergy-design-system/components/components/chart/index.js';
      
      const charts = document.querySelectorAll('#gauge-icon');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSdjdXJyZW50Q29sb3InPjxwYXRoIGQ9Ik0xMiAyMS41cS0xLjg3MyAwLTMuMTg3LTEuMzE0UTcuNSAxOC44NzQgNy41IDE3cTAtMS4xNDMuNTMtMi4xMTdhNC41NiA0LjU2IDAgMCAxIDEuNDctMS42MTRWNXEwLTEuMDQ4LjcyNi0xLjc3NEEyLjQgMi40IDAgMCAxIDEyIDIuNXExLjA0OCAwIDEuNzc0LjcyNlQxNC41IDV2OC4yN2E0LjU2IDQuNTYgMCAwIDEgMS40NyAxLjYxM3EuNTMuOTc0LjUzIDIuMTE3IDAgMS44NzMtMS4zMTMgMy4xODZRMTMuODczIDIxLjUgMTIgMjEuNW0tMS0xMC4zMDhoMnYtMS4yNWgtMXYtLjg4NGgxVjYuOTQyaC0xdi0uODg0aDFWNWEuOTcuOTcgMCAwIDAtLjI4Ny0uNzEzQS45Ny45NyAwIDAgMCAxMiA0YS45Ny45NyAwIDAgMC0uNzEzLjI4N0EuOTcuOTcgMCAwIDAgMTEgNXoiLz48L3N2Zz4=",
            sections: {
              show: true,
            },
            value: 80,
            formatter: {
              max: formatter.unitFormatter('°C'),
              min: formatter.unitFormatter('°C'),
              value: formatter.unitFormatter('°C'),
            },
          });
      });
    <\/script>
  `]))},A={parameters:{docs:{description:{story:h(`chart`,`gauge-series-formatter`)}}},render:()=>n(w||=v([`
    <syn-chart id="gauge-formatter"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-formatter');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            value: 80,
            formatter: {
              max: (value) => Intl.NumberFormat(undefined, { minimumFractionDigits: 3 }).format(value),
              min: (value) => Intl.NumberFormat(undefined, { minimumFractionDigits: 3 }).format(value),
              value: (value) => Intl.NumberFormat(undefined, { minimumFractionDigits: 2 }).format(value),
            },
        });
      });
    <\/script>
  `]))},j=_({Default:E,Sections:D,TrendIndicator:O,Icon:k,ValueFormatting:A},700),M=[`Default`,`Sections`,`TrendIndicator`,`Icon`,`ValueFormatting`,`Screenshot`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'gauge-series-preset')
      }
    }
  },
  render: () => html\`
    <syn-chart id="gauge-series-preset"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-series-preset');

      charts.forEach(chart => {
        chart.config = {
          series: [
            {
              type: 'synGauge',
              data: [45],
            }
          ]
        };
      });
    <\/script>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'gauge-series-sections')
      }
    }
  },
  render: () => html\`
    <syn-chart id="gauge-sections"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-sections');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            sections: {
              boundaries: [0, 20, 70, 100],
              show: true,
            },
            value: 80,
        });
      });
    <\/script>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'gauge-series-trend')
      }
    }
  },
  render: () => html\`
    <syn-chart id="gauge-trend"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-trend');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            trend: {
              show: true,
              value: '5',
            },
            value: 80,
          });
      });
    <\/script>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'gauge-series-icon')
      }
    }
  },
  render: () => html\`
    <syn-chart id="gauge-icon"></syn-chart>
    <script type="module">
      // Import the formatter from the chart utilities
      //import { formatter } from '@synergy-design-system/components/components/chart/index.js';
      
      const charts = document.querySelectorAll('#gauge-icon');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSdjdXJyZW50Q29sb3InPjxwYXRoIGQ9Ik0xMiAyMS41cS0xLjg3MyAwLTMuMTg3LTEuMzE0UTcuNSAxOC44NzQgNy41IDE3cTAtMS4xNDMuNTMtMi4xMTdhNC41NiA0LjU2IDAgMCAxIDEuNDctMS42MTRWNXEwLTEuMDQ4LjcyNi0xLjc3NEEyLjQgMi40IDAgMCAxIDEyIDIuNXExLjA0OCAwIDEuNzc0LjcyNlQxNC41IDV2OC4yN2E0LjU2IDQuNTYgMCAwIDEgMS40NyAxLjYxM3EuNTMuOTc0LjUzIDIuMTE3IDAgMS44NzMtMS4zMTMgMy4xODZRMTMuODczIDIxLjUgMTIgMjEuNW0tMS0xMC4zMDhoMnYtMS4yNWgtMXYtLjg4NGgxVjYuOTQyaC0xdi0uODg0aDFWNWEuOTcuOTcgMCAwIDAtLjI4Ny0uNzEzQS45Ny45NyAwIDAgMCAxMiA0YS45Ny45NyAwIDAgMC0uNzEzLjI4N0EuOTcuOTcgMCAwIDAgMTEgNXoiLz48L3N2Zz4=",
            sections: {
              show: true,
            },
            value: 80,
            formatter: {
              max: formatter.unitFormatter('°C'),
              min: formatter.unitFormatter('°C'),
              value: formatter.unitFormatter('°C'),
            },
          });
      });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'gauge-series-formatter')
      }
    }
  },
  render: () => html\`
    <syn-chart id="gauge-formatter"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#gauge-formatter');

      charts.forEach(chart => {
        chart.config = handle => handle
          .seriesGauge({
            value: 80,
            formatter: {
              max: (value) => Intl.NumberFormat(undefined, { minimumFractionDigits: 3 }).format(value),
              min: (value) => Intl.NumberFormat(undefined, { minimumFractionDigits: 3 }).format(value),
              value: (value) => Intl.NumberFormat(undefined, { minimumFractionDigits: 2 }).format(value),
            },
        });
      });
    <\/script>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Sections,
  TrendIndicator,
  Icon,
  ValueFormatting
}, 700)`,...j.parameters?.docs?.source}}}})))()}N();export{E as Default,k as Icon,j as Screenshot,D as Sections,O as TrendIndicator,A as ValueFormatting,M as __namedExportsOrder,T as default};