import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,a as n,h as r,l as i}from"./preview-DKowTjrk.js";import{c as a,t as o}from"./lit-DgWh_IaA.js";import{t as s}from"./icon-CBsrAmoE.js";import{i as c,n as l,r as u,t as d}from"./component-yQeR3V9a.js";import{n as f,t as p}from"./styles-CTQmb3bf.js";var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{o(),r(),u(),p(),i(),s(),{args:m,argTypes:h}=c(`syn-link-list`),g={...m},delete g[`default-slot`],_={...h},delete _[`default-slot`],v=(e=4,t=`medium`)=>Array(e).fill(void 0).map(()=>`
    <li>
      <a href="javascript:void()" class="syn-link syn-link--${t}">
        <syn-icon name="keyboard_arrow_right"></syn-icon>
        Link
      </a>
    </li>
  `.trim()).join(``),y={args:g,argTypes:_,component:`syn-link-list`,parameters:{chromatic:{modes:n},docs:{description:{component:l(`styles`,`link-list`)}}},tags:[`Navigation`,`Structure`,`Styles`],title:`Styles/syn-link-list`},b={parameters:{controls:{disable:!1}},render:e=>{let t=e[`syn-link-list`].split(`--`).at(-1),n=v(4,t),r={...e,"default-slot":n};return f(r,`ul`,{class:`syn-link-list`})}},x={parameters:{docs:{description:{story:l(`link-list`,`horizontal`)}}},render:()=>a`
    <ul class="syn-link-list syn-link-list--horizontal">
      ${t(v(4,`medium`))}
    </ul>
  `},S={parameters:{docs:{description:{story:l(`link-list`,`multiline`)}}},render:()=>a`
    <ul class="syn-link-list syn-link-list--horizontal" style="width: 480px">
      ${t(v(8,`medium`))}
    </ul>
  `},C={parameters:{docs:{description:{story:l(`link-list`,`size`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <ul class="syn-link-list syn-link-list--small syn-link-list--horizontal">
        ${t(v(4,`small`))}
      </ul>
      <ul class="syn-link-list syn-link-list--medium syn-link-list--horizontal">
        ${t(v(4,`medium`))}
      </ul>
      <ul class="syn-link-list syn-link-list--large syn-link-list--horizontal">
        ${t(v(4,`large`))}
      </ul>
    </div>
  `},w=d({Default:b,Horizontal:x,Multiline:S,Size:C},300),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Horizontal,
  Multiline,
  Size
}, 300)`,...w.parameters?.docs?.source}}},T=[`Default`,`Horizontal`,`Multiline`,`Size`,`Screenshot`]})))()}E();export{b as Default,x as Horizontal,S as Multiline,w as Screenshot,C as Size,T as __namedExportsOrder,y as default};