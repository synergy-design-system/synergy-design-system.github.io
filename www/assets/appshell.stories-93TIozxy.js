import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{Nt as n,R as r,Rt as i,d as a,f as o,g as s,n as c,t as l,u}from"./iframe-CKG-bwJX.js";import{d,f,l as p,r as m,u as h}from"./blocks-EKA9mPMN.js";import{n as g,r as _}from"./component-YYGwUeS7.js";import{n as v,t as y}from"./taggedTemplateLiteral-BuD1d7yP.js";import{a as b,c as x,i as S,n as C,o as w,r as T,s as E,t as D}from"./appshell-BWl03NmF.js";var O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{O=e(r(),1),f(),n(),l(),_(),a(),x(),s(),v(),A={parameters:{chromatic:{...c?.parameters?.chromatic,disableSnapshot:!1,modes:o},design:u(`16648-52486`),docs:{description:{component:g(`application-shell`,`default`,`templates`)},page:()=>O.createElement(O.Fragment,null,O.createElement(d,null),O.createElement(h,null),O.createElement(m,null),O.createElement(p,{title:``})),story:{iframeHeight:550}}},tags:[`Application Shell`],title:`Templates/AppShell`},j={parameters:{docs:{description:{story:g(`application-shell`,`side-navigation`,`templates`)}}},render:()=>i`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${T()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${w()}
        ${S()}
        ${C()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${E(`appshell-side-navigation`)}
    ${D(`appshell-side-navigation`)}
  `},M={parameters:{docs:{description:{story:g(`application-shell`,`side-navigation-shrinking`,`templates`)}}},render:()=>i(k||=y([`
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
  `]),T(),w({noFocusTrapping:!0,open:!0}),S(),C(),b(),E(`appshell-shrink`),D(`appshell-shrink`))},N={name:`Rail Navigation (Desktop)`,parameters:{docs:{description:{story:g(`application-shell`,`rail-navigation-desktop`,`templates`)}}},render:()=>i`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      ${T()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${w({variant:`rail`})}
        <div class="synergy-demo-content-inner">
          ${S()}
          ${C()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${E(`appshell-rail-desktop`)}
    ${D(`appshell-rail-desktop`)}

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
  `},P={...N,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{description:{story:g(`application-shell`,`rail-navigation-mobile`,`templates`)}}}},F={name:`Sticky Navigation (Desktop)`,parameters:{docs:{description:{story:g(`application-shell`,`sticky-navigation-desktop`,`templates`)}}},render:()=>i`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-sticky-desktop">
      ${T()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${w({hasFooter:!1,variant:`sticky`})}
        <div class="synergy-demo-content-inner">
          ${S()}
          ${C()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${E(`appshell-sticky-desktop`)}
    ${D(`appshell-sticky-desktop`)}

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
  `},I={...F,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{description:{story:g(`application-shell`,`sticky-navigation-mobile`,`templates`)}}}},L={parameters:{docs:{description:{story:g(`application-shell`,`top-navigation`,`templates`)}}},render:()=>i`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      ${T({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${S()}
        ${C()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${D(`appshell-top-navigation`,`syn-prio-nav`)}
    ${E(`appshell-top-navigation`)}
  `},R={parameters:{docs:{description:{story:g(`application-shell`,`alternative-background`,`templates`)}}},render:()=>i`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      ${T({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${S()}
        ${C()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${b()}
    ${D(`appshell-white-background`,`syn-prio-nav`)}
    ${E(`appshell-white-background`)}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-panel-background-color);
      }
    </style>
  `},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`SideNavigation`,`SideNavigationShrinkingContent`,`RailNavigationDesktop`,`RailNavigationMobile`,`StickyNavigationDesktop`,`StickyNavigationMobile`,`TopNavigation`,`AlternativeBackground`]}))();export{R as AlternativeBackground,N as RailNavigationDesktop,P as RailNavigationMobile,j as SideNavigation,M as SideNavigationShrinkingContent,F as StickyNavigationDesktop,I as StickyNavigationMobile,L as TopNavigation,z as __namedExportsOrder,A as default};