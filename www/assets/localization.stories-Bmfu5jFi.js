import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r,n as i,t as a}from"./preview-Br8gqwpX.js";import{c as o,t as s}from"./lit-DgWh_IaA.js";import{d as c,f as l,i as u,p as d,u as f}from"./blocks-CjiNIppL.js";import{t as p}from"./react-BZJXY1be.js";import{t as m}from"./card-Dl4bMX8a.js";import{n as h,r as g}from"./component-iQCIgMPU.js";import{t as _}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as v,t as y}from"./menu-item-BSPcAHyj.js";import{t as b}from"./dropdown-BMjKUfaW.js";import{t as x}from"./tooltip-D5nZBZLI.js";import{t as S}from"./icon-button-D3xSJEzV.js";import{t as C}from"./file-CYDV-mZA.js";import{t as w}from"./prio-nav-DK2WLOBJ.js";import{t as T}from"./header-Ch34E09S.js";import{n as E,t as D}from"./localization-C1oAmRRX.js";var O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{O=e(p(),1),d(),s(),a(),g(),r(),E(),w(),m(),b(),C(),T(),S(),v(),y(),x(),A={parameters:{chromatic:{...i?.parameters?.chromatic,disableSnapshot:!1,modes:n},docs:{description:{component:h(`localization`,`default`,`templates`)},page:()=>O.createElement(O.Fragment,null,O.createElement(l,null),O.createElement(c,null),O.createElement(u,null),O.createElement(f,{title:``}))}},tags:[`i18n`,`localization`,`translations`],title:`Templates/Localization`},j=Object.values(D()),M=j.find(e=>e.$code===`de`)||j[0],N=j.map(e=>({code:e.$code,dir:e.$dir,name:e.$name})),P={parameters:{docs:{description:{story:h(`localization`,`dynamicallySetLocalizations`,`templates`)}},synergy:{customImports:j.filter(e=>e.$code===`en`||e.$code===`de`).map(e=>`https://esm.sh/@synergy-design-system/components@latest/dist/translations/${e.$code}.js`)}},render:()=>o(k||=_([`
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
  `]),j.map(e=>o`
                <syn-menu-item
                  ?checked=${M.$code===e.$code}
                  type="checkbox"
                  value=${e.$code}
                >${e.$name}</syn-menu-item>
              `),M.$name,JSON.stringify(N,null,2),M.$code,M.$code)},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`DynamicallySetLocalizations`]})))()}I();export{P as DynamicallySetLocalizations,F as __namedExportsOrder,A as default};