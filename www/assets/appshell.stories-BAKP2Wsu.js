import{C as b,b as w,c as t,R as n,d as f}from"./iframe-CvEK3hyS.js";import{T as N,S as D,b as x,c as C}from"./blocks-C4lZ7lNA.js";import{g as e}from"./component-CA77O2dz.js";import{c as a,a as i,b as o,d as s,e as r,f as p,g as u}from"./appshell-CEQ4CzUC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-GL32a4iR.js";import"./translations-CnhJ1T76.js";import"./nav-item-D8J0aNkM.js";import"./class-map-CxnJOQ98.js";import"./synergy-element-CPjip6ae.js";import"./icon.component-ZmKdh5hn.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./if-defined-B09jWYPP.js";import"./divider.component-DZtCkpJ4.js";import"./slot-9EVoRGQc.js";import"./prio-nav-Cgv_U6il.js";import"./dropdown.component-zeQlazrF.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-BEjh5qZg.js";import"./menu.component-BR-GH55q.js";import"./header-CMmAqAI9.js";import"./icon-BKjjr23e.js";import"./dropdown-BdKvb2fS.js";import"./icon-button-D7_pqHNt.js";import"./icon-button.component-DevAOAvU.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./menu-item-CnQJvYzu.js";import"./spinner.component-BGapwH13.js";import"./side-nav-CsJtxlDR.js";import"./drawer.component-ClASXT4H.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./scroll-DgKSCJoS.js";import"./modal-Dlsa26F3.js";var $=Object.freeze,M=Object.defineProperty,E=(k,F)=>$(M(k,"raw",{value:$(k.slice())})),S;const ue={parameters:{chromatic:{...w?.parameters?.chromatic,disableSnapshot:!1,modes:b},design:f("8462-8334"),docs:{description:{component:e("application-shell","default","templates")},page:()=>n.createElement(n.Fragment,null,n.createElement(N,null),n.createElement(D,null),n.createElement(x,null),n.createElement(C,{title:""})),story:{iframeHeight:550}}},tags:["Application Shell"],title:"Templates/AppShell"},c={parameters:{docs:{description:{story:e("application-shell","side-navigation","templates")}}},render:()=>t`
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
    ${p("appshell-side-navigation")}
    ${r("appshell-side-navigation")}
  `},m={parameters:{docs:{description:{story:e("application-shell","side-navigation-shrinking","templates")}}},render:()=>t(S||(S=E([`
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
  `])),a(),u({noFocusTrapping:!0,open:!0}),i(),o(),s(),p("appshell-shrink"),r("appshell-shrink"))},l={name:"Rail Navigation (Desktop)",parameters:{docs:{description:{story:e("application-shell","rail-navigation-desktop","templates")}}},render:()=>t`
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
    ${p("appshell-rail-desktop")}
    ${r("appshell-rail-desktop")}

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
    ${p("appshell-sticky-desktop")}
    ${r("appshell-sticky-desktop")}

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
    ${r("appshell-top-navigation","syn-prio-nav")}
    ${p("appshell-top-navigation")}
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
    ${r("appshell-white-background","syn-prio-nav")}
    ${p("appshell-white-background")}
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
