import{e as S}from"./class-map--fBJekhC.js";import{l as f,x as s,g as x}from"./iframe-PfQ-yHii.js";import{o as _}from"./if-defined-D0RU9ZN4.js";import{L as B}from"./localize-Dh03wnLC.js";import{n as g}from"./property-C5Clh3dC.js";import{o as w}from"./style-map-C6vaFLDq.js";import{S as k,c as z}from"./component.styles-DB_F015F.js";import"./button-BabsYelw.js";import"./icon-BSvoqWI1.js";import{g as t,s as C,a as D,c as E,b as I}from"./component-DpUHzmc7.js";import"./index-DihgwUfS.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./state-D49XWjPc.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./icon.component-D3GPJxDS.js";import"./spinner.component-ChKoHCjt.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const L=f`
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
`,$=f`
  :host {
    --height: var(--syn-font-size-medium);
    --speed: 2.5s;
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
`;var P=Object.defineProperty,u=(e,d,b,q)=>{for(var r=void 0,m=e.length-1,y;m>=0;m--)(y=e[m])&&(r=y(d,b,r)||r);return r&&P(d,b,r),r};class c extends k{constructor(){super(...arguments),this.localize=new B(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[z,L,$]}render(){return s`
      <div
        part="base"
        class=${S({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${_(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${w({width:`${this.value}%`})}>
          ${this.indeterminate?"":s` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}u([g({type:Number,reflect:!0})],c.prototype,"value");u([g({type:Boolean,reflect:!0})],c.prototype,"indeterminate");u([g()],c.prototype,"label");c.define("syn-progress-bar");var v=Object.freeze,O=Object.defineProperty,j=(e,d)=>v(O(e,"raw",{value:v(e.slice())})),h;const{args:H,argTypes:M}=C("syn-progress-bar"),{overrideArgs:T}=D("syn-progress-bar"),{generateTemplate:V}=E("syn-progress-bar"),pe={args:T({name:"value",type:"attribute",value:33.3},H),argTypes:M,component:"syn-progress-bar",parameters:{design:x("15533-15734"),docs:{description:{component:t("progress-bar","default")}}},tags:["Feedback"],title:"Components/syn-progress-bar"},a={parameters:{docs:{description:{story:t("progress-bar","default")}}},render:e=>V({args:e})},o={parameters:{docs:{description:{story:t("progress-bar","labels")}}},render:()=>s`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},n={parameters:{docs:{description:{story:t("progress-bar","custom-height")}}},render:()=>s`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},i={parameters:{docs:{description:{story:t("progress-bar","showing-values")}}},render:()=>s(h||(h=j([`
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
  `])))},l={parameters:{docs:{description:{story:t("progress-bar","indeterminate")}}},render:()=>s`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},p=I({Default:a,Labels:o,CustomHeight:n,ShowingValues:i,Indeterminate:l},180);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...p.parameters?.docs?.source}}};const ce=["Default","Labels","CustomHeight","ShowingValues","Indeterminate","Screenshot"];export{n as CustomHeight,a as Default,l as Indeterminate,o as Labels,p as Screenshot,i as ShowingValues,ce as __namedExportsOrder,pe as default};
