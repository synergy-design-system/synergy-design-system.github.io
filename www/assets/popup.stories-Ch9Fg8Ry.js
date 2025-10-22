import"./popup-CCmMMLsT.js";import"./switch-BxRAbpEG.js";import"./select-CwhLblsf.js";import"./option-BD3dn8me.js";import"./range-DWCmIq_J.js";import{x as e}from"./iframe-DUztr9np.js";import{g as E,s as L,a as A,c as P}from"./component-B5oU5NCH.js";import"./popup.component-Byxwh5QE.js";import"./class-map-DNRrGswL.js";import"./if-defined-C5PXOD-L.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-DQJWtWn5.js";import"./query-DAIS6qJ0.js";import"./default-value-Dyean7qI.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./live-C7JP2s01.js";import"./icon.component-BVW2YmP3.js";import"./watch-CEsCE2EF.js";import"./form-control.custom.styles-emOZRx_L.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./animation-registry-l4L8bmT6.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./tag.component-BZ8gGixZ.js";import"./icon-button.component-BMCy9yHz.js";import"./tooltip.component-DQJXct_5.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-AUM8SZQl.js";var m=Object.freeze,_=Object.defineProperty,t=(y,z)=>m(_(y,"raw",{value:m(y.slice())})),v,b,g,x,f,w,k,S,q;const{args:T,argTypes:Y}=L("syn-popup"),{overrideArgs:X}=A("syn-popup"),{generateTemplate:D}=P("syn-popup"),ye={args:X([{name:"active",type:"attribute",value:!0},{name:"anchor",type:"slot",value:"<span></span>"},{name:"default",type:"slot",value:'<div class="box"></div>'}],T),argTypes:Y,component:"syn-popup",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{component:E("popup","default")},story:{iframeHeight:300}}},title:"Components/syn-popup"},h={parameters:{docs:{description:{story:E("popup","default")}}},render:y=>e`
    <div class="popup-default">
      ${D({args:y})}
    </div>
    <style>
    .popup-default span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--syn-color-neutral-600);
      margin: 50px;
    }

    .popup-default .box {
      width: 100px;
      height: 50px;
      background: var(--syn-color-primary-600);
      border-radius: var(--syn-border-radius-medium);
    }
    </style>
  `},o={render:()=>e(v||(v=t([`<div class="popup-active">
  <syn-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <br />
  <syn-switch checked>Active</syn-switch>
</div>

<style>
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-active');
  const popup = container.querySelector('syn-popup');
  const active = container.querySelector('syn-switch');

  active.addEventListener('syn-change', () => (popup.active = active.checked));
<\/script>`])))},n={render:()=>e`<span id="external-anchor"></span>

<syn-popup anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</syn-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ syn-popup .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>`},p={render:()=>e(b||(b=t([`<div class="popup-placement">
  <syn-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-select label="Placement" value="top">
    <syn-option value="top">top</syn-option>
    <syn-option value="top-start">top-start</syn-option>
    <syn-option value="top-end">top-end</syn-option>
    <syn-option value="bottom">bottom</syn-option>
    <syn-option value="bottom-start">bottom-start</syn-option>
    <syn-option value="bottom-end">bottom-end</syn-option>
    <syn-option value="right">right</syn-option>
    <syn-option value="right-start">right-start</syn-option>
    <syn-option value="right-end">right-end</syn-option>
    <syn-option value="left">left</syn-option>
    <syn-option value="left-start">left-start</syn-option>
    <syn-option value="left-end">left-end</syn-option>
  </syn-select>
</div>

<style>
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-placement syn-select {
    max-width: 280px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-placement');
  const popup = container.querySelector('syn-popup');
  const select = container.querySelector('syn-select');

  select.addEventListener('syn-change', () => (popup.placement = select.value));
<\/script>`])))},r={render:()=>e(g||(g=t([`<div class="popup-distance">
  <syn-popup placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-range min="-50" max="50" step="1" value="0" label="Distance"></syn-range>
</div>

<style>
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-distance syn-range {
    max-width: 260px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-distance');
  const popup = container.querySelector('syn-popup');
  const distance = container.querySelector('syn-range');

  distance.addEventListener('syn-input', () => (popup.distance = distance.value));
<\/script>`])))},s={render:()=>e(x||(x=t([`<div class="popup-skidding">
  <syn-popup placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-range min="-50" max="50" step="1" value="0" label="Skidding"></syn-range>
</div>

<style>
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-skidding syn-range {
    max-width: 260px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-skidding');
  const popup = container.querySelector('syn-popup');
  const skidding = container.querySelector('syn-range');

  skidding.addEventListener('syn-input', () => (popup.skidding = skidding.value));
<\/script>`])))},a={render:()=>e(f||(f=t([`<div class="popup-arrow">
  <syn-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <div class="popup-arrow-options">
    <syn-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <syn-option value="top">top</syn-option>
      <syn-option value="top-start">top-start</syn-option>
      <syn-option value="top-end">top-end</syn-option>
      <syn-option value="bottom">bottom</syn-option>
      <syn-option value="bottom-start">bottom-start</syn-option>
      <syn-option value="bottom-end">bottom-end</syn-option>
      <syn-option value="right">right</syn-option>
      <syn-option value="right-start">right-start</syn-option>
      <syn-option value="right-end">right-end</syn-option>
      <syn-option value="left">left</syn-option>
      <syn-option value="left-start">left-start</syn-option>
      <syn-option value="left-end">left-end</syn-option>
    </syn-select>

    <syn-select label="Arrow Placement" name="arrow-placement" value="anchor">
      <syn-option value="anchor">anchor</syn-option>
      <syn-option value="start">start</syn-option>
      <syn-option value="end">end</syn-option>
      <syn-option value="center">center</syn-option>
    </syn-select>
  </div>

  <div class="popup-arrow-options">
    <syn-switch name="arrow" checked>Arrow</syn-switch>
  </div>

  <style>
    .popup-arrow syn-popup {
      --arrow-color: var(--syn-color-primary-600);
    }

    .popup-arrow span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--syn-color-neutral-600);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--syn-color-primary-600);
      border-radius: var(--syn-border-radius-medium);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options syn-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script type="module">
    const container = document.querySelector('.popup-arrow');
    const popup = container.querySelector('syn-popup');
    const placement = container.querySelector('[name="placement"]');
    const arrowPlacement = container.querySelector('[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    placement.addEventListener('syn-change', () => (popup.placement = placement.value));
    arrowPlacement.addEventListener('syn-change', () => (popup.arrowPlacement = arrowPlacement.value));
    arrow.addEventListener('syn-change', () => (popup.arrow = arrow.checked));
  <\/script>
</div>`])))},i={render:()=>e(w||(w=t([`<div class="popup-sync">
  <syn-popup placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-select value="width" label="Sync">
    <syn-option value="width">Width</syn-option>
    <syn-option value="height">Height</syn-option>
    <syn-option value="both">Both</syn-option>
    <syn-option value="">None</syn-option>
  </syn-select>
</div>

<style>
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-sync syn-select {
    width: 160px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-sync');
  const popup = container.querySelector('syn-popup');
  const fixed = container.querySelector('syn-switch');
  const sync = container.querySelector('syn-select');

  sync.addEventListener('syn-change', () => (popup.sync = sync.value));
<\/script>`])))},c={render:()=>e(k||(k=t([`<div class="popup-flip">
  <div class="overflow">
    <syn-popup placement="top" flip active id="popup-flip">
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>

  <br />
  <syn-switch checked>Flip</syn-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-flip');
  const popup = container.querySelector('#popup-flip');
  const flip = container.querySelector('.popup-flip syn-switch');

  flip.addEventListener('syn-change', () => (popup.flip = flip.checked));
<\/script>`])))},l={render:()=>e`<div class="popup-flip-fallbacks">
  <div class="overflow">
    <syn-popup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>`},d={render:()=>e(S||(S=t([`<div class="popup-shift">
  <div class="overflow">
    <syn-popup placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>

  <syn-switch checked>Shift</syn-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-shift');
  const popup = container.querySelector('syn-popup');
  const shift = container.querySelector('syn-switch');

  shift.addEventListener('syn-change', () => (popup.shift = shift.checked));
<\/script>`])))},u={render:()=>e(q||(q=t([`<div class="popup-virtual-element">
  <syn-popup placement="right-start">
    <div class="circle"></div>
  </syn-popup>

  <syn-switch>Highlight mouse cursor</syn-switch>
</div>

<script type="module">
  const container = document.querySelector('.popup-virtual-element');
  const popup = container.querySelector('syn-popup');
  const circle = container.querySelector('.circle');
  const enabled = container.querySelector('syn-switch');
  let clientX = 0;
  let clientY = 0;

  // Set the virtual element as a property
  popup.anchor = {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: clientX,
        y: clientY,
        top: clientY,
        left: clientX,
        right: clientX,
        bottom: clientY
      };
    }
  };

  // Only activate the popup when the switch is checked
  enabled.addEventListener('syn-change', () => {
    popup.active = enabled.checked;
  });

  // Listen for the mouse to move
  document.addEventListener('mousemove', handleMouseMove);

  // Update the virtual element as the mouse moves
  function handleMouseMove(event) {
    clientX = event.clientX;
    clientY = event.clientY;

    // Reposition the popup when the virtual anchor moves
    if (popup.active) {
      popup.reposition();
    }
  }
<\/script>

<style>
  /* If you need to set a z-index, set it on the popup part like this */
  .popup-virtual-element syn-popup::part(popup) {
    z-index: 1000;
    pointer-events: none;
  }

  .popup-virtual-element .circle {
    width: 100px;
    height: 100px;
    border: solid 4px var(--syn-color-primary-600);
    border-radius: 50%;
    translate: -50px -50px;
    animation: 1s virtual-cursor infinite;
  }

  @keyframes virtual-cursor {
    0% { scale: 1; }
    50% { scale: 1.1; }
  }
</style>`])))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('popup', 'default')
      }
    }
  },
  render: args => html\`
    <div class="popup-default">
      \${generateTemplate({
    args
  })}
    </div>
    <style>
    .popup-default span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--syn-color-neutral-600);
      margin: 50px;
    }

    .popup-default .box {
      width: 100px;
      height: 50px;
      background: var(--syn-color-primary-600);
      border-radius: var(--syn-border-radius-medium);
    }
    </style>
  \`
} as Story`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-active">
  <syn-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <br />
  <syn-switch checked>Active</syn-switch>
