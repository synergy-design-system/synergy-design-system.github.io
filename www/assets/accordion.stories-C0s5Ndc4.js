import{j as x,x as t,g as D,C as q}from"./iframe-BbG24dca.js";import{c as L,n as h,S as E}from"./synergy-element-mvvDTlej.js";import{o as z}from"./query-assigned-elements-BQ-t-koE.js";import{e as C}from"./class-map-C4GF1kIH.js";import{w as A}from"./watch-CEsCE2EF.js";import{e as _}from"./decorator-DeP7ND_N.js";import"./details-BeNkb1K9.js";import{g as r,s as w,a as O,c as P,b as F}from"./component-DQoGmEAi.js";import{p as T}from"./PaddingDecorator-MkdBYu06.js";import"./preload-helper-Ct5FWWRu.js";import"./query-DAIS6qJ0.js";import"./functions-DkH8wE0_.js";import"./animation-registry-l4L8bmT6.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./icon.component-DiWeev-w.js";import"./index-CQ0aEGxp.js";import"./_docs-DmU5sf6r.js";const $=x`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`;var I=Object.defineProperty,U=Object.getOwnPropertyDescriptor,n=(e,a,b,c)=>{for(var s=c>1?void 0:c?U(a,b):a,g=e.length-1,v;g>=0;g--)(v=e[g])&&(s=(c?v(a,b,s):v(s))||s);return c&&s&&I(a,b,s),s};let o=class extends E{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(a=>{a!==e.target&&a.parentNode===e.target.parentNode&&a.removeAttribute("open")})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return t`
      <div 
        part="base"
        class=${C({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};o.styles=[L,$];n([z({selector:"syn-details"})],o.prototype,"detailsInDefaultSlot",2);n([h({attribute:"close-others",type:Boolean})],o.prototype,"closeOthers",2);n([h({reflect:!0,type:Boolean})],o.prototype,"contained",2);n([h({reflect:!0})],o.prototype,"size",2);n([A("size",{waitUntilFirstUpdate:!0})],o.prototype,"handleSizeChange",1);n([A("contained",{waitUntilFirstUpdate:!0})],o.prototype,"handleContainedChange",1);o=n([_("SynAccordion")],o);o.define("syn-accordion");var f=Object.freeze,G=Object.defineProperty,k=(e,a)=>f(G(e,"raw",{value:f(e.slice())})),S;const{args:B,argTypes:K}=w("syn-accordion"),{overrideArgs:N}=O("syn-accordion"),{generateTemplate:R}=P("syn-accordion"),ue={args:N([{name:"default",type:"slot",value:`
        <syn-details summary="First" open>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details summary="Second">
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details summary="Third">
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
      `}],B),argTypes:K,component:"syn-accordion",parameters:{chromatic:{modes:q},design:D("16967-26428"),docs:{description:{component:r("accordion","default")}}},tags:["Structure","SICK2018","SICK2025"],title:"Components/syn-accordion"},i={parameters:{controls:{disable:!1},docs:{description:{story:r("accordion","default")}}},render:e=>R({args:e})},d={parameters:{docs:{description:{story:r("accordion","contained")}}},render:()=>t`
    <syn-accordion contained>
      <syn-details open>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `},l={parameters:{docs:{description:{story:r("accordion","grouping")}}},render:()=>t`
    <syn-accordion close-others>
      <syn-details summary="First" open>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Second">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Third">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `},y={decorators:[T()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:r("accordion","focus")}}},play:({canvasElement:e})=>{const a=e.querySelector("syn-details");a&&a.shadowRoot.querySelector("summary").focus()},render:()=>t`
    <syn-accordion>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `},j=e=>({parameters:{docs:{description:{story:r("accordion","disabled")}}},render:()=>t`
    <syn-accordion .contained=${e}>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element" disabled>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  `}),m=j(!1),H=j(!0),u={parameters:{docs:{description:{story:r("accordion","size")}}},render:()=>t(S||(S=k([`
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
  `])),["medium","large"].map(e=>t`
      <syn-accordion class="accordion-size" size="${e}">
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
      </syn-accordion>
    `))},p=F({Default:i,Contained:d,GroupingDetails:l,Disabled:m,DisabledAndContained:H,Sizes:u},1150);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details>
        <span slot="summary">Accordion Element</span>
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  \`
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Second">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Third">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  \`
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
      <syn-details summary="Accordion Element">
        <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </syn-details>
    </syn-accordion>
  \`
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"createDisabledStory(false)",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </syn-details>
        <syn-details>
          <span slot="summary">Accordion Element</span>
          <h3 style="margin: 0 0 var(--syn-spacing-x-small); font: var(--syn-body-small-bold);">Subheadline</h3>
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Contained,
  GroupingDetails,
  Disabled,
  DisabledAndContained,
  Sizes
}, 1150)`,...p.parameters?.docs?.source}}};const ce=["Default","Contained","GroupingDetails","Focus","Disabled","Sizes","Screenshot"];export{d as Contained,i as Default,m as Disabled,y as Focus,l as GroupingDetails,p as Screenshot,u as Sizes,ce as __namedExportsOrder,ue as default};
