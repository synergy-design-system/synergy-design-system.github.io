import{g as m}from"./preview-DjaYbWbm.js";import{x as p}from"./lit-element-DILkAbkc.js";import{s as d,a as u,g as e,b as g,c as y}from"./component-uVhTJOOJ.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-I_beShna.js";import"./icon.component-JANxbeM1.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-D2TqFDQX.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-CB6aPP22.js";var l=Object.freeze,b=Object.defineProperty,v=(o,x)=>l(b(o,"raw",{value:l(o.slice())})),c;const{args:h,argTypes:S}=d("syn-progress-bar"),{overrideArgs:B}=y("syn-progress-bar"),{generateTemplate:f}=u("syn-progress-bar"),O={args:B({name:"value",type:"attribute",value:33.3},h),argTypes:S,component:"syn-progress-bar",parameters:{design:m("15533-15734"),docs:{description:{component:e("progress-bar","default")}}},title:"Components/syn-progress-bar"},r={parameters:{docs:{description:{story:e("progress-bar","default")}}},render:o=>f({args:o})},s={parameters:{docs:{description:{story:e("progress-bar","labels")}}},render:()=>p`
    <syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
  `},n={parameters:{docs:{description:{story:e("progress-bar","custom-height")}}},render:()=>p`
    <syn-progress-bar value="50" style="--height: var(--syn-spacing-2x-small);"></syn-progress-bar>
  `},a={parameters:{docs:{description:{story:e("progress-bar","showing-values")}}},render:()=>p(c||(c=v([`
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
  `])))},t={parameters:{docs:{description:{story:e("progress-bar","indeterminate")}}},render:()=>p`
    <syn-progress-bar indeterminate></syn-progress-bar>
  `},i=g({Default:r,Labels:s,CustomHeight:n,ShowingValues:a,Indeterminate:t},180);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  CustomHeight,
  ShowingValues,
  Indeterminate
}, 180)`,...i.parameters?.docs?.source}}};const T=["Default","Labels","CustomHeight","ShowingValues","Indeterminate","Screenshot"];export{n as CustomHeight,r as Default,t as Indeterminate,s as Labels,i as Screenshot,a as ShowingValues,T as __namedExportsOrder,O as default};
