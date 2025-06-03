import{R as n}from"./index-_2TAQcTa.js";import{T as w,S as b,b as f,c as N}from"./index-CSocIyHK.js";import{x as t}from"./directive-helpers-Dvm_Ferq.js";import{g as e,a as x,p as D}from"./component-CVO_CL4s.js";import{c as a,a as u,b as i,d as o,e as s,f as r,g as p}from"./appshell-BpeYlaOa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B9paF1Cn.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";import"./library-BeKtmk-e.js";import"./ref-mC-OfJbg.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./icon-button-dyHaNbso.js";import"./functions-CDi3doZH.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CDx8exsq.js";import"./translations-CnhJ1T76.js";var $=Object.freeze,C=Object.defineProperty,M=(k,E)=>$(C(k,"raw",{value:$(k.slice())})),S;const K={parameters:{chromatic:{...D?.parameters?.chromatic,disableSnapshot:!1},design:x("8462-8334"),docs:{description:{component:e("application-shell","default","templates")},page:()=>n.createElement(n.Fragment,null,n.createElement(w,null),n.createElement(b,null),n.createElement(f,null),n.createElement(N,{title:""})),story:{iframeHeight:550}}},title:"Templates/AppShell"},c={parameters:{docs:{description:{story:e("application-shell","side-navigation","templates")}}},render:()=>t`
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
  `},y={parameters:{docs:{description:{story:e("application-shell","side-navigation-shrinking","templates")}}},render:()=>t(S||(S=M([`
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
  `])),a(),u({noFocusTrapping:!0,open:!0}),i(),o(),s(),r("appshell-shrink"),p("appshell-shrink"))},d={name:"Rail Navigation (Desktop)",parameters:{docs:{description:{story:e("application-shell","rail-navigation-desktop","templates")}}},render:()=>t`
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
  `},m={...d,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{description:{story:e("application-shell","rail-navigation-mobile","templates")}},viewport:{defaultViewport:"mobile2"}}},l={name:"Sticky Navigation (Desktop)",parameters:{docs:{description:{story:e("application-shell","sticky-navigation-desktop","templates")}}},render:()=>t`
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
  `},g={...l,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{description:{story:e("application-shell","sticky-navigation-mobile","templates")}},viewport:{defaultViewport:"mobile2"}}},v={parameters:{docs:{description:{story:e("application-shell","top-navigation","templates")}}},render:()=>t`
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
  `},h={parameters:{docs:{description:{story:e("application-shell","white-background","templates")}}},render:()=>t`
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
        background: var(--syn-color-neutral-0);
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
}`,...c.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...StickyNavigationDesktop,
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
    },
    viewport: {
      defaultViewport: 'mobile2'
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
}`,...h.parameters?.docs?.source}}};const Q=["SideNavigation","SideNavigationShrinkingContent","RailNavigationDesktop","RailNavigationMobile","StickyNavigationDesktop","StickyNavigationMobile","TopNavigation","WhiteBackground"];export{d as RailNavigationDesktop,m as RailNavigationMobile,c as SideNavigation,y as SideNavigationShrinkingContent,l as StickyNavigationDesktop,g as StickyNavigationMobile,v as TopNavigation,h as WhiteBackground,Q as __namedExportsOrder,K as default};
