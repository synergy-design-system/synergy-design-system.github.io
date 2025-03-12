import{g as e,a as m,s as d,b as u,c as g,d as y}from"./component-dGxHsbmv.js";import{k as p}from"./directive-helpers-B-JxG5af.js";import"./if-defined-98Biveud.js";import"./ref-DMm6gEez.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./icon-button-BbTH43IY.js";import"./library-UYMiFSYt.js";import"./icon.component-B0TOuoEq.js";import"./index-Vx7n56Jp.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-DhNYYbZD.js";var l=Object.freeze,b=Object.defineProperty,v=(o,x)=>l(b(o,"raw",{value:l(o.slice())})),c;const{args:h,argTypes:S}=d("syn-progress-bar"),{overrideArgs:B}=u("syn-progress-bar"),{generateTemplate:f}=g("syn-progress-bar"),P={args:B({name:"value",type:"attribute",value:33.3},h),argTypes:S,component:"syn-progress-bar",parameters:{design:m("15533-15734"),docs:{description:{component:e("progress-bar","default")}}},title:"Components/syn-progress-bar"},r={parameters:{docs:{description:{story:e("progress-bar","default")}}},render:o=>f({args:o})},s={parameters:{docs:{description:{story:e("progress-bar","labels")}}},render:()=>p`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},a={parameters:{docs:{description:{story:e("progress-bar","custom-height")}}},render:()=>p`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},t={parameters:{docs:{description:{story:e("progress-bar","showing-values")}}},render:()=>p(c||(c=v([`
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
  `])))},n={parameters:{docs:{description:{story:e("progress-bar","indeterminate")}}},render:()=>p`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},i=y({Default:r,Labels:s,CustomHeight:a,ShowingValues:t,Indeterminate:n},180);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} as Story`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...i.parameters?.docs?.source}}};const V=["Default","Labels","CustomHeight","ShowingValues","Indeterminate","Screenshot"];export{a as CustomHeight,r as Default,n as Indeterminate,s as Labels,i as Screenshot,t as ShowingValues,V as __namedExportsOrder,P as default};
