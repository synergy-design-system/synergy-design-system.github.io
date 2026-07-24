import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{_ as t,a as n,d as ee,o as te,s as ne,y as r}from"./preview-Lxgm_fxp.js";import{c as i,h as re,t as a}from"./lit-BfcklOOD.js";import{a as ie,f as o,i as ae,n as s,o as c,r as l,s as oe,t as se,y as u}from"./synergy-element-B1XRUXNb.js";import{r as d,t as ce}from"./if-defined-gcdQCgEY.js";import{n as le,t as ue}from"./class-map-ivi47HnP.js";import{r as de,t as fe}from"./slot-Cl6UAYP5.js";import{n as f,t as pe}from"./localize-BjBTQYuo.js";import{n as me,t as he}from"./watch-RA3ULoLi.js";import{t as p}from"./button-CdIPVuol.js";import{a as m,i as h,l as g,n as ge,o as _e,t as _}from"./animation-registry-BrsFz0KL.js";import{i as v,n as y,t as ve}from"./scroll-B6BZHD-n.js";import{n as b,t as x}from"./event-D536S22s.js";import{n as S,t as C}from"./icon-button.component-zNZ0qcCA.js";import{a as w,i as T,n as E,o as D,r as O}from"./component-BRYPxz3B.js";import{n as k,t as A}from"./taggedTemplateLiteral-C9cDEsPD.js";import{n as j,t as M}from"./closeActiveElement-DfCXYoqP.js";import{t as N}from"./icon-button-DSpu_Iy-.js";import{n as P,t as F}from"./modal-DeyyEVI5.js";import{t as ye}from"./input-CRUG0B-6.js";var I,be=e((()=>{a(),I=re`
  :host {
    --width: 31rem;
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);

    display: contents;
  }

  .dialog {
    align-items: center;
    display: flex;
    inset: 0;
    justify-content: center;
    position: fixed;
    z-index: var(--syn-z-index-dialog);
  }

  .dialog__panel {
    background-color: var(--syn-panel-background-color);
    border: var(--syn-spacing-4x-small) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-large);
    display: flex;
    flex-direction: column;
    max-height: calc(100% - var(--syn-spacing-2x-large));
    max-width: calc(100% - var(--syn-spacing-2x-large));
    width: var(--width);
    z-index: 2;
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (width <= 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    display: flex;
    flex: 0 0 auto;
  }

  .dialog__title {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    font: var(--syn-heading-x-large);
    margin: 0;
    padding: var(--header-spacing);
  }

  .dialog__header-actions {
    align-items: flex-start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-font-size-x-large);
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--body-spacing);
    will-change: transform; /* #1249: Fixes Chrome scroll issues when using multiple scrollable items as content */
  }

  .dialog__footer {
    flex: 0 0 auto;
    padding: var(--footer-spacing);
    text-align: right;
  }

  .dialog__footer ::slotted(syn-button:not(:first-of-type)) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    backdrop-filter: blur(var(--syn-overlay-background-blur)); /* #946: Add background blur for sick 2025 */
    background-color: var(--syn-overlay-background-color);
    inset: 0;
    position: fixed;
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`})),L,R=e((()=>{ue(),a(),ce(),oe(),_e(),j(),ge(),de(),pe(),ve(),x(),he(),c(),P(),s(),S(),be(),ae(),L=class extends se{constructor(...e){super(...e),this.hasSlotController=new fe(this,`footer`),this.localize=new f(this),this.modal=new F(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}static{this.styles=[ie,I]}static{this.dependencies={"syn-icon-button":C}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),y(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),v(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=_(this,`dialog.denyClose`,{dir:this.localize.dir()});m(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),y(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([g(this.dialog),g(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=_(this,`dialog.show`,{dir:this.localize.dir()}),n=_(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([m(this.panel,t.keyframes,t.options),m(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{M(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([g(this.dialog),g(this.overlay)]);let e=_(this,`dialog.hide`,{dir:this.localize.dir()}),t=_(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([m(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),m(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,v(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}async show(){if(!this.open)return this.open=!0,b(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,b(this,`syn-after-hide`)}render(){return i`
      <div
        part="base"
        class=${le({dialog:!0,"dialog--has-footer":this.hasSlotController.test(`footer`),"dialog--open":this.open})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${d(this.noHeader?this.label:void 0)}
          aria-labelledby=${d(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:i`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></syn-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}},l([o(`.dialog`)],L.prototype,`dialog`,void 0),l([o(`.dialog__panel`)],L.prototype,`panel`,void 0),l([o(`.dialog__overlay`)],L.prototype,`overlay`,void 0),l([u({reflect:!0,type:Boolean})],L.prototype,`open`,void 0),l([u({reflect:!0})],L.prototype,`label`,void 0),l([u({attribute:`no-header`,reflect:!0,type:Boolean})],L.prototype,`noHeader`,void 0),l([me(`open`,{waitUntilFirstUpdate:!0})],L.prototype,`handleOpenChange`,null),h(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),h(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),h(`dialog.denyClose`,{keyframes:[{offset:0,transform:`translateX(0)`},{offset:.32,transform:`translateX(calc(var(--syn-spacing-x-small) * -1))`},{offset:.6,transform:`translateX(var(--syn-spacing-2x-small))`},{offset:.82,transform:`translateX(calc(var(--syn-spacing-3x-small) * -1))`},{offset:1,transform:`translateX(0)`}],options:{duration:250,easing:`cubic-bezier(0.25, 0.1, 0.25, 1)`}}),h(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),h(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})),xe=e((()=>{R(),R(),L.define(`syn-dialog`)})),Se,Ce,we,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{a(),t(),xe(),p(),N(),ye(),O(),te(),ee(),k(),{args:z,argTypes:B}=T(`syn-dialog`),{overrideArgs:V}=w(`syn-dialog`),{generateTemplate:H}=D(`syn-dialog`),U=e=>`
  <syn-button class="${e}" variant="filled" slot="footer">Close</syn-button>
  <script>
    [...document.querySelectorAll('.${e}')].forEach(elm => {
      elm.addEventListener('click', (e) => {
        const dialog = e.target.closest('syn-dialog');
        dialog.label += ' - Clicked';
        dialog.hide();
        dialog.modal.deactivateExternal();
      });  
    });
  <\/script>
`,W=e=>i(Se||=A([`
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
`]),e,e),G={args:V([{name:`open`,type:`attribute`,value:!0},{name:`label`,type:`attribute`,value:`Dialog`},{name:`default`,type:`slot`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},{name:`footer`,type:`slot`,value:U(`default-close-icon`)}],z),argTypes:B,component:`syn-dialog`,parameters:{chromatic:{disableSnapshot:!1,modes:ne},design:n(`42207-348565`),docs:{description:{component:E(`dialog`,`default`)},story:{height:`400px`}}},tags:[`Structure`],title:`Components/syn-dialog`},K={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:E(`dialog`,`default`)}}},render:e=>i`
    ${H({args:e})}
    ${W(`dialog-default-story-opener`)}
  `},q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:E(`dialog`,`custom-width`)}}},render:()=>i`
    <syn-dialog open label="Dialog" style="--width: 50vw;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      ${r(U(`dialog-custom-width`))}
    </syn-dialog>
    ${W(`dialog-custom-width-story-opener`)}
  `},J={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:E(`dialog`,`scrolling`)}}},render:()=>i`
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
      ${r(U(`dialog-scrolling`))}
    </syn-dialog>
    ${W(`dialog-scrolling-story-opener`)}
  `},Y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:E(`dialog`,`header-actions`)}}},render:()=>i(Ce||=A([`
    <syn-dialog open label="Dialog">
      <syn-icon-button class="new-window" slot="header-actions" name="open_in_new" label="Open in new Tab"></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,`
    </syn-dialog>
    <script type="module">
      document.querySelector('.new-window').addEventListener('click', () => window.open(location.href));
    <\/script>
    `,`
  `]),r(U(`dialog-header-actions`)),W(`dialog-header-actions-story-opener`))},X={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:E(`dialog`,`prevent-closing`)}}},render:()=>i(we||=A([`
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
  `]),r(U(`dialog-deny-close-actions`)),W(`dialog-deny-close-story-opener`))},Z={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:E(`dialog`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-dialog`);t&&(t.open=!0)},render:()=>i`
    <syn-dialog label="Dialog">
      <syn-input autofocus placeholder="I will have focus when the dialog is opened"></syn-input>
      ${r(U(`dialog-initial-focus-actions`))}
    </syn-dialog>
    ${W(`dialog-initial-focus-story-opener`)}
  `},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`CustomWidth`,`Scrolling`,`HeaderActions`,`PreventingTheDialogFromClosing`,`CustomizingInitialFocus`]}));$();export{q as CustomWidth,Z as CustomizingInitialFocus,K as Default,Y as HeaderActions,X as PreventingTheDialogFromClosing,J as Scrolling,Q as __namedExportsOrder,G as default,$ as t};