</div>

<style>
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-active');
  const popup = container.querySelector('syn-popup');
  const active = container.querySelector('syn-switch');

  active.addEventListener('syn-change', () => (popup.active = active.checked));
<\/script>\`
}`,...o.parameters?.docs?.source},description:{story:`Popups are inactive and hidden until the active attribute is applied.
Removing the attribute will tear down all positioning logic and listeners,
meaning you can have many idle popups on the page without affecting performance.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<span id="external-anchor"></span>

<syn-popup anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</syn-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ syn-popup .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>\`
}`,...n.parameters?.docs?.source},description:{story:`By default, anchors are slotted into the popup using the anchor slot.
If your anchor needs to live outside of the popup,
you can pass the anchor's id to the anchor attribute.
Alternatively, you can pass an element reference
to the anchor property to achieve the same effect without using an id.`,...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-placement">
  <syn-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-select label="Placement" value="top">
    <syn-option value="top">top</syn-option>
    <syn-option value="top-start">top-start</syn-option>
    <syn-option value="top-end">top-end</syn-option>
    <syn-option value="bottom">bottom</syn-option>
    <syn-option value="bottom-start">bottom-start</syn-option>
    <syn-option value="bottom-end">bottom-end</syn-option>
    <syn-option value="right">right</syn-option>
    <syn-option value="right-start">right-start</syn-option>
    <syn-option value="right-end">right-end</syn-option>
    <syn-option value="left">left</syn-option>
    <syn-option value="left-start">left-start</syn-option>
    <syn-option value="left-end">left-end</syn-option>
  </syn-select>
</div>

<style>
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-placement syn-select {
    max-width: 280px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-placement');
  const popup = container.querySelector('syn-popup');
  const select = container.querySelector('syn-select');

  select.addEventListener('syn-change', () => (popup.placement = select.value));
<\/script>\`
}`,...p.parameters?.docs?.source},description:{story:`Use the placement attribute to tell the popup the preferred placement of the popup.
Note that the actual position will vary to ensure the panel remains in the viewport
if you're using positioning features such as flip and shift.
Since placement is preferred when using flip, you can observe the popup's current placement
when it's active by looking at the data-current-placement attribute.
This attribute will update as the popup flips to find
available space and it will be removed when the popup is deactivated.`,...p.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-distance">
  <syn-popup placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-range min="-50" max="50" step="1" value="0" label="Distance"></syn-range>
</div>

<style>
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-distance syn-range {
    max-width: 260px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-distance');
  const popup = container.querySelector('syn-popup');
  const distance = container.querySelector('syn-range');

  distance.addEventListener('syn-input', () => (popup.distance = distance.value));
<\/script>\`
}`,...r.parameters?.docs?.source},description:{story:`Use the distance attribute to change the distance between the popup and its anchor.
A positive value will move the popup further away and a negative value will move it closer.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-skidding">
  <syn-popup placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-range min="-50" max="50" step="1" value="0" label="Skidding"></syn-range>
</div>

<style>
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-skidding syn-range {
    max-width: 260px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-skidding');
  const popup = container.querySelector('syn-popup');
  const skidding = container.querySelector('syn-range');

  skidding.addEventListener('syn-input', () => (popup.skidding = skidding.value));
<\/script>\`
}`,...s.parameters?.docs?.source},description:{story:`The skidding attribute is similar to distance,
but instead allows you to offset the popup along the anchor's axis.
Both positive and negative values are allowed.`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-arrow">
  <syn-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <div class="popup-arrow-options">
    <syn-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <syn-option value="top">top</syn-option>
      <syn-option value="top-start">top-start</syn-option>
      <syn-option value="top-end">top-end</syn-option>
      <syn-option value="bottom">bottom</syn-option>
      <syn-option value="bottom-start">bottom-start</syn-option>
      <syn-option value="bottom-end">bottom-end</syn-option>
      <syn-option value="right">right</syn-option>
      <syn-option value="right-start">right-start</syn-option>
      <syn-option value="right-end">right-end</syn-option>
      <syn-option value="left">left</syn-option>
      <syn-option value="left-start">left-start</syn-option>
      <syn-option value="left-end">left-end</syn-option>
    </syn-select>

    <syn-select label="Arrow Placement" name="arrow-placement" value="anchor">
      <syn-option value="anchor">anchor</syn-option>
      <syn-option value="start">start</syn-option>
      <syn-option value="end">end</syn-option>
      <syn-option value="center">center</syn-option>
    </syn-select>
  </div>

  <div class="popup-arrow-options">
    <syn-switch name="arrow" checked>Arrow</syn-switch>
  </div>

  <style>
    .popup-arrow syn-popup {
      --arrow-color: var(--syn-color-primary-600);
    }

    .popup-arrow span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--syn-color-neutral-600);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--syn-color-primary-600);
      border-radius: var(--syn-border-radius-medium);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options syn-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script type="module">
    const container = document.querySelector('.popup-arrow');
    const popup = container.querySelector('syn-popup');
    const placement = container.querySelector('[name="placement"]');
    const arrowPlacement = container.querySelector('[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    placement.addEventListener('syn-change', () => (popup.placement = placement.value));
    arrowPlacement.addEventListener('syn-change', () => (popup.arrowPlacement = arrowPlacement.value));
    arrow.addEventListener('syn-change', () => (popup.arrow = arrow.checked));
  <\/script>
</div>\`
}`,...a.parameters?.docs?.source},description:{story:`Add an arrow to your popup with the arrow attribute.
It's usually a good idea to set a distance to make room for the arrow.
To adjust the arrow's color and size,
use the --arrow-color and --arrow-size custom properties, respectively.
You can also target the arrow part to add additional styles such as shadows and borders.
By default, the arrow will be aligned as close to
the center as possible, considering available space and arrow-padding.
You can use the arrow-placement attribute to force
the arrow to align to the start, end, or center of the  instead.`,...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-sync">
  <syn-popup placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-select value="width" label="Sync">
    <syn-option value="width">Width</syn-option>
    <syn-option value="height">Height</syn-option>
    <syn-option value="both">Both</syn-option>
    <syn-option value="">None</syn-option>
  </syn-select>
</div>

<style>
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-sync syn-select {
    width: 160px;
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-sync');
  const popup = container.querySelector('syn-popup');
  const fixed = container.querySelector('syn-switch');
  const sync = container.querySelector('syn-select');

  sync.addEventListener('syn-change', () => (popup.sync = sync.value));
<\/script>\`
}`,...i.parameters?.docs?.source},description:{story:`Use the sync attribute to make the popup the same width or height as the anchor element.
This is useful for controls that need the popup to stay the same width or height as the trigger.`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-flip">
  <div class="overflow">
    <syn-popup placement="top" flip active id="popup-flip">
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>

  <br />
  <syn-switch checked>Flip</syn-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-flip');
  const popup = container.querySelector('#popup-flip');
  const flip = container.querySelector('.popup-flip syn-switch');

  flip.addEventListener('syn-change', () => (popup.flip = flip.checked));
<\/script>\`
}`,...c.parameters?.docs?.source},description:{story:`When the popup doesn't have enough room in its preferred placement,
it can automatically flip to keep it in view.
To enable this, use the flip attribute.
By default, the popup will flip to the opposite placement, but you can configure
preferred fallback placements using flip-fallback-placement and flip-fallback-strategy.
Additional options are available to control the flip behavior's boundary and padding.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-flip-fallbacks">
  <div class="overflow">
    <syn-popup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>\`
}`,...l.parameters?.docs?.source},description:{story:`While using the flip attribute, you can customize the placement
of the popup when the preferred placement doesn't have room.
For this, use flip-fallback-placements and flip-fallback-strategy.
If the preferred placement doesn't have room,
the first suitable placement found in flip-fallback-placement will be used.
The value of this attribute must be a string,
including any number of placements separated by a space, e.g. "right bottom".
If no fallback placement works, the final placement will be determined by flip-fallback-strategy.
This value can be either initial (default),
where the placement reverts to the position in placement,
or best-fit, where the placement is chosen based on available space.
Scroll the container to see how the popup changes it's fallback placement to prevent clipping.`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-shift">
  <div class="overflow">
    <syn-popup placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>

  <syn-switch checked>Shift</syn-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector('.popup-shift');
  const popup = container.querySelector('syn-popup');
  const shift = container.querySelector('syn-switch');

  shift.addEventListener('syn-change', () => (popup.shift = shift.checked));
<\/script>\`
}`,...d.parameters?.docs?.source},description:{story:`When a popup is longer than its anchor, it risks being clipped by an overflowing container.
In this case, use the shift attribute to shift the popup along its axis and back into view.
You can customize the shift behavior using shiftBoundary and shift-padding.
Toggle the switch to see the difference.`,...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="popup-virtual-element">
  <syn-popup placement="right-start">
    <div class="circle"></div>
  </syn-popup>

  <syn-switch>Highlight mouse cursor</syn-switch>
</div>

<script type="module">
  const container = document.querySelector('.popup-virtual-element');
  const popup = container.querySelector('syn-popup');
  const circle = container.querySelector('.circle');
  const enabled = container.querySelector('syn-switch');
  let clientX = 0;
  let clientY = 0;

  // Set the virtual element as a property
  popup.anchor = {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: clientX,
        y: clientY,
        top: clientY,
        left: clientX,
        right: clientX,
        bottom: clientY
      };
    }
  };

  // Only activate the popup when the switch is checked
  enabled.addEventListener('syn-change', () => {
    popup.active = enabled.checked;
  });

  // Listen for the mouse to move
  document.addEventListener('mousemove', handleMouseMove);

  // Update the virtual element as the mouse moves
  function handleMouseMove(event) {
    clientX = event.clientX;
    clientY = event.clientY;

    // Reposition the popup when the virtual anchor moves
    if (popup.active) {
      popup.reposition();
    }
  }
<\/script>

<style>
  /* If you need to set a z-index, set it on the popup part like this */
  .popup-virtual-element syn-popup::part(popup) {
    z-index: 1000;
    pointer-events: none;
  }

  .popup-virtual-element .circle {
    width: 100px;
    height: 100px;
    border: solid 4px var(--syn-color-primary-600);
    border-radius: 50%;
    translate: -50px -50px;
    animation: 1s virtual-cursor infinite;
  }

  @keyframes virtual-cursor {
    0% { scale: 1; }
    50% { scale: 1.1; }
  }
</style>\`
}`,...u.parameters?.docs?.source},description:{story:`In most cases, popups are anchored to an actual element.
Sometimes, it can be useful to anchor them to a non-element.
To do this, you can pass a VirtualElement to the anchor property.
A virtual element must contain a function called getBoundingClientRect() that returns
a object as shown below.
This example anchors a popup to the mouse cursor using a virtual element.
As such, a mouse is required to properly view it.`,...u.parameters?.docs?.description}}};const he=["Default","Activating","ExternalAnchors","Placement","Distance","Skidding","Arrows","SyncingWithTheAnchorsDimensions","Flip","FlipFallbacks","Shift","VirtualElements"];export{o as Activating,a as Arrows,h as Default,r as Distance,n as ExternalAnchors,c as Flip,l as FlipFallbacks,p as Placement,d as Shift,s as Skidding,i as SyncingWithTheAnchorsDimensions,u as VirtualElements,he as __namedExportsOrder,ye as default};
