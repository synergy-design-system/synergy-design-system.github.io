import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,t as r}from"./lit-D4-0ovri.js";import{d as i,f as a,i as o,p as s,u as c}from"./blocks-Cw7zwOlI.js";import{t as l}from"./react-Q1GcV6wX.js";import{n as u,r as d,t as f}from"./chromatic-config-DEqEAZ11.js";import{n as p,r as m,t as h}from"./component-1Z3hZXYb.js";import{t as g}from"./taggedTemplateLiteral-BZenJ0bZ.js";var _,v,y,b,x,S,C,w;function T(){return(T=t((()=>{_=e(l(),1),r(),s(),d(),m(),u(),b={component:`syn-chart`,parameters:{chromatic:{...f},docs:{description:{component:p(`chart`,`zooming-default`)},page:()=>_.createElement(_.Fragment,null,_.createElement(a,null),_.createElement(i,null),_.createElement(o,null),_.createElement(c,{title:``}))}},tags:[`Charting`,`Data Visualization`],title:`Charts/Features/Zooming & Panning`},x={parameters:{docs:{description:{story:p(`chart`,`integrated-zooming`)}}},render:()=>n(v||=g([`
    <syn-chart id="integrated-zooming"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#integrated-zooming');

      const baseConfig = {
        xAxis: {
          data: Array.from({ length: 30 }, (_, i) => {
            const d = new Date(2026, 0, 1 + i);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          }),
          type: 'category', name: 'Date',
        },
        yAxis: { type: 'value', name: 'Values' },
        dataZoom: [{
          type: 'inside',
          start: 30,
          end: 70,
        }],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 620, 732, 701, 734, 1090, 1130, 1120, 420, 532, 501, 534, 890, 930, 920, 320, 432, 401, 434, 790, 830, 820, 220, 332],
            },
            {
              data: [450, 680, 550, 890, 720, 850, 610, 1100, 950, 820, 1050, 650, 780, 560, 920, 1200, 680, 750, 1040, 590, 875, 1150, 740, 920, 680, 1080, 620, 950, 1220, 750],
            },
          ])
      });
    <\/script>
  `]))},S={parameters:{docs:{description:{story:p(`chart`,`slider-zooming`)}}},render:()=>n(y||=g([`
    <syn-chart id="slider-zooming"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#slider-zooming');

      const baseConfig = {
        xAxis: {
          data: Array.from({ length: 30 }, (_, i) => {
            const d = new Date(2026, 0, 1 + i);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          }),
          type: 'category', name: 'Date',
        },
        yAxis: { type: 'value', name: 'Values' },
        dataZoom: [{
          type: 'slider',
          start: 30,
          end: 70,
        }],
        grid: {
          bottom: 120,
        }
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 620, 732, 701, 734, 1090, 1130, 1120, 420, 532, 501, 534, 890, 930, 920, 320, 432, 401, 434, 790, 830, 820, 220, 332],
            },
            {
              data: [450, 680, 550, 890, 720, 850, 610, 1100, 950, 820, 1050, 650, 780, 560, 920, 1200, 680, 750, 1040, 590, 875, 1150, 740, 920, 680, 1080, 620, 950, 1220, 750],
            },
          ])
      });
    <\/script>
  `]))},C=h({IntegratedZooming:x,SliderZooming:S},700),w=[`IntegratedZooming`,`SliderZooming`,`Screenshot`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'integrated-zooming')
      }
    }
  },
  render: () => html\`
    <syn-chart id="integrated-zooming"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#integrated-zooming');

      const baseConfig = {
        xAxis: {
          data: Array.from({ length: 30 }, (_, i) => {
            const d = new Date(2026, 0, 1 + i);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          }),
          type: 'category', name: 'Date',
        },
        yAxis: { type: 'value', name: 'Values' },
        dataZoom: [{
          type: 'inside',
          start: 30,
          end: 70,
        }],
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 620, 732, 701, 734, 1090, 1130, 1120, 420, 532, 501, 534, 890, 930, 920, 320, 432, 401, 434, 790, 830, 820, 220, 332],
            },
            {
              data: [450, 680, 550, 890, 720, 850, 610, 1100, 950, 820, 1050, 650, 780, 560, 920, 1200, 680, 750, 1040, 590, 875, 1150, 740, 920, 680, 1080, 620, 950, 1220, 750],
            },
          ])
      });
    <\/script>
  \`
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('chart', 'slider-zooming')
      }
    }
  },
  render: () => html\`
    <syn-chart id="slider-zooming"></syn-chart>
    <script type="module">
      const charts = document.querySelectorAll('#slider-zooming');

      const baseConfig = {
        xAxis: {
          data: Array.from({ length: 30 }, (_, i) => {
            const d = new Date(2026, 0, 1 + i);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          }),
          type: 'category', name: 'Date',
        },
        yAxis: { type: 'value', name: 'Values' },
        dataZoom: [{
          type: 'slider',
          start: 30,
          end: 70,
        }],
        grid: {
          bottom: 120,
        }
      };

      charts.forEach(chart => {
        chart.config = handle => handle
          .baseConfig(baseConfig)
          .seriesLine([
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 620, 732, 701, 734, 1090, 1130, 1120, 420, 532, 501, 534, 890, 930, 920, 320, 432, 401, 434, 790, 830, 820, 220, 332],
            },
            {
              data: [450, 680, 550, 890, 720, 850, 610, 1100, 950, 820, 1050, 650, 780, 560, 920, 1200, 680, 750, 1040, 590, 875, 1150, 740, 920, 680, 1080, 620, 950, 1220, 750],
            },
          ])
      });
    <\/script>
  \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  IntegratedZooming,
  SliderZooming
}, 700)`,...C.parameters?.docs?.source}}}})))()}T();export{x as IntegratedZooming,C as Screenshot,S as SliderZooming,w as __namedExportsOrder,b as default};