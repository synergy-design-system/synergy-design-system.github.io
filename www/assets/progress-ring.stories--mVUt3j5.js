import{g as r,a as d,s as u,b as m,c as y,d as v}from"./component-am3nsY8B.js";import{k as i}from"./directive-helpers-B-JxG5af.js";import"./if-defined-98Biveud.js";import"./ref-DMm6gEez.js";import"./chunk-L4EGOTBX-Mt8q4xcs.js";import"./entry-preview-CWKZl0rh.js";import"./index-ogSvIofg.js";import"./icon-button-Hx1LwkdA.js";import"./library-UYMiFSYt.js";import"./icon.component-DYLG64TD.js";import"./index-Vx7n56Jp.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-BdYUBF6z.js";var g=Object.freeze,b=Object.defineProperty,S=(c,R)=>g(b(c,"raw",{value:g(c.slice())})),l;const{args:h,argTypes:x}=u("syn-progress-ring"),{overrideArgs:f}=m("syn-progress-ring"),{generateTemplate:k}=y("syn-progress-ring"),P={args:f([{name:"default",type:"slot",value:""},{name:"value",type:"attribute",value:"25"}],h),argTypes:x,component:"syn-progress-ring",parameters:{design:d("14207-8709"),docs:{description:{component:r("progress-ring","default")}}},title:"Components/syn-progress-ring"},e={parameters:{docs:{description:{story:r("progress-ring","default")}}},render:c=>k({args:c})},s={parameters:{docs:{description:{story:r("progress-ring","size")}}},render:()=>i`
    <syn-progress-ring value="35" style="--size: 48px;"></syn-progress-ring>
  `},t={parameters:{docs:{description:{story:r("progress-ring","track-indicator-width")}}},render:()=>i`
    <syn-progress-ring value="50" style="--track-width: 4px; --indicator-width: 8px;"></syn-progress-ring>
  `},n={parameters:{docs:{description:{story:r("progress-ring","color")}}},render:()=>i`
    <syn-progress-ring
      value="50"
      style="--indicator-color: var(--syn-color-success-600);"
    ></syn-progress-ring>`},o={parameters:{docs:{description:{story:r("progress-ring","labels")}}},render:()=>i`
    <syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
  `},a={parameters:{docs:{description:{story:r("progress-ring","show-values")}}},render:()=>i(l||(l=S([`
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
  `])))},p=v({Default:e,Size:s,TrackAndIndicatorWidth:t,Colors:n,Labels:o,ShowingValues:a},300);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'default')
      }
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      style="--indicator-color: var(--syn-color-success-600);"
    ></syn-progress-ring>\`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Size,
  TrackAndIndicatorWidth,
  Colors,
  Labels,
  ShowingValues
}, 300)`,...p.parameters?.docs?.source}}};const V=["Default","Size","TrackAndIndicatorWidth","Colors","Labels","ShowingValues","Screenshot"];export{n as Colors,e as Default,o as Labels,p as Screenshot,a as ShowingValues,s as Size,t as TrackAndIndicatorWidth,V as __namedExportsOrder,P as default};
