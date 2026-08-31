import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{l as n,o as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{d as o,f as s,i as c,p as l,u}from"./blocks-CjiNIppL.js";import{t as d}from"./react-BZJXY1be.js";import{n as f,r as p,t as m}from"./waitForFinishedCharts-T22D6-gf.js";import{n as h,t as g}from"./formatter-34eogR_H.js";import{n as _,r as v,t as y}from"./component-Bm6Rp1CP.js";import{t as b}from"./taggedTemplateLiteral-BZenJ0bZ.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{x=e(d(),1),a(),l(),p(),h(),v(),n(),m(),window.formatter=g,D={component:`syn-chart`,parameters:{chromatic:{modes:r},docs:{description:{component:_(`chart`,`gauge-series-default`)},page:()=>x.createElement(x.Fragment,null,x.createElement(s,null),x.createElement(o,null),x.createElement(c,null),x.createElement(u,{title:``}))}},play:f,tags:[`Charting`,`Data Visualization`],title:`Charts/Series Types/Gauge Chart`},O={parameters:{docs:{description:{story:_(`chart`,`gauge-series-preset`)}}},render:()=>i(S||=b([`
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
  `]))},k={parameters:{docs:{description:{story:_(`chart`,`gauge-series-sections`)}}},render:()=>i(C||=b([`
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
  `]))},A={parameters:{docs:{description:{story:_(`chart`,`gauge-series-trend`)}}},render:()=>i(w||=b([`
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
  `]))},j={parameters:{docs:{description:{story:_(`chart`,`gauge-series-icon`)}}},render:()=>i(T||=b([`
    <syn-chart id="gauge-icon"></syn-chart>
    <script type="module">
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
  `]))},M={parameters:{docs:{description:{story:_(`chart`,`gauge-series-formatter`)}}},render:()=>i(E||=b([`
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
  `]))},N=y({Default:O,Sections:k,TrendIndicator:A,Icon:j,ValueFormatting:M},700),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Sections,
  TrendIndicator,
  Icon,
  ValueFormatting
}, 700)`,...N.parameters?.docs?.source}}},P=[`Default`,`Sections`,`TrendIndicator`,`Icon`,`ValueFormatting`,`Screenshot`]})))()}F();export{O as Default,j as Icon,N as Screenshot,k as Sections,A as TrendIndicator,M as ValueFormatting,P as __namedExportsOrder,D as default};