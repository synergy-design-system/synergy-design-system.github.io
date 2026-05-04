import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as ee,Ut as i,d as a,f as te,g as ne,u as re}from"./iframe-CKG-bwJX.js";import{n as ie,t as o}from"./class-map-tHUwgcUJ.js";import{r as s,t as c}from"./slot-uOU62xJ8.js";import{n as l,t as ae}from"./if-defined-BdfNV2Br.js";import{n as oe,t as se}from"./localize-DnZL8qNz.js";import{a as ce,i as le,n as ue,o as de,p as u,r as d,s as fe,t as f,u as p}from"./synergy-element-BvVk4gNI.js";import{n as pe,t as me}from"./watch-OXZPXmne.js";import{t as he}from"./button-6o3grRPU.js";import{a as m,i as h,l as g,n as ge,o as _e,t as _}from"./animation-registry-DTpGRZQp.js";import{n as v,t as y}from"./event-CAQhbrA7.js";import{a as b,i as x,n as S,o as C,r as w}from"./component-YYGwUeS7.js";import{n as T,t as E}from"./taggedTemplateLiteral-BuD1d7yP.js";import{n as D,t as O}from"./closeActiveElement-DWQwTBzc.js";import{n as k,t as A}from"./icon-button.component-CJjdMBO_.js";import{t as j}from"./icon-button-DU9a80OX.js";import{i as M,n as N,t as P}from"./scroll-puol-Nad.js";import{n as F,t as I}from"./modal-Cc10KPo5.js";import{t as ve}from"./input-BNudLH6T.js";var L,ye=e((()=>{n(),L=i`
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
    flex: 1 1 auto;
    font: inherit;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
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
`})),R,z=e((()=>{o(),n(),ae(),fe(),_e(),D(),ge(),s(),se(),P(),y(),me(),de(),F(),ue(),k(),ye(),le(),R=class extends f{constructor(...e){super(...e),this.hasSlotController=new c(this,`footer`),this.localize=new oe(this),this.modal=new I(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}static{this.styles=[ce,L]}static{this.dependencies={"syn-icon-button":A}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),N(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),M(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=_(this,`dialog.denyClose`,{dir:this.localize.dir()});m(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),N(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([g(this.dialog),g(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=_(this,`dialog.show`,{dir:this.localize.dir()}),n=_(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([m(this.panel,t.keyframes,t.options),m(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{O(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([g(this.dialog),g(this.overlay)]);let e=_(this,`dialog.hide`,{dir:this.localize.dir()}),t=_(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([m(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),m(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,M(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}async show(){if(!this.open)return this.open=!0,v(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,v(this,`syn-after-hide`)}render(){return r`
      <div
        part="base"
        class=${ie({dialog:!0,"dialog--has-footer":this.hasSlotController.test(`footer`),"dialog--open":this.open})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${l(this.noHeader?this.label:void 0)}
          aria-labelledby=${l(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:r`
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
    `}},d([p(`.dialog`)],R.prototype,`dialog`,void 0),d([p(`.dialog__panel`)],R.prototype,`panel`,void 0),d([p(`.dialog__overlay`)],R.prototype,`overlay`,void 0),d([u({reflect:!0,type:Boolean})],R.prototype,`open`,void 0),d([u({reflect:!0})],R.prototype,`label`,void 0),d([u({attribute:`no-header`,reflect:!0,type:Boolean})],R.prototype,`noHeader`,void 0),d([pe(`open`,{waitUntilFirstUpdate:!0})],R.prototype,`handleOpenChange`,null),h(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),h(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),h(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),h(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),h(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})),be=e((()=>{z(),z(),R.define(`syn-dialog`)})),xe,Se,Ce,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{n(),ee(),be(),he(),j(),ve(),w(),a(),ne(),T(),{args:B,argTypes:V}=x(`syn-dialog`),{overrideArgs:H}=b(`syn-dialog`),{generateTemplate:U}=C(`syn-dialog`),W=e=>`
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
`,G=e=>r(xe||=E([`
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
`]),e,e),K={args:H([{name:`open`,type:`attribute`,value:!0},{name:`label`,type:`attribute`,value:`Dialog`},{name:`default`,type:`slot`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},{name:`footer`,type:`slot`,value:W(`default-close-icon`)}],B),argTypes:V,component:`syn-dialog`,parameters:{chromatic:{disableSnapshot:!1,modes:te},design:re(`42207-348565`),docs:{description:{component:S(`dialog`,`default`)},story:{height:`400px`}}},tags:[`Structure`],title:`Components/syn-dialog`},q={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:S(`dialog`,`default`)}}},render:e=>r`
    ${U({args:e})}
    ${G(`dialog-default-story-opener`)}
  `},J={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:S(`dialog`,`custom-width`)}}},render:()=>r`
    <syn-dialog open label="Dialog" style="--width: 50vw;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      ${t(W(`dialog-custom-width`))}
    </syn-dialog>
    ${G(`dialog-custom-width-story-opener`)}
  `},Y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:S(`dialog`,`scrolling`)}}},render:()=>r`
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
      ${t(W(`dialog-scrolling`))}
    </syn-dialog>
    ${G(`dialog-scrolling-story-opener`)}
  `},X={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:S(`dialog`,`header-actions`)}}},render:()=>r(Se||=E([`
    <syn-dialog open label="Dialog">
      <syn-icon-button class="new-window" slot="header-actions" name="open_in_new" label="Open in new Tab"></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,`
    </syn-dialog>
    <script type="module">
      document.querySelector('.new-window').addEventListener('click', () => window.open(location.href));
    <\/script>
    `,`
  `]),t(W(`dialog-header-actions`)),G(`dialog-header-actions-story-opener`))},Z={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:S(`dialog`,`prevent-closing`)}}},render:()=>r(Ce||=E([`
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
  `]),t(W(`dialog-deny-close-actions`)),G(`dialog-deny-close-story-opener`))},Q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:S(`dialog`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-dialog`);t&&(t.open=!0)},render:()=>r`
    <syn-dialog label="Dialog">
      <syn-input autofocus placeholder="I will have focus when the dialog is opened"></syn-input>
      ${t(W(`dialog-initial-focus-actions`))}
    </syn-dialog>
    ${G(`dialog-initial-focus-story-opener`)}
  `},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`CustomWidth`,`Scrolling`,`HeaderActions`,`PreventingTheDialogFromClosing`,`CustomizingInitialFocus`]}))();export{J as CustomWidth,Q as CustomizingInitialFocus,q as Default,X as HeaderActions,Z as PreventingTheDialogFromClosing,Y as Scrolling,$ as __namedExportsOrder,K as default};