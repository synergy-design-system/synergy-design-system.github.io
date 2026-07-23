import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-BFZR08Kk.js";import{c as a,h as o,t as s}from"./lit-BfcklOOD.js";import{a as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,y as g}from"./synergy-element-CtR5Ldt1.js";import{n as _,t as v}from"./class-map-D8k2AIVc.js";import{n as y,t as b}from"./watch-RA3ULoLi.js";import{n as x,t as S}from"./decorator-B3p9Y8B9.js";import{a as C,i as w,n as T,o as E,r as ee,t as te}from"./component-Cjcm-1Oq.js";import{n as ne,t as D}from"./taggedTemplateLiteral-C9cDEsPD.js";import{t as O}from"./details-BayOrY2q.js";import{n as k,t as A}from"./PaddingDecorator-B8dy7wkX.js";var j,M=e((()=>{s(),j=o`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`})),N,P,F=e((()=>{s(),m(),v(),d(),b(),f(),M(),x(),l(),N=class extends h{constructor(...e){super(...e),this.closeOthers=!1,this.contained=!1,this.size=`medium`,this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(t=>{t!==e.target&&t.parentNode===e.target.parentNode&&t.removeAttribute(`open`)})}}static{this.styles=[c,j]}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener(`syn-show`,this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`syn-show`,this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return a`
      <div 
        part="base"
        class=${_({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},p([u({selector:`syn-details`})],N.prototype,`detailsInDefaultSlot`,void 0),p([g({attribute:`close-others`,type:Boolean})],N.prototype,`closeOthers`,void 0),p([g({reflect:!0,type:Boolean})],N.prototype,`contained`,void 0),p([g({reflect:!0})],N.prototype,`size`,void 0),p([y(`size`,{waitUntilFirstUpdate:!0})],N.prototype,`handleSizeChange`,null),p([y(`contained`,{waitUntilFirstUpdate:!0})],N.prototype,`handleContainedChange`,null),N=p([S(`SynAccordion`)],N),P=N})),I=e((()=>{F(),F(),P.define(`syn-accordion`)})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{s(),I(),O(),ee(),r(),A(),n(),ne(),{args:R,argTypes:z}=w(`syn-accordion`),{overrideArgs:B}=C(`syn-accordion`),{generateTemplate:V}=E(`syn-accordion`),H={args:B([{name:`default`,type:`slot`,value:`
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
      `}],R),argTypes:z,component:`syn-accordion`,parameters:{chromatic:{modes:i},design:t(`41094-279501`),docs:{description:{component:T(`accordion`,`default`)}}},tags:[`Structure`],title:`Components/syn-accordion`},U={parameters:{controls:{disable:!1},docs:{description:{story:T(`accordion`,`default`)}}},render:e=>V({args:e})},W={parameters:{docs:{description:{story:T(`accordion`,`contained`)}}},render:()=>a`
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
  `},G={parameters:{docs:{description:{story:T(`accordion`,`grouping`)}}},render:()=>a`
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
  `},K={decorators:[k()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:T(`accordion`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-details`);t&&t.shadowRoot.querySelector(`summary`).focus()},render:()=>a`
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
  `},q=e=>({parameters:{docs:{description:{story:T(`accordion`,`disabled`)}}},render:()=>a`
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
  `}),J=q(!1),Y=q(!0),X={parameters:{docs:{description:{story:T(`accordion`,`size`)}}},render:()=>a(L||=D([`
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
  `]),[`small`,`medium`,`large`].map(e=>a`
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
    `))},Z=te({Default:U,Contained:W,GroupingDetails:G,Disabled:J,DisabledAndContained:Y,Sizes:X},1150),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createDisabledStory(false)`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('accordion', 'size')
      }
    }
  },
  render: () => html\`
    \${['small', 'medium', 'large'].map(size => html\`
      <syn-accordion class="accordion-size" size="\${size as 'small' | 'medium' | 'large'}">
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Contained,
  GroupingDetails,
  Disabled,
  DisabledAndContained,
  Sizes
}, 1150)`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Contained`,`GroupingDetails`,`Focus`,`Disabled`,`Sizes`,`Screenshot`]}));$();export{W as Contained,U as Default,J as Disabled,K as Focus,G as GroupingDetails,Z as Screenshot,X as Sizes,Q as __namedExportsOrder,H as default,$ as t};