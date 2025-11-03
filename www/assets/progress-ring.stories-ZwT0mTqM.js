import{j as x,x as a,g as S,C as k}from"./iframe-Dek8tjfo.js";import{L as w}from"./localize-Dh03wnLC.js";import{S as z,c as C,n as _}from"./synergy-element-CoZx2mnE.js";import{r as R}from"./icon.component-DJfNo403.js";import{a as D}from"./query-DAIS6qJ0.js";import"./button-CqlmPAzq.js";import"./icon-BHp-mF5g.js";import{g as s,s as E,a as B,c as L,b as I}from"./component-DsRohamG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DihgwUfS.js";import"./watch-CEsCE2EF.js";import"./class-map-CJDJ_y29.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-BM-x80k3.js";import"./spinner.component-rSlUJXt0.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";const O=x`
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
`,j=x`
  :host {
    --size: 120px;
    --track-width: var(--syn-spacing-x-small);
    --track-color: var(--syn-progress-track-color, var(--syn-color-neutral-200));
    --indicator-color: var(--syn-progress-indicator-color, var(--syn-color-primary-600));
  }

  .progress-ring__indicator {
    stroke-linecap: initial;
  }

  .progress-ring__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-x-large);
  }
`;var P=Object.defineProperty,m=(r,t,d,y)=>{for(var e=void 0,v=r.length-1,h;v>=0;v--)(h=r[v])&&(e=h(t,d,e)||e);return e&&P(t,d,e),e};class g extends z{constructor(){super(...arguments),this.localize=new w(this),this.value=0,this.label=""}static{this.styles=[C,O,j]}updated(t){if(super.updated(t),t.has("value")){const d=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),y=2*Math.PI*d,e=y-this.value/100*y;this.indicatorOffset=`${e}px`}}render(){return a`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
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
    `}}m([D(".progress-ring__indicator")],g.prototype,"indicator");m([R()],g.prototype,"indicatorOffset");m([_({type:Number,reflect:!0})],g.prototype,"value");m([_()],g.prototype,"label");g.define("syn-progress-ring");var f=Object.freeze,T=Object.defineProperty,A=(r,t)=>f(T(r,"raw",{value:f(r.slice())})),b;const{args:M,argTypes:$}=E("syn-progress-ring"),{overrideArgs:V}=B("syn-progress-ring"),{generateTemplate:F}=L("syn-progress-ring"),cr={args:V([{name:"default",type:"slot",value:""},{name:"value",type:"attribute",value:"25"}],M),argTypes:$,component:"syn-progress-ring",parameters:{chromatic:{modes:k},design:S("14207-8709"),docs:{description:{component:s("progress-ring","default")}}},tags:["Feedback","SICK2018","SICK2025"],title:"Components/syn-progress-ring"},o={parameters:{docs:{description:{story:s("progress-ring","default")}}},render:r=>F({args:r})},n={parameters:{docs:{description:{story:s("progress-ring","size")}}},render:()=>a`
    <syn-progress-ring value="35" style="--size: 48px;"></syn-progress-ring>
  `},i={parameters:{docs:{description:{story:s("progress-ring","track-indicator-width")}}},render:()=>a`
    <syn-progress-ring value="50" style="--track-width: 4px; --indicator-width: 8px;"></syn-progress-ring>
  `},c={parameters:{docs:{description:{story:s("progress-ring","color")}}},render:()=>a`
    <syn-progress-ring
      value="50"
      style="--indicator-color: var(--syn-color-success-700);"
    ></syn-progress-ring>`},l={parameters:{docs:{description:{story:s("progress-ring","labels")}}},render:()=>a`
    <syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
  `},p={parameters:{docs:{description:{story:s("progress-ring","show-values")}}},render:()=>a(b||(b=A([`
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
  `])))},u=I({Default:o,Size:n,TrackAndIndicatorWidth:i,Colors:c,Labels:l,ShowingValues:p},300);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackAndIndicatorWidth,
  Colors,
  Labels,
  ShowingValues
}, 300)`,...u.parameters?.docs?.source}}};const lr=["Default","Size","TrackAndIndicatorWidth","Colors","Labels","ShowingValues","Screenshot"];export{c as Colors,o as Default,l as Labels,u as Screenshot,p as ShowingValues,n as Size,i as TrackAndIndicatorWidth,lr as __namedExportsOrder,cr as default};
