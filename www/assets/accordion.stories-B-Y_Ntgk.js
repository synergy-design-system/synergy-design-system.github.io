import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r,d as ee,f as i,g as a,u as o}from"./iframe-fXCqWTG3.js";import{n as s,t as c}from"./class-map-FfzGmM48.js";import{a as l,c as u,i as d,n as f,o as p,p as m,r as h,s as g,t as _}from"./synergy-element-CyrfZ-S8.js";import{n as v,t as y}from"./watch-OXZPXmne.js";import{n as b,t as x}from"./decorator-CJ_bAnlW.js";import{t as S}from"./details-FJNc_lgd.js";import{a as C,i as w,n as T,o as te,r as ne,t as E}from"./component-CsQUi1XQ.js";import{n as D,t as O}from"./PaddingDecorator-DdlyaNeD.js";import{n as k,t as A}from"./taggedTemplateLiteral-BuD1d7yP.js";var j,M=e((()=>{t(),j=r`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`})),N,P,F=e((()=>{t(),g(),c(),f(),y(),p(),M(),b(),d(),N=class extends _{constructor(...e){super(...e),this.closeOthers=!1,this.contained=!1,this.size=`medium`,this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(t=>{t!==e.target&&t.parentNode===e.target.parentNode&&t.removeAttribute(`open`)})}}static{this.styles=[l,j]}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute(`size`,this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener(`syn-show`,this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`syn-show`,this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return n`
      <div 
        part="base"
        class=${s({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},h([u({selector:`syn-details`})],N.prototype,`detailsInDefaultSlot`,void 0),h([m({attribute:`close-others`,type:Boolean})],N.prototype,`closeOthers`,void 0),h([m({reflect:!0,type:Boolean})],N.prototype,`contained`,void 0),h([m({reflect:!0})],N.prototype,`size`,void 0),h([v(`size`,{waitUntilFirstUpdate:!0})],N.prototype,`handleSizeChange`,null),h([v(`contained`,{waitUntilFirstUpdate:!0})],N.prototype,`handleContainedChange`,null),N=h([x(`SynAccordion`)],N),P=N})),I=e((()=>{F(),F(),P.define(`syn-accordion`)})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{t(),I(),S(),ne(),ee(),O(),a(),k(),{args:R,argTypes:z}=w(`syn-accordion`),{overrideArgs:B}=C(`syn-accordion`),{generateTemplate:V}=te(`syn-accordion`),H={args:B([{name:`default`,type:`slot`,value:`
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
      `}],R),argTypes:z,component:`syn-accordion`,parameters:{chromatic:{modes:i},design:o(`41094-279501`),docs:{description:{component:T(`accordion`,`default`)}}},tags:[`Structure`],title:`Components/syn-accordion`},U={parameters:{controls:{disable:!1},docs:{description:{story:T(`accordion`,`default`)}}},render:e=>V({args:e})},W={parameters:{docs:{description:{story:T(`accordion`,`contained`)}}},render:()=>n`
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
  `},G={parameters:{docs:{description:{story:T(`accordion`,`grouping`)}}},render:()=>n`
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
  `},K={decorators:[D()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:T(`accordion`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-details`);t&&t.shadowRoot.querySelector(`summary`).focus()},render:()=>n`
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
  `},q=e=>({parameters:{docs:{description:{story:T(`accordion`,`disabled`)}}},render:()=>n`
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
  `}),J=q(!1),Y=q(!0),X={parameters:{docs:{description:{story:T(`accordion`,`size`)}}},render:()=>n(L||=A([`
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
  `]),[`small`,`medium`,`large`].map(e=>n`
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
    `))},Z=E({Default:U,Contained:W,GroupingDetails:G,Disabled:J,DisabledAndContained:Y,Sizes:X},1150),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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