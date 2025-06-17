import{a as x}from"./class-map-QQ7HVnPG.js";import{i as S,x as v,n as g}from"./property-ImbD-3qY.js";import{o as _}from"./if-defined-CDNCanKK.js";import{L as B}from"./localize-CatY2peN.js";import{o as w}from"./style-map-CCBBFCou.js";import{S as k,c as z}from"./component.styles-DXWA7L2q.js";import"./button-CwZJTvX8.js";import"./icon-DLaBEzps.js";import{g as C,x as p}from"./iframe-GSRepqjd.js";import{g as s,s as D,a as E,c as I,b as $}from"./component-sz2YSCF4.js";import"./index-DihgwUfS.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./static-BkNWbPkN.js";import"./directive-helpers-CvZEagFv.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./icon.component-B3J6d3UF.js";import"./spinner.component-pJEN2kXr.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const L=S`
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
`,P=S`
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
`;var O=Object.defineProperty,u=(e,d,b,A)=>{for(var r=void 0,m=e.length-1,y;m>=0;m--)(y=e[m])&&(r=y(d,b,r)||r);return r&&O(d,b,r),r};class c extends k{constructor(){super(...arguments),this.localize=new B(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[z,L,P]}render(){return v`
      <div
        part="base"
        class=${x({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${_(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${w({width:`${this.value}%`})}>
          ${this.indeterminate?"":v` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}u([g({type:Number,reflect:!0})],c.prototype,"value");u([g({type:Boolean,reflect:!0})],c.prototype,"indeterminate");u([g()],c.prototype,"label");c.define("syn-progress-bar");var h=Object.freeze,j=Object.defineProperty,H=(e,d)=>h(j(e,"raw",{value:h(e.slice())})),f;const{args:M,argTypes:T}=D("syn-progress-bar"),{overrideArgs:V}=E("syn-progress-bar"),{generateTemplate:q}=I("syn-progress-bar"),de={args:V({name:"value",type:"attribute",value:33.3},M),argTypes:T,component:"syn-progress-bar",parameters:{design:C("15533-15734"),docs:{description:{component:s("progress-bar","default")}}},tags:["Feedback"],title:"Components/syn-progress-bar"},t={parameters:{docs:{description:{story:s("progress-bar","default")}}},render:e=>q({args:e})},a={parameters:{docs:{description:{story:s("progress-bar","labels")}}},render:()=>p`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},o={parameters:{docs:{description:{story:s("progress-bar","custom-height")}}},render:()=>p`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},n={parameters:{docs:{description:{story:s("progress-bar","showing-values")}}},render:()=>p(f||(f=H([`
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
  `])))},i={parameters:{docs:{description:{story:s("progress-bar","indeterminate")}}},render:()=>p`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},l=$({Default:t,Labels:a,CustomHeight:o,ShowingValues:n,Indeterminate:i},180);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...l.parameters?.docs?.source}}};const me=["Default","Labels","CustomHeight","ShowingValues","Indeterminate","Screenshot"];export{o as CustomHeight,t as Default,i as Indeterminate,a as Labels,l as Screenshot,n as ShowingValues,me as __namedExportsOrder,de as default};
