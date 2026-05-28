import{n as e}from"./chunk-DnJy8xQt.js";import{F as t,I as n,L as r,Lt as ee,Nt as i,P as te,Rt as a,Ut as o,d as ne,f as s,g as c,u as l,zt as u}from"./iframe-CkET12W3.js";import{n as d,t as f}from"./class-map-CFhFi09d.js";import{n as p,t as m}from"./if-defined-XNov7IIP.js";import{n as h,t as g}from"./localize-BO4uh8LG.js";import{a as re,i as _,m as v,n as y,o as b,r as x,s as ie,t as ae}from"./synergy-element-CyJGxssW.js";import{t as oe}from"./button-CpKx43QA.js";import{t as se}from"./icon-EUR_U8gh.js";import{a as ce,i as le,n as S,o as C,r as w,t as T}from"./component-B473QWuz.js";import{n as E,t as D}from"./taggedTemplateLiteral-DxWpUJWn.js";var O,k,A,j=e((()=>{u(),n(),O=`important`,k=` !`+O,A=te(class extends t{constructor(e){if(super(e),e.type!==r.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(k);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?O:``):n[e]=r}}return ee}})})),M=e((()=>{j()})),N,P=e((()=>{i(),N=o`
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
`})),F,I=e((()=>{i(),F=o`
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
`})),L,R=e((()=>{f(),i(),m(),g(),ie(),M(),b(),y(),P(),I(),_(),L=class extends ae{constructor(...e){super(...e),this.localize=new h(this),this.value=0,this.indeterminate=!1,this.label=``}static{this.styles=[re,N,F]}render(){return a`
      <div
        part="base"
        class=${d({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${p(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${A({width:`${this.value}%`})}>
          ${this.indeterminate?``:a` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}},x([v({type:Number,reflect:!0})],L.prototype,`value`,void 0),x([v({type:Boolean,reflect:!0})],L.prototype,`indeterminate`,void 0),x([v()],L.prototype,`label`,void 0)})),z=e((()=>{R(),R(),L.define(`syn-progress-bar`)})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{z(),oe(),se(),i(),w(),ne(),c(),E(),{args:V,argTypes:H}=le(`syn-progress-bar`),{overrideArgs:U}=ce(`syn-progress-bar`),{generateTemplate:W}=C(`syn-progress-bar`),G={args:U({name:`value`,type:`attribute`,value:33.3},V),argTypes:H,component:`syn-progress-bar`,parameters:{chromatic:{modes:s},design:l(`41203-297162`),docs:{description:{component:S(`progress-bar`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-bar`},K={parameters:{docs:{description:{story:S(`progress-bar`,`default`)}}},render:e=>W({args:e})},q={parameters:{docs:{description:{story:S(`progress-bar`,`labels`)}}},render:()=>a`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},J={parameters:{docs:{description:{story:S(`progress-bar`,`custom-height`)}}},render:()=>a`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},Y={parameters:{docs:{description:{story:S(`progress-bar`,`showing-values`)}}},render:()=>a(B||=D([`
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
  `]))},X={parameters:{docs:{description:{story:S(`progress-bar`,`indeterminate`)}}},render:()=>a`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},Z=T({Default:K,Labels:q,CustomHeight:J,ShowingValues:Y,Indeterminate:X},180),K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Labels`,`CustomHeight`,`ShowingValues`,`Indeterminate`,`Screenshot`]}));$();export{J as CustomHeight,K as Default,X as Indeterminate,q as Labels,Z as Screenshot,Y as ShowingValues,Q as __namedExportsOrder,G as default,$ as t};