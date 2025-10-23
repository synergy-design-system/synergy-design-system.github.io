import{d as n,g as b,C as w,p as f,x as t}from"./iframe-CZtoaT_j.js";import{T as N,S as x,b as D,c as C}from"./blocks-BcE0SMD7.js";import{g as e}from"./component-CZgvAoP3.js";import{c as a,a as u,b as i,d as o,e as s,f as r,g as p}from"./appshell-D7yLsWka.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DKLSCQ9z.js";import"./translations-CnhJ1T76.js";import"./nav-item-CcPKJDVG.js";import"./class-map-B9eS6yRQ.js";import"./synergy-element-5QA_0ntR.js";import"./icon.component-t0BGzkFV.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./if-defined-BOoi-cC0.js";import"./divider.component-xw4xMeUq.js";import"./slot-9EVoRGQc.js";import"./prio-nav-BkX-YHYE.js";import"./dropdown.component-DwFGeCUw.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-NrGleasE.js";import"./menu.component-BOptGX8r.js";import"./header-BnPOYp_j.js";import"./icon-CCdtp3Ir.js";import"./dropdown-C_I8xr30.js";import"./icon-button-BlxAe12C.js";import"./icon-button.component-Dtp23Lye.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./menu-item-BoneJeMy.js";import"./spinner.component-BomgDUtZ.js";import"./side-nav-GwooRJSi.js";import"./drawer.component-BGG8XKf9.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";var S=Object.freeze,M=Object.defineProperty,E=(k,F)=>S(M(k,"raw",{value:S(k.slice())})),$;const ue={parameters:{chromatic:{...f?.parameters?.chromatic,disableSnapshot:!1,modes:w},design:b("8462-8334"),docs:{description:{component:e("application-shell","default","templates")},page:()=>n.createElement(n.Fragment,null,n.createElement(N,null),n.createElement(x,null),n.createElement(D,null),n.createElement(C,{title:""})),story:{iframeHeight:550}}},tags:["Application Shell","SICK2018"],title:"Templates/AppShell"},c={parameters:{docs:{description:{story:e("application-shell","side-navigation","templates")}}},render:()=>t`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${a()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${u()}
        ${i()}
        ${o()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${r("appshell-side-navigation")}
    ${p("appshell-side-navigation")}
  `},m={parameters:{docs:{description:{story:e("application-shell","side-navigation-shrinking","templates")}}},render:()=>t($||($=E([`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-shrink">
      `,`
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        `,`
        <div class="synergy-demo-content-inner">
          `,`
          `,`
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    `,`
    <style>
      #appshell-shrink {
        /**
         * Set this variable to the wanted size of the side-nav
         * Make sure the value stays in sync, otherwise the parts may overlap
         */
        --appshell-shrink-nav-open-width: 320px;

        syn-side-nav::part(overlay) {
          display: none;
        }

        .synergy-demo-content-inner {
          /**
           * Set the initial margin left. Needed because we
           * create the page with the side-bar open
           */
          margin-left: var(--appshell-shrink-nav-open-width);
        }

        /**
         * Show a transition effect for users that do not have reduced motion enabled
         */
        @media (prefers-reduced-motion: no-preference) {
          .synergy-demo-content-inner {
            transition: margin-left 250ms;
          }
        }
      }
    </style>
    `,`
    `,`

    <script type="module">
      // This script will make sure the margin of the content area
      // is adjusted when the side-bar is opened or closed.
      // Make sure to use the same value as in the css variable above
      const sideNav = document.getElementById('appshell-shrink').querySelector('syn-side-nav');
      const demoContent = document.getElementById('appshell-shrink').querySelector('.synergy-demo-content-inner');
      sideNav.addEventListener('syn-show', () => {
        demoContent.style.marginLeft = 'var(--appshell-shrink-nav-open-width)';
      });
      sideNav.addEventListener('syn-hide', () => {
        demoContent.style.marginLeft = '0px';
      });
    <\/script>
  `])),a(),u({noFocusTrapping:!0,open:!0}),i(),o(),s(),r("appshell-shrink"),p("appshell-shrink"))},l={name:"Rail Navigation (Desktop)",parameters:{docs:{description:{story:e("application-shell","rail-navigation-desktop","templates")}}},render:()=>t`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      ${a()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${u({variant:"rail"})}
        <div class="synergy-demo-content-inner">
          ${i()}
          ${o()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${r("appshell-rail-desktop")}
    ${p("appshell-rail-desktop")}

    <style>
      #appshell-rail-desktop .synergy-demo-content {
        flex-direction: row;
      }

      @media(max-width: 420px) {
        #appshell-rail-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }
    </style>
  `},y={...l,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{description:{story:e("application-shell","rail-navigation-mobile","templates")}}}},d={name:"Sticky Navigation (Desktop)",parameters:{docs:{description:{story:e("application-shell","sticky-navigation-desktop","templates")}}},render:()=>t`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-sticky-desktop">
      ${a()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${u({hasFooter:!1,variant:"sticky"})}
        <div class="synergy-demo-content-inner">
          ${i()}
          ${o()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${r("appshell-sticky-desktop")}
    ${p("appshell-sticky-desktop")}

    <style>
      #appshell-sticky-desktop .synergy-demo-content {
        flex-direction: row;
      }

      @media(max-width: 420px) {
        #appshell-sticky-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }
    </style>
  `},g={...d,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{description:{story:e("application-shell","sticky-navigation-mobile","templates")}}}},v={parameters:{docs:{description:{story:e("application-shell","top-navigation","templates")}}},render:()=>t`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      ${a({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${i()}
        ${o()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${p("appshell-top-navigation","syn-prio-nav")}
    ${r("appshell-top-navigation")}
  `},h={parameters:{docs:{description:{story:e("application-shell","alternative-background","templates")}}},render:()=>t`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      ${a({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${i()}
        ${o()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${p("appshell-white-background","syn-prio-nav")}
    ${r("appshell-white-background")}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-panel-background-color);
      }
    </style>
  `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'side-navigation', 'templates')
      }
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      \${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createSideNav()}
        \${createMainContent()}
        \${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    \${createSidebarConnector('appshell-side-navigation')}
    \${createDemoNavigation('appshell-side-navigation')}
  \`
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'side-navigation-shrinking', 'templates')
      }
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-shrink">
      \${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createSideNav({
    noFocusTrapping: true,
    open: true
  })}
        <div class="synergy-demo-content-inner">
          \${createMainContent()}
          \${createFooter()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    <style>
      #appshell-shrink {
        /**
         * Set this variable to the wanted size of the side-nav
         * Make sure the value stays in sync, otherwise the parts may overlap
         */
        --appshell-shrink-nav-open-width: 320px;

        syn-side-nav::part(overlay) {
          display: none;
        }

        .synergy-demo-content-inner {
          /**
           * Set the initial margin left. Needed because we
           * create the page with the side-bar open
           */
          margin-left: var(--appshell-shrink-nav-open-width);
        }

        /**
         * Show a transition effect for users that do not have reduced motion enabled
         */
        @media (prefers-reduced-motion: no-preference) {
          .synergy-demo-content-inner {
            transition: margin-left 250ms;
          }
        }
      }
    </style>
    \${createSidebarConnector('appshell-shrink')}
    \${createDemoNavigation('appshell-shrink')}

    <script type="module">
      // This script will make sure the margin of the content area
      // is adjusted when the side-bar is opened or closed.
      // Make sure to use the same value as in the css variable above
      const sideNav = document.getElementById('appshell-shrink').querySelector('syn-side-nav');
      const demoContent = document.getElementById('appshell-shrink').querySelector('.synergy-demo-content-inner');
      sideNav.addEventListener('syn-show', () => {
        demoContent.style.marginLeft = 'var(--appshell-shrink-nav-open-width)';
      });
      sideNav.addEventListener('syn-hide', () => {
        demoContent.style.marginLeft = '0px';
      });
    <\/script>
  \`
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Rail Navigation (Desktop)',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'rail-navigation-desktop', 'templates')
      }
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      \${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createSideNav({
    variant: 'rail'
  })}
        <div class="synergy-demo-content-inner">
          \${createMainContent()}
          \${createFooter()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    \${createSidebarConnector('appshell-rail-desktop')}
    \${createDemoNavigation('appshell-rail-desktop')}

    <style>
      #appshell-rail-desktop .synergy-demo-content {
        flex-direction: row;
      }

      @media(max-width: 420px) {
        #appshell-rail-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }
    </style>
  \`
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...RailNavigationDesktop,
  globals: {
    viewport: {
      value: 'mobile2'
    }
  },
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'rail-navigation-mobile', 'templates')
      }
      // disable: true,
    }
  }
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sticky Navigation (Desktop)',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'sticky-navigation-desktop', 'templates')
      }
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-sticky-desktop">
      \${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createSideNav({
    hasFooter: false,
    variant: 'sticky'
  })}
        <div class="synergy-demo-content-inner">
          \${createMainContent()}
          \${createFooter()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    \${createSidebarConnector('appshell-sticky-desktop')}
    \${createDemoNavigation('appshell-sticky-desktop')}

    <style>
      #appshell-sticky-desktop .synergy-demo-content {
        flex-direction: row;
      }

      @media(max-width: 420px) {
        #appshell-sticky-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }
    </style>
  \`
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...StickyNavigationDesktop,
  globals: {
    viewport: {
      value: 'mobile2'
    }
  },
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'sticky-navigation-mobile', 'templates')
      }
      // disable: true,
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'top-navigation', 'templates')
      }
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      \${createHeader({
    withMetaNavigation: true
  })}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createMainContent()}
        \${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    \${createDemoNavigation('appshell-top-navigation', 'syn-prio-nav')}
    \${createSidebarConnector('appshell-top-navigation')}
  \`
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'alternative-background', 'templates')
      }
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      \${createHeader({
    withMetaNavigation: true
  })}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        \${createMainContent()}
        \${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    \${createSharedStyles()}
    \${createDemoNavigation('appshell-white-background', 'syn-prio-nav')}
    \${createSidebarConnector('appshell-white-background')}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-panel-background-color);
      }
    </style>
  \`
}`,...h.parameters?.docs?.source}}};const ke=["SideNavigation","SideNavigationShrinkingContent","RailNavigationDesktop","RailNavigationMobile","StickyNavigationDesktop","StickyNavigationMobile","TopNavigation","AlternativeBackground"];export{h as AlternativeBackground,l as RailNavigationDesktop,y as RailNavigationMobile,c as SideNavigation,m as SideNavigationShrinkingContent,d as StickyNavigationDesktop,g as StickyNavigationMobile,v as TopNavigation,ke as __namedExportsOrder,ue as default};
