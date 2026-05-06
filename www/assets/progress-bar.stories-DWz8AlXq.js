import{n as e}from"./chunk-DnJy8xQt.js";import{F as t,I as n,L as r,Lt as ee,Nt as i,P as te,Rt as a,Ut as o,d as s,f as c,g as l,u,zt as d}from"./iframe-DJ0QlWgc.js";import{n as f,t as p}from"./class-map-DEi9Q1MK.js";import{n as m,t as h}from"./if-defined-D8THz00N.js";import{n as g,t as _}from"./localize-DnZL8qNz.js";import{a as v,i as y,n as ne,o as re,p as b,r as x,s as ie,t as ae}from"./synergy-element-ChX6Se5O.js";import{t as oe}from"./button-Bu5NB7Z0.js";import{t as se}from"./icon-CiIVLsag.js";import{a as S,i as C,n as w,o as T,r as E,t as D}from"./component-CYGmWguq.js";import{n as O,t as k}from"./taggedTemplateLiteral-BuD1d7yP.js";var A,j,M,N=e((()=>{d(),n(),A=`important`,j=` !`+A,M=te(class extends t{constructor(e){if(super(e),e.type!==r.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(j);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?A:``):n[e]=r}}return ee}})})),P=e((()=>{N()})),F,I=e((()=>{i(),F=o`
	/* stylelint-disable */
  :host {
    --height: 1rem;
    --track-color: var(--syn-color-neutral-200);
    --indicator-color: var(--syn-color-primary-600);
    --label-color: var(--syn-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--syn-border-radius-pill);
    box-shadow: inset var(--syn-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--syn-font-sans);
    font-size: 12px;
    font-weight: var(--syn-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--syn-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`})),L,ce=e((()=>{i(),L=o`
  :host {
    --height: var(--syn-font-size-medium);
    --speed: 2.5s;
    --indicator-color: var(--syn-progress-indicator-color);
    --track-color: var(--syn-progress-track-color);
  }

  .progress-bar {
    border-radius: var(--syn-border-radius-none);
    box-shadow: none;
  }

  .progress-bar__indicator {
    font: var(--syn-body-x-small-bold);
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    animation-duration: var(--speed);
  }
`})),R,z=e((()=>{p(),i(),h(),_(),ie(),P(),re(),ne(),I(),ce(),y(),R=class extends ae{constructor(...e){super(...e),this.localize=new g(this),this.value=0,this.indeterminate=!1,this.label=``}static{this.styles=[v,F,L]}render(){return a`
      <div
        part="base"
        class=${f({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${m(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${M({width:`${this.value}%`})}>
          ${this.indeterminate?``:a` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}},x([b({type:Number,reflect:!0})],R.prototype,`value`,void 0),x([b({type:Boolean,reflect:!0})],R.prototype,`indeterminate`,void 0),x([b()],R.prototype,`label`,void 0)})),B=e((()=>{z(),z(),R.define(`syn-progress-bar`)})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{B(),oe(),se(),i(),E(),s(),l(),O(),{args:H,argTypes:U}=C(`syn-progress-bar`),{overrideArgs:W}=S(`syn-progress-bar`),{generateTemplate:G}=T(`syn-progress-bar`),K={args:W({name:`value`,type:`attribute`,value:33.3},H),argTypes:U,component:`syn-progress-bar`,parameters:{chromatic:{modes:c},design:u(`41203-297162`),docs:{description:{component:w(`progress-bar`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-bar`},q={parameters:{docs:{description:{story:w(`progress-bar`,`default`)}}},render:e=>G({args:e})},J={parameters:{docs:{description:{story:w(`progress-bar`,`labels`)}}},render:()=>a`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},Y={parameters:{docs:{description:{story:w(`progress-bar`,`custom-height`)}}},render:()=>a`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},X={parameters:{docs:{description:{story:w(`progress-bar`,`showing-values`)}}},render:()=>a(V||=k([`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-progress-bar value="60" class="progress-bar-values">60%</syn-progress-bar>

      <div style="display: flex; gap: var(--syn-spacing-x-small);">
        <syn-button variant="outline" size="small">
          <syn-icon name="indeterminate" library="system" label="Decrease"></syn-icon>
        </syn-button>
        <syn-button variant="outline" size="small">
          <syn-icon name="add" library="system" label="Increase"></syn-icon>
        </syn-button>
      </div>
    </div>

    <script type="module">
    const progressBar = document.querySelector('.progress-bar-values');
    const subtractButton = progressBar.nextElementSibling.firstElementChild;
    const addButton = subtractButton.nextElementSibling;

    addButton.addEventListener('click', () => {
      const value = Math.min(100, progressBar.value + 10);
      progressBar.value = value;
      progressBar.textContent = value + '%';
    });

    subtractButton.addEventListener('click', () => {
      const value = Math.max(0, progressBar.value - 10);
      progressBar.value = value;
      progressBar.textContent = value + '%';
    });
    <\/script>
  `]))},Z={parameters:{docs:{description:{story:w(`progress-bar`,`indeterminate`)}}},render:()=>a`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},Q=D({Default:q,Labels:J,CustomHeight:Y,ShowingValues:X,Indeterminate:Z},180),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-bar', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-bar', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-bar', 'custom-height')
      }
    }
  },
  render: () => html\`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-bar', 'showing-values')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-progress-bar value="60" class="progress-bar-values">60%</syn-progress-bar>

      <div style="display: flex; gap: var(--syn-spacing-x-small);">
        <syn-button variant="outline" size="small">
          <syn-icon name="indeterminate" library="system" label="Decrease"></syn-icon>
        </syn-button>
        <syn-button variant="outline" size="small">
          <syn-icon name="add" library="system" label="Increase"></syn-icon>
        </syn-button>
      </div>
    </div>

    <script type="module">
    const progressBar = document.querySelector('.progress-bar-values');
    const subtractButton = progressBar.nextElementSibling.firstElementChild;
    const addButton = subtractButton.nextElementSibling;

    addButton.addEventListener('click', () => {
      const value = Math.min(100, progressBar.value + 10);
      progressBar.value = value;
      progressBar.textContent = value + '%';
    });

    subtractButton.addEventListener('click', () => {
      const value = Math.max(0, progressBar.value - 10);
      progressBar.value = value;
      progressBar.textContent = value + '%';
    });
    <\/script>
  \`
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-bar', 'indeterminate')
      }
    }
  },
  render: () => html\`
    <syn-progress-bar indeterminate></syn-progress-bar>
  \`
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...Q.parameters?.docs?.source}}},$=[`Default`,`Labels`,`CustomHeight`,`ShowingValues`,`Indeterminate`,`Screenshot`]}))();export{Y as CustomHeight,q as Default,Z as Indeterminate,J as Labels,Q as Screenshot,X as ShowingValues,$ as __namedExportsOrder,K as default};