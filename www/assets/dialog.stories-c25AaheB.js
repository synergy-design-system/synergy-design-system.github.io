import{j as T,x as s,g as F,o as u}from"./iframe-0ZfPuspu.js";import{g as m,b as p,a as y,s as g}from"./animation-registry-l4L8bmT6.js";import{b as P}from"./closeActiveElement-Bnbpk8Kw.js";import{e as H}from"./class-map-CU05TH1Z.js";import{H as W}from"./slot-9EVoRGQc.js";import{o as q}from"./if-defined-BewPDT-f.js";import{L as I}from"./localize-Dh03wnLC.js";import{l as $,u as A}from"./scroll-DgKSCJoS.js";import{S as M,c as B,n as L}from"./synergy-element-Cv9Y-2ND.js";import{a as x}from"./query-DAIS6qJ0.js";import{w as C}from"./event-B0iVuGLD.js";import{w as U}from"./watch-CEsCE2EF.js";import{M as K}from"./modal-Dlsa26F3.js";import{S as R}from"./icon-button.component-DtPzs9j5.js";import"./button-CMWYjOnu.js";import"./icon-button-BUB2fq-X.js";import"./input-BKWY5dYk.js";import{g as n,s as G,a as J,c as Q}from"./component-DggE0M3h.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DihgwUfS.js";import"./tabbable-D_Tgg1nc.js";import"./icon.component-CY5M_f5h.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./form-d9hCJUdr.js";import"./spinner.component-CMLyk-NQ.js";import"./default-value-BY13AlMq.js";import"./live-BuhgsuPZ.js";import"./form-control.custom.styles-BRzdLhCy.js";import"./divider.component-Da4vtYb6.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const V=T`
	/* stylelint-disable */
  :host {
    --width: 31rem;
    --header-spacing: var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--syn-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--syn-spacing-2x-large));
    max-height: calc(100% - var(--syn-spacing-2x-large));
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    box-shadow: var(--syn-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--syn-font-size-large);
    line-height: var(--syn-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--syn-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(syn-button:not(:first-of-type)) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--syn-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`,X=T`
  :host {
    /**
     * Used as the default padding for the dialog title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);
  }

  .dialog__panel {
    border: var(--syn-spacing-4x-small) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-large);
  }

  .dialog__header-actions {
    align-items: flex-start;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  /**
   * We need this to make sure we are big enough as defined in the layout
   * When omitting this statement, we will get rounding problems via line-height
   */
  .dialog__title,
  .dialog__header-actions {
    min-height: 88px;
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }

  .dialog__title {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
  }
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,l=(t,e,a,o)=>{for(var i=o>1?void 0:o?Z(e,a):e,S=t.length-1,k;S>=0;S--)(k=t[S])&&(i=(o?k(e,a,i):k(i))||i);return o&&i&&Y(e,a,i),i};class r extends M{constructor(){super(...arguments),this.hasSlotController=new W(this,"footer"),this.localize=new I(this),this.modal=new K(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[B,V,X]}static{this.dependencies={"syn-icon-button":R}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),$(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),A(this),this.removeOpenListeners()}requestClose(e){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=m(this,"dialog.denyClose",{dir:this.localize.dir()});p(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),$(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([y(this.dialog),y(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const a=m(this,"dialog.show",{dir:this.localize.dir()}),o=m(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([p(this.panel,a.keyframes,a.options),p(this.overlay,o.keyframes,o.options)]),this.emit("syn-after-show")}else{P(this),this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([y(this.dialog),y(this.overlay)]);const e=m(this,"dialog.hide",{dir:this.localize.dir()}),a=m(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([p(this.overlay,a.keyframes,a.options).then(()=>{this.overlay.hidden=!0}),p(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,A(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,C(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,C(this,"syn-after-hide")}render(){return s`
      <div
        part="base"
        class=${H({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${q(this.noHeader?this.label:void 0)}
          aria-labelledby=${q(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":s`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></syn-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}}l([x(".dialog")],r.prototype,"dialog",2);l([x(".dialog__panel")],r.prototype,"panel",2);l([x(".dialog__overlay")],r.prototype,"overlay",2);l([L({type:Boolean,reflect:!0})],r.prototype,"open",2);l([L({reflect:!0})],r.prototype,"label",2);l([L({attribute:"no-header",type:Boolean,reflect:!0})],r.prototype,"noHeader",2);l([U("open",{waitUntilFirstUpdate:!0})],r.prototype,"handleOpenChange",1);g("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});g("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});g("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});g("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});g("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});r.define("syn-dialog");var O=Object.freeze,N=Object.defineProperty,D=(t,e)=>O(N(t,"raw",{value:O(t.slice())})),E,z,j;const{args:ee,argTypes:te}=G("syn-dialog"),{overrideArgs:oe}=J("syn-dialog"),{generateTemplate:ae}=Q("syn-dialog"),d=t=>`
  <syn-button class="${t}" variant="filled" slot="footer">Close</syn-button>
  <script>
    [...document.querySelectorAll('.${t}')].forEach(elm => {
      elm.addEventListener('click', (e) => {
        const dialog = e.target.closest('syn-dialog');
        dialog.label += ' - Clicked';
        dialog.hide();
        dialog.modal.deactivateExternal();
      });  
    });
  <\/script>
`,c=t=>s(E||(E=D([`
  <syn-button class="`,`">Open Dialog</syn-button>
  <script type="module">
    const createOpener = (opener) => {
      // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
      // Remove the initial trap and make sure to do the same when recreating the story.
      const loadedDialog = opener.parentElement.querySelector('syn-dialog');
      loadedDialog.modal.activateExternal();

      opener.addEventListener('click', (e) => {
        const currentDialog = e.target.parentElement.querySelector('syn-dialog');
        currentDialog.show();
        currentDialog.modal.activateExternal();
      });
    };

    [...document.querySelectorAll('.`,`')].forEach(i => { createOpener(i) })
  <\/script>
`])),t,t),Fe={args:oe([{name:"open",type:"attribute",value:!0},{name:"label",type:"attribute",value:"Dialog"},{name:"default",type:"slot",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{name:"footer",type:"slot",value:d("default-close-icon")}],ee),argTypes:te,component:"syn-dialog",parameters:{chromatic:{disableSnapshot:!1},design:F("14953-11300"),docs:{description:{component:n("dialog","default")},story:{height:"400px"}}},tags:["Structure"],title:"Components/syn-dialog"},h={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:n("dialog","default")}}},render:t=>s`
    ${ae({args:t})}
    ${c("dialog-default-story-opener")}
  `},v={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","custom-width")}}},render:()=>s`
    <syn-dialog open label="Dialog" style="--width: 50vw;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      ${u(d("dialog-custom-width"))}
    </syn-dialog>
    ${c("dialog-custom-width-story-opener")}
  `},f={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","scrolling")}}},render:()=>s`
    <syn-dialog open label="Dialog">
      <div>
        <p>Scroll down and give it a try! 👇</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      ${u(d("dialog-scrolling"))}
    </syn-dialog>
    ${c("dialog-scrolling-story-opener")}
  `},b={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","header-actions")}}},render:()=>s(z||(z=D([`
    <syn-dialog open label="Dialog">
      <syn-icon-button class="new-window" slot="header-actions" name="open_in_new" label="Open in new Tab"></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,`
    </syn-dialog>
    <script type="module">
      document.querySelector('.new-window').addEventListener('click', () => window.open(location.href));
    <\/script>
    `,`
  `])),u(d("dialog-header-actions")),c("dialog-header-actions-story-opener"))},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","prevent-closing")}}},render:()=>s(j||(j=D([`
    <syn-dialog open label="Dialog" class="dialog-deny-close">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,`
    </syn-dialog>
    <script type="module">
      const dialog = document.querySelector('.dialog-deny-close');
      dialog.addEventListener('syn-request-close', (event) => {
        if (event.detail.source === 'overlay') {
          event.preventDefault();
        }
      });
    <\/script>
    `,`
  `])),u(d("dialog-deny-close-actions")),c("dialog-deny-close-story-opener"))},_={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","focus")}}},play:({canvasElement:t})=>{const e=t.querySelector("syn-dialog");e&&(e.open=!0)},render:()=>s`
    <syn-dialog label="Dialog">
      <syn-input autofocus placeholder="I will have focus when the dialog is opened"></syn-input>
      ${u(d("dialog-initial-focus-actions"))}
    </syn-dialog>
    ${c("dialog-initial-focus-story-opener")}
  `};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dialog', 'default')
      }
    }
  },
  render: args => html\`
    \${generateTemplate({
    args
  })}
    \${createOpener('dialog-default-story-opener')}
  \`
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dialog', 'custom-width')
      }
    }
  },
  render: () => html\`
    <syn-dialog open label="Dialog" style="--width: 50vw;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      \${unsafeHTML(createFooter('dialog-custom-width'))}
    </syn-dialog>
    \${createOpener('dialog-custom-width-story-opener')}
  \`
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dialog', 'scrolling')
      }
    }
  },
  render: () => html\`
    <syn-dialog open label="Dialog">
      <div>
        <p>Scroll down and give it a try! 👇</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      \${unsafeHTML(createFooter('dialog-scrolling'))}
    </syn-dialog>
    \${createOpener('dialog-scrolling-story-opener')}
  \`
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dialog', 'header-actions')
      }
    }
  },
  render: () => html\`
    <syn-dialog open label="Dialog">
      <syn-icon-button class="new-window" slot="header-actions" name="open_in_new" label="Open in new Tab"></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      \${unsafeHTML(createFooter('dialog-header-actions'))}
    </syn-dialog>
    <script type="module">
      document.querySelector('.new-window').addEventListener('click', () => window.open(location.href));
    <\/script>
    \${createOpener('dialog-header-actions-story-opener')}
  \`
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dialog', 'prevent-closing')
      }
    }
  },
  render: () => html\`
    <syn-dialog open label="Dialog" class="dialog-deny-close">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      \${unsafeHTML(createFooter('dialog-deny-close-actions'))}
    </syn-dialog>
    <script type="module">
      const dialog = document.querySelector('.dialog-deny-close');
      dialog.addEventListener('syn-request-close', (event) => {
        if (event.detail.source === 'overlay') {
          event.preventDefault();
        }
      });
    <\/script>
    \${createOpener('dialog-deny-close-story-opener')}
  \`
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('dialog', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const dialog = canvasElement.querySelector('syn-dialog');
    if (dialog) {
      dialog.open = true;
    }
  },
  render: () => html\`
    <syn-dialog label="Dialog">
      <syn-input autofocus placeholder="I will have focus when the dialog is opened"></syn-input>
      \${unsafeHTML(createFooter('dialog-initial-focus-actions'))}
    </syn-dialog>
    \${createOpener('dialog-initial-focus-story-opener')}
  \`
}`,..._.parameters?.docs?.source}}};const Pe=["Default","CustomWidth","Scrolling","HeaderActions","PreventingTheDialogFromClosing","CustomizingInitialFocus"];export{v as CustomWidth,_ as CustomizingInitialFocus,h as Default,b as HeaderActions,w as PreventingTheDialogFromClosing,f as Scrolling,Pe as __namedExportsOrder,Fe as default};
