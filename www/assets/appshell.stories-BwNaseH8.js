import{R as a}from"./index-B-o1Wr-g.js";import{ah as x,ai as N,aj as C,ak as E}from"./index-BRWInqGM.js";import{k as n}from"./lit-element-BsyMe9HG.js";import{p as M,g as T}from"./preview-BfEM8BLb.js";import{g as _}from"./component-CUJbGTln.js";import{g as e}from"./translations-Y5NUIjcf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BjHP95lE.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DGdNYaqV.js";import"./index-DrFu-skq.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";import"./icon-button-BsnFsjAn.js";import"./icon-DiAnxFT_.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-C_Koh2Wx.js";var $=Object.freeze,I=Object.defineProperty,h=(t,i)=>$(I(t,"raw",{value:$(t.slice())})),S,k,b;const r=()=>n`
  <style>
    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    #storybook-root,
    #root-inner {
      height: 100%;
    }

    .synergy-demo-application {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 550px;
    }

    .synergy-demo-content {
      background: var(--syn-color-neutral-100);
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      height: 1%;
      position: relative;
    }

    .synergy-demo-content-inner {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
    }

    .synergy-demo-main {
      align-items: center;
      border: 1px dashed #9747FF;
      border-radius: var(--syn-border-radius-medium);
      color: #9747FF;
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      font: var(--syn-body-small-bold);
      justify-content: center;
      margin: var(--syn-spacing-2x-large) var(--syn-spacing-2x-large) 0;
      padding: 0 var(--syn-spacing-small);
    }

    .synergy-demo-main h1 {
      color: var(--syn-typography-color-text);
      font: var(--syn-heading-large);
      margin: 0;
      text-align: center;
    }

    .synergy-demo-footer > nav {
      align-items: center;
      display: flex;
      font: var(--syn-body-x-small-regular);
      gap: var(--syn-spacing-large);
      height: var(--syn-spacing-3x-large);
      justify-content: center;
    }

    .synergy-demo-footer :is(a, strong) {
      color: var(--syn-input-help-text-color);
    }

    .synergy-demo-footer a:hover {
      color: var(--syn-color-primary-600);
    }

    .synergy-demo-footer a:active {
      color: var(--syn-color-primary-700);
    }

    .synergy-demo-footer a:focus {
      outline: var(--syn-focus-ring);
      outline-offset: var(--syn-focus-ring-offset);
    }
  </style>
`,F=()=>n`
  <!-- prio-nav -->
  <syn-prio-nav slot="navigation">
    <syn-nav-item current horizontal>${e("appShell.navigation.home")}</syn-nav-item>
    <syn-nav-item horizontal>${e("appShell.navigation.documents")}</syn-nav-item>
    <syn-nav-item horizontal>${e("appShell.navigation.applications")}</syn-nav-item>
    <syn-nav-item horizontal>${e("appShell.navigation.teams")}</syn-nav-item>
  </syn-prio-nav>
  <!-- /prio-nav -->
`,s=({withMetaNavigation:t=!1}={})=>n`
  <!-- header -->
  <syn-header label="${e("appShell.appName")}">
    
    ${t?F():""}

    <!-- meta-navigation -->
    <nav slot="meta-navigation">
      <syn-dropdown>
        <syn-icon-button
          color="neutral"
          name="more_vert"
          label="More"
          slot="trigger"
        ></syn-icon-button>
        <syn-menu>
          <syn-menu-item>${e("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${e("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${e("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${e("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${e("appShell.metaNavigation.menuItem")}</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </nav>
    <!-- /meta-navigation -->
  </syn-header>
  <!-- /header -->
`,u=({noFocusTrapping:t=!1,open:i=!1,rail:w=!1}={})=>n`
  <!-- side-navigation -->
  <syn-side-nav
    ?no-focus-trapping=${t}
    ?open=${i}
    ?rail=${w}
  >
    <syn-nav-item current>
      <syn-icon name="home" slot="prefix"></syn-icon>
      ${e("appShell.navigation.start")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="spoke" slot="prefix"></syn-icon>
      ${e("appShell.navigation.workspaces")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="insert_drive_file" slot="prefix"></syn-icon>
      ${e("appShell.navigation.documents")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="wb_cloudy" slot="prefix"></syn-icon>
      ${e("appShell.navigation.cloud")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="volunteer_activism" slot="prefix"></syn-icon>
      ${e("appShell.navigation.feedback")}
    </syn-nav-item>

    <syn-nav-item slot="footer">
      <syn-icon name="settings" slot="prefix"></syn-icon>
      ${e("appShell.navigation.settings")}
    </syn-nav-item>
    <syn-nav-item slot="footer" divider>
      <syn-icon name="logout" slot="prefix"></syn-icon>
      ${e("appShell.navigation.logout")}
    </syn-nav-item>
  </syn-side-nav>
  <!-- /side-navigation -->
`,l=()=>n`
  <main class="synergy-demo-main">
    <h1>Start Page Content</h1>
    ${e("appShell.mainSlot")}
  </main>
`,d=()=>n`
  <!-- footer -->
  <footer class="synergy-demo-footer">
    <nav>
      <strong>${e("appShell.footer.copyright")}</strong>
    </nav>
  </footer>
  <!-- /footer -->
`,f=t=>n(S||(S=h([`
  <script type="module">
    // This is only done because in storybooks
    // doc overview multiple side-navs and headers exist.
    // Per default, the header will connect to the first side-nav automatically.
    const elm = document.getElementById('`,`');
    const header = elm.querySelector('syn-header');
    const sideNav = elm.querySelector('syn-side-nav');
    if (sideNav && header) {
      header.connectSideNavigation(sideNav);
    }
  <\/script>
`])),t),p=(t,i="syn-side-nav")=>n(k||(k=h([`
  <script type="module">
    // This emulates a click on the side-nav and updates the main content
    // This will usually be provided by the application itself, e.g. via
    // built in routing functions like angular-router, react-router or vue-router
    const elm = document.getElementById('`,`');
    const nav = elm.querySelector('`,`');
    const mainContent = elm.querySelector('main');
    const headline = mainContent.querySelector('h1');

    // Hide the header in case we are using the top navigation
    if ('`,`' === 'syn-prio-nav') {
      const header = elm.querySelector('syn-header');
      header.showBurgerMenu = false;
    }

    /**
     * This function will handle the click events on all syn-nav-items
     */
    const navItemClickEvent = (e) => {
      const target = e.target.closest('syn-nav-item');
      if (!target) {
        return;
      }
      
      // Update the main page headline to reflect the change
      const navItemText = target.innerText.trim();
      headline.innerText = navItemText + ' Page Content';

      // Update the current indicator
      nav.querySelectorAll('syn-nav-item').forEach(item => {
        item.removeAttribute('current');
        if (item === target) {
          item.setAttribute('current', '');
        }
      });      
    };

    // Add the listener to the given navigation
    nav.addEventListener('click', navItemClickEvent);
  <\/script>
`])),t,i,i),X={parameters:{chromatic:{...M?.parameters?.chromatic,disableSnapshot:!1},design:T("8462-8334"),docs:{description:{component:_("templates","application-shell")},page:()=>a.createElement(a.Fragment,null,a.createElement(x,null),a.createElement(N,null),a.createElement(C,null),a.createElement(E,{title:""})),story:{iframeHeight:550}}},title:"Templates/AppShell"},c={render:()=>n`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${s()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${u()}
        ${l()}
        ${d()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${r()}
    ${f("appshell-side-navigation")}
    ${p("appshell-side-navigation")}
  `},m={render:()=>n(b||(b=h([`
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
         * Make sure the value stays in sync, otherwise the parts my overlap
         */
        --appshell-shrink-nav-open-width: 25rem;

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
  `])),s(),u({noFocusTrapping:!0,open:!0}),l(),d(),r(),f("appshell-shrink"),p("appshell-shrink"))},o={name:"Rail Navigation (Desktop)",parameters:{},render:()=>n`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      ${s()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${u({rail:!0})}
        <div class="synergy-demo-content-inner">
          ${l()}
          ${d()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${r()}
    ${f("appshell-rail-desktop")}
    ${p("appshell-rail-desktop")}

    <style>
      #appshell-rail-desktop .synergy-demo-content {
        flex-direction: row;
      }

      #appshell-rail-desktop .synergy-demo-footer {
        container-type: inline-size;
      }

      @media(max-width: 420px) {
        #appshell-rail-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }

      @container (max-width: 400px) {
        #appshell-rail-desktop .synergy-demo-footer a {
          display: none;
        }
      }
    </style>
  `},y={...o,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0},viewport:{defaultViewport:"mobile2"}}},v={render:()=>n`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      ${s({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${l()}
        ${d()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${r()}
    ${p("appshell-top-navigation","syn-prio-nav")}
  `},g={render:()=>n`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      ${s({withMetaNavigation:!0})}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${l()}
        ${d()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${r()}
    ${p("appshell-white-background","syn-prio-nav")}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-color-neutral-0);
      }
    </style>
  `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
         * Make sure the value stays in sync, otherwise the parts my overlap
         */
        --appshell-shrink-nav-open-width: 25rem;

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
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Rail Navigation (Desktop)',
  parameters: {},
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

      #appshell-rail-desktop .synergy-demo-footer {
        container-type: inline-size;
      }

      @media(max-width: 420px) {
        #appshell-rail-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }

      @container (max-width: 400px) {
        #appshell-rail-desktop .synergy-demo-footer a {
          display: none;
        }
      }
    </style>
  \`
}`,...o.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...RailNavigationDesktop,
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    },
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  \`
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-color-neutral-0);
      }
    </style>
  \`
}`,...g.parameters?.docs?.source}}};const Y=["SideNavigation","SideNavigationShrinkingContent","RailNavigationDesktop","RailNavigationMobile","TopNavigation","WhiteBackground"];export{o as RailNavigationDesktop,y as RailNavigationMobile,c as SideNavigation,m as SideNavigationShrinkingContent,v as TopNavigation,g as WhiteBackground,Y as __namedExportsOrder,X as default};
