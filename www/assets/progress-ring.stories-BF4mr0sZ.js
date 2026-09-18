import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-3Ak7_2Z-.js";import{c as i,h as a,t as o}from"./lit-DgWh_IaA.js";import{a as s,d as c,n as l,o as u,r as d,s as f,t as p}from"./synergy-element-CUzVX0sP.js";import{t as m}from"./query-DOHNhzf6.js";import{n as h,t as g}from"./localize-Du3bqz3O.js";import{t as _}from"./button-DE-StgRg.js";import{t as v}from"./icon-iff1Nb0d.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./component-BZq7Do6i.js";import{t as T}from"./taggedTemplateLiteral-BZenJ0bZ.js";var E;function D(){return(D=e((()=>{o(),E=a`
  :host {
    --size: 120px;
    --track-width: var(--syn-spacing-x-small);
    --track-color: var(--syn-progress-track-color);
    --indicator-width: var(--track-width);
    --indicator-color: var(--syn-progress-indicator-color);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
    width: var(--size);
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    /* stylelint-disable-next-line number-max-precision */
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    fill: none;
    r: var(--radius);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
    stroke-linecap: initial;
    stroke-width: var(--indicator-width);
    transition-duration: var(--indicator-transition-duration);
    transition-property: stroke-dashoffset;
  }

  .progress-ring__label {
    align-items: center;
    color: var(--syn-typography-color-text);
    display: flex;
    font: var(--syn-heading-x-large);
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    text-align: center;
    top: 0;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
    width: 100%;
  }
`})))()}var O;function k(){return(k=e((()=>{f(),o(),g(),u(),l(),D(),O=class extends p{constructor(...e){super(...e),this.localize=new h(this),this.value=0,this.label=``}static{this.styles=[s,E]}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;Number.isFinite(n)&&(this.indicator.style.strokeDashoffset=`${n}px`)}}render(){return i`
      <div
        aria-describedby="label"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow="${this.value}"
        class="progress-ring"
        part="base"
        role="progressbar"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}},d([m(`.progress-ring__indicator`)],O.prototype,`indicator`,void 0),d([c({reflect:!0,type:Number})],O.prototype,`value`,void 0),d([c()],O.prototype,`label`,void 0)})))()}function A(){return(A=e((()=>{k(),O.define(`syn-progress-ring`)})))()}var j=t({Colors:()=>V,Default:()=>R,Labels:()=>H,Screenshot:()=>W,ShowingValues:()=>U,Size:()=>z,TrackAndIndicatorWidth:()=>B,__namedExportsOrder:()=>G,default:()=>L}),M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{A(),_(),v(),o(),C(),r(),{args:N,argTypes:P}=b(`syn-progress-ring`),{overrideArgs:F}=y(`syn-progress-ring`),{generateTemplate:I}=S(`syn-progress-ring`),L={args:F([{name:`default`,type:`slot`,value:``},{name:`value`,type:`attribute`,value:`25`}],N),argTypes:P,component:`syn-progress-ring`,parameters:{chromatic:{modes:n},docs:{description:{component:x(`progress-ring`,`default`)}}},tags:[`Feedback`],title:`Components/syn-progress-ring`},R={parameters:{docs:{description:{story:x(`progress-ring`,`default`)}}},render:e=>I({args:e})},z={parameters:{docs:{description:{story:x(`progress-ring`,`size`)}}},render:()=>i`
    <syn-progress-ring value="35" style="--size: 48px;"></syn-progress-ring>
  `},B={parameters:{docs:{description:{story:x(`progress-ring`,`track-indicator-width`)}}},render:()=>i`
    <syn-progress-ring value="50" style="--track-width: 4px; --indicator-width: 8px;"></syn-progress-ring>
  `},V={parameters:{docs:{description:{story:x(`progress-ring`,`color`)}}},render:()=>i`
    <syn-progress-ring
      value="50"
      style="--indicator-color: var(--syn-color-success-700);"
    ></syn-progress-ring>`},H={parameters:{docs:{description:{story:x(`progress-ring`,`labels`)}}},render:()=>i`
    <syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
  `},U={parameters:{docs:{description:{story:x(`progress-ring`,`show-values`)}}},render:()=>i(M||=T([`
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
  `]))},W=w({Default:R,Size:z,TrackAndIndicatorWidth:B,Colors:V,Labels:H,ShowingValues:U},300),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackAndIndicatorWidth,
  Colors,
  Labels,
  ShowingValues
}, 300)`,...W.parameters?.docs?.source}}},G=[`Default`,`Size`,`TrackAndIndicatorWidth`,`Colors`,`Labels`,`ShowingValues`,`Screenshot`]})))()}export{K as n,j as r,R as t};