import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,Bt as n,Ft as r,It as ee,M as te,N as i,P as a,Pt as o,d as s,f as ne,j as c,p as l,u}from"./iframe-CFxyVgYz.js";import{n as d,t as f}from"./class-map-B2P1DYC9.js";import{n as p,t as m}from"./if-defined-Gus0LTOI.js";import{n as h,t as re}from"./localize-DnZL8qNz.js";import{a as ie,i as ae,n as oe,o as se,p as g,r as _,s as ce,t as v}from"./synergy-element-DOjsnQEs.js";import{t as y}from"./button-BmPxXsuW.js";import{t as b}from"./icon-BNvARCZB.js";import{a as x,i as S,n as C,o as w,r as T,t as E}from"./component-u4nxi-rq.js";import{n as D,t as O}from"./taggedTemplateLiteral-BuD1d7yP.js";var k,A,j,M=e((()=>{ee(),i(),k=`important`,A=` !`+k,j=c(class extends te{constructor(e){if(super(e),e.type!==a.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(A);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?k:``):n[e]=r}}return o}})})),N=e((()=>{M()})),P,F=e((()=>{t(),P=n`
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
`})),I,L=e((()=>{t(),I=n`
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
`})),R,z=e((()=>{f(),t(),m(),re(),ce(),N(),se(),oe(),F(),L(),ae(),R=class extends v{constructor(...e){super(...e),this.localize=new h(this),this.value=0,this.indeterminate=!1,this.label=``}static{this.styles=[ie,P,I]}render(){return r`
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
        <div part="indicator" class="progress-bar__indicator" style=${j({width:`${this.value}%`})}>
          ${this.indeterminate?``:r` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}},_([g({type:Number,reflect:!0})],R.prototype,`value`,void 0),_([g({type:Boolean,reflect:!0})],R.prototype,`indeterminate`,void 0),_([g()],R.prototype,`label`,void 0)})),B=e((()=>{z(),z(),R.define(`syn-progress-bar`)})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{B(),y(),b(),t(),T(),s(),l(),D(),{args:H,argTypes:U}=S(`syn-progress-bar`),{overrideArgs:W}=x(`syn-progress-bar`),{generateTemplate:G}=w(`syn-progress-bar`),K={args:W({name:`value`,type:`attribute`,value:33.3},H),argTypes:U,component:`syn-progress-bar`,parameters:{chromatic:{modes:ne},design:u(`41203-297162`),docs:{description:{component:C(`progress-bar`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-bar`},q={parameters:{docs:{description:{story:C(`progress-bar`,`default`)}}},render:e=>G({args:e})},J={parameters:{docs:{description:{story:C(`progress-bar`,`labels`)}}},render:()=>r`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},Y={parameters:{docs:{description:{story:C(`progress-bar`,`custom-height`)}}},render:()=>r`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},X={parameters:{docs:{description:{story:C(`progress-bar`,`showing-values`)}}},render:()=>r(V||=O([`
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
  `]))},Z={parameters:{docs:{description:{story:C(`progress-bar`,`indeterminate`)}}},render:()=>r`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},Q=E({Default:q,Labels:J,CustomHeight:Y,ShowingValues:X,Indeterminate:Z},180),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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