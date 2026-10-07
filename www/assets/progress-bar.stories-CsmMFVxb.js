import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,o as ee,t as a}from"./lit-D4-0ovri.js";import{c as o,l as s,o as c,s as l}from"./static-html-3dDWvokx.js";import{d as te,t as ne}from"./modes-DiggSWQK.js";import{a as re,d as u,n as ie,o as ae,r as d,s as f,t as p}from"./synergy-element-BaBb4oEf.js";import{r as m,t as h}from"./if-defined-BN5mMhH6.js";import{n as g,t as _}from"./class-map-6fORD18z.js";import{n as v,t as y}from"./localize-Du3bqz3O.js";import{t as b}from"./button-BdBDCqEm.js";import{t as x}from"./icon-CmfITv42.js";import{a as S,i as C,n as w,o as T,r as oe,t as se}from"./component-1Z3hZXYb.js";import{t as E}from"./taggedTemplateLiteral-BZenJ0bZ.js";var D,O,k;function A(){return(A=e((()=>{i(),o(),D=`important`,O=` !`+D,k=c(class extends l{constructor(e){if(super(e),e.type!==s.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(O);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?D:``):n[e]=r}}return ee}})})))()}function j(){return(j=e((()=>{A()})))()}var M;function N(){return(N=e((()=>{a(),M=r`
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
`})))()}var P;function F(){return(F=e((()=>{a(),P=r`
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
`})))()}var I;function L(){return(L=e((()=>{_(),a(),h(),y(),f(),j(),ae(),ie(),N(),F(),I=class extends p{constructor(...e){super(...e),this.localize=new v(this),this.value=0,this.indeterminate=!1,this.label=``}static{this.styles=[re,M,P]}render(){return n`
      <div
        part="base"
        class=${g({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${m(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${k({width:`${this.value}%`})}>
          ${this.indeterminate?``:n` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}},d([u({type:Number,reflect:!0})],I.prototype,`value`,void 0),d([u({type:Boolean,reflect:!0})],I.prototype,`indeterminate`,void 0),d([u()],I.prototype,`label`,void 0)})))()}function R(){return(R=e((()=>{L(),I.define(`syn-progress-bar`)})))()}var z=t({CustomHeight:()=>J,Default:()=>K,Indeterminate:()=>X,Labels:()=>q,Screenshot:()=>Z,ShowingValues:()=>Y,__namedExportsOrder:()=>Q,default:()=>G}),B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{R(),b(),x(),a(),oe(),te(),{args:V,argTypes:H}=C(`syn-progress-bar`),{overrideArgs:U}=S(`syn-progress-bar`),{generateTemplate:W}=T(`syn-progress-bar`),G={args:U({name:`value`,type:`attribute`,value:33.3},V),argTypes:H,component:`syn-progress-bar`,parameters:{chromatic:{modes:ne},docs:{description:{component:w(`progress-bar`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-bar`},K={parameters:{docs:{description:{story:w(`progress-bar`,`default`)}}},render:e=>W({args:e})},q={parameters:{docs:{description:{story:w(`progress-bar`,`labels`)}}},render:()=>n`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},J={parameters:{docs:{description:{story:w(`progress-bar`,`custom-height`)}}},render:()=>n`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},Y={parameters:{docs:{description:{story:w(`progress-bar`,`showing-values`)}}},render:()=>n(B||=E([`
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
  `]))},X={parameters:{docs:{description:{story:w(`progress-bar`,`indeterminate`)}}},render:()=>n`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},Z=se({Default:K,Labels:q,CustomHeight:J,ShowingValues:Y,Indeterminate:X},180),Q=[`Default`,`Labels`,`CustomHeight`,`ShowingValues`,`Indeterminate`,`Screenshot`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}, 180)`,...Z.parameters?.docs?.source}}}})))()}export{$ as n,z as r,K as t};