import{a as S}from"./static-gmWA-8Kq.js";import{i as f,x as s}from"./directive-helpers-DGrfjhaU.js";import{o as x}from"./if-defined-B2ZFWIyt.js";import{L as _}from"./localize-CatY2peN.js";import{n as g}from"./property-BGzwfL48.js";import{o as B}from"./style-map-CPNbGMYp.js";import{S as w,c as k}from"./component.styles-Do19GEOY.js";import"./button-BtEYlTQw.js";import"./icon-pavMdF9K.js";import{g as t,a as z,s as C,b as D,d as E,c as I}from"./component-JZANH7tg.js";import"./index-DihgwUfS.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./icon.component-CScz9CrR.js";import"./spinner.component-oeFu-uyM.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-Br-JURis.js";const L=f`
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
`;var P=Object.defineProperty,u=(e,d,b,q)=>{for(var r=void 0,m=e.length-1,y;m>=0;m--)(y=e[m])&&(r=y(d,b,r)||r);return r&&P(d,b,r),r};class c extends w{constructor(){super(...arguments),this.localize=new _(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[k,L,$]}render(){return s`
      <div
        part="base"
        class=${S({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${x(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${B({width:`${this.value}%`})}>
          ${this.indeterminate?"":s` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}u([g({type:Number,reflect:!0})],c.prototype,"value");u([g({type:Boolean,reflect:!0})],c.prototype,"indeterminate");u([g()],c.prototype,"label");c.define("syn-progress-bar");var v=Object.freeze,O=Object.defineProperty,j=(e,d)=>v(O(e,"raw",{value:v(e.slice())})),h;const{args:H,argTypes:M}=C("syn-progress-bar"),{overrideArgs:T}=D("syn-progress-bar"),{generateTemplate:V}=E("syn-progress-bar"),ye={args:T({name:"value",type:"attribute",value:33.3},H),argTypes:M,component:"syn-progress-bar",parameters:{design:z("15533-15734"),docs:{description:{component:t("progress-bar","default")}}},title:"Components/syn-progress-bar"},a={parameters:{docs:{description:{story:t("progress-bar","default")}}},render:e=>V({args:e})},o={parameters:{docs:{description:{story:t("progress-bar","labels")}}},render:()=>s`
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
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}, 180)`,...p.parameters?.docs?.source}}};const ve=["Default","Labels","CustomHeight","ShowingValues","Indeterminate","Screenshot"];export{n as CustomHeight,a as Default,l as Indeterminate,o as Labels,p as Screenshot,i as ShowingValues,ve as __namedExportsOrder,ye as default};
