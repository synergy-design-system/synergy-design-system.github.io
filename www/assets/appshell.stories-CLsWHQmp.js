import{R as n}from"./index-_2TAQcTa.js";import{T as k,S,b as w,c as b}from"./index-Be5fhDoE.js";import{x as a}from"./directive-helpers-Dvm_Ferq.js";import{g as e,a as f,p as N}from"./component-KFAx8TEo.js";import{c as i,a as h,b as r,d as o,e as s,f as p,g as d}from"./appshell-CcPywy8l.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CgsgQlyw.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";import"./library-BX4ONXik.js";import"./ref-B9GS7qLj.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./icon-button-Bf-NEYFS.js";import"./index-mLaxDseA.js";import"./translations-dXj_Xr11.js";var u=Object.freeze,C=Object.defineProperty,D=(v,x)=>u(C(v,"raw",{value:u(v.slice())})),$;const W={parameters:{chromatic:{...N?.parameters?.chromatic,disableSnapshot:!1},design:f("8462-8334"),docs:{description:{component:e("application-shell","default","templates")},page:()=>n.createElement(n.Fragment,null,n.createElement(k,null),n.createElement(S,null),n.createElement(w,null),n.createElement(b,{title:""})),story:{iframeHeight:550}}},title:"Templates/AppShell"},l={parameters:{docs:{description:{story:e("application-shell","side-navigation","templates")}}},render:()=>a`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${i()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${h()}
        ${r()}
        ${o()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${p("appshell-side-navigation")}
    ${d("appshell-side-navigation")}
  `},c={parameters:{docs:{description:{story:e("application-shell","side-navigation-shrinking","templates")}}},render:()=>a($||($=D([`
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
  `])),i(),h({noFocusTrapping:!0,open:!0}),r(),o(),s(),p("appshell-shrink"),d("appshell-shrink"))},t={name:"Rail Navigation (Desktop)",parameters:{docs:{description:{story:e("application-shell","rail-navigation-desktop","templates")}}},render:()=>a`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      ${i()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${h({rail:!0})}
        <div class="synergy-demo-content-inner">
          ${r()}
          ${o()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${p("appshell-rail-desktop")}
    ${d("appshell-rail-desktop")}

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
  `},y={...t,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{description:{story:e("application-shell","rail-navigation-mobile","templates")}},viewport:{defaultViewport:"mobile2"}}},m={parameters:{docs:{description:{story:e("application-shell","top-navigation","templates")}}},render:()=>a`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      ${i({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${r()}
        ${o()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${d("appshell-top-navigation","syn-prio-nav")}
    ${p("appshell-top-navigation")}
  `},g={parameters:{docs:{description:{story:e("application-shell","white-background","templates")}}},render:()=>a`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      ${i({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${r()}
        ${o()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${s()}
    ${d("appshell-white-background","syn-prio-nav")}
    ${p("appshell-white-background")}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-color-neutral-0);
      }
    </style>
  `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    rail: true
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
}`,...t.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...RailNavigationDesktop,
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
    },
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('application-shell', 'white-background', 'templates')
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
        background: var(--syn-color-neutral-0);
      }
    </style>
  \`
}`,...g.parameters?.docs?.source}}};const A=["SideNavigation","SideNavigationShrinkingContent","RailNavigationDesktop","RailNavigationMobile","TopNavigation","WhiteBackground"];export{t as RailNavigationDesktop,y as RailNavigationMobile,l as SideNavigation,c as SideNavigationShrinkingContent,m as TopNavigation,g as WhiteBackground,A as __namedExportsOrder,W as default};
