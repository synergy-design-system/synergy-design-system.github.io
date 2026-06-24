import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{c as n,t as r}from"./lit-BVDl_-fF.js";import{B as i,f as a,g as o,n as s,t as c}from"./iframe-BCoUYk3Z.js";import{d as l,f as u,i as d,p as f,u as p}from"./blocks-BZ8QpweS.js";import{t as m}from"./card-BG5kBVOD.js";import{n as h,r as g}from"./component-CzEJor_j.js";import{n as _,t as v}from"./taggedTemplateLiteral-pWa2IaV6.js";import{n as y,t as b}from"./menu-item-Dnn5gZrP.js";import{t as x}from"./dropdown-BxXQWCjP.js";import{t as S}from"./tooltip-DbF89RP5.js";import{t as C}from"./icon-button-DqLBscEj.js";import{t as w}from"./file-CTEx0O5L.js";import{t as T}from"./prio-nav-CkZl-6Eu.js";import{t as E}from"./header-EqpFURHH.js";import{n as D,t as O}from"./localization-DYHno_I0.js";var k,A,j,M,N,P,F,I;e((()=>{k=t(i(),1),f(),r(),c(),g(),o(),D(),T(),m(),x(),w(),E(),C(),y(),b(),S(),_(),j={parameters:{chromatic:{...s?.parameters?.chromatic,disableSnapshot:!1,modes:a},docs:{description:{component:h(`localization`,`default`,`templates`)},page:()=>k.createElement(k.Fragment,null,k.createElement(u,null),k.createElement(l,null),k.createElement(d,null),k.createElement(p,{title:``}))}},tags:[`i18n`,`localization`,`translations`],title:`Templates/Localization`},M=Object.values(O()),N=M.find(e=>e.$code===`de`)||M[0],P=M.map(e=>({code:e.$code,dir:e.$dir,name:e.$name})),F={parameters:{docs:{description:{story:h(`localization`,`dynamicallySetLocalizations`,`templates`)}},synergy:{customImports:M.filter(e=>e.$code===`en`||e.$code===`de`).map(e=>`https://esm.sh/@synergy-design-system/components@latest/dist/translations/${e.$code}.js`)}},render:()=>n(A||=v([`
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
  `]),M.map(e=>n`
                <syn-menu-item
                  ?checked=${N.$code===e.$code}
                  type="checkbox"
                  value=${e.$code}
                >${e.$name}</syn-menu-item>
              `),N.$name,JSON.stringify(P,null,2),N.$code,N.$code)},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`DynamicallySetLocalizations`]}))();export{F as DynamicallySetLocalizations,I as __namedExportsOrder,j as default};