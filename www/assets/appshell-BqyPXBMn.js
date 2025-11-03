import{x as i}from"./iframe-1WR4Bimk.js";import{g as n}from"./translations-CnhJ1T76.js";import"./nav-item-CT-a4kH7.js";import"./prio-nav-B3_eQtZm.js";import"./header-xl9j4COL.js";import"./dropdown-x9q-kdk7.js";import"./icon-button-N2eo87sn.js";import"./menu-item-Coe2v7xp.js";import"./side-nav-CwkT9anJ.js";import"./icon-CqOGZ9mb.js";var a=Object.freeze,c=Object.defineProperty,r=(e,t)=>a(c(e,"raw",{value:a(e.slice())})),o,s;const b=()=>i`
  <!-- footer -->
  <style>
    .synergy-footer-demo {
      container-type: inline-size;
    }

    .footer-content {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: var(--syn-spacing-x-large);
      justify-content: space-between;
      padding: var(--syn-spacing-large) var(--syn-spacing-2x-large);
    }

    .copyright {
      font: var(--syn-body-small-bold);
      margin: 0;
    }

    @container (max-width: 640px) {
      .syn-link-list {
        flex-direction: column;
      }

      .footer-content {
        align-items: flex-start;
        flex-direction: column;
        padding: var(--syn-spacing-large) var(--syn-spacing-medium);
      }
    }
  </style>
  <footer class="synergy-footer-demo">
    <nav class="footer-content" aria-label="Footer navigation">
      <ul class="syn-link-list syn-link-list--medium syn-link-list--horizontal">
        <li>
          <a class="syn-link syn-link--medium syn-link--quiet" href="${n("footer.linksHref.imprint")}">
            ${n("footer.linksName.imprint")}
          </a>
        </li>
        <li>
          <a class="syn-link syn-link--medium syn-link--quiet" href="${n("footer.linksHref.termsConditions")}">
            ${n("footer.linksName.termsConditions")}
          </a>
        </li>
        <li>
          <a class="syn-link syn-link--medium syn-link--quiet" href="${n("footer.linksHref.termsOfUse")}">
            ${n("footer.linksName.termsOfUse")}
          </a>
        </li>
        <li>
          <a class="syn-link syn-link--medium syn-link--quiet" href="${n("footer.linksHref.privacyPolicy")}">
            ${n("footer.linksName.privacyPolicy")}
          </a>
        </li>
      </ul>
      <p class="copyright">&copy; 2025 SICK AG</p>
    </nav>
  </footer>
  <!-- /footer -->
`,$=()=>i`
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
      container-type: inline-size;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 550px;
    }

    .synergy-demo-content {
      background: var(--syn-page-background);
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      height: 1%;
      position: relative;
    }

    .synergy-demo-content-inner {
      container-type: inline-size;
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

    @container (max-width: 640px) {
      .synergy-demo-main {
        margin: var(--syn-spacing-medium) var(--syn-spacing-medium) 0;
      }
    }

    .synergy-demo-main h1 {
      color: var(--syn-typography-color-text);
      font: var(--syn-heading-large);
      margin: 0;
      text-align: center;
    }
  </style>
`,y=()=>i`
  <!-- prio-nav -->
  <syn-prio-nav slot="navigation">
    <syn-nav-item current horizontal>${n("appShell.navigation.home")}</syn-nav-item>
    <syn-nav-item horizontal>${n("appShell.navigation.documents")}</syn-nav-item>
    <syn-nav-item horizontal>${n("appShell.navigation.applications")}</syn-nav-item>
    <syn-nav-item horizontal>${n("appShell.navigation.teams")}</syn-nav-item>
  </syn-prio-nav>
  <!-- /prio-nav -->
`,N=({withMetaNavigation:e=!1}={})=>i`
  <!-- header -->
  <syn-header label="${n("appShell.appName")}">
    
    ${e?y():""}

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
          <syn-menu-item>${n("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${n("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${n("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${n("appShell.metaNavigation.menuItem")}</syn-menu-item>
          <syn-menu-item>${n("appShell.metaNavigation.menuItem")}</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </nav>
    <!-- /meta-navigation -->
  </syn-header>
  <!-- /header -->
`,w=({noFocusTrapping:e=!1,open:t=!1,variant:l="default",hasFooter:m=!0}={})=>i`
  <!-- side-navigation -->
  <syn-side-nav
    ?no-focus-trapping=${e}
    ?open=${t}
    variant=${l}
  >
    <syn-nav-item current>
      <syn-icon name="home" slot="prefix"></syn-icon>
      ${n("appShell.navigation.start")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="spoke" slot="prefix"></syn-icon>
      ${n("appShell.navigation.workspaces")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="insert_drive_file" slot="prefix"></syn-icon>
      ${n("appShell.navigation.documents")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="wb_cloudy" slot="prefix"></syn-icon>
      ${n("appShell.navigation.cloud")}
    </syn-nav-item>
    <syn-nav-item divider>
      <syn-icon name="volunteer_activism" slot="prefix"></syn-icon>
      ${n("appShell.navigation.feedback")}
    </syn-nav-item>

    ${m?i`<syn-nav-item slot="footer">
      <syn-icon name="settings" slot="prefix"></syn-icon>
      ${n("appShell.navigation.settings")}
    </syn-nav-item>
    <syn-nav-item slot="footer" divider>
      <syn-icon name="logout" slot="prefix"></syn-icon>
      ${n("appShell.navigation.logout")}
    </syn-nav-item>`:""}
  </syn-side-nav>
  <!-- /side-navigation -->
`,_=()=>i`
  <main class="synergy-demo-main">
    <h1>Start Page Content</h1>
    ${n("appShell.mainSlot")}
  </main>
`,q=e=>i(o||(o=r([`
  <script type="module">
    // This is only done because in storybooks
    // doc overview multiple side-navs and headers exist.
    // Per default, the header will connect to the first side-nav automatically.
    const applications = document.querySelectorAll('#`,`');

    Array.from(applications).forEach((application, index) => {
      const selector = 'story-loaded-'.concat(index);
      if(!application.classList.contains(selector)) {
        const header = application.querySelector('syn-header');
        const sideNav = application.querySelector('syn-side-nav');
        if (sideNav && header) {
          header.connectSideNavigation(sideNav);
        } else if(!sideNav && header) {
          header.burgerMenu = 'hidden';
        }
        application.classList.add(selector);
      }
    });
  <\/script>
`])),e),C=(e,t="syn-side-nav")=>i(s||(s=r([`
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
`])),e,t,t);export{w as a,_ as b,N as c,b as d,$ as e,q as f,C as g};
