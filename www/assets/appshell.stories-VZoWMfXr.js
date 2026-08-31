import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r,n as i,t as a}from"./preview-AI1NfaYJ.js";import{c as o,t as s}from"./lit-DgWh_IaA.js";import{d as c,f as l,i as u,p as d,u as f}from"./blocks-CjiNIppL.js";import{t as p}from"./react-BZJXY1be.js";import{n as m,r as h}from"./component-Bm6Rp1CP.js";import{t as g}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{a as _,c as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./appshell-hwN6RXDm.js";var T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{T=e(p(),1),d(),s(),a(),h(),v(),r(),D={parameters:{chromatic:{...i?.parameters?.chromatic,disableSnapshot:!1,modes:n},docs:{description:{component:m(`application-shell`,`default`,`templates`)},page:()=>T.createElement(T.Fragment,null,T.createElement(l,null),T.createElement(c,null),T.createElement(u,null),T.createElement(f,{title:``})),story:{iframeHeight:550}}},tags:[`Application Shell`],title:`Templates/AppShell`},O={parameters:{docs:{description:{story:m(`application-shell`,`side-navigation`,`templates`)}}},render:()=>o`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${S()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${x()}
        ${y()}
        ${b()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${_()}
    ${C(`appshell-side-navigation`)}
    ${w(`appshell-side-navigation`)}
  `},k={parameters:{docs:{description:{story:m(`application-shell`,`side-navigation-shrinking`,`templates`)}}},render:()=>o(E||=g([`
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
  `]),S(),x({noFocusTrapping:!0,open:!0}),y(),b(),_(),C(`appshell-shrink`),w(`appshell-shrink`))},A={name:`Rail Navigation (Desktop)`,parameters:{docs:{description:{story:m(`application-shell`,`rail-navigation-desktop`,`templates`)}}},render:()=>o`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      ${S()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${x({variant:`rail`})}
        <div class="synergy-demo-content-inner">
          ${y()}
          ${b()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${_()}
    ${C(`appshell-rail-desktop`)}
    ${w(`appshell-rail-desktop`)}

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
  `},j={...A,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{description:{story:m(`application-shell`,`rail-navigation-mobile`,`templates`)}}}},M={name:`Sticky Navigation (Desktop)`,parameters:{docs:{description:{story:m(`application-shell`,`sticky-navigation-desktop`,`templates`)}}},render:()=>o`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-sticky-desktop">
      ${S()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${x({hasFooter:!1,variant:`sticky`})}
        <div class="synergy-demo-content-inner">
          ${y()}
          ${b()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${_()}
    ${C(`appshell-sticky-desktop`)}
    ${w(`appshell-sticky-desktop`)}

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
  `},N={...M,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{description:{story:m(`application-shell`,`sticky-navigation-mobile`,`templates`)}}}},P={parameters:{docs:{description:{story:m(`application-shell`,`top-navigation`,`templates`)}}},render:()=>o`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      ${S({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${y()}
        ${b()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${_()}
    ${w(`appshell-top-navigation`,`syn-prio-nav`)}
    ${C(`appshell-top-navigation`)}
  `},F={parameters:{docs:{description:{story:m(`application-shell`,`alternative-background`,`templates`)}}},render:()=>o`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      ${S({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${y()}
        ${b()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${_()}
    ${w(`appshell-white-background`,`syn-prio-nav`)}
    ${C(`appshell-white-background`)}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-panel-background-color);
      }
    </style>
  `},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`SideNavigation`,`SideNavigationShrinkingContent`,`RailNavigationDesktop`,`RailNavigationMobile`,`StickyNavigationDesktop`,`StickyNavigationMobile`,`TopNavigation`,`AlternativeBackground`]})))()}L();export{F as AlternativeBackground,A as RailNavigationDesktop,j as RailNavigationMobile,O as SideNavigation,k as SideNavigationShrinkingContent,M as StickyNavigationDesktop,N as StickyNavigationMobile,P as TopNavigation,I as __namedExportsOrder,D as default};