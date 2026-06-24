import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,l as r,o as i,t as a}from"./lit-BVDl_-fF.js";import{I as ee,L as o,R as s,d as c,f as te,g as ne,u as l,z as re}from"./iframe-Cn79ht60.js";import{n as ie,t as ae}from"./class-map-BmdGqO7G.js";import{r as oe,t as u}from"./if-defined-BsCyJVG6.js";import{n as d,t as f}from"./localize-CzgwcyM2.js";import{a as p,i as se,n as m,o as h,r as g,s as _,t as v,y}from"./synergy-element-fkSPPZqT.js";import{t as ce}from"./button-BJ5RECCr.js";import{t as le}from"./icon-caUGB1Oa.js";import{a as b,i as x,n as S,o as C,r as w,t as T}from"./component-BsxLXFpR.js";import{n as E,t as D}from"./taggedTemplateLiteral-pWa2IaV6.js";var O,k,A,j=e((()=>{r(),s(),O=`important`,k=` !important`,A=ee(class extends o{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(k);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?O:``):n[e]=r}}return i}})})),M=e((()=>{j()})),N,P=e((()=>{a(),N=n`
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
`})),F,I=e((()=>{a(),F=n`
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
`})),L,R=e((()=>{ae(),a(),u(),f(),_(),M(),h(),m(),P(),I(),se(),L=class extends v{constructor(...e){super(...e),this.localize=new d(this),this.value=0,this.indeterminate=!1,this.label=``}static{this.styles=[p,N,F]}render(){return t`
      <div
        part="base"
        class=${ie({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${oe(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${A({width:`${this.value}%`})}>
          ${this.indeterminate?``:t` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}},g([y({type:Number,reflect:!0})],L.prototype,`value`,void 0),g([y({type:Boolean,reflect:!0})],L.prototype,`indeterminate`,void 0),g([y()],L.prototype,`label`,void 0)})),z=e((()=>{R(),R(),L.define(`syn-progress-bar`)})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{z(),ce(),le(),a(),w(),c(),ne(),E(),{args:V,argTypes:H}=x(`syn-progress-bar`),{overrideArgs:U}=b(`syn-progress-bar`),{generateTemplate:W}=C(`syn-progress-bar`),G={args:U({name:`value`,type:`attribute`,value:33.3},V),argTypes:H,component:`syn-progress-bar`,parameters:{chromatic:{modes:te},design:l(`41203-297162`),docs:{description:{component:S(`progress-bar`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-bar`},K={parameters:{docs:{description:{story:S(`progress-bar`,`default`)}}},render:e=>W({args:e})},q={parameters:{docs:{description:{story:S(`progress-bar`,`labels`)}}},render:()=>t`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},J={parameters:{docs:{description:{story:S(`progress-bar`,`custom-height`)}}},render:()=>t`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},Y={parameters:{docs:{description:{story:S(`progress-bar`,`showing-values`)}}},render:()=>t(B||=D([`
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
  `]))},X={parameters:{docs:{description:{story:S(`progress-bar`,`indeterminate`)}}},render:()=>t`
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