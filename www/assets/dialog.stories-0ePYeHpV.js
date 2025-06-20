import{g as P,x as r,o as u}from"./iframe-GSRepqjd.js";import{g as m,b as p,a as y,s as g}from"./animation-registry-l4L8bmT6.js";import{b as H}from"./closeActiveElement-Bnbpk8Kw.js";import{a as W}from"./class-map-QQ7HVnPG.js";import{H as I}from"./slot-9EVoRGQc.js";import{i as F,x as $,n as L}from"./property-ImbD-3qY.js";import{o as q}from"./if-defined-CDNCanKK.js";import{L as M}from"./localize-CatY2peN.js";import{l as A,u as C}from"./scroll-DgKSCJoS.js";import{a as x}from"./query-DAIS6qJ0.js";import{w as O}from"./event-B0iVuGLD.js";import{w as B}from"./watch-CEsCE2EF.js";import{S as U,c as K}from"./component.styles-DXWA7L2q.js";import{M as R}from"./modal-Dlsa26F3.js";import{S as G}from"./icon-button.component-Dzxtd5Sk.js";import"./button-CwZJTvX8.js";import"./icon-button-GSYtI5Q6.js";import"./input-BOqSKrKg.js";import{g as n,s as J,a as Q,c as V}from"./component-sz2YSCF4.js";import"./index-DihgwUfS.js";import"./tabbable-D_Tgg1nc.js";import"./static-BkNWbPkN.js";import"./directive-helpers-CvZEagFv.js";import"./icon.component-B3J6d3UF.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./form-d9hCJUdr.js";import"./spinner.component-pJEN2kXr.js";import"./default-value-CoJKpiHX.js";import"./live-3_FXf7tU.js";import"./form-control.custom.styles-CXpzbCE1.js";import"./divider.component-DbTnzFXm.js";import"./async-directive-WyEE_4Ii.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const X=F`
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
`,Y=F`
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
`;var Z=Object.defineProperty,N=Object.getOwnPropertyDescriptor,l=(t,e,a,o)=>{for(var s=o>1?void 0:o?N(e,a):e,S=t.length-1,k;S>=0;S--)(k=t[S])&&(s=(o?k(e,a,s):k(s))||s);return o&&s&&Z(e,a,s),s};class i extends U{constructor(){super(...arguments),this.hasSlotController=new I(this,"footer"),this.localize=new M(this),this.modal=new R(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[K,X,Y]}static{this.dependencies={"syn-icon-button":G}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),A(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),C(this),this.removeOpenListeners()}requestClose(e){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=m(this,"dialog.denyClose",{dir:this.localize.dir()});p(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),A(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([y(this.dialog),y(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const a=m(this,"dialog.show",{dir:this.localize.dir()}),o=m(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([p(this.panel,a.keyframes,a.options),p(this.overlay,o.keyframes,o.options)]),this.emit("syn-after-show")}else{H(this),this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([y(this.dialog),y(this.overlay)]);const e=m(this,"dialog.hide",{dir:this.localize.dir()}),a=m(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([p(this.overlay,a.keyframes,a.options).then(()=>{this.overlay.hidden=!0}),p(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,C(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,O(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,O(this,"syn-after-hide")}render(){return $`
      <div
        part="base"
        class=${W({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":$`
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
    `}}l([x(".dialog")],i.prototype,"dialog",2);l([x(".dialog__panel")],i.prototype,"panel",2);l([x(".dialog__overlay")],i.prototype,"overlay",2);l([L({type:Boolean,reflect:!0})],i.prototype,"open",2);l([L({reflect:!0})],i.prototype,"label",2);l([L({attribute:"no-header",type:Boolean,reflect:!0})],i.prototype,"noHeader",2);l([B("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1);g("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});g("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});g("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});g("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});g("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});i.define("syn-dialog");var z=Object.freeze,ee=Object.defineProperty,D=(t,e)=>z(ee(t,"raw",{value:z(t.slice())})),E,j,T;const{args:te,argTypes:oe}=J("syn-dialog"),{overrideArgs:ae}=Q("syn-dialog"),{generateTemplate:se}=V("syn-dialog"),d=t=>`
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
`,c=t=>r(E||(E=D([`
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
`])),t,t),Ie={args:ae([{name:"open",type:"attribute",value:!0},{name:"label",type:"attribute",value:"Dialog"},{name:"default",type:"slot",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{name:"footer",type:"slot",value:d("default-close-icon")}],te),argTypes:oe,component:"syn-dialog",parameters:{chromatic:{disableSnapshot:!1},design:P("14953-11300"),docs:{description:{component:n("dialog","default")},story:{height:"400px"}}},tags:["Structure"],title:"Components/syn-dialog"},h={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:n("dialog","default")}}},render:t=>r`
    ${se({args:t})}
    ${c("dialog-default-story-opener")}
  `},f={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","custom-width")}}},render:()=>r`
    <syn-dialog open label="Dialog" style="--width: 50vw;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      ${u(d("dialog-custom-width"))}
    </syn-dialog>
    ${c("dialog-custom-width-story-opener")}
  `},v={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","scrolling")}}},render:()=>r`
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
  `},b={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","header-actions")}}},render:()=>r(j||(j=D([`
    <syn-dialog open label="Dialog">
      <syn-icon-button class="new-window" slot="header-actions" name="open_in_new" label="Open in new Tab"></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,`
    </syn-dialog>
    <script type="module">
      document.querySelector('.new-window').addEventListener('click', () => window.open(location.href));
    <\/script>
    `,`
  `])),u(d("dialog-header-actions")),c("dialog-header-actions-story-opener"))},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","prevent-closing")}}},render:()=>r(T||(T=D([`
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
  `])),u(d("dialog-deny-close-actions")),c("dialog-deny-close-story-opener"))},_={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("dialog","focus")}}},render:()=>r`
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  render: () => html\`
    <syn-dialog label="Dialog">
      <syn-input autofocus placeholder="I will have focus when the dialog is opened"></syn-input>
      \${unsafeHTML(createFooter('dialog-initial-focus-actions'))}
    </syn-dialog>
    \${createOpener('dialog-initial-focus-story-opener')}
  \`
}`,..._.parameters?.docs?.source}}};const Me=["Default","CustomWidth","Scrolling","HeaderActions","PreventingTheDialogFromClosing","CustomizingInitialFocus"];export{f as CustomWidth,_ as CustomizingInitialFocus,h as Default,b as HeaderActions,w as PreventingTheDialogFromClosing,v as Scrolling,Me as __namedExportsOrder,Ie as default};
