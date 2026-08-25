import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-Br8gqwpX.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{i as o,n as s,o as c,r as l,t as u}from"./component-iQCIgMPU.js";import{t as d}from"./range-tick-D-QfIn2T.js";var f=t({Default:()=>_,Grouping:()=>y,Labels:()=>v,Screenshot:()=>x,SubdivisionTicks:()=>b,__namedExportsOrder:()=>S,default:()=>g}),p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),d(),l(),r(),{args:p,argTypes:m}=o(`syn-range-tick`),{generateTemplate:h}=c(`syn-range-tick`),g={args:p,argTypes:m,component:`syn-range-tick`,parameters:{chromatic:{modes:n},docs:{description:{component:s(`range-tick`,`default`)}}},tags:[`Form`],title:`Components/syn-range-tick`},_={parameters:{controls:{disable:!1},docs:{description:{story:s(`range-tick`,`default`)}}},render:e=>h({args:e})},v={parameters:{docs:{description:{story:s(`range-tick`,`label`)}}},render:()=>i`
    <syn-range-tick>0</syn-range-tick>
  `},y={parameters:{docs:{description:{story:s(`range-tick`,`grouping`)}}},render:()=>i`
    <div class="groupings">
      <div class="even-group">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick> 
      </div>

      <div class="uneven-group">
        <syn-range-tick>1</syn-range-tick>
        <syn-range-tick>2</syn-range-tick>
        <syn-range-tick>3</syn-range-tick> 
        <syn-range-tick>5</syn-range-tick> 
        <syn-range-tick>8</syn-range-tick> 
        <syn-range-tick>13</syn-range-tick> 
      </div>
    </div>
    <style>
      .groupings {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-4x-large);
      }

      .even-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group syn-range-tick {
        flex-grow: 1;
      }
   
      .uneven-group syn-range-tick:nth-child(3) {
        flex-grow: 2;
      }

      .uneven-group syn-range-tick:nth-child(4) {
        flex-grow: 3;
      }

      .uneven-group syn-range-tick:nth-child(5) {
        flex-grow: 5;
      }

      .uneven-group syn-range-tick:nth-child(6) {
        flex-grow: 0;
      }
    </style>
  `},b={parameters:{docs:{description:{story:s(`range-tick`,`subdivision`)}}},render:()=>i`
    <div class="grouping">
      <syn-range-tick>0</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>50</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>100</syn-range-tick> 
    </div>
    <style>
      .grouping {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  `},x=u({Default:_,Labels:v,Grouping:y,SubdivisionTicks:b},230),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        story: generateStoryDescription('range-tick', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'label')
      }
    }
  },
  render: () => html\`
    <syn-range-tick>0</syn-range-tick>
  \`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'grouping')
      }
    }
  },
  render: () => html\`
    <div class="groupings">
      <div class="even-group">
        <syn-range-tick>0</syn-range-tick>
        <syn-range-tick>50</syn-range-tick>
        <syn-range-tick>100</syn-range-tick> 
      </div>

      <div class="uneven-group">
        <syn-range-tick>1</syn-range-tick>
        <syn-range-tick>2</syn-range-tick>
        <syn-range-tick>3</syn-range-tick> 
        <syn-range-tick>5</syn-range-tick> 
        <syn-range-tick>8</syn-range-tick> 
        <syn-range-tick>13</syn-range-tick> 
      </div>
    </div>
    <style>
      .groupings {
        display: flex;
        flex-direction: column;
        gap: var(--syn-spacing-4x-large);
      }

      .even-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }

      .uneven-group syn-range-tick {
        flex-grow: 1;
      }
   
      .uneven-group syn-range-tick:nth-child(3) {
        flex-grow: 2;
      }

      .uneven-group syn-range-tick:nth-child(4) {
        flex-grow: 3;
      }

      .uneven-group syn-range-tick:nth-child(5) {
        flex-grow: 5;
      }

      .uneven-group syn-range-tick:nth-child(6) {
        flex-grow: 0;
      }
    </style>
  \`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('range-tick', 'subdivision')
      }
    }
  },
  render: () => html\`
    <div class="grouping">
      <syn-range-tick>0</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>50</syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick subdivision></syn-range-tick>
      <syn-range-tick>100</syn-range-tick> 
    </div>
    <style>
      .grouping {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
      }
    </style>
  \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Grouping,
  SubdivisionTicks
}, 230)`,...x.parameters?.docs?.source}}},S=[`Default`,`Labels`,`Grouping`,`SubdivisionTicks`,`Screenshot`]})))()}export{C as n,f as r,_ as t};