import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as ee,Ut as te,d as i,f as ne,g as re,u as ie}from"./iframe-fXCqWTG3.js";import{n as ae,t as oe}from"./class-map-FfzGmM48.js";import{r as a,t as o}from"./slot-uOU62xJ8.js";import{n as s,t as se}from"./if-defined-Dv06fXxt.js";import{n as ce,t as le}from"./localize-DnZL8qNz.js";import{a as c,i as ue,n as de,o as fe,p as l,r as u,s as pe,t as d,u as f}from"./synergy-element-CyrfZ-S8.js";import{n as me,t as he}from"./watch-OXZPXmne.js";import{t as ge}from"./button-Cwo2Enjo.js";import{a as p,i as m,l as h,n as _e,o as ve,t as g}from"./animation-registry-DTpGRZQp.js";import{n as _,t as v}from"./event-CAQhbrA7.js";import{a as y,i as b,n as x,o as S,r as C}from"./component-CsQUi1XQ.js";import{n as w,t as T}from"./taggedTemplateLiteral-BuD1d7yP.js";import{n as E,t as D}from"./closeActiveElement-DWQwTBzc.js";import{n as O,t as k}from"./icon-button.component-DncrfG8p.js";import{t as A}from"./icon-button-u4J765sd.js";import{i as j,n as M,t as N}from"./scroll-CTzJvgaj.js";import{n as P,t as F}from"./modal-DHRrEX6t.js";import{t as ye}from"./input-DPNeSMVZ.js";var I,be=e((()=>{n(),I=te`
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
`})),L,R=e((()=>{oe(),n(),se(),pe(),ve(),E(),_e(),a(),le(),N(),v(),he(),fe(),P(),de(),O(),be(),ue(),L=class extends d{constructor(...e){super(...e),this.hasSlotController=new o(this,`footer`),this.localize=new ce(this),this.modal=new F(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}static{this.styles=[c,I]}static{this.dependencies={"syn-icon-button":k}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),M(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),j(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`syn-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=g(this,`dialog.denyClose`,{dir:this.localize.dir()});p(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`syn-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),M(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([h(this.dialog),h(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`syn-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=g(this,`dialog.show`,{dir:this.localize.dir()}),n=g(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([p(this.panel,t.keyframes,t.options),p(this.overlay,n.keyframes,n.options)]),this.emit(`syn-after-show`)}else{D(this),this.emit(`syn-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([h(this.dialog),h(this.overlay)]);let e=g(this,`dialog.hide`,{dir:this.localize.dir()}),t=g(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([p(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),p(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,j(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`syn-after-hide`)}}async show(){if(!this.open)return this.open=!0,_(this,`syn-after-show`)}async hide(){if(this.open)return this.open=!1,_(this,`syn-after-hide`)}render(){return r`
      <div
        part="base"
        class=${ae({dialog:!0,"dialog--has-footer":this.hasSlotController.test(`footer`),"dialog--open":this.open})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${s(this.noHeader?this.label:void 0)}
          aria-labelledby=${s(this.noHeader?void 0:`title`)}
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
    `}},u([f(`.dialog`)],L.prototype,`dialog`,void 0),u([f(`.dialog__panel`)],L.prototype,`panel`,void 0),u([f(`.dialog__overlay`)],L.prototype,`overlay`,void 0),u([l({reflect:!0,type:Boolean})],L.prototype,`open`,void 0),u([l({reflect:!0})],L.prototype,`label`,void 0),u([l({attribute:`no-header`,reflect:!0,type:Boolean})],L.prototype,`noHeader`,void 0),u([me(`open`,{waitUntilFirstUpdate:!0})],L.prototype,`handleOpenChange`,null),m(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),m(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),m(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),m(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),m(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})})),xe=e((()=>{R(),R(),L.define(`syn-dialog`)})),Se,Ce,we,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{n(),ee(),xe(),ge(),A(),ye(),C(),i(),re(),w(),{args:z,argTypes:B}=b(`syn-dialog`),{overrideArgs:V}=y(`syn-dialog`),{generateTemplate:H}=S(`syn-dialog`),U=e=>`
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
`,W=e=>r(Se||=T([`
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
`]),e,e),G={args:V([{name:`open`,type:`attribute`,value:!0},{name:`label`,type:`attribute`,value:`Dialog`},{name:`default`,type:`slot`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},{name:`footer`,type:`slot`,value:U(`default-close-icon`)}],z),argTypes:B,component:`syn-dialog`,parameters:{chromatic:{disableSnapshot:!1,modes:ne},design:ie(`42207-348565`),docs:{description:{component:x(`dialog`,`default`)},story:{height:`400px`}}},tags:[`Structure`],title:`Components/syn-dialog`},K={parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:x(`dialog`,`default`)}}},render:e=>r`
    ${H({args:e})}
    ${W(`dialog-default-story-opener`)}
  `},q={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:x(`dialog`,`custom-width`)}}},render:()=>r`
    <syn-dialog open label="Dialog" style="--width: 50vw;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      ${t(U(`dialog-custom-width`))}
    </syn-dialog>
    ${W(`dialog-custom-width-story-opener`)}
  `},J={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:x(`dialog`,`scrolling`)}}},render:()=>r`
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
      ${t(U(`dialog-scrolling`))}
    </syn-dialog>
    ${W(`dialog-scrolling-story-opener`)}
  `},Y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:x(`dialog`,`header-actions`)}}},render:()=>r(Ce||=T([`
    <syn-dialog open label="Dialog">
      <syn-icon-button class="new-window" slot="header-actions" name="open_in_new" label="Open in new Tab"></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,`
    </syn-dialog>
    <script type="module">
      document.querySelector('.new-window').addEventListener('click', () => window.open(location.href));
    <\/script>
    `,`
  `]),t(U(`dialog-header-actions`)),W(`dialog-header-actions-story-opener`))},X={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:x(`dialog`,`prevent-closing`)}}},render:()=>r(we||=T([`
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
  `]),t(U(`dialog-deny-close-actions`)),W(`dialog-deny-close-story-opener`))},Z={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:x(`dialog`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-dialog`);t&&(t.open=!0)},render:()=>r`
    <syn-dialog label="Dialog">
      <syn-input autofocus placeholder="I will have focus when the dialog is opened"></syn-input>
      ${t(U(`dialog-initial-focus-actions`))}
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