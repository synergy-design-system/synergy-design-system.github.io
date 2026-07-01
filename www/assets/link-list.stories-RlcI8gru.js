import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{D as r,_ as i,d as a,f as o,k as s,p as c}from"./iframe-Berx97Z2.js";import{t as l}from"./icon-sIvJvsnb.js";import{i as u,n as d,r as f,t as p}from"./component-D0wDPDrh.js";import{n as m,t as h}from"./styles-BY7scY6a.js";var g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),r(),f(),h(),o(),i(),l(),{args:g,argTypes:_}=u(`syn-link-list`),v={...g},delete v[`default-slot`],y={..._},delete y[`default-slot`],b=(e=4,t=`medium`)=>Array(e).fill(void 0).map(()=>`
    <li>
      <a href="javascript:void()" class="syn-link syn-link--${t}">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Link
      </a>
    </li>
  `.trim()).join(``),x={args:v,argTypes:y,component:`syn-link-list`,parameters:{chromatic:{modes:c},design:a(`41337-171069`),docs:{description:{component:d(`styles`,`link-list`)}}},tags:[`Navigation`,`Structure`,`Styles`],title:`Styles/syn-link-list`},S={parameters:{controls:{disable:!1}},render:e=>{let t=b(4,e[`syn-link-list`].split(`--`).at(-1));return m({...e,"default-slot":t},`ul`,{class:`syn-link-list`})}},C={parameters:{docs:{description:{story:d(`link-list`,`horizontal`)}}},render:()=>t`
    <ul class="syn-link-list syn-link-list--horizontal">
      ${s(b(4,`medium`))}
    </ul>
  `},w={parameters:{docs:{description:{story:d(`link-list`,`multiline`)}}},render:()=>t`
    <ul class="syn-link-list syn-link-list--horizontal" style="width: 480px">
      ${s(b(8,`medium`))}
    </ul>
  `},T={parameters:{docs:{description:{story:d(`link-list`,`size`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <ul class="syn-link-list syn-link-list--small syn-link-list--horizontal">
        ${s(b(4,`small`))}
      </ul>
      <ul class="syn-link-list syn-link-list--medium syn-link-list--horizontal">
        ${s(b(4,`medium`))}
      </ul>
      <ul class="syn-link-list syn-link-list--large syn-link-list--horizontal">
        ${s(b(4,`large`))}
      </ul>
    </div>
  `},E=p({Default:S,Horizontal:C,Multiline:w,Size:T},300),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  render: storyArgs => {
    const sizeClass = storyArgs['syn-link-list']! as string;
    const usedSize = sizeClass.split('--').at(-1);
    const defaultSlot = generateLinks(4, usedSize);
    const finalArgs = {
      ...storyArgs,
      'default-slot': defaultSlot
    };
    return renderStyles(finalArgs, 'ul', {
      class: 'syn-link-list'
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link-list', 'horizontal')
      }
    }
  },
  render: () => html\`
    <ul class="syn-link-list syn-link-list--horizontal">
      \${unsafeHTML(generateLinks(4, 'medium'))}
    </ul>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link-list', 'multiline')
      }
    }
  },
  render: () => html\`
    <ul class="syn-link-list syn-link-list--horizontal" style="width: 480px">
      \${unsafeHTML(generateLinks(8, 'medium'))}
    </ul>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('link-list', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <ul class="syn-link-list syn-link-list--small syn-link-list--horizontal">
        \${unsafeHTML(generateLinks(4, 'small'))}
      </ul>
      <ul class="syn-link-list syn-link-list--medium syn-link-list--horizontal">
        \${unsafeHTML(generateLinks(4, 'medium'))}
      </ul>
      <ul class="syn-link-list syn-link-list--large syn-link-list--horizontal">
        \${unsafeHTML(generateLinks(4, 'large'))}
      </ul>
    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Horizontal,
  Multiline,
  Size
}, 300)`,...E.parameters?.docs?.source}}},D=[`Default`,`Horizontal`,`Multiline`,`Size`,`Screenshot`]}))();export{S as Default,C as Horizontal,w as Multiline,E as Screenshot,T as Size,D as __namedExportsOrder,x as default};