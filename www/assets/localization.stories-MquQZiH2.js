import{C as c,b as d,c as l,R as n}from"./iframe-eRvaIELU.js";import{T as m,S as y,b as p,c as g}from"./blocks-DFV-3-DV.js";import{g as r}from"./component-mLh0MrP7.js";import{g as u}from"./localization-Dqkpnm8k.js";import"./prio-nav-BRU9TGY7.js";import"./card-CxZwoGOI.js";import"./dropdown-xIkJLrdm.js";import"./file-DrhaT20V.js";import"./header-CYA81nLe.js";import"./icon-button-CF_JPbZk.js";import"./menu-item-CP3JuO68.js";import"./tooltip-CjfVjlgx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DCFLSkr0.js";import"./controller-BGdn_hBF.js";import"./class-map-BctzS3gw.js";import"./icon.component-ehmpGKuT.js";import"./synergy-element-BVZI5H_G.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./dropdown.component-C_DDugxc.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-BvPV1s9v.js";import"./event-B0iVuGLD.js";import"./popup.component-Dn3dFsqK.js";import"./menu.component-CZc5Zv9Z.js";import"./nav-item.component-DS6CFgYG.js";import"./divider.component-DLGUxJgm.js";import"./slot-9EVoRGQc.js";import"./default-value-B9EDJvRm.js";import"./form-d9hCJUdr.js";import"./form-control.styles-CbH73JDI.js";import"./button.component-c4wtumtF.js";import"./spinner.component-BI3Egrps.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./icon-CqBzwWTC.js";import"./icon-button.component-DulU9jN8.js";import"./tooltip.component-dbbCzFE9.js";var i=Object.freeze,f=Object.defineProperty,h=(e,b)=>i(f(e,"raw",{value:i(e.slice())})),s;const se={parameters:{chromatic:{...d?.parameters?.chromatic,disableSnapshot:!1,modes:c},docs:{description:{component:r("localization","default","templates")},page:()=>n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(y,null),n.createElement(p,null),n.createElement(g,{title:""}))}},tags:["i18n","localization","translations"],title:"Templates/Localization"},t=Object.values(u()),a=t.find(e=>e.$code==="de")||t[0],v=t.map(e=>({code:e.$code,dir:e.$dir,name:e.$name})),o={parameters:{docs:{description:{story:r("localization","dynamicallySetLocalizations","templates")}},synergy:{customImports:t.filter(e=>e.$code==="en"||e.$code==="de").map(e=>`https://esm.sh/@synergy-design-system/components@latest/dist/translations/${e.$code}.js`)}},render:()=>l(s||(s=h([`
    <!-- .synergy-demo-application -->
    <div id="localization-demo-story" class="synergy-demo-application">
      <!-- header -->
      <syn-header label="Localization Demo" sticky>
        <!-- meta-navigation -->
        <nav slot="meta-navigation">
          <syn-dropdown>
            <div slot="trigger">
              <syn-tooltip content="Change language" placement="bottom">
                <syn-icon-button
                  color="neutral"
                  name="language"
                  label="Choose language"
                ></syn-icon-button>
              </syn-tooltip>
            </div>
            <syn-menu>
              `,`
            </syn-menu>
          </syn-dropdown>
        </nav>
        <!-- /meta-navigation -->
      </syn-header>
      <!-- /header -->

      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        <main class="synergy-demo-main">
          <syn-card shadow>
            <h1 class="syn-heading--3x-large">
              Current selected language:
              <span data-current-language>`,`</span>
            </h1>
            <p>
              The following example demonstrates the usage of the <code>&lt;syn-file&gt;</code> component with different language settings.
              The first item will adapt to the currently selected language, while the second one uses a fixed <code>lang="en"</code> attribute, making it fixed to English regardless of the selected language.
            </p>
            <p>
              Try changing the language using the dropdown in the header to see how the first file input updates its translations accordingly.
            </p>
            <div class="form">
              <syn-file droparea></syn-file>
              <syn-file droparea lang="en"></syn-file>
            </div>
          </syn-card>
        </main>
        <!-- /.synergy-demo-main -->
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->

    <style>
      body {
        margin: 0 !important;
        padding: 0 !important;
      }

      .synergy-demo-application {
        display: flex;
        flex-direction: column;
      }

      .synergy-demo-content {
        background: var(--syn-page-background-color-muted);
      }

      .synergy-demo-main {
        display: flex;
        flex-direction: column;
        font: var(--syn-body-medium);
        margin: var(--syn-spacing-medium);

        h1 {
          margin: 0 0 var(--syn-spacing-medium);
        }

        .form {
          display: flex;
          flex-direction: row;
          gap: var(--syn-spacing-medium);
          
          syn-file {
            flex-basis: calc(50% - var(--syn-spacing-medium) / 2);
          }
        }
      }
    </style>

    <script type="module">
    const localizations = `,`;
    const root = document.querySelector('#localization-demo-story');
    const menu = root?.querySelector('#localization-demo-story syn-menu');
    const languageLabel = root?.querySelector('[data-current-language]');

    if (menu && languageLabel) {
      const applyLocale = localeCode => {
        const locale = localizations.find(({ code }) => code === localeCode);
        if (!locale) {
          return;
        }

        document.documentElement.setAttribute('lang', locale.code);
        document.documentElement.setAttribute('dir', locale.dir);
        languageLabel.textContent = locale.name;

        menu
          .querySelectorAll('syn-menu-item')
          .forEach(item => {
            item.toggleAttribute('checked', item.getAttribute('value') === locale.code);
          });
      };

      applyLocale('`,`');

      menu.addEventListener('syn-select', event => {
        const selectedLocaleCode = event.detail?.item?.getAttribute('value') || '`,`';
        applyLocale(selectedLocaleCode);
      });
    }
    <\/script>
  `])),t.map(e=>l`
                <syn-menu-item
                  ?checked=${a.$code===e.$code}
                  type="checkbox"
                  value=${e.$code}
                >${e.$name}</syn-menu-item>
              `),a.$name,JSON.stringify(v,null,2),a.$code,a.$code)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('localization', 'dynamicallySetLocalizations', 'templates')
      }
    },
    synergy: {
      customImports: availableLocalizations.filter(locale => locale.$code === 'en' || locale.$code === 'de') // @todo: Remove this filter once all translations are available, currently we only have English and German translations ready.
      .map(locale => \`https://esm.sh/@synergy-design-system/components@latest/dist/translations/\${locale.$code}.js\`)
    }
  },
  render: () => html\`
    <!-- .synergy-demo-application -->
    <div id="localization-demo-story" class="synergy-demo-application">
      <!-- header -->
      <syn-header label="Localization Demo" sticky>
        <!-- meta-navigation -->
        <nav slot="meta-navigation">
          <syn-dropdown>
            <div slot="trigger">
              <syn-tooltip content="Change language" placement="bottom">
                <syn-icon-button
                  color="neutral"
                  name="language"
                  label="Choose language"
                ></syn-icon-button>
              </syn-tooltip>
            </div>
            <syn-menu>
              \${availableLocalizations.map(locale => html\`
                <syn-menu-item
                  ?checked=\${defaultLocale.$code === locale.$code}
                  type="checkbox"
                  value=\${locale.$code}
                >\${locale.$name}</syn-menu-item>
              \`)}
            </syn-menu>
          </syn-dropdown>
        </nav>
        <!-- /meta-navigation -->
      </syn-header>
      <!-- /header -->

      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        <main class="synergy-demo-main">
          <syn-card shadow>
            <h1 class="syn-heading--3x-large">
              Current selected language:
              <span data-current-language>\${defaultLocale.$name}</span>
            </h1>
            <p>
              The following example demonstrates the usage of the <code>&lt;syn-file&gt;</code> component with different language settings.
              The first item will adapt to the currently selected language, while the second one uses a fixed <code>lang="en"</code> attribute, making it fixed to English regardless of the selected language.
            </p>
            <p>
              Try changing the language using the dropdown in the header to see how the first file input updates its translations accordingly.
            </p>
            <div class="form">
              <syn-file droparea></syn-file>
              <syn-file droparea lang="en"></syn-file>
            </div>
          </syn-card>
        </main>
        <!-- /.synergy-demo-main -->
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->

    <style>
      body {
        margin: 0 !important;
        padding: 0 !important;
      }

      .synergy-demo-application {
        display: flex;
        flex-direction: column;
      }

      .synergy-demo-content {
        background: var(--syn-page-background-color-muted);
      }

      .synergy-demo-main {
        display: flex;
        flex-direction: column;
        font: var(--syn-body-medium);
        margin: var(--syn-spacing-medium);

        h1 {
          margin: 0 0 var(--syn-spacing-medium);
        }

        .form {
          display: flex;
          flex-direction: row;
          gap: var(--syn-spacing-medium);
          
          syn-file {
            flex-basis: calc(50% - var(--syn-spacing-medium) / 2);
          }
        }
      }
    </style>

    <script type="module">
    const localizations = \${JSON.stringify(localizedValues, null, 2)};
    const root = document.querySelector('#localization-demo-story');
    const menu = root?.querySelector('#localization-demo-story syn-menu');
    const languageLabel = root?.querySelector('[data-current-language]');

    if (menu && languageLabel) {
      const applyLocale = localeCode => {
        const locale = localizations.find(({ code }) => code === localeCode);
        if (!locale) {
          return;
        }

        document.documentElement.setAttribute('lang', locale.code);
        document.documentElement.setAttribute('dir', locale.dir);
        languageLabel.textContent = locale.name;

        menu
          .querySelectorAll('syn-menu-item')
          .forEach(item => {
            item.toggleAttribute('checked', item.getAttribute('value') === locale.code);
          });
      };

      applyLocale('\${defaultLocale.$code}');

      menu.addEventListener('syn-select', event => {
        const selectedLocaleCode = event.detail?.item?.getAttribute('value') || '\${defaultLocale.$code}';
        applyLocale(selectedLocaleCode);
      });
    }
    <\/script>
  \`
}`,...o.parameters?.docs?.source}}};const re=["DynamicallySetLocalizations"];export{o as DynamicallySetLocalizations,re as __namedExportsOrder,se as default};
