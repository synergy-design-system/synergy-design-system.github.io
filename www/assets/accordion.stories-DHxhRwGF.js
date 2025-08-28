import{h as j,x as s,g as D}from"./iframe-DkuhNNKt.js";import{c as q,n as b,S as L}from"./synergy-element-DwyHbzMO.js";import{o as E}from"./query-assigned-elements-QtOlz7Yz.js";import{e as z}from"./class-map-ObrBcWXB.js";import{w as x}from"./watch-CEsCE2EF.js";import{e as C}from"./decorator-DANECR0-.js";import"./details-CtPtLLEX.js";import{g as r,s as w,a as _,c as O,b as P}from"./component-BcSeKVdu.js";import{p as F}from"./PaddingDecorator-Cb_eOpPT.js";import"./preload-helper-Ct5FWWRu.js";import"./query-DAIS6qJ0.js";import"./functions-CDi3doZH.js";import"./animation-registry-l4L8bmT6.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./icon.component-0vAZ8ena.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const T=j`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`;var $=Object.defineProperty,I=Object.getOwnPropertyDescriptor,n=(e,o,g,u)=>{for(var t=u>1?void 0:u?I(o,g):o,v=e.length-1,h;v>=0;v--)(h=e[v])&&(t=(u?h(o,g,t):h(t))||t);return u&&t&&$(o,g,t),t};let a=class extends L{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(o=>{o!==e.target&&o.parentNode===e.target.parentNode&&o.removeAttribute("open")})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return s`
      <div 
        part="base"
        class=${z({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};a.styles=[q,T];n([E({selector:"syn-details"})],a.prototype,"detailsInDefaultSlot",2);n([b({attribute:"close-others",type:Boolean})],a.prototype,"closeOthers",2);n([b({reflect:!0,type:Boolean})],a.prototype,"contained",2);n([b({reflect:!0})],a.prototype,"size",2);n([x("size",{waitUntilFirstUpdate:!0})],a.prototype,"handleSizeChange",1);n([x("contained",{waitUntilFirstUpdate:!0})],a.prototype,"handleContainedChange",1);a=n([C("SynAccordion")],a);a.define("syn-accordion");var f=Object.freeze,U=Object.defineProperty,G=(e,o)=>f(U(e,"raw",{value:f(e.slice())})),S;const{args:k,argTypes:B}=w("syn-accordion"),{overrideArgs:N}=_("syn-accordion"),{generateTemplate:R}=O("syn-accordion"),me={args:N([{name:"default",type:"slot",value:`
        <syn-details summary="First" open>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details summary="Second">
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details summary="Third">
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
      `}],k),argTypes:B,component:"syn-accordion",parameters:{design:D("16967-26428"),docs:{description:{component:r("accordion","default")}}},tags:["Structure"],title:"Components/syn-accordion"},i={parameters:{controls:{disable:!1},docs:{description:{story:r("accordion","default")}}},render:e=>R({args:e})},l={parameters:{docs:{description:{story:r("accordion","contained")}}},render:()=>s`
    <syn-accordion contained>
      <syn-details open>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `},d={parameters:{docs:{description:{story:r("accordion","grouping")}}},render:()=>s`
    <syn-accordion close-others>
      <syn-details summary="First" open>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Second">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Third">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `},y={decorators:[F()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("accordion","focus")}}},play:({canvasElement:e})=>{const o=e.querySelector("syn-details");o&&o.shadowRoot.querySelector("summary").focus()},render:()=>s`
    <syn-accordion>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `},A=e=>({parameters:{docs:{description:{story:r("accordion","disabled")}}},render:()=>s`
    <syn-accordion .contained=${e}>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element" disabled>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `}),m=A(!1),H=A(!0),c={parameters:{docs:{description:{story:r("accordion","size")}}},render:()=>s(S||(S=G([`
    `,`

    <style>
      .accordion-size:not(:first-of-type) {
        margin-top: var(--syn-spacing-2x-large);
      }
    </style>

    <script type="module">
      document.querySelectorAll('.accordion-size form').forEach(form => {
        form.addEventListener('submit', e => {
          e.preventDefault();
          e.stopPropagation();
        });
      });
    <\/script>
  `])),["medium","large"].map(e=>s`
      <syn-accordion class="accordion-size" size="${e}">
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
      </syn-accordion>
    `))},p=P({Default:i,Contained:l,GroupingDetails:d,Disabled:m,DisabledAndContained:H,Sizes:c},1150);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('accordion', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('accordion', 'contained')
      }
    }
  },
  render: () => html\`
    <syn-accordion contained>
      <syn-details open>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  \`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('accordion', 'grouping')
      }
    }
  },
  render: () => html\`
    <syn-accordion close-others>
      <syn-details summary="First" open>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Second">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Third">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  \`
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('accordion', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const details = canvasElement.querySelector('syn-details');
    if (details) {
      details.shadowRoot!.querySelector('summary')!.focus();
    }
  },
  render: () => html\`
    <syn-accordion>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  \`
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"createDisabledStory(false)",...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('accordion', 'size')
      }
    }
  },
  render: () => html\`
    \${['medium', 'large'].map(size => html\`
      <syn-accordion class="accordion-size" size="\${size as 'medium' | 'large'}">
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold); color: var(--syn-typography-color-text);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
      </syn-accordion>
    \`)}

    <style>
      .accordion-size:not(:first-of-type) {
        margin-top: var(--syn-spacing-2x-large);
      }
    </style>

    <script type="module">
      document.querySelectorAll('.accordion-size form').forEach(form => {
        form.addEventListener('submit', e => {
          e.preventDefault();
          e.stopPropagation();
        });
      });
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Contained,
  GroupingDetails,
  Disabled,
  DisabledAndContained,
  Sizes
}, 1150)`,...p.parameters?.docs?.source}}};const ce=["Default","Contained","GroupingDetails","Focus","Disabled","Sizes","Screenshot"];export{l as Contained,i as Default,m as Disabled,y as Focus,d as GroupingDetails,p as Screenshot,c as Sizes,ce as __namedExportsOrder,me as default};
