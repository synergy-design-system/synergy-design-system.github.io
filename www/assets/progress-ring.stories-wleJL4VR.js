import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-B6MsgHSu.js";import{c as a,h as o,t as s}from"./lit-BfcklOOD.js";import{_ as c,a as l,f as u,i as d,n as f,o as p,r as m,s as h,t as g,y as _}from"./synergy-element-zaPEO0fm.js";import{n as v,t as y}from"./localize-BNnpMTZD.js";import{t as b}from"./button-XwWY2ykI.js";import{t as x}from"./icon-B25O_k_c.js";import{a as S,i as C,n as w,o as T,r as E,t as D}from"./component-BQujXijc.js";import{n as O,t as k}from"./taggedTemplateLiteral-C9cDEsPD.js";var A,j=e((()=>{s(),A=o`
	/* stylelint-disable */
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--syn-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--syn-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`})),M,N=e((()=>{s(),M=o`
  :host {
    --size: 120px;
    --track-width: var(--syn-spacing-x-small);
    --track-color: var(--syn-progress-track-color);
    --indicator-color: var(--syn-progress-indicator-color);
  }

  .progress-ring__indicator {
    stroke-linecap: initial;
  }

  .progress-ring__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-x-large);
  }
`})),P,F=e((()=>{s(),y(),h(),p(),f(),j(),N(),d(),P=class extends g{constructor(...e){super(...e),this.localize=new v(this),this.value=0,this.label=``}static{this.styles=[l,A,M]}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;this.indicatorOffset=`${n}px`}}render(){return a`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}},m([u(`.progress-ring__indicator`)],P.prototype,`indicator`,void 0),m([c()],P.prototype,`indicatorOffset`,void 0),m([_({type:Number,reflect:!0})],P.prototype,`value`,void 0),m([_()],P.prototype,`label`,void 0)})),I=e((()=>{F(),F(),P.define(`syn-progress-ring`)})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=e((()=>{I(),b(),x(),s(),E(),r(),n(),O(),{args:R,argTypes:z}=C(`syn-progress-ring`),{overrideArgs:B}=S(`syn-progress-ring`),{generateTemplate:V}=T(`syn-progress-ring`),H={args:B([{name:`default`,type:`slot`,value:``},{name:`value`,type:`attribute`,value:`25`}],R),argTypes:z,component:`syn-progress-ring`,parameters:{chromatic:{modes:i},design:t(`41203-296727`),docs:{description:{component:w(`progress-ring`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-ring`},U={parameters:{docs:{description:{story:w(`progress-ring`,`default`)}}},render:e=>V({args:e})},W={parameters:{docs:{description:{story:w(`progress-ring`,`size`)}}},render:()=>a`
    <syn-progress-ring value="35" style="--size: 48px;"></syn-progress-ring>
  `},G={parameters:{docs:{description:{story:w(`progress-ring`,`track-indicator-width`)}}},render:()=>a`
    <syn-progress-ring value="50" style="--track-width: 4px; --indicator-width: 8px;"></syn-progress-ring>
  `},K={parameters:{docs:{description:{story:w(`progress-ring`,`color`)}}},render:()=>a`
    <syn-progress-ring
      value="50"
      style="--indicator-color: var(--syn-color-success-700);"
    ></syn-progress-ring>`},q={parameters:{docs:{description:{story:w(`progress-ring`,`labels`)}}},render:()=>a`
    <syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
  `},J={parameters:{docs:{description:{story:w(`progress-ring`,`show-values`)}}},render:()=>a(L||=k([`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-progress-ring value="50" class="progress-ring-values">50%</syn-progress-ring>
      <div style="display: flex; gap: var(--syn-spacing-x-small);">
        <syn-button variant="outline">
          <syn-icon name="indeterminate" library="system" label="Decrease"></syn-icon>
        </syn-button>
        <syn-button variant="outline">
          <syn-icon name="add" library="system" label="Increase"></syn-icon>
        </syn-button>
      </div>
    </div>

    <script type="module">
    const progressRing = document.querySelector('.progress-ring-values');
    const subtractButton = progressRing.nextElementSibling.firstElementChild;
    const addButton = subtractButton.nextElementSibling;

    addButton.addEventListener('click', () => {
      const value = Math.min(100, progressRing.value + 10);
      progressRing.value = value;
      progressRing.textContent = value + '%';
    });

    subtractButton.addEventListener('click', () => {
      const value = Math.max(0, progressRing.value - 10);
      progressRing.value = value;
      progressRing.textContent = value + '%';
    });
    <\/script>
  `]))},Y=D({Default:U,Size:W,TrackAndIndicatorWidth:G,Colors:K,Labels:q,ShowingValues:J},300),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'size')
      }
    }
  },
  render: () => html\`
    <syn-progress-ring value="35" style="--size: 48px;"></syn-progress-ring>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'track-indicator-width')
      }
    }
  },
  render: () => html\`
    <syn-progress-ring value="50" style="--track-width: 4px; --indicator-width: 8px;"></syn-progress-ring>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'color')
      }
    }
  },
  render: () => html\`
    <syn-progress-ring
      value="50"
      style="--indicator-color: var(--syn-color-success-700);"
    ></syn-progress-ring>\`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'labels')
      }
    }
  },
  render: () => html\`
    <syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'show-values')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-progress-ring value="50" class="progress-ring-values">50%</syn-progress-ring>
      <div style="display: flex; gap: var(--syn-spacing-x-small);">
        <syn-button variant="outline">
          <syn-icon name="indeterminate" library="system" label="Decrease"></syn-icon>
        </syn-button>
        <syn-button variant="outline">
          <syn-icon name="add" library="system" label="Increase"></syn-icon>
        </syn-button>
      </div>
    </div>

    <script type="module">
    const progressRing = document.querySelector('.progress-ring-values');
    const subtractButton = progressRing.nextElementSibling.firstElementChild;
    const addButton = subtractButton.nextElementSibling;

    addButton.addEventListener('click', () => {
      const value = Math.min(100, progressRing.value + 10);
      progressRing.value = value;
      progressRing.textContent = value + '%';
    });

    subtractButton.addEventListener('click', () => {
      const value = Math.max(0, progressRing.value - 10);
      progressRing.value = value;
      progressRing.textContent = value + '%';
    });
    <\/script>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackAndIndicatorWidth,
  Colors,
  Labels,
  ShowingValues
}, 300)`,...Y.parameters?.docs?.source}}},X=[`Default`,`Size`,`TrackAndIndicatorWidth`,`Colors`,`Labels`,`ShowingValues`,`Screenshot`]}));Z();export{K as Colors,U as Default,q as Labels,Y as Screenshot,J as ShowingValues,W as Size,G as TrackAndIndicatorWidth,X as __namedExportsOrder,H as default,Z as t};