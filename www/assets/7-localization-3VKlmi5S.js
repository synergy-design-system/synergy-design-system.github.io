import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,c as n,l as r,p as i}from"./blocks-Djr6a2r4.js";import{s as a}from"./chunk-LITCR56V-DIeNVHAC.js";import{t as o}from"./mdx-react-shim-C4h4q6jG.js";import{n as s,t as c}from"./localization-DYHno_I0.js";function l(e){let i={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Packages/Components/Localization`,tags:[`i18n`,`localization`,`translations`]}),`
`,(0,d.jsx)(i.h1,{id:`localizing-synergy-components`,children:`Localizing Synergy components`}),`
`,(0,d.jsxs)(i.p,{children:[`Components can be localized by importing the appropriate translation file and setting the desired `,(0,d.jsx)(i.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang`,rel:`nofollow`,children:(0,d.jsx)(i.code,{children:`lang`})}),` attribute and/or `,(0,d.jsx)(i.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir`,rel:`nofollow`,children:(0,d.jsx)(i.code,{children:`dir`})}),` attribute on the `,(0,d.jsx)(i.code,{children:`<html>`}),` element.
Changing the lang attribute will automatically update all localized components to use the new locale.`]}),`
`,(0,d.jsxs)(i.blockquote,{children:[`
`,(0,d.jsxs)(i.p,{children:[`Synergy provides a localization mechanism for component internals.
This is `,(0,d.jsx)(i.strong,{children:`not`}),` designed to be used as localization tool for your entire application.
You should use a more appropriate tool if you need to localize content in your app.`]}),`
`]}),`
`,(0,d.jsx)(i.h2,{id:`static-examples`,children:`Static examples`}),`
`,(0,d.jsx)(i.p,{children:`Here’s an example that renders Synergy components in Spanish, using plain html.`}),`
`,(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:`language-html`,children:`<html lang="es">
  <head>
    <script type="module" src="/path/to/synergy/dist/translations/es.js"><\/script>
  </head>
  <body>...</body>
</html>
`})}),`
`,(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:`language-html`,children:`<html>
  <body>...</body>
  <script type="module">
    // Alternative usage via Javascript.
    // Same as setting <html lang="es">
    import '@synergy-design-system/components/translations/es.js';
    document.documentElement.lang = 'es';
  <\/script>
</html>
`})}),`
`,(0,d.jsx)(i.h2,{id:`translation-resolution`,children:`Translation resolution`}),`
`,(0,d.jsxs)(i.p,{children:[`The locale set by `,(0,d.jsx)(i.code,{children:`<html lang="...">`}),` is the default locale for the document.
If a country code is provided, e.g. `,(0,d.jsx)(i.code,{children:`es-PE`}),` for Peruvian Spanish, the localization library will resolve it like this:`]}),`
`,(0,d.jsxs)(i.ol,{children:[`
`,(0,d.jsxs)(i.li,{children:[`Look for `,(0,d.jsx)(i.code,{children:`es-PE`})]}),`
`,(0,d.jsxs)(i.li,{children:[`Look for `,(0,d.jsx)(i.code,{children:`es`})]}),`
`,(0,d.jsxs)(i.li,{children:[`Fall back to `,(0,d.jsx)(i.code,{children:`en`})]}),`
`]}),`
`,(0,d.jsx)(i.p,{children:`Synergy uses English as a fallback to provide a better experience than rendering nothing or throwing an error.`}),`
`,(0,d.jsx)(i.h2,{id:`multiple-locales-per-page`,children:`Multiple locales per page`}),`
`,(0,d.jsxs)(i.p,{children:[`You can use a different locale for an individual component by setting its `,(0,d.jsx)(i.code,{children:`lang`}),` and/or `,(0,d.jsx)(i.code,{children:`dir`}),` attributes.
Here is a contrived example to demonstrate.`]}),`
`,(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:`language-html`,children:`<html lang="es">
  <body>
    <syn-button><!-- Spanish --></syn-button>
    <syn-button lang="ru"><!-- Russian --></syn-button>
  </body>
</html>
`})}),`
`,(0,d.jsxs)(i.p,{children:[`For performance reasons, the `,(0,d.jsx)(i.code,{children:`lang`}),` and `,(0,d.jsx)(i.code,{children:`dir`}),` attributes must be on the component itself, not on an ancestor element.
This limitation exists because there’s no efficient way to determine the current locale of a given element in a DOM tree.`]}),`
`,(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:`language-html`,children:`<html lang="es">
  <body>
    <div lang="ru">
      <syn-button><!-- still in Spanish --></syn-button>
    </div>
  </body>
</html>
`})}),`
`,(0,d.jsx)(i.h2,{id:`available-localizations`,children:`Available localizations`}),`
`,(0,d.jsxs)(i.p,{children:[`Synergy ships with a number of translations.
The default is English (US), which also serves as the fallback locale.
As such, you do not need to import the English translation.
To see a list of all available translations in the latest version, `,(0,d.jsx)(i.a,{href:`https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/components/src/translations`,rel:`nofollow`,children:`refer to this directory`}),`.`]}),`
`,(0,d.jsxs)(i.p,{children:[`You do not need to load translations up front.
You can import them dynamically even after updating the `,(0,d.jsx)(i.code,{children:`lang`}),` attribute.
Once a translation is registered, localized components will update automatically.`]}),`
`,(0,d.jsxs)(`table`,{className:`syn-table--alternating syn-table--border`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{children:`Language`}),(0,d.jsx)(`th`,{children:`ISO Code`}),(0,d.jsx)(`th`,{children:`Spelling direction`}),(0,d.jsx)(`th`,{children:`Usage example`})]})}),(0,d.jsx)(`tbody`,{children:Object.entries(c()).map(([e,t])=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:t.$name}),(0,d.jsx)(`td`,{children:t.$code}),(0,d.jsx)(`td`,{children:t.$dir}),(0,d.jsx)(`td`,{children:(0,d.jsx)(n,{children:`
\`\`\`javascript
import '@synergy-design-system/components/translations/${e}.js';
document.documentElement.lang = '${t.$code}';
\`\`\`
        `})})]},t.$code))})]})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=a(),o(),i(),s()}))();export{u as default};