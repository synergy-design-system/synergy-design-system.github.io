import{e as _}from"./class-map-CVI9ScdU.js";import{e as w,a as B,t as k,T as C,q as S,x as n,g as z,C as E}from"./iframe-CvU34O_B.js";import{o as $}from"./if-defined-5E7M7M3a.js";import{L as D}from"./localize-Dh03wnLC.js";import{S as I,c as L,n as b}from"./synergy-element-B1F-Pf22.js";import"./button-Blu0oPhu.js";import"./icon-Dvb_e3A7.js";import{g as i,s as T,a as P,c as O,b as j}from"./component--gCMxXrB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DihgwUfS.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./icon.component-BGlPOzcQ.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./spinner.component-wvmau_pc.js";import"./decorator-UnohHU6S.js";import"./functions-B4dslKTf.js";import"./index-CQ0aEGxp.js";import"./_docs-DNIao1HN.js";const x="important",M=" !"+x,A=w(class extends B{constructor(e){if(super(e),e.type!==k.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((a,s)=>{const r=e[s];return r==null?a:a+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[a]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(a)),this.render(a);for(const r of this.ft)a[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in a){const t=a[r];if(t!=null){this.ft.add(r);const o=typeof t=="string"&&t.endsWith(M);r.includes("-")||o?s.setProperty(r,o?t.slice(0,-11):t,o?x:""):s[r]=t}}return C}}),H=S`
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
`,q=S`
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
`;var U=Object.defineProperty,y=(e,a,s,r)=>{for(var t=void 0,o=e.length-1,v;o>=0;o--)(v=e[o])&&(t=v(a,s,t)||t);return t&&U(a,s,t),t};class g extends I{constructor(){super(...arguments),this.localize=new D(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[L,H,q]}render(){return n`
      <div
        part="base"
        class=${_({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${$(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${A({width:`${this.value}%`})}>
          ${this.indeterminate?"":n` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}y([b({type:Number,reflect:!0})],g.prototype,"value");y([b({type:Boolean,reflect:!0})],g.prototype,"indeterminate");y([b()],g.prototype,"label");g.define("syn-progress-bar");var h=Object.freeze,V=Object.defineProperty,F=(e,a)=>h(V(e,"raw",{value:h(e.slice())})),f;const{args:N,argTypes:R}=T("syn-progress-bar"),{overrideArgs:W}=P("syn-progress-bar"),{generateTemplate:Z}=O("syn-progress-bar"),ge={args:W({name:"value",type:"attribute",value:33.3},N),argTypes:R,component:"syn-progress-bar",parameters:{chromatic:{modes:E},design:z("15533-15734"),docs:{description:{component:i("progress-bar","default")}}},tags:["Feedback"],title:"Components/syn-progress-bar"},l={parameters:{docs:{description:{story:i("progress-bar","default")}}},render:e=>Z({args:e})},c={parameters:{docs:{description:{story:i("progress-bar","labels")}}},render:()=>n`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},p={parameters:{docs:{description:{story:i("progress-bar","custom-height")}}},render:()=>n`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},d={parameters:{docs:{description:{story:i("progress-bar","showing-values")}}},render:()=>n(f||(f=F([`
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
  `])))},m={parameters:{docs:{description:{story:i("progress-bar","indeterminate")}}},render:()=>n`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},u=j({Default:l,Labels:c,CustomHeight:p,ShowingValues:d,Indeterminate:m},180);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...u.parameters?.docs?.source}}};const be=["Default","Labels","CustomHeight","ShowingValues","Indeterminate","Screenshot"];export{p as CustomHeight,l as Default,m as Indeterminate,c as Labels,u as Screenshot,d as ShowingValues,be as __namedExportsOrder,ge as default};
