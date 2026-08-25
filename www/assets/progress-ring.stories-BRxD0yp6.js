import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-Br8gqwpX.js";import{c as i,h as a,t as o}from"./lit-DgWh_IaA.js";import{a as s,d as c,l,n as u,o as d,r as f,s as p,t as m}from"./synergy-element-BeBxrfuL.js";import{t as h}from"./query-DOHNhzf6.js";import{n as g,t as _}from"./localize-Du3bqz3O.js";import{t as v}from"./button-CbgJ0euj.js";import{t as y}from"./icon-8mkXc18S.js";import{a as b,i as x,n as S,o as C,r as w,t as T}from"./component-iQCIgMPU.js";import{t as E}from"./taggedTemplateLiteral-BZenJ0bZ.js";var D;function O(){return(O=e((()=>{o(),D=a`
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
`})))()}var k;function A(){return(A=e((()=>{o(),k=a`
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
`})))()}var j;function M(){return(M=e((()=>{o(),_(),p(),d(),u(),O(),A(),j=class extends m{constructor(...e){super(...e),this.localize=new g(this),this.value=0,this.label=``}static{this.styles=[s,D,k]}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;this.indicatorOffset=`${n}px`}}render(){return i`
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
    `}},f([h(`.progress-ring__indicator`)],j.prototype,`indicator`,void 0),f([l()],j.prototype,`indicatorOffset`,void 0),f([c({type:Number,reflect:!0})],j.prototype,`value`,void 0),f([c()],j.prototype,`label`,void 0)})))()}function N(){return(N=e((()=>{M(),j.define(`syn-progress-ring`)})))()}var P=t({Colors:()=>W,Default:()=>V,Labels:()=>G,Screenshot:()=>q,ShowingValues:()=>K,Size:()=>H,TrackAndIndicatorWidth:()=>U,__namedExportsOrder:()=>J,default:()=>B}),F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{N(),v(),y(),o(),w(),r(),{args:I,argTypes:L}=x(`syn-progress-ring`),{overrideArgs:R}=b(`syn-progress-ring`),{generateTemplate:z}=C(`syn-progress-ring`),B={args:R([{name:`default`,type:`slot`,value:``},{name:`value`,type:`attribute`,value:`25`}],I),argTypes:L,component:`syn-progress-ring`,parameters:{chromatic:{modes:n},docs:{description:{component:S(`progress-ring`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-ring`},V={parameters:{docs:{description:{story:S(`progress-ring`,`default`)}}},render:e=>z({args:e})},H={parameters:{docs:{description:{story:S(`progress-ring`,`size`)}}},render:()=>i`
    <syn-progress-ring value="35" style="--size: 48px;"></syn-progress-ring>
  `},U={parameters:{docs:{description:{story:S(`progress-ring`,`track-indicator-width`)}}},render:()=>i`
    <syn-progress-ring value="50" style="--track-width: 4px; --indicator-width: 8px;"></syn-progress-ring>
  `},W={parameters:{docs:{description:{story:S(`progress-ring`,`color`)}}},render:()=>i`
    <syn-progress-ring
      value="50"
      style="--indicator-color: var(--syn-color-success-700);"
    ></syn-progress-ring>`},G={parameters:{docs:{description:{story:S(`progress-ring`,`labels`)}}},render:()=>i`
    <syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
  `},K={parameters:{docs:{description:{story:S(`progress-ring`,`show-values`)}}},render:()=>i(F||=E([`
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
  `]))},q=T({Default:V,Size:H,TrackAndIndicatorWidth:U,Colors:W,Labels:G,ShowingValues:K},300),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackAndIndicatorWidth,
  Colors,
  Labels,
  ShowingValues
}, 300)`,...q.parameters?.docs?.source}}},J=[`Default`,`Size`,`TrackAndIndicatorWidth`,`Colors`,`Labels`,`ShowingValues`,`Screenshot`]})))()}export{Y as n,P as r,V as t